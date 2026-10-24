/* Appearance layers share native sprite coordinates. Face and tools are excluded from dye masks. */
(function(root){'use strict';
const hair=[['#211e22','#373039','#51464a','#6a5859'],['#775532','#aa8148','#d5b66b','#efcf88'],['#422b23','#68412d','#925c3c','#b97e50'],['#582d26','#8e402d','#bc6038','#e08d52']],tops=[['#422b25','#68442f','#865b3e','#a87950'],['#602b30','#94434a','#b9615b','#d58473'],['#283e58','#3e607f','#5c84a0','#81a8bd']],bottoms=[['#8d7351','#bea374','#dfc697','#f5dfb4'],['#443128','#684c37','#8c694b','#b28d62'],['#25262b','#393a40','#55545a','#727078']];
const cache=new WeakMap();
function norm(a={}){return {hairStyle45:[0,1,2].includes(a.hairStyle45)?a.hairStyle45:0,hairColour45:[0,1,2,3].includes(a.hairColour45)?a.hairColour45:2,topColour45:[0,1,2].includes(a.topColour45)?a.topColour45:0,bottomColour45:[0,1,2].includes(a.bottomColour45)?a.bottomColour45:0};}
function key(a){const n=norm(a);return Object.values(n).join(':')+':'+(a.bottom||0);}
function polygon(g,points,fill){g.fillStyle=fill;g.beginPath();g.moveTo(...points[0]);points.slice(1).forEach(p=>g.lineTo(...p));g.closePath();g.fill();}
function apply(source,a={},context={}){
 const n=norm(a),signature=key(a)+':'+(context.kind||'actions')+':'+(context.frame||0);let entries=cache.get(source);if(!entries){entries=new Map();cache.set(source,entries)}if(entries.has(signature))return entries.get(signature);
 const c=document.createElement('canvas');c.width=source.width;c.height=source.height;const g=c.getContext('2d');g.imageSmoothingEnabled=false;g.drawImage(source,0,0);
 const tool=context.kind==='tool',walk=context.kind==='walk',dx=walk?2:0,dy=walk?-(context.frame%2)*2-4:0,face=[[96+dx,63+dy],[114+dx,48+dy],[128+dx,58+dy],[133+dx,82+dy],[121+dx,94+dy],[98+dx,99+dy],[80+dx,87+dy],[69+dx,73+dy]],inside=(x,y)=>{let v=false;for(let i=0,j=face.length-1;i<face.length;j=i++){const A=face[i],B=face[j];if((A[1]>y)!==(B[1]>y)&&x<(B[0]-A[0])*(y-A[1])/(B[1]-A[1])+A[0])v=!v}return v};
 const im=g.getImageData(0,0,c.width,c.height),data=im.data,hex=s=>[1,3,5].map(i=>parseInt(s.slice(i,i+2),16)),hp=hair[n.hairColour45].map(hex),tp=tops[n.topColour45].map(hex),bp=bottoms[n.bottomColour45].map(hex),trousers=a.bottom===2;
 for(let y=0;y<c.height;y++)for(let x=0;x<c.width;x++){
  const i=(y*c.width+x)*4;if(!data[i+3])continue;const R=data[i],G=data[i+1],B=data[i+2],brown=R>G*1.14&&G>B*1.07,shade=Math.max(0,Math.min(3,Math.floor((R-40)/40)));let p=null;
  // Tools have their own head bounds; no face pixels or hands are in the hair mask.
  const isHair=y>=24+dy&&y<103+dy&&x>=43+dx&&x<146+dx&&!inside(x,y)&&brown&&R<195;
  if(isHair){if(n.hairStyle45){data[i+3]=0;continue;}p=hp;}
  else if(y>=99&&y<126&&x>64&&x<126&&brown&&R<185&&G<125)p=tp;
  else if(y>=128&&y<(trousers?174:a.bottom===1||a.bottom===3?151:148)&&x>=60&&x<130&&((trousers&&brown&&R<180)||(!trousers&&R>125&&G>100&&Math.abs(R-G)<58&&G-B<85)))p=bp;
  if(p){const s=p===bp&&!trousers?Math.max(0,Math.min(3,Math.floor((G-85)/40))):shade;[data[i],data[i+1],data[i+2]]=p[s];}
 }
 g.putImageData(im,0,0);
 if(n.hairStyle45){
  // Compact pixel silhouettes sit behind the unmodified face. Separate face crop preserves expressions.
  const saved=document.createElement('canvas');saved.width=c.width;saved.height=c.height;saved.getContext('2d').drawImage(c,0,0);
  g.save();g.translate(dx,dy);g.fillStyle="#eea36a";g.fillRect(94,94,12,10);
  const h=hair[n.hairColour45];
  if(n.hairStyle45===2){polygon(g,[[55,53],[43,57],[39,69],[43,86],[37,102],[41,117],[53,120],[63,110],[63,92],[70,77]],h[0]);polygon(g,[[49,62],[43,72],[49,91],[43,106],[47,113],[54,106],[57,91],[62,75]],h[2]);g.fillStyle='#ba9858';g.fillRect(52,67,10,4);}
  polygon(g,[[62,69],[58,57],[64,46],[76,38],[92,34],[110,35],[124,43],[133,55],[135,69],[129,77],[123,67],[115,53],[105,63],[89,69],[73,75],[66,86],[60,80]],h[0]);
  polygon(g,[[63,62],[68,49],[80,42],[99,38],[115,42],[123,49],[113,48],[102,59],[87,65],[72,68]],h[2]);
  polygon(g,[[68,54],[80,44],[96,40],[109,41],[96,48],[84,53],[74,61],[65,64]],h[3]);
  polygon(g,[[68,64],[86,58],[101,50],[114,45],[107,56],[94,64],[76,71],[65,77],[63,71]],h[1]);g.restore();
  g.save();g.beginPath();g.moveTo(...face[0]);face.slice(1).forEach(p=>g.lineTo(...p));g.closePath();g.clip();g.drawImage(saved,0,0);g.restore();
 }
 if(entries.size>60)entries.clear();entries.set(signature,c);return c;
}
root.Appearance45={apply,key,norm,palettes:{hair,tops,bottoms}};
})(typeof window!=='undefined'?window:globalThis);
