/* Archipelago illustrated player. Generated pose art is assembled on a shared,
 * front-facing rig; inventory and gameplay do not depend on the art layers. */
(function(root){
'use strict';
function createPlayerRenderer22({images,createCanvas}){
 const rawCache=new Map(),cache=new Map();
 const make=(w=256,h=512)=>{const c=createCanvas();c.width=w;c.height=h;return c;};
 const rgb=h=>[1,3,5].map(i=>parseInt(h.slice(i,i+2),16));
 const inks={hair:['#65402c','#312c2b','#c79343','#a8472c','#e2ddd0','#e3b9a3','#78838b'],skin:['#f4c49a','#dca675','#bb8157','#8c583d','#593d30'],top:['#278c91','#c47949','#f0e1bc','#445e8a','#68814b','#af6288','#bdad70'],bottom:['#c5a374','#789d8d','#446484','#8d729d','#c07b62','#79583f']};
 function raw(kind,frame){
  const key=kind+frame;if(rawCache.has(key))return rawCache.get(key);
  const c=make(),g=c.getContext('2d'),row=Math.floor(frame/4),col=frame%4,foot=[505,495,476][row],top=[47,34,26][row],s=458/(foot-top),im=images[kind];
  g.imageSmoothingEnabled=false;g.drawImage(im,col*256,row*512,256,512,128-128*s,495-foot*s,256*s,512*s);
  // The source's last passing pose repeats the first leg. Mirror its body only.
  if(frame===7){g.clearRect(0,0,256,512);g.save();g.translate(256,0);g.scale(-1,1);g.drawImage(raw(kind,5),0,0);g.restore();}
  rawCache.set(key,c);return c;
 }
 function fishingRaw(kind,frame){
  const key='fishing-'+kind+frame;if(rawCache.has(key))return rawCache.get(key);
  const im=images[kind==='sleeves'?'fishingSleeves':'fishing'],cw=im.width/4,ch=im.height/2,col=frame%4,row=Math.floor(frame/4),sample=make(cw,ch),sg=sample.getContext('2d');sg.drawImage(im,col*cw,row*ch,cw,ch,0,0,cw,ch);
  const p=sg.getImageData(0,0,cw,ch).data;let top=ch,foot=0;for(let y=0;y<ch;y++)for(let x=0;x<cw;x++)if(p[(y*cw+x)*4+3]>200){top=Math.min(top,y);foot=Math.max(foot,y);}
  const s=458/(foot-top),c=make(),g=c.getContext('2d');g.imageSmoothingEnabled=false;g.translate(256,0);g.scale(-1,1);g.drawImage(sample,128-cw/2*s,491-foot*s,cw*s,ch*s);rawCache.set(key,c);return c;
 }
 function fishingBottom(kind){
  const key='fishing-bottom-'+kind;if(rawCache.has(key))return rawCache.get(key);const c=make(),g=c.getContext('2d');g.drawImage(raw(kind,0),0,0);const d=g.getImageData(0,0,256,512),p=d.data;
  for(let y=0;y<352;y++){let lo=79,hi=187;if(y<272){lo=256;hi=-1;}else if(kind!=='skirt'){lo=82-(y-272)*.16;hi=184+(y-272)*.18;}else if(y>286){lo=256;hi=-1;for(let x=45;x<220;x++){const i=(y*256+x)*4,r=p[i],v=p[i+1],b=p[i+2];const material=kind==='skirt'?v>r*1.02&&v>b*1.04:kind==='trousers'?b>r*1.08&&b>v*1.04:r>v&&v>b&&r<v*1.5&&v>60;if(p[i+3]>150&&material){lo=Math.min(lo,x-3);hi=Math.max(hi,x+3);}}if(hi<lo){lo=79;hi=187;}}
   for(let x=0;x<256;x++)if(x<lo||x>hi)p[(y*256+x)*4+3]=0;
  }g.putImageData(d,0,0);rawCache.set(key,c);return c;
 }
 function fishingArms(kind,frame){
  const key='fishing-arms-'+kind+frame;if(rawCache.has(key))return rawCache.get(key);const c=make(),g=c.getContext('2d');g.drawImage(fishingRaw(kind,frame),0,0);const d=g.getImageData(0,0,256,512),p=d.data,seen=new Uint8Array(256*340),keep=new Uint8Array(256*512);
  const skin=i=>p[i*4+3]>100&&p[i*4]>175&&p[i*4]-p[i*4+1]>65&&p[i*4+1]>p[i*4+2]*1.2;
  for(let j=0;j<seen.length;j++){if(seen[j]||!skin(j))continue;const q=[j];seen[j]=1;let minY=512,maxY=0,sumX=0;for(let n=0;n<q.length;n++){const i=q[n],x=i%256,y=Math.floor(i/256);minY=Math.min(minY,y);maxY=Math.max(maxY,y);sumX+=x;for(const [dx,dy]of [[1,0],[-1,0],[0,1],[0,-1]]){const xx=x+dx,yy=y+dy,k=yy*256+xx;if(xx>=0&&xx<256&&yy>=0&&yy<340&&!seen[k]&&skin(k)){seen[k]=1;q.push(k);}}}
   if(minY>=110&&(maxY>218||sumX/q.length>174||sumX/q.length<82))for(const i of q){const x=i%256,y=Math.floor(i/256);for(let dy=-2;dy<=2;dy++)for(let dx=-2;dx<=2;dx++)if(x+dx>=0&&x+dx<256)keep[(y+dy)*256+x+dx]=1;}
  }
  if(kind==='sleeves')for(let y=130;y<198;y++)for(let x=0;x<256;x++){const i=(y*256+x)*4;if((x<74||x>182)&&p[i+1]>p[i]*1.17&&p[i+2]>p[i]*1.12)for(let dy=-2;dy<=2;dy++)for(let dx=-2;dx<=2;dx++)if(x+dx>=0&&x+dx<256)keep[(y+dy)*256+x+dx]=1;}
  for(let i=0;i<keep.length;i++)if(!keep[i])p[i*4+3]=0;g.putImageData(d,0,0);rawCache.set(key,c);return c;
 }
 function recolour(c,look){
  const g=c.getContext('2d'),d=g.getImageData(0,0,256,512),p=d.data;
  const top=rgb(look.topColour22||inks.top[look.outfit||0]),skin=rgb(inks.skin[look.skin||0]),hair=rgb(inks.hair[look.hair||0]);
  const bottom=rgb(look.garment22==='dress'?(look.topColour22||inks.top[look.outfit||0]):inks.bottom[look.bottomTint22||0]);
  // Protect each row's skin span (including enclosed eyes and mouth).
  // Hair shares brown pigments with the face, so colour alone is not a mask.
  const faceLeft=new Int16Array(213).fill(256),faceRight=new Int16Array(213).fill(-1);
  for(let y=70;y<213;y++)for(let x=70;x<205;x++){const i=(y*256+x)*4;if(p[i+3]>150&&p[i]>180&&p[i]-p[i+1]>65&&p[i+1]>p[i+2]*1.2){faceLeft[y]=Math.min(faceLeft[y],x-3);faceRight[y]=Math.max(faceRight[y],x+3);}}
  for(let y=0;y<512;y++)for(let x=0;x<256;x++){
   const i=(y*256+x)*4;if(p[i+3]<12)continue;const r=p[i],v=p[i+1],b=p[i+2];let target=null,light=1;
   const fabric=v>r*1.17&&b>r*1.12&&b>v*.99&&b<v*1.31&&y>186&&y<350;
   const leg=(look.bottom===2?r<b*.92&&b>v*1.02:r<v*.96&&v>b*1.05)&&y>272;
   if(fabric&&(y<270||look.top===2)){if(look.outfit!==0||look.topColour22){target=top;light=(r*.21+v*.72+b*.07)/112;}}
   else if(leg||look.bottom===0&&look.bottomTint22&&y>286&&y<357&&r>v&&v>b&&r<225&&v>75&&x>64&&x<201){if(look.bottomTint22||look.garment22==='dress'){target=bottom;light=(r*.21+v*.72+b*.07)/(look.bottom===2?77:140);}}
   else if(y<202&&!(x>=faceLeft[y]&&x<=faceRight[y]||x>=110&&x<=174&&y>=140)&&r<145&&v<104&&b<85&&r>v*1.16&&v>b*1.07){if(look.hair){target=hair;light=(r*.21+v*.72+b*.07)/62;}}
   else if(r>140&&r>v*1.2&&v>b*1.2&&!(y>278&&y<356&&x>65&&x<202)&&look.skin){target=skin;light=(r*.21+v*.72+b*.07)/167;}
   if(target){light=Math.max(.35,Math.min(1.4,light));p[i]=Math.min(255,target[0]*light);p[i+1]=Math.min(255,target[1]*light);p[i+2]=Math.min(255,target[2]*light);}
  }
  g.putImageData(d,0,0);
 }
 function footBounds(c,half,closed=false){const p=c.getContext('2d').getImageData(0,0,256,512).data;let l=256,r=0,b=0;for(let y=375;y<501;y++)for(let x=half?128:30;x<(half?226:128);x++)if(p[(y*256+x)*4+3]>180)b=Math.max(b,y);const t=b-(closed?36:49);for(let y=t;y<=b;y++)for(let x=half?128:30;x<(half?226:128);x++)if(p[(y*256+x)*4+3]>180){l=Math.min(l,x);r=Math.max(r,x);}return l<r?{l:l-1,r:r+2,t,b:b+2}:null;}
 function shoes(c,look,frame){
  if((look.shoes||0)===1&&look.bottom!==2||!look.shoes&&look.bottom!==2)return;
  const g=c.getContext('2d'),source=raw(look.shoes===1?'base':'trousers',frame),layer=make(),lg=layer.getContext('2d');
  for(let half=0;half<2;half++){const a=footBounds(c,half,look.bottom===2),b=footBounds(source,half,look.shoes!==1);if(!a||!b)continue;g.clearRect(a.l,a.t,a.r-a.l,a.b-a.t);lg.drawImage(source,b.l,b.t,b.r-b.l,b.b-b.t,a.l,a.t,a.r-a.l,a.b-a.t);}
  if(look.shoes===2){const d=lg.getImageData(0,0,256,512);for(let i=0;i<d.data.length;i+=4){const p=d.data;if(p[i+3]&&p[i]>p[i+1]*1.15){const v=Math.min(245,100+p[i]*.85);p[i]=v;p[i+1]=v*.98;p[i+2]=v*.88;}}lg.putImageData(d,0,0);}g.drawImage(layer,0,0);
 }
 function longSkirt(c,frame){
  const source=raw('skirt',frame),layer=make(),g=layer.getContext('2d');g.drawImage(source,0,0);const d=g.getImageData(0,0,256,512),p=d.data;
  for(let y=0;y<512;y++){let lo=256,hi=-1;if(y>=287&&y<380)for(let x=0;x<256;x++){const i=(y*256+x)*4;if(p[i+3]>120&&p[i+1]>p[i]*1.02&&p[i+1]>p[i+2]*1.04){lo=Math.min(lo,x-3);hi=Math.max(hi,x+3);}}for(let x=0;x<256;x++)if(x<lo||x>hi)p[(y*256+x)*4+3]=0;}
  g.putImageData(d,0,0);c.getContext('2d').drawImage(layer,0,287,256,93,0,287,256,158);
 }
 function head(g,look,frame){
  if((!look.hair22||look.hair22==='bob')&&frame>=8)return;
  if(!look.hair22||look.hair22==='bob'){
   const src=raw('base',frame===2?2:0);g.clearRect(0,0,256,198);g.drawImage(src,0,0,256,198,0,0,256,198);return;
  }
  const index={tucked:1,bun:2,crop:3}[look.hair22]||0,col=index%2,row=Math.floor(index/2),cell=images.heads.width/2;
  const sample=make(cell,cell),sg=sample.getContext('2d');sg.drawImage(images.heads,col*cell,row*cell,cell,cell,0,0,cell,cell);const p=sg.getImageData(0,0,cell,cell).data;let top=cell,foot=0,neck=0,n=0;for(let y=0;y<cell;y++)for(let x=0;x<cell;x++)if(p[(y*cell+x)*4+3]>180){top=Math.min(top,y);foot=Math.max(foot,y);}for(let y=foot-8;y<=foot;y++)for(let x=0;x<cell;x++)if(p[(y*cell+x)*4+3]>180){neck+=x;n++;}const s=166/(foot-top),anchor=n?neck/n:cell/2;
  // Reuse the body's open neck, then overlap the head's open neck with it.
  // The head atlas has a closed dark outline at its bottom; do not draw that seam.
  g.clearRect(0,0,256,198);
  const neckLayer=make(),ng=neckLayer.getContext('2d');ng.drawImage(raw('base',frame),0,0);const nd=ng.getImageData(0,0,256,512),np=nd.data;
  for(let y=0;y<512;y++)for(let x=0;x<256;x++){const i=(y*256+x)*4;if(!(x>=110&&x<=151&&y>=186&&y<=212&&np[i]>140&&np[i]>np[i+1]*1.2&&np[i+1]>np[i+2]*1.2))np[i+3]=0;}
  ng.putImageData(nd,0,0);g.drawImage(neckLayer,0,0);
  const openNeck=foot-18;g.drawImage(sample,0,0,cell,openNeck,128-anchor*s,210-foot*s,cell*s,openNeck*s);
  if(frame>=8){const hand=make(),hg=hand.getContext('2d');hg.drawImage(raw('base',frame),0,0);const d=hg.getImageData(0,0,256,512),p=d.data,mask=new Uint8Array(256*512);for(let y=110;y<230;y++)for(let x=0;x<85;x++){const i=(y*256+x)*4;if(p[i]>155&&p[i+1]>70&&p[i]>p[i+1]*1.2)for(let dy=-2;dy<=2;dy++)for(let dx=-2;dx<=2;dx++)if(x+dx>=0)mask[(y+dy)*256+x+dx]=1;}for(let i=0;i<mask.length;i++)if(!mask[i])p[i*4+3]=0;hg.putImageData(d,0,0);g.drawImage(hand,0,0);}
  if(frame===2){const p=g.getImageData(138,144,1,1).data;g.fillStyle=`rgb(${p[0]},${p[1]},${p[2]})`;for(const x of [103,150]){g.beginPath();g.roundRect(x,119,32,27,7);g.fill();}g.strokeStyle='#694430';g.lineWidth=3;for(const x of [106,153]){g.beginPath();g.moveTo(x,132);g.quadraticCurveTo(x+12,137,x+25,132);g.stroke();}}
 }
 function accessories(g,a){
  const r=(c,x,y,w,h)=>{g.fillStyle=c;g.fillRect(x,y,w,h);};
  g.save();if(a.hair22&&a.hair22!=='bob')g.translate(0,9);
  if(a.eyewear===1||a.eyewear===2||a.glasses){g.strokeStyle='#654a36';g.lineWidth=3;for(const x of [102,150]){g.beginPath();g.roundRect(x,108,30,25,7);if(a.eyewear===2||a.glasses){g.fillStyle='#344e54';g.fill();r('#91b5b3',x+5,112,12,3);}g.stroke();}r('#654a36',132,117,18,3);r('#654a36',89,116,13,3);}
  g.restore();
  // Player hats and facial hair are withheld until matching sprite art is ready.

 }
 function sprite(look,frame){
  const key=JSON.stringify([look,frame]);if(cache.has(key))return cache.get(key);
  const fishing=frame>=16,fishFrame=(frame-16)%16,baseFrame=fishing?0:frame,topKind=look.top===2?'sleeves':'base';
  const c=make(),g=c.getContext('2d'),kind=look.bottom===2?'trousers':look.bottom===1||look.bottom===3||look.garment22==='dress'?'skirt':'base';g.imageSmoothingEnabled=false;g.drawImage(fishing?fishingRaw(topKind,fishFrame):raw(topKind,frame),0,0);
  g.clearRect(0,272,256,240);if(fishing)g.drawImage(fishingBottom(kind),0,0);else g.drawImage(raw(kind,frame),0,272,256,240,0,272,256,240);
  if(look.top===2&&!fishing){const sleeve=make(),sg=sleeve.getContext('2d');sg.drawImage(raw('sleeves',frame),0,0);const d=sg.getImageData(0,0,256,512),p=d.data;for(let i=0;i<p.length;i+=4)if(!(p[i+1]>p[i]*1.17&&p[i+2]>p[i]*1.12))p[i+3]=0;sg.putImageData(d,0,0);g.drawImage(sleeve,0,0);}
  if(look.bottom===3)longSkirt(c,baseFrame);shoes(c,look,baseFrame);head(g,look,fishing?(frame>=32?2:0):frame);recolour(c,look);
  if(look.top===1){const col=look.topColour22||inks.top[look.outfit||0];g.strokeStyle='#344f4c';g.lineWidth=2;g.fillStyle=col;g.beginPath();g.moveTo(113,202);g.lineTo(130,211);g.lineTo(120,223);g.closePath();g.fill();g.stroke();g.beginPath();g.moveTo(143,202);g.lineTo(130,211);g.lineTo(141,223);g.closePath();g.fill();g.stroke();g.beginPath();g.moveTo(131,223);g.lineTo(131,268);g.stroke();g.fillStyle='#e5d8b8';for(let y=232;y<267;y+=12)g.fillRect(132,y,3,3);}
  if(look.pattern==='striped'){g.save();g.globalCompositeOperation='source-atop';g.fillStyle='#eee0bb';for(const y of [230,246,260])g.fillRect(93,y,73,4);g.restore();}else if(look.pattern==='tropical'){g.fillStyle='#f2d78a';for(const[x,y]of[[104,231],[147,245],[119,261]]){g.fillRect(x,y,7,3);g.fillRect(x+2,y-2,3,7);}}
  accessories(g,look);if(fishing){const arms=make(),ag=arms.getContext('2d');ag.drawImage(fishingArms(topKind,fishFrame),0,0);recolour(arms,{...look,hair:0});g.drawImage(arms,0,0);}
  const small=make(128,256);small.getContext('2d').drawImage(c,0,0,128,256);if(cache.size>=48)cache.delete(cache.keys().next().value);cache.set(key,small);return small;
 }
 function select(t,walk,pose,ambient){if(pose?.startsWith('fish-')){const n={'fish-hold':0,'fish-back':1,'fish-cast':2,'fish-wait':3,'fish-pull':4,'fish-reel':ambient?5+Math.floor(t*6)%2:5,'fish-rest':7}[pose]||0;return 16+n+(ambient&&t%4.7<.13?16:0);}if(!ambient)return 0;if(walk)return 4+Math.floor(t*4)%4;if(pose==='wave'||pose==='stretch'){const sequence=[8,9,10,11,10,11,10,9];return sequence[Math.floor(t*6)%sequence.length];}if(pose==='sleep')return 2;const p=t%4;return p<1.45?0:p<2.1?1:p<2.25?2:3;}
 function draw(g,x,y,look,{time=0,walking=false,pose=null,height=33,mirror=false,ambient=true}={}){const f=select(time,walking,pose,ambient),im=sprite(look,f),s=height/458;g.save();g.imageSmoothingEnabled=false;g.translate(Math.round(x),Math.round(y));if(mirror)g.scale(-1,1);g.fillStyle='#244c4928';g.beginPath();g.ellipse(0,1,height*.22,height*.05,0,0,Math.PI*2);g.fill();g.drawImage(im,-128*s,-495*s,256*s,512*s);g.restore();}
 function drawFingers(g,look,{time,pose,height,ambient,grip,sourceGrip}){const im=sprite(look,select(time,false,pose,ambient)),s=height/458;g.save();g.imageSmoothingEnabled=false;g.drawImage(im,(sourceGrip.x-5)/2,(sourceGrip.y-4)/2,5,4,grip.x-5*s,grip.y-4*s,10*s,8*s);g.restore();}
 function gripPoint(look,frame,expected){const f=(frame-16)%16,kind=look.top===2?'sleeves':'base',key='grip-'+kind+f;if(rawCache.has(key))return rawCache.get(key);const p=fishingRaw(kind,f).getContext('2d').getImageData(0,0,256,512).data,isSkin=(x,y)=>{const i=(y*256+x)*4;return p[i+3]>180&&p[i]>180&&p[i]-p[i+1]>65&&p[i+1]>p[i+2]*1.2;};let point={...expected};if(!isSkin(Math.round(point.x),Math.round(point.y))){let best=Infinity;for(let y=Math.round(expected.y)-22;y<=expected.y+22;y++)for(let x=Math.round(expected.x)-22;x<=expected.x+22;x++){const d=(x-expected.x)**2+(y-expected.y)**2;if(d<best&&isSkin(x,y)){best=d;point={x,y};}}let sx=0,sy=0,n=0;for(let y=point.y-8;y<=point.y+8;y++)for(let x=point.x-8;x<=point.x+8;x++)if((x-point.x)**2+(y-point.y)**2<65&&isSkin(x,y)){sx+=x;sy+=y;n++;}if(n)point={x:Math.round(sx/n),y:Math.round(sy/n)};}rawCache.set(key,point);return point;}
 return {draw,drawFingers,gripPoint,sprite,select,clear:()=>cache.clear(),stats:()=>({cached:cache.size,rawFrames:rawCache.size})};
}
root.createPlayerRenderer22=createPlayerRenderer22;
if(typeof module!=='undefined')module.exports={createPlayerRenderer22};
})(typeof window!=='undefined'?window:globalThis);
