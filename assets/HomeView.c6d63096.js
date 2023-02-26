import{_ as d,o as n,c,a as _,b as o,w as a,d as i,r as u,p as m,e as b,F as y,f as v,t as h,I as f,u as j,g as w,h as $}from"./index.2cdd3d30.js";import{p as g}from"./projects.79dfec4f.js";const x={},I={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},H=_("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19 13l-7 7-7-7m14-8l-7 7-7-7"},null,-1),S=[H];function P(e,r){return n(),c("svg",I,S)}const B=d(x,[["render",P]]);const k=e=>(m("data-v-6312b2c9"),e=e(),b(),e),C={class:"hero"},G={class:"hero__body"},D=k(()=>_("h1",{class:"hero__body__title"},[i(" hi,"),_("br"),i(" ich bin"),_("br"),i(" jana wernick ")],-1)),V=k(()=>_("h2",{class:"hero__body__subtitle"}," \u2014 frontend developerin ",-1)),F=i(" \xDCber mich "),N={class:"hero__footer"},L={__name:"HeroSection",setup(e){return(r,l)=>{const s=u("router-link");return n(),c("div",C,[_("div",G,[D,V,o(s,{class:"hero__body__link",to:{name:"about"}},{default:a(()=>[F]),_:1})]),_("div",N,[o(s,{class:"hero__footer__link",to:{name:"home",hash:"#projects"}},{default:a(()=>[o(B,{class:"hero__footer__link__icon"})]),_:1})])])}}},M=d(L,[["__scopeId","data-v-6312b2c9"]]),R={},A={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"1.75"},E=_("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M17 8l4 4m0 0l-4 4m4-4H3"},null,-1),J=[E];function T(e,r){return n(),c("svg",A,J)}const W=d(R,[["render",T]]);const q=e=>(m("data-v-b9da4720"),e=e(),b(),e),z={class:"projects",id:"projects"},K=q(()=>_("div",{class:"projects__header"},[_("h2",{class:"projects__header__title"},"Projekte")],-1)),O={class:"projects__body"},Q={class:"projects__body__item__header"},U={class:"projects__body__item__header__title"},X={class:"projects__body__item__header__subtitle"},Y={class:"projects__body__item__body"},Z=["src","alt"],__={class:"projects__body__item__body__append"},e_=["href"],t_={__name:"ProjectGrid",setup(e){return(r,l)=>{const s=u("router-link");return n(),c("div",z,[K,_("div",O,[(n(!0),c(y,null,v(j(g),(t,p)=>(n(),c("div",{key:p,class:"projects__body__item"},[_("div",Q,[_("h3",U,h(t.title),1),_("h4",X,h(t.description),1)]),_("div",Y,[o(s,{class:"projects__body__item__body__image",to:{name:"project",params:{project:t.linkProject}}},{default:a(()=>[_("img",{src:t.image.src,alt:t.image.alt,class:"projects__body__item__body__image"},null,8,Z)]),_:2},1032,["to"]),_("div",__,[_("a",{class:"projects__body__item__body__append__link",href:t.linkGitHub},[o(f,{class:"projects__body__item__body__append__link__icon"})],8,e_),o(s,{class:"projects__body__item__body__append__link",to:{name:"project",params:{project:t.linkProject}}},{default:a(()=>[o(W,{class:"projects__body__item__body__append__link__icon"})]),_:2},1032,["to"])])])]))),128))])])}}},o_=d(t_,[["__scopeId","data-v-b9da4720"]]),r_={__name:"HomeView",setup(e){const{fullPath:r,meta:l}=w(),{title:s,description:t}=l;return $({title:`${s} | `,meta:[{name:"description",content:t},{property:"og:title",content:`${s} | Jana Wernick \u2014 Frontend Development`},{property:"og:url",content:`https://janawernick.dev${r}`}],link:[{rel:"canonical",href:`https://janawernick.dev${r}`}]}),(p,s_)=>(n(),c(y,null,[o(M),o(o_)],64))}};export{r_ as default};
