webpackJsonp([0],{

/***/ "./node_modules/aos/dist/aos.js":
/*!**************************************!*\
  !*** ./node_modules/aos/dist/aos.js ***!
  \**************************************/
/*! dynamic exports provided */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function (e, t) {
  "object" == ( false ? "undefined" : _typeof(exports)) && "object" == ( false ? "undefined" : _typeof(module)) ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports.AOS = t() : e.AOS = t();
}(undefined, function () {
  return function (e) {
    function t(o) {
      if (n[o]) return n[o].exports;var i = n[o] = { exports: {}, id: o, loaded: !1 };return e[o].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports;
    }var n = {};return t.m = e, t.c = n, t.p = "dist/", t(0);
  }([function (e, t, n) {
    "use strict";
    function o(e) {
      return e && e.__esModule ? e : { default: e };
    }var i = Object.assign || function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];for (var o in n) {
          Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
        }
      }return e;
    },
        r = n(1),
        a = (o(r), n(6)),
        u = o(a),
        c = n(7),
        s = o(c),
        f = n(8),
        d = o(f),
        l = n(9),
        p = o(l),
        m = n(10),
        b = o(m),
        v = n(11),
        y = o(v),
        g = n(14),
        h = o(g),
        w = [],
        k = !1,
        x = { offset: 120, delay: 0, easing: "ease", duration: 400, disable: !1, once: !1, startEvent: "DOMContentLoaded", throttleDelay: 99, debounceDelay: 50, disableMutationObserver: !1 },
        j = function j() {
      var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];if (e && (k = !0), k) return w = (0, y.default)(w, x), (0, b.default)(w, x.once), w;
    },
        O = function O() {
      w = (0, h.default)(), j();
    },
        M = function M() {
      w.forEach(function (e, t) {
        e.node.removeAttribute("data-aos"), e.node.removeAttribute("data-aos-easing"), e.node.removeAttribute("data-aos-duration"), e.node.removeAttribute("data-aos-delay");
      });
    },
        S = function S(e) {
      return e === !0 || "mobile" === e && p.default.mobile() || "phone" === e && p.default.phone() || "tablet" === e && p.default.tablet() || "function" == typeof e && e() === !0;
    },
        _ = function _(e) {
      x = i(x, e), w = (0, h.default)();var t = document.all && !window.atob;return S(x.disable) || t ? M() : (x.disableMutationObserver || d.default.isSupported() || (console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '), x.disableMutationObserver = !0), document.querySelector("body").setAttribute("data-aos-easing", x.easing), document.querySelector("body").setAttribute("data-aos-duration", x.duration), document.querySelector("body").setAttribute("data-aos-delay", x.delay), "DOMContentLoaded" === x.startEvent && ["complete", "interactive"].indexOf(document.readyState) > -1 ? j(!0) : "load" === x.startEvent ? window.addEventListener(x.startEvent, function () {
        j(!0);
      }) : document.addEventListener(x.startEvent, function () {
        j(!0);
      }), window.addEventListener("resize", (0, s.default)(j, x.debounceDelay, !0)), window.addEventListener("orientationchange", (0, s.default)(j, x.debounceDelay, !0)), window.addEventListener("scroll", (0, u.default)(function () {
        (0, b.default)(w, x.once);
      }, x.throttleDelay)), x.disableMutationObserver || d.default.ready("[data-aos]", O), w);
    };e.exports = { init: _, refresh: j, refreshHard: O };
  }, function (e, t) {},,,,, function (e, t) {
    (function (t) {
      "use strict";
      function n(e, t, n) {
        function o(t) {
          var n = b,
              o = v;return b = v = void 0, k = t, g = e.apply(o, n);
        }function r(e) {
          return k = e, h = setTimeout(f, t), M ? o(e) : g;
        }function a(e) {
          var n = e - w,
              o = e - k,
              i = t - n;return S ? j(i, y - o) : i;
        }function c(e) {
          var n = e - w,
              o = e - k;return void 0 === w || n >= t || n < 0 || S && o >= y;
        }function f() {
          var e = O();return c(e) ? d(e) : void (h = setTimeout(f, a(e)));
        }function d(e) {
          return h = void 0, _ && b ? o(e) : (b = v = void 0, g);
        }function l() {
          void 0 !== h && clearTimeout(h), k = 0, b = w = v = h = void 0;
        }function p() {
          return void 0 === h ? g : d(O());
        }function m() {
          var e = O(),
              n = c(e);if (b = arguments, v = this, w = e, n) {
            if (void 0 === h) return r(w);if (S) return h = setTimeout(f, t), o(w);
          }return void 0 === h && (h = setTimeout(f, t)), g;
        }var b,
            v,
            y,
            g,
            h,
            w,
            k = 0,
            M = !1,
            S = !1,
            _ = !0;if ("function" != typeof e) throw new TypeError(s);return t = u(t) || 0, i(n) && (M = !!n.leading, S = "maxWait" in n, y = S ? x(u(n.maxWait) || 0, t) : y, _ = "trailing" in n ? !!n.trailing : _), m.cancel = l, m.flush = p, m;
      }function o(e, t, o) {
        var r = !0,
            a = !0;if ("function" != typeof e) throw new TypeError(s);return i(o) && (r = "leading" in o ? !!o.leading : r, a = "trailing" in o ? !!o.trailing : a), n(e, t, { leading: r, maxWait: t, trailing: a });
      }function i(e) {
        var t = "undefined" == typeof e ? "undefined" : c(e);return !!e && ("object" == t || "function" == t);
      }function r(e) {
        return !!e && "object" == ("undefined" == typeof e ? "undefined" : c(e));
      }function a(e) {
        return "symbol" == ("undefined" == typeof e ? "undefined" : c(e)) || r(e) && k.call(e) == d;
      }function u(e) {
        if ("number" == typeof e) return e;if (a(e)) return f;if (i(e)) {
          var t = "function" == typeof e.valueOf ? e.valueOf() : e;e = i(t) ? t + "" : t;
        }if ("string" != typeof e) return 0 === e ? e : +e;e = e.replace(l, "");var n = m.test(e);return n || b.test(e) ? v(e.slice(2), n ? 2 : 8) : p.test(e) ? f : +e;
      }var c = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
        return typeof e === "undefined" ? "undefined" : _typeof(e);
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof(e);
      },
          s = "Expected a function",
          f = NaN,
          d = "[object Symbol]",
          l = /^\s+|\s+$/g,
          p = /^[-+]0x[0-9a-f]+$/i,
          m = /^0b[01]+$/i,
          b = /^0o[0-7]+$/i,
          v = parseInt,
          y = "object" == ("undefined" == typeof t ? "undefined" : c(t)) && t && t.Object === Object && t,
          g = "object" == ("undefined" == typeof self ? "undefined" : c(self)) && self && self.Object === Object && self,
          h = y || g || Function("return this")(),
          w = Object.prototype,
          k = w.toString,
          x = Math.max,
          j = Math.min,
          O = function O() {
        return h.Date.now();
      };e.exports = o;
    }).call(t, function () {
      return this;
    }());
  }, function (e, t) {
    (function (t) {
      "use strict";
      function n(e, t, n) {
        function i(t) {
          var n = b,
              o = v;return b = v = void 0, O = t, g = e.apply(o, n);
        }function r(e) {
          return O = e, h = setTimeout(f, t), M ? i(e) : g;
        }function u(e) {
          var n = e - w,
              o = e - O,
              i = t - n;return S ? x(i, y - o) : i;
        }function s(e) {
          var n = e - w,
              o = e - O;return void 0 === w || n >= t || n < 0 || S && o >= y;
        }function f() {
          var e = j();return s(e) ? d(e) : void (h = setTimeout(f, u(e)));
        }function d(e) {
          return h = void 0, _ && b ? i(e) : (b = v = void 0, g);
        }function l() {
          void 0 !== h && clearTimeout(h), O = 0, b = w = v = h = void 0;
        }function p() {
          return void 0 === h ? g : d(j());
        }function m() {
          var e = j(),
              n = s(e);if (b = arguments, v = this, w = e, n) {
            if (void 0 === h) return r(w);if (S) return h = setTimeout(f, t), i(w);
          }return void 0 === h && (h = setTimeout(f, t)), g;
        }var b,
            v,
            y,
            g,
            h,
            w,
            O = 0,
            M = !1,
            S = !1,
            _ = !0;if ("function" != typeof e) throw new TypeError(c);return t = a(t) || 0, o(n) && (M = !!n.leading, S = "maxWait" in n, y = S ? k(a(n.maxWait) || 0, t) : y, _ = "trailing" in n ? !!n.trailing : _), m.cancel = l, m.flush = p, m;
      }function o(e) {
        var t = "undefined" == typeof e ? "undefined" : u(e);return !!e && ("object" == t || "function" == t);
      }function i(e) {
        return !!e && "object" == ("undefined" == typeof e ? "undefined" : u(e));
      }function r(e) {
        return "symbol" == ("undefined" == typeof e ? "undefined" : u(e)) || i(e) && w.call(e) == f;
      }function a(e) {
        if ("number" == typeof e) return e;if (r(e)) return s;if (o(e)) {
          var t = "function" == typeof e.valueOf ? e.valueOf() : e;e = o(t) ? t + "" : t;
        }if ("string" != typeof e) return 0 === e ? e : +e;e = e.replace(d, "");var n = p.test(e);return n || m.test(e) ? b(e.slice(2), n ? 2 : 8) : l.test(e) ? s : +e;
      }var u = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
        return typeof e === "undefined" ? "undefined" : _typeof(e);
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof(e);
      },
          c = "Expected a function",
          s = NaN,
          f = "[object Symbol]",
          d = /^\s+|\s+$/g,
          l = /^[-+]0x[0-9a-f]+$/i,
          p = /^0b[01]+$/i,
          m = /^0o[0-7]+$/i,
          b = parseInt,
          v = "object" == ("undefined" == typeof t ? "undefined" : u(t)) && t && t.Object === Object && t,
          y = "object" == ("undefined" == typeof self ? "undefined" : u(self)) && self && self.Object === Object && self,
          g = v || y || Function("return this")(),
          h = Object.prototype,
          w = h.toString,
          k = Math.max,
          x = Math.min,
          j = function j() {
        return g.Date.now();
      };e.exports = n;
    }).call(t, function () {
      return this;
    }());
  }, function (e, t) {
    "use strict";
    function n(e) {
      var t = void 0,
          o = void 0,
          i = void 0;for (t = 0; t < e.length; t += 1) {
        if (o = e[t], o.dataset && o.dataset.aos) return !0;if (i = o.children && n(o.children)) return !0;
      }return !1;
    }function o() {
      return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
    }function i() {
      return !!o();
    }function r(e, t) {
      var n = window.document,
          i = o(),
          r = new i(a);u = t, r.observe(n.documentElement, { childList: !0, subtree: !0, removedNodes: !0 });
    }function a(e) {
      e && e.forEach(function (e) {
        var t = Array.prototype.slice.call(e.addedNodes),
            o = Array.prototype.slice.call(e.removedNodes),
            i = t.concat(o);if (n(i)) return u();
      });
    }Object.defineProperty(t, "__esModule", { value: !0 });var u = function u() {};t.default = { isSupported: i, ready: r };
  }, function (e, t) {
    "use strict";
    function n(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }function o() {
      return navigator.userAgent || navigator.vendor || window.opera || "";
    }Object.defineProperty(t, "__esModule", { value: !0 });var i = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
        }
      }return function (t, n, o) {
        return n && e(t.prototype, n), o && e(t, o), t;
      };
    }(),
        r = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
        a = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
        u = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
        c = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
        s = function () {
      function e() {
        n(this, e);
      }return i(e, [{ key: "phone", value: function value() {
          var e = o();return !(!r.test(e) && !a.test(e.substr(0, 4)));
        } }, { key: "mobile", value: function value() {
          var e = o();return !(!u.test(e) && !c.test(e.substr(0, 4)));
        } }, { key: "tablet", value: function value() {
          return this.mobile() && !this.phone();
        } }]), e;
    }();t.default = new s();
  }, function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var n = function n(e, t, _n) {
      var o = e.node.getAttribute("data-aos-once");t > e.position ? e.node.classList.add("aos-animate") : "undefined" != typeof o && ("false" === o || !_n && "true" !== o) && e.node.classList.remove("aos-animate");
    },
        o = function o(e, t) {
      var o = window.pageYOffset,
          i = window.innerHeight;e.forEach(function (e, r) {
        n(e, i + o, t);
      });
    };t.default = o;
  }, function (e, t, n) {
    "use strict";
    function o(e) {
      return e && e.__esModule ? e : { default: e };
    }Object.defineProperty(t, "__esModule", { value: !0 });var i = n(12),
        r = o(i),
        a = function a(e, t) {
      return e.forEach(function (e, n) {
        e.node.classList.add("aos-init"), e.position = (0, r.default)(e.node, t.offset);
      }), e;
    };t.default = a;
  }, function (e, t, n) {
    "use strict";
    function o(e) {
      return e && e.__esModule ? e : { default: e };
    }Object.defineProperty(t, "__esModule", { value: !0 });var i = n(13),
        r = o(i),
        a = function a(e, t) {
      var n = 0,
          o = 0,
          i = window.innerHeight,
          a = { offset: e.getAttribute("data-aos-offset"), anchor: e.getAttribute("data-aos-anchor"), anchorPlacement: e.getAttribute("data-aos-anchor-placement") };switch (a.offset && !isNaN(a.offset) && (o = parseInt(a.offset)), a.anchor && document.querySelectorAll(a.anchor) && (e = document.querySelectorAll(a.anchor)[0]), n = (0, r.default)(e).top, a.anchorPlacement) {case "top-bottom":
          break;case "center-bottom":
          n += e.offsetHeight / 2;break;case "bottom-bottom":
          n += e.offsetHeight;break;case "top-center":
          n += i / 2;break;case "bottom-center":
          n += i / 2 + e.offsetHeight;break;case "center-center":
          n += i / 2 + e.offsetHeight / 2;break;case "top-top":
          n += i;break;case "bottom-top":
          n += e.offsetHeight + i;break;case "center-top":
          n += e.offsetHeight / 2 + i;}return a.anchorPlacement || a.offset || isNaN(t) || (o = t), n + o;
    };t.default = a;
  }, function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var n = function n(e) {
      for (var t = 0, n = 0; e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop);) {
        t += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0), n += e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0), e = e.offsetParent;
      }return { top: n, left: t };
    };t.default = n;
  }, function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var n = function n(e) {
      return e = e || document.querySelectorAll("[data-aos]"), Array.prototype.map.call(e, function (e) {
        return { node: e };
      });
    };t.default = n;
  }]);
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/barba.js/dist/barba.js":
/*!*********************************************!*\
  !*** ./node_modules/barba.js/dist/barba.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function webpackUniversalModuleDefinition(root, factory) {
	if (( false ? 'undefined' : _typeof(exports)) === 'object' && ( false ? 'undefined' : _typeof(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') exports["Barba"] = factory();else root["Barba"] = factory();
})(this, function () {
	return (/******/function (modules) {
			// webpackBootstrap
			/******/ // The module cache
			/******/var installedModules = {};
			/******/
			/******/ // The require function
			/******/function __webpack_require__(moduleId) {
				/******/
				/******/ // Check if module is in cache
				/******/if (installedModules[moduleId])
					/******/return installedModules[moduleId].exports;
				/******/
				/******/ // Create a new module (and put it into the cache)
				/******/var module = installedModules[moduleId] = {
					/******/exports: {},
					/******/id: moduleId,
					/******/loaded: false
					/******/ };
				/******/
				/******/ // Execute the module function
				/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
				/******/
				/******/ // Flag the module as loaded
				/******/module.loaded = true;
				/******/
				/******/ // Return the exports of the module
				/******/return module.exports;
				/******/
			}
			/******/
			/******/
			/******/ // expose the modules object (__webpack_modules__)
			/******/__webpack_require__.m = modules;
			/******/
			/******/ // expose the module cache
			/******/__webpack_require__.c = installedModules;
			/******/
			/******/ // __webpack_public_path__
			/******/__webpack_require__.p = "http://localhost:8080/dist";
			/******/
			/******/ // Load entry module and return exports
			/******/return __webpack_require__(0);
			/******/
		}(
		/************************************************************************/
		/******/[
		/* 0 */
		/***/function (module, exports, __webpack_require__) {

			//Promise polyfill https://github.com/taylorhakes/promise-polyfill

			if (typeof Promise !== 'function') {
				window.Promise = __webpack_require__(1);
			}

			var Barba = {
				version: '1.0.0',
				BaseTransition: __webpack_require__(4),
				BaseView: __webpack_require__(6),
				BaseCache: __webpack_require__(8),
				Dispatcher: __webpack_require__(7),
				HistoryManager: __webpack_require__(9),
				Pjax: __webpack_require__(10),
				Prefetch: __webpack_require__(13),
				Utils: __webpack_require__(5)
			};

			module.exports = Barba;

			/***/
		},
		/* 1 */
		/***/function (module, exports, __webpack_require__) {

			/* WEBPACK VAR INJECTION */(function (setImmediate) {
				(function (root) {

					// Store setTimeout reference so promise-polyfill will be unaffected by
					// other code modifying setTimeout (like sinon.useFakeTimers())
					var setTimeoutFunc = setTimeout;

					function noop() {}

					// Use polyfill for setImmediate for performance gains
					var asap = typeof setImmediate === 'function' && setImmediate || function (fn) {
						setTimeoutFunc(fn, 0);
					};

					var onUnhandledRejection = function onUnhandledRejection(err) {
						if (typeof console !== 'undefined' && console) {
							console.warn('Possible Unhandled Promise Rejection:', err); // eslint-disable-line no-console
						}
					};

					// Polyfill for Function.prototype.bind
					function bind(fn, thisArg) {
						return function () {
							fn.apply(thisArg, arguments);
						};
					}

					function Promise(fn) {
						if (_typeof(this) !== 'object') throw new TypeError('Promises must be constructed via new');
						if (typeof fn !== 'function') throw new TypeError('not a function');
						this._state = 0;
						this._handled = false;
						this._value = undefined;
						this._deferreds = [];

						doResolve(fn, this);
					}

					function handle(self, deferred) {
						while (self._state === 3) {
							self = self._value;
						}
						if (self._state === 0) {
							self._deferreds.push(deferred);
							return;
						}
						self._handled = true;
						asap(function () {
							var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;
							if (cb === null) {
								(self._state === 1 ? resolve : reject)(deferred.promise, self._value);
								return;
							}
							var ret;
							try {
								ret = cb(self._value);
							} catch (e) {
								reject(deferred.promise, e);
								return;
							}
							resolve(deferred.promise, ret);
						});
					}

					function resolve(self, newValue) {
						try {
							// Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
							if (newValue === self) throw new TypeError('A promise cannot be resolved with itself.');
							if (newValue && ((typeof newValue === 'undefined' ? 'undefined' : _typeof(newValue)) === 'object' || typeof newValue === 'function')) {
								var then = newValue.then;
								if (newValue instanceof Promise) {
									self._state = 3;
									self._value = newValue;
									finale(self);
									return;
								} else if (typeof then === 'function') {
									doResolve(bind(then, newValue), self);
									return;
								}
							}
							self._state = 1;
							self._value = newValue;
							finale(self);
						} catch (e) {
							reject(self, e);
						}
					}

					function reject(self, newValue) {
						self._state = 2;
						self._value = newValue;
						finale(self);
					}

					function finale(self) {
						if (self._state === 2 && self._deferreds.length === 0) {
							asap(function () {
								if (!self._handled) {
									onUnhandledRejection(self._value);
								}
							});
						}

						for (var i = 0, len = self._deferreds.length; i < len; i++) {
							handle(self, self._deferreds[i]);
						}
						self._deferreds = null;
					}

					function Handler(onFulfilled, onRejected, promise) {
						this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
						this.onRejected = typeof onRejected === 'function' ? onRejected : null;
						this.promise = promise;
					}

					/**
      * Take a potentially misbehaving resolver function and make sure
      * onFulfilled and onRejected are only called once.
      *
      * Makes no guarantees about asynchrony.
      */
					function doResolve(fn, self) {
						var done = false;
						try {
							fn(function (value) {
								if (done) return;
								done = true;
								resolve(self, value);
							}, function (reason) {
								if (done) return;
								done = true;
								reject(self, reason);
							});
						} catch (ex) {
							if (done) return;
							done = true;
							reject(self, ex);
						}
					}

					Promise.prototype['catch'] = function (onRejected) {
						return this.then(null, onRejected);
					};

					Promise.prototype.then = function (onFulfilled, onRejected) {
						var prom = new this.constructor(noop);

						handle(this, new Handler(onFulfilled, onRejected, prom));
						return prom;
					};

					Promise.all = function (arr) {
						var args = Array.prototype.slice.call(arr);

						return new Promise(function (resolve, reject) {
							if (args.length === 0) return resolve([]);
							var remaining = args.length;

							function res(i, val) {
								try {
									if (val && ((typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object' || typeof val === 'function')) {
										var then = val.then;
										if (typeof then === 'function') {
											then.call(val, function (val) {
												res(i, val);
											}, reject);
											return;
										}
									}
									args[i] = val;
									if (--remaining === 0) {
										resolve(args);
									}
								} catch (ex) {
									reject(ex);
								}
							}

							for (var i = 0; i < args.length; i++) {
								res(i, args[i]);
							}
						});
					};

					Promise.resolve = function (value) {
						if (value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value.constructor === Promise) {
							return value;
						}

						return new Promise(function (resolve) {
							resolve(value);
						});
					};

					Promise.reject = function (value) {
						return new Promise(function (resolve, reject) {
							reject(value);
						});
					};

					Promise.race = function (values) {
						return new Promise(function (resolve, reject) {
							for (var i = 0, len = values.length; i < len; i++) {
								values[i].then(resolve, reject);
							}
						});
					};

					/**
      * Set the immediate function to execute callbacks
      * @param fn {function} Function to execute
      * @private
      */
					Promise._setImmediateFn = function _setImmediateFn(fn) {
						asap = fn;
					};

					Promise._setUnhandledRejectionFn = function _setUnhandledRejectionFn(fn) {
						onUnhandledRejection = fn;
					};

					if (typeof module !== 'undefined' && module.exports) {
						module.exports = Promise;
					} else if (!root.Promise) {
						root.Promise = Promise;
					}
				})(this);

				/* WEBPACK VAR INJECTION */
			}).call(exports, __webpack_require__(2).setImmediate);

			/***/
		},
		/* 2 */
		/***/function (module, exports, __webpack_require__) {

			/* WEBPACK VAR INJECTION */(function (setImmediate, clearImmediate) {
				var nextTick = __webpack_require__(3).nextTick;
				var apply = Function.prototype.apply;
				var slice = Array.prototype.slice;
				var immediateIds = {};
				var nextImmediateId = 0;

				// DOM APIs, for completeness

				exports.setTimeout = function () {
					return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
				};
				exports.setInterval = function () {
					return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
				};
				exports.clearTimeout = exports.clearInterval = function (timeout) {
					timeout.close();
				};

				function Timeout(id, clearFn) {
					this._id = id;
					this._clearFn = clearFn;
				}
				Timeout.prototype.unref = Timeout.prototype.ref = function () {};
				Timeout.prototype.close = function () {
					this._clearFn.call(window, this._id);
				};

				// Does not start the time, just sets up the members needed.
				exports.enroll = function (item, msecs) {
					clearTimeout(item._idleTimeoutId);
					item._idleTimeout = msecs;
				};

				exports.unenroll = function (item) {
					clearTimeout(item._idleTimeoutId);
					item._idleTimeout = -1;
				};

				exports._unrefActive = exports.active = function (item) {
					clearTimeout(item._idleTimeoutId);

					var msecs = item._idleTimeout;
					if (msecs >= 0) {
						item._idleTimeoutId = setTimeout(function onTimeout() {
							if (item._onTimeout) item._onTimeout();
						}, msecs);
					}
				};

				// That's not how node.js implements it but the exposed api is the same.
				exports.setImmediate = typeof setImmediate === "function" ? setImmediate : function (fn) {
					var id = nextImmediateId++;
					var args = arguments.length < 2 ? false : slice.call(arguments, 1);

					immediateIds[id] = true;

					nextTick(function onNextTick() {
						if (immediateIds[id]) {
							// fn.call() is faster so we optimize for the common use-case
							// @see http://jsperf.com/call-apply-segu
							if (args) {
								fn.apply(null, args);
							} else {
								fn.call(null);
							}
							// Prevent ids from leaking
							exports.clearImmediate(id);
						}
					});

					return id;
				};

				exports.clearImmediate = typeof clearImmediate === "function" ? clearImmediate : function (id) {
					delete immediateIds[id];
				};
				/* WEBPACK VAR INJECTION */
			}).call(exports, __webpack_require__(2).setImmediate, __webpack_require__(2).clearImmediate);

			/***/
		},
		/* 3 */
		/***/function (module, exports) {

			// shim for using process in browser

			var process = module.exports = {};

			// cached from whatever global is present so that test runners that stub it
			// don't break things.  But we need to wrap it in a try catch in case it is
			// wrapped in strict mode code which doesn't define any globals.  It's inside a
			// function because try/catches deoptimize in certain engines.

			var cachedSetTimeout;
			var cachedClearTimeout;

			(function () {
				try {
					cachedSetTimeout = setTimeout;
				} catch (e) {
					cachedSetTimeout = function cachedSetTimeout() {
						throw new Error('setTimeout is not defined');
					};
				}
				try {
					cachedClearTimeout = clearTimeout;
				} catch (e) {
					cachedClearTimeout = function cachedClearTimeout() {
						throw new Error('clearTimeout is not defined');
					};
				}
			})();
			var queue = [];
			var draining = false;
			var currentQueue;
			var queueIndex = -1;

			function cleanUpNextTick() {
				if (!draining || !currentQueue) {
					return;
				}
				draining = false;
				if (currentQueue.length) {
					queue = currentQueue.concat(queue);
				} else {
					queueIndex = -1;
				}
				if (queue.length) {
					drainQueue();
				}
			}

			function drainQueue() {
				if (draining) {
					return;
				}
				var timeout = cachedSetTimeout(cleanUpNextTick);
				draining = true;

				var len = queue.length;
				while (len) {
					currentQueue = queue;
					queue = [];
					while (++queueIndex < len) {
						if (currentQueue) {
							currentQueue[queueIndex].run();
						}
					}
					queueIndex = -1;
					len = queue.length;
				}
				currentQueue = null;
				draining = false;
				cachedClearTimeout(timeout);
			}

			process.nextTick = function (fun) {
				var args = new Array(arguments.length - 1);
				if (arguments.length > 1) {
					for (var i = 1; i < arguments.length; i++) {
						args[i - 1] = arguments[i];
					}
				}
				queue.push(new Item(fun, args));
				if (queue.length === 1 && !draining) {
					cachedSetTimeout(drainQueue, 0);
				}
			};

			// v8 likes predictible objects
			function Item(fun, array) {
				this.fun = fun;
				this.array = array;
			}
			Item.prototype.run = function () {
				this.fun.apply(null, this.array);
			};
			process.title = 'browser';
			process.browser = true;
			process.env = {};
			process.argv = [];
			process.version = ''; // empty string to avoid regexp issues
			process.versions = {};

			function noop() {}

			process.on = noop;
			process.addListener = noop;
			process.once = noop;
			process.off = noop;
			process.removeListener = noop;
			process.removeAllListeners = noop;
			process.emit = noop;

			process.binding = function (name) {
				throw new Error('process.binding is not supported');
			};

			process.cwd = function () {
				return '/';
			};
			process.chdir = function (dir) {
				throw new Error('process.chdir is not supported');
			};
			process.umask = function () {
				return 0;
			};

			/***/
		},
		/* 4 */
		/***/function (module, exports, __webpack_require__) {

			var Utils = __webpack_require__(5);

			/**
    * BaseTransition to extend
    *
    * @namespace Barba.BaseTransition
    * @type {Object}
    */
			var BaseTransition = {
				/**
     * @memberOf Barba.BaseTransition
     * @type {HTMLElement}
     */
				oldContainer: undefined,

				/**
     * @memberOf Barba.BaseTransition
     * @type {HTMLElement}
     */
				newContainer: undefined,

				/**
     * @memberOf Barba.BaseTransition
     * @type {Promise}
     */
				newContainerLoading: undefined,

				/**
     * Helper to extend the object
     *
     * @memberOf Barba.BaseTransition
     * @param  {Object} newObject
     * @return {Object} newInheritObject
     */
				extend: function extend(obj) {
					return Utils.extend(this, obj);
				},

				/**
     * This function is called from Pjax module to initialize
     * the transition.
     *
     * @memberOf Barba.BaseTransition
     * @private
     * @param  {HTMLElement} oldContainer
     * @param  {Promise} newContainer
     * @return {Promise}
     */
				init: function init(oldContainer, newContainer) {
					var _this = this;

					this.oldContainer = oldContainer;
					this._newContainerPromise = newContainer;

					this.deferred = Utils.deferred();
					this.newContainerReady = Utils.deferred();
					this.newContainerLoading = this.newContainerReady.promise;

					this.start();

					this._newContainerPromise.then(function (newContainer) {
						_this.newContainer = newContainer;
						_this.newContainerReady.resolve();
					});

					return this.deferred.promise;
				},

				/**
     * This function needs to be called as soon the Transition is finished
     *
     * @memberOf Barba.BaseTransition
     */
				done: function done() {
					this.oldContainer.parentNode.removeChild(this.oldContainer);
					this.newContainer.style.visibility = 'visible';
					this.deferred.resolve();
				},

				/**
     * Constructor for your Transition
     *
     * @memberOf Barba.BaseTransition
     * @abstract
     */
				start: function start() {}
			};

			module.exports = BaseTransition;

			/***/
		},
		/* 5 */
		/***/function (module, exports) {

			/**
    * Just an object with some helpful functions
    *
    * @type {Object}
    * @namespace Barba.Utils
    */
			var Utils = {
				/**
     * Return the current url
     *
     * @memberOf Barba.Utils
     * @return {String} currentUrl
     */
				getCurrentUrl: function getCurrentUrl() {
					return window.location.protocol + '//' + window.location.host + window.location.pathname + window.location.search;
				},

				/**
     * Given an url, return it without the hash
     *
     * @memberOf Barba.Utils
     * @private
     * @param  {String} url
     * @return {String} newCleanUrl
     */
				cleanLink: function cleanLink(url) {
					return url.replace(/#.*/, '');
				},

				/**
     * Time in millisecond after the xhr request goes in timeout
     *
     * @memberOf Barba.Utils
     * @type {Number}
     * @default
     */
				xhrTimeout: 5000,

				/**
     * Start an XMLHttpRequest() and return a Promise
     *
     * @memberOf Barba.Utils
     * @param  {String} url
     * @return {Promise}
     */
				xhr: function xhr(url) {
					var deferred = this.deferred();
					var req = new XMLHttpRequest();

					req.onreadystatechange = function () {
						if (req.readyState === 4) {
							if (req.status === 200) {
								return deferred.resolve(req.responseText);
							} else {
								return deferred.reject(new Error('xhr: HTTP code is not 200'));
							}
						}
					};

					req.ontimeout = function () {
						return deferred.reject(new Error('xhr: Timeout exceeded'));
					};

					req.open('GET', url);
					req.timeout = this.xhrTimeout;
					req.setRequestHeader('x-barba', 'yes');
					req.send();

					return deferred.promise;
				},

				/**
     * Get obj and props and return a new object with the property merged
     *
     * @memberOf Barba.Utils
     * @param  {object} obj
     * @param  {object} props
     * @return {object}
     */
				extend: function extend(obj, props) {
					var newObj = Object.create(obj);

					for (var prop in props) {
						if (props.hasOwnProperty(prop)) {
							newObj[prop] = props[prop];
						}
					}

					return newObj;
				},

				/**
     * Return a new "Deferred" object
     * https://developer.mozilla.org/en-US/docs/Mozilla/JavaScript_code_modules/Promise.jsm/Deferred
     *
     * @memberOf Barba.Utils
     * @return {Deferred}
     */
				deferred: function deferred() {
					return new function () {
						this.resolve = null;
						this.reject = null;

						this.promise = new Promise(function (resolve, reject) {
							this.resolve = resolve;
							this.reject = reject;
						}.bind(this));
					}();
				},

				/**
     * Return the port number normalized, eventually you can pass a string to be normalized.
     *
     * @memberOf Barba.Utils
     * @private
     * @param  {String} p
     * @return {Int} port
     */
				getPort: function getPort(p) {
					var port = typeof p !== 'undefined' ? p : window.location.port;
					var protocol = window.location.protocol;

					if (port != '') return parseInt(port);

					if (protocol === 'http:') return 80;

					if (protocol === 'https:') return 443;
				}
			};

			module.exports = Utils;

			/***/
		},
		/* 6 */
		/***/function (module, exports, __webpack_require__) {

			var Dispatcher = __webpack_require__(7);
			var Utils = __webpack_require__(5);

			/**
    * BaseView to be extended
    *
    * @namespace Barba.BaseView
    * @type {Object}
    */
			var BaseView = {
				/**
     * Namespace of the view.
     * (need to be associated with the data-namespace of the container)
     *
     * @memberOf Barba.BaseView
     * @type {String}
     */
				namespace: null,

				/**
     * Helper to extend the object
     *
     * @memberOf Barba.BaseView
     * @param  {Object} newObject
     * @return {Object} newInheritObject
     */
				extend: function extend(obj) {
					return Utils.extend(this, obj);
				},

				/**
     * Init the view.
     * P.S. Is suggested to init the view before starting Barba.Pjax.start(),
     * in this way .onEnter() and .onEnterCompleted() will be fired for the current
     * container when the page is loaded.
     *
     * @memberOf Barba.BaseView
     */
				init: function init() {
					var _this = this;

					Dispatcher.on('initStateChange', function (newStatus, oldStatus) {
						if (oldStatus && oldStatus.namespace === _this.namespace) _this.onLeave();
					});

					Dispatcher.on('newPageReady', function (newStatus, oldStatus, container) {
						_this.container = container;

						if (newStatus.namespace === _this.namespace) _this.onEnter();
					});

					Dispatcher.on('transitionCompleted', function (newStatus, oldStatus) {
						if (newStatus.namespace === _this.namespace) _this.onEnterCompleted();

						if (oldStatus && oldStatus.namespace === _this.namespace) _this.onLeaveCompleted();
					});
				},

				/**
     * This function will be fired when the container
     * is ready and attached to the DOM.
     *
     * @memberOf Barba.BaseView
     * @abstract
     */
				onEnter: function onEnter() {},

				/**
     * This function will be fired when the transition
     * to this container has just finished.
     *
     * @memberOf Barba.BaseView
     * @abstract
     */
				onEnterCompleted: function onEnterCompleted() {},

				/**
     * This function will be fired when the transition
     * to a new container has just started.
     *
     * @memberOf Barba.BaseView
     * @abstract
     */
				onLeave: function onLeave() {},

				/**
     * This function will be fired when the container
     * has just been removed from the DOM.
     *
     * @memberOf Barba.BaseView
     * @abstract
     */
				onLeaveCompleted: function onLeaveCompleted() {}
			};

			module.exports = BaseView;

			/***/
		},
		/* 7 */
		/***/function (module, exports) {

			/**
    * Little Dispatcher inspired by MicroEvent.js
    *
    * @namespace Barba.Dispatcher
    * @type {Object}
    */
			var Dispatcher = {
				/**
     * Object that keeps all the events
     *
     * @memberOf Barba.Dispatcher
     * @readOnly
     * @type {Object}
     */
				events: {},

				/**
     * Bind a callback to an event
     *
     * @memberOf Barba.Dispatcher
     * @param  {String} eventName
     * @param  {Function} function
     */
				on: function on(e, f) {
					this.events[e] = this.events[e] || [];
					this.events[e].push(f);
				},

				/**
     * Unbind event
     *
     * @memberOf Barba.Dispatcher
     * @param  {String} eventName
     * @param  {Function} function
     */
				off: function off(e, f) {
					if (e in this.events === false) return;

					this.events[e].splice(this.events[e].indexOf(f), 1);
				},

				/**
     * Fire the event running all the event associated to it
     *
     * @memberOf Barba.Dispatcher
     * @param  {String} eventName
     * @param  {...*} args
     */
				trigger: function trigger(e) {
					//e, ...args
					if (e in this.events === false) return;

					for (var i = 0; i < this.events[e].length; i++) {
						this.events[e][i].apply(this, Array.prototype.slice.call(arguments, 1));
					}
				}
			};

			module.exports = Dispatcher;

			/***/
		},
		/* 8 */
		/***/function (module, exports, __webpack_require__) {

			var Utils = __webpack_require__(5);

			/**
    * BaseCache it's a simple static cache
    *
    * @namespace Barba.BaseCache
    * @type {Object}
    */
			var BaseCache = {
				/**
     * The Object that keeps all the key value information
     *
     * @memberOf Barba.BaseCache
     * @type {Object}
     */
				data: {},

				/**
     * Helper to extend this object
     *
     * @memberOf Barba.BaseCache
     * @private
     * @param  {Object} newObject
     * @return {Object} newInheritObject
     */
				extend: function extend(obj) {
					return Utils.extend(this, obj);
				},

				/**
     * Set a key and value data, mainly Barba is going to save promises
     *
     * @memberOf Barba.BaseCache
     * @param {String} key
     * @param {*} value
     */
				set: function set(key, val) {
					this.data[key] = val;
				},

				/**
     * Retrieve the data using the key
     *
     * @memberOf Barba.BaseCache
     * @param  {String} key
     * @return {*}
     */
				get: function get(key) {
					return this.data[key];
				},

				/**
     * Flush the cache
     *
     * @memberOf Barba.BaseCache
     */
				reset: function reset() {
					this.data = {};
				}
			};

			module.exports = BaseCache;

			/***/
		},
		/* 9 */
		/***/function (module, exports) {

			/**
    * HistoryManager helps to keep track of the navigation
    *
    * @namespace Barba.HistoryManager
    * @type {Object}
    */
			var HistoryManager = {
				/**
     * Keep track of the status in historic order
     *
     * @memberOf Barba.HistoryManager
     * @readOnly
     * @type {Array}
     */
				history: [],

				/**
     * Add a new set of url and namespace
     *
     * @memberOf Barba.HistoryManager
     * @param {String} url
     * @param {String} namespace
     * @private
     */
				add: function add(url, namespace) {
					if (!namespace) namespace = undefined;

					this.history.push({
						url: url,
						namespace: namespace
					});
				},

				/**
     * Return information about the current status
     *
     * @memberOf Barba.HistoryManager
     * @return {Object}
     */
				currentStatus: function currentStatus() {
					return this.history[this.history.length - 1];
				},

				/**
     * Return information about the previous status
     *
     * @memberOf Barba.HistoryManager
     * @return {Object}
     */
				prevStatus: function prevStatus() {
					var history = this.history;

					if (history.length < 2) return null;

					return history[history.length - 2];
				}
			};

			module.exports = HistoryManager;

			/***/
		},
		/* 10 */
		/***/function (module, exports, __webpack_require__) {

			var Utils = __webpack_require__(5);
			var Dispatcher = __webpack_require__(7);
			var HideShowTransition = __webpack_require__(11);
			var BaseCache = __webpack_require__(8);

			var HistoryManager = __webpack_require__(9);
			var Dom = __webpack_require__(12);

			/**
    * Pjax is a static object with main function
    *
    * @namespace Barba.Pjax
    * @borrows Dom as Dom
    * @type {Object}
    */
			var Pjax = {
				Dom: Dom,
				History: HistoryManager,
				Cache: BaseCache,

				/**
     * Indicate wether or not use the cache
     *
     * @memberOf Barba.Pjax
     * @type {Boolean}
     * @default
     */
				cacheEnabled: true,

				/**
     * Indicate if there is an animation in progress
     *
     * @memberOf Barba.Pjax
     * @readOnly
     * @type {Boolean}
     */
				transitionProgress: false,

				/**
     * Class name used to ignore links
     *
     * @memberOf Barba.Pjax
     * @type {String}
     * @default
     */
				ignoreClassLink: 'no-barba',

				/**
     * Function to be called to start Pjax
     *
     * @memberOf Barba.Pjax
     */
				start: function start() {
					this.init();
				},

				/**
     * Init the events
     *
     * @memberOf Barba.Pjax
     * @private
     */
				init: function init() {
					var container = this.Dom.getContainer();
					var wrapper = this.Dom.getWrapper();

					wrapper.setAttribute('aria-live', 'polite');

					this.History.add(this.getCurrentUrl(), this.Dom.getNamespace(container));

					//Fire for the current view.
					Dispatcher.trigger('initStateChange', this.History.currentStatus());
					Dispatcher.trigger('newPageReady', this.History.currentStatus(), {}, container, this.Dom.currentHTML);
					Dispatcher.trigger('transitionCompleted', this.History.currentStatus());

					this.bindEvents();
				},

				/**
     * Attach the eventlisteners
     *
     * @memberOf Barba.Pjax
     * @private
     */
				bindEvents: function bindEvents() {
					document.addEventListener('click', this.onLinkClick.bind(this));

					window.addEventListener('popstate', this.onStateChange.bind(this));
				},

				/**
     * Return the currentURL cleaned
     *
     * @memberOf Barba.Pjax
     * @return {String} currentUrl
     */
				getCurrentUrl: function getCurrentUrl() {
					return Utils.cleanLink(Utils.getCurrentUrl());
				},

				/**
     * Change the URL with pushstate and trigger the state change
     *
     * @memberOf Barba.Pjax
     * @param {String} newUrl
     */
				goTo: function goTo(url) {
					window.history.pushState(null, null, url);
					this.onStateChange();
				},

				/**
     * Force the browser to go to a certain url
     *
     * @memberOf Barba.Pjax
     * @param {String} url
     * @private
     */
				forceGoTo: function forceGoTo(url) {
					window.location = url;
				},

				/**
     * Load an url, will start an xhr request or load from the cache
     *
     * @memberOf Barba.Pjax
     * @private
     * @param  {String} url
     * @return {Promise}
     */
				load: function load(url) {
					var deferred = Utils.deferred();
					var _this = this;
					var xhr;

					xhr = this.Cache.get(url);

					if (!xhr) {
						xhr = Utils.xhr(url);
						this.Cache.set(url, xhr);
					}

					xhr.then(function (data) {
						var container = _this.Dom.parseResponse(data);

						_this.Dom.putContainer(container);

						if (!_this.cacheEnabled) _this.Cache.reset();

						deferred.resolve(container);
					}, function () {
						//Something went wrong (timeout, 404, 505...)
						_this.forceGoTo(url);

						deferred.reject();
					});

					return deferred.promise;
				},

				/**
     * Get the .href parameter out of an element
     * and handle special cases (like xlink:href)
     *
     * @private
     * @memberOf Barba.Pjax
     * @param  {HTMLElement} el
     * @return {String} href
     */
				getHref: function getHref(el) {
					if (!el) {
						return undefined;
					}

					if (el.getAttribute && typeof el.getAttribute('xlink:href') === 'string') {
						return el.getAttribute('xlink:href');
					}

					if (typeof el.href === 'string') {
						return el.href;
					}

					return undefined;
				},

				/**
     * Callback called from click event
     *
     * @memberOf Barba.Pjax
     * @private
     * @param {MouseEvent} evt
     */
				onLinkClick: function onLinkClick(evt) {
					var el = evt.target;

					//Go up in the nodelist until we
					//find something with an href
					while (el && !this.getHref(el)) {
						el = el.parentNode;
					}

					if (this.preventCheck(evt, el)) {
						evt.stopPropagation();
						evt.preventDefault();

						Dispatcher.trigger('linkClicked', el, evt);

						var href = this.getHref(el);
						this.goTo(href);
					}
				},

				/**
     * Determine if the link should be followed
     *
     * @memberOf Barba.Pjax
     * @param  {MouseEvent} evt
     * @param  {HTMLElement} element
     * @return {Boolean}
     */
				preventCheck: function preventCheck(evt, element) {
					if (!window.history.pushState) return false;

					var href = this.getHref(element);

					//User
					if (!element || !href) return false;

					//Middle click, cmd click, and ctrl click
					if (evt.which > 1 || evt.metaKey || evt.ctrlKey || evt.shiftKey || evt.altKey) return false;

					//Ignore target with _blank target
					if (element.target && element.target === '_blank') return false;

					//Check if it's the same domain
					if (window.location.protocol !== element.protocol || window.location.hostname !== element.hostname) return false;

					//Check if the port is the same
					if (Utils.getPort() !== Utils.getPort(element.port)) return false;

					//Ignore case when a hash is being tacked on the current URL
					if (href.indexOf('#') > -1) return false;

					//Ignore case where there is download attribute
					if (element.getAttribute && typeof element.getAttribute('download') === 'string') return false;

					//In case you're trying to load the same page
					if (Utils.cleanLink(href) == Utils.cleanLink(location.href)) return false;

					if (element.classList.contains(this.ignoreClassLink)) return false;

					return true;
				},

				/**
     * Return a transition object
     *
     * @memberOf Barba.Pjax
     * @return {Barba.Transition} Transition object
     */
				getTransition: function getTransition() {
					//User customizable
					return HideShowTransition;
				},

				/**
     * Method called after a 'popstate' or from .goTo()
     *
     * @memberOf Barba.Pjax
     * @private
     */
				onStateChange: function onStateChange() {
					var newUrl = this.getCurrentUrl();

					if (this.transitionProgress) this.forceGoTo(newUrl);

					if (this.History.currentStatus().url === newUrl) return false;

					this.History.add(newUrl);

					var newContainer = this.load(newUrl);
					var transition = Object.create(this.getTransition());

					this.transitionProgress = true;

					Dispatcher.trigger('initStateChange', this.History.currentStatus(), this.History.prevStatus());

					var transitionInstance = transition.init(this.Dom.getContainer(), newContainer);

					newContainer.then(this.onNewContainerLoaded.bind(this));

					transitionInstance.then(this.onTransitionEnd.bind(this));
				},

				/**
     * Function called as soon the new container is ready
     *
     * @memberOf Barba.Pjax
     * @private
     * @param {HTMLElement} container
     */
				onNewContainerLoaded: function onNewContainerLoaded(container) {
					var currentStatus = this.History.currentStatus();
					currentStatus.namespace = this.Dom.getNamespace(container);

					Dispatcher.trigger('newPageReady', this.History.currentStatus(), this.History.prevStatus(), container, this.Dom.currentHTML);
				},

				/**
     * Function called as soon the transition is finished
     *
     * @memberOf Barba.Pjax
     * @private
     */
				onTransitionEnd: function onTransitionEnd() {
					this.transitionProgress = false;

					Dispatcher.trigger('transitionCompleted', this.History.currentStatus(), this.History.prevStatus());
				}
			};

			module.exports = Pjax;

			/***/
		},
		/* 11 */
		/***/function (module, exports, __webpack_require__) {

			var BaseTransition = __webpack_require__(4);

			/**
    * Basic Transition object, wait for the new Container to be ready,
    * scroll top, and finish the transition (removing the old container and displaying the new one)
    *
    * @private
    * @namespace Barba.HideShowTransition
    * @augments Barba.BaseTransition
    */
			var HideShowTransition = BaseTransition.extend({
				start: function start() {
					this.newContainerLoading.then(this.finish.bind(this));
				},

				finish: function finish() {
					document.body.scrollTop = 0;
					this.done();
				}
			});

			module.exports = HideShowTransition;

			/***/
		},
		/* 12 */
		/***/function (module, exports) {

			/**
    * Object that is going to deal with DOM parsing/manipulation
    *
    * @namespace Barba.Pjax.Dom
    * @type {Object}
    */
			var Dom = {
				/**
     * The name of the data attribute on the container
     *
     * @memberOf Barba.Pjax.Dom
     * @type {String}
     * @default
     */
				dataNamespace: 'namespace',

				/**
     * Id of the main wrapper
     *
     * @memberOf Barba.Pjax.Dom
     * @type {String}
     * @default
     */
				wrapperId: 'barba-wrapper',

				/**
     * Class name used to identify the containers
     *
     * @memberOf Barba.Pjax.Dom
     * @type {String}
     * @default
     */
				containerClass: 'barba-container',

				/**
     * Full HTML String of the current page.
     * By default is the innerHTML of the initial loaded page.
     *
     * Each time a new page is loaded, the value is the response of the xhr call.
     *
     * @memberOf Barba.Pjax.Dom
     * @type {String}
     */
				currentHTML: document.documentElement.innerHTML,

				/**
     * Parse the responseText obtained from the xhr call
     *
     * @memberOf Barba.Pjax.Dom
     * @private
     * @param  {String} responseText
     * @return {HTMLElement}
     */
				parseResponse: function parseResponse(responseText) {
					this.currentHTML = responseText;

					var wrapper = document.createElement('div');
					wrapper.innerHTML = responseText;

					var titleEl = wrapper.querySelector('title');

					if (titleEl) document.title = titleEl.textContent;

					return this.getContainer(wrapper);
				},

				/**
     * Get the main barba wrapper by the ID `wrapperId`
     *
     * @memberOf Barba.Pjax.Dom
     * @return {HTMLElement} element
     */
				getWrapper: function getWrapper() {
					var wrapper = document.getElementById(this.wrapperId);

					if (!wrapper) throw new Error('Barba.js: wrapper not found!');

					return wrapper;
				},

				/**
     * Get the container on the current DOM,
     * or from an HTMLElement passed via argument
     *
     * @memberOf Barba.Pjax.Dom
     * @private
     * @param  {HTMLElement} element
     * @return {HTMLElement}
     */
				getContainer: function getContainer(element) {
					if (!element) element = document.body;

					if (!element) throw new Error('Barba.js: DOM not ready!');

					var container = this.parseContainer(element);

					if (container && container.jquery) container = container[0];

					if (!container) throw new Error('Barba.js: no container found');

					return container;
				},

				/**
     * Get the namespace of the container
     *
     * @memberOf Barba.Pjax.Dom
     * @private
     * @param  {HTMLElement} element
     * @return {String}
     */
				getNamespace: function getNamespace(element) {
					if (element && element.dataset) {
						return element.dataset[this.dataNamespace];
					} else if (element) {
						return element.getAttribute('data-' + this.dataNamespace);
					}

					return null;
				},

				/**
     * Put the container on the page
     *
     * @memberOf Barba.Pjax.Dom
     * @private
     * @param  {HTMLElement} element
     */
				putContainer: function putContainer(element) {
					element.style.visibility = 'hidden';

					var wrapper = this.getWrapper();
					wrapper.appendChild(element);
				},

				/**
     * Get container selector
     *
     * @memberOf Barba.Pjax.Dom
     * @private
     * @param  {HTMLElement} element
     * @return {HTMLElement} element
     */
				parseContainer: function parseContainer(element) {
					return element.querySelector('.' + this.containerClass);
				}
			};

			module.exports = Dom;

			/***/
		},
		/* 13 */
		/***/function (module, exports, __webpack_require__) {

			var Utils = __webpack_require__(5);
			var Pjax = __webpack_require__(10);

			/**
    * Prefetch
    *
    * @namespace Barba.Prefetch
    * @type {Object}
    */
			var Prefetch = {
				/**
     * Class name used to ignore prefetch on links
     *
     * @memberOf Barba.Prefetch
     * @type {String}
     * @default
     */
				ignoreClassLink: 'no-barba-prefetch',

				/**
     * Init the event listener on mouseover and touchstart
     * for the prefetch
     *
     * @memberOf Barba.Prefetch
     */
				init: function init() {
					if (!window.history.pushState) {
						return false;
					}

					document.body.addEventListener('mouseover', this.onLinkEnter.bind(this));
					document.body.addEventListener('touchstart', this.onLinkEnter.bind(this));
				},

				/**
     * Callback for the mousehover/touchstart
     *
     * @memberOf Barba.Prefetch
     * @private
     * @param  {Object} evt
     */
				onLinkEnter: function onLinkEnter(evt) {
					var el = evt.target;

					while (el && !Pjax.getHref(el)) {
						el = el.parentNode;
					}

					if (!el || el.classList.contains(this.ignoreClassLink)) {
						return;
					}

					var url = Pjax.getHref(el);

					//Check if the link is elegible for Pjax
					if (Pjax.preventCheck(evt, el) && !Pjax.Cache.get(url)) {
						var xhr = Utils.xhr(url);
						Pjax.Cache.set(url, xhr);
					}
				}
			};

			module.exports = Prefetch;

			/***/
		}
		/******/])
	);
});
;
//# sourceMappingURL=barba.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/bootstrap-material-design/js/base.js":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap-material-design/js/base.js ***!
  \***********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(/*! ./util */ "./node_modules/bootstrap-material-design/js/util.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Base = function ($) {
  var ClassName = {
    BMD_FORM_GROUP: "bmd-form-group",
    IS_FILLED: "is-filled",
    IS_FOCUSED: "is-focused"
  };

  var Selector = {
    BMD_FORM_GROUP: "." + ClassName.BMD_FORM_GROUP
  };

  var Default = {};

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Base = function () {
    /**
     *
     * @param element
     * @param config
     * @param properties - anything that needs to be set as this[key] = value.  Works around the need to call `super` before using `this`
     */
    function Base($element, config) {
      var properties = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      _classCallCheck(this, Base);

      this.$element = $element;
      this.config = $.extend(true, {}, Default, config);

      // set properties for use in the constructor initialization
      for (var key in properties) {
        this[key] = properties[key];
      }
    }

    Base.prototype.dispose = function dispose(dataKey) {
      this.$element.data(dataKey, null);
      this.$element = null;
      this.config = null;
    };

    // ------------------------------------------------------------------------
    // protected

    Base.prototype.addFormGroupFocus = function addFormGroupFocus() {
      if (!this.$element.prop("disabled")) {
        this.$bmdFormGroup.addClass(ClassName.IS_FOCUSED);
      }
    };

    Base.prototype.removeFormGroupFocus = function removeFormGroupFocus() {
      this.$bmdFormGroup.removeClass(ClassName.IS_FOCUSED);
    };

    Base.prototype.removeIsFilled = function removeIsFilled() {
      this.$bmdFormGroup.removeClass(ClassName.IS_FILLED);
    };

    Base.prototype.addIsFilled = function addIsFilled() {
      this.$bmdFormGroup.addClass(ClassName.IS_FILLED);
    };

    // Find bmd-form-group


    Base.prototype.findMdbFormGroup = function findMdbFormGroup() {
      var raiseError = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      var mfg = this.$element.closest(Selector.BMD_FORM_GROUP);
      if (mfg.length === 0 && raiseError) {
        $.error("Failed to find " + Selector.BMD_FORM_GROUP + " for " + __WEBPACK_IMPORTED_MODULE_0__util__["a" /* default */].describe(this.$element));
      }
      return mfg;
    };

    // ------------------------------------------------------------------------
    // private

    // ------------------------------------------------------------------------
    // static


    return Base;
  }();

  return Base;
}(jQuery);

/* harmony default export */ __webpack_exports__["a"] = (Base);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./node_modules/bootstrap-material-design/js/baseFormControl.js":
/*!**********************************************************************!*\
  !*** ./node_modules/bootstrap-material-design/js/baseFormControl.js ***!
  \**********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseInput__ = __webpack_require__(/*! ./baseInput */ "./node_modules/bootstrap-material-design/js/baseInput.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var BaseFormControl = function ($) {
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */
  var Default = {
    requiredClasses: ["form-control"]
  };

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var BaseFormControl = function (_BaseInput) {
    _inherits(BaseFormControl, _BaseInput);

    function BaseFormControl($element, config) {
      _classCallCheck(this, BaseFormControl);

      // Initially mark as empty
      var _this = _possibleConstructorReturn(this, _BaseInput.call(this, $element, $.extend(true, Default, config)));

      if (_this.isEmpty()) {
        _this.removeIsFilled();
      }
      return _this;
    }

    return BaseFormControl;
  }(__WEBPACK_IMPORTED_MODULE_0__baseInput__["a" /* default */]);

  return BaseFormControl;
}(jQuery);

/* harmony default export */ __webpack_exports__["a"] = (BaseFormControl);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./node_modules/bootstrap-material-design/js/baseInput.js":
/*!****************************************************************!*\
  !*** ./node_modules/bootstrap-material-design/js/baseInput.js ***!
  \****************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base__ = __webpack_require__(/*! ./base */ "./node_modules/bootstrap-material-design/js/base.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(/*! ./util */ "./node_modules/bootstrap-material-design/js/util.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var BaseInput = function ($) {
  var ClassName = {
    FORM_GROUP: "form-group",
    BMD_FORM_GROUP: "bmd-form-group",
    BMD_LABEL: "bmd-label",
    BMD_LABEL_STATIC: "bmd-label-static",
    BMD_LABEL_PLACEHOLDER: "bmd-label-placeholder",
    BMD_LABEL_FLOATING: "bmd-label-floating",
    HAS_DANGER: "has-danger",
    IS_FILLED: "is-filled",
    IS_FOCUSED: "is-focused",
    INPUT_GROUP: "input-group"
  };

  var Selector = {
    FORM_GROUP: "." + ClassName.FORM_GROUP,
    BMD_FORM_GROUP: "." + ClassName.BMD_FORM_GROUP,
    BMD_LABEL_WILDCARD: "label[class^='" + ClassName.BMD_LABEL + "'], label[class*=' " + ClassName.BMD_LABEL + "']" // match any label variant if specified
  };

  var Default = {
    validate: false,
    formGroup: {
      required: false
    },
    bmdFormGroup: {
      template: "<span class='" + ClassName.BMD_FORM_GROUP + "'></span>",
      create: true, // create a wrapper if form-group not found
      required: true // not recommended to turn this off, only used for inline components
    },
    label: {
      required: false,

      // Prioritized find order for resolving the label to be used as an bmd-label if not specified in the markup
      //  - a function(thisComponent); or
      //  - a string selector used like $bmdFormGroup.find(selector)
      //
      // Note this only runs if $bmdFormGroup.find(Selector.BMD_LABEL_WILDCARD) fails to find a label (as authored in the markup)
      //
      selectors: [".form-control-label", // in the case of horizontal or inline forms, this will be marked
      "> label" // usual case for text inputs, first child.  Deeper would find toggle labels so don't do that.
      ],
      className: ClassName.BMD_LABEL_STATIC
    },
    requiredClasses: [],
    invalidComponentMatches: [],
    convertInputSizeVariations: true
  };

  var FormControlSizeMarkers = {
    "form-control-lg": "bmd-form-group-lg",
    "form-control-sm": "bmd-form-group-sm"
  };

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var BaseInput = function (_Base) {
    _inherits(BaseInput, _Base);

    /**
     *
     * @param element
     * @param config
     * @param properties - anything that needs to be set as this[key] = value.  Works around the need to call `super` before using `this`
     */
    function BaseInput($element, config) {
      var properties = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      _classCallCheck(this, BaseInput);

      // Enforce no overlap between components to prevent side effects
      var _this = _possibleConstructorReturn(this, _Base.call(this, $element, $.extend(true, {}, Default, config), properties));

      _this._rejectInvalidComponentMatches();

      // Enforce expected structure (if any)
      _this.rejectWithoutRequiredStructure();

      // Enforce required classes for a consistent rendering
      _this._rejectWithoutRequiredClasses();

      // Resolve the form-group first, it will be used for bmd-form-group if possible
      //   note: different components have different rules
      _this.$formGroup = _this.findFormGroup(_this.config.formGroup.required);

      // Will add bmd-form-group to form-group or create an bmd-form-group
      //  Performance Note: for those forms that are really performance driven, create the markup with the .bmd-form-group to avoid
      //    rendering changes once added.
      _this.$bmdFormGroup = _this.resolveMdbFormGroup();

      // Resolve and mark the bmdLabel if necessary as defined by the config
      _this.$bmdLabel = _this.resolveMdbLabel();

      // Signal to the bmd-form-group that a form-control-* variation is being used
      _this.resolveMdbFormGroupSizing();

      _this.addFocusListener();
      _this.addChangeListener();

      if (_this.$element.val() != "") {
        _this.addIsFilled();
      }
      return _this;
    }

    BaseInput.prototype.dispose = function dispose(dataKey) {
      _Base.prototype.dispose.call(this, dataKey);
      this.$bmdFormGroup = null;
      this.$formGroup = null;
    };

    // ------------------------------------------------------------------------
    // protected

    BaseInput.prototype.rejectWithoutRequiredStructure = function rejectWithoutRequiredStructure() {
      // implement
    };

    BaseInput.prototype.addFocusListener = function addFocusListener() {
      var _this2 = this;

      this.$element.on("focus", function () {
        _this2.addFormGroupFocus();
      }).on("blur", function () {
        _this2.removeFormGroupFocus();
      });
    };

    BaseInput.prototype.addChangeListener = function addChangeListener() {
      var _this3 = this;

      this.$element.on("keydown paste", function (event) {
        if (__WEBPACK_IMPORTED_MODULE_1__util__["a" /* default */].isChar(event)) {
          _this3.addIsFilled();
        }
      }).on("keyup change", function () {
        // make sure empty is added back when there is a programmatic value change.
        //  NOTE: programmatic changing of value using $.val() must trigger the change event i.e. $.val('x').trigger('change')
        if (_this3.isEmpty()) {
          _this3.removeIsFilled();
        } else {
          _this3.addIsFilled();
        }

        if (_this3.config.validate) {
          // Validation events do not bubble, so they must be attached directly to the text: http://jsfiddle.net/PEpRM/1/
          //  Further, even the bind method is being caught, but since we are already calling #checkValidity here, just alter
          //  the form-group on change.
          //
          // NOTE: I'm not sure we should be intervening regarding validation, this seems better as a README and snippet of code.
          //        BUT, I've left it here for backwards compatibility.
          var isValid = typeof _this3.$element[0].checkValidity === "undefined" || _this3.$element[0].checkValidity();
          if (isValid) {
            _this3.removeHasDanger();
          } else {
            _this3.addHasDanger();
          }
        }
      });
    };

    BaseInput.prototype.addHasDanger = function addHasDanger() {
      this.$bmdFormGroup.addClass(ClassName.HAS_DANGER);
    };

    BaseInput.prototype.removeHasDanger = function removeHasDanger() {
      this.$bmdFormGroup.removeClass(ClassName.HAS_DANGER);
    };

    BaseInput.prototype.isEmpty = function isEmpty() {
      return this.$element.val() === null || this.$element.val() === undefined || this.$element.val() === "";
    };

    // Will add bmd-form-group to form-group or create a bmd-form-group if necessary


    BaseInput.prototype.resolveMdbFormGroup = function resolveMdbFormGroup() {
      var mfg = this.findMdbFormGroup(false);
      if (mfg === undefined || mfg.length === 0) {
        if (this.config.bmdFormGroup.create && (this.$formGroup === undefined || this.$formGroup.length === 0)) {
          // If a form-group doesn't exist (not recommended), take a guess and wrap the element (assuming no label).
          //  note: it's possible to make this smarter, but I need to see valid cases before adding any complexity.

          // this may be an input-group, wrap that instead
          if (this.outerElement().parent().hasClass(ClassName.INPUT_GROUP)) {
            this.outerElement().parent().wrap(this.config.bmdFormGroup.template);
          } else {
            this.outerElement().wrap(this.config.bmdFormGroup.template);
          }
        } else {
          // a form-group does exist, add our marker class to it
          this.$formGroup.addClass(ClassName.BMD_FORM_GROUP);

          // OLD: may want to implement this after all, see how the styling turns out, but using an existing form-group is less manipulation of the dom and therefore preferable
          // A form-group does exist, so add an bmd-form-group wrapping it's internal contents
          //fg.wrapInner(this.config.bmdFormGroup.template)
        }

        mfg = this.findMdbFormGroup(this.config.bmdFormGroup.required);
      }

      return mfg;
    };

    // Demarcation element (e.g. first child of a form-group)
    //  Subclasses such as file inputs may have different structures


    BaseInput.prototype.outerElement = function outerElement() {
      return this.$element;
    };

    // Will add bmd-label to bmd-form-group if not already specified


    BaseInput.prototype.resolveMdbLabel = function resolveMdbLabel() {
      var label = this.$bmdFormGroup.find(Selector.BMD_LABEL_WILDCARD);
      if (label === undefined || label.length === 0) {
        // we need to find it based on the configured selectors
        label = this.findMdbLabel(this.config.label.required);

        if (label === undefined || label.length === 0) {
          // no label found, and finder did not require one
        } else {
          // a candidate label was found, add the configured default class name
          label.addClass(this.config.label.className);
        }
      }

      return label;
    };

    // Find bmd-label variant based on the config selectors


    BaseInput.prototype.findMdbLabel = function findMdbLabel() {
      var raiseError = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      var label = null;

      // use the specified selector order
      for (var _iterator = this.config.label.selectors, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref;

        if (_isArray) {
          if (_i >= _iterator.length) break;
          _ref = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done) break;
          _ref = _i.value;
        }

        var selector = _ref;

        if ($.isFunction(selector)) {
          label = selector(this);
        } else {
          label = this.$bmdFormGroup.find(selector);
        }

        if (label !== undefined && label.length > 0) {
          break;
        }
      }

      if (label.length === 0 && raiseError) {
        $.error("Failed to find " + Selector.BMD_LABEL_WILDCARD + " within form-group for " + __WEBPACK_IMPORTED_MODULE_1__util__["a" /* default */].describe(this.$element));
      }
      return label;
    };

    // Find bmd-form-group


    BaseInput.prototype.findFormGroup = function findFormGroup() {
      var raiseError = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      var fg = this.$element.closest(Selector.FORM_GROUP);
      if (fg.length === 0 && raiseError) {
        $.error("Failed to find " + Selector.FORM_GROUP + " for " + __WEBPACK_IMPORTED_MODULE_1__util__["a" /* default */].describe(this.$element));
      }
      return fg;
    };

    // Due to the interconnected nature of labels/inputs/help-blocks, signal the bmd-form-group-* size variation based on
    //  a found form-control-* size


    BaseInput.prototype.resolveMdbFormGroupSizing = function resolveMdbFormGroupSizing() {
      if (!this.config.convertInputSizeVariations) {
        return;
      }

      // Modification - Change text-sm/lg to form-group-sm/lg instead (preferred standard and simpler css/less variants)
      for (var inputSize in FormControlSizeMarkers) {
        if (this.$element.hasClass(inputSize)) {
          //this.$element.removeClass(inputSize)
          this.$bmdFormGroup.addClass(FormControlSizeMarkers[inputSize]);
        }
      }
    };

    // ------------------------------------------------------------------------
    // private


    BaseInput.prototype._rejectInvalidComponentMatches = function _rejectInvalidComponentMatches() {
      for (var _iterator2 = this.config.invalidComponentMatches, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
        var _ref2;

        if (_isArray2) {
          if (_i2 >= _iterator2.length) break;
          _ref2 = _iterator2[_i2++];
        } else {
          _i2 = _iterator2.next();
          if (_i2.done) break;
          _ref2 = _i2.value;
        }

        var otherComponent = _ref2;

        otherComponent.rejectMatch(this.constructor.name, this.$element);
      }
    };

    BaseInput.prototype._rejectWithoutRequiredClasses = function _rejectWithoutRequiredClasses() {
      for (var _iterator3 = this.config.requiredClasses, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
        var _ref3;

        if (_isArray3) {
          if (_i3 >= _iterator3.length) break;
          _ref3 = _iterator3[_i3++];
        } else {
          _i3 = _iterator3.next();
          if (_i3.done) break;
          _ref3 = _i3.value;
        }

        var requiredClass = _ref3;

        var found = false;
        // allow one of several classes to be passed in x||y
        if (requiredClass.indexOf("||") !== -1) {
          var oneOf = requiredClass.split("||");
          for (var _iterator4 = oneOf, _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : _iterator4[Symbol.iterator]();;) {
            var _ref4;

            if (_isArray4) {
              if (_i4 >= _iterator4.length) break;
              _ref4 = _iterator4[_i4++];
            } else {
              _i4 = _iterator4.next();
              if (_i4.done) break;
              _ref4 = _i4.value;
            }

            var _requiredClass = _ref4;

            if (this.$element.hasClass(_requiredClass)) {
              found = true;
              break;
            }
          }
        } else if (this.$element.hasClass(requiredClass)) {
          found = true;
        }
      }
    };

    // ------------------------------------------------------------------------
    // static


    return BaseInput;
  }(__WEBPACK_IMPORTED_MODULE_0__base__["a" /* default */]);

  return BaseInput;
}(jQuery);

/* harmony default export */ __webpack_exports__["a"] = (BaseInput);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./node_modules/bootstrap-material-design/js/baseSelection.js":
/*!********************************************************************!*\
  !*** ./node_modules/bootstrap-material-design/js/baseSelection.js ***!
  \********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseInput__ = __webpack_require__(/*! ./baseInput */ "./node_modules/bootstrap-material-design/js/baseInput.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(/*! ./util */ "./node_modules/bootstrap-material-design/js/util.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var BaseSelection = function ($) {
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */
  var Default = {
    label: {
      required: false

      // Prioritized find order for resolving the label to be used as an bmd-label if not specified in the markup
      //  - a function(thisComponent); or
      //  - a string selector used like $bmdFormGroup.find(selector)
      //
      // Note this only runs if $bmdFormGroup.find(Selector.BMD_LABEL_WILDCARD) fails to find a label (as authored in the markup)
      //
      //selectors: [
      //  `.form-control-label`, // in the case of horizontal or inline forms, this will be marked
      //  `> label` // usual case for text inputs
      //]
    }
  };

  var Selector = {
    LABEL: "label"
  };

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var BaseSelection = function (_BaseInput) {
    _inherits(BaseSelection, _BaseInput);

    function BaseSelection($element, config, properties) {
      _classCallCheck(this, BaseSelection);

      var _this = _possibleConstructorReturn(this, _BaseInput.call(this, $element, $.extend(true, {}, Default, config), properties));
      // properties = {inputType: checkbox, outerClass: checkbox-inline}
      // '.checkbox|switch|radio > label > input[type=checkbox|radio]'
      // '.${this.outerClass} > label > input[type=${this.inputType}]'

      _this.decorateMarkup();
      return _this;
    }

    // ------------------------------------------------------------------------
    // protected

    BaseSelection.prototype.decorateMarkup = function decorateMarkup() {
      var $decorator = $(this.config.template);
      this.$element.after($decorator);

      // initialize ripples after decorator has been inserted into DOM
      if (this.config.ripples !== false) {
        $decorator.bmdRipples();
      }
    };

    // Demarcation element (e.g. first child of a form-group)


    BaseSelection.prototype.outerElement = function outerElement() {
      // .checkbox|switch|radio > label > input[type=checkbox|radio]
      // label.checkbox-inline > input[type=checkbox|radio]
      // .${this.outerClass} > label > input[type=${this.inputType}]
      return this.$element.parent().closest("." + this.outerClass);
    };

    BaseSelection.prototype.rejectWithoutRequiredStructure = function rejectWithoutRequiredStructure() {
      // '.checkbox|switch|radio > label > input[type=checkbox|radio]'
      // '.${this.outerClass} > label > input[type=${this.inputType}]'
      __WEBPACK_IMPORTED_MODULE_1__util__["a" /* default */].assert(this.$element, !this.$element.parent().prop("tagName") === "label", this.constructor.name + "'s " + __WEBPACK_IMPORTED_MODULE_1__util__["a" /* default */].describe(this.$element) + " parent element should be <label>.");
      __WEBPACK_IMPORTED_MODULE_1__util__["a" /* default */].assert(this.$element, !this.outerElement().hasClass(this.outerClass), this.constructor.name + "'s " + __WEBPACK_IMPORTED_MODULE_1__util__["a" /* default */].describe(this.$element) + " outer element should have class " + this.outerClass + ".");
    };

    BaseSelection.prototype.addFocusListener = function addFocusListener() {
      var _this2 = this;

      // checkboxes didn't appear to bubble to the document, so we'll bind these directly
      this.$element.closest(Selector.LABEL).hover(function () {
        _this2.addFormGroupFocus();
      }, function () {
        _this2.removeFormGroupFocus();
      });
    };

    BaseSelection.prototype.addChangeListener = function addChangeListener() {
      var _this3 = this;

      this.$element.change(function () {
        _this3.$element.blur();
      });
    };

    // ------------------------------------------------------------------------
    // private


    return BaseSelection;
  }(__WEBPACK_IMPORTED_MODULE_0__baseInput__["a" /* default */]);

  return BaseSelection;
}(jQuery);

/* harmony default export */ __webpack_exports__["a"] = (BaseSelection);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./node_modules/bootstrap-material-design/js/checkbox.js":
/*!***************************************************************!*\
  !*** ./node_modules/bootstrap-material-design/js/checkbox.js ***!
  \***************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseSelection__ = __webpack_require__(/*! ./baseSelection */ "./node_modules/bootstrap-material-design/js/baseSelection.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(/*! ./util */ "./node_modules/bootstrap-material-design/js/util.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


//import Text from './text'
//import File from './file'
//import Radio from './radio'
//import Textarea from './textarea'
//import Select from './select'


var Checkbox = function ($) {
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */
  var NAME = "checkbox";
  var DATA_KEY = "bmd." + NAME;
  var JQUERY_NAME = "bmd" + (NAME.charAt(0).toUpperCase() + NAME.slice(1));
  var JQUERY_NO_CONFLICT = $.fn[JQUERY_NAME];

  var Default = {
    template: "<span class='checkbox-decorator'><span class='check'></span></span>"
  };

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Checkbox = function (_BaseSelection) {
    _inherits(Checkbox, _BaseSelection);

    function Checkbox($element, config) {
      var properties = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : { inputType: NAME, outerClass: NAME };

      _classCallCheck(this, Checkbox);

      return _possibleConstructorReturn(this, _BaseSelection.call(this, $element, $.extend(true,
      //{invalidComponentMatches: [File, Radio, Text, Textarea, Select]},
      Default, config), properties));
    }

    Checkbox.prototype.dispose = function dispose() {
      var dataKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DATA_KEY;

      _BaseSelection.prototype.dispose.call(this, dataKey);
    };

    Checkbox.matches = function matches($element) {
      // '.checkbox > label > input[type=checkbox]'
      if ($element.attr("type") === "checkbox") {
        return true;
      }
      return false;
    };

    Checkbox.rejectMatch = function rejectMatch(component, $element) {
      __WEBPACK_IMPORTED_MODULE_1__util__["a" /* default */].assert(this.$element, this.matches($element), component + " component element " + __WEBPACK_IMPORTED_MODULE_1__util__["a" /* default */].describe($element) + " is invalid for type='checkbox'.");
    };

    // ------------------------------------------------------------------------
    // protected

    // ------------------------------------------------------------------------
    // protected

    // ------------------------------------------------------------------------
    // private

    // ------------------------------------------------------------------------
    // static


    Checkbox._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $(this);
        var data = $element.data(DATA_KEY);

        if (!data) {
          data = new Checkbox($element, config);
          $element.data(DATA_KEY, data);
        }
      });
    };

    return Checkbox;
  }(__WEBPACK_IMPORTED_MODULE_0__baseSelection__["a" /* default */]);

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $.fn[JQUERY_NAME] = Checkbox._jQueryInterface;
  $.fn[JQUERY_NAME].Constructor = Checkbox;
  $.fn[JQUERY_NAME].noConflict = function () {
    $.fn[JQUERY_NAME] = JQUERY_NO_CONFLICT;
    return Checkbox._jQueryInterface;
  };

  return Checkbox;
}(jQuery);

/* harmony default export */ __webpack_exports__["a"] = (Checkbox);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./node_modules/bootstrap-material-design/js/checkboxInline.js":
/*!*********************************************************************!*\
  !*** ./node_modules/bootstrap-material-design/js/checkboxInline.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__checkbox__ = __webpack_require__(/*! ./checkbox */ "./node_modules/bootstrap-material-design/js/checkbox.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var CheckboxInline = function ($) {
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */
  var NAME = "checkboxInline";
  var DATA_KEY = "bmd." + NAME;
  var JQUERY_NAME = "bmd" + (NAME.charAt(0).toUpperCase() + NAME.slice(1));
  var JQUERY_NO_CONFLICT = $.fn[JQUERY_NAME];

  var Default = {
    bmdFormGroup: {
      create: false, // no bmd-form-group creation if form-group not present. It messes with the layout.
      required: false
    }
  };

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var CheckboxInline = function (_Checkbox) {
    _inherits(CheckboxInline, _Checkbox);

    function CheckboxInline($element, config) {
      var properties = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : { inputType: "checkbox", outerClass: "checkbox-inline" };

      _classCallCheck(this, CheckboxInline);

      return _possibleConstructorReturn(this, _Checkbox.call(this, $element, $.extend(true, {}, Default, config), properties));
    }

    CheckboxInline.prototype.dispose = function dispose() {
      _Checkbox.prototype.dispose.call(this, DATA_KEY);
    };

    //static matches($element) {
    //  // '.checkbox-inline > input[type=checkbox]'
    //  if ($element.attr('type') === 'checkbox') {
    //    return true
    //  }
    //  return false
    //}
    //
    //static rejectMatch(component, $element) {
    //  Util.assert(this.$element, this.matches($element), `${component} component element ${Util.describe($element)} is invalid for type='checkbox'.`)
    //}

    // ------------------------------------------------------------------------
    // protected

    // ------------------------------------------------------------------------
    // protected

    // ------------------------------------------------------------------------
    // private

    // ------------------------------------------------------------------------
    // static


    CheckboxInline._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $(this);
        var data = $element.data(DATA_KEY);

        if (!data) {
          data = new CheckboxInline($element, config);
          $element.data(DATA_KEY, data);
        }
      });
    };

    return CheckboxInline;
  }(__WEBPACK_IMPORTED_MODULE_0__checkbox__["a" /* default */]);

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $.fn[JQUERY_NAME] = CheckboxInline._jQueryInterface;
  $.fn[JQUERY_NAME].Constructor = CheckboxInline;
  $.fn[JQUERY_NAME].noConflict = function () {
    $.fn[JQUERY_NAME] = JQUERY_NO_CONFLICT;
    return CheckboxInline._jQueryInterface;
  };

  return CheckboxInline;
}(jQuery);

/* unused harmony default export */ var _unused_webpack_default_export = (CheckboxInline);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./node_modules/bootstrap-material-design/js/dropdown.js":
/*!***************************************************************!*\
  !*** ./node_modules/bootstrap-material-design/js/dropdown.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery, Popper) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bootstrap_js_src_util__ = __webpack_require__(/*! bootstrap/js/src/util */ "./node_modules/bootstrap/js/src/util.js");
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* global Popper */

/**
 * This is a copy of the Bootstrap's original dropdown.js, with the only addition
 * of two new classes: 'showing' and 'hiding', used to handle animaitons.
 */



/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.1.0): dropdown.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Dropdown = function ($) {

  /**
   * Check for Popper dependency
   * Popper - https://popper.js.org
   */
  if (typeof Popper === 'undefined') {
    throw new Error('Bootstrap dropdown require Popper.js (https://popper.js.org)');
  }

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'dropdown';
  var VERSION = '4.1.0';
  var DATA_KEY = 'bs.dropdown';
  var EVENT_KEY = '.' + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var ESCAPE_KEYCODE = 27; // KeyboardEvent.which value for Escape (Esc) key
  var SPACE_KEYCODE = 32; // KeyboardEvent.which value for space key
  var TAB_KEYCODE = 9; // KeyboardEvent.which value for tab key
  var ARROW_UP_KEYCODE = 38; // KeyboardEvent.which value for up arrow key
  var ARROW_DOWN_KEYCODE = 40; // KeyboardEvent.which value for down arrow key
  var RIGHT_MOUSE_BUTTON_WHICH = 3; // MouseEvent.which value for the right button (assuming a right-handed mouse)
  var REGEXP_KEYDOWN = new RegExp(ARROW_UP_KEYCODE + '|' + ARROW_DOWN_KEYCODE + '|' + ESCAPE_KEYCODE);

  var Event = {
    HIDE: 'hide' + EVENT_KEY,
    HIDDEN: 'hidden' + EVENT_KEY,
    SHOW: 'show' + EVENT_KEY,
    SHOWN: 'shown' + EVENT_KEY,
    CLICK: 'click' + EVENT_KEY,
    CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY,
    KEYDOWN_DATA_API: 'keydown' + EVENT_KEY + DATA_API_KEY,
    KEYUP_DATA_API: 'keyup' + EVENT_KEY + DATA_API_KEY,
    TRANSITION_END: 'transitionend webkitTransitionEnd oTransitionEnd animationend webkitAnimationEnd oAnimationEnd'
  };

  var ClassName = {
    DISABLED: 'disabled',
    SHOW: 'show',
    SHOWING: 'showing',
    HIDING: 'hiding',
    DROPUP: 'dropup',
    MENURIGHT: 'dropdown-menu-right',
    MENULEFT: 'dropdown-menu-left'
  };

  var Selector = {
    DATA_TOGGLE: '[data-toggle="dropdown"]',
    FORM_CHILD: '.dropdown form',
    MENU: '.dropdown-menu',
    NAVBAR_NAV: '.navbar-nav',
    VISIBLE_ITEMS: '.dropdown-menu .dropdown-item:not(.disabled)'
  };

  var AttachmentMap = {
    TOP: 'top-start',
    TOPEND: 'top-end',
    BOTTOM: 'bottom-start',
    BOTTOMEND: 'bottom-end'
  };

  var Default = {
    placement: AttachmentMap.BOTTOM,
    offset: 0,
    flip: true
  };

  var DefaultType = {
    placement: 'string',
    offset: '(number|string)',
    flip: 'boolean'

    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };
  var Dropdown = function () {
    function Dropdown(element, config) {
      _classCallCheck(this, Dropdown);

      this._element = element;
      this._popper = null;
      this._config = this._getConfig(config);
      this._menu = this._getMenuElement();
      this._inNavbar = this._detectNavbar();

      this._addEventListeners();
    }

    // getters

    // public

    Dropdown.prototype.toggle = function toggle() {
      var _this = this;

      if (this._element.disabled || $(this._element).hasClass(ClassName.DISABLED)) {
        return;
      }

      var parent = Dropdown._getParentFromElement(this._element);
      var isActive = $(this._menu).hasClass(ClassName.SHOW);

      Dropdown._clearMenus();

      if (isActive) {
        return;
      }

      var relatedTarget = {
        relatedTarget: this._element
      };
      var showEvent = $.Event(Event.SHOW, relatedTarget);

      $(parent).trigger(showEvent);

      if (showEvent.isDefaultPrevented()) {
        return;
      }

      var element = this._element;
      // for dropup with alignment we use the parent as popper container
      if ($(parent).hasClass(ClassName.DROPUP)) {
        if ($(this._menu).hasClass(ClassName.MENULEFT) || $(this._menu).hasClass(ClassName.MENURIGHT)) {
          element = parent;
        }
      }
      this._popper = new Popper(element, this._menu, this._getPopperConfig());

      // if this is a touch-enabled device we add extra
      // empty mouseover listeners to the body's immediate children;
      // only needed because of broken event delegation on iOS
      // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
      if ('ontouchstart' in document.documentElement && !$(parent).closest(Selector.NAVBAR_NAV).length) {
        $('body').children().on('mouseover', null, $.noop);
      }

      this._element.focus();
      this._element.setAttribute('aria-expanded', true);

      $(this._menu).one(Event.TRANSITION_END, function () {
        $(parent).trigger($.Event(Event.SHOWN, relatedTarget));
        $(_this._menu).removeClass(ClassName.SHOWING);
      });

      $(this._menu).addClass(ClassName.SHOW + ' ' + ClassName.SHOWING);
      $(parent).addClass(ClassName.SHOW);
    };

    Dropdown.prototype.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY);
      $(this._element).off(EVENT_KEY);
      this._element = null;
      this._menu = null;
      if (this._popper !== null) {
        this._popper.destroy();
      }
      this._popper = null;
    };

    Dropdown.prototype.update = function update() {
      this._inNavbar = this._detectNavbar();
      if (this._popper !== null) {
        this._popper.scheduleUpdate();
      }
    };

    // private

    Dropdown.prototype._addEventListeners = function _addEventListeners() {
      var _this2 = this;

      $(this._element).on(Event.CLICK, function (event) {
        event.preventDefault();
        event.stopPropagation();
        _this2.toggle();
      });
    };

    Dropdown.prototype._getConfig = function _getConfig(config) {
      var elementData = $(this._element).data();
      if (elementData.placement !== undefined) {
        elementData.placement = AttachmentMap[elementData.placement.toUpperCase()];
      }

      config = $.extend({}, this.constructor.Default, $(this._element).data(), config);

      __WEBPACK_IMPORTED_MODULE_0_bootstrap_js_src_util__["a" /* default */].typeCheckConfig(NAME, config, this.constructor.DefaultType);

      return config;
    };

    Dropdown.prototype._getMenuElement = function _getMenuElement() {
      if (!this._menu) {
        var parent = Dropdown._getParentFromElement(this._element);
        this._menu = $(parent).find(Selector.MENU)[0];
      }
      return this._menu;
    };

    Dropdown.prototype._getPlacement = function _getPlacement() {
      var $parentDropdown = $(this._element).parent();
      var placement = this._config.placement;

      // Handle dropup
      if ($parentDropdown.hasClass(ClassName.DROPUP) || this._config.placement === AttachmentMap.TOP) {
        placement = AttachmentMap.TOP;
        if ($(this._menu).hasClass(ClassName.MENURIGHT)) {
          placement = AttachmentMap.TOPEND;
        }
      } else if ($(this._menu).hasClass(ClassName.MENURIGHT)) {
        placement = AttachmentMap.BOTTOMEND;
      }
      return placement;
    };

    Dropdown.prototype._detectNavbar = function _detectNavbar() {
      return $(this._element).closest('.navbar').length > 0;
    };

    Dropdown.prototype._getPopperConfig = function _getPopperConfig() {
      var popperConfig = {
        placement: this._getPlacement(),
        modifiers: {
          offset: {
            offset: this._config.offset
          },
          flip: {
            enabled: this._config.flip
          }
        }

        // Disable Popper.js for Dropdown in Navbar
      };if (this._inNavbar) {
        popperConfig.modifiers.applyStyle = {
          enabled: !this._inNavbar
        };
      }
      return popperConfig;
    };

    // static

    Dropdown._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY);
        var _config = (typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object' ? config : null;

        if (!data) {
          data = new Dropdown(this, _config);
          $(this).data(DATA_KEY, data);
        }

        if (typeof config === 'string') {
          if (data[config] === undefined) {
            throw new Error('No method named "' + config + '"');
          }
          data[config]();
        }
      });
    };

    Dropdown._clearMenus = function _clearMenus(event) {
      if (event && (event.which === RIGHT_MOUSE_BUTTON_WHICH || event.type === 'keyup' && event.which !== TAB_KEYCODE)) {
        return;
      }

      var toggles = $.makeArray($(Selector.DATA_TOGGLE));

      var _loop = function _loop(i) {
        var parent = Dropdown._getParentFromElement(toggles[i]);
        var context = $(toggles[i]).data(DATA_KEY);
        var relatedTarget = {
          relatedTarget: toggles[i]
        };

        if (!context) {
          return 'continue';
        }

        var dropdownMenu = context._menu;
        if (!$(parent).hasClass(ClassName.SHOW)) {
          return 'continue';
        }

        if (event && (event.type === 'click' && /input|textarea/i.test(event.target.tagName) || event.type === 'keyup' && event.which === TAB_KEYCODE) && $.contains(parent, event.target)) {
          return 'continue';
        }

        var hideEvent = $.Event(Event.HIDE, relatedTarget);
        $(parent).trigger(hideEvent);
        if (hideEvent.isDefaultPrevented()) {
          return 'continue';
        }

        // if this is a touch-enabled device we remove the extra
        // empty mouseover listeners we added for iOS support
        if ('ontouchstart' in document.documentElement) {
          $('body').children().off('mouseover', null, $.noop);
        }

        toggles[i].setAttribute('aria-expanded', 'false');

        $(dropdownMenu).addClass(ClassName.HIDING).removeClass(ClassName.SHOW);
        $(parent).removeClass(ClassName.SHOW);

        $(dropdownMenu).one(Event.TRANSITION_END, function () {
          $(parent).trigger($.Event(Event.HIDDEN, relatedTarget));
          $(dropdownMenu).removeClass(ClassName.HIDING);
        });
      };

      for (var i = 0; i < toggles.length; i++) {
        var _ret = _loop(i);

        if (_ret === 'continue') continue;
      }
    };

    Dropdown._getParentFromElement = function _getParentFromElement(element) {
      var parent = void 0;
      var selector = __WEBPACK_IMPORTED_MODULE_0_bootstrap_js_src_util__["a" /* default */].getSelectorFromElement(element);

      if (selector) {
        parent = $(selector)[0];
      }

      return parent || element.parentNode;
    };

    Dropdown._dataApiKeydownHandler = function _dataApiKeydownHandler(event) {
      if (!REGEXP_KEYDOWN.test(event.which) || /button/i.test(event.target.tagName) && event.which === SPACE_KEYCODE || /input|textarea/i.test(event.target.tagName)) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();

      if (this.disabled || $(this).hasClass(ClassName.DISABLED)) {
        return;
      }

      var parent = Dropdown._getParentFromElement(this);
      var isActive = $(parent).hasClass(ClassName.SHOW);

      if (!isActive && (event.which !== ESCAPE_KEYCODE || event.which !== SPACE_KEYCODE) || isActive && (event.which === ESCAPE_KEYCODE || event.which === SPACE_KEYCODE)) {

        if (event.which === ESCAPE_KEYCODE) {
          var toggle = $(parent).find(Selector.DATA_TOGGLE)[0];
          $(toggle).trigger('focus');
        }

        $(this).trigger('click');
        return;
      }

      var items = $(parent).find(Selector.VISIBLE_ITEMS).get();

      if (!items.length) {
        return;
      }

      var index = items.indexOf(event.target);

      if (event.which === ARROW_UP_KEYCODE && index > 0) {
        // up
        index--;
      }

      if (event.which === ARROW_DOWN_KEYCODE && index < items.length - 1) {
        // down
        index++;
      }

      if (index < 0) {
        index = 0;
      }

      items[index].focus();
    };

    _createClass(Dropdown, null, [{
      key: 'VERSION',
      get: function get() {
        return VERSION;
      }
    }, {
      key: 'Default',
      get: function get() {
        return Default;
      }
    }, {
      key: 'DefaultType',
      get: function get() {
        return DefaultType;
      }
    }]);

    return Dropdown;
  }();

  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  $(document).on(Event.KEYDOWN_DATA_API, Selector.DATA_TOGGLE, Dropdown._dataApiKeydownHandler).on(Event.KEYDOWN_DATA_API, Selector.MENU, Dropdown._dataApiKeydownHandler).on(Event.CLICK_DATA_API + ' ' + Event.KEYUP_DATA_API, Dropdown._clearMenus).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
    event.preventDefault();
    event.stopPropagation();
    Dropdown._jQueryInterface.call($(this), 'toggle');
  }).on(Event.CLICK_DATA_API, Selector.FORM_CHILD, function (e) {
    e.stopPropagation();
  });

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Dropdown._jQueryInterface;
  $.fn[NAME].Constructor = Dropdown;
  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Dropdown._jQueryInterface;
  };

  return Dropdown;
}(jQuery);

/* unused harmony default export */ var _unused_webpack_default_export = (Dropdown);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js")["default"]))

/***/ }),

/***/ "./node_modules/bootstrap-material-design/js/radio.js":
/*!************************************************************!*\
  !*** ./node_modules/bootstrap-material-design/js/radio.js ***!
  \************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseSelection__ = __webpack_require__(/*! ./baseSelection */ "./node_modules/bootstrap-material-design/js/baseSelection.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(/*! ./util */ "./node_modules/bootstrap-material-design/js/util.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


//import Text from './text'
//import File from './file'
//import Checkbox from './checkbox'
//import Switch from './switch'


var Radio = function ($) {
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */
  var NAME = "radio";
  var DATA_KEY = "bmd." + NAME;
  var JQUERY_NAME = "bmd" + (NAME.charAt(0).toUpperCase() + NAME.slice(1));
  var JQUERY_NO_CONFLICT = $.fn[JQUERY_NAME];

  var Default = {
    template: "<span class='bmd-radio'></span>"
  };

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Radio = function (_BaseSelection) {
    _inherits(Radio, _BaseSelection);

    function Radio($element, config) {
      var properties = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : { inputType: NAME, outerClass: NAME };

      _classCallCheck(this, Radio);

      return _possibleConstructorReturn(this, _BaseSelection.call(this, $element, $.extend(true,
      //{invalidComponentMatches: [Checkbox, File, Switch, Text]},
      Default, config), properties));
    }

    Radio.prototype.dispose = function dispose() {
      var dataKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DATA_KEY;

      _BaseSelection.prototype.dispose.call(this, dataKey);
    };

    Radio.matches = function matches($element) {
      // '.radio > label > input[type=radio]'
      if ($element.attr("type") === "radio") {
        return true;
      }
      return false;
    };

    Radio.rejectMatch = function rejectMatch(component, $element) {
      __WEBPACK_IMPORTED_MODULE_1__util__["a" /* default */].assert(this.$element, this.matches($element), component + " component element " + __WEBPACK_IMPORTED_MODULE_1__util__["a" /* default */].describe($element) + " is invalid for type='radio'.");
    };

    // ------------------------------------------------------------------------
    // protected

    //decorateMarkup() {
    //  this.$element.after(this.config.template)
    //}

    // ------------------------------------------------------------------------
    // private

    // ------------------------------------------------------------------------
    // static


    Radio._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $(this);
        var data = $element.data(DATA_KEY);

        if (!data) {
          data = new Radio($element, config);
          $element.data(DATA_KEY, data);
        }
      });
    };

    return Radio;
  }(__WEBPACK_IMPORTED_MODULE_0__baseSelection__["a" /* default */]);

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $.fn[JQUERY_NAME] = Radio._jQueryInterface;
  $.fn[JQUERY_NAME].Constructor = Radio;
  $.fn[JQUERY_NAME].noConflict = function () {
    $.fn[JQUERY_NAME] = JQUERY_NO_CONFLICT;
    return Radio._jQueryInterface;
  };

  return Radio;
}(jQuery);

/* harmony default export */ __webpack_exports__["a"] = (Radio);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./node_modules/bootstrap-material-design/js/radioInline.js":
/*!******************************************************************!*\
  !*** ./node_modules/bootstrap-material-design/js/radioInline.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__radio__ = __webpack_require__(/*! ./radio */ "./node_modules/bootstrap-material-design/js/radio.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var RadioInline = function ($) {
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */
  var NAME = "radioInline";
  var DATA_KEY = "bmd." + NAME;
  var JQUERY_NAME = "bmd" + (NAME.charAt(0).toUpperCase() + NAME.slice(1));
  var JQUERY_NO_CONFLICT = $.fn[JQUERY_NAME];

  var Default = {
    bmdFormGroup: {
      create: false, // no bmd-form-group creation if form-group not present. It messes with the layout.
      required: false
    }
  };

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var RadioInline = function (_Radio) {
    _inherits(RadioInline, _Radio);

    function RadioInline($element, config) {
      var properties = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : { inputType: "radio", outerClass: "radio-inline" };

      _classCallCheck(this, RadioInline);

      return _possibleConstructorReturn(this, _Radio.call(this, $element, $.extend(true, {}, Default, config), properties));
    }

    RadioInline.prototype.dispose = function dispose() {
      _Radio.prototype.dispose.call(this, DATA_KEY);
    };

    // ------------------------------------------------------------------------
    // protected

    // ------------------------------------------------------------------------
    // protected

    // ------------------------------------------------------------------------
    // private

    // ------------------------------------------------------------------------
    // static


    RadioInline._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $(this);
        var data = $element.data(DATA_KEY);

        if (!data) {
          data = new RadioInline($element, config);
          $element.data(DATA_KEY, data);
        }
      });
    };

    return RadioInline;
  }(__WEBPACK_IMPORTED_MODULE_0__radio__["a" /* default */]);

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $.fn[JQUERY_NAME] = RadioInline._jQueryInterface;
  $.fn[JQUERY_NAME].Constructor = RadioInline;
  $.fn[JQUERY_NAME].noConflict = function () {
    $.fn[JQUERY_NAME] = JQUERY_NO_CONFLICT;
    return RadioInline._jQueryInterface;
  };

  return RadioInline;
}(jQuery);

/* unused harmony default export */ var _unused_webpack_default_export = (RadioInline);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./node_modules/bootstrap-material-design/js/ripples.js":
/*!**************************************************************!*\
  !*** ./node_modules/bootstrap-material-design/js/ripples.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(/*! ./util */ "./node_modules/bootstrap-material-design/js/util.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Ripples = function ($) {
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */
  var NAME = "ripples";
  var DATA_KEY = "bmd." + NAME;
  var JQUERY_NAME = "bmd" + (NAME.charAt(0).toUpperCase() + NAME.slice(1));
  var JQUERY_NO_CONFLICT = $.fn[JQUERY_NAME];

  var ClassName = {
    CONTAINER: "ripple-container",
    DECORATOR: "ripple-decorator"
  };

  var Selector = {
    CONTAINER: "." + ClassName.CONTAINER,
    DECORATOR: "." + ClassName.DECORATOR //,
  };

  var Default = {
    container: {
      template: "<div class='" + ClassName.CONTAINER + "'></div>"
    },
    decorator: {
      template: "<div class='" + ClassName.DECORATOR + "'></div>"
    },
    trigger: {
      start: "mousedown touchstart",
      end: "mouseup mouseleave touchend"
    },
    touchUserAgentRegex: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i,
    duration: 500
  };

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Ripples = function () {
    function Ripples($element, config) {
      var _this = this;

      _classCallCheck(this, Ripples);

      this.$element = $element;

      // console.log(`Adding ripples to ${Util.describe(this.$element)}`)  // eslint-disable-line no-console
      this.config = $.extend(true, {}, Default, config);

      // attach initial listener
      this.$element.on(this.config.trigger.start, function (event) {
        _this._onStartRipple(event);
      });
    }

    Ripples.prototype.dispose = function dispose() {
      this.$element.data(DATA_KEY, null);
      this.$element = null;
      this.$container = null;
      this.$decorator = null;
      this.config = null;
    };

    // ------------------------------------------------------------------------
    // private

    Ripples.prototype._onStartRipple = function _onStartRipple(event) {
      var _this2 = this;

      // Verify if the user is just touching on a device and return if so
      if (this._isTouch() && event.type === "mousedown") {
        return;
      }

      // Find or create the ripple container element
      this._findOrCreateContainer();

      // Get relY and relX positions of the container element
      var relY = this._getRelY(event);
      var relX = this._getRelX(event);

      // If relY and/or relX are false, return the event
      if (!relY && !relX) {
        return;
      }

      // set the location and color each time (even if element is cached)
      this.$decorator.css({
        left: relX,
        top: relY,
        "background-color": this._getRipplesColor()
      });

      // Make sure the ripple has the styles applied (ugly hack but it works)
      this._forceStyleApplication();

      // Turn on the ripple animation
      this.rippleOn();

      // Call the rippleEnd function when the transition 'on' ends
      setTimeout(function () {
        _this2.rippleEnd();
      }, this.config.duration);

      // Detect when the user leaves the element to cleanup if not already done?
      this.$element.on(this.config.trigger.end, function () {
        if (_this2.$decorator) {
          // guard against race condition/mouse attack
          _this2.$decorator.data("mousedown", "off");

          if (_this2.$decorator.data("animating") === "off") {
            _this2.rippleOut();
          }
        }
      });
    };

    Ripples.prototype._findOrCreateContainer = function _findOrCreateContainer() {
      if (!this.$container || !this.$container.length > 0) {
        this.$element.append(this.config.container.template);
        this.$container = this.$element.find(Selector.CONTAINER);
      }

      // always add the rippleElement, it is always removed
      this.$container.append(this.config.decorator.template);
      this.$decorator = this.$container.find(Selector.DECORATOR);
    };

    // Make sure the ripple has the styles applied (ugly hack but it works)


    Ripples.prototype._forceStyleApplication = function _forceStyleApplication() {
      return window.getComputedStyle(this.$decorator[0]).opacity;
    };

    /**
     * Get the relX
     */


    Ripples.prototype._getRelX = function _getRelX(event) {
      var wrapperOffset = this.$container.offset();

      var result = null;
      if (!this._isTouch()) {
        // Get the mouse position relative to the ripple wrapper
        result = event.pageX - wrapperOffset.left;
      } else {
        // Make sure the user is using only one finger and then get the touch
        //  position relative to the ripple wrapper
        event = event.originalEvent;

        if (event.touches.length === 1) {
          result = event.touches[0].pageX - wrapperOffset.left;
        } else {
          result = false;
        }
      }

      return result;
    };

    /**
     * Get the relY
     */


    Ripples.prototype._getRelY = function _getRelY(event) {
      var containerOffset = this.$container.offset();
      var result = null;

      if (!this._isTouch()) {
        /**
         * Get the mouse position relative to the ripple wrapper
         */
        result = event.pageY - containerOffset.top;
      } else {
        /**
         * Make sure the user is using only one finger and then get the touch
         * position relative to the ripple wrapper
         */
        event = event.originalEvent;

        if (event.touches.length === 1) {
          result = event.touches[0].pageY - containerOffset.top;
        } else {
          result = false;
        }
      }

      return result;
    };

    /**
     * Get the ripple color
     */


    Ripples.prototype._getRipplesColor = function _getRipplesColor() {
      var color = this.$element.data("ripple-color") ? this.$element.data("ripple-color") : window.getComputedStyle(this.$element[0]).color;
      return color;
    };

    /**
     * Verify if the client is using a mobile device
     */


    Ripples.prototype._isTouch = function _isTouch() {
      return this.config.touchUserAgentRegex.test(navigator.userAgent);
    };

    /**
     * End the animation of the ripple
     */


    Ripples.prototype.rippleEnd = function rippleEnd() {
      if (this.$decorator) {
        // guard against race condition/mouse attack
        this.$decorator.data("animating", "off");

        if (this.$decorator.data("mousedown") === "off") {
          this.rippleOut(this.$decorator);
        }
      }
    };

    /**
     * Turn off the ripple effect
     */


    Ripples.prototype.rippleOut = function rippleOut() {
      var _this3 = this;

      this.$decorator.off();

      if (__WEBPACK_IMPORTED_MODULE_0__util__["a" /* default */].transitionEndSupported()) {
        this.$decorator.addClass("ripple-out");
      } else {
        this.$decorator.animate({ opacity: 0 }, 100, function () {
          _this3.$decorator.trigger("transitionend");
        });
      }

      this.$decorator.on(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* default */].transitionEndSelector(), function () {
        if (_this3.$decorator) {
          _this3.$decorator.remove();
          _this3.$decorator = null;
        }
      });
    };

    /**
     * Turn on the ripple effect
     */


    Ripples.prototype.rippleOn = function rippleOn() {
      var _this4 = this;

      var size = this._getNewSize();

      if (__WEBPACK_IMPORTED_MODULE_0__util__["a" /* default */].transitionEndSupported()) {
        this.$decorator.css({
          "-ms-transform": "scale(" + size + ")",
          "-moz-transform": "scale(" + size + ")",
          "-webkit-transform": "scale(" + size + ")",
          transform: "scale(" + size + ")"
        }).addClass("ripple-on").data("animating", "on").data("mousedown", "on");
      } else {
        this.$decorator.animate({
          width: Math.max(this.$element.outerWidth(), this.$element.outerHeight()) * 2,
          height: Math.max(this.$element.outerWidth(), this.$element.outerHeight()) * 2,
          "margin-left": Math.max(this.$element.outerWidth(), this.$element.outerHeight()) * -1,
          "margin-top": Math.max(this.$element.outerWidth(), this.$element.outerHeight()) * -1,
          opacity: 0.2
        }, this.config.duration, function () {
          _this4.$decorator.trigger("transitionend");
        });
      }
    };

    /**
     * Get the new size based on the element height/width and the ripple width
     */


    Ripples.prototype._getNewSize = function _getNewSize() {
      return Math.max(this.$element.outerWidth(), this.$element.outerHeight()) / this.$decorator.outerWidth() * 2.5;
    };

    // ------------------------------------------------------------------------
    // static

    Ripples._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $(this);
        var data = $element.data(DATA_KEY);

        if (!data) {
          data = new Ripples($element, config);
          $element.data(DATA_KEY, data);
        }
      });
    };

    return Ripples;
  }();

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $.fn[JQUERY_NAME] = Ripples._jQueryInterface;
  $.fn[JQUERY_NAME].Constructor = Ripples;
  $.fn[JQUERY_NAME].noConflict = function () {
    $.fn[JQUERY_NAME] = JQUERY_NO_CONFLICT;
    return Ripples._jQueryInterface;
  };

  return Ripples;
}(jQuery);

/* unused harmony default export */ var _unused_webpack_default_export = (Ripples);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./node_modules/bootstrap-material-design/js/select.js":
/*!*************************************************************!*\
  !*** ./node_modules/bootstrap-material-design/js/select.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseFormControl__ = __webpack_require__(/*! ./baseFormControl */ "./node_modules/bootstrap-material-design/js/baseFormControl.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(/*! ./util */ "./node_modules/bootstrap-material-design/js/util.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


//import Checkbox from './checkbox'
//import File from './file'
//import Radio from './radio'
//import Switch from './switch'
//import Text from './text'
//import Textarea from './textarea'


var Select = function ($) {
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */
  var NAME = "select";
  var DATA_KEY = "bmd." + NAME;
  var JQUERY_NAME = "bmd" + (NAME.charAt(0).toUpperCase() + NAME.slice(1));
  var JQUERY_NO_CONFLICT = $.fn[JQUERY_NAME];

  var Default = {
    requiredClasses: ["form-control||custom-select"]
  };

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Select = function (_BaseFormControl) {
    _inherits(Select, _BaseFormControl);

    function Select($element, config) {
      _classCallCheck(this, Select);

      // floating labels will cover the options, so trigger them to be above (if used)
      var _this = _possibleConstructorReturn(this, _BaseFormControl.call(this, $element, $.extend(true,
      //{invalidComponentMatches: [Checkbox, File, Radio, Switch, Text, Textarea]},
      Default, config)));

      _this.addIsFilled();
      return _this;
    }

    Select.prototype.dispose = function dispose() {
      _BaseFormControl.prototype.dispose.call(this, DATA_KEY);
    };

    Select.matches = function matches($element) {
      if ($element.prop("tagName") === "select") {
        return true;
      }
      return false;
    };

    Select.rejectMatch = function rejectMatch(component, $element) {
      __WEBPACK_IMPORTED_MODULE_1__util__["a" /* default */].assert(this.$element, this.matches($element), component + " component element " + __WEBPACK_IMPORTED_MODULE_1__util__["a" /* default */].describe($element) + " is invalid for <select>.");
    };

    // ------------------------------------------------------------------------
    // protected

    // ------------------------------------------------------------------------
    // private

    // ------------------------------------------------------------------------
    // static


    Select._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $(this);
        var data = $element.data(DATA_KEY);

        if (!data) {
          data = new Select($element, config);
          $element.data(DATA_KEY, data);
        }
      });
    };

    return Select;
  }(__WEBPACK_IMPORTED_MODULE_0__baseFormControl__["a" /* default */]);

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $.fn[JQUERY_NAME] = Select._jQueryInterface;
  $.fn[JQUERY_NAME].Constructor = Select;
  $.fn[JQUERY_NAME].noConflict = function () {
    $.fn[JQUERY_NAME] = JQUERY_NO_CONFLICT;
    return Select._jQueryInterface;
  };

  return Select;
}(jQuery);

/* unused harmony default export */ var _unused_webpack_default_export = (Select);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./node_modules/bootstrap-material-design/js/text.js":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap-material-design/js/text.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseFormControl__ = __webpack_require__(/*! ./baseFormControl */ "./node_modules/bootstrap-material-design/js/baseFormControl.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(/*! ./util */ "./node_modules/bootstrap-material-design/js/util.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


//import Checkbox from './checkbox'
//import File from './file'
//import Radio from './radio'
//import Switch from './switch'
//import Textarea from './textarea'
//import Select from './select'


var Text = function ($) {
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */
  var NAME = "text";
  var DATA_KEY = "bmd." + NAME;
  var JQUERY_NAME = "bmd" + (NAME.charAt(0).toUpperCase() + NAME.slice(1));
  var JQUERY_NO_CONFLICT = $.fn[JQUERY_NAME];

  var Default = {};

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Text = function (_BaseFormControl) {
    _inherits(Text, _BaseFormControl);

    function Text($element, config) {
      _classCallCheck(this, Text);

      return _possibleConstructorReturn(this, _BaseFormControl.call(this, $element, $.extend(true,
      //{invalidComponentMatches: [Checkbox, File, Radio, Switch, Select, Textarea]},
      Default, config)));
    }

    Text.prototype.dispose = function dispose() {
      var dataKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DATA_KEY;

      _BaseFormControl.prototype.dispose.call(this, dataKey);
    };

    Text.matches = function matches($element) {
      if ($element.attr("type") === "text") {
        return true;
      }
      return false;
    };

    Text.rejectMatch = function rejectMatch(component, $element) {
      __WEBPACK_IMPORTED_MODULE_1__util__["a" /* default */].assert(this.$element, this.matches($element), component + " component element " + __WEBPACK_IMPORTED_MODULE_1__util__["a" /* default */].describe($element) + " is invalid for type='text'.");
    };

    // ------------------------------------------------------------------------
    // protected

    // ------------------------------------------------------------------------
    // private

    // ------------------------------------------------------------------------
    // static


    Text._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $(this);
        var data = $element.data(DATA_KEY);

        if (!data) {
          data = new Text($element, config);
          $element.data(DATA_KEY, data);
        }
      });
    };

    return Text;
  }(__WEBPACK_IMPORTED_MODULE_0__baseFormControl__["a" /* default */]);

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $.fn[JQUERY_NAME] = Text._jQueryInterface;
  $.fn[JQUERY_NAME].Constructor = Text;
  $.fn[JQUERY_NAME].noConflict = function () {
    $.fn[JQUERY_NAME] = JQUERY_NO_CONFLICT;
    return Text._jQueryInterface;
  };

  return Text;
}(jQuery);

/* unused harmony default export */ var _unused_webpack_default_export = (Text);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./node_modules/bootstrap-material-design/js/textarea.js":
/*!***************************************************************!*\
  !*** ./node_modules/bootstrap-material-design/js/textarea.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseFormControl__ = __webpack_require__(/*! ./baseFormControl */ "./node_modules/bootstrap-material-design/js/baseFormControl.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(/*! ./util */ "./node_modules/bootstrap-material-design/js/util.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


//import Checkbox from './checkbox'
//import File from './file'
//import Radio from './radio'
//import Switch from './switch'
//import Text from './text'
//import Select from './select'


var Textarea = function ($) {
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */
  var NAME = "textarea";
  var DATA_KEY = "bmd." + NAME;
  var JQUERY_NAME = "bmd" + (NAME.charAt(0).toUpperCase() + NAME.slice(1));
  var JQUERY_NO_CONFLICT = $.fn[JQUERY_NAME];

  var Default = {};

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Textarea = function (_BaseFormControl) {
    _inherits(Textarea, _BaseFormControl);

    function Textarea($element, config) {
      _classCallCheck(this, Textarea);

      return _possibleConstructorReturn(this, _BaseFormControl.call(this, $element, $.extend(true,
      //{invalidComponentMatches: [Checkbox, File, Radio, Text, Select, Switch]},
      Default, config)));
    }

    Textarea.prototype.dispose = function dispose() {
      _BaseFormControl.prototype.dispose.call(this, DATA_KEY);
    };

    Textarea.matches = function matches($element) {
      if ($element.prop("tagName") === "textarea") {
        return true;
      }
      return false;
    };

    Textarea.rejectMatch = function rejectMatch(component, $element) {
      __WEBPACK_IMPORTED_MODULE_1__util__["a" /* default */].assert(this.$element, this.matches($element), component + " component element " + __WEBPACK_IMPORTED_MODULE_1__util__["a" /* default */].describe($element) + " is invalid for <textarea>.");
    };

    // ------------------------------------------------------------------------
    // protected

    // ------------------------------------------------------------------------
    // private

    // ------------------------------------------------------------------------
    // static


    Textarea._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $(this);
        var data = $element.data(DATA_KEY);

        if (!data) {
          data = new Textarea($element, config);
          $element.data(DATA_KEY, data);
        }
      });
    };

    return Textarea;
  }(__WEBPACK_IMPORTED_MODULE_0__baseFormControl__["a" /* default */]);

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $.fn[JQUERY_NAME] = Textarea._jQueryInterface;
  $.fn[JQUERY_NAME].Constructor = Textarea;
  $.fn[JQUERY_NAME].noConflict = function () {
    $.fn[JQUERY_NAME] = JQUERY_NO_CONFLICT;
    return Textarea._jQueryInterface;
  };

  return Textarea;
}(jQuery);

/* unused harmony default export */ var _unused_webpack_default_export = (Textarea);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./node_modules/bootstrap-material-design/js/util.js":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap-material-design/js/util.js ***!
  \***********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {var Util = function () {
  /**
   * ------------------------------------------------------------------------
   * Private TransitionEnd Helpers
   * ------------------------------------------------------------------------
   */

  var transitionEnd = false;
  var _transitionEndSelector = "";

  var TransitionEndEvent = {
    WebkitTransition: "webkitTransitionEnd",
    MozTransition: "transitionend",
    OTransition: "oTransitionEnd otransitionend",
    transition: "transitionend"
  };

  function transitionEndTest() {
    if (window.QUnit) {
      return false;
    }

    var el = document.createElement("bmd");

    for (var name in TransitionEndEvent) {
      if (el.style[name] !== undefined) {
        return TransitionEndEvent[name]; // { end: TransitionEndEvent[name] }
      }
    }

    return false;
  }

  function setTransitionEndSupport() {
    transitionEnd = transitionEndTest();

    // generate a concatenated transition end event selector
    for (var name in TransitionEndEvent) {
      _transitionEndSelector += " " + TransitionEndEvent[name];
    }
  }

  /**
   * --------------------------------------------------------------------------
   * Public Util Api
   * --------------------------------------------------------------------------
   */

  var Util = {
    transitionEndSupported: function transitionEndSupported() {
      return transitionEnd;
    },
    transitionEndSelector: function transitionEndSelector() {
      return _transitionEndSelector;
    },
    isChar: function isChar(event) {
      if (typeof event.which === "undefined") {
        return true;
      } else if (typeof event.which === "number" && event.which > 0) {
        return !event.ctrlKey && !event.metaKey && !event.altKey && event.which !== 8 && // backspace
        event.which !== 9 && // tab
        event.which !== 13 && // enter
        event.which !== 16 && // shift
        event.which !== 17 && // ctrl
        event.which !== 20 && // caps lock
        event.which !== 27 // escape
        ;
      }
      return false;
    },
    assert: function assert($element, invalidTest, message) {
      if (invalidTest) {
        if (!$element === undefined) {
          $element.css("border", "1px solid red");
        }
        console.error(message, $element); // eslint-disable-line no-console
        throw message;
      }
    },
    describe: function describe($element) {
      if ($element === undefined) {
        return "undefined";
      } else if ($element.length === 0) {
        return "(no matching elements)";
      }
      return $element[0].outerHTML.split(">")[0] + ">";
    }
  };

  setTransitionEndSupport();
  return Util;
}(jQuery);

/* harmony default export */ __webpack_exports__["a"] = (Util);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./node_modules/bootstrap/js/src/alert.js":
/*!************************************************!*\
  !*** ./node_modules/bootstrap/js/src/alert.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(/*! ./util */ "./node_modules/bootstrap/js/src/util.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.3.1): alert.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */




/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var NAME = 'alert';
var VERSION = '4.3.1';
var DATA_KEY = 'bs.alert';
var EVENT_KEY = '.' + DATA_KEY;
var DATA_API_KEY = '.data-api';
var JQUERY_NO_CONFLICT = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.fn[NAME];

var Selector = {
  DISMISS: '[data-dismiss="alert"]'
};

var Event = {
  CLOSE: 'close' + EVENT_KEY,
  CLOSED: 'closed' + EVENT_KEY,
  CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY
};

var ClassName = {
  ALERT: 'alert',
  FADE: 'fade',
  SHOW: 'show'

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

};
var Alert = function () {
  function Alert(element) {
    _classCallCheck(this, Alert);

    this._element = element;
  }

  // Getters

  // Public

  Alert.prototype.close = function close(element) {
    var rootElement = this._element;
    if (element) {
      rootElement = this._getRootElement(element);
    }

    var customEvent = this._triggerCloseEvent(rootElement);

    if (customEvent.isDefaultPrevented()) {
      return;
    }

    this._removeElement(rootElement);
  };

  Alert.prototype.dispose = function dispose() {
    __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.removeData(this._element, DATA_KEY);
    this._element = null;
  };

  // Private

  Alert.prototype._getRootElement = function _getRootElement(element) {
    var selector = __WEBPACK_IMPORTED_MODULE_1__util__["a" /* default */].getSelectorFromElement(element);
    var parent = false;

    if (selector) {
      parent = document.querySelector(selector);
    }

    if (!parent) {
      parent = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(element).closest('.' + ClassName.ALERT)[0];
    }

    return parent;
  };

  Alert.prototype._triggerCloseEvent = function _triggerCloseEvent(element) {
    var closeEvent = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.Event(Event.CLOSE);

    __WEBPACK_IMPORTED_MODULE_0_jquery___default()(element).trigger(closeEvent);
    return closeEvent;
  };

  Alert.prototype._removeElement = function _removeElement(element) {
    var _this = this;

    __WEBPACK_IMPORTED_MODULE_0_jquery___default()(element).removeClass(ClassName.SHOW);

    if (!__WEBPACK_IMPORTED_MODULE_0_jquery___default()(element).hasClass(ClassName.FADE)) {
      this._destroyElement(element);
      return;
    }

    var transitionDuration = __WEBPACK_IMPORTED_MODULE_1__util__["a" /* default */].getTransitionDurationFromElement(element);

    __WEBPACK_IMPORTED_MODULE_0_jquery___default()(element).one(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* default */].TRANSITION_END, function (event) {
      return _this._destroyElement(element, event);
    }).emulateTransitionEnd(transitionDuration);
  };

  Alert.prototype._destroyElement = function _destroyElement(element) {
    __WEBPACK_IMPORTED_MODULE_0_jquery___default()(element).detach().trigger(Event.CLOSED).remove();
  };

  // Static

  Alert._jQueryInterface = function _jQueryInterface(config) {
    return this.each(function () {
      var $element = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this);
      var data = $element.data(DATA_KEY);

      if (!data) {
        data = new Alert(this);
        $element.data(DATA_KEY, data);
      }

      if (config === 'close') {
        data[config](this);
      }
    });
  };

  Alert._handleDismiss = function _handleDismiss(alertInstance) {
    return function (event) {
      if (event) {
        event.preventDefault();
      }

      alertInstance.close(this);
    };
  };

  _createClass(Alert, null, [{
    key: 'VERSION',
    get: function get() {
      return VERSION;
    }
  }]);

  return Alert;
}();

/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */

__WEBPACK_IMPORTED_MODULE_0_jquery___default()(document).on(Event.CLICK_DATA_API, Selector.DISMISS, Alert._handleDismiss(new Alert()));

/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 */

__WEBPACK_IMPORTED_MODULE_0_jquery___default.a.fn[NAME] = Alert._jQueryInterface;
__WEBPACK_IMPORTED_MODULE_0_jquery___default.a.fn[NAME].Constructor = Alert;
__WEBPACK_IMPORTED_MODULE_0_jquery___default.a.fn[NAME].noConflict = function () {
  __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.fn[NAME] = JQUERY_NO_CONFLICT;
  return Alert._jQueryInterface;
};

/* unused harmony default export */ var _unused_webpack_default_export = (Alert);

/***/ }),

/***/ "./node_modules/bootstrap/js/src/button.js":
/*!*************************************************!*\
  !*** ./node_modules/bootstrap/js/src/button.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.3.1): button.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */



/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var NAME = 'button';
var VERSION = '4.3.1';
var DATA_KEY = 'bs.button';
var EVENT_KEY = '.' + DATA_KEY;
var DATA_API_KEY = '.data-api';
var JQUERY_NO_CONFLICT = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.fn[NAME];

var ClassName = {
  ACTIVE: 'active',
  BUTTON: 'btn',
  FOCUS: 'focus'
};

var Selector = {
  DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
  DATA_TOGGLE: '[data-toggle="buttons"]',
  INPUT: 'input:not([type="hidden"])',
  ACTIVE: '.active',
  BUTTON: '.btn'
};

var Event = {
  CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY,
  FOCUS_BLUR_DATA_API: 'focus' + EVENT_KEY + DATA_API_KEY + ' ' + ('blur' + EVENT_KEY + DATA_API_KEY)

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

};
var Button = function () {
  function Button(element) {
    _classCallCheck(this, Button);

    this._element = element;
  }

  // Getters

  // Public

  Button.prototype.toggle = function toggle() {
    var triggerChangeEvent = true;
    var addAriaPressed = true;
    var rootElement = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this._element).closest(Selector.DATA_TOGGLE)[0];

    if (rootElement) {
      var input = this._element.querySelector(Selector.INPUT);

      if (input) {
        if (input.type === 'radio') {
          if (input.checked && this._element.classList.contains(ClassName.ACTIVE)) {
            triggerChangeEvent = false;
          } else {
            var activeElement = rootElement.querySelector(Selector.ACTIVE);

            if (activeElement) {
              __WEBPACK_IMPORTED_MODULE_0_jquery___default()(activeElement).removeClass(ClassName.ACTIVE);
            }
          }
        }

        if (triggerChangeEvent) {
          if (input.hasAttribute('disabled') || rootElement.hasAttribute('disabled') || input.classList.contains('disabled') || rootElement.classList.contains('disabled')) {
            return;
          }
          input.checked = !this._element.classList.contains(ClassName.ACTIVE);
          __WEBPACK_IMPORTED_MODULE_0_jquery___default()(input).trigger('change');
        }

        input.focus();
        addAriaPressed = false;
      }
    }

    if (addAriaPressed) {
      this._element.setAttribute('aria-pressed', !this._element.classList.contains(ClassName.ACTIVE));
    }

    if (triggerChangeEvent) {
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this._element).toggleClass(ClassName.ACTIVE);
    }
  };

  Button.prototype.dispose = function dispose() {
    __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.removeData(this._element, DATA_KEY);
    this._element = null;
  };

  // Static

  Button._jQueryInterface = function _jQueryInterface(config) {
    return this.each(function () {
      var data = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).data(DATA_KEY);

      if (!data) {
        data = new Button(this);
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).data(DATA_KEY, data);
      }

      if (config === 'toggle') {
        data[config]();
      }
    });
  };

  _createClass(Button, null, [{
    key: 'VERSION',
    get: function get() {
      return VERSION;
    }
  }]);

  return Button;
}();

/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */

__WEBPACK_IMPORTED_MODULE_0_jquery___default()(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE_CARROT, function (event) {
  event.preventDefault();

  var button = event.target;

  if (!__WEBPACK_IMPORTED_MODULE_0_jquery___default()(button).hasClass(ClassName.BUTTON)) {
    button = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(button).closest(Selector.BUTTON);
  }

  Button._jQueryInterface.call(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(button), 'toggle');
}).on(Event.FOCUS_BLUR_DATA_API, Selector.DATA_TOGGLE_CARROT, function (event) {
  var button = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(event.target).closest(Selector.BUTTON)[0];
  __WEBPACK_IMPORTED_MODULE_0_jquery___default()(button).toggleClass(ClassName.FOCUS, /^focus(in)?$/.test(event.type));
});

/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 */

__WEBPACK_IMPORTED_MODULE_0_jquery___default.a.fn[NAME] = Button._jQueryInterface;
__WEBPACK_IMPORTED_MODULE_0_jquery___default.a.fn[NAME].Constructor = Button;
__WEBPACK_IMPORTED_MODULE_0_jquery___default.a.fn[NAME].noConflict = function () {
  __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.fn[NAME] = JQUERY_NO_CONFLICT;
  return Button._jQueryInterface;
};

/* unused harmony default export */ var _unused_webpack_default_export = (Button);

/***/ }),

/***/ "./node_modules/bootstrap/js/src/carousel.js":
/*!***************************************************!*\
  !*** ./node_modules/bootstrap/js/src/carousel.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(/*! ./util */ "./node_modules/bootstrap/js/src/util.js");
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.3.1): carousel.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */




/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var NAME = 'carousel';
var VERSION = '4.3.1';
var DATA_KEY = 'bs.carousel';
var EVENT_KEY = '.' + DATA_KEY;
var DATA_API_KEY = '.data-api';
var JQUERY_NO_CONFLICT = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.fn[NAME];
var ARROW_LEFT_KEYCODE = 37; // KeyboardEvent.which value for left arrow key
var ARROW_RIGHT_KEYCODE = 39; // KeyboardEvent.which value for right arrow key
var TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch
var SWIPE_THRESHOLD = 40;

var Default = {
  interval: 5000,
  keyboard: true,
  slide: false,
  pause: 'hover',
  wrap: true,
  touch: true
};

var DefaultType = {
  interval: '(number|boolean)',
  keyboard: 'boolean',
  slide: '(boolean|string)',
  pause: '(string|boolean)',
  wrap: 'boolean',
  touch: 'boolean'
};

var Direction = {
  NEXT: 'next',
  PREV: 'prev',
  LEFT: 'left',
  RIGHT: 'right'
};

var Event = {
  SLIDE: 'slide' + EVENT_KEY,
  SLID: 'slid' + EVENT_KEY,
  KEYDOWN: 'keydown' + EVENT_KEY,
  MOUSEENTER: 'mouseenter' + EVENT_KEY,
  MOUSELEAVE: 'mouseleave' + EVENT_KEY,
  TOUCHSTART: 'touchstart' + EVENT_KEY,
  TOUCHMOVE: 'touchmove' + EVENT_KEY,
  TOUCHEND: 'touchend' + EVENT_KEY,
  POINTERDOWN: 'pointerdown' + EVENT_KEY,
  POINTERUP: 'pointerup' + EVENT_KEY,
  DRAG_START: 'dragstart' + EVENT_KEY,
  LOAD_DATA_API: 'load' + EVENT_KEY + DATA_API_KEY,
  CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY
};

var ClassName = {
  CAROUSEL: 'carousel',
  ACTIVE: 'active',
  SLIDE: 'slide',
  RIGHT: 'carousel-item-right',
  LEFT: 'carousel-item-left',
  NEXT: 'carousel-item-next',
  PREV: 'carousel-item-prev',
  ITEM: 'carousel-item',
  POINTER_EVENT: 'pointer-event'
};

var Selector = {
  ACTIVE: '.active',
  ACTIVE_ITEM: '.active.carousel-item',
  ITEM: '.carousel-item',
  ITEM_IMG: '.carousel-item img',
  NEXT_PREV: '.carousel-item-next, .carousel-item-prev',
  INDICATORS: '.carousel-indicators',
  DATA_SLIDE: '[data-slide], [data-slide-to]',
  DATA_RIDE: '[data-ride="carousel"]'
};

var PointerType = {
  TOUCH: 'touch',
  PEN: 'pen'

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */
};
var Carousel = function () {
  function Carousel(element, config) {
    _classCallCheck(this, Carousel);

    this._items = null;
    this._interval = null;
    this._activeElement = null;
    this._isPaused = false;
    this._isSliding = false;
    this.touchTimeout = null;
    this.touchStartX = 0;
    this.touchDeltaX = 0;

    this._config = this._getConfig(config);
    this._element = element;
    this._indicatorsElement = this._element.querySelector(Selector.INDICATORS);
    this._touchSupported = 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0;
    this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent);

    this._addEventListeners();
  }

  // Getters

  // Public

  Carousel.prototype.next = function next() {
    if (!this._isSliding) {
      this._slide(Direction.NEXT);
    }
  };

  Carousel.prototype.nextWhenVisible = function nextWhenVisible() {
    // Don't call next when the page isn't visible
    // or the carousel or its parent isn't visible
    if (!document.hidden && __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this._element).is(':visible') && __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this._element).css('visibility') !== 'hidden') {
      this.next();
    }
  };

  Carousel.prototype.prev = function prev() {
    if (!this._isSliding) {
      this._slide(Direction.PREV);
    }
  };

  Carousel.prototype.pause = function pause(event) {
    if (!event) {
      this._isPaused = true;
    }

    if (this._element.querySelector(Selector.NEXT_PREV)) {
      __WEBPACK_IMPORTED_MODULE_1__util__["a" /* default */].triggerTransitionEnd(this._element);
      this.cycle(true);
    }

    clearInterval(this._interval);
    this._interval = null;
  };

  Carousel.prototype.cycle = function cycle(event) {
    if (!event) {
      this._isPaused = false;
    }

    if (this._interval) {
      clearInterval(this._interval);
      this._interval = null;
    }

    if (this._config.interval && !this._isPaused) {
      this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval);
    }
  };

  Carousel.prototype.to = function to(index) {
    var _this = this;

    this._activeElement = this._element.querySelector(Selector.ACTIVE_ITEM);

    var activeIndex = this._getItemIndex(this._activeElement);

    if (index > this._items.length - 1 || index < 0) {
      return;
    }

    if (this._isSliding) {
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this._element).one(Event.SLID, function () {
        return _this.to(index);
      });
      return;
    }

    if (activeIndex === index) {
      this.pause();
      this.cycle();
      return;
    }

    var direction = index > activeIndex ? Direction.NEXT : Direction.PREV;

    this._slide(direction, this._items[index]);
  };

  Carousel.prototype.dispose = function dispose() {
    __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this._element).off(EVENT_KEY);
    __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.removeData(this._element, DATA_KEY);

    this._items = null;
    this._config = null;
    this._element = null;
    this._interval = null;
    this._isPaused = null;
    this._isSliding = null;
    this._activeElement = null;
    this._indicatorsElement = null;
  };

  // Private

  Carousel.prototype._getConfig = function _getConfig(config) {
    config = _extends({}, Default, config);
    __WEBPACK_IMPORTED_MODULE_1__util__["a" /* default */].typeCheckConfig(NAME, config, DefaultType);
    return config;
  };

  Carousel.prototype._handleSwipe = function _handleSwipe() {
    var absDeltax = Math.abs(this.touchDeltaX);

    if (absDeltax <= SWIPE_THRESHOLD) {
      return;
    }

    var direction = absDeltax / this.touchDeltaX;

    // swipe left
    if (direction > 0) {
      this.prev();
    }

    // swipe right
    if (direction < 0) {
      this.next();
    }
  };

  Carousel.prototype._addEventListeners = function _addEventListeners() {
    var _this2 = this;

    if (this._config.keyboard) {
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this._element).on(Event.KEYDOWN, function (event) {
        return _this2._keydown(event);
      });
    }

    if (this._config.pause === 'hover') {
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this._element).on(Event.MOUSEENTER, function (event) {
        return _this2.pause(event);
      }).on(Event.MOUSELEAVE, function (event) {
        return _this2.cycle(event);
      });
    }

    if (this._config.touch) {
      this._addTouchEventListeners();
    }
  };

  Carousel.prototype._addTouchEventListeners = function _addTouchEventListeners() {
    var _this3 = this;

    if (!this._touchSupported) {
      return;
    }

    var start = function start(event) {
      if (_this3._pointerEvent && PointerType[event.originalEvent.pointerType.toUpperCase()]) {
        _this3.touchStartX = event.originalEvent.clientX;
      } else if (!_this3._pointerEvent) {
        _this3.touchStartX = event.originalEvent.touches[0].clientX;
      }
    };

    var move = function move(event) {
      // ensure swiping with one touch and not pinching
      if (event.originalEvent.touches && event.originalEvent.touches.length > 1) {
        _this3.touchDeltaX = 0;
      } else {
        _this3.touchDeltaX = event.originalEvent.touches[0].clientX - _this3.touchStartX;
      }
    };

    var end = function end(event) {
      if (_this3._pointerEvent && PointerType[event.originalEvent.pointerType.toUpperCase()]) {
        _this3.touchDeltaX = event.originalEvent.clientX - _this3.touchStartX;
      }

      _this3._handleSwipe();
      if (_this3._config.pause === 'hover') {
        // If it's a touch-enabled device, mouseenter/leave are fired as
        // part of the mouse compatibility events on first tap - the carousel
        // would stop cycling until user tapped out of it;
        // here, we listen for touchend, explicitly pause the carousel
        // (as if it's the second time we tap on it, mouseenter compat event
        // is NOT fired) and after a timeout (to allow for mouse compatibility
        // events to fire) we explicitly restart cycling

        _this3.pause();
        if (_this3.touchTimeout) {
          clearTimeout(_this3.touchTimeout);
        }
        _this3.touchTimeout = setTimeout(function (event) {
          return _this3.cycle(event);
        }, TOUCHEVENT_COMPAT_WAIT + _this3._config.interval);
      }
    };

    __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this._element.querySelectorAll(Selector.ITEM_IMG)).on(Event.DRAG_START, function (e) {
      return e.preventDefault();
    });
    if (this._pointerEvent) {
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this._element).on(Event.POINTERDOWN, function (event) {
        return start(event);
      });
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this._element).on(Event.POINTERUP, function (event) {
        return end(event);
      });

      this._element.classList.add(ClassName.POINTER_EVENT);
    } else {
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this._element).on(Event.TOUCHSTART, function (event) {
        return start(event);
      });
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this._element).on(Event.TOUCHMOVE, function (event) {
        return move(event);
      });
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this._element).on(Event.TOUCHEND, function (event) {
        return end(event);
      });
    }
  };

  Carousel.prototype._keydown = function _keydown(event) {
    if (/input|textarea/i.test(event.target.tagName)) {
      return;
    }

    switch (event.which) {
      case ARROW_LEFT_KEYCODE:
        event.preventDefault();
        this.prev();
        break;
      case ARROW_RIGHT_KEYCODE:
        event.preventDefault();
        this.next();
        break;
      default:
    }
  };

  Carousel.prototype._getItemIndex = function _getItemIndex(element) {
    this._items = element && element.parentNode ? [].slice.call(element.parentNode.querySelectorAll(Selector.ITEM)) : [];
    return this._items.indexOf(element);
  };

  Carousel.prototype._getItemByDirection = function _getItemByDirection(direction, activeElement) {
    var isNextDirection = direction === Direction.NEXT;
    var isPrevDirection = direction === Direction.PREV;
    var activeIndex = this._getItemIndex(activeElement);
    var lastItemIndex = this._items.length - 1;
    var isGoingToWrap = isPrevDirection && activeIndex === 0 || isNextDirection && activeIndex === lastItemIndex;

    if (isGoingToWrap && !this._config.wrap) {
      return activeElement;
    }

    var delta = direction === Direction.PREV ? -1 : 1;
    var itemIndex = (activeIndex + delta) % this._items.length;

    return itemIndex === -1 ? this._items[this._items.length - 1] : this._items[itemIndex];
  };

  Carousel.prototype._triggerSlideEvent = function _triggerSlideEvent(relatedTarget, eventDirectionName) {
    var targetIndex = this._getItemIndex(relatedTarget);
    var fromIndex = this._getItemIndex(this._element.querySelector(Selector.ACTIVE_ITEM));
    var slideEvent = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.Event(Event.SLIDE, {
      relatedTarget: relatedTarget,
      direction: eventDirectionName,
      from: fromIndex,
      to: targetIndex
    });

    __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this._element).trigger(slideEvent);

    return slideEvent;
  };

  Carousel.prototype._setActiveIndicatorElement = function _setActiveIndicatorElement(element) {
    if (this._indicatorsElement) {
      var indicators = [].slice.call(this._indicatorsElement.querySelectorAll(Selector.ACTIVE));
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()(indicators).removeClass(ClassName.ACTIVE);

      var nextIndicator = this._indicatorsElement.children[this._getItemIndex(element)];

      if (nextIndicator) {
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(nextIndicator).addClass(ClassName.ACTIVE);
      }
    }
  };

  Carousel.prototype._slide = function _slide(direction, element) {
    var _this4 = this;

    var activeElement = this._element.querySelector(Selector.ACTIVE_ITEM);
    var activeElementIndex = this._getItemIndex(activeElement);
    var nextElement = element || activeElement && this._getItemByDirection(direction, activeElement);
    var nextElementIndex = this._getItemIndex(nextElement);
    var isCycling = Boolean(this._interval);

    var directionalClassName = void 0;
    var orderClassName = void 0;
    var eventDirectionName = void 0;

    if (direction === Direction.NEXT) {
      directionalClassName = ClassName.LEFT;
      orderClassName = ClassName.NEXT;
      eventDirectionName = Direction.LEFT;
    } else {
      directionalClassName = ClassName.RIGHT;
      orderClassName = ClassName.PREV;
      eventDirectionName = Direction.RIGHT;
    }

    if (nextElement && __WEBPACK_IMPORTED_MODULE_0_jquery___default()(nextElement).hasClass(ClassName.ACTIVE)) {
      this._isSliding = false;
      return;
    }

    var slideEvent = this._triggerSlideEvent(nextElement, eventDirectionName);
    if (slideEvent.isDefaultPrevented()) {
      return;
    }

    if (!activeElement || !nextElement) {
      // Some weirdness is happening, so we bail
      return;
    }

    this._isSliding = true;

    if (isCycling) {
      this.pause();
    }

    this._setActiveIndicatorElement(nextElement);

    var slidEvent = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.Event(Event.SLID, {
      relatedTarget: nextElement,
      direction: eventDirectionName,
      from: activeElementIndex,
      to: nextElementIndex
    });

    if (__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this._element).hasClass(ClassName.SLIDE)) {
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()(nextElement).addClass(orderClassName);

      __WEBPACK_IMPORTED_MODULE_1__util__["a" /* default */].reflow(nextElement);

      __WEBPACK_IMPORTED_MODULE_0_jquery___default()(activeElement).addClass(directionalClassName);
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()(nextElement).addClass(directionalClassName);

      var nextElementInterval = parseInt(nextElement.getAttribute('data-interval'), 10);
      if (nextElementInterval) {
        this._config.defaultInterval = this._config.defaultInterval || this._config.interval;
        this._config.interval = nextElementInterval;
      } else {
        this._config.interval = this._config.defaultInterval || this._config.interval;
      }

      var transitionDuration = __WEBPACK_IMPORTED_MODULE_1__util__["a" /* default */].getTransitionDurationFromElement(activeElement);

      __WEBPACK_IMPORTED_MODULE_0_jquery___default()(activeElement).one(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* default */].TRANSITION_END, function () {
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(nextElement).removeClass(directionalClassName + ' ' + orderClassName).addClass(ClassName.ACTIVE);

        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(activeElement).removeClass(ClassName.ACTIVE + ' ' + orderClassName + ' ' + directionalClassName);

        _this4._isSliding = false;

        setTimeout(function () {
          return __WEBPACK_IMPORTED_MODULE_0_jquery___default()(_this4._element).trigger(slidEvent);
        }, 0);
      }).emulateTransitionEnd(transitionDuration);
    } else {
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()(activeElement).removeClass(ClassName.ACTIVE);
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()(nextElement).addClass(ClassName.ACTIVE);

      this._isSliding = false;
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this._element).trigger(slidEvent);
    }

    if (isCycling) {
      this.cycle();
    }
  };

  // Static

  Carousel._jQueryInterface = function _jQueryInterface(config) {
    return this.each(function () {
      var data = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).data(DATA_KEY);
      var _config = _extends({}, Default, __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).data());

      if ((typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object') {
        _config = _extends({}, _config, config);
      }

      var action = typeof config === 'string' ? config : _config.slide;

      if (!data) {
        data = new Carousel(this, _config);
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).data(DATA_KEY, data);
      }

      if (typeof config === 'number') {
        data.to(config);
      } else if (typeof action === 'string') {
        if (typeof data[action] === 'undefined') {
          throw new TypeError('No method named "' + action + '"');
        }
        data[action]();
      } else if (_config.interval && _config.ride) {
        data.pause();
        data.cycle();
      }
    });
  };

  Carousel._dataApiClickHandler = function _dataApiClickHandler(event) {
    var selector = __WEBPACK_IMPORTED_MODULE_1__util__["a" /* default */].getSelectorFromElement(this);

    if (!selector) {
      return;
    }

    var target = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(selector)[0];

    if (!target || !__WEBPACK_IMPORTED_MODULE_0_jquery___default()(target).hasClass(ClassName.CAROUSEL)) {
      return;
    }

    var config = _extends({}, __WEBPACK_IMPORTED_MODULE_0_jquery___default()(target).data(), __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).data());
    var slideIndex = this.getAttribute('data-slide-to');

    if (slideIndex) {
      config.interval = false;
    }

    Carousel._jQueryInterface.call(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(target), config);

    if (slideIndex) {
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()(target).data(DATA_KEY).to(slideIndex);
    }

    event.preventDefault();
  };

  _createClass(Carousel, null, [{
    key: 'VERSION',
    get: function get() {
      return VERSION;
    }
  }, {
    key: 'Default',
    get: function get() {
      return Default;
    }
  }]);

  return Carousel;
}();

/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */

__WEBPACK_IMPORTED_MODULE_0_jquery___default()(document).on(Event.CLICK_DATA_API, Selector.DATA_SLIDE, Carousel._dataApiClickHandler);

__WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).on(Event.LOAD_DATA_API, function () {
  var carousels = [].slice.call(document.querySelectorAll(Selector.DATA_RIDE));
  for (var i = 0, len = carousels.length; i < len; i++) {
    var $carousel = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(carousels[i]);
    Carousel._jQueryInterface.call($carousel, $carousel.data());
  }
});

/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 */

__WEBPACK_IMPORTED_MODULE_0_jquery___default.a.fn[NAME] = Carousel._jQueryInterface;
__WEBPACK_IMPORTED_MODULE_0_jquery___default.a.fn[NAME].Constructor = Carousel;
__WEBPACK_IMPORTED_MODULE_0_jquery___default.a.fn[NAME].noConflict = function () {
  __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.fn[NAME] = JQUERY_NO_CONFLICT;
  return Carousel._jQueryInterface;
};

/* unused harmony default export */ var _unused_webpack_default_export = (Carousel);

/***/ }),

/***/ "./node_modules/bootstrap/js/src/collapse.js":
/*!***************************************************!*\
  !*** ./node_modules/bootstrap/js/src/collapse.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(/*! ./util */ "./node_modules/bootstrap/js/src/util.js");
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.3.1): collapse.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */




/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var NAME = 'collapse';
var VERSION = '4.3.1';
var DATA_KEY = 'bs.collapse';
var EVENT_KEY = '.' + DATA_KEY;
var DATA_API_KEY = '.data-api';
var JQUERY_NO_CONFLICT = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.fn[NAME];

var Default = {
  toggle: true,
  parent: ''
};

var DefaultType = {
  toggle: 'boolean',
  parent: '(string|element)'
};

var Event = {
  SHOW: 'show' + EVENT_KEY,
  SHOWN: 'shown' + EVENT_KEY,
  HIDE: 'hide' + EVENT_KEY,
  HIDDEN: 'hidden' + EVENT_KEY,
  CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY
};

var ClassName = {
  SHOW: 'show',
  COLLAPSE: 'collapse',
  COLLAPSING: 'collapsing',
  COLLAPSED: 'collapsed'
};

var Dimension = {
  WIDTH: 'width',
  HEIGHT: 'height'
};

var Selector = {
  ACTIVES: '.show, .collapsing',
  DATA_TOGGLE: '[data-toggle="collapse"]'

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

};
var Collapse = function () {
  function Collapse(element, config) {
    _classCallCheck(this, Collapse);

    this._isTransitioning = false;
    this._element = element;
    this._config = this._getConfig(config);
    this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + element.id + '"],' + ('[data-toggle="collapse"][data-target="#' + element.id + '"]')));

    var toggleList = [].slice.call(document.querySelectorAll(Selector.DATA_TOGGLE));
    for (var i = 0, len = toggleList.length; i < len; i++) {
      var elem = toggleList[i];
      var selector = __WEBPACK_IMPORTED_MODULE_1__util__["a" /* default */].getSelectorFromElement(elem);
      var filterElement = [].slice.call(document.querySelectorAll(selector)).filter(function (foundElem) {
        return foundElem === element;
      });

      if (selector !== null && filterElement.length > 0) {
        this._selector = selector;
        this._triggerArray.push(elem);
      }
    }

    this._parent = this._config.parent ? this._getParent() : null;

    if (!this._config.parent) {
      this._addAriaAndCollapsedClass(this._element, this._triggerArray);
    }

    if (this._config.toggle) {
      this.toggle();
    }
  }

  // Getters

  // Public

  Collapse.prototype.toggle = function toggle() {
    if (__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this._element).hasClass(ClassName.SHOW)) {
      this.hide();
    } else {
      this.show();
    }
  };

  Collapse.prototype.show = function show() {
    var _this = this;

    if (this._isTransitioning || __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this._element).hasClass(ClassName.SHOW)) {
      return;
    }

    var actives = void 0;
    var activesData = void 0;

    if (this._parent) {
      actives = [].slice.call(this._parent.querySelectorAll(Selector.ACTIVES)).filter(function (elem) {
        if (typeof _this._config.parent === 'string') {
          return elem.getAttribute('data-parent') === _this._config.parent;
        }

        return elem.classList.contains(ClassName.COLLAPSE);
      });

      if (actives.length === 0) {
        actives = null;
      }
    }

    if (actives) {
      activesData = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(actives).not(this._selector).data(DATA_KEY);
      if (activesData && activesData._isTransitioning) {
        return;
      }
    }

    var startEvent = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.Event(Event.SHOW);
    __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this._element).trigger(startEvent);
    if (startEvent.isDefaultPrevented()) {
      return;
    }

    if (actives) {
      Collapse._jQueryInterface.call(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(actives).not(this._selector), 'hide');
      if (!activesData) {
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(actives).data(DATA_KEY, null);
      }
    }

    var dimension = this._getDimension();

    __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this._element).removeClass(ClassName.COLLAPSE).addClass(ClassName.COLLAPSING);

    this._element.style[dimension] = 0;

    if (this._triggerArray.length) {
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this._triggerArray).removeClass(ClassName.COLLAPSED).attr('aria-expanded', true);
    }

    this.setTransitioning(true);

    var complete = function complete() {
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()(_this._element).removeClass(ClassName.COLLAPSING).addClass(ClassName.COLLAPSE).addClass(ClassName.SHOW);

      _this._element.style[dimension] = '';

      _this.setTransitioning(false);

      __WEBPACK_IMPORTED_MODULE_0_jquery___default()(_this._element).trigger(Event.SHOWN);
    };

    var capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
    var scrollSize = 'scroll' + capitalizedDimension;
    var transitionDuration = __WEBPACK_IMPORTED_MODULE_1__util__["a" /* default */].getTransitionDurationFromElement(this._element);

    __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this._element).one(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* default */].TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);

    this._element.style[dimension] = this._element[scrollSize] + 'px';
  };

  Collapse.prototype.hide = function hide() {
    var _this2 = this;

    if (this._isTransitioning || !__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this._element).hasClass(ClassName.SHOW)) {
      return;
    }

    var startEvent = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.Event(Event.HIDE);
    __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this._element).trigger(startEvent);
    if (startEvent.isDefaultPrevented()) {
      return;
    }

    var dimension = this._getDimension();

    this._element.style[dimension] = this._element.getBoundingClientRect()[dimension] + 'px';

    __WEBPACK_IMPORTED_MODULE_1__util__["a" /* default */].reflow(this._element);

    __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this._element).addClass(ClassName.COLLAPSING).removeClass(ClassName.COLLAPSE).removeClass(ClassName.SHOW);

    var triggerArrayLength = this._triggerArray.length;
    if (triggerArrayLength > 0) {
      for (var i = 0; i < triggerArrayLength; i++) {
        var trigger = this._triggerArray[i];
        var selector = __WEBPACK_IMPORTED_MODULE_1__util__["a" /* default */].getSelectorFromElement(trigger);

        if (selector !== null) {
          var $elem = __WEBPACK_IMPORTED_MODULE_0_jquery___default()([].slice.call(document.querySelectorAll(selector)));
          if (!$elem.hasClass(ClassName.SHOW)) {
            __WEBPACK_IMPORTED_MODULE_0_jquery___default()(trigger).addClass(ClassName.COLLAPSED).attr('aria-expanded', false);
          }
        }
      }
    }

    this.setTransitioning(true);

    var complete = function complete() {
      _this2.setTransitioning(false);
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()(_this2._element).removeClass(ClassName.COLLAPSING).addClass(ClassName.COLLAPSE).trigger(Event.HIDDEN);
    };

    this._element.style[dimension] = '';
    var transitionDuration = __WEBPACK_IMPORTED_MODULE_1__util__["a" /* default */].getTransitionDurationFromElement(this._element);

    __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this._element).one(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* default */].TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
  };

  Collapse.prototype.setTransitioning = function setTransitioning(isTransitioning) {
    this._isTransitioning = isTransitioning;
  };

  Collapse.prototype.dispose = function dispose() {
    __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.removeData(this._element, DATA_KEY);

    this._config = null;
    this._parent = null;
    this._element = null;
    this._triggerArray = null;
    this._isTransitioning = null;
  };

  // Private

  Collapse.prototype._getConfig = function _getConfig(config) {
    config = _extends({}, Default, config);
    config.toggle = Boolean(config.toggle); // Coerce string values
    __WEBPACK_IMPORTED_MODULE_1__util__["a" /* default */].typeCheckConfig(NAME, config, DefaultType);
    return config;
  };

  Collapse.prototype._getDimension = function _getDimension() {
    var hasWidth = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this._element).hasClass(Dimension.WIDTH);
    return hasWidth ? Dimension.WIDTH : Dimension.HEIGHT;
  };

  Collapse.prototype._getParent = function _getParent() {
    var _this3 = this;

    var parent = void 0;

    if (__WEBPACK_IMPORTED_MODULE_1__util__["a" /* default */].isElement(this._config.parent)) {
      parent = this._config.parent;

      // It's a jQuery object
      if (typeof this._config.parent.jquery !== 'undefined') {
        parent = this._config.parent[0];
      }
    } else {
      parent = document.querySelector(this._config.parent);
    }

    var selector = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';

    var children = [].slice.call(parent.querySelectorAll(selector));
    __WEBPACK_IMPORTED_MODULE_0_jquery___default()(children).each(function (i, element) {
      _this3._addAriaAndCollapsedClass(Collapse._getTargetFromElement(element), [element]);
    });

    return parent;
  };

  Collapse.prototype._addAriaAndCollapsedClass = function _addAriaAndCollapsedClass(element, triggerArray) {
    var isOpen = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(element).hasClass(ClassName.SHOW);

    if (triggerArray.length) {
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()(triggerArray).toggleClass(ClassName.COLLAPSED, !isOpen).attr('aria-expanded', isOpen);
    }
  };

  // Static

  Collapse._getTargetFromElement = function _getTargetFromElement(element) {
    var selector = __WEBPACK_IMPORTED_MODULE_1__util__["a" /* default */].getSelectorFromElement(element);
    return selector ? document.querySelector(selector) : null;
  };

  Collapse._jQueryInterface = function _jQueryInterface(config) {
    return this.each(function () {
      var $this = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this);
      var data = $this.data(DATA_KEY);
      var _config = _extends({}, Default, $this.data(), (typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object' && config ? config : {});

      if (!data && _config.toggle && /show|hide/.test(config)) {
        _config.toggle = false;
      }

      if (!data) {
        data = new Collapse(this, _config);
        $this.data(DATA_KEY, data);
      }

      if (typeof config === 'string') {
        if (typeof data[config] === 'undefined') {
          throw new TypeError('No method named "' + config + '"');
        }
        data[config]();
      }
    });
  };

  _createClass(Collapse, null, [{
    key: 'VERSION',
    get: function get() {
      return VERSION;
    }
  }, {
    key: 'Default',
    get: function get() {
      return Default;
    }
  }]);

  return Collapse;
}();

/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */

__WEBPACK_IMPORTED_MODULE_0_jquery___default()(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
  // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
  if (event.currentTarget.tagName === 'A') {
    event.preventDefault();
  }

  var $trigger = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this);
  var selector = __WEBPACK_IMPORTED_MODULE_1__util__["a" /* default */].getSelectorFromElement(this);
  var selectors = [].slice.call(document.querySelectorAll(selector));

  __WEBPACK_IMPORTED_MODULE_0_jquery___default()(selectors).each(function () {
    var $target = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this);
    var data = $target.data(DATA_KEY);
    var config = data ? 'toggle' : $trigger.data();
    Collapse._jQueryInterface.call($target, config);
  });
});

/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 */

__WEBPACK_IMPORTED_MODULE_0_jquery___default.a.fn[NAME] = Collapse._jQueryInterface;
__WEBPACK_IMPORTED_MODULE_0_jquery___default.a.fn[NAME].Constructor = Collapse;
__WEBPACK_IMPORTED_MODULE_0_jquery___default.a.fn[NAME].noConflict = function () {
  __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.fn[NAME] = JQUERY_NO_CONFLICT;
  return Collapse._jQueryInterface;
};

/* unused harmony default export */ var _unused_webpack_default_export = (Collapse);

/***/ }),

/***/ "./node_modules/bootstrap/js/src/modal.js":
/*!************************************************!*\
  !*** ./node_modules/bootstrap/js/src/modal.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(/*! ./util */ "./node_modules/bootstrap/js/src/util.js");
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.3.1): modal.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */




/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var NAME = 'modal';
var VERSION = '4.3.1';
var DATA_KEY = 'bs.modal';
var EVENT_KEY = '.' + DATA_KEY;
var DATA_API_KEY = '.data-api';
var JQUERY_NO_CONFLICT = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.fn[NAME];
var ESCAPE_KEYCODE = 27; // KeyboardEvent.which value for Escape (Esc) key

var Default = {
  backdrop: true,
  keyboard: true,
  focus: true,
  show: true
};

var DefaultType = {
  backdrop: '(boolean|string)',
  keyboard: 'boolean',
  focus: 'boolean',
  show: 'boolean'
};

var Event = {
  HIDE: 'hide' + EVENT_KEY,
  HIDDEN: 'hidden' + EVENT_KEY,
  SHOW: 'show' + EVENT_KEY,
  SHOWN: 'shown' + EVENT_KEY,
  FOCUSIN: 'focusin' + EVENT_KEY,
  RESIZE: 'resize' + EVENT_KEY,
  CLICK_DISMISS: 'click.dismiss' + EVENT_KEY,
  KEYDOWN_DISMISS: 'keydown.dismiss' + EVENT_KEY,
  MOUSEUP_DISMISS: 'mouseup.dismiss' + EVENT_KEY,
  MOUSEDOWN_DISMISS: 'mousedown.dismiss' + EVENT_KEY,
  CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY
};

var ClassName = {
  SCROLLABLE: 'modal-dialog-scrollable',
  SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
  BACKDROP: 'modal-backdrop',
  OPEN: 'modal-open',
  FADE: 'fade',
  SHOW: 'show'
};

var Selector = {
  DIALOG: '.modal-dialog',
  MODAL_BODY: '.modal-body',
  DATA_TOGGLE: '[data-toggle="modal"]',
  DATA_DISMISS: '[data-dismiss="modal"]',
  FIXED_CONTENT: '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
  STICKY_CONTENT: '.sticky-top'

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

};
var Modal = function () {
  function Modal(element, config) {
    _classCallCheck(this, Modal);

    this._config = this._getConfig(config);
    this._element = element;
    this._dialog = element.querySelector(Selector.DIALOG);
    this._backdrop = null;
    this._isShown = false;
    this._isBodyOverflowing = false;
    this._ignoreBackdropClick = false;
    this._isTransitioning = false;
    this._scrollbarWidth = 0;
  }

  // Getters

  // Public

  Modal.prototype.toggle = function toggle(relatedTarget) {
    return this._isShown ? this.hide() : this.show(relatedTarget);
  };

  Modal.prototype.show = function show(relatedTarget) {
    var _this = this;

    if (this._isShown || this._isTransitioning) {
      return;
    }

    if (__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this._element).hasClass(ClassName.FADE)) {
      this._isTransitioning = true;
    }

    var showEvent = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.Event(Event.SHOW, {
      relatedTarget: relatedTarget
    });

    __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this._element).trigger(showEvent);

    if (this._isShown || showEvent.isDefaultPrevented()) {
      return;
    }

    this._isShown = true;

    this._checkScrollbar();
    this._setScrollbar();

    this._adjustDialog();

    this._setEscapeEvent();
    this._setResizeEvent();

    __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this._element).on(Event.CLICK_DISMISS, Selector.DATA_DISMISS, function (event) {
      return _this.hide(event);
    });

    __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this._dialog).on(Event.MOUSEDOWN_DISMISS, function () {
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()(_this._element).one(Event.MOUSEUP_DISMISS, function (event) {
        if (__WEBPACK_IMPORTED_MODULE_0_jquery___default()(event.target).is(_this._element)) {
          _this._ignoreBackdropClick = true;
        }
      });
    });

    this._showBackdrop(function () {
      return _this._showElement(relatedTarget);
    });
  };

  Modal.prototype.hide = function hide(event) {
    var _this2 = this;

    if (event) {
      event.preventDefault();
    }

    if (!this._isShown || this._isTransitioning) {
      return;
    }

    var hideEvent = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.Event(Event.HIDE);

    __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this._element).trigger(hideEvent);

    if (!this._isShown || hideEvent.isDefaultPrevented()) {
      return;
    }

    this._isShown = false;
    var transition = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this._element).hasClass(ClassName.FADE);

    if (transition) {
      this._isTransitioning = true;
    }

    this._setEscapeEvent();
    this._setResizeEvent();

    __WEBPACK_IMPORTED_MODULE_0_jquery___default()(document).off(Event.FOCUSIN);

    __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this._element).removeClass(ClassName.SHOW);

    __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this._element).off(Event.CLICK_DISMISS);
    __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this._dialog).off(Event.MOUSEDOWN_DISMISS);

    if (transition) {
      var transitionDuration = __WEBPACK_IMPORTED_MODULE_1__util__["a" /* default */].getTransitionDurationFromElement(this._element);

      __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this._element).one(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* default */].TRANSITION_END, function (event) {
        return _this2._hideModal(event);
      }).emulateTransitionEnd(transitionDuration);
    } else {
      this._hideModal();
    }
  };

  Modal.prototype.dispose = function dispose() {
    [window, this._element, this._dialog].forEach(function (htmlElement) {
      return __WEBPACK_IMPORTED_MODULE_0_jquery___default()(htmlElement).off(EVENT_KEY);
    });

    /**
     * `document` has 2 events `Event.FOCUSIN` and `Event.CLICK_DATA_API`
     * Do not move `document` in `htmlElements` array
     * It will remove `Event.CLICK_DATA_API` event that should remain
     */
    __WEBPACK_IMPORTED_MODULE_0_jquery___default()(document).off(Event.FOCUSIN);

    __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.removeData(this._element, DATA_KEY);

    this._config = null;
    this._element = null;
    this._dialog = null;
    this._backdrop = null;
    this._isShown = null;
    this._isBodyOverflowing = null;
    this._ignoreBackdropClick = null;
    this._isTransitioning = null;
    this._scrollbarWidth = null;
  };

  Modal.prototype.handleUpdate = function handleUpdate() {
    this._adjustDialog();
  };

  // Private

  Modal.prototype._getConfig = function _getConfig(config) {
    config = _extends({}, Default, config);
    __WEBPACK_IMPORTED_MODULE_1__util__["a" /* default */].typeCheckConfig(NAME, config, DefaultType);
    return config;
  };

  Modal.prototype._showElement = function _showElement(relatedTarget) {
    var _this3 = this;

    var transition = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this._element).hasClass(ClassName.FADE);

    if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
      // Don't move modal's DOM position
      document.body.appendChild(this._element);
    }

    this._element.style.display = 'block';
    this._element.removeAttribute('aria-hidden');
    this._element.setAttribute('aria-modal', true);

    if (__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this._dialog).hasClass(ClassName.SCROLLABLE)) {
      this._dialog.querySelector(Selector.MODAL_BODY).scrollTop = 0;
    } else {
      this._element.scrollTop = 0;
    }

    if (transition) {
      __WEBPACK_IMPORTED_MODULE_1__util__["a" /* default */].reflow(this._element);
    }

    __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this._element).addClass(ClassName.SHOW);

    if (this._config.focus) {
      this._enforceFocus();
    }

    var shownEvent = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.Event(Event.SHOWN, {
      relatedTarget: relatedTarget
    });

    var transitionComplete = function transitionComplete() {
      if (_this3._config.focus) {
        _this3._element.focus();
      }
      _this3._isTransitioning = false;
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()(_this3._element).trigger(shownEvent);
    };

    if (transition) {
      var transitionDuration = __WEBPACK_IMPORTED_MODULE_1__util__["a" /* default */].getTransitionDurationFromElement(this._dialog);

      __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this._dialog).one(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* default */].TRANSITION_END, transitionComplete).emulateTransitionEnd(transitionDuration);
    } else {
      transitionComplete();
    }
  };

  Modal.prototype._enforceFocus = function _enforceFocus() {
    var _this4 = this;

    __WEBPACK_IMPORTED_MODULE_0_jquery___default()(document).off(Event.FOCUSIN) // Guard against infinite focus loop
    .on(Event.FOCUSIN, function (event) {
      if (document !== event.target && _this4._element !== event.target && __WEBPACK_IMPORTED_MODULE_0_jquery___default()(_this4._element).has(event.target).length === 0) {
        _this4._element.focus();
      }
    });
  };

  Modal.prototype._setEscapeEvent = function _setEscapeEvent() {
    var _this5 = this;

    if (this._isShown && this._config.keyboard) {
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this._element).on(Event.KEYDOWN_DISMISS, function (event) {
        if (event.which === ESCAPE_KEYCODE) {
          event.preventDefault();
          _this5.hide();
        }
      });
    } else if (!this._isShown) {
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this._element).off(Event.KEYDOWN_DISMISS);
    }
  };

  Modal.prototype._setResizeEvent = function _setResizeEvent() {
    var _this6 = this;

    if (this._isShown) {
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).on(Event.RESIZE, function (event) {
        return _this6.handleUpdate(event);
      });
    } else {
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).off(Event.RESIZE);
    }
  };

  Modal.prototype._hideModal = function _hideModal() {
    var _this7 = this;

    this._element.style.display = 'none';
    this._element.setAttribute('aria-hidden', true);
    this._element.removeAttribute('aria-modal');
    this._isTransitioning = false;
    this._showBackdrop(function () {
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()(document.body).removeClass(ClassName.OPEN);
      _this7._resetAdjustments();
      _this7._resetScrollbar();
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()(_this7._element).trigger(Event.HIDDEN);
    });
  };

  Modal.prototype._removeBackdrop = function _removeBackdrop() {
    if (this._backdrop) {
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this._backdrop).remove();
      this._backdrop = null;
    }
  };

  Modal.prototype._showBackdrop = function _showBackdrop(callback) {
    var _this8 = this;

    var animate = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this._element).hasClass(ClassName.FADE) ? ClassName.FADE : '';

    if (this._isShown && this._config.backdrop) {
      this._backdrop = document.createElement('div');
      this._backdrop.className = ClassName.BACKDROP;

      if (animate) {
        this._backdrop.classList.add(animate);
      }

      __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this._backdrop).appendTo(document.body);

      __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this._element).on(Event.CLICK_DISMISS, function (event) {
        if (_this8._ignoreBackdropClick) {
          _this8._ignoreBackdropClick = false;
          return;
        }
        if (event.target !== event.currentTarget) {
          return;
        }
        if (_this8._config.backdrop === 'static') {
          _this8._element.focus();
        } else {
          _this8.hide();
        }
      });

      if (animate) {
        __WEBPACK_IMPORTED_MODULE_1__util__["a" /* default */].reflow(this._backdrop);
      }

      __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this._backdrop).addClass(ClassName.SHOW);

      if (!callback) {
        return;
      }

      if (!animate) {
        callback();
        return;
      }

      var backdropTransitionDuration = __WEBPACK_IMPORTED_MODULE_1__util__["a" /* default */].getTransitionDurationFromElement(this._backdrop);

      __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this._backdrop).one(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* default */].TRANSITION_END, callback).emulateTransitionEnd(backdropTransitionDuration);
    } else if (!this._isShown && this._backdrop) {
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this._backdrop).removeClass(ClassName.SHOW);

      var callbackRemove = function callbackRemove() {
        _this8._removeBackdrop();
        if (callback) {
          callback();
        }
      };

      if (__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this._element).hasClass(ClassName.FADE)) {
        var _backdropTransitionDuration = __WEBPACK_IMPORTED_MODULE_1__util__["a" /* default */].getTransitionDurationFromElement(this._backdrop);

        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this._backdrop).one(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* default */].TRANSITION_END, callbackRemove).emulateTransitionEnd(_backdropTransitionDuration);
      } else {
        callbackRemove();
      }
    } else if (callback) {
      callback();
    }
  };

  // ----------------------------------------------------------------------
  // the following methods are used to handle overflowing modals
  // todo (fat): these should probably be refactored out of modal.js
  // ----------------------------------------------------------------------

  Modal.prototype._adjustDialog = function _adjustDialog() {
    var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

    if (!this._isBodyOverflowing && isModalOverflowing) {
      this._element.style.paddingLeft = this._scrollbarWidth + 'px';
    }

    if (this._isBodyOverflowing && !isModalOverflowing) {
      this._element.style.paddingRight = this._scrollbarWidth + 'px';
    }
  };

  Modal.prototype._resetAdjustments = function _resetAdjustments() {
    this._element.style.paddingLeft = '';
    this._element.style.paddingRight = '';
  };

  Modal.prototype._checkScrollbar = function _checkScrollbar() {
    var rect = document.body.getBoundingClientRect();
    this._isBodyOverflowing = rect.left + rect.right < window.innerWidth;
    this._scrollbarWidth = this._getScrollbarWidth();
  };

  Modal.prototype._setScrollbar = function _setScrollbar() {
    var _this9 = this;

    if (this._isBodyOverflowing) {
      // Note: DOMNode.style.paddingRight returns the actual value or '' if not set
      //   while $(DOMNode).css('padding-right') returns the calculated value or 0 if not set
      var fixedContent = [].slice.call(document.querySelectorAll(Selector.FIXED_CONTENT));
      var stickyContent = [].slice.call(document.querySelectorAll(Selector.STICKY_CONTENT));

      // Adjust fixed content padding
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()(fixedContent).each(function (index, element) {
        var actualPadding = element.style.paddingRight;
        var calculatedPadding = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(element).css('padding-right');
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(element).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + _this9._scrollbarWidth + 'px');
      });

      // Adjust sticky content margin
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()(stickyContent).each(function (index, element) {
        var actualMargin = element.style.marginRight;
        var calculatedMargin = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(element).css('margin-right');
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(element).data('margin-right', actualMargin).css('margin-right', parseFloat(calculatedMargin) - _this9._scrollbarWidth + 'px');
      });

      // Adjust body padding
      var actualPadding = document.body.style.paddingRight;
      var calculatedPadding = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(document.body).css('padding-right');
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()(document.body).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + this._scrollbarWidth + 'px');
    }

    __WEBPACK_IMPORTED_MODULE_0_jquery___default()(document.body).addClass(ClassName.OPEN);
  };

  Modal.prototype._resetScrollbar = function _resetScrollbar() {
    // Restore fixed content padding
    var fixedContent = [].slice.call(document.querySelectorAll(Selector.FIXED_CONTENT));
    __WEBPACK_IMPORTED_MODULE_0_jquery___default()(fixedContent).each(function (index, element) {
      var padding = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(element).data('padding-right');
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()(element).removeData('padding-right');
      element.style.paddingRight = padding ? padding : '';
    });

    // Restore sticky content
    var elements = [].slice.call(document.querySelectorAll('' + Selector.STICKY_CONTENT));
    __WEBPACK_IMPORTED_MODULE_0_jquery___default()(elements).each(function (index, element) {
      var margin = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(element).data('margin-right');
      if (typeof margin !== 'undefined') {
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(element).css('margin-right', margin).removeData('margin-right');
      }
    });

    // Restore body padding
    var padding = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(document.body).data('padding-right');
    __WEBPACK_IMPORTED_MODULE_0_jquery___default()(document.body).removeData('padding-right');
    document.body.style.paddingRight = padding ? padding : '';
  };

  Modal.prototype._getScrollbarWidth = function _getScrollbarWidth() {
    // thx d.walsh
    var scrollDiv = document.createElement('div');
    scrollDiv.className = ClassName.SCROLLBAR_MEASURER;
    document.body.appendChild(scrollDiv);
    var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);
    return scrollbarWidth;
  };

  // Static

  Modal._jQueryInterface = function _jQueryInterface(config, relatedTarget) {
    return this.each(function () {
      var data = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).data(DATA_KEY);
      var _config = _extends({}, Default, __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).data(), (typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object' && config ? config : {});

      if (!data) {
        data = new Modal(this, _config);
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).data(DATA_KEY, data);
      }

      if (typeof config === 'string') {
        if (typeof data[config] === 'undefined') {
          throw new TypeError('No method named "' + config + '"');
        }
        data[config](relatedTarget);
      } else if (_config.show) {
        data.show(relatedTarget);
      }
    });
  };

  _createClass(Modal, null, [{
    key: 'VERSION',
    get: function get() {
      return VERSION;
    }
  }, {
    key: 'Default',
    get: function get() {
      return Default;
    }
  }]);

  return Modal;
}();

/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */

__WEBPACK_IMPORTED_MODULE_0_jquery___default()(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
  var _this10 = this;

  var target = void 0;
  var selector = __WEBPACK_IMPORTED_MODULE_1__util__["a" /* default */].getSelectorFromElement(this);

  if (selector) {
    target = document.querySelector(selector);
  }

  var config = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(target).data(DATA_KEY) ? 'toggle' : _extends({}, __WEBPACK_IMPORTED_MODULE_0_jquery___default()(target).data(), __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).data());

  if (this.tagName === 'A' || this.tagName === 'AREA') {
    event.preventDefault();
  }

  var $target = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(target).one(Event.SHOW, function (showEvent) {
    if (showEvent.isDefaultPrevented()) {
      // Only register focus restorer if modal will actually get shown
      return;
    }

    $target.one(Event.HIDDEN, function () {
      if (__WEBPACK_IMPORTED_MODULE_0_jquery___default()(_this10).is(':visible')) {
        _this10.focus();
      }
    });
  });

  Modal._jQueryInterface.call(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(target), config, this);
});

/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 */

__WEBPACK_IMPORTED_MODULE_0_jquery___default.a.fn[NAME] = Modal._jQueryInterface;
__WEBPACK_IMPORTED_MODULE_0_jquery___default.a.fn[NAME].Constructor = Modal;
__WEBPACK_IMPORTED_MODULE_0_jquery___default.a.fn[NAME].noConflict = function () {
  __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.fn[NAME] = JQUERY_NO_CONFLICT;
  return Modal._jQueryInterface;
};

/* unused harmony default export */ var _unused_webpack_default_export = (Modal);

/***/ }),

/***/ "./node_modules/bootstrap/js/src/popover.js":
/*!**************************************************!*\
  !*** ./node_modules/bootstrap/js/src/popover.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tooltip__ = __webpack_require__(/*! ./tooltip */ "./node_modules/bootstrap/js/src/tooltip.js");
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.3.1): popover.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */




/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var NAME = 'popover';
var VERSION = '4.3.1';
var DATA_KEY = 'bs.popover';
var EVENT_KEY = '.' + DATA_KEY;
var JQUERY_NO_CONFLICT = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.fn[NAME];
var CLASS_PREFIX = 'bs-popover';
var BSCLS_PREFIX_REGEX = new RegExp('(^|\\s)' + CLASS_PREFIX + '\\S+', 'g');

var Default = _extends({}, __WEBPACK_IMPORTED_MODULE_1__tooltip__["a" /* default */].Default, {
  placement: 'right',
  trigger: 'click',
  content: '',
  template: '<div class="popover" role="tooltip">' + '<div class="arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div></div>'
});

var DefaultType = _extends({}, __WEBPACK_IMPORTED_MODULE_1__tooltip__["a" /* default */].DefaultType, {
  content: '(string|element|function)'
});

var ClassName = {
  FADE: 'fade',
  SHOW: 'show'
};

var Selector = {
  TITLE: '.popover-header',
  CONTENT: '.popover-body'
};

var Event = {
  HIDE: 'hide' + EVENT_KEY,
  HIDDEN: 'hidden' + EVENT_KEY,
  SHOW: 'show' + EVENT_KEY,
  SHOWN: 'shown' + EVENT_KEY,
  INSERTED: 'inserted' + EVENT_KEY,
  CLICK: 'click' + EVENT_KEY,
  FOCUSIN: 'focusin' + EVENT_KEY,
  FOCUSOUT: 'focusout' + EVENT_KEY,
  MOUSEENTER: 'mouseenter' + EVENT_KEY,
  MOUSELEAVE: 'mouseleave' + EVENT_KEY

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

};
var Popover = function (_Tooltip) {
  _inherits(Popover, _Tooltip);

  function Popover() {
    _classCallCheck(this, Popover);

    return _possibleConstructorReturn(this, _Tooltip.apply(this, arguments));
  }

  // Overrides

  Popover.prototype.isWithContent = function isWithContent() {
    return this.getTitle() || this._getContent();
  };

  Popover.prototype.addAttachmentClass = function addAttachmentClass(attachment) {
    __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this.getTipElement()).addClass(CLASS_PREFIX + '-' + attachment);
  };

  Popover.prototype.getTipElement = function getTipElement() {
    this.tip = this.tip || __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this.config.template)[0];
    return this.tip;
  };

  Popover.prototype.setContent = function setContent() {
    var $tip = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this.getTipElement());

    // We use append for html objects to maintain js events
    this.setElementContent($tip.find(Selector.TITLE), this.getTitle());
    var content = this._getContent();
    if (typeof content === 'function') {
      content = content.call(this.element);
    }
    this.setElementContent($tip.find(Selector.CONTENT), content);

    $tip.removeClass(ClassName.FADE + ' ' + ClassName.SHOW);
  };

  // Private

  Popover.prototype._getContent = function _getContent() {
    return this.element.getAttribute('data-content') || this.config.content;
  };

  Popover.prototype._cleanTipClass = function _cleanTipClass() {
    var $tip = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this.getTipElement());
    var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX);
    if (tabClass !== null && tabClass.length > 0) {
      $tip.removeClass(tabClass.join(''));
    }
  };

  // Static

  Popover._jQueryInterface = function _jQueryInterface(config) {
    return this.each(function () {
      var data = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).data(DATA_KEY);
      var _config = (typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object' ? config : null;

      if (!data && /dispose|hide/.test(config)) {
        return;
      }

      if (!data) {
        data = new Popover(this, _config);
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).data(DATA_KEY, data);
      }

      if (typeof config === 'string') {
        if (typeof data[config] === 'undefined') {
          throw new TypeError('No method named "' + config + '"');
        }
        data[config]();
      }
    });
  };

  _createClass(Popover, null, [{
    key: 'VERSION',

    // Getters

    get: function get() {
      return VERSION;
    }
  }, {
    key: 'Default',
    get: function get() {
      return Default;
    }
  }, {
    key: 'NAME',
    get: function get() {
      return NAME;
    }
  }, {
    key: 'DATA_KEY',
    get: function get() {
      return DATA_KEY;
    }
  }, {
    key: 'Event',
    get: function get() {
      return Event;
    }
  }, {
    key: 'EVENT_KEY',
    get: function get() {
      return EVENT_KEY;
    }
  }, {
    key: 'DefaultType',
    get: function get() {
      return DefaultType;
    }
  }]);

  return Popover;
}(__WEBPACK_IMPORTED_MODULE_1__tooltip__["a" /* default */]);

/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 */

__WEBPACK_IMPORTED_MODULE_0_jquery___default.a.fn[NAME] = Popover._jQueryInterface;
__WEBPACK_IMPORTED_MODULE_0_jquery___default.a.fn[NAME].Constructor = Popover;
__WEBPACK_IMPORTED_MODULE_0_jquery___default.a.fn[NAME].noConflict = function () {
  __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.fn[NAME] = JQUERY_NO_CONFLICT;
  return Popover._jQueryInterface;
};

/* unused harmony default export */ var _unused_webpack_default_export = (Popover);

/***/ }),

/***/ "./node_modules/bootstrap/js/src/scrollspy.js":
/*!****************************************************!*\
  !*** ./node_modules/bootstrap/js/src/scrollspy.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(/*! ./util */ "./node_modules/bootstrap/js/src/util.js");
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.3.1): scrollspy.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */




/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var NAME = 'scrollspy';
var VERSION = '4.3.1';
var DATA_KEY = 'bs.scrollspy';
var EVENT_KEY = '.' + DATA_KEY;
var DATA_API_KEY = '.data-api';
var JQUERY_NO_CONFLICT = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.fn[NAME];

var Default = {
  offset: 10,
  method: 'auto',
  target: ''
};

var DefaultType = {
  offset: 'number',
  method: 'string',
  target: '(string|element)'
};

var Event = {
  ACTIVATE: 'activate' + EVENT_KEY,
  SCROLL: 'scroll' + EVENT_KEY,
  LOAD_DATA_API: 'load' + EVENT_KEY + DATA_API_KEY
};

var ClassName = {
  DROPDOWN_ITEM: 'dropdown-item',
  DROPDOWN_MENU: 'dropdown-menu',
  ACTIVE: 'active'
};

var Selector = {
  DATA_SPY: '[data-spy="scroll"]',
  ACTIVE: '.active',
  NAV_LIST_GROUP: '.nav, .list-group',
  NAV_LINKS: '.nav-link',
  NAV_ITEMS: '.nav-item',
  LIST_ITEMS: '.list-group-item',
  DROPDOWN: '.dropdown',
  DROPDOWN_ITEMS: '.dropdown-item',
  DROPDOWN_TOGGLE: '.dropdown-toggle'
};

var OffsetMethod = {
  OFFSET: 'offset',
  POSITION: 'position'

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

};
var ScrollSpy = function () {
  function ScrollSpy(element, config) {
    var _this = this;

    _classCallCheck(this, ScrollSpy);

    this._element = element;
    this._scrollElement = element.tagName === 'BODY' ? window : element;
    this._config = this._getConfig(config);
    this._selector = this._config.target + ' ' + Selector.NAV_LINKS + ',' + (this._config.target + ' ' + Selector.LIST_ITEMS + ',') + (this._config.target + ' ' + Selector.DROPDOWN_ITEMS);
    this._offsets = [];
    this._targets = [];
    this._activeTarget = null;
    this._scrollHeight = 0;

    __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this._scrollElement).on(Event.SCROLL, function (event) {
      return _this._process(event);
    });

    this.refresh();
    this._process();
  }

  // Getters

  // Public

  ScrollSpy.prototype.refresh = function refresh() {
    var _this2 = this;

    var autoMethod = this._scrollElement === this._scrollElement.window ? OffsetMethod.OFFSET : OffsetMethod.POSITION;

    var offsetMethod = this._config.method === 'auto' ? autoMethod : this._config.method;

    var offsetBase = offsetMethod === OffsetMethod.POSITION ? this._getScrollTop() : 0;

    this._offsets = [];
    this._targets = [];

    this._scrollHeight = this._getScrollHeight();

    var targets = [].slice.call(document.querySelectorAll(this._selector));

    targets.map(function (element) {
      var target = void 0;
      var targetSelector = __WEBPACK_IMPORTED_MODULE_1__util__["a" /* default */].getSelectorFromElement(element);

      if (targetSelector) {
        target = document.querySelector(targetSelector);
      }

      if (target) {
        var targetBCR = target.getBoundingClientRect();
        if (targetBCR.width || targetBCR.height) {
          // TODO (fat): remove sketch reliance on jQuery position/offset
          return [__WEBPACK_IMPORTED_MODULE_0_jquery___default()(target)[offsetMethod]().top + offsetBase, targetSelector];
        }
      }
      return null;
    }).filter(function (item) {
      return item;
    }).sort(function (a, b) {
      return a[0] - b[0];
    }).forEach(function (item) {
      _this2._offsets.push(item[0]);
      _this2._targets.push(item[1]);
    });
  };

  ScrollSpy.prototype.dispose = function dispose() {
    __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.removeData(this._element, DATA_KEY);
    __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this._scrollElement).off(EVENT_KEY);

    this._element = null;
    this._scrollElement = null;
    this._config = null;
    this._selector = null;
    this._offsets = null;
    this._targets = null;
    this._activeTarget = null;
    this._scrollHeight = null;
  };

  // Private

  ScrollSpy.prototype._getConfig = function _getConfig(config) {
    config = _extends({}, Default, (typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object' && config ? config : {});

    if (typeof config.target !== 'string') {
      var id = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(config.target).attr('id');
      if (!id) {
        id = __WEBPACK_IMPORTED_MODULE_1__util__["a" /* default */].getUID(NAME);
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(config.target).attr('id', id);
      }
      config.target = '#' + id;
    }

    __WEBPACK_IMPORTED_MODULE_1__util__["a" /* default */].typeCheckConfig(NAME, config, DefaultType);

    return config;
  };

  ScrollSpy.prototype._getScrollTop = function _getScrollTop() {
    return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
  };

  ScrollSpy.prototype._getScrollHeight = function _getScrollHeight() {
    return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
  };

  ScrollSpy.prototype._getOffsetHeight = function _getOffsetHeight() {
    return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
  };

  ScrollSpy.prototype._process = function _process() {
    var scrollTop = this._getScrollTop() + this._config.offset;
    var scrollHeight = this._getScrollHeight();
    var maxScroll = this._config.offset + scrollHeight - this._getOffsetHeight();

    if (this._scrollHeight !== scrollHeight) {
      this.refresh();
    }

    if (scrollTop >= maxScroll) {
      var target = this._targets[this._targets.length - 1];

      if (this._activeTarget !== target) {
        this._activate(target);
      }
      return;
    }

    if (this._activeTarget && scrollTop < this._offsets[0] && this._offsets[0] > 0) {
      this._activeTarget = null;
      this._clear();
      return;
    }

    var offsetLength = this._offsets.length;
    for (var i = offsetLength; i--;) {
      var isActiveTarget = this._activeTarget !== this._targets[i] && scrollTop >= this._offsets[i] && (typeof this._offsets[i + 1] === 'undefined' || scrollTop < this._offsets[i + 1]);

      if (isActiveTarget) {
        this._activate(this._targets[i]);
      }
    }
  };

  ScrollSpy.prototype._activate = function _activate(target) {
    this._activeTarget = target;

    this._clear();

    var queries = this._selector.split(',').map(function (selector) {
      return selector + '[data-target="' + target + '"],' + selector + '[href="' + target + '"]';
    });

    var $link = __WEBPACK_IMPORTED_MODULE_0_jquery___default()([].slice.call(document.querySelectorAll(queries.join(','))));

    if ($link.hasClass(ClassName.DROPDOWN_ITEM)) {
      $link.closest(Selector.DROPDOWN).find(Selector.DROPDOWN_TOGGLE).addClass(ClassName.ACTIVE);
      $link.addClass(ClassName.ACTIVE);
    } else {
      // Set triggered link as active
      $link.addClass(ClassName.ACTIVE);
      // Set triggered links parents as active
      // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor
      $link.parents(Selector.NAV_LIST_GROUP).prev(Selector.NAV_LINKS + ', ' + Selector.LIST_ITEMS).addClass(ClassName.ACTIVE);
      // Handle special case when .nav-link is inside .nav-item
      $link.parents(Selector.NAV_LIST_GROUP).prev(Selector.NAV_ITEMS).children(Selector.NAV_LINKS).addClass(ClassName.ACTIVE);
    }

    __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this._scrollElement).trigger(Event.ACTIVATE, {
      relatedTarget: target
    });
  };

  ScrollSpy.prototype._clear = function _clear() {
    [].slice.call(document.querySelectorAll(this._selector)).filter(function (node) {
      return node.classList.contains(ClassName.ACTIVE);
    }).forEach(function (node) {
      return node.classList.remove(ClassName.ACTIVE);
    });
  };

  // Static

  ScrollSpy._jQueryInterface = function _jQueryInterface(config) {
    return this.each(function () {
      var data = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).data(DATA_KEY);
      var _config = (typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object' && config;

      if (!data) {
        data = new ScrollSpy(this, _config);
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).data(DATA_KEY, data);
      }

      if (typeof config === 'string') {
        if (typeof data[config] === 'undefined') {
          throw new TypeError('No method named "' + config + '"');
        }
        data[config]();
      }
    });
  };

  _createClass(ScrollSpy, null, [{
    key: 'VERSION',
    get: function get() {
      return VERSION;
    }
  }, {
    key: 'Default',
    get: function get() {
      return Default;
    }
  }]);

  return ScrollSpy;
}();

/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */

__WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).on(Event.LOAD_DATA_API, function () {
  var scrollSpys = [].slice.call(document.querySelectorAll(Selector.DATA_SPY));
  var scrollSpysLength = scrollSpys.length;

  for (var i = scrollSpysLength; i--;) {
    var $spy = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(scrollSpys[i]);
    ScrollSpy._jQueryInterface.call($spy, $spy.data());
  }
});

/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 */

__WEBPACK_IMPORTED_MODULE_0_jquery___default.a.fn[NAME] = ScrollSpy._jQueryInterface;
__WEBPACK_IMPORTED_MODULE_0_jquery___default.a.fn[NAME].Constructor = ScrollSpy;
__WEBPACK_IMPORTED_MODULE_0_jquery___default.a.fn[NAME].noConflict = function () {
  __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.fn[NAME] = JQUERY_NO_CONFLICT;
  return ScrollSpy._jQueryInterface;
};

/* unused harmony default export */ var _unused_webpack_default_export = (ScrollSpy);

/***/ }),

/***/ "./node_modules/bootstrap/js/src/tab.js":
/*!**********************************************!*\
  !*** ./node_modules/bootstrap/js/src/tab.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(/*! ./util */ "./node_modules/bootstrap/js/src/util.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.3.1): tab.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */




/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var NAME = 'tab';
var VERSION = '4.3.1';
var DATA_KEY = 'bs.tab';
var EVENT_KEY = '.' + DATA_KEY;
var DATA_API_KEY = '.data-api';
var JQUERY_NO_CONFLICT = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.fn[NAME];

var Event = {
  HIDE: 'hide' + EVENT_KEY,
  HIDDEN: 'hidden' + EVENT_KEY,
  SHOW: 'show' + EVENT_KEY,
  SHOWN: 'shown' + EVENT_KEY,
  CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY
};

var ClassName = {
  DROPDOWN_MENU: 'dropdown-menu',
  ACTIVE: 'active',
  DISABLED: 'disabled',
  FADE: 'fade',
  SHOW: 'show'
};

var Selector = {
  DROPDOWN: '.dropdown',
  NAV_LIST_GROUP: '.nav, .list-group',
  ACTIVE: '.active',
  ACTIVE_UL: '> li > .active',
  DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
  DROPDOWN_TOGGLE: '.dropdown-toggle',
  DROPDOWN_ACTIVE_CHILD: '> .dropdown-menu .active'

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

};
var Tab = function () {
  function Tab(element) {
    _classCallCheck(this, Tab);

    this._element = element;
  }

  // Getters

  // Public

  Tab.prototype.show = function show() {
    var _this = this;

    if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this._element).hasClass(ClassName.ACTIVE) || __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this._element).hasClass(ClassName.DISABLED)) {
      return;
    }

    var target = void 0;
    var previous = void 0;
    var listElement = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this._element).closest(Selector.NAV_LIST_GROUP)[0];
    var selector = __WEBPACK_IMPORTED_MODULE_1__util__["a" /* default */].getSelectorFromElement(this._element);

    if (listElement) {
      var itemSelector = listElement.nodeName === 'UL' || listElement.nodeName === 'OL' ? Selector.ACTIVE_UL : Selector.ACTIVE;
      previous = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.makeArray(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(listElement).find(itemSelector));
      previous = previous[previous.length - 1];
    }

    var hideEvent = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.Event(Event.HIDE, {
      relatedTarget: this._element
    });

    var showEvent = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.Event(Event.SHOW, {
      relatedTarget: previous
    });

    if (previous) {
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()(previous).trigger(hideEvent);
    }

    __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this._element).trigger(showEvent);

    if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) {
      return;
    }

    if (selector) {
      target = document.querySelector(selector);
    }

    this._activate(this._element, listElement);

    var complete = function complete() {
      var hiddenEvent = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.Event(Event.HIDDEN, {
        relatedTarget: _this._element
      });

      var shownEvent = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.Event(Event.SHOWN, {
        relatedTarget: previous
      });

      __WEBPACK_IMPORTED_MODULE_0_jquery___default()(previous).trigger(hiddenEvent);
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()(_this._element).trigger(shownEvent);
    };

    if (target) {
      this._activate(target, target.parentNode, complete);
    } else {
      complete();
    }
  };

  Tab.prototype.dispose = function dispose() {
    __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.removeData(this._element, DATA_KEY);
    this._element = null;
  };

  // Private

  Tab.prototype._activate = function _activate(element, container, callback) {
    var _this2 = this;

    var activeElements = container && (container.nodeName === 'UL' || container.nodeName === 'OL') ? __WEBPACK_IMPORTED_MODULE_0_jquery___default()(container).find(Selector.ACTIVE_UL) : __WEBPACK_IMPORTED_MODULE_0_jquery___default()(container).children(Selector.ACTIVE);

    var active = activeElements[0];
    var isTransitioning = callback && active && __WEBPACK_IMPORTED_MODULE_0_jquery___default()(active).hasClass(ClassName.FADE);
    var complete = function complete() {
      return _this2._transitionComplete(element, active, callback);
    };

    if (active && isTransitioning) {
      var transitionDuration = __WEBPACK_IMPORTED_MODULE_1__util__["a" /* default */].getTransitionDurationFromElement(active);

      __WEBPACK_IMPORTED_MODULE_0_jquery___default()(active).removeClass(ClassName.SHOW).one(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* default */].TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
    } else {
      complete();
    }
  };

  Tab.prototype._transitionComplete = function _transitionComplete(element, active, callback) {
    if (active) {
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()(active).removeClass(ClassName.ACTIVE);

      var dropdownChild = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(active.parentNode).find(Selector.DROPDOWN_ACTIVE_CHILD)[0];

      if (dropdownChild) {
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(dropdownChild).removeClass(ClassName.ACTIVE);
      }

      if (active.getAttribute('role') === 'tab') {
        active.setAttribute('aria-selected', false);
      }
    }

    __WEBPACK_IMPORTED_MODULE_0_jquery___default()(element).addClass(ClassName.ACTIVE);
    if (element.getAttribute('role') === 'tab') {
      element.setAttribute('aria-selected', true);
    }

    __WEBPACK_IMPORTED_MODULE_1__util__["a" /* default */].reflow(element);

    if (element.classList.contains(ClassName.FADE)) {
      element.classList.add(ClassName.SHOW);
    }

    if (element.parentNode && __WEBPACK_IMPORTED_MODULE_0_jquery___default()(element.parentNode).hasClass(ClassName.DROPDOWN_MENU)) {
      var dropdownElement = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(element).closest(Selector.DROPDOWN)[0];

      if (dropdownElement) {
        var dropdownToggleList = [].slice.call(dropdownElement.querySelectorAll(Selector.DROPDOWN_TOGGLE));

        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(dropdownToggleList).addClass(ClassName.ACTIVE);
      }

      element.setAttribute('aria-expanded', true);
    }

    if (callback) {
      callback();
    }
  };

  // Static

  Tab._jQueryInterface = function _jQueryInterface(config) {
    return this.each(function () {
      var $this = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this);
      var data = $this.data(DATA_KEY);

      if (!data) {
        data = new Tab(this);
        $this.data(DATA_KEY, data);
      }

      if (typeof config === 'string') {
        if (typeof data[config] === 'undefined') {
          throw new TypeError('No method named "' + config + '"');
        }
        data[config]();
      }
    });
  };

  _createClass(Tab, null, [{
    key: 'VERSION',
    get: function get() {
      return VERSION;
    }
  }]);

  return Tab;
}();

/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */

__WEBPACK_IMPORTED_MODULE_0_jquery___default()(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
  event.preventDefault();
  Tab._jQueryInterface.call(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this), 'show');
});

/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 */

__WEBPACK_IMPORTED_MODULE_0_jquery___default.a.fn[NAME] = Tab._jQueryInterface;
__WEBPACK_IMPORTED_MODULE_0_jquery___default.a.fn[NAME].Constructor = Tab;
__WEBPACK_IMPORTED_MODULE_0_jquery___default.a.fn[NAME].noConflict = function () {
  __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.fn[NAME] = JQUERY_NO_CONFLICT;
  return Tab._jQueryInterface;
};

/* unused harmony default export */ var _unused_webpack_default_export = (Tab);

/***/ }),

/***/ "./node_modules/bootstrap/js/src/tools/sanitizer.js":
/*!**********************************************************!*\
  !*** ./node_modules/bootstrap/js/src/tools/sanitizer.js ***!
  \**********************************************************/
/*! exports provided: DefaultWhitelist, sanitizeHtml */
/*! exports used: DefaultWhitelist, sanitizeHtml */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DefaultWhitelist; });
/* harmony export (immutable) */ __webpack_exports__["b"] = sanitizeHtml;
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.3.1): tools/sanitizer.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var uriAttrs = ['background', 'cite', 'href', 'itemtype', 'longdesc', 'poster', 'src', 'xlink:href'];

var ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;

var DefaultWhitelist = {
  // Global attributes allowed on any supplied element below.
  '*': ['class', 'dir', 'id', 'lang', 'role', ARIA_ATTRIBUTE_PATTERN],
  a: ['target', 'href', 'title', 'rel'],
  area: [],
  b: [],
  br: [],
  col: [],
  code: [],
  div: [],
  em: [],
  hr: [],
  h1: [],
  h2: [],
  h3: [],
  h4: [],
  h5: [],
  h6: [],
  i: [],
  img: ['src', 'alt', 'title', 'width', 'height'],
  li: [],
  ol: [],
  p: [],
  pre: [],
  s: [],
  small: [],
  span: [],
  sub: [],
  sup: [],
  strong: [],
  u: [],
  ul: []

  /**
   * A pattern that recognizes a commonly useful subset of URLs that are safe.
   *
   * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
   */
};var SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi;

/**
 * A pattern that matches safe data URLs. Only matches image, video and audio types.
 *
 * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
 */
var DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;

function allowedAttribute(attr, allowedAttributeList) {
  var attrName = attr.nodeName.toLowerCase();

  if (allowedAttributeList.indexOf(attrName) !== -1) {
    if (uriAttrs.indexOf(attrName) !== -1) {
      return Boolean(attr.nodeValue.match(SAFE_URL_PATTERN) || attr.nodeValue.match(DATA_URL_PATTERN));
    }

    return true;
  }

  var regExp = allowedAttributeList.filter(function (attrRegex) {
    return attrRegex instanceof RegExp;
  });

  // Check if a regular expression validates the attribute.
  for (var i = 0, l = regExp.length; i < l; i++) {
    if (attrName.match(regExp[i])) {
      return true;
    }
  }

  return false;
}

function sanitizeHtml(unsafeHtml, whiteList, sanitizeFn) {
  if (unsafeHtml.length === 0) {
    return unsafeHtml;
  }

  if (sanitizeFn && typeof sanitizeFn === 'function') {
    return sanitizeFn(unsafeHtml);
  }

  var domParser = new window.DOMParser();
  var createdDocument = domParser.parseFromString(unsafeHtml, 'text/html');
  var whitelistKeys = Object.keys(whiteList);
  var elements = [].slice.call(createdDocument.body.querySelectorAll('*'));

  var _loop = function _loop(i, len) {
    var el = elements[i];
    var elName = el.nodeName.toLowerCase();

    if (whitelistKeys.indexOf(el.nodeName.toLowerCase()) === -1) {
      el.parentNode.removeChild(el);

      return 'continue';
    }

    var attributeList = [].slice.call(el.attributes);
    var whitelistedAttributes = [].concat(whiteList['*'] || [], whiteList[elName] || []);

    attributeList.forEach(function (attr) {
      if (!allowedAttribute(attr, whitelistedAttributes)) {
        el.removeAttribute(attr.nodeName);
      }
    });
  };

  for (var i = 0, len = elements.length; i < len; i++) {
    var _ret = _loop(i, len);

    if (_ret === 'continue') continue;
  }

  return createdDocument.body.innerHTML;
}

/***/ }),

/***/ "./node_modules/bootstrap/js/src/tooltip.js":
/*!**************************************************!*\
  !*** ./node_modules/bootstrap/js/src/tooltip.js ***!
  \**************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tools_sanitizer__ = __webpack_require__(/*! ./tools/sanitizer */ "./node_modules/bootstrap/js/src/tools/sanitizer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_popper_js__ = __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util__ = __webpack_require__(/*! ./util */ "./node_modules/bootstrap/js/src/util.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.3.1): tooltip.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */






/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var NAME = 'tooltip';
var VERSION = '4.3.1';
var DATA_KEY = 'bs.tooltip';
var EVENT_KEY = '.' + DATA_KEY;
var JQUERY_NO_CONFLICT = __WEBPACK_IMPORTED_MODULE_1_jquery___default.a.fn[NAME];
var CLASS_PREFIX = 'bs-tooltip';
var BSCLS_PREFIX_REGEX = new RegExp('(^|\\s)' + CLASS_PREFIX + '\\S+', 'g');
var DISALLOWED_ATTRIBUTES = ['sanitize', 'whiteList', 'sanitizeFn'];

var DefaultType = {
  animation: 'boolean',
  template: 'string',
  title: '(string|element|function)',
  trigger: 'string',
  delay: '(number|object)',
  html: 'boolean',
  selector: '(string|boolean)',
  placement: '(string|function)',
  offset: '(number|string|function)',
  container: '(string|element|boolean)',
  fallbackPlacement: '(string|array)',
  boundary: '(string|element)',
  sanitize: 'boolean',
  sanitizeFn: '(null|function)',
  whiteList: 'object'
};

var AttachmentMap = {
  AUTO: 'auto',
  TOP: 'top',
  RIGHT: 'right',
  BOTTOM: 'bottom',
  LEFT: 'left'
};

var Default = {
  animation: true,
  template: '<div class="tooltip" role="tooltip">' + '<div class="arrow"></div>' + '<div class="tooltip-inner"></div></div>',
  trigger: 'hover focus',
  title: '',
  delay: 0,
  html: false,
  selector: false,
  placement: 'top',
  offset: 0,
  container: false,
  fallbackPlacement: 'flip',
  boundary: 'scrollParent',
  sanitize: true,
  sanitizeFn: null,
  whiteList: __WEBPACK_IMPORTED_MODULE_0__tools_sanitizer__["a" /* DefaultWhitelist */]
};

var HoverState = {
  SHOW: 'show',
  OUT: 'out'
};

var Event = {
  HIDE: 'hide' + EVENT_KEY,
  HIDDEN: 'hidden' + EVENT_KEY,
  SHOW: 'show' + EVENT_KEY,
  SHOWN: 'shown' + EVENT_KEY,
  INSERTED: 'inserted' + EVENT_KEY,
  CLICK: 'click' + EVENT_KEY,
  FOCUSIN: 'focusin' + EVENT_KEY,
  FOCUSOUT: 'focusout' + EVENT_KEY,
  MOUSEENTER: 'mouseenter' + EVENT_KEY,
  MOUSELEAVE: 'mouseleave' + EVENT_KEY
};

var ClassName = {
  FADE: 'fade',
  SHOW: 'show'
};

var Selector = {
  TOOLTIP: '.tooltip',
  TOOLTIP_INNER: '.tooltip-inner',
  ARROW: '.arrow'
};

var Trigger = {
  HOVER: 'hover',
  FOCUS: 'focus',
  CLICK: 'click',
  MANUAL: 'manual'

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

};
var Tooltip = function () {
  function Tooltip(element, config) {
    _classCallCheck(this, Tooltip);

    /**
     * Check for Popper dependency
     * Popper - https://popper.js.org
     */
    if (typeof __WEBPACK_IMPORTED_MODULE_2_popper_js__["default"] === 'undefined') {
      throw new TypeError('Bootstrap\'s tooltips require Popper.js (https://popper.js.org/)');
    }

    // private
    this._isEnabled = true;
    this._timeout = 0;
    this._hoverState = '';
    this._activeTrigger = {};
    this._popper = null;

    // Protected
    this.element = element;
    this.config = this._getConfig(config);
    this.tip = null;

    this._setListeners();
  }

  // Getters

  // Public

  Tooltip.prototype.enable = function enable() {
    this._isEnabled = true;
  };

  Tooltip.prototype.disable = function disable() {
    this._isEnabled = false;
  };

  Tooltip.prototype.toggleEnabled = function toggleEnabled() {
    this._isEnabled = !this._isEnabled;
  };

  Tooltip.prototype.toggle = function toggle(event) {
    if (!this._isEnabled) {
      return;
    }

    if (event) {
      var dataKey = this.constructor.DATA_KEY;
      var context = __WEBPACK_IMPORTED_MODULE_1_jquery___default()(event.currentTarget).data(dataKey);

      if (!context) {
        context = new this.constructor(event.currentTarget, this._getDelegateConfig());
        __WEBPACK_IMPORTED_MODULE_1_jquery___default()(event.currentTarget).data(dataKey, context);
      }

      context._activeTrigger.click = !context._activeTrigger.click;

      if (context._isWithActiveTrigger()) {
        context._enter(null, context);
      } else {
        context._leave(null, context);
      }
    } else {
      if (__WEBPACK_IMPORTED_MODULE_1_jquery___default()(this.getTipElement()).hasClass(ClassName.SHOW)) {
        this._leave(null, this);
        return;
      }

      this._enter(null, this);
    }
  };

  Tooltip.prototype.dispose = function dispose() {
    clearTimeout(this._timeout);

    __WEBPACK_IMPORTED_MODULE_1_jquery___default.a.removeData(this.element, this.constructor.DATA_KEY);

    __WEBPACK_IMPORTED_MODULE_1_jquery___default()(this.element).off(this.constructor.EVENT_KEY);
    __WEBPACK_IMPORTED_MODULE_1_jquery___default()(this.element).closest('.modal').off('hide.bs.modal');

    if (this.tip) {
      __WEBPACK_IMPORTED_MODULE_1_jquery___default()(this.tip).remove();
    }

    this._isEnabled = null;
    this._timeout = null;
    this._hoverState = null;
    this._activeTrigger = null;
    if (this._popper !== null) {
      this._popper.destroy();
    }

    this._popper = null;
    this.element = null;
    this.config = null;
    this.tip = null;
  };

  Tooltip.prototype.show = function show() {
    var _this = this;

    if (__WEBPACK_IMPORTED_MODULE_1_jquery___default()(this.element).css('display') === 'none') {
      throw new Error('Please use show on visible elements');
    }

    var showEvent = __WEBPACK_IMPORTED_MODULE_1_jquery___default.a.Event(this.constructor.Event.SHOW);
    if (this.isWithContent() && this._isEnabled) {
      __WEBPACK_IMPORTED_MODULE_1_jquery___default()(this.element).trigger(showEvent);

      var shadowRoot = __WEBPACK_IMPORTED_MODULE_3__util__["a" /* default */].findShadowRoot(this.element);
      var isInTheDom = __WEBPACK_IMPORTED_MODULE_1_jquery___default.a.contains(shadowRoot !== null ? shadowRoot : this.element.ownerDocument.documentElement, this.element);

      if (showEvent.isDefaultPrevented() || !isInTheDom) {
        return;
      }

      var tip = this.getTipElement();
      var tipId = __WEBPACK_IMPORTED_MODULE_3__util__["a" /* default */].getUID(this.constructor.NAME);

      tip.setAttribute('id', tipId);
      this.element.setAttribute('aria-describedby', tipId);

      this.setContent();

      if (this.config.animation) {
        __WEBPACK_IMPORTED_MODULE_1_jquery___default()(tip).addClass(ClassName.FADE);
      }

      var placement = typeof this.config.placement === 'function' ? this.config.placement.call(this, tip, this.element) : this.config.placement;

      var attachment = this._getAttachment(placement);
      this.addAttachmentClass(attachment);

      var container = this._getContainer();
      __WEBPACK_IMPORTED_MODULE_1_jquery___default()(tip).data(this.constructor.DATA_KEY, this);

      if (!__WEBPACK_IMPORTED_MODULE_1_jquery___default.a.contains(this.element.ownerDocument.documentElement, this.tip)) {
        __WEBPACK_IMPORTED_MODULE_1_jquery___default()(tip).appendTo(container);
      }

      __WEBPACK_IMPORTED_MODULE_1_jquery___default()(this.element).trigger(this.constructor.Event.INSERTED);

      this._popper = new __WEBPACK_IMPORTED_MODULE_2_popper_js__["default"](this.element, tip, {
        placement: attachment,
        modifiers: {
          offset: this._getOffset(),
          flip: {
            behavior: this.config.fallbackPlacement
          },
          arrow: {
            element: Selector.ARROW
          },
          preventOverflow: {
            boundariesElement: this.config.boundary
          }
        },
        onCreate: function onCreate(data) {
          if (data.originalPlacement !== data.placement) {
            _this._handlePopperPlacementChange(data);
          }
        },
        onUpdate: function onUpdate(data) {
          return _this._handlePopperPlacementChange(data);
        }
      });

      __WEBPACK_IMPORTED_MODULE_1_jquery___default()(tip).addClass(ClassName.SHOW);

      // If this is a touch-enabled device we add extra
      // empty mouseover listeners to the body's immediate children;
      // only needed because of broken event delegation on iOS
      // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
      if ('ontouchstart' in document.documentElement) {
        __WEBPACK_IMPORTED_MODULE_1_jquery___default()(document.body).children().on('mouseover', null, __WEBPACK_IMPORTED_MODULE_1_jquery___default.a.noop);
      }

      var complete = function complete() {
        if (_this.config.animation) {
          _this._fixTransition();
        }
        var prevHoverState = _this._hoverState;
        _this._hoverState = null;

        __WEBPACK_IMPORTED_MODULE_1_jquery___default()(_this.element).trigger(_this.constructor.Event.SHOWN);

        if (prevHoverState === HoverState.OUT) {
          _this._leave(null, _this);
        }
      };

      if (__WEBPACK_IMPORTED_MODULE_1_jquery___default()(this.tip).hasClass(ClassName.FADE)) {
        var transitionDuration = __WEBPACK_IMPORTED_MODULE_3__util__["a" /* default */].getTransitionDurationFromElement(this.tip);

        __WEBPACK_IMPORTED_MODULE_1_jquery___default()(this.tip).one(__WEBPACK_IMPORTED_MODULE_3__util__["a" /* default */].TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }
    }
  };

  Tooltip.prototype.hide = function hide(callback) {
    var _this2 = this;

    var tip = this.getTipElement();
    var hideEvent = __WEBPACK_IMPORTED_MODULE_1_jquery___default.a.Event(this.constructor.Event.HIDE);
    var complete = function complete() {
      if (_this2._hoverState !== HoverState.SHOW && tip.parentNode) {
        tip.parentNode.removeChild(tip);
      }

      _this2._cleanTipClass();
      _this2.element.removeAttribute('aria-describedby');
      __WEBPACK_IMPORTED_MODULE_1_jquery___default()(_this2.element).trigger(_this2.constructor.Event.HIDDEN);
      if (_this2._popper !== null) {
        _this2._popper.destroy();
      }

      if (callback) {
        callback();
      }
    };

    __WEBPACK_IMPORTED_MODULE_1_jquery___default()(this.element).trigger(hideEvent);

    if (hideEvent.isDefaultPrevented()) {
      return;
    }

    __WEBPACK_IMPORTED_MODULE_1_jquery___default()(tip).removeClass(ClassName.SHOW);

    // If this is a touch-enabled device we remove the extra
    // empty mouseover listeners we added for iOS support
    if ('ontouchstart' in document.documentElement) {
      __WEBPACK_IMPORTED_MODULE_1_jquery___default()(document.body).children().off('mouseover', null, __WEBPACK_IMPORTED_MODULE_1_jquery___default.a.noop);
    }

    this._activeTrigger[Trigger.CLICK] = false;
    this._activeTrigger[Trigger.FOCUS] = false;
    this._activeTrigger[Trigger.HOVER] = false;

    if (__WEBPACK_IMPORTED_MODULE_1_jquery___default()(this.tip).hasClass(ClassName.FADE)) {
      var transitionDuration = __WEBPACK_IMPORTED_MODULE_3__util__["a" /* default */].getTransitionDurationFromElement(tip);

      __WEBPACK_IMPORTED_MODULE_1_jquery___default()(tip).one(__WEBPACK_IMPORTED_MODULE_3__util__["a" /* default */].TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
    } else {
      complete();
    }

    this._hoverState = '';
  };

  Tooltip.prototype.update = function update() {
    if (this._popper !== null) {
      this._popper.scheduleUpdate();
    }
  };

  // Protected

  Tooltip.prototype.isWithContent = function isWithContent() {
    return Boolean(this.getTitle());
  };

  Tooltip.prototype.addAttachmentClass = function addAttachmentClass(attachment) {
    __WEBPACK_IMPORTED_MODULE_1_jquery___default()(this.getTipElement()).addClass(CLASS_PREFIX + '-' + attachment);
  };

  Tooltip.prototype.getTipElement = function getTipElement() {
    this.tip = this.tip || __WEBPACK_IMPORTED_MODULE_1_jquery___default()(this.config.template)[0];
    return this.tip;
  };

  Tooltip.prototype.setContent = function setContent() {
    var tip = this.getTipElement();
    this.setElementContent(__WEBPACK_IMPORTED_MODULE_1_jquery___default()(tip.querySelectorAll(Selector.TOOLTIP_INNER)), this.getTitle());
    __WEBPACK_IMPORTED_MODULE_1_jquery___default()(tip).removeClass(ClassName.FADE + ' ' + ClassName.SHOW);
  };

  Tooltip.prototype.setElementContent = function setElementContent($element, content) {
    if ((typeof content === 'undefined' ? 'undefined' : _typeof(content)) === 'object' && (content.nodeType || content.jquery)) {
      // Content is a DOM node or a jQuery
      if (this.config.html) {
        if (!__WEBPACK_IMPORTED_MODULE_1_jquery___default()(content).parent().is($element)) {
          $element.empty().append(content);
        }
      } else {
        $element.text(__WEBPACK_IMPORTED_MODULE_1_jquery___default()(content).text());
      }

      return;
    }

    if (this.config.html) {
      if (this.config.sanitize) {
        content = Object(__WEBPACK_IMPORTED_MODULE_0__tools_sanitizer__["b" /* sanitizeHtml */])(content, this.config.whiteList, this.config.sanitizeFn);
      }

      $element.html(content);
    } else {
      $element.text(content);
    }
  };

  Tooltip.prototype.getTitle = function getTitle() {
    var title = this.element.getAttribute('data-original-title');

    if (!title) {
      title = typeof this.config.title === 'function' ? this.config.title.call(this.element) : this.config.title;
    }

    return title;
  };

  // Private

  Tooltip.prototype._getOffset = function _getOffset() {
    var _this3 = this;

    var offset = {};

    if (typeof this.config.offset === 'function') {
      offset.fn = function (data) {
        data.offsets = _extends({}, data.offsets, _this3.config.offset(data.offsets, _this3.element) || {});

        return data;
      };
    } else {
      offset.offset = this.config.offset;
    }

    return offset;
  };

  Tooltip.prototype._getContainer = function _getContainer() {
    if (this.config.container === false) {
      return document.body;
    }

    if (__WEBPACK_IMPORTED_MODULE_3__util__["a" /* default */].isElement(this.config.container)) {
      return __WEBPACK_IMPORTED_MODULE_1_jquery___default()(this.config.container);
    }

    return __WEBPACK_IMPORTED_MODULE_1_jquery___default()(document).find(this.config.container);
  };

  Tooltip.prototype._getAttachment = function _getAttachment(placement) {
    return AttachmentMap[placement.toUpperCase()];
  };

  Tooltip.prototype._setListeners = function _setListeners() {
    var _this4 = this;

    var triggers = this.config.trigger.split(' ');

    triggers.forEach(function (trigger) {
      if (trigger === 'click') {
        __WEBPACK_IMPORTED_MODULE_1_jquery___default()(_this4.element).on(_this4.constructor.Event.CLICK, _this4.config.selector, function (event) {
          return _this4.toggle(event);
        });
      } else if (trigger !== Trigger.MANUAL) {
        var eventIn = trigger === Trigger.HOVER ? _this4.constructor.Event.MOUSEENTER : _this4.constructor.Event.FOCUSIN;
        var eventOut = trigger === Trigger.HOVER ? _this4.constructor.Event.MOUSELEAVE : _this4.constructor.Event.FOCUSOUT;

        __WEBPACK_IMPORTED_MODULE_1_jquery___default()(_this4.element).on(eventIn, _this4.config.selector, function (event) {
          return _this4._enter(event);
        }).on(eventOut, _this4.config.selector, function (event) {
          return _this4._leave(event);
        });
      }
    });

    __WEBPACK_IMPORTED_MODULE_1_jquery___default()(this.element).closest('.modal').on('hide.bs.modal', function () {
      if (_this4.element) {
        _this4.hide();
      }
    });

    if (this.config.selector) {
      this.config = _extends({}, this.config, {
        trigger: 'manual',
        selector: ''
      });
    } else {
      this._fixTitle();
    }
  };

  Tooltip.prototype._fixTitle = function _fixTitle() {
    var titleType = _typeof(this.element.getAttribute('data-original-title'));

    if (this.element.getAttribute('title') || titleType !== 'string') {
      this.element.setAttribute('data-original-title', this.element.getAttribute('title') || '');

      this.element.setAttribute('title', '');
    }
  };

  Tooltip.prototype._enter = function _enter(event, context) {
    var dataKey = this.constructor.DATA_KEY;
    context = context || __WEBPACK_IMPORTED_MODULE_1_jquery___default()(event.currentTarget).data(dataKey);

    if (!context) {
      context = new this.constructor(event.currentTarget, this._getDelegateConfig());
      __WEBPACK_IMPORTED_MODULE_1_jquery___default()(event.currentTarget).data(dataKey, context);
    }

    if (event) {
      context._activeTrigger[event.type === 'focusin' ? Trigger.FOCUS : Trigger.HOVER] = true;
    }

    if (__WEBPACK_IMPORTED_MODULE_1_jquery___default()(context.getTipElement()).hasClass(ClassName.SHOW) || context._hoverState === HoverState.SHOW) {
      context._hoverState = HoverState.SHOW;
      return;
    }

    clearTimeout(context._timeout);

    context._hoverState = HoverState.SHOW;

    if (!context.config.delay || !context.config.delay.show) {
      context.show();
      return;
    }

    context._timeout = setTimeout(function () {
      if (context._hoverState === HoverState.SHOW) {
        context.show();
      }
    }, context.config.delay.show);
  };

  Tooltip.prototype._leave = function _leave(event, context) {
    var dataKey = this.constructor.DATA_KEY;
    context = context || __WEBPACK_IMPORTED_MODULE_1_jquery___default()(event.currentTarget).data(dataKey);

    if (!context) {
      context = new this.constructor(event.currentTarget, this._getDelegateConfig());
      __WEBPACK_IMPORTED_MODULE_1_jquery___default()(event.currentTarget).data(dataKey, context);
    }

    if (event) {
      context._activeTrigger[event.type === 'focusout' ? Trigger.FOCUS : Trigger.HOVER] = false;
    }

    if (context._isWithActiveTrigger()) {
      return;
    }

    clearTimeout(context._timeout);

    context._hoverState = HoverState.OUT;

    if (!context.config.delay || !context.config.delay.hide) {
      context.hide();
      return;
    }

    context._timeout = setTimeout(function () {
      if (context._hoverState === HoverState.OUT) {
        context.hide();
      }
    }, context.config.delay.hide);
  };

  Tooltip.prototype._isWithActiveTrigger = function _isWithActiveTrigger() {
    for (var trigger in this._activeTrigger) {
      if (this._activeTrigger[trigger]) {
        return true;
      }
    }

    return false;
  };

  Tooltip.prototype._getConfig = function _getConfig(config) {
    var dataAttributes = __WEBPACK_IMPORTED_MODULE_1_jquery___default()(this.element).data();

    Object.keys(dataAttributes).forEach(function (dataAttr) {
      if (DISALLOWED_ATTRIBUTES.indexOf(dataAttr) !== -1) {
        delete dataAttributes[dataAttr];
      }
    });

    config = _extends({}, this.constructor.Default, dataAttributes, (typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object' && config ? config : {});

    if (typeof config.delay === 'number') {
      config.delay = {
        show: config.delay,
        hide: config.delay
      };
    }

    if (typeof config.title === 'number') {
      config.title = config.title.toString();
    }

    if (typeof config.content === 'number') {
      config.content = config.content.toString();
    }

    __WEBPACK_IMPORTED_MODULE_3__util__["a" /* default */].typeCheckConfig(NAME, config, this.constructor.DefaultType);

    if (config.sanitize) {
      config.template = Object(__WEBPACK_IMPORTED_MODULE_0__tools_sanitizer__["b" /* sanitizeHtml */])(config.template, config.whiteList, config.sanitizeFn);
    }

    return config;
  };

  Tooltip.prototype._getDelegateConfig = function _getDelegateConfig() {
    var config = {};

    if (this.config) {
      for (var key in this.config) {
        if (this.constructor.Default[key] !== this.config[key]) {
          config[key] = this.config[key];
        }
      }
    }

    return config;
  };

  Tooltip.prototype._cleanTipClass = function _cleanTipClass() {
    var $tip = __WEBPACK_IMPORTED_MODULE_1_jquery___default()(this.getTipElement());
    var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX);
    if (tabClass !== null && tabClass.length) {
      $tip.removeClass(tabClass.join(''));
    }
  };

  Tooltip.prototype._handlePopperPlacementChange = function _handlePopperPlacementChange(popperData) {
    var popperInstance = popperData.instance;
    this.tip = popperInstance.popper;
    this._cleanTipClass();
    this.addAttachmentClass(this._getAttachment(popperData.placement));
  };

  Tooltip.prototype._fixTransition = function _fixTransition() {
    var tip = this.getTipElement();
    var initConfigAnimation = this.config.animation;

    if (tip.getAttribute('x-placement') !== null) {
      return;
    }

    __WEBPACK_IMPORTED_MODULE_1_jquery___default()(tip).removeClass(ClassName.FADE);
    this.config.animation = false;
    this.hide();
    this.show();
    this.config.animation = initConfigAnimation;
  };

  // Static

  Tooltip._jQueryInterface = function _jQueryInterface(config) {
    return this.each(function () {
      var data = __WEBPACK_IMPORTED_MODULE_1_jquery___default()(this).data(DATA_KEY);
      var _config = (typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object' && config;

      if (!data && /dispose|hide/.test(config)) {
        return;
      }

      if (!data) {
        data = new Tooltip(this, _config);
        __WEBPACK_IMPORTED_MODULE_1_jquery___default()(this).data(DATA_KEY, data);
      }

      if (typeof config === 'string') {
        if (typeof data[config] === 'undefined') {
          throw new TypeError('No method named "' + config + '"');
        }
        data[config]();
      }
    });
  };

  _createClass(Tooltip, null, [{
    key: 'VERSION',
    get: function get() {
      return VERSION;
    }
  }, {
    key: 'Default',
    get: function get() {
      return Default;
    }
  }, {
    key: 'NAME',
    get: function get() {
      return NAME;
    }
  }, {
    key: 'DATA_KEY',
    get: function get() {
      return DATA_KEY;
    }
  }, {
    key: 'Event',
    get: function get() {
      return Event;
    }
  }, {
    key: 'EVENT_KEY',
    get: function get() {
      return EVENT_KEY;
    }
  }, {
    key: 'DefaultType',
    get: function get() {
      return DefaultType;
    }
  }]);

  return Tooltip;
}();

/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 */

__WEBPACK_IMPORTED_MODULE_1_jquery___default.a.fn[NAME] = Tooltip._jQueryInterface;
__WEBPACK_IMPORTED_MODULE_1_jquery___default.a.fn[NAME].Constructor = Tooltip;
__WEBPACK_IMPORTED_MODULE_1_jquery___default.a.fn[NAME].noConflict = function () {
  __WEBPACK_IMPORTED_MODULE_1_jquery___default.a.fn[NAME] = JQUERY_NO_CONFLICT;
  return Tooltip._jQueryInterface;
};

/* harmony default export */ __webpack_exports__["a"] = (Tooltip);

/***/ }),

/***/ "./node_modules/bootstrap/js/src/util.js":
/*!***********************************************!*\
  !*** ./node_modules/bootstrap/js/src/util.js ***!
  \***********************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.3.1): util.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */



/**
 * ------------------------------------------------------------------------
 * Private TransitionEnd Helpers
 * ------------------------------------------------------------------------
 */

var TRANSITION_END = 'transitionend';
var MAX_UID = 1000000;
var MILLISECONDS_MULTIPLIER = 1000;

// Shoutout AngusCroll (https://goo.gl/pxwQGp)
function toType(obj) {
  return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
}

function getSpecialTransitionEndEvent() {
  return {
    bindType: TRANSITION_END,
    delegateType: TRANSITION_END,
    handle: function handle(event) {
      if (__WEBPACK_IMPORTED_MODULE_0_jquery___default()(event.target).is(this)) {
        return event.handleObj.handler.apply(this, arguments); // eslint-disable-line prefer-rest-params
      }
      return undefined; // eslint-disable-line no-undefined
    }
  };
}

function transitionEndEmulator(duration) {
  var _this = this;

  var called = false;

  __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).one(Util.TRANSITION_END, function () {
    called = true;
  });

  setTimeout(function () {
    if (!called) {
      Util.triggerTransitionEnd(_this);
    }
  }, duration);

  return this;
}

function setTransitionEndSupport() {
  __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.fn.emulateTransitionEnd = transitionEndEmulator;
  __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent();
}

/**
 * --------------------------------------------------------------------------
 * Public Util Api
 * --------------------------------------------------------------------------
 */

var Util = {

  TRANSITION_END: 'bsTransitionEnd',

  getUID: function getUID(prefix) {
    do {
      // eslint-disable-next-line no-bitwise
      prefix += ~~(Math.random() * MAX_UID); // "~~" acts like a faster Math.floor() here
    } while (document.getElementById(prefix));
    return prefix;
  },
  getSelectorFromElement: function getSelectorFromElement(element) {
    var selector = element.getAttribute('data-target');

    if (!selector || selector === '#') {
      var hrefAttr = element.getAttribute('href');
      selector = hrefAttr && hrefAttr !== '#' ? hrefAttr.trim() : '';
    }

    try {
      return document.querySelector(selector) ? selector : null;
    } catch (err) {
      return null;
    }
  },
  getTransitionDurationFromElement: function getTransitionDurationFromElement(element) {
    if (!element) {
      return 0;
    }

    // Get transition-duration of the element
    var transitionDuration = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(element).css('transition-duration');
    var transitionDelay = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(element).css('transition-delay');

    var floatTransitionDuration = parseFloat(transitionDuration);
    var floatTransitionDelay = parseFloat(transitionDelay);

    // Return 0 if element or transition duration is not found
    if (!floatTransitionDuration && !floatTransitionDelay) {
      return 0;
    }

    // If multiple durations are defined, take the first
    transitionDuration = transitionDuration.split(',')[0];
    transitionDelay = transitionDelay.split(',')[0];

    return (parseFloat(transitionDuration) + parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
  },
  reflow: function reflow(element) {
    return element.offsetHeight;
  },
  triggerTransitionEnd: function triggerTransitionEnd(element) {
    __WEBPACK_IMPORTED_MODULE_0_jquery___default()(element).trigger(TRANSITION_END);
  },


  // TODO: Remove in v5
  supportsTransitionEnd: function supportsTransitionEnd() {
    return Boolean(TRANSITION_END);
  },
  isElement: function isElement(obj) {
    return (obj[0] || obj).nodeType;
  },
  typeCheckConfig: function typeCheckConfig(componentName, config, configTypes) {
    for (var property in configTypes) {
      if (Object.prototype.hasOwnProperty.call(configTypes, property)) {
        var expectedTypes = configTypes[property];
        var value = config[property];
        var valueType = value && Util.isElement(value) ? 'element' : toType(value);

        if (!new RegExp(expectedTypes).test(valueType)) {
          throw new Error(componentName.toUpperCase() + ': ' + ('Option "' + property + '" provided type "' + valueType + '" ') + ('but expected type "' + expectedTypes + '".'));
        }
      }
    }
  },
  findShadowRoot: function findShadowRoot(element) {
    if (!document.documentElement.attachShadow) {
      return null;
    }

    // Can find the shadow root otherwise it'll return the document
    if (typeof element.getRootNode === 'function') {
      var root = element.getRootNode();
      return root instanceof ShadowRoot ? root : null;
    }

    if (element instanceof ShadowRoot) {
      return element;
    }

    // when we don't find a shadow root
    if (!element.parentNode) {
      return null;
    }

    return Util.findShadowRoot(element.parentNode);
  }
};

setTransitionEndSupport();

/* harmony default export */ __webpack_exports__["a"] = (Util);

/***/ }),

/***/ "./node_modules/imask/dist/imask.esm.js":
/*!**********************************************!*\
  !*** ./node_modules/imask/dist/imask.esm.js ***!
  \**********************************************/
/*! exports provided: default, HTMLMaskElement, InputMask, MaskElement, Masked, MaskedDate, MaskedDynamic, MaskedEnum, MaskedFunction, MaskedNumber, MaskedPattern, MaskedRange, MaskedRegExp, createMask */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* unused harmony export HTMLMaskElement */
/* unused harmony export InputMask */
/* unused harmony export MaskElement */
/* unused harmony export Masked */
/* unused harmony export MaskedDate */
/* unused harmony export MaskedDynamic */
/* unused harmony export MaskedEnum */
/* unused harmony export MaskedFunction */
/* unused harmony export MaskedNumber */
/* unused harmony export MaskedPattern */
/* unused harmony export MaskedRange */
/* unused harmony export MaskedRegExp */
/* unused harmony export createMask */
var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && ((typeof call === "undefined" ? "undefined" : _typeof2(call)) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);

      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

function set(target, property, value, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.set) {
    set = Reflect.set;
  } else {
    set = function set(target, property, value, receiver) {
      var base = _superPropBase(target, property);

      var desc;

      if (base) {
        desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.set) {
          desc.set.call(receiver, value);
          return true;
        } else if (!desc.writable) {
          return false;
        }
      }

      desc = Object.getOwnPropertyDescriptor(receiver, property);

      if (desc) {
        if (!desc.writable) {
          return false;
        }

        desc.value = value;
        Object.defineProperty(receiver, property, desc);
      } else {
        _defineProperty(receiver, property, value);
      }

      return true;
    };
  }

  return set(target, property, value, receiver);
}

function _set(target, property, value, receiver, isStrict) {
  var s = set(target, property, value, receiver || target);

  if (!s && isStrict) {
    throw new Error('failed to set property');
  }

  return value;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

/** Checks if value is string */
function isString(str) {
  return typeof str === 'string' || str instanceof String;
}
/**
  Direction
  @prop {string} NONE
  @prop {string} LEFT
  @prop {string} FORCE_LEFT
  @prop {string} RIGHT
  @prop {string} FORCE_RIGHT
*/

var DIRECTION = {
  NONE: 'NONE',
  LEFT: 'LEFT',
  FORCE_LEFT: 'FORCE_LEFT',
  RIGHT: 'RIGHT',
  FORCE_RIGHT: 'FORCE_RIGHT'
  /**
    Direction
    @enum {string}
  */

};
/** */

function forceDirection(direction) {
  switch (direction) {
    case DIRECTION.LEFT:
      return DIRECTION.FORCE_LEFT;

    case DIRECTION.RIGHT:
      return DIRECTION.FORCE_RIGHT;

    default:
      return direction;
  }
}
/** Escapes regular expression control chars */

function escapeRegExp(str) {
  return str.replace(/([.*+?^=!:${}()|[\]/\\])/g, '\\$1');
} // cloned from https://github.com/epoberezkin/fast-deep-equal with small changes

function objectIncludes(b, a) {
  if (a === b) return true;
  var arrA = Array.isArray(a),
      arrB = Array.isArray(b),
      i;

  if (arrA && arrB) {
    if (a.length != b.length) return false;

    for (i = 0; i < a.length; i++) {
      if (!objectIncludes(a[i], b[i])) return false;
    }

    return true;
  }

  if (arrA != arrB) return false;

  if (a && b && _typeof(a) === 'object' && _typeof(b) === 'object') {
    var dateA = a instanceof Date,
        dateB = b instanceof Date;
    if (dateA && dateB) return a.getTime() == b.getTime();
    if (dateA != dateB) return false;
    var regexpA = a instanceof RegExp,
        regexpB = b instanceof RegExp;
    if (regexpA && regexpB) return a.toString() == b.toString();
    if (regexpA != regexpB) return false;
    var keys = Object.keys(a); // if (keys.length !== Object.keys(b).length) return false;

    for (i = 0; i < keys.length; i++) {
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
    }

    for (i = 0; i < keys.length; i++) {
      if (!objectIncludes(b[keys[i]], a[keys[i]])) return false;
    }

    return true;
  } else if (a && b && typeof a === 'function' && typeof b === 'function') {
    return a.toString() === b.toString();
  }

  return false;
}
/* eslint-disable no-undef */

var g = typeof window !== 'undefined' && window || typeof global !== 'undefined' && global.global === global && global || typeof self !== 'undefined' && self.self === self && self || {};
/* eslint-enable no-undef */

/** Selection range */

/** Provides details of changing input */

var ActionDetails =
/*#__PURE__*/
function () {
  /** Current input value */

  /** Current cursor position */

  /** Old input value */

  /** Old selection */
  function ActionDetails(value, cursorPos, oldValue, oldSelection) {
    _classCallCheck(this, ActionDetails);

    this.value = value;
    this.cursorPos = cursorPos;
    this.oldValue = oldValue;
    this.oldSelection = oldSelection; // double check if left part was changed (autofilling, other non-standard input triggers)

    while (this.value.slice(0, this.startChangePos) !== this.oldValue.slice(0, this.startChangePos)) {
      --this.oldSelection.start;
    }
  }
  /**
    Start changing position
    @readonly
  */

  _createClass(ActionDetails, [{
    key: "startChangePos",
    get: function get() {
      return Math.min(this.cursorPos, this.oldSelection.start);
    }
    /**
      Inserted symbols count
      @readonly
    */

  }, {
    key: "insertedCount",
    get: function get() {
      return this.cursorPos - this.startChangePos;
    }
    /**
      Inserted symbols
      @readonly
    */

  }, {
    key: "inserted",
    get: function get() {
      return this.value.substr(this.startChangePos, this.insertedCount);
    }
    /**
      Removed symbols count
      @readonly
    */

  }, {
    key: "removedCount",
    get: function get() {
      // Math.max for opposite operation
      return Math.max(this.oldSelection.end - this.startChangePos || // for Delete
      this.oldValue.length - this.value.length, 0);
    }
    /**
      Removed symbols
      @readonly
    */

  }, {
    key: "removed",
    get: function get() {
      return this.oldValue.substr(this.startChangePos, this.removedCount);
    }
    /**
      Unchanged head symbols
      @readonly
    */

  }, {
    key: "head",
    get: function get() {
      return this.value.substring(0, this.startChangePos);
    }
    /**
      Unchanged tail symbols
      @readonly
    */

  }, {
    key: "tail",
    get: function get() {
      return this.value.substring(this.startChangePos + this.insertedCount);
    }
    /**
      Remove direction
      @readonly
    */

  }, {
    key: "removeDirection",
    get: function get() {
      if (!this.removedCount || this.insertedCount) return DIRECTION.NONE; // align right if delete at right or if range removed (event with backspace)

      return this.oldSelection.end === this.cursorPos || this.oldSelection.start === this.cursorPos ? DIRECTION.RIGHT : DIRECTION.LEFT;
    }
  }]);

  return ActionDetails;
}();

/**
  Provides details of changing model value
  @param {Object} [details]
  @param {string} [details.inserted] - Inserted symbols
  @param {boolean} [details.skip] - Can skip chars
  @param {number} [details.removeCount] - Removed symbols count
  @param {number} [details.tailShift] - Additional offset if any changes occurred before tail
*/
var ChangeDetails =
/*#__PURE__*/
function () {
  /** Inserted symbols */

  /** Can skip chars */

  /** Additional offset if any changes occurred before tail */

  /** Raw inserted is used by dynamic mask */
  function ChangeDetails(details) {
    _classCallCheck(this, ChangeDetails);

    Object.assign(this, {
      inserted: '',
      rawInserted: '',
      skip: false,
      tailShift: 0
    }, details);
  }
  /**
    Aggregate changes
    @returns {ChangeDetails} `this`
  */

  _createClass(ChangeDetails, [{
    key: "aggregate",
    value: function aggregate(details) {
      this.rawInserted += details.rawInserted;
      this.skip = this.skip || details.skip;
      this.inserted += details.inserted;
      this.tailShift += details.tailShift;
      return this;
    }
    /** Total offset considering all changes */

  }, {
    key: "offset",
    get: function get() {
      return this.tailShift + this.inserted.length;
    }
  }]);

  return ChangeDetails;
}();

/** Provides details of continuous extracted tail */
var ContinuousTailDetails =
/*#__PURE__*/
function () {
  /** Tail value as string */

  /** Tail start position */

  /** Start position */
  function ContinuousTailDetails() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var stop = arguments.length > 2 ? arguments[2] : undefined;

    _classCallCheck(this, ContinuousTailDetails);

    this.value = value;
    this.from = from;
    this.stop = stop;
  }

  _createClass(ContinuousTailDetails, [{
    key: "toString",
    value: function toString() {
      return this.value;
    }
  }, {
    key: "extend",
    value: function extend(tail) {
      this.value += String(tail);
    }
  }, {
    key: "appendTo",
    value: function appendTo(masked) {
      return masked.append(this.toString(), {
        tail: true
      }).aggregate(masked._appendPlaceholder());
    }
  }, {
    key: "shiftBefore",
    value: function shiftBefore(pos) {
      if (this.from >= pos || !this.value.length) return '';
      var shiftChar = this.value[0];
      this.value = this.value.slice(1);
      return shiftChar;
    }
  }, {
    key: "state",
    get: function get() {
      return {
        value: this.value,
        from: this.from,
        stop: this.stop
      };
    },
    set: function set(state) {
      Object.assign(this, state);
    }
  }]);

  return ContinuousTailDetails;
}();

/** Provides common masking stuff */
var Masked =
/*#__PURE__*/
function () {
  // $Shape<MaskedOptions>; TODO after fix https://github.com/facebook/flow/issues/4773

  /** @type {Mask} */

  /** */
  // $FlowFixMe no ideas

  /** Transforms value before mask processing */

  /** Validates if value is acceptable */

  /** Does additional processing in the end of editing */

  /** Enable characters overwriting */

  /** */
  function Masked(opts) {
    _classCallCheck(this, Masked);

    this._value = '';

    this._update(opts);

    this.isInitialized = true;
  }
  /** Sets and applies new options */

  _createClass(Masked, [{
    key: "updateOptions",
    value: function updateOptions(opts) {
      if (!Object.keys(opts).length) return;
      this.withValueRefresh(this._update.bind(this, opts));
    }
    /**
      Sets new options
      @protected
    */

  }, {
    key: "_update",
    value: function _update(opts) {
      Object.assign(this, opts);
    }
    /** Mask state */

  }, {
    key: "reset",

    /** Resets value */
    value: function reset() {
      this._value = '';
    }
    /** */

  }, {
    key: "resolve",

    /** Resolve new value */
    value: function resolve(value) {
      this.reset();
      this.append(value, {
        input: true
      }, '');
      this.doCommit();
      return this.value;
    }
    /** */

  }, {
    key: "nearestInputPos",

    /** Finds nearest input position in direction */
    value: function nearestInputPos(cursorPos, direction) {
      return cursorPos;
    }
    /** Extracts value in range considering flags */

  }, {
    key: "extractInput",
    value: function extractInput() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      return this.value.slice(fromPos, toPos);
    }
    /** Extracts tail in range */

  }, {
    key: "extractTail",
    value: function extractTail() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      return new ContinuousTailDetails(this.extractInput(fromPos, toPos), fromPos);
    }
    /** Appends tail */
    // $FlowFixMe no ideas

  }, {
    key: "appendTail",
    value: function appendTail(tail) {
      if (isString(tail)) tail = new ContinuousTailDetails(String(tail));
      return tail.appendTo(this);
    }
    /** Appends char */

  }, {
    key: "_appendCharRaw",
    value: function _appendCharRaw(ch) {
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      ch = this.doPrepare(ch, flags);
      if (!ch) return new ChangeDetails();
      this._value += ch;
      return new ChangeDetails({
        inserted: ch,
        rawInserted: ch
      });
    }
    /** Appends char */

  }, {
    key: "_appendChar",
    value: function _appendChar(ch) {
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var checkTail = arguments.length > 2 ? arguments[2] : undefined;
      var consistentState = this.state;

      var details = this._appendCharRaw(ch, flags);

      if (details.inserted) {
        var consistentTail;
        var appended = this.doValidate(flags) !== false;

        if (appended && checkTail != null) {
          // validation ok, check tail
          var beforeTailState = this.state;

          if (this.overwrite) {
            consistentTail = checkTail.state;
            checkTail.shiftBefore(this.value.length);
          }

          var tailDetails = this.appendTail(checkTail);
          appended = tailDetails.rawInserted === checkTail.toString(); // if ok, rollback state after tail

          if (appended && tailDetails.inserted) this.state = beforeTailState;
        } // revert all if something went wrong


        if (!appended) {
          details.rawInserted = details.inserted = '';
          this.state = consistentState;
          if (checkTail && consistentTail) checkTail.state = consistentTail;
        }
      }

      return details;
    }
    /** Appends optional placeholder at end */

  }, {
    key: "_appendPlaceholder",
    value: function _appendPlaceholder() {
      return new ChangeDetails();
    }
    /** Appends symbols considering flags */
    // $FlowFixMe no ideas

  }, {
    key: "append",
    value: function append(str, flags, tail) {
      if (!isString(str)) throw new Error('value should be string');
      var details = new ChangeDetails();
      var checkTail = isString(tail) ? new ContinuousTailDetails(String(tail)) : tail;
      if (flags.tail) flags._beforeTailState = this.state;

      for (var ci = 0; ci < str.length; ++ci) {
        details.aggregate(this._appendChar(str[ci], flags, checkTail));
      } // append tail but aggregate only tailShift


      if (checkTail != null) {
        details.tailShift += this.appendTail(checkTail).tailShift; // TODO it's a good idea to clear state after appending ends
        // but it causes bugs when one append calls another (when dynamic dispatch set rawInputValue)
        // this._resetBeforeTailState();
      }

      return details;
    }
    /** */

  }, {
    key: "remove",
    value: function remove() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      this._value = this.value.slice(0, fromPos) + this.value.slice(toPos);
      return new ChangeDetails();
    }
    /** Calls function and reapplies current value */

  }, {
    key: "withValueRefresh",
    value: function withValueRefresh(fn) {
      if (this._refreshing || !this.isInitialized) return fn();
      this._refreshing = true;
      var unmasked = this.unmaskedValue;
      var value = this.value;
      var ret = fn(); // try to update with raw value first to keep fixed chars

      if (this.resolve(value) !== value) {
        // or fallback to unmasked
        this.unmaskedValue = unmasked;
      }

      delete this._refreshing;
      return ret;
    }
    /**
      Prepares string before mask processing
      @protected
    */

  }, {
    key: "doPrepare",
    value: function doPrepare(str) {
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.prepare ? this.prepare(str, this, flags) : str;
    }
    /**
      Validates if value is acceptable
      @protected
    */

  }, {
    key: "doValidate",
    value: function doValidate(flags) {
      return (!this.validate || this.validate(this.value, this, flags)) && (!this.parent || this.parent.doValidate(flags));
    }
    /**
      Does additional processing in the end of editing
      @protected
    */

  }, {
    key: "doCommit",
    value: function doCommit() {
      if (this.commit) this.commit(this.value, this);
    }
    /** */

  }, {
    key: "splice",
    value: function splice(start, deleteCount, inserted, removeDirection) {
      var tailPos = start + deleteCount;
      var tail = this.extractTail(tailPos);
      var startChangePos = this.nearestInputPos(start, removeDirection);
      var changeDetails = new ChangeDetails({
        tailShift: startChangePos - start // adjust tailShift if start was aligned

      }).aggregate(this.remove(startChangePos)).aggregate(this.append(inserted, {
        input: true
      }, tail));
      return changeDetails;
    }
  }, {
    key: "state",
    get: function get() {
      return {
        _value: this.value
      };
    },
    set: function set(state) {
      this._value = state._value;
    }
  }, {
    key: "value",
    get: function get() {
      return this._value;
    },
    set: function set(value) {
      this.resolve(value);
    }
  }, {
    key: "unmaskedValue",
    get: function get() {
      return this.value;
    },
    set: function set(value) {
      this.reset();
      this.append(value, {}, '');
      this.doCommit();
    }
    /** */

  }, {
    key: "typedValue",
    get: function get() {
      return this.unmaskedValue;
    },
    set: function set(value) {
      this.unmaskedValue = value;
    }
    /** Value that includes raw user input */

  }, {
    key: "rawInputValue",
    get: function get() {
      return this.extractInput(0, this.value.length, {
        raw: true
      });
    },
    set: function set(value) {
      this.reset();
      this.append(value, {
        raw: true
      }, '');
      this.doCommit();
    }
    /** */

  }, {
    key: "isComplete",
    get: function get() {
      return true;
    }
  }]);

  return Masked;
}();

/** Get Masked class by mask type */
function maskedClass(mask) {
  if (mask == null) {
    throw new Error('mask property should be defined');
  }

  if (mask instanceof RegExp) return g.IMask.MaskedRegExp;
  if (isString(mask)) return g.IMask.MaskedPattern;
  if (mask instanceof Date || mask === Date) return g.IMask.MaskedDate;
  if (mask instanceof Number || typeof mask === 'number' || mask === Number) return g.IMask.MaskedNumber;
  if (Array.isArray(mask) || mask === Array) return g.IMask.MaskedDynamic; // $FlowFixMe

  if (mask.prototype instanceof g.IMask.Masked) return mask; // $FlowFixMe

  if (mask instanceof Function) return g.IMask.MaskedFunction;
  console.warn('Mask not found for mask', mask); // eslint-disable-line no-console

  return g.IMask.Masked;
}
/** Creates new {@link Masked} depending on mask type */

function createMask(opts) {
  opts = Object.assign({}, opts);
  var mask = opts.mask;
  if (mask instanceof g.IMask.Masked) return mask;
  var MaskedClass = maskedClass(mask);
  return new MaskedClass(opts);
}

var DEFAULT_INPUT_DEFINITIONS = {
  '0': /\d/,
  'a': /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
  // http://stackoverflow.com/a/22075070
  '*': /./
};
/** */

var PatternInputDefinition =
/*#__PURE__*/
function () {
  /** */

  /** */

  /** */

  /** */

  /** */

  /** */
  function PatternInputDefinition(opts) {
    _classCallCheck(this, PatternInputDefinition);

    var mask = opts.mask,
        blockOpts = _objectWithoutProperties(opts, ["mask"]);

    this.masked = createMask({
      mask: mask
    });
    Object.assign(this, blockOpts);
  }

  _createClass(PatternInputDefinition, [{
    key: "reset",
    value: function reset() {
      this._isFilled = false;
      this.masked.reset();
    }
  }, {
    key: "remove",
    value: function remove() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;

      if (fromPos === 0 && toPos >= 1) {
        this._isFilled = false;
        return this.masked.remove(fromPos, toPos);
      }

      return new ChangeDetails();
    }
  }, {
    key: "_appendChar",
    value: function _appendChar(str) {
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      if (this._isFilled) return new ChangeDetails();
      var state = this.masked.state; // simulate input

      var details = this.masked._appendChar(str, flags);

      if (details.inserted && this.doValidate(flags) === false) {
        details.inserted = details.rawInserted = '';
        this.masked.state = state;
      }

      if (!details.inserted && !this.isOptional && !this.lazy && !flags.input) {
        details.inserted = this.placeholderChar;
      }

      details.skip = !details.inserted && !this.isOptional;
      this._isFilled = Boolean(details.inserted);
      return details;
    }
  }, {
    key: "append",
    value: function append() {
      var _this$masked;

      return (_this$masked = this.masked).append.apply(_this$masked, arguments);
    }
  }, {
    key: "_appendPlaceholder",
    value: function _appendPlaceholder() {
      var details = new ChangeDetails();
      if (this._isFilled || this.isOptional) return details;
      this._isFilled = true;
      details.inserted = this.placeholderChar;
      return details;
    }
  }, {
    key: "extractTail",
    value: function extractTail() {
      var _this$masked2;

      return (_this$masked2 = this.masked).extractTail.apply(_this$masked2, arguments);
    }
  }, {
    key: "appendTail",
    value: function appendTail() {
      var _this$masked3;

      return (_this$masked3 = this.masked).appendTail.apply(_this$masked3, arguments);
    }
  }, {
    key: "extractInput",
    value: function extractInput() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      var flags = arguments.length > 2 ? arguments[2] : undefined;
      return this.masked.extractInput(fromPos, toPos, flags);
    }
  }, {
    key: "nearestInputPos",
    value: function nearestInputPos(cursorPos) {
      var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DIRECTION.NONE;
      var minPos = 0;
      var maxPos = this.value.length;
      var boundPos = Math.min(Math.max(cursorPos, minPos), maxPos);

      switch (direction) {
        case DIRECTION.LEFT:
        case DIRECTION.FORCE_LEFT:
          return this.isComplete ? boundPos : minPos;

        case DIRECTION.RIGHT:
        case DIRECTION.FORCE_RIGHT:
          return this.isComplete ? boundPos : maxPos;

        case DIRECTION.NONE:
        default:
          return boundPos;
      }
    }
  }, {
    key: "doValidate",
    value: function doValidate() {
      var _this$masked4, _this$parent;

      return (_this$masked4 = this.masked).doValidate.apply(_this$masked4, arguments) && (!this.parent || (_this$parent = this.parent).doValidate.apply(_this$parent, arguments));
    }
  }, {
    key: "doCommit",
    value: function doCommit() {
      this.masked.doCommit();
    }
  }, {
    key: "value",
    get: function get() {
      return this.masked.value || (this._isFilled && !this.isOptional ? this.placeholderChar : '');
    }
  }, {
    key: "unmaskedValue",
    get: function get() {
      return this.masked.unmaskedValue;
    }
  }, {
    key: "isComplete",
    get: function get() {
      return Boolean(this.masked.value) || this.isOptional;
    }
  }, {
    key: "state",
    get: function get() {
      return {
        masked: this.masked.state,
        _isFilled: this._isFilled
      };
    },
    set: function set(state) {
      this.masked.state = state.masked;
      this._isFilled = state._isFilled;
    }
  }]);

  return PatternInputDefinition;
}();

var PatternFixedDefinition =
/*#__PURE__*/
function () {
  /** */

  /** */

  /** */

  /** */
  function PatternFixedDefinition(opts) {
    _classCallCheck(this, PatternFixedDefinition);

    Object.assign(this, opts);
    this._value = '';
  }

  _createClass(PatternFixedDefinition, [{
    key: "reset",
    value: function reset() {
      this._isRawInput = false;
      this._value = '';
    }
  }, {
    key: "remove",
    value: function remove() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._value.length;
      this._value = this._value.slice(0, fromPos) + this._value.slice(toPos);
      if (!this._value) this._isRawInput = false;
      return new ChangeDetails();
    }
  }, {
    key: "nearestInputPos",
    value: function nearestInputPos(cursorPos) {
      var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DIRECTION.NONE;
      var minPos = 0;
      var maxPos = this._value.length;

      switch (direction) {
        case DIRECTION.LEFT:
        case DIRECTION.FORCE_LEFT:
          return minPos;

        case DIRECTION.NONE:
        case DIRECTION.RIGHT:
        case DIRECTION.FORCE_RIGHT:
        default:
          return maxPos;
      }
    }
  }, {
    key: "extractInput",
    value: function extractInput() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._value.length;
      var flags = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return flags.raw && this._isRawInput && this._value.slice(fromPos, toPos) || '';
    }
  }, {
    key: "_appendChar",
    value: function _appendChar(str) {
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var details = new ChangeDetails();
      if (this._value) return details;
      var appended = this.char === str[0];
      var isResolved = appended && (this.isUnmasking || flags.input || flags.raw) && !flags.tail;
      if (isResolved) details.rawInserted = this.char;
      this._value = details.inserted = this.char;
      this._isRawInput = isResolved && (flags.raw || flags.input);
      return details;
    }
  }, {
    key: "_appendPlaceholder",
    value: function _appendPlaceholder() {
      var details = new ChangeDetails();
      if (this._value) return details;
      this._value = details.inserted = this.char;
      return details;
    }
  }, {
    key: "extractTail",
    value: function extractTail() {
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      return new ContinuousTailDetails('');
    } // $FlowFixMe no ideas

  }, {
    key: "appendTail",
    value: function appendTail(tail) {
      if (isString(tail)) tail = new ContinuousTailDetails(String(tail));
      return tail.appendTo(this);
    }
  }, {
    key: "append",
    value: function append(str, flags, tail) {
      var details = this._appendChar(str, flags);

      if (tail != null) {
        details.tailShift += this.appendTail(tail).tailShift;
      }

      return details;
    }
  }, {
    key: "doCommit",
    value: function doCommit() {}
  }, {
    key: "value",
    get: function get() {
      return this._value;
    }
  }, {
    key: "unmaskedValue",
    get: function get() {
      return this.isUnmasking ? this.value : '';
    }
  }, {
    key: "isComplete",
    get: function get() {
      return true;
    }
  }, {
    key: "state",
    get: function get() {
      return {
        _value: this._value,
        _isRawInput: this._isRawInput
      };
    },
    set: function set(state) {
      Object.assign(this, state);
    }
  }]);

  return PatternFixedDefinition;
}();

var ChunksTailDetails =
/*#__PURE__*/
function () {
  /** */
  function ChunksTailDetails() {
    var chunks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    _classCallCheck(this, ChunksTailDetails);

    this.chunks = chunks;
    this.from = from;
  }

  _createClass(ChunksTailDetails, [{
    key: "toString",
    value: function toString() {
      return this.chunks.map(String).join('');
    } // $FlowFixMe no ideas

  }, {
    key: "extend",
    value: function extend(tailChunk) {
      if (!String(tailChunk)) return;
      if (isString(tailChunk)) tailChunk = new ContinuousTailDetails(String(tailChunk));
      var lastChunk = this.chunks[this.chunks.length - 1];
      var extendLast = lastChunk && ( // if stops are same or tail has no stop
      lastChunk.stop === tailChunk.stop || tailChunk.stop == null) && // if tail chunk goes just after last chunk
      tailChunk.from === lastChunk.from + lastChunk.toString().length;

      if (tailChunk instanceof ContinuousTailDetails) {
        // check the ability to extend previous chunk
        if (extendLast) {
          // extend previous chunk
          lastChunk.extend(tailChunk.toString());
        } else {
          // append new chunk
          this.chunks.push(tailChunk);
        }
      } else if (tailChunk instanceof ChunksTailDetails) {
        if (tailChunk.stop == null) {
          // unwrap floating chunks to parent, keeping `from` pos
          var firstTailChunk;

          while (tailChunk.chunks.length && tailChunk.chunks[0].stop == null) {
            firstTailChunk = tailChunk.chunks.shift();
            firstTailChunk.from += tailChunk.from;
            this.extend(firstTailChunk);
          }
        } // if tail chunk still has value


        if (tailChunk.toString()) {
          // if chunks contains stops, then popup stop to container
          tailChunk.stop = tailChunk.blockIndex;
          this.chunks.push(tailChunk);
        }
      }
    }
  }, {
    key: "appendTo",
    value: function appendTo(masked) {
      if (!(masked instanceof g.IMask.MaskedPattern)) {
        var tail = new ContinuousTailDetails(this.toString());
        return tail.appendTo(masked);
      }

      var details = new ChangeDetails();

      for (var ci = 0; ci < this.chunks.length && !details.skip; ++ci) {
        var chunk = this.chunks[ci];

        var lastBlockIter = masked._mapPosToBlock(masked.value.length);

        var stop = chunk.stop;
        var chunkBlock = void 0;

        if (stop && ( // if block not found or stop is behind lastBlock
        !lastBlockIter || lastBlockIter.index <= stop)) {
          if (chunk instanceof ChunksTailDetails || // for continuous block also check if stop is exist
          masked._stops.indexOf(stop) >= 0) {
            details.aggregate(masked._appendPlaceholder(stop));
          }

          chunkBlock = chunk instanceof ChunksTailDetails && masked._blocks[stop];
        }

        if (chunkBlock) {
          var tailDetails = chunkBlock.appendTail(chunk);
          tailDetails.skip = false; // always ignore skip, it will be set on last

          details.aggregate(tailDetails);
          masked._value += tailDetails.inserted; // get not inserted chars

          var remainChars = chunk.toString().slice(tailDetails.rawInserted.length);
          if (remainChars) details.aggregate(masked.append(remainChars, {
            tail: true
          }));
        } else {
          details.aggregate(masked.append(chunk.toString(), {
            tail: true
          }));
        }
      }
      return details;
    }
  }, {
    key: "shiftBefore",
    value: function shiftBefore(pos) {
      if (this.from >= pos || !this.chunks.length) return '';
      var chunkShiftPos = pos - this.from;
      var ci = 0;

      while (ci < this.chunks.length) {
        var chunk = this.chunks[ci];
        var shiftChar = chunk.shiftBefore(chunkShiftPos);

        if (chunk.toString()) {
          // chunk still contains value
          // but not shifted - means no more available chars to shift
          if (!shiftChar) break;
          ++ci;
        } else {
          // clean if chunk has no value
          this.chunks.splice(ci, 1);
        }

        if (shiftChar) return shiftChar;
      }

      return '';
    }
  }, {
    key: "state",
    get: function get() {
      return {
        chunks: this.chunks.map(function (c) {
          return c.state;
        }),
        from: this.from,
        stop: this.stop,
        blockIndex: this.blockIndex
      };
    },
    set: function set(state) {
      var chunks = state.chunks,
          props = _objectWithoutProperties(state, ["chunks"]);

      Object.assign(this, props);
      this.chunks = chunks.map(function (cstate) {
        var chunk = "chunks" in cstate ? new ChunksTailDetails() : new ContinuousTailDetails(); // $FlowFixMe already checked above

        chunk.state = cstate;
        return chunk;
      });
    }
  }]);

  return ChunksTailDetails;
}();

/**
  Pattern mask
  @param {Object} opts
  @param {Object} opts.blocks
  @param {Object} opts.definitions
  @param {string} opts.placeholderChar
  @param {boolean} opts.lazy
*/
var MaskedPattern =
/*#__PURE__*/
function (_Masked) {
  _inherits(MaskedPattern, _Masked);

  /** */

  /** */

  /** Single char for empty input */

  /** Show placeholder only when needed */
  function MaskedPattern() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, MaskedPattern);

    // TODO type $Shape<MaskedPatternOptions>={} does not work
    opts.definitions = Object.assign({}, DEFAULT_INPUT_DEFINITIONS, opts.definitions);
    return _possibleConstructorReturn(this, _getPrototypeOf(MaskedPattern).call(this, Object.assign({}, MaskedPattern.DEFAULTS, {}, opts)));
  }
  /**
    @override
    @param {Object} opts
  */

  _createClass(MaskedPattern, [{
    key: "_update",
    value: function _update() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      opts.definitions = Object.assign({}, this.definitions, opts.definitions);

      _get(_getPrototypeOf(MaskedPattern.prototype), "_update", this).call(this, opts);

      this._rebuildMask();
    }
    /** */

  }, {
    key: "_rebuildMask",
    value: function _rebuildMask() {
      var _this = this;

      var defs = this.definitions;
      this._blocks = [];
      this._stops = [];
      this._maskedBlocks = {};
      var pattern = this.mask;
      if (!pattern || !defs) return;
      var unmaskingBlock = false;
      var optionalBlock = false;

      for (var i = 0; i < pattern.length; ++i) {
        if (this.blocks) {
          var _ret = function () {
            var p = pattern.slice(i);
            var bNames = Object.keys(_this.blocks).filter(function (bName) {
              return p.indexOf(bName) === 0;
            }); // order by key length

            bNames.sort(function (a, b) {
              return b.length - a.length;
            }); // use block name with max length

            var bName = bNames[0];

            if (bName) {
              var maskedBlock = createMask(Object.assign({
                parent: _this,
                lazy: _this.lazy,
                placeholderChar: _this.placeholderChar,
                overwrite: _this.overwrite
              }, _this.blocks[bName]));

              if (maskedBlock) {
                _this._blocks.push(maskedBlock); // store block index


                if (!_this._maskedBlocks[bName]) _this._maskedBlocks[bName] = [];

                _this._maskedBlocks[bName].push(_this._blocks.length - 1);
              }

              i += bName.length - 1;
              return "continue";
            }
          }();

          if (_ret === "continue") continue;
        }

        var char = pattern[i];

        var _isInput = char in defs;

        if (char === MaskedPattern.STOP_CHAR) {
          this._stops.push(this._blocks.length);

          continue;
        }

        if (char === '{' || char === '}') {
          unmaskingBlock = !unmaskingBlock;
          continue;
        }

        if (char === '[' || char === ']') {
          optionalBlock = !optionalBlock;
          continue;
        }

        if (char === MaskedPattern.ESCAPE_CHAR) {
          ++i;
          char = pattern[i];
          if (!char) break;
          _isInput = false;
        }

        var def = _isInput ? new PatternInputDefinition({
          parent: this,
          lazy: this.lazy,
          placeholderChar: this.placeholderChar,
          mask: defs[char],
          isOptional: optionalBlock
        }) : new PatternFixedDefinition({
          char: char,
          isUnmasking: unmaskingBlock
        });

        this._blocks.push(def);
      }
    }
    /**
      @override
    */

  }, {
    key: "reset",

    /**
      @override
    */
    value: function reset() {
      _get(_getPrototypeOf(MaskedPattern.prototype), "reset", this).call(this);

      this._blocks.forEach(function (b) {
        return b.reset();
      });
    }
    /**
      @override
    */

  }, {
    key: "doCommit",

    /**
      @override
    */
    value: function doCommit() {
      this._blocks.forEach(function (b) {
        return b.doCommit();
      });

      _get(_getPrototypeOf(MaskedPattern.prototype), "doCommit", this).call(this);
    }
    /**
      @override
    */

  }, {
    key: "appendTail",

    /**
      @override
    */
    value: function appendTail(tail) {
      return _get(_getPrototypeOf(MaskedPattern.prototype), "appendTail", this).call(this, tail).aggregate(this._appendPlaceholder());
    }
    /**
      @override
    */

  }, {
    key: "_appendCharRaw",
    value: function _appendCharRaw(ch) {
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      ch = this.doPrepare(ch, flags);

      var blockIter = this._mapPosToBlock(this.value.length);

      var details = new ChangeDetails();
      if (!blockIter) return details;

      for (var bi = blockIter.index;; ++bi) {
        var _block = this._blocks[bi];
        if (!_block) break;

        var blockDetails = _block._appendChar(ch, flags);

        var skip = blockDetails.skip;
        details.aggregate(blockDetails);
        if (skip || blockDetails.rawInserted) break; // go next char
      }

      return details;
    }
    /**
      @override
    */

  }, {
    key: "extractTail",
    value: function extractTail() {
      var _this2 = this;

      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      var chunkTail = new ChunksTailDetails();
      if (fromPos === toPos) return chunkTail;

      this._forEachBlocksInRange(fromPos, toPos, function (b, bi, bFromPos, bToPos) {
        var blockChunk = b.extractTail(bFromPos, bToPos);
        blockChunk.stop = _this2._findStopBefore(bi);
        blockChunk.from = _this2._blockStartPos(bi);
        if (blockChunk instanceof ChunksTailDetails) blockChunk.blockIndex = bi;
        chunkTail.extend(blockChunk);
      });

      return chunkTail;
    }
    /**
      @override
    */

  }, {
    key: "extractInput",
    value: function extractInput() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      var flags = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      if (fromPos === toPos) return '';
      var input = '';

      this._forEachBlocksInRange(fromPos, toPos, function (b, _, fromPos, toPos) {
        input += b.extractInput(fromPos, toPos, flags);
      });

      return input;
    }
  }, {
    key: "_findStopBefore",
    value: function _findStopBefore(blockIndex) {
      var stopBefore;

      for (var si = 0; si < this._stops.length; ++si) {
        var stop = this._stops[si];
        if (stop <= blockIndex) stopBefore = stop;else break;
      }

      return stopBefore;
    }
    /** Appends placeholder depending on laziness */

  }, {
    key: "_appendPlaceholder",
    value: function _appendPlaceholder(toBlockIndex) {
      var _this3 = this;

      var details = new ChangeDetails();
      if (this.lazy && toBlockIndex == null) return details;

      var startBlockIter = this._mapPosToBlock(this.value.length);

      if (!startBlockIter) return details;
      var startBlockIndex = startBlockIter.index;
      var endBlockIndex = toBlockIndex != null ? toBlockIndex : this._blocks.length;

      this._blocks.slice(startBlockIndex, endBlockIndex).forEach(function (b) {
        if (!b.lazy || toBlockIndex != null) {
          // $FlowFixMe `_blocks` may not be present
          var args = b._blocks != null ? [b._blocks.length] : [];

          var bDetails = b._appendPlaceholder.apply(b, args);

          _this3._value += bDetails.inserted;
          details.aggregate(bDetails);
        }
      });

      return details;
    }
    /** Finds block in pos */

  }, {
    key: "_mapPosToBlock",
    value: function _mapPosToBlock(pos) {
      var accVal = '';

      for (var bi = 0; bi < this._blocks.length; ++bi) {
        var _block2 = this._blocks[bi];
        var blockStartPos = accVal.length;
        accVal += _block2.value;

        if (pos <= accVal.length) {
          return {
            index: bi,
            offset: pos - blockStartPos
          };
        }
      }
    }
    /** */

  }, {
    key: "_blockStartPos",
    value: function _blockStartPos(blockIndex) {
      return this._blocks.slice(0, blockIndex).reduce(function (pos, b) {
        return pos += b.value.length;
      }, 0);
    }
    /** */

  }, {
    key: "_forEachBlocksInRange",
    value: function _forEachBlocksInRange(fromPos) {
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      var fn = arguments.length > 2 ? arguments[2] : undefined;

      var fromBlockIter = this._mapPosToBlock(fromPos);

      if (fromBlockIter) {
        var toBlockIter = this._mapPosToBlock(toPos); // process first block


        var isSameBlock = toBlockIter && fromBlockIter.index === toBlockIter.index;
        var fromBlockStartPos = fromBlockIter.offset;
        var fromBlockEndPos = toBlockIter && isSameBlock ? toBlockIter.offset : this._blocks[fromBlockIter.index].value.length;
        fn(this._blocks[fromBlockIter.index], fromBlockIter.index, fromBlockStartPos, fromBlockEndPos);

        if (toBlockIter && !isSameBlock) {
          // process intermediate blocks
          for (var bi = fromBlockIter.index + 1; bi < toBlockIter.index; ++bi) {
            fn(this._blocks[bi], bi, 0, this._blocks[bi].value.length);
          } // process last block


          fn(this._blocks[toBlockIter.index], toBlockIter.index, 0, toBlockIter.offset);
        }
      }
    }
    /**
      @override
    */

  }, {
    key: "remove",
    value: function remove() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;

      var removeDetails = _get(_getPrototypeOf(MaskedPattern.prototype), "remove", this).call(this, fromPos, toPos);

      this._forEachBlocksInRange(fromPos, toPos, function (b, _, bFromPos, bToPos) {
        removeDetails.aggregate(b.remove(bFromPos, bToPos));
      });

      return removeDetails;
    }
    /**
      @override
    */

  }, {
    key: "nearestInputPos",
    value: function nearestInputPos(cursorPos) {
      var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DIRECTION.NONE;
      // TODO refactor - extract alignblock
      var beginBlockData = this._mapPosToBlock(cursorPos) || {
        index: 0,
        offset: 0
      };
      var beginBlockOffset = beginBlockData.offset,
          beginBlockIndex = beginBlockData.index;
      var beginBlock = this._blocks[beginBlockIndex];
      if (!beginBlock) return cursorPos;
      var beginBlockCursorPos = beginBlockOffset; // if position inside block - try to adjust it

      if (beginBlockCursorPos !== 0 && beginBlockCursorPos < beginBlock.value.length) {
        beginBlockCursorPos = beginBlock.nearestInputPos(beginBlockOffset, forceDirection(direction));
      }

      var cursorAtRight = beginBlockCursorPos === beginBlock.value.length;
      var cursorAtLeft = beginBlockCursorPos === 0; //  cursor is INSIDE first block (not at bounds)

      if (!cursorAtLeft && !cursorAtRight) return this._blockStartPos(beginBlockIndex) + beginBlockCursorPos;
      var searchBlockIndex = cursorAtRight ? beginBlockIndex + 1 : beginBlockIndex;

      if (direction === DIRECTION.NONE) {
        // NONE direction used to calculate start input position if no chars were removed
        // FOR NONE:
        // -
        // input|any
        // ->
        //  any|input
        // <-
        //  filled-input|any
        // check if first block at left is input
        if (searchBlockIndex > 0) {
          var blockIndexAtLeft = searchBlockIndex - 1;
          var blockAtLeft = this._blocks[blockIndexAtLeft];
          var blockInputPos = blockAtLeft.nearestInputPos(0, DIRECTION.NONE); // is input

          if (!blockAtLeft.value.length || blockInputPos !== blockAtLeft.value.length) {
            return this._blockStartPos(searchBlockIndex);
          }
        } // ->


        var firstInputAtRight = searchBlockIndex;

        for (var bi = firstInputAtRight; bi < this._blocks.length; ++bi) {
          var blockAtRight = this._blocks[bi];

          var _blockInputPos = blockAtRight.nearestInputPos(0, DIRECTION.NONE);

          if (!blockAtRight.value.length || _blockInputPos !== blockAtRight.value.length) {
            return this._blockStartPos(bi) + _blockInputPos;
          }
        } // <-
        // find first non-fixed symbol


        for (var _bi = searchBlockIndex - 1; _bi >= 0; --_bi) {
          var _block3 = this._blocks[_bi];

          var _blockInputPos2 = _block3.nearestInputPos(0, DIRECTION.NONE); // is input


          if (!_block3.value.length || _blockInputPos2 !== _block3.value.length) {
            return this._blockStartPos(_bi) + _block3.value.length;
          }
        }

        return cursorPos;
      }

      if (direction === DIRECTION.LEFT || direction === DIRECTION.FORCE_LEFT) {
        // -
        //  any|filled-input
        // <-
        //  any|first not empty is not-len-aligned
        //  not-0-aligned|any
        // ->
        //  any|not-len-aligned or end
        // check if first block at right is filled input
        var firstFilledBlockIndexAtRight;

        for (var _bi2 = searchBlockIndex; _bi2 < this._blocks.length; ++_bi2) {
          if (this._blocks[_bi2].value) {
            firstFilledBlockIndexAtRight = _bi2;
            break;
          }
        }

        if (firstFilledBlockIndexAtRight != null) {
          var filledBlock = this._blocks[firstFilledBlockIndexAtRight];

          var _blockInputPos3 = filledBlock.nearestInputPos(0, DIRECTION.RIGHT);

          if (_blockInputPos3 === 0 && filledBlock.unmaskedValue.length) {
            // filled block is input
            return this._blockStartPos(firstFilledBlockIndexAtRight) + _blockInputPos3;
          }
        } // <-
        // find this vars


        var firstFilledInputBlockIndex = -1;
        var firstEmptyInputBlockIndex; // TODO consider nested empty inputs

        for (var _bi3 = searchBlockIndex - 1; _bi3 >= 0; --_bi3) {
          var _block4 = this._blocks[_bi3];

          var _blockInputPos4 = _block4.nearestInputPos(_block4.value.length, DIRECTION.FORCE_LEFT);

          if (!_block4.value || _blockInputPos4 !== 0) firstEmptyInputBlockIndex = _bi3;

          if (_blockInputPos4 !== 0) {
            if (_blockInputPos4 !== _block4.value.length) {
              // aligned inside block - return immediately
              return this._blockStartPos(_bi3) + _blockInputPos4;
            } else {
              // found filled
              firstFilledInputBlockIndex = _bi3;
              break;
            }
          }
        }

        if (direction === DIRECTION.LEFT) {
          // try find first empty input before start searching position only when not forced
          for (var _bi4 = firstFilledInputBlockIndex + 1; _bi4 <= Math.min(searchBlockIndex, this._blocks.length - 1); ++_bi4) {
            var _block5 = this._blocks[_bi4];

            var _blockInputPos5 = _block5.nearestInputPos(0, DIRECTION.NONE);

            var blockAlignedPos = this._blockStartPos(_bi4) + _blockInputPos5;

            if (blockAlignedPos > cursorPos) break; // if block is not lazy input

            if (_blockInputPos5 !== _block5.value.length) return blockAlignedPos;
          }
        } // process overflow


        if (firstFilledInputBlockIndex >= 0) {
          return this._blockStartPos(firstFilledInputBlockIndex) + this._blocks[firstFilledInputBlockIndex].value.length;
        } // for lazy if has aligned left inside fixed and has came to the start - use start position


        if (direction === DIRECTION.FORCE_LEFT || this.lazy && !this.extractInput() && !isInput(this._blocks[searchBlockIndex])) {
          return 0;
        }

        if (firstEmptyInputBlockIndex != null) {
          return this._blockStartPos(firstEmptyInputBlockIndex);
        } // find first input


        for (var _bi5 = searchBlockIndex; _bi5 < this._blocks.length; ++_bi5) {
          var _block6 = this._blocks[_bi5];

          var _blockInputPos6 = _block6.nearestInputPos(0, DIRECTION.NONE); // is input


          if (!_block6.value.length || _blockInputPos6 !== _block6.value.length) {
            return this._blockStartPos(_bi5) + _blockInputPos6;
          }
        }

        return 0;
      }

      if (direction === DIRECTION.RIGHT || direction === DIRECTION.FORCE_RIGHT) {
        // ->
        //  any|not-len-aligned and filled
        //  any|not-len-aligned
        // <-
        //  not-0-aligned or start|any
        var firstInputBlockAlignedIndex;
        var firstInputBlockAlignedPos;

        for (var _bi6 = searchBlockIndex; _bi6 < this._blocks.length; ++_bi6) {
          var _block7 = this._blocks[_bi6];

          var _blockInputPos7 = _block7.nearestInputPos(0, DIRECTION.NONE);

          if (_blockInputPos7 !== _block7.value.length) {
            firstInputBlockAlignedPos = this._blockStartPos(_bi6) + _blockInputPos7;
            firstInputBlockAlignedIndex = _bi6;
            break;
          }
        }

        if (firstInputBlockAlignedIndex != null && firstInputBlockAlignedPos != null) {
          for (var _bi7 = firstInputBlockAlignedIndex; _bi7 < this._blocks.length; ++_bi7) {
            var _block8 = this._blocks[_bi7];

            var _blockInputPos8 = _block8.nearestInputPos(0, DIRECTION.FORCE_RIGHT);

            if (_blockInputPos8 !== _block8.value.length) {
              return this._blockStartPos(_bi7) + _blockInputPos8;
            }
          }

          return direction === DIRECTION.FORCE_RIGHT ? this.value.length : firstInputBlockAlignedPos;
        }

        for (var _bi8 = Math.min(searchBlockIndex, this._blocks.length - 1); _bi8 >= 0; --_bi8) {
          var _block9 = this._blocks[_bi8];

          var _blockInputPos9 = _block9.nearestInputPos(_block9.value.length, DIRECTION.LEFT);

          if (_blockInputPos9 !== 0) {
            var alignedPos = this._blockStartPos(_bi8) + _blockInputPos9;

            if (alignedPos >= cursorPos) return alignedPos;
            break;
          }
        }
      }

      return cursorPos;
    }
    /** Get block by name */

  }, {
    key: "maskedBlock",
    value: function maskedBlock(name) {
      return this.maskedBlocks(name)[0];
    }
    /** Get all blocks by name */

  }, {
    key: "maskedBlocks",
    value: function maskedBlocks(name) {
      var _this4 = this;

      var indices = this._maskedBlocks[name];
      if (!indices) return [];
      return indices.map(function (gi) {
        return _this4._blocks[gi];
      });
    }
  }, {
    key: "state",
    get: function get() {
      return Object.assign({}, _get(_getPrototypeOf(MaskedPattern.prototype), "state", this), {
        _blocks: this._blocks.map(function (b) {
          return b.state;
        })
      });
    },
    set: function set(state) {
      var _blocks = state._blocks,
          maskedState = _objectWithoutProperties(state, ["_blocks"]);

      this._blocks.forEach(function (b, bi) {
        return b.state = _blocks[bi];
      });

      _set(_getPrototypeOf(MaskedPattern.prototype), "state", maskedState, this, true);
    }
  }, {
    key: "isComplete",
    get: function get() {
      return this._blocks.every(function (b) {
        return b.isComplete;
      });
    }
  }, {
    key: "unmaskedValue",
    get: function get() {
      return this._blocks.reduce(function (str, b) {
        return str += b.unmaskedValue;
      }, '');
    },
    set: function set(unmaskedValue) {
      _set(_getPrototypeOf(MaskedPattern.prototype), "unmaskedValue", unmaskedValue, this, true);
    }
    /**
      @override
    */

  }, {
    key: "value",
    get: function get() {
      // TODO return _value when not in change?
      return this._blocks.reduce(function (str, b) {
        return str += b.value;
      }, '');
    },
    set: function set(value) {
      _set(_getPrototypeOf(MaskedPattern.prototype), "value", value, this, true);
    }
  }]);

  return MaskedPattern;
}(Masked);
MaskedPattern.DEFAULTS = {
  lazy: true,
  placeholderChar: '_'
};
MaskedPattern.STOP_CHAR = '`';
MaskedPattern.ESCAPE_CHAR = '\\';
MaskedPattern.InputDefinition = PatternInputDefinition;
MaskedPattern.FixedDefinition = PatternFixedDefinition;

function isInput(block) {
  if (!block) return false;
  var value = block.value;
  return !value || block.nearestInputPos(0, DIRECTION.NONE) !== value.length;
}

/** Pattern which accepts ranges */
var MaskedRange =
/*#__PURE__*/
function (_MaskedPattern) {
  _inherits(MaskedRange, _MaskedPattern);

  function MaskedRange() {
    _classCallCheck(this, MaskedRange);

    return _possibleConstructorReturn(this, _getPrototypeOf(MaskedRange).apply(this, arguments));
  }

  _createClass(MaskedRange, [{
    key: "_update",

    /**
      @override
    */
    value: function _update(opts) {
      // TODO type
      opts = Object.assign({
        to: this.to || 0,
        from: this.from || 0
      }, opts);
      var maxLength = String(opts.to).length;
      if (opts.maxLength != null) maxLength = Math.max(maxLength, opts.maxLength);
      opts.maxLength = maxLength;
      var fromStr = String(opts.from).padStart(maxLength, '0');
      var toStr = String(opts.to).padStart(maxLength, '0');
      var sameCharsCount = 0;

      while (sameCharsCount < toStr.length && toStr[sameCharsCount] === fromStr[sameCharsCount]) {
        ++sameCharsCount;
      }

      opts.mask = toStr.slice(0, sameCharsCount).replace(/0/g, '\\0') + '0'.repeat(maxLength - sameCharsCount);

      _get(_getPrototypeOf(MaskedRange.prototype), "_update", this).call(this, opts);
    }
    /**
      @override
    */

  }, {
    key: "boundaries",
    value: function boundaries(str) {
      var minstr = '';
      var maxstr = '';

      var _ref = str.match(/^(\D*)(\d*)(\D*)/) || [],
          _ref2 = _slicedToArray(_ref, 3),
          placeholder = _ref2[1],
          num = _ref2[2];

      if (num) {
        minstr = '0'.repeat(placeholder.length) + num;
        maxstr = '9'.repeat(placeholder.length) + num;
      }

      minstr = minstr.padEnd(this.maxLength, '0');
      maxstr = maxstr.padEnd(this.maxLength, '9');
      return [minstr, maxstr];
    }
    /**
      @override
    */

  }, {
    key: "doPrepare",
    value: function doPrepare(str) {
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      str = _get(_getPrototypeOf(MaskedRange.prototype), "doPrepare", this).call(this, str, flags).replace(/\D/g, '');
      if (!this.autofix) return str;
      var fromStr = String(this.from).padStart(this.maxLength, '0');
      var toStr = String(this.to).padStart(this.maxLength, '0');
      var val = this.value;
      var prepStr = '';

      for (var ci = 0; ci < str.length; ++ci) {
        var nextVal = val + prepStr + str[ci];

        var _this$boundaries = this.boundaries(nextVal),
            _this$boundaries2 = _slicedToArray(_this$boundaries, 2),
            minstr = _this$boundaries2[0],
            maxstr = _this$boundaries2[1];

        if (Number(maxstr) < this.from) prepStr += fromStr[nextVal.length - 1];else if (Number(minstr) > this.to) prepStr += toStr[nextVal.length - 1];else prepStr += str[ci];
      }

      return prepStr;
    }
    /**
      @override
    */

  }, {
    key: "doValidate",
    value: function doValidate() {
      var _get2;

      var str = this.value;
      var firstNonZero = str.search(/[^0]/);
      if (firstNonZero === -1 && str.length <= this._matchFrom) return true;

      var _this$boundaries3 = this.boundaries(str),
          _this$boundaries4 = _slicedToArray(_this$boundaries3, 2),
          minstr = _this$boundaries4[0],
          maxstr = _this$boundaries4[1];

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return this.from <= Number(maxstr) && Number(minstr) <= this.to && (_get2 = _get(_getPrototypeOf(MaskedRange.prototype), "doValidate", this)).call.apply(_get2, [this].concat(args));
    }
  }, {
    key: "_matchFrom",

    /**
      Optionally sets max length of pattern.
      Used when pattern length is longer then `to` param length. Pads zeros at start in this case.
    */

    /** Min bound */

    /** Max bound */

    /** */
    get: function get() {
      return this.maxLength - String(this.from).length;
    }
  }, {
    key: "isComplete",
    get: function get() {
      return _get(_getPrototypeOf(MaskedRange.prototype), "isComplete", this) && Boolean(this.value);
    }
  }]);

  return MaskedRange;
}(MaskedPattern);

/** Date mask */

var MaskedDate =
/*#__PURE__*/
function (_MaskedPattern) {
  _inherits(MaskedDate, _MaskedPattern);

  /** Parse string to Date */

  /** Format Date to string */

  /** Pattern mask for date according to {@link MaskedDate#format} */

  /** Start date */

  /** End date */

  /** */

  /**
    @param {Object} opts
  */
  function MaskedDate(opts) {
    _classCallCheck(this, MaskedDate);

    return _possibleConstructorReturn(this, _getPrototypeOf(MaskedDate).call(this, Object.assign({}, MaskedDate.DEFAULTS, {}, opts)));
  }
  /**
    @override
  */

  _createClass(MaskedDate, [{
    key: "_update",
    value: function _update(opts) {
      if (opts.mask === Date) delete opts.mask;
      if (opts.pattern) opts.mask = opts.pattern;
      var blocks = opts.blocks;
      opts.blocks = Object.assign({}, MaskedDate.GET_DEFAULT_BLOCKS()); // adjust year block

      if (opts.min) opts.blocks.Y.from = opts.min.getFullYear();
      if (opts.max) opts.blocks.Y.to = opts.max.getFullYear();

      if (opts.min && opts.max && opts.blocks.Y.from === opts.blocks.Y.to) {
        opts.blocks.m.from = opts.min.getMonth() + 1;
        opts.blocks.m.to = opts.max.getMonth() + 1;

        if (opts.blocks.m.from === opts.blocks.m.to) {
          opts.blocks.d.from = opts.min.getDate();
          opts.blocks.d.to = opts.max.getDate();
        }
      }

      Object.assign(opts.blocks, blocks); // add autofix

      Object.keys(opts.blocks).forEach(function (bk) {
        var b = opts.blocks[bk];
        if (!('autofix' in b)) b.autofix = opts.autofix;
      });

      _get(_getPrototypeOf(MaskedDate.prototype), "_update", this).call(this, opts);
    }
    /**
      @override
    */

  }, {
    key: "doValidate",
    value: function doValidate() {
      var _get2;

      var date = this.date;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return (_get2 = _get(_getPrototypeOf(MaskedDate.prototype), "doValidate", this)).call.apply(_get2, [this].concat(args)) && (!this.isComplete || this.isDateExist(this.value) && date != null && (this.min == null || this.min <= date) && (this.max == null || date <= this.max));
    }
    /** Checks if date is exists */

  }, {
    key: "isDateExist",
    value: function isDateExist(str) {
      return this.format(this.parse(str)) === str;
    }
    /** Parsed Date */

  }, {
    key: "date",
    get: function get() {
      return this.isComplete ? this.parse(this.value) : null;
    },
    set: function set(date) {
      this.value = this.format(date);
    }
    /**
      @override
    */

  }, {
    key: "typedValue",
    get: function get() {
      return this.date;
    },
    set: function set(value) {
      this.date = value;
    }
  }]);

  return MaskedDate;
}(MaskedPattern);
MaskedDate.DEFAULTS = {
  pattern: 'd{.}`m{.}`Y',
  format: function format(date) {
    var day = String(date.getDate()).padStart(2, '0');
    var month = String(date.getMonth() + 1).padStart(2, '0');
    var year = date.getFullYear();
    return [day, month, year].join('.');
  },
  parse: function parse(str) {
    var _str$split = str.split('.'),
        _str$split2 = _slicedToArray(_str$split, 3),
        day = _str$split2[0],
        month = _str$split2[1],
        year = _str$split2[2];

    return new Date(year, month - 1, day);
  }
};

MaskedDate.GET_DEFAULT_BLOCKS = function () {
  return {
    d: {
      mask: MaskedRange,
      from: 1,
      to: 31,
      maxLength: 2
    },
    m: {
      mask: MaskedRange,
      from: 1,
      to: 12,
      maxLength: 2
    },
    Y: {
      mask: MaskedRange,
      from: 1900,
      to: 9999
    }
  };
};

/**
  Generic element API to use with mask
  @interface
*/
var MaskElement =
/*#__PURE__*/
function () {
  function MaskElement() {
    _classCallCheck(this, MaskElement);
  }

  _createClass(MaskElement, [{
    key: "select",

    /** Safely sets element selection */
    value: function select(start, end) {
      if (start == null || end == null || start === this.selectionStart && end === this.selectionEnd) return;

      try {
        this._unsafeSelect(start, end);
      } catch (e) {}
    }
    /** Should be overriden in subclasses */

  }, {
    key: "_unsafeSelect",
    value: function _unsafeSelect(start, end) {}
    /** Should be overriden in subclasses */

  }, {
    key: "bindEvents",

    /** Should be overriden in subclasses */
    value: function bindEvents(handlers) {}
    /** Should be overriden in subclasses */

  }, {
    key: "unbindEvents",
    value: function unbindEvents() {}
  }, {
    key: "selectionStart",

    /** */

    /** */

    /** */

    /** Safely returns selection start */
    get: function get() {
      var start;

      try {
        start = this._unsafeSelectionStart;
      } catch (e) {}

      return start != null ? start : this.value.length;
    }
    /** Safely returns selection end */

  }, {
    key: "selectionEnd",
    get: function get() {
      var end;

      try {
        end = this._unsafeSelectionEnd;
      } catch (e) {}

      return end != null ? end : this.value.length;
    }
  }, {
    key: "isActive",
    get: function get() {
      return false;
    }
  }]);

  return MaskElement;
}();

/** Bridge between HTMLElement and {@link Masked} */

var HTMLMaskElement =
/*#__PURE__*/
function (_MaskElement) {
  _inherits(HTMLMaskElement, _MaskElement);

  /** Mapping between HTMLElement events and mask internal events */

  /** HTMLElement to use mask on */

  /**
    @param {HTMLInputElement|HTMLTextAreaElement} input
  */
  function HTMLMaskElement(input) {
    var _this;

    _classCallCheck(this, HTMLMaskElement);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(HTMLMaskElement).call(this));
    _this.input = input;
    _this._handlers = {};
    return _this;
  }
  /**
    Is element in focus
    @readonly
  */

  _createClass(HTMLMaskElement, [{
    key: "_unsafeSelect",

    /**
      Sets HTMLElement selection
      @override
    */
    value: function _unsafeSelect(start, end) {
      this.input.setSelectionRange(start, end);
    }
    /**
      HTMLElement value
      @override
    */

  }, {
    key: "bindEvents",

    /**
      Binds HTMLElement events to mask internal events
      @override
    */
    value: function bindEvents(handlers) {
      var _this2 = this;

      Object.keys(handlers).forEach(function (event) {
        return _this2._toggleEventHandler(HTMLMaskElement.EVENTS_MAP[event], handlers[event]);
      });
    }
    /**
      Unbinds HTMLElement events to mask internal events
      @override
    */

  }, {
    key: "unbindEvents",
    value: function unbindEvents() {
      var _this3 = this;

      Object.keys(this._handlers).forEach(function (event) {
        return _this3._toggleEventHandler(event);
      });
    }
    /** */

  }, {
    key: "_toggleEventHandler",
    value: function _toggleEventHandler(event, handler) {
      if (this._handlers[event]) {
        this.input.removeEventListener(event, this._handlers[event]);
        delete this._handlers[event];
      }

      if (handler) {
        this.input.addEventListener(event, handler);
        this._handlers[event] = handler;
      }
    }
  }, {
    key: "isActive",
    get: function get() {
      return this.input === document.activeElement;
    }
    /**
      Returns HTMLElement selection start
      @override
    */

  }, {
    key: "_unsafeSelectionStart",
    get: function get() {
      return this.input.selectionStart;
    }
    /**
      Returns HTMLElement selection end
      @override
    */

  }, {
    key: "_unsafeSelectionEnd",
    get: function get() {
      return this.input.selectionEnd;
    }
  }, {
    key: "value",
    get: function get() {
      return this.input.value;
    },
    set: function set(value) {
      this.input.value = value;
    }
  }]);

  return HTMLMaskElement;
}(MaskElement);
HTMLMaskElement.EVENTS_MAP = {
  selectionChange: 'keydown',
  input: 'input',
  drop: 'drop',
  click: 'click',
  focus: 'focus',
  commit: 'blur'
};

/** Listens to element events and controls changes between element and {@link Masked} */

var InputMask =
/*#__PURE__*/
function () {
  /**
    View element
    @readonly
  */

  /**
    Internal {@link Masked} model
    @readonly
  */

  /**
    @param {MaskElement|HTMLInputElement|HTMLTextAreaElement} el
    @param {Object} opts
  */
  function InputMask(el, opts) {
    _classCallCheck(this, InputMask);

    this.el = el instanceof MaskElement ? el : new HTMLMaskElement(el);
    this.masked = createMask(opts);
    this._listeners = {};
    this._value = '';
    this._unmaskedValue = '';
    this._saveSelection = this._saveSelection.bind(this);
    this._onInput = this._onInput.bind(this);
    this._onChange = this._onChange.bind(this);
    this._onDrop = this._onDrop.bind(this);
    this._onFocus = this._onFocus.bind(this);
    this.alignCursor = this.alignCursor.bind(this);
    this.alignCursorFriendly = this.alignCursorFriendly.bind(this);

    this._bindEvents(); // refresh


    this.updateValue();

    this._onChange();
  }
  /** Read or update mask */

  _createClass(InputMask, [{
    key: "maskEquals",
    value: function maskEquals(mask) {
      return mask == null || mask === this.masked.mask || mask === Date && this.masked instanceof MaskedDate;
    }
  }, {
    key: "_bindEvents",

    /**
      Starts listening to element events
      @protected
    */
    value: function _bindEvents() {
      this.el.bindEvents({
        selectionChange: this._saveSelection,
        input: this._onInput,
        drop: this._onDrop,
        click: this.alignCursorFriendly,
        focus: this._onFocus,
        commit: this._onChange
      });
    }
    /**
      Stops listening to element events
      @protected
     */

  }, {
    key: "_unbindEvents",
    value: function _unbindEvents() {
      this.el.unbindEvents();
    }
    /**
      Fires custom event
      @protected
     */

  }, {
    key: "_fireEvent",
    value: function _fireEvent(ev) {
      var listeners = this._listeners[ev];
      if (!listeners) return;
      listeners.forEach(function (l) {
        return l();
      });
    }
    /**
      Current selection start
      @readonly
    */

  }, {
    key: "_saveSelection",

    /**
      Stores current selection
      @protected
    */
    value: function _saveSelection()
    /* ev */
    {
      if (this.value !== this.el.value) {
        console.warn('Element value was changed outside of mask. Syncronize mask using `mask.updateValue()` to work properly.'); // eslint-disable-line no-console
      }

      this._selection = {
        start: this.selectionStart,
        end: this.cursorPos
      };
    }
    /** Syncronizes model value from view */

  }, {
    key: "updateValue",
    value: function updateValue() {
      this.masked.value = this.el.value;
      this._value = this.masked.value;
    }
    /** Syncronizes view from model value, fires change events */

  }, {
    key: "updateControl",
    value: function updateControl() {
      var newUnmaskedValue = this.masked.unmaskedValue;
      var newValue = this.masked.value;
      var isChanged = this.unmaskedValue !== newUnmaskedValue || this.value !== newValue;
      this._unmaskedValue = newUnmaskedValue;
      this._value = newValue;
      if (this.el.value !== newValue) this.el.value = newValue;
      if (isChanged) this._fireChangeEvents();
    }
    /** Updates options with deep equal check, recreates @{link Masked} model if mask type changes */

  }, {
    key: "updateOptions",
    value: function updateOptions(opts) {
      var mask = opts.mask,
          restOpts = _objectWithoutProperties(opts, ["mask"]);

      var updateMask = !this.maskEquals(mask);
      var updateOpts = !objectIncludes(this.masked, restOpts);
      if (updateMask) this.mask = mask;
      if (updateOpts) this.masked.updateOptions(restOpts);
      if (updateMask || updateOpts) this.updateControl();
    }
    /** Updates cursor */

  }, {
    key: "updateCursor",
    value: function updateCursor(cursorPos) {
      if (cursorPos == null) return;
      this.cursorPos = cursorPos; // also queue change cursor for mobile browsers

      this._delayUpdateCursor(cursorPos);
    }
    /**
      Delays cursor update to support mobile browsers
      @private
    */

  }, {
    key: "_delayUpdateCursor",
    value: function _delayUpdateCursor(cursorPos) {
      var _this = this;

      this._abortUpdateCursor();

      this._changingCursorPos = cursorPos;
      this._cursorChanging = setTimeout(function () {
        if (!_this.el) return; // if was destroyed

        _this.cursorPos = _this._changingCursorPos;

        _this._abortUpdateCursor();
      }, 10);
    }
    /**
      Fires custom events
      @protected
    */

  }, {
    key: "_fireChangeEvents",
    value: function _fireChangeEvents() {
      this._fireEvent('accept');

      if (this.masked.isComplete) this._fireEvent('complete');
    }
    /**
      Aborts delayed cursor update
      @private
    */

  }, {
    key: "_abortUpdateCursor",
    value: function _abortUpdateCursor() {
      if (this._cursorChanging) {
        clearTimeout(this._cursorChanging);
        delete this._cursorChanging;
      }
    }
    /** Aligns cursor to nearest available position */

  }, {
    key: "alignCursor",
    value: function alignCursor() {
      this.cursorPos = this.masked.nearestInputPos(this.cursorPos, DIRECTION.LEFT);
    }
    /** Aligns cursor only if selection is empty */

  }, {
    key: "alignCursorFriendly",
    value: function alignCursorFriendly() {
      if (this.selectionStart !== this.cursorPos) return; // skip if range is selected

      this.alignCursor();
    }
    /** Adds listener on custom event */

  }, {
    key: "on",
    value: function on(ev, handler) {
      if (!this._listeners[ev]) this._listeners[ev] = [];

      this._listeners[ev].push(handler);

      return this;
    }
    /** Removes custom event listener */

  }, {
    key: "off",
    value: function off(ev, handler) {
      if (!this._listeners[ev]) return this;

      if (!handler) {
        delete this._listeners[ev];
        return this;
      }

      var hIndex = this._listeners[ev].indexOf(handler);

      if (hIndex >= 0) this._listeners[ev].splice(hIndex, 1);
      return this;
    }
    /** Handles view input event */

  }, {
    key: "_onInput",
    value: function _onInput() {
      this._abortUpdateCursor(); // fix strange IE behavior


      if (!this._selection) return this.updateValue();
      var details = new ActionDetails( // new state
      this.el.value, this.cursorPos, // old state
      this.value, this._selection);
      var oldRawValue = this.masked.rawInputValue;
      var offset = this.masked.splice(details.startChangePos, details.removed.length, details.inserted, details.removeDirection).offset; // force align in remove direction only if no input chars were removed
      // otherwise we still need to align with NONE (to get out from fixed symbols for instance)

      var removeDirection = oldRawValue === this.masked.rawInputValue ? details.removeDirection : DIRECTION.NONE;
      var cursorPos = this.masked.nearestInputPos(details.startChangePos + offset, removeDirection);
      this.updateControl();
      this.updateCursor(cursorPos);
    }
    /** Handles view change event and commits model value */

  }, {
    key: "_onChange",
    value: function _onChange() {
      if (this.value !== this.el.value) {
        this.updateValue();
      }

      this.masked.doCommit();
      this.updateControl();

      this._saveSelection();
    }
    /** Handles view drop event, prevents by default */

  }, {
    key: "_onDrop",
    value: function _onDrop(ev) {
      ev.preventDefault();
      ev.stopPropagation();
    }
    /** Restore last selection on focus */

  }, {
    key: "_onFocus",
    value: function _onFocus(ev) {
      if (this.selectionStart !== this.cursorPos) return; // skip if range is selected

      if (this._selection) this.cursorPos = this._selection.end;
      this.alignCursorFriendly();
    }
    /** Unbind view events and removes element reference */

  }, {
    key: "destroy",
    value: function destroy() {
      this._unbindEvents(); // $FlowFixMe why not do so?


      this._listeners.length = 0;
      delete this.el;
    }
  }, {
    key: "mask",
    get: function get() {
      return this.masked.mask;
    },
    set: function set(mask) {
      if (this.maskEquals(mask)) return;

      if (this.masked.constructor === maskedClass(mask)) {
        this.masked.updateOptions({
          mask: mask
        });
        return;
      }

      var masked = createMask({
        mask: mask
      });
      masked.unmaskedValue = this.masked.unmaskedValue;
      this.masked = masked;
    }
    /** Raw value */

  }, {
    key: "value",
    get: function get() {
      return this._value;
    },
    set: function set(str) {
      this.masked.value = str;
      this.updateControl();
      this.alignCursor();
    }
    /** Unmasked value */

  }, {
    key: "unmaskedValue",
    get: function get() {
      return this._unmaskedValue;
    },
    set: function set(str) {
      this.masked.unmaskedValue = str;
      this.updateControl();
      this.alignCursor();
    }
    /** Typed unmasked value */

  }, {
    key: "typedValue",
    get: function get() {
      return this.masked.typedValue;
    },
    set: function set(val) {
      this.masked.typedValue = val;
      this.updateControl();
      this.alignCursor();
    }
  }, {
    key: "selectionStart",
    get: function get() {
      return this._cursorChanging ? this._changingCursorPos : this.el.selectionStart;
    }
    /** Current cursor position */

  }, {
    key: "cursorPos",
    get: function get() {
      return this._cursorChanging ? this._changingCursorPos : this.el.selectionEnd;
    },
    set: function set(pos) {
      if (!this.el.isActive) return;
      this.el.select(pos, pos);

      this._saveSelection();
    }
  }]);

  return InputMask;
}();

/** Pattern which validates enum values */

var MaskedEnum =
/*#__PURE__*/
function (_MaskedPattern) {
  _inherits(MaskedEnum, _MaskedPattern);

  function MaskedEnum() {
    _classCallCheck(this, MaskedEnum);

    return _possibleConstructorReturn(this, _getPrototypeOf(MaskedEnum).apply(this, arguments));
  }

  _createClass(MaskedEnum, [{
    key: "_update",

    /**
      @override
      @param {Object} opts
    */
    value: function _update(opts) {
      // TODO type
      if (opts.enum) opts.mask = '*'.repeat(opts.enum[0].length);

      _get(_getPrototypeOf(MaskedEnum.prototype), "_update", this).call(this, opts);
    }
    /**
      @override
    */

  }, {
    key: "doValidate",
    value: function doValidate() {
      var _this = this,
          _get2;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return this.enum.some(function (e) {
        return e.indexOf(_this.unmaskedValue) >= 0;
      }) && (_get2 = _get(_getPrototypeOf(MaskedEnum.prototype), "doValidate", this)).call.apply(_get2, [this].concat(args));
    }
  }]);

  return MaskedEnum;
}(MaskedPattern);

/**
  Number mask
  @param {Object} opts
  @param {string} opts.radix - Single char
  @param {string} opts.thousandsSeparator - Single char
  @param {Array<string>} opts.mapToRadix - Array of single chars
  @param {number} opts.min
  @param {number} opts.max
  @param {number} opts.scale - Digits after point
  @param {boolean} opts.signed - Allow negative
  @param {boolean} opts.normalizeZeros - Flag to remove leading and trailing zeros in the end of editing
  @param {boolean} opts.padFractionalZeros - Flag to pad trailing zeros after point in the end of editing
*/
var MaskedNumber =
/*#__PURE__*/
function (_Masked) {
  _inherits(MaskedNumber, _Masked);

  /** Single char */

  /** Single char */

  /** Array of single chars */

  /** */

  /** */

  /** Digits after point */

  /** */

  /** Flag to remove leading and trailing zeros in the end of editing */

  /** Flag to pad trailing zeros after point in the end of editing */
  function MaskedNumber(opts) {
    _classCallCheck(this, MaskedNumber);

    return _possibleConstructorReturn(this, _getPrototypeOf(MaskedNumber).call(this, Object.assign({}, MaskedNumber.DEFAULTS, {}, opts)));
  }
  /**
    @override
  */

  _createClass(MaskedNumber, [{
    key: "_update",
    value: function _update(opts) {
      _get(_getPrototypeOf(MaskedNumber.prototype), "_update", this).call(this, opts);

      this._updateRegExps();
    }
    /** */

  }, {
    key: "_updateRegExps",
    value: function _updateRegExps() {
      // use different regexp to process user input (more strict, input suffix) and tail shifting
      var start = '^' + (this.allowNegative ? '[+|\\-]?' : '');
      var midInput = '(0|([1-9]+\\d*))?';
      var mid = '\\d*';
      var end = (this.scale ? '(' + escapeRegExp(this.radix) + '\\d{0,' + this.scale + '})?' : '') + '$';
      this._numberRegExpInput = new RegExp(start + midInput + end);
      this._numberRegExp = new RegExp(start + mid + end);
      this._mapToRadixRegExp = new RegExp('[' + this.mapToRadix.map(escapeRegExp).join('') + ']', 'g');
      this._thousandsSeparatorRegExp = new RegExp(escapeRegExp(this.thousandsSeparator), 'g');
    }
    /** */

  }, {
    key: "_removeThousandsSeparators",
    value: function _removeThousandsSeparators(value) {
      return value.replace(this._thousandsSeparatorRegExp, '');
    }
    /** */

  }, {
    key: "_insertThousandsSeparators",
    value: function _insertThousandsSeparators(value) {
      // https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
      var parts = value.split(this.radix);
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, this.thousandsSeparator);
      return parts.join(this.radix);
    }
    /**
      @override
    */

  }, {
    key: "doPrepare",
    value: function doPrepare(str) {
      var _get2;

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      return (_get2 = _get(_getPrototypeOf(MaskedNumber.prototype), "doPrepare", this)).call.apply(_get2, [this, this._removeThousandsSeparators(str.replace(this._mapToRadixRegExp, this.radix))].concat(args));
    }
    /** */

  }, {
    key: "_separatorsCount",
    value: function _separatorsCount(to) {
      var extendOnSeparators = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var count = 0;

      for (var pos = 0; pos < to; ++pos) {
        if (this._value.indexOf(this.thousandsSeparator, pos) === pos) {
          ++count;
          if (extendOnSeparators) to += this.thousandsSeparator.length;
        }
      }

      return count;
    }
    /** */

  }, {
    key: "_separatorsCountFromSlice",
    value: function _separatorsCountFromSlice() {
      var slice = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._value;
      return this._separatorsCount(this._removeThousandsSeparators(slice).length, true);
    }
    /**
      @override
    */

  }, {
    key: "extractInput",
    value: function extractInput() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      var flags = arguments.length > 2 ? arguments[2] : undefined;

      var _this$_adjustRangeWit = this._adjustRangeWithSeparators(fromPos, toPos);

      var _this$_adjustRangeWit2 = _slicedToArray(_this$_adjustRangeWit, 2);

      fromPos = _this$_adjustRangeWit2[0];
      toPos = _this$_adjustRangeWit2[1];
      return this._removeThousandsSeparators(_get(_getPrototypeOf(MaskedNumber.prototype), "extractInput", this).call(this, fromPos, toPos, flags));
    }
    /**
      @override
    */

  }, {
    key: "_appendCharRaw",
    value: function _appendCharRaw(ch) {
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      if (!this.thousandsSeparator) return _get(_getPrototypeOf(MaskedNumber.prototype), "_appendCharRaw", this).call(this, ch, flags);
      var prevBeforeTailValue = flags.tail && flags._beforeTailState ? flags._beforeTailState._value : this._value;

      var prevBeforeTailSeparatorsCount = this._separatorsCountFromSlice(prevBeforeTailValue);

      this._value = this._removeThousandsSeparators(this.value);

      var appendDetails = _get(_getPrototypeOf(MaskedNumber.prototype), "_appendCharRaw", this).call(this, ch, flags);

      this._value = this._insertThousandsSeparators(this._value);
      var beforeTailValue = flags.tail && flags._beforeTailState ? flags._beforeTailState._value : this._value;

      var beforeTailSeparatorsCount = this._separatorsCountFromSlice(beforeTailValue);

      appendDetails.tailShift += (beforeTailSeparatorsCount - prevBeforeTailSeparatorsCount) * this.thousandsSeparator.length;
      return appendDetails;
    }
    /** */

  }, {
    key: "_findSeparatorAround",
    value: function _findSeparatorAround(pos) {
      if (this.thousandsSeparator) {
        var searchFrom = pos - this.thousandsSeparator.length + 1;
        var separatorPos = this.value.indexOf(this.thousandsSeparator, searchFrom);
        if (separatorPos <= pos) return separatorPos;
      }

      return -1;
    }
  }, {
    key: "_adjustRangeWithSeparators",
    value: function _adjustRangeWithSeparators(from, to) {
      var separatorAroundFromPos = this._findSeparatorAround(from);

      if (separatorAroundFromPos >= 0) from = separatorAroundFromPos;

      var separatorAroundToPos = this._findSeparatorAround(to);

      if (separatorAroundToPos >= 0) to = separatorAroundToPos + this.thousandsSeparator.length;
      return [from, to];
    }
    /**
      @override
    */

  }, {
    key: "remove",
    value: function remove() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;

      var _this$_adjustRangeWit3 = this._adjustRangeWithSeparators(fromPos, toPos);

      var _this$_adjustRangeWit4 = _slicedToArray(_this$_adjustRangeWit3, 2);

      fromPos = _this$_adjustRangeWit4[0];
      toPos = _this$_adjustRangeWit4[1];
      var valueBeforePos = this.value.slice(0, fromPos);
      var valueAfterPos = this.value.slice(toPos);

      var prevBeforeTailSeparatorsCount = this._separatorsCount(valueBeforePos.length);

      this._value = this._insertThousandsSeparators(this._removeThousandsSeparators(valueBeforePos + valueAfterPos));

      var beforeTailSeparatorsCount = this._separatorsCountFromSlice(valueBeforePos);

      return new ChangeDetails({
        tailShift: (beforeTailSeparatorsCount - prevBeforeTailSeparatorsCount) * this.thousandsSeparator.length
      });
    }
    /**
      @override
    */

  }, {
    key: "nearestInputPos",
    value: function nearestInputPos(cursorPos, direction) {
      if (!this.thousandsSeparator) return cursorPos;

      switch (direction) {
        case DIRECTION.NONE:
        case DIRECTION.LEFT:
        case DIRECTION.FORCE_LEFT:
          {
            var separatorAtLeftPos = this._findSeparatorAround(cursorPos - 1);

            if (separatorAtLeftPos >= 0) {
              var separatorAtLeftEndPos = separatorAtLeftPos + this.thousandsSeparator.length;

              if (cursorPos < separatorAtLeftEndPos || this.value.length <= separatorAtLeftEndPos || direction === DIRECTION.FORCE_LEFT) {
                return separatorAtLeftPos;
              }
            }

            break;
          }

        case DIRECTION.RIGHT:
        case DIRECTION.FORCE_RIGHT:
          {
            var separatorAtRightPos = this._findSeparatorAround(cursorPos);

            if (separatorAtRightPos >= 0) {
              return separatorAtRightPos + this.thousandsSeparator.length;
            }
          }
      }

      return cursorPos;
    }
    /**
      @override
    */

  }, {
    key: "doValidate",
    value: function doValidate(flags) {
      var regexp = flags.input ? this._numberRegExpInput : this._numberRegExp; // validate as string

      var valid = regexp.test(this._removeThousandsSeparators(this.value));

      if (valid) {
        // validate as number
        var number = this.number;
        valid = valid && !isNaN(number) && ( // check min bound for negative values
        this.min == null || this.min >= 0 || this.min <= this.number) && ( // check max bound for positive values
        this.max == null || this.max <= 0 || this.number <= this.max);
      }

      return valid && _get(_getPrototypeOf(MaskedNumber.prototype), "doValidate", this).call(this, flags);
    }
    /**
      @override
    */

  }, {
    key: "doCommit",
    value: function doCommit() {
      if (this.value) {
        var number = this.number;
        var validnum = number; // check bounds

        if (this.min != null) validnum = Math.max(validnum, this.min);
        if (this.max != null) validnum = Math.min(validnum, this.max);
        if (validnum !== number) this.unmaskedValue = String(validnum);
        var formatted = this.value;
        if (this.normalizeZeros) formatted = this._normalizeZeros(formatted);
        if (this.padFractionalZeros) formatted = this._padFractionalZeros(formatted);
        this._value = formatted;
      }

      _get(_getPrototypeOf(MaskedNumber.prototype), "doCommit", this).call(this);
    }
    /** */

  }, {
    key: "_normalizeZeros",
    value: function _normalizeZeros(value) {
      var parts = this._removeThousandsSeparators(value).split(this.radix); // remove leading zeros


      parts[0] = parts[0].replace(/^(\D*)(0*)(\d*)/, function (match, sign, zeros, num) {
        return sign + num;
      }); // add leading zero

      if (value.length && !/\d$/.test(parts[0])) parts[0] = parts[0] + '0';

      if (parts.length > 1) {
        parts[1] = parts[1].replace(/0*$/, ''); // remove trailing zeros

        if (!parts[1].length) parts.length = 1; // remove fractional
      }

      return this._insertThousandsSeparators(parts.join(this.radix));
    }
    /** */

  }, {
    key: "_padFractionalZeros",
    value: function _padFractionalZeros(value) {
      if (!value) return value;
      var parts = value.split(this.radix);
      if (parts.length < 2) parts.push('');
      parts[1] = parts[1].padEnd(this.scale, '0');
      return parts.join(this.radix);
    }
    /**
      @override
    */

  }, {
    key: "unmaskedValue",
    get: function get() {
      return this._removeThousandsSeparators(this._normalizeZeros(this.value)).replace(this.radix, '.');
    },
    set: function set(unmaskedValue) {
      _set(_getPrototypeOf(MaskedNumber.prototype), "unmaskedValue", unmaskedValue.replace('.', this.radix), this, true);
    }
    /** Parsed Number */

  }, {
    key: "number",
    get: function get() {
      return Number(this.unmaskedValue);
    },
    set: function set(number) {
      this.unmaskedValue = String(number);
    }
    /**
      @override
    */

  }, {
    key: "typedValue",
    get: function get() {
      return this.number;
    },
    set: function set(value) {
      this.number = value;
    }
    /**
      Is negative allowed
      @readonly
    */

  }, {
    key: "allowNegative",
    get: function get() {
      return this.signed || this.min != null && this.min < 0 || this.max != null && this.max < 0;
    }
  }]);

  return MaskedNumber;
}(Masked);
MaskedNumber.DEFAULTS = {
  radix: ',',
  thousandsSeparator: '',
  mapToRadix: ['.'],
  scale: 2,
  signed: false,
  normalizeZeros: true,
  padFractionalZeros: false
};

/** Masking by RegExp */

var MaskedRegExp =
/*#__PURE__*/
function (_Masked) {
  _inherits(MaskedRegExp, _Masked);

  function MaskedRegExp() {
    _classCallCheck(this, MaskedRegExp);

    return _possibleConstructorReturn(this, _getPrototypeOf(MaskedRegExp).apply(this, arguments));
  }

  _createClass(MaskedRegExp, [{
    key: "_update",

    /**
      @override
      @param {Object} opts
    */
    value: function _update(opts) {
      if (opts.mask) opts.validate = function (value) {
        return value.search(opts.mask) >= 0;
      };

      _get(_getPrototypeOf(MaskedRegExp.prototype), "_update", this).call(this, opts);
    }
  }]);

  return MaskedRegExp;
}(Masked);

/** Masking by custom Function */

var MaskedFunction =
/*#__PURE__*/
function (_Masked) {
  _inherits(MaskedFunction, _Masked);

  function MaskedFunction() {
    _classCallCheck(this, MaskedFunction);

    return _possibleConstructorReturn(this, _getPrototypeOf(MaskedFunction).apply(this, arguments));
  }

  _createClass(MaskedFunction, [{
    key: "_update",

    /**
      @override
      @param {Object} opts
    */
    value: function _update(opts) {
      if (opts.mask) opts.validate = opts.mask;

      _get(_getPrototypeOf(MaskedFunction.prototype), "_update", this).call(this, opts);
    }
  }]);

  return MaskedFunction;
}(Masked);

/** Dynamic mask for choosing apropriate mask in run-time */
var MaskedDynamic =
/*#__PURE__*/
function (_Masked) {
  _inherits(MaskedDynamic, _Masked);

  /** Currently chosen mask */

  /** Compliled {@link Masked} options */

  /** Chooses {@link Masked} depending on input value */

  /**
    @param {Object} opts
  */
  function MaskedDynamic(opts) {
    var _this;

    _classCallCheck(this, MaskedDynamic);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MaskedDynamic).call(this, Object.assign({}, MaskedDynamic.DEFAULTS, {}, opts)));
    _this.currentMask = null;
    return _this;
  }
  /**
    @override
  */

  _createClass(MaskedDynamic, [{
    key: "_update",
    value: function _update(opts) {
      _get(_getPrototypeOf(MaskedDynamic.prototype), "_update", this).call(this, opts);

      if ('mask' in opts) {
        // mask could be totally dynamic with only `dispatch` option
        this.compiledMasks = Array.isArray(opts.mask) ? opts.mask.map(function (m) {
          return createMask(m);
        }) : [];
      }
    }
    /**
      @override
    */

  }, {
    key: "_appendCharRaw",
    value: function _appendCharRaw() {
      var details = this._applyDispatch.apply(this, arguments);

      if (this.currentMask) {
        var _this$currentMask;

        details.aggregate((_this$currentMask = this.currentMask)._appendChar.apply(_this$currentMask, arguments));
      }

      return details;
    }
  }, {
    key: "_applyDispatch",
    value: function _applyDispatch() {
      var appended = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var prevValueBeforeTail = flags.tail && flags._beforeTailState != null ? flags._beforeTailState._value : this.value;
      var inputValue = this.rawInputValue;
      var insertValue = flags.tail && flags._beforeTailState != null ? // $FlowFixMe - tired to fight with type system
      flags._beforeTailState._rawInputValue : inputValue;
      var tailValue = inputValue.slice(insertValue.length);
      var prevMask = this.currentMask;
      var details = new ChangeDetails();
      var prevMaskState = prevMask && prevMask.state; // clone flags to prevent overwriting `_beforeTailState`

      this.currentMask = this.doDispatch(appended, Object.assign({}, flags)); // restore state after dispatch

      if (this.currentMask) {
        if (this.currentMask !== prevMask) {
          // if mask changed reapply input
          this.currentMask.reset(); // $FlowFixMe - it's ok, we don't change current mask above

          var d = this.currentMask.append(insertValue, {
            raw: true
          });
          details.tailShift = d.inserted.length - prevValueBeforeTail.length;

          if (tailValue) {
            // $FlowFixMe - it's ok, we don't change current mask above
            details.tailShift += this.currentMask.append(tailValue, {
              raw: true,
              tail: true
            }).tailShift;
          }
        } else {
          // Dispatch can do something bad with state, so
          // restore prev mask state
          this.currentMask.state = prevMaskState;
        }
      }

      return details;
    }
  }, {
    key: "_appendPlaceholder",
    value: function _appendPlaceholder() {
      var details = this._applyDispatch.apply(this, arguments);

      if (this.currentMask) {
        details.aggregate(this.currentMask._appendPlaceholder());
      }

      return details;
    }
    /**
      @override
    */

  }, {
    key: "doDispatch",
    value: function doDispatch(appended) {
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.dispatch(appended, this, flags);
    }
    /**
      @override
    */

  }, {
    key: "doValidate",
    value: function doValidate() {
      var _get2, _this$currentMask2;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return (_get2 = _get(_getPrototypeOf(MaskedDynamic.prototype), "doValidate", this)).call.apply(_get2, [this].concat(args)) && (!this.currentMask || (_this$currentMask2 = this.currentMask).doValidate.apply(_this$currentMask2, args));
    }
    /**
      @override
    */

  }, {
    key: "reset",
    value: function reset() {
      if (this.currentMask) this.currentMask.reset();
      this.compiledMasks.forEach(function (m) {
        return m.reset();
      });
    }
    /**
      @override
    */

  }, {
    key: "remove",

    /**
      @override
    */
    value: function remove() {
      var details = new ChangeDetails();

      if (this.currentMask) {
        var _this$currentMask3;

        details.aggregate((_this$currentMask3 = this.currentMask).remove.apply(_this$currentMask3, arguments)) // update with dispatch
        .aggregate(this._applyDispatch());
      }

      return details;
    }
    /**
      @override
    */

  }, {
    key: "extractInput",

    /**
      @override
    */
    value: function extractInput() {
      var _this$currentMask4;

      return this.currentMask ? (_this$currentMask4 = this.currentMask).extractInput.apply(_this$currentMask4, arguments) : '';
    }
    /**
      @override
    */

  }, {
    key: "extractTail",
    value: function extractTail() {
      var _this$currentMask5, _get3;

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return this.currentMask ? (_this$currentMask5 = this.currentMask).extractTail.apply(_this$currentMask5, args) : (_get3 = _get(_getPrototypeOf(MaskedDynamic.prototype), "extractTail", this)).call.apply(_get3, [this].concat(args));
    }
    /**
      @override
    */

  }, {
    key: "doCommit",
    value: function doCommit() {
      if (this.currentMask) this.currentMask.doCommit();

      _get(_getPrototypeOf(MaskedDynamic.prototype), "doCommit", this).call(this);
    }
    /**
      @override
    */

  }, {
    key: "nearestInputPos",
    value: function nearestInputPos() {
      var _this$currentMask6, _get4;

      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return this.currentMask ? (_this$currentMask6 = this.currentMask).nearestInputPos.apply(_this$currentMask6, args) : (_get4 = _get(_getPrototypeOf(MaskedDynamic.prototype), "nearestInputPos", this)).call.apply(_get4, [this].concat(args));
    }
  }, {
    key: "value",
    get: function get() {
      return this.currentMask ? this.currentMask.value : '';
    },
    set: function set(value) {
      _set(_getPrototypeOf(MaskedDynamic.prototype), "value", value, this, true);
    }
    /**
      @override
    */

  }, {
    key: "unmaskedValue",
    get: function get() {
      return this.currentMask ? this.currentMask.unmaskedValue : '';
    },
    set: function set(unmaskedValue) {
      _set(_getPrototypeOf(MaskedDynamic.prototype), "unmaskedValue", unmaskedValue, this, true);
    }
    /**
      @override
    */

  }, {
    key: "typedValue",
    get: function get() {
      return this.currentMask ? this.currentMask.typedValue : '';
    } // probably typedValue should not be used with dynamic

    , set: function set(value) {
      var unmaskedValue = String(value); // double check it

      if (this.currentMask) {
        this.currentMask.typedValue = value;
        unmaskedValue = this.currentMask.unmaskedValue;
      }

      this.unmaskedValue = unmaskedValue;
    }
    /**
      @override
    */

  }, {
    key: "isComplete",
    get: function get() {
      return !!this.currentMask && this.currentMask.isComplete;
    }
  }, {
    key: "state",
    get: function get() {
      return Object.assign({}, _get(_getPrototypeOf(MaskedDynamic.prototype), "state", this), {
        _rawInputValue: this.rawInputValue,
        compiledMasks: this.compiledMasks.map(function (m) {
          return m.state;
        }),
        currentMaskRef: this.currentMask,
        currentMask: this.currentMask && this.currentMask.state
      });
    },
    set: function set(state) {
      var compiledMasks = state.compiledMasks,
          currentMaskRef = state.currentMaskRef,
          currentMask = state.currentMask,
          maskedState = _objectWithoutProperties(state, ["compiledMasks", "currentMaskRef", "currentMask"]);

      this.compiledMasks.forEach(function (m, mi) {
        return m.state = compiledMasks[mi];
      });

      if (currentMaskRef != null) {
        this.currentMask = currentMaskRef;
        this.currentMask.state = currentMask;
      }

      _set(_getPrototypeOf(MaskedDynamic.prototype), "state", maskedState, this, true);
    }
  }, {
    key: "overwrite",
    get: function get() {
      return this.currentMask ? this.currentMask.overwrite : _get(_getPrototypeOf(MaskedDynamic.prototype), "overwrite", this);
    },
    set: function set(overwrite) {
      console.warn('"overwrite" option is not available in dynamic mask, use this option in siblings');
    }
  }]);

  return MaskedDynamic;
}(Masked);
MaskedDynamic.DEFAULTS = {
  dispatch: function dispatch(appended, masked, flags) {
    if (!masked.compiledMasks.length) return;
    var inputValue = masked.rawInputValue; // simulate input

    var inputs = masked.compiledMasks.map(function (m, index) {
      m.reset();
      m.append(inputValue, {
        raw: true
      });
      m.append(appended, flags);
      var weight = m.rawInputValue.length;
      return {
        weight: weight,
        index: index
      };
    }); // pop masks with longer values first

    inputs.sort(function (i1, i2) {
      return i2.weight - i1.weight;
    });
    return masked.compiledMasks[inputs[0].index];
  }
};

/**
 * Applies mask on element.
 * @constructor
 * @param {HTMLInputElement|HTMLTextAreaElement|MaskElement} el - Element to apply mask
 * @param {Object} opts - Custom mask options
 * @return {InputMask}
 */

function IMask(el) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  // currently available only for input-like elements
  return new InputMask(el, opts);
}
/** {@link InputMask} */

IMask.InputMask = InputMask;
/** {@link Masked} */

IMask.Masked = Masked;
/** {@link MaskedPattern} */

IMask.MaskedPattern = MaskedPattern;
/** {@link MaskedEnum} */

IMask.MaskedEnum = MaskedEnum;
/** {@link MaskedRange} */

IMask.MaskedRange = MaskedRange;
/** {@link MaskedNumber} */

IMask.MaskedNumber = MaskedNumber;
/** {@link MaskedDate} */

IMask.MaskedDate = MaskedDate;
/** {@link MaskedRegExp} */

IMask.MaskedRegExp = MaskedRegExp;
/** {@link MaskedFunction} */

IMask.MaskedFunction = MaskedFunction;
/** {@link MaskedDynamic} */

IMask.MaskedDynamic = MaskedDynamic;
/** {@link createMask} */

IMask.createMask = createMask;
/** {@link MaskElement} */

IMask.MaskElement = MaskElement;
/** {@link HTMLMaskElement} */

IMask.HTMLMaskElement = HTMLMaskElement;
g.IMask = IMask;

/* harmony default export */ __webpack_exports__["a"] = (IMask);

//# sourceMappingURL=imask.esm.js.map
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/lodash/_Hash.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_Hash.js ***!
  \**************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(/*! ./_hashClear */ "./node_modules/lodash/_hashClear.js"),
    hashDelete = __webpack_require__(/*! ./_hashDelete */ "./node_modules/lodash/_hashDelete.js"),
    hashGet = __webpack_require__(/*! ./_hashGet */ "./node_modules/lodash/_hashGet.js"),
    hashHas = __webpack_require__(/*! ./_hashHas */ "./node_modules/lodash/_hashHas.js"),
    hashSet = __webpack_require__(/*! ./_hashSet */ "./node_modules/lodash/_hashSet.js");

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;

    this.clear();
    while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;

/***/ }),

/***/ "./node_modules/lodash/_ListCache.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_ListCache.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(/*! ./_listCacheClear */ "./node_modules/lodash/_listCacheClear.js"),
    listCacheDelete = __webpack_require__(/*! ./_listCacheDelete */ "./node_modules/lodash/_listCacheDelete.js"),
    listCacheGet = __webpack_require__(/*! ./_listCacheGet */ "./node_modules/lodash/_listCacheGet.js"),
    listCacheHas = __webpack_require__(/*! ./_listCacheHas */ "./node_modules/lodash/_listCacheHas.js"),
    listCacheSet = __webpack_require__(/*! ./_listCacheSet */ "./node_modules/lodash/_listCacheSet.js");

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;

    this.clear();
    while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;

/***/ }),

/***/ "./node_modules/lodash/_Map.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/_Map.js ***!
  \*************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;

/***/ }),

/***/ "./node_modules/lodash/_MapCache.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_MapCache.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(/*! ./_mapCacheClear */ "./node_modules/lodash/_mapCacheClear.js"),
    mapCacheDelete = __webpack_require__(/*! ./_mapCacheDelete */ "./node_modules/lodash/_mapCacheDelete.js"),
    mapCacheGet = __webpack_require__(/*! ./_mapCacheGet */ "./node_modules/lodash/_mapCacheGet.js"),
    mapCacheHas = __webpack_require__(/*! ./_mapCacheHas */ "./node_modules/lodash/_mapCacheHas.js"),
    mapCacheSet = __webpack_require__(/*! ./_mapCacheSet */ "./node_modules/lodash/_mapCacheSet.js");

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;

    this.clear();
    while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;

/***/ }),

/***/ "./node_modules/lodash/_Stack.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_Stack.js ***!
  \***************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    stackClear = __webpack_require__(/*! ./_stackClear */ "./node_modules/lodash/_stackClear.js"),
    stackDelete = __webpack_require__(/*! ./_stackDelete */ "./node_modules/lodash/_stackDelete.js"),
    stackGet = __webpack_require__(/*! ./_stackGet */ "./node_modules/lodash/_stackGet.js"),
    stackHas = __webpack_require__(/*! ./_stackHas */ "./node_modules/lodash/_stackHas.js"),
    stackSet = __webpack_require__(/*! ./_stackSet */ "./node_modules/lodash/_stackSet.js");

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;

/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var _Symbol = root.Symbol;

module.exports = _Symbol;

/***/ }),

/***/ "./node_modules/lodash/_Uint8Array.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_Uint8Array.js ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;

/***/ }),

/***/ "./node_modules/lodash/_apply.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_apply.js ***!
  \***************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0:
      return func.call(thisArg);
    case 1:
      return func.call(thisArg, args[0]);
    case 2:
      return func.call(thisArg, args[0], args[1]);
    case 3:
      return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;

/***/ }),

/***/ "./node_modules/lodash/_arrayLikeKeys.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_arrayLikeKeys.js ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(/*! ./_baseTimes */ "./node_modules/lodash/_baseTimes.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (
    // Safari 9 has enumerable `arguments.length` in strict mode.
    key == 'length' ||
    // Node.js 0.10 has enumerable non-index properties on buffers.
    isBuff && (key == 'offset' || key == 'parent') ||
    // PhantomJS 2 has enumerable non-index properties on typed arrays.
    isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') ||
    // Skip index properties.
    isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;

/***/ }),

/***/ "./node_modules/lodash/_assignMergeValue.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_assignMergeValue.js ***!
  \**************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "./node_modules/lodash/_baseAssignValue.js"),
    eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js");

/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignMergeValue(object, key, value) {
  if (value !== undefined && !eq(object[key], value) || value === undefined && !(key in object)) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignMergeValue;

/***/ }),

/***/ "./node_modules/lodash/_assignValue.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_assignValue.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "./node_modules/lodash/_baseAssignValue.js"),
    eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === undefined && !(key in object)) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;

/***/ }),

/***/ "./node_modules/lodash/_assocIndexOf.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_assocIndexOf.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js");

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;

/***/ }),

/***/ "./node_modules/lodash/_baseAssignValue.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseAssignValue.js ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ./_defineProperty */ "./node_modules/lodash/_defineProperty.js");

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;

/***/ }),

/***/ "./node_modules/lodash/_baseCreate.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseCreate.js ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = function () {
  function object() {}
  return function (proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object();
    object.prototype = undefined;
    return result;
  };
}();

module.exports = baseCreate;

/***/ }),

/***/ "./node_modules/lodash/_baseFor.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseFor.js ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var createBaseFor = __webpack_require__(/*! ./_createBaseFor */ "./node_modules/lodash/_createBaseFor.js");

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;

/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "./node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "./node_modules/lodash/_objectToString.js");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
    if (value == null) {
        return value === undefined ? undefinedTag : nullTag;
    }
    return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}

module.exports = baseGetTag;

/***/ }),

/***/ "./node_modules/lodash/_baseIsArguments.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseIsArguments.js ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;

/***/ }),

/***/ "./node_modules/lodash/_baseIsNative.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIsNative.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isMasked = __webpack_require__(/*! ./_isMasked */ "./node_modules/lodash/_isMasked.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "./node_modules/lodash/_toSource.js");

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;

/***/ }),

/***/ "./node_modules/lodash/_baseIsTypedArray.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_baseIsTypedArray.js ***!
  \**************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
    return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;

/***/ }),

/***/ "./node_modules/lodash/_baseKeys.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseKeys.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js"),
    nativeKeys = __webpack_require__(/*! ./_nativeKeys */ "./node_modules/lodash/_nativeKeys.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;

/***/ }),

/***/ "./node_modules/lodash/_baseKeysIn.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseKeysIn.js ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js"),
    nativeKeysIn = __webpack_require__(/*! ./_nativeKeysIn */ "./node_modules/lodash/_nativeKeysIn.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeysIn;

/***/ }),

/***/ "./node_modules/lodash/_baseMerge.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseMerge.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(/*! ./_Stack */ "./node_modules/lodash/_Stack.js"),
    assignMergeValue = __webpack_require__(/*! ./_assignMergeValue */ "./node_modules/lodash/_assignMergeValue.js"),
    baseFor = __webpack_require__(/*! ./_baseFor */ "./node_modules/lodash/_baseFor.js"),
    baseMergeDeep = __webpack_require__(/*! ./_baseMergeDeep */ "./node_modules/lodash/_baseMergeDeep.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    keysIn = __webpack_require__(/*! ./keysIn */ "./node_modules/lodash/keysIn.js"),
    safeGet = __webpack_require__(/*! ./_safeGet */ "./node_modules/lodash/_safeGet.js");

/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  baseFor(source, function (srcValue, key) {
    stack || (stack = new Stack());
    if (isObject(srcValue)) {
      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    } else {
      var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + '', object, source, stack) : undefined;

      if (newValue === undefined) {
        newValue = srcValue;
      }
      assignMergeValue(object, key, newValue);
    }
  }, keysIn);
}

module.exports = baseMerge;

/***/ }),

/***/ "./node_modules/lodash/_baseMergeDeep.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_baseMergeDeep.js ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var assignMergeValue = __webpack_require__(/*! ./_assignMergeValue */ "./node_modules/lodash/_assignMergeValue.js"),
    cloneBuffer = __webpack_require__(/*! ./_cloneBuffer */ "./node_modules/lodash/_cloneBuffer.js"),
    cloneTypedArray = __webpack_require__(/*! ./_cloneTypedArray */ "./node_modules/lodash/_cloneTypedArray.js"),
    copyArray = __webpack_require__(/*! ./_copyArray */ "./node_modules/lodash/_copyArray.js"),
    initCloneObject = __webpack_require__(/*! ./_initCloneObject */ "./node_modules/lodash/_initCloneObject.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isArrayLikeObject = __webpack_require__(/*! ./isArrayLikeObject */ "./node_modules/lodash/isArrayLikeObject.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isPlainObject = __webpack_require__(/*! ./isPlainObject */ "./node_modules/lodash/isPlainObject.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js"),
    safeGet = __webpack_require__(/*! ./_safeGet */ "./node_modules/lodash/_safeGet.js"),
    toPlainObject = __webpack_require__(/*! ./toPlainObject */ "./node_modules/lodash/toPlainObject.js");

/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = safeGet(object, key),
      srcValue = safeGet(source, key),
      stacked = stack.get(srcValue);

  if (stacked) {
    assignMergeValue(object, key, stacked);
    return;
  }
  var newValue = customizer ? customizer(objValue, srcValue, key + '', object, source, stack) : undefined;

  var isCommon = newValue === undefined;

  if (isCommon) {
    var isArr = isArray(srcValue),
        isBuff = !isArr && isBuffer(srcValue),
        isTyped = !isArr && !isBuff && isTypedArray(srcValue);

    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray(objValue)) {
        newValue = objValue;
      } else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      } else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer(srcValue, true);
      } else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray(srcValue, true);
      } else {
        newValue = [];
      }
    } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
      newValue = objValue;
      if (isArguments(objValue)) {
        newValue = toPlainObject(objValue);
      } else if (!isObject(objValue) || isFunction(objValue)) {
        newValue = initCloneObject(srcValue);
      }
    } else {
      isCommon = false;
    }
  }
  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack['delete'](srcValue);
  }
  assignMergeValue(object, key, newValue);
}

module.exports = baseMergeDeep;

/***/ }),

/***/ "./node_modules/lodash/_baseRest.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseRest.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(/*! ./identity */ "./node_modules/lodash/identity.js"),
    overRest = __webpack_require__(/*! ./_overRest */ "./node_modules/lodash/_overRest.js"),
    setToString = __webpack_require__(/*! ./_setToString */ "./node_modules/lodash/_setToString.js");

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

module.exports = baseRest;

/***/ }),

/***/ "./node_modules/lodash/_baseSetToString.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseSetToString.js ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var constant = __webpack_require__(/*! ./constant */ "./node_modules/lodash/constant.js"),
    defineProperty = __webpack_require__(/*! ./_defineProperty */ "./node_modules/lodash/_defineProperty.js"),
    identity = __webpack_require__(/*! ./identity */ "./node_modules/lodash/identity.js");

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function (func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

module.exports = baseSetToString;

/***/ }),

/***/ "./node_modules/lodash/_baseTimes.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseTimes.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;

/***/ }),

/***/ "./node_modules/lodash/_baseUnary.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseUnary.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function (value) {
    return func(value);
  };
}

module.exports = baseUnary;

/***/ }),

/***/ "./node_modules/lodash/_cloneArrayBuffer.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_cloneArrayBuffer.js ***!
  \**************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var Uint8Array = __webpack_require__(/*! ./_Uint8Array */ "./node_modules/lodash/_Uint8Array.js");

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

module.exports = cloneArrayBuffer;

/***/ }),

/***/ "./node_modules/lodash/_cloneBuffer.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_cloneBuffer.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Detect free variable `exports`. */
var freeExports = ( false ? 'undefined' : _typeof(exports)) == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && ( false ? 'undefined' : _typeof(module)) == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash/_cloneTypedArray.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_cloneTypedArray.js ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(/*! ./_cloneArrayBuffer */ "./node_modules/lodash/_cloneArrayBuffer.js");

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

module.exports = cloneTypedArray;

/***/ }),

/***/ "./node_modules/lodash/_copyArray.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_copyArray.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

module.exports = copyArray;

/***/ }),

/***/ "./node_modules/lodash/_copyObject.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_copyObject.js ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(/*! ./_assignValue */ "./node_modules/lodash/_assignValue.js"),
    baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "./node_modules/lodash/_baseAssignValue.js");

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

module.exports = copyObject;

/***/ }),

/***/ "./node_modules/lodash/_coreJsData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_coreJsData.js ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;

/***/ }),

/***/ "./node_modules/lodash/_createAssigner.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_createAssigner.js ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var baseRest = __webpack_require__(/*! ./_baseRest */ "./node_modules/lodash/_baseRest.js"),
    isIterateeCall = __webpack_require__(/*! ./_isIterateeCall */ "./node_modules/lodash/_isIterateeCall.js");

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function (object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = assigner.length > 3 && typeof customizer == 'function' ? (length--, customizer) : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

module.exports = createAssigner;

/***/ }),

/***/ "./node_modules/lodash/_createBaseFor.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_createBaseFor.js ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function (object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;

/***/ }),

/***/ "./node_modules/lodash/_defineProperty.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_defineProperty.js ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js");

var defineProperty = function () {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}();

module.exports = defineProperty;

/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/** Detect free variable `global` from Node.js. */
var freeGlobal = (typeof global === 'undefined' ? 'undefined' : _typeof(global)) == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/lodash/_getMapData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getMapData.js ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(/*! ./_isKeyable */ "./node_modules/lodash/_isKeyable.js");

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
}

module.exports = getMapData;

/***/ }),

/***/ "./node_modules/lodash/_getNative.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getNative.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(/*! ./_baseIsNative */ "./node_modules/lodash/_baseIsNative.js"),
    getValue = __webpack_require__(/*! ./_getValue */ "./node_modules/lodash/_getValue.js");

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;

/***/ }),

/***/ "./node_modules/lodash/_getPrototype.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getPrototype.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(/*! ./_overArg */ "./node_modules/lodash/_overArg.js");

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;

/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;

/***/ }),

/***/ "./node_modules/lodash/_getValue.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_getValue.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;

/***/ }),

/***/ "./node_modules/lodash/_hashClear.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_hashClear.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;

/***/ }),

/***/ "./node_modules/lodash/_hashDelete.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_hashDelete.js ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;

/***/ }),

/***/ "./node_modules/lodash/_hashGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashGet.js ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;

/***/ }),

/***/ "./node_modules/lodash/_hashHas.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashHas.js ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

module.exports = hashHas;

/***/ }),

/***/ "./node_modules/lodash/_hashSet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashSet.js ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;

/***/ }),

/***/ "./node_modules/lodash/_initCloneObject.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_initCloneObject.js ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__(/*! ./_baseCreate */ "./node_modules/lodash/_baseCreate.js"),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ "./node_modules/lodash/_getPrototype.js"),
    isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js");

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
    return typeof object.constructor == 'function' && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
}

module.exports = initCloneObject;

/***/ }),

/***/ "./node_modules/lodash/_isIndex.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_isIndex.js ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length && (type == 'number' || type != 'symbol' && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}

module.exports = isIndex;

/***/ }),

/***/ "./node_modules/lodash/_isIterateeCall.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_isIterateeCall.js ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index === 'undefined' ? 'undefined' : _typeof(index);
  if (type == 'number' ? isArrayLike(object) && isIndex(index, object.length) : type == 'string' && index in object) {
    return eq(object[index], value);
  }
  return false;
}

module.exports = isIterateeCall;

/***/ }),

/***/ "./node_modules/lodash/_isKeyable.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_isKeyable.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
  return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
}

module.exports = isKeyable;

/***/ }),

/***/ "./node_modules/lodash/_isMasked.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_isMasked.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(/*! ./_coreJsData */ "./node_modules/lodash/_coreJsData.js");

/** Used to detect methods masquerading as native. */
var maskSrcKey = function () {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? 'Symbol(src)_1.' + uid : '';
}();

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}

module.exports = isMasked;

/***/ }),

/***/ "./node_modules/lodash/_isPrototype.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_isPrototype.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = typeof Ctor == 'function' && Ctor.prototype || objectProto;

  return value === proto;
}

module.exports = isPrototype;

/***/ }),

/***/ "./node_modules/lodash/_listCacheClear.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_listCacheClear.js ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;

/***/ }),

/***/ "./node_modules/lodash/_listCacheDelete.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_listCacheDelete.js ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;

/***/ }),

/***/ "./node_modules/lodash/_listCacheGet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheGet.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;

/***/ }),

/***/ "./node_modules/lodash/_listCacheHas.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheHas.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;

/***/ }),

/***/ "./node_modules/lodash/_listCacheSet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheSet.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;

/***/ }),

/***/ "./node_modules/lodash/_mapCacheClear.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_mapCacheClear.js ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(/*! ./_Hash */ "./node_modules/lodash/_Hash.js"),
    ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js");

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash(),
    'map': new (Map || ListCache)(),
    'string': new Hash()
  };
}

module.exports = mapCacheClear;

/***/ }),

/***/ "./node_modules/lodash/_mapCacheDelete.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_mapCacheDelete.js ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;

/***/ }),

/***/ "./node_modules/lodash/_mapCacheGet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheGet.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;

/***/ }),

/***/ "./node_modules/lodash/_mapCacheHas.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheHas.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;

/***/ }),

/***/ "./node_modules/lodash/_mapCacheSet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheSet.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;

/***/ }),

/***/ "./node_modules/lodash/_nativeCreate.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_nativeCreate.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js");

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;

/***/ }),

/***/ "./node_modules/lodash/_nativeKeys.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_nativeKeys.js ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(/*! ./_overArg */ "./node_modules/lodash/_overArg.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;

/***/ }),

/***/ "./node_modules/lodash/_nativeKeysIn.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_nativeKeysIn.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;

/***/ }),

/***/ "./node_modules/lodash/_nodeUtil.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_nodeUtil.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `exports`. */
var freeExports = ( false ? 'undefined' : _typeof(exports)) == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && ( false ? 'undefined' : _typeof(module)) == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = function () {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}();

module.exports = nodeUtil;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;

/***/ }),

/***/ "./node_modules/lodash/_overArg.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_overArg.js ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function (arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;

/***/ }),

/***/ "./node_modules/lodash/_overRest.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_overRest.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(/*! ./_apply */ "./node_modules/lodash/_apply.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? func.length - 1 : start, 0);
  return function () {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;

/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = (typeof self === 'undefined' ? 'undefined' : _typeof(self)) == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;

/***/ }),

/***/ "./node_modules/lodash/_safeGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_safeGet.js ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function safeGet(object, key) {
  if (key === 'constructor' && typeof object[key] === 'function') {
    return;
  }

  if (key == '__proto__') {
    return;
  }

  return object[key];
}

module.exports = safeGet;

/***/ }),

/***/ "./node_modules/lodash/_setToString.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setToString.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var baseSetToString = __webpack_require__(/*! ./_baseSetToString */ "./node_modules/lodash/_baseSetToString.js"),
    shortOut = __webpack_require__(/*! ./_shortOut */ "./node_modules/lodash/_shortOut.js");

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

module.exports = setToString;

/***/ }),

/***/ "./node_modules/lodash/_shortOut.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_shortOut.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function () {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;

/***/ }),

/***/ "./node_modules/lodash/_stackClear.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_stackClear.js ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js");

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache();
  this.size = 0;
}

module.exports = stackClear;

/***/ }),

/***/ "./node_modules/lodash/_stackDelete.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_stackDelete.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;

/***/ }),

/***/ "./node_modules/lodash/_stackGet.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackGet.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;

/***/ }),

/***/ "./node_modules/lodash/_stackHas.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackHas.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;

/***/ }),

/***/ "./node_modules/lodash/_stackSet.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackSet.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js"),
    MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js");

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;

/***/ }),

/***/ "./node_modules/lodash/_toSource.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_toSource.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return func + '';
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;

/***/ }),

/***/ "./node_modules/lodash/assign.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/assign.js ***!
  \***************************************/
/*! dynamic exports provided */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(/*! ./_assignValue */ "./node_modules/lodash/_assignValue.js"),
    copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/lodash/_copyObject.js"),
    createAssigner = __webpack_require__(/*! ./_createAssigner */ "./node_modules/lodash/_createAssigner.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js"),
    isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns own enumerable string keyed properties of source objects to the
 * destination object. Source objects are applied from left to right.
 * Subsequent sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object` and is loosely based on
 * [`Object.assign`](https://mdn.io/Object/assign).
 *
 * @static
 * @memberOf _
 * @since 0.10.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.assignIn
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * function Bar() {
 *   this.c = 3;
 * }
 *
 * Foo.prototype.b = 2;
 * Bar.prototype.d = 4;
 *
 * _.assign({ 'a': 0 }, new Foo, new Bar);
 * // => { 'a': 1, 'c': 3 }
 */
var assign = createAssigner(function (object, source) {
  if (isPrototype(source) || isArrayLike(source)) {
    copyObject(source, keys(source), object);
    return;
  }
  for (var key in source) {
    if (hasOwnProperty.call(source, key)) {
      assignValue(object, key, source[key]);
    }
  }
});

module.exports = assign;

/***/ }),

/***/ "./node_modules/lodash/constant.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/constant.js ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function () {
    return value;
  };
}

module.exports = constant;

/***/ }),

/***/ "./node_modules/lodash/debounce.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/debounce.js ***!
  \*****************************************/
/*! dynamic exports provided */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    now = __webpack_require__(/*! ./now */ "./node_modules/lodash/now.js"),
    toNumber = __webpack_require__(/*! ./toNumber */ "./node_modules/lodash/toNumber.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

module.exports = debounce;

/***/ }),

/***/ "./node_modules/lodash/eq.js":
/*!***********************************!*\
  !*** ./node_modules/lodash/eq.js ***!
  \***********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || value !== value && other !== other;
}

module.exports = eq;

/***/ }),

/***/ "./node_modules/lodash/identity.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/identity.js ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;

/***/ }),

/***/ "./node_modules/lodash/isArguments.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArguments.js ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(/*! ./_baseIsArguments */ "./node_modules/lodash/_baseIsArguments.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function () {
    return arguments;
}()) ? baseIsArguments : function (value) {
    return isObjectLike(value) && hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;

/***/ }),

/***/ "./node_modules/lodash/isArray.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/isArray.js ***!
  \****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;

/***/ }),

/***/ "./node_modules/lodash/isArrayLike.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArrayLike.js ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js");

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;

/***/ }),

/***/ "./node_modules/lodash/isArrayLikeObject.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/isArrayLikeObject.js ***!
  \**************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

module.exports = isArrayLikeObject;

/***/ }),

/***/ "./node_modules/lodash/isBuffer.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isBuffer.js ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js"),
    stubFalse = __webpack_require__(/*! ./stubFalse */ "./node_modules/lodash/stubFalse.js");

/** Detect free variable `exports`. */
var freeExports = ( false ? 'undefined' : _typeof(exports)) == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && ( false ? 'undefined' : _typeof(module)) == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash/isFunction.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/isFunction.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
    if (!isObject(value)) {
        return false;
    }
    // The use of `Object#toString` avoids issues with the `typeof` operator
    // in Safari 9 which returns 'object' for typed arrays and other constructors.
    var tag = baseGetTag(value);
    return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;

/***/ }),

/***/ "./node_modules/lodash/isLength.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isLength.js ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;

/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;

/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object';
}

module.exports = isObjectLike;

/***/ }),

/***/ "./node_modules/lodash/isPlainObject.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/isPlainObject.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ "./node_modules/lodash/_getPrototype.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}

module.exports = isPlainObject;

/***/ }),

/***/ "./node_modules/lodash/isString.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isString.js ***!
  \*****************************************/
/*! dynamic exports provided */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var stringTag = '[object String]';

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function isString(value) {
    return typeof value == 'string' || !isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag;
}

module.exports = isString;

/***/ }),

/***/ "./node_modules/lodash/isSymbol.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isSymbol.js ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
    return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'symbol' || isObjectLike(value) && baseGetTag(value) == symbolTag;
}

module.exports = isSymbol;

/***/ }),

/***/ "./node_modules/lodash/isTypedArray.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isTypedArray.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(/*! ./_baseIsTypedArray */ "./node_modules/lodash/_baseIsTypedArray.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "./node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "./node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;

/***/ }),

/***/ "./node_modules/lodash/keys.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/keys.js ***!
  \*************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ "./node_modules/lodash/_arrayLikeKeys.js"),
    baseKeys = __webpack_require__(/*! ./_baseKeys */ "./node_modules/lodash/_baseKeys.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;

/***/ }),

/***/ "./node_modules/lodash/keysIn.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/keysIn.js ***!
  \***************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ "./node_modules/lodash/_arrayLikeKeys.js"),
    baseKeysIn = __webpack_require__(/*! ./_baseKeysIn */ "./node_modules/lodash/_baseKeysIn.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;

/***/ }),

/***/ "./node_modules/lodash/merge.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/merge.js ***!
  \**************************************/
/*! dynamic exports provided */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

var baseMerge = __webpack_require__(/*! ./_baseMerge */ "./node_modules/lodash/_baseMerge.js"),
    createAssigner = __webpack_require__(/*! ./_createAssigner */ "./node_modules/lodash/_createAssigner.js");

/**
 * This method is like `_.assign` except that it recursively merges own and
 * inherited enumerable string keyed properties of source objects into the
 * destination object. Source properties that resolve to `undefined` are
 * skipped if a destination value exists. Array and plain object properties
 * are merged recursively. Other objects and value types are overridden by
 * assignment. Source objects are applied from left to right. Subsequent
 * sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 0.5.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = {
 *   'a': [{ 'b': 2 }, { 'd': 4 }]
 * };
 *
 * var other = {
 *   'a': [{ 'c': 3 }, { 'e': 5 }]
 * };
 *
 * _.merge(object, other);
 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
 */
var merge = createAssigner(function (object, source, srcIndex) {
  baseMerge(object, source, srcIndex);
});

module.exports = merge;

/***/ }),

/***/ "./node_modules/lodash/now.js":
/*!************************************!*\
  !*** ./node_modules/lodash/now.js ***!
  \************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function now() {
  return root.Date.now();
};

module.exports = now;

/***/ }),

/***/ "./node_modules/lodash/stubFalse.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/stubFalse.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;

/***/ }),

/***/ "./node_modules/lodash/toNumber.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toNumber.js ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? other + '' : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}

module.exports = toNumber;

/***/ }),

/***/ "./node_modules/lodash/toPlainObject.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/toPlainObject.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/lodash/_copyObject.js"),
    keysIn = __webpack_require__(/*! ./keysIn */ "./node_modules/lodash/keysIn.js");

/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */
function toPlainObject(value) {
  return copyObject(value, keysIn(value));
}

module.exports = toPlainObject;

/***/ }),

/***/ "./node_modules/popper.js/dist/esm/popper.js":
/*!***************************************************!*\
  !*** ./node_modules/popper.js/dist/esm/popper.js ***!
  \***************************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(global) {/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.15.0
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';

var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
var timeoutDuration = 0;
for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
  if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
    timeoutDuration = 1;
    break;
  }
}

function microtaskDebounce(fn) {
  var called = false;
  return function () {
    if (called) {
      return;
    }
    called = true;
    window.Promise.resolve().then(function () {
      called = false;
      fn();
    });
  };
}

function taskDebounce(fn) {
  var scheduled = false;
  return function () {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function () {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}

var supportsMicroTasks = isBrowser && window.Promise;

/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/
var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;

/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */
function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */
function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  }
  // NOTE: 1 DOM access here
  var window = element.ownerDocument.defaultView;
  var css = window.getComputedStyle(element, null);
  return property ? css[property] : css;
}

/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */
function getParentNode(element) {
  if (element.nodeName === 'HTML') {
    return element;
  }
  return element.parentNode || element.host;
}

/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */
function getScrollParent(element) {
  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
  if (!element) {
    return document.body;
  }

  switch (element.nodeName) {
    case 'HTML':
    case 'BODY':
      return element.ownerDocument.body;
    case '#document':
      return element.body;
  }

  // Firefox want us to check `-x` and `-y` variations as well

  var _getStyleComputedProp = getStyleComputedProperty(element),
      overflow = _getStyleComputedProp.overflow,
      overflowX = _getStyleComputedProp.overflowX,
      overflowY = _getStyleComputedProp.overflowY;

  if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
    return element;
  }

  return getScrollParent(getParentNode(element));
}

var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);

/**
 * Determines if the browser is Internet Explorer
 * @method
 * @memberof Popper.Utils
 * @param {Number} version to check
 * @returns {Boolean} isIE
 */
function isIE(version) {
  if (version === 11) {
    return isIE11;
  }
  if (version === 10) {
    return isIE10;
  }
  return isIE11 || isIE10;
}

/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */
function getOffsetParent(element) {
  if (!element) {
    return document.documentElement;
  }

  var noOffsetParent = isIE(10) ? document.body : null;

  // NOTE: 1 DOM access here
  var offsetParent = element.offsetParent || null;
  // Skip hidden elements which don't have an offsetParent
  while (offsetParent === noOffsetParent && element.nextElementSibling) {
    offsetParent = (element = element.nextElementSibling).offsetParent;
  }

  var nodeName = offsetParent && offsetParent.nodeName;

  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
    return element ? element.ownerDocument.documentElement : document.documentElement;
  }

  // .offsetParent will return the closest TH, TD or TABLE in case
  // no offsetParent is present, I hate this job...
  if (['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
    return getOffsetParent(offsetParent);
  }

  return offsetParent;
}

function isOffsetContainer(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY') {
    return false;
  }
  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}

/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */
function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }

  return node;
}

/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */
function findCommonOffsetParent(element1, element2) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return document.documentElement;
  }

  // Here we make sure to give as "start" the element that comes first in the DOM
  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1;

  // Get common ancestor container
  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer;

  // Both nodes are inside #document

  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }

    return getOffsetParent(commonAncestorContainer);
  }

  // one of the nodes is inside shadowDOM, find which one
  var element1root = getRoot(element1);
  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}

/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */
function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    var html = element.ownerDocument.documentElement;
    var scrollingElement = element.ownerDocument.scrollingElement || html;
    return scrollingElement[upperSide];
  }

  return element[upperSide];
}

/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */
function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var scrollTop = getScroll(element, 'top');
  var scrollLeft = getScroll(element, 'left');
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}

/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */

function getBordersSize(styles, axis) {
  var sideA = axis === 'x' ? 'Left' : 'Top';
  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

  return parseFloat(styles['border' + sideA + 'Width'], 10) + parseFloat(styles['border' + sideB + 'Width'], 10);
}

function getSize(axis, body, html, computedStyle) {
  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? parseInt(html['offset' + axis]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')]) : 0);
}

function getWindowSizes(document) {
  var body = document.body;
  var html = document.documentElement;
  var computedStyle = isIE(10) && getComputedStyle(html);

  return {
    height: getSize('Height', body, html, computedStyle),
    width: getSize('Width', body, html, computedStyle)
  };
}

var classCallCheck = function classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var defineProperty = function defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */
function getClientRect(offsets) {
  return _extends({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}

/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */
function getBoundingClientRect(element) {
  var rect = {};

  // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11
  try {
    if (isIE(10)) {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } else {
      rect = element.getBoundingClientRect();
    }
  } catch (e) {}

  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  };

  // subtract scrollbar size from sizes
  var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
  var width = sizes.width || element.clientWidth || result.right - result.left;
  var height = sizes.height || element.clientHeight || result.bottom - result.top;

  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height;

  // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons
  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');

    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }

  return getClientRect(result);
}

function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var isIE10 = isIE(10);
  var isHTML = parent.nodeName === 'HTML';
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);

  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = parseFloat(styles.borderTopWidth, 10);
  var borderLeftWidth = parseFloat(styles.borderLeftWidth, 10);

  // In cases where the parent is fixed, we must ignore negative scroll in offset calc
  if (fixedPosition && isHTML) {
    parentRect.top = Math.max(parentRect.top, 0);
    parentRect.left = Math.max(parentRect.left, 0);
  }
  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0;

  // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.
  if (!isIE10 && isHTML) {
    var marginTop = parseFloat(styles.marginTop, 10);
    var marginLeft = parseFloat(styles.marginLeft, 10);

    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft;

    // Attach marginTop and marginLeft because in some circumstances we may need them
    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }

  if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var html = element.ownerDocument.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);

  var scrollTop = !excludeScroll ? getScroll(html) : 0;
  var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;

  var offset = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width: width,
    height: height
  };

  return getClientRect(offset);
}

/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */
function isFixed(element) {
  var nodeName = element.nodeName;
  if (nodeName === 'BODY' || nodeName === 'HTML') {
    return false;
  }
  if (getStyleComputedProperty(element, 'position') === 'fixed') {
    return true;
  }
  var parentNode = getParentNode(element);
  if (!parentNode) {
    return false;
  }
  return isFixed(parentNode);
}

/**
 * Finds the first parent of an element that has a transformed property defined
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} first transformed parent or documentElement
 */

function getFixedPositionOffsetParent(element) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element || !element.parentElement || isIE()) {
    return document.documentElement;
  }
  var el = element.parentElement;
  while (el && getStyleComputedProperty(el, 'transform') === 'none') {
    el = el.parentElement;
  }
  return el || document.documentElement;
}

/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @param {Boolean} fixedPosition - Is in fixed position mode
 * @returns {Object} Coordinates of the boundaries
 */
function getBoundaries(popper, reference, padding, boundariesElement) {
  var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  // NOTE: 1 DOM access here

  var boundaries = { top: 0, left: 0 };
  var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);

  // Handle viewport case
  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
  } else {
    // Handle other cases based on DOM element used as boundaries
    var boundariesNode = void 0;
    if (boundariesElement === 'scrollParent') {
      boundariesNode = getScrollParent(getParentNode(reference));
      if (boundariesNode.nodeName === 'BODY') {
        boundariesNode = popper.ownerDocument.documentElement;
      }
    } else if (boundariesElement === 'window') {
      boundariesNode = popper.ownerDocument.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }

    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);

    // In case of HTML, we need a different computation
    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(popper.ownerDocument),
          height = _getWindowSizes.height,
          width = _getWindowSizes.width;

      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      // for all the other DOM elements, this one is good
      boundaries = offsets;
    }
  }

  // Add paddings
  padding = padding || 0;
  var isPaddingNumber = typeof padding === 'number';
  boundaries.left += isPaddingNumber ? padding : padding.left || 0;
  boundaries.top += isPaddingNumber ? padding : padding.top || 0;
  boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
  boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;

  return boundaries;
}

function getArea(_ref) {
  var width = _ref.width,
      height = _ref.height;

  return width * height;
}

/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

  if (placement.indexOf('auto') === -1) {
    return placement;
  }

  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };

  var sortedAreas = Object.keys(rects).map(function (key) {
    return _extends({
      key: key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function (a, b) {
    return b.area - a.area;
  });

  var filteredAreas = sortedAreas.filter(function (_ref2) {
    var width = _ref2.width,
        height = _ref2.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });

  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

  var variation = placement.split('-')[1];

  return computedPlacement + (variation ? '-' + variation : '');
}

/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @param {Element} fixedPosition - is in fixed position mode
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */
function getReferenceOffsets(state, popper, reference) {
  var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
}

/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */
function getOuterSizes(element) {
  var window = element.ownerDocument.defaultView;
  var styles = window.getComputedStyle(element);
  var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
  var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}

/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */
function getOppositePlacement(placement) {
  var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */
function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split('-')[0];

  // Get popper node sizes
  var popperRect = getOuterSizes(popper);

  // Add position, width and height to our offsets object
  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  };

  // depending by the popper placement we have to compute its offsets slightly differently
  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
  var mainSide = isHoriz ? 'top' : 'left';
  var secondarySide = isHoriz ? 'left' : 'top';
  var measurement = isHoriz ? 'height' : 'width';
  var secondaryMeasurement = !isHoriz ? 'height' : 'width';

  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }

  return popperOffsets;
}

/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function find(arr, check) {
  // use native find if supported
  if (Array.prototype.find) {
    return arr.find(check);
  }

  // use `filter` to obtain the same behavior of `find`
  return arr.filter(check)[0];
}

/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function findIndex(arr, prop, value) {
  // use native findIndex if supported
  if (Array.prototype.findIndex) {
    return arr.findIndex(function (cur) {
      return cur[prop] === value;
    });
  }

  // use `find` + `indexOf` if `findIndex` isn't supported
  var match = find(arr, function (obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}

/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */
function runModifiers(modifiers, data, ends) {
  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

  modifiersToRun.forEach(function (modifier) {
    if (modifier['function']) {
      // eslint-disable-line dot-notation
      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
    }
    var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
    if (modifier.enabled && isFunction(fn)) {
      // Add properties to offsets to make them a complete clientRect object
      // we do this before each modifier to make sure the previous one doesn't
      // mess with these values
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);

      data = fn(data, modifier);
    }
  });

  return data;
}

/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */
function update() {
  // if popper is destroyed, don't perform any further update
  if (this.state.isDestroyed) {
    return;
  }

  var data = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  };

  // compute reference element offsets
  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

  // store the computed placement inside `originalPlacement`
  data.originalPlacement = data.placement;

  data.positionFixed = this.options.positionFixed;

  // compute the popper offsets
  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);

  data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute';

  // run the modifiers
  data = runModifiers(this.modifiers, data);

  // the first `update` will call `onCreate` callback
  // the other ones will call `onUpdate` callback
  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}

/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */
function isModifierEnabled(modifiers, modifierName) {
  return modifiers.some(function (_ref) {
    var name = _ref.name,
        enabled = _ref.enabled;
    return enabled && name === modifierName;
  });
}

/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */
function getSupportedPropertyName(property) {
  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (var i = 0; i < prefixes.length; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? '' + prefix + upperProp : property;
    if (typeof document.body.style[toCheck] !== 'undefined') {
      return toCheck;
    }
  }
  return null;
}

/**
 * Destroys the popper.
 * @method
 * @memberof Popper
 */
function destroy() {
  this.state.isDestroyed = true;

  // touch DOM only if `applyStyle` modifier is enabled
  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
    this.popper.removeAttribute('x-placement');
    this.popper.style.position = '';
    this.popper.style.top = '';
    this.popper.style.left = '';
    this.popper.style.right = '';
    this.popper.style.bottom = '';
    this.popper.style.willChange = '';
    this.popper.style[getSupportedPropertyName('transform')] = '';
  }

  this.disableEventListeners();

  // remove the popper if user explicity asked for the deletion on destroy
  // do not use `remove` because IE11 doesn't support it
  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }
  return this;
}

/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */
function getWindow(element) {
  var ownerDocument = element.ownerDocument;
  return ownerDocument ? ownerDocument.defaultView : window;
}

function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === 'BODY';
  var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
  target.addEventListener(event, callback, { passive: true });

  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }
  scrollParents.push(target);
}

/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function setupEventListeners(reference, options, state, updateBound) {
  // Resize event listener on window
  state.updateBound = updateBound;
  getWindow(reference).addEventListener('resize', state.updateBound, { passive: true });

  // Scroll event listener on scroll parents
  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;

  return state;
}

/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */
function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}

/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function removeEventListeners(reference, state) {
  // Remove resize event listener on window
  getWindow(reference).removeEventListener('resize', state.updateBound);

  // Remove scroll event listener on scroll parents
  state.scrollParents.forEach(function (target) {
    target.removeEventListener('scroll', state.updateBound);
  });

  // Reset state
  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}

/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger `onUpdate` callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */
function disableEventListeners() {
  if (this.state.eventsEnabled) {
    cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}

/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */
function isNumeric(n) {
  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setStyles(element, styles) {
  Object.keys(styles).forEach(function (prop) {
    var unit = '';
    // add unit if the value is numeric and is one of the following
    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = 'px';
    }
    element.style[prop] = styles[prop] + unit;
  });
}

/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function (prop) {
    var value = attributes[prop];
    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */
function applyStyle(data) {
  // any property present in `data.styles` will be applied to the popper,
  // in this way we can make the 3rd party modifiers add custom styles to it
  // Be aware, modifiers could override the properties defined in the previous
  // lines of this modifier!
  setStyles(data.instance.popper, data.styles);

  // any property present in `data.attributes` will be applied to the popper,
  // they will be set as HTML attributes of the element
  setAttributes(data.instance.popper, data.attributes);

  // if arrowElement is defined and arrowStyles has some properties
  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
    setStyles(data.arrowElement, data.arrowStyles);
  }

  return data;
}

/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper
 * @param {Object} options - Popper.js options
 */
function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  // compute reference element offsets
  var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

  popper.setAttribute('x-placement', placement);

  // Apply `position` to popper before anything else because
  // without the position applied we can't guarantee correct computations
  setStyles(popper, { position: options.positionFixed ? 'fixed' : 'absolute' });

  return options;
}

/**
 * @function
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Boolean} shouldRound - If the offsets should be rounded at all
 * @returns {Object} The popper's position offsets rounded
 *
 * The tale of pixel-perfect positioning. It's still not 100% perfect, but as
 * good as it can be within reason.
 * Discussion here: https://github.com/FezVrasta/popper.js/pull/715
 *
 * Low DPI screens cause a popper to be blurry if not using full pixels (Safari
 * as well on High DPI screens).
 *
 * Firefox prefers no rounding for positioning and does not have blurriness on
 * high DPI screens.
 *
 * Only horizontal placement and left/right values need to be considered.
 */
function getRoundedOffsets(data, shouldRound) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var round = Math.round,
      floor = Math.floor;

  var noRound = function noRound(v) {
    return v;
  };

  var referenceWidth = round(reference.width);
  var popperWidth = round(popper.width);

  var isVertical = ['left', 'right'].indexOf(data.placement) !== -1;
  var isVariation = data.placement.indexOf('-') !== -1;
  var sameWidthParity = referenceWidth % 2 === popperWidth % 2;
  var bothOddWidth = referenceWidth % 2 === 1 && popperWidth % 2 === 1;

  var horizontalToInteger = !shouldRound ? noRound : isVertical || isVariation || sameWidthParity ? round : floor;
  var verticalToInteger = !shouldRound ? noRound : round;

  return {
    left: horizontalToInteger(bothOddWidth && !isVariation && shouldRound ? popper.left - 1 : popper.left),
    top: verticalToInteger(popper.top),
    bottom: verticalToInteger(popper.bottom),
    right: horizontalToInteger(popper.right)
  };
}

var isFirefox = isBrowser && /Firefox/i.test(navigator.userAgent);

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeStyle(data, options) {
  var x = options.x,
      y = options.y;
  var popper = data.offsets.popper;

  // Remove this legacy support in Popper.js v2

  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'applyStyle';
  }).gpuAcceleration;
  if (legacyGpuAccelerationOption !== undefined) {
    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
  }
  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent);

  // Styles
  var styles = {
    position: popper.position
  };

  var offsets = getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox);

  var sideA = x === 'bottom' ? 'top' : 'bottom';
  var sideB = y === 'right' ? 'left' : 'right';

  // if gpuAcceleration is set to `true` and transform is supported,
  //  we use `translate3d` to apply the position to the popper we
  // automatically use the supported prefixed version if needed
  var prefixedProperty = getSupportedPropertyName('transform');

  // now, let's make a step back and look at this code closely (wtf?)
  // If the content of the popper grows once it's been positioned, it
  // may happen that the popper gets misplaced because of the new content
  // overflowing its reference element
  // To avoid this problem, we provide two options (x and y), which allow
  // the consumer to define the offset origin.
  // If we position a popper on top of a reference element, we can set
  // `x` to `top` to make the popper grow towards its top instead of
  // its bottom.
  var left = void 0,
      top = void 0;
  if (sideA === 'bottom') {
    // when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
    // and not the bottom of the html element
    if (offsetParent.nodeName === 'HTML') {
      top = -offsetParent.clientHeight + offsets.bottom;
    } else {
      top = -offsetParentRect.height + offsets.bottom;
    }
  } else {
    top = offsets.top;
  }
  if (sideB === 'right') {
    if (offsetParent.nodeName === 'HTML') {
      left = -offsetParent.clientWidth + offsets.right;
    } else {
      left = -offsetParentRect.width + offsets.right;
    }
  } else {
    left = offsets.left;
  }
  if (gpuAcceleration && prefixedProperty) {
    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
    styles[sideA] = 0;
    styles[sideB] = 0;
    styles.willChange = 'transform';
  } else {
    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
    var invertTop = sideA === 'bottom' ? -1 : 1;
    var invertLeft = sideB === 'right' ? -1 : 1;
    styles[sideA] = top * invertTop;
    styles[sideB] = left * invertLeft;
    styles.willChange = sideA + ', ' + sideB;
  }

  // Attributes
  var attributes = {
    'x-placement': data.placement
  };

  // Update `data` attributes, styles and arrowStyles
  data.attributes = _extends({}, attributes, data.attributes);
  data.styles = _extends({}, styles, data.styles);
  data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);

  return data;
}

/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */
function isModifierRequired(modifiers, requestingName, requestedName) {
  var requesting = find(modifiers, function (_ref) {
    var name = _ref.name;
    return name === requestingName;
  });

  var isRequired = !!requesting && modifiers.some(function (modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });

  if (!isRequired) {
    var _requesting = '`' + requestingName + '`';
    var requested = '`' + requestedName + '`';
    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
  }
  return isRequired;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function arrow(data, options) {
  var _data$offsets$arrow;

  // arrow depends on keepTogether in order to work
  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
    return data;
  }

  var arrowElement = options.element;

  // if arrowElement is a string, suppose it's a CSS selector
  if (typeof arrowElement === 'string') {
    arrowElement = data.instance.popper.querySelector(arrowElement);

    // if arrowElement is not found, don't run the modifier
    if (!arrowElement) {
      return data;
    }
  } else {
    // if the arrowElement isn't a query selector we must check that the
    // provided DOM node is child of its popper node
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn('WARNING: `arrow.element` must be child of its popper element!');
      return data;
    }
  }

  var placement = data.placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isVertical = ['left', 'right'].indexOf(placement) !== -1;

  var len = isVertical ? 'height' : 'width';
  var sideCapitalized = isVertical ? 'Top' : 'Left';
  var side = sideCapitalized.toLowerCase();
  var altSide = isVertical ? 'left' : 'top';
  var opSide = isVertical ? 'bottom' : 'right';
  var arrowElementSize = getOuterSizes(arrowElement)[len];

  //
  // extends keepTogether behavior making sure the popper and its
  // reference have enough pixels in conjunction
  //

  // top/left side
  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  }
  // bottom/right side
  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }
  data.offsets.popper = getClientRect(data.offsets.popper);

  // compute center of the popper
  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

  // Compute the sideValue using the updated popper offsets
  // take popper margin in account because we don't have this info available
  var css = getStyleComputedProperty(data.instance.popper);
  var popperMarginSide = parseFloat(css['margin' + sideCapitalized], 10);
  var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width'], 10);
  var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;

  // prevent arrowElement from being placed not contiguously to its popper
  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

  data.arrowElement = arrowElement;
  data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);

  return data;
}

/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */
function getOppositeVariation(variation) {
  if (variation === 'end') {
    return 'start';
  } else if (variation === 'start') {
    return 'end';
  }
  return variation;
}

/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-end` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */
var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

// Get rid of `auto` `auto-start` and `auto-end`
var validPlacements = placements.slice(3);

/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */
function clockwise(placement) {
  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var index = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
  return counter ? arr.reverse() : arr;
}

var BEHAVIORS = {
  FLIP: 'flip',
  CLOCKWISE: 'clockwise',
  COUNTERCLOCKWISE: 'counterclockwise'
};

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function flip(data, options) {
  // if `inner` modifier is enabled, we can't use the `flip` modifier
  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
    return data;
  }

  if (data.flipped && data.placement === data.originalPlacement) {
    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
    return data;
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);

  var placement = data.placement.split('-')[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split('-')[1] || '';

  var flipOrder = [];

  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;
    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;
    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;
    default:
      flipOrder = options.behavior;
  }

  flipOrder.forEach(function (step, index) {
    if (placement !== step || flipOrder.length === index + 1) {
      return data;
    }

    placement = data.placement.split('-')[0];
    placementOpposite = getOppositePlacement(placement);

    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference;

    // using floor because the reference offsets may contain decimals we are not going to consider here
    var floor = Math.floor;
    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

    // flip the variation if required
    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;

    // flips variation if reference element overflows boundaries
    var flippedVariationByRef = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

    // flips variation if popper content overflows boundaries
    var flippedVariationByContent = !!options.flipVariationsByContent && (isVertical && variation === 'start' && overflowsRight || isVertical && variation === 'end' && overflowsLeft || !isVertical && variation === 'start' && overflowsBottom || !isVertical && variation === 'end' && overflowsTop);

    var flippedVariation = flippedVariationByRef || flippedVariationByContent;

    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      // this boolean to detect any flip loop
      data.flipped = true;

      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }

      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }

      data.placement = placement + (variation ? '-' + variation : '');

      // this object contains `position`, we want to preserve it along with
      // any additional property we may add in the future
      data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

      data = runModifiers(data.instance.modifiers, data, 'flip');
    }
  });
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function keepTogether(data) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var placement = data.placement.split('-')[0];
  var floor = Math.floor;
  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
  var side = isVertical ? 'right' : 'bottom';
  var opSide = isVertical ? 'left' : 'top';
  var measurement = isVertical ? 'width' : 'height';

  if (popper[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
  }
  if (popper[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }

  return data;
}

/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */
function toValue(str, measurement, popperOffsets, referenceOffsets) {
  // separate value from unit
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2];

  // If it's not a number it's an operator, I guess
  if (!value) {
    return str;
  }

  if (unit.indexOf('%') === 0) {
    var element = void 0;
    switch (unit) {
      case '%p':
        element = popperOffsets;
        break;
      case '%':
      case '%r':
      default:
        element = referenceOffsets;
    }

    var rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === 'vh' || unit === 'vw') {
    // if is a vh or vw, we calculate the size based on the viewport
    var size = void 0;
    if (unit === 'vh') {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
    return size / 100 * value;
  } else {
    // if is an explicit pixel unit, we get rid of the unit and keep the value
    // if is an implicit unit, it's px, and we return just the value
    return value;
  }
}

/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */
function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0];

  // Use height if placement is left or right and index is 0 otherwise use width
  // in this way the first offset will use an axis and the second one
  // will use the other one
  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

  // Split the offset string to obtain a list of values and operands
  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
    return frag.trim();
  });

  // Detect if the offset string contains a pair of values or a single one
  // they could be separated by comma or space
  var divider = fragments.indexOf(find(fragments, function (frag) {
    return frag.search(/,|\s/) !== -1;
  }));

  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
  }

  // If divider is found, we divide the list of values and operands to divide
  // them by ofset X and Y.
  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

  // Convert the values with units to absolute pixels to allow our computations
  ops = ops.map(function (op, index) {
    // Most of the units rely on the orientation of the popper
    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
    var mergeWithPrevious = false;
    return op
    // This aggregates any `+` or `-` sign that aren't considered operators
    // e.g.: 10 + +5 => [10, +, +5]
    .reduce(function (a, b) {
      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      } else if (mergeWithPrevious) {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      } else {
        return a.concat(b);
      }
    }, [])
    // Here we convert the string values into number values (in px)
    .map(function (str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  });

  // Loop trough the offsets arrays and execute the operations
  ops.forEach(function (op, index) {
    op.forEach(function (frag, index2) {
      if (isNumeric(frag)) {
        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
      }
    });
  });
  return offsets;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */
function offset(data, _ref) {
  var offset = _ref.offset;
  var placement = data.placement,
      _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var basePlacement = placement.split('-')[0];

  var offsets = void 0;
  if (isNumeric(+offset)) {
    offsets = [+offset, 0];
  } else {
    offsets = parseOffset(offset, popper, reference, basePlacement);
  }

  if (basePlacement === 'left') {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === 'right') {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === 'top') {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === 'bottom') {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }

  data.popper = popper;
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function preventOverflow(data, options) {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

  // If offsetParent is the reference element, we really want to
  // go one step up and use the next offsetParent as reference to
  // avoid to make this modifier completely useless and look like broken
  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  }

  // NOTE: DOM access here
  // resets the popper's position so that the document size can be calculated excluding
  // the size of the popper element itself
  var transformProp = getSupportedPropertyName('transform');
  var popperStyles = data.instance.popper.style; // assignment to help minification
  var top = popperStyles.top,
      left = popperStyles.left,
      transform = popperStyles[transformProp];

  popperStyles.top = '';
  popperStyles.left = '';
  popperStyles[transformProp] = '';

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);

  // NOTE: DOM access here
  // restores the original style properties after the offsets have been computed
  popperStyles.top = top;
  popperStyles.left = left;
  popperStyles[transformProp] = transform;

  options.boundaries = boundaries;

  var order = options.priority;
  var popper = data.offsets.popper;

  var check = {
    primary: function primary(placement) {
      var value = popper[placement];
      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }
      return defineProperty({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === 'right' ? 'left' : 'top';
      var value = popper[mainSide];
      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
      }
      return defineProperty({}, mainSide, value);
    }
  };

  order.forEach(function (placement) {
    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
    popper = _extends({}, popper, check[side](placement));
  });

  data.offsets.popper = popper;

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var shiftvariation = placement.split('-')[1];

  // if shift shiftvariation is specified, run the modifier
  if (shiftvariation) {
    var _data$offsets = data.offsets,
        reference = _data$offsets.reference,
        popper = _data$offsets.popper;

    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
    var side = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';

    var shiftOffsets = {
      start: defineProperty({}, side, reference[side]),
      end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
    };

    data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
    return data;
  }

  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'preventOverflow';
  }).boundaries;

  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === true) {
      return data;
    }

    data.hide = true;
    data.attributes['x-out-of-boundaries'] = '';
  } else {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === false) {
      return data;
    }

    data.hide = false;
    data.attributes['x-out-of-boundaries'] = false;
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

  popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);

  return data;
}

/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */

/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */
var modifiers = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: shift
  },

  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unit-less, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the `height`.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: offset,
    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },

  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * A scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: preventOverflow,
    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ['left', 'right', 'top', 'bottom'],
    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper. This makes sure the popper always has a little padding
     * between the edges of its container
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier. Can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: 'scrollParent'
  },

  /**
   * Modifier used to make sure the reference and its popper stay near each other
   * without leaving any gap between the two. Especially useful when the arrow is
   * enabled and you want to ensure that it points to its reference element.
   * It cares only about the first axis. You can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: keepTogether
  },

  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjunction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: arrow,
    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: '[x-arrow]'
  },

  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: flip,
    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations)
     */
    behavior: 'flip',
    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position.
     * The popper will never be placed outside of the defined boundaries
     * (except if `keepTogether` is enabled)
     */
    boundariesElement: 'viewport',
    /**
     * @prop {Boolean} flipVariations=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the reference element overlaps its boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariations: false,
    /**
     * @prop {Boolean} flipVariationsByContent=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the popper element overlaps its reference boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariationsByContent: false
  },

  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,
    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: false,
    /** @prop {ModifierFn} */
    fn: inner
  },

  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: hide
  },

  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: computeStyle,
    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: true,
    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: 'bottom',
    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: 'right'
  },

  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define your own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: applyStyle,
    /** @prop {Function} */
    onLoad: applyStyleOnLoad,
    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: undefined
  }
};

/**
 * The `dataObject` is an object containing all the information used by Popper.js.
 * This object is passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */

/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overridden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass an object with the same
 * structure of the `options` object, as the 3rd argument. For example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */
var Defaults = {
  /**
   * Popper's placement.
   * @prop {Popper.placements} placement='bottom'
   */
  placement: 'bottom',

  /**
   * Set this to true if you want popper to position it self in 'fixed' mode
   * @prop {Boolean} positionFixed=false
   */
  positionFixed: false,

  /**
   * Whether events (resize, scroll) are initially enabled.
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: true,

  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: false,

  /**
   * Callback called when the popper is created.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function onCreate() {},

  /**
   * Callback called when the popper is updated. This callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function onUpdate() {},

  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js.
   * @prop {modifiers}
   */
  modifiers: modifiers
};

/**
 * @callback onCreate
 * @param {dataObject} data
 */

/**
 * @callback onUpdate
 * @param {dataObject} data
 */

// Utils
// Methods
var Popper = function () {
  /**
   * Creates a new Popper.js instance.
   * @class Popper
   * @param {Element|referenceObject} reference - The reference element used to position the popper
   * @param {Element} popper - The HTML / XML element used as the popper
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
  function Popper(reference, popper) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck(this, Popper);

    this.scheduleUpdate = function () {
      return requestAnimationFrame(_this.update);
    };

    // make update() debounced, so that it only runs at most once-per-tick
    this.update = debounce(this.update.bind(this));

    // with {} we create a new object with the options inside it
    this.options = _extends({}, Popper.Defaults, options);

    // init state
    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    };

    // get reference and popper elements (allow jQuery wrappers)
    this.reference = reference && reference.jquery ? reference[0] : reference;
    this.popper = popper && popper.jquery ? popper[0] : popper;

    // Deep merge modifiers options
    this.options.modifiers = {};
    Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
      _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    });

    // Refactoring modifiers' list (Object => Array)
    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
      return _extends({
        name: name
      }, _this.options.modifiers[name]);
    })
    // sort the modifiers by order
    .sort(function (a, b) {
      return a.order - b.order;
    });

    // modifiers have the ability to execute arbitrary code when Popper.js get inited
    // such code is executed in the same order of its modifier
    // they could add new properties to their options configuration
    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
    this.modifiers.forEach(function (modifierOptions) {
      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    });

    // fire the first update to position the popper in the right place
    this.update();

    var eventsEnabled = this.options.eventsEnabled;
    if (eventsEnabled) {
      // setup event listeners, they will take care of update the position in specific situations
      this.enableEventListeners();
    }

    this.state.eventsEnabled = eventsEnabled;
  }

  // We can't use class properties because they don't get listed in the
  // class prototype and break stuff like Sinon stubs


  createClass(Popper, [{
    key: 'update',
    value: function update$$1() {
      return update.call(this);
    }
  }, {
    key: 'destroy',
    value: function destroy$$1() {
      return destroy.call(this);
    }
  }, {
    key: 'enableEventListeners',
    value: function enableEventListeners$$1() {
      return enableEventListeners.call(this);
    }
  }, {
    key: 'disableEventListeners',
    value: function disableEventListeners$$1() {
      return disableEventListeners.call(this);
    }

    /**
     * Schedules an update. It will run on the next UI update available.
     * @method scheduleUpdate
     * @memberof Popper
     */

    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */

  }]);
  return Popper;
}();

/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10.
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */

Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;

/* harmony default export */ __webpack_exports__["default"] = (Popper);
//# sourceMappingURL=popper.js.map
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/smoothscroll-polyfill/dist/smoothscroll.js":
/*!*****************************************************************!*\
  !*** ./node_modules/smoothscroll-polyfill/dist/smoothscroll.js ***!
  \*****************************************************************/
/*! dynamic exports provided */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/* smoothscroll v0.4.4 - 2019 - Dustan Kasten, Jeremias Menichelli - MIT License */
(function () {
  'use strict';

  // polyfill

  function polyfill() {
    // aliases
    var w = window;
    var d = document;

    // return if scroll behavior is supported and polyfill is not forced
    if ('scrollBehavior' in d.documentElement.style && w.__forceSmoothScrollPolyfill__ !== true) {
      return;
    }

    // globals
    var Element = w.HTMLElement || w.Element;
    var SCROLL_TIME = 468;

    // object gathering original scroll methods
    var original = {
      scroll: w.scroll || w.scrollTo,
      scrollBy: w.scrollBy,
      elementScroll: Element.prototype.scroll || scrollElement,
      scrollIntoView: Element.prototype.scrollIntoView
    };

    // define timing method
    var now = w.performance && w.performance.now ? w.performance.now.bind(w.performance) : Date.now;

    /**
     * indicates if a the current browser is made by Microsoft
     * @method isMicrosoftBrowser
     * @param {String} userAgent
     * @returns {Boolean}
     */
    function isMicrosoftBrowser(userAgent) {
      var userAgentPatterns = ['MSIE ', 'Trident/', 'Edge/'];

      return new RegExp(userAgentPatterns.join('|')).test(userAgent);
    }

    /*
     * IE has rounding bug rounding down clientHeight and clientWidth and
     * rounding up scrollHeight and scrollWidth causing false positives
     * on hasScrollableSpace
     */
    var ROUNDING_TOLERANCE = isMicrosoftBrowser(w.navigator.userAgent) ? 1 : 0;

    /**
     * changes scroll position inside an element
     * @method scrollElement
     * @param {Number} x
     * @param {Number} y
     * @returns {undefined}
     */
    function scrollElement(x, y) {
      this.scrollLeft = x;
      this.scrollTop = y;
    }

    /**
     * returns result of applying ease math function to a number
     * @method ease
     * @param {Number} k
     * @returns {Number}
     */
    function ease(k) {
      return 0.5 * (1 - Math.cos(Math.PI * k));
    }

    /**
     * indicates if a smooth behavior should be applied
     * @method shouldBailOut
     * @param {Number|Object} firstArg
     * @returns {Boolean}
     */
    function shouldBailOut(firstArg) {
      if (firstArg === null || (typeof firstArg === 'undefined' ? 'undefined' : _typeof(firstArg)) !== 'object' || firstArg.behavior === undefined || firstArg.behavior === 'auto' || firstArg.behavior === 'instant') {
        // first argument is not an object/null
        // or behavior is auto, instant or undefined
        return true;
      }

      if ((typeof firstArg === 'undefined' ? 'undefined' : _typeof(firstArg)) === 'object' && firstArg.behavior === 'smooth') {
        // first argument is an object and behavior is smooth
        return false;
      }

      // throw error when behavior is not supported
      throw new TypeError('behavior member of ScrollOptions ' + firstArg.behavior + ' is not a valid value for enumeration ScrollBehavior.');
    }

    /**
     * indicates if an element has scrollable space in the provided axis
     * @method hasScrollableSpace
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */
    function hasScrollableSpace(el, axis) {
      if (axis === 'Y') {
        return el.clientHeight + ROUNDING_TOLERANCE < el.scrollHeight;
      }

      if (axis === 'X') {
        return el.clientWidth + ROUNDING_TOLERANCE < el.scrollWidth;
      }
    }

    /**
     * indicates if an element has a scrollable overflow property in the axis
     * @method canOverflow
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */
    function canOverflow(el, axis) {
      var overflowValue = w.getComputedStyle(el, null)['overflow' + axis];

      return overflowValue === 'auto' || overflowValue === 'scroll';
    }

    /**
     * indicates if an element can be scrolled in either axis
     * @method isScrollable
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */
    function isScrollable(el) {
      var isScrollableY = hasScrollableSpace(el, 'Y') && canOverflow(el, 'Y');
      var isScrollableX = hasScrollableSpace(el, 'X') && canOverflow(el, 'X');

      return isScrollableY || isScrollableX;
    }

    /**
     * finds scrollable parent of an element
     * @method findScrollableParent
     * @param {Node} el
     * @returns {Node} el
     */
    function findScrollableParent(el) {
      while (el !== d.body && isScrollable(el) === false) {
        el = el.parentNode || el.host;
      }

      return el;
    }

    /**
     * self invoked function that, given a context, steps through scrolling
     * @method step
     * @param {Object} context
     * @returns {undefined}
     */
    function step(context) {
      var time = now();
      var value;
      var currentX;
      var currentY;
      var elapsed = (time - context.startTime) / SCROLL_TIME;

      // avoid elapsed times higher than one
      elapsed = elapsed > 1 ? 1 : elapsed;

      // apply easing to elapsed time
      value = ease(elapsed);

      currentX = context.startX + (context.x - context.startX) * value;
      currentY = context.startY + (context.y - context.startY) * value;

      context.method.call(context.scrollable, currentX, currentY);

      // scroll more if we have not reached our destination
      if (currentX !== context.x || currentY !== context.y) {
        w.requestAnimationFrame(step.bind(w, context));
      }
    }

    /**
     * scrolls window or element with a smooth behavior
     * @method smoothScroll
     * @param {Object|Node} el
     * @param {Number} x
     * @param {Number} y
     * @returns {undefined}
     */
    function smoothScroll(el, x, y) {
      var scrollable;
      var startX;
      var startY;
      var method;
      var startTime = now();

      // define scroll context
      if (el === d.body) {
        scrollable = w;
        startX = w.scrollX || w.pageXOffset;
        startY = w.scrollY || w.pageYOffset;
        method = original.scroll;
      } else {
        scrollable = el;
        startX = el.scrollLeft;
        startY = el.scrollTop;
        method = scrollElement;
      }

      // scroll looping over a frame
      step({
        scrollable: scrollable,
        method: method,
        startTime: startTime,
        startX: startX,
        startY: startY,
        x: x,
        y: y
      });
    }

    // ORIGINAL METHODS OVERRIDES
    // w.scroll and w.scrollTo
    w.scroll = w.scrollTo = function () {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      }

      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        original.scroll.call(w, arguments[0].left !== undefined ? arguments[0].left : _typeof(arguments[0]) !== 'object' ? arguments[0] : w.scrollX || w.pageXOffset,
        // use top prop, second argument if present or fallback to scrollY
        arguments[0].top !== undefined ? arguments[0].top : arguments[1] !== undefined ? arguments[1] : w.scrollY || w.pageYOffset);

        return;
      }

      // LET THE SMOOTHNESS BEGIN!
      smoothScroll.call(w, d.body, arguments[0].left !== undefined ? ~~arguments[0].left : w.scrollX || w.pageXOffset, arguments[0].top !== undefined ? ~~arguments[0].top : w.scrollY || w.pageYOffset);
    };

    // w.scrollBy
    w.scrollBy = function () {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      }

      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0])) {
        original.scrollBy.call(w, arguments[0].left !== undefined ? arguments[0].left : _typeof(arguments[0]) !== 'object' ? arguments[0] : 0, arguments[0].top !== undefined ? arguments[0].top : arguments[1] !== undefined ? arguments[1] : 0);

        return;
      }

      // LET THE SMOOTHNESS BEGIN!
      smoothScroll.call(w, d.body, ~~arguments[0].left + (w.scrollX || w.pageXOffset), ~~arguments[0].top + (w.scrollY || w.pageYOffset));
    };

    // Element.prototype.scroll and Element.prototype.scrollTo
    Element.prototype.scroll = Element.prototype.scrollTo = function () {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      }

      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        // if one number is passed, throw error to match Firefox implementation
        if (typeof arguments[0] === 'number' && arguments[1] === undefined) {
          throw new SyntaxError('Value could not be converted');
        }

        original.elementScroll.call(this,
        // use left prop, first number argument or fallback to scrollLeft
        arguments[0].left !== undefined ? ~~arguments[0].left : _typeof(arguments[0]) !== 'object' ? ~~arguments[0] : this.scrollLeft,
        // use top prop, second argument or fallback to scrollTop
        arguments[0].top !== undefined ? ~~arguments[0].top : arguments[1] !== undefined ? ~~arguments[1] : this.scrollTop);

        return;
      }

      var left = arguments[0].left;
      var top = arguments[0].top;

      // LET THE SMOOTHNESS BEGIN!
      smoothScroll.call(this, this, typeof left === 'undefined' ? this.scrollLeft : ~~left, typeof top === 'undefined' ? this.scrollTop : ~~top);
    };

    // Element.prototype.scrollBy
    Element.prototype.scrollBy = function () {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      }

      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        original.elementScroll.call(this, arguments[0].left !== undefined ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, arguments[0].top !== undefined ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop);

        return;
      }

      this.scroll({
        left: ~~arguments[0].left + this.scrollLeft,
        top: ~~arguments[0].top + this.scrollTop,
        behavior: arguments[0].behavior
      });
    };

    // Element.prototype.scrollIntoView
    Element.prototype.scrollIntoView = function () {
      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        original.scrollIntoView.call(this, arguments[0] === undefined ? true : arguments[0]);

        return;
      }

      // LET THE SMOOTHNESS BEGIN!
      var scrollableParent = findScrollableParent(this);
      var parentRects = scrollableParent.getBoundingClientRect();
      var clientRects = this.getBoundingClientRect();

      if (scrollableParent !== d.body) {
        // reveal element inside parent
        smoothScroll.call(this, scrollableParent, scrollableParent.scrollLeft + clientRects.left - parentRects.left, scrollableParent.scrollTop + clientRects.top - parentRects.top);

        // reveal parent in viewport unless is fixed
        if (w.getComputedStyle(scrollableParent).position !== 'fixed') {
          w.scrollBy({
            left: parentRects.left,
            top: parentRects.top,
            behavior: 'smooth'
          });
        }
      } else {
        // reveal element in viewport
        w.scrollBy({
          left: clientRects.left,
          top: clientRects.top,
          behavior: 'smooth'
        });
      }
    };
  }

  if (( false ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined') {
    // commonjs
    module.exports = { polyfill: polyfill };
  } else {
    // global
    polyfill();
  }
})();

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var g;

// This works in non-strict mode
g = function () {
	return this;
}();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),

/***/ "./resources/js/app/init.js":
/*!**********************************!*\
  !*** ./resources/js/app/init.js ***!
  \**********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__inits_buttons__ = __webpack_require__(/*! ./inits/buttons */ "./resources/js/app/inits/buttons.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inits_sliders__ = __webpack_require__(/*! ./inits/sliders */ "./resources/js/app/inits/sliders.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__inits_popup__ = __webpack_require__(/*! ./inits/popup */ "./resources/js/app/inits/popup.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__inits_links__ = __webpack_require__(/*! ./inits/links */ "./resources/js/app/inits/links.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__inits_navSlide__ = __webpack_require__(/*! ./inits/navSlide */ "./resources/js/app/inits/navSlide.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__inits_scrollbar__ = __webpack_require__(/*! ./inits/scrollbar */ "./resources/js/app/inits/scrollbar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_smoothscroll_polyfill__ = __webpack_require__(/*! smoothscroll-polyfill */ "./node_modules/smoothscroll-polyfill/dist/smoothscroll.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_smoothscroll_polyfill___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_smoothscroll_polyfill__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__inits_fabs__ = __webpack_require__(/*! ./inits/fabs */ "./resources/js/app/inits/fabs.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__inits_input_mask__ = __webpack_require__(/*! ./inits/input-mask */ "./resources/js/app/inits/input-mask.js");












var AllModules = ['bmd', 'buttons', 'sliders',
// 'popovers',
// 'timers',
'popup',
// 'lazy-images',
'links', 'nav-slide', 'scrollbar', 'fabs', 'input-mask'];

/* harmony default export */ __webpack_exports__["a"] = (function () {
	var context = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.body;
	var modules = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : AllModules;
	var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	modules.forEach(function (module) {
		switch (module) {
			case 'bmd':
				__WEBPACK_IMPORTED_MODULE_0_jquery___default()(context).bootstrapMaterialDesign();
				break;

			case 'buttons':
				Object(__WEBPACK_IMPORTED_MODULE_1__inits_buttons__["a" /* default */])(context);
				break;

			// 	case 'sidebar':
			// 		sidebar(context);
			// 		break;

			case 'sliders':
				Object(__WEBPACK_IMPORTED_MODULE_2__inits_sliders__["a" /* default */])(context);
				break;

			// 	case 'popovers':
			// 		popovers(context);
			// 		break;

			// 	case 'timers':
			// 		timers(context, options);
			// 		break;

			case 'popup':
				Object(__WEBPACK_IMPORTED_MODULE_3__inits_popup__["a" /* default */])(context, options);
				break;

			// 	case 'lazy-images':
			// 		lazyImages(context);
			// 		break;

			case 'links':
				__WEBPACK_IMPORTED_MODULE_7_smoothscroll_polyfill___default.a.polyfill();
				Object(__WEBPACK_IMPORTED_MODULE_4__inits_links__["a" /* default */])(context);
				break;

			case 'nav-slide':
				Object(__WEBPACK_IMPORTED_MODULE_5__inits_navSlide__["a" /* default */])(context);
				break;

			case 'scrollbar':
				Object(__WEBPACK_IMPORTED_MODULE_6__inits_scrollbar__["a" /* default */])(context);
				break;

			case 'fabs':
				Object(__WEBPACK_IMPORTED_MODULE_8__inits_fabs__["a" /* default */])(context);
				break;

			case 'input-mask':
				Object(__WEBPACK_IMPORTED_MODULE_9__inits_input_mask__["a" /* default */])(context);
				break;
		}
	});
});

/***/ }),

/***/ "./resources/js/app/inits/buttons.js":
/*!*******************************************!*\
  !*** ./resources/js/app/inits/buttons.js ***!
  \*******************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);


/* harmony default export */ __webpack_exports__["a"] = (function (context) {

	__WEBPACK_IMPORTED_MODULE_0_jquery___default()(context).find('.btn:not(.btn-opacity-dark)').each(function (key, node) {

		node.addEventListener('mouseenter', function (e) {
			var span = this.querySelector('.btn__back');
			if (!span) {
				span = document.createElement('span');
				span.className = 'btn__back';
				node.append(span);
			}

			span.style.top = e.pageY - Math.ceil(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).offset().top) + 'px';
			span.style.left = e.pageX - Math.ceil(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).offset().left) + 'px';
		});

		node.addEventListener('mouseout', function (e) {
			var span = this.querySelector('.btn__back');
			if (span) {
				span.style.top = e.pageY - Math.ceil(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).offset().top) + 'px';
				span.style.left = e.pageX - Math.ceil(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).offset().left) + 'px';
			}
		});
	});
});;

/***/ }),

/***/ "./resources/js/app/inits/fabs.js":
/*!****************************************!*\
  !*** ./resources/js/app/inits/fabs.js ***!
  \****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_parseOptions__ = __webpack_require__(/*! ../../utils/parseOptions */ "./resources/js/utils/parseOptions.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_fab__ = __webpack_require__(/*! ../../modules/fab */ "./resources/js/modules/fab.js");



/* harmony default export */ __webpack_exports__["a"] = (function (context) {
	var fabs = {};
	$(context).find('[data-fab]').each(function (key, node) {
		var name = node.getAttribute('data-fab');
		var options = Object(__WEBPACK_IMPORTED_MODULE_0__utils_parseOptions__["a" /* default */])(node.getAttribute('data-fab-options'));

		if (!name) {
			name = 'fab_' + Object.keys(app.fabs).length + 1;
		}
		fabs[name] = new __WEBPACK_IMPORTED_MODULE_1__modules_fab__["a" /* default */](node, name, options);
	});
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./resources/js/app/inits/input-mask.js":
/*!**********************************************!*\
  !*** ./resources/js/app/inits/input-mask.js ***!
  \**********************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_imask__ = __webpack_require__(/*! imask */ "./node_modules/imask/dist/imask.esm.js");


/* harmony default export */ __webpack_exports__["a"] = (function (context) {

	$(context).find('input[data-mask]').each(function (key, node) {
		var maskOptions = {
			mask: node.getAttribute('data-mask')
		};

		var mask = new __WEBPACK_IMPORTED_MODULE_0_imask__["a" /* default */](node, maskOptions);
	});
});;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./resources/js/app/inits/links.js":
/*!*****************************************!*\
  !*** ./resources/js/app/inits/links.js ***!
  \*****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);


/* harmony default export */ __webpack_exports__["a"] = (function (context) {

	__WEBPACK_IMPORTED_MODULE_0_jquery___default()(context).find('.js-link-scroll[href*="#"]:not([href="#"])').each(function (key, node) {
		node.addEventListener('click', function (e) {
			e.preventDefault();

			if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
				var hash = this.href.replace(/[^#]*(.*)/, '$1'),
				    $target = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this.hash);
				// element = document.getElementById(hash.slice(1));

				$target = $target.length ? $target : __WEBPACK_IMPORTED_MODULE_0_jquery___default()('[name=' + this.hash.slice(1) + ']');

				if ($target.length) {
					var t = Math.round($target.offset().top);

					if (RS.Options.fixingCompactHeader == true) {
						var compactHeader = document.querySelector(RS.Options.compactHeaderSelector);
						if (compactHeader != undefined) {
							t += t < 0 ? -70 : -70;
						}
					}

					window.scroll({ top: t, behavior: 'smooth' });
					window.history.replaceState('', document.title, window.location.href.replace(location.hash, '') + this.hash);

					$target.click();
				}
			}
		}, false);
	});

	__WEBPACK_IMPORTED_MODULE_0_jquery___default()(context).find('.js-link-up').each(function (key, node) {
		node.addEventListener('click', function (e) {
			e.preventDefault();

			window.scroll({ top: 0, behavior: 'smooth' });
		});
	});
});;

/***/ }),

/***/ "./resources/js/app/inits/navSlide.js":
/*!********************************************!*\
  !*** ./resources/js/app/inits/navSlide.js ***!
  \********************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony default export */ __webpack_exports__["a"] = (function (context) {
	$(context).find('.nav-slide').each(function () {
		var $nav = $(this);
		var $line = $('<li>').addClass('nav-slide-line');
		var $currentActive = $nav.find('.active');
		var $items = $nav.find('.nav-item');

		var setActive = function setActive($item) {
			var $span = $item.children();

			$line.css({
				'width': $span.outerWidth(),
				'left': $span.position().left + $nav.scrollLeft()
			});
		};

		$nav.append($line);

		setActive($nav.find('.active'));

		$nav.find('.nav-link').on('mouseenter', function () {
			var $item = $(this);

			setActive($item);
		});

		$(this).on('mouseleave', function () {
			setActive($currentActive);
		});

		if ($nav.attr('role') == 'tablist') {
			$items.on('shown.bs.tab', function () {
				var $item = $(this).children('.nav-link');
				$currentActive = $item;

				setActive($currentActive);
			});
		} else {
			$items.find('.nav-link').on('click', function () {
				var $item = $(this);

				$currentActive.removeClass('active');
				$item.addClass('active');

				$currentActive = $item;
				setActive($currentActive);
			});
		}
	});

	$(context).find('.nav-wrap').each(function () {

		var $this = $(this),
		    $nav = $this.children('.nav');

		var $navScroll = $('<div/>', {
			'class': 'nav-scroll scroll-element'
		}).html('<div class="scroll-arrow scroll-arrow_less"><svg class="icon-svg"><use xlink:href="#svg-arrow-left"></use></svg></div>\
					<div class="scroll-arrow scroll-arrow_more"><svg class="icon-svg"><use xlink:href="#svg-arrow-right"></use></svg></div>\
					<div class="scroll-element_outer">\
						<div class="scroll-element_size"></div>\
						<div class="scroll-element_track"></div>\
						<div class="scroll-bar"></div>\
				</div>').appendTo($this);

		$nav.scrollbar({
			showArrows: true,
			scrollx: $navScroll,
			scrollStep: 200
		});
	});
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./resources/js/app/inits/popup.js":
/*!*****************************************!*\
  !*** ./resources/js/app/inits/popup.js ***!
  \*****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_parseOptions__ = __webpack_require__(/*! ../../utils/parseOptions */ "./resources/js/utils/parseOptions.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_popup__ = __webpack_require__(/*! ../../modules/popup */ "./resources/js/modules/popup.js");



/* harmony default export */ __webpack_exports__["a"] = (function (context) {
	var popups = {};
	/* TODO: �� ���������������� �������� */
	$(context).find('[data-popup][data-type="ajax"],[data-popup][data-type="inline"]').each(function (key, node) {
		var name = node.getAttribute('data-popup');
		var options = Object(__WEBPACK_IMPORTED_MODULE_0__utils_parseOptions__["a" /* default */])(node.getAttribute('data-popup-options'));

		if (!name) {
			name = 'popup_' + Object.keys(popups).length + 1;
		}
		popups[name] = new __WEBPACK_IMPORTED_MODULE_1__modules_popup__["a" /* default */](node, name, options);
	});
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./resources/js/app/inits/scrollbar.js":
/*!*********************************************!*\
  !*** ./resources/js/app/inits/scrollbar.js ***!
  \*********************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_parseOptions__ = __webpack_require__(/*! ../../utils/parseOptions */ "./resources/js/utils/parseOptions.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_assign__ = __webpack_require__(/*! lodash/assign */ "./node_modules/lodash/assign.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_assign__);




/* harmony default export */ __webpack_exports__["a"] = (function (context) {
	var Default = {};

	__WEBPACK_IMPORTED_MODULE_0_jquery___default()(context).find('[data-scrollbar]').each(function (key, node) {

		var options = Object(__WEBPACK_IMPORTED_MODULE_1__utils_parseOptions__["a" /* default */])(node.getAttribute('data-scrollbar-options'));

		options = __WEBPACK_IMPORTED_MODULE_2_lodash_assign___default()({}, Default, options);

		node.classList.remove('scroll-wrapper');

		__WEBPACK_IMPORTED_MODULE_0_jquery___default()(node).scrollbar(options);
	});
});

/***/ }),

/***/ "./resources/js/app/inits/sliders.js":
/*!*******************************************!*\
  !*** ./resources/js/app/inits/sliders.js ***!
  \*******************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_parseOptions__ = __webpack_require__(/*! ../../utils/parseOptions */ "./resources/js/utils/parseOptions.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_slider__ = __webpack_require__(/*! ../../modules/slider */ "./resources/js/modules/slider.js");



/* harmony default export */ __webpack_exports__["a"] = (function (context) {
	var sliders = {};
	$(context).find('[data-slider]').each(function (key, node) {
		var name = node.getAttribute('data-slider');
		var options = Object(__WEBPACK_IMPORTED_MODULE_0__utils_parseOptions__["a" /* default */])(node.getAttribute('data-slider-options'));

		if (!name) {
			name = 'slider_' + Object.keys(sliders).length + 1;
		}
		sliders[name] = new __WEBPACK_IMPORTED_MODULE_1__modules_slider__["a" /* default */](node, name, options);
	});
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./resources/js/app/panel/PositionPanel.js":
/*!*************************************************!*\
  !*** ./resources/js/app/panel/PositionPanel.js ***!
  \*************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_overlay__ = __webpack_require__(/*! ../../utils/overlay */ "./resources/js/utils/overlay.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var PositionPanel = function () {
	function PositionPanel(panel) {
		_classCallCheck(this, PositionPanel);

		this.panel = panel;
		this.blocks = {};
		this.blockMeta = {
			"scripts": [],
			"styles": [],
			"inline": []
		};

		this.$preload = undefined;

		this.headTags = ["link[href]", "script[src]"].join(',');
	}

	PositionPanel.prototype.createBlock = function createBlock() {
		var panel = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
		var content = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

		var block = document.createElement('div');
		block.classList.add('panel-block');

		if (panel.opts.item.title || panel.opts.item.innerText) {
			var blockTitle = document.createElement('div');
			blockTitle.classList.add('panel-block__title');

			block.appendChild(blockTitle);
		}

		var blockContent = document.createElement('div');
		blockContent.classList.add('panel-block__content');

		block.appendChild(blockContent);

		panel.block = block;
		this.blocks[panel.opts.id] = panel;

		this.$inner.get(0).appendChild(block);

		this.updateBlock(panel, content);

		return block;
	};

	PositionPanel.prototype.updateBlock = function updateBlock() {
		var panel = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
		var content = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

		var block = this.blocks[panel.opts.id].block;
		__WEBPACK_IMPORTED_MODULE_0_jquery___default()(block).removeData();

		if (panel.opts.popupClass) {
			block.classList.add(panel.opts.popupClass);
		}

		var blockTitle = block.querySelector('.panel-block__title');
		if (blockTitle && (panel.opts.item.title || panel.opts.item.innerText)) {
			var title = panel.opts.item.title || panel.opts.title || panel.opts.item.innerText;

			blockTitle.innerText = title;
		}

		var blockContent = block.querySelector('.panel-block__content');
		if (blockContent) {
			blockContent.className = 'panel-block__content';
			// blockContent.removeAttribute('style');
			blockContent.innerHTML = '';

			var processed = void 0;

			if (content instanceof Element || content instanceof HTMLDocument) {
				blockContent.appendChild(content);
				processed = BX.processHTML(content.outerHTML, false);
			} else {
				blockContent.innerHTML = content;
				processed = BX.processHTML(content, false);
			}

			BX.ajax.processScripts(processed.SCRIPT);

			if (panel.opts.scrollContent) {
				__WEBPACK_IMPORTED_MODULE_0_jquery___default()(blockContent).off();
				blockContent.setAttribute('data-scrollbar', '');
			}
		}

		if (panel.opts.scrollBlock) {
			var blockScroll = document.createElement('div');
			blockScroll.setAttribute('data-scrollbar', '');

			while (block.firstChild) {
				blockScroll.append(block.firstChild);
			}

			block.append(blockScroll);
		}

		// $(block).find('.panel-block__content').html(content);

		// if (RS.Init)
		// {
		// 	RS.Init(block);
		// }

		return block;
	};

	PositionPanel.prototype.addMeta = function addMeta() {
		var _this = this;

		var content = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

		var loadScript = function loadScript(assets) {
			var d = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.Deferred();

			BX.loadScript(assets, function () {
				d.resolve();
			});

			return d.promise();
		};

		var loadCss = function loadCss(assets) {
			var d = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.Deferred();

			var css = assets.map(function (url) {
				return { url: url, ext: "css" };
			});

			BX.load(css, function () {
				d.resolve();
			});

			return d.promise();
		};

		var $newPageHead = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('<html />').html(__WEBPACK_IMPORTED_MODULE_0_jquery___default.a.parseHTML(content, document, true));

		var $currentTags = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(document).find(this.headTags),
		    $newTags = $newPageHead.find(this.headTags);

		// add new tags
		$newTags.filter(function (indexNewItem, newItem) {

			return $currentTags.filter(function (indexCurrentItem, currentItem) {
				return currentItem.outerHTML == newItem.outerHTML;
			}).length == 0;
		}).each(function (index, element) {
			var sourceUrl = void 0;

			switch (element.tagName.toLowerCase()) {
				case 'script':
					sourceUrl = element.getAttribute('src');
					if (sourceUrl.length > 0) {
						_this.blockMeta.scripts.push(sourceUrl);
					}
					break;
				case 'link':
					sourceUrl = element.getAttribute('href');
					if (sourceUrl.length > 0) {
						_this.blockMeta.styles.push(sourceUrl);
					}
					break;
				default:
					_this.blockMeta.inline.push(element.innerHTML);
			}
		});

		return __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.when(loadScript(this.blockMeta['scripts']), loadCss(this.blockMeta['styles']));
	};

	PositionPanel.prototype.removeMeta = function removeMeta() {
		var _this2 = this;

		var $currentTags = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(document).find(this.headTags);

		$currentTags.filter(function (indexCurrentItem, currentItem) {
			switch (currentItem.tagName.toLowerCase()) {
				case 'script':
					if (BX.util.in_array(currentItem.getAttribute('src'), _this2.blockMeta.scripts)) {
						return true;
					}
					break;
				case 'link':

					if (BX.util.in_array(currentItem.getAttribute('href'), _this2.blockMeta.styles)) {
						return true;
					}
					break;
				case 'inline':
					break;
			}
		}).remove();

		for (var type in this.blockMeta) {
			this.blockMeta[type] = [];
		}
	};

	PositionPanel.prototype.update = function update() {
		var _this3 = this;

		var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

		var d = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.Deferred();

		if (!this.blocks[url]) {
			d.reject();
			return d.promise();
		}

		this.panel.load(url).then(function (content) {
			var block = _this3.blocks[url].block;
			__WEBPACK_IMPORTED_MODULE_0_jquery___default()(block).find('.panel-block__content').html(content);

			d.resolve();
		});

		return d;
	};

	PositionPanel.prototype.open = function open() {
		var _this4 = this;

		var panel = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

		var type = panel.type,
		    id = void 0;

		var d = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.Deferred();
		var afterFn = function afterFn(panelId) {
			_this4.hidePreload();
			d.resolve(_this4.blocks[panelId]);
			_this4.$panel.addClass('is-open');
			_this4.active = panelId;
		};

		switch (type) {
			case 'html':
				break;

			case 'inline':
				var block = void 0;
				id = panel.opts.id;

				if (this.blocks[id]) {
					block = this.blocks[id].block;
				} else {
					block = this.createBlock(panel, panel.src);
				}

				Object(__WEBPACK_IMPORTED_MODULE_1__utils_overlay__["b" /* show */])();
				this.show(block);
				afterFn(id);

				break;

			case 'ajax':

				var link = panel.opts.item;
				var url = panel.opts.item.getAttribute('data-src') || panel.opts.item.href;
				id = url;
				panel.opts.id = url;

				if (this.blocks[id]) {
					var _block = this.blocks[id].block;

					var needCache = link.getAttribute('data-need-cache') == 'Y' || panel.opts.needCache;
					var needReload = link.getAttribute('data-need-reload') == 'Y' || panel.opts.needReload;

					if (!needCache || needCache && needReload) {
						Object(__WEBPACK_IMPORTED_MODULE_1__utils_overlay__["b" /* show */])().then(function ($overlay) {
							_this4.showPreload($overlay);

							_this4.panel.load(url).then(function (content) {

								// this.removeMeta();
								link.setAttribute('data-need-reload', 'N');

								_this4.addMeta(content).then(function () {
									var newContent = content.split('<!-- ajax-content-custom -->', 3)[1];
									if (newContent == undefined) {
										newContent = content.split('<!-- ajax-content -->', 3)[1];
									}

									newContent = newContent == undefined ? content : newContent;

									var wrapper = document.createElement('div');
									wrapper.innerHTML = newContent;

									var block = void 0;
									if (wrapper.childElementCount > 1) {
										block = _this4.updateBlock(panel, wrapper);
									} else {
										block = _this4.updateBlock(panel, wrapper.firstElementChild);
									}

									return _this4.show(block);
								}).then(function () {
									return afterFn(id);
								});
							});
						});
					} else {
						Object(__WEBPACK_IMPORTED_MODULE_1__utils_overlay__["b" /* show */])();
						this.show(_block);
						afterFn(id);
					}
				} else {
					Object(__WEBPACK_IMPORTED_MODULE_1__utils_overlay__["b" /* show */])().then(function ($overlay) {
						_this4.showPreload($overlay);

						_this4.panel.load(url).then(function (content) {

							// this.removeMeta();

							_this4.addMeta(content).then(function () {
								var newContent = content.split('<!-- ajax-content-custom -->', 3)[1];
								if (newContent == undefined) {
									newContent = content.split('<!-- ajax-content -->', 3)[1];
								}

								newContent = newContent == undefined ? content : newContent;

								var wrapper = document.createElement('div');
								wrapper.innerHTML = newContent;

								var block = void 0;
								if (wrapper.childElementCount > 1) {
									block = _this4.createBlock(panel, wrapper);
								} else {
									block = _this4.createBlock(panel, wrapper.firstElementChild);
								}

								return _this4.show(block);
							}).then(function () {
								return afterFn(id);
							});
						});
					});
				}
				break;

			default:
				break;
		}

		d.then(function () {
			__WEBPACK_IMPORTED_MODULE_0_jquery___default()(document).on('click.outside', function (e) {
				if (__WEBPACK_IMPORTED_MODULE_0_jquery___default()(e.target) != _this4.$inner && !!!__WEBPACK_IMPORTED_MODULE_0_jquery___default()(e.target).closest(_this4.$panel).length && __WEBPACK_IMPORTED_MODULE_0_jquery___default()(e.target).closest(document).length > 0) {
					_this4.panel.close();
				}
			});
		});

		return d.promise();
	};

	PositionPanel.prototype.close = function close() {
		var _this5 = this;

		__WEBPACK_IMPORTED_MODULE_0_jquery___default()(document).off('click.outside');

		return __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.when(this.hide(), this.hidePreload(), Object(__WEBPACK_IMPORTED_MODULE_1__utils_overlay__["a" /* hide */])()).then(function () {
			_this5.$panel.removeClass('is-open');

			return true;
		});
	};

	return PositionPanel;
}();

/* harmony default export */ __webpack_exports__["a"] = (PositionPanel);

/***/ }),

/***/ "./resources/js/app/panel/RightPanel.js":
/*!**********************************************!*\
  !*** ./resources/js/app/panel/RightPanel.js ***!
  \**********************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__PositionPanel__ = __webpack_require__(/*! ./PositionPanel */ "./resources/js/app/panel/PositionPanel.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var RightPanel = function (_PositionPanel) {
	_inherits(RightPanel, _PositionPanel);

	function RightPanel() {
		_classCallCheck(this, RightPanel);

		return _possibleConstructorReturn(this, _PositionPanel.apply(this, arguments));
	}

	RightPanel.prototype.showPreload = function showPreload($container) {
		if ($container && $container.length) {

			this.$preload = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('<div>').addClass('panel-loader').append('<span></span><span></span><span></span><span></span>');

			$container.append(this.$preload);
		}
	};

	RightPanel.prototype.hidePreload = function hidePreload() {
		if (this.$preload) {
			this.$preload.remove();
		}
	};

	RightPanel.prototype.getInnerWidth = function getInnerWidth(block) {
		var $block = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(block);
		var $blockClone = $block.clone();

		var innerWidth = void 0;

		$blockClone.css({
			position: 'absolute',
			visibility: 'hidden',
			left: '-99999px',
			top: '-99999px',
			display: 'block'
		});

		document.documentElement.appendChild($blockClone.get(0));
		// $('body').append($blockClone);
		innerWidth = $blockClone.outerWidth(); // $blockClone.outerWidth() > 500 ? $blockClone.outerWidth() : 500;

		// if (innerWidth > $(window).width()) {
		// 	innerWidth = $(window).width() - 60;
		// }

		return innerWidth;
	};

	RightPanel.prototype.show = function show(block) {
		__WEBPACK_IMPORTED_MODULE_0_jquery___default()(document).trigger('panel.show');

		var blockWidth = this.getInnerWidth(block);

		var AnimationComplete = function AnimationComplete() {
			__WEBPACK_IMPORTED_MODULE_0_jquery___default()(block).addClass('is-showed');

			__WEBPACK_IMPORTED_MODULE_0_jquery___default()(document).trigger('panel.showed');

			setTimeout(function () {
				__WEBPACK_IMPORTED_MODULE_0_jquery___default()(block).velocity({ opacity: 1 }, { duration: 300 });
			}, 100);
		};

		// const $controls = $('.side-panel__controls');
		// this.$panel.append($controls.clone());
		// this.$inner.append($controls);

		this.$inner.css({
			width: blockWidth,
			right: -blockWidth
		}).velocity({
			right: 0
		}, {
			duration: 300,
			easing: [.17, .67, .83, .67],
			complete: AnimationComplete
		});
	};

	RightPanel.prototype.hide = function hide() {
		var _this2 = this;

		var d = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.Deferred();

		var $inner = this.$inner;
		var blockWidth = $inner.outerWidth();

		$inner.velocity({
			right: -blockWidth
		}, {
			duration: 300,
			complete: function complete() {
				var $controls = _this2.$inner.find('.side-panel__controls');

				_this2.$panel.children('.side-panel__controls').remove();
				_this2.$panel.append($controls);

				$inner.children('.panel-block').removeClass('is-showed').css('opacity', 0);

				d.resolve();
			}
		});

		return d.promise();
	};

	_createClass(RightPanel, [{
		key: 'type',
		get: function get() {
			return 'right';
		}
	}, {
		key: '$panel',
		get: function get() {
			return __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#side-panel');
		}
	}, {
		key: '$inner',
		get: function get() {
			if (!this.$innerObj) {
				this.$innerObj = this.$panel.find('#side-panel-inner');
			}

			return this.$innerObj;
		}
	}, {
		key: '$container',
		get: function get() {
			return this.$panel.find('#side-panel-container');
		}
	}]);

	return RightPanel;
}(__WEBPACK_IMPORTED_MODULE_1__PositionPanel__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (RightPanel);

/***/ }),

/***/ "./resources/js/events.js":
/*!********************************!*\
  !*** ./resources/js/events.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);


function onReady() {

	// Fix work of fancybox
	var scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
	__WEBPACK_IMPORTED_MODULE_0_jquery___default()(document).on('beforeLoad.fb overlay.before_show', function (e, instance, slide) {
		__WEBPACK_IMPORTED_MODULE_0_jquery___default()('.js-scroll-hidden-compensate').css('margin-right', scrollbarWidth);
		// $('.js-fix-scroll')
		// 	.addClass('js-fix-scroll--fixed')
		// 	.css('padding-right', scrollbarWidth);
	});

	__WEBPACK_IMPORTED_MODULE_0_jquery___default()(document).on('afterClose.fb overlay.after_hide', function (e, instance, slide) {

		__WEBPACK_IMPORTED_MODULE_0_jquery___default()('.js-scroll-hidden-compensate').css('margin-right', 0);
		// if (!$.fancybox.getInstance())
		// {

		// 	$('.js-fix-scroll')
		// 		.removeClass('js-fix-scroll--fixed')
		// 		.css('padding-right', 0);
		// }
	});

	// Update captcha code
	__WEBPACK_IMPORTED_MODULE_0_jquery___default()(document).on('click', '[data-captcha-update-code]', function (e) {
		e.preventDefault();

		var $el = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this);
		var $form = $el.closest('form');
		if (!$form.length) {
			retirn;
		}
		__WEBPACK_IMPORTED_MODULE_0_jquery___default.a.getJSON(RS.Options.siteDir + 'ajax/captcha.php', function (res) {
			var $img = $form.find('img[src*="/bitrix/tools/captcha.php"]');
			$img.attr('src', res.src);

			var $captchaSid = $form.find('input[name="captcha_sid"]');
			$captchaSid.val(res.code);
		});
	});
}

__WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).ready(onReady);

/***/ }),

/***/ "./resources/js/global.js":
/*!********************************!*\
  !*** ./resources/js/global.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_merge__ = __webpack_require__(/*! lodash/merge */ "./node_modules/lodash/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_init_js__ = __webpack_require__(/*! ./app/init.js */ "./resources/js/app/init.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_overlay__ = __webpack_require__(/*! ./utils/overlay */ "./resources/js/utils/overlay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__panel__ = __webpack_require__(/*! ./panel */ "./resources/js/panel.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_popup__ = __webpack_require__(/*! ./modules/popup */ "./resources/js/modules/popup.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_toastr__ = __webpack_require__(/*! toastr */ "./node_modules/toastr/toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_jquery_setHtmlByUrl_js__ = __webpack_require__(/*! ./modules/jquery.setHtmlByUrl.js */ "./resources/js/modules/jquery.setHtmlByUrl.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_jquery_setHtmlByUrl_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__modules_jquery_setHtmlByUrl_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__modules_bootstrap__ = __webpack_require__(/*! ./modules/bootstrap */ "./resources/js/modules/bootstrap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__modules_page_animate__ = __webpack_require__(/*! ./modules/page-animate */ "./resources/js/modules/page-animate.js");








global.$ = global.jQuery = __WEBPACK_IMPORTED_MODULE_1_jquery___default.a;

global.toastr = __WEBPACK_IMPORTED_MODULE_6_toastr___default.a;
__WEBPACK_IMPORTED_MODULE_0_lodash_merge___default()(__WEBPACK_IMPORTED_MODULE_6_toastr___default.a.options, {
	positionClass: 'toast-bottom-right',
	closeButton: true,
	closeHtml: '<button><svg class="icon-svg"><use xlink:href="#svg-cross"></use></svg></button>'
	// timeOut : 0,
	// extendedTimeOut  : 0,
});





global.RS = global.RS || {};
__WEBPACK_IMPORTED_MODULE_0_lodash_merge___default()(global.RS, {
	Init: __WEBPACK_IMPORTED_MODULE_2__app_init_js__["a" /* default */],
	Utils: {
		popup: __WEBPACK_IMPORTED_MODULE_5__modules_popup__["a" /* default */],
		overlay: {
			show: __WEBPACK_IMPORTED_MODULE_3__utils_overlay__["b" /* show */],
			hide: __WEBPACK_IMPORTED_MODULE_3__utils_overlay__["a" /* hide */]
		},
		PageAnimate: __WEBPACK_IMPORTED_MODULE_9__modules_page_animate__["a" /* default */]
	}
});

__WEBPACK_IMPORTED_MODULE_1_jquery___default()(document).ready(function () {
	var panel = new __WEBPACK_IMPORTED_MODULE_4__panel__["a" /* default */]();

	__WEBPACK_IMPORTED_MODULE_0_lodash_merge___default()(global.RS, {
		Panel: panel
	});
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./resources/js/main.js":
/*!******************************!*\
  !*** ./resources/js/main.js ***!
  \******************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_init__ = __webpack_require__(/*! ./app/init */ "./resources/js/app/init.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_smoothstate__ = __webpack_require__(/*! ./modules/smoothstate */ "./resources/js/modules/smoothstate.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_barba_js__ = __webpack_require__(/*! barba.js */ "./node_modules/barba.js/dist/barba.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_barba_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_barba_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash_debounce__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash_debounce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash_debounce__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_isDesktop__ = __webpack_require__(/*! ./utils/isDesktop */ "./resources/js/utils/isDesktop.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_aos__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_aos___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_aos__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_jquery_animatecss_js__ = __webpack_require__(/*! ./modules/jquery.animatecss.js */ "./resources/js/modules/jquery.animatecss.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_jquery_animatecss_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__modules_jquery_animatecss_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__global__ = __webpack_require__(/*! ./global */ "./resources/js/global.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__events__ = __webpack_require__(/*! ./events */ "./resources/js/events.js");












// page on ready
function onReady() {
	if (Object(__WEBPACK_IMPORTED_MODULE_5__utils_isDesktop__["a" /* default */])()) {
		new __WEBPACK_IMPORTED_MODULE_2__modules_smoothstate__["a" /* default */]();
	}

	window.OnLoadPage();

	__WEBPACK_IMPORTED_MODULE_3_barba_js___default.a.Dispatcher.on('linkClicked', function (currentStatus, prevStatus, HTMLElementContainer, newPageRawHTML) {
		//	 CloseAll();
	});

	//ScrollerTop
	__WEBPACK_IMPORTED_MODULE_0_jquery___default()(document).on('click', '#js-scroller-arrow', function () {
		scrollerFooterArrow.scroll(0, 1000);
	});
}

// composite data recieved
function onFrameDataReceived() {
	var json = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	if (!(json.dynamicBlocks || []).length) {
		return;
	}

	json.dynamicBlocks.forEach(function (block, index) {
		Object(__WEBPACK_IMPORTED_MODULE_1__app_init__["a" /* default */])(document.querySelector(block.ID));
	});
}

__WEBPACK_IMPORTED_MODULE_0_jquery___default()(document).ready(onReady);
if (window.frameCacheVars !== undefined) {
	BX.addCustomEvent("onFrameDataReceived", function (json) {
		return onFrameDataReceived(json);
	});
}

window.OnLoadPage = function (HTMLElementContainer) {
	var doc;
	if (__WEBPACK_IMPORTED_MODULE_0_jquery___default()(HTMLElementContainer).length > 0) {
		doc = HTMLElementContainer;
		var $dataContainer = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(doc).find('.js-smoothData');

		__WEBPACK_IMPORTED_MODULE_0_jquery___default()(document.body).attr('class', $dataContainer.data('body-class'));
	} else {
		doc = document;
	}

	Object(__WEBPACK_IMPORTED_MODULE_1__app_init__["a" /* default */])(doc);

	setTimeout(function () {

		__WEBPACK_IMPORTED_MODULE_0_jquery___default()(document.body).addClass('is-loaded');

		if (document.documentElement.scrollHeight > document.documentElement.clientHeight) {
			__WEBPACK_IMPORTED_MODULE_0_jquery___default()(document).find('[data-scroll-notify]').show().on('click', function () {});
		} else {
			__WEBPACK_IMPORTED_MODULE_0_jquery___default()(document).find('[data-scroll-notify]').hide();
		}

		__WEBPACK_IMPORTED_MODULE_6_aos___default.a.init({
			mirror: true
		});
	}, 200);

	__WEBPACK_IMPORTED_MODULE_0_jquery___default()(function () {
		__WEBPACK_IMPORTED_MODULE_0_jquery___default.a.extend(__WEBPACK_IMPORTED_MODULE_0_jquery___default.a.easing, { easeInOutCubic: function easeInOutCubic(x, t, b, c, d) {
				if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;return c / 2 * ((t -= 2) * t * t + 2) + b;
			} });

		var options = {
			section: '[data-section]',
			sectionName: false,
			interstitialSection: '[data-section="interstitial"]',
			easing: 'easeInOutCubic',
			scrollSpeed: 700,
			offset: 1,
			scrollbars: true,
			standardScrollElements: '',
			setHeights: false,
			overflowScroll: true,
			before: function before() {},
			after: function after() {},
			afterResize: function afterResize() {},
			afterRender: function afterRender() {
				window.scrollifyInitialized = true;
				__WEBPACK_IMPORTED_MODULE_0_jquery___default()('body').addClass('is-fp-scrolling');
			}
		};

		function checkInit() {
			if ((__WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).innerWidth() < 1220 || __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).innerHeight() < 760) && window.scrollifyInitialized || __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#bx-panel').length > 0 || __WEBPACK_IMPORTED_MODULE_0_jquery___default()(doc).find(options.section + ':not(' + options.interstitialSection + ')').length < 1 || document.body.scrollHeight <= window.innerHeight) {
				destroy();
			} else if (__WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).innerWidth() >= 1220 && __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).innerHeight() > 760 && !window.scrollifyInitialized) {
				__WEBPACK_IMPORTED_MODULE_0_jquery___default.a.scrollify(options);
			}
		}

		function destroy() {
			__WEBPACK_IMPORTED_MODULE_0_jquery___default.a.scrollify.destroy();
			window.scrollifyInitialized = false;
			__WEBPACK_IMPORTED_MODULE_0_jquery___default()('body').removeClass('is-fp-scrolling');
		}

		checkInit();

		__WEBPACK_IMPORTED_MODULE_0_jquery___default()(document).on('overlay.after_show', function (e, instance, slide) {
			destroy();
		});

		__WEBPACK_IMPORTED_MODULE_0_jquery___default()(document).on('overlay.after_hide', function (e, instance, slide) {
			checkInit();
		});

		__WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).on('resize', __WEBPACK_IMPORTED_MODULE_4_lodash_debounce___default()(checkInit, 100));
	});

	__WEBPACK_IMPORTED_MODULE_0_jquery___default()(function () {

		var sections = document.querySelectorAll('[data-section]:not([data-section="interstitial"])');

		function checkScroll() {
			var windowSize = BX.GetWindowSize(),
			    windowCenter = windowSize.scrollTop + windowSize.innerHeight / 2,
			    deltas = [];

			for (var i in sections) {

				if (sections.hasOwnProperty(i) && BX.type.isDomNode(sections[i])) {
					var sectionPos = BX.pos(sections[i]),
					    sectionCenter = sectionPos.top + sectionPos.height / 2;

					deltas[i] = Math.abs(windowCenter - sectionCenter);
				}
			}

			var minDelta = Math.min.apply(null, deltas);
			var activeIndex = deltas.indexOf(minDelta);
			var activeSection = sections[activeIndex];

			if (activeSection != undefined && (__WEBPACK_IMPORTED_MODULE_0_jquery___default()(activeSection).hasClass('l-section--light') || activeSection.getAttribute('data-contrast') !== null)) {
				__WEBPACK_IMPORTED_MODULE_0_jquery___default()('.l-contrast').addClass('l-contrast--light');
			} else {
				__WEBPACK_IMPORTED_MODULE_0_jquery___default()('.l-contrast').removeClass('l-contrast--light');
			}

			// if (activeIndex == 0)
			// {
			// 	this.isExpandSideMenu = true;
			// 	BX.addClass(this.obMenu, 'side-menu--expand');
			// }
			// else if (BX.hasClass(this.obMenu, 'side-menu--expand'))
			// {
			// 	this.isExpandSideMenu = false;
			// 	if (!this.isHoverSideMenu)
			// 	{
			// 		BX.removeClass(this.obMenu, 'side-menu--expand');
			// 	}
			// }
		}

		checkScroll();
		__WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).on('scroll', __WEBPACK_IMPORTED_MODULE_4_lodash_debounce___default()(checkScroll, 100));
	});
};

/***/ }),

/***/ "./resources/js/modules/bootstrap.js":
/*!*******************************************!*\
  !*** ./resources/js/modules/bootstrap.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bootstrap_js_src_util__ = __webpack_require__(/*! bootstrap/js/src/util */ "./node_modules/bootstrap/js/src/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bootstrap_js_src_alert__ = __webpack_require__(/*! bootstrap/js/src/alert */ "./node_modules/bootstrap/js/src/alert.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bootstrap_js_src_button__ = __webpack_require__(/*! bootstrap/js/src/button */ "./node_modules/bootstrap/js/src/button.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_bootstrap_js_src_carousel__ = __webpack_require__(/*! bootstrap/js/src/carousel */ "./node_modules/bootstrap/js/src/carousel.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_bootstrap_js_src_collapse__ = __webpack_require__(/*! bootstrap/js/src/collapse */ "./node_modules/bootstrap/js/src/collapse.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_bootstrap_js_src_modal__ = __webpack_require__(/*! bootstrap/js/src/modal */ "./node_modules/bootstrap/js/src/modal.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_bootstrap_js_src_popover__ = __webpack_require__(/*! bootstrap/js/src/popover */ "./node_modules/bootstrap/js/src/popover.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_bootstrap_js_src_scrollspy__ = __webpack_require__(/*! bootstrap/js/src/scrollspy */ "./node_modules/bootstrap/js/src/scrollspy.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_bootstrap_js_src_tab__ = __webpack_require__(/*! bootstrap/js/src/tab */ "./node_modules/bootstrap/js/src/tab.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_bootstrap_js_src_tooltip__ = __webpack_require__(/*! bootstrap/js/src/tooltip */ "./node_modules/bootstrap/js/src/tooltip.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_bootstrap_material_design_js_dropdown__ = __webpack_require__(/*! bootstrap-material-design/js/dropdown */ "./node_modules/bootstrap-material-design/js/dropdown.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_bootstrap_material_design_js_ripples__ = __webpack_require__(/*! bootstrap-material-design/js/ripples */ "./node_modules/bootstrap-material-design/js/ripples.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_bootstrap_material_design_js_text__ = __webpack_require__(/*! bootstrap-material-design/js/text */ "./node_modules/bootstrap-material-design/js/text.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_bootstrap_material_design_js_textarea__ = __webpack_require__(/*! bootstrap-material-design/js/textarea */ "./node_modules/bootstrap-material-design/js/textarea.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_bootstrap_material_design_js_select__ = __webpack_require__(/*! bootstrap-material-design/js/select */ "./node_modules/bootstrap-material-design/js/select.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_bootstrap_material_design_js_radio__ = __webpack_require__(/*! bootstrap-material-design/js/radio */ "./node_modules/bootstrap-material-design/js/radio.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_bootstrap_material_design_js_radioInline__ = __webpack_require__(/*! bootstrap-material-design/js/radioInline */ "./node_modules/bootstrap-material-design/js/radioInline.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_bootstrap_material_design_js_checkbox__ = __webpack_require__(/*! bootstrap-material-design/js/checkbox */ "./node_modules/bootstrap-material-design/js/checkbox.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_bootstrap_material_design_js_checkboxInline__ = __webpack_require__(/*! bootstrap-material-design/js/checkboxInline */ "./node_modules/bootstrap-material-design/js/checkboxInline.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__bootstrapMaterialDesign__ = __webpack_require__(/*! ./bootstrapMaterialDesign */ "./resources/js/modules/bootstrapMaterialDesign.js");
// Bootstrap components











// Bootstrap Material Design components













/***/ }),

/***/ "./resources/js/modules/bootstrapMaterialDesign.js":
/*!*********************************************************!*\
  !*** ./resources/js/modules/bootstrapMaterialDesign.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Popper, jQuery) {function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* globals Popper */
Popper.Defaults.modifiers.computeStyle.gpuAcceleration = false;

/**
 * $.bootstrapMaterialDesign(config) is a macro class to configure the components generally
 *  used in Material Design for Bootstrap.  You may pass overrides to the configurations
 *  which will be passed into each component, or you may omit use of this class and
 *  configure each component separately.
 */
var BootstrapMaterialDesign = function ($) {
	/**
  * ------------------------------------------------------------------------
  * Constants
  * ------------------------------------------------------------------------
  */
	var NAME = "bootstrapMaterialDesign";
	var DATA_KEY = "bmd." + NAME;
	var JQUERY_NAME = NAME; // retain this full name since it is long enough not to conflict
	var JQUERY_NO_CONFLICT = $.fn[JQUERY_NAME];

	/**
  * Global configuration:
  *  The global configuration hash will be mixed in to each components' config.
  *    e.g. calling $.bootstrapMaterialDesign({global: { validate: true } }) would pass `validate:true` to every component
  *
  *
  * Component configuration:
  *  - selector: may be a string or an array.  Any array will be joined with a comma to generate the selector
  *  - disable any component by defining it as false with an override. e.g. $.bootstrapMaterialDesign({ autofill: false })
  *
  *  @see each individual component for more configuration settings.
  */
	var Default = {
		global: {
			validate: false,
			label: {
				className: "bmd-label-static" // default style of label to be used if not specified in the html markup
			}
		},
		// autofill: {
		//   selector: "body"
		// },
		checkbox: {
			selector: ".bmd-custom-checkbox > label > input[type=checkbox]"
		},
		checkboxInline: {
			selector: ".bmd-custom-checkbox-inline > input[type=checkbox]"
		},
		// collapseInline: {
		//   selector: '.bmd-collapse-inline [data-toggle="collapse"]'
		// },
		// drawer: {
		//   selector: ".bmd-layout-drawer"
		// },
		// file: {
		//   selector: "input[type=file]"
		// },
		radio: {
			selector: ".bmd-custom-radio > label > input[type=radio]"
		},
		radioInline: {
			selector: ".bmd-custom-radio-inline input[type=radio]"
		},
		ripples: {
			//selector: ['.btn:not(.btn-link):not(.ripple-none)'] // testing only
			selector: [".ripple", ".c-icon-count", ".dropdown-item"]
		},
		select: {
			selector: [".bmd-form-group select.form-control"]
		},
		// switch: {
		//	selector: ".switch > label > input[type=checkbox]"
		// },
		text: {
			// omit inputs we have specialized components to handle - we need to match text, email, etc.  The easiest way to do this appears to be just omit the ones we don't want to match and let the rest fall through to this.
			selector: [".bmd-form-group input.form-control:not([type=hidden]):not([type=checkbox]):not([type=radio]):not([type=file]):not([type=button]):not([type=submit]):not([type=reset])"]
		},
		textarea: {
			selector: [".bmd-form-group textarea.form-control"]
		},
		arrive: true,
		// create an ordered component list for instantiation
		instantiation: ["ripples", "checkbox", "checkboxInline",
		//"collapseInline",
		//"drawer",
		//'file',
		"radio", "radioInline",
		//"switch",
		"text", "textarea", "select"]
	};

	/**
  * ------------------------------------------------------------------------
  * Class Definition
  * ------------------------------------------------------------------------
  */

	var BootstrapMaterialDesign = function () {
		function BootstrapMaterialDesign($element, config) {
			var _this = this;

			_classCallCheck(this, BootstrapMaterialDesign);

			this.$element = $element;
			this.config = $.extend(true, {}, Default, config);
			var $document = $(document);

			var _loop = function _loop() {
				if (_isArray) {
					if (_i >= _iterator.length) return "break";
					_ref = _iterator[_i++];
				} else {
					_i = _iterator.next();
					if (_i.done) return "break";
					_ref = _i.value;
				}

				var component = _ref;

				// the component's config fragment is passed in directly, allowing users to override
				var componentConfig = _this.config[component];

				// check to make sure component config is enabled (not `false`)
				if (componentConfig) {
					// assemble the selector as it may be an array
					var selector = _this._resolveSelector(componentConfig);

					// mix in global options
					componentConfig = $.extend(true, {}, _this.config.global, componentConfig);

					// create the jquery fn name e.g. 'bmdText' for 'text'
					var componentName = "" + (component.charAt(0).toUpperCase() + component.slice(1));
					var jqueryFn = "bmd" + componentName;

					try {
						// safely instantiate component on selector elements with config, report errors and move on.
						// console.debug(`instantiating: $('${selector}')[${jqueryFn}](${componentConfig})`) // eslint-disable-line no-console
						$(selector)[jqueryFn](componentConfig);

						// add to arrive if present and enabled
						if (document.arrive && _this.config.arrive) {
							$document.arrive(selector, function () {
								// eslint-disable-line no-loop-func
								$(this)[jqueryFn](componentConfig);
							});
						}
					} catch (e) {
						var message = "Failed to instantiate component: $('" + selector + "')[" + jqueryFn + "](" + componentConfig + ")";
						console.error(message, e, "\nSelected elements: ", $(selector)); // eslint-disable-line no-console
						throw e;
					}
				}
			};

			for (var _iterator = this.config.instantiation, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
				var _ref;

				var _ret = _loop();

				if (_ret === "break") break;
			}
		}

		BootstrapMaterialDesign.prototype.dispose = function dispose() {
			this.$element.data(DATA_KEY, null);
			this.$element = null;
			this.config = null;
		};

		// ------------------------------------------------------------------------
		// private

		BootstrapMaterialDesign.prototype._resolveSelector = function _resolveSelector(componentConfig) {
			var selector = componentConfig.selector;
			if (Array.isArray(selector)) {
				selector = selector.join(", ");
			}

			return selector;
		};

		// ------------------------------------------------------------------------
		// static


		BootstrapMaterialDesign._jQueryInterface = function _jQueryInterface(config) {
			return this.each(function () {
				var $element = $(this);
				var data = $element.data(DATA_KEY);

				if (!data) {
					data = new BootstrapMaterialDesign($element, config);
					$element.data(DATA_KEY, data);
				}
			});
		};

		return BootstrapMaterialDesign;
	}();

	/**
  * ------------------------------------------------------------------------
  * jQuery
  * ------------------------------------------------------------------------
  */


	$.fn[JQUERY_NAME] = BootstrapMaterialDesign._jQueryInterface;
	$.fn[JQUERY_NAME].Constructor = BootstrapMaterialDesign;
	$.fn[JQUERY_NAME].noConflict = function () {
		$.fn[JQUERY_NAME] = JQUERY_NO_CONFLICT;
		return BootstrapMaterialDesign._jQueryInterface;
	};

	return BootstrapMaterialDesign;
}(jQuery);

/* unused harmony default export */ var _unused_webpack_default_export = (BootstrapMaterialDesign);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js")["default"], __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./resources/js/modules/fab.js":
/*!*************************************!*\
  !*** ./resources/js/modules/fab.js ***!
  \*************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_assign__ = __webpack_require__(/*! lodash/assign */ "./node_modules/lodash/assign.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_assign__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var Fab = function ($) {

	// jQuery reverse
	$.fn.reverse = [].reverse;

	var Default = {
		hoverEnabled: true
	};

	var Fab = function () {
		function Fab(element, name, config) {
			_classCallCheck(this, Fab);

			this.element = element;
			this.name = name;
			this.$element = $(this.element);
			this.config = __WEBPACK_IMPORTED_MODULE_1_lodash_assign___default()({}, Default, config);
			this.instance = undefined;

			this.prepare();
			this.initFab();
		}

		Fab.prototype.prepare = function prepare() {};

		Fab.prototype.initFab = function initFab() {
			var _this = this;

			this.$button = this.$element.children('[data-fab-btn]');

			this.menuHorizontal = {
				$element: this.$element.children('[data-fab-menu-horizontal]')
			};

			this.menuVertical = {
				$element: this.$element.children('[data-fab-menu-vertical]')

				//TODO: direction;
			};if (this.menuHorizontal.$element.length) {
				this.menuHorizontal.$btnsReverse = this.menuHorizontal.$element.find('[data-fab-menu-btn]').reverse();
				this.menuHorizontal.offsetX = 40;
				this.menuHorizontal.offsetY = 0;
			}

			if (this.menuVertical.$element.length) {
				this.menuVertical.$btnsReverse = this.menuVertical.$element.find('[data-fab-menu-btn]').reverse();
				this.menuVertical.offsetX = 0;
				this.menuVertical.offsetY = -40;
			}

			if (this.config.hoverEnabled) {
				$(this.$element).on('mouseenter', function (e) {
					this.openFABMenu();
				}.bind(this));

				$(this.$element).on('mouseleave', function (e) {
					this.closeFABMenu();
				}.bind(this));
			} else {
				$(this.$button).on('click', function () {
					if (_this.$element.hasClass('active')) {
						_this.closeFABMenu(_this.$element);
					} else {
						_this.openFABMenu(_this.$element);
					}
				});
			}
		};

		Fab.prototype.openFABMenu = function openFABMenu() {
			var time;

			if (this.$element.hasClass('active') === false) {
				this.$element.addClass('active');
				if (this.menuHorizontal.$element.length) {
					time = 100;
					this.menuHorizontal.$btnsReverse.each(function () {
						var $el = this;
						$(this).velocity({
							opacity: 1,
							scale: 1,
							translateY: 0,
							translateX: 0
						}, {
							duration: 275,
							delay: time,
							easing: 'easeInOutQuad'
						});
						time += 40;
					});
				}

				if (this.menuVertical.$element.length) {
					time = 100;
					this.menuVertical.$btnsReverse.each(function () {
						$(this).velocity({
							opacity: 1,
							scale: 1,
							translateY: 0,
							translateX: 0
						}, {
							duration: 275,
							delay: time,
							easing: 'easeInOutQuad'
						});
						time += 40;
					});
				}
			}
		};

		Fab.prototype.closeFABMenu = function closeFABMenu() {
			var _this2 = this;

			if (this.menuHorizontal.$element.length) {
				this.menuHorizontal.$btnsReverse.velocity('stop', true);
				this.menuHorizontal.$btnsReverse.velocity({
					opacity: 0,
					scale: 0.4,
					translateY: this.menuHorizontal.offsetY,
					translateX: this.menuHorizontal.offsetX
				}, {
					duration: 175,
					easing: 'easeOutQuad',
					complete: function complete() {
						_this2.$element.removeClass('active');
					}
				});
			}

			if (this.menuVertical.$element.length) {
				this.menuVertical.$btnsReverse.velocity('stop', true);
				this.menuVertical.$btnsReverse.velocity({
					opacity: 0,
					scale: 0.4,
					translateY: this.menuVertical.offsetY,
					translateX: this.menuVertical.offsetX
				}, {
					duration: 175,
					easing: 'easeOutQuad',
					complete: function complete() {
						_this2.$element.removeClass('active');
					}
				});
			}
		};

		return Fab;
	}();

	return Fab;
}(jQuery);

/* harmony default export */ __webpack_exports__["a"] = (Fab);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./resources/js/modules/jquery.animatecss.js":
/*!***************************************************!*\
  !*** ./resources/js/modules/jquery.animatecss.js ***!
  \***************************************************/
/*! dynamic exports provided */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$.fn.extend({
  animateCss: function animateCss(animationName, callback) {
    var animationEnd = function (el) {
      var animations = {
        animation: 'animationend',
        OAnimation: 'oAnimationEnd',
        MozAnimation: 'mozAnimationEnd',
        WebkitAnimation: 'webkitAnimationEnd'
      };

      for (var t in animations) {
        if (el.style[t] !== undefined) {
          return animations[t];
        }
      }
    }(document.createElement('div'));

    this.addClass('animated beforeAnimation ' + animationName).one(animationEnd, function () {
      $(this).removeClass('animated beforeAnimation ' + animationName);

      if (typeof callback === 'function') callback();
    });

    return this;
  }
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./resources/js/modules/jquery.setHtmlByUrl.js":
/*!*****************************************************!*\
  !*** ./resources/js/modules/jquery.setHtmlByUrl.js ***!
  \*****************************************************/
/*! dynamic exports provided */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$.fn.setHtmlByUrl = function (options) {
	var settings = $.extend({
		'url': ''
	}, options);
	return this.each(function () {
		if ('' != settings.url) {
			var $this = $(this);
			$.ajax({
				type: 'GET',
				dataType: 'html',
				url: settings.url,
				beforeSend: function beforeSend() {
					if ('localStorage' in window && window['localStorage'] !== null) {
						data = localStorage.getItem(settings.url);
						if (data) {
							localStorage.setItem(settings.url, data);
							$this.append(data);
							return false;
						}
						return true;
					}
				},
				success: function success(data) {
					localStorage.setItem(settings.url, data);
					$this.append(data);
				}
			});
		}
	});
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./resources/js/modules/page-animate.js":
/*!**********************************************!*\
  !*** ./resources/js/modules/page-animate.js ***!
  \**********************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var PageAnimate = function ($) {

    var defaultTextAnimationDelay = 200;

    var DefaultOptions = {
        durationOut: 1500,
        durationIn: 1500,
        durationProgress: 1500,
        loadingDelay: 400,
        animation: false,
        onComplete: false,
        selectors: {
            preloader: '[data-entity="smooth-preloader"]',
            preloaderProgressbar: '[data-entity="smooth-progress"]',
            content: '.js-smooth-content',
            sidebar: '.js-sidebar'
        }
    };

    var PageAnimate = function () {
        function PageAnimate(options) {
            _classCallCheck(this, PageAnimate);

            this.options = $.extend({}, DefaultOptions, options);

            this.$preloader = false;
            this.$progressBar = false;

            this.init();
        }

        PageAnimate.prototype.init = function init() {
            $(this.options.selectors.content).css({
                visibility: 'visible',
                opacity: 1,
                'z-index': 1,
                transition: 'none'
            });

            if (!this.$preloader) {
                var $preloader = $(document.body).children(this.options.selectors.preloader);

                if ($preloader.length > 0) {
                    this.$preloader = $preloader;
                } else {
                    this.createPreloader();
                }

                this.$progressBar = this.$preloader.find(this.options.preloaderProgressbar);
            }
        };

        PageAnimate.prototype.createPreloader = function createPreloader() {
            var preloaderHtml = '' + '<div class="smooth-preloader" data-entity="smooth-preloader">' + '<div class="smooth-preloader__inner"></div>' + '<div class="smooth-preloader__progress-bar" data-entity="smooth-progress">' + '<div class="smooth-preloader__progress-bar__inner"></div>' + '</div>' + '</div>' + '';

            this.$preloader = $(preloaderHtml);

            $('body').append(this.$preloader);
        };

        PageAnimate.prototype.start = function start() {
            if (!!this.options.animation) {
                switch (this.options.animation) {
                    case 'pageOutLine':
                        this.pageOutLine();
                        break;
                    case 'pageInLine':
                        this.pageInLine();
                        break;
                    case 'pageOutOpacity':
                        this.pageOutOpacity();
                        break;
                    case 'pageInOpacity':
                        this.pageInOpacity();
                        break;
                    default:
                        console.info('PageAnimate::init -> no default animation');
                }
            }
        };

        PageAnimate.prototype.pageOutLine = function pageOutLine() {
            var _this = this;

            this.$preloader.css({ 'display': '' }).addClass('smooth-preloader--clipOut').removeClass('smooth-preloader--animate');

            this.$progressBar.css({
                'will-change': 'transform'
            });

            setTimeout(function () {
                _this.$preloader.addClass('smooth-preloader--animate');

                if (!!_this.options.onComplete && typeof _this.options.onComplete === 'function') {
                    setTimeout(function () {
                        _this.options.onComplete.call(_this);
                    }, _this.options.durationOut);
                }
            }, 10);
        };

        PageAnimate.prototype.pageInLine = function pageInLine() {
            var _this2 = this;

            this.$progressBar.css({
                'will-change': 'transform',
                transition: this.options.durationProgress + 'ms'
            });

            setTimeout(function () {
                _this2.$preloader.removeClass('smooth-preloader--animate');

                // this.animateTexts(500);

                setTimeout(function () {
                    _this2.$preloader.css({ 'display': 'none' });
                    if (!!_this2.options.onComplete && typeof _this2.options.onComplete === 'function') {
                        _this2.options.onComplete.call(_this2);
                    }
                }, _this2.options.durationIn);
            }, 10);
        };

        PageAnimate.prototype.pageOutOpacity = function pageOutOpacity() {
            var _this3 = this;

            this.$preloader.css({ 'display': '' }).addClass('smooth-preloader--opacityOut').removeClass('smooth-preloader--animate');

            this.$progressBar.css({
                'will-change': 'transform'
            });

            setTimeout(function () {
                _this3.$preloader.addClass('smooth-preloader--animate');

                if (!!_this3.options.onComplete && typeof _this3.options.onComplete === 'function') {
                    setTimeout(function () {
                        _this3.options.onComplete.call(_this3);
                    }, _this3.options.durationOut);
                }
            }, 10);
        };

        PageAnimate.prototype.pageInOpacity = function pageInOpacity() {
            var _this4 = this;

            this.$progressBar.css({
                'will-change': 'transform',
                transition: this.options.durationProgress + 'ms'
            });

            setTimeout(function () {
                _this4.$preloader.removeClass('smooth-preloader--animate');

                // this.animateTexts(500);

                setTimeout(function () {
                    _this4.$preloader.css({ 'display': 'none' });
                    if (!!_this4.options.onComplete && typeof _this4.options.onComplete === 'function') {
                        _this4.options.onComplete.call(_this4);
                    }
                }, _this4.options.durationIn);
            }, 10);
        };

        PageAnimate.prototype.animateTexts = function animateTexts(delayParam) {
            var delay = delayParam ? delayParam : defaultTextAnimationDelay,
                delayPreviously = delay;

            $('.js-animated').each(function () {
                $(this).removeClass('js-lock-animated');

                if ($(this).data('animatecss-delay')) delay = delayParam * $(this).data('animatecss-delay');

                $(this).css('animation-delay', delay + 'ms').animateCss($(this).data('animatecss'));

                if ($(this).data('animatecss-delay')) delay = delayPreviously;
                delay += 100;
            });
        };

        return PageAnimate;
    }();

    return PageAnimate;
}(__WEBPACK_IMPORTED_MODULE_0_jquery___default.a);

/* harmony default export */ __webpack_exports__["a"] = (PageAnimate);

/***/ }),

/***/ "./resources/js/modules/popup.js":
/*!***************************************!*\
  !*** ./resources/js/modules/popup.js ***!
  \***************************************/
/*! exports provided: default, openPopup */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {/* unused harmony export openPopup */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_parseOptions__ = __webpack_require__(/*! ../utils/parseOptions */ "./resources/js/utils/parseOptions.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_assign__ = __webpack_require__(/*! lodash/assign */ "./node_modules/lodash/assign.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_isDesktop__ = __webpack_require__(/*! ../utils/isDesktop */ "./resources/js/utils/isDesktop.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }






// export const windowPopupOptions

// export function init(context)


var Popup = function ($) {

	var windowPopupOptions = {
		infobar: false,
		buttons: false,
		slideShow: false,
		fullScreen: false,
		animationEffect: "slide-down-in",
		animationDuration: 300,
		thumbs: false,
		//modal: true,
		ajax: {
			settings: {
				cache: true,
				data: {
					cache: true,
					fancybox: true
				}
			}
		},
		touch: false,
		keyboard: true,
		btnTpl: {
			smallBtn: ''
		},
		baseTpl: '<div class="fancybox-container popup-form" role="dialog" tabindex="-1">' + '<div class="fancybox-bg"></div>' + '<div class="fancybox-inner">' + '<div class="fancybox-stage"></div>' + '</div>' + '</div>',
		beforeLoad: function beforeLoad(instance, slide, b) {

			var scrollbarWidth = $.fancybox.scrollbarWidth;

			$('.l-page').addClass('filter-blur');

			if (RS.Panel && RS.Panel.openned) {
				RS.Panel.close();
			}
		},
		afterLoad: function afterLoad(instance, slide) {
			var obContent = slide.$content.get(0),
			    data = BX.parseJSON(obContent.innerHTML);

			if (data) {
				var pageAssets = BX.processHTML(data.JS);

				if (pageAssets.STYLE.length > 0) {
					BX.loadCSS(pageAssets.STYLE);
				}

				if (pageAssets.SCRIPT) {
					var processed = BX.processHTML(data.DATA, false);

					obContent.innerHTML = processed.HTML;

					BX.ajax.processScripts(pageAssets.SCRIPT, false, BX.proxy(function () {
						BX.ajax.processScripts(processed.SCRIPT);
					}, this));
				}
			}

			if (RS.Init) {
				RS.Init(this.$content);
			}

			this.$content.wrapAll('<div>');

			var $wrapper = this.$content.parent();
			$wrapper.prepend('<button data-fancybox-close class="fancybox-close-small btn btn-primary"><svg class="icon-svg"><use xlink:href="#svg-cross"></use></svg></button>');

			var title = !!slide.opts.title && slide.opts.title.length ? slide.opts.title : !!instance.opts.title && instance.opts.title.length ? instance.opts.title : undefined;

			if (title !== undefined) {
				this.$content.parent().prepend('<div class="fancybox-title fancybox-title-inside-wrap">' + title + '</div>');
			}
		},

		beforeShow: function beforeShow(instance, slide) {},

		afterShow: function afterShow(instance, slide) {},

		beforeClose: function beforeClose() {
			$('.l-page').removeClass('filter-blur');
		},

		afterClose: function afterClose(instance) {

			setTimeout(function () {
				$('.js-fix-scroll').removeClass('js-fix-scroll--fixed');
			});
		}
	};

	var fullscreenPopupOptions = __WEBPACK_IMPORTED_MODULE_1_lodash_assign___default()({}, windowPopupOptions, {
		slideClass: "fullscreen",
		animationEffect: 'zoom-in-out',

		spinnerTpl: '<div><div class="fancybox-loading"></div></div>',

		ajax: {
			settings: {
				cache: true,
				data: {
					cache: true,
					fancybox: true,
					fancyboxFullscreen: true
				}
			}
		},

		afterLoad: function afterLoad(instance, slide) {
			this.$content.wrapAll('<div>');

			var $wrapper = this.$content.parent();
			$wrapper.prepend('<button data-fancybox-close class="fancybox-close-small btn btn-primary"><svg class="icon-svg"><use xlink:href="#svg-cross"></use></svg></button>');

			if (RS.Init) {
				RS.Init(this.$content);
			}

			var title = !!slide.opts.title && slide.opts.title.length ? slide.opts.title : !!instance.opts.title && instance.opts.title.length ? instance.opts.title : undefined;

			if (title !== undefined) {
				this.$content.prepend('<div class="fancybox-title fancybox-title-inside-wrap">' + title + '</div>');
			}
		}
	});

	var sidePopupOptions = {
		popupClass: "",
		position: "right",
		scrollContent: true,
		scrollBlock: false
	};

	var Popup = function () {
		function Popup(element, name, config) {
			_classCallCheck(this, Popup);

			this.element = element;
			this.name = name;
			this.$element = $(this.element);
			// this.config = assign({}, Default, config);
			this.instance = undefined;
			this.blockMeta = {
				"scripts": [],
				"styles": [],
				"inline": []
			};

			this.headTags = ["link[href]", "script[src]"].join(',');

			// this.setup(config);
			this.init();
		}

		Popup.prototype.init = function init() {
			var _this = this;

			var options = Object(__WEBPACK_IMPORTED_MODULE_0__utils_parseOptions__["a" /* default */])(this.element.getAttribute('data-popup-options'));
			var popupType = (RS.Options || {}).defaultPopupType;

			if (this.element.getAttribute('data-popup-type')) {
				popupType = this.element.getAttribute('data-popup-type');
			}

			// if (popupType == 'side' && !isDesktop())
			// {
			// 	popupType = 'fullscreen';
			// }

			switch (popupType) {
				case 'side':
					this.config = __WEBPACK_IMPORTED_MODULE_1_lodash_assign___default()({}, sidePopupOptions, options);
					$(this.element).click(function (e) {

						e.preventDefault();

						if (Object(__WEBPACK_IMPORTED_MODULE_3__utils_isDesktop__["a" /* default */])()) {
							_this.openPanel();
						} else {
							var url = _this.element.getAttribute('href');
							if (url.length > 0) {
								url = BX.util.add_url_param(url, { 'backurl': encodeURIComponent(window.location.href) });
								window.location.replace(url);
							}
						}
					});
					break;

				case 'fullscreen':
					this.config = __WEBPACK_IMPORTED_MODULE_1_lodash_assign___default()({}, fullscreenPopupOptions, options);
					// $(this).fancybox(options);
					$(this.element).click(function (e) {
						e.preventDefault();
						_this.openPopup();
					});

					break;

				case 'window':
				default:
					this.config = __WEBPACK_IMPORTED_MODULE_1_lodash_assign___default()({}, windowPopupOptions, options);
					// $(this).fancybox(options);
					$(this.element).click(function (e) {
						e.preventDefault();
						_this.openPopup();
					});

					break;
			}
		};

		Popup.prototype.openPopup = function openPopup() {
			var _this2 = this;

			this.element.setAttribute('data-fancybox', this.element.getAttribute('data-popup'));

			var d = $.Deferred();

			if (this.element.getAttribute('data-type') == 'ajax') {
				var url = this.element.getAttribute('data-src') || this.element.href;

				this.config.title = this.element.getAttribute('fancybox-title') || this.element.getAttribute('title') || this.element.text;

				this.loadPopup(url).then(function (content) {
					_this2.addMeta(content).then(function () {
						var newContent = content.split('<!-- ajax-content-custom -->', 3)[1];
						if (newContent == undefined) {
							newContent = content.split('<!-- ajax-content -->', 3)[1];
						}

						newContent = newContent == undefined ? content : newContent;

						var wrapper = document.createElement('div');
						wrapper.innerHTML = newContent;

						var block = void 0;
						if (wrapper.childElementCount > 1) {
							$.fancybox.open(wrapper, _this2.config);
						} else {
							$.fancybox.open(wrapper.firstChild, _this2.config);
						}

						d.resolve();
					});
				});
			} else {
				$.fancybox.open(this.element, this.config);
			}

			return d;
		};

		Popup.prototype.openPanel = function openPanel() {
			var _this3 = this;

			var activeItem = function activeItem() {
				_this3.element.classList.add('is-active');

				$(document).one('panel.closed', function () {
					_this3.element.classList.remove('is-active');
				});
			};

			if (!this.element.classList.contains('is-active')) {
				if (RS.Panel.openned) {
					$(document).one('panel.before_open', function () {
						activeItem();
					});
				} else {
					activeItem();
				}

				RS.Panel.open(this.element, this.config).then(function (content) {
					if (RS.Init) {
						RS.Init(content.block);
					}
				});
			} else {
				RS.Panel.close(this.element);
			}
		};

		Popup.prototype.loadPopup = function loadPopup(url) {
			var _this4 = this;

			var d = $.Deferred();

			$(document).trigger('panel.before_load', [url]);
			$.ajax({
				url: url
			}).then(function (result) {

				var resultJson = BX.parseJSON(result);

				if (resultJson) {
					if (resultJson.SCRIPTS) {
						_this4.processScripts(resultJson.SCRIPTS, function () {
							d.resolve(resultJson.HTML);
						});
					} else {
						d.resolve(resultJson.HTML);
					}
				} else {
					d.resolve(result);
				}
			});

			return d.promise();
		};

		Popup.prototype.addMeta = function addMeta() {
			var _this5 = this;

			var content = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

			var loadScript = function loadScript(assets) {
				var d = $.Deferred();

				BX.loadScript(assets, function () {
					d.resolve();
				});

				return d.promise();
			};
			var loadCss = function loadCss(assets) {
				var d = $.Deferred();

				var css = assets.map(function (url) {
					return { url: url, ext: "css" };
				});

				BX.load(css, function () {
					d.resolve();
				});

				return d.promise();
			};

			var $newPageHead = $('<html />').html($.parseHTML(content, document, true));

			var $currentTags = $(document).find(this.headTags),
			    $newTags = $newPageHead.find(this.headTags);

			// add new tags
			$newTags.filter(function (indexNewItem, newItem) {

				return $currentTags.filter(function (indexCurrentItem, currentItem) {
					return currentItem.outerHTML == newItem.outerHTML;
				}).length == 0;
			}).each(function (index, element) {
				var sourceUrl = void 0;

				switch (element.tagName.toLowerCase()) {
					case 'script':
						sourceUrl = element.getAttribute('src');
						if (sourceUrl.length > 0) {
							_this5.blockMeta.scripts.push(sourceUrl);
						}
						break;
					case 'link':
						sourceUrl = element.getAttribute('href');
						if (sourceUrl.length > 0) {
							_this5.blockMeta.styles.push(sourceUrl);
						}
						break;
					default:
						_this5.blockMeta.inline.push(element.innerHTML);
				}
			});

			return $.when(loadScript(this.blockMeta['scripts']), loadCss(this.blockMeta['styles']));
		};

		Popup.prototype.removeMeta = function removeMeta() {
			var _this6 = this;

			var $currentTags = $(document).find(this.headTags);

			$currentTags.filter(function (indexCurrentItem, currentItem) {
				switch (currentItem.tagName.toLowerCase()) {
					case 'script':
						if (BX.util.in_array(currentItem.getAttribute('src'), _this6.blockMeta.scripts)) {
							return true;
						}
						break;
					case 'link':

						if (BX.util.in_array(currentItem.getAttribute('href'), _this6.blockMeta.styles)) {
							return true;
						}
						break;
					case 'inline':
						break;
				}
			}).remove();

			for (var type in this.blockMeta) {
				this.blockMeta[type] = [];
			}
		};

		return Popup;
	}();

	return Popup;
}(jQuery);

/* harmony default export */ __webpack_exports__["a"] = (Popup);

function openPopup() {
	var content = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'window';
	var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};


	switch (type) {
		case 'window':
		default:
			options = _merge({}, windowPopupOptions, options);

			__WEBPACK_IMPORTED_MODULE_2_jquery___default.a.fancybox.open(content, options);

			break;
	}
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./resources/js/modules/slider.js":
/*!****************************************!*\
  !*** ./resources/js/modules/slider.js ***!
  \****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_owl_carousel__ = __webpack_require__(/*! owl.carousel */ "./node_modules/owl.carousel/dist/owl.carousel.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_owl_carousel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_owl_carousel__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_assign__ = __webpack_require__(/*! lodash/assign */ "./node_modules/lodash/assign.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_assign__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





var Slider = function ($) {
	var Default = {
		items: 4,
		margin: 30,
		navClass: ['owl-prev btn btn-icon btn-opacity-dark', 'owl-next btn btn-icon btn-opacity-dark'],
		navText: ['<svg class="icon icon-svg"><use xlink:href="#svg-chevron-left"></use></svg>', '<svg class="icon icon-svg"><use xlink:href="#svg-chevron-right"></use></svg>'],
		autoplayHoverPause: true,
		// responsive: {
		// 	0:		{items: 1},
		// 	380:	{items: 2},
		// 	576:	{items: 2},
		// 	768:	{items: 2},
		// 	992:	{items: 3},
		// 	1200:	{items: 4}
		// }
		onInitialized: function onInitialized() {}
	};

	var Slider = function () {
		function Slider(element, name, config) {
			_classCallCheck(this, Slider);

			this.element = element;
			this.name = name;
			this.$element = $(this.element);
			this.config = __WEBPACK_IMPORTED_MODULE_2_lodash_assign___default()({}, Default, config);
			this.instance = undefined;

			this.prepare();
			this.findDotsContainer();
			this.findNavContainer();

			this.config.onTranslated = function () {
				var lazyloadInstance = $('.lazyload').data("plugin_lazy");
				if (lazyloadInstance) {
					lazyloadInstance.update();
				}

				if (this.config.progressLine) {
					this.startProgressBar();

					// this.instance.trigger('stop.owl.autoplay');
					this.instance._plugins.autoplay.stop();
					this.instance._plugins.autoplay.play();
				}

				this.startVideo();
			}.bind(this);

			this.config.onTranslate = function () {
				if (this.config.progressLine) {
					this.resetProgressBar();
				}

				this.stopVideo();
			}.bind(this);

			this.initSlider();
		}

		Slider.prototype.prepare = function prepare() {
			// remove show classes
			this.$element.removeClass(function (index, className) {
				return (className.match(/(^|\s)show-items-\S+/g) || []).join(' ');
			});

			// add owl-carousel container
			this.$element.addClass('owl-carousel');

			// Clear Grid
			if (this.$element.hasClass('row')) {
				this.$element.removeClass('row');
				this.$element.children('[class*=col]').removeClass(function (index, className) {
					return (className.match(/(^|\s)col-\S+/g) || []).join(' ');
				});
			}
		};

		Slider.prototype.findDotsContainer = function findDotsContainer() {
			var $container = $('[data-slider-dots=' + this.name + ']');

			if ($container.length) {
				var dotsId = 'slider-dots-' + this.name;

				$container.addClass('slider-dots').attr('id', dotsId);

				this.config.dots = true;
				this.config.dotsContainer = '#' + dotsId;
			} else {
				// this.config.dots = false;
			}
		};

		Slider.prototype.findNavContainer = function findNavContainer() {
			var $container = $('[data-slider-nav=' + this.name + ']');

			if ($container.length) {
				var navId = 'slider-nav-' + this.name;

				$container.addClass('slider-nav').attr('id', navId);

				this.config.nav = true;
				this.config.navContainer = '#' + navId;
			} else {
				// this.config.nav = false;
			}
		};

		Slider.prototype.initProgressLine = function initProgressLine() {
			if (this.instance.settings.dotsData && this.instance.settings.dotsContainer) {
				// $(this.instance.settings.dotsContainer).progressLine(document);

				$(this.instance.settings.dotsContainer).find('.owl-dot').each(function (key, node) {

					var progressline = $(node).find('.progressline');
					if (progressline.length < 1) {
						$(node).append('<div class="progressline"><div class="progressline__progress" style="width:0"></div></div>');
					}
				});

				if (this.config.progressLine) {
					this.startProgressBar();
				}
			}
		};

		Slider.prototype.initSlider = function initSlider() {
			this.instance = this.$element.owlCarousel(this.config).data('owl.carousel');

			this.initProgressLine();

			this.startVideo();
		};

		Slider.prototype.startProgressBar = function startProgressBar() {
			var _this = this;

			if (!this.instance) return;

			setTimeout(function () {
				$(_this.instance.settings.dotsContainer).find('.owl-dot.active').find('.progressline__progress').css({
					width: '100%',
					transition: 'width ' + _this.instance.settings.autoplayTimeout + 'ms linear'
				});
			}, 0);
		};

		Slider.prototype.resetProgressBar = function resetProgressBar() {
			$(this.instance.settings.dotsContainer).find('.owl-dot .progressline__progress').css({
				width: 0,
				transition: 'width 0s'
			});
		};

		Slider.prototype.startVideo = function startVideo() {
			// this.instance.$stage.children('.active').find('.owl-video-play-icon').click();
			this.instance.$stage.children('.active').find('.rs-banner__video').each(function () {
				this.play();
			});
		};

		Slider.prototype.stopVideo = function stopVideo() {
			this.instance.$stage.children('.active').find('.owl-video-wrapper > iframe').remove();
			this.instance.$stage.children('.active').find('.rs-banner__video').each(function () {
				this.pause();
			});
		};

		return Slider;
	}();

	return Slider;
}(jQuery);

/* harmony default export */ __webpack_exports__["a"] = (Slider);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./resources/js/modules/smoothstate.js":
/*!*********************************************!*\
  !*** ./resources/js/modules/smoothstate.js ***!
  \*********************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_barba_js__ = __webpack_require__(/*! barba.js */ "./node_modules/barba.js/dist/barba.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_barba_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_barba_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_page_animate__ = __webpack_require__(/*! ../modules/page-animate */ "./resources/js/modules/page-animate.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





var smoothState = function ($) {

	var defaultPageOutEffect = 'pageOutLine';
	var defaultPageInEffect = 'pageInLine';

	var HideShowTransition = __WEBPACK_IMPORTED_MODULE_1_barba_js___default.a.BaseTransition.extend({
		start: function start() {
			Promise.all([this.newContainerLoading, this.fadeOut()]).then(this.fadeIn.bind(this));
		},

		fadeOut: function fadeOut() {

			var deferred = __WEBPACK_IMPORTED_MODULE_1_barba_js___default.a.Utils.deferred(),
			    $oldContainer = $(this.oldContainer),
			    $dataContainer = $oldContainer.find('.js-smoothData'),
			    offsetY = window.pageYOffset,
			    animationName = defaultPageOutEffect;

			if (offsetY < 1 && !!$dataContainer.data('page_hide_effect_first_screen')) {
				animationName = $dataContainer.data('page_hide_effect_first_screen');
			} else if (!!$dataContainer.data('page_hide_effect_second_screen')) {
				animationName = $dataContainer.data('page_hide_effect_second_screen');
			}

			this.scrollbarRepaint($(this.oldContainer).find('.js-smooth-content'));

			var animation = new __WEBPACK_IMPORTED_MODULE_2__modules_page_animate__["a" /* default */]({
				animation: animationName,
				durationOut: 2500,
				onComplete: function onComplete() {
					document.body.className = '';
					deferred.resolve();
				}
			});

			animation.start();

			return deferred.promise;
		},

		fadeIn: function fadeIn() {
			var _this = this;

			var $dataContainer = $(this.newContainer).find('.js-smoothData'),
			    animationName = defaultPageInEffect;

			if (!!$dataContainer.data('page_show_effect')) {
				animationName = $dataContainer.data('page_show_effect');
			}

			$(this.oldContainer).hide();
			$(this.newContainer).css({ visibility: 'visible' });

			this.scrollbarRepaint($(this.newContainer).find('.js-smooth-content'));

			setTimeout(function () {
				$('html').css({ 'overflow-y': '' });
				$('html').css({ width: '', height: '', position: '' });
				$(document).scrollTop(0);
			}, 10);

			var animation = new __WEBPACK_IMPORTED_MODULE_2__modules_page_animate__["a" /* default */]({
				animation: animationName,
				onComplete: function onComplete() {
					_this.done();
				}
			});

			animation.start();
		},

		scrollbarRepaint: function scrollbarRepaint($siteContent) {
			var $html = $('html'),
			    $win = $(window),
			    winH = $win.height();

			if ($siteContent.height() > winH) {
				$html.css({ 'overflow-y': 'scroll' });
			} else {
				$html.css({ 'overflow-y': '' });
			}

			// $body.css({width: '', height: '', position: ''});
			// var scrollBarWidth =  window.innerWidth - $body.width();
			// $body.css({width: window.innerWidth - scrollBarWidth, height: window.innerHeight, position: 'fixed'});
			// $html.css({'margin-top': offsetY * -1});       
		}
	});

	var smoothState = function () {
		function smoothState() {
			_classCallCheck(this, smoothState);

			this.init();
			this.scripts = [];
			this.HTMLElementContainer = null;
		}

		smoothState.prototype.init = function init() {
			var _this2 = this;

			var usePageLoadAnimation = (RS.Options || {}).usePageLoadAnimation;
			usePageLoadAnimation = usePageLoadAnimation !== undefined && usePageLoadAnimation;

			if ($('#bx-panel').length > 0 || !usePageLoadAnimation) return;

			__WEBPACK_IMPORTED_MODULE_1_barba_js___default.a.Pjax.cacheEnabled = false;
			__WEBPACK_IMPORTED_MODULE_1_barba_js___default.a.Pjax.start();

			// Barba.Prefetch.init();

			__WEBPACK_IMPORTED_MODULE_1_barba_js___default.a.Pjax.getTransition = function () {
				return HideShowTransition;
			};

			__WEBPACK_IMPORTED_MODULE_1_barba_js___default.a.Dispatcher.on('newPageReady', function (currentStatus, prevStatus, HTMLElementContainer, newPageRawHTML) {

				var $newPageHead = $('<html />').html($.parseHTML(newPageRawHTML, document, true));

				var headTags = ["link[href]", "script[src]"].join(',');

				var $currentTags = $(document).find(headTags),
				    $newTags = $newPageHead.find(headTags);

				// add new tags
				$newTags.filter(function (indexNewItem, newItem) {

					return $currentTags.filter(function (indexCurrentItem, currentItem) {
						return currentItem.outerHTML == newItem.outerHTML;
					}).length == 0;
				}).appendTo('head');

				// remove unused tags
				// $currentTags.filter((indexCurrentItem, currentItem) => {
				// 	return $newTags.filter((indexNewItem, newItem) => {
				// 		return currentItem.outerHTML == newItem.outerHTML;
				// 	}).length == 0;
				// }).remove();

				var processed = BX.processHTML(newPageRawHTML, false);
				_this2.scripts = processed.SCRIPT;

				_this2.HTMLElementContainer = HTMLElementContainer;

				if (RS.Panel.openned) {
					RS.Panel.close();
				}

				if ($.fancybox.getInstance()) {
					$.fancybox.close();
				}
			});

			__WEBPACK_IMPORTED_MODULE_1_barba_js___default.a.Dispatcher.on('transitionCompleted', function (currentStatus, prevStatus) {
				BX.ajax.processScripts(_this2.scripts);
				_this2.scripts = [];

				window.OnLoadPage(_this2.HTMLElementContainer);
			});

			__WEBPACK_IMPORTED_MODULE_1_barba_js___default.a.Dispatcher.on('linkClicked', function (element, event) {});
		};

		return smoothState;
	}();

	return smoothState;
}(__WEBPACK_IMPORTED_MODULE_0_jquery___default.a);

/* harmony default export */ __webpack_exports__["a"] = (smoothState);

/***/ }),

/***/ "./resources/js/panel.js":
/*!*******************************!*\
  !*** ./resources/js/panel.js ***!
  \*******************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_overlay__ = __webpack_require__(/*! ./utils/overlay */ "./resources/js/utils/overlay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_panel_RightPanel__ = __webpack_require__(/*! ./app/panel/RightPanel */ "./resources/js/app/panel/RightPanel.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





var ESCAPE_KEY_CODE = 27;

var Panel = function ($) {
	var Panel = function () {
		_createClass(Panel, null, [{
			key: 'Defaults',
			get: function get() {
				return {
					classes: {}
				};
			}
		}]);

		function Panel(options) {
			var _this = this;

			_classCallCheck(this, Panel);

			this.options = $.extend({}, Panel.Defaults, options);

			this.openned = null;

			this.initPanels();

			$(document).keyup(function (e) {
				if (e.keyCode === ESCAPE_KEY_CODE) {
					_this.close();
				}
			});

			$(document).on('click', '[data-panel-close]', function () {
				return _this.close();
			});
		}

		Panel.prototype.initPanels = function initPanels() {
			this.panels = {};
			this.panels['right'] = new __WEBPACK_IMPORTED_MODULE_2__app_panel_RightPanel__["a" /* default */](this);
		};

		Panel.prototype.load = function load(url) {
			var _this2 = this;

			var d = $.Deferred();

			$(document).trigger('panel.before_load', [url]);
			$.ajax({
				url: url
			}).then(function (result) {

				if (!_this2.openned) {
					d.reject();
				}

				var resultJson = BX.parseJSON(result);

				if (resultJson) {
					if (resultJson.SCRIPTS) {
						_this2.processScripts(resultJson.SCRIPTS, function () {
							d.resolve(resultJson.HTML);
						});
					} else {
						d.resolve(resultJson.HTML);
					}
				} else {
					d.resolve(result);
				}
			});

			return d.promise();
		};

		Panel.prototype.reload = function reload(url) {
			for (var i in this.panels) {
				if (!this.panels.hasOwnProperty(i)) {
					continue;
				}

				var panel = this.panels[i];

				if (panel && panel.blocks[url]) {
					panel.update(url);
				}
			}
		};

		Panel.prototype.processScripts = function processScripts() {
			var html = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
			var successFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

			var processed = BX.processHTML(html, false);
			BX.ajax.processScripts(processed.SCRIPT, false, function () {
				return successFn();
			});
		};

		Panel.prototype.open = function open() {
			var _this3 = this;

			var content = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
			var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

			var panel = this.panels[options.position] || this.panels[content.opts.position];

			if (!panel) {
				return;
			}

			if (this.openned) {
				return this.close().then(function () {
					return _this3.open(content, options);
				});
			}

			var obj = {},
			    opts = {};

			if ($.isPlainObject(content)) {
				obj = content;
				opts = content.opts || content;
			} else if ($.type(content) === 'object' && $(content).length) {
				var $item = $(content);

				opts = $item.data() || {};
				opts = $.extend(true, {}, opts, opts.options);

				opts.item = content;

				obj.src = opts.src || $item.attr('href');

				if (!obj.type && !obj.src) {
					obj.type = 'inline';
					obj.src = content;
				} else if (obj.src) {
					obj.type = 'ajax';
					opts.id = obj.src;
				}
			} else {
				obj = {
					type: 'html',
					src: content + ''
				};
			}

			obj.opts = $.extend(true, {}, opts, options);

			this.openned = panel;

			$(document).trigger('panel.before_open');

			return panel.open(obj);
		};

		Panel.prototype.close = function close() {
			var _this4 = this;

			if (this.openned) {
				$(document).trigger('panel.before_close');

				return this.openned.close().then(function () {
					$(document).trigger('panel.closed');

					_this4.openned = null;

					return true;
				});
			}

			return $.Deferred().promise();
		};

		Panel.prototype.isOpened = function isOpened() {
			return !!this.openned;
		};

		return Panel;
	}();

	return Panel;
}(jQuery);

/* harmony default export */ __webpack_exports__["a"] = (Panel);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./resources/js/utils/isDesktop.js":
/*!*****************************************!*\
  !*** ./resources/js/utils/isDesktop.js ***!
  \*****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);


/* harmony default export */ __webpack_exports__["a"] = (function (options) {
	return __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).innerWidth() >= 768 && !BX.hasClass(document.documentElement, 'bx-touch');
});

/***/ }),

/***/ "./resources/js/utils/overlay.js":
/*!***************************************!*\
  !*** ./resources/js/utils/overlay.js ***!
  \***************************************/
/*! exports provided: show, hide */
/*! exports used: hide, show */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return show; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hide; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isDesktop__ = __webpack_require__(/*! ./isDesktop */ "./resources/js/utils/isDesktop.js");



var $overlay;

function show() {
	var d = new __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.Deferred();

	if (!$overlay) {
		$overlay = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('<div>');

		$overlay.css({
			'position': 'fixed',
			'opacity': '0',
			'width': '100%',
			'height': '100%',
			'top': '0',
			'left': '0',
			'right': '0',
			'bottom': '0',
			'background-color': 'rgba(0, 0, 0, 0.5)',
			'z-index': '9998',
			'cursor': 'pointer',
			'display': 'none'
		});

		__WEBPACK_IMPORTED_MODULE_0_jquery___default()('body').append($overlay);

		if (Object(__WEBPACK_IMPORTED_MODULE_1__isDesktop__["a" /* default */])() && document.body.scrollHeight > window.innerHeight) {
			__WEBPACK_IMPORTED_MODULE_0_jquery___default()('head').append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{padding-right:' + (window.innerWidth - document.documentElement.clientWidth) + 'px;}</style>');
		}
	}

	__WEBPACK_IMPORTED_MODULE_0_jquery___default()(document).trigger('overlay.before_show');
	__WEBPACK_IMPORTED_MODULE_0_jquery___default()('body').addClass('compensate-for-scrollbar');

	$overlay.show().velocity({
		'opacity': 1
	}, {
		duration: 300,
		complete: function complete() {
			__WEBPACK_IMPORTED_MODULE_0_jquery___default()(document).trigger('overlay.after_show');
			d.resolve($overlay);
		}
	});

	return d.promise();
}

function hide() {
	if (!$overlay) {
		return;
	}

	var d = new __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.Deferred();

	__WEBPACK_IMPORTED_MODULE_0_jquery___default()(document).trigger('overlay.before_hide');

	$overlay.velocity({
		'opacity': 0
	}, {
		duration: 300,
		complete: function complete() {
			$overlay.hide();
			d.resolve($overlay);
			__WEBPACK_IMPORTED_MODULE_0_jquery___default()('body').removeClass('fancybox-active compensate-for-scrollbar');
			__WEBPACK_IMPORTED_MODULE_0_jquery___default()(document).trigger('overlay.after_hide');
		}
	});

	return d.promise();
}



/***/ }),

/***/ "./resources/js/utils/parseOptions.js":
/*!********************************************!*\
  !*** ./resources/js/utils/parseOptions.js ***!
  \********************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_isString__ = __webpack_require__(/*! lodash/isString */ "./node_modules/lodash/isString.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_isString___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_isString__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_isObject__ = __webpack_require__(/*! lodash/isObject */ "./node_modules/lodash/isObject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_isObject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_isObject__);




/* harmony default export */ __webpack_exports__["a"] = (function (options) {
	return __WEBPACK_IMPORTED_MODULE_1_lodash_isString___default()(options) && options.trim() != '' ? __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.parseJSON(options) : __WEBPACK_IMPORTED_MODULE_2_lodash_isObject___default()(options) ? options : {};
});

/***/ })

},["./resources/js/main.js"]);