!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},u={},l=n.parcelRequired7c6;null==l&&((l=function(e){if(e in t)return t[e].exports;if(e in u){var n=u[e];delete u[e];var l={id:e,exports:{}};return t[e]=l,n.call(l.exports,l,l.exports),l.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,n){u[e]=n},n.parcelRequired7c6=l);var a=l("6JpON"),o={submitBtn:document.querySelector("button"),delay:document.querySelector('[name="delay"]'),step:document.querySelector('[name="step"]'),amount:document.querySelector('[name="amount"]')},r={delayValue:null,stepValue:null,amountValue:null};function i(e,n){return new Promise((function(t,u){setTimeout((function(){Math.random()>.3?t("✅ Fulfilled promise ".concat(e," in ").concat(n,"ms")):u("❌ Rejected promise ".concat(e," in ").concat(n,"ms"))}),n)}))}o.submitBtn.addEventListener("click",(function(n){n.preventDefault(),o.submitBtn.disabled=!0,r.delayValue=Number(o.delay.value),r.stepValue=Number(o.step.value),r.amountValue=Number(o.amount.value);for(var t=1;t<=r.amountValue;t+=1)i(t,r.delayValue).then((function(n){return e(a).Notify.success(n)})).catch((function(n){return e(a).Notify.failure(n)})),r.delayValue=r.delayValue+r.stepValue;o.submitBtn.disabled=!1}))}();
//# sourceMappingURL=03-promises.2e9d0d8e.js.map
