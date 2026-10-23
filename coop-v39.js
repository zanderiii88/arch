/* Persistent care is based on game days, never wall-clock time. */
(function(root){'use strict';
const clamp=(v,max)=>Number.isSafeInteger(v)?Math.max(0,Math.min(max,v)):0;
const fresh=day=>({version:1,built:false,lastDay:Math.max(0,day),feed:0,water:0,eggs:0,collected:0});
function load(d,day){const s=fresh(day);if(d?.version!==1)return s;s.built=d.built===true;s.lastDay=Number.isSafeInteger(d.lastDay)?Math.max(0,Math.min(day,d.lastDay)):day;for(const k of ['feed','water'])s[k]=clamp(d[k],2);s.eggs=clamp(d.eggs,6);s.collected=clamp(d.collected,1000000);if(!s.built)s.feed=s.water=s.eggs=0;return s;}
function advance(s,day){const days=Math.max(0,day-s.lastDay);if(!days)return false;if(s.built){const productive=Math.min(days,s.feed,s.water);s.eggs=Math.min(6,s.eggs+2*productive);s.feed=Math.max(0,s.feed-days);s.water=Math.max(0,s.water-days);}s.lastDay=day;return true;}
function floor(x,y){return x>=56&&x<=456&&y>=332&&y<=712&&Math.hypot(x-125,y-437)>24&&Math.hypot(x-385,y-437)>25;}
function route(from,to){const unit=8,nodes=[];for(let y=336;y<=712;y+=unit)for(let x=56;x<=456;x+=unit)if(floor(x,y))nodes.push({x,y});const key=p=>p.x+':'+p.y,near=p=>nodes.reduce((a,b)=>Math.hypot(a.x-p.x,a.y-p.y)<Math.hypot(b.x-p.x,b.y-p.y)?a:b),start=near(from),goal=near(to),set=new Set(nodes.map(key)),q=[start],prev=new Map([[key(start),null]]);let end=null;for(let i=0;i<q.length;i++){const p=q[i];if(key(p)===key(goal)){end=p;break;}for(const [dx,dy]of [[0,8],[8,0],[0,-8],[-8,0]]){const a={x:p.x+dx,y:p.y+dy},k=key(a);if(set.has(k)&&!prev.has(k)){q.push(a);prev.set(k,p);}}}const out=[];while(end&&prev.get(key(end))){out.push(end);end=prev.get(key(end));}return out.reverse();}
const api={fresh,load,advance,floor,route,cost:{timber:8,coopWire:2},capacity:6};root.Coop39=api;if(typeof module!=='undefined')module.exports=api;
})(typeof window!=='undefined'?window:globalThis);
