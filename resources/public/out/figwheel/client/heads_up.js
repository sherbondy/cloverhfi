// Compiled by ClojureScript 0.0-3211 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('clojure.string');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(){
var argseq__18993__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__18993__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__28768_28776 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__28769_28777 = null;
var count__28770_28778 = (0);
var i__28771_28779 = (0);
while(true){
if((i__28771_28779 < count__28770_28778)){
var k_28780 = cljs.core._nth.call(null,chunk__28769_28777,i__28771_28779);
e.setAttribute(cljs.core.name.call(null,k_28780),cljs.core.get.call(null,attrs,k_28780));

var G__28781 = seq__28768_28776;
var G__28782 = chunk__28769_28777;
var G__28783 = count__28770_28778;
var G__28784 = (i__28771_28779 + (1));
seq__28768_28776 = G__28781;
chunk__28769_28777 = G__28782;
count__28770_28778 = G__28783;
i__28771_28779 = G__28784;
continue;
} else {
var temp__4126__auto___28785 = cljs.core.seq.call(null,seq__28768_28776);
if(temp__4126__auto___28785){
var seq__28768_28786__$1 = temp__4126__auto___28785;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28768_28786__$1)){
var c__18738__auto___28787 = cljs.core.chunk_first.call(null,seq__28768_28786__$1);
var G__28788 = cljs.core.chunk_rest.call(null,seq__28768_28786__$1);
var G__28789 = c__18738__auto___28787;
var G__28790 = cljs.core.count.call(null,c__18738__auto___28787);
var G__28791 = (0);
seq__28768_28776 = G__28788;
chunk__28769_28777 = G__28789;
count__28770_28778 = G__28790;
i__28771_28779 = G__28791;
continue;
} else {
var k_28792 = cljs.core.first.call(null,seq__28768_28786__$1);
e.setAttribute(cljs.core.name.call(null,k_28792),cljs.core.get.call(null,attrs,k_28792));

var G__28793 = cljs.core.next.call(null,seq__28768_28786__$1);
var G__28794 = null;
var G__28795 = (0);
var G__28796 = (0);
seq__28768_28776 = G__28793;
chunk__28769_28777 = G__28794;
count__28770_28778 = G__28795;
i__28771_28779 = G__28796;
continue;
}
} else {
}
}
break;
}

