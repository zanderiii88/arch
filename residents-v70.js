/* Remaining legacy roaming residents use the approved player pose/face grid. */
(function(root){'use strict';
function createResidents54({player,createCanvas}){
 const cache=new Map(),looks={euan:{bottom:2,hairStyle45:1,hairColour45:2,topColour45:2,bottomColour45:1},iris:{bottom:2,hairStyle45:1,hairColour45:1,topColour45:2,bottomColour45:2}};
 function sprite(id,o={}){const opts={time:o.time||0,walking:!!o.walking,pose:o.talk?'talk':'idle',ambient:o.ambient!==false},q=player.select(opts),key=[id,q.kind,q.frame].join(':');if(cache.has(key))return cache.get(key);const src=player.sprite(looks[id],opts),c=createCanvas();c.width=192;c.height=208;const g=c.getContext('2d');g.imageSmoothingEnabled=false;if(id==='iris'){
 const dx=q.kind==='walk'?2:0,dy=q.kind==='walk'?-(q.frame%2)*2-4:0;
 // Straight rear hair is behind the unchanged native face and connected broader body.
 const hr=(x,y,w,h,c)=>{g.fillStyle=c;g.fillRect(x+dx,y+dy,w,h)};
 hr(58,50,18,58,'#775532');hr(60,108,16,14,'#775532');hr(62,122,12,8,'#775532');hr(64,130,8,4,'#775532');
 hr(128,52,16,58,'#775532');hr(130,110,14,14,'#775532');hr(132,124,10,8,'#775532');
 hr(62,54,10,54,'#aa8148');hr(64,108,8,14,'#aa8148');hr(66,122,4,6,'#aa8148');
 hr(130,56,10,54,'#aa8148');hr(132,110,8,14,'#aa8148');hr(134,124,4,4,'#aa8148');
 hr(64,58,4,44,'#d5b66b');hr(66,104,2,16,'#d5b66b');hr(132,60,4,42,'#d5b66b');hr(134,104,2,16,'#d5b66b');
 g.drawImage(src,0,100,192,108,-12,100,216,108);g.drawImage(src,0,0,192,100,0,0,192,100);
 }else g.drawImage(src,0,0);
 const im=g.getImageData(0,0,192,208),d=im.data;for(let y=97;y<129;y++)for(let x=60;x<139;x++){const i=(y*192+x)*4;if(d[i+3]&&d[i+2]>d[i]*1.12&&d[i+1]>d[i]){const s=Math.min(3,Math.max(0,Math.floor((d[i+2]-60)/42))),col=(id==='euan'?[[40,52,40],[66,81,55],[100,119,74],[143,154,105]]:[[32,55,59],[41,84,87],[62,117,120],[98,151,146]])[s];d[i]=col[0];d[i+1]=col[1];d[i+2]=col[2];}}g.putImageData(im,0,0);
 if(id==='euan'){
 // Camera hangs from a connected neck strap, with one clear glass highlight.
 g.fillStyle='#343b36';g.fillRect(83,113,4,25);g.fillRect(116,110,4,28);g.fillRect(81,132,42,23);g.fillStyle='#52645d';g.fillRect(85,135,34,16);g.fillStyle='#263c41';g.fillRect(98,135,16,16);g.fillStyle='#7ea5a6';g.fillRect(102,138,8,9);g.fillStyle='#c7dbcf';g.fillRect(103,139,3,3);g.fillStyle='#c3baa0';g.fillRect(85,134,7,4);
 }else{
 const dy=q.kind==='walk'?-(q.frame%2)*2-4:0,dx=q.kind==='walk'?2:0;g.save();g.translate(dx,dy);g.strokeStyle='#51463e';g.lineWidth=2;g.strokeRect(96,68,13,13);g.strokeRect(118,62,13,13);g.fillStyle='#51463e';g.fillRect(109,70,9,2);g.fillRect(91,72,5,2);g.restore();
 // Field notebook hangs from a connected belt loop, following the native walk origin.
 const bx=84+dx,by=143+dy;g.fillStyle='#51463e';g.fillRect(bx+8,by-9,3,10);g.fillStyle='#3c4d43';g.fillRect(bx,by,16,16);g.fillStyle='#c8c3a0';g.fillRect(bx+2,by+2,12,12);g.fillStyle='#6d775d';g.fillRect(bx+2,by+3,3,10);
 }cache.set(key,c);return c;}
 function draw(g,id,x,y,o={}){const im=sprite(id,o),s=(o.height||100)/152;g.save();g.imageSmoothingEnabled=false;g.translate(Math.round(x),Math.round(y));if(o.mirror)g.scale(-1,1);g.drawImage(im,-96*s,-184*s,192*s,208*s);g.restore();}
 function portrait(g,id,o={}){g.clearRect(0,0,g.canvas.width,g.canvas.height);if(o.world)return draw(g,id,g.canvas.width/2,g.canvas.height-4,{...o,height:g.canvas.height-15});const im=sprite(id,{...o,walking:false}),w=g.canvas.width,h=w*82/104;g.imageSmoothingEnabled=false;g.drawImage(im,44,24,104,82,0,(g.canvas.height-h)/2,w,h);}
 return {draw,portrait,sprite};
}root.createResidents54=createResidents54;
})(typeof window!=='undefined'?window:globalThis);
