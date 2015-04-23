// Compiled by ClojureScript 0.0-3211 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4126__auto__)){
var ns = temp__4126__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__29011_29023 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29012_29024 = null;
var count__29013_29025 = (0);
var i__29014_29026 = (0);
while(true){
if((i__29014_29026 < count__29013_29025)){
var f_29027 = cljs.core._nth.call(null,chunk__29012_29024,i__29014_29026);
cljs.core.println.call(null,"  ",f_29027);

var G__29028 = seq__29011_29023;
var G__29029 = chunk__29012_29024;
var G__29030 = count__29013_29025;
var G__29031 = (i__29014_29026 + (1));
seq__29011_29023 = G__29028;
chunk__29012_29024 = G__29029;
count__29013_29025 = G__29030;
i__29014_29026 = G__29031;
continue;
} else {
var temp__4126__auto___29032 = cljs.core.seq.call(null,seq__29011_29023);
if(temp__4126__auto___29032){
var seq__29011_29033__$1 = temp__4126__auto___29032;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29011_29033__$1)){
var c__18738__auto___29034 = cljs.core.chunk_first.call(null,seq__29011_29033__$1);
var G__29035 = cljs.core.chunk_rest.call(null,seq__29011_29033__$1);
var G__29036 = c__18738__auto___29034;
var G__29037 = cljs.core.count.call(null,c__18738__auto___29034);
var G__29038 = (0);
seq__29011_29023 = G__29035;
chunk__29012_29024 = G__29036;
count__29013_29025 = G__29037;
i__29014_29026 = G__29038;
continue;
} else {
var f_29039 = cljs.core.first.call(null,seq__29011_29033__$1);
cljs.core.println.call(null,"  ",f_29039);

var G__29040 = cljs.core.next.call(null,seq__29011_29033__$1);
var G__29041 = null;
var G__29042 = (0);
var G__29043 = (0);
seq__29011_29023 = G__29040;
chunk__29012_29024 = G__29041;
count__29013_29025 = G__29042;
i__29014_29026 = G__29043;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
if(cljs.core.truth_((function (){var or__17953__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__17953__auto__)){
return or__17953__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m));
} else {
cljs.core.prn.call(null,cljs.core.second.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m)));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__29015 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29016 = null;
var count__29017 = (0);
var i__29018 = (0);
while(true){
if((i__29018 < count__29017)){
var vec__29019 = cljs.core._nth.call(null,chunk__29016,i__29018);
var name = cljs.core.nth.call(null,vec__29019,(0),null);
var map__29020 = cljs.core.nth.call(null,vec__29019,(1),null);
var map__29020__$1 = ((cljs.core.seq_QMARK_.call(null,map__29020))?cljs.core.apply.call(null,cljs.core.hash_map,map__29020):map__29020);
var arglists = cljs.core.get.call(null,map__29020__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__29020__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__29044 = seq__29015;
var G__29045 = chunk__29016;
var G__29046 = count__29017;
var G__29047 = (i__29018 + (1));
seq__29015 = G__29044;
chunk__29016 = G__29045;
count__29017 = G__29046;
i__29018 = G__29047;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__29015);
if(temp__4126__auto__){
var seq__29015__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29015__$1)){
var c__18738__auto__ = cljs.core.chunk_first.call(null,seq__29015__$1);
var G__29048 = cljs.core.chunk_rest.call(null,seq__29015__$1);
var G__29049 = c__18738__auto__;
var G__29050 = cljs.core.count.call(null,c__18738__auto__);
var G__29051 = (0);
seq__29015 = G__29048;
chunk__29016 = G__29049;
count__29017 = G__29050;
i__29018 = G__29051;
continue;
} else {
var vec__29021 = cljs.core.first.call(null,seq__29015__$1);
var name = cljs.core.nth.call(null,vec__29021,(0),null);
var map__29022 = cljs.core.nth.call(null,vec__29021,(1),null);
var map__29022__$1 = ((cljs.core.seq_QMARK_.call(null,map__29022))?cljs.core.apply.call(null,cljs.core.hash_map,map__29022):map__29022);
var arglists = cljs.core.get.call(null,map__29022__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__29022__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__29052 = cljs.core.next.call(null,seq__29015__$1);
var G__29053 = null;
var G__29054 = (0);
var G__29055 = (0);
seq__29015 = G__29052;
chunk__29016 = G__29053;
count__29017 = G__29054;
i__29018 = G__29055;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map