var seq__28772_28797 = cljs.core.seq.call(null,children);
var chunk__28773_28798 = null;
var count__28774_28799 = (0);
var i__28775_28800 = (0);
while(true){
if((i__28775_28800 < count__28774_28799)){
var ch_28801 = cljs.core._nth.call(null,chunk__28773_28798,i__28775_28800);
e.appendChild(ch_28801);

var G__28802 = seq__28772_28797;
var G__28803 = chunk__28773_28798;
var G__28804 = count__28774_28799;
var G__28805 = (i__28775_28800 + (1));
seq__28772_28797 = G__28802;
chunk__28773_28798 = G__28803;
count__28774_28799 = G__28804;
i__28775_28800 = G__28805;
continue;
} else {
var temp__4126__auto___28806 = cljs.core.seq.call(null,seq__28772_28797);
if(temp__4126__auto___28806){
var seq__28772_28807__$1 = temp__4126__auto___28806;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28772_28807__$1)){
var c__18738__auto___28808 = cljs.core.chunk_first.call(null,seq__28772_28807__$1);
var G__28809 = cljs.core.chunk_rest.call(null,seq__28772_28807__$1);
var G__28810 = c__18738__auto___28808;
var G__28811 = cljs.core.count.call(null,c__18738__auto___28808);
var G__28812 = (0);
seq__28772_28797 = G__28809;
chunk__28773_28798 = G__28810;
count__28774_28799 = G__28811;
i__28775_28800 = G__28812;
continue;
} else {
var ch_28813 = cljs.core.first.call(null,seq__28772_28807__$1);
e.appendChild(ch_28813);

var G__28814 = cljs.core.next.call(null,seq__28772_28807__$1);
var G__28815 = null;
var G__28816 = (0);
var G__28817 = (0);
seq__28772_28797 = G__28814;
chunk__28773_28798 = G__28815;
count__28774_28799 = G__28816;
i__28775_28800 = G__28817;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq28765){
var G__28766 = cljs.core.first.call(null,seq28765);
var seq28765__$1 = cljs.core.next.call(null,seq28765);
var G__28767 = cljs.core.first.call(null,seq28765__$1);
var seq28765__$2 = cljs.core.next.call(null,seq28765__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__28766,G__28767,seq28765__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__18848__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__18849__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__18850__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__18851__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__18852__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__18848__auto__,prefer_table__18849__auto__,method_cache__18850__auto__,cached_hierarchy__18851__auto__,hierarchy__18852__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__18848__auto__,prefer_table__18849__auto__,method_cache__18850__auto__,cached_hierarchy__18851__auto__,hierarchy__18852__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__18852__auto__,method_table__18848__auto__,prefer_table__18849__auto__,method_cache__18850__auto__,cached_hierarchy__18851__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_28818 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_28818.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_28818.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_28818.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_28818);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__28819,st_map){
var map__28823 = p__28819;
var map__28823__$1 = ((cljs.core.seq_QMARK_.call(null,map__28823))?cljs.core.apply.call(null,cljs.core.hash_map,map__28823):map__28823);
var container_el = cljs.core.get.call(null,map__28823__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__28823,map__28823__$1,container_el){
return (function (p__28824){
var vec__28825 = p__28824;
var k = cljs.core.nth.call(null,vec__28825,(0),null);
var v = cljs.core.nth.call(null,vec__28825,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__28823,map__28823__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__28826,dom_str){
var map__28828 = p__28826;
var map__28828__$1 = ((cljs.core.seq_QMARK_.call(null,map__28828))?cljs.core.apply.call(null,cljs.core.hash_map,map__28828):map__28828);
var c = map__28828__$1;
var content_area_el = cljs.core.get.call(null,map__28828__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__28829){
var map__28831 = p__28829;
var map__28831__$1 = ((cljs.core.seq_QMARK_.call(null,map__28831))?cljs.core.apply.call(null,cljs.core.hash_map,map__28831):map__28831);
var content_area_el = cljs.core.get.call(null,map__28831__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__20007__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20007__auto__){
return (function (){
var f__20008__auto__ = (function (){var switch__19945__auto__ = ((function (c__20007__auto__){
return (function (state_28873){
var state_val_28874 = (state_28873[(1)]);
if((state_val_28874 === (2))){
var inst_28858 = (state_28873[(7)]);
var inst_28867 = (state_28873[(2)]);
var inst_28868 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_28869 = ["auto"];
var inst_28870 = cljs.core.PersistentHashMap.fromArrays(inst_28868,inst_28869);
var inst_28871 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28858,inst_28870);
var state_28873__$1 = (function (){var statearr_28875 = state_28873;
(statearr_28875[(8)] = inst_28867);

return statearr_28875;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28873__$1,inst_28871);
} else {
if((state_val_28874 === (1))){
var inst_28858 = (state_28873[(7)]);
var inst_28858__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_28859 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_28860 = ["10px","10px","100%","68px","1.0"];
var inst_28861 = cljs.core.PersistentHashMap.fromArrays(inst_28859,inst_28860);
var inst_28862 = cljs.core.merge.call(null,inst_28861,style);
var inst_28863 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28858__$1,inst_28862);
var inst_28864 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_28858__$1,msg);
var inst_28865 = cljs.core.async.timeout.call(null,(300));
var state_28873__$1 = (function (){var statearr_28876 = state_28873;
(statearr_28876[(9)] = inst_28864);

(statearr_28876[(10)] = inst_28863);

(statearr_28876[(7)] = inst_28858__$1);

return statearr_28876;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28873__$1,(2),inst_28865);
} else {
return null;
}
}
});})(c__20007__auto__))
;
return ((function (switch__19945__auto__,c__20007__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__19946__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__19946__auto____0 = (function (){
var statearr_28880 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28880[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__19946__auto__);

(statearr_28880[(1)] = (1));

return statearr_28880;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__19946__auto____1 = (function (state_28873){
while(true){
var ret_value__19947__auto__ = (function (){try{while(true){
var result__19948__auto__ = switch__19945__auto__.call(null,state_28873);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19948__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19948__auto__;
}
break;
}
}catch (e28881){if((e28881 instanceof Object)){
var ex__19949__auto__ = e28881;
var statearr_28882_28884 = state_28873;
(statearr_28882_28884[(5)] = ex__19949__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28873);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28881;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28885 = state_28873;
state_28873 = G__28885;
continue;
} else {
return ret_value__19947__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__19946__auto__ = function(state_28873){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__19946__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__19946__auto____1.call(this,state_28873);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__19946__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__19946__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__19946__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__19946__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__19946__auto__;
})()
;})(switch__19945__auto__,c__20007__auto__))
})();
var state__20009__auto__ = (function (){var statearr_28883 = f__20008__auto__.call(null);
(statearr_28883[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20007__auto__);

return statearr_28883;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20009__auto__);
});})(c__20007__auto__))
);

return c__20007__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var temp__4124__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg);
if(cljs.core.truth_(temp__4124__auto__)){
var vec__28887 = temp__4124__auto__;
var f = cljs.core.nth.call(null,vec__28887,(0),null);
var ln = cljs.core.nth.call(null,vec__28887,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages){
var vec__28890 = cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages));
var file_name = cljs.core.nth.call(null,vec__28890,(0),null);
var file_line = cljs.core.nth.call(null,vec__28890,(1),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__28890,file_name,file_line){
return (function (p1__28888_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__28888_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__28890,file_name,file_line))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,file_line,msg))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__28892 = figwheel.client.heads_up.ensure_container.call(null);
var map__28892__$1 = ((cljs.core.seq_QMARK_.call(null,map__28892))?cljs.core.apply.call(null,cljs.core.hash_map,map__28892):map__28892);
var content_area_el = cljs.core.get.call(null,map__28892__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__20007__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20007__auto__){
return (function (){
var f__20008__auto__ = (function (){var switch__19945__auto__ = ((function (c__20007__auto__){
return (function (state_28939){
var state_val_28940 = (state_28939[(1)]);
if((state_val_28940 === (3))){
var inst_28922 = (state_28939[(7)]);
var inst_28936 = (state_28939[(2)]);
var inst_28937 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_28922,"");
var state_28939__$1 = (function (){var statearr_28941 = state_28939;
(statearr_28941[(8)] = inst_28936);

return statearr_28941;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28939__$1,inst_28937);
} else {
if((state_val_28940 === (2))){
var inst_28922 = (state_28939[(7)]);
var inst_28929 = (state_28939[(2)]);
var inst_28930 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_28931 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_28932 = cljs.core.PersistentHashMap.fromArrays(inst_28930,inst_28931);
var inst_28933 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28922,inst_28932);
var inst_28934 = cljs.core.async.timeout.call(null,(200));
var state_28939__$1 = (function (){var statearr_28942 = state_28939;
(statearr_28942[(9)] = inst_28929);

(statearr_28942[(10)] = inst_28933);

return statearr_28942;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28939__$1,(3),inst_28934);
} else {
if((state_val_28940 === (1))){
var inst_28922 = (state_28939[(7)]);
var inst_28922__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_28923 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_28924 = ["0.0"];
var inst_28925 = cljs.core.PersistentHashMap.fromArrays(inst_28923,inst_28924);
var inst_28926 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28922__$1,inst_28925);
var inst_28927 = cljs.core.async.timeout.call(null,(300));
var state_28939__$1 = (function (){var statearr_28943 = state_28939;
(statearr_28943[(11)] = inst_28926);

(statearr_28943[(7)] = inst_28922__$1);

return statearr_28943;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28939__$1,(2),inst_28927);
} else {
return null;
}
}
}
});})(c__20007__auto__))
;
return ((function (switch__19945__auto__,c__20007__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__19946__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__19946__auto____0 = (function (){
var statearr_28947 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28947[(0)] = figwheel$client$heads_up$clear_$_state_machine__19946__auto__);

(statearr_28947[(1)] = (1));

return statearr_28947;
});
var figwheel$client$heads_up$clear_$_state_machine__19946__auto____1 = (function (state_28939){
while(true){
var ret_value__19947__auto__ = (function (){try{while(true){
var result__19948__auto__ = switch__19945__auto__.call(null,state_28939);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19948__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19948__auto__;
}
break;
}
}catch (e28948){if((e28948 instanceof Object)){
var ex__19949__auto__ = e28948;
var statearr_28949_28951 = state_28939;
(statearr_28949_28951[(5)] = ex__19949__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28939);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28948;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28952 = state_28939;
state_28939 = G__28952;
continue;
} else {
return ret_value__19947__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__19946__auto__ = function(state_28939){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__19946__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__19946__auto____1.call(this,state_28939);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__19946__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__19946__auto____0;
figwheel$client$heads_up$clear_$_state_machine__19946__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__19946__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__19946__auto__;
})()
;})(switch__19945__auto__,c__20007__auto__))
})();
var state__20009__auto__ = (function (){var statearr_28950 = f__20008__auto__.call(null);
(statearr_28950[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20007__auto__);

return statearr_28950;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20009__auto__);
});})(c__20007__auto__))
);

return c__20007__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__20007__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20007__auto__){
return (function (){
var f__20008__auto__ = (function (){var switch__19945__auto__ = ((function (c__20007__auto__){
return (function (state_28984){
var state_val_28985 = (state_28984[(1)]);
if((state_val_28985 === (4))){
var inst_28982 = (state_28984[(2)]);
var state_28984__$1 = state_28984;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28984__$1,inst_28982);
} else {
if((state_val_28985 === (3))){
var inst_28979 = (state_28984[(2)]);
var inst_28980 = figwheel.client.heads_up.clear.call(null);
var state_28984__$1 = (function (){var statearr_28986 = state_28984;
(statearr_28986[(7)] = inst_28979);

return statearr_28986;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28984__$1,(4),inst_28980);
} else {
if((state_val_28985 === (2))){
var inst_28976 = (state_28984[(2)]);
var inst_28977 = cljs.core.async.timeout.call(null,(400));
var state_28984__$1 = (function (){var statearr_28987 = state_28984;
(statearr_28987[(8)] = inst_28976);

return statearr_28987;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28984__$1,(3),inst_28977);
} else {
if((state_val_28985 === (1))){
var inst_28974 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_28984__$1 = state_28984;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28984__$1,(2),inst_28974);
} else {
return null;
}
}
}
}
});})(c__20007__auto__))
;
return ((function (switch__19945__auto__,c__20007__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__19946__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__19946__auto____0 = (function (){
var statearr_28991 = [null,null,null,null,null,null,null,null,null];
(statearr_28991[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__19946__auto__);

(statearr_28991[(1)] = (1));

return statearr_28991;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__19946__auto____1 = (function (state_28984){
while(true){
var ret_value__19947__auto__ = (function (){try{while(true){
var result__19948__auto__ = switch__19945__auto__.call(null,state_28984);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19948__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19948__auto__;
}
break;
}
}catch (e28992){if((e28992 instanceof Object)){
var ex__19949__auto__ = e28992;
var statearr_28993_28995 = state_28984;
(statearr_28993_28995[(5)] = ex__19949__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28984);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28992;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28996 = state_28984;
state_28984 = G__28996;
continue;
} else {
return ret_value__19947__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__19946__auto__ = function(state_28984){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__19946__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__19946__auto____1.call(this,state_28984);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__19946__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__19946__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__19946__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__19946__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__19946__auto__;
})()
;})(switch__19945__auto__,c__20007__auto__))
})();
var state__20009__auto__ = (function (){var statearr_28994 = f__20008__auto__.call(null);
(statearr_28994[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20007__auto__);

return statearr_28994;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20009__auto__);
});})(c__20007__auto__))
);

return c__20007__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map