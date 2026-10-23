/* Pure recipe matching: no inventory mutation or UI dependency. */
(function(root){'use strict';
const recipes=[
 {id:'mackerel',name:'Pan-fried mackerel',output:'panMackerel',cost:{'fish:mackerel':1,oil:1}},
 {id:'egg',name:'Fried egg',output:'friedEgg',cost:{egg:1,oil:1}},
 {id:'soup',name:'Vegetable soup',output:'vegSoup',cost:{carrot:1,potato:1,water:1}}
];
const pantryKeys=['oil','salt','pepper','carrot','potato','bread','food'];
function count(n){return Number.isSafeInteger(n)&&n>=0&&n<=100000?n:0;}
function match(items,known=recipes.map(r=>r.id)){
 const counts={};for(const e of items)counts[e.key]=(counts[e.key]||0)+1;
 for(const k of ['salt','pepper']){if((counts[k]||0)>1)return null;delete counts[k];}
 return recipes.find(r=>known.includes(r.id)&&Object.keys(counts).length===Object.keys(r.cost).length&&Object.entries(r.cost).every(([k,n])=>counts[k]===n))||null;
}
const api={recipes,pantryKeys,count,match};root.Kitchen38=api;if(typeof module!=='undefined')module.exports=api;
})(typeof window!=='undefined'?window:globalThis);
