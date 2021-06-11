/* Riot v5.4.4, @license MIT */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.riot = {}));
}(this, (function (exports) { 'use strict';

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	var codesee_web_hosted = {exports: {}};

	var require$$0 = undefined;

	var require$$1 = undefined;

	(function (module, exports) {
	  !function (e, t) {
	    module.exports = t(function () {
	      try {
	        return require$$0;
	      } catch (e) {}
	    }(), function () {
	      try {
	        return require$$1;
	      } catch (e) {}
	    }()) ;
	  }(commonjsGlobal, function (e, t) {
	    return function (e) {
	      var t = {};

	      function n(r) {
	        if (t[r]) return t[r].exports;
	        var o = t[r] = {
	          i: r,
	          l: !1,
	          exports: {}
	        };
	        return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
	      }

	      return n.m = e, n.c = t, n.d = function (e, t, r) {
	        n.o(e, t) || Object.defineProperty(e, t, {
	          enumerable: !0,
	          get: r
	        });
	      }, n.r = function (e) {
	        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
	          value: "Module"
	        }), Object.defineProperty(e, "__esModule", {
	          value: !0
	        });
	      }, n.t = function (e, t) {
	        if (1 & t && (e = n(e)), 8 & t) return e;
	        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
	        var r = Object.create(null);
	        if (n.r(r), Object.defineProperty(r, "default", {
	          enumerable: !0,
	          value: e
	        }), 2 & t && "string" != typeof e) for (var o in e) n.d(r, o, function (t) {
	          return e[t];
	        }.bind(null, o));
	        return r;
	      }, n.n = function (e) {
	        var t = e && e.__esModule ? function () {
	          return e.default;
	        } : function () {
	          return e;
	        };
	        return n.d(t, "a", t), t;
	      }, n.o = function (e, t) {
	        return Object.prototype.hasOwnProperty.call(e, t);
	      }, n.p = "", n(n.s = 177);
	    }([function (e, t, n) {

	      Object.defineProperty(t, "__esModule", {
	        value: !0
	      });
	      var r = {
	        RECORDINGS: {
	          READ: "codesee.recordings.read",
	          WRITE: "codesee.recordings.write",
	          MANAGE: "codesee.recordings.manage"
	        },
	        STORIES: {
	          READ: "codesee.stories.read",
	          MANAGE: "codesee.stories.manage"
	        }
	      },
	          o = ["openid", "profile", "email", r.RECORDINGS.READ, r.RECORDINGS.WRITE, r.RECORDINGS.MANAGE, r.STORIES.READ, r.STORIES.MANAGE];
	      t.AUTHORIZATION_HEADER_NAME = "X-CodeSee-Authorization", t.AUTH_DUMMY_TOKEN_SINGLE_USER = "<CodeSee:SingleUser>", t.DEFAULT_SCOPES = o, t.DEFAULT_USER_EMAIL = "non-user@internal", t.LOCAL_STORAGE_AUTH_MODE_KEY = "CodeSee.authMode", t.LOCAL_STORAGE_CONFIG_CACHE_KEY = "CodeSee.recordingConfig", t.LOCAL_STORAGE_RECORDING_ID_KEY = "CodeSee.recordingId", t.LOCAL_STORAGE_RECORDING_TIMESTAMP = "CodeSee.recordingTimestamp", t.LOCAL_STORAGE_VERBOSE_KEY = "CodeSee.verboseData", t.LOCAL_STORAGE_WRITE_TOKEN_KEY = "CodeSee.writeToken", t.MESSAGE_QUEUE_OVERFLOW = "queue overflow", t.NOT_RECORDING = 0, t.OKTA_EXPECTED_AUDIENCE = "api://default", t.SCOPES = r, t.TRACING_HEADER_FORMAT_COMPOSITE_SESSION_ID = "1", t.TRACING_HEADER_FORMAT_SIMPLE_SESSION_ID = "2", t.TRACING_HEADER_NAME = "X-CodeSee-Tracing", t.TRACING_HEADER_NAME_REGEX = /X-CodeSee-Tracing/i, t.TRACK_ACROSS_PAGE_LOAD_TIMEOUT = 3e5, t.VERBOSITY_LOW_DATA = 500, t.VERBOSITY_MAX = 1e3, t.VERBOSITY_NO_DATA = 100;
	    }, function (e, t, n) {
	      var r = n(3),
	          o = n(31).f,
	          i = n(18),
	          s = n(16),
	          a = n(77),
	          u = n(102),
	          c = n(61);

	      e.exports = function (e, t) {
	        var n,
	            l,
	            f,
	            p,
	            h,
	            d = e.target,
	            v = e.global,
	            y = e.stat;
	        if (n = v ? r : y ? r[d] || a(d, {}) : (r[d] || {}).prototype) for (l in t) {
	          if (p = t[l], f = e.noTargetGet ? (h = o(n, l)) && h.value : n[l], !c(v ? l : d + (y ? "." : "#") + l, e.forced) && void 0 !== f) {
	            if (typeof p == typeof f) continue;
	            u(p, f);
	          }

	          (e.sham || f && f.sham) && i(p, "sham", !0), s(n, l, p, e);
	        }
	      };
	    }, function (e, t, n) {
	      var r = n(6);

	      e.exports = function (e) {
	        if (!r(e)) throw TypeError(String(e) + " is not an object");
	        return e;
	      };
	    }, function (e, t, n) {
	      (function (t) {
	        var n = function n(e) {
	          return e && e.Math == Math && e;
	        };

	        e.exports = n("object" == typeof globalThis && globalThis) || n("object" == typeof window && window) || n("object" == typeof self && self) || n("object" == typeof t && t) || function () {
	          return this;
	        }() || Function("return this")();
	      }).call(this, n(29));
	    }, function (e, t) {
	      e.exports = function (e) {
	        try {
	          return !!e();
	        } catch (e) {
	          return !0;
	        }
	      };
	    }, function (e, t, n) {
	      var r = n(3),
	          o = n(80),
	          i = n(12),
	          s = n(59),
	          a = n(84),
	          u = n(108),
	          c = o("wks"),
	          l = r.Symbol,
	          f = u ? l : l && l.withoutSetter || s;

	      e.exports = function (e) {
	        return i(c, e) && (a || "string" == typeof c[e]) || (a && i(l, e) ? c[e] = l[e] : c[e] = f("Symbol." + e)), c[e];
	      };
	    }, function (e, t) {
	      e.exports = function (e) {
	        return "object" == typeof e ? null !== e : "function" == typeof e;
	      };
	    }, function (e, t) {
	      e.exports = !1;
	    }, function (e, t, n) {

	      (function (e) {
	        n.d(t, "a", function () {
	          return r;
	        }), n.d(t, "b", function () {
	          return o;
	        }), n.d(t, "c", function () {
	          return i;
	        }), n.d(t, "d", function () {
	          return s;
	        });
	        n(182), n(184), n(185);

	        function r() {
	          if ("undefined" != typeof globalThis) return globalThis;
	          if (void 0 !== e) return e;
	          if ("undefined" != typeof window) return window;
	          if ("undefined" != typeof self) return self;
	          throw new Error("CodeSee Error: unable to locate a global object (e.g. `window`)");
	        }

	        function o() {
	          for (var e = r(); !Boolean(e.Cypress) && void 0 !== e.parent && e.parent !== e;) e = e.parent;

	          return e;
	        }

	        function i(e) {
	          return void 0 !== e.window;
	        }

	        function s(e) {
	          var t,
	              n,
	              r = e.navigator;
	          return (null == r || null === (t = r.userAgent) || void 0 === t ? void 0 : t.includes("Node.js")) || (null == r || null === (n = r.userAgent) || void 0 === n ? void 0 : n.includes("jsdom"));
	        }
	      }).call(this, n(29));
	    }, function (e, t, n) {
	      var r = n(4);
	      e.exports = !r(function () {
	        return 7 != Object.defineProperty({}, 1, {
	          get: function get() {
	            return 7;
	          }
	        })[1];
	      });
	    }, function (e, t, n) {
	      var r = n(2),
	          o = n(113),
	          i = n(17),
	          s = n(14),
	          a = n(86),
	          u = n(115),
	          c = function c(e, t) {
	        this.stopped = e, this.result = t;
	      };

	      e.exports = function (e, t, n) {
	        var l,
	            f,
	            p,
	            h,
	            d,
	            v,
	            y,
	            m = n && n.that,
	            g = !(!n || !n.AS_ENTRIES),
	            b = !(!n || !n.IS_ITERATOR),
	            S = !(!n || !n.INTERRUPTED),
	            w = s(t, m, 1 + g + S),
	            E = function E(e) {
	          return l && u(l), new c(!0, e);
	        },
	            _ = function _(e) {
	          return g ? (r(e), S ? w(e[0], e[1], E) : w(e[0], e[1])) : S ? w(e, E) : w(e);
	        };

	        if (b) l = e;else {
	          if ("function" != typeof (f = a(e))) throw TypeError("Target is not iterable");

	          if (o(f)) {
	            for (p = 0, h = i(e.length); h > p; p++) if ((d = _(e[p])) && d instanceof c) return d;

	            return new c(!1);
	          }

	          l = f.call(e);
	        }

	        for (v = l.next; !(y = v.call(l)).done;) {
	          try {
	            d = _(y.value);
	          } catch (e) {
	            throw u(l), e;
	          }

	          if ("object" == typeof d && d && d instanceof c) return d;
	        }

	        return new c(!1);
	      };
	    }, function (e, t, n) {
	      var r = n(9),
	          o = n(100),
	          i = n(2),
	          s = n(57),
	          a = Object.defineProperty;
	      t.f = r ? a : function (e, t, n) {
	        if (i(e), t = s(t, !0), i(n), o) try {
	          return a(e, t, n);
	        } catch (e) {}
	        if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
	        return "value" in n && (e[t] = n.value), e;
	      };
	    }, function (e, t) {
	      var n = {}.hasOwnProperty;

	      e.exports = function (e, t) {
	        return n.call(e, t);
	      };
	    }, function (e, t) {
	      e.exports = function (e) {
	        if ("function" != typeof e) throw TypeError(String(e) + " is not a function");
	        return e;
	      };
	    }, function (e, t, n) {
	      var r = n(13);

	      e.exports = function (e, t, n) {
	        if (r(e), void 0 === t) return e;

	        switch (n) {
	          case 0:
	            return function () {
	              return e.call(t);
	            };

	          case 1:
	            return function (n) {
	              return e.call(t, n);
	            };

	          case 2:
	            return function (n, r) {
	              return e.call(t, n, r);
	            };

	          case 3:
	            return function (n, r, o) {
	              return e.call(t, n, r, o);
	            };
	        }

	        return function () {
	          return e.apply(t, arguments);
	        };
	      };
	    }, function (e, t, n) {
	      var r = n(45),
	          o = n(26);

	      e.exports = function (e) {
	        return r(o(e));
	      };
	    }, function (e, t, n) {
	      var r = n(3),
	          o = n(18),
	          i = n(12),
	          s = n(77),
	          a = n(78),
	          u = n(23),
	          c = u.get,
	          l = u.enforce,
	          f = String(String).split("String");
	      (e.exports = function (e, t, n, a) {
	        var u,
	            c = !!a && !!a.unsafe,
	            p = !!a && !!a.enumerable,
	            h = !!a && !!a.noTargetGet;
	        "function" == typeof n && ("string" != typeof t || i(n, "name") || o(n, "name", t), (u = l(n)).source || (u.source = f.join("string" == typeof t ? t : ""))), e !== r ? (c ? !h && e[t] && (p = !0) : delete e[t], p ? e[t] = n : o(e, t, n)) : p ? e[t] = n : s(t, n);
	      })(Function.prototype, "toString", function () {
	        return "function" == typeof this && c(this).source || a(this);
	      });
	    }, function (e, t, n) {
	      var r = n(47),
	          o = Math.min;

	      e.exports = function (e) {
	        return e > 0 ? o(r(e), 9007199254740991) : 0;
	      };
	    }, function (e, t, n) {
	      var r = n(9),
	          o = n(11),
	          i = n(44);
	      e.exports = r ? function (e, t, n) {
	        return o.f(e, t, i(1, n));
	      } : function (e, t, n) {
	        return e[t] = n, e;
	      };
	    }, function (e, t, n) {
	      var r = n(104),
	          o = n(3),
	          i = function i(e) {
	        return "function" == typeof e ? e : void 0;
	      };

	      e.exports = function (e, t) {
	        return arguments.length < 2 ? i(r[e]) || i(o[e]) : r[e] && r[e][t] || o[e] && o[e][t];
	      };
	    }, function (e, t, n) {
	      var r = n(87),
	          o = n(16),
	          i = n(191);
	      r || o(Object.prototype, "toString", i, {
	        unsafe: !0
	      });
	    }, function (e, t, n) {
	      var r = n(7),
	          o = n(195);
	      e.exports = r ? o : function (e) {
	        return Map.prototype.entries.call(e);
	      };
	    }, function (e, t, n) {

	      (function (e) {
	        Object.defineProperty(t, "__esModule", {
	          value: !0
	        }), t.regCodeSeeNeeds = t.FunctionDescriptor = t.NativeFunctionDescriptor = t.PropertyDescriptorDescriptor = t.regGlobal = t.rebindGlobal = t.regAutoOpaqueConstr = t.regOpaqueRec = t.WeakMapDescriptor = t.WeakSetDescriptor = t.WeakMapWorkaround = t.WeakSetWorkaround = t.getPresentDescriptor = t.getJsonDescriptor = t.regValueDescriptorGetter = t.getValueDescriptor = t.regObjectDescriptorGetter = t.getObjectDescriptor = t.BigIntDescriptor = t.undefinedSymbol = t.ObjectPropertiesDescriptor = t.presentProps = t.readProps = t.writeProps = t.NotSerializableToken = t.PrimDescriptor = t.regNewConstructor = t.NotSerializableDescriptor = t.regConstructor = t.regPrim = t.regOpaquePrim = t.regOpaqueObject = t.updateInitialSnapshot = t.regDescriptor = t.descriptorTemplate = t.PresentContext = t.ReadContext = t.WriteContext = t.bind = t.BindDescriptor = t.setObjectDescriptor = t.boundFunSymbol = t.boundArgsSymbol = t.boundThisSymbol = t.parse = t.stringify = t.present = t.read = t.write = t.getState = t.resetState = t.descriptorSymbol = t.PresentBase = t.PresentSimple = t.PresentObject = void 0;
	        const r = n(179);
	        Object.defineProperty(t, "PresentObject", {
	          enumerable: !0,
	          get: function get() {
	            return r.PresentObject;
	          }
	        });
	        const o = n(180);
	        Object.defineProperty(t, "PresentSimple", {
	          enumerable: !0,
	          get: function get() {
	            return o.PresentSimple;
	          }
	        });
	        const i = n(75);
	        Object.defineProperty(t, "PresentBase", {
	          enumerable: !0,
	          get: function get() {
	            return i.PresentBase;
	          }
	        });
	        const s = Object,
	              a = {
	          log: console.log,
	          warn: console.warn
	        },
	              u = WeakMap.prototype.set;

	        function c(e, t, n) {
	          a.warn("Not serializable ", t, T, n);
	          let r = e.jobs,
	              o = 0;

	          for (;;) {
	            for (; r && !r.started;) r = r.nextJob;

	            if (!r) break;
	            if (a.warn(`SF#${++o}:`, r.index, r.debCtx, ":", r.value), o > 200) break;
	            r = r.nextJob;
	          }
	        }

	        const l = Map,
	              f = WeakMap,
	              p = Set;

	        function h(e) {
	          return e.symbol || (e.symbol = Symbol("@effectful/serialization/descriptor")), e.byName || (e.byName = new l()), e.byValue || (e.byValue = new l()), e.byObject || (e.byObject = new f()), e.byPrototype || (e.byPrototype = new f()), e.byTypeOfProp || (e.byTypeOfProp = new l()), e;
	        }

	        e.__effectfulSerializationState || (e.__effectfulSerializationState = {});
	        let d = h(__effectfulSerializationState),
	            v = Object;
	        t.descriptorSymbol = d.symbol;
	        let y = d.byName,
	            m = d.byValue,
	            g = d.byObject,
	            b = d.byPrototype,
	            S = d.byTypeOfProp;
	        t.resetState = function (e) {
	          if (e === void 0) {
	            e = {};
	          }

	          d = h(e), t.descriptorSymbol = d.symbol, y = d.byName, m = d.byValue, g = d.byObject, b = d.byPrototype, S = d.byTypeOfProp;
	        }, t.getState = function () {
	          return d;
	        };
	        const w = {
	          [t.descriptorSymbol]: !1
	        },
	              E = {
	          arguments: !1,
	          caller: !1,
	          length: !1,
	          name: !1
	        };

	        function _(e, t) {
	          if (t === void 0) {
	            t = {};
	          }

	          if ("object" != typeof e || Array.isArray(e)) throw new TypeError("wrong argument type");
	          const n = new x(t),
	                r = [];
	          r.push(n.step(e, r, 0));
	          const {
	            sharedRefs: o
	          } = n,
	                i = t.alwaysByRef,
	                a = [],
	                u = t.refs,
	                c = n.weakMaps;

	          for (let e; null != (e = n.jobs);) {
	            if (e.started) {
	              i ? (e.ref && (e.ref.r = a.push(e.data) - 1), u && u.push(e.value)) : o.push(e), e = n.jobs = e.nextJob;
	              continue;
	            }

	            e.started = !0;
	            const t = e.value;
	            e.data = e.descriptor.write(n, t, e.parent, e.index);

	            for (const [e, r] of c) if (e.has(t)) {
	              const {
	                k: o,
	                v: i
	              } = r;
	              o.push(n.step(t, o, o.length)), i.push(n.step(e.get(t), i, i.length));
	            }
	          }

	          if (n.weakSets.length) for (const e of n.sharedRefs.values()) {
	            const t = typeof e.value;
	            if ("object" === t || "function" === t) for (const [t, r] of n.weakSets) t.has(e.value) && (e.ref || (e.ref = {}), r.v.push(e.ref));
	          }

	          if (!i && o.length) {
	            for (const e of o) e.ref ? (e.ref.r = a.push(e.data) - 1, e.parent && (e.parent[e.index] = e.ref)) : e.parent && (e.parent[e.index] = e.data);

	            if (null != u) for (const e of o) u.push(e.value);
	          }

	          return a.length ? s.assign({
	            x: a
	          }, r[0]) : r[0];
	        }

	        t.write = _;
	        const O = [];

	        function A(e, t) {
	          if (t === void 0) {
	            t = {};
	          }

	          if ("object" != typeof e) throw new TypeError("root value must be Object");
	          const n = e.x,
	                r = n ? n.length : 0,
	                o = new k(t, n || O);

	          if (r) {
	            const e = o.sharedVals,
	                  t = o.sharedDescriptors;

	            for (let e = 0; e < r; ++e) {
	              const r = n[e];
	              t[e] = ce(o, r);
	            }

	            for (let i = 0; i < r; ++i) {
	              e[i] === I && (e[i] = t[i].create(o, n[i]));
	            }

	            for (let i = 0; i < r; ++i) t[i].readContent(o, n[i], e[i]);
	          }

	          return ce(o, e).read(o, e);
	        }

	        function C() {
	          function e() {
	            for (var _len = arguments.length, n = new Array(_len), _key = 0; _key < _len; _key++) {
	              n[_key] = arguments[_key];
	            }

	            return e[t.boundFunSymbol].apply(e[t.boundThisSymbol], [...e[t.boundArgsSymbol], ...n]);
	          }

	          return u.call(g, e, t.BindDescriptor), e;
	        }

	        t.read = A, t.present = function (e, t) {
	          if (t === void 0) {
	            t = {};
	          }

	          if ("object" != typeof e) throw new TypeError("root value must be Object");
	          const n = e.x,
	                r = n ? n.length : 0,
	                o = new j(t, n || O);

	          if (r) {
	            const e = o.sharedVals,
	                  t = o.sharedDescriptors;

	            for (let e = 0; e < r; ++e) {
	              const r = n[e];
	              t[e] = le(o, r);
	            }

	            for (let i = 0; i < r; ++i) {
	              e[i] === I && (e[i] = t[i].presentForPrototype(o, n[i]));
	            }

	            for (let i = 0; i < r; ++i) t[i].presentForContent(o, n[i], e[i]);
	          }

	          return le(o, e).present(o, e);
	        }, t.stringify = function (e, t, n) {
	          return JSON.stringify(_(e), t, n);
	        }, t.parse = function (e) {
	          return A(JSON.parse(e));
	        }, t.boundThisSymbol = Symbol("@effectful/bind/this"), t.boundArgsSymbol = Symbol("@effectful/bind/args"), t.boundFunSymbol = Symbol("@effectful/bind/fun"), t.setObjectDescriptor = function (e, t) {
	          u.call(g, e, t);
	        }, t.BindDescriptor = P({
	          name: "Bind",
	          create: () => C(),
	          write: () => ({}),
	          overrideProps: Object.assign(Object.assign({}, E), {
	            prototype: !1
	          })
	        }), t.bind = function (e, n) {
	          const o = C();

	          for (var _len2 = arguments.length, r = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	            r[_key2 - 2] = arguments[_key2];
	          }

	          return o[t.boundThisSymbol] = n, o[t.boundFunSymbol] = e, o[t.boundArgsSymbol] = r, o;
	        };
	        let T = null;

	        class x {
	          constructor(e) {
	            this.sharedRefsMap = e.sharedRefsMap || (e.sharedRefsMap = new l()), this.sharedRefs = e.sharedRefs || [], this.opts = e, this.symsByName = e.symsByName || (e.symsByName = new l()), this.knownSyms = e.knownSyms || (e.knownSyms = new l()), this.weakMaps = e.weakMaps || (e.weakMaps = []), this.weakSets = e.weakSets || (e.weakSets = []), this.jobs = void 0;
	          }

	          step(e, n, r) {
	            let o = t.getValueDescriptor(e);

	            if (!o) {
	              const {
	                opts: i
	              } = this;
	              if (i.warnIgnored && i.verbose && c(this, r, e), !i.ignore) throw new TypeError(`not serializable value "${e}" at "${r}"(${T}) of "${n}"`);
	              if (i.warnIgnored && a.warn && !i.verbose && a.warn(`not serializable value "${e}" at "${r}"(${T}) of "${n}"`), !0 === i.ignore) return t.NotSerializableToken;
	              if ("opaque" === i.ignore) switch (typeof e) {
	                case "object":
	                  o = D(e);
	                  break;

	                case "function":
	                  o = t.NativeFunctionDescriptor;
	                  break;

	                default:
	                  o = N(e);
	              } else {
	                if ("placeholder" !== i.ignore) throw new TypeError("unsupported value for ignore option = " + i.ignore);
	                o = L;
	              }
	            }

	            return o ? o.write(this, e, n, r) : {};
	          }

	        }

	        t.WriteContext = x, x.prototype.showStack = function (e, t) {
	          c(this, e, t);
	        };
	        const I = {
	          _undef: !0
	        };

	        class k {
	          constructor(e, t) {
	            this.knownSyms = e.knownSyms || (e.knownSyms = new l()), this.symsByName = e.symsByName || (e.symsByName = new l()), this.opts = e;
	            const n = t.length;
	            this.sharedJsons = t, this.sharedVals = e.refs || (e.refs = Array(n).fill(I)), this.sharedDescriptors = Array(n);
	          }

	          step(e) {
	            return ce(this, e).read(this, e);
	          }

	        }

	        t.ReadContext = k;

	        class j {
	          constructor(e, t) {
	            this.knownSyms = e.knownSyms || (e.knownSyms = new l()), this.symsByName = e.symsByName || (e.symsByName = new l()), this.opts = e;
	            const n = t.length;
	            this.sharedJsons = t, this.sharedVals = e.refs || (e.refs = Array(n).fill(I)), this.sharedDescriptors = Array(n);
	          }

	          step(e) {
	            return le(this, e).present(this, e);
	          }

	        }

	        function R(e, t) {
	          const n = {};
	          if (void 0 !== this.valuePrototype) return n;
	          const r = s.getPrototypeOf(t);
	          return r === v.prototype || r === this.defaultPrototype || (n.p = e.step(r, n, "p")), n;
	        }

	        function P(e) {
	          let {
	            read: n,
	            readContent: o,
	            create: i,
	            present: a,
	            presentForPrototype: u,
	            presentForContent: c,
	            write: l
	          } = e;
	          n || e.create && (n = e.readContent ? X : e.create), !e.defaultPrototype && !1 !== e.props && !1 !== e.propsSnapshot && e.value && (e.defaultPrototype = s.getPrototypeOf(e.value));
	          const f = s.assign({}, w, "function" === e.typeofHint && E, e.overrideProps);
	          o || (o = function o() {}), n || (n = function n(e, t) {
	            return this.create(e, t);
	          }), i || (i = t.descriptorTemplate.create), a || (a = Z), u || (u = () => new r.PresentObject(Object)), c || (c = () => {}), l || (l = function l(e, t) {
	            throw new TypeError("not writable " + t);
	          });

	          const p = function (e) {
	            return e.name ? e.name : e.valuePrototype && e.valuePrototype.name ? e.valuePrototype.name : e.valueConstructor && e.valueConstructor.name ? e.valueConstructor.name : e.valuePrototype && e.valuePrototype.constructor && e.valuePrototype.constructor.name ? e.valuePrototype.constructor.name : "Object";
	          }(e);

	          let h = p,
	              d = 0;
	          if (!1 === e.strictName) for (; null != y.get(h); h = `${p}_${++d}`);
	          let v = s.assign({}, e, {
	            read: n,
	            readContent: o,
	            create: i,
	            write: l,
	            present: a,
	            presentForPrototype: u,
	            presentForContent: c,
	            name: h,
	            overrideProps: f
	          });

	          if (!1 !== e.props && (v = function (e) {
	            const t = e.overrideProps || w,
	                  n = e.filterProps;
	            let r;
	            !1 !== e.props && !1 !== e.propsSnapshot && e.value && (r = s.getOwnPropertyDescriptors(e.value));
	            return {
	              name: e.name,

	              write(r, o, i, a) {
	                const u = e.write(r, o, i, a),
	                      c = G(r, s.getOwnPropertyDescriptors(o), t, e.propsDescrMask || 0, this.snapshot, n);
	                return c.length && (u.f = c), u;
	              },

	              read: X,

	              readContent(t, n, r) {
	                e.readContent(t, n, r);
	                const o = n.f;
	                o && Q(t, o, r);
	              },

	              create: (t, n) => e.create(t, n),
	              present: Z,
	              presentForPrototype: (t, n) => e.presentForPrototype(t, n),

	              presentForContent(t, n, r) {
	                e.presentForContent(t, n, r);
	                const o = n.f;
	                o && K(t, o, r);
	              },

	              snapshot: r
	            };
	          }(v)), !1 !== e.default$ && "Object" !== h) {
	            const e = v;
	            v = s.assign({}, v, {
	              write(t, n, r, o) {
	                const i = e.write(t, n, r, o);
	                return i.$ || (i.$ = h), i;
	              }

	            });
	          }

	          const m = v;
	          return y.set(h, m), e.typeofTag && S.set(e.typeofTag, m), !1 !== e.refAware && (v = function (e) {
	            return s.assign({}, e, {
	              name: e.name,

	              write(t, n, r, o) {
	                let i = t.sharedRefsMap.get(n);
	                return null != i || (t.sharedRefsMap.set(n, t.jobs = i = {
	                  ref: null,
	                  data: null,
	                  parent: r,
	                  value: n,
	                  descriptor: e,
	                  index: o,
	                  nextJob: t.jobs,
	                  started: !1,
	                  debCtx: T
	                }), t.jobs = i, t.opts.alwaysByRef) ? (null == i.ref && (i.ref = {}), i.ref) : null;
	              },

	              read(t, n) {
	                if (null != n.r) {
	                  const e = this.create(t, n);
	                  return this.readContent(t, n, e), e;
	                }

	                return e.read(t, n);
	              },

	              create(t, n) {
	                const r = n.r;

	                if (null != r) {
	                  const e = t.sharedVals[r];
	                  return e !== I ? e : t.sharedVals[r] = t.sharedDescriptors[r].create(t, t.sharedJsons[r]);
	                }

	                return e.create(t, n);
	              },

	              readContent(t, n, r) {
	                null == n.r && e.readContent(t, n, r);
	              },

	              present(t, n) {
	                if (null != n.r) {
	                  const e = this.presentForPrototype(t, n);
	                  return this.presentForContent(t, n, e), e;
	                }

	                return e.present(t, n);
	              },

	              presentForPrototype(t, n) {
	                const r = n.r;

	                if (null != r) {
	                  const e = t.sharedVals[r];
	                  return e !== I ? e : t.sharedVals[r] = t.sharedDescriptors[r].presentForPrototype(t, t.sharedJsons[r]);
	                }

	                return e.presentForPrototype(t, n);
	              },

	              presentForContent(t, n, r) {
	                null == n.r && e.presentForContent(t, n, r);
	              }

	            });
	          }(v)), v = {
	            name: h,
	            read: v.read,
	            write: v.write,
	            present: v.present,
	            readContent: v.readContent,
	            create: v.create,
	            presentForPrototype: v.presentForPrototype,
	            presentForContent: v.presentForContent,
	            overrideProps: f,
	            value: e.value,
	            props: e.props,
	            default$: e.default$,
	            snapshot: v.snapshot
	          }, v;
	        }

	        function D(e, t, n) {
	          if (t === void 0) {
	            t = function (e) {
	              return e.name || e.constructor && e.constructor.name || "Object";
	            }(e);
	          }

	          if (n === void 0) {
	            n = {
	              props: !0,
	              propsSnapshot: !0
	            };
	          }

	          if (!e) return null;
	          let r;
	          return null != (r = g.get(e)) || (r = P(s.assign({}, $, {
	            name: t,
	            typeofHint: typeof e
	          }, n, {
	            value: e
	          })), u.call(g, e, r)), r;
	        }

	        function N(e, t) {
	          if (t === void 0) {
	            t = String(e);
	          }

	          let n = m.get(e);
	          return n || (n = P(s.assign({}, ee, {
	            name: t,
	            value: e,
	            refAware: !1
	          })), m.set(e, n), n);
	        }

	        function M(e, n, r) {
	          if (n === void 0) {
	            n = {};
	          }

	          const o = P(s.assign({
	            valuePrototype: e.prototype,
	            name: e.name
	          }, t.descriptorTemplate, n, {
	            overrideProps: s.assign({}, n.overrideProps),
	            propsSnapshot: n.propsSnapshot
	          }));
	          return r ? s.defineProperty(e.prototype, t.descriptorSymbol, {
	            value: o,
	            configurable: !0
	          }) : u.call(b, e.prototype, o), o;
	        }

	        t.PresentContext = j, t.descriptorTemplate = {
	          read: X,
	          write: R,
	          create: function create(e, t) {
	            if (this.valueConstructor) return new this.valueConstructor();
	            if (void 0 !== this.valuePrototype && !1 !== this.valuePrototype) return s.create(this.valuePrototype);
	            const n = t.p;
	            if (void 0 === n) return this.defaultPrototype ? s.create(this.defaultPrototype) : {};
	            if (null === n) return s.create(null);
	            let r;
	            return null != n.r ? (r = e.sharedVals[n.r], r === I && (r = null)) : n.$ && !n.f && (r = e.step(n)), s.create(r || null);
	          },

	          readContent(e, t, n) {
	            t.p && null === s.getPrototypeOf(n) && s.setPrototypeOf(n, e.step(t.p));
	          },

	          present: Z,
	          presentForPrototype: function presentForPrototype(e, t) {
	            const n = t.p;
	            if (void 0 === n) return this.valueConstructor ? new r.PresentObject(this.valueConstructor) : void 0 !== this.valuePrototype && !1 !== this.valuePrototype && this.valuePrototype && this.valuePrototype.constructor ? new r.PresentObject(this.valuePrototype.constructor) : this.defaultPrototype ? new r.PresentObject(this.defaultPrototype.constructor) : new r.PresentObject(Object);
	            if (null === n) return new r.PresentObject(null);

	            if (null != n.r) {
	              let t = e.sharedVals[n.r];
	              return t === I && (t = null), new r.PresentObject(t || null);
	            }

	            if (n.$ && !n.f) {
	              const t = e.step(n);
	              return new r.PresentObject(t || null);
	            }

	            return new r.PresentObject(null);
	          },

	          presentForContent(e, t, n) {
	            t.p && null === n.pro && (n.pro = e.step(t.p));
	          }

	        }, t.regDescriptor = P, t.updateInitialSnapshot = function (e) {
	          const n = t.getValueDescriptor(e);
	          if (!n) throw new TypeError("not serializable value");
	          if (!n.snapshot || !n.value || n.value !== e) throw new TypeError("the object doesn't contain another snapshot");
	          s.assign(n.snapshot, s.getOwnPropertyDescriptors(e));
	        }, t.regOpaqueObject = D, t.regOpaquePrim = N, t.regPrim = function (e, t, n) {
	          if (n === void 0) {
	            n = String(t);
	          }

	          return e = P(s.assign({}, e, {
	            name: n,
	            value: t,
	            refAware: !1
	          })), m.set(t, e), e;
	        }, t.regConstructor = M, t.NotSerializableDescriptor = P({
	          name: "NotSerializableToken",

	          read() {
	            throw new TypeError("Trying to use not serializable value");
	          },

	          create() {},

	          readContent() {},

	          write: () => t.NotSerializableToken,
	          props: !1,
	          refAware: !1,
	          default$: !1
	        });
	        const L = P({
	          name: "NotSerializable",
	          read: z,
	          create: z,

	          readContent() {},

	          write: () => ({}),
	          props: !1,
	          refAware: !1
	        });

	        function z() {
	          if ("NotSerializable" === this.name) return ve;

	          const e = function e() {};

	          return u.call(g, e, this), new Proxy(e, de);
	        }

	        function B(e, n) {
	          if (n === void 0) {
	            n = {};
	          }

	          return M(e, s.assign({
	            valueConstructor: e
	          }, t.descriptorTemplate, n));
	        }

	        t.regNewConstructor = B;
	        const F = P(Object.assign(Object.assign({}, t.descriptorTemplate), {
	          name: "Object"
	        }));
	        t.PrimDescriptor = P({
	          name: "Prim",
	          read: (e, t) => t,
	          create: (e, t) => t,
	          write: (e, t) => "string" == typeof t && t.length >= 250 ? t.substr(0, 249) + "…" : t,
	          present: (e, t) => t,
	          presentForPrototype: (e, t) => t,
	          refAware: !1,
	          props: !1,
	          default$: !1
	        });
	        const V = P({
	          name: "Ref",
	          read: (e, t) => e.sharedVals[t.r],
	          present: (e, t) => e.sharedVals[t.r]
	        });

	        function U(e, n, r, o) {
	          if (0 == (8 & o)) {
	            const o = e.step(r.value, n, 1);
	            if (o === t.NotSerializableToken) return;
	            n.push(o);
	          } else n.push(null);

	          return (o || r.set || r.get) && n.push(o), r.get && (n[3] = e.step(r.get, n, 3)), r.set && (n[4] = e.step(r.set, n, 4)), n;
	        }

	        function H(e) {
	          let t = 0;
	          return e.configurable || (t |= 1), e.enumerable || (t |= 2), e.writable || (t |= 4), "value" in e || (t |= 8), t;
	        }

	        function q(e, t, n, r, o, i) {
	          let s;

	          if (!1 !== t[r] && 0 == ((s = H(o)) & i) && (!n || n(r))) {
	            if (e) {
	              const t = e[r];
	              if (t && ("value" in t && Object.is(t.value, o.value) || "get" in t && t.get === o.get)) return;
	            }

	            return s;
	          }
	        }

	        function G(e, n, r, o, i, a) {
	          const u = [];
	          let c;

	          for (const t of s.getOwnPropertyNames(n)) {
	            const s = n[t];
	            if (void 0 === (c = q(i, r, a, t, s, o))) continue;
	            T = t;
	            const l = U(e, [t], s, c);
	            l && u.push(l);
	          }

	          for (const l of s.getOwnPropertySymbols(n)) {
	            const s = n[l];
	            if (void 0 === (c = q(i, r, a, l, s, o))) continue;
	            T = l;
	            const f = [],
	                  p = te(e, l, f, 0, !e.opts.ignore && !e.knownSyms);
	            p !== t.NotSerializableToken && (f.push(p), U(e, f, s, c), f.length && u.push(f));
	          }

	          return T = null, u;
	        }

	        function Y(e, t) {
	          let n;
	          if (t.substr) n = t;else if (t.$) {
	            const r = y.get(t.$);
	            r && (n = r.read(e, t));
	          }
	          return n || (n = ne(e, t)), n;
	        }

	        function J(e, n, r, o, i, s) {
	          return s.configurable = 0 == (1 & r), s.enumerable = 0 == (2 & r), 0 == (4 & r) && (s.writable = !0), 0 == (8 & r) && (s.value = e.step(n)), o && (s.get = e.step(o)), i && (s.set = e.step(i)), u.call(g, s, t.PropertyDescriptorDescriptor), s;
	        }

	        function Q(e, t, n) {
	          for (const [r, o, i, a, u] of t) {
	            const t = Y(e, r);

	            if (null != i) {
	              const r = J(e, o, i, a, u, {});

	              try {
	                s.defineProperty(n, t, r);
	                continue;
	              } catch (e) {
	                const r = s.getOwnPropertyDescriptor(n, t);
	                if (!r || r.configurable || !r.writable) throw e;
	              }
	            }

	            n[t] = e.step(o);
	          }
	        }

	        function W(e, t, n, r, o) {
	          const i = {};
	          return i.configurable = 0 == (1 & n), i.enumerable = 0 == (2 & n), 0 == (4 & n) && (i.writable = !0), 0 == (8 & n) && (i.value = e.step(t)), r && (i.get = e.step(r)), o && (i.set = e.step(o)), i;
	        }

	        function K(e, t, n) {
	          for (const [r, o, i, s, a] of t) {
	            const t = Y(e, r);

	            if (null != i) {
	              const r = W(e, o, i, s, a),
	                    u = r.value;
	              delete r.value, n.addProperty(t, u, r);
	            } else n.addProperty(t, e.step(o));
	          }
	        }

	        function X(e, t) {
	          const n = this.create(e, t);
	          return this.readContent(e, t, n), n;
	        }

	        function Z(e, t) {
	          const n = this.presentForPrototype(e, t);
	          return this.presentForContent(e, t, n), n;
	        }

	        t.NotSerializableToken = {
	          _notSerializable: !0
	        }, t.writeProps = G, t.readProps = Q, t.presentProps = K, t.ObjectPropertiesDescriptor = {
	          write: (e, t) => ({
	            f: G(e, t, w, 0)
	          }),
	          create: () => ({}),

	          readContent(e, t, n) {
	            for (const [r, o, i, s, a] of t.f) n[Y(e, r)] = J(e, o, i, s, a, {});
	          }

	        };
	        const $ = {
	          write(e, t) {
	            return t === this.value && this.name ? {
	              $: this.name
	            } : R.call(this, e, t);
	          },

	          create() {
	            return this.value;
	          },

	          presentForPrototype(e, t) {
	            const n = new r.PresentObject(void 0);
	            return n.name = t.$, n;
	          },

	          default$: !1
	        },
	              ee = Object.assign(Object.assign({}, $), {
	          props: !1
	        });

	        function te(e, n, r, o, i) {
	          const s = Symbol.keyFor(n);
	          if (s) return {
	            key: s
	          };
	          const a = m.get(n);
	          if (a) return a.write(e, n, r, o);

	          if (!i && e.knownSyms) {
	            let t = e.knownSyms.get(n);

	            if (!t) {
	              if (!e.symsByName) throw new TypeError(`couldn't write "${String(n)}"`);
	              let r = n.description;

	              if (!r) {
	                const e = String(n);
	                r = e.substring(7, e.length - 1);
	              }

	              let o = e.symsByName.get(r);
	              o || e.symsByName.set(r, o = []), t = {
	                name: r,
	                id: o.length,
	                value: n
	              }, o.push(t), e.knownSyms.set(n, t);
	            }

	            const r = {
	              name: t.name
	            };
	            return t.id && (r.id = t.id), r;
	          }

	          if (!i && !e.opts.ignore) throw new TypeError(`couldn't write "${String(n)}"`);
	          return t.NotSerializableToken;
	        }

	        function ne(e, n) {
	          if (n.key) return Symbol.for(n.key);
	          const {
	            name: r
	          } = n;

	          if (r && e.symsByName) {
	            let t = e.symsByName.get(r);
	            const o = n.id || 0;

	            if (t) {
	              const e = t[o];
	              if (e) return e.value;
	            }

	            const i = {
	              name: r,
	              id: o,
	              value: Symbol(n.name)
	            };
	            return t || e.symsByName.set(r, t = []), t[o] = i, e.knownSyms && e.knownSyms.set(i.value, i), i.value;
	          }

	          return t.undefinedSymbol;
	        }

	        function re(e, t) {
	          return P({
	            name: e,
	            write: () => ({
	              $: e
	            }),
	            create: () => t,
	            present: () => t,
	            refAware: !1,
	            props: !1,
	            default$: !1
	          });
	        }

	        t.undefinedSymbol = Symbol("@effectful/serialization/undefined");
	        const oe = re("NaN", NaN),
	              ie = re("undefined", void 0),
	              se = P({
	          write: te,
	          read: ne,
	          name: "Symbol",
	          refAware: !1,
	          props: !1
	        });
	        t.BigIntDescriptor = "function" == typeof BigInt ? P({
	          read: (e, t) => BigInt(t.int),
	          write: (e, t) => ({
	            int: t.toString()
	          }),
	          name: "Int",
	          refAware: !1,
	          props: !1
	        }) : P({
	          name: "Int",
	          read: (e, t) => t.int,
	          write: (e, t) => ({
	            int: String(t)
	          }),
	          refAware: !1,
	          props: !1
	        });
	        const ae = new Set(["FiberNode", "FiberRootNode", "ReactDOMBlockingRoot", "ReactDOMComponent", "ReactDOMEmptyComponent", "ReactCompositeComponentWrapper", "DevLoader", "PageQueryStore"]),
	              ue = new Set(["Vue", "VueComponent"]);

	        function ce(e, n) {
	          if ("object" != typeof n || null === n) return t.PrimDescriptor;
	          if (Array.isArray(n)) return fe;

	          if ("$" in n) {
	            const t = y.get(n.$);

	            if (!t) {
	              if (e.opts.warnIgnored && console.warn(`reading value with not registered type "${n.$}"`, n), !e.opts.ignore) throw new TypeError("not registered type:" + n.$);
	              return "placeholder" === e.opts.ignore ? P(s.assign({}, L, {
	                name: n.$
	              })) : ie;
	            }

	            return t;
	          }

	          return "r" in n ? V : F;
	        }

	        function le(e, n) {
	          if ("object" != typeof n || null === n) return t.PrimDescriptor;
	          if (Array.isArray(n)) return fe;

	          if ("$" in n) {
	            const e = y.get(n.$);

	            if (!e) {
	              const e = n.$;
	              return P({
	                presentForPrototype() {
	                  const t = new r.PresentObject(void 0);
	                  return t.name = e, new r.PresentObject(t);
	                },

	                presentForContent() {},

	                name: e,
	                strictName: !0
	              });
	            }

	            return e;
	          }

	          return "r" in n ? V : F;
	        }

	        t.getObjectDescriptor = function (e) {
	          let n = g.get(e);
	          if (n) return n;
	          const o = s.getPrototypeOf(e);
	          if (n = b.get(o), n) return n;
	          if (o && o !== Object && t.descriptorSymbol in o) return n = o[t.descriptorSymbol], n && "Function" === n.name && ue.has(e.name) ? (n = P(Object.assign({}, t.descriptorTemplate, $, {
	            name: e.name + " Constructor",
	            props: !1,
	            propsSnapshot: !1,
	            default$: !0,
	            presentForPrototype: () => new r.PresentObject({
	              name: e.name
	            })
	          })), u.call(g, e, n), n) : n;
	          let i, a;

	          try {
	            a = e.constructor, i = e.$$typeof;
	          } catch (e) {}

	          if (i && (n = S.get(i)), n) return n;

	          if (a) {
	            const e = a.name;
	            if (ae.has(e)) return n = M(a, {
	              props: !1,
	              default$: !0
	            }, !1), n;
	          }

	          return n;
	        }, t.regObjectDescriptorGetter = function (e) {
	          t.getObjectDescriptor = e;
	        }, t.getValueDescriptor = function (e) {
	          if (void 0 === e) return ie;

	          switch (typeof e) {
	            case "number":
	              if (isNaN(e)) return oe;

	            case "undefined":
	            case "boolean":
	            case "string":
	              return t.PrimDescriptor;

	            case "object":
	              return e ? t.getObjectDescriptor(e) || F : t.PrimDescriptor;

	            case "function":
	              return t.getObjectDescriptor(e);

	            case "symbol":
	              return se;

	            case "bigint":
	              return t.BigIntDescriptor;
	          }

	          return m.get(e);
	        }, t.regValueDescriptorGetter = function (e) {
	          t.getValueDescriptor = e;
	        }, t.getJsonDescriptor = ce, t.getPresentDescriptor = le;
	        const fe = B(Array, Object.assign(Object.assign({}, t.descriptorTemplate), {
	          write(e, t) {
	            const n = [];

	            for (const r of t) n.push(e.step(r, n, n.length));

	            return n;
	          },

	          readContent(e, t, n) {
	            for (const r of t) n.push(e.step(r));
	          },

	          presentForPrototype: () => [],

	          presentForContent(e, t, n) {
	            for (const r of t) n.push(e.step(r));
	          },

	          props: !1,
	          default$: !1,
	          globalName: "Array"
	        }));

	        function pe(e) {
	          return s.assign({}, t.descriptorTemplate, {
	            write(e, t) {
	              const n = [];

	              for (const r of t) n.push(e.step(r, n, n.length));

	              return {
	                $: this.name || "Iterable",
	                l: n
	              };
	            }

	          }, e);
	        }

	        t.WeakSetWorkaround = class {
	          constructor() {
	            this.prop = Symbol("@effectful/weakset");
	          }

	          add(e) {
	            switch (typeof e) {
	              case "function":
	              case "object":
	                s.defineProperty(e, this.prop, {
	                  configurable: !0,
	                  writable: !0,
	                  value: !0
	                });
	                break;

	              default:
	                throw TypeError("Invalid value used in weak set");
	            }

	            return this;
	          }

	          delete(e) {
	            return !!e[this.prop] && (delete e[this.prop], !0);
	          }

	          has(e) {
	            return !!e[this.prop];
	          }

	        }, t.WeakMapWorkaround = class {
	          constructor() {
	            this.prop = Symbol("@effectful/weakmap");
	          }

	          set(e, t) {
	            switch (typeof e) {
	              case "function":
	              case "object":
	                s.defineProperty(e, this.prop, {
	                  configurable: !0,
	                  writable: !0,
	                  value: t
	                });
	                break;

	              default:
	                throw TypeError("Invalid value used in weak map");
	            }

	            return this;
	          }

	          get(e) {
	            return e[this.prop];
	          }

	          delete(e) {
	            return !!e[this.prop] && (delete e[this.prop], !0);
	          }

	          has(e) {
	            return Object.prototype.hasOwnProperty.call(e, this.prop);
	          }

	        }, M(t.WeakSetWorkaround, {
	          name: "WeakSet#"
	        }), M(t.WeakMapWorkaround, {
	          name: "WeakMap#"
	        });
	        const he = WeakSet.prototype.add;
	        t.WeakSetDescriptor = M(WeakSet, {
	          name: "WeakSet",

	          write(e, t) {
	            const n = {
	              v: []
	            };
	            return e.weakSets.push([t, n]), n;
	          },

	          create: () => new WeakSet(),

	          readContent(e, t, n) {
	            const {
	              v: r
	            } = t;

	            for (const t of r) he.call(n, e.step(t));
	          }

	        }), t.WeakMapDescriptor = {
	          name: "WeakMap",

	          write(e, t) {
	            const n = [],
	                  r = [],
	                  o = {
	              k: n,
	              v: r
	            };

	            for (const o of e.sharedRefsMap.values()) t.has(o.value) && (n.push(e.step(o.value, n, n.length)), r.push(e.step(t.get(o.value), r, r.length)));

	            return e.weakMaps.push([t, o]), o;
	          },

	          create: () => new WeakMap(),

	          readContent(e, t, n) {
	            const {
	              k: r,
	              v: o
	            } = t;

	            for (let t = 0, i = r.length; t < i; ++t) u.call(n, e.step(r[t]), e.step(o[t]));
	          }

	        }, M(WeakMap, t.WeakMapDescriptor), B(p, pe({
	          readContent(e, t, n) {
	            for (const r of t.l) n.add(e.step(r));
	          },

	          globalName: "Set"
	        })), B(l, pe({
	          write(e, t) {
	            const n = [],
	                  r = [];

	            for (const [o, i] of t) n.push(e.step(o, n, n.length)), r.push(e.step(i, r, r.length));

	            return {
	              k: n,
	              v: r
	            };
	          },

	          readContent(e, t, n) {
	            const {
	              k: r,
	              v: o
	            } = t;

	            for (let t = 0, i = r.length; t < i; ++t) n.set(e.step(r[t]), e.step(o[t]));
	          },

	          globalName: "Map"
	        })), B(RegExp, {
	          name: "RegExp",

	          write(e, t) {
	            const n = {
	              src: t.source,
	              flags: t.flags
	            };
	            return t.lastIndex && (n.last = t.lastIndex), n;
	          },

	          create(e, t) {
	            const n = new RegExp(t.src, t.flags);
	            return t.last && (n.lastIndex = t.last), n;
	          },

	          props: !1,
	          refAware: !1,
	          globalName: "RegExp"
	        }), t.regOpaqueRec = function e(t, n, r) {
	          if (n === void 0) {
	            n = t.constructor.name;
	          }

	          if (r === void 0) {
	            r = {};
	          }

	          if (!t || "function" != typeof t && "object" != typeof t || g.has(t)) return;
	          const o = s.getOwnPropertyDescriptors(t);

	          for (const e of s.getOwnPropertySymbols(o)) i(o[e], `${n}#${String(e)}`);

	          D(t, n, r.descriptor || {
	            props: !1
	          });

	          for (const e of s.getOwnPropertyNames(o)) i(o[e], `${n}#${e}`);

	          if (r.deep) {
	            const o = s.getPrototypeOf(t);
	            o && e(o, n + "#proto", r);
	          }

	          function i(t, o) {
	            const i = t.value;
	            if (!i) return;
	            const s = typeof i;
	            "function" === s || "object" === s ? r.deep ? e(i, o, r) : D(i, o, r.descriptor) : "symbol" === s && null == Symbol.keyFor(i) && N(i, `${n}#${o}#${String(i)}`);
	          }
	        }, t.regAutoOpaqueConstr = function (e, n) {
	          return e.prototype[t.descriptorSymbol] = {
	            write(t, r, o, i) {
	              let s = e.name;
	              return r.name ? s += ":" + r.name : r.constructor !== e && (s += r.constructor.name), !n && console.warn && (c(t, s, r), console.warn("auto opaque", s, r, new Error().stack)), D(r, s).write(t, r, o, i);
	            }

	          };
	        }, t.rebindGlobal = function () {
	          if (g.has(e)) return;
	          const t = d;
	          v = e.Object, d = {
	            byName: new l(),
	            byValue: new l(d.byValue),
	            byObject: d.byObject,
	            byTypeOfProp: new l(d.byTypeOfProp)
	          }, e.__effectfulSerializationState = {};

	          for (let [n, r] of t.byName) {
	            if (r.globalName) {
	              const t = e[r.globalName];
	              if (!t) continue;
	              r = s.assign({}, r, {
	                value: t
	              }), u.call(g, t, r);
	            }

	            d.byName.set(n, r);
	          }

	          d = h(__effectfulSerializationState);
	        }, t.regGlobal = function () {
	          if (!g.has(e)) {
	            D(e, "#global", {
	              props: !0,
	              propsSnapshot: !0,
	              overrideProps: {
	                AnonymousContent: !1
	              }
	            });

	            for (const t of s.getOwnPropertyNames(e)) try {
	              const n = e[t];
	              if (!n) continue;
	              if ("function" != typeof n && "object" != typeof n) continue;

	              if ("location" === t) {
	                D(e.location, "location", {
	                  props: !1
	                });
	                continue;
	              }

	              const r = g.get(n);
	              if (r && !1 === r.props) continue;
	              D(n, "#" + t);

	              for (const e of s.getOwnPropertyNames(n)) {
	                if ("prototype" === e) continue;
	                const r = s.getOwnPropertyDescriptor(n, e);
	                "function" == typeof r.value && D(r.value, `#G#${t}#{j}`);
	              }

	              if ("function" == typeof n && n.prototype) for (const e of s.getOwnPropertyNames(n.prototype)) {
	                if ("prototype" === e) continue;
	                const r = s.getOwnPropertyDescriptor(n.prototype, e);
	                "function" == typeof r.value && D(r.value, `#G##${t}#{j}`);
	              }
	            } catch (e) {
	              continue;
	            }
	          }
	        }, N(t.boundThisSymbol, "#this"), N(t.boundArgsSymbol, "#args"), N(t.boundFunSymbol, "#fun");
	        const de = {};

	        for (const e of ["apply", "construct", "defineProperty", "deleteProperty", "enumerate", "getOwnPropertyDescriptor", "getPrototypeOf", "has", "isExtensible", "ownKeys", "preventExtensions", "set", "setPrototypeOf"]) de[e] = function (t) {
	          const n = g.get(t);
	          throw new TypeError(`${e} in a not restored object${n ? ` (${n.name})` : ""}`);
	        };

	        de.get = function (e, t) {
	          const n = g.get(e);
	          throw new TypeError(`getting ${t} in a not restored object${n ? ` (${n.name})` : ""}`);
	        };

	        const ve = new Proxy(function () {}, de);

	        if (t.PropertyDescriptorDescriptor = P({
	          read: (e, t) => ({}),

	          readContent(e, t, n) {
	            J(e, t.v, t.f || 0, t.s, t.g, n);
	          },

	          write(e, t) {
	            const n = U(e, [], t, H(t));
	            return n ? {
	              v: n[0],
	              f: n[1],
	              s: n[2],
	              g: n[3]
	            } : {};
	          },

	          name: "PD",
	          props: !1
	        }), t.NativeFunctionDescriptor = P({
	          name: "Native Function",
	          strictName: !0,
	          props: !1,
	          write: (e, t, n, r) => ({
	            n: t.name
	          }),
	          presentForPrototype: (e, t) => new r.PresentObject({
	            name: "Native Function"
	          }),

	          presentForContent(e, t, n) {
	            t.n && (n.name = t.n);
	          }

	        }), t.FunctionDescriptor = M(Function, {
	          name: "Function",
	          strictName: !0,
	          props: !0,
	          propsSnapshot: !1,
	          overrideProps: Object.assign(Object.assign({}, E), {
	            prototype: !1
	          }),
	          write: (e, t, n, r) => ({
	            n: t.name
	          }),
	          presentForPrototype: (e, t) => new r.PresentObject(Function),

	          presentForContent(e, t, n) {
	            t.n && (n.name = t.n);
	          }

	        }, !0), M(String, {
	          create: (e, t) => new String(t.v),
	          write: (e, t) => ({
	            v: String(t)
	          })
	        }), M(Number, {
	          create: (e, t) => new Number(t.v),
	          write: (e, t) => ({
	            v: Number(t)
	          })
	        }), "undefined" != typeof ArrayBuffer) {
	          const {
	            encode: t,
	            decode: r
	          } = n(181);
	          M(ArrayBuffer, {
	            name: "ArrayBuffer",
	            write: (e, n) => ({
	              d: t(n)
	            }),
	            create: (e, t) => r(t.d),
	            props: !1
	          });

	          for (const t of ["DataView", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Uint16Array", "Int32Array", "Uint32Array", "Float32Array", "Float64Array", "BigInt64Array", "BigUint64Array"]) {
	            const n = e[t];
	            n && M(n, {
	              name: t,

	              write(e, t) {
	                const n = {
	                  o: t.byteOffset,
	                  l: t.length
	                };
	                return n.b = e.step(t.buffer, n, "b"), n;
	              },

	              create: (e, t) => new n(e.step(t.b), t.o, t.l),
	              props: !1
	            });
	          }
	        }

	        t.regCodeSeeNeeds = function (e) {
	          D(e, "#global", {
	            propsSnapshot: !1,
	            props: !1
	          });
	        };
	      }).call(this, n(29));
	    }, function (e, t, n) {
	      var r,
	          o,
	          i,
	          s = n(101),
	          a = n(3),
	          u = n(6),
	          c = n(18),
	          l = n(12),
	          f = n(79),
	          p = n(58),
	          h = n(46),
	          d = a.WeakMap;

	      if (s) {
	        var v = f.state || (f.state = new d()),
	            y = v.get,
	            m = v.has,
	            g = v.set;
	        r = function r(e, t) {
	          return t.facade = e, g.call(v, e, t), t;
	        }, o = function o(e) {
	          return y.call(v, e) || {};
	        }, i = function i(e) {
	          return m.call(v, e);
	        };
	      } else {
	        var b = p("state");
	        h[b] = !0, r = function r(e, t) {
	          return t.facade = e, c(e, b, t), t;
	        }, o = function o(e) {
	          return l(e, b) ? e[b] : {};
	        }, i = function i(e) {
	          return l(e, b);
	        };
	      }

	      e.exports = {
	        set: r,
	        get: o,
	        has: i,
	        enforce: function enforce(e) {
	          return i(e) ? o(e) : r(e, {});
	        },
	        getterFor: function getterFor(e) {
	          return function (t) {
	            var n;
	            if (!u(t) || (n = o(t)).type !== e) throw TypeError("Incompatible receiver, " + e + " required");
	            return n;
	          };
	        }
	      };
	    }, function (e, t, n) {
	      var r = n(26);

	      e.exports = function (e) {
	        return Object(r(e));
	      };
	    }, function (e, t, n) {

	      var r = n(15),
	          o = n(107),
	          i = n(51),
	          s = n(23),
	          a = n(91),
	          u = s.set,
	          c = s.getterFor("Array Iterator");
	      e.exports = a(Array, "Array", function (e, t) {
	        u(this, {
	          type: "Array Iterator",
	          target: r(e),
	          index: 0,
	          kind: t
	        });
	      }, function () {
	        var e = c(this),
	            t = e.target,
	            n = e.kind,
	            r = e.index++;
	        return !t || r >= t.length ? (e.target = void 0, {
	          value: void 0,
	          done: !0
	        }) : "keys" == n ? {
	          value: r,
	          done: !1
	        } : "values" == n ? {
	          value: t[r],
	          done: !1
	        } : {
	          value: [r, t[r]],
	          done: !1
	        };
	      }, "values"), i.Arguments = i.Array, o("keys"), o("values"), o("entries");
	    }, function (e, t) {
	      e.exports = function (e) {
	        if (null == e) throw TypeError("Can't call method on " + e);
	        return e;
	      };
	    }, function (e, t, n) {

	      var r = n(119).charAt,
	          o = n(23),
	          i = n(91),
	          s = o.set,
	          a = o.getterFor("String Iterator");
	      i(String, "String", function (e) {
	        s(this, {
	          type: "String Iterator",
	          string: String(e),
	          index: 0
	        });
	      }, function () {
	        var e,
	            t = a(this),
	            n = t.string,
	            o = t.index;
	        return o >= n.length ? {
	          value: void 0,
	          done: !0
	        } : (e = r(n, o), t.index += e.length, {
	          value: e,
	          done: !1
	        });
	      });
	    }, function (e, t, n) {
	      var r = n(3),
	          o = n(122),
	          i = n(25),
	          s = n(18),
	          a = n(5),
	          u = a("iterator"),
	          c = a("toStringTag"),
	          l = i.values;

	      for (var f in o) {
	        var p = r[f],
	            h = p && p.prototype;

	        if (h) {
	          if (h[u] !== l) try {
	            s(h, u, l);
	          } catch (e) {
	            h[u] = l;
	          }
	          if (h[c] || s(h, c, f), o[f]) for (var d in i) if (h[d] !== i[d]) try {
	            s(h, d, i[d]);
	          } catch (e) {
	            h[d] = i[d];
	          }
	        }
	      }
	    }, function (e, t) {
	      var n;

	      n = function () {
	        return this;
	      }();

	      try {
	        n = n || new Function("return this")();
	      } catch (e) {
	        "object" == typeof window && (n = window);
	      }

	      e.exports = n;
	    }, function (e, t, n) {
	      var r = n(9),
	          o = n(11).f,
	          i = Function.prototype,
	          s = i.toString,
	          a = /^\s*function ([^ (]*)/;
	      r && !("name" in i) && o(i, "name", {
	        configurable: !0,
	        get: function get() {
	          try {
	            return s.call(this).match(a)[1];
	          } catch (e) {
	            return "";
	          }
	        }
	      });
	    }, function (e, t, n) {
	      var r = n(9),
	          o = n(56),
	          i = n(44),
	          s = n(15),
	          a = n(57),
	          u = n(12),
	          c = n(100),
	          l = Object.getOwnPropertyDescriptor;
	      t.f = r ? l : function (e, t) {
	        if (e = s(e), t = a(t, !0), c) try {
	          return l(e, t);
	        } catch (e) {}
	        if (u(e, t)) return i(!o.f.call(e, t), e[t]);
	      };
	    }, function (e, t) {
	      var n = {}.toString;

	      e.exports = function (e) {
	        return n.call(e).slice(8, -1);
	      };
	    }, function (e, t, n) {
	      var r = n(32),
	          o = n(3);
	      e.exports = "process" == r(o.process);
	    }, function (e, t, n) {
	      var r = n(32);

	      e.exports = Array.isArray || function (e) {
	        return "Array" == r(e);
	      };
	    }, function (e, t, n) {

	      var r = n(1),
	          o = n(66);
	      r({
	        target: "RegExp",
	        proto: !0,
	        forced: /./.exec !== o
	      }, {
	        exec: o
	      });
	    }, function (e, t, n) {
	      var r = n(1),
	          o = n(204);
	      r({
	        target: "Array",
	        stat: !0,
	        forced: !n(88)(function (e) {
	          Array.from(e);
	        })
	      }, {
	        from: o
	      });
	    }, function (e, t, n) {

	      var r = n(1),
	          o = n(3),
	          i = n(19),
	          s = n(7),
	          a = n(9),
	          u = n(84),
	          c = n(108),
	          l = n(4),
	          f = n(12),
	          p = n(34),
	          h = n(6),
	          d = n(2),
	          v = n(24),
	          y = n(15),
	          m = n(57),
	          g = n(44),
	          b = n(49),
	          S = n(50),
	          w = n(60),
	          E = n(210),
	          _ = n(83),
	          O = n(31),
	          A = n(11),
	          C = n(56),
	          T = n(18),
	          x = n(16),
	          I = n(80),
	          k = n(58),
	          j = n(46),
	          R = n(59),
	          P = n(5),
	          D = n(146),
	          N = n(147),
	          M = n(52),
	          L = n(23),
	          z = n(53).forEach,
	          B = k("hidden"),
	          F = P("toPrimitive"),
	          V = L.set,
	          U = L.getterFor("Symbol"),
	          H = Object.prototype,
	          _q = o.Symbol,
	          G = i("JSON", "stringify"),
	          Y = O.f,
	          J = A.f,
	          Q = E.f,
	          W = C.f,
	          K = I("symbols"),
	          X = I("op-symbols"),
	          Z = I("string-to-symbol-registry"),
	          $ = I("symbol-to-string-registry"),
	          ee = I("wks"),
	          te = o.QObject,
	          ne = !te || !te.prototype || !te.prototype.findChild,
	          re = a && l(function () {
	        return 7 != b(J({}, "a", {
	          get: function get() {
	            return J(this, "a", {
	              value: 7
	            }).a;
	          }
	        })).a;
	      }) ? function (e, t, n) {
	        var r = Y(H, t);
	        r && delete H[t], J(e, t, n), r && e !== H && J(H, t, r);
	      } : J,
	          oe = function oe(e, t) {
	        var n = K[e] = b(_q.prototype);
	        return V(n, {
	          type: "Symbol",
	          tag: e,
	          description: t
	        }), a || (n.description = t), n;
	      },
	          ie = c ? function (e) {
	        return "symbol" == typeof e;
	      } : function (e) {
	        return Object(e) instanceof _q;
	      },
	          se = function se(e, t, n) {
	        e === H && se(X, t, n), d(e);
	        var r = m(t, !0);
	        return d(n), f(K, r) ? (n.enumerable ? (f(e, B) && e[B][r] && (e[B][r] = !1), n = b(n, {
	          enumerable: g(0, !1)
	        })) : (f(e, B) || J(e, B, g(1, {})), e[B][r] = !0), re(e, r, n)) : J(e, r, n);
	      },
	          ae = function ae(e, t) {
	        d(e);
	        var n = y(t),
	            r = S(n).concat(fe(n));
	        return z(r, function (t) {
	          a && !ue.call(n, t) || se(e, t, n[t]);
	        }), e;
	      },
	          ue = function ue(e) {
	        var t = m(e, !0),
	            n = W.call(this, t);
	        return !(this === H && f(K, t) && !f(X, t)) && (!(n || !f(this, t) || !f(K, t) || f(this, B) && this[B][t]) || n);
	      },
	          ce = function ce(e, t) {
	        var n = y(e),
	            r = m(t, !0);

	        if (n !== H || !f(K, r) || f(X, r)) {
	          var o = Y(n, r);
	          return !o || !f(K, r) || f(n, B) && n[B][r] || (o.enumerable = !0), o;
	        }
	      },
	          le = function le(e) {
	        var t = Q(y(e)),
	            n = [];
	        return z(t, function (e) {
	          f(K, e) || f(j, e) || n.push(e);
	        }), n;
	      },
	          fe = function fe(e) {
	        var t = e === H,
	            n = Q(t ? X : y(e)),
	            r = [];
	        return z(n, function (e) {
	          !f(K, e) || t && !f(H, e) || r.push(K[e]);
	        }), r;
	      };

	      (u || (x((_q = function q() {
	        if (this instanceof _q) throw TypeError("Symbol is not a constructor");

	        var e = arguments.length && void 0 !== arguments[0] ? String(arguments[0]) : void 0,
	            t = R(e),
	            n = function n(e) {
	          this === H && n.call(X, e), f(this, B) && f(this[B], t) && (this[B][t] = !1), re(this, t, g(1, e));
	        };

	        return a && ne && re(H, t, {
	          configurable: !0,
	          set: n
	        }), oe(t, e);
	      }).prototype, "toString", function () {
	        return U(this).tag;
	      }), x(_q, "withoutSetter", function (e) {
	        return oe(R(e), e);
	      }), C.f = ue, A.f = se, O.f = ce, w.f = E.f = le, _.f = fe, D.f = function (e) {
	        return oe(P(e), e);
	      }, a && (J(_q.prototype, "description", {
	        configurable: !0,
	        get: function get() {
	          return U(this).description;
	        }
	      }), s || x(H, "propertyIsEnumerable", ue, {
	        unsafe: !0
	      }))), r({
	        global: !0,
	        wrap: !0,
	        forced: !u,
	        sham: !u
	      }, {
	        Symbol: _q
	      }), z(S(ee), function (e) {
	        N(e);
	      }), r({
	        target: "Symbol",
	        stat: !0,
	        forced: !u
	      }, {
	        for: function _for(e) {
	          var t = String(e);
	          if (f(Z, t)) return Z[t];

	          var n = _q(t);

	          return Z[t] = n, $[n] = t, n;
	        },
	        keyFor: function keyFor(e) {
	          if (!ie(e)) throw TypeError(e + " is not a symbol");
	          if (f($, e)) return $[e];
	        },
	        useSetter: function useSetter() {
	          ne = !0;
	        },
	        useSimple: function useSimple() {
	          ne = !1;
	        }
	      }), r({
	        target: "Object",
	        stat: !0,
	        forced: !u,
	        sham: !a
	      }, {
	        create: function create(e, t) {
	          return void 0 === t ? b(e) : ae(b(e), t);
	        },
	        defineProperty: se,
	        defineProperties: ae,
	        getOwnPropertyDescriptor: ce
	      }), r({
	        target: "Object",
	        stat: !0,
	        forced: !u
	      }, {
	        getOwnPropertyNames: le,
	        getOwnPropertySymbols: fe
	      }), r({
	        target: "Object",
	        stat: !0,
	        forced: l(function () {
	          _.f(1);
	        })
	      }, {
	        getOwnPropertySymbols: function getOwnPropertySymbols(e) {
	          return _.f(v(e));
	        }
	      }), G) && r({
	        target: "JSON",
	        stat: !0,
	        forced: !u || l(function () {
	          var e = _q();

	          return "[null]" != G([e]) || "{}" != G({
	            a: e
	          }) || "{}" != G(Object(e));
	        })
	      }, {
	        stringify: function stringify(e, t, n) {
	          for (var r, o = [e], i = 1; arguments.length > i;) o.push(arguments[i++]);

	          if (r = t, (h(t) || void 0 !== e) && !ie(e)) return p(t) || (t = function t(e, _t) {
	            if ("function" == typeof r && (_t = r.call(this, e, _t)), !ie(_t)) return _t;
	          }), o[1] = t, G.apply(null, o);
	        }
	      });
	      _q.prototype[F] || T(_q.prototype, F, _q.prototype.valueOf), M(_q, "Symbol"), j[B] = !0;
	    }, function (e, t, n) {

	      var r = n(1),
	          o = n(9),
	          i = n(3),
	          s = n(12),
	          a = n(6),
	          u = n(11).f,
	          c = n(102),
	          l = i.Symbol;

	      if (o && "function" == typeof l && (!("description" in l.prototype) || void 0 !== l().description)) {
	        var f = {},
	            p = function p() {
	          var e = arguments.length < 1 || void 0 === arguments[0] ? void 0 : String(arguments[0]),
	              t = this instanceof p ? new l(e) : void 0 === e ? l() : l(e);
	          return "" === e && (f[t] = !0), t;
	        };

	        c(p, l);
	        var h = p.prototype = l.prototype;
	        h.constructor = p;
	        var d = h.toString,
	            v = "Symbol(test)" == String(l("test")),
	            y = /^Symbol\((.*)\)[^)]+$/;
	        u(h, "description", {
	          configurable: !0,
	          get: function get() {
	            var e = a(this) ? this.valueOf() : this,
	                t = d.call(e);
	            if (s(f, e)) return "";
	            var n = v ? t.slice(7, -1) : t.replace(y, "$1");
	            return "" === n ? void 0 : n;
	          }
	        }), r({
	          global: !0,
	          forced: !0
	        }, {
	          Symbol: p
	        });
	      }
	    }, function (e, t, n) {
	      n(147)("iterator");
	    }, function (e, t, n) {

	      var r = n(1),
	          o = n(6),
	          i = n(34),
	          s = n(106),
	          a = n(17),
	          u = n(15),
	          c = n(55),
	          l = n(5),
	          f = n(67)("slice"),
	          p = l("species"),
	          h = [].slice,
	          d = Math.max;
	      r({
	        target: "Array",
	        proto: !0,
	        forced: !f
	      }, {
	        slice: function slice(e, t) {
	          var n,
	              r,
	              l,
	              f = u(this),
	              v = a(f.length),
	              y = s(e, v),
	              m = s(void 0 === t ? v : t, v);
	          if (i(f) && ("function" != typeof (n = f.constructor) || n !== Array && !i(n.prototype) ? o(n) && null === (n = n[p]) && (n = void 0) : n = void 0, n === Array || void 0 === n)) return h.call(f, y, m);

	          for (r = new (void 0 === n ? Array : n)(d(m - y, 0)), l = 0; y < m; y++, l++) y in f && c(r, l, f[y]);

	          return r.length = l, r;
	        }
	      });
	    }, function (e, t, n) {
	      n(1)({
	        target: "Array",
	        stat: !0
	      }, {
	        isArray: n(34)
	      });
	    }, function (e, t, n) {
	      var r = n(1),
	          o = n(9);
	      r({
	        target: "Object",
	        stat: !0,
	        forced: !o,
	        sham: !o
	      }, {
	        defineProperty: n(11).f
	      });
	    }, function (e, t, n) {

	      n.d(t, "c", function () {
	        return s;
	      }), n.d(t, "d", function () {
	        return a;
	      }), n.d(t, "b", function () {
	        return l;
	      }), n.d(t, "a", function () {
	        return f;
	      });
	      n(96), n(149), n(211), n(40), n(20), n(30), n(36), n(27), n(37), n(38), n(39), n(25), n(28), n(41);

	      function r(e, t) {
	        var _n;

	        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
	          if (Array.isArray(e) || (_n = function (e, t) {
	            if (!e) return;
	            if ("string" == typeof e) return o(e, t);
	            var n = Object.prototype.toString.call(e).slice(8, -1);
	            "Object" === n && e.constructor && (n = e.constructor.name);
	            if ("Map" === n || "Set" === n) return Array.from(e);
	            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return o(e, t);
	          }(e)) || t && e && "number" == typeof e.length) {
	            _n && (e = _n);

	            var r = 0,
	                i = function i() {};

	            return {
	              s: i,
	              n: function n() {
	                return r >= e.length ? {
	                  done: !0
	                } : {
	                  done: !1,
	                  value: e[r++]
	                };
	              },
	              e: function e(_e) {
	                throw _e;
	              },
	              f: i
	            };
	          }

	          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	        }

	        var s,
	            a = !0,
	            u = !1;
	        return {
	          s: function s() {
	            _n = e[Symbol.iterator]();
	          },
	          n: function n() {
	            var e = _n.next();

	            return a = e.done, e;
	          },
	          e: function e(_e2) {
	            u = !0, s = _e2;
	          },
	          f: function f() {
	            try {
	              a || null == _n.return || _n.return();
	            } finally {
	              if (u) throw s;
	            }
	          }
	        };
	      }

	      function o(e, t) {
	        (null == t || t > e.length) && (t = e.length);

	        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];

	        return r;
	      }

	      var i = [];

	      function s(e) {
	        u(e, "mousedown", CodeSee.userMouseEvent.bind(CodeSee)), u(e, "mouseup", CodeSee.userMouseEvent.bind(CodeSee)), u(e, "click", CodeSee.userMouseEvent.bind(CodeSee)), u(e, "dblclick", CodeSee.userMouseEvent.bind(CodeSee)), u(e, "keydown", CodeSee.userKeyEvent.bind(CodeSee)), u(e, "keyup", CodeSee.userKeyEvent.bind(CodeSee)), u(e, "keypress", CodeSee.userKeyEvent.bind(CodeSee));
	      }

	      function a(e) {
	        var t,
	            n = r(i);

	        try {
	          for (n.s(); !(t = n.n()).done;) {
	            var o = t.value,
	                s = o.type,
	                a = o.listener;
	            e.window.removeEventListener(s, a, !0);
	          }
	        } catch (e) {
	          n.e(e);
	        } finally {
	          n.f();
	        }

	        i = [];
	      }

	      function u(e, t, n) {
	        e.window.addEventListener(t, n, !0), i.push({
	          type: t,
	          listener: n
	        });
	      }

	      function c(e) {
	        return e ? e === e.window ? "Window" : e instanceof Document ? "Document" : {
	          tag: e.localName,
	          id: e.id,
	          classes: e.className
	        } : e;
	      }

	      function l(e) {
	        return {
	          altKey: e.altKey,
	          bubbles: e.bubbles,
	          button: e.button,
	          buttons: e.buttons,
	          cancelBubble: e.cancelBubble,
	          cancelable: e.cancelable,
	          clientX: e.clientX,
	          clientY: e.clientY,
	          composed: e.composed,
	          ctrlKey: e.ctrlKey,
	          currentTarget: c(e.currentTarget),
	          defaultPrevented: e.defaultPrevented,
	          detail: e.detail,
	          eventPhase: e.eventPhase,
	          fromElement: e.fromElement,
	          isTrusted: e.isTrusted,
	          layerX: e.layerX,
	          layerY: e.layerY,
	          metaKey: e.metaKey,
	          movementX: e.movementX,
	          movementY: e.movementY,
	          offsetX: e.offsetX,
	          offsetY: e.offsetY,
	          pageX: e.pageX,
	          pageY: e.pageY,
	          path: e.path.map(c),
	          relatedTarget: c(e.relatedTarget),
	          returnValue: e.returnValue,
	          screenX: e.screenX,
	          screenY: e.screenY,
	          shiftKey: e.shiftKey,
	          srcElement: c(e.srcElement),
	          target: c(e.target),
	          timeStamp: e.timeStamp,
	          toElement: c(e.toElement),
	          type: e.type,
	          view: c(e.view),
	          which: e.which
	        };
	      }

	      function f(e) {
	        return {
	          altKey: e.altKey,
	          bubbles: e.bubbles,
	          cancelBubble: e.cancelBubble,
	          cancelable: e.cancelable,
	          charCode: e.charCode,
	          code: e.code,
	          composed: e.composed,
	          ctrlKey: e.ctrlKey,
	          currentTarget: c(e.currentTarget),
	          defaultPrevented: e.defaultPrevented,
	          detail: e.detail,
	          eventPhase: e.eventPhase,
	          isComposing: e.isComposing,
	          isTrusted: e.isTrusted,
	          key: e.key,
	          keyCode: e.keyCode,
	          location: e.location,
	          metaKey: e.metaKey,
	          path: e.path.map(c),
	          repeat: e.repeat,
	          returnValue: e.returnValue,
	          shiftKey: e.shiftKey,
	          srcElement: c(e.srcElement),
	          target: c(e.target),
	          timeStamp: e.timeStamp,
	          type: e.type,
	          view: c(e.view),
	          which: e.which
	        };
	      }
	    }, function (e, t) {
	      e.exports = function (e, t) {
	        return {
	          enumerable: !(1 & e),
	          configurable: !(2 & e),
	          writable: !(4 & e),
	          value: t
	        };
	      };
	    }, function (e, t, n) {
	      var r = n(4),
	          o = n(32),
	          i = "".split;
	      e.exports = r(function () {
	        return !Object("z").propertyIsEnumerable(0);
	      }) ? function (e) {
	        return "String" == o(e) ? i.call(e, "") : Object(e);
	      } : Object;
	    }, function (e, t) {
	      e.exports = {};
	    }, function (e, t) {
	      var n = Math.ceil,
	          r = Math.floor;

	      e.exports = function (e) {
	        return isNaN(e = +e) ? 0 : (e > 0 ? r : n)(e);
	      };
	    }, function (e, t, n) {
	      var r,
	          o,
	          i = n(3),
	          s = n(62),
	          a = i.process,
	          u = a && a.versions,
	          c = u && u.v8;
	      c ? o = (r = c.split("."))[0] + r[1] : s && (!(r = s.match(/Edge\/(\d+)/)) || r[1] >= 74) && (r = s.match(/Chrome\/(\d+)/)) && (o = r[1]), e.exports = o && +o;
	    }, function (e, t, n) {
	      var r,
	          o = n(2),
	          i = n(109),
	          s = n(82),
	          a = n(46),
	          u = n(110),
	          c = n(76),
	          l = n(58),
	          f = l("IE_PROTO"),
	          p = function p() {},
	          h = function h(e) {
	        return "<script>" + e + "<\/script>";
	      },
	          _d = function d() {
	        try {
	          r = document.domain && new ActiveXObject("htmlfile");
	        } catch (e) {}

	        var e, t;
	        _d = r ? function (e) {
	          e.write(h("")), e.close();
	          var t = e.parentWindow.Object;
	          return e = null, t;
	        }(r) : ((t = c("iframe")).style.display = "none", u.appendChild(t), t.src = String("javascript:"), (e = t.contentWindow.document).open(), e.write(h("document.F=Object")), e.close(), e.F);

	        for (var n = s.length; n--;) delete _d.prototype[s[n]];

	        return _d();
	      };

	      a[f] = !0, e.exports = Object.create || function (e, t) {
	        var n;
	        return null !== e ? (p.prototype = o(e), n = new p(), p.prototype = null, n[f] = e) : n = _d(), void 0 === t ? n : i(n, t);
	      };
	    }, function (e, t, n) {
	      var r = n(105),
	          o = n(82);

	      e.exports = Object.keys || function (e) {
	        return r(e, o);
	      };
	    }, function (e, t) {
	      e.exports = {};
	    }, function (e, t, n) {
	      var r = n(11).f,
	          o = n(12),
	          i = n(5)("toStringTag");

	      e.exports = function (e, t, n) {
	        e && !o(e = n ? e : e.prototype, i) && r(e, i, {
	          configurable: !0,
	          value: t
	        });
	      };
	    }, function (e, t, n) {
	      var r = n(14),
	          o = n(45),
	          i = n(24),
	          s = n(17),
	          a = n(90),
	          u = [].push,
	          c = function c(e) {
	        var t = 1 == e,
	            n = 2 == e,
	            c = 3 == e,
	            l = 4 == e,
	            f = 6 == e,
	            p = 7 == e,
	            h = 5 == e || f;
	        return function (d, v, y, m) {
	          for (var g, b, S = i(d), w = o(S), E = r(v, y, 3), _ = s(w.length), O = 0, A = m || a, C = t ? A(d, _) : n || p ? A(d, 0) : void 0; _ > O; O++) if ((h || O in w) && (b = E(g = w[O], O, S), e)) if (t) C[O] = b;else if (b) switch (e) {
	            case 3:
	              return !0;

	            case 5:
	              return g;

	            case 6:
	              return O;

	            case 2:
	              u.call(C, g);
	          } else switch (e) {
	            case 4:
	              return !1;

	            case 7:
	              u.call(C, g);
	          }

	          return f ? -1 : c || l ? l : C;
	        };
	      };

	      e.exports = {
	        forEach: c(0),
	        map: c(1),
	        filter: c(2),
	        some: c(3),
	        every: c(4),
	        find: c(5),
	        findIndex: c(6),
	        filterOut: c(7)
	      };
	    }, function (e, t, n) {
	      var r = n(2),
	          o = n(13),
	          i = n(5)("species");

	      e.exports = function (e, t) {
	        var n,
	            s = r(e).constructor;
	        return void 0 === s || null == (n = r(s)[i]) ? t : o(n);
	      };
	    }, function (e, t, n) {

	      var r = n(57),
	          o = n(11),
	          i = n(44);

	      e.exports = function (e, t, n) {
	        var s = r(t);
	        s in e ? o.f(e, s, i(0, n)) : e[s] = n;
	      };
	    }, function (e, t, n) {

	      var r = {}.propertyIsEnumerable,
	          o = Object.getOwnPropertyDescriptor,
	          i = o && !r.call({
	        1: 2
	      }, 1);
	      t.f = i ? function (e) {
	        var t = o(this, e);
	        return !!t && t.enumerable;
	      } : r;
	    }, function (e, t, n) {
	      var r = n(6);

	      e.exports = function (e, t) {
	        if (!r(e)) return e;
	        var n, o;
	        if (t && "function" == typeof (n = e.toString) && !r(o = n.call(e))) return o;
	        if ("function" == typeof (n = e.valueOf) && !r(o = n.call(e))) return o;
	        if (!t && "function" == typeof (n = e.toString) && !r(o = n.call(e))) return o;
	        throw TypeError("Can't convert object to primitive value");
	      };
	    }, function (e, t, n) {
	      var r = n(80),
	          o = n(59),
	          i = r("keys");

	      e.exports = function (e) {
	        return i[e] || (i[e] = o(e));
	      };
	    }, function (e, t) {
	      var n = 0,
	          r = Math.random();

	      e.exports = function (e) {
	        return "Symbol(" + String(void 0 === e ? "" : e) + ")_" + (++n + r).toString(36);
	      };
	    }, function (e, t, n) {
	      var r = n(105),
	          o = n(82).concat("length", "prototype");

	      t.f = Object.getOwnPropertyNames || function (e) {
	        return r(e, o);
	      };
	    }, function (e, t, n) {
	      var r = n(4),
	          o = /#|\.prototype\./,
	          i = function i(e, t) {
	        var n = a[s(e)];
	        return n == c || n != u && ("function" == typeof t ? r(t) : !!t);
	      },
	          s = i.normalize = function (e) {
	        return String(e).replace(o, ".").toLowerCase();
	      },
	          a = i.data = {},
	          u = i.NATIVE = "N",
	          c = i.POLYFILL = "P";

	      e.exports = i;
	    }, function (e, t, n) {
	      var r = n(19);
	      e.exports = r("navigator", "userAgent") || "";
	    }, function (e, t, n) {
	      var r = n(16);

	      e.exports = function (e, t, n) {
	        for (var o in t) r(e, o, t[o], n);

	        return e;
	      };
	    }, function (e, t, n) {
	      var r = n(46),
	          o = n(6),
	          i = n(12),
	          s = n(11).f,
	          a = n(59),
	          u = n(188),
	          c = a("meta"),
	          l = 0,
	          f = Object.isExtensible || function () {
	        return !0;
	      },
	          p = function p(e) {
	        s(e, c, {
	          value: {
	            objectID: "O" + ++l,
	            weakData: {}
	          }
	        });
	      },
	          h = e.exports = {
	        REQUIRED: !1,
	        fastKey: function fastKey(e, t) {
	          if (!o(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;

	          if (!i(e, c)) {
	            if (!f(e)) return "F";
	            if (!t) return "E";
	            p(e);
	          }

	          return e[c].objectID;
	        },
	        getWeakData: function getWeakData(e, t) {
	          if (!i(e, c)) {
	            if (!f(e)) return !0;
	            if (!t) return !1;
	            p(e);
	          }

	          return e[c].weakData;
	        },
	        onFreeze: function onFreeze(e) {
	          return u && h.REQUIRED && f(e) && !i(e, c) && p(e), e;
	        }
	      };

	      r[c] = !0;
	    }, function (e, t) {
	      e.exports = function (e, t, n) {
	        if (!(e instanceof t)) throw TypeError("Incorrect " + (n ? n + " " : "") + "invocation");
	        return e;
	      };
	    }, function (e, t, n) {

	      var r,
	          o,
	          i = n(95),
	          s = n(142),
	          a = RegExp.prototype.exec,
	          u = String.prototype.replace,
	          c = a,
	          l = (r = /a/, o = /b*/g, a.call(r, "a"), a.call(o, "a"), 0 !== r.lastIndex || 0 !== o.lastIndex),
	          f = s.UNSUPPORTED_Y || s.BROKEN_CARET,
	          p = void 0 !== /()??/.exec("")[1];
	      (l || p || f) && (c = function c(e) {
	        var t,
	            n,
	            r,
	            o,
	            s = this,
	            c = f && s.sticky,
	            h = i.call(s),
	            d = s.source,
	            v = 0,
	            y = e;
	        return c && (-1 === (h = h.replace("y", "")).indexOf("g") && (h += "g"), y = String(e).slice(s.lastIndex), s.lastIndex > 0 && (!s.multiline || s.multiline && "\n" !== e[s.lastIndex - 1]) && (d = "(?: " + d + ")", y = " " + y, v++), n = new RegExp("^(?:" + d + ")", h)), p && (n = new RegExp("^" + d + "$(?!\\s)", h)), l && (t = s.lastIndex), r = a.call(c ? n : s, y), c ? r ? (r.input = r.input.slice(v), r[0] = r[0].slice(v), r.index = s.lastIndex, s.lastIndex += r[0].length) : s.lastIndex = 0 : l && r && (s.lastIndex = s.global ? r.index + r[0].length : t), p && r && r.length > 1 && u.call(r[0], n, function () {
	          for (o = 1; o < arguments.length - 2; o++) void 0 === arguments[o] && (r[o] = void 0);
	        }), r;
	      }), e.exports = c;
	    }, function (e, t, n) {
	      var r = n(4),
	          o = n(5),
	          i = n(48),
	          s = o("species");

	      e.exports = function (e) {
	        return i >= 51 || !r(function () {
	          var t = [];
	          return (t.constructor = {})[s] = function () {
	            return {
	              foo: 1
	            };
	          }, 1 !== t[e](Boolean).foo;
	        });
	      };
	    }, function (e, t, n) {

	      var r = n(4);

	      e.exports = function (e, t) {
	        var n = [][e];
	        return !!n && r(function () {
	          n.call(null, t || function () {
	            throw 1;
	          }, 1);
	        });
	      };
	    }, function (e, t, n) {

	      var r = n(1),
	          o = n(4),
	          i = n(34),
	          s = n(6),
	          a = n(24),
	          u = n(17),
	          c = n(55),
	          l = n(90),
	          f = n(67),
	          p = n(5),
	          h = n(48),
	          d = p("isConcatSpreadable"),
	          v = h >= 51 || !o(function () {
	        var e = [];
	        return e[d] = !1, e.concat()[0] !== e;
	      }),
	          y = f("concat"),
	          m = function m(e) {
	        if (!s(e)) return !1;
	        var t = e[d];
	        return void 0 !== t ? !!t : i(e);
	      };

	      r({
	        target: "Array",
	        proto: !0,
	        forced: !v || !y
	      }, {
	        concat: function concat(e) {
	          var t,
	              n,
	              r,
	              o,
	              i,
	              s = a(this),
	              f = l(s, 0),
	              p = 0;

	          for (t = -1, r = arguments.length; t < r; t++) if (m(i = -1 === t ? s : arguments[t])) {
	            if (p + (o = u(i.length)) > 9007199254740991) throw TypeError("Maximum allowed index exceeded");

	            for (n = 0; n < o; n++, p++) n in i && c(f, p, i[n]);
	          } else {
	            if (p >= 9007199254740991) throw TypeError("Maximum allowed index exceeded");
	            c(f, p++, i);
	          }

	          return f.length = p, f;
	        }
	      });
	    }, function (e, t, n) {

	      n.d(t, "a", function () {
	        return o;
	      }), n.d(t, "b", function () {
	        return i;
	      });
	      n(123), n(124), n(125), n(126), n(127), n(128), n(129), n(130), n(131), n(132), n(133), n(134), n(135), n(136), n(20), n(27), n(25), n(28);
	      var r = new Map([["LAUNCH_BACKEND_FRONTEND_INTEGRATION", !1]]);

	      function o(e) {
	        if (!r.has(e)) throw new Error("Feature flag named ".concat(e, " does not exist."));
	        return r.get(e);
	      }

	      function i(e, t) {
	        if (!r.has(e)) throw new Error("Feature flag named ".concat(e, " does not exist."));
	        r.set(e, t);
	      }
	    }, function (e, t, n) {

	      n.d(t, "a", function () {
	        return s;
	      }), n.d(t, "b", function () {
	        return a;
	      });
	      n(96), n(41), n(37), n(38), n(20), n(39), n(27), n(25), n(28), n(40), n(30), n(36);
	      var r = n(8);

	      function o(e, t) {
	        return function (e) {
	          if (Array.isArray(e)) return e;
	        }(e) || function (e, t) {
	          if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
	          var n = [],
	              r = !0,
	              o = !1,
	              i = void 0;

	          try {
	            for (var s, a = e[Symbol.iterator](); !(r = (s = a.next()).done) && (n.push(s.value), !t || n.length !== t); r = !0);
	          } catch (e) {
	            o = !0, i = e;
	          } finally {
	            try {
	              r || null == a.return || a.return();
	            } finally {
	              if (o) throw i;
	            }
	          }

	          return n;
	        }(e, t) || function (e, t) {
	          if (!e) return;
	          if ("string" == typeof e) return i(e, t);
	          var n = Object.prototype.toString.call(e).slice(8, -1);
	          "Object" === n && e.constructor && (n = e.constructor.name);
	          if ("Map" === n || "Set" === n) return Array.from(e);
	          if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return i(e, t);
	        }(e, t) || function () {
	          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	        }();
	      }

	      function i(e, t) {
	        (null == t || t > e.length) && (t = e.length);

	        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];

	        return r;
	      }

	      function s(e) {
	        e._codesee_orig_useState || (e._codesee_orig_useState = e.useState, e.useState = function (t, n) {
	          var i = Object(r.a)().CodeSee,
	              s = o(e._codesee_orig_useState(t), 2),
	              a = s[0],
	              u = s[1];
	          return [a, function (e) {
	            var t = i.getSideEffectUID();
	            return function (e, t, n, r, o) {
	              return e.stateChange(t, o, void 0, r, "React"), n(function (n) {
	                var i = o(n);
	                return e.stateChangeFinish(t, i, n, r, "React", !1), i;
	              });
	            }(i, t, u, n, "function" == typeof e ? e : function () {
	              return e;
	            });
	          }];
	        }), e._codesee_orig_setState || (e._codesee_orig_setState = e.Component.prototype.setState, e.Component.prototype.setState = function (t, n) {
	          var o = Object(r.a)().CodeSee,
	              i = o.getSideEffectUID();
	          !function (e, t, n, r, o) {
	            e.stateChange(t, r, void 0, void 0, "React"), n(function (n) {
	              var o = r(n);
	              return e.stateChangeFinish(t, o, n, void 0, "React", !0), o;
	            }, o);
	          }(o, i, e._codesee_orig_setState.bind(this), "function" == typeof t ? t : function () {
	            return t;
	          }, n);
	        });
	      }

	      function a() {
	        var e;

	        try {
	          e = n(151);
	        } catch (e) {
	          return;
	        }

	        e._codesee_orig_useState && (e.useState = e._codesee_orig_useState), e._codesee_orig_setState && (e.Component.prototype.setState = e._codesee_orig_setState);
	      }
	    }, function (e, t, n) {

	      n.d(t, "b", function () {
	        return i;
	      }), n.d(t, "a", function () {
	        return a;
	      });
	      n(20), n(30), n(69);
	      var r = n(22),
	          o = Object.prototype.toString,
	          i = {};

	      function s(e) {
	        try {
	          return r.write(e, {
	            ignore: "opaque"
	          });
	        } catch (t) {
	          return CodeSee._impl.warn("Unable to track this value: ".concat(e)), {
	            $: "[CodeSee Error]",
	            f: [["message", "Error while serializing this value"]]
	          };
	        }
	      }

	      function a(e) {
	        var t;

	        switch (o.call(e)) {
	          case "[object Null]":
	          case "[object Undefined]":
	          case "[object Number]":
	          case "[object Boolean]":
	            t = e;
	            break;

	          case "[object String]":
	            t = e.length >= 1e4 ? e.substr(0, 9999) + "…" : e;
	            break;

	          case "[object Object]":
	            t = s(e);
	            break;

	          default:
	            t = s({
	              "¢$": e
	            });
	        }

	        return t;
	      }
	    }, function (e, t, n) {

	      n.d(t, "a", function () {
	        return o;
	      });
	      n(42);

	      function r(e, t) {
	        for (var n = 0; n < t.length; n++) {
	          var r = t[n];
	          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
	        }
	      }

	      var o = function () {
	        function e() {
	          !function (e, t) {
	            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
	          }(this, e), this.uid = 0;
	        }

	        var t, n;
	        return t = e, (n = [{
	          key: "getUID",
	          value: function value() {
	            return this.uid = this.uid + 1, this.uid;
	          }
	        }]) && r(t.prototype, n), e;
	      }();
	    }, function (e, t, n) {

	      n.d(t, "b", function () {
	        return r;
	      }), n.d(t, "a", function () {
	        return o;
	      });
	      var r = 5e6,
	          o = 5e8;
	    }, function (e, t, n) {

	      Object.defineProperty(t, "__esModule", {
	        value: !0
	      }), t.PresentBase = void 0;

	      class r {
	        constructor(e) {
	          this.pro = e;
	        }

	        constructorName() {}

	        typeName() {
	          if (void 0 === this.pro) return "Unknown Prototype";
	          if (null === this.pro) return "null";
	          if (this.pro.name) return this.pro.name;

	          if (this.pro instanceof r) {
	            const e = this.constructorName();
	            if (e) return e;
	          }

	          return "Unknown Prototype";
	        }

	      }

	      t.PresentBase = r, r.constStr = "¢$constructor";
	    }, function (e, t, n) {
	      var r = n(3),
	          o = n(6),
	          i = r.document,
	          s = o(i) && o(i.createElement);

	      e.exports = function (e) {
	        return s ? i.createElement(e) : {};
	      };
	    }, function (e, t, n) {
	      var r = n(3),
	          o = n(18);

	      e.exports = function (e, t) {
	        try {
	          o(r, e, t);
	        } catch (n) {
	          r[e] = t;
	        }

	        return t;
	      };
	    }, function (e, t, n) {
	      var r = n(79),
	          o = Function.toString;
	      "function" != typeof r.inspectSource && (r.inspectSource = function (e) {
	        return o.call(e);
	      }), e.exports = r.inspectSource;
	    }, function (e, t, n) {
	      var r = n(3),
	          o = n(77),
	          i = r["__core-js_shared__"] || o("__core-js_shared__", {});
	      e.exports = i;
	    }, function (e, t, n) {
	      var r = n(7),
	          o = n(79);
	      (e.exports = function (e, t) {
	        return o[e] || (o[e] = void 0 !== t ? t : {});
	      })("versions", []).push({
	        version: "3.9.1",
	        mode: r ? "pure" : "global",
	        copyright: "© 2021 Denis Pushkarev (zloirock.ru)"
	      });
	    }, function (e, t, n) {
	      var r = n(15),
	          o = n(17),
	          i = n(106),
	          s = function s(e) {
	        return function (t, n, s) {
	          var a,
	              u = r(t),
	              c = o(u.length),
	              l = i(s, c);

	          if (e && n != n) {
	            for (; c > l;) if ((a = u[l++]) != a) return !0;
	          } else for (; c > l; l++) if ((e || l in u) && u[l] === n) return e || l || 0;

	          return !e && -1;
	        };
	      };

	      e.exports = {
	        includes: s(!0),
	        indexOf: s(!1)
	      };
	    }, function (e, t) {
	      e.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
	    }, function (e, t) {
	      t.f = Object.getOwnPropertySymbols;
	    }, function (e, t, n) {
	      var r = n(33),
	          o = n(48),
	          i = n(4);
	      e.exports = !!Object.getOwnPropertySymbols && !i(function () {
	        return !Symbol.sham && (r ? 38 === o : o > 37 && o < 41);
	      });
	    }, function (e, t, n) {
	      var r = n(6),
	          o = n(32),
	          i = n(5)("match");

	      e.exports = function (e) {
	        var t;
	        return r(e) && (void 0 !== (t = e[i]) ? !!t : "RegExp" == o(e));
	      };
	    }, function (e, t, n) {
	      var r = n(114),
	          o = n(51),
	          i = n(5)("iterator");

	      e.exports = function (e) {
	        if (null != e) return e[i] || e["@@iterator"] || o[r(e)];
	      };
	    }, function (e, t, n) {
	      var r = {};
	      r[n(5)("toStringTag")] = "z", e.exports = "[object z]" === String(r);
	    }, function (e, t, n) {
	      var r = n(5)("iterator"),
	          o = !1;

	      try {
	        var i = 0,
	            s = {
	          next: function next() {
	            return {
	              done: !!i++
	            };
	          },
	          return: function _return() {
	            o = !0;
	          }
	        };
	        s[r] = function () {
	          return this;
	        }, Array.from(s, function () {
	          throw 2;
	        });
	      } catch (e) {}

	      e.exports = function (e, t) {
	        if (!t && !o) return !1;
	        var n = !1;

	        try {
	          var i = {};
	          i[r] = function () {
	            return {
	              next: function next() {
	                return {
	                  done: n = !0
	                };
	              }
	            };
	          }, e(i);
	        } catch (e) {}

	        return n;
	      };
	    }, function (e, t, n) {
	      var r = n(2),
	          o = n(189);
	      e.exports = Object.setPrototypeOf || ("__proto__" in {} ? function () {
	        var e,
	            t = !1,
	            n = {};

	        try {
	          (e = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(n, []), t = n instanceof Array;
	        } catch (e) {}

	        return function (n, i) {
	          return r(n), o(i), t ? e.call(n, i) : n.__proto__ = i, n;
	        };
	      }() : void 0);
	    }, function (e, t, n) {
	      var r = n(6),
	          o = n(34),
	          i = n(5)("species");

	      e.exports = function (e, t) {
	        var n;
	        return o(e) && ("function" != typeof (n = e.constructor) || n !== Array && !o(n.prototype) ? r(n) && null === (n = n[i]) && (n = void 0) : n = void 0), new (void 0 === n ? Array : n)(0 === t ? 0 : t);
	      };
	    }, function (e, t, n) {

	      var r = n(1),
	          o = n(192),
	          i = n(121),
	          s = n(89),
	          a = n(52),
	          u = n(18),
	          c = n(16),
	          l = n(5),
	          f = n(7),
	          p = n(51),
	          h = n(120),
	          d = h.IteratorPrototype,
	          v = h.BUGGY_SAFARI_ITERATORS,
	          y = l("iterator"),
	          m = function m() {
	        return this;
	      };

	      e.exports = function (e, t, n, l, h, g, b) {
	        o(n, t, l);

	        var S,
	            w,
	            E,
	            _ = function _(e) {
	          if (e === h && x) return x;
	          if (!v && e in C) return C[e];

	          switch (e) {
	            case "keys":
	            case "values":
	            case "entries":
	              return function () {
	                return new n(this, e);
	              };
	          }

	          return function () {
	            return new n(this);
	          };
	        },
	            O = t + " Iterator",
	            A = !1,
	            C = e.prototype,
	            T = C[y] || C["@@iterator"] || h && C[h],
	            x = !v && T || _(h),
	            I = "Array" == t && C.entries || T;

	        if (I && (S = i(I.call(new e())), d !== Object.prototype && S.next && (f || i(S) === d || (s ? s(S, d) : "function" != typeof S[y] && u(S, y, m)), a(S, O, !0, !0), f && (p[O] = m))), "values" == h && T && "values" !== T.name && (A = !0, x = function x() {
	          return T.call(this);
	        }), f && !b || C[y] === x || u(C, y, x), p[t] = x, h) if (w = {
	          values: _("values"),
	          keys: g ? x : _("keys"),
	          entries: _("entries")
	        }, b) for (E in w) (v || A || !(E in C)) && c(C, E, w[E]);else r({
	          target: t,
	          proto: !0,
	          forced: v || A
	        }, w);
	        return w;
	      };
	    }, function (e, t, n) {

	      var r = n(19),
	          o = n(11),
	          i = n(5),
	          s = n(9),
	          a = i("species");

	      e.exports = function (e) {
	        var t = r(e),
	            n = o.f;
	        s && t && !t[a] && n(t, a, {
	          configurable: !0,
	          get: function get() {
	            return this;
	          }
	        });
	      };
	    }, function (e, t, n) {

	      var r,
	          o,
	          i,
	          s,
	          a = n(1),
	          u = n(7),
	          c = n(3),
	          l = n(19),
	          f = n(197),
	          p = n(16),
	          h = n(63),
	          d = n(52),
	          v = n(92),
	          y = n(6),
	          m = n(13),
	          g = n(65),
	          b = n(78),
	          S = n(10),
	          w = n(88),
	          E = n(54),
	          _ = n(137).set,
	          O = n(139),
	          A = n(199),
	          C = n(200),
	          T = n(140),
	          x = n(201),
	          I = n(23),
	          k = n(61),
	          j = n(5),
	          R = n(33),
	          P = n(48),
	          D = j("species"),
	          N = "Promise",
	          M = I.get,
	          L = I.set,
	          z = I.getterFor(N),
	          _B = f,
	          F = c.TypeError,
	          V = c.document,
	          U = c.process,
	          H = l("fetch"),
	          q = T.f,
	          G = q,
	          Y = !!(V && V.createEvent && c.dispatchEvent),
	          J = "function" == typeof PromiseRejectionEvent,
	          Q = k(N, function () {
	        if (!(b(_B) !== String(_B))) {
	          if (66 === P) return !0;
	          if (!R && !J) return !0;
	        }

	        if (u && !_B.prototype.finally) return !0;
	        if (P >= 51 && /native code/.test(_B)) return !1;

	        var e = _B.resolve(1),
	            t = function t(e) {
	          e(function () {}, function () {});
	        };

	        return (e.constructor = {})[D] = t, !(e.then(function () {}) instanceof t);
	      }),
	          W = Q || !w(function (e) {
	        _B.all(e).catch(function () {});
	      }),
	          K = function K(e) {
	        var t;
	        return !(!y(e) || "function" != typeof (t = e.then)) && t;
	      },
	          X = function X(e, t) {
	        if (!e.notified) {
	          e.notified = !0;
	          var n = e.reactions;
	          O(function () {
	            for (var r = e.value, o = 1 == e.state, i = 0; n.length > i;) {
	              var s,
	                  a,
	                  u,
	                  c = n[i++],
	                  l = o ? c.ok : c.fail,
	                  f = c.resolve,
	                  p = c.reject,
	                  h = c.domain;

	              try {
	                l ? (o || (2 === e.rejection && te(e), e.rejection = 1), !0 === l ? s = r : (h && h.enter(), s = l(r), h && (h.exit(), u = !0)), s === c.promise ? p(F("Promise-chain cycle")) : (a = K(s)) ? a.call(s, f, p) : f(s)) : p(r);
	              } catch (e) {
	                h && !u && h.exit(), p(e);
	              }
	            }

	            e.reactions = [], e.notified = !1, t && !e.rejection && $(e);
	          });
	        }
	      },
	          Z = function Z(e, t, n) {
	        var r, o;
	        Y ? ((r = V.createEvent("Event")).promise = t, r.reason = n, r.initEvent(e, !1, !0), c.dispatchEvent(r)) : r = {
	          promise: t,
	          reason: n
	        }, !J && (o = c["on" + e]) ? o(r) : "unhandledrejection" === e && C("Unhandled promise rejection", n);
	      },
	          $ = function $(e) {
	        _.call(c, function () {
	          var t,
	              n = e.facade,
	              r = e.value;
	          if (ee(e) && (t = x(function () {
	            R ? U.emit("unhandledRejection", r, n) : Z("unhandledrejection", n, r);
	          }), e.rejection = R || ee(e) ? 2 : 1, t.error)) throw t.value;
	        });
	      },
	          ee = function ee(e) {
	        return 1 !== e.rejection && !e.parent;
	      },
	          te = function te(e) {
	        _.call(c, function () {
	          var t = e.facade;
	          R ? U.emit("rejectionHandled", t) : Z("rejectionhandled", t, e.value);
	        });
	      },
	          ne = function ne(e, t, n) {
	        return function (r) {
	          e(t, r, n);
	        };
	      },
	          re = function re(e, t, n) {
	        e.done || (e.done = !0, n && (e = n), e.value = t, e.state = 2, X(e, !0));
	      },
	          oe = function oe(e, t, n) {
	        if (!e.done) {
	          e.done = !0, n && (e = n);

	          try {
	            if (e.facade === t) throw F("Promise can't be resolved itself");
	            var r = K(t);
	            r ? O(function () {
	              var n = {
	                done: !1
	              };

	              try {
	                r.call(t, ne(oe, n, e), ne(re, n, e));
	              } catch (t) {
	                re(n, t, e);
	              }
	            }) : (e.value = t, e.state = 1, X(e, !1));
	          } catch (t) {
	            re({
	              done: !1
	            }, t, e);
	          }
	        }
	      };

	      Q && (_B = function B(e) {
	        g(this, _B, N), m(e), r.call(this);
	        var t = M(this);

	        try {
	          e(ne(oe, t), ne(re, t));
	        } catch (e) {
	          re(t, e);
	        }
	      }, (r = function r(e) {
	        L(this, {
	          type: N,
	          done: !1,
	          notified: !1,
	          parent: !1,
	          reactions: [],
	          rejection: !1,
	          state: 0,
	          value: void 0
	        });
	      }).prototype = h(_B.prototype, {
	        then: function then(e, t) {
	          var n = z(this),
	              r = q(E(this, _B));
	          return r.ok = "function" != typeof e || e, r.fail = "function" == typeof t && t, r.domain = R ? U.domain : void 0, n.parent = !0, n.reactions.push(r), 0 != n.state && X(n, !1), r.promise;
	        },
	        catch: function _catch(e) {
	          return this.then(void 0, e);
	        }
	      }), o = function o() {
	        var e = new r(),
	            t = M(e);
	        this.promise = e, this.resolve = ne(oe, t), this.reject = ne(re, t);
	      }, T.f = q = function q(e) {
	        return e === _B || e === i ? new o(e) : G(e);
	      }, u || "function" != typeof f || (s = f.prototype.then, p(f.prototype, "then", function (e, t) {
	        var n = this;
	        return new _B(function (e, t) {
	          s.call(n, e, t);
	        }).then(e, t);
	      }, {
	        unsafe: !0
	      }), "function" == typeof H && a({
	        global: !0,
	        enumerable: !0,
	        forced: !0
	      }, {
	        fetch: function fetch(e) {
	          return A(_B, H.apply(c, arguments));
	        }
	      }))), a({
	        global: !0,
	        wrap: !0,
	        forced: Q
	      }, {
	        Promise: _B
	      }), d(_B, N, !1, !0), v(N), i = l(N), a({
	        target: N,
	        stat: !0,
	        forced: Q
	      }, {
	        reject: function reject(e) {
	          var t = q(this);
	          return t.reject.call(void 0, e), t.promise;
	        }
	      }), a({
	        target: N,
	        stat: !0,
	        forced: u || Q
	      }, {
	        resolve: function resolve(e) {
	          return A(u && this === i ? _B : this, e);
	        }
	      }), a({
	        target: N,
	        stat: !0,
	        forced: W
	      }, {
	        all: function all(e) {
	          var t = this,
	              n = q(t),
	              r = n.resolve,
	              o = n.reject,
	              i = x(function () {
	            var n = m(t.resolve),
	                i = [],
	                s = 0,
	                a = 1;
	            S(e, function (e) {
	              var u = s++,
	                  c = !1;
	              i.push(void 0), a++, n.call(t, e).then(function (e) {
	                c || (c = !0, i[u] = e, --a || r(i));
	              }, o);
	            }), --a || r(i);
	          });
	          return i.error && o(i.value), n.promise;
	        },
	        race: function race(e) {
	          var t = this,
	              n = q(t),
	              r = n.reject,
	              o = x(function () {
	            var o = m(t.resolve);
	            S(e, function (e) {
	              o.call(t, e).then(n.resolve, r);
	            });
	          });
	          return o.error && r(o.value), n.promise;
	        }
	      });
	    }, function (e, t, n) {

	      var r = n(141),
	          o = n(2),
	          i = n(17),
	          s = n(26),
	          a = n(143),
	          u = n(144);
	      r("match", 1, function (e, t, n) {
	        return [function (t) {
	          var n = s(this),
	              r = null == t ? void 0 : t[e];
	          return void 0 !== r ? r.call(t, n) : new RegExp(t)[e](String(n));
	        }, function (e) {
	          var r = n(t, e, this);
	          if (r.done) return r.value;
	          var s = o(e),
	              c = String(this);
	          if (!s.global) return u(s, c);
	          var l = s.unicode;
	          s.lastIndex = 0;

	          for (var f, p = [], h = 0; null !== (f = u(s, c));) {
	            var d = String(f[0]);
	            p[h] = d, "" === d && (s.lastIndex = a(c, i(s.lastIndex), l)), h++;
	          }

	          return 0 === h ? null : p;
	        }];
	      });
	    }, function (e, t, n) {

	      var r = n(2);

	      e.exports = function () {
	        var e = r(this),
	            t = "";
	        return e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.sticky && (t += "y"), t;
	      };
	    }, function (e, t, n) {
	      n(1)({
	        target: "Function",
	        proto: !0
	      }, {
	        bind: n(148)
	      });
	    }, function (e, t, n) {

	      var r = n(1),
	          o = n(150);
	      r({
	        target: "Array",
	        proto: !0,
	        forced: [].forEach != o
	      }, {
	        forEach: o
	      });
	    }, function (e, t) {
	      var n,
	          r,
	          o = e.exports = {};

	      function i() {
	        throw new Error("setTimeout has not been defined");
	      }

	      function s() {
	        throw new Error("clearTimeout has not been defined");
	      }

	      function a(e) {
	        if (n === setTimeout) return setTimeout(e, 0);
	        if ((n === i || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);

	        try {
	          return n(e, 0);
	        } catch (t) {
	          try {
	            return n.call(null, e, 0);
	          } catch (t) {
	            return n.call(this, e, 0);
	          }
	        }
	      }

	      !function () {
	        try {
	          n = "function" == typeof setTimeout ? setTimeout : i;
	        } catch (e) {
	          n = i;
	        }

	        try {
	          r = "function" == typeof clearTimeout ? clearTimeout : s;
	        } catch (e) {
	          r = s;
	        }
	      }();
	      var u,
	          c = [],
	          l = !1,
	          f = -1;

	      function p() {
	        l && u && (l = !1, u.length ? c = u.concat(c) : f = -1, c.length && h());
	      }

	      function h() {
	        if (!l) {
	          var e = a(p);
	          l = !0;

	          for (var t = c.length; t;) {
	            for (u = c, c = []; ++f < t;) u && u[f].run();

	            f = -1, t = c.length;
	          }

	          u = null, l = !1, function (e) {
	            if (r === clearTimeout) return clearTimeout(e);
	            if ((r === s || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);

	            try {
	              r(e);
	            } catch (t) {
	              try {
	                return r.call(null, e);
	              } catch (t) {
	                return r.call(this, e);
	              }
	            }
	          }(e);
	        }
	      }

	      function d(e, t) {
	        this.fun = e, this.array = t;
	      }

	      function v() {}

	      o.nextTick = function (e) {
	        var t = new Array(arguments.length - 1);
	        if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
	        c.push(new d(e, t)), 1 !== c.length || l || a(h);
	      }, d.prototype.run = function () {
	        this.fun.apply(null, this.array);
	      }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = v, o.addListener = v, o.once = v, o.off = v, o.removeListener = v, o.removeAllListeners = v, o.emit = v, o.prependListener = v, o.prependOnceListener = v, o.listeners = function (e) {
	        return [];
	      }, o.binding = function (e) {
	        throw new Error("process.binding is not supported");
	      }, o.cwd = function () {
	        return "/";
	      }, o.chdir = function (e) {
	        throw new Error("process.chdir is not supported");
	      }, o.umask = function () {
	        return 0;
	      };
	    }, function (e, t, n) {

	      n.d(t, "a", function () {
	        return o;
	      });
	      n(232), n(234), n(236), n(152), n(42);

	      function r(e, t) {
	        for (var n = 0; n < t.length; n++) {
	          var r = t[n];
	          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
	        }
	      }

	      var o = function () {
	        function e(t, n, r, o) {
	          !function (e, t) {
	            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
	          }(this, e), this.postData = t, this.dataset = n, this.apiHost = o, this.writeKey = r;
	        }

	        var t, n;
	        return t = e, (n = [{
	          key: "sizeInBytes",
	          value: function value() {
	            if (this.postData.json) return this.postData.json.length;
	            if (this.postData.raw) return Object.values(this.postData.raw.details).flat().reduce(function (e, t) {
	              return e + t.length;
	            }, 0);
	            throw new Error("CodeSee Internal Error: Unrecognized event structure");
	          }
	        }, {
	          key: "toJSON",
	          value: function value() {
	            return {
	              data: this.postData
	            };
	          }
	        }, {
	          key: "toBrokenJSON",
	          value: function value() {
	            var e = [];
	            return this.postData && e.push('"data":'.concat(JSON.stringify(this.postData))), "{".concat(e.join(","), "}");
	          }
	        }]) && r(t.prototype, n), e;
	      }();
	    }, function (e, t, n) {
	      var r = n(9),
	          o = n(4),
	          i = n(76);
	      e.exports = !r && !o(function () {
	        return 7 != Object.defineProperty(i("div"), "a", {
	          get: function get() {
	            return 7;
	          }
	        }).a;
	      });
	    }, function (e, t, n) {
	      var r = n(3),
	          o = n(78),
	          i = r.WeakMap;
	      e.exports = "function" == typeof i && /native code/.test(o(i));
	    }, function (e, t, n) {
	      var r = n(12),
	          o = n(103),
	          i = n(31),
	          s = n(11);

	      e.exports = function (e, t) {
	        for (var n = o(t), a = s.f, u = i.f, c = 0; c < n.length; c++) {
	          var l = n[c];
	          r(e, l) || a(e, l, u(t, l));
	        }
	      };
	    }, function (e, t, n) {
	      var r = n(19),
	          o = n(60),
	          i = n(83),
	          s = n(2);

	      e.exports = r("Reflect", "ownKeys") || function (e) {
	        var t = o.f(s(e)),
	            n = i.f;
	        return n ? t.concat(n(e)) : t;
	      };
	    }, function (e, t, n) {
	      var r = n(3);
	      e.exports = r;
	    }, function (e, t, n) {
	      var r = n(12),
	          o = n(15),
	          i = n(81).indexOf,
	          s = n(46);

	      e.exports = function (e, t) {
	        var n,
	            a = o(e),
	            u = 0,
	            c = [];

	        for (n in a) !r(s, n) && r(a, n) && c.push(n);

	        for (; t.length > u;) r(a, n = t[u++]) && (~i(c, n) || c.push(n));

	        return c;
	      };
	    }, function (e, t, n) {
	      var r = n(47),
	          o = Math.max,
	          i = Math.min;

	      e.exports = function (e, t) {
	        var n = r(e);
	        return n < 0 ? o(n + t, 0) : i(n, t);
	      };
	    }, function (e, t, n) {
	      var r = n(5),
	          o = n(49),
	          i = n(11),
	          s = r("unscopables"),
	          a = Array.prototype;
	      null == a[s] && i.f(a, s, {
	        configurable: !0,
	        value: o(null)
	      }), e.exports = function (e) {
	        a[s][e] = !0;
	      };
	    }, function (e, t, n) {
	      var r = n(84);
	      e.exports = r && !Symbol.sham && "symbol" == typeof Symbol.iterator;
	    }, function (e, t, n) {
	      var r = n(9),
	          o = n(11),
	          i = n(2),
	          s = n(50);
	      e.exports = r ? Object.defineProperties : function (e, t) {
	        i(e);

	        for (var n, r = s(t), a = r.length, u = 0; a > u;) o.f(e, n = r[u++], t[n]);

	        return e;
	      };
	    }, function (e, t, n) {
	      var r = n(19);
	      e.exports = r("document", "documentElement");
	    }, function (e, t, n) {

	      var r,
	          o = n(3),
	          i = n(63),
	          s = n(64),
	          a = n(112),
	          u = n(190),
	          c = n(6),
	          l = n(23).enforce,
	          f = n(101),
	          p = !o.ActiveXObject && "ActiveXObject" in o,
	          h = Object.isExtensible,
	          d = function d(e) {
	        return function () {
	          return e(this, arguments.length ? arguments[0] : void 0);
	        };
	      },
	          v = e.exports = a("WeakMap", d, u);

	      if (f && p) {
	        r = u.getConstructor(d, "WeakMap", !0), s.REQUIRED = !0;
	        var y = v.prototype,
	            m = y.delete,
	            g = y.has,
	            b = y.get,
	            S = y.set;
	        i(y, {
	          delete: function _delete(e) {
	            if (c(e) && !h(e)) {
	              var t = l(this);
	              return t.frozen || (t.frozen = new r()), m.call(this, e) || t.frozen.delete(e);
	            }

	            return m.call(this, e);
	          },
	          has: function has(e) {
	            if (c(e) && !h(e)) {
	              var t = l(this);
	              return t.frozen || (t.frozen = new r()), g.call(this, e) || t.frozen.has(e);
	            }

	            return g.call(this, e);
	          },
	          get: function get(e) {
	            if (c(e) && !h(e)) {
	              var t = l(this);
	              return t.frozen || (t.frozen = new r()), g.call(this, e) ? b.call(this, e) : t.frozen.get(e);
	            }

	            return b.call(this, e);
	          },
	          set: function set(e, t) {
	            if (c(e) && !h(e)) {
	              var n = l(this);
	              n.frozen || (n.frozen = new r()), g.call(this, e) ? S.call(this, e, t) : n.frozen.set(e, t);
	            } else S.call(this, e, t);

	            return this;
	          }
	        });
	      }
	    }, function (e, t, n) {

	      var r = n(1),
	          o = n(3),
	          i = n(61),
	          s = n(16),
	          a = n(64),
	          u = n(10),
	          c = n(65),
	          l = n(6),
	          f = n(4),
	          p = n(88),
	          h = n(52),
	          d = n(116);

	      e.exports = function (e, t, n) {
	        var v = -1 !== e.indexOf("Map"),
	            y = -1 !== e.indexOf("Weak"),
	            m = v ? "set" : "add",
	            g = o[e],
	            b = g && g.prototype,
	            S = g,
	            w = {},
	            E = function E(e) {
	          var t = b[e];
	          s(b, e, "add" == e ? function (e) {
	            return t.call(this, 0 === e ? 0 : e), this;
	          } : "delete" == e ? function (e) {
	            return !(y && !l(e)) && t.call(this, 0 === e ? 0 : e);
	          } : "get" == e ? function (e) {
	            return y && !l(e) ? void 0 : t.call(this, 0 === e ? 0 : e);
	          } : "has" == e ? function (e) {
	            return !(y && !l(e)) && t.call(this, 0 === e ? 0 : e);
	          } : function (e, n) {
	            return t.call(this, 0 === e ? 0 : e, n), this;
	          });
	        };

	        if (i(e, "function" != typeof g || !(y || b.forEach && !f(function () {
	          new g().entries().next();
	        })))) S = n.getConstructor(t, e, v, m), a.REQUIRED = !0;else if (i(e, !0)) {
	          var _ = new S(),
	              O = _[m](y ? {} : -0, 1) != _,
	              A = f(function () {
	            _.has(1);
	          }),
	              C = p(function (e) {
	            new g(e);
	          }),
	              T = !y && f(function () {
	            for (var e = new g(), t = 5; t--;) e[m](t, t);

	            return !e.has(-0);
	          });

	          C || ((S = t(function (t, n) {
	            c(t, S, e);
	            var r = d(new g(), t, S);
	            return null != n && u(n, r[m], {
	              that: r,
	              AS_ENTRIES: v
	            }), r;
	          })).prototype = b, b.constructor = S), (A || T) && (E("delete"), E("has"), v && E("get")), (T || O) && E(m), y && b.clear && delete b.clear;
	        }
	        return w[e] = S, r({
	          global: !0,
	          forced: S != g
	        }, w), h(S, e), y || n.setStrong(S, e, v), S;
	      };
	    }, function (e, t, n) {
	      var r = n(5),
	          o = n(51),
	          i = r("iterator"),
	          s = Array.prototype;

	      e.exports = function (e) {
	        return void 0 !== e && (o.Array === e || s[i] === e);
	      };
	    }, function (e, t, n) {
	      var r = n(87),
	          o = n(32),
	          i = n(5)("toStringTag"),
	          s = "Arguments" == o(function () {
	        return arguments;
	      }());
	      e.exports = r ? o : function (e) {
	        var t, n, r;
	        return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (n = function (e, t) {
	          try {
	            return e[t];
	          } catch (e) {}
	        }(t = Object(e), i)) ? n : s ? o(t) : "Object" == (r = o(t)) && "function" == typeof t.callee ? "Arguments" : r;
	      };
	    }, function (e, t, n) {
	      var r = n(2);

	      e.exports = function (e) {
	        var t = e.return;
	        if (void 0 !== t) return r(t.call(e)).value;
	      };
	    }, function (e, t, n) {
	      var r = n(6),
	          o = n(89);

	      e.exports = function (e, t, n) {
	        var i, s;
	        return o && "function" == typeof (i = t.constructor) && i !== n && r(s = i.prototype) && s !== n.prototype && o(e, s), e;
	      };
	    }, function (e, t, n) {

	      var r = n(1),
	          o = n(7),
	          i = n(118);
	      r({
	        target: "WeakMap",
	        proto: !0,
	        real: !0,
	        forced: o
	      }, {
	        deleteAll: function deleteAll() {
	          return i.apply(this, arguments);
	        }
	      });
	    }, function (e, t, n) {

	      var r = n(2),
	          o = n(13);

	      e.exports = function () {
	        for (var e, t = r(this), n = o(t.delete), i = !0, s = 0, a = arguments.length; s < a; s++) e = n.call(t, arguments[s]), i = i && e;

	        return !!i;
	      };
	    }, function (e, t, n) {
	      var r = n(47),
	          o = n(26),
	          i = function i(e) {
	        return function (t, n) {
	          var i,
	              s,
	              a = String(o(t)),
	              u = r(n),
	              c = a.length;
	          return u < 0 || u >= c ? e ? "" : void 0 : (i = a.charCodeAt(u)) < 55296 || i > 56319 || u + 1 === c || (s = a.charCodeAt(u + 1)) < 56320 || s > 57343 ? e ? a.charAt(u) : i : e ? a.slice(u, u + 2) : s - 56320 + (i - 55296 << 10) + 65536;
	        };
	      };

	      e.exports = {
	        codeAt: i(!1),
	        charAt: i(!0)
	      };
	    }, function (e, t, n) {

	      var r,
	          o,
	          i,
	          s = n(4),
	          a = n(121),
	          u = n(18),
	          c = n(12),
	          l = n(5),
	          f = n(7),
	          p = l("iterator"),
	          h = !1;
	      [].keys && ("next" in (i = [].keys()) ? (o = a(a(i))) !== Object.prototype && (r = o) : h = !0);
	      var d = null == r || s(function () {
	        var e = {};
	        return r[p].call(e) !== e;
	      });
	      d && (r = {}), f && !d || c(r, p) || u(r, p, function () {
	        return this;
	      }), e.exports = {
	        IteratorPrototype: r,
	        BUGGY_SAFARI_ITERATORS: h
	      };
	    }, function (e, t, n) {
	      var r = n(12),
	          o = n(24),
	          i = n(58),
	          s = n(193),
	          a = i("IE_PROTO"),
	          u = Object.prototype;
	      e.exports = s ? Object.getPrototypeOf : function (e) {
	        return e = o(e), r(e, a) ? e[a] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? u : null;
	      };
	    }, function (e, t) {
	      e.exports = {
	        CSSRuleList: 0,
	        CSSStyleDeclaration: 0,
	        CSSValueList: 0,
	        ClientRectList: 0,
	        DOMRectList: 0,
	        DOMStringList: 0,
	        DOMTokenList: 1,
	        DataTransferItemList: 0,
	        FileList: 0,
	        HTMLAllCollection: 0,
	        HTMLCollection: 0,
	        HTMLFormElement: 0,
	        HTMLSelectElement: 0,
	        MediaList: 0,
	        MimeTypeArray: 0,
	        NamedNodeMap: 0,
	        NodeList: 1,
	        PaintRequestList: 0,
	        Plugin: 0,
	        PluginArray: 0,
	        SVGLengthList: 0,
	        SVGNumberList: 0,
	        SVGPathSegList: 0,
	        SVGPointList: 0,
	        SVGStringList: 0,
	        SVGTransformList: 0,
	        SourceBufferList: 0,
	        StyleSheetList: 0,
	        TextTrackCueList: 0,
	        TextTrackList: 0,
	        TouchList: 0
	      };
	    }, function (e, t, n) {

	      var r = n(112),
	          o = n(194);
	      e.exports = r("Map", function (e) {
	        return function () {
	          return e(this, arguments.length ? arguments[0] : void 0);
	        };
	      }, o);
	    }, function (e, t, n) {

	      var r = n(1),
	          o = n(7),
	          i = n(118);
	      r({
	        target: "Map",
	        proto: !0,
	        real: !0,
	        forced: o
	      }, {
	        deleteAll: function deleteAll() {
	          return i.apply(this, arguments);
	        }
	      });
	    }, function (e, t, n) {

	      var r = n(1),
	          o = n(7),
	          i = n(2),
	          s = n(14),
	          a = n(21),
	          u = n(10);
	      r({
	        target: "Map",
	        proto: !0,
	        real: !0,
	        forced: o
	      }, {
	        every: function every(e) {
	          var t = i(this),
	              n = a(t),
	              r = s(e, arguments.length > 1 ? arguments[1] : void 0, 3);
	          return !u(n, function (e, n, o) {
	            if (!r(n, e, t)) return o();
	          }, {
	            AS_ENTRIES: !0,
	            IS_ITERATOR: !0,
	            INTERRUPTED: !0
	          }).stopped;
	        }
	      });
	    }, function (e, t, n) {

	      var r = n(1),
	          o = n(7),
	          i = n(19),
	          s = n(2),
	          a = n(13),
	          u = n(14),
	          c = n(54),
	          l = n(21),
	          f = n(10);
	      r({
	        target: "Map",
	        proto: !0,
	        real: !0,
	        forced: o
	      }, {
	        filter: function filter(e) {
	          var t = s(this),
	              n = l(t),
	              r = u(e, arguments.length > 1 ? arguments[1] : void 0, 3),
	              o = new (c(t, i("Map")))(),
	              p = a(o.set);
	          return f(n, function (e, n) {
	            r(n, e, t) && p.call(o, e, n);
	          }, {
	            AS_ENTRIES: !0,
	            IS_ITERATOR: !0
	          }), o;
	        }
	      });
	    }, function (e, t, n) {

	      var r = n(1),
	          o = n(7),
	          i = n(2),
	          s = n(14),
	          a = n(21),
	          u = n(10);
	      r({
	        target: "Map",
	        proto: !0,
	        real: !0,
	        forced: o
	      }, {
	        find: function find(e) {
	          var t = i(this),
	              n = a(t),
	              r = s(e, arguments.length > 1 ? arguments[1] : void 0, 3);
	          return u(n, function (e, n, o) {
	            if (r(n, e, t)) return o(n);
	          }, {
	            AS_ENTRIES: !0,
	            IS_ITERATOR: !0,
	            INTERRUPTED: !0
	          }).result;
	        }
	      });
	    }, function (e, t, n) {

	      var r = n(1),
	          o = n(7),
	          i = n(2),
	          s = n(14),
	          a = n(21),
	          u = n(10);
	      r({
	        target: "Map",
	        proto: !0,
	        real: !0,
	        forced: o
	      }, {
	        findKey: function findKey(e) {
	          var t = i(this),
	              n = a(t),
	              r = s(e, arguments.length > 1 ? arguments[1] : void 0, 3);
	          return u(n, function (e, n, o) {
	            if (r(n, e, t)) return o(e);
	          }, {
	            AS_ENTRIES: !0,
	            IS_ITERATOR: !0,
	            INTERRUPTED: !0
	          }).result;
	        }
	      });
	    }, function (e, t, n) {

	      var r = n(1),
	          o = n(7),
	          i = n(2),
	          s = n(21),
	          a = n(196),
	          u = n(10);
	      r({
	        target: "Map",
	        proto: !0,
	        real: !0,
	        forced: o
	      }, {
	        includes: function includes(e) {
	          return u(s(i(this)), function (t, n, r) {
	            if (a(n, e)) return r();
	          }, {
	            AS_ENTRIES: !0,
	            IS_ITERATOR: !0,
	            INTERRUPTED: !0
	          }).stopped;
	        }
	      });
	    }, function (e, t, n) {

	      var r = n(1),
	          o = n(7),
	          i = n(2),
	          s = n(21),
	          a = n(10);
	      r({
	        target: "Map",
	        proto: !0,
	        real: !0,
	        forced: o
	      }, {
	        keyOf: function keyOf(e) {
	          return a(s(i(this)), function (t, n, r) {
	            if (n === e) return r(t);
	          }, {
	            AS_ENTRIES: !0,
	            IS_ITERATOR: !0,
	            INTERRUPTED: !0
	          }).result;
	        }
	      });
	    }, function (e, t, n) {

	      var r = n(1),
	          o = n(7),
	          i = n(19),
	          s = n(2),
	          a = n(13),
	          u = n(14),
	          c = n(54),
	          l = n(21),
	          f = n(10);
	      r({
	        target: "Map",
	        proto: !0,
	        real: !0,
	        forced: o
	      }, {
	        mapKeys: function mapKeys(e) {
	          var t = s(this),
	              n = l(t),
	              r = u(e, arguments.length > 1 ? arguments[1] : void 0, 3),
	              o = new (c(t, i("Map")))(),
	              p = a(o.set);
	          return f(n, function (e, n) {
	            p.call(o, r(n, e, t), n);
	          }, {
	            AS_ENTRIES: !0,
	            IS_ITERATOR: !0
	          }), o;
	        }
	      });
	    }, function (e, t, n) {

	      var r = n(1),
	          o = n(7),
	          i = n(19),
	          s = n(2),
	          a = n(13),
	          u = n(14),
	          c = n(54),
	          l = n(21),
	          f = n(10);
	      r({
	        target: "Map",
	        proto: !0,
	        real: !0,
	        forced: o
	      }, {
	        mapValues: function mapValues(e) {
	          var t = s(this),
	              n = l(t),
	              r = u(e, arguments.length > 1 ? arguments[1] : void 0, 3),
	              o = new (c(t, i("Map")))(),
	              p = a(o.set);
	          return f(n, function (e, n) {
	            p.call(o, e, r(n, e, t));
	          }, {
	            AS_ENTRIES: !0,
	            IS_ITERATOR: !0
	          }), o;
	        }
	      });
	    }, function (e, t, n) {

	      var r = n(1),
	          o = n(7),
	          i = n(2),
	          s = n(13),
	          a = n(10);
	      r({
	        target: "Map",
	        proto: !0,
	        real: !0,
	        forced: o
	      }, {
	        merge: function merge(e) {
	          for (var t = i(this), n = s(t.set), r = 0; r < arguments.length;) a(arguments[r++], n, {
	            that: t,
	            AS_ENTRIES: !0
	          });

	          return t;
	        }
	      });
	    }, function (e, t, n) {

	      var r = n(1),
	          o = n(7),
	          i = n(2),
	          s = n(13),
	          a = n(21),
	          u = n(10);
	      r({
	        target: "Map",
	        proto: !0,
	        real: !0,
	        forced: o
	      }, {
	        reduce: function reduce(e) {
	          var t = i(this),
	              n = a(t),
	              r = arguments.length < 2,
	              o = r ? void 0 : arguments[1];
	          if (s(e), u(n, function (n, i) {
	            r ? (r = !1, o = i) : o = e(o, i, n, t);
	          }, {
	            AS_ENTRIES: !0,
	            IS_ITERATOR: !0
	          }), r) throw TypeError("Reduce of empty map with no initial value");
	          return o;
	        }
	      });
	    }, function (e, t, n) {

	      var r = n(1),
	          o = n(7),
	          i = n(2),
	          s = n(14),
	          a = n(21),
	          u = n(10);
	      r({
	        target: "Map",
	        proto: !0,
	        real: !0,
	        forced: o
	      }, {
	        some: function some(e) {
	          var t = i(this),
	              n = a(t),
	              r = s(e, arguments.length > 1 ? arguments[1] : void 0, 3);
	          return u(n, function (e, n, o) {
	            if (r(n, e, t)) return o();
	          }, {
	            AS_ENTRIES: !0,
	            IS_ITERATOR: !0,
	            INTERRUPTED: !0
	          }).stopped;
	        }
	      });
	    }, function (e, t, n) {

	      var r = n(1),
	          o = n(7),
	          i = n(2),
	          s = n(13);
	      r({
	        target: "Map",
	        proto: !0,
	        real: !0,
	        forced: o
	      }, {
	        update: function update(e, t) {
	          var n = i(this),
	              r = arguments.length;
	          s(t);
	          var o = n.has(e);
	          if (!o && r < 3) throw TypeError("Updating absent value");
	          var a = o ? n.get(e) : s(r > 2 ? arguments[2] : void 0)(e, n);
	          return n.set(e, t(a, e, n)), n;
	        }
	      });
	    }, function (e, t, n) {
	      var r,
	          o,
	          i,
	          s = n(3),
	          a = n(4),
	          u = n(14),
	          c = n(110),
	          l = n(76),
	          f = n(138),
	          p = n(33),
	          h = s.location,
	          d = s.setImmediate,
	          v = s.clearImmediate,
	          y = s.process,
	          m = s.MessageChannel,
	          g = s.Dispatch,
	          b = 0,
	          S = {},
	          w = function w(e) {
	        if (S.hasOwnProperty(e)) {
	          var t = S[e];
	          delete S[e], t();
	        }
	      },
	          E = function E(e) {
	        return function () {
	          w(e);
	        };
	      },
	          _ = function _(e) {
	        w(e.data);
	      },
	          O = function O(e) {
	        s.postMessage(e + "", h.protocol + "//" + h.host);
	      };

	      d && v || (d = function d(e) {
	        for (var t = [], n = 1; arguments.length > n;) t.push(arguments[n++]);

	        return S[++b] = function () {
	          ("function" == typeof e ? e : Function(e)).apply(void 0, t);
	        }, r(b), b;
	      }, v = function v(e) {
	        delete S[e];
	      }, p ? r = function r(e) {
	        y.nextTick(E(e));
	      } : g && g.now ? r = function r(e) {
	        g.now(E(e));
	      } : m && !f ? (i = (o = new m()).port2, o.port1.onmessage = _, r = u(i.postMessage, i, 1)) : s.addEventListener && "function" == typeof postMessage && !s.importScripts && h && "file:" !== h.protocol && !a(O) ? (r = O, s.addEventListener("message", _, !1)) : r = "onreadystatechange" in l("script") ? function (e) {
	        c.appendChild(l("script")).onreadystatechange = function () {
	          c.removeChild(this), w(e);
	        };
	      } : function (e) {
	        setTimeout(E(e), 0);
	      }), e.exports = {
	        set: d,
	        clear: v
	      };
	    }, function (e, t, n) {
	      var r = n(62);
	      e.exports = /(iphone|ipod|ipad).*applewebkit/i.test(r);
	    }, function (e, t, n) {
	      var r,
	          o,
	          i,
	          s,
	          a,
	          u,
	          c,
	          l,
	          f = n(3),
	          p = n(31).f,
	          h = n(137).set,
	          d = n(138),
	          v = n(198),
	          y = n(33),
	          m = f.MutationObserver || f.WebKitMutationObserver,
	          g = f.document,
	          b = f.process,
	          S = f.Promise,
	          w = p(f, "queueMicrotask"),
	          E = w && w.value;
	      E || (r = function r() {
	        var e, t;

	        for (y && (e = b.domain) && e.exit(); o;) {
	          t = o.fn, o = o.next;

	          try {
	            t();
	          } catch (e) {
	            throw o ? s() : i = void 0, e;
	          }
	        }

	        i = void 0, e && e.enter();
	      }, d || y || v || !m || !g ? S && S.resolve ? (c = S.resolve(void 0), l = c.then, s = function s() {
	        l.call(c, r);
	      }) : s = y ? function () {
	        b.nextTick(r);
	      } : function () {
	        h.call(f, r);
	      } : (a = !0, u = g.createTextNode(""), new m(r).observe(u, {
	        characterData: !0
	      }), s = function s() {
	        u.data = a = !a;
	      })), e.exports = E || function (e) {
	        var t = {
	          fn: e,
	          next: void 0
	        };
	        i && (i.next = t), o || (o = t, s()), i = t;
	      };
	    }, function (e, t, n) {

	      var r = n(13),
	          o = function o(e) {
	        var t, n;
	        this.promise = new e(function (e, r) {
	          if (void 0 !== t || void 0 !== n) throw TypeError("Bad Promise constructor");
	          t = e, n = r;
	        }), this.resolve = r(t), this.reject = r(n);
	      };

	      e.exports.f = function (e) {
	        return new o(e);
	      };
	    }, function (e, t, n) {

	      n(35);
	      var r = n(16),
	          o = n(4),
	          i = n(5),
	          s = n(66),
	          a = n(18),
	          u = i("species"),
	          c = !o(function () {
	        var e = /./;
	        return e.exec = function () {
	          var e = [];
	          return e.groups = {
	            a: "7"
	          }, e;
	        }, "7" !== "".replace(e, "$<a>");
	      }),
	          l = "$0" === "a".replace(/./, "$0"),
	          f = i("replace"),
	          p = !!/./[f] && "" === /./[f]("a", "$0"),
	          h = !o(function () {
	        var e = /(?:)/,
	            t = e.exec;

	        e.exec = function () {
	          return t.apply(this, arguments);
	        };

	        var n = "ab".split(e);
	        return 2 !== n.length || "a" !== n[0] || "b" !== n[1];
	      });

	      e.exports = function (e, t, n, f) {
	        var d = i(e),
	            v = !o(function () {
	          var t = {};
	          return t[d] = function () {
	            return 7;
	          }, 7 != ""[e](t);
	        }),
	            y = v && !o(function () {
	          var t = !1,
	              n = /a/;
	          return "split" === e && ((n = {}).constructor = {}, n.constructor[u] = function () {
	            return n;
	          }, n.flags = "", n[d] = /./[d]), n.exec = function () {
	            return t = !0, null;
	          }, n[d](""), !t;
	        });

	        if (!v || !y || "replace" === e && (!c || !l || p) || "split" === e && !h) {
	          var m = /./[d],
	              g = n(d, ""[e], function (e, t, n, r, o) {
	            return t.exec === s ? v && !o ? {
	              done: !0,
	              value: m.call(t, n, r)
	            } : {
	              done: !0,
	              value: e.call(n, t, r)
	            } : {
	              done: !1
	            };
	          }, {
	            REPLACE_KEEPS_$0: l,
	            REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: p
	          }),
	              b = g[0],
	              S = g[1];
	          r(String.prototype, e, b), r(RegExp.prototype, d, 2 == t ? function (e, t) {
	            return S.call(e, this, t);
	          } : function (e) {
	            return S.call(e, this);
	          });
	        }

	        f && a(RegExp.prototype[d], "sham", !0);
	      };
	    }, function (e, t, n) {

	      var r = n(4);

	      function o(e, t) {
	        return RegExp(e, t);
	      }

	      t.UNSUPPORTED_Y = r(function () {
	        var e = o("a", "y");
	        return e.lastIndex = 2, null != e.exec("abcd");
	      }), t.BROKEN_CARET = r(function () {
	        var e = o("^r", "gy");
	        return e.lastIndex = 2, null != e.exec("str");
	      });
	    }, function (e, t, n) {

	      var r = n(119).charAt;

	      e.exports = function (e, t, n) {
	        return t + (n ? r(e, t).length : 1);
	      };
	    }, function (e, t, n) {
	      var r = n(32),
	          o = n(66);

	      e.exports = function (e, t) {
	        var n = e.exec;

	        if ("function" == typeof n) {
	          var i = n.call(e, t);
	          if ("object" != typeof i) throw TypeError("RegExp exec method returned something other than an Object or null");
	          return i;
	        }

	        if ("RegExp" !== r(e)) throw TypeError("RegExp#exec called on incompatible receiver");
	        return o.call(e, t);
	      };
	    }, function (e, t, n) {
	      var r = n(9),
	          o = n(50),
	          i = n(15),
	          s = n(56).f,
	          a = function a(e) {
	        return function (t) {
	          for (var n, a = i(t), u = o(a), c = u.length, l = 0, f = []; c > l;) n = u[l++], r && !s.call(a, n) || f.push(e ? [n, a[n]] : a[n]);

	          return f;
	        };
	      };

	      e.exports = {
	        entries: a(!0),
	        values: a(!1)
	      };
	    }, function (e, t, n) {
	      var r = n(5);
	      t.f = r;
	    }, function (e, t, n) {
	      var r = n(104),
	          o = n(12),
	          i = n(146),
	          s = n(11).f;

	      e.exports = function (e) {
	        var t = r.Symbol || (r.Symbol = {});
	        o(t, e) || s(t, e, {
	          value: i.f(e)
	        });
	      };
	    }, function (e, t, n) {

	      var r = n(13),
	          o = n(6),
	          i = [].slice,
	          s = {},
	          a = function a(e, t, n) {
	        if (!(t in s)) {
	          for (var r = [], o = 0; o < t; o++) r[o] = "a[" + o + "]";

	          s[t] = Function("C,a", "return new C(" + r.join(",") + ")");
	        }

	        return s[t](e, n);
	      };

	      e.exports = Function.bind || function (e) {
	        var t = r(this),
	            n = i.call(arguments, 1),
	            s = function s() {
	          var r = n.concat(i.call(arguments));
	          return this instanceof s ? a(t, r.length, r) : t.apply(e, r);
	        };

	        return o(t.prototype) && (s.prototype = t.prototype), s;
	      };
	    }, function (e, t, n) {

	      var r = n(1),
	          o = n(53).map;
	      r({
	        target: "Array",
	        proto: !0,
	        forced: !n(67)("map")
	      }, {
	        map: function map(e) {
	          return o(this, e, arguments.length > 1 ? arguments[1] : void 0);
	        }
	      });
	    }, function (e, t, n) {

	      var r = n(53).forEach,
	          o = n(68)("forEach");
	      e.exports = o ? [].forEach : function (e) {
	        return r(this, e, arguments.length > 1 ? arguments[1] : void 0);
	      };
	    }, function (t, n) {
	      if (void 0 === e) {
	        var r = new Error("Cannot find module 'undefined'");
	        throw r.code = "MODULE_NOT_FOUND", r;
	      }

	      t.exports = e;
	    }, function (e, t, n) {

	      var r = n(1),
	          o = n(45),
	          i = n(15),
	          s = n(68),
	          a = [].join,
	          u = o != Object,
	          c = s("join", ",");
	      r({
	        target: "Array",
	        proto: !0,
	        forced: u || !c
	      }, {
	        join: function join(e) {
	          return a.call(i(this), void 0 === e ? "," : e);
	        }
	      });
	    }, function (e, t, n) {
	      var r = n(1),
	          o = n(24),
	          i = n(50);
	      r({
	        target: "Object",
	        stat: !0,
	        forced: n(4)(function () {
	          i(1);
	        })
	      }, {
	        keys: function keys(e) {
	          return i(o(e));
	        }
	      });
	    }, function (e, t, n) {

	      var r = n(1),
	          o = n(53).filter;
	      r({
	        target: "Array",
	        proto: !0,
	        forced: !n(67)("filter")
	      }, {
	        filter: function filter(e) {
	          return o(this, e, arguments.length > 1 ? arguments[1] : void 0);
	        }
	      });
	    }, function (e, t, n) {
	      var r = n(1),
	          o = n(4),
	          i = n(15),
	          s = n(31).f,
	          a = n(9),
	          u = o(function () {
	        s(1);
	      });
	      r({
	        target: "Object",
	        stat: !0,
	        forced: !a || u,
	        sham: !a
	      }, {
	        getOwnPropertyDescriptor: function getOwnPropertyDescriptor(e, t) {
	          return s(i(e), t);
	        }
	      });
	    }, function (e, t, n) {
	      var r = n(3),
	          o = n(122),
	          i = n(150),
	          s = n(18);

	      for (var a in o) {
	        var u = r[a],
	            c = u && u.prototype;
	        if (c && c.forEach !== i) try {
	          s(c, "forEach", i);
	        } catch (e) {
	          c.forEach = i;
	        }
	      }
	    }, function (e, t, n) {
	      var r = n(1),
	          o = n(9),
	          i = n(103),
	          s = n(15),
	          a = n(31),
	          u = n(55);
	      r({
	        target: "Object",
	        stat: !0,
	        sham: !o
	      }, {
	        getOwnPropertyDescriptors: function getOwnPropertyDescriptors(e) {
	          for (var t, n, r = s(e), o = a.f, c = i(r), l = {}, f = 0; c.length > f;) void 0 !== (n = o(r, t = c[f++])) && u(l, t, n);

	          return l;
	        }
	      });
	    }, function (e, t, n) {
	      var r = n(1),
	          o = n(9);
	      r({
	        target: "Object",
	        stat: !0,
	        forced: !o,
	        sham: !o
	      }, {
	        defineProperties: n(109)
	      });
	    }, function (e, t, n) {

	      var r = n(141),
	          o = n(85),
	          i = n(2),
	          s = n(26),
	          a = n(54),
	          u = n(143),
	          c = n(17),
	          l = n(144),
	          f = n(66),
	          p = n(4),
	          h = [].push,
	          d = Math.min,
	          v = !p(function () {
	        return !RegExp(4294967295, "y");
	      });
	      r("split", 2, function (e, t, n) {
	        var r;
	        return r = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function (e, n) {
	          var r = String(s(this)),
	              i = void 0 === n ? 4294967295 : n >>> 0;
	          if (0 === i) return [];
	          if (void 0 === e) return [r];
	          if (!o(e)) return t.call(r, e, i);

	          for (var a, u, c, l = [], p = (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.unicode ? "u" : "") + (e.sticky ? "y" : ""), d = 0, v = new RegExp(e.source, p + "g"); (a = f.call(v, r)) && !((u = v.lastIndex) > d && (l.push(r.slice(d, a.index)), a.length > 1 && a.index < r.length && h.apply(l, a.slice(1)), c = a[0].length, d = u, l.length >= i));) v.lastIndex === a.index && v.lastIndex++;

	          return d === r.length ? !c && v.test("") || l.push("") : l.push(r.slice(d)), l.length > i ? l.slice(0, i) : l;
	        } : "0".split(void 0, 0).length ? function (e, n) {
	          return void 0 === e && 0 === n ? [] : t.call(this, e, n);
	        } : t, [function (t, n) {
	          var o = s(this),
	              i = null == t ? void 0 : t[e];
	          return void 0 !== i ? i.call(t, o, n) : r.call(String(o), t, n);
	        }, function (e, o) {
	          var s = n(r, e, this, o, r !== t);
	          if (s.done) return s.value;
	          var f = i(e),
	              p = String(this),
	              h = a(f, RegExp),
	              y = f.unicode,
	              m = (f.ignoreCase ? "i" : "") + (f.multiline ? "m" : "") + (f.unicode ? "u" : "") + (v ? "y" : "g"),
	              g = new h(v ? f : "^(?:" + f.source + ")", m),
	              b = void 0 === o ? 4294967295 : o >>> 0;
	          if (0 === b) return [];
	          if (0 === p.length) return null === l(g, p) ? [p] : [];

	          for (var S = 0, w = 0, E = []; w < p.length;) {
	            g.lastIndex = v ? w : 0;

	            var _,
	                O = l(g, v ? p : p.slice(w));

	            if (null === O || (_ = d(c(g.lastIndex + (v ? 0 : w)), p.length)) === S) w = u(p, w, y);else {
	              if (E.push(p.slice(S, w)), E.length === b) return E;

	              for (var A = 1; A <= O.length - 1; A++) if (E.push(O[A]), E.length === b) return E;

	              w = S = _;
	            }
	          }

	          return E.push(p.slice(S)), E;
	        }];
	      }, !v);
	    }, function (e, t, n) {

	      e.exports = function (e) {
	        return null !== e && "object" == typeof e;
	      };
	    }, function (e, t) {
	      e.exports = "\t\n\v\f\r                　\u2028\u2029\ufeff";
	    }, function (e, t, n) {

	      n.d(t, "a", function () {
	        return s;
	      });
	      n(94), n(35), n(159), n(69), n(41), n(37), n(38), n(20), n(39), n(27), n(25), n(28), n(40), n(30), n(36);
	      var r = n(0);

	      function o(e, t) {
	        return function (e) {
	          if (Array.isArray(e)) return e;
	        }(e) || function (e, t) {
	          if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
	          var n = [],
	              r = !0,
	              o = !1,
	              i = void 0;

	          try {
	            for (var s, a = e[Symbol.iterator](); !(r = (s = a.next()).done) && (n.push(s.value), !t || n.length !== t); r = !0);
	          } catch (e) {
	            o = !0, i = e;
	          } finally {
	            try {
	              r || null == a.return || a.return();
	            } finally {
	              if (o) throw i;
	            }
	          }

	          return n;
	        }(e, t) || function (e, t) {
	          if (!e) return;
	          if ("string" == typeof e) return i(e, t);
	          var n = Object.prototype.toString.call(e).slice(8, -1);
	          "Object" === n && e.constructor && (n = e.constructor.name);
	          if ("Map" === n || "Set" === n) return Array.from(e);
	          if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return i(e, t);
	        }(e, t) || function () {
	          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	        }();
	      }

	      function i(e, t) {
	        (null == t || t > e.length) && (t = e.length);

	        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];

	        return r;
	      }

	      function s() {
	        return function (e, t, n) {
	          var i = e.get(r.TRACING_HEADER_NAME),
	              s = !CodeSee.recording && void 0 !== i;

	          if (s) {
	            var a,
	                u,
	                c,
	                l,
	                f,
	                p = e.get(r.AUTHORIZATION_HEADER_NAME).match(/Bearer (.+)/),
	                h = i.split(":"),
	                d = h[0];

	            if (p) {
	              var v = p[1];

	              if (d === r.TRACING_HEADER_FORMAT_COMPOSITE_SESSION_ID) {
	                var y = o(h, 5);
	                a = y[1], u = y[2], c = y[3], l = y[4], CodeSee.toggleRecording({
	                  continuedRecordingId: a,
	                  sourceServiceId: u,
	                  sourceSessionTimestamp: c,
	                  sourceSideEffectId: l,
	                  authTokenValue: v
	                });
	              } else if (d === r.TRACING_HEADER_FORMAT_SIMPLE_SESSION_ID) {
	                var m = o(h, 4);
	                a = m[1], f = m[2], l = m[3], CodeSee.toggleRecording({
	                  continuedRecordingId: a,
	                  sourceSessionId: f,
	                  sourceSideEffectId: l,
	                  authTokenValue: v
	                });
	              } else console.warn("CodeSee: ".concat(r.TRACING_HEADER_NAME, " header unknown format: ").concat(d, ". Please contact CodeSee support.")), s = !1;
	            } else console.warn("CodeSee: ".concat(r.AUTHORIZATION_HEADER_NAME, " malformed. Please contact CodeSee support.")), s = !1;
	          }

	          t.once("finish", function () {
	            s && CodeSee.recording && CodeSee.toggleRecording();
	          }), n();
	        };
	      }
	    }, function (e, t, n) {

	      (function (e) {
	        Object.defineProperty(t, "__esModule", {
	          value: !0
	        }), t.track = t.trackGlobalDocument = t.trackEvents = t.removeEventListener = t.addEventListener = t.cleanupEvents = t.getEventsMap = t.eventsSym = t.nodeListIter = void 0;
	        const r = n(22),
	              o = Map,
	              i = WeakMap,
	              s = Object.defineProperty;

	        function a(e) {
	          return {
	            [Symbol.iterator]() {
	              let t = 0;
	              return {
	                next: () => t < e.length ? {
	                  done: !1,
	                  value: e[t++]
	                } : {
	                  done: !0,
	                  value: void 0
	                }
	              };
	            }

	          };
	        }

	        t.nodeListIter = a, t.eventsSym = Symbol.for("@effectful/debugger/events"), t.getEventsMap = function (e) {
	          return e[t.eventsSym];
	        };
	        const u = {
	          [r.descriptorSymbol]: !1
	        };

	        function c(e, n) {
	          l(e);

	          for (const [t, r] of n) for (const [n, o] of r) for (const r of o) if (r) for (const o of r) e.addEventListener(t, n, o);

	          e[t.eventsSym] = n;
	        }

	        function l(e) {
	          if (e[t.eventsSym]) for (const [n, r] of e[t.eventsSym]) for (const [t, o] of r) for (const r of o) if (r) for (const o of r) e.removeEventListener(n, t, o);
	        }

	        t.cleanupEvents = l;
	        const f = "undefined" != typeof EventTarget && EventTarget.prototype,
	              p = f && f.addEventListener,
	              h = f && f.removeEventListener;

	        function d(e) {
	          e.currentTarget && e.currentTarget.removeEventListener(this.type, this.inner, this.capture);
	        }

	        r.regOpaqueObject(d, "S#wrapOnceHandleEvent");
	        const v = new i();

	        function y(n, r, i) {
	          const s = this || e;
	          "boolean" == typeof i ? i = {
	            capture: i
	          } : i || (i = {});
	          const a = i.once;

	          if (p && (p.call(s, n, r, {
	            capture: i.capture,
	            passive: i.passive
	          }), a || "load" === n)) {
	            let e = v.get(r);
	            e || v.set(r, e = {
	              type: n,
	              inner: r,
	              capture: i.capture || !1,
	              handleEvent: d
	            }), p.call(s, n, e, {
	              once: !0,
	              capture: i.capture
	            });
	          }

	          const u = s[t.eventsSym] || (s[t.eventsSym] = new o());
	          let c = u.get(n);
	          c || u.set(n, c = new o());
	          let l = c.get(r);
	          l || (l = [void 0, void 0], c.set(r, l));
	          const f = Number(i.capture || !1);
	          (l[f] || (l[f] = [])).push(i);
	        }

	        function m(n, r, o) {
	          const i = this || e;
	          "boolean" == typeof o ? o = {
	            capture: o
	          } : o || (o = {}), h && h.call(i, n, r, o);
	          const s = i[t.eventsSym];
	          if (!s) return;
	          const a = s.get(n);
	          if (!a) return;
	          const u = a.get(r);
	          if (!u) return;
	          const c = Number(o.capture || !1),
	                l = u[c];
	          l && (o.once && l.some(e => !e.once) || (u[c] = void 0, u.some(Boolean) || a.delete(r)));
	        }

	        function g(e) {
	          e.addEventListener = y, e.removeEventListener = m;
	        }

	        function b(e) {
	          if (void 0 === e.document) return;
	          const n = e.document.createElement("div");
	          n.addEventListener("test-event", function () {}), n.innerHTML = '<div id="root"><p>hello, world!</p></div>';
	          n.children, n.attributes;

	          for (const e of Object.getOwnPropertySymbols(n)) u[e] = !1;

	          for (const t of Object.getOwnPropertySymbols(e.document)) u[t] = !1;

	          const o = Object.assign(Object.assign({}, u), {
	            location: !1,
	            [t.eventsSym]: !1,
	            _hjRemoteVarsFrame: !1
	          }),
	                i = e => "__react" !== e.substr(0, 7);

	          if (r.getState().byObject.set(e.document, r.regDescriptor({
	            name: "global#document",

	            write(n, r) {
	              const o = {};
	              o.el = n.step(e.document.documentElement, o, "el");
	              const i = r[t.eventsSym];
	              return i && (o.ev = n.step(i, o, "ev")), o;
	            },

	            create: () => e.document,

	            readContent(e, t, n) {
	              n.replaceChild(e.step(t.el), n.documentElement), t.ev && c(n, e.step(t.ev));
	            },

	            presentForPrototype: (t, n) => new r.PresentObject(e.Document),
	            overrideProps: o
	          })), void 0 !== e.NodeList && r.regConstructor(e.NodeList, {
	            name: "dom#NodeList",
	            overrideProps: u,
	            strictName: !0
	          }), void 0 !== e.EventTarget && r.regConstructor(e.EventTarget, {
	            name: "dom#EventTarget",
	            overrideProps: u
	          }), void 0 !== e.Element) {
	            const n = r.regDescriptor({
	              name: "dom#ChildElement",
	              strictName: !0,
	              overrideProps: Object.assign(Object.assign({}, u), {
	                [t.eventsSym]: !1
	              }),
	              filterProps: i,

	              write(e, n, r, o) {
	                const i = {
	                  tag: n.tagName
	                },
	                      s = n.childNodes.length,
	                      u = 1 === s ? " child node hidden)" : " child nodes hidden)";
	                i.c = "(" + s + u;
	                const c = i.a = {};

	                for (const e of a(n.attributes)) c[e.name] = e.value;

	                const l = n[t.eventsSym];
	                return l && (i.ev = e.step(l, i, "ev")), i;
	              },

	              create: (t, n) => e.document.createElement(n.tag),

	              readContent(e, t, n) {
	                const r = t;

	                for (const e in r.a) n.setAttribute(e, r.a[e]);

	                r.ev && c(n, e.step(r.ev));
	              },

	              presentForPrototype(t, n) {
	                const o = e.document.createElement(n.tag);
	                return new r.PresentObject(Object.getPrototypeOf(o).constructor);
	              },

	              presentForContent(e, t, n) {
	                const r = t;
	                n.addProperty("children", r.c), n.addProperty("attributes", r.a);
	              }

	            }),
	                  o = "dom#Element";
	            r.regConstructor(e.Element, {
	              name: o,

	              write(i, s, u, c) {
	                const l = {
	                  tag: s.tagName
	                },
	                      f = l.c = [];

	                for (const t of a(s.childNodes)) {
	                  const a = r.getValueDescriptor(s);
	                  (null == a ? void 0 : a.name) === o && t.childNodes && t.childNodes.length > 0 && !(1 === t.childNodes.length && t.childNodes[0] instanceof e.Text) ? f.push(n.write(i, t, f, f.length)) : f.push(i.step(t, f, f.length));
	                }

	                const p = l.a = {};

	                for (const e of a(s.attributes)) p[e.name] = e.value;

	                const h = s[t.eventsSym];
	                return h && (l.ev = i.step(h, l, "ev")), l;
	              },

	              create: (t, n) => e.document.createElement(n.tag),

	              readContent(e, t, n) {
	                const r = t;

	                for (const t of r.c) n.appendChild(e.step(t));

	                for (const e in r.a) n.setAttribute(e, r.a[e]);

	                r.ev && c(n, e.step(r.ev));
	              },

	              presentForPrototype(t, n) {
	                const o = e.document.createElement(n.tag);
	                return new r.PresentObject(Object.getPrototypeOf(o).constructor);
	              },

	              presentForContent(e, t, n) {
	                const r = t,
	                      o = [];

	                for (const t of r.c) o.push(e.step(t));

	                n.addProperty("children", o), n.addProperty("attributes", r.a);
	              },

	              overrideProps: Object.assign(Object.assign({}, u), {
	                [t.eventsSym]: !1
	              }),
	              filterProps: i,
	              strictName: !0
	            }, !0);
	          }

	          void 0 !== e.Event && s(e.Event.prototype, r.descriptorSymbol, {
	            value: r.regDescriptor({
	              name: "dom#Event",

	              create(e, t) {
	                const n = e.step(t.c),
	                      r = t.init,
	                      o = {};

	                for (const t of Object.keys(r)) {
	                  const n = r[t];
	                  o[t] = n && "object" == typeof n ? e.step(n) : n;
	                }

	                return new n(o.type, o);
	              },

	              write(e, t) {
	                const n = {};
	                n.c = e.step(t.constructor, n, "c");
	                const r = {};

	                for (let e = t; e && e !== Object.prototype; e = Object.getPrototypeOf(e)) Object.assign(r, Object.getOwnPropertyDescriptors(e), r);

	                const o = n.init = {};

	                for (const n in r) {
	                  if (!r[n].get) continue;
	                  const i = t[n];
	                  i && (o[n] = e.step(i, o, n));
	                }

	                return n;
	              },

	              readContent() {},

	              presentForPrototype: (t, n) => new r.PresentObject(e.Event),

	              presentForContent(e, t, n) {
	                const r = t.init;

	                for (const t of Object.keys(r)) {
	                  const o = r[t];
	                  o && "object" == typeof o ? n.addProperty(t, e.step(o)) : n.addProperty(t, o);
	                }
	              },

	              props: !1
	            }),
	            configurable: !0
	          }), void 0 !== e.Text && r.regConstructor(e.Text, {
	            name: "dom#Text",
	            write: (e, t) => ({
	              text: t.data
	            }),
	            create: (t, n) => e.document.createTextNode(n.text),

	            presentForContent(e, t, n) {
	              const r = t;
	              n.addProperty("data", r.text);
	            },

	            overrideProps: u,
	            strictName: !0
	          }), void 0 !== e.ProcessingInstruction && r.regConstructor(e.ProcessingInstruction, {
	            name: "dom#PI",
	            write: (e, t) => ({
	              target: t.target,
	              data: t.data
	            }),
	            create: (t, n) => e.document.createProcessingInstruction(n.target, n.data),
	            overrideProps: u
	          }), void 0 !== e.Comment && r.regConstructor(e.Comment, {
	            name: "dom#Comment",
	            write: (e, t) => ({
	              text: t.data
	            }),
	            create: (t, n) => e.document.createTextNode(n.text),
	            overrideProps: u
	          }), void 0 !== e.CSSStyleDeclaration && r.regConstructor(e.CSSStyleDeclaration, {
	            name: "dom#CSSStyleDeclaration",
	            write: (e, t) => ({
	              text: t.cssText
	            }),

	            create(t, n) {
	              const r = e.document.createElement("div");
	              return r.style.cssText = n.text, r.style;
	            },

	            overrideProps: u
	          }), e.CSS2Properties && r.regConstructor(e.CSS2Properties, {
	            name: "dom#CSS2Properties",
	            write: (e, t) => ({
	              text: t.cssText
	            }),

	            create(e, t) {
	              const n = document.createElement("div");
	              return n.style.cssText = t.text, n.style;
	            },

	            overrideProps: u
	          }), void 0 !== e.Document && r.regConstructor(e.Document, {
	            name: "dom#Document",
	            write: (t, n) => ({
	              text: new e.XMLSerializer().serializeToString(n),
	              type: n.contentType
	            }),
	            create: (e, t) => new DOMParser().parseFromString(t.text, t.type),

	            readContent(e, t, n) {
	              n.replaceChild(e.step(t.el), n.documentElement);
	            },

	            presentForPrototype: (e, t) => new r.PresentObject({
	              name: "Document"
	            }),

	            presentForContent(e, t, n) {
	              n.addProperty("outerHTML", t.text), n.addProperty("contentType", t.type);
	            },

	            overrideProps: o
	          }, !0), void 0 !== e.InputDeviceCapabilities && r.regConstructor(e.InputDeviceCapabilities, {
	            name: "dom#InputDeviceCapabilities",
	            write: (e, t) => ({
	              fireTouchEvents: t.fireTouchEvents
	            }),
	            create: (e, t) => new InputDeviceCapabilities({
	              fireTouchEvents: t.fireTouchEvents
	            }),
	            props: !1
	          }), void 0 !== e.MutationRecord && r.regConstructor(e.MutationRecord, {
	            name: "dom#MutationRecord",

	            write(e, t) {
	              const n = {};
	              return n.ty = e.step(t.type, n, "ty"), n.el = e.step(t.target, n, "el"), t.addedNodes && (n.an = e.step([...a(t.addedNodes)], n, "an")), t.removedNodes && (n.rn = e.step([...a(t.removedNodes)], n, "rn")), t.previousSibling && (n.ps = e.step(t.previousSibling, n, "ps")), t.nextSibling && (n.ns = e.step(t.nextSibling, n, "ns")), t.attributeName && (n.tn = e.step(t.attributeName, n, "tn")), t.attributeNamespace && (n.ts = e.step(t.attributeNamespace, n, "ts")), t.oldValue && (n.ov = e.step(t.oldValue, n, "ov")), n;
	            },

	            create: () => ({}),

	            readContent(e, t, n) {
	              const r = t,
	                    o = n;
	              o.type = e.step(r.ty), o.target = e.step(r.el), o.addedNodes = e.step(r.an), o.removedNodes = e.step(r.rn), o.previousSibling = e.step(r.ps), o.nextSibling = e.step(r.ns), o.attributeName = e.step(r.tn), o.attributeNamespace = e.step(r.ts), o.oldValue = e.step(r.ov);
	            },

	            props: !1
	          }), void 0 !== e.MutationObserver && r.regConstructor(e.MutationObserver, {
	            name: "dom#MutationObserver",
	            overrideProps: u
	          });
	        }

	        t.addEventListener = y, t.removeEventListener = m, t.trackEvents = g, t.trackGlobalDocument = b, t.track = function (e) {
	          void 0 !== e.EventTarget && g(e.EventTarget.prototype), b(e), r.regGlobal();
	        };
	      }).call(this, n(29));
	    }, function (e, t, n) {

	      Object.defineProperty(t, "__esModule", {
	        value: !0
	      }), t.trackBrowser = void 0;
	      const r = n(22);
	      let o = !1;

	      t.trackBrowser = function (e) {
	        if (o) return;
	        if (void 0 === e.document) return;
	        o = !0;
	        const t = {},
	              n = e.document.createElement("div");
	        n.addEventListener("test-event", function () {}), n.innerHTML = '<div id="root"><p>hello, world!</p></div>', n.children, n.attributes;

	        for (const e of Object.getOwnPropertySymbols(n)) t[e] = !1;

	        for (const n of Object.getOwnPropertySymbols(e.document)) t[n] = !1;

	        const i = new Set(["", "text", "json"]);
	        void 0 !== e.XMLHttpRequest && r.regConstructor(e.XMLHttpRequest, {
	          name: "XMLHttpRequest",
	          strictName: !0,
	          props: !1,
	          overrideProps: Object.assign({
	            __codesee__xhr_method__: !1,
	            __codesee__xhr_url__: !1,
	            __codesee__xhr_sync__: !1,
	            __codesee__xhr_uid__: !1
	          }, t),

	          write(e, t) {
	            const n = {},
	                  r = n.i = {};
	            let o = ["readyState"];

	            switch (t.readyState) {
	              case 4:
	                o = o.concat(["response", "responseType", "responseUrl", "timeout"]);

	              case 3:
	                i.has(t.responseType) && (o = o.concat(["responseText"]));

	              case 2:
	                o = o.concat(["status", "statusText", "withCredentials", "timeout"]);
	            }

	            for (const n of o) r[n] = e.step(t[n], r, n);

	            return n;
	          },

	          presentForPrototype: (e, t) => new r.PresentObject({
	            name: "XMLHttpRequest"
	          }),

	          presentForContent(e, t, n) {
	            for (const r of Object.keys(t.i)) n.addProperty(r, e.step(t.i[r]));
	          }

	        }, !0), void 0 !== e.Blob && r.regConstructor(e.Blob, {
	          name: "Blob",
	          write: (e, t) => ({
	            size: t.size,
	            type: t.type
	          }),
	          presentForPrototype: (e, t) => new r.PresentObject({
	            name: `Blob (${t.size} bytes)`
	          }),

	          presentForContent(e, t, n) {
	            n.addProperty("size", t.size), n.addProperty("type", t.type);
	          },

	          strictName: !0,
	          props: !0,
	          overrideProps: t
	        }, !0), void 0 !== e.URLSearchParams && r.regConstructor(e.URLSearchParams, {
	          name: "URLSearchParams",
	          write: (e, t) => ({
	            asString: t.toString()
	          }),
	          presentForPrototype: (e, t) => new r.PresentObject({
	            name: "URLSearchParams: " + t.asString
	          }),
	          strictName: !0,
	          props: !1
	        }, !0), void 0 !== e.FormData && r.regConstructor(e.FormData, {
	          name: "FormData",
	          write: (e, t) => ({}),
	          presentForPrototype: (e, t) => new r.PresentObject({
	            name: "FormData"
	          }),
	          strictName: !0,
	          props: !1
	        }, !0), console.debug("CodeSee: Registered serializations for Browser.");
	      };
	    }, function (e, t, n) {

	      Object.defineProperty(t, "__esModule", {
	        value: !0
	      }), t.trackDate = void 0;
	      const r = n(22);

	      t.trackDate = function (e) {
	        void 0 !== e.Date && (r.regConstructor(e.Date, {
	          name: "Date",
	          strictName: !0,
	          props: !1,
	          write: (e, t) => ({
	            value: t.toJSON()
	          }),
	          presentForPrototype: (e, t) => new r.PresentSimple({
	            name: "Date"
	          }),

	          presentForContent(e, t, n) {
	            n.setFormattedValue(t.value);
	          }

	        }, !0), console.debug("CodeSee: Registered serialization for Date"));
	      };
	    }, function (e, t, n) {

	      (function (e) {
	        n.d(t, "a", function () {
	          return w;
	        });
	        n(215), n(97), n(156), n(153), n(216), n(40), n(111), n(117), n(20), n(27), n(25), n(28), n(93), n(159), n(35), n(42), n(37), n(154), n(155), n(157), n(158), n(30), n(36), n(38), n(39), n(41);
	        var r = n(167),
	            o = n.n(r),
	            i = n(73),
	            s = n(168),
	            a = n(99),
	            u = n(169),
	            c = n(8),
	            l = n(170),
	            f = n(171),
	            p = n(0),
	            h = n(74),
	            d = n(72);

	        function v(e, t) {
	          var _n2;

	          if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
	            if (Array.isArray(e) || (_n2 = function (e, t) {
	              if (!e) return;
	              if ("string" == typeof e) return y(e, t);
	              var n = Object.prototype.toString.call(e).slice(8, -1);
	              "Object" === n && e.constructor && (n = e.constructor.name);
	              if ("Map" === n || "Set" === n) return Array.from(e);
	              if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return y(e, t);
	            }(e)) || t && e && "number" == typeof e.length) {
	              _n2 && (e = _n2);

	              var r = 0,
	                  o = function o() {};

	              return {
	                s: o,
	                n: function n() {
	                  return r >= e.length ? {
	                    done: !0
	                  } : {
	                    done: !1,
	                    value: e[r++]
	                  };
	                },
	                e: function e(_e3) {
	                  throw _e3;
	                },
	                f: o
	              };
	            }

	            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	          }

	          var i,
	              s = !0,
	              a = !1;
	          return {
	            s: function s() {
	              _n2 = e[Symbol.iterator]();
	            },
	            n: function n() {
	              var e = _n2.next();

	              return s = e.done, e;
	            },
	            e: function e(_e4) {
	              a = !0, i = _e4;
	            },
	            f: function f() {
	              try {
	                s || null == _n2.return || _n2.return();
	              } finally {
	                if (a) throw i;
	              }
	            }
	          };
	        }

	        function y(e, t) {
	          (null == t || t > e.length) && (t = e.length);

	          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];

	          return r;
	        }

	        function m(e, t) {
	          var n = Object.keys(e);

	          if (Object.getOwnPropertySymbols) {
	            var r = Object.getOwnPropertySymbols(e);
	            t && (r = r.filter(function (t) {
	              return Object.getOwnPropertyDescriptor(e, t).enumerable;
	            })), n.push.apply(n, r);
	          }

	          return n;
	        }

	        function g(e) {
	          for (var t = 1; t < arguments.length; t++) {
	            var n = null != arguments[t] ? arguments[t] : {};
	            t % 2 ? m(Object(n), !0).forEach(function (t) {
	              b(e, t, n[t]);
	            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : m(Object(n)).forEach(function (t) {
	              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
	            });
	          }

	          return e;
	        }

	        function b(e, t, n) {
	          return t in e ? Object.defineProperty(e, t, {
	            value: n,
	            enumerable: !0,
	            configurable: !0,
	            writable: !0
	          }) : e[t] = n, e;
	        }

	        function S(e, t) {
	          for (var n = 0; n < t.length; n++) {
	            var r = t[n];
	            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
	          }
	        }

	        if ("undefined" == typeof window) try {
	          Object(c.a)().fetch = n(243).default;
	        } catch (e) {
	          console.error("CodeSee Error: Unable to access fetch() API. This is likely a bug in CodeSee. Please report to CodeSee support.", e);
	        }

	        var w = function () {
	          function t(n) {
	            !function (e, t) {
	              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
	            }(this, t), this.recordingStore = new l.a(), this.config = g({
	              host: Object(u.a)()
	            }, this.recordingStore.configCache), this.taskBoundaryDetector = new f.a(this), this.recording = p.NOT_RECORDING, this.transmitting = !1, this.canceled = !1, this.sourceFiles = {}, this._resetIdsAndCaches(), "undefined" != typeof CODESEE_VERBOSITY_LEVEL && "nodata" === CODESEE_VERBOSITY_LEVEL || void 0 !== e && void 0 !== e.env && void 0 !== e.env.CODESEE_VERBOSITY_LEVEL && "nodata" === e.env.CODESEE_VERBOSITY_LEVEL ? this._verbose = p.VERBOSITY_NO_DATA : void 0 !== this.recordingStore.verbose && null !== this.recordingStore.verbose ? this._verbose = this.recordingStore.verbose : this._verbose = p.VERBOSITY_MAX, this.rootGlobal = n, this.remoteInserted = !1, this._updateRemoteStyle = void 0;

	            var r = this._maybeStartRecording();

	            this.initFAB(n, r);
	          }

	          var n, r;
	          return n = t, (r = [{
	            key: "sessionId",
	            get: function get() {
	              return this.recordingStore.getSessionId();
	            }
	          }, {
	            key: "recordingId",
	            get: function get() {
	              return this.recordingStore.getRecordingId();
	            }
	          }, {
	            key: "serviceId",
	            get: function get() {
	              return this.recordingStore.getServiceId();
	            }
	          }, {
	            key: "currentSessionTimestamp",
	            get: function get() {
	              return this.recordingStore.getSessionTimestamp();
	            }
	          }, {
	            key: "authTokenValue",
	            get: function get() {
	              return this.recordingStore.getAuthTokenValue();
	            },
	            set: function set(e) {
	              this.recordingStore.setAuthTokenValue(e);
	            }
	          }, {
	            key: "isLoggedIn",
	            value: function value() {
	              return null !== this.authTokenValue;
	            }
	          }, {
	            key: "updateRemoteStyle",
	            set: function set(e) {
	              this._updateRemoteStyle = e;
	            }
	          }, {
	            key: "setConfig",
	            value: function value(e) {
	              this.config = g(g({}, this.config || {}), e || {}), this.recordingStore.configCache = this.config;
	            }
	          }, {
	            key: "getVerboseDescription",
	            value: function value() {
	              return this._verbose > p.VERBOSITY_LOW_DATA ? "verbose" : this._verbose > p.VERBOSITY_NO_DATA ? "terse" : "no data";
	            }
	          }, {
	            key: "initFAB",
	            value: function value(e, t) {
	              var n = this,
	                  r = function r() {
	                var r = function r() {
	                  return Object(s.insertCodeseeRemote)(e.document, n, Object(c.d)(e));
	                };

	                t && t > 0 ? setTimeout(r, 2e3) : r();
	              };

	              void 0 !== e.window && void 0 !== e.document && ("complete" === e.document.readyState ? r() : void 0 !== e.window.addEventListener && e.window.addEventListener("load", function () {
	                r();
	              }));
	            }
	          }, {
	            key: "cancelRecording",
	            value: function value() {
	              this.canceled = !0, (this.recording || this.transmitting) && (this.transmitting = !1, this.recording = p.NOT_RECORDING, this.remoteInserted && this._updateRemoteStyle && this._updateRemoteStyle(), this.recordingStore.clear(), this.buffer._transmission._eventQueue.length = 0, this.buffer._transmission._eventBatches.length = 0, delete this.buffer);
	            }
	          }, {
	            key: "toggleRecording",
	            value: function value() {
	              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
	                  t = e.transmission,
	                  n = e.continuedRecordingId,
	                  r = e.sourceSessionId,
	                  o = e.sourceServiceId,
	                  i = e.sourceSessionTimestamp,
	                  s = e.sourceSideEffectId,
	                  a = e.batchSizeTrigger,
	                  u = e.authTokenValue,
	                  c = e.verbose;
	              void 0 !== c && (this._verbose = c, this.recordingStore.verbose = this._verbose), this.recording = this.recording ? p.NOT_RECORDING : this._verbose, this.remoteInserted && this._updateRemoteStyle && this._updateRemoteStyle(), this.recording ? (this.log("Recording started in ".concat(this.getVerboseDescription(), " mode")), this.bufferOptions = {}, this.canceled = !1, t && (this.bufferOptions.transmission = t), a && (this.bufferOptions.batchSizeTrigger = a), u && (this.authTokenValue = u), this._resetIdsAndCaches(), this.recordingStore.startRecording(n), this._initBuffer(), this._postNewSession({
	                sourceSessionId: r,
	                sourceServiceId: o,
	                sourceSessionTimestamp: i,
	                sourceSideEffectId: s
	              }), this._sendSource(this.sourceFiles), this.transmitting = !0) : (this.log("Recording stopped!"), this._maybeNavigateToCodeSee(), this.recordingStore.clear());
	            }
	          }, {
	            key: "source",
	            value: function value(e) {
	              var t = this;
	              Object.keys(e).forEach(function (n) {
	                t.sourceFiles[n] = e[n];
	              }), this._sendSource(e, this.authTokenValue);
	            }
	          }, {
	            key: "serializeSafely",
	            value: function value(e) {
	              if (this.recording === p.VERBOSITY_NO_DATA) return {
	                $: "CodeSee",
	                $$: "NoData"
	              };
	              if (this.valuesTooLargeCache.has(e)) return this.valuesTooLargeCache.get(e);
	              var t = Object(d.a)(e),
	                  n = JSON.stringify(t);

	              if (n && n.length > h.b) {
	                var r = "CodeSee Error: This value is too large to record: ~".concat(Math.round(n.length / 1048576), "MB");
	                return this.valuesTooLargeCache.set(e, r), r;
	              }

	              return t;
	            }
	          }, {
	            key: "enteredFrame",
	            value: function value(e) {
	              this.executionStack.push(e), this.taskBoundaryDetector.enteredFrame(e);
	            }
	          }, {
	            key: "exitingFrame",
	            value: function value(e) {
	              if (this.executionStack[this.executionStack.length - 1] === e) this.executionStack.pop();else {
	                var t = this.executionStack.indexOf(e);
	                -1 !== t && (this.executionStack = this.executionStack.slice(0, t));
	              }
	            }
	          }, {
	            key: "caughtExceptionInFrame",
	            value: function value(e) {
	              if (this.executionStack[this.executionStack.length - 1] === e) return !0;
	              var t = this.executionStack.indexOf(e);
	              return -1 !== t && (this.executionStack = this.executionStack.slice(0, t + 1), !0);
	            }
	          }, {
	            key: "enqueueEvent",
	            value: function value(e, t) {
	              var n = {
	                moment: e,
	                eventId: this.eventUIDs.getUID(),
	                details: t
	              },
	                  r = new a.a({
	                json: JSON.stringify(n)
	              }, this.buffer.dataset, this.authTokenValue, this.config.host);
	              this.buffer.transmission.sendPresampledEvent(r);
	            }
	          }, {
	            key: "_clearSourceCache",
	            value: function value() {
	              this.sourceFiles = {};
	            }
	          }, {
	            key: "_resetIdsAndCaches",
	            value: function value() {
	              this.eventUIDs = new i.a(), this.stackFrameUIDs = new i.a(), this.sideEffectUIDs = new i.a(), this.valuesTooLargeCache = new WeakMap(), this.executionStack = [];
	            }
	          }, {
	            key: "_initBuffer",
	            value: function value() {
	              var e = this,
	                  t = this.recordingStore.getDataset(),
	                  n = this,
	                  r = !1;
	              this.buffer = new o.a(g({
	                writeKey: this.authTokenValue,
	                dataset: t,
	                apiHost: this.config.host,
	                proxy: this.config.host,
	                pendingWorkCapacity: h.a,
	                batchSizeTrigger: h.b,
	                maxResponseQueueSize: 1e3,
	                responseCallback: function responseCallback(t) {
	                  if (!r) {
	                    var o,
	                        i = v(t);

	                    try {
	                      for (i.s(); !(o = i.n()).done;) {
	                        var s = o.value;
	                        if (s.error) return void (s.error.message === p.MESSAGE_QUEUE_OVERFLOW ? e.recording && (e.warn("Active recording using too much memory, have to abort."), e.toggleRecording()) : (e.error(s), e.error(n.buffer.transmission._eventQueue.length), r = !0));
	                      }
	                    } catch (e) {
	                      i.e(e);
	                    } finally {
	                      i.f();
	                    }
	                  }
	                }
	              }, this.bufferOptions));
	            }
	          }, {
	            key: "compiledInLowDataMode",
	            get: function get() {
	              return "verbose" in this.config && !1 === this.config.verbose;
	            }
	          }, {
	            key: "_postNewSession",
	            value: function value() {
	              var e,
	                  t,
	                  n = this,
	                  r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
	                  o = r.sourceSessionId,
	                  i = r.sourceServiceId,
	                  s = r.sourceSessionTimestamp,
	                  a = r.sourceSideEffectId;
	              ("mock" !== (null === (e = this.bufferOptions) || void 0 === e ? void 0 : e.transmission) || Object(c.a)().fetchMockedForTest) && (a && (o ? t = {
	                sessionId: o,
	                sideEffectId: a
	              } : i && s && (t = {
	                serviceId: i,
	                sessionTimestamp: s,
	                sideEffectId: a
	              })), fetch("".concat(this.config.host, "/sessions/new"), {
	                headers: {
	                  "Content-Type": "application/json",
	                  Authorization: "Bearer ".concat(this.authTokenValue)
	                },
	                method: "POST",
	                body: JSON.stringify({
	                  recordingId: this.recordingStore.getRecordingId(),
	                  recordingName: this._getRecordingName(this.sourceFiles),
	                  serviceId: this.recordingStore.getServiceId(),
	                  sessionTimestamp: this.recordingStore.getSessionTimestamp(),
	                  link: t
	                })
	              }).then(function (e) {
	                return e.json();
	              }).then(function (e) {
	                var t = e.sessionId;
	                void 0 !== t && (n.recordingStore.setSessionId(t), n.buffer.dataset = t);
	              }).catch(function (e) {
	                n.error("CodeSee: unable to communicate with CodeSee server. You may need to refresh your browser.\nError: ", e);
	              }));
	            }
	          }, {
	            key: "_getRecordingName",
	            value: function value(e) {
	              var t,
	                  n = Object.keys(e);

	              if (n.length > 0) {
	                var r = n[0].split("|", 2);
	                2 === r.length && (t = r[0]);
	              }

	              return t;
	            }
	          }, {
	            key: "_sendSource",
	            value: function value(e) {
	              if (this.recording) {
	                var t = {
	                  moment: "source",
	                  eventId: this.eventUIDs.getUID(),
	                  details: e
	                },
	                    n = new a.a({
	                  raw: t
	                }, this.buffer.dataset, this.authTokenValue, this.config.host);
	                this.buffer.transmission.sendPresampledEvent(n);
	              }
	            }
	          }, {
	            key: "_maybeNavigateToCodeSee",
	            value: function value() {
	              var e = this;

	              if (this.remoteInserted && !this.canceled) {
	                this.log("Waiting for queued events to be sent to server.");
	                var t = this.config.host + "/data-flow/" + this.recordingId;
	                this.buffer.transmission.flush().then(function () {
	                  e.transmitting = !1, e.remoteInserted && e._updateRemoteStyle && e._updateRemoteStyle(), e.canceled || e.rootGlobal.document.defaultView.open(t, "_blank");
	                });
	              }
	            }
	          }, {
	            key: "_maybeStartRecording",
	            value: function value() {
	              var t,
	                  n = !1,
	                  r = "base",
	                  o = 2e3;
	              return "undefined" != typeof CODESEE_RECORD_ON_START && (n = !!CODESEE_RECORD_ON_START, "mock" === CODESEE_RECORD_ON_START && (r = "mock", o = 0)), !n && void 0 !== e && void 0 !== e.env && void 0 !== e.env.CODESEE_RECORD_ON_START && e.env.CODESEE_RECORD_ON_START && (n = !!e.env.CODESEE_RECORD_ON_START, "mock" === e.env.CODESEE_RECORD_ON_START && (r = "mock", o = 0)), "undefined" != typeof CODESEE_BATCH_SIZE_TRIGGER && (t = CODESEE_BATCH_SIZE_TRIGGER), this.recordingStore.isRecordingInProgress() && (this.log("Continuing Recording in ".concat(this.getVerboseDescription(), " mode")), n = !0), n && this.toggleRecording({
	                transmission: r,
	                batchSizeTrigger: t
	              }), o;
	            }
	          }, {
	            key: "log",
	            value: function value(e) {
	              this.rootGlobal.CodeSee && this.rootGlobal.CodeSee.orig_console_debug ? this.rootGlobal.CodeSee.orig_console_debug("%cCodeSee: ".concat(e), "color: purple") : console.log("%cCodeSee: ".concat(e), "color: purple");
	            }
	          }, {
	            key: "error",
	            value: function value(e) {
	              this.rootGlobal.CodeSee && this.rootGlobal.CodeSee.orig_console_error ? this.rootGlobal.CodeSee.orig_console_error("CodeSee: ".concat(e)) : console.error("CodeSee: ".concat(e));
	            }
	          }, {
	            key: "warn",
	            value: function value(e) {
	              this.rootGlobal.CodeSee && this.rootGlobal.CodeSee.orig_console_warn ? this.rootGlobal.CodeSee.orig_console_warn("CodeSee: ".concat(e)) : console.warn("CodeSee: ".concat(e));
	            }
	          }]) && S(n.prototype, r), t;
	        }();
	      }).call(this, n(98));
	    }, function (e, t, n) {

	      (function (t) {
	        function r(e) {
	          return e && "object" == typeof e && "default" in e ? e.default : e;
	        }

	        var o = n(0),
	            i = r(n(217)),
	            s = r(n(223)),
	            a = r(n(230)),
	            u = n(231),
	            c = Object.prototype.hasOwnProperty,
	            l = Object.prototype.toString,
	            f = Object.defineProperty,
	            p = Object.getOwnPropertyDescriptor,
	            h = function h(e) {
	          return "function" == typeof Array.isArray ? Array.isArray(e) : "[object Array]" === l.call(e);
	        },
	            d = function d(e) {
	          if (!e || "[object Object]" !== l.call(e)) return !1;
	          var t,
	              n = c.call(e, "constructor"),
	              r = e.constructor && e.constructor.prototype && c.call(e.constructor.prototype, "isPrototypeOf");
	          if (e.constructor && !n && !r) return !1;

	          for (t in e);

	          return void 0 === t || c.call(e, t);
	        },
	            v = function v(e, t) {
	          f && "__proto__" === t.name ? f(e, t.name, {
	            enumerable: !0,
	            configurable: !0,
	            value: t.newValue,
	            writable: !0
	          }) : e[t.name] = t.newValue;
	        },
	            y = function y(e, t) {
	          if ("__proto__" === t) {
	            if (!c.call(e, t)) return;
	            if (p) return p(e, t).value;
	          }

	          return e[t];
	        },
	            m = function e() {
	          var t,
	              n,
	              r,
	              o,
	              i,
	              s,
	              a = arguments[0],
	              u = 1,
	              c = arguments.length,
	              l = !1;

	          for ("boolean" == typeof a && (l = a, a = arguments[1] || {}, u = 2), (null == a || "object" != typeof a && "function" != typeof a) && (a = {}); u < c; ++u) if (null != (t = arguments[u])) for (n in t) r = y(a, n), a !== (o = y(t, n)) && (l && o && (d(o) || (i = h(o))) ? (i ? (i = !1, s = r && h(r) ? r : []) : s = r && d(r) ? r : {}, v(a, {
	            name: n,
	            newValue: e(l, s, o)
	          })) : void 0 !== o && v(a, {
	            name: n,
	            newValue: o
	          }));

	          return a;
	        },
	            g = function g() {
	          var e,
	              t,
	              n = Array.prototype.slice.call(arguments),
	              r = {};
	          return n.length ? 1 === n.length ? n[0] : (t = n.map(function (t) {
	            var n = "function" == typeof t ? t() : String(t || "");
	            if (!n) return "";
	            var o = s.parse(n, !0);
	            return !e && o && (e = o), m(r, o.query), o.pathname;
	          }).filter(function (e) {
	            return !!e;
	          }), delete e.search, e.query = r, e.pathname = a.join.apply(a, t).replace(new RegExp("\\" + a.sep, "g"), "/"), s.format(e)) : "";
	        };

	        const b = "undefined" != typeof window ? window : void 0 !== t ? t : void 0,
	              S = function S() {};

	        class w {
	          constructor(e) {
	            this.batches = ((e, t, n, r) => {
	              let o = Object.create(null);
	              return e.forEach(e => {
	                let i = t(e);
	                o[i] ? r(o[i], e) : o[i] = n(e);
	              }), o;
	            })(e, e => `${e.apiHost}_${e.writeKey}_${e.dataset}`, e => ({
	              apiHost: e.apiHost,
	              writeKey: e.writeKey,
	              dataset: e.dataset,
	              events: [e]
	            }), (e, t) => e.events.push(t));
	          }

	          encodeBatchEvents(e) {
	            let t = !0,
	                n = 0;
	            return {
	              encoded: "[" + e.reduce((e, r) => {
	                try {
	                  let o = JSON.stringify(r);
	                  n++;
	                  let i = e + (t ? "" : ",") + o;
	                  return t = !1, i;
	                } catch (t) {
	                  return r.encodeError = t, e;
	                }
	              }, "") + "]",
	              numEncoded: n
	            };
	          }

	        }

	        class E {
	          constructor(_ref) {
	            let {
	              timestamp: e,
	              apiHost: t,
	              postData: n,
	              writeKey: r,
	              dataset: o,
	              sampleRate: i,
	              metadata: s
	            } = _ref;
	            this.timestamp = e, this.apiHost = t, this.postData = n, this.writeKey = r, this.dataset = o, this.sampleRate = i, this.metadata = s;
	          }

	          sizeInBytes() {
	            let e = this.postData;
	            return "string" != typeof e && (e = JSON.stringify(this.postData)), e.length;
	          }

	          toJSON() {
	            let e = {};
	            return this.timestamp && (e.time = this.timestamp), this.sampleRate && (e.samplerate = this.sampleRate), this.postData && (e.data = this.postData), e;
	          }

	          toBrokenJSON() {
	            let e = [];
	            return this.timestamp && e.push('"time":' + JSON.stringify(this.timestamp)), this.sampleRate && e.push('"samplerate":' + JSON.stringify(this.sampleRate)), this.postData && e.push('"data":' + JSON.stringify(this.postData)), `{${e.join(",")}}`;
	          }

	        }

	        class _ {
	          constructor(e) {
	            this.constructorArg = e, this.events = [];
	          }

	          sendEvent(e) {
	            this.events.push(e);
	          }

	          sendPresampledEvent(e) {
	            this.events.push(e);
	          }

	          flush() {
	            return Promise.resolve();
	          }

	          reset() {
	            this.constructorArg = null, this.events = [];
	          }

	        }

	        class O {
	          sendEvent(e) {
	            console.log(JSON.stringify(e.toBrokenJSON()));
	          }

	          sendPresampledEvent(e) {
	            console.log(JSON.stringify(e.toBrokenJSON()));
	          }

	        }

	        class A {
	          sendEvent(e) {
	            console.log(JSON.stringify(e));
	          }

	          sendPresampledEvent(e) {
	            console.log(JSON.stringify(e));
	          }

	        }

	        class C {
	          sendEvent(e) {}

	          sendPresampledEvent(e) {}

	        }

	        class T {
	          constructor(e) {
	            this._responseCallback = S, this._batchSizeTrigger = 50, this._batchTimeTrigger = 100, this._maxConcurrentBatches = 6, this._pendingWorkCapacity = 1e4, this._timeout = 6e4, this._sendTimeoutId = -1, this._eventQueue = [], this._eventQueueBytes = 0, this._eventBatches = [], this._eventBatchesBytes = [], this._batchCount = 0, "function" == typeof e.responseCallback && (this._responseCallback = e.responseCallback), "number" == typeof e.batchSizeTrigger && (this._batchSizeTrigger = Math.max(e.batchSizeTrigger, 1)), "number" == typeof e.batchTimeTrigger && (this._batchTimeTrigger = e.batchTimeTrigger), "number" == typeof e.maxConcurrentBatches && (this._maxConcurrentBatches = e.maxConcurrentBatches), "number" == typeof e.pendingWorkCapacity && (this._pendingWorkCapacity = e.pendingWorkCapacity), "number" == typeof e.timeout && (this._timeout = e.timeout), this._userAgentAddition = e.userAgentAddition || "", this._proxy = e.proxy, this._randomFn = Math.random;
	          }

	          _droppedCallback(e, t) {
	            this._responseCallback([{
	              metadata: e.metadata,
	              error: new Error(t)
	            }]);
	          }

	          sendEvent(e) {
	            this._shouldSendEvent(e) ? this.sendPresampledEvent(e) : this._droppedCallback(e, "event dropped due to sampling");
	          }

	          sendPresampledEvent(e) {
	            if (this._aborted) return;
	            const t = e.sizeInBytes();
	            if (this._totalQueuedBytes() + t > this._pendingWorkCapacity) return this._aborted = !0, void this._droppedCallback(e, o.MESSAGE_QUEUE_OVERFLOW);
	            this._eventQueue.length > 0 && this._eventQueueBytes + t > this._batchSizeTrigger && (this._prepareBatch(), this._tryToSendBatch()), this._eventQueue.push(e), this._eventQueueBytes += t, this._eventQueueBytes >= this._batchSizeTrigger ? (this._prepareBatch(), this._tryToSendBatch()) : this._ensureSendTimeout();
	          }

	          flush() {
	            return 0 === this._eventQueue.length && 0 === this._eventBatches.length && 0 === this._batchCount ? Promise.resolve() : new Promise(e => {
	              this.flushCallback = () => {
	                this.flushCallback = null, e();
	              };
	            });
	          }

	          _totalQueuedBytes() {
	            return this._eventBatchesBytes.reduce((e, t) => e + t, this._eventQueueBytes);
	          }

	          _prepareBatch() {
	            this._eventBatches.push(this._eventQueue), this._eventBatchesBytes.push(this._eventQueueBytes), this._eventQueue = [], this._eventQueueBytes = 0;
	          }

	          _tryToSendBatch() {
	            if (6 === this._batchCount) return;
	            this._clearSendTimeout(), this._batchCount++, this._eventBatchesBytes.shift();
	            let e = new w(this._eventBatches.shift());

	            const t = () => {
	              this._batchCount--, this._eventBatches.length > 0 ? this._tryToSendBatch() : this._eventQueue.length > 0 ? this._ensureSendTimeout() : 0 === this._batchCount && this.flushCallback && this.flushCallback();
	            };

	            let n = Object.keys(e.batches).map(t => e.batches[t]);
	            var r, o;
	            (r = n, o = t => {
	              let n,
	                  r = g(t.apiHost, "/1/batch", t.dataset),
	                  o = i.post(r);
	              n = Promise.resolve({
	                req: o
	              });
	              let {
	                encoded: s,
	                numEncoded: a
	              } = e.encodeBatchEvents(t.events);
	              return n.then(_ref2 => {
	                let {
	                  req: e
	                } = _ref2;
	                return new Promise(n => {
	                  if (0 === a) return this._responseCallback(t.events.map(e => ({
	                    metadata: e.metadata,
	                    error: e.encodeError
	                  }))), void n();

	                  let r = "libhoney-js/0.33.4",
	                      o = this._userAgentAddition.trim();

	                  o && (r = "libhoney-js/0.33.4 " + o);
	                  let i = Date.now();
	                  e.set("Authorization", "Bearer " + t.writeKey).set("X-Honeycomb-UserAgent", r).type("json").timeout(this._timeout).send(s).end((e, r) => {
	                    let o = Date.now();
	                    if (e) this._responseCallback(t.events.map(t => ({
	                      status_code: t.encodeError ? void 0 : e.status,
	                      duration: o - i,
	                      metadata: t.metadata,
	                      error: t.encodeError || e
	                    })));else {
	                      let e = JSON.parse(r.text),
	                          n = 0;

	                      this._responseCallback(t.events.map(t => {
	                        if (t.encodeError) return {
	                          duration: o - i,
	                          metadata: t.metadata,
	                          error: t.encodeError
	                        };
	                        {
	                          let r = e[n++];
	                          return {
	                            status_code: r.status,
	                            duration: o - i,
	                            metadata: t.metadata,
	                            error: r.err
	                          };
	                        }
	                      }));
	                    }
	                    n();
	                  });
	                });
	              });
	            }, r.reduce((e, t) => e.then(() => o(t)), Promise.resolve())).then(t).catch(t);
	          }

	          _shouldSendEvent(e) {
	            let {
	              sampleRate: t
	            } = e;
	            return t <= 1 || this._randomFn() < 1 / t;
	          }

	          _ensureSendTimeout() {
	            -1 === this._sendTimeoutId && (this._sendTimeoutId = b.setTimeout(() => {
	              this._prepareBatch(), this._tryToSendBatch();
	            }, this._batchTimeTrigger));
	          }

	          _clearSendTimeout() {
	            -1 !== this._sendTimeoutId && (b.clearTimeout(this._sendTimeoutId), this._sendTimeoutId = -1);
	          }

	        }

	        function x(e, t) {
	          e && (e instanceof Map ? e.forEach(t) : Object.getOwnPropertyNames(e).forEach(n => t(e[n], n)));
	        }

	        class I {
	          constructor(e, t, n) {
	            this.data = Object.create(null), this.metadata = null, this.apiHost = "", this.writeKey = "", this.dataset = "", this.sampleRate = 1, this.timestamp = null, x(t, (e, t) => this.addField(t, e)), x(n, (e, t) => this.addField(t, e())), this._libhoney = e;
	          }

	          add(e) {
	            return x(e, (e, t) => this.addField(t, e)), this;
	          }

	          addField(e, t) {
	            return void 0 === t ? (this.data[e] = null, this) : (this.data[e] = t, this);
	          }

	          addMetadata(e) {
	            return this.metadata = e, this;
	          }

	          send() {
	            this._libhoney.sendEvent(this);
	          }

	          sendPresampled() {
	            this._libhoney.sendPresampledEvent(this);
	          }

	        }

	        class k {
	          constructor(e, t, n) {
	            this._libhoney = e, this._fields = Object.create(null), this._dynFields = Object.create(null), this.apiHost = "", this.writeKey = "", this.dataset = "", this.sampleRate = 1, x(t, (e, t) => this.addField(t, e)), x(n, (e, t) => this.addDynamicField(t, e));
	          }

	          add(e) {
	            return x(e, (e, t) => this.addField(t, e)), this;
	          }

	          addField(e, t) {
	            return void 0 === t ? (this._fields[e] = null, this) : (this._fields[e] = t, this);
	          }

	          addDynamicField(e, t) {
	            this._dynFields[e] = t;
	          }

	          sendNow(e) {
	            let t = this.newEvent();
	            t.add(e), t.send();
	          }

	          newEvent() {
	            let e = new I(this._libhoney, this._fields, this._dynFields);
	            return e.apiHost = this.apiHost, e.writeKey = this.writeKey, e.dataset = this.dataset, e.sampleRate = this.sampleRate, e;
	          }

	          newBuilder(e, t) {
	            let n = new k(this._libhoney, this._fields, this._dynFields);
	            return x(e, (e, t) => n.addField(t, e)), x(t, (e, t) => n.addDynamicField(t, e)), n.apiHost = this.apiHost, n.writeKey = this.writeKey, n.dataset = this.dataset, n.sampleRate = this.sampleRate, n;
	          }

	        }

	        const j = Object.freeze({
	          apiHost: "https://api.honeycomb.io/",
	          proxy: void 0,
	          sampleRate: 1,
	          transmission: "base",
	          batchSizeTrigger: 50,
	          batchTimeTrigger: 100,
	          maxConcurrentBatches: 10,
	          pendingWorkCapacity: 1e4,
	          maxResponseQueueSize: 1e3,
	          timeout: 6e4,
	          disabled: !1,
	          userAgentAddition: ""
	        });

	        class R extends u.EventEmitter {
	          constructor(e) {
	            super(), this._options = Object.assign({
	              responseCallback: this._responseCallback.bind(this)
	            }, j, e), this._transmission = P(this._options.transmission, this._options), this._usable = null !== this._transmission, this._builder = new k(this), this._builder.apiHost = this._options.apiHost, this._builder.writeKey = this._options.writeKey, this._builder.dataset = this._options.dataset, this._builder.sampleRate = this._options.sampleRate, this._responseQueue = [];
	          }

	          _responseCallback(e) {
	            const [t, n] = [this._responseQueue, this._options.maxResponseQueueSize];
	            this._responseQueue = function (e, t, n) {
	              if (e.length >= n) return e.slice(0, n);

	              if (e.length + t.length > n) {
	                const r = n - e.length,
	                      o = t.slice(0, r);
	                return e.concat(o);
	              }

	              return e.concat(t);
	            }(t, e, n), this.emit("response", this._responseQueue);
	          }

	          get transmission() {
	            return this._transmission;
	          }

	          set apiHost(e) {
	            this._builder.apiHost = e;
	          }

	          get apiHost() {
	            return this._builder.apiHost;
	          }

	          set writeKey(e) {
	            this._builder.writeKey = e;
	          }

	          get writeKey() {
	            return this._builder.writeKey;
	          }

	          set dataset(e) {
	            this._builder.dataset = e;
	          }

	          get dataset() {
	            return this._builder.dataset;
	          }

	          set sampleRate(e) {
	            this._builder.sampleRate = e;
	          }

	          get sampleRate() {
	            return this._builder.sampleRate;
	          }

	          sendEvent(e) {
	            let t = this.validateEvent(e);
	            t && this._transmission.sendEvent(t);
	          }

	          sendPresampledEvent(e) {
	            let t = this.validateEvent(e);
	            t && this._transmission.sendPresampledEvent(t);
	          }

	          validateEvent(e) {
	            if (!this._usable) return null;
	            let t,
	                n = e.timestamp || Date.now();
	            if ("string" != typeof n && "number" != typeof n || (n = new Date(n)), "object" != typeof e.data || null === e.data) return console.error(".data must be an object"), null;

	            try {
	              t = JSON.parse(JSON.stringify(e.data));
	            } catch (e) {
	              return console.error("error cloning event data: " + e), null;
	            }

	            let r = e.apiHost;
	            if ("string" != typeof r || "" === r) return console.error(".apiHost must be a non-empty string"), null;
	            let o = e.writeKey;
	            if ("string" != typeof o || "" === o) return console.error(".writeKey must be a non-empty string"), null;
	            let i = e.dataset;
	            if ("string" != typeof i || "" === i) return console.error(".dataset must be a non-empty string"), null;
	            let s = e.sampleRate;
	            if ("number" != typeof s) return console.error(".sampleRate must be a number"), null;
	            let a = e.metadata;
	            return new E({
	              timestamp: n,
	              apiHost: r,
	              postData: t,
	              writeKey: o,
	              dataset: i,
	              sampleRate: s,
	              metadata: a
	            });
	          }

	          add(e) {
	            return this._builder.add(e), this;
	          }

	          addField(e, t) {
	            return this._builder.addField(e, t), this;
	          }

	          addDynamicField(e, t) {
	            return this._builder.addDynamicField(e, t), this;
	          }

	          sendNow(e) {
	            return this._builder.sendNow(e);
	          }

	          newEvent() {
	            return this._builder.newEvent();
	          }

	          newBuilder(e, t) {
	            return this._builder.newBuilder(e, t);
	          }

	          flush() {
	            const e = this._transmission;
	            return this._transmission = P(this._options.transmission, this._options), e.flush();
	          }

	        }

	        function P(e, t) {
	          if (t.disabled) return null;

	          if ("string" == typeof e) {
	            return new ((e => {
	              switch (e) {
	                case "base":
	                  return T;

	                case "mock":
	                  return _;

	                case "null":
	                  return C;

	                case "worker":
	                  return console.warn("worker implementation not ready yet.  using base implementation"), T;

	                case "writer":
	                  return console.warn("writer implementation is deprecated.  Please switch to console implementation."), O;

	                case "console":
	                  return A;

	                default:
	                  throw new Error(`unknown transmission implementation "${e}".`);
	              }
	            })(e))(t);
	          }

	          if ("function" != typeof e) throw new Error(".transmission must be one of 'base'/'worker'/'mock'/'writer'/'console'/'null' or a constructor.");

	          try {
	            return new e(t);
	          } catch (n) {
	            if (e === T) throw new Error("unable to initialize base transmission implementation.", n);
	            console.warn("failed to initialize transmission, falling back to base implementation.");

	            try {
	              return new T(t);
	            } catch (e) {
	              throw new Error("unable to initialize base transmission implementation.", e);
	            }
	          }
	        }

	        e.exports = R;
	      }).call(this, n(29));
	    }, function (e, t, n) {

	      Object.defineProperty(t, "__esModule", {
	        value: !0
	      });
	      var r = n(0);

	      var o = {
	        x: void 0,
	        y: void 0
	      },
	          i = function () {
	        function e(e, t, n) {
	          var r = this;
	          this.iframe = e, this.rootDocument = t, this.onClick = n, this.iframe.addEventListener("load", function () {
	            r.iframe.contentDocument.onclick = r.onClickOrDragStart.bind(r), r.iframe.contentDocument.onmousemove = r.onMouseMove.bind(r), r.iframe.contentDocument.onmousedown = r.onMouseDown.bind(r);
	          });
	        }

	        return e.prototype.onMouseDown = function () {
	          var e = this.rootDocument.getElementById("codesee-remote-control");
	          this.mouseDownPos = e.getBoundingClientRect();
	        }, e.prototype.onClickOrDragStart = function () {
	          var e = this.rootDocument.getElementById("codesee-remote-control").getBoundingClientRect();
	          void 0 === this.mouseDownPos.x || void 0 === this.mouseDownPos.y || Math.abs(e.x - this.mouseDownPos.x) > 10 || Math.abs(e.y - this.mouseDownPos.y) > 10 ? this.mouseDownPos = o : (this.mouseDownPos = o, this.onClick());
	        }, e.prototype.onMouseMove = function (e) {
	          if (1 & e.buttons) {
	            var t = e.clientX,
	                n = e.clientY,
	                r = this.rootDocument.getElementById("codesee-remote-control"),
	                o = r.getBoundingClientRect(),
	                i = o.y + n - 40,
	                s = o.x + t - 40,
	                a = this.rootDocument.defaultView.innerWidth,
	                u = this.rootDocument.defaultView.innerHeight,
	                c = Math.min(s / a, 1),
	                l = Math.min(i / u, 1);
	            r.style.top = 100 * l + "%", r.style.left = 100 * c + "%";
	          }
	        }, e;
	      }(),
	          s = function s(e, t, n) {
	        if (t !== n) {
	          var r = e.contentDocument.getElementById(t);
	          r && r.remove();
	        }
	      },
	          a = function a(e, t) {
	        var n = e.getElementById("codesee-remote-control"),
	            r = t.getAttribute("id");
	        s(n, "codesee-logo-icon", r), s(n, "codesee-recording-icon", r), s(n, "codesee-login-icon", r), s(n, "codesee-transmitting-icon", r), n.contentDocument.body.appendChild(t);
	      };

	      var u, c, l;
	      !function (e) {
	        e.BottomLeft = "BottomLeft", e.BottomRight = "BottomRight", e.TopLeft = "TopLeft", e.TopRight = "TopRight";
	      }(u || (u = {})), function (e) {
	        e.Closed = "closed", e.JustOpened = "justOpened", e.Hovering = "hovering";
	      }(c || (c = {})), function (e) {
	        e.AnchorClicked = "anchorClicked", e.CellMouseLeave = "cellMouseLeave", e.MenuMouseEnter = "menuMouseEnter", e.MenuMouseLeave = "menuMouseLeave", e.MenuItemClicked = "menuItemClicked";
	      }(l || (l = {}));

	      var f = function () {
	        function e(e, t, n, r) {
	          var o = this;
	          this.root = t, this.iframe = e, this.menuItems = r, this.menuState = c.Closed, this.enabled = !0, this.initialStyles = null, this.menu = document.createElement("div"), this.menu.setAttribute("class", "menuPopup"), this.menu.setAttribute("id", "recordingMenu"), this._attachChildren(), this.menu.addEventListener("mouseenter", this.onMenuMouseEnter.bind(this)), this.menu.addEventListener("mouseleave", this.onMenuMouseLeave.bind(this)), this.iframe.addEventListener("load", function () {
	            e.contentDocument.body.addEventListener("mouseleave", o.onCellMouseLeave.bind(o));
	          });
	        }

	        return e.prototype._attachChildren = function () {
	          var e = this,
	              t = this;
	          this.menuItems.forEach(function (n) {
	            var r = n.text,
	                o = n.id,
	                i = n.onClick,
	                s = e.root.createElement("div");
	            s.setAttribute("class", "menuItem"), s.setAttribute("id", o), s.addEventListener("click", function (e) {
	              e.stopPropagation(), t.apply(l.MenuItemClicked), i();
	            }), s.innerText = r, e.menu.appendChild(s);
	          });
	        }, e.prototype.onMenuMouseEnter = function () {
	          this.apply(l.MenuMouseEnter);
	        }, e.prototype.onMenuMouseLeave = function () {
	          this.apply(l.MenuMouseLeave);
	        }, e.prototype.onCellMouseLeave = function () {
	          this.apply(l.CellMouseLeave);
	        }, e.prototype.onClick = function () {
	          this.apply(l.AnchorClicked);
	        }, e.prototype.disable = function () {
	          this.enabled = !1;
	        }, e.prototype.enable = function () {
	          this.enabled = !0;
	        }, e.prototype._getQuadrant = function () {
	          var e = this.iframe.style,
	              t = e.left,
	              n = e.top,
	              r = parseInt(t, 10),
	              o = parseInt(n, 10);
	          return isNaN(r) || r >= 50 && o <= 50 ? u.TopRight : r >= 50 && o >= 50 ? u.BottomRight : r <= 50 && o >= 50 ? u.BottomLeft : u.TopLeft;
	        }, Object.defineProperty(e.prototype, "isEnabled", {
	          get: function get() {
	            return this.enabled;
	          },
	          enumerable: !1,
	          configurable: !0
	        }), e.prototype.apply = function (e) {
	          var t = this.menuState;

	          switch (e) {
	            case l.AnchorClicked:
	              this.menuState === c.Closed ? this.menuState = c.JustOpened : this.menuState = c.Closed;
	              break;

	            case l.CellMouseLeave:
	              this.menuState === c.JustOpened && (this.menuState = c.Closed);
	              break;

	            case l.MenuMouseEnter:
	              this.menuState === c.JustOpened && (this.menuState = c.Hovering);
	              break;

	            case l.MenuMouseLeave:
	            case l.MenuItemClicked:
	              this.menuState = c.Closed;
	          }

	          t !== this.menuState && this.updateDom();
	        }, e.prototype.setMenuPositionByQuadrant = function () {
	          var e = this.iframe.style,
	              t = e.left,
	              n = e.top,
	              r = this.menu.getBoundingClientRect(),
	              o = this.iframe.getBoundingClientRect();

	          switch (this.iframe.style.width = r.width + "px", this.iframe.style.height = r.height + "px", this._getQuadrant()) {
	            case u.TopRight:
	              this.iframe.style.left = "calc(" + t + " - " + (r.width - o.width) + "px)";
	              break;

	            case u.TopLeft:
	              break;

	            case u.BottomRight:
	              this.iframe.style.left = "calc(" + t + " - " + (r.width - o.width) + "px)", this.iframe.style.top = "calc(" + n + " - " + (r.height - o.height) + "px)";
	              break;

	            case u.BottomLeft:
	              this.iframe.style.top = "calc(" + n + " - " + (r.height - o.height) + "px)";
	          }
	        }, e.prototype.updateDom = function () {
	          switch (this.menuState) {
	            case c.Closed:
	              this.iframe.contentDocument.body.removeChild(this.menu), this.iframe.style.width = this.initialStyles.width, this.iframe.style.height = this.initialStyles.height, this.iframe.style.left = this.initialStyles.left, this.iframe.style.top = this.initialStyles.top;
	              break;

	            case c.JustOpened:
	              this.initialStyles = {
	                left: this.iframe.style.left,
	                top: this.iframe.style.top,
	                width: this.iframe.style.width,
	                height: this.iframe.style.height
	              }, this.iframe.contentDocument.body.appendChild(this.menu), this.setMenuPositionByQuadrant();
	          }
	        }, e;
	      }(),
	          p = function p(e) {
	        var t = e.createElement("iframe");
	        return t.setAttribute("id", "codesee-remote-control"), t.setAttribute("name", "codesee-remote-control"), t.style.cssText = d + v, t;
	      },
	          h = function h(e, t) {
	        var n = e.createElement("iframe");
	        return n.setAttribute("id", "codesee-auth-proxy"), n.setAttribute("name", "codesee-auth-proxy"), n.setAttribute("src", t + "/auth-proxy"), n.style.cssText = "\n      display: none;\n      width: 0;\n      height: 0;\n      border: 0;\n    ", n;
	      },
	          d = "\n  display: block !important;\n  position: fixed !important;\n  z-index: 2147483646 !important;\n  margin: 0 !important;\n  padding: 0 !important;\n  border: none !important;\n  top: 0 !important;\n  right: 0 !important;\n  left: calc(100% - 80px);\n  ",
	          v = "\n  width: 80px !important;\n  height: 80px !important;\n",
	          y = '\nbody {\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;\n}\n';

	      t.baseStyles = y, t.iframeBaseSizes = v, t.iframeBaseStyles = d, t.insertCodeseeRemote = function (e, t, n) {
	        var o = e.getElementById("codesee-remote-control"),
	            s = e.getElementById("codesee-auth-proxy");

	        if (!o || !s) {
	          o || (o = p(e)), s || (s = h(e, t.config.host));

	          var u = function (e) {
	            var t = e.createElement("img");
	            return t.setAttribute("id", "codesee-logo-icon"), t.setAttribute("src", "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMwIDYwQzQ2LjU2ODUgNjAgNjAgNDYuNTY4NSA2MCAzMEM2MCAxMy40MzE1IDQ2LjU2ODUgMCAzMCAwQzEzLjQzMTUgMCAwIDEzLjQzMTUgMCAzMEMwIDQ2LjU2ODUgMTMuNDMxNSA2MCAzMCA2MFoiIGZpbGw9IiMzQTI0OTYiLz4KPHBhdGggZD0iTTI1LjMzNjUgMTguNTg0NUMyMC44NjU0IDIwLjUwNzYgMTUuNDMyNyAyNC42OTAzIDEwIDMwLjAyNjhDMTUuNDMyNyAzNS4zNjM0IDIwLjkxMzUgMzkuNTk0MiAyNS4zODQ2IDQxLjUxNzJMMjcuMTYzNSAzNi45NDk5QzI0LjM3NSAzNS43NDggMjAuNzIxMiAzMy4yNDggMTcuMTYzNSAzMC4wNzQ5QzIwLjcyMTIgMjYuOTAxOCAyNC4zNzUgMjQuMzUzOCAyNy4xNjM1IDIzLjI0OEwyNS4zMzY1IDE4LjU4NDVaIiBmaWxsPSIjQzRCREUwIi8+CjxwYXRoIGQ9Ik0zNC42NjM1IDE4LjU4NDVMMzIuODM2NSAyMy4yNDhDMzUuNjI1IDI0LjM1MzggMzkuMjc4OSAyNi45MDE4IDQyLjgzNjUgMzAuMDc0OUMzOS4yNzg5IDMzLjI0OCAzNS42MjUgMzUuNzQ4IDMyLjgzNjUgMzYuOTQ5OUwzNC42MTU0IDQxLjUxNzJDMzkuMDg2NSAzOS41OTQyIDQ0LjU2NzMgMzUuMzYzNCA1MCAzMC4wMjY4QzQ0LjU2NzMgMjQuNjkwMyAzOS4xMzQ2IDIwLjUwNzYgMzQuNjYzNSAxOC41ODQ1WiIgZmlsbD0iI0ZBRkFGQiIvPgo8cGF0aCBkPSJNMzAgMzMuOTY5MUMzMi4wOTc2IDMzLjk2OTEgMzMuNzk4MSAzMi4yNjg3IDMzLjc5ODEgMzAuMTcxMUMzMy43OTgxIDI4LjA3MzQgMzIuMDk3NiAyNi4zNzMgMzAgMjYuMzczQzI3LjkwMjQgMjYuMzczIDI2LjIwMTkgMjguMDczNCAyNi4yMDE5IDMwLjE3MTFDMjYuMjAxOSAzMi4yNjg3IDI3LjkwMjQgMzMuOTY5MSAzMCAzMy45NjkxWiIgZmlsbD0iI0ZBRkFGQiIvPgo8L3N2Zz4K"), t.style.cssText = "\n    align-self: center;\n    user-drag: none;\n    user-select: none;\n    -moz-user-select: none;\n    -webkit-user-drag: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n    cursor: pointer;\n    width: 60px;\n    height: 60px;\n    border-radius: 50%;\n    box-shadow: rgb(0 0 0 / 15%) 0px 5px 7px;\n  ", t;
	          }(e),
	              c = function (e) {
	            var t = e.createElement("img");
	            return t.setAttribute("id", "codesee-login-icon"), t.setAttribute("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE8AAABPCAYAAACqNJiGAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABIQSURBVHgB7VwLeBTluf5m9r6byyYkJIFAQogVOXIzYOJpOUZqFapSrQftqQ9GOO0xHhAQe5OCgFpL60OrgFgugmhppUFRRKUqNRYbwiUX8RJok5CQOwm57ya7O5d+378zm012A4HsJiH4Ps//7Mzsv5OZd97v8n//P+FgEJGe+HurQ6NNl2WYChyfwOGnDGCVOdnKAWdV+8kgN3My1wwclOHxZlkWP+M4KJR1QmHuqcfKYJDAwQAjLXljOifxdyNJ38O/ngj9BBJeKCORwEm7cosfzYYBxICQl5b4UiLw0kOoqKXeigoCyrBlg8ivzS17pAyCjKCSRyoDmV+DmzfDwOMV0CGJp4JHYlDIY0rTSDtxMx0GH0EjkYcAQpZlLi35xTWyRiyAoUEc4SFwSWfYdWFkCiQCpTzuxoTnEjUa85vovKfC0EWZJNhnHSv/6RkIAAKhPC41adNSTmvKH+LEERI5rTk/NWnzMrIS6Cf6ewIuLWnjaszRVsOVBg7W5hYvWguURl72Kfrxu7TxmzAocBlwxULelVuyeAFcJoGXbbZXPnEELsN9H5hrX0YwuRzl8fgHd1z5xHnDo0C209dfXary+NSkDauHF3EELgOD3hrauhQF9lV5TNap4zct4zn+dzBcwcFyDCLPQx/V12fyUpJ/m6SVzSeCPDYdVCBjzRpOnJ5TvKSUxMJx3AVJ7IvZEsG8TrJ8NJyJI+CNWiWJfwM3+YsRR7gYeYy4m8ZTLtf/8tEVAY6bkkr3i/d9Mf93QbOlLHz62OeSdHpLMVxdaOGgZfqRkhWluC311ulCykPlcrxWb7zyRg/9R7gkh70MbvX1KjC/X9APEDA1/ulkoyHyn3CVQpAd3zlRuvxv0Iv6/CqPmEtPT9cYDOGr4CqGBvSrUlJSNNCLyHo126az6UkcaObDVQzU0H8JTXeNmzdvnl+e/B3kiG0jF7kSvgYYuIgH6+vrSXk+6utJHktN8vLyNDjVNxjzDkMOPGgXZ2dna9esWeNDHudnX3tj4rpZvCb0IAwSLBYdjBhpgYhII/AaHmztTqgsawG73QWDAafYNju/7BeHMJAKFEhVaHv0c8uTNw24r4uJDYHvzL0Gps6Ig5tuTgCe7/5cRVGCwmPV8OnH5XAkuxzKS5thoKDjjXPxIxuJo6jribzeV8hMNi4uzpBgXpGLm5NgAJA2cwzMz7wBbkgdfUm/+7KwDva8chI+PPAvCD6ks7klj16HGYgTTVgEpXDgIQ9tmsemmTj28WvCdElfQpARHWuBJ5/7Nky/Kd5zrKmxA/bv+QqO51RCeUkTtLQ4QBZlsI4wweixYTBzViLMmpMMcfGhnt9UoDkvzdgPNVVtEEw0dOaMKa7aXYebAvQkD8EnJyfrQlwP3mvUjtgNQQKZ4/z/mwYPPpICZvRthOP/qIBdf8iH/NzqPtXTpqWOgrnzroPZd1/rObZ7WwFsff4YOB0iBAOdQvMDzdy2N8vKypygmK4n2mIuwxUXF/NazjQZgoSYuBDYvvdeyPxJGiOuurIVFn5/LyzJeAfyjlT1uRBZcLQa1v7kENx36274V9F5duyBH0+DV9+5H2JGhUAwoNUYJyNxPPEEiuhU8risrCzaxuCmDQp5o8aEwguv3AXXTR7JSHptSz7Mv2MPFJ08161feIQJxn8j0uf3lhC9z3Ey2Yy5e2DL746CIEiQkGSFl/50DyQmR0CgwQM/lj5KS0uJJ9l9rAvEJg5FNGEQYExJiYOX35gHCeMjmNoyf7APNj+XC3Zb99SDlLn1L/fAhl1zIT6h6zLI1J/ddDv8fsddkHRNdwJJrK9szmMqJL9H/vA1VOC9D1wPgYVmUkREhAZzYF/lgYc8SIAAYiIqbd0f5oAVcza6ucUPvA0n82p9+pEZr/zNLBg7zgpmVNmoMeFd37H9MBZk1m+/A8Ykhvv8vqayDRb98C32cLQ6Hh578lswZXocBAqYpoQ3NTURX93JwyirbmOxmA+Y8uITwmHDq3PBGmGEM/9shMz73/QbFSMiTfDiH78H0/8zHlqaOmHx/Lfg2KcVnu/bWx3w8P37oPj0eYgdHYrq/D5MnDTS5zx07oX37IXcv58FDSbX5CZuunksBAJITHhoaKhf8tQDaCBcQMgjE9z02lzmq6rOtkDmD/fBuVqbT7+QMANsxH4TkIz2NicsfWg/5nDnfPo1Nthh+cJ3GUFWJHvzn++GCddH+/Qj8h//0btw9HAFGIxa+PWLs9HUA+EDubC2tjYWFzDfY3wx8rAQ0I3RQOC3aKoxo0KhDXO1RWiqrc0Onz5Gkxa2vH4PjL92BNv/5aN/hdNfNvR6zvq6dvj//3kLGupsbmI2z4aRaMo9IUkyPLHoIJyvt7N+67ffCaGhBggAeKWxoMdIQzlS9OAsFosGAoT9WUXsMzTcALfcPt5vn84OAbI/KPXsz/hm/EXPO2FSNESMMLNtSlOaGjr89ouOsUAkJteEY59WQlubAwIAJjAcZZAPZAECKH/BD63L5dKPjpzzMJpuvx8TpSAGvYY57dSZY8Fmc8IXBXU+/fJzq9gV0fBscorbwVMe5w/kv55+4TbQ43nJ/61a+gEz9Z6goEO+llzCV5+fg9XLPgCXS4L+QW5tcn6yCTmiFIFOJqpKo089tfiI2RlcgIJGPg7kKeei9CJtpttx+yMmH49JmKel4FCNSNTpeTiRU9WtDyNuw21gNutwRFLJ/B/5t54g9T6/404YEW2Gr/ABLsME3GbrfzVGBrHhTN3+bVFRUU673S6g2cqePA8PutN7Tm6FAEFEQtatyIbC427CfrRkBixYNN1v352Yq+3YdIJtZ2SmwM23JXm+I9Nfs/5WLFXp4avP6hTF+Zrh7XO/Ab/CfDDMimkRpiw/z3wvUOYKsiRVeu97zJYqxyUlJTTQ1MdZZ83gOf1ECBBorPn+vtNgMulg0g2xqK7RMGlaDHx2osbH5FQTFgUZtj1/FNTRGp2DHoRM6yH+9wCr73mDAs/Dj6fCkhXfBINBy869bMEBFjACBUl2FVU3f7DPbDa7FOVJ3smxEVvItMRnnjBoIpZAEPDjZTfCwsVu5ZHJrVv1CWQfLPHpZ0LT7PBT+CST7VkQpUhNow/yc4S/vV8Cqx/7kA3XAgmH2LShoGzlr3GznXaxCUx5mLfwGDSoMKqPskyO1mtH3AFBACmrFvO0a6+PQp9kgVu/m8xuuqaitZtKhF6cu7fTpzJVJqpt5bpZLO9zdAqw4dl/wMZ1OSxVCTRszupdDW1HitC9Cag8l+w1oUvEUYS1RIWnxCdHLcyDICIW87/lOHyaees4z7FTX9TDjo0nICe7DKvG/m+exriTU2Lhvowp8K1vJ4JO53bZxUUNsHLph1hdboJgobblYHpZwzunQFEeK8mDMrIAhTxsoanjXjjM8dpREGTMmjMeHl6e6jE5gsspQhGmF5XlLahGyuFkCMEEl6oyE6fEQGhYVxZVhgXT3dsL4L03TgdFbSpEyXn6+JnHvoubNLZUzVYmxck4PKPGchfad0lth/R8RNDnMcg/UZt24yi4878nsCoxOX/K99Sczx/+/tEZeJsqzjj+7X/+dnFIcidl/PR06I8RVzSklb0ngNQvBbvj7CG9NmLAJoEKMB+ktmX9UfgPjMQ0zh2DRYXQcCNTFAWXJhzbUmKcg5M/gYyifYG9s2wfuIUlYbVdVgop3WbP5MjISKmxsVE6Vbv1WOr4jW04jRYKA4hzOGY9d7AUPj5YCkMF6Nqqi2q3HAOFPKy2k8i6iqEkQfqCiFM6iQ5n/R/ha4Ag2Y+DwonSPM7VM8LAdAWULwWDwSCct+W8DV8DqlsPvYQfIhZPBJyWVedtu5XhZawUkD0zn+dwOFwVjR9VSGJHUFOWoQ6n2PxODfJgMplcWMsTUVQe4gjdSlBotupoQ4MddXptdL1ZHz8XrlJUNB943CXXNHQicNfR3NzsmXYk9Fzoo/o8WpPhKq579ejVqj6n0HSgtunjCuIBd9XmCRYEb/LULwScJXIpPxLOtry7WgYpuNPxQxBVrR9uxQ8nis5FfCgurVtS2VN5jEC9Xi9oNBqSqJPY73DVvQ5XEeyumm2N7Tk0A0UCcmq1WhFTlG7+juCPPIkiS3t7uwsdJQ1DnCfPPrNFkjoHYkXNoANLTzV4v1uxYMzuHZurvr6e1qdclDya2KBEUIyJiXGS+jBwOHU6nVDW8NbP0HzbYRgDq8Xt5Y1vPAKK4nBOh1kfNpF46dnfhzxl8Z6MqhNRrk6e5514zHGu7fBZu7NiOwxjtDnKX2605Vag2yLVOWw2myMxMZGNLPy9EdTbVCNbIYpJoa6mpsZsNBpDJEmyOJ1O86QxKzIt+tELYZjB7qx++WTFr7bgJpVyyMJokpkG0U5lRagPeb2thqeOIhJHtk4RpxOJYz7g84pntzqExvdgGMEhnH8fiSOrIhOlnK4Tx/mOiRMnkvmKvb2H1uurBFQpnTdvHkmWTuBQT0p/oKB81dP0B2EYgO6joPzJp8DrHsPDwx04YHCNHDnSJz3xRq8rBJRXJtUZcpqWNCuNFsDRfIdxWsJTKw3aEXPgCgUR93nVU88IgkDEkYnalMZEAl6rQP2hV+UpgUNSiqSkvs6QkBA6qV11qPjEnrE5K3fCFQi6brz+p4k4vJ9O9Ot0b+Tv6N6YufbrrUcVaL6agoICLaYwVAOnNQxUrjdhCmPEP2CYEPvoDyyGpAVY/wvOsswAgtIRm6N85xeV6/8MXT6OSFOV50TBuJQy3QXZ6/Ob3th4DNu61tZWPfoDE+Z/Fqy+EJFGTGn0EcYZ8eOi79vA8/pYGKLARL/4TOPeFfUtRyrxwdPKCWZJ1DBAUHOgQPwmxP5wKaui1IoLm6IEtwLNKHkTRmLapklz7ZQxTyw06eMXwBACqc3urMoqqllPLoYVPRCkNlVx9ElEqj6uTxMjl7oqqpuUMQOXqVqDBOJ0ochm4s7bcz/rEBr+irlgqJY3J8MgQxDbCysas35aem7PJzhicpGPw5zVW3EdCDaJDX1UnIpLXo+nvIvLan7gViBFXqZCbAY0Bz0+VVKnJjokbVT8iDkLDNqo2TDAEERbYZMtf2dJ/ev5uCspZurt45jasFrivBRT9UZ//h0SW5YWHR2tw4EzBRIj+kET+kHapkbEEsF8bHhaXJx1zgIdHzY1mD7RbZ7Ve2tbs9+vb8mtQV8sodKIGDZWxevrxOtT81VqLgyGQlZWliS7VXEpf+7yV4IqCmSvl+bl5bFFQmjGRhwPshyQ9lUVIjR4D2whZVL0/dPCzRNn63hLMs+b+m3WkuSsdYqNnzZ3nD5cVv+XQnArSG1shAReIwdqWPRw1dXVUUQV+hJVe0O/ltGqBOImHx8fr6usrGQkYlHBgH7FqKiQjiGPOlo8qSbdPBLKRVimx1iN115j1MYm67TWZJ7ThPCcLpbjNSEcaDxpDylKlkQcb0rtOJtV7JJstZ3OmuKGtsOFTfbSNjwXdSOVMdKoCgTuwOCgRgB3/qb6NnWB4mUTRwjEGmT2337Wrl3L4VOku2BkoQqJQB06Y4wnegNGZBaNQZkjwRvm8WZV8/e+lm7XpBDDYV92o8o+u2GFLDU6ikiaqKzcZIqjeqQSDFyq2qBrqqHf6zMCtoAbuhaE0ztsGnTCKlnk+3SYweswMuugyxfSd7xXY9eikMpIc7srN5R9VSkqYaxR5RsfDhuH499hpXNQ5h2oLomksXkZfMiiWnKDACBgC7gVsBtbsmSJhFN1ElZlJLx4Af2goDhu1WRc6LxdmN6ox9QJZQnTCRGbd3/2G1SxWqRgzh8Jo2KtA0lVKz4sguLPPAUMcNfkmBLJt91yyy0BXQ0USOX5O6+aWPPKp8ZqtWqQNA2Sq5qwFtXCoVpoupNH98TMGLfJWVEOySE5atLqMVH6pIItmiUjHyshYktLC01MUynN8zCgS2XBW0YVJHDKGkB6W5CIIrM1YHChvJACAi0cp/Vl9CJGFBYe6K2UGGyUzsQpjbZj0YdSo++ilf70ZkoYpkp0HpZjKudnDysQ/xN0yEC5GTVAqESS/1OLDUQAFRxCoqKiQr0+Q9V9dAEWpR+lQgYsVuoxVWKE0cvWw4qwC4ARqRKqqFINIixiEzHUQAk41Iio9PR0T6DxeiBfg+BFiKcpdbUhR9K/AX6GG6V6xsynAAAAAElFTkSuQmCC"), t.style.cssText = "\n    align-self: center;\n    user-drag: none;\n    user-select: none;\n    -moz-user-select: none;\n    -webkit-user-drag: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n    filter: hue-rotate(120deg);\n  ", t;
	          }(e),
	              l = function (e) {
	            var t = e.createElement("img");
	            return t.setAttribute("id", "codesee-recording-icon"), t.setAttribute("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEcAAABHCAYAAABVsFofAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACXBIWXMAAAsTAAALEwEAmpwYAAABWWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgpMwidZAAAV3UlEQVR4Ac1cC3RV1Zn+97k3CZAH4SEkIBAgiqBCLFheKoEqqFMFdGY6o1W0uFZ12Q64Zjqz1sxqg86sNa2tj/E9a/kAq3XqqlSwUl9VfEDxSZAK6kCIGEICmASSQBJyz57v2+fsk5PknntvkOD8K/vuffbr7P2d7//34+wTJadQykueKDwWb52nXF0mjhqnEqpMKykUpQtFFJwnWnST0qoJ8dWIbxLtfuwqqXQS8cot1bcg7tSI6u/bzC69b5648SXo8OK8guySaTOKpGhUnkyYNFRNnDRUECd5eXDwrbQc6ZCWlg6p29cirfB3f9Yg296v0/RbD3dUakdvA3Brtuz68UZbpj/8fgFnVsnDJRLvXKa1WlE2o7hw2vlFak75GCk9a5jpg7lpH++stdf9XZ82yMcf1smm1/dqAFYNkN6UROz2/mBUH5uY+vmQJVo7FXn5OeVLr50iixZPVEWj8kWd1Lt4bSBYdbUt8uuHK2XbB3W6rrZ5zckG6aQ02zAllnjcB0Vdfe1kyS/IgblIDeZJSQVIJNUr63fJkw9XnlSQvnbzZ5XeD6YMWLH0milDTikoSZAlm558pFLWPrVDt7S03QGbtCpJtoyjThgcskU57nNTzy867yd3zFVFo/tHfTLuSSjjfhhyqtvL63btEddZcKL2KBaqM+PgzDPuX5E/OPuZ5SumT1j509kqf3BOv9iVjBvUI2M+Rr6588dyBByy85ODy0bmLWyvadiwpUe2tJd9Zs6s0gcriorzKn716CJVDLacsF2hoTDWAh4tNnTC2bRJYps3ix48WPSYsaILC0Wfc7bogoK0HYnKQBb90/KXdN3+I31Wsz6BM2viA0+UThq2jMCQLX0SGgQXLkGfJeHHcHsC4/BaSdYv75SsO3+JaxDaQaSCg6/PPVcSZ58jiUWXGMfcfRECVLHydcyXvlq9ZfePbsy0bMZqRWAWLj5j2b/9/KK+AdMJJDo6RbUnRBgmMArAGFB8cNhaR0mMzNm0mRm8dKKGfOrAIXF27JT4HzZI7LnnRe38TPSUs0QyZBTV7Lt/M0nqa1vL2g/OKqlp3LCOt0wnGYFjgflnGN6cAfF0dXrpxwHG0eMABcCQLRQCgj/P9wEIXQfgACiPNX4ec63ANUdUczOA+lTiq58WVVsrevJkgAT1TiO8Ne1QXwBKCw5tDFRpxX8+dLGCpGkCkqk6rR2iWgEMwwYQv5Msbuqw1359fp4AHHPtscaARPUyKsZyVDXPd8Cg+K9/A5D2A6RJ6UFCsWnTi+T9zbVlubpc1TT8cWOqDuFO0cJRicZ31T3zMwOmIyHqq6Oijh03BtbUTNJQlWBzqE3dpVeEn8zOMxj2GRG+5iWuUUV87QuSs+yH4rz3IQullLzB2XLXo5dKUXFBxezSB1amyhzJHM5jOFzf9+TlA4tPT09baW4XdbjNA8VnQtAZ0y/bOdtBNItGlywwzmumHodRatw4M2IppKsjLSZd+8bZM9RoNu9hjTbSVEurxNdvMPHu+d9K1WfJGRCTOVCxV9ZXzRwx4LLf1jS92JSsQKQBUTH3T9f9sGyIGa6TlQzHNR2DGnV4DebTNYTAD4KCPQlPPJawwzobnbMjVage94ILhI4ss6K+rJHYlnfFefVPEnv1dUSjPlZJsEyY1ybCXGc99CjsUqsc/5cVuI6W4tF5cv3N04Y8/PP31iJXUjSTMod25tIrS5fctHJ6ejNDNSIwXos9z7TJNppJCA+Mix6EbQkC4xtYky3Zj2Uefcx53LOnSOKKv5LEXy9FVRi9DjUYpoSZY+7hs8vZvgN2qF7cBRcmqz2ImzL1NKn8oK4469iFqqaxt/3pBQ7VKa8g6/f/+osMhuwGANPSjpvxyfkemeJfmjgAovMxJ8rCrdjZExUDVIEkLrpAEhcvwH1bxPl0lw80WERgmMdXNefz3WBQi7hzZ6a8I/eXXnmhqiyZevUC5/Thl939vRunnnfBgnGp+9IIVaKNCSTUcTYyBvUZMhCMyfp6oAT1+wEL0nfKxf32dIl9sNVjkc+aACRcO3/51NzbnV7Ws5bgmptsHe2JAds+rJ2G+c+aIAGBUI9EyJqiMYOqnvrj1alHJ4xGat9h/0mhCtbCRhuHcA5UaNggA1D4Zv0RVjW1krP8R0aNPNawHT6LfL/9v+8Sd/q0yNtz5/Hay36H3ce2+eHdRVq1LoknfnbdzWWpgcHkTtUd8crQcNplgfWhPnp47ikBho3Qp4+S9mfXYJ5zpv9wugOj8cCy7rhLBCoWJWTPVd+fwsGjIpwnAMewpjj/BuzehdN7hdWhVlGcz3CCZwHh4MIwRiA9Is+zA71K9l+EHpwv7Y/eJ/osABQM72iLYQ6G+boDEn/06ZQNuBo7l9ysIw42YwCOgDUwTsCZOhIhZA2GbTNUAwwzqSModByiizEf4kj0DYjGEqL9rn8XPapYNNtiQLIq5kj82fXifLQ9smUBe5zOG2ymLnBcVX7dzdDLFH1TB0BNC4bvk0F0hjHxXvbd3ueU+Hp0sXRU/MS3OegaAQpAUhJ//JmU7Vi0uJRsCyZIZhLIjfGp04tKuJsXKVSlxqNd4IEsniEGXgUDvFEpsnDyBPXFF+J8/rkoODmKaUEbRj9w1x05UqSoSNypU81sOXnp5LHujDLpvOYqif/Per99ZA+fuBKn8hNxtv5F3PPOSVqYr4zKZhQVKnV/OQ2zAQer3WWYTqec8Kn6Zp815j5e5eQd2GIMcNLbJY9Ue/dK7IUXMJk7hG2MTuzxYAVvGYkn7VRXiyCP89FHGPWGiTsPr76wp5OpJJZ/X2IbXsfkFA+TT5DgWIDeeTcSHNaP10hS+X7tEgQ3GrVy8eaRk6GU0oyn2s0IgzpUpzx/gpeycFdi7LXXJL56taj9+7F6h3EnY+gYpsPkzoYNm5AvtnatOK+80lVJmpDOz5XE36F/NMiBajGMPaOX3hTBOixK5i4YS44tZrpD61wwOLus9KyhUflFDmPChw2r4OnyKRMogsP5TIYSf/xxcd5+21OhY6gTjgAFDiAFYaYTNOaB43ZG/LHHMrwTyPi3V/r2BqD4oxZ91XpMnF3VkfWUem9hS8pK7il0YE6n8bVsKlFNaHSYNX5Y53OtFLl27VYlGUMbI+1YvdO2EAjfBewhawgIHUFjOkFCfuOoaq++2q3eqAudlwv1gSoag+wzyGeSs+mDqGImnqqVHYuXO8o5XsYLo5JRRbiwDLElCBdgeZCBONu3i4ONcwMMmUBw2GF23AcI01MPDPo+MJY1Jj9AZXluwNNmZSKJyxcAHIygVrV8oGKbP0xZfCQMM1hT5mDoKis9cygsVoRg31e1omG+GnnAYPcKYBl7E1EsHO289Rb2kbE7eBybYPANMASIQNHR1vhsMWDZeJ8xBMUAy7KoI7YeI1EG4s49v8vuWNUCQOrAV7A7YGWEULUwppdwyjZ4ENUjSo6iQd2A8e1NHFTFGiqd8ClzVAqAsSBZ9hAUHyCjRhYoCxDzExwCC6d4zfoyYA9VSxeP7ALIMAc9BlDOgYORTZ8I+6tiMg1TScH8BlP+KAkPs9bukDXcgshAnG3bvKGaQzYdO8nOspNwRmWsalk7w2uyxmeMAcUHxwz7aJP67LMM7o7nekaJp1qWOb7dUbujVTMPZNGuKgTHpJAXUaLa/FHKhSpZBtHPgDWsU9XXe+AQZHbK+mGQwJJgGLdMsgBaUOj7ZQVtcTIER/Lx4MM2x7IHo1aU8LwQD1VRL1KCI53oFMEwAt8GuaOXgai6OpT3bJTxbQetb0ECGGSSzsL+D0TFse3BMPOZB8OH0+XMiJfB/fXI0zy1snl968ohPUq4zkI2A05UHi+eYATgIMzKGWdBQjCtmJHOB4iZee3HKZtmQWJ6DiaWFlCblz7F+rRJmQiHYbLFl6DZKYdnL3N6i4rGmA6Eazd9C25jU5L77CiHZzbGOua0jaYfAwvBElMjGOPNTfxO2TK2g7y25b1Qyl/u55gVOnOFmsz4dBJH/qaW5o4hfGWaVLDd2Y05NtMxGNMMRA8ciMEBdVjHRhEM31F1VLZ/b6oR8wFQzbhQvqA801GHi4VpJqIONiA/ylDCeORiQy5CuDNIXOLYk0kNDodsS+UAebAJezvBZcRNGK0nTfKMMjvKjpEZvj1RvvqwHtoYo0rIY2wN0wCQCbMs020d9DMGp9G7r22jaTRG25He+UQbHfZ5WJO4ODAnTUQqSsxEjzaHTtNu0CgijPVWJuICHAuIBYWdDtgxANsdgwaJxpO0TsA2YTwd8xIkgkNm0QGcTFfp6pAPjh3KObPjQ8qNXhPW41QG0KmOOzFdWfV5w3lnTI5YX+WgMQFzDOwGE8XJIUeyNBtceizeYGLbwcxV2NHw6IOaaA8MaxjP+/hqZxjD/BYgMgnAECQ9fHhG+zxUKXUILzMNMP6j9Pvijj898tnCzEADVZMDFuzdhfO9kcLJHk9W2NEjxCJVfySyWDghccUV3hNnB+E0fbKDzrLG+j6DgnTmtwD5LOL+Tibi7NjlAUOmGIA81rjjx4A5uHeEEA+t3W2OdrO2gkbakiNZfnd4vvdUjWrh6Zr5BuxOTQpQQxXx3bc7Z44Hiq8u7LDpNEAxQORhskYjyWvf0ZibPCzjg+rOnp2xSjkffOKpEIEJAIJNmxDNGjYb55uFJ+bjA+XYmzjHG+pKkuCIApE9di0CcPBHpw5hdxCG2bzNTFIsHJW45BJvPfTll9AcX+9hOzSXFGSEZWYozdgqny1kmx4zRhILF4arjQyrg43ifLjDA4VP3qosGu6ePzWyHBN4Ut5JdFY6G6tvo0Gu5snwKNH5eHJ21AqpFQ2zqjoQVaxXfOfy5Xg9O1cMI8gOyxT6dGH2+GkmLxjEcp033dSrzqgI5+V3uthC1vjM0SOGA5xzoooJVaq1pR3fWNxWjVJggKh1mzfujSxAZrijh+Dp+k+AT8EPO7vqPfZEl+6WQgYlliwRjaFYAyANQOgHQIXiTHpxsXTecEPGjOHNOELFtn7aZWdCI5V7dmm39vS8oEqhe1gtgw/80U5iHSJX6Js9xjOul4wcDL6BJQSGQp8ugUXgzn14UzDWi8/gl28V6MzbB2yEmfUX12AQa6w5P3LPPDOjUannLWPPv4FDVHhdTbbYdnICiNVk4qpLembvdo1vKgCqXs1IAw5fQ2j9YBO+JcB5nOTbF3oYnvDQXM/OEB8DkgeQ+t86UcU4FnsabFMfhIY6AXcyxfmsGruFePBkS2AcvXYmLvwW2ggNiBB+S8GPTbZU/Xgjs7AGI5gR3sfvB1KJnlTsPwlOBnFDa3/gO+/txo4e9mm+QeGcJvbEOgADmljHSZ8fTlz1nZStw7cTyIuvcHwJwBG3YzW/GWhONVvGkK4njPAB8p4GQVKYNauWNom9vRObWBh9vgFRR9skfvdTohqOmIll1ythdBEsSlw4HZPHaNawybQ3kji+yjY/AIfWGTPDjWufxvCXQtzJozAvwdBrdTnwAVBDi8Re+/iUA2SAuQenSgGMN9kjIF2MoSollixI0SvhdxL4RKl5DXGwGQNwTIRy70jHHsmKiztjgnk/zq0Ms51BgPzRywD0B+zug0mnQlTDYYnf91tRtZiHhQCxIPGkxfHlS8GawpTNMSoVYg0zY23QJTiXWz0i99J52Tmx8WV4XRMpuZj+w9ip+sNJGIT4DmyEf4HGDoVxz4uepkfWn2GC2lWDoyXr0Q5/jkZwekjiSrxKnjOtR2z3SwKz6Y0v1mzZs2J1OKU7c5iS6PjB2qd3NvJ7gVTinj1G3DMAYKBWXTbI2KFmvKXc8JE4b2IKj/DJFHUM76+ef0uyHvydr0pdKuRN9rzrxMUzJXHFRSlvzRHquadgSnqwhoW6MYcRNU0vN40YtGggptDlC68sNUxlfDLRo2DgoD5UJTtq9gRLHToias8BHF48iq9gwCSu8k9QVBtAeWOrxJ56WZzdNdG1gEGJ2fiY5JrLovP4KQ/d+Z7s3HZw1ZY9/4Bhrrv0AofJODi4MfvovMU47V3M46ipRI/BdgRGKHUQxtCwCLm7sQmmoB1bAHVN4myrQr7DoviBCEHKACjV1iHO9iqJvfhnif/+LYCyD+WxnkshifkzJPH3i1Lk8JJgX+WZx7ZjXnPr0mSZzSQwWYLWHVc9+ci2j3A0JXJiaMu5MyZi8YkXZVurewNESuHP/MBXu+vwIn8/DLgrOh+r7jys2wqwjICzoKpGMPEYGLn/K09tkJfTBZT2jC7ro32xPqv390ATl80RunRCdVrzSGUTpjDzo/LiDtEyc8JDK4tH5979yLNXqsg95lBxVYeV8Fs7oEKwMWYE8yeLJoye+CtvZVfg9E2Yvp8exIWu/boMQGZU9Ou19SCdKtt5zULRpdirSSME5h9/8JLArq58t+rW/4rKnlStbOZ9jS9uKYwvwlcmNfPKLx2PLd+U2c3IpMdCDalmsDVG+HTZOTpI8CbDv/bimd49X7hMV1lThffjVWfCiQtxmuv6y0VGDg1liA4SmL17Dq8CML+IzpXEIPfMXNP44pu5ev64xkNt5/F7JZ+9PbN1XcOO6HEjsGjEZLEdQ/pXtEVMJgAY5k3Q75kFyKQxi5eHWSwgYb9bWZRxJ4yWzu9djKH6XKh1pIUw1dmfO3/6jry/ad9q2JnbbFyUn4YKXjF8PLqu/dCscfX7WjMDiMUI0viR4k7CrhvmPQYoghUAgjxBmKCErsMgWeCQzLJ6QLa4MyfDrswS95JvYy6V2WKX+8L3/sefORPGp4y33ojq0kpKm9Oz9KzSBx6feOawG2+/d4FErd57lglfG2NcVYsjIBix6vFWgCBYu5HMlvhpejDeTEzCvGryOJyagOoM4CQ0cyEwVCVsZGUMDGvvEzgsMGvCwxVFowdV/OqxS/F1cPLtDeZLK21g0UG8GaDPb6rsS0ICRtbxoAJsiJkbgS0nKtb44p+GrIIq3d6XevoMDivnKIYP1X7G75Wu5rH4/6fCeQyH6+bDHTS+kaNSVPNPCBxWNqvknhJxsl9ftKR0/PW3lJl/+xJ1k1MdT7bQ8H78Xl2ldjuWhlfafWnLCYNjb0I1yyuIV4BBiiB9k0LbQrY89/SOppbDnfduqbqlT2rUs+1fGxxWaFgUy67ACfAbrr+5TMCmnvfp1+sAFADT0nx8oyTabzxRtoQbelLAsRWGQeIJ1f5Wt3qoDzepuKo2oKjE7eHvpWy7TtQ/qeDYRliQcF2Ok/ElPBXO/aF0551t+VQ+X7jxDQG+zcQx/P34316xe8Vt67aDl6p8X9L6BZxwA/D/dcqxqbsMG/hluQXZZQSIrDInxXEWkYc1c+GHzyVSTVrh6PNlIwGhkeUeL19AotHrtOM+fzJZEm6zDfc7OPZG9MkoFYuXYSqDzwFj0zCjwfscXaLx397wYjHYx8Q82Py3NzSuCa+aKnHs5QsswitzEp0b+YY2XGd/hv8PCRAig8ddGI0AAAAASUVORK5CYII="), t.style.cssText = "\n    align-self: center;\n    animation: 2s linear 0s infinite reverse none running rotation;\n    user-drag: none;\n    user-select: none;\n    -moz-user-select: none;\n    -webkit-user-drag: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n  ", t;
	          }(e),
	              d = function (e) {
	            var t = e.createElement("div");
	            return t.setAttribute("id", "codesee-transmitting-icon"), t.setAttribute("class", "spinner"), [1, 2, 3].map(function (t) {
	              var n = e.createElement("div");
	              return n.setAttribute("class", "bounce" + t), n;
	            }).forEach(function (e) {
	              return t.appendChild(e);
	            }), t;
	          }(e),
	              v = function v() {
	            var n = t.isLoggedIn(),
	                r = t.recording,
	                o = t.transmitting;
	            a(e, r || n ? !r && o ? d : !r && n ? u : l : c);
	          },
	              m = [];

	          t.compiledInLowDataMode || m.push({
	            text: "Start recording in Verbose mode",
	            id: "begin-verbose",
	            onClick: function onClick() {
	              t.toggleRecording({
	                verbose: r.VERBOSITY_MAX
	              });
	            }
	          }), m.push({
	            text: "Start recording in Terse mode",
	            id: "begin-terse",
	            onClick: function onClick() {
	              t.toggleRecording({
	                verbose: r.VERBOSITY_LOW_DATA
	              });
	            }
	          }), m.push({
	            text: "Go to Library",
	            id: "goto-library",
	            onClick: function onClick() {
	              window.location.href = t.config.host + "/library";
	            }
	          });
	          var g = new f(o, e, u, m);
	          new i(o, e, function (e) {
	            return function () {
	              if (!t.recording && t.transmitting) return confirm("Codesee is transmitting your latest recording to the server. Once complete, you will be able to view your recording. Click 'OK' to continue transmitting, or 'Cancel' to cancel the recording") ? void 0 : void t.cancelRecording();
	              t.isLoggedIn() ? t.recording ? t.toggleRecording() : e.onClick() : window.open(t.config.host + "/register");
	            };
	          }(g));
	          o.addEventListener("load", function () {
	            var r = e.getElementById("codesee-remote-control");
	            r.contentDocument.body.style.cssText = "\n      width: 100%;\n      height: 100%;\n      margin: 0;\n      padding: 0;\n      display: flex;\n      justify-content: center;\n      overflow: hidden;\n    ";
	            var o = e.createElement("style");
	            o.innerText = y + "\n  @keyframes rotation {\n    from {\n      transform: rotate(0deg);\n    }\n    to {\n      transform: rotate(359deg);\n    }\n  }\n\n  .spinner {\n    width: 70px;\n    height: 70px;\n    text-align: center;\n    background-color: #3A2496; /* Primary-500 */\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 100%;\n    box-shadow: -1px 3px 10px -5px rgba(2,20,67, 0.78);\n  }\n\n  .spinner > div {\n    width: 13px;\n    height: 13px;\n    background-color: #fff;\n\n\n    border-radius: 100%;\n    display: inline-block;\n    -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;\n    animation: sk-bouncedelay 1.4s infinite ease-in-out both;\n  }\n\n  .spinner .bounce1 {\n    -webkit-animation-delay: -0.32s;\n    animation-delay: -0.32s;\n  }\n\n  .spinner .bounce2 {\n    -webkit-animation-delay: -0.16s;\n    animation-delay: -0.16s;\n  }\n\n  @-webkit-keyframes sk-bouncedelay {\n    0%, 80%, 100% { -webkit-transform: scale(0) }\n    40% { -webkit-transform: scale(1.0) }\n  }\n\n  @keyframes sk-bouncedelay {\n    0%, 80%, 100% { \n      -webkit-transform: scale(0);\n      transform: scale(0);\n    } 40% { \n      -webkit-transform: scale(1.0);\n      transform: scale(1.0);\n    }\n  }\n\n  .menuPopup {\n    background: white;\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    border-radius: 6px;\n    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.15);\n    line-height: 26px;\n    padding: 10px 15px;\n    z-index: 2147483647;\n    width: max-content;\n  }\n\n  .menuItem {\n    padding: 0px 10px;\n    margin: 0px;\n    cursor: pointer;\n    color: #3A2496;\n    font-weight: bold;\n    font-size: 0.8rem;\n  }\n  \n  .menuItem:hover {\n    background: #F3F3F5;\n    border-radius: 8px;\n  }\n", r.contentDocument.body.appendChild(o), r.contentWindow.addEventListener("message", function (e, t) {
	              return function (n) {
	                if (n.origin === e.config.host) {
	                  var r = JSON.parse(n.data);
	                  if (!r || !r.loggedIn) return e.recording && !r.loggedIn && e.toggleRecording(), console.warn("CodeSee Warning: You are not logged into CodeSee, recordings will fail. Try visiting " + e.config.host + "/library to login."), e.authTokenValue = null, void t();
	                  e.authTokenValue = r.token, t();
	                }
	              };
	            }(t, v)), n || r.contentDocument.body.insertBefore(s, r.contentDocument.body.firstChild), v();
	          }), e.body.insertBefore(o, null), t.remoteInserted = !0, t.updateRemoteStyle = v, console.debug("%cCodeSee: FAB 2021-06-09T17:25:04.575Z", "color: purple");
	        }
	      };
	    }, function (e, t, n) {

	      function r() {
	        try {
	          return "https://app.codesee.io";
	        } catch (e) {}

	        return "http://localhost:5198";
	      }

	      n.d(t, "a", function () {
	        return r;
	      });
	    }, function (e, t, n) {

	      (function (e) {
	        n.d(t, "a", function () {
	          return s;
	        });
	        n(237), n(238), n(239), n(69), n(42);
	        var r = n(245),
	            o = n(0);

	        function i(e, t) {
	          for (var n = 0; n < t.length; n++) {
	            var r = t[n];
	            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
	          }
	        }

	        var s = function () {
	          function t(e) {
	            if (function (e, t) {
	              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
	            }(this, t), this._recordingInProgress = !1, this._sessionId = null, this._authTokenValue = null, this._verbose = void 0, this._configCache = void 0, "undefined" != typeof window) try {
	              this._recordingId = window.localStorage.getItem(o.LOCAL_STORAGE_RECORDING_ID_KEY);
	              var n = window.localStorage.getItem(o.LOCAL_STORAGE_RECORDING_TIMESTAMP);
	              this._verbose = window.localStorage.getItem(o.LOCAL_STORAGE_VERBOSE_KEY), void 0 === this._verbose || null === this._verbose ? this._verbose = o.VERBOSITY_MAX : this._verbose = JSON.parse(this._verbose);
	              var r = window.localStorage.getItem(o.LOCAL_STORAGE_CONFIG_CACHE_KEY);
	              r && (this._configCache = JSON.parse(r));
	              var i = Date.now() - parseInt(n, 10);
	              null !== this._recordingId && null !== n && i < o.TRACK_ACROSS_PAGE_LOAD_TIMEOUT ? (window.localStorage.setItem(o.LOCAL_STORAGE_RECORDING_TIMESTAMP, Date.now()), this._recordingInProgress = !0) : this.clear(), this.localStorageActive = !0;
	            } catch (e) {
	              console.warn("CodeSee is unable to access LocalStorage. Without LocalStorage CodeSee will be unable to record across page loads.");
	            }
	            void 0 !== e ? this._serviceId = e : "undefined" != typeof window ? this._serviceId = "Frontend" : this._serviceId = "Backend";
	          }

	          var n, s;
	          return n = t, (s = [{
	            key: "verbose",
	            get: function get() {
	              return this._verbose;
	            },
	            set: function set(e) {
	              this._verbose = e, this.localStorageActive && window.localStorage.setItem(o.LOCAL_STORAGE_VERBOSE_KEY, JSON.stringify(e));
	            }
	          }, {
	            key: "configCache",
	            get: function get() {
	              return this._configCache;
	            },
	            set: function set(e) {
	              this._configCache = e, this.localStorageActive && window.localStorage.setItem(o.LOCAL_STORAGE_CONFIG_CACHE_KEY, JSON.stringify(e));
	            }
	          }, {
	            key: "getDataset",
	            value: function value() {
	              if (this.isRecordingInProgress()) return "".concat(this._recordingId, "/").concat(this._serviceId, "/").concat(this._sessionTimestamp);
	              console.error("CodeSee: getDataset called when recording is not in progress.");
	            }
	          }, {
	            key: "getAuthTokenValue",
	            value: function value() {
	              if ("undefined" != typeof AUTH_MODE_OVERRIDE && "mock" === AUTH_MODE_OVERRIDE && (this._authTokenValue = o.AUTH_DUMMY_TOKEN_SINGLE_USER), null === this._authTokenValue && void 0 !== e && void 0 !== e.env && void 0 !== e.env.AUTH_MODE_OVERRIDE && "mock" === e.env.AUTH_MODE_OVERRIDE && (this._authTokenValue = o.AUTH_DUMMY_TOKEN_SINGLE_USER), null === this._authTokenValue) if (this.localStorageActive) {
	                var t = window.localStorage.getItem(o.LOCAL_STORAGE_WRITE_TOKEN_KEY);
	                this._authTokenValue = t && JSON.parse(t) || null;
	              } else console.error("CodeSee: LocalStorage is required for instrumentation to work properly. Please ensure that you have not blocked it."), this._authTokenValue = null;
	              return this._authTokenValue;
	            }
	          }, {
	            key: "setAuthTokenValue",
	            value: function value(e) {
	              this.localStorageActive && window.localStorage.setItem(o.LOCAL_STORAGE_WRITE_TOKEN_KEY, JSON.stringify(e)), this._authTokenValue = e || null;
	            }
	          }, {
	            key: "getSessionId",
	            value: function value() {
	              return this._sessionId;
	            }
	          }, {
	            key: "setSessionId",
	            value: function value(e) {
	              this._sessionId = e;
	            }
	          }, {
	            key: "getRecordingId",
	            value: function value() {
	              return this._recordingId;
	            }
	          }, {
	            key: "getServiceId",
	            value: function value() {
	              return this._serviceId;
	            }
	          }, {
	            key: "getSessionTimestamp",
	            value: function value() {
	              return this._sessionTimestamp;
	            }
	          }, {
	            key: "isRecordingInProgress",
	            value: function value() {
	              return this._recordingInProgress;
	            }
	          }, {
	            key: "startRecording",
	            value: function value(e) {
	              this._sessionTimestamp = Math.floor((Date.now() - 1597275e6) / 1e3), this.getAuthTokenValue() ? (this.isRecordingInProgress() || (this._recordingId = void 0 !== e ? e : Object(r.a)(), this.localStorageActive && (window.localStorage.setItem(o.LOCAL_STORAGE_RECORDING_ID_KEY, this._recordingId), window.localStorage.setItem(o.LOCAL_STORAGE_RECORDING_TIMESTAMP, Date.now()))), this._recordingInProgress = !0) : console.warn("CodeSee: Unable to find auth token for recording events to CodeSee.");
	            }
	          }, {
	            key: "clear",
	            value: function value() {
	              this._recordingInProgress = !1, this._sessionId = null, this.localStorageActive && (window.localStorage.removeItem(o.LOCAL_STORAGE_RECORDING_ID_KEY), window.localStorage.removeItem(o.LOCAL_STORAGE_RECORDING_TIMESTAMP), window.localStorage.removeItem(o.LOCAL_STORAGE_VERBOSE_KEY), window.localStorage.removeItem(o.LOCAL_STORAGE_CONFIG_CACHE_KEY));
	            }
	          }]) && i(n.prototype, s), t;
	        }();
	      }).call(this, n(98));
	    }, function (e, t, n) {

	      n.d(t, "a", function () {
	        return o;
	      });
	      n(93), n(20), n(242), n(42);

	      function r(e, t) {
	        for (var n = 0; n < t.length; n++) {
	          var r = t[n];
	          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
	        }
	      }

	      var o = function () {
	        function e(t) {
	          !function (e, t) {
	            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
	          }(this, e), this.codeSeeImpl = t, this.anyFramesSinceLastBoundary = !1, this.state = 0;
	        }

	        var t, n;
	        return t = e, (n = [{
	          key: "enteredFrame",
	          value: function value(e) {
	            this.anyFramesSinceLastBoundary = !0, this._maybeStartDetection(e);
	          }
	        }, {
	          key: "endOfTaskAndMicrotasks",
	          value: function value() {
	            return this.endOfTaskAndMicrotasksPromise || Promise.resolve();
	          }
	        }, {
	          key: "_maybeStartDetection",
	          value: function value(e) {
	            if (0 === this.state) {
	              this.state = 1;
	              var t = this;
	              this.endOfTaskAndMicrotasksPromise = new Promise(function (n) {
	                queueMicrotask(function (e, t, n) {
	                  return function () {
	                    e.codeSeeImpl.enqueueEvent("taskBoundary", {
	                      uid: t
	                    }), e.anyFramesSinceLastBoundary = !1, queueMicrotask(function e(t, n, r) {
	                      return function () {
	                        t.anyFramesSinceLastBoundary ? (t.anyFramesSinceLastBoundary = !1, t.state = 2, queueMicrotask(e(t, n, r))) : (t.codeSeeImpl.enqueueEvent("microBoundary", {
	                          uid: n
	                        }), t.state = 0, r());
	                      };
	                    }(e, t, n));
	                  };
	                }(t, e, n));
	              });
	            }
	          }
	        }]) && r(t.prototype, n), e;
	      }();
	    }, function (e, t, n) {

	      Object.defineProperty(t, "__esModule", {
	        value: !0
	      }), t.trackReact = void 0;
	      const r = n(22);
	      let o = !1;

	      t.trackReact = function (e) {
	        o || (o = !0, r.regDescriptor({
	          name: "ReactElement",
	          typeofTag: Symbol.for("react.element"),
	          write: function write(t, n) {
	            const r = {
	              children: void 0
	            };
	            null != n.key && (r.key = n.key);
	            const o = {
	              $: this.name
	            };
	            return o.props = t.step(Object.assign({}, n.props, r), o, "props"), o.children = t.step(e.Children.toArray(n.props.children), o, "children"), o.type = t.step(n.type, o, "type"), o;
	          },
	          readContent: function readContent() {},
	          read: function read(t, n) {
	            const r = n.children ? t.step(n.children) : [];
	            return e.createElement.apply(e, [t.step(n.type), t.step(n.props)].concat(r));
	          },
	          create: function create(e, t) {
	            return this.read(e, t);
	          },

	          presentForPrototype(e, t) {
	            const n = new r.PresentObject(void 0);
	            n.name = "ReactElement";
	            const o = new r.PresentObject(n);
	            return o.$ = "ReactElement", o;
	          },

	          presentForContent(e, t, n) {
	            const o = t.children ? e.step(t.children) : [],
	                  i = e.step(t.props);
	            i instanceof r.PresentObject && i.properties.children && delete i.properties.children;
	            const s = e.step(t.type);
	            n.addProperty("children", o), n.addProperty("type", s), n.addProperty("props", i);
	          },

	          props: !1,
	          refAware: !1,
	          strictName: !0
	        }), r.regConstructor(e.Component, {
	          name: "React.Component",
	          write: function write(e, t) {
	            return {
	              $type: t.constructor.name
	            };
	          },
	          overrideProps: {
	            updater: !1,
	            context: !1,
	            _reactInternalFiber: !1,
	            _reactInternalInstance: !1
	          },

	          presentForPrototype(e, t) {
	            const n = new r.PresentObject(void 0);
	            n.name = t.$type;
	            const o = new r.PresentObject(n);
	            return o.$ = "React.Component", o;
	          },

	          strictName: !0
	        }, !0), console.debug("CodeSee: Registered serializations for React."));
	      };
	    }, function (e, t, n) {

	      Object.defineProperty(t, "__esModule", {
	        value: !0
	      }), t.trackVue = void 0;
	      const r = n(22);
	      let o = !1;

	      t.trackVue = function (e) {
	        if (o) return;
	        o = !0, e.extend();
	        const t = new e().$createElement(),
	              n = Object.getPrototypeOf(t).constructor;
	        r.regOpaqueObject(e, "#Vue", {
	          propsSnapshot: !1,
	          props: !1
	        }), r.regConstructor(e, {
	          name: "Vue|VueComponent",
	          write: function write(e, t) {
	            var n;
	            const r = {};

	            if (Object.getPrototypeOf(t).hasOwnProperty("$nextTick") ? r.$type = "Vue" : r.$type = "VueComponent", t.$vnode) {
	              const o = t.$vnode;
	              r.$vnode = e.step(o, r, "$vnode"), r.$vnodeTag = (null === (n = t.$vnode.componentOptions) || void 0 === n ? void 0 : n.tag) || t.$vnode.tag;
	            }

	            return r;
	          },
	          props: !1,

	          presentForPrototype(e, t) {
	            let n = t.$type;
	            t.$vnodeTag && (n += `[${t.$vnodeTag}]`);
	            const o = new r.PresentObject({
	              name: n
	            });
	            return o.$ = t.$type, o;
	          },

	          presentForContent(e, t, n) {
	            if (t.$vnode) {
	              const r = e.step(t.$vnode);
	              n.addProperty("$vnode", r);
	            }
	          },

	          strictName: !0,
	          refAware: !1
	        }, !0), r.regConstructor(n, {
	          name: "VNode",
	          write: function write(e, t) {
	            const n = {},
	                  r = t,
	                  o = Object.assign({}, r.componentOptions);
	            return delete o.Ctor, n.co = e.step(o, n, "co"), n.data = e.step(r.data, n, "data"), n.text = e.step(r.text, n, "text"), n.tag = e.step(r.tag, n, "tag"), n;
	          },

	          presentForPrototype(e, t) {
	            const n = new r.PresentObject({
	              name: "VNode"
	            });
	            return n.$ = "VNode", n;
	          },

	          presentForContent(e, t, n) {
	            const r = e.step(t.co),
	                  o = e.step(t.data),
	                  i = e.step(t.text),
	                  s = e.step(t.tag);
	            n.addProperty("componentOptions", r), n.addProperty("data", o), n.addProperty("text", i), n.addProperty("tag", s);
	          },

	          props: !1,
	          strictName: !0
	        }, !0), console.debug("CodeSee: Registered serializations for Vue.");
	      };
	    }, function (e, t, n) {

	      Object.defineProperty(t, "__esModule", {
	        value: !0
	      }), t.trackImmutable = void 0;
	      const r = n(22);
	      let o = !1;

	      t.trackImmutable = function (e) {
	        o || (o = !0, r.regConstructor(e.Collection, {
	          name: "Im.Collection",
	          write: function write(e, t) {
	            var n = {
	              $: this.name,
	              $type: t.constructor.name
	            };
	            return n.v = e.step(t.toJS(), n, "v"), n;
	          },
	          read: function read(t, n) {
	            return e[n.$type](n.v);
	          },

	          presentForPrototype(e, t) {
	            const n = new r.PresentObject(void 0);
	            n.name = t.$type;
	            const o = new r.PresentObject(n);
	            return o.$ = "Immutable.Collection", o;
	          },

	          presentForContent(e, t, n) {
	            const r = e.step(t.v);
	            n.properties = r.properties, n.symbolProperties = r.symbolProperties;
	          },

	          props: !1,
	          strictName: !0
	        }, !0), console.debug("CodeSee: Registered serializations for Immutable."));
	      };
	    }, function (e, t, n) {

	      n.d(t, "a", function () {
	        return E;
	      });
	      n(111), n(117), n(20), n(27), n(25), n(28), n(123), n(124), n(125), n(126), n(127), n(128), n(129), n(130), n(131), n(132), n(133), n(134), n(135), n(136), n(93), n(94), n(35);
	      var r = n(0),
	          o = n(70),
	          i = (n(202), n(203), function (e) {
	        var t = "^".concat(e, "/(?:(?:1/batch)|(?:recording/new)|(?:sessions/new))");
	        return new RegExp(t);
	      }),
	          s = "__codesee__xhr_url__",
	          a = "__codesee__xhr_method__",
	          u = "__codesee__xhr_ignore__",
	          c = "__codesee__xhr_uid__",
	          l = new WeakMap(),
	          f = new Map();

	      function p(e) {
	        !function (e) {
	          var t = e.XMLHttpRequest.prototype;
	          if (CodeSee.orig_xhr_open && CodeSee.proxy_xhr_open) return CodeSee.proxy_xhr_open === t.open ? void 0 : void (t.open = CodeSee.proxy_xhr_open);
	          var n = CodeSee.orig_xhr_open = t.open;

	          t.open = CodeSee.proxy_xhr_open = function () {
	            var e = this,
	                t = function t(_t2) {
	              var n = "load" === _t2.type ? "success" : _t2.type,
	                  r = 0 === e.status ? void 0 : e.status,
	                  o = e.getAllResponseHeaders(),
	                  i = Promise.resolve();

	              switch (e.responseType) {
	                case "":
	                case "text":
	                case "json":
	                  i = Promise.resolve(e.response);
	                  break;

	                case "arraybuffer":
	                  i = Promise.resolve("[ ArrayBuffer | ".concat(e.response.byteLength, " bytes ]"));
	                  break;

	                case "blob":
	                  i = h(e.response);
	                  break;

	                case "document":
	                  var s = new XMLSerializer();
	                  i = Promise.resolve(s.serializeToString(e.response));
	              }

	              i.then(function (t) {
	                CodeSee.xhrResponse(e[c], {
	                  status: n,
	                  httpStatus: r,
	                  responseHeaders: o
	                }, t);
	              });
	            },
	                r = i(CodeSee.host),
	                o = arguments[1];

	            if (o.match(r) && (e[u] = !0), !e[u]) {
	              e[a] = arguments[0], e[s] = arguments[1], e.__codesee__xhr_sync__ = !1 === arguments[2], e[c] = CodeSee.getSideEffectUID();

	              for (var l = 0, f = ["load", "error", "timeout", "abort"]; l < f.length; l++) {
	                var p = f[l];
	                e.addEventListener(p, t);
	              }
	            }

	            return n.apply(e, arguments);
	          };
	        }(e), function (e) {
	          var t = e.XMLHttpRequest.prototype;
	          if (CodeSee.orig_xhr_set_request_header && CodeSee.proxy_xhr_set_request_header) return CodeSee.proxy_xhr_set_request_header === t.setRequestHeader ? void 0 : void (t.setRequestHeader = CodeSee.proxy_xhr_set_request_header);
	          var n = CodeSee.orig_xhr_set_request_header = t.setRequestHeader;

	          t.setRequestHeader = CodeSee.proxy_xhr_set_request_header = function (e, t) {
	            var r = this,
	                o = l.get(r) || [];
	            return l.set(r, o), r[u] || o.push([e, t]), n.apply(r, arguments);
	          };
	        }(e), function (e) {
	          var t = e.XMLHttpRequest.prototype;
	          if (CodeSee.orig_xhr_send && CodeSee.proxy_xhr_send) return CodeSee.proxy_xhr_send === t.send ? void 0 : void (t.send = CodeSee.proxy_xhr_send);
	          var n = CodeSee.orig_xhr_send = t.send;

	          t.send = CodeSee.proxy_xhr_send = function (e) {
	            var t = arguments,
	                o = this;
	            o[u] || CodeSee.xhrSend({
	              method: o[a],
	              url: o[s],
	              headers: l.get(o),
	              uid: o[c],
	              body: e
	            }), d(o[s]).then(function (e) {
	              e && (CodeSee.orig_xhr_set_request_header.call(o, r.TRACING_HEADER_NAME, CodeSee.getTracingHeaderValue(o[c])), CodeSee.orig_xhr_set_request_header.call(o, r.AUTHORIZATION_HEADER_NAME, CodeSee.getAuthorizationHeaderValue())), n.apply(o, t);
	            });
	          };
	        }(e);
	      }

	      function h(e) {
	        var t = new FileReader(),
	            n = function (e) {
	          return new Promise(function (t, n) {
	            e.onload = function () {
	              t(e.result);
	            }, e.onerror = function () {
	              n(e.error);
	            };
	          });
	        }(t);

	        return t.readAsText(e), n;
	      }

	      function d(e) {
	        return new Promise(function (t) {
	          var n = i(CodeSee.host);
	          if (Object(o.a)("LAUNCH_BACKEND_FRONTEND_INTEGRATION")) {
	            if (CodeSee.recording) {
	              if (null != e && e.match(n)) t(!1);else if (f.has(e)) t(f.get(e));else {
	                var s = new XMLHttpRequest();
	                s.onload = function () {
	                  if (204 === this.status) {
	                    var n,
	                        o,
	                        i = this.getAllResponseHeaders();
	                    if (null != i && i.match(/Access-Control-Allow-Headers/i) && (o = this.getResponseHeader("Access-Control-Allow-Headers")), null !== (n = o) && void 0 !== n && n.match(r.TRACING_HEADER_NAME_REGEX)) return f.set(e, !0), void t(!0);
	                  }

	                  f.set(e, !1), t(!1);
	                }, s.onerror = function () {
	                  f.set(e, !1), t(!1);
	                }, CodeSee.orig_xhr_open.call(s, "OPTIONS", e), CodeSee.orig_xhr_send.call(s);
	              }
	            } else t(!1);
	          } else t(!1);
	        });
	      }

	      n(36), n(206), n(207), n(209), n(30), n(37), n(38), n(39), n(40), n(41);

	      function v(e, t) {
	        var _n3;

	        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
	          if (Array.isArray(e) || (_n3 = function (e, t) {
	            if (!e) return;
	            if ("string" == typeof e) return y(e, t);
	            var n = Object.prototype.toString.call(e).slice(8, -1);
	            "Object" === n && e.constructor && (n = e.constructor.name);
	            if ("Map" === n || "Set" === n) return Array.from(e);
	            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return y(e, t);
	          }(e)) || t && e && "number" == typeof e.length) {
	            _n3 && (e = _n3);

	            var r = 0,
	                o = function o() {};

	            return {
	              s: o,
	              n: function n() {
	                return r >= e.length ? {
	                  done: !0
	                } : {
	                  done: !1,
	                  value: e[r++]
	                };
	              },
	              e: function e(_e5) {
	                throw _e5;
	              },
	              f: o
	            };
	          }

	          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	        }

	        var i,
	            s = !0,
	            a = !1;
	        return {
	          s: function s() {
	            _n3 = e[Symbol.iterator]();
	          },
	          n: function n() {
	            var e = _n3.next();

	            return s = e.done, e;
	          },
	          e: function e(_e6) {
	            a = !0, i = _e6;
	          },
	          f: function f() {
	            try {
	              s || null == _n3.return || _n3.return();
	            } finally {
	              if (a) throw i;
	            }
	          }
	        };
	      }

	      function y(e, t) {
	        (null == t || t > e.length) && (t = e.length);

	        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];

	        return r;
	      }

	      function m(e) {
	        return (m = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
	          return typeof e;
	        } : function (e) {
	          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	        })(e);
	      }

	      var g = n(43),
	          b = (n(97), ["debug", "trace", "log", "info", "warn", "dir", "dirxml", "table"]);

	      function S(e) {
	        b.forEach(function (t) {
	          return function (e, t) {
	            var n = "orig_console_".concat(t),
	                r = "proxy_console_".concat(t);

	            if (e.CodeSee[n] && e.CodeSee[r]) {
	              if (e.CodeSee[r] === e.console[t]) return;
	              e.console[t] = e.CodeSee[r];
	            }

	            var o = e.CodeSee[n] = e.console[t];

	            e.console[t] = e.CodeSee[r] = function () {
	              for (var n = this, r = arguments.length, i = new Array(r), s = 0; s < r; s++) i[s] = arguments[s];

	              e.CodeSee.console(t, i), o.apply(n, i);
	            };
	          }(e, t);
	        });
	      }

	      var w = n(8);
	      n(71);

	      function E(e) {
	        S(e);

	        try {
	          Object(w.c)(e) && (p(e), function (e) {
	            if (!("function" != typeof e.fetch || "function" != typeof e.Request || "function" != typeof e.Response || "function" != typeof e.Promise || e.fetch.polyfill || CodeSee.proxy_fetch && CodeSee.proxy_fetch === e.fetch)) if (CodeSee.proxy_fetch && CodeSee.orig_fetch && CodeSee.orig_fetch === e.fetch) e.fetch = CodeSee.proxy_fetch;else {
	              var t = CodeSee.orig_fetch = e.orig_fetch || e.fetch;

	              e.fetch = CodeSee.proxy_fetch = function (n, o) {
	                var s,
	                    a,
	                    u,
	                    c,
	                    l = this;
	                "object" === m(n) && n instanceof e.Request ? (s = n.url, u = o && o.method || n.method || "GET", c = o && o.body || n.body || void 0, a = o && o.headers || n.headers || {}) : (s = n, u = o && o.method || "GET", c = o && o.body || void 0, a = o && o.headers || {}), a = a instanceof e.Headers ? Array.from(a.entries()) : Object.entries(a);
	                var f = i(CodeSee.host);
	                if (s.match(f)) return t.apply(e, arguments);
	                var p = CodeSee.getSideEffectUID();
	                return CodeSee.xhrSend({
	                  method: u,
	                  url: s,
	                  headers: a,
	                  uid: p,
	                  body: c
	                }), d(s).then(function (e) {
	                  try {
	                    var i = Object.assign({}, o || {});
	                    e && (a.push([r.TRACING_HEADER_NAME, CodeSee.getTracingHeaderValue(p)]), a.push([r.AUTHORIZATION_HEADER_NAME, CodeSee.getAuthorizationHeaderValue()]), i.headers = Object.fromEntries(a));
	                    var s = t.call(l, n, i),
	                        u = "load";
	                    return s.then(function (e) {
	                      if ("function" != typeof e.clone) return CodeSee._impl.warn("CodeSee Warning: Your browser does not support Response.clone(), so we are unable to safely capture response payloads. This is often the case in older browsers or Safari. Please consider switching to a different browser."), e;
	                      var t,
	                          n,
	                          r = e.status,
	                          o = [],
	                          i = v(e.headers.entries());

	                      try {
	                        for (i.s(); !(t = i.n()).done;) {
	                          var s = t.value;
	                          o.push(s);
	                        }
	                      } catch (e) {
	                        i.e(e);
	                      } finally {
	                        i.f();
	                      }

	                      try {
	                        e.clone().text().then(function (e) {
	                          n = e, CodeSee.xhrResponse(p, {
	                            status: u,
	                            httpStatus: r,
	                            responseHeaders: o
	                          }, n);
	                        }).then(null, function () {});
	                      } catch (e) {
	                        CodeSee.xhrResponse(p, {
	                          status: u,
	                          httpStatus: r,
	                          responseHeaders: o
	                        }, void 0);
	                      }

	                      return e;
	                    }, function (e) {
	                      throw u = !e || "AbortError" !== e.name && 20 !== e.code ? "error" : "abort", CodeSee.xhrResponse(p, {
	                        status: u,
	                        httpStatus: void 0,
	                        responseHeaders: void 0
	                      }, void 0), e;
	                    });
	                  } catch (e) {
	                    throw CodeSee.xhrResponse(p, {
	                      status: "open exception",
	                      httpStatus: void 0,
	                      responseHeaders: void 0
	                    }, void 0), e;
	                  }
	                });
	              };
	            }
	          }(e), Object(g.c)(e));
	        } catch (e) {
	          console.error("CodeSee Error: Unable to instrument browser network requests: ", e);
	        }
	      }
	    }, function (e, t, n) {

	      n.d(t, "a", function () {
	        return O;
	      });
	      n(69), n(41), n(30), n(152), n(149), n(42), n(40), n(20), n(36), n(27), n(37), n(38), n(39), n(25), n(28), n(153), n(154), n(155), n(97), n(156), n(157), n(158), n(213), n(214), n(96);

	      var r = n(166),
	          o = n(70),
	          i = n(72),
	          s = n(172),
	          a = n(173),
	          u = n(174),
	          c = n(8),
	          l = n(0),
	          f = n(43),
	          p = function p(e) {
	        var t = Object(c.a)();

	        if (t.window && t.window.__REACT_DEVTOOLS_GLOBAL_HOOK__) {
	          var n,
	              r = t.window.__REACT_DEVTOOLS_GLOBAL_HOOK__;
	          return r.onCommitFiberRoot = (n = r.onCommitFiberRoot, function () {
	            return e.reactRenderCompleteEvent(), n.apply(void 0, arguments);
	          }), r;
	        }
	      },
	          h = n(71);

	      function d(e, t, n) {
	        return (d = v() ? Reflect.construct : function (e, t, n) {
	          var r = [null];
	          r.push.apply(r, t);
	          var o = new (Function.bind.apply(e, r))();
	          return n && y(o, n.prototype), o;
	        }).apply(null, arguments);
	      }

	      function v() {
	        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
	        if (Reflect.construct.sham) return !1;
	        if ("function" == typeof Proxy) return !0;

	        try {
	          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
	        } catch (e) {
	          return !1;
	        }
	      }

	      function y(e, t) {
	        return (y = Object.setPrototypeOf || function (e, t) {
	          return e.__proto__ = t, e;
	        })(e, t);
	      }

	      function m(e) {
	        return function (e) {
	          if (Array.isArray(e)) return E(e);
	        }(e) || function (e) {
	          if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
	        }(e) || w(e) || function () {
	          throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	        }();
	      }

	      function g(e, t) {
	        var n = Object.keys(e);

	        if (Object.getOwnPropertySymbols) {
	          var r = Object.getOwnPropertySymbols(e);
	          t && (r = r.filter(function (t) {
	            return Object.getOwnPropertyDescriptor(e, t).enumerable;
	          })), n.push.apply(n, r);
	        }

	        return n;
	      }

	      function b(e, t, n) {
	        return t in e ? Object.defineProperty(e, t, {
	          value: n,
	          enumerable: !0,
	          configurable: !0,
	          writable: !0
	        }) : e[t] = n, e;
	      }

	      function S(e, t) {
	        var _n4;

	        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
	          if (Array.isArray(e) || (_n4 = w(e)) || t && e && "number" == typeof e.length) {
	            _n4 && (e = _n4);

	            var r = 0,
	                o = function o() {};

	            return {
	              s: o,
	              n: function n() {
	                return r >= e.length ? {
	                  done: !0
	                } : {
	                  done: !1,
	                  value: e[r++]
	                };
	              },
	              e: function e(_e7) {
	                throw _e7;
	              },
	              f: o
	            };
	          }

	          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	        }

	        var i,
	            s = !0,
	            a = !1;
	        return {
	          s: function s() {
	            _n4 = e[Symbol.iterator]();
	          },
	          n: function n() {
	            var e = _n4.next();

	            return s = e.done, e;
	          },
	          e: function e(_e8) {
	            a = !0, i = _e8;
	          },
	          f: function f() {
	            try {
	              s || null == _n4.return || _n4.return();
	            } finally {
	              if (a) throw i;
	            }
	          }
	        };
	      }

	      function w(e, t) {
	        if (e) {
	          if ("string" == typeof e) return E(e, t);
	          var n = Object.prototype.toString.call(e).slice(8, -1);
	          return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? E(e, t) : void 0;
	        }
	      }

	      function E(e, t) {
	        (null == t || t > e.length) && (t = e.length);

	        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];

	        return r;
	      }

	      function _(e, t) {
	        for (var n = 0; n < t.length; n++) {
	          var r = t[n];
	          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
	        }
	      }

	      var O = function () {
	        function e() {
	          !function (e, t) {
	            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
	          }(this, e), this.typeSizeTracker = i.b;
	          var t = Object(c.b)(),
	              n = t.__codeSeeTrackerImpl || new r.a(t);
	          this._impl = t.__codeSeeTrackerImpl = n;
	        }

	        var t, n;
	        return t = e, (n = [{
	          key: "config",
	          value: function value(e) {
	            this._impl.setConfig(e);
	          }
	        }, {
	          key: "host",
	          get: function get() {
	            return this._impl.config.host;
	          }
	        }, {
	          key: "recording",
	          get: function get() {
	            return this._impl.recording;
	          }
	        }, {
	          key: "toggleRecording",
	          value: function value() {
	            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};

	            this._impl.toggleRecording(e);
	          }
	        }, {
	          key: "buffer",
	          get: function get() {
	            return this._impl.buffer;
	          }
	        }, {
	          key: "source",
	          value: function value(e) {
	            this._impl.source(e);
	          }
	        }, {
	          key: "getSideEffectUID",
	          value: function value() {
	            return this._impl.sideEffectUIDs.getUID();
	          }
	        }, {
	          key: "getTracingHeaderValue",
	          value: function value(e) {
	            var t = this._impl.sessionId;
	            return null !== t ? "".concat(l.TRACING_HEADER_FORMAT_SIMPLE_SESSION_ID, ":").concat(this._impl.recordingId, ":").concat(t, ":").concat(e) : "".concat(l.TRACING_HEADER_FORMAT_COMPOSITE_SESSION_ID, ":").concat(this._impl.recordingId, ":").concat(this._impl.serviceId, ":").concat(this._impl.currentSessionTimestamp, ":").concat(e);
	          }
	        }, {
	          key: "getAuthorizationHeaderValue",
	          value: function value() {
	            return "Bearer ".concat(this._impl.authTokenValue);
	          }
	        }, {
	          key: "setFlagIsActive",
	          value: function value(e, t) {
	            Object(o.b)(e, t);
	          }
	        }, {
	          key: "registerReact",
	          value: function value(e) {
	            this.React = e, this.ReactDevTools = p(this), Object(s.trackReact)(e), Object(h.a)(e);
	          }
	        }, {
	          key: "registerVue",
	          value: function value(e) {
	            this.Vue = e, Object(a.trackVue)(e);
	          }
	        }, {
	          key: "registerImmutable",
	          value: function value(e) {
	            this.Im = e, Object(u.trackImmutable)(e);
	          }
	        }, {
	          key: "read",
	          value: function value(e, t, n) {
	            if (this.recording > l.VERBOSITY_LOW_DATA) {
	              var r = this._impl.serializeSafely(e);

	              this._impl.enqueueEvent("read", {
	                uid: t,
	                loc: n,
	                value: r
	              });
	            }

	            return e;
	          }
	        }, {
	          key: "expr",
	          value: function value(e, t, n) {
	            if (this.recording) {
	              var r = this._impl.serializeSafely(e);

	              this._impl.enqueueEvent("expr", {
	                uid: t,
	                loc: n,
	                value: r
	              });
	            }

	            return e;
	          }
	        }, {
	          key: "funcExp",
	          value: function value(e, t, n) {
	            var r = e;

	            if (this.recording) {
	              var o = this._impl.serializeSafely(e);

	              this._impl.enqueueEvent("funcExpr", {
	                uid: t,
	                loc: n,
	                value: o
	              }), r = new Proxy(e, {
	                apply: this._wrapCallbackExecution(this._impl.recordingId, t, n)
	              });
	            }

	            return r;
	          }
	        }, {
	          key: "_wrapCallbackExecution",
	          value: function value(e, t, n) {
	            var r = this;
	            return function (o, i, s) {
	              return r.recording && r._impl.recordingId === e && r._executionConnectedTo(t, n), o.apply(i, s);
	            };
	          }
	        }, {
	          key: "funcArg",
	          value: function value(e, t, n) {
	            var r = e;

	            if (this.recording > l.VERBOSITY_LOW_DATA) {
	              var o = this._impl.serializeSafely(e);

	              this._impl.enqueueEvent("funcArg", {
	                uid: t,
	                loc: n,
	                value: o
	              }), "function" == typeof e && (r = new Proxy(e, {
	                apply: this._wrapCallbackExecution(this._impl.recordingId, t, n)
	              }));
	            }

	            return r;
	          }
	        }, {
	          key: "getProp",
	          value: function value(e, t, n) {
	            return this.recording, e;
	          }
	        }, {
	          key: "returnVal",
	          value: function value(e, t, n) {
	            if (this.recording) {
	              var r = this._impl.serializeSafely(e);

	              this._impl.enqueueEvent("returnVal", {
	                uid: t,
	                loc: n,
	                value: r
	              });
	            }

	            return e;
	          }
	        }, {
	          key: "test",
	          value: function value(e, t, n) {
	            return this._test(e, t, n, "test");
	          }
	        }, {
	          key: "switchTest",
	          value: function value(e, t, n) {
	            return this._test(e, t, n, "switchTest");
	          }
	        }, {
	          key: "callLikeExpr",
	          value: function value(e, t, n, r) {
	            if (this.recording) {
	              var o = this._impl.serializeSafely(e);

	              this._impl.enqueueEvent("callExp", {
	                uid: t,
	                loc: n,
	                value: o,
	                funcName: r
	              });
	            }

	            return e;
	          }
	        }, {
	          key: "aboutToCall",
	          value: function value(e, t) {
	            this.recording && this._impl.enqueueEvent("aboutToCallExp", {
	              uid: e,
	              loc: t
	            });
	          }
	        }, {
	          key: "aboutToAwait",
	          value: function value(e, t, n) {
	            return this.recording && this.stackFrameExit(t), e;
	          }
	        }, {
	          key: "backFromAwait",
	          value: function value(e, t, n) {
	            if (this.recording) {
	              var r = this._impl.stackFrameUIDs.getUID();

	              this._impl.enteredFrame(r);

	              var o = this._impl.serializeSafely(e);

	              return this._impl.enqueueEvent("awaitExp", {
	                uid: r,
	                resumeUid: t,
	                loc: n,
	                value: o
	              }), r;
	            }
	          }
	        }, {
	          key: "aboutToCallSuper",
	          value: function value(e, t) {
	            this.recording && this._impl.enqueueEvent("aboutToCallSuper", {
	              uid: e,
	              loc: t
	            });
	          }
	        }, {
	          key: "callSuper",
	          value: function value(e, t, n) {
	            if (this.recording) {
	              var r = this._impl.serializeSafely(e);

	              this._impl.enqueueEvent("callSuper", {
	                uid: t,
	                loc: n,
	                value: r
	              });
	            }

	            return e;
	          }
	        }, {
	          key: "preIncr",
	          value: function value(e, t, n) {
	            if (this.recording > l.VERBOSITY_LOW_DATA) {
	              var r = this._impl.serializeSafely(e);

	              this._impl.enqueueEvent("preIncr", {
	                uid: t,
	                loc: n,
	                value: r
	              });
	            }

	            return e;
	          }
	        }, {
	          key: "preDecr",
	          value: function value(e, t, n) {
	            if (this.recording) {
	              var r = this._impl.serializeSafely(e);

	              this._impl.enqueueEvent("preDecr", {
	                uid: t,
	                loc: n,
	                value: r
	              });
	            }

	            return e;
	          }
	        }, {
	          key: "postIncr",
	          value: function value(e, t, n) {
	            if (this.recording > l.VERBOSITY_LOW_DATA) {
	              var r = this._impl.serializeSafely(e);

	              r++, this._impl.enqueueEvent("postIncr", {
	                uid: t,
	                loc: n,
	                value: r
	              });
	            }

	            return e;
	          }
	        }, {
	          key: "postDecr",
	          value: function value(e, t, n) {
	            if (this.recording > l.VERBOSITY_LOW_DATA) {
	              var r = this._impl.serializeSafely(e);

	              r--, this._impl.enqueueEvent("postDecr", {
	                uid: t,
	                loc: n,
	                value: r
	              });
	            }

	            return e;
	          }
	        }, {
	          key: "userMouseEvent",
	          value: function value(e) {
	            if (this.recording) {
	              var t = Object(f.b)(e);

	              this._impl.enqueueEvent("uiEvent", t);
	            }
	          }
	        }, {
	          key: "userKeyEvent",
	          value: function value(e) {
	            if (this.recording) {
	              var t = Object(f.a)(e);

	              this._impl.enqueueEvent("uiEvent", t);
	            }
	          }
	        }, {
	          key: "reactRenderBeginEvent",
	          value: function value() {
	            this.recording && this._impl.enqueueEvent("renderBegin", {
	              type: "react"
	            });
	          }
	        }, {
	          key: "reactRenderCompleteEvent",
	          value: function value() {
	            this.recording && this._impl.enqueueEvent("renderComplete", {
	              type: "react"
	            });
	          }
	        }, {
	          key: "checkForMutations",
	          value: function value() {}
	        }, {
	          key: "before",
	          value: function value(e, t) {
	            this.recording;
	          }
	        }, {
	          key: "after",
	          value: function value(e, t) {
	            if (this.recording) {
	              if (e.writes) {
	                var n,
	                    r = S(e.writes);

	                try {
	                  for (r.s(); !(n = r.n()).done;) {
	                    var o = n.value;

	                    if (Array.isArray(o.name)) {
	                      try {
	                        for (var i = 1; i < o.name.length; i++) o.value = o.value[o.name[i]];
	                      } catch (e) {}

	                      o.name = o.name.map(String).join(".");
	                    }

	                    o.value = this._impl.serializeSafely(o.value);
	                  }
	                } catch (e) {
	                  r.e(e);
	                } finally {
	                  r.f();
	                }
	              }

	              this._impl.enqueueEvent("after", {
	                writes: e.writes,
	                uid: t
	              });
	            }
	          }
	        }, {
	          key: "stackFrameEnter",
	          value: function value(e) {
	            if (this.recording) return e.uid = this._impl.stackFrameUIDs.getUID(), this._impl.enteredFrame(e.uid), this._impl.enqueueEvent("stackFrameEnter", e), e.uid;
	          }
	        }, {
	          key: "stackFrameExit",
	          value: function value(e) {
	            this.recording && (this._impl.exitingFrame(e), this._impl.enqueueEvent("stackFrameExit", {
	              uid: e
	            }));
	          }
	        }, {
	          key: "_executionConnectedTo",
	          value: function value(e, t) {
	            this._impl.enqueueEvent("executionConnectedTo", {
	              frameUID: e,
	              expressionLoc: t
	            });
	          }
	        }, {
	          key: "backFromYield",
	          value: function value(e, t) {
	            if (this.recording) {
	              var n = {
	                resumeUid: e,
	                loc: t
	              };
	              return n.uid = this._impl.stackFrameUIDs.getUID(), this._impl.enteredFrame(n.uid), this._impl.enqueueEvent("backFromYield", n), n.uid;
	            }
	          }
	        }, {
	          key: "caughtInStackFrame",
	          value: function value(e, t) {
	            var n = this;
	            if (this.recording) return this._caughtExceptionInFrame(e, {
	              continuingFrame: function continuingFrame() {
	                n._impl.enqueueEvent("caughtInStackFrame", {
	                  uid: e,
	                  loc: t
	                });
	              },
	              startingNewFrame: function startingNewFrame() {
	                var r = e;
	                e = n._impl.stackFrameUIDs.getUID(), n._impl.enteredFrame(e), n._impl.enqueueEvent("caughtInStackFrameAndResume", {
	                  uid: e,
	                  loc: t,
	                  resumeUid: r
	                });
	              }
	            }), e;
	          }
	        }, {
	          key: "error",
	          value: function value(e, t) {
	            var n = this;
	            this.recording && this._caughtExceptionInFrame(t, {
	              continuingFrame: function continuingFrame() {
	                n._impl.enqueueEvent("stackFrameExit", {
	                  uid: t
	                });
	              }
	            });
	          }
	        }, {
	          key: "_caughtExceptionInFrame",
	          value: function value(e, t) {
	            var n = t.continuingFrame,
	                r = t.startingNewFrame;
	            this._impl.caughtExceptionInFrame(e) ? null == n || n() : null == r || r();
	          }
	        }, {
	          key: "traceLine",
	          value: function value(e, t) {
	            this.recording && this._impl.enqueueEvent("traceLine", function (e) {
	              for (var t = 1; t < arguments.length; t++) {
	                var n = null != arguments[t] ? arguments[t] : {};
	                t % 2 ? g(Object(n), !0).forEach(function (t) {
	                  b(e, t, n[t]);
	                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : g(Object(n)).forEach(function (t) {
	                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
	                });
	              }

	              return e;
	            }({
	              filename: e
	            }, t));
	          }
	        }, {
	          key: "funcInputs",
	          value: function value(e, t) {
	            if (!(this.recording <= l.VERBOSITY_LOW_DATA)) {
	              var n,
	                  r = S(e);

	              try {
	                for (r.s(); !(n = r.n()).done;) {
	                  var o = n.value;
	                  o.value = this._impl.serializeSafely(o.value);
	                }
	              } catch (e) {
	                r.e(e);
	              } finally {
	                r.f();
	              }

	              this._impl.enqueueEvent("funcInputs", {
	                params: e,
	                uid: t
	              });
	            }
	          }
	        }, {
	          key: "catchInput",
	          value: function value(e, t, n, r) {
	            if (this.recording) {
	              var o,
	                  i = S(e);

	              try {
	                for (i.s(); !(o = i.n()).done;) {
	                  var s = o.value;
	                  s.value = this._impl.serializeSafely(s.value);
	                }
	              } catch (e) {
	                i.e(e);
	              } finally {
	                i.f();
	              }

	              this._impl.enqueueEvent("catchInput", {
	                params: e,
	                uid: t,
	                loc: n,
	                filename: r
	              });
	            }
	          }
	        }, {
	          key: "loopStart",
	          value: function value(e, t, n) {
	            this.recording && (this._impl.enqueueEvent("loopStart", {
	              uid: e,
	              loc: t,
	              type: n
	            }), this._impl.enqueueEvent("loopAboutToIterate", {
	              uid: e,
	              loc: t
	            }));
	          }
	        }, {
	          key: "loopIterable",
	          value: function value(e, t, n, r, o) {
	            return this.recording && (this._impl.enqueueEvent("loopStart", {
	              uid: t,
	              loc: r,
	              type: o
	            }), this._impl.enqueueEvent("loopAboutToIterate", {
	              uid: t,
	              loc: n
	            })), e;
	          }
	        }, {
	          key: "loopTest",
	          value: function value(e, t, n) {
	            return this._test(e, t, n, "loopTest");
	          }
	        }, {
	          key: "loopVars",
	          value: function value(e, t) {
	            if (this.recording) {
	              var n,
	                  r = S(e);

	              try {
	                for (r.s(); !(n = r.n()).done;) {
	                  var o = n.value;
	                  o.value = this._impl.serializeSafely(o.value);
	                }
	              } catch (e) {
	                r.e(e);
	              } finally {
	                r.f();
	              }

	              this._impl.enqueueEvent("loopVars", {
	                params: e,
	                uid: t
	              });
	            }
	          }
	        }, {
	          key: "loopBodyBegin",
	          value: function value(e, t) {
	            this.recording && this._impl.enqueueEvent("loopDidIterate", {
	              uid: e,
	              loc: t
	            });
	          }
	        }, {
	          key: "loopBodyEnd",
	          value: function value(e, t) {
	            this.recording && this._impl.enqueueEvent("loopAboutToIterate", {
	              uid: e,
	              loc: t
	            });
	          }
	        }, {
	          key: "loopEnd",
	          value: function value(e, t) {
	            this.recording && (this._impl.enqueueEvent("loopDidIterate", {
	              uid: e,
	              loc: t
	            }), this._impl.enqueueEvent("loopEnd", {
	              uid: e,
	              loc: t
	            }));
	          }
	        }, {
	          key: "xhrSend",
	          value: function value(e) {
	            this.recording && (e.body = this._impl.serializeSafely(e.body), this._impl.enqueueEvent("xhrSend", e));
	          }
	        }, {
	          key: "xhrResponse",
	          value: function value(e, t, n) {
	            var r = t.status,
	                o = t.httpStatus,
	                i = t.responseHeaders;

	            if (this.recording) {
	              var s = this._impl.serializeSafely(n);

	              this._impl.enqueueEvent("xhrResponse", {
	                uid: e,
	                status: r,
	                httpStatus: o,
	                body: s,
	                headers: i
	              });
	            }
	          }
	        }, {
	          key: "stateChange",
	          value: function value(e, t, n, r, o) {
	            this._enqueueStateChangeEvent(e, t, n, r, o, "stateChange", !1);
	          }
	        }, {
	          key: "stateChangeFinish",
	          value: function value(e, t, n, r, o, i) {
	            this._enqueueStateChangeEvent(e, t, n, r, o, "stateChangeFinish", i);
	          }
	        }, {
	          key: "_enqueueStateChangeEvent",
	          value: function value(e, t, n, r, o, i, s) {
	            if (this.recording) {
	              var a = {
	                value: this._impl.serializeSafely(t),
	                oldValue: this._impl.serializeSafely(n),
	                uid: e,
	                changeType: o,
	                partialUpdateCapable: s
	              };
	              r && (a.name = this._impl.serializeSafely(r)), this._impl.enqueueEvent(i, a);
	            }
	          }
	        }, {
	          key: "console",
	          value: function value(e, t) {
	            if (this.recording) {
	              var n = {
	                uid: CodeSee.getSideEffectUID(),
	                method: this._impl.serializeSafely(e),
	                args: this._impl.serializeSafely(t)
	              };

	              this._impl.enqueueEvent("console", n);
	            }
	          }
	        }, {
	          key: "log",
	          value: function value(e) {
	            if (!this.recording) return e;

	            var t = this._impl.serializeSafely(e);

	            return this._impl.enqueueEvent("CodeSeeLog", {
	              value: t
	            }), e;
	          }
	        }, {
	          key: "_test",
	          value: function value(e, t, n, r) {
	            if (this.recording) {
	              var o = this._impl.serializeSafely(e);

	              this._impl.enqueueEvent(r, {
	                uid: t,
	                loc: n,
	                value: o,
	                test: !!e
	              });
	            }

	            return e;
	          }
	        }, {
	          key: "callExp",
	          value: function value(e, t, n, r) {
	            this.recording && this._impl.enqueueEvent("aboutToCallExp", {
	              uid: n,
	              loc: r
	            });
	            var o = e.apply(void 0, m(t));

	            if (this.recording) {
	              var i = this._impl.serializeSafely(o);

	              this._impl.enqueueEvent("callExp", {
	                uid: n,
	                loc: r,
	                value: i
	              });
	            }

	            return o;
	          }
	        }, {
	          key: "newExp",
	          value: function value(e, t, n, r) {
	            this.recording && this._impl.enqueueEvent("aboutToNewExp", {
	              uid: n,
	              loc: r
	            });
	            var o = d(e, m(t));

	            if (this.recording) {
	              var i = this._impl.serializeSafely(o);

	              this._impl.enqueueEvent("newExp", {
	                uid: n,
	                loc: r,
	                value: i
	              });
	            }

	            return o;
	          }
	        }, {
	          key: "callProp",
	          value: function value(e, t, n, r, o) {
	            this.recording > l.VERBOSITY_LOW_DATA && this._impl.enqueueEvent("aboutToCallProp", {
	              uid: r,
	              loc: o
	            });
	            var i = e[t].apply(e, n);

	            if (this.recording) {
	              var s = this._impl.serializeSafely(i);

	              this._impl.enqueueEvent("callProp", {
	                uid: r,
	                loc: o,
	                value: s,
	                funcName: t
	              });
	            }

	            return i;
	          }
	        }, {
	          key: "callPrivateProp",
	          value: function value(e, t, n, r, o, i) {
	            this.recording > l.VERBOSITY_LOW_DATA && this._impl.enqueueEvent("aboutToCallProp", {
	              uid: o,
	              loc: i
	            });
	            var s = n.apply(e, r);

	            if (this.recording > l.VERBOSITY_LOW_DATA) {
	              var a = this._impl.serializeSafely(s);

	              this._impl.enqueueEvent("callProp", {
	                uid: o,
	                loc: i,
	                value: a,
	                funcName: t
	              });
	            }

	            return s;
	          }
	        }]) && _(t.prototype, n), e;
	      }();
	    }, function (e, t, n) {

	      n.r(t), function (e) {
	        n(178);
	        var r,
	            o = n(175),
	            i = n(176),
	            s = n(8),
	            a = n(162);
	        n.d(t, "expressMiddleware", function () {
	          return a.a;
	        });
	        var u = Object(s.a)();
	        u.CodeSee ? r = u.CodeSee : (u.CodeSee = r = function () {
	          var e,
	              t,
	              r = new i.a();

	          try {
	            e = n(151);
	          } catch (e) {}

	          e && r.registerReact(e);

	          try {
	            (t = n(244)).default && (t = t.default);
	          } catch (e) {}

	          t && r.registerVue(t);
	          return r;
	        }(), Object(o.a)(e)), t.default = r;
	      }.call(this, n(29));
	    }, function (e, t, n) {

	      var r = n(22),
	          o = n(163),
	          i = n(164),
	          s = n(165),
	          a = n(8),
	          u = Object(a.a)();
	      void 0 === u.__codesee_serializations_tracked && (u.__codesee_serializations_tracked = !0, r.regCodeSeeNeeds(u), Object(o.trackGlobalDocument)(u), Object(i.trackBrowser)(u), Object(s.trackDate)(u));
	    }, function (e, t, n) {

	      Object.defineProperty(t, "__esModule", {
	        value: !0
	      }), t.PresentObject = void 0;
	      const r = n(75);

	      class o extends r.PresentBase {
	        constructor(e) {
	          super(e), this.properties = {}, this.symbolProperties = {}, Object.defineProperty(this, "_entries", {
	            writable: !0
	          }), Object.defineProperty(this, "_entriesReady", {
	            writable: !0
	          }), this._entries = [], this._entriesReady = !1;
	        }

	        entries() {
	          if (this._entriesReady) return this._entries;

	          const [e, t] = this._propagateProperties(),
	                n = (e, t) => {
	            var n, r;
	            const o = (null === (n = e[1].meta) || void 0 === n ? void 0 : n.enumerable) || !0,
	                  i = (null === (r = t[1].meta) || void 0 === r ? void 0 : r.enumerable) || !0;
	            return o !== i ? o - i : e[0].localeCompare(t[0]);
	          },
	                r = Object.entries(e).sort(n),
	                i = Object.entries(t).sort(n);

	          return this._entries = r.concat(i), this._entries.forEach(e => {
	            e[0] === o.constStr && (e[0] = "constructor");
	          }), this._entriesReady = !0, this._entries;
	        }

	        constructorName() {
	          const e = this.pro.properties[r.PresentBase.constStr] && this.pro.properties[r.PresentBase.constStr].value && this.pro.properties[r.PresentBase.constStr].value.name;
	          return e || void 0;
	        }

	        addProperty(e, t, n) {
	          "constructor" === e && (e = r.PresentBase.constStr), "string" == typeof e ? this.properties[e] = {
	            value: t,
	            meta: n
	          } : this.symbolProperties[e.toString()] = {
	            value: t,
	            meta: n
	          };
	        }

	        _propagateProperties() {
	          const e = [];
	          let t = this.pro;

	          for (; t instanceof o;) e.push(t), t = t.pro;

	          const n = {
	            [o.constStr]: {
	              value: !0
	            }
	          },
	                r = {};

	          for (t = e.pop(); t;) Object.assign(n, t.properties), Object.assign(r, t.symbolProperties), t = e.pop();

	          return delete n[o.constStr], Object.assign(n, this.properties), Object.assign(r, this.symbolProperties), [n, r];
	        }

	      }

	      t.PresentObject = o, o.constStr = "¢$constructor";
	    }, function (e, t, n) {

	      Object.defineProperty(t, "__esModule", {
	        value: !0
	      }), t.PresentSimple = void 0;
	      const r = n(75);

	      class o extends r.PresentBase {
	        setFormattedValue(e) {
	          this.formattedValue = e;
	        }

	        content() {
	          return this.formattedValue || "??";
	        }

	      }

	      t.PresentSimple = o;
	    }, function (e, t) {
	      !function () {

	        for (var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", n = new Uint8Array(256), r = 0; r < e.length; r++) n[e.charCodeAt(r)] = r;

	        t.encode = function (t) {
	          var n,
	              r = new Uint8Array(t),
	              o = r.length,
	              i = "";

	          for (n = 0; n < o; n += 3) i += e[r[n] >> 2], i += e[(3 & r[n]) << 4 | r[n + 1] >> 4], i += e[(15 & r[n + 1]) << 2 | r[n + 2] >> 6], i += e[63 & r[n + 2]];

	          return o % 3 == 2 ? i = i.substring(0, i.length - 1) + "=" : o % 3 == 1 && (i = i.substring(0, i.length - 2) + "=="), i;
	        }, t.decode = function (e) {
	          var t,
	              r,
	              o,
	              i,
	              s,
	              a = .75 * e.length,
	              u = e.length,
	              c = 0;
	          "=" === e[e.length - 1] && (a--, "=" === e[e.length - 2] && a--);
	          var l = new ArrayBuffer(a),
	              f = new Uint8Array(l);

	          for (t = 0; t < u; t += 4) r = n[e.charCodeAt(t)], o = n[e.charCodeAt(t + 1)], i = n[e.charCodeAt(t + 2)], s = n[e.charCodeAt(t + 3)], f[c++] = r << 2 | o >> 4, f[c++] = (15 & o) << 4 | i >> 2, f[c++] = (3 & i) << 6 | 63 & s;

	          return l;
	        };
	      }();
	    }, function (e, t, n) {
	      n(183);
	    }, function (e, t, n) {
	      n(1)({
	        global: !0
	      }, {
	        globalThis: n(3)
	      });
	    }, function (e, t, n) {

	      var r = n(1),
	          o = n(81).includes,
	          i = n(107);
	      r({
	        target: "Array",
	        proto: !0
	      }, {
	        includes: function includes(e) {
	          return o(this, e, arguments.length > 1 ? arguments[1] : void 0);
	        }
	      }), i("includes");
	    }, function (e, t, n) {

	      var r = n(1),
	          o = n(186),
	          i = n(26);
	      r({
	        target: "String",
	        proto: !0,
	        forced: !n(187)("includes")
	      }, {
	        includes: function includes(e) {
	          return !!~String(i(this)).indexOf(o(e), arguments.length > 1 ? arguments[1] : void 0);
	        }
	      });
	    }, function (e, t, n) {
	      var r = n(85);

	      e.exports = function (e) {
	        if (r(e)) throw TypeError("The method doesn't accept regular expressions");
	        return e;
	      };
	    }, function (e, t, n) {
	      var r = n(5)("match");

	      e.exports = function (e) {
	        var t = /./;

	        try {
	          "/./"[e](t);
	        } catch (n) {
	          try {
	            return t[r] = !1, "/./"[e](t);
	          } catch (e) {}
	        }

	        return !1;
	      };
	    }, function (e, t, n) {
	      var r = n(4);
	      e.exports = !r(function () {
	        return Object.isExtensible(Object.preventExtensions({}));
	      });
	    }, function (e, t, n) {
	      var r = n(6);

	      e.exports = function (e) {
	        if (!r(e) && null !== e) throw TypeError("Can't set " + String(e) + " as a prototype");
	        return e;
	      };
	    }, function (e, t, n) {

	      var r = n(63),
	          o = n(64).getWeakData,
	          i = n(2),
	          s = n(6),
	          a = n(65),
	          u = n(10),
	          c = n(53),
	          l = n(12),
	          f = n(23),
	          p = f.set,
	          h = f.getterFor,
	          d = c.find,
	          v = c.findIndex,
	          y = 0,
	          m = function m(e) {
	        return e.frozen || (e.frozen = new g());
	      },
	          g = function g() {
	        this.entries = [];
	      },
	          b = function b(e, t) {
	        return d(e.entries, function (e) {
	          return e[0] === t;
	        });
	      };

	      g.prototype = {
	        get: function get(e) {
	          var t = b(this, e);
	          if (t) return t[1];
	        },
	        has: function has(e) {
	          return !!b(this, e);
	        },
	        set: function set(e, t) {
	          var n = b(this, e);
	          n ? n[1] = t : this.entries.push([e, t]);
	        },
	        delete: function _delete(e) {
	          var t = v(this.entries, function (t) {
	            return t[0] === e;
	          });
	          return ~t && this.entries.splice(t, 1), !!~t;
	        }
	      }, e.exports = {
	        getConstructor: function getConstructor(e, t, n, c) {
	          var f = e(function (e, r) {
	            a(e, f, t), p(e, {
	              type: t,
	              id: y++,
	              frozen: void 0
	            }), null != r && u(r, e[c], {
	              that: e,
	              AS_ENTRIES: n
	            });
	          }),
	              d = h(t),
	              v = function v(e, t, n) {
	            var r = d(e),
	                s = o(i(t), !0);
	            return !0 === s ? m(r).set(t, n) : s[r.id] = n, e;
	          };

	          return r(f.prototype, {
	            delete: function _delete(e) {
	              var t = d(this);
	              if (!s(e)) return !1;
	              var n = o(e);
	              return !0 === n ? m(t).delete(e) : n && l(n, t.id) && delete n[t.id];
	            },
	            has: function has(e) {
	              var t = d(this);
	              if (!s(e)) return !1;
	              var n = o(e);
	              return !0 === n ? m(t).has(e) : n && l(n, t.id);
	            }
	          }), r(f.prototype, n ? {
	            get: function get(e) {
	              var t = d(this);

	              if (s(e)) {
	                var n = o(e);
	                return !0 === n ? m(t).get(e) : n ? n[t.id] : void 0;
	              }
	            },
	            set: function set(e, t) {
	              return v(this, e, t);
	            }
	          } : {
	            add: function add(e) {
	              return v(this, e, !0);
	            }
	          }), f;
	        }
	      };
	    }, function (e, t, n) {

	      var r = n(87),
	          o = n(114);
	      e.exports = r ? {}.toString : function () {
	        return "[object " + o(this) + "]";
	      };
	    }, function (e, t, n) {

	      var r = n(120).IteratorPrototype,
	          o = n(49),
	          i = n(44),
	          s = n(52),
	          a = n(51),
	          u = function u() {
	        return this;
	      };

	      e.exports = function (e, t, n) {
	        var c = t + " Iterator";
	        return e.prototype = o(r, {
	          next: i(1, n)
	        }), s(e, c, !1, !0), a[c] = u, e;
	      };
	    }, function (e, t, n) {
	      var r = n(4);
	      e.exports = !r(function () {
	        function e() {}

	        return e.prototype.constructor = null, Object.getPrototypeOf(new e()) !== e.prototype;
	      });
	    }, function (e, t, n) {

	      var r = n(11).f,
	          o = n(49),
	          i = n(63),
	          s = n(14),
	          a = n(65),
	          u = n(10),
	          c = n(91),
	          l = n(92),
	          f = n(9),
	          p = n(64).fastKey,
	          h = n(23),
	          d = h.set,
	          v = h.getterFor;
	      e.exports = {
	        getConstructor: function getConstructor(e, t, n, c) {
	          var l = e(function (e, r) {
	            a(e, l, t), d(e, {
	              type: t,
	              index: o(null),
	              first: void 0,
	              last: void 0,
	              size: 0
	            }), f || (e.size = 0), null != r && u(r, e[c], {
	              that: e,
	              AS_ENTRIES: n
	            });
	          }),
	              h = v(t),
	              y = function y(e, t, n) {
	            var r,
	                o,
	                i = h(e),
	                s = m(e, t);
	            return s ? s.value = n : (i.last = s = {
	              index: o = p(t, !0),
	              key: t,
	              value: n,
	              previous: r = i.last,
	              next: void 0,
	              removed: !1
	            }, i.first || (i.first = s), r && (r.next = s), f ? i.size++ : e.size++, "F" !== o && (i.index[o] = s)), e;
	          },
	              m = function m(e, t) {
	            var n,
	                r = h(e),
	                o = p(t);
	            if ("F" !== o) return r.index[o];

	            for (n = r.first; n; n = n.next) if (n.key == t) return n;
	          };

	          return i(l.prototype, {
	            clear: function clear() {
	              for (var e = h(this), t = e.index, n = e.first; n;) n.removed = !0, n.previous && (n.previous = n.previous.next = void 0), delete t[n.index], n = n.next;

	              e.first = e.last = void 0, f ? e.size = 0 : this.size = 0;
	            },
	            delete: function _delete(e) {
	              var t = h(this),
	                  n = m(this, e);

	              if (n) {
	                var r = n.next,
	                    o = n.previous;
	                delete t.index[n.index], n.removed = !0, o && (o.next = r), r && (r.previous = o), t.first == n && (t.first = r), t.last == n && (t.last = o), f ? t.size-- : this.size--;
	              }

	              return !!n;
	            },
	            forEach: function forEach(e) {
	              for (var t, n = h(this), r = s(e, arguments.length > 1 ? arguments[1] : void 0, 3); t = t ? t.next : n.first;) for (r(t.value, t.key, this); t && t.removed;) t = t.previous;
	            },
	            has: function has(e) {
	              return !!m(this, e);
	            }
	          }), i(l.prototype, n ? {
	            get: function get(e) {
	              var t = m(this, e);
	              return t && t.value;
	            },
	            set: function set(e, t) {
	              return y(this, 0 === e ? 0 : e, t);
	            }
	          } : {
	            add: function add(e) {
	              return y(this, e = 0 === e ? 0 : e, e);
	            }
	          }), f && r(l.prototype, "size", {
	            get: function get() {
	              return h(this).size;
	            }
	          }), l;
	        },
	        setStrong: function setStrong(e, t, n) {
	          var r = t + " Iterator",
	              o = v(t),
	              i = v(r);
	          c(e, t, function (e, t) {
	            d(this, {
	              type: r,
	              target: e,
	              state: o(e),
	              kind: t,
	              last: void 0
	            });
	          }, function () {
	            for (var e = i(this), t = e.kind, n = e.last; n && n.removed;) n = n.previous;

	            return e.target && (e.last = n = n ? n.next : e.state.first) ? "keys" == t ? {
	              value: n.key,
	              done: !1
	            } : "values" == t ? {
	              value: n.value,
	              done: !1
	            } : {
	              value: [n.key, n.value],
	              done: !1
	            } : (e.target = void 0, {
	              value: void 0,
	              done: !0
	            });
	          }, n ? "entries" : "values", !n, !0), l(t);
	        }
	      };
	    }, function (e, t, n) {
	      var r = n(2),
	          o = n(86);

	      e.exports = function (e) {
	        var t = o(e);
	        if ("function" != typeof t) throw TypeError(String(e) + " is not iterable");
	        return r(t.call(e));
	      };
	    }, function (e, t) {
	      e.exports = function (e, t) {
	        return e === t || e != e && t != t;
	      };
	    }, function (e, t, n) {
	      var r = n(3);
	      e.exports = r.Promise;
	    }, function (e, t, n) {
	      var r = n(62);
	      e.exports = /web0s(?!.*chrome)/i.test(r);
	    }, function (e, t, n) {
	      var r = n(2),
	          o = n(6),
	          i = n(140);

	      e.exports = function (e, t) {
	        if (r(e), o(t) && t.constructor === e) return t;
	        var n = i.f(e);
	        return (0, n.resolve)(t), n.promise;
	      };
	    }, function (e, t, n) {
	      var r = n(3);

	      e.exports = function (e, t) {
	        var n = r.console;
	        n && n.error && (1 === arguments.length ? n.error(e) : n.error(e, t));
	      };
	    }, function (e, t) {
	      e.exports = function (e) {
	        try {
	          return {
	            error: !1,
	            value: e()
	          };
	        } catch (e) {
	          return {
	            error: !0,
	            value: e
	          };
	        }
	      };
	    }, function (e, t, n) {
	      var r = n(9),
	          o = n(3),
	          i = n(61),
	          s = n(116),
	          a = n(11).f,
	          u = n(60).f,
	          c = n(85),
	          l = n(95),
	          f = n(142),
	          p = n(16),
	          h = n(4),
	          d = n(23).set,
	          v = n(92),
	          y = n(5)("match"),
	          m = o.RegExp,
	          g = m.prototype,
	          b = /a/g,
	          S = /a/g,
	          w = new m(b) !== b,
	          E = f.UNSUPPORTED_Y;

	      if (r && i("RegExp", !w || E || h(function () {
	        return S[y] = !1, m(b) != b || m(S) == S || "/a/i" != m(b, "i");
	      }))) {
	        for (var _ = function _(e, t) {
	          var n,
	              r = this instanceof _,
	              o = c(e),
	              i = void 0 === t;
	          if (!r && o && e.constructor === _ && i) return e;
	          w ? o && !i && (e = e.source) : e instanceof _ && (i && (t = l.call(e)), e = e.source), E && (n = !!t && t.indexOf("y") > -1) && (t = t.replace(/y/g, ""));
	          var a = s(w ? new m(e, t) : m(e, t), r ? this : g, _);
	          return E && n && d(a, {
	            sticky: n
	          }), a;
	        }, O = function O(e) {
	          (e in _) || a(_, e, {
	            configurable: !0,
	            get: function get() {
	              return m[e];
	            },
	            set: function set(t) {
	              m[e] = t;
	            }
	          });
	        }, A = u(m), C = 0; A.length > C;) O(A[C++]);

	        g.constructor = _, _.prototype = g, p(o, "RegExp", _);
	      }

	      v("RegExp");
	    }, function (e, t, n) {

	      var r = n(16),
	          o = n(2),
	          i = n(4),
	          s = n(95),
	          a = RegExp.prototype,
	          u = a.toString,
	          c = i(function () {
	        return "/a/b" != u.call({
	          source: "a",
	          flags: "b"
	        });
	      }),
	          l = "toString" != u.name;
	      (c || l) && r(RegExp.prototype, "toString", function () {
	        var e = o(this),
	            t = String(e.source),
	            n = e.flags;
	        return "/" + t + "/" + String(void 0 === n && e instanceof RegExp && !("flags" in a) ? s.call(e) : n);
	      }, {
	        unsafe: !0
	      });
	    }, function (e, t, n) {

	      var r = n(14),
	          o = n(24),
	          i = n(205),
	          s = n(113),
	          a = n(17),
	          u = n(55),
	          c = n(86);

	      e.exports = function (e) {
	        var t,
	            n,
	            l,
	            f,
	            p,
	            h,
	            d = o(e),
	            v = "function" == typeof this ? this : Array,
	            y = arguments.length,
	            m = y > 1 ? arguments[1] : void 0,
	            g = void 0 !== m,
	            b = c(d),
	            S = 0;
	        if (g && (m = r(m, y > 2 ? arguments[2] : void 0, 2)), null == b || v == Array && s(b)) for (n = new v(t = a(d.length)); t > S; S++) h = g ? m(d[S], S) : d[S], u(n, S, h);else for (p = (f = b.call(d)).next, n = new v(); !(l = p.call(f)).done; S++) h = g ? i(f, m, [l.value, S], !0) : l.value, u(n, S, h);
	        return n.length = S, n;
	      };
	    }, function (e, t, n) {
	      var r = n(2),
	          o = n(115);

	      e.exports = function (e, t, n, i) {
	        try {
	          return i ? t(r(n)[0], n[1]) : t(n);
	        } catch (t) {
	          throw o(e), t;
	        }
	      };
	    }, function (e, t, n) {
	      var r = n(1),
	          o = n(145).entries;
	      r({
	        target: "Object",
	        stat: !0
	      }, {
	        entries: function entries(e) {
	          return o(e);
	        }
	      });
	    }, function (e, t, n) {
	      var r = n(1),
	          o = n(208);
	      r({
	        target: "Object",
	        stat: !0,
	        forced: Object.assign !== o
	      }, {
	        assign: o
	      });
	    }, function (e, t, n) {

	      var r = n(9),
	          o = n(4),
	          i = n(50),
	          s = n(83),
	          a = n(56),
	          u = n(24),
	          c = n(45),
	          l = Object.assign,
	          f = Object.defineProperty;
	      e.exports = !l || o(function () {
	        if (r && 1 !== l({
	          b: 1
	        }, l(f({}, "a", {
	          enumerable: !0,
	          get: function get() {
	            f(this, "b", {
	              value: 3,
	              enumerable: !1
	            });
	          }
	        }), {
	          b: 2
	        })).b) return !0;
	        var e = {},
	            t = {},
	            n = Symbol();
	        return e[n] = 7, "abcdefghijklmnopqrst".split("").forEach(function (e) {
	          t[e] = e;
	        }), 7 != l({}, e)[n] || "abcdefghijklmnopqrst" != i(l({}, t)).join("");
	      }) ? function (e, t) {
	        for (var n = u(e), o = arguments.length, l = 1, f = s.f, p = a.f; o > l;) for (var h, d = c(arguments[l++]), v = f ? i(d).concat(f(d)) : i(d), y = v.length, m = 0; y > m;) h = v[m++], r && !p.call(d, h) || (n[h] = d[h]);

	        return n;
	      } : l;
	    }, function (e, t, n) {
	      var r = n(1),
	          o = n(10),
	          i = n(55);
	      r({
	        target: "Object",
	        stat: !0
	      }, {
	        fromEntries: function fromEntries(e) {
	          var t = {};
	          return o(e, function (e, n) {
	            i(t, e, n);
	          }, {
	            AS_ENTRIES: !0
	          }), t;
	        }
	      });
	    }, function (e, t, n) {
	      var r = n(15),
	          o = n(60).f,
	          i = {}.toString,
	          s = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];

	      e.exports.f = function (e) {
	        return s && "[object Window]" == i.call(e) ? function (e) {
	          try {
	            return o(e);
	          } catch (e) {
	            return s.slice();
	          }
	        }(e) : o(r(e));
	      };
	    }, function (e, t, n) {
	      n(1)({
	        target: "String",
	        proto: !0
	      }, {
	        repeat: n(212)
	      });
	    }, function (e, t, n) {

	      var r = n(47),
	          o = n(26);

	      e.exports = "".repeat || function (e) {
	        var t = String(o(this)),
	            n = "",
	            i = r(e);
	        if (i < 0 || i == 1 / 0) throw RangeError("Wrong number of repetitions");

	        for (; i > 0; (i >>>= 1) && (t += t)) 1 & i && (n += t);

	        return n;
	      };
	    }, function (e, t, n) {
	      n(1)({
	        target: "Object",
	        stat: !0
	      }, {
	        setPrototypeOf: n(89)
	      });
	    }, function (e, t, n) {
	      var r = n(1),
	          o = n(19),
	          i = n(13),
	          s = n(2),
	          a = n(6),
	          u = n(49),
	          c = n(148),
	          l = n(4),
	          f = o("Reflect", "construct"),
	          p = l(function () {
	        function e() {}

	        return !(f(function () {}, [], e) instanceof e);
	      }),
	          h = !l(function () {
	        f(function () {});
	      }),
	          d = p || h;
	      r({
	        target: "Reflect",
	        stat: !0,
	        forced: d,
	        sham: d
	      }, {
	        construct: function construct(e, t) {
	          i(e), s(t);
	          var n = arguments.length < 3 ? e : i(arguments[2]);
	          if (h && !p) return f(e, t, n);

	          if (e == n) {
	            switch (t.length) {
	              case 0:
	                return new e();

	              case 1:
	                return new e(t[0]);

	              case 2:
	                return new e(t[0], t[1]);

	              case 3:
	                return new e(t[0], t[1], t[2]);

	              case 4:
	                return new e(t[0], t[1], t[2], t[3]);
	            }

	            var r = [null];
	            return r.push.apply(r, t), new (c.apply(e, r))();
	          }

	          var o = n.prototype,
	              l = u(a(o) ? o : Object.prototype),
	              d = Function.apply.call(e, l, t);
	          return a(d) ? d : l;
	        }
	      });
	    }, function (e, t, n) {
	      var r = n(1),
	          o = n(3),
	          i = n(62),
	          s = [].slice,
	          a = function a(e) {
	        return function (t, n) {
	          var r = arguments.length > 2,
	              o = r ? s.call(arguments, 2) : void 0;
	          return e(r ? function () {
	            ("function" == typeof t ? t : Function(t)).apply(this, o);
	          } : t, n);
	        };
	      };

	      r({
	        global: !0,
	        bind: !0,
	        forced: /MSIE .\./.test(i)
	      }, {
	        setTimeout: a(o.setTimeout),
	        setInterval: a(o.setInterval)
	      });
	    }, function (e, t, n) {

	      var r = n(1),
	          o = n(81).indexOf,
	          i = n(68),
	          s = [].indexOf,
	          a = !!s && 1 / [1].indexOf(1, -0) < 0,
	          u = i("indexOf");
	      r({
	        target: "Array",
	        proto: !0,
	        forced: a || !u
	      }, {
	        indexOf: function indexOf(e) {
	          return a ? s.apply(this, arguments) || 0 : o(this, e, arguments.length > 1 ? arguments[1] : void 0);
	        }
	      });
	    }, function (e, t, n) {
	      var r;
	      "undefined" != typeof window ? r = window : "undefined" != typeof self ? r = self : (console.warn("Using browser-only version of superagent in non-browser environment"), r = this);
	      var o = n(218),
	          i = n(219),
	          s = n(160),
	          a = n(220),
	          u = n(222);

	      function c() {}

	      var l = t = e.exports = function (e, n) {
	        return "function" == typeof n ? new t.Request("GET", e).end(n) : 1 == arguments.length ? new t.Request("GET", e) : new t.Request(e, n);
	      };

	      t.Request = m, l.getXHR = function () {
	        if (!(!r.XMLHttpRequest || r.location && "file:" == r.location.protocol && r.ActiveXObject)) return new XMLHttpRequest();

	        try {
	          return new ActiveXObject("Microsoft.XMLHTTP");
	        } catch (e) {}

	        try {
	          return new ActiveXObject("Msxml2.XMLHTTP.6.0");
	        } catch (e) {}

	        try {
	          return new ActiveXObject("Msxml2.XMLHTTP.3.0");
	        } catch (e) {}

	        try {
	          return new ActiveXObject("Msxml2.XMLHTTP");
	        } catch (e) {}

	        throw Error("Browser-only version of superagent could not find XHR");
	      };
	      var f = "".trim ? function (e) {
	        return e.trim();
	      } : function (e) {
	        return e.replace(/(^\s*|\s*$)/g, "");
	      };

	      function p(e) {
	        if (!s(e)) return e;
	        var t = [];

	        for (var n in e) h(t, n, e[n]);

	        return t.join("&");
	      }

	      function h(e, t, n) {
	        if (null != n) {
	          if (Array.isArray(n)) n.forEach(function (n) {
	            h(e, t, n);
	          });else if (s(n)) for (var r in n) h(e, t + "[" + r + "]", n[r]);else e.push(encodeURIComponent(t) + "=" + encodeURIComponent(n));
	        } else null === n && e.push(encodeURIComponent(t));
	      }

	      function d(e) {
	        for (var t, n, r = {}, o = e.split("&"), i = 0, s = o.length; i < s; ++i) -1 == (n = (t = o[i]).indexOf("=")) ? r[decodeURIComponent(t)] = "" : r[decodeURIComponent(t.slice(0, n))] = decodeURIComponent(t.slice(n + 1));

	        return r;
	      }

	      function v(e) {
	        return /[\/+]json($|[^-\w])/.test(e);
	      }

	      function y(e) {
	        this.req = e, this.xhr = this.req.xhr, this.text = "HEAD" != this.req.method && ("" === this.xhr.responseType || "text" === this.xhr.responseType) || void 0 === this.xhr.responseType ? this.xhr.responseText : null, this.statusText = this.req.xhr.statusText;
	        var t = this.xhr.status;
	        1223 === t && (t = 204), this._setStatusProperties(t), this.header = this.headers = function (e) {
	          for (var t, n, r, o, i = e.split(/\r?\n/), s = {}, a = 0, u = i.length; a < u; ++a) -1 !== (t = (n = i[a]).indexOf(":")) && (r = n.slice(0, t).toLowerCase(), o = f(n.slice(t + 1)), s[r] = o);

	          return s;
	        }(this.xhr.getAllResponseHeaders()), this.header["content-type"] = this.xhr.getResponseHeader("content-type"), this._setHeaderProperties(this.header), null === this.text && e._responseType ? this.body = this.xhr.response : this.body = "HEAD" != this.req.method ? this._parseBody(this.text ? this.text : this.xhr.response) : null;
	      }

	      function m(e, t) {
	        var n = this;
	        this._query = this._query || [], this.method = e, this.url = t, this.header = {}, this._header = {}, this.on("end", function () {
	          var e,
	              t = null,
	              r = null;

	          try {
	            r = new y(n);
	          } catch (e) {
	            return (t = new Error("Parser is unable to parse the response")).parse = !0, t.original = e, n.xhr ? (t.rawResponse = void 0 === n.xhr.responseType ? n.xhr.responseText : n.xhr.response, t.status = n.xhr.status ? n.xhr.status : null, t.statusCode = t.status) : (t.rawResponse = null, t.status = null), n.callback(t);
	          }

	          n.emit("response", r);

	          try {
	            n._isResponseOK(r) || (e = new Error(r.statusText || "Unsuccessful HTTP response"));
	          } catch (t) {
	            e = t;
	          }

	          e ? (e.original = t, e.response = r, e.status = r.status, n.callback(e, r)) : n.callback(null, r);
	        });
	      }

	      function g(e, t, n) {
	        var r = l("DELETE", e);
	        return "function" == typeof t && (n = t, t = null), t && r.send(t), n && r.end(n), r;
	      }

	      l.serializeObject = p, l.parseString = d, l.types = {
	        html: "text/html",
	        json: "application/json",
	        xml: "text/xml",
	        urlencoded: "application/x-www-form-urlencoded",
	        form: "application/x-www-form-urlencoded",
	        "form-data": "application/x-www-form-urlencoded"
	      }, l.serialize = {
	        "application/x-www-form-urlencoded": p,
	        "application/json": JSON.stringify
	      }, l.parse = {
	        "application/x-www-form-urlencoded": d,
	        "application/json": JSON.parse
	      }, a(y.prototype), y.prototype._parseBody = function (e) {
	        var t = l.parse[this.type];
	        return this.req._parser ? this.req._parser(this, e) : (!t && v(this.type) && (t = l.parse["application/json"]), t && e && (e.length || e instanceof Object) ? t(e) : null);
	      }, y.prototype.toError = function () {
	        var e = this.req,
	            t = e.method,
	            n = e.url,
	            r = "cannot " + t + " " + n + " (" + this.status + ")",
	            o = new Error(r);
	        return o.status = this.status, o.method = t, o.url = n, o;
	      }, l.Response = y, o(m.prototype), i(m.prototype), m.prototype.type = function (e) {
	        return this.set("Content-Type", l.types[e] || e), this;
	      }, m.prototype.accept = function (e) {
	        return this.set("Accept", l.types[e] || e), this;
	      }, m.prototype.auth = function (e, t, n) {
	        1 === arguments.length && (t = ""), "object" == typeof t && null !== t && (n = t, t = ""), n || (n = {
	          type: "function" == typeof btoa ? "basic" : "auto"
	        });

	        var r = function r(e) {
	          if ("function" == typeof btoa) return btoa(e);
	          throw new Error("Cannot use basic auth, btoa is not a function");
	        };

	        return this._auth(e, t, n, r);
	      }, m.prototype.query = function (e) {
	        return "string" != typeof e && (e = p(e)), e && this._query.push(e), this;
	      }, m.prototype.attach = function (e, t, n) {
	        if (t) {
	          if (this._data) throw Error("superagent can't mix .send() and .attach()");

	          this._getFormData().append(e, t, n || t.name);
	        }

	        return this;
	      }, m.prototype._getFormData = function () {
	        return this._formData || (this._formData = new r.FormData()), this._formData;
	      }, m.prototype.callback = function (e, t) {
	        if (this._shouldRetry(e, t)) return this._retry();
	        var n = this._callback;
	        this.clearTimeout(), e && (this._maxRetries && (e.retries = this._retries - 1), this.emit("error", e)), n(e, t);
	      }, m.prototype.crossDomainError = function () {
	        var e = new Error("Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.");
	        e.crossDomain = !0, e.status = this.status, e.method = this.method, e.url = this.url, this.callback(e);
	      }, m.prototype.buffer = m.prototype.ca = m.prototype.agent = function () {
	        return console.warn("This is not supported in browser version of superagent"), this;
	      }, m.prototype.pipe = m.prototype.write = function () {
	        throw Error("Streaming is not supported in browser version of superagent");
	      }, m.prototype._isHost = function (e) {
	        return e && "object" == typeof e && !Array.isArray(e) && "[object Object]" !== Object.prototype.toString.call(e);
	      }, m.prototype.end = function (e) {
	        return this._endCalled && console.warn("Warning: .end() was called twice. This is not supported in superagent"), this._endCalled = !0, this._callback = e || c, this._finalizeQueryString(), this._end();
	      }, m.prototype._end = function () {
	        var e = this,
	            t = this.xhr = l.getXHR(),
	            n = this._formData || this._data;
	        this._setTimeouts(), t.onreadystatechange = function () {
	          var n = t.readyState;

	          if (n >= 2 && e._responseTimeoutTimer && clearTimeout(e._responseTimeoutTimer), 4 == n) {
	            var r;

	            try {
	              r = t.status;
	            } catch (e) {
	              r = 0;
	            }

	            if (!r) {
	              if (e.timedout || e._aborted) return;
	              return e.crossDomainError();
	            }

	            e.emit("end");
	          }
	        };

	        var r = function r(t, n) {
	          n.total > 0 && (n.percent = n.loaded / n.total * 100), n.direction = t, e.emit("progress", n);
	        };

	        if (this.hasListeners("progress")) try {
	          t.onprogress = r.bind(null, "download"), t.upload && (t.upload.onprogress = r.bind(null, "upload"));
	        } catch (e) {}

	        try {
	          this.username && this.password ? t.open(this.method, this.url, !0, this.username, this.password) : t.open(this.method, this.url, !0);
	        } catch (e) {
	          return this.callback(e);
	        }

	        if (this._withCredentials && (t.withCredentials = !0), !this._formData && "GET" != this.method && "HEAD" != this.method && "string" != typeof n && !this._isHost(n)) {
	          var o = this._header["content-type"],
	              i = this._serializer || l.serialize[o ? o.split(";")[0] : ""];
	          !i && v(o) && (i = l.serialize["application/json"]), i && (n = i(n));
	        }

	        for (var s in this.header) null != this.header[s] && this.header.hasOwnProperty(s) && t.setRequestHeader(s, this.header[s]);

	        return this._responseType && (t.responseType = this._responseType), this.emit("request", this), t.send(void 0 !== n ? n : null), this;
	      }, l.agent = function () {
	        return new u();
	      }, ["GET", "POST", "OPTIONS", "PATCH", "PUT", "DELETE"].forEach(function (e) {
	        u.prototype[e.toLowerCase()] = function (t, n) {
	          var r = new l.Request(e, t);
	          return this._setDefaults(r), n && r.end(n), r;
	        };
	      }), u.prototype.del = u.prototype.delete, l.get = function (e, t, n) {
	        var r = l("GET", e);
	        return "function" == typeof t && (n = t, t = null), t && r.query(t), n && r.end(n), r;
	      }, l.head = function (e, t, n) {
	        var r = l("HEAD", e);
	        return "function" == typeof t && (n = t, t = null), t && r.query(t), n && r.end(n), r;
	      }, l.options = function (e, t, n) {
	        var r = l("OPTIONS", e);
	        return "function" == typeof t && (n = t, t = null), t && r.send(t), n && r.end(n), r;
	      }, l.del = g, l.delete = g, l.patch = function (e, t, n) {
	        var r = l("PATCH", e);
	        return "function" == typeof t && (n = t, t = null), t && r.send(t), n && r.end(n), r;
	      }, l.post = function (e, t, n) {
	        var r = l("POST", e);
	        return "function" == typeof t && (n = t, t = null), t && r.send(t), n && r.end(n), r;
	      }, l.put = function (e, t, n) {
	        var r = l("PUT", e);
	        return "function" == typeof t && (n = t, t = null), t && r.send(t), n && r.end(n), r;
	      };
	    }, function (e, t, n) {
	      function r(e) {
	        if (e) return function (e) {
	          for (var t in r.prototype) e[t] = r.prototype[t];

	          return e;
	        }(e);
	      }

	      e.exports = r, r.prototype.on = r.prototype.addEventListener = function (e, t) {
	        return this._callbacks = this._callbacks || {}, (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t), this;
	      }, r.prototype.once = function (e, t) {
	        function n() {
	          this.off(e, n), t.apply(this, arguments);
	        }

	        return n.fn = t, this.on(e, n), this;
	      }, r.prototype.off = r.prototype.removeListener = r.prototype.removeAllListeners = r.prototype.removeEventListener = function (e, t) {
	        if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;
	        var n,
	            r = this._callbacks["$" + e];
	        if (!r) return this;
	        if (1 == arguments.length) return delete this._callbacks["$" + e], this;

	        for (var o = 0; o < r.length; o++) if ((n = r[o]) === t || n.fn === t) {
	          r.splice(o, 1);
	          break;
	        }

	        return 0 === r.length && delete this._callbacks["$" + e], this;
	      }, r.prototype.emit = function (e) {
	        this._callbacks = this._callbacks || {};

	        for (var t = new Array(arguments.length - 1), n = this._callbacks["$" + e], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];

	        if (n) {
	          r = 0;

	          for (var o = (n = n.slice(0)).length; r < o; ++r) n[r].apply(this, t);
	        }

	        return this;
	      }, r.prototype.listeners = function (e) {
	        return this._callbacks = this._callbacks || {}, this._callbacks["$" + e] || [];
	      }, r.prototype.hasListeners = function (e) {
	        return !!this.listeners(e).length;
	      };
	    }, function (e, t, n) {

	      var r = n(160);

	      function o(e) {
	        if (e) return function (e) {
	          for (var t in o.prototype) e[t] = o.prototype[t];

	          return e;
	        }(e);
	      }

	      e.exports = o, o.prototype.clearTimeout = function () {
	        return clearTimeout(this._timer), clearTimeout(this._responseTimeoutTimer), delete this._timer, delete this._responseTimeoutTimer, this;
	      }, o.prototype.parse = function (e) {
	        return this._parser = e, this;
	      }, o.prototype.responseType = function (e) {
	        return this._responseType = e, this;
	      }, o.prototype.serialize = function (e) {
	        return this._serializer = e, this;
	      }, o.prototype.timeout = function (e) {
	        if (!e || "object" != typeof e) return this._timeout = e, this._responseTimeout = 0, this;

	        for (var t in e) switch (t) {
	          case "deadline":
	            this._timeout = e.deadline;
	            break;

	          case "response":
	            this._responseTimeout = e.response;
	            break;

	          default:
	            console.warn("Unknown timeout option", t);
	        }

	        return this;
	      }, o.prototype.retry = function (e, t) {
	        return 0 !== arguments.length && !0 !== e || (e = 1), e <= 0 && (e = 0), this._maxRetries = e, this._retries = 0, this._retryCallback = t, this;
	      };
	      var i = ["ECONNRESET", "ETIMEDOUT", "EADDRINFO", "ESOCKETTIMEDOUT"];
	      o.prototype._shouldRetry = function (e, t) {
	        if (!this._maxRetries || this._retries++ >= this._maxRetries) return !1;
	        if (this._retryCallback) try {
	          var n = this._retryCallback(e, t);

	          if (!0 === n) return !0;
	          if (!1 === n) return !1;
	        } catch (e) {
	          console.error(e);
	        }
	        if (t && t.status && t.status >= 500 && 501 != t.status) return !0;

	        if (e) {
	          if (e.code && ~i.indexOf(e.code)) return !0;
	          if (e.timeout && "ECONNABORTED" == e.code) return !0;
	          if (e.crossDomain) return !0;
	        }

	        return !1;
	      }, o.prototype._retry = function () {
	        return this.clearTimeout(), this.req && (this.req = null, this.req = this.request()), this._aborted = !1, this.timedout = !1, this._end();
	      }, o.prototype.then = function (e, t) {
	        if (!this._fullfilledPromise) {
	          var n = this;
	          this._endCalled && console.warn("Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises"), this._fullfilledPromise = new Promise(function (e, t) {
	            n.end(function (n, r) {
	              n ? t(n) : e(r);
	            });
	          });
	        }

	        return this._fullfilledPromise.then(e, t);
	      }, o.prototype.catch = function (e) {
	        return this.then(void 0, e);
	      }, o.prototype.use = function (e) {
	        return e(this), this;
	      }, o.prototype.ok = function (e) {
	        if ("function" != typeof e) throw Error("Callback required");
	        return this._okCallback = e, this;
	      }, o.prototype._isResponseOK = function (e) {
	        return !!e && (this._okCallback ? this._okCallback(e) : e.status >= 200 && e.status < 300);
	      }, o.prototype.get = function (e) {
	        return this._header[e.toLowerCase()];
	      }, o.prototype.getHeader = o.prototype.get, o.prototype.set = function (e, t) {
	        if (r(e)) {
	          for (var n in e) this.set(n, e[n]);

	          return this;
	        }

	        return this._header[e.toLowerCase()] = t, this.header[e] = t, this;
	      }, o.prototype.unset = function (e) {
	        return delete this._header[e.toLowerCase()], delete this.header[e], this;
	      }, o.prototype.field = function (e, t) {
	        if (null == e) throw new Error(".field(name, val) name can not be empty");

	        if (this._data && console.error(".field() can't be used if .send() is used. Please use only .send() or only .field() & .attach()"), r(e)) {
	          for (var n in e) this.field(n, e[n]);

	          return this;
	        }

	        if (Array.isArray(t)) {
	          for (var o in t) this.field(e, t[o]);

	          return this;
	        }

	        if (null == t) throw new Error(".field(name, val) val can not be empty");
	        return "boolean" == typeof t && (t = "" + t), this._getFormData().append(e, t), this;
	      }, o.prototype.abort = function () {
	        return this._aborted || (this._aborted = !0, this.xhr && this.xhr.abort(), this.req && this.req.abort(), this.clearTimeout(), this.emit("abort")), this;
	      }, o.prototype._auth = function (e, t, n, r) {
	        switch (n.type) {
	          case "basic":
	            this.set("Authorization", "Basic " + r(e + ":" + t));
	            break;

	          case "auto":
	            this.username = e, this.password = t;
	            break;

	          case "bearer":
	            this.set("Authorization", "Bearer " + e);
	        }

	        return this;
	      }, o.prototype.withCredentials = function (e) {
	        return null == e && (e = !0), this._withCredentials = e, this;
	      }, o.prototype.redirects = function (e) {
	        return this._maxRedirects = e, this;
	      }, o.prototype.maxResponseSize = function (e) {
	        if ("number" != typeof e) throw TypeError("Invalid argument");
	        return this._maxResponseSize = e, this;
	      }, o.prototype.toJSON = function () {
	        return {
	          method: this.method,
	          url: this.url,
	          data: this._data,
	          headers: this._header
	        };
	      }, o.prototype.send = function (e) {
	        var t = r(e),
	            n = this._header["content-type"];
	        if (this._formData && console.error(".send() can't be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()"), t && !this._data) Array.isArray(e) ? this._data = [] : this._isHost(e) || (this._data = {});else if (e && this._data && this._isHost(this._data)) throw Error("Can't merge these send calls");
	        if (t && r(this._data)) for (var o in e) this._data[o] = e[o];else "string" == typeof e ? (n || this.type("form"), n = this._header["content-type"], this._data = "application/x-www-form-urlencoded" == n ? this._data ? this._data + "&" + e : e : (this._data || "") + e) : this._data = e;
	        return !t || this._isHost(e) || n || this.type("json"), this;
	      }, o.prototype.sortQuery = function (e) {
	        return this._sort = void 0 === e || e, this;
	      }, o.prototype._finalizeQueryString = function () {
	        var e = this._query.join("&");

	        if (e && (this.url += (this.url.indexOf("?") >= 0 ? "&" : "?") + e), this._query.length = 0, this._sort) {
	          var t = this.url.indexOf("?");

	          if (t >= 0) {
	            var n = this.url.substring(t + 1).split("&");
	            "function" == typeof this._sort ? n.sort(this._sort) : n.sort(), this.url = this.url.substring(0, t) + "?" + n.join("&");
	          }
	        }
	      }, o.prototype._appendQueryString = function () {
	        console.trace("Unsupported");
	      }, o.prototype._timeoutError = function (e, t, n) {
	        if (!this._aborted) {
	          var r = new Error(e + t + "ms exceeded");
	          r.timeout = t, r.code = "ECONNABORTED", r.errno = n, this.timedout = !0, this.abort(), this.callback(r);
	        }
	      }, o.prototype._setTimeouts = function () {
	        var e = this;
	        this._timeout && !this._timer && (this._timer = setTimeout(function () {
	          e._timeoutError("Timeout of ", e._timeout, "ETIME");
	        }, this._timeout)), this._responseTimeout && !this._responseTimeoutTimer && (this._responseTimeoutTimer = setTimeout(function () {
	          e._timeoutError("Response timeout of ", e._responseTimeout, "ETIMEDOUT");
	        }, this._responseTimeout));
	      };
	    }, function (e, t, n) {

	      var r = n(221);

	      function o(e) {
	        if (e) return function (e) {
	          for (var t in o.prototype) e[t] = o.prototype[t];

	          return e;
	        }(e);
	      }

	      e.exports = o, o.prototype.get = function (e) {
	        return this.header[e.toLowerCase()];
	      }, o.prototype._setHeaderProperties = function (e) {
	        var t = e["content-type"] || "";
	        this.type = r.type(t);
	        var n = r.params(t);

	        for (var o in n) this[o] = n[o];

	        this.links = {};

	        try {
	          e.link && (this.links = r.parseLinks(e.link));
	        } catch (e) {}
	      }, o.prototype._setStatusProperties = function (e) {
	        var t = e / 100 | 0;
	        this.status = this.statusCode = e, this.statusType = t, this.info = 1 == t, this.ok = 2 == t, this.redirect = 3 == t, this.clientError = 4 == t, this.serverError = 5 == t, this.error = (4 == t || 5 == t) && this.toError(), this.created = 201 == e, this.accepted = 202 == e, this.noContent = 204 == e, this.badRequest = 400 == e, this.unauthorized = 401 == e, this.notAcceptable = 406 == e, this.forbidden = 403 == e, this.notFound = 404 == e, this.unprocessableEntity = 422 == e;
	      };
	    }, function (e, t, n) {

	      t.type = function (e) {
	        return e.split(/ *; */).shift();
	      }, t.params = function (e) {
	        return e.split(/ *; */).reduce(function (e, t) {
	          var n = t.split(/ *= */),
	              r = n.shift(),
	              o = n.shift();
	          return r && o && (e[r] = o), e;
	        }, {});
	      }, t.parseLinks = function (e) {
	        return e.split(/ *, */).reduce(function (e, t) {
	          var n = t.split(/ *; */),
	              r = n[0].slice(1, -1);
	          return e[n[1].split(/ *= */)[1].slice(1, -1)] = r, e;
	        }, {});
	      }, t.cleanHeader = function (e, t) {
	        return delete e["content-type"], delete e["content-length"], delete e["transfer-encoding"], delete e.host, t && (delete e.authorization, delete e.cookie), e;
	      };
	    }, function (e, t) {
	      function n() {
	        this._defaults = [];
	      }

	      ["use", "on", "once", "set", "query", "type", "accept", "auth", "withCredentials", "sortQuery", "retry", "ok", "redirects", "timeout", "buffer", "serialize", "parse", "ca", "key", "pfx", "cert"].forEach(function (e) {
	        n.prototype[e] = function () {
	          return this._defaults.push({
	            fn: e,
	            arguments: arguments
	          }), this;
	        };
	      }), n.prototype._setDefaults = function (e) {
	        this._defaults.forEach(function (t) {
	          e[t.fn].apply(e, t.arguments);
	        });
	      }, e.exports = n;
	    }, function (e, t, n) {

	      var r = n(224),
	          o = n(226);

	      function i() {
	        this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null;
	      }

	      t.parse = b, t.resolve = function (e, t) {
	        return b(e, !1, !0).resolve(t);
	      }, t.resolveObject = function (e, t) {
	        return e ? b(e, !1, !0).resolveObject(t) : t;
	      }, t.format = function (e) {
	        o.isString(e) && (e = b(e));
	        return e instanceof i ? e.format() : i.prototype.format.call(e);
	      }, t.Url = i;
	      var s = /^([a-z0-9.+-]+:)/i,
	          a = /:[0-9]*$/,
	          u = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
	          c = ["{", "}", "|", "\\", "^", "`"].concat(["<", ">", '"', "`", " ", "\r", "\n", "\t"]),
	          l = ["'"].concat(c),
	          f = ["%", "/", "?", ";", "#"].concat(l),
	          p = ["/", "?", "#"],
	          h = /^[+a-z0-9A-Z_-]{0,63}$/,
	          d = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
	          v = {
	        javascript: !0,
	        "javascript:": !0
	      },
	          y = {
	        javascript: !0,
	        "javascript:": !0
	      },
	          m = {
	        http: !0,
	        https: !0,
	        ftp: !0,
	        gopher: !0,
	        file: !0,
	        "http:": !0,
	        "https:": !0,
	        "ftp:": !0,
	        "gopher:": !0,
	        "file:": !0
	      },
	          g = n(227);

	      function b(e, t, n) {
	        if (e && o.isObject(e) && e instanceof i) return e;
	        var r = new i();
	        return r.parse(e, t, n), r;
	      }

	      i.prototype.parse = function (e, t, n) {
	        if (!o.isString(e)) throw new TypeError("Parameter 'url' must be a string, not " + typeof e);
	        var i = e.indexOf("?"),
	            a = -1 !== i && i < e.indexOf("#") ? "?" : "#",
	            c = e.split(a);
	        c[0] = c[0].replace(/\\/g, "/");
	        var b = e = c.join(a);

	        if (b = b.trim(), !n && 1 === e.split("#").length) {
	          var S = u.exec(b);
	          if (S) return this.path = b, this.href = b, this.pathname = S[1], S[2] ? (this.search = S[2], this.query = t ? g.parse(this.search.substr(1)) : this.search.substr(1)) : t && (this.search = "", this.query = {}), this;
	        }

	        var w = s.exec(b);

	        if (w) {
	          var E = (w = w[0]).toLowerCase();
	          this.protocol = E, b = b.substr(w.length);
	        }

	        if (n || w || b.match(/^\/\/[^@\/]+@[^@\/]+/)) {
	          var _ = "//" === b.substr(0, 2);

	          !_ || w && y[w] || (b = b.substr(2), this.slashes = !0);
	        }

	        if (!y[w] && (_ || w && !m[w])) {
	          for (var O, A, C = -1, T = 0; T < p.length; T++) {
	            -1 !== (x = b.indexOf(p[T])) && (-1 === C || x < C) && (C = x);
	          }

	          -1 !== (A = -1 === C ? b.lastIndexOf("@") : b.lastIndexOf("@", C)) && (O = b.slice(0, A), b = b.slice(A + 1), this.auth = decodeURIComponent(O)), C = -1;

	          for (T = 0; T < f.length; T++) {
	            var x;
	            -1 !== (x = b.indexOf(f[T])) && (-1 === C || x < C) && (C = x);
	          }

	          -1 === C && (C = b.length), this.host = b.slice(0, C), b = b.slice(C), this.parseHost(), this.hostname = this.hostname || "";
	          var I = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
	          if (!I) for (var k = this.hostname.split(/\./), j = (T = 0, k.length); T < j; T++) {
	            var R = k[T];

	            if (R && !R.match(h)) {
	              for (var P = "", D = 0, N = R.length; D < N; D++) R.charCodeAt(D) > 127 ? P += "x" : P += R[D];

	              if (!P.match(h)) {
	                var M = k.slice(0, T),
	                    L = k.slice(T + 1),
	                    z = R.match(d);
	                z && (M.push(z[1]), L.unshift(z[2])), L.length && (b = "/" + L.join(".") + b), this.hostname = M.join(".");
	                break;
	              }
	            }
	          }
	          this.hostname.length > 255 ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), I || (this.hostname = r.toASCII(this.hostname));
	          var B = this.port ? ":" + this.port : "",
	              F = this.hostname || "";
	          this.host = F + B, this.href += this.host, I && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), "/" !== b[0] && (b = "/" + b));
	        }

	        if (!v[E]) for (T = 0, j = l.length; T < j; T++) {
	          var V = l[T];

	          if (-1 !== b.indexOf(V)) {
	            var U = encodeURIComponent(V);
	            U === V && (U = escape(V)), b = b.split(V).join(U);
	          }
	        }
	        var H = b.indexOf("#");
	        -1 !== H && (this.hash = b.substr(H), b = b.slice(0, H));
	        var q = b.indexOf("?");

	        if (-1 !== q ? (this.search = b.substr(q), this.query = b.substr(q + 1), t && (this.query = g.parse(this.query)), b = b.slice(0, q)) : t && (this.search = "", this.query = {}), b && (this.pathname = b), m[E] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
	          B = this.pathname || "";
	          var G = this.search || "";
	          this.path = B + G;
	        }

	        return this.href = this.format(), this;
	      }, i.prototype.format = function () {
	        var e = this.auth || "";
	        e && (e = (e = encodeURIComponent(e)).replace(/%3A/i, ":"), e += "@");
	        var t = this.protocol || "",
	            n = this.pathname || "",
	            r = this.hash || "",
	            i = !1,
	            s = "";
	        this.host ? i = e + this.host : this.hostname && (i = e + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]"), this.port && (i += ":" + this.port)), this.query && o.isObject(this.query) && Object.keys(this.query).length && (s = g.stringify(this.query));
	        var a = this.search || s && "?" + s || "";
	        return t && ":" !== t.substr(-1) && (t += ":"), this.slashes || (!t || m[t]) && !1 !== i ? (i = "//" + (i || ""), n && "/" !== n.charAt(0) && (n = "/" + n)) : i || (i = ""), r && "#" !== r.charAt(0) && (r = "#" + r), a && "?" !== a.charAt(0) && (a = "?" + a), t + i + (n = n.replace(/[?#]/g, function (e) {
	          return encodeURIComponent(e);
	        })) + (a = a.replace("#", "%23")) + r;
	      }, i.prototype.resolve = function (e) {
	        return this.resolveObject(b(e, !1, !0)).format();
	      }, i.prototype.resolveObject = function (e) {
	        if (o.isString(e)) {
	          var t = new i();
	          t.parse(e, !1, !0), e = t;
	        }

	        for (var n = new i(), r = Object.keys(this), s = 0; s < r.length; s++) {
	          var a = r[s];
	          n[a] = this[a];
	        }

	        if (n.hash = e.hash, "" === e.href) return n.href = n.format(), n;

	        if (e.slashes && !e.protocol) {
	          for (var u = Object.keys(e), c = 0; c < u.length; c++) {
	            var l = u[c];
	            "protocol" !== l && (n[l] = e[l]);
	          }

	          return m[n.protocol] && n.hostname && !n.pathname && (n.path = n.pathname = "/"), n.href = n.format(), n;
	        }

	        if (e.protocol && e.protocol !== n.protocol) {
	          if (!m[e.protocol]) {
	            for (var f = Object.keys(e), p = 0; p < f.length; p++) {
	              var h = f[p];
	              n[h] = e[h];
	            }

	            return n.href = n.format(), n;
	          }

	          if (n.protocol = e.protocol, e.host || y[e.protocol]) n.pathname = e.pathname;else {
	            for (var d = (e.pathname || "").split("/"); d.length && !(e.host = d.shift()););

	            e.host || (e.host = ""), e.hostname || (e.hostname = ""), "" !== d[0] && d.unshift(""), d.length < 2 && d.unshift(""), n.pathname = d.join("/");
	          }

	          if (n.search = e.search, n.query = e.query, n.host = e.host || "", n.auth = e.auth, n.hostname = e.hostname || e.host, n.port = e.port, n.pathname || n.search) {
	            var v = n.pathname || "",
	                g = n.search || "";
	            n.path = v + g;
	          }

	          return n.slashes = n.slashes || e.slashes, n.href = n.format(), n;
	        }

	        var b = n.pathname && "/" === n.pathname.charAt(0),
	            S = e.host || e.pathname && "/" === e.pathname.charAt(0),
	            w = S || b || n.host && e.pathname,
	            E = w,
	            _ = n.pathname && n.pathname.split("/") || [],
	            O = (d = e.pathname && e.pathname.split("/") || [], n.protocol && !m[n.protocol]);

	        if (O && (n.hostname = "", n.port = null, n.host && ("" === _[0] ? _[0] = n.host : _.unshift(n.host)), n.host = "", e.protocol && (e.hostname = null, e.port = null, e.host && ("" === d[0] ? d[0] = e.host : d.unshift(e.host)), e.host = null), w = w && ("" === d[0] || "" === _[0])), S) n.host = e.host || "" === e.host ? e.host : n.host, n.hostname = e.hostname || "" === e.hostname ? e.hostname : n.hostname, n.search = e.search, n.query = e.query, _ = d;else if (d.length) _ || (_ = []), _.pop(), _ = _.concat(d), n.search = e.search, n.query = e.query;else if (!o.isNullOrUndefined(e.search)) {
	          if (O) n.hostname = n.host = _.shift(), (I = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@")) && (n.auth = I.shift(), n.host = n.hostname = I.shift());
	          return n.search = e.search, n.query = e.query, o.isNull(n.pathname) && o.isNull(n.search) || (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")), n.href = n.format(), n;
	        }
	        if (!_.length) return n.pathname = null, n.search ? n.path = "/" + n.search : n.path = null, n.href = n.format(), n;

	        for (var A = _.slice(-1)[0], C = (n.host || e.host || _.length > 1) && ("." === A || ".." === A) || "" === A, T = 0, x = _.length; x >= 0; x--) "." === (A = _[x]) ? _.splice(x, 1) : ".." === A ? (_.splice(x, 1), T++) : T && (_.splice(x, 1), T--);

	        if (!w && !E) for (; T--; T) _.unshift("..");
	        !w || "" === _[0] || _[0] && "/" === _[0].charAt(0) || _.unshift(""), C && "/" !== _.join("/").substr(-1) && _.push("");

	        var I,
	            k = "" === _[0] || _[0] && "/" === _[0].charAt(0);

	        O && (n.hostname = n.host = k ? "" : _.length ? _.shift() : "", (I = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@")) && (n.auth = I.shift(), n.host = n.hostname = I.shift()));
	        return (w = w || n.host && _.length) && !k && _.unshift(""), _.length ? n.pathname = _.join("/") : (n.pathname = null, n.path = null), o.isNull(n.pathname) && o.isNull(n.search) || (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")), n.auth = e.auth || n.auth, n.slashes = n.slashes || e.slashes, n.href = n.format(), n;
	      }, i.prototype.parseHost = function () {
	        var e = this.host,
	            t = a.exec(e);
	        t && (":" !== (t = t[0]) && (this.port = t.substr(1)), e = e.substr(0, e.length - t.length)), e && (this.hostname = e);
	      };
	    }, function (e, t, n) {
	      (function (e, r) {
	        var o;
	        /*! https://mths.be/punycode v1.4.1 by @mathias */

	        !function (i) {
	          t && t.nodeType, e && e.nodeType;
	          var s = "object" == typeof r && r;
	          s.global !== s && s.window !== s && s.self;
	          var a,
	              u = 2147483647,
	              c = /^xn--/,
	              l = /[^\x20-\x7E]/,
	              f = /[\x2E\u3002\uFF0E\uFF61]/g,
	              p = {
	            overflow: "Overflow: input needs wider integers to process",
	            "not-basic": "Illegal input >= 0x80 (not a basic code point)",
	            "invalid-input": "Invalid input"
	          },
	              h = Math.floor,
	              d = String.fromCharCode;

	          function v(e) {
	            throw new RangeError(p[e]);
	          }

	          function y(e, t) {
	            for (var n = e.length, r = []; n--;) r[n] = t(e[n]);

	            return r;
	          }

	          function m(e, t) {
	            var n = e.split("@"),
	                r = "";
	            return n.length > 1 && (r = n[0] + "@", e = n[1]), r + y((e = e.replace(f, ".")).split("."), t).join(".");
	          }

	          function g(e) {
	            for (var t, n, r = [], o = 0, i = e.length; o < i;) (t = e.charCodeAt(o++)) >= 55296 && t <= 56319 && o < i ? 56320 == (64512 & (n = e.charCodeAt(o++))) ? r.push(((1023 & t) << 10) + (1023 & n) + 65536) : (r.push(t), o--) : r.push(t);

	            return r;
	          }

	          function b(e) {
	            return y(e, function (e) {
	              var t = "";
	              return e > 65535 && (t += d((e -= 65536) >>> 10 & 1023 | 55296), e = 56320 | 1023 & e), t += d(e);
	            }).join("");
	          }

	          function S(e, t) {
	            return e + 22 + 75 * (e < 26) - ((0 != t) << 5);
	          }

	          function w(e, t, n) {
	            var r = 0;

	            for (e = n ? h(e / 700) : e >> 1, e += h(e / t); e > 455; r += 36) e = h(e / 35);

	            return h(r + 36 * e / (e + 38));
	          }

	          function E(e) {
	            var t,
	                n,
	                r,
	                o,
	                i,
	                s,
	                a,
	                c,
	                l,
	                f,
	                p,
	                d = [],
	                y = e.length,
	                m = 0,
	                g = 128,
	                S = 72;

	            for ((n = e.lastIndexOf("-")) < 0 && (n = 0), r = 0; r < n; ++r) e.charCodeAt(r) >= 128 && v("not-basic"), d.push(e.charCodeAt(r));

	            for (o = n > 0 ? n + 1 : 0; o < y;) {
	              for (i = m, s = 1, a = 36; o >= y && v("invalid-input"), ((c = (p = e.charCodeAt(o++)) - 48 < 10 ? p - 22 : p - 65 < 26 ? p - 65 : p - 97 < 26 ? p - 97 : 36) >= 36 || c > h((u - m) / s)) && v("overflow"), m += c * s, !(c < (l = a <= S ? 1 : a >= S + 26 ? 26 : a - S)); a += 36) s > h(u / (f = 36 - l)) && v("overflow"), s *= f;

	              S = w(m - i, t = d.length + 1, 0 == i), h(m / t) > u - g && v("overflow"), g += h(m / t), m %= t, d.splice(m++, 0, g);
	            }

	            return b(d);
	          }

	          function _(e) {
	            var t,
	                n,
	                r,
	                o,
	                i,
	                s,
	                a,
	                c,
	                l,
	                f,
	                p,
	                y,
	                m,
	                b,
	                E,
	                _ = [];

	            for (y = (e = g(e)).length, t = 128, n = 0, i = 72, s = 0; s < y; ++s) (p = e[s]) < 128 && _.push(d(p));

	            for (r = o = _.length, o && _.push("-"); r < y;) {
	              for (a = u, s = 0; s < y; ++s) (p = e[s]) >= t && p < a && (a = p);

	              for (a - t > h((u - n) / (m = r + 1)) && v("overflow"), n += (a - t) * m, t = a, s = 0; s < y; ++s) if ((p = e[s]) < t && ++n > u && v("overflow"), p == t) {
	                for (c = n, l = 36; !(c < (f = l <= i ? 1 : l >= i + 26 ? 26 : l - i)); l += 36) E = c - f, b = 36 - f, _.push(d(S(f + E % b, 0))), c = h(E / b);

	                _.push(d(S(c, 0))), i = w(n, m, r == o), n = 0, ++r;
	              }

	              ++n, ++t;
	            }

	            return _.join("");
	          }

	          a = {
	            version: "1.4.1",
	            ucs2: {
	              decode: g,
	              encode: b
	            },
	            decode: E,
	            encode: _,
	            toASCII: function toASCII(e) {
	              return m(e, function (e) {
	                return l.test(e) ? "xn--" + _(e) : e;
	              });
	            },
	            toUnicode: function toUnicode(e) {
	              return m(e, function (e) {
	                return c.test(e) ? E(e.slice(4).toLowerCase()) : e;
	              });
	            }
	          }, void 0 === (o = function () {
	            return a;
	          }.call(t, n, t, e)) || (e.exports = o);
	        }();
	      }).call(this, n(225)(e), n(29));
	    }, function (e, t) {
	      e.exports = function (e) {
	        return e.webpackPolyfill || (e.deprecate = function () {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
	          enumerable: !0,
	          get: function get() {
	            return e.l;
	          }
	        }), Object.defineProperty(e, "id", {
	          enumerable: !0,
	          get: function get() {
	            return e.i;
	          }
	        }), e.webpackPolyfill = 1), e;
	      };
	    }, function (e, t, n) {

	      e.exports = {
	        isString: function isString(e) {
	          return "string" == typeof e;
	        },
	        isObject: function isObject(e) {
	          return "object" == typeof e && null !== e;
	        },
	        isNull: function isNull(e) {
	          return null === e;
	        },
	        isNullOrUndefined: function isNullOrUndefined(e) {
	          return null == e;
	        }
	      };
	    }, function (e, t, n) {

	      t.decode = t.parse = n(228), t.encode = t.stringify = n(229);
	    }, function (e, t, n) {

	      function r(e, t) {
	        return Object.prototype.hasOwnProperty.call(e, t);
	      }

	      e.exports = function (e, t, n, i) {
	        t = t || "&", n = n || "=";
	        var s = {};
	        if ("string" != typeof e || 0 === e.length) return s;
	        var a = /\+/g;
	        e = e.split(t);
	        var u = 1e3;
	        i && "number" == typeof i.maxKeys && (u = i.maxKeys);
	        var c = e.length;
	        u > 0 && c > u && (c = u);

	        for (var l = 0; l < c; ++l) {
	          var f,
	              p,
	              h,
	              d,
	              v = e[l].replace(a, "%20"),
	              y = v.indexOf(n);
	          y >= 0 ? (f = v.substr(0, y), p = v.substr(y + 1)) : (f = v, p = ""), h = decodeURIComponent(f), d = decodeURIComponent(p), r(s, h) ? o(s[h]) ? s[h].push(d) : s[h] = [s[h], d] : s[h] = d;
	        }

	        return s;
	      };

	      var o = Array.isArray || function (e) {
	        return "[object Array]" === Object.prototype.toString.call(e);
	      };
	    }, function (e, t, n) {

	      var r = function r(e) {
	        switch (typeof e) {
	          case "string":
	            return e;

	          case "boolean":
	            return e ? "true" : "false";

	          case "number":
	            return isFinite(e) ? e : "";

	          default:
	            return "";
	        }
	      };

	      e.exports = function (e, t, n, a) {
	        return t = t || "&", n = n || "=", null === e && (e = void 0), "object" == typeof e ? i(s(e), function (s) {
	          var a = encodeURIComponent(r(s)) + n;
	          return o(e[s]) ? i(e[s], function (e) {
	            return a + encodeURIComponent(r(e));
	          }).join(t) : a + encodeURIComponent(r(e[s]));
	        }).join(t) : a ? encodeURIComponent(r(a)) + n + encodeURIComponent(r(e)) : "";
	      };

	      var o = Array.isArray || function (e) {
	        return "[object Array]" === Object.prototype.toString.call(e);
	      };

	      function i(e, t) {
	        if (e.map) return e.map(t);

	        for (var n = [], r = 0; r < e.length; r++) n.push(t(e[r], r));

	        return n;
	      }

	      var s = Object.keys || function (e) {
	        var t = [];

	        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.push(n);

	        return t;
	      };
	    }, function (e, t, n) {
	      (function (e) {
	        function n(e, t) {
	          for (var n = 0, r = e.length - 1; r >= 0; r--) {
	            var o = e[r];
	            "." === o ? e.splice(r, 1) : ".." === o ? (e.splice(r, 1), n++) : n && (e.splice(r, 1), n--);
	          }

	          if (t) for (; n--; n) e.unshift("..");
	          return e;
	        }

	        function r(e, t) {
	          if (e.filter) return e.filter(t);

	          for (var n = [], r = 0; r < e.length; r++) t(e[r], r, e) && n.push(e[r]);

	          return n;
	        }

	        t.resolve = function () {
	          for (var t = "", o = !1, i = arguments.length - 1; i >= -1 && !o; i--) {
	            var s = i >= 0 ? arguments[i] : e.cwd();
	            if ("string" != typeof s) throw new TypeError("Arguments to path.resolve must be strings");
	            s && (t = s + "/" + t, o = "/" === s.charAt(0));
	          }

	          return (o ? "/" : "") + (t = n(r(t.split("/"), function (e) {
	            return !!e;
	          }), !o).join("/")) || ".";
	        }, t.normalize = function (e) {
	          var i = t.isAbsolute(e),
	              s = "/" === o(e, -1);
	          return (e = n(r(e.split("/"), function (e) {
	            return !!e;
	          }), !i).join("/")) || i || (e = "."), e && s && (e += "/"), (i ? "/" : "") + e;
	        }, t.isAbsolute = function (e) {
	          return "/" === e.charAt(0);
	        }, t.join = function () {
	          var e = Array.prototype.slice.call(arguments, 0);
	          return t.normalize(r(e, function (e, t) {
	            if ("string" != typeof e) throw new TypeError("Arguments to path.join must be strings");
	            return e;
	          }).join("/"));
	        }, t.relative = function (e, n) {
	          function r(e) {
	            for (var t = 0; t < e.length && "" === e[t]; t++);

	            for (var n = e.length - 1; n >= 0 && "" === e[n]; n--);

	            return t > n ? [] : e.slice(t, n - t + 1);
	          }

	          e = t.resolve(e).substr(1), n = t.resolve(n).substr(1);

	          for (var o = r(e.split("/")), i = r(n.split("/")), s = Math.min(o.length, i.length), a = s, u = 0; u < s; u++) if (o[u] !== i[u]) {
	            a = u;
	            break;
	          }

	          var c = [];

	          for (u = a; u < o.length; u++) c.push("..");

	          return (c = c.concat(i.slice(a))).join("/");
	        }, t.sep = "/", t.delimiter = ":", t.dirname = function (e) {
	          if ("string" != typeof e && (e += ""), 0 === e.length) return ".";

	          for (var t = e.charCodeAt(0), n = 47 === t, r = -1, o = !0, i = e.length - 1; i >= 1; --i) if (47 === (t = e.charCodeAt(i))) {
	            if (!o) {
	              r = i;
	              break;
	            }
	          } else o = !1;

	          return -1 === r ? n ? "/" : "." : n && 1 === r ? "/" : e.slice(0, r);
	        }, t.basename = function (e, t) {
	          var n = function (e) {
	            "string" != typeof e && (e += "");
	            var t,
	                n = 0,
	                r = -1,
	                o = !0;

	            for (t = e.length - 1; t >= 0; --t) if (47 === e.charCodeAt(t)) {
	              if (!o) {
	                n = t + 1;
	                break;
	              }
	            } else -1 === r && (o = !1, r = t + 1);

	            return -1 === r ? "" : e.slice(n, r);
	          }(e);

	          return t && n.substr(-1 * t.length) === t && (n = n.substr(0, n.length - t.length)), n;
	        }, t.extname = function (e) {
	          "string" != typeof e && (e += "");

	          for (var t = -1, n = 0, r = -1, o = !0, i = 0, s = e.length - 1; s >= 0; --s) {
	            var a = e.charCodeAt(s);
	            if (47 !== a) -1 === r && (o = !1, r = s + 1), 46 === a ? -1 === t ? t = s : 1 !== i && (i = 1) : -1 !== t && (i = -1);else if (!o) {
	              n = s + 1;
	              break;
	            }
	          }

	          return -1 === t || -1 === r || 0 === i || 1 === i && t === r - 1 && t === n + 1 ? "" : e.slice(t, r);
	        };
	        var o = "b" === "ab".substr(-1) ? function (e, t, n) {
	          return e.substr(t, n);
	        } : function (e, t, n) {
	          return t < 0 && (t = e.length + t), e.substr(t, n);
	        };
	      }).call(this, n(98));
	    }, function (e, t, n) {

	      var r,
	          o = "object" == typeof Reflect ? Reflect : null,
	          i = o && "function" == typeof o.apply ? o.apply : function (e, t, n) {
	        return Function.prototype.apply.call(e, t, n);
	      };
	      r = o && "function" == typeof o.ownKeys ? o.ownKeys : Object.getOwnPropertySymbols ? function (e) {
	        return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
	      } : function (e) {
	        return Object.getOwnPropertyNames(e);
	      };

	      var s = Number.isNaN || function (e) {
	        return e != e;
	      };

	      function a() {
	        a.init.call(this);
	      }

	      e.exports = a, e.exports.once = function (e, t) {
	        return new Promise(function (n, r) {
	          function o(n) {
	            e.removeListener(t, i), r(n);
	          }

	          function i() {
	            "function" == typeof e.removeListener && e.removeListener("error", o), n([].slice.call(arguments));
	          }

	          m(e, t, i, {
	            once: !0
	          }), "error" !== t && function (e, t, n) {
	            "function" == typeof e.on && m(e, "error", t, n);
	          }(e, o, {
	            once: !0
	          });
	        });
	      }, a.EventEmitter = a, a.prototype._events = void 0, a.prototype._eventsCount = 0, a.prototype._maxListeners = void 0;
	      var u = 10;

	      function c(e) {
	        if ("function" != typeof e) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e);
	      }

	      function l(e) {
	        return void 0 === e._maxListeners ? a.defaultMaxListeners : e._maxListeners;
	      }

	      function f(e, t, n, r) {
	        var o, i, s, a;
	        if (c(n), void 0 === (i = e._events) ? (i = e._events = Object.create(null), e._eventsCount = 0) : (void 0 !== i.newListener && (e.emit("newListener", t, n.listener ? n.listener : n), i = e._events), s = i[t]), void 0 === s) s = i[t] = n, ++e._eventsCount;else if ("function" == typeof s ? s = i[t] = r ? [n, s] : [s, n] : r ? s.unshift(n) : s.push(n), (o = l(e)) > 0 && s.length > o && !s.warned) {
	          s.warned = !0;
	          var u = new Error("Possible EventEmitter memory leak detected. " + s.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
	          u.name = "MaxListenersExceededWarning", u.emitter = e, u.type = t, u.count = s.length, a = u, console && console.warn && console.warn(a);
	        }
	        return e;
	      }

	      function p() {
	        if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
	      }

	      function h(e, t, n) {
	        var r = {
	          fired: !1,
	          wrapFn: void 0,
	          target: e,
	          type: t,
	          listener: n
	        },
	            o = p.bind(r);
	        return o.listener = n, r.wrapFn = o, o;
	      }

	      function d(e, t, n) {
	        var r = e._events;
	        if (void 0 === r) return [];
	        var o = r[t];
	        return void 0 === o ? [] : "function" == typeof o ? n ? [o.listener || o] : [o] : n ? function (e) {
	          for (var t = new Array(e.length), n = 0; n < t.length; ++n) t[n] = e[n].listener || e[n];

	          return t;
	        }(o) : y(o, o.length);
	      }

	      function v(e) {
	        var t = this._events;

	        if (void 0 !== t) {
	          var n = t[e];
	          if ("function" == typeof n) return 1;
	          if (void 0 !== n) return n.length;
	        }

	        return 0;
	      }

	      function y(e, t) {
	        for (var n = new Array(t), r = 0; r < t; ++r) n[r] = e[r];

	        return n;
	      }

	      function m(e, t, n, r) {
	        if ("function" == typeof e.on) r.once ? e.once(t, n) : e.on(t, n);else {
	          if ("function" != typeof e.addEventListener) throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e);
	          e.addEventListener(t, function o(i) {
	            r.once && e.removeEventListener(t, o), n(i);
	          });
	        }
	      }

	      Object.defineProperty(a, "defaultMaxListeners", {
	        enumerable: !0,
	        get: function get() {
	          return u;
	        },
	        set: function set(e) {
	          if ("number" != typeof e || e < 0 || s(e)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
	          u = e;
	        }
	      }), a.init = function () {
	        void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
	      }, a.prototype.setMaxListeners = function (e) {
	        if ("number" != typeof e || e < 0 || s(e)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
	        return this._maxListeners = e, this;
	      }, a.prototype.getMaxListeners = function () {
	        return l(this);
	      }, a.prototype.emit = function (e) {
	        for (var t = [], n = 1; n < arguments.length; n++) t.push(arguments[n]);

	        var r = "error" === e,
	            o = this._events;
	        if (void 0 !== o) r = r && void 0 === o.error;else if (!r) return !1;

	        if (r) {
	          var s;
	          if (t.length > 0 && (s = t[0]), s instanceof Error) throw s;
	          var a = new Error("Unhandled error." + (s ? " (" + s.message + ")" : ""));
	          throw a.context = s, a;
	        }

	        var u = o[e];
	        if (void 0 === u) return !1;
	        if ("function" == typeof u) i(u, this, t);else {
	          var c = u.length,
	              l = y(u, c);

	          for (n = 0; n < c; ++n) i(l[n], this, t);
	        }
	        return !0;
	      }, a.prototype.addListener = function (e, t) {
	        return f(this, e, t, !1);
	      }, a.prototype.on = a.prototype.addListener, a.prototype.prependListener = function (e, t) {
	        return f(this, e, t, !0);
	      }, a.prototype.once = function (e, t) {
	        return c(t), this.on(e, h(this, e, t)), this;
	      }, a.prototype.prependOnceListener = function (e, t) {
	        return c(t), this.prependListener(e, h(this, e, t)), this;
	      }, a.prototype.removeListener = function (e, t) {
	        var n, r, o, i, s;
	        if (c(t), void 0 === (r = this._events)) return this;
	        if (void 0 === (n = r[e])) return this;
	        if (n === t || n.listener === t) 0 == --this._eventsCount ? this._events = Object.create(null) : (delete r[e], r.removeListener && this.emit("removeListener", e, n.listener || t));else if ("function" != typeof n) {
	          for (o = -1, i = n.length - 1; i >= 0; i--) if (n[i] === t || n[i].listener === t) {
	            s = n[i].listener, o = i;
	            break;
	          }

	          if (o < 0) return this;
	          0 === o ? n.shift() : function (e, t) {
	            for (; t + 1 < e.length; t++) e[t] = e[t + 1];

	            e.pop();
	          }(n, o), 1 === n.length && (r[e] = n[0]), void 0 !== r.removeListener && this.emit("removeListener", e, s || t);
	        }
	        return this;
	      }, a.prototype.off = a.prototype.removeListener, a.prototype.removeAllListeners = function (e) {
	        var t, n, r;
	        if (void 0 === (n = this._events)) return this;
	        if (void 0 === n.removeListener) return 0 === arguments.length ? (this._events = Object.create(null), this._eventsCount = 0) : void 0 !== n[e] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete n[e]), this;

	        if (0 === arguments.length) {
	          var o,
	              i = Object.keys(n);

	          for (r = 0; r < i.length; ++r) "removeListener" !== (o = i[r]) && this.removeAllListeners(o);

	          return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this;
	        }

	        if ("function" == typeof (t = n[e])) this.removeListener(e, t);else if (void 0 !== t) for (r = t.length - 1; r >= 0; r--) this.removeListener(e, t[r]);
	        return this;
	      }, a.prototype.listeners = function (e) {
	        return d(this, e, !0);
	      }, a.prototype.rawListeners = function (e) {
	        return d(this, e, !1);
	      }, a.listenerCount = function (e, t) {
	        return "function" == typeof e.listenerCount ? e.listenerCount(t) : v.call(e, t);
	      }, a.prototype.listenerCount = v, a.prototype.eventNames = function () {
	        return this._eventsCount > 0 ? r(this._events) : [];
	      };
	    }, function (e, t, n) {

	      var r = n(1),
	          o = n(233).left,
	          i = n(68),
	          s = n(48),
	          a = n(33);
	      r({
	        target: "Array",
	        proto: !0,
	        forced: !i("reduce") || !a && s > 79 && s < 83
	      }, {
	        reduce: function reduce(e) {
	          return o(this, e, arguments.length, arguments.length > 1 ? arguments[1] : void 0);
	        }
	      });
	    }, function (e, t, n) {
	      var r = n(13),
	          o = n(24),
	          i = n(45),
	          s = n(17),
	          a = function a(e) {
	        return function (t, n, a, u) {
	          r(n);
	          var c = o(t),
	              l = i(c),
	              f = s(c.length),
	              p = e ? f - 1 : 0,
	              h = e ? -1 : 1;
	          if (a < 2) for (;;) {
	            if (p in l) {
	              u = l[p], p += h;
	              break;
	            }

	            if (p += h, e ? p < 0 : f <= p) throw TypeError("Reduce of empty array with no initial value");
	          }

	          for (; e ? p >= 0 : f > p; p += h) p in l && (u = n(u, l[p], p, c));

	          return u;
	        };
	      };

	      e.exports = {
	        left: a(!1),
	        right: a(!0)
	      };
	    }, function (e, t, n) {

	      var r = n(1),
	          o = n(235),
	          i = n(24),
	          s = n(17),
	          a = n(47),
	          u = n(90);
	      r({
	        target: "Array",
	        proto: !0
	      }, {
	        flat: function flat() {
	          var e = arguments.length ? arguments[0] : void 0,
	              t = i(this),
	              n = s(t.length),
	              r = u(t, 0);
	          return r.length = o(r, t, t, n, 0, void 0 === e ? 1 : a(e)), r;
	        }
	      });
	    }, function (e, t, n) {

	      var r = n(34),
	          o = n(17),
	          i = n(14),
	          s = function s(e, t, n, a, u, c, l, f) {
	        for (var p, h = u, d = 0, v = !!l && i(l, f, 3); d < a;) {
	          if (d in n) {
	            if (p = v ? v(n[d], d, t) : n[d], c > 0 && r(p)) h = s(e, t, p, o(p.length), h, c - 1) - 1;else {
	              if (h >= 9007199254740991) throw TypeError("Exceed the acceptable array length");
	              e[h] = p;
	            }
	            h++;
	          }

	          d++;
	        }

	        return h;
	      };

	      e.exports = s;
	    }, function (e, t, n) {
	      var r = n(1),
	          o = n(145).values;
	      r({
	        target: "Object",
	        stat: !0
	      }, {
	        values: function values(e) {
	          return o(e);
	        }
	      });
	    }, function (e, t, n) {
	      n(1)({
	        target: "Date",
	        stat: !0
	      }, {
	        now: function now() {
	          return new Date().getTime();
	        }
	      });
	    }, function (e, t, n) {
	      var r = n(16),
	          o = Date.prototype,
	          i = o.toString,
	          s = o.getTime;
	      new Date(NaN) + "" != "Invalid Date" && r(o, "toString", function () {
	        var e = s.call(this);
	        return e == e ? i.call(this) : "Invalid Date";
	      });
	    }, function (e, t, n) {
	      var r = n(1),
	          o = n(240);
	      r({
	        global: !0,
	        forced: parseInt != o
	      }, {
	        parseInt: o
	      });
	    }, function (e, t, n) {
	      var r = n(3),
	          o = n(241).trim,
	          i = n(161),
	          s = r.parseInt,
	          a = /^[+-]?0[Xx]/,
	          u = 8 !== s(i + "08") || 22 !== s(i + "0x16");
	      e.exports = u ? function (e, t) {
	        var n = o(String(e));
	        return s(n, t >>> 0 || (a.test(n) ? 16 : 10));
	      } : s;
	    }, function (e, t, n) {
	      var r = n(26),
	          o = "[" + n(161) + "]",
	          i = RegExp("^" + o + o + "*"),
	          s = RegExp(o + o + "*$"),
	          a = function a(e) {
	        return function (t) {
	          var n = String(r(t));
	          return 1 & e && (n = n.replace(i, "")), 2 & e && (n = n.replace(s, "")), n;
	        };
	      };

	      e.exports = {
	        start: a(1),
	        end: a(2),
	        trim: a(3)
	      };
	    }, function (e, t, n) {
	      var r = n(1),
	          o = n(3),
	          i = n(139),
	          s = n(33),
	          a = o.process;
	      r({
	        global: !0,
	        enumerable: !0,
	        noTargetGet: !0
	      }, {
	        queueMicrotask: function queueMicrotask(e) {
	          var t = s && a.domain;
	          i(t ? t.bind(e) : e);
	        }
	      });
	    }, function (e, t, n) {

	      var r = function () {
	        if ("undefined" != typeof self) return self;
	        if ("undefined" != typeof window) return window;
	        if (void 0 !== r) return r;
	        throw new Error("unable to locate global object");
	      }();

	      e.exports = t = r.fetch, r.fetch && (t.default = r.fetch.bind(r)), t.Headers = r.Headers, t.Request = r.Request, t.Response = r.Response;
	    }, function (e, n) {
	      if (void 0 === t) {
	        var r = new Error("Cannot find module 'vue'");
	        throw r.code = "MODULE_NOT_FOUND", r;
	      }

	      e.exports = t;
	    }, function (e, t, n) {

	      var r,
	          o = new Uint8Array(16);

	      function i() {
	        if (!r && !(r = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto))) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
	        return r(o);
	      }

	      var s = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

	      for (var a = function a(e) {
	        return "string" == typeof e && s.test(e);
	      }, u = [], c = 0; c < 256; ++c) u.push((c + 256).toString(16).substr(1));

	      var l,
	          f,
	          p = function p(e) {
	        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
	            n = (u[e[t + 0]] + u[e[t + 1]] + u[e[t + 2]] + u[e[t + 3]] + "-" + u[e[t + 4]] + u[e[t + 5]] + "-" + u[e[t + 6]] + u[e[t + 7]] + "-" + u[e[t + 8]] + u[e[t + 9]] + "-" + u[e[t + 10]] + u[e[t + 11]] + u[e[t + 12]] + u[e[t + 13]] + u[e[t + 14]] + u[e[t + 15]]).toLowerCase();
	        if (!a(n)) throw TypeError("Stringified UUID is invalid");
	        return n;
	      },
	          h = 0,
	          d = 0;

	      t.a = function (e, t, n) {
	        var r = t && n || 0,
	            o = t || new Array(16),
	            s = (e = e || {}).node || l,
	            a = void 0 !== e.clockseq ? e.clockseq : f;

	        if (null == s || null == a) {
	          var u = e.random || (e.rng || i)();
	          null == s && (s = l = [1 | u[0], u[1], u[2], u[3], u[4], u[5]]), null == a && (a = f = 16383 & (u[6] << 8 | u[7]));
	        }

	        var c = void 0 !== e.msecs ? e.msecs : Date.now(),
	            v = void 0 !== e.nsecs ? e.nsecs : d + 1,
	            y = c - h + (v - d) / 1e4;
	        if (y < 0 && void 0 === e.clockseq && (a = a + 1 & 16383), (y < 0 || c > h) && void 0 === e.nsecs && (v = 0), v >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
	        h = c, d = v, f = a;
	        var m = (1e4 * (268435455 & (c += 122192928e5)) + v) % 4294967296;
	        o[r++] = m >>> 24 & 255, o[r++] = m >>> 16 & 255, o[r++] = m >>> 8 & 255, o[r++] = 255 & m;
	        var g = c / 4294967296 * 1e4 & 268435455;
	        o[r++] = g >>> 8 & 255, o[r++] = 255 & g, o[r++] = g >>> 24 & 15 | 16, o[r++] = g >>> 16 & 255, o[r++] = a >>> 8 | 128, o[r++] = 255 & a;

	        for (var b = 0; b < 6; ++b) o[r + b] = s[b];

	        return t || p(o);
	      };
	    }]);
	  });
	})(codesee_web_hosted);

	/**
	 * Convert a string from camel case to dash-case
	 * @param   {string} string - probably a component tag name
	 * @returns {string} component name normalized
	 */
	function camelToDashCase(string) {
	  return string.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
	}
	/**
	 * Convert a string containing dashes to camel case
	 * @param   {string} string - input string
	 * @returns {string} my-string -> myString
	 */

	function dashToCamelCase(string) {
	  return string.replace(/-(\w)/g, (_, c) => c.toUpperCase());
	}

	/**
	 * Get all the element attributes as object
	 * @param   {HTMLElement} element - DOM node we want to parse
	 * @returns {Object} all the attributes found as a key value pairs
	 */

	function DOMattributesToObject(element) {
	  return Array.from(element.attributes).reduce((acc, attribute) => {
	    acc[dashToCamelCase(attribute.name)] = attribute.value;
	    return acc;
	  }, {});
	}
	/**
	 * Move all the child nodes from a source tag to another
	 * @param   {HTMLElement} source - source node
	 * @param   {HTMLElement} target - target node
	 * @returns {undefined} it's a void method ¯\_(ツ)_/¯
	 */
	// Ignore this helper because it's needed only for svg tags

	function moveChildren(source, target) {
	  if (source.firstChild) {
	    target.appendChild(source.firstChild);
	    moveChildren(source, target);
	  }
	}
	/**
	 * Remove the child nodes from any DOM node
	 * @param   {HTMLElement} node - target node
	 * @returns {undefined}
	 */

	function cleanNode(node) {
	  clearChildren(node.childNodes);
	}
	/**
	 * Clear multiple children in a node
	 * @param   {HTMLElement[]} children - direct children nodes
	 * @returns {undefined}
	 */

	function clearChildren(children) {
	  Array.from(children).forEach(removeChild);
	}
	/**
	 * Remove a node
	 * @param {HTMLElement}node - node to remove
	 * @returns {undefined}
	 */

	const removeChild = node => node && node.parentNode && node.parentNode.removeChild(node);
	/**
	 * Insert before a node
	 * @param {HTMLElement} newNode - node to insert
	 * @param {HTMLElement} refNode - ref child
	 * @returns {undefined}
	 */

	const insertBefore = (newNode, refNode) => refNode && refNode.parentNode && refNode.parentNode.insertBefore(newNode, refNode);
	/**
	 * Replace a node
	 * @param {HTMLElement} newNode - new node to add to the DOM
	 * @param {HTMLElement} replaced - node to replace
	 * @returns {undefined}
	 */

	const replaceChild = (newNode, replaced) => replaced && replaced.parentNode && replaced.parentNode.replaceChild(newNode, replaced);

	// Riot.js constants that can be used accross more modules
	const COMPONENTS_IMPLEMENTATION_MAP$1 = new Map(),
	      DOM_COMPONENT_INSTANCE_PROPERTY$1 = Symbol('riot-component'),
	      PLUGINS_SET$1 = new Set(),
	      IS_DIRECTIVE = 'is',
	      VALUE_ATTRIBUTE = 'value',
	      MOUNT_METHOD_KEY = 'mount',
	      UPDATE_METHOD_KEY = 'update',
	      UNMOUNT_METHOD_KEY = 'unmount',
	      SHOULD_UPDATE_KEY = 'shouldUpdate',
	      ON_BEFORE_MOUNT_KEY = 'onBeforeMount',
	      ON_MOUNTED_KEY = 'onMounted',
	      ON_BEFORE_UPDATE_KEY = 'onBeforeUpdate',
	      ON_UPDATED_KEY = 'onUpdated',
	      ON_BEFORE_UNMOUNT_KEY = 'onBeforeUnmount',
	      ON_UNMOUNTED_KEY = 'onUnmounted',
	      PROPS_KEY = 'props',
	      STATE_KEY = 'state',
	      SLOTS_KEY = 'slots',
	      ROOT_KEY = 'root',
	      IS_PURE_SYMBOL = Symbol('pure'),
	      IS_COMPONENT_UPDATING = Symbol('is_updating'),
	      PARENT_KEY_SYMBOL = Symbol('parent'),
	      ATTRIBUTES_KEY_SYMBOL = Symbol('attributes'),
	      TEMPLATE_KEY_SYMBOL = Symbol('template');

	var globals = /*#__PURE__*/Object.freeze({
		__proto__: null,
		COMPONENTS_IMPLEMENTATION_MAP: COMPONENTS_IMPLEMENTATION_MAP$1,
		DOM_COMPONENT_INSTANCE_PROPERTY: DOM_COMPONENT_INSTANCE_PROPERTY$1,
		PLUGINS_SET: PLUGINS_SET$1,
		IS_DIRECTIVE: IS_DIRECTIVE,
		VALUE_ATTRIBUTE: VALUE_ATTRIBUTE,
		MOUNT_METHOD_KEY: MOUNT_METHOD_KEY,
		UPDATE_METHOD_KEY: UPDATE_METHOD_KEY,
		UNMOUNT_METHOD_KEY: UNMOUNT_METHOD_KEY,
		SHOULD_UPDATE_KEY: SHOULD_UPDATE_KEY,
		ON_BEFORE_MOUNT_KEY: ON_BEFORE_MOUNT_KEY,
		ON_MOUNTED_KEY: ON_MOUNTED_KEY,
		ON_BEFORE_UPDATE_KEY: ON_BEFORE_UPDATE_KEY,
		ON_UPDATED_KEY: ON_UPDATED_KEY,
		ON_BEFORE_UNMOUNT_KEY: ON_BEFORE_UNMOUNT_KEY,
		ON_UNMOUNTED_KEY: ON_UNMOUNTED_KEY,
		PROPS_KEY: PROPS_KEY,
		STATE_KEY: STATE_KEY,
		SLOTS_KEY: SLOTS_KEY,
		ROOT_KEY: ROOT_KEY,
		IS_PURE_SYMBOL: IS_PURE_SYMBOL,
		IS_COMPONENT_UPDATING: IS_COMPONENT_UPDATING,
		PARENT_KEY_SYMBOL: PARENT_KEY_SYMBOL,
		ATTRIBUTES_KEY_SYMBOL: ATTRIBUTES_KEY_SYMBOL,
		TEMPLATE_KEY_SYMBOL: TEMPLATE_KEY_SYMBOL
	});

	const EACH = 0;
	const IF = 1;
	const SIMPLE = 2;
	const TAG = 3;
	const SLOT = 4;
	var bindingTypes = {
	  EACH,
	  IF,
	  SIMPLE,
	  TAG,
	  SLOT
	};

	const ATTRIBUTE = 0;
	const EVENT = 1;
	const TEXT = 2;
	const VALUE = 3;
	var expressionTypes = {
	  ATTRIBUTE,
	  EVENT,
	  TEXT,
	  VALUE
	};

	const HEAD_SYMBOL = Symbol('head');
	const TAIL_SYMBOL = Symbol('tail');

	/**
	 * Create the <template> fragments comment nodes
	 * @return {Object} {{head: Comment, tail: Comment}}
	 */

	function createHeadTailPlaceholders() {
	  const head = document.createComment('fragment head');
	  const tail = document.createComment('fragment tail');
	  head[HEAD_SYMBOL] = true;
	  tail[TAIL_SYMBOL] = true;
	  return {
	    head,
	    tail
	  };
	}

	/**
	 * Create the template meta object in case of <template> fragments
	 * @param   {TemplateChunk} componentTemplate - template chunk object
	 * @returns {Object} the meta property that will be passed to the mount function of the TemplateChunk
	 */

	function createTemplateMeta(componentTemplate) {
	  const fragment = componentTemplate.dom.cloneNode(true);
	  const {
	    head,
	    tail
	  } = createHeadTailPlaceholders();
	  return {
	    avoidDOMInjection: true,
	    fragment,
	    head,
	    tail,
	    children: [head, ...Array.from(fragment.childNodes), tail]
	  };
	}

	/**
	 * Get the current <template> fragment children located in between the head and tail comments
	 * @param {Comment} head - head comment node
	 * @param {Comment} tail - tail comment node
	 * @return {Array[]} children list of the nodes found in this template fragment
	 */

	function getFragmentChildren(_ref) {
	  let {
	    head,
	    tail
	  } = _ref;
	  const nodes = walkNodes([head], head.nextSibling, n => n === tail, false);
	  nodes.push(tail);
	  return nodes;
	}
	/**
	 * Recursive function to walk all the <template> children nodes
	 * @param {Array[]} children - children nodes collection
	 * @param {ChildNode} node - current node
	 * @param {Function} check - exit function check
	 * @param {boolean} isFilterActive - filter flag to skip nodes managed by other bindings
	 * @returns {Array[]} children list of the nodes found in this template fragment
	 */

	function walkNodes(children, node, check, isFilterActive) {
	  const {
	    nextSibling
	  } = node; // filter tail and head nodes together with all the nodes in between
	  // this is needed only to fix a really ugly edge case https://github.com/riot/riot/issues/2892

	  if (!isFilterActive && !node[HEAD_SYMBOL] && !node[TAIL_SYMBOL]) {
	    children.push(node);
	  }

	  if (!nextSibling || check(node)) return children;
	  return walkNodes(children, nextSibling, check, // activate the filters to skip nodes between <template> fragments that will be managed by other bindings
	  isFilterActive && !node[TAIL_SYMBOL] || nextSibling[HEAD_SYMBOL]);
	}

	/**
	 * Quick type checking
	 * @param   {*} element - anything
	 * @param   {string} type - type definition
	 * @returns {boolean} true if the type corresponds
	 */
	function checkType(element, type) {
	  return typeof element === type;
	}
	/**
	 * Check if an element is part of an svg
	 * @param   {HTMLElement}  el - element to check
	 * @returns {boolean} true if we are in an svg context
	 */

	function isSvg(el) {
	  const owner = el.ownerSVGElement;
	  return !!owner || owner === null;
	}
	/**
	 * Check if an element is a template tag
	 * @param   {HTMLElement}  el - element to check
	 * @returns {boolean} true if it's a <template>
	 */

	function isTemplate(el) {
	  return el.tagName.toLowerCase() === 'template';
	}
	/**
	 * Check that will be passed if its argument is a function
	 * @param   {*} value - value to check
	 * @returns {boolean} - true if the value is a function
	 */

	function isFunction(value) {
	  return checkType(value, 'function');
	}
	/**
	 * Check if a value is a Boolean
	 * @param   {*}  value - anything
	 * @returns {boolean} true only for the value is a boolean
	 */

	function isBoolean(value) {
	  return checkType(value, 'boolean');
	}
	/**
	 * Check if a value is an Object
	 * @param   {*}  value - anything
	 * @returns {boolean} true only for the value is an object
	 */

	function isObject(value) {
	  return !isNil(value) && value.constructor === Object;
	}
	/**
	 * Check if a value is null or undefined
	 * @param   {*}  value - anything
	 * @returns {boolean} true only for the 'undefined' and 'null' types
	 */

	function isNil(value) {
	  return value === null || value === undefined;
	}

	/**
	 * ISC License
	 *
	 * Copyright (c) 2020, Andrea Giammarchi, @WebReflection
	 *
	 * Permission to use, copy, modify, and/or distribute this software for any
	 * purpose with or without fee is hereby granted, provided that the above
	 * copyright notice and this permission notice appear in all copies.
	 *
	 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
	 * REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
	 * AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
	 * INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
	 * LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE
	 * OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
	 * PERFORMANCE OF THIS SOFTWARE.
	 */
	// fork of https://github.com/WebReflection/udomdiff version 1.1.0
	// due to https://github.com/WebReflection/udomdiff/pull/2

	/* eslint-disable */

	/**
	 * @param {Node[]} a The list of current/live children
	 * @param {Node[]} b The list of future children
	 * @param {(entry: Node, action: number) => Node} get
	 * The callback invoked per each entry related DOM operation.
	 * @param {Node} [before] The optional node used as anchor to insert before.
	 * @returns {Node[]} The same list of future children.
	 */

	var udomdiff = ((a, b, get, before) => {
	  const bLength = b.length;
	  let aEnd = a.length;
	  let bEnd = bLength;
	  let aStart = 0;
	  let bStart = 0;
	  let map = null;

	  while (aStart < aEnd || bStart < bEnd) {
	    // append head, tail, or nodes in between: fast path
	    if (aEnd === aStart) {
	      // we could be in a situation where the rest of nodes that
	      // need to be added are not at the end, and in such case
	      // the node to `insertBefore`, if the index is more than 0
	      // must be retrieved, otherwise it's gonna be the first item.
	      const node = bEnd < bLength ? bStart ? get(b[bStart - 1], -0).nextSibling : get(b[bEnd - bStart], 0) : before;

	      while (bStart < bEnd) insertBefore(get(b[bStart++], 1), node);
	    } // remove head or tail: fast path
	    else if (bEnd === bStart) {
	        while (aStart < aEnd) {
	          // remove the node only if it's unknown or not live
	          if (!map || !map.has(a[aStart])) removeChild(get(a[aStart], -1));
	          aStart++;
	        }
	      } // same node: fast path
	      else if (a[aStart] === b[bStart]) {
	          aStart++;
	          bStart++;
	        } // same tail: fast path
	        else if (a[aEnd - 1] === b[bEnd - 1]) {
	            aEnd--;
	            bEnd--;
	          } // The once here single last swap "fast path" has been removed in v1.1.0
	          // https://github.com/WebReflection/udomdiff/blob/single-final-swap/esm/index.js#L69-L85
	          // reverse swap: also fast path
	          else if (a[aStart] === b[bEnd - 1] && b[bStart] === a[aEnd - 1]) {
	              // this is a "shrink" operation that could happen in these cases:
	              // [1, 2, 3, 4, 5]
	              // [1, 4, 3, 2, 5]
	              // or asymmetric too
	              // [1, 2, 3, 4, 5]
	              // [1, 2, 3, 5, 6, 4]
	              const node = get(a[--aEnd], -1).nextSibling;
	              insertBefore(get(b[bStart++], 1), get(a[aStart++], -1).nextSibling);
	              insertBefore(get(b[--bEnd], 1), node); // mark the future index as identical (yeah, it's dirty, but cheap 👍)
	              // The main reason to do this, is that when a[aEnd] will be reached,
	              // the loop will likely be on the fast path, as identical to b[bEnd].
	              // In the best case scenario, the next loop will skip the tail,
	              // but in the worst one, this node will be considered as already
	              // processed, bailing out pretty quickly from the map index check

	              a[aEnd] = b[bEnd];
	            } // map based fallback, "slow" path
	            else {
	                // the map requires an O(bEnd - bStart) operation once
	                // to store all future nodes indexes for later purposes.
	                // In the worst case scenario, this is a full O(N) cost,
	                // and such scenario happens at least when all nodes are different,
	                // but also if both first and last items of the lists are different
	                if (!map) {
	                  map = new Map();
	                  let i = bStart;

	                  while (i < bEnd) map.set(b[i], i++);
	                } // if it's a future node, hence it needs some handling


	                if (map.has(a[aStart])) {
	                  // grab the index of such node, 'cause it might have been processed
	                  const index = map.get(a[aStart]); // if it's not already processed, look on demand for the next LCS

	                  if (bStart < index && index < bEnd) {
	                    let i = aStart; // counts the amount of nodes that are the same in the future

	                    let sequence = 1;

	                    while (++i < aEnd && i < bEnd && map.get(a[i]) === index + sequence) sequence++; // effort decision here: if the sequence is longer than replaces
	                    // needed to reach such sequence, which would brings again this loop
	                    // to the fast path, prepend the difference before a sequence,
	                    // and move only the future list index forward, so that aStart
	                    // and bStart will be aligned again, hence on the fast path.
	                    // An example considering aStart and bStart are both 0:
	                    // a: [1, 2, 3, 4]
	                    // b: [7, 1, 2, 3, 6]
	                    // this would place 7 before 1 and, from that time on, 1, 2, and 3
	                    // will be processed at zero cost


	                    if (sequence > index - bStart) {
	                      const node = get(a[aStart], 0);

	                      while (bStart < index) insertBefore(get(b[bStart++], 1), node);
	                    } // if the effort wasn't good enough, fallback to a replace,
	                    // moving both source and target indexes forward, hoping that some
	                    // similar node will be found later on, to go back to the fast path
	                    else {
	                        replaceChild(get(b[bStart++], 1), get(a[aStart++], -1));
	                      }
	                  } // otherwise move the source forward, 'cause there's nothing to do
	                  else aStart++;
	                } // this node has no meaning in the future list, so it's more than safe
	                // to remove it, and check the next live node out instead, meaning
	                // that only the live list index should be forwarded
	                else removeChild(get(a[aStart++], -1));
	              }
	  }

	  return b;
	});

	const UNMOUNT_SCOPE = Symbol('unmount');
	const EachBinding = {
	  // dynamic binding properties
	  // childrenMap: null,
	  // node: null,
	  // root: null,
	  // condition: null,
	  // evaluate: null,
	  // template: null,
	  // isTemplateTag: false,
	  nodes: [],

	  // getKey: null,
	  // indexName: null,
	  // itemName: null,
	  // afterPlaceholder: null,
	  // placeholder: null,
	  // API methods
	  mount(scope, parentScope) {
	    return this.update(scope, parentScope);
	  },

	  update(scope, parentScope) {
	    const {
	      placeholder,
	      nodes,
	      childrenMap
	    } = this;
	    const collection = scope === UNMOUNT_SCOPE ? null : this.evaluate(scope);
	    const items = collection ? Array.from(collection) : []; // prepare the diffing

	    const {
	      newChildrenMap,
	      batches,
	      futureNodes
	    } = createPatch(items, scope, parentScope, this); // patch the DOM only if there are new nodes

	    udomdiff(nodes, futureNodes, patch(Array.from(childrenMap.values()), parentScope), placeholder); // trigger the mounts and the updates

	    batches.forEach(fn => fn()); // update the children map

	    this.childrenMap = newChildrenMap;
	    this.nodes = futureNodes; // make sure that the loop edge nodes are marked

	    markEdgeNodes(this.nodes);
	    return this;
	  },

	  unmount(scope, parentScope) {
	    this.update(UNMOUNT_SCOPE, parentScope);
	    return this;
	  }

	};
	/**
	 * Patch the DOM while diffing
	 * @param   {any[]} redundant - list of all the children (template, nodes, context) added via each
	 * @param   {*} parentScope - scope of the parent template
	 * @returns {Function} patch function used by domdiff
	 */

	function patch(redundant, parentScope) {
	  return (item, info) => {
	    if (info < 0) {
	      // get the last element added to the childrenMap saved previously
	      const element = redundant[redundant.length - 1];

	      if (element) {
	        // get the nodes and the template in stored in the last child of the childrenMap
	        const {
	          template,
	          nodes,
	          context
	        } = element; // remove the last node (notice <template> tags might have more children nodes)

	        nodes.pop(); // notice that we pass null as last argument because
	        // the root node and its children will be removed by domdiff

	        if (nodes.length === 0) {
	          // we have cleared all the children nodes and we can unmount this template
	          redundant.pop();
	          template.unmount(context, parentScope, null);
	        }
	      }
	    }

	    return item;
	  };
	}
	/**
	 * Check whether a template must be filtered from a loop
	 * @param   {Function} condition - filter function
	 * @param   {Object} context - argument passed to the filter function
	 * @returns {boolean} true if this item should be skipped
	 */


	function mustFilterItem(condition, context) {
	  return condition ? Boolean(condition(context)) === false : false;
	}
	/**
	 * Extend the scope of the looped template
	 * @param   {Object} scope - current template scope
	 * @param   {string} options.itemName - key to identify the looped item in the new context
	 * @param   {string} options.indexName - key to identify the index of the looped item
	 * @param   {number} options.index - current index
	 * @param   {*} options.item - collection item looped
	 * @returns {Object} enhanced scope object
	 */


	function extendScope(scope, _ref) {
	  let {
	    itemName,
	    indexName,
	    index,
	    item
	  } = _ref;
	  scope[itemName] = item;
	  if (indexName) scope[indexName] = index;
	  return scope;
	}
	/**
	 * Mark the first and last nodes in order to ignore them in case we need to retrieve the <template> fragment nodes
	 * @param {Array[]} nodes - each binding nodes list
	 * @returns {undefined} void function
	 */


	function markEdgeNodes(nodes) {
	  const first = nodes[0];
	  const last = nodes[nodes.length - 1];
	  if (first) first[HEAD_SYMBOL] = true;
	  if (last) last[TAIL_SYMBOL] = true;
	}
	/**
	 * Loop the current template items
	 * @param   {Array} items - expression collection value
	 * @param   {*} scope - template scope
	 * @param   {*} parentScope - scope of the parent template
	 * @param   {EeachBinding} binding - each binding object instance
	 * @returns {Object} data
	 * @returns {Map} data.newChildrenMap - a Map containing the new children template structure
	 * @returns {Array} data.batches - array containing the template lifecycle functions to trigger
	 * @returns {Array} data.futureNodes - array containing the nodes we need to diff
	 */


	function createPatch(items, scope, parentScope, binding) {
	  const {
	    condition,
	    template,
	    childrenMap,
	    itemName,
	    getKey,
	    indexName,
	    root,
	    isTemplateTag
	  } = binding;
	  const newChildrenMap = new Map();
	  const batches = [];
	  const futureNodes = [];
	  items.forEach((item, index) => {
	    const context = extendScope(Object.create(scope), {
	      itemName,
	      indexName,
	      index,
	      item
	    });
	    const key = getKey ? getKey(context) : index;
	    const oldItem = childrenMap.get(key);
	    const nodes = [];

	    if (mustFilterItem(condition, context)) {
	      return;
	    }

	    const mustMount = !oldItem;
	    const componentTemplate = oldItem ? oldItem.template : template.clone();
	    const el = componentTemplate.el || root.cloneNode();
	    const meta = isTemplateTag && mustMount ? createTemplateMeta(componentTemplate) : componentTemplate.meta;

	    if (mustMount) {
	      batches.push(() => componentTemplate.mount(el, context, parentScope, meta));
	    } else {
	      batches.push(() => componentTemplate.update(context, parentScope));
	    } // create the collection of nodes to update or to add
	    // in case of template tags we need to add all its children nodes


	    if (isTemplateTag) {
	      nodes.push(...(mustMount ? meta.children : getFragmentChildren(meta)));
	    } else {
	      nodes.push(el);
	    } // delete the old item from the children map


	    childrenMap.delete(key);
	    futureNodes.push(...nodes); // update the children map

	    newChildrenMap.set(key, {
	      nodes,
	      template: componentTemplate,
	      context,
	      index
	    });
	  });
	  return {
	    newChildrenMap,
	    batches,
	    futureNodes
	  };
	}

	function create$6(node, _ref2) {
	  let {
	    evaluate,
	    condition,
	    itemName,
	    indexName,
	    getKey,
	    template
	  } = _ref2;
	  const placeholder = document.createTextNode('');
	  const root = node.cloneNode();
	  insertBefore(placeholder, node);
	  removeChild(node);
	  return Object.assign({}, EachBinding, {
	    childrenMap: new Map(),
	    node,
	    root,
	    condition,
	    evaluate,
	    isTemplateTag: isTemplate(root),
	    template: template.createDOM(node),
	    getKey,
	    indexName,
	    itemName,
	    placeholder
	  });
	}

	/**
	 * Binding responsible for the `if` directive
	 */

	const IfBinding = {
	  // dynamic binding properties
	  // node: null,
	  // evaluate: null,
	  // isTemplateTag: false,
	  // placeholder: null,
	  // template: null,
	  // API methods
	  mount(scope, parentScope) {
	    return this.update(scope, parentScope);
	  },

	  update(scope, parentScope) {
	    const value = !!this.evaluate(scope);
	    const mustMount = !this.value && value;
	    const mustUnmount = this.value && !value;

	    const mount = () => {
	      const pristine = this.node.cloneNode();
	      insertBefore(pristine, this.placeholder);
	      this.template = this.template.clone();
	      this.template.mount(pristine, scope, parentScope);
	    };

	    switch (true) {
	      case mustMount:
	        mount();
	        break;

	      case mustUnmount:
	        this.unmount(scope);
	        break;

	      default:
	        if (value) this.template.update(scope, parentScope);
	    }

	    this.value = value;
	    return this;
	  },

	  unmount(scope, parentScope) {
	    this.template.unmount(scope, parentScope, true);
	    return this;
	  }

	};
	function create$5(node, _ref) {
	  let {
	    evaluate,
	    template
	  } = _ref;
	  const placeholder = document.createTextNode('');
	  insertBefore(placeholder, node);
	  removeChild(node);
	  return Object.assign({}, IfBinding, {
	    node,
	    evaluate,
	    placeholder,
	    template: template.createDOM(node)
	  });
	}

	/**
	 * Throw an error with a descriptive message
	 * @param   { string } message - error message
	 * @returns { undefined } hoppla.. at this point the program should stop working
	 */

	function panic(message) {
	  throw new Error(message);
	}
	/**
	 * Returns the memoized (cached) function.
	 * // borrowed from https://www.30secondsofcode.org/js/s/memoize
	 * @param {Function} fn - function to memoize
	 * @returns {Function} memoize function
	 */

	function memoize(fn) {
	  const cache = new Map();

	  const cached = val => {
	    return cache.has(val) ? cache.get(val) : cache.set(val, fn.call(this, val)) && cache.get(val);
	  };

	  cached.cache = cache;
	  return cached;
	}
	/**
	 * Evaluate a list of attribute expressions
	 * @param   {Array} attributes - attribute expressions generated by the riot compiler
	 * @returns {Object} key value pairs with the result of the computation
	 */

	function evaluateAttributeExpressions(attributes) {
	  return attributes.reduce((acc, attribute) => {
	    const {
	      value,
	      type
	    } = attribute;

	    switch (true) {
	      // spread attribute
	      case !attribute.name && type === ATTRIBUTE:
	        return Object.assign({}, acc, value);
	      // value attribute

	      case type === VALUE:
	        acc.value = attribute.value;
	        break;
	      // normal attributes

	      default:
	        acc[dashToCamelCase(attribute.name)] = attribute.value;
	    }

	    return acc;
	  }, {});
	}

	const ElementProto = typeof Element === 'undefined' ? {} : Element.prototype;
	const isNativeHtmlProperty = memoize(name => ElementProto.hasOwnProperty(name)); // eslint-disable-line

	/**
	 * Add all the attributes provided
	 * @param   {HTMLElement} node - target node
	 * @param   {Object} attributes - object containing the attributes names and values
	 * @returns {undefined} sorry it's a void function :(
	 */

	function setAllAttributes(node, attributes) {
	  Object.entries(attributes).forEach(_ref => {
	    let [name, value] = _ref;
	    return attributeExpression(node, {
	      name
	    }, value);
	  });
	}
	/**
	 * Remove all the attributes provided
	 * @param   {HTMLElement} node - target node
	 * @param   {Object} newAttributes - object containing all the new attribute names
	 * @param   {Object} oldAttributes - object containing all the old attribute names
	 * @returns {undefined} sorry it's a void function :(
	 */


	function removeAllAttributes(node, newAttributes, oldAttributes) {
	  const newKeys = newAttributes ? Object.keys(newAttributes) : [];
	  Object.keys(oldAttributes).filter(name => !newKeys.includes(name)).forEach(attribute => node.removeAttribute(attribute));
	}
	/**
	 * Check whether the attribute value can be rendered
	 * @param {*} value - expression value
	 * @returns {boolean} true if we can render this attribute value
	 */


	function canRenderAttribute(value) {
	  return value === true || ['string', 'number'].includes(typeof value);
	}
	/**
	 * Check whether the attribute should be removed
	 * @param {*} value - expression value
	 * @returns {boolean} boolean - true if the attribute can be removed}
	 */


	function shouldRemoveAttribute(value) {
	  return isNil(value) || value === false || value === '';
	}
	/**
	 * This methods handles the DOM attributes updates
	 * @param   {HTMLElement} node - target node
	 * @param   {Object} expression - expression object
	 * @param   {string} expression.name - attribute name
	 * @param   {*} value - new expression value
	 * @param   {*} oldValue - the old expression cached value
	 * @returns {undefined}
	 */


	function attributeExpression(node, _ref2, value, oldValue) {
	  let {
	    name
	  } = _ref2;

	  // is it a spread operator? {...attributes}
	  if (!name) {
	    if (oldValue) {
	      // remove all the old attributes
	      removeAllAttributes(node, value, oldValue);
	    } // is the value still truthy?


	    if (value) {
	      setAllAttributes(node, value);
	    }

	    return;
	  } // handle boolean attributes


	  if (!isNativeHtmlProperty(name) && (isBoolean(value) || isObject(value) || isFunction(value))) {
	    node[name] = value;
	  }

	  if (shouldRemoveAttribute(value)) {
	    node.removeAttribute(name);
	  } else if (canRenderAttribute(value)) {
	    node.setAttribute(name, normalizeValue(name, value));
	  }
	}
	/**
	 * Get the value as string
	 * @param   {string} name - attribute name
	 * @param   {*} value - user input value
	 * @returns {string} input value as string
	 */

	function normalizeValue(name, value) {
	  // be sure that expressions like selected={ true } will be always rendered as selected='selected'
	  if (value === true) return name;
	  return value;
	}

	const RE_EVENTS_PREFIX = /^on/;

	const getCallbackAndOptions = value => Array.isArray(value) ? value : [value, false]; // see also https://medium.com/@WebReflection/dom-handleevent-a-cross-platform-standard-since-year-2000-5bf17287fd38


	const EventListener = {
	  handleEvent(event) {
	    this[event.type](event);
	  }

	};
	const ListenersWeakMap = new WeakMap();

	const createListener = node => {
	  const listener = Object.create(EventListener);
	  ListenersWeakMap.set(node, listener);
	  return listener;
	};
	/**
	 * Set a new event listener
	 * @param   {HTMLElement} node - target node
	 * @param   {Object} expression - expression object
	 * @param   {string} expression.name - event name
	 * @param   {*} value - new expression value
	 * @returns {value} the callback just received
	 */


	function eventExpression(node, _ref, value) {
	  let {
	    name
	  } = _ref;
	  const normalizedEventName = name.replace(RE_EVENTS_PREFIX, '');
	  const eventListener = ListenersWeakMap.get(node) || createListener(node);
	  const [callback, options] = getCallbackAndOptions(value);
	  const handler = eventListener[normalizedEventName];
	  const mustRemoveEvent = handler && !callback;
	  const mustAddEvent = callback && !handler;

	  if (mustRemoveEvent) {
	    node.removeEventListener(normalizedEventName, eventListener);
	  }

	  if (mustAddEvent) {
	    node.addEventListener(normalizedEventName, eventListener, options);
	  }

	  eventListener[normalizedEventName] = callback;
	}

	/**
	 * Normalize the user value in order to render a empty string in case of falsy values
	 * @param   {*} value - user input value
	 * @returns {string} hopefully a string
	 */

	function normalizeStringValue(value) {
	  return isNil(value) ? '' : value;
	}

	/**
	 * Get the the target text node to update or create one from of a comment node
	 * @param   {HTMLElement} node - any html element containing childNodes
	 * @param   {number} childNodeIndex - index of the text node in the childNodes list
	 * @returns {HTMLTextNode} the text node to update
	 */

	const getTextNode = (node, childNodeIndex) => {
	  const target = node.childNodes[childNodeIndex];

	  if (target.nodeType === Node.COMMENT_NODE) {
	    const textNode = document.createTextNode('');
	    node.replaceChild(textNode, target);
	    return textNode;
	  }

	  return target;
	};
	/**
	 * This methods handles a simple text expression update
	 * @param   {HTMLElement} node - target node
	 * @param   {Object} data - expression object
	 * @param   {*} value - new expression value
	 * @returns {undefined}
	 */

	function textExpression(node, data, value) {
	  node.data = normalizeStringValue(value);
	}

	/**
	 * This methods handles the input fileds value updates
	 * @param   {HTMLElement} node - target node
	 * @param   {Object} expression - expression object
	 * @param   {*} value - new expression value
	 * @returns {undefined}
	 */

	function valueExpression(node, expression, value) {
	  node.value = normalizeStringValue(value);
	}

	var expressions = {
	  [ATTRIBUTE]: attributeExpression,
	  [EVENT]: eventExpression,
	  [TEXT]: textExpression,
	  [VALUE]: valueExpression
	};

	const Expression = {
	  // Static props
	  // node: null,
	  // value: null,
	  // API methods

	  /**
	   * Mount the expression evaluating its initial value
	   * @param   {*} scope - argument passed to the expression to evaluate its current values
	   * @returns {Expression} self
	   */
	  mount(scope) {
	    // hopefully a pure function
	    this.value = this.evaluate(scope); // IO() DOM updates

	    apply(this, this.value);
	    return this;
	  },

	  /**
	   * Update the expression if its value changed
	   * @param   {*} scope - argument passed to the expression to evaluate its current values
	   * @returns {Expression} self
	   */
	  update(scope) {
	    // pure function
	    const value = this.evaluate(scope);

	    if (this.value !== value) {
	      // IO() DOM updates
	      apply(this, value);
	      this.value = value;
	    }

	    return this;
	  },

	  /**
	   * Expression teardown method
	   * @returns {Expression} self
	   */
	  unmount() {
	    // unmount only the event handling expressions
	    if (this.type === EVENT) apply(this, null);
	    return this;
	  }

	};
	/**
	 * IO() function to handle the DOM updates
	 * @param {Expression} expression - expression object
	 * @param {*} value - current expression value
	 * @returns {undefined}
	 */

	function apply(expression, value) {
	  return expressions[expression.type](expression.node, expression, value, expression.value);
	}

	function create$4(node, data) {
	  return Object.assign({}, Expression, data, {
	    node: data.type === TEXT ? getTextNode(node, data.childNodeIndex) : node
	  });
	}

	/**
	 * Create a flat object having as keys a list of methods that if dispatched will propagate
	 * on the whole collection
	 * @param   {Array} collection - collection to iterate
	 * @param   {Array<string>} methods - methods to execute on each item of the collection
	 * @param   {*} context - context returned by the new methods created
	 * @returns {Object} a new object to simplify the the nested methods dispatching
	 */
	function flattenCollectionMethods(collection, methods, context) {
	  return methods.reduce((acc, method) => {
	    return Object.assign({}, acc, {
	      [method]: scope => {
	        return collection.map(item => item[method](scope)) && context;
	      }
	    });
	  }, {});
	}

	function create$3(node, _ref) {
	  let {
	    expressions
	  } = _ref;
	  return Object.assign({}, flattenCollectionMethods(expressions.map(expression => create$4(node, expression)), ['mount', 'update', 'unmount']));
	}

	function extendParentScope(attributes, scope, parentScope) {
	  if (!attributes || !attributes.length) return parentScope;
	  const expressions = attributes.map(attr => Object.assign({}, attr, {
	    value: attr.evaluate(scope)
	  }));
	  return Object.assign(Object.create(parentScope || null), evaluateAttributeExpressions(expressions));
	} // this function is only meant to fix an edge case
	// https://github.com/riot/riot/issues/2842


	const getRealParent = (scope, parentScope) => scope[PARENT_KEY_SYMBOL] || parentScope;

	const SlotBinding = {
	  // dynamic binding properties
	  // node: null,
	  // name: null,
	  attributes: [],

	  // template: null,
	  getTemplateScope(scope, parentScope) {
	    return extendParentScope(this.attributes, scope, parentScope);
	  },

	  // API methods
	  mount(scope, parentScope) {
	    const templateData = scope.slots ? scope.slots.find(_ref => {
	      let {
	        id
	      } = _ref;
	      return id === this.name;
	    }) : false;
	    const {
	      parentNode
	    } = this.node;
	    const realParent = getRealParent(scope, parentScope);
	    this.template = templateData && create(templateData.html, templateData.bindings).createDOM(parentNode);

	    if (this.template) {
	      this.template.mount(this.node, this.getTemplateScope(scope, realParent), realParent);
	      this.template.children = Array.from(this.node.childNodes);
	      moveSlotInnerContent(this.node);
	    }

	    removeChild(this.node);
	    return this;
	  },

	  update(scope, parentScope) {
	    if (this.template) {
	      const realParent = getRealParent(scope, parentScope);
	      this.template.update(this.getTemplateScope(scope, realParent), realParent);
	    }

	    return this;
	  },

	  unmount(scope, parentScope, mustRemoveRoot) {
	    if (this.template) {
	      this.template.unmount(this.getTemplateScope(scope, parentScope), null, mustRemoveRoot);
	    }

	    return this;
	  }

	};
	/**
	 * Move the inner content of the slots outside of them
	 * @param   {HTMLElement} slot - slot node
	 * @returns {undefined} it's a void method ¯\_(ツ)_/¯
	 */

	function moveSlotInnerContent(slot) {
	  const child = slot && slot.firstChild;
	  if (!child) return;
	  insertBefore(child, slot);
	  moveSlotInnerContent(slot);
	}
	/**
	 * Create a single slot binding
	 * @param   {HTMLElement} node - slot node
	 * @param   {string} options.name - slot id
	 * @returns {Object} Slot binding object
	 */


	function createSlot(node, _ref2) {
	  let {
	    name,
	    attributes
	  } = _ref2;
	  return Object.assign({}, SlotBinding, {
	    attributes,
	    node,
	    name
	  });
	}

	/**
	 * Create a new tag object if it was registered before, otherwise fallback to the simple
	 * template chunk
	 * @param   {Function} component - component factory function
	 * @param   {Array<Object>} slots - array containing the slots markup
	 * @param   {Array} attributes - dynamic attributes that will be received by the tag element
	 * @returns {TagImplementation|TemplateChunk} a tag implementation or a template chunk as fallback
	 */

	function getTag(component, slots, attributes) {
	  if (slots === void 0) {
	    slots = [];
	  }

	  if (attributes === void 0) {
	    attributes = [];
	  }

	  // if this tag was registered before we will return its implementation
	  if (component) {
	    return component({
	      slots,
	      attributes
	    });
	  } // otherwise we return a template chunk


	  return create(slotsToMarkup(slots), [...slotBindings(slots), {
	    // the attributes should be registered as binding
	    // if we fallback to a normal template chunk
	    expressions: attributes.map(attr => {
	      return Object.assign({
	        type: ATTRIBUTE
	      }, attr);
	    })
	  }]);
	}
	/**
	 * Merge all the slots bindings into a single array
	 * @param   {Array<Object>} slots - slots collection
	 * @returns {Array<Bindings>} flatten bindings array
	 */


	function slotBindings(slots) {
	  return slots.reduce((acc, _ref) => {
	    let {
	      bindings
	    } = _ref;
	    return acc.concat(bindings);
	  }, []);
	}
	/**
	 * Merge all the slots together in a single markup string
	 * @param   {Array<Object>} slots - slots collection
	 * @returns {string} markup of all the slots in a single string
	 */


	function slotsToMarkup(slots) {
	  return slots.reduce((acc, slot) => {
	    return acc + slot.html;
	  }, '');
	}

	const TagBinding = {
	  // dynamic binding properties
	  // node: null,
	  // evaluate: null,
	  // name: null,
	  // slots: null,
	  // tag: null,
	  // attributes: null,
	  // getComponent: null,
	  mount(scope) {
	    return this.update(scope);
	  },

	  update(scope, parentScope) {
	    const name = this.evaluate(scope); // simple update

	    if (name && name === this.name) {
	      this.tag.update(scope);
	    } else {
	      // unmount the old tag if it exists
	      this.unmount(scope, parentScope, true); // mount the new tag

	      this.name = name;
	      this.tag = getTag(this.getComponent(name), this.slots, this.attributes);
	      this.tag.mount(this.node, scope);
	    }

	    return this;
	  },

	  unmount(scope, parentScope, keepRootTag) {
	    if (this.tag) {
	      // keep the root tag
	      this.tag.unmount(keepRootTag);
	    }

	    return this;
	  }

	};
	function create$2(node, _ref2) {
	  let {
	    evaluate,
	    getComponent,
	    slots,
	    attributes
	  } = _ref2;
	  return Object.assign({}, TagBinding, {
	    node,
	    evaluate,
	    slots,
	    attributes,
	    getComponent
	  });
	}

	var bindings = {
	  [IF]: create$5,
	  [SIMPLE]: create$3,
	  [EACH]: create$6,
	  [TAG]: create$2,
	  [SLOT]: createSlot
	};

	/**
	 * Text expressions in a template tag will get childNodeIndex value normalized
	 * depending on the position of the <template> tag offset
	 * @param   {Expression[]} expressions - riot expressions array
	 * @param   {number} textExpressionsOffset - offset of the <template> tag
	 * @returns {Expression[]} expressions containing the text expressions normalized
	 */

	function fixTextExpressionsOffset(expressions, textExpressionsOffset) {
	  return expressions.map(e => e.type === TEXT ? Object.assign({}, e, {
	    childNodeIndex: e.childNodeIndex + textExpressionsOffset
	  }) : e);
	}
	/**
	 * Bind a new expression object to a DOM node
	 * @param   {HTMLElement} root - DOM node where to bind the expression
	 * @param   {Object} binding - binding data
	 * @param   {number|null} templateTagOffset - if it's defined we need to fix the text expressions childNodeIndex offset
	 * @returns {Binding} Binding object
	 */


	function create$1(root, binding, templateTagOffset) {
	  const {
	    selector,
	    type,
	    redundantAttribute,
	    expressions
	  } = binding; // find the node to apply the bindings

	  const node = selector ? root.querySelector(selector) : root; // remove eventually additional attributes created only to select this node

	  if (redundantAttribute) node.removeAttribute(redundantAttribute);
	  const bindingExpressions = expressions || []; // init the binding

	  return (bindings[type] || bindings[SIMPLE])(node, Object.assign({}, binding, {
	    expressions: templateTagOffset && !selector ? fixTextExpressionsOffset(bindingExpressions, templateTagOffset) : bindingExpressions
	  }));
	}

	function createHTMLTree(html, root) {
	  const template = isTemplate(root) ? root : document.createElement('template');
	  template.innerHTML = html;
	  return template.content;
	} // for svg nodes we need a bit more work


	function createSVGTree(html, container) {
	  // create the SVGNode
	  const svgNode = container.ownerDocument.importNode(new window.DOMParser().parseFromString(`<svg xmlns="http://www.w3.org/2000/svg">${html}</svg>`, 'application/xml').documentElement, true);
	  return svgNode;
	}
	/**
	 * Create the DOM that will be injected
	 * @param {Object} root - DOM node to find out the context where the fragment will be created
	 * @param   {string} html - DOM to create as string
	 * @returns {HTMLDocumentFragment|HTMLElement} a new html fragment
	 */


	function createDOMTree(root, html) {
	  if (isSvg(root)) return createSVGTree(html, root);
	  return createHTMLTree(html, root);
	}

	/**
	 * Inject the DOM tree into a target node
	 * @param   {HTMLElement} el - target element
	 * @param   {HTMLFragment|SVGElement} dom - dom tree to inject
	 * @returns {undefined}
	 */

	function injectDOM(el, dom) {
	  switch (true) {
	    case isSvg(el):
	      moveChildren(dom, el);
	      break;

	    case isTemplate(el):
	      el.parentNode.replaceChild(dom, el);
	      break;

	    default:
	      el.appendChild(dom);
	  }
	}

	/**
	 * Create the Template DOM skeleton
	 * @param   {HTMLElement} el - root node where the DOM will be injected
	 * @param   {string} html - markup that will be injected into the root node
	 * @returns {HTMLFragment} fragment that will be injected into the root node
	 */

	function createTemplateDOM(el, html) {
	  return html && (typeof html === 'string' ? createDOMTree(el, html) : html);
	}
	/**
	 * Template Chunk model
	 * @type {Object}
	 */


	const TemplateChunk = Object.freeze({
	  // Static props
	  // bindings: null,
	  // bindingsData: null,
	  // html: null,
	  // isTemplateTag: false,
	  // fragment: null,
	  // children: null,
	  // dom: null,
	  // el: null,

	  /**
	   * Create the template DOM structure that will be cloned on each mount
	   * @param   {HTMLElement} el - the root node
	   * @returns {TemplateChunk} self
	   */
	  createDOM(el) {
	    // make sure that the DOM gets created before cloning the template
	    this.dom = this.dom || createTemplateDOM(el, this.html);
	    return this;
	  },

	  // API methods

	  /**
	   * Attach the template to a DOM node
	   * @param   {HTMLElement} el - target DOM node
	   * @param   {*} scope - template data
	   * @param   {*} parentScope - scope of the parent template tag
	   * @param   {Object} meta - meta properties needed to handle the <template> tags in loops
	   * @returns {TemplateChunk} self
	   */
	  mount(el, scope, parentScope, meta) {
	    if (meta === void 0) {
	      meta = {};
	    }

	    if (!el) throw new Error('Please provide DOM node to mount properly your template');
	    if (this.el) this.unmount(scope); // <template> tags require a bit more work
	    // the template fragment might be already created via meta outside of this call

	    const {
	      fragment,
	      children,
	      avoidDOMInjection
	    } = meta; // <template> bindings of course can not have a root element
	    // so we check the parent node to set the query selector bindings

	    const {
	      parentNode
	    } = children ? children[0] : el;
	    const isTemplateTag = isTemplate(el);
	    const templateTagOffset = isTemplateTag ? Math.max(Array.from(parentNode.childNodes).indexOf(el), 0) : null;
	    this.isTemplateTag = isTemplateTag; // create the DOM if it wasn't created before

	    this.createDOM(el);

	    if (this.dom) {
	      // create the new template dom fragment if it want already passed in via meta
	      this.fragment = fragment || this.dom.cloneNode(true);
	    } // store root node
	    // notice that for template tags the root note will be the parent tag


	    this.el = this.isTemplateTag ? parentNode : el; // create the children array only for the <template> fragments

	    this.children = this.isTemplateTag ? children || Array.from(this.fragment.childNodes) : null; // inject the DOM into the el only if a fragment is available

	    if (!avoidDOMInjection && this.fragment) injectDOM(el, this.fragment); // create the bindings

	    this.bindings = this.bindingsData.map(binding => create$1(this.el, binding, templateTagOffset));
	    this.bindings.forEach(b => b.mount(scope, parentScope)); // store the template meta properties

	    this.meta = meta;
	    return this;
	  },

	  /**
	   * Update the template with fresh data
	   * @param   {*} scope - template data
	   * @param   {*} parentScope - scope of the parent template tag
	   * @returns {TemplateChunk} self
	   */
	  update(scope, parentScope) {
	    this.bindings.forEach(b => b.update(scope, parentScope));
	    return this;
	  },

	  /**
	   * Remove the template from the node where it was initially mounted
	   * @param   {*} scope - template data
	   * @param   {*} parentScope - scope of the parent template tag
	   * @param   {boolean|null} mustRemoveRoot - if true remove the root element,
	   * if false or undefined clean the root tag content, if null don't touch the DOM
	   * @returns {TemplateChunk} self
	   */
	  unmount(scope, parentScope, mustRemoveRoot) {
	    if (this.el) {
	      this.bindings.forEach(b => b.unmount(scope, parentScope, mustRemoveRoot));

	      switch (true) {
	        // pure components should handle the DOM unmount updates by themselves
	        case this.el[IS_PURE_SYMBOL]:
	          break;
	        // <template> tags should be treated a bit differently
	        // we need to clear their children only if it's explicitly required by the caller
	        // via mustRemoveRoot !== null

	        case this.children && mustRemoveRoot !== null:
	          clearChildren(this.children);
	          break;
	        // remove the root node only if the mustRemoveRoot === true

	        case mustRemoveRoot === true:
	          removeChild(this.el);
	          break;
	        // otherwise we clean the node children

	        case mustRemoveRoot !== null:
	          cleanNode(this.el);
	          break;
	      }

	      this.el = null;
	    }

	    return this;
	  },

	  /**
	   * Clone the template chunk
	   * @returns {TemplateChunk} a clone of this object resetting the this.el property
	   */
	  clone() {
	    return Object.assign({}, this, {
	      meta: {},
	      el: null
	    });
	  }

	});
	/**
	 * Create a template chunk wiring also the bindings
	 * @param   {string|HTMLElement} html - template string
	 * @param   {Array} bindings - bindings collection
	 * @returns {TemplateChunk} a new TemplateChunk copy
	 */

	function create(html, bindings) {
	  if (bindings === void 0) {
	    bindings = [];
	  }

	  return Object.assign({}, TemplateChunk, {
	    html,
	    bindingsData: bindings
	  });
	}

	/**
	 * Method used to bind expressions to a DOM node
	 * @param   {string|HTMLElement} html - your static template html structure
	 * @param   {Array} bindings - list of the expressions to bind to update the markup
	 * @returns {TemplateChunk} a new TemplateChunk object having the `update`,`mount`, `unmount` and `clone` methods
	 *
	 * @example
	 *
	 * riotDOMBindings
	 *  .template(
	 *   `<div expr0><!----></div><div><p expr1><!----><section expr2></section></p>`,
	 *   [
	 *     {
	 *       selector: '[expr0]',
	 *       redundantAttribute: 'expr0',
	 *       expressions: [
	 *         {
	 *           type: expressionTypes.TEXT,
	 *           childNodeIndex: 0,
	 *           evaluate(scope) {
	 *             return scope.time;
	 *           },
	 *         },
	 *       ],
	 *     },
	 *     {
	 *       selector: '[expr1]',
	 *       redundantAttribute: 'expr1',
	 *       expressions: [
	 *         {
	 *           type: expressionTypes.TEXT,
	 *           childNodeIndex: 0,
	 *           evaluate(scope) {
	 *             return scope.name;
	 *           },
	 *         },
	 *         {
	 *           type: 'attribute',
	 *           name: 'style',
	 *           evaluate(scope) {
	 *             return scope.style;
	 *           },
	 *         },
	 *       ],
	 *     },
	 *     {
	 *       selector: '[expr2]',
	 *       redundantAttribute: 'expr2',
	 *       type: bindingTypes.IF,
	 *       evaluate(scope) {
	 *         return scope.isVisible;
	 *       },
	 *       template: riotDOMBindings.template('hello there'),
	 *     },
	 *   ]
	 * )
	 */

	var DOMBindings = /*#__PURE__*/Object.freeze({
		__proto__: null,
		template: create,
		createBinding: create$1,
		createExpression: create$4,
		bindingTypes: bindingTypes,
		expressionTypes: expressionTypes
	});

	function noop() {
	  return this;
	}
	/**
	 * Autobind the methods of a source object to itself
	 * @param   {Object} source - probably a riot tag instance
	 * @param   {Array<string>} methods - list of the methods to autobind
	 * @returns {Object} the original object received
	 */

	function autobindMethods(source, methods) {
	  methods.forEach(method => {
	    source[method] = source[method].bind(source);
	  });
	  return source;
	}
	/**
	 * Call the first argument received only if it's a function otherwise return it as it is
	 * @param   {*} source - anything
	 * @returns {*} anything
	 */

	function callOrAssign(source) {
	  return isFunction(source) ? source.prototype && source.prototype.constructor ? new source() : source() : source;
	}

	/**
	 * Helper function to set an immutable property
	 * @param   {Object} source - object where the new property will be set
	 * @param   {string} key - object key where the new property will be stored
	 * @param   {*} value - value of the new property
	 * @param   {Object} options - set the propery overriding the default options
	 * @returns {Object} - the original object modified
	 */
	function defineProperty(source, key, value, options) {
	  if (options === void 0) {
	    options = {};
	  }

	  /* eslint-disable fp/no-mutating-methods */
	  Object.defineProperty(source, key, Object.assign({
	    value,
	    enumerable: false,
	    writable: false,
	    configurable: true
	  }, options));
	  /* eslint-enable fp/no-mutating-methods */

	  return source;
	}
	/**
	 * Define multiple properties on a target object
	 * @param   {Object} source - object where the new properties will be set
	 * @param   {Object} properties - object containing as key pair the key + value properties
	 * @param   {Object} options - set the propery overriding the default options
	 * @returns {Object} the original object modified
	 */

	function defineProperties(source, properties, options) {
	  Object.entries(properties).forEach(_ref => {
	    let [key, value] = _ref;
	    defineProperty(source, key, value, options);
	  });
	  return source;
	}
	/**
	 * Define default properties if they don't exist on the source object
	 * @param   {Object} source - object that will receive the default properties
	 * @param   {Object} defaults - object containing additional optional keys
	 * @returns {Object} the original object received enhanced
	 */

	function defineDefaults(source, defaults) {
	  Object.entries(defaults).forEach(_ref2 => {
	    let [key, value] = _ref2;
	    if (!source[key]) source[key] = value;
	  });
	  return source;
	}

	/**
	 * Converts any DOM node/s to a loopable array
	 * @param   { HTMLElement|NodeList } els - single html element or a node list
	 * @returns { Array } always a loopable object
	 */
	function domToArray(els) {
	  // can this object be already looped?
	  if (!Array.isArray(els)) {
	    // is it a node list?
	    if (/^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(els)) && typeof els.length === 'number') return Array.from(els);else // if it's a single node
	      // it will be returned as "array" with one single entry
	      return [els];
	  } // this object could be looped out of the box


	  return els;
	}

	/**
	 * Simple helper to find DOM nodes returning them as array like loopable object
	 * @param   { string|DOMNodeList } selector - either the query or the DOM nodes to arraify
	 * @param   { HTMLElement }        ctx      - context defining where the query will search for the DOM nodes
	 * @returns { Array } DOM nodes found as array
	 */

	function $(selector, ctx) {
	  return domToArray(typeof selector === 'string' ? (ctx || document).querySelectorAll(selector) : selector);
	}

	/**
	 * Normalize the return values, in case of a single value we avoid to return an array
	 * @param   { Array } values - list of values we want to return
	 * @returns { Array|string|boolean } either the whole list of values or the single one found
	 * @private
	 */

	const normalize = values => values.length === 1 ? values[0] : values;
	/**
	 * Parse all the nodes received to get/remove/check their attributes
	 * @param   { HTMLElement|NodeList|Array } els    - DOM node/s to parse
	 * @param   { string|Array }               name   - name or list of attributes
	 * @param   { string }                     method - method that will be used to parse the attributes
	 * @returns { Array|string } result of the parsing in a list or a single value
	 * @private
	 */


	function parseNodes(els, name, method) {
	  const names = typeof name === 'string' ? [name] : name;
	  return normalize(domToArray(els).map(el => {
	    return normalize(names.map(n => el[method](n)));
	  }));
	}
	/**
	 * Set any attribute on a single or a list of DOM nodes
	 * @param   { HTMLElement|NodeList|Array } els   - DOM node/s to parse
	 * @param   { string|Object }              name  - either the name of the attribute to set
	 *                                                 or a list of properties as object key - value
	 * @param   { string }                     value - the new value of the attribute (optional)
	 * @returns { HTMLElement|NodeList|Array } the original array of elements passed to this function
	 *
	 * @example
	 *
	 * import { set } from 'bianco.attr'
	 *
	 * const img = document.createElement('img')
	 *
	 * set(img, 'width', 100)
	 *
	 * // or also
	 * set(img, {
	 *   width: 300,
	 *   height: 300
	 * })
	 *
	 */


	function set(els, name, value) {
	  const attrs = typeof name === 'object' ? name : {
	    [name]: value
	  };
	  const props = Object.keys(attrs);
	  domToArray(els).forEach(el => {
	    props.forEach(prop => el.setAttribute(prop, attrs[prop]));
	  });
	  return els;
	}
	/**
	 * Get any attribute from a single or a list of DOM nodes
	 * @param   { HTMLElement|NodeList|Array } els   - DOM node/s to parse
	 * @param   { string|Array }               name  - name or list of attributes to get
	 * @returns { Array|string } list of the attributes found
	 *
	 * @example
	 *
	 * import { get } from 'bianco.attr'
	 *
	 * const img = document.createElement('img')
	 *
	 * get(img, 'width') // => '200'
	 *
	 * // or also
	 * get(img, ['width', 'height']) // => ['200', '300']
	 *
	 * // or also
	 * get([img1, img2], ['width', 'height']) // => [['200', '300'], ['500', '200']]
	 */

	function get(els, name) {
	  return parseNodes(els, name, 'getAttribute');
	}

	let _stackFrameId$3 = CodeSee.stackFrameEnter({
	  functionName: "riot|/src/core/css-manager.js",
	  filename: "riot|/src/core/css-manager.js",
	  loc: "1:0-70:0"
	});

	CodeSee.source({
	  "riot|/src/core/css-manager.js": ["import $ from 'bianco.query'", "import {set as setAttr} from 'bianco.attr'", "", "export const CSS_BY_NAME = new Map()", "export const STYLE_NODE_SELECTOR = 'style[riot]'", "", "// memoized curried function", "const getStyleNode = (style => {", "  return () => {", "    // lazy evaluation:", "    // if this function was already called before", "    // we return its cached result", "    if (style) return style", "", "    // create a new style element or use an existing one", "    // and cache it internally", "    style = $(STYLE_NODE_SELECTOR)[0] || document.createElement('style')", "    setAttr(style, 'type', 'text/css')", "", "    /* istanbul ignore next */", "    if (!style.parentNode) document.head.appendChild(style)", "", "    return style", "  }", "})()", "", "/**", " * Object that will be used to inject and manage the css of every tag instance", " */", "export default {", "  CSS_BY_NAME,", "  /**", "   * Save a tag style to be later injected into DOM", "   * @param { string } name - if it's passed we will map the css to a tagname", "   * @param { string } css - css string", "   * @returns {Object} self", "   */", "  add(name, css) {", "    if (!CSS_BY_NAME.has(name)) {", "      CSS_BY_NAME.set(name, css)", "      this.inject()", "    }", "", "    return this", "  },", "  /**", "   * Inject all previously saved tag styles into DOM", "   * innerHTML seems slow: http://jsperf.com/riot-insert-style", "   * @returns {Object} self", "   */", "  inject() {", "    getStyleNode().innerHTML = [...CSS_BY_NAME.values()].join('\\n')", "    return this", "  },", "", "  /**", "   * Remove a tag style from the DOM", "   * @param {string} name a registered tagname", "   * @returns {Object} self", "   */", "  remove(name) {", "    if (CSS_BY_NAME.has(name)) {", "      CSS_BY_NAME.delete(name)", "      this.inject()", "    }", "", "    return this", "  }", "}", ""]
	});
	CodeSee.traceLine("riot|/src/core/css-manager.js", {
	  loc: "1:0-1:28",
	  uid: _stackFrameId$3
	});
	CodeSee.traceLine("riot|/src/core/css-manager.js", {
	  loc: "2:0-2:42",
	  uid: _stackFrameId$3
	});
	CodeSee.traceLine("riot|/src/core/css-manager.js", {
	  loc: "4:0-4:36",
	  uid: _stackFrameId$3
	});
	CodeSee.traceLine("riot|/src/core/css-manager.js", {
	  loc: "4:7-4:36",
	  uid: _stackFrameId$3
	});
	CodeSee.before({
	  declares: [{
	    filename: "riot|/src/core/css-manager.js",
	    loc: "4:13-4:24",
	    name: "CSS_BY_NAME",
	    uid: "86,97"
	  }]
	}, _stackFrameId$3);
	const CSS_BY_NAME = (CodeSee.aboutToCall(_stackFrameId$3, "4:27-4:36"), CodeSee.callLikeExpr(new Map(), _stackFrameId$3, "4:27-4:36", "new Map"));
	CodeSee.after({
	  writes: [{
	    filename: "riot|/src/core/css-manager.js",
	    loc: "4:13-4:24",
	    name: "CSS_BY_NAME",
	    uid: "86,97",
	    value: CSS_BY_NAME
	  }]
	}, _stackFrameId$3);
	CodeSee.traceLine("riot|/src/core/css-manager.js", {
	  loc: "5:0-5:48",
	  uid: _stackFrameId$3
	});
	CodeSee.traceLine("riot|/src/core/css-manager.js", {
	  loc: "5:7-5:48",
	  uid: _stackFrameId$3
	});
	CodeSee.before({
	  declares: [{
	    filename: "riot|/src/core/css-manager.js",
	    loc: "5:13-5:32",
	    name: "STYLE_NODE_SELECTOR",
	    uid: "123,142"
	  }]
	}, _stackFrameId$3);
	const STYLE_NODE_SELECTOR = 'style[riot]'; // memoized curried function

	CodeSee.after({
	  writes: [{
	    filename: "riot|/src/core/css-manager.js",
	    loc: "5:13-5:32",
	    name: "STYLE_NODE_SELECTOR",
	    uid: "123,142",
	    value: STYLE_NODE_SELECTOR
	  }]
	}, _stackFrameId$3);
	CodeSee.traceLine("riot|/src/core/css-manager.js", {
	  loc: "8:0-25:4",
	  uid: _stackFrameId$3
	});
	CodeSee.before({
	  declares: [{
	    filename: "riot|/src/core/css-manager.js",
	    loc: "8:6-8:18",
	    name: "getStyleNode",
	    uid: "195,207"
	  }]
	}, _stackFrameId$3);
	const getStyleNode = (CodeSee.aboutToCall(_stackFrameId$3, "8:21-25:4"), CodeSee.callLikeExpr(CodeSee.funcExp(style => {
	  let _stackFrameId2 = CodeSee.stackFrameEnter({
	    functionName: "<anonymous function>",
	    filename: "riot|/src/core/css-manager.js",
	    loc: "8:22-25:1"
	  });

	  try {
	    CodeSee.funcInputs([{
	      filename: "riot|/src/core/css-manager.js",
	      loc: "8:22-8:27",
	      name: "style",
	      uid: "211,216",
	      value: style
	    }], _stackFrameId2);
	    CodeSee.traceLine("riot|/src/core/css-manager.js", {
	      loc: "9:2-24:3",
	      uid: _stackFrameId2
	    });

	    const _returnValue3 = CodeSee.returnVal(CodeSee.funcExp(() => {
	      let _stackFrameId3 = CodeSee.stackFrameEnter({
	        functionName: "<anonymous function>",
	        filename: "riot|/src/core/css-manager.js",
	        loc: "9:9-24:3"
	      });

	      try {
	        CodeSee.funcInputs([], _stackFrameId3);
	        CodeSee.traceLine("riot|/src/core/css-manager.js", {
	          loc: "13:4-13:13",
	          uid: _stackFrameId3
	        });

	        // lazy evaluation:
	        // if this function was already called before
	        // we return its cached result
	        if (CodeSee.test(style, _stackFrameId3, "13:8-13:13", "211,216")) {
	          CodeSee.traceLine("riot|/src/core/css-manager.js", {
	            loc: "13:15-13:27",
	            uid: _stackFrameId3
	          });

	          const _returnValue = CodeSee.returnVal(style, _stackFrameId3, "13:22-13:27", "211,216");

	          CodeSee.stackFrameExit(_stackFrameId3);
	          return _returnValue;
	        } // create a new style element or use an existing one
	        // and cache it internally


	        CodeSee.traceLine("riot|/src/core/css-manager.js", {
	          loc: "17:4-17:72",
	          uid: _stackFrameId3
	        });
	        CodeSee.before({
	          writes: [{
	            filename: "riot|/src/core/css-manager.js",
	            loc: "17:4-17:9",
	            name: "style",
	            uid: "211,216",
	            value: style
	          }]
	        }, _stackFrameId3);
	        style = CodeSee.expr(CodeSee.read((CodeSee.aboutToCall(_stackFrameId3, "17:12-17:34"), CodeSee.callLikeExpr($(CodeSee.funcArg(STYLE_NODE_SELECTOR, _stackFrameId3, "17:14-17:33", "123,142")), _stackFrameId3, "17:12-17:34", "$"))[0], _stackFrameId3, "17:12-17:37") || (CodeSee.aboutToCall(_stackFrameId3, "17:41-17:72"), CodeSee.callLikeExpr(document.createElement('style'), _stackFrameId3, "17:41-17:72", "createElement")), _stackFrameId3, "17:12-17:72");
	        CodeSee.checkForMutations();
	        CodeSee.after({
	          writes: [{
	            filename: "riot|/src/core/css-manager.js",
	            loc: "17:4-17:9",
	            name: "style",
	            uid: "211,216",
	            value: style
	          }]
	        }, _stackFrameId3);
	        CodeSee.traceLine("riot|/src/core/css-manager.js", {
	          loc: "18:4-18:38",
	          uid: _stackFrameId3
	        });
	        CodeSee.aboutToCall(_stackFrameId3, "18:4-18:38"), CodeSee.callLikeExpr(set(CodeSee.funcArg(style, _stackFrameId3, "18:12-18:17", "211,216"), 'type', 'text/css'), _stackFrameId3, "18:4-18:38", "setAttr");
	        /* istanbul ignore next */

	        CodeSee.checkForMutations();
	        CodeSee.traceLine("riot|/src/core/css-manager.js", {
	          loc: "21:4-21:25",
	          uid: _stackFrameId3
	        });

	        if (CodeSee.test(!CodeSee.read(CodeSee.getProp(style, _stackFrameId3, "21:9-21:14", "211,216").parentNode, _stackFrameId3, "21:9-21:25"), _stackFrameId3, "21:8-21:25")) {
	          CodeSee.traceLine("riot|/src/core/css-manager.js", {
	            loc: "21:27-21:59",
	            uid: _stackFrameId3
	          });
	          CodeSee.aboutToCall(_stackFrameId3, "21:27-21:59"), CodeSee.callLikeExpr(CodeSee.getProp(document, _stackFrameId3, "21:27-21:35", "?,?").head.appendChild(CodeSee.funcArg(style, _stackFrameId3, "21:53-21:58", "211,216")), _stackFrameId3, "21:27-21:59", "appendChild");
	          CodeSee.checkForMutations();
	        }

	        CodeSee.checkForMutations();
	        CodeSee.traceLine("riot|/src/core/css-manager.js", {
	          loc: "23:4-23:16",
	          uid: _stackFrameId3
	        });

	        const _returnValue2 = CodeSee.returnVal(style, _stackFrameId3, "23:11-23:16", "211,216");

	        CodeSee.stackFrameExit(_stackFrameId3);
	        return _returnValue2;
	      } catch (e) {
	        CodeSee.error(e, _stackFrameId3);
	        throw e;
	      }
	    }, _stackFrameId2, "9:9-24:3"), _stackFrameId2, "9:9-24:3");

	    CodeSee.stackFrameExit(_stackFrameId2);
	    return _returnValue3;
	  } catch (e) {
	    CodeSee.error(e, _stackFrameId2);
	    throw e;
	  }
	}, _stackFrameId$3, "8:22-25:1")(), _stackFrameId$3, "8:21-25:4", undefined));
	/**
	 * Object that will be used to inject and manage the css of every tag instance
	 */

	CodeSee.after({
	  writes: [{
	    filename: "riot|/src/core/css-manager.js",
	    loc: "8:6-8:18",
	    name: "getStyleNode",
	    uid: "195,207",
	    value: getStyleNode
	  }]
	}, _stackFrameId$3);
	CodeSee.traceLine("riot|/src/core/css-manager.js", {
	  loc: "30:0-69:1",
	  uid: _stackFrameId$3
	});
	var cssManager = CodeSee.expr({
	  CSS_BY_NAME: CodeSee.read(CSS_BY_NAME, _stackFrameId$3, "31:2-31:13", "86,97"),

	  /**
	   * Save a tag style to be later injected into DOM
	   * @param { string } name - if it's passed we will map the css to a tagname
	   * @param { string } css - css string
	   * @returns {Object} self
	   */
	  add(name, css) {
	    let _stackFrameId4 = CodeSee.stackFrameEnter({
	      functionName: "add",
	      filename: "riot|/src/core/css-manager.js",
	      loc: "38:2-45:3"
	    });

	    try {
	      CodeSee.funcInputs([{
	        name: "this",
	        value: this
	      }, {
	        filename: "riot|/src/core/css-manager.js",
	        loc: "38:6-38:10",
	        name: "name",
	        uid: "1032,1036",
	        value: name
	      }, {
	        filename: "riot|/src/core/css-manager.js",
	        loc: "38:12-38:15",
	        name: "css",
	        uid: "1038,1041",
	        value: css
	      }], _stackFrameId4);
	      CodeSee.traceLine("riot|/src/core/css-manager.js", {
	        loc: "39:4-39:30",
	        uid: _stackFrameId4
	      });

	      if (CodeSee.test(!(CodeSee.aboutToCall(_stackFrameId4, "39:9-39:30"), CodeSee.callLikeExpr(CSS_BY_NAME.has(CodeSee.funcArg(name, _stackFrameId4, "39:25-39:29", "1032,1036")), _stackFrameId4, "39:9-39:30", "has")), _stackFrameId4, "39:8-39:30")) {
	        CodeSee.traceLine("riot|/src/core/css-manager.js", {
	          loc: "40:6-40:32",
	          uid: _stackFrameId4
	        });
	        CodeSee.aboutToCall(_stackFrameId4, "40:6-40:32"), CodeSee.callLikeExpr(CSS_BY_NAME.set(CodeSee.funcArg(name, _stackFrameId4, "40:22-40:26", "1032,1036"), CodeSee.funcArg(css, _stackFrameId4, "40:28-40:31", "1038,1041")), _stackFrameId4, "40:6-40:32", "set");
	        CodeSee.checkForMutations();
	        CodeSee.traceLine("riot|/src/core/css-manager.js", {
	          loc: "41:6-41:19",
	          uid: _stackFrameId4
	        });
	        CodeSee.aboutToCall(_stackFrameId4, "41:6-41:19"), CodeSee.callLikeExpr(this.inject(), _stackFrameId4, "41:6-41:19", "inject");
	        CodeSee.checkForMutations();
	      }

	      CodeSee.checkForMutations();
	      CodeSee.traceLine("riot|/src/core/css-manager.js", {
	        loc: "44:4-44:15",
	        uid: _stackFrameId4
	      });

	      const _returnValue4 = CodeSee.returnVal(this, _stackFrameId4, "44:11-44:15");

	      CodeSee.stackFrameExit(_stackFrameId4);
	      return _returnValue4;
	    } catch (e) {
	      CodeSee.error(e, _stackFrameId4);
	      throw e;
	    }
	  },

	  /**
	   * Inject all previously saved tag styles into DOM
	   * innerHTML seems slow: http://jsperf.com/riot-insert-style
	   * @returns {Object} self
	   */
	  inject() {
	    let _stackFrameId5 = CodeSee.stackFrameEnter({
	      functionName: "inject",
	      filename: "riot|/src/core/css-manager.js",
	      loc: "51:2-54:3"
	    });

	    try {
	      CodeSee.funcInputs([{
	        name: "this",
	        value: this
	      }], _stackFrameId5);
	      CodeSee.traceLine("riot|/src/core/css-manager.js", {
	        loc: "52:4-52:67",
	        uid: _stackFrameId5
	      });
	      getStyleNode().innerHTML = (CodeSee.aboutToCall(_stackFrameId5, "52:31-52:67"), CodeSee.callLikeExpr(CodeSee.expr([...(CodeSee.aboutToCall(_stackFrameId5, "52:35-52:55"), CodeSee.callLikeExpr(CSS_BY_NAME.values(), _stackFrameId5, "52:35-52:55", "values"))], _stackFrameId5, "52:31-52:56").join('\n'), _stackFrameId5, "52:31-52:67", "join"));
	      CodeSee.checkForMutations();
	      CodeSee.traceLine("riot|/src/core/css-manager.js", {
	        loc: "53:4-53:15",
	        uid: _stackFrameId5
	      });

	      const _returnValue5 = CodeSee.returnVal(this, _stackFrameId5, "53:11-53:15");

	      CodeSee.stackFrameExit(_stackFrameId5);
	      return _returnValue5;
	    } catch (e) {
	      CodeSee.error(e, _stackFrameId5);
	      throw e;
	    }
	  },

	  /**
	   * Remove a tag style from the DOM
	   * @param {string} name a registered tagname
	   * @returns {Object} self
	   */
	  remove(name) {
	    let _stackFrameId6 = CodeSee.stackFrameEnter({
	      functionName: "remove",
	      filename: "riot|/src/core/css-manager.js",
	      loc: "61:2-68:3"
	    });

	    try {
	      CodeSee.funcInputs([{
	        name: "this",
	        value: this
	      }, {
	        filename: "riot|/src/core/css-manager.js",
	        loc: "61:9-61:13",
	        name: "name",
	        uid: "1552,1556",
	        value: name
	      }], _stackFrameId6);
	      CodeSee.traceLine("riot|/src/core/css-manager.js", {
	        loc: "62:4-62:29",
	        uid: _stackFrameId6
	      });

	      if (CodeSee.aboutToCall(_stackFrameId6, "62:8-62:29"), CodeSee.callLikeExpr(CSS_BY_NAME.has(CodeSee.funcArg(name, _stackFrameId6, "62:24-62:28", "1552,1556")), _stackFrameId6, "62:8-62:29", "has")) {
	        CodeSee.traceLine("riot|/src/core/css-manager.js", {
	          loc: "63:6-63:30",
	          uid: _stackFrameId6
	        });
	        CodeSee.aboutToCall(_stackFrameId6, "63:6-63:30"), CodeSee.callLikeExpr(CSS_BY_NAME.delete(CodeSee.funcArg(name, _stackFrameId6, "63:25-63:29", "1552,1556")), _stackFrameId6, "63:6-63:30", "delete");
	        CodeSee.checkForMutations();
	        CodeSee.traceLine("riot|/src/core/css-manager.js", {
	          loc: "64:6-64:19",
	          uid: _stackFrameId6
	        });
	        CodeSee.aboutToCall(_stackFrameId6, "64:6-64:19"), CodeSee.callLikeExpr(this.inject(), _stackFrameId6, "64:6-64:19", "inject");
	        CodeSee.checkForMutations();
	      }

	      CodeSee.checkForMutations();
	      CodeSee.traceLine("riot|/src/core/css-manager.js", {
	        loc: "67:4-67:15",
	        uid: _stackFrameId6
	      });

	      const _returnValue6 = CodeSee.returnVal(this, _stackFrameId6, "67:11-67:15");

	      CodeSee.stackFrameExit(_stackFrameId6);
	      return _returnValue6;
	    } catch (e) {
	      CodeSee.error(e, _stackFrameId6);
	      throw e;
	    }
	  }

	}, _stackFrameId$3, "30:15-69:1");
	CodeSee.stackFrameExit(_stackFrameId$3);

	/**
	 * Function to curry any javascript method
	 * @param   {Function}  fn - the target function we want to curry
	 * @param   {...[args]} acc - initial arguments
	 * @returns {Function|*} it will return a function until the target function
	 *                       will receive all of its arguments
	 */
	function curry(fn) {
	  for (var _len = arguments.length, acc = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    acc[_key - 1] = arguments[_key];
	  }

	  return function () {
	    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	      args[_key2] = arguments[_key2];
	    }

	    args = [...acc, ...args];
	    return args.length < fn.length ? curry(fn, ...args) : fn(...args);
	  };
	}

	let _stackFrameId$2 = CodeSee.stackFrameEnter({
	  functionName: "riot|/src/utils/dom.js",
	  filename: "riot|/src/utils/dom.js",
	  loc: "1:0-11:1"
	});

	CodeSee.source({
	  "riot|/src/utils/dom.js": ["import {IS_DIRECTIVE} from '@riotjs/util/constants'", "import {get as getAttr} from 'bianco.attr'", "", "/**", " * Get the tag name of any DOM node", " * @param   {HTMLElement} element - DOM node we want to inspect", " * @returns {string} name to identify this dom node in riot", " */", "export function getName(element) {", "  return getAttr(element, IS_DIRECTIVE) || element.tagName.toLowerCase()", "}"]
	});
	CodeSee.traceLine("riot|/src/utils/dom.js", {
	  loc: "1:0-1:51",
	  uid: _stackFrameId$2
	});
	CodeSee.traceLine("riot|/src/utils/dom.js", {
	  loc: "2:0-2:42",
	  uid: _stackFrameId$2
	});
	/**
	 * Get the tag name of any DOM node
	 * @param   {HTMLElement} element - DOM node we want to inspect
	 * @returns {string} name to identify this dom node in riot
	 */

	CodeSee.traceLine("riot|/src/utils/dom.js", {
	  loc: "9:0-11:1",
	  uid: _stackFrameId$2
	});
	function getName(element) {
	  let _stackFrameId2 = CodeSee.stackFrameEnter({
	    functionName: "getName",
	    filename: "riot|/src/utils/dom.js",
	    loc: "9:7-11:1"
	  });

	  try {
	    CodeSee.funcInputs([{
	      filename: "riot|/src/utils/dom.js",
	      loc: "9:24-9:31",
	      name: "element",
	      uid: "288,295",
	      value: element
	    }], _stackFrameId2);
	    CodeSee.traceLine("riot|/src/utils/dom.js", {
	      loc: "10:2-10:72",
	      uid: _stackFrameId2
	    });

	    const _returnValue = CodeSee.returnVal((CodeSee.aboutToCall(_stackFrameId2, "10:9-10:39"), CodeSee.callLikeExpr(get(CodeSee.funcArg(element, _stackFrameId2, "10:17-10:24", "288,295"), CodeSee.funcArg(IS_DIRECTIVE, _stackFrameId2, "10:26-10:38", "8,20")), _stackFrameId2, "10:9-10:39", "getAttr")) || (CodeSee.aboutToCall(_stackFrameId2, "10:43-10:72"), CodeSee.callLikeExpr(CodeSee.getProp(element, _stackFrameId2, "10:43-10:50", "288,295").tagName.toLowerCase(), _stackFrameId2, "10:43-10:72", "toLowerCase")), _stackFrameId2, "10:9-10:72");

	    CodeSee.stackFrameExit(_stackFrameId2);
	    return _returnValue;
	  } catch (e) {
	    CodeSee.error(e, _stackFrameId2);
	    throw e;
	  }
	}
	CodeSee.stackFrameExit(_stackFrameId$2);

	let _stackFrameId$1 = CodeSee.stackFrameEnter({
	  functionName: "riot|/src/core/component.js",
	  filename: "riot|/src/core/component.js",
	  loc: "1:0-444:0"
	});

	CodeSee.source({
	  "riot|/src/core/component.js": ["import {", "  ATTRIBUTES_KEY_SYMBOL,", "  COMPONENTS_IMPLEMENTATION_MAP,", "  DOM_COMPONENT_INSTANCE_PROPERTY,", "  IS_COMPONENT_UPDATING,", "  IS_DIRECTIVE,", "  IS_PURE_SYMBOL,", "  MOUNT_METHOD_KEY,", "  ON_BEFORE_MOUNT_KEY,", "  ON_BEFORE_UNMOUNT_KEY,", "  ON_BEFORE_UPDATE_KEY,", "  ON_MOUNTED_KEY,", "  ON_UNMOUNTED_KEY,", "  ON_UPDATED_KEY,", "  PARENT_KEY_SYMBOL,", "  PLUGINS_SET,", "  PROPS_KEY,", "  ROOT_KEY,", "  SHOULD_UPDATE_KEY,", "  SLOTS_KEY,", "  STATE_KEY,", "  TEMPLATE_KEY_SYMBOL,", "  UNMOUNT_METHOD_KEY,", "  UPDATE_METHOD_KEY", "} from '@riotjs/util/constants'", "", "import {", "  autobindMethods,", "  callOrAssign,", "  noop", "} from '@riotjs/util/functions'", "", "import {", "  bindingTypes,", "  createExpression,", "  template as createTemplate,", "  expressionTypes", "} from '@riotjs/dom-bindings'", "", "import {", "  defineDefaults,", "  defineProperties,", "  defineProperty", "} from '@riotjs/util/objects'", "", "import {", "  evaluateAttributeExpressions,", "  memoize,", "  panic", "} from '@riotjs/util/misc'", "", "import {isFunction, isObject} from '@riotjs/util/checks'", "", "import $ from 'bianco.query'", "import {DOMattributesToObject} from '@riotjs/util/dom'", "import {camelToDashCase} from '@riotjs/util/strings'", "import cssManager from './css-manager'", "import curry from 'curri'", "import {getName} from '../utils/dom'", "import {set as setAttr} from 'bianco.attr'", "", "const COMPONENT_CORE_HELPERS = Object.freeze({", "  // component helpers", "  $(selector){ return $(selector, this.root)[0] },", "  $$(selector){ return $(selector, this.root) }", "})", "", "const PURE_COMPONENT_API = Object.freeze({", "  [MOUNT_METHOD_KEY]: noop,", "  [UPDATE_METHOD_KEY]: noop,", "  [UNMOUNT_METHOD_KEY]: noop", "})", "", "const COMPONENT_LIFECYCLE_METHODS = Object.freeze({", "  [SHOULD_UPDATE_KEY]: noop,", "  [ON_BEFORE_MOUNT_KEY]: noop,", "  [ON_MOUNTED_KEY]: noop,", "  [ON_BEFORE_UPDATE_KEY]: noop,", "  [ON_UPDATED_KEY]: noop,", "  [ON_BEFORE_UNMOUNT_KEY]: noop,", "  [ON_UNMOUNTED_KEY]: noop", "})", "", "const MOCKED_TEMPLATE_INTERFACE = {", "  ...PURE_COMPONENT_API,", "  clone: noop,", "  createDOM: noop", "}", "", "/**", " * Performance optimization for the recursive components", " * @param  {RiotComponentShell} componentShell - riot compiler generated object", " * @returns {Object} component like interface", " */", "const memoizedCreateComponent = memoize(createComponent)", "", "/**", " * Evaluate the component properties either from its real attributes or from its initial user properties", " * @param   {HTMLElement} element - component root", " * @param   {Object}  initialProps - initial props", " * @returns {Object} component props key value pairs", " */", "function evaluateInitialProps(element, initialProps = {}) {", "  return {", "    ...DOMattributesToObject(element),", "    ...callOrAssign(initialProps)", "  }", "}", "", "/**", " * Bind a DOM node to its component object", " * @param   {HTMLElement} node - html node mounted", " * @param   {Object} component - Riot.js component object", " * @returns {Object} the component object received as second argument", " */", "const bindDOMNodeToComponentObject = (node, component) => node[DOM_COMPONENT_INSTANCE_PROPERTY] = component", "", "/**", " * Wrap the Riot.js core API methods using a mapping function", " * @param   {Function} mapFunction - lifting function", " * @returns {Object} an object having the { mount, update, unmount } functions", " */", "function createCoreAPIMethods(mapFunction) {", "  return [", "    MOUNT_METHOD_KEY,", "    UPDATE_METHOD_KEY,", "    UNMOUNT_METHOD_KEY", "  ].reduce((acc, method) => {", "    acc[method] = mapFunction(method)", "", "    return acc", "  }, {})", "}", "", "/**", " * Factory function to create the component templates only once", " * @param   {Function} template - component template creation function", " * @param   {RiotComponentShell} componentShell - riot compiler generated object", " * @returns {TemplateChunk} template chunk object", " */", "function componentTemplateFactory(template, componentShell) {", "  const components = createSubcomponents(componentShell.exports ? componentShell.exports.components : {})", "", "  return template(", "    createTemplate,", "    expressionTypes,", "    bindingTypes,", "    name => {", "      // improve support for recursive components", "      if (name === componentShell.name) return memoizedCreateComponent(componentShell)", "      // return the registered components", "      return components[name] || COMPONENTS_IMPLEMENTATION_MAP.get(name)", "    }", "  )", "}", "", "/**", " * Create a pure component", " * @param   {Function} pureFactoryFunction - pure component factory function", " * @param   {Array} options.slots - component slots", " * @param   {Array} options.attributes - component attributes", " * @param   {Array} options.template - template factory function", " * @param   {Array} options.template - template factory function", " * @param   {any} options.props - initial component properties", " * @returns {Object} pure component object", " */", "function createPureComponent(pureFactoryFunction, { slots, attributes, props, css, template }) {", "  if (template) panic('Pure components can not have html')", "  if (css) panic('Pure components do not have css')", "", "  const component = defineDefaults(", "    pureFactoryFunction({ slots, attributes, props }),", "    PURE_COMPONENT_API", "  )", "", "  return createCoreAPIMethods(method => (...args) => {", "    // intercept the mount calls to bind the DOM node to the pure object created", "    // see also https://github.com/riot/riot/issues/2806", "    if (method === MOUNT_METHOD_KEY) {", "      const [el] = args", "      // mark this node as pure element", "      el[IS_PURE_SYMBOL] = true", "      bindDOMNodeToComponentObject(el, component)", "    }", "", "    component[method](...args)", "", "    return component", "  })", "}", "", "/**", " * Create the component interface needed for the @riotjs/dom-bindings tag bindings", " * @param   {RiotComponentShell} componentShell - riot compiler generated object", " * @param   {string} componentShell.css - component css", " * @param   {Function} componentShell.template - function that will return the dom-bindings template function", " * @param   {Object} componentShell.exports - component interface", " * @param   {string} componentShell.name - component name", " * @returns {Object} component like interface", " */", "export function createComponent(componentShell) {", "  const {css, template, exports, name} = componentShell", "  const templateFn = template ? componentTemplateFactory(", "    template,", "    componentShell", "  ) : MOCKED_TEMPLATE_INTERFACE", "", "  return ({slots, attributes, props}) => {", "    // pure components rendering will be managed by the end user", "    if (exports && exports[IS_PURE_SYMBOL])", "      return createPureComponent(", "        exports,", "        { slots, attributes, props, css, template }", "      )", "", "    const componentAPI = callOrAssign(exports) || {}", "", "    const component = defineComponent({", "      css,", "      template: templateFn,", "      componentAPI,", "      name", "    })({slots, attributes, props})", "", "    // notice that for the components create via tag binding", "    // we need to invert the mount (state/parentScope) arguments", "    // the template bindings will only forward the parentScope updates", "    // and never deal with the component state", "    return {", "      mount(element, parentScope, state) {", "        return component.mount(element, state, parentScope)", "      },", "      update(parentScope, state) {", "        return component.update(state, parentScope)", "      },", "      unmount(preserveRoot) {", "        return component.unmount(preserveRoot)", "      }", "    }", "  }", "}", "", "/**", " * Component definition function", " * @param   {Object} implementation - the componen implementation will be generated via compiler", " * @param   {Object} component - the component initial properties", " * @returns {Object} a new component implementation object", " */", "export function defineComponent({css, template, componentAPI, name}) {", "  // add the component css into the DOM", "  if (css && name) cssManager.add(name, css)", "", "  return curry(enhanceComponentAPI)(defineProperties(", "    // set the component defaults without overriding the original component API", "    defineDefaults(componentAPI, {", "      ...COMPONENT_LIFECYCLE_METHODS,", "      [PROPS_KEY]: {},", "      [STATE_KEY]: {}", "    }), {", "      // defined during the component creation", "      [SLOTS_KEY]: null,", "      [ROOT_KEY]: null,", "      // these properties should not be overriden", "      ...COMPONENT_CORE_HELPERS,", "      name,", "      css,", "      template", "    })", "  )", "}", "", "/**", " * Create the bindings to update the component attributes", " * @param   {HTMLElement} node - node where we will bind the expressions", " * @param   {Array} attributes - list of attribute bindings", " * @returns {TemplateChunk} - template bindings object", " */", "function createAttributeBindings(node, attributes = []) {", "  const expressions = attributes.map(a => createExpression(node, a))", "  const binding = {}", "", "  return Object.assign(binding, {", "    expressions,", "    ...createCoreAPIMethods(method => scope => {", "      expressions.forEach(e => e[method](scope))", "", "      return binding", "    })", "  })", "}", "", "/**", " * Create the subcomponents that can be included inside a tag in runtime", " * @param   {Object} components - components imported in runtime", " * @returns {Object} all the components transformed into Riot.Component factory functions", " */", "function createSubcomponents(components = {}) {", "  return Object.entries(callOrAssign(components))", "    .reduce((acc, [key, value]) => {", "      acc[camelToDashCase(key)] = createComponent(value)", "      return acc", "    }, {})", "}", "", "/**", " * Run the component instance through all the plugins set by the user", " * @param   {Object} component - component instance", " * @returns {Object} the component enhanced by the plugins", " */", "function runPlugins(component) {", "  return [...PLUGINS_SET].reduce((c, fn) => fn(c) || c, component)", "}", "", "/**", " * Compute the component current state merging it with its previous state", " * @param   {Object} oldState - previous state object", " * @param   {Object} newState - new state givent to the `update` call", " * @returns {Object} new object state", " */", "function computeState(oldState, newState) {", "  return {", "    ...oldState,", "    ...callOrAssign(newState)", "  }", "}", "", "/**", " * Add eventually the \"is\" attribute to link this DOM node to its css", " * @param {HTMLElement} element - target root node", " * @param {string} name - name of the component mounted", " * @returns {undefined} it's a void function", " */", "function addCssHook(element, name) {", "  if (getName(element) !== name) {", "    setAttr(element, IS_DIRECTIVE, name)", "  }", "}", "", "/**", " * Component creation factory function that will enhance the user provided API", " * @param   {Object} component - a component implementation previously defined", " * @param   {Array} options.slots - component slots generated via riot compiler", " * @param   {Array} options.attributes - attribute expressions generated via riot compiler", " * @returns {Riot.Component} a riot component instance", " */", "export function enhanceComponentAPI(component, {slots, attributes, props}) {", "  return autobindMethods(", "    runPlugins(", "      defineProperties(isObject(component) ? Object.create(component) : component, {", "        mount(element, state = {}, parentScope) {", "          this[PARENT_KEY_SYMBOL] = parentScope", "          this[ATTRIBUTES_KEY_SYMBOL] = createAttributeBindings(element, attributes).mount(parentScope)", "", "          defineProperty(this, PROPS_KEY, Object.freeze({", "            ...evaluateInitialProps(element, props),", "            ...evaluateAttributeExpressions(this[ATTRIBUTES_KEY_SYMBOL].expressions)", "          }))", "", "          this[STATE_KEY] = computeState(this[STATE_KEY], state)", "          this[TEMPLATE_KEY_SYMBOL] = this.template.createDOM(element).clone()", "", "          // link this object to the DOM node", "          bindDOMNodeToComponentObject(element, this)", "          // add eventually the 'is' attribute", "          component.name && addCssHook(element, component.name)", "", "          // define the root element", "          defineProperty(this, ROOT_KEY, element)", "          // define the slots array", "          defineProperty(this, SLOTS_KEY, slots)", "", "          // before mount lifecycle event", "          this[ON_BEFORE_MOUNT_KEY](this[PROPS_KEY], this[STATE_KEY])", "          // mount the template", "          this[TEMPLATE_KEY_SYMBOL].mount(element, this, parentScope)", "          this[ON_MOUNTED_KEY](this[PROPS_KEY], this[STATE_KEY])", "", "          return this", "        },", "        update(state = {}, parentScope) {", "          if (parentScope) {", "            this[PARENT_KEY_SYMBOL] = parentScope", "            this[ATTRIBUTES_KEY_SYMBOL].update(parentScope)", "          }", "", "          const newProps = evaluateAttributeExpressions(this[ATTRIBUTES_KEY_SYMBOL].expressions)", "", "          if (this[SHOULD_UPDATE_KEY](newProps, this[PROPS_KEY]) === false) return", "", "          defineProperty(this, PROPS_KEY, Object.freeze({", "            ...this[PROPS_KEY],", "            ...newProps", "          }))", "", "          this[STATE_KEY] = computeState(this[STATE_KEY], state)", "", "          this[ON_BEFORE_UPDATE_KEY](this[PROPS_KEY], this[STATE_KEY])", "", "          // avoiding recursive updates", "          // see also https://github.com/riot/riot/issues/2895", "          if (!this[IS_COMPONENT_UPDATING]) {", "            this[IS_COMPONENT_UPDATING] = true", "            this[TEMPLATE_KEY_SYMBOL].update(this, this[PARENT_KEY_SYMBOL])", "          }", "", "          this[ON_UPDATED_KEY](this[PROPS_KEY], this[STATE_KEY])", "          this[IS_COMPONENT_UPDATING] = false", "", "          return this", "        },", "        unmount(preserveRoot) {", "          this[ON_BEFORE_UNMOUNT_KEY](this[PROPS_KEY], this[STATE_KEY])", "          this[ATTRIBUTES_KEY_SYMBOL].unmount()", "          // if the preserveRoot is null the template html will be left untouched", "          // in that case the DOM cleanup will happen differently from a parent node", "          this[TEMPLATE_KEY_SYMBOL].unmount(this, this[PARENT_KEY_SYMBOL], preserveRoot === null ? null : !preserveRoot)", "          this[ON_UNMOUNTED_KEY](this[PROPS_KEY], this[STATE_KEY])", "", "          return this", "        }", "      })", "    ),", "    Object.keys(component).filter(prop => isFunction(component[prop]))", "  )", "}", "", "/**", " * Component initialization function starting from a DOM node", " * @param   {HTMLElement} element - element to upgrade", " * @param   {Object} initialProps - initial component properties", " * @param   {string} componentName - component id", " * @returns {Object} a new component instance bound to a DOM node", " */", "export function mountComponent(element, initialProps, componentName) {", "  const name = componentName || getName(element)", "  if (!COMPONENTS_IMPLEMENTATION_MAP.has(name)) panic(`The component named \"${name}\" was never registered`)", "", "  const component = COMPONENTS_IMPLEMENTATION_MAP.get(name)({", "    props: initialProps", "  })", "", "  return component.mount(element)", "}", ""]
	});
	CodeSee.traceLine("riot|/src/core/component.js", {
	  loc: "1:0-25:31",
	  uid: _stackFrameId$1
	});
	CodeSee.traceLine("riot|/src/core/component.js", {
	  loc: "27:0-31:31",
	  uid: _stackFrameId$1
	});
	CodeSee.traceLine("riot|/src/core/component.js", {
	  loc: "33:0-38:29",
	  uid: _stackFrameId$1
	});
	CodeSee.traceLine("riot|/src/core/component.js", {
	  loc: "40:0-44:29",
	  uid: _stackFrameId$1
	});
	CodeSee.traceLine("riot|/src/core/component.js", {
	  loc: "46:0-50:26",
	  uid: _stackFrameId$1
	});
	CodeSee.traceLine("riot|/src/core/component.js", {
	  loc: "52:0-52:56",
	  uid: _stackFrameId$1
	});
	CodeSee.traceLine("riot|/src/core/component.js", {
	  loc: "54:0-54:28",
	  uid: _stackFrameId$1
	});
	CodeSee.traceLine("riot|/src/core/component.js", {
	  loc: "55:0-55:54",
	  uid: _stackFrameId$1
	});
	CodeSee.traceLine("riot|/src/core/component.js", {
	  loc: "56:0-56:52",
	  uid: _stackFrameId$1
	});
	CodeSee.traceLine("riot|/src/core/component.js", {
	  loc: "57:0-57:38",
	  uid: _stackFrameId$1
	});
	CodeSee.traceLine("riot|/src/core/component.js", {
	  loc: "58:0-58:25",
	  uid: _stackFrameId$1
	});
	CodeSee.traceLine("riot|/src/core/component.js", {
	  loc: "59:0-59:36",
	  uid: _stackFrameId$1
	});
	CodeSee.traceLine("riot|/src/core/component.js", {
	  loc: "60:0-60:42",
	  uid: _stackFrameId$1
	});
	CodeSee.traceLine("riot|/src/core/component.js", {
	  loc: "62:0-66:2",
	  uid: _stackFrameId$1
	});
	CodeSee.before({
	  declares: [{
	    filename: "riot|/src/core/component.js",
	    loc: "62:6-62:28",
	    name: "COMPONENT_CORE_HELPERS",
	    uid: "1253,1275"
	  }]
	}, _stackFrameId$1);
	const COMPONENT_CORE_HELPERS = (CodeSee.aboutToCall(_stackFrameId$1, "62:31-66:2"), CodeSee.callLikeExpr(Object.freeze(CodeSee.expr({
	  // component helpers
	  $(selector) {
	    let _stackFrameId2 = CodeSee.stackFrameEnter({
	      functionName: "$",
	      filename: "riot|/src/core/component.js",
	      loc: "64:2-64:49"
	    });

	    try {
	      CodeSee.funcInputs([{
	        name: "this",
	        value: this
	      }, {
	        filename: "riot|/src/core/component.js",
	        loc: "64:4-64:12",
	        name: "selector",
	        uid: "1321,1329",
	        value: selector
	      }], _stackFrameId2);
	      CodeSee.traceLine("riot|/src/core/component.js", {
	        loc: "64:15-64:47",
	        uid: _stackFrameId2
	      });

	      const _returnValue = CodeSee.returnVal((CodeSee.aboutToCall(_stackFrameId2, "64:22-64:44"), CodeSee.callLikeExpr($(CodeSee.funcArg(selector, _stackFrameId2, "64:24-64:32", "1321,1329"), CodeSee.funcArg(CodeSee.getProp(this, _stackFrameId2, "64:34-64:38").root, _stackFrameId2, "64:34-64:43")), _stackFrameId2, "64:22-64:44", "$"))[0], _stackFrameId2, "64:22-64:47");

	      CodeSee.stackFrameExit(_stackFrameId2);
	      return _returnValue;
	    } catch (e) {
	      CodeSee.error(e, _stackFrameId2);
	      throw e;
	    }
	  },

	  $$(selector) {
	    let _stackFrameId3 = CodeSee.stackFrameEnter({
	      functionName: "$$",
	      filename: "riot|/src/core/component.js",
	      loc: "65:2-65:47"
	    });

	    try {
	      CodeSee.funcInputs([{
	        name: "this",
	        value: this
	      }, {
	        filename: "riot|/src/core/component.js",
	        loc: "65:5-65:13",
	        name: "selector",
	        uid: "1373,1381",
	        value: selector
	      }], _stackFrameId3);
	      CodeSee.traceLine("riot|/src/core/component.js", {
	        loc: "65:16-65:45",
	        uid: _stackFrameId3
	      });

	      const _returnValue2 = CodeSee.returnVal((CodeSee.aboutToCall(_stackFrameId3, "65:23-65:45"), CodeSee.callLikeExpr($(CodeSee.funcArg(selector, _stackFrameId3, "65:25-65:33", "1373,1381"), CodeSee.funcArg(CodeSee.getProp(this, _stackFrameId3, "65:35-65:39").root, _stackFrameId3, "65:35-65:44")), _stackFrameId3, "65:23-65:45", "$")), _stackFrameId3, "65:23-65:45");

	      CodeSee.stackFrameExit(_stackFrameId3);
	      return _returnValue2;
	    } catch (e) {
	      CodeSee.error(e, _stackFrameId3);
	      throw e;
	    }
	  }

	}, _stackFrameId$1, "62:45-66:1")), _stackFrameId$1, "62:31-66:2", "freeze"));
	CodeSee.checkForMutations();
	CodeSee.after({
	  writes: [{
	    filename: "riot|/src/core/component.js",
	    loc: "62:6-62:28",
	    name: "COMPONENT_CORE_HELPERS",
	    uid: "1253,1275",
	    value: COMPONENT_CORE_HELPERS
	  }]
	}, _stackFrameId$1);
	CodeSee.traceLine("riot|/src/core/component.js", {
	  loc: "68:0-72:2",
	  uid: _stackFrameId$1
	});
	CodeSee.before({
	  declares: [{
	    filename: "riot|/src/core/component.js",
	    loc: "68:6-68:24",
	    name: "PURE_COMPONENT_API",
	    uid: "1426,1444"
	  }]
	}, _stackFrameId$1);
	const PURE_COMPONENT_API = (CodeSee.aboutToCall(_stackFrameId$1, "68:27-72:2"), CodeSee.callLikeExpr(Object.freeze(CodeSee.expr({
	  [MOUNT_METHOD_KEY]: CodeSee.read(noop, _stackFrameId$1, "69:22-69:26", "561,565"),
	  [UPDATE_METHOD_KEY]: CodeSee.read(noop, _stackFrameId$1, "70:23-70:27", "561,565"),
	  [UNMOUNT_METHOD_KEY]: CodeSee.read(noop, _stackFrameId$1, "71:24-71:28", "561,565")
	}, _stackFrameId$1, "68:41-72:1")), _stackFrameId$1, "68:27-72:2", "freeze"));
	CodeSee.checkForMutations();
	CodeSee.after({
	  writes: [{
	    filename: "riot|/src/core/component.js",
	    loc: "68:6-68:24",
	    name: "PURE_COMPONENT_API",
	    uid: "1426,1444",
	    value: PURE_COMPONENT_API
	  }]
	}, _stackFrameId$1);
	CodeSee.traceLine("riot|/src/core/component.js", {
	  loc: "74:0-82:2",
	  uid: _stackFrameId$1
	});
	CodeSee.before({
	  declares: [{
	    filename: "riot|/src/core/component.js",
	    loc: "74:6-74:33",
	    name: "COMPONENT_LIFECYCLE_METHODS",
	    uid: "1559,1586"
	  }]
	}, _stackFrameId$1);
	const COMPONENT_LIFECYCLE_METHODS = (CodeSee.aboutToCall(_stackFrameId$1, "74:36-82:2"), CodeSee.callLikeExpr(Object.freeze(CodeSee.expr({
	  [SHOULD_UPDATE_KEY]: CodeSee.read(noop, _stackFrameId$1, "75:23-75:27", "561,565"),
	  [ON_BEFORE_MOUNT_KEY]: CodeSee.read(noop, _stackFrameId$1, "76:25-76:29", "561,565"),
	  [ON_MOUNTED_KEY]: CodeSee.read(noop, _stackFrameId$1, "77:20-77:24", "561,565"),
	  [ON_BEFORE_UPDATE_KEY]: CodeSee.read(noop, _stackFrameId$1, "78:26-78:30", "561,565"),
	  [ON_UPDATED_KEY]: CodeSee.read(noop, _stackFrameId$1, "79:20-79:24", "561,565"),
	  [ON_BEFORE_UNMOUNT_KEY]: CodeSee.read(noop, _stackFrameId$1, "80:27-80:31", "561,565"),
	  [ON_UNMOUNTED_KEY]: CodeSee.read(noop, _stackFrameId$1, "81:22-81:26", "561,565")
	}, _stackFrameId$1, "74:50-82:1")), _stackFrameId$1, "74:36-82:2", "freeze"));
	CodeSee.checkForMutations();
	CodeSee.after({
	  writes: [{
	    filename: "riot|/src/core/component.js",
	    loc: "74:6-74:33",
	    name: "COMPONENT_LIFECYCLE_METHODS",
	    uid: "1559,1586",
	    value: COMPONENT_LIFECYCLE_METHODS
	  }]
	}, _stackFrameId$1);
	CodeSee.traceLine("riot|/src/core/component.js", {
	  loc: "84:0-88:1",
	  uid: _stackFrameId$1
	});
	CodeSee.before({
	  declares: [{
	    filename: "riot|/src/core/component.js",
	    loc: "84:6-84:31",
	    name: "MOCKED_TEMPLATE_INTERFACE",
	    uid: "1819,1844"
	  }]
	}, _stackFrameId$1);
	const MOCKED_TEMPLATE_INTERFACE = CodeSee.expr(Object.assign({}, CodeSee.read(PURE_COMPONENT_API, _stackFrameId$1, "85:5-85:23", "1426,1444"), {
	  clone: CodeSee.read(noop, _stackFrameId$1, "86:9-86:13", "561,565"),
	  createDOM: CodeSee.read(noop, _stackFrameId$1, "87:13-87:17", "561,565")
	}), _stackFrameId$1, "84:34-88:1");
	/**
	 * Performance optimization for the recursive components
	 * @param  {RiotComponentShell} componentShell - riot compiler generated object
	 * @returns {Object} component like interface
	 */

	CodeSee.after({
	  writes: [{
	    filename: "riot|/src/core/component.js",
	    loc: "84:6-84:31",
	    name: "MOCKED_TEMPLATE_INTERFACE",
	    uid: "1819,1844",
	    value: MOCKED_TEMPLATE_INTERFACE
	  }]
	}, _stackFrameId$1);
	CodeSee.traceLine("riot|/src/core/component.js", {
	  loc: "95:0-95:56",
	  uid: _stackFrameId$1
	});
	CodeSee.before({
	  declares: [{
	    filename: "riot|/src/core/component.js",
	    loc: "95:6-95:29",
	    name: "memoizedCreateComponent",
	    uid: "2107,2130"
	  }]
	}, _stackFrameId$1);
	const memoizedCreateComponent = (CodeSee.aboutToCall(_stackFrameId$1, "95:32-95:56"), CodeSee.callLikeExpr(memoize(CodeSee.funcArg(createComponent, _stackFrameId$1, "95:40-95:55", "5900,5915")), _stackFrameId$1, "95:32-95:56", "memoize"));
	/**
	 * Evaluate the component properties either from its real attributes or from its initial user properties
	 * @param   {HTMLElement} element - component root
	 * @param   {Object}  initialProps - initial props
	 * @returns {Object} component props key value pairs
	 */

	CodeSee.checkForMutations();
	CodeSee.after({
	  writes: [{
	    filename: "riot|/src/core/component.js",
	    loc: "95:6-95:29",
	    name: "memoizedCreateComponent",
	    uid: "2107,2130",
	    value: memoizedCreateComponent
	  }]
	}, _stackFrameId$1);

	function evaluateInitialProps(element, initialProps) {
	  let _stackFrameId4 = CodeSee.stackFrameEnter({
	    functionName: "evaluateInitialProps",
	    filename: "riot|/src/core/component.js",
	    loc: "103:0-108:1"
	  });

	  try {
	    if (initialProps === void 0) {
	      initialProps = {};
	    }

	    CodeSee.funcInputs([{
	      filename: "riot|/src/core/component.js",
	      loc: "103:30-103:37",
	      name: "element",
	      uid: "2457,2464",
	      value: element
	    }, {
	      filename: "riot|/src/core/component.js",
	      loc: "103:39-103:51",
	      name: "initialProps",
	      uid: "2466,2478",
	      value: initialProps
	    }], _stackFrameId4);
	    CodeSee.traceLine("riot|/src/core/component.js", {
	      loc: "104:2-107:3",
	      uid: _stackFrameId4
	    });

	    const _returnValue3 = CodeSee.returnVal(Object.assign({}, (CodeSee.aboutToCall(_stackFrameId4, "105:7-105:37"), CodeSee.callLikeExpr(DOMattributesToObject(CodeSee.funcArg(element, _stackFrameId4, "105:29-105:36", "2457,2464")), _stackFrameId4, "105:7-105:37", "DOMattributesToObject")), (CodeSee.aboutToCall(_stackFrameId4, "106:7-106:33"), CodeSee.callLikeExpr(callOrAssign(CodeSee.funcArg(initialProps, _stackFrameId4, "106:20-106:32", "2466,2478")), _stackFrameId4, "106:7-106:33", "callOrAssign"))), _stackFrameId4, "104:9-107:3");

	    CodeSee.stackFrameExit(_stackFrameId4);
	    return _returnValue3;
	  } catch (e) {
	    CodeSee.error(e, _stackFrameId4);
	    throw e;
	  }
	}
	/**
	 * Bind a DOM node to its component object
	 * @param   {HTMLElement} node - html node mounted
	 * @param   {Object} component - Riot.js component object
	 * @returns {Object} the component object received as second argument
	 */


	CodeSee.traceLine("riot|/src/core/component.js", {
	  loc: "116:0-116:107",
	  uid: _stackFrameId$1
	});
	CodeSee.before({
	  declares: [{
	    filename: "riot|/src/core/component.js",
	    loc: "116:6-116:34",
	    name: "bindDOMNodeToComponentObject",
	    uid: "2814,2842"
	  }]
	}, _stackFrameId$1);
	const bindDOMNodeToComponentObject = CodeSee.funcExp((node, component) => {
	  let _stackFrameId5 = CodeSee.stackFrameEnter({
	    functionName: "bindDOMNodeToComponentObject",
	    filename: "riot|/src/core/component.js",
	    loc: "116:37-116:107"
	  });

	  try {
	    CodeSee.funcInputs([{
	      filename: "riot|/src/core/component.js",
	      loc: "116:38-116:42",
	      name: "node",
	      uid: "2846,2850",
	      value: node
	    }, {
	      filename: "riot|/src/core/component.js",
	      loc: "116:44-116:53",
	      name: "component",
	      uid: "2852,2861",
	      value: component
	    }], _stackFrameId5);
	    CodeSee.traceLine("riot|/src/core/component.js", {
	      loc: "116:58-116:107",
	      uid: _stackFrameId5
	    });
	    CodeSee.before({
	      writes: [{
	        filename: "riot|/src/core/component.js",
	        loc: "116:58-116:95",
	        name: ["node", DOM_COMPONENT_INSTANCE_PROPERTY$1],
	        uid: "2846,2850",
	        value: node
	      }]
	    }, _stackFrameId5);

	    const _returnValue4 = CodeSee.returnVal(node[DOM_COMPONENT_INSTANCE_PROPERTY$1] = CodeSee.read(component, _stackFrameId5, "116:98-116:107", "2852,2861"), _stackFrameId5, "116:58-116:107");

	    CodeSee.stackFrameExit(_stackFrameId5);
	    return _returnValue4;
	    CodeSee.after({
	      writes: [{
	        filename: "riot|/src/core/component.js",
	        loc: "116:58-116:95",
	        name: ["node", DOM_COMPONENT_INSTANCE_PROPERTY$1],
	        uid: "2846,2850",
	        value: node
	      }]
	    }, _stackFrameId5);
	    CodeSee.stackFrameExit(_stackFrameId5);
	  } catch (e) {
	    CodeSee.error(e, _stackFrameId5);
	    throw e;
	  }
	}, _stackFrameId$1, "116:37-116:107");
	/**
	 * Wrap the Riot.js core API methods using a mapping function
	 * @param   {Function} mapFunction - lifting function
	 * @returns {Object} an object having the { mount, update, unmount } functions
	 */

	CodeSee.after({
	  writes: [{
	    filename: "riot|/src/core/component.js",
	    loc: "116:6-116:34",
	    name: "bindDOMNodeToComponentObject",
	    uid: "2814,2842",
	    value: bindDOMNodeToComponentObject
	  }]
	}, _stackFrameId$1);

	function createCoreAPIMethods(mapFunction) {
	  let _stackFrameId6 = CodeSee.stackFrameEnter({
	    functionName: "createCoreAPIMethods",
	    filename: "riot|/src/core/component.js",
	    loc: "123:0-133:1"
	  });

	  try {
	    CodeSee.funcInputs([{
	      filename: "riot|/src/core/component.js",
	      loc: "123:30-123:41",
	      name: "mapFunction",
	      uid: "3150,3161",
	      value: mapFunction
	    }], _stackFrameId6);
	    CodeSee.traceLine("riot|/src/core/component.js", {
	      loc: "124:2-132:8",
	      uid: _stackFrameId6
	    });

	    const _returnValue6 = CodeSee.returnVal((CodeSee.aboutToCall(_stackFrameId6, "124:9-132:8"), CodeSee.callLikeExpr(CodeSee.expr([CodeSee.read(MOUNT_METHOD_KEY, _stackFrameId6, "125:4-125:20", "163,179"), CodeSee.read(UPDATE_METHOD_KEY, _stackFrameId6, "126:4-126:21", "464,481"), CodeSee.read(UNMOUNT_METHOD_KEY, _stackFrameId6, "127:4-127:22", "442,460")], _stackFrameId6, "124:9-128:3").reduce(CodeSee.funcExp((acc, method) => {
	      let _stackFrameId7 = CodeSee.stackFrameEnter({
	        functionName: "reduce callback",
	        filename: "riot|/src/core/component.js",
	        loc: "128:11-132:3"
	      });

	      try {
	        CodeSee.funcInputs([{
	          filename: "riot|/src/core/component.js",
	          loc: "128:12-128:15",
	          name: "acc",
	          uid: "3256,3259",
	          value: acc
	        }, {
	          filename: "riot|/src/core/component.js",
	          loc: "128:17-128:23",
	          name: "method",
	          uid: "3261,3267",
	          value: method
	        }], _stackFrameId7);
	        CodeSee.traceLine("riot|/src/core/component.js", {
	          loc: "129:4-129:37",
	          uid: _stackFrameId7
	        });
	        CodeSee.before({
	          writes: [{
	            filename: "riot|/src/core/component.js",
	            loc: "129:4-129:15",
	            name: ["acc", method],
	            uid: "3256,3259",
	            value: acc
	          }]
	        }, _stackFrameId7);
	        acc[method] = (CodeSee.aboutToCall(_stackFrameId7, "129:18-129:37"), CodeSee.callLikeExpr(mapFunction(CodeSee.funcArg(method, _stackFrameId7, "129:30-129:36", "3261,3267")), _stackFrameId7, "129:18-129:37", "mapFunction"));
	        CodeSee.checkForMutations();
	        CodeSee.after({
	          writes: [{
	            filename: "riot|/src/core/component.js",
	            loc: "129:4-129:15",
	            name: ["acc", method],
	            uid: "3256,3259",
	            value: acc
	          }]
	        }, _stackFrameId7);
	        CodeSee.traceLine("riot|/src/core/component.js", {
	          loc: "131:4-131:14",
	          uid: _stackFrameId7
	        });

	        const _returnValue5 = CodeSee.returnVal(acc, _stackFrameId7, "131:11-131:14", "3256,3259");

	        CodeSee.stackFrameExit(_stackFrameId7);
	        return _returnValue5;
	      } catch (e) {
	        CodeSee.error(e, _stackFrameId7);
	        throw e;
	      }
	    }, _stackFrameId6, "128:11-132:3"), {}), _stackFrameId6, "124:9-132:8", "reduce")), _stackFrameId6, "124:9-132:8");

	    CodeSee.stackFrameExit(_stackFrameId6);
	    return _returnValue6;
	  } catch (e) {
	    CodeSee.error(e, _stackFrameId6);
	    throw e;
	  }
	}
	/**
	 * Factory function to create the component templates only once
	 * @param   {Function} template - component template creation function
	 * @param   {RiotComponentShell} componentShell - riot compiler generated object
	 * @returns {TemplateChunk} template chunk object
	 */


	function componentTemplateFactory(template, componentShell) {
	  let _stackFrameId8 = CodeSee.stackFrameEnter({
	    functionName: "componentTemplateFactory",
	    filename: "riot|/src/core/component.js",
	    loc: "141:0-155:1"
	  });

	  try {
	    CodeSee.funcInputs([{
	      filename: "riot|/src/core/component.js",
	      loc: "141:34-141:42",
	      name: "template",
	      uid: "3648,3656",
	      value: template
	    }, {
	      filename: "riot|/src/core/component.js",
	      loc: "141:44-141:58",
	      name: "componentShell",
	      uid: "3658,3672",
	      value: componentShell
	    }], _stackFrameId8);
	    CodeSee.traceLine("riot|/src/core/component.js", {
	      loc: "142:2-142:105",
	      uid: _stackFrameId8
	    });
	    CodeSee.before({
	      declares: [{
	        filename: "riot|/src/core/component.js",
	        loc: "142:8-142:18",
	        name: "components",
	        uid: "3684,3694"
	      }]
	    }, _stackFrameId8);
	    const components = (CodeSee.aboutToCall(_stackFrameId8, "142:21-142:105"), CodeSee.callLikeExpr(createSubcomponents(CodeSee.expr(CodeSee.read(CodeSee.getProp(componentShell, _stackFrameId8, "142:41-142:55", "3658,3672").exports, _stackFrameId8, "142:41-142:63") ? CodeSee.read(CodeSee.getProp(CodeSee.getProp(componentShell, _stackFrameId8, "142:66-142:80", "3658,3672").exports, _stackFrameId8, "142:66-142:88").components, _stackFrameId8, "142:66-142:99") : {}, _stackFrameId8, "142:41-142:104")), _stackFrameId8, "142:21-142:105", "createSubcomponents"));
	    CodeSee.checkForMutations();
	    CodeSee.after({
	      writes: [{
	        filename: "riot|/src/core/component.js",
	        loc: "142:8-142:18",
	        name: "components",
	        uid: "3684,3694",
	        value: components
	      }]
	    }, _stackFrameId8);
	    CodeSee.traceLine("riot|/src/core/component.js", {
	      loc: "144:2-154:3",
	      uid: _stackFrameId8
	    });

	    const _returnValue9 = CodeSee.returnVal((CodeSee.aboutToCall(_stackFrameId8, "144:9-154:3"), CodeSee.callLikeExpr(template(CodeSee.funcArg(create, _stackFrameId8, "145:4-145:18", "658,672"), CodeSee.funcArg(expressionTypes, _stackFrameId8, "146:4-146:19", "676,691"), CodeSee.funcArg(bindingTypes, _stackFrameId8, "147:4-147:16", "610,622"), CodeSee.funcExp(name => {
	      let _stackFrameId9 = CodeSee.stackFrameEnter({
	        functionName: "template callback",
	        filename: "riot|/src/core/component.js",
	        loc: "148:4-153:5"
	      });

	      try {
	        CodeSee.funcInputs([{
	          filename: "riot|/src/core/component.js",
	          loc: "148:4-148:8",
	          name: "name",
	          uid: "3865,3869",
	          value: name
	        }], _stackFrameId9);
	        CodeSee.traceLine("riot|/src/core/component.js", {
	          loc: "150:6-150:38",
	          uid: _stackFrameId9
	        });

	        // improve support for recursive components
	        if (CodeSee.test(CodeSee.read(name, _stackFrameId9, "150:10-150:14", "3865,3869") === CodeSee.read(CodeSee.getProp(componentShell, _stackFrameId9, "150:19-150:33", "3658,3672").name, _stackFrameId9, "150:19-150:38"), _stackFrameId9, "150:10-150:38")) {
	          CodeSee.traceLine("riot|/src/core/component.js", {
	            loc: "150:40-150:86",
	            uid: _stackFrameId9
	          });

	          const _returnValue7 = CodeSee.returnVal((CodeSee.aboutToCall(_stackFrameId9, "150:47-150:86"), CodeSee.callLikeExpr(memoizedCreateComponent(CodeSee.funcArg(componentShell, _stackFrameId9, "150:71-150:85", "3658,3672")), _stackFrameId9, "150:47-150:86", "memoizedCreateComponent")), _stackFrameId9, "150:47-150:86");

	          CodeSee.stackFrameExit(_stackFrameId9);
	          return _returnValue7;
	        } // return the registered components


	        CodeSee.checkForMutations();
	        CodeSee.traceLine("riot|/src/core/component.js", {
	          loc: "152:6-152:72",
	          uid: _stackFrameId9
	        });

	        const _returnValue8 = CodeSee.returnVal(CodeSee.read(CodeSee.getProp(components, _stackFrameId9, "152:13-152:23", "3684,3694")[CodeSee.read(name, _stackFrameId9, "152:24-152:28", "3865,3869")], _stackFrameId9, "152:13-152:29") || (CodeSee.aboutToCall(_stackFrameId9, "152:33-152:72"), CodeSee.callLikeExpr(COMPONENTS_IMPLEMENTATION_MAP$1.get(CodeSee.funcArg(name, _stackFrameId9, "152:67-152:71", "3865,3869")), _stackFrameId9, "152:33-152:72", "get")), _stackFrameId9, "152:13-152:72");

	        CodeSee.stackFrameExit(_stackFrameId9);
	        return _returnValue8;
	      } catch (e) {
	        CodeSee.error(e, _stackFrameId9);
	        throw e;
	      }
	    }, _stackFrameId8, "148:4-153:5")), _stackFrameId8, "144:9-154:3", "template")), _stackFrameId8, "144:9-154:3");

	    CodeSee.stackFrameExit(_stackFrameId8);
	    return _returnValue9;
	  } catch (e) {
	    CodeSee.error(e, _stackFrameId8);
	    throw e;
	  }
	}
	/**
	 * Create a pure component
	 * @param   {Function} pureFactoryFunction - pure component factory function
	 * @param   {Array} options.slots - component slots
	 * @param   {Array} options.attributes - component attributes
	 * @param   {Array} options.template - template factory function
	 * @param   {Array} options.template - template factory function
	 * @param   {any} options.props - initial component properties
	 * @returns {Object} pure component object
	 */


	function createPureComponent(pureFactoryFunction, _ref) {
	  let _stackFrameId10 = CodeSee.stackFrameEnter({
	    functionName: "createPureComponent",
	    filename: "riot|/src/core/component.js",
	    loc: "167:0-190:1"
	  });

	  try {
	    let {
	      slots,
	      attributes,
	      props,
	      css,
	      template
	    } = _ref;
	    CodeSee.funcInputs([{
	      filename: "riot|/src/core/component.js",
	      loc: "167:29-167:48",
	      name: "pureFactoryFunction",
	      uid: "4631,4650",
	      value: pureFactoryFunction
	    }, {
	      filename: "riot|/src/core/component.js",
	      loc: "167:52-167:57",
	      name: "slots",
	      uid: "4654,4659",
	      value: slots
	    }, {
	      filename: "riot|/src/core/component.js",
	      loc: "167:59-167:69",
	      name: "attributes",
	      uid: "4661,4671",
	      value: attributes
	    }, {
	      filename: "riot|/src/core/component.js",
	      loc: "167:71-167:76",
	      name: "props",
	      uid: "4673,4678",
	      value: props
	    }, {
	      filename: "riot|/src/core/component.js",
	      loc: "167:78-167:81",
	      name: "css",
	      uid: "4680,4683",
	      value: css
	    }, {
	      filename: "riot|/src/core/component.js",
	      loc: "167:83-167:91",
	      name: "template",
	      uid: "4685,4693",
	      value: template
	    }], _stackFrameId10);
	    CodeSee.traceLine("riot|/src/core/component.js", {
	      loc: "168:2-168:14",
	      uid: _stackFrameId10
	    });

	    if (CodeSee.test(template, _stackFrameId10, "168:6-168:14", "4685,4693")) {
	      CodeSee.traceLine("riot|/src/core/component.js", {
	        loc: "168:16-168:58",
	        uid: _stackFrameId10
	      });
	      CodeSee.aboutToCall(_stackFrameId10, "168:16-168:58"), CodeSee.callLikeExpr(panic('Pure components can not have html'), _stackFrameId10, "168:16-168:58", "panic");
	    }

	    CodeSee.traceLine("riot|/src/core/component.js", {
	      loc: "169:2-169:9",
	      uid: _stackFrameId10
	    });

	    if (CodeSee.test(css, _stackFrameId10, "169:6-169:9", "4680,4683")) {
	      CodeSee.traceLine("riot|/src/core/component.js", {
	        loc: "169:11-169:51",
	        uid: _stackFrameId10
	      });
	      CodeSee.aboutToCall(_stackFrameId10, "169:11-169:51"), CodeSee.callLikeExpr(panic('Pure components do not have css'), _stackFrameId10, "169:11-169:51", "panic");
	    }

	    CodeSee.traceLine("riot|/src/core/component.js", {
	      loc: "171:2-174:3",
	      uid: _stackFrameId10
	    });
	    CodeSee.before({
	      declares: [{
	        filename: "riot|/src/core/component.js",
	        loc: "171:8-171:17",
	        name: "component",
	        uid: "4819,4828"
	      }]
	    }, _stackFrameId10);
	    const component = (CodeSee.aboutToCall(_stackFrameId10, "171:20-174:3"), CodeSee.callLikeExpr(defineDefaults((CodeSee.aboutToCall(_stackFrameId10, "172:4-172:53"), CodeSee.callLikeExpr(pureFactoryFunction(CodeSee.expr({
	      slots: CodeSee.read(slots, _stackFrameId10, "172:26-172:31", "4654,4659"),
	      attributes: CodeSee.read(attributes, _stackFrameId10, "172:33-172:43", "4661,4671"),
	      props: CodeSee.read(props, _stackFrameId10, "172:45-172:50", "4673,4678")
	    }, _stackFrameId10, "172:24-172:52")), _stackFrameId10, "172:4-172:53", "pureFactoryFunction")), CodeSee.funcArg(PURE_COMPONENT_API, _stackFrameId10, "173:4-173:22", "1426,1444")), _stackFrameId10, "171:20-174:3", "defineDefaults"));
	    CodeSee.checkForMutations();
	    CodeSee.after({
	      writes: [{
	        filename: "riot|/src/core/component.js",
	        loc: "171:8-171:17",
	        name: "component",
	        uid: "4819,4828",
	        value: component
	      }]
	    }, _stackFrameId10);
	    CodeSee.traceLine("riot|/src/core/component.js", {
	      loc: "176:2-189:4",
	      uid: _stackFrameId10
	    });

	    const _returnValue12 = CodeSee.returnVal((CodeSee.aboutToCall(_stackFrameId10, "176:9-189:4"), CodeSee.callLikeExpr(createCoreAPIMethods(CodeSee.funcExp(method => {
	      let _stackFrameId11 = CodeSee.stackFrameEnter({
	        functionName: "createCoreAPIMethods callback",
	        filename: "riot|/src/core/component.js",
	        loc: "176:30-189:3"
	      });

	      try {
	        CodeSee.funcInputs([{
	          filename: "riot|/src/core/component.js",
	          loc: "176:30-176:36",
	          name: "method",
	          uid: "4960,4966",
	          value: method
	        }], _stackFrameId11);
	        CodeSee.traceLine("riot|/src/core/component.js", {
	          loc: "176:40-189:3",
	          uid: _stackFrameId11
	        });

	        const _returnValue11 = CodeSee.returnVal(CodeSee.funcExp(function () {
	          let _stackFrameId12 = CodeSee.stackFrameEnter({
	            functionName: "<anonymous function>",
	            filename: "riot|/src/core/component.js",
	            loc: "176:40-189:3"
	          });

	          try {
	            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	              args[_key] = arguments[_key];
	            }

	            CodeSee.funcInputs([{
	              filename: "riot|/src/core/component.js",
	              loc: "176:44-176:48",
	              name: "args",
	              uid: "4974,4978",
	              value: args
	            }], _stackFrameId12);
	            CodeSee.traceLine("riot|/src/core/component.js", {
	              loc: "179:4-179:35",
	              uid: _stackFrameId12
	            });

	            // intercept the mount calls to bind the DOM node to the pure object created
	            // see also https://github.com/riot/riot/issues/2806
	            if (CodeSee.test(CodeSee.read(method, _stackFrameId12, "179:8-179:14", "4960,4966") === CodeSee.read(MOUNT_METHOD_KEY, _stackFrameId12, "179:19-179:35", "163,179"), _stackFrameId12, "179:8-179:35")) {
	              CodeSee.traceLine("riot|/src/core/component.js", {
	                loc: "180:6-180:23",
	                uid: _stackFrameId12
	              });
	              CodeSee.before({
	                declares: [{
	                  filename: "riot|/src/core/component.js",
	                  loc: "180:13-180:15",
	                  name: "el",
	                  uid: "5175,5177"
	                }]
	              }, _stackFrameId12);
	              const [el] = CodeSee.read(args, _stackFrameId12, "180:19-180:23", "4974,4978"); // mark this node as pure element

	              CodeSee.after({
	                writes: [{
	                  filename: "riot|/src/core/component.js",
	                  loc: "180:13-180:15",
	                  name: "el",
	                  uid: "5175,5177",
	                  value: el
	                }]
	              }, _stackFrameId12);
	              CodeSee.traceLine("riot|/src/core/component.js", {
	                loc: "182:6-182:31",
	                uid: _stackFrameId12
	              });
	              CodeSee.before({
	                writes: [{
	                  filename: "riot|/src/core/component.js",
	                  loc: "182:6-182:24",
	                  name: ["el", IS_PURE_SYMBOL],
	                  uid: "5175,5177",
	                  value: el
	                }]
	              }, _stackFrameId12);
	              el[IS_PURE_SYMBOL] = true;
	              CodeSee.after({
	                writes: [{
	                  filename: "riot|/src/core/component.js",
	                  loc: "182:6-182:24",
	                  name: ["el", IS_PURE_SYMBOL],
	                  uid: "5175,5177",
	                  value: el
	                }]
	              }, _stackFrameId12);
	              CodeSee.traceLine("riot|/src/core/component.js", {
	                loc: "183:6-183:49",
	                uid: _stackFrameId12
	              });
	              CodeSee.aboutToCall(_stackFrameId12, "183:6-183:49"), CodeSee.callLikeExpr(bindDOMNodeToComponentObject(CodeSee.funcArg(el, _stackFrameId12, "183:35-183:37", "5175,5177"), CodeSee.funcArg(component, _stackFrameId12, "183:39-183:48", "4819,4828")), _stackFrameId12, "183:6-183:49", "bindDOMNodeToComponentObject");
	              CodeSee.checkForMutations();
	            }

	            CodeSee.traceLine("riot|/src/core/component.js", {
	              loc: "186:4-186:30",
	              uid: _stackFrameId12
	            });
	            CodeSee.aboutToCall(_stackFrameId12, "186:4-186:30"), CodeSee.callLikeExpr(component[CodeSee.read(method, _stackFrameId12, "186:14-186:20", "4960,4966")](...CodeSee.read(args, _stackFrameId12, "186:25-186:29", "4974,4978")), _stackFrameId12, "186:4-186:30", undefined);
	            CodeSee.checkForMutations();
	            CodeSee.traceLine("riot|/src/core/component.js", {
	              loc: "188:4-188:20",
	              uid: _stackFrameId12
	            });

	            const _returnValue10 = CodeSee.returnVal(component, _stackFrameId12, "188:11-188:20", "4819,4828");

	            CodeSee.stackFrameExit(_stackFrameId12);
	            return _returnValue10;
	          } catch (e) {
	            CodeSee.error(e, _stackFrameId12);
	            throw e;
	          }
	        }, _stackFrameId11, "176:40-189:3"), _stackFrameId11, "176:40-189:3");

	        CodeSee.stackFrameExit(_stackFrameId11);
	        return _returnValue11;
	      } catch (e) {
	        CodeSee.error(e, _stackFrameId11);
	        throw e;
	      }
	    }, _stackFrameId10, "176:30-189:3")), _stackFrameId10, "176:9-189:4", "createCoreAPIMethods")), _stackFrameId10, "176:9-189:4");

	    CodeSee.stackFrameExit(_stackFrameId10);
	    return _returnValue12;
	  } catch (e) {
	    CodeSee.error(e, _stackFrameId10);
	    throw e;
	  }
	}
	/**
	 * Create the component interface needed for the @riotjs/dom-bindings tag bindings
	 * @param   {RiotComponentShell} componentShell - riot compiler generated object
	 * @param   {string} componentShell.css - component css
	 * @param   {Function} componentShell.template - function that will return the dom-bindings template function
	 * @param   {Object} componentShell.exports - component interface
	 * @param   {string} componentShell.name - component name
	 * @returns {Object} component like interface
	 */


	CodeSee.traceLine("riot|/src/core/component.js", {
	  loc: "201:0-241:1",
	  uid: _stackFrameId$1
	});
	function createComponent(componentShell) {
	  let _stackFrameId13 = CodeSee.stackFrameEnter({
	    functionName: "createComponent",
	    filename: "riot|/src/core/component.js",
	    loc: "201:7-241:1"
	  });

	  try {
	    CodeSee.funcInputs([{
	      filename: "riot|/src/core/component.js",
	      loc: "201:32-201:46",
	      name: "componentShell",
	      uid: "5916,5930",
	      value: componentShell
	    }], _stackFrameId13);
	    CodeSee.traceLine("riot|/src/core/component.js", {
	      loc: "202:2-202:55",
	      uid: _stackFrameId13
	    });
	    CodeSee.before({
	      declares: [{
	        filename: "riot|/src/core/component.js",
	        loc: "202:9-202:12",
	        name: "css",
	        uid: "5943,5946"
	      }, {
	        filename: "riot|/src/core/component.js",
	        loc: "202:14-202:22",
	        name: "template",
	        uid: "5948,5956"
	      }, {
	        filename: "riot|/src/core/component.js",
	        loc: "202:24-202:31",
	        name: "exports",
	        uid: "5958,5965"
	      }, {
	        filename: "riot|/src/core/component.js",
	        loc: "202:33-202:37",
	        name: "name",
	        uid: "5967,5971"
	      }]
	    }, _stackFrameId13);
	    const {
	      css,
	      template,
	      exports,
	      name
	    } = CodeSee.read(componentShell, _stackFrameId13, "202:41-202:55", "5916,5930");
	    CodeSee.after({
	      writes: [{
	        filename: "riot|/src/core/component.js",
	        loc: "202:9-202:12",
	        name: "css",
	        uid: "5943,5946",
	        value: css
	      }, {
	        filename: "riot|/src/core/component.js",
	        loc: "202:14-202:22",
	        name: "template",
	        uid: "5948,5956",
	        value: template
	      }, {
	        filename: "riot|/src/core/component.js",
	        loc: "202:24-202:31",
	        name: "exports",
	        uid: "5958,5965",
	        value: exports
	      }, {
	        filename: "riot|/src/core/component.js",
	        loc: "202:33-202:37",
	        name: "name",
	        uid: "5967,5971",
	        value: name
	      }]
	    }, _stackFrameId13);
	    CodeSee.traceLine("riot|/src/core/component.js", {
	      loc: "203:2-206:31",
	      uid: _stackFrameId13
	    });
	    CodeSee.before({
	      declares: [{
	        filename: "riot|/src/core/component.js",
	        loc: "203:8-203:18",
	        name: "templateFn",
	        uid: "5998,6008"
	      }]
	    }, _stackFrameId13);
	    const templateFn = CodeSee.expr(CodeSee.read(template, _stackFrameId13, "203:21-203:29", "5948,5956") ? (CodeSee.aboutToCall(_stackFrameId13, "203:32-206:3"), CodeSee.callLikeExpr(componentTemplateFactory(CodeSee.funcArg(template, _stackFrameId13, "204:4-204:12", "5948,5956"), CodeSee.funcArg(componentShell, _stackFrameId13, "205:4-205:18", "5916,5930")), _stackFrameId13, "203:32-206:3", "componentTemplateFactory")) : CodeSee.read(MOCKED_TEMPLATE_INTERFACE, _stackFrameId13, "206:6-206:31", "1819,1844"), _stackFrameId13, "203:21-206:31");
	    CodeSee.checkForMutations();
	    CodeSee.after({
	      writes: [{
	        filename: "riot|/src/core/component.js",
	        loc: "203:8-203:18",
	        name: "templateFn",
	        uid: "5998,6008",
	        value: templateFn
	      }]
	    }, _stackFrameId13);
	    CodeSee.traceLine("riot|/src/core/component.js", {
	      loc: "208:2-240:3",
	      uid: _stackFrameId13
	    });

	    const _returnValue18 = CodeSee.returnVal(CodeSee.funcExp(_ref2 => {
	      let _stackFrameId14 = CodeSee.stackFrameEnter({
	        functionName: "<anonymous function>",
	        filename: "riot|/src/core/component.js",
	        loc: "208:9-240:3"
	      });

	      try {
	        let {
	          slots,
	          attributes,
	          props
	        } = _ref2;
	        CodeSee.funcInputs([{
	          filename: "riot|/src/core/component.js",
	          loc: "208:11-208:16",
	          name: "slots",
	          uid: "6125,6130",
	          value: slots
	        }, {
	          filename: "riot|/src/core/component.js",
	          loc: "208:18-208:28",
	          name: "attributes",
	          uid: "6132,6142",
	          value: attributes
	        }, {
	          filename: "riot|/src/core/component.js",
	          loc: "208:30-208:35",
	          name: "props",
	          uid: "6144,6149",
	          value: props
	        }], _stackFrameId14);
	        CodeSee.traceLine("riot|/src/core/component.js", {
	          loc: "210:4-210:42",
	          uid: _stackFrameId14
	        });

	        // pure components rendering will be managed by the end user
	        if (CodeSee.test(CodeSee.read(exports, _stackFrameId14, "210:8-210:15", "5958,5965") && CodeSee.read(CodeSee.getProp(exports, _stackFrameId14, "210:19-210:26", "5958,5965")[CodeSee.read(IS_PURE_SYMBOL, _stackFrameId14, "210:27-210:41", "145,159")], _stackFrameId14, "210:19-210:42"), _stackFrameId14, "210:8-210:42")) {
	          CodeSee.traceLine("riot|/src/core/component.js", {
	            loc: "211:6-214:7",
	            uid: _stackFrameId14
	          });

	          const _returnValue13 = CodeSee.returnVal((CodeSee.aboutToCall(_stackFrameId14, "211:13-214:7"), CodeSee.callLikeExpr(createPureComponent(CodeSee.funcArg(exports, _stackFrameId14, "212:8-212:15", "5958,5965"), CodeSee.expr({
	            slots: CodeSee.read(slots, _stackFrameId14, "213:10-213:15", "6125,6130"),
	            attributes: CodeSee.read(attributes, _stackFrameId14, "213:17-213:27", "6132,6142"),
	            props: CodeSee.read(props, _stackFrameId14, "213:29-213:34", "6144,6149"),
	            css: CodeSee.read(css, _stackFrameId14, "213:36-213:39", "5943,5946"),
	            template: CodeSee.read(template, _stackFrameId14, "213:41-213:49", "5948,5956")
	          }, _stackFrameId14, "213:8-213:51")), _stackFrameId14, "211:13-214:7", "createPureComponent")), _stackFrameId14, "211:13-214:7");

	          CodeSee.stackFrameExit(_stackFrameId14);
	          return _returnValue13;
	        }

	        CodeSee.checkForMutations();
	        CodeSee.traceLine("riot|/src/core/component.js", {
	          loc: "216:4-216:52",
	          uid: _stackFrameId14
	        });
	        CodeSee.before({
	          declares: [{
	            filename: "riot|/src/core/component.js",
	            loc: "216:10-216:22",
	            name: "componentAPI",
	            uid: "6388,6400"
	          }]
	        }, _stackFrameId14);
	        const componentAPI = CodeSee.expr((CodeSee.aboutToCall(_stackFrameId14, "216:25-216:46"), CodeSee.callLikeExpr(callOrAssign(CodeSee.funcArg(exports, _stackFrameId14, "216:38-216:45", "5958,5965")), _stackFrameId14, "216:25-216:46", "callOrAssign")) || {}, _stackFrameId14, "216:25-216:52");
	        CodeSee.checkForMutations();
	        CodeSee.after({
	          writes: [{
	            filename: "riot|/src/core/component.js",
	            loc: "216:10-216:22",
	            name: "componentAPI",
	            uid: "6388,6400",
	            value: componentAPI
	          }]
	        }, _stackFrameId14);
	        CodeSee.traceLine("riot|/src/core/component.js", {
	          loc: "218:4-223:34",
	          uid: _stackFrameId14
	        });
	        CodeSee.before({
	          declares: [{
	            filename: "riot|/src/core/component.js",
	            loc: "218:10-218:19",
	            name: "component",
	            uid: "6442,6451"
	          }]
	        }, _stackFrameId14);
	        const component = (CodeSee.aboutToCall(_stackFrameId14, "218:22-223:34"), CodeSee.callLikeExpr((CodeSee.aboutToCall(_stackFrameId14, "218:22-223:6"), CodeSee.callLikeExpr(defineComponent(CodeSee.expr({
	          css: CodeSee.read(css, _stackFrameId14, "219:6-219:9", "5943,5946"),
	          template: CodeSee.read(templateFn, _stackFrameId14, "220:16-220:26", "5998,6008"),
	          componentAPI: CodeSee.read(componentAPI, _stackFrameId14, "221:6-221:18", "6388,6400"),
	          name: CodeSee.read(name, _stackFrameId14, "222:6-222:10", "5967,5971")
	        }, _stackFrameId14, "218:38-223:5")), _stackFrameId14, "218:22-223:6", "defineComponent"))(CodeSee.expr({
	          slots: CodeSee.read(slots, _stackFrameId14, "223:8-223:13", "6125,6130"),
	          attributes: CodeSee.read(attributes, _stackFrameId14, "223:15-223:25", "6132,6142"),
	          props: CodeSee.read(props, _stackFrameId14, "223:27-223:32", "6144,6149")
	        }, _stackFrameId14, "223:7-223:33")), _stackFrameId14, "218:22-223:34", undefined)); // notice that for the components create via tag binding
	        // we need to invert the mount (state/parentScope) arguments
	        // the template bindings will only forward the parentScope updates
	        // and never deal with the component state

	        CodeSee.after({
	          writes: [{
	            filename: "riot|/src/core/component.js",
	            loc: "218:10-218:19",
	            name: "component",
	            uid: "6442,6451",
	            value: component
	          }]
	        }, _stackFrameId14);
	        CodeSee.traceLine("riot|/src/core/component.js", {
	          loc: "229:4-239:5",
	          uid: _stackFrameId14
	        });

	        const _returnValue17 = CodeSee.returnVal({
	          mount(element, parentScope, state) {
	            let _stackFrameId15 = CodeSee.stackFrameEnter({
	              functionName: "mount",
	              filename: "riot|/src/core/component.js",
	              loc: "230:6-232:7"
	            });

	            try {
	              CodeSee.funcInputs([{
	                name: "this",
	                value: this
	              }, {
	                filename: "riot|/src/core/component.js",
	                loc: "230:12-230:19",
	                name: "element",
	                uid: "6847,6854",
	                value: element
	              }, {
	                filename: "riot|/src/core/component.js",
	                loc: "230:21-230:32",
	                name: "parentScope",
	                uid: "6856,6867",
	                value: parentScope
	              }, {
	                filename: "riot|/src/core/component.js",
	                loc: "230:34-230:39",
	                name: "state",
	                uid: "6869,6874",
	                value: state
	              }], _stackFrameId15);
	              CodeSee.traceLine("riot|/src/core/component.js", {
	                loc: "231:8-231:59",
	                uid: _stackFrameId15
	              });

	              const _returnValue14 = CodeSee.returnVal((CodeSee.aboutToCall(_stackFrameId15, "231:15-231:59"), CodeSee.callLikeExpr(component.mount(CodeSee.funcArg(element, _stackFrameId15, "231:31-231:38", "6847,6854"), CodeSee.funcArg(state, _stackFrameId15, "231:40-231:45", "6869,6874"), CodeSee.funcArg(parentScope, _stackFrameId15, "231:47-231:58", "6856,6867")), _stackFrameId15, "231:15-231:59", "mount")), _stackFrameId15, "231:15-231:59");

	              CodeSee.stackFrameExit(_stackFrameId15);
	              return _returnValue14;
	            } catch (e) {
	              CodeSee.error(e, _stackFrameId15);
	              throw e;
	            }
	          },

	          update(parentScope, state) {
	            let _stackFrameId16 = CodeSee.stackFrameEnter({
	              functionName: "update",
	              filename: "riot|/src/core/component.js",
	              loc: "233:6-235:7"
	            });

	            try {
	              CodeSee.funcInputs([{
	                name: "this",
	                value: this
	              }, {
	                filename: "riot|/src/core/component.js",
	                loc: "233:13-233:24",
	                name: "parentScope",
	                uid: "6960,6971",
	                value: parentScope
	              }, {
	                filename: "riot|/src/core/component.js",
	                loc: "233:26-233:31",
	                name: "state",
	                uid: "6973,6978",
	                value: state
	              }], _stackFrameId16);
	              CodeSee.traceLine("riot|/src/core/component.js", {
	                loc: "234:8-234:51",
	                uid: _stackFrameId16
	              });

	              const _returnValue15 = CodeSee.returnVal((CodeSee.aboutToCall(_stackFrameId16, "234:15-234:51"), CodeSee.callLikeExpr(component.update(CodeSee.funcArg(state, _stackFrameId16, "234:32-234:37", "6973,6978"), CodeSee.funcArg(parentScope, _stackFrameId16, "234:39-234:50", "6960,6971")), _stackFrameId16, "234:15-234:51", "update")), _stackFrameId16, "234:15-234:51");

	              CodeSee.stackFrameExit(_stackFrameId16);
	              return _returnValue15;
	            } catch (e) {
	              CodeSee.error(e, _stackFrameId16);
	              throw e;
	            }
	          },

	          unmount(preserveRoot) {
	            let _stackFrameId17 = CodeSee.stackFrameEnter({
	              functionName: "unmount",
	              filename: "riot|/src/core/component.js",
	              loc: "236:6-238:7"
	            });

	            try {
	              CodeSee.funcInputs([{
	                name: "this",
	                value: this
	              }, {
	                filename: "riot|/src/core/component.js",
	                loc: "236:14-236:26",
	                name: "preserveRoot",
	                uid: "7057,7069",
	                value: preserveRoot
	              }], _stackFrameId17);
	              CodeSee.traceLine("riot|/src/core/component.js", {
	                loc: "237:8-237:46",
	                uid: _stackFrameId17
	              });

	              const _returnValue16 = CodeSee.returnVal((CodeSee.aboutToCall(_stackFrameId17, "237:15-237:46"), CodeSee.callLikeExpr(component.unmount(CodeSee.funcArg(preserveRoot, _stackFrameId17, "237:33-237:45", "7057,7069")), _stackFrameId17, "237:15-237:46", "unmount")), _stackFrameId17, "237:15-237:46");

	              CodeSee.stackFrameExit(_stackFrameId17);
	              return _returnValue16;
	            } catch (e) {
	              CodeSee.error(e, _stackFrameId17);
	              throw e;
	            }
	          }

	        }, _stackFrameId14, "229:11-239:5");

	        CodeSee.stackFrameExit(_stackFrameId14);
	        return _returnValue17;
	      } catch (e) {
	        CodeSee.error(e, _stackFrameId14);
	        throw e;
	      }
	    }, _stackFrameId13, "208:9-240:3"), _stackFrameId13, "208:9-240:3");

	    CodeSee.stackFrameExit(_stackFrameId13);
	    return _returnValue18;
	  } catch (e) {
	    CodeSee.error(e, _stackFrameId13);
	    throw e;
	  }
	}
	/**
	 * Component definition function
	 * @param   {Object} implementation - the componen implementation will be generated via compiler
	 * @param   {Object} component - the component initial properties
	 * @returns {Object} a new component implementation object
	 */

	CodeSee.traceLine("riot|/src/core/component.js", {
	  loc: "249:0-270:1",
	  uid: _stackFrameId$1
	});
	function defineComponent(_ref3) {
	  let _stackFrameId18 = CodeSee.stackFrameEnter({
	    functionName: "defineComponent",
	    filename: "riot|/src/core/component.js",
	    loc: "249:7-270:1"
	  });

	  try {
	    let {
	      css,
	      template,
	      componentAPI,
	      name
	    } = _ref3;
	    CodeSee.funcInputs([{
	      filename: "riot|/src/core/component.js",
	      loc: "249:33-249:36",
	      name: "css",
	      uid: "7437,7440",
	      value: css
	    }, {
	      filename: "riot|/src/core/component.js",
	      loc: "249:38-249:46",
	      name: "template",
	      uid: "7442,7450",
	      value: template
	    }, {
	      filename: "riot|/src/core/component.js",
	      loc: "249:48-249:60",
	      name: "componentAPI",
	      uid: "7452,7464",
	      value: componentAPI
	    }, {
	      filename: "riot|/src/core/component.js",
	      loc: "249:62-249:66",
	      name: "name",
	      uid: "7466,7470",
	      value: name
	    }], _stackFrameId18);
	    CodeSee.traceLine("riot|/src/core/component.js", {
	      loc: "251:2-251:17",
	      uid: _stackFrameId18
	    });

	    // add the component css into the DOM
	    if (CodeSee.test(CodeSee.read(css, _stackFrameId18, "251:6-251:9", "7437,7440") && CodeSee.read(name, _stackFrameId18, "251:13-251:17", "7466,7470"), _stackFrameId18, "251:6-251:17")) {
	      CodeSee.traceLine("riot|/src/core/component.js", {
	        loc: "251:19-251:44",
	        uid: _stackFrameId18
	      });
	      CodeSee.aboutToCall(_stackFrameId18, "251:19-251:44"), CodeSee.callLikeExpr(cssManager.add(CodeSee.funcArg(name, _stackFrameId18, "251:34-251:38", "7466,7470"), CodeSee.funcArg(css, _stackFrameId18, "251:40-251:43", "7437,7440")), _stackFrameId18, "251:19-251:44", "add");
	      CodeSee.checkForMutations();
	    }

	    CodeSee.traceLine("riot|/src/core/component.js", {
	      loc: "253:2-269:3",
	      uid: _stackFrameId18
	    });

	    const _returnValue19 = CodeSee.returnVal((CodeSee.aboutToCall(_stackFrameId18, "253:9-269:3"), CodeSee.callLikeExpr((CodeSee.aboutToCall(_stackFrameId18, "253:9-253:35"), CodeSee.callLikeExpr(curry(CodeSee.funcArg(enhanceComponentAPI, _stackFrameId18, "253:15-253:34", "10505,10524")), _stackFrameId18, "253:9-253:35", "curry"))((CodeSee.aboutToCall(_stackFrameId18, "253:36-268:6"), CodeSee.callLikeExpr(defineProperties(( // set the component defaults without overriding the original component API
	    CodeSee.aboutToCall(_stackFrameId18, "255:4-259:6"), CodeSee.callLikeExpr(defineDefaults(CodeSee.funcArg(componentAPI, _stackFrameId18, "255:19-255:31", "7452,7464"), CodeSee.expr(Object.assign({}, CodeSee.read(COMPONENT_LIFECYCLE_METHODS, _stackFrameId18, "256:9-256:36", "1559,1586"), {
	      [PROPS_KEY]: {},
	      [STATE_KEY]: {}
	    }), _stackFrameId18, "255:33-259:5")), _stackFrameId18, "255:4-259:6", "defineDefaults")), CodeSee.expr(Object.assign({
	      // defined during the component creation
	      [SLOTS_KEY]: null,
	      [ROOT_KEY]: null
	    }, CodeSee.read(COMPONENT_CORE_HELPERS, _stackFrameId18, "264:9-264:31", "1253,1275"), {
	      name: CodeSee.read(name, _stackFrameId18, "265:6-265:10", "7466,7470"),
	      css: CodeSee.read(css, _stackFrameId18, "266:6-266:9", "7437,7440"),
	      template: CodeSee.read(template, _stackFrameId18, "267:6-267:14", "7442,7450")
	    }), _stackFrameId18, "259:8-268:5")), _stackFrameId18, "253:36-268:6", "defineProperties"))), _stackFrameId18, "253:9-269:3", undefined)), _stackFrameId18, "253:9-269:3");

	    CodeSee.stackFrameExit(_stackFrameId18);
	    return _returnValue19;
	  } catch (e) {
	    CodeSee.error(e, _stackFrameId18);
	    throw e;
	  }
	}
	/**
	 * Create the bindings to update the component attributes
	 * @param   {HTMLElement} node - node where we will bind the expressions
	 * @param   {Array} attributes - list of attribute bindings
	 * @returns {TemplateChunk} - template bindings object
	 */

	function createAttributeBindings(node, attributes) {
	  let _stackFrameId19 = CodeSee.stackFrameEnter({
	    functionName: "createAttributeBindings",
	    filename: "riot|/src/core/component.js",
	    loc: "278:0-290:1"
	  });

	  try {
	    if (attributes === void 0) {
	      attributes = [];
	    }

	    CodeSee.funcInputs([{
	      filename: "riot|/src/core/component.js",
	      loc: "278:33-278:37",
	      name: "node",
	      uid: "8341,8345",
	      value: node
	    }, {
	      filename: "riot|/src/core/component.js",
	      loc: "278:39-278:49",
	      name: "attributes",
	      uid: "8347,8357",
	      value: attributes
	    }], _stackFrameId19);
	    CodeSee.traceLine("riot|/src/core/component.js", {
	      loc: "279:2-279:68",
	      uid: _stackFrameId19
	    });
	    CodeSee.before({
	      declares: [{
	        filename: "riot|/src/core/component.js",
	        loc: "279:8-279:19",
	        name: "expressions",
	        uid: "8374,8385"
	      }]
	    }, _stackFrameId19);
	    const expressions = (CodeSee.aboutToCall(_stackFrameId19, "279:22-279:68"), CodeSee.callLikeExpr(attributes.map(CodeSee.funcExp(a => {
	      let _stackFrameId20 = CodeSee.stackFrameEnter({
	        functionName: "expressions \u203A attributes.map callback",
	        filename: "riot|/src/core/component.js",
	        loc: "279:37-279:67"
	      });

	      try {
	        CodeSee.funcInputs([{
	          filename: "riot|/src/core/component.js",
	          loc: "279:37-279:38",
	          name: "a",
	          uid: "8403,8404",
	          value: a
	        }], _stackFrameId20);
	        CodeSee.traceLine("riot|/src/core/component.js", {
	          loc: "279:42-279:67",
	          uid: _stackFrameId20
	        });

	        const _returnValue20 = CodeSee.returnVal((CodeSee.aboutToCall(_stackFrameId20, "279:42-279:67"), CodeSee.callLikeExpr(create$4(CodeSee.funcArg(node, _stackFrameId20, "279:59-279:63", "8341,8345"), CodeSee.funcArg(a, _stackFrameId20, "279:65-279:66", "8403,8404")), _stackFrameId20, "279:42-279:67", "createExpression")), _stackFrameId20, "279:42-279:67");

	        CodeSee.stackFrameExit(_stackFrameId20);
	        return _returnValue20;
	      } catch (e) {
	        CodeSee.error(e, _stackFrameId20);
	        throw e;
	      }
	    }, _stackFrameId19, "279:37-279:67")), _stackFrameId19, "279:22-279:68", "map"));
	    CodeSee.checkForMutations();
	    CodeSee.after({
	      writes: [{
	        filename: "riot|/src/core/component.js",
	        loc: "279:8-279:19",
	        name: "expressions",
	        uid: "8374,8385",
	        value: expressions
	      }]
	    }, _stackFrameId19);
	    CodeSee.traceLine("riot|/src/core/component.js", {
	      loc: "280:2-280:20",
	      uid: _stackFrameId19
	    });
	    CodeSee.before({
	      declares: [{
	        filename: "riot|/src/core/component.js",
	        loc: "280:8-280:15",
	        name: "binding",
	        uid: "8443,8450"
	      }]
	    }, _stackFrameId19);
	    const binding = {};
	    CodeSee.after({
	      writes: [{
	        filename: "riot|/src/core/component.js",
	        loc: "280:8-280:15",
	        name: "binding",
	        uid: "8443,8450",
	        value: binding
	      }]
	    }, _stackFrameId19);
	    CodeSee.traceLine("riot|/src/core/component.js", {
	      loc: "282:2-289:4",
	      uid: _stackFrameId19
	    });

	    const _returnValue24 = CodeSee.returnVal((CodeSee.aboutToCall(_stackFrameId19, "282:9-289:4"), CodeSee.callLikeExpr(Object.assign(CodeSee.funcArg(binding, _stackFrameId19, "282:23-282:30", "8443,8450"), CodeSee.expr(Object.assign({
	      expressions: CodeSee.read(expressions, _stackFrameId19, "283:4-283:15", "8374,8385")
	    }, (CodeSee.aboutToCall(_stackFrameId19, "284:7-288:6"), CodeSee.callLikeExpr(createCoreAPIMethods(CodeSee.funcExp(method => {
	      let _stackFrameId21 = CodeSee.stackFrameEnter({
	        functionName: "createCoreAPIMethods callback",
	        filename: "riot|/src/core/component.js",
	        loc: "284:28-288:5"
	      });

	      try {
	        CodeSee.funcInputs([{
	          name: "this",
	          value: this
	        }, {
	          filename: "riot|/src/core/component.js",
	          loc: "284:28-284:34",
	          name: "method",
	          uid: "8536,8542",
	          value: method
	        }], _stackFrameId21);
	        CodeSee.traceLine("riot|/src/core/component.js", {
	          loc: "284:38-288:5",
	          uid: _stackFrameId21
	        });

	        const _returnValue23 = CodeSee.returnVal(CodeSee.funcExp(scope => {
	          let _stackFrameId22 = CodeSee.stackFrameEnter({
	            functionName: "<anonymous function>",
	            filename: "riot|/src/core/component.js",
	            loc: "284:38-288:5"
	          });

	          try {
	            CodeSee.funcInputs([{
	              name: "this",
	              value: this
	            }, {
	              filename: "riot|/src/core/component.js",
	              loc: "284:38-284:43",
	              name: "scope",
	              uid: "8546,8551",
	              value: scope
	            }], _stackFrameId22);
	            CodeSee.traceLine("riot|/src/core/component.js", {
	              loc: "285:6-285:48",
	              uid: _stackFrameId22
	            });
	            CodeSee.aboutToCall(_stackFrameId22, "285:6-285:48"), CodeSee.callLikeExpr(expressions.forEach(CodeSee.funcExp(e => {
	              let _stackFrameId23 = CodeSee.stackFrameEnter({
	                functionName: "expressions.forEach callback",
	                filename: "riot|/src/core/component.js",
	                loc: "285:26-285:47"
	              });

	              try {
	                CodeSee.funcInputs([{
	                  name: "this",
	                  value: this
	                }, {
	                  filename: "riot|/src/core/component.js",
	                  loc: "285:26-285:27",
	                  name: "e",
	                  uid: "8583,8584",
	                  value: e
	                }], _stackFrameId23);
	                CodeSee.traceLine("riot|/src/core/component.js", {
	                  loc: "285:31-285:47",
	                  uid: _stackFrameId23
	                });

	                const _returnValue21 = CodeSee.returnVal((CodeSee.aboutToCall(_stackFrameId23, "285:31-285:47"), CodeSee.callLikeExpr(e[CodeSee.read(method, _stackFrameId23, "285:33-285:39", "8536,8542")](CodeSee.funcArg(scope, _stackFrameId23, "285:41-285:46", "8546,8551")), _stackFrameId23, "285:31-285:47", undefined)), _stackFrameId23, "285:31-285:47");

	                CodeSee.stackFrameExit(_stackFrameId23);
	                return _returnValue21;
	              } catch (e) {
	                CodeSee.error(e, _stackFrameId23);
	                throw e;
	              }
	            }, _stackFrameId22, "285:26-285:47")), _stackFrameId22, "285:6-285:48", "forEach");
	            CodeSee.checkForMutations();
	            CodeSee.traceLine("riot|/src/core/component.js", {
	              loc: "287:6-287:20",
	              uid: _stackFrameId22
	            });

	            const _returnValue22 = CodeSee.returnVal(binding, _stackFrameId22, "287:13-287:20", "8443,8450");

	            CodeSee.stackFrameExit(_stackFrameId22);
	            return _returnValue22;
	          } catch (e) {
	            CodeSee.error(e, _stackFrameId22);
	            throw e;
	          }
	        }, _stackFrameId21, "284:38-288:5"), _stackFrameId21, "284:38-288:5");

	        CodeSee.stackFrameExit(_stackFrameId21);
	        return _returnValue23;
	      } catch (e) {
	        CodeSee.error(e, _stackFrameId21);
	        throw e;
	      }
	    }, _stackFrameId19, "284:28-288:5")), _stackFrameId19, "284:7-288:6", "createCoreAPIMethods"))), _stackFrameId19, "282:32-289:3")), _stackFrameId19, "282:9-289:4", "assign")), _stackFrameId19, "282:9-289:4");

	    CodeSee.stackFrameExit(_stackFrameId19);
	    return _returnValue24;
	  } catch (e) {
	    CodeSee.error(e, _stackFrameId19);
	    throw e;
	  }
	}
	/**
	 * Create the subcomponents that can be included inside a tag in runtime
	 * @param   {Object} components - components imported in runtime
	 * @returns {Object} all the components transformed into Riot.Component factory functions
	 */


	function createSubcomponents(components) {
	  let _stackFrameId24 = CodeSee.stackFrameEnter({
	    functionName: "createSubcomponents",
	    filename: "riot|/src/core/component.js",
	    loc: "297:0-303:1"
	  });

	  try {
	    if (components === void 0) {
	      components = {};
	    }

	    CodeSee.funcInputs([{
	      filename: "riot|/src/core/component.js",
	      loc: "297:29-297:39",
	      name: "components",
	      uid: "8908,8918",
	      value: components
	    }], _stackFrameId24);
	    CodeSee.traceLine("riot|/src/core/component.js", {
	      loc: "298:2-302:10",
	      uid: _stackFrameId24
	    });

	    const _returnValue26 = CodeSee.returnVal((CodeSee.aboutToCall(_stackFrameId24, "298:9-302:10"), CodeSee.callLikeExpr((CodeSee.aboutToCall(_stackFrameId24, "298:9-298:49"), CodeSee.callLikeExpr(Object.entries((CodeSee.aboutToCall(_stackFrameId24, "298:24-298:48"), CodeSee.callLikeExpr(callOrAssign(CodeSee.funcArg(components, _stackFrameId24, "298:37-298:47", "8908,8918")), _stackFrameId24, "298:24-298:48", "callOrAssign"))), _stackFrameId24, "298:9-298:49", "entries")).reduce(CodeSee.funcExp((acc, _ref4) => {
	      let _stackFrameId25 = CodeSee.stackFrameEnter({
	        functionName: "Object.entries().reduce callback",
	        filename: "riot|/src/core/component.js",
	        loc: "299:12-302:5"
	      });

	      try {
	        let [key, value] = _ref4;
	        CodeSee.funcInputs([{
	          filename: "riot|/src/core/component.js",
	          loc: "299:13-299:16",
	          name: "acc",
	          uid: "8990,8993",
	          value: acc
	        }, {
	          filename: "riot|/src/core/component.js",
	          loc: "299:19-299:22",
	          name: "key",
	          uid: "8996,8999",
	          value: key
	        }, {
	          filename: "riot|/src/core/component.js",
	          loc: "299:24-299:29",
	          name: "value",
	          uid: "9001,9006",
	          value: value
	        }], _stackFrameId25);

	        const _prop = (CodeSee.aboutToCall(_stackFrameId25, "300:10-300:30"), CodeSee.callLikeExpr(camelToDashCase(CodeSee.funcArg(key, _stackFrameId25, "300:26-300:29", "8996,8999")), _stackFrameId25, "300:10-300:30", "camelToDashCase"));

	        CodeSee.checkForMutations();
	        CodeSee.traceLine("riot|/src/core/component.js", {
	          loc: "300:6-300:56",
	          uid: _stackFrameId25
	        });
	        CodeSee.before({
	          writes: [{
	            filename: "riot|/src/core/component.js",
	            loc: "300:6-300:31",
	            name: ["acc", _prop],
	            uid: "8990,8993",
	            value: acc
	          }]
	        }, _stackFrameId25);
	        acc[_prop] = (CodeSee.aboutToCall(_stackFrameId25, "300:34-300:56"), CodeSee.callLikeExpr(createComponent(CodeSee.funcArg(value, _stackFrameId25, "300:50-300:55", "9001,9006")), _stackFrameId25, "300:34-300:56", "createComponent"));
	        CodeSee.checkForMutations();
	        CodeSee.after({
	          writes: [{
	            filename: "riot|/src/core/component.js",
	            loc: "300:6-300:31",
	            name: ["acc", _prop],
	            uid: "8990,8993",
	            value: acc
	          }]
	        }, _stackFrameId25);
	        CodeSee.traceLine("riot|/src/core/component.js", {
	          loc: "301:6-301:16",
	          uid: _stackFrameId25
	        });

	        const _returnValue25 = CodeSee.returnVal(acc, _stackFrameId25, "301:13-301:16", "8990,8993");

	        CodeSee.stackFrameExit(_stackFrameId25);
	        return _returnValue25;
	      } catch (e) {
	        CodeSee.error(e, _stackFrameId25);
	        throw e;
	      }
	    }, _stackFrameId24, "299:12-302:5"), {}), _stackFrameId24, "298:9-302:10", "reduce")), _stackFrameId24, "298:9-302:10");

	    CodeSee.stackFrameExit(_stackFrameId24);
	    return _returnValue26;
	  } catch (e) {
	    CodeSee.error(e, _stackFrameId24);
	    throw e;
	  }
	}
	/**
	 * Run the component instance through all the plugins set by the user
	 * @param   {Object} component - component instance
	 * @returns {Object} the component enhanced by the plugins
	 */


	function runPlugins(component) {
	  let _stackFrameId26 = CodeSee.stackFrameEnter({
	    functionName: "runPlugins",
	    filename: "riot|/src/core/component.js",
	    loc: "310:0-312:1"
	  });

	  try {
	    CodeSee.funcInputs([{
	      filename: "riot|/src/core/component.js",
	      loc: "310:20-310:29",
	      name: "component",
	      uid: "9311,9320",
	      value: component
	    }], _stackFrameId26);
	    CodeSee.traceLine("riot|/src/core/component.js", {
	      loc: "311:2-311:66",
	      uid: _stackFrameId26
	    });

	    const _returnValue28 = CodeSee.returnVal((CodeSee.aboutToCall(_stackFrameId26, "311:9-311:66"), CodeSee.callLikeExpr(CodeSee.expr([...CodeSee.read(PLUGINS_SET$1, _stackFrameId26, "311:13-311:24", "332,343")], _stackFrameId26, "311:9-311:25").reduce(CodeSee.funcExp((c, fn) => {
	      let _stackFrameId27 = CodeSee.stackFrameEnter({
	        functionName: "reduce callback",
	        filename: "riot|/src/core/component.js",
	        loc: "311:33-311:54"
	      });

	      try {
	        CodeSee.funcInputs([{
	          filename: "riot|/src/core/component.js",
	          loc: "311:34-311:35",
	          name: "c",
	          uid: "9358,9359",
	          value: c
	        }, {
	          filename: "riot|/src/core/component.js",
	          loc: "311:37-311:39",
	          name: "fn",
	          uid: "9361,9363",
	          value: fn
	        }], _stackFrameId27);
	        CodeSee.traceLine("riot|/src/core/component.js", {
	          loc: "311:44-311:54",
	          uid: _stackFrameId27
	        });

	        const _returnValue27 = CodeSee.returnVal((CodeSee.aboutToCall(_stackFrameId27, "311:44-311:49"), CodeSee.callLikeExpr(fn(CodeSee.funcArg(c, _stackFrameId27, "311:47-311:48", "9358,9359")), _stackFrameId27, "311:44-311:49", "fn")) || CodeSee.read(c, _stackFrameId27, "311:53-311:54", "9358,9359"), _stackFrameId27, "311:44-311:54");

	        CodeSee.stackFrameExit(_stackFrameId27);
	        return _returnValue27;
	      } catch (e) {
	        CodeSee.error(e, _stackFrameId27);
	        throw e;
	      }
	    }, _stackFrameId26, "311:33-311:54"), CodeSee.funcArg(component, _stackFrameId26, "311:56-311:65", "9311,9320")), _stackFrameId26, "311:9-311:66", "reduce")), _stackFrameId26, "311:9-311:66");

	    CodeSee.stackFrameExit(_stackFrameId26);
	    return _returnValue28;
	  } catch (e) {
	    CodeSee.error(e, _stackFrameId26);
	    throw e;
	  }
	}
	/**
	 * Compute the component current state merging it with its previous state
	 * @param   {Object} oldState - previous state object
	 * @param   {Object} newState - new state givent to the `update` call
	 * @returns {Object} new object state
	 */


	function computeState(oldState, newState) {
	  let _stackFrameId28 = CodeSee.stackFrameEnter({
	    functionName: "computeState",
	    filename: "riot|/src/core/component.js",
	    loc: "320:0-325:1"
	  });

	  try {
	    CodeSee.funcInputs([{
	      filename: "riot|/src/core/component.js",
	      loc: "320:22-320:30",
	      name: "oldState",
	      uid: "9660,9668",
	      value: oldState
	    }, {
	      filename: "riot|/src/core/component.js",
	      loc: "320:32-320:40",
	      name: "newState",
	      uid: "9670,9678",
	      value: newState
	    }], _stackFrameId28);
	    CodeSee.traceLine("riot|/src/core/component.js", {
	      loc: "321:2-324:3",
	      uid: _stackFrameId28
	    });

	    const _returnValue29 = CodeSee.returnVal(Object.assign({}, CodeSee.read(oldState, _stackFrameId28, "322:7-322:15", "9660,9668"), (CodeSee.aboutToCall(_stackFrameId28, "323:7-323:29"), CodeSee.callLikeExpr(callOrAssign(CodeSee.funcArg(newState, _stackFrameId28, "323:20-323:28", "9670,9678")), _stackFrameId28, "323:7-323:29", "callOrAssign"))), _stackFrameId28, "321:9-324:3");

	    CodeSee.stackFrameExit(_stackFrameId28);
	    return _returnValue29;
	  } catch (e) {
	    CodeSee.error(e, _stackFrameId28);
	    throw e;
	  }
	}
	/**
	 * Add eventually the "is" attribute to link this DOM node to its css
	 * @param {HTMLElement} element - target root node
	 * @param {string} name - name of the component mounted
	 * @returns {undefined} it's a void function
	 */


	function addCssHook(element, name) {
	  let _stackFrameId29 = CodeSee.stackFrameEnter({
	    functionName: "addCssHook",
	    filename: "riot|/src/core/component.js",
	    loc: "333:0-337:1"
	  });

	  try {
	    CodeSee.funcInputs([{
	      filename: "riot|/src/core/component.js",
	      loc: "333:20-333:27",
	      name: "element",
	      uid: "9997,10004",
	      value: element
	    }, {
	      filename: "riot|/src/core/component.js",
	      loc: "333:29-333:33",
	      name: "name",
	      uid: "10006,10010",
	      value: name
	    }], _stackFrameId29);
	    CodeSee.traceLine("riot|/src/core/component.js", {
	      loc: "334:2-334:31",
	      uid: _stackFrameId29
	    });

	    if (CodeSee.test((CodeSee.aboutToCall(_stackFrameId29, "334:6-334:22"), CodeSee.callLikeExpr(getName(CodeSee.funcArg(element, _stackFrameId29, "334:14-334:21", "9997,10004")), _stackFrameId29, "334:6-334:22", "getName")) !== CodeSee.read(name, _stackFrameId29, "334:27-334:31", "10006,10010"), _stackFrameId29, "334:6-334:31")) {
	      CodeSee.traceLine("riot|/src/core/component.js", {
	        loc: "335:4-335:40",
	        uid: _stackFrameId29
	      });
	      CodeSee.aboutToCall(_stackFrameId29, "335:4-335:40"), CodeSee.callLikeExpr(set(CodeSee.funcArg(element, _stackFrameId29, "335:12-335:19", "9997,10004"), CodeSee.funcArg(IS_DIRECTIVE, _stackFrameId29, "335:21-335:33", "129,141"), CodeSee.funcArg(name, _stackFrameId29, "335:35-335:39", "10006,10010")), _stackFrameId29, "335:4-335:40", "setAttr");
	      CodeSee.checkForMutations();
	    }

	    CodeSee.checkForMutations();
	    CodeSee.stackFrameExit(_stackFrameId29);
	  } catch (e) {
	    CodeSee.error(e, _stackFrameId29);
	    throw e;
	  }
	}
	/**
	 * Component creation factory function that will enhance the user provided API
	 * @param   {Object} component - a component implementation previously defined
	 * @param   {Array} options.slots - component slots generated via riot compiler
	 * @param   {Array} options.attributes - attribute expressions generated via riot compiler
	 * @returns {Riot.Component} a riot component instance
	 */


	CodeSee.traceLine("riot|/src/core/component.js", {
	  loc: "346:0-425:1",
	  uid: _stackFrameId$1
	});
	function enhanceComponentAPI(component, _ref5) {
	  let _stackFrameId30 = CodeSee.stackFrameEnter({
	    functionName: "enhanceComponentAPI",
	    filename: "riot|/src/core/component.js",
	    loc: "346:7-425:1"
	  });

	  try {
	    let {
	      slots,
	      attributes,
	      props
	    } = _ref5;
	    CodeSee.funcInputs([{
	      filename: "riot|/src/core/component.js",
	      loc: "346:36-346:45",
	      name: "component",
	      uid: "10525,10534",
	      value: component
	    }, {
	      filename: "riot|/src/core/component.js",
	      loc: "346:48-346:53",
	      name: "slots",
	      uid: "10537,10542",
	      value: slots
	    }, {
	      filename: "riot|/src/core/component.js",
	      loc: "346:55-346:65",
	      name: "attributes",
	      uid: "10544,10554",
	      value: attributes
	    }, {
	      filename: "riot|/src/core/component.js",
	      loc: "346:67-346:72",
	      name: "props",
	      uid: "10556,10561",
	      value: props
	    }], _stackFrameId30);
	    CodeSee.traceLine("riot|/src/core/component.js", {
	      loc: "347:2-424:3",
	      uid: _stackFrameId30
	    });

	    const _returnValue34 = CodeSee.returnVal((CodeSee.aboutToCall(_stackFrameId30, "347:9-424:3"), CodeSee.callLikeExpr(autobindMethods((CodeSee.aboutToCall(_stackFrameId30, "348:4-422:5"), CodeSee.callLikeExpr(runPlugins((CodeSee.aboutToCall(_stackFrameId30, "349:6-421:8"), CodeSee.callLikeExpr(defineProperties(CodeSee.expr((CodeSee.aboutToCall(_stackFrameId30, "349:23-349:42"), CodeSee.callLikeExpr(isObject(CodeSee.funcArg(component, _stackFrameId30, "349:32-349:41", "10525,10534")), _stackFrameId30, "349:23-349:42", "isObject")) ? (CodeSee.aboutToCall(_stackFrameId30, "349:45-349:69"), CodeSee.callLikeExpr(Object.create(CodeSee.funcArg(component, _stackFrameId30, "349:59-349:68", "10525,10534")), _stackFrameId30, "349:45-349:69", "create")) : CodeSee.read(component, _stackFrameId30, "349:72-349:81", "10525,10534"), _stackFrameId30, "349:23-349:81"), CodeSee.expr({
	      mount(element, state, parentScope) {
	        let _stackFrameId31 = CodeSee.stackFrameEnter({
	          functionName: "mount",
	          filename: "riot|/src/core/component.js",
	          loc: "350:8-379:9"
	        });

	        try {
	          if (state === void 0) {
	            state = {};
	          }

	          CodeSee.funcInputs([{
	            name: "this",
	            value: this
	          }, {
	            filename: "riot|/src/core/component.js",
	            loc: "350:14-350:21",
	            name: "element",
	            uid: "10707,10714",
	            value: element
	          }, {
	            filename: "riot|/src/core/component.js",
	            loc: "350:23-350:28",
	            name: "state",
	            uid: "10716,10721",
	            value: state
	          }, {
	            filename: "riot|/src/core/component.js",
	            loc: "350:35-350:46",
	            name: "parentScope",
	            uid: "10728,10739",
	            value: parentScope
	          }], _stackFrameId31);
	          CodeSee.traceLine("riot|/src/core/component.js", {
	            loc: "351:10-351:47",
	            uid: _stackFrameId31
	          });
	          CodeSee.before({
	            writes: [{
	              filename: "riot|/src/core/component.js",
	              loc: "351:10-351:33",
	              name: ["this", PARENT_KEY_SYMBOL],
	              uid: "?,?",
	              value: this
	            }]
	          }, _stackFrameId31);
	          this[PARENT_KEY_SYMBOL] = CodeSee.read(parentScope, _stackFrameId31, "351:36-351:47", "10728,10739");
	          CodeSee.after({
	            writes: [{
	              filename: "riot|/src/core/component.js",
	              loc: "351:10-351:33",
	              name: ["this", PARENT_KEY_SYMBOL],
	              uid: "?,?",
	              value: this
	            }]
	          }, _stackFrameId31);
	          CodeSee.traceLine("riot|/src/core/component.js", {
	            loc: "352:10-352:103",
	            uid: _stackFrameId31
	          });
	          CodeSee.before({
	            writes: [{
	              filename: "riot|/src/core/component.js",
	              loc: "352:10-352:37",
	              name: ["this", ATTRIBUTES_KEY_SYMBOL],
	              uid: "?,?",
	              value: this
	            }]
	          }, _stackFrameId31);
	          this[ATTRIBUTES_KEY_SYMBOL] = (CodeSee.aboutToCall(_stackFrameId31, "352:40-352:103"), CodeSee.callLikeExpr((CodeSee.aboutToCall(_stackFrameId31, "352:40-352:84"), CodeSee.callLikeExpr(createAttributeBindings(CodeSee.funcArg(element, _stackFrameId31, "352:64-352:71", "10707,10714"), CodeSee.funcArg(attributes, _stackFrameId31, "352:73-352:83", "10544,10554")), _stackFrameId31, "352:40-352:84", "createAttributeBindings")).mount(CodeSee.funcArg(parentScope, _stackFrameId31, "352:91-352:102", "10728,10739")), _stackFrameId31, "352:40-352:103", "mount"));
	          CodeSee.checkForMutations();
	          CodeSee.after({
	            writes: [{
	              filename: "riot|/src/core/component.js",
	              loc: "352:10-352:37",
	              name: ["this", ATTRIBUTES_KEY_SYMBOL],
	              uid: "?,?",
	              value: this
	            }]
	          }, _stackFrameId31);
	          CodeSee.traceLine("riot|/src/core/component.js", {
	            loc: "354:10-357:13",
	            uid: _stackFrameId31
	          });
	          CodeSee.aboutToCall(_stackFrameId31, "354:10-357:13"), CodeSee.callLikeExpr(defineProperty(CodeSee.funcArg(this, _stackFrameId31, "354:25-354:29"), CodeSee.funcArg(PROPS_KEY, _stackFrameId31, "354:31-354:40", "347,356"), (CodeSee.aboutToCall(_stackFrameId31, "354:42-357:12"), CodeSee.callLikeExpr(Object.freeze(CodeSee.expr(Object.assign({}, (CodeSee.aboutToCall(_stackFrameId31, "355:15-355:51"), CodeSee.callLikeExpr(evaluateInitialProps(CodeSee.funcArg(element, _stackFrameId31, "355:36-355:43", "10707,10714"), CodeSee.funcArg(props, _stackFrameId31, "355:45-355:50", "10556,10561")), _stackFrameId31, "355:15-355:51", "evaluateInitialProps")), (CodeSee.aboutToCall(_stackFrameId31, "356:15-356:84"), CodeSee.callLikeExpr(evaluateAttributeExpressions(CodeSee.funcArg(CodeSee.getProp(CodeSee.getProp(this, _stackFrameId31, "356:44-356:48")[CodeSee.read(ATTRIBUTES_KEY_SYMBOL, _stackFrameId31, "356:49-356:70", "11,32")], _stackFrameId31, "356:44-356:71").expressions, _stackFrameId31, "356:44-356:83")), _stackFrameId31, "356:15-356:84", "evaluateAttributeExpressions"))), _stackFrameId31, "354:56-357:11")), _stackFrameId31, "354:42-357:12", "freeze"))), _stackFrameId31, "354:10-357:13", "defineProperty");
	          CodeSee.checkForMutations();
	          CodeSee.traceLine("riot|/src/core/component.js", {
	            loc: "359:10-359:64",
	            uid: _stackFrameId31
	          });
	          CodeSee.before({
	            writes: [{
	              filename: "riot|/src/core/component.js",
	              loc: "359:10-359:25",
	              name: ["this", STATE_KEY],
	              uid: "?,?",
	              value: this
	            }]
	          }, _stackFrameId31);
	          this[STATE_KEY] = (CodeSee.aboutToCall(_stackFrameId31, "359:28-359:64"), CodeSee.callLikeExpr(computeState(CodeSee.funcArg(CodeSee.getProp(this, _stackFrameId31, "359:41-359:45")[CodeSee.read(STATE_KEY, _stackFrameId31, "359:46-359:55", "406,415")], _stackFrameId31, "359:41-359:56"), CodeSee.funcArg(state, _stackFrameId31, "359:58-359:63", "10716,10721")), _stackFrameId31, "359:28-359:64", "computeState"));
	          CodeSee.checkForMutations();
	          CodeSee.after({
	            writes: [{
	              filename: "riot|/src/core/component.js",
	              loc: "359:10-359:25",
	              name: ["this", STATE_KEY],
	              uid: "?,?",
	              value: this
	            }]
	          }, _stackFrameId31);
	          CodeSee.traceLine("riot|/src/core/component.js", {
	            loc: "360:10-360:78",
	            uid: _stackFrameId31
	          });
	          CodeSee.before({
	            writes: [{
	              filename: "riot|/src/core/component.js",
	              loc: "360:10-360:35",
	              name: ["this", TEMPLATE_KEY_SYMBOL],
	              uid: "?,?",
	              value: this
	            }]
	          }, _stackFrameId31);
	          this[TEMPLATE_KEY_SYMBOL] = (CodeSee.aboutToCall(_stackFrameId31, "360:38-360:78"), CodeSee.callLikeExpr((CodeSee.aboutToCall(_stackFrameId31, "360:38-360:70"), CodeSee.callLikeExpr(CodeSee.getProp(this, _stackFrameId31, "360:38-360:42").template.createDOM(CodeSee.funcArg(element, _stackFrameId31, "360:62-360:69", "10707,10714")), _stackFrameId31, "360:38-360:70", "createDOM")).clone(), _stackFrameId31, "360:38-360:78", "clone")); // link this object to the DOM node

	          CodeSee.checkForMutations();
	          CodeSee.after({
	            writes: [{
	              filename: "riot|/src/core/component.js",
	              loc: "360:10-360:35",
	              name: ["this", TEMPLATE_KEY_SYMBOL],
	              uid: "?,?",
	              value: this
	            }]
	          }, _stackFrameId31);
	          CodeSee.traceLine("riot|/src/core/component.js", {
	            loc: "363:10-363:53",
	            uid: _stackFrameId31
	          });
	          CodeSee.aboutToCall(_stackFrameId31, "363:10-363:53"), CodeSee.callLikeExpr(bindDOMNodeToComponentObject(CodeSee.funcArg(element, _stackFrameId31, "363:39-363:46", "10707,10714"), CodeSee.funcArg(this, _stackFrameId31, "363:48-363:52")), _stackFrameId31, "363:10-363:53", "bindDOMNodeToComponentObject"); // add eventually the 'is' attribute

	          CodeSee.checkForMutations();
	          CodeSee.traceLine("riot|/src/core/component.js", {
	            loc: "365:10-365:63",
	            uid: _stackFrameId31
	          });
	          CodeSee.expr(CodeSee.read(CodeSee.getProp(component, _stackFrameId31, "365:10-365:19", "10525,10534").name, _stackFrameId31, "365:10-365:24") && (CodeSee.aboutToCall(_stackFrameId31, "365:28-365:63"), CodeSee.callLikeExpr(addCssHook(CodeSee.funcArg(element, _stackFrameId31, "365:39-365:46", "10707,10714"), CodeSee.funcArg(CodeSee.getProp(component, _stackFrameId31, "365:48-365:57", "10525,10534").name, _stackFrameId31, "365:48-365:62")), _stackFrameId31, "365:28-365:63", "addCssHook")), _stackFrameId31, "365:10-365:63"); // define the root element

	          CodeSee.checkForMutations();
	          CodeSee.traceLine("riot|/src/core/component.js", {
	            loc: "368:10-368:49",
	            uid: _stackFrameId31
	          });
	          CodeSee.aboutToCall(_stackFrameId31, "368:10-368:49"), CodeSee.callLikeExpr(defineProperty(CodeSee.funcArg(this, _stackFrameId31, "368:25-368:29"), CodeSee.funcArg(ROOT_KEY, _stackFrameId31, "368:31-368:39", "360,368"), CodeSee.funcArg(element, _stackFrameId31, "368:41-368:48", "10707,10714")), _stackFrameId31, "368:10-368:49", "defineProperty"); // define the slots array

	          CodeSee.checkForMutations();
	          CodeSee.traceLine("riot|/src/core/component.js", {
	            loc: "370:10-370:48",
	            uid: _stackFrameId31
	          });
	          CodeSee.aboutToCall(_stackFrameId31, "370:10-370:48"), CodeSee.callLikeExpr(defineProperty(CodeSee.funcArg(this, _stackFrameId31, "370:25-370:29"), CodeSee.funcArg(SLOTS_KEY, _stackFrameId31, "370:31-370:40", "393,402"), CodeSee.funcArg(slots, _stackFrameId31, "370:42-370:47", "10537,10542")), _stackFrameId31, "370:10-370:48", "defineProperty"); // before mount lifecycle event

	          CodeSee.checkForMutations();
	          CodeSee.traceLine("riot|/src/core/component.js", {
	            loc: "373:10-373:69",
	            uid: _stackFrameId31
	          });
	          CodeSee.aboutToCall(_stackFrameId31, "373:10-373:69"), CodeSee.callLikeExpr(this[CodeSee.read(ON_BEFORE_MOUNT_KEY, _stackFrameId31, "373:15-373:34", "183,202")](CodeSee.funcArg(CodeSee.getProp(this, _stackFrameId31, "373:36-373:40")[CodeSee.read(PROPS_KEY, _stackFrameId31, "373:41-373:50", "347,356")], _stackFrameId31, "373:36-373:51"), CodeSee.funcArg(CodeSee.getProp(this, _stackFrameId31, "373:53-373:57")[CodeSee.read(STATE_KEY, _stackFrameId31, "373:58-373:67", "406,415")], _stackFrameId31, "373:53-373:68")), _stackFrameId31, "373:10-373:69", undefined); // mount the template

	          CodeSee.checkForMutations();
	          CodeSee.traceLine("riot|/src/core/component.js", {
	            loc: "375:10-375:69",
	            uid: _stackFrameId31
	          });
	          CodeSee.aboutToCall(_stackFrameId31, "375:10-375:69"), CodeSee.callLikeExpr(CodeSee.getProp(this, _stackFrameId31, "375:10-375:14")[CodeSee.read(TEMPLATE_KEY_SYMBOL, _stackFrameId31, "375:15-375:34", "419,438")].mount(CodeSee.funcArg(element, _stackFrameId31, "375:42-375:49", "10707,10714"), CodeSee.funcArg(this, _stackFrameId31, "375:51-375:55"), CodeSee.funcArg(parentScope, _stackFrameId31, "375:57-375:68", "10728,10739")), _stackFrameId31, "375:10-375:69", "mount");
	          CodeSee.checkForMutations();
	          CodeSee.traceLine("riot|/src/core/component.js", {
	            loc: "376:10-376:64",
	            uid: _stackFrameId31
	          });
	          CodeSee.aboutToCall(_stackFrameId31, "376:10-376:64"), CodeSee.callLikeExpr(this[CodeSee.read(ON_MOUNTED_KEY, _stackFrameId31, "376:15-376:29", "255,269")](CodeSee.funcArg(CodeSee.getProp(this, _stackFrameId31, "376:31-376:35")[CodeSee.read(PROPS_KEY, _stackFrameId31, "376:36-376:45", "347,356")], _stackFrameId31, "376:31-376:46"), CodeSee.funcArg(CodeSee.getProp(this, _stackFrameId31, "376:48-376:52")[CodeSee.read(STATE_KEY, _stackFrameId31, "376:53-376:62", "406,415")], _stackFrameId31, "376:48-376:63")), _stackFrameId31, "376:10-376:64", undefined);
	          CodeSee.checkForMutations();
	          CodeSee.traceLine("riot|/src/core/component.js", {
	            loc: "378:10-378:21",
	            uid: _stackFrameId31
	          });

	          const _returnValue30 = CodeSee.returnVal(this, _stackFrameId31, "378:17-378:21");

	          CodeSee.stackFrameExit(_stackFrameId31);
	          return _returnValue30;
	        } catch (e) {
	          CodeSee.error(e, _stackFrameId31);
	          throw e;
	        }
	      },

	      update(state, parentScope) {
	        let _stackFrameId32 = CodeSee.stackFrameEnter({
	          functionName: "update",
	          filename: "riot|/src/core/component.js",
	          loc: "380:8-410:9"
	        });

	        try {
	          if (state === void 0) {
	            state = {};
	          }

	          CodeSee.funcInputs([{
	            name: "this",
	            value: this
	          }, {
	            filename: "riot|/src/core/component.js",
	            loc: "380:15-380:20",
	            name: "state",
	            uid: "11965,11970",
	            value: state
	          }, {
	            filename: "riot|/src/core/component.js",
	            loc: "380:27-380:38",
	            name: "parentScope",
	            uid: "11977,11988",
	            value: parentScope
	          }], _stackFrameId32);
	          CodeSee.traceLine("riot|/src/core/component.js", {
	            loc: "381:10-381:25",
	            uid: _stackFrameId32
	          });

	          if (CodeSee.test(parentScope, _stackFrameId32, "381:14-381:25", "11977,11988")) {
	            CodeSee.traceLine("riot|/src/core/component.js", {
	              loc: "382:12-382:49",
	              uid: _stackFrameId32
	            });
	            CodeSee.before({
	              writes: [{
	                filename: "riot|/src/core/component.js",
	                loc: "382:12-382:35",
	                name: ["this", PARENT_KEY_SYMBOL],
	                uid: "?,?",
	                value: this
	              }]
	            }, _stackFrameId32);
	            this[PARENT_KEY_SYMBOL] = CodeSee.read(parentScope, _stackFrameId32, "382:38-382:49", "11977,11988");
	            CodeSee.after({
	              writes: [{
	                filename: "riot|/src/core/component.js",
	                loc: "382:12-382:35",
	                name: ["this", PARENT_KEY_SYMBOL],
	                uid: "?,?",
	                value: this
	              }]
	            }, _stackFrameId32);
	            CodeSee.traceLine("riot|/src/core/component.js", {
	              loc: "383:12-383:59",
	              uid: _stackFrameId32
	            });
	            CodeSee.aboutToCall(_stackFrameId32, "383:12-383:59"), CodeSee.callLikeExpr(CodeSee.getProp(this, _stackFrameId32, "383:12-383:16")[CodeSee.read(ATTRIBUTES_KEY_SYMBOL, _stackFrameId32, "383:17-383:38", "11,32")].update(CodeSee.funcArg(parentScope, _stackFrameId32, "383:47-383:58", "11977,11988")), _stackFrameId32, "383:12-383:59", "update");
	            CodeSee.checkForMutations();
	          }

	          CodeSee.traceLine("riot|/src/core/component.js", {
	            loc: "386:10-386:96",
	            uid: _stackFrameId32
	          });
	          CodeSee.before({
	            declares: [{
	              filename: "riot|/src/core/component.js",
	              loc: "386:16-386:24",
	              name: "newProps",
	              uid: "12160,12168"
	            }]
	          }, _stackFrameId32);
	          const newProps = (CodeSee.aboutToCall(_stackFrameId32, "386:27-386:96"), CodeSee.callLikeExpr(evaluateAttributeExpressions(CodeSee.funcArg(CodeSee.getProp(CodeSee.getProp(this, _stackFrameId32, "386:56-386:60")[CodeSee.read(ATTRIBUTES_KEY_SYMBOL, _stackFrameId32, "386:61-386:82", "11,32")], _stackFrameId32, "386:56-386:83").expressions, _stackFrameId32, "386:56-386:95")), _stackFrameId32, "386:27-386:96", "evaluateAttributeExpressions"));
	          CodeSee.checkForMutations();
	          CodeSee.after({
	            writes: [{
	              filename: "riot|/src/core/component.js",
	              loc: "386:16-386:24",
	              name: "newProps",
	              uid: "12160,12168",
	              value: newProps
	            }]
	          }, _stackFrameId32);
	          CodeSee.traceLine("riot|/src/core/component.js", {
	            loc: "388:10-388:74",
	            uid: _stackFrameId32
	          });

	          if (CodeSee.test((CodeSee.aboutToCall(_stackFrameId32, "388:14-388:64"), CodeSee.callLikeExpr(this[CodeSee.read(SHOULD_UPDATE_KEY, _stackFrameId32, "388:19-388:36", "372,389")](CodeSee.funcArg(newProps, _stackFrameId32, "388:38-388:46", "12160,12168"), CodeSee.funcArg(CodeSee.getProp(this, _stackFrameId32, "388:48-388:52")[CodeSee.read(PROPS_KEY, _stackFrameId32, "388:53-388:62", "347,356")], _stackFrameId32, "388:48-388:63")), _stackFrameId32, "388:14-388:64", undefined)) === false, _stackFrameId32, "388:14-388:74")) {
	            CodeSee.traceLine("riot|/src/core/component.js", {
	              loc: "388:76-388:82",
	              uid: _stackFrameId32
	            });
	            CodeSee.stackFrameExit(_stackFrameId32);
	            return;
	          }

	          CodeSee.checkForMutations();
	          CodeSee.traceLine("riot|/src/core/component.js", {
	            loc: "390:10-393:13",
	            uid: _stackFrameId32
	          });
	          CodeSee.aboutToCall(_stackFrameId32, "390:10-393:13"), CodeSee.callLikeExpr(defineProperty(CodeSee.funcArg(this, _stackFrameId32, "390:25-390:29"), CodeSee.funcArg(PROPS_KEY, _stackFrameId32, "390:31-390:40", "347,356"), (CodeSee.aboutToCall(_stackFrameId32, "390:42-393:12"), CodeSee.callLikeExpr(Object.freeze(CodeSee.expr(Object.assign({}, CodeSee.read(CodeSee.getProp(this, _stackFrameId32, "391:15-391:19")[CodeSee.read(PROPS_KEY, _stackFrameId32, "391:20-391:29", "347,356")], _stackFrameId32, "391:15-391:30"), CodeSee.read(newProps, _stackFrameId32, "392:15-392:23", "12160,12168")), _stackFrameId32, "390:56-393:11")), _stackFrameId32, "390:42-393:12", "freeze"))), _stackFrameId32, "390:10-393:13", "defineProperty");
	          CodeSee.checkForMutations();
	          CodeSee.traceLine("riot|/src/core/component.js", {
	            loc: "395:10-395:64",
	            uid: _stackFrameId32
	          });
	          CodeSee.before({
	            writes: [{
	              filename: "riot|/src/core/component.js",
	              loc: "395:10-395:25",
	              name: ["this", STATE_KEY],
	              uid: "?,?",
	              value: this
	            }]
	          }, _stackFrameId32);
	          this[STATE_KEY] = (CodeSee.aboutToCall(_stackFrameId32, "395:28-395:64"), CodeSee.callLikeExpr(computeState(CodeSee.funcArg(CodeSee.getProp(this, _stackFrameId32, "395:41-395:45")[CodeSee.read(STATE_KEY, _stackFrameId32, "395:46-395:55", "406,415")], _stackFrameId32, "395:41-395:56"), CodeSee.funcArg(state, _stackFrameId32, "395:58-395:63", "11965,11970")), _stackFrameId32, "395:28-395:64", "computeState"));
	          CodeSee.checkForMutations();
	          CodeSee.after({
	            writes: [{
	              filename: "riot|/src/core/component.js",
	              loc: "395:10-395:25",
	              name: ["this", STATE_KEY],
	              uid: "?,?",
	              value: this
	            }]
	          }, _stackFrameId32);
	          CodeSee.traceLine("riot|/src/core/component.js", {
	            loc: "397:10-397:70",
	            uid: _stackFrameId32
	          });
	          CodeSee.aboutToCall(_stackFrameId32, "397:10-397:70"), CodeSee.callLikeExpr(this[CodeSee.read(ON_BEFORE_UPDATE_KEY, _stackFrameId32, "397:15-397:35", "231,251")](CodeSee.funcArg(CodeSee.getProp(this, _stackFrameId32, "397:37-397:41")[CodeSee.read(PROPS_KEY, _stackFrameId32, "397:42-397:51", "347,356")], _stackFrameId32, "397:37-397:52"), CodeSee.funcArg(CodeSee.getProp(this, _stackFrameId32, "397:54-397:58")[CodeSee.read(STATE_KEY, _stackFrameId32, "397:59-397:68", "406,415")], _stackFrameId32, "397:54-397:69")), _stackFrameId32, "397:10-397:70", undefined); // avoiding recursive updates
	          // see also https://github.com/riot/riot/issues/2895

	          CodeSee.checkForMutations();
	          CodeSee.traceLine("riot|/src/core/component.js", {
	            loc: "401:10-401:42",
	            uid: _stackFrameId32
	          });

	          if (CodeSee.test(!CodeSee.read(CodeSee.getProp(this, _stackFrameId32, "401:15-401:19")[CodeSee.read(IS_COMPONENT_UPDATING, _stackFrameId32, "401:20-401:41", "104,125")], _stackFrameId32, "401:15-401:42"), _stackFrameId32, "401:14-401:42")) {
	            CodeSee.traceLine("riot|/src/core/component.js", {
	              loc: "402:12-402:46",
	              uid: _stackFrameId32
	            });
	            CodeSee.before({
	              writes: [{
	                filename: "riot|/src/core/component.js",
	                loc: "402:12-402:39",
	                name: ["this", IS_COMPONENT_UPDATING],
	                uid: "?,?",
	                value: this
	              }]
	            }, _stackFrameId32);
	            this[IS_COMPONENT_UPDATING] = true;
	            CodeSee.after({
	              writes: [{
	                filename: "riot|/src/core/component.js",
	                loc: "402:12-402:39",
	                name: ["this", IS_COMPONENT_UPDATING],
	                uid: "?,?",
	                value: this
	              }]
	            }, _stackFrameId32);
	            CodeSee.traceLine("riot|/src/core/component.js", {
	              loc: "403:12-403:75",
	              uid: _stackFrameId32
	            });
	            CodeSee.aboutToCall(_stackFrameId32, "403:12-403:75"), CodeSee.callLikeExpr(CodeSee.getProp(this, _stackFrameId32, "403:12-403:16")[CodeSee.read(TEMPLATE_KEY_SYMBOL, _stackFrameId32, "403:17-403:36", "419,438")].update(CodeSee.funcArg(this, _stackFrameId32, "403:45-403:49"), CodeSee.funcArg(CodeSee.getProp(this, _stackFrameId32, "403:51-403:55")[CodeSee.read(PARENT_KEY_SYMBOL, _stackFrameId32, "403:56-403:73", "311,328")], _stackFrameId32, "403:51-403:74")), _stackFrameId32, "403:12-403:75", "update");
	            CodeSee.checkForMutations();
	          }

	          CodeSee.checkForMutations();
	          CodeSee.traceLine("riot|/src/core/component.js", {
	            loc: "406:10-406:64",
	            uid: _stackFrameId32
	          });
	          CodeSee.aboutToCall(_stackFrameId32, "406:10-406:64"), CodeSee.callLikeExpr(this[CodeSee.read(ON_UPDATED_KEY, _stackFrameId32, "406:15-406:29", "293,307")](CodeSee.funcArg(CodeSee.getProp(this, _stackFrameId32, "406:31-406:35")[CodeSee.read(PROPS_KEY, _stackFrameId32, "406:36-406:45", "347,356")], _stackFrameId32, "406:31-406:46"), CodeSee.funcArg(CodeSee.getProp(this, _stackFrameId32, "406:48-406:52")[CodeSee.read(STATE_KEY, _stackFrameId32, "406:53-406:62", "406,415")], _stackFrameId32, "406:48-406:63")), _stackFrameId32, "406:10-406:64", undefined);
	          CodeSee.checkForMutations();
	          CodeSee.traceLine("riot|/src/core/component.js", {
	            loc: "407:10-407:45",
	            uid: _stackFrameId32
	          });
	          CodeSee.before({
	            writes: [{
	              filename: "riot|/src/core/component.js",
	              loc: "407:10-407:37",
	              name: ["this", IS_COMPONENT_UPDATING],
	              uid: "?,?",
	              value: this
	            }]
	          }, _stackFrameId32);
	          this[IS_COMPONENT_UPDATING] = false;
	          CodeSee.after({
	            writes: [{
	              filename: "riot|/src/core/component.js",
	              loc: "407:10-407:37",
	              name: ["this", IS_COMPONENT_UPDATING],
	              uid: "?,?",
	              value: this
	            }]
	          }, _stackFrameId32);
	          CodeSee.traceLine("riot|/src/core/component.js", {
	            loc: "409:10-409:21",
	            uid: _stackFrameId32
	          });

	          const _returnValue31 = CodeSee.returnVal(this, _stackFrameId32, "409:17-409:21");

	          CodeSee.stackFrameExit(_stackFrameId32);
	          return _returnValue31;
	        } catch (e) {
	          CodeSee.error(e, _stackFrameId32);
	          throw e;
	        }
	      },

	      unmount(preserveRoot) {
	        let _stackFrameId33 = CodeSee.stackFrameEnter({
	          functionName: "unmount",
	          filename: "riot|/src/core/component.js",
	          loc: "411:8-420:9"
	        });

	        try {
	          CodeSee.funcInputs([{
	            name: "this",
	            value: this
	          }, {
	            filename: "riot|/src/core/component.js",
	            loc: "411:16-411:28",
	            name: "preserveRoot",
	            uid: "13039,13051",
	            value: preserveRoot
	          }], _stackFrameId33);
	          CodeSee.traceLine("riot|/src/core/component.js", {
	            loc: "412:10-412:71",
	            uid: _stackFrameId33
	          });
	          CodeSee.aboutToCall(_stackFrameId33, "412:10-412:71"), CodeSee.callLikeExpr(this[CodeSee.read(ON_BEFORE_UNMOUNT_KEY, _stackFrameId33, "412:15-412:36", "206,227")](CodeSee.funcArg(CodeSee.getProp(this, _stackFrameId33, "412:38-412:42")[CodeSee.read(PROPS_KEY, _stackFrameId33, "412:43-412:52", "347,356")], _stackFrameId33, "412:38-412:53"), CodeSee.funcArg(CodeSee.getProp(this, _stackFrameId33, "412:55-412:59")[CodeSee.read(STATE_KEY, _stackFrameId33, "412:60-412:69", "406,415")], _stackFrameId33, "412:55-412:70")), _stackFrameId33, "412:10-412:71", undefined);
	          CodeSee.checkForMutations();
	          CodeSee.traceLine("riot|/src/core/component.js", {
	            loc: "413:10-413:47",
	            uid: _stackFrameId33
	          });
	          CodeSee.aboutToCall(_stackFrameId33, "413:10-413:47"), CodeSee.callLikeExpr(CodeSee.getProp(this, _stackFrameId33, "413:10-413:14")[CodeSee.read(ATTRIBUTES_KEY_SYMBOL, _stackFrameId33, "413:15-413:36", "11,32")].unmount(), _stackFrameId33, "413:10-413:47", "unmount"); // if the preserveRoot is null the template html will be left untouched
	          // in that case the DOM cleanup will happen differently from a parent node

	          CodeSee.checkForMutations();
	          CodeSee.traceLine("riot|/src/core/component.js", {
	            loc: "416:10-416:120",
	            uid: _stackFrameId33
	          });
	          CodeSee.aboutToCall(_stackFrameId33, "416:10-416:120"), CodeSee.callLikeExpr(CodeSee.getProp(this, _stackFrameId33, "416:10-416:14")[CodeSee.read(TEMPLATE_KEY_SYMBOL, _stackFrameId33, "416:15-416:34", "419,438")].unmount(CodeSee.funcArg(this, _stackFrameId33, "416:44-416:48"), CodeSee.funcArg(CodeSee.getProp(this, _stackFrameId33, "416:50-416:54")[CodeSee.read(PARENT_KEY_SYMBOL, _stackFrameId33, "416:55-416:72", "311,328")], _stackFrameId33, "416:50-416:73"), CodeSee.expr(CodeSee.expr(CodeSee.read(preserveRoot, _stackFrameId33, "416:75-416:87", "13039,13051") === null, _stackFrameId33, "416:75-416:96") ? null : CodeSee.expr(!CodeSee.read(preserveRoot, _stackFrameId33, "416:107-416:119", "13039,13051"), _stackFrameId33, "416:106-416:119"), _stackFrameId33, "416:75-416:119")), _stackFrameId33, "416:10-416:120", "unmount");
	          CodeSee.checkForMutations();
	          CodeSee.traceLine("riot|/src/core/component.js", {
	            loc: "417:10-417:66",
	            uid: _stackFrameId33
	          });
	          CodeSee.aboutToCall(_stackFrameId33, "417:10-417:66"), CodeSee.callLikeExpr(this[CodeSee.read(ON_UNMOUNTED_KEY, _stackFrameId33, "417:15-417:31", "273,289")](CodeSee.funcArg(CodeSee.getProp(this, _stackFrameId33, "417:33-417:37")[CodeSee.read(PROPS_KEY, _stackFrameId33, "417:38-417:47", "347,356")], _stackFrameId33, "417:33-417:48"), CodeSee.funcArg(CodeSee.getProp(this, _stackFrameId33, "417:50-417:54")[CodeSee.read(STATE_KEY, _stackFrameId33, "417:55-417:64", "406,415")], _stackFrameId33, "417:50-417:65")), _stackFrameId33, "417:10-417:66", undefined);
	          CodeSee.checkForMutations();
	          CodeSee.traceLine("riot|/src/core/component.js", {
	            loc: "419:10-419:21",
	            uid: _stackFrameId33
	          });

	          const _returnValue32 = CodeSee.returnVal(this, _stackFrameId33, "419:17-419:21");

	          CodeSee.stackFrameExit(_stackFrameId33);
	          return _returnValue32;
	        } catch (e) {
	          CodeSee.error(e, _stackFrameId33);
	          throw e;
	        }
	      }

	    }, _stackFrameId30, "349:83-421:7")), _stackFrameId30, "349:6-421:8", "defineProperties"))), _stackFrameId30, "348:4-422:5", "runPlugins")), (CodeSee.aboutToCall(_stackFrameId30, "423:4-423:70"), CodeSee.callLikeExpr((CodeSee.aboutToCall(_stackFrameId30, "423:4-423:26"), CodeSee.callLikeExpr(Object.keys(CodeSee.funcArg(component, _stackFrameId30, "423:16-423:25", "10525,10534")), _stackFrameId30, "423:4-423:26", "keys")).filter(CodeSee.funcExp(prop => {
	      let _stackFrameId34 = CodeSee.stackFrameEnter({
	        functionName: "Object.keys().filter callback",
	        filename: "riot|/src/core/component.js",
	        loc: "423:34-423:69"
	      });

	      try {
	        CodeSee.funcInputs([{
	          filename: "riot|/src/core/component.js",
	          loc: "423:34-423:38",
	          name: "prop",
	          uid: "13613,13617",
	          value: prop
	        }], _stackFrameId34);
	        CodeSee.traceLine("riot|/src/core/component.js", {
	          loc: "423:42-423:69",
	          uid: _stackFrameId34
	        });

	        const _returnValue33 = CodeSee.returnVal((CodeSee.aboutToCall(_stackFrameId34, "423:42-423:69"), CodeSee.callLikeExpr(isFunction(CodeSee.funcArg(CodeSee.getProp(component, _stackFrameId34, "423:53-423:62", "10525,10534")[CodeSee.read(prop, _stackFrameId34, "423:63-423:67", "13613,13617")], _stackFrameId34, "423:53-423:68")), _stackFrameId34, "423:42-423:69", "isFunction")), _stackFrameId34, "423:42-423:69");

	        CodeSee.stackFrameExit(_stackFrameId34);
	        return _returnValue33;
	      } catch (e) {
	        CodeSee.error(e, _stackFrameId34);
	        throw e;
	      }
	    }, _stackFrameId30, "423:34-423:69")), _stackFrameId30, "423:4-423:70", "filter"))), _stackFrameId30, "347:9-424:3", "autobindMethods")), _stackFrameId30, "347:9-424:3");

	    CodeSee.stackFrameExit(_stackFrameId30);
	    return _returnValue34;
	  } catch (e) {
	    CodeSee.error(e, _stackFrameId30);
	    throw e;
	  }
	}
	/**
	 * Component initialization function starting from a DOM node
	 * @param   {HTMLElement} element - element to upgrade
	 * @param   {Object} initialProps - initial component properties
	 * @param   {string} componentName - component id
	 * @returns {Object} a new component instance bound to a DOM node
	 */

	CodeSee.traceLine("riot|/src/core/component.js", {
	  loc: "434:0-443:1",
	  uid: _stackFrameId$1
	});
	function mountComponent(element, initialProps, componentName) {
	  let _stackFrameId35 = CodeSee.stackFrameEnter({
	    functionName: "mountComponent",
	    filename: "riot|/src/core/component.js",
	    loc: "434:7-443:1"
	  });

	  try {
	    CodeSee.funcInputs([{
	      filename: "riot|/src/core/component.js",
	      loc: "434:31-434:38",
	      name: "element",
	      uid: "13994,14001",
	      value: element
	    }, {
	      filename: "riot|/src/core/component.js",
	      loc: "434:40-434:52",
	      name: "initialProps",
	      uid: "14003,14015",
	      value: initialProps
	    }, {
	      filename: "riot|/src/core/component.js",
	      loc: "434:54-434:67",
	      name: "componentName",
	      uid: "14017,14030",
	      value: componentName
	    }], _stackFrameId35);
	    CodeSee.traceLine("riot|/src/core/component.js", {
	      loc: "435:2-435:48",
	      uid: _stackFrameId35
	    });
	    CodeSee.before({
	      declares: [{
	        filename: "riot|/src/core/component.js",
	        loc: "435:8-435:12",
	        name: "name",
	        uid: "14042,14046"
	      }]
	    }, _stackFrameId35);
	    const name = CodeSee.expr(CodeSee.read(componentName, _stackFrameId35, "435:15-435:28", "14017,14030") || (CodeSee.aboutToCall(_stackFrameId35, "435:32-435:48"), CodeSee.callLikeExpr(getName(CodeSee.funcArg(element, _stackFrameId35, "435:40-435:47", "13994,14001")), _stackFrameId35, "435:32-435:48", "getName")), _stackFrameId35, "435:15-435:48");
	    CodeSee.checkForMutations();
	    CodeSee.after({
	      writes: [{
	        filename: "riot|/src/core/component.js",
	        loc: "435:8-435:12",
	        name: "name",
	        uid: "14042,14046",
	        value: name
	      }]
	    }, _stackFrameId35);
	    CodeSee.traceLine("riot|/src/core/component.js", {
	      loc: "436:2-436:46",
	      uid: _stackFrameId35
	    });

	    if (CodeSee.test(!(CodeSee.aboutToCall(_stackFrameId35, "436:7-436:46"), CodeSee.callLikeExpr(COMPONENTS_IMPLEMENTATION_MAP$1.has(CodeSee.funcArg(name, _stackFrameId35, "436:41-436:45", "14042,14046")), _stackFrameId35, "436:7-436:46", "has")), _stackFrameId35, "436:6-436:46")) {
	      CodeSee.traceLine("riot|/src/core/component.js", {
	        loc: "436:48-436:107",
	        uid: _stackFrameId35
	      });
	      CodeSee.aboutToCall(_stackFrameId35, "436:48-436:107"), CodeSee.callLikeExpr(panic(`The component named "${CodeSee.read(name, _stackFrameId35, "436:78-436:82", "14042,14046")}" was never registered`), _stackFrameId35, "436:48-436:107", "panic");
	    }

	    CodeSee.checkForMutations();
	    CodeSee.traceLine("riot|/src/core/component.js", {
	      loc: "438:2-440:4",
	      uid: _stackFrameId35
	    });
	    CodeSee.before({
	      declares: [{
	        filename: "riot|/src/core/component.js",
	        loc: "438:8-438:17",
	        name: "component",
	        uid: "14200,14209"
	      }]
	    }, _stackFrameId35);
	    const component = (CodeSee.aboutToCall(_stackFrameId35, "438:20-440:4"), CodeSee.callLikeExpr((CodeSee.aboutToCall(_stackFrameId35, "438:20-438:59"), CodeSee.callLikeExpr(COMPONENTS_IMPLEMENTATION_MAP$1.get(CodeSee.funcArg(name, _stackFrameId35, "438:54-438:58", "14042,14046")), _stackFrameId35, "438:20-438:59", "get"))(CodeSee.expr({
	      props: CodeSee.read(initialProps, _stackFrameId35, "439:11-439:23", "14003,14015")
	    }, _stackFrameId35, "438:60-440:3")), _stackFrameId35, "438:20-440:4", undefined));
	    CodeSee.checkForMutations();
	    CodeSee.after({
	      writes: [{
	        filename: "riot|/src/core/component.js",
	        loc: "438:8-438:17",
	        name: "component",
	        uid: "14200,14209",
	        value: component
	      }]
	    }, _stackFrameId35);
	    CodeSee.traceLine("riot|/src/core/component.js", {
	      loc: "442:2-442:33",
	      uid: _stackFrameId35
	    });

	    const _returnValue35 = CodeSee.returnVal((CodeSee.aboutToCall(_stackFrameId35, "442:9-442:33"), CodeSee.callLikeExpr(component.mount(CodeSee.funcArg(element, _stackFrameId35, "442:25-442:32", "13994,14001")), _stackFrameId35, "442:9-442:33", "mount")), _stackFrameId35, "442:9-442:33");

	    CodeSee.stackFrameExit(_stackFrameId35);
	    return _returnValue35;
	  } catch (e) {
	    CodeSee.error(e, _stackFrameId35);
	    throw e;
	  }
	}
	CodeSee.stackFrameExit(_stackFrameId$1);

	/**
	 * Similar to compose but performs from left-to-right function composition.<br/>
	 * {@link https://30secondsofcode.org/function#composeright see also}
	 * @param   {...[function]} fns) - list of unary function
	 * @returns {*} result of the computation
	 */
	/**
	 * Performs right-to-left function composition.<br/>
	 * Use Array.prototype.reduce() to perform right-to-left function composition.<br/>
	 * The last (rightmost) function can accept one or more arguments; the remaining functions must be unary.<br/>
	 * {@link https://30secondsofcode.org/function#compose original source code}
	 * @param   {...[function]} fns) - list of unary function
	 * @returns {*} result of the computation
	 */

	function compose() {
	  for (var _len2 = arguments.length, fns = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	    fns[_key2] = arguments[_key2];
	  }

	  return fns.reduce((f, g) => function () {
	    return f(g(...arguments));
	  });
	}

	let _stackFrameId = CodeSee.stackFrameEnter({
	  functionName: "riot|/src/riot.js",
	  filename: "riot|/src/riot.js",
	  loc: "1:0-132:0"
	});

	CodeSee.source({
	  "riot|/src/riot.js": ["import * as DOMBindings from '@riotjs/dom-bindings'", "import * as globals from '@riotjs/util/constants'", "import {createComponent, defineComponent, mountComponent} from './core/component'", "import $ from 'bianco.query'", "import compose from 'cumpa'", "import cssManager from './core/css-manager'", "import {isFunction} from '@riotjs/util/checks'", "import {panic} from '@riotjs/util/misc'", "", "const { DOM_COMPONENT_INSTANCE_PROPERTY, COMPONENTS_IMPLEMENTATION_MAP, PLUGINS_SET } = globals", "", "/**", " * Riot public api", " */", "", "/**", " * Register a custom tag by name", " * @param   {string} name - component name", " * @param   {Object} implementation - tag implementation", " * @returns {Map} map containing all the components implementations", " */", "export function register(name, {css, template, exports}) {", "  if (COMPONENTS_IMPLEMENTATION_MAP.has(name)) panic(`The component \"${name}\" was already registered`)", "", "  COMPONENTS_IMPLEMENTATION_MAP.set(name, createComponent({name, css, template, exports}))", "", "  return COMPONENTS_IMPLEMENTATION_MAP", "}", "", "/**", " * Unregister a riot web component", " * @param   {string} name - component name", " * @returns {Map} map containing all the components implementations", " */", "export function unregister(name) {", "  if (!COMPONENTS_IMPLEMENTATION_MAP.has(name)) panic(`The component \"${name}\" was never registered`)", "", "  COMPONENTS_IMPLEMENTATION_MAP.delete(name)", "  cssManager.remove(name)", "", "  return COMPONENTS_IMPLEMENTATION_MAP", "}", "", "/**", " * Mounting function that will work only for the components that were globally registered", " * @param   {string|HTMLElement} selector - query for the selection or a DOM element", " * @param   {Object} initialProps - the initial component properties", " * @param   {string} name - optional component name", " * @returns {Array} list of riot components", " */", "export function mount(selector, initialProps, name) {", "  return $(selector).map(element => mountComponent(element, initialProps, name))", "}", "", "/**", " * Sweet unmounting helper function for the DOM node mounted manually by the user", " * @param   {string|HTMLElement} selector - query for the selection or a DOM element", " * @param   {boolean|null} keepRootElement - if true keep the root element", " * @returns {Array} list of nodes unmounted", " */", "export function unmount(selector, keepRootElement) {", "  return $(selector).map(element => {", "    if (element[DOM_COMPONENT_INSTANCE_PROPERTY]) {", "      element[DOM_COMPONENT_INSTANCE_PROPERTY].unmount(keepRootElement)", "    }", "    return element", "  })", "}", "", "/**", " * Define a riot plugin", " * @param   {Function} plugin - function that will receive all the components created", " * @returns {Set} the set containing all the plugins installed", " */", "export function install(plugin) {", "  if (!isFunction(plugin)) panic('Plugins must be of type function')", "  if (PLUGINS_SET.has(plugin)) panic('This plugin was already installed')", "", "  PLUGINS_SET.add(plugin)", "", "  return PLUGINS_SET", "}", "", "/**", " * Uninstall a riot plugin", " * @param   {Function} plugin - plugin previously installed", " * @returns {Set} the set containing all the plugins installed", " */", "export function uninstall(plugin) {", "  if (!PLUGINS_SET.has(plugin)) panic('This plugin was never installed')", "", "  PLUGINS_SET.delete(plugin)", "", "  return PLUGINS_SET", "}", "", "/**", " * Helper method to create component without relying on the registered ones", " * @param   {Object} implementation - component implementation", " * @returns {Function} function that will allow you to mount a riot component on a DOM node", " */", "export function component(implementation) {", "  return (el, props, {slots, attributes, parentScope} = {}) => compose(", "    c => c.mount(el, parentScope),", "    c => c({props, slots, attributes}),", "    createComponent", "  )(implementation)", "}", "", "/**", " * Lift a riot component Interface into a pure riot object", " * @param   {Function} func - RiotPureComponent factory function", " * @returns {Function} the lifted original function received as argument", " */", "export function pure(func) {", "  if (!isFunction(func)) panic('riot.pure accepts only arguments of type \"function\"')", "  func[globals.IS_PURE_SYMBOL] = true", "  return func", "}", "", "/** @type {string} current riot version */", "export const version = 'v5.4.4'", "", "// expose some internal stuff that might be used from external tools", "export const __ = {", "  cssManager,", "  DOMBindings,", "  createComponent,", "  defineComponent,", "  globals", "}", ""]
	});
	CodeSee.traceLine("riot|/src/riot.js", {
	  loc: "1:0-1:51",
	  uid: _stackFrameId
	});
	CodeSee.traceLine("riot|/src/riot.js", {
	  loc: "2:0-2:49",
	  uid: _stackFrameId
	});
	CodeSee.traceLine("riot|/src/riot.js", {
	  loc: "3:0-3:81",
	  uid: _stackFrameId
	});
	CodeSee.traceLine("riot|/src/riot.js", {
	  loc: "4:0-4:28",
	  uid: _stackFrameId
	});
	CodeSee.traceLine("riot|/src/riot.js", {
	  loc: "5:0-5:27",
	  uid: _stackFrameId
	});
	CodeSee.traceLine("riot|/src/riot.js", {
	  loc: "6:0-6:43",
	  uid: _stackFrameId
	});
	CodeSee.traceLine("riot|/src/riot.js", {
	  loc: "7:0-7:46",
	  uid: _stackFrameId
	});
	CodeSee.traceLine("riot|/src/riot.js", {
	  loc: "8:0-8:39",
	  uid: _stackFrameId
	});
	CodeSee.traceLine("riot|/src/riot.js", {
	  loc: "10:0-10:95",
	  uid: _stackFrameId
	});
	CodeSee.before({
	  declares: [{
	    filename: "riot|/src/riot.js",
	    loc: "10:8-10:39",
	    name: "DOM_COMPONENT_INSTANCE_PROPERTY",
	    uid: "381,412"
	  }, {
	    filename: "riot|/src/riot.js",
	    loc: "10:41-10:70",
	    name: "COMPONENTS_IMPLEMENTATION_MAP",
	    uid: "414,443"
	  }, {
	    filename: "riot|/src/riot.js",
	    loc: "10:72-10:83",
	    name: "PLUGINS_SET",
	    uid: "445,456"
	  }]
	}, _stackFrameId);
	const {
	  DOM_COMPONENT_INSTANCE_PROPERTY,
	  COMPONENTS_IMPLEMENTATION_MAP,
	  PLUGINS_SET
	} = CodeSee.read(globals, _stackFrameId, "10:88-10:95", "64,71");
	/**
	 * Riot public api
	 */

	/**
	 * Register a custom tag by name
	 * @param   {string} name - component name
	 * @param   {Object} implementation - tag implementation
	 * @returns {Map} map containing all the components implementations
	 */

	CodeSee.after({
	  writes: [{
	    filename: "riot|/src/riot.js",
	    loc: "10:8-10:39",
	    name: "DOM_COMPONENT_INSTANCE_PROPERTY",
	    uid: "381,412",
	    value: DOM_COMPONENT_INSTANCE_PROPERTY
	  }, {
	    filename: "riot|/src/riot.js",
	    loc: "10:41-10:70",
	    name: "COMPONENTS_IMPLEMENTATION_MAP",
	    uid: "414,443",
	    value: COMPONENTS_IMPLEMENTATION_MAP
	  }, {
	    filename: "riot|/src/riot.js",
	    loc: "10:72-10:83",
	    name: "PLUGINS_SET",
	    uid: "445,456",
	    value: PLUGINS_SET
	  }]
	}, _stackFrameId);
	CodeSee.traceLine("riot|/src/riot.js", {
	  loc: "22:0-28:1",
	  uid: _stackFrameId
	});
	function register(name, _ref) {
	  let _stackFrameId2 = CodeSee.stackFrameEnter({
	    functionName: "register",
	    filename: "riot|/src/riot.js",
	    loc: "22:7-28:1"
	  });

	  try {
	    let {
	      css,
	      template,
	      exports
	    } = _ref;
	    CodeSee.funcInputs([{
	      filename: "riot|/src/riot.js",
	      loc: "22:25-22:29",
	      name: "name",
	      uid: "732,736",
	      value: name
	    }, {
	      filename: "riot|/src/riot.js",
	      loc: "22:32-22:35",
	      name: "css",
	      uid: "739,742",
	      value: css
	    }, {
	      filename: "riot|/src/riot.js",
	      loc: "22:37-22:45",
	      name: "template",
	      uid: "744,752",
	      value: template
	    }, {
	      filename: "riot|/src/riot.js",
	      loc: "22:47-22:54",
	      name: "exports",
	      uid: "754,761",
	      value: exports
	    }], _stackFrameId2);
	    CodeSee.traceLine("riot|/src/riot.js", {
	      loc: "23:2-23:45",
	      uid: _stackFrameId2
	    });

	    if (CodeSee.aboutToCall(_stackFrameId2, "23:6-23:45"), CodeSee.callLikeExpr(COMPONENTS_IMPLEMENTATION_MAP.has(CodeSee.funcArg(name, _stackFrameId2, "23:40-23:44", "732,736")), _stackFrameId2, "23:6-23:45", "has")) {
	      CodeSee.traceLine("riot|/src/riot.js", {
	        loc: "23:47-23:102",
	        uid: _stackFrameId2
	      });
	      CodeSee.aboutToCall(_stackFrameId2, "23:47-23:102"), CodeSee.callLikeExpr(panic(`The component "${CodeSee.read(name, _stackFrameId2, "23:71-23:75", "732,736")}" was already registered`), _stackFrameId2, "23:47-23:102", "panic");
	    }

	    CodeSee.checkForMutations();
	    CodeSee.traceLine("riot|/src/riot.js", {
	      loc: "25:2-25:90",
	      uid: _stackFrameId2
	    });
	    CodeSee.aboutToCall(_stackFrameId2, "25:2-25:90"), CodeSee.callLikeExpr(COMPONENTS_IMPLEMENTATION_MAP.set(CodeSee.funcArg(name, _stackFrameId2, "25:36-25:40", "732,736"), (CodeSee.aboutToCall(_stackFrameId2, "25:42-25:89"), CodeSee.callLikeExpr(createComponent(CodeSee.expr({
	      name: CodeSee.read(name, _stackFrameId2, "25:59-25:63", "732,736"),
	      css: CodeSee.read(css, _stackFrameId2, "25:65-25:68", "739,742"),
	      template: CodeSee.read(template, _stackFrameId2, "25:70-25:78", "744,752"),
	      exports: CodeSee.read(exports, _stackFrameId2, "25:80-25:87", "754,761")
	    }, _stackFrameId2, "25:58-25:88")), _stackFrameId2, "25:42-25:89", "createComponent"))), _stackFrameId2, "25:2-25:90", "set");
	    CodeSee.checkForMutations();
	    CodeSee.traceLine("riot|/src/riot.js", {
	      loc: "27:2-27:38",
	      uid: _stackFrameId2
	    });

	    const _returnValue = CodeSee.returnVal(COMPONENTS_IMPLEMENTATION_MAP, _stackFrameId2, "27:9-27:38", "414,443");

	    CodeSee.stackFrameExit(_stackFrameId2);
	    return _returnValue;
	  } catch (e) {
	    CodeSee.error(e, _stackFrameId2);
	    throw e;
	  }
	}
	/**
	 * Unregister a riot web component
	 * @param   {string} name - component name
	 * @returns {Map} map containing all the components implementations
	 */

	CodeSee.traceLine("riot|/src/riot.js", {
	  loc: "35:0-42:1",
	  uid: _stackFrameId
	});
	function unregister(name) {
	  let _stackFrameId3 = CodeSee.stackFrameEnter({
	    functionName: "unregister",
	    filename: "riot|/src/riot.js",
	    loc: "35:7-42:1"
	  });

	  try {
	    CodeSee.funcInputs([{
	      filename: "riot|/src/riot.js",
	      loc: "35:27-35:31",
	      name: "name",
	      uid: "1185,1189",
	      value: name
	    }], _stackFrameId3);
	    CodeSee.traceLine("riot|/src/riot.js", {
	      loc: "36:2-36:46",
	      uid: _stackFrameId3
	    });

	    if (CodeSee.test(!(CodeSee.aboutToCall(_stackFrameId3, "36:7-36:46"), CodeSee.callLikeExpr(COMPONENTS_IMPLEMENTATION_MAP.has(CodeSee.funcArg(name, _stackFrameId3, "36:41-36:45", "1185,1189")), _stackFrameId3, "36:7-36:46", "has")), _stackFrameId3, "36:6-36:46")) {
	      CodeSee.traceLine("riot|/src/riot.js", {
	        loc: "36:48-36:101",
	        uid: _stackFrameId3
	      });
	      CodeSee.aboutToCall(_stackFrameId3, "36:48-36:101"), CodeSee.callLikeExpr(panic(`The component "${CodeSee.read(name, _stackFrameId3, "36:72-36:76", "1185,1189")}" was never registered`), _stackFrameId3, "36:48-36:101", "panic");
	    }

	    CodeSee.checkForMutations();
	    CodeSee.traceLine("riot|/src/riot.js", {
	      loc: "38:2-38:44",
	      uid: _stackFrameId3
	    });
	    CodeSee.aboutToCall(_stackFrameId3, "38:2-38:44"), CodeSee.callLikeExpr(COMPONENTS_IMPLEMENTATION_MAP.delete(CodeSee.funcArg(name, _stackFrameId3, "38:39-38:43", "1185,1189")), _stackFrameId3, "38:2-38:44", "delete");
	    CodeSee.checkForMutations();
	    CodeSee.traceLine("riot|/src/riot.js", {
	      loc: "39:2-39:25",
	      uid: _stackFrameId3
	    });
	    CodeSee.aboutToCall(_stackFrameId3, "39:2-39:25"), CodeSee.callLikeExpr(cssManager.remove(CodeSee.funcArg(name, _stackFrameId3, "39:20-39:24", "1185,1189")), _stackFrameId3, "39:2-39:25", "remove");
	    CodeSee.checkForMutations();
	    CodeSee.traceLine("riot|/src/riot.js", {
	      loc: "41:2-41:38",
	      uid: _stackFrameId3
	    });

	    const _returnValue2 = CodeSee.returnVal(COMPONENTS_IMPLEMENTATION_MAP, _stackFrameId3, "41:9-41:38", "414,443");

	    CodeSee.stackFrameExit(_stackFrameId3);
	    return _returnValue2;
	  } catch (e) {
	    CodeSee.error(e, _stackFrameId3);
	    throw e;
	  }
	}
	/**
	 * Mounting function that will work only for the components that were globally registered
	 * @param   {string|HTMLElement} selector - query for the selection or a DOM element
	 * @param   {Object} initialProps - the initial component properties
	 * @param   {string} name - optional component name
	 * @returns {Array} list of riot components
	 */

	CodeSee.traceLine("riot|/src/riot.js", {
	  loc: "51:0-53:1",
	  uid: _stackFrameId
	});
	function mount(selector, initialProps, name) {
	  let _stackFrameId4 = CodeSee.stackFrameEnter({
	    functionName: "mount",
	    filename: "riot|/src/riot.js",
	    loc: "51:7-53:1"
	  });

	  try {
	    CodeSee.funcInputs([{
	      filename: "riot|/src/riot.js",
	      loc: "51:22-51:30",
	      name: "selector",
	      uid: "1780,1788",
	      value: selector
	    }, {
	      filename: "riot|/src/riot.js",
	      loc: "51:32-51:44",
	      name: "initialProps",
	      uid: "1790,1802",
	      value: initialProps
	    }, {
	      filename: "riot|/src/riot.js",
	      loc: "51:46-51:50",
	      name: "name",
	      uid: "1804,1808",
	      value: name
	    }], _stackFrameId4);
	    CodeSee.traceLine("riot|/src/riot.js", {
	      loc: "52:2-52:80",
	      uid: _stackFrameId4
	    });

	    const _returnValue4 = CodeSee.returnVal((CodeSee.aboutToCall(_stackFrameId4, "52:9-52:80"), CodeSee.callLikeExpr((CodeSee.aboutToCall(_stackFrameId4, "52:9-52:20"), CodeSee.callLikeExpr($(CodeSee.funcArg(selector, _stackFrameId4, "52:11-52:19", "1780,1788")), _stackFrameId4, "52:9-52:20", "$")).map(CodeSee.funcExp(element => {
	      let _stackFrameId5 = CodeSee.stackFrameEnter({
	        functionName: "$().map callback",
	        filename: "riot|/src/riot.js",
	        loc: "52:25-52:79"
	      });

	      try {
	        CodeSee.funcInputs([{
	          filename: "riot|/src/riot.js",
	          loc: "52:25-52:32",
	          name: "element",
	          uid: "1837,1844",
	          value: element
	        }], _stackFrameId5);
	        CodeSee.traceLine("riot|/src/riot.js", {
	          loc: "52:36-52:79",
	          uid: _stackFrameId5
	        });

	        const _returnValue3 = CodeSee.returnVal((CodeSee.aboutToCall(_stackFrameId5, "52:36-52:79"), CodeSee.callLikeExpr(mountComponent(CodeSee.funcArg(element, _stackFrameId5, "52:51-52:58", "1837,1844"), CodeSee.funcArg(initialProps, _stackFrameId5, "52:60-52:72", "1790,1802"), CodeSee.funcArg(name, _stackFrameId5, "52:74-52:78", "1804,1808")), _stackFrameId5, "52:36-52:79", "mountComponent")), _stackFrameId5, "52:36-52:79");

	        CodeSee.stackFrameExit(_stackFrameId5);
	        return _returnValue3;
	      } catch (e) {
	        CodeSee.error(e, _stackFrameId5);
	        throw e;
	      }
	    }, _stackFrameId4, "52:25-52:79")), _stackFrameId4, "52:9-52:80", "map")), _stackFrameId4, "52:9-52:80");

	    CodeSee.stackFrameExit(_stackFrameId4);
	    return _returnValue4;
	  } catch (e) {
	    CodeSee.error(e, _stackFrameId4);
	    throw e;
	  }
	}
	/**
	 * Sweet unmounting helper function for the DOM node mounted manually by the user
	 * @param   {string|HTMLElement} selector - query for the selection or a DOM element
	 * @param   {boolean|null} keepRootElement - if true keep the root element
	 * @returns {Array} list of nodes unmounted
	 */

	CodeSee.traceLine("riot|/src/riot.js", {
	  loc: "61:0-68:1",
	  uid: _stackFrameId
	});
	function unmount(selector, keepRootElement) {
	  let _stackFrameId6 = CodeSee.stackFrameEnter({
	    functionName: "unmount",
	    filename: "riot|/src/riot.js",
	    loc: "61:7-68:1"
	  });

	  try {
	    CodeSee.funcInputs([{
	      filename: "riot|/src/riot.js",
	      loc: "61:24-61:32",
	      name: "selector",
	      uid: "2214,2222",
	      value: selector
	    }, {
	      filename: "riot|/src/riot.js",
	      loc: "61:34-61:49",
	      name: "keepRootElement",
	      uid: "2224,2239",
	      value: keepRootElement
	    }], _stackFrameId6);
	    CodeSee.traceLine("riot|/src/riot.js", {
	      loc: "62:2-67:4",
	      uid: _stackFrameId6
	    });

	    const _returnValue6 = CodeSee.returnVal((CodeSee.aboutToCall(_stackFrameId6, "62:9-67:4"), CodeSee.callLikeExpr((CodeSee.aboutToCall(_stackFrameId6, "62:9-62:20"), CodeSee.callLikeExpr($(CodeSee.funcArg(selector, _stackFrameId6, "62:11-62:19", "2214,2222")), _stackFrameId6, "62:9-62:20", "$")).map(CodeSee.funcExp(element => {
	      let _stackFrameId7 = CodeSee.stackFrameEnter({
	        functionName: "$().map callback",
	        filename: "riot|/src/riot.js",
	        loc: "62:25-67:3"
	      });

	      try {
	        CodeSee.funcInputs([{
	          filename: "riot|/src/riot.js",
	          loc: "62:25-62:32",
	          name: "element",
	          uid: "2268,2275",
	          value: element
	        }], _stackFrameId7);
	        CodeSee.traceLine("riot|/src/riot.js", {
	          loc: "63:4-63:48",
	          uid: _stackFrameId7
	        });

	        if (CodeSee.test(CodeSee.getProp(element, _stackFrameId7, "63:8-63:15", "2268,2275")[CodeSee.read(DOM_COMPONENT_INSTANCE_PROPERTY, _stackFrameId7, "63:16-63:47", "381,412")], _stackFrameId7, "63:8-63:48")) {
	          CodeSee.traceLine("riot|/src/riot.js", {
	            loc: "64:6-64:71",
	            uid: _stackFrameId7
	          });
	          CodeSee.aboutToCall(_stackFrameId7, "64:6-64:71"), CodeSee.callLikeExpr(CodeSee.getProp(element, _stackFrameId7, "64:6-64:13", "2268,2275")[CodeSee.read(DOM_COMPONENT_INSTANCE_PROPERTY, _stackFrameId7, "64:14-64:45", "381,412")].unmount(CodeSee.funcArg(keepRootElement, _stackFrameId7, "64:55-64:70", "2224,2239")), _stackFrameId7, "64:6-64:71", "unmount");
	          CodeSee.checkForMutations();
	        }

	        CodeSee.checkForMutations();
	        CodeSee.traceLine("riot|/src/riot.js", {
	          loc: "66:4-66:18",
	          uid: _stackFrameId7
	        });

	        const _returnValue5 = CodeSee.returnVal(element, _stackFrameId7, "66:11-66:18", "2268,2275");

	        CodeSee.stackFrameExit(_stackFrameId7);
	        return _returnValue5;
	      } catch (e) {
	        CodeSee.error(e, _stackFrameId7);
	        throw e;
	      }
	    }, _stackFrameId6, "62:25-67:3")), _stackFrameId6, "62:9-67:4", "map")), _stackFrameId6, "62:9-67:4");

	    CodeSee.stackFrameExit(_stackFrameId6);
	    return _returnValue6;
	  } catch (e) {
	    CodeSee.error(e, _stackFrameId6);
	    throw e;
	  }
	}
	/**
	 * Define a riot plugin
	 * @param   {Function} plugin - function that will receive all the components created
	 * @returns {Set} the set containing all the plugins installed
	 */

	CodeSee.traceLine("riot|/src/riot.js", {
	  loc: "75:0-82:1",
	  uid: _stackFrameId
	});
	function install(plugin) {
	  let _stackFrameId8 = CodeSee.stackFrameEnter({
	    functionName: "install",
	    filename: "riot|/src/riot.js",
	    loc: "75:7-82:1"
	  });

	  try {
	    CodeSee.funcInputs([{
	      filename: "riot|/src/riot.js",
	      loc: "75:24-75:30",
	      name: "plugin",
	      uid: "2643,2649",
	      value: plugin
	    }], _stackFrameId8);
	    CodeSee.traceLine("riot|/src/riot.js", {
	      loc: "76:2-76:25",
	      uid: _stackFrameId8
	    });

	    if (CodeSee.test(!(CodeSee.aboutToCall(_stackFrameId8, "76:7-76:25"), CodeSee.callLikeExpr(isFunction(CodeSee.funcArg(plugin, _stackFrameId8, "76:18-76:24", "2643,2649")), _stackFrameId8, "76:7-76:25", "isFunction")), _stackFrameId8, "76:6-76:25")) {
	      CodeSee.traceLine("riot|/src/riot.js", {
	        loc: "76:27-76:68",
	        uid: _stackFrameId8
	      });
	      CodeSee.aboutToCall(_stackFrameId8, "76:27-76:68"), CodeSee.callLikeExpr(panic('Plugins must be of type function'), _stackFrameId8, "76:27-76:68", "panic");
	    }

	    CodeSee.checkForMutations();
	    CodeSee.traceLine("riot|/src/riot.js", {
	      loc: "77:2-77:29",
	      uid: _stackFrameId8
	    });

	    if (CodeSee.aboutToCall(_stackFrameId8, "77:6-77:29"), CodeSee.callLikeExpr(PLUGINS_SET.has(CodeSee.funcArg(plugin, _stackFrameId8, "77:22-77:28", "2643,2649")), _stackFrameId8, "77:6-77:29", "has")) {
	      CodeSee.traceLine("riot|/src/riot.js", {
	        loc: "77:31-77:73",
	        uid: _stackFrameId8
	      });
	      CodeSee.aboutToCall(_stackFrameId8, "77:31-77:73"), CodeSee.callLikeExpr(panic('This plugin was already installed'), _stackFrameId8, "77:31-77:73", "panic");
	    }

	    CodeSee.checkForMutations();
	    CodeSee.traceLine("riot|/src/riot.js", {
	      loc: "79:2-79:25",
	      uid: _stackFrameId8
	    });
	    CodeSee.aboutToCall(_stackFrameId8, "79:2-79:25"), CodeSee.callLikeExpr(PLUGINS_SET.add(CodeSee.funcArg(plugin, _stackFrameId8, "79:18-79:24", "2643,2649")), _stackFrameId8, "79:2-79:25", "add");
	    CodeSee.checkForMutations();
	    CodeSee.traceLine("riot|/src/riot.js", {
	      loc: "81:2-81:20",
	      uid: _stackFrameId8
	    });

	    const _returnValue7 = CodeSee.returnVal(PLUGINS_SET, _stackFrameId8, "81:9-81:20", "445,456");

	    CodeSee.stackFrameExit(_stackFrameId8);
	    return _returnValue7;
	  } catch (e) {
	    CodeSee.error(e, _stackFrameId8);
	    throw e;
	  }
	}
	/**
	 * Uninstall a riot plugin
	 * @param   {Function} plugin - plugin previously installed
	 * @returns {Set} the set containing all the plugins installed
	 */

	CodeSee.traceLine("riot|/src/riot.js", {
	  loc: "89:0-95:1",
	  uid: _stackFrameId
	});
	function uninstall(plugin) {
	  let _stackFrameId9 = CodeSee.stackFrameEnter({
	    functionName: "uninstall",
	    filename: "riot|/src/riot.js",
	    loc: "89:7-95:1"
	  });

	  try {
	    CodeSee.funcInputs([{
	      filename: "riot|/src/riot.js",
	      loc: "89:26-89:32",
	      name: "plugin",
	      uid: "3032,3038",
	      value: plugin
	    }], _stackFrameId9);
	    CodeSee.traceLine("riot|/src/riot.js", {
	      loc: "90:2-90:30",
	      uid: _stackFrameId9
	    });

	    if (CodeSee.test(!(CodeSee.aboutToCall(_stackFrameId9, "90:7-90:30"), CodeSee.callLikeExpr(PLUGINS_SET.has(CodeSee.funcArg(plugin, _stackFrameId9, "90:23-90:29", "3032,3038")), _stackFrameId9, "90:7-90:30", "has")), _stackFrameId9, "90:6-90:30")) {
	      CodeSee.traceLine("riot|/src/riot.js", {
	        loc: "90:32-90:72",
	        uid: _stackFrameId9
	      });
	      CodeSee.aboutToCall(_stackFrameId9, "90:32-90:72"), CodeSee.callLikeExpr(panic('This plugin was never installed'), _stackFrameId9, "90:32-90:72", "panic");
	    }

	    CodeSee.checkForMutations();
	    CodeSee.traceLine("riot|/src/riot.js", {
	      loc: "92:2-92:28",
	      uid: _stackFrameId9
	    });
	    CodeSee.aboutToCall(_stackFrameId9, "92:2-92:28"), CodeSee.callLikeExpr(PLUGINS_SET.delete(CodeSee.funcArg(plugin, _stackFrameId9, "92:21-92:27", "3032,3038")), _stackFrameId9, "92:2-92:28", "delete");
	    CodeSee.checkForMutations();
	    CodeSee.traceLine("riot|/src/riot.js", {
	      loc: "94:2-94:20",
	      uid: _stackFrameId9
	    });

	    const _returnValue8 = CodeSee.returnVal(PLUGINS_SET, _stackFrameId9, "94:9-94:20", "445,456");

	    CodeSee.stackFrameExit(_stackFrameId9);
	    return _returnValue8;
	  } catch (e) {
	    CodeSee.error(e, _stackFrameId9);
	    throw e;
	  }
	}
	/**
	 * Helper method to create component without relying on the registered ones
	 * @param   {Object} implementation - component implementation
	 * @returns {Function} function that will allow you to mount a riot component on a DOM node
	 */

	CodeSee.traceLine("riot|/src/riot.js", {
	  loc: "102:0-108:1",
	  uid: _stackFrameId
	});
	function component(implementation) {
	  let _stackFrameId10 = CodeSee.stackFrameEnter({
	    functionName: "component",
	    filename: "riot|/src/riot.js",
	    loc: "102:7-108:1"
	  });

	  try {
	    CodeSee.funcInputs([{
	      filename: "riot|/src/riot.js",
	      loc: "102:26-102:40",
	      name: "implementation",
	      uid: "3435,3449",
	      value: implementation
	    }], _stackFrameId10);
	    CodeSee.traceLine("riot|/src/riot.js", {
	      loc: "103:2-107:19",
	      uid: _stackFrameId10
	    });

	    const _returnValue12 = CodeSee.returnVal(CodeSee.funcExp(function (el, props, _temp) {
	      let _stackFrameId11 = CodeSee.stackFrameEnter({
	        functionName: "<anonymous function>",
	        filename: "riot|/src/riot.js",
	        loc: "103:9-107:19"
	      });

	      try {
	        let {
	          slots,
	          attributes,
	          parentScope
	        } = _temp === void 0 ? {} : _temp;
	        CodeSee.funcInputs([{
	          filename: "riot|/src/riot.js",
	          loc: "103:10-103:12",
	          name: "el",
	          uid: "3463,3465",
	          value: el
	        }, {
	          filename: "riot|/src/riot.js",
	          loc: "103:14-103:19",
	          name: "props",
	          uid: "3467,3472",
	          value: props
	        }, {
	          filename: "riot|/src/riot.js",
	          loc: "103:22-103:27",
	          name: "slots",
	          uid: "3475,3480",
	          value: slots
	        }, {
	          filename: "riot|/src/riot.js",
	          loc: "103:29-103:39",
	          name: "attributes",
	          uid: "3482,3492",
	          value: attributes
	        }, {
	          filename: "riot|/src/riot.js",
	          loc: "103:41-103:52",
	          name: "parentScope",
	          uid: "3494,3505",
	          value: parentScope
	        }], _stackFrameId11);
	        CodeSee.traceLine("riot|/src/riot.js", {
	          loc: "103:63-107:19",
	          uid: _stackFrameId11
	        });

	        const _returnValue11 = CodeSee.returnVal((CodeSee.aboutToCall(_stackFrameId11, "103:63-107:19"), CodeSee.callLikeExpr((CodeSee.aboutToCall(_stackFrameId11, "103:63-107:3"), CodeSee.callLikeExpr(compose(CodeSee.funcExp(c => {
	          let _stackFrameId12 = CodeSee.stackFrameEnter({
	            functionName: "compose callback",
	            filename: "riot|/src/riot.js",
	            loc: "104:4-104:33"
	          });

	          try {
	            CodeSee.funcInputs([{
	              filename: "riot|/src/riot.js",
	              loc: "104:4-104:5",
	              name: "c",
	              uid: "3529,3530",
	              value: c
	            }], _stackFrameId12);
	            CodeSee.traceLine("riot|/src/riot.js", {
	              loc: "104:9-104:33",
	              uid: _stackFrameId12
	            });

	            const _returnValue9 = CodeSee.returnVal((CodeSee.aboutToCall(_stackFrameId12, "104:9-104:33"), CodeSee.callLikeExpr(c.mount(CodeSee.funcArg(el, _stackFrameId12, "104:17-104:19", "3463,3465"), CodeSee.funcArg(parentScope, _stackFrameId12, "104:21-104:32", "3494,3505")), _stackFrameId12, "104:9-104:33", "mount")), _stackFrameId12, "104:9-104:33");

	            CodeSee.stackFrameExit(_stackFrameId12);
	            return _returnValue9;
	          } catch (e) {
	            CodeSee.error(e, _stackFrameId12);
	            throw e;
	          }
	        }, _stackFrameId11, "104:4-104:33"), CodeSee.funcExp(c => {
	          let _stackFrameId13 = CodeSee.stackFrameEnter({
	            functionName: "compose callback",
	            filename: "riot|/src/riot.js",
	            loc: "105:4-105:38"
	          });

	          try {
	            CodeSee.funcInputs([{
	              filename: "riot|/src/riot.js",
	              loc: "105:4-105:5",
	              name: "c",
	              uid: "3564,3565",
	              value: c
	            }], _stackFrameId13);
	            CodeSee.traceLine("riot|/src/riot.js", {
	              loc: "105:9-105:38",
	              uid: _stackFrameId13
	            });

	            const _returnValue10 = CodeSee.returnVal((CodeSee.aboutToCall(_stackFrameId13, "105:9-105:38"), CodeSee.callLikeExpr(c(CodeSee.expr({
	              props: CodeSee.read(props, _stackFrameId13, "105:12-105:17", "3467,3472"),
	              slots: CodeSee.read(slots, _stackFrameId13, "105:19-105:24", "3475,3480"),
	              attributes: CodeSee.read(attributes, _stackFrameId13, "105:26-105:36", "3482,3492")
	            }, _stackFrameId13, "105:11-105:37")), _stackFrameId13, "105:9-105:38", "c")), _stackFrameId13, "105:9-105:38");

	            CodeSee.stackFrameExit(_stackFrameId13);
	            return _returnValue10;
	          } catch (e) {
	            CodeSee.error(e, _stackFrameId13);
	            throw e;
	          }
	        }, _stackFrameId11, "105:4-105:38"), CodeSee.funcArg(createComponent, _stackFrameId11, "106:4-106:19", "110,125")), _stackFrameId11, "103:63-107:3", "compose"))(CodeSee.funcArg(implementation, _stackFrameId11, "107:4-107:18", "3435,3449")), _stackFrameId11, "103:63-107:19", undefined)), _stackFrameId11, "103:63-107:19");

	        CodeSee.stackFrameExit(_stackFrameId11);
	        return _returnValue11;
	      } catch (e) {
	        CodeSee.error(e, _stackFrameId11);
	        throw e;
	      }
	    }, _stackFrameId10, "103:9-107:19"), _stackFrameId10, "103:9-107:19");

	    CodeSee.stackFrameExit(_stackFrameId10);
	    return _returnValue12;
	  } catch (e) {
	    CodeSee.error(e, _stackFrameId10);
	    throw e;
	  }
	}
	/**
	 * Lift a riot component Interface into a pure riot object
	 * @param   {Function} func - RiotPureComponent factory function
	 * @returns {Function} the lifted original function received as argument
	 */

	CodeSee.traceLine("riot|/src/riot.js", {
	  loc: "115:0-119:1",
	  uid: _stackFrameId
	});
	function pure(func) {
	  let _stackFrameId14 = CodeSee.stackFrameEnter({
	    functionName: "pure",
	    filename: "riot|/src/riot.js",
	    loc: "115:7-119:1"
	  });

	  try {
	    CodeSee.funcInputs([{
	      filename: "riot|/src/riot.js",
	      loc: "115:21-115:25",
	      name: "func",
	      uid: "3869,3873",
	      value: func
	    }], _stackFrameId14);
	    CodeSee.traceLine("riot|/src/riot.js", {
	      loc: "116:2-116:23",
	      uid: _stackFrameId14
	    });

	    if (CodeSee.test(!(CodeSee.aboutToCall(_stackFrameId14, "116:7-116:23"), CodeSee.callLikeExpr(isFunction(CodeSee.funcArg(func, _stackFrameId14, "116:18-116:22", "3869,3873")), _stackFrameId14, "116:7-116:23", "isFunction")), _stackFrameId14, "116:6-116:23")) {
	      CodeSee.traceLine("riot|/src/riot.js", {
	        loc: "116:25-116:85",
	        uid: _stackFrameId14
	      });
	      CodeSee.aboutToCall(_stackFrameId14, "116:25-116:85"), CodeSee.callLikeExpr(panic('riot.pure accepts only arguments of type "function"'), _stackFrameId14, "116:25-116:85", "panic");
	    }

	    CodeSee.checkForMutations();

	    const _prop = CodeSee.read(CodeSee.getProp(globals, _stackFrameId14, "117:7-117:14", "64,71").IS_PURE_SYMBOL, _stackFrameId14, "117:7-117:29");

	    CodeSee.checkForMutations();
	    CodeSee.traceLine("riot|/src/riot.js", {
	      loc: "117:2-117:37",
	      uid: _stackFrameId14
	    });
	    CodeSee.before({
	      writes: [{
	        filename: "riot|/src/riot.js",
	        loc: "117:2-117:30",
	        name: ["func", _prop],
	        uid: "3869,3873",
	        value: func
	      }]
	    }, _stackFrameId14);
	    func[_prop] = true;
	    CodeSee.after({
	      writes: [{
	        filename: "riot|/src/riot.js",
	        loc: "117:2-117:30",
	        name: ["func", _prop],
	        uid: "3869,3873",
	        value: func
	      }]
	    }, _stackFrameId14);
	    CodeSee.traceLine("riot|/src/riot.js", {
	      loc: "118:2-118:13",
	      uid: _stackFrameId14
	    });

	    const _returnValue13 = CodeSee.returnVal(func, _stackFrameId14, "118:9-118:13", "3869,3873");

	    CodeSee.stackFrameExit(_stackFrameId14);
	    return _returnValue13;
	  } catch (e) {
	    CodeSee.error(e, _stackFrameId14);
	    throw e;
	  }
	}
	/** @type {string} current riot version */

	CodeSee.traceLine("riot|/src/riot.js", {
	  loc: "122:0-122:28",
	  uid: _stackFrameId
	});
	CodeSee.traceLine("riot|/src/riot.js", {
	  loc: "122:7-122:28",
	  uid: _stackFrameId
	});
	CodeSee.before({
	  declares: [{
	    filename: "riot|/src/riot.js",
	    loc: "122:13-122:20",
	    name: "version",
	    uid: "4074,4081"
	  }]
	}, _stackFrameId);
	const version = 'v5.4.4'; // expose some internal stuff that might be used from external tools

	CodeSee.after({
	  writes: [{
	    filename: "riot|/src/riot.js",
	    loc: "122:13-122:20",
	    name: "version",
	    uid: "4074,4081",
	    value: version
	  }]
	}, _stackFrameId);
	CodeSee.traceLine("riot|/src/riot.js", {
	  loc: "125:0-131:1",
	  uid: _stackFrameId
	});
	CodeSee.traceLine("riot|/src/riot.js", {
	  loc: "125:7-131:1",
	  uid: _stackFrameId
	});
	CodeSee.before({
	  declares: [{
	    filename: "riot|/src/riot.js",
	    loc: "125:13-125:15",
	    name: "__",
	    uid: "4173,4175"
	  }]
	}, _stackFrameId);
	const __ = CodeSee.expr({
	  cssManager: CodeSee.read(cssManager, _stackFrameId, "126:2-126:12", "248,258"),
	  DOMBindings: CodeSee.read(DOMBindings, _stackFrameId, "127:2-127:13", "12,23"),
	  createComponent: CodeSee.read(createComponent, _stackFrameId, "128:2-128:17", "110,125"),
	  defineComponent: CodeSee.read(defineComponent, _stackFrameId, "129:2-129:17", "127,142"),
	  globals: CodeSee.read(globals, _stackFrameId, "130:2-130:9", "64,71")
	}, _stackFrameId, "125:18-131:1");
	CodeSee.after({
	  writes: [{
	    filename: "riot|/src/riot.js",
	    loc: "125:13-125:15",
	    name: "__",
	    uid: "4173,4175",
	    value: __
	  }]
	}, _stackFrameId);
	CodeSee.stackFrameExit(_stackFrameId);

	exports.__ = __;
	exports.component = component;
	exports.install = install;
	exports.mount = mount;
	exports.pure = pure;
	exports.register = register;
	exports.uninstall = uninstall;
	exports.unmount = unmount;
	exports.unregister = unregister;
	exports.version = version;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
