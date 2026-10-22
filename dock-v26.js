/* Harbour projection and collision geometry. No schedule/progression state lives here. */
(function(root){'use strict';
const WIDTH=1280,VIEW=512,berths={ferry:200,shop:620,trader:1040};
const boatInfo={ferry:{row:0,bottom:502,rail:376,personX:300,waist:383,npc:'nell'},shop:{row:1,bottom:510,rail:379,personX:145,waist:373,npc:'pip'},trader:{row:2,bottom:477,rail:350,personX:180,waist:344,npc:'mara'}};
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
function camera(x){return clamp(x-330,0,WIDTH-VIEW);}
function boat(kind,{progress=0,phase='away'}={},time=0,ambient=true){
 const info=boatInfo[kind],p=clamp(progress,0,1),ease=p*p*(3-2*p),x=-440+(berths[kind]+440)*ease,bob=ambient?Math.sin(time*1.25+info.row)*1.2:0,y=475-(1-p)*42+bob,scale=360/1024,top=y-info.bottom*scale;
 return {kind,phase,progress:p,x,y,top,width:360,scale,personX:x-180+info.personX*scale,waist:top+info.waist*scale,footY:y+23,info};
}
function floor(x,y,iris=false){return x>=20&&x<=1256&&y>=488&&y<=605&&!(x>=1114&&x<=1150&&y>=513&&y<=537)&&!(x>=993&&x<=1061&&y>=565&&y<=592)&&!(iris&&Math.hypot(x-1200,y-589)<23);}
function route(from,to,iris=false){
 const nodes=[],unit=8;for(let y=492;y<=604;y+=unit)for(let x=24;x<=1256;x+=unit)if(floor(x,y,iris))nodes.push({x,y});
 const near=p=>nodes.reduce((a,b)=>Math.hypot(a.x-p.x,a.y-p.y)<=Math.hypot(b.x-p.x,b.y-p.y)?a:b),start=near(from),goal=near(to),key=p=>p.x+':'+p.y,set=new Set(nodes.map(key)),queue=[start],prev=new Map([[key(start),null]]);let end=null;
 for(let i=0;i<queue.length;i++){const p=queue[i];if(key(p)===key(goal)){end=p;break;}for(const[dx,dy]of [[-unit,0],[unit,0],[0,-unit],[0,unit]]){const n={x:p.x+dx,y:p.y+dy},k=key(n);if(set.has(k)&&!prev.has(k)){prev.set(k,p);queue.push(n);}}}
 const out=[];while(end&&prev.get(key(end))){out.push(end);end=prev.get(key(end));}return out.reverse();
}
root.Dock26={WIDTH,VIEW,berths,boatInfo,camera,boat,floor,route};if(typeof module!=='undefined')module.exports=root.Dock26;
})(typeof window!=='undefined'?window:globalThis);
