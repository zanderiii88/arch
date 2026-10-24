/* Approved chunky player art: cached poses, face layers and shared foot origin. */
(function(root){'use strict';
function createPixelPlayer28({images,createCanvas}){
 const cache=new Map(),W=192,H=208,make=()=>{const c=createCanvas();c.width=W;c.height=H;return c;};
 const outfit=a=>a.bottom===2?1:a.bottom===1||a.bottom===3||a.garment22==='dress'?2:0;
 function select({time=0,walking=false,phase=null,pose='idle',ambient=true}={}){
  if(walking||pose==='walk')return {kind:'walk',frame:ambient?Math.floor(phase??time*8)%4:1};
  if(!ambient)return {kind:'actions',frame:0};
  const p=((time%4)+4)%4,blink=p>=3.25&&p<3.375;
  if(pose==='talk'){if(blink)return {kind:'actions',frame:1};return {kind:'actions',frame:[0,7,0,8,7,0,7][Math.floor(time*8)%7]};}
  if(pose==='wave'||pose==='stretch'){if(p<.6||p>=3)return {kind:'actions',frame:0};if(p<.85||p>=2.7)return {kind:'actions',frame:4};return {kind:'actions',frame:Math.floor((p-.85)/.28)%2?6:5};}
  const breathing=p>=1.25&&p<2.55;return {kind:'actions',frame:breathing?(blink?3:2):(blink?1:0)};
 }
 function sprite(a={},o={}){
  const q=select(o),row=outfit(a),emotion=Math.max(0,Math.min(3,Number(o.emotion)||0)),key=[row,q.kind,q.frame,emotion,Appearance45.key(a)].join(':');if(cache.has(key))return cache.get(key);
  const c=make(),g=c.getContext('2d');g.imageSmoothingEnabled=false;
  if(q.kind==='walk')g.drawImage(images.walk,q.frame*96,row*104,96,104,0,0,W,H);else g.drawImage(images.actions,q.frame*W,row*H,W,H,0,0,W,H);
  // Wave frames only replace the upper body. Preserve complete clothing and legs.
  if(q.kind==='actions'&&q.frame>=4&&q.frame<=6){for(const [x,y,w,h]of [[74,146,118,2],[0,148,W,H-148]]){g.clearRect(x,y,w,h);g.drawImage(images.actions,x,row*H+y,w,h,x,y,w,h);}}
  if(emotion){const hx=q.kind==='walk'?48:46,hy=q.kind==='walk'?28-(q.frame%2)*2:32;g.drawImage(images.faces,emotion*98+46,24,40,38,hx+46,hy+24,40,38);}
  if(cache.size>=96)cache.delete(cache.keys().next().value);const dressed=Appearance45.apply(c,a,q);cache.set(key,dressed);return dressed;
 }
 function draw(g,x,y,a,o={}){const im=sprite(a,o),height=o.height||114,s=height/152;g.save();g.translate(Math.round(x),Math.round(y));if(o.mirror)g.scale(-1,1);g.imageSmoothingEnabled=false;g.fillStyle='#244c4928';g.beginPath();g.ellipse(0,1,height*.21,height*.045,0,0,Math.PI*2);g.fill();g.drawImage(im,-96*s,-184*s,W*s,H*s);g.restore();}
 function portrait(g,a,o={}){const width=g.canvas.width,height=g.canvas.height;g.clearRect(0,0,width,height);if(o.world)return draw(g,width/2,height-4,a,{...o,height:height-15});const im=sprite(a,o),q=select(o),hx=q.kind==='walk'?48:46,hy=q.kind==='walk'?28-(q.frame%2)*2:32;g.imageSmoothingEnabled=false;const h=width*70/98;g.drawImage(im,hx,hy,98,70,0,(height-h)/2,width,h);}
 return {draw,portrait,sprite,select,outfit,clear:()=>cache.clear(),stats:()=>({cached:cache.size,style:'chunky pixel',outfits:3})};
}
root.createPixelPlayer28=createPixelPlayer28;if(typeof module!=='undefined')module.exports={createPixelPlayer28};
})(typeof window!=='undefined'?window:globalThis);
