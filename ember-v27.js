/* Emberstone helpers: scene navigation, saved mineral patches and illustrated residents. */
(function(root){
'use strict';
const mineralIds=['quartz','agate','obsidian','calcite'];
function fresh(){return {routeDelivered:0,minerals:{},patch:null,thanks:false,visited:false};}
function patch(day){const spots=[[134,270,1.1],[339,300,.91],[236,386,1.23],[110,475,.9],[365,502,1.18],[242,589,.97]];return {day,nodes:spots.map(([x,y,size],i)=>({x,y,size,kind:mineralIds[(day+i)%4],clean:0,recorded:false}))};}
function sanitise(q,day){
 const s=fresh();q=q&&typeof q==='object'?q:{};s.routeDelivered=q.routeDelivered===1?1:0;s.thanks=q.thanks===true;s.visited=q.visited===true;
 for(const id of mineralIds)if(Number.isSafeInteger(q.minerals?.[id])&&q.minerals[id]>0)s.minerals[id]=Math.min(9999,q.minerals[id]);
 const p=q.patch;if(p&&Number.isSafeInteger(p.day)&&p.day>=0&&p.day<=day&&Array.isArray(p.nodes)&&p.nodes.length===6){const out=patch(p.day);out.nodes.forEach((n,i)=>{const a=p.nodes[i];if(a&&a.kind===n.kind){n.clean=Number.isFinite(a.clean)?Math.max(0,Math.min(1,a.clean)):0;n.recorded=a.recorded===true&&n.clean>=1;}});s.patch=out;}return s;
}
function brush(p,from,to){if(!p||!from||!to)return false;const dx=to.x-from.x,dy=to.y-from.y,d=Math.hypot(dx,dy);if(d<2)return false;let changed=false;
 for(const n of p.nodes){if(n.recorded||n.clean>=1)continue;const u=Math.max(0,Math.min(1,((n.x-from.x)*dx+(n.y-from.y)*dy)/(d*d)));if(Math.hypot(n.x-from.x-u*dx,n.y-from.y-u*dy)<45*n.size){n.clean=Math.min(1,n.clean+Math.min(d,50)/230);if(n.clean>.97)n.clean=1;changed=true;}}
 return changed;
}
function record(s,index){const n=s.patch?.nodes[index];if(!n||n.clean<1||n.recorded)return null;n.recorded=true;s.minerals[n.kind]=(s.minerals[n.kind]||0)+1;return n.kind;}
function navigator(floor,bounds,step=4){
 let points=null;const key=(x,y)=>x+':'+y;
 function init(){if(points)return;points=new Map();for(let y=bounds[1];y<=bounds[3];y+=step)for(let x=bounds[0];x<=bounds[2];x+=step)if(floor(x,y))points.set(key(x,y),{x,y});}
 function nearest(p){init();let best=null,dist=Infinity;for(const q of points.values()){const d=(q.x-p.x)**2+(q.y-p.y)**2;if(d<dist){best=q;dist=d;}}return {point:best,distance:Math.sqrt(dist)};}
 function route(from,to){init();const a=nearest(from),b=nearest(to);if(!a.point||a.distance>14||b.distance>14)return [];const start=a.point,end=b.point,queue=[start],prev=new Map([[key(start.x,start.y),null]]);let found=null;
  for(let i=0;i<queue.length;i++){const p=queue[i];if(p===end){found=p;break;}for(const [dx,dy]of [[step,0],[-step,0],[0,step],[0,-step]]){const k=key(p.x+dx,p.y+dy),n=points.get(k);if(n&&!prev.has(k)){prev.set(k,p);queue.push(n);}}}
  if(!found)return [];const out=[];while(found){out.push({...found});found=prev.get(key(found.x,found.y));}out.reverse();if(out.length&&floor(from.x,from.y))out[0]={x:from.x,y:from.y};return out;
 }
 return {route,nearest};
}
function createRenderer({image}){
 function frame(id,{time=0,ambient=true,job='',held=false,walking=false}={}){if(!ambient||held||walking)return 0;const blink=time%5.2>5.05;if(id==='mini')return job==='wave'||time%14>11?(Math.floor(time*5)%2?2:3):blink?1:0;return job==='tea'?(time%3.6>3.25?3:2):blink?1:0;}
 function draw(g,id,x,y,{time=0,height=95,mirror=false,walking=false,job='',ambient=true,held=false}={}){
  if(!image)return false;const col=frame(id,{time,ambient,job,held,walking}),row=id==='mona'?1:0,s=height/470,b=ambient&&!held?(walking?Math.abs(Math.sin(time*9))*3:Math.sin(time*1.7)*1.1):0;
  g.save();g.translate(x,y-b*s);g.scale(mirror?-s:s,s);g.imageSmoothingEnabled=false;
  // Full connected art remains intact; walking uses a gentle body bob, not a rear-facing rig.
  g.drawImage(image,col*384,row*512,384,512,-192,-500,384,512);g.restore();return true;
 }
 function portrait(g,id,{time=0,ambient=true,world=false}={}){g.clearRect(0,0,96,world?128:96);if(world){draw(g,id,48,126,{height:120,time,ambient});return;}const col=frame(id,{time,ambient}),row=id==='mona'?1:0;g.imageSmoothingEnabled=false;g.drawImage(image,col*384+112,row*512+50,184,184,0,0,96,96);}
 return {draw,portrait,frame};
}
const api={mineralIds,fresh,patch,sanitise,brush,record,navigator,createRenderer};root.Ember27=api;if(typeof module!=='undefined')module.exports=api;
})(typeof window!=='undefined'?window:globalThis);
