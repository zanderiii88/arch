/* Shared illustrated NPC renderer. Pose art remains independent of gameplay. */
(function(root){
'use strict';
function createNpcRenderer24({images,createCanvas}){
 const cache=new Map();
 function frame(id,index){
  const key=id+':'+index;if(cache.has(key))return cache.get(key);
  const sheet=images[id];if(!sheet)return null;
  const c=createCanvas();c.width=384;c.height=560;const g=c.getContext('2d');g.imageSmoothingEnabled=false;
  g.drawImage(sheet,(index%4)*384,Math.floor(index/4)*560,384,560,0,0,384,560);
  cache.set(key,c);return c;
 }
 function select({id,time=0,work=false,ambient=true,held=false}){
  if(!ambient)return work?7:0;
  if(held)return work?7:0;
  if(work){const p=((time%(id==='jamie'?2.6:2.1))+(id==='jamie'?2.6:2.1))%(id==='jamie'?2.6:2.1),v=p/(id==='jamie'?2.6:2.1);return v<.55?4:v<.69?5:v<.82?6:7;}
  const t=((time%5)+5)%5;return t<2?0:t<3?1:t<3.13?2:3;
 }
 function draw(g,x,y,{id,time=0,height=90,work=false,walking=false,mirror=false,ambient=true,held=false,upperOnly=false}={}){
  const index=select({id,time,work,ambient,held}),c=frame(id,index);if(!c)return false;
  const anchor=work?(id==='jamie'?148:210):(id==='jamie'?208:226),scale=height/(id==='jamie'?490:490);
  g.save();g.translate(x,y);g.scale(mirror?-scale:scale,scale);g.imageSmoothingEnabled=false;
  if(upperOnly){g.drawImage(c,0,0,384,332,-anchor,-540,384,332);}
  else if(walking&&ambient&&!work){
   const phase=Math.sin(time*10),sway=phase*3;
   // Overlapping cuts keep the waist joined while the legs take small steps.
   g.drawImage(c,0,0,384,388,-anchor,-540+Math.abs(phase)*-2,384,388);
   for(let leg=0;leg<2;leg++){g.save();g.translate(leg?5:-5,0);g.drawImage(c,leg*192,378,192,182,leg*192-anchor,-162+(leg?sway:-sway),192,182);g.restore();}
  }else g.drawImage(c,-anchor,-540);
  g.restore();return true;
 }
 function portrait(g,id,{time=0,world=false,ambient=true}={}){
  g.clearRect(0,0,96,world?128:96);g.save();g.beginPath();g.rect(0,0,96,world?128:96);g.clip();
  if(world)draw(g,48,124,{id,time,height:116,ambient});
  else{const c=frame(id,select({id,time,ambient}));const x=id==='jamie'?120:140;g.imageSmoothingEnabled=false;g.drawImage(c,x,38,178,180,0,0,96,97);}
  g.restore();
 }
 return {draw,portrait,select,stats:()=>({cached:cache.size,characters:Object.keys(images)})};
}
root.createNpcRenderer24=createNpcRenderer24;
if(typeof module!=='undefined')module.exports={createNpcRenderer24};
})(typeof window!=='undefined'?window:globalThis);
