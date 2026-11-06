/* Native-grid coastal golf. Standalone, session-only model; no storage or game globals. */
(function(root){
'use strict';
const holes=[
 {name:'A little sea air',par:2,tee:[120,262],cup:[120,62],sand:[[67,151,26,16]],rocks:[],water:[]},
 {name:'Around the stones',par:3,tee:[69,262],cup:[174,58],sand:[[171,180,24,32]],rocks:[[120,164,17]],water:[]},
 {name:'The sandy elbow',par:3,tee:[54,253],cup:[182,63],sand:[[116,159,59,23]],rocks:[[58,113,15]],water:[]},
 {name:'Across the brook',par:3,tee:[65,265],cup:[171,58],sand:[[179,99,23,16]],rocks:[],water:[[91,167,71,14]]},
 {name:'Sheltered green',par:3,tee:[178,258],cup:[61,58],sand:[[119,99,28,20],[65,178,24,26]],rocks:[[122,180,14],[157,121,12]],water:[]},
 {name:'Two small pools',par:4,tee:[55,268],cup:[185,53],sand:[[186,161,18,25]],rocks:[[61,105,12]],water:[[82,205,24,19],[143,120,27,21]]},
 {name:'Pebble bend',par:4,tee:[177,265],cup:[63,53],sand:[[68,137,23,32],[171,80,24,16]],rocks:[[124,216,16],[128,153,15],[122,85,15]],water:[]},
 {name:'Along the inlet',par:4,tee:[53,265],cup:[186,57],sand:[[69,110,21,29]],rocks:[[172,211,14]],water:[[139,159,74,21]]},
 {name:'Homeward putt',par:4,tee:[56,267],cup:[181,49],sand:[[73,185,29,20],[174,97,24,16]],rocks:[[125,237,13],[116,101,13]],water:[[136,153,32,19]]}
];
const ellipse=(x,y,e,pad=0)=>((x-e[0])/(e[2]+pad))**2+((y-e[1])/(e[3]+pad))**2<=1;
function shore(y){return 99*Math.pow(Math.max(0,1-Math.pow((y-155)/137,4)),.25)+Math.sin(y*.055)*2;}
function land(x,y){return y>=19&&y<=290&&Math.abs(x-120)<=shore(y);}
function terrain(h,x,y){if(!land(x,y)||h.water.some(e=>ellipse(x,y,e)))return 'water';return h.sand.some(e=>ellipse(x,y,e))?'sand':'grass';}
function create(index=0){const h=holes[index];return {index,x:h.tee[0],y:h.tee[1],vx:0,vy:0,strokes:0,done:false,moving:false,last:[...h.tee],message:'Drag back from the ball, then release.',age:0};}
function shoot(s,dx,dy){const d=Math.hypot(dx,dy);if(s.moving||s.done||d<4||!Number.isFinite(d))return false;const p=Math.min(d,76)/76;s.vx=dx/d*p*220;s.vy=dy/d*p*220;s.strokes++;s.moving=true;s.last=[s.x,s.y];s.message='';return true;}
function step(s,dt){if(!s.moving||s.done)return;const h=holes[s.index];for(let t=0;t<dt;){const d=Math.min(1/240,dt-t);t+=d;let x=s.x+s.vx*d,y=s.y+s.vy*d;
 if(terrain(h,x,y)==='water'){s.x=s.last[0];s.y=s.last[1];s.vx=s.vy=0;s.moving=false;s.strokes++;s.message='Splash! Back to your last lie. +1 stroke.';return;}
 for(const r of h.rocks){let nx=x-r[0],ny=y-r[1],dist=Math.hypot(nx,ny),rad=r[2]+3;if(dist<rad){if(dist<.01){nx=1;ny=0;dist=1;}nx/=dist;ny/=dist;const dot=s.vx*nx+s.vy*ny;if(dot<0){s.vx-=1.65*dot*nx;s.vy-=1.65*dot*ny;}x=r[0]+nx*(rad+.1);y=r[1]+ny*(rad+.1);}}
 s.x=x;s.y=y;const speed=Math.hypot(s.vx,s.vy),cupD=Math.hypot(x-h.cup[0],y-h.cup[1]);if(cupD<5&&speed<100){s.x=h.cup[0];s.y=h.cup[1];s.vx=s.vy=0;s.moving=false;s.done=true;s.message=s.strokes===1?'A hole in one!':s.strokes<=h.par?'Lovely putt!':'In the cup. Nicely done.';return;}
 const drag=terrain(h,x,y)==='sand'?130:55,next=Math.max(0,speed-drag*d);s.vx*=speed?next/speed:0;s.vy*=speed?next/speed:0;if(next<2){s.vx=s.vy=0;s.moving=false;s.message=terrain(h,x,y)==='sand'?'Soft sand slows the ball.':'Drag back for your next shot.';return;}
 }}
function blob(g,x,y,rx,ry,c){g.fillStyle=c;for(let yy=-Math.floor(ry);yy<=ry;yy+=2){let w=Math.floor(rx*Math.sqrt(Math.max(0,1-(yy/ry)**2))/2)*2;g.fillRect(Math.round(x-w),Math.round(y+yy),w*2,2);}}
function draw(g,s,aim,decor){const h=holes[s.index];g.imageSmoothingEnabled=false;g.fillStyle='#177e9b';g.fillRect(0,0,240,304);
 for(let i=0;i<26;i++){let x=(i*79+13)%240,y=(i*47+7)%304;g.fillStyle=i%2?'#3faab5':'#238eaa';g.fillRect(x,y,10,2);g.fillRect(x+3,y-2,4,2);}
 for(const [pad,col] of [[11,'#409eae'],[7,'#b9e3d6'],[4,'#e7c886'],[0,'#739b48']]){g.fillStyle=col;for(let y=20-pad;y<291+pad;y+=2){const yy=Math.max(19,Math.min(290,y)),edge=Math.floor((shore(yy)+pad)/2)*2;g.fillRect(120-edge,y,edge*2,2);}}
 // Restrained native clusters rather than noise textures.
 for(let i=0;i<70;i++){let x=26+(i*61)%188,y=28+(i*43)%251;if(!land(x,y))continue;g.fillStyle=i%3?'#83aa54':'#628b42';g.fillRect(x,y,4,2);if(i%3===0)g.fillRect(x+2,y-2,2,2);}
 // A broad, gently curving mown lane ties tee and green together.
 for(let t=0;t<=1;t+=.025){blob(g,h.tee[0]+(h.cup[0]-h.tee[0])*t+Math.sin(t*Math.PI)*12,h.tee[1]+(h.cup[1]-h.tee[1])*t,24,16,'#91b65c');}
 blob(g,h.cup[0],h.cup[1],24,20,'#a8c876');blob(g,h.cup[0]-2,h.cup[1]-2,19,16,'#b0cf7c');
 for(const e of h.sand){blob(g,e[0],e[1]+2,e[2]+2,e[3]+2,'#647e3f');blob(g,...e,'#c9a66a');blob(g,e[0],e[1]-2,e[2]-2,e[3]-2,'#efcf8d');g.fillStyle='#d9b779';g.fillRect(e[0]-7,e[1]+3,10,2);g.fillRect(e[0]+3,e[1]-4,6,2);}
 for(const e of h.water){blob(g,e[0],e[1],e[2]+3,e[3]+3,'#537d48');blob(g,...e,'#72b7b0');blob(g,e[0],e[1],e[2]-3,e[3]-3,'#287f95');g.fillStyle='#8bcac0';g.fillRect(e[0]-9,e[1]-4,12,2);g.fillRect(e[0]+4,e[1]+5,8,2);}
 for(const r of h.rocks){blob(g,r[0]+2,r[1]+5,r[2]+2,r[2]*.7,'#597941');if(decor)decor(g,r);else{blob(g,r[0],r[1],r[2],r[2]*.8,'#746c63');blob(g,r[0]-3,r[1]-4,r[2]*.7,r[2]*.5,'#aaa18b');}}
 // Rounded coastal shrubs, with connected stepped leaves in three shades.
 for(const [x,y] of [[17,56],[222,86],[18,231],[219,259]]){blob(g,x,y+4,10,6,'#576d3c');blob(g,x,y,10,9,'#335f44');blob(g,x-3,y-3,7,6,'#50824a');blob(g,x-5,y-5,4,3,'#83a455');}
 g.fillStyle='#526941';g.fillRect(h.tee[0]-8,h.tee[1]+4,16,2);g.fillStyle='#f2dfaa';g.fillRect(h.tee[0]-9,h.tee[1]+2,3,3);g.fillRect(h.tee[0]+7,h.tee[1]+2,3,3);
 blob(g,h.cup[0],h.cup[1]+1,5,3,'#4f633c');blob(g,h.cup[0],h.cup[1],3,2,'#273c36');g.fillStyle='#eee0b6';g.fillRect(h.cup[0]+1,h.cup[1]-21,2,21);g.fillStyle='#aa6244';g.fillRect(h.cup[0]+3,h.cup[1]-21,11,4);g.fillRect(h.cup[0]+3,h.cup[1]-17,7,3);
 if(aim){const dx=s.x-aim.x,dy=s.y-aim.y,d=Math.hypot(dx,dy),n=Math.min(d,76);if(d>0){for(let i=8;i<n;i+=7){blob(g,s.x+dx/d*i,s.y+dy/d*i,1,1,'#fff0bd');}g.strokeStyle='#f5d282';g.lineWidth=1;g.beginPath();g.moveTo(Math.round(s.x),Math.round(s.y));g.lineTo(Math.round(aim.x),Math.round(aim.y));g.stroke();}}
 if(!s.done){blob(g,s.x+1,s.y+3,3,2,'#617547');g.fillStyle='#e4d9b1';g.fillRect(Math.round(s.x-2),Math.round(s.y-2),5,4);g.fillStyle='#fff9e1';g.fillRect(Math.round(s.x-2),Math.round(s.y-2),3,2);}
}
function mount({canvas,status,stats,power,next,score,decor,sound=()=>{}}){let s=create(),aim=null,id=null,alive=true,previous=0,scores=[],pending=null,angle=-Math.PI/2,keyPower=35;
const g=canvas.getContext('2d');function text(){stats.textContent=`Hole ${s.index+1}/9 · Par ${holes[s.index].par} · Shots ${s.strokes}`;status.textContent=s.message||'Rolling…';next.hidden=!s.done;next.textContent=s.index===8?'View scorecard':'Next hole';canvas.setAttribute('aria-label',holes[s.index].name+'. Drag back from the ball to putt. Keyboard: arrows aim, plus or minus power, Enter hits.');}
function cancel(){aim=null;pending=null;id=null;power.value=0;}
function pos(e){const b=canvas.getBoundingClientRect();const scale=Math.min(b.width/240,b.height/304);return{x:(e.clientX-b.left-(b.width-240*scale)/2)/scale,y:(e.clientY-b.top-(b.height-304*scale)/2)/scale};}
function down(e){if(!alive||s.moving||s.done||id!==null||e.isPrimary===false||e.button>0)return;const p=pos(e);if(Math.hypot(p.x-s.x,p.y-s.y)>24){s.message='Start your drag on the ball.';text();return;}e.preventDefault();id=e.pointerId;aim={x:s.x,y:s.y};canvas.setPointerCapture(id);}
function move(e){if(e.pointerId!==id||!aim)return;e.preventDefault();aim=pos(e);power.value=Math.min(100,Math.round(Math.hypot(s.x-aim.x,s.y-aim.y)/76*100));}
function up(e){if(e.pointerId!==id||!aim)return;move(e);pending={dx:s.x-aim.x,dy:s.y-aim.y};aim=null;id=null;power.value=0;}
function key(e){if(!alive||s.moving||s.done)return;let handled=true;if(e.key==='ArrowLeft')angle-=.12;else if(e.key==='ArrowRight')angle+=.12;else if(['ArrowUp','+','='].includes(e.key))keyPower=Math.min(76,keyPower+4);else if(['ArrowDown','-'].includes(e.key))keyPower=Math.max(4,keyPower-4);else if(e.key==='Enter'||e.key===' '){pending={dx:Math.cos(angle)*keyPower,dy:Math.sin(angle)*keyPower};aim=null;}else handled=false;if(handled){e.preventDefault();if(!pending)aim={x:s.x-Math.cos(angle)*keyPower,y:s.y-Math.sin(angle)*keyPower};power.value=Math.round(keyPower/76*100);}}
function tick(now){if(!alive)return;const dt=previous?Math.min((now-previous)/1000,.05):0;previous=now;if(document.hidden){cancel();previous=0;}else{if(pending){if(shoot(s,pending.dx,pending.dy))sound('hit');pending=null;text();}const was=s.done,moving=s.moving;step(s,dt);if(!was&&s.done){scores[s.index]=s.strokes;sound('cup');}if(moving&&!s.moving)text();draw(g,s,aim,decor);}requestAnimationFrame(tick);}
function advance(){if(!s.done)return;if(s.index===8){score(scores.slice());return;}s=create(s.index+1);cancel();text();canvas.focus();}
const handlers={pointerdown:down,pointermove:move,pointerup:up,pointercancel:cancel,lostpointercapture:()=>{if(aim)cancel();},keydown:key};for(const [k,f]of Object.entries(handlers))canvas.addEventListener(k,f);next.onclick=advance;const visibility=()=>{cancel();previous=0;};document.addEventListener('visibilitychange',visibility);text();draw(g,s,aim,decor);requestAnimationFrame(tick);
return {stop(){alive=false;cancel();for(const[k,f]of Object.entries(handlers))canvas.removeEventListener(k,f);document.removeEventListener('visibilitychange',visibility);},state:()=>s};}
root.Golf86={holes,create,shoot,step,terrain,land,draw,mount};
})(typeof window!=='undefined'?window:globalThis);
