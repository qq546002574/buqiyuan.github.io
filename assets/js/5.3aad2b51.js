(window.webpackJsonp=window.webpackJsonp||[]).push([[5,14],{236:function(t,e,i){},237:function(t,e,i){},238:function(t,e,i){},271:function(t,e,i){},272:function(t,e,i){},283:function(t,e,i){},284:function(t,e,i){},285:function(t,e,i){},286:function(t,e,i){},287:function(t,e,i){},288:function(t,e,i){},289:function(t,e,i){},290:function(t,e,i){},291:function(t,e,i){},292:function(t,e,i){"use strict";var n=i(236);i.n(n).a},293:function(t,e,i){t.exports=i.p+"assets/img/poke_ball.d6cc89a7.gif"},294:function(t,e,i){"use strict";var n=i(237);i.n(n).a},295:function(t,e,i){"use strict";var n=i(238);i.n(n).a},297:function(t,e,i){},298:function(t,e,i){},341:function(t,e,i){"use strict";i.r(e);var n={name:"APlayer",data:function(){return{}},mounted:function(){}},s=(i(292),i(12)),a=Object(s.a)(n,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("link",{attrs:{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.css"}}),this._v(" "),e("script",{attrs:{src:"https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js"}}),this._v(" "),e("script",{attrs:{src:"https://cdn.jsdelivr.net/npm/meting@2/dist/Meting.min.js"}}),this._v(" "),e("meting-js",{pre:!0,attrs:{id:"meting-js",fixed:"true",mini:"true",auto:"https://y.qq.com/n/yqq/playlist/2949360967.html"}})],1)}],!1,null,"dc323f8c",null);e.default=a.exports},342:function(t,e,i){"use strict";i.r(e);i(234),i(256);var n={data:function(){return{timerId:null,msgTimer:null,moveElem:null,dragging:!1,tLeft:0,tTop:0,animaCount:0,doAnimation:null,tiaIndex:0,oldModelNum:0,musicUrl:"",musicList:[{title:"珍爱日漫集",url:"https://y.qq.com/n/yqq/playlist/2949360967.html"},{title:"国语经典与心共鸣",url:"https://y.qq.com/n/yqq/playlist/2949821647.html"},{title:"游戏党必备",url:"https://y.qq.com/n/yqq/playlist/2949361041.html"},{title:"经典粤语金曲",url:"https://y.qq.com/n/yqq/playlist/2949823435.html"},{title:"能拨动心弦的轻音乐",url:"https://y.qq.com/n/yqq/playlist/2949360725.html"},{title:"欧美抖腿系列",url:"https://y.qq.com/n/yqq/playlist/2949811232.html"}],wifeMsg:["哼！竟然敢屏蔽我","我真的生气了！快点来哄我~~","呜呜~为什么还不肯见我？一定是我哪里做的不够好···","哼哼，其实一个人在这里呆着也挺好的，啦啦啦~","啊~好无聊啊！为什么你还不来找我~","你一定是不爱我了~~再见！"],animationList:["fadeInLeft","lightSpeedIn","zoomIn","swing","heartBeat","wobble"],personModel:"/live2dModels/live2d/model/kesshouban/model.json",basePath:"/live2dModels/live2d/model/",modelPaths:[],tipsList:[{id:1,icon:["fab","github"],tips:"github"},{id:2,icon:["fas","music"],tips:"切换歌单"},{id:3,icon:["fas","exchange-alt"],tips:"换人"},{id:4,icon:["fas","tshirt"],tips:"换装"},{id:5,icon:["fas","power-off"],tips:"关闭"}]}},created:function(){this.modelPaths=["".concat(this.basePath,"kesshouban/model.json"),"".concat(this.basePath,"tia/model4.json"),"".concat(this.basePath,"pio/0.json"),"".concat(this.basePath,"z16/z16.model.json"),"".concat(this.basePath,"epsilon/Epsilon2.1.model.json"),"".concat(this.basePath,"remu/rem.json")]},mounted:function(){var t=this;this.moveElem=this.$refs.wife,window.addEventListener("load",function(){loadlive2d("live2d",t.personModel=t.modelPaths[t.oldModelNum])})},methods:{clickTool:function(t){var e=this;switch(t){case 1:window.open("https://github.com/buqiyuan");break;case 3:this.switchModel();break;case 4:this.switchClothes();break;case 5:this.$refs.wife.style.display="none",console.log("你。。好狠心！再见~~"),this.$refs.PokeBall.classList.remove("poke-ball-hide","animated","fadeOutUp"),this.$refs.PokeBall.classList.add("poke-ball-show","animated","bounceInDown");var i=0;this.animaCount=0,this.$refs.wifeMsg.classList.add("animated",this.animationList[0]),this.$refs.wifeMsg.innerText=this.wifeMsg[i++],this.doAnimation=function(){e.animaCount>=e.animationList.length&&(e.animaCount=0),e.$refs.wifeMsg.classList.remove(e.animationList[e.animaCount]),e.animaCount++},this.msgTimer=setInterval(function(){if(i>e.wifeMsg.length-1){clearInterval(e.msgTimer);for(var t=e.$refs.liveContainer;t.hasChildNodes();)t.removeChild(t.lastChild);L2Dwidget.init()}else e.$refs.wifeMsg.classList.add(e.animationList[e.animaCount]||"fadeIn"),e.$refs.wifeMsg.innerText=e.wifeMsg[i++]},3e3),this.$refs.wifeMsg.addEventListener("animationend",this.doAnimation)}},switchMusic:function(t){this.$nextTick(function(){if(""==t.trim()||-1==t.indexOf("http"))return alert("请输入有效的歌单链接");var e=document.querySelector("meting-js");e.setAttribute("auto",t),document.body.appendChild(e)})},setClothesTips:function(t){var e=window.event||arguments.callee.caller.arguments[0];if(4==t)if("mouseleave"==e.type)this.$refs.tipsText[3].innerText="换装";else if("mouseenter"==e.type){if(this.personModel.indexOf("tia")>0)return void(this.$refs.tipsText[3].innerText="换装(共4套)");if(this.personModel.indexOf("pio")>0)return void(this.$refs.tipsText[3].innerText="换装(共50套)");this.$refs.tipsText[3].innerText="换装(无服装)"}},switchClothes:function(){if(this.personModel.indexOf("tia")>0)return this.tiaIndex++,this.tiaIndex>3&&(this.tiaIndex=0),void loadlive2d("live2d","/live2dModels/live2d/model/tia/model"+this.tiaIndex+".json");this.personModel.indexOf("pio")>0?loadlive2d("live2d","/live2dModels/live2d/model/pio/"+Math.floor(50*Math.random())+".json"):console.log("不好意思！该老婆没有衣服可换了，因为鹅没钱给心爱的老婆买衣服了")},switchModel:function(){var t=this.modelPaths.length,e=Math.floor(Math.random()*t);this.oldModelNum==e&&((e=e==t-1?e-1:e+1)>t-1||e<0)&&(e=Math.floor(Math.random()*t)),this.oldModelNum=e,this.personModel=this.modelPaths[e],loadlive2d("live2d",this.modelPaths[e])},callWifeBack:function(){clearInterval(this.msgTimer),this.$refs.wife.style.display="block",console.log("哼！知道错了吧！我又回来了~~"),removeEventListener("animationend",this.doAnimation),this.$refs.wifeMsg.classList.remove(this.animationList[this.animaCount]||"fadeIn"),this.$refs.PokeBall.classList.remove("poke-ball-show","animated","bounceInDown"),this.$refs.PokeBall.classList.add("poke-ball-hide","animated","fadeOutUp")},press:function(t){var e=this,i=(new Date).getTime(),n=this.moveElem.getBoundingClientRect();this.timerId=setInterval(function(){(new Date).getTime()-i>1200&&(clearInterval(e.timerId),e.moveElem.style.cursor="all-scroll")},200),this.dragging=!0,this.tLeft=t.clientX-n.left,this.tTop=t.clientY-n.top},loosen:function(){this.dragging=!1,clearInterval(this.timerId),this.moveElem.style.cursor="grab"},move:function(t){if(this.dragging){var e=t.clientX-this.tLeft,i=t.clientY-this.tTop;this.moveElem.style.left=e+"px",this.moveElem.style.top=i+"px",this.moveElem.style.bottom="unset",this.moveElem.style.right="unset"}}}},s=(i(294),i(295),i(12)),a=Object(s.a)(n,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{ref:"liveContainer"},[n("div",{ref:"PokeBall",staticClass:"poke-ball poke-ball-hide",on:{click:t.callWifeBack}},[n("p",{ref:"wifeMsg",staticClass:"wife-msg"}),t._v(" "),n("img",{attrs:{src:i(293)}})]),t._v(" "),n("div",{ref:"wife",staticClass:"wife",on:{mousedown:t.press,mouseup:t.loosen,mousemove:t.move}},[n("div",{staticClass:"wife-tips",staticStyle:{opacity:"0"}}),t._v(" "),n("canvas",{staticClass:"live2d",attrs:{id:"live2d",width:"280",height:"250"}}),t._v(" "),n("div",{staticClass:"tool-bar"},[n("ul",t._l(t.tipsList,function(e){return n("li",{key:e.id,staticClass:"tool-bar-item",on:{click:function(i){return t.clickTool(e.id)},mouseenter:function(i){return t.setClothesTips(e.id)},mouseleave:function(i){return t.setClothesTips(e.id)}}},[n("font-awesome-icon",{staticClass:"font-icon",attrs:{icon:e.icon,size:"xs"}}),t._v(" "),e.icon.includes("music")?n("ul",{staticClass:"switch-music"},[n("li",{staticClass:"music-input"},[n("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.musicUrl,expression:"musicUrl",modifiers:{trim:!0}}],attrs:{type:"url",placeholder:"  qq音乐或网易云歌单链接"},domProps:{value:t.musicUrl},on:{input:function(e){e.target.composing||(t.musicUrl=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),t._v(" "),n("input",{attrs:{type:"button",value:"确认"},on:{click:function(e){return t.switchMusic(t.musicUrl)}}})]),t._v(" "),t._l(t.musicList,function(e,i){return n("li",{key:i,on:{click:function(i){return t.switchMusic(e.url)}}},[t._v(t._s(e.title))])})],2):t._e(),t._v(" "),n("span",{ref:"tipsText",refInFor:!0,staticClass:"tool-tips"},[t._v(t._s(e.tips))])],1)}),0)])])]),t._v(" "),n("canvas",{staticClass:"fireworks",staticStyle:{position:"fixed",left:"0",top:"0","z-index":"88","pointer-events":"none"}}),t._v(" "),n("script",{pre:!0,attrs:{src:"https://cdn.bootcss.com/jquery/2.2.4/jquery.min.js"}}),t._v(" "),n("script",{pre:!0,attrs:{type:"text/javascript",src:"/lib/bomb.js"}}),t._v(" "),n("script",{pre:!0,attrs:{defer:"",src:"/live2dModels/live2d/js/live2d.js"}}),t._v(" "),n("script",{pre:!0,attrs:{async:"",defer:"",src:"/live2dModels/live2d/js/wife.js"}}),t._v(" "),n("script",{pre:!0,attrs:{type:"text/javascript",charset:"utf-8",async:"",defer:"",src:"/lib/L2Dwidget.min.js"}}),t._v(" "),n("script",{pre:!0,attrs:{type:"text/javascript",charset:"utf-8",async:"",defer:"",src:"/lib/L2Dwidget.0.min.js"}})])},[],!1,null,"f0c309c2",null);e.default=a.exports},351:function(t,e,i){},352:function(t,e,i){"use strict";var n=i(271);i.n(n).a},353:function(t,e,i){"use strict";var n=i(272);i.n(n).a},392:function(t,e,i){"use strict";var n=i(283);i.n(n).a},393:function(t,e,i){"use strict";var n=i(284);i.n(n).a},394:function(t,e,i){"use strict";var n=i(285);i.n(n).a},395:function(t,e,i){"use strict";var n=i(286);i.n(n).a},398:function(t,e,i){"use strict";var n=i(287);i.n(n).a},399:function(t,e,i){"use strict";var n=i(288);i.n(n).a},400:function(t,e,i){"use strict";var n=i(289);i.n(n).a},401:function(t,e,i){"use strict";var n=i(290);i.n(n).a},404:function(t,e,i){"use strict";var n=i(291);i.n(n).a},406:function(t,e,i){"use strict";var n=i(297);i.n(n).a},407:function(t,e,i){"use strict";var n=i(298);i.n(n).a},481:function(t,e,i){"use strict";i.r(e);i(224),i(311),i(253),i(348),i(234),i(312),i(313),i(121),i(125),i(349),i(266),i(269),i(270);var n=/#.*$/,s=/\.(md|html)$/,a=/\/$/,r=/^(https?:|mailto:|tel:)/;function o(t){return decodeURI(t).replace(n,"").replace(s,"")}function l(t){return r.test(t)}function c(t){if(l(t))return t;var e=t.match(n),i=e?e[0]:"",s=o(t);return a.test(s)?t:s+".html"+i}function u(t,e){var i=t.hash,s=function(t){var e=t.match(n);if(e)return e[0]}(e);return(!s||i===s)&&o(t.path)===o(e)}function d(t,e,i){i&&(e=function(t,e,i){var n=t.charAt(0);if("/"===n)return t;if("?"===n||"#"===n)return e+t;var s=e.split("/");i&&s[s.length-1]||s.pop();for(var a=t.replace(/^\//,"").split("/"),r=0;r<a.length;r++){var o=a[r];".."===o?s.pop():"."!==o&&s.push(o)}""!==s[0]&&s.unshift("");return s.join("/")}(e,i));var n=o(e);return n in t?Object.assign({},t[n],{type:"page",path:c(t[n].path)}):(console.error('[vuepress] No matching page found for sidebar item "'.concat(e,'"')),{})}function h(t,e,i,n){var s=i.pages,a=i.themeConfig,r=n&&a.locales&&a.locales[n]||a;if("auto"===(t.frontmatter.sidebar||r.sidebar||a.sidebar))return function(t){var e=p(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,children:e.map(function(e){return{type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}})}]}(t);var l=r.sidebar||a.sidebar,c=s.reduce(function(t,e){return t[o(e.regularPath)]=e,t},{});if(l){var u=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(var i in e)if(0===(n=t,/(\.html|\/)$/.test(n)?n:n+"/").indexOf(i))return{base:i,config:e[i]};var n;return{}}(e,l),h=u.base,f=u.config;return f?f.map(function(t){return function t(e,i,n,s){if("string"==typeof e)return d(i,e,n);if(Array.isArray(e))return Object.assign(d(i,e[0],n),{title:e[1]});s&&console.error("[vuepress] Nested sidebar groups are not supported. Consider using navbar + categories instead.");var a=e.children||[];return{type:"group",title:e.title,children:a.map(function(e){return t(e,i,n,!0)}),collapsable:!1!==e.collapsable}}(t,c,h)}):[]}return[]}function p(t){var e;return(t=t.map(function(t){return Object.assign({},t)})).forEach(function(t){2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)}),t.filter(function(t){return 2===t.level})}function f(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}var m={props:{item:{required:!0}},computed:{link:function(){return c(this.item.link)},exact:function(){var t=this;return this.$site.locales?Object.keys(this.$site.locales).some(function(e){return e===t.link}):"/"===this.link}},methods:{isExternal:l,isMailto:function(t){return/^mailto:/.test(t)},isTel:function(t){return/^tel:/.test(t)}}},v=i(12),g=Object(v.a)(m,function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.isExternal(t.link)?i("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.isMailto(t.link)||t.isTel(t.link)?null:"_blank",rel:t.isMailto(t.link)||t.isTel(t.link)?null:"noopener noreferrer"}},[t._v("\n  "+t._s(t.item.text)+"\n  "),i("OutboundLink")],1):i("router-link",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact}},[t._v(t._s(t.item.text))])},[],!1,null,null,null).exports,b=(i(351),{components:{NavLink:g},computed:{data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}}}}),_=(i(352),Object(v.a)(b,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("main",{staticClass:"home",attrs:{"aria-labelledby":"main-title"}},[i("header",{staticClass:"hero"},[i("div",{staticClass:"model-left"}),t._v(" "),i("div",{staticClass:"model-right"}),t._v(" "),i("div",{staticStyle:{position:"relative","z-index":"2"}},[t.data.heroImage?i("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:"hero"}}):t._e(),t._v(" "),i("h1",{attrs:{id:"main-title"}},[t._v(t._s(t.data.heroText||t.$title||"Hello"))]),t._v(" "),i("p",{staticClass:"description"},[t._v("\n        "+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n      ")]),t._v(" "),t.data.actionText&&t.data.actionLink?i("p",{staticClass:"action"},[i("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()])]),t._v(" "),t.data.features&&t.data.features.length?i("div",{staticClass:"features"},t._l(t.data.features,function(e,n){return i("div",{key:n,staticClass:"feature"},[i("h2",[t._v(t._s(e.title))]),t._v(" "),i("p",[t._v(t._s(e.details))])])}),0):t._e(),t._v(" "),i("Content",{staticClass:"custom"}),t._v(" "),t.data.footer?i("div",{staticClass:"footer"},[t._v("\n    "+t._s(t.data.footer)+"\n  ")]):t._e(),t._v(" "),i("script",[t._v("\n    (function () {\n      var bp = document.createElement('script');\n      var curProtocol = window.location.protocol.split(':')[0];\n      if (curProtocol === 'https') {\n        bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';\n      } else {\n        bp.src = 'http://push.zhanzhang.baidu.com/push.js';\n      }\n      var s = document.getElementsByTagName('script')[0];\n      s.parentNode.insertBefore(bp, s);\n    })();\n  ")])],1)},[],!1,null,null,null).exports),k=(i(353),Object(v.a)({},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"sidebar-button",on:{click:function(e){return t.$emit("toggle-sidebar")}}},[i("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"}},[i("path",{attrs:{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"}})])])},[],!1,null,null,null).exports),w=i(479),C=(i(355),i(345)),x={name:"DropdownTransition",methods:{setHeight:function(t){t.style.height=t.scrollHeight+"px"},unsetHeight:function(t){t.style.height=""}}},y=(i(392),Object(v.a)(x,function(){var t=this.$createElement;return(this._self._c||t)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)},[],!1,null,null,null).exports),$={components:{NavLink:g,DropdownTransition:y},data:function(){return{open:!1}},props:{item:{required:!0}},methods:{toggle:function(){this.open=!this.open}}},L=(i(393),{components:{NavLink:g,DropdownLink:Object(v.a)($,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[i("a",{staticClass:"dropdown-title",on:{click:t.toggle}},[i("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),i("span",{staticClass:"arrow",class:t.open?"down":"right"})]),t._v(" "),i("DropdownTransition",[i("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,function(e,n){return i("li",{key:e.link||n,staticClass:"dropdown-item"},["links"===e.type?i("h4",[t._v(t._s(e.text))]):t._e(),t._v(" "),"links"===e.type?i("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(e.items,function(t){return i("li",{key:t.link,staticClass:"dropdown-subitem"},[i("NavLink",{attrs:{item:t}})],1)}),0):i("NavLink",{attrs:{item:e}})],1)}),0)])],1)},[],!1,null,null,null).exports},computed:{userNav:function(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav:function(){var t=this,e=this.$site.locales;if(e&&Object.keys(e).length>1){var i=this.$page.path,n=this.$router.options.routes,s=this.$site.themeConfig.locales||{},a={text:this.$themeLocaleConfig.selectText||"Languages",items:Object.keys(e).map(function(a){var r,o=e[a],l=s[a]&&s[a].label||o.lang;return o.lang===t.$lang?r=i:(r=i.replace(t.$localeConfig.path,a),n.some(function(t){return t.path===r})||(r=a)),{text:l,link:r}})};return[].concat(Object(C.a)(this.userNav),[a])}return this.userNav},userLinks:function(){return(this.nav||[]).map(function(t){return Object.assign(f(t),{items:(t.items||[]).map(f)})})},repoLink:function(){var t=this.$site.themeConfig.repo;if(t)return/^https?:/.test(t)?t:"https://github.com/".concat(t)},repoLabel:function(){if(this.repoLink){if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;for(var t=this.repoLink.match(/^https?:\/\/[^\/]+/)[0],e=["GitHub","GitLab","Bitbucket"],i=0;i<e.length;i++){var n=e[i];if(new RegExp(n,"i").test(t))return n}return"Source"}}}}),T=(i(394),Object(v.a)(L,function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.userLinks.length||t.repoLink?i("nav",{staticClass:"nav-links"},[t._l(t.userLinks,function(t){return i("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?i("DropdownLink",{attrs:{item:t}}):i("NavLink",{attrs:{item:t}})],1)}),t._v(" "),t.repoLink?i("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n    "+t._s(t.repoLabel)+"\n    "),i("OutboundLink")],1):t._e()],2):t._e()},[],!1,null,null,null).exports);function E(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var j={components:{SidebarButton:k,NavLinks:T,SearchBox:w.a,AlgoliaSearchBox:{}},data:function(){return{linksWrapMaxWidth:null}},mounted:function(){var t=this,e=parseInt(E(this.$el,"paddingLeft"))+parseInt(E(this.$el,"paddingRight")),i=function(){document.documentElement.clientWidth<719?t.linksWrapMaxWidth=null:t.linksWrapMaxWidth=t.$el.offsetWidth-e-(t.$refs.siteName&&t.$refs.siteName.offsetWidth||0)};i(),window.addEventListener("resize",i,!1)},computed:{algolia:function(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch:function(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}}},S=(i(395),Object(v.a)(j,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("header",{staticClass:"navbar"},[i("SidebarButton",{on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}),t._v(" "),i("router-link",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?i("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e(),t._v(" "),t.$siteTitle?i("span",{ref:"siteName",staticClass:"site-name",class:{"can-hide":t.$site.themeConfig.logo}},[t._v(t._s(t.$siteTitle))]):t._e()]),t._v(" "),i("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[t.isAlgoliaSearch?i("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search?i("SearchBox"):t._e(),t._v(" "),i("NavLinks",{staticClass:"can-hide"})],1)],1)},[],!1,null,null,null).exports);function M(t,e,i){var n=[];e.forEach(function(t){"group"===t.type?n.push.apply(n,Object(C.a)(t.children||[])):n.push(t)});for(var s=0;s<n.length;s++){var a=n[s];if("page"===a.type&&a.path===decodeURIComponent(t.path))return n[s+i]}}var I={props:["sidebarItems"],mounted:function(){this.renderValine()},watch:{$route:function(t,e){t.path!=e.path&&this.renderValine()}},computed:{lastUpdated:function(){return this.$page.lastUpdated},lastUpdatedText:function(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},prev:function(){var t,e,i=this.$page.frontmatter.prev;return!1===i?void 0:i?d(this.$site.pages,i,this.$route.path):(t=this.$page,e=this.sidebarItems,M(t,e,-1))},next:function(){var t,e,i=this.$page.frontmatter.next;return!1===i?void 0:i?d(this.$site.pages,i,this.$route.path):(t=this.$page,e=this.sidebarItems,M(t,e,1))},editLink:function(){if(!1!==this.$page.frontmatter.editLink){var t=this.$site.themeConfig,e=t.repo,i=t.editLinks,n=t.docsDir,s=void 0===n?"":n,r=t.docsBranch,l=void 0===r?"master":r,c=t.docsRepo,u=void 0===c?e:c,d=o(this.$page.path);return a.test(d)?d+="README.md":d+=".md",u&&i?this.createEditLink(e,u,s,l,d):void 0}},editLinkText:function(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{renderValine:function(){var t=document.querySelector(".page"),e=document.getElementById("vcomments");e||((e=document.createElement("div")).id="vcomments"),this.$page.frontmatter.hideFooter?e.remove():(t&&!e?t.appendChild(e):(t=document.querySelector(".page")).appendChild(e),this.valine())},valine:function(){var t=i(396),e=i(397);"undefined"!=typeof window&&(window.AV=e),new t({el:"#vcomments",appId:"****************************",appKey:"***********************",verify:!1,notify:!0,visitor:!0,avatar:"wavatar",placeholder:"春霄苦短，少女前进吧！\n夜は短し歩けよ乙女！\nYoru wa Mijikashi Arukeyo Otome!\nThe Night is Short, Walk on Girl!",path:window.location.pathname})},createEditLink:function(t,e,i,n,s){return/bitbucket.org/.test(t)?(r.test(e)?e:t).replace(a,"")+"/".concat(n)+(i?"/"+i.replace(a,""):"")+s+"?mode=edit&spa=0&at=".concat(n,"&fileviewer=file-view-default"):(r.test(e)?e:"https://github.com/".concat(e)).replace(a,"")+"/edit/".concat(n)+(i?"/"+i.replace(a,""):"")+s}}},O=(i(398),Object(v.a)(I,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("main",{staticClass:"page"},[t._t("top"),t._v(" "),i("Content",{staticClass:"content default"}),t._v(" "),t.$page.frontmatter.hideFooter?t._e():i("footer",{staticClass:"page-edit"},[t.editLink?i("div",{staticClass:"edit-link"},[i("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),i("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?i("div",{staticClass:"last-updated"},[i("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+": ")]),t._v(" "),i("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()]),t._v(" "),t.prev||t.next?i("div",{staticClass:"page-nav"},[i("p",{staticClass:"inner"},[t.prev?i("span",{staticClass:"prev"},[t._v("\n        ←\n        "),t.prev?i("router-link",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v("\n          "+t._s(t.prev.title||t.prev.path)+"\n        ")]):t._e()],1):t._e(),t._v(" "),t.next?i("span",{staticClass:"next"},[t.next?i("router-link",{attrs:{to:t.next.path}},[t._v("\n          "+t._s(t.next.title||t.next.path)+"\n        ")]):t._e(),t._v("\n        →\n      ")],1):t._e()])]):t._e(),t._v(" "),t._t("bottom")],2)},[],!1,null,null,null).exports);function P(t,e,i,n){return t("router-link",{props:{to:e,activeClass:"",exactActiveClass:""},class:{active:n,"sidebar-link":!0}},i)}function q(t,e,i,n,s){var a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1;return!e||a>s?null:t("ul",{class:"sidebar-sub-headers"},e.map(function(e){var r=u(n,i+"#"+e.slug);return t("li",{class:"sidebar-sub-header"},[P(t,i+"#"+e.slug,e.title,r),q(t,e.children,i,n,s,a+1)])}))}var N={functional:!0,props:["item"],render:function(t,e){var i=e.parent,s=i.$page,a=i.$site,r=i.$route,o=e.props.item,l=u(r,o.path),c="auto"===o.type?l||o.children.some(function(t){return u(r,o.basePath+"#"+t.slug)}):l,d=P(t,o.path,o.title||o.path,c),h=null!=s.frontmatter.sidebarDepth?s.frontmatter.sidebarDepth:a.themeConfig.sidebarDepth,f=null==h?1:h,m=!!a.themeConfig.displayAllHeaders;return"auto"===o.type?[d,q(t,o.children,o.basePath,r,f)]:(c||m)&&o.headers&&!n.test(o.path)?[d,q(t,p(o.headers),o.path,r,f)]:d}},B=(i(399),Object(v.a)(N,void 0,void 0,!1,null,null,null).exports),A={name:"SidebarGroup",props:["item","first","open","collapsable"],components:{SidebarLink:B,DropdownTransition:y}};i(400);var D={components:{SidebarGroup:Object(v.a)(A,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"sidebar-group",class:{first:t.first,collapsable:t.collapsable}},[i("p",{staticClass:"sidebar-heading",class:{open:t.open},on:{click:function(e){return t.$emit("toggle")}}},[i("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?i("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]),t._v(" "),i("DropdownTransition",[t.open||!t.collapsable?i("ul",{ref:"items",staticClass:"sidebar-group-items"},t._l(t.item.children,function(t){return i("li",[i("SidebarLink",{attrs:{item:t}})],1)}),0):t._e()])],1)},[],!1,null,null,null).exports,SidebarLink:B,NavLinks:T},props:["items"],data:function(){return{openGroupIndex:0}},created:function(){this.refreshIndex()},watch:{$route:function(){this.refreshIndex()}},methods:{refreshIndex:function(){var t=function(t,e){for(var i=0;i<e.length;i++){var n=e[i];if("group"===n.type&&n.children.some(function(e){return u(t,e.path)}))return i}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup:function(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive:function(t){return u(this.$route,t.regularPath)}}},U=(i(401),Object(v.a)(D,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("aside",{staticClass:"sidebar"},[i("NavLinks"),t._v(" "),t._t("top"),t._v(" "),t.items.length?i("ul",{staticClass:"sidebar-links"},t._l(t.items,function(e,n){return i("li",{key:n},["group"===e.type?i("SidebarGroup",{attrs:{item:e,first:0===n,open:n===t.openGroupIndex,collapsable:e.collapsable||e.collapsible},on:{toggle:function(e){return t.toggleGroup(n)}}}):i("SidebarLink",{attrs:{item:e}})],1)}),0):t._e(),t._v(" "),t._t("bottom")],2)},[],!1,null,null,null).exports),z=(i(402),i(403)),W=i.n(z),H={props:{threshold:{type:Number,default:300}},data:function(){return{scrollTop:null,scrollEnd:null}},mounted:function(){var t=this;this.scrollTop=this.getScrollTop(),this.scrollEnd=this.getScrollEnd(),window.addEventListener("scroll",W()(function(){t.scrollTop=t.getScrollTop(),t.scrollEnd=t.getScrollEnd()},100))},methods:{getScrollTop:function(){return window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0},getScrollEnd:function(){return document.documentElement.scrollHeight||document.body.scrollHeight||this.threshold},scrollToTop:function(){window.scrollTo({top:0,behavior:"smooth"}),this.scrollTop=0},scrollToEnd:function(){window.scrollTo({top:this.scrollEnd,behavior:"smooth"}),this.scrollTop=this.scrollEnd}},computed:{topShow:function(){return this.scrollTop>this.threshold},endShow:function(){return this.scrollEnd-this.scrollTop>3*this.threshold}}},G=(i(404),Object(v.a)(H,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition-group",{attrs:{name:"fade"}},[t.topShow?i("svg",{key:"goTop",staticClass:"go-to-top",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 49.484 28.284"},on:{click:t.scrollToTop}},[i("g",{attrs:{transform:"translate(-229 -126.358)"}},[i("rect",{attrs:{fill:"currentColor",width:"35",height:"5",rx:"2",transform:"translate(229 151.107) rotate(-45)"}}),t._v(" "),i("rect",{attrs:{fill:"currentColor",width:"35",height:"5",rx:"2",transform:"translate(274.949 154.642) rotate(-135)"}})])]):t._e(),t._v(" "),t.endShow?i("svg",{key:"goEnd",staticClass:"go-to-top go-to-end",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 49.484 28.284"},on:{click:t.scrollToEnd}},[i("g",{attrs:{transform:"translate(-229 -126.358)"}},[i("rect",{attrs:{fill:"currentColor",width:"35",height:"5",rx:"2",transform:"translate(229 151.107) rotate(-45)"}}),t._v(" "),i("rect",{attrs:{fill:"currentColor",width:"35",height:"5",rx:"2",transform:"translate(274.949 154.642) rotate(-135)"}})])]):t._e()])},[],!1,null,"0a389ab2",null).exports),R=i(341),V=i(342),Y={components:{Home:_,Page:O,Sidebar:U,Navbar:S,BackToTop:G,APlayer:R.default,Live2D:V.default},data:function(){return{isSidebarOpen:!1,isPc:!1}},computed:{shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar:function(){var t=this.$page.frontmatter;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems:function(){return h(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted:function(){var t=this;document.documentElement.clientWidth>760&&(this.isPc=!0),this.$router.afterEach(function(){t.isSidebarOpen=!1})},methods:{toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen},onTouchStart:function(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd:function(t){var e=t.changedTouches[0].clientX-this.touchStart.x,i=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(i)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}},X=(i(405),i(406),i(407),Object(v.a)(Y,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?i("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),i("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),i("Sidebar",{staticClass:"slide-bar",attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar}},[t._t("sidebar-top",null,{slot:"top"}),t._v(" "),t._t("sidebar-bottom",null,{slot:"bottom"})],2),t._v(" "),t.$page.frontmatter.home?i("Home"):i("Page",{attrs:{"sidebar-items":t.sidebarItems}},[t._t("page-top",null,{slot:"top"}),t._v(" "),t._t("page-bottom",null,{slot:"bottom"})],2),t._v(" "),i("BackToTop"),t._v(" "),i("APlayer"),t._v(" "),t.isPc?i("Live2D"):t._e(),t._v(" "),i("script",[t._v("\n    (function () {\n      var bp = document.createElement('script');\n      var curProtocol = window.location.protocol.split(':')[0];\n      if (curProtocol === 'https') {\n        bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';\n      } else {\n        bp.src = 'http://push.zhanzhang.baidu.com/push.js';\n      }\n      var s = document.getElementsByTagName(\"script\")[0];\n      s.parentNode.insertBefore(bp, s);\n    })();\n  ")])],1)},[],!1,null,"0c6888c5",null));e.default=X.exports}}]);