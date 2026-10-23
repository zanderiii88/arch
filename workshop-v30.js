/* Modular workshop furniture. Footprints are shared by routing and drawing. */
(function(root){'use strict';
const props=[
 {id:'bed-jamie',art:'bed',x:108,y:353,w:62,h:148,box:[78,258,138,355]},
 {id:'bed-ben',art:'bed',x:186,y:353,w:62,h:148,box:[156,258,216,355]},
 {id:'bench',art:'bench',x:348,y:396,w:172,h:108,box:[266,350,430,399]},
 {id:'chair-left',art:'chair',x:142,y:466,w:42,h:62,box:[126,443,158,469]},
 {id:'chair-right',art:'chair',x:204,y:466,w:42,h:62,box:[188,443,220,469]},
 {id:'chest',art:'chest',x:104,y:546,w:64,h:50,box:[74,521,134,548]},
 {id:'plant',art:'plant',x:424,y:548,w:38,h:64,box:[412,530,440,550]},
 {id:'shelf',art:'shelf',x:347,y:215,w:82,h:39,box:null}
];
function floor(x,y){if(x>=208&&x<=305&&y>=580&&y<=628)return true;if(x<74||x>440||y<228||y>584)return false;return !props.some(p=>p.box&&x>=p.box[0]-4&&x<=p.box[2]+4&&y>=p.box[1]-4&&y<=p.box[3]+4)}
const benchSpot={x:348,y:340},benchApproach={x:348,y:430},chatSpot={x:264,y:425},entry={x:256,y:575};
function behindBench(a){return a.space==='workshop20'&&Math.abs(a.x-benchSpot.x)<30&&a.y>=315&&a.y<=345}
root.Workshop30={props,floor,benchSpot,benchApproach,chatSpot,entry,behindBench};if(typeof module!=='undefined')module.exports=root.Workshop30;
})(typeof window!=='undefined'?window:globalThis);
