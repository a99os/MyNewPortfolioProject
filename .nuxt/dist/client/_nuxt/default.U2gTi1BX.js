var W=Object.defineProperty;var k=(l,t,e)=>t in l?W(l,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):l[t]=e;var d=(l,t,e)=>(k(l,typeof t!="symbol"?t+"":t,e),e);import{s as x,v as L,i as _,h as g,o as M,c as E,a as C,t as O,g as H,S as N,b as D,k as X}from"./entry.q6WjGjcC.js";const Y={class:"preloader"},V={class:"preloader-percent h2"},P={__name:"ThePreloader",setup(l){const t=x(0);return L(()=>{const e=_.timeline();e.to(t,{progress:100,duration:1,onUpdate(){t.value=Math.floor(t.progress)},onComplete(){g.isPreloaderVisible=!1,g.scrollLenis.start()}}),e.fromTo(".preloader",{clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"},{clipPath:"polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",duration:1})}),(e,i)=>(M(),E("div",Y,[C("div",V,O(H(t))+"%",1)]))}},A=P;function w(l,t,e){return Math.max(l,Math.min(t,e))}class B{advance(t){var c;if(!this.isRunning)return;let e=!1;if(this.lerp)this.value=(i=this.value,s=this.to,o=60*this.lerp,h=t,function(r,a,u){return(1-u)*r+u*a}(i,s,1-Math.exp(-o*h))),Math.round(this.value)===this.to&&(this.value=this.to,e=!0);else{this.currentTime+=t;const r=w(0,this.currentTime/this.duration,1);e=r>=1;const a=e?1:this.easing(r);this.value=this.from+(this.to-this.from)*a}var i,s,o,h;(c=this.onUpdate)==null||c.call(this,this.value,e),e&&this.stop()}stop(){this.isRunning=!1}fromTo(t,e,{lerp:i=.1,duration:s=1,easing:o=r=>r,onStart:h,onUpdate:c}){this.from=this.value=t,this.to=e,this.lerp=i,this.duration=s,this.easing=o,this.currentTime=0,this.isRunning=!0,h==null||h(),this.onUpdate=c}}class U{constructor({wrapper:t,content:e,autoResize:i=!0}={}){d(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});d(this,"onWrapperResize",()=>{this.wrapper===window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});d(this,"onContentResize",()=>{this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth});if(this.wrapper=t,this.content=e,i){const s=function(o,h){let c;return function(){let r=arguments,a=this;clearTimeout(c),c=setTimeout(function(){o.apply(a,r)},h)}}(this.resize,250);this.wrapper!==window&&(this.wrapperResizeObserver=new ResizeObserver(s),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(s),this.contentResizeObserver.observe(this.content)}this.resize()}destroy(){var t,e;(t=this.wrapperResizeObserver)==null||t.disconnect(),(e=this.contentResizeObserver)==null||e.disconnect()}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}}class b{constructor(){this.events={}}emit(t,...e){let i=this.events[t]||[];for(let s=0,o=i.length;s<o;s++)i[s](...e)}on(t,e){var i;return(i=this.events[t])!=null&&i.push(e)||(this.events[t]=[e]),()=>{var s;this.events[t]=(s=this.events[t])==null?void 0:s.filter(o=>e!==o)}}off(t,e){var i;this.events[t]=(i=this.events[t])==null?void 0:i.filter(s=>e!==s)}destroy(){this.events={}}}class I{constructor(t,{wheelMultiplier:e=1,touchMultiplier:i=2,normalizeWheel:s=!1}){d(this,"onTouchStart",t=>{const{clientX:e,clientY:i}=t.targetTouches?t.targetTouches[0]:t;this.touchStart.x=e,this.touchStart.y=i,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:t})});d(this,"onTouchMove",t=>{const{clientX:e,clientY:i}=t.targetTouches?t.targetTouches[0]:t,s=-(e-this.touchStart.x)*this.touchMultiplier,o=-(i-this.touchStart.y)*this.touchMultiplier;this.touchStart.x=e,this.touchStart.y=i,this.lastDelta={x:s,y:o},this.emitter.emit("scroll",{deltaX:s,deltaY:o,event:t})});d(this,"onTouchEnd",t=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:t})});d(this,"onWheel",t=>{let{deltaX:e,deltaY:i}=t;this.normalizeWheel&&(e=w(-100,e,100),i=w(-100,i,100)),e*=this.wheelMultiplier,i*=this.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:i,event:t})});this.element=t,this.wheelMultiplier=e,this.touchMultiplier=i,this.normalizeWheel=s,this.touchStart={x:null,y:null},this.emitter=new b,this.element.addEventListener("wheel",this.onWheel,{passive:!1}),this.element.addEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.addEventListener("touchmove",this.onTouchMove,{passive:!1}),this.element.addEventListener("touchend",this.onTouchEnd,{passive:!1})}on(t,e){return this.emitter.on(t,e)}destroy(){this.emitter.destroy(),this.element.removeEventListener("wheel",this.onWheel,{passive:!1}),this.element.removeEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.removeEventListener("touchmove",this.onTouchMove,{passive:!1}),this.element.removeEventListener("touchend",this.onTouchEnd,{passive:!1})}}class ${constructor({wrapper:t=window,content:e=document.documentElement,wheelEventsTarget:i=t,eventsTarget:s=i,smoothWheel:o=!0,smoothTouch:h=!1,syncTouch:c=!1,syncTouchLerp:r=.075,touchInertiaMultiplier:a=35,duration:u,easing:p=R=>Math.min(1,1.001-Math.pow(2,-10*R)),lerp:n=!u&&.1,infinite:m=!1,orientation:S="vertical",gestureOrientation:f="vertical",touchMultiplier:v=1,wheelMultiplier:T=1,normalizeWheel:y=!1,autoResize:z=!0}={}){d(this,"onVirtualScroll",({deltaX:t,deltaY:e,event:i})=>{if(i.ctrlKey)return;const s=i.type.includes("touch"),o=i.type.includes("wheel");if((this.options.smoothTouch||this.options.syncTouch)&&s&&i.type==="touchstart")return void this.reset();const h=t===0&&e===0,c=this.options.gestureOrientation==="vertical"&&e===0||this.options.gestureOrientation==="horizontal"&&t===0;if(h||c)return;let r=i.composedPath();if(r=r.slice(0,r.indexOf(this.rootElement)),r.find(n=>{var m,S,f,v;return((m=n.hasAttribute)==null?void 0:m.call(n,"data-lenis-prevent"))||s&&((S=n.hasAttribute)==null?void 0:S.call(n,"data-lenis-prevent-touch"))||o&&((f=n.hasAttribute)==null?void 0:f.call(n,"data-lenis-prevent-wheel"))||((v=n.classList)==null?void 0:v.contains("lenis"))}))return;if(this.isStopped||this.isLocked)return void i.preventDefault();if(this.isSmooth=(this.options.smoothTouch||this.options.syncTouch)&&s||this.options.smoothWheel&&o,!this.isSmooth)return this.isScrolling=!1,void this.animate.stop();i.preventDefault();let a=e;this.options.gestureOrientation==="both"?a=Math.abs(e)>Math.abs(t)?e:t:this.options.gestureOrientation==="horizontal"&&(a=t);const u=s&&this.options.syncTouch,p=s&&i.type==="touchend"&&Math.abs(a)>5;p&&(a=this.velocity*this.options.touchInertiaMultiplier),this.scrollTo(this.targetScroll+a,{programmatic:!1,...u?{lerp:p?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});d(this,"onNativeScroll",()=>{if(!this.__preventNextScrollEvent&&!this.isScrolling){const t=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.velocity=0,this.direction=Math.sign(this.animatedScroll-t),this.emit()}});window.lenisVersion="1.0.33",t!==document.documentElement&&t!==document.body||(t=window),this.options={wrapper:t,content:e,wheelEventsTarget:i,eventsTarget:s,smoothWheel:o,smoothTouch:h,syncTouch:c,syncTouchLerp:r,touchInertiaMultiplier:a,duration:u,easing:p,lerp:n,infinite:m,gestureOrientation:f,orientation:S,touchMultiplier:v,wheelMultiplier:T,normalizeWheel:y,autoResize:z},this.animate=new B,this.emitter=new b,this.dimensions=new U({wrapper:t,content:e,autoResize:z}),this.toggleClass("lenis",!0),this.velocity=0,this.isLocked=!1,this.isStopped=!1,this.isSmooth=c||o||h,this.isScrolling=!1,this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,{passive:!1}),this.virtualScroll=new I(s,{touchMultiplier:v,wheelMultiplier:T,normalizeWheel:y}),this.virtualScroll.on("scroll",this.onVirtualScroll)}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,{passive:!1}),this.virtualScroll.destroy(),this.dimensions.destroy(),this.toggleClass("lenis",!1),this.toggleClass("lenis-smooth",!1),this.toggleClass("lenis-scrolling",!1),this.toggleClass("lenis-stopped",!1),this.toggleClass("lenis-locked",!1)}on(t,e){return this.emitter.on(t,e)}off(t,e){return this.emitter.off(t,e)}setScroll(t){this.isHorizontal?this.rootElement.scrollLeft=t:this.rootElement.scrollTop=t}resize(){this.dimensions.resize()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.velocity=0,this.animate.stop()}start(){this.isStopped=!1,this.reset()}stop(){this.isStopped=!0,this.animate.stop(),this.reset()}raf(t){const e=t-(this.time||t);this.time=t,this.animate.advance(.001*e)}scrollTo(t,{offset:e=0,immediate:i=!1,lock:s=!1,duration:o=this.options.duration,easing:h=this.options.easing,lerp:c=!o&&this.options.lerp,onComplete:r=null,force:a=!1,programmatic:u=!0}={}){if(!this.isStopped&&!this.isLocked||a){if(["top","left","start"].includes(t))t=0;else if(["bottom","right","end"].includes(t))t=this.limit;else{let p;if(typeof t=="string"?p=document.querySelector(t):t!=null&&t.nodeType&&(p=t),p){if(this.options.wrapper!==window){const m=this.options.wrapper.getBoundingClientRect();e-=this.isHorizontal?m.left:m.top}const n=p.getBoundingClientRect();t=(this.isHorizontal?n.left:n.top)+this.animatedScroll}}if(typeof t=="number"){if(t+=e,t=Math.round(t),this.options.infinite?u&&(this.targetScroll=this.animatedScroll=this.scroll):t=w(0,t,this.limit),i)return this.animatedScroll=this.targetScroll=t,this.setScroll(this.scroll),this.reset(),void(r==null?void 0:r(this));if(!u){if(t===this.targetScroll)return;this.targetScroll=t}this.animate.fromTo(this.animatedScroll,t,{duration:o,easing:h,lerp:c,onStart:()=>{s&&(this.isLocked=!0),this.isScrolling=!0},onUpdate:(p,n)=>{this.isScrolling=!0,this.velocity=p-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=p,this.setScroll(this.scroll),u&&(this.targetScroll=p),n||this.emit(),n&&(this.reset(),this.emit(),r==null||r(this),this.__preventNextScrollEvent=!0,requestAnimationFrame(()=>{delete this.__preventNextScrollEvent}))}})}}}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){return this.isHorizontal?this.rootElement.scrollLeft:this.rootElement.scrollTop}get scroll(){return this.options.infinite?(t=this.animatedScroll,e=this.limit,(t%e+e)%e):this.animatedScroll;var t,e}get progress(){return this.limit===0?1:this.scroll/this.limit}get isSmooth(){return this.__isSmooth}set isSmooth(t){this.__isSmooth!==t&&(this.__isSmooth=t,this.toggleClass("lenis-smooth",t))}get isScrolling(){return this.__isScrolling}set isScrolling(t){this.__isScrolling!==t&&(this.__isScrolling=t,this.toggleClass("lenis-scrolling",t))}get isStopped(){return this.__isStopped}set isStopped(t){this.__isStopped!==t&&(this.__isStopped=t,this.toggleClass("lenis-stopped",t))}get isLocked(){return this.__isLocked}set isLocked(t){this.__isLocked!==t&&(this.__isLocked=t,this.toggleClass("lenis-locked",t))}get className(){let t="lenis";return this.isStopped&&(t+=" lenis-stopped"),this.isLocked&&(t+=" lenis-locked"),this.isScrolling&&(t+=" lenis-scrolling"),this.isSmooth&&(t+=" lenis-smooth"),t}toggleClass(t,e){this.rootElement.classList.toggle(t,e),this.emitter.emit("className change",this)}}const q=()=>{g.scrollLenis=new $({duration:1.2,orientation:"vertical",gestureOrientation:"vertical",smoothWheel:!0}),g.scrollLenis.on("scrool",N.update),_.ticker.add(l=>{g.scrollLenis.raf(l*1e3)}),_.ticker.lagSmoothing(0),g.scrollLenis.scrollTo(0),g.scrollLenis.stop()},F={id:"viewport"},G={__name:"default",setup(l){return L(()=>{q()}),(t,e)=>{const i=A;return M(),E("div",F,[D(i),X(t.$slots,"default")])}}};export{G as default};
