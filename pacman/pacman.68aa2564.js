var t,e,n=((t={}).Left="left",t.Up="up",t.Right="right",t.Down="down",t),o=((e={}).Blinky="Blinky",e.Pinky="Pinky",e.Inky="Inky",e.Clyde="Clyde",e);const i=`
  ############################  
  #............##............#  
  #.####.#####.##.#####.####.#  
  #o####.#####.##.#####.####o#  
  #.####.#####.##.#####.####.#  
  #..........................#  
  #.####.##.########.##.####.#  
  #.####.##.########.##.####.#  
  #......##....##....##......#  
  ######.##### ## #####.######  
       #.##### ## #####.#       
       #.##          ##.#       
       #.## ######## ##.#       
########.## #      # ##.########
        .   #      #   .        
########.## #      # ##.########
       #.## ######## ##.#       
       #.##          ##.#       
       #.## ######## ##.#       
  ######.## ######## ##.######  
  #............##............#  
  #.####.#####.##.#####.####.#  
  #.####.#####.##.#####.####.#  
  #o..##.......  .......##..o#  
  ###.##.##.########.##.##.###  
  ###.##.##.########.##.##.###  
  #......##....##....##......#  
  #.##########.##.##########.#  
  #.##########.##.##########.#  
  #..........................#  
  ############################  `.split("\n");i.shift();const r=document.getElementById("gameCanvas"),l=r.getContext("2d"),a=4*window.devicePixelRatio;r.setAttribute("width",(240*a).toString()),r.setAttribute("height",(288*a).toString()),l.scale(a,a),l.textAlign="center",l.textBaseline="middle",l.imageSmoothingEnabled=!1;const c=t=>t===n.Left||t===n.Right;function s(t){return{x:0+8*t.x+4,y:24+8*t.y+4}}function y(t){return{x:Math.floor((t.x-0)/8),y:Math.floor((t.y-0-24)/8)}}function u(t,e){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function d(t){return!!i[t.y]&&!!i[t.y][t.x]&&"#"!==i[t.y][t.x]}function f(t,e){let o=t.x,i=t.y;return e===n.Down?i++:e===n.Up?i--:e===n.Left?o--:e===n.Right&&o++,{x:o,y:i}}function h(t,e,o){let i={x:t.x,y:t.y};return o===n.Right&&(i.x+=e),o===n.Left&&(i.x-=e),o===n.Down&&(i.y+=e),o===n.Up&&(i.y-=e),i}function x(t,e){let o={x:0,y:0},i={x:0,y:0};return t===n.Left&&0===e.x&&14===e.y?{pos:{x:252,y:140},cell:{x:31,y:14}}:t===n.Right&&31===e.x&&14===e.y?{pos:{x:0,y:140},cell:{x:0,y:14}}:null}l.font="4px monospace";const g="#ffb897",p=document.images[0],m=document.createElement("canvas");m.style.setProperty("image-rendering","pixelated");const w=m.getContext("2d");w.imageSmoothingEnabled=!1,w.drawImage(p,0,0);const D=w.getImageData(0,0,p.width,p.height),k=D.data;for(let t=0;t<k.length;t+=4)k[t]+k[t+1]+k[t+2]===0&&(k[t+3]=0);w.putImageData(D,0,0),document.querySelector("#debug");const M=document.querySelector("#score"),R=s({x:15,y:23});R.x+=3;let C=n.Right,L=null,b=!1,I=null,S=0,U=0,A=-10,E=0,v=0,P=0,q=0,B=!1;const F=[{name:o.Blinky,pos:{x:120,y:116},direction:n.Left,lastChangedDirection:0},{name:o.Inky,pos:{x:136,y:116},direction:n.Right,lastChangedDirection:0},{name:o.Pinky,pos:{x:120,y:164},direction:n.Left,lastChangedDirection:0},{name:o.Clyde,pos:{x:136,y:164},direction:n.Right,lastChangedDirection:0}];function j(t){if(b)return;null===I&&(I=t);let e=60*(t-I)/1e3;I=t;let o=function(t,e){for(let n of t)if(1>=u(n.pos,e))return!0;return!1}(F,R);o?t-P>150&&(P=t,++A>10&&(b=!0)):(function(t){let e={x:R.x,y:R.y};e=h(e,t,C);let n=y(R);if(B){let o=s(n),i=R.x-o.x,r=R.y-o.y;c(C)?(r<-.3&&(e.y+=t),r>.3&&(e.y-=t),r>=-.3&&r<=.3&&(e.y=Math.round(e.y),B=!1)):(i<-.3&&(e.x+=t),i>.3&&(e.x-=t),i>=-.3&&i<=.3&&(e.x=Math.round(e.x),B=!1))}L&&d(f(n,L))&&((c(C)&&!c(L)||!c(C)&&c(L))&&(B=!0),C=L,L=null);let o=y(e),r=x(C,o);null!==r&&(e=r.pos,o=r.cell);let l=f(o,C),a=!0,g=d(l),p=u(e,s(l));if(!g&&p<=8&&(a=!1),a){R.x=e.x,R.y=e.y;let t=!1;if(i[o.y]&&"."===i[o.y][o.x]?(q+=10,t=!0):i[o.y]&&"o"===i[o.y][o.x]&&(q+=50,t=!0),t){M.textContent=q.toString();let t=i[o.y];i[o.y]=t.substring(0,o.x)+" "+t.substring(o.x+1)}}else c(C)?R.x=Math.round(R.x):R.y=Math.round(R.y);return a}(e)&&t-E>70&&(E=t,++S>2&&(S=0)),function(t,e){for(let o of F){0===o.lastChangedDirection&&(o.lastChangedDirection=e);if(e-o.lastChangedDirection>66.66666666666667){let t=y(o.pos),i=x(o.direction,t);if(null!==i)o.pos=i.pos;else{let i=s(t);if(.3>=u(o.pos,i)){let{isIntersection:t,allowedDirections:i}=function(t){let e=y(t.pos),o=[],i=!1,r=[n.Up,n.Down,n.Left,n.Right],l=t.direction;for(let t of r)(t!==n.Left||l!==n.Right)&&(t!==n.Right||l!==n.Left)&&(t!==n.Up||l!==n.Down)&&(t!==n.Down||l!==n.Up)&&d(f(e,t))&&(c(t)&&!c(l)&&(i=!0),!c(t)&&c(l)&&(i=!0),o.push(t));return{isIntersection:i,allowedDirections:o}}(o);t&&(o.direction=i[Math.floor(Math.random()*i.length)+0],o.lastChangedDirection=e,c(o.direction)?o.pos.y=Math.round(o.pos.y):o.pos.x=Math.round(o.pos.x))}}}o.pos=h(o.pos,t,o.direction)}}(e,t),t-v>300&&(v=t,++U>1&&(U=0))),z(o),requestAnimationFrame(j)}function z(t){l.clearRect(0,0,240,288),l.fillStyle=g,l.strokeStyle=g,l.beginPath(),i.forEach((t,e)=>{t.split("").forEach((t,n)=>{var o,i;l.fillStyle=g;let r=0+8*n+4,a=24+8*e+4;"."===t&&l.rect(r-1,a-1,2,2),"o"===t&&(o=r-4,i=a-4,l.rect(o+2,i,4,8),l.rect(o+1,i+1,6,6),l.rect(o,i+2,8,4))})}),l.fill();if(t&&A>=0)!function(t,e){if(e<0)return;let n=Math.round(t.x-7.5),o=Math.round(t.y-7.5);l.drawImage(m,48+16*e,1,15,15,n,o,15,15)}(R,A);else{let t,i;var e,r=C,a=S;0===a?(t=33,i=1):(t=1===a?1:17,i=r===n.Right?1:r===n.Left?17:r===n.Up?33:49);let c=Math.round(R.x-6.5),s=Math.round(R.y-6.5);l.drawImage(m,t,i,13,13,c,s,13,13),e=U,F.forEach(t=>(function(t,e,i,r){let a=1,c=65;i===n.Left&&(a+=32),i===n.Up&&(a+=64),i===n.Down&&(a+=96),1===r&&(a+=16),t===o.Pinky&&(c+=16),t===o.Inky&&(c+=32),t===o.Clyde&&(c+=48);let s=Math.round(e.x-7),y=Math.round(e.y-7);l.drawImage(m,a,c,14,14,s,y,14,14)})(t.name,t.pos,t.direction,e))}l.fillStyle="black",l.fillRect(0,0,16,288)}document.addEventListener("keydown",t=>{switch(t.key){case"`":case" ":(b=!b)||(I=null,requestAnimationFrame(j));break;case"w":case"ArrowUp":if(C===n.Up)return;L=n.Up;break;case"s":case"ArrowDown":if(C===n.Down)return;L=n.Down;break;case"d":case"ArrowRight":if(C===n.Right)return;L=n.Right;break;case"a":case"ArrowLeft":if(C===n.Left)return;L=n.Left}z(!1)}),z(!1),requestAnimationFrame(j);
//# sourceMappingURL=pacman.68aa2564.js.map
