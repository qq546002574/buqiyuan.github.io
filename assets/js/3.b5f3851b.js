(window.webpackJsonp=window.webpackJsonp||[]).push([[3,13],{467:function(e,t,i){},483:function(e,t,i){},484:function(e,t,i){},487:function(e,t,i){},488:function(e,t,i){},489:function(e,t,i){},490:function(e,t,i){},491:function(e,t,i){},492:function(e,t,i){},493:function(e,t,i){},494:function(e,t,i){},495:function(e,t,i){},496:function(e,t,i){"use strict";var n=i(467);i.n(n).a},497:function(e,t,i){e.exports=i.p+"assets/img/poke_ball.d6cc89a7.gif"},498:function(e,t,i){},499:function(e,t,i){},501:function(e,t,i){},502:function(e,t,i){},529:function(e,t,i){"use strict";i.r(t);var n={name:"APlayer",data:function(){return{}},mounted:function(){}},s=(i(496),i(36)),o=Object(s.a)(n,(function(){var e=this.$createElement;this._self._c;return this._m(0)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("link",{attrs:{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.css"}}),this._v(" "),t("script",{attrs:{src:"https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js"}}),this._v(" "),t("script",{attrs:{src:"https://cdn.jsdelivr.net/npm/meting@2/dist/Meting.min.js"}}),this._v(" "),t("meting-js",{pre:!0,attrs:{id:"meting-js",fixed:"true",mini:"true",auto:"https://y.qq.com/n/yqq/playlist/2949360967.html"}})],1)}],!1,null,"475ad30c",null);t.default=o.exports},535:function(e,t,i){},536:function(e,t,i){"use strict";var n=i(483);i.n(n).a},539:function(e,t,i){"use strict";var n=i(484);i.n(n).a},542:function(e,t,i){"use strict";var n=i(487);i.n(n).a},543:function(e,t,i){"use strict";var n=i(488);i.n(n).a},544:function(e,t,i){"use strict";var n=i(489);i.n(n).a},545:function(e,t,i){"use strict";var n=i(490);i.n(n).a},548:function(e,t,i){"use strict";var n=i(491);i.n(n).a},549:function(e,t,i){"use strict";var n=i(492);i.n(n).a},550:function(e,t,i){"use strict";var n=i(493);i.n(n).a},551:function(e,t,i){"use strict";var n=i(494);i.n(n).a},553:function(e,t,i){"use strict";var n=i(495);i.n(n).a},554:function(e,t,i){"use strict";var n=i(498);i.n(n).a},555:function(e,t,i){"use strict";var n=i(499);i.n(n).a},557:function(e,t,i){"use strict";var n=i(501);i.n(n).a},558:function(e,t,i){"use strict";var n=i(502);i.n(n).a},622:function(e,t,i){"use strict";i.r(t);i(533),i(110),i(11),i(147),i(254),i(150),i(534),i(41),i(104),i(253),i(145),i(261),i(71),i(264),i(70),i(482),i(105),i(476),i(144);var n=/#.*$/,s=/\.(md|html)$/,o=/\/$/,a=/^(https?:|mailto:|tel:)/;function r(e){return decodeURI(e).replace(n,"").replace(s,"")}function l(e){return a.test(e)}function d(e){if(l(e))return e;var t=e.match(n),i=t?t[0]:"",s=r(e);return o.test(s)?e:s+".html"+i}function c(e,t){var i=e.hash,s=function(e){var t=e.match(n);if(t)return t[0]}(t);return(!s||i===s)&&r(e.path)===r(t)}function u(e,t,i){i&&(t=function(e,t,i){var n=e.charAt(0);if("/"===n)return e;if("?"===n||"#"===n)return t+e;var s=t.split("/");i&&s[s.length-1]||s.pop();for(var o=e.replace(/^\//,"").split("/"),a=0;a<o.length;a++){var r=o[a];".."===r?s.pop():"."!==r&&s.push(r)}""!==s[0]&&s.unshift("");return s.join("/")}(t,i));var n=r(t);return n in e?Object.assign({},e[n],{type:"page",path:d(e[n].path)}):(console.error('[vuepress] No matching page found for sidebar item "'.concat(t,'"')),{})}function p(e,t,i,n){var s=i.pages,o=i.themeConfig,a=n&&o.locales&&o.locales[n]||o;if("auto"===(e.frontmatter.sidebar||a.sidebar||o.sidebar))return function(e){var t=h(e.headers||[]);return[{type:"group",collapsable:!1,title:e.title,children:t.map((function(t){return{type:"auto",title:t.title,basePath:e.path,path:e.path+"#"+t.slug,children:t.children||[]}}))}]}(e);var l=a.sidebar||o.sidebar,d=s.reduce((function(e,t){return e[r(t.regularPath)]=t,e}),{});if(l){var c=function(e,t){if(Array.isArray(t))return{base:"/",config:t};for(var i in t)if(0===(n=e,/(\.html|\/)$/.test(n)?n:n+"/").indexOf(i))return{base:i,config:t[i]};var n;return{}}(t,l),p=c.base,m=c.config;return m?m.map((function(e){return function e(t,i,n,s){if("string"==typeof t)return u(i,t,n);if(Array.isArray(t))return Object.assign(u(i,t[0],n),{title:t[1]});s&&console.error("[vuepress] Nested sidebar groups are not supported. Consider using navbar + categories instead.");var o=t.children||[];return{type:"group",title:t.title,children:o.map((function(t){return e(t,i,n,!0)})),collapsable:!1!==t.collapsable}}(e,d,p)})):[]}return[]}function h(e){var t;return(e=e.map((function(e){return Object.assign({},e)}))).forEach((function(e){2===e.level?t=e:t&&(t.children||(t.children=[])).push(e)})),e.filter((function(e){return 2===e.level}))}function m(e){return Object.assign(e,{type:e.items&&e.items.length?"links":"link"})}var v={props:{item:{required:!0}},computed:{link:function(){return d(this.item.link)},exact:function(){var e=this;return this.$site.locales?Object.keys(this.$site.locales).some((function(t){return t===e.link})):"/"===this.link}},methods:{isExternal:l,isMailto:function(e){return/^mailto:/.test(e)},isTel:function(e){return/^tel:/.test(e)}}},f=i(36),g=Object(f.a)(v,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.isExternal(e.link)?i("a",{staticClass:"nav-link external",attrs:{href:e.link,target:e.isMailto(e.link)||e.isTel(e.link)?null:"_blank",rel:e.isMailto(e.link)||e.isTel(e.link)?null:"noopener noreferrer"}},[e._v("\n  "+e._s(e.item.text)+"\n  "),i("OutboundLink")],1):i("router-link",{staticClass:"nav-link",attrs:{to:e.link,exact:e.exact}},[e._v(e._s(e.item.text))])}),[],!1,null,null,null).exports,_=(i(535),{components:{NavLink:g},computed:{data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}}}}),b=(i(536),Object(f.a)(_,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("main",{staticClass:"home",attrs:{"aria-labelledby":"main-title"}},[i("header",{staticClass:"hero"},[i("div",{staticClass:"model-left"}),e._v(" "),i("div",{staticClass:"model-right"}),e._v(" "),i("div",{staticStyle:{position:"relative","z-index":"2"}},[e.data.heroImage?i("img",{attrs:{src:e.$withBase(e.data.heroImage),alt:"hero"}}):e._e(),e._v(" "),i("h1",{attrs:{id:"main-title"}},[e._v(e._s(e.data.heroText||e.$title||"Hello"))]),e._v(" "),i("p",{staticClass:"description"},[e._v("\n        "+e._s(e.data.tagline||e.$description||"Welcome to your VuePress site")+"\n      ")]),e._v(" "),e.data.actionText&&e.data.actionLink?i("p",{staticClass:"action"},[i("NavLink",{staticClass:"action-button",attrs:{item:e.actionLink}})],1):e._e()])]),e._v(" "),e.data.features&&e.data.features.length?i("div",{staticClass:"features"},e._l(e.data.features,(function(t,n){return i("div",{key:n,staticClass:"feature"},[i("h2",[e._v(e._s(t.title))]),e._v(" "),i("p",[e._v(e._s(t.details))])])})),0):e._e(),e._v(" "),i("Content",{staticClass:"custom"}),e._v(" "),e.data.footer?i("div",{staticClass:"footer"},[e._v("\n    "+e._s(e.data.footer)+"\n  ")]):e._e(),e._v(" "),i("script",[e._v("\n    (function () {\n      var bp = document.createElement('script');\n      var curProtocol = window.location.protocol.split(':')[0];\n      if (curProtocol === 'https') {\n        bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';\n      } else {\n        bp.src = 'http://push.zhanzhang.baidu.com/push.js';\n      }\n      var s = document.getElementsByTagName('script')[0];\n      s.parentNode.insertBefore(bp, s);\n    })();\n  ")])],1)}),[],!1,null,null,null).exports),x=(i(537),i(539),Object(f.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"sidebar-button",on:{click:function(t){return e.$emit("toggle-sidebar")}}},[i("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"}},[i("path",{attrs:{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"}})])])}),[],!1,null,null,null).exports),k=i(619),w=(i(268),i(517),i(68)),y={name:"DropdownTransition",methods:{setHeight:function(e){e.style.height=e.scrollHeight+"px"},unsetHeight:function(e){e.style.height=""}}},M=(i(542),Object(f.a)(y,(function(){var e=this.$createElement;return(this._self._c||e)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)}),[],!1,null,null,null).exports),C={components:{NavLink:g,DropdownTransition:M},data:function(){return{open:!1}},props:{item:{required:!0}},methods:{toggle:function(){this.open=!this.open}}},j=(i(543),{components:{NavLink:g,DropdownLink:Object(f.a)(C,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"dropdown-wrapper",class:{open:e.open}},[i("a",{staticClass:"dropdown-title",on:{click:e.toggle}},[i("span",{staticClass:"title"},[e._v(e._s(e.item.text))]),e._v(" "),i("span",{staticClass:"arrow",class:e.open?"down":"right"})]),e._v(" "),i("DropdownTransition",[i("ul",{directives:[{name:"show",rawName:"v-show",value:e.open,expression:"open"}],staticClass:"nav-dropdown"},e._l(e.item.items,(function(t,n){return i("li",{key:t.link||n,staticClass:"dropdown-item"},["links"===t.type?i("h4",[e._v(e._s(t.text))]):e._e(),e._v(" "),"links"===t.type?i("ul",{staticClass:"dropdown-subitem-wrapper"},e._l(t.items,(function(e){return i("li",{key:e.link,staticClass:"dropdown-subitem"},[i("NavLink",{attrs:{item:e}})],1)})),0):i("NavLink",{attrs:{item:t}})],1)})),0)])],1)}),[],!1,null,null,null).exports},computed:{userNav:function(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav:function(){var e=this,t=this.$site.locales;if(t&&Object.keys(t).length>1){var i=this.$page.path,n=this.$router.options.routes,s=this.$site.themeConfig.locales||{},o={text:this.$themeLocaleConfig.selectText||"Languages",items:Object.keys(t).map((function(o){var a,r=t[o],l=s[o]&&s[o].label||r.lang;return r.lang===e.$lang?a=i:(a=i.replace(e.$localeConfig.path,o),n.some((function(e){return e.path===a}))||(a=o)),{text:l,link:a}}))};return[].concat(Object(w.a)(this.userNav),[o])}return this.userNav},userLinks:function(){return(this.nav||[]).map((function(e){return Object.assign(m(e),{items:(e.items||[]).map(m)})}))},repoLink:function(){var e=this.$site.themeConfig.repo;if(e)return/^https?:/.test(e)?e:"https://github.com/".concat(e)},repoLabel:function(){if(this.repoLink){if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;for(var e=this.repoLink.match(/^https?:\/\/[^/]+/)[0],t=["GitHub","GitLab","Bitbucket"],i=0;i<t.length;i++){var n=t[i];if(new RegExp(n,"i").test(e))return n}return"Source"}}}}),$=(i(544),Object(f.a)(j,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.userLinks.length||e.repoLink?i("nav",{staticClass:"nav-links"},[e._l(e.userLinks,(function(e){return i("div",{key:e.link,staticClass:"nav-item"},["links"===e.type?i("DropdownLink",{attrs:{item:e}}):i("NavLink",{attrs:{item:e}})],1)})),e._v(" "),e.repoLink?i("a",{staticClass:"repo-link",attrs:{href:e.repoLink,target:"_blank",rel:"noopener noreferrer"}},[e._v("\n    "+e._s(e.repoLabel)+"\n    "),i("OutboundLink")],1):e._e()],2):e._e()}),[],!1,null,null,null).exports);function L(e,t){return e.ownerDocument.defaultView.getComputedStyle(e,null)[t]}var N={components:{SidebarButton:x,NavLinks:$,SearchBox:k.a,AlgoliaSearchBox:{}},data:function(){return{linksWrapMaxWidth:null}},mounted:function(){var e=this,t=parseInt(L(this.$el,"paddingLeft"))+parseInt(L(this.$el,"paddingRight")),i=function(){document.documentElement.clientWidth<719?e.linksWrapMaxWidth=null:e.linksWrapMaxWidth=e.$el.offsetWidth-t-(e.$refs.siteName&&e.$refs.siteName.offsetWidth||0)};i(),window.addEventListener("resize",i,!1)},computed:{algolia:function(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch:function(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}}},T=(i(545),Object(f.a)(N,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("header",{staticClass:"navbar"},[i("SidebarButton",{on:{"toggle-sidebar":function(t){return e.$emit("toggle-sidebar")}}}),e._v(" "),i("router-link",{staticClass:"home-link",attrs:{to:e.$localePath}},[e.$site.themeConfig.logo?i("img",{staticClass:"logo",attrs:{src:e.$withBase(e.$site.themeConfig.logo),alt:e.$siteTitle}}):e._e(),e._v(" "),e.$siteTitle?i("span",{ref:"siteName",staticClass:"site-name",class:{"can-hide":e.$site.themeConfig.logo}},[e._v(e._s(e.$siteTitle))]):e._e()]),e._v(" "),i("div",{staticClass:"links",style:e.linksWrapMaxWidth?{"max-width":e.linksWrapMaxWidth+"px"}:{}},[e.isAlgoliaSearch?i("AlgoliaSearchBox",{attrs:{options:e.algolia}}):!1!==e.$site.themeConfig.search?i("SearchBox"):e._e(),e._v(" "),i("NavLinks",{staticClass:"can-hide"})],1)],1)}),[],!1,null,null,null).exports);function O(e,t,i){var n=[];t.forEach((function(e){"group"===e.type?n.push.apply(n,Object(w.a)(e.children||[])):n.push(e)}));for(var s=0;s<n.length;s++){var o=n[s];if("page"===o.type&&o.path===decodeURIComponent(e.path))return n[s+i]}}var E={props:["sidebarItems"],data:function(){return{pathName:function(){return window.location.pathname}}},mounted:function(){this.renderValine()},watch:{$route:function(e,t){e.path!=t.path&&this.renderValine(),this.pathName=location.pathname}},computed:{lastUpdated:function(){return this.$page.lastUpdated},lastUpdatedText:function(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},prev:function(){var e,t,i=this.$page.frontmatter.prev;return!1===i?void 0:i?u(this.$site.pages,i,this.$route.path):(e=this.$page,t=this.sidebarItems,O(e,t,-1))},next:function(){var e,t,i=this.$page.frontmatter.next;return!1===i?void 0:i?u(this.$site.pages,i,this.$route.path):(e=this.$page,t=this.sidebarItems,O(e,t,1))},editLink:function(){if(!1!==this.$page.frontmatter.editLink){var e=this.$site.themeConfig,t=e.repo,i=e.editLinks,n=e.docsDir,s=void 0===n?"":n,a=e.docsBranch,l=void 0===a?"master":a,d=e.docsRepo,c=void 0===d?t:d,u=r(this.$page.path);return o.test(u)?u+="README.md":u+=".md",c&&i?this.createEditLink(t,c,s,l,u):void 0}},editLinkText:function(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{renderValine:function(){var e=document.querySelector(".page"),t=document.getElementById("vcomments");t||((t=document.createElement("div")).id="vcomments"),this.$page.frontmatter.hideFooter?t.remove():(e&&!t?e.appendChild(t):(e=document.querySelector(".page")).appendChild(t),this.valine())},valine:function(){var e=i(546),t=i(547);"undefined"!=typeof window&&(window.AV=t),new e({el:"#vcomments",appId:"1XaTmDKhO089NezNbVPY7s67-gzGzoHsz",appKey:"q5LwgCjU52MAQnYFqANCsOKh",enableQQ:!0,notify:!0,visitor:!0,avatar:"wavatar",placeholder:"春霄苦短，少女前进吧！\n夜は短し歩けよ乙女！\nYoru wa Mijikashi Arukeyo Otome!\nThe Night is Short, Walk on Girl!",path:window.location.pathname})},createEditLink:function(e,t,i,n,s){return/bitbucket.org/.test(e)?(a.test(t)?t:e).replace(o,"")+"/".concat(n)+(i?"/"+i.replace(o,""):"")+s+"?mode=edit&spa=0&at=".concat(n,"&fileviewer=file-view-default"):(a.test(t)?t:"https://github.com/".concat(t)).replace(o,"")+"/edit/".concat(n)+(i?"/"+i.replace(o,""):"")+s}}},S=(i(548),Object(f.a)(E,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("main",{staticClass:"page"},[e._t("top"),e._v(" "),i("Content",{staticClass:"content default"}),e._v(" "),e.$page.frontmatter.hideFooter?e._e():i("footer",{staticClass:"page-edit"},[e.editLink?i("div",{staticClass:"edit-link"},[i("a",{attrs:{href:e.editLink,target:"_blank",rel:"noopener noreferrer"}},[e._v(e._s(e.editLinkText))]),e._v(" "),i("OutboundLink")],1):e._e(),e._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"leancloud_visitors",attrs:{id:e.pathName,"data-flag-title":e.$title}},[i("em",{staticClass:"post-meta-item-text"},[e._v("阅读量 ")]),e._v(" "),i("i",{staticClass:"leancloud-visitors-count"},[e._v("0")])]),e._v(" "),e.lastUpdated?i("div",{staticClass:"last-updated"},[i("span",{staticClass:"prefix"},[e._v(e._s(e.lastUpdatedText)+": ")]),e._v(" "),i("span",{staticClass:"time"},[e._v(e._s(e.lastUpdated))])]):e._e()]),e._v(" "),e.prev||e.next?i("div",{staticClass:"page-nav"},[i("p",{staticClass:"inner"},[e.prev?i("span",{staticClass:"prev"},[e._v("\n        ←\n        "),e.prev?i("router-link",{staticClass:"prev",attrs:{to:e.prev.path}},[e._v("\n          "+e._s(e.prev.title||e.prev.path)+"\n        ")]):e._e()],1):e._e(),e._v(" "),e.next?i("span",{staticClass:"next"},[e.next?i("router-link",{attrs:{to:e.next.path}},[e._v("\n          "+e._s(e.next.title||e.next.path)+"\n        ")]):e._e(),e._v("\n        →\n      ")],1):e._e()])]):e._e(),e._v(" "),e._t("bottom")],2)}),[],!1,null,null,null).exports);function H(e,t,i,n){return e("router-link",{props:{to:t,activeClass:"",exactActiveClass:""},class:{active:n,"sidebar-link":!0}},i)}function P(e,t,i,n,s){var o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1;return!t||o>s?null:e("ul",{class:"sidebar-sub-headers"},t.map((function(t){var a=c(n,i+"#"+t.slug);return e("li",{class:"sidebar-sub-header"},[H(e,i+"#"+t.slug,t.title,a),P(e,t.children,i,n,s,o+1)])})))}var z={functional:!0,props:["item"],render:function(e,t){var i=t.parent,s=i.$page,o=i.$site,a=i.$route,r=t.props.item,l=c(a,r.path),d="auto"===r.type?l||r.children.some((function(e){return c(a,r.basePath+"#"+e.slug)})):l,u=H(e,r.path,r.title||r.path,d),p=null!=s.frontmatter.sidebarDepth?s.frontmatter.sidebarDepth:o.themeConfig.sidebarDepth,m=null==p?1:p,v=!!o.themeConfig.displayAllHeaders;return"auto"===r.type?[u,P(e,r.children,r.basePath,a,m)]:(d||v)&&r.headers&&!n.test(r.path)?[u,P(e,h(r.headers),r.path,a,m)]:u}},I=(i(549),Object(f.a)(z,void 0,void 0,!1,null,null,null).exports),q={name:"SidebarGroup",props:["item","first","open","collapsable"],components:{SidebarLink:I,DropdownTransition:M}};i(550);var B={components:{SidebarGroup:Object(f.a)(q,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("section",{staticClass:"sidebar-group",class:{first:e.first,collapsable:e.collapsable}},[i("p",{staticClass:"sidebar-heading",class:{open:e.open},on:{click:function(t){return e.$emit("toggle")}}},[i("span",[e._v(e._s(e.item.title))]),e._v(" "),e.collapsable?i("span",{staticClass:"arrow",class:e.open?"down":"right"}):e._e()]),e._v(" "),i("DropdownTransition",[e.open||!e.collapsable?i("ul",{ref:"items",staticClass:"sidebar-group-items"},e._l(e.item.children,(function(e){return i("li",[i("SidebarLink",{attrs:{item:e}})],1)})),0):e._e()])],1)}),[],!1,null,null,null).exports,SidebarLink:I,NavLinks:$},props:["items"],data:function(){return{openGroupIndex:0}},created:function(){this.refreshIndex()},watch:{$route:function(){this.refreshIndex()}},methods:{refreshIndex:function(){var e=function(e,t){for(var i=0;i<t.length;i++){var n=t[i];if("group"===n.type&&n.children.some((function(t){return c(e,t.path)})))return i}return-1}(this.$route,this.items);e>-1&&(this.openGroupIndex=e)},toggleGroup:function(e){this.openGroupIndex=e===this.openGroupIndex?-1:e},isActive:function(e){return c(this.$route,e.regularPath)}}},A=(i(551),Object(f.a)(B,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("aside",{staticClass:"sidebar"},[i("NavLinks"),e._v(" "),e._t("top"),e._v(" "),e.items.length?i("ul",{staticClass:"sidebar-links"},e._l(e.items,(function(t,n){return i("li",{key:n},["group"===t.type?i("SidebarGroup",{attrs:{item:t,first:0===n,open:n===e.openGroupIndex,collapsable:t.collapsable||t.collapsible},on:{toggle:function(t){return e.toggleGroup(n)}}}):i("SidebarLink",{attrs:{item:t}})],1)})),0):e._e(),e._v(" "),e._t("bottom")],2)}),[],!1,null,null,null).exports),D=(i(552),i(216)),U=i.n(D),W={props:{threshold:{type:Number,default:300}},data:function(){return{scrollTop:null,scrollEnd:null}},mounted:function(){var e=this;this.scrollTop=this.getScrollTop(),this.scrollEnd=this.getScrollEnd(),window.addEventListener("scroll",U()((function(){e.scrollTop=e.getScrollTop(),e.scrollEnd=e.getScrollEnd()}),100))},methods:{getScrollTop:function(){return window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0},getScrollEnd:function(){return document.documentElement.scrollHeight||document.body.scrollHeight||this.threshold},scrollToTop:function(){window.scrollTo({top:0,behavior:"smooth"}),this.scrollTop=0},scrollToEnd:function(){window.scrollTo({top:this.scrollEnd,behavior:"smooth"}),this.scrollTop=this.scrollEnd}},computed:{topShow:function(){return this.scrollTop>this.threshold},endShow:function(){return this.scrollEnd-this.scrollTop>3*this.threshold}}},G=(i(553),Object(f.a)(W,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("transition-group",{attrs:{name:"fade"}},[e.topShow?i("svg",{key:"goTop",staticClass:"go-to-top",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 49.484 28.284"},on:{click:e.scrollToTop}},[i("g",{attrs:{transform:"translate(-229 -126.358)"}},[i("rect",{attrs:{fill:"currentColor",width:"35",height:"5",rx:"2",transform:"translate(229 151.107) rotate(-45)"}}),e._v(" "),i("rect",{attrs:{fill:"currentColor",width:"35",height:"5",rx:"2",transform:"translate(274.949 154.642) rotate(-135)"}})])]):e._e(),e._v(" "),e.endShow?i("svg",{key:"goEnd",staticClass:"go-to-top go-to-end",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 49.484 28.284"},on:{click:e.scrollToEnd}},[i("g",{attrs:{transform:"translate(-229 -126.358)"}},[i("rect",{attrs:{fill:"currentColor",width:"35",height:"5",rx:"2",transform:"translate(229 151.107) rotate(-45)"}}),e._v(" "),i("rect",{attrs:{fill:"currentColor",width:"35",height:"5",rx:"2",transform:"translate(274.949 154.642) rotate(-135)"}})])]):e._e()])}),[],!1,null,"0a389ab2",null).exports),Y=i(529),V=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{ref:"liveContainer"},[n("div",{ref:"PokeBall",staticClass:"poke-ball poke-ball-hide",on:{click:e.callWifeBack}},[n("p",{ref:"wifeMsg",staticClass:"wife-msg"}),e._v(" "),n("img",{attrs:{src:i(497)}})]),e._v(" "),n("div",{ref:"wife",staticClass:"wife"},[n("div",{staticClass:"wife-tips",staticStyle:{opacity:"0"}}),e._v(" "),n("canvas",{staticClass:"live2d",attrs:{id:"live2d",width:"300",height:"280"}}),e._v(" "),n("div",{staticClass:"tool-bar"},[n("ul",e._l(e.tipsList,(function(t){return n("li",{key:t.id,staticClass:"tool-bar-item",on:{click:function(i){return e.clickTool(t.id)},mouseenter:function(i){return e.setClothesTips(t.id,i)},mouseleave:function(i){return e.setClothesTips(t.id,i)}}},[n("font-awesome-icon",{staticClass:"font-icon",attrs:{icon:t.icon,size:"xs"}}),e._v(" "),t.icon.includes("music")?n("ul",{staticClass:"switch-music"},[n("li",{staticClass:"music-input"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.musicUrl,expression:"musicUrl"}],attrs:{type:"url",placeholder:"  qq音乐或网易云歌单链接"},domProps:{value:e.musicUrl},on:{input:function(t){t.target.composing||(e.musicUrl=t.target.value)}}}),e._v(" "),n("input",{attrs:{type:"button",value:"确认"},on:{click:function(t){return e.switchMusic(e.musicUrl)}}})]),e._v(" "),e._l(e.musicList,(function(t,i){return n("li",{key:i,on:{click:function(i){return e.switchMusic(t.url)}}},[e._v(e._s(t.title))])}))],2):e._e(),e._v(" "),n("span",{ref:"tipsText",refInFor:!0,staticClass:"tool-tips"},[e._v(e._s(t.tips))])],1)})),0)])])]),e._v(" "),n("canvas",{staticClass:"fireworks",staticStyle:{position:"fixed",left:"0",top:"0","z-index":"88","pointer-events":"none"}}),e._v(" "),n("script",{pre:!0,attrs:{type:"text/javascript",src:"/lib/bomb.js"}}),e._v(" "),n("script",{pre:!0,attrs:{defer:"",src:"/live2dModels/live2d/js/live2d.js"}}),e._v(" "),n("script",{pre:!0,attrs:{async:"",defer:"",src:"/live2dModels/live2d/js/wife.js"}})])}],R=(i(260),i(474),i(262),[{title:"珍爱日漫集",url:"https://y.qq.com/n/yqq/playlist/2949360967.html"},{title:"国语经典与心共鸣",url:"https://y.qq.com/n/yqq/playlist/2949821647.html"},{title:"游戏党必备",url:"https://y.qq.com/n/yqq/playlist/2949361041.html"},{title:"经典粤语金曲",url:"https://y.qq.com/n/yqq/playlist/2949823435.html"},{title:"能拨动心弦的轻音乐",url:"https://y.qq.com/n/yqq/playlist/2949360725.html"},{title:"欧美抖腿系列",url:"https://y.qq.com/n/yqq/playlist/2949811232.html"}]),X={data:function(){return{msgTimer:null,animaCount:0,doAnimation:null,tiaIndex:0,oldModelNum:0,musicUrl:"",musicList:Object.freeze(R),wifeMsg:Object.freeze(["哼！竟然敢屏蔽我","我真的生气了！快点来哄我~~","呜呜~为什么还不肯见我？一定是我哪里做的不够好···","哼哼，其实一个人在这里呆着也挺好的，啦啦啦~","啊~好无聊啊！为什么你还不来找我~","你一定是不爱我了~~再见！"]),animationList:Object.freeze(["animate__fadeInLeft","animate__lightSpeedIn","animate__zoomIn","animate__swing","animate__heartBeat","animate__wobble"]),personModel:"/live2dModels/live2d/model/kesshouban/model.json",basePath:"/live2dModels/live2d/model/",modelPaths:[],tipsList:Object.freeze([{id:1,icon:["fab","github"],tips:"github"},{id:2,icon:["fas","music"],tips:"切换歌单"},{id:3,icon:["fas","exchange-alt"],tips:"换人"},{id:4,icon:["fas","tshirt"],tips:"换装"},{id:5,icon:["fas","power-off"],tips:"关闭"}])}},created:function(){this.modelPaths=["".concat(this.basePath,"kesshouban/model.json"),"".concat(this.basePath,"tia/model4.json"),"".concat(this.basePath,"ShizukuTalk/shizuku-48/index.json"),"".concat(this.basePath,"HyperdimensionNeptunia/blanc_classic/index.json"),"".concat(this.basePath,"HyperdimensionNeptunia/histoirenohover/index.json"),"".concat(this.basePath,"HyperdimensionNeptunia/nepgear_default/index.json"),"".concat(this.basePath,"HyperdimensionNeptunia/noir_default/index.json"),"".concat(this.basePath,"HyperdimensionNeptunia/vert_classic/index.json"),"".concat(this.basePath,"umaru/13.json"),"".concat(this.basePath,"violet/14.json"),"".concat(this.basePath,"miku/15.json"),"".concat(this.basePath,"tamamo/16.json"),"".concat(this.basePath,"nero/17.json"),"".concat(this.basePath,"murakumo/index.json"),"".concat(this.basePath,"pio/0.json"),"".concat(this.basePath,"z16/z16.model.json"),"".concat(this.basePath,"epsilon/Epsilon2.1.model.json"),"".concat(this.basePath,"remu/rem.json"),"".concat(this.basePath,"22/0.json"),"".concat(this.basePath,"33/0.json")]},mounted:function(){var e=this;window.addEventListener("load",(function(){loadlive2d("live2d",e.personModel=e.modelPaths[e.oldModelNum])})),this.live2dDrag()},methods:{live2dDrag:function(){var e=this.$refs.wife,t=0,i=0;function n(n){n.preventDefault();var s=n.clientX-t,o=n.clientY-i;return s<0?s=0:s>document.documentElement.clientWidth-e.offsetWidth&&(s=document.documentElement.clientWidth-e.offsetWidth),o<0?o=0:o>document.documentElement.clientHeight-e.offsetHeight&&(o=document.documentElement.clientHeight-e.offsetHeight),e.style.left=s+"px",e.style.top=o+"px",e.style.bottom="unset",e.style.right="unset",!1}function s(){document.removeEventListener("mousemove",n),document.removeEventListener("mouseup",s)}e.onmousedown=function(o){t=o.clientX-e.offsetLeft,i=o.clientY-e.offsetTop,document.addEventListener("mousemove",n),document.addEventListener("mouseup",s)},this.$once("hook:beforeDestroy",s)},clickTool:function(e){var t=this;switch(e){case 1:window.open("https://github.com/buqiyuan");break;case 3:this.switchModel();break;case 4:this.switchClothes();break;case 5:this.$refs.wife.style.display="none",console.log("你。。好狠心！再见~~"),this.$refs.PokeBall.classList.remove("poke-ball-hide","animate__animated","animate__fadeOutUp"),this.$refs.PokeBall.classList.add("poke-ball-show","animate__animated","animate__bounceInDown");var i=0;this.animaCount=0,this.$refs.wifeMsg.classList.add("animate__animated",this.animationList[0]),this.$refs.wifeMsg.innerText=this.wifeMsg[i++],this.doAnimation=function(){t.animaCount>=t.animationList.length&&(t.animaCount=0),t.$refs.wifeMsg.classList.remove(t.animationList[t.animaCount]),t.animaCount++},this.msgTimer=setInterval((function(){if(i>t.wifeMsg.length-1){clearInterval(t.msgTimer);for(var e=t.$refs.liveContainer;e.hasChildNodes();)e.removeChild(e.lastChild)}else t.$refs.wifeMsg.classList.add(t.animationList[t.animaCount]||"animate__fadeIn"),t.$refs.wifeMsg.innerText=t.wifeMsg[i++]}),3e3),this.$refs.wifeMsg.addEventListener("animationend",this.doAnimation)}},switchMusic:function(e){this.$nextTick((function(){if(""==e.trim()||-1==e.indexOf("http"))return alert("请输入有效的歌单链接");var t=document.querySelector("meting-js");t.setAttribute("auto",e),document.body.appendChild(t)}))},setClothesTips:function(e,t){if(4==e)if("mouseleave"==t.type)this.$refs.tipsText[3].innerText="换装";else if("mouseenter"==t.type){var i=this.$refs.tipsText[3];this.personModel.indexOf("tia")>0?i.innerText="换装(共4套)":this.personModel.indexOf("pio")>0?i.innerText="换装(共50套)":this.personModel.indexOf("22")>0||this.personModel.indexOf("33")>0?i.innerText="换装(共18套)":this.personModel.indexOf("shizuku")>0?i.innerText="换装(共2套)":this.personModel.indexOf("blanc")>0?i.innerText="换装(共3套)":this.personModel.indexOf("HyperdimensionNeptunia/nep")>0?i.innerText="换装(共6套)":this.personModel.indexOf("noir")>0?i.innerText="换装(共4套)":this.personModel.indexOf("vert")>0?i.innerText="换装(共3套)":i.innerText="换装(无服装)"}},switchClothes:function(){this.personModel.indexOf("tia")>0?(this.tiaIndex++,this.tiaIndex>3&&(this.tiaIndex=0),loadlive2d("live2d","/live2dModels/live2d/model/tia/model"+this.tiaIndex+".json")):this.personModel.indexOf("pio")>0?loadlive2d("live2d","/live2dModels/live2d/model/pio/"+Math.floor(50*Math.random())+".json"):this.personModel.indexOf("22")>0?loadlive2d("live2d","/live2dModels/live2d/model/22/"+Math.floor(18*Math.random())+".json"):this.personModel.indexOf("33")>0?loadlive2d("live2d","/live2dModels/live2d/model/33/"+Math.floor(18*Math.random())+".json"):this.personModel.indexOf("shizuku")>0?-1!==this.personModel.indexOf("shizuku-pajama")?(this.personModel="/live2dModels/live2d/model/ShizukuTalk/shizuku-48/index.json",loadlive2d("live2d","/live2dModels/live2d/model/ShizukuTalk/shizuku-48/index.json")):(this.personModel="/live2dModels/live2d/model/ShizukuTalk/shizuku-pajama/shizuku.model.json",loadlive2d("live2d","/live2dModels/live2d/model/ShizukuTalk/shizuku-pajama/shizuku.model.json")):this.personModel.indexOf("blanc")>0?-1!==this.personModel.indexOf("blanc_normal")?(this.personModel="/live2dModels/live2d/model/HyperdimensionNeptunia/blanc_swimwear/index.json",loadlive2d("live2d","/live2dModels/live2d/model/HyperdimensionNeptunia/blanc_swimwear/index.json")):-1!==this.personModel.indexOf("blanc_classic")?(this.personModel="/live2dModels/live2d/model/HyperdimensionNeptunia/blanc_normal/index.json",loadlive2d("live2d","/live2dModels/live2d/model/HyperdimensionNeptunia/blanc_normal/index.json")):(this.personModel="/live2dModels/live2d/model/HyperdimensionNeptunia/blanc_classic/index.json",loadlive2d("live2d","/live2dModels/live2d/model/HyperdimensionNeptunia/blanc_classic/index.json")):this.personModel.indexOf("vert")>0?-1!==this.personModel.indexOf("vert_classic")?(this.personModel="/live2dModels/live2d/model/HyperdimensionNeptunia/vert_normal/index.json",loadlive2d("live2d","/live2dModels/live2d/model/HyperdimensionNeptunia/vert_normal/index.json")):-1!==this.personModel.indexOf("vert_normal")?(this.personModel="/live2dModels/live2d/model/HyperdimensionNeptunia/vert_swimwear/index.json",loadlive2d("live2d","/live2dModels/live2d/model/HyperdimensionNeptunia/vert_swimwear/index.json")):(this.personModel="/live2dModels/live2d/model/HyperdimensionNeptunia/vert_classic/index.json",loadlive2d("live2d","/live2dModels/live2d/model/HyperdimensionNeptunia/vert_classic/index.json")):this.personModel.indexOf("noir")>0?-1!==this.personModel.indexOf("noir_default")?(this.personModel="/live2dModels/live2d/model/HyperdimensionNeptunia/noir_classic/index.json",loadlive2d("live2d","/live2dModels/live2d/model/HyperdimensionNeptunia/noir_classic/index.json")):-1!==this.personModel.indexOf("noir_classic")?(this.personModel="/live2dModels/live2d/model/HyperdimensionNeptunia/noir_santa/index.json",loadlive2d("live2d","/live2dModels/live2d/model/HyperdimensionNeptunia/noir_santa/index.json")):-1!==this.personModel.indexOf("noir_santa")?(this.personModel="/live2dModels/live2d/model/HyperdimensionNeptunia/noireswim/index.json",loadlive2d("live2d","/live2dModels/live2d/model/HyperdimensionNeptunia/noireswim/index.json")):(this.personModel="/live2dModels/live2d/model/HyperdimensionNeptunia/noir_default/index.json",loadlive2d("live2d","/live2dModels/live2d/model/HyperdimensionNeptunia/noir_default/index.json")):this.personModel.indexOf("HyperdimensionNeptunia/nep")>0?-1!==this.personModel.indexOf("nepgear_default")?(this.personModel="/live2dModels/live2d/model/HyperdimensionNeptunia/nepgear_extra/index.json",loadlive2d("live2d","/live2dModels/live2d/model/HyperdimensionNeptunia/nepgear_extra/index.json")):-1!==this.personModel.indexOf("nepgear_extra")?(this.personModel="/live2dModels/live2d/model/HyperdimensionNeptunia/nepgearswim/index.json",loadlive2d("live2d","/live2dModels/live2d/model/HyperdimensionNeptunia/nepgearswim/index.json")):-1!==this.personModel.indexOf("nepgearswim")?(this.personModel="/live2dModels/live2d/model/HyperdimensionNeptunia/nepmaid/index.json",loadlive2d("live2d","/live2dModels/live2d/model/HyperdimensionNeptunia/nepmaid/index.json")):-1!==this.personModel.indexOf("nepmaid")?(this.personModel="/live2dModels/live2d/model/HyperdimensionNeptunia/nepnep/index.json",loadlive2d("live2d","/live2dModels/live2d/model/HyperdimensionNeptunia/nepnep/index.json")):-1!==this.personModel.indexOf("nepnep")?(this.personModel="/live2dModels/live2d/model/HyperdimensionNeptunia/nepswim/index.json",loadlive2d("live2d","/live2dModels/live2d/model/HyperdimensionNeptunia/nepswim/index.json")):-1!==this.personModel.indexOf("nepswim")?(this.personModel="/live2dModels/live2d/model/HyperdimensionNeptunia/neptune_classic/index.json",loadlive2d("live2d","/live2dModels/live2d/model/HyperdimensionNeptunia/neptune_classic/index.json")):-1!==this.personModel.indexOf("neptune_classic")?(this.personModel="/live2dModels/live2d/model/HyperdimensionNeptunia/neptune_santa/index.json",loadlive2d("live2d","/live2dModels/live2d/model/HyperdimensionNeptunia/neptune_santa/index.json")):(this.personModel="/live2dModels/live2d/model/HyperdimensionNeptunia/nepgear_default/index.json",loadlive2d("live2d","/live2dModels/live2d/model/HyperdimensionNeptunia/nepgear_default/index.json")):console.log("不好意思！该老婆没有衣服可换了，因为鹅没钱给心爱的老婆买衣服了")},switchModel:function(){var e=this.modelPaths.length,t=Math.floor(Math.random()*e);this.oldModelNum==t&&((t=t==e-1?t-1:t+1)>e-1||t<0)&&(t=Math.floor(Math.random()*e)),this.oldModelNum=t,this.personModel=this.modelPaths[t],loadlive2d("live2d",this.modelPaths[t])},callWifeBack:function(){clearInterval(this.msgTimer),this.$refs.wife.style.display="block",console.log("哼！知道错了吧！我又回来了~~"),removeEventListener("animationend",this.doAnimation),this.$refs.wifeMsg.classList.remove(this.animationList[this.animaCount]||"animate__fadeIn"),this.$refs.PokeBall.classList.remove("poke-ball-show","animate__animated","animate__bounceInDown"),this.$refs.PokeBall.classList.add("poke-ball-hide","animate__animated","animate__fadeOutUp")}}},F=(i(554),i(555),Object(f.a)(X,(function(){var e=this.$createElement;this._self._c;return this._m(0)}),V,!1,null,"1c1bff30",null).exports),K={components:{Home:b,Page:S,Sidebar:A,Navbar:T,BackToTop:G,APlayer:Y.default,Live2D:F},data:function(){return{isSidebarOpen:!1,isPc:!1}},computed:{shouldShowNavbar:function(){var e=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==e.navbar&&(this.$title||e.logo||e.repo||e.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar:function(){var e=this.$page.frontmatter;return!e.home&&!1!==e.sidebar&&this.sidebarItems.length},sidebarItems:function(){return p(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses:function(){var e=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},e]}},mounted:function(){var e=this,t=0;function i(e){"a"!==e.target.nodeName.toLowerCase()&&0===e.button&&(document.body.classList.add("left-button"),t=Date.now())}function n(e){if(document.body.classList.remove("left-button"),0===e.button&&t&&Date.now()-t>500){var i=document.createElement("div");i.style.setProperty("--color","#"+("00000"+(16777216*Math.random()<<0).toString(16)).substr(-6)),i.style.setProperty("--top",e.clientY+"px"),i.style.setProperty("--left",e.clientX+"px"),document.body.append(i),i.classList.add("heart-shape"),i.addEventListener("animationend",(function(){document.body.removeChild(i)}))}t=0}document.addEventListener("mousedown",i),document.addEventListener("mouseup",n),this.$once("hook:beforeDestroy",(function(){document.removeEventListener("mousedown",i),document.removeEventListener("mouseup",n)})),document.documentElement.clientWidth>760&&(this.isPc=!0),this.$router.afterEach((function(){e.isSidebarOpen=!1}))},methods:{toggleSidebar:function(e){this.isSidebarOpen="boolean"==typeof e?e:!this.isSidebarOpen},onTouchStart:function(e){this.touchStart={x:e.changedTouches[0].clientX,y:e.changedTouches[0].clientY}},onTouchEnd:function(e){var t=e.changedTouches[0].clientX-this.touchStart.x,i=e.changedTouches[0].clientY-this.touchStart.y;Math.abs(t)>Math.abs(i)&&Math.abs(t)>40&&(t>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}},Q=(i(556),i(557),i(558),Object(f.a)(K,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"theme-container",class:e.pageClasses,on:{touchstart:e.onTouchStart,touchend:e.onTouchEnd}},[e.shouldShowNavbar?i("Navbar",{on:{"toggle-sidebar":e.toggleSidebar}}):e._e(),e._v(" "),i("div",{staticClass:"sidebar-mask",on:{click:function(t){return e.toggleSidebar(!1)}}}),e._v(" "),i("Sidebar",{staticClass:"slide-bar",attrs:{items:e.sidebarItems},on:{"toggle-sidebar":e.toggleSidebar}},[e._t("sidebar-top",null,{slot:"top"}),e._v(" "),e._t("sidebar-bottom",null,{slot:"bottom"})],2),e._v(" "),e.$page.frontmatter.home?i("Home"):i("Page",{attrs:{"sidebar-items":e.sidebarItems}},[e._t("page-top",null,{slot:"top"}),e._v(" "),e._t("page-bottom",null,{slot:"bottom"})],2),e._v(" "),i("BackToTop"),e._v(" "),i("APlayer"),e._v(" "),e.isPc?i("Live2D"):e._e(),e._v(" "),i("script",{pre:!0,attrs:{"v-once":""}},[e._v("\n    (function () {\n      var bp = document.createElement('script');\n      var curProtocol = window.location.protocol.split(':')[0];\n      if (curProtocol === 'https') {\n        bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';\n      } else {\n        bp.src = 'http://push.zhanzhang.baidu.com/push.js';\n      }\n      var s = document.getElementsByTagName('script')[0];\n      s.parentNode.insertBefore(bp, s);\n    })();\n  ")])],1)}),[],!1,null,"ca2c7e62",null));t.default=Q.exports}}]);