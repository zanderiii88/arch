/* Dedicated, registered hand-and-tool frames. Geometry never rotates separately. */
(function(root){'use strict';
const image=new Image();let ready=false;image.onload=()=>{ready=true};image.src='assets/player-tools-v44.png';
const duration=1.3,impact=.91;
function phase(time=0,ambient=true){const p=((time%duration)+duration)%duration;const frame=!ambient?0:p<.16?0:p<.4?1:p<.72?2:p<.91?3:p<1.08?4:5;return {frame,impact:ambient&&frame===4};}
function create({player,createCanvas}){const cache=new Map();
function sprite(a={},o={}){const tool=o.tool||'hammer',frame=o.frame??phase(o.time,o.ambient!==false).frame,row=player.outfit(a)*3+(tool==='axe'?0:tool==='saw'?2:1),key=row+':'+frame;if(!ready)return player.sprite(a,{pose:'idle',ambient:false});if(cache.has(key))return cache.get(key);const c=createCanvas();c.width=192;c.height=208;const g=c.getContext('2d');g.imageSmoothingEnabled=false;g.drawImage(image,Math.max(0,Math.min(5,frame))*192,row*208,192,208,0,0,192,208);cache.set(key,c);return c;}
function draw(g,x,y,a,o={}){const s=(o.height||114)/152;g.save();g.translate(Math.round(x),Math.round(y));if(o.mirror)g.scale(-1,1);g.imageSmoothingEnabled=false;g.drawImage(sprite(a,o),-96*s,-184*s,192*s,208*s);g.restore();}
return {sprite,draw,phase,stats:()=>({ready,cached:cache.size})};}
root.Construction40={create,phase,duration,impact};
})(typeof window!=='undefined'?window:globalThis);
