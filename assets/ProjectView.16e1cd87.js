import{o as e,c as a,a as l,t as i,n as y,F as u,f as m,i as _,u as p,j as g,k as b}from"./index.0a767fb1.js";import{N as k}from"./NotFound.7a63f015.js";import{a as h}from"./projects.c7baf574.js";const f={class:"project__header__title"},$={__name:"HeaderTemplate",props:["url","title"],setup(t){return(s,o)=>(e(),a("div",{class:"project__header",style:y({backgroundImage:`url(${t.url})`})},[l("h1",f,i(t.title),1)],4))}},x={class:"project__links"},v=["href"],w={__name:"LinksTemplate",props:["links"],setup(t){return(s,o)=>(e(),a("div",x,[(e(!0),a(u,null,m(t.links,(n,c)=>(e(),a("a",{key:c,class:"project__links__item",href:n.href,target:"_blank"},i(n.text),9,v))),128))]))}},T={class:"project__body"},I={class:"project__body__title"},B={__name:"HeadingTemplate",props:["heading"],setup(t){return(s,o)=>(e(),a("div",T,[l("h2",I,i(t.heading),1)]))}},N={class:"project__body"},P={class:"project__body__subtitle"},F={__name:"SubheadingTemplate",props:["subheading"],setup(t){return(s,o)=>(e(),a("div",N,[l("h3",P,i(t.subheading),1)]))}},L={class:"project__body"},S={class:"project__body__paragraph"},V={__name:"ParagraphTemplate",props:["paragraph"],setup(t){return(s,o)=>(e(),a("div",L,[l("p",S,i(t.paragraph),1)]))}},E={class:"project__body"},H=["src","alt"],z={__name:"ImageTemplate",props:["src","alt"],setup(t){return(s,o)=>(e(),a("div",E,[l("img",{class:"project__body__image",src:t.src,alt:t.alt},null,8,H)]))}},C={class:"project__body"},D={class:"project__body__list"},R={__name:"ListTemplate",props:["list"],setup(t){return(s,o)=>(e(),a("div",C,[l("ul",D,[(e(!0),a(u,null,m(t.list,(n,c)=>(e(),a("li",{key:c,class:"project__body__list__item"},i(n),1))),128))])]))}},q={class:"project__body"},A=["src","title"],G={__name:"EmbedTemplate",props:["url","title"],setup(t){return(s,o)=>(e(),a("div",q,[l("iframe",{src:t.url,class:"project__body__embed",style:{width:"100%",height:"500px",border:"0","border-radius":"4px",overflow:"hidden"},title:t.title,allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"},null,8,A)]))}};const J={class:"project"},K={__name:"ProjectTemplate",props:["project"],setup(t){const s=t,n=s.project.project.findIndex(d=>d.name==="headerImage"),c=s.project.project[n].src;return(d,M)=>(e(),a("div",J,[(e(!0),a(u,null,m(s.project.project,(r,j)=>(e(),a(u,{key:j},[r.name==="title"?(e(),_($,{key:0,url:p(c),title:r.content},null,8,["url","title"])):r.name==="links"?(e(),_(w,{key:1,links:r.links},null,8,["links"])):r.name==="heading"?(e(),_(B,{key:2,heading:r.content},null,8,["heading"])):r.name==="subheading"?(e(),_(F,{key:3,subheading:r.content},null,8,["subheading"])):r.name==="paragraph"?(e(),_(V,{key:4,paragraph:r.content},null,8,["paragraph"])):r.name==="image"?(e(),_(z,{key:5,src:r.src,alt:r.alt},null,8,["src","alt"])):r.name==="list"?(e(),_(R,{key:6,list:r.content},null,8,["list"])):r.name==="embed"?(e(),_(G,{key:7,url:r.url,title:r.title},null,8,["url","title"])):g("",!0)],64))),128))]))}},W={__name:"ProjectView",setup(t){const o=b().params.project,n=h.findIndex(c=>c.name===o);return console.log("%cparam","color: darkseagreen; font-weight: bold;",o),console.log("%ci","color: darkseagreen; font-weight: bold;",n),(c,d)=>p(n)===-1?(e(),_(k,{key:0})):p(n)!==-1?(e(),_(K,{key:1,project:p(h)[p(n)]},null,8,["project"])):g("",!0)}};export{W as default};