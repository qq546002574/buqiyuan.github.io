(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{234:function(t,e,i){"use strict";var s=i(41),n=i(127)(!1),o=[].indexOf,a=!!o&&1/[1].indexOf(1,-0)<0;s(s.P+s.F*(a||!i(65)(o)),"Array",{indexOf:function(t){return a?o.apply(this,arguments)||0:n(this,t,arguments[1])}})},237:function(t,e,i){},238:function(t,e,i){},290:function(t,e,i){t.exports=i.p+"assets/img/poke_ball.d6cc89a7.gif"},291:function(t,e,i){"use strict";var s=i(237);i.n(s).a},292:function(t,e,i){"use strict";var s=i(238);i.n(s).a},340:function(t,e,i){"use strict";i.r(e);i(234);var s={data:function(){return{timerId:null,msgTimer:null,moveElem:null,dragging:!1,tLeft:0,tTop:0,animaCount:0,doAnimation:null,tiaIndex:0,oldModelNum:0,musicList:[{title:"珍爱日漫集",url:"https://y.qq.com/n/yqq/playlist/2949360967.html"},{title:"国语经典与心共鸣",url:"https://y.qq.com/n/yqq/playlist/2949821647.html"},{title:"游戏党必备",url:"https://y.qq.com/n/yqq/playlist/2949361041.html"},{title:"经典粤语金曲",url:"https://y.qq.com/n/yqq/playlist/2949823435.html"},{title:"能拨动心弦的轻音乐",url:"https://y.qq.com/n/yqq/playlist/2949360725.html"},{title:"欧美抖腿系列",url:"https://y.qq.com/n/yqq/playlist/2949811232.html"}],wifeMsg:["哼！竟然敢屏蔽我","我真的生气了！快点来哄我~~","呜呜~为什么还不肯见我？一定是我哪里做的不够好···","哼哼，其实一个人在这里呆着也挺好的，啦啦啦~","啊~好无聊啊！为什么你还不来找我~","你一定是不爱我了~~再见！"],animationList:["fadeInLeft","lightSpeedIn","zoomIn","swing","heartBeat","wobble"],personModel:"/live2dModels/live2d/model/kesshouban/model.json",basePath:"/live2dModels/live2d/model/",modelPaths:[],tipsList:[{id:1,icon:["fab","github"],tips:"github"},{id:2,icon:["fas","music"],tips:"切换歌单"},{id:3,icon:["fas","exchange-alt"],tips:"换人"},{id:4,icon:["fas","tshirt"],tips:"换装"},{id:5,icon:["fas","power-off"],tips:"关闭"}]}},created:function(){this.modelPaths=["".concat(this.basePath,"kesshouban/model.json"),"".concat(this.basePath,"tia/model4.json"),"".concat(this.basePath,"pio/0.json"),"".concat(this.basePath,"z16/z16.model.json"),"".concat(this.basePath,"epsilon/Epsilon2.1.model.json"),"".concat(this.basePath,"remu/rem.json")]},mounted:function(){var t=this;this.moveElem=this.$refs.wife,window.addEventListener("load",function(){loadlive2d("live2d",t.personModel=t.modelPaths[t.oldModelNum])})},methods:{clickTool:function(t){var e=this;switch(t){case 1:window.open("https://github.com/buqiyuan");break;case 3:this.switchModel();break;case 4:this.switchClothes();break;case 5:this.$refs.wife.style.display="none",console.log("你。。好狠心！再见~~"),this.$refs.PokeBall.classList.remove("poke-ball-hide","animated","fadeOutUp"),this.$refs.PokeBall.classList.add("poke-ball-show","animated","bounceInDown");var i=0;this.animaCount=0,this.$refs.wifeMsg.classList.add("animated",this.animationList[0]),this.$refs.wifeMsg.innerText=this.wifeMsg[i++],this.doAnimation=function(){e.animaCount>=e.animationList.length&&(e.animaCount=0),e.$refs.wifeMsg.classList.remove(e.animationList[e.animaCount]),e.animaCount++},this.msgTimer=setInterval(function(){if(i>e.wifeMsg.length-1){clearInterval(e.msgTimer);for(var t=e.$refs.liveContainer;t.hasChildNodes();)t.removeChild(t.lastChild);L2Dwidget.init()}else e.$refs.wifeMsg.classList.add(e.animationList[e.animaCount]||"fadeIn"),e.$refs.wifeMsg.innerText=e.wifeMsg[i++]},3e3),this.$refs.wifeMsg.addEventListener("animationend",this.doAnimation)}},switchMusic:function(t){var e=document.querySelector("meting-js");e.setAttribute("auto",t),document.body.appendChild(e)},setClothesTips:function(t){var e=window.event||arguments.callee.caller.arguments[0];if(4==t)if("mouseleave"==e.type)this.$refs.tipsText[3].innerText="换装";else if("mouseenter"==e.type){if(this.personModel.indexOf("tia")>0)return void(this.$refs.tipsText[3].innerText="换装(共4套)");if(this.personModel.indexOf("pio")>0)return void(this.$refs.tipsText[3].innerText="换装(共50套)");this.$refs.tipsText[3].innerText="换装(无服装)"}},switchClothes:function(){if(this.personModel.indexOf("tia")>0)return this.tiaIndex++,this.tiaIndex>3&&(this.tiaIndex=0),void loadlive2d("live2d","/live2dModels/live2d/model/tia/model"+this.tiaIndex+".json");this.personModel.indexOf("pio")>0?loadlive2d("live2d","/live2dModels/live2d/model/pio/"+Math.floor(50*Math.random())+".json"):console.log("不好意思！该老婆没有衣服可换了，因为鹅没钱给心爱的老婆买衣服了")},switchModel:function(){var t=this.modelPaths.length,e=Math.floor(Math.random()*t);this.oldModelNum==e&&((e=e==t-1?e-1:e+1)>t-1||e<0)&&(e=Math.floor(Math.random()*t)),this.oldModelNum=e,this.personModel=this.modelPaths[e],loadlive2d("live2d",this.modelPaths[e])},callWifeBack:function(){clearInterval(this.msgTimer),this.$refs.wife.style.display="block",console.log("哼！知道错了吧！我又回来了~~"),removeEventListener("animationend",this.doAnimation),this.$refs.wifeMsg.classList.remove(this.animationList[this.animaCount]||"fadeIn"),this.$refs.PokeBall.classList.remove("poke-ball-show","animated","bounceInDown"),this.$refs.PokeBall.classList.add("poke-ball-hide","animated","fadeOutUp")},press:function(t){var e=this,i=(new Date).getTime(),s=this.moveElem.getBoundingClientRect();this.timerId=setInterval(function(){(new Date).getTime()-i>1200&&(clearInterval(e.timerId),e.moveElem.style.cursor="all-scroll")},200),this.dragging=!0,this.tLeft=t.clientX-s.left,this.tTop=t.clientY-s.top},loosen:function(){this.dragging=!1,clearInterval(this.timerId),this.moveElem.style.cursor="grab"},move:function(t){if(this.dragging){var e=t.clientX-this.tLeft,i=t.clientY-this.tTop;this.moveElem.style.left=e+"px",this.moveElem.style.top=i+"px",this.moveElem.style.bottom="unset",this.moveElem.style.right="unset"}}}},n=(i(291),i(292),i(12)),o=Object(n.a)(s,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{ref:"liveContainer"},[s("div",{ref:"PokeBall",staticClass:"poke-ball poke-ball-hide",on:{click:t.callWifeBack}},[s("p",{ref:"wifeMsg",staticClass:"wife-msg"}),t._v(" "),s("img",{attrs:{src:i(290)}})]),t._v(" "),s("div",{ref:"wife",staticClass:"wife",on:{mousedown:t.press,mouseup:t.loosen,mousemove:t.move}},[s("div",{staticClass:"wife-tips",staticStyle:{opacity:"0"}}),t._v(" "),s("canvas",{staticClass:"live2d",attrs:{id:"live2d",width:"280",height:"250"}}),t._v(" "),s("div",{staticClass:"tool-bar"},[s("ul",t._l(t.tipsList,function(e){return s("li",{key:e.id,staticClass:"tool-bar-item",on:{click:function(i){return t.clickTool(e.id)},mouseenter:function(i){return t.setClothesTips(e.id)},mouseleave:function(i){return t.setClothesTips(e.id)}}},[s("font-awesome-icon",{staticClass:"font-icon",attrs:{icon:e.icon,size:"xs"}}),t._v(" "),e.icon.includes("music")?s("ul",{staticClass:"switch-music"},t._l(t.musicList,function(e,i){return s("li",{key:i,on:{click:function(i){return t.switchMusic(e.url)}}},[t._v(t._s(e.title))])}),0):t._e(),t._v(" "),s("span",{ref:"tipsText",refInFor:!0,staticClass:"tool-tips"},[t._v(t._s(e.tips))])],1)}),0)])])]),t._v(" "),s("script",{attrs:{type:"text/javascript",charset:"utf-8",async:"",defer:"",src:"/lib/L2Dwidget.min.js"}}),t._v(" "),s("script",{attrs:{type:"text/javascript",charset:"utf-8",async:"",defer:"",src:"/lib/L2Dwidget.0.min.js"}})])},[],!1,null,"8551586a",null);e.default=o.exports}}]);