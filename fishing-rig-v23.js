/* Basic rod: shared geometry drives the grip, flexible tip and attached line. */
(function(root){'use strict';
const grips=[[142,262],[214,142],[135,241],[142,262],[176,194],[145,256],[143,255],[146,267]];
function pose(state,timer,held,locked,alert,ambient=true){if(state==='casting')return timer<.26?'fish-back':timer<.57?'fish-cast':'fish-wait';if(state==='reeling')return alert>.45?'fish-pull':held&&!locked?'fish-reel':'fish-wait';return 'fish-hold';}
function geometry(o){const {x=256,y=182,height=107.25,time=0,state='idle',timer=0,reeling=false,locked=false,tension=15,alert=0,point={x:300,y:400},ambient=true}=o;
 const p=pose(state,timer,reeling,locked,alert,ambient),frame=p==='fish-reel'?(ambient?5+Math.floor(time*6)%2:5):({'fish-hold':0,'fish-back':1,'fish-cast':2,'fish-wait':3,'fish-pull':4}[p]||0),s=height/458,a=o.sourceGrip?[o.sourceGrip.x,o.sourceGrip.y]:grips[frame],grip={x:x+(a[0]-128)*s,y:y+(a[1]-495)*s};
 const angle=p==='fish-back'?-2.1:p==='fish-cast'?-.16:p==='fish-pull'?-.91:p==='fish-reel'?-.64:state==='walking'?-.9:-.48;
 const strain=state==='reeling'?Math.max(0,Math.min(1,tension/100)):0,bend=state==='reeling'?5+strain*20+(ambient?Math.sin(time*3.4)*1.7:0):state==='waiting'?(ambient?1.5+Math.sin(time*1.5)*.7:1.5):0,length=92;
 const tip={x:grip.x+Math.cos(angle)*length+bend*.2,y:grip.y+Math.sin(angle)*length+bend},control={x:grip.x+Math.cos(angle)*length*.56,y:grip.y+Math.sin(angle)*length*.56-bend*.18};
 const cast=state==='casting',flight=cast?Math.max(0,Math.min(1,(timer-.26)/.64)):1,bob=ambient&&['waiting','reeling'].includes(state),target={x:point.x+(bob?Math.sin(time*1.4)*2:0),y:point.y+(bob?Math.sin(time*2.3)*2.5:0)+(state==='reeling'&&alert>0?3:0)},end=cast?{x:tip.x+(target.x-tip.x)*flight,y:tip.y+(target.y-tip.y)*flight-Math.sin(flight*Math.PI)*68}:target;
 const reel={x:grip.x-Math.cos(angle)*10+2,y:grip.y-Math.sin(angle)*10+5};
 return {pose:p,frame,grip,sourceGrip:{x:a[0],y:a[1]},angle,tip,control,reel,end,flight,strain,lineStart:{...tip},lineVisible:['casting','waiting','reeling'].includes(state),cranking:state==='reeling'&&reeling&&!locked&&ambient};
}
function draw(g,o){const q=geometry(o),{grip,tip,control,angle,reel}=q;
 g.save();g.lineCap='round';g.lineJoin='round';
 // Cork grip, dark butt cap and small binding rings.
 const butt={x:grip.x-Math.cos(angle)*17,y:grip.y-Math.sin(angle)*17};g.strokeStyle='#453b2c';g.lineWidth=8;g.beginPath();g.moveTo(butt.x,butt.y);g.lineTo(grip.x+Math.cos(angle)*3,grip.y+Math.sin(angle)*3);g.stroke();g.strokeStyle='#b88c52';g.lineWidth=5.5;g.stroke();g.strokeStyle='#e0b87a';g.lineWidth=1;for(const n of [5,9,14,18]){const x=grip.x-Math.cos(angle)*n,y=grip.y-Math.sin(angle)*n;g.beginPath();g.moveTo(x-Math.sin(angle)*2,y+Math.cos(angle)*2);g.lineTo(x+Math.sin(angle)*2,y-Math.cos(angle)*2);g.stroke();}
 // Shaded flexible blank. Every guide follows the same Bezier curve.
 const curve=()=>{g.beginPath();g.moveTo(grip.x,grip.y);g.quadraticCurveTo(control.x,control.y,tip.x,tip.y);};g.strokeStyle='#35473c';g.lineWidth=4;curve();g.stroke();g.strokeStyle='#8b9b75';g.lineWidth=1.8;curve();g.stroke();
 const at=t=>({x:(1-t)*(1-t)*grip.x+2*(1-t)*t*control.x+t*t*tip.x,y:(1-t)*(1-t)*grip.y+2*(1-t)*t*control.y+t*t*tip.y});
 for(const t of [.23,.51,.78,1]){const p=at(t);g.fillStyle='#d5b778';g.fillRect(Math.round(p.x)-1,Math.round(p.y)-1,2,3);g.strokeStyle='#4d5a4d';g.lineWidth=1;g.beginPath();g.ellipse(p.x,p.y+2,t===1?1.3:1.8,2.3,angle,0,Math.PI*2);g.stroke();}
 // Compact spinning reel with metal spool and a moving crank only while reeling.
 g.strokeStyle='#3b4942';g.lineWidth=2.5;g.beginPath();g.moveTo(reel.x-1,reel.y-4);g.lineTo(grip.x-Math.cos(angle)*9,grip.y-Math.sin(angle)*9);g.stroke();g.fillStyle='#3d514d';g.beginPath();g.ellipse(reel.x,reel.y,4.2,4.6,angle,0,Math.PI*2);g.fill();g.strokeStyle='#c4c5ab';g.lineWidth=2;g.stroke();g.fillStyle='#d5bc7c';g.beginPath();g.arc(reel.x,reel.y,2.3,0,Math.PI*2);g.fill();const spin=q.cranking?(o.time||0)*10:1.4;g.strokeStyle='#455750';g.lineWidth=2;g.beginPath();g.moveTo(reel.x,reel.y);g.lineTo(reel.x+Math.cos(spin)*7,reel.y+Math.sin(spin)*5);g.stroke();g.fillStyle='#785336';g.fillRect(reel.x+Math.cos(spin)*7-1.5,reel.y+Math.sin(spin)*5-1.5,3,3);
 if(q.lineVisible){g.strokeStyle='#f7f0d3c9';g.lineWidth=1.2;g.beginPath();g.moveTo(q.lineStart.x,q.lineStart.y);g.quadraticCurveTo((tip.x+q.end.x)/2,(tip.y+q.end.y)/2+(o.state==='reeling'?2:12),q.end.x,q.end.y);g.stroke();g.fillStyle='#634e36';g.fillRect(q.end.x-1,q.end.y-11,2,4);g.fillStyle='#f7e7c4';g.beginPath();g.ellipse(q.end.x,q.end.y-3,3.1,6,0,0,Math.PI*2);g.fill();g.fillStyle='#d86345';g.fillRect(q.end.x-3,q.end.y-2,6,5);g.fillStyle='#f8d68d';g.fillRect(q.end.x-1,q.end.y-10,2,3);}
 g.restore();return q;
}
root.FishingRig23={pose,geometry,draw};if(typeof module!=='undefined')module.exports=root.FishingRig23;
})(typeof window!=='undefined'?window:globalThis);
