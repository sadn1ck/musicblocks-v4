(self.webpackChunkmusicblocks=self.webpackChunkmusicblocks||[]).push([[6636],{6636:function(e,n,t){"use strict";t.r(n),t.d(n,{_serializeComponentDependencies:function(){return d},getComponent:function(){return m}});var r=t(885),i=t(5861),s=t(4687),o=t.n(s),c=t(9274);function u(e,n){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,n){if(e){if("string"==typeof e)return a(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?a(e,n):void 0}}(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,o=!0,c=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return o=e.done,e},e:function(e){c=!0,s=e},f:function(){try{o||null==t.return||t.return()}finally{if(c)throw s}}}}function a(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var p={};function d(e){var n=e.components,t=n.length,r=function(){for(var e=new Array(t),r=0;r<t;r++){var i=n[r];if(e[r]=new Array(t),e[r].fill(!1),"parents"in i)for(var s=0;s<t;s++){var o=n[s];i.parents.includes(o.name)&&(e[r][s]=!0)}}return e}();return{components:function(){for(var e=[],i=[],s=n.map((function(e,n){return n}));s.length>0;){for(var o=function(n){for(var o=!1,c=0;c<t;c++)if(!0===r[n][c]){o=!0;break}o||e.includes(n)||(i.push(n),s.splice(s.findIndex((function(e){return e===n})),1))},c=0;c<t;c++)o(c);if(0===i.length)throw Error("Invalid Config: dependency resolution results in a cyclic graph");var a,p=u(i);try{for(p.s();!(a=p.n()).done;){var d=a.value;e.push(d);for(var m=0;m<t;m++)r[m][d]=!1}}catch(e){p.e(e)}finally{p.f()}i=[]}return e}().map((function(e){return n[e]}))}}function m(e){return e in p?p[e]:null}(0,i.Z)(o().mark((function e(){var n,i,s,u;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,e.next=8;break;case 4:i=e.sent,n=i.default,e.next=9;break;case 8:throw Error();case 9:e.next=17;break;case 11:return e.prev=11,e.t0=e.catch(0),e.next=15,t(6787)("./".concat("base",".json"));case 15:s=e.sent,n=s.default;case 17:u=[],d(n).components.forEach((function(e){u.push(t(4190)("./".concat(e.name)).then((function(n){return"elements"in e&&("boolean"==typeof e.elements?e.elements&&(0,c.registerElementSpecificationEntries)(n.specification):(0,c.registerElementSpecificationEntries)(Object.fromEntries(e.elements.map((function(e){return[e,n.specification[e]]})).filter((function(e){var n=(0,r.Z)(e,2);return n[0],void 0!==n[1]}))))),new Promise((function(t){n.mount("flags"in e?e.flags:void 0).then((function(){return t([e.name,n])}))}))})))})),Promise.all(u).then((function(e){(0,c.registerElementSpecificationEntries)(c.librarySpecification);var n=e.entries();!function e(t){if(!t.done){var i=(0,r.Z)(t.value,2),s=(i[0],(0,r.Z)(i[1],2)),o=s[0],c=s[1];p[o]=c,c.setup().then((function(){return e(n.next())}))}}(n.next())}));case 21:case"end":return e.stop()}}),e,null,[[0,11]])})))()},4190:function(e,n,t){var r={"./editor":[5252,9,5423,6840,8888],"./editor/":[5252,9,5423,6840,8888],"./editor/@types":[3436,9,3436],"./editor/@types/":[3436,9,3436],"./editor/@types/index":[3436,9,3436],"./editor/@types/index.ts":[3436,9,3436],"./editor/core":[678,9,5423,678],"./editor/core/":[678,9,5423,678],"./editor/core/errors":[6111,9,6111],"./editor/core/errors.ts":[6111,9,6111],"./editor/core/index":[678,9,5423,678],"./editor/core/index.ts":[678,9,5423,678],"./editor/index":[5252,9,5423,6840,8888],"./editor/index.ts":[5252,9,5423,6840,8888],"./editor/view":[6840,9,5423,6840,5018],"./editor/view/":[6840,9,5423,6840,5018],"./editor/view/components":[337,9,337],"./editor/view/components/":[337,9,337],"./editor/view/components/button":[7731,9,7731],"./editor/view/components/button/":[7731,9,7731],"./editor/view/components/button/index":[7731,9,7731],"./editor/view/components/button/index.scss":[5027,9,5027],"./editor/view/components/button/index.tsx":[7731,9,7731],"./editor/view/components/index":[337,9,337],"./editor/view/components/index.scss":[2739,9,2739],"./editor/view/components/index.tsx":[337,9,337],"./editor/view/index":[6840,9,5423,6840,5018],"./editor/view/index.ts":[6840,9,5423,6840,5018],"./editor/view/resources/build.svg":[4822,1,4822],"./editor/view/resources/close.svg":[6472,1,6472],"./editor/view/resources/code.svg":[3281,1,3281],"./editor/view/resources/help.svg":[6231,1,6231],"./imp-exp/imp-exp":[3912,9,3912],"./imp-exp/imp-exp.ts":[3912,9,3912],"./menu":[8181,9,7528,2233],"./menu/":[8181,9,7528,2233],"./menu/index":[8181,9,7528,2233],"./menu/index.ts":[8181,9,7528,2233],"./menu/view":[9999,9,7528,8064],"./menu/view/":[9999,9,7528,8064],"./menu/view/components":[7528,9,7528,4987],"./menu/view/components/":[7528,9,7528,4987],"./menu/view/components/index":[7528,9,7528,4987],"./menu/view/components/index.scss":[2762,9,2762],"./menu/view/components/index.tsx":[7528,9,7528,4987],"./menu/view/index":[9999,9,7528,8064],"./menu/view/index.ts":[9999,9,7528,8064],"./menu/view/resources/exportDrawing.svg":[2987,1,2987],"./menu/view/resources/reset.svg":[3853,1,3853],"./menu/view/resources/run.svg":[7694,1,7694],"./menu/view/resources/saveProjectHTML.svg":[6236,1,6236],"./menu/view/resources/startRecording.svg":[4905,1,4905],"./menu/view/resources/stop.svg":[8299,1,8299],"./menu/view/resources/stopRecording.svg":[7748,1,7748],"./painter":[7586,9,4035,349,8393],"./painter/":[7586,9,4035,349,8393],"./painter/@types/index.d":[8246,9,8246],"./painter/@types/index.d.ts":[8246,9,8246],"./painter/core/sketchP5":[6329,9,4035,6329],"./painter/core/sketchP5.ts":[6329,9,4035,6329],"./painter/core/utils":[2132,9,2132],"./painter/core/utils.ts":[2132,9,2132],"./painter/index":[7586,9,4035,349,8393],"./painter/index.ts":[7586,9,4035,349,8393],"./painter/painter":[349,9,4035,349,7189],"./painter/painter.ts":[349,9,4035,349,7189],"./painter/view":[6163,9,4035,6163],"./painter/view/":[6163,9,4035,6163],"./painter/view/components":[1904,9,4035,1904],"./painter/view/components/":[1904,9,4035,1904],"./painter/view/components/index":[1904,9,4035,1904],"./painter/view/components/index.scss":[2540,9,2540],"./painter/view/components/index.tsx":[1904,9,4035,1904],"./painter/view/components/utils/background":[1439,9,4035,1439],"./painter/view/components/utils/background.ts":[1439,9,4035,1439],"./painter/view/index":[6163,9,4035,6163],"./painter/view/index.ts":[6163,9,4035,6163],"./painter/view/resources/mouse.svg":[491,1,491],"./painter/view/sprite":[7818,9,7818],"./painter/view/sprite.ts":[7818,9,7818],"./singer":[2066,9,752,2066],"./singer/":[2066,9,752,2066],"./singer/@types/currentPitch.d":[4181,9,4181],"./singer/@types/currentPitch.d.ts":[4181,9,4181],"./singer/@types/errors.d":[3894,9,3894],"./singer/@types/errors.d.ts":[3894,9,3894],"./singer/@types/keySignature.d":[8732,9,8732],"./singer/@types/keySignature.d.ts":[8732,9,8732],"./singer/@types/scale.d":[9990,9,9990],"./singer/@types/scale.d.ts":[9990,9,9990],"./singer/@types/temperament.d":[3606,9,3606],"./singer/@types/temperament.d.ts":[3606,9,3606],"./singer/core/currentPitch":[7606,9,8785,9737,5178,7606],"./singer/core/currentPitch.ts":[7606,9,8785,9737,5178,7606],"./singer/core/errors":[197,9,197],"./singer/core/errors.ts":[197,9,197],"./singer/core/keySignature":[5178,9,8785,5178,4942],"./singer/core/keySignature.ts":[5178,9,8785,5178,4942],"./singer/core/musicUtils":[8785,9,8785],"./singer/core/musicUtils.ts":[8785,9,8785],"./singer/core/scale":[4116,9,4116],"./singer/core/scale.ts":[4116,9,4116],"./singer/core/temperament":[9737,9,8785,9737],"./singer/core/temperament.ts":[9737,9,8785,9737],"./singer/core/tests/currentPitch.test":[9120,9,8785,9737,5178,9120],"./singer/core/tests/currentPitch.test.ts":[9120,9,8785,9737,5178,9120],"./singer/core/tests/keySignature.test":[1398,9,8785,9737,5178,1398],"./singer/core/tests/keySignature.test.ts":[1398,9,8785,9737,5178,1398],"./singer/core/tests/musicUtils.test":[9681,9,8785,9681],"./singer/core/tests/musicUtils.test.ts":[9681,9,8785,9681],"./singer/core/tests/scale.test":[5589,9,5589],"./singer/core/tests/scale.test.ts":[5589,9,5589],"./singer/core/tests/temperament.test":[3363,9,8785,9737,3363],"./singer/core/tests/temperament.test.ts":[3363,9,8785,9737,3363],"./singer/index":[2066,9,752,2066],"./singer/index.ts":[2066,9,752,2066],"./singer/singer":[3068,9,752,3068],"./singer/singer.ts":[3068,9,752,3068]};function i(e){if(!t.o(r,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=r[e],i=n[0];return Promise.all(n.slice(2).map(t.e)).then((function(){return t.t(i,16|n[1])}))}i.keys=function(){return Object.keys(r)},i.id=4190,e.exports=i},3878:function(e){function n(e){return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}))}n.keys=function(){return[]},n.resolve=n,n.id=3878,e.exports=n},6787:function(e,n,t){var r={"./base.json":[9806,9806]};function i(e){if(!t.o(r,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=r[e],i=n[0];return t.e(n[1]).then((function(){return t.t(i,19)}))}i.keys=function(){return Object.keys(r)},i.id=6787,e.exports=i}}]);