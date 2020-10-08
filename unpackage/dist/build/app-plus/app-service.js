var __wxAppData = {};
var __wxRoute;
var __wxRouteBegin;
var __wxAppCode__ = {};
var global = {};
var __wxAppCurrentFile__;
if(typeof __WXML_GLOBAL__ !== 'undefined'){
  delete __WXML_GLOBAL__.ops_cached//remove ops_cached(v8 下会有 cache)
}
// var Component = Component || function() {};
// var definePlugin = definePlugin || function() {};
// var requirePlugin = requirePlugin || function() {};
// var Behavior = Behavior || function() {};
var $gwx;
  
/*v0.5vv_20190312_syb_scopedata*/global.__wcc_version__='v0.5vv_20190312_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[4],[[5],[[5],[[5],[1,'cu-bar fixed']],[[2,'?:'],[[2,'!='],[[7],[3,'bgImage']],[1,'']],[1,'none-bg text-white bg-img'],[1,'']]],[[7],[3,'bgColor']]]])
Z([[7],[3,'style']])
Z([[7],[3,'isBack']])
Z([3,'__e'])
Z([3,'action'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'BackPage']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'backText'])
Z([3,'content'])
Z([3,'right'])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'week'])
Z([3,'weeks'])
Z([[6],[[7],[3,'canlender']],[3,'weeks']])
Z(z[0])
Z([3,'index'])
Z([3,'day'])
Z([[7],[3,'weeks']])
Z(z[4])
Z([3,'__e'])
Z([[4],[[5],[[5],[[5],[[5],[[5],[[5],[[5],[[5],[1,'uni-calender__date']],[[2,'?:'],[[2,'||'],[[2,'!=='],[[6],[[7],[3,'canlender']],[3,'month']],[[6],[[7],[3,'day']],[3,'month']]],[[6],[[7],[3,'day']],[3,'disable']]],[1,'uni-calender__disable'],[1,'']]],[[2,'?:'],[[2,'&&'],[[2,'&&'],[[2,'||'],[[2,'||'],[[2,'&&'],[[2,'=='],[[6],[[7],[3,'day']],[3,'date']],[[6],[[7],[3,'canlender']],[3,'date']]],[[2,'!'],[[6],[[7],[3,'day']],[3,'checked']]]],[[6],[[7],[3,'day']],[3,'multipleBegin']]],[[6],[[7],[3,'day']],[3,'multipleEnd']]],[[2,'=='],[[6],[[7],[3,'canlender']],[3,'month']],[[6],[[7],[3,'day']],[3,'month']]]],[[2,'!'],[[6],[[7],[3,'day']],[3,'disable']]]],[1,'uni-calender__date-current'],[1,'']]],[[2,'?:'],[[7],[3,'lunar']],[1,'uni-calender__lunar'],[1,'']]],[[2,'?:'],[[2,'!'],[[6],[[7],[3,'day']],[3,'isDay']]],[1,'uni-calender__active'],[1,'']]],[[2,'?:'],[[6],[[7],[3,'day']],[3,'isDay']],[1,'uni-calender__is-day'],[1,'']]],[[2,'?:'],[[2,'||'],[[6],[[7],[3,'day']],[3,'multipleBegin']],[[6],[[7],[3,'day']],[3,'multipleEnd']]],[1,'uni-calender__multiple'],[1,'']]],[[2,'?:'],[[6],[[7],[3,'day']],[3,'checked']],[1,'uni-calender__multiple-box'],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'selectDays']],[[4],[[5],[[5],[[5],[[5],[[5],[[7],[3,'week']]],[[7],[3,'index']]],[[2,'==='],[[6],[[7],[3,'canlender']],[3,'month']],[[6],[[7],[3,'day']],[3,'month']]]],[1,'$0']],[1,'$1']]]],[[4],[[5],[[5],[[4],[[5],[[5],[[4],[[5],[[5],[[5],[1,'canlender.weeks']],[1,'']],[[7],[3,'week']]]]],[[4],[[5],[[5],[[5],[[5],[1,'']],[1,'']],[[7],[3,'index']]],[1,'disable']]]]]],[1,'canlender.lunar']]]]]]]]]]])
Z([3,'uni-calender__circle-box'])
Z([[7],[3,'lunar']])
Z([[6],[[7],[3,'day']],[3,'have']])
Z([[2,'&&'],[[6],[[7],[3,'day']],[3,'have']],[[2,'!'],[[7],[3,'lunar']]]])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'&&'],[[7],[3,'maskShow']],[[2,'!'],[[7],[3,'insert']]]])
Z([[2,'||'],[[7],[3,'maskShow']],[[7],[3,'insert']]])
Z([[4],[[5],[[5],[[5],[1,'uni-calendar__box']],[[2,'?:'],[[7],[3,'aniMaskShow']],[1,'ani-calendar-show'],[1,'']]],[[2,'?:'],[[7],[3,'insert']],[1,'uni-calendar__static'],[1,'']]]])
Z([[2,'!'],[[7],[3,'insert']]])
Z([3,'uni-calenda__content'])
Z([[7],[3,'isLunar']])
Z([3,'__l'])
Z([3,'__e'])
Z([[7],[3,'canlender']])
Z([[4],[[5],[[4],[[5],[[5],[1,'^selectDays']],[[4],[[5],[[4],[[5],[1,'selectDays']]]]]]]]])
Z(z[5])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([1,false])
Z([3,'__e'])
Z([3,'swiper'])
Z([[7],[3,'item_id']])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'goChange']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([1,200])
Z([3,'__l'])
Z([1,10000])
Z([1,1])
Z([[7],[3,'dayvalue']])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'bg-gradual-orange'])
Z([3,'__l'])
Z([3,'status_bar'])
Z([3,'1'])
Z([[4],[[5],[1,'content']]])
Z([3,'__e'])
Z([3,'content'])
Z([[4],[[5],[[4],[[5],[[5],[1,'touchstart']],[[4],[[5],[[4],[[5],[[5],[1,'hideDrawer']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[5])
Z([3,'msg-list'])
Z([[4],[[5],[[4],[[5],[[5],[1,'scrolltoupper']],[[4],[[5],[[4],[[5],[[5],[1,'loadHistory']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[7],[3,'scrollToView']])
Z([[7],[3,'scrollTop']])
Z([[7],[3,'scrollAnimation']])
Z([3,'true'])
Z([3,'50'])
Z([3,'index'])
Z([3,'row'])
Z([[7],[3,'msgList']])
Z(z[16])
Z([[2,'=='],[[6],[[7],[3,'row']],[3,'type']],[1,'user']])
Z([[2,'=='],[[6],[[6],[[6],[[7],[3,'row']],[3,'msg']],[3,'userinfo']],[3,'uid']],[[7],[3,'myuid']]])
Z([3,'left'])
Z([[2,'=='],[[6],[[6],[[7],[3,'row']],[3,'msg']],[3,'type']],[1,'text']])
Z([[2,'=='],[[6],[[6],[[7],[3,'row']],[3,'msg']],[3,'type']],[1,'img']])
Z([[2,'!='],[[6],[[6],[[6],[[7],[3,'row']],[3,'msg']],[3,'userinfo']],[3,'uid']],[[7],[3,'myuid']]])
Z([3,'right'])
Z(z[23])
Z(z[24])
Z([[4],[[5],[[5],[1,'popup-layer']],[[7],[3,'popupLayerClass']]]])
Z(z[16])
Z([3,'item'])
Z([[7],[3,'xuguanlist']])
Z(z[16])
Z([[6],[[7],[3,'isselecthabit']],[[6],[[7],[3,'item']],[3,'iconname']]])
Z(z[16])
Z(z[31])
Z(z[32])
Z(z[16])
Z([[2,'!'],[[6],[[7],[3,'isselecthabit']],[[6],[[7],[3,'item']],[3,'iconname']]]])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'bgall'])
Z([3,'bg-gradual-blue'])
Z([3,'__l'])
Z([3,'status_bar'])
Z([3,'1'])
Z([[4],[[5],[1,'content']]])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'chooselist']])
Z([3,'__e'])
Z([3,'flexicon'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'gotochartslist']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'chooselist']],[1,'']],[[7],[3,'index']]],[1,'iconname']]]]]]]]]]]]]]])
Z([[6],[[7],[3,'isselecthabit']],[[6],[[7],[3,'item']],[3,'iconname']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'bg-gradual-blue'])
Z([3,'__l'])
Z([3,'status_bar'])
Z([1,true])
Z([3,'1'])
Z([[4],[[5],[1,'content']]])
Z(z[1])
Z([1,false])
Z(z[3])
Z(z[7])
Z([[7],[3,'selected']])
Z([3,'2'])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'bg-gradual-blue'])
Z([3,'__l'])
Z([3,'status_bar'])
Z([1,true])
Z([3,'1'])
Z([[4],[[5],[1,'content']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'bg-gradual-blue'])
Z([3,'__l'])
Z([3,'status_bar'])
Z([1,true])
Z([3,'1'])
Z([[4],[[5],[1,'content']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'bg-gradual-blue'])
Z([3,'__l'])
Z([3,'status_bar'])
Z([1,true])
Z([3,'1'])
Z([[4],[[5],[1,'content']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
function gz$gwx_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx_14)return __WXML_GLOBAL__.ops_cached.$gwx_14
__WXML_GLOBAL__.ops_cached.$gwx_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_14);return __WXML_GLOBAL__.ops_cached.$gwx_14
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./colorui/components/cu-custom.wxml','./components/uni-calendar/uni-calendar-item.wxml','./components/uni-calendar/uni-calendar.wxml','./components/uni-number-box/uni-number-box.wxml','./pages/index/guide.wxml','./pages/index/index.wxml','./pages/tabBar/chat/chat.wxml','./pages/tabBar/habitList/habitList.wxml','./pages/tabBar/habitList/intochart1.wxml','./pages/tabBar/vip/about.wxml','./pages/tabBar/vip/addword.wxml','./pages/tabBar/vip/addwordinfo.wxml','./pages/tabBar/vip/partnerinfo.wxml','./pages/tabBar/vip/vip.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=_mz(z,'view',['class',0,'style',1],[],e,s,gg)
var xC=_v()
_(oB,xC)
if(_oz(z,2,e,s,gg)){xC.wxVkey=1
var oD=_mz(z,'view',['bindtap',3,'class',1,'data-event-opts',2],[],e,s,gg)
var fE=_n('slot')
_rz(z,fE,'name',6,e,s,gg)
_(oD,fE)
_(xC,oD)
}
var cF=_n('slot')
_rz(z,cF,'name',7,e,s,gg)
_(oB,cF)
var hG=_n('slot')
_rz(z,hG,'name',8,e,s,gg)
_(oB,hG)
xC.wxXCkey=1
_(r,oB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
var cI=_v()
_(r,cI)
var oJ=function(aL,lK,tM,gg){
var bO=_v()
_(tM,bO)
var oP=function(oR,xQ,fS,gg){
var hU=_mz(z,'view',['bindtap',8,'class',1,'data-event-opts',2],[],oR,xQ,gg)
var oV=_n('view')
_rz(z,oV,'class',11,oR,xQ,gg)
var cW=_v()
_(oV,cW)
if(_oz(z,12,oR,xQ,gg)){cW.wxVkey=1
}
var oX=_v()
_(oV,oX)
if(_oz(z,13,oR,xQ,gg)){oX.wxVkey=1
}
var lY=_v()
_(oV,lY)
if(_oz(z,14,oR,xQ,gg)){lY.wxVkey=1
}
cW.wxXCkey=1
oX.wxXCkey=1
lY.wxXCkey=1
_(hU,oV)
_(fS,hU)
return fS
}
bO.wxXCkey=2
_2z(z,6,oP,aL,lK,gg,bO,'day','index','index')
return tM
}
cI.wxXCkey=2
_2z(z,2,oJ,e,s,gg,cI,'weeks','week','week')
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
var t1=_n('view')
var e2=_v()
_(t1,e2)
if(_oz(z,0,e,s,gg)){e2.wxVkey=1
}
var b3=_v()
_(t1,b3)
if(_oz(z,1,e,s,gg)){b3.wxVkey=1
var o4=_n('view')
_rz(z,o4,'class',2,e,s,gg)
var x5=_v()
_(o4,x5)
if(_oz(z,3,e,s,gg)){x5.wxVkey=1
}
var o6=_n('view')
_rz(z,o6,'class',4,e,s,gg)
var f7=_v()
_(o6,f7)
if(_oz(z,5,e,s,gg)){f7.wxVkey=1
}
var c8=_mz(z,'uni-calendar-item',['bind:__l',6,'bind:selectDays',1,'canlender',2,'data-event-opts',3,'lunar',4,'vueId',5],[],e,s,gg)
_(o6,c8)
f7.wxXCkey=1
_(o4,o6)
x5.wxXCkey=1
_(b3,o4)
}
e2.wxXCkey=1
b3.wxXCkey=1
b3.wxXCkey=3
_(r,t1)
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
var cAB=_mz(z,'swiper',['autoplay',0,'bindchange',1,'class',1,'currentItemId',2,'data-event-opts',3,'duration',4],[],e,s,gg)
var oBB=_mz(z,'uni-number-box',['bind:__l',6,'max',1,'min',2,'value',3,'vueId',4],[],e,s,gg)
_(cAB,oBB)
_(r,cAB)
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
var tEB=_n('view')
var eFB=_mz(z,'cu-custom',['bgColor',0,'bind:__l',1,'class',1,'vueId',2,'vueSlots',3],[],e,s,gg)
_(tEB,eFB)
var bGB=_mz(z,'view',['bindtouchstart',5,'class',1,'data-event-opts',2],[],e,s,gg)
var oHB=_mz(z,'scroll-view',['bindscrolltoupper',8,'class',1,'data-event-opts',2,'scrollIntoView',3,'scrollTop',4,'scrollWithAnimation',5,'scrollY',6,'upperThreshold',7],[],e,s,gg)
var xIB=_v()
_(oHB,xIB)
var oJB=function(cLB,fKB,hMB,gg){
var cOB=_v()
_(hMB,cOB)
if(_oz(z,20,cLB,fKB,gg)){cOB.wxVkey=1
var oPB=_v()
_(cOB,oPB)
if(_oz(z,21,cLB,fKB,gg)){oPB.wxVkey=1
var aRB=_n('view')
_rz(z,aRB,'class',22,cLB,fKB,gg)
var tSB=_v()
_(aRB,tSB)
if(_oz(z,23,cLB,fKB,gg)){tSB.wxVkey=1
}
var eTB=_v()
_(aRB,eTB)
if(_oz(z,24,cLB,fKB,gg)){eTB.wxVkey=1
}
tSB.wxXCkey=1
eTB.wxXCkey=1
_(oPB,aRB)
}
var lQB=_v()
_(cOB,lQB)
if(_oz(z,25,cLB,fKB,gg)){lQB.wxVkey=1
var bUB=_n('view')
_rz(z,bUB,'class',26,cLB,fKB,gg)
var oVB=_v()
_(bUB,oVB)
if(_oz(z,27,cLB,fKB,gg)){oVB.wxVkey=1
}
var xWB=_v()
_(bUB,xWB)
if(_oz(z,28,cLB,fKB,gg)){xWB.wxVkey=1
}
oVB.wxXCkey=1
xWB.wxXCkey=1
_(lQB,bUB)
}
oPB.wxXCkey=1
lQB.wxXCkey=1
}
cOB.wxXCkey=1
return hMB
}
xIB.wxXCkey=2
_2z(z,18,oJB,e,s,gg,xIB,'row','index','index')
_(bGB,oHB)
_(tEB,bGB)
var oXB=_n('view')
_rz(z,oXB,'class',29,e,s,gg)
var fYB=_v()
_(oXB,fYB)
var cZB=function(o2B,h1B,c3B,gg){
var l5B=_v()
_(c3B,l5B)
if(_oz(z,34,o2B,h1B,gg)){l5B.wxVkey=1
}
l5B.wxXCkey=1
return c3B
}
fYB.wxXCkey=2
_2z(z,32,cZB,e,s,gg,fYB,'item','index','index')
var a6B=_v()
_(oXB,a6B)
var t7B=function(b9B,e8B,o0B,gg){
var oBC=_v()
_(o0B,oBC)
if(_oz(z,39,b9B,e8B,gg)){oBC.wxVkey=1
}
oBC.wxXCkey=1
return o0B
}
a6B.wxXCkey=2
_2z(z,37,t7B,e,s,gg,a6B,'item','index','index')
_(tEB,oXB)
_(r,tEB)
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
var cDC=_n('view')
_rz(z,cDC,'class',0,e,s,gg)
var hEC=_mz(z,'cu-custom',['bgColor',1,'bind:__l',1,'class',2,'vueId',3,'vueSlots',4],[],e,s,gg)
_(cDC,hEC)
var oFC=_v()
_(cDC,oFC)
var cGC=function(lIC,oHC,aJC,gg){
var eLC=_mz(z,'view',['bindtap',9,'class',1,'data-event-opts',2],[],lIC,oHC,gg)
var bMC=_v()
_(eLC,bMC)
if(_oz(z,12,lIC,oHC,gg)){bMC.wxVkey=1
}
bMC.wxXCkey=1
_(aJC,eLC)
return aJC
}
oFC.wxXCkey=2
_2z(z,8,cGC,e,s,gg,oFC,'item','index','')
_(r,cDC)
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var xOC=_n('view')
var oPC=_mz(z,'cu-custom',['bgColor',0,'bind:__l',1,'class',1,'isBack',2,'vueId',3,'vueSlots',4],[],e,s,gg)
_(xOC,oPC)
var fQC=_mz(z,'uni-calendar',['bind:__l',6,'disableBefore',1,'insert',2,'lunar',3,'selected',4,'vueId',5],[],e,s,gg)
_(xOC,fQC)
_(r,xOC)
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
var hSC=_mz(z,'cu-custom',['bgColor',0,'bind:__l',1,'class',1,'isBack',2,'vueId',3,'vueSlots',4],[],e,s,gg)
_(r,hSC)
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
var cUC=_mz(z,'cu-custom',['bgColor',0,'bind:__l',1,'class',1,'isBack',2,'vueId',3,'vueSlots',4],[],e,s,gg)
_(r,cUC)
return r
}
e_[x[10]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
return r
}
e_[x[11]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[12]]={}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
var aXC=_mz(z,'cu-custom',['bgColor',0,'bind:__l',1,'class',1,'isBack',2,'vueId',3,'vueSlots',4],[],e,s,gg)
_(r,aXC)
return r
}
e_[x[12]]={f:m12,j:[],i:[],ti:[],ic:[]}
d_[x[13]]={}
var m13=function(e,s,r,gg){
var z=gz$gwx_14()
return r
}
e_[x[13]]={f:m13,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
return root;
}
}
}



__wxAppCode__['app.json']={"pages":["pages/index/index","pages/index/guide","pages/tabBar/habitList/habitList","pages/tabBar/chat/chat","pages/tabBar/vip/vip","pages/tabBar/vip/partnerinfo","pages/tabBar/habitList/intochart1","pages/tabBar/vip/about","pages/tabBar/vip/addword","pages/tabBar/vip/addwordinfo"],"window":{"navigationStyle":"custom"},"tabBar":{"color":"#7A7E83","selectedColor":"#007AFF","borderStyle":"black","backgroundColor":"#FFFFFF","list":[{"pagePath":"pages/tabBar/habitList/habitList","iconPath":"static/xizi_img/phh.png","selectedIconPath":"static/xizi_img/phc.png","text":"习惯列表"},{"pagePath":"pages/tabBar/chat/chat","iconPath":"static/xizi_img/xxh.png","selectedIconPath":"static/xizi_img/xxc.png","text":"聊天打卡"},{"pagePath":"pages/tabBar/vip/vip","iconPath":"static/xizi_img/grzxh.png","selectedIconPath":"static/xizi_img/grzxc.png","text":"个人中心"}]},"networkTimeout":{"request":3000},"nvueCompiler":"weex","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"木各习惯","compilerVersion":"2.3.9","usingComponents":{"cu-custom":"/colorui/components/cu-custom"}};
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['colorui/components/cu-custom.json']={"usingComponents":{},"component":true};
__wxAppCode__['colorui/components/cu-custom.wxml']=$gwx('./colorui/components/cu-custom.wxml');

__wxAppCode__['components/uni-calendar/uni-calendar-item.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/uni-calendar/uni-calendar-item.wxml']=$gwx('./components/uni-calendar/uni-calendar-item.wxml');

__wxAppCode__['components/uni-calendar/uni-calendar.json']={"usingComponents":{"uni-calendar-item":"/components/uni-calendar/uni-calendar-item"},"component":true};
__wxAppCode__['components/uni-calendar/uni-calendar.wxml']=$gwx('./components/uni-calendar/uni-calendar.wxml');

__wxAppCode__['components/uni-number-box/uni-number-box.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/uni-number-box/uni-number-box.wxml']=$gwx('./components/uni-number-box/uni-number-box.wxml');

__wxAppCode__['pages/index/guide.json']={"usingComponents":{"uni-number-box":"/components/uni-number-box/uni-number-box"}};
__wxAppCode__['pages/index/guide.wxml']=$gwx('./pages/index/guide.wxml');

__wxAppCode__['pages/index/index.json']={"usingComponents":{}};
__wxAppCode__['pages/index/index.wxml']=$gwx('./pages/index/index.wxml');

__wxAppCode__['pages/tabBar/chat/chat.json']={"usingComponents":{"cu-custom":"/colorui/components/cu-custom"}};
__wxAppCode__['pages/tabBar/chat/chat.wxml']=$gwx('./pages/tabBar/chat/chat.wxml');

__wxAppCode__['pages/tabBar/habitList/habitList.json']={"usingComponents":{"cu-custom":"/colorui/components/cu-custom"}};
__wxAppCode__['pages/tabBar/habitList/habitList.wxml']=$gwx('./pages/tabBar/habitList/habitList.wxml');

__wxAppCode__['pages/tabBar/habitList/intochart1.json']={"usingComponents":{"cu-custom":"/colorui/components/cu-custom","uni-calendar":"/components/uni-calendar/uni-calendar"}};
__wxAppCode__['pages/tabBar/habitList/intochart1.wxml']=$gwx('./pages/tabBar/habitList/intochart1.wxml');

__wxAppCode__['pages/tabBar/vip/about.json']={"usingComponents":{"cu-custom":"/colorui/components/cu-custom"}};
__wxAppCode__['pages/tabBar/vip/about.wxml']=$gwx('./pages/tabBar/vip/about.wxml');

__wxAppCode__['pages/tabBar/vip/addword.json']={"usingComponents":{"cu-custom":"/colorui/components/cu-custom"}};
__wxAppCode__['pages/tabBar/vip/addword.wxml']=$gwx('./pages/tabBar/vip/addword.wxml');

__wxAppCode__['pages/tabBar/vip/addwordinfo.json']={"usingComponents":{}};
__wxAppCode__['pages/tabBar/vip/addwordinfo.wxml']=$gwx('./pages/tabBar/vip/addwordinfo.wxml');

__wxAppCode__['pages/tabBar/vip/partnerinfo.json']={"usingComponents":{"cu-custom":"/colorui/components/cu-custom"}};
__wxAppCode__['pages/tabBar/vip/partnerinfo.wxml']=$gwx('./pages/tabBar/vip/partnerinfo.wxml');

__wxAppCode__['pages/tabBar/vip/vip.json']={"usingComponents":{}};
__wxAppCode__['pages/tabBar/vip/vip.wxml']=$gwx('./pages/tabBar/vip/vip.wxml');



define('common/main.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"0807":function(t,e,n){"use strict";n.r(e);var o=n("331e");for(var u in o)"default"!==u&&function(t){n.d(e,t,function(){return o[t]})}(u);n("e61a");var r,a,c=n("2877"),f=Object(c["a"])(o["default"],r,a,!1,null,null,null);e["default"]=f.exports},"1dca":function(t,e,n){},"331e":function(t,e,n){"use strict";n.r(e);var o=n("c6b6"),u=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);e["default"]=u.a},"905d":function(t,e,n){"use strict";(function(t){n("9805"),n("921b");var e=r(n("66fd")),o=r(n("0807")),u=r(n("fcfe"));function r(t){return t&&t.__esModule?t:{default:t}}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),o.forEach(function(e){c(t,e,n[e])})}return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var f=function(){return n.e("colorui/components/cu-custom").then(n.bind(null,"ab84"))};e.default.component("cu-custom",f),e.default.config.productionTip=!1,e.default.prototype.$store=u.default,o.default.mpType="app";var l=new e.default(a({store:u.default},o.default));t(l).$mount()}).call(this,n("6e42")["createApp"])},c6b6:function(t,e,n){"use strict";(function(t,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=r(n("66fd"));function r(t){return t&&t.__esModule?t:{default:t}}var a={onLaunch:function(){t.getSystemInfo({success:function(t){u.default.prototype.StatusBar=t.statusBarHeight,"android"==t.platform?u.default.prototype.CustomBar=t.statusBarHeight+50:u.default.prototype.CustomBar=t.statusBarHeight+45}})},onShow:function(){console.log(o("App Show"," at App.vue:31"))},onHide:function(){console.log(o("App Hide"," at App.vue:34"))}};e.default=a}).call(this,n("6e42")["default"],n("0de9")["default"])},e61a:function(t,e,n){"use strict";var o=n("1dca"),u=n.n(o);u.a}},[["905d","common/runtime","common/vendor"]]]);
});
define('common/runtime.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(function (e) {
  function n(n) {
    for (var r, o, i = n[0], c = n[1], l = n[2], s = 0, p = []; s < i.length; s++) {
      o = i[s], u[o] && p.push(u[o][0]), u[o] = 0;
    }

    for (r in c) {
      Object.prototype.hasOwnProperty.call(c, r) && (e[r] = c[r]);
    }

    f && f(n);

    while (p.length) {
      p.shift()();
    }

    return a.push.apply(a, l || []), t();
  }

  function t() {
    for (var e, n = 0; n < a.length; n++) {
      for (var t = a[n], r = !0, o = 1; o < t.length; o++) {
        var i = t[o];
        0 !== u[i] && (r = !1);
      }

      r && (a.splice(n--, 1), e = c(c.s = t[0]));
    }

    return e;
  }

  var r = {},
      o = {
    "common/runtime": 0
  },
      u = {
    "common/runtime": 0
  },
      a = [];

  function i(e) {
    return c.p + "" + e + ".js";
  }

  function c(n) {
    if (r[n]) return r[n].exports;
    var t = r[n] = {
      i: n,
      l: !1,
      exports: {}
    };
    return e[n].call(t.exports, t, t.exports, c), t.l = !0, t.exports;
  }

  c.e = function (e) {
    var n = [],
        t = {
      "components/uni-number-box/uni-number-box": 1,
      "components/uni-calendar/uni-calendar": 1,
      "components/uni-calendar/uni-calendar-item": 1
    };
    o[e] ? n.push(o[e]) : 0 !== o[e] && t[e] && n.push(o[e] = new Promise(function (n, t) {
      for (var r = ({
        "colorui/components/cu-custom": "colorui/components/cu-custom",
        "components/uni-number-box/uni-number-box": "components/uni-number-box/uni-number-box",
        "components/uni-calendar/uni-calendar": "components/uni-calendar/uni-calendar",
        "components/uni-calendar/uni-calendar-item": "components/uni-calendar/uni-calendar-item"
      }[e] || e) + ".wxss", u = c.p + r, a = document.getElementsByTagName("link"), i = 0; i < a.length; i++) {
        var l = a[i],
            s = l.getAttribute("data-href") || l.getAttribute("href");
        if ("stylesheet" === l.rel && (s === r || s === u)) return n();
      }

      var p = document.getElementsByTagName("style");

      for (i = 0; i < p.length; i++) {
        l = p[i], s = l.getAttribute("data-href");
        if (s === r || s === u) return n();
      }

      var f = document.createElement("link");
      f.rel = "stylesheet", f.type = "text/css", f.onload = n, f.onerror = function (n) {
        var r = n && n.target && n.target.src || u,
            a = new Error("Loading CSS chunk " + e + " failed.\n(" + r + ")");
        a.request = r, delete o[e], f.parentNode.removeChild(f), t(a);
      }, f.href = u;
      var m = document.getElementsByTagName("head")[0];
      m.appendChild(f);
    }).then(function () {
      o[e] = 0;
    }));
    var r = u[e];
    if (0 !== r) if (r) n.push(r[2]);else {
      var a = new Promise(function (n, t) {
        r = u[e] = [n, t];
      });
      n.push(r[2] = a);
      var l,
          s = document.createElement("script");
      s.charset = "utf-8", s.timeout = 120, c.nc && s.setAttribute("nonce", c.nc), s.src = i(e), l = function l(n) {
        s.onerror = s.onload = null, clearTimeout(p);
        var t = u[e];

        if (0 !== t) {
          if (t) {
            var r = n && ("load" === n.type ? "missing" : n.type),
                o = n && n.target && n.target.src,
                a = new Error("Loading chunk " + e + " failed.\n(" + r + ": " + o + ")");
            a.type = r, a.request = o, t[1](a);
          }

          u[e] = void 0;
        }
      };
      var p = setTimeout(function () {
        l({
          type: "timeout",
          target: s
        });
      }, 12e4);
      s.onerror = s.onload = l, document.head.appendChild(s);
    }
    return Promise.all(n);
  }, c.m = e, c.c = r, c.d = function (e, n, t) {
    c.o(e, n) || Object.defineProperty(e, n, {
      enumerable: !0,
      get: t
    });
  }, c.r = function (e) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, c.t = function (e, n) {
    if (1 & n && (e = c(e)), 8 & n) return e;
    if (4 & n && "object" === typeof e && e && e.__esModule) return e;
    var t = Object.create(null);
    if (c.r(t), Object.defineProperty(t, "default", {
      enumerable: !0,
      value: e
    }), 2 & n && "string" != typeof e) for (var r in e) {
      c.d(t, r, function (n) {
        return e[n];
      }.bind(null, r));
    }
    return t;
  }, c.n = function (e) {
    var n = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return c.d(n, "a", n), n;
  }, c.o = function (e, n) {
    return Object.prototype.hasOwnProperty.call(e, n);
  }, c.p = "/", c.oe = function (e) {
    throw console.error(e), e;
  };
  var l = global["webpackJsonp"] = global["webpackJsonp"] || [],
      s = l.push.bind(l);
  l.push = n, l = l.slice();

  for (var p = 0; p < l.length; p++) {
    n(l[p]);
  }

  var f = s;
  t();
})([]);
});
define('common/vendor.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/vendor"],{"0de9":function(t,e,n){"use strict";function i(t){var e=Object.prototype.toString.call(t);return e.substring(8,e.length-1)}function r(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var r=e.map(function(t){var e=Object.prototype.toString.call(t);if("[object object]"===e.toLowerCase())try{t="---BEGIN:JSON---"+JSON.stringify(t)+"---END:JSON---"}catch(r){t="[object object]"}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var n=i(t).toUpperCase();t="NUMBER"===n||"BOOLEAN"===n?"---BEGIN:"+n+"---"+t+"---END:"+n+"---":String(t)}return t}),a="";if(r.length>1){var o=r.pop();a=r.join("---COMMA---"),0===o.indexOf(" at ")?a+=o:a+="---COMMA---"+o}else a=r[0];return a}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r},2877:function(t,e,n){"use strict";function i(t,e,n,i,r,a,o,s){var c,l="function"===typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=n,l._compiled=!0),i&&(l.functional=!0),a&&(l._scopeId="data-v-"+a),o?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},l._ssrRegister=c):r&&(c=s?function(){r.call(this,this.$root.$options.shadowRoot)}:r),c)if(l.functional){l._injectStyles=c;var u=l.render;l.render=function(t,e){return c.call(e),u(t,e)}}else{var f=l.beforeCreate;l.beforeCreate=f?[].concat(f,c):[c]}return{exports:t,options:l}}n.d(e,"a",function(){return i})},"2f62":function(t,e,n){"use strict";n.r(e),n.d(e,"Store",function(){return d}),n.d(e,"install",function(){return D}),n.d(e,"mapState",function(){return O}),n.d(e,"mapMutations",function(){return M}),n.d(e,"mapGetters",function(){return $}),n.d(e,"mapActions",function(){return C}),n.d(e,"createNamespacedHelpers",function(){return R});
/**
 * vuex v3.0.1
 * (c) 2017 Evan You
 * @license MIT
 */
var i=function(t){var e=Number(t.version.split(".")[0]);if(e>=2)t.mixin({beforeCreate:i});else{var n=t.prototype._init;t.prototype._init=function(t){void 0===t&&(t={}),t.init=t.init?[i].concat(t.init):i,n.call(this,t)}}function i(){var t=this.$options;t.store?this.$store="function"===typeof t.store?t.store():t.store:t.parent&&t.parent.$store&&(this.$store=t.parent.$store)}},r="undefined"!==typeof window&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function a(t){r&&(t._devtoolHook=r,r.emit("vuex:init",t),r.on("vuex:travel-to-state",function(e){t.replaceState(e)}),t.subscribe(function(t,e){r.emit("vuex:mutation",t,e)}))}function o(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function s(t){return null!==t&&"object"===typeof t}function c(t){return t&&"function"===typeof t.then}var l=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=("function"===typeof n?n():n)||{}},u={namespaced:{configurable:!0}};u.namespaced.get=function(){return!!this._rawModule.namespaced},l.prototype.addChild=function(t,e){this._children[t]=e},l.prototype.removeChild=function(t){delete this._children[t]},l.prototype.getChild=function(t){return this._children[t]},l.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},l.prototype.forEachChild=function(t){o(this._children,t)},l.prototype.forEachGetter=function(t){this._rawModule.getters&&o(this._rawModule.getters,t)},l.prototype.forEachAction=function(t){this._rawModule.actions&&o(this._rawModule.actions,t)},l.prototype.forEachMutation=function(t){this._rawModule.mutations&&o(this._rawModule.mutations,t)},Object.defineProperties(l.prototype,u);var f=function(t){this.register([],t,!1)};function h(t,e,n){if(e.update(n),n.modules)for(var i in n.modules){if(!e.getChild(i))return void 0;h(t.concat(i),e.getChild(i),n.modules[i])}}f.prototype.get=function(t){return t.reduce(function(t,e){return t.getChild(e)},this.root)},f.prototype.getNamespace=function(t){var e=this.root;return t.reduce(function(t,n){return e=e.getChild(n),t+(e.namespaced?n+"/":"")},"")},f.prototype.update=function(t){h([],this.root,t)},f.prototype.register=function(t,e,n){var i=this;void 0===n&&(n=!0);var r=new l(e,n);if(0===t.length)this.root=r;else{var a=this.get(t.slice(0,-1));a.addChild(t[t.length-1],r)}e.modules&&o(e.modules,function(e,r){i.register(t.concat(r),e,n)})},f.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];e.getChild(n).runtime&&e.removeChild(n)};var p;var d=function(t){var e=this;void 0===t&&(t={}),!p&&"undefined"!==typeof window&&window.Vue&&D(window.Vue);var n=t.plugins;void 0===n&&(n=[]);var i=t.strict;void 0===i&&(i=!1);var r=t.state;void 0===r&&(r={}),"function"===typeof r&&(r=r()||{}),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new f(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new p;var o=this,s=this,c=s.dispatch,l=s.commit;this.dispatch=function(t,e){return c.call(o,t,e)},this.commit=function(t,e,n){return l.call(o,t,e,n)},this.strict=i,x(this,r,[],this._modules.root),b(this,r),n.forEach(function(t){return t(e)}),p.config.devtools&&a(this)},v={state:{configurable:!0}};function g(t,e){return e.indexOf(t)<0&&e.push(t),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function y(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;x(t,n,[],t._modules.root,!0),b(t,n,e)}function b(t,e,n){var i=t._vm;t.getters={};var r=t._wrappedGetters,a={};o(r,function(e,n){a[n]=function(){return e(t)},Object.defineProperty(t.getters,n,{get:function(){return t._vm[n]},enumerable:!0})});var s=p.config.silent;p.config.silent=!0,t._vm=new p({data:{$$state:e},computed:a}),p.config.silent=s,t.strict&&T(t),i&&(n&&t._withCommit(function(){i._data.$$state=null}),p.nextTick(function(){return i.$destroy()}))}function x(t,e,n,i,r){var a=!n.length,o=t._modules.getNamespace(n);if(i.namespaced&&(t._modulesNamespaceMap[o]=i),!a&&!r){var s=P(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit(function(){p.set(s,c,i.state)})}var l=i.context=m(t,o,n);i.forEachMutation(function(e,n){var i=o+n;S(t,i,e,l)}),i.forEachAction(function(e,n){var i=e.root?n:o+n,r=e.handler||e;w(t,i,r,l)}),i.forEachGetter(function(e,n){var i=o+n;A(t,i,e,l)}),i.forEachChild(function(i,a){x(t,e,n.concat(a),i,r)})}function m(t,e,n){var i=""===e,r={dispatch:i?t.dispatch:function(n,i,r){var a=k(n,i,r),o=a.payload,s=a.options,c=a.type;return s&&s.root||(c=e+c),t.dispatch(c,o)},commit:i?t.commit:function(n,i,r){var a=k(n,i,r),o=a.payload,s=a.options,c=a.type;s&&s.root||(c=e+c),t.commit(c,o,s)}};return Object.defineProperties(r,{getters:{get:i?function(){return t.getters}:function(){return _(t,e)}},state:{get:function(){return P(t.state,n)}}}),r}function _(t,e){var n={},i=e.length;return Object.keys(t.getters).forEach(function(r){if(r.slice(0,i)===e){var a=r.slice(i);Object.defineProperty(n,a,{get:function(){return t.getters[r]},enumerable:!0})}}),n}function S(t,e,n,i){var r=t._mutations[e]||(t._mutations[e]=[]);r.push(function(e){n.call(t,i.state,e)})}function w(t,e,n,i){var r=t._actions[e]||(t._actions[e]=[]);r.push(function(e,r){var a=n.call(t,{dispatch:i.dispatch,commit:i.commit,getters:i.getters,state:i.state,rootGetters:t.getters,rootState:t.state},e,r);return c(a)||(a=Promise.resolve(a)),t._devtoolHook?a.catch(function(e){throw t._devtoolHook.emit("vuex:error",e),e}):a})}function A(t,e,n,i){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(t){return n(i.state,i.getters,t.state,t.getters)})}function T(t){t._vm.$watch(function(){return this._data.$$state},function(){0},{deep:!0,sync:!0})}function P(t,e){return e.length?e.reduce(function(t,e){return t[e]},t):t}function k(t,e,n){return s(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}function D(t){p&&t===p||(p=t,i(p))}v.state.get=function(){return this._vm._data.$$state},v.state.set=function(t){0},d.prototype.commit=function(t,e,n){var i=this,r=k(t,e,n),a=r.type,o=r.payload,s=(r.options,{type:a,payload:o}),c=this._mutations[a];c&&(this._withCommit(function(){c.forEach(function(t){t(o)})}),this._subscribers.forEach(function(t){return t(s,i.state)}))},d.prototype.dispatch=function(t,e){var n=this,i=k(t,e),r=i.type,a=i.payload,o={type:r,payload:a},s=this._actions[r];if(s)return this._actionSubscribers.forEach(function(t){return t(o,n.state)}),s.length>1?Promise.all(s.map(function(t){return t(a)})):s[0](a)},d.prototype.subscribe=function(t){return g(t,this._subscribers)},d.prototype.subscribeAction=function(t){return g(t,this._actionSubscribers)},d.prototype.watch=function(t,e,n){var i=this;return this._watcherVM.$watch(function(){return t(i.state,i.getters)},e,n)},d.prototype.replaceState=function(t){var e=this;this._withCommit(function(){e._vm._data.$$state=t})},d.prototype.registerModule=function(t,e,n){void 0===n&&(n={}),"string"===typeof t&&(t=[t]),this._modules.register(t,e),x(this,this.state,t,this._modules.get(t),n.preserveState),b(this,this.state)},d.prototype.unregisterModule=function(t){var e=this;"string"===typeof t&&(t=[t]),this._modules.unregister(t),this._withCommit(function(){var n=P(e.state,t.slice(0,-1));p.delete(n,t[t.length-1])}),y(this)},d.prototype.hotUpdate=function(t){this._modules.update(t),y(this,!0)},d.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(d.prototype,v);var O=F(function(t,e){var n={};return L(e).forEach(function(e){var i=e.key,r=e.val;n[i]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var i=j(this.$store,"mapState",t);if(!i)return;e=i.context.state,n=i.context.getters}return"function"===typeof r?r.call(this,e,n):e[r]},n[i].vuex=!0}),n}),M=F(function(t,e){var n={};return L(e).forEach(function(e){var i=e.key,r=e.val;n[i]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var i=this.$store.commit;if(t){var a=j(this.$store,"mapMutations",t);if(!a)return;i=a.context.commit}return"function"===typeof r?r.apply(this,[i].concat(e)):i.apply(this.$store,[r].concat(e))}}),n}),$=F(function(t,e){var n={};return L(e).forEach(function(e){var i=e.key,r=e.val;r=t+r,n[i]=function(){if(!t||j(this.$store,"mapGetters",t))return this.$store.getters[r]},n[i].vuex=!0}),n}),C=F(function(t,e){var n={};return L(e).forEach(function(e){var i=e.key,r=e.val;n[i]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var i=this.$store.dispatch;if(t){var a=j(this.$store,"mapActions",t);if(!a)return;i=a.context.dispatch}return"function"===typeof r?r.apply(this,[i].concat(e)):i.apply(this.$store,[r].concat(e))}}),n}),R=function(t){return{mapState:O.bind(null,t),mapGetters:$.bind(null,t),mapMutations:M.bind(null,t),mapActions:C.bind(null,t)}};function L(t){return Array.isArray(t)?t.map(function(t){return{key:t,val:t}}):Object.keys(t).map(function(e){return{key:e,val:t[e]}})}function F(t){return function(e,n){return"string"!==typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function j(t,e,n){var i=t._modulesNamespaceMap[n];return i}var I={Store:d,install:D,version:"3.0.1",mapState:O,mapMutations:M,mapGetters:$,mapActions:C,createNamespacedHelpers:R};e["default"]=I},"5c1e":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={pages:{"pages/index/index":{},"pages/index/guide":{},"pages/tabBar/habitList/habitList":{},"pages/tabBar/chat/chat":{},"pages/tabBar/vip/vip":{},"pages/tabBar/vip/partnerinfo":{},"pages/tabBar/habitList/intochart1":{},"pages/tabBar/vip/about":{},"pages/tabBar/vip/addword":{},"pages/tabBar/vip/addwordinfo":{}},globalStyle:{navigationStyle:"custom"}};e.default=i},"66fd":function(t,e,n){"use strict";n.r(e),function(t){
/*!
 * Vue.js v2.6.10
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
var n=Object.freeze({});function i(t){return void 0===t||null===t}function r(t){return void 0!==t&&null!==t}function a(t){return!0===t}function o(t){return!1===t}function s(t){return"string"===typeof t||"number"===typeof t||"symbol"===typeof t||"boolean"===typeof t}function c(t){return null!==t&&"object"===typeof t}var l=Object.prototype.toString;function u(t){return"[object Object]"===l.call(t)}function f(t){return"[object RegExp]"===l.call(t)}function h(t){var e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}function p(t){return r(t)&&"function"===typeof t.then&&"function"===typeof t.catch}function d(t){return null==t?"":Array.isArray(t)||u(t)&&t.toString===l?JSON.stringify(t,null,2):String(t)}function v(t){var e=parseFloat(t);return isNaN(e)?t:e}function g(t,e){for(var n=Object.create(null),i=t.split(","),r=0;r<i.length;r++)n[i[r]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}g("slot,component",!0);var y=g("key,ref,slot,slot-scope,is");function b(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}var x=Object.prototype.hasOwnProperty;function m(t,e){return x.call(t,e)}function _(t){var e=Object.create(null);return function(n){var i=e[n];return i||(e[n]=t(n))}}var S=/-(\w)/g,w=_(function(t){return t.replace(S,function(t,e){return e?e.toUpperCase():""})}),A=_(function(t){return t.charAt(0).toUpperCase()+t.slice(1)}),T=/\B([A-Z])/g,P=_(function(t){return t.replace(T,"-$1").toLowerCase()});function k(t,e){function n(n){var i=arguments.length;return i?i>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function D(t,e){return t.bind(e)}var O=Function.prototype.bind?D:k;function M(t,e){e=e||0;var n=t.length-e,i=new Array(n);while(n--)i[n]=t[n+e];return i}function $(t,e){for(var n in e)t[n]=e[n];return t}function C(t){for(var e={},n=0;n<t.length;n++)t[n]&&$(e,t[n]);return e}function R(t,e,n){}var L=function(t,e,n){return!1},F=function(t){return t};function j(t,e){if(t===e)return!0;var n=c(t),i=c(e);if(!n||!i)return!n&&!i&&String(t)===String(e);try{var r=Array.isArray(t),a=Array.isArray(e);if(r&&a)return t.length===e.length&&t.every(function(t,n){return j(t,e[n])});if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(r||a)return!1;var o=Object.keys(t),s=Object.keys(e);return o.length===s.length&&o.every(function(n){return j(t[n],e[n])})}catch(l){return!1}}function I(t,e){for(var n=0;n<t.length;n++)if(j(t[n],e))return n;return-1}function E(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}var z=["component","directive","filter"],N=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],B={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:L,isReservedAttr:L,isUnknownElement:L,getTagNamespace:R,parsePlatformTagName:F,mustUseProp:L,async:!0,_lifecycleHooks:N},W=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function U(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function H(t,e,n,i){Object.defineProperty(t,e,{value:n,enumerable:!!i,writable:!0,configurable:!0})}var V=new RegExp("[^"+W.source+".$_\\d]");function q(t){if(!V.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}var G,X="__proto__"in{},J="undefined"!==typeof window,Y="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,K=Y&&WXEnvironment.platform.toLowerCase(),Z=J&&window.navigator.userAgent.toLowerCase(),Q=Z&&/msie|trident/.test(Z),tt=(Z&&Z.indexOf("msie 9.0"),Z&&Z.indexOf("edge/")>0),et=(Z&&Z.indexOf("android"),Z&&/iphone|ipad|ipod|ios/.test(Z)||"ios"===K),nt=(Z&&/chrome\/\d+/.test(Z),Z&&/phantomjs/.test(Z),Z&&Z.match(/firefox\/(\d+)/),{}.watch);if(J)try{var it={};Object.defineProperty(it,"passive",{get:function(){}}),window.addEventListener("test-passive",null,it)}catch(er){}var rt=function(){return void 0===G&&(G=!J&&!Y&&"undefined"!==typeof t&&(t["process"]&&"server"===t["process"].env.VUE_ENV)),G},at=J&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function ot(t){return"function"===typeof t&&/native code/.test(t.toString())}var st,ct="undefined"!==typeof Symbol&&ot(Symbol)&&"undefined"!==typeof Reflect&&ot(Reflect.ownKeys);st="undefined"!==typeof Set&&ot(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var lt=R,ut=0,ft=function(){this.id=ut++,this.subs=[]};function ht(t){ft.SharedObject.targetStack.push(t),ft.SharedObject.target=t}function pt(){ft.SharedObject.targetStack.pop(),ft.SharedObject.target=ft.SharedObject.targetStack[ft.SharedObject.targetStack.length-1]}ft.prototype.addSub=function(t){this.subs.push(t)},ft.prototype.removeSub=function(t){b(this.subs,t)},ft.prototype.depend=function(){ft.SharedObject.target&&ft.SharedObject.target.addDep(this)},ft.prototype.notify=function(){var t=this.subs.slice();for(var e=0,n=t.length;e<n;e++)t[e].update()},ft.SharedObject="undefined"!==typeof SharedObject?SharedObject:{},ft.SharedObject.target=null,ft.SharedObject.targetStack=[];var dt=function(t,e,n,i,r,a,o,s){this.tag=t,this.data=e,this.children=n,this.text=i,this.elm=r,this.ns=void 0,this.context=a,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=e&&e.key,this.componentOptions=o,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=s,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},vt={child:{configurable:!0}};vt.child.get=function(){return this.componentInstance},Object.defineProperties(dt.prototype,vt);var gt=function(t){void 0===t&&(t="");var e=new dt;return e.text=t,e.isComment=!0,e};function yt(t){return new dt(void 0,void 0,void 0,String(t))}function bt(t){var e=new dt(t.tag,t.data,t.children&&t.children.slice(),t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.fnContext=t.fnContext,e.fnOptions=t.fnOptions,e.fnScopeId=t.fnScopeId,e.asyncMeta=t.asyncMeta,e.isCloned=!0,e}var xt=Array.prototype,mt=Object.create(xt),_t=["push","pop","shift","unshift","splice","sort","reverse"];_t.forEach(function(t){var e=xt[t];H(mt,t,function(){var n=[],i=arguments.length;while(i--)n[i]=arguments[i];var r,a=e.apply(this,n),o=this.__ob__;switch(t){case"push":case"unshift":r=n;break;case"splice":r=n.slice(2);break}return r&&o.observeArray(r),o.dep.notify(),a})});var St=Object.getOwnPropertyNames(mt),wt=!0;function At(t){wt=t}var Tt=function(t){this.value=t,this.dep=new ft,this.vmCount=0,H(t,"__ob__",this),Array.isArray(t)?(X?t.push!==t.__proto__.push?kt(t,mt,St):Pt(t,mt):kt(t,mt,St),this.observeArray(t)):this.walk(t)};function Pt(t,e){t.__proto__=e}function kt(t,e,n){for(var i=0,r=n.length;i<r;i++){var a=n[i];H(t,a,e[a])}}function Dt(t,e){var n;if(c(t)&&!(t instanceof dt))return m(t,"__ob__")&&t.__ob__ instanceof Tt?n=t.__ob__:wt&&!rt()&&(Array.isArray(t)||u(t))&&Object.isExtensible(t)&&!t._isVue&&(n=new Tt(t)),e&&n&&n.vmCount++,n}function Ot(t,e,n,i,r){var a=new ft,o=Object.getOwnPropertyDescriptor(t,e);if(!o||!1!==o.configurable){var s=o&&o.get,c=o&&o.set;s&&!c||2!==arguments.length||(n=t[e]);var l=!r&&Dt(n);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=s?s.call(t):n;return ft.SharedObject.target&&(a.depend(),l&&(l.dep.depend(),Array.isArray(e)&&Ct(e))),e},set:function(e){var i=s?s.call(t):n;e===i||e!==e&&i!==i||s&&!c||(c?c.call(t,e):n=e,l=!r&&Dt(e),a.notify())}})}}function Mt(t,e,n){if(Array.isArray(t)&&h(e))return t.length=Math.max(t.length,e),t.splice(e,1,n),n;if(e in t&&!(e in Object.prototype))return t[e]=n,n;var i=t.__ob__;return t._isVue||i&&i.vmCount?n:i?(Ot(i.value,e,n),i.dep.notify(),n):(t[e]=n,n)}function $t(t,e){if(Array.isArray(t)&&h(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||m(t,e)&&(delete t[e],n&&n.dep.notify())}}function Ct(t){for(var e=void 0,n=0,i=t.length;n<i;n++)e=t[n],e&&e.__ob__&&e.__ob__.dep.depend(),Array.isArray(e)&&Ct(e)}Tt.prototype.walk=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)Ot(t,e[n])},Tt.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)Dt(t[e])};var Rt=B.optionMergeStrategies;function Lt(t,e){if(!e)return t;for(var n,i,r,a=ct?Reflect.ownKeys(e):Object.keys(e),o=0;o<a.length;o++)n=a[o],"__ob__"!==n&&(i=t[n],r=e[n],m(t,n)?i!==r&&u(i)&&u(r)&&Lt(i,r):Mt(t,n,r));return t}function Ft(t,e,n){return n?function(){var i="function"===typeof e?e.call(n,n):e,r="function"===typeof t?t.call(n,n):t;return i?Lt(i,r):r}:e?t?function(){return Lt("function"===typeof e?e.call(this,this):e,"function"===typeof t?t.call(this,this):t)}:e:t}function jt(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?It(n):n}function It(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function Et(t,e,n,i){var r=Object.create(t||null);return e?$(r,e):r}Rt.data=function(t,e,n){return n?Ft(t,e,n):e&&"function"!==typeof e?t:Ft(t,e)},N.forEach(function(t){Rt[t]=jt}),z.forEach(function(t){Rt[t+"s"]=Et}),Rt.watch=function(t,e,n,i){if(t===nt&&(t=void 0),e===nt&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var r={};for(var a in $(r,t),e){var o=r[a],s=e[a];o&&!Array.isArray(o)&&(o=[o]),r[a]=o?o.concat(s):Array.isArray(s)?s:[s]}return r},Rt.props=Rt.methods=Rt.inject=Rt.computed=function(t,e,n,i){if(!t)return e;var r=Object.create(null);return $(r,t),e&&$(r,e),r},Rt.provide=Ft;var zt=function(t,e){return void 0===e?t:e};function Nt(t,e){var n=t.props;if(n){var i,r,a,o={};if(Array.isArray(n)){i=n.length;while(i--)r=n[i],"string"===typeof r&&(a=w(r),o[a]={type:null})}else if(u(n))for(var s in n)r=n[s],a=w(s),o[a]=u(r)?r:{type:r};else 0;t.props=o}}function Bt(t,e){var n=t.inject;if(n){var i=t.inject={};if(Array.isArray(n))for(var r=0;r<n.length;r++)i[n[r]]={from:n[r]};else if(u(n))for(var a in n){var o=n[a];i[a]=u(o)?$({from:a},o):{from:o}}else 0}}function Wt(t){var e=t.directives;if(e)for(var n in e){var i=e[n];"function"===typeof i&&(e[n]={bind:i,update:i})}}function Ut(t,e,n){if("function"===typeof e&&(e=e.options),Nt(e,n),Bt(e,n),Wt(e),!e._base&&(e.extends&&(t=Ut(t,e.extends,n)),e.mixins))for(var i=0,r=e.mixins.length;i<r;i++)t=Ut(t,e.mixins[i],n);var a,o={};for(a in t)s(a);for(a in e)m(t,a)||s(a);function s(i){var r=Rt[i]||zt;o[i]=r(t[i],e[i],n,i)}return o}function Ht(t,e,n,i){if("string"===typeof n){var r=t[e];if(m(r,n))return r[n];var a=w(n);if(m(r,a))return r[a];var o=A(a);if(m(r,o))return r[o];var s=r[n]||r[a]||r[o];return s}}function Vt(t,e,n,i){var r=e[t],a=!m(n,t),o=n[t],s=Jt(Boolean,r.type);if(s>-1)if(a&&!m(r,"default"))o=!1;else if(""===o||o===P(t)){var c=Jt(String,r.type);(c<0||s<c)&&(o=!0)}if(void 0===o){o=qt(i,r,t);var l=wt;At(!0),Dt(o),At(l)}return o}function qt(t,e,n){if(m(e,"default")){var i=e.default;return t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n]?t._props[n]:"function"===typeof i&&"Function"!==Gt(e.type)?i.call(t):i}}function Gt(t){var e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:""}function Xt(t,e){return Gt(t)===Gt(e)}function Jt(t,e){if(!Array.isArray(e))return Xt(e,t)?0:-1;for(var n=0,i=e.length;n<i;n++)if(Xt(e[n],t))return n;return-1}function Yt(t,e,n){ht();try{if(e){var i=e;while(i=i.$parent){var r=i.$options.errorCaptured;if(r)for(var a=0;a<r.length;a++)try{var o=!1===r[a].call(i,t,e,n);if(o)return}catch(er){Zt(er,i,"errorCaptured hook")}}}Zt(t,e,n)}finally{pt()}}function Kt(t,e,n,i,r){var a;try{a=n?t.apply(e,n):t.call(e),a&&!a._isVue&&p(a)&&!a._handled&&(a.catch(function(t){return Yt(t,i,r+" (Promise/async)")}),a._handled=!0)}catch(er){Yt(er,i,r)}return a}function Zt(t,e,n){if(B.errorHandler)try{return B.errorHandler.call(null,t,e,n)}catch(er){er!==t&&Qt(er,null,"config.errorHandler")}Qt(t,e,n)}function Qt(t,e,n){if(!J&&!Y||"undefined"===typeof console)throw t;console.error(t)}var te,ee=[],ne=!1;function ie(){ne=!1;var t=ee.slice(0);ee.length=0;for(var e=0;e<t.length;e++)t[e]()}if("undefined"!==typeof Promise&&ot(Promise)){var re=Promise.resolve();te=function(){re.then(ie),et&&setTimeout(R)}}else if(Q||"undefined"===typeof MutationObserver||!ot(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())te="undefined"!==typeof setImmediate&&ot(setImmediate)?function(){setImmediate(ie)}:function(){setTimeout(ie,0)};else{var ae=1,oe=new MutationObserver(ie),se=document.createTextNode(String(ae));oe.observe(se,{characterData:!0}),te=function(){ae=(ae+1)%2,se.data=String(ae)}}function ce(t,e){var n;if(ee.push(function(){if(t)try{t.call(e)}catch(er){Yt(er,e,"nextTick")}else n&&n(e)}),ne||(ne=!0,te()),!t&&"undefined"!==typeof Promise)return new Promise(function(t){n=t})}var le=new st;function ue(t){fe(t,le),le.clear()}function fe(t,e){var n,i,r=Array.isArray(t);if(!(!r&&!c(t)||Object.isFrozen(t)||t instanceof dt)){if(t.__ob__){var a=t.__ob__.dep.id;if(e.has(a))return;e.add(a)}if(r){n=t.length;while(n--)fe(t[n],e)}else{i=Object.keys(t),n=i.length;while(n--)fe(t[i[n]],e)}}}var he=_(function(t){var e="&"===t.charAt(0);t=e?t.slice(1):t;var n="~"===t.charAt(0);t=n?t.slice(1):t;var i="!"===t.charAt(0);return t=i?t.slice(1):t,{name:t,once:n,capture:i,passive:e}});function pe(t,e){function n(){var t=arguments,i=n.fns;if(!Array.isArray(i))return Kt(i,null,arguments,e,"v-on handler");for(var r=i.slice(),a=0;a<r.length;a++)Kt(r[a],null,t,e,"v-on handler")}return n.fns=t,n}function de(t,e,n,r,o,s){var c,l,u,f;for(c in t)l=t[c],u=e[c],f=he(c),i(l)||(i(u)?(i(l.fns)&&(l=t[c]=pe(l,s)),a(f.once)&&(l=t[c]=o(f.name,l,f.capture)),n(f.name,l,f.capture,f.passive,f.params)):l!==u&&(u.fns=l,t[c]=u));for(c in e)i(t[c])&&(f=he(c),r(f.name,e[c],f.capture))}function ve(t,e,n){var a=e.options.props;if(!i(a)){var o={},s=t.attrs,c=t.props;if(r(s)||r(c))for(var l in a){var u=P(l);ge(o,c,l,u,!0)||ge(o,s,l,u,!1)}return o}}function ge(t,e,n,i,a){if(r(e)){if(m(e,n))return t[n]=e[n],a||delete e[n],!0;if(m(e,i))return t[n]=e[i],a||delete e[i],!0}return!1}function ye(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}function be(t){return s(t)?[yt(t)]:Array.isArray(t)?me(t):void 0}function xe(t){return r(t)&&r(t.text)&&o(t.isComment)}function me(t,e){var n,o,c,l,u=[];for(n=0;n<t.length;n++)o=t[n],i(o)||"boolean"===typeof o||(c=u.length-1,l=u[c],Array.isArray(o)?o.length>0&&(o=me(o,(e||"")+"_"+n),xe(o[0])&&xe(l)&&(u[c]=yt(l.text+o[0].text),o.shift()),u.push.apply(u,o)):s(o)?xe(l)?u[c]=yt(l.text+o):""!==o&&u.push(yt(o)):xe(o)&&xe(l)?u[c]=yt(l.text+o.text):(a(t._isVList)&&r(o.tag)&&i(o.key)&&r(e)&&(o.key="__vlist"+e+"_"+n+"__"),u.push(o)));return u}function _e(t){var e=t.$options.provide;e&&(t._provided="function"===typeof e?e.call(t):e)}function Se(t){var e=we(t.$options.inject,t);e&&(At(!1),Object.keys(e).forEach(function(n){Ot(t,n,e[n])}),At(!0))}function we(t,e){if(t){for(var n=Object.create(null),i=ct?Reflect.ownKeys(t):Object.keys(t),r=0;r<i.length;r++){var a=i[r];if("__ob__"!==a){var o=t[a].from,s=e;while(s){if(s._provided&&m(s._provided,o)){n[a]=s._provided[o];break}s=s.$parent}if(!s)if("default"in t[a]){var c=t[a].default;n[a]="function"===typeof c?c.call(e):c}else 0}}return n}}function Ae(t,e){if(!t||!t.length)return{};for(var n={},i=0,r=t.length;i<r;i++){var a=t[i],o=a.data;if(o&&o.attrs&&o.attrs.slot&&delete o.attrs.slot,a.context!==e&&a.fnContext!==e||!o||null==o.slot)a.asyncMeta&&a.asyncMeta.data&&"page"===a.asyncMeta.data.slot?(n["page"]||(n["page"]=[])).push(a):(n.default||(n.default=[])).push(a);else{var s=o.slot,c=n[s]||(n[s]=[]);"template"===a.tag?c.push.apply(c,a.children||[]):c.push(a)}}for(var l in n)n[l].every(Te)&&delete n[l];return n}function Te(t){return t.isComment&&!t.asyncFactory||" "===t.text}function Pe(t,e,i){var r,a=Object.keys(e).length>0,o=t?!!t.$stable:!a,s=t&&t.$key;if(t){if(t._normalized)return t._normalized;if(o&&i&&i!==n&&s===i.$key&&!a&&!i.$hasNormal)return i;for(var c in r={},t)t[c]&&"$"!==c[0]&&(r[c]=ke(e,c,t[c]))}else r={};for(var l in e)l in r||(r[l]=De(e,l));return t&&Object.isExtensible(t)&&(t._normalized=r),H(r,"$stable",o),H(r,"$key",s),H(r,"$hasNormal",a),r}function ke(t,e,n){var i=function(){var t=arguments.length?n.apply(null,arguments):n({});return t=t&&"object"===typeof t&&!Array.isArray(t)?[t]:be(t),t&&(0===t.length||1===t.length&&t[0].isComment)?void 0:t};return n.proxy&&Object.defineProperty(t,e,{get:i,enumerable:!0,configurable:!0}),i}function De(t,e){return function(){return t[e]}}function Oe(t,e){var n,i,a,o,s;if(Array.isArray(t)||"string"===typeof t)for(n=new Array(t.length),i=0,a=t.length;i<a;i++)n[i]=e(t[i],i);else if("number"===typeof t)for(n=new Array(t),i=0;i<t;i++)n[i]=e(i+1,i);else if(c(t))if(ct&&t[Symbol.iterator]){n=[];var l=t[Symbol.iterator](),u=l.next();while(!u.done)n.push(e(u.value,n.length)),u=l.next()}else for(o=Object.keys(t),n=new Array(o.length),i=0,a=o.length;i<a;i++)s=o[i],n[i]=e(t[s],s,i);return r(n)||(n=[]),n._isVList=!0,n}function Me(t,e,n,i){var r,a=this.$scopedSlots[t];a?(n=n||{},i&&(n=$($({},i),n)),r=a(n)||e):r=this.$slots[t]||e;var o=n&&n.slot;return o?this.$createElement("template",{slot:o},r):r}function $e(t){return Ht(this.$options,"filters",t,!0)||F}function Ce(t,e){return Array.isArray(t)?-1===t.indexOf(e):t!==e}function Re(t,e,n,i,r){var a=B.keyCodes[e]||n;return r&&i&&!B.keyCodes[e]?Ce(r,i):a?Ce(a,t):i?P(i)!==e:void 0}function Le(t,e,n,i,r){if(n)if(c(n)){var a;Array.isArray(n)&&(n=C(n));var o=function(o){if("class"===o||"style"===o||y(o))a=t;else{var s=t.attrs&&t.attrs.type;a=i||B.mustUseProp(e,s,o)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}var c=w(o),l=P(o);if(!(c in a)&&!(l in a)&&(a[o]=n[o],r)){var u=t.on||(t.on={});u["update:"+o]=function(t){n[o]=t}}};for(var s in n)o(s)}else;return t}function Fe(t,e){var n=this._staticTrees||(this._staticTrees=[]),i=n[t];return i&&!e?i:(i=n[t]=this.$options.staticRenderFns[t].call(this._renderProxy,null,this),Ie(i,"__static__"+t,!1),i)}function je(t,e,n){return Ie(t,"__once__"+e+(n?"_"+n:""),!0),t}function Ie(t,e,n){if(Array.isArray(t))for(var i=0;i<t.length;i++)t[i]&&"string"!==typeof t[i]&&Ee(t[i],e+"_"+i,n);else Ee(t,e,n)}function Ee(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function ze(t,e){if(e)if(u(e)){var n=t.on=t.on?$({},t.on):{};for(var i in e){var r=n[i],a=e[i];n[i]=r?[].concat(r,a):a}}else;return t}function Ne(t,e,n,i){e=e||{$stable:!n};for(var r=0;r<t.length;r++){var a=t[r];Array.isArray(a)?Ne(a,e,n):a&&(a.proxy&&(a.fn.proxy=!0),e[a.key]=a.fn)}return i&&(e.$key=i),e}function Be(t,e){for(var n=0;n<e.length;n+=2){var i=e[n];"string"===typeof i&&i&&(t[e[n]]=e[n+1])}return t}function We(t,e){return"string"===typeof t?e+t:t}function Ue(t){t._o=je,t._n=v,t._s=d,t._l=Oe,t._t=Me,t._q=j,t._i=I,t._m=Fe,t._f=$e,t._k=Re,t._b=Le,t._v=yt,t._e=gt,t._u=Ne,t._g=ze,t._d=Be,t._p=We}function He(t,e,i,r,o){var s,c=this,l=o.options;m(r,"_uid")?(s=Object.create(r),s._original=r):(s=r,r=r._original);var u=a(l._compiled),f=!u;this.data=t,this.props=e,this.children=i,this.parent=r,this.listeners=t.on||n,this.injections=we(l.inject,r),this.slots=function(){return c.$slots||Pe(t.scopedSlots,c.$slots=Ae(i,r)),c.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return Pe(t.scopedSlots,this.slots())}}),u&&(this.$options=l,this.$slots=this.slots(),this.$scopedSlots=Pe(t.scopedSlots,this.$slots)),l._scopeId?this._c=function(t,e,n,i){var a=rn(s,t,e,n,i,f);return a&&!Array.isArray(a)&&(a.fnScopeId=l._scopeId,a.fnContext=r),a}:this._c=function(t,e,n,i){return rn(s,t,e,n,i,f)}}function Ve(t,e,i,a,o){var s=t.options,c={},l=s.props;if(r(l))for(var u in l)c[u]=Vt(u,l,e||n);else r(i.attrs)&&Ge(c,i.attrs),r(i.props)&&Ge(c,i.props);var f=new He(i,c,o,a,t),h=s.render.call(null,f._c,f);if(h instanceof dt)return qe(h,i,f.parent,s,f);if(Array.isArray(h)){for(var p=be(h)||[],d=new Array(p.length),v=0;v<p.length;v++)d[v]=qe(p[v],i,f.parent,s,f);return d}}function qe(t,e,n,i,r){var a=bt(t);return a.fnContext=n,a.fnOptions=i,e.slot&&((a.data||(a.data={})).slot=e.slot),a}function Ge(t,e){for(var n in e)t[w(n)]=e[n]}Ue(He.prototype);var Xe={init:function(t,e){if(t.componentInstance&&!t.componentInstance._isDestroyed&&t.data.keepAlive){var n=t;Xe.prepatch(n,n)}else{var i=t.componentInstance=Ke(t,wn);i.$mount(e?t.elm:void 0,e)}},prepatch:function(t,e){var n=e.componentOptions,i=e.componentInstance=t.componentInstance;kn(i,n.propsData,n.listeners,e,n.children)},insert:function(t){var e=t.context,n=t.componentInstance;n._isMounted||(n._isMounted=!0,$n(n,"mounted")),t.data.keepAlive&&(e._isMounted?Un(n):On(n,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?Mn(e,!0):e.$destroy())}},Je=Object.keys(Xe);function Ye(t,e,n,o,s){if(!i(t)){var l=n.$options._base;if(c(t)&&(t=l.extend(t)),"function"===typeof t){var u;if(i(t.cid)&&(u=t,t=dn(u,l),void 0===t))return pn(u,e,n,o,s);e=e||{},hi(t),r(e.model)&&tn(t.options,e);var f=ve(e,t,s);if(a(t.options.functional))return Ve(t,f,e,n,o);var h=e.on;if(e.on=e.nativeOn,a(t.options.abstract)){var p=e.slot;e={},p&&(e.slot=p)}Ze(e);var d=t.options.name||s,v=new dt("vue-component-"+t.cid+(d?"-"+d:""),e,void 0,void 0,void 0,n,{Ctor:t,propsData:f,listeners:h,tag:s,children:o},u);return v}}}function Ke(t,e){var n={_isComponent:!0,_parentVnode:t,parent:e},i=t.data.inlineTemplate;return r(i)&&(n.render=i.render,n.staticRenderFns=i.staticRenderFns),new t.componentOptions.Ctor(n)}function Ze(t){for(var e=t.hook||(t.hook={}),n=0;n<Je.length;n++){var i=Je[n],r=e[i],a=Xe[i];r===a||r&&r._merged||(e[i]=r?Qe(a,r):a)}}function Qe(t,e){var n=function(n,i){t(n,i),e(n,i)};return n._merged=!0,n}function tn(t,e){var n=t.model&&t.model.prop||"value",i=t.model&&t.model.event||"input";(e.attrs||(e.attrs={}))[n]=e.model.value;var a=e.on||(e.on={}),o=a[i],s=e.model.callback;r(o)?(Array.isArray(o)?-1===o.indexOf(s):o!==s)&&(a[i]=[s].concat(o)):a[i]=s}var en=1,nn=2;function rn(t,e,n,i,r,o){return(Array.isArray(n)||s(n))&&(r=i,i=n,n=void 0),a(o)&&(r=nn),an(t,e,n,i,r)}function an(t,e,n,i,a){if(r(n)&&r(n.__ob__))return gt();if(r(n)&&r(n.is)&&(e=n.is),!e)return gt();var o,s,c;(Array.isArray(i)&&"function"===typeof i[0]&&(n=n||{},n.scopedSlots={default:i[0]},i.length=0),a===nn?i=be(i):a===en&&(i=ye(i)),"string"===typeof e)?(s=t.$vnode&&t.$vnode.ns||B.getTagNamespace(e),o=B.isReservedTag(e)?new dt(B.parsePlatformTagName(e),n,i,void 0,void 0,t):n&&n.pre||!r(c=Ht(t.$options,"components",e))?new dt(e,n,i,void 0,void 0,t):Ye(c,n,t,i,e)):o=Ye(e,n,t,i);return Array.isArray(o)?o:r(o)?(r(s)&&on(o,s),r(n)&&sn(n),o):gt()}function on(t,e,n){if(t.ns=e,"foreignObject"===t.tag&&(e=void 0,n=!0),r(t.children))for(var o=0,s=t.children.length;o<s;o++){var c=t.children[o];r(c.tag)&&(i(c.ns)||a(n)&&"svg"!==c.tag)&&on(c,e,n)}}function sn(t){c(t.style)&&ue(t.style),c(t.class)&&ue(t.class)}function cn(t){t._vnode=null,t._staticTrees=null;var e=t.$options,i=t.$vnode=e._parentVnode,r=i&&i.context;t.$slots=Ae(e._renderChildren,r),t.$scopedSlots=n,t._c=function(e,n,i,r){return rn(t,e,n,i,r,!1)},t.$createElement=function(e,n,i,r){return rn(t,e,n,i,r,!0)};var a=i&&i.data;Ot(t,"$attrs",a&&a.attrs||n,null,!0),Ot(t,"$listeners",e._parentListeners||n,null,!0)}var ln,un=null;function fn(t){Ue(t.prototype),t.prototype.$nextTick=function(t){return ce(t,this)},t.prototype._render=function(){var t,e=this,n=e.$options,i=n.render,r=n._parentVnode;r&&(e.$scopedSlots=Pe(r.data.scopedSlots,e.$slots,e.$scopedSlots)),e.$vnode=r;try{un=e,t=i.call(e._renderProxy,e.$createElement)}catch(er){Yt(er,e,"render"),t=e._vnode}finally{un=null}return Array.isArray(t)&&1===t.length&&(t=t[0]),t instanceof dt||(t=gt()),t.parent=r,t}}function hn(t,e){return(t.__esModule||ct&&"Module"===t[Symbol.toStringTag])&&(t=t.default),c(t)?e.extend(t):t}function pn(t,e,n,i,r){var a=gt();return a.asyncFactory=t,a.asyncMeta={data:e,context:n,children:i,tag:r},a}function dn(t,e){if(a(t.error)&&r(t.errorComp))return t.errorComp;if(r(t.resolved))return t.resolved;var n=un;if(n&&r(t.owners)&&-1===t.owners.indexOf(n)&&t.owners.push(n),a(t.loading)&&r(t.loadingComp))return t.loadingComp;if(n&&!r(t.owners)){var o=t.owners=[n],s=!0,l=null,u=null;n.$on("hook:destroyed",function(){return b(o,n)});var f=function(t){for(var e=0,n=o.length;e<n;e++)o[e].$forceUpdate();t&&(o.length=0,null!==l&&(clearTimeout(l),l=null),null!==u&&(clearTimeout(u),u=null))},h=E(function(n){t.resolved=hn(n,e),s?o.length=0:f(!0)}),d=E(function(e){r(t.errorComp)&&(t.error=!0,f(!0))}),v=t(h,d);return c(v)&&(p(v)?i(t.resolved)&&v.then(h,d):p(v.component)&&(v.component.then(h,d),r(v.error)&&(t.errorComp=hn(v.error,e)),r(v.loading)&&(t.loadingComp=hn(v.loading,e),0===v.delay?t.loading=!0:l=setTimeout(function(){l=null,i(t.resolved)&&i(t.error)&&(t.loading=!0,f(!1))},v.delay||200)),r(v.timeout)&&(u=setTimeout(function(){u=null,i(t.resolved)&&d(null)},v.timeout)))),s=!1,t.loading?t.loadingComp:t.resolved}}function vn(t){return t.isComment&&t.asyncFactory}function gn(t){if(Array.isArray(t))for(var e=0;e<t.length;e++){var n=t[e];if(r(n)&&(r(n.componentOptions)||vn(n)))return n}}function yn(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&_n(t,e)}function bn(t,e){ln.$on(t,e)}function xn(t,e){ln.$off(t,e)}function mn(t,e){var n=ln;return function i(){var r=e.apply(null,arguments);null!==r&&n.$off(t,i)}}function _n(t,e,n){ln=t,de(e,n||{},bn,xn,mn,t),ln=void 0}function Sn(t){var e=/^hook:/;t.prototype.$on=function(t,n){var i=this;if(Array.isArray(t))for(var r=0,a=t.length;r<a;r++)i.$on(t[r],n);else(i._events[t]||(i._events[t]=[])).push(n),e.test(t)&&(i._hasHookEvent=!0);return i},t.prototype.$once=function(t,e){var n=this;function i(){n.$off(t,i),e.apply(n,arguments)}return i.fn=e,n.$on(t,i),n},t.prototype.$off=function(t,e){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(t)){for(var i=0,r=t.length;i<r;i++)n.$off(t[i],e);return n}var a,o=n._events[t];if(!o)return n;if(!e)return n._events[t]=null,n;var s=o.length;while(s--)if(a=o[s],a===e||a.fn===e){o.splice(s,1);break}return n},t.prototype.$emit=function(t){var e=this,n=e._events[t];if(n){n=n.length>1?M(n):n;for(var i=M(arguments,1),r='event handler for "'+t+'"',a=0,o=n.length;a<o;a++)Kt(n[a],e,i,e,r)}return e}}var wn=null;function An(t){var e=wn;return wn=t,function(){wn=e}}function Tn(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function Pn(t){t.prototype._update=function(t,e){var n=this,i=n.$el,r=n._vnode,a=An(n);n._vnode=t,n.$el=r?n.__patch__(r,t):n.__patch__(n.$el,t,e,!1),a(),i&&(i.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},t.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){$n(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||b(e.$children,t),t._watcher&&t._watcher.teardown();var n=t._watchers.length;while(n--)t._watchers[n].teardown();t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),$n(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null),t.$vnode&&(t.$vnode.parent=null)}}}function kn(t,e,i,r,a){var o=r.data.scopedSlots,s=t.$scopedSlots,c=!!(o&&!o.$stable||s!==n&&!s.$stable||o&&t.$scopedSlots.$key!==o.$key),l=!!(a||t.$options._renderChildren||c);if(t.$options._parentVnode=r,t.$vnode=r,t._vnode&&(t._vnode.parent=r),t.$options._renderChildren=a,t.$attrs=r.data.attrs||n,t.$listeners=i||n,e&&t.$options.props){At(!1);for(var u=t._props,f=t.$options._propKeys||[],h=0;h<f.length;h++){var p=f[h],d=t.$options.props;u[p]=Vt(p,d,e,t)}At(!0),t.$options.propsData=e}i=i||n;var v=t.$options._parentListeners;t.$options._parentListeners=i,_n(t,i,v),l&&(t.$slots=Ae(a,r.context),t.$forceUpdate())}function Dn(t){while(t&&(t=t.$parent))if(t._inactive)return!0;return!1}function On(t,e){if(e){if(t._directInactive=!1,Dn(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)On(t.$children[n]);$n(t,"activated")}}function Mn(t,e){if((!e||(t._directInactive=!0,!Dn(t)))&&!t._inactive){t._inactive=!0;for(var n=0;n<t.$children.length;n++)Mn(t.$children[n]);$n(t,"deactivated")}}function $n(t,e){ht();var n=t.$options[e],i=e+" hook";if(n)for(var r=0,a=n.length;r<a;r++)Kt(n[r],t,null,t,i);t._hasHookEvent&&t.$emit("hook:"+e),pt()}var Cn=[],Rn=[],Ln={},Fn=!1,jn=!1,In=0;function En(){In=Cn.length=Rn.length=0,Ln={},Fn=jn=!1}var zn=Date.now;if(J&&!Q){var Nn=window.performance;Nn&&"function"===typeof Nn.now&&zn()>document.createEvent("Event").timeStamp&&(zn=function(){return Nn.now()})}function Bn(){var t,e;for(zn(),jn=!0,Cn.sort(function(t,e){return t.id-e.id}),In=0;In<Cn.length;In++)t=Cn[In],t.before&&t.before(),e=t.id,Ln[e]=null,t.run();var n=Rn.slice(),i=Cn.slice();En(),Hn(n),Wn(i),at&&B.devtools&&at.emit("flush")}function Wn(t){var e=t.length;while(e--){var n=t[e],i=n.vm;i._watcher===n&&i._isMounted&&!i._isDestroyed&&$n(i,"updated")}}function Un(t){t._inactive=!1,Rn.push(t)}function Hn(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,On(t[e],!0)}function Vn(t){var e=t.id;if(null==Ln[e]){if(Ln[e]=!0,jn){var n=Cn.length-1;while(n>In&&Cn[n].id>t.id)n--;Cn.splice(n+1,0,t)}else Cn.push(t);Fn||(Fn=!0,ce(Bn))}}var qn=0,Gn=function(t,e,n,i,r){this.vm=t,r&&(t._watcher=this),t._watchers.push(this),i?(this.deep=!!i.deep,this.user=!!i.user,this.lazy=!!i.lazy,this.sync=!!i.sync,this.before=i.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++qn,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new st,this.newDepIds=new st,this.expression="","function"===typeof e?this.getter=e:(this.getter=q(e),this.getter||(this.getter=R)),this.value=this.lazy?void 0:this.get()};Gn.prototype.get=function(){var t;ht(this);var e=this.vm;try{t=this.getter.call(e,e)}catch(er){if(!this.user)throw er;Yt(er,e,'getter for watcher "'+this.expression+'"')}finally{this.deep&&ue(t),pt(),this.cleanupDeps()}return t},Gn.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},Gn.prototype.cleanupDeps=function(){var t=this.deps.length;while(t--){var e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},Gn.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():Vn(this)},Gn.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||c(t)||this.deep){var e=this.value;if(this.value=t,this.user)try{this.cb.call(this.vm,t,e)}catch(er){Yt(er,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,t,e)}}},Gn.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},Gn.prototype.depend=function(){var t=this.deps.length;while(t--)this.deps[t].depend()},Gn.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||b(this.vm._watchers,this);var t=this.deps.length;while(t--)this.deps[t].removeSub(this);this.active=!1}};var Xn={enumerable:!0,configurable:!0,get:R,set:R};function Jn(t,e,n){Xn.get=function(){return this[e][n]},Xn.set=function(t){this[e][n]=t},Object.defineProperty(t,n,Xn)}function Yn(t){t._watchers=[];var e=t.$options;e.props&&Kn(t,e.props),e.methods&&ai(t,e.methods),e.data?Zn(t):Dt(t._data={},!0),e.computed&&ei(t,e.computed),e.watch&&e.watch!==nt&&oi(t,e.watch)}function Kn(t,e){var n=t.$options.propsData||{},i=t._props={},r=t.$options._propKeys=[],a=!t.$parent;a||At(!1);var o=function(a){r.push(a);var o=Vt(a,e,n,t);Ot(i,a,o),a in t||Jn(t,"_props",a)};for(var s in e)o(s);At(!0)}function Zn(t){var e=t.$options.data;e=t._data="function"===typeof e?Qn(e,t):e||{},u(e)||(e={});var n=Object.keys(e),i=t.$options.props,r=(t.$options.methods,n.length);while(r--){var a=n[r];0,i&&m(i,a)||U(a)||Jn(t,"_data",a)}Dt(e,!0)}function Qn(t,e){ht();try{return t.call(e,e)}catch(er){return Yt(er,e,"data()"),{}}finally{pt()}}var ti={lazy:!0};function ei(t,e){var n=t._computedWatchers=Object.create(null),i=rt();for(var r in e){var a=e[r],o="function"===typeof a?a:a.get;0,i||(n[r]=new Gn(t,o||R,R,ti)),r in t||ni(t,r,a)}}function ni(t,e,n){var i=!rt();"function"===typeof n?(Xn.get=i?ii(e):ri(n),Xn.set=R):(Xn.get=n.get?i&&!1!==n.cache?ii(e):ri(n.get):R,Xn.set=n.set||R),Object.defineProperty(t,e,Xn)}function ii(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),ft.SharedObject.target&&e.depend(),e.value}}function ri(t){return function(){return t.call(this,this)}}function ai(t,e){t.$options.props;for(var n in e)t[n]="function"!==typeof e[n]?R:O(e[n],t)}function oi(t,e){for(var n in e){var i=e[n];if(Array.isArray(i))for(var r=0;r<i.length;r++)si(t,n,i[r]);else si(t,n,i)}}function si(t,e,n,i){return u(n)&&(i=n,n=n.handler),"string"===typeof n&&(n=t[n]),t.$watch(e,n,i)}function ci(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=Mt,t.prototype.$delete=$t,t.prototype.$watch=function(t,e,n){var i=this;if(u(e))return si(i,t,e,n);n=n||{},n.user=!0;var r=new Gn(i,t,e,n);if(n.immediate)try{e.call(i,r.value)}catch(a){Yt(a,i,'callback for immediate watcher "'+r.expression+'"')}return function(){r.teardown()}}}var li=0;function ui(t){t.prototype._init=function(t){var e=this;e._uid=li++,e._isVue=!0,t&&t._isComponent?fi(e,t):e.$options=Ut(hi(e.constructor),t||{},e),e._renderProxy=e,e._self=e,Tn(e),yn(e),cn(e),$n(e,"beforeCreate"),"mp-toutiao"!==e.mpHost&&Se(e),Yn(e),"mp-toutiao"!==e.mpHost&&_e(e),"mp-toutiao"!==e.mpHost&&$n(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}function fi(t,e){var n=t.$options=Object.create(t.constructor.options),i=e._parentVnode;n.parent=e.parent,n._parentVnode=i;var r=i.componentOptions;n.propsData=r.propsData,n._parentListeners=r.listeners,n._renderChildren=r.children,n._componentTag=r.tag,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}function hi(t){var e=t.options;if(t.super){var n=hi(t.super),i=t.superOptions;if(n!==i){t.superOptions=n;var r=pi(t);r&&$(t.extendOptions,r),e=t.options=Ut(n,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function pi(t){var e,n=t.options,i=t.sealedOptions;for(var r in n)n[r]!==i[r]&&(e||(e={}),e[r]=n[r]);return e}function di(t){this._init(t)}function vi(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=M(arguments,1);return n.unshift(this),"function"===typeof t.install?t.install.apply(t,n):"function"===typeof t&&t.apply(null,n),e.push(t),this}}function gi(t){t.mixin=function(t){return this.options=Ut(this.options,t),this}}function yi(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,i=n.cid,r=t._Ctor||(t._Ctor={});if(r[i])return r[i];var a=t.name||n.options.name;var o=function(t){this._init(t)};return o.prototype=Object.create(n.prototype),o.prototype.constructor=o,o.cid=e++,o.options=Ut(n.options,t),o["super"]=n,o.options.props&&bi(o),o.options.computed&&xi(o),o.extend=n.extend,o.mixin=n.mixin,o.use=n.use,z.forEach(function(t){o[t]=n[t]}),a&&(o.options.components[a]=o),o.superOptions=n.options,o.extendOptions=t,o.sealedOptions=$({},o.options),r[i]=o,o}}function bi(t){var e=t.options.props;for(var n in e)Jn(t.prototype,"_props",n)}function xi(t){var e=t.options.computed;for(var n in e)ni(t.prototype,n,e[n])}function mi(t){z.forEach(function(e){t[e]=function(t,n){return n?("component"===e&&u(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&"function"===typeof n&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}})}function _i(t){return t&&(t.Ctor.options.name||t.tag)}function Si(t,e){return Array.isArray(t)?t.indexOf(e)>-1:"string"===typeof t?t.split(",").indexOf(e)>-1:!!f(t)&&t.test(e)}function wi(t,e){var n=t.cache,i=t.keys,r=t._vnode;for(var a in n){var o=n[a];if(o){var s=_i(o.componentOptions);s&&!e(s)&&Ai(n,a,i,r)}}}function Ai(t,e,n,i){var r=t[e];!r||i&&r.tag===i.tag||r.componentInstance.$destroy(),t[e]=null,b(n,e)}ui(di),ci(di),Sn(di),Pn(di),fn(di);var Ti=[String,RegExp,Array],Pi={name:"keep-alive",abstract:!0,props:{include:Ti,exclude:Ti,max:[String,Number]},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var t in this.cache)Ai(this.cache,t,this.keys)},mounted:function(){var t=this;this.$watch("include",function(e){wi(t,function(t){return Si(e,t)})}),this.$watch("exclude",function(e){wi(t,function(t){return!Si(e,t)})})},render:function(){var t=this.$slots.default,e=gn(t),n=e&&e.componentOptions;if(n){var i=_i(n),r=this,a=r.include,o=r.exclude;if(a&&(!i||!Si(a,i))||o&&i&&Si(o,i))return e;var s=this,c=s.cache,l=s.keys,u=null==e.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):e.key;c[u]?(e.componentInstance=c[u].componentInstance,b(l,u),l.push(u)):(c[u]=e,l.push(u),this.max&&l.length>parseInt(this.max)&&Ai(c,l[0],l,this._vnode)),e.data.keepAlive=!0}return e||t&&t[0]}},ki={KeepAlive:Pi};function Di(t){var e={get:function(){return B}};Object.defineProperty(t,"config",e),t.util={warn:lt,extend:$,mergeOptions:Ut,defineReactive:Ot},t.set=Mt,t.delete=$t,t.nextTick=ce,t.observable=function(t){return Dt(t),t},t.options=Object.create(null),z.forEach(function(e){t.options[e+"s"]=Object.create(null)}),t.options._base=t,$(t.options.components,ki),vi(t),gi(t),yi(t),mi(t)}Di(di),Object.defineProperty(di.prototype,"$isServer",{get:rt}),Object.defineProperty(di.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(di,"FunctionalRenderContext",{value:He}),di.version="2.6.10";var Oi="[object Array]",Mi="[object Object]";function $i(t,e){var n={};return Ci(t,e),Ri(t,e,"",n),n}function Ci(t,e){if(t!==e){var n=Fi(t),i=Fi(e);if(n==Mi&&i==Mi){if(Object.keys(t).length>=Object.keys(e).length)for(var r in e){var a=t[r];void 0===a?t[r]=null:Ci(a,e[r])}}else n==Oi&&i==Oi&&t.length>=e.length&&e.forEach(function(e,n){Ci(t[n],e)})}}function Ri(t,e,n,i){if(t!==e){var r=Fi(t),a=Fi(e);if(r==Mi)if(a!=Mi||Object.keys(t).length<Object.keys(e).length)Li(i,n,t);else{var o=function(r){var a=t[r],o=e[r],s=Fi(a),c=Fi(o);if(s!=Oi&&s!=Mi)a!=e[r]&&Li(i,(""==n?"":n+".")+r,a);else if(s==Oi)c!=Oi?Li(i,(""==n?"":n+".")+r,a):a.length<o.length?Li(i,(""==n?"":n+".")+r,a):a.forEach(function(t,e){Ri(t,o[e],(""==n?"":n+".")+r+"["+e+"]",i)});else if(s==Mi)if(c!=Mi||Object.keys(a).length<Object.keys(o).length)Li(i,(""==n?"":n+".")+r,a);else for(var l in a)Ri(a[l],o[l],(""==n?"":n+".")+r+"."+l,i)};for(var s in t)o(s)}else r==Oi?a!=Oi?Li(i,n,t):t.length<e.length?Li(i,n,t):t.forEach(function(t,r){Ri(t,e[r],n+"["+r+"]",i)}):Li(i,n,t)}}function Li(t,e,n){t[e]=n}function Fi(t){return Object.prototype.toString.call(t)}function ji(t){if(t.__next_tick_callbacks&&t.__next_tick_callbacks.length){if(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG){var e=t.$scope;console.log("["+ +new Date+"]["+(e.is||e.route)+"]["+t._uid+"]:flushCallbacks["+t.__next_tick_callbacks.length+"]")}var n=t.__next_tick_callbacks.slice(0);t.__next_tick_callbacks.length=0;for(var i=0;i<n.length;i++)n[i]()}}function Ii(t){return Cn.find(function(e){return t._watcher===e})}function Ei(t,e){if(!t.__next_tick_pending&&!Ii(t)){if(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG){var n=t.$scope;console.log("["+ +new Date+"]["+(n.is||n.route)+"]["+t._uid+"]:nextVueTick")}return ce(e,t)}if(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG){var i=t.$scope;console.log("["+ +new Date+"]["+(i.is||i.route)+"]["+t._uid+"]:nextMPTick")}var r;if(t.__next_tick_callbacks||(t.__next_tick_callbacks=[]),t.__next_tick_callbacks.push(function(){if(e)try{e.call(t)}catch(er){Yt(er,t,"nextTick")}else r&&r(t)}),!e&&"undefined"!==typeof Promise)return new Promise(function(t){r=t})}function zi(t){var e=Object.create(null),n=[].concat(Object.keys(t._data||{}),Object.keys(t._computedWatchers||{}));return n.reduce(function(e,n){return e[n]=t[n],e},e),Object.assign(e,t.$mp.data||{}),Array.isArray(t.$options.behaviors)&&-1!==t.$options.behaviors.indexOf("uni://form-field")&&(e["name"]=t.name,e["value"]=t.value),JSON.parse(JSON.stringify(e))}var Ni=function(t,e){var n=this;if(null!==e&&("page"===this.mpType||"component"===this.mpType)){var i=this.$scope,r=Object.create(null);try{r=zi(this)}catch(s){console.error(s)}r.__webviewId__=i.data.__webviewId__;var a=Object.create(null);Object.keys(r).forEach(function(t){a[t]=i.data[t]});var o=$i(r,a);Object.keys(o).length?(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG&&console.log("["+ +new Date+"]["+(i.is||i.route)+"]["+this._uid+"]差量更新",JSON.stringify(o)),this.__next_tick_pending=!0,i.setData(o,function(){n.__next_tick_pending=!1,ji(n)})):ji(this)}};function Bi(){}function Wi(t,e,n){if(!t.mpType)return t;"app"===t.mpType&&(t.$options.render=Bi),t.$options.render||(t.$options.render=Bi),"mp-toutiao"!==t.mpHost&&$n(t,"beforeMount");var i=function(){t._update(t._render(),n)};return new Gn(t,i,R,{before:function(){t._isMounted&&!t._isDestroyed&&$n(t,"beforeUpdate")}},!0),n=!1,t}function Ui(t,e){return r(t)||r(e)?Hi(t,Vi(e)):""}function Hi(t,e){return t?e?t+" "+e:t:e||""}function Vi(t){return Array.isArray(t)?qi(t):c(t)?Gi(t):"string"===typeof t?t:""}function qi(t){for(var e,n="",i=0,a=t.length;i<a;i++)r(e=Vi(t[i]))&&""!==e&&(n&&(n+=" "),n+=e);return n}function Gi(t){var e="";for(var n in t)t[n]&&(e&&(e+=" "),e+=n);return e}var Xi=_(function(t){var e={},n=/;(?![^(]*\))/g,i=/:(.+)/;return t.split(n).forEach(function(t){if(t){var n=t.split(i);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e});function Ji(t){return Array.isArray(t)?C(t):"string"===typeof t?Xi(t):t}var Yi=["createSelectorQuery","createIntersectionObserver","selectAllComponents","selectComponent"];function Ki(t,e){var n=e.split("."),i=n[0];return 0===i.indexOf("__$n")&&(i=parseInt(i.replace("__$n",""))),1===n.length?t[i]:Ki(t[i],n.slice(1).join("."))}function Zi(t){t.config.errorHandler=function(t){console.error(t)};var e=t.prototype.$emit;t.prototype.$emit=function(t){return this.$scope&&t&&this.$scope["triggerEvent"](t,{__args__:M(arguments,1)}),e.apply(this,arguments)},t.prototype.$nextTick=function(t){return Ei(this,t)},Yi.forEach(function(e){t.prototype[e]=function(t){if(this.$scope)return this.$scope[e](t)}}),t.prototype.__init_provide=_e,t.prototype.__init_injections=Se,t.prototype.__call_hook=function(t,e){var n=this;ht();var i,r=n.$options[t],a=t+" hook";if(r)for(var o=0,s=r.length;o<s;o++)i=Kt(r[o],n,e?[e]:null,n,a);return n._hasHookEvent&&n.$emit("hook:"+t),pt(),i},t.prototype.__set_model=function(t,e,n,i){Array.isArray(i)&&(-1!==i.indexOf("trim")&&(n=n.trim()),-1!==i.indexOf("number")&&(n=this._n(n))),t||(t=this),t[e]=n},t.prototype.__set_sync=function(t,e,n){t||(t=this),t[e]=n},t.prototype.__get_orig=function(t){return u(t)&&t["$orig"]||t},t.prototype.__get_value=function(t,e){return Ki(e||this,t)},t.prototype.__get_class=function(t,e){return Ui(e,t)},t.prototype.__get_style=function(t,e){if(!t&&!e)return"";var n=Ji(t),i=e?$(e,n):n;return Object.keys(i).map(function(t){return P(t)+":"+i[t]}).join(";")},t.prototype.__map=function(t,e){var n,i,r,a,o;if(Array.isArray(t)){for(n=new Array(t.length),i=0,r=t.length;i<r;i++)n[i]=e(t[i],i);return n}if(c(t)){for(a=Object.keys(t),n=Object.create(null),i=0,r=a.length;i<r;i++)o=a[i],n[o]=e(t[o],o,i);return n}return[]}}var Qi=["onLaunch","onShow","onHide","onUniNViewMessage","onError","onLoad","onReady","onUnload","onPullDownRefresh","onReachBottom","onTabItemTap","onShareAppMessage","onResize","onPageScroll","onNavigationBarButtonTap","onBackPress","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked","onPageShow","onPageHide","onPageResize"];function tr(t){var e=t.extend;t.extend=function(t){t=t||{};var n=t.methods;return n&&Object.keys(n).forEach(function(e){-1!==Qi.indexOf(e)&&(t[e]=n[e],delete n[e])}),e.call(this,t)};var n=t.config.optionMergeStrategies,i=n.created;Qi.forEach(function(t){n[t]=i}),t.prototype.__lifecycle_hooks__=Qi}di.prototype.__patch__=Ni,di.prototype.$mount=function(t,e){return Wi(this,t,e)},tr(di),Zi(di),e["default"]=di}.call(this,n("c8ba"))},"6e42":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.createApp=de,e.createComponent=Ae,e.createPage=we,e.default=void 0;var i=r(n("66fd"));function r(t){return t&&t.__esModule?t:{default:t}}function a(t,e){return c(t)||s(t,e)||o()}function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function s(t,e){var n=[],i=!0,r=!1,a=void 0;try{for(var o,s=t[Symbol.iterator]();!(i=(o=s.next()).done);i=!0)if(n.push(o.value),e&&n.length===e)break}catch(c){r=!0,a=c}finally{try{i||null==s["return"]||s["return"]()}finally{if(r)throw a}}return n}function c(t){if(Array.isArray(t))return t}function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function u(t){return p(t)||h(t)||f()}function f(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function h(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function p(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}var d=Object.prototype.toString,v=Object.prototype.hasOwnProperty;function g(t){return"function"===typeof t}function y(t){return"string"===typeof t}function b(t){return"[object Object]"===d.call(t)}function x(t,e){return v.call(t,e)}function m(){}function _(t){var e=Object.create(null);return function(n){var i=e[n];return i||(e[n]=t(n))}}var S=/-(\w)/g,w=_(function(t){return t.replace(S,function(t,e){return e?e.toUpperCase():""})}),A=["invoke","success","fail","complete","returnValue"],T={},P={};function k(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?D(n):n}function D(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function O(t,e){var n=t.indexOf(e);-1!==n&&t.splice(n,1)}function M(t,e){Object.keys(e).forEach(function(n){-1!==A.indexOf(n)&&g(e[n])&&(t[n]=k(t[n],e[n]))})}function $(t,e){t&&e&&Object.keys(e).forEach(function(n){-1!==A.indexOf(n)&&g(e[n])&&O(t[n],e[n])})}function C(t,e){"string"===typeof t&&b(e)?M(P[t]||(P[t]={}),e):b(t)&&M(T,t)}function R(t,e){"string"===typeof t?b(e)?$(P[t],e):delete P[t]:b(t)&&$(T,t)}function L(t){return function(e){return t(e)||e}}function F(t){return!!t&&("object"===typeof t||"function"===typeof t)&&"function"===typeof t.then}function j(t,e){for(var n=!1,i=0;i<t.length;i++){var r=t[i];if(n)n=Promise.then(L(r));else{var a=r(e);if(F(a)&&(n=Promise.resolve(a)),!1===a)return{then:function(){}}}}return n||{then:function(t){return t(e)}}}function I(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return["success","fail","complete"].forEach(function(n){if(Array.isArray(t[n])){var i=e[n];e[n]=function(e){j(t[n],e).then(function(t){return g(i)&&i(t)||t})}}}),e}function E(t,e){var n=[];Array.isArray(T.returnValue)&&n.push.apply(n,u(T.returnValue));var i=P[t];return i&&Array.isArray(i.returnValue)&&n.push.apply(n,u(i.returnValue)),n.forEach(function(t){e=t(e)||e}),e}function z(t){var e=Object.create(null);Object.keys(T).forEach(function(t){"returnValue"!==t&&(e[t]=T[t].slice())});var n=P[t];return n&&Object.keys(n).forEach(function(t){"returnValue"!==t&&(e[t]=(e[t]||[]).concat(n[t]))}),e}function N(t,e,n){for(var i=arguments.length,r=new Array(i>3?i-3:0),a=3;a<i;a++)r[a-3]=arguments[a];var o=z(t);if(o&&Object.keys(o).length){if(Array.isArray(o.invoke)){var s=j(o.invoke,n);return s.then(function(t){return e.apply(void 0,[I(o,t)].concat(r))})}return e.apply(void 0,[I(o,n)].concat(r))}return e.apply(void 0,[n].concat(r))}var B={returnValue:function(t){return F(t)?t.then(function(t){return t[1]}).catch(function(t){return t[0]}):t}},W=/^\$|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/,U=/^create|Manager$/,H=/^on/;function V(t){return U.test(t)}function q(t){return W.test(t)}function G(t){return H.test(t)}function X(t){return t.then(function(t){return[null,t]}).catch(function(t){return[t]})}function J(t){return!(V(t)||q(t)||G(t))}function Y(t,e){return J(t)?function(){for(var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length,r=new Array(i>1?i-1:0),a=1;a<i;a++)r[a-1]=arguments[a];return g(n.success)||g(n.fail)||g(n.complete)?E(t,N.apply(void 0,[t,e,n].concat(r))):E(t,X(new Promise(function(i,a){N.apply(void 0,[t,e,Object.assign({},n,{success:i,fail:a})].concat(r)),Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then(function(n){return e.resolve(t()).then(function(){return n})},function(n){return e.resolve(t()).then(function(){throw n})})})})))}:e}var K=1e-4,Z=750,Q=!1,tt=0,et=0;function nt(){var t=wx.getSystemInfoSync(),e=t.platform,n=t.pixelRatio,i=t.windowWidth;tt=i,et=n,Q="ios"===e}function it(t,e){if(0===tt&&nt(),t=Number(t),0===t)return 0;var n=t/Z*(e||tt);return n<0&&(n=-n),n=Math.floor(n+K),0===n?1!==et&&Q?.5:1:t<0?-n:n}var rt={promiseInterceptor:B},at=Object.freeze({upx2px:it,interceptors:rt,addInterceptor:C,removeInterceptor:R}),ot={},st=[],ct=[],lt=["success","fail","cancel","complete"];function ut(t,e,n){return function(i){return e(ht(t,i,n))}}function ft(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(b(e)){var a=!0===r?e:{};for(var o in g(n)&&(n=n(e,a)||{}),e)if(x(n,o)){var s=n[o];g(s)&&(s=s(e[o],e,a)),s?y(s)?a[s]=e[o]:b(s)&&(a[s.name?s.name:o]=s.value):console.warn("app-plus ".concat(t,"暂不支持").concat(o))}else-1!==lt.indexOf(o)?a[o]=ut(t,e[o],i):r||(a[o]=e[o]);return a}return g(e)&&(e=ut(t,e,i)),e}function ht(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return g(ot.returnValue)&&(e=ot.returnValue(t,e)),ft(t,e,n,{},i)}function pt(t,e){if(x(ot,t)){var n=ot[t];return n?function(e,i){var r=n;g(n)&&(r=n(e)),e=ft(t,e,r.args,r.returnValue);var a=[e];"undefined"!==typeof i&&a.push(i);var o=wx[r.name||t].apply(wx,a);return q(t)?ht(t,o,r.returnValue,V(t)):o}:function(){console.error("app-plus 暂不支持".concat(t))}}return e}var dt=Object.create(null),vt=["onTabBarMidButtonTap","subscribePush","unsubscribePush","onPush","offPush","share"];function gt(t){return function(e){var n=e.fail,i=e.complete,r={errMsg:"".concat(t,":fail:暂不支持 ").concat(t," 方法")};g(n)&&n(r),g(i)&&i(r)}}vt.forEach(function(t){dt[t]=gt(t)});var yt=function(){return"function"===typeof getUniEmitter?getUniEmitter:function(){return t||(t=new i.default),t};var t}();function bt(t,e,n){return t[e].apply(t,n)}function xt(){return bt(yt(),"$on",Array.prototype.slice.call(arguments))}function mt(){return bt(yt(),"$off",Array.prototype.slice.call(arguments))}function _t(){return bt(yt(),"$once",Array.prototype.slice.call(arguments))}function St(){return bt(yt(),"$emit",Array.prototype.slice.call(arguments))}var wt=Object.freeze({$on:xt,$off:mt,$once:_t,$emit:St});function At(t){return"undefined"!==typeof weex?weex.requireModule(t):__requireNativePlugin__(t)}function Tt(t){t.$processed=!0,t.postMessage=function(e){plus.webview.postMessageToUniNView({type:"UniAppSubNVue",data:e},t.id)};var e=[];if(t.onMessage=function(t){e.push(t)},t.$consumeMessage=function(t){e.forEach(function(e){return e(t)})},t.__uniapp_mask_id){var n=t.__uniapp_mask,i="0"===t.__uniapp_mask_id?{setStyle:function(t){var e=t.mask;At("uni-tabview").setMask({color:e})}}:plus.webview.getWebviewById(t.__uniapp_mask_id),r=t.show,a=t.hide,o=t.close,s=function(){i.setStyle({mask:n})},c=function(){i.setStyle({mask:"none"})};t.show=function(){s();for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return r.apply(t,n)},t.hide=function(){c();for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return a.apply(t,n)},t.close=function(){c(),e=[];for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return o.apply(t,i)}}}function Pt(t){var e=plus.webview.getWebviewById(t);return e&&!e.$processed&&Tt(e),e}var kt=Object.freeze({getSubNVueById:Pt,requireNativePlugin:At}),Dt=Page,Ot=Component,Mt=/:/g,$t=_(function(t){return w(t.replace(Mt,"-"))});function Ct(t){if(wx.canIUse("nextTick")){var e=t.triggerEvent;t.triggerEvent=function(n){for(var i=arguments.length,r=new Array(i>1?i-1:0),a=1;a<i;a++)r[a-1]=arguments[a];return e.apply(t,[$t(n)].concat(r))}}}function Rt(t,e){var n=e[t];e[t]=n?function(){Ct(this);for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return n.apply(this,e)}:function(){Ct(this)}}Page=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Rt("onLoad",t),Dt(t)},Component=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Rt("created",t),Ot(t)};var Lt=["onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onResize","onTabItemTap"];function Ft(t,e){var n=t.$mp[t.mpType];e.forEach(function(e){x(n,e)&&(t[e]=n[e])})}function jt(t,e){if(!e)return!0;if(i.default.options&&Array.isArray(i.default.options[t]))return!0;if(e=e.default||e,g(e))return!!g(e.extendOptions[t])||!!(e.super&&e.super.options&&Array.isArray(e.super.options[t]));if(g(e[t]))return!0;var n=e.mixins;return Array.isArray(n)?!!n.find(function(e){return jt(t,e)}):void 0}function It(t,e,n){e.forEach(function(e){jt(e,n)&&(t[e]=function(t){return this.$vm&&this.$vm.__call_hook(e,t)})})}function Et(t,e){var n;return e=e.default||e,g(e)?(n=e,e=n.extendOptions):n=t.extend(e),[n,e]}function zt(t,e){if(Array.isArray(e)&&e.length){var n=Object.create(null);e.forEach(function(t){n[t]=!0}),t.$scopedSlots=t.$slots=n}}function Nt(t,e){t=(t||"").split(",");var n=t.length;1===n?e._$vueId=t[0]:2===n&&(e._$vueId=t[0],e._$vuePid=t[1])}function Bt(t,e){var n=t.data||{},i=t.methods||{};if("function"===typeof n)try{n=n.call(e)}catch(r){Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG&&console.warn("根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。",n)}else try{n=JSON.parse(JSON.stringify(n))}catch(r){}return b(n)||(n={}),Object.keys(i).forEach(function(t){-1!==e.__lifecycle_hooks__.indexOf(t)||x(n,t)||(n[t]=i[t])}),n}var Wt=[String,Number,Boolean,Object,Array,null];function Ut(t){return function(e,n){this.$vm&&(this.$vm[t]=e)}}function Ht(t,e){var n=t["behaviors"],i=t["extends"],r=t["mixins"],a=t["props"];a||(t["props"]=a=[]);var o=[];return Array.isArray(n)&&n.forEach(function(t){o.push(t.replace("uni://","wx".concat("://"))),"uni://form-field"===t&&(Array.isArray(a)?(a.push("name"),a.push("value")):(a["name"]={type:String,default:""},a["value"]={type:[String,Number,Boolean,Array,Object,Date],default:""}))}),b(i)&&i.props&&o.push(e({properties:qt(i.props,!0)})),Array.isArray(r)&&r.forEach(function(t){b(t)&&t.props&&o.push(e({properties:qt(t.props,!0)}))}),o}function Vt(t,e,n,i){return Array.isArray(e)&&1===e.length?e[0]:e}function qt(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=(arguments.length>2&&void 0!==arguments[2]&&arguments[2],{});return e||(n.vueId={type:String,value:""},n.vueSlots={type:null,value:[],observer:function(t,e){var n=Object.create(null);t.forEach(function(t){n[t]=!0}),this.setData({$slots:n})}}),Array.isArray(t)?t.forEach(function(t){n[t]={type:null,observer:Ut(t)}}):b(t)&&Object.keys(t).forEach(function(e){var i=t[e];if(b(i)){var r=i["default"];g(r)&&(r=r()),i.type=Vt(e,i.type),n[e]={type:-1!==Wt.indexOf(i.type)?i.type:null,value:r,observer:Ut(e)}}else{var a=Vt(e,i);n[e]={type:-1!==Wt.indexOf(a)?a:null,observer:Ut(e)}}}),n}function Gt(t){try{t.mp=JSON.parse(JSON.stringify(t))}catch(e){}return t.stopPropagation=m,t.preventDefault=m,t.target=t.target||{},x(t,"detail")||(t.detail={}),b(t.detail)&&(t.target=Object.assign({},t.target,t.detail)),t}function Xt(t,e){var n=t;return e.forEach(function(e){var i=e[0],r=e[2];if(i||"undefined"!==typeof r){var a=e[1],o=e[3],s=i?t.__get_value(i,n):n;Number.isInteger(s)?n=r:a?Array.isArray(s)?n=s.find(function(e){return t.__get_value(a,e)===r}):b(s)?n=Object.keys(s).find(function(e){return t.__get_value(a,s[e])===r}):console.error("v-for 暂不支持循环数据：",s):n=s[r],o&&(n=t.__get_value(o,n))}}),n}function Jt(t,e,n){var i={};return Array.isArray(e)&&e.length&&e.forEach(function(e,r){"string"===typeof e?e?"$event"===e?i["$"+r]=n:0===e.indexOf("$event.")?i["$"+r]=t.__get_value(e.replace("$event.",""),n):i["$"+r]=t.__get_value(e):i["$"+r]=t:i["$"+r]=Xt(t,e)}),i}function Yt(t){for(var e={},n=1;n<t.length;n++){var i=t[n];e[i[0]]=i[1]}return e}function Kt(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],r=arguments.length>4?arguments[4]:void 0,a=arguments.length>5?arguments[5]:void 0,o=!1;if(r&&(o=e.currentTarget&&e.currentTarget.dataset&&"wx"===e.currentTarget.dataset.comType,!n.length))return o?[e]:e.detail.__args__||e.detail;var s=Jt(t,i,e),c=[];return n.forEach(function(t){"$event"===t?"__set_model"!==a||r?r&&!o?c.push(e.detail.__args__[0]):c.push(e):c.push(e.target.value):Array.isArray(t)&&"o"===t[0]?c.push(Yt(t)):"string"===typeof t&&x(s,t)?c.push(s[t]):c.push(t)}),c}var Zt="~",Qt="^";function te(t,e){return t===e||"regionchange"===e&&("begin"===t||"end"===t)}function ee(t){var e=this;t=Gt(t);var n=(t.currentTarget||t.target).dataset;if(!n)return console.warn("事件信息不存在");var i=n.eventOpts||n["event-opts"];if(!i)return console.warn("事件信息不存在");var r=t.type,a=[];return i.forEach(function(n){var i=n[0],o=n[1],s=i.charAt(0)===Qt;i=s?i.slice(1):i;var c=i.charAt(0)===Zt;i=c?i.slice(1):i,o&&te(r,i)&&o.forEach(function(n){var i=n[0];if(i){var r=e.$vm;r.$options.generic&&r.$parent&&r.$parent.$parent&&(r=r.$parent.$parent);var o=r[i];if(!g(o))throw new Error(" _vm.".concat(i," is not a function"));if(c){if(o.once)return;o.once=!0}a.push(o.apply(r,Kt(e.$vm,t,n[1],n[2],s,i)))}})}),"input"===r&&1===a.length&&"undefined"!==typeof a[0]?a[0]:void 0}var ne=["onShow","onHide","onError","onPageNotFound"];function ie(t,e){var n=e.mocks,r=e.initRefs;t.$options.store&&(i.default.prototype.$store=t.$options.store),i.default.prototype.mpHost="app-plus",i.default.mixin({beforeCreate:function(){this.$options.mpType&&(this.mpType=this.$options.mpType,this.$mp=l({data:{}},this.mpType,this.$options.mpInstance),this.$scope=this.$options.mpInstance,delete this.$options.mpType,delete this.$options.mpInstance,"app"!==this.mpType&&(r(this),Ft(this,n)))}});var a={onLaunch:function(e){this.$vm||(this.$vm=t,this.$vm.$mp={app:this},this.$vm.$scope=this,this.$vm.globalData=this.globalData,this.$vm._isMounted=!0,this.$vm.__call_hook("mounted",e),this.$vm.__call_hook("onLaunch",e))}};return a.globalData=t.$options.globalData||{},It(a,ne),a}var re=["__route__","__wxExparserNodeId__","__wxWebviewId__"];function ae(t,e){var n=t.$children,i=n.find(function(t){return t.$scope._$vueId===e});if(i)return i;for(var r=n.length-1;r>=0;r--)if(i=ae(n[r],e),i)return i}function oe(t){return Behavior(t)}function se(){return!!this.route}function ce(t){this.triggerEvent("__l",t)}function le(t){var e=t.$scope;Object.defineProperty(t,"$refs",{get:function(){var t={},n=e.selectAllComponents(".vue-ref");n.forEach(function(e){var n=e.dataset.ref;t[n]=e.$vm||e});var i=e.selectAllComponents(".vue-ref-in-for");return i.forEach(function(e){var n=e.dataset.ref;t[n]||(t[n]=[]),t[n].push(e.$vm||e)}),t}})}function ue(t){var e,n=t.detail||t.value,i=n.vuePid,r=n.vueOptions;i&&(e=ae(this.$vm,i)),e||(e=this.$vm),r.parent=e}function fe(t){return ie(t,{mocks:re,initRefs:le})}var he=["onUniNViewMessage"];function pe(t){var e=fe(t);return It(e,he),e}function de(t){return App(pe(t)),t}function ve(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.isPage,r=e.initRelation,o=Et(i.default,t),s=a(o,2),c=s[0],l=s[1],u={options:{multipleSlots:!0,addGlobalClass:!0},data:Bt(l,i.default.prototype),behaviors:Ht(l,oe),properties:qt(l.props,!1,l.__file),lifetimes:{attached:function(){var t=this.properties,e={mpType:n.call(this)?"page":"component",mpInstance:this,propsData:t};Nt(t.vueId,this),r.call(this,{vuePid:this._$vuePid,vueOptions:e}),this.$vm=new c(e),zt(this.$vm,t.vueSlots),this.$vm.$mount()},ready:function(){this.$vm&&(this.$vm._isMounted=!0,this.$vm.__call_hook("mounted"),this.$vm.__call_hook("onReady"))},detached:function(){this.$vm.$destroy()}},pageLifetimes:{show:function(t){this.$vm&&this.$vm.__call_hook("onPageShow",t)},hide:function(){this.$vm&&this.$vm.__call_hook("onPageHide")},resize:function(t){this.$vm&&this.$vm.__call_hook("onPageResize",t)}},methods:{__l:ue,__e:ee}};return Array.isArray(l.wxsCallMethods)&&l.wxsCallMethods.forEach(function(t){u.methods[t]=function(e){return this.$vm[t](e)}}),n?u:[u,c]}function ge(t){return ve(t,{isPage:se,initRelation:ce})}function ye(t){var e=ge(t);return e.methods.$getAppWebview=function(){return plus.webview.getWebviewById("".concat(this.__wxWebviewId__))},e}var be=["onShow","onHide","onUnload"];function xe(t,e){e.isPage,e.initRelation;var n=ye(t);return It(n.methods,be,t),n.methods.onLoad=function(t){this.$vm.$mp.query=t,this.$vm.__call_hook("onLoad",t)},n}function me(t){return xe(t,{isPage:se,initRelation:ce})}be.push.apply(be,Lt);var _e=["onBackPress","onNavigationBarButtonTap","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked"];function Se(t){var e=me(t);return It(e.methods,_e),e}function we(t){return Component(Se(t))}function Ae(t){return Component(ye(t))}st.forEach(function(t){ot[t]=!1}),ct.forEach(function(t){var e=ot[t]&&ot[t].name?ot[t].name:t;wx.canIUse(e)||(ot[t]=!1)});var Te={};Object.keys(at).forEach(function(t){Te[t]=at[t]}),Object.keys(wt).forEach(function(t){Te[t]=wt[t]}),Object.keys(kt).forEach(function(t){Te[t]=Y(t,kt[t])}),Object.keys(wx).forEach(function(t){(x(wx,t)||x(ot,t))&&(Te[t]=Y(t,pt(t,wx[t])))}),"undefined"!==typeof t&&(t.uni=Te,t.UniEmitter=wt),wx.createApp=de,wx.createPage=we,wx.createComponent=Ae;var Pe=Te,ke=Pe;e.default=ke}).call(this,n("c8ba"))},8189:function(t){t.exports={_from:"@dcloudio/uni-stat@alpha",_id:"@dcloudio/uni-stat@2.0.0-alpha-23920191104001",_inBundle:!1,_integrity:"sha512-i7KrDHq5KsaOL52MFdUvnJeGtrxiGcNmCjbema0+F70rcpJJBfqNCMdg+uw/flUVkSCUAxtUG8jz2kivbNgSvg==",_location:"/@dcloudio/uni-stat",_phantomChildren:{},_requested:{type:"tag",registry:!0,raw:"@dcloudio/uni-stat@alpha",name:"@dcloudio/uni-stat",escapedName:"@dcloudio%2funi-stat",scope:"@dcloudio",rawSpec:"alpha",saveSpec:null,fetchSpec:"alpha"},_requiredBy:["#USER","/","/@dcloudio/vue-cli-plugin-uni"],_resolved:"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-alpha-23920191104001.tgz",_shasum:"14ce26f72ef38286f5ff1160ddc1253a8a1fdd2f",_spec:"@dcloudio/uni-stat@alpha",_where:"/Users/fxy/Documents/DCloud/HbuilderX-plugins/alpha/uniapp-cli",author:"",bugs:{url:"https://github.com/dcloudio/uni-app/issues"},bundleDependencies:!1,deprecated:!1,description:"",devDependencies:{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5",eslint:"^6.1.0",rollup:"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},files:["dist","package.json","LICENSE"],gitHead:"f9f97379203d46b0a70d7675ffd4145a28ed141b",homepage:"https://github.com/dcloudio/uni-app#readme",license:"Apache-2.0",main:"dist/index.js",name:"@dcloudio/uni-stat",repository:{type:"git",url:"git+https://github.com/dcloudio/uni-app.git",directory:"packages/uni-stat"},scripts:{build:"NODE_ENV=production rollup -c rollup.config.js",dev:"NODE_ENV=development rollup -w -c rollup.config.js"},version:"2.0.0-alpha-23920191104001"}},"921b":function(t,e,n){"use strict";(function(t){var e=n("8189");function i(t,e){return!e||"object"!==typeof e&&"function"!==typeof e?r(t):e}function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function a(t){return a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},a(t)}function o(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}function s(t,e){return s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},s(t,e)}function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function u(t,e,n){return e&&l(t.prototype,e),n&&l(t,n),t}var f=e.version,h="https://tongji.dcloud.io/uni/stat",p="https://tongji.dcloud.io/uni/stat.gif",d=1800,v=300,g=10,y="__DC_STAT_UUID",b="__DC_UUID_VALUE";function x(){var e="";if("n"===w()){try{e=plus.runtime.getDCloudId()}catch(n){e=""}return e}try{e=t.getStorageSync(y)}catch(n){e=b}if(!e){e=Date.now()+""+Math.floor(1e7*Math.random());try{t.setStorageSync(y,e)}catch(n){t.setStorageSync(y,b)}}return e}var m=function(t){var e=Object.keys(t),n=e.sort(),i={},r="";for(var a in n)i[n[a]]=t[n[a]],r+=n[a]+"="+t[n[a]]+"&";return{sign:"",options:r.substr(0,r.length-1)}},_=function(t){var e="";for(var n in t)e+=n+"="+t[n]+"&";return e.substr(0,e.length-1)},S=function(){return parseInt((new Date).getTime()/1e3)},w=function(){var t={"app-plus":"n",h5:"h5","mp-weixin":"wx","mp-alipay":"ali","mp-baidu":"bd","mp-toutiao":"tt","mp-qq":"qq"};return t["app-plus"]},A=function(){var e="";return"wx"!==w()&&"qq"!==w()||t.canIUse("getAccountInfoSync")&&(e=t.getAccountInfoSync().miniProgram.appId||""),e},T=function(){return"n"===w()?plus.runtime.version:""},P=function(){var t=w(),e="";return"n"===t&&(e=plus.runtime.channel),e},k=function(e){var n=w(),i="";return e||("wx"===n&&(i=t.getLaunchOptionsSync().scene),i)},D="First__Visit__Time",O="Last__Visit__Time",M=function(){var e=t.getStorageSync(D),n=0;return e?n=e:(n=S(),t.setStorageSync(D,n),t.removeStorageSync(O)),n},$=function(){var e=t.getStorageSync(O),n=0;return n=e||"",t.setStorageSync(O,S()),n},C="__page__residence__time",R=0,L=0,F=function(){return R=S(),"n"===w()&&t.setStorageSync(C,S()),R},j=function(){return L=S(),"n"===w()&&(R=t.getStorageSync(C)),L-R},I="Total__Visit__Count",E=function(){var e=t.getStorageSync(I),n=1;return e&&(n=e,n++),t.setStorageSync(I,n),n},z=function(t){var e={};for(var n in t)e[n]=encodeURIComponent(t[n]);return e},N=0,B=0,W=function(){var t=(new Date).getTime();return N=t,B=0,t},U=function(){var t=(new Date).getTime();return B=t,t},H=function(t){var e=0;if(0!==N&&(e=B-N),e=parseInt(e/1e3),e=e<1?1:e,"app"===t){var n=e>v;return{residenceTime:e,overtime:n}}if("page"===t){var i=e>d;return{residenceTime:e,overtime:i}}return{residenceTime:e}},V=function(){var t=getCurrentPages(),e=t[t.length-1],n=e.$vm;return"bd"===w()?n.$mp&&n.$mp.page.is:n.$scope&&n.$scope.route||n.$mp&&n.$mp.page.route},q=function(t){var e=getCurrentPages(),n=e[e.length-1],i=n.$vm,r=t._query,a=r&&"{}"!==JSON.stringify(r)?"?"+JSON.stringify(r):"";return t._query="","bd"===w()?i.$mp&&i.$mp.page.is+a:i.$scope&&i.$scope.route+a||i.$mp&&i.$mp.page.route+a},G=function(t){return!!("page"===t.mpType||t.$mp&&"page"===t.$mp.mpType||"page"===t.$options.mpType)},X=function(t,e){return t?"string"!==typeof t?(console.error("uni.report [eventName] 参数类型错误,只能为 String 类型"),!0):t.length>255?(console.error("uni.report [eventName] 参数长度不能大于 255"),!0):"string"!==typeof e&&"object"!==typeof e?(console.error("uni.report [options] 参数类型错误,只能为 String 或 Object 类型"),!0):"string"===typeof e&&e.length>255?(console.error("uni.report [options] 参数长度不能大于 255"),!0):"title"===t&&"string"!==typeof e?(console.error("uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型"),!0):void 0:(console.error("uni.report 缺少 [eventName] 参数"),!0)},J=n("5c1e").default,Y=n("a06f").default||n("a06f"),K=t.getSystemInfoSync(),Z=function(){function e(){c(this,e),this.self="",this._retry=0,this._platform="",this._query={},this._navigationBarTitle={config:"",page:"",report:"",lt:""},this._operatingTime=0,this._reportingRequestData={1:[],11:[]},this.__prevent_triggering=!1,this.__licationHide=!1,this.__licationShow=!1,this._lastPageRoute="",this.statData={uuid:x(),ut:w(),mpn:A(),ak:Y.appid,usv:f,v:T(),ch:P(),cn:"",pn:"",ct:"",t:S(),tt:"",p:"android"===K.platform?"a":"i",brand:K.brand||"",md:K.model,sv:K.system.replace(/(Android|iOS)\s/,""),mpsdk:K.SDKVersion||"",mpv:K.version||"",lang:K.language,pr:K.pixelRatio,ww:K.windowWidth,wh:K.windowHeight,sw:K.screenWidth,sh:K.screenHeight}}return u(e,[{key:"_applicationShow",value:function(){if(this.__licationHide){U();var t=H("app");if(t.overtime){var e={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(e)}this.__licationHide=!1}}},{key:"_applicationHide",value:function(t,e){this.__licationHide=!0,U();var n=H();W();var i=q(this);this._sendHideRequest({urlref:i,urlref_ts:n.residenceTime},e)}},{key:"_pageShow",value:function(){var t=q(this),e=V();if(this._navigationBarTitle.config=J&&J.pages[e]&&J.pages[e].titleNView&&J.pages[e].titleNView.titleText||J&&J.pages[e]&&J.pages[e].navigationBarTitleText||"",this.__licationShow)return W(),this.__licationShow=!1,void(this._lastPageRoute=t);U(),this._lastPageRoute=t;var n=H("page");if(n.overtime){var i={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(i)}W()}},{key:"_pageHide",value:function(){if(!this.__licationHide){U();var t=H("page");return this._sendPageRequest({url:this._lastPageRoute,urlref:this._lastPageRoute,urlref_ts:t.residenceTime}),void(this._navigationBarTitle={config:"",page:"",report:"",lt:""})}}},{key:"_login",value:function(){this._sendEventRequest({key:"login"},0)}},{key:"_share",value:function(){this._sendEventRequest({key:"share"},0)}},{key:"_payment",value:function(t){this._sendEventRequest({key:t},0)}},{key:"_sendReportRequest",value:function(t){this._navigationBarTitle.lt="1";var e=t.query&&"{}"!==JSON.stringify(t.query)?"?"+JSON.stringify(t.query):"";this.statData.lt="1",this.statData.url=t.path+e||"",this.statData.t=S(),this.statData.sc=k(t.scene),this.statData.fvts=M(),this.statData.lvts=$(),this.statData.tvc=E(),"n"===w()?this.getProperty():this.getNetworkInfo()}},{key:"_sendPageRequest",value:function(t){var e=t.url,n=t.urlref,i=t.urlref_ts;this._navigationBarTitle.lt="11";var r={ak:this.statData.ak,uuid:this.statData.uuid,lt:"11",ut:this.statData.ut,url:e,tt:this.statData.tt,urlref:n,urlref_ts:i,ch:this.statData.ch,usv:this.statData.usv,t:S(),p:this.statData.p};this.request(r)}},{key:"_sendHideRequest",value:function(t,e){var n=t.urlref,i=t.urlref_ts,r={ak:this.statData.ak,uuid:this.statData.uuid,lt:"3",ut:this.statData.ut,urlref:n,urlref_ts:i,ch:this.statData.ch,usv:this.statData.usv,t:S(),p:this.statData.p};this.request(r,e)}},{key:"_sendEventRequest",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.key,n=void 0===e?"":e,i=t.value,r=void 0===i?"":i,a=this._lastPageRoute,o={ak:this.statData.ak,uuid:this.statData.uuid,lt:"21",ut:this.statData.ut,url:a,ch:this.statData.ch,e_n:n,e_v:"object"===typeof r?JSON.stringify(r):r.toString(),usv:this.statData.usv,t:S(),p:this.statData.p};this.request(o)}},{key:"getNetworkInfo",value:function(){var e=this;t.getNetworkType({success:function(t){e.statData.net=t.networkType,e.getLocation()}})}},{key:"getProperty",value:function(){var t=this;plus.runtime.getProperty(plus.runtime.appid,function(e){t.statData.v=e.version||"",t.getNetworkInfo()})}},{key:"getLocation",value:function(){var e=this;Y.getLocation?t.getLocation({type:"wgs84",geocode:!0,success:function(t){t.address&&(e.statData.cn=t.address.country,e.statData.pn=t.address.province,e.statData.ct=t.address.city),e.statData.lat=t.latitude,e.statData.lng=t.longitude,e.request(e.statData)}}):(this.statData.lat=0,this.statData.lng=0,this.request(this.statData))}},{key:"request",value:function(e,n){var i=this,r=S(),a=this._navigationBarTitle;e.ttn=a.page,e.ttpj=a.config,e.ttc=a.report;var o=this._reportingRequestData;if("n"===w()&&(o=t.getStorageSync("__UNI__STAT__DATA")||{}),o[e.lt]||(o[e.lt]=[]),o[e.lt].push(e),"n"===w()&&t.setStorageSync("__UNI__STAT__DATA",o),!(j()<g)||n){var s=this._reportingRequestData;"n"===w()&&(s=t.getStorageSync("__UNI__STAT__DATA")),F();var c=[],l=[],u=[],h=function(t){var e=s[t];e.forEach(function(e){var n=_(e);0===t?c.push(n):3===t?u.push(n):l.push(n)})};for(var p in s)h(p);c.push.apply(c,l.concat(u));var d={usv:f,t:r,requests:JSON.stringify(c)};this._reportingRequestData={},"n"===w()&&t.removeStorageSync("__UNI__STAT__DATA"),"h5"!==e.ut?"n"!==w()||"a"!==this.statData.p?this._sendRequest(d):setTimeout(function(){i._sendRequest(d)},200):this.imageRequest(d)}}},{key:"_sendRequest",value:function(e){var n=this;t.request({url:h,method:"POST",data:e,success:function(){},fail:function(t){++n._retry<3&&setTimeout(function(){n._sendRequest(e)},1e3)}})}},{key:"imageRequest",value:function(t){var e=new Image,n=m(z(t)).options;e.src=p+"?"+n}},{key:"sendEvent",value:function(t,e){X(t,e)||("title"!==t?this._sendEventRequest({key:t,value:"object"===typeof e?JSON.stringify(e):e},1):this._navigationBarTitle.report=e)}}]),e}(),Q=function(e){function n(){var e;return c(this,n),e=i(this,a(n).call(this)),e.instance=null,"function"===typeof t.addInterceptor&&(e.addInterceptorInit(),e.interceptLogin(),e.interceptShare(!0),e.interceptRequestPayment()),e}return o(n,e),u(n,null,[{key:"getInstance",value:function(){return this.instance||(this.instance=new n),this.instance}}]),u(n,[{key:"addInterceptorInit",value:function(){var e=this;t.addInterceptor("setNavigationBarTitle",{invoke:function(t){e._navigationBarTitle.page=t.title}})}},{key:"interceptLogin",value:function(){var e=this;t.addInterceptor("login",{complete:function(){e._login()}})}},{key:"interceptShare",value:function(e){var n=this;e?t.addInterceptor("share",{success:function(){n._share()},fail:function(){n._share()}}):n._share()}},{key:"interceptRequestPayment",value:function(){var e=this;t.addInterceptor("requestPayment",{success:function(){e._payment("pay_success")},fail:function(){e._payment("pay_fail")}})}},{key:"report",value:function(t,e){this.self=e,F(),this.__licationShow=!0,this._sendReportRequest(t,!0)}},{key:"load",value:function(t,e){if(!e.$scope&&!e.$mp){var n=getCurrentPages();e.$scope=n[n.length-1]}this.self=e,this._query=t}},{key:"show",value:function(t){this.self=t,G(t)?this._pageShow(t):this._applicationShow(t)}},{key:"ready",value:function(t){}},{key:"hide",value:function(t){this.self=t,G(t)?this._pageHide(t):this._applicationHide(t,!0)}},{key:"error",value:function(t){this._platform;var e="";e=t.message?t.stack:JSON.stringify(t);var n={ak:this.statData.ak,uuid:this.statData.uuid,lt:"31",ut:this.statData.ut,ch:this.statData.ch,mpsdk:this.statData.mpsdk,mpv:this.statData.mpv,v:this.statData.v,em:e,usv:this.statData.usv,t:S(),p:this.statData.p};this.request(n)}}]),n}(Z),tt=Q.getInstance(),et=!1,nt={onLaunch:function(t){tt.report(t,this)},onReady:function(){tt.ready(this)},onLoad:function(t){if(tt.load(t,this),this.$scope&&this.$scope.onShareAppMessage){var e=this.$scope.onShareAppMessage;this.$scope.onShareAppMessage=function(t){return tt.interceptShare(!1),e.call(this,t)}}},onShow:function(){et=!1,tt.show(this)},onHide:function(){et=!0,tt.hide(this)},onUnload:function(){et?et=!1:tt.hide(this)},onError:function(t){tt.error(t)}};function it(){var e=n("66fd");(e.default||e).mixin(nt),t.report=function(t,e){tt.sendEvent(t,e)}}it()}).call(this,n("6e42")["default"])},9805:function(t,e,n){},a06f:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={appid:"__UNI__F4A9CF2"};e.default=i},c8ba:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(i){"object"===typeof window&&(n=window)}t.exports=n},ef72:function(t,e,n){"use strict";(function(e,n){var i={yAxisWidth:15,yAxisSplit:5,xAxisHeight:15,xAxisLineHeight:15,legendHeight:15,yAxisTitleWidth:15,padding:[10,10,10,10],pixelRatio:1,rotate:!1,columePadding:3,fontSize:13,dataPointShape:["circle","circle","circle","circle"],colors:["#1890ff","#2fc25b","#facc14","#f04864","#8543e0","#90ed7d"],pieChartLinePadding:15,pieChartTextPadding:5,xAxisTextPadding:3,titleColor:"#333333",titleFontSize:20,subtitleColor:"#999999",subtitleFontSize:15,toolTipPadding:3,toolTipBackground:"#000000",toolTipOpacity:.7,toolTipLineHeight:20,radarLabelTextMargin:15,gaugeLabelTextMargin:15},r=function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];if(null==t)throw new TypeError("Cannot convert undefined or null to object");if(!n||n.length<=0)return t;function r(t,e){for(var n in e)t[n]=t[n]&&"[object Object]"===t[n].toString()?r(t[n],e[n]):t[n]=e[n];return t}return n.forEach(function(e){t=r(t,e)}),t},a={toFixed:function(t,e){return e=e||2,this.isFloat(t)&&(t=t.toFixed(e)),t},isFloat:function(t){return t%1!==0},approximatelyEqual:function(t,e){return Math.abs(t-e)<1e-10},isSameSign:function(t,e){return Math.abs(t)===t&&Math.abs(e)===e||Math.abs(t)!==t&&Math.abs(e)!==e},isSameXCoordinateArea:function(t,e){return this.isSameSign(t.x,e.x)},isCollision:function(t,e){t.end={},t.end.x=t.start.x+t.width,t.end.y=t.start.y-t.height,e.end={},e.end.x=e.start.x+e.width,e.end.y=e.start.y-e.height;var n=e.start.x>t.end.x||e.end.x<t.start.x||e.end.y>t.start.y||e.start.y<t.end.y;return!n}};function o(t,e){var n=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,i=t.replace(n,function(t,e,n,i){return e+e+n+n+i+i}),r=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(i),a=parseInt(r[1],16),o=parseInt(r[2],16),s=parseInt(r[3],16);return"rgba("+a+","+o+","+s+","+e+")"}function s(t,e,n){if(isNaN(t))throw new Error("[uCharts] unvalid series data!");n=n||10,e=e||"upper";var i=1;while(n<1)n*=10,i*=10;t="upper"===e?Math.ceil(t*i):Math.floor(t*i);while(t%n!==0)"upper"===e?t++:t--;return t/i}function c(t,e,n,i){for(var r=[],a=0;a<t.length;a++){for(var o={data:[],name:e[a],color:n[a]},s=0,c=i.length;s<c;s++)if(s<t[a])o.data.push(null);else{for(var l=0,u=0;u<t[a];u++)l+=i[s-u][1];o.data.push(+(l/t[a]).toFixed(3))}r.push(o)}return r}function l(t,e,n,i,r){var a=r.width-r.area[1]-r.area[3],o=n.eachSpacing*(r.chartData.xAxisData.xAxisPoints.length-1),s=e;return e>=0?(s=0,t.event.trigger("scrollLeft")):Math.abs(e)>=o-a&&(s=a-o,t.event.trigger("scrollRight")),s}function u(t,e,n){function i(t){while(t<0)t+=2*Math.PI;while(t>2*Math.PI)t-=2*Math.PI;return t}return t=i(t),e=i(e),n=i(n),e>n&&(n+=2*Math.PI,t<e&&(t+=2*Math.PI)),t>=e&&t<=n}function f(t,e,n){var i=t,r=n-e,a=i+(n-r-i)/Math.sqrt(2);a*=-1;var o=(n-r)*(Math.sqrt(2)-1)-(n-r-i)/Math.sqrt(2);return{transX:a,transY:o}}function h(t,e){function n(t,e){return!(!t[e-1]||!t[e+1])&&(t[e].y>=Math.max(t[e-1].y,t[e+1].y)||t[e].y<=Math.min(t[e-1].y,t[e+1].y))}var i=.2,r=.2,a=null,o=null,s=null,c=null;if(e<1?(a=t[0].x+(t[1].x-t[0].x)*i,o=t[0].y+(t[1].y-t[0].y)*i):(a=t[e].x+(t[e+1].x-t[e-1].x)*i,o=t[e].y+(t[e+1].y-t[e-1].y)*i),e>t.length-3){var l=t.length-1;s=t[l].x-(t[l].x-t[l-1].x)*r,c=t[l].y-(t[l].y-t[l-1].y)*r}else s=t[e+1].x-(t[e+2].x-t[e].x)*r,c=t[e+1].y-(t[e+2].y-t[e].y)*r;return n(t,e+1)&&(c=t[e+1].y),n(t,e)&&(o=t[e].y),{ctrA:{x:a,y:o},ctrB:{x:s,y:c}}}function p(t,e,n){return{x:n.x+t,y:n.y-e}}function d(t,e){if(e)while(a.isCollision(t,e))t.start.x>0?t.start.y--:t.start.x<0?t.start.y++:t.start.y>0?t.start.y++:t.start.y--;return t}function v(t,e,n){var i=0;return t.map(function(t){if(t.color||(t.color=n.colors[i],i=(i+1)%n.colors.length),t.index||(t.index=0),t.type||(t.type=e.type),"undefined"==typeof t.show&&(t.show=!0),t.type||(t.type=e.type),t.pointShape||(t.pointShape="circle"),!t.legendShape)switch(t.type){case"line":t.legendShape="line";break;case"column":t.legendShape="rect";break;case"area":t.legendShape="triangle";break;default:t.legendShape="circle"}return t})}function g(t,e){var n=0,i=e-t;return n=i>=1e4?1e3:i>=1e3?100:i>=100?10:i>=10?5:i>=1?1:i>=.1?.1:i>=.01?.01:i>=.001?.001:i>=1e-4?1e-4:i>=1e-5?1e-5:1e-6,{minRange:s(t,"lower",n),maxRange:s(e,"upper",n)}}function y(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i.fontSize;t=String(t);t=t.split("");for(var n=0,r=0;r<t.length;r++){var a=t[r];/[a-zA-Z]/.test(a)?n+=7:/[0-9]/.test(a)?n+=5.5:/\./.test(a)?n+=2.7:/-/.test(a)?n+=3.25:/[\u4e00-\u9fa5]/.test(a)?n+=10:/\(|\)/.test(a)?n+=3.73:/\s/.test(a)?n+=2.5:/%/.test(a)?n+=8:n+=10}return n*e/10}function b(t){return t.reduce(function(t,e){return(t.data?t.data:t).concat(e.data)},[])}function x(t,e){for(var n=new Array(e),i=0;i<n.length;i++)n[i]=0;for(var r=0;r<t.length;r++)for(i=0;i<n.length;i++)n[i]+=t[r].data[i];return t.reduce(function(t,e){return(t.data?t.data:t).concat(e.data).concat(n)},[])}function m(t,e,n){var i,r;return t.clientX?e.rotate?(r=e.height-t.clientX*e.pixelRatio,i=(t.pageY-n.currentTarget.offsetTop-e.height/e.pixelRatio/2*(e.pixelRatio-1))*e.pixelRatio):(i=t.clientX*e.pixelRatio,r=(t.pageY-n.currentTarget.offsetTop-e.height/e.pixelRatio/2*(e.pixelRatio-1))*e.pixelRatio):e.rotate?(r=e.height-t.x*e.pixelRatio,i=t.y*e.pixelRatio):(i=t.x*e.pixelRatio,r=t.y*e.pixelRatio),{x:i,y:r}}function _(t,e){for(var n=[],i=0;i<t.length;i++){var r=t[i];if(null!==r.data[e]&&"undefined"!==typeof r.data[e]&&r.show){var a={};a.color=r.color,a.type=r.type,a.style=r.style,a.pointShape=r.pointShape,a.disableLegend=r.disableLegend,a.name=r.name,a.show=r.show,a.data=r.format?r.format(r.data[e]):r.data[e],n.push(a)}}return n}function S(t){var e=t.map(function(t){return y(t)});return Math.max.apply(null,e)}function w(t){for(var e=2*Math.PI/t,n=[],i=0;i<t;i++)n.push(e*i);return n.map(function(t){return-1*t+Math.PI/2})}function A(t,e,n,i){for(var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},a=t.map(function(t){return{text:r.format?r.format(t,i[n]):t.name+": "+t.data,color:t.color}}),o=[],s={x:0,y:0},c=0;c<e.length;c++){var l=e[c];"undefined"!==typeof l[n]&&null!==l[n]&&o.push(l[n])}for(var u=0;u<o.length;u++){var f=o[u];s.x=Math.round(f.x),s.y+=f.y}return s.y/=o.length,{textList:a,offset:s}}function T(t,e,n,i){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},a=t.map(function(t){return{text:r.format?r.format(t,i[n]):t.name+": "+t.data,color:t.color,disableLegend:!!t.disableLegend}});a=a.filter(function(t){if(!0!==t.disableLegend)return t});for(var o=[],s={x:0,y:0},c=0;c<e.length;c++){var l=e[c];"undefined"!==typeof l[n]&&null!==l[n]&&o.push(l[n])}for(var u=0;u<o.length;u++){var f=o[u];s.x=Math.round(f.x),s.y+=f.y}return s.y/=o.length,{textList:a,offset:s}}function P(t,e,n,i,r,a){arguments.length>6&&void 0!==arguments[6]&&arguments[6];var o=a.color.upFill,s=a.color.downFill,c=[o,o,s,o],l=[],u={text:r[i],color:null};l.push(u),e.map(function(e){0==i&&e.data[1]-e.data[0]<0?c[1]=s:(e.data[0]<t[i-1][1]&&(c[0]=s),e.data[1]<e.data[0]&&(c[1]=s),e.data[2]>t[i-1][1]&&(c[2]=o),e.data[3]<t[i-1][1]&&(c[3]=s));var n={text:"开盘："+e.data[0],color:c[0]},r={text:"收盘："+e.data[1],color:c[1]},a={text:"最低："+e.data[2],color:c[2]},u={text:"最高："+e.data[3],color:c[3]};l.push(n,r,a,u)});for(var f=[],h={x:0,y:0},p=0;p<n.length;p++){var d=n[p];"undefined"!==typeof d[i]&&null!==d[i]&&f.push(d[i])}return h.x=Math.round(f[0][0].x),{textList:l,offset:h}}function k(t){for(var e=[],n=0;n<t.length;n++)1==t[n].show&&e.push(t[n]);return e}function D(t,e,n,i){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,a=-1,o=0;return"line"!=n.type&&"area"!=n.type||"justify"!=n.xAxis.boundaryGap||(o=n.chartData.eachSpacing/2),$(t,n,i)&&e.forEach(function(e,n){t.x+r+o>e&&(a=n)}),a}function O(t,e,n){var i=-1;if(M(t,e.area)){for(var r=e.points,a=-1,o=0,s=r.length;o<s;o++)for(var c=r[o],l=0;l<c.length;l++){a+=1;var u=c[l]["area"];if(t.x>u[0]&&t.x<u[2]&&t.y>u[1]&&t.y<u[3]){i=a;break}}return i}return i}function M(t,e){return t.x>e.start.x&&t.x<e.end.x&&t.y>e.start.y&&t.y<e.end.y}function $(t,e,n){return t.x<=e.width-e.area[1]+10&&t.x>=e.area[3]-10&&t.y>=e.area[0]&&t.y<=e.height-e.area[2]}function C(t,e,n){var i=2*Math.PI/n,r=-1;if(I(t,e.center,e.radius)){var a=function(t){return t<0&&(t+=2*Math.PI),t>2*Math.PI&&(t-=2*Math.PI),t},o=Math.atan2(e.center.y-t.y,t.x-e.center.x);o*=-1,o<0&&(o+=2*Math.PI);var s=e.angleList.map(function(t){return t=a(-1*t),t});s.forEach(function(t,e){var n=a(t-i/2),s=a(t+i/2);s<n&&(s+=2*Math.PI),(o>=n&&o<=s||o+2*Math.PI>=n&&o+2*Math.PI<=s)&&(r=e)})}return r}function R(t,e){for(var n=-1,i=0,r=e.series.length;i<r;i++){var a=e.series[i];if(t.x>a.funnelArea[0]&&t.x<a.funnelArea[2]&&t.y>a.funnelArea[1]&&t.y<a.funnelArea[3]){n=i;break}}return n}function L(t,e){for(var n=-1,i=0,r=e.length;i<r;i++){var a=e[i];if(t.x>a.area[0]&&t.x<a.area[2]&&t.y>a.area[1]&&t.y<a.area[3]){n=i;break}}return n}function F(t,e){for(var n=-1,i=e.chartData.mapData,r=e.series,a=It(t.y,t.x,i.bounds,i.scale,i.xoffset,i.yoffset),o=[a.x,a.y],s=0,c=r.length;s<c;s++){var l=r[s].geometry.coordinates;if(zt(o,l)){n=s;break}}return n}function j(t,e){var n=-1;if(I(t,e.center,e.radius)){var i=Math.atan2(e.center.y-t.y,t.x-e.center.x);i=-i;for(var r=0,a=e.series.length;r<a;r++){var o=e.series[r];if(u(i,o._start_,o._start_+2*o._proportion_*Math.PI)){n=r;break}}}return n}function I(t,e,n){return Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2)<=Math.pow(n,2)}function E(t){var e=[],n=[];return t.forEach(function(t,i){null!==t?n.push(t):(n.length&&e.push(n),n=[])}),n.length&&e.push(n),e}function z(t,e,n,i){var r={area:{start:{x:0,y:0},end:{x:0,y:0},width:0,height:0,wholeWidth:0,wholeHeight:0},points:[],widthArr:[],heightArr:[]};if(!1===e.legend.show)return i.legendData=r,r;var a=e.legend.padding,o=e.legend.margin,s=e.legend.fontSize,c=15*e.pixelRatio,l=5*e.pixelRatio,u=Math.max(e.legend.lineHeight*e.pixelRatio,s);if("top"==e.legend.position||"bottom"==e.legend.position){for(var f=[],h=0,p=[],d=[],v=0;v<t.length;v++){var g=t[v],b=c+l+y(g.name||"undefined",s)+e.legend.itemGap;h+b>e.width-e.padding[1]-e.padding[3]?(f.push(d),p.push(h-e.legend.itemGap),h=b,d=[g]):(h+=b,d.push(g))}if(d.length){f.push(d),p.push(h-e.legend.itemGap),r.widthArr=p;var x=Math.max.apply(null,p);switch(e.legend.float){case"left":r.area.start.x=e.padding[3],r.area.end.x=e.padding[3]+2*a;break;case"right":r.area.start.x=e.width-e.padding[1]-x-2*a,r.area.end.x=e.width-e.padding[1];break;default:r.area.start.x=(e.width-x)/2-a,r.area.end.x=(e.width+x)/2+a}r.area.width=x+2*a,r.area.wholeWidth=x+2*a,r.area.height=f.length*u+2*a,r.area.wholeHeight=f.length*u+2*a+2*o,r.points=f}}else{var m=t.length,_=e.height-e.padding[0]-e.padding[2]-2*o-2*a,S=Math.min(Math.floor(_/u),m);switch(r.area.height=S*u+2*a,r.area.wholeHeight=S*u+2*a,e.legend.float){case"top":r.area.start.y=e.padding[0]+o,r.area.end.y=e.padding[0]+o+r.area.height;break;case"bottom":r.area.start.y=e.height-e.padding[2]-o-r.area.height,r.area.end.y=e.height-e.padding[2]-o;break;default:r.area.start.y=(e.height-r.area.height)/2,r.area.end.y=(e.height+r.area.height)/2}for(var w=m%S===0?m/S:Math.floor(m/S+1),A=[],T=0;T<w;T++){var P=t.slice(T*S,T*S+S);A.push(P)}if(r.points=A,A.length){for(var k=0;k<A.length;k++){for(var D=A[k],O=0,M=0;M<D.length;M++){var $=c+l+y(D[M].name||"undefined",s)+e.legend.itemGap;$>O&&(O=$)}r.widthArr.push(O),r.heightArr.push(D.length*u+2*a)}for(var C=0,R=0;R<r.widthArr.length;R++)C+=r.widthArr[R];r.area.width=C-e.legend.itemGap+2*a,r.area.wholeWidth=r.area.width+a}}switch(e.legend.position){case"top":r.area.start.y=e.padding[0]+o,r.area.end.y=e.padding[0]+o+r.area.height;break;case"bottom":r.area.start.y=e.height-e.padding[2]-r.area.height-o,r.area.end.y=e.height-e.padding[2]-o;break;case"left":r.area.start.x=e.padding[3],r.area.end.x=e.padding[3]+r.area.width;break;case"right":r.area.start.x=e.width-e.padding[1]-r.area.width,r.area.end.x=e.width-e.padding[1];break}return i.legendData=r,r}function N(t,e,n,i){var r={angle:0,xAxisHeight:n.xAxisHeight},a=t.map(function(t){return y(t)}),o=Math.max.apply(this,a);return 1==e.xAxis.rotateLabel&&o+2*n.xAxisTextPadding>i&&(r.angle=45*Math.PI/180,r.xAxisHeight=2*n.xAxisTextPadding+o*Math.sin(r.angle)),r}function B(t,e,n,i,r){var a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1,o=r.extra.radar||{};o.max=o.max||0;for(var s=Math.max(o.max,Math.max.apply(null,b(i))),c=[],l=function(r){var o=i[r],l={};l.color=o.color,l.legendShape=o.legendShape,l.pointShape=o.pointShape,l.data=[],o.data.forEach(function(i,r){var o={};o.angle=t[r],o.proportion=i/s,o.position=p(n*o.proportion*a*Math.cos(o.angle),n*o.proportion*a*Math.sin(o.angle),e),l.data.push(o)}),c.push(l)},u=0;u<i.length;u++)l(u);return c}function W(t,e){for(var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,i=0,r=0,a=0;a<t.length;a++){var o=t[a];o.data=null===o.data?0:o.data,i+=o.data}for(var s=0;s<t.length;s++){var c=t[s];c.data=null===c.data?0:c.data,c._proportion_=0===i?1/t.length*n:c.data/i*n,c._radius_=e}for(var l=0;l<t.length;l++){var u=t[l];u._start_=r,r+=2*u._proportion_*Math.PI}return t}function U(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;t=t.sort(function(t,e){return parseInt(e.data)-parseInt(t.data)});for(var i=0;i<t.length;i++)t[i].radius=t[i].data/t[0].data*e*n,t[i]._proportion_=t[i].data/t[0].data;return t.reverse()}function H(t,e,n,i){for(var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,a=0,o=0,s=[],c=0;c<t.length;c++){var l=t[c];l.data=null===l.data?0:l.data,a+=l.data,s.push(l.data)}for(var u=Math.min.apply(null,s),f=Math.max.apply(null,s),h=i-n,p=0;p<t.length;p++){var d=t[p];d.data=null===d.data?0:d.data,0===a||"area"==e?(d._proportion_=d.data/a*r,d._rose_proportion_=1/t.length*r):(d._proportion_=d.data/a*r,d._rose_proportion_=d.data/a*r),d._radius_=n+h*((d.data-u)/(f-u))}for(var v=0;v<t.length;v++){var g=t[v];g._start_=o,o+=2*g._rose_proportion_*Math.PI}return t}function V(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;1==n&&(n=.999999);for(var i=0;i<t.length;i++){var r=t[i];r.data=null===r.data?0:r.data;var a=void 0;a="circle"==e.type?2:e.endAngle<e.startAngle?2+e.endAngle-e.startAngle:e.startAngle-e.endAngle,r._proportion_=a*r.data*n+e.startAngle,r._proportion_>=2&&(r._proportion_=r._proportion_%2)}return t}function q(t,e,n){for(var i=e-n+1,r=e,a=0;a<t.length;a++)t[a].value=null===t[a].value?0:t[a].value,t[a]._startAngle_=r,t[a]._endAngle_=i*t[a].value+e,t[a]._endAngle_>=2&&(t[a]._endAngle_=t[a]._endAngle_%2),r=t[a]._endAngle_;return t}function G(t,e,n){for(var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,r=0;r<t.length;r++){var a=t[r];if(a.data=null===a.data?0:a.data,"auto"==n.pointer.color){for(var o=0;o<e.length;o++)if(a.data<=e[o].value){a.color=e[o].color;break}}else a.color=n.pointer.color;var s=n.startAngle-n.endAngle+1;a._endAngle_=s*a.data+n.startAngle,a._oldAngle_=n.oldAngle,n.oldAngle<n.endAngle&&(a._oldAngle_+=2),a.data>=n.oldData?a._proportion_=(a._endAngle_-a._oldAngle_)*i+n.oldAngle:a._proportion_=a._oldAngle_-(a._oldAngle_-a._endAngle_)*i,a._proportion_>=2&&(a._proportion_=a._proportion_%2)}return t}function X(t){t=W(t);for(var e=0,n=0;n<t.length;n++){var i=t[n],r=i.format?i.format(+i._proportion_.toFixed(2)):a.toFixed(100*i._proportion_)+"%";e=Math.max(e,y(r))}return e}function J(t,e,n,i,r,a){return t.map(function(t){return null===t?null:(t.width=Math.ceil((e-2*r.columePadding)/n),a.extra.column&&a.extra.column.width&&+a.extra.column.width>0&&(t.width=Math.min(t.width,+a.extra.column.width)),t.width<=0&&(t.width=1),t.x+=(i+.5-n/2)*t.width,t)})}function Y(t,e,n,i,r,a,o){return t.map(function(t){return null===t?null:(t.width=Math.ceil((e-2*r.columePadding)/2),a.extra.column&&a.extra.column.width&&+a.extra.column.width>0&&(t.width=Math.min(t.width,+a.extra.column.width)),i>0&&(t.width-=2*o),t)})}function K(t,e,n,i,r,a,o){return t.map(function(t,n){return null===t?null:(t.width=Math.ceil((e-2*r.columePadding)/2),a.extra.column&&a.extra.column.width&&+a.extra.column.width>0&&(t.width=Math.min(t.width,+a.extra.column.width)),t)})}function Z(t,e,n){var i=e.width-e.area[1]-e.area[3],r=e.enableScroll?Math.min(e.xAxis.itemCount,t.length):t.length;("line"==e.type||"area"==e.type)&&r>1&&"justify"==e.xAxis.boundaryGap&&(r-=1);var a=i/r,o=[],s=e.area[3],c=e.width-e.area[1];return t.forEach(function(t,e){o.push(s+e*a)}),"justify"!==e.xAxis.boundaryGap&&(!0===e.enableScroll?o.push(s+t.length*a):o.push(c)),{xAxisPoints:o,startX:s,endX:c,eachSpacing:a}}function Q(t,e,n,i,r,a,o){var s=arguments.length>7&&void 0!==arguments[7]?arguments[7]:1,c=[],l=a.height-a.area[0]-a.area[2];return t.forEach(function(t,o){if(null===t)c.push(null);else{var u=[];t.forEach(function(t,c){var f={};f.x=i[o]+Math.round(r/2);var h=t.value||t,p=l*(h-e)/(n-e);p*=s,f.y=a.height-Math.round(p)-a.area[2],u.push(f)}),c.push(u)}}),c}function tt(t,e,n,i,r,a,o){var s=arguments.length>7&&void 0!==arguments[7]?arguments[7]:1,c="center";"line"!=a.type&&"area"!=a.type||(c=a.xAxis.boundaryGap);var l=[],u=a.height-a.area[0]-a.area[2];return t.forEach(function(t,o){if(null===t)l.push(null);else{var f={};f.color=t.color,f.x=i[o],"center"==c&&(f.x+=Math.round(r/2));var h=t;"object"===typeof t&&null!==t&&(h=t.value);var p=u*(h-e)/(n-e);p*=s,f.y=a.height-Math.round(p)-a.area[2],l.push(f)}}),l}function et(t,e,n,i,r,a,o,s,c){var l=arguments.length>9&&void 0!==arguments[9]?arguments[9]:1,u=[],f=a.height-a.area[0]-a.area[2];return t.forEach(function(t,o){if(null===t)u.push(null);else{var h={};if(h.color=t.color,h.x=i[o]+Math.round(r/2),s>0){for(var p=0,d=0;d<=s;d++)p+=c[d].data[o];var v=p-t,g=f*(p-e)/(n-e),y=f*(v-e)/(n-e)}else p=t,g=f*(p-e)/(n-e),y=0;var b=y;g*=l,b*=l,h.y=a.height-Math.round(g)-a.area[2],h.y0=a.height-Math.round(b)-a.area[2],u.push(h)}}),u}function nt(t,e,n,i){var r,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:-1;r="stack"==i?x(t,e.categories.length):b(t);var o=[];r=r.filter(function(t){return"object"===typeof t&&null!==t?t.constructor==Array?null!==t:null!==t.value:null!==t}),r.map(function(t){"object"===typeof t?t.constructor==Array?t.map(function(t){o.push(t)}):o.push(t.value):o.push(t)});var s=0,c=0;if(o.length>0&&(s=Math.min.apply(this,o),c=Math.max.apply(this,o)),a>-1?("number"===typeof e.yAxis.data[a].min&&(s=Math.min(e.yAxis.data[a].min,s)),"number"===typeof e.yAxis.data[a].max&&(c=Math.max(e.yAxis.data[a].max,c))):("number"===typeof e.yAxis.min&&(s=Math.min(e.yAxis.min,s)),"number"===typeof e.yAxis.max&&(c=Math.max(e.yAxis.max,c))),s===c){var l=c||10;c+=l}for(var u=g(s,c),f=u.minRange,h=u.maxRange,p=[],d=(h-f)/n.yAxisSplit,v=0;v<=n.yAxisSplit;v++)p.push(f+d*v);return p.reverse()}function it(t,e,n){var i=r({},{type:""},e.extra.column),o=e.yAxis.data.length,s=new Array(o);if(o>0){for(var c=0;c<o;c++){s[c]=[];for(var l=0;l<t.length;l++)t[l].index==c&&s[c].push(t[l])}for(var u=new Array(o),f=new Array(o),h=new Array(o),p=function(t){var r=e.yAxis.data[t];1==e.yAxis.disabled&&(r.disabled=!0),u[t]=nt(s[t],e,n,i.type,t);var o=r.fontSize||n.fontSize;h[t]={position:r.position?r.position:"left",width:0},f[t]=u[t].map(function(e){return e=a.toFixed(e,6),e=r.format?r.format(Number(e)):e,h[t].width=Math.max(h[t].width,y(e,o)+5),e});var c=r.calibration?4*e.pixelRatio:0;h[t].width+=c+3*e.pixelRatio,!0===r.disabled&&(h[t].width=0)},d=0;d<o;d++)p(d)}else{u=new Array(1),f=new Array(1),h=new Array(1);u[0]=nt(t,e,n,i.type),h[0]={position:"left",width:0};var v=e.yAxis.fontSize||n.fontSize;f[0]=u[0].map(function(t){return t=a.toFixed(t,6),t=e.yAxis.format?e.yAxis.format(Number(t)):t,h[0].width=Math.max(h[0].width,y(t,v)+5),t}),h[0].width+=3*e.pixelRatio,!0===e.yAxis.disabled?(h[0]={position:"left",width:0},e.yAxis.data[0]={disabled:!0}):e.yAxis.data[0]={disabled:!1,position:"left",max:e.yAxis.max,min:e.yAxis.min,format:e.yAxis.format}}return{rangesFormat:f,ranges:u,yAxisWidth:h}}function rt(t,e,n,i,r){for(var a=[].concat(n.chartData.yAxisData.ranges),o=n.height-n.area[0]-n.area[2],s=n.area[0],c=[],l=0;l<a.length;l++){var u=a[l].shift(),f=a[l].pop(),h=u-(u-f)*(t-s)/o;h=n.yAxis.data[l].format?n.yAxis.data[l].format(Number(h)):h.toFixed(0),c.push(String(h))}return c}function at(t,e){for(var n,i,r=e.height-e.area[0]-e.area[2],a=0;a<t.length;a++){t[a].yAxisIndex=t[a].yAxisIndex?t[a].yAxisIndex:0;var o=[].concat(e.chartData.yAxisData.ranges[t[a].yAxisIndex]);n=o.pop(),i=o.shift();var s=r*(t[a].value-n)/(i-n);t[a].y=e.height-Math.round(s)-e.area[2]}return t}function ot(t,e){!0!==e.rotateLock?(t.translate(e.height,0),t.rotate(90*Math.PI/180)):!0!==e._rotate_&&(t.translate(e.height,0),t.rotate(90*Math.PI/180),e._rotate_=!0)}function st(t,e,n,i,r){i.beginPath(),"hollow"==r.dataPointShapeType?(i.setStrokeStyle(e),i.setFillStyle(r.background),i.setLineWidth(2*r.pixelRatio)):(i.setStrokeStyle("#ffffff"),i.setFillStyle(e),i.setLineWidth(1*r.pixelRatio)),"diamond"===n?t.forEach(function(t,e){null!==t&&(i.moveTo(t.x,t.y-4.5),i.lineTo(t.x-4.5,t.y),i.lineTo(t.x,t.y+4.5),i.lineTo(t.x+4.5,t.y),i.lineTo(t.x,t.y-4.5))}):"circle"===n?t.forEach(function(t,e){null!==t&&(i.moveTo(t.x+2.5*r.pixelRatio,t.y),i.arc(t.x,t.y,3*r.pixelRatio,0,2*Math.PI,!1))}):"rect"===n?t.forEach(function(t,e){null!==t&&(i.moveTo(t.x-3.5,t.y-3.5),i.rect(t.x-3.5,t.y-3.5,7,7))}):"triangle"===n&&t.forEach(function(t,e){null!==t&&(i.moveTo(t.x,t.y-4.5),i.lineTo(t.x-4.5,t.y+4.5),i.lineTo(t.x+4.5,t.y+4.5),i.lineTo(t.x,t.y-4.5))}),i.closePath(),i.fill(),i.stroke()}function ct(t,e,n,i){var r=t.title.fontSize||e.titleFontSize,a=t.subtitle.fontSize||e.subtitleFontSize,o=t.title.name||"",s=t.subtitle.name||"",c=t.title.color||e.titleColor,l=t.subtitle.color||e.subtitleColor,u=o?r:0,f=s?a:0,h=5;if(s){var p=y(s,a),d=i.x-p/2+(t.subtitle.offsetX||0),v=i.y+a/2+(t.subtitle.offsetY||0);o&&(v+=(u+h)/2),n.beginPath(),n.setFontSize(a),n.setFillStyle(l),n.fillText(s,d,v),n.closePath(),n.stroke()}if(o){var g=y(o,r),b=i.x-g/2+(t.title.offsetX||0),x=i.y+r/2+(t.title.offsetY||0);s&&(x-=(f+h)/2),n.beginPath(),n.setFontSize(r),n.setFillStyle(c),n.fillText(o,b,x),n.closePath(),n.stroke()}}function lt(t,e,n,i){var r=e.data;t.forEach(function(t,a){if(null!==t){i.beginPath(),i.setFontSize(e.textSize||n.fontSize),i.setFillStyle(e.textColor||"#666666");var o=r[a];"object"===typeof r[a]&&null!==r[a]&&(o=r[a].value);var s=e.format?e.format(o):o;i.fillText(String(s),t.x-y(s,e.textSize||n.fontSize)/2,t.y-4),i.closePath(),i.stroke()}})}function ut(t,e,n,i,r,a){e-=t.width/2+r.gaugeLabelTextMargin;for(var o=t.startAngle-t.endAngle+1,s=o/t.splitLine.splitNumber,c=t.endNumber-t.startNumber,l=c/t.splitLine.splitNumber,u=t.startAngle,f=t.startNumber,h=0;h<t.splitLine.splitNumber+1;h++){var p={x:e*Math.cos(u*Math.PI),y:e*Math.sin(u*Math.PI)},d=t.labelFormat?t.labelFormat(f):f;p.x+=n.x-y(d)/2,p.y+=n.y;var v=p.x,g=p.y;a.beginPath(),a.setFontSize(r.fontSize),a.setFillStyle(t.labelColor||"#666666"),a.fillText(d,v,g+r.fontSize/2),a.closePath(),a.stroke(),u+=s,u>=2&&(u%=2),f+=l}}function ft(t,e,n,i,r,o){var s=i.extra.radar||{};e+=r.radarLabelTextMargin,t.forEach(function(t,c){var l={x:e*Math.cos(t),y:e*Math.sin(t)},u=p(l.x,l.y,n),f=u.x,h=u.y;a.approximatelyEqual(l.x,0)?f-=y(i.categories[c]||"")/2:l.x<0&&(f-=y(i.categories[c]||"")),o.beginPath(),o.setFontSize(r.fontSize),o.setFillStyle(s.labelColor||"#666666"),o.fillText(i.categories[c]||"",f,h+r.fontSize/2),o.closePath(),o.stroke()})}function ht(t,e,n,i,r,o){for(var s=n.pieChartLinePadding,c=[],l=null,u=t.map(function(t){var e=t.format?t.format(+t._proportion_.toFixed(2)):a.toFixed(100*t._proportion_.toFixed(4))+"%";t._rose_proportion_&&(t._proportion_=t._rose_proportion_);var n=2*Math.PI-(t._start_+2*Math.PI*t._proportion_/2),i=t.color,r=t._radius_;return{arc:n,text:e,color:i,radius:r,textColor:t.textColor,textSize:t.textSize}}),f=0;f<u.length;f++){var h=u[f],v=Math.cos(h.arc)*(h.radius+s),g=Math.sin(h.arc)*(h.radius+s),b=Math.cos(h.arc)*h.radius,x=Math.sin(h.arc)*h.radius,m=v>=0?v+n.pieChartTextPadding:v-n.pieChartTextPadding,_=g,S=y(h.text),w=_;l&&a.isSameXCoordinateArea(l.start,{x:m})&&(w=m>0?Math.min(_,l.start.y):v<0?Math.max(_,l.start.y):_>0?Math.max(_,l.start.y):Math.min(_,l.start.y)),m<0&&(m-=S);var A={lineStart:{x:b,y:x},lineEnd:{x:v,y:g},start:{x:m,y:w},width:S,height:n.fontSize,text:h.text,color:h.color,textColor:h.textColor,textSize:h.textSize};l=d(A,l),c.push(l)}for(var T=0;T<c.length;T++){var P=c[T],k=p(P.lineStart.x,P.lineStart.y,o),D=p(P.lineEnd.x,P.lineEnd.y,o),O=p(P.start.x,P.start.y,o);i.setLineWidth(1*e.pixelRatio),i.setFontSize(n.fontSize),i.beginPath(),i.setStrokeStyle(P.color),i.setFillStyle(P.color),i.moveTo(k.x,k.y);var M=P.start.x<0?O.x+P.width:O.x,$=P.start.x<0?O.x-5:O.x+5;i.quadraticCurveTo(D.x,D.y,M,O.y),i.moveTo(k.x,k.y),i.stroke(),i.closePath(),i.beginPath(),i.moveTo(O.x+P.width,O.y),i.arc(M,O.y,2,0,2*Math.PI),i.closePath(),i.fill(),i.beginPath(),i.setFontSize(P.textSize||n.fontSize),i.setFillStyle(P.textColor||"#666666"),i.fillText(P.text,$,O.y+3),i.closePath(),i.stroke(),i.closePath()}}function pt(t,e,n,i){var r=e.extra.tooltip||{};r.gridType=void 0==r.gridType?"solid":r.gridType,r.dashLength=void 0==r.dashLength?4:r.dashLength;var a=e.area[0],s=e.height-e.area[2];if("dash"==r.gridType&&i.setLineDash([r.dashLength,r.dashLength]),i.setStrokeStyle(r.gridColor||"#cccccc"),i.setLineWidth(1*e.pixelRatio),i.beginPath(),i.moveTo(t,a),i.lineTo(t,s),i.stroke(),i.setLineDash([]),r.xAxisLabel){var c=e.categories[e.tooltip.index];i.setFontSize(n.fontSize);var l=y(c,n.fontSize),u=t-.5*l,f=s;i.beginPath(),i.setFillStyle(o(r.labelBgColor||n.toolTipBackground,r.labelBgOpacity||n.toolTipOpacity)),i.setStrokeStyle(r.labelBgColor||n.toolTipBackground),i.setLineWidth(1*e.pixelRatio),i.rect(u-n.toolTipPadding,f,l+2*n.toolTipPadding,n.fontSize+2*n.toolTipPadding),i.closePath(),i.stroke(),i.fill(),i.beginPath(),i.setFontSize(n.fontSize),i.setFillStyle(r.labelFontColor||n.fontColor),i.fillText(String(c),u,f+n.toolTipPadding+n.fontSize),i.closePath(),i.stroke()}}function dt(t,e,n){for(var i=r({},{type:"solid",dashLength:4,data:[]},t.extra.markLine),a=t.area[3],s=t.width-t.area[1],c=at(i.data,t),l=0;l<c.length;l++){var u=r({},{lineColor:"#DE4A42",showLabel:!1,labelFontColor:"#666666",labelBgColor:"#DFE8FF",labelBgOpacity:.8,yAxisIndex:0},c[l]);if("dash"==i.type&&n.setLineDash([i.dashLength,i.dashLength]),n.setStrokeStyle(u.lineColor),n.setLineWidth(1*t.pixelRatio),n.beginPath(),n.moveTo(a,u.y),n.lineTo(s,u.y),n.stroke(),n.setLineDash([]),u.showLabel){var f=t.yAxis.format?t.yAxis.format(Number(u.value)):u.value;n.setFontSize(e.fontSize);var h=y(f,e.fontSize),p=t.padding[3]+e.yAxisTitleWidth-e.toolTipPadding,d=Math.max(t.area[3],h+2*e.toolTipPadding),v=d-p,g=p+(v-h)/2,b=u.y;n.setFillStyle(o(u.labelBgColor,u.labelBgOpacity)),n.setStrokeStyle(u.labelBgColor),n.setLineWidth(1*t.pixelRatio),n.beginPath(),n.rect(p,b-.5*e.fontSize-e.toolTipPadding,v,e.fontSize+2*e.toolTipPadding),n.closePath(),n.stroke(),n.fill(),n.beginPath(),n.setFontSize(e.fontSize),n.setFillStyle(u.labelFontColor),n.fillText(String(f),g,b+.5*e.fontSize),n.stroke()}}}function vt(t,e,n,i,a){var s=r({},{gridType:"solid",dashLength:4},t.extra.tooltip),c=t.area[3],l=t.width-t.area[1];if("dash"==s.gridType&&n.setLineDash([s.dashLength,s.dashLength]),n.setStrokeStyle(s.gridColor||"#cccccc"),n.setLineWidth(1*t.pixelRatio),n.beginPath(),n.moveTo(c,t.tooltip.offset.y),n.lineTo(l,t.tooltip.offset.y),n.stroke(),n.setLineDash([]),s.yAxisLabel)for(var u=rt(t.tooltip.offset.y,t.series,t,e,i),f=t.chartData.yAxisData.yAxisWidth,h=t.area[3],p=t.width-t.area[1],d=0;d<u.length;d++){n.setFontSize(e.fontSize);var v=y(u[d],e.fontSize),g=void 0,b=void 0,x=void 0;"left"==f[d].position?(g=h-f[d].width,b=Math.max(g,g+v+2*e.toolTipPadding)):(g=p,b=Math.max(g+f[d].width,g+v+2*e.toolTipPadding)),x=b-g;var m=g+(x-v)/2,_=t.tooltip.offset.y;n.beginPath(),n.setFillStyle(o(s.labelBgColor||e.toolTipBackground,s.labelBgOpacity||e.toolTipOpacity)),n.setStrokeStyle(s.labelBgColor||e.toolTipBackground),n.setLineWidth(1*t.pixelRatio),n.rect(g,_-.5*e.fontSize-e.toolTipPadding,x,e.fontSize+2*e.toolTipPadding),n.closePath(),n.stroke(),n.fill(),n.beginPath(),n.setFontSize(e.fontSize),n.setFillStyle(s.labelFontColor||e.fontColor),n.fillText(u[d],m,_+.5*e.fontSize),n.closePath(),n.stroke(),"left"==f[d].position?h-=f[d].width+t.yAxis.padding:p+=f[d].width+t.yAxis.padding}}function gt(t,e,n,i,a){var s=r({},{activeBgColor:"#000000",activeBgOpacity:.08},e.extra.tooltip),c=e.area[0],l=e.height-e.area[2];i.beginPath(),i.setFillStyle(o(s.activeBgColor,s.activeBgOpacity)),i.rect(t-a/2,c,a,l-c),i.closePath(),i.fill()}function yt(t,e,n,i,a,s,c){var l=r({},{showBox:!0,bgColor:"#000000",bgOpacity:.7,fontColor:"#FFFFFF"},n.extra.tooltip),u=4*n.pixelRatio,f=5*n.pixelRatio,h=8*n.pixelRatio,p=!1;"line"!=n.type&&"area"!=n.type&&"candle"!=n.type&&"mix"!=n.type||pt(n.tooltip.offset.x,n,i,a),e=r({x:0,y:0},e),e.y-=8*n.pixelRatio;var d=t.map(function(t){return y(t.text,i.fontSize)}),v=u+f+4*i.toolTipPadding+Math.max.apply(null,d),g=2*i.toolTipPadding+t.length*i.toolTipLineHeight;0!=l.showBox&&(e.x-Math.abs(n._scrollDistance_)+h+v>n.width&&(p=!0),g+e.y>n.height&&(e.y=n.height-g),a.beginPath(),a.setFillStyle(o(l.bgColor||i.toolTipBackground,l.bgOpacity||i.toolTipOpacity)),p?(a.moveTo(e.x,e.y+10*n.pixelRatio),a.lineTo(e.x-h,e.y+10*n.pixelRatio-5*n.pixelRatio),a.lineTo(e.x-h,e.y),a.lineTo(e.x-h-Math.round(v),e.y),a.lineTo(e.x-h-Math.round(v),e.y+g),a.lineTo(e.x-h,e.y+g),a.lineTo(e.x-h,e.y+10*n.pixelRatio+5*n.pixelRatio),a.lineTo(e.x,e.y+10*n.pixelRatio)):(a.moveTo(e.x,e.y+10*n.pixelRatio),a.lineTo(e.x+h,e.y+10*n.pixelRatio-5*n.pixelRatio),a.lineTo(e.x+h,e.y),a.lineTo(e.x+h+Math.round(v),e.y),a.lineTo(e.x+h+Math.round(v),e.y+g),a.lineTo(e.x+h,e.y+g),a.lineTo(e.x+h,e.y+10*n.pixelRatio+5*n.pixelRatio),a.lineTo(e.x,e.y+10*n.pixelRatio)),a.closePath(),a.fill(),t.forEach(function(t,n){if(null!==t.color){a.beginPath(),a.setFillStyle(t.color);var r=e.x+h+2*i.toolTipPadding,o=e.y+(i.toolTipLineHeight-i.fontSize)/2+i.toolTipLineHeight*n+i.toolTipPadding+1;p&&(r=e.x-v-h+2*i.toolTipPadding),a.fillRect(r,o,u,i.fontSize),a.closePath()}}),t.forEach(function(t,n){var r=e.x+h+2*i.toolTipPadding+u+f;p&&(r=e.x-v-h+2*i.toolTipPadding+ +u+f);var o=e.y+(i.toolTipLineHeight-i.fontSize)/2+i.toolTipLineHeight*n+i.toolTipPadding;a.beginPath(),a.setFontSize(i.fontSize),a.setFillStyle(l.fontColor),a.fillText(t.text,r,o+i.fontSize),a.closePath(),a.stroke()}))}function bt(t,e,n,i){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,o=e.chartData.xAxisData,s=o.xAxisPoints,c=o.eachSpacing,l=r({},{type:"group",width:c/2,meter:{border:4,fillColor:"#FFFFFF"}},e.extra.column),u=[];i.save();var f=-2,h=s.length+2;return e._scrollDistance_&&0!==e._scrollDistance_&&!0===e.enableScroll&&(i.translate(e._scrollDistance_,0),f=Math.floor(-e._scrollDistance_/c)-2,h=f+e.xAxis.itemCount+4),e.tooltip&&e.tooltip.textList&&e.tooltip.textList.length&&1===a&&gt(e.tooltip.offset.x,e,n,i,c),t.forEach(function(r,o){var p,d,v;p=[].concat(e.chartData.yAxisData.ranges[r.index]),d=p.pop(),v=p.shift();var g=r.data;switch(l.type){case"group":var y=tt(g,d,v,s,c,e,n,a),b=et(g,d,v,s,c,e,n,o,t,a);u.push(b),y=J(y,c,t.length,o,n,e);for(var x=0;x<y.length;x++){var m=y[x];if(null!==m&&x>f&&x<h){i.beginPath(),i.setStrokeStyle(m.color||r.color),i.setLineWidth(1),i.setFillStyle(m.color||r.color);var _=m.x-m.width/2,S=e.height-m.y-e.area[2];i.moveTo(_-1,m.y),i.lineTo(_+m.width-2,m.y),i.lineTo(_+m.width-2,e.height-e.area[2]),i.lineTo(_,e.height-e.area[2]),i.lineTo(_,m.y),i.closePath(),i.stroke(),i.fill()}}break;case"stack":y=et(g,d,v,s,c,e,n,o,t,a);u.push(y),y=K(y,c,t.length,o,n,e,t);for(var w=0;w<y.length;w++){var A=y[w];if(null!==A&&w>f&&w<h){i.beginPath(),i.setFillStyle(A.color||r.color);_=A.x-A.width/2+1,S=e.height-A.y-e.area[2];var T=e.height-A.y0-e.area[2];o>0&&(S-=T),i.moveTo(_,A.y),i.fillRect(_,A.y,A.width-2,S),i.closePath(),i.fill()}}break;case"meter":y=tt(g,d,v,s,c,e,n,a);if(u.push(y),y=Y(y,c,t.length,o,n,e,l.meter.border),0==o)for(var P=0;P<y.length;P++){var k=y[P];if(null!==k&&P>f&&P<h){i.beginPath(),i.setFillStyle(l.meter.fillColor);_=k.x-k.width/2,S=e.height-k.y-e.area[2];i.moveTo(_,k.y),i.fillRect(_,k.y,k.width,S),i.closePath(),i.fill(),l.meter.border>0&&(i.beginPath(),i.setStrokeStyle(r.color),i.setLineWidth(l.meter.border*e.pixelRatio),i.moveTo(_+.5*l.meter.border,k.y+S),i.lineTo(_+.5*l.meter.border,k.y+.5*l.meter.border),i.lineTo(_+k.width-.5*l.meter.border,k.y+.5*l.meter.border),i.lineTo(_+k.width-.5*l.meter.border,k.y+S),i.stroke())}}else for(var D=0;D<y.length;D++){var O=y[D];if(null!==O&&D>f&&D<h){i.beginPath(),i.setFillStyle(O.color||r.color);_=O.x-O.width/2,S=e.height-O.y-e.area[2];i.moveTo(_,O.y),i.fillRect(_,O.y,O.width,S),i.closePath(),i.fill()}}break}}),!1!==e.dataLabel&&1===a&&t.forEach(function(r,o){var u,f,h;u=[].concat(e.chartData.yAxisData.ranges[r.index]),f=u.pop(),h=u.shift();var p=r.data;switch(l.type){case"group":var d=tt(p,f,h,s,c,e,n,a);d=J(d,c,t.length,o,n,e),lt(d,r,n,i);break;case"stack":d=et(p,f,h,s,c,e,n,o,t,a);lt(d,r,n,i);break;case"meter":d=tt(p,f,h,s,c,e,n,a);lt(d,r,n,i);break}}),i.restore(),{xAxisPoints:s,calPoints:u,eachSpacing:c}}function xt(t,e,n,i,a){var o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1,s=r({},{color:{},average:{}},n.extra.candle);s.color=r({},{upLine:"#f04864",upFill:"#f04864",downLine:"#2fc25b",downFill:"#2fc25b"},s.color),s.average=r({},{show:!1,name:[],day:[],color:i.colors},s.average),n.extra.candle=s;var c=n.chartData.xAxisData,l=c.xAxisPoints,u=c.eachSpacing,f=[];a.save();var p=-2,d=l.length+2,v=0,g=n.width+u;return n._scrollDistance_&&0!==n._scrollDistance_&&!0===n.enableScroll&&(a.translate(n._scrollDistance_,0),p=Math.floor(-n._scrollDistance_/u)-2,d=p+n.xAxis.itemCount+4,v=-n._scrollDistance_-u+n.area[3],g=v+(n.xAxis.itemCount+4)*u),s.average.show&&e.forEach(function(t,e){var r,s,c;r=[].concat(n.chartData.yAxisData.ranges[t.index]),s=r.pop(),c=r.shift();for(var f=t.data,p=tt(f,s,c,l,u,n,i,o),d=E(p),y=0;y<d.length;y++){var b=d[y];if(a.beginPath(),a.setStrokeStyle(t.color),a.setLineWidth(1),1===b.length)a.moveTo(b[0].x,b[0].y),a.arc(b[0].x,b[0].y,1,0,2*Math.PI);else{a.moveTo(b[0].x,b[0].y);for(var x=0,m=0;m<b.length;m++){var _=b[m];if(0==x&&_.x>v&&(a.moveTo(_.x,_.y),x=1),m>0&&_.x>v&&_.x<g){var S=h(b,m-1);a.bezierCurveTo(S.ctrA.x,S.ctrA.y,S.ctrB.x,S.ctrB.y,_.x,_.y)}}a.moveTo(b[0].x,b[0].y)}a.closePath(),a.stroke()}}),t.forEach(function(t,e){var r,c,h;r=[].concat(n.chartData.yAxisData.ranges[t.index]),c=r.pop(),h=r.shift();var v=t.data,g=Q(v,c,h,l,u,n,i,o);f.push(g);for(var y=E(g),b=0;b<y[0].length;b++)if(b>p&&b<d){var x=y[0][b];a.beginPath(),v[b][1]-v[b][0]>0?(a.setStrokeStyle(s.color.upLine),a.setFillStyle(s.color.upFill),a.setLineWidth(1*n.pixelRatio),a.moveTo(x[3].x,x[3].y),a.lineTo(x[1].x,x[1].y),a.lineTo(x[1].x-u/4,x[1].y),a.lineTo(x[0].x-u/4,x[0].y),a.lineTo(x[0].x,x[0].y),a.lineTo(x[2].x,x[2].y),a.lineTo(x[0].x,x[0].y),a.lineTo(x[0].x+u/4,x[0].y),a.lineTo(x[1].x+u/4,x[1].y),a.lineTo(x[1].x,x[1].y),a.moveTo(x[3].x,x[3].y)):(a.setStrokeStyle(s.color.downLine),a.setFillStyle(s.color.downFill),a.setLineWidth(1*n.pixelRatio),a.moveTo(x[3].x,x[3].y),a.lineTo(x[0].x,x[0].y),a.lineTo(x[0].x-u/4,x[0].y),a.lineTo(x[1].x-u/4,x[1].y),a.lineTo(x[1].x,x[1].y),a.lineTo(x[2].x,x[2].y),a.lineTo(x[1].x,x[1].y),a.lineTo(x[1].x+u/4,x[1].y),a.lineTo(x[0].x+u/4,x[0].y),a.lineTo(x[0].x,x[0].y),a.moveTo(x[3].x,x[3].y)),a.closePath(),a.fill(),a.stroke()}}),a.restore(),{xAxisPoints:l,calPoints:f,eachSpacing:u}}function mt(t,e,n,i){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,s=r({},{type:"straight",opacity:.2,addLine:!1,width:2,gradient:!1},e.extra.area),c=e.chartData.xAxisData,l=c.xAxisPoints,u=c.eachSpacing,f=e.height-e.area[2],p=[];i.save();var d=0,v=e.width+u;return e._scrollDistance_&&0!==e._scrollDistance_&&!0===e.enableScroll&&(i.translate(e._scrollDistance_,0),d=-e._scrollDistance_-u+e.area[3],v=d+(e.xAxis.itemCount+4)*u),t.forEach(function(t,r){var c,g,y;c=[].concat(e.chartData.yAxisData.ranges[t.index]),g=c.pop(),y=c.shift();var b=t.data,x=tt(b,g,y,l,u,e,n,a);p.push(x);for(var m=E(x),_=0;_<m.length;_++){var S=m[_];if(i.beginPath(),i.setStrokeStyle(o(t.color,s.opacity)),s.gradient){var w=i.createLinearGradient(0,e.area[0],0,e.height-e.area[2]);w.addColorStop("0",o(t.color,s.opacity)),w.addColorStop("1.0",o("#FFFFFF",.1)),i.setFillStyle(w)}else i.setFillStyle(o(t.color,s.opacity));if(i.setLineWidth(s.width*e.pixelRatio),S.length>1){var A=S[0],T=S[S.length-1];i.moveTo(A.x,A.y);var P=0;if("curve"===s.type)for(var k=0;k<S.length;k++){var D=S[k];if(0==P&&D.x>d&&(i.moveTo(D.x,D.y),P=1),k>0&&D.x>d&&D.x<v){var O=h(S,k-1);i.bezierCurveTo(O.ctrA.x,O.ctrA.y,O.ctrB.x,O.ctrB.y,D.x,D.y)}}else for(var M=0;M<S.length;M++){var $=S[M];0==P&&$.x>d&&(i.moveTo($.x,$.y),P=1),M>0&&$.x>d&&$.x<v&&i.lineTo($.x,$.y)}i.lineTo(T.x,f),i.lineTo(A.x,f),i.lineTo(A.x,A.y)}else{var C=S[0];i.moveTo(C.x-u/2,C.y),i.lineTo(C.x+u/2,C.y),i.lineTo(C.x+u/2,f),i.lineTo(C.x-u/2,f),i.moveTo(C.x-u/2,C.y)}if(i.closePath(),i.fill(),s.addLine){if("dash"==t.lineType){var R=t.dashLength?t.dashLength:8;R*=e.pixelRatio,i.setLineDash([R,R])}if(i.beginPath(),i.setStrokeStyle(t.color),i.setLineWidth(s.width*e.pixelRatio),1===S.length)i.moveTo(S[0].x,S[0].y),i.arc(S[0].x,S[0].y,1,0,2*Math.PI);else{i.moveTo(S[0].x,S[0].y);var L=0;if("curve"===s.type)for(var F=0;F<S.length;F++){var j=S[F];if(0==L&&j.x>d&&(i.moveTo(j.x,j.y),L=1),F>0&&j.x>d&&j.x<v){var I=h(S,F-1);i.bezierCurveTo(I.ctrA.x,I.ctrA.y,I.ctrB.x,I.ctrB.y,j.x,j.y)}}else for(var z=0;z<S.length;z++){var N=S[z];0==L&&N.x>d&&(i.moveTo(N.x,N.y),L=1),z>0&&N.x>d&&N.x<v&&i.lineTo(N.x,N.y)}i.moveTo(S[0].x,S[0].y)}i.stroke(),i.setLineDash([])}}!1!==e.dataPointShape&&st(x,t.color,t.pointShape,i,e)}),!1!==e.dataLabel&&1===a&&t.forEach(function(t,r){var o,s,c;o=[].concat(e.chartData.yAxisData.ranges[t.index]),s=o.pop(),c=o.shift();var f=t.data,h=tt(f,s,c,l,u,e,n,a);lt(h,t,n,i)}),i.restore(),{xAxisPoints:l,calPoints:p,eachSpacing:u}}function _t(t,e,n,i){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,o=r({},{type:"straight",width:2},e.extra.line);o.width*=e.pixelRatio;var s=e.chartData.xAxisData,c=s.xAxisPoints,l=s.eachSpacing,u=[];i.save();var f=0,p=e.width+l;return e._scrollDistance_&&0!==e._scrollDistance_&&!0===e.enableScroll&&(i.translate(e._scrollDistance_,0),f=-e._scrollDistance_-l+e.area[3],p=f+(e.xAxis.itemCount+4)*l),t.forEach(function(t,r){var s,d,v;s=[].concat(e.chartData.yAxisData.ranges[t.index]),d=s.pop(),v=s.shift();var g=t.data,y=tt(g,d,v,c,l,e,n,a);u.push(y);var b=E(y);if("dash"==t.lineType){var x=t.dashLength?t.dashLength:8;x*=e.pixelRatio,i.setLineDash([x,x])}i.beginPath(),i.setStrokeStyle(t.color),i.setLineWidth(o.width),b.forEach(function(t,e){if(1===t.length)i.moveTo(t[0].x,t[0].y),i.arc(t[0].x,t[0].y,1,0,2*Math.PI);else{i.moveTo(t[0].x,t[0].y);var n=0;if("curve"===o.type)for(var r=0;r<t.length;r++){var a=t[r];if(0==n&&a.x>f&&(i.moveTo(a.x,a.y),n=1),r>0&&a.x>f&&a.x<p){var s=h(t,r-1);i.bezierCurveTo(s.ctrA.x,s.ctrA.y,s.ctrB.x,s.ctrB.y,a.x,a.y)}}else for(var c=0;c<t.length;c++){var l=t[c];0==n&&l.x>f&&(i.moveTo(l.x,l.y),n=1),c>0&&l.x>f&&l.x<p&&i.lineTo(l.x,l.y)}i.moveTo(t[0].x,t[0].y)}}),i.stroke(),i.setLineDash([]),!1!==e.dataPointShape&&st(y,t.color,t.pointShape,i,e)}),!1!==e.dataLabel&&1===a&&t.forEach(function(t,r){var o,s,u;o=[].concat(e.chartData.yAxisData.ranges[t.index]),s=o.pop(),u=o.shift();var f=t.data,h=tt(f,s,u,c,l,e,n,a);lt(h,t,n,i)}),i.restore(),{xAxisPoints:c,calPoints:u,eachSpacing:l}}function St(t,e,n,i){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,a=e.chartData.xAxisData,s=a.xAxisPoints,c=a.eachSpacing,l=e.height-e.area[2],u=[],f=0,p=0;t.forEach(function(t,e){"column"==t.type&&(p+=1)}),i.save();var d=-2,v=s.length+2,g=0,y=e.width+c;if(e._scrollDistance_&&0!==e._scrollDistance_&&!0===e.enableScroll&&(i.translate(e._scrollDistance_,0),d=Math.floor(-e._scrollDistance_/c)-2,v=d+e.xAxis.itemCount+4,g=-e._scrollDistance_-c+e.area[3],y=g+(e.xAxis.itemCount+4)*c),t.forEach(function(t,a){var b,x,m;b=[].concat(e.chartData.yAxisData.ranges[t.index]),x=b.pop(),m=b.shift();var _=t.data,S=tt(_,x,m,s,c,e,n,r);if(u.push(S),"column"==t.type){S=J(S,c,p,f,n,e);for(var w=0;w<S.length;w++){var A=S[w];if(null!==A&&w>d&&w<v){i.beginPath(),i.setStrokeStyle(A.color||t.color),i.setLineWidth(1),i.setFillStyle(A.color||t.color);var T=A.x-A.width/2;e.height,A.y,e.area[2];i.moveTo(T,A.y),i.moveTo(T-1,A.y),i.lineTo(T+A.width-2,A.y),i.lineTo(T+A.width-2,e.height-e.area[2]),i.lineTo(T,e.height-e.area[2]),i.lineTo(T,A.y),i.closePath(),i.stroke(),i.fill(),i.closePath(),i.fill()}}f+=1}if("area"==t.type)for(var P=E(S),k=0;k<P.length;k++){var D=P[k];if(i.beginPath(),i.setStrokeStyle(t.color),i.setFillStyle(o(t.color,.2)),i.setLineWidth(2*e.pixelRatio),D.length>1){var O=D[0],M=D[D.length-1];i.moveTo(O.x,O.y);var $=0;if("curve"===t.style)for(var C=0;C<D.length;C++){var R=D[C];if(0==$&&R.x>g&&(i.moveTo(R.x,R.y),$=1),C>0&&R.x>g&&R.x<y){var L=h(D,C-1);i.bezierCurveTo(L.ctrA.x,L.ctrA.y,L.ctrB.x,L.ctrB.y,R.x,R.y)}}else for(var F=0;F<D.length;F++){var j=D[F];0==$&&j.x>g&&(i.moveTo(j.x,j.y),$=1),F>0&&j.x>g&&j.x<y&&i.lineTo(j.x,j.y)}i.lineTo(M.x,l),i.lineTo(O.x,l),i.lineTo(O.x,O.y)}else{var I=D[0];i.moveTo(I.x-c/2,I.y),i.lineTo(I.x+c/2,I.y),i.lineTo(I.x+c/2,l),i.lineTo(I.x-c/2,l),i.moveTo(I.x-c/2,I.y)}i.closePath(),i.fill()}if("line"==t.type){var z=E(S);z.forEach(function(n,r){if("dash"==t.lineType){var a=t.dashLength?t.dashLength:8;a*=e.pixelRatio,i.setLineDash([a,a])}if(i.beginPath(),i.setStrokeStyle(t.color),i.setLineWidth(2*e.pixelRatio),1===n.length)i.moveTo(n[0].x,n[0].y),i.arc(n[0].x,n[0].y,1,0,2*Math.PI);else{i.moveTo(n[0].x,n[0].y);var o=0;if("curve"==t.style)for(var s=0;s<n.length;s++){var c=n[s];if(0==o&&c.x>g&&(i.moveTo(c.x,c.y),o=1),s>0&&c.x>g&&c.x<y){var l=h(n,s-1);i.bezierCurveTo(l.ctrA.x,l.ctrA.y,l.ctrB.x,l.ctrB.y,c.x,c.y)}}else for(var u=0;u<n.length;u++){var f=n[u];0==o&&f.x>g&&(i.moveTo(f.x,f.y),o=1),u>0&&f.x>g&&f.x<y&&i.lineTo(f.x,f.y)}i.moveTo(n[0].x,n[0].y)}i.stroke(),i.setLineDash([])})}"point"==t.type&&(t.addPoint=!0),1==t.addPoint&&"column"!==t.type&&st(S,t.color,t.pointShape,i,e)}),!1!==e.dataLabel&&1===r){f=0;t.forEach(function(t,a){var o,l,u;o=[].concat(e.chartData.yAxisData.ranges[t.index]),l=o.pop(),u=o.shift();var h=t.data,d=tt(h,l,u,s,c,e,n,r);"column"!==t.type?lt(d,t,n,i):(d=J(d,c,p,f,n,e),lt(d,t,n,i),f+=1)})}return i.restore(),{xAxisPoints:s,calPoints:u,eachSpacing:c}}function wt(t,e,n,i,r,a){var o=t.extra.tooltip||{};o.horizentalLine&&t.tooltip&&1===i&&("line"==t.type||"area"==t.type||"column"==t.type||"candle"==t.type||"mix"==t.type)&&vt(t,e,n,r,a),n.save(),t._scrollDistance_&&0!==t._scrollDistance_&&!0===t.enableScroll&&n.translate(t._scrollDistance_,0),t.tooltip&&t.tooltip.textList&&t.tooltip.textList.length&&1===i&&yt(t.tooltip.textList,t.tooltip.offset,t,e,n,r,a),n.restore()}function At(t,e,n,i){var r=e.chartData.xAxisData,a=r.xAxisPoints,o=r.startX,s=r.endX,c=r.eachSpacing,l="center";"line"!=e.type&&"area"!=e.type||(l=e.xAxis.boundaryGap);var u=e.height-e.area[2],h=e.area[0];if(e.enableScroll&&e.xAxis.scrollShow){var p=e.height-e.area[2]+n.xAxisHeight,d=s-o,v=c*(a.length-1),g=d*d/v,b=0;e._scrollDistance_&&(b=-e._scrollDistance_*d/v),i.beginPath(),i.setLineCap("round"),i.setLineWidth(6*e.pixelRatio),i.setStrokeStyle(e.xAxis.scrollBackgroundColor||"#EFEBEF"),i.moveTo(o,p),i.lineTo(s,p),i.stroke(),i.closePath(),i.beginPath(),i.setLineCap("round"),i.setLineWidth(6*e.pixelRatio),i.setStrokeStyle(e.xAxis.scrollColor||"#A6A6A6"),i.moveTo(o+b,p),i.lineTo(o+b+g,p),i.stroke(),i.closePath(),i.setLineCap("butt")}if(i.save(),e._scrollDistance_&&0!==e._scrollDistance_&&i.translate(e._scrollDistance_,0),!0===e.xAxis.calibration&&(i.setStrokeStyle(e.xAxis.gridColor||"#cccccc"),i.setLineCap("butt"),i.setLineWidth(1*e.pixelRatio),a.forEach(function(t,n){n>0&&(i.beginPath(),i.moveTo(t-c/2,u),i.lineTo(t-c/2,u+3*e.pixelRatio),i.closePath(),i.stroke())})),!0!==e.xAxis.disableGrid&&(i.setStrokeStyle(e.xAxis.gridColor||"#cccccc"),i.setLineCap("butt"),i.setLineWidth(1*e.pixelRatio),"dash"==e.xAxis.gridType&&i.setLineDash([e.xAxis.dashLength,e.xAxis.dashLength]),e.xAxis.gridEval=e.xAxis.gridEval||1,a.forEach(function(t,n){n%e.xAxis.gridEval==0&&(i.beginPath(),i.moveTo(t,u),i.lineTo(t,h),i.stroke())}),i.setLineDash([])),!0!==e.xAxis.disabled){var x=t.length;e.xAxis.labelCount&&(x=e.xAxis.itemCount?Math.ceil(t.length/e.xAxis.itemCount*e.xAxis.labelCount):e.xAxis.labelCount,x-=1);for(var m=Math.ceil(t.length/x),_=[],S=t.length,w=0;w<S;w++)w%m!==0?_.push(""):_.push(t[w]);_[S-1]=t[S-1];var A=e.xAxis.fontSize||n.fontSize;0===n._xAxisTextAngle_?_.forEach(function(t,r){var o=-y(t,A)/2;"center"==l&&(o+=c/2);var s=0;e.xAxis.scrollShow&&(s=6*e.pixelRatio),i.beginPath(),i.setFontSize(A),i.setFillStyle(e.xAxis.fontColor||"#666666"),i.fillText(t,a[r]+o,u+A+(n.xAxisHeight-s-A)/2),i.closePath(),i.stroke()}):_.forEach(function(t,r){i.save(),i.beginPath(),i.setFontSize(A),i.setFillStyle(e.xAxis.fontColor||"#666666");var o=y(t),s=-o;"center"==l&&(s+=c/2);var h=f(a[r]+c/2,u+A/2+5,e.height),p=h.transX+15,d=h.transY;i.rotate(-1*n._xAxisTextAngle_),i.translate(p,d),i.fillText(t,a[r]+s,u+A+5),i.closePath(),i.stroke(),i.restore()})}i.restore(),e.xAxis.axisLine&&(i.beginPath(),i.setStrokeStyle(e.xAxis.axisLineColor),i.setLineWidth(1*e.pixelRatio),i.moveTo(o,e.height-e.area[2]),i.lineTo(s,e.height-e.area[2]),i.stroke())}function Tt(t,e,n,i){if(!0!==e.yAxis.disableGrid){for(var r=e.height-e.area[0]-e.area[2],a=r/n.yAxisSplit,o=e.area[3],s=e.chartData.xAxisData.xAxisPoints,c=e.chartData.xAxisData.eachSpacing,l=c*(s.length-1),u=o+l,f=[],h=0;h<n.yAxisSplit+1;h++)f.push(e.height-e.area[2]-a*h);i.save(),e._scrollDistance_&&0!==e._scrollDistance_&&i.translate(e._scrollDistance_,0),"dash"==e.yAxis.gridType&&i.setLineDash([e.yAxis.dashLength,e.yAxis.dashLength]),i.setStrokeStyle(e.yAxis.gridColor),i.setLineWidth(1*e.pixelRatio),f.forEach(function(t,e){i.beginPath(),i.moveTo(o,t),i.lineTo(u,t),i.stroke()}),i.setLineDash([]),i.restore()}}function Pt(t,e,n,i){if(!0!==e.yAxis.disabled){var r=e.height-e.area[0]-e.area[2],a=r/n.yAxisSplit,o=e.area[3],s=e.width-e.area[1],c=e.height-e.area[2],l=c+n.xAxisHeight;e.xAxis.scrollShow&&(l-=3*e.pixelRatio),e.xAxis.rotateLabel&&(l=e.height-e.area[2]+3),i.beginPath(),i.setFillStyle(e.background||"#ffffff"),e._scrollDistance_<0&&i.fillRect(0,0,o,l),1==e.enableScroll&&i.fillRect(s,0,e.width,l),i.closePath(),i.stroke();for(var u=[],f=0;f<=n.yAxisSplit;f++)u.push(e.area[0]+a*f);for(var h=e.area[3],p=e.width-e.area[1],d=function(t){var r=e.yAxis.data[t];if(!0!==r.disabled){var a=e.chartData.yAxisData.rangesFormat[t],o=r.fontSize||n.fontSize,s=e.chartData.yAxisData.yAxisWidth[t];if(a.forEach(function(t,n){var a=u[n]?u[n]:c;i.beginPath(),i.setFontSize(o),i.setLineWidth(1*e.pixelRatio),i.setStrokeStyle(r.axisLineColor||"#cccccc"),i.setFillStyle(r.fontColor||"#666666"),"left"==s.position?(i.fillText(String(t),h-s.width,a+o/2),1==r.calibration&&(i.moveTo(h,a),i.lineTo(h-3*e.pixelRatio,a))):(i.fillText(String(t),p+4*e.pixelRatio,a+o/2),1==r.calibration&&(i.moveTo(p,a),i.lineTo(p+3*e.pixelRatio,a))),i.closePath(),i.stroke()}),!1!==r.axisLine&&(i.beginPath(),i.setStrokeStyle(r.axisLineColor||"#cccccc"),i.setLineWidth(1*e.pixelRatio),"left"==s.position?(i.moveTo(h,e.height-e.area[2]),i.lineTo(h,e.area[0])):(i.moveTo(p,e.height-e.area[2]),i.lineTo(p,e.area[0])),i.stroke()),e.yAxis.showTitle){var l=r.titleFontSize||n.fontSize,f=r.title;i.beginPath(),i.setFontSize(l),i.setFillStyle(r.titleFontColor||"#666666"),"left"==s.position?i.fillText(f,h-y(f,l)/2,e.area[0]-10*e.pixelRatio):i.fillText(f,p-y(f,l)/2,e.area[0]-10*e.pixelRatio),i.closePath(),i.stroke()}"left"==s.position?h-=s.width+e.yAxis.padding:p+=s.width+e.yAxis.padding}},v=0;v<e.yAxis.data.length;v++)d(v)}}function kt(t,e,n,i,r){if(!1!==e.legend.show){var a=r.legendData,o=a.points,s=a.area,c=e.legend.padding,l=e.legend.fontSize,u=15*e.pixelRatio,f=5*e.pixelRatio,h=e.legend.itemGap,p=Math.max(e.legend.lineHeight*e.pixelRatio,l);i.beginPath(),i.setLineWidth(e.legend.borderWidth),i.setStrokeStyle(e.legend.borderColor),i.setFillStyle(e.legend.backgroundColor),i.moveTo(s.start.x,s.start.y),i.rect(s.start.x,s.start.y,s.width,s.height),i.closePath(),i.fill(),i.stroke(),o.forEach(function(t,r){var o=0,d=0;o=a.widthArr[r],d=a.heightArr[r];var v=0,g=0;"top"==e.legend.position||"bottom"==e.legend.position?(v=s.start.x+(s.width-o)/2,g=s.start.y+c+r*p):(o=0==r?0:a.widthArr[r-1],v=s.start.x+c+o,g=s.start.y+c+(s.height-d)/2),i.setFontSize(n.fontSize);for(var b=0;b<t.length;b++){var x=t[b];switch(x.area=[0,0,0,0],x.area[0]=v,x.area[1]=g,x.area[3]=g+p,i.beginPath(),i.setLineWidth(1*e.pixelRatio),i.setStrokeStyle(x.show?x.color:e.legend.hiddenColor),i.setFillStyle(x.show?x.color:e.legend.hiddenColor),x.legendShape){case"line":i.moveTo(v,g+.5*p-2*e.pixelRatio),i.fillRect(v,g+.5*p-2*e.pixelRatio,15*e.pixelRatio,4*e.pixelRatio);break;case"triangle":i.moveTo(v+7.5*e.pixelRatio,g+.5*p-5*e.pixelRatio),i.lineTo(v+2.5*e.pixelRatio,g+.5*p+5*e.pixelRatio),i.lineTo(v+12.5*e.pixelRatio,g+.5*p+5*e.pixelRatio),i.lineTo(v+7.5*e.pixelRatio,g+.5*p-5*e.pixelRatio);break;case"diamond":i.moveTo(v+7.5*e.pixelRatio,g+.5*p-5*e.pixelRatio),i.lineTo(v+2.5*e.pixelRatio,g+.5*p),i.lineTo(v+7.5*e.pixelRatio,g+.5*p+5*e.pixelRatio),i.lineTo(v+12.5*e.pixelRatio,g+.5*p),i.lineTo(v+7.5*e.pixelRatio,g+.5*p-5*e.pixelRatio);break;case"circle":i.moveTo(v+7.5*e.pixelRatio,g+.5*p),i.arc(v+7.5*e.pixelRatio,g+.5*p,5*e.pixelRatio,0,2*Math.PI);break;case"rect":i.moveTo(v,g+.5*p-5*e.pixelRatio),i.fillRect(v,g+.5*p-5*e.pixelRatio,15*e.pixelRatio,10*e.pixelRatio);break;default:i.moveTo(v,g+.5*p-5*e.pixelRatio),i.fillRect(v,g+.5*p-5*e.pixelRatio,15*e.pixelRatio,10*e.pixelRatio)}i.closePath(),i.fill(),i.stroke(),v+=u+f;var m=.5*p+.5*l-2;i.beginPath(),i.setFontSize(l),i.setFillStyle(x.show?e.legend.fontColor:e.legend.hiddenColor),i.fillText(x.name,v,g+m),i.closePath(),i.stroke(),"top"==e.legend.position||"bottom"==e.legend.position?(v+=y(x.name,l)+h,x.area[2]=v):(x.area[2]=v+y(x.name,l)+h,v-=u+f,g+=p)}})}}function Dt(t,e,n,i){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,s=r({},{activeOpacity:.5,activeRadius:10*e.pixelRatio,offsetAngle:0,labelWidth:15*e.pixelRatio,ringWidth:0,border:!1,borderWidth:2,borderColor:"#FFFFFF"},e.extra.pie),c={x:e.area[3]+(e.width-e.area[1]-e.area[3])/2,y:e.area[0]+(e.height-e.area[0]-e.area[2])/2};0==n.pieChartLinePadding&&(n.pieChartLinePadding=s.activeRadius);var l=Math.min((e.width-e.area[1]-e.area[3])/2-n.pieChartLinePadding-n.pieChartTextPadding-n._pieTextMaxLength_,(e.height-e.area[0]-e.area[2])/2-n.pieChartLinePadding-n.pieChartTextPadding);t=W(t,l,a);var u=s.activeRadius;if(t=t.map(function(t){return t._start_+=s.offsetAngle*Math.PI/180,t}),t.forEach(function(t,n){e.tooltip&&e.tooltip.index==n&&(i.beginPath(),i.setFillStyle(o(t.color,e.extra.pie.activeOpacity||.5)),i.moveTo(c.x,c.y),i.arc(c.x,c.y,t._radius_+u,t._start_,t._start_+2*t._proportion_*Math.PI),i.closePath(),i.fill()),i.beginPath(),i.setLineWidth(s.borderWidth*e.pixelRatio),i.lineJoin="round",i.setStrokeStyle(s.borderColor),i.setFillStyle(t.color),i.moveTo(c.x,c.y),i.arc(c.x,c.y,t._radius_,t._start_,t._start_+2*t._proportion_*Math.PI),i.closePath(),i.fill(),1==s.border&&i.stroke()}),"ring"===e.type){var f=.6*l;"number"===typeof e.extra.pie.ringWidth&&e.extra.pie.ringWidth>0&&(f=Math.max(0,l-e.extra.pie.ringWidth)),i.beginPath(),i.setFillStyle(e.background||"#ffffff"),i.moveTo(c.x,c.y),i.arc(c.x,c.y,f,0,2*Math.PI),i.closePath(),i.fill()}if(!1!==e.dataLabel&&1===a){for(var h=!1,p=0,d=t.length;p<d;p++)if(t[p].data>0){h=!0;break}h&&ht(t,e,n,i,l,c)}return 1===a&&"ring"===e.type&&ct(e,n,i,c),{center:c,radius:l,series:t}}function Ot(t,e,n,i){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,s=r({},{type:"area",activeOpacity:.5,activeRadius:10*e.pixelRatio,offsetAngle:0,labelWidth:15*e.pixelRatio,border:!1,borderWidth:2,borderColor:"#FFFFFF"},e.extra.rose);0==n.pieChartLinePadding&&(n.pieChartLinePadding=s.activeRadius);var c={x:e.area[3]+(e.width-e.area[1]-e.area[3])/2,y:e.area[0]+(e.height-e.area[0]-e.area[2])/2},l=Math.min((e.width-e.area[1]-e.area[3])/2-n.pieChartLinePadding-n.pieChartTextPadding-n._pieTextMaxLength_,(e.height-e.area[0]-e.area[2])/2-n.pieChartLinePadding-n.pieChartTextPadding),u=s.minRadius||.5*l;t=H(t,s.type,u,l,a);var f=s.activeRadius;if(t=t.map(function(t){return t._start_+=(s.offsetAngle||0)*Math.PI/180,t}),t.forEach(function(t,n){e.tooltip&&e.tooltip.index==n&&(i.beginPath(),i.setFillStyle(o(t.color,s.activeOpacity||.5)),i.moveTo(c.x,c.y),i.arc(c.x,c.y,f+t._radius_,t._start_,t._start_+2*t._rose_proportion_*Math.PI),i.closePath(),i.fill()),i.beginPath(),i.setLineWidth(s.borderWidth*e.pixelRatio),i.lineJoin="round",i.setStrokeStyle(s.borderColor),i.setFillStyle(t.color),i.moveTo(c.x,c.y),i.arc(c.x,c.y,t._radius_,t._start_,t._start_+2*t._rose_proportion_*Math.PI),i.closePath(),i.fill(),1==s.border&&i.stroke()}),!1!==e.dataLabel&&1===a){for(var h=!1,p=0,d=t.length;p<d;p++)if(t[p].data>0){h=!0;break}h&&ht(t,e,n,i,l,c)}return{center:c,radius:l,series:t}}function Mt(t,e,n,i){var a,o,s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,c=r({},{startAngle:.75,endAngle:.25,type:"default",width:12*e.pixelRatio,gap:2*e.pixelRatio},e.extra.arcbar);t=V(t,c,s),a=c.center?c.center:{x:e.width/2,y:e.height/2},c.radius?o=c.radius:(o=Math.min(a.x,a.y),o-=5*e.pixelRatio,o-=c.width/2);for(var l=0;l<t.length;l++){var u=t[l];i.setLineWidth(c.width),i.setStrokeStyle(c.backgroundColor||"#E9E9E9"),i.setLineCap("round"),i.beginPath(),"default"==c.type?i.arc(a.x,a.y,o-(c.width+c.gap)*l,c.startAngle*Math.PI,c.endAngle*Math.PI,!1):i.arc(a.x,a.y,o-(c.width+c.gap)*l,0,2*Math.PI,!1),i.stroke(),i.setLineWidth(c.width),i.setStrokeStyle(u.color),i.setLineCap("round"),i.beginPath(),i.arc(a.x,a.y,o-(c.width+c.gap)*l,c.startAngle*Math.PI,u._proportion_*Math.PI,!1),i.stroke()}return ct(e,n,i,a),{center:a,radius:o,series:t}}function $t(t,e,n,i,a){var s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1,c=r({},{type:"default",startAngle:.75,endAngle:.25,width:15,splitLine:{fixRadius:0,splitNumber:10,width:15,color:"#FFFFFF",childNumber:5,childWidth:5},pointer:{width:15,color:"auto"}},n.extra.gauge);void 0==c.oldAngle&&(c.oldAngle=c.startAngle),void 0==c.oldData&&(c.oldData=0),t=q(t,c.startAngle,c.endAngle);var l={x:n.width/2,y:n.height/2},u=Math.min(l.x,l.y);u-=5*n.pixelRatio,u-=c.width/2;var f=u-c.width,h=0;if("progress"==c.type){var p=u-3*c.width;a.beginPath();var d=a.createLinearGradient(l.x,l.y-p,l.x,l.y+p);d.addColorStop("0",o(e[0].color,.3)),d.addColorStop("1.0",o("#FFFFFF",.1)),a.setFillStyle(d),a.arc(l.x,l.y,p,0,2*Math.PI,!1),a.fill(),a.setLineWidth(c.width),a.setStrokeStyle(o(e[0].color,.3)),a.setLineCap("round"),a.beginPath(),a.arc(l.x,l.y,f,c.startAngle*Math.PI,c.endAngle*Math.PI,!1),a.stroke(),h=c.startAngle-c.endAngle+1;c.splitLine.splitNumber;var v=h/c.splitLine.splitNumber/c.splitLine.childNumber,g=-u-.5*c.width-c.splitLine.fixRadius,y=-u-c.width-c.splitLine.fixRadius+c.splitLine.width;a.save(),a.translate(l.x,l.y),a.rotate((c.startAngle-1)*Math.PI);for(var b=c.splitLine.splitNumber*c.splitLine.childNumber+1,x=e[0].data*s,m=0;m<b;m++)a.beginPath(),x>m/b?a.setStrokeStyle(o(e[0].color,1)):a.setStrokeStyle(o(e[0].color,.3)),a.setLineWidth(3*n.pixelRatio),a.moveTo(g,0),a.lineTo(y,0),a.stroke(),a.rotate(v*Math.PI);a.restore(),e=V(e,c,s),a.setLineWidth(c.width),a.setStrokeStyle(e[0].color),a.setLineCap("round"),a.beginPath(),a.arc(l.x,l.y,f,c.startAngle*Math.PI,e[0]._proportion_*Math.PI,!1),a.stroke();var _=u-2.5*c.width;a.save(),a.translate(l.x,l.y),a.rotate((e[0]._proportion_-1)*Math.PI),a.beginPath(),a.setLineWidth(c.width/3);var S=a.createLinearGradient(0,.6*-_,0,.6*_);S.addColorStop("0",o("#FFFFFF",0)),S.addColorStop("0.5",o(e[0].color,1)),S.addColorStop("1.0",o("#FFFFFF",0)),a.setStrokeStyle(S),a.arc(0,0,_,.85*Math.PI,1.15*Math.PI,!1),a.stroke(),a.beginPath(),a.setLineWidth(1),a.setStrokeStyle(e[0].color),a.setFillStyle(e[0].color),a.moveTo(-_-c.width/3/2,-4),a.lineTo(-_-c.width/3/2-4,0),a.lineTo(-_-c.width/3/2,4),a.lineTo(-_-c.width/3/2,-4),a.stroke(),a.fill(),a.restore()}else{a.setLineWidth(c.width),a.setLineCap("butt");for(var w=0;w<t.length;w++){var A=t[w];a.beginPath(),a.setStrokeStyle(A.color),a.arc(l.x,l.y,u,A._startAngle_*Math.PI,A._endAngle_*Math.PI,!1),a.stroke()}a.save(),h=c.startAngle-c.endAngle+1;var T=h/c.splitLine.splitNumber,P=h/c.splitLine.splitNumber/c.splitLine.childNumber,k=-u-.5*c.width-c.splitLine.fixRadius,D=-u-.5*c.width-c.splitLine.fixRadius+c.splitLine.width,O=-u-.5*c.width-c.splitLine.fixRadius+c.splitLine.childWidth;a.translate(l.x,l.y),a.rotate((c.startAngle-1)*Math.PI);for(var M=0;M<c.splitLine.splitNumber+1;M++)a.beginPath(),a.setStrokeStyle(c.splitLine.color),a.setLineWidth(2*n.pixelRatio),a.moveTo(k,0),a.lineTo(D,0),a.stroke(),a.rotate(T*Math.PI);a.restore(),a.save(),a.translate(l.x,l.y),a.rotate((c.startAngle-1)*Math.PI);for(var $=0;$<c.splitLine.splitNumber*c.splitLine.childNumber+1;$++)a.beginPath(),a.setStrokeStyle(c.splitLine.color),a.setLineWidth(1*n.pixelRatio),a.moveTo(k,0),a.lineTo(O,0),a.stroke(),a.rotate(P*Math.PI);a.restore(),e=G(e,t,c,s);for(var C=0;C<e.length;C++){var R=e[C];a.save(),a.translate(l.x,l.y),a.rotate((R._proportion_-1)*Math.PI),a.beginPath(),a.setFillStyle(R.color),a.moveTo(c.pointer.width,0),a.lineTo(0,-c.pointer.width/2),a.lineTo(-f,0),a.lineTo(0,c.pointer.width/2),a.lineTo(c.pointer.width,0),a.closePath(),a.fill(),a.beginPath(),a.setFillStyle("#FFFFFF"),a.arc(0,0,c.pointer.width/6,0,2*Math.PI,!1),a.fill(),a.restore()}!1!==n.dataLabel&&ut(c,u,l,n,i,a)}return ct(n,i,a,l),1===s&&"gauge"===n.type&&(n.extra.gauge.oldAngle=e[0]._proportion_,n.extra.gauge.oldData=e[0].data),{center:l,radius:u,innerRadius:f,categories:t,totalAngle:h}}function Ct(t,e,n,i){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,s=r({},{gridColor:"#cccccc",labelColor:"#666666",opacity:.2,gridCount:3},e.extra.radar),c=w(e.categories.length),l={x:e.area[3]+(e.width-e.area[1]-e.area[3])/2,y:e.area[0]+(e.height-e.area[0]-e.area[2])/2},u=Math.min(l.x-(S(e.categories)+n.radarLabelTextMargin),l.y-n.radarLabelTextMargin);u-=e.padding[1],i.beginPath(),i.setLineWidth(1*e.pixelRatio),i.setStrokeStyle(s.gridColor),c.forEach(function(t){var e=p(u*Math.cos(t),u*Math.sin(t),l);i.moveTo(l.x,l.y),i.lineTo(e.x,e.y)}),i.stroke(),i.closePath();for(var f=function(t){var n={};i.beginPath(),i.setLineWidth(1*e.pixelRatio),i.setStrokeStyle(s.gridColor),c.forEach(function(e,r){var a=p(u/s.gridCount*t*Math.cos(e),u/s.gridCount*t*Math.sin(e),l);0===r?(n=a,i.moveTo(a.x,a.y)):i.lineTo(a.x,a.y)}),i.lineTo(n.x,n.y),i.stroke(),i.closePath()},h=1;h<=s.gridCount;h++)f(h);var d=B(c,l,u,t,e,a);return d.forEach(function(t,n){if(i.beginPath(),i.setFillStyle(o(t.color,s.opacity)),t.data.forEach(function(t,e){0===e?i.moveTo(t.position.x,t.position.y):i.lineTo(t.position.x,t.position.y)}),i.closePath(),i.fill(),!1!==e.dataPointShape){var r=t.data.map(function(t){return t.position});st(r,t.color,t.pointShape,i,e)}}),ft(c,u,l,e,n,i),{center:l,radius:u,angleList:c}}function Rt(t,e,n){n=0==n?1:n;for(var i=[],r=0;r<n;r++)i[r]=Math.random();return Math.floor(i.reduce(function(t,e){return t+e})/n*(e-t))+t}function Lt(t,e,n,i){for(var r=!1,a=0;a<e.length;a++)if(e[a].area){if(!(t[3]<e[a].area[1]||t[0]>e[a].area[2]||t[1]>e[a].area[3]||t[2]<e[a].area[0])){r=!0;break}if(t[0]<0||t[1]<0||t[2]>n||t[3]>i){r=!0;break}r=!1}return r}function Ft(t){var e,n={};n.xMin=180,n.xMax=0,n.yMin=90,n.yMax=0;for(var i=0;i<t.length;i++)for(var r=t[i].geometry.coordinates,a=0;a<r.length;a++){e=r[a],1==e.length&&(e=e[0]);for(var o=0;o<e.length;o++){var s=e[o][0],c=e[o][1],l={x:s,y:c};n.xMin=n.xMin<l.x?n.xMin:l.x,n.xMax=n.xMax>l.x?n.xMax:l.x,n.yMin=n.yMin<l.y?n.yMin:l.y,n.yMax=n.yMax>l.y?n.yMax:l.y}}return n}function jt(t,e,n,i,r,a){return{x:(e-n.xMin)*i+r,y:(n.yMax-t)*i+a}}function It(t,e,n,i,r,a){return{x:(e-r)/i+n.xMin,y:n.yMax-(t-a)/i}}function Et(t,e,n){if(e[1]==n[1])return!1;if(e[1]>t[1]&&n[1]>t[1])return!1;if(e[1]<t[1]&&n[1]<t[1])return!1;if(e[1]==t[1]&&n[1]>t[1])return!1;if(n[1]==t[1]&&e[1]>t[1])return!1;if(e[0]<t[0]&&n[1]<t[1])return!1;var i=n[0]-(n[0]-e[0])*(n[1]-t[1])/(n[1]-e[1]);return!(i<t[0])}function zt(t,e){for(var n=0,i=0;i<e.length;i++){var r=e[i][0];1==e.length&&(r=e[i][0]);for(var a=0;a<r.length-1;a++){var o=r[a],s=r[a+1];Et(t,o,s)&&(n+=1)}}return n%2==1}function Nt(t,e,n,i){var a,s,c=r({},{border:!0,borderWidth:1,borderColor:"#666666",fillOpacity:.6,activeBorderColor:"#f04864",activeFillColor:"#facc14",activeFillOpacity:1},e.extra.map),l=t,u=Ft(l),f=e.width/Math.abs(u.xMax-u.xMin),h=e.height/Math.abs(u.yMax-u.yMin),p=f<h?f:h,d=e.width/2-Math.abs(u.xMax-u.xMin)/2*p,v=e.height/2-Math.abs(u.yMax-u.yMin)/2*p;i.beginPath(),i.clearRect(0,0,e.width,e.height),i.setFillStyle(e.background||"#FFFFFF"),i.rect(0,0,e.width,e.height),i.fill();for(var g=0;g<l.length;g++){i.beginPath(),i.setLineWidth(c.borderWidth*e.pixelRatio),i.setStrokeStyle(c.borderColor),i.setFillStyle(o(t[g].color,c.fillOpacity)),e.tooltip&&e.tooltip.index==g&&(i.setStrokeStyle(c.activeBorderColor),i.setFillStyle(o(c.activeFillColor,c.activeFillOpacity)));for(var b=l[g].geometry.coordinates,x=0;x<b.length;x++){a=b[x],1==a.length&&(a=a[0]);for(var m=0;m<a.length;m++)s=jt(a[m][1],a[m][0],u,p,d,v),0===m?(i.beginPath(),i.moveTo(s.x,s.y)):i.lineTo(s.x,s.y);i.fill(),1==c.border&&i.stroke()}if(1==e.dataLabel){var _=l[g].properties.centroid;if(_){s=jt(_[1],_[0],u,p,d,v);var S=l[g].textSize||n.fontSize,w=l[g].properties.name;i.beginPath(),i.setFontSize(S),i.setFillStyle(l[g].textColor||"#666666"),i.fillText(w,s.x-y(w,S)/2,s.y+S/2),i.closePath(),i.stroke()}}}e.chartData.mapData={bounds:u,scale:p,xoffset:d,yoffset:v},wt(e,n,i,1),i.draw()}function Bt(t,e){var n=t.series.sort(function(t,e){return parseInt(e.textSize)-parseInt(t.textSize)});switch(e){case"normal":for(var i=0;i<n.length;i++){var r=n[i].name,a=n[i].textSize,o=y(r,a),s=void 0,c=void 0,l=void 0,u=0;while(1){u++,s=Rt(-t.width/2,t.width/2,5)-o/2,c=Rt(-t.height/2,t.height/2,5)+a/2,l=[s-5+t.width/2,c-5-a+t.height/2,s+o+5+t.width/2,c+5+t.height/2];var f=Lt(l,n,t.width,t.height);if(!f)break;if(1e3==u){l=[-100,-100,-100,-100];break}}n[i].area=l}break;case"vertical":for(var h=function(){return Math.random()>.7},p=0;p<n.length;p++){var d=n[p].name,v=n[p].textSize,g=y(d,v),b=h(),x=void 0,m=void 0,_=void 0,S=void 0,w=0;while(1){w++;var A=void 0;if(b?(x=Rt(-t.width/2,t.width/2,5)-g/2,m=Rt(-t.height/2,t.height/2,5)+v/2,_=[m-5-g+t.width/2,-x-5+t.height/2,m+5+t.width/2,-x+v+5+t.height/2],S=[t.width-(t.width/2-t.height/2)-(-x+v+5+t.height/2)-5,t.height/2-t.width/2+(m-5-g+t.width/2)-5,t.width-(t.width/2-t.height/2)-(-x+v+5+t.height/2)+v,t.height/2-t.width/2+(m-5-g+t.width/2)+g+5],A=Lt(S,n,t.height,t.width)):(x=Rt(-t.width/2,t.width/2,5)-g/2,m=Rt(-t.height/2,t.height/2,5)+v/2,_=[x-5+t.width/2,m-5-v+t.height/2,x+g+5+t.width/2,m+5+t.height/2],A=Lt(_,n,t.width,t.height)),!A)break;if(1e3==w){_=[-1e3,-1e3,-1e3,-1e3];break}}b?(n[p].area=S,n[p].areav=_):n[p].area=_,n[p].rotate=b}break}return n}function Wt(t,e,n,i){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1;r({},{type:"normal",autoColors:!0},e.extra.word);i.beginPath(),i.setFillStyle(e.background||"#FFFFFF"),i.rect(0,0,e.width,e.height),i.fill(),i.save();var o=e.chartData.wordCloudData;i.translate(e.width/2,e.height/2);for(var s=0;s<o.length;s++){i.save(),o[s].rotate&&i.rotate(90*Math.PI/180);var c=o[s].name,l=o[s].textSize,u=y(c,l);i.beginPath(),i.setStrokeStyle(o[s].color),i.setFillStyle(o[s].color),i.setFontSize(l),o[s].rotate?o[s].areav[0]>0&&(e.tooltip&&e.tooltip.index==s?i.strokeText(c,(o[s].areav[0]+5-e.width/2)*a-u*(1-a)/2,(o[s].areav[1]+5+l-e.height/2)*a):i.fillText(c,(o[s].areav[0]+5-e.width/2)*a-u*(1-a)/2,(o[s].areav[1]+5+l-e.height/2)*a)):o[s].area[0]>0&&(e.tooltip&&e.tooltip.index==s?i.strokeText(c,(o[s].area[0]+5-e.width/2)*a-u*(1-a)/2,(o[s].area[1]+5+l-e.height/2)*a):i.fillText(c,(o[s].area[0]+5-e.width/2)*a-u*(1-a)/2,(o[s].area[1]+5+l-e.height/2)*a)),i.stroke(),i.restore()}i.restore()}function Ut(t,e,n,i){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,s=r({},{activeWidth:10,activeOpacity:.3,border:!1,borderWidth:2,borderColor:"#FFFFFF",fillOpacity:1,labelAlign:"right"},e.extra.funnel),c=(e.height-e.area[0]-e.area[2])/t.length,l={x:e.area[3]+(e.width-e.area[1]-e.area[3])/2,y:e.height-e.area[2]},u=s.activeWidth,f=Math.min((e.width-e.area[1]-e.area[3])/2-u,(e.height-e.area[0]-e.area[2])/2-u);t=U(t,f,a),i.save(),i.translate(l.x,l.y);for(var h=0;h<t.length;h++)0==h?(e.tooltip&&e.tooltip.index==h&&(i.beginPath(),i.setFillStyle(o(t[h].color,s.activeOpacity)),i.moveTo(-u,0),i.lineTo(-t[h].radius-u,-c),i.lineTo(t[h].radius+u,-c),i.lineTo(u,0),i.lineTo(-u,0),i.closePath(),i.fill()),t[h].funnelArea=[l.x-t[h].radius,l.y-c,l.x+t[h].radius,l.y],i.beginPath(),i.setLineWidth(s.borderWidth*e.pixelRatio),i.setStrokeStyle(s.borderColor),i.setFillStyle(o(t[h].color,s.fillOpacity)),i.moveTo(0,0),i.lineTo(-t[h].radius,-c),i.lineTo(t[h].radius,-c),i.lineTo(0,0),i.closePath(),i.fill(),1==s.border&&i.stroke()):(e.tooltip&&e.tooltip.index==h&&(i.beginPath(),i.setFillStyle(o(t[h].color,s.activeOpacity)),i.moveTo(0,0),i.lineTo(-t[h-1].radius-u,0),i.lineTo(-t[h].radius-u,-c),i.lineTo(t[h].radius+u,-c),i.lineTo(t[h-1].radius+u,0),i.lineTo(0,0),i.closePath(),i.fill()),t[h].funnelArea=[l.x-t[h].radius,l.y-c*(h+1),l.x+t[h].radius,l.y-c*h],i.beginPath(),i.setLineWidth(s.borderWidth*e.pixelRatio),i.setStrokeStyle(s.borderColor),i.setFillStyle(o(t[h].color,s.fillOpacity)),i.moveTo(0,0),i.lineTo(-t[h-1].radius,0),i.lineTo(-t[h].radius,-c),i.lineTo(t[h].radius,-c),i.lineTo(t[h-1].radius,0),i.lineTo(0,0),i.closePath(),i.fill(),1==s.border&&i.stroke()),i.translate(0,-c);return i.restore(),!1!==e.dataLabel&&1===a&&Ht(t,e,i,c,s.labelAlign,u,l),{center:l,radius:f,series:t}}function Ht(t,e,n,i,r,o,s){for(var c=0;c<t.length;c++){var l=t[c],u=void 0,f=void 0,h=void 0,p=void 0,d=l.format?l.format(+l._proportion_.toFixed(2)):a.toFixed(100*l._proportion_)+"%";"right"==r?(u=0==c?(l.funnelArea[2]+s.x)/2:(l.funnelArea[2]+t[c-1].funnelArea[2])/2,f=u+2*o,h=l.funnelArea[1]+i/2,p=l.textSize||e.fontSize,n.setLineWidth(1*e.pixelRatio),n.setStrokeStyle(l.color),n.setFillStyle(l.color),n.beginPath(),n.moveTo(u,h),n.lineTo(f,h),n.stroke(),n.closePath(),n.beginPath(),n.moveTo(f,h),n.arc(f,h,2,0,2*Math.PI),n.closePath(),n.fill(),n.beginPath(),n.setFontSize(p),n.setFillStyle(l.textColor||"#666666"),n.fillText(d,f+5,h+p/2-2),n.closePath(),n.stroke(),n.closePath()):(u=0==c?(l.funnelArea[0]+s.x)/2:(l.funnelArea[0]+t[c-1].funnelArea[0])/2,f=u-2*o,h=l.funnelArea[1]+i/2,p=l.textSize||e.fontSize,n.setLineWidth(1*e.pixelRatio),n.setStrokeStyle(l.color),n.setFillStyle(l.color),n.beginPath(),n.moveTo(u,h),n.lineTo(f,h),n.stroke(),n.closePath(),n.beginPath(),n.moveTo(f,h),n.arc(f,h,2,0,2*Math.PI),n.closePath(),n.fill(),n.beginPath(),n.setFontSize(p),n.setFillStyle(l.textColor||"#666666"),n.fillText(d,f-5-y(d),h+p/2-2),n.closePath(),n.stroke(),n.closePath())}}function Vt(t,e){e.draw()}var qt={easeIn:function(t){return Math.pow(t,3)},easeOut:function(t){return Math.pow(t-1,3)+1},easeInOut:function(t){return(t/=.5)<1?.5*Math.pow(t,3):.5*(Math.pow(t-2,3)+2)},linear:function(t){return t}};function Gt(t){this.isStop=!1,t.duration="undefined"===typeof t.duration?1e3:t.duration,t.timing=t.timing||"linear";var e=17;function n(){return"undefined"!==typeof setTimeout?function(t,e){setTimeout(function(){var e=+new Date;t(e)},e)}:"undefined"!==typeof requestAnimationFrame?requestAnimationFrame:function(t){t(null)}}var i=n(),r=null,a=function(n){if(null===n||!0===this.isStop)return t.onProcess&&t.onProcess(1),void(t.onAnimationFinish&&t.onAnimationFinish());if(null===r&&(r=n),n-r<t.duration){var o=(n-r)/t.duration,s=qt[t.timing];o=s(o),t.onProcess&&t.onProcess(o),i(a,e)}else t.onProcess&&t.onProcess(1),t.onAnimationFinish&&t.onAnimationFinish()};a=a.bind(this),i(a,e)}function Xt(t,e,n,i){var a=this,o=e.series,s=e.categories;o=v(o,e,n);var l=e.animation?e.duration:0;this.animationInstance&&this.animationInstance.stop();var u=null;if("candle"==t){var f=r({},e.extra.candle.average);f.show?(u=c(f.day,f.name,f.color,o[0].data),u=v(u,e,n),e.seriesMA=u):u=e.seriesMA?e.seriesMA=v(e.seriesMA,e,n):o}else u=o;e._series_=o=k(o),e.area=new Array(4);for(var h=0;h<4;h++)e.area[h]=e.padding[h];var p=z(u,e,n,e.chartData),d=p.area.wholeHeight,g=p.area.wholeWidth;switch(e.legend.position){case"top":e.area[0]+=d;break;case"bottom":e.area[2]+=d;break;case"left":e.area[3]+=g;break;case"right":e.area[1]+=g;break}var y={},b=0;if("line"===e.type||"column"===e.type||"area"===e.type||"mix"===e.type||"candle"===e.type){if(y=it(o,e,n),b=y.yAxisWidth,e.yAxis.showTitle){for(var x=0,m=0;m<e.yAxis.data.length;m++)x=Math.max(x,e.yAxis.data[m].titleFontSize?e.yAxis.data[m].titleFontSize:n.fontSize);e.area[0]+=(x+6)*e.pixelRatio}for(var _=0,S=0,w=0;w<b.length;w++)"left"==b[w].position?(e.area[3]+=S>0?b[w].width+e.yAxis.padding:b[w].width,S+=1):(e.area[1]+=_>0?b[w].width+e.yAxis.padding:b[w].width,_+=1)}else n.yAxisWidth=b;if(e.chartData.yAxisData=y,e.categories&&e.categories.length){e.chartData.xAxisData=Z(e.categories,e,n);var A=N(e.categories,e,n,e.chartData.xAxisData.eachSpacing),T=A.xAxisHeight,P=A.angle;n.xAxisHeight=T,n._xAxisTextAngle_=P,e.area[2]+=T,e.chartData.categoriesData=A}else e.chartData.xAxisData={xAxisPoints:[]};if(e.enableScroll&&"right"==e.xAxis.scrollAlign&&void 0===e._scrollDistance_){var D=0,O=e.chartData.xAxisData.xAxisPoints,M=e.chartData.xAxisData.startX,$=e.chartData.xAxisData.endX,C=e.chartData.xAxisData.eachSpacing,R=C*(O.length-1),L=$-M;D=L-R,a.scrollOption={currentOffset:D,startTouchX:D,distance:0,lastMoveTime:0},e._scrollDistance_=D}switch("pie"!==t&&"ring"!==t&&"rose"!==t||(n._pieTextMaxLength_=!1===e.dataLabel?0:X(u)),t){case"word":var F=r({},{type:"normal",autoColors:!0},e.extra.word);1!=e.updateData&&void 0!=e.updateData||(e.chartData.wordCloudData=Bt(e,F.type)),this.animationInstance=new Gt({timing:"easeInOut",duration:l,onProcess:function(t){i.clearRect(0,0,e.width,e.height),e.rotate&&ot(i,e),Wt(o,e,n,i,t),Vt(e,i)},onAnimationFinish:function(){a.event.trigger("renderComplete")}});break;case"map":i.clearRect(0,0,e.width,e.height),Nt(o,e,n,i);break;case"funnel":this.animationInstance=new Gt({timing:"easeInOut",duration:l,onProcess:function(t){i.clearRect(0,0,e.width,e.height),e.rotate&&ot(i,e),e.chartData.funnelData=Ut(o,e,n,i,t),kt(e.series,e,n,i,e.chartData),wt(e,n,i,t),Vt(e,i)},onAnimationFinish:function(){a.event.trigger("renderComplete")}});break;case"line":this.animationInstance=new Gt({timing:"easeIn",duration:l,onProcess:function(t){i.clearRect(0,0,e.width,e.height),e.rotate&&ot(i,e),Tt(s,e,n,i),At(s,e,n,i);var r=_t(o,e,n,i,t),a=r.xAxisPoints,c=r.calPoints,l=r.eachSpacing;e.chartData.xAxisPoints=a,e.chartData.calPoints=c,e.chartData.eachSpacing=l,Pt(o,e,n,i),!1!==e.enableMarkLine&&1===t&&dt(e,n,i),kt(e.series,e,n,i,e.chartData),wt(e,n,i,t,l,a),Vt(e,i)},onAnimationFinish:function(){a.event.trigger("renderComplete")}});break;case"mix":this.animationInstance=new Gt({timing:"easeIn",duration:l,onProcess:function(t){i.clearRect(0,0,e.width,e.height),e.rotate&&ot(i,e),Tt(s,e,n,i),At(s,e,n,i);var r=St(o,e,n,i,t),a=r.xAxisPoints,c=r.calPoints,l=r.eachSpacing;e.chartData.xAxisPoints=a,e.chartData.calPoints=c,e.chartData.eachSpacing=l,Pt(o,e,n,i),!1!==e.enableMarkLine&&1===t&&dt(e,n,i),kt(e.series,e,n,i,e.chartData),wt(e,n,i,t,l,a),Vt(e,i)},onAnimationFinish:function(){a.event.trigger("renderComplete")}});break;case"column":this.animationInstance=new Gt({timing:"easeIn",duration:l,onProcess:function(t){i.clearRect(0,0,e.width,e.height),e.rotate&&ot(i,e),Tt(s,e,n,i),At(s,e,n,i);var r=bt(o,e,n,i,t),a=r.xAxisPoints,c=r.calPoints,l=r.eachSpacing;e.chartData.xAxisPoints=a,e.chartData.calPoints=c,e.chartData.eachSpacing=l,Pt(o,e,n,i),!1!==e.enableMarkLine&&1===t&&dt(e,n,i),kt(e.series,e,n,i,e.chartData),wt(e,n,i,t,l,a),Vt(e,i)},onAnimationFinish:function(){a.event.trigger("renderComplete")}});break;case"area":this.animationInstance=new Gt({timing:"easeIn",duration:l,onProcess:function(t){i.clearRect(0,0,e.width,e.height),e.rotate&&ot(i,e),Tt(s,e,n,i),At(s,e,n,i);var r=mt(o,e,n,i,t),a=r.xAxisPoints,c=r.calPoints,l=r.eachSpacing;e.chartData.xAxisPoints=a,e.chartData.calPoints=c,e.chartData.eachSpacing=l,Pt(o,e,n,i),!1!==e.enableMarkLine&&1===t&&dt(e,n,i),kt(e.series,e,n,i,e.chartData),wt(e,n,i,t,l,a),Vt(e,i)},onAnimationFinish:function(){a.event.trigger("renderComplete")}});break;case"ring":case"pie":this.animationInstance=new Gt({timing:"easeInOut",duration:l,onProcess:function(t){i.clearRect(0,0,e.width,e.height),e.rotate&&ot(i,e),e.chartData.pieData=Dt(o,e,n,i,t),kt(e.series,e,n,i,e.chartData),wt(e,n,i,t),Vt(e,i)},onAnimationFinish:function(){a.event.trigger("renderComplete")}});break;case"rose":this.animationInstance=new Gt({timing:"easeInOut",duration:l,onProcess:function(t){i.clearRect(0,0,e.width,e.height),e.rotate&&ot(i,e),e.chartData.pieData=Ot(o,e,n,i,t),kt(e.series,e,n,i,e.chartData),wt(e,n,i,t),Vt(e,i)},onAnimationFinish:function(){a.event.trigger("renderComplete")}});break;case"radar":this.animationInstance=new Gt({timing:"easeInOut",duration:l,onProcess:function(t){i.clearRect(0,0,e.width,e.height),e.rotate&&ot(i,e),e.chartData.radarData=Ct(o,e,n,i,t),kt(e.series,e,n,i,e.chartData),wt(e,n,i,t),Vt(e,i)},onAnimationFinish:function(){a.event.trigger("renderComplete")}});break;case"arcbar":this.animationInstance=new Gt({timing:"easeInOut",duration:l,onProcess:function(t){i.clearRect(0,0,e.width,e.height),e.rotate&&ot(i,e),e.chartData.arcbarData=Mt(o,e,n,i,t),Vt(e,i)},onAnimationFinish:function(){a.event.trigger("renderComplete")}});break;case"gauge":this.animationInstance=new Gt({timing:"easeInOut",duration:l,onProcess:function(t){i.clearRect(0,0,e.width,e.height),e.rotate&&ot(i,e),e.chartData.gaugeData=$t(s,o,e,n,i,t),Vt(e,i)},onAnimationFinish:function(){a.event.trigger("renderComplete")}});break;case"candle":this.animationInstance=new Gt({timing:"easeIn",duration:l,onProcess:function(t){i.clearRect(0,0,e.width,e.height),e.rotate&&ot(i,e),Tt(s,e,n,i),At(s,e,n,i);var r=xt(o,u,e,n,i,t),a=r.xAxisPoints,c=r.calPoints,l=r.eachSpacing;e.chartData.xAxisPoints=a,e.chartData.calPoints=c,e.chartData.eachSpacing=l,Pt(o,e,n,i),!1!==e.enableMarkLine&&1===t&&dt(e,n,i),kt(u||e.series,e,n,i,e.chartData),wt(e,n,i,t,l,a),Vt(e,i)},onAnimationFinish:function(){a.event.trigger("renderComplete")}});break}}function Jt(){this.events={}}Gt.prototype.stop=function(){this.isStop=!0},Jt.prototype.addEventListener=function(t,e){this.events[t]=this.events[t]||[],this.events[t].push(e)},Jt.prototype.trigger=function(){for(var t=arguments.length,n=Array(t),i=0;i<t;i++)n[i]=arguments[i];var r=n[0],a=n.slice(1);this.events[r]&&this.events[r].forEach(function(t){try{t.apply(null,a)}catch(n){console.error(e(n," at components\\u-charts\\u-charts.js:4921"))}})};var Yt=function(t){t.pixelRatio=t.pixelRatio?t.pixelRatio:1,t.fontSize=t.fontSize?t.fontSize*t.pixelRatio:13*t.pixelRatio,t.title=r({},t.title),t.subtitle=r({},t.subtitle),t.duration=t.duration?t.duration:1e3,t.yAxis=r({},{data:[],showTitle:!1,disabled:!1,disableGrid:!1,splitNumber:5,gridType:"solid",dashLength:4*t.pixelRatio,gridColor:"#cccccc",padding:10,fontColor:"#666666"},t.yAxis),t.yAxis.dashLength*=t.pixelRatio,t.yAxis.padding*=t.pixelRatio,t.xAxis=r({},{rotateLabel:!1,type:"calibration",gridType:"solid",dashLength:4,scrollAlign:"left",boundaryGap:"center",axisLine:!0,axisLineColor:"#cccccc"},t.xAxis),t.xAxis.dashLength*=t.pixelRatio,t.legend=r({},{show:!0,position:"bottom",float:"center",backgroundColor:"rgba(0,0,0,0)",borderColor:"rgba(0,0,0,0)",borderWidth:0,padding:5,margin:5,itemGap:10,fontSize:t.fontSize,lineHeight:t.fontSize,fontColor:"#333333",format:{},hiddenColor:"#CECECE"},t.legend),t.legend.borderWidth=t.legend.borderWidth*t.pixelRatio,t.legend.itemGap=t.legend.itemGap*t.pixelRatio,t.legend.padding=t.legend.padding*t.pixelRatio,t.legend.margin=t.legend.margin*t.pixelRatio,t.extra=r({},t.extra),t.rotate=!!t.rotate,t.animation=!!t.animation,t.rotate=!!t.rotate;var e=JSON.parse(JSON.stringify(i));if(e.colors=t.colors?t.colors:e.colors,e.yAxisTitleWidth=!0!==t.yAxis.disabled&&t.yAxis.title?e.yAxisTitleWidth:0,"pie"!=t.type&&"ring"!=t.type||(e.pieChartLinePadding=!1===t.dataLabel?0:t.extra.pie.labelWidth*t.pixelRatio||e.pieChartLinePadding*t.pixelRatio),"rose"==t.type&&(e.pieChartLinePadding=!1===t.dataLabel?0:t.extra.rose.labelWidth*t.pixelRatio||e.pieChartLinePadding*t.pixelRatio),e.pieChartTextPadding=!1===t.dataLabel?0:e.pieChartTextPadding*t.pixelRatio,e.yAxisSplit=t.yAxis.splitNumber?t.yAxis.splitNumber:i.yAxisSplit,e.rotate=t.rotate,t.rotate){var a=t.width,o=t.height;t.width=o,t.height=a}t.padding=t.padding?t.padding:e.padding;for(var s=0;s<4;s++)t.padding[s]*=t.pixelRatio;e.yAxisWidth=i.yAxisWidth*t.pixelRatio,e.xAxisHeight=i.xAxisHeight*t.pixelRatio,t.enableScroll&&t.xAxis.scrollShow&&(e.xAxisHeight+=6*t.pixelRatio),e.xAxisLineHeight=i.xAxisLineHeight*t.pixelRatio,e.fontSize=t.fontSize,e.titleFontSize=i.titleFontSize*t.pixelRatio,e.subtitleFontSize=i.subtitleFontSize*t.pixelRatio,e.toolTipPadding=i.toolTipPadding*t.pixelRatio,e.toolTipLineHeight=i.toolTipLineHeight*t.pixelRatio,e.columePadding=i.columePadding*t.pixelRatio,t.$this=t.$this?t.$this:this,this.context=n.createCanvasContext(t.canvasId,t.$this),t.chartData={},this.event=new Jt,this.scrollOption={currentOffset:0,startTouchX:0,distance:0,lastMoveTime:0},this.opts=t,this.config=e,Xt.call(this,t.type,t,e,this.context)};Yt.prototype.updateData=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.opts=r({},this.opts,t),this.opts.updateData=!0;var e=t.scrollPosition||"current";switch(e){case"current":this.opts._scrollDistance_=this.scrollOption.currentOffset;break;case"left":this.opts._scrollDistance_=0,this.scrollOption={currentOffset:0,startTouchX:0,distance:0,lastMoveTime:0};break;case"right":var n=it(this.opts.series,this.opts,this.config),i=n.yAxisWidth;this.config.yAxisWidth=i;var a=0,o=Z(this.opts.categories,this.opts,this.config),s=o.xAxisPoints,c=o.startX,l=o.endX,u=o.eachSpacing,f=u*(s.length-1),h=l-c;a=h-f,this.scrollOption={currentOffset:a,startTouchX:a,distance:0,lastMoveTime:0},this.opts._scrollDistance_=a;break}Xt.call(this,this.opts.type,this.opts,this.config,this.context)},Yt.prototype.zoom=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.opts.xAxis.itemCount;if(!0===this.opts.enableScroll){var n=Math.round(Math.abs(this.scrollOption.currentOffset)/this.opts.chartData.eachSpacing)+Math.round(this.opts.xAxis.itemCount/2);this.opts.animation=!1,this.opts.xAxis.itemCount=t.itemCount;var i=it(this.opts.series,this.opts,this.config),r=i.yAxisWidth;this.config.yAxisWidth=r;var a=0,o=Z(this.opts.categories,this.opts,this.config),s=o.xAxisPoints,c=o.startX,l=o.endX,u=o.eachSpacing,f=u*n,h=l-c,p=h-u*(s.length-1);a=h/2-f,a>0&&(a=0),a<p&&(a=p),this.scrollOption={currentOffset:a,startTouchX:a,distance:0,lastMoveTime:0},this.opts._scrollDistance_=a,Xt.call(this,this.opts.type,this.opts,this.config,this.context)}else console.log(e("请启用滚动条后使用！"," at components\\u-charts\\u-charts.js:5095"))},Yt.prototype.stopAnimation=function(){this.animationInstance&&this.animationInstance.stop()},Yt.prototype.addEventListener=function(t,e){this.event.addEventListener(t,e)},Yt.prototype.getCurrentDataIndex=function(t){var e=null;if(e=t.changedTouches?t.changedTouches[0]:t.mp.changedTouches[0],e){var n=m(e,this.opts,t);return"pie"===this.opts.type||"ring"===this.opts.type||"rose"===this.opts.type?j({x:n.x,y:n.y},this.opts.chartData.pieData):"radar"===this.opts.type?C({x:n.x,y:n.y},this.opts.chartData.radarData,this.opts.categories.length):"funnel"===this.opts.type?R({x:n.x,y:n.y},this.opts.chartData.funnelData):"map"===this.opts.type?F({x:n.x,y:n.y},this.opts):"word"===this.opts.type?L({x:n.x,y:n.y},this.opts.chartData.wordCloudData):D({x:n.x,y:n.y},this.opts.chartData.xAxisPoints,this.opts,this.config,Math.abs(this.scrollOption.currentOffset))}return-1},Yt.prototype.getLegendDataIndex=function(t){var e=null;if(e=t.changedTouches?t.changedTouches[0]:t.mp.changedTouches[0],e){var n=m(e,this.opts,t);return O({x:n.x,y:n.y},this.opts.chartData.legendData)}return-1},Yt.prototype.touchLegend=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=null;if(n=t.changedTouches?t.changedTouches[0]:t.mp.changedTouches[0],n){m(n,this.opts,t);var i=this.getLegendDataIndex(t);i>=0&&(this.opts.series[i].show=!this.opts.series[i].show,this.opts.animation=!!e.animation,this.opts._scrollDistance_=this.scrollOption.currentOffset,Xt.call(this,this.opts.type,this.opts,this.config,this.context))}},Yt.prototype.showToolTip=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=null;i=t.changedTouches?t.changedTouches[0]:t.mp.changedTouches[0],i||console.log(e("touchError"," at components\\u-charts\\u-charts.js:5232"));var a=m(i,this.opts,t),o=this.scrollOption.currentOffset,s=r({},this.opts,{_scrollDistance_:o,animation:!1});if("line"===this.opts.type||"area"===this.opts.type||"column"===this.opts.type){var c=this.getCurrentDataIndex(t);if(c>-1){var l=_(this.opts.series,c);if(0!==l.length){var u=A(l,this.opts.chartData.calPoints,c,this.opts.categories,n),f=u.textList,h=u.offset;h.y=a.y,s.tooltip={textList:f,offset:h,option:n,index:c}}}Xt.call(this,s.type,s,this.config,this.context)}if("mix"===this.opts.type){c=this.getCurrentDataIndex(t);if(c>-1){o=this.scrollOption.currentOffset,s=r({},this.opts,{_scrollDistance_:o,animation:!1}),l=_(this.opts.series,c);if(0!==l.length){var p=T(l,this.opts.chartData.calPoints,c,this.opts.categories,n);f=p.textList,h=p.offset;h.y=a.y,s.tooltip={textList:f,offset:h,option:n,index:c}}}Xt.call(this,s.type,s,this.config,this.context)}if("candle"===this.opts.type){c=this.getCurrentDataIndex(t);if(c>-1){o=this.scrollOption.currentOffset,s=r({},this.opts,{_scrollDistance_:o,animation:!1}),l=_(this.opts.series,c);if(0!==l.length){u=P(this.opts.series[0].data,l,this.opts.chartData.calPoints,c,this.opts.categories,this.opts.extra.candle,n),f=u.textList,h=u.offset;h.y=a.y,s.tooltip={textList:f,offset:h,option:n,index:c}}}Xt.call(this,s.type,s,this.config,this.context)}if("pie"===this.opts.type||"ring"===this.opts.type||"rose"===this.opts.type||"funnel"===this.opts.type){c=this.getCurrentDataIndex(t);if(c>-1){o=this.scrollOption.currentOffset,s=r({},this.opts,{_scrollDistance_:o,animation:!1}),l=this.opts._series_[c],f=[{text:n.format?n.format(l):l.name+": "+l.data,color:l.color}],h={x:a.x,y:a.y};s.tooltip={textList:f,offset:h,option:n,index:c}}Xt.call(this,s.type,s,this.config,this.context)}if("map"===this.opts.type||"word"===this.opts.type){c=this.getCurrentDataIndex(t);if(c>-1){o=this.scrollOption.currentOffset,s=r({},this.opts,{_scrollDistance_:o,animation:!1}),l=this.opts._series_[c],f=[{text:n.format?n.format(l):l.properties.name,color:l.color}],h={x:a.x,y:a.y};s.tooltip={textList:f,offset:h,option:n,index:c}}s.updateData=!1,Xt.call(this,s.type,s,this.config,this.context)}if("radar"===this.opts.type){c=this.getCurrentDataIndex(t);if(c>-1){o=this.scrollOption.currentOffset,s=r({},this.opts,{_scrollDistance_:o,animation:!1}),l=_(this.opts.series,c);if(0!==l.length){f=l.map(function(t){return{text:n.format?n.format(t):t.name+": "+t.data,color:t.color}}),h={x:a.x,y:a.y};s.tooltip={textList:f,offset:h,option:n,index:c}}}Xt.call(this,s.type,s,this.config,this.context)}},Yt.prototype.translate=function(t){this.scrollOption={currentOffset:t,startTouchX:t,distance:0,lastMoveTime:0};var e=r({},this.opts,{_scrollDistance_:t,animation:!1});Xt.call(this,this.opts.type,e,this.config,this.context)},Yt.prototype.scrollStart=function(t){var e=null;e=t.changedTouches?t.changedTouches[0]:t.mp.changedTouches[0];var n=m(e,this.opts,t);e&&!0===this.opts.enableScroll&&(this.scrollOption.startTouchX=n.x)},Yt.prototype.scroll=function(t){0===this.scrollOption.lastMoveTime&&(this.scrollOption.lastMoveTime=Date.now());var e=this.opts.extra.touchMoveLimit||20,n=Date.now(),i=n-this.scrollOption.lastMoveTime;if(!(i<Math.floor(1e3/e))){this.scrollOption.lastMoveTime=n;var a=null;if(a=t.changedTouches?t.changedTouches[0]:t.mp.changedTouches[0],a&&!0===this.opts.enableScroll){var o,s=m(a,this.opts,t);o=s.x-this.scrollOption.startTouchX;var c=this.scrollOption.currentOffset,u=l(this,c+o,this.opts.chartData,this.config,this.opts);this.scrollOption.distance=o=u-c;var f=r({},this.opts,{_scrollDistance_:c+o,animation:!1});return Xt.call(this,f.type,f,this.config,this.context),c+o}}},Yt.prototype.scrollEnd=function(t){if(!0===this.opts.enableScroll){var e=this.scrollOption,n=e.currentOffset,i=e.distance;this.scrollOption.currentOffset=n+i,this.scrollOption.distance=0}},"object"===typeof t.exports&&(t.exports=Yt)}).call(this,n("0de9")["default"],n("6e42")["default"])},f976:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={lunarInfo:[19416,19168,42352,21717,53856,55632,91476,22176,39632,21970,19168,42422,42192,53840,119381,46400,54944,44450,38320,84343,18800,42160,46261,27216,27968,109396,11104,38256,21234,18800,25958,54432,59984,28309,23248,11104,100067,37600,116951,51536,54432,120998,46416,22176,107956,9680,37584,53938,43344,46423,27808,46416,86869,19872,42416,83315,21168,43432,59728,27296,44710,43856,19296,43748,42352,21088,62051,55632,23383,22176,38608,19925,19152,42192,54484,53840,54616,46400,46752,103846,38320,18864,43380,42160,45690,27216,27968,44870,43872,38256,19189,18800,25776,29859,59984,27480,23232,43872,38613,37600,51552,55636,54432,55888,30034,22176,43959,9680,37584,51893,43344,46240,47780,44368,21977,19360,42416,86390,21168,43312,31060,27296,44368,23378,19296,42726,42208,53856,60005,54576,23200,30371,38608,19195,19152,42192,118966,53840,54560,56645,46496,22224,21938,18864,42359,42160,43600,111189,27936,44448,84835,37744,18936,18800,25776,92326,59984,27424,108228,43744,41696,53987,51552,54615,54432,55888,23893,22176,42704,21972,21200,43448,43344,46240,46758,44368,21920,43940,42416,21168,45683,26928,29495,27296,44368,84821,19296,42352,21732,53600,59752,54560,55968,92838,22224,19168,43476,41680,53584,62034,54560],solarMonth:[31,28,31,30,31,30,31,31,30,31,30,31],Gan:["甲","乙","丙","丁","戊","己","庚","辛","壬","癸"],Zhi:["子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥"],Animals:["鼠","牛","虎","兔","龙","蛇","马","羊","猴","鸡","狗","猪"],solarTerm:["小寒","大寒","立春","雨水","惊蛰","春分","清明","谷雨","立夏","小满","芒种","夏至","小暑","大暑","立秋","处暑","白露","秋分","寒露","霜降","立冬","小雪","大雪","冬至"],sTermInfo:["9778397bd097c36b0b6fc9274c91aa","97b6b97bd19801ec9210c965cc920e","97bcf97c3598082c95f8c965cc920f","97bd0b06bdb0722c965ce1cfcc920f","b027097bd097c36b0b6fc9274c91aa","97b6b97bd19801ec9210c965cc920e","97bcf97c359801ec95f8c965cc920f","97bd0b06bdb0722c965ce1cfcc920f","b027097bd097c36b0b6fc9274c91aa","97b6b97bd19801ec9210c965cc920e","97bcf97c359801ec95f8c965cc920f","97bd0b06bdb0722c965ce1cfcc920f","b027097bd097c36b0b6fc9274c91aa","9778397bd19801ec9210c965cc920e","97b6b97bd19801ec95f8c965cc920f","97bd09801d98082c95f8e1cfcc920f","97bd097bd097c36b0b6fc9210c8dc2","9778397bd197c36c9210c9274c91aa","97b6b97bd19801ec95f8c965cc920e","97bd09801d98082c95f8e1cfcc920f","97bd097bd097c36b0b6fc9210c8dc2","9778397bd097c36c9210c9274c91aa","97b6b97bd19801ec95f8c965cc920e","97bcf97c3598082c95f8e1cfcc920f","97bd097bd097c36b0b6fc9210c8dc2","9778397bd097c36c9210c9274c91aa","97b6b97bd19801ec9210c965cc920e","97bcf97c3598082c95f8c965cc920f","97bd097bd097c35b0b6fc920fb0722","9778397bd097c36b0b6fc9274c91aa","97b6b97bd19801ec9210c965cc920e","97bcf97c3598082c95f8c965cc920f","97bd097bd097c35b0b6fc920fb0722","9778397bd097c36b0b6fc9274c91aa","97b6b97bd19801ec9210c965cc920e","97bcf97c359801ec95f8c965cc920f","97bd097bd097c35b0b6fc920fb0722","9778397bd097c36b0b6fc9274c91aa","97b6b97bd19801ec9210c965cc920e","97bcf97c359801ec95f8c965cc920f","97bd097bd097c35b0b6fc920fb0722","9778397bd097c36b0b6fc9274c91aa","97b6b97bd19801ec9210c965cc920e","97bcf97c359801ec95f8c965cc920f","97bd097bd07f595b0b6fc920fb0722","9778397bd097c36b0b6fc9210c8dc2","9778397bd19801ec9210c9274c920e","97b6b97bd19801ec95f8c965cc920f","97bd07f5307f595b0b0bc920fb0722","7f0e397bd097c36b0b6fc9210c8dc2","9778397bd097c36c9210c9274c920e","97b6b97bd19801ec95f8c965cc920f","97bd07f5307f595b0b0bc920fb0722","7f0e397bd097c36b0b6fc9210c8dc2","9778397bd097c36c9210c9274c91aa","97b6b97bd19801ec9210c965cc920e","97bd07f1487f595b0b0bc920fb0722","7f0e397bd097c36b0b6fc9210c8dc2","9778397bd097c36b0b6fc9274c91aa","97b6b97bd19801ec9210c965cc920e","97bcf7f1487f595b0b0bb0b6fb0722","7f0e397bd097c35b0b6fc920fb0722","9778397bd097c36b0b6fc9274c91aa","97b6b97bd19801ec9210c965cc920e","97bcf7f1487f595b0b0bb0b6fb0722","7f0e397bd097c35b0b6fc920fb0722","9778397bd097c36b0b6fc9274c91aa","97b6b97bd19801ec9210c965cc920e","97bcf7f1487f531b0b0bb0b6fb0722","7f0e397bd097c35b0b6fc920fb0722","9778397bd097c36b0b6fc9274c91aa","97b6b97bd19801ec9210c965cc920e","97bcf7f1487f531b0b0bb0b6fb0722","7f0e397bd07f595b0b6fc920fb0722","9778397bd097c36b0b6fc9274c91aa","97b6b97bd19801ec9210c9274c920e","97bcf7f0e47f531b0b0bb0b6fb0722","7f0e397bd07f595b0b0bc920fb0722","9778397bd097c36b0b6fc9210c91aa","97b6b97bd197c36c9210c9274c920e","97bcf7f0e47f531b0b0bb0b6fb0722","7f0e397bd07f595b0b0bc920fb0722","9778397bd097c36b0b6fc9210c8dc2","9778397bd097c36c9210c9274c920e","97b6b7f0e47f531b0723b0b6fb0722","7f0e37f5307f595b0b0bc920fb0722","7f0e397bd097c36b0b6fc9210c8dc2","9778397bd097c36b0b70c9274c91aa","97b6b7f0e47f531b0723b0b6fb0721","7f0e37f1487f595b0b0bb0b6fb0722","7f0e397bd097c35b0b6fc9210c8dc2","9778397bd097c36b0b6fc9274c91aa","97b6b7f0e47f531b0723b0b6fb0721","7f0e27f1487f595b0b0bb0b6fb0722","7f0e397bd097c35b0b6fc920fb0722","9778397bd097c36b0b6fc9274c91aa","97b6b7f0e47f531b0723b0b6fb0721","7f0e27f1487f531b0b0bb0b6fb0722","7f0e397bd097c35b0b6fc920fb0722","9778397bd097c36b0b6fc9274c91aa","97b6b7f0e47f531b0723b0b6fb0721","7f0e27f1487f531b0b0bb0b6fb0722","7f0e397bd097c35b0b6fc920fb0722","9778397bd097c36b0b6fc9274c91aa","97b6b7f0e47f531b0723b0b6fb0721","7f0e27f1487f531b0b0bb0b6fb0722","7f0e397bd07f595b0b0bc920fb0722","9778397bd097c36b0b6fc9274c91aa","97b6b7f0e47f531b0723b0787b0721","7f0e27f0e47f531b0b0bb0b6fb0722","7f0e397bd07f595b0b0bc920fb0722","9778397bd097c36b0b6fc9210c91aa","97b6b7f0e47f149b0723b0787b0721","7f0e27f0e47f531b0723b0b6fb0722","7f0e397bd07f595b0b0bc920fb0722","9778397bd097c36b0b6fc9210c8dc2","977837f0e37f149b0723b0787b0721","7f07e7f0e47f531b0723b0b6fb0722","7f0e37f5307f595b0b0bc920fb0722","7f0e397bd097c35b0b6fc9210c8dc2","977837f0e37f14998082b0787b0721","7f07e7f0e47f531b0723b0b6fb0721","7f0e37f1487f595b0b0bb0b6fb0722","7f0e397bd097c35b0b6fc9210c8dc2","977837f0e37f14998082b0787b06bd","7f07e7f0e47f531b0723b0b6fb0721","7f0e27f1487f531b0b0bb0b6fb0722","7f0e397bd097c35b0b6fc920fb0722","977837f0e37f14998082b0787b06bd","7f07e7f0e47f531b0723b0b6fb0721","7f0e27f1487f531b0b0bb0b6fb0722","7f0e397bd097c35b0b6fc920fb0722","977837f0e37f14998082b0787b06bd","7f07e7f0e47f531b0723b0b6fb0721","7f0e27f1487f531b0b0bb0b6fb0722","7f0e397bd07f595b0b0bc920fb0722","977837f0e37f14998082b0787b06bd","7f07e7f0e47f531b0723b0b6fb0721","7f0e27f1487f531b0b0bb0b6fb0722","7f0e397bd07f595b0b0bc920fb0722","977837f0e37f14998082b0787b06bd","7f07e7f0e47f149b0723b0787b0721","7f0e27f0e47f531b0b0bb0b6fb0722","7f0e397bd07f595b0b0bc920fb0722","977837f0e37f14998082b0723b06bd","7f07e7f0e37f149b0723b0787b0721","7f0e27f0e47f531b0723b0b6fb0722","7f0e397bd07f595b0b0bc920fb0722","977837f0e37f14898082b0723b02d5","7ec967f0e37f14998082b0787b0721","7f07e7f0e47f531b0723b0b6fb0722","7f0e37f1487f595b0b0bb0b6fb0722","7f0e37f0e37f14898082b0723b02d5","7ec967f0e37f14998082b0787b0721","7f07e7f0e47f531b0723b0b6fb0722","7f0e37f1487f531b0b0bb0b6fb0722","7f0e37f0e37f14898082b0723b02d5","7ec967f0e37f14998082b0787b06bd","7f07e7f0e47f531b0723b0b6fb0721","7f0e37f1487f531b0b0bb0b6fb0722","7f0e37f0e37f14898082b072297c35","7ec967f0e37f14998082b0787b06bd","7f07e7f0e47f531b0723b0b6fb0721","7f0e27f1487f531b0b0bb0b6fb0722","7f0e37f0e37f14898082b072297c35","7ec967f0e37f14998082b0787b06bd","7f07e7f0e47f531b0723b0b6fb0721","7f0e27f1487f531b0b0bb0b6fb0722","7f0e37f0e366aa89801eb072297c35","7ec967f0e37f14998082b0787b06bd","7f07e7f0e47f149b0723b0787b0721","7f0e27f1487f531b0b0bb0b6fb0722","7f0e37f0e366aa89801eb072297c35","7ec967f0e37f14998082b0723b06bd","7f07e7f0e47f149b0723b0787b0721","7f0e27f0e47f531b0723b0b6fb0722","7f0e37f0e366aa89801eb072297c35","7ec967f0e37f14998082b0723b06bd","7f07e7f0e37f14998083b0787b0721","7f0e27f0e47f531b0723b0b6fb0722","7f0e37f0e366aa89801eb072297c35","7ec967f0e37f14898082b0723b02d5","7f07e7f0e37f14998082b0787b0721","7f07e7f0e47f531b0723b0b6fb0722","7f0e36665b66aa89801e9808297c35","665f67f0e37f14898082b0723b02d5","7ec967f0e37f14998082b0787b0721","7f07e7f0e47f531b0723b0b6fb0722","7f0e36665b66a449801e9808297c35","665f67f0e37f14898082b0723b02d5","7ec967f0e37f14998082b0787b06bd","7f07e7f0e47f531b0723b0b6fb0721","7f0e36665b66a449801e9808297c35","665f67f0e37f14898082b072297c35","7ec967f0e37f14998082b0787b06bd","7f07e7f0e47f531b0723b0b6fb0721","7f0e26665b66a449801e9808297c35","665f67f0e37f1489801eb072297c35","7ec967f0e37f14998082b0787b06bd","7f07e7f0e47f531b0723b0b6fb0721","7f0e27f1487f531b0b0bb0b6fb0722"],nStr1:["日","一","二","三","四","五","六","七","八","九","十"],nStr2:["初","十","廿","卅"],nStr3:["正","二","三","四","五","六","七","八","九","十","冬","腊"],lYearDays:function(t){var e,n=348;for(e=32768;e>8;e>>=1)n+=this.lunarInfo[t-1900]&e?1:0;return n+this.leapDays(t)},leapMonth:function(t){return 15&this.lunarInfo[t-1900]},leapDays:function(t){return this.leapMonth(t)?65536&this.lunarInfo[t-1900]?30:29:0},monthDays:function(t,e){return e>12||e<1?-1:this.lunarInfo[t-1900]&65536>>e?30:29},solarDays:function(t,e){if(e>12||e<1)return-1;var n=e-1;return 1==n?t%4==0&&t%100!=0||t%400==0?29:28:this.solarMonth[n]},toGanZhiYear:function(t){var e=(t-3)%10,n=(t-3)%12;return 0==e&&(e=10),0==n&&(n=12),this.Gan[e-1]+this.Zhi[n-1]},toAstro:function(t,e){var n="魔羯水瓶双鱼白羊金牛双子巨蟹狮子处女天秤天蝎射手魔羯",i=[20,19,21,21,21,22,23,23,23,23,22,22];return n.substr(2*t-(e<i[t-1]?2:0),2)+"座"},toGanZhi:function(t){return this.Gan[t%10]+this.Zhi[t%12]},getTerm:function(t,e){if(t<1900||t>2100)return-1;if(e<1||e>24)return-1;var n=this.sTermInfo[t-1900],i=[parseInt("0x"+n.substr(0,5)).toString(),parseInt("0x"+n.substr(5,5)).toString(),parseInt("0x"+n.substr(10,5)).toString(),parseInt("0x"+n.substr(15,5)).toString(),parseInt("0x"+n.substr(20,5)).toString(),parseInt("0x"+n.substr(25,5)).toString()],r=[i[0].substr(0,1),i[0].substr(1,2),i[0].substr(3,1),i[0].substr(4,2),i[1].substr(0,1),i[1].substr(1,2),i[1].substr(3,1),i[1].substr(4,2),i[2].substr(0,1),i[2].substr(1,2),i[2].substr(3,1),i[2].substr(4,2),i[3].substr(0,1),i[3].substr(1,2),i[3].substr(3,1),i[3].substr(4,2),i[4].substr(0,1),i[4].substr(1,2),i[4].substr(3,1),i[4].substr(4,2),i[5].substr(0,1),i[5].substr(1,2),i[5].substr(3,1),i[5].substr(4,2)];return parseInt(r[e-1])},toChinaMonth:function(t){if(t>12||t<1)return-1;var e=this.nStr3[t-1];return e+="月",e},toChinaDay:function(t){var e;switch(t){case 10:e="初十";break;case 20:e="二十";break;case 30:e="三十";break;default:e=this.nStr2[Math.floor(t/10)],e+=this.nStr1[t%10]}return e},getAnimal:function(t){return this.Animals[(t-4)%12]},solar2lunar:function(t,e,n){if(t<1900||t>2100)return-1;if(1900==t&&1==e&&n<31)return-1;if(t)i=new Date(t,parseInt(e)-1,n);else var i=new Date;var r,a=0,o=0,s=(t=i.getFullYear(),e=i.getMonth()+1,n=i.getDate(),(Date.UTC(i.getFullYear(),i.getMonth(),i.getDate())-Date.UTC(1900,0,31))/864e5);for(r=1900;r<2101&&s>0;r++)o=this.lYearDays(r),s-=o;s<0&&(s+=o,r--);var c=new Date,l=!1;c.getFullYear()==t&&c.getMonth()+1==e&&c.getDate()==n&&(l=!0);var u=i.getDay(),f=this.nStr1[u];0==u&&(u=7);var h=r,p=(a=this.leapMonth(r),!1);for(r=1;r<13&&s>0;r++)a>0&&r==a+1&&0==p?(--r,p=!0,o=this.leapDays(h)):o=this.monthDays(h,r),1==p&&r==a+1&&(p=!1),s-=o;0==s&&a>0&&r==a+1&&(p?p=!1:(p=!0,--r)),s<0&&(s+=o,--r);var d=r,v=s+1,g=e-1,y=this.toGanZhiYear(h),b=this.getTerm(t,2*e-1),x=this.getTerm(t,2*e),m=this.toGanZhi(12*(t-1900)+e+11);n>=b&&(m=this.toGanZhi(12*(t-1900)+e+12));var _=!1,S=null;b==n&&(_=!0,S=this.solarTerm[2*e-2]),x==n&&(_=!0,S=this.solarTerm[2*e-1]);var w=Date.UTC(t,g,1,0,0,0,0)/864e5+25567+10,A=this.toGanZhi(w+n-1),T=this.toAstro(e,n);return{lYear:h,lMonth:d,lDay:v,Animal:this.getAnimal(h),IMonthCn:(p?"闰":"")+this.toChinaMonth(d),IDayCn:this.toChinaDay(v),cYear:t,cMonth:e,cDay:n,gzYear:y,gzMonth:m,gzDay:A,isToday:l,isLeap:p,nWeek:u,ncWeek:"星期"+f,isTerm:_,Term:S,astro:T}},lunar2solar:function(t,e,n,i){i=!!i;var r=this.leapMonth(t);this.leapDays(t);if(i&&r!=e)return-1;if(2100==t&&12==e&&n>1||1900==t&&1==e&&n<31)return-1;var a=this.monthDays(t,e),o=a;if(i&&(o=this.leapDays(t,e)),t<1900||t>2100||n>o)return-1;for(var s=0,c=1900;c<t;c++)s+=this.lYearDays(c);var l=0,u=!1;for(c=1;c<e;c++)l=this.leapMonth(t),u||l<=c&&l>0&&(s+=this.leapDays(t),u=!0),s+=this.monthDays(t,c);i&&(s+=a);var f=Date.UTC(1900,1,30,0,0,0),h=new Date(864e5*(s+n-31)+f),p=h.getUTCFullYear(),d=h.getUTCMonth()+1,v=h.getUTCDate();return this.solar2lunar(p,d,v)}},r=i;e.default=r},fcfe:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("66fd")),r=a(n("2f62"));function a(t){return t&&t.__esModule?t:{default:t}}i.default.use(r.default);var o=new r.default.Store({state:{iconlib:[{iconname:"唱歌",url:"changge.png",isselect:!0,targetdays:1,jiyu:"哆唻咪发嗖拉嘻"},{iconname:"晨练",url:"chenlian.png",isselect:!1,targetdays:2,jiyu:"早起的鸟的有虫吃！！！"},{iconname:"跑步",url:"paobu.png",isselect:!1,targetdays:21,jiyu:"身体健康，万事如意！"},{iconname:"吃早餐",url:"chizaocan.png",isselect:!1,targetdays:4,jiyu:"不吃早餐胖100斤！！！"},{iconname:"画画",url:"huahua.png",isselect:!1,targetdays:21,jiyu:"画一个姑娘陪着我"},{iconname:"多喝烫水",url:"duohetangshui.png",isselect:!1,targetdays:21,jiyu:"多喝烫水o~"},{iconname:"与家人通话",url:"yujiarentonghua.png",isselect:!1,targetdays:21,jiyu:"常给爸妈打个电话"},{iconname:"减肥",url:"jianfei.png",isselect:!1,targetdays:21,jiyu:"不减100斤不睡觉！"},{iconname:"健身",url:"jianshen.png",isselect:!1,targetdays:21,jiyu:"新一代彭于晏"},{iconname:"戒酒",url:"jiejiu.png",isselect:!1,targetdays:21,jiyu:"吸酒有害健康！"},{iconname:"戒烟",url:"jieyan.png",isselect:!1,targetdays:21,jiyu:"喝烟有害健康！"},{iconname:"看书",url:"kanshu.png",isselect:!1,targetdays:21,jiyu:"文青在路上~"},{iconname:"学习",url:"xuexi.png",isselect:!1,targetdays:21,jiyu:"学习使我快乐！"},{iconname:"看电影",url:"kandianying.png",isselect:!1,targetdays:21,jiyu:"强推猩球崛起！"},{iconname:"微笑",url:"weixiao.png",isselect:!1,targetdays:21,jiyu:"笑一笑,十年笑"},{iconname:"吉他",url:"jita.png",isselect:!1,targetdays:21,jiyu:"想听你弹吉他"},{iconname:"练字",url:"lianzi.png",isselect:!1,targetdays:21,jiyu:"写得一手好字啊"},{iconname:"吃蔬菜",url:"chishucai.png",isselect:!1,targetdays:3,jiyu:"别光喝啊，吃菜！"},{iconname:"理财",url:"licai.png",isselect:!1,targetdays:21,jiyu:"如果有一天我变得很有钱~"},{iconname:"练钢琴",url:"liangangqin.png",isselect:!1,targetdays:21,jiyu:"想听你弹钢琴"},{iconname:"陪孩子",url:"peihaizi.png",isselect:!1,targetdays:21,jiyu:"从小我的妈妈告诉我穷人家的孩子早当家—王晗旭"},{iconname:"篮球",url:"lanqiu.png",isselect:!1,targetdays:21,jiyu:"想看你打篮球"},{iconname:"摄影",url:"sheying.png",isselect:!1,targetdays:21,jiyu:"美！"},{iconname:"刷牙",url:"shuaya.png",isselect:!1,targetdays:21,jiyu:"洗漱漱洗漱漱，欧欧"},{iconname:"听歌",url:"tingge.png",isselect:!1,targetdays:21,jiyu:"打个中国结，在几个红腰带"},{iconname:"滑板",url:"huaban.png",isselect:!1,targetdays:21,jiyu:"好酷的"},{iconname:"英语",url:"yingyu.png",isselect:!1,targetdays:21,jiyu:"四六级，冲！"},{iconname:"早起",url:"zaoqi.png",isselect:!1,targetdays:21,jiyu:"早起早睡，方能养生"},{iconname:"早睡",url:"zaoshui.png",isselect:!1,targetdays:21,jiyu:"早睡早起，方能养生"},{iconname:"做饭",url:"zuofan.png",isselect:!1,targetdays:21,jiyu:"真香！"}],houmendata:1}}),s=o;e.default=s}}]);
});

define('app.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){

require('./common/runtime.js')
require('./common/vendor.js')
require('./common/main.js')
});
require('app.js');

__wxRoute = 'colorui/components/cu-custom';__wxRouteBegin = true;__wxAppCurrentFile__ = 'colorui/components/cu-custom.js';

define('colorui/components/cu-custom.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["colorui/components/cu-custom"], {
  6770: function _(t, a, n) {
    "use strict";

    var e = function e() {
      var t = this,
          a = t.$createElement;
      t._self._c;
    },
        u = [];

    n.d(a, "a", function () {
      return e;
    }), n.d(a, "b", function () {
      return u;
    });
  },
  "93d9": function d9(t, a, n) {
    "use strict";

    (function (t) {
      Object.defineProperty(a, "__esModule", {
        value: !0
      }), a.default = void 0;
      var n = {
        data: function data() {
          return {
            StatusBar: this.StatusBar,
            CustomBar: this.CustomBar
          };
        },
        name: "cu-custom",
        computed: {
          style: function style() {
            var t = this.StatusBar,
                a = this.CustomBar,
                n = this.bgImage,
                e = "height:".concat(a, "px;padding-top:").concat(t, "px;");
            return this.bgImage && (e = "".concat(e, "background-image:url(").concat(n, ");")), e;
          }
        },
        props: {
          bgColor: {
            type: String,
            default: ""
          },
          isBack: {
            type: [Boolean, String],
            default: !1
          },
          bgImage: {
            type: String,
            default: ""
          }
        },
        methods: {
          BackPage: function BackPage() {
            t.navigateBack({
              delta: 1
            });
          }
        }
      };
      a.default = n;
    }).call(this, n("6e42")["default"]);
  },
  a8e2: function a8e2(t, a, n) {
    "use strict";

    n.r(a);
    var e = n("93d9"),
        u = n.n(e);

    for (var o in e) {
      "default" !== o && function (t) {
        n.d(a, t, function () {
          return e[t];
        });
      }(o);
    }

    a["default"] = u.a;
  },
  ab84: function ab84(t, a, n) {
    "use strict";

    n.r(a);
    var e = n("6770"),
        u = n("a8e2");

    for (var o in u) {
      "default" !== o && function (t) {
        n.d(a, t, function () {
          return u[t];
        });
      }(o);
    }

    var r = n("2877"),
        c = Object(r["a"])(u["default"], e["a"], e["b"], !1, null, null, null);
    a["default"] = c.exports;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['colorui/components/cu-custom-create-component', {
  'colorui/components/cu-custom-create-component': function coloruiComponentsCuCustomCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("ab84"));
  }
}, [['colorui/components/cu-custom-create-component']]]);
});
require('colorui/components/cu-custom.js');
__wxRoute = 'components/uni-calendar/uni-calendar-item';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-calendar/uni-calendar-item.js';

define('components/uni-calendar/uni-calendar-item.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-calendar/uni-calendar-item"], {
  "0149": function _(n, e, t) {
    "use strict";

    t.r(e);
    var a = t("5604"),
        u = t("5194");

    for (var r in u) {
      "default" !== r && function (n) {
        t.d(e, n, function () {
          return u[n];
        });
      }(r);
    }

    t("ec9d");
    var c = t("2877"),
        i = Object(c["a"])(u["default"], a["a"], a["b"], !1, null, null, null);
    e["default"] = i.exports;
  },
  5194: function _(n, e, t) {
    "use strict";

    t.r(e);
    var a = t("6c72"),
        u = t.n(a);

    for (var r in a) {
      "default" !== r && function (n) {
        t.d(e, n, function () {
          return a[n];
        });
      }(r);
    }

    e["default"] = u.a;
  },
  5604: function _(n, e, t) {
    "use strict";

    var a = function a() {
      var n = this,
          e = n.$createElement;
      n._self._c;
    },
        u = [];

    t.d(e, "a", function () {
      return a;
    }), t.d(e, "b", function () {
      return u;
    });
  },
  "6c72": function c72(n, e, t) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var a = {
      name: "UniCalendarItem",
      props: {
        canlender: {
          type: null,
          default: function _default() {
            return {};
          }
        },
        lunar: {
          type: Boolean,
          default: !1
        }
      },
      data: function data() {
        return {};
      },
      created: function created() {},
      methods: {
        selectDays: function selectDays(n, e, t, a, u) {
          this.$emit("selectDays", {
            week: n,
            index: e,
            ischeck: t,
            isDay: a,
            lunar: u
          });
        }
      }
    };
    e.default = a;
  },
  a5a7: function a5a7(n, e, t) {},
  ec9d: function ec9d(n, e, t) {
    "use strict";

    var a = t("a5a7"),
        u = t.n(a);
    u.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-calendar/uni-calendar-item-create-component', {
  'components/uni-calendar/uni-calendar-item-create-component': function componentsUniCalendarUniCalendarItemCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("0149"));
  }
}, [['components/uni-calendar/uni-calendar-item-create-component']]]);
});
require('components/uni-calendar/uni-calendar-item.js');
__wxRoute = 'components/uni-calendar/uni-calendar';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-calendar/uni-calendar.js';

define('components/uni-calendar/uni-calendar.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-calendar/uni-calendar"], {
  "2c51": function c51(t, e, a) {
    "use strict";

    var n = function n() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        i = [];

    a.d(e, "a", function () {
      return n;
    }), a.d(e, "b", function () {
      return i;
    });
  },
  3343: function _(t, e, a) {
    "use strict";

    a.r(e);
    var n = a("2c51"),
        i = a("9b31");

    for (var r in i) {
      "default" !== r && function (t) {
        a.d(e, t, function () {
          return i[t];
        });
      }(r);
    }

    a("59f6");
    var s = a("2877"),
        l = Object(s["a"])(i["default"], n["a"], n["b"], !1, null, null, null);
    e["default"] = l.exports;
  },
  "59f6": function f6(t, e, a) {
    "use strict";

    var n = a("de91"),
        i = a.n(n);
    i.a;
  },
  "9b31": function b31(t, e, a) {
    "use strict";

    a.r(e);
    var n = a("ad0a"),
        i = a.n(n);

    for (var r in n) {
      "default" !== r && function (t) {
        a.d(e, t, function () {
          return n[t];
        });
      }(r);
    }

    e["default"] = i.a;
  },
  ad0a: function ad0a(t, e, a) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var n = i(a("f976"));

    function i(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    function r(t, e) {
      return u(t) || l(t, e) || s();
    }

    function s() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }

    function l(t, e) {
      var a = [],
          n = !0,
          i = !1,
          r = void 0;

      try {
        for (var s, l = t[Symbol.iterator](); !(n = (s = l.next()).done); n = !0) {
          if (a.push(s.value), e && a.length === e) break;
        }
      } catch (u) {
        i = !0, r = u;
      } finally {
        try {
          n || null == l["return"] || l["return"]();
        } finally {
          if (i) throw r;
        }
      }

      return a;
    }

    function u(t) {
      if (Array.isArray(t)) return t;
    }

    var o = function o() {
      return a.e("components/uni-calendar/uni-calendar-item").then(a.bind(null, "0149"));
    },
        h = {
      name: "UniCalendar",
      components: {
        uniCalendarItem: o
      },
      props: {
        date: {
          type: String,
          default: ""
        },
        selected: {
          type: Array,
          default: function _default() {
            return [];
          }
        },
        lunar: {
          type: Boolean,
          default: !1
        },
        disableBefore: {
          type: Boolean,
          default: !1
        },
        startDate: {
          type: String,
          default: ""
        },
        endDate: {
          type: String,
          default: ""
        },
        range: {
          type: Boolean,
          default: !1
        },
        insert: {
          type: Boolean,
          default: !1
        }
      },
      data: function data() {
        return {
          maskShow: !1,
          aniMaskShow: !1,
          dateShow: !1,
          canlender: {
            weeks: []
          },
          multiple: 0,
          multipleDates: {
            begin: "",
            end: "",
            data: []
          },
          isLunar: !1
        };
      },
      watch: {
        date: function date() {
          this.init();
        },
        selected: function selected() {
          this.init();
        },
        lunar: function lunar(t) {
          this.isLunar = t, this.init();
        },
        disableBefore: function disableBefore() {
          this.init();
        },
        startDate: function startDate() {
          this.init();
        },
        endDate: function endDate() {
          this.init();
        }
      },
      created: function created() {
        this.isLunar = this.lunar, this.init();
      },
      methods: {
        init: function init() {
          this.getMonthAll(0, this.date, !0);
        },
        open: function open() {
          var t = this;
          this.maskShow = !0, this.multiple = 0, this.multipleDates.data = [], this.multipleDates.begin = "", this.multipleDates.end = "", this.init(), this.$nextTick(function () {
            setTimeout(function () {
              return t.aniMaskShow = !0;
            }, 30);
          });
        },
        close: function close() {
          var t = this;
          this.aniMaskShow = !1, this.$nextTick(function () {
            setTimeout(function () {
              return t.maskShow = !1;
            }, 300);
          });
        },
        confirm: function confirm() {
          this.setEmit("confirm"), this.close();
        },
        getMonthAll: function getMonthAll(t, e) {
          "" === e && (e = new Date());
          var a = this.getWeek(this.getDate(e, t, "month"));
          this.canlender = a, this.insert && this.setEmit("change");
        },
        setEmit: function setEmit(t) {
          var e = this.canlender;
          this.$emit(t, {
            range: this.range ? this.multipleDates : {},
            year: e.year,
            month: e.month,
            date: e.date,
            lunar: e.lunar,
            clockinfo: e.clockinfo || {},
            fulldate: e.year + "-" + e.month + "-" + e.date
          });
        },
        isDisableBefore: function isDisableBefore(t, e, a) {
          var n = this.date || new Date(),
              i = t + "-" + e + "-" + a,
              r = !1,
              s = !1;
          return this.startDate && (r = this.dateCompare(this.startDate, i)), this.endDate && (s = this.dateCompare(this.getDate(this.endDate, 1), i)), this.disableBefore ? this.startDate ? !this.dateCompare(this.getDate(n, 0), i) || !r || s : this.endDate ? !this.dateCompare(this.getDate(n, 0), i) || s : !this.dateCompare(this.getDate(n, 0), i) : this.startDate ? !r || s : !!this.endDate && s;
        },
        backtoday: function backtoday() {
          this.getMonthAll(0, this.date);
        },
        dataBefor: function dataBefor(t, e) {
          var a = this.canlender.year + "-" + this.canlender.month + "-" + this.canlender.date;
          this.getMonthAll(t, a);
        },
        selectDays: function selectDays(t) {
          var e = t.week,
              a = t.index,
              n = t.ischeck,
              i = t.isDay;

          if (n && !i) {
            var r = this.canlender,
                s = r.weeks[e][a].month < 10 ? "0" + r.weeks[e][a].month : r.weeks[e][a].month,
                l = r.weeks[e][a].date < 10 ? "0" + r.weeks[e][a].date : r.weeks[e][a].date,
                u = r.year + "-" + s + "-" + l;
            if (this.isClick = !0, 0 === this.multiple) this.multipleDates.begin = u, this.multiple = 1;else if (1 === this.multiple) {
              this.multiple = 2, this.multipleDates.data && (this.multipleDates.data = []);
              var o = this.dateCompare(this.multipleDates.begin, u);
              o ? (this.multipleDates.data = this.geDateAll(this.multipleDates.begin, u), this.multipleDates.end = u) : (this.multipleDates.data = this.geDateAll(u, this.multipleDates.begin), this.multipleDates.end = this.multipleDates.begin, this.multipleDates.begin = u);
            } else this.multiple = 0, this.multipleDates.data = [], this.multipleDates.begin = "", this.multipleDates.end = "";
            this.getMonthAll(0, u);
          }
        },
        getWeek: function getWeek(t) {
          var e = this;
          "object" !== typeof t && (t = t.replace(/-/g, "/"));

          for (var a = this.selected, i = this.getDate(this.date || new Date()), s = this.getNewDate(t), l = s.year, u = s.month, o = s.date, h = s.day, d = [], c = {
            firstDay: new Date(l, u - 1, 1).getDay(),
            lastMonthDays: [],
            currentMonthDys: [],
            nextMonthDays: [],
            endDay: new Date(l, u, 0).getDay(),
            weeks: []
          }, f = c.firstDay; f > 0; f--) {
            var D = new Date(l, u - 1, 1 - f).getDate() + "";
            c.lastMonthDays.push({
              date: D,
              month: u - 1,
              disable: this.isDisableBefore(l, u - 1, D),
              lunar: this.getlunar(l, u - 1, D),
              isDay: !1
            });
          }

          for (var m = {
            have: !1
          }, p = function p(t) {
            for (var n = !1, s = {}, h = 0; h < a.length; h++) {
              var d = a[h].date.split("-");
              Number(l) === Number(d[0]) && Number(u) === Number(d[1]) && Number(t) === Number(d[2]) && (n = !0, s.have = !0, s.date = a[h].date, a[h].info && (s.info = a[h].info), "{}" !== JSON.stringify(a[h].data) && void 0 === a[h].data || (s.data = a[h].data), Number(l) === Number(d[0]) && Number(u) === Number(d[1]) && Number(o) === Number(d[2]) && (m = s));
            }

            var f = e.multipleDates,
                D = f.begin,
                p = f.end,
                g = f.data,
                y = D.split("-"),
                b = r(y, 3),
                v = b[0],
                w = b[1],
                k = b[2],
                M = p.split("-"),
                N = r(M, 3),
                B = N[0],
                A = N[1],
                S = N[2],
                C = !1,
                x = !1,
                E = !1;
            g.forEach(function (e, a) {
              var n = e.split("-"),
                  i = r(n, 3),
                  s = i[0],
                  o = i[1],
                  h = i[2];
              l === Number(s) && u === Number(o) && t === Number(h) && (C = !0);
            }), l === Number(v) && u === Number(w) && t === Number(k) && (x = !0), l === Number(B) && u === Number(A) && t === Number(S) && (E = !0), c.currentMonthDys.push({
              checked: !!e.range && C,
              multipleBegin: !!e.range && x,
              multipleEnd: !!e.range && E,
              date: t + "",
              month: u,
              have: n,
              clockinfo: s,
              disable: e.isDisableBefore(l, u, t + ""),
              lunar: e.getlunar(l, u, t + ""),
              isDay: i === l + "-" + (u < 10 ? "0" + u : u) + "-" + (t < 10 ? "0" + t : t)
            });
          }, g = 1; g <= new Date(l, u, 0).getDate(); g++) {
            p(g);
          }

          for (var y = 42 - (c.lastMonthDays.length + c.currentMonthDys.length), b = 1; b < y + 1; b++) {
            c.nextMonthDays.push({
              date: b + "",
              month: u + 1,
              disable: this.isDisableBefore(l, u + 1, b + ""),
              lunar: this.getlunar(l, u + 1, b + ""),
              isDay: !1
            });
          }

          d = d.concat(c.lastMonthDays, c.currentMonthDys, c.nextMonthDays);

          for (var v = 0; v < d.length; v++) {
            v % 7 === 0 && (c.weeks[parseInt(v / 7)] = new Array(7)), c.weeks[parseInt(v / 7)][v % 7] = d[v];
          }

          return {
            weeks: c.weeks,
            month: u,
            date: o,
            day: h,
            year: l,
            clockinfo: m,
            lunar: n.default.solar2lunar(l, u, o),
            lastDate: c.currentMonthDys[c.currentMonthDys.length - 1].date
          };
        },
        getlunar: function getlunar(t, e, a) {
          return n.default.solar2lunar(t, e, a).IDayCn;
        },
        getNewDate: function getNewDate(t) {
          var e = new Date(t);
          return {
            year: e.getFullYear(),
            month: e.getMonth() + 1,
            date: e.getDate(),
            day: e.getDay()
          };
        },
        getDate: function getDate(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
              a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "day";
          "object" !== typeof t && (t = t.replace(/-/g, "/"));
          var n = new Date(t);

          switch (a) {
            case "day":
              n.setDate(n.getDate() + e);
              break;

            case "month":
              31 === n.getDate() ? n.setDate(n.getDate() + e) : n.setMonth(n.getMonth() + e);
              break;

            case "year":
              n.setFullYear(n.getFullYear() + e);
              break;
          }

          var i = n.getFullYear(),
              r = n.getMonth() + 1 < 10 ? "0" + (n.getMonth() + 1) : n.getMonth() + 1,
              s = n.getDate() < 10 ? "0" + n.getDate() : n.getDate();
          return i + "-" + r + "-" + s;
        },
        dateCompare: function dateCompare(t, e) {
          return t = new Date(t.replace("-", "/").replace("-", "/")), e = new Date(e.replace("-", "/").replace("-", "/")), t <= e;
        },
        geDateAll: function geDateAll(t, e) {
          var a = [],
              n = t.split("-"),
              i = e.split("-"),
              r = new Date();
          r.setFullYear(n[0], n[1] - 1, n[2]);
          var s = new Date();
          s.setFullYear(i[0], i[1] - 1, i[2]);

          for (var l = r.getTime() - 864e5, u = s.getTime() - 864e5, o = l; o <= u;) {
            o += 864e5, a.push(this.getDate(new Date(parseInt(o))));
          }

          return a;
        }
      }
    };

    e.default = h;
  },
  de91: function de91(t, e, a) {}
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-calendar/uni-calendar-create-component', {
  'components/uni-calendar/uni-calendar-create-component': function componentsUniCalendarUniCalendarCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("3343"));
  }
}, [['components/uni-calendar/uni-calendar-create-component']]]);
});
require('components/uni-calendar/uni-calendar.js');
__wxRoute = 'components/uni-number-box/uni-number-box';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-number-box/uni-number-box.js';

define('components/uni-number-box/uni-number-box.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-number-box/uni-number-box"], {
  "14fb": function fb(t, e, n) {
    "use strict";

    var u = n("2dd7"),
        i = n.n(u);
    i.a;
  },
  "2dd7": function dd7(t, e, n) {},
  "558e": function e(t, _e, n) {
    "use strict";

    n.r(_e);
    var u = n("bda7"),
        i = n.n(u);

    for (var a in u) {
      "default" !== a && function (t) {
        n.d(_e, t, function () {
          return u[t];
        });
      }(a);
    }

    _e["default"] = i.a;
  },
  "81da": function da(t, e, n) {
    "use strict";

    var u = function u() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        i = [];

    n.d(e, "a", function () {
      return u;
    }), n.d(e, "b", function () {
      return i;
    });
  },
  "89a5": function a5(t, e, n) {
    "use strict";

    n.r(e);
    var u = n("81da"),
        i = n("558e");

    for (var a in i) {
      "default" !== a && function (t) {
        n.d(e, t, function () {
          return i[t];
        });
      }(a);
    }

    n("14fb");
    var l = n("2877"),
        s = Object(l["a"])(i["default"], u["a"], u["b"], !1, null, null, null);
    e["default"] = s.exports;
  },
  bda7: function bda7(t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var u = {
      name: "uni-number-box",
      props: {
        value: {
          type: [Number, String],
          default: 1
        },
        min: {
          type: Number,
          default: 0
        },
        max: {
          type: Number,
          default: 100
        },
        step: {
          type: Number,
          default: 1
        },
        disabled: {
          type: Boolean,
          default: !1
        }
      },
      data: function data() {
        return {
          inputValue: 0
        };
      },
      watch: {
        value: function value(t) {
          this.inputValue = +t;
        },
        inputValue: function inputValue(t, e) {
          +t !== +e && this.$emit("change", t);
        }
      },
      methods: {
        _calcValue: function _calcValue(t) {
          if (!this.disabled) {
            var e = this._getDecimalScale(),
                n = this.inputValue * e,
                u = this.step * e;

            "minus" === t ? n -= u : "plus" === t && (n += u), n < this.min || n > this.max || (this.inputValue = n / e);
          }
        },
        _getDecimalScale: function _getDecimalScale() {
          var t = 1;
          return ~~this.step !== this.step && (t = Math.pow(10, (this.step + "").split(".")[1].length)), t;
        },
        _onBlur: function _onBlur(t) {
          var e = t.detail.value;
          e ? (e = +e, e > this.max ? e = this.max : e < this.min && (e = this.min), this.inputValue = e) : this.inputValue = 0;
        }
      },
      created: function created() {
        this.inputValue = +this.value;
      }
    };
    e.default = u;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-number-box/uni-number-box-create-component', {
  'components/uni-number-box/uni-number-box-create-component': function componentsUniNumberBoxUniNumberBoxCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("89a5"));
  }
}, [['components/uni-number-box/uni-number-box-create-component']]]);
});
require('components/uni-number-box/uni-number-box.js');

__wxRoute = 'pages/index/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/index/index.js';

define('pages/index/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{4446:function(e,t,n){"use strict";(function(e){n("9805"),n("921b");a(n("66fd"));var t=a(n("5e9e"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},"5e1d":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c},u=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return u})},"5e9e":function(e,t,n){"use strict";n.r(t);var a=n("5e1d"),u=n("c5bb");for(var c in u)"default"!==c&&function(e){n.d(t,e,function(){return u[e]})}(c);var r=n("2877"),o=Object(r["a"])(u["default"],a["a"],a["b"],!1,null,null,null);t["default"]=o.exports},c5bb:function(e,t,n){"use strict";n.r(t);var a=n("cbc2"),u=n.n(a);for(var c in a)"default"!==c&&function(e){n.d(t,e,function(){return a[e]})}(c);t["default"]=u.a},cbc2:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{}},onLoad:function(){this.loadExecution()},methods:{loadExecution:function(){try{var t=e.getStorageSync("launchFlag");t?1==t?e.switchTab({url:"/pages/tabBar/chat/chat"}):e.redirectTo({url:"/pages/index/guide"}):(e.setStorage({key:"launchFlag",data:!1,success:function(){}}),e.redirectTo({url:"/pages/index/guide"}))}catch(n){e.setStorage({key:"launchFlag",data:!1,success:function(){}}),e.redirectTo({url:"/pages/index/guide"})}}}};t.default=n}).call(this,n("6e42")["default"])}},[["4446","common/runtime","common/vendor"]]]);
});
require('pages/index/index.js');
__wxRoute = 'pages/index/guide';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/index/guide.js';

define('pages/index/guide.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/guide"],{5505:function(t,a,e){"use strict";e.r(a);var i=e("a246"),n=e("5ef1");for(var s in n)"default"!==s&&function(t){e.d(a,t,function(){return n[t]})}(s);e("95b4");var u=e("2877"),o=Object(u["a"])(n["default"],i["a"],i["b"],!1,null,null,null);a["default"]=o.exports},"5ef1":function(t,a,e){"use strict";e.r(a);var i=e("683c"),n=e.n(i);for(var s in i)"default"!==s&&function(t){e.d(a,t,function(){return i[t]})}(s);a["default"]=n.a},"683c":function(t,a,e){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=n(e("fcfe"));function n(t){return t&&t.__esModule?t:{default:t}}var s,u=function(){return e.e("components/uni-number-box/uni-number-box").then(e.bind(null,"89a5"))};function o(t){var a=new Date,e=a.getFullYear(),i=a.getMonth()+1,n=a.getDate();return"start"===t?e-=60:"end"===t&&(e+=2),i=i>9?i:"0"+i,n=n>9?n:"0"+n,"".concat(e,"-").concat(i,"-").concat(n)}var r={components:{uniNumberBox:u},data:function(){return{modalName:null,experience:"立即体验",uuid:"",iconlist:[],initjiyu:"写给完成目标后的你...",isselecthabit:{"唱歌":!1,"晨练":!1,"跑步":!1,"吃早餐":!1,"画画":!1,"多喝烫水":!1,"与家人通话":!1,"减肥":!1,"健身":!1,"戒酒":!1,"戒烟":!1,"看书":!1,"学习":!1,"看电影":!1,"微笑":!1,"吉他":!1,"练字":!1,"吃蔬菜":!1,"理财":!1,"练钢琴":!1,"陪孩子":!1,"篮球":!1,"摄影":!1,"刷牙":!1,"听歌":!1,"滑板":!1,"英语":!1,"早起":!1,"早睡":!1,"做饭":!1},item_id:"slide1",dayvalue:21,nowselect:"目标",pname:"",tempsex:"Ta",psex:"",pcallme:"",pavatar:"../../static/touxiang/avatar.png",myname:"",mysex:"",myIdentity:"",mybirthday:o({format:!0}),myavatar:"../../static/touxiang/avatar.png",startDate:o("start"),endDate:o("end")}},methods:{showModal1:function(t){this.modalName="DialogModal1"},showModal2:function(t){this.modalName="DialogModal2"},hideModal1:function(t){this.modalName=null},hideModal2:function(t){this.modalName=null,this.showModal1()},makeallsetStorage:function(){t.setStorage({key:"uuid",data:this.uuid}),t.setStorage({key:"isselecthabit",data:this.isselecthabit}),t.setStorage({key:"pname",data:this.pname}),t.setStorage({key:"psex",data:this.psex}),t.setStorage({key:"pcallme",data:this.pcallme}),t.setStorage({key:"pavatar",data:this.pavatar}),t.setStorage({key:"myname",data:this.myname}),t.setStorage({key:"mysex",data:this.mysex}),t.setStorage({key:"myIdentity",data:this.myIdentity}),t.setStorage({key:"mybirthday",data:this.mybirthday}),t.setStorage({key:"myavatar",data:this.myavatar}),t.request({url:"http://47.104.95.72:5000/usermanage",method:"POST",data:[this.uuid,this.isselecthabit,this.pname,this.psex,this.pcallme,this.pavatar,this.myname,this.mysex,this.myIdentity,this.mybirthday,this.myavatar]})},getallsetStorage:function(){var a=this;t.request({url:"http://47.104.95.72:5000/likes",method:"POST",data:this.uuid,success:function(e){a.isselecthabit=e.data[1],a.pname=e.data[2],a.psex=e.data[3],a.pcallme=e.data[4],a.pavatar=e.data[5],a.myname=e.data[6],a.mysex=e.data[7],a.myIdentity=e.data[8],a.mybirthday=e.data[9],a.myavatar=e.data[10],t.setStorage({key:"uuid",data:s.uuid}),t.setStorage({key:"isselecthabit",data:a.isselecthabit}),t.setStorage({key:"pname",data:a.pname}),t.setStorage({key:"psex",data:a.psex}),t.setStorage({key:"pcallme",data:a.pcallme}),t.setStorage({key:"pavatar",data:a.pavatar}),t.setStorage({key:"myname",data:a.myname}),t.setStorage({key:"mysex",data:a.mysex}),t.setStorage({key:"myIdentity",data:a.myIdentity}),t.setStorage({key:"mybirthday",data:a.mybirthday}),t.setStorage({key:"myavatar",data:a.myavatar})}})},launchFlag:function(a){t.setStorage({key:"launchFlag",data:!0}),0==a?this.getallsetStorage():this.makeallsetStorage(),t.switchTab({url:"/pages/tabBar/chat/chat"})},getDeviceInfo:function(){plus.device.getInfo({success:function(a){s.uuid=a.uuid,t.request({url:"http://47.104.95.72:5000/user_info",data:{uuid:s.uuid},success:function(t){"1"==t.data&&s.showModal1()},fail:function(){s.uuid="网络异常"},complete:function(){}})}})},habitClick:function(t,a){this.isselecthabit[a]?this.isselecthabit[a]=!1:this.isselecthabit[a]=!0,this.initjiyu=this.iconlist[t].jiyu},goChange:function(t){var a=t.detail.current+1;this.item_id="slide"+a},go2:function(){this.item_id="slide2"},go3:function(){this.item_id="slide3"},sexchange:function(t){this.psex=t.detail.value,"girlfriend"==this.psex&&(this.tempsex="她"),"boyfriend"==this.psex&&(this.tempsex="他")},mysexchange:function(t){this.mysex=t.detail.value},indentitychange:function(t){this.myIdentity=t.detail.value},setpAvatar:function(){var a=this;t.chooseImage({count:1,success:function(e){var i=e.tempFilePaths;t.saveFile({tempFilePath:i[0],success:function(e){a.pavatar=e.savedFilePath,t.setStorage({key:"pavatar",data:a.pavatar})}})}})},setAvatar:function(){var a=this;t.chooseImage({count:1,success:function(e){var i=e.tempFilePaths;t.saveFile({tempFilePath:i[0],success:function(e){a.myavatar=e.savedFilePath,t.setStorage({key:"myavatar",data:a.myavatar})}})}})},bindDateChange:function(t){this.mybirthday=t.target.value}},mounted:function(){this.iconlist=i.default.state.iconlib},onLoad:function(){s=this,this.getDeviceInfo()},computed:{friendname:function(){var t=this.pname;return""==t?"Ta":this.pname}}};a.default=r}).call(this,e("6e42")["default"])},"727f":function(t,a,e){"use strict";(function(t){e("9805"),e("921b");i(e("66fd"));var a=i(e("5505"));function i(t){return t&&t.__esModule?t:{default:t}}t(a.default)}).call(this,e("6e42")["createPage"])},"95b4":function(t,a,e){"use strict";var i=e("c93c"),n=e.n(i);n.a},a246:function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement;t._self._c},n=[];e.d(a,"a",function(){return i}),e.d(a,"b",function(){return n})},c93c:function(t,a,e){}},[["727f","common/runtime","common/vendor"]]]);
});
require('pages/index/guide.js');
__wxRoute = 'pages/tabBar/habitList/habitList';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/tabBar/habitList/habitList.js';

define('pages/tabBar/habitList/habitList.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabBar/habitList/habitList"],{"009f":function(t,e,n){"use strict";n.r(e);var a=n("975e"),i=n("0a42");for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);n("8518");var u=n("2877"),c=Object(u["a"])(i["default"],a["a"],a["b"],!1,null,null,null);e["default"]=c.exports},"0a42":function(t,e,n){"use strict";n.r(e);var a=n("a814"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);e["default"]=i.a},1829:function(t,e,n){"use strict";(function(t){n("9805"),n("921b");a(n("66fd"));var e=a(n("009f"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"712c":function(t,e,n){},8518:function(t,e,n){"use strict";var a=n("712c"),i=n.n(a);i.a},"975e":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i})},a814:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a,i=o(n("fcfe"));function o(t){return t&&t.__esModule?t:{default:t}}var u={data:function(){return{chooselist:[],chooseurl:"",url:"intochart1?iconname=",isselecthabit:{}}},onLoad:function(){this.chooselist=i.default.state.iconlib,a=this,this.getallsetStorage()},methods:{gotochartslist:function(e){a.url="intochart1?iconname=",a.url+=e,t.navigateTo({url:a.url,animationDuration:200})},getallsetStorage:function(){var e=this;t.getStorage({key:"isselecthabit",success:function(t){e.isselecthabit=t.data}})}},onShow:function(){this.getallsetStorage()}};e.default=u}).call(this,n("6e42")["default"])}},[["1829","common/runtime","common/vendor"]]]);
});
require('pages/tabBar/habitList/habitList.js');
__wxRoute = 'pages/tabBar/chat/chat';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/tabBar/chat/chat.js';

define('pages/tabBar/chat/chat.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabBar/chat/chat"],{"0d09":function(t,e,s){},"5d90":function(t,e,s){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i,a=n(s("fcfe"));function n(t){return t&&t.__esModule?t:{default:t}}function c(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}var o={data:function(){var t;return t={myavatar:"",pavatar:"",pname:"",xuguanlist:[],selectedXG:"../../../static/daka.png",textMsg:"",isHistoryLoading:!1,scrollAnimation:!1,scrollTop:0,scrollToView:"",msgList:[],msgImgList:[],myuid:0,yuliao:[],popupLayerClass:"",hideMore:!0,hideEmoji:!0,uuid:"",isselecthabit:{}},c(t,"pname",""),c(t,"pavatar","../../static/touxiang/avatar.png"),c(t,"myname",""),c(t,"myavatar","../../static/touxiang/avatar.png"),t},onTabItemTap:function(t){this.getallstorage()},onReady:function(){this.getallstorage()},onLoad:function(t){i=this,this.getallstorage(),this.getMsgList(),this.xuguanlist=a.default.state.iconlib},onShow:function(){var e=this;this.scrollTop=9999999,this.getallstorage(),t.getStorage({key:"redEnvelopeData",success:function(s){var i=new Date,a=e.msgList[e.msgList.length-1].msg.id;a++;var n={type:"user",msg:{id:a,type:"redEnvelope",time:i.getHours()+":"+i.getMinutes(),userinfo:{uid:0,username:"大黑哥",face:"/static/img/face.jpg"},content:{blessing:s.data.blessing,rid:Math.floor(1e3*Math.random()+1),isReceived:!1}}};e.screenMsg(n),t.removeStorage({key:"redEnvelopeData"})}})},methods:{getallstorage:function(){var e=this;t.getStorage({key:"isselecthabit",success:function(t){e.isselecthabit=t.data}}),t.getStorage({key:"myname",success:function(t){e.myname=t.data}}),t.getStorage({key:"pname",success:function(t){e.pname=t.data},fail:function(t){e.pname="陪伴人"}}),t.getStorage({key:"myavatar",success:function(t){e.myavatar=t.data},fail:function(t){e.myavatar="../../../static/touxiang/avatar.png"}}),t.setStorage({key:"psex",data:this.psex}),t.setStorage({key:"pcallme",data:this.pcallme}),t.setStorage({key:"mysex",data:this.mysex}),t.setStorage({key:"myIdentity",data:this.myIdentity}),t.setStorage({key:"mybirthday",data:this.mybirthday}),t.getStorage({key:"pavatar",success:function(t){e.pavatar=t.data},fail:function(t){e.pavatar="../../../static/vippage/vipicon/heart.png"}}),t.getStorage({key:"uuid",success:function(t){e.uuid=t.data}})},screenMsg:function(t){if("system"==t.type)switch(t.msg.type){case"text":this.addSystemTextMsg(t);break;case"redEnvelope":this.addSystemRedEnvelopeMsg(t);break}else if("user"==t.type)switch(t.msg.type){case"text":this.addTextMsg(t);break;case"voice":this.addVoiceMsg(t);break;case"img":this.addImgMsg(t);break;case"redEnvelope":this.addRedEnvelopeMsg(t);break}this.$nextTick(function(){this.scrollToView="msg"+t.msg.id})},loadHistory:function(t){var e=this;if(!this.isHistoryLoading){this.isHistoryLoading=!0,this.scrollAnimation=!1;var s=this.msgList[0].msg.id;setTimeout(function(){e.$nextTick(function(){this.scrollToView="msg"+s,this.$nextTick(function(){this.scrollAnimation=!0})}),e.isHistoryLoading=!1},1e3)}},getMsgList:function(){for(var t=[{type:"user",msg:{id:1,type:"text",time:"12:56",userinfo:{uid:1,username:"大黑哥",face:"/static/img/face.jpg"},content:{text:this.myname+"你终于来了！木各习惯欢迎你!!我是"+this.pname}}},{type:"user",msg:{id:1,type:"text",time:"12:56",userinfo:{uid:1,username:"大黑哥",face:"/static/img/face.jpg"},content:{text:"期待跟你一起变成更优秀的人!哈哈哈!!"}}},{type:"user",msg:{id:1,type:"text",time:"12:56",userinfo:{uid:1,username:"大黑哥",face:"/static/img/face.jpg"},content:{text:"点击输入框选择你要打卡的习惯"}}},{type:"user",msg:{id:1,type:"text",time:"12:56",userinfo:{uid:1,username:"大黑哥",face:"/static/img/face.jpg"},content:{text:"点击+号可添加新的习惯"}}},{type:"user",msg:{id:1,type:"text",time:"12:56",userinfo:{uid:1,username:"大黑哥",face:"/static/img/face.jpg"},content:{text:"我会帮你记录你的习惯历程"}}},{type:"user",msg:{id:1,type:"text",time:"12:56",userinfo:{uid:1,username:"大黑哥",face:"/static/img/face.jpg"},content:{text:"我也会陪你一起完成你的习惯计划,记得常来看看我哦~"}}},{type:"user",msg:{id:1,type:"text",time:"12:56",userinfo:{uid:1,username:"大黑哥",face:"/static/img/face.jpg"},content:{text:"开始我们的旅程吧..."}}}],e=0;e<t.length;e++)"user"==t[e].type&&"img"==t[e].msg.type&&(t[e].msg.content=this.setPicSize(t[e].msg.content),this.msgImgList.push(t[e].msg.content.url));this.msgList=t,this.$nextTick(function(){this.scrollTop=9999,this.$nextTick(function(){this.scrollAnimation=!0})})},setPicSize:function(e){var s=t.upx2px(350),i=t.upx2px(350);if(e.w>s||e.h>i){var a=e.w/e.h;e.w=a>1?s:i*a,e.h=a>1?s/a:i}return e},showMore:function(){this.isVoice=!1,this.hideEmoji=!0,this.hideMore?(this.hideMore=!1,this.openDrawer()):this.hideDrawer()},openDrawer:function(){this.popupLayerClass="showLayer"},hideDrawer:function(){var t=this;this.popupLayerClass="",setTimeout(function(){t.hideMore=!0,t.hideEmoji=!0},150)},chooseImage:function(){this.getImage("album")},camera:function(){this.getImage("camera")},getImage:function(e){var s=this;this.hideDrawer(),t.chooseImage({sourceType:[e],sizeType:["original","compressed"],success:function(e){for(var i=function(i){t.getImageInfo({src:e.tempFilePaths[i],success:function(t){var a={url:e.tempFilePaths[i],w:t.width,h:t.height};s.sendMsg(a,"img")}})},a=0;a<e.tempFilePaths.length;a++)i(a)}})},chooseXG:function(){this.hideMore=!0,this.hideEmoji?(this.hideEmoji=!1,this.openDrawer()):this.hideDrawer()},addEmoji:function(t){this.textMsg+=t.alt},daka:function(t){this.textMsg="",this.textMsg+=t.iconname,this.selectedXG="../../../static/iconfont/"+t.url},delXG:function(e){var s=this;t.showModal({title:"删除习惯",content:"确定删除"+e.iconname+"?",success:function(i){i.confirm&&(t.showToast({icon:"success",title:"删除成功"}),s.isselecthabit[e.iconname]=!1,t.setStorage({key:"isselecthabit",data:s.isselecthabit}),t.request({url:"http://47.104.95.72:5000/usermanage",method:"POST",data:[s.uuid,s.isselecthabit,s.pname,s.psex,s.pcallme,s.pavatar,s.myname,s.mysex,s.myIdentity,s.mybirthday,s.myavatar]}))}})},clearInput:function(){this.textMsg="",this.selectedXG="../../../static/daka.png"},addxiguan:function(e){var s=this;t.showModal({title:"添加习惯",content:"确定添加"+e.iconname+"?",success:function(i){i.confirm&&(t.showToast({icon:"success",title:"添加成功"}),s.isselecthabit[e.iconname]=!0,t.setStorage({key:"isselecthabit",data:s.isselecthabit}),t.request({url:"http://47.104.95.72:5000/usermanage",method:"POST",data:[s.uuid,s.isselecthabit,s.pname,s.psex,s.pcallme,s.pavatar,s.myname,s.mysex,s.myIdentity,s.mybirthday,s.myavatar]}))}})},textareaFocus:function(){"showLayer"==this.popupLayerClass&&0==this.hideMore&&this.hideDrawer()},sendText:function(){if(this.hideDrawer(),this.textMsg){var t={text:this.textMsg};this.sendMsg(t,"text"),this.textMsg=""}},sendMsg:function(e,s){var a=this,n=new Date,c=n.getFullYear(),o=n.getMonth()+1,r=n.getDate();o<10&&(o="0"+o),r<10&&(r="0"+r);var u=c+"-"+o+"-"+r;t.request({url:"http://47.104.95.72:5000/yuliao",data:{date:u,iconname:i.textMsg,uuid:i.uuid},success:function(t){i.yuliao=t.data},fail:function(){},complete:function(){var t=i.yuliao,n=t[0],c=(a.textMsg,new Date),o=a.msgList[a.msgList.length-1].msg.id;o++;var r={type:"user",msg:{id:o,time:c.getHours()+":"+c.getMinutes(),type:s,userinfo:{uid:0,username:"大黑哥",face:"/static/img/face.jpg"},content:e}};a.screenMsg(r),setTimeout(function(){var e;o=a.msgList[a.msgList.length-1].msg.id,o++,"character"==t[1]&&(e="text",r={type:"user",msg:{id:o,time:c.getHours()+":"+c.getMinutes(),type:e,userinfo:{uid:1,username:"售后客服008",face:"/static/img/im/face/face_2.jpg"},content:{text:n}}}),"image"==t[1]&&(e="img",r={type:"user",msg:{id:o,time:c.getHours()+":"+c.getMinutes(),type:e,userinfo:{uid:1,username:"售后客服008",face:"/static/img/im/face/face_2.jpg"},content:{url:n}}}),a.screenMsg(r)},1e3)}})},addTextMsg:function(t){this.msgList.push(t)},addVoiceMsg:function(t){this.msgList.push(t)},addImgMsg:function(t){t.msg.content=this.setPicSize(t.msg.content),this.msgImgList.push(t.msg.content.url),this.msgList.push(t)},addRedEnvelopeMsg:function(t){this.msgList.push(t)},addSystemTextMsg:function(t){this.msgList.push(t)},addSystemRedEnvelopeMsg:function(t){this.msgList.push(t)},sendSystemMsg:function(t,e){var s=this.msgList[this.msgList.length-1].msg.id;s++;var i={type:"system",msg:{id:s,type:e,content:t}};this.screenMsg(i)},showPic:function(e){t.previewImage({indicator:"none",current:e.content.url,urls:this.msgImgList})},switchVoice:function(){this.hideDrawer(),this.isVoice=!this.isVoice},discard:function(){}}};e.default=o}).call(this,s("6e42")["default"])},"6eec":function(t,e,s){"use strict";s.r(e);var i=s("5d90"),a=s.n(i);for(var n in i)"default"!==n&&function(t){s.d(e,t,function(){return i[t]})}(n);e["default"]=a.a},"7a25":function(t,e,s){"use strict";s.r(e);var i=s("fcfc"),a=s("6eec");for(var n in a)"default"!==n&&function(t){s.d(e,t,function(){return a[t]})}(n);s("b1a2");var c=s("2877"),o=Object(c["a"])(a["default"],i["a"],i["b"],!1,null,null,null);e["default"]=o.exports},"8a32":function(t,e,s){"use strict";(function(t){s("9805"),s("921b");i(s("66fd"));var e=i(s("7a25"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,s("6e42")["createPage"])},b1a2:function(t,e,s){"use strict";var i=s("0d09"),a=s.n(i);a.a},fcfc:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c},a=[];s.d(e,"a",function(){return i}),s.d(e,"b",function(){return a})}},[["8a32","common/runtime","common/vendor"]]]);
});
require('pages/tabBar/chat/chat.js');
__wxRoute = 'pages/tabBar/vip/vip';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/tabBar/vip/vip.js';

define('pages/tabBar/vip/vip.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabBar/vip/vip"],{"22c1":function(t,a,e){"use strict";var n=e("7177"),o=e.n(n);o.a},7177:function(t,a,e){},9948:function(t,a,e){"use strict";e.r(a);var n=e("a8dc"),o=e.n(n);for(var u in n)"default"!==u&&function(t){e.d(a,t,function(){return n[t]})}(u);a["default"]=o.a},a8dc:function(t,a,e){"use strict";(function(t,e){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n={data:function(){return{myavatar:"../../../static/vippage/vipicon/heart.png"}},onLoad:function(a){this;try{this.myavatar=t.getStorageSync("myavatar")}catch(a){console.log(e("头像获取异常",a," at pages\\tabBar\\vip\\vip.vue:51"))}},methods:{setAvatar:function(){var a=this;t.chooseImage({count:1,success:function(e){var n=e.tempFilePaths;t.saveFile({tempFilePath:n[0],success:function(e){a.myavatar=e.savedFilePath,t.setStorage({key:"myavatar",data:a.myavatar})}})}})},setPinfo:function(){t.navigateTo({url:"partnerinfo"})},toabout:function(){t.navigateTo({url:"about"})},toaddword:function(){t.navigateTo({url:"addword"})},clearStorage:function(){t.showModal({title:"清除数据",content:"确定要清除数据并重启？",success:function(a){a.confirm?(t.clearStorage(),t.showToast({icon:"none",duration:3e3,title:"清除成功2秒后重启"}),setTimeout(function(){t.hideToast(),plus.runtime.restart()},2e3)):a.cancel}})}}};a.default=n}).call(this,e("6e42")["default"],e("0de9")["default"])},ed6a:function(t,a,e){"use strict";e.r(a);var n=e("fee7"),o=e("9948");for(var u in o)"default"!==u&&function(t){e.d(a,t,function(){return o[t]})}(u);e("22c1");var c=e("2877"),i=Object(c["a"])(o["default"],n["a"],n["b"],!1,null,null,null);a["default"]=i.exports},f68e:function(t,a,e){"use strict";(function(t){e("9805"),e("921b");n(e("66fd"));var a=n(e("ed6a"));function n(t){return t&&t.__esModule?t:{default:t}}t(a.default)}).call(this,e("6e42")["createPage"])},fee7:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement;t._self._c},o=[];e.d(a,"a",function(){return n}),e.d(a,"b",function(){return o})}},[["f68e","common/runtime","common/vendor"]]]);
});
require('pages/tabBar/vip/vip.js');
__wxRoute = 'pages/tabBar/vip/partnerinfo';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/tabBar/vip/partnerinfo.js';

define('pages/tabBar/vip/partnerinfo.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabBar/vip/partnerinfo"],{"01a5":function(t,e,a){"use strict";a.r(e);var n=a("de73"),s=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,function(){return n[t]})}(i);e["default"]=s.a},"242a":function(t,e,a){"use strict";var n=a("c38b"),s=a.n(n);s.a},"373e":function(t,e,a){"use strict";(function(t){a("9805"),a("921b");n(a("66fd"));var e=n(a("f56e"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("6e42")["createPage"])},c38b:function(t,e,a){},de73:function(t,e,a){"use strict";(function(t,a){function n(t){var e=new Date,a=e.getFullYear(),n=e.getMonth()+1,s=e.getDate();return"start"===t?a-=60:"end"===t&&(a+=2),n=n>9?n:"0"+n,s=s>9?s:"0"+s,"".concat(a,"-").concat(n,"-").concat(s)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s={data:function(){return{uuid:"",isselecthabit:{},pname:"",tempsex:"Ta",psex:"",pcallme:"",pavatar:"../../static/touxiang/avatar.png",myname:"",mysex:"",myIdentity:"",mybirthday:n({format:!0}),myavatar:"../../static/touxiang/avatar.png"}},methods:{makeallsetStorage:function(){t.setStorage({key:"isselecthabit",data:this.isselecthabit}),t.setStorage({key:"pname",data:this.pname}),t.setStorage({key:"psex",data:this.psex}),t.setStorage({key:"pcallme",data:this.pcallme}),t.setStorage({key:"pavatar",data:this.pavatar}),t.setStorage({key:"myname",data:this.myname}),t.setStorage({key:"mysex",data:this.mysex}),t.setStorage({key:"myIdentity",data:this.myIdentity}),t.setStorage({key:"mybirthday",data:this.mybirthday}),t.setStorage({key:"myavatar",data:this.myavatar}),t.request({url:"http://47.104.95.72:5000/usermanage",method:"POST",data:[this.uuid,this.isselecthabit,this.pname,this.psex,this.pcallme,this.pavatar,this.myname,this.mysex,this.myIdentity,this.mybirthday,this.myavatar]})},getallsetStorage:function(){var e=this;t.getStorage({key:"uuid",success:function(t){e.uuid=t.data}}),t.getStorage({key:"pname",success:function(t){e.pname=t.data},fail:function(t){e.pname="陪伴人"}}),t.getStorage({key:"psex",success:function(t){e.psex=t.data}}),t.getStorage({key:"pcallme",success:function(t){e.pcallme=t.data}}),t.getStorage({key:"pavatar",success:function(t){e.pavatar=t.data}}),t.getStorage({key:"myname",success:function(t){e.myname=t.data}}),t.getStorage({key:"mysex",success:function(t){e.mysex=t.data}}),t.getStorage({key:"myIdentity",success:function(t){e.myIdentity=t.data}}),t.getStorage({key:"mybirthday",success:function(t){e.mybirthday=t.data}}),t.getStorage({key:"myavatar",success:function(t){e.myavatar=t.data}})},go_ok:function(){this.makeallsetStorage(),t.showToast({title:"已保存",icon:"none",success:function(){setTimeout(function(){t.navigateBack({delta:1})},200)}})},sexchange:function(t){this.psex=t.detail.value,"girlfriend"==this.psex&&(this.tempsex="她"),"boyfriend"==this.psex&&(this.tempsex="他")},mysexchange:function(t){this.mysex=t.detail.value},indentitychange:function(t){this.myIdentity=t.detail.value},setpAvatar:function(){var e=this;t.chooseImage({success:function(t){e.pavatar=t.tempFilePaths}})},setAvatar:function(){var e=this;t.chooseImage({success:function(t){e.myavatar=t.tempFilePaths}})},bindDateChange:function(t){this.mybirthday=t.target.value}},onLoad:function(){_self=this,this.getallsetStorage(),console.log(a("123"," at pages\\tabBar\\vip\\partnerinfo.vue:320"))},onReady:function(){this.getallsetStorage()},onShow:function(){this.getallsetStorage()},computed:{friendname:function(){var t=this.pname;return""==t?"Ta":this.pname}}};e.default=s}).call(this,a("6e42")["default"],a("0de9")["default"])},ee26:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},s=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return s})},f56e:function(t,e,a){"use strict";a.r(e);var n=a("ee26"),s=a("01a5");for(var i in s)"default"!==i&&function(t){a.d(e,t,function(){return s[t]})}(i);a("242a");var o=a("2877"),c=Object(o["a"])(s["default"],n["a"],n["b"],!1,null,null,null);e["default"]=c.exports}},[["373e","common/runtime","common/vendor"]]]);
});
require('pages/tabBar/vip/partnerinfo.js');
__wxRoute = 'pages/tabBar/habitList/intochart1';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/tabBar/habitList/intochart1.js';

define('pages/tabBar/habitList/intochart1.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabBar/habitList/intochart1"],{"0ddf":function(t,e,a){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=o(a("ef72"));o(a("fcfe"));function o(t){return t&&t.__esModule?t:{default:t}}var r,c=function(){return Promise.all([a.e("common/vendor"),a.e("components/uni-calendar/uni-calendar")]).then(a.bind(null,"3343"))},u=null,s={components:{uniCalendar:c},data:function(){function t(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;"object"!==typeof t&&(t=t.replace(/-/g,"/"));var n=new Date(t);n.setMonth(n.getMonth()+e),n.setDate(n.getDate()+a);var i=n.getFullYear(),o=n.getMonth()+1<10?"0"+(n.getMonth()+1):n.getMonth()+1,r=n.getDate()<10?"0"+n.getDate():n.getDate();return i+"-"+o+"-"+r}return{cWidth:"",cHeight:"",pixelRatio:1,iconname:"",chartData:{categories:[],series:[{name:"网络异常",data:[0,0,0,0,0,0,0,0],color:"#66CCFF"}]},startDate:t(new Date,0,-7),endDate:t(new Date,0,7),selected:[{date:"2000-02-27",info:"已打卡"}],uuid:""}},onLoad:function(e){r=this,r.iconname=e.iconname;try{var a=t.getStorageSync("uuid");a&&(r.uuid=a)}catch(e){console.log(n("error"," at pages\\tabBar\\habitList\\intochart1.vue:93"))}this.cWidth=t.upx2px(750),this.cHeight=t.upx2px(500),this.getServerData(),this.addchick()},methods:{getServerData:function(){var e=r.getDatechart(-7),a=r.getDatechart(-6),i=r.getDatechart(-5),o=r.getDatechart(-4),c=r.getDatechart(-3),u=r.getDatechart(-2),s=r.getDatechart(-1),d=r.getDatechart();r.chartData.categories.push(e,a,i,o,c,u,s,d),t.request({url:"http://47.104.95.72:5000/qiandao",data:{h:r.iconname,uuid:r.uuid},success:function(t){r.chartData.series[0].data=t.data,r.chartData.series[0].name=r.iconname},fail:function(){console.log(n("网络错误，小程序端请检查合法域名"," at pages\\tabBar\\habitList\\intochart1.vue:135"))},complete:function(){r.showLineA("canvasLineA",r.chartData)}})},showLineA:function(t,e){u=new i.default({$this:r,canvasId:t,type:"line",fontSize:11,legend:{show:!0},dataLabel:!1,dataPointShape:!0,background:"#FFFFFF",pixelRatio:r.pixelRatio,categories:e.categories,series:e.series,animation:!0,xAxis:{type:"grid",gridColor:"#CCCCCC",gridType:"dash",dashLength:8},yAxis:{gridType:"dash",gridColor:"#CCCCCC",dashLength:8,splitNumber:5,min:0,max:30,format:function(t){return t.toFixed(0)+"次"}},width:r.cWidth*r.pixelRatio,height:r.cHeight*r.pixelRatio,extra:{line:{type:"straight"}}})},touchLineA:function(t){u.showToolTip(t,{format:function(t,e){return e+" "+t.name+":"+t.data}})},addchick:function(){t.request({url:"http://47.104.95.72:5000/calendar",data:{iconname:r.iconname,uuid:r.uuid},success:function(t){var e=t.data;r.selected=e},fail:function(){console.log(n("网络错误，小程序端请检查合法域名"," at pages\\tabBar\\habitList\\intochart1.vue:212"))}})},getDatechart:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=new Date,a=e.getDate()+t;return a+"日"}}};e.default=s}).call(this,a("6e42")["default"],a("0de9")["default"])},"3bc9":function(t,e,a){},"5bef":function(t,e,a){"use strict";var n=a("3bc9"),i=a.n(n);i.a},"9fa7":function(t,e,a){"use strict";a.r(e);var n=a("0ddf"),i=a.n(n);for(var o in n)"default"!==o&&function(t){a.d(e,t,function(){return n[t]})}(o);e["default"]=i.a},e9bb:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},i=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return i})},eecf:function(t,e,a){"use strict";(function(t){a("9805"),a("921b");n(a("66fd"));var e=n(a("faee"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("6e42")["createPage"])},faee:function(t,e,a){"use strict";a.r(e);var n=a("e9bb"),i=a("9fa7");for(var o in i)"default"!==o&&function(t){a.d(e,t,function(){return i[t]})}(o);a("5bef");var r=a("2877"),c=Object(r["a"])(i["default"],n["a"],n["b"],!1,null,null,null);e["default"]=c.exports}},[["eecf","common/runtime","common/vendor"]]]);
});
require('pages/tabBar/habitList/intochart1.js');
__wxRoute = 'pages/tabBar/vip/about';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/tabBar/vip/about.js';

define('pages/tabBar/vip/about.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabBar/vip/about"],{"025c":function(t,n,e){"use strict";(function(t){e("9805"),e("921b");u(e("66fd"));var n=u(e("0aa4"));function u(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},"0aa4":function(t,n,e){"use strict";e.r(n);var u=e("1633"),a=e("ccff");for(var c in a)"default"!==c&&function(t){e.d(n,t,function(){return a[t]})}(c);e("55da");var r=e("2877"),o=Object(r["a"])(a["default"],u["a"],u["b"],!1,null,null,null);n["default"]=o.exports},1633:function(t,n,e){"use strict";var u=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"a",function(){return u}),e.d(n,"b",function(){return a})},"55da":function(t,n,e){"use strict";var u=e("deb0"),a=e.n(u);a.a},ccff:function(t,n,e){"use strict";e.r(n);var u=e("e377"),a=e.n(u);for(var c in u)"default"!==c&&function(t){e.d(n,t,function(){return u[t]})}(c);n["default"]=a.a},deb0:function(t,n,e){},e377:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u={data:function(){return{}},mounted:function(){},methods:{},computed:{}};n.default=u}},[["025c","common/runtime","common/vendor"]]]);
});
require('pages/tabBar/vip/about.js');
__wxRoute = 'pages/tabBar/vip/addword';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/tabBar/vip/addword.js';

define('pages/tabBar/vip/addword.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabBar/vip/addword"],{"60c1":function(t,a,n){},6248:function(t,a,n){"use strict";n.r(a);var e=n("f634"),o=n("880b");for(var c in o)"default"!==c&&function(t){n.d(a,t,function(){return o[t]})}(c);n("e645");var u=n("2877"),i=Object(u["a"])(o["default"],e["a"],e["b"],!1,null,null,null);a["default"]=i.exports},"880b":function(t,a,n){"use strict";n.r(a);var e=n("cbd1"),o=n.n(e);for(var c in e)"default"!==c&&function(t){n.d(a,t,function(){return e[t]})}(c);a["default"]=o.a},a6c2:function(t,a,n){"use strict";(function(t){n("9805"),n("921b");e(n("66fd"));var a=e(n("6248"));function e(t){return t&&t.__esModule?t:{default:t}}t(a.default)}).call(this,n("6e42")["createPage"])},cbd1:function(t,a,n){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n={data:function(){return{myavatar:"",pavatar:""}},onLoad:function(){var a=this;this,t.getStorage({key:"myAvatar",success:function(t){a.myavatar=t.data},fail:function(t){a.myavatar="../../../static/vippage/vipicon/heart.png"}}),t.getStorage({key:"PAvatar",success:function(t){a.pavatar=t.data},fail:function(t){a.pavatar="../../../static/vippage/vipicon/heart.png"}})},mounted:function(){},methods:{goback:function(){t.showToast({title:"提交成功",icon:"none",success:function(){setTimeout(function(){t.navigateBack({delta:1})},500)}})},gotoinfo:function(){t.navigateTo({url:"addwordinfo"})}},computed:{}};a.default=n}).call(this,n("6e42")["default"])},e645:function(t,a,n){"use strict";var e=n("60c1"),o=n.n(e);o.a},f634:function(t,a,n){"use strict";var e=function(){var t=this,a=t.$createElement;t._self._c},o=[];n.d(a,"a",function(){return e}),n.d(a,"b",function(){return o})}},[["a6c2","common/runtime","common/vendor"]]]);
});
require('pages/tabBar/vip/addword.js');
__wxRoute = 'pages/tabBar/vip/addwordinfo';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/tabBar/vip/addwordinfo.js';

define('pages/tabBar/vip/addwordinfo.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabBar/vip/addwordinfo"],{"1c3b":function(t,n,a){},"1cd1":function(t,n,a){"use strict";var e=function(){var t=this,n=t.$createElement;t._self._c},u=[];a.d(n,"a",function(){return e}),a.d(n,"b",function(){return u})},"426c":function(t,n,a){"use strict";var e=a("1c3b"),u=a.n(e);u.a},a8a7:function(t,n,a){"use strict";a.r(n);var e=a("d927"),u=a.n(e);for(var c in e)"default"!==c&&function(t){a.d(n,t,function(){return e[t]})}(c);n["default"]=u.a},aa79:function(t,n,a){"use strict";(function(t){a("9805"),a("921b");e(a("66fd"));var n=e(a("df62"));function e(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,a("6e42")["createPage"])},d927:function(t,n,a){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={data:function(){return{}},methods:{back:function(){t.navigateBack({delta:1})}}};n.default=a}).call(this,a("6e42")["default"])},df62:function(t,n,a){"use strict";a.r(n);var e=a("1cd1"),u=a("a8a7");for(var c in u)"default"!==c&&function(t){a.d(n,t,function(){return u[t]})}(c);a("426c");var r=a("2877"),o=Object(r["a"])(u["default"],e["a"],e["b"],!1,null,null,null);n["default"]=o.exports}},[["aa79","common/runtime","common/vendor"]]]);
});
require('pages/tabBar/vip/addwordinfo.js');
;(function(global) {
    __uni_launch_ready(function() {
        var entryPagePath = __wxConfig.entryPagePath.replace('.html', '')
        if (entryPagePath.indexOf('/') !== 0) {
            entryPagePath = '/' + entryPagePath
        }
        wx.navigateTo({
            url: entryPagePath,
            query: {},
            openType: 'appLaunch',
            webviewId: 1
        })
        __wxConfig.__ready__ = true
    })
})(this);

