/* Deterministic rope/spool model shared by touch, keyboard and assist controls. */
(function(root){'use strict';
const clamp=(n,a,b)=>Math.max(a,Math.min(b,n));
function angleDelta(from,to){let d=to-from;while(d>Math.PI)d-=Math.PI*2;while(d< -Math.PI)d+=Math.PI*2;return d;}
function create(phase='lowering',depth=0){return {phase,depth:clamp(Number.isFinite(depth)?depth:0,0,1),velocity:0,turn:0,event:null,impactSpeed:0};}
function step(s,dt,rate=0,assist=false){
 s.event=null;if(!['lowering','raising'].includes(s.phase)||!Number.isFinite(dt)||dt<=0)return s;
 let remaining=Math.min(.25,dt);
 while(remaining>0){const h=Math.min(1/120,remaining);remaining-=h;const down=s.phase==='lowering',drive=assist?.095:clamp((down?rate:-rate)*.04,0,.34),target=(down?1:-1)*drive*(down?1:.78);
  const k=drive?4.6:13;s.velocity+=(target-s.velocity)*(1-Math.exp(-h*k));if(Math.abs(s.velocity)<.0001)s.velocity=0;
  s.depth=clamp(s.depth+s.velocity*h,0,1);s.turn+=(down?rate:-rate)*h;
  if(down&&s.depth>=1){s.impactSpeed=Math.abs(s.velocity);s.velocity=0;s.phase='landed';s.event='landed';break;}
  if(!down&&s.depth<=0){s.velocity=0;s.phase='surfaced';s.event='surfaced';break;}
 }
 return s;
}
function wear(speed){return Math.round(clamp((speed-.145)*80,0,16));}
root.CrabPot25={create,step,wear,angleDelta};if(typeof module!=='undefined')module.exports=root.CrabPot25;
})(typeof window!=='undefined'?window:globalThis);
