// Compiled by ClojureScript 0.0-3211 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t29783 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29783 = (function (f,fn_handler,meta29784){
this.f = f;
this.fn_handler = fn_handler;
this.meta29784 = meta29784;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29783.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t29783.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t29783.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t29783.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29785){
var self__ = this;
var _29785__$1 = this;
return self__.meta29784;
});

cljs.core.async.t29783.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29785,meta29784__$1){
var self__ = this;
var _29785__$1 = this;
return (new cljs.core.async.t29783(self__.f,self__.fn_handler,meta29784__$1));
});

cljs.core.async.t29783.cljs$lang$type = true;

cljs.core.async.t29783.cljs$lang$ctorStr = "cljs.core.async/t29783";

cljs.core.async.t29783.cljs$lang$ctorPrWriter = (function (this__18532__auto__,writer__18533__auto__,opt__18534__auto__){
return cljs.core._write.call(null,writer__18533__auto__,"cljs.core.async/t29783");
});

cljs.core.async.__GT_t29783 = (function cljs$core$async$fn_handler_$___GT_t29783(f__$1,fn_handler__$1,meta29784){
return (new cljs.core.async.t29783(f__$1,fn_handler__$1,meta29784));
});

}

return (new cljs.core.async.t29783(f,cljs$core$async$fn_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
var G__29787 = buff;
if(G__29787){
var bit__18627__auto__ = null;
if(cljs.core.truth_((function (){var or__17953__auto__ = bit__18627__auto__;
if(cljs.core.truth_(or__17953__auto__)){
return or__17953__auto__;
} else {
return G__29787.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__29787.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__29787);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__29787);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(){
var G__29789 = arguments.length;
switch (G__29789) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(){
var G__29792 = arguments.length;
switch (G__29792) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_29794 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_29794);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_29794,ret){
return (function (){
return fn1.call(null,val_29794);
});})(val_29794,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(){
var G__29796 = arguments.length;
switch (G__29796) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4124__auto__)){
var ret = temp__4124__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4124__auto__)){
var retb = temp__4124__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__18838__auto___29798 = n;
var x_29799 = (0);
while(true){
if((x_29799 < n__18838__auto___29798)){
(a[x_29799] = (0));

var G__29800 = (x_29799 + (1));
x_29799 = G__29800;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__29801 = (i + (1));
i = G__29801;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t29805 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29805 = (function (flag,alt_flag,meta29806){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta29806 = meta29806;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29805.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t29805.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t29805.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t29805.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_29807){
var self__ = this;
var _29807__$1 = this;
return self__.meta29806;
});})(flag))
;

cljs.core.async.t29805.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_29807,meta29806__$1){
var self__ = this;
var _29807__$1 = this;
return (new cljs.core.async.t29805(self__.flag,self__.alt_flag,meta29806__$1));
});})(flag))
;

cljs.core.async.t29805.cljs$lang$type = true;

cljs.core.async.t29805.cljs$lang$ctorStr = "cljs.core.async/t29805";

cljs.core.async.t29805.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__18532__auto__,writer__18533__auto__,opt__18534__auto__){
return cljs.core._write.call(null,writer__18533__auto__,"cljs.core.async/t29805");
});})(flag))
;

cljs.core.async.__GT_t29805 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t29805(flag__$1,alt_flag__$1,meta29806){
return (new cljs.core.async.t29805(flag__$1,alt_flag__$1,meta29806));
});})(flag))
;

}

return (new cljs.core.async.t29805(flag,cljs$core$async$alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t29811 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29811 = (function (cb,flag,alt_handler,meta29812){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta29812 = meta29812;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29811.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t29811.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t29811.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t29811.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29813){
var self__ = this;
var _29813__$1 = this;
return self__.meta29812;
});

cljs.core.async.t29811.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29813,meta29812__$1){
var self__ = this;
var _29813__$1 = this;
return (new cljs.core.async.t29811(self__.cb,self__.flag,self__.alt_handler,meta29812__$1));
});

cljs.core.async.t29811.cljs$lang$type = true;

cljs.core.async.t29811.cljs$lang$ctorStr = "cljs.core.async/t29811";

cljs.core.async.t29811.cljs$lang$ctorPrWriter = (function (this__18532__auto__,writer__18533__auto__,opt__18534__auto__){
return cljs.core._write.call(null,writer__18533__auto__,"cljs.core.async/t29811");
});

cljs.core.async.__GT_t29811 = (function cljs$core$async$alt_handler_$___GT_t29811(cb__$1,flag__$1,alt_handler__$1,meta29812){
return (new cljs.core.async.t29811(cb__$1,flag__$1,alt_handler__$1,meta29812));
});

}

