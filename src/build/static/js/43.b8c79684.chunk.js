(this["webpackJsonpzhuoming-client"]=this["webpackJsonpzhuoming-client"]||[]).push([[43],{131:function(t,o,a){"use strict";a.r(o),a.d(o,"ion_backdrop",(function(){return c}));var n=a(16),i=a(17),r=a(33),c=function(){function t(t){Object(n.o)(this,t),this.ionBackdropTap=Object(n.g)(this,"ionBackdropTap",7),this.blocker=r.a.createBlocker({disableScroll:!0}),this.visible=!0,this.tappable=!0,this.stopPropagation=!0}return t.prototype.connectedCallback=function(){this.stopPropagation&&this.blocker.block()},t.prototype.disconnectedCallback=function(){this.blocker.unblock()},t.prototype.onMouseDown=function(t){this.emitTap(t)},t.prototype.emitTap=function(t){this.stopPropagation&&(t.preventDefault(),t.stopPropagation()),this.tappable&&this.ionBackdropTap.emit()},t.prototype.render=function(){var t,o=Object(i.b)(this);return Object(n.j)(n.c,{tabindex:"-1","aria-hidden":"true",class:(t={},t[o]=!0,t["backdrop-hide"]=!this.visible,t["backdrop-no-tappable"]=!this.tappable,t)})},t}();c.style={ios:":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);contain:strict;cursor:pointer;opacity:0.01;-ms-touch-action:none;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color, #000)}",md:":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);contain:strict;cursor:pointer;opacity:0.01;-ms-touch-action:none;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color, #000)}"}}}]);
//# sourceMappingURL=43.b8c79684.chunk.js.map