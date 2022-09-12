"use strict";(self.webpackChunkmusicblocks=self.webpackChunkmusicblocks||[]).push([[6840,678,4822,6472,3281,6231],{6111:function(t,n,M){M.r(n),M.d(n,{InvalidArgumentError:function(){return o},InvalidInstructionError:function(){return N}});var e=M(5671),u=M(3144),r=M(136),i=M(3930),c=M(1120);function I(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var M,e=(0,c.Z)(t);if(n){var u=(0,c.Z)(this).constructor;M=Reflect.construct(e,arguments,u)}else M=e.apply(this,arguments);return(0,i.Z)(this,M)}}var j=function(t){(0,r.Z)(M,t);var n=I(M);function M(t,u){var r;return(0,e.Z)(this,M),(r=n.call(this,u))._name=t,r._message=u,r}return(0,u.Z)(M,[{key:"toString",value:function(){return"".concat(this._name,": ").concat(this._message)}},{key:"type",get:function(){return this._name}}]),M}((0,M(2407).Z)(Error)),N=function(t){(0,r.Z)(M,t);var n=I(M);function M(t){return(0,e.Z)(this,M),n.call(this,"InvalidInstructionError",t)}return(0,u.Z)(M)}(j),o=function(t){(0,r.Z)(M,t);var n=I(M);function M(t){return(0,e.Z)(this,M),n.call(this,"InvalidArgumentError",t)}return(0,u.Z)(M)}(j)},678:function(t,n,M){M.r(n),M.d(n,{buildProgram:function(){return s},generateAPI:function(){return g},resetProgram:function(){return a}});var e,u=M(1002),r=M(4942),i=M(885),c=M(3320),I=M(9274),j=M(1645),N=M(6111);function o(t,n){var M=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),M.push.apply(M,e)}return M}function L(t){for(var n=1;n<arguments.length;n++){var M=null!=arguments[n]?arguments[n]:{};n%2?o(Object(M),!0).forEach((function(n){(0,r.Z)(t,n,M[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(M)):o(Object(M)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(M,n))}))}return t}function g(){e=Object.fromEntries(Object.entries((0,I.getSpecificationSnapshot)()).map((function(t){var n=(0,i.Z)(t,2);return[n[0],L(L({},n[1]),{},{args:null})]}))),Object.entries(e).forEach((function(t){var n=(0,i.Z)(t,2),M=n[0],u=(n[1],(0,j.addInstance)(M)),r=(0,j.getInstance)(u).instance;e[M].args=0===r.argLabels.length?null:r.argLabels.map((function(t){return[t,r.getArgType(t)]})),(0,j.removeInstance)(u)}));var t={};Object.entries(e).forEach((function(n){var M=(0,i.Z)(n,2),e=M[0],u=M[1],r=u.category;r in t||(t[r]=[]),t[r].push([e,u.type,u.args])}));var n=[];return Object.entries(t).forEach((function(t){var M=(0,i.Z)(t,2),e=M[0],u=M[1];n.push('# "'.concat(e,'" elements\n# ------------------------')),u.forEach((function(t){var M=(0,i.Z)(t,3),e=M[0],u=M[1],r=M[2];"Data"===u?n.push("- [instruction]:\n    [param]:\n      ".concat(e,": string")):"Expression"===u?null===r||(1===r.length?n.push("- [instruction]:\n    ".concat(e,":\n").concat(r.map((function(t){var n=(0,i.Z)(t,2),M=n[0],e=n[1];return"      ".concat(M,": ").concat(e.join("|"))})).join("\n"))):n.push("- [instruction]:\n    [param]:\n      ".concat(e,":\n").concat(r.map((function(t){var n=(0,i.Z)(t,2),M=n[0],e=n[1];return"        ".concat(M,": ").concat(e.join("|"))})).join("\n")))):"Statement"===u?null===r?n.push("- ".concat(e)):1===r.length?n.push("- ".concat(e,": ").concat(r[0][1].join("|"))):n.push("- ".concat(e,":\n").concat(r.map((function(t){var n=(0,i.Z)(t,2),M=n[0],e=n[1];return"    ".concat(M,": ").concat(e.join("|"))})).join("\n"))):"Block"===u&&(null===r?n.push("- ".concat(e,":\n    scope:\n      - [instruction]\n      - ...")):n.push("- ".concat(e,":\n").concat(r.map((function(t){var n=(0,i.Z)(t,2),M=n[0],e=n[1];return"    ".concat(M,": ").concat(e.join("|"))})).join("\n"),"\n    scope:\n      - [instruction]\n      - ...")))})),n.push("\n")})),n.join("\n")}function s(t){var n;function M(){function t(t){var n=e[t].args;if(null===n)throw new N.InvalidArgumentError('"'.concat(t,'" does not take arguments'));if(1!==n.length)throw new N.InvalidArgumentError('"'.concat(t,'" takes ').concat(n.length," arguments but only 1 argument supplied"));return n[0][0]}function M(t,n){var M=e[t].args;if(null===M)throw new N.InvalidArgumentError('"'.concat(t,'" does not take arguments'));var u="Block"===e[t].type,r=M.map((function(t){var n=(0,i.Z)(t,2),M=n[0];return n[1],M})),c=Object.keys(n);if(u){if(!c.includes("scope"))throw new N.InvalidInstructionError('"'.concat(t,'" expects a scope'));if(!(n.scope instanceof Array))throw new N.InvalidInstructionError('"'.concat(t,'" supplied with invalid scope'));r.push("scope")}if(r.length!==c.length)throw new N.InvalidArgumentError('invalid number of arguments supplied for "'.concat(t,'"'));if(0!==r.filter((function(t){return!c.includes(t)})).length)throw new N.InvalidArgumentError('invalid arguments supplied for "'.concat(t,'"'))}function r(n,c,I){if("object"!==(0,u.Z)(I))return{elementName:"boolean"==typeof I?"value-boolean":"number"==typeof I?"value-number":"value-string",value:I.toString()};if(1!==Object.keys(I).length)throw new N.InvalidArgumentError('invalid argument for parameter "'.concat(c,'" of "').concat(n,'"'));var j=(0,i.Z)(Object.entries(I)[0],2),o=j[0],L=j[1];if(c===o)return r(n,c,L);if(!(o in e))throw new N.InvalidInstructionError('"'.concat(o,'" is not a valid argument for "').concat(o,'"'));var g=e[o];if("Data"===g.type){if("string"==typeof L)return{elementName:o,value:L};throw new N.InvalidArgumentError("invalid argument for 'Data' element \"".concat(o,'"'))}if("Expression"===g.type){var s={elementName:"",argMap:null};if(s.elementName=o,"object"!==(0,u.Z)(L)||1===Object.keys(L).length){var a=t(o);s.argMap=Object.fromEntries([[a,r(o,a,L)]])}else M(o,L),s.argMap=Object.fromEntries(Object.entries(L).map((function(t){var n=(0,i.Z)(t,2),M=n[0],e=n[1];return[M,r(o,M,e)]})));return s}throw new N.InvalidArgumentError('"'.concat(o,"\" is not a 'Data' or 'Expression' element"))}function c(n){if("string"==typeof n){if(!(n in e))throw new N.InvalidInstructionError('"'.concat(n,'" is not a valid instruction'));return{elementName:n,argMap:null}}if(1!==Object.keys(n).length)throw new N.InvalidInstructionError("wrong instruction format encountered");var I=(0,i.Z)(Object.entries(n)[0],2),j=I[0],o=I[1];if(!(j in e))throw new N.InvalidInstructionError('"'.concat(n,'" is not a valid instruction'));var L={elementName:"",argMap:null};if(L.elementName=j,"object"!==(0,u.Z)(o)||1===Object.keys(o).length){var g=t(j);L.argMap=Object.fromEntries([[g,r(j,g,o)]])}else M(j,o),L.argMap=Object.fromEntries(Object.entries(o).filter((function(t){var n=(0,i.Z)(t,2),M=n[0];return n[1],"scope"!==M})).map((function(t){var n=(0,i.Z)(t,2),M=n[0],e=n[1];return[M,r(j,M,e)]}))),"scope"in o&&(L.scope=o.scope.map((function(t){return c(t)})));return L}var j={process:[],routine:[],crumbs:[n.map((function(t){return c(t)}))]};(0,I.generateFromSnapshot)(j)}return new Promise((function(e){if(!1===function(){try{return(n=(0,c.load)(t))instanceof Array}catch(t){var M=t;return console.log({mark:M.mark,message:M.message,name:M.name,reason:M.reason}),!1}}())e(!1);else{var u=(0,I.generateSnapshot)();try{M(),e(!0)}catch(t){console.log(t),(0,I.generateFromSnapshot)(u),e(!1)}}}))}function a(){(0,I.resetSyntaxTree)()}},7731:function(t,n,M){M.r(n),M.d(n,{setButtonImg:function(){return g},setup:function(){return L}});var e,u,r,i=M(885),c=M(5861),I=M(4687),j=M.n(I),N=M(3281),o=M(6472);function L(t){t.id="editor-toolbar-btn",e=t;var n=function(){var t=(0,c.Z)(j().mark((function t(n){var M;return j().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(n).then((function(t){return t.text()}));case 2:return M=t.sent,t.abrupt("return",new Promise((function(t){t(M)})));case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}();Promise.all([n(N),n(o)]).then((function(t){var n=(0,i.Z)(t,2),M=n[0],e=n[1];u=M,r=e,g("code")}))}function g(t){e.innerHTML="code"===t?u:r}},337:function(t,n,M){M.r(n),M.d(n,{resetStates:function(){return l},setCode:function(){return w},setHelp:function(){return y},setStatus:function(){return A},setup:function(){return D}});var e,u,r,i,c,I,j,N,o=M(885),L=M(7294),g=M(3935),s=M(6231),a=M(4822),C=M(6472),T=M(5893);function z(){var t=(0,L.useRef)(null),n=(0,L.useRef)(null),M=(0,L.useRef)(null),g=(0,L.useRef)(null),z=(0,L.useRef)(null),D=(0,L.useRef)(null),w=(0,L.useState)(!1),A=(0,o.Z)(w,2),y=A[0],l=A[1];return(0,L.useEffect)((function(){u=t.current,r=n.current,i=M.current,c=g.current,I=z.current,j=D.current,N(),e.addEventListener("resetstates",(function(){l(!1)})),[[s,r],[a,c],[C,I]].forEach((function(t){var n=(0,o.Z)(t,2),M=n[0],e=n[1];fetch(M).then((function(t){return t.text()})).then((function(t){return e.innerHTML=t}))}))}),[]),(0,T.jsxs)(T.Fragment,{children:[(0,T.jsxs)("div",{className:"editor-wrapper ".concat(y?"editor-wrapper-hidden":""),children:[(0,T.jsx)("textarea",{id:"editor-codebox",ref:t,onInput:function(){return i.innerHTML=""}}),(0,T.jsxs)("div",{id:"editor-console",children:[(0,T.jsx)("button",{id:"editor-btn-help",ref:n,onClick:function(){return l(!0)}}),(0,T.jsx)("div",{id:"editor-status-wrapper",children:(0,T.jsx)("p",{id:"editor-status",ref:M})}),(0,T.jsx)("button",{id:"editor-btn-build",ref:g,onClick:function(){return e.dispatchEvent(new CustomEvent("buildprogram",{detail:u.value}))}})]})]}),(0,T.jsxs)("div",{className:"editor-wrapper ".concat(y?"":"editor-wrapper-hidden"),children:[(0,T.jsx)("textarea",{id:"editor-help",ref:D,readOnly:!0}),(0,T.jsx)("button",{id:"editor-help-close",ref:z,onClick:function(){return l(!1)}})]})]})}function D(t){return new Promise((function(n){(e=t).id="editor",g.render((0,T.jsx)(z,{}),t),N=function(){return requestAnimationFrame((function(){return n()}))}}))}function w(t){u.value=t}function A(t){i.innerHTML=t}function y(t){j.innerHTML=t}function l(){e.dispatchEvent(new Event("resetstates"))}},6840:function(t,n,M){M.r(n),M.d(n,{getElement:function(){return g},resetStates:function(){return N.resetStates},setButtonState:function(){return s},setCode:function(){return N.setCode},setHelp:function(){return N.setHelp},setStatus:function(){return N.setStatus},setup:function(){return L}});var e,u,r=M(5861),i=M(4687),c=M.n(i),I=M(4266),j=M(678),N=M(337),o=M(7731);function L(){return new Promise((function(t){(0,r.Z)(c().mark((function n(){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,new Promise((function(t){e=document.createElement("div"),(0,N.setup)(e).then((function(){e.addEventListener("buildprogram",(function(t){(0,j.buildProgram)(t.detail).then((function(t){return(0,N.setStatus)(t?"Successfully Built":"Invalid Code")}))})),t()}))}));case 2:return n.next=4,new Promise((function(t){u=(0,I.fC)({location:"toolbar",type:"button",position:"cluster-a"}),(0,o.setup)(u),requestAnimationFrame((function(){return t()}))}));case 4:t();case 5:case"end":return n.stop()}}),n)})))()}))}function g(t){return"button"===t?u:e}function s(t){(0,o.setButtonImg)("clicked"===t?"cross":"code")}},4822:function(t){t.exports="data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB4PSIwcHgiCiAgeT0iMHB4IgogIHdpZHRoPSI2NCIKICBoZWlnaHQ9IjY0IgogIHZpZXdCb3g9IjAgMCAxNzIgMTcyIgogIHN0eWxlPSJmaWxsOiAjMDAwMDAwIgo+CiAgPGcKICAgIGZpbGw9Im5vbmUiCiAgICBmaWxsLXJ1bGU9Im5vbnplcm8iCiAgICBzdHJva2U9Im5vbmUiCiAgICBzdHJva2Utd2lkdGg9IjEiCiAgICBzdHJva2UtbGluZWNhcD0iYnV0dCIKICAgIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiCiAgICBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiCiAgICBzdHJva2UtZGFzaGFycmF5PSIiCiAgICBzdHJva2UtZGFzaG9mZnNldD0iMCIKICAgIGZvbnQtZmFtaWx5PSJub25lIgogICAgZm9udC13ZWlnaHQ9Im5vbmUiCiAgICBmb250LXNpemU9Im5vbmUiCiAgICB0ZXh0LWFuY2hvcj0ibm9uZSIKICAgIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIgogID4KICAgIDxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+CiAgICA8ZyBmaWxsPSIiIGNsYXNzPSJwYXRoLWZpbGwiPgogICAgICA8cGF0aAogICAgICAgIGQ9Ik0xMzIuNjU1LC0wLjMyMjVjLTEzLjA3NDY5LDAuMjU1MzEgLTI4Ljk0NDM3LDguNDExODggLTM2LjMzNSwxNS44MDI1Yy05LjM5MjgxLDkuMzkyODEgLTEwLjIxMjUsMjIuMjkyODEgLTIuMzY1LDM1LjY5bC0xMi4yNTUsMTIuMjU1bDQuNDA3NSw0LjNjMi4zMTEyNSwtMS45MzUgNS4yOTQzOCwtMy4wMSA4LjQ5MjUsLTMuMDFjMy41NjA5NCwwIDYuOTc0MDYsMS4yOSA5LjM1MjUsMy42NTVsMi4zNjUsMi40NzI1YzMuMTMwOTQsMy4xMzA5NCA0LjQ3NDY5LDcuNTUxODggMy42NTUsMTEuODI1bDIuMzY1LDIuNDcyNWMwLjQzLDAgMC44NiwwLjA4MDYzIDEuMjksMC4xMDc1bDcuMzEsLTcuMzFjNi4xNTQzOCwzLjMwNTYzIDEyLjA4MDMxLDQuOTQ1IDE3LjUyMjUsNC45NDVjNi43MDUzMSwwIDEyLjczODc1LC0yLjUyNjI1IDE3LjczNzUsLTcuNTI1YzkuMjQ1LC05LjI0NSAxOS4zMDk2OSwtMzAuNzk4NzUgMTQuNjIsLTQ0LjgyNzVjLTAuMzc2MjUsLTEuMTI4NzUgLTEuMzAzNDQsLTEuOTg4NzUgLTIuNDcyNSwtMi4yNTc1Yy0xLjE2OTA2LC0wLjI4MjE5IC0yLjM3ODQ0LDAuMTIwOTQgLTMuMjI1LDAuOTY3NWwtMTguMjc1LDE4LjE2NzVjLTEuMTE1MzEsMS4xMTUzMSAtMy4yMTE1NiwxLjA0ODEzIC00LjQwNzUsMGwtMTguMjc1LC0xOC4xNjc1Yy0xLjExNTMxLC0xLjExNTMxIC0xLjA0ODEyLC0zLjE5ODEyIDAsLTQuNDA3NWwxOC4yNzUsLTE4LjI3NWMwLjgzMzEzLC0wLjgzMzEyIDEuMjM2MjUsLTIuMDY5MzcgMC45Njc1LC0zLjIyNWMtMC4yNjg3NSwtMS4xNTU2MiAtMS4xNDIxOSwtMi4wODI4MSAtMi4yNTc1LC0yLjQ3MjVjLTIuNTgsLTAuODg2ODcgLTUuNDY5MDYsLTEuMjM2MjUgLTguNDkyNSwtMS4xODI1ek04LjYsMGwtOC42LDguNmwxNC40MDUsMjUuMTU1bDkuMzUyNSwtMS4zOTc1bDUzLjY0MjUsNTMuNjQyNWwtNC4wODUsNC4wODVjLTIuMzc4NDQsMi4zNzg0NCAtMi4zNzg0NCw2LjY1MTU2IDAsOS4wM2wyLjM2NSwyLjM2NWMxLjY5MzEzLDEuNjc5NjkgNC41NDE4OCwyLjI0NDA2IDYuNzcyNSwxLjM5NzVsMi4xNSwtMC43NTI1bDcuNTI1LDcuNTI1bC0wLjIxNSwxLjYxMjVjLTAuMzg5NjksMy42NTUgMS4wNDgxMyw3LjQ5ODEzIDMuNzYyNSwxMC4yMTI1bDQ1LjE1LDQ1LjI1NzVjMy40OTM3NSwzLjQ5Mzc1IDguMDc1OTQsNS4zNzUgMTIuOSw1LjM3NWM0LjgyNDA2LDAgOS40NzM0NCwtMS45NDg0NCAxMy4wMDc1LC01LjQ4MjVjNi44OTM0NCwtNy4yMTU5NCA2Ljk0NzE5LC0xOC43NDUzMSAwLC0yNS42OTI1bC00NS4yNTc1LC00NS4yNTc1Yy0yLjU2NjU2LC0yLjU2NjU2IC02LjI0ODQ0LC0zLjkyMzc1IC0xMC4yMTI1LC0zLjY1NWwtMS42MTI1LDAuMTA3NWwtNy41MjUsLTcuNTI1bDAuNzUyNSwtMi4xNWMwLjkxMzc1LC0yLjM1MTU2IDAuMzc2MjUsLTQuOTk4NzUgLTEuMzk3NSwtNi43NzI1bC0yLjM2NSwtMi4zNjVjLTIuMTc2ODcsLTIuMTc2ODcgLTYuODUzMTIsLTIuMTc2ODcgLTkuMDMsMGwtNC4wODUsNC4wODVsLTUzLjY0MjUsLTUzLjY0MjVsMS4zOTc1LC05LjM1MjV6TTYzLjQyNSw4MS43bC0yMC44NTUsMjAuODU1Yy0yLjM3ODQ0LC0wLjQ3MDMxIC00LjcxNjU2LC0wLjc1MjUgLTcuMDk1LC0wLjc1MjVjLTE5LjM1LDAgLTM1LjE1MjUsMTUuODAyNSAtMzUuMTUyNSwzNS4xNTI1YzAsMTkuMzUgMTUuODAyNSwzNS4wNDUgMzUuMTUyNSwzNS4wNDVjMTkuMzUsMCAzNS4wNDUsLTE1LjY5NSAzNS4wNDUsLTM1LjA0NWMwLC0yLjkxNTk0IC0wLjI0MTg3LC01LjQ0MjE5IC0wLjg2LC03Ljc0bDE1LjM3MjUsLTE1LjM3MjVjLTAuMDQwMzEsLTAuNTI0MDYgLTAuMTIwOTQsLTEuMDg4NDQgLTAuMTA3NSwtMS42MTI1bC0yLjI1NzUsLTIuMjU3NWMtNC4yMDU5NCwwLjc5MjgxIC04LjgwMTU2LC0wLjYzMTU2IC0xMS44MjUsLTMuNjU1bC0yLjQ3MjUsLTIuMzY1Yy00LjgxMDYyLC00LjgxMDYyIC00Ljk3MTg3LC0xMi43MjUzMSAtMC42NDUsLTE3Ljg0NXpNMTA5LjExMjUsMTA0LjE2NzVsNDEuMjgsNDEuMjhsLTQuOTQ1LDQuOTQ1bC00MS4yOCwtNDEuMjh6TTM5LjU2LDEyMC40bDEyLjA0LDEyLjA0bC00LjA4NSwxNi4xMjVsLTE2LjU1NSw0LjUxNWwtMTIuMDQsLTEyLjA0bDQuNTE1LC0xNi4xMjV6IgogICAgICA+PC9wYXRoPgogICAgPC9nPgogIDwvZz4KPC9zdmc+Cg=="},6472:function(t){t.exports="data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB4PSIwcHgiCiAgeT0iMHB4IgogIHdpZHRoPSI2NCIKICBoZWlnaHQ9IjY0IgogIHZpZXdCb3g9IjAgMCAxNzIgMTcyIgogIHN0eWxlPSJmaWxsOiAjMDAwMDAwIgo+CiAgPGcKICAgIGZpbGw9Im5vbmUiCiAgICBmaWxsLXJ1bGU9Im5vbnplcm8iCiAgICBzdHJva2U9Im5vbmUiCiAgICBzdHJva2Utd2lkdGg9IjEiCiAgICBzdHJva2UtbGluZWNhcD0iYnV0dCIKICAgIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiCiAgICBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiCiAgICBzdHJva2UtZGFzaGFycmF5PSIiCiAgICBzdHJva2UtZGFzaG9mZnNldD0iMCIKICAgIGZvbnQtZmFtaWx5PSJub25lIgogICAgZm9udC13ZWlnaHQ9Im5vbmUiCiAgICBmb250LXNpemU9Im5vbmUiCiAgICB0ZXh0LWFuY2hvcj0ibm9uZSIKICAgIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIgogID4KICAgIDxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+CiAgICA8ZyBmaWxsPSIiIGNsYXNzPSJwYXRoLWZpbGwiPgogICAgICA8cGF0aAogICAgICAgIGQ9Ik00Mi45MzAwMSwzNS43NjMzNWMtMi45MTYyOCwwLjAwMDc3IC01LjU0MTMzLDEuNzY4NDEgLTYuNjM4NzEsNC40NzAzNWMtMS4wOTczNywyLjcwMTk0IC0wLjQ0ODI1LDUuNzk5MzcgMS42NDE2NCw3LjgzMzM2bDM3LjkzMjk1LDM3LjkzMjk0bC0zNy45MzI5NSwzNy45MzI5NGMtMS44NzIyLDEuNzk3NTIgLTIuNjI2MzcsNC40NjY3NCAtMS45NzE2NCw2Ljk3ODIzYzAuNjU0NzMsMi41MTE0OSAyLjYxNjA0LDQuNDcyOCA1LjEyNzUzLDUuMTI3NTNjMi41MTE0OSwwLjY1NDczIDUuMTgwNzEsLTAuMDk5NDQgNi45NzgyMywtMS45NzE2NWwzNy45MzI5NCwtMzcuOTMyOTRsMzcuOTMyOTQsMzcuOTMyOTRjMS43OTc1MiwxLjg3MjIzIDQuNDY2NzUsMi42MjY0MSA2Ljk3ODI1LDEuOTcxNjhjMi41MTE1LC0wLjY1NDcyIDQuNDcyODIsLTIuNjE2MDUgNS4xMjc1NSwtNS4xMjc1NWMwLjY1NDcyLC0yLjUxMTUgLTAuMDk5NDYsLTUuMTgwNzMgLTEuOTcxNjgsLTYuOTc4MjVsLTM3LjkzMjk0LC0zNy45MzI5NGwzNy45MzI5NCwtMzcuOTMyOTRjMi4xMTk2MiwtMi4wNjAzNSAyLjc1Njk0LC01LjIxMDY0IDEuNjA0ODYsLTcuOTMyODdjLTEuMTUyMDcsLTIuNzIyMjQgLTMuODU3MTksLTQuNDU3OTcgLTYuODExODksLTQuMzcwODRjLTEuODYxODksMC4wNTU0OCAtMy42MjkwNSwwLjgzMzYzIC00LjkyNzA4LDIuMTY5NmwtMzcuOTMyOTQsMzcuOTMyOTVsLTM3LjkzMjk0LC0zNy45MzI5NWMtMS4zNDkyOCwtMS4zODY5OCAtMy4yMDIwMywtMi4xNjk0OCAtNS4xMzcwNCwtMi4xNjk2eiIKICAgICAgPjwvcGF0aD4KICAgIDwvZz4KICA8L2c+Cjwvc3ZnPgo="},3281:function(t){t.exports="data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB4PSIwcHgiCiAgeT0iMHB4IgogIHdpZHRoPSI2NCIKICBoZWlnaHQ9IjY0IgogIHZpZXdCb3g9IjAgMCAxNzIgMTcyIgogIHN0eWxlPSJmaWxsOiAjMDAwMDAwIgo+CiAgPGcKICAgIGZpbGw9Im5vbmUiCiAgICBmaWxsLXJ1bGU9Im5vbnplcm8iCiAgICBzdHJva2U9Im5vbmUiCiAgICBzdHJva2Utd2lkdGg9IjEiCiAgICBzdHJva2UtbGluZWNhcD0iYnV0dCIKICAgIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiCiAgICBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiCiAgICBzdHJva2UtZGFzaGFycmF5PSIiCiAgICBzdHJva2UtZGFzaG9mZnNldD0iMCIKICAgIGZvbnQtZmFtaWx5PSJub25lIgogICAgZm9udC13ZWlnaHQ9Im5vbmUiCiAgICBmb250LXNpemU9Im5vbmUiCiAgICB0ZXh0LWFuY2hvcj0ibm9uZSIKICAgIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIgogID4KICAgIDxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+CiAgICA8ZyBmaWxsPSIiIGNsYXNzPSJwYXRoLWZpbGwiPgogICAgICA8cGF0aAogICAgICAgIGQ9Ik05Ny4zNzcwOCwyMi44NTQ5NWMtMi43MjQ1OCwwLjA1MDc4IC01LjAzNzA0LDIuMDEyMTYgLTUuNTMxNzcsNC42OTE5M2wtMjIuOTMzMzMsMTE0LjY2NjY3Yy0wLjQ2MjcsMi4wMzM1OSAwLjIxNTI4LDQuMTU4MDYgMS43NzA0Miw1LjU0NzdjMS41NTUxNCwxLjM4OTY1IDMuNzQyMTksMS44MjUzMSA1LjcxMTE0LDEuMTM3NjdjMS45Njg5NCwtMC42ODc2NCAzLjQwOTI2LC0yLjM5MDEzIDMuNzYxMTUsLTQuNDQ1OGwyMi45MzMzMywtMTE0LjY2NjY2YzAuMzY1NjQsLTEuNzEwNjIgLTAuMDY5NTcsLTMuNDk0NTggLTEuMTgxODksLTQuODQ0NjNjLTEuMTEyMzIsLTEuMzUwMDUgLTIuNzgwMDcsLTIuMTE4NTEgLTQuNTI5MDUsLTIuMDg2ODh6TTQxLjU3Nzg2LDQ1Ljc5OTQ4Yy0xLjg5MjM5LC0wLjAwMzc3IC0zLjY2NDc4LDAuOTI2NDIgLTQuNzM2NzIsMi40ODU5NGwtMjQuMzIxODcsMzQuNGMtMS40MDY4LDEuOTg1ODIgLTEuNDA2OCw0LjY0MzM1IDAsNi42MjkxN2wyNC4zMjE4NywzNC40YzEuODMwNTksMi41ODUxIDUuNDEwMjIsMy4xOTY3NCA3Ljk5NTMxLDEuMzY2MTVjMi41ODUxLC0xLjgzMDU5IDMuMTk2NzQsLTUuNDEwMjIgMS4zNjYxNSwtNy45OTUzMWwtMjEuOTgxNTEsLTMxLjA4NTQybDIxLjk4MTUxLC0zMS4wODU0MmMxLjI3MjI0LC0xLjc0MjQ2IDEuNDU4NjksLTQuMDUxNTggMC40ODI1LC01Ljk3NTU5Yy0wLjk3NjE5LC0xLjkyNDAxIC0yLjk0OTc2LC0zLjEzNzIgLTUuMTA3MjQsLTMuMTM5NTF6TTEzMS42NDI3MSw0NS43OTk0OGMtMi4xMjcyNSwwLjA2MzkzIC00LjA0NDA5LDEuMzAwOCAtNC45Nzg5MSwzLjIxMjdjLTAuOTM0ODEsMS45MTE5MSAtMC43MzM4LDQuMTg0MjkgMC41MjIxNCw1LjkwMjRsMjEuOTgxNTEsMzEuMDg1NDJsLTIxLjk4MTUxLDMxLjA4NTQyYy0xLjE4NDgyLDEuNjcyMjQgLTEuMzg3MzMsMy44NDk2MiAtMC41MzEyMSw1LjcxMTY4YzAuODU2MTIsMS44NjIwNiAyLjY0MDc0LDMuMTI1ODIgNC42ODE0MywzLjMxNTA4YzIuMDQwNjgsMC4xODkyNiA0LjAyNzI4LC0wLjcyNDc0IDUuMjExMjQsLTIuMzk3NmwyNC4zMjE4OCwtMzQuNGMxLjQwNjgsLTEuOTg1ODIgMS40MDY4LC00LjY0MzM1IDAsLTYuNjI5MTdsLTI0LjMyMTg4LC0zNC40Yy0xLjEwNTAzLC0xLjYwOTY1IC0yLjk1MzE3LC0yLjU0NjM4IC00LjkwNDY4LC0yLjQ4NTk0eiIKICAgICAgPjwvcGF0aD4KICAgIDwvZz4KICA8L2c+Cjwvc3ZnPgo="},6231:function(t){t.exports="data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB4PSIwcHgiCiAgeT0iMHB4IgogIHdpZHRoPSI2NCIKICBoZWlnaHQ9IjY0IgogIHZpZXdCb3g9IjAgMCAxNzIgMTcyIgogIHN0eWxlPSJmaWxsOiAjMDAwMDAwIgo+CiAgPGcKICAgIGZpbGw9Im5vbmUiCiAgICBmaWxsLXJ1bGU9Im5vbnplcm8iCiAgICBzdHJva2U9Im5vbmUiCiAgICBzdHJva2Utd2lkdGg9IjEiCiAgICBzdHJva2UtbGluZWNhcD0iYnV0dCIKICAgIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiCiAgICBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiCiAgICBzdHJva2UtZGFzaGFycmF5PSIiCiAgICBzdHJva2UtZGFzaG9mZnNldD0iMCIKICAgIGZvbnQtZmFtaWx5PSJub25lIgogICAgZm9udC13ZWlnaHQ9Im5vbmUiCiAgICBmb250LXNpemU9Im5vbmUiCiAgICB0ZXh0LWFuY2hvcj0ibm9uZSIKICAgIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIgogID4KICAgIDxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+CiAgICA8ZyBmaWxsPSIiIGNsYXNzPSJwYXRoLWZpbGwiPgogICAgICA8cGF0aAogICAgICAgIGQ9Ik04NiwxNy4yYy0zNy45OTQ4LDAgLTY4LjgsMzAuODA1MiAtNjguOCw2OC44YzAsMzcuOTk0OCAzMC44MDUyLDY4LjggNjguOCw2OC44YzM3Ljk5NDgsMCA2OC44LC0zMC44MDUyIDY4LjgsLTY4LjhjMCwtMzcuOTk0OCAtMzAuODA1MiwtNjguOCAtNjguOCwtNjguOHpNODYsMTI5Yy00Ljc0NzIsMCAtOC42LC0zLjg1MjggLTguNiwtOC42YzAsLTQuNzQ3MiAzLjg1MjgsLTguNiA4LjYsLTguNmM0Ljc0NzIsMCA4LjYsMy44NTI4IDguNiw4LjZjMCw0Ljc0NzIgLTMuODUyOCw4LjYgLTguNiw4LjZ6TTk3Ljg1NjUzLDg4Ljg2NjY3Yy0zLjc5NTQ3LDMuNTAzMDcgLTYuMTIzMiw1LjgwMjEzIC02LjEyMzIsOC42aC0xMS40NjY2N2MwLC03Ljk2MzYgNS40NDA5MywtMTIuOTg2IDkuODA5NzMsLTE3LjAyOGM0LjU4MDkzLC00LjIzMTIgNy4zOTAyNywtNy4wNTc3MyA3LjM5MDI3LC0xMS42Mzg2N2MwLC02LjMyMzg3IC01LjE0MjgsLTExLjQ2NjY3IC0xMS40NjY2NywtMTEuNDY2NjdjLTYuMzIzODcsMCAtMTEuNDY2NjcsNS4xNDI4IC0xMS40NjY2NywxMS40NjY2N2gtMTEuNDY2NjdjMCwtMTIuNjQ3NzMgMTAuMjg1NiwtMjIuOTMzMzMgMjIuOTMzMzMsLTIyLjkzMzMzYzEyLjY0NzczLDAgMjIuOTMzMzMsMTAuMjg1NiAyMi45MzMzMywyMi45MzMzM2MwLDkuODMyNjcgLTYuMTQwNCwxNS41MDI5MyAtMTEuMDc2OCwyMC4wNjY2N3oiCiAgICAgID48L3BhdGg+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4K"}}]);