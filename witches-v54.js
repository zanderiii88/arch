/* Mini and Mona use Hannah's native face, body poses and pixel grid. */
(function(root){'use strict';
function createWitches54({player,createCanvas}){
 const cache=new Map(),looks={mini:{bottom:2,hairStyle45:0,hairColour45:0,topColour45:0,bottomColour45:2},mona:{bottom:1,hairStyle45:0,hairColour45:0,topColour45:0,bottomColour45:2}};
 const make=()=>{const c=createCanvas();c.width=192;c.height=208;return c;};
 function poly(g,p,colour){g.fillStyle=colour;for(let y=Math.floor(Math.min(...p.map(a=>a[1]))/2)*2;y<Math.max(...p.map(a=>a[1]));y+=2){const xs=[];for(let i=0,j=p.length-1;i<p.length;j=i++){const a=p[j],b=p[i];if((a[1]>y+1)!==(b[1]>y+1))xs.push(a[0]+(y+1-a[1])*(b[0]-a[0])/(b[1]-a[1]));}xs.sort((a,b)=>a-b);for(let i=0;i+1<xs.length;i+=2)g.fillRect(Math.round(xs[i]/2)*2,y,Math.max(2,Math.round((xs[i+1]-xs[i])/2)*2),2);}}
 function sprite(id,o={}){id=id==='mona'?'mona':'mini';const moving=!!o.walking&&o.ambient!==false,pose=moving?'walk':o.job==='wave'?'wave':o.talk?'talk':'idle',opts={time:o.time||0,phase:o.phase,pose,walking:moving,ambient:o.ambient!==false,emotion:o.happy?1:0},q=player.select(opts),key=[id,q.kind,q.frame,o.happy?1:0,o.job==='tea'?1:0].join(':');if(cache.has(key))return cache.get(key);
 const src=player.sprite(looks[id],opts),c=make(),g=c.getContext('2d');g.imageSmoothingEnabled=false;g.drawImage(src,0,0);const walking=q.kind==='walk',dx=walking?2:0,dy=walking?-(q.frame%2)*2-4:0;
 // Plum clothing, with the approved face, hands and hair clusters untouched.
 const im=g.getImageData(0,0,192,208),d=im.data;for(let y=100;y<129;y++)for(let x=69;x<133;x++){const i=(y*192+x)*4,R=d[i],G=d[i+1],B=d[i+2];if(d[i+3]&&R<180&&R>G*1.1&&G>B*1.05){const ramp=['#362735','#52394c','#735366','#967285'],p=ramp[Math.max(0,Math.min(3,Math.floor((R-45)/35)))];d[i]=parseInt(p.slice(1,3),16);d[i+1]=parseInt(p.slice(3,5),16);d[i+2]=parseInt(p.slice(5,7),16);}}
 // Mona's silver streak belongs to the rear hair, away from face and eyes.
 if(id==='mona')for(let y=36+dy;y<67+dy;y++)for(let x=53+dx;x<86+dx;x++){const i=(y*192+x)*4;if(d[i+3]&&d[i]<120&&d[i+1]<110&&Math.abs(d[i]-d[i+1])<40&&x<80+dx-(y-45-dy)*.35){const v=(x+y)%8<4?180:137;d[i]=v;d[i+1]=v-4;d[i+2]=v-5;}}
 g.putImageData(im,0,0);
 if(id==='mona'){
 poly(g,[[71,123],[125,123],[129,138],[135,157],[137,173],[125,177],[69,177],[61,172],[65,150]],'#29292f');poly(g,[[77,128],[119,128],[125,153],[129,171],[115,173],[72,173],[69,168]],'#404048');poly(g,[[84,132],[92,132],[86,168],[77,170]],'#57545d');poly(g,[[111,134],[117,137],[124,169],[116,171]],'#34333c');
 poly(g,[[78,98],[98,106],[119,98],[135,110],[138,125],[130,131],[123,116],[112,113],[99,112],[84,116],[71,129],[60,123],[64,108]],'#4a344a');poly(g,[[67,109],[79,101],[95,108],[77,114],[68,124],[63,122]],'#78566d');poly(g,[[119,102],[131,112],[133,124],[128,120],[122,113],[108,110]],'#67465d');
 // Pale collar over the dark bodice; small button, no change to face proportions.
 poly(g,[[81,98],[98,104],[116,98],[121,106],[111,114],[99,109],[88,114],[78,108]],'#ded5bc');g.fillStyle='#f1e5c8';g.fillRect(84,100,8,4);g.fillRect(108,100,8,4);g.fillStyle='#4a3944';g.fillRect(98,112,4,4);
 }else{
 poly(g,[[77,98],[96,107],[120,97],[134,111],[120,116],[102,109],[76,116],[66,111]],'#3b2e3e');poly(g,[[80,99],[96,105],[104,108],[76,111],[70,110]],'#775269');poly(g,[[118,99],[130,109],[119,111],[108,108]],'#624256');g.fillStyle='#c29c5b';g.fillRect(97,108,6,6);g.fillStyle='#edcf81';g.fillRect(99,108,2,2);
 // Small expedition satchel at the hip, shoulder strap follows the torso.
 poly(g,[[112,115],[116,117],[79,151],[75,147]],'#9d764b');poly(g,[[58,145],[74,143],[81,149],[79,164],[61,167],[55,160]],'#45372e');poly(g,[[59,149],[75,147],[77,159],[62,163],[59,160]],'#85613f');g.fillStyle='#b18b57';g.fillRect(61,149,14,4);g.fillStyle='#dfba6d';g.fillRect(67,154,4,4);
 }
 // Floppy witch hat, stepped on the same two-source-pixel grid as Hannah.
 g.save();g.translate(dx,dy);poly(g,[[49,52],[59,43],[69,38],[73,28],[78,16],[88,8],[103,10],[117,20],[125,31],[128,43],[142,49],[147,56],[137,61],[119,57],[99,53],[76,59],[56,61],[47,58]],'#25232d');poly(g,[[69,43],[77,29],[81,19],[90,13],[101,15],[111,22],[120,39],[117,46],[99,47],[81,50]],'#3d3543');poly(g,[[80,26],[87,17],[97,17],[102,21],[92,21],[85,29]],'#5b4b59');poly(g,[[75,39],[94,38],[117,33],[123,42],[99,47],[72,49]],id==='mini'?'#79526b':'#6c5269');g.fillStyle='#b39a64';g.fillRect(106,39,8,6);g.fillStyle='#352a36';g.fillRect(108,41,4,2);poly(g,[[53,52],[76,49],[99,47],[126,48],[139,53],[125,54],[99,51],[77,55],[57,57]],'#524153');g.restore();
 // Cup stays attached to the existing right hand; hand pixels cover its handle.
 if(id==='mona'&&o.job==='tea'&&!moving){g.fillStyle='#51463d';g.fillRect(128,137,12,14);g.fillRect(140,139,6,8);g.fillStyle='#e5d9bd';g.fillRect(130,137,8,12);g.fillRect(140,141,4,4);g.fillStyle='#85694b';g.fillRect(130,137,8,2);g.fillStyle='#f2e5c9';g.fillRect(132,140,2,6);}
 if(cache.size>100)cache.clear();cache.set(key,c);return c;
 }
 function draw(g,id,x,y,o={}){const im=sprite(id,o),h=o.height||100,s=h/176;g.save();g.imageSmoothingEnabled=false;g.translate(Math.round(x),Math.round(y));if(o.mirror)g.scale(-1,1);g.drawImage(im,-96*s,-184*s,192*s,208*s);g.restore();}
 function portrait(g,id,o={}){g.clearRect(0,0,g.canvas.width,g.canvas.height);if(o.world)return draw(g,id,g.canvas.width/2,g.canvas.height-8,{...o,height:g.canvas.height-15});const im=sprite(id,{...o,walking:false,job:'',talk:!o.happy}),w=g.canvas.width,h=g.canvas.height;g.imageSmoothingEnabled=false;g.drawImage(im,44,4,108,108,0,(h-w)/2,w,w);}
 return {sprite,draw,portrait,looks,stats:()=>({style:'Hannah native pixel poses and faces',cached:cache.size})};
}
root.createWitches54=createWitches54;
})(typeof window!=='undefined'?window:globalThis);
