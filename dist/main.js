!function(e){var t={};function n(o){if(t[o])return t[o].exports;var c=t[o]={i:o,l:!1,exports:{}};return e[o].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(o,c,function(t){return e[t]}.bind(null,c));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var o=()=>{document.querySelectorAll(".phone-user").forEach(e=>{e.addEventListener("input",e=>{e.target.value=e.target.value.replace(/[^\d]/g,"")})})};var c=()=>{const e=document.querySelectorAll("form"),t=document.createElement("div");t.classList.add("success-message"),e.forEach(e=>{e.addEventListener("submit",o=>{o.preventDefault(),e.appendChild(t),t.textContent="Загрузка...";const c=new FormData(e);let r={};c.forEach((e,t)=>{r[t]=e});const l=document.querySelector('input[name="user_quest"]');l.value&&(r.user_quest=l.value,l.value=""),n(r).then(n=>{if(200!==n.status)throw new Error("Status network not 200");t.innerHTML="Спасибо! Мы скоро с вами свяжемся!",e.reset()}).catch(e=>{console.error(e),t.innerHTML="Упс... Что-то пошло не так!"})})});const n=e=>fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/JSON"},body:JSON.stringify(e)})};var r=()=>{const e=()=>{const e=document.querySelector(".success-message");e&&e.parentNode.removeChild(e)};document.querySelector(".sentence").addEventListener("click",t=>{if(t.preventDefault(),t.target.matches(".sentence-btn")){const t=document.querySelector(".popup-discount");t.style.display="block",t.addEventListener("click",n=>{let o=n.target;o.matches(".popup-close")?(t.style.display="none",e()):o.matches(".popup-discount:not(.popup-content)")&&(t.style.display="none",e())})}})};var l=()=>{const e=()=>{const e=document.querySelector(".success-message");e&&e.parentNode.removeChild(e)};document.querySelectorAll("header a").forEach(t=>{t.addEventListener("click",t=>{t.preventDefault();const n=document.querySelector(".popup-call");n.style.display="block",n.addEventListener("click",t=>{let o=t.target;o.matches(".popup-close")?(n.style.display="none",e()):o.matches(".popup-call:not(.popup-content)")&&(n.style.display="none",e())})})})};var s=()=>{const e=()=>{const e=document.querySelector(".success-message");e&&e.parentNode.removeChild(e)},t=document.querySelector(".check-btn");t.addEventListener("click",n=>{if(n.preventDefault(),n.target===t){const t=document.querySelector(".popup-check");t.style.display="block",t.addEventListener("click",n=>{let o=n.target;o.matches(".popup-close")?(t.style.display="none",e()):o.matches(".popup-check:not(.popup-content)")&&(t.style.display="none",e())})}})};var a=()=>{const e=document.querySelector(".add-sentence-btn"),t=document.querySelectorAll(".hidden");e.addEventListener("click",()=>{t.forEach(e=>{e.classList.remove("hidden")}),e.style.display="none"})};var u=()=>{const e=document.getElementById("accordion-two"),t=document.querySelectorAll(".panel-heading"),n=document.querySelectorAll(".panel-collapse");e.addEventListener("click",e=>{let o=e.target;(o=o.closest(".panel-heading"))&&t.forEach((e,t)=>{e===o&&(e=>{for(let t=0;t<n.length;t++)n[t].style.display=e===t?"block":"none"})(t)})})};(()=>{const e=()=>{const e=document.querySelector(".success-message");e&&e.parentNode.removeChild(e)},t=document.querySelector(".director"),n=document.querySelector(".consultation-btn");t.addEventListener("click",t=>{if(t.preventDefault(),t.target===n){const t=document.querySelector(".popup-consultation");t.style.display="block",t.addEventListener("click",n=>{let o=n.target;o.matches("#consult-close")?(e(),t.style.display="none"):o.matches(".popup-consultation:not(#popup-consult)")&&(e(),t.style.display="none")})}})})(),o(),c(),r(),l(),s(),a(),u()}]);