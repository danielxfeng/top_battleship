(()=>{"use strict";var e={208:(e,n,t)=>{t.d(n,{A:()=>c});var o=t(354),r=t.n(o),a=t(314),i=t.n(a)()(r());i.push([e.id,'body {\n    background-color: #09090b;\n    font-family: "Roboto", sans-serif;\n    color: #fbbf24;\n    text-align: center;\n}\n\n#container {\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n}\n\nh1, h2, h3 {\n    font-family: "Jersey 15", sans-serif;\n}\n\nh1 {\n    font-size: 64px;\n    text-shadow: 2px 2px 4px #fca5a5;\n}\n\nheader, footer {\n    flex: none;\n    height: 75px;\n    display: flex;\n    align-items: center;\n}\n\nheader {\n    justify-content: center;\n}\n\nheader a, header a:hover, header a:active, footer a, footer a:hover, footer a:active {\n    color: inherit;\n}\n\nheader a, header a:hover, header a:active {\n    text-decoration: none;\n}\n\nfooter {\n    justify-content: space-around;\n}\n\nmain {\n    flex: 1;\n    padding: 20px;\n    display: flex;\n    flex-direction: column;\n}\n\n#buttons {\n    flex: none;\n    height: 40px;\n    display: flex;\n    justify-content: space-around;\n}\n\n#buttons button {\n    padding: 10px 30px;\n    border: none;\n    border-radius: 10px;\n    background-color: #0284c7;\n    font-family: "Roboto", sans-serif;\n    color: #fbbf24;\n    text-shadow: 2px 2px 4px #fca5a5;\n    box-shadow: inset 4px 4px 8px rgba(255, 255, 255, 0.1), inset -4px -4px 8px rgba(0, 0, 0, 0.5);\n}\n\n#buttons button:disabled, #buttons button:disabled:hover {\n    background-color: #4b5563;\n    color: #94a3b8;\n    text-shadow: none;\n    box-shadow: none;\n}\n\n#buttons button:active {\n    box-shadow: inset -4px -4px 8px rgba(255, 255, 255, 0.1), inset 4px 4px 8px rgba(0, 0, 0, 0.5);\n}\n\n\n#msg {\n    flex: none;\n    display: flex;\n    justify-content: center;\n    min-height: 60px;\n}\n\n#msg p {\n    width: 500px;\n    padding: 10px;\n    font-family: "Jersey 15", sans-serif;\n    font-size: large;\n    border-radius: 20px;\n}\n\n#msg .err {\n    background-color: #fca5a5;\n}\n\n#msg .res {\n    background-color: #fbbf24;\n    color: #94a3b8;\n    font-size: 48px;\n}\n\n#msg .info {\n    background-color: #4b5563;\n}\n\n#names, #docks, #battle_zones {\n    display: flex;\n    gap: 50px;\n    justify-content: center;\n}\n\n#names h2, #docks div, #battle_zone div {\n    flex: 1;\n}\n\n#battle_zone {\n    justify-content: center;\n    display: flex;\n    flex-wrap: wrap;\n}\n\n.board {\n    display: flex;\n    flex-direction: column;\n    flex-wrap: nowrap;\n    justify-content: center;\n    padding: 20px;\n}\n\n.board_row {\n    flex: none;\n    display: flex;\n    flex-wrap: nowrap;\n    justify-content: center;\n}\n\n.board_cell {\n    flex: none;\n    width: 30px;\n    height: 30px;\n    min-width: 30px;\n    max-width: 30px;\n    min-height: 30px;\n    max-height: 30px;\n    background-color: #0284c7;\n    border: 1px solid #38bdf8;\n    box-sizing: border-box;\n    overflow: hidden;\n}\n\n.board .hit {\n    color: #ef4444;\n}\n\n.board .miss {\n    color: #cbd5e1;\n}\n\nlabel {\n    font-style: italic;\n}',"",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"AAAA;IACI,yBAAyB;IACzB,iCAAiC;IACjC,cAAc;IACd,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,iBAAiB;AACrB;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,eAAe;IACf,gCAAgC;AACpC;;AAEA;IACI,UAAU;IACV,YAAY;IACZ,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,OAAO;IACP,aAAa;IACb,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,UAAU;IACV,YAAY;IACZ,aAAa;IACb,6BAA6B;AACjC;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,mBAAmB;IACnB,yBAAyB;IACzB,iCAAiC;IACjC,cAAc;IACd,gCAAgC;IAChC,8FAA8F;AAClG;;AAEA;IACI,yBAAyB;IACzB,cAAc;IACd,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,8FAA8F;AAClG;;;AAGA;IACI,UAAU;IACV,aAAa;IACb,uBAAuB;IACvB,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,oCAAoC;IACpC,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;IACzB,cAAc;IACd,eAAe;AACnB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,SAAS;IACT,uBAAuB;AAC3B;;AAEA;IACI,OAAO;AACX;;AAEA;IACI,uBAAuB;IACvB,aAAa;IACb,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,iBAAiB;IACjB,uBAAuB;IACvB,aAAa;AACjB;;AAEA;IACI,UAAU;IACV,aAAa;IACb,iBAAiB;IACjB,uBAAuB;AAC3B;;AAEA;IACI,UAAU;IACV,WAAW;IACX,YAAY;IACZ,eAAe;IACf,eAAe;IACf,gBAAgB;IAChB,gBAAgB;IAChB,yBAAyB;IACzB,yBAAyB;IACzB,sBAAsB;IACtB,gBAAgB;AACpB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,kBAAkB;AACtB",sourcesContent:['body {\n    background-color: #09090b;\n    font-family: "Roboto", sans-serif;\n    color: #fbbf24;\n    text-align: center;\n}\n\n#container {\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n}\n\nh1, h2, h3 {\n    font-family: "Jersey 15", sans-serif;\n}\n\nh1 {\n    font-size: 64px;\n    text-shadow: 2px 2px 4px #fca5a5;\n}\n\nheader, footer {\n    flex: none;\n    height: 75px;\n    display: flex;\n    align-items: center;\n}\n\nheader {\n    justify-content: center;\n}\n\nheader a, header a:hover, header a:active, footer a, footer a:hover, footer a:active {\n    color: inherit;\n}\n\nheader a, header a:hover, header a:active {\n    text-decoration: none;\n}\n\nfooter {\n    justify-content: space-around;\n}\n\nmain {\n    flex: 1;\n    padding: 20px;\n    display: flex;\n    flex-direction: column;\n}\n\n#buttons {\n    flex: none;\n    height: 40px;\n    display: flex;\n    justify-content: space-around;\n}\n\n#buttons button {\n    padding: 10px 30px;\n    border: none;\n    border-radius: 10px;\n    background-color: #0284c7;\n    font-family: "Roboto", sans-serif;\n    color: #fbbf24;\n    text-shadow: 2px 2px 4px #fca5a5;\n    box-shadow: inset 4px 4px 8px rgba(255, 255, 255, 0.1), inset -4px -4px 8px rgba(0, 0, 0, 0.5);\n}\n\n#buttons button:disabled, #buttons button:disabled:hover {\n    background-color: #4b5563;\n    color: #94a3b8;\n    text-shadow: none;\n    box-shadow: none;\n}\n\n#buttons button:active {\n    box-shadow: inset -4px -4px 8px rgba(255, 255, 255, 0.1), inset 4px 4px 8px rgba(0, 0, 0, 0.5);\n}\n\n\n#msg {\n    flex: none;\n    display: flex;\n    justify-content: center;\n    min-height: 60px;\n}\n\n#msg p {\n    width: 500px;\n    padding: 10px;\n    font-family: "Jersey 15", sans-serif;\n    font-size: large;\n    border-radius: 20px;\n}\n\n#msg .err {\n    background-color: #fca5a5;\n}\n\n#msg .res {\n    background-color: #fbbf24;\n    color: #94a3b8;\n    font-size: 48px;\n}\n\n#msg .info {\n    background-color: #4b5563;\n}\n\n#names, #docks, #battle_zones {\n    display: flex;\n    gap: 50px;\n    justify-content: center;\n}\n\n#names h2, #docks div, #battle_zone div {\n    flex: 1;\n}\n\n#battle_zone {\n    justify-content: center;\n    display: flex;\n    flex-wrap: wrap;\n}\n\n.board {\n    display: flex;\n    flex-direction: column;\n    flex-wrap: nowrap;\n    justify-content: center;\n    padding: 20px;\n}\n\n.board_row {\n    flex: none;\n    display: flex;\n    flex-wrap: nowrap;\n    justify-content: center;\n}\n\n.board_cell {\n    flex: none;\n    width: 30px;\n    height: 30px;\n    min-width: 30px;\n    max-width: 30px;\n    min-height: 30px;\n    max-height: 30px;\n    background-color: #0284c7;\n    border: 1px solid #38bdf8;\n    box-sizing: border-box;\n    overflow: hidden;\n}\n\n.board .hit {\n    color: #ef4444;\n}\n\n.board .miss {\n    color: #cbd5e1;\n}\n\nlabel {\n    font-style: italic;\n}'],sourceRoot:""}]);const c=i},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<e.length;l++){var A=[].concat(e[l]);o&&i[A[0]]||(void 0!==a&&(void 0===A[5]||(A[1]="@layer".concat(A[5].length>0?" ".concat(A[5]):""," {").concat(A[1],"}")),A[5]=a),t&&(A[2]?(A[1]="@media ".concat(A[2]," {").concat(A[1],"}"),A[2]=t):A[2]=t),r&&(A[4]?(A[1]="@supports (".concat(A[4],") {").concat(A[1],"}"),A[4]=r):A[4]="".concat(r)),n.push(A))}},n}},354:e=>{e.exports=function(e){var n=e[1],t=e[3];if(!t)return n;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),a="/*# ".concat(r," */");return[n].concat([a]).join("\n")}return[n].join("\n")}},72:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],l=o.base?s[0]+o.base:s[0],A=a[l]||0,d="".concat(l," ").concat(A);a[l]=A+1;var p=t(d),u={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(u);else{var f=r(u,o);o.byIndex=c,n.splice(c,0,{identifier:d,updater:f,references:1})}i.push(d)}return i}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var s=o(e,r),l=0;l<a.length;l++){var A=t(a[l]);0===n[A].references&&(n[A].updater(),n.splice(A,1))}a=s}}},659:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={id:o,exports:{}};return e[o](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0;var o=t(72),r=t.n(o),a=t(825),i=t.n(a),c=t(659),s=t.n(c),l=t(56),A=t.n(l),d=t(540),p=t.n(d),u=t(113),f=t.n(u),h=t(208),g={};g.styleTagTransform=f(),g.setAttributes=A(),g.insert=s().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=p(),r()(h.A,g),h.A&&h.A.locals&&h.A.locals;const x=(e,n)=>{const t=e,o=n;let r=0;return{get:()=>({name:t,length:o,hit:r}),hit:()=>{r++},isSunk:()=>r>=o}},m=(e=10)=>{const n=e;let t=[],o=[];const r=e=>{const[t,o]=e.split("-").map(Number);return t>=0&&o>=0&&t<n&&o<n};return{placeShip:(e,n)=>{if(!n.every((e=>r(e))))return[!1,[]];if(n.some((e=>(e=>t.some((n=>n[1].includes(e))))(e))))return[!1,[]];const o=t.find((n=>n[0]===e));return o&&(t=t.filter((n=>n[0]!==e))),t.push([e,n]),[!0,o?o[1]:[]]},receiveAttack:e=>{if(!r(e)||o.includes(e))return;o.push(e);let n=t.find((n=>n[1].includes(e)));return n?n[0]:null},lose:()=>t.length&&t.every((e=>e[0].isSunk()))}},b=Object.freeze({Over:0,Placing:1,Attacking:2}),C=Object.freeze({Vertical:0,Horizontal:1}),I=(e,n,t=!1,o=10)=>{const r=e,a=t,i=n,c=m(o);let s=0,l=b.Over,A=null;return{getIdx:()=>r,getIsAuto:()=>a,getOpposite:()=>A,placed:()=>s>=i.length,setStage:e=>{if(!Object.values(b).includes(e))throw new Error("Illegal stage value.");l=e},setOpposite:e=>{A=e},placeShip:(e,n,t=C.Vertical)=>{if(l!==b.Placing)return null;if(!i.includes(e))throw new Error("Illegal ship.");const[o,r]=n.split("-").map(Number);let a=[];if(t===C.Vertical)for(let n=0;n<e.get().length;n++)a.push(`${o}-${r+n}`);else{if(t!==C.Horizontal)throw new Error("Illegal direction value.");for(let n=0;n<e.get().length;n++)a.push(`${o+n}-${r}`)}const[A,d]=c.placeShip(e,a);return A?(d.length||s++,[a,d]):null},attack:e=>{if(l===b.Attacking){if(!A)throw new Error("No opposite board.");return A.receiveAttack(e)}},receiveAttack:e=>{if(l===b.Attacking)return c.receiveAttack(e)},lose:()=>c.lose()}},y=e=>{const{length:n,ships:t}=e;document.getElementById("msg").innerHTML="";const o=document.getElementById("battle_zone");o.innerHTML="";for(let e=0;e<2;e++){const t=document.createElement("div");t.id=`board-${e}`,t.classList.add("board");for(let o=0;o<n;o++){const r=document.createElement("div");r.classList.add("board_row");for(let t=0;t<n;t++){const n=document.createElement("div");n.classList.add("board_cell"),n.classList.add(`cell_player_${e}`),n.id=`${e}_${o}-${t}`,r.appendChild(n)}t.appendChild(r)}o.appendChild(t)}const r=document.getElementById("ships"),a=document.createElement("label");a.for="ship",a.textContent="Select a ship:",r.appendChild(a);for(let e=0;e<t.length;e++){const n=document.createElement("label"),o=document.createElement("input");o.type="radio",o.name="ship",o.value=t[e].get().name,o.id=t[e].get().name,n.appendChild(o),n.appendChild(document.createTextNode(" "+"●".repeat(t[e].get().length))),r.appendChild(n)}document.getElementById("start_new_game").addEventListener("click",(()=>{k.init(),k.startPlaceShips()})),document.getElementById("start_attack").disabled=!0,v.msg("info","Press Start to start a new game.")},B=(()=>{let e={},n={};const t=(e,n)=>{const t=document.getElementById("msg");t.innerHTML="";const o=document.createElement("p");o.textContent=n,o.classList.add(e),t.appendChild(o),"err"!==e&&"info"!==e||setTimeout((()=>{t.innerHTML=""}),5e3)},o=e=>n=>{const t=n.target.id.split("_")[1];let o,r;try{o=document.querySelector('input[name="ship"]:checked').value,r=parseInt(document.querySelector('input[name="direction"]:checked').value)}catch{return}o&&k.placeShipByUser(e,o,t,r)};return{clear:()=>{document.getElementById("msg").innerHTML="",document.querySelectorAll(".board_cell").forEach((e=>{e.textContent="",e.classList.remove("hit"),e.classList.remove("miss")})),document.querySelectorAll('input[name="ship"]').forEach((e=>{e.disabled=!1})),document.querySelectorAll('input[name="direction"]').forEach((e=>{e.disabled=!1})),n={},e={}},msg:t,enableUserPlaceShips:n=>{document.querySelectorAll(`.cell_player_${n.getIdx()}`).forEach((t=>{e[t.id]||(e[t.id]=o(n.getIdx()),t.addEventListener("click",e[t.id]))}));const t=document.getElementById("start_attack");t.disabled=!0,t.addEventListener("click",(()=>{k.startAttack()}))},handlePlacingShipsClick:o,disableUserPlaceShips:n=>{document.querySelectorAll(`.cell_player_${n.getIdx()}`).forEach((n=>{n.removeEventListener("click",e[n.id])})),document.querySelectorAll('input[name="ship"]').forEach((e=>{e.disabled=!0})),document.querySelectorAll('input[name="direction"]').forEach((e=>{e.disabled=!0}))},displayShip:(e,n)=>{const[t,o]=n;o.forEach((n=>{const t=`${e.getIdx()}_${n}`;document.getElementById(t).textContent=""})),t.forEach((n=>{const t=`${e.getIdx()}_${n}`;document.getElementById(t).textContent="●"}))},hideShip:(e,n)=>{},enableUserCanStartAttack:()=>{document.getElementById("start_attack").disabled=!1},enableUserAttacking:e=>{document.querySelectorAll(`.cell_player_${e.getOpposite().getIdx()}`).forEach((t=>{var o;n[t.id]||(n[t.id]=(o=e.getIdx(),e=>{const n=e.target.id.split("_")[1];k.attackByUser(o,n)}),t.addEventListener("click",n[t.id]))}))},disableUserAttacking:e=>{document.querySelectorAll(`.cell_player_${e.getIdx()}`).forEach((e=>{e.removeEventListener("click",n[e.id])}))},displayAttacked:(e,n,t)=>{const o=document.getElementById(`${e.getIdx()}_${n}`),r=t?"ⓧ":"✕";o.innerText=r,o.classList.add(t?"hit":"miss")},setGameOver:e=>{t("res",e)}}})(),v=B,E=e=>Math.floor(1e3*Math.random())%e,k=(()=>{const e=10;let n=[],t=[],o=[],r=!1;const a=e=>{let n=[];for(let t=0;t<4;t++)n.push(x(`player-${e}-ship-${t}`,t+2));return n},i=()=>{n=[],t=[],o=[],r=!1;for(let r=0;r<2;r++){const i=a(r),c=I(r,i,1===r,e);n.push(i),t.push(c),o.push(new Set)}t.forEach((e=>e.setOpposite(t.find((n=>n!==e))))),v.clear()},c=t=>{n[t.getIdx()].forEach((n=>{for(;;){const o=`${E(e)}-${E(e)}`,r=E(2),a=t.placeShip(n,o,r);if(a){v.hideShip(t,a);break}}})),s()},s=()=>{t.every((e=>e.placed()))&&(v.enableUserCanStartAttack(),v.msg("info","All ships are placed. Click Start Attack to attack."))},l=()=>{const e=t.find((e=>e.lose()));if(e){r=!1,v.disableUserAttacking(t[1]);const n=0===e.getIdx()?"You Lose!":"You Win!";return v.setGameOver(n),t.forEach((e=>e.setStage(b.Over))),!0}return!1},A=(e,n)=>{o[e.getIdx()].add(n);const t=e.attack(n);if(void 0!==t){let o=!1;t&&(t.hit(),o=!0),v.displayAttacked(e.getOpposite(),n,o)}};return i(),{init:i,getInitParams:()=>({length:e,ships:n[0]}),startPlaceShips:()=>{t.forEach((e=>e.setStage(b.Placing))),t.forEach((e=>(e=>e===t[1]?c(e):v.enableUserPlaceShips(e))(e))),v.msg("info","Choose the ships and the direction, then click on the board to place.")},placeShipByUser:(e,o,r,a=C.Vertical)=>{if(!o||!r)return;const i=t[parseInt(e)];if(!i||i===t[1])return v.msg("err","Illegal player or ship.");let c,l;try{c=n[e].find((e=>e.get().name===o)),l=i.placeShip(c,r,a)}catch{return v.msg("err","Illegal ship.")}l&&(v.displayShip(i,l),i.placed()&&s())},startAttack:()=>{v.disableUserPlaceShips(t[0]),t.forEach((e=>e.setStage(b.Attacking))),r=!0,v.enableUserAttacking(t[0]),v.msg("info","Click on the opposite's board to attack.")},attackByUser:(n,a)=>{if(null==n||!a)return;if(!r)return;const i=t[parseInt(n)];if(!i||i.getIsAuto())return v.msg("err","Illegal player.");o[i.getIdx()].has(a)||(A(i,a),l()||(r=!1,(n=>{if(r)return;let t;for(;!t||o[n.getIdx()].has(t);)t=`${E(e)}-${E(e)}`;A(n,t),l()||(r=!0)})(t[1])))}}})();y(k.getInitParams())})();
//# sourceMappingURL=main.js.map