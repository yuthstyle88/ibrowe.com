(()=>{window.addEventListener("DOMContentLoaded",function(){let r=t=>t.offsetParent!==null,e=document.querySelector("#persistent-cta"),i=document.querySelectorAll(".hero .btn, .hero .leoButton, .hero .download"),o=Array.from(i).filter(r);if(!window.IntersectionObserver){e.classList.remove("opacity-0"),e.classList.remove("translate-y-20");return}let a={root:null,rootMargin:"0px",threshold:1};if(o){let t=new IntersectionObserver(s=>{s.forEach(l=>{l.isIntersecting?c():n()})},a);o.forEach(s=>{t.observe(s)})}else n();function n(){e.classList.remove("opacity-0","translate-y-20")}function c(){e.classList.add("opacity-0","translate-y-20")}});})();
