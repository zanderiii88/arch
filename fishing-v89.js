/* Shared, deterministic fishing rules. No art, stock mutation or saved catches here. */
(function(root){'use strict';
const profiles={
 goby:{rod:0,bait:'any',label:'Relaxed',calm:2.7,warning:0.95,surge:1.2,strength:0.65,gain:1.2},
 herring:{rod:0,bait:'any',label:'Relaxed',calm:2.4,warning:1,surge:1.35,strength:0.8,gain:1.12},
 mackerel:{rod:0,bait:'any',label:'Relaxed',calm:2.15,warning:1,surge:1.55,strength:1,gain:1.07},
 flounder:{rod:0,bait:'any',label:'Relaxed',calm:2.5,warning:1,surge:1.4,strength:0.9,gain:1.1},
 pollock:{rod:0,bait:'any',label:'Steady',calm:1.95,warning:1.05,surge:1.75,strength:1.25,gain:1.02},
 gurnard:{rod:0,bait:'any',label:'Steady',calm:1.85,warning:1.05,surge:1.65,strength:1.3,gain:1.02},
 plaice:{rod:0,bait:'bait',label:'Steady',calm:2.2,warning:1.05,surge:1.55,strength:1.1,gain:1.08},
 wrasse:{rod:1,bait:'bait',label:'Lively',calm:1.9,warning:1.05,surge:1.7,strength:1.3,gain:1.04},
 mullet:{rod:1,bait:'bread',label:'Lively',calm:1.7,warning:1.05,surge:1.5,strength:1.2,gain:1.08},
 saithe:{rod:1,bait:'bait',label:'Strong',calm:1.7,warning:1.1,surge:1.85,strength:1.55,gain:1},
 seabass:{rod:2,bait:'bait',label:'Strong',calm:1.65,warning:1.1,surge:2,strength:1.8,gain:1}
};
const baits={none:'Bare hook',bait:'Coastal bait',bread:'Bread'};
function eligible(id,{rod=0,bait='none'}={}){const p=profiles[id];return !!p&&rod>=p.rod&&(p.bait==='any'||p.bait===bait);}
function roster(habitats,island,kit={}){return(habitats[island]||habitats.home).filter(([id])=>eligible(id,kit));}
function choose(habitats,island,kit={},rng=Math.random){const list=roster(habitats,island,kit);if(!list.length)return null;const weighted=list.map(([id,w])=>[id,w*(profiles[id].bait===kit.bait?1.6:1)]);let n=Math.max(0,Math.min(.999999,rng()))*weighted.reduce((s,x)=>s+x[1],0);for(const[id,w]of weighted){n-=w;if(n<0)return id;}return weighted[weighted.length-1][0];}
function fresh(id,rng=Math.random){const p=profiles[id]||profiles.mackerel;return{phase:'calm',left:p.calm+rng()*.25,strain:0,age:0,slack:0};}
function step(s,dt,{id='mackerel',held=false,rod=0,rods,gift=false,line=false,progress=0,tension=18},rng=Math.random){
 dt=Math.min(.1,Math.max(0,Number.isFinite(dt)?dt:0));const p=profiles[id]||profiles.mackerel,r=rods[rod]||rods[0];s.age+=dt;s.left-=dt;
 if(s.left<=0){s.phase=s.phase==='calm'?'warning':s.phase==='warning'?'surge':'calm';s.left=p[s.phase]+(s.phase==='warning'?0:rng()*.25);}
 const surge=s.phase==='surge',warning=s.phase==='warning',force=(surge?74:warning?18:9)*p.strength*r.strain*(line?.88:1);
 if(held){progress=Math.min(100,progress+dt*r.gain*(gift?1.25:p.gain)*(surge?(gift?.65:.15):warning?.6:1));tension=Math.min(gift?76:100,tension+dt*force*(gift?.45:1));}
 else{tension=Math.max(5,tension-dt*r.recover*(surge?.7:1));progress=Math.max(0,progress-dt*(gift?.2:surge?1.8:.65));}
 s.slack=held?Math.max(0,(s.slack||0)-dt*3):(s.slack||0)+dt;const slackLimit=gift?7.5:(p.label==='Relaxed'?5.5:p.label==='Steady'?5:4.5)+rod*.4;
 s.strain=!gift&&held&&tension>=98?s.strain+dt:Math.max(0,s.strain-dt*2);
 const slackLost=s.slack>=slackLimit,strainLost=s.strain>=.55;
 return{progress,tension,phase:s.phase,slack:s.slack,slackLimit,slackWarning:s.slack>=slackLimit-2,lost:slackLost||strainLost,reason:slackLost?'slack':strainLost?'strain':null};
}
root.Fishing66={profiles,baits,eligible,roster,choose,fresh,step};if(typeof module!=='undefined')module.exports=root.Fishing66;
})(typeof window!=='undefined'?window:globalThis);
