/* Chunky player sizes and sibling poses. All origins are measured in the native atlas. */
(function(root){'use strict';
function createPlayer29({images,createCanvas}){
 const base=createPixelPlayer28({images,createCanvas}),cache=new Map(),motions=new WeakMap();
 function frame(o={}){if(!o.walking&&o.pose?.startsWith('fish-'))return {kind:'actions',frame:({'fish-hold':9,'fish-wait':9,'fish-back':10,'fish-cast':11,'fish-pull':12,'fish-reel':12})[o.pose]??9};return base.select(o)}
 function sprite(a={},o={}){const q=frame(o);if(q.frame<9)return base.sprite(a,o);const row=base.outfit(a),k='fish:'+row+':'+q.frame+':'+(o.emotion||0)+':'+Appearance45.key(a);if(cache.has(k))return cache.get(k);const c=createCanvas();c.width=192;c.height=208;const g=c.getContext('2d');g.imageSmoothingEnabled=false;g.drawImage(images.actions,q.frame*192,row*208,192,208,0,0,192,208);if(o.emotion)g.drawImage(images.faces,o.emotion*98+46,24,40,38,92,56,40,38);const dressed=Appearance45.apply(c,a,q);cache.set(k,dressed);return dressed}
 function draw(g,x,y,a,o={}){const height=o.height||114,src=sprite(a,o),size=height<=45?48:height<=125?96:192,key=[base.outfit(a),frame(o).kind,frame(o).frame,o.emotion||0,size,Appearance45.key(a)].join(':');let im=cache.get(key);if(!im){im=createCanvas();im.width=size;im.height=size*208/192;const ig=im.getContext('2d');ig.imageSmoothingEnabled=false;ig.drawImage(src,0,0,im.width,im.height);if(cache.size>=180)cache.delete(cache.keys().next().value);cache.set(key,im)}
 const s=height/152;g.save();g.translate(Math.round(x),Math.round(y));if(o.mirror)g.scale(-1,1);g.imageSmoothingEnabled=false;g.fillStyle='#244c4928';g.beginPath();g.ellipse(0,1,height*.21,height*.045,0,0,7);g.fill();g.drawImage(im,-96*s,-184*s,192*s,208*s);g.restore()}
 function track(g,x,y,dir,walking,time){let m=motions.get(g.canvas);if(!m){m={x,y,dir:'right',distance:0,time};motions.set(g.canvas,m)}const dx=x-m.x,dy=y-m.y,d=Math.hypot(dx,dy);if(time!==m.time||d){if(d<75&&walking){m.distance+=d;if(Math.abs(dx)>.05)m.dir=dx<0?'left':'right'}else if(dir==='left'||dir==='right')m.dir=dir;m.x=x;m.y=y;m.time=time}return {mirror:m.dir==='left',phase:m.distance/18}}
 function portrait(g,a,o={}){g.clearRect(0,0,g.canvas.width,g.canvas.height);if(o.world)return draw(g,g.canvas.width/2,g.canvas.height-4,a,{...o,height:g.canvas.height-15});const im=sprite(a,o),q=frame(o),hx=q.kind==='walk'?48:46,hy=q.kind==='walk'?28-(q.frame%2)*2:32;g.imageSmoothingEnabled=false;const w=g.canvas.width,h=w*70/98;g.drawImage(im,hx,hy,98,70,0,(g.canvas.height-h)/2,w,h)}
 function grip(pose='fish-hold'){return ({'fish-hold':{x:114,y:124},'fish-wait':{x:114,y:124},'fish-back':{x:66,y:104},'fish-cast':{x:136,y:99},'fish-pull':{x:114,y:124},'fish-reel':{x:114,y:124}})[pose]||{x:114,y:124}}
 return {draw,sprite,portrait,track,grip,select:base.select,outfit:base.outfit,stats:()=>({cached:cache.size,style:'chunky pixel',outfits:3,sizes:[38,114,152]}),clear:()=>{cache.clear();base.clear()}};
}
function createBrothers29({image,createCanvas}){const cache=new Map();
 function select({id,time=0,work=false,walking=false,ambient=true,held=false,talk=false,celebrate=false}={}){if(celebrate)return 3;if(held)return talk&&ambient?Math.floor(time*7)%2*2:0;if(!ambient)return work?11:0;if(work){const p=(time%(id==='jamie'?2.6:2.1))/(id==='jamie'?2.6:2.1);return p<.12?8:p<.69?9:p<.82?10:11}if(walking)return 4+Math.floor(time*8)%4;if(talk)return Math.floor(time*7)%2*2;return id!=='ben'&&time%4>3.2&&time%4<3.35?1:0}
 function tile(id,n){const k=id+':'+n;if(cache.has(k))return cache.get(k);const c=createCanvas();c.width=96;c.height=104;const g=c.getContext('2d');g.imageSmoothingEnabled=false;g.drawImage(image,n%4*96,((id==='ben'?3:0)+Math.floor(n/4))*104,96,104,0,0,96,104);if(id==='jamie'&&n>=8&&n<=11){
 // The raised-axe atlas cell has neighbouring debris at its left edge.
 if(n===9)g.clearRect(0,0,28,104);
 // Keep the stump grounded at the same pixel origin in every chopping pose.
 g.clearRect(68,70,28,34);
 g.drawImage(image,68,278,28,26,68,70,28,26);
 }cache.set(k,c);return c}
 function draw(g,x,y,o={}){const im=tile(o.id,select(o)),h=o.height||114,s=h/76;g.save();g.translate(Math.round(x),Math.round(y));if(o.mirror)g.scale(-1,1);g.imageSmoothingEnabled=false;if(o.upperOnly){g.drawImage(im,0,0,96,65,-48*s,-92*s,96*s,65*s)}else g.drawImage(im,-48*s,-92*s,96*s,104*s);g.restore()}
 function portrait(g,id,o={}){g.clearRect(0,0,g.canvas.width,g.canvas.height);if(o.world)return draw(g,g.canvas.width/2,g.canvas.height-4,{...o,id,height:g.canvas.height-15});const c=tile(id,select({...o,id}));g.imageSmoothingEnabled=false;g.drawImage(c,24,15,48,40,0,0,g.canvas.width,g.canvas.height)}
 return {draw,portrait,select,stats:()=>({cached:cache.size})};}
root.createPlayer29=createPlayer29;root.createBrothers29=createBrothers29;
})(typeof window!=='undefined'?window:globalThis);
