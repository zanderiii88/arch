/* Shared upper-body merchant renderer; head/torso registration is fixed across states. */
(function(root){'use strict';
const rows={nell:0,pip:1,mara:2};
function createMerchants31({image,createCanvas}){const cache=new Map(),W=96,H=104;
 function select({id,time=0,ambient=true,wave=false,talk=false,waveAge=0}={}){
  if(!ambient)return 0;
  if(talk)return [0,2,0,3,2,0][Math.floor(Math.max(0,time)*7)%6];
  if(wave){if(waveAge<.2||waveAge>3.7)return 0;const speed={nell:5,pip:2.8,mara:3.6}[id]||3.6;return 4+Math.floor(Math.max(0,waveAge-.2)*speed)%2;}
  const phase=(time+(rows[id]||0)*.63)%4.6;return phase>3.65&&phase<3.8?1:0;
 }
 function sprite(id,frame){const k=id+':'+frame;if(cache.has(k))return cache.get(k);if(rows[id]===undefined)return null;const c=createCanvas();c.width=W;c.height=H;const g=c.getContext('2d');g.imageSmoothingEnabled=false;g.drawImage(image,frame*W,rows[id]*H,W,H,0,0,W,H);cache.set(k,c);return c;}
 function draw(g,x,waist,o={}){const c=sprite(o.id,select(o));if(!c)return false;const s=(o.height||78)/76;g.save();g.translate(Math.round(x),Math.round(waist));g.imageSmoothingEnabled=false;if(o.mirror)g.scale(-1,1);g.drawImage(c,-48*s,-92*s,W*s,H*s);g.restore();return true;}
 function portrait(g,id,o={}){const c=sprite(id,select({...o,id}));if(!c)return false;g.clearRect(0,0,g.canvas.width,g.canvas.height);g.imageSmoothingEnabled=false;if(o.world)draw(g,g.canvas.width/2,g.canvas.height-3,{...o,id,height:g.canvas.height-14});else {const h=g.canvas.width*58/64;g.drawImage(c,16,12,64,58,0,(g.canvas.height-h)/2,g.canvas.width,h)};return true;}
 return {draw,portrait,sprite,select,stats:()=>({cached:cache.size,characters:['Nat','Katie','Bruce'],states:['idle','blink','talkOpen','talkRound','waveA','waveB']})};}
root.createMerchants31=createMerchants31;if(typeof module!=='undefined')module.exports={createMerchants31};
})(typeof window!=='undefined'?window:globalThis);
