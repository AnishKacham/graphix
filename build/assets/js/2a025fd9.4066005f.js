"use strict";(self.webpackChunkgraphix=self.webpackChunkgraphix||[]).push([[578],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var i=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=i.createContext({}),c=function(e){var t=i.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),h=n,u=d["".concat(l,".").concat(h)]||d[h]||m[h]||o;return r?i.createElement(u,a(a({ref:t},p),{},{components:r})):i.createElement(u,a({ref:t},p))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:n,a[1]=s;for(var c=2;c<o;c++)a[c]=r[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}h.displayName="MDXCreateElement"},2128:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var i=r(7462),n=(r(7294),r(3905));const o={sidebar_label:"Metropolis Light Transport",sidebar_position:3},a=void 0,s={unversionedId:"MetropolisLightTransport",id:"MetropolisLightTransport",title:"MetropolisLightTransport",description:"Monte Carlo methods",source:"@site/docs/MetropolisLightTransport.md",sourceDirName:".",slug:"/MetropolisLightTransport",permalink:"/docs/MetropolisLightTransport",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"Metropolis Light Transport",sidebar_position:3},sidebar:"defaultSidebar",previous:{title:"Path Tracing",permalink:"/docs/path-tracing"},next:{title:"Acknowledgements",permalink:"/docs/acknowledgements"}},l={},c=[{value:"Monte Carlo methods",id:"monte-carlo-methods",level:2},{value:"Markov Chain",id:"markov-chain",level:2},{value:"Markov Chain Monte Carlo - MCMC",id:"markov-chain-monte-carlo---mcmc",level:2}],p={toc:c};function d(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,i.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"monte-carlo-methods"},"Monte Carlo methods"),(0,n.kt)("p",null,"These are a set of computational algorithms relying on random sampling to get numerical results. The Monte Carlo methods find their use primarily in problems inolving probabilistic interpretation. A notable thing regarding these is that the computational cost associated with the monte carlo simulation can be unexpectedly high."),(0,n.kt)("h2",{id:"markov-chain"},"Markov Chain"),(0,n.kt)("p",null,"This is a model comprising of objects usually defined as a family of random variables, describing a sequence of possible events in which probability of next event depends solely on that of the current state. To avoid any process termination, we assume that all possible states and the nodes in transition matrix are included in definition of the process itself.\nMarkovian processes are the basis for simulation methods called ",(0,n.kt)("em",{parentName:"p"},"Markov Chain Monte Carlo")),(0,n.kt)("h2",{id:"markov-chain-monte-carlo---mcmc"},"Markov Chain Monte Carlo - MCMC"),(0,n.kt)("p",null,"These methods cover a class of algorithms for sampling from a probability distribution. We begin by constructing a markov chain (which has the desired distribution as its equilibrium distribution) and record states from the chain to get a sample of the desired distribution. We can improve the model by increasing the number of steps involved"),(0,n.kt)("h1",{id:"metropolis-hastings-algorithm"},"Metropolis-Hastings algorithm"),(0,n.kt)("p",null,"This is an MCMC method to get a sequence of random samples from a desired probability distribution, particularily useful when direct sampling is difficult. The algorithm finds its uses in approximating distitbutions and evaluating statistical integrals.\nThe algorithm can draw samples from a distribution with probability density $P(x)$ , given a function $f(x)$ which is ",(0,n.kt)("em",{parentName:"p"},"proportional")," to our density $P$. It iteratively generates a sequence of samples such that with production of more samples, the distribution matches closer to the actual desired one.\nAt each iteration, we pick a candidate for the next random value based on current state. This is either accepted or rejected with some probability threshold, with the current value being passed on for later iterations in latter case."),(0,n.kt)("p",null,"Here is an image using the mlt we have implemented\n",(0,n.kt)("img",{alt:"alt text for screen readers",src:r(8727).Z,title:"mlt with 10 mutations",width:"718",height:"746"})))}d.isMDXComponent=!0},8727:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/mlt_10_mutations-04b20b58bca3b01f872f1e033738d04b.jpeg"}}]);