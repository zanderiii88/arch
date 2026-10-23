/* Saved timber batches and deliberate alternating saw strokes. No wall-clock timers. */
(function(root){'use strict';const n=(v,max=1e6)=>Number.isSafeInteger(v)&&v>=0?Math.min(v,max):0;
function fresh(){return {version:1,guide:false,donated:0,boards:0,credit:0,progress:0,made:0,serial:0,orders:[],trees:[{day:-3,hits:0},{day:-3,hits:0},{day:-3,hits:0}],recognised:false,introduced:false,legacyCredit:false};}
function load(d){const s=fresh();if(d?.version!==1)return s;for(const k of ['guide','recognised','introduced','legacyCredit'])s[k]=d[k]===true;for(const k of ['boards','made','serial'])s[k]=n(d[k]);s.donated=n(d.donated,10);s.credit=n(d.credit,2);s.progress=s.credit?Math.min(99,Math.max(0,Number(d.progress)||0)):0;
s.trees=s.trees.map((t,i)=>({day:Number.isSafeInteger(d.trees?.[i]?.day)?Math.max(-3,d.trees[i].day):-3,hits:n(d.trees?.[i]?.hits,4)}));const ids=new Set();s.orders=(Array.isArray(d.orders)?d.orders:[]).filter(o=>o&&Number.isSafeInteger(o.id)&&o.id>0&&!ids.has(o.id)&&(ids.add(o.id),true)&&n(o.count,999)>0&&Number.isSafeInteger(o.due)&&o.due>=0).slice(-500).map(o=>({id:o.id,count:n(o.count,999),due:o.due,claimed:o.claimed===true,read:o.read===true}));s.serial=Math.max(s.serial,...s.orders.map(o=>o.id));return s;}
function contact(y){return {last:y,dir:0,distance:0,used:false};}
function stroke(p,y){if(!p||!Number.isFinite(y))return false;const dy=Math.max(-120,Math.min(120,y-p.last));if(Math.abs(dy)<3)return false;p.last=y;const dir=Math.sign(dy);if(dir!==p.dir){p.dir=dir;p.distance=0;p.used=false;}p.distance+=Math.abs(dy);if(p.distance<60||p.used)return false;p.used=true;return true;}
function board(s){if(!s.credit)return false;s.progress+=10;if(s.progress<100)return false;s.progress=0;s.credit--;s.boards++;s.made++;return true;}
function order(s,count,day){if(!Number.isSafeInteger(count)||count<1||count>s.boards||s.donated<10||s.orders.length>=500)return null;s.boards-=count;const o={id:++s.serial,count,due:day+2,claimed:false,read:false};s.orders.push(o);return o;}
root.Timber43={fresh,load,contact,stroke,board,order,price:2};if(typeof module!=='undefined')module.exports=root.Timber43;
})(typeof window!=='undefined'?window:globalThis);