return (new cljs.core.async.t29811(cb,flag,cljs$core$async$alt_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29814_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29814_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29815_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29815_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__17953__auto__ = wport;
if(cljs.core.truth_(or__17953__auto__)){
return or__17953__auto__;
} else {
return port;
}
})()], null));
} else {
var G__29816 = (i + (1));
i = G__29816;
continue;
}
} else {
return null;
}
break;
}
})();
var or__17953__auto__ = ret;
if(cljs.core.truth_(or__17953__auto__)){
return or__17953__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__17941__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__17941__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__17941__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var got = temp__4126__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(){
var argseq__18993__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18993__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__29819){
var map__29820 = p__29819;
var map__29820__$1 = ((cljs.core.seq_QMARK_.call(null,map__29820))?cljs.core.apply.call(null,cljs.core.hash_map,map__29820):map__29820);
var opts = map__29820__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq29817){
var G__29818 = cljs.core.first.call(null,seq29817);
var seq29817__$1 = cljs.core.next.call(null,seq29817);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29818,seq29817__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__29822 = arguments.length;
switch (G__29822) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__20007__auto___29871 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20007__auto___29871){
return (function (){
var f__20008__auto__ = (function (){var switch__19945__auto__ = ((function (c__20007__auto___29871){
return (function (state_29846){
var state_val_29847 = (state_29846[(1)]);
if((state_val_29847 === (7))){
var inst_29842 = (state_29846[(2)]);
var state_29846__$1 = state_29846;
var statearr_29848_29872 = state_29846__$1;
(statearr_29848_29872[(2)] = inst_29842);

(statearr_29848_29872[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29847 === (1))){
var state_29846__$1 = state_29846;
var statearr_29849_29873 = state_29846__$1;
(statearr_29849_29873[(2)] = null);

(statearr_29849_29873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29847 === (4))){
var inst_29825 = (state_29846[(7)]);
var inst_29825__$1 = (state_29846[(2)]);
var inst_29826 = (inst_29825__$1 == null);
var state_29846__$1 = (function (){var statearr_29850 = state_29846;
(statearr_29850[(7)] = inst_29825__$1);

return statearr_29850;
})();
if(cljs.core.truth_(inst_29826)){
var statearr_29851_29874 = state_29846__$1;
(statearr_29851_29874[(1)] = (5));

} else {
var statearr_29852_29875 = state_29846__$1;
(statearr_29852_29875[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29847 === (13))){
var state_29846__$1 = state_29846;
var statearr_29853_29876 = state_29846__$1;
(statearr_29853_29876[(2)] = null);

(statearr_29853_29876[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29847 === (6))){
var inst_29825 = (state_29846[(7)]);
var state_29846__$1 = state_29846;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29846__$1,(11),to,inst_29825);
} else {
if((state_val_29847 === (3))){
var inst_29844 = (state_29846[(2)]);
var state_29846__$1 = state_29846;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29846__$1,inst_29844);
} else {
if((state_val_29847 === (12))){
var state_29846__$1 = state_29846;
var statearr_29854_29877 = state_29846__$1;
(statearr_29854_29877[(2)] = null);

(statearr_29854_29877[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29847 === (2))){
var state_29846__$1 = state_29846;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29846__$1,(4),from);
} else {
if((state_val_29847 === (11))){
var inst_29835 = (state_29846[(2)]);
var state_29846__$1 = state_29846;
if(cljs.core.truth_(inst_29835)){
var statearr_29855_29878 = state_29846__$1;
(statearr_29855_29878[(1)] = (12));

} else {
var statearr_29856_29879 = state_29846__$1;
(statearr_29856_29879[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29847 === (9))){
var state_29846__$1 = state_29846;
var statearr_29857_29880 = state_29846__$1;
(statearr_29857_29880[(2)] = null);

(statearr_29857_29880[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29847 === (5))){
var state_29846__$1 = state_29846;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29858_29881 = state_29846__$1;
(statearr_29858_29881[(1)] = (8));

} else {
var statearr_29859_29882 = state_29846__$1;
(statearr_29859_29882[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29847 === (14))){
var inst_29840 = (state_29846[(2)]);
var state_29846__$1 = state_29846;
var statearr_29860_29883 = state_29846__$1;
(statearr_29860_29883[(2)] = inst_29840);

(statearr_29860_29883[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29847 === (10))){
var inst_29832 = (state_29846[(2)]);
var state_29846__$1 = state_29846;
var statearr_29861_29884 = state_29846__$1;
(statearr_29861_29884[(2)] = inst_29832);

(statearr_29861_29884[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29847 === (8))){
var inst_29829 = cljs.core.async.close_BANG_.call(null,to);
var state_29846__$1 = state_29846;
var statearr_29862_29885 = state_29846__$1;
(statearr_29862_29885[(2)] = inst_29829);

(statearr_29862_29885[(1)] = (10));


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
});})(c__20007__auto___29871))
;
return ((function (switch__19945__auto__,c__20007__auto___29871){
return (function() {
var cljs$core$async$state_machine__19946__auto__ = null;
var cljs$core$async$state_machine__19946__auto____0 = (function (){
var statearr_29866 = [null,null,null,null,null,null,null,null];
(statearr_29866[(0)] = cljs$core$async$state_machine__19946__auto__);

(statearr_29866[(1)] = (1));

return statearr_29866;
});
var cljs$core$async$state_machine__19946__auto____1 = (function (state_29846){
while(true){
var ret_value__19947__auto__ = (function (){try{while(true){
var result__19948__auto__ = switch__19945__auto__.call(null,state_29846);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19948__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19948__auto__;
}
break;
}
}catch (e29867){if((e29867 instanceof Object)){
var ex__19949__auto__ = e29867;
var statearr_29868_29886 = state_29846;
(statearr_29868_29886[(5)] = ex__19949__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29846);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29867;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29887 = state_29846;
state_29846 = G__29887;
continue;
} else {
return ret_value__19947__auto__;
}
break;
}
});
cljs$core$async$state_machine__19946__auto__ = function(state_29846){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19946__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19946__auto____1.call(this,state_29846);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19946__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19946__auto____0;
cljs$core$async$state_machine__19946__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19946__auto____1;
return cljs$core$async$state_machine__19946__auto__;
})()
;})(switch__19945__auto__,c__20007__auto___29871))
})();
var state__20009__auto__ = (function (){var statearr_29869 = f__20008__auto__.call(null);
(statearr_29869[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20007__auto___29871);

return statearr_29869;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20009__auto__);
});})(c__20007__auto___29871))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__30071){
var vec__30072 = p__30071;
var v = cljs.core.nth.call(null,vec__30072,(0),null);
var p = cljs.core.nth.call(null,vec__30072,(1),null);
var job = vec__30072;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__20007__auto___30254 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20007__auto___30254,res,vec__30072,v,p,job,jobs,results){
return (function (){
var f__20008__auto__ = (function (){var switch__19945__auto__ = ((function (c__20007__auto___30254,res,vec__30072,v,p,job,jobs,results){
return (function (state_30077){
var state_val_30078 = (state_30077[(1)]);
if((state_val_30078 === (2))){
var inst_30074 = (state_30077[(2)]);
var inst_30075 = cljs.core.async.close_BANG_.call(null,res);
var state_30077__$1 = (function (){var statearr_30079 = state_30077;
(statearr_30079[(7)] = inst_30074);

return statearr_30079;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30077__$1,inst_30075);
} else {
if((state_val_30078 === (1))){
var state_30077__$1 = state_30077;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30077__$1,(2),res,v);
} else {
return null;
}
}
});})(c__20007__auto___30254,res,vec__30072,v,p,job,jobs,results))
;
return ((function (switch__19945__auto__,c__20007__auto___30254,res,vec__30072,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19946__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19946__auto____0 = (function (){
var statearr_30083 = [null,null,null,null,null,null,null,null];
(statearr_30083[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19946__auto__);

(statearr_30083[(1)] = (1));

return statearr_30083;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19946__auto____1 = (function (state_30077){
while(true){
var ret_value__19947__auto__ = (function (){try{while(true){
var result__19948__auto__ = switch__19945__auto__.call(null,state_30077);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19948__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19948__auto__;
}
break;
}
}catch (e30084){if((e30084 instanceof Object)){
var ex__19949__auto__ = e30084;
var statearr_30085_30255 = state_30077;
(statearr_30085_30255[(5)] = ex__19949__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30077);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30084;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30256 = state_30077;
state_30077 = G__30256;
continue;
} else {
return ret_value__19947__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19946__auto__ = function(state_30077){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19946__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19946__auto____1.call(this,state_30077);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19946__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19946__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19946__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19946__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19946__auto__;
})()
;})(switch__19945__auto__,c__20007__auto___30254,res,vec__30072,v,p,job,jobs,results))
})();
var state__20009__auto__ = (function (){var statearr_30086 = f__20008__auto__.call(null);
(statearr_30086[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20007__auto___30254);

return statearr_30086;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20009__auto__);
});})(c__20007__auto___30254,res,vec__30072,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__30087){
var vec__30088 = p__30087;
var v = cljs.core.nth.call(null,vec__30088,(0),null);
var p = cljs.core.nth.call(null,vec__30088,(1),null);
var job = vec__30088;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__18838__auto___30257 = n;
var __30258 = (0);
while(true){
if((__30258 < n__18838__auto___30257)){
var G__30089_30259 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__30089_30259) {
case "async":
var c__20007__auto___30261 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30258,c__20007__auto___30261,G__30089_30259,n__18838__auto___30257,jobs,results,process,async){
return (function (){
var f__20008__auto__ = (function (){var switch__19945__auto__ = ((function (__30258,c__20007__auto___30261,G__30089_30259,n__18838__auto___30257,jobs,results,process,async){
return (function (state_30102){
var state_val_30103 = (state_30102[(1)]);
if((state_val_30103 === (7))){
var inst_30098 = (state_30102[(2)]);
var state_30102__$1 = state_30102;
var statearr_30104_30262 = state_30102__$1;
(statearr_30104_30262[(2)] = inst_30098);

(statearr_30104_30262[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30103 === (6))){
var state_30102__$1 = state_30102;
var statearr_30105_30263 = state_30102__$1;
(statearr_30105_30263[(2)] = null);

(statearr_30105_30263[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30103 === (5))){
var state_30102__$1 = state_30102;
var statearr_30106_30264 = state_30102__$1;
(statearr_30106_30264[(2)] = null);

(statearr_30106_30264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30103 === (4))){
var inst_30092 = (state_30102[(2)]);
var inst_30093 = async.call(null,inst_30092);
var state_30102__$1 = state_30102;
if(cljs.core.truth_(inst_30093)){
var statearr_30107_30265 = state_30102__$1;
(statearr_30107_30265[(1)] = (5));

} else {
var statearr_30108_30266 = state_30102__$1;
(statearr_30108_30266[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30103 === (3))){
var inst_30100 = (state_30102[(2)]);
var state_30102__$1 = state_30102;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30102__$1,inst_30100);
} else {
if((state_val_30103 === (2))){
var state_30102__$1 = state_30102;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30102__$1,(4),jobs);
} else {
if((state_val_30103 === (1))){
var state_30102__$1 = state_30102;
var statearr_30109_30267 = state_30102__$1;
(statearr_30109_30267[(2)] = null);

(statearr_30109_30267[(1)] = (2));


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
});})(__30258,c__20007__auto___30261,G__30089_30259,n__18838__auto___30257,jobs,results,process,async))
;
return ((function (__30258,switch__19945__auto__,c__20007__auto___30261,G__30089_30259,n__18838__auto___30257,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19946__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19946__auto____0 = (function (){
var statearr_30113 = [null,null,null,null,null,null,null];
(statearr_30113[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19946__auto__);

(statearr_30113[(1)] = (1));

return statearr_30113;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19946__auto____1 = (function (state_30102){
while(true){
var ret_value__19947__auto__ = (function (){try{while(true){
var result__19948__auto__ = switch__19945__auto__.call(null,state_30102);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19948__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19948__auto__;
}
break;
}
}catch (e30114){if((e30114 instanceof Object)){
var ex__19949__auto__ = e30114;
var statearr_30115_30268 = state_30102;
(statearr_30115_30268[(5)] = ex__19949__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30102);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30114;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30269 = state_30102;
state_30102 = G__30269;
continue;
} else {
return ret_value__19947__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19946__auto__ = function(state_30102){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19946__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19946__auto____1.call(this,state_30102);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19946__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19946__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19946__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19946__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19946__auto__;
})()
;})(__30258,switch__19945__auto__,c__20007__auto___30261,G__30089_30259,n__18838__auto___30257,jobs,results,process,async))
})();
var state__20009__auto__ = (function (){var statearr_30116 = f__20008__auto__.call(null);
(statearr_30116[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20007__auto___30261);

return statearr_30116;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20009__auto__);
});})(__30258,c__20007__auto___30261,G__30089_30259,n__18838__auto___30257,jobs,results,process,async))
);


break;
case "compute":
var c__20007__auto___30270 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30258,c__20007__auto___30270,G__30089_30259,n__18838__auto___30257,jobs,results,process,async){
return (function (){
var f__20008__auto__ = (function (){var switch__19945__auto__ = ((function (__30258,c__20007__auto___30270,G__30089_30259,n__18838__auto___30257,jobs,results,process,async){
return (function (state_30129){
var state_val_30130 = (state_30129[(1)]);
if((state_val_30130 === (7))){
var inst_30125 = (state_30129[(2)]);
var state_30129__$1 = state_30129;
var statearr_30131_30271 = state_30129__$1;
(statearr_30131_30271[(2)] = inst_30125);

(statearr_30131_30271[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30130 === (6))){
var state_30129__$1 = state_30129;
var statearr_30132_30272 = state_30129__$1;
(statearr_30132_30272[(2)] = null);

(statearr_30132_30272[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30130 === (5))){
var state_30129__$1 = state_30129;
var statearr_30133_30273 = state_30129__$1;
(statearr_30133_30273[(2)] = null);

(statearr_30133_30273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30130 === (4))){
var inst_30119 = (state_30129[(2)]);
var inst_30120 = process.call(null,inst_30119);
var state_30129__$1 = state_30129;
if(cljs.core.truth_(inst_30120)){
var statearr_30134_30274 = state_30129__$1;
(statearr_30134_30274[(1)] = (5));

} else {
var statearr_30135_30275 = state_30129__$1;
(statearr_30135_30275[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30130 === (3))){
var inst_30127 = (state_30129[(2)]);
var state_30129__$1 = state_30129;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30129__$1,inst_30127);
} else {
if((state_val_30130 === (2))){
var state_30129__$1 = state_30129;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30129__$1,(4),jobs);
} else {
if((state_val_30130 === (1))){
var state_30129__$1 = state_30129;
var statearr_30136_30276 = state_30129__$1;
(statearr_30136_30276[(2)] = null);

(statearr_30136_30276[(1)] = (2));


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
});})(__30258,c__20007__auto___30270,G__30089_30259,n__18838__auto___30257,jobs,results,process,async))
;
return ((function (__30258,switch__19945__auto__,c__20007__auto___30270,G__30089_30259,n__18838__auto___30257,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19946__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19946__auto____0 = (function (){
var statearr_30140 = [null,null,null,null,null,null,null];
(statearr_30140[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19946__auto__);

(statearr_30140[(1)] = (1));

return statearr_30140;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19946__auto____1 = (function (state_30129){
while(true){
var ret_value__19947__auto__ = (function (){try{while(true){
var result__19948__auto__ = switch__19945__auto__.call(null,state_30129);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19948__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19948__auto__;
}
break;
}
}catch (e30141){if((e30141 instanceof Object)){
var ex__19949__auto__ = e30141;
var statearr_30142_30277 = state_30129;
(statearr_30142_30277[(5)] = ex__19949__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30129);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30141;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30278 = state_30129;
state_30129 = G__30278;
continue;
} else {
return ret_value__19947__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19946__auto__ = function(state_30129){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19946__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19946__auto____1.call(this,state_30129);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19946__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19946__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19946__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19946__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19946__auto__;
})()
;})(__30258,switch__19945__auto__,c__20007__auto___30270,G__30089_30259,n__18838__auto___30257,jobs,results,process,async))
})();
var state__20009__auto__ = (function (){var statearr_30143 = f__20008__auto__.call(null);
(statearr_30143[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20007__auto___30270);

return statearr_30143;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20009__auto__);
});})(__30258,c__20007__auto___30270,G__30089_30259,n__18838__auto___30257,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__30279 = (__30258 + (1));
__30258 = G__30279;
continue;
} else {
}
break;
}

var c__20007__auto___30280 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20007__auto___30280,jobs,results,process,async){
return (function (){
var f__20008__auto__ = (function (){var switch__19945__auto__ = ((function (c__20007__auto___30280,jobs,results,process,async){
return (function (state_30165){
var state_val_30166 = (state_30165[(1)]);
if((state_val_30166 === (9))){
var inst_30158 = (state_30165[(2)]);
var state_30165__$1 = (function (){var statearr_30167 = state_30165;
(statearr_30167[(7)] = inst_30158);

return statearr_30167;
})();
var statearr_30168_30281 = state_30165__$1;
(statearr_30168_30281[(2)] = null);

(statearr_30168_30281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30166 === (8))){
var inst_30151 = (state_30165[(8)]);
var inst_30156 = (state_30165[(2)]);
var state_30165__$1 = (function (){var statearr_30169 = state_30165;
(statearr_30169[(9)] = inst_30156);

return statearr_30169;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30165__$1,(9),results,inst_30151);
} else {
if((state_val_30166 === (7))){
var inst_30161 = (state_30165[(2)]);
var state_30165__$1 = state_30165;
var statearr_30170_30282 = state_30165__$1;
(statearr_30170_30282[(2)] = inst_30161);

(statearr_30170_30282[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30166 === (6))){
var inst_30146 = (state_30165[(10)]);
var inst_30151 = (state_30165[(8)]);
var inst_30151__$1 = cljs.core.async.chan.call(null,(1));
var inst_30152 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30153 = [inst_30146,inst_30151__$1];
var inst_30154 = (new cljs.core.PersistentVector(null,2,(5),inst_30152,inst_30153,null));
var state_30165__$1 = (function (){var statearr_30171 = state_30165;
(statearr_30171[(8)] = inst_30151__$1);

return statearr_30171;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30165__$1,(8),jobs,inst_30154);
} else {
if((state_val_30166 === (5))){
var inst_30149 = cljs.core.async.close_BANG_.call(null,jobs);
var state_30165__$1 = state_30165;
var statearr_30172_30283 = state_30165__$1;
(statearr_30172_30283[(2)] = inst_30149);

(statearr_30172_30283[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30166 === (4))){
var inst_30146 = (state_30165[(10)]);
var inst_30146__$1 = (state_30165[(2)]);
var inst_30147 = (inst_30146__$1 == null);
var state_30165__$1 = (function (){var statearr_30173 = state_30165;
(statearr_30173[(10)] = inst_30146__$1);

return statearr_30173;
})();
if(cljs.core.truth_(inst_30147)){
var statearr_30174_30284 = state_30165__$1;
(statearr_30174_30284[(1)] = (5));

} else {
var statearr_30175_30285 = state_30165__$1;
(statearr_30175_30285[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30166 === (3))){
var inst_30163 = (state_30165[(2)]);
var state_30165__$1 = state_30165;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30165__$1,inst_30163);
} else {
if((state_val_30166 === (2))){
var state_30165__$1 = state_30165;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30165__$1,(4),from);
} else {
if((state_val_30166 === (1))){
var state_30165__$1 = state_30165;
var statearr_30176_30286 = state_30165__$1;
(statearr_30176_30286[(2)] = null);

(statearr_30176_30286[(1)] = (2));


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
});})(c__20007__auto___30280,jobs,results,process,async))
;
return ((function (switch__19945__auto__,c__20007__auto___30280,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19946__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19946__auto____0 = (function (){
var statearr_30180 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30180[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19946__auto__);

(statearr_30180[(1)] = (1));

return statearr_30180;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19946__auto____1 = (function (state_30165){
while(true){
var ret_value__19947__auto__ = (function (){try{while(true){
var result__19948__auto__ = switch__19945__auto__.call(null,state_30165);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19948__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19948__auto__;
}
break;
}
}catch (e30181){if((e30181 instanceof Object)){
var ex__19949__auto__ = e30181;
var statearr_30182_30287 = state_30165;
(statearr_30182_30287[(5)] = ex__19949__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30165);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30181;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30288 = state_30165;
state_30165 = G__30288;
continue;
} else {
return ret_value__19947__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19946__auto__ = function(state_30165){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19946__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19946__auto____1.call(this,state_30165);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19946__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19946__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19946__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19946__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19946__auto__;
})()
;})(switch__19945__auto__,c__20007__auto___30280,jobs,results,process,async))
})();
var state__20009__auto__ = (function (){var statearr_30183 = f__20008__auto__.call(null);
(statearr_30183[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20007__auto___30280);

return statearr_30183;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20009__auto__);
});})(c__20007__auto___30280,jobs,results,process,async))
);


var c__20007__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20007__auto__,jobs,results,process,async){
return (function (){
var f__20008__auto__ = (function (){var switch__19945__auto__ = ((function (c__20007__auto__,jobs,results,process,async){
return (function (state_30221){
var state_val_30222 = (state_30221[(1)]);
if((state_val_30222 === (7))){
var inst_30217 = (state_30221[(2)]);
var state_30221__$1 = state_30221;
var statearr_30223_30289 = state_30221__$1;
(statearr_30223_30289[(2)] = inst_30217);

(statearr_30223_30289[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30222 === (20))){
var state_30221__$1 = state_30221;
var statearr_30224_30290 = state_30221__$1;
(statearr_30224_30290[(2)] = null);

(statearr_30224_30290[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30222 === (1))){
var state_30221__$1 = state_30221;
var statearr_30225_30291 = state_30221__$1;
(statearr_30225_30291[(2)] = null);

(statearr_30225_30291[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30222 === (4))){
var inst_30186 = (state_30221[(7)]);
var inst_30186__$1 = (state_30221[(2)]);
var inst_30187 = (inst_30186__$1 == null);
var state_30221__$1 = (function (){var statearr_30226 = state_30221;
(statearr_30226[(7)] = inst_30186__$1);

return statearr_30226;
})();
if(cljs.core.truth_(inst_30187)){
var statearr_30227_30292 = state_30221__$1;
(statearr_30227_30292[(1)] = (5));

} else {
var statearr_30228_30293 = state_30221__$1;
(statearr_30228_30293[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30222 === (15))){
var inst_30199 = (state_30221[(8)]);
var state_30221__$1 = state_30221;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30221__$1,(18),to,inst_30199);
} else {
if((state_val_30222 === (21))){
var inst_30212 = (state_30221[(2)]);
var state_30221__$1 = state_30221;
var statearr_30229_30294 = state_30221__$1;
(statearr_30229_30294[(2)] = inst_30212);

(statearr_30229_30294[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30222 === (13))){
var inst_30214 = (state_30221[(2)]);
var state_30221__$1 = (function (){var statearr_30230 = state_30221;
(statearr_30230[(9)] = inst_30214);

return statearr_30230;
})();
var statearr_30231_30295 = state_30221__$1;
(statearr_30231_30295[(2)] = null);

(statearr_30231_30295[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30222 === (6))){
var inst_30186 = (state_30221[(7)]);
var state_30221__$1 = state_30221;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30221__$1,(11),inst_30186);
} else {
if((state_val_30222 === (17))){
var inst_30207 = (state_30221[(2)]);
var state_30221__$1 = state_30221;
if(cljs.core.truth_(inst_30207)){
var statearr_30232_30296 = state_30221__$1;
(statearr_30232_30296[(1)] = (19));

} else {
var statearr_30233_30297 = state_30221__$1;
(statearr_30233_30297[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30222 === (3))){
var inst_30219 = (state_30221[(2)]);
var state_30221__$1 = state_30221;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30221__$1,inst_30219);
} else {
if((state_val_30222 === (12))){
var inst_30196 = (state_30221[(10)]);
var state_30221__$1 = state_30221;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30221__$1,(14),inst_30196);
} else {
if((state_val_30222 === (2))){
var state_30221__$1 = state_30221;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30221__$1,(4),results);
} else {
if((state_val_30222 === (19))){
var state_30221__$1 = state_30221;
var statearr_30234_30298 = state_30221__$1;
(statearr_30234_30298[(2)] = null);

(statearr_30234_30298[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30222 === (11))){
var inst_30196 = (state_30221[(2)]);
var state_30221__$1 = (function (){var statearr_30235 = state_30221;
(statearr_30235[(10)] = inst_30196);

return statearr_30235;
})();
var statearr_30236_30299 = state_30221__$1;
(statearr_30236_30299[(2)] = null);

(statearr_30236_30299[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30222 === (9))){
var state_30221__$1 = state_30221;
var statearr_30237_30300 = state_30221__$1;
(statearr_30237_30300[(2)] = null);

(statearr_30237_30300[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30222 === (5))){
var state_30221__$1 = state_30221;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30238_30301 = state_30221__$1;
(statearr_30238_30301[(1)] = (8));

} else {
var statearr_30239_30302 = state_30221__$1;
(statearr_30239_30302[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30222 === (14))){
var inst_30201 = (state_30221[(11)]);
var inst_30199 = (state_30221[(8)]);
var inst_30199__$1 = (state_30221[(2)]);
var inst_30200 = (inst_30199__$1 == null);
var inst_30201__$1 = cljs.core.not.call(null,inst_30200);
var state_30221__$1 = (function (){var statearr_30240 = state_30221;
(statearr_30240[(11)] = inst_30201__$1);

(statearr_30240[(8)] = inst_30199__$1);

return statearr_30240;
})();
if(inst_30201__$1){
var statearr_30241_30303 = state_30221__$1;
(statearr_30241_30303[(1)] = (15));

} else {
var statearr_30242_30304 = state_30221__$1;
(statearr_30242_30304[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30222 === (16))){
var inst_30201 = (state_30221[(11)]);
var state_30221__$1 = state_30221;
var statearr_30243_30305 = state_30221__$1;
(statearr_30243_30305[(2)] = inst_30201);

(statearr_30243_30305[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30222 === (10))){
var inst_30193 = (state_30221[(2)]);
var state_30221__$1 = state_30221;
var statearr_30244_30306 = state_30221__$1;
(statearr_30244_30306[(2)] = inst_30193);

(statearr_30244_30306[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30222 === (18))){
var inst_30204 = (state_30221[(2)]);
var state_30221__$1 = state_30221;
var statearr_30245_30307 = state_30221__$1;
(statearr_30245_30307[(2)] = inst_30204);

(statearr_30245_30307[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30222 === (8))){
var inst_30190 = cljs.core.async.close_BANG_.call(null,to);
var state_30221__$1 = state_30221;
var statearr_30246_30308 = state_30221__$1;
(statearr_30246_30308[(2)] = inst_30190);

(statearr_30246_30308[(1)] = (10));


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
});})(c__20007__auto__,jobs,results,process,async))
;
return ((function (switch__19945__auto__,c__20007__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19946__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19946__auto____0 = (function (){
var statearr_30250 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30250[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19946__auto__);

(statearr_30250[(1)] = (1));

return statearr_30250;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19946__auto____1 = (function (state_30221){
while(true){
var ret_value__19947__auto__ = (function (){try{while(true){
var result__19948__auto__ = switch__19945__auto__.call(null,state_30221);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19948__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19948__auto__;
}
break;
}
}catch (e30251){if((e30251 instanceof Object)){
var ex__19949__auto__ = e30251;
var statearr_30252_30309 = state_30221;
(statearr_30252_30309[(5)] = ex__19949__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30221);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30251;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30310 = state_30221;
state_30221 = G__30310;
continue;
} else {
return ret_value__19947__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19946__auto__ = function(state_30221){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19946__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19946__auto____1.call(this,state_30221);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19946__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19946__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19946__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19946__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19946__auto__;
})()
;})(switch__19945__auto__,c__20007__auto__,jobs,results,process,async))
})();
var state__20009__auto__ = (function (){var statearr_30253 = f__20008__auto__.call(null);
(statearr_30253[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20007__auto__);

return statearr_30253;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20009__auto__);
});})(c__20007__auto__,jobs,results,process,async))
);

return c__20007__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the async function af, with parallelism n. af
 * must be a function of two arguments, the first an input value and
 * the second a channel on which to place the result(s). af must close!
 * the channel before returning.  The presumption is that af will
 * return immediately, having launched some asynchronous operation
 * whose completion/callback will manipulate the result channel. Outputs
 * will be returned in order relative to  the inputs. By default, the to
 * channel will be closed when the from channel closes, but can be
 * determined by the close?  parameter. Will stop consuming the from
 * channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(){
var G__30312 = arguments.length;
switch (G__30312) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the transducer xf, with parallelism n. Because
 * it is parallel, the transducer will be applied independently to each
 * element, not across elements, and may produce zero or more outputs
 * per input.  Outputs will be returned in order relative to the
 * inputs. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes.
 * 
 * Note this is supplied for API compatibility with the Clojure version.
 * Values of N > 1 will not result in actual concurrency in a
 * single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(){
var G__30315 = arguments.length;
switch (G__30315) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function cljs$core$async$split(){
var G__30318 = arguments.length;
switch (G__30318) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__20007__auto___30370 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20007__auto___30370,tc,fc){
return (function (){
var f__20008__auto__ = (function (){var switch__19945__auto__ = ((function (c__20007__auto___30370,tc,fc){
return (function (state_30344){
var state_val_30345 = (state_30344[(1)]);
if((state_val_30345 === (7))){
var inst_30340 = (state_30344[(2)]);
var state_30344__$1 = state_30344;
var statearr_30346_30371 = state_30344__$1;
(statearr_30346_30371[(2)] = inst_30340);

(statearr_30346_30371[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30345 === (1))){
var state_30344__$1 = state_30344;
var statearr_30347_30372 = state_30344__$1;
(statearr_30347_30372[(2)] = null);

(statearr_30347_30372[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30345 === (4))){
var inst_30321 = (state_30344[(7)]);
var inst_30321__$1 = (state_30344[(2)]);
var inst_30322 = (inst_30321__$1 == null);
var state_30344__$1 = (function (){var statearr_30348 = state_30344;
(statearr_30348[(7)] = inst_30321__$1);

return statearr_30348;
})();
if(cljs.core.truth_(inst_30322)){
var statearr_30349_30373 = state_30344__$1;
(statearr_30349_30373[(1)] = (5));

} else {
var statearr_30350_30374 = state_30344__$1;
(statearr_30350_30374[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30345 === (13))){
var state_30344__$1 = state_30344;
var statearr_30351_30375 = state_30344__$1;
(statearr_30351_30375[(2)] = null);

(statearr_30351_30375[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30345 === (6))){
var inst_30321 = (state_30344[(7)]);
var inst_30327 = p.call(null,inst_30321);
var state_30344__$1 = state_30344;
if(cljs.core.truth_(inst_30327)){
var statearr_30352_30376 = state_30344__$1;
(statearr_30352_30376[(1)] = (9));

} else {
var statearr_30353_30377 = state_30344__$1;
(statearr_30353_30377[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30345 === (3))){
var inst_30342 = (state_30344[(2)]);
var state_30344__$1 = state_30344;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30344__$1,inst_30342);
} else {
if((state_val_30345 === (12))){
var state_30344__$1 = state_30344;
var statearr_30354_30378 = state_30344__$1;
(statearr_30354_30378[(2)] = null);

(statearr_30354_30378[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30345 === (2))){
var state_30344__$1 = state_30344;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30344__$1,(4),ch);
} else {
if((state_val_30345 === (11))){
var inst_30321 = (state_30344[(7)]);
var inst_30331 = (state_30344[(2)]);
var state_30344__$1 = state_30344;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30344__$1,(8),inst_30331,inst_30321);
} else {
if((state_val_30345 === (9))){
var state_30344__$1 = state_30344;
var statearr_30355_30379 = state_30344__$1;
(statearr_30355_30379[(2)] = tc);

(statearr_30355_30379[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30345 === (5))){
var inst_30324 = cljs.core.async.close_BANG_.call(null,tc);
var inst_30325 = cljs.core.async.close_BANG_.call(null,fc);
var state_30344__$1 = (function (){var statearr_30356 = state_30344;
(statearr_30356[(8)] = inst_30324);

return statearr_30356;
})();
var statearr_30357_30380 = state_30344__$1;
(statearr_30357_30380[(2)] = inst_30325);

(statearr_30357_30380[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30345 === (14))){
var inst_30338 = (state_30344[(2)]);
var state_30344__$1 = state_30344;
var statearr_30358_30381 = state_30344__$1;
(statearr_30358_30381[(2)] = inst_30338);

(statearr_30358_30381[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30345 === (10))){
var state_30344__$1 = state_30344;
var statearr_30359_30382 = state_30344__$1;
(statearr_30359_30382[(2)] = fc);

(statearr_30359_30382[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30345 === (8))){
var inst_30333 = (state_30344[(2)]);
var state_30344__$1 = state_30344;
if(cljs.core.truth_(inst_30333)){
var statearr_30360_30383 = state_30344__$1;
(statearr_30360_30383[(1)] = (12));

} else {
var statearr_30361_30384 = state_30344__$1;
(statearr_30361_30384[(1)] = (13));

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
});})(c__20007__auto___30370,tc,fc))
;
return ((function (switch__19945__auto__,c__20007__auto___30370,tc,fc){
return (function() {
var cljs$core$async$state_machine__19946__auto__ = null;
var cljs$core$async$state_machine__19946__auto____0 = (function (){
var statearr_30365 = [null,null,null,null,null,null,null,null,null];
(statearr_30365[(0)] = cljs$core$async$state_machine__19946__auto__);

(statearr_30365[(1)] = (1));

return statearr_30365;
});
var cljs$core$async$state_machine__19946__auto____1 = (function (state_30344){
while(true){
var ret_value__19947__auto__ = (function (){try{while(true){
var result__19948__auto__ = switch__19945__auto__.call(null,state_30344);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19948__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19948__auto__;
}
break;
}
}catch (e30366){if((e30366 instanceof Object)){
var ex__19949__auto__ = e30366;
var statearr_30367_30385 = state_30344;
(statearr_30367_30385[(5)] = ex__19949__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30344);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30366;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30386 = state_30344;
state_30344 = G__30386;
continue;
} else {
return ret_value__19947__auto__;
}
break;
}
});
cljs$core$async$state_machine__19946__auto__ = function(state_30344){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19946__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19946__auto____1.call(this,state_30344);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19946__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19946__auto____0;
cljs$core$async$state_machine__19946__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19946__auto____1;
return cljs$core$async$state_machine__19946__auto__;
})()
;})(switch__19945__auto__,c__20007__auto___30370,tc,fc))
})();
var state__20009__auto__ = (function (){var statearr_30368 = f__20008__auto__.call(null);
(statearr_30368[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20007__auto___30370);

return statearr_30368;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20009__auto__);
});})(c__20007__auto___30370,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__20007__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20007__auto__){
return (function (){
var f__20008__auto__ = (function (){var switch__19945__auto__ = ((function (c__20007__auto__){
return (function (state_30433){
var state_val_30434 = (state_30433[(1)]);
if((state_val_30434 === (7))){
var inst_30429 = (state_30433[(2)]);
var state_30433__$1 = state_30433;
var statearr_30435_30451 = state_30433__$1;
(statearr_30435_30451[(2)] = inst_30429);

(statearr_30435_30451[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30434 === (6))){
var inst_30419 = (state_30433[(7)]);
var inst_30422 = (state_30433[(8)]);
var inst_30426 = f.call(null,inst_30419,inst_30422);
var inst_30419__$1 = inst_30426;
var state_30433__$1 = (function (){var statearr_30436 = state_30433;
(statearr_30436[(7)] = inst_30419__$1);

return statearr_30436;
})();
var statearr_30437_30452 = state_30433__$1;
(statearr_30437_30452[(2)] = null);

(statearr_30437_30452[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30434 === (5))){
var inst_30419 = (state_30433[(7)]);
var state_30433__$1 = state_30433;
var statearr_30438_30453 = state_30433__$1;
(statearr_30438_30453[(2)] = inst_30419);

(statearr_30438_30453[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30434 === (4))){
var inst_30422 = (state_30433[(8)]);
var inst_30422__$1 = (state_30433[(2)]);
var inst_30423 = (inst_30422__$1 == null);
var state_30433__$1 = (function (){var statearr_30439 = state_30433;
(statearr_30439[(8)] = inst_30422__$1);

return statearr_30439;
})();
if(cljs.core.truth_(inst_30423)){
var statearr_30440_30454 = state_30433__$1;
(statearr_30440_30454[(1)] = (5));

} else {
var statearr_30441_30455 = state_30433__$1;
(statearr_30441_30455[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30434 === (3))){
var inst_30431 = (state_30433[(2)]);
var state_30433__$1 = state_30433;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30433__$1,inst_30431);
} else {
if((state_val_30434 === (2))){
var state_30433__$1 = state_30433;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30433__$1,(4),ch);
} else {
if((state_val_30434 === (1))){
var inst_30419 = init;
var state_30433__$1 = (function (){var statearr_30442 = state_30433;
(statearr_30442[(7)] = inst_30419);

return statearr_30442;
})();
var statearr_30443_30456 = state_30433__$1;
(statearr_30443_30456[(2)] = null);

(statearr_30443_30456[(1)] = (2));


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
});})(c__20007__auto__))
;
return ((function (switch__19945__auto__,c__20007__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__19946__auto__ = null;
var cljs$core$async$reduce_$_state_machine__19946__auto____0 = (function (){
var statearr_30447 = [null,null,null,null,null,null,null,null,null];
(statearr_30447[(0)] = cljs$core$async$reduce_$_state_machine__19946__auto__);

(statearr_30447[(1)] = (1));

return statearr_30447;
});
var cljs$core$async$reduce_$_state_machine__19946__auto____1 = (function (state_30433){
while(true){
var ret_value__19947__auto__ = (function (){try{while(true){
var result__19948__auto__ = switch__19945__auto__.call(null,state_30433);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19948__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19948__auto__;
}
break;
}
}catch (e30448){if((e30448 instanceof Object)){
var ex__19949__auto__ = e30448;
var statearr_30449_30457 = state_30433;
(statearr_30449_30457[(5)] = ex__19949__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30433);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30448;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30458 = state_30433;
state_30433 = G__30458;
continue;
} else {
return ret_value__19947__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__19946__auto__ = function(state_30433){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__19946__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__19946__auto____1.call(this,state_30433);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__19946__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__19946__auto____0;
cljs$core$async$reduce_$_state_machine__19946__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__19946__auto____1;
return cljs$core$async$reduce_$_state_machine__19946__auto__;
})()
;})(switch__19945__auto__,c__20007__auto__))
})();
var state__20009__auto__ = (function (){var statearr_30450 = f__20008__auto__.call(null);
(statearr_30450[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20007__auto__);

return statearr_30450;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20009__auto__);
});})(c__20007__auto__))
);

return c__20007__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(){
var G__30460 = arguments.length;
switch (G__30460) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__20007__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20007__auto__){
return (function (){
var f__20008__auto__ = (function (){var switch__19945__auto__ = ((function (c__20007__auto__){
return (function (state_30485){
var state_val_30486 = (state_30485[(1)]);
if((state_val_30486 === (7))){
var inst_30467 = (state_30485[(2)]);
var state_30485__$1 = state_30485;
var statearr_30487_30511 = state_30485__$1;
(statearr_30487_30511[(2)] = inst_30467);

(statearr_30487_30511[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30486 === (1))){
var inst_30461 = cljs.core.seq.call(null,coll);
var inst_30462 = inst_30461;
var state_30485__$1 = (function (){var statearr_30488 = state_30485;
(statearr_30488[(7)] = inst_30462);

return statearr_30488;
})();
var statearr_30489_30512 = state_30485__$1;
(statearr_30489_30512[(2)] = null);

(statearr_30489_30512[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30486 === (4))){
var inst_30462 = (state_30485[(7)]);
var inst_30465 = cljs.core.first.call(null,inst_30462);
var state_30485__$1 = state_30485;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30485__$1,(7),ch,inst_30465);
} else {
if((state_val_30486 === (13))){
var inst_30479 = (state_30485[(2)]);
var state_30485__$1 = state_30485;
var statearr_30490_30513 = state_30485__$1;
(statearr_30490_30513[(2)] = inst_30479);

(statearr_30490_30513[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30486 === (6))){
var inst_30470 = (state_30485[(2)]);
var state_30485__$1 = state_30485;
if(cljs.core.truth_(inst_30470)){
var statearr_30491_30514 = state_30485__$1;
(statearr_30491_30514[(1)] = (8));

} else {
var statearr_30492_30515 = state_30485__$1;
(statearr_30492_30515[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30486 === (3))){
var inst_30483 = (state_30485[(2)]);
var state_30485__$1 = state_30485;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30485__$1,inst_30483);
} else {
if((state_val_30486 === (12))){
var state_30485__$1 = state_30485;
var statearr_30493_30516 = state_30485__$1;
(statearr_30493_30516[(2)] = null);

(statearr_30493_30516[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30486 === (2))){
var inst_30462 = (state_30485[(7)]);
var state_30485__$1 = state_30485;
if(cljs.core.truth_(inst_30462)){
var statearr_30494_30517 = state_30485__$1;
(statearr_30494_30517[(1)] = (4));

} else {
var statearr_30495_30518 = state_30485__$1;
(statearr_30495_30518[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30486 === (11))){
var inst_30476 = cljs.core.async.close_BANG_.call(null,ch);
var state_30485__$1 = state_30485;
var statearr_30496_30519 = state_30485__$1;
(statearr_30496_30519[(2)] = inst_30476);

(statearr_30496_30519[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30486 === (9))){
var state_30485__$1 = state_30485;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30497_30520 = state_30485__$1;
(statearr_30497_30520[(1)] = (11));

} else {
var statearr_30498_30521 = state_30485__$1;
(statearr_30498_30521[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30486 === (5))){
var inst_30462 = (state_30485[(7)]);
var state_30485__$1 = state_30485;
var statearr_30499_30522 = state_30485__$1;
(statearr_30499_30522[(2)] = inst_30462);

(statearr_30499_30522[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30486 === (10))){
var inst_30481 = (state_30485[(2)]);
var state_30485__$1 = state_30485;
var statearr_30500_30523 = state_30485__$1;
(statearr_30500_30523[(2)] = inst_30481);

(statearr_30500_30523[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30486 === (8))){
var inst_30462 = (state_30485[(7)]);
var inst_30472 = cljs.core.next.call(null,inst_30462);
var inst_30462__$1 = inst_30472;
var state_30485__$1 = (function (){var statearr_30501 = state_30485;
(statearr_30501[(7)] = inst_30462__$1);

return statearr_30501;
})();
var statearr_30502_30524 = state_30485__$1;
(statearr_30502_30524[(2)] = null);

(statearr_30502_30524[(1)] = (2));


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
});})(c__20007__auto__))
;
return ((function (switch__19945__auto__,c__20007__auto__){
return (function() {
var cljs$core$async$state_machine__19946__auto__ = null;
var cljs$core$async$state_machine__19946__auto____0 = (function (){
var statearr_30506 = [null,null,null,null,null,null,null,null];
(statearr_30506[(0)] = cljs$core$async$state_machine__19946__auto__);

(statearr_30506[(1)] = (1));

return statearr_30506;
});
var cljs$core$async$state_machine__19946__auto____1 = (function (state_30485){
while(true){
var ret_value__19947__auto__ = (function (){try{while(true){
var result__19948__auto__ = switch__19945__auto__.call(null,state_30485);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19948__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19948__auto__;
}
break;
}
}catch (e30507){if((e30507 instanceof Object)){
var ex__19949__auto__ = e30507;
var statearr_30508_30525 = state_30485;
(statearr_30508_30525[(5)] = ex__19949__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30485);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30507;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30526 = state_30485;
state_30485 = G__30526;
continue;
} else {
return ret_value__19947__auto__;
}
break;
}
});
cljs$core$async$state_machine__19946__auto__ = function(state_30485){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19946__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19946__auto____1.call(this,state_30485);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19946__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19946__auto____0;
cljs$core$async$state_machine__19946__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19946__auto____1;
return cljs$core$async$state_machine__19946__auto__;
})()
;})(switch__19945__auto__,c__20007__auto__))
})();
var state__20009__auto__ = (function (){var statearr_30509 = f__20008__auto__.call(null);
(statearr_30509[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20007__auto__);

return statearr_30509;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20009__auto__);
});})(c__20007__auto__))
);

return c__20007__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj30528 = {};
return obj30528;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__17941__auto__ = _;
if(and__17941__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__17941__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__18589__auto__ = (((_ == null))?null:_);
return (function (){var or__17953__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__18589__auto__)]);
if(or__17953__auto__){
return or__17953__auto__;
} else {
var or__17953__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__17953__auto____$1){
return or__17953__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj30530 = {};
return obj30530;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__17941__auto__ = m;
if(and__17941__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__17941__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__18589__auto__ = (((m == null))?null:m);
return (function (){var or__17953__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__18589__auto__)]);
if(or__17953__auto__){
return or__17953__auto__;
} else {
var or__17953__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__17953__auto____$1){
return or__17953__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__17941__auto__ = m;
if(and__17941__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__17941__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__18589__auto__ = (((m == null))?null:m);
return (function (){var or__17953__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__18589__auto__)]);
if(or__17953__auto__){
return or__17953__auto__;
} else {
var or__17953__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__17953__auto____$1){
return or__17953__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__17941__auto__ = m;
if(and__17941__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__17941__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__18589__auto__ = (((m == null))?null:m);
return (function (){var or__17953__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__18589__auto__)]);
if(or__17953__auto__){
return or__17953__auto__;
} else {
var or__17953__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__17953__auto____$1){
return or__17953__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t30752 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30752 = (function (cs,ch,mult,meta30753){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta30753 = meta30753;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30752.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t30752.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t30752.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t30752.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t30752.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t30752.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t30752.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_30754){
var self__ = this;
var _30754__$1 = this;
return self__.meta30753;
});})(cs))
;

cljs.core.async.t30752.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_30754,meta30753__$1){
var self__ = this;
var _30754__$1 = this;
return (new cljs.core.async.t30752(self__.cs,self__.ch,self__.mult,meta30753__$1));
});})(cs))
;

cljs.core.async.t30752.cljs$lang$type = true;

cljs.core.async.t30752.cljs$lang$ctorStr = "cljs.core.async/t30752";

cljs.core.async.t30752.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__18532__auto__,writer__18533__auto__,opt__18534__auto__){
return cljs.core._write.call(null,writer__18533__auto__,"cljs.core.async/t30752");
});})(cs))
;

cljs.core.async.__GT_t30752 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t30752(cs__$1,ch__$1,mult__$1,meta30753){
return (new cljs.core.async.t30752(cs__$1,ch__$1,mult__$1,meta30753));
});})(cs))
;

}

return (new cljs.core.async.t30752(cs,ch,cljs$core$async$mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__20007__auto___30973 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20007__auto___30973,cs,m,dchan,dctr,done){
return (function (){
var f__20008__auto__ = (function (){var switch__19945__auto__ = ((function (c__20007__auto___30973,cs,m,dchan,dctr,done){
return (function (state_30885){
var state_val_30886 = (state_30885[(1)]);
if((state_val_30886 === (7))){
var inst_30881 = (state_30885[(2)]);
var state_30885__$1 = state_30885;
var statearr_30887_30974 = state_30885__$1;
(statearr_30887_30974[(2)] = inst_30881);

(statearr_30887_30974[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30886 === (20))){
var inst_30786 = (state_30885[(7)]);
var inst_30796 = cljs.core.first.call(null,inst_30786);
var inst_30797 = cljs.core.nth.call(null,inst_30796,(0),null);
var inst_30798 = cljs.core.nth.call(null,inst_30796,(1),null);
var state_30885__$1 = (function (){var statearr_30888 = state_30885;
(statearr_30888[(8)] = inst_30797);

return statearr_30888;
})();
if(cljs.core.truth_(inst_30798)){
var statearr_30889_30975 = state_30885__$1;
(statearr_30889_30975[(1)] = (22));

} else {
var statearr_30890_30976 = state_30885__$1;
(statearr_30890_30976[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30886 === (27))){
var inst_30826 = (state_30885[(9)]);
var inst_30833 = (state_30885[(10)]);
var inst_30757 = (state_30885[(11)]);
var inst_30828 = (state_30885[(12)]);
var inst_30833__$1 = cljs.core._nth.call(null,inst_30826,inst_30828);
var inst_30834 = cljs.core.async.put_BANG_.call(null,inst_30833__$1,inst_30757,done);
var state_30885__$1 = (function (){var statearr_30891 = state_30885;
(statearr_30891[(10)] = inst_30833__$1);

return statearr_30891;
})();
if(cljs.core.truth_(inst_30834)){
var statearr_30892_30977 = state_30885__$1;
(statearr_30892_30977[(1)] = (30));

} else {
var statearr_30893_30978 = state_30885__$1;
(statearr_30893_30978[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30886 === (1))){
var state_30885__$1 = state_30885;
var statearr_30894_30979 = state_30885__$1;
(statearr_30894_30979[(2)] = null);

(statearr_30894_30979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30886 === (24))){
var inst_30786 = (state_30885[(7)]);
var inst_30803 = (state_30885[(2)]);
var inst_30804 = cljs.core.next.call(null,inst_30786);
var inst_30766 = inst_30804;
var inst_30767 = null;
var inst_30768 = (0);
var inst_30769 = (0);
var state_30885__$1 = (function (){var statearr_30895 = state_30885;
(statearr_30895[(13)] = inst_30803);

(statearr_30895[(14)] = inst_30766);

(statearr_30895[(15)] = inst_30769);

(statearr_30895[(16)] = inst_30767);

(statearr_30895[(17)] = inst_30768);

return statearr_30895;
})();
var statearr_30896_30980 = state_30885__$1;
(statearr_30896_30980[(2)] = null);

(statearr_30896_30980[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30886 === (39))){
var state_30885__$1 = state_30885;
var statearr_30900_30981 = state_30885__$1;
(statearr_30900_30981[(2)] = null);

(statearr_30900_30981[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30886 === (4))){
var inst_30757 = (state_30885[(11)]);
var inst_30757__$1 = (state_30885[(2)]);
var inst_30758 = (inst_30757__$1 == null);
var state_30885__$1 = (function (){var statearr_30901 = state_30885;
(statearr_30901[(11)] = inst_30757__$1);

return statearr_30901;
})();
if(cljs.core.truth_(inst_30758)){
var statearr_30902_30982 = state_30885__$1;
(statearr_30902_30982[(1)] = (5));

} else {
var statearr_30903_30983 = state_30885__$1;
(statearr_30903_30983[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30886 === (15))){
var inst_30766 = (state_30885[(14)]);
var inst_30769 = (state_30885[(15)]);
var inst_30767 = (state_30885[(16)]);
var inst_30768 = (state_30885[(17)]);
var inst_30782 = (state_30885[(2)]);
var inst_30783 = (inst_30769 + (1));
var tmp30897 = inst_30766;
var tmp30898 = inst_30767;
var tmp30899 = inst_30768;
var inst_30766__$1 = tmp30897;
var inst_30767__$1 = tmp30898;
var inst_30768__$1 = tmp30899;
var inst_30769__$1 = inst_30783;
var state_30885__$1 = (function (){var statearr_30904 = state_30885;
(statearr_30904[(14)] = inst_30766__$1);

(statearr_30904[(18)] = inst_30782);

(statearr_30904[(15)] = inst_30769__$1);

(statearr_30904[(16)] = inst_30767__$1);

(statearr_30904[(17)] = inst_30768__$1);

return statearr_30904;
})();
var statearr_30905_30984 = state_30885__$1;
(statearr_30905_30984[(2)] = null);

(statearr_30905_30984[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30886 === (21))){
var inst_30807 = (state_30885[(2)]);
var state_30885__$1 = state_30885;
var statearr_30909_30985 = state_30885__$1;
(statearr_30909_30985[(2)] = inst_30807);

(statearr_30909_30985[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30886 === (31))){
var inst_30833 = (state_30885[(10)]);
var inst_30837 = done.call(null,null);
var inst_30838 = cljs.core.async.untap_STAR_.call(null,m,inst_30833);
var state_30885__$1 = (function (){var statearr_30910 = state_30885;
(statearr_30910[(19)] = inst_30837);

return statearr_30910;
})();
var statearr_30911_30986 = state_30885__$1;
(statearr_30911_30986[(2)] = inst_30838);

(statearr_30911_30986[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30886 === (32))){
var inst_30826 = (state_30885[(9)]);
var inst_30825 = (state_30885[(20)]);
var inst_30827 = (state_30885[(21)]);
var inst_30828 = (state_30885[(12)]);
var inst_30840 = (state_30885[(2)]);
var inst_30841 = (inst_30828 + (1));
var tmp30906 = inst_30826;
var tmp30907 = inst_30825;
var tmp30908 = inst_30827;
var inst_30825__$1 = tmp30907;
var inst_30826__$1 = tmp30906;
var inst_30827__$1 = tmp30908;
var inst_30828__$1 = inst_30841;
var state_30885__$1 = (function (){var statearr_30912 = state_30885;
(statearr_30912[(9)] = inst_30826__$1);

(statearr_30912[(20)] = inst_30825__$1);

(statearr_30912[(21)] = inst_30827__$1);

(statearr_30912[(22)] = inst_30840);

(statearr_30912[(12)] = inst_30828__$1);

return statearr_30912;
})();
var statearr_30913_30987 = state_30885__$1;
(statearr_30913_30987[(2)] = null);

(statearr_30913_30987[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30886 === (40))){
var inst_30853 = (state_30885[(23)]);
var inst_30857 = done.call(null,null);
var inst_30858 = cljs.core.async.untap_STAR_.call(null,m,inst_30853);
var state_30885__$1 = (function (){var statearr_30914 = state_30885;
(statearr_30914[(24)] = inst_30857);

return statearr_30914;
})();
var statearr_30915_30988 = state_30885__$1;
(statearr_30915_30988[(2)] = inst_30858);

(statearr_30915_30988[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30886 === (33))){
var inst_30844 = (state_30885[(25)]);
var inst_30846 = cljs.core.chunked_seq_QMARK_.call(null,inst_30844);
var state_30885__$1 = state_30885;
if(inst_30846){
var statearr_30916_30989 = state_30885__$1;
(statearr_30916_30989[(1)] = (36));

} else {
var statearr_30917_30990 = state_30885__$1;
(statearr_30917_30990[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30886 === (13))){
var inst_30776 = (state_30885[(26)]);
var inst_30779 = cljs.core.async.close_BANG_.call(null,inst_30776);
var state_30885__$1 = state_30885;
var statearr_30918_30991 = state_30885__$1;
(statearr_30918_30991[(2)] = inst_30779);

(statearr_30918_30991[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30886 === (22))){
var inst_30797 = (state_30885[(8)]);
var inst_30800 = cljs.core.async.close_BANG_.call(null,inst_30797);
var state_30885__$1 = state_30885;
var statearr_30919_30992 = state_30885__$1;
(statearr_30919_30992[(2)] = inst_30800);

(statearr_30919_30992[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30886 === (36))){
var inst_30844 = (state_30885[(25)]);
var inst_30848 = cljs.core.chunk_first.call(null,inst_30844);
var inst_30849 = cljs.core.chunk_rest.call(null,inst_30844);
var inst_30850 = cljs.core.count.call(null,inst_30848);
var inst_30825 = inst_30849;
var inst_30826 = inst_30848;
var inst_30827 = inst_30850;
var inst_30828 = (0);
var state_30885__$1 = (function (){var statearr_30920 = state_30885;
(statearr_30920[(9)] = inst_30826);

(statearr_30920[(20)] = inst_30825);

(statearr_30920[(21)] = inst_30827);

(statearr_30920[(12)] = inst_30828);

return statearr_30920;
})();
var statearr_30921_30993 = state_30885__$1;
(statearr_30921_30993[(2)] = null);

(statearr_30921_30993[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30886 === (41))){
var inst_30844 = (state_30885[(25)]);
var inst_30860 = (state_30885[(2)]);
var inst_30861 = cljs.core.next.call(null,inst_30844);
var inst_30825 = inst_30861;
var inst_30826 = null;
var inst_30827 = (0);
var inst_30828 = (0);
var state_30885__$1 = (function (){var statearr_30922 = state_30885;
(statearr_30922[(9)] = inst_30826);

(statearr_30922[(20)] = inst_30825);

(statearr_30922[(21)] = inst_30827);

(statearr_30922[(12)] = inst_30828);

(statearr_30922[(27)] = inst_30860);

return statearr_30922;
})();
var statearr_30923_30994 = state_30885__$1;
(statearr_30923_30994[(2)] = null);

(statearr_30923_30994[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30886 === (43))){
var state_30885__$1 = state_30885;
var statearr_30924_30995 = state_30885__$1;
(statearr_30924_30995[(2)] = null);

(statearr_30924_30995[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30886 === (29))){
var inst_30869 = (state_30885[(2)]);
var state_30885__$1 = state_30885;
var statearr_30925_30996 = state_30885__$1;
(statearr_30925_30996[(2)] = inst_30869);

(statearr_30925_30996[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30886 === (44))){
var inst_30878 = (state_30885[(2)]);
var state_30885__$1 = (function (){var statearr_30926 = state_30885;
(statearr_30926[(28)] = inst_30878);

return statearr_30926;
})();
var statearr_30927_30997 = state_30885__$1;
(statearr_30927_30997[(2)] = null);

(statearr_30927_30997[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30886 === (6))){
var inst_30817 = (state_30885[(29)]);
var inst_30816 = cljs.core.deref.call(null,cs);
var inst_30817__$1 = cljs.core.keys.call(null,inst_30816);
var inst_30818 = cljs.core.count.call(null,inst_30817__$1);
var inst_30819 = cljs.core.reset_BANG_.call(null,dctr,inst_30818);
var inst_30824 = cljs.core.seq.call(null,inst_30817__$1);
var inst_30825 = inst_30824;
var inst_30826 = null;
var inst_30827 = (0);
var inst_30828 = (0);
var state_30885__$1 = (function (){var statearr_30928 = state_30885;
(statearr_30928[(9)] = inst_30826);

(statearr_30928[(20)] = inst_30825);

(statearr_30928[(21)] = inst_30827);

(statearr_30928[(30)] = inst_30819);

(statearr_30928[(12)] = inst_30828);

(statearr_30928[(29)] = inst_30817__$1);

return statearr_30928;
})();
var statearr_30929_30998 = state_30885__$1;
(statearr_30929_30998[(2)] = null);

(statearr_30929_30998[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30886 === (28))){
var inst_30825 = (state_30885[(20)]);
var inst_30844 = (state_30885[(25)]);
var inst_30844__$1 = cljs.core.seq.call(null,inst_30825);
var state_30885__$1 = (function (){var statearr_30930 = state_30885;
(statearr_30930[(25)] = inst_30844__$1);

return statearr_30930;
})();
if(inst_30844__$1){
var statearr_30931_30999 = state_30885__$1;
(statearr_30931_30999[(1)] = (33));

} else {
var statearr_30932_31000 = state_30885__$1;
(statearr_30932_31000[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30886 === (25))){
var inst_30827 = (state_30885[(21)]);
var inst_30828 = (state_30885[(12)]);
var inst_30830 = (inst_30828 < inst_30827);
var inst_30831 = inst_30830;
var state_30885__$1 = state_30885;
if(cljs.core.truth_(inst_30831)){
var statearr_30933_31001 = state_30885__$1;
(statearr_30933_31001[(1)] = (27));

} else {
var statearr_30934_31002 = state_30885__$1;
(statearr_30934_31002[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30886 === (34))){
var state_30885__$1 = state_30885;
var statearr_30935_31003 = state_30885__$1;
(statearr_30935_31003[(2)] = null);

(statearr_30935_31003[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30886 === (17))){
var state_30885__$1 = state_30885;
var statearr_30936_31004 = state_30885__$1;
(statearr_30936_31004[(2)] = null);

(statearr_30936_31004[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30886 === (3))){
var inst_30883 = (state_30885[(2)]);
var state_30885__$1 = state_30885;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30885__$1,inst_30883);
} else {
if((state_val_30886 === (12))){
var inst_30812 = (state_30885[(2)]);
var state_30885__$1 = state_30885;
var statearr_30937_31005 = state_30885__$1;
(statearr_30937_31005[(2)] = inst_30812);

(statearr_30937_31005[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30886 === (2))){
var state_30885__$1 = state_30885;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30885__$1,(4),ch);
} else {
if((state_val_30886 === (23))){
var state_30885__$1 = state_30885;
var statearr_30938_31006 = state_30885__$1;
(statearr_30938_31006[(2)] = null);

(statearr_30938_31006[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30886 === (35))){
var inst_30867 = (state_30885[(2)]);
var state_30885__$1 = state_30885;
var statearr_30939_31007 = state_30885__$1;
(statearr_30939_31007[(2)] = inst_30867);

(statearr_30939_31007[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30886 === (19))){
var inst_30786 = (state_30885[(7)]);
var inst_30790 = cljs.core.chunk_first.call(null,inst_30786);
var inst_30791 = cljs.core.chunk_rest.call(null,inst_30786);
var inst_30792 = cljs.core.count.call(null,inst_30790);
var inst_30766 = inst_30791;
var inst_30767 = inst_30790;
var inst_30768 = inst_30792;
var inst_30769 = (0);
var state_30885__$1 = (function (){var statearr_30940 = state_30885;
(statearr_30940[(14)] = inst_30766);

(statearr_30940[(15)] = inst_30769);

(statearr_30940[(16)] = inst_30767);

(statearr_30940[(17)] = inst_30768);

return statearr_30940;
})();
var statearr_30941_31008 = state_30885__$1;
(statearr_30941_31008[(2)] = null);

(statearr_30941_31008[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30886 === (11))){
var inst_30786 = (state_30885[(7)]);
var inst_30766 = (state_30885[(14)]);
var inst_30786__$1 = cljs.core.seq.call(null,inst_30766);
var state_30885__$1 = (function (){var statearr_30942 = state_30885;
(statearr_30942[(7)] = inst_30786__$1);

return statearr_30942;
})();
if(inst_30786__$1){
var statearr_30943_31009 = state_30885__$1;
(statearr_30943_31009[(1)] = (16));

} else {
var statearr_30944_31010 = state_30885__$1;
(statearr_30944_31010[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30886 === (9))){
var inst_30814 = (state_30885[(2)]);
var state_30885__$1 = state_30885;
var statearr_30945_31011 = state_30885__$1;
(statearr_30945_31011[(2)] = inst_30814);

(statearr_30945_31011[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30886 === (5))){
var inst_30764 = cljs.core.deref.call(null,cs);
var inst_30765 = cljs.core.seq.call(null,inst_30764);
var inst_30766 = inst_30765;
var inst_30767 = null;
var inst_30768 = (0);
var inst_30769 = (0);
var state_30885__$1 = (function (){var statearr_30946 = state_30885;
(statearr_30946[(14)] = inst_30766);

(statearr_30946[(15)] = inst_30769);

(statearr_30946[(16)] = inst_30767);

(statearr_30946[(17)] = inst_30768);

return statearr_30946;
})();
var statearr_30947_31012 = state_30885__$1;
(statearr_30947_31012[(2)] = null);

(statearr_30947_31012[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30886 === (14))){
var state_30885__$1 = state_30885;
var statearr_30948_31013 = state_30885__$1;
(statearr_30948_31013[(2)] = null);

(statearr_30948_31013[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30886 === (45))){
var inst_30875 = (state_30885[(2)]);
var state_30885__$1 = state_30885;
var statearr_30949_31014 = state_30885__$1;
(statearr_30949_31014[(2)] = inst_30875);

(statearr_30949_31014[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30886 === (26))){
var inst_30817 = (state_30885[(29)]);
var inst_30871 = (state_30885[(2)]);
var inst_30872 = cljs.core.seq.call(null,inst_30817);
var state_30885__$1 = (function (){var statearr_30950 = state_30885;
(statearr_30950[(31)] = inst_30871);

return statearr_30950;
})();
if(inst_30872){
var statearr_30951_31015 = state_30885__$1;
(statearr_30951_31015[(1)] = (42));

} else {
var statearr_30952_31016 = state_30885__$1;
(statearr_30952_31016[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30886 === (16))){
var inst_30786 = (state_30885[(7)]);
var inst_30788 = cljs.core.chunked_seq_QMARK_.call(null,inst_30786);
var state_30885__$1 = state_30885;
if(inst_30788){
var statearr_30953_31017 = state_30885__$1;
(statearr_30953_31017[(1)] = (19));

} else {
var statearr_30954_31018 = state_30885__$1;
(statearr_30954_31018[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30886 === (38))){
var inst_30864 = (state_30885[(2)]);
var state_30885__$1 = state_30885;
var statearr_30955_31019 = state_30885__$1;
(statearr_30955_31019[(2)] = inst_30864);

(statearr_30955_31019[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30886 === (30))){
var state_30885__$1 = state_30885;
var statearr_30956_31020 = state_30885__$1;
(statearr_30956_31020[(2)] = null);

(statearr_30956_31020[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30886 === (10))){
var inst_30769 = (state_30885[(15)]);
var inst_30767 = (state_30885[(16)]);
var inst_30775 = cljs.core._nth.call(null,inst_30767,inst_30769);
var inst_30776 = cljs.core.nth.call(null,inst_30775,(0),null);
var inst_30777 = cljs.core.nth.call(null,inst_30775,(1),null);
var state_30885__$1 = (function (){var statearr_30957 = state_30885;
(statearr_30957[(26)] = inst_30776);

return statearr_30957;
})();
if(cljs.core.truth_(inst_30777)){
var statearr_30958_31021 = state_30885__$1;
(statearr_30958_31021[(1)] = (13));

} else {
var statearr_30959_31022 = state_30885__$1;
(statearr_30959_31022[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30886 === (18))){
var inst_30810 = (state_30885[(2)]);
var state_30885__$1 = state_30885;
var statearr_30960_31023 = state_30885__$1;
(statearr_30960_31023[(2)] = inst_30810);

(statearr_30960_31023[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30886 === (42))){
var state_30885__$1 = state_30885;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30885__$1,(45),dchan);
} else {
if((state_val_30886 === (37))){
var inst_30757 = (state_30885[(11)]);
var inst_30844 = (state_30885[(25)]);
var inst_30853 = (state_30885[(23)]);
var inst_30853__$1 = cljs.core.first.call(null,inst_30844);
var inst_30854 = cljs.core.async.put_BANG_.call(null,inst_30853__$1,inst_30757,done);
var state_30885__$1 = (function (){var statearr_30961 = state_30885;
(statearr_30961[(23)] = inst_30853__$1);

return statearr_30961;
})();
if(cljs.core.truth_(inst_30854)){
var statearr_30962_31024 = state_30885__$1;
(statearr_30962_31024[(1)] = (39));

} else {
var statearr_30963_31025 = state_30885__$1;
(statearr_30963_31025[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30886 === (8))){
var inst_30769 = (state_30885[(15)]);
var inst_30768 = (state_30885[(17)]);
var inst_30771 = (inst_30769 < inst_30768);
var inst_30772 = inst_30771;
var state_30885__$1 = state_30885;
if(cljs.core.truth_(inst_30772)){
var statearr_30964_31026 = state_30885__$1;
(statearr_30964_31026[(1)] = (10));

} else {
var statearr_30965_31027 = state_30885__$1;
(statearr_30965_31027[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__20007__auto___30973,cs,m,dchan,dctr,done))
;
return ((function (switch__19945__auto__,c__20007__auto___30973,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__19946__auto__ = null;
var cljs$core$async$mult_$_state_machine__19946__auto____0 = (function (){
var statearr_30969 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30969[(0)] = cljs$core$async$mult_$_state_machine__19946__auto__);

(statearr_30969[(1)] = (1));

return statearr_30969;
});
var cljs$core$async$mult_$_state_machine__19946__auto____1 = (function (state_30885){
while(true){
var ret_value__19947__auto__ = (function (){try{while(true){
var result__19948__auto__ = switch__19945__auto__.call(null,state_30885);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19948__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19948__auto__;
}
break;
}
}catch (e30970){if((e30970 instanceof Object)){
var ex__19949__auto__ = e30970;
var statearr_30971_31028 = state_30885;
(statearr_30971_31028[(5)] = ex__19949__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30885);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30970;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31029 = state_30885;
state_30885 = G__31029;
continue;
} else {
return ret_value__19947__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__19946__auto__ = function(state_30885){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__19946__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__19946__auto____1.call(this,state_30885);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__19946__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__19946__auto____0;
cljs$core$async$mult_$_state_machine__19946__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__19946__auto____1;
return cljs$core$async$mult_$_state_machine__19946__auto__;
})()
;})(switch__19945__auto__,c__20007__auto___30973,cs,m,dchan,dctr,done))
})();
var state__20009__auto__ = (function (){var statearr_30972 = f__20008__auto__.call(null);
(statearr_30972[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20007__auto___30973);

return statearr_30972;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20009__auto__);
});})(c__20007__auto___30973,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(){
var G__31031 = arguments.length;
switch (G__31031) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj31034 = {};
return obj31034;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__17941__auto__ = m;
if(and__17941__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__17941__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__18589__auto__ = (((m == null))?null:m);
return (function (){var or__17953__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__18589__auto__)]);
if(or__17953__auto__){
return or__17953__auto__;
} else {
var or__17953__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__17953__auto____$1){
return or__17953__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__17941__auto__ = m;
if(and__17941__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__17941__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__18589__auto__ = (((m == null))?null:m);
return (function (){var or__17953__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__18589__auto__)]);
if(or__17953__auto__){
return or__17953__auto__;
} else {
var or__17953__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__17953__auto____$1){
return or__17953__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__17941__auto__ = m;
if(and__17941__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__17941__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__18589__auto__ = (((m == null))?null:m);
return (function (){var or__17953__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__18589__auto__)]);
if(or__17953__auto__){
return or__17953__auto__;
} else {
var or__17953__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__17953__auto____$1){
return or__17953__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__17941__auto__ = m;
if(and__17941__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__17941__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__18589__auto__ = (((m == null))?null:m);
return (function (){var or__17953__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__18589__auto__)]);
if(or__17953__auto__){
return or__17953__auto__;
} else {
var or__17953__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__17953__auto____$1){
return or__17953__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__17941__auto__ = m;
if(and__17941__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__17941__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__18589__auto__ = (((m == null))?null:m);
return (function (){var or__17953__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__18589__auto__)]);
if(or__17953__auto__){
return or__17953__auto__;
} else {
var or__17953__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__17953__auto____$1){
return or__17953__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var argseq__18993__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__18993__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31039){
var map__31040 = p__31039;
var map__31040__$1 = ((cljs.core.seq_QMARK_.call(null,map__31040))?cljs.core.apply.call(null,cljs.core.hash_map,map__31040):map__31040);
var opts = map__31040__$1;
var statearr_31041_31044 = state;
(statearr_31041_31044[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__31040,map__31040__$1,opts){
return (function (val){
var statearr_31042_31045 = state;
(statearr_31042_31045[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__31040,map__31040__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_31043_31046 = state;
(statearr_31043_31046[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31035){
var G__31036 = cljs.core.first.call(null,seq31035);
var seq31035__$1 = cljs.core.next.call(null,seq31035);
var G__31037 = cljs.core.first.call(null,seq31035__$1);
var seq31035__$2 = cljs.core.next.call(null,seq31035__$1);
var G__31038 = cljs.core.first.call(null,seq31035__$2);
var seq31035__$3 = cljs.core.next.call(null,seq31035__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31036,G__31037,G__31038,seq31035__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t31166 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31166 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31167){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta31167 = meta31167;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31166.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t31166.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31166.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31166.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31166.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31166.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31166.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t31166.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31166.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31168){
var self__ = this;
var _31168__$1 = this;
return self__.meta31167;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31166.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31168,meta31167__$1){
var self__ = this;
var _31168__$1 = this;
return (new cljs.core.async.t31166(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31167__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31166.cljs$lang$type = true;

cljs.core.async.t31166.cljs$lang$ctorStr = "cljs.core.async/t31166";

cljs.core.async.t31166.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__18532__auto__,writer__18533__auto__,opt__18534__auto__){
return cljs.core._write.call(null,writer__18533__auto__,"cljs.core.async/t31166");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t31166 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t31166(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31167){
return (new cljs.core.async.t31166(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31167));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t31166(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20007__auto___31285 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20007__auto___31285,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__20008__auto__ = (function (){var switch__19945__auto__ = ((function (c__20007__auto___31285,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_31238){
var state_val_31239 = (state_31238[(1)]);
if((state_val_31239 === (7))){
var inst_31182 = (state_31238[(7)]);
var inst_31187 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31182);
var state_31238__$1 = state_31238;
var statearr_31240_31286 = state_31238__$1;
(statearr_31240_31286[(2)] = inst_31187);

(statearr_31240_31286[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31239 === (20))){
var inst_31197 = (state_31238[(8)]);
var state_31238__$1 = state_31238;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31238__$1,(23),out,inst_31197);
} else {
if((state_val_31239 === (1))){
var inst_31172 = (state_31238[(9)]);
var inst_31172__$1 = calc_state.call(null);
var inst_31173 = cljs.core.seq_QMARK_.call(null,inst_31172__$1);
var state_31238__$1 = (function (){var statearr_31241 = state_31238;
(statearr_31241[(9)] = inst_31172__$1);

return statearr_31241;
})();
if(inst_31173){
var statearr_31242_31287 = state_31238__$1;
(statearr_31242_31287[(1)] = (2));

} else {
var statearr_31243_31288 = state_31238__$1;
(statearr_31243_31288[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31239 === (24))){
var inst_31190 = (state_31238[(10)]);
var inst_31182 = inst_31190;
var state_31238__$1 = (function (){var statearr_31244 = state_31238;
(statearr_31244[(7)] = inst_31182);

return statearr_31244;
})();
var statearr_31245_31289 = state_31238__$1;
(statearr_31245_31289[(2)] = null);

(statearr_31245_31289[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31239 === (4))){
var inst_31172 = (state_31238[(9)]);
var inst_31178 = (state_31238[(2)]);
var inst_31179 = cljs.core.get.call(null,inst_31178,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31180 = cljs.core.get.call(null,inst_31178,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31181 = cljs.core.get.call(null,inst_31178,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31182 = inst_31172;
var state_31238__$1 = (function (){var statearr_31246 = state_31238;
(statearr_31246[(11)] = inst_31181);

(statearr_31246[(7)] = inst_31182);

(statearr_31246[(12)] = inst_31179);

(statearr_31246[(13)] = inst_31180);

return statearr_31246;
})();
var statearr_31247_31290 = state_31238__$1;
(statearr_31247_31290[(2)] = null);

(statearr_31247_31290[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31239 === (15))){
var state_31238__$1 = state_31238;
var statearr_31248_31291 = state_31238__$1;
(statearr_31248_31291[(2)] = null);

(statearr_31248_31291[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31239 === (21))){
var inst_31190 = (state_31238[(10)]);
var inst_31182 = inst_31190;
var state_31238__$1 = (function (){var statearr_31249 = state_31238;
(statearr_31249[(7)] = inst_31182);

return statearr_31249;
})();
var statearr_31250_31292 = state_31238__$1;
(statearr_31250_31292[(2)] = null);

(statearr_31250_31292[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31239 === (13))){
var inst_31234 = (state_31238[(2)]);
var state_31238__$1 = state_31238;
var statearr_31251_31293 = state_31238__$1;
(statearr_31251_31293[(2)] = inst_31234);

(statearr_31251_31293[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31239 === (22))){
var inst_31232 = (state_31238[(2)]);
var state_31238__$1 = state_31238;
var statearr_31252_31294 = state_31238__$1;
(statearr_31252_31294[(2)] = inst_31232);

(statearr_31252_31294[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31239 === (6))){
var inst_31236 = (state_31238[(2)]);
var state_31238__$1 = state_31238;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31238__$1,inst_31236);
} else {
if((state_val_31239 === (25))){
var state_31238__$1 = state_31238;
var statearr_31253_31295 = state_31238__$1;
(statearr_31253_31295[(2)] = null);

(statearr_31253_31295[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31239 === (17))){
var inst_31212 = (state_31238[(14)]);
var state_31238__$1 = state_31238;
var statearr_31254_31296 = state_31238__$1;
(statearr_31254_31296[(2)] = inst_31212);

(statearr_31254_31296[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31239 === (3))){
var inst_31172 = (state_31238[(9)]);
var state_31238__$1 = state_31238;
var statearr_31255_31297 = state_31238__$1;
(statearr_31255_31297[(2)] = inst_31172);

(statearr_31255_31297[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31239 === (12))){
var inst_31212 = (state_31238[(14)]);
var inst_31198 = (state_31238[(15)]);
var inst_31193 = (state_31238[(16)]);
var inst_31212__$1 = inst_31193.call(null,inst_31198);
var state_31238__$1 = (function (){var statearr_31256 = state_31238;
(statearr_31256[(14)] = inst_31212__$1);

return statearr_31256;
})();
if(cljs.core.truth_(inst_31212__$1)){
var statearr_31257_31298 = state_31238__$1;
(statearr_31257_31298[(1)] = (17));

} else {
var statearr_31258_31299 = state_31238__$1;
(statearr_31258_31299[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31239 === (2))){
var inst_31172 = (state_31238[(9)]);
var inst_31175 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31172);
var state_31238__$1 = state_31238;
var statearr_31259_31300 = state_31238__$1;
(statearr_31259_31300[(2)] = inst_31175);

(statearr_31259_31300[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31239 === (23))){
var inst_31223 = (state_31238[(2)]);
var state_31238__$1 = state_31238;
if(cljs.core.truth_(inst_31223)){
var statearr_31260_31301 = state_31238__$1;
(statearr_31260_31301[(1)] = (24));

} else {
var statearr_31261_31302 = state_31238__$1;
(statearr_31261_31302[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31239 === (19))){
var inst_31220 = (state_31238[(2)]);
var state_31238__$1 = state_31238;
if(cljs.core.truth_(inst_31220)){
var statearr_31262_31303 = state_31238__$1;
(statearr_31262_31303[(1)] = (20));

} else {
var statearr_31263_31304 = state_31238__$1;
(statearr_31263_31304[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31239 === (11))){
var inst_31197 = (state_31238[(8)]);
var inst_31203 = (inst_31197 == null);
var state_31238__$1 = state_31238;
if(cljs.core.truth_(inst_31203)){
var statearr_31264_31305 = state_31238__$1;
(statearr_31264_31305[(1)] = (14));

} else {
var statearr_31265_31306 = state_31238__$1;
(statearr_31265_31306[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31239 === (9))){
var inst_31190 = (state_31238[(10)]);
var inst_31190__$1 = (state_31238[(2)]);
var inst_31191 = cljs.core.get.call(null,inst_31190__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31192 = cljs.core.get.call(null,inst_31190__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31193 = cljs.core.get.call(null,inst_31190__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_31238__$1 = (function (){var statearr_31266 = state_31238;
(statearr_31266[(10)] = inst_31190__$1);

(statearr_31266[(17)] = inst_31192);

(statearr_31266[(16)] = inst_31193);

return statearr_31266;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_31238__$1,(10),inst_31191);
} else {
if((state_val_31239 === (5))){
var inst_31182 = (state_31238[(7)]);
var inst_31185 = cljs.core.seq_QMARK_.call(null,inst_31182);
var state_31238__$1 = state_31238;
if(inst_31185){
var statearr_31267_31307 = state_31238__$1;
(statearr_31267_31307[(1)] = (7));

} else {
var statearr_31268_31308 = state_31238__$1;
(statearr_31268_31308[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31239 === (14))){
var inst_31198 = (state_31238[(15)]);
var inst_31205 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_31198);
var state_31238__$1 = state_31238;
var statearr_31269_31309 = state_31238__$1;
(statearr_31269_31309[(2)] = inst_31205);

(statearr_31269_31309[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31239 === (26))){
var inst_31228 = (state_31238[(2)]);
var state_31238__$1 = state_31238;
var statearr_31270_31310 = state_31238__$1;
(statearr_31270_31310[(2)] = inst_31228);

(statearr_31270_31310[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31239 === (16))){
var inst_31208 = (state_31238[(2)]);
var inst_31209 = calc_state.call(null);
var inst_31182 = inst_31209;
var state_31238__$1 = (function (){var statearr_31271 = state_31238;
(statearr_31271[(18)] = inst_31208);

(statearr_31271[(7)] = inst_31182);

return statearr_31271;
})();
var statearr_31272_31311 = state_31238__$1;
(statearr_31272_31311[(2)] = null);

(statearr_31272_31311[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31239 === (10))){
var inst_31198 = (state_31238[(15)]);
var inst_31197 = (state_31238[(8)]);
var inst_31196 = (state_31238[(2)]);
var inst_31197__$1 = cljs.core.nth.call(null,inst_31196,(0),null);
var inst_31198__$1 = cljs.core.nth.call(null,inst_31196,(1),null);
var inst_31199 = (inst_31197__$1 == null);
var inst_31200 = cljs.core._EQ_.call(null,inst_31198__$1,change);
var inst_31201 = (inst_31199) || (inst_31200);
var state_31238__$1 = (function (){var statearr_31273 = state_31238;
(statearr_31273[(15)] = inst_31198__$1);

(statearr_31273[(8)] = inst_31197__$1);

return statearr_31273;
})();
if(cljs.core.truth_(inst_31201)){
var statearr_31274_31312 = state_31238__$1;
(statearr_31274_31312[(1)] = (11));

} else {
var statearr_31275_31313 = state_31238__$1;
(statearr_31275_31313[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31239 === (18))){
var inst_31198 = (state_31238[(15)]);
var inst_31192 = (state_31238[(17)]);
var inst_31193 = (state_31238[(16)]);
var inst_31215 = cljs.core.empty_QMARK_.call(null,inst_31193);
var inst_31216 = inst_31192.call(null,inst_31198);
var inst_31217 = cljs.core.not.call(null,inst_31216);
var inst_31218 = (inst_31215) && (inst_31217);
var state_31238__$1 = state_31238;
var statearr_31276_31314 = state_31238__$1;
(statearr_31276_31314[(2)] = inst_31218);

(statearr_31276_31314[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31239 === (8))){
var inst_31182 = (state_31238[(7)]);
var state_31238__$1 = state_31238;
var statearr_31277_31315 = state_31238__$1;
(statearr_31277_31315[(2)] = inst_31182);

(statearr_31277_31315[(1)] = (9));


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
});})(c__20007__auto___31285,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__19945__auto__,c__20007__auto___31285,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__19946__auto__ = null;
var cljs$core$async$mix_$_state_machine__19946__auto____0 = (function (){
var statearr_31281 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31281[(0)] = cljs$core$async$mix_$_state_machine__19946__auto__);

(statearr_31281[(1)] = (1));

return statearr_31281;
});
var cljs$core$async$mix_$_state_machine__19946__auto____1 = (function (state_31238){
while(true){
var ret_value__19947__auto__ = (function (){try{while(true){
var result__19948__auto__ = switch__19945__auto__.call(null,state_31238);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19948__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19948__auto__;
}
break;
}
}catch (e31282){if((e31282 instanceof Object)){
var ex__19949__auto__ = e31282;
var statearr_31283_31316 = state_31238;
(statearr_31283_31316[(5)] = ex__19949__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31238);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31282;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31317 = state_31238;
state_31238 = G__31317;
continue;
} else {
return ret_value__19947__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__19946__auto__ = function(state_31238){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__19946__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__19946__auto____1.call(this,state_31238);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__19946__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__19946__auto____0;
cljs$core$async$mix_$_state_machine__19946__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__19946__auto____1;
return cljs$core$async$mix_$_state_machine__19946__auto__;
})()
;})(switch__19945__auto__,c__20007__auto___31285,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__20009__auto__ = (function (){var statearr_31284 = f__20008__auto__.call(null);
(statearr_31284[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20007__auto___31285);

return statearr_31284;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20009__auto__);
});})(c__20007__auto___31285,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj31319 = {};
return obj31319;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__17941__auto__ = p;
if(and__17941__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__17941__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__18589__auto__ = (((p == null))?null:p);
return (function (){var or__17953__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__18589__auto__)]);
if(or__17953__auto__){
return or__17953__auto__;
} else {
var or__17953__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__17953__auto____$1){
return or__17953__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__17941__auto__ = p;
if(and__17941__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__17941__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__18589__auto__ = (((p == null))?null:p);
return (function (){var or__17953__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__18589__auto__)]);
if(or__17953__auto__){
return or__17953__auto__;
} else {
var or__17953__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__17953__auto____$1){
return or__17953__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var G__31321 = arguments.length;
switch (G__31321) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((function (){var and__17941__auto__ = p;
if(and__17941__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__17941__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__18589__auto__ = (((p == null))?null:p);
return (function (){var or__17953__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18589__auto__)]);
if(or__17953__auto__){
return or__17953__auto__;
} else {
var or__17953__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__17953__auto____$1){
return or__17953__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((function (){var and__17941__auto__ = p;
if(and__17941__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__17941__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__18589__auto__ = (((p == null))?null:p);
return (function (){var or__17953__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18589__auto__)]);
if(or__17953__auto__){
return or__17953__auto__;
} else {
var or__17953__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__17953__auto____$1){
return or__17953__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(){
var G__31325 = arguments.length;
switch (G__31325) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__17953__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__17953__auto__)){
return or__17953__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__17953__auto__,mults){
return (function (p1__31323_SHARP_){
if(cljs.core.truth_(p1__31323_SHARP_.call(null,topic))){
return p1__31323_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__31323_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__17953__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t31326 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31326 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,meta31327){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.meta31327 = meta31327;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31326.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t31326.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t31326.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t31326.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t31326.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t31326.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t31326.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t31326.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_31328){
var self__ = this;
var _31328__$1 = this;
return self__.meta31327;
});})(mults,ensure_mult))
;

cljs.core.async.t31326.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_31328,meta31327__$1){
var self__ = this;
var _31328__$1 = this;
return (new cljs.core.async.t31326(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,meta31327__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t31326.cljs$lang$type = true;

cljs.core.async.t31326.cljs$lang$ctorStr = "cljs.core.async/t31326";

cljs.core.async.t31326.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__18532__auto__,writer__18533__auto__,opt__18534__auto__){
return cljs.core._write.call(null,writer__18533__auto__,"cljs.core.async/t31326");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t31326 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t31326(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta31327){
return (new cljs.core.async.t31326(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta31327));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t31326(ensure_mult,mults,buf_fn,topic_fn,ch,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20007__auto___31449 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20007__auto___31449,mults,ensure_mult,p){
return (function (){
var f__20008__auto__ = (function (){var switch__19945__auto__ = ((function (c__20007__auto___31449,mults,ensure_mult,p){
return (function (state_31400){
var state_val_31401 = (state_31400[(1)]);
if((state_val_31401 === (7))){
var inst_31396 = (state_31400[(2)]);
var state_31400__$1 = state_31400;
var statearr_31402_31450 = state_31400__$1;
(statearr_31402_31450[(2)] = inst_31396);

(statearr_31402_31450[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31401 === (20))){
var state_31400__$1 = state_31400;
var statearr_31403_31451 = state_31400__$1;
(statearr_31403_31451[(2)] = null);

(statearr_31403_31451[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31401 === (1))){
var state_31400__$1 = state_31400;
var statearr_31404_31452 = state_31400__$1;
(statearr_31404_31452[(2)] = null);

(statearr_31404_31452[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31401 === (24))){
var inst_31379 = (state_31400[(7)]);
var inst_31388 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_31379);
var state_31400__$1 = state_31400;
var statearr_31405_31453 = state_31400__$1;
(statearr_31405_31453[(2)] = inst_31388);

(statearr_31405_31453[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31401 === (4))){
var inst_31331 = (state_31400[(8)]);
var inst_31331__$1 = (state_31400[(2)]);
var inst_31332 = (inst_31331__$1 == null);
var state_31400__$1 = (function (){var statearr_31406 = state_31400;
(statearr_31406[(8)] = inst_31331__$1);

return statearr_31406;
})();
if(cljs.core.truth_(inst_31332)){
var statearr_31407_31454 = state_31400__$1;
(statearr_31407_31454[(1)] = (5));

} else {
var statearr_31408_31455 = state_31400__$1;
(statearr_31408_31455[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31401 === (15))){
var inst_31373 = (state_31400[(2)]);
var state_31400__$1 = state_31400;
var statearr_31409_31456 = state_31400__$1;
(statearr_31409_31456[(2)] = inst_31373);

(statearr_31409_31456[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31401 === (21))){
var inst_31393 = (state_31400[(2)]);
var state_31400__$1 = (function (){var statearr_31410 = state_31400;
(statearr_31410[(9)] = inst_31393);

return statearr_31410;
})();
var statearr_31411_31457 = state_31400__$1;
(statearr_31411_31457[(2)] = null);

(statearr_31411_31457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31401 === (13))){
var inst_31355 = (state_31400[(10)]);
var inst_31357 = cljs.core.chunked_seq_QMARK_.call(null,inst_31355);
var state_31400__$1 = state_31400;
if(inst_31357){
var statearr_31412_31458 = state_31400__$1;
(statearr_31412_31458[(1)] = (16));

} else {
var statearr_31413_31459 = state_31400__$1;
(statearr_31413_31459[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31401 === (22))){
var inst_31385 = (state_31400[(2)]);
var state_31400__$1 = state_31400;
if(cljs.core.truth_(inst_31385)){
var statearr_31414_31460 = state_31400__$1;
(statearr_31414_31460[(1)] = (23));

} else {
var statearr_31415_31461 = state_31400__$1;
(statearr_31415_31461[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31401 === (6))){
var inst_31381 = (state_31400[(11)]);
var inst_31331 = (state_31400[(8)]);
var inst_31379 = (state_31400[(7)]);
var inst_31379__$1 = topic_fn.call(null,inst_31331);
var inst_31380 = cljs.core.deref.call(null,mults);
var inst_31381__$1 = cljs.core.get.call(null,inst_31380,inst_31379__$1);
var state_31400__$1 = (function (){var statearr_31416 = state_31400;
(statearr_31416[(11)] = inst_31381__$1);

(statearr_31416[(7)] = inst_31379__$1);

return statearr_31416;
})();
if(cljs.core.truth_(inst_31381__$1)){
var statearr_31417_31462 = state_31400__$1;
(statearr_31417_31462[(1)] = (19));

} else {
var statearr_31418_31463 = state_31400__$1;
(statearr_31418_31463[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31401 === (25))){
var inst_31390 = (state_31400[(2)]);
var state_31400__$1 = state_31400;
var statearr_31419_31464 = state_31400__$1;
(statearr_31419_31464[(2)] = inst_31390);

(statearr_31419_31464[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31401 === (17))){
var inst_31355 = (state_31400[(10)]);
var inst_31364 = cljs.core.first.call(null,inst_31355);
var inst_31365 = cljs.core.async.muxch_STAR_.call(null,inst_31364);
var inst_31366 = cljs.core.async.close_BANG_.call(null,inst_31365);
var inst_31367 = cljs.core.next.call(null,inst_31355);
var inst_31341 = inst_31367;
var inst_31342 = null;
var inst_31343 = (0);
var inst_31344 = (0);
var state_31400__$1 = (function (){var statearr_31420 = state_31400;
(statearr_31420[(12)] = inst_31341);

(statearr_31420[(13)] = inst_31342);

(statearr_31420[(14)] = inst_31343);

(statearr_31420[(15)] = inst_31344);

(statearr_31420[(16)] = inst_31366);

return statearr_31420;
})();
var statearr_31421_31465 = state_31400__$1;
(statearr_31421_31465[(2)] = null);

(statearr_31421_31465[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31401 === (3))){
var inst_31398 = (state_31400[(2)]);
var state_31400__$1 = state_31400;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31400__$1,inst_31398);
} else {
if((state_val_31401 === (12))){
var inst_31375 = (state_31400[(2)]);
var state_31400__$1 = state_31400;
var statearr_31422_31466 = state_31400__$1;
(statearr_31422_31466[(2)] = inst_31375);

(statearr_31422_31466[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31401 === (2))){
var state_31400__$1 = state_31400;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31400__$1,(4),ch);
} else {
if((state_val_31401 === (23))){
var state_31400__$1 = state_31400;
var statearr_31423_31467 = state_31400__$1;
(statearr_31423_31467[(2)] = null);

(statearr_31423_31467[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31401 === (19))){
var inst_31381 = (state_31400[(11)]);
var inst_31331 = (state_31400[(8)]);
var inst_31383 = cljs.core.async.muxch_STAR_.call(null,inst_31381);
var state_31400__$1 = state_31400;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31400__$1,(22),inst_31383,inst_31331);
} else {
if((state_val_31401 === (11))){
var inst_31355 = (state_31400[(10)]);
var inst_31341 = (state_31400[(12)]);
var inst_31355__$1 = cljs.core.seq.call(null,inst_31341);
var state_31400__$1 = (function (){var statearr_31424 = state_31400;
(statearr_31424[(10)] = inst_31355__$1);

return statearr_31424;
})();
if(inst_31355__$1){
var statearr_31425_31468 = state_31400__$1;
(statearr_31425_31468[(1)] = (13));

} else {
var statearr_31426_31469 = state_31400__$1;
(statearr_31426_31469[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31401 === (9))){
var inst_31377 = (state_31400[(2)]);
var state_31400__$1 = state_31400;
var statearr_31427_31470 = state_31400__$1;
(statearr_31427_31470[(2)] = inst_31377);

(statearr_31427_31470[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31401 === (5))){
var inst_31338 = cljs.core.deref.call(null,mults);
var inst_31339 = cljs.core.vals.call(null,inst_31338);
var inst_31340 = cljs.core.seq.call(null,inst_31339);
var inst_31341 = inst_31340;
var inst_31342 = null;
var inst_31343 = (0);
var inst_31344 = (0);
var state_31400__$1 = (function (){var statearr_31428 = state_31400;
(statearr_31428[(12)] = inst_31341);

(statearr_31428[(13)] = inst_31342);

(statearr_31428[(14)] = inst_31343);

(statearr_31428[(15)] = inst_31344);

return statearr_31428;
})();
var statearr_31429_31471 = state_31400__$1;
(statearr_31429_31471[(2)] = null);

(statearr_31429_31471[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31401 === (14))){
var state_31400__$1 = state_31400;
var statearr_31433_31472 = state_31400__$1;
(statearr_31433_31472[(2)] = null);

(statearr_31433_31472[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31401 === (16))){
var inst_31355 = (state_31400[(10)]);
var inst_31359 = cljs.core.chunk_first.call(null,inst_31355);
var inst_31360 = cljs.core.chunk_rest.call(null,inst_31355);
var inst_31361 = cljs.core.count.call(null,inst_31359);
var inst_31341 = inst_31360;
var inst_31342 = inst_31359;
var inst_31343 = inst_31361;
var inst_31344 = (0);
var state_31400__$1 = (function (){var statearr_31434 = state_31400;
(statearr_31434[(12)] = inst_31341);

(statearr_31434[(13)] = inst_31342);

(statearr_31434[(14)] = inst_31343);

(statearr_31434[(15)] = inst_31344);

return statearr_31434;
})();
var statearr_31435_31473 = state_31400__$1;
(statearr_31435_31473[(2)] = null);

(statearr_31435_31473[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31401 === (10))){
var inst_31341 = (state_31400[(12)]);
var inst_31342 = (state_31400[(13)]);
var inst_31343 = (state_31400[(14)]);
var inst_31344 = (state_31400[(15)]);
var inst_31349 = cljs.core._nth.call(null,inst_31342,inst_31344);
var inst_31350 = cljs.core.async.muxch_STAR_.call(null,inst_31349);
var inst_31351 = cljs.core.async.close_BANG_.call(null,inst_31350);
var inst_31352 = (inst_31344 + (1));
var tmp31430 = inst_31341;
var tmp31431 = inst_31342;
var tmp31432 = inst_31343;
var inst_31341__$1 = tmp31430;
var inst_31342__$1 = tmp31431;
var inst_31343__$1 = tmp31432;
var inst_31344__$1 = inst_31352;
var state_31400__$1 = (function (){var statearr_31436 = state_31400;
(statearr_31436[(12)] = inst_31341__$1);

(statearr_31436[(13)] = inst_31342__$1);

(statearr_31436[(14)] = inst_31343__$1);

(statearr_31436[(15)] = inst_31344__$1);

(statearr_31436[(17)] = inst_31351);

return statearr_31436;
})();
var statearr_31437_31474 = state_31400__$1;
(statearr_31437_31474[(2)] = null);

(statearr_31437_31474[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31401 === (18))){
var inst_31370 = (state_31400[(2)]);
var state_31400__$1 = state_31400;
var statearr_31438_31475 = state_31400__$1;
(statearr_31438_31475[(2)] = inst_31370);

(statearr_31438_31475[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31401 === (8))){
var inst_31343 = (state_31400[(14)]);
var inst_31344 = (state_31400[(15)]);
var inst_31346 = (inst_31344 < inst_31343);
var inst_31347 = inst_31346;
var state_31400__$1 = state_31400;
if(cljs.core.truth_(inst_31347)){
var statearr_31439_31476 = state_31400__$1;
(statearr_31439_31476[(1)] = (10));

} else {
var statearr_31440_31477 = state_31400__$1;
(statearr_31440_31477[(1)] = (11));

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
});})(c__20007__auto___31449,mults,ensure_mult,p))
;
return ((function (switch__19945__auto__,c__20007__auto___31449,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__19946__auto__ = null;
var cljs$core$async$state_machine__19946__auto____0 = (function (){
var statearr_31444 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31444[(0)] = cljs$core$async$state_machine__19946__auto__);

(statearr_31444[(1)] = (1));

return statearr_31444;
});
var cljs$core$async$state_machine__19946__auto____1 = (function (state_31400){
while(true){
var ret_value__19947__auto__ = (function (){try{while(true){
var result__19948__auto__ = switch__19945__auto__.call(null,state_31400);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19948__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19948__auto__;
}
break;
}
}catch (e31445){if((e31445 instanceof Object)){
var ex__19949__auto__ = e31445;
var statearr_31446_31478 = state_31400;
(statearr_31446_31478[(5)] = ex__19949__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31400);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31445;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31479 = state_31400;
state_31400 = G__31479;
continue;
} else {
return ret_value__19947__auto__;
}
break;
}
});
cljs$core$async$state_machine__19946__auto__ = function(state_31400){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19946__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19946__auto____1.call(this,state_31400);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19946__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19946__auto____0;
cljs$core$async$state_machine__19946__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19946__auto____1;
return cljs$core$async$state_machine__19946__auto__;
})()
;})(switch__19945__auto__,c__20007__auto___31449,mults,ensure_mult,p))
})();
var state__20009__auto__ = (function (){var statearr_31447 = f__20008__auto__.call(null);
(statearr_31447[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20007__auto___31449);

return statearr_31447;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20009__auto__);
});})(c__20007__auto___31449,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(){
var G__31481 = arguments.length;
switch (G__31481) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(){
var G__31484 = arguments.length;
switch (G__31484) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(){
var G__31487 = arguments.length;
switch (G__31487) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__20007__auto___31557 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20007__auto___31557,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__20008__auto__ = (function (){var switch__19945__auto__ = ((function (c__20007__auto___31557,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_31526){
var state_val_31527 = (state_31526[(1)]);
if((state_val_31527 === (7))){
var state_31526__$1 = state_31526;
var statearr_31528_31558 = state_31526__$1;
(statearr_31528_31558[(2)] = null);

(statearr_31528_31558[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31527 === (1))){
var state_31526__$1 = state_31526;
var statearr_31529_31559 = state_31526__$1;
(statearr_31529_31559[(2)] = null);

(statearr_31529_31559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31527 === (4))){
var inst_31490 = (state_31526[(7)]);
var inst_31492 = (inst_31490 < cnt);
var state_31526__$1 = state_31526;
if(cljs.core.truth_(inst_31492)){
var statearr_31530_31560 = state_31526__$1;
(statearr_31530_31560[(1)] = (6));

} else {
var statearr_31531_31561 = state_31526__$1;
(statearr_31531_31561[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31527 === (15))){
var inst_31522 = (state_31526[(2)]);
var state_31526__$1 = state_31526;
var statearr_31532_31562 = state_31526__$1;
(statearr_31532_31562[(2)] = inst_31522);

(statearr_31532_31562[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31527 === (13))){
var inst_31515 = cljs.core.async.close_BANG_.call(null,out);
var state_31526__$1 = state_31526;
var statearr_31533_31563 = state_31526__$1;
(statearr_31533_31563[(2)] = inst_31515);

(statearr_31533_31563[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31527 === (6))){
var state_31526__$1 = state_31526;
var statearr_31534_31564 = state_31526__$1;
(statearr_31534_31564[(2)] = null);

(statearr_31534_31564[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31527 === (3))){
var inst_31524 = (state_31526[(2)]);
var state_31526__$1 = state_31526;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31526__$1,inst_31524);
} else {
if((state_val_31527 === (12))){
var inst_31512 = (state_31526[(8)]);
var inst_31512__$1 = (state_31526[(2)]);
var inst_31513 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_31512__$1);
var state_31526__$1 = (function (){var statearr_31535 = state_31526;
(statearr_31535[(8)] = inst_31512__$1);

return statearr_31535;
})();
if(cljs.core.truth_(inst_31513)){
var statearr_31536_31565 = state_31526__$1;
(statearr_31536_31565[(1)] = (13));

} else {
var statearr_31537_31566 = state_31526__$1;
(statearr_31537_31566[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31527 === (2))){
var inst_31489 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_31490 = (0);
var state_31526__$1 = (function (){var statearr_31538 = state_31526;
(statearr_31538[(7)] = inst_31490);

(statearr_31538[(9)] = inst_31489);

return statearr_31538;
})();
var statearr_31539_31567 = state_31526__$1;
(statearr_31539_31567[(2)] = null);

(statearr_31539_31567[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31527 === (11))){
var inst_31490 = (state_31526[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31526,(10),Object,null,(9));
var inst_31499 = chs__$1.call(null,inst_31490);
var inst_31500 = done.call(null,inst_31490);
var inst_31501 = cljs.core.async.take_BANG_.call(null,inst_31499,inst_31500);
var state_31526__$1 = state_31526;
var statearr_31540_31568 = state_31526__$1;
(statearr_31540_31568[(2)] = inst_31501);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31526__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31527 === (9))){
var inst_31490 = (state_31526[(7)]);
var inst_31503 = (state_31526[(2)]);
var inst_31504 = (inst_31490 + (1));
var inst_31490__$1 = inst_31504;
var state_31526__$1 = (function (){var statearr_31541 = state_31526;
(statearr_31541[(7)] = inst_31490__$1);

(statearr_31541[(10)] = inst_31503);

return statearr_31541;
})();
var statearr_31542_31569 = state_31526__$1;
(statearr_31542_31569[(2)] = null);

(statearr_31542_31569[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31527 === (5))){
var inst_31510 = (state_31526[(2)]);
var state_31526__$1 = (function (){var statearr_31543 = state_31526;
(statearr_31543[(11)] = inst_31510);

return statearr_31543;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31526__$1,(12),dchan);
} else {
if((state_val_31527 === (14))){
var inst_31512 = (state_31526[(8)]);
var inst_31517 = cljs.core.apply.call(null,f,inst_31512);
var state_31526__$1 = state_31526;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31526__$1,(16),out,inst_31517);
} else {
if((state_val_31527 === (16))){
var inst_31519 = (state_31526[(2)]);
var state_31526__$1 = (function (){var statearr_31544 = state_31526;
(statearr_31544[(12)] = inst_31519);

return statearr_31544;
})();
var statearr_31545_31570 = state_31526__$1;
(statearr_31545_31570[(2)] = null);

(statearr_31545_31570[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31527 === (10))){
var inst_31494 = (state_31526[(2)]);
var inst_31495 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_31526__$1 = (function (){var statearr_31546 = state_31526;
(statearr_31546[(13)] = inst_31494);

return statearr_31546;
})();
var statearr_31547_31571 = state_31526__$1;
(statearr_31547_31571[(2)] = inst_31495);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31526__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31527 === (8))){
var inst_31508 = (state_31526[(2)]);
var state_31526__$1 = state_31526;
var statearr_31548_31572 = state_31526__$1;
(statearr_31548_31572[(2)] = inst_31508);

(statearr_31548_31572[(1)] = (5));


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
});})(c__20007__auto___31557,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__19945__auto__,c__20007__auto___31557,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__19946__auto__ = null;
var cljs$core$async$state_machine__19946__auto____0 = (function (){
var statearr_31552 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31552[(0)] = cljs$core$async$state_machine__19946__auto__);

(statearr_31552[(1)] = (1));

return statearr_31552;
});
var cljs$core$async$state_machine__19946__auto____1 = (function (state_31526){
while(true){
var ret_value__19947__auto__ = (function (){try{while(true){
var result__19948__auto__ = switch__19945__auto__.call(null,state_31526);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19948__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19948__auto__;
}
break;
}
}catch (e31553){if((e31553 instanceof Object)){
var ex__19949__auto__ = e31553;
var statearr_31554_31573 = state_31526;
(statearr_31554_31573[(5)] = ex__19949__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31526);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31553;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31574 = state_31526;
state_31526 = G__31574;
continue;
} else {
return ret_value__19947__auto__;
}
break;
}
});
cljs$core$async$state_machine__19946__auto__ = function(state_31526){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19946__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19946__auto____1.call(this,state_31526);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19946__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19946__auto____0;
cljs$core$async$state_machine__19946__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19946__auto____1;
return cljs$core$async$state_machine__19946__auto__;
})()
;})(switch__19945__auto__,c__20007__auto___31557,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__20009__auto__ = (function (){var statearr_31555 = f__20008__auto__.call(null);
(statearr_31555[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20007__auto___31557);

return statearr_31555;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20009__auto__);
});})(c__20007__auto___31557,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(){
var G__31577 = arguments.length;
switch (G__31577) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20007__auto___31632 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20007__auto___31632,out){
return (function (){
var f__20008__auto__ = (function (){var switch__19945__auto__ = ((function (c__20007__auto___31632,out){
return (function (state_31607){
var state_val_31608 = (state_31607[(1)]);
if((state_val_31608 === (7))){
var inst_31586 = (state_31607[(7)]);
var inst_31587 = (state_31607[(8)]);
var inst_31586__$1 = (state_31607[(2)]);
var inst_31587__$1 = cljs.core.nth.call(null,inst_31586__$1,(0),null);
var inst_31588 = cljs.core.nth.call(null,inst_31586__$1,(1),null);
var inst_31589 = (inst_31587__$1 == null);
var state_31607__$1 = (function (){var statearr_31609 = state_31607;
(statearr_31609[(7)] = inst_31586__$1);

(statearr_31609[(8)] = inst_31587__$1);

(statearr_31609[(9)] = inst_31588);

return statearr_31609;
})();
if(cljs.core.truth_(inst_31589)){
var statearr_31610_31633 = state_31607__$1;
(statearr_31610_31633[(1)] = (8));

} else {
var statearr_31611_31634 = state_31607__$1;
(statearr_31611_31634[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31608 === (1))){
var inst_31578 = cljs.core.vec.call(null,chs);
var inst_31579 = inst_31578;
var state_31607__$1 = (function (){var statearr_31612 = state_31607;
(statearr_31612[(10)] = inst_31579);

return statearr_31612;
})();
var statearr_31613_31635 = state_31607__$1;
(statearr_31613_31635[(2)] = null);

(statearr_31613_31635[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31608 === (4))){
var inst_31579 = (state_31607[(10)]);
var state_31607__$1 = state_31607;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31607__$1,(7),inst_31579);
} else {
if((state_val_31608 === (6))){
var inst_31603 = (state_31607[(2)]);
var state_31607__$1 = state_31607;
var statearr_31614_31636 = state_31607__$1;
(statearr_31614_31636[(2)] = inst_31603);

(statearr_31614_31636[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31608 === (3))){
var inst_31605 = (state_31607[(2)]);
var state_31607__$1 = state_31607;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31607__$1,inst_31605);
} else {
if((state_val_31608 === (2))){
var inst_31579 = (state_31607[(10)]);
var inst_31581 = cljs.core.count.call(null,inst_31579);
var inst_31582 = (inst_31581 > (0));
var state_31607__$1 = state_31607;
if(cljs.core.truth_(inst_31582)){
var statearr_31616_31637 = state_31607__$1;
(statearr_31616_31637[(1)] = (4));

} else {
var statearr_31617_31638 = state_31607__$1;
(statearr_31617_31638[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31608 === (11))){
var inst_31579 = (state_31607[(10)]);
var inst_31596 = (state_31607[(2)]);
var tmp31615 = inst_31579;
var inst_31579__$1 = tmp31615;
var state_31607__$1 = (function (){var statearr_31618 = state_31607;
(statearr_31618[(11)] = inst_31596);

(statearr_31618[(10)] = inst_31579__$1);

return statearr_31618;
})();
var statearr_31619_31639 = state_31607__$1;
(statearr_31619_31639[(2)] = null);

(statearr_31619_31639[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31608 === (9))){
var inst_31587 = (state_31607[(8)]);
var state_31607__$1 = state_31607;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31607__$1,(11),out,inst_31587);
} else {
if((state_val_31608 === (5))){
var inst_31601 = cljs.core.async.close_BANG_.call(null,out);
var state_31607__$1 = state_31607;
var statearr_31620_31640 = state_31607__$1;
(statearr_31620_31640[(2)] = inst_31601);

(statearr_31620_31640[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31608 === (10))){
var inst_31599 = (state_31607[(2)]);
var state_31607__$1 = state_31607;
var statearr_31621_31641 = state_31607__$1;
(statearr_31621_31641[(2)] = inst_31599);

(statearr_31621_31641[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31608 === (8))){
var inst_31586 = (state_31607[(7)]);
var inst_31587 = (state_31607[(8)]);
var inst_31588 = (state_31607[(9)]);
var inst_31579 = (state_31607[(10)]);
var inst_31591 = (function (){var c = inst_31588;
var v = inst_31587;
var vec__31584 = inst_31586;
var cs = inst_31579;
return ((function (c,v,vec__31584,cs,inst_31586,inst_31587,inst_31588,inst_31579,state_val_31608,c__20007__auto___31632,out){
return (function (p1__31575_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__31575_SHARP_);
});
;})(c,v,vec__31584,cs,inst_31586,inst_31587,inst_31588,inst_31579,state_val_31608,c__20007__auto___31632,out))
})();
var inst_31592 = cljs.core.filterv.call(null,inst_31591,inst_31579);
var inst_31579__$1 = inst_31592;
var state_31607__$1 = (function (){var statearr_31622 = state_31607;
(statearr_31622[(10)] = inst_31579__$1);

return statearr_31622;
})();
var statearr_31623_31642 = state_31607__$1;
(statearr_31623_31642[(2)] = null);

(statearr_31623_31642[(1)] = (2));


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
});})(c__20007__auto___31632,out))
;
return ((function (switch__19945__auto__,c__20007__auto___31632,out){
return (function() {
var cljs$core$async$state_machine__19946__auto__ = null;
var cljs$core$async$state_machine__19946__auto____0 = (function (){
var statearr_31627 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31627[(0)] = cljs$core$async$state_machine__19946__auto__);

(statearr_31627[(1)] = (1));

return statearr_31627;
});
var cljs$core$async$state_machine__19946__auto____1 = (function (state_31607){
while(true){
var ret_value__19947__auto__ = (function (){try{while(true){
var result__19948__auto__ = switch__19945__auto__.call(null,state_31607);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19948__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19948__auto__;
}
break;
}
}catch (e31628){if((e31628 instanceof Object)){
var ex__19949__auto__ = e31628;
var statearr_31629_31643 = state_31607;
(statearr_31629_31643[(5)] = ex__19949__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31607);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31628;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31644 = state_31607;
state_31607 = G__31644;
continue;
} else {
return ret_value__19947__auto__;
}
break;
}
});
cljs$core$async$state_machine__19946__auto__ = function(state_31607){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19946__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19946__auto____1.call(this,state_31607);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19946__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19946__auto____0;
cljs$core$async$state_machine__19946__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19946__auto____1;
return cljs$core$async$state_machine__19946__auto__;
})()
;})(switch__19945__auto__,c__20007__auto___31632,out))
})();
var state__20009__auto__ = (function (){var statearr_31630 = f__20008__auto__.call(null);
(statearr_31630[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20007__auto___31632);

return statearr_31630;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20009__auto__);
});})(c__20007__auto___31632,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(){
var G__31646 = arguments.length;
switch (G__31646) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20007__auto___31694 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20007__auto___31694,out){
return (function (){
var f__20008__auto__ = (function (){var switch__19945__auto__ = ((function (c__20007__auto___31694,out){
return (function (state_31670){
var state_val_31671 = (state_31670[(1)]);
if((state_val_31671 === (7))){
var inst_31652 = (state_31670[(7)]);
var inst_31652__$1 = (state_31670[(2)]);
var inst_31653 = (inst_31652__$1 == null);
var inst_31654 = cljs.core.not.call(null,inst_31653);
var state_31670__$1 = (function (){var statearr_31672 = state_31670;
(statearr_31672[(7)] = inst_31652__$1);

return statearr_31672;
})();
if(inst_31654){
var statearr_31673_31695 = state_31670__$1;
(statearr_31673_31695[(1)] = (8));

} else {
var statearr_31674_31696 = state_31670__$1;
(statearr_31674_31696[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31671 === (1))){
var inst_31647 = (0);
var state_31670__$1 = (function (){var statearr_31675 = state_31670;
(statearr_31675[(8)] = inst_31647);

return statearr_31675;
})();
var statearr_31676_31697 = state_31670__$1;
(statearr_31676_31697[(2)] = null);

(statearr_31676_31697[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31671 === (4))){
var state_31670__$1 = state_31670;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31670__$1,(7),ch);
} else {
if((state_val_31671 === (6))){
var inst_31665 = (state_31670[(2)]);
var state_31670__$1 = state_31670;
var statearr_31677_31698 = state_31670__$1;
(statearr_31677_31698[(2)] = inst_31665);

(statearr_31677_31698[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31671 === (3))){
var inst_31667 = (state_31670[(2)]);
var inst_31668 = cljs.core.async.close_BANG_.call(null,out);
var state_31670__$1 = (function (){var statearr_31678 = state_31670;
(statearr_31678[(9)] = inst_31667);

return statearr_31678;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31670__$1,inst_31668);
} else {
if((state_val_31671 === (2))){
var inst_31647 = (state_31670[(8)]);
var inst_31649 = (inst_31647 < n);
var state_31670__$1 = state_31670;
if(cljs.core.truth_(inst_31649)){
var statearr_31679_31699 = state_31670__$1;
(statearr_31679_31699[(1)] = (4));

} else {
var statearr_31680_31700 = state_31670__$1;
(statearr_31680_31700[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31671 === (11))){
var inst_31647 = (state_31670[(8)]);
var inst_31657 = (state_31670[(2)]);
var inst_31658 = (inst_31647 + (1));
var inst_31647__$1 = inst_31658;
var state_31670__$1 = (function (){var statearr_31681 = state_31670;
(statearr_31681[(10)] = inst_31657);

(statearr_31681[(8)] = inst_31647__$1);

return statearr_31681;
})();
var statearr_31682_31701 = state_31670__$1;
(statearr_31682_31701[(2)] = null);

(statearr_31682_31701[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31671 === (9))){
var state_31670__$1 = state_31670;
var statearr_31683_31702 = state_31670__$1;
(statearr_31683_31702[(2)] = null);

(statearr_31683_31702[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31671 === (5))){
var state_31670__$1 = state_31670;
var statearr_31684_31703 = state_31670__$1;
(statearr_31684_31703[(2)] = null);

(statearr_31684_31703[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31671 === (10))){
var inst_31662 = (state_31670[(2)]);
var state_31670__$1 = state_31670;
var statearr_31685_31704 = state_31670__$1;
(statearr_31685_31704[(2)] = inst_31662);

(statearr_31685_31704[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31671 === (8))){
var inst_31652 = (state_31670[(7)]);
var state_31670__$1 = state_31670;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31670__$1,(11),out,inst_31652);
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
});})(c__20007__auto___31694,out))
;
return ((function (switch__19945__auto__,c__20007__auto___31694,out){
return (function() {
var cljs$core$async$state_machine__19946__auto__ = null;
var cljs$core$async$state_machine__19946__auto____0 = (function (){
var statearr_31689 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31689[(0)] = cljs$core$async$state_machine__19946__auto__);

(statearr_31689[(1)] = (1));

return statearr_31689;
});
var cljs$core$async$state_machine__19946__auto____1 = (function (state_31670){
while(true){
var ret_value__19947__auto__ = (function (){try{while(true){
var result__19948__auto__ = switch__19945__auto__.call(null,state_31670);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19948__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19948__auto__;
}
break;
}
}catch (e31690){if((e31690 instanceof Object)){
var ex__19949__auto__ = e31690;
var statearr_31691_31705 = state_31670;
(statearr_31691_31705[(5)] = ex__19949__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31670);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31690;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31706 = state_31670;
state_31670 = G__31706;
continue;
} else {
return ret_value__19947__auto__;
}
break;
}
});
cljs$core$async$state_machine__19946__auto__ = function(state_31670){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19946__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19946__auto____1.call(this,state_31670);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19946__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19946__auto____0;
cljs$core$async$state_machine__19946__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19946__auto____1;
return cljs$core$async$state_machine__19946__auto__;
})()
;})(switch__19945__auto__,c__20007__auto___31694,out))
})();
var state__20009__auto__ = (function (){var statearr_31692 = f__20008__auto__.call(null);
(statearr_31692[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20007__auto___31694);

return statearr_31692;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20009__auto__);
});})(c__20007__auto___31694,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t31714 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31714 = (function (ch,f,map_LT_,meta31715){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta31715 = meta31715;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31714.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t31714.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t31714.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t31714.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t31717 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31717 = (function (fn1,_,meta31715,map_LT_,f,ch,meta31718){
this.fn1 = fn1;
this._ = _;
this.meta31715 = meta31715;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta31718 = meta31718;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31717.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t31717.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t31717.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__31707_SHARP_){
return f1.call(null,(((p1__31707_SHARP_ == null))?null:self__.f.call(null,p1__31707_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t31717.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_31719){
var self__ = this;
var _31719__$1 = this;
return self__.meta31718;
});})(___$1))
;

cljs.core.async.t31717.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_31719,meta31718__$1){
var self__ = this;
var _31719__$1 = this;
return (new cljs.core.async.t31717(self__.fn1,self__._,self__.meta31715,self__.map_LT_,self__.f,self__.ch,meta31718__$1));
});})(___$1))
;

cljs.core.async.t31717.cljs$lang$type = true;

cljs.core.async.t31717.cljs$lang$ctorStr = "cljs.core.async/t31717";

cljs.core.async.t31717.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__18532__auto__,writer__18533__auto__,opt__18534__auto__){
return cljs.core._write.call(null,writer__18533__auto__,"cljs.core.async/t31717");
});})(___$1))
;

cljs.core.async.__GT_t31717 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t31717(fn1__$1,___$2,meta31715__$1,map_LT___$1,f__$1,ch__$1,meta31718){
return (new cljs.core.async.t31717(fn1__$1,___$2,meta31715__$1,map_LT___$1,f__$1,ch__$1,meta31718));
});})(___$1))
;

}

return (new cljs.core.async.t31717(fn1,___$1,self__.meta31715,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__17941__auto__ = ret;
if(cljs.core.truth_(and__17941__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__17941__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t31714.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t31714.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t31714.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t31714.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31716){
var self__ = this;
var _31716__$1 = this;
return self__.meta31715;
});

cljs.core.async.t31714.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31716,meta31715__$1){
var self__ = this;
var _31716__$1 = this;
return (new cljs.core.async.t31714(self__.ch,self__.f,self__.map_LT_,meta31715__$1));
});

cljs.core.async.t31714.cljs$lang$type = true;

cljs.core.async.t31714.cljs$lang$ctorStr = "cljs.core.async/t31714";

cljs.core.async.t31714.cljs$lang$ctorPrWriter = (function (this__18532__auto__,writer__18533__auto__,opt__18534__auto__){
return cljs.core._write.call(null,writer__18533__auto__,"cljs.core.async/t31714");
});

cljs.core.async.__GT_t31714 = (function cljs$core$async$map_LT__$___GT_t31714(ch__$1,f__$1,map_LT___$1,meta31715){
return (new cljs.core.async.t31714(ch__$1,f__$1,map_LT___$1,meta31715));
});

}

return (new cljs.core.async.t31714(ch,f,cljs$core$async$map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t31723 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31723 = (function (ch,f,map_GT_,meta31724){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta31724 = meta31724;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31723.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t31723.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t31723.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t31723.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t31723.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t31723.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t31723.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31725){
var self__ = this;
var _31725__$1 = this;
return self__.meta31724;
});

cljs.core.async.t31723.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31725,meta31724__$1){
var self__ = this;
var _31725__$1 = this;
return (new cljs.core.async.t31723(self__.ch,self__.f,self__.map_GT_,meta31724__$1));
});

cljs.core.async.t31723.cljs$lang$type = true;

cljs.core.async.t31723.cljs$lang$ctorStr = "cljs.core.async/t31723";

cljs.core.async.t31723.cljs$lang$ctorPrWriter = (function (this__18532__auto__,writer__18533__auto__,opt__18534__auto__){
return cljs.core._write.call(null,writer__18533__auto__,"cljs.core.async/t31723");
});

cljs.core.async.__GT_t31723 = (function cljs$core$async$map_GT__$___GT_t31723(ch__$1,f__$1,map_GT___$1,meta31724){
return (new cljs.core.async.t31723(ch__$1,f__$1,map_GT___$1,meta31724));
});

}

return (new cljs.core.async.t31723(ch,f,cljs$core$async$map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t31729 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31729 = (function (ch,p,filter_GT_,meta31730){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta31730 = meta31730;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31729.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t31729.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t31729.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t31729.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t31729.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t31729.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t31729.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t31729.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31731){
var self__ = this;
var _31731__$1 = this;
return self__.meta31730;
});

cljs.core.async.t31729.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31731,meta31730__$1){
var self__ = this;
var _31731__$1 = this;
return (new cljs.core.async.t31729(self__.ch,self__.p,self__.filter_GT_,meta31730__$1));
});

cljs.core.async.t31729.cljs$lang$type = true;

cljs.core.async.t31729.cljs$lang$ctorStr = "cljs.core.async/t31729";

cljs.core.async.t31729.cljs$lang$ctorPrWriter = (function (this__18532__auto__,writer__18533__auto__,opt__18534__auto__){
return cljs.core._write.call(null,writer__18533__auto__,"cljs.core.async/t31729");
});

cljs.core.async.__GT_t31729 = (function cljs$core$async$filter_GT__$___GT_t31729(ch__$1,p__$1,filter_GT___$1,meta31730){
return (new cljs.core.async.t31729(ch__$1,p__$1,filter_GT___$1,meta31730));
});

}

return (new cljs.core.async.t31729(ch,p,cljs$core$async$filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(){
var G__31733 = arguments.length;
switch (G__31733) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20007__auto___31776 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20007__auto___31776,out){
return (function (){
var f__20008__auto__ = (function (){var switch__19945__auto__ = ((function (c__20007__auto___31776,out){
return (function (state_31754){
var state_val_31755 = (state_31754[(1)]);
if((state_val_31755 === (7))){
var inst_31750 = (state_31754[(2)]);
var state_31754__$1 = state_31754;
var statearr_31756_31777 = state_31754__$1;
(statearr_31756_31777[(2)] = inst_31750);

(statearr_31756_31777[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31755 === (1))){
var state_31754__$1 = state_31754;
var statearr_31757_31778 = state_31754__$1;
(statearr_31757_31778[(2)] = null);

(statearr_31757_31778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31755 === (4))){
var inst_31736 = (state_31754[(7)]);
var inst_31736__$1 = (state_31754[(2)]);
var inst_31737 = (inst_31736__$1 == null);
var state_31754__$1 = (function (){var statearr_31758 = state_31754;
(statearr_31758[(7)] = inst_31736__$1);

return statearr_31758;
})();
if(cljs.core.truth_(inst_31737)){
var statearr_31759_31779 = state_31754__$1;
(statearr_31759_31779[(1)] = (5));

} else {
var statearr_31760_31780 = state_31754__$1;
(statearr_31760_31780[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31755 === (6))){
var inst_31736 = (state_31754[(7)]);
var inst_31741 = p.call(null,inst_31736);
var state_31754__$1 = state_31754;
if(cljs.core.truth_(inst_31741)){
var statearr_31761_31781 = state_31754__$1;
(statearr_31761_31781[(1)] = (8));

} else {
var statearr_31762_31782 = state_31754__$1;
(statearr_31762_31782[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31755 === (3))){
var inst_31752 = (state_31754[(2)]);
var state_31754__$1 = state_31754;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31754__$1,inst_31752);
} else {
if((state_val_31755 === (2))){
var state_31754__$1 = state_31754;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31754__$1,(4),ch);
} else {
if((state_val_31755 === (11))){
var inst_31744 = (state_31754[(2)]);
var state_31754__$1 = state_31754;
var statearr_31763_31783 = state_31754__$1;
(statearr_31763_31783[(2)] = inst_31744);

(statearr_31763_31783[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31755 === (9))){
var state_31754__$1 = state_31754;
var statearr_31764_31784 = state_31754__$1;
(statearr_31764_31784[(2)] = null);

(statearr_31764_31784[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31755 === (5))){
var inst_31739 = cljs.core.async.close_BANG_.call(null,out);
var state_31754__$1 = state_31754;
var statearr_31765_31785 = state_31754__$1;
(statearr_31765_31785[(2)] = inst_31739);

(statearr_31765_31785[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31755 === (10))){
var inst_31747 = (state_31754[(2)]);
var state_31754__$1 = (function (){var statearr_31766 = state_31754;
(statearr_31766[(8)] = inst_31747);

return statearr_31766;
})();
var statearr_31767_31786 = state_31754__$1;
(statearr_31767_31786[(2)] = null);

(statearr_31767_31786[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31755 === (8))){
var inst_31736 = (state_31754[(7)]);
var state_31754__$1 = state_31754;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31754__$1,(11),out,inst_31736);
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
});})(c__20007__auto___31776,out))
;
return ((function (switch__19945__auto__,c__20007__auto___31776,out){
return (function() {
var cljs$core$async$state_machine__19946__auto__ = null;
var cljs$core$async$state_machine__19946__auto____0 = (function (){
var statearr_31771 = [null,null,null,null,null,null,null,null,null];
(statearr_31771[(0)] = cljs$core$async$state_machine__19946__auto__);

(statearr_31771[(1)] = (1));

return statearr_31771;
});
var cljs$core$async$state_machine__19946__auto____1 = (function (state_31754){
while(true){
var ret_value__19947__auto__ = (function (){try{while(true){
var result__19948__auto__ = switch__19945__auto__.call(null,state_31754);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19948__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19948__auto__;
}
break;
}
}catch (e31772){if((e31772 instanceof Object)){
var ex__19949__auto__ = e31772;
var statearr_31773_31787 = state_31754;
(statearr_31773_31787[(5)] = ex__19949__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31754);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31772;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31788 = state_31754;
state_31754 = G__31788;
continue;
} else {
return ret_value__19947__auto__;
}
break;
}
});
cljs$core$async$state_machine__19946__auto__ = function(state_31754){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19946__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19946__auto____1.call(this,state_31754);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19946__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19946__auto____0;
cljs$core$async$state_machine__19946__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19946__auto____1;
return cljs$core$async$state_machine__19946__auto__;
})()
;})(switch__19945__auto__,c__20007__auto___31776,out))
})();
var state__20009__auto__ = (function (){var statearr_31774 = f__20008__auto__.call(null);
(statearr_31774[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20007__auto___31776);

return statearr_31774;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20009__auto__);
});})(c__20007__auto___31776,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__31790 = arguments.length;
switch (G__31790) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__20007__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20007__auto__){
return (function (){
var f__20008__auto__ = (function (){var switch__19945__auto__ = ((function (c__20007__auto__){
return (function (state_31957){
var state_val_31958 = (state_31957[(1)]);
if((state_val_31958 === (7))){
var inst_31953 = (state_31957[(2)]);
var state_31957__$1 = state_31957;
var statearr_31959_32000 = state_31957__$1;
(statearr_31959_32000[(2)] = inst_31953);

(statearr_31959_32000[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (20))){
var inst_31923 = (state_31957[(7)]);
var inst_31934 = (state_31957[(2)]);
var inst_31935 = cljs.core.next.call(null,inst_31923);
var inst_31909 = inst_31935;
var inst_31910 = null;
var inst_31911 = (0);
var inst_31912 = (0);
var state_31957__$1 = (function (){var statearr_31960 = state_31957;
(statearr_31960[(8)] = inst_31910);

(statearr_31960[(9)] = inst_31912);

(statearr_31960[(10)] = inst_31934);

(statearr_31960[(11)] = inst_31911);

(statearr_31960[(12)] = inst_31909);

return statearr_31960;
})();
var statearr_31961_32001 = state_31957__$1;
(statearr_31961_32001[(2)] = null);

(statearr_31961_32001[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (1))){
var state_31957__$1 = state_31957;
var statearr_31962_32002 = state_31957__$1;
(statearr_31962_32002[(2)] = null);

(statearr_31962_32002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (4))){
var inst_31898 = (state_31957[(13)]);
var inst_31898__$1 = (state_31957[(2)]);
var inst_31899 = (inst_31898__$1 == null);
var state_31957__$1 = (function (){var statearr_31963 = state_31957;
(statearr_31963[(13)] = inst_31898__$1);

return statearr_31963;
})();
if(cljs.core.truth_(inst_31899)){
var statearr_31964_32003 = state_31957__$1;
(statearr_31964_32003[(1)] = (5));

} else {
var statearr_31965_32004 = state_31957__$1;
(statearr_31965_32004[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (15))){
var state_31957__$1 = state_31957;
var statearr_31969_32005 = state_31957__$1;
(statearr_31969_32005[(2)] = null);

(statearr_31969_32005[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (21))){
var state_31957__$1 = state_31957;
var statearr_31970_32006 = state_31957__$1;
(statearr_31970_32006[(2)] = null);

(statearr_31970_32006[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (13))){
var inst_31910 = (state_31957[(8)]);
var inst_31912 = (state_31957[(9)]);
var inst_31911 = (state_31957[(11)]);
var inst_31909 = (state_31957[(12)]);
var inst_31919 = (state_31957[(2)]);
var inst_31920 = (inst_31912 + (1));
var tmp31966 = inst_31910;
var tmp31967 = inst_31911;
var tmp31968 = inst_31909;
var inst_31909__$1 = tmp31968;
var inst_31910__$1 = tmp31966;
var inst_31911__$1 = tmp31967;
var inst_31912__$1 = inst_31920;
var state_31957__$1 = (function (){var statearr_31971 = state_31957;
(statearr_31971[(8)] = inst_31910__$1);

(statearr_31971[(9)] = inst_31912__$1);

(statearr_31971[(11)] = inst_31911__$1);

(statearr_31971[(12)] = inst_31909__$1);

(statearr_31971[(14)] = inst_31919);

return statearr_31971;
})();
var statearr_31972_32007 = state_31957__$1;
(statearr_31972_32007[(2)] = null);

(statearr_31972_32007[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (22))){
var state_31957__$1 = state_31957;
var statearr_31973_32008 = state_31957__$1;
(statearr_31973_32008[(2)] = null);

(statearr_31973_32008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (6))){
var inst_31898 = (state_31957[(13)]);
var inst_31907 = f.call(null,inst_31898);
var inst_31908 = cljs.core.seq.call(null,inst_31907);
var inst_31909 = inst_31908;
var inst_31910 = null;
var inst_31911 = (0);
var inst_31912 = (0);
var state_31957__$1 = (function (){var statearr_31974 = state_31957;
(statearr_31974[(8)] = inst_31910);

(statearr_31974[(9)] = inst_31912);

(statearr_31974[(11)] = inst_31911);

(statearr_31974[(12)] = inst_31909);

return statearr_31974;
})();
var statearr_31975_32009 = state_31957__$1;
(statearr_31975_32009[(2)] = null);

(statearr_31975_32009[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (17))){
var inst_31923 = (state_31957[(7)]);
var inst_31927 = cljs.core.chunk_first.call(null,inst_31923);
var inst_31928 = cljs.core.chunk_rest.call(null,inst_31923);
var inst_31929 = cljs.core.count.call(null,inst_31927);
var inst_31909 = inst_31928;
var inst_31910 = inst_31927;
var inst_31911 = inst_31929;
var inst_31912 = (0);
var state_31957__$1 = (function (){var statearr_31976 = state_31957;
(statearr_31976[(8)] = inst_31910);

(statearr_31976[(9)] = inst_31912);

(statearr_31976[(11)] = inst_31911);

(statearr_31976[(12)] = inst_31909);

return statearr_31976;
})();
var statearr_31977_32010 = state_31957__$1;
(statearr_31977_32010[(2)] = null);

(statearr_31977_32010[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (3))){
var inst_31955 = (state_31957[(2)]);
var state_31957__$1 = state_31957;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31957__$1,inst_31955);
} else {
if((state_val_31958 === (12))){
var inst_31943 = (state_31957[(2)]);
var state_31957__$1 = state_31957;
var statearr_31978_32011 = state_31957__$1;
(statearr_31978_32011[(2)] = inst_31943);

(statearr_31978_32011[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (2))){
var state_31957__$1 = state_31957;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31957__$1,(4),in$);
} else {
if((state_val_31958 === (23))){
var inst_31951 = (state_31957[(2)]);
var state_31957__$1 = state_31957;
var statearr_31979_32012 = state_31957__$1;
(statearr_31979_32012[(2)] = inst_31951);

(statearr_31979_32012[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (19))){
var inst_31938 = (state_31957[(2)]);
var state_31957__$1 = state_31957;
var statearr_31980_32013 = state_31957__$1;
(statearr_31980_32013[(2)] = inst_31938);

(statearr_31980_32013[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (11))){
var inst_31923 = (state_31957[(7)]);
var inst_31909 = (state_31957[(12)]);
var inst_31923__$1 = cljs.core.seq.call(null,inst_31909);
var state_31957__$1 = (function (){var statearr_31981 = state_31957;
(statearr_31981[(7)] = inst_31923__$1);

return statearr_31981;
})();
if(inst_31923__$1){
var statearr_31982_32014 = state_31957__$1;
(statearr_31982_32014[(1)] = (14));

} else {
var statearr_31983_32015 = state_31957__$1;
(statearr_31983_32015[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (9))){
var inst_31945 = (state_31957[(2)]);
var inst_31946 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_31957__$1 = (function (){var statearr_31984 = state_31957;
(statearr_31984[(15)] = inst_31945);

return statearr_31984;
})();
if(cljs.core.truth_(inst_31946)){
var statearr_31985_32016 = state_31957__$1;
(statearr_31985_32016[(1)] = (21));

} else {
var statearr_31986_32017 = state_31957__$1;
(statearr_31986_32017[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (5))){
var inst_31901 = cljs.core.async.close_BANG_.call(null,out);
var state_31957__$1 = state_31957;
var statearr_31987_32018 = state_31957__$1;
(statearr_31987_32018[(2)] = inst_31901);

(statearr_31987_32018[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (14))){
var inst_31923 = (state_31957[(7)]);
var inst_31925 = cljs.core.chunked_seq_QMARK_.call(null,inst_31923);
var state_31957__$1 = state_31957;
if(inst_31925){
var statearr_31988_32019 = state_31957__$1;
(statearr_31988_32019[(1)] = (17));

} else {
var statearr_31989_32020 = state_31957__$1;
(statearr_31989_32020[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (16))){
var inst_31941 = (state_31957[(2)]);
var state_31957__$1 = state_31957;
var statearr_31990_32021 = state_31957__$1;
(statearr_31990_32021[(2)] = inst_31941);

(statearr_31990_32021[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (10))){
var inst_31910 = (state_31957[(8)]);
var inst_31912 = (state_31957[(9)]);
var inst_31917 = cljs.core._nth.call(null,inst_31910,inst_31912);
var state_31957__$1 = state_31957;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31957__$1,(13),out,inst_31917);
} else {
if((state_val_31958 === (18))){
var inst_31923 = (state_31957[(7)]);
var inst_31932 = cljs.core.first.call(null,inst_31923);
var state_31957__$1 = state_31957;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31957__$1,(20),out,inst_31932);
} else {
if((state_val_31958 === (8))){
var inst_31912 = (state_31957[(9)]);
var inst_31911 = (state_31957[(11)]);
var inst_31914 = (inst_31912 < inst_31911);
var inst_31915 = inst_31914;
var state_31957__$1 = state_31957;
if(cljs.core.truth_(inst_31915)){
var statearr_31991_32022 = state_31957__$1;
(statearr_31991_32022[(1)] = (10));

} else {
var statearr_31992_32023 = state_31957__$1;
(statearr_31992_32023[(1)] = (11));

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
});})(c__20007__auto__))
;
return ((function (switch__19945__auto__,c__20007__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__19946__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__19946__auto____0 = (function (){
var statearr_31996 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31996[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__19946__auto__);

(statearr_31996[(1)] = (1));

return statearr_31996;
});
var cljs$core$async$mapcat_STAR__$_state_machine__19946__auto____1 = (function (state_31957){
while(true){
var ret_value__19947__auto__ = (function (){try{while(true){
var result__19948__auto__ = switch__19945__auto__.call(null,state_31957);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19948__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19948__auto__;
}
break;
}
}catch (e31997){if((e31997 instanceof Object)){
var ex__19949__auto__ = e31997;
var statearr_31998_32024 = state_31957;
(statearr_31998_32024[(5)] = ex__19949__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31957);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31997;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32025 = state_31957;
state_31957 = G__32025;
continue;
} else {
return ret_value__19947__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__19946__auto__ = function(state_31957){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__19946__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__19946__auto____1.call(this,state_31957);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__19946__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__19946__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__19946__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__19946__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__19946__auto__;
})()
;})(switch__19945__auto__,c__20007__auto__))
})();
var state__20009__auto__ = (function (){var statearr_31999 = f__20008__auto__.call(null);
(statearr_31999[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20007__auto__);

return statearr_31999;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20009__auto__);
});})(c__20007__auto__))
);

return c__20007__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__32027 = arguments.length;
switch (G__32027) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(){
var G__32030 = arguments.length;
switch (G__32030) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(){
var G__32033 = arguments.length;
switch (G__32033) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20007__auto___32083 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20007__auto___32083,out){
return (function (){
var f__20008__auto__ = (function (){var switch__19945__auto__ = ((function (c__20007__auto___32083,out){
return (function (state_32057){
var state_val_32058 = (state_32057[(1)]);
if((state_val_32058 === (7))){
var inst_32052 = (state_32057[(2)]);
var state_32057__$1 = state_32057;
var statearr_32059_32084 = state_32057__$1;
(statearr_32059_32084[(2)] = inst_32052);

(statearr_32059_32084[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32058 === (1))){
var inst_32034 = null;
var state_32057__$1 = (function (){var statearr_32060 = state_32057;
(statearr_32060[(7)] = inst_32034);

return statearr_32060;
})();
var statearr_32061_32085 = state_32057__$1;
(statearr_32061_32085[(2)] = null);

(statearr_32061_32085[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32058 === (4))){
var inst_32037 = (state_32057[(8)]);
var inst_32037__$1 = (state_32057[(2)]);
var inst_32038 = (inst_32037__$1 == null);
var inst_32039 = cljs.core.not.call(null,inst_32038);
var state_32057__$1 = (function (){var statearr_32062 = state_32057;
(statearr_32062[(8)] = inst_32037__$1);

return statearr_32062;
})();
if(inst_32039){
var statearr_32063_32086 = state_32057__$1;
(statearr_32063_32086[(1)] = (5));

} else {
var statearr_32064_32087 = state_32057__$1;
(statearr_32064_32087[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32058 === (6))){
var state_32057__$1 = state_32057;
var statearr_32065_32088 = state_32057__$1;
(statearr_32065_32088[(2)] = null);

(statearr_32065_32088[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32058 === (3))){
var inst_32054 = (state_32057[(2)]);
var inst_32055 = cljs.core.async.close_BANG_.call(null,out);
var state_32057__$1 = (function (){var statearr_32066 = state_32057;
(statearr_32066[(9)] = inst_32054);

return statearr_32066;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32057__$1,inst_32055);
} else {
if((state_val_32058 === (2))){
var state_32057__$1 = state_32057;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32057__$1,(4),ch);
} else {
if((state_val_32058 === (11))){
var inst_32037 = (state_32057[(8)]);
var inst_32046 = (state_32057[(2)]);
var inst_32034 = inst_32037;
var state_32057__$1 = (function (){var statearr_32067 = state_32057;
(statearr_32067[(7)] = inst_32034);

(statearr_32067[(10)] = inst_32046);

return statearr_32067;
})();
var statearr_32068_32089 = state_32057__$1;
(statearr_32068_32089[(2)] = null);

(statearr_32068_32089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32058 === (9))){
var inst_32037 = (state_32057[(8)]);
var state_32057__$1 = state_32057;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32057__$1,(11),out,inst_32037);
} else {
if((state_val_32058 === (5))){
var inst_32034 = (state_32057[(7)]);
var inst_32037 = (state_32057[(8)]);
var inst_32041 = cljs.core._EQ_.call(null,inst_32037,inst_32034);
var state_32057__$1 = state_32057;
if(inst_32041){
var statearr_32070_32090 = state_32057__$1;
(statearr_32070_32090[(1)] = (8));

} else {
var statearr_32071_32091 = state_32057__$1;
(statearr_32071_32091[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32058 === (10))){
var inst_32049 = (state_32057[(2)]);
var state_32057__$1 = state_32057;
var statearr_32072_32092 = state_32057__$1;
(statearr_32072_32092[(2)] = inst_32049);

(statearr_32072_32092[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32058 === (8))){
var inst_32034 = (state_32057[(7)]);
var tmp32069 = inst_32034;
var inst_32034__$1 = tmp32069;
var state_32057__$1 = (function (){var statearr_32073 = state_32057;
(statearr_32073[(7)] = inst_32034__$1);

return statearr_32073;
})();
var statearr_32074_32093 = state_32057__$1;
(statearr_32074_32093[(2)] = null);

(statearr_32074_32093[(1)] = (2));


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
});})(c__20007__auto___32083,out))
;
return ((function (switch__19945__auto__,c__20007__auto___32083,out){
return (function() {
var cljs$core$async$state_machine__19946__auto__ = null;
var cljs$core$async$state_machine__19946__auto____0 = (function (){
var statearr_32078 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32078[(0)] = cljs$core$async$state_machine__19946__auto__);

(statearr_32078[(1)] = (1));

return statearr_32078;
});
var cljs$core$async$state_machine__19946__auto____1 = (function (state_32057){
while(true){
var ret_value__19947__auto__ = (function (){try{while(true){
var result__19948__auto__ = switch__19945__auto__.call(null,state_32057);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19948__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19948__auto__;
}
break;
}
}catch (e32079){if((e32079 instanceof Object)){
var ex__19949__auto__ = e32079;
var statearr_32080_32094 = state_32057;
(statearr_32080_32094[(5)] = ex__19949__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32057);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32079;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32095 = state_32057;
state_32057 = G__32095;
continue;
} else {
return ret_value__19947__auto__;
}
break;
}
});
cljs$core$async$state_machine__19946__auto__ = function(state_32057){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19946__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19946__auto____1.call(this,state_32057);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19946__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19946__auto____0;
cljs$core$async$state_machine__19946__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19946__auto____1;
return cljs$core$async$state_machine__19946__auto__;
})()
;})(switch__19945__auto__,c__20007__auto___32083,out))
})();
var state__20009__auto__ = (function (){var statearr_32081 = f__20008__auto__.call(null);
(statearr_32081[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20007__auto___32083);

return statearr_32081;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20009__auto__);
});})(c__20007__auto___32083,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__32097 = arguments.length;
switch (G__32097) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20007__auto___32166 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20007__auto___32166,out){
return (function (){
var f__20008__auto__ = (function (){var switch__19945__auto__ = ((function (c__20007__auto___32166,out){
return (function (state_32135){
var state_val_32136 = (state_32135[(1)]);
if((state_val_32136 === (7))){
var inst_32131 = (state_32135[(2)]);
var state_32135__$1 = state_32135;
var statearr_32137_32167 = state_32135__$1;
(statearr_32137_32167[(2)] = inst_32131);

(statearr_32137_32167[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32136 === (1))){
var inst_32098 = (new Array(n));
var inst_32099 = inst_32098;
var inst_32100 = (0);
var state_32135__$1 = (function (){var statearr_32138 = state_32135;
(statearr_32138[(7)] = inst_32099);

(statearr_32138[(8)] = inst_32100);

return statearr_32138;
})();
var statearr_32139_32168 = state_32135__$1;
(statearr_32139_32168[(2)] = null);

(statearr_32139_32168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32136 === (4))){
var inst_32103 = (state_32135[(9)]);
var inst_32103__$1 = (state_32135[(2)]);
var inst_32104 = (inst_32103__$1 == null);
var inst_32105 = cljs.core.not.call(null,inst_32104);
var state_32135__$1 = (function (){var statearr_32140 = state_32135;
(statearr_32140[(9)] = inst_32103__$1);

return statearr_32140;
})();
if(inst_32105){
var statearr_32141_32169 = state_32135__$1;
(statearr_32141_32169[(1)] = (5));

} else {
var statearr_32142_32170 = state_32135__$1;
(statearr_32142_32170[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32136 === (15))){
var inst_32125 = (state_32135[(2)]);
var state_32135__$1 = state_32135;
var statearr_32143_32171 = state_32135__$1;
(statearr_32143_32171[(2)] = inst_32125);

(statearr_32143_32171[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32136 === (13))){
var state_32135__$1 = state_32135;
var statearr_32144_32172 = state_32135__$1;
(statearr_32144_32172[(2)] = null);

(statearr_32144_32172[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32136 === (6))){
var inst_32100 = (state_32135[(8)]);
var inst_32121 = (inst_32100 > (0));
var state_32135__$1 = state_32135;
if(cljs.core.truth_(inst_32121)){
var statearr_32145_32173 = state_32135__$1;
(statearr_32145_32173[(1)] = (12));

} else {
var statearr_32146_32174 = state_32135__$1;
(statearr_32146_32174[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32136 === (3))){
var inst_32133 = (state_32135[(2)]);
var state_32135__$1 = state_32135;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32135__$1,inst_32133);
} else {
if((state_val_32136 === (12))){
var inst_32099 = (state_32135[(7)]);
var inst_32123 = cljs.core.vec.call(null,inst_32099);
var state_32135__$1 = state_32135;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32135__$1,(15),out,inst_32123);
} else {
if((state_val_32136 === (2))){
var state_32135__$1 = state_32135;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32135__$1,(4),ch);
} else {
if((state_val_32136 === (11))){
var inst_32115 = (state_32135[(2)]);
var inst_32116 = (new Array(n));
var inst_32099 = inst_32116;
var inst_32100 = (0);
var state_32135__$1 = (function (){var statearr_32147 = state_32135;
(statearr_32147[(7)] = inst_32099);

(statearr_32147[(8)] = inst_32100);

(statearr_32147[(10)] = inst_32115);

return statearr_32147;
})();
var statearr_32148_32175 = state_32135__$1;
(statearr_32148_32175[(2)] = null);

(statearr_32148_32175[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32136 === (9))){
var inst_32099 = (state_32135[(7)]);
var inst_32113 = cljs.core.vec.call(null,inst_32099);
var state_32135__$1 = state_32135;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32135__$1,(11),out,inst_32113);
} else {
if((state_val_32136 === (5))){
var inst_32108 = (state_32135[(11)]);
var inst_32099 = (state_32135[(7)]);
var inst_32100 = (state_32135[(8)]);
var inst_32103 = (state_32135[(9)]);
var inst_32107 = (inst_32099[inst_32100] = inst_32103);
var inst_32108__$1 = (inst_32100 + (1));
var inst_32109 = (inst_32108__$1 < n);
var state_32135__$1 = (function (){var statearr_32149 = state_32135;
(statearr_32149[(11)] = inst_32108__$1);

(statearr_32149[(12)] = inst_32107);

return statearr_32149;
})();
if(cljs.core.truth_(inst_32109)){
var statearr_32150_32176 = state_32135__$1;
(statearr_32150_32176[(1)] = (8));

} else {
var statearr_32151_32177 = state_32135__$1;
(statearr_32151_32177[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32136 === (14))){
var inst_32128 = (state_32135[(2)]);
var inst_32129 = cljs.core.async.close_BANG_.call(null,out);
var state_32135__$1 = (function (){var statearr_32153 = state_32135;
(statearr_32153[(13)] = inst_32128);

return statearr_32153;
})();
var statearr_32154_32178 = state_32135__$1;
(statearr_32154_32178[(2)] = inst_32129);

(statearr_32154_32178[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32136 === (10))){
var inst_32119 = (state_32135[(2)]);
var state_32135__$1 = state_32135;
var statearr_32155_32179 = state_32135__$1;
(statearr_32155_32179[(2)] = inst_32119);

(statearr_32155_32179[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32136 === (8))){
var inst_32108 = (state_32135[(11)]);
var inst_32099 = (state_32135[(7)]);
var tmp32152 = inst_32099;
var inst_32099__$1 = tmp32152;
var inst_32100 = inst_32108;
var state_32135__$1 = (function (){var statearr_32156 = state_32135;
(statearr_32156[(7)] = inst_32099__$1);

(statearr_32156[(8)] = inst_32100);

return statearr_32156;
})();
var statearr_32157_32180 = state_32135__$1;
(statearr_32157_32180[(2)] = null);

(statearr_32157_32180[(1)] = (2));


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
});})(c__20007__auto___32166,out))
;
return ((function (switch__19945__auto__,c__20007__auto___32166,out){
return (function() {
var cljs$core$async$state_machine__19946__auto__ = null;
var cljs$core$async$state_machine__19946__auto____0 = (function (){
var statearr_32161 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32161[(0)] = cljs$core$async$state_machine__19946__auto__);

(statearr_32161[(1)] = (1));

return statearr_32161;
});
var cljs$core$async$state_machine__19946__auto____1 = (function (state_32135){
while(true){
var ret_value__19947__auto__ = (function (){try{while(true){
var result__19948__auto__ = switch__19945__auto__.call(null,state_32135);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19948__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19948__auto__;
}
break;
}
}catch (e32162){if((e32162 instanceof Object)){
var ex__19949__auto__ = e32162;
var statearr_32163_32181 = state_32135;
(statearr_32163_32181[(5)] = ex__19949__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32135);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32162;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32182 = state_32135;
state_32135 = G__32182;
continue;
} else {
return ret_value__19947__auto__;
}
break;
}
});
cljs$core$async$state_machine__19946__auto__ = function(state_32135){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19946__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19946__auto____1.call(this,state_32135);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19946__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19946__auto____0;
cljs$core$async$state_machine__19946__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19946__auto____1;
return cljs$core$async$state_machine__19946__auto__;
})()
;})(switch__19945__auto__,c__20007__auto___32166,out))
})();
var state__20009__auto__ = (function (){var statearr_32164 = f__20008__auto__.call(null);
(statearr_32164[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20007__auto___32166);

return statearr_32164;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20009__auto__);
});})(c__20007__auto___32166,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__32184 = arguments.length;
switch (G__32184) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20007__auto___32257 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20007__auto___32257,out){
return (function (){
var f__20008__auto__ = (function (){var switch__19945__auto__ = ((function (c__20007__auto___32257,out){
return (function (state_32226){
var state_val_32227 = (state_32226[(1)]);
if((state_val_32227 === (7))){
var inst_32222 = (state_32226[(2)]);
var state_32226__$1 = state_32226;
var statearr_32228_32258 = state_32226__$1;
(statearr_32228_32258[(2)] = inst_32222);

(statearr_32228_32258[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32227 === (1))){
var inst_32185 = [];
var inst_32186 = inst_32185;
var inst_32187 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32226__$1 = (function (){var statearr_32229 = state_32226;
(statearr_32229[(7)] = inst_32187);

(statearr_32229[(8)] = inst_32186);

return statearr_32229;
})();
var statearr_32230_32259 = state_32226__$1;
(statearr_32230_32259[(2)] = null);

(statearr_32230_32259[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32227 === (4))){
var inst_32190 = (state_32226[(9)]);
var inst_32190__$1 = (state_32226[(2)]);
var inst_32191 = (inst_32190__$1 == null);
var inst_32192 = cljs.core.not.call(null,inst_32191);
var state_32226__$1 = (function (){var statearr_32231 = state_32226;
(statearr_32231[(9)] = inst_32190__$1);

return statearr_32231;
})();
if(inst_32192){
var statearr_32232_32260 = state_32226__$1;
(statearr_32232_32260[(1)] = (5));

} else {
var statearr_32233_32261 = state_32226__$1;
(statearr_32233_32261[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32227 === (15))){
var inst_32216 = (state_32226[(2)]);
var state_32226__$1 = state_32226;
var statearr_32234_32262 = state_32226__$1;
(statearr_32234_32262[(2)] = inst_32216);

(statearr_32234_32262[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32227 === (13))){
var state_32226__$1 = state_32226;
var statearr_32235_32263 = state_32226__$1;
(statearr_32235_32263[(2)] = null);

(statearr_32235_32263[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32227 === (6))){
var inst_32186 = (state_32226[(8)]);
var inst_32211 = inst_32186.length;
var inst_32212 = (inst_32211 > (0));
var state_32226__$1 = state_32226;
if(cljs.core.truth_(inst_32212)){
var statearr_32236_32264 = state_32226__$1;
(statearr_32236_32264[(1)] = (12));

} else {
var statearr_32237_32265 = state_32226__$1;
(statearr_32237_32265[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32227 === (3))){
var inst_32224 = (state_32226[(2)]);
var state_32226__$1 = state_32226;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32226__$1,inst_32224);
} else {
if((state_val_32227 === (12))){
var inst_32186 = (state_32226[(8)]);
var inst_32214 = cljs.core.vec.call(null,inst_32186);
var state_32226__$1 = state_32226;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32226__$1,(15),out,inst_32214);
} else {
if((state_val_32227 === (2))){
var state_32226__$1 = state_32226;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32226__$1,(4),ch);
} else {
if((state_val_32227 === (11))){
var inst_32194 = (state_32226[(10)]);
var inst_32190 = (state_32226[(9)]);
var inst_32204 = (state_32226[(2)]);
var inst_32205 = [];
var inst_32206 = inst_32205.push(inst_32190);
var inst_32186 = inst_32205;
var inst_32187 = inst_32194;
var state_32226__$1 = (function (){var statearr_32238 = state_32226;
(statearr_32238[(11)] = inst_32204);

(statearr_32238[(7)] = inst_32187);

(statearr_32238[(12)] = inst_32206);

(statearr_32238[(8)] = inst_32186);

return statearr_32238;
})();
var statearr_32239_32266 = state_32226__$1;
(statearr_32239_32266[(2)] = null);

(statearr_32239_32266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32227 === (9))){
var inst_32186 = (state_32226[(8)]);
var inst_32202 = cljs.core.vec.call(null,inst_32186);
var state_32226__$1 = state_32226;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32226__$1,(11),out,inst_32202);
} else {
if((state_val_32227 === (5))){
var inst_32187 = (state_32226[(7)]);
var inst_32194 = (state_32226[(10)]);
var inst_32190 = (state_32226[(9)]);
var inst_32194__$1 = f.call(null,inst_32190);
var inst_32195 = cljs.core._EQ_.call(null,inst_32194__$1,inst_32187);
var inst_32196 = cljs.core.keyword_identical_QMARK_.call(null,inst_32187,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_32197 = (inst_32195) || (inst_32196);
var state_32226__$1 = (function (){var statearr_32240 = state_32226;
(statearr_32240[(10)] = inst_32194__$1);

return statearr_32240;
})();
if(cljs.core.truth_(inst_32197)){
var statearr_32241_32267 = state_32226__$1;
(statearr_32241_32267[(1)] = (8));

} else {
var statearr_32242_32268 = state_32226__$1;
(statearr_32242_32268[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32227 === (14))){
var inst_32219 = (state_32226[(2)]);
var inst_32220 = cljs.core.async.close_BANG_.call(null,out);
var state_32226__$1 = (function (){var statearr_32244 = state_32226;
(statearr_32244[(13)] = inst_32219);

return statearr_32244;
})();
var statearr_32245_32269 = state_32226__$1;
(statearr_32245_32269[(2)] = inst_32220);

(statearr_32245_32269[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32227 === (10))){
var inst_32209 = (state_32226[(2)]);
var state_32226__$1 = state_32226;
var statearr_32246_32270 = state_32226__$1;
(statearr_32246_32270[(2)] = inst_32209);

(statearr_32246_32270[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32227 === (8))){
var inst_32186 = (state_32226[(8)]);
var inst_32194 = (state_32226[(10)]);
var inst_32190 = (state_32226[(9)]);
var inst_32199 = inst_32186.push(inst_32190);
var tmp32243 = inst_32186;
var inst_32186__$1 = tmp32243;
var inst_32187 = inst_32194;
var state_32226__$1 = (function (){var statearr_32247 = state_32226;
(statearr_32247[(14)] = inst_32199);

(statearr_32247[(7)] = inst_32187);

(statearr_32247[(8)] = inst_32186__$1);

return statearr_32247;
})();
var statearr_32248_32271 = state_32226__$1;
(statearr_32248_32271[(2)] = null);

(statearr_32248_32271[(1)] = (2));


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
});})(c__20007__auto___32257,out))
;
return ((function (switch__19945__auto__,c__20007__auto___32257,out){
return (function() {
var cljs$core$async$state_machine__19946__auto__ = null;
var cljs$core$async$state_machine__19946__auto____0 = (function (){
var statearr_32252 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32252[(0)] = cljs$core$async$state_machine__19946__auto__);

(statearr_32252[(1)] = (1));

return statearr_32252;
});
var cljs$core$async$state_machine__19946__auto____1 = (function (state_32226){
while(true){
var ret_value__19947__auto__ = (function (){try{while(true){
var result__19948__auto__ = switch__19945__auto__.call(null,state_32226);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19948__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19948__auto__;
}
break;
}
}catch (e32253){if((e32253 instanceof Object)){
var ex__19949__auto__ = e32253;
var statearr_32254_32272 = state_32226;
(statearr_32254_32272[(5)] = ex__19949__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32226);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32253;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32273 = state_32226;
state_32226 = G__32273;
continue;
} else {
return ret_value__19947__auto__;
}
break;
}
});
cljs$core$async$state_machine__19946__auto__ = function(state_32226){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19946__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19946__auto____1.call(this,state_32226);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19946__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19946__auto____0;
cljs$core$async$state_machine__19946__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19946__auto____1;
return cljs$core$async$state_machine__19946__auto__;
})()
;})(switch__19945__auto__,c__20007__auto___32257,out))
})();
var state__20009__auto__ = (function (){var statearr_32255 = f__20008__auto__.call(null);
(statearr_32255[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20007__auto___32257);

return statearr_32255;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20009__auto__);
});})(c__20007__auto___32257,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map