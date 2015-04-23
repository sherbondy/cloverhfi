// Compiled by ClojureScript 0.0-3211 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');

figwheel.client.file_reloading.all_QMARK_ = (function figwheel$client$file_reloading$all_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (p1__29070_SHARP_,p2__29071_SHARP_){
var and__17941__auto__ = p1__29070_SHARP_;
if(cljs.core.truth_(and__17941__auto__)){
return p2__29071_SHARP_;
} else {
return and__17941__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__17953__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__17953__auto__){
return or__17953__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.ns_to_js_file = (function figwheel$client$file_reloading$ns_to_js_file(ns){

return [cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){

return [cljs.core.str(clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__29073_SHARP_,p2__29072_SHARP_){
return [cljs.core.str(p2__29072_SHARP_)].join('');
}))),cljs.core.str(figwheel.client.file_reloading.ns_to_js_file.call(null,ns))].join('');
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
goog.isProvided_ = (function (x){
return false;
});

if(((cljs.core._STAR_loaded_libs_STAR_ == null)) || (cljs.core.empty_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_))){
cljs.core._STAR_loaded_libs_STAR_ = (function (){var gntp = goog.dependencies_.nameToPath;
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (gntp){
return (function (name){
return (goog.dependencies_.visited[(gntp[name])]);
});})(gntp))
,cljs.core.js_keys.call(null,gntp)));
})();
} else {
}

goog.require = (function (name,reload){
if(cljs.core.truth_((function (){var or__17953__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__17953__auto__){
return or__17953__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__17953__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__17953__auto__)){
return or__17953__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),name);

return figwheel.client.file_reloading.reload_file_STAR_.call(null,figwheel.client.file_reloading.resolve_ns.call(null,name));
} else {
return null;
}
});

goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.reload_file_STAR_;
});
if(typeof figwheel.client.file_reloading.resolve_url !== 'undefined'){
} else {
figwheel.client.file_reloading.resolve_url = (function (){var method_table__18848__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__18849__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__18850__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__18851__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__18852__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__18852__auto__,method_table__18848__auto__,prefer_table__18849__auto__,method_cache__18850__auto__,cached_hierarchy__18851__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__29074){
var map__29075 = p__29074;
var map__29075__$1 = ((cljs.core.seq_QMARK_.call(null,map__29075))?cljs.core.apply.call(null,cljs.core.hash_map,map__29075):map__29075);
var file = cljs.core.get.call(null,map__29075__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__29076){
var map__29077 = p__29076;
var map__29077__$1 = ((cljs.core.seq_QMARK_.call(null,map__29077))?cljs.core.apply.call(null,cljs.core.hash_map,map__29077):map__29077);
var namespace = cljs.core.get.call(null,map__29077__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
if(typeof figwheel.client.file_reloading.reload_base !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_base = (function (){var method_table__18848__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__18849__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__18850__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__18851__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__18852__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__18852__auto__,method_table__18848__auto__,prefer_table__18849__auto__,method_cache__18850__auto__,cached_hierarchy__18851__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e29078){if((e29078 instanceof Error)){
var e = e29078;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29078;

}
}})());
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"html","html",-998796897),(function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
}));
figwheel.client.file_reloading.reload_file_STAR_ = (function figwheel$client$file_reloading$reload_file_STAR_(){
var G__29080 = arguments.length;
switch (G__29080) {
case 2:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (request_url){
return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,cljs.core.identity);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__29082,callback){
var map__29084 = p__29082;
var map__29084__$1 = ((cljs.core.seq_QMARK_.call(null,map__29084))?cljs.core.apply.call(null,cljs.core.hash_map,map__29084):map__29084);
var file_msg = map__29084__$1;
var request_url = cljs.core.get.call(null,map__29084__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__29084,map__29084__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__29084,map__29084__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__29085){
var map__29087 = p__29085;
var map__29087__$1 = ((cljs.core.seq_QMARK_.call(null,map__29087))?cljs.core.apply.call(null,cljs.core.hash_map,map__29087):map__29087);
var file_msg = map__29087__$1;
var meta_data = cljs.core.get.call(null,map__29087__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var namespace = cljs.core.get.call(null,map__29087__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_data__$1 = (function (){var or__17953__auto__ = meta_data;
if(cljs.core.truth_(or__17953__auto__)){
return or__17953__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__17941__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__17941__auto__){
var or__17953__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__17953__auto__)){
return or__17953__auto__;
} else {
var or__17953__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__17953__auto____$1)){
return or__17953__auto____$1;
} else {
var and__17941__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__17941__auto____$1){
var or__17953__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__17953__auto____$2){
return or__17953__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__17941__auto____$1;
}
}
}
} else {
return and__17941__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__29088,callback){
var map__29090 = p__29088;
var map__29090__$1 = ((cljs.core.seq_QMARK_.call(null,map__29090))?cljs.core.apply.call(null,cljs.core.hash_map,map__29090):map__29090);
var file_msg = map__29090__$1;
var namespace = cljs.core.get.call(null,map__29090__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__29090__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.reload_file.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
setTimeout(((function (out){
return (function (){
return figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
figwheel.client.file_reloading.patch_goog_base.call(null);

cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
});})(out))
,(0));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__20007__auto___29177 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20007__auto___29177,out){
return (function (){
var f__20008__auto__ = (function (){var switch__19945__auto__ = ((function (c__20007__auto___29177,out){
return (function (state_29159){
var state_val_29160 = (state_29159[(1)]);
if((state_val_29160 === (7))){
var inst_29143 = (state_29159[(7)]);
var inst_29149 = (state_29159[(2)]);
var inst_29150 = cljs.core.async.put_BANG_.call(null,out,inst_29149);
var inst_29139 = inst_29143;
var state_29159__$1 = (function (){var statearr_29161 = state_29159;
(statearr_29161[(8)] = inst_29139);

(statearr_29161[(9)] = inst_29150);

return statearr_29161;
})();
var statearr_29162_29178 = state_29159__$1;
(statearr_29162_29178[(2)] = null);

(statearr_29162_29178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29160 === (6))){
var inst_29155 = (state_29159[(2)]);
var state_29159__$1 = state_29159;
var statearr_29163_29179 = state_29159__$1;
(statearr_29163_29179[(2)] = inst_29155);

(statearr_29163_29179[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29160 === (5))){
var inst_29153 = cljs.core.async.close_BANG_.call(null,out);
var state_29159__$1 = state_29159;
var statearr_29164_29180 = state_29159__$1;
(statearr_29164_29180[(2)] = inst_29153);

(statearr_29164_29180[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29160 === (4))){
var inst_29142 = (state_29159[(10)]);
var inst_29147 = figwheel.client.file_reloading.reload_js_file.call(null,inst_29142);
var state_29159__$1 = state_29159;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29159__$1,(7),inst_29147);
} else {
if((state_val_29160 === (3))){
var inst_29157 = (state_29159[(2)]);
var state_29159__$1 = state_29159;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29159__$1,inst_29157);
} else {
if((state_val_29160 === (2))){
var inst_29139 = (state_29159[(8)]);
var inst_29142 = (state_29159[(10)]);
var inst_29142__$1 = cljs.core.nth.call(null,inst_29139,(0),null);
var inst_29143 = cljs.core.nthnext.call(null,inst_29139,(1));
var inst_29144 = (inst_29142__$1 == null);
var inst_29145 = cljs.core.not.call(null,inst_29144);
var state_29159__$1 = (function (){var statearr_29165 = state_29159;
(statearr_29165[(10)] = inst_29142__$1);

(statearr_29165[(7)] = inst_29143);

return statearr_29165;
})();
if(inst_29145){
var statearr_29166_29181 = state_29159__$1;
(statearr_29166_29181[(1)] = (4));

} else {
var statearr_29167_29182 = state_29159__$1;
(statearr_29167_29182[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29160 === (1))){
var inst_29137 = cljs.core.nth.call(null,files,(0),null);
var inst_29138 = cljs.core.nthnext.call(null,files,(1));
var inst_29139 = files;
var state_29159__$1 = (function (){var statearr_29168 = state_29159;
(statearr_29168[(8)] = inst_29139);

(statearr_29168[(11)] = inst_29138);

(statearr_29168[(12)] = inst_29137);

return statearr_29168;
})();
var statearr_29169_29183 = state_29159__$1;
(statearr_29169_29183[(2)] = null);

(statearr_29169_29183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__20007__auto___29177,out))
;
return ((function (switch__19945__auto__,c__20007__auto___29177,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19946__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19946__auto____0 = (function (){
var statearr_29173 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29173[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19946__auto__);

(statearr_29173[(1)] = (1));

return statearr_29173;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19946__auto____1 = (function (state_29159){
while(true){
var ret_value__19947__auto__ = (function (){try{while(true){
var result__19948__auto__ = switch__19945__auto__.call(null,state_29159);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19948__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19948__auto__;
}
break;
}
}catch (e29174){if((e29174 instanceof Object)){
var ex__19949__auto__ = e29174;
var statearr_29175_29184 = state_29159;
(statearr_29175_29184[(5)] = ex__19949__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29159);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29174;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29185 = state_29159;
state_29159 = G__29185;
continue;
} else {
return ret_value__19947__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19946__auto__ = function(state_29159){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19946__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19946__auto____1.call(this,state_29159);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19946__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19946__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19946__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19946__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19946__auto__;
})()
;})(switch__19945__auto__,c__20007__auto___29177,out))
})();
var state__20009__auto__ = (function (){var statearr_29176 = f__20008__auto__.call(null);
(statearr_29176[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20007__auto___29177);

return statearr_29176;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20009__auto__);
});})(c__20007__auto___29177,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__29186,p__29187){
var map__29190 = p__29186;
var map__29190__$1 = ((cljs.core.seq_QMARK_.call(null,map__29190))?cljs.core.apply.call(null,cljs.core.hash_map,map__29190):map__29190);
var opts = map__29190__$1;
var url_rewriter = cljs.core.get.call(null,map__29190__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__29191 = p__29187;
var map__29191__$1 = ((cljs.core.seq_QMARK_.call(null,map__29191))?cljs.core.apply.call(null,cljs.core.hash_map,map__29191):map__29191);
var file_msg = map__29191__$1;
var file = cljs.core.get.call(null,map__29191__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__29192){
var map__29195 = p__29192;
var map__29195__$1 = ((cljs.core.seq_QMARK_.call(null,map__29195))?cljs.core.apply.call(null,cljs.core.hash_map,map__29195):map__29195);
var file = cljs.core.get.call(null,map__29195__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var eval_body__$1 = cljs.core.get.call(null,map__29195__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
if(cljs.core.truth_((function (){var and__17941__auto__ = eval_body__$1;
if(cljs.core.truth_(and__17941__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__17941__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return eval(code);
}catch (e29196){var e = e29196;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__29201,p__29202){
var map__29403 = p__29201;
var map__29403__$1 = ((cljs.core.seq_QMARK_.call(null,map__29403))?cljs.core.apply.call(null,cljs.core.hash_map,map__29403):map__29403);
var opts = map__29403__$1;
var load_unchanged_files = cljs.core.get.call(null,map__29403__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var on_jsload = cljs.core.get.call(null,map__29403__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__29403__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__29404 = p__29202;
var map__29404__$1 = ((cljs.core.seq_QMARK_.call(null,map__29404))?cljs.core.apply.call(null,cljs.core.hash_map,map__29404):map__29404);
var msg = map__29404__$1;
var files = cljs.core.get.call(null,map__29404__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__20007__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20007__auto__,map__29403,map__29403__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29404,map__29404__$1,msg,files){
return (function (){
var f__20008__auto__ = (function (){var switch__19945__auto__ = ((function (c__20007__auto__,map__29403,map__29403__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29404,map__29404__$1,msg,files){
return (function (state_29528){
var state_val_29529 = (state_29528[(1)]);
if((state_val_29529 === (7))){
var inst_29418 = (state_29528[(7)]);
var inst_29417 = (state_29528[(8)]);
var inst_29416 = (state_29528[(9)]);
var inst_29415 = (state_29528[(10)]);
var inst_29423 = cljs.core._nth.call(null,inst_29416,inst_29418);
var inst_29424 = figwheel.client.file_reloading.eval_body.call(null,inst_29423);
var inst_29425 = (inst_29418 + (1));
var tmp29530 = inst_29417;
var tmp29531 = inst_29416;
var tmp29532 = inst_29415;
var inst_29415__$1 = tmp29532;
var inst_29416__$1 = tmp29531;
var inst_29417__$1 = tmp29530;
var inst_29418__$1 = inst_29425;
var state_29528__$1 = (function (){var statearr_29533 = state_29528;
(statearr_29533[(11)] = inst_29424);

(statearr_29533[(7)] = inst_29418__$1);

(statearr_29533[(8)] = inst_29417__$1);

(statearr_29533[(9)] = inst_29416__$1);

(statearr_29533[(10)] = inst_29415__$1);

return statearr_29533;
})();
var statearr_29534_29603 = state_29528__$1;
(statearr_29534_29603[(2)] = null);

(statearr_29534_29603[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29529 === (20))){
var inst_29467 = (state_29528[(12)]);
var inst_29465 = (state_29528[(13)]);
var inst_29461 = (state_29528[(14)]);
var inst_29460 = (state_29528[(15)]);
var inst_29464 = (state_29528[(16)]);
var inst_29470 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_29472 = (function (){var files_not_loaded = inst_29467;
var res = inst_29465;
var res_SINGLEQUOTE_ = inst_29464;
var files_SINGLEQUOTE_ = inst_29461;
var all_files = inst_29460;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_29467,inst_29465,inst_29461,inst_29460,inst_29464,inst_29470,state_val_29529,c__20007__auto__,map__29403,map__29403__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29404,map__29404__$1,msg,files){
return (function (p__29471){
var map__29535 = p__29471;
var map__29535__$1 = ((cljs.core.seq_QMARK_.call(null,map__29535))?cljs.core.apply.call(null,cljs.core.hash_map,map__29535):map__29535);
var file = cljs.core.get.call(null,map__29535__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var namespace = cljs.core.get.call(null,map__29535__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_29467,inst_29465,inst_29461,inst_29460,inst_29464,inst_29470,state_val_29529,c__20007__auto__,map__29403,map__29403__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29404,map__29404__$1,msg,files))
})();
var inst_29473 = cljs.core.map.call(null,inst_29472,inst_29465);
var inst_29474 = cljs.core.pr_str.call(null,inst_29473);
var inst_29475 = figwheel.client.utils.log.call(null,inst_29474);
var inst_29476 = (function (){var files_not_loaded = inst_29467;
var res = inst_29465;
var res_SINGLEQUOTE_ = inst_29464;
var files_SINGLEQUOTE_ = inst_29461;
var all_files = inst_29460;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_29467,inst_29465,inst_29461,inst_29460,inst_29464,inst_29470,inst_29472,inst_29473,inst_29474,inst_29475,state_val_29529,c__20007__auto__,map__29403,map__29403__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29404,map__29404__$1,msg,files){
return (function (){
return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_29467,inst_29465,inst_29461,inst_29460,inst_29464,inst_29470,inst_29472,inst_29473,inst_29474,inst_29475,state_val_29529,c__20007__auto__,map__29403,map__29403__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29404,map__29404__$1,msg,files))
})();
var inst_29477 = setTimeout(inst_29476,(10));
var state_29528__$1 = (function (){var statearr_29536 = state_29528;
(statearr_29536[(17)] = inst_29475);

(statearr_29536[(18)] = inst_29470);

return statearr_29536;
})();
var statearr_29537_29604 = state_29528__$1;
(statearr_29537_29604[(2)] = inst_29477);

(statearr_29537_29604[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29529 === (27))){
var inst_29487 = (state_29528[(19)]);
var state_29528__$1 = state_29528;
var statearr_29538_29605 = state_29528__$1;
(statearr_29538_29605[(2)] = inst_29487);

(statearr_29538_29605[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29529 === (1))){
var inst_29407 = (state_29528[(20)]);
var inst_29405 = before_jsload.call(null,files);
var inst_29406 = (function (){return ((function (inst_29407,inst_29405,state_val_29529,c__20007__auto__,map__29403,map__29403__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29404,map__29404__$1,msg,files){
return (function (p1__29197_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29197_SHARP_);
});
;})(inst_29407,inst_29405,state_val_29529,c__20007__auto__,map__29403,map__29403__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29404,map__29404__$1,msg,files))
})();
var inst_29407__$1 = cljs.core.filter.call(null,inst_29406,files);
var inst_29408 = cljs.core.not_empty.call(null,inst_29407__$1);
var state_29528__$1 = (function (){var statearr_29539 = state_29528;
(statearr_29539[(20)] = inst_29407__$1);

(statearr_29539[(21)] = inst_29405);

return statearr_29539;
})();
if(cljs.core.truth_(inst_29408)){
var statearr_29540_29606 = state_29528__$1;
(statearr_29540_29606[(1)] = (2));

} else {
var statearr_29541_29607 = state_29528__$1;
(statearr_29541_29607[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29529 === (24))){
var state_29528__$1 = state_29528;
var statearr_29542_29608 = state_29528__$1;
(statearr_29542_29608[(2)] = null);

(statearr_29542_29608[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29529 === (4))){
var inst_29452 = (state_29528[(2)]);
var inst_29453 = (function (){return ((function (inst_29452,state_val_29529,c__20007__auto__,map__29403,map__29403__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29404,map__29404__$1,msg,files){
return (function (p1__29198_SHARP_){
var and__17941__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29198_SHARP_);
if(cljs.core.truth_(and__17941__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29198_SHARP_));
} else {
return and__17941__auto__;
}
});
;})(inst_29452,state_val_29529,c__20007__auto__,map__29403,map__29403__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29404,map__29404__$1,msg,files))
})();
var inst_29454 = cljs.core.filter.call(null,inst_29453,files);
var state_29528__$1 = (function (){var statearr_29543 = state_29528;
(statearr_29543[(22)] = inst_29454);

(statearr_29543[(23)] = inst_29452);

return statearr_29543;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_29544_29609 = state_29528__$1;
(statearr_29544_29609[(1)] = (16));

} else {
var statearr_29545_29610 = state_29528__$1;
(statearr_29545_29610[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29529 === (15))){
var inst_29442 = (state_29528[(2)]);
var state_29528__$1 = state_29528;
var statearr_29546_29611 = state_29528__$1;
(statearr_29546_29611[(2)] = inst_29442);

(statearr_29546_29611[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29529 === (21))){
var state_29528__$1 = state_29528;
var statearr_29547_29612 = state_29528__$1;
(statearr_29547_29612[(2)] = null);

(statearr_29547_29612[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29529 === (31))){
var inst_29495 = (state_29528[(24)]);
var inst_29505 = (state_29528[(2)]);
var inst_29506 = cljs.core.not_empty.call(null,inst_29495);
var state_29528__$1 = (function (){var statearr_29548 = state_29528;
(statearr_29548[(25)] = inst_29505);

return statearr_29548;
})();
if(cljs.core.truth_(inst_29506)){
var statearr_29549_29613 = state_29528__$1;
(statearr_29549_29613[(1)] = (32));

} else {
var statearr_29550_29614 = state_29528__$1;
(statearr_29550_29614[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29529 === (32))){
var inst_29495 = (state_29528[(24)]);
var inst_29508 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29495);
var inst_29509 = cljs.core.pr_str.call(null,inst_29508);
var inst_29510 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_29509)].join('');
var inst_29511 = figwheel.client.utils.log.call(null,inst_29510);
var state_29528__$1 = state_29528;
var statearr_29551_29615 = state_29528__$1;
(statearr_29551_29615[(2)] = inst_29511);

(statearr_29551_29615[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29529 === (33))){
var state_29528__$1 = state_29528;
var statearr_29552_29616 = state_29528__$1;
(statearr_29552_29616[(2)] = null);

(statearr_29552_29616[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29529 === (13))){
var inst_29428 = (state_29528[(26)]);
var inst_29432 = cljs.core.chunk_first.call(null,inst_29428);
var inst_29433 = cljs.core.chunk_rest.call(null,inst_29428);
var inst_29434 = cljs.core.count.call(null,inst_29432);
var inst_29415 = inst_29433;
var inst_29416 = inst_29432;
var inst_29417 = inst_29434;
var inst_29418 = (0);
var state_29528__$1 = (function (){var statearr_29553 = state_29528;
(statearr_29553[(7)] = inst_29418);

(statearr_29553[(8)] = inst_29417);

(statearr_29553[(9)] = inst_29416);

(statearr_29553[(10)] = inst_29415);

return statearr_29553;
})();
var statearr_29554_29617 = state_29528__$1;
(statearr_29554_29617[(2)] = null);

(statearr_29554_29617[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29529 === (22))){
var inst_29467 = (state_29528[(12)]);
var inst_29480 = (state_29528[(2)]);
var inst_29481 = cljs.core.not_empty.call(null,inst_29467);
var state_29528__$1 = (function (){var statearr_29555 = state_29528;
(statearr_29555[(27)] = inst_29480);

return statearr_29555;
})();
if(cljs.core.truth_(inst_29481)){
var statearr_29556_29618 = state_29528__$1;
(statearr_29556_29618[(1)] = (23));

} else {
var statearr_29557_29619 = state_29528__$1;
(statearr_29557_29619[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29529 === (36))){
var state_29528__$1 = state_29528;
var statearr_29558_29620 = state_29528__$1;
(statearr_29558_29620[(2)] = null);

(statearr_29558_29620[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29529 === (29))){
var inst_29496 = (state_29528[(28)]);
var inst_29499 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29496);
var inst_29500 = cljs.core.pr_str.call(null,inst_29499);
var inst_29501 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_29500)].join('');
var inst_29502 = figwheel.client.utils.log.call(null,inst_29501);
var state_29528__$1 = state_29528;
var statearr_29559_29621 = state_29528__$1;
(statearr_29559_29621[(2)] = inst_29502);

(statearr_29559_29621[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29529 === (6))){
var inst_29449 = (state_29528[(2)]);
var state_29528__$1 = state_29528;
var statearr_29560_29622 = state_29528__$1;
(statearr_29560_29622[(2)] = inst_29449);

(statearr_29560_29622[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29529 === (28))){
var inst_29496 = (state_29528[(28)]);
var inst_29493 = (state_29528[(2)]);
var inst_29494 = cljs.core.get.call(null,inst_29493,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_29495 = cljs.core.get.call(null,inst_29493,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_29496__$1 = cljs.core.get.call(null,inst_29493,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_29497 = cljs.core.not_empty.call(null,inst_29496__$1);
var state_29528__$1 = (function (){var statearr_29561 = state_29528;
(statearr_29561[(24)] = inst_29495);

(statearr_29561[(28)] = inst_29496__$1);

(statearr_29561[(29)] = inst_29494);

return statearr_29561;
})();
if(cljs.core.truth_(inst_29497)){
var statearr_29562_29623 = state_29528__$1;
(statearr_29562_29623[(1)] = (29));

} else {
var statearr_29563_29624 = state_29528__$1;
(statearr_29563_29624[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29529 === (25))){
var inst_29526 = (state_29528[(2)]);
var state_29528__$1 = state_29528;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29528__$1,inst_29526);
} else {
if((state_val_29529 === (34))){
var inst_29494 = (state_29528[(29)]);
var inst_29514 = (state_29528[(2)]);
var inst_29515 = cljs.core.not_empty.call(null,inst_29494);
var state_29528__$1 = (function (){var statearr_29564 = state_29528;
(statearr_29564[(30)] = inst_29514);

return statearr_29564;
})();
if(cljs.core.truth_(inst_29515)){
var statearr_29565_29625 = state_29528__$1;
(statearr_29565_29625[(1)] = (35));

} else {
var statearr_29566_29626 = state_29528__$1;
(statearr_29566_29626[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29529 === (17))){
var inst_29454 = (state_29528[(22)]);
var state_29528__$1 = state_29528;
var statearr_29567_29627 = state_29528__$1;
(statearr_29567_29627[(2)] = inst_29454);

(statearr_29567_29627[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29529 === (3))){
var state_29528__$1 = state_29528;
var statearr_29568_29628 = state_29528__$1;
(statearr_29568_29628[(2)] = null);

(statearr_29568_29628[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29529 === (12))){
var inst_29445 = (state_29528[(2)]);
var state_29528__$1 = state_29528;
var statearr_29569_29629 = state_29528__$1;
(statearr_29569_29629[(2)] = inst_29445);

(statearr_29569_29629[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29529 === (2))){
var inst_29407 = (state_29528[(20)]);
var inst_29414 = cljs.core.seq.call(null,inst_29407);
var inst_29415 = inst_29414;
var inst_29416 = null;
var inst_29417 = (0);
var inst_29418 = (0);
var state_29528__$1 = (function (){var statearr_29570 = state_29528;
(statearr_29570[(7)] = inst_29418);

(statearr_29570[(8)] = inst_29417);

(statearr_29570[(9)] = inst_29416);

(statearr_29570[(10)] = inst_29415);

return statearr_29570;
})();
var statearr_29571_29630 = state_29528__$1;
(statearr_29571_29630[(2)] = null);

(statearr_29571_29630[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29529 === (23))){
var inst_29487 = (state_29528[(19)]);
var inst_29467 = (state_29528[(12)]);
var inst_29465 = (state_29528[(13)]);
var inst_29461 = (state_29528[(14)]);
var inst_29460 = (state_29528[(15)]);
var inst_29464 = (state_29528[(16)]);
var inst_29483 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_29486 = (function (){var files_not_loaded = inst_29467;
var res = inst_29465;
var res_SINGLEQUOTE_ = inst_29464;
var files_SINGLEQUOTE_ = inst_29461;
var all_files = inst_29460;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_29487,inst_29467,inst_29465,inst_29461,inst_29460,inst_29464,inst_29483,state_val_29529,c__20007__auto__,map__29403,map__29403__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29404,map__29404__$1,msg,files){
return (function (p__29485){
var map__29572 = p__29485;
var map__29572__$1 = ((cljs.core.seq_QMARK_.call(null,map__29572))?cljs.core.apply.call(null,cljs.core.hash_map,map__29572):map__29572);
var meta_data = cljs.core.get.call(null,map__29572__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
if((cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data)))){
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_29487,inst_29467,inst_29465,inst_29461,inst_29460,inst_29464,inst_29483,state_val_29529,c__20007__auto__,map__29403,map__29403__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29404,map__29404__$1,msg,files))
})();
var inst_29487__$1 = cljs.core.group_by.call(null,inst_29486,inst_29467);
var inst_29488 = cljs.core.seq_QMARK_.call(null,inst_29487__$1);
var state_29528__$1 = (function (){var statearr_29573 = state_29528;
(statearr_29573[(19)] = inst_29487__$1);

(statearr_29573[(31)] = inst_29483);

return statearr_29573;
})();
if(inst_29488){
var statearr_29574_29631 = state_29528__$1;
(statearr_29574_29631[(1)] = (26));

} else {
var statearr_29575_29632 = state_29528__$1;
(statearr_29575_29632[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29529 === (35))){
var inst_29494 = (state_29528[(29)]);
var inst_29517 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29494);
var inst_29518 = cljs.core.pr_str.call(null,inst_29517);
var inst_29519 = [cljs.core.str("not required: "),cljs.core.str(inst_29518)].join('');
var inst_29520 = figwheel.client.utils.log.call(null,inst_29519);
var state_29528__$1 = state_29528;
var statearr_29576_29633 = state_29528__$1;
(statearr_29576_29633[(2)] = inst_29520);

(statearr_29576_29633[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29529 === (19))){
var inst_29465 = (state_29528[(13)]);
var inst_29461 = (state_29528[(14)]);
var inst_29460 = (state_29528[(15)]);
var inst_29464 = (state_29528[(16)]);
var inst_29464__$1 = (state_29528[(2)]);
var inst_29465__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29464__$1);
var inst_29466 = (function (){var res = inst_29465__$1;
var res_SINGLEQUOTE_ = inst_29464__$1;
var files_SINGLEQUOTE_ = inst_29461;
var all_files = inst_29460;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_29465,inst_29461,inst_29460,inst_29464,inst_29464__$1,inst_29465__$1,state_val_29529,c__20007__auto__,map__29403,map__29403__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29404,map__29404__$1,msg,files){
return (function (p1__29200_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__29200_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_29465,inst_29461,inst_29460,inst_29464,inst_29464__$1,inst_29465__$1,state_val_29529,c__20007__auto__,map__29403,map__29403__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29404,map__29404__$1,msg,files))
})();
var inst_29467 = cljs.core.filter.call(null,inst_29466,inst_29464__$1);
var inst_29468 = cljs.core.not_empty.call(null,inst_29465__$1);
var state_29528__$1 = (function (){var statearr_29577 = state_29528;
(statearr_29577[(12)] = inst_29467);

(statearr_29577[(13)] = inst_29465__$1);

(statearr_29577[(16)] = inst_29464__$1);

return statearr_29577;
})();
if(cljs.core.truth_(inst_29468)){
var statearr_29578_29634 = state_29528__$1;
(statearr_29578_29634[(1)] = (20));

} else {
var statearr_29579_29635 = state_29528__$1;
(statearr_29579_29635[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29529 === (11))){
var state_29528__$1 = state_29528;
var statearr_29580_29636 = state_29528__$1;
(statearr_29580_29636[(2)] = null);

(statearr_29580_29636[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29529 === (9))){
var inst_29447 = (state_29528[(2)]);
var state_29528__$1 = state_29528;
var statearr_29581_29637 = state_29528__$1;
(statearr_29581_29637[(2)] = inst_29447);

(statearr_29581_29637[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29529 === (5))){
var inst_29418 = (state_29528[(7)]);
var inst_29417 = (state_29528[(8)]);
var inst_29420 = (inst_29418 < inst_29417);
var inst_29421 = inst_29420;
var state_29528__$1 = state_29528;
if(cljs.core.truth_(inst_29421)){
var statearr_29582_29638 = state_29528__$1;
(statearr_29582_29638[(1)] = (7));

} else {
var statearr_29583_29639 = state_29528__$1;
(statearr_29583_29639[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29529 === (14))){
var inst_29428 = (state_29528[(26)]);
var inst_29437 = cljs.core.first.call(null,inst_29428);
var inst_29438 = figwheel.client.file_reloading.eval_body.call(null,inst_29437);
var inst_29439 = cljs.core.next.call(null,inst_29428);
var inst_29415 = inst_29439;
var inst_29416 = null;
var inst_29417 = (0);
var inst_29418 = (0);
var state_29528__$1 = (function (){var statearr_29584 = state_29528;
(statearr_29584[(32)] = inst_29438);

(statearr_29584[(7)] = inst_29418);

(statearr_29584[(8)] = inst_29417);

(statearr_29584[(9)] = inst_29416);

(statearr_29584[(10)] = inst_29415);

return statearr_29584;
})();
var statearr_29585_29640 = state_29528__$1;
(statearr_29585_29640[(2)] = null);

(statearr_29585_29640[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29529 === (26))){
var inst_29487 = (state_29528[(19)]);
var inst_29490 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29487);
var state_29528__$1 = state_29528;
var statearr_29586_29641 = state_29528__$1;
(statearr_29586_29641[(2)] = inst_29490);

(statearr_29586_29641[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29529 === (16))){
var inst_29454 = (state_29528[(22)]);
var inst_29456 = (function (){var all_files = inst_29454;
return ((function (all_files,inst_29454,state_val_29529,c__20007__auto__,map__29403,map__29403__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29404,map__29404__$1,msg,files){
return (function (p1__29199_SHARP_){
return cljs.core.update_in.call(null,p1__29199_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_29454,state_val_29529,c__20007__auto__,map__29403,map__29403__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29404,map__29404__$1,msg,files))
})();
var inst_29457 = cljs.core.map.call(null,inst_29456,inst_29454);
var state_29528__$1 = state_29528;
var statearr_29587_29642 = state_29528__$1;
(statearr_29587_29642[(2)] = inst_29457);

(statearr_29587_29642[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29529 === (30))){
var state_29528__$1 = state_29528;
var statearr_29588_29643 = state_29528__$1;
(statearr_29588_29643[(2)] = null);

(statearr_29588_29643[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29529 === (10))){
var inst_29428 = (state_29528[(26)]);
var inst_29430 = cljs.core.chunked_seq_QMARK_.call(null,inst_29428);
var state_29528__$1 = state_29528;
if(inst_29430){
var statearr_29589_29644 = state_29528__$1;
(statearr_29589_29644[(1)] = (13));

} else {
var statearr_29590_29645 = state_29528__$1;
(statearr_29590_29645[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29529 === (18))){
var inst_29461 = (state_29528[(14)]);
var inst_29460 = (state_29528[(15)]);
var inst_29460__$1 = (state_29528[(2)]);
var inst_29461__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_29460__$1);
var inst_29462 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_29461__$1);
var state_29528__$1 = (function (){var statearr_29591 = state_29528;
(statearr_29591[(14)] = inst_29461__$1);

(statearr_29591[(15)] = inst_29460__$1);

return statearr_29591;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29528__$1,(19),inst_29462);
} else {
if((state_val_29529 === (37))){
var inst_29523 = (state_29528[(2)]);
var state_29528__$1 = state_29528;
var statearr_29592_29646 = state_29528__$1;
(statearr_29592_29646[(2)] = inst_29523);

(statearr_29592_29646[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29529 === (8))){
var inst_29428 = (state_29528[(26)]);
var inst_29415 = (state_29528[(10)]);
var inst_29428__$1 = cljs.core.seq.call(null,inst_29415);
var state_29528__$1 = (function (){var statearr_29593 = state_29528;
(statearr_29593[(26)] = inst_29428__$1);

return statearr_29593;
})();
if(inst_29428__$1){
var statearr_29594_29647 = state_29528__$1;
(statearr_29594_29647[(1)] = (10));

} else {
var statearr_29595_29648 = state_29528__$1;
(statearr_29595_29648[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20007__auto__,map__29403,map__29403__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29404,map__29404__$1,msg,files))
;
return ((function (switch__19945__auto__,c__20007__auto__,map__29403,map__29403__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29404,map__29404__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19946__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19946__auto____0 = (function (){
var statearr_29599 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29599[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__19946__auto__);

(statearr_29599[(1)] = (1));

return statearr_29599;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19946__auto____1 = (function (state_29528){
while(true){
var ret_value__19947__auto__ = (function (){try{while(true){
var result__19948__auto__ = switch__19945__auto__.call(null,state_29528);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19948__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19948__auto__;
}
break;
}
}catch (e29600){if((e29600 instanceof Object)){
var ex__19949__auto__ = e29600;
var statearr_29601_29649 = state_29528;
(statearr_29601_29649[(5)] = ex__19949__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29528);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29600;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29650 = state_29528;
state_29528 = G__29650;
continue;
} else {
return ret_value__19947__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__19946__auto__ = function(state_29528){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19946__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19946__auto____1.call(this,state_29528);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__19946__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19946__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__19946__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19946__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19946__auto__;
})()
;})(switch__19945__auto__,c__20007__auto__,map__29403,map__29403__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29404,map__29404__$1,msg,files))
})();
var state__20009__auto__ = (function (){var statearr_29602 = f__20008__auto__.call(null);
(statearr_29602[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20007__auto__);

return statearr_29602;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20009__auto__);
});})(c__20007__auto__,map__29403,map__29403__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29404,map__29404__$1,msg,files))
);

return c__20007__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__29653,link){
var map__29655 = p__29653;
var map__29655__$1 = ((cljs.core.seq_QMARK_.call(null,map__29655))?cljs.core.apply.call(null,cljs.core.hash_map,map__29655):map__29655);
var file = cljs.core.get.call(null,map__29655__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4126__auto__ = link.href;
if(cljs.core.truth_(temp__4126__auto__)){
var link_href = temp__4126__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4126__auto__,map__29655,map__29655__$1,file){
return (function (p1__29651_SHARP_,p2__29652_SHARP_){
if(cljs.core._EQ_.call(null,p1__29651_SHARP_,p2__29652_SHARP_)){
return p1__29651_SHARP_;
} else {
return false;
}
});})(link_href,temp__4126__auto__,map__29655,map__29655__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4126__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__29659){
var map__29660 = p__29659;
var map__29660__$1 = ((cljs.core.seq_QMARK_.call(null,map__29660))?cljs.core.apply.call(null,cljs.core.hash_map,map__29660):map__29660);
var current_url_length = cljs.core.get.call(null,map__29660__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
var match_length = cljs.core.get.call(null,map__29660__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__29656_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__29656_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4126__auto__)){
var res = temp__4126__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(){
var G__29662 = arguments.length;
switch (G__29662) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__29664){
var map__29666 = p__29664;
var map__29666__$1 = ((cljs.core.seq_QMARK_.call(null,map__29666))?cljs.core.apply.call(null,cljs.core.hash_map,map__29666):map__29666);
var f_data = map__29666__$1;
var request_url = cljs.core.get.call(null,map__29666__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__29666__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4124__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4124__auto__)){
var link = temp__4124__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__17953__auto__ = request_url;
if(cljs.core.truth_(or__17953__auto__)){
return or__17953__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__29667,files_msg){
var map__29689 = p__29667;
var map__29689__$1 = ((cljs.core.seq_QMARK_.call(null,map__29689))?cljs.core.apply.call(null,cljs.core.hash_map,map__29689):map__29689);
var opts = map__29689__$1;
var on_cssload = cljs.core.get.call(null,map__29689__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__29690_29710 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__29691_29711 = null;
var count__29692_29712 = (0);
var i__29693_29713 = (0);
while(true){
if((i__29693_29713 < count__29692_29712)){
var f_29714 = cljs.core._nth.call(null,chunk__29691_29711,i__29693_29713);
figwheel.client.file_reloading.reload_css_file.call(null,f_29714);

var G__29715 = seq__29690_29710;
var G__29716 = chunk__29691_29711;
var G__29717 = count__29692_29712;
var G__29718 = (i__29693_29713 + (1));
seq__29690_29710 = G__29715;
chunk__29691_29711 = G__29716;
count__29692_29712 = G__29717;
i__29693_29713 = G__29718;
continue;
} else {
var temp__4126__auto___29719 = cljs.core.seq.call(null,seq__29690_29710);
if(temp__4126__auto___29719){
var seq__29690_29720__$1 = temp__4126__auto___29719;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29690_29720__$1)){
var c__18738__auto___29721 = cljs.core.chunk_first.call(null,seq__29690_29720__$1);
var G__29722 = cljs.core.chunk_rest.call(null,seq__29690_29720__$1);
var G__29723 = c__18738__auto___29721;
var G__29724 = cljs.core.count.call(null,c__18738__auto___29721);
var G__29725 = (0);
seq__29690_29710 = G__29722;
chunk__29691_29711 = G__29723;
count__29692_29712 = G__29724;
i__29693_29713 = G__29725;
continue;
} else {
var f_29726 = cljs.core.first.call(null,seq__29690_29720__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_29726);

var G__29727 = cljs.core.next.call(null,seq__29690_29720__$1);
var G__29728 = null;
var G__29729 = (0);
var G__29730 = (0);
seq__29690_29710 = G__29727;
chunk__29691_29711 = G__29728;
count__29692_29712 = G__29729;
i__29693_29713 = G__29730;
continue;
}
} else {
}
}
break;
}

var c__20007__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20007__auto__,map__29689,map__29689__$1,opts,on_cssload){
return (function (){
var f__20008__auto__ = (function (){var switch__19945__auto__ = ((function (c__20007__auto__,map__29689,map__29689__$1,opts,on_cssload){
return (function (state_29700){
var state_val_29701 = (state_29700[(1)]);
if((state_val_29701 === (2))){
var inst_29696 = (state_29700[(2)]);
var inst_29697 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_29698 = on_cssload.call(null,inst_29697);
var state_29700__$1 = (function (){var statearr_29702 = state_29700;
(statearr_29702[(7)] = inst_29696);

return statearr_29702;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29700__$1,inst_29698);
} else {
if((state_val_29701 === (1))){
var inst_29694 = cljs.core.async.timeout.call(null,(100));
var state_29700__$1 = state_29700;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29700__$1,(2),inst_29694);
} else {
return null;
}
}
});})(c__20007__auto__,map__29689,map__29689__$1,opts,on_cssload))
;
return ((function (switch__19945__auto__,c__20007__auto__,map__29689,map__29689__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__19946__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__19946__auto____0 = (function (){
var statearr_29706 = [null,null,null,null,null,null,null,null];
(statearr_29706[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__19946__auto__);

(statearr_29706[(1)] = (1));

return statearr_29706;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__19946__auto____1 = (function (state_29700){
while(true){
var ret_value__19947__auto__ = (function (){try{while(true){
var result__19948__auto__ = switch__19945__auto__.call(null,state_29700);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19948__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19948__auto__;
}
break;
}
}catch (e29707){if((e29707 instanceof Object)){
var ex__19949__auto__ = e29707;
var statearr_29708_29731 = state_29700;
(statearr_29708_29731[(5)] = ex__19949__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29700);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29707;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29732 = state_29700;
state_29700 = G__29732;
continue;
} else {
return ret_value__19947__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__19946__auto__ = function(state_29700){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__19946__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__19946__auto____1.call(this,state_29700);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__19946__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__19946__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__19946__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__19946__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__19946__auto__;
})()
;})(switch__19945__auto__,c__20007__auto__,map__29689,map__29689__$1,opts,on_cssload))
})();
var state__20009__auto__ = (function (){var statearr_29709 = f__20008__auto__.call(null);
(statearr_29709[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20007__auto__);

return statearr_29709;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20009__auto__);
});})(c__20007__auto__,map__29689,map__29689__$1,opts,on_cssload))
);

return c__20007__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map