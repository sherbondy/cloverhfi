// Compiled by ClojureScript 0.0-3211 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__27976__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__27976 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27977__i = 0, G__27977__a = new Array(arguments.length -  0);
while (G__27977__i < G__27977__a.length) {G__27977__a[G__27977__i] = arguments[G__27977__i + 0]; ++G__27977__i;}
  args = new cljs.core.IndexedSeq(G__27977__a,0);
} 
return G__27976__delegate.call(this,args);};
G__27976.cljs$lang$maxFixedArity = 0;
G__27976.cljs$lang$applyTo = (function (arglist__27978){
var args = cljs.core.seq(arglist__27978);
return G__27976__delegate(args);
});
G__27976.cljs$core$IFn$_invoke$arity$variadic = G__27976__delegate;
return G__27976;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__27979){
var map__27981 = p__27979;
var map__27981__$1 = ((cljs.core.seq_QMARK_.call(null,map__27981))?cljs.core.apply.call(null,cljs.core.hash_map,map__27981):map__27981);
var class$ = cljs.core.get.call(null,map__27981__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__27981__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__17953__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__17953__auto__)){
return or__17953__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__17941__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__17941__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__17941__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__20007__auto___28110 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20007__auto___28110,ch){
return (function (){
var f__20008__auto__ = (function (){var switch__19945__auto__ = ((function (c__20007__auto___28110,ch){
return (function (state_28084){
var state_val_28085 = (state_28084[(1)]);
if((state_val_28085 === (7))){
var inst_28080 = (state_28084[(2)]);
var state_28084__$1 = state_28084;
var statearr_28086_28111 = state_28084__$1;
(statearr_28086_28111[(2)] = inst_28080);

(statearr_28086_28111[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28085 === (1))){
var state_28084__$1 = state_28084;
var statearr_28087_28112 = state_28084__$1;
(statearr_28087_28112[(2)] = null);

(statearr_28087_28112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28085 === (4))){
var inst_28048 = (state_28084[(7)]);
var inst_28048__$1 = (state_28084[(2)]);
var state_28084__$1 = (function (){var statearr_28088 = state_28084;
(statearr_28088[(7)] = inst_28048__$1);

return statearr_28088;
})();
if(cljs.core.truth_(inst_28048__$1)){
var statearr_28089_28113 = state_28084__$1;
(statearr_28089_28113[(1)] = (5));

} else {
var statearr_28090_28114 = state_28084__$1;
(statearr_28090_28114[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28085 === (13))){
var state_28084__$1 = state_28084;
var statearr_28091_28115 = state_28084__$1;
(statearr_28091_28115[(2)] = null);

(statearr_28091_28115[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28085 === (6))){
var state_28084__$1 = state_28084;
var statearr_28092_28116 = state_28084__$1;
(statearr_28092_28116[(2)] = null);

(statearr_28092_28116[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28085 === (3))){
var inst_28082 = (state_28084[(2)]);
var state_28084__$1 = state_28084;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28084__$1,inst_28082);
} else {
if((state_val_28085 === (12))){
var inst_28055 = (state_28084[(8)]);
var inst_28068 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_28055);
var inst_28069 = cljs.core.first.call(null,inst_28068);
var inst_28070 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_28069);
var inst_28071 = console.warn("Figwheel: Not loading code with warnings - ",inst_28070);
var state_28084__$1 = state_28084;
var statearr_28093_28117 = state_28084__$1;
(statearr_28093_28117[(2)] = inst_28071);

(statearr_28093_28117[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28085 === (2))){
var state_28084__$1 = state_28084;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28084__$1,(4),ch);
} else {
if((state_val_28085 === (11))){
var inst_28064 = (state_28084[(2)]);
var state_28084__$1 = state_28084;
var statearr_28094_28118 = state_28084__$1;
(statearr_28094_28118[(2)] = inst_28064);

(statearr_28094_28118[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28085 === (9))){
var inst_28054 = (state_28084[(9)]);
var inst_28066 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_28054,opts);
var state_28084__$1 = state_28084;
if(cljs.core.truth_(inst_28066)){
var statearr_28095_28119 = state_28084__$1;
(statearr_28095_28119[(1)] = (12));

} else {
var statearr_28096_28120 = state_28084__$1;
(statearr_28096_28120[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28085 === (5))){
var inst_28054 = (state_28084[(9)]);
var inst_28048 = (state_28084[(7)]);
var inst_28050 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_28051 = (new cljs.core.PersistentArrayMap(null,2,inst_28050,null));
var inst_28052 = (new cljs.core.PersistentHashSet(null,inst_28051,null));
var inst_28053 = figwheel.client.focus_msgs.call(null,inst_28052,inst_28048);
var inst_28054__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_28053);
var inst_28055 = cljs.core.first.call(null,inst_28053);
var inst_28056 = figwheel.client.reload_file_state_QMARK_.call(null,inst_28054__$1,opts);
var state_28084__$1 = (function (){var statearr_28097 = state_28084;
(statearr_28097[(9)] = inst_28054__$1);

(statearr_28097[(8)] = inst_28055);

return statearr_28097;
})();
if(cljs.core.truth_(inst_28056)){
var statearr_28098_28121 = state_28084__$1;
(statearr_28098_28121[(1)] = (8));

} else {
var statearr_28099_28122 = state_28084__$1;
(statearr_28099_28122[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28085 === (14))){
var inst_28074 = (state_28084[(2)]);
var state_28084__$1 = state_28084;
var statearr_28100_28123 = state_28084__$1;
(statearr_28100_28123[(2)] = inst_28074);

(statearr_28100_28123[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28085 === (10))){
var inst_28076 = (state_28084[(2)]);
var state_28084__$1 = (function (){var statearr_28101 = state_28084;
(statearr_28101[(10)] = inst_28076);

return statearr_28101;
})();
var statearr_28102_28124 = state_28084__$1;
(statearr_28102_28124[(2)] = null);

(statearr_28102_28124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28085 === (8))){
var inst_28055 = (state_28084[(8)]);
var inst_28058 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28059 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_28055);
var inst_28060 = cljs.core.async.timeout.call(null,(1000));
var inst_28061 = [inst_28059,inst_28060];
var inst_28062 = (new cljs.core.PersistentVector(null,2,(5),inst_28058,inst_28061,null));
var state_28084__$1 = state_28084;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28084__$1,(11),inst_28062);
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
});})(c__20007__auto___28110,ch))
;
return ((function (switch__19945__auto__,c__20007__auto___28110,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__19946__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__19946__auto____0 = (function (){
var statearr_28106 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28106[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__19946__auto__);

(statearr_28106[(1)] = (1));

return statearr_28106;
});
var figwheel$client$file_reloader_plugin_$_state_machine__19946__auto____1 = (function (state_28084){
while(true){
var ret_value__19947__auto__ = (function (){try{while(true){
var result__19948__auto__ = switch__19945__auto__.call(null,state_28084);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19948__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19948__auto__;
}
break;
}
}catch (e28107){if((e28107 instanceof Object)){
var ex__19949__auto__ = e28107;
var statearr_28108_28125 = state_28084;
(statearr_28108_28125[(5)] = ex__19949__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28084);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28107;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28126 = state_28084;
state_28084 = G__28126;
continue;
} else {
return ret_value__19947__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__19946__auto__ = function(state_28084){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__19946__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__19946__auto____1.call(this,state_28084);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__19946__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__19946__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__19946__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__19946__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__19946__auto__;
})()
;})(switch__19945__auto__,c__20007__auto___28110,ch))
})();
var state__20009__auto__ = (function (){var statearr_28109 = f__20008__auto__.call(null);
(statearr_28109[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20007__auto___28110);

return statearr_28109;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20009__auto__);
});})(c__20007__auto___28110,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__28127_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__28127_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_28136 = clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__28129_SHARP_,p2__28128_SHARP_){
return [cljs.core.str(p2__28128_SHARP_)].join('');
}));
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_28136){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_28134 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_28135 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_28134,_STAR_print_newline_STAR_28135,base_path_28136){
return (function() { 
var G__28137__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__28137 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28138__i = 0, G__28138__a = new Array(arguments.length -  0);
while (G__28138__i < G__28138__a.length) {G__28138__a[G__28138__i] = arguments[G__28138__i + 0]; ++G__28138__i;}
  args = new cljs.core.IndexedSeq(G__28138__a,0);
} 
return G__28137__delegate.call(this,args);};
G__28137.cljs$lang$maxFixedArity = 0;
G__28137.cljs$lang$applyTo = (function (arglist__28139){
var args = cljs.core.seq(arglist__28139);
return G__28137__delegate(args);
});
G__28137.cljs$core$IFn$_invoke$arity$variadic = G__28137__delegate;
return G__28137;
})()
;})(_STAR_print_fn_STAR_28134,_STAR_print_newline_STAR_28135,base_path_28136))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_28135;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_28134;
}}catch (e28133){if((e28133 instanceof Error)){
var e = e28133;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_28136], null));
} else {
var e = e28133;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_28136))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__28140){
var map__28145 = p__28140;
var map__28145__$1 = ((cljs.core.seq_QMARK_.call(null,map__28145))?cljs.core.apply.call(null,cljs.core.hash_map,map__28145):map__28145);
var opts = map__28145__$1;
var build_id = cljs.core.get.call(null,map__28145__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__28145,map__28145__$1,opts,build_id){
return (function (p__28146){
var vec__28147 = p__28146;
var map__28148 = cljs.core.nth.call(null,vec__28147,(0),null);
var map__28148__$1 = ((cljs.core.seq_QMARK_.call(null,map__28148))?cljs.core.apply.call(null,cljs.core.hash_map,map__28148):map__28148);
var msg = map__28148__$1;
var msg_name = cljs.core.get.call(null,map__28148__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28147,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__28147,map__28148,map__28148__$1,msg,msg_name,_,map__28145,map__28145__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__28147,map__28148,map__28148__$1,msg,msg_name,_,map__28145,map__28145__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__28145,map__28145__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__28152){
var vec__28153 = p__28152;
var map__28154 = cljs.core.nth.call(null,vec__28153,(0),null);
var map__28154__$1 = ((cljs.core.seq_QMARK_.call(null,map__28154))?cljs.core.apply.call(null,cljs.core.hash_map,map__28154):map__28154);
var msg = map__28154__$1;
var msg_name = cljs.core.get.call(null,map__28154__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28153,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__28155){
var map__28163 = p__28155;
var map__28163__$1 = ((cljs.core.seq_QMARK_.call(null,map__28163))?cljs.core.apply.call(null,cljs.core.hash_map,map__28163):map__28163);
var on_compile_fail = cljs.core.get.call(null,map__28163__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var on_compile_warning = cljs.core.get.call(null,map__28163__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
return ((function (map__28163,map__28163__$1,on_compile_fail,on_compile_warning){
return (function (p__28164){
var vec__28165 = p__28164;
var map__28166 = cljs.core.nth.call(null,vec__28165,(0),null);
var map__28166__$1 = ((cljs.core.seq_QMARK_.call(null,map__28166))?cljs.core.apply.call(null,cljs.core.hash_map,map__28166):map__28166);
var msg = map__28166__$1;
var msg_name = cljs.core.get.call(null,map__28166__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28165,(1));
var pred__28167 = cljs.core._EQ_;
var expr__28168 = msg_name;
if(cljs.core.truth_(pred__28167.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__28168))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__28167.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__28168))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__28163,map__28163__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__20007__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20007__auto__,msg_hist,msg_names,msg){
return (function (){
var f__20008__auto__ = (function (){var switch__19945__auto__ = ((function (c__20007__auto__,msg_hist,msg_names,msg){
return (function (state_28365){
var state_val_28366 = (state_28365[(1)]);
if((state_val_28366 === (7))){
var inst_28301 = (state_28365[(2)]);
var state_28365__$1 = state_28365;
var statearr_28367_28408 = state_28365__$1;
(statearr_28367_28408[(2)] = inst_28301);

(statearr_28367_28408[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28366 === (20))){
var inst_28327 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_28365__$1 = state_28365;
if(cljs.core.truth_(inst_28327)){
var statearr_28368_28409 = state_28365__$1;
(statearr_28368_28409[(1)] = (22));

} else {
var statearr_28369_28410 = state_28365__$1;
(statearr_28369_28410[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28366 === (27))){
var inst_28339 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28340 = figwheel.client.heads_up.display_warning.call(null,inst_28339);
var state_28365__$1 = state_28365;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28365__$1,(30),inst_28340);
} else {
if((state_val_28366 === (1))){
var inst_28289 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_28365__$1 = state_28365;
if(cljs.core.truth_(inst_28289)){
var statearr_28370_28411 = state_28365__$1;
(statearr_28370_28411[(1)] = (2));

} else {
var statearr_28371_28412 = state_28365__$1;
(statearr_28371_28412[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28366 === (24))){
var inst_28355 = (state_28365[(2)]);
var state_28365__$1 = state_28365;
var statearr_28372_28413 = state_28365__$1;
(statearr_28372_28413[(2)] = inst_28355);

(statearr_28372_28413[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28366 === (4))){
var inst_28363 = (state_28365[(2)]);
var state_28365__$1 = state_28365;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28365__$1,inst_28363);
} else {
if((state_val_28366 === (15))){
var inst_28316 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28317 = figwheel.client.format_messages.call(null,inst_28316);
var inst_28318 = figwheel.client.heads_up.display_error.call(null,inst_28317);
var state_28365__$1 = state_28365;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28365__$1,(18),inst_28318);
} else {
if((state_val_28366 === (21))){
var inst_28357 = (state_28365[(2)]);
var state_28365__$1 = state_28365;
var statearr_28373_28414 = state_28365__$1;
(statearr_28373_28414[(2)] = inst_28357);

(statearr_28373_28414[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28366 === (31))){
var inst_28346 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28365__$1 = state_28365;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28365__$1,(34),inst_28346);
} else {
if((state_val_28366 === (32))){
var state_28365__$1 = state_28365;
var statearr_28374_28415 = state_28365__$1;
(statearr_28374_28415[(2)] = null);

(statearr_28374_28415[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28366 === (33))){
var inst_28351 = (state_28365[(2)]);
var state_28365__$1 = state_28365;
var statearr_28375_28416 = state_28365__$1;
(statearr_28375_28416[(2)] = inst_28351);

(statearr_28375_28416[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28366 === (13))){
var inst_28307 = (state_28365[(2)]);
var inst_28308 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28309 = figwheel.client.format_messages.call(null,inst_28308);
var inst_28310 = figwheel.client.heads_up.display_error.call(null,inst_28309);
var state_28365__$1 = (function (){var statearr_28376 = state_28365;
(statearr_28376[(7)] = inst_28307);

return statearr_28376;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28365__$1,(14),inst_28310);
} else {
if((state_val_28366 === (22))){
var inst_28329 = figwheel.client.heads_up.clear.call(null);
var state_28365__$1 = state_28365;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28365__$1,(25),inst_28329);
} else {
if((state_val_28366 === (29))){
var inst_28353 = (state_28365[(2)]);
var state_28365__$1 = state_28365;
var statearr_28377_28417 = state_28365__$1;
(statearr_28377_28417[(2)] = inst_28353);

(statearr_28377_28417[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28366 === (6))){
var inst_28297 = figwheel.client.heads_up.clear.call(null);
var state_28365__$1 = state_28365;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28365__$1,(9),inst_28297);
} else {
if((state_val_28366 === (28))){
var inst_28344 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_28365__$1 = state_28365;
if(cljs.core.truth_(inst_28344)){
var statearr_28378_28418 = state_28365__$1;
(statearr_28378_28418[(1)] = (31));

} else {
var statearr_28379_28419 = state_28365__$1;
(statearr_28379_28419[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28366 === (25))){
var inst_28331 = (state_28365[(2)]);
var inst_28332 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28333 = figwheel.client.heads_up.display_warning.call(null,inst_28332);
var state_28365__$1 = (function (){var statearr_28380 = state_28365;
(statearr_28380[(8)] = inst_28331);

return statearr_28380;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28365__$1,(26),inst_28333);
} else {
if((state_val_28366 === (34))){
var inst_28348 = (state_28365[(2)]);
var state_28365__$1 = state_28365;
var statearr_28381_28420 = state_28365__$1;
(statearr_28381_28420[(2)] = inst_28348);

(statearr_28381_28420[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28366 === (17))){
var inst_28359 = (state_28365[(2)]);
var state_28365__$1 = state_28365;
var statearr_28382_28421 = state_28365__$1;
(statearr_28382_28421[(2)] = inst_28359);

(statearr_28382_28421[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28366 === (3))){
var inst_28303 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_28365__$1 = state_28365;
if(cljs.core.truth_(inst_28303)){
var statearr_28383_28422 = state_28365__$1;
(statearr_28383_28422[(1)] = (10));

} else {
var statearr_28384_28423 = state_28365__$1;
(statearr_28384_28423[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28366 === (12))){
var inst_28361 = (state_28365[(2)]);
var state_28365__$1 = state_28365;
var statearr_28385_28424 = state_28365__$1;
(statearr_28385_28424[(2)] = inst_28361);

(statearr_28385_28424[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28366 === (2))){
var inst_28291 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_28365__$1 = state_28365;
if(cljs.core.truth_(inst_28291)){
var statearr_28386_28425 = state_28365__$1;
(statearr_28386_28425[(1)] = (5));

} else {
var statearr_28387_28426 = state_28365__$1;
(statearr_28387_28426[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28366 === (23))){
var inst_28337 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_28365__$1 = state_28365;
if(cljs.core.truth_(inst_28337)){
var statearr_28388_28427 = state_28365__$1;
(statearr_28388_28427[(1)] = (27));

} else {
var statearr_28389_28428 = state_28365__$1;
(statearr_28389_28428[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28366 === (19))){
var inst_28324 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28325 = figwheel.client.heads_up.append_message.call(null,inst_28324);
var state_28365__$1 = state_28365;
var statearr_28390_28429 = state_28365__$1;
(statearr_28390_28429[(2)] = inst_28325);

(statearr_28390_28429[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28366 === (11))){
var inst_28314 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_28365__$1 = state_28365;
if(cljs.core.truth_(inst_28314)){
var statearr_28391_28430 = state_28365__$1;
(statearr_28391_28430[(1)] = (15));

} else {
var statearr_28392_28431 = state_28365__$1;
(statearr_28392_28431[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28366 === (9))){
var inst_28299 = (state_28365[(2)]);
var state_28365__$1 = state_28365;
var statearr_28393_28432 = state_28365__$1;
(statearr_28393_28432[(2)] = inst_28299);

(statearr_28393_28432[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28366 === (5))){
var inst_28293 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28365__$1 = state_28365;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28365__$1,(8),inst_28293);
} else {
if((state_val_28366 === (14))){
var inst_28312 = (state_28365[(2)]);
var state_28365__$1 = state_28365;
var statearr_28394_28433 = state_28365__$1;
(statearr_28394_28433[(2)] = inst_28312);

(statearr_28394_28433[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28366 === (26))){
var inst_28335 = (state_28365[(2)]);
var state_28365__$1 = state_28365;
var statearr_28395_28434 = state_28365__$1;
(statearr_28395_28434[(2)] = inst_28335);

(statearr_28395_28434[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28366 === (16))){
var inst_28322 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_28365__$1 = state_28365;
if(cljs.core.truth_(inst_28322)){
var statearr_28396_28435 = state_28365__$1;
(statearr_28396_28435[(1)] = (19));

} else {
var statearr_28397_28436 = state_28365__$1;
(statearr_28397_28436[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28366 === (30))){
var inst_28342 = (state_28365[(2)]);
var state_28365__$1 = state_28365;
var statearr_28398_28437 = state_28365__$1;
(statearr_28398_28437[(2)] = inst_28342);

(statearr_28398_28437[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28366 === (10))){
var inst_28305 = figwheel.client.heads_up.clear.call(null);
var state_28365__$1 = state_28365;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28365__$1,(13),inst_28305);
} else {
if((state_val_28366 === (18))){
var inst_28320 = (state_28365[(2)]);
var state_28365__$1 = state_28365;
var statearr_28399_28438 = state_28365__$1;
(statearr_28399_28438[(2)] = inst_28320);

(statearr_28399_28438[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28366 === (8))){
var inst_28295 = (state_28365[(2)]);
var state_28365__$1 = state_28365;
var statearr_28400_28439 = state_28365__$1;
(statearr_28400_28439[(2)] = inst_28295);

(statearr_28400_28439[(1)] = (7));


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
});})(c__20007__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__19945__auto__,c__20007__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19946__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19946__auto____0 = (function (){
var statearr_28404 = [null,null,null,null,null,null,null,null,null];
(statearr_28404[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19946__auto__);

(statearr_28404[(1)] = (1));

return statearr_28404;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19946__auto____1 = (function (state_28365){
while(true){
var ret_value__19947__auto__ = (function (){try{while(true){
var result__19948__auto__ = switch__19945__auto__.call(null,state_28365);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19948__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19948__auto__;
}
break;
}
}catch (e28405){if((e28405 instanceof Object)){
var ex__19949__auto__ = e28405;
var statearr_28406_28440 = state_28365;
(statearr_28406_28440[(5)] = ex__19949__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28365);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28405;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28441 = state_28365;
state_28365 = G__28441;
continue;
} else {
return ret_value__19947__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19946__auto__ = function(state_28365){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19946__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19946__auto____1.call(this,state_28365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19946__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19946__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19946__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19946__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19946__auto__;
})()
;})(switch__19945__auto__,c__20007__auto__,msg_hist,msg_names,msg))
})();
var state__20009__auto__ = (function (){var statearr_28407 = f__20008__auto__.call(null);
(statearr_28407[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20007__auto__);

return statearr_28407;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20009__auto__);
});})(c__20007__auto__,msg_hist,msg_names,msg))
);

return c__20007__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__20007__auto___28504 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20007__auto___28504,ch){
return (function (){
var f__20008__auto__ = (function (){var switch__19945__auto__ = ((function (c__20007__auto___28504,ch){
return (function (state_28487){
var state_val_28488 = (state_28487[(1)]);
if((state_val_28488 === (8))){
var inst_28479 = (state_28487[(2)]);
var state_28487__$1 = (function (){var statearr_28489 = state_28487;
(statearr_28489[(7)] = inst_28479);

return statearr_28489;
})();
var statearr_28490_28505 = state_28487__$1;
(statearr_28490_28505[(2)] = null);

(statearr_28490_28505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28488 === (7))){
var inst_28483 = (state_28487[(2)]);
var state_28487__$1 = state_28487;
var statearr_28491_28506 = state_28487__$1;
(statearr_28491_28506[(2)] = inst_28483);

(statearr_28491_28506[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28488 === (6))){
var state_28487__$1 = state_28487;
var statearr_28492_28507 = state_28487__$1;
(statearr_28492_28507[(2)] = null);

(statearr_28492_28507[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28488 === (5))){
var inst_28475 = (state_28487[(8)]);
var inst_28477 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_28475);
var state_28487__$1 = state_28487;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28487__$1,(8),inst_28477);
} else {
if((state_val_28488 === (4))){
var inst_28475 = (state_28487[(8)]);
var inst_28475__$1 = (state_28487[(2)]);
var state_28487__$1 = (function (){var statearr_28493 = state_28487;
(statearr_28493[(8)] = inst_28475__$1);

return statearr_28493;
})();
if(cljs.core.truth_(inst_28475__$1)){
var statearr_28494_28508 = state_28487__$1;
(statearr_28494_28508[(1)] = (5));

} else {
var statearr_28495_28509 = state_28487__$1;
(statearr_28495_28509[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28488 === (3))){
var inst_28485 = (state_28487[(2)]);
var state_28487__$1 = state_28487;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28487__$1,inst_28485);
} else {
if((state_val_28488 === (2))){
var state_28487__$1 = state_28487;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28487__$1,(4),ch);
} else {
if((state_val_28488 === (1))){
var state_28487__$1 = state_28487;
var statearr_28496_28510 = state_28487__$1;
(statearr_28496_28510[(2)] = null);

(statearr_28496_28510[(1)] = (2));


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
});})(c__20007__auto___28504,ch))
;
return ((function (switch__19945__auto__,c__20007__auto___28504,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__19946__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__19946__auto____0 = (function (){
var statearr_28500 = [null,null,null,null,null,null,null,null,null];
(statearr_28500[(0)] = figwheel$client$heads_up_plugin_$_state_machine__19946__auto__);

(statearr_28500[(1)] = (1));

return statearr_28500;
});
var figwheel$client$heads_up_plugin_$_state_machine__19946__auto____1 = (function (state_28487){
while(true){
var ret_value__19947__auto__ = (function (){try{while(true){
var result__19948__auto__ = switch__19945__auto__.call(null,state_28487);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19948__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19948__auto__;
}
break;
}
}catch (e28501){if((e28501 instanceof Object)){
var ex__19949__auto__ = e28501;
var statearr_28502_28511 = state_28487;
(statearr_28502_28511[(5)] = ex__19949__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28487);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28501;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28512 = state_28487;
state_28487 = G__28512;
continue;
} else {
return ret_value__19947__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__19946__auto__ = function(state_28487){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__19946__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__19946__auto____1.call(this,state_28487);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__19946__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__19946__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__19946__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__19946__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__19946__auto__;
})()
;})(switch__19945__auto__,c__20007__auto___28504,ch))
})();
var state__20009__auto__ = (function (){var statearr_28503 = f__20008__auto__.call(null);
(statearr_28503[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20007__auto___28504);

return statearr_28503;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20009__auto__);
});})(c__20007__auto___28504,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__20007__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20007__auto__){
return (function (){
var f__20008__auto__ = (function (){var switch__19945__auto__ = ((function (c__20007__auto__){
return (function (state_28533){
var state_val_28534 = (state_28533[(1)]);
if((state_val_28534 === (2))){
var inst_28530 = (state_28533[(2)]);
var inst_28531 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_28533__$1 = (function (){var statearr_28535 = state_28533;
(statearr_28535[(7)] = inst_28530);

return statearr_28535;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28533__$1,inst_28531);
} else {
if((state_val_28534 === (1))){
var inst_28528 = cljs.core.async.timeout.call(null,(3000));
var state_28533__$1 = state_28533;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28533__$1,(2),inst_28528);
} else {
return null;
}
}
});})(c__20007__auto__))
;
return ((function (switch__19945__auto__,c__20007__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__19946__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__19946__auto____0 = (function (){
var statearr_28539 = [null,null,null,null,null,null,null,null];
(statearr_28539[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__19946__auto__);

(statearr_28539[(1)] = (1));

return statearr_28539;
});
var figwheel$client$enforce_project_plugin_$_state_machine__19946__auto____1 = (function (state_28533){
while(true){
var ret_value__19947__auto__ = (function (){try{while(true){
var result__19948__auto__ = switch__19945__auto__.call(null,state_28533);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19948__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19948__auto__;
}
break;
}
}catch (e28540){if((e28540 instanceof Object)){
var ex__19949__auto__ = e28540;
var statearr_28541_28543 = state_28533;
(statearr_28541_28543[(5)] = ex__19949__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28533);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28540;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28544 = state_28533;
state_28533 = G__28544;
continue;
} else {
return ret_value__19947__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__19946__auto__ = function(state_28533){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__19946__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__19946__auto____1.call(this,state_28533);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__19946__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__19946__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__19946__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__19946__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__19946__auto__;
})()
;})(switch__19945__auto__,c__20007__auto__))
})();
var state__20009__auto__ = (function (){var statearr_28542 = f__20008__auto__.call(null);
(statearr_28542[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20007__auto__);

return statearr_28542;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20009__auto__);
});})(c__20007__auto__))
);

return c__20007__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = (function figwheel$client$default_on_jsload(url){
if(cljs.core.truth_((function (){var and__17941__auto__ = figwheel.client.utils.html_env_QMARK_.call(null);
if(cljs.core.truth_(and__17941__auto__)){
return ("CustomEvent" in window);
} else {
return and__17941__auto__;
}
})())){
return document.body.dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj28548 = {"detail":url};
return obj28548;
})())));
} else {
return null;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__28549){
var map__28555 = p__28549;
var map__28555__$1 = ((cljs.core.seq_QMARK_.call(null,map__28555))?cljs.core.apply.call(null,cljs.core.hash_map,map__28555):map__28555);
var ed = map__28555__$1;
var exception_data = cljs.core.get.call(null,map__28555__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__28555__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__28556_28560 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__28557_28561 = null;
var count__28558_28562 = (0);
var i__28559_28563 = (0);
while(true){
if((i__28559_28563 < count__28558_28562)){
var msg_28564 = cljs.core._nth.call(null,chunk__28557_28561,i__28559_28563);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_28564);

var G__28565 = seq__28556_28560;
var G__28566 = chunk__28557_28561;
var G__28567 = count__28558_28562;
var G__28568 = (i__28559_28563 + (1));
seq__28556_28560 = G__28565;
chunk__28557_28561 = G__28566;
count__28558_28562 = G__28567;
i__28559_28563 = G__28568;
continue;
} else {
var temp__4126__auto___28569 = cljs.core.seq.call(null,seq__28556_28560);
if(temp__4126__auto___28569){
var seq__28556_28570__$1 = temp__4126__auto___28569;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28556_28570__$1)){
var c__18738__auto___28571 = cljs.core.chunk_first.call(null,seq__28556_28570__$1);
var G__28572 = cljs.core.chunk_rest.call(null,seq__28556_28570__$1);
var G__28573 = c__18738__auto___28571;
var G__28574 = cljs.core.count.call(null,c__18738__auto___28571);
var G__28575 = (0);
seq__28556_28560 = G__28572;
chunk__28557_28561 = G__28573;
count__28558_28562 = G__28574;
i__28559_28563 = G__28575;
continue;
} else {
var msg_28576 = cljs.core.first.call(null,seq__28556_28570__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_28576);

var G__28577 = cljs.core.next.call(null,seq__28556_28570__$1);
var G__28578 = null;
var G__28579 = (0);
var G__28580 = (0);
seq__28556_28560 = G__28577;
chunk__28557_28561 = G__28578;
count__28558_28562 = G__28579;
i__28559_28563 = G__28580;
continue;
}
} else {
}
}
break;
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__28581){
var map__28583 = p__28581;
var map__28583__$1 = ((cljs.core.seq_QMARK_.call(null,map__28583))?cljs.core.apply.call(null,cljs.core.hash_map,map__28583):map__28583);
var w = map__28583__$1;
var message = cljs.core.get.call(null,map__28583__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704),new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[true,figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,(100),true,false,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,goog.inHtmlDocument_()))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__17941__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__17941__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__17941__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__28590 = cljs.core.seq.call(null,plugins);
var chunk__28591 = null;
var count__28592 = (0);
var i__28593 = (0);
while(true){
if((i__28593 < count__28592)){
var vec__28594 = cljs.core._nth.call(null,chunk__28591,i__28593);
var k = cljs.core.nth.call(null,vec__28594,(0),null);
var plugin = cljs.core.nth.call(null,vec__28594,(1),null);
if(cljs.core.truth_(plugin)){
var pl_28596 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28590,chunk__28591,count__28592,i__28593,pl_28596,vec__28594,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_28596.call(null,msg_hist);
});})(seq__28590,chunk__28591,count__28592,i__28593,pl_28596,vec__28594,k,plugin))
);
} else {
}

var G__28597 = seq__28590;
var G__28598 = chunk__28591;
var G__28599 = count__28592;
var G__28600 = (i__28593 + (1));
seq__28590 = G__28597;
chunk__28591 = G__28598;
count__28592 = G__28599;
i__28593 = G__28600;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__28590);
if(temp__4126__auto__){
var seq__28590__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28590__$1)){
var c__18738__auto__ = cljs.core.chunk_first.call(null,seq__28590__$1);
var G__28601 = cljs.core.chunk_rest.call(null,seq__28590__$1);
var G__28602 = c__18738__auto__;
var G__28603 = cljs.core.count.call(null,c__18738__auto__);
var G__28604 = (0);
seq__28590 = G__28601;
chunk__28591 = G__28602;
count__28592 = G__28603;
i__28593 = G__28604;
continue;
} else {
var vec__28595 = cljs.core.first.call(null,seq__28590__$1);
var k = cljs.core.nth.call(null,vec__28595,(0),null);
var plugin = cljs.core.nth.call(null,vec__28595,(1),null);
if(cljs.core.truth_(plugin)){
var pl_28605 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28590,chunk__28591,count__28592,i__28593,pl_28605,vec__28595,k,plugin,seq__28590__$1,temp__4126__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_28605.call(null,msg_hist);
});})(seq__28590,chunk__28591,count__28592,i__28593,pl_28605,vec__28595,k,plugin,seq__28590__$1,temp__4126__auto__))
);
} else {
}

var G__28606 = cljs.core.next.call(null,seq__28590__$1);
var G__28607 = null;
var G__28608 = (0);
var G__28609 = (0);
seq__28590 = G__28606;
chunk__28591 = G__28607;
count__28592 = G__28608;
i__28593 = G__28609;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(){
var G__28611 = arguments.length;
switch (G__28611) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(){
var argseq__18993__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__18993__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__28614){
var map__28615 = p__28614;
var map__28615__$1 = ((cljs.core.seq_QMARK_.call(null,map__28615))?cljs.core.apply.call(null,cljs.core.hash_map,map__28615):map__28615);
var opts = map__28615__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq28613){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28613));
});

//# sourceMappingURL=client.js.map