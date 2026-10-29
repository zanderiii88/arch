/* Shared, deterministic fishing rules. No art, stock mutation or saved catches here. */
(function(root){'use strict';
const profiles={
 goby:{rod:0,bait:'any',label:'Relaxed',calm:4.2,warning:1.2,surge:.55,strength:.42,gain:1.45},
 herring:{rod:0,bait:'any',label:'Relaxed',calm:3.8,warning:1.2,surge:.7,strength:.58,gain:1.24},
 mackerel:{rod:0,bait:'any',label:'Relaxed',calm:3.4,warning:1.1,surge:.8,strength:.72,gain:1.12},
 flounder:{rod:0,bait:'any',label:'Relaxed',calm:3.6,warning:1.2,surge:.85,strength:.68,gain:1.05},
 pollock:{rod:0,bait:'any',label:'Steady',calm:2.6,warning:1.1,surge:1.35,strength:1,gain:.95},
 gurnard:{rod:0,bait:'any',label:'Steady',calm:2.4,warning:1.2,surge:1.2,strength:1.08,gain:.9},
 plaice:{rod:0,bait:'bait',label:'Steady',calm:3,warning:1.1,surge:1.1,strength:.92,gain:1},
 wrasse:{rod:1,bait:'bait',label:'Lively',calm:2,warning:1.05,surge:1.25,strength:1.2,gain:.86},
 mullet:{rod:1,bait:'bread',label:'Lively',calm:1.6,warning:1.15,surge:.95,strength:1.08,gain:.88},
 saithe:{rod:1,bait:'bait',label:'Strong',calm:1.75,warning:1.1,surge:1.6,strength:1.42,gain:.82},
 seabass:{rod:2,bait:'bait',label:'Strong',calm:1.55,warning:1.1,surge:1.85,strength:1.7,gain:.8}
};
const baits={none:'Bare hook',bait:'Coastal bait',bread:'Bread'};
function eligible(id,{rod=0,bait='none'}={}){const p=profiles[id];return !!p&&rod>=p.rod&&(p.bait==='any'||p.bait===bait);}
function roster(habitats,island,kit={}){return(habitats[island]||habitats.home).filter(([id])=>eligible(id,kit));}
function choose(habitats,island,kit={},rng=Math.random){const list=roster(habitats,island,kit);if(!list.length)return null;const weighted=list.map(([id,w])=>[id,w*(profiles[id].bait===kit.bait?1.6:1)]);let n=Math.max(0,Math.min(.999999,rng()))*weighted.reduce((s,x)=>s+x[1],0);for(const[id,w]of weighted){n-=w;if(n<0)return id;}return weighted[weighted.length-1][0];}
function fresh(id,rng=Math.random){const p=profiles[id]||profiles.mackerel;return{phase:'calm',left:p.calm+rng()*.25,strain:0,age:0,slack:0};}
function step(s,dt,{id='mackerel',held=false,rod=0,rods,gift=false,line=false,progress=0,tension=18},rng=Math.random){dt=Math.min(.1,Math.max(0,Number.isFinite(dt)?dt:0));const p=profiles[id]||profiles.mackerel,r=rods[rod]||rods[0];s.age+=dt;s.left-=dt;if(s.left<=0){s.phase=s.phase==='calm'?'warning':s.phase==='warning'?'surge':'calm';s.left=p[s.phase]+(s.phase==='warning'?0:rng()*.25);}
 const force=(s.phase==='surge'?44:s.phase==='warning'?10:5)*p.strength*r.strain*(line?.9:1);
 if(held){progress=Math.min(100,progress+dt*r.gain*(gift?1.25:p.gain)*(s.phase==='surge'&&!gift?.55:1));tension=Math.min(gift?72:100,tension+dt*force*(gift?.45:1));}else{tension=Math.max(5,tension-dt*r.recover);progress=Math.max(0,progress-dt*(gift?.1:.35));}
 s.slack=gift?0:held?Math.max(0,(s.slack||0)-dt*2):(s.slack||0)+dt;const slackLimit=(p.label==='Relaxed'?11:p.label==='Steady'?9:8)+rod*.8;
 s.strain=!gift&&held&&tension>=99?s.strain+dt:Math.max(0,s.strain-dt*2);return{progress,tension,phase:s.phase,slack:s.slack,slackLimit,slackWarning:s.slack>=slackLimit-3,lost:s.strain>=.85||s.slack>=slackLimit,reason:s.slack>=slackLimit?'slack':'strain'};}
root.Fishing66={profiles,baits,eligible,roster,choose,fresh,step};if(typeof module!=='undefined')module.exports=root.Fishing66;
})(typeof window!=='undefined'?window:globalThis);
