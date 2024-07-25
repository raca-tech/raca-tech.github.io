import{q as e,m as a,K as t,s as l,v as s,p as n,n as d,ad as r,I as i,z as p,Z as o,ae as u,a1 as v,af as c,y,ag as m,A as b,ah as g,ai as f,aj as k,B as I,ak as A,D as C,E as S,al as V,G as x,am as _,an as h,ao as B,ap as N,aq as j,ar as q,as as z,at as L,au as T,av as w,c as D,aw as E,ax as G,ay as K,L as O,az as R}from"./index-DIhevQLX.js";const Z=e()({name:"VCardActions",props:a(),setup(e,a){let{slots:n}=a;return t({VBtn:{slim:!0,variant:"text"}}),l((()=>{var a;return s("div",{class:["v-card-actions",e.class],style:e.style},[null==(a=n.default)?void 0:a.call(n)])})),{}}}),F=n({opacity:[Number,String],...a(),...d()},"VCardSubtitle"),H=e()({name:"VCardSubtitle",props:F(),setup(e,a){let{slots:t}=a;return l((()=>s(e.tag,{class:["v-card-subtitle",e.class],style:[{"--v-card-subtitle-opacity":e.opacity},e.style]},t))),{}}}),J=r("v-card-title"),M=n({appendAvatar:String,appendIcon:i,prependAvatar:String,prependIcon:i,subtitle:[String,Number],title:[String,Number],...a(),...p()},"VCardItem"),P=e()({name:"VCardItem",props:M(),setup(e,a){let{slots:t}=a;return l((()=>{var a;const l=!(!e.prependAvatar&&!e.prependIcon),n=!(!l&&!t.prepend),d=!(!e.appendAvatar&&!e.appendIcon),r=!(!d&&!t.append),i=!(null==e.title&&!t.title),p=!(null==e.subtitle&&!t.subtitle);return s("div",{class:["v-card-item",e.class],style:e.style},[n&&s("div",{key:"prepend",class:"v-card-item__prepend"},[t.prepend?s(c,{key:"prepend-defaults",disabled:!l,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},t.prepend):s(o,null,[e.prependAvatar&&s(u,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&s(v,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)])]),s("div",{class:"v-card-item__content"},[i&&s(J,{key:"title"},{default:()=>{var a;return[(null==(a=t.title)?void 0:a.call(t))??e.title]}}),p&&s(H,{key:"subtitle"},{default:()=>{var a;return[(null==(a=t.subtitle)?void 0:a.call(t))??e.subtitle]}}),null==(a=t.default)?void 0:a.call(t)]),r&&s("div",{key:"append",class:"v-card-item__append"},[t.append?s(c,{key:"append-defaults",disabled:!d,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},t.append):s(o,null,[e.appendIcon&&s(v,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&s(u,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)])])])})),{}}}),Q=n({opacity:[Number,String],...a(),...d()},"VCardText"),U=e()({name:"VCardText",props:Q(),setup(e,a){let{slots:t}=a;return l((()=>s(e.tag,{class:["v-card-text",e.class],style:[{"--v-card-text-opacity":e.opacity},e.style]},t))),{}}}),W=n({appendAvatar:String,appendIcon:i,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:i,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number],text:[String,Number],title:[String,Number],...y(),...a(),...p(),...m(),...b(),...g(),...f(),...k(),...I(),...A(),...d(),...C(),...S({variant:"elevated"})},"VCard"),X=e()({name:"VCard",directives:{Ripple:V},props:W(),setup(e,a){let{attrs:t,slots:n}=a;const{themeClasses:d}=x(e),{borderClasses:r}=_(e),{colorClasses:i,colorStyles:p,variantClasses:o}=h(e),{densityClasses:u}=B(e),{dimensionStyles:v}=N(e),{elevationClasses:y}=j(e),{loaderClasses:m}=q(e),{locationStyles:b}=z(e),{positionClasses:g}=L(e),{roundedClasses:f}=T(e),k=w(e,t),I=D((()=>!1!==e.link&&k.isLink.value)),A=D((()=>!e.disabled&&!1!==e.link&&(e.link||k.isClickable.value)));return l((()=>{const a=I.value?"a":e.tag,t=!(!n.title&&null==e.title),l=!(!n.subtitle&&null==e.subtitle),C=t||l,S=!!(n.append||e.appendAvatar||e.appendIcon),V=!!(n.prepend||e.prependAvatar||e.prependIcon),x=!(!n.image&&!e.image),_=C||V||S,h=!(!n.text&&null==e.text);return E(s(a,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":A.value},d.value,r.value,i.value,u.value,y.value,m.value,g.value,f.value,o.value,e.class],style:[p.value,v.value,b.value,e.style],href:k.href.value,onClick:A.value&&k.navigate,tabindex:e.disabled?-1:void 0},{default:()=>{var a;return[x&&s("div",{key:"image",class:"v-card__image"},[n.image?s(c,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},n.image):s(K,{key:"image-img",cover:!0,src:e.image},null)]),s(O,{name:"v-card",active:!!e.loading,color:"boolean"==typeof e.loading?void 0:e.loading},{default:n.loader}),_&&s(P,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:n.item,prepend:n.prepend,title:n.title,subtitle:n.subtitle,append:n.append}),h&&s(U,{key:"text"},{default:()=>{var a;return[(null==(a=n.text)?void 0:a.call(n))??e.text]}}),null==(a=n.default)?void 0:a.call(n),n.actions&&s(Z,null,{default:n.actions}),R(A.value,"v-card")]}}),[[G("ripple"),A.value&&e.ripple]])})),{}}});export{X as V,J as a,U as b};
