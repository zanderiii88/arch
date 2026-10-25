/* Original reference-led pixel sprites, shared by scenes, catches and collection icons. */
(function(root){'use strict';
const ids=['mackerel','herring','pollock','seabass','plaice','flounder','wrasse','goby','mullet','gurnard','saithe','crab','prawn','hermit','octopus'];
const rects=Object.fromEntries(ids.map((id,i)=>[id,[i%4*96,Math.floor(i/4)*80,96,80]]));
function create({image,createCanvas}){const tiles=new Map();function tile(id){if(!rects[id])return null;if(tiles.has(id))return tiles.get(id);const c=createCanvas();c.width=96;c.height=80;const g=c.getContext('2d');g.imageSmoothingEnabled=false;g.drawImage(image,...rects[id],0,0,96,80);tiles.set(id,c);return c;}
function draw(g,id,x,y,{size=56,time=0,moving=false,ambient=true}={}){const c=tile(id);if(!c)return false;g.save();g.imageSmoothingEnabled=false;g.translate(Math.round(x),Math.round(y));const isFish=ids.indexOf(id)<11;if(ambient&&moving&&isFish)g.rotate(Math.sin(time*6)*.035);const z=size/76;g.scale(z,z);g.drawImage(c,-48,-40);g.restore();return true;}
function icon(id,silhouette=false){if(!rects[id])return '';const[x,y,w,h]=rects[id];return `<svg class="creature-art48 ${silhouette?'silhouette48':''}" viewBox="${x} ${y} ${w} ${h}" role="img" aria-label="${silhouette?'Undiscovered creature':id}" shape-rendering="crispEdges"><svg x="${x}" y="${y}" width="${w}" height="${h}" viewBox="${x} ${y} ${w} ${h}" overflow="hidden"><image href="assets/creatures-v52.png" width="384" height="320"/></svg></svg>`;}
return {draw,icon,tile};}
root.Creatures52={ids,rects,create};
})(typeof window!=='undefined'?window:globalThis);
