(function(t){function e(e){for(var n,s,o=e[0],c=e[1],u=e[2],l=0,d=[];l<o.length;l++)s=o[l],r[s]&&d.push(r[s][0]),r[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);h&&h(e);while(d.length)d.shift()();return i.push.apply(i,u||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,s=1;s<a.length;s++){var o=a[s];0!==r[o]&&(n=!1)}n&&(i.splice(e--,1),t=c(c.s=a[0]))}return t}var n={},s={app:0},r={app:0},i=[];function o(t){return c.p+"src/assets/js/"+({}[t]||t)+"."+{"chunk-083a9a81":"402ad18e","chunk-2d0ccb5d":"843c5bfd","chunk-546b3704":"35ef8551","chunk-924e603c":"5c59fde6","chunk-edb86fbc":"3abe951f","chunk-f74dc2b2":"c08d01d4"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a={"chunk-083a9a81":1,"chunk-546b3704":1,"chunk-924e603c":1,"chunk-edb86fbc":1};s[t]?e.push(s[t]):0!==s[t]&&a[t]&&e.push(s[t]=new Promise(function(e,a){for(var n="src/assets/css/"+({}[t]||t)+"."+{"chunk-083a9a81":"33c9e8cb","chunk-2d0ccb5d":"31d6cfe0","chunk-546b3704":"198fddad","chunk-924e603c":"a94ef078","chunk-edb86fbc":"63568cb8","chunk-f74dc2b2":"31d6cfe0"}[t]+".css",s=c.p+n,r=document.getElementsByTagName("link"),i=0;i<r.length;i++){var o=r[i],u=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(u===n||u===s))return e()}var l=document.getElementsByTagName("style");for(i=0;i<l.length;i++){o=l[i],u=o.getAttribute("data-href");if(u===n||u===s)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var n=e&&e.target&&e.target.src||s,r=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");r.request=n,a(r)},d.href=s;var h=document.getElementsByTagName("head")[0];h.appendChild(d)}).then(function(){s[t]=0}));var n=r[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise(function(e,a){n=r[t]=[e,a]});e.push(n[2]=i);var u,l=document.getElementsByTagName("head")[0],d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=o(t),u=function(e){d.onerror=d.onload=null,clearTimeout(h);var a=r[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+n+": "+s+")");i.type=n,i.request=s,a[1](i)}r[t]=void 0}};var h=setTimeout(function(){u({type:"timeout",target:d})},12e4);d.onerror=d.onload=u,l.appendChild(d)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(a,n,function(e){return t[e]}.bind(null,n));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/vuejs/vuespotify/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var h=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"03d3":function(t,e,a){},"43ff":function(t,e,a){"use strict";var n=a("03d3"),s=a.n(n);s.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("097d");var n=a("a026"),s=a("fb9a"),r=a.n(s),i=(a("04f2"),a("c789"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("vs-navbar",{staticClass:"myNavbar",attrs:{color:t.colorx,"text-color":"rgba(255,255,255,.6)","active-text-color":"rgba(255,255,255,1)"},model:{value:t.indexActive,callback:function(e){t.indexActive=e},expression:"indexActive"}},[a("vs-navbar-title",[t._v("\n      Vue Spotify\n    ")]),a("vs-navbar-item",{attrs:{index:0}},[a("router-link",{attrs:{to:"/"},nativeOn:{click:function(e){return t.debounce_check(e)}}},[t._v("\n        Artistas\n      ")])],1),a("vs-navbar-item",{attrs:{index:1}},[a("router-link",{attrs:{to:"/albums"},nativeOn:{click:function(e){return t.debounce_check(e)}}},[t._v("\n        Álbums\n      ")])],1),a("vs-navbar-item",{attrs:{index:2}},[a("router-link",{attrs:{to:"/musicas"},nativeOn:{click:function(e){return t.debounce_check(e)}}},[t._v("\n        Músicas\n      ")])],1),a("vs-navbar-item",{attrs:{index:3}},[a("router-link",{attrs:{to:"/favoritos/vazio"},nativeOn:{click:function(e){return t.debounce_check(e)}}},[t._v("\n        Favoritos\n      ")])],1),a("vs-spacer"),3!==t.indexActive?a("vs-input",{attrs:{value:t.search,color:t.colorx,icon:"search","label-placeholder":"Busca"},on:{input:t.debounce_search}}):t._e()],1),a("router-view")],1)}),o=[],c=(a("386d"),a("28a5"),a("b047")),u=a.n(c),l={data:function(){return{colorx:"#4fc08d",indexActive:0,search:"",sParams:{},myRoute:""}},computed:{myRoutes:function(){return this.$route.fullPath}},watch:{search:function(){this.checkUrl()},myRoutes:function(t){this.myRoute=t,this.checkUrl()}},methods:{checkUrl:function(){var t=this.myRoute.split("/"),e=t.length<=3?1:3;switch(t[e]){case"albums":this.indexActive=1,this.sParams.q=this.search,this.sParams.type="album";break;case"musicas":this.indexActive=2,this.sParams.q=this.search,this.sParams.type="track";break;case"favoritos":this.indexActive=3,this.sParams.q="",this.sParams.type="";break;default:this.indexActive=0,this.sParams.q=this.search,this.sParams.type="artist"}if(""!==this.sParams.q)this.$store.dispatch("search",this.sParams);else{var a={index:"searched",value:[]};this.$store.dispatch("changeData",a)}},debounce_search:u()(function(t){this.search=t},1e3),debounce_check:u()(function(){this.checkUrl()},1e3)}},d=l,h=(a("5c0b"),a("2877")),m=Object(h["a"])(d,i,o,!1,null,null,null);m.options.__file="App.vue";var p=m.exports,f=(a("7f7f"),{filters:{implode:function(t){return t.join(", ")},popColor:function(t){var e;switch(!0){case t>79:e="success";break;case t>59&&t<80:e="primary";break;case t>29&&t<60:e="warning";break;default:e=""}return e},popIcon:function(t){var e;switch(!0){case t>79:e="grade";break;case t>59&&t<80:e="language";break;case t>29&&t<60:e="group_work";break;default:e=""}return e},popText:function(t){var e;switch(!0){case t>79:e="Top";break;case t>59&&t<80:e="Legal";break;case t>29&&t<60:e="Bom";break;default:e="Desconhecido"}return e},showAlbum:function(t){var e=t.data.album?"".concat(t.names," | Álbum ").concat(t.data.album.name):"";return e},showArtistC:function(t){var e=t.map(function(t){return t.name});return e.join(", ")},showArtistD:function(t){var e=[];return t.artists&&(e=t.artists.map(function(t){return t.name})),{data:t,names:e.join(", ")}},showArtistMA:function(t){var e;if(t.length<3){var a=t.map(function(t){return t.name});e=a.join(" e ")}else e="Vários Artistas";return e}},methods:{msToMnSec:function(t){var e=Math.floor(t/6e4),a=(t%6e4/1e3).toFixed(0);return"".concat(e,":").concat(a<10?"0":"").concat(a)},test:function(){alert("Ops! Este é apenas um teste, não vai rolar ouvir musica por aqui! Desculpe :(")}}}),v={utils:f},g=a("8c4f"),b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"template-container"},[t.msg?a("vs-row",[a("vs-col",{attrs:{"vs-type":"flex","vs-justify":"center","vs-align":"center","vs-w":"12"}},[a("vs-alert",{attrs:{active:"true",color:"#842993"}},[t._v("\n        "+t._s(t.msg)+"\n      ")])],1)],1):a("span",t._l(t.myData,function(e,n){return a("vs-row",{key:n},t._l(e,function(e,n){return a("vs-col",{key:n,attrs:{"vs-type":"flex","vs-justify":"center","vs-align":"center","vs-xs":"6","vs-sm":"4","vs-lg":"2"}},[e?a("div",{staticClass:"avatar",on:{click:function(a){t.enter(e.id)}}},[e.images&&e.images[2]?a("vs-avatar",{attrs:{src:e.images[2].url,size:"120px"}}):a("vs-avatar",{attrs:{color:"success",icon:"music_video",size:"120px"}}),a("vs-row",[a("vs-col",{attrs:{"vs-type":"flex","vs-justify":"center","vs-align":"center"}},[a("h4",[t._v(t._s(e.name))])])],1),a("vs-row",[a("vs-col",{attrs:{"vs-type":"flex","vs-justify":"center","vs-align":"center"}},[e.genres&&e.genres[0]?a("vs-tooltip",{attrs:{text:t._f("implode")(e.genres),title:"Gêneros",position:"right"}},[t._v("\n                "+t._s(e.genres[0])+"\n              ")]):a("span",[t._v("\n                N/A\n              ")])],1)],1),a("vs-row",[a("vs-col",{attrs:{"vs-type":"flex","vs-justify":"center","vs-align":"center"}},[a("vs-chip",{attrs:{color:t._f("popColor")(e.popularity)}},[a("vs-avatar",{attrs:{icon:t._f("popIcon")(e.popularity)}}),t._v("\n                "+t._s(t._f("popText")(e.popularity))+"\n              ")],1)],1)],1),a("div",{staticClass:"middle"},[a("vs-button",{attrs:{radius:"",color:"dark",type:"filled",icon:"play_arrow"}})],1)],1):t._e()])}))}))],1)},k=[],x=a("be94"),y=a("2f62"),A={name:"Artistas",props:{favoritos:{default:!1,type:Boolean}},computed:Object(x["a"])({},Object(y["c"])("Artistas",{dados:"artistas",msg:"msg"}),Object(y["c"])(["searched"]),{myData:function(){return 0===this.searched.length?this.dados:this.searched}}),created:function(){this.favoritos||this.getArtistas()},methods:Object(x["a"])({},Object(y["b"])({getArtistas:"Artistas/getList"}),{enter:function(t){this.$router.push({path:"/artista/".concat(t)})}})},w=A,_=(a("43ff"),Object(h["a"])(w,b,k,!1,null,"8ced329c",null));_.options.__file="Artistas.vue";var j=_.exports;n["default"].use(g["a"]);var O=new g["a"]({mode:"hash",base:"/vuejs/vuespotify/",routes:[{path:"/",name:"artistas",component:j},{path:"/artista/:id",name:"artista",component:function(){return a.e("chunk-924e603c").then(a.bind(null,"d38d"))}},{path:"/artista/:id/album/:id2",name:"album",component:function(){return a.e("chunk-546b3704").then(a.bind(null,"33c4"))}},{path:"/albums",name:"albums",component:function(){return a.e("chunk-edb86fbc").then(a.bind(null,"be55"))}},{path:"/musicas",name:"musicas",component:function(){return a.e("chunk-f74dc2b2").then(a.bind(null,"f4de"))}},{path:"/favoritos/",name:"favoritos",component:function(){return a.e("chunk-083a9a81").then(a.bind(null,"5628"))},children:[{path:"artistas",component:j,props:{favoritos:!0}},{path:"albums",component:function(){return a.e("chunk-edb86fbc").then(a.bind(null,"be55"))},props:{favoritos:!0}},{path:"musicas",component:function(){return a.e("chunk-f74dc2b2").then(a.bind(null,"f4de"))},props:{favoritos:!0}},{path:"vazio",component:function(){return a.e("chunk-2d0ccb5d").then(a.bind(null,"4ea7"))}}]}]}),S=a("ade3"),P=a("bc3a"),E=a.n(P),C=a("6cd4"),I=a.n(C),T="CHANGE_STATE",N={getList:function(t,e){var a=t.rootGetters,n=t.commit,s=t.dispatch;n(T,{index:"msg",value:"Carregando.... Aguarde!"});var r=[],i=e||["5FwdSSQrDlVvGQ14hpPO9S","0tbu4twiafAbrakCB3mxz4","7z7bTIHtSNmuIX0yWTimZ7","5lPYUxk21ijQNVA0r1wPhk","1XdmakXviDcpmNrl5mNMrt","5oohuDD9sE7C1MxwA8uzHe","7vDirGAUVrYMQc7G3sDxfQ","2Wz4oDBOPs3hYkb3eUtsNd","7CB9ERpNXGxnCgRxQt94CH","5V6r9gmQXxfSQ4gzSxYEx6","6EtAuxIwZCEuUZEqn2DwII","1CqADkcK8HJY1ss4i3cJqU"],o={headers:a.auth.headers,params:{ids:i.join(",")}};a.http.get("/albums",o).then(function(t){if(204===t.status)n(T,{index:"msg",value:"Ainda não há albums para exibir!"});else{var e=[];I()(t.data.albums,function(t,a){a>0&&a%6===0&&(r.push(e),e=[]),e.push(t)}),e.length>0&&r.push(e),n(T,{index:"albums",value:r}),n(T,{index:"msg",value:""})}},function(t){401===t.response.status&&(sessionStorage.setItem("valid",!1),s("authAgain",{action:"Albums/getList"},{root:!0})),console.log(t)})},getAlbum:function(t,e){var a=t.rootGetters,n=t.commit,s=t.dispatch;n(T,{index:"msg",value:"Carregando.... Aguarde!"});var r={headers:a.auth.headers};a.http.get("/albums/".concat(e),r).then(function(t){204===t.status?n(T,{index:"msg",value:"Ainda não há albums deste artista para exibir!"}):(n(T,{index:"album",value:t.data}),n(T,{index:"msg",value:""}))},function(t){401===t.response.status&&(sessionStorage.setItem("valid",!1),s("authAgain",{action:"Albums/getAlbum",id:e},{root:!0})),console.log(t)})}},M=Object(S["a"])({},T,function(t,e){t[e.index]=e.value}),D={albums:function(t){return t.albums},album:function(t){return t.album},msg:function(t){return t.msg}},R={albums:[],album:{},msg:""},z={namespaced:!0,state:R,actions:N,mutations:M,getters:D},q={getList:function(t,e){var a=t.rootGetters,n=t.commit,s=t.dispatch;n(T,{index:"msg",value:"Carregando.... Aguarde!"});var r=[],i=e||["4cn4gMq0KXORHeYA45PcBi","10naVTwNjE50daQVrN0bXh","7uPgOaM3jjmkwuua1RgZHg","7n1XMwvxPf10t4OX6h6Ufy","1zWJTFpRoMlT21OaXniRsb","7gRwkRxJz1ilKcYkeqhmEz","6O67GI6ayhWHyFmOOJRLEq","6ODCVWBfGNFUf1bpo0c2Ge","6wd8OZcCaRQNDIMz6SPNGN","4EUuQxMNowMUEs5gu4BzBX","5rTjH3aABAmPM5B6DZebZ7","6TYimByryGphZCtwYopH0y"],o={headers:a.auth.headers,params:{ids:i.join(",")}};a.http.get("/artists",o).then(function(t){var e=[];204===t.status?n(T,{index:"msg",value:"Ainda não há artistas para exibir!"}):(I()(t.data.artists,function(t,a){a>0&&a%6===0&&(r.push(e),e=[]),e.push(t)}),e.length>0&&r.push(e),n(T,{index:"artistas",value:r}),n(T,{index:"msg",value:""}))},function(t){401===t.response.status&&(sessionStorage.setItem("valid",!1),s("authAgain",{action:"Artistas/getList"},{root:!0})),console.log(t)})},getArtistAlbums:function(t,e){var a=t.rootGetters,n=t.commit,s=t.dispatch;n(T,{index:"msg",value:"Carregando.... Aguarde!"});var r={headers:a.auth.headers},i={};a.http.get("/artists/".concat(e),r).then(function(t){204===t.status?n(T,{index:"msg",value:"Ainda não há detalhes deste artista para exibir!"}):(i.id=t.data.id,i.nome=t.data.name,i.imagem=t.data.images[0].url)}),r.params={limit:5},a.http.get("/artists/".concat(e,"/albums"),r).then(function(t){204===t.status?n(T,{index:"msg",value:"Ainda não há albums deste artista para exibir!"}):(n(T,{index:"artista_albums",value:{artista:i,albums:t.data.items}}),n(T,{index:"msg",value:""}))},function(t){401===t.response.status&&(sessionStorage.setItem("valid",!1),s("authAgain",{action:"Artistas/getArtistAlbums",id:e},{root:!0})),console.log(t)})}},B=Object(S["a"])({},T,function(t,e){t[e.index]=e.value}),G={artistas:function(t){return t.artistas},albums:function(t){return t.artista_albums},msg:function(t){return t.msg}},F={artistas:[],artista_albums:{},msg:""},U={namespaced:!0,state:F,actions:q,mutations:B,getters:G},J={getList:function(t,e){var a=t.rootGetters,n=t.commit,s=t.dispatch;n(T,{index:"msg",value:"Carregando.... Aguarde!"});var r=e||["2AXmPzar7HNqI6ksI562UX","7KCOMlNvjtkaQVBWwq3rd8","548AxnT5rmzjT1AUpxgCoM","0CpIVOnfJTu99vr0uQARPD","3qK4cPOkKJ00tAWeFBFMXm","1VwyjcpwWGMMXDe1xGnRyx","0zBbyR1llVe56n9P28dv2m","0zRzJU415EsEQ3NOjZj6Lu","3VTaBE3DsiREAxFtp6hREj","4NV9CHd1KRZ7dCySTtATey","5MY8WIRTMZ5uHEKSFJ4ZRP","2hGsyzJD1GiYlOD4bEb7KD"],i={headers:a.auth.headers,params:{ids:r.join(",")}};a.http.get("/tracks",i).then(function(t){204===t.status?n(T,{index:"msg",value:"Ainda não há músicas para exibir!"}):(n(T,{index:"musicas",value:t.data.tracks}),n(T,{index:"msg",value:""}))},function(t){401===t.response.status&&(sessionStorage.setItem("valid",!1),s("authAgain",{action:"Musicas/getList"},{root:!0})),console.log(t)})}},V=Object(S["a"])({},T,function(t,e){t[e.index]=e.value}),X={musicas:function(t){return t.musicas},msg:function(t){return t.msg}},H={musicas:[],msg:""},Q={namespaced:!0,state:H,actions:J,mutations:V,getters:X};if(!localStorage.getItem("vueSpotifyFavorites")){var L={artists:[],albums:[],tracks:[]};localStorage.setItem("vueSpotifyFavorites",JSON.stringify(L))}var Z="";if(sessionStorage.getItem("valid"))Z=JSON.parse(sessionStorage.getItem("token"));else var Y=window.open("https://accounts.spotify.com/authorize?client_id=da18b610d64c4573be48c92fe8ae8eee&response_type=token&redirect_uri=https:%2F%2Fwww.eleganciachick.com.br%2Fgtoken.php","gtoken"),K=function(){Y.closed&&E.a.get("https://www.eleganciachick.com.br/spot.php").then(function(t){sessionStorage.setItem("token",t.request.response),sessionStorage.setItem("valid",!0),clearInterval(W),window.location.reload()})},W=setInterval(K,1e3);var $={headers:{Authorization:"".concat(Z.token_type," ").concat(Z.access_token)}},tt=E.a.create({baseURL:"https://api.spotify.com/v1"});n["default"].use(y["a"]);var et=new y["a"].Store({state:{http:tt,auth:$,searched:[]},actions:{authAgain:function(t,e){var a=t.commit,n=t.dispatch,s=window.open("https://accounts.spotify.com/authorize?client_id=da18b610d64c4573be48c92fe8ae8eee&response_type=token&redirect_uri=https:%2F%2Fwww.eleganciachick.com.br%2Fgtoken.php","gtoken"),r=function(){s.closed&&E.a.get("https://www.eleganciachick.com.br/spot.php").then(function(t){sessionStorage.setItem("token",t.request.response),sessionStorage.setItem("valid",!0),Z=JSON.parse(t.request.response),$={headers:{Authorization:"".concat(Z.token_type," ").concat(Z.access_token)}},a("CHANGE_STATE",{index:"auth",value:$}),void 0!==e.id?n(e.action,e.id):n(e.action),clearInterval(i)})},i=setInterval(r,1e3)},changeData:function(t,e){var a=t.commit;a(T,{index:e.index,value:e.value})},search:function(t,e){var a=t.getters,n=t.commit,s=t.dispatch;n(T,{index:"msg",value:"Pesquisando.... Aguarde!"});var r=[],i={headers:a.auth.headers,params:{q:e.q,type:e.type}};a.http.get("/search",i).then(function(t){if(204===t.status)n(T,{index:"msg",value:"Não há dados para exibir!"});else{var a=[];I()(t.data["".concat(e.type,"s")].items,function(t,e){e>0&&e%6===0&&(r.push(a),a=[]),a.push(t)}),a.length>0&&r.push(a);var s="track"!==e.type?r:t.data["".concat(e.type,"s")].items;n(T,{index:"searched",value:s}),n(T,{index:"msg",value:""})}},function(t){401===t.response.status&&(sessionStorage.setItem("valid",!1),s("authAgain",{action:"search",obj:e})),console.log(t)})}},mutations:Object(S["a"])({},T,function(t,e){t[e.index]=e.value}),getters:{auth:function(t){return t.auth},http:function(t){return t.http},searched:function(t){return t.searched}},modules:{Albums:z,Artistas:U,Musicas:Q}});n["default"].use(r.a),n["default"].mixin(v.utils),n["default"].config.productionTip=!1,new n["default"]({router:O,store:et,render:function(t){return t(p)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var n=a("5e27"),s=a.n(n);s.a},"5e27":function(t,e,a){}});
//# sourceMappingURL=app.8e1a8558.js.map