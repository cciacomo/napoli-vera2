(function () {
  const s = document.createElement("link").relList;
  if (s && s.supports && s.supports("modulepreload")) return;
  for (const m of document.querySelectorAll('link[rel="modulepreload"]')) f(m);
  new MutationObserver((m) => {
    for (const p of m)
      if (p.type === "childList")
        for (const v of p.addedNodes)
          v.tagName === "LINK" && v.rel === "modulepreload" && f(v);
  }).observe(document, { childList: !0, subtree: !0 });
  function u(m) {
    const p = {};
    return (
      m.integrity && (p.integrity = m.integrity),
      m.referrerPolicy && (p.referrerPolicy = m.referrerPolicy),
      m.crossOrigin === "use-credentials"
        ? (p.credentials = "include")
        : m.crossOrigin === "anonymous"
          ? (p.credentials = "omit")
          : (p.credentials = "same-origin"),
      p
    );
  }
  function f(m) {
    if (m.ep) return;
    m.ep = !0;
    const p = u(m);
    fetch(m.href, p);
  }
})();
var Xo = { exports: {} },
  _r = {},
  Zo = { exports: {} },
  J = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var sc;
function Qf() {
  if (sc) return J;
  sc = 1;
  var o = Symbol.for("react.element"),
    s = Symbol.for("react.portal"),
    u = Symbol.for("react.fragment"),
    f = Symbol.for("react.strict_mode"),
    m = Symbol.for("react.profiler"),
    p = Symbol.for("react.provider"),
    v = Symbol.for("react.context"),
    E = Symbol.for("react.forward_ref"),
    k = Symbol.for("react.suspense"),
    j = Symbol.for("react.memo"),
    z = Symbol.for("react.lazy"),
    C = Symbol.iterator;
  function D(y) {
    return y === null || typeof y != "object"
      ? null
      : ((y = (C && y[C]) || y["@@iterator"]),
        typeof y == "function" ? y : null);
  }
  var B = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    X = Object.assign,
    O = {};
  function M(y, T, Z) {
    ((this.props = y),
      (this.context = T),
      (this.refs = O),
      (this.updater = Z || B));
  }
  ((M.prototype.isReactComponent = {}),
    (M.prototype.setState = function (y, T) {
      if (typeof y != "object" && typeof y != "function" && y != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, y, T, "setState");
    }),
    (M.prototype.forceUpdate = function (y) {
      this.updater.enqueueForceUpdate(this, y, "forceUpdate");
    }));
  function q() {}
  q.prototype = M.prototype;
  function Y(y, T, Z) {
    ((this.props = y),
      (this.context = T),
      (this.refs = O),
      (this.updater = Z || B));
  }
  var H = (Y.prototype = new q());
  ((H.constructor = Y), X(H, M.prototype), (H.isPureReactComponent = !0));
  var ie = Array.isArray,
    oe = Object.prototype.hasOwnProperty,
    de = { current: null },
    xe = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Ce(y, T, Z) {
    var ee,
      ne = {},
      re = null,
      ue = null;
    if (T != null)
      for (ee in (T.ref !== void 0 && (ue = T.ref),
      T.key !== void 0 && (re = "" + T.key),
      T))
        oe.call(T, ee) && !xe.hasOwnProperty(ee) && (ne[ee] = T[ee]);
    var se = arguments.length - 2;
    if (se === 1) ne.children = Z;
    else if (1 < se) {
      for (var me = Array(se), Ke = 0; Ke < se; Ke++)
        me[Ke] = arguments[Ke + 2];
      ne.children = me;
    }
    if (y && y.defaultProps)
      for (ee in ((se = y.defaultProps), se))
        ne[ee] === void 0 && (ne[ee] = se[ee]);
    return {
      $$typeof: o,
      type: y,
      key: re,
      ref: ue,
      props: ne,
      _owner: de.current,
    };
  }
  function Oe(y, T) {
    return {
      $$typeof: o,
      type: y.type,
      key: T,
      ref: y.ref,
      props: y.props,
      _owner: y._owner,
    };
  }
  function Ae(y) {
    return typeof y == "object" && y !== null && y.$$typeof === o;
  }
  function tn(y) {
    var T = { "=": "=0", ":": "=2" };
    return (
      "$" +
      y.replace(/[=:]/g, function (Z) {
        return T[Z];
      })
    );
  }
  var yt = /\/+/g;
  function Qe(y, T) {
    return typeof y == "object" && y !== null && y.key != null
      ? tn("" + y.key)
      : T.toString(36);
  }
  function ut(y, T, Z, ee, ne) {
    var re = typeof y;
    (re === "undefined" || re === "boolean") && (y = null);
    var ue = !1;
    if (y === null) ue = !0;
    else
      switch (re) {
        case "string":
        case "number":
          ue = !0;
          break;
        case "object":
          switch (y.$$typeof) {
            case o:
            case s:
              ue = !0;
          }
      }
    if (ue)
      return (
        (ue = y),
        (ne = ne(ue)),
        (y = ee === "" ? "." + Qe(ue, 0) : ee),
        ie(ne)
          ? ((Z = ""),
            y != null && (Z = y.replace(yt, "$&/") + "/"),
            ut(ne, T, Z, "", function (Ke) {
              return Ke;
            }))
          : ne != null &&
            (Ae(ne) &&
              (ne = Oe(
                ne,
                Z +
                  (!ne.key || (ue && ue.key === ne.key)
                    ? ""
                    : ("" + ne.key).replace(yt, "$&/") + "/") +
                  y,
              )),
            T.push(ne)),
        1
      );
    if (((ue = 0), (ee = ee === "" ? "." : ee + ":"), ie(y)))
      for (var se = 0; se < y.length; se++) {
        re = y[se];
        var me = ee + Qe(re, se);
        ue += ut(re, T, Z, me, ne);
      }
    else if (((me = D(y)), typeof me == "function"))
      for (y = me.call(y), se = 0; !(re = y.next()).done; )
        ((re = re.value),
          (me = ee + Qe(re, se++)),
          (ue += ut(re, T, Z, me, ne)));
    else if (re === "object")
      throw (
        (T = String(y)),
        Error(
          "Objects are not valid as a React child (found: " +
            (T === "[object Object]"
              ? "object with keys {" + Object.keys(y).join(", ") + "}"
              : T) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    return ue;
  }
  function xt(y, T, Z) {
    if (y == null) return y;
    var ee = [],
      ne = 0;
    return (
      ut(y, ee, "", "", function (re) {
        return T.call(Z, re, ne++);
      }),
      ee
    );
  }
  function We(y) {
    if (y._status === -1) {
      var T = y._result;
      ((T = T()),
        T.then(
          function (Z) {
            (y._status === 0 || y._status === -1) &&
              ((y._status = 1), (y._result = Z));
          },
          function (Z) {
            (y._status === 0 || y._status === -1) &&
              ((y._status = 2), (y._result = Z));
          },
        ),
        y._status === -1 && ((y._status = 0), (y._result = T)));
    }
    if (y._status === 1) return y._result.default;
    throw y._result;
  }
  var we = { current: null },
    I = { transition: null },
    Q = {
      ReactCurrentDispatcher: we,
      ReactCurrentBatchConfig: I,
      ReactCurrentOwner: de,
    };
  function U() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (J.Children = {
      map: xt,
      forEach: function (y, T, Z) {
        xt(
          y,
          function () {
            T.apply(this, arguments);
          },
          Z,
        );
      },
      count: function (y) {
        var T = 0;
        return (
          xt(y, function () {
            T++;
          }),
          T
        );
      },
      toArray: function (y) {
        return (
          xt(y, function (T) {
            return T;
          }) || []
        );
      },
      only: function (y) {
        if (!Ae(y))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return y;
      },
    }),
    (J.Component = M),
    (J.Fragment = u),
    (J.Profiler = m),
    (J.PureComponent = Y),
    (J.StrictMode = f),
    (J.Suspense = k),
    (J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Q),
    (J.act = U),
    (J.cloneElement = function (y, T, Z) {
      if (y == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            y +
            ".",
        );
      var ee = X({}, y.props),
        ne = y.key,
        re = y.ref,
        ue = y._owner;
      if (T != null) {
        if (
          (T.ref !== void 0 && ((re = T.ref), (ue = de.current)),
          T.key !== void 0 && (ne = "" + T.key),
          y.type && y.type.defaultProps)
        )
          var se = y.type.defaultProps;
        for (me in T)
          oe.call(T, me) &&
            !xe.hasOwnProperty(me) &&
            (ee[me] = T[me] === void 0 && se !== void 0 ? se[me] : T[me]);
      }
      var me = arguments.length - 2;
      if (me === 1) ee.children = Z;
      else if (1 < me) {
        se = Array(me);
        for (var Ke = 0; Ke < me; Ke++) se[Ke] = arguments[Ke + 2];
        ee.children = se;
      }
      return {
        $$typeof: o,
        type: y.type,
        key: ne,
        ref: re,
        props: ee,
        _owner: ue,
      };
    }),
    (J.createContext = function (y) {
      return (
        (y = {
          $$typeof: v,
          _currentValue: y,
          _currentValue2: y,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (y.Provider = { $$typeof: p, _context: y }),
        (y.Consumer = y)
      );
    }),
    (J.createElement = Ce),
    (J.createFactory = function (y) {
      var T = Ce.bind(null, y);
      return ((T.type = y), T);
    }),
    (J.createRef = function () {
      return { current: null };
    }),
    (J.forwardRef = function (y) {
      return { $$typeof: E, render: y };
    }),
    (J.isValidElement = Ae),
    (J.lazy = function (y) {
      return { $$typeof: z, _payload: { _status: -1, _result: y }, _init: We };
    }),
    (J.memo = function (y, T) {
      return { $$typeof: j, type: y, compare: T === void 0 ? null : T };
    }),
    (J.startTransition = function (y) {
      var T = I.transition;
      I.transition = {};
      try {
        y();
      } finally {
        I.transition = T;
      }
    }),
    (J.unstable_act = U),
    (J.useCallback = function (y, T) {
      return we.current.useCallback(y, T);
    }),
    (J.useContext = function (y) {
      return we.current.useContext(y);
    }),
    (J.useDebugValue = function () {}),
    (J.useDeferredValue = function (y) {
      return we.current.useDeferredValue(y);
    }),
    (J.useEffect = function (y, T) {
      return we.current.useEffect(y, T);
    }),
    (J.useId = function () {
      return we.current.useId();
    }),
    (J.useImperativeHandle = function (y, T, Z) {
      return we.current.useImperativeHandle(y, T, Z);
    }),
    (J.useInsertionEffect = function (y, T) {
      return we.current.useInsertionEffect(y, T);
    }),
    (J.useLayoutEffect = function (y, T) {
      return we.current.useLayoutEffect(y, T);
    }),
    (J.useMemo = function (y, T) {
      return we.current.useMemo(y, T);
    }),
    (J.useReducer = function (y, T, Z) {
      return we.current.useReducer(y, T, Z);
    }),
    (J.useRef = function (y) {
      return we.current.useRef(y);
    }),
    (J.useState = function (y) {
      return we.current.useState(y);
    }),
    (J.useSyncExternalStore = function (y, T, Z) {
      return we.current.useSyncExternalStore(y, T, Z);
    }),
    (J.useTransition = function () {
      return we.current.useTransition();
    }),
    (J.version = "18.3.1"),
    J
  );
}
var ac;
function ss() {
  return (ac || ((ac = 1), (Zo.exports = Qf())), Zo.exports);
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var uc;
function Kf() {
  if (uc) return _r;
  uc = 1;
  var o = ss(),
    s = Symbol.for("react.element"),
    u = Symbol.for("react.fragment"),
    f = Object.prototype.hasOwnProperty,
    m = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    p = { key: !0, ref: !0, __self: !0, __source: !0 };
  function v(E, k, j) {
    var z,
      C = {},
      D = null,
      B = null;
    (j !== void 0 && (D = "" + j),
      k.key !== void 0 && (D = "" + k.key),
      k.ref !== void 0 && (B = k.ref));
    for (z in k) f.call(k, z) && !p.hasOwnProperty(z) && (C[z] = k[z]);
    if (E && E.defaultProps)
      for (z in ((k = E.defaultProps), k)) C[z] === void 0 && (C[z] = k[z]);
    return {
      $$typeof: s,
      type: E,
      key: D,
      ref: B,
      props: C,
      _owner: m.current,
    };
  }
  return ((_r.Fragment = u), (_r.jsx = v), (_r.jsxs = v), _r);
}
var cc;
function Yf() {
  return (cc || ((cc = 1), (Xo.exports = Kf())), Xo.exports);
}
var c = Yf(),
  Kl = {},
  Jo = { exports: {} },
  qe = {},
  es = { exports: {} },
  ts = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var dc;
function Xf() {
  return (
    dc ||
      ((dc = 1),
      (function (o) {
        function s(I, Q) {
          var U = I.length;
          I.push(Q);
          e: for (; 0 < U; ) {
            var y = (U - 1) >>> 1,
              T = I[y];
            if (0 < m(T, Q)) ((I[y] = Q), (I[U] = T), (U = y));
            else break e;
          }
        }
        function u(I) {
          return I.length === 0 ? null : I[0];
        }
        function f(I) {
          if (I.length === 0) return null;
          var Q = I[0],
            U = I.pop();
          if (U !== Q) {
            I[0] = U;
            e: for (var y = 0, T = I.length, Z = T >>> 1; y < Z; ) {
              var ee = 2 * (y + 1) - 1,
                ne = I[ee],
                re = ee + 1,
                ue = I[re];
              if (0 > m(ne, U))
                re < T && 0 > m(ue, ne)
                  ? ((I[y] = ue), (I[re] = U), (y = re))
                  : ((I[y] = ne), (I[ee] = U), (y = ee));
              else if (re < T && 0 > m(ue, U))
                ((I[y] = ue), (I[re] = U), (y = re));
              else break e;
            }
          }
          return Q;
        }
        function m(I, Q) {
          var U = I.sortIndex - Q.sortIndex;
          return U !== 0 ? U : I.id - Q.id;
        }
        if (
          typeof performance == "object" &&
          typeof performance.now == "function"
        ) {
          var p = performance;
          o.unstable_now = function () {
            return p.now();
          };
        } else {
          var v = Date,
            E = v.now();
          o.unstable_now = function () {
            return v.now() - E;
          };
        }
        var k = [],
          j = [],
          z = 1,
          C = null,
          D = 3,
          B = !1,
          X = !1,
          O = !1,
          M = typeof setTimeout == "function" ? setTimeout : null,
          q = typeof clearTimeout == "function" ? clearTimeout : null,
          Y = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function H(I) {
          for (var Q = u(j); Q !== null; ) {
            if (Q.callback === null) f(j);
            else if (Q.startTime <= I)
              (f(j), (Q.sortIndex = Q.expirationTime), s(k, Q));
            else break;
            Q = u(j);
          }
        }
        function ie(I) {
          if (((O = !1), H(I), !X))
            if (u(k) !== null) ((X = !0), We(oe));
            else {
              var Q = u(j);
              Q !== null && we(ie, Q.startTime - I);
            }
        }
        function oe(I, Q) {
          ((X = !1), O && ((O = !1), q(Ce), (Ce = -1)), (B = !0));
          var U = D;
          try {
            for (
              H(Q), C = u(k);
              C !== null && (!(C.expirationTime > Q) || (I && !tn()));
            ) {
              var y = C.callback;
              if (typeof y == "function") {
                ((C.callback = null), (D = C.priorityLevel));
                var T = y(C.expirationTime <= Q);
                ((Q = o.unstable_now()),
                  typeof T == "function"
                    ? (C.callback = T)
                    : C === u(k) && f(k),
                  H(Q));
              } else f(k);
              C = u(k);
            }
            if (C !== null) var Z = !0;
            else {
              var ee = u(j);
              (ee !== null && we(ie, ee.startTime - Q), (Z = !1));
            }
            return Z;
          } finally {
            ((C = null), (D = U), (B = !1));
          }
        }
        var de = !1,
          xe = null,
          Ce = -1,
          Oe = 5,
          Ae = -1;
        function tn() {
          return !(o.unstable_now() - Ae < Oe);
        }
        function yt() {
          if (xe !== null) {
            var I = o.unstable_now();
            Ae = I;
            var Q = !0;
            try {
              Q = xe(!0, I);
            } finally {
              Q ? Qe() : ((de = !1), (xe = null));
            }
          } else de = !1;
        }
        var Qe;
        if (typeof Y == "function")
          Qe = function () {
            Y(yt);
          };
        else if (typeof MessageChannel < "u") {
          var ut = new MessageChannel(),
            xt = ut.port2;
          ((ut.port1.onmessage = yt),
            (Qe = function () {
              xt.postMessage(null);
            }));
        } else
          Qe = function () {
            M(yt, 0);
          };
        function We(I) {
          ((xe = I), de || ((de = !0), Qe()));
        }
        function we(I, Q) {
          Ce = M(function () {
            I(o.unstable_now());
          }, Q);
        }
        ((o.unstable_IdlePriority = 5),
          (o.unstable_ImmediatePriority = 1),
          (o.unstable_LowPriority = 4),
          (o.unstable_NormalPriority = 3),
          (o.unstable_Profiling = null),
          (o.unstable_UserBlockingPriority = 2),
          (o.unstable_cancelCallback = function (I) {
            I.callback = null;
          }),
          (o.unstable_continueExecution = function () {
            X || B || ((X = !0), We(oe));
          }),
          (o.unstable_forceFrameRate = function (I) {
            0 > I || 125 < I
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (Oe = 0 < I ? Math.floor(1e3 / I) : 5);
          }),
          (o.unstable_getCurrentPriorityLevel = function () {
            return D;
          }),
          (o.unstable_getFirstCallbackNode = function () {
            return u(k);
          }),
          (o.unstable_next = function (I) {
            switch (D) {
              case 1:
              case 2:
              case 3:
                var Q = 3;
                break;
              default:
                Q = D;
            }
            var U = D;
            D = Q;
            try {
              return I();
            } finally {
              D = U;
            }
          }),
          (o.unstable_pauseExecution = function () {}),
          (o.unstable_requestPaint = function () {}),
          (o.unstable_runWithPriority = function (I, Q) {
            switch (I) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                I = 3;
            }
            var U = D;
            D = I;
            try {
              return Q();
            } finally {
              D = U;
            }
          }),
          (o.unstable_scheduleCallback = function (I, Q, U) {
            var y = o.unstable_now();
            switch (
              (typeof U == "object" && U !== null
                ? ((U = U.delay),
                  (U = typeof U == "number" && 0 < U ? y + U : y))
                : (U = y),
              I)
            ) {
              case 1:
                var T = -1;
                break;
              case 2:
                T = 250;
                break;
              case 5:
                T = 1073741823;
                break;
              case 4:
                T = 1e4;
                break;
              default:
                T = 5e3;
            }
            return (
              (T = U + T),
              (I = {
                id: z++,
                callback: Q,
                priorityLevel: I,
                startTime: U,
                expirationTime: T,
                sortIndex: -1,
              }),
              U > y
                ? ((I.sortIndex = U),
                  s(j, I),
                  u(k) === null &&
                    I === u(j) &&
                    (O ? (q(Ce), (Ce = -1)) : (O = !0), we(ie, U - y)))
                : ((I.sortIndex = T), s(k, I), X || B || ((X = !0), We(oe))),
              I
            );
          }),
          (o.unstable_shouldYield = tn),
          (o.unstable_wrapCallback = function (I) {
            var Q = D;
            return function () {
              var U = D;
              D = Q;
              try {
                return I.apply(this, arguments);
              } finally {
                D = U;
              }
            };
          }));
      })(ts)),
    ts
  );
}
var fc;
function Zf() {
  return (fc || ((fc = 1), (es.exports = Xf())), es.exports);
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var pc;
function Jf() {
  if (pc) return qe;
  pc = 1;
  var o = ss(),
    s = Zf();
  function u(e) {
    for (
      var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        n = 1;
      n < arguments.length;
      n++
    )
      t += "&args[]=" + encodeURIComponent(arguments[n]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var f = new Set(),
    m = {};
  function p(e, t) {
    (v(e, t), v(e + "Capture", t));
  }
  function v(e, t) {
    for (m[e] = t, e = 0; e < t.length; e++) f.add(t[e]);
  }
  var E = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    k = Object.prototype.hasOwnProperty,
    j =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    z = {},
    C = {};
  function D(e) {
    return k.call(C, e)
      ? !0
      : k.call(z, e)
        ? !1
        : j.test(e)
          ? (C[e] = !0)
          : ((z[e] = !0), !1);
  }
  function B(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return r
          ? !1
          : n !== null
            ? !n.acceptsBooleans
            : ((e = e.toLowerCase().slice(0, 5)),
              e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function X(e, t, n, r) {
    if (t === null || typeof t > "u" || B(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null)
      switch (n.type) {
        case 3:
          return !t;
        case 4:
          return t === !1;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
    return !1;
  }
  function O(e, t, n, r, l, i, a) {
    ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = r),
      (this.attributeNamespace = l),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = i),
      (this.removeEmptyString = a));
  }
  var M = {};
  ("children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      M[e] = new O(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      M[t] = new O(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(
      function (e) {
        M[e] = new O(e, 2, !1, e.toLowerCase(), null, !1, !1);
      },
    ),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      M[e] = new O(e, 2, !1, e, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        M[e] = new O(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      M[e] = new O(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      M[e] = new O(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      M[e] = new O(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      M[e] = new O(e, 5, !1, e.toLowerCase(), null, !1, !1);
    }));
  var q = /[\-:]([a-z])/g;
  function Y(e) {
    return e[1].toUpperCase();
  }
  ("accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(q, Y);
      M[t] = new O(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(q, Y);
        M[t] = new O(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(q, Y);
      M[t] = new O(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      M[e] = new O(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (M.xlinkHref = new O(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1,
    )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      M[e] = new O(e, 1, !1, e.toLowerCase(), null, !0, !0);
    }));
  function H(e, t, n, r) {
    var l = M.hasOwnProperty(t) ? M[t] : null;
    (l !== null
      ? l.type !== 0
      : r ||
        !(2 < t.length) ||
        (t[0] !== "o" && t[0] !== "O") ||
        (t[1] !== "n" && t[1] !== "N")) &&
      (X(t, n, l, r) && (n = null),
      r || l === null
        ? D(t) &&
          (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
        : l.mustUseProperty
          ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
          : ((t = l.attributeName),
            (r = l.attributeNamespace),
            n === null
              ? e.removeAttribute(t)
              : ((l = l.type),
                (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
                r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var ie = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    oe = Symbol.for("react.element"),
    de = Symbol.for("react.portal"),
    xe = Symbol.for("react.fragment"),
    Ce = Symbol.for("react.strict_mode"),
    Oe = Symbol.for("react.profiler"),
    Ae = Symbol.for("react.provider"),
    tn = Symbol.for("react.context"),
    yt = Symbol.for("react.forward_ref"),
    Qe = Symbol.for("react.suspense"),
    ut = Symbol.for("react.suspense_list"),
    xt = Symbol.for("react.memo"),
    We = Symbol.for("react.lazy"),
    we = Symbol.for("react.offscreen"),
    I = Symbol.iterator;
  function Q(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (I && e[I]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var U = Object.assign,
    y;
  function T(e) {
    if (y === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        y = (t && t[1]) || "";
      }
    return (
      `
` +
      y +
      e
    );
  }
  var Z = !1;
  function ee(e, t) {
    if (!e || Z) return "";
    Z = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (
          ((t = function () {
            throw Error();
          }),
          Object.defineProperty(t.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, []);
          } catch (N) {
            var r = N;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (N) {
            r = N;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (N) {
          r = N;
        }
        e();
      }
    } catch (N) {
      if (N && r && typeof N.stack == "string") {
        for (
          var l = N.stack.split(`
`),
            i = r.stack.split(`
`),
            a = l.length - 1,
            d = i.length - 1;
          1 <= a && 0 <= d && l[a] !== i[d];
        )
          d--;
        for (; 1 <= a && 0 <= d; a--, d--)
          if (l[a] !== i[d]) {
            if (a !== 1 || d !== 1)
              do
                if ((a--, d--, 0 > d || l[a] !== i[d])) {
                  var h =
                    `
` + l[a].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      h.includes("<anonymous>") &&
                      (h = h.replace("<anonymous>", e.displayName)),
                    h
                  );
                }
              while (1 <= a && 0 <= d);
            break;
          }
      }
    } finally {
      ((Z = !1), (Error.prepareStackTrace = n));
    }
    return (e = e ? e.displayName || e.name : "") ? T(e) : "";
  }
  function ne(e) {
    switch (e.tag) {
      case 5:
        return T(e.type);
      case 16:
        return T("Lazy");
      case 13:
        return T("Suspense");
      case 19:
        return T("SuspenseList");
      case 0:
      case 2:
      case 15:
        return ((e = ee(e.type, !1)), e);
      case 11:
        return ((e = ee(e.type.render, !1)), e);
      case 1:
        return ((e = ee(e.type, !0)), e);
      default:
        return "";
    }
  }
  function re(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case xe:
        return "Fragment";
      case de:
        return "Portal";
      case Oe:
        return "Profiler";
      case Ce:
        return "StrictMode";
      case Qe:
        return "Suspense";
      case ut:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case tn:
          return (e.displayName || "Context") + ".Consumer";
        case Ae:
          return (e._context.displayName || "Context") + ".Provider";
        case yt:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case xt:
          return (
            (t = e.displayName || null),
            t !== null ? t : re(e.type) || "Memo"
          );
        case We:
          ((t = e._payload), (e = e._init));
          try {
            return re(e(t));
          } catch {}
      }
    return null;
  }
  function ue(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (e = t.render),
          (e = e.displayName || e.name || ""),
          t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return re(t);
      case 8:
        return t === Ce ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function se(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function me(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function Ke(e) {
    var t = me(e) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      r = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var l = n.get,
        i = n.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return l.call(this);
          },
          set: function (a) {
            ((r = "" + a), i.call(this, a));
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return r;
          },
          setValue: function (a) {
            r = "" + a;
          },
          stopTracking: function () {
            ((e._valueTracker = null), delete e[t]);
          },
        }
      );
    }
  }
  function Ur(e) {
    e._valueTracker || (e._valueTracker = Ke(e));
  }
  function ps(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = "";
    return (
      e && (r = me(e) ? (e.checked ? "true" : "false") : e.value),
      (e = r),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function Hr(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function ri(e, t) {
    var n = t.checked;
    return U({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function ms(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
      r = t.checked != null ? t.checked : t.defaultChecked;
    ((n = se(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
          t.type === "checkbox" || t.type === "radio"
            ? t.checked != null
            : t.value != null,
      }));
  }
  function hs(e, t) {
    ((t = t.checked), t != null && H(e, "checked", t, !1));
  }
  function li(e, t) {
    hs(e, t);
    var n = se(t.value),
      r = t.type;
    if (n != null)
      r === "number"
        ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
        : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    (t.hasOwnProperty("value")
      ? ii(e, t.type, n)
      : t.hasOwnProperty("defaultValue") && ii(e, t.type, se(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked));
  }
  function gs(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (
        !(
          (r !== "submit" && r !== "reset") ||
          (t.value !== void 0 && t.value !== null)
        )
      )
        return;
      ((t = "" + e._wrapperState.initialValue),
        n || t === e.value || (e.value = t),
        (e.defaultValue = t));
    }
    ((n = e.name),
      n !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      n !== "" && (e.name = n));
  }
  function ii(e, t, n) {
    (t !== "number" || Hr(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var Gn = Array.isArray;
  function yn(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {};
      for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++)
        ((l = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== l && (e[n].selected = l),
          l && r && (e[n].defaultSelected = !0));
    } else {
      for (n = "" + se(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          ((e[l].selected = !0), r && (e[l].defaultSelected = !0));
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function oi(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(u(91));
    return U({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function vs(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(u(92));
        if (Gn(n)) {
          if (1 < n.length) throw Error(u(93));
          n = n[0];
        }
        t = n;
      }
      (t == null && (t = ""), (n = t));
    }
    e._wrapperState = { initialValue: se(n) };
  }
  function ys(e, t) {
    var n = se(t.value),
      r = se(t.defaultValue);
    (n != null &&
      ((n = "" + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = "" + r));
  }
  function xs(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== "" &&
      t !== null &&
      (e.value = t);
  }
  function ws(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function si(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? ws(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : e;
  }
  var Wr,
    Ns = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (t, n, r, l) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, n, r, l);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = t;
      else {
        for (
          Wr = Wr || document.createElement("div"),
            Wr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = Wr.firstChild;
          e.firstChild;
        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function qn(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Qn = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    Xc = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Qn).forEach(function (e) {
    Xc.forEach(function (t) {
      ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Qn[t] = Qn[e]));
    });
  });
  function ks(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : n || typeof t != "number" || t === 0 || (Qn.hasOwnProperty(e) && Qn[e])
        ? ("" + t).trim()
        : t + "px";
  }
  function Ss(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0,
          l = ks(n, t[n], r);
        (n === "float" && (n = "cssFloat"),
          r ? e.setProperty(n, l) : (e[n] = l));
      }
  }
  var Zc = U(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    },
  );
  function ai(e, t) {
    if (t) {
      if (Zc[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(u(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(u(60));
        if (
          typeof t.dangerouslySetInnerHTML != "object" ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(u(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(u(62));
    }
  }
  function ui(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var ci = null;
  function di(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var fi = null,
    xn = null,
    wn = null;
  function Es(e) {
    if ((e = gr(e))) {
      if (typeof fi != "function") throw Error(u(280));
      var t = e.stateNode;
      t && ((t = cl(t)), fi(e.stateNode, e.type, t));
    }
  }
  function Cs(e) {
    xn ? (wn ? wn.push(e) : (wn = [e])) : (xn = e);
  }
  function js() {
    if (xn) {
      var e = xn,
        t = wn;
      if (((wn = xn = null), Es(e), t)) for (e = 0; e < t.length; e++) Es(t[e]);
    }
  }
  function Ps(e, t) {
    return e(t);
  }
  function zs() {}
  var pi = !1;
  function Ts(e, t, n) {
    if (pi) return e(t, n);
    pi = !0;
    try {
      return Ps(e, t, n);
    } finally {
      ((pi = !1), (xn !== null || wn !== null) && (zs(), js()));
    }
  }
  function Kn(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = cl(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        ((r = !r.disabled) ||
          ((e = e.type),
          (r = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !r));
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(u(231, t, typeof n));
    return n;
  }
  var mi = !1;
  if (E)
    try {
      var Yn = {};
      (Object.defineProperty(Yn, "passive", {
        get: function () {
          mi = !0;
        },
      }),
        window.addEventListener("test", Yn, Yn),
        window.removeEventListener("test", Yn, Yn));
    } catch {
      mi = !1;
    }
  function Jc(e, t, n, r, l, i, a, d, h) {
    var N = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, N);
    } catch (R) {
      this.onError(R);
    }
  }
  var Xn = !1,
    Vr = null,
    Br = !1,
    hi = null,
    ed = {
      onError: function (e) {
        ((Xn = !0), (Vr = e));
      },
    };
  function td(e, t, n, r, l, i, a, d, h) {
    ((Xn = !1), (Vr = null), Jc.apply(ed, arguments));
  }
  function nd(e, t, n, r, l, i, a, d, h) {
    if ((td.apply(this, arguments), Xn)) {
      if (Xn) {
        var N = Vr;
        ((Xn = !1), (Vr = null));
      } else throw Error(u(198));
      Br || ((Br = !0), (hi = N));
    }
  }
  function nn(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do ((t = e), (t.flags & 4098) !== 0 && (n = t.return), (e = t.return));
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function Rs(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function _s(e) {
    if (nn(e) !== e) throw Error(u(188));
  }
  function rd(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = nn(e)), t === null)) throw Error(u(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var l = n.return;
      if (l === null) break;
      var i = l.alternate;
      if (i === null) {
        if (((r = l.return), r !== null)) {
          n = r;
          continue;
        }
        break;
      }
      if (l.child === i.child) {
        for (i = l.child; i; ) {
          if (i === n) return (_s(l), e);
          if (i === r) return (_s(l), t);
          i = i.sibling;
        }
        throw Error(u(188));
      }
      if (n.return !== r.return) ((n = l), (r = i));
      else {
        for (var a = !1, d = l.child; d; ) {
          if (d === n) {
            ((a = !0), (n = l), (r = i));
            break;
          }
          if (d === r) {
            ((a = !0), (r = l), (n = i));
            break;
          }
          d = d.sibling;
        }
        if (!a) {
          for (d = i.child; d; ) {
            if (d === n) {
              ((a = !0), (n = i), (r = l));
              break;
            }
            if (d === r) {
              ((a = !0), (r = i), (n = l));
              break;
            }
            d = d.sibling;
          }
          if (!a) throw Error(u(189));
        }
      }
      if (n.alternate !== r) throw Error(u(190));
    }
    if (n.tag !== 3) throw Error(u(188));
    return n.stateNode.current === n ? e : t;
  }
  function Ls(e) {
    return ((e = rd(e)), e !== null ? Ds(e) : null);
  }
  function Ds(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = Ds(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Ms = s.unstable_scheduleCallback,
    Is = s.unstable_cancelCallback,
    ld = s.unstable_shouldYield,
    id = s.unstable_requestPaint,
    ke = s.unstable_now,
    od = s.unstable_getCurrentPriorityLevel,
    gi = s.unstable_ImmediatePriority,
    Fs = s.unstable_UserBlockingPriority,
    $r = s.unstable_NormalPriority,
    sd = s.unstable_LowPriority,
    Os = s.unstable_IdlePriority,
    br = null,
    wt = null;
  function ad(e) {
    if (wt && typeof wt.onCommitFiberRoot == "function")
      try {
        wt.onCommitFiberRoot(br, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var ct = Math.clz32 ? Math.clz32 : dd,
    ud = Math.log,
    cd = Math.LN2;
  function dd(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((ud(e) / cd) | 0)) | 0);
  }
  var Gr = 64,
    qr = 4194304;
  function Zn(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function Qr(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
      l = e.suspendedLanes,
      i = e.pingedLanes,
      a = n & 268435455;
    if (a !== 0) {
      var d = a & ~l;
      d !== 0 ? (r = Zn(d)) : ((i &= a), i !== 0 && (r = Zn(i)));
    } else ((a = n & ~l), a !== 0 ? (r = Zn(a)) : i !== 0 && (r = Zn(i)));
    if (r === 0) return 0;
    if (
      t !== 0 &&
      t !== r &&
      (t & l) === 0 &&
      ((l = r & -r), (i = t & -t), l >= i || (l === 16 && (i & 4194240) !== 0))
    )
      return t;
    if (((r & 4) !== 0 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= r; 0 < t; )
        ((n = 31 - ct(t)), (l = 1 << n), (r |= e[n]), (t &= ~l));
    return r;
  }
  function fd(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function pd(e, t) {
    for (
      var n = e.suspendedLanes,
        r = e.pingedLanes,
        l = e.expirationTimes,
        i = e.pendingLanes;
      0 < i;
    ) {
      var a = 31 - ct(i),
        d = 1 << a,
        h = l[a];
      (h === -1
        ? ((d & n) === 0 || (d & r) !== 0) && (l[a] = fd(d, t))
        : h <= t && (e.expiredLanes |= d),
        (i &= ~d));
    }
  }
  function vi(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function As() {
    var e = Gr;
    return ((Gr <<= 1), (Gr & 4194240) === 0 && (Gr = 64), e);
  }
  function yi(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Jn(e, t, n) {
    ((e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - ct(t)),
      (e[t] = n));
  }
  function md(e, t) {
    var n = e.pendingLanes & ~t;
    ((e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements));
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - ct(n),
        i = 1 << l;
      ((t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i));
    }
  }
  function xi(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var r = 31 - ct(n),
        l = 1 << r;
      ((l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l));
    }
  }
  var ae = 0;
  function Us(e) {
    return (
      (e &= -e),
      1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1
    );
  }
  var Hs,
    wi,
    Ws,
    Vs,
    Bs,
    Ni = !1,
    Kr = [],
    Ft = null,
    Ot = null,
    At = null,
    er = new Map(),
    tr = new Map(),
    Ut = [],
    hd =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " ",
      );
  function $s(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Ft = null;
        break;
      case "dragenter":
      case "dragleave":
        Ot = null;
        break;
      case "mouseover":
      case "mouseout":
        At = null;
        break;
      case "pointerover":
      case "pointerout":
        er.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        tr.delete(t.pointerId);
    }
  }
  function nr(e, t, n, r, l, i) {
    return e === null || e.nativeEvent !== i
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: i,
          targetContainers: [l],
        }),
        t !== null && ((t = gr(t)), t !== null && wi(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        l !== null && t.indexOf(l) === -1 && t.push(l),
        e);
  }
  function gd(e, t, n, r, l) {
    switch (t) {
      case "focusin":
        return ((Ft = nr(Ft, e, t, n, r, l)), !0);
      case "dragenter":
        return ((Ot = nr(Ot, e, t, n, r, l)), !0);
      case "mouseover":
        return ((At = nr(At, e, t, n, r, l)), !0);
      case "pointerover":
        var i = l.pointerId;
        return (er.set(i, nr(er.get(i) || null, e, t, n, r, l)), !0);
      case "gotpointercapture":
        return (
          (i = l.pointerId),
          tr.set(i, nr(tr.get(i) || null, e, t, n, r, l)),
          !0
        );
    }
    return !1;
  }
  function bs(e) {
    var t = rn(e.target);
    if (t !== null) {
      var n = nn(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = Rs(n)), t !== null)) {
            ((e.blockedOn = t),
              Bs(e.priority, function () {
                Ws(n);
              }));
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Yr(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Si(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        ((ci = r), n.target.dispatchEvent(r), (ci = null));
      } else return ((t = gr(n)), t !== null && wi(t), (e.blockedOn = n), !1);
      t.shift();
    }
    return !0;
  }
  function Gs(e, t, n) {
    Yr(e) && n.delete(t);
  }
  function vd() {
    ((Ni = !1),
      Ft !== null && Yr(Ft) && (Ft = null),
      Ot !== null && Yr(Ot) && (Ot = null),
      At !== null && Yr(At) && (At = null),
      er.forEach(Gs),
      tr.forEach(Gs));
  }
  function rr(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Ni ||
        ((Ni = !0),
        s.unstable_scheduleCallback(s.unstable_NormalPriority, vd)));
  }
  function lr(e) {
    function t(l) {
      return rr(l, e);
    }
    if (0 < Kr.length) {
      rr(Kr[0], e);
      for (var n = 1; n < Kr.length; n++) {
        var r = Kr[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      Ft !== null && rr(Ft, e),
        Ot !== null && rr(Ot, e),
        At !== null && rr(At, e),
        er.forEach(t),
        tr.forEach(t),
        n = 0;
      n < Ut.length;
      n++
    )
      ((r = Ut[n]), r.blockedOn === e && (r.blockedOn = null));
    for (; 0 < Ut.length && ((n = Ut[0]), n.blockedOn === null); )
      (bs(n), n.blockedOn === null && Ut.shift());
  }
  var Nn = ie.ReactCurrentBatchConfig,
    Xr = !0;
  function yd(e, t, n, r) {
    var l = ae,
      i = Nn.transition;
    Nn.transition = null;
    try {
      ((ae = 1), ki(e, t, n, r));
    } finally {
      ((ae = l), (Nn.transition = i));
    }
  }
  function xd(e, t, n, r) {
    var l = ae,
      i = Nn.transition;
    Nn.transition = null;
    try {
      ((ae = 4), ki(e, t, n, r));
    } finally {
      ((ae = l), (Nn.transition = i));
    }
  }
  function ki(e, t, n, r) {
    if (Xr) {
      var l = Si(e, t, n, r);
      if (l === null) (Hi(e, t, r, Zr, n), $s(e, r));
      else if (gd(l, e, t, n, r)) r.stopPropagation();
      else if (($s(e, r), t & 4 && -1 < hd.indexOf(e))) {
        for (; l !== null; ) {
          var i = gr(l);
          if (
            (i !== null && Hs(i),
            (i = Si(e, t, n, r)),
            i === null && Hi(e, t, r, Zr, n),
            i === l)
          )
            break;
          l = i;
        }
        l !== null && r.stopPropagation();
      } else Hi(e, t, r, null, n);
    }
  }
  var Zr = null;
  function Si(e, t, n, r) {
    if (((Zr = null), (e = di(r)), (e = rn(e)), e !== null))
      if (((t = nn(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = Rs(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return ((Zr = e), null);
  }
  function qs(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (od()) {
          case gi:
            return 1;
          case Fs:
            return 4;
          case $r:
          case sd:
            return 16;
          case Os:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Ht = null,
    Ei = null,
    Jr = null;
  function Qs() {
    if (Jr) return Jr;
    var e,
      t = Ei,
      n = t.length,
      r,
      l = "value" in Ht ? Ht.value : Ht.textContent,
      i = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var a = n - e;
    for (r = 1; r <= a && t[n - r] === l[i - r]; r++);
    return (Jr = l.slice(e, 1 < r ? 1 - r : void 0));
  }
  function el(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function tl() {
    return !0;
  }
  function Ks() {
    return !1;
  }
  function Ye(e) {
    function t(n, r, l, i, a) {
      ((this._reactName = n),
        (this._targetInst = l),
        (this.type = r),
        (this.nativeEvent = i),
        (this.target = a),
        (this.currentTarget = null));
      for (var d in e)
        e.hasOwnProperty(d) && ((n = e[d]), (this[d] = n ? n(i) : i[d]));
      return (
        (this.isDefaultPrevented = (
          i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
        )
          ? tl
          : Ks),
        (this.isPropagationStopped = Ks),
        this
      );
    }
    return (
      U(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = tl));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = tl));
        },
        persist: function () {},
        isPersistent: tl,
      }),
      t
    );
  }
  var kn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Ci = Ye(kn),
    ir = U({}, kn, { view: 0, detail: 0 }),
    wd = Ye(ir),
    ji,
    Pi,
    or,
    nl = U({}, ir, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Ti,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== or &&
              (or && e.type === "mousemove"
                ? ((ji = e.screenX - or.screenX), (Pi = e.screenY - or.screenY))
                : (Pi = ji = 0),
              (or = e)),
            ji);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : Pi;
      },
    }),
    Ys = Ye(nl),
    Nd = U({}, nl, { dataTransfer: 0 }),
    kd = Ye(Nd),
    Sd = U({}, ir, { relatedTarget: 0 }),
    zi = Ye(Sd),
    Ed = U({}, kn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Cd = Ye(Ed),
    jd = U({}, kn, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Pd = Ye(jd),
    zd = U({}, kn, { data: 0 }),
    Xs = Ye(zd),
    Td = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    Rd = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    _d = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function Ld(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = _d[e])
        ? !!t[e]
        : !1;
  }
  function Ti() {
    return Ld;
  }
  var Dd = U({}, ir, {
      key: function (e) {
        if (e.key) {
          var t = Td[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = el(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? Rd[e.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Ti,
      charCode: function (e) {
        return e.type === "keypress" ? el(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? el(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
    }),
    Md = Ye(Dd),
    Id = U({}, nl, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Zs = Ye(Id),
    Fd = U({}, ir, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Ti,
    }),
    Od = Ye(Fd),
    Ad = U({}, kn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Ud = Ye(Ad),
    Hd = U({}, nl, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
            ? -e.wheelDeltaX
            : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
            ? -e.wheelDeltaY
            : "wheelDelta" in e
              ? -e.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Wd = Ye(Hd),
    Vd = [9, 13, 27, 32],
    Ri = E && "CompositionEvent" in window,
    sr = null;
  E && "documentMode" in document && (sr = document.documentMode);
  var Bd = E && "TextEvent" in window && !sr,
    Js = E && (!Ri || (sr && 8 < sr && 11 >= sr)),
    ea = " ",
    ta = !1;
  function na(e, t) {
    switch (e) {
      case "keyup":
        return Vd.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function ra(e) {
    return (
      (e = e.detail),
      typeof e == "object" && "data" in e ? e.data : null
    );
  }
  var Sn = !1;
  function $d(e, t) {
    switch (e) {
      case "compositionend":
        return ra(t);
      case "keypress":
        return t.which !== 32 ? null : ((ta = !0), ea);
      case "textInput":
        return ((e = t.data), e === ea && ta ? null : e);
      default:
        return null;
    }
  }
  function bd(e, t) {
    if (Sn)
      return e === "compositionend" || (!Ri && na(e, t))
        ? ((e = Qs()), (Jr = Ei = Ht = null), (Sn = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Js && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Gd = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function la(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Gd[e.type] : t === "textarea";
  }
  function ia(e, t, n, r) {
    (Cs(r),
      (t = sl(t, "onChange")),
      0 < t.length &&
        ((n = new Ci("onChange", "change", null, n, r)),
        e.push({ event: n, listeners: t })));
  }
  var ar = null,
    ur = null;
  function qd(e) {
    Sa(e, 0);
  }
  function rl(e) {
    var t = zn(e);
    if (ps(t)) return e;
  }
  function Qd(e, t) {
    if (e === "change") return t;
  }
  var oa = !1;
  if (E) {
    var _i;
    if (E) {
      var Li = "oninput" in document;
      if (!Li) {
        var sa = document.createElement("div");
        (sa.setAttribute("oninput", "return;"),
          (Li = typeof sa.oninput == "function"));
      }
      _i = Li;
    } else _i = !1;
    oa = _i && (!document.documentMode || 9 < document.documentMode);
  }
  function aa() {
    ar && (ar.detachEvent("onpropertychange", ua), (ur = ar = null));
  }
  function ua(e) {
    if (e.propertyName === "value" && rl(ur)) {
      var t = [];
      (ia(t, ur, e, di(e)), Ts(qd, t));
    }
  }
  function Kd(e, t, n) {
    e === "focusin"
      ? (aa(), (ar = t), (ur = n), ar.attachEvent("onpropertychange", ua))
      : e === "focusout" && aa();
  }
  function Yd(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return rl(ur);
  }
  function Xd(e, t) {
    if (e === "click") return rl(t);
  }
  function Zd(e, t) {
    if (e === "input" || e === "change") return rl(t);
  }
  function Jd(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var dt = typeof Object.is == "function" ? Object.is : Jd;
  function cr(e, t) {
    if (dt(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var l = n[r];
      if (!k.call(t, l) || !dt(e[l], t[l])) return !1;
    }
    return !0;
  }
  function ca(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function da(e, t) {
    var n = ca(e);
    e = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (((r = e + n.textContent.length), e <= t && r >= t))
          return { node: n, offset: t - e };
        e = r;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = ca(n);
    }
  }
  function fa(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? fa(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function pa() {
    for (var e = window, t = Hr(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Hr(e.document);
    }
    return t;
  }
  function Di(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  function ef(e) {
    var t = pa(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (
      t !== n &&
      n &&
      n.ownerDocument &&
      fa(n.ownerDocument.documentElement, n)
    ) {
      if (r !== null && Di(n)) {
        if (
          ((t = r.start),
          (e = r.end),
          e === void 0 && (e = t),
          "selectionStart" in n)
        )
          ((n.selectionStart = t),
            (n.selectionEnd = Math.min(e, n.value.length)));
        else if (
          ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var l = n.textContent.length,
            i = Math.min(r.start, l);
          ((r = r.end === void 0 ? i : Math.min(r.end, l)),
            !e.extend && i > r && ((l = r), (r = i), (i = l)),
            (l = da(n, i)));
          var a = da(n, r);
          l &&
            a &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== l.node ||
              e.anchorOffset !== l.offset ||
              e.focusNode !== a.node ||
              e.focusOffset !== a.offset) &&
            ((t = t.createRange()),
            t.setStart(l.node, l.offset),
            e.removeAllRanges(),
            i > r
              ? (e.addRange(t), e.extend(a.node, a.offset))
              : (t.setEnd(a.node, a.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; (e = e.parentNode); )
        e.nodeType === 1 &&
          t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
        ((e = t[n]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top));
    }
  }
  var tf = E && "documentMode" in document && 11 >= document.documentMode,
    En = null,
    Mi = null,
    dr = null,
    Ii = !1;
  function ma(e, t, n) {
    var r =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Ii ||
      En == null ||
      En !== Hr(r) ||
      ((r = En),
      "selectionStart" in r && Di(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = (
            (r.ownerDocument && r.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (dr && cr(dr, r)) ||
        ((dr = r),
        (r = sl(Mi, "onSelect")),
        0 < r.length &&
          ((t = new Ci("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = En))));
  }
  function ll(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var Cn = {
      animationend: ll("Animation", "AnimationEnd"),
      animationiteration: ll("Animation", "AnimationIteration"),
      animationstart: ll("Animation", "AnimationStart"),
      transitionend: ll("Transition", "TransitionEnd"),
    },
    Fi = {},
    ha = {};
  E &&
    ((ha = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Cn.animationend.animation,
      delete Cn.animationiteration.animation,
      delete Cn.animationstart.animation),
    "TransitionEvent" in window || delete Cn.transitionend.transition);
  function il(e) {
    if (Fi[e]) return Fi[e];
    if (!Cn[e]) return e;
    var t = Cn[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in ha) return (Fi[e] = t[n]);
    return e;
  }
  var ga = il("animationend"),
    va = il("animationiteration"),
    ya = il("animationstart"),
    xa = il("transitionend"),
    wa = new Map(),
    Na =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  function Wt(e, t) {
    (wa.set(e, t), p(t, [e]));
  }
  for (var Oi = 0; Oi < Na.length; Oi++) {
    var Ai = Na[Oi],
      nf = Ai.toLowerCase(),
      rf = Ai[0].toUpperCase() + Ai.slice(1);
    Wt(nf, "on" + rf);
  }
  (Wt(ga, "onAnimationEnd"),
    Wt(va, "onAnimationIteration"),
    Wt(ya, "onAnimationStart"),
    Wt("dblclick", "onDoubleClick"),
    Wt("focusin", "onFocus"),
    Wt("focusout", "onBlur"),
    Wt(xa, "onTransitionEnd"),
    v("onMouseEnter", ["mouseout", "mouseover"]),
    v("onMouseLeave", ["mouseout", "mouseover"]),
    v("onPointerEnter", ["pointerout", "pointerover"]),
    v("onPointerLeave", ["pointerout", "pointerover"]),
    p(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    p(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    p("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    p(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    p(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    p(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var fr =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    lf = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(fr),
    );
  function ka(e, t, n) {
    var r = e.type || "unknown-event";
    ((e.currentTarget = n), nd(r, t, void 0, e), (e.currentTarget = null));
  }
  function Sa(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        l = r.event;
      r = r.listeners;
      e: {
        var i = void 0;
        if (t)
          for (var a = r.length - 1; 0 <= a; a--) {
            var d = r[a],
              h = d.instance,
              N = d.currentTarget;
            if (((d = d.listener), h !== i && l.isPropagationStopped()))
              break e;
            (ka(l, d, N), (i = h));
          }
        else
          for (a = 0; a < r.length; a++) {
            if (
              ((d = r[a]),
              (h = d.instance),
              (N = d.currentTarget),
              (d = d.listener),
              h !== i && l.isPropagationStopped())
            )
              break e;
            (ka(l, d, N), (i = h));
          }
      }
    }
    if (Br) throw ((e = hi), (Br = !1), (hi = null), e);
  }
  function fe(e, t) {
    var n = t[Gi];
    n === void 0 && (n = t[Gi] = new Set());
    var r = e + "__bubble";
    n.has(r) || (Ea(t, e, 2, !1), n.add(r));
  }
  function Ui(e, t, n) {
    var r = 0;
    (t && (r |= 4), Ea(n, e, r, t));
  }
  var ol = "_reactListening" + Math.random().toString(36).slice(2);
  function pr(e) {
    if (!e[ol]) {
      ((e[ol] = !0),
        f.forEach(function (n) {
          n !== "selectionchange" && (lf.has(n) || Ui(n, !1, e), Ui(n, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[ol] || ((t[ol] = !0), Ui("selectionchange", !1, t));
    }
  }
  function Ea(e, t, n, r) {
    switch (qs(t)) {
      case 1:
        var l = yd;
        break;
      case 4:
        l = xd;
        break;
      default:
        l = ki;
    }
    ((n = l.bind(null, t, n, e)),
      (l = void 0),
      !mi ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (l = !0),
      r
        ? l !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: l })
          : e.addEventListener(t, n, !0)
        : l !== void 0
          ? e.addEventListener(t, n, { passive: l })
          : e.addEventListener(t, n, !1));
  }
  function Hi(e, t, n, r, l) {
    var i = r;
    if ((t & 1) === 0 && (t & 2) === 0 && r !== null)
      e: for (;;) {
        if (r === null) return;
        var a = r.tag;
        if (a === 3 || a === 4) {
          var d = r.stateNode.containerInfo;
          if (d === l || (d.nodeType === 8 && d.parentNode === l)) break;
          if (a === 4)
            for (a = r.return; a !== null; ) {
              var h = a.tag;
              if (
                (h === 3 || h === 4) &&
                ((h = a.stateNode.containerInfo),
                h === l || (h.nodeType === 8 && h.parentNode === l))
              )
                return;
              a = a.return;
            }
          for (; d !== null; ) {
            if (((a = rn(d)), a === null)) return;
            if (((h = a.tag), h === 5 || h === 6)) {
              r = i = a;
              continue e;
            }
            d = d.parentNode;
          }
        }
        r = r.return;
      }
    Ts(function () {
      var N = i,
        R = di(n),
        _ = [];
      e: {
        var P = wa.get(e);
        if (P !== void 0) {
          var F = Ci,
            W = e;
          switch (e) {
            case "keypress":
              if (el(n) === 0) break e;
            case "keydown":
            case "keyup":
              F = Md;
              break;
            case "focusin":
              ((W = "focus"), (F = zi));
              break;
            case "focusout":
              ((W = "blur"), (F = zi));
              break;
            case "beforeblur":
            case "afterblur":
              F = zi;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              F = Ys;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              F = kd;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              F = Od;
              break;
            case ga:
            case va:
            case ya:
              F = Cd;
              break;
            case xa:
              F = Ud;
              break;
            case "scroll":
              F = wd;
              break;
            case "wheel":
              F = Wd;
              break;
            case "copy":
            case "cut":
            case "paste":
              F = Pd;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              F = Zs;
          }
          var V = (t & 4) !== 0,
            Se = !V && e === "scroll",
            x = V ? (P !== null ? P + "Capture" : null) : P;
          V = [];
          for (var g = N, w; g !== null; ) {
            w = g;
            var L = w.stateNode;
            if (
              (w.tag === 5 &&
                L !== null &&
                ((w = L),
                x !== null &&
                  ((L = Kn(g, x)), L != null && V.push(mr(g, L, w)))),
              Se)
            )
              break;
            g = g.return;
          }
          0 < V.length &&
            ((P = new F(P, W, null, n, R)), _.push({ event: P, listeners: V }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((P = e === "mouseover" || e === "pointerover"),
            (F = e === "mouseout" || e === "pointerout"),
            P &&
              n !== ci &&
              (W = n.relatedTarget || n.fromElement) &&
              (rn(W) || W[Ct]))
          )
            break e;
          if (
            (F || P) &&
            ((P =
              R.window === R
                ? R
                : (P = R.ownerDocument)
                  ? P.defaultView || P.parentWindow
                  : window),
            F
              ? ((W = n.relatedTarget || n.toElement),
                (F = N),
                (W = W ? rn(W) : null),
                W !== null &&
                  ((Se = nn(W)), W !== Se || (W.tag !== 5 && W.tag !== 6)) &&
                  (W = null))
              : ((F = null), (W = N)),
            F !== W)
          ) {
            if (
              ((V = Ys),
              (L = "onMouseLeave"),
              (x = "onMouseEnter"),
              (g = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((V = Zs),
                (L = "onPointerLeave"),
                (x = "onPointerEnter"),
                (g = "pointer")),
              (Se = F == null ? P : zn(F)),
              (w = W == null ? P : zn(W)),
              (P = new V(L, g + "leave", F, n, R)),
              (P.target = Se),
              (P.relatedTarget = w),
              (L = null),
              rn(R) === N &&
                ((V = new V(x, g + "enter", W, n, R)),
                (V.target = w),
                (V.relatedTarget = Se),
                (L = V)),
              (Se = L),
              F && W)
            )
              t: {
                for (V = F, x = W, g = 0, w = V; w; w = jn(w)) g++;
                for (w = 0, L = x; L; L = jn(L)) w++;
                for (; 0 < g - w; ) ((V = jn(V)), g--);
                for (; 0 < w - g; ) ((x = jn(x)), w--);
                for (; g--; ) {
                  if (V === x || (x !== null && V === x.alternate)) break t;
                  ((V = jn(V)), (x = jn(x)));
                }
                V = null;
              }
            else V = null;
            (F !== null && Ca(_, P, F, V, !1),
              W !== null && Se !== null && Ca(_, Se, W, V, !0));
          }
        }
        e: {
          if (
            ((P = N ? zn(N) : window),
            (F = P.nodeName && P.nodeName.toLowerCase()),
            F === "select" || (F === "input" && P.type === "file"))
          )
            var $ = Qd;
          else if (la(P))
            if (oa) $ = Zd;
            else {
              $ = Yd;
              var b = Kd;
            }
          else
            (F = P.nodeName) &&
              F.toLowerCase() === "input" &&
              (P.type === "checkbox" || P.type === "radio") &&
              ($ = Xd);
          if ($ && ($ = $(e, N))) {
            ia(_, $, n, R);
            break e;
          }
          (b && b(e, P, N),
            e === "focusout" &&
              (b = P._wrapperState) &&
              b.controlled &&
              P.type === "number" &&
              ii(P, "number", P.value));
        }
        switch (((b = N ? zn(N) : window), e)) {
          case "focusin":
            (la(b) || b.contentEditable === "true") &&
              ((En = b), (Mi = N), (dr = null));
            break;
          case "focusout":
            dr = Mi = En = null;
            break;
          case "mousedown":
            Ii = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((Ii = !1), ma(_, n, R));
            break;
          case "selectionchange":
            if (tf) break;
          case "keydown":
          case "keyup":
            ma(_, n, R);
        }
        var G;
        if (Ri)
          e: {
            switch (e) {
              case "compositionstart":
                var K = "onCompositionStart";
                break e;
              case "compositionend":
                K = "onCompositionEnd";
                break e;
              case "compositionupdate":
                K = "onCompositionUpdate";
                break e;
            }
            K = void 0;
          }
        else
          Sn
            ? na(e, n) && (K = "onCompositionEnd")
            : e === "keydown" &&
              n.keyCode === 229 &&
              (K = "onCompositionStart");
        (K &&
          (Js &&
            n.locale !== "ko" &&
            (Sn || K !== "onCompositionStart"
              ? K === "onCompositionEnd" && Sn && (G = Qs())
              : ((Ht = R),
                (Ei = "value" in Ht ? Ht.value : Ht.textContent),
                (Sn = !0))),
          (b = sl(N, K)),
          0 < b.length &&
            ((K = new Xs(K, e, null, n, R)),
            _.push({ event: K, listeners: b }),
            G ? (K.data = G) : ((G = ra(n)), G !== null && (K.data = G)))),
          (G = Bd ? $d(e, n) : bd(e, n)) &&
            ((N = sl(N, "onBeforeInput")),
            0 < N.length &&
              ((R = new Xs("onBeforeInput", "beforeinput", null, n, R)),
              _.push({ event: R, listeners: N }),
              (R.data = G))));
      }
      Sa(_, t);
    });
  }
  function mr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function sl(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var l = e,
        i = l.stateNode;
      (l.tag === 5 &&
        i !== null &&
        ((l = i),
        (i = Kn(e, n)),
        i != null && r.unshift(mr(e, i, l)),
        (i = Kn(e, t)),
        i != null && r.push(mr(e, i, l))),
        (e = e.return));
    }
    return r;
  }
  function jn(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Ca(e, t, n, r, l) {
    for (var i = t._reactName, a = []; n !== null && n !== r; ) {
      var d = n,
        h = d.alternate,
        N = d.stateNode;
      if (h !== null && h === r) break;
      (d.tag === 5 &&
        N !== null &&
        ((d = N),
        l
          ? ((h = Kn(n, i)), h != null && a.unshift(mr(n, h, d)))
          : l || ((h = Kn(n, i)), h != null && a.push(mr(n, h, d)))),
        (n = n.return));
    }
    a.length !== 0 && e.push({ event: t, listeners: a });
  }
  var of = /\r\n?/g,
    sf = /\u0000|\uFFFD/g;
  function ja(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        of,
        `
`,
      )
      .replace(sf, "");
  }
  function al(e, t, n) {
    if (((t = ja(t)), ja(e) !== t && n)) throw Error(u(425));
  }
  function ul() {}
  var Wi = null,
    Vi = null;
  function Bi(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var $i = typeof setTimeout == "function" ? setTimeout : void 0,
    af = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Pa = typeof Promise == "function" ? Promise : void 0,
    uf =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Pa < "u"
          ? function (e) {
              return Pa.resolve(null).then(e).catch(cf);
            }
          : $i;
  function cf(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function bi(e, t) {
    var n = t,
      r = 0;
    do {
      var l = n.nextSibling;
      if ((e.removeChild(n), l && l.nodeType === 8))
        if (((n = l.data), n === "/$")) {
          if (r === 0) {
            (e.removeChild(l), lr(t));
            return;
          }
          r--;
        } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
      n = l;
    } while (n);
    lr(t);
  }
  function Vt(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function za(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0) return e;
          t--;
        } else n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var Pn = Math.random().toString(36).slice(2),
    Nt = "__reactFiber$" + Pn,
    hr = "__reactProps$" + Pn,
    Ct = "__reactContainer$" + Pn,
    Gi = "__reactEvents$" + Pn,
    df = "__reactListeners$" + Pn,
    ff = "__reactHandles$" + Pn;
  function rn(e) {
    var t = e[Nt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[Ct] || n[Nt])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = za(e); e !== null; ) {
            if ((n = e[Nt])) return n;
            e = za(e);
          }
        return t;
      }
      ((e = n), (n = e.parentNode));
    }
    return null;
  }
  function gr(e) {
    return (
      (e = e[Nt] || e[Ct]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function zn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(u(33));
  }
  function cl(e) {
    return e[hr] || null;
  }
  var qi = [],
    Tn = -1;
  function Bt(e) {
    return { current: e };
  }
  function pe(e) {
    0 > Tn || ((e.current = qi[Tn]), (qi[Tn] = null), Tn--);
  }
  function ce(e, t) {
    (Tn++, (qi[Tn] = e.current), (e.current = t));
  }
  var $t = {},
    De = Bt($t),
    Ve = Bt(!1),
    ln = $t;
  function Rn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return $t;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
      return r.__reactInternalMemoizedMaskedChildContext;
    var l = {},
      i;
    for (i in n) l[i] = t[i];
    return (
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = l)),
      l
    );
  }
  function Be(e) {
    return ((e = e.childContextTypes), e != null);
  }
  function dl() {
    (pe(Ve), pe(De));
  }
  function Ta(e, t, n) {
    if (De.current !== $t) throw Error(u(168));
    (ce(De, t), ce(Ve, n));
  }
  function Ra(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
      return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(u(108, ue(e) || "Unknown", l));
    return U({}, n, r);
  }
  function fl(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        $t),
      (ln = De.current),
      ce(De, e),
      ce(Ve, Ve.current),
      !0
    );
  }
  function _a(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(u(169));
    (n
      ? ((e = Ra(e, t, ln)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        pe(Ve),
        pe(De),
        ce(De, e))
      : pe(Ve),
      ce(Ve, n));
  }
  var jt = null,
    pl = !1,
    Qi = !1;
  function La(e) {
    jt === null ? (jt = [e]) : jt.push(e);
  }
  function pf(e) {
    ((pl = !0), La(e));
  }
  function bt() {
    if (!Qi && jt !== null) {
      Qi = !0;
      var e = 0,
        t = ae;
      try {
        var n = jt;
        for (ae = 1; e < n.length; e++) {
          var r = n[e];
          do r = r(!0);
          while (r !== null);
        }
        ((jt = null), (pl = !1));
      } catch (l) {
        throw (jt !== null && (jt = jt.slice(e + 1)), Ms(gi, bt), l);
      } finally {
        ((ae = t), (Qi = !1));
      }
    }
    return null;
  }
  var _n = [],
    Ln = 0,
    ml = null,
    hl = 0,
    et = [],
    tt = 0,
    on = null,
    Pt = 1,
    zt = "";
  function sn(e, t) {
    ((_n[Ln++] = hl), (_n[Ln++] = ml), (ml = e), (hl = t));
  }
  function Da(e, t, n) {
    ((et[tt++] = Pt), (et[tt++] = zt), (et[tt++] = on), (on = e));
    var r = Pt;
    e = zt;
    var l = 32 - ct(r) - 1;
    ((r &= ~(1 << l)), (n += 1));
    var i = 32 - ct(t) + l;
    if (30 < i) {
      var a = l - (l % 5);
      ((i = (r & ((1 << a) - 1)).toString(32)),
        (r >>= a),
        (l -= a),
        (Pt = (1 << (32 - ct(t) + l)) | (n << l) | r),
        (zt = i + e));
    } else ((Pt = (1 << i) | (n << l) | r), (zt = e));
  }
  function Ki(e) {
    e.return !== null && (sn(e, 1), Da(e, 1, 0));
  }
  function Yi(e) {
    for (; e === ml; )
      ((ml = _n[--Ln]), (_n[Ln] = null), (hl = _n[--Ln]), (_n[Ln] = null));
    for (; e === on; )
      ((on = et[--tt]),
        (et[tt] = null),
        (zt = et[--tt]),
        (et[tt] = null),
        (Pt = et[--tt]),
        (et[tt] = null));
  }
  var Xe = null,
    Ze = null,
    he = !1,
    ft = null;
  function Ma(e, t) {
    var n = it(5, null, null, 0);
    ((n.elementType = "DELETED"),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
  }
  function Ia(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (t =
            t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (Xe = e), (Ze = Vt(t.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (Xe = e), (Ze = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = on !== null ? { id: Pt, overflow: zt } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824,
              }),
              (n = it(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (Xe = e),
              (Ze = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function Xi(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Zi(e) {
    if (he) {
      var t = Ze;
      if (t) {
        var n = t;
        if (!Ia(e, t)) {
          if (Xi(e)) throw Error(u(418));
          t = Vt(n.nextSibling);
          var r = Xe;
          t && Ia(e, t)
            ? Ma(r, n)
            : ((e.flags = (e.flags & -4097) | 2), (he = !1), (Xe = e));
        }
      } else {
        if (Xi(e)) throw Error(u(418));
        ((e.flags = (e.flags & -4097) | 2), (he = !1), (Xe = e));
      }
    }
  }
  function Fa(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;
    )
      e = e.return;
    Xe = e;
  }
  function gl(e) {
    if (e !== Xe) return !1;
    if (!he) return (Fa(e), (he = !0), !1);
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== "head" && t !== "body" && !Bi(e.type, e.memoizedProps))),
      t && (t = Ze))
    ) {
      if (Xi(e)) throw (Oa(), Error(u(418)));
      for (; t; ) (Ma(e, t), (t = Vt(t.nextSibling)));
    }
    if ((Fa(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(u(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                Ze = Vt(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        Ze = null;
      }
    } else Ze = Xe ? Vt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Oa() {
    for (var e = Ze; e; ) e = Vt(e.nextSibling);
  }
  function Dn() {
    ((Ze = Xe = null), (he = !1));
  }
  function Ji(e) {
    ft === null ? (ft = [e]) : ft.push(e);
  }
  var mf = ie.ReactCurrentBatchConfig;
  function vr(e, t, n) {
    if (
      ((e = n.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (n._owner) {
        if (((n = n._owner), n)) {
          if (n.tag !== 1) throw Error(u(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(u(147, e));
        var l = r,
          i = "" + e;
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == "function" &&
          t.ref._stringRef === i
          ? t.ref
          : ((t = function (a) {
              var d = l.refs;
              a === null ? delete d[i] : (d[i] = a);
            }),
            (t._stringRef = i),
            t);
      }
      if (typeof e != "string") throw Error(u(284));
      if (!n._owner) throw Error(u(290, e));
    }
    return e;
  }
  function vl(e, t) {
    throw (
      (e = Object.prototype.toString.call(t)),
      Error(
        u(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e,
        ),
      )
    );
  }
  function Aa(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Ua(e) {
    function t(x, g) {
      if (e) {
        var w = x.deletions;
        w === null ? ((x.deletions = [g]), (x.flags |= 16)) : w.push(g);
      }
    }
    function n(x, g) {
      if (!e) return null;
      for (; g !== null; ) (t(x, g), (g = g.sibling));
      return null;
    }
    function r(x, g) {
      for (x = new Map(); g !== null; )
        (g.key !== null ? x.set(g.key, g) : x.set(g.index, g), (g = g.sibling));
      return x;
    }
    function l(x, g) {
      return ((x = Jt(x, g)), (x.index = 0), (x.sibling = null), x);
    }
    function i(x, g, w) {
      return (
        (x.index = w),
        e
          ? ((w = x.alternate),
            w !== null
              ? ((w = w.index), w < g ? ((x.flags |= 2), g) : w)
              : ((x.flags |= 2), g))
          : ((x.flags |= 1048576), g)
      );
    }
    function a(x) {
      return (e && x.alternate === null && (x.flags |= 2), x);
    }
    function d(x, g, w, L) {
      return g === null || g.tag !== 6
        ? ((g = bo(w, x.mode, L)), (g.return = x), g)
        : ((g = l(g, w)), (g.return = x), g);
    }
    function h(x, g, w, L) {
      var $ = w.type;
      return $ === xe
        ? R(x, g, w.props.children, L, w.key)
        : g !== null &&
            (g.elementType === $ ||
              (typeof $ == "object" &&
                $ !== null &&
                $.$$typeof === We &&
                Aa($) === g.type))
          ? ((L = l(g, w.props)), (L.ref = vr(x, g, w)), (L.return = x), L)
          : ((L = Wl(w.type, w.key, w.props, null, x.mode, L)),
            (L.ref = vr(x, g, w)),
            (L.return = x),
            L);
    }
    function N(x, g, w, L) {
      return g === null ||
        g.tag !== 4 ||
        g.stateNode.containerInfo !== w.containerInfo ||
        g.stateNode.implementation !== w.implementation
        ? ((g = Go(w, x.mode, L)), (g.return = x), g)
        : ((g = l(g, w.children || [])), (g.return = x), g);
    }
    function R(x, g, w, L, $) {
      return g === null || g.tag !== 7
        ? ((g = hn(w, x.mode, L, $)), (g.return = x), g)
        : ((g = l(g, w)), (g.return = x), g);
    }
    function _(x, g, w) {
      if ((typeof g == "string" && g !== "") || typeof g == "number")
        return ((g = bo("" + g, x.mode, w)), (g.return = x), g);
      if (typeof g == "object" && g !== null) {
        switch (g.$$typeof) {
          case oe:
            return (
              (w = Wl(g.type, g.key, g.props, null, x.mode, w)),
              (w.ref = vr(x, null, g)),
              (w.return = x),
              w
            );
          case de:
            return ((g = Go(g, x.mode, w)), (g.return = x), g);
          case We:
            var L = g._init;
            return _(x, L(g._payload), w);
        }
        if (Gn(g) || Q(g))
          return ((g = hn(g, x.mode, w, null)), (g.return = x), g);
        vl(x, g);
      }
      return null;
    }
    function P(x, g, w, L) {
      var $ = g !== null ? g.key : null;
      if ((typeof w == "string" && w !== "") || typeof w == "number")
        return $ !== null ? null : d(x, g, "" + w, L);
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case oe:
            return w.key === $ ? h(x, g, w, L) : null;
          case de:
            return w.key === $ ? N(x, g, w, L) : null;
          case We:
            return (($ = w._init), P(x, g, $(w._payload), L));
        }
        if (Gn(w) || Q(w)) return $ !== null ? null : R(x, g, w, L, null);
        vl(x, w);
      }
      return null;
    }
    function F(x, g, w, L, $) {
      if ((typeof L == "string" && L !== "") || typeof L == "number")
        return ((x = x.get(w) || null), d(g, x, "" + L, $));
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case oe:
            return (
              (x = x.get(L.key === null ? w : L.key) || null),
              h(g, x, L, $)
            );
          case de:
            return (
              (x = x.get(L.key === null ? w : L.key) || null),
              N(g, x, L, $)
            );
          case We:
            var b = L._init;
            return F(x, g, w, b(L._payload), $);
        }
        if (Gn(L) || Q(L)) return ((x = x.get(w) || null), R(g, x, L, $, null));
        vl(g, L);
      }
      return null;
    }
    function W(x, g, w, L) {
      for (
        var $ = null, b = null, G = g, K = (g = 0), Re = null;
        G !== null && K < w.length;
        K++
      ) {
        G.index > K ? ((Re = G), (G = null)) : (Re = G.sibling);
        var le = P(x, G, w[K], L);
        if (le === null) {
          G === null && (G = Re);
          break;
        }
        (e && G && le.alternate === null && t(x, G),
          (g = i(le, g, K)),
          b === null ? ($ = le) : (b.sibling = le),
          (b = le),
          (G = Re));
      }
      if (K === w.length) return (n(x, G), he && sn(x, K), $);
      if (G === null) {
        for (; K < w.length; K++)
          ((G = _(x, w[K], L)),
            G !== null &&
              ((g = i(G, g, K)),
              b === null ? ($ = G) : (b.sibling = G),
              (b = G)));
        return (he && sn(x, K), $);
      }
      for (G = r(x, G); K < w.length; K++)
        ((Re = F(G, x, K, w[K], L)),
          Re !== null &&
            (e &&
              Re.alternate !== null &&
              G.delete(Re.key === null ? K : Re.key),
            (g = i(Re, g, K)),
            b === null ? ($ = Re) : (b.sibling = Re),
            (b = Re)));
      return (
        e &&
          G.forEach(function (en) {
            return t(x, en);
          }),
        he && sn(x, K),
        $
      );
    }
    function V(x, g, w, L) {
      var $ = Q(w);
      if (typeof $ != "function") throw Error(u(150));
      if (((w = $.call(w)), w == null)) throw Error(u(151));
      for (
        var b = ($ = null), G = g, K = (g = 0), Re = null, le = w.next();
        G !== null && !le.done;
        K++, le = w.next()
      ) {
        G.index > K ? ((Re = G), (G = null)) : (Re = G.sibling);
        var en = P(x, G, le.value, L);
        if (en === null) {
          G === null && (G = Re);
          break;
        }
        (e && G && en.alternate === null && t(x, G),
          (g = i(en, g, K)),
          b === null ? ($ = en) : (b.sibling = en),
          (b = en),
          (G = Re));
      }
      if (le.done) return (n(x, G), he && sn(x, K), $);
      if (G === null) {
        for (; !le.done; K++, le = w.next())
          ((le = _(x, le.value, L)),
            le !== null &&
              ((g = i(le, g, K)),
              b === null ? ($ = le) : (b.sibling = le),
              (b = le)));
        return (he && sn(x, K), $);
      }
      for (G = r(x, G); !le.done; K++, le = w.next())
        ((le = F(G, x, K, le.value, L)),
          le !== null &&
            (e &&
              le.alternate !== null &&
              G.delete(le.key === null ? K : le.key),
            (g = i(le, g, K)),
            b === null ? ($ = le) : (b.sibling = le),
            (b = le)));
      return (
        e &&
          G.forEach(function (qf) {
            return t(x, qf);
          }),
        he && sn(x, K),
        $
      );
    }
    function Se(x, g, w, L) {
      if (
        (typeof w == "object" &&
          w !== null &&
          w.type === xe &&
          w.key === null &&
          (w = w.props.children),
        typeof w == "object" && w !== null)
      ) {
        switch (w.$$typeof) {
          case oe:
            e: {
              for (var $ = w.key, b = g; b !== null; ) {
                if (b.key === $) {
                  if ((($ = w.type), $ === xe)) {
                    if (b.tag === 7) {
                      (n(x, b.sibling),
                        (g = l(b, w.props.children)),
                        (g.return = x),
                        (x = g));
                      break e;
                    }
                  } else if (
                    b.elementType === $ ||
                    (typeof $ == "object" &&
                      $ !== null &&
                      $.$$typeof === We &&
                      Aa($) === b.type)
                  ) {
                    (n(x, b.sibling),
                      (g = l(b, w.props)),
                      (g.ref = vr(x, b, w)),
                      (g.return = x),
                      (x = g));
                    break e;
                  }
                  n(x, b);
                  break;
                } else t(x, b);
                b = b.sibling;
              }
              w.type === xe
                ? ((g = hn(w.props.children, x.mode, L, w.key)),
                  (g.return = x),
                  (x = g))
                : ((L = Wl(w.type, w.key, w.props, null, x.mode, L)),
                  (L.ref = vr(x, g, w)),
                  (L.return = x),
                  (x = L));
            }
            return a(x);
          case de:
            e: {
              for (b = w.key; g !== null; ) {
                if (g.key === b)
                  if (
                    g.tag === 4 &&
                    g.stateNode.containerInfo === w.containerInfo &&
                    g.stateNode.implementation === w.implementation
                  ) {
                    (n(x, g.sibling),
                      (g = l(g, w.children || [])),
                      (g.return = x),
                      (x = g));
                    break e;
                  } else {
                    n(x, g);
                    break;
                  }
                else t(x, g);
                g = g.sibling;
              }
              ((g = Go(w, x.mode, L)), (g.return = x), (x = g));
            }
            return a(x);
          case We:
            return ((b = w._init), Se(x, g, b(w._payload), L));
        }
        if (Gn(w)) return W(x, g, w, L);
        if (Q(w)) return V(x, g, w, L);
        vl(x, w);
      }
      return (typeof w == "string" && w !== "") || typeof w == "number"
        ? ((w = "" + w),
          g !== null && g.tag === 6
            ? (n(x, g.sibling), (g = l(g, w)), (g.return = x), (x = g))
            : (n(x, g), (g = bo(w, x.mode, L)), (g.return = x), (x = g)),
          a(x))
        : n(x, g);
    }
    return Se;
  }
  var Mn = Ua(!0),
    Ha = Ua(!1),
    yl = Bt(null),
    xl = null,
    In = null,
    eo = null;
  function to() {
    eo = In = xl = null;
  }
  function no(e) {
    var t = yl.current;
    (pe(yl), (e._currentValue = t));
  }
  function ro(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
          : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function Fn(e, t) {
    ((xl = e),
      (eo = In = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && ($e = !0), (e.firstContext = null)));
  }
  function nt(e) {
    var t = e._currentValue;
    if (eo !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), In === null)) {
        if (xl === null) throw Error(u(308));
        ((In = e), (xl.dependencies = { lanes: 0, firstContext: e }));
      } else In = In.next = e;
    return t;
  }
  var an = null;
  function lo(e) {
    an === null ? (an = [e]) : an.push(e);
  }
  function Wa(e, t, n, r) {
    var l = t.interleaved;
    return (
      l === null ? ((n.next = n), lo(t)) : ((n.next = l.next), (l.next = n)),
      (t.interleaved = n),
      Tt(e, r)
    );
  }
  function Tt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
      ((e.childLanes |= t),
        (n = e.alternate),
        n !== null && (n.childLanes |= t),
        (n = e),
        (e = e.return));
    return n.tag === 3 ? n.stateNode : null;
  }
  var Gt = !1;
  function io(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function Va(e, t) {
    ((e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        }));
  }
  function Rt(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function qt(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), (te & 2) !== 0)) {
      var l = r.pending;
      return (
        l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
        (r.pending = t),
        Tt(e, n)
      );
    }
    return (
      (l = r.interleaved),
      l === null ? ((t.next = t), lo(r)) : ((t.next = l.next), (l.next = t)),
      (r.interleaved = t),
      Tt(e, n)
    );
  }
  function wl(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
    ) {
      var r = t.lanes;
      ((r &= e.pendingLanes), (n |= r), (t.lanes = n), xi(e, n));
    }
  }
  function Ba(e, t) {
    var n = e.updateQueue,
      r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
      var l = null,
        i = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var a = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null,
          };
          (i === null ? (l = i = a) : (i = i.next = a), (n = n.next));
        } while (n !== null);
        i === null ? (l = i = t) : (i = i.next = t);
      } else l = i = t;
      ((n = {
        baseState: r.baseState,
        firstBaseUpdate: l,
        lastBaseUpdate: i,
        shared: r.shared,
        effects: r.effects,
      }),
        (e.updateQueue = n));
      return;
    }
    ((e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t));
  }
  function Nl(e, t, n, r) {
    var l = e.updateQueue;
    Gt = !1;
    var i = l.firstBaseUpdate,
      a = l.lastBaseUpdate,
      d = l.shared.pending;
    if (d !== null) {
      l.shared.pending = null;
      var h = d,
        N = h.next;
      ((h.next = null), a === null ? (i = N) : (a.next = N), (a = h));
      var R = e.alternate;
      R !== null &&
        ((R = R.updateQueue),
        (d = R.lastBaseUpdate),
        d !== a &&
          (d === null ? (R.firstBaseUpdate = N) : (d.next = N),
          (R.lastBaseUpdate = h)));
    }
    if (i !== null) {
      var _ = l.baseState;
      ((a = 0), (R = N = h = null), (d = i));
      do {
        var P = d.lane,
          F = d.eventTime;
        if ((r & P) === P) {
          R !== null &&
            (R = R.next =
              {
                eventTime: F,
                lane: 0,
                tag: d.tag,
                payload: d.payload,
                callback: d.callback,
                next: null,
              });
          e: {
            var W = e,
              V = d;
            switch (((P = t), (F = n), V.tag)) {
              case 1:
                if (((W = V.payload), typeof W == "function")) {
                  _ = W.call(F, _, P);
                  break e;
                }
                _ = W;
                break e;
              case 3:
                W.flags = (W.flags & -65537) | 128;
              case 0:
                if (
                  ((W = V.payload),
                  (P = typeof W == "function" ? W.call(F, _, P) : W),
                  P == null)
                )
                  break e;
                _ = U({}, _, P);
                break e;
              case 2:
                Gt = !0;
            }
          }
          d.callback !== null &&
            d.lane !== 0 &&
            ((e.flags |= 64),
            (P = l.effects),
            P === null ? (l.effects = [d]) : P.push(d));
        } else
          ((F = {
            eventTime: F,
            lane: P,
            tag: d.tag,
            payload: d.payload,
            callback: d.callback,
            next: null,
          }),
            R === null ? ((N = R = F), (h = _)) : (R = R.next = F),
            (a |= P));
        if (((d = d.next), d === null)) {
          if (((d = l.shared.pending), d === null)) break;
          ((P = d),
            (d = P.next),
            (P.next = null),
            (l.lastBaseUpdate = P),
            (l.shared.pending = null));
        }
      } while (!0);
      if (
        (R === null && (h = _),
        (l.baseState = h),
        (l.firstBaseUpdate = N),
        (l.lastBaseUpdate = R),
        (t = l.shared.interleaved),
        t !== null)
      ) {
        l = t;
        do ((a |= l.lane), (l = l.next));
        while (l !== t);
      } else i === null && (l.shared.lanes = 0);
      ((dn |= a), (e.lanes = a), (e.memoizedState = _));
    }
  }
  function $a(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var r = e[t],
          l = r.callback;
        if (l !== null) {
          if (((r.callback = null), (r = n), typeof l != "function"))
            throw Error(u(191, l));
          l.call(r);
        }
      }
  }
  var yr = {},
    kt = Bt(yr),
    xr = Bt(yr),
    wr = Bt(yr);
  function un(e) {
    if (e === yr) throw Error(u(174));
    return e;
  }
  function oo(e, t) {
    switch ((ce(wr, t), ce(xr, e), ce(kt, yr), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : si(null, "");
        break;
      default:
        ((e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = si(t, e)));
    }
    (pe(kt), ce(kt, t));
  }
  function On() {
    (pe(kt), pe(xr), pe(wr));
  }
  function ba(e) {
    un(wr.current);
    var t = un(kt.current),
      n = si(t, e.type);
    t !== n && (ce(xr, e), ce(kt, n));
  }
  function so(e) {
    xr.current === e && (pe(kt), pe(xr));
  }
  var ge = Bt(0);
  function kl(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (
          n !== null &&
          ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        ((t.child.return = t), (t = t.child));
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
    return null;
  }
  var ao = [];
  function uo() {
    for (var e = 0; e < ao.length; e++)
      ao[e]._workInProgressVersionPrimary = null;
    ao.length = 0;
  }
  var Sl = ie.ReactCurrentDispatcher,
    co = ie.ReactCurrentBatchConfig,
    cn = 0,
    ve = null,
    je = null,
    ze = null,
    El = !1,
    Nr = !1,
    kr = 0,
    hf = 0;
  function Me() {
    throw Error(u(321));
  }
  function fo(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!dt(e[n], t[n])) return !1;
    return !0;
  }
  function po(e, t, n, r, l, i) {
    if (
      ((cn = i),
      (ve = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (Sl.current = e === null || e.memoizedState === null ? xf : wf),
      (e = n(r, l)),
      Nr)
    ) {
      i = 0;
      do {
        if (((Nr = !1), (kr = 0), 25 <= i)) throw Error(u(301));
        ((i += 1),
          (ze = je = null),
          (t.updateQueue = null),
          (Sl.current = Nf),
          (e = n(r, l)));
      } while (Nr);
    }
    if (
      ((Sl.current = Pl),
      (t = je !== null && je.next !== null),
      (cn = 0),
      (ze = je = ve = null),
      (El = !1),
      t)
    )
      throw Error(u(300));
    return e;
  }
  function mo() {
    var e = kr !== 0;
    return ((kr = 0), e);
  }
  function St() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (ze === null ? (ve.memoizedState = ze = e) : (ze = ze.next = e), ze);
  }
  function rt() {
    if (je === null) {
      var e = ve.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = je.next;
    var t = ze === null ? ve.memoizedState : ze.next;
    if (t !== null) ((ze = t), (je = e));
    else {
      if (e === null) throw Error(u(310));
      ((je = e),
        (e = {
          memoizedState: je.memoizedState,
          baseState: je.baseState,
          baseQueue: je.baseQueue,
          queue: je.queue,
          next: null,
        }),
        ze === null ? (ve.memoizedState = ze = e) : (ze = ze.next = e));
    }
    return ze;
  }
  function Sr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function ho(e) {
    var t = rt(),
      n = t.queue;
    if (n === null) throw Error(u(311));
    n.lastRenderedReducer = e;
    var r = je,
      l = r.baseQueue,
      i = n.pending;
    if (i !== null) {
      if (l !== null) {
        var a = l.next;
        ((l.next = i.next), (i.next = a));
      }
      ((r.baseQueue = l = i), (n.pending = null));
    }
    if (l !== null) {
      ((i = l.next), (r = r.baseState));
      var d = (a = null),
        h = null,
        N = i;
      do {
        var R = N.lane;
        if ((cn & R) === R)
          (h !== null &&
            (h = h.next =
              {
                lane: 0,
                action: N.action,
                hasEagerState: N.hasEagerState,
                eagerState: N.eagerState,
                next: null,
              }),
            (r = N.hasEagerState ? N.eagerState : e(r, N.action)));
        else {
          var _ = {
            lane: R,
            action: N.action,
            hasEagerState: N.hasEagerState,
            eagerState: N.eagerState,
            next: null,
          };
          (h === null ? ((d = h = _), (a = r)) : (h = h.next = _),
            (ve.lanes |= R),
            (dn |= R));
        }
        N = N.next;
      } while (N !== null && N !== i);
      (h === null ? (a = r) : (h.next = d),
        dt(r, t.memoizedState) || ($e = !0),
        (t.memoizedState = r),
        (t.baseState = a),
        (t.baseQueue = h),
        (n.lastRenderedState = r));
    }
    if (((e = n.interleaved), e !== null)) {
      l = e;
      do ((i = l.lane), (ve.lanes |= i), (dn |= i), (l = l.next));
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function go(e) {
    var t = rt(),
      n = t.queue;
    if (n === null) throw Error(u(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
      l = n.pending,
      i = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var a = (l = l.next);
      do ((i = e(i, a.action)), (a = a.next));
      while (a !== l);
      (dt(i, t.memoizedState) || ($e = !0),
        (t.memoizedState = i),
        t.baseQueue === null && (t.baseState = i),
        (n.lastRenderedState = i));
    }
    return [i, r];
  }
  function Ga() {}
  function qa(e, t) {
    var n = ve,
      r = rt(),
      l = t(),
      i = !dt(r.memoizedState, l);
    if (
      (i && ((r.memoizedState = l), ($e = !0)),
      (r = r.queue),
      vo(Ya.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || i || (ze !== null && ze.memoizedState.tag & 1))
    ) {
      if (
        ((n.flags |= 2048),
        Er(9, Ka.bind(null, n, r, l, t), void 0, null),
        Te === null)
      )
        throw Error(u(349));
      (cn & 30) !== 0 || Qa(n, t, l);
    }
    return l;
  }
  function Qa(e, t, n) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = ve.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (ve.updateQueue = t),
          (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
  }
  function Ka(e, t, n, r) {
    ((t.value = n), (t.getSnapshot = r), Xa(t) && Za(e));
  }
  function Ya(e, t, n) {
    return n(function () {
      Xa(t) && Za(e);
    });
  }
  function Xa(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !dt(e, n);
    } catch {
      return !0;
    }
  }
  function Za(e) {
    var t = Tt(e, 1);
    t !== null && gt(t, e, 1, -1);
  }
  function Ja(e) {
    var t = St();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Sr,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = yf.bind(null, ve, e)),
      [t.memoizedState, e]
    );
  }
  function Er(e, t, n, r) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
      (t = ve.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (ve.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((n = t.lastEffect),
          n === null
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
      e
    );
  }
  function eu() {
    return rt().memoizedState;
  }
  function Cl(e, t, n, r) {
    var l = St();
    ((ve.flags |= e),
      (l.memoizedState = Er(1 | t, n, void 0, r === void 0 ? null : r)));
  }
  function jl(e, t, n, r) {
    var l = rt();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (je !== null) {
      var a = je.memoizedState;
      if (((i = a.destroy), r !== null && fo(r, a.deps))) {
        l.memoizedState = Er(t, n, i, r);
        return;
      }
    }
    ((ve.flags |= e), (l.memoizedState = Er(1 | t, n, i, r)));
  }
  function tu(e, t) {
    return Cl(8390656, 8, e, t);
  }
  function vo(e, t) {
    return jl(2048, 8, e, t);
  }
  function nu(e, t) {
    return jl(4, 2, e, t);
  }
  function ru(e, t) {
    return jl(4, 4, e, t);
  }
  function lu(e, t) {
    if (typeof t == "function")
      return (
        (e = e()),
        t(e),
        function () {
          t(null);
        }
      );
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function iu(e, t, n) {
    return (
      (n = n != null ? n.concat([e]) : null),
      jl(4, 4, lu.bind(null, t, e), n)
    );
  }
  function yo() {}
  function ou(e, t) {
    var n = rt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && fo(t, r[1])
      ? r[0]
      : ((n.memoizedState = [e, t]), e);
  }
  function su(e, t) {
    var n = rt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && fo(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function au(e, t, n) {
    return (cn & 21) === 0
      ? (e.baseState && ((e.baseState = !1), ($e = !0)), (e.memoizedState = n))
      : (dt(n, t) ||
          ((n = As()), (ve.lanes |= n), (dn |= n), (e.baseState = !0)),
        t);
  }
  function gf(e, t) {
    var n = ae;
    ((ae = n !== 0 && 4 > n ? n : 4), e(!0));
    var r = co.transition;
    co.transition = {};
    try {
      (e(!1), t());
    } finally {
      ((ae = n), (co.transition = r));
    }
  }
  function uu() {
    return rt().memoizedState;
  }
  function vf(e, t, n) {
    var r = Xt(e);
    if (
      ((n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      cu(e))
    )
      du(t, n);
    else if (((n = Wa(e, t, n, r)), n !== null)) {
      var l = He();
      (gt(n, e, r, l), fu(n, t, r));
    }
  }
  function yf(e, t, n) {
    var r = Xt(e),
      l = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (cu(e)) du(t, l);
    else {
      var i = e.alternate;
      if (
        e.lanes === 0 &&
        (i === null || i.lanes === 0) &&
        ((i = t.lastRenderedReducer), i !== null)
      )
        try {
          var a = t.lastRenderedState,
            d = i(a, n);
          if (((l.hasEagerState = !0), (l.eagerState = d), dt(d, a))) {
            var h = t.interleaved;
            (h === null
              ? ((l.next = l), lo(t))
              : ((l.next = h.next), (h.next = l)),
              (t.interleaved = l));
            return;
          }
        } catch {
        } finally {
        }
      ((n = Wa(e, t, l, r)),
        n !== null && ((l = He()), gt(n, e, r, l), fu(n, t, r)));
    }
  }
  function cu(e) {
    var t = e.alternate;
    return e === ve || (t !== null && t === ve);
  }
  function du(e, t) {
    Nr = El = !0;
    var n = e.pending;
    (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t));
  }
  function fu(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      ((r &= e.pendingLanes), (n |= r), (t.lanes = n), xi(e, n));
    }
  }
  var Pl = {
      readContext: nt,
      useCallback: Me,
      useContext: Me,
      useEffect: Me,
      useImperativeHandle: Me,
      useInsertionEffect: Me,
      useLayoutEffect: Me,
      useMemo: Me,
      useReducer: Me,
      useRef: Me,
      useState: Me,
      useDebugValue: Me,
      useDeferredValue: Me,
      useTransition: Me,
      useMutableSource: Me,
      useSyncExternalStore: Me,
      useId: Me,
      unstable_isNewReconciler: !1,
    },
    xf = {
      readContext: nt,
      useCallback: function (e, t) {
        return ((St().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: nt,
      useEffect: tu,
      useImperativeHandle: function (e, t, n) {
        return (
          (n = n != null ? n.concat([e]) : null),
          Cl(4194308, 4, lu.bind(null, t, e), n)
        );
      },
      useLayoutEffect: function (e, t) {
        return Cl(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return Cl(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = St();
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (n.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, n) {
        var r = St();
        return (
          (t = n !== void 0 ? n(t) : t),
          (r.memoizedState = r.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (r.queue = e),
          (e = e.dispatch = vf.bind(null, ve, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = St();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: Ja,
      useDebugValue: yo,
      useDeferredValue: function (e) {
        return (St().memoizedState = e);
      },
      useTransition: function () {
        var e = Ja(!1),
          t = e[0];
        return ((e = gf.bind(null, e[1])), (St().memoizedState = e), [t, e]);
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = ve,
          l = St();
        if (he) {
          if (n === void 0) throw Error(u(407));
          n = n();
        } else {
          if (((n = t()), Te === null)) throw Error(u(349));
          (cn & 30) !== 0 || Qa(r, t, n);
        }
        l.memoizedState = n;
        var i = { value: n, getSnapshot: t };
        return (
          (l.queue = i),
          tu(Ya.bind(null, r, i, e), [e]),
          (r.flags |= 2048),
          Er(9, Ka.bind(null, r, i, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = St(),
          t = Te.identifierPrefix;
        if (he) {
          var n = zt,
            r = Pt;
          ((n = (r & ~(1 << (32 - ct(r) - 1))).toString(32) + n),
            (t = ":" + t + "R" + n),
            (n = kr++),
            0 < n && (t += "H" + n.toString(32)),
            (t += ":"));
        } else ((n = hf++), (t = ":" + t + "r" + n.toString(32) + ":"));
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    wf = {
      readContext: nt,
      useCallback: ou,
      useContext: nt,
      useEffect: vo,
      useImperativeHandle: iu,
      useInsertionEffect: nu,
      useLayoutEffect: ru,
      useMemo: su,
      useReducer: ho,
      useRef: eu,
      useState: function () {
        return ho(Sr);
      },
      useDebugValue: yo,
      useDeferredValue: function (e) {
        var t = rt();
        return au(t, je.memoizedState, e);
      },
      useTransition: function () {
        var e = ho(Sr)[0],
          t = rt().memoizedState;
        return [e, t];
      },
      useMutableSource: Ga,
      useSyncExternalStore: qa,
      useId: uu,
      unstable_isNewReconciler: !1,
    },
    Nf = {
      readContext: nt,
      useCallback: ou,
      useContext: nt,
      useEffect: vo,
      useImperativeHandle: iu,
      useInsertionEffect: nu,
      useLayoutEffect: ru,
      useMemo: su,
      useReducer: go,
      useRef: eu,
      useState: function () {
        return go(Sr);
      },
      useDebugValue: yo,
      useDeferredValue: function (e) {
        var t = rt();
        return je === null ? (t.memoizedState = e) : au(t, je.memoizedState, e);
      },
      useTransition: function () {
        var e = go(Sr)[0],
          t = rt().memoizedState;
        return [e, t];
      },
      useMutableSource: Ga,
      useSyncExternalStore: qa,
      useId: uu,
      unstable_isNewReconciler: !1,
    };
  function pt(e, t) {
    if (e && e.defaultProps) {
      ((t = U({}, t)), (e = e.defaultProps));
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function xo(e, t, n, r) {
    ((t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : U({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n));
  }
  var zl = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? nn(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = He(),
        l = Xt(e),
        i = Rt(r, l);
      ((i.payload = t),
        n != null && (i.callback = n),
        (t = qt(e, i, l)),
        t !== null && (gt(t, e, l, r), wl(t, e, l)));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = He(),
        l = Xt(e),
        i = Rt(r, l);
      ((i.tag = 1),
        (i.payload = t),
        n != null && (i.callback = n),
        (t = qt(e, i, l)),
        t !== null && (gt(t, e, l, r), wl(t, e, l)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = He(),
        r = Xt(e),
        l = Rt(n, r);
      ((l.tag = 2),
        t != null && (l.callback = t),
        (t = qt(e, l, r)),
        t !== null && (gt(t, e, r, n), wl(t, e, r)));
    },
  };
  function pu(e, t, n, r, l, i, a) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(r, i, a)
        : t.prototype && t.prototype.isPureReactComponent
          ? !cr(n, r) || !cr(l, i)
          : !0
    );
  }
  function mu(e, t, n) {
    var r = !1,
      l = $t,
      i = t.contextType;
    return (
      typeof i == "object" && i !== null
        ? (i = nt(i))
        : ((l = Be(t) ? ln : De.current),
          (r = t.contextTypes),
          (i = (r = r != null) ? Rn(e, l) : $t)),
      (t = new t(n, i)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = zl),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = l),
        (e.__reactInternalMemoizedMaskedChildContext = i)),
      t
    );
  }
  function hu(e, t, n, r) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && zl.enqueueReplaceState(t, t.state, null));
  }
  function wo(e, t, n, r) {
    var l = e.stateNode;
    ((l.props = n), (l.state = e.memoizedState), (l.refs = {}), io(e));
    var i = t.contextType;
    (typeof i == "object" && i !== null
      ? (l.context = nt(i))
      : ((i = Be(t) ? ln : De.current), (l.context = Rn(e, i))),
      (l.state = e.memoizedState),
      (i = t.getDerivedStateFromProps),
      typeof i == "function" && (xo(e, t, i, n), (l.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function" ||
        (typeof l.UNSAFE_componentWillMount != "function" &&
          typeof l.componentWillMount != "function") ||
        ((t = l.state),
        typeof l.componentWillMount == "function" && l.componentWillMount(),
        typeof l.UNSAFE_componentWillMount == "function" &&
          l.UNSAFE_componentWillMount(),
        t !== l.state && zl.enqueueReplaceState(l, l.state, null),
        Nl(e, n, l, r),
        (l.state = e.memoizedState)),
      typeof l.componentDidMount == "function" && (e.flags |= 4194308));
  }
  function An(e, t) {
    try {
      var n = "",
        r = t;
      do ((n += ne(r)), (r = r.return));
      while (r);
      var l = n;
    } catch (i) {
      l =
        `
Error generating stack: ` +
        i.message +
        `
` +
        i.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
  }
  function No(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function ko(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var kf = typeof WeakMap == "function" ? WeakMap : Map;
  function gu(e, t, n) {
    ((n = Rt(-1, n)), (n.tag = 3), (n.payload = { element: null }));
    var r = t.value;
    return (
      (n.callback = function () {
        (Il || ((Il = !0), (Oo = r)), ko(e, t));
      }),
      n
    );
  }
  function vu(e, t, n) {
    ((n = Rt(-1, n)), (n.tag = 3));
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var l = t.value;
      ((n.payload = function () {
        return r(l);
      }),
        (n.callback = function () {
          ko(e, t);
        }));
    }
    var i = e.stateNode;
    return (
      i !== null &&
        typeof i.componentDidCatch == "function" &&
        (n.callback = function () {
          (ko(e, t),
            typeof r != "function" &&
              (Kt === null ? (Kt = new Set([this])) : Kt.add(this)));
          var a = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: a !== null ? a : "",
          });
        }),
      n
    );
  }
  function yu(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new kf();
      var l = new Set();
      r.set(t, l);
    } else ((l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l)));
    l.has(n) || (l.add(n), (e = Ff.bind(null, e, t, n)), t.then(e, e));
  }
  function xu(e) {
    do {
      var t;
      if (
        ((t = e.tag === 13) &&
          ((t = e.memoizedState),
          (t = t !== null ? t.dehydrated !== null : !0)),
        t)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function wu(e, t, n, r, l) {
    return (e.mode & 1) === 0
      ? (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            n.tag === 1 &&
              (n.alternate === null
                ? (n.tag = 17)
                : ((t = Rt(-1, 1)), (t.tag = 2), qt(n, t, 1))),
            (n.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = l), e);
  }
  var Sf = ie.ReactCurrentOwner,
    $e = !1;
  function Ue(e, t, n, r) {
    t.child = e === null ? Ha(t, null, n, r) : Mn(t, e.child, n, r);
  }
  function Nu(e, t, n, r, l) {
    n = n.render;
    var i = t.ref;
    return (
      Fn(t, l),
      (r = po(e, t, n, r, i, l)),
      (n = mo()),
      e !== null && !$e
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~l),
          _t(e, t, l))
        : (he && n && Ki(t), (t.flags |= 1), Ue(e, t, r, l), t.child)
    );
  }
  function ku(e, t, n, r, l) {
    if (e === null) {
      var i = n.type;
      return typeof i == "function" &&
        !$o(i) &&
        i.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = i), Su(e, t, i, r, l))
        : ((e = Wl(n.type, null, r, t, t.mode, l)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((i = e.child), (e.lanes & l) === 0)) {
      var a = i.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : cr), n(a, r) && e.ref === t.ref)
      )
        return _t(e, t, l);
    }
    return (
      (t.flags |= 1),
      (e = Jt(i, r)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function Su(e, t, n, r, l) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (cr(i, r) && e.ref === t.ref)
        if ((($e = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
          (e.flags & 131072) !== 0 && ($e = !0);
        else return ((t.lanes = e.lanes), _t(e, t, l));
    }
    return So(e, t, n, r, l);
  }
  function Eu(e, t, n) {
    var r = t.pendingProps,
      l = r.children,
      i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
      if ((t.mode & 1) === 0)
        ((t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          ce(Hn, Je),
          (Je |= n));
      else {
        if ((n & 1073741824) === 0)
          return (
            (e = i !== null ? i.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            ce(Hn, Je),
            (Je |= e),
            null
          );
        ((t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (r = i !== null ? i.baseLanes : n),
          ce(Hn, Je),
          (Je |= r));
      }
    else
      (i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
        ce(Hn, Je),
        (Je |= r));
    return (Ue(e, t, l, n), t.child);
  }
  function Cu(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function So(e, t, n, r, l) {
    var i = Be(n) ? ln : De.current;
    return (
      (i = Rn(t, i)),
      Fn(t, l),
      (n = po(e, t, n, r, i, l)),
      (r = mo()),
      e !== null && !$e
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~l),
          _t(e, t, l))
        : (he && r && Ki(t), (t.flags |= 1), Ue(e, t, n, l), t.child)
    );
  }
  function ju(e, t, n, r, l) {
    if (Be(n)) {
      var i = !0;
      fl(t);
    } else i = !1;
    if ((Fn(t, l), t.stateNode === null))
      (Rl(e, t), mu(t, n, r), wo(t, n, r, l), (r = !0));
    else if (e === null) {
      var a = t.stateNode,
        d = t.memoizedProps;
      a.props = d;
      var h = a.context,
        N = n.contextType;
      typeof N == "object" && N !== null
        ? (N = nt(N))
        : ((N = Be(n) ? ln : De.current), (N = Rn(t, N)));
      var R = n.getDerivedStateFromProps,
        _ =
          typeof R == "function" ||
          typeof a.getSnapshotBeforeUpdate == "function";
      (_ ||
        (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
          typeof a.componentWillReceiveProps != "function") ||
        ((d !== r || h !== N) && hu(t, a, r, N)),
        (Gt = !1));
      var P = t.memoizedState;
      ((a.state = P),
        Nl(t, r, a, l),
        (h = t.memoizedState),
        d !== r || P !== h || Ve.current || Gt
          ? (typeof R == "function" && (xo(t, n, R, r), (h = t.memoizedState)),
            (d = Gt || pu(t, n, d, r, P, h, N))
              ? (_ ||
                  (typeof a.UNSAFE_componentWillMount != "function" &&
                    typeof a.componentWillMount != "function") ||
                  (typeof a.componentWillMount == "function" &&
                    a.componentWillMount(),
                  typeof a.UNSAFE_componentWillMount == "function" &&
                    a.UNSAFE_componentWillMount()),
                typeof a.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof a.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = r),
                (t.memoizedState = h)),
            (a.props = r),
            (a.state = h),
            (a.context = N),
            (r = d))
          : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
            (r = !1)));
    } else {
      ((a = t.stateNode),
        Va(e, t),
        (d = t.memoizedProps),
        (N = t.type === t.elementType ? d : pt(t.type, d)),
        (a.props = N),
        (_ = t.pendingProps),
        (P = a.context),
        (h = n.contextType),
        typeof h == "object" && h !== null
          ? (h = nt(h))
          : ((h = Be(n) ? ln : De.current), (h = Rn(t, h))));
      var F = n.getDerivedStateFromProps;
      ((R =
        typeof F == "function" ||
        typeof a.getSnapshotBeforeUpdate == "function") ||
        (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
          typeof a.componentWillReceiveProps != "function") ||
        ((d !== _ || P !== h) && hu(t, a, r, h)),
        (Gt = !1),
        (P = t.memoizedState),
        (a.state = P),
        Nl(t, r, a, l));
      var W = t.memoizedState;
      d !== _ || P !== W || Ve.current || Gt
        ? (typeof F == "function" && (xo(t, n, F, r), (W = t.memoizedState)),
          (N = Gt || pu(t, n, N, r, P, W, h) || !1)
            ? (R ||
                (typeof a.UNSAFE_componentWillUpdate != "function" &&
                  typeof a.componentWillUpdate != "function") ||
                (typeof a.componentWillUpdate == "function" &&
                  a.componentWillUpdate(r, W, h),
                typeof a.UNSAFE_componentWillUpdate == "function" &&
                  a.UNSAFE_componentWillUpdate(r, W, h)),
              typeof a.componentDidUpdate == "function" && (t.flags |= 4),
              typeof a.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof a.componentDidUpdate != "function" ||
                (d === e.memoizedProps && P === e.memoizedState) ||
                (t.flags |= 4),
              typeof a.getSnapshotBeforeUpdate != "function" ||
                (d === e.memoizedProps && P === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = W)),
          (a.props = r),
          (a.state = W),
          (a.context = h),
          (r = N))
        : (typeof a.componentDidUpdate != "function" ||
            (d === e.memoizedProps && P === e.memoizedState) ||
            (t.flags |= 4),
          typeof a.getSnapshotBeforeUpdate != "function" ||
            (d === e.memoizedProps && P === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return Eo(e, t, n, r, i, l);
  }
  function Eo(e, t, n, r, l, i) {
    Cu(e, t);
    var a = (t.flags & 128) !== 0;
    if (!r && !a) return (l && _a(t, n, !1), _t(e, t, i));
    ((r = t.stateNode), (Sf.current = t));
    var d =
      a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && a
        ? ((t.child = Mn(t, e.child, null, i)), (t.child = Mn(t, null, d, i)))
        : Ue(e, t, d, i),
      (t.memoizedState = r.state),
      l && _a(t, n, !0),
      t.child
    );
  }
  function Pu(e) {
    var t = e.stateNode;
    (t.pendingContext
      ? Ta(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && Ta(e, t.context, !1),
      oo(e, t.containerInfo));
  }
  function zu(e, t, n, r, l) {
    return (Dn(), Ji(l), (t.flags |= 256), Ue(e, t, n, r), t.child);
  }
  var Co = { dehydrated: null, treeContext: null, retryLane: 0 };
  function jo(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Tu(e, t, n) {
    var r = t.pendingProps,
      l = ge.current,
      i = !1,
      a = (t.flags & 128) !== 0,
      d;
    if (
      ((d = a) ||
        (d = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
      d
        ? ((i = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (l |= 1),
      ce(ge, l & 1),
      e === null)
    )
      return (
        Zi(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? ((t.mode & 1) === 0
              ? (t.lanes = 1)
              : e.data === "$!"
                ? (t.lanes = 8)
                : (t.lanes = 1073741824),
            null)
          : ((a = r.children),
            (e = r.fallback),
            i
              ? ((r = t.mode),
                (i = t.child),
                (a = { mode: "hidden", children: a }),
                (r & 1) === 0 && i !== null
                  ? ((i.childLanes = 0), (i.pendingProps = a))
                  : (i = Vl(a, r, 0, null)),
                (e = hn(e, r, n, null)),
                (i.return = t),
                (e.return = t),
                (i.sibling = e),
                (t.child = i),
                (t.child.memoizedState = jo(n)),
                (t.memoizedState = Co),
                e)
              : Po(t, a))
      );
    if (((l = e.memoizedState), l !== null && ((d = l.dehydrated), d !== null)))
      return Ef(e, t, a, r, d, l, n);
    if (i) {
      ((i = r.fallback), (a = t.mode), (l = e.child), (d = l.sibling));
      var h = { mode: "hidden", children: r.children };
      return (
        (a & 1) === 0 && t.child !== l
          ? ((r = t.child),
            (r.childLanes = 0),
            (r.pendingProps = h),
            (t.deletions = null))
          : ((r = Jt(l, h)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
        d !== null ? (i = Jt(d, i)) : ((i = hn(i, a, n, null)), (i.flags |= 2)),
        (i.return = t),
        (r.return = t),
        (r.sibling = i),
        (t.child = r),
        (r = i),
        (i = t.child),
        (a = e.child.memoizedState),
        (a =
          a === null
            ? jo(n)
            : {
                baseLanes: a.baseLanes | n,
                cachePool: null,
                transitions: a.transitions,
              }),
        (i.memoizedState = a),
        (i.childLanes = e.childLanes & ~n),
        (t.memoizedState = Co),
        r
      );
    }
    return (
      (i = e.child),
      (e = i.sibling),
      (r = Jt(i, { mode: "visible", children: r.children })),
      (t.mode & 1) === 0 && (r.lanes = n),
      (r.return = t),
      (r.sibling = null),
      e !== null &&
        ((n = t.deletions),
        n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
      (t.child = r),
      (t.memoizedState = null),
      r
    );
  }
  function Po(e, t) {
    return (
      (t = Vl({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function Tl(e, t, n, r) {
    return (
      r !== null && Ji(r),
      Mn(t, e.child, null, n),
      (e = Po(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Ef(e, t, n, r, l, i, a) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = No(Error(u(422)))), Tl(e, t, a, r))
        : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((i = r.fallback),
            (l = t.mode),
            (r = Vl({ mode: "visible", children: r.children }, l, 0, null)),
            (i = hn(i, l, a, null)),
            (i.flags |= 2),
            (r.return = t),
            (i.return = t),
            (r.sibling = i),
            (t.child = r),
            (t.mode & 1) !== 0 && Mn(t, e.child, null, a),
            (t.child.memoizedState = jo(a)),
            (t.memoizedState = Co),
            i);
    if ((t.mode & 1) === 0) return Tl(e, t, a, null);
    if (l.data === "$!") {
      if (((r = l.nextSibling && l.nextSibling.dataset), r)) var d = r.dgst;
      return (
        (r = d),
        (i = Error(u(419))),
        (r = No(i, r, void 0)),
        Tl(e, t, a, r)
      );
    }
    if (((d = (a & e.childLanes) !== 0), $e || d)) {
      if (((r = Te), r !== null)) {
        switch (a & -a) {
          case 4:
            l = 2;
            break;
          case 16:
            l = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            l = 32;
            break;
          case 536870912:
            l = 268435456;
            break;
          default:
            l = 0;
        }
        ((l = (l & (r.suspendedLanes | a)) !== 0 ? 0 : l),
          l !== 0 &&
            l !== i.retryLane &&
            ((i.retryLane = l), Tt(e, l), gt(r, e, l, -1)));
      }
      return (Bo(), (r = No(Error(u(421)))), Tl(e, t, a, r));
    }
    return l.data === "$?"
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = Of.bind(null, e)),
        (l._reactRetry = t),
        null)
      : ((e = i.treeContext),
        (Ze = Vt(l.nextSibling)),
        (Xe = t),
        (he = !0),
        (ft = null),
        e !== null &&
          ((et[tt++] = Pt),
          (et[tt++] = zt),
          (et[tt++] = on),
          (Pt = e.id),
          (zt = e.overflow),
          (on = t)),
        (t = Po(t, r.children)),
        (t.flags |= 4096),
        t);
  }
  function Ru(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    (r !== null && (r.lanes |= t), ro(e.return, t, n));
  }
  function zo(e, t, n, r, l) {
    var i = e.memoizedState;
    i === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: n,
          tailMode: l,
        })
      : ((i.isBackwards = t),
        (i.rendering = null),
        (i.renderingStartTime = 0),
        (i.last = r),
        (i.tail = n),
        (i.tailMode = l));
  }
  function _u(e, t, n) {
    var r = t.pendingProps,
      l = r.revealOrder,
      i = r.tail;
    if ((Ue(e, t, r.children, n), (r = ge.current), (r & 2) !== 0))
      ((r = (r & 1) | 2), (t.flags |= 128));
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Ru(e, n, t);
          else if (e.tag === 19) Ru(e, n, t);
          else if (e.child !== null) {
            ((e.child.return = e), (e = e.child));
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          ((e.sibling.return = e.return), (e = e.sibling));
        }
      r &= 1;
    }
    if ((ce(ge, r), (t.mode & 1) === 0)) t.memoizedState = null;
    else
      switch (l) {
        case "forwards":
          for (n = t.child, l = null; n !== null; )
            ((e = n.alternate),
              e !== null && kl(e) === null && (l = n),
              (n = n.sibling));
          ((n = l),
            n === null
              ? ((l = t.child), (t.child = null))
              : ((l = n.sibling), (n.sibling = null)),
            zo(t, !1, l, n, i));
          break;
        case "backwards":
          for (n = null, l = t.child, t.child = null; l !== null; ) {
            if (((e = l.alternate), e !== null && kl(e) === null)) {
              t.child = l;
              break;
            }
            ((e = l.sibling), (l.sibling = n), (n = l), (l = e));
          }
          zo(t, !0, n, null, i);
          break;
        case "together":
          zo(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function Rl(e, t) {
    (t.mode & 1) === 0 &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function _t(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (dn |= t.lanes),
      (n & t.childLanes) === 0)
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(u(153));
    if (t.child !== null) {
      for (
        e = t.child, n = Jt(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;
      )
        ((e = e.sibling),
          (n = n.sibling = Jt(e, e.pendingProps)),
          (n.return = t));
      n.sibling = null;
    }
    return t.child;
  }
  function Cf(e, t, n) {
    switch (t.tag) {
      case 3:
        (Pu(t), Dn());
        break;
      case 5:
        ba(t);
        break;
      case 1:
        Be(t.type) && fl(t);
        break;
      case 4:
        oo(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context,
          l = t.memoizedProps.value;
        (ce(yl, r._currentValue), (r._currentValue = l));
        break;
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (ce(ge, ge.current & 1), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
              ? Tu(e, t, n)
              : (ce(ge, ge.current & 1),
                (e = _t(e, t, n)),
                e !== null ? e.sibling : null);
        ce(ge, ge.current & 1);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (r) return _u(e, t, n);
          t.flags |= 128;
        }
        if (
          ((l = t.memoizedState),
          l !== null &&
            ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          ce(ge, ge.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return ((t.lanes = 0), Eu(e, t, n));
    }
    return _t(e, t, n);
  }
  var Lu, To, Du, Mu;
  ((Lu = function (e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        ((n.child.return = n), (n = n.child));
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      ((n.sibling.return = n.return), (n = n.sibling));
    }
  }),
    (To = function () {}),
    (Du = function (e, t, n, r) {
      var l = e.memoizedProps;
      if (l !== r) {
        ((e = t.stateNode), un(kt.current));
        var i = null;
        switch (n) {
          case "input":
            ((l = ri(e, l)), (r = ri(e, r)), (i = []));
            break;
          case "select":
            ((l = U({}, l, { value: void 0 })),
              (r = U({}, r, { value: void 0 })),
              (i = []));
            break;
          case "textarea":
            ((l = oi(e, l)), (r = oi(e, r)), (i = []));
            break;
          default:
            typeof l.onClick != "function" &&
              typeof r.onClick == "function" &&
              (e.onclick = ul);
        }
        ai(n, r);
        var a;
        n = null;
        for (N in l)
          if (!r.hasOwnProperty(N) && l.hasOwnProperty(N) && l[N] != null)
            if (N === "style") {
              var d = l[N];
              for (a in d) d.hasOwnProperty(a) && (n || (n = {}), (n[a] = ""));
            } else
              N !== "dangerouslySetInnerHTML" &&
                N !== "children" &&
                N !== "suppressContentEditableWarning" &&
                N !== "suppressHydrationWarning" &&
                N !== "autoFocus" &&
                (m.hasOwnProperty(N)
                  ? i || (i = [])
                  : (i = i || []).push(N, null));
        for (N in r) {
          var h = r[N];
          if (
            ((d = l != null ? l[N] : void 0),
            r.hasOwnProperty(N) && h !== d && (h != null || d != null))
          )
            if (N === "style")
              if (d) {
                for (a in d)
                  !d.hasOwnProperty(a) ||
                    (h && h.hasOwnProperty(a)) ||
                    (n || (n = {}), (n[a] = ""));
                for (a in h)
                  h.hasOwnProperty(a) &&
                    d[a] !== h[a] &&
                    (n || (n = {}), (n[a] = h[a]));
              } else (n || (i || (i = []), i.push(N, n)), (n = h));
            else
              N === "dangerouslySetInnerHTML"
                ? ((h = h ? h.__html : void 0),
                  (d = d ? d.__html : void 0),
                  h != null && d !== h && (i = i || []).push(N, h))
                : N === "children"
                  ? (typeof h != "string" && typeof h != "number") ||
                    (i = i || []).push(N, "" + h)
                  : N !== "suppressContentEditableWarning" &&
                    N !== "suppressHydrationWarning" &&
                    (m.hasOwnProperty(N)
                      ? (h != null && N === "onScroll" && fe("scroll", e),
                        i || d === h || (i = []))
                      : (i = i || []).push(N, h));
        }
        n && (i = i || []).push("style", n);
        var N = i;
        (t.updateQueue = N) && (t.flags |= 4);
      }
    }),
    (Mu = function (e, t, n, r) {
      n !== r && (t.flags |= 4);
    }));
  function Cr(e, t) {
    if (!he)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            (t.alternate !== null && (n = t), (t = t.sibling));
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = e.tail;
          for (var r = null; n !== null; )
            (n.alternate !== null && (r = n), (n = n.sibling));
          r === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (r.sibling = null);
      }
  }
  function Ie(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      r = 0;
    if (t)
      for (var l = e.child; l !== null; )
        ((n |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags & 14680064),
          (r |= l.flags & 14680064),
          (l.return = e),
          (l = l.sibling));
    else
      for (l = e.child; l !== null; )
        ((n |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags),
          (r |= l.flags),
          (l.return = e),
          (l = l.sibling));
    return ((e.subtreeFlags |= r), (e.childLanes = n), t);
  }
  function jf(e, t, n) {
    var r = t.pendingProps;
    switch ((Yi(t), t.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (Ie(t), null);
      case 1:
        return (Be(t.type) && dl(), Ie(t), null);
      case 3:
        return (
          (r = t.stateNode),
          On(),
          pe(Ve),
          pe(De),
          uo(),
          r.pendingContext &&
            ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (gl(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), ft !== null && (Ho(ft), (ft = null)))),
          To(e, t),
          Ie(t),
          null
        );
      case 5:
        so(t);
        var l = un(wr.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          (Du(e, t, n, r, l),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(u(166));
            return (Ie(t), null);
          }
          if (((e = un(kt.current)), gl(t))) {
            ((r = t.stateNode), (n = t.type));
            var i = t.memoizedProps;
            switch (((r[Nt] = t), (r[hr] = i), (e = (t.mode & 1) !== 0), n)) {
              case "dialog":
                (fe("cancel", r), fe("close", r));
                break;
              case "iframe":
              case "object":
              case "embed":
                fe("load", r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < fr.length; l++) fe(fr[l], r);
                break;
              case "source":
                fe("error", r);
                break;
              case "img":
              case "image":
              case "link":
                (fe("error", r), fe("load", r));
                break;
              case "details":
                fe("toggle", r);
                break;
              case "input":
                (ms(r, i), fe("invalid", r));
                break;
              case "select":
                ((r._wrapperState = { wasMultiple: !!i.multiple }),
                  fe("invalid", r));
                break;
              case "textarea":
                (vs(r, i), fe("invalid", r));
            }
            (ai(n, i), (l = null));
            for (var a in i)
              if (i.hasOwnProperty(a)) {
                var d = i[a];
                a === "children"
                  ? typeof d == "string"
                    ? r.textContent !== d &&
                      (i.suppressHydrationWarning !== !0 &&
                        al(r.textContent, d, e),
                      (l = ["children", d]))
                    : typeof d == "number" &&
                      r.textContent !== "" + d &&
                      (i.suppressHydrationWarning !== !0 &&
                        al(r.textContent, d, e),
                      (l = ["children", "" + d]))
                  : m.hasOwnProperty(a) &&
                    d != null &&
                    a === "onScroll" &&
                    fe("scroll", r);
              }
            switch (n) {
              case "input":
                (Ur(r), gs(r, i, !0));
                break;
              case "textarea":
                (Ur(r), xs(r));
                break;
              case "select":
              case "option":
                break;
              default:
                typeof i.onClick == "function" && (r.onclick = ul);
            }
            ((r = l), (t.updateQueue = r), r !== null && (t.flags |= 4));
          } else {
            ((a = l.nodeType === 9 ? l : l.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = ws(n)),
              e === "http://www.w3.org/1999/xhtml"
                ? n === "script"
                  ? ((e = a.createElement("div")),
                    (e.innerHTML = "<script><\/script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof r.is == "string"
                    ? (e = a.createElement(n, { is: r.is }))
                    : ((e = a.createElement(n)),
                      n === "select" &&
                        ((a = e),
                        r.multiple
                          ? (a.multiple = !0)
                          : r.size && (a.size = r.size)))
                : (e = a.createElementNS(e, n)),
              (e[Nt] = t),
              (e[hr] = r),
              Lu(e, t, !1, !1),
              (t.stateNode = e));
            e: {
              switch (((a = ui(n, r)), n)) {
                case "dialog":
                  (fe("cancel", e), fe("close", e), (l = r));
                  break;
                case "iframe":
                case "object":
                case "embed":
                  (fe("load", e), (l = r));
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < fr.length; l++) fe(fr[l], e);
                  l = r;
                  break;
                case "source":
                  (fe("error", e), (l = r));
                  break;
                case "img":
                case "image":
                case "link":
                  (fe("error", e), fe("load", e), (l = r));
                  break;
                case "details":
                  (fe("toggle", e), (l = r));
                  break;
                case "input":
                  (ms(e, r), (l = ri(e, r)), fe("invalid", e));
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  ((e._wrapperState = { wasMultiple: !!r.multiple }),
                    (l = U({}, r, { value: void 0 })),
                    fe("invalid", e));
                  break;
                case "textarea":
                  (vs(e, r), (l = oi(e, r)), fe("invalid", e));
                  break;
                default:
                  l = r;
              }
              (ai(n, l), (d = l));
              for (i in d)
                if (d.hasOwnProperty(i)) {
                  var h = d[i];
                  i === "style"
                    ? Ss(e, h)
                    : i === "dangerouslySetInnerHTML"
                      ? ((h = h ? h.__html : void 0), h != null && Ns(e, h))
                      : i === "children"
                        ? typeof h == "string"
                          ? (n !== "textarea" || h !== "") && qn(e, h)
                          : typeof h == "number" && qn(e, "" + h)
                        : i !== "suppressContentEditableWarning" &&
                          i !== "suppressHydrationWarning" &&
                          i !== "autoFocus" &&
                          (m.hasOwnProperty(i)
                            ? h != null && i === "onScroll" && fe("scroll", e)
                            : h != null && H(e, i, h, a));
                }
              switch (n) {
                case "input":
                  (Ur(e), gs(e, r, !1));
                  break;
                case "textarea":
                  (Ur(e), xs(e));
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + se(r.value));
                  break;
                case "select":
                  ((e.multiple = !!r.multiple),
                    (i = r.value),
                    i != null
                      ? yn(e, !!r.multiple, i, !1)
                      : r.defaultValue != null &&
                        yn(e, !!r.multiple, r.defaultValue, !0));
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = ul);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  r = !!r.autoFocus;
                  break e;
                case "img":
                  r = !0;
                  break e;
                default:
                  r = !1;
              }
            }
            r && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return (Ie(t), null);
      case 6:
        if (e && t.stateNode != null) Mu(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(u(166));
          if (((n = un(wr.current)), un(kt.current), gl(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[Nt] = t),
              (i = r.nodeValue !== n) && ((e = Xe), e !== null))
            )
              switch (e.tag) {
                case 3:
                  al(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    al(r.nodeValue, n, (e.mode & 1) !== 0);
              }
            i && (t.flags |= 4);
          } else
            ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
              (r[Nt] = t),
              (t.stateNode = r));
        }
        return (Ie(t), null);
      case 13:
        if (
          (pe(ge),
          (r = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (he && Ze !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            (Oa(), Dn(), (t.flags |= 98560), (i = !1));
          else if (((i = gl(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!i) throw Error(u(318));
              if (
                ((i = t.memoizedState),
                (i = i !== null ? i.dehydrated : null),
                !i)
              )
                throw Error(u(317));
              i[Nt] = t;
            } else
              (Dn(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (Ie(t), (i = !1));
          } else (ft !== null && (Ho(ft), (ft = null)), (i = !0));
          if (!i) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (ge.current & 1) !== 0
                  ? Pe === 0 && (Pe = 3)
                  : Bo())),
            t.updateQueue !== null && (t.flags |= 4),
            Ie(t),
            null);
      case 4:
        return (
          On(),
          To(e, t),
          e === null && pr(t.stateNode.containerInfo),
          Ie(t),
          null
        );
      case 10:
        return (no(t.type._context), Ie(t), null);
      case 17:
        return (Be(t.type) && dl(), Ie(t), null);
      case 19:
        if ((pe(ge), (i = t.memoizedState), i === null)) return (Ie(t), null);
        if (((r = (t.flags & 128) !== 0), (a = i.rendering), a === null))
          if (r) Cr(i, !1);
          else {
            if (Pe !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((a = kl(e)), a !== null)) {
                  for (
                    t.flags |= 128,
                      Cr(i, !1),
                      r = a.updateQueue,
                      r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      r = n,
                      n = t.child;
                    n !== null;
                  )
                    ((i = n),
                      (e = r),
                      (i.flags &= 14680066),
                      (a = i.alternate),
                      a === null
                        ? ((i.childLanes = 0),
                          (i.lanes = e),
                          (i.child = null),
                          (i.subtreeFlags = 0),
                          (i.memoizedProps = null),
                          (i.memoizedState = null),
                          (i.updateQueue = null),
                          (i.dependencies = null),
                          (i.stateNode = null))
                        : ((i.childLanes = a.childLanes),
                          (i.lanes = a.lanes),
                          (i.child = a.child),
                          (i.subtreeFlags = 0),
                          (i.deletions = null),
                          (i.memoizedProps = a.memoizedProps),
                          (i.memoizedState = a.memoizedState),
                          (i.updateQueue = a.updateQueue),
                          (i.type = a.type),
                          (e = a.dependencies),
                          (i.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (n = n.sibling));
                  return (ce(ge, (ge.current & 1) | 2), t.child);
                }
                e = e.sibling;
              }
            i.tail !== null &&
              ke() > Wn &&
              ((t.flags |= 128), (r = !0), Cr(i, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = kl(a)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                Cr(i, !0),
                i.tail === null &&
                  i.tailMode === "hidden" &&
                  !a.alternate &&
                  !he)
              )
                return (Ie(t), null);
            } else
              2 * ke() - i.renderingStartTime > Wn &&
                n !== 1073741824 &&
                ((t.flags |= 128), (r = !0), Cr(i, !1), (t.lanes = 4194304));
          i.isBackwards
            ? ((a.sibling = t.child), (t.child = a))
            : ((n = i.last),
              n !== null ? (n.sibling = a) : (t.child = a),
              (i.last = a));
        }
        return i.tail !== null
          ? ((t = i.tail),
            (i.rendering = t),
            (i.tail = t.sibling),
            (i.renderingStartTime = ke()),
            (t.sibling = null),
            (n = ge.current),
            ce(ge, r ? (n & 1) | 2 : n & 1),
            t)
          : (Ie(t), null);
      case 22:
      case 23:
        return (
          Vo(),
          (r = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
          r && (t.mode & 1) !== 0
            ? (Je & 1073741824) !== 0 &&
              (Ie(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Ie(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(u(156, t.tag));
  }
  function Pf(e, t) {
    switch ((Yi(t), t.tag)) {
      case 1:
        return (
          Be(t.type) && dl(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          On(),
          pe(Ve),
          pe(De),
          uo(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 5:
        return (so(t), null);
      case 13:
        if (
          (pe(ge), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(u(340));
          Dn();
        }
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return (pe(ge), null);
      case 4:
        return (On(), null);
      case 10:
        return (no(t.type._context), null);
      case 22:
      case 23:
        return (Vo(), null);
      case 24:
        return null;
      default:
        return null;
    }
  }
  var _l = !1,
    Fe = !1,
    zf = typeof WeakSet == "function" ? WeakSet : Set,
    A = null;
  function Un(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == "function")
        try {
          n(null);
        } catch (r) {
          Ne(e, t, r);
        }
      else n.current = null;
  }
  function Ro(e, t, n) {
    try {
      n();
    } catch (r) {
      Ne(e, t, r);
    }
  }
  var Iu = !1;
  function Tf(e, t) {
    if (((Wi = Xr), (e = pa()), Di(e))) {
      if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var r = n.getSelection && n.getSelection();
          if (r && r.rangeCount !== 0) {
            n = r.anchorNode;
            var l = r.anchorOffset,
              i = r.focusNode;
            r = r.focusOffset;
            try {
              (n.nodeType, i.nodeType);
            } catch {
              n = null;
              break e;
            }
            var a = 0,
              d = -1,
              h = -1,
              N = 0,
              R = 0,
              _ = e,
              P = null;
            t: for (;;) {
              for (
                var F;
                _ !== n || (l !== 0 && _.nodeType !== 3) || (d = a + l),
                  _ !== i || (r !== 0 && _.nodeType !== 3) || (h = a + r),
                  _.nodeType === 3 && (a += _.nodeValue.length),
                  (F = _.firstChild) !== null;
              )
                ((P = _), (_ = F));
              for (;;) {
                if (_ === e) break t;
                if (
                  (P === n && ++N === l && (d = a),
                  P === i && ++R === r && (h = a),
                  (F = _.nextSibling) !== null)
                )
                  break;
                ((_ = P), (P = _.parentNode));
              }
              _ = F;
            }
            n = d === -1 || h === -1 ? null : { start: d, end: h };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      Vi = { focusedElem: e, selectionRange: n }, Xr = !1, A = t;
      A !== null;
    )
      if (((t = A), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        ((e.return = t), (A = e));
      else
        for (; A !== null; ) {
          t = A;
          try {
            var W = t.alternate;
            if ((t.flags & 1024) !== 0)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (W !== null) {
                    var V = W.memoizedProps,
                      Se = W.memoizedState,
                      x = t.stateNode,
                      g = x.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? V : pt(t.type, V),
                        Se,
                      );
                    x.__reactInternalSnapshotBeforeUpdate = g;
                  }
                  break;
                case 3:
                  var w = t.stateNode.containerInfo;
                  w.nodeType === 1
                    ? (w.textContent = "")
                    : w.nodeType === 9 &&
                      w.documentElement &&
                      w.removeChild(w.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(u(163));
              }
          } catch (L) {
            Ne(t, t.return, L);
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (A = e));
            break;
          }
          A = t.return;
        }
    return ((W = Iu), (Iu = !1), W);
  }
  function jr(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var l = (r = r.next);
      do {
        if ((l.tag & e) === e) {
          var i = l.destroy;
          ((l.destroy = void 0), i !== void 0 && Ro(t, n, i));
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function Ll(e, t) {
    if (
      ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
    ) {
      var n = (t = t.next);
      do {
        if ((n.tag & e) === e) {
          var r = n.create;
          n.destroy = r();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function _o(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
        case 5:
          e = n;
          break;
        default:
          e = n;
      }
      typeof t == "function" ? t(e) : (t.current = e);
    }
  }
  function Fu(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), Fu(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[Nt],
          delete t[hr],
          delete t[Gi],
          delete t[df],
          delete t[ff])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  function Ou(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Au(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Ou(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        ((e.child.return = e), (e = e.child));
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Lo(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      ((e = e.stateNode),
        t
          ? n.nodeType === 8
            ? n.parentNode.insertBefore(e, t)
            : n.insertBefore(e, t)
          : (n.nodeType === 8
              ? ((t = n.parentNode), t.insertBefore(e, n))
              : ((t = n), t.appendChild(e)),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = ul)));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (Lo(e, t, n), e = e.sibling; e !== null; )
        (Lo(e, t, n), (e = e.sibling));
  }
  function Do(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (Do(e, t, n), e = e.sibling; e !== null; )
        (Do(e, t, n), (e = e.sibling));
  }
  var _e = null,
    mt = !1;
  function Qt(e, t, n) {
    for (n = n.child; n !== null; ) (Uu(e, t, n), (n = n.sibling));
  }
  function Uu(e, t, n) {
    if (wt && typeof wt.onCommitFiberUnmount == "function")
      try {
        wt.onCommitFiberUnmount(br, n);
      } catch {}
    switch (n.tag) {
      case 5:
        Fe || Un(n, t);
      case 6:
        var r = _e,
          l = mt;
        ((_e = null),
          Qt(e, t, n),
          (_e = r),
          (mt = l),
          _e !== null &&
            (mt
              ? ((e = _e),
                (n = n.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(n)
                  : e.removeChild(n))
              : _e.removeChild(n.stateNode)));
        break;
      case 18:
        _e !== null &&
          (mt
            ? ((e = _e),
              (n = n.stateNode),
              e.nodeType === 8
                ? bi(e.parentNode, n)
                : e.nodeType === 1 && bi(e, n),
              lr(e))
            : bi(_e, n.stateNode));
        break;
      case 4:
        ((r = _e),
          (l = mt),
          (_e = n.stateNode.containerInfo),
          (mt = !0),
          Qt(e, t, n),
          (_e = r),
          (mt = l));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !Fe &&
          ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
        ) {
          l = r = r.next;
          do {
            var i = l,
              a = i.destroy;
            ((i = i.tag),
              a !== void 0 && ((i & 2) !== 0 || (i & 4) !== 0) && Ro(n, t, a),
              (l = l.next));
          } while (l !== r);
        }
        Qt(e, t, n);
        break;
      case 1:
        if (
          !Fe &&
          (Un(n, t),
          (r = n.stateNode),
          typeof r.componentWillUnmount == "function")
        )
          try {
            ((r.props = n.memoizedProps),
              (r.state = n.memoizedState),
              r.componentWillUnmount());
          } catch (d) {
            Ne(n, t, d);
          }
        Qt(e, t, n);
        break;
      case 21:
        Qt(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? ((Fe = (r = Fe) || n.memoizedState !== null), Qt(e, t, n), (Fe = r))
          : Qt(e, t, n);
        break;
      default:
        Qt(e, t, n);
    }
  }
  function Hu(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      (n === null && (n = e.stateNode = new zf()),
        t.forEach(function (r) {
          var l = Af.bind(null, e, r);
          n.has(r) || (n.add(r), r.then(l, l));
        }));
    }
  }
  function ht(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var r = 0; r < n.length; r++) {
        var l = n[r];
        try {
          var i = e,
            a = t,
            d = a;
          e: for (; d !== null; ) {
            switch (d.tag) {
              case 5:
                ((_e = d.stateNode), (mt = !1));
                break e;
              case 3:
                ((_e = d.stateNode.containerInfo), (mt = !0));
                break e;
              case 4:
                ((_e = d.stateNode.containerInfo), (mt = !0));
                break e;
            }
            d = d.return;
          }
          if (_e === null) throw Error(u(160));
          (Uu(i, a, l), (_e = null), (mt = !1));
          var h = l.alternate;
          (h !== null && (h.return = null), (l.return = null));
        } catch (N) {
          Ne(l, t, N);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) (Wu(t, e), (t = t.sibling));
  }
  function Wu(e, t) {
    var n = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((ht(t, e), Et(e), r & 4)) {
          try {
            (jr(3, e, e.return), Ll(3, e));
          } catch (V) {
            Ne(e, e.return, V);
          }
          try {
            jr(5, e, e.return);
          } catch (V) {
            Ne(e, e.return, V);
          }
        }
        break;
      case 1:
        (ht(t, e), Et(e), r & 512 && n !== null && Un(n, n.return));
        break;
      case 5:
        if (
          (ht(t, e),
          Et(e),
          r & 512 && n !== null && Un(n, n.return),
          e.flags & 32)
        ) {
          var l = e.stateNode;
          try {
            qn(l, "");
          } catch (V) {
            Ne(e, e.return, V);
          }
        }
        if (r & 4 && ((l = e.stateNode), l != null)) {
          var i = e.memoizedProps,
            a = n !== null ? n.memoizedProps : i,
            d = e.type,
            h = e.updateQueue;
          if (((e.updateQueue = null), h !== null))
            try {
              (d === "input" &&
                i.type === "radio" &&
                i.name != null &&
                hs(l, i),
                ui(d, a));
              var N = ui(d, i);
              for (a = 0; a < h.length; a += 2) {
                var R = h[a],
                  _ = h[a + 1];
                R === "style"
                  ? Ss(l, _)
                  : R === "dangerouslySetInnerHTML"
                    ? Ns(l, _)
                    : R === "children"
                      ? qn(l, _)
                      : H(l, R, _, N);
              }
              switch (d) {
                case "input":
                  li(l, i);
                  break;
                case "textarea":
                  ys(l, i);
                  break;
                case "select":
                  var P = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!i.multiple;
                  var F = i.value;
                  F != null
                    ? yn(l, !!i.multiple, F, !1)
                    : P !== !!i.multiple &&
                      (i.defaultValue != null
                        ? yn(l, !!i.multiple, i.defaultValue, !0)
                        : yn(l, !!i.multiple, i.multiple ? [] : "", !1));
              }
              l[hr] = i;
            } catch (V) {
              Ne(e, e.return, V);
            }
        }
        break;
      case 6:
        if ((ht(t, e), Et(e), r & 4)) {
          if (e.stateNode === null) throw Error(u(162));
          ((l = e.stateNode), (i = e.memoizedProps));
          try {
            l.nodeValue = i;
          } catch (V) {
            Ne(e, e.return, V);
          }
        }
        break;
      case 3:
        if (
          (ht(t, e), Et(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            lr(t.containerInfo);
          } catch (V) {
            Ne(e, e.return, V);
          }
        break;
      case 4:
        (ht(t, e), Et(e));
        break;
      case 13:
        (ht(t, e),
          Et(e),
          (l = e.child),
          l.flags & 8192 &&
            ((i = l.memoizedState !== null),
            (l.stateNode.isHidden = i),
            !i ||
              (l.alternate !== null && l.alternate.memoizedState !== null) ||
              (Fo = ke())),
          r & 4 && Hu(e));
        break;
      case 22:
        if (
          ((R = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((Fe = (N = Fe) || R), ht(t, e), (Fe = N)) : ht(t, e),
          Et(e),
          r & 8192)
        ) {
          if (
            ((N = e.memoizedState !== null),
            (e.stateNode.isHidden = N) && !R && (e.mode & 1) !== 0)
          )
            for (A = e, R = e.child; R !== null; ) {
              for (_ = A = R; A !== null; ) {
                switch (((P = A), (F = P.child), P.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    jr(4, P, P.return);
                    break;
                  case 1:
                    Un(P, P.return);
                    var W = P.stateNode;
                    if (typeof W.componentWillUnmount == "function") {
                      ((r = P), (n = P.return));
                      try {
                        ((t = r),
                          (W.props = t.memoizedProps),
                          (W.state = t.memoizedState),
                          W.componentWillUnmount());
                      } catch (V) {
                        Ne(r, n, V);
                      }
                    }
                    break;
                  case 5:
                    Un(P, P.return);
                    break;
                  case 22:
                    if (P.memoizedState !== null) {
                      $u(_);
                      continue;
                    }
                }
                F !== null ? ((F.return = P), (A = F)) : $u(_);
              }
              R = R.sibling;
            }
          e: for (R = null, _ = e; ; ) {
            if (_.tag === 5) {
              if (R === null) {
                R = _;
                try {
                  ((l = _.stateNode),
                    N
                      ? ((i = l.style),
                        typeof i.setProperty == "function"
                          ? i.setProperty("display", "none", "important")
                          : (i.display = "none"))
                      : ((d = _.stateNode),
                        (h = _.memoizedProps.style),
                        (a =
                          h != null && h.hasOwnProperty("display")
                            ? h.display
                            : null),
                        (d.style.display = ks("display", a))));
                } catch (V) {
                  Ne(e, e.return, V);
                }
              }
            } else if (_.tag === 6) {
              if (R === null)
                try {
                  _.stateNode.nodeValue = N ? "" : _.memoizedProps;
                } catch (V) {
                  Ne(e, e.return, V);
                }
            } else if (
              ((_.tag !== 22 && _.tag !== 23) ||
                _.memoizedState === null ||
                _ === e) &&
              _.child !== null
            ) {
              ((_.child.return = _), (_ = _.child));
              continue;
            }
            if (_ === e) break e;
            for (; _.sibling === null; ) {
              if (_.return === null || _.return === e) break e;
              (R === _ && (R = null), (_ = _.return));
            }
            (R === _ && (R = null),
              (_.sibling.return = _.return),
              (_ = _.sibling));
          }
        }
        break;
      case 19:
        (ht(t, e), Et(e), r & 4 && Hu(e));
        break;
      case 21:
        break;
      default:
        (ht(t, e), Et(e));
    }
  }
  function Et(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (Ou(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(u(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && (qn(l, ""), (r.flags &= -33));
            var i = Au(e);
            Do(e, i, l);
            break;
          case 3:
          case 4:
            var a = r.stateNode.containerInfo,
              d = Au(e);
            Lo(e, d, a);
            break;
          default:
            throw Error(u(161));
        }
      } catch (h) {
        Ne(e, e.return, h);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Rf(e, t, n) {
    ((A = e), Vu(e));
  }
  function Vu(e, t, n) {
    for (var r = (e.mode & 1) !== 0; A !== null; ) {
      var l = A,
        i = l.child;
      if (l.tag === 22 && r) {
        var a = l.memoizedState !== null || _l;
        if (!a) {
          var d = l.alternate,
            h = (d !== null && d.memoizedState !== null) || Fe;
          d = _l;
          var N = Fe;
          if (((_l = a), (Fe = h) && !N))
            for (A = l; A !== null; )
              ((a = A),
                (h = a.child),
                a.tag === 22 && a.memoizedState !== null
                  ? bu(l)
                  : h !== null
                    ? ((h.return = a), (A = h))
                    : bu(l));
          for (; i !== null; ) ((A = i), Vu(i), (i = i.sibling));
          ((A = l), (_l = d), (Fe = N));
        }
        Bu(e);
      } else
        (l.subtreeFlags & 8772) !== 0 && i !== null
          ? ((i.return = l), (A = i))
          : Bu(e);
    }
  }
  function Bu(e) {
    for (; A !== null; ) {
      var t = A;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                Fe || Ll(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !Fe)
                  if (n === null) r.componentDidMount();
                  else {
                    var l =
                      t.elementType === t.type
                        ? n.memoizedProps
                        : pt(t.type, n.memoizedProps);
                    r.componentDidUpdate(
                      l,
                      n.memoizedState,
                      r.__reactInternalSnapshotBeforeUpdate,
                    );
                  }
                var i = t.updateQueue;
                i !== null && $a(t, i, r);
                break;
              case 3:
                var a = t.updateQueue;
                if (a !== null) {
                  if (((n = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        n = t.child.stateNode;
                        break;
                      case 1:
                        n = t.child.stateNode;
                    }
                  $a(t, a, n);
                }
                break;
              case 5:
                var d = t.stateNode;
                if (n === null && t.flags & 4) {
                  n = d;
                  var h = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      h.autoFocus && n.focus();
                      break;
                    case "img":
                      h.src && (n.src = h.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (t.memoizedState === null) {
                  var N = t.alternate;
                  if (N !== null) {
                    var R = N.memoizedState;
                    if (R !== null) {
                      var _ = R.dehydrated;
                      _ !== null && lr(_);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(u(163));
            }
          Fe || (t.flags & 512 && _o(t));
        } catch (P) {
          Ne(t, t.return, P);
        }
      }
      if (t === e) {
        A = null;
        break;
      }
      if (((n = t.sibling), n !== null)) {
        ((n.return = t.return), (A = n));
        break;
      }
      A = t.return;
    }
  }
  function $u(e) {
    for (; A !== null; ) {
      var t = A;
      if (t === e) {
        A = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        ((n.return = t.return), (A = n));
        break;
      }
      A = t.return;
    }
  }
  function bu(e) {
    for (; A !== null; ) {
      var t = A;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              Ll(4, t);
            } catch (h) {
              Ne(t, n, h);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var l = t.return;
              try {
                r.componentDidMount();
              } catch (h) {
                Ne(t, l, h);
              }
            }
            var i = t.return;
            try {
              _o(t);
            } catch (h) {
              Ne(t, i, h);
            }
            break;
          case 5:
            var a = t.return;
            try {
              _o(t);
            } catch (h) {
              Ne(t, a, h);
            }
        }
      } catch (h) {
        Ne(t, t.return, h);
      }
      if (t === e) {
        A = null;
        break;
      }
      var d = t.sibling;
      if (d !== null) {
        ((d.return = t.return), (A = d));
        break;
      }
      A = t.return;
    }
  }
  var _f = Math.ceil,
    Dl = ie.ReactCurrentDispatcher,
    Mo = ie.ReactCurrentOwner,
    lt = ie.ReactCurrentBatchConfig,
    te = 0,
    Te = null,
    Ee = null,
    Le = 0,
    Je = 0,
    Hn = Bt(0),
    Pe = 0,
    Pr = null,
    dn = 0,
    Ml = 0,
    Io = 0,
    zr = null,
    be = null,
    Fo = 0,
    Wn = 1 / 0,
    Lt = null,
    Il = !1,
    Oo = null,
    Kt = null,
    Fl = !1,
    Yt = null,
    Ol = 0,
    Tr = 0,
    Ao = null,
    Al = -1,
    Ul = 0;
  function He() {
    return (te & 6) !== 0 ? ke() : Al !== -1 ? Al : (Al = ke());
  }
  function Xt(e) {
    return (e.mode & 1) === 0
      ? 1
      : (te & 2) !== 0 && Le !== 0
        ? Le & -Le
        : mf.transition !== null
          ? (Ul === 0 && (Ul = As()), Ul)
          : ((e = ae),
            e !== 0 ||
              ((e = window.event), (e = e === void 0 ? 16 : qs(e.type))),
            e);
  }
  function gt(e, t, n, r) {
    if (50 < Tr) throw ((Tr = 0), (Ao = null), Error(u(185)));
    (Jn(e, n, r),
      ((te & 2) === 0 || e !== Te) &&
        (e === Te && ((te & 2) === 0 && (Ml |= n), Pe === 4 && Zt(e, Le)),
        Ge(e, r),
        n === 1 &&
          te === 0 &&
          (t.mode & 1) === 0 &&
          ((Wn = ke() + 500), pl && bt())));
  }
  function Ge(e, t) {
    var n = e.callbackNode;
    pd(e, t);
    var r = Qr(e, e === Te ? Le : 0);
    if (r === 0)
      (n !== null && Is(n), (e.callbackNode = null), (e.callbackPriority = 0));
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && Is(n), t === 1))
        (e.tag === 0 ? pf(qu.bind(null, e)) : La(qu.bind(null, e)),
          uf(function () {
            (te & 6) === 0 && bt();
          }),
          (n = null));
      else {
        switch (Us(r)) {
          case 1:
            n = gi;
            break;
          case 4:
            n = Fs;
            break;
          case 16:
            n = $r;
            break;
          case 536870912:
            n = Os;
            break;
          default:
            n = $r;
        }
        n = tc(n, Gu.bind(null, e));
      }
      ((e.callbackPriority = t), (e.callbackNode = n));
    }
  }
  function Gu(e, t) {
    if (((Al = -1), (Ul = 0), (te & 6) !== 0)) throw Error(u(327));
    var n = e.callbackNode;
    if (Vn() && e.callbackNode !== n) return null;
    var r = Qr(e, e === Te ? Le : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = Hl(e, r);
    else {
      t = r;
      var l = te;
      te |= 2;
      var i = Ku();
      (Te !== e || Le !== t) && ((Lt = null), (Wn = ke() + 500), pn(e, t));
      do
        try {
          Mf();
          break;
        } catch (d) {
          Qu(e, d);
        }
      while (!0);
      (to(),
        (Dl.current = i),
        (te = l),
        Ee !== null ? (t = 0) : ((Te = null), (Le = 0), (t = Pe)));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((l = vi(e)), l !== 0 && ((r = l), (t = Uo(e, l)))),
        t === 1)
      )
        throw ((n = Pr), pn(e, 0), Zt(e, r), Ge(e, ke()), n);
      if (t === 6) Zt(e, r);
      else {
        if (
          ((l = e.current.alternate),
          (r & 30) === 0 &&
            !Lf(l) &&
            ((t = Hl(e, r)),
            t === 2 && ((i = vi(e)), i !== 0 && ((r = i), (t = Uo(e, i)))),
            t === 1))
        )
          throw ((n = Pr), pn(e, 0), Zt(e, r), Ge(e, ke()), n);
        switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(u(345));
          case 2:
            mn(e, be, Lt);
            break;
          case 3:
            if (
              (Zt(e, r),
              (r & 130023424) === r && ((t = Fo + 500 - ke()), 10 < t))
            ) {
              if (Qr(e, 0) !== 0) break;
              if (((l = e.suspendedLanes), (l & r) !== r)) {
                (He(), (e.pingedLanes |= e.suspendedLanes & l));
                break;
              }
              e.timeoutHandle = $i(mn.bind(null, e, be, Lt), t);
              break;
            }
            mn(e, be, Lt);
            break;
          case 4:
            if ((Zt(e, r), (r & 4194240) === r)) break;
            for (t = e.eventTimes, l = -1; 0 < r; ) {
              var a = 31 - ct(r);
              ((i = 1 << a), (a = t[a]), a > l && (l = a), (r &= ~i));
            }
            if (
              ((r = l),
              (r = ke() - r),
              (r =
                (120 > r
                  ? 120
                  : 480 > r
                    ? 480
                    : 1080 > r
                      ? 1080
                      : 1920 > r
                        ? 1920
                        : 3e3 > r
                          ? 3e3
                          : 4320 > r
                            ? 4320
                            : 1960 * _f(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = $i(mn.bind(null, e, be, Lt), r);
              break;
            }
            mn(e, be, Lt);
            break;
          case 5:
            mn(e, be, Lt);
            break;
          default:
            throw Error(u(329));
        }
      }
    }
    return (Ge(e, ke()), e.callbackNode === n ? Gu.bind(null, e) : null);
  }
  function Uo(e, t) {
    var n = zr;
    return (
      e.current.memoizedState.isDehydrated && (pn(e, t).flags |= 256),
      (e = Hl(e, t)),
      e !== 2 && ((t = be), (be = n), t !== null && Ho(t)),
      e
    );
  }
  function Ho(e) {
    be === null ? (be = e) : be.push.apply(be, e);
  }
  function Lf(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && ((n = n.stores), n !== null))
          for (var r = 0; r < n.length; r++) {
            var l = n[r],
              i = l.getSnapshot;
            l = l.value;
            try {
              if (!dt(i(), l)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
        ((n.return = t), (t = n));
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    }
    return !0;
  }
  function Zt(e, t) {
    for (
      t &= ~Io,
        t &= ~Ml,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;
    ) {
      var n = 31 - ct(t),
        r = 1 << n;
      ((e[n] = -1), (t &= ~r));
    }
  }
  function qu(e) {
    if ((te & 6) !== 0) throw Error(u(327));
    Vn();
    var t = Qr(e, 0);
    if ((t & 1) === 0) return (Ge(e, ke()), null);
    var n = Hl(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = vi(e);
      r !== 0 && ((t = r), (n = Uo(e, r)));
    }
    if (n === 1) throw ((n = Pr), pn(e, 0), Zt(e, t), Ge(e, ke()), n);
    if (n === 6) throw Error(u(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      mn(e, be, Lt),
      Ge(e, ke()),
      null
    );
  }
  function Wo(e, t) {
    var n = te;
    te |= 1;
    try {
      return e(t);
    } finally {
      ((te = n), te === 0 && ((Wn = ke() + 500), pl && bt()));
    }
  }
  function fn(e) {
    Yt !== null && Yt.tag === 0 && (te & 6) === 0 && Vn();
    var t = te;
    te |= 1;
    var n = lt.transition,
      r = ae;
    try {
      if (((lt.transition = null), (ae = 1), e)) return e();
    } finally {
      ((ae = r), (lt.transition = n), (te = t), (te & 6) === 0 && bt());
    }
  }
  function Vo() {
    ((Je = Hn.current), pe(Hn));
  }
  function pn(e, t) {
    ((e.finishedWork = null), (e.finishedLanes = 0));
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), af(n)), Ee !== null))
      for (n = Ee.return; n !== null; ) {
        var r = n;
        switch ((Yi(r), r.tag)) {
          case 1:
            ((r = r.type.childContextTypes), r != null && dl());
            break;
          case 3:
            (On(), pe(Ve), pe(De), uo());
            break;
          case 5:
            so(r);
            break;
          case 4:
            On();
            break;
          case 13:
            pe(ge);
            break;
          case 19:
            pe(ge);
            break;
          case 10:
            no(r.type._context);
            break;
          case 22:
          case 23:
            Vo();
        }
        n = n.return;
      }
    if (
      ((Te = e),
      (Ee = e = Jt(e.current, null)),
      (Le = Je = t),
      (Pe = 0),
      (Pr = null),
      (Io = Ml = dn = 0),
      (be = zr = null),
      an !== null)
    ) {
      for (t = 0; t < an.length; t++)
        if (((n = an[t]), (r = n.interleaved), r !== null)) {
          n.interleaved = null;
          var l = r.next,
            i = n.pending;
          if (i !== null) {
            var a = i.next;
            ((i.next = l), (r.next = a));
          }
          n.pending = r;
        }
      an = null;
    }
    return e;
  }
  function Qu(e, t) {
    do {
      var n = Ee;
      try {
        if ((to(), (Sl.current = Pl), El)) {
          for (var r = ve.memoizedState; r !== null; ) {
            var l = r.queue;
            (l !== null && (l.pending = null), (r = r.next));
          }
          El = !1;
        }
        if (
          ((cn = 0),
          (ze = je = ve = null),
          (Nr = !1),
          (kr = 0),
          (Mo.current = null),
          n === null || n.return === null)
        ) {
          ((Pe = 1), (Pr = t), (Ee = null));
          break;
        }
        e: {
          var i = e,
            a = n.return,
            d = n,
            h = t;
          if (
            ((t = Le),
            (d.flags |= 32768),
            h !== null && typeof h == "object" && typeof h.then == "function")
          ) {
            var N = h,
              R = d,
              _ = R.tag;
            if ((R.mode & 1) === 0 && (_ === 0 || _ === 11 || _ === 15)) {
              var P = R.alternate;
              P
                ? ((R.updateQueue = P.updateQueue),
                  (R.memoizedState = P.memoizedState),
                  (R.lanes = P.lanes))
                : ((R.updateQueue = null), (R.memoizedState = null));
            }
            var F = xu(a);
            if (F !== null) {
              ((F.flags &= -257),
                wu(F, a, d, i, t),
                F.mode & 1 && yu(i, N, t),
                (t = F),
                (h = N));
              var W = t.updateQueue;
              if (W === null) {
                var V = new Set();
                (V.add(h), (t.updateQueue = V));
              } else W.add(h);
              break e;
            } else {
              if ((t & 1) === 0) {
                (yu(i, N, t), Bo());
                break e;
              }
              h = Error(u(426));
            }
          } else if (he && d.mode & 1) {
            var Se = xu(a);
            if (Se !== null) {
              ((Se.flags & 65536) === 0 && (Se.flags |= 256),
                wu(Se, a, d, i, t),
                Ji(An(h, d)));
              break e;
            }
          }
          ((i = h = An(h, d)),
            Pe !== 4 && (Pe = 2),
            zr === null ? (zr = [i]) : zr.push(i),
            (i = a));
          do {
            switch (i.tag) {
              case 3:
                ((i.flags |= 65536), (t &= -t), (i.lanes |= t));
                var x = gu(i, h, t);
                Ba(i, x);
                break e;
              case 1:
                d = h;
                var g = i.type,
                  w = i.stateNode;
                if (
                  (i.flags & 128) === 0 &&
                  (typeof g.getDerivedStateFromError == "function" ||
                    (w !== null &&
                      typeof w.componentDidCatch == "function" &&
                      (Kt === null || !Kt.has(w))))
                ) {
                  ((i.flags |= 65536), (t &= -t), (i.lanes |= t));
                  var L = vu(i, d, t);
                  Ba(i, L);
                  break e;
                }
            }
            i = i.return;
          } while (i !== null);
        }
        Xu(n);
      } catch ($) {
        ((t = $), Ee === n && n !== null && (Ee = n = n.return));
        continue;
      }
      break;
    } while (!0);
  }
  function Ku() {
    var e = Dl.current;
    return ((Dl.current = Pl), e === null ? Pl : e);
  }
  function Bo() {
    ((Pe === 0 || Pe === 3 || Pe === 2) && (Pe = 4),
      Te === null ||
        ((dn & 268435455) === 0 && (Ml & 268435455) === 0) ||
        Zt(Te, Le));
  }
  function Hl(e, t) {
    var n = te;
    te |= 2;
    var r = Ku();
    (Te !== e || Le !== t) && ((Lt = null), pn(e, t));
    do
      try {
        Df();
        break;
      } catch (l) {
        Qu(e, l);
      }
    while (!0);
    if ((to(), (te = n), (Dl.current = r), Ee !== null)) throw Error(u(261));
    return ((Te = null), (Le = 0), Pe);
  }
  function Df() {
    for (; Ee !== null; ) Yu(Ee);
  }
  function Mf() {
    for (; Ee !== null && !ld(); ) Yu(Ee);
  }
  function Yu(e) {
    var t = ec(e.alternate, e, Je);
    ((e.memoizedProps = e.pendingProps),
      t === null ? Xu(e) : (Ee = t),
      (Mo.current = null));
  }
  function Xu(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((n = jf(n, t, Je)), n !== null)) {
          Ee = n;
          return;
        }
      } else {
        if (((n = Pf(n, t)), n !== null)) {
          ((n.flags &= 32767), (Ee = n));
          return;
        }
        if (e !== null)
          ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
        else {
          ((Pe = 6), (Ee = null));
          return;
        }
      }
      if (((t = t.sibling), t !== null)) {
        Ee = t;
        return;
      }
      Ee = t = e;
    } while (t !== null);
    Pe === 0 && (Pe = 5);
  }
  function mn(e, t, n) {
    var r = ae,
      l = lt.transition;
    try {
      ((lt.transition = null), (ae = 1), If(e, t, n, r));
    } finally {
      ((lt.transition = l), (ae = r));
    }
    return null;
  }
  function If(e, t, n, r) {
    do Vn();
    while (Yt !== null);
    if ((te & 6) !== 0) throw Error(u(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
      throw Error(u(177));
    ((e.callbackNode = null), (e.callbackPriority = 0));
    var i = n.lanes | n.childLanes;
    if (
      (md(e, i),
      e === Te && ((Ee = Te = null), (Le = 0)),
      ((n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0) ||
        Fl ||
        ((Fl = !0),
        tc($r, function () {
          return (Vn(), null);
        })),
      (i = (n.flags & 15990) !== 0),
      (n.subtreeFlags & 15990) !== 0 || i)
    ) {
      ((i = lt.transition), (lt.transition = null));
      var a = ae;
      ae = 1;
      var d = te;
      ((te |= 4),
        (Mo.current = null),
        Tf(e, n),
        Wu(n, e),
        ef(Vi),
        (Xr = !!Wi),
        (Vi = Wi = null),
        (e.current = n),
        Rf(n),
        id(),
        (te = d),
        (ae = a),
        (lt.transition = i));
    } else e.current = n;
    if (
      (Fl && ((Fl = !1), (Yt = e), (Ol = l)),
      (i = e.pendingLanes),
      i === 0 && (Kt = null),
      ad(n.stateNode),
      Ge(e, ke()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        ((l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest }));
    if (Il) throw ((Il = !1), (e = Oo), (Oo = null), e);
    return (
      (Ol & 1) !== 0 && e.tag !== 0 && Vn(),
      (i = e.pendingLanes),
      (i & 1) !== 0 ? (e === Ao ? Tr++ : ((Tr = 0), (Ao = e))) : (Tr = 0),
      bt(),
      null
    );
  }
  function Vn() {
    if (Yt !== null) {
      var e = Us(Ol),
        t = lt.transition,
        n = ae;
      try {
        if (((lt.transition = null), (ae = 16 > e ? 16 : e), Yt === null))
          var r = !1;
        else {
          if (((e = Yt), (Yt = null), (Ol = 0), (te & 6) !== 0))
            throw Error(u(331));
          var l = te;
          for (te |= 4, A = e.current; A !== null; ) {
            var i = A,
              a = i.child;
            if ((A.flags & 16) !== 0) {
              var d = i.deletions;
              if (d !== null) {
                for (var h = 0; h < d.length; h++) {
                  var N = d[h];
                  for (A = N; A !== null; ) {
                    var R = A;
                    switch (R.tag) {
                      case 0:
                      case 11:
                      case 15:
                        jr(8, R, i);
                    }
                    var _ = R.child;
                    if (_ !== null) ((_.return = R), (A = _));
                    else
                      for (; A !== null; ) {
                        R = A;
                        var P = R.sibling,
                          F = R.return;
                        if ((Fu(R), R === N)) {
                          A = null;
                          break;
                        }
                        if (P !== null) {
                          ((P.return = F), (A = P));
                          break;
                        }
                        A = F;
                      }
                  }
                }
                var W = i.alternate;
                if (W !== null) {
                  var V = W.child;
                  if (V !== null) {
                    W.child = null;
                    do {
                      var Se = V.sibling;
                      ((V.sibling = null), (V = Se));
                    } while (V !== null);
                  }
                }
                A = i;
              }
            }
            if ((i.subtreeFlags & 2064) !== 0 && a !== null)
              ((a.return = i), (A = a));
            else
              e: for (; A !== null; ) {
                if (((i = A), (i.flags & 2048) !== 0))
                  switch (i.tag) {
                    case 0:
                    case 11:
                    case 15:
                      jr(9, i, i.return);
                  }
                var x = i.sibling;
                if (x !== null) {
                  ((x.return = i.return), (A = x));
                  break e;
                }
                A = i.return;
              }
          }
          var g = e.current;
          for (A = g; A !== null; ) {
            a = A;
            var w = a.child;
            if ((a.subtreeFlags & 2064) !== 0 && w !== null)
              ((w.return = a), (A = w));
            else
              e: for (a = g; A !== null; ) {
                if (((d = A), (d.flags & 2048) !== 0))
                  try {
                    switch (d.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ll(9, d);
                    }
                  } catch ($) {
                    Ne(d, d.return, $);
                  }
                if (d === a) {
                  A = null;
                  break e;
                }
                var L = d.sibling;
                if (L !== null) {
                  ((L.return = d.return), (A = L));
                  break e;
                }
                A = d.return;
              }
          }
          if (
            ((te = l),
            bt(),
            wt && typeof wt.onPostCommitFiberRoot == "function")
          )
            try {
              wt.onPostCommitFiberRoot(br, e);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        ((ae = n), (lt.transition = t));
      }
    }
    return !1;
  }
  function Zu(e, t, n) {
    ((t = An(n, t)),
      (t = gu(e, t, 1)),
      (e = qt(e, t, 1)),
      (t = He()),
      e !== null && (Jn(e, 1, t), Ge(e, t)));
  }
  function Ne(e, t, n) {
    if (e.tag === 3) Zu(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Zu(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof r.componentDidCatch == "function" &&
              (Kt === null || !Kt.has(r)))
          ) {
            ((e = An(n, e)),
              (e = vu(t, e, 1)),
              (t = qt(t, e, 1)),
              (e = He()),
              t !== null && (Jn(t, 1, e), Ge(t, e)));
            break;
          }
        }
        t = t.return;
      }
  }
  function Ff(e, t, n) {
    var r = e.pingCache;
    (r !== null && r.delete(t),
      (t = He()),
      (e.pingedLanes |= e.suspendedLanes & n),
      Te === e &&
        (Le & n) === n &&
        (Pe === 4 || (Pe === 3 && (Le & 130023424) === Le && 500 > ke() - Fo)
          ? pn(e, 0)
          : (Io |= n)),
      Ge(e, t));
  }
  function Ju(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = qr), (qr <<= 1), (qr & 130023424) === 0 && (qr = 4194304)));
    var n = He();
    ((e = Tt(e, t)), e !== null && (Jn(e, t, n), Ge(e, n)));
  }
  function Of(e) {
    var t = e.memoizedState,
      n = 0;
    (t !== null && (n = t.retryLane), Ju(e, n));
  }
  function Af(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode,
          l = e.memoizedState;
        l !== null && (n = l.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(u(314));
    }
    (r !== null && r.delete(t), Ju(e, n));
  }
  var ec;
  ec = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || Ve.current) $e = !0;
      else {
        if ((e.lanes & n) === 0 && (t.flags & 128) === 0)
          return (($e = !1), Cf(e, t, n));
        $e = (e.flags & 131072) !== 0;
      }
    else (($e = !1), he && (t.flags & 1048576) !== 0 && Da(t, hl, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        (Rl(e, t), (e = t.pendingProps));
        var l = Rn(t, De.current);
        (Fn(t, n), (l = po(null, t, r, e, l, n)));
        var i = mo();
        return (
          (t.flags |= 1),
          typeof l == "object" &&
          l !== null &&
          typeof l.render == "function" &&
          l.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              Be(r) ? ((i = !0), fl(t)) : (i = !1),
              (t.memoizedState =
                l.state !== null && l.state !== void 0 ? l.state : null),
              io(t),
              (l.updater = zl),
              (t.stateNode = l),
              (l._reactInternals = t),
              wo(t, r, e, n),
              (t = Eo(null, t, r, !0, i, n)))
            : ((t.tag = 0), he && i && Ki(t), Ue(null, t, l, n), (t = t.child)),
          t
        );
      case 16:
        r = t.elementType;
        e: {
          switch (
            (Rl(e, t),
            (e = t.pendingProps),
            (l = r._init),
            (r = l(r._payload)),
            (t.type = r),
            (l = t.tag = Hf(r)),
            (e = pt(r, e)),
            l)
          ) {
            case 0:
              t = So(null, t, r, e, n);
              break e;
            case 1:
              t = ju(null, t, r, e, n);
              break e;
            case 11:
              t = Nu(null, t, r, e, n);
              break e;
            case 14:
              t = ku(null, t, r, pt(r.type, e), n);
              break e;
          }
          throw Error(u(306, r, ""));
        }
        return t;
      case 0:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : pt(r, l)),
          So(e, t, r, l, n)
        );
      case 1:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : pt(r, l)),
          ju(e, t, r, l, n)
        );
      case 3:
        e: {
          if ((Pu(t), e === null)) throw Error(u(387));
          ((r = t.pendingProps),
            (i = t.memoizedState),
            (l = i.element),
            Va(e, t),
            Nl(t, r, null, n));
          var a = t.memoizedState;
          if (((r = a.element), i.isDehydrated))
            if (
              ((i = {
                element: r,
                isDehydrated: !1,
                cache: a.cache,
                pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
                transitions: a.transitions,
              }),
              (t.updateQueue.baseState = i),
              (t.memoizedState = i),
              t.flags & 256)
            ) {
              ((l = An(Error(u(423)), t)), (t = zu(e, t, r, n, l)));
              break e;
            } else if (r !== l) {
              ((l = An(Error(u(424)), t)), (t = zu(e, t, r, n, l)));
              break e;
            } else
              for (
                Ze = Vt(t.stateNode.containerInfo.firstChild),
                  Xe = t,
                  he = !0,
                  ft = null,
                  n = Ha(t, null, r, n),
                  t.child = n;
                n;
              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
          else {
            if ((Dn(), r === l)) {
              t = _t(e, t, n);
              break e;
            }
            Ue(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          ba(t),
          e === null && Zi(t),
          (r = t.type),
          (l = t.pendingProps),
          (i = e !== null ? e.memoizedProps : null),
          (a = l.children),
          Bi(r, l) ? (a = null) : i !== null && Bi(r, i) && (t.flags |= 32),
          Cu(e, t),
          Ue(e, t, a, n),
          t.child
        );
      case 6:
        return (e === null && Zi(t), null);
      case 13:
        return Tu(e, t, n);
      case 4:
        return (
          oo(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = Mn(t, null, r, n)) : Ue(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : pt(r, l)),
          Nu(e, t, r, l, n)
        );
      case 7:
        return (Ue(e, t, t.pendingProps, n), t.child);
      case 8:
        return (Ue(e, t, t.pendingProps.children, n), t.child);
      case 12:
        return (Ue(e, t, t.pendingProps.children, n), t.child);
      case 10:
        e: {
          if (
            ((r = t.type._context),
            (l = t.pendingProps),
            (i = t.memoizedProps),
            (a = l.value),
            ce(yl, r._currentValue),
            (r._currentValue = a),
            i !== null)
          )
            if (dt(i.value, a)) {
              if (i.children === l.children && !Ve.current) {
                t = _t(e, t, n);
                break e;
              }
            } else
              for (i = t.child, i !== null && (i.return = t); i !== null; ) {
                var d = i.dependencies;
                if (d !== null) {
                  a = i.child;
                  for (var h = d.firstContext; h !== null; ) {
                    if (h.context === r) {
                      if (i.tag === 1) {
                        ((h = Rt(-1, n & -n)), (h.tag = 2));
                        var N = i.updateQueue;
                        if (N !== null) {
                          N = N.shared;
                          var R = N.pending;
                          (R === null
                            ? (h.next = h)
                            : ((h.next = R.next), (R.next = h)),
                            (N.pending = h));
                        }
                      }
                      ((i.lanes |= n),
                        (h = i.alternate),
                        h !== null && (h.lanes |= n),
                        ro(i.return, n, t),
                        (d.lanes |= n));
                      break;
                    }
                    h = h.next;
                  }
                } else if (i.tag === 10) a = i.type === t.type ? null : i.child;
                else if (i.tag === 18) {
                  if (((a = i.return), a === null)) throw Error(u(341));
                  ((a.lanes |= n),
                    (d = a.alternate),
                    d !== null && (d.lanes |= n),
                    ro(a, n, t),
                    (a = i.sibling));
                } else a = i.child;
                if (a !== null) a.return = i;
                else
                  for (a = i; a !== null; ) {
                    if (a === t) {
                      a = null;
                      break;
                    }
                    if (((i = a.sibling), i !== null)) {
                      ((i.return = a.return), (a = i));
                      break;
                    }
                    a = a.return;
                  }
                i = a;
              }
          (Ue(e, t, l.children, n), (t = t.child));
        }
        return t;
      case 9:
        return (
          (l = t.type),
          (r = t.pendingProps.children),
          Fn(t, n),
          (l = nt(l)),
          (r = r(l)),
          (t.flags |= 1),
          Ue(e, t, r, n),
          t.child
        );
      case 14:
        return (
          (r = t.type),
          (l = pt(r, t.pendingProps)),
          (l = pt(r.type, l)),
          ku(e, t, r, l, n)
        );
      case 15:
        return Su(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : pt(r, l)),
          Rl(e, t),
          (t.tag = 1),
          Be(r) ? ((e = !0), fl(t)) : (e = !1),
          Fn(t, n),
          mu(t, r, l),
          wo(t, r, l, n),
          Eo(null, t, r, !0, e, n)
        );
      case 19:
        return _u(e, t, n);
      case 22:
        return Eu(e, t, n);
    }
    throw Error(u(156, t.tag));
  };
  function tc(e, t) {
    return Ms(e, t);
  }
  function Uf(e, t, n, r) {
    ((this.tag = e),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = r),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function it(e, t, n, r) {
    return new Uf(e, t, n, r);
  }
  function $o(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function Hf(e) {
    if (typeof e == "function") return $o(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === yt)) return 11;
      if (e === xt) return 14;
    }
    return 2;
  }
  function Jt(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = it(e.tag, t, e.key, e.mode)),
          (n.elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t),
          (n.type = e.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = e.flags & 14680064),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      n
    );
  }
  function Wl(e, t, n, r, l, i) {
    var a = 2;
    if (((r = e), typeof e == "function")) $o(e) && (a = 1);
    else if (typeof e == "string") a = 5;
    else
      e: switch (e) {
        case xe:
          return hn(n.children, l, i, t);
        case Ce:
          ((a = 8), (l |= 8));
          break;
        case Oe:
          return (
            (e = it(12, n, t, l | 2)),
            (e.elementType = Oe),
            (e.lanes = i),
            e
          );
        case Qe:
          return (
            (e = it(13, n, t, l)),
            (e.elementType = Qe),
            (e.lanes = i),
            e
          );
        case ut:
          return (
            (e = it(19, n, t, l)),
            (e.elementType = ut),
            (e.lanes = i),
            e
          );
        case we:
          return Vl(n, l, i, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Ae:
                a = 10;
                break e;
              case tn:
                a = 9;
                break e;
              case yt:
                a = 11;
                break e;
              case xt:
                a = 14;
                break e;
              case We:
                ((a = 16), (r = null));
                break e;
            }
          throw Error(u(130, e == null ? e : typeof e, ""));
      }
    return (
      (t = it(a, n, t, l)),
      (t.elementType = e),
      (t.type = r),
      (t.lanes = i),
      t
    );
  }
  function hn(e, t, n, r) {
    return ((e = it(7, e, r, t)), (e.lanes = n), e);
  }
  function Vl(e, t, n, r) {
    return (
      (e = it(22, e, r, t)),
      (e.elementType = we),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function bo(e, t, n) {
    return ((e = it(6, e, null, t)), (e.lanes = n), e);
  }
  function Go(e, t, n) {
    return (
      (t = it(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function Wf(e, t, n, r, l) {
    ((this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = yi(0)),
      (this.expirationTimes = yi(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = yi(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = l),
      (this.mutableSourceEagerHydrationData = null));
  }
  function qo(e, t, n, r, l, i, a, d, h) {
    return (
      (e = new Wf(e, t, n, d, h)),
      t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
      (i = it(3, null, null, t)),
      (e.current = i),
      (i.stateNode = e),
      (i.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      io(i),
      e
    );
  }
  function Vf(e, t, n) {
    var r =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: de,
      key: r == null ? null : "" + r,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function nc(e) {
    if (!e) return $t;
    e = e._reactInternals;
    e: {
      if (nn(e) !== e || e.tag !== 1) throw Error(u(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (Be(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(u(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (Be(n)) return Ra(e, n, t);
    }
    return t;
  }
  function rc(e, t, n, r, l, i, a, d, h) {
    return (
      (e = qo(n, r, !0, e, l, i, a, d, h)),
      (e.context = nc(null)),
      (n = e.current),
      (r = He()),
      (l = Xt(n)),
      (i = Rt(r, l)),
      (i.callback = t ?? null),
      qt(n, i, l),
      (e.current.lanes = l),
      Jn(e, l, r),
      Ge(e, r),
      e
    );
  }
  function Bl(e, t, n, r) {
    var l = t.current,
      i = He(),
      a = Xt(l);
    return (
      (n = nc(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = Rt(i, a)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = qt(l, t, a)),
      e !== null && (gt(e, l, a, i), wl(e, l, a)),
      a
    );
  }
  function $l(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function lc(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Qo(e, t) {
    (lc(e, t), (e = e.alternate) && lc(e, t));
  }
  function Bf() {
    return null;
  }
  var ic =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function Ko(e) {
    this._internalRoot = e;
  }
  ((bl.prototype.render = Ko.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(u(409));
      Bl(e, t, null, null);
    }),
    (bl.prototype.unmount = Ko.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (fn(function () {
            Bl(null, e, null, null);
          }),
            (t[Ct] = null));
        }
      }));
  function bl(e) {
    this._internalRoot = e;
  }
  bl.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Vs();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Ut.length && t !== 0 && t < Ut[n].priority; n++);
      (Ut.splice(n, 0, e), n === 0 && bs(e));
    }
  };
  function Yo(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function Gl(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function oc() {}
  function $f(e, t, n, r, l) {
    if (l) {
      if (typeof r == "function") {
        var i = r;
        r = function () {
          var N = $l(a);
          i.call(N);
        };
      }
      var a = rc(t, r, e, 0, null, !1, !1, "", oc);
      return (
        (e._reactRootContainer = a),
        (e[Ct] = a.current),
        pr(e.nodeType === 8 ? e.parentNode : e),
        fn(),
        a
      );
    }
    for (; (l = e.lastChild); ) e.removeChild(l);
    if (typeof r == "function") {
      var d = r;
      r = function () {
        var N = $l(h);
        d.call(N);
      };
    }
    var h = qo(e, 0, !1, null, null, !1, !1, "", oc);
    return (
      (e._reactRootContainer = h),
      (e[Ct] = h.current),
      pr(e.nodeType === 8 ? e.parentNode : e),
      fn(function () {
        Bl(t, h, n, r);
      }),
      h
    );
  }
  function ql(e, t, n, r, l) {
    var i = n._reactRootContainer;
    if (i) {
      var a = i;
      if (typeof l == "function") {
        var d = l;
        l = function () {
          var h = $l(a);
          d.call(h);
        };
      }
      Bl(t, a, e, l);
    } else a = $f(n, t, e, l, r);
    return $l(a);
  }
  ((Hs = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Zn(t.pendingLanes);
          n !== 0 &&
            (xi(t, n | 1),
            Ge(t, ke()),
            (te & 6) === 0 && ((Wn = ke() + 500), bt()));
        }
        break;
      case 13:
        (fn(function () {
          var r = Tt(e, 1);
          if (r !== null) {
            var l = He();
            gt(r, e, 1, l);
          }
        }),
          Qo(e, 1));
    }
  }),
    (wi = function (e) {
      if (e.tag === 13) {
        var t = Tt(e, 134217728);
        if (t !== null) {
          var n = He();
          gt(t, e, 134217728, n);
        }
        Qo(e, 134217728);
      }
    }),
    (Ws = function (e) {
      if (e.tag === 13) {
        var t = Xt(e),
          n = Tt(e, t);
        if (n !== null) {
          var r = He();
          gt(n, e, t, r);
        }
        Qo(e, t);
      }
    }),
    (Vs = function () {
      return ae;
    }),
    (Bs = function (e, t) {
      var n = ae;
      try {
        return ((ae = e), t());
      } finally {
        ae = n;
      }
    }),
    (fi = function (e, t, n) {
      switch (t) {
        case "input":
          if ((li(e, n), (t = n.name), n.type === "radio" && t != null)) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
              ),
                t = 0;
              t < n.length;
              t++
            ) {
              var r = n[t];
              if (r !== e && r.form === e.form) {
                var l = cl(r);
                if (!l) throw Error(u(90));
                (ps(r), li(r, l));
              }
            }
          }
          break;
        case "textarea":
          ys(e, n);
          break;
        case "select":
          ((t = n.value), t != null && yn(e, !!n.multiple, t, !1));
      }
    }),
    (Ps = Wo),
    (zs = fn));
  var bf = { usingClientEntryPoint: !1, Events: [gr, zn, cl, Cs, js, Wo] },
    Rr = {
      findFiberByHostInstance: rn,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    Gf = {
      bundleType: Rr.bundleType,
      version: Rr.version,
      rendererPackageName: Rr.rendererPackageName,
      rendererConfig: Rr.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: ie.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return ((e = Ls(e)), e === null ? null : e.stateNode);
      },
      findFiberByHostInstance: Rr.findFiberByHostInstance || Bf,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ql = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ql.isDisabled && Ql.supportsFiber)
      try {
        ((br = Ql.inject(Gf)), (wt = Ql));
      } catch {}
  }
  return (
    (qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = bf),
    (qe.createPortal = function (e, t) {
      var n =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Yo(t)) throw Error(u(200));
      return Vf(e, t, null, n);
    }),
    (qe.createRoot = function (e, t) {
      if (!Yo(e)) throw Error(u(299));
      var n = !1,
        r = "",
        l = ic;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
        (t = qo(e, 1, !1, null, null, n, !1, r, l)),
        (e[Ct] = t.current),
        pr(e.nodeType === 8 ? e.parentNode : e),
        new Ko(t)
      );
    }),
    (qe.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(u(188))
          : ((e = Object.keys(e).join(",")), Error(u(268, e)));
      return ((e = Ls(t)), (e = e === null ? null : e.stateNode), e);
    }),
    (qe.flushSync = function (e) {
      return fn(e);
    }),
    (qe.hydrate = function (e, t, n) {
      if (!Gl(t)) throw Error(u(200));
      return ql(null, e, t, !0, n);
    }),
    (qe.hydrateRoot = function (e, t, n) {
      if (!Yo(e)) throw Error(u(405));
      var r = (n != null && n.hydratedSources) || null,
        l = !1,
        i = "",
        a = ic;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (a = n.onRecoverableError)),
        (t = rc(t, null, e, 1, n ?? null, l, !1, i, a)),
        (e[Ct] = t.current),
        pr(e),
        r)
      )
        for (e = 0; e < r.length; e++)
          ((n = r[e]),
            (l = n._getVersion),
            (l = l(n._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [n, l])
              : t.mutableSourceEagerHydrationData.push(n, l));
      return new bl(t);
    }),
    (qe.render = function (e, t, n) {
      if (!Gl(t)) throw Error(u(200));
      return ql(null, e, t, !1, n);
    }),
    (qe.unmountComponentAtNode = function (e) {
      if (!Gl(e)) throw Error(u(40));
      return e._reactRootContainer
        ? (fn(function () {
            ql(null, null, e, !1, function () {
              ((e._reactRootContainer = null), (e[Ct] = null));
            });
          }),
          !0)
        : !1;
    }),
    (qe.unstable_batchedUpdates = Wo),
    (qe.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!Gl(n)) throw Error(u(200));
      if (e == null || e._reactInternals === void 0) throw Error(u(38));
      return ql(e, t, n, !1, r);
    }),
    (qe.version = "18.3.1-next-f1338f8080-20240426"),
    qe
  );
}
var mc;
function ep() {
  if (mc) return Jo.exports;
  mc = 1;
  function o() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o);
      } catch (s) {
        console.error(s);
      }
  }
  return (o(), (Jo.exports = Jf()), Jo.exports);
}
var hc;
function tp() {
  if (hc) return Kl;
  hc = 1;
  var o = ep();
  return ((Kl.createRoot = o.createRoot), (Kl.hydrateRoot = o.hydrateRoot), Kl);
}
var np = tp(),
  S = ss();
/**
 * react-router v7.12.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var gc = "popstate";
function rp(o = {}) {
  function s(f, m) {
    let { pathname: p, search: v, hash: E } = f.location;
    return is(
      "",
      { pathname: p, search: v, hash: E },
      (m.state && m.state.usr) || null,
      (m.state && m.state.key) || "default",
    );
  }
  function u(f, m) {
    return typeof m == "string" ? m : Ir(m);
  }
  return ip(s, u, null, o);
}
function ye(o, s) {
  if (o === !1 || o === null || typeof o > "u") throw new Error(s);
}
function vt(o, s) {
  if (!o) {
    typeof console < "u" && console.warn(s);
    try {
      throw new Error(s);
    } catch {}
  }
}
function lp() {
  return Math.random().toString(36).substring(2, 10);
}
function vc(o, s) {
  return { usr: o.state, key: o.key, idx: s };
}
function is(o, s, u = null, f) {
  return {
    pathname: typeof o == "string" ? o : o.pathname,
    search: "",
    hash: "",
    ...(typeof s == "string" ? Bn(s) : s),
    state: u,
    key: (s && s.key) || f || lp(),
  };
}
function Ir({ pathname: o = "/", search: s = "", hash: u = "" }) {
  return (
    s && s !== "?" && (o += s.charAt(0) === "?" ? s : "?" + s),
    u && u !== "#" && (o += u.charAt(0) === "#" ? u : "#" + u),
    o
  );
}
function Bn(o) {
  let s = {};
  if (o) {
    let u = o.indexOf("#");
    u >= 0 && ((s.hash = o.substring(u)), (o = o.substring(0, u)));
    let f = o.indexOf("?");
    (f >= 0 && ((s.search = o.substring(f)), (o = o.substring(0, f))),
      o && (s.pathname = o));
  }
  return s;
}
function ip(o, s, u, f = {}) {
  let { window: m = document.defaultView, v5Compat: p = !1 } = f,
    v = m.history,
    E = "POP",
    k = null,
    j = z();
  j == null && ((j = 0), v.replaceState({ ...v.state, idx: j }, ""));
  function z() {
    return (v.state || { idx: null }).idx;
  }
  function C() {
    E = "POP";
    let M = z(),
      q = M == null ? null : M - j;
    ((j = M), k && k({ action: E, location: O.location, delta: q }));
  }
  function D(M, q) {
    E = "PUSH";
    let Y = is(O.location, M, q);
    j = z() + 1;
    let H = vc(Y, j),
      ie = O.createHref(Y);
    try {
      v.pushState(H, "", ie);
    } catch (oe) {
      if (oe instanceof DOMException && oe.name === "DataCloneError") throw oe;
      m.location.assign(ie);
    }
    p && k && k({ action: E, location: O.location, delta: 1 });
  }
  function B(M, q) {
    E = "REPLACE";
    let Y = is(O.location, M, q);
    j = z();
    let H = vc(Y, j),
      ie = O.createHref(Y);
    (v.replaceState(H, "", ie),
      p && k && k({ action: E, location: O.location, delta: 0 }));
  }
  function X(M) {
    return op(M);
  }
  let O = {
    get action() {
      return E;
    },
    get location() {
      return o(m, v);
    },
    listen(M) {
      if (k) throw new Error("A history only accepts one active listener");
      return (
        m.addEventListener(gc, C),
        (k = M),
        () => {
          (m.removeEventListener(gc, C), (k = null));
        }
      );
    },
    createHref(M) {
      return s(m, M);
    },
    createURL: X,
    encodeLocation(M) {
      let q = X(M);
      return { pathname: q.pathname, search: q.search, hash: q.hash };
    },
    push: D,
    replace: B,
    go(M) {
      return v.go(M);
    },
  };
  return O;
}
function op(o, s = !1) {
  let u = "http://localhost";
  (typeof window < "u" &&
    (u =
      window.location.origin !== "null"
        ? window.location.origin
        : window.location.href),
    ye(u, "No window.location.(origin|href) available to create URL"));
  let f = typeof o == "string" ? o : Ir(o);
  return (
    (f = f.replace(/ $/, "%20")),
    !s && f.startsWith("//") && (f = u + f),
    new URL(f, u)
  );
}
function Cc(o, s, u = "/") {
  return sp(o, s, u, !1);
}
function sp(o, s, u, f) {
  let m = typeof s == "string" ? Bn(s) : s,
    p = Mt(m.pathname || "/", u);
  if (p == null) return null;
  let v = jc(o);
  ap(v);
  let E = null;
  for (let k = 0; E == null && k < v.length; ++k) {
    let j = xp(p);
    E = vp(v[k], j, f);
  }
  return E;
}
function jc(o, s = [], u = [], f = "", m = !1) {
  let p = (v, E, k = m, j) => {
    let z = {
      relativePath: j === void 0 ? v.path || "" : j,
      caseSensitive: v.caseSensitive === !0,
      childrenIndex: E,
      route: v,
    };
    if (z.relativePath.startsWith("/")) {
      if (!z.relativePath.startsWith(f) && k) return;
      (ye(
        z.relativePath.startsWith(f),
        `Absolute route path "${z.relativePath}" nested under path "${f}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`,
      ),
        (z.relativePath = z.relativePath.slice(f.length)));
    }
    let C = Dt([f, z.relativePath]),
      D = u.concat(z);
    (v.children &&
      v.children.length > 0 &&
      (ye(
        v.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${C}".`,
      ),
      jc(v.children, s, D, C, k)),
      !(v.path == null && !v.index) &&
        s.push({ path: C, score: hp(C, v.index), routesMeta: D }));
  };
  return (
    o.forEach((v, E) => {
      var k;
      if (v.path === "" || !((k = v.path) != null && k.includes("?"))) p(v, E);
      else for (let j of Pc(v.path)) p(v, E, !0, j);
    }),
    s
  );
}
function Pc(o) {
  let s = o.split("/");
  if (s.length === 0) return [];
  let [u, ...f] = s,
    m = u.endsWith("?"),
    p = u.replace(/\?$/, "");
  if (f.length === 0) return m ? [p, ""] : [p];
  let v = Pc(f.join("/")),
    E = [];
  return (
    E.push(...v.map((k) => (k === "" ? p : [p, k].join("/")))),
    m && E.push(...v),
    E.map((k) => (o.startsWith("/") && k === "" ? "/" : k))
  );
}
function ap(o) {
  o.sort((s, u) =>
    s.score !== u.score
      ? u.score - s.score
      : gp(
          s.routesMeta.map((f) => f.childrenIndex),
          u.routesMeta.map((f) => f.childrenIndex),
        ),
  );
}
var up = /^:[\w-]+$/,
  cp = 3,
  dp = 2,
  fp = 1,
  pp = 10,
  mp = -2,
  yc = (o) => o === "*";
function hp(o, s) {
  let u = o.split("/"),
    f = u.length;
  return (
    u.some(yc) && (f += mp),
    s && (f += dp),
    u
      .filter((m) => !yc(m))
      .reduce((m, p) => m + (up.test(p) ? cp : p === "" ? fp : pp), f)
  );
}
function gp(o, s) {
  return o.length === s.length && o.slice(0, -1).every((f, m) => f === s[m])
    ? o[o.length - 1] - s[s.length - 1]
    : 0;
}
function vp(o, s, u = !1) {
  let { routesMeta: f } = o,
    m = {},
    p = "/",
    v = [];
  for (let E = 0; E < f.length; ++E) {
    let k = f[E],
      j = E === f.length - 1,
      z = p === "/" ? s : s.slice(p.length) || "/",
      C = Jl(
        { path: k.relativePath, caseSensitive: k.caseSensitive, end: j },
        z,
      ),
      D = k.route;
    if (
      (!C &&
        j &&
        u &&
        !f[f.length - 1].route.index &&
        (C = Jl(
          { path: k.relativePath, caseSensitive: k.caseSensitive, end: !1 },
          z,
        )),
      !C)
    )
      return null;
    (Object.assign(m, C.params),
      v.push({
        params: m,
        pathname: Dt([p, C.pathname]),
        pathnameBase: Sp(Dt([p, C.pathnameBase])),
        route: D,
      }),
      C.pathnameBase !== "/" && (p = Dt([p, C.pathnameBase])));
  }
  return v;
}
function Jl(o, s) {
  typeof o == "string" && (o = { path: o, caseSensitive: !1, end: !0 });
  let [u, f] = yp(o.path, o.caseSensitive, o.end),
    m = s.match(u);
  if (!m) return null;
  let p = m[0],
    v = p.replace(/(.)\/+$/, "$1"),
    E = m.slice(1);
  return {
    params: f.reduce((j, { paramName: z, isOptional: C }, D) => {
      if (z === "*") {
        let X = E[D] || "";
        v = p.slice(0, p.length - X.length).replace(/(.)\/+$/, "$1");
      }
      const B = E[D];
      return (
        C && !B ? (j[z] = void 0) : (j[z] = (B || "").replace(/%2F/g, "/")),
        j
      );
    }, {}),
    pathname: p,
    pathnameBase: v,
    pattern: o,
  };
}
function yp(o, s = !1, u = !0) {
  vt(
    o === "*" || !o.endsWith("*") || o.endsWith("/*"),
    `Route path "${o}" will be treated as if it were "${o.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${o.replace(/\*$/, "/*")}".`,
  );
  let f = [],
    m =
      "^" +
      o
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (v, E, k) => (
            f.push({ paramName: E, isOptional: k != null }),
            k ? "/?([^\\/]+)?" : "/([^\\/]+)"
          ),
        )
        .replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
  return (
    o.endsWith("*")
      ? (f.push({ paramName: "*" }),
        (m += o === "*" || o === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : u
        ? (m += "\\/*$")
        : o !== "" && o !== "/" && (m += "(?:(?=\\/|$))"),
    [new RegExp(m, s ? void 0 : "i"), f]
  );
}
function xp(o) {
  try {
    return o
      .split("/")
      .map((s) => decodeURIComponent(s).replace(/\//g, "%2F"))
      .join("/");
  } catch (s) {
    return (
      vt(
        !1,
        `The URL path "${o}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${s}).`,
      ),
      o
    );
  }
}
function Mt(o, s) {
  if (s === "/") return o;
  if (!o.toLowerCase().startsWith(s.toLowerCase())) return null;
  let u = s.endsWith("/") ? s.length - 1 : s.length,
    f = o.charAt(u);
  return f && f !== "/" ? null : o.slice(u) || "/";
}
var zc = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  wp = (o) => zc.test(o);
function Np(o, s = "/") {
  let {
      pathname: u,
      search: f = "",
      hash: m = "",
    } = typeof o == "string" ? Bn(o) : o,
    p;
  if (u)
    if (wp(u)) p = u;
    else {
      if (u.includes("//")) {
        let v = u;
        ((u = u.replace(/\/\/+/g, "/")),
          vt(
            !1,
            `Pathnames cannot have embedded double slashes - normalizing ${v} -> ${u}`,
          ));
      }
      u.startsWith("/") ? (p = xc(u.substring(1), "/")) : (p = xc(u, s));
    }
  else p = s;
  return { pathname: p, search: Ep(f), hash: Cp(m) };
}
function xc(o, s) {
  let u = s.replace(/\/+$/, "").split("/");
  return (
    o.split("/").forEach((m) => {
      m === ".." ? u.length > 1 && u.pop() : m !== "." && u.push(m);
    }),
    u.length > 1 ? u.join("/") : "/"
  );
}
function ns(o, s, u, f) {
  return `Cannot include a '${o}' character in a manually specified \`to.${s}\` field [${JSON.stringify(f)}].  Please separate it out to the \`to.${u}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function kp(o) {
  return o.filter(
    (s, u) => u === 0 || (s.route.path && s.route.path.length > 0),
  );
}
function Tc(o) {
  let s = kp(o);
  return s.map((u, f) => (f === s.length - 1 ? u.pathname : u.pathnameBase));
}
function Rc(o, s, u, f = !1) {
  let m;
  typeof o == "string"
    ? (m = Bn(o))
    : ((m = { ...o }),
      ye(
        !m.pathname || !m.pathname.includes("?"),
        ns("?", "pathname", "search", m),
      ),
      ye(
        !m.pathname || !m.pathname.includes("#"),
        ns("#", "pathname", "hash", m),
      ),
      ye(!m.search || !m.search.includes("#"), ns("#", "search", "hash", m)));
  let p = o === "" || m.pathname === "",
    v = p ? "/" : m.pathname,
    E;
  if (v == null) E = u;
  else {
    let C = s.length - 1;
    if (!f && v.startsWith("..")) {
      let D = v.split("/");
      for (; D[0] === ".."; ) (D.shift(), (C -= 1));
      m.pathname = D.join("/");
    }
    E = C >= 0 ? s[C] : "/";
  }
  let k = Np(m, E),
    j = v && v !== "/" && v.endsWith("/"),
    z = (p || v === ".") && u.endsWith("/");
  return (!k.pathname.endsWith("/") && (j || z) && (k.pathname += "/"), k);
}
var Dt = (o) => o.join("/").replace(/\/\/+/g, "/"),
  Sp = (o) => o.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Ep = (o) => (!o || o === "?" ? "" : o.startsWith("?") ? o : "?" + o),
  Cp = (o) => (!o || o === "#" ? "" : o.startsWith("#") ? o : "#" + o),
  jp = class {
    constructor(o, s, u, f = !1) {
      ((this.status = o),
        (this.statusText = s || ""),
        (this.internal = f),
        u instanceof Error
          ? ((this.data = u.toString()), (this.error = u))
          : (this.data = u));
    }
  };
function Pp(o) {
  return (
    o != null &&
    typeof o.status == "number" &&
    typeof o.statusText == "string" &&
    typeof o.internal == "boolean" &&
    "data" in o
  );
}
function zp(o) {
  return (
    o
      .map((s) => s.route.path)
      .filter(Boolean)
      .join("/")
      .replace(/\/\/*/g, "/") || "/"
  );
}
var _c =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
function Lc(o, s) {
  let u = o;
  if (typeof u != "string" || !zc.test(u))
    return { absoluteURL: void 0, isExternal: !1, to: u };
  let f = u,
    m = !1;
  if (_c)
    try {
      let p = new URL(window.location.href),
        v = u.startsWith("//") ? new URL(p.protocol + u) : new URL(u),
        E = Mt(v.pathname, s);
      v.origin === p.origin && E != null
        ? (u = E + v.search + v.hash)
        : (m = !0);
    } catch {
      vt(
        !1,
        `<Link to="${u}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`,
      );
    }
  return { absoluteURL: f, isExternal: m, to: u };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var Dc = ["POST", "PUT", "PATCH", "DELETE"];
new Set(Dc);
var Tp = ["GET", ...Dc];
new Set(Tp);
var $n = S.createContext(null);
$n.displayName = "DataRouter";
var ti = S.createContext(null);
ti.displayName = "DataRouterState";
var Rp = S.createContext(!1),
  Mc = S.createContext({ isTransitioning: !1 });
Mc.displayName = "ViewTransition";
var _p = S.createContext(new Map());
_p.displayName = "Fetchers";
var Lp = S.createContext(null);
Lp.displayName = "Await";
var st = S.createContext(null);
st.displayName = "Navigation";
var Fr = S.createContext(null);
Fr.displayName = "Location";
var It = S.createContext({ outlet: null, matches: [], isDataRoute: !1 });
It.displayName = "Route";
var as = S.createContext(null);
as.displayName = "RouteError";
var Ic = "REACT_ROUTER_ERROR",
  Dp = "REDIRECT",
  Mp = "ROUTE_ERROR_RESPONSE";
function Ip(o) {
  if (o.startsWith(`${Ic}:${Dp}:{`))
    try {
      let s = JSON.parse(o.slice(28));
      if (
        typeof s == "object" &&
        s &&
        typeof s.status == "number" &&
        typeof s.statusText == "string" &&
        typeof s.location == "string" &&
        typeof s.reloadDocument == "boolean" &&
        typeof s.replace == "boolean"
      )
        return s;
    } catch {}
}
function Fp(o) {
  if (o.startsWith(`${Ic}:${Mp}:{`))
    try {
      let s = JSON.parse(o.slice(40));
      if (
        typeof s == "object" &&
        s &&
        typeof s.status == "number" &&
        typeof s.statusText == "string"
      )
        return new jp(s.status, s.statusText, s.data);
    } catch {}
}
function Op(o, { relative: s } = {}) {
  ye(
    Or(),
    "useHref() may be used only in the context of a <Router> component.",
  );
  let { basename: u, navigator: f } = S.useContext(st),
    { hash: m, pathname: p, search: v } = Ar(o, { relative: s }),
    E = p;
  return (
    u !== "/" && (E = p === "/" ? u : Dt([u, p])),
    f.createHref({ pathname: E, search: v, hash: m })
  );
}
function Or() {
  return S.useContext(Fr) != null;
}
function gn() {
  return (
    ye(
      Or(),
      "useLocation() may be used only in the context of a <Router> component.",
    ),
    S.useContext(Fr).location
  );
}
var Fc =
  "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Oc(o) {
  S.useContext(st).static || S.useLayoutEffect(o);
}
function Ap() {
  let { isDataRoute: o } = S.useContext(It);
  return o ? Xp() : Up();
}
function Up() {
  ye(
    Or(),
    "useNavigate() may be used only in the context of a <Router> component.",
  );
  let o = S.useContext($n),
    { basename: s, navigator: u } = S.useContext(st),
    { matches: f } = S.useContext(It),
    { pathname: m } = gn(),
    p = JSON.stringify(Tc(f)),
    v = S.useRef(!1);
  return (
    Oc(() => {
      v.current = !0;
    }),
    S.useCallback(
      (k, j = {}) => {
        if ((vt(v.current, Fc), !v.current)) return;
        if (typeof k == "number") {
          u.go(k);
          return;
        }
        let z = Rc(k, JSON.parse(p), m, j.relative === "path");
        (o == null &&
          s !== "/" &&
          (z.pathname = z.pathname === "/" ? s : Dt([s, z.pathname])),
          (j.replace ? u.replace : u.push)(z, j.state, j));
      },
      [s, u, p, m, o],
    )
  );
}
S.createContext(null);
function Ar(o, { relative: s } = {}) {
  let { matches: u } = S.useContext(It),
    { pathname: f } = gn(),
    m = JSON.stringify(Tc(u));
  return S.useMemo(() => Rc(o, JSON.parse(m), f, s === "path"), [o, m, f, s]);
}
function Hp(o, s) {
  return Ac(o, s);
}
function Ac(o, s, u, f, m) {
  var Y;
  ye(
    Or(),
    "useRoutes() may be used only in the context of a <Router> component.",
  );
  let { navigator: p } = S.useContext(st),
    { matches: v } = S.useContext(It),
    E = v[v.length - 1],
    k = E ? E.params : {},
    j = E ? E.pathname : "/",
    z = E ? E.pathnameBase : "/",
    C = E && E.route;
  {
    let H = (C && C.path) || "";
    Hc(
      j,
      !C || H.endsWith("*") || H.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${j}" (under <Route path="${H}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${H}"> to <Route path="${H === "/" ? "*" : `${H}/*`}">.`,
    );
  }
  let D = gn(),
    B;
  if (s) {
    let H = typeof s == "string" ? Bn(s) : s;
    (ye(
      z === "/" || ((Y = H.pathname) == null ? void 0 : Y.startsWith(z)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${z}" but pathname "${H.pathname}" was given in the \`location\` prop.`,
    ),
      (B = H));
  } else B = D;
  let X = B.pathname || "/",
    O = X;
  if (z !== "/") {
    let H = z.replace(/^\//, "").split("/");
    O = "/" + X.replace(/^\//, "").split("/").slice(H.length).join("/");
  }
  let M = Cc(o, { pathname: O });
  (vt(
    C || M != null,
    `No routes matched location "${B.pathname}${B.search}${B.hash}" `,
  ),
    vt(
      M == null ||
        M[M.length - 1].route.element !== void 0 ||
        M[M.length - 1].route.Component !== void 0 ||
        M[M.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${B.pathname}${B.search}${B.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`,
    ));
  let q = bp(
    M &&
      M.map((H) =>
        Object.assign({}, H, {
          params: Object.assign({}, k, H.params),
          pathname: Dt([
            z,
            p.encodeLocation
              ? p.encodeLocation(
                  H.pathname.replace(/\?/g, "%3F").replace(/#/g, "%23"),
                ).pathname
              : H.pathname,
          ]),
          pathnameBase:
            H.pathnameBase === "/"
              ? z
              : Dt([
                  z,
                  p.encodeLocation
                    ? p.encodeLocation(
                        H.pathnameBase
                          .replace(/\?/g, "%3F")
                          .replace(/#/g, "%23"),
                      ).pathname
                    : H.pathnameBase,
                ]),
        }),
      ),
    v,
    u,
    f,
    m,
  );
  return s && q
    ? S.createElement(
        Fr.Provider,
        {
          value: {
            location: {
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: "default",
              ...B,
            },
            navigationType: "POP",
          },
        },
        q,
      )
    : q;
}
function Wp() {
  let o = Yp(),
    s = Pp(o)
      ? `${o.status} ${o.statusText}`
      : o instanceof Error
        ? o.message
        : JSON.stringify(o),
    u = o instanceof Error ? o.stack : null,
    f = "rgba(200,200,200, 0.5)",
    m = { padding: "0.5rem", backgroundColor: f },
    p = { padding: "2px 4px", backgroundColor: f },
    v = null;
  return (
    console.error("Error handled by React Router default ErrorBoundary:", o),
    (v = S.createElement(
      S.Fragment,
      null,
      S.createElement("p", null, "💿 Hey developer 👋"),
      S.createElement(
        "p",
        null,
        "You can provide a way better UX than this when your app throws errors by providing your own ",
        S.createElement("code", { style: p }, "ErrorBoundary"),
        " or",
        " ",
        S.createElement("code", { style: p }, "errorElement"),
        " prop on your route.",
      ),
    )),
    S.createElement(
      S.Fragment,
      null,
      S.createElement("h2", null, "Unexpected Application Error!"),
      S.createElement("h3", { style: { fontStyle: "italic" } }, s),
      u ? S.createElement("pre", { style: m }, u) : null,
      v,
    )
  );
}
var Vp = S.createElement(Wp, null),
  Uc = class extends S.Component {
    constructor(o) {
      (super(o),
        (this.state = {
          location: o.location,
          revalidation: o.revalidation,
          error: o.error,
        }));
    }
    static getDerivedStateFromError(o) {
      return { error: o };
    }
    static getDerivedStateFromProps(o, s) {
      return s.location !== o.location ||
        (s.revalidation !== "idle" && o.revalidation === "idle")
        ? { error: o.error, location: o.location, revalidation: o.revalidation }
        : {
            error: o.error !== void 0 ? o.error : s.error,
            location: s.location,
            revalidation: o.revalidation || s.revalidation,
          };
    }
    componentDidCatch(o, s) {
      this.props.onError
        ? this.props.onError(o, s)
        : console.error(
            "React Router caught the following error during render",
            o,
          );
    }
    render() {
      let o = this.state.error;
      if (
        this.context &&
        typeof o == "object" &&
        o &&
        "digest" in o &&
        typeof o.digest == "string"
      ) {
        const u = Fp(o.digest);
        u && (o = u);
      }
      let s =
        o !== void 0
          ? S.createElement(
              It.Provider,
              { value: this.props.routeContext },
              S.createElement(as.Provider, {
                value: o,
                children: this.props.component,
              }),
            )
          : this.props.children;
      return this.context ? S.createElement(Bp, { error: o }, s) : s;
    }
  };
Uc.contextType = Rp;
var rs = new WeakMap();
function Bp({ children: o, error: s }) {
  let { basename: u } = S.useContext(st);
  if (
    typeof s == "object" &&
    s &&
    "digest" in s &&
    typeof s.digest == "string"
  ) {
    let f = Ip(s.digest);
    if (f) {
      let m = rs.get(s);
      if (m) throw m;
      let p = Lc(f.location, u);
      if (_c && !rs.get(s))
        if (p.isExternal || f.reloadDocument)
          window.location.href = p.absoluteURL || p.to;
        else {
          const v = Promise.resolve().then(() =>
            window.__reactRouterDataRouter.navigate(p.to, {
              replace: f.replace,
            }),
          );
          throw (rs.set(s, v), v);
        }
      return S.createElement("meta", {
        httpEquiv: "refresh",
        content: `0;url=${p.absoluteURL || p.to}`,
      });
    }
  }
  return o;
}
function $p({ routeContext: o, match: s, children: u }) {
  let f = S.useContext($n);
  return (
    f &&
      f.static &&
      f.staticContext &&
      (s.route.errorElement || s.route.ErrorBoundary) &&
      (f.staticContext._deepestRenderedBoundaryId = s.route.id),
    S.createElement(It.Provider, { value: o }, u)
  );
}
function bp(o, s = [], u = null, f = null, m = null) {
  if (o == null) {
    if (!u) return null;
    if (u.errors) o = u.matches;
    else if (s.length === 0 && !u.initialized && u.matches.length > 0)
      o = u.matches;
    else return null;
  }
  let p = o,
    v = u == null ? void 0 : u.errors;
  if (v != null) {
    let z = p.findIndex(
      (C) => C.route.id && (v == null ? void 0 : v[C.route.id]) !== void 0,
    );
    (ye(
      z >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(v).join(",")}`,
    ),
      (p = p.slice(0, Math.min(p.length, z + 1))));
  }
  let E = !1,
    k = -1;
  if (u)
    for (let z = 0; z < p.length; z++) {
      let C = p[z];
      if (
        ((C.route.HydrateFallback || C.route.hydrateFallbackElement) && (k = z),
        C.route.id)
      ) {
        let { loaderData: D, errors: B } = u,
          X =
            C.route.loader &&
            !D.hasOwnProperty(C.route.id) &&
            (!B || B[C.route.id] === void 0);
        if (C.route.lazy || X) {
          ((E = !0), k >= 0 ? (p = p.slice(0, k + 1)) : (p = [p[0]]));
          break;
        }
      }
    }
  let j =
    u && f
      ? (z, C) => {
          var D, B;
          f(z, {
            location: u.location,
            params:
              ((B = (D = u.matches) == null ? void 0 : D[0]) == null
                ? void 0
                : B.params) ?? {},
            unstable_pattern: zp(u.matches),
            errorInfo: C,
          });
        }
      : void 0;
  return p.reduceRight((z, C, D) => {
    let B,
      X = !1,
      O = null,
      M = null;
    u &&
      ((B = v && C.route.id ? v[C.route.id] : void 0),
      (O = C.route.errorElement || Vp),
      E &&
        (k < 0 && D === 0
          ? (Hc(
              "route-fallback",
              !1,
              "No `HydrateFallback` element provided to render during initial hydration",
            ),
            (X = !0),
            (M = null))
          : k === D &&
            ((X = !0), (M = C.route.hydrateFallbackElement || null))));
    let q = s.concat(p.slice(0, D + 1)),
      Y = () => {
        let H;
        return (
          B
            ? (H = O)
            : X
              ? (H = M)
              : C.route.Component
                ? (H = S.createElement(C.route.Component, null))
                : C.route.element
                  ? (H = C.route.element)
                  : (H = z),
          S.createElement($p, {
            match: C,
            routeContext: { outlet: z, matches: q, isDataRoute: u != null },
            children: H,
          })
        );
      };
    return u && (C.route.ErrorBoundary || C.route.errorElement || D === 0)
      ? S.createElement(Uc, {
          location: u.location,
          revalidation: u.revalidation,
          component: O,
          error: B,
          children: Y(),
          routeContext: { outlet: null, matches: q, isDataRoute: !0 },
          onError: j,
        })
      : Y();
  }, null);
}
function us(o) {
  return `${o} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Gp(o) {
  let s = S.useContext($n);
  return (ye(s, us(o)), s);
}
function qp(o) {
  let s = S.useContext(ti);
  return (ye(s, us(o)), s);
}
function Qp(o) {
  let s = S.useContext(It);
  return (ye(s, us(o)), s);
}
function cs(o) {
  let s = Qp(o),
    u = s.matches[s.matches.length - 1];
  return (
    ye(
      u.route.id,
      `${o} can only be used on routes that contain a unique "id"`,
    ),
    u.route.id
  );
}
function Kp() {
  return cs("useRouteId");
}
function Yp() {
  var f;
  let o = S.useContext(as),
    s = qp("useRouteError"),
    u = cs("useRouteError");
  return o !== void 0 ? o : (f = s.errors) == null ? void 0 : f[u];
}
function Xp() {
  let { router: o } = Gp("useNavigate"),
    s = cs("useNavigate"),
    u = S.useRef(!1);
  return (
    Oc(() => {
      u.current = !0;
    }),
    S.useCallback(
      async (m, p = {}) => {
        (vt(u.current, Fc),
          u.current &&
            (typeof m == "number"
              ? await o.navigate(m)
              : await o.navigate(m, { fromRouteId: s, ...p })));
      },
      [o, s],
    )
  );
}
var wc = {};
function Hc(o, s, u) {
  !s && !wc[o] && ((wc[o] = !0), vt(!1, u));
}
S.memo(Zp);
function Zp({ routes: o, future: s, state: u, onError: f }) {
  return Ac(o, void 0, u, f, s);
}
function Dr(o) {
  ye(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.",
  );
}
function Jp({
  basename: o = "/",
  children: s = null,
  location: u,
  navigationType: f = "POP",
  navigator: m,
  static: p = !1,
  unstable_useTransitions: v,
}) {
  ye(
    !Or(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.",
  );
  let E = o.replace(/^\/*/, "/"),
    k = S.useMemo(
      () => ({
        basename: E,
        navigator: m,
        static: p,
        unstable_useTransitions: v,
        future: {},
      }),
      [E, m, p, v],
    );
  typeof u == "string" && (u = Bn(u));
  let {
      pathname: j = "/",
      search: z = "",
      hash: C = "",
      state: D = null,
      key: B = "default",
    } = u,
    X = S.useMemo(() => {
      let O = Mt(j, E);
      return O == null
        ? null
        : {
            location: { pathname: O, search: z, hash: C, state: D, key: B },
            navigationType: f,
          };
    }, [E, j, z, C, D, B, f]);
  return (
    vt(
      X != null,
      `<Router basename="${E}"> is not able to match the URL "${j}${z}${C}" because it does not start with the basename, so the <Router> won't render anything.`,
    ),
    X == null
      ? null
      : S.createElement(
          st.Provider,
          { value: k },
          S.createElement(Fr.Provider, { children: s, value: X }),
        )
  );
}
function em({ children: o, location: s }) {
  return Hp(os(o), s);
}
function os(o, s = []) {
  let u = [];
  return (
    S.Children.forEach(o, (f, m) => {
      if (!S.isValidElement(f)) return;
      let p = [...s, m];
      if (f.type === S.Fragment) {
        u.push.apply(u, os(f.props.children, p));
        return;
      }
      (ye(
        f.type === Dr,
        `[${typeof f.type == "string" ? f.type : f.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`,
      ),
        ye(
          !f.props.index || !f.props.children,
          "An index route cannot have child routes.",
        ));
      let v = {
        id: f.props.id || p.join("-"),
        caseSensitive: f.props.caseSensitive,
        element: f.props.element,
        Component: f.props.Component,
        index: f.props.index,
        path: f.props.path,
        middleware: f.props.middleware,
        loader: f.props.loader,
        action: f.props.action,
        hydrateFallbackElement: f.props.hydrateFallbackElement,
        HydrateFallback: f.props.HydrateFallback,
        errorElement: f.props.errorElement,
        ErrorBoundary: f.props.ErrorBoundary,
        hasErrorBoundary:
          f.props.hasErrorBoundary === !0 ||
          f.props.ErrorBoundary != null ||
          f.props.errorElement != null,
        shouldRevalidate: f.props.shouldRevalidate,
        handle: f.props.handle,
        lazy: f.props.lazy,
      };
      (f.props.children && (v.children = os(f.props.children, p)), u.push(v));
    }),
    u
  );
}
var Xl = "get",
  Zl = "application/x-www-form-urlencoded";
function ni(o) {
  return typeof HTMLElement < "u" && o instanceof HTMLElement;
}
function tm(o) {
  return ni(o) && o.tagName.toLowerCase() === "button";
}
function nm(o) {
  return ni(o) && o.tagName.toLowerCase() === "form";
}
function rm(o) {
  return ni(o) && o.tagName.toLowerCase() === "input";
}
function lm(o) {
  return !!(o.metaKey || o.altKey || o.ctrlKey || o.shiftKey);
}
function im(o, s) {
  return o.button === 0 && (!s || s === "_self") && !lm(o);
}
var Yl = null;
function om() {
  if (Yl === null)
    try {
      (new FormData(document.createElement("form"), 0), (Yl = !1));
    } catch {
      Yl = !0;
    }
  return Yl;
}
var sm = new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain",
]);
function ls(o) {
  return o != null && !sm.has(o)
    ? (vt(
        !1,
        `"${o}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Zl}"`,
      ),
      null)
    : o;
}
function am(o, s) {
  let u, f, m, p, v;
  if (nm(o)) {
    let E = o.getAttribute("action");
    ((f = E ? Mt(E, s) : null),
      (u = o.getAttribute("method") || Xl),
      (m = ls(o.getAttribute("enctype")) || Zl),
      (p = new FormData(o)));
  } else if (tm(o) || (rm(o) && (o.type === "submit" || o.type === "image"))) {
    let E = o.form;
    if (E == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>',
      );
    let k = o.getAttribute("formaction") || E.getAttribute("action");
    if (
      ((f = k ? Mt(k, s) : null),
      (u = o.getAttribute("formmethod") || E.getAttribute("method") || Xl),
      (m =
        ls(o.getAttribute("formenctype")) ||
        ls(E.getAttribute("enctype")) ||
        Zl),
      (p = new FormData(E, o)),
      !om())
    ) {
      let { name: j, type: z, value: C } = o;
      if (z === "image") {
        let D = j ? `${j}.` : "";
        (p.append(`${D}x`, "0"), p.append(`${D}y`, "0"));
      } else j && p.append(j, C);
    }
  } else {
    if (ni(o))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">',
      );
    ((u = Xl), (f = null), (m = Zl), (v = o));
  }
  return (
    p && m === "text/plain" && ((v = p), (p = void 0)),
    { action: f, method: u.toLowerCase(), encType: m, formData: p, body: v }
  );
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function ds(o, s) {
  if (o === !1 || o === null || typeof o > "u") throw new Error(s);
}
function um(o, s, u, f) {
  let m =
    typeof o == "string"
      ? new URL(
          o,
          typeof window > "u"
            ? "server://singlefetch/"
            : window.location.origin,
        )
      : o;
  return (
    u
      ? m.pathname.endsWith("/")
        ? (m.pathname = `${m.pathname}_.${f}`)
        : (m.pathname = `${m.pathname}.${f}`)
      : m.pathname === "/"
        ? (m.pathname = `_root.${f}`)
        : s && Mt(m.pathname, s) === "/"
          ? (m.pathname = `${s.replace(/\/$/, "")}/_root.${f}`)
          : (m.pathname = `${m.pathname.replace(/\/$/, "")}.${f}`),
    m
  );
}
async function cm(o, s) {
  if (o.id in s) return s[o.id];
  try {
    let u = await import(o.module);
    return ((s[o.id] = u), u);
  } catch (u) {
    return (
      console.error(
        `Error loading route module \`${o.module}\`, reloading page...`,
      ),
      console.error(u),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function dm(o) {
  return o == null
    ? !1
    : o.href == null
      ? o.rel === "preload" &&
        typeof o.imageSrcSet == "string" &&
        typeof o.imageSizes == "string"
      : typeof o.rel == "string" && typeof o.href == "string";
}
async function fm(o, s, u) {
  let f = await Promise.all(
    o.map(async (m) => {
      let p = s.routes[m.route.id];
      if (p) {
        let v = await cm(p, u);
        return v.links ? v.links() : [];
      }
      return [];
    }),
  );
  return gm(
    f
      .flat(1)
      .filter(dm)
      .filter((m) => m.rel === "stylesheet" || m.rel === "preload")
      .map((m) =>
        m.rel === "stylesheet"
          ? { ...m, rel: "prefetch", as: "style" }
          : { ...m, rel: "prefetch" },
      ),
  );
}
function Nc(o, s, u, f, m, p) {
  let v = (k, j) => (u[j] ? k.route.id !== u[j].route.id : !0),
    E = (k, j) => {
      var z;
      return (
        u[j].pathname !== k.pathname ||
        (((z = u[j].route.path) == null ? void 0 : z.endsWith("*")) &&
          u[j].params["*"] !== k.params["*"])
      );
    };
  return p === "assets"
    ? s.filter((k, j) => v(k, j) || E(k, j))
    : p === "data"
      ? s.filter((k, j) => {
          var C;
          let z = f.routes[k.route.id];
          if (!z || !z.hasLoader) return !1;
          if (v(k, j) || E(k, j)) return !0;
          if (k.route.shouldRevalidate) {
            let D = k.route.shouldRevalidate({
              currentUrl: new URL(
                m.pathname + m.search + m.hash,
                window.origin,
              ),
              currentParams: ((C = u[0]) == null ? void 0 : C.params) || {},
              nextUrl: new URL(o, window.origin),
              nextParams: k.params,
              defaultShouldRevalidate: !0,
            });
            if (typeof D == "boolean") return D;
          }
          return !0;
        })
      : [];
}
function pm(o, s, { includeHydrateFallback: u } = {}) {
  return mm(
    o
      .map((f) => {
        let m = s.routes[f.route.id];
        if (!m) return [];
        let p = [m.module];
        return (
          m.clientActionModule && (p = p.concat(m.clientActionModule)),
          m.clientLoaderModule && (p = p.concat(m.clientLoaderModule)),
          u &&
            m.hydrateFallbackModule &&
            (p = p.concat(m.hydrateFallbackModule)),
          m.imports && (p = p.concat(m.imports)),
          p
        );
      })
      .flat(1),
  );
}
function mm(o) {
  return [...new Set(o)];
}
function hm(o) {
  let s = {},
    u = Object.keys(o).sort();
  for (let f of u) s[f] = o[f];
  return s;
}
function gm(o, s) {
  let u = new Set();
  return (
    new Set(s),
    o.reduce((f, m) => {
      let p = JSON.stringify(hm(m));
      return (u.has(p) || (u.add(p), f.push({ key: p, link: m })), f);
    }, [])
  );
}
function Wc() {
  let o = S.useContext($n);
  return (
    ds(
      o,
      "You must render this element inside a <DataRouterContext.Provider> element",
    ),
    o
  );
}
function vm() {
  let o = S.useContext(ti);
  return (
    ds(
      o,
      "You must render this element inside a <DataRouterStateContext.Provider> element",
    ),
    o
  );
}
var fs = S.createContext(void 0);
fs.displayName = "FrameworkContext";
function Vc() {
  let o = S.useContext(fs);
  return (
    ds(o, "You must render this element inside a <HydratedRouter> element"),
    o
  );
}
function ym(o, s) {
  let u = S.useContext(fs),
    [f, m] = S.useState(!1),
    [p, v] = S.useState(!1),
    {
      onFocus: E,
      onBlur: k,
      onMouseEnter: j,
      onMouseLeave: z,
      onTouchStart: C,
    } = s,
    D = S.useRef(null);
  (S.useEffect(() => {
    if ((o === "render" && v(!0), o === "viewport")) {
      let O = (q) => {
          q.forEach((Y) => {
            v(Y.isIntersecting);
          });
        },
        M = new IntersectionObserver(O, { threshold: 0.5 });
      return (
        D.current && M.observe(D.current),
        () => {
          M.disconnect();
        }
      );
    }
  }, [o]),
    S.useEffect(() => {
      if (f) {
        let O = setTimeout(() => {
          v(!0);
        }, 100);
        return () => {
          clearTimeout(O);
        };
      }
    }, [f]));
  let B = () => {
      m(!0);
    },
    X = () => {
      (m(!1), v(!1));
    };
  return u
    ? o !== "intent"
      ? [p, D, {}]
      : [
          p,
          D,
          {
            onFocus: Lr(E, B),
            onBlur: Lr(k, X),
            onMouseEnter: Lr(j, B),
            onMouseLeave: Lr(z, X),
            onTouchStart: Lr(C, B),
          },
        ]
    : [!1, D, {}];
}
function Lr(o, s) {
  return (u) => {
    (o && o(u), u.defaultPrevented || s(u));
  };
}
function xm({ page: o, ...s }) {
  let { router: u } = Wc(),
    f = S.useMemo(() => Cc(u.routes, o, u.basename), [u.routes, o, u.basename]);
  return f ? S.createElement(Nm, { page: o, matches: f, ...s }) : null;
}
function wm(o) {
  let { manifest: s, routeModules: u } = Vc(),
    [f, m] = S.useState([]);
  return (
    S.useEffect(() => {
      let p = !1;
      return (
        fm(o, s, u).then((v) => {
          p || m(v);
        }),
        () => {
          p = !0;
        }
      );
    }, [o, s, u]),
    f
  );
}
function Nm({ page: o, matches: s, ...u }) {
  let f = gn(),
    { future: m, manifest: p, routeModules: v } = Vc(),
    { basename: E } = Wc(),
    { loaderData: k, matches: j } = vm(),
    z = S.useMemo(() => Nc(o, s, j, p, f, "data"), [o, s, j, p, f]),
    C = S.useMemo(() => Nc(o, s, j, p, f, "assets"), [o, s, j, p, f]),
    D = S.useMemo(() => {
      if (o === f.pathname + f.search + f.hash) return [];
      let O = new Set(),
        M = !1;
      if (
        (s.forEach((Y) => {
          var ie;
          let H = p.routes[Y.route.id];
          !H ||
            !H.hasLoader ||
            ((!z.some((oe) => oe.route.id === Y.route.id) &&
              Y.route.id in k &&
              (ie = v[Y.route.id]) != null &&
              ie.shouldRevalidate) ||
            H.hasClientLoader
              ? (M = !0)
              : O.add(Y.route.id));
        }),
        O.size === 0)
      )
        return [];
      let q = um(o, E, m.unstable_trailingSlashAwareDataRequests, "data");
      return (
        M &&
          O.size > 0 &&
          q.searchParams.set(
            "_routes",
            s
              .filter((Y) => O.has(Y.route.id))
              .map((Y) => Y.route.id)
              .join(","),
          ),
        [q.pathname + q.search]
      );
    }, [E, m.unstable_trailingSlashAwareDataRequests, k, f, p, z, s, o, v]),
    B = S.useMemo(() => pm(C, p), [C, p]),
    X = wm(C);
  return S.createElement(
    S.Fragment,
    null,
    D.map((O) =>
      S.createElement("link", {
        key: O,
        rel: "prefetch",
        as: "fetch",
        href: O,
        ...u,
      }),
    ),
    B.map((O) =>
      S.createElement("link", { key: O, rel: "modulepreload", href: O, ...u }),
    ),
    X.map(({ key: O, link: M }) =>
      S.createElement("link", { key: O, nonce: u.nonce, ...M }),
    ),
  );
}
function km(...o) {
  return (s) => {
    o.forEach((u) => {
      typeof u == "function" ? u(s) : u != null && (u.current = s);
    });
  };
}
var Sm =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
try {
  Sm && (window.__reactRouterVersion = "7.12.0");
} catch {}
function Em({
  basename: o,
  children: s,
  unstable_useTransitions: u,
  window: f,
}) {
  let m = S.useRef();
  m.current == null && (m.current = rp({ window: f, v5Compat: !0 }));
  let p = m.current,
    [v, E] = S.useState({ action: p.action, location: p.location }),
    k = S.useCallback(
      (j) => {
        u === !1 ? E(j) : S.startTransition(() => E(j));
      },
      [u],
    );
  return (
    S.useLayoutEffect(() => p.listen(k), [p, k]),
    S.createElement(Jp, {
      basename: o,
      children: s,
      location: v.location,
      navigationType: v.action,
      navigator: p,
      unstable_useTransitions: u,
    })
  );
}
var Bc = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  ot = S.forwardRef(function (
    {
      onClick: s,
      discover: u = "render",
      prefetch: f = "none",
      relative: m,
      reloadDocument: p,
      replace: v,
      state: E,
      target: k,
      to: j,
      preventScrollReset: z,
      viewTransition: C,
      unstable_defaultShouldRevalidate: D,
      ...B
    },
    X,
  ) {
    let { basename: O, unstable_useTransitions: M } = S.useContext(st),
      q = typeof j == "string" && Bc.test(j),
      Y = Lc(j, O);
    j = Y.to;
    let H = Op(j, { relative: m }),
      [ie, oe, de] = ym(f, B),
      xe = zm(j, {
        replace: v,
        state: E,
        target: k,
        preventScrollReset: z,
        relative: m,
        viewTransition: C,
        unstable_defaultShouldRevalidate: D,
        unstable_useTransitions: M,
      });
    function Ce(Ae) {
      (s && s(Ae), Ae.defaultPrevented || xe(Ae));
    }
    let Oe = S.createElement("a", {
      ...B,
      ...de,
      href: Y.absoluteURL || H,
      onClick: Y.isExternal || p ? s : Ce,
      ref: km(X, oe),
      target: k,
      "data-discover": !q && u === "render" ? "true" : void 0,
    });
    return ie && !q
      ? S.createElement(S.Fragment, null, Oe, S.createElement(xm, { page: H }))
      : Oe;
  });
ot.displayName = "Link";
var Cm = S.forwardRef(function (
  {
    "aria-current": s = "page",
    caseSensitive: u = !1,
    className: f = "",
    end: m = !1,
    style: p,
    to: v,
    viewTransition: E,
    children: k,
    ...j
  },
  z,
) {
  let C = Ar(v, { relative: j.relative }),
    D = gn(),
    B = S.useContext(ti),
    { navigator: X, basename: O } = S.useContext(st),
    M = B != null && Dm(C) && E === !0,
    q = X.encodeLocation ? X.encodeLocation(C).pathname : C.pathname,
    Y = D.pathname,
    H =
      B && B.navigation && B.navigation.location
        ? B.navigation.location.pathname
        : null;
  (u ||
    ((Y = Y.toLowerCase()),
    (H = H ? H.toLowerCase() : null),
    (q = q.toLowerCase())),
    H && O && (H = Mt(H, O) || H));
  const ie = q !== "/" && q.endsWith("/") ? q.length - 1 : q.length;
  let oe = Y === q || (!m && Y.startsWith(q) && Y.charAt(ie) === "/"),
    de =
      H != null &&
      (H === q || (!m && H.startsWith(q) && H.charAt(q.length) === "/")),
    xe = { isActive: oe, isPending: de, isTransitioning: M },
    Ce = oe ? s : void 0,
    Oe;
  typeof f == "function"
    ? (Oe = f(xe))
    : (Oe = [
        f,
        oe ? "active" : null,
        de ? "pending" : null,
        M ? "transitioning" : null,
      ]
        .filter(Boolean)
        .join(" "));
  let Ae = typeof p == "function" ? p(xe) : p;
  return S.createElement(
    ot,
    {
      ...j,
      "aria-current": Ce,
      className: Oe,
      ref: z,
      style: Ae,
      to: v,
      viewTransition: E,
    },
    typeof k == "function" ? k(xe) : k,
  );
});
Cm.displayName = "NavLink";
var jm = S.forwardRef(
  (
    {
      discover: o = "render",
      fetcherKey: s,
      navigate: u,
      reloadDocument: f,
      replace: m,
      state: p,
      method: v = Xl,
      action: E,
      onSubmit: k,
      relative: j,
      preventScrollReset: z,
      viewTransition: C,
      unstable_defaultShouldRevalidate: D,
      ...B
    },
    X,
  ) => {
    let { unstable_useTransitions: O } = S.useContext(st),
      M = _m(),
      q = Lm(E, { relative: j }),
      Y = v.toLowerCase() === "get" ? "get" : "post",
      H = typeof E == "string" && Bc.test(E),
      ie = (oe) => {
        if ((k && k(oe), oe.defaultPrevented)) return;
        oe.preventDefault();
        let de = oe.nativeEvent.submitter,
          xe = (de == null ? void 0 : de.getAttribute("formmethod")) || v,
          Ce = () =>
            M(de || oe.currentTarget, {
              fetcherKey: s,
              method: xe,
              navigate: u,
              replace: m,
              state: p,
              relative: j,
              preventScrollReset: z,
              viewTransition: C,
              unstable_defaultShouldRevalidate: D,
            });
        O && u !== !1 ? S.startTransition(() => Ce()) : Ce();
      };
    return S.createElement("form", {
      ref: X,
      method: Y,
      action: q,
      onSubmit: f ? k : ie,
      ...B,
      "data-discover": !H && o === "render" ? "true" : void 0,
    });
  },
);
jm.displayName = "Form";
function Pm(o) {
  return `${o} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function $c(o) {
  let s = S.useContext($n);
  return (ye(s, Pm(o)), s);
}
function zm(
  o,
  {
    target: s,
    replace: u,
    state: f,
    preventScrollReset: m,
    relative: p,
    viewTransition: v,
    unstable_defaultShouldRevalidate: E,
    unstable_useTransitions: k,
  } = {},
) {
  let j = Ap(),
    z = gn(),
    C = Ar(o, { relative: p });
  return S.useCallback(
    (D) => {
      if (im(D, s)) {
        D.preventDefault();
        let B = u !== void 0 ? u : Ir(z) === Ir(C),
          X = () =>
            j(o, {
              replace: B,
              state: f,
              preventScrollReset: m,
              relative: p,
              viewTransition: v,
              unstable_defaultShouldRevalidate: E,
            });
        k ? S.startTransition(() => X()) : X();
      }
    },
    [z, j, C, u, f, s, o, m, p, v, E, k],
  );
}
var Tm = 0,
  Rm = () => `__${String(++Tm)}__`;
function _m() {
  let { router: o } = $c("useSubmit"),
    { basename: s } = S.useContext(st),
    u = Kp(),
    f = o.fetch,
    m = o.navigate;
  return S.useCallback(
    async (p, v = {}) => {
      let { action: E, method: k, encType: j, formData: z, body: C } = am(p, s);
      if (v.navigate === !1) {
        let D = v.fetcherKey || Rm();
        await f(D, u, v.action || E, {
          unstable_defaultShouldRevalidate: v.unstable_defaultShouldRevalidate,
          preventScrollReset: v.preventScrollReset,
          formData: z,
          body: C,
          formMethod: v.method || k,
          formEncType: v.encType || j,
          flushSync: v.flushSync,
        });
      } else
        await m(v.action || E, {
          unstable_defaultShouldRevalidate: v.unstable_defaultShouldRevalidate,
          preventScrollReset: v.preventScrollReset,
          formData: z,
          body: C,
          formMethod: v.method || k,
          formEncType: v.encType || j,
          replace: v.replace,
          state: v.state,
          fromRouteId: u,
          flushSync: v.flushSync,
          viewTransition: v.viewTransition,
        });
    },
    [f, m, s, u],
  );
}
function Lm(o, { relative: s } = {}) {
  let { basename: u } = S.useContext(st),
    f = S.useContext(It);
  ye(f, "useFormAction must be used inside a RouteContext");
  let [m] = f.matches.slice(-1),
    p = { ...Ar(o || ".", { relative: s }) },
    v = gn();
  if (o == null) {
    p.search = v.search;
    let E = new URLSearchParams(p.search),
      k = E.getAll("index");
    if (k.some((z) => z === "")) {
      (E.delete("index"),
        k.filter((C) => C).forEach((C) => E.append("index", C)));
      let z = E.toString();
      p.search = z ? `?${z}` : "";
    }
  }
  return (
    (!o || o === ".") &&
      m.route.index &&
      (p.search = p.search ? p.search.replace(/^\?/, "?index&") : "?index"),
    u !== "/" && (p.pathname = p.pathname === "/" ? u : Dt([u, p.pathname])),
    Ir(p)
  );
}
function Dm(o, { relative: s } = {}) {
  let u = S.useContext(Mc);
  ye(
    u != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?",
  );
  let { basename: f } = $c("useViewTransitionState"),
    m = Ar(o, { relative: s });
  if (!u.isTransitioning) return !1;
  let p = Mt(u.currentLocation.pathname, f) || u.currentLocation.pathname,
    v = Mt(u.nextLocation.pathname, f) || u.nextLocation.pathname;
  return Jl(m.pathname, v) != null || Jl(m.pathname, p) != null;
}
const bc = S.createContext(void 0);
function Mm({ children: o }) {
  const [s, u] = S.useState("it");
  return c.jsx(bc.Provider, {
    value: { language: s, setLanguage: u },
    children: o,
  });
}
function vn() {
  const o = S.useContext(bc);
  if (!o) throw new Error("useLanguage must be used within LanguageProvider");
  return o;
}
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Im = (o) => o.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  Fm = (o) =>
    o.replace(/^([A-Z])|[\s-_]+(\w)/g, (s, u, f) =>
      f ? f.toUpperCase() : u.toLowerCase(),
    ),
  kc = (o) => {
    const s = Fm(o);
    return s.charAt(0).toUpperCase() + s.slice(1);
  },
  Gc = (...o) =>
    o
      .filter((s, u, f) => !!s && s.trim() !== "" && f.indexOf(s) === u)
      .join(" ")
      .trim();
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Om = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Am = S.forwardRef(
  (
    {
      color: o = "currentColor",
      size: s = 24,
      strokeWidth: u = 2,
      absoluteStrokeWidth: f,
      className: m = "",
      children: p,
      iconNode: v,
      ...E
    },
    k,
  ) =>
    S.createElement(
      "svg",
      {
        ref: k,
        ...Om,
        width: s,
        height: s,
        stroke: o,
        strokeWidth: f ? (Number(u) * 24) / Number(s) : u,
        className: Gc("lucide", m),
        ...E,
      },
      [
        ...v.map(([j, z]) => S.createElement(j, z)),
        ...(Array.isArray(p) ? p : [p]),
      ],
    ),
);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const at = (o, s) => {
  const u = S.forwardRef(({ className: f, ...m }, p) =>
    S.createElement(Am, {
      ref: p,
      iconNode: s,
      className: Gc(`lucide-${Im(kc(o))}`, `lucide-${o}`, f),
      ...m,
    }),
  );
  return ((u.displayName = kc(o)), u);
};
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Um = [
    [
      "path",
      {
        d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
        key: "1yiouv",
      },
    ],
    ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }],
  ],
  Hm = at("award", Um);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Wm = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]],
  Vm = at("check", Wm);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Bm = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }],
  ],
  qc = at("clock", Bm);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const $m = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    [
      "path",
      { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" },
    ],
    ["path", { d: "M2 12h20", key: "9i4pu4" }],
  ],
  Qc = at("globe", $m);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const bm = [
    [
      "path",
      {
        d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
        key: "c3ymky",
      },
    ],
  ],
  Gm = at("heart", bm);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const qm = [
    [
      "rect",
      { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" },
    ],
    ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }],
  ],
  Kc = at("mail", qm);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Qm = [
    [
      "path",
      {
        d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
        key: "1r0f0z",
      },
    ],
    ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
  ],
  ei = at("map-pin", Qm);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Km = [
    ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
    ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
    ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
  ],
  Ym = at("menu", Km);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Xm = [
    [
      "path",
      {
        d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
        key: "foiqr5",
      },
    ],
  ],
  Yc = at("phone", Xm);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Zm = [
    [
      "path",
      {
        d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
        key: "1ffxy3",
      },
    ],
    ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }],
  ],
  Jm = at("send", Zm);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const eh = [
    ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
    ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
    ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
    ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }],
  ],
  th = at("users", eh);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const nh = [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ],
  rh = at("x", nh),
  Sc = [
    { code: "it", name: "Italiano", flag: "🇮🇹" },
    { code: "en", name: "English", flag: "🇬🇧" },
    { code: "de", name: "Deutsch", flag: "🇩🇪" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
    { code: "es", name: "Español", flag: "🇪🇸" },
  ];
function Ec() {
  const { language: o, setLanguage: s } = vn(),
    [u, f] = S.useState(!1),
    m = S.useRef(null),
    p = Sc.find((v) => v.code === o);
  return (
    S.useEffect(() => {
      function v(E) {
        m.current && !m.current.contains(E.target) && f(!1);
      }
      return (
        document.addEventListener("mousedown", v),
        () => document.removeEventListener("mousedown", v)
      );
    }, []),
    c.jsxs("div", {
      className: "relative",
      ref: m,
      children: [
        c.jsxs("button", {
          onClick: () => f(!u),
          className:
            "flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors",
          children: [
            c.jsx(Qc, { size: 20 }),
            c.jsxs("span", {
              className: "hidden md:inline",
              children: [
                p == null ? void 0 : p.flag,
                " ",
                p == null ? void 0 : p.name,
              ],
            }),
            c.jsx("span", {
              className: "md:hidden",
              children: p == null ? void 0 : p.flag,
            }),
          ],
        }),
        u &&
          c.jsx("div", {
            className:
              "absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50",
            children: Sc.map((v) =>
              c.jsxs(
                "button",
                {
                  onClick: () => {
                    (s(v.code), f(!1));
                  },
                  className: `w-full px-4 py-2 text-left hover:bg-gray-100 transition-colors flex items-center gap-2 ${o === v.code ? "bg-blue-50 text-blue-600" : "text-gray-700"}`,
                  children: [
                    c.jsx("span", { children: v.flag }),
                    c.jsx("span", { children: v.name }),
                  ],
                },
                v.code,
              ),
            ),
          }),
      ],
    })
  );
}
const lh = {
  it: {
    nav: {
      home: "Homepage",
      plans: "Piano",
      about: "Chi siamo",
      contact: "Contatti",
    },
    home: {
      heroTitle: "Benvenuti a Napoli",
      heroSubtitle:
        "Scopri la bellezza, la cultura e la storia di una delle città più affascinanti d'Italia",
      explorePlans: "Esplora il nostro piano",
      whyChooseTitle: "Perché scegliere Napoli Vera?",
      whyChooseSubtitle:
        "4 giorni tra vicoli, storie, musica e sapori. Questo non è un viaggio da cartolina. È un’esperienza dentro Napoli: quella vera, viva, rumorosa, misteriosa. Camminerai nei vicoli, mangerai dove mangiano i napoletani, ascolterai storie che non trovi nelle guide e scoprirai una città che si racconta solo a chi sa ascoltare. Napoli Vera è pensato per chi vuole vivere la città, non solo visitarla.",
      customTours: "Tour Personalizzati",
      customToursDesc:
        "Itinerari su misura per le tue esigenze e i tuoi interessi",
      expertGuides: "Guide Esperte",
      expertGuidesDesc:
        "Guide locali appassionate con profonda conoscenza della città",
      flexibility: "Flessibilità",
      flexibilityDesc:
        "Scegli tra tour di diverse durate, dal mattino alla sera",
      destinationsTitle: "Le nostre destinazioni",
      vesuvio: "Vesuvio e Pompei",
      vesuvioDesc: "Esplora il vulcano e le antiche rovine",
      amalfi: "Costiera Amalfitana",
      amalfiDesc: "Scopri i borghi più belli d'Italia",
    },
    plans: {
      title: "I nostri piani di viaggio",
      subtitle:
        "Scegli il tour perfetto per te tra le nostre proposte. Ogni piano è pensato per offrirti un'esperienza indimenticabile alla scoperta di Napoli e dei suoi dintorni.",
      bookNow: "Prenota ora",
      customTourTitle: "Hai bisogno di un tour personalizzato?",
      customTourDesc:
        "Contattaci per creare un itinerario su misura per te. Possiamo organizzare tour privati, esperienze tematiche e molto altro.",
      contactUs: "Contattaci",
      classic: {
        name: "Tour Classico",
        duration: "Mezza giornata",
        features: [
          "Centro storico di Napoli",
          "Spaccanapoli e Via dei Tribunali",
          "Piazza del Plebiscito",
          "Castel Nuovo (Maschio Angioino)",
          "Guida professionale inclusa",
        ],
      },
      gastro: {
        name: "Tour Gastronomico",
        duration: "4 ore",
        features: [
          "Degustazione di pizza napoletana",
          "Visita ai mercati locali",
          "Assaggio di sfogliatelle e babà",
          "Caffè napoletano tradizionale",
          "Tour delle migliori pasticcerie",
        ],
      },
      vesuvio: {
        name: "Tour Vesuvio & Pompei",
        duration: "Giornata intera",
        features: [
          "Trasporto da/per Napoli",
          "Visita guidata agli scavi di Pompei",
          "Escursione sul cratere del Vesuvio",
          "Pranzo tipico incluso",
          "Biglietti d'ingresso inclusi",
        ],
      },
      amalfi: {
        name: "Costiera Amalfitana",
        duration: "Giornata intera",
        features: [
          "Visita a Positano e Amalfi",
          "Sosta a Ravello",
          "Tempo libero per shopping",
          "Trasporto confortevole",
          "Guide multilingue",
        ],
      },
    },
    about: {
      title: "Chi siamo",
      subtitle: "La passione per Napoli ci guida ogni giorno",
      missionTitle: "La nostra missione",
      missionText1:
        "Napoli Vera nasce dalla passione di un gruppo di guide turistiche napoletane che desiderano condividere le meraviglie della loro città con viaggiatori da tutto il mondo. Crediamo che Napoli sia una città unica, ricca di storia, cultura e tradizioni che meritano di essere scoperte e raccontate nel modo migliore possibile.",
      missionText2:
        "Dal 2010, accompagniamo migliaia di visitatori alla scoperta di Napoli e dei suoi dintorni, offrendo tour autentici e memorabili. La nostra esperienza pluriennale ci permette di creare itinerari che vanno oltre i classici percorsi turistici, portandovi nel cuore pulsante della città partenopea.",
      missionText3:
        "Ogni nostro tour è pensato per far vivere un'esperienza unica: dalla degustazione della vera pizza napoletana nei vicoli di Spaccanapoli, alla visita degli scavi di Pompei con spiegazioni dettagliate della vita romana, fino alle panoramiche mozzafiato della Costiera Amalfitana.",
      valuesTitle: "I nostri valori",
      passion: "Passione",
      passionDesc:
        "Amiamo profondamente la nostra città e mettiamo tutto il nostro cuore nel far conoscere le sue meraviglie. Ogni tour è un'opportunità per condividere questa passione.",
      professionalism: "Professionalità",
      professionalismDesc:
        "Le nostre guide sono certificate, multilingue e costantemente aggiornate. Offriamo un servizio di alta qualità con attenzione ai dettagli.",
      authenticity: "Autenticità",
      authenticityDesc:
        "Mostriamo la Napoli autentica, quella che conosciamo noi napoletani. Niente stereotipi, solo esperienze vere e genuine.",
      teamTitle: "Il nostro team",
      teamSubtitle:
        "Guide esperte, appassionate e sempre pronte ad accogliervi",
      yearsExp: "anni di esperienza",
    },
    contact: {
      title: "Contattaci",
      subtitle:
        "Siamo a tua disposizione per qualsiasi informazione sui nostri tour e servizi. Non esitare a contattarci!",
      formTitle: "Inviaci un messaggio",
      name: "Nome e Cognome",
      email: "Email",
      phone: "Telefono",
      message: "Messaggio",
      send: "Invia messaggio",
      namePlaceholder: "Mario Rossi",
      emailPlaceholder: "mario.rossi@email.com",
      phonePlaceholder: "+39 123 456 7890",
      messagePlaceholder: "Scrivi qui il tuo messaggio...",
      infoTitle: "Informazioni di contatto",
      address: "Indirizzo",
      addressText: `Via Toledo, 123
80134 Napoli, Italia`,
      openingHours: "Orari di apertura",
      monFri: "Lunedì - Venerdì: 9:00 - 18:00",
      sat: "Sabato: 9:00 - 13:00",
      sun: "Domenica: Chiuso",
      faqTitle: "Domande frequenti?",
      faqDesc:
        "Visita la nostra sezione FAQ o contattaci direttamente. Siamo disponibili anche su WhatsApp per rispondere rapidamente alle tue domande.",
      whatsapp: "Contattaci su WhatsApp",
      successMessage:
        "Grazie per il tuo messaggio! Ti risponderemo al più presto.",
    },
    footer: {
      description:
        "Scopri Napoli con i nostri tour guidati e piani di viaggio personalizzati.",
      contacts: "Contatti",
      hours: "Orari",
      monFri: "Lun - Ven: 9:00 - 18:00",
      sat: "Sab: 9:00 - 13:00",
      sun: "Dom: Chiuso",
      rights: "Tutti i diritti riservati.",
    },
  },
  en: {
    nav: {
      home: "Home",
      plans: "Plans",
      about: "About Us",
      contact: "Contact",
    },
    home: {
      heroTitle: "Welcome to Naples",
      heroSubtitle:
        "Discover the beauty, culture and history of one of Italy's most fascinating cities",
      explorePlans: "Explore our plan",
      whyChooseTitle: "Why choose Napoli Vera?",
      whyChooseSubtitle:
        "Four days spent exploring narrow streets, stories, music, and flavors. This is not a picture-perfect trip. It is an experience within Naples: the real, lively, noisy, mysterious Naples. You will walk through narrow streets, eat where the Neapolitans eat, listen to stories that you won't find in guidebooks, and discover a city that reveals itself only to those who know how to listen. Napoli Vera is designed for those who want to experience the city, not just visit it.",
      customTours: "Custom Tours",
      customToursDesc: "Tailor-made itineraries for your needs and interests",
      expertGuides: "Expert Guides",
      expertGuidesDesc:
        "Passionate local guides with deep knowledge of the city",
      flexibility: "Flexibility",
      flexibilityDesc:
        "Choose from tours of different durations, from morning to evening",
      destinationsTitle: "Our destinations",
      vesuvio: "Vesuvius & Pompeii",
      vesuvioDesc: "Explore the volcano and ancient ruins",
      amalfi: "Amalfi Coast",
      amalfiDesc: "Discover the most beautiful villages in Italy",
    },
    plans: {
      title: "Our travel plans",
      subtitle:
        "Choose the perfect tour for you among our proposals. Each plan is designed to offer you an unforgettable experience discovering Naples and its surroundings.",
      bookNow: "Book now",
      customTourTitle: "Need a custom tour?",
      customTourDesc:
        "Contact us to create a tailor-made itinerary for you. We can organize private tours, themed experiences and much more.",
      contactUs: "Contact us",
      classic: {
        name: "Classic Tour",
        duration: "Half day",
        features: [
          "Naples historic center",
          "Spaccanapoli and Via dei Tribunali",
          "Piazza del Plebiscito",
          "Castel Nuovo (Maschio Angioino)",
          "Professional guide included",
        ],
      },
      gastro: {
        name: "Food Tour",
        duration: "4 hours",
        features: [
          "Neapolitan pizza tasting",
          "Visit to local markets",
          "Tasting of sfogliatelle and babà",
          "Traditional Neapolitan coffee",
          "Tour of the best pastry shops",
        ],
      },
      vesuvio: {
        name: "Vesuvius & Pompeii Tour",
        duration: "Full day",
        features: [
          "Transport to/from Naples",
          "Guided tour of Pompeii excavations",
          "Excursion to Vesuvius crater",
          "Typical lunch included",
          "Entrance tickets included",
        ],
      },
      amalfi: {
        name: "Amalfi Coast",
        duration: "Full day",
        features: [
          "Visit to Positano and Amalfi",
          "Stop in Ravello",
          "Free time for shopping",
          "Comfortable transport",
          "Multilingual guides",
        ],
      },
    },
    about: {
      title: "About Us",
      subtitle: "Our passion for Naples guides us every day",
      missionTitle: "Our mission",
      missionText1:
        "Napoli Vera was born from the passion of a group of Neapolitan tour guides who want to share the wonders of their city with travelers from all over the world. We believe that Naples is a unique city, rich in history, culture and traditions that deserve to be discovered and told in the best possible way.",
      missionText2:
        "Since 2010, we have accompanied thousands of visitors to discover Naples and its surroundings, offering authentic and memorable tours. Our years of experience allow us to create itineraries that go beyond the classic tourist routes, taking you to the beating heart of the Neapolitan city.",
      missionText3:
        "Each of our tours is designed to provide a unique experience: from tasting real Neapolitan pizza in the alleys of Spaccanapoli, to visiting the excavations of Pompeii with detailed explanations of Roman life, to the breathtaking views of the Amalfi Coast.",
      valuesTitle: "Our values",
      passion: "Passion",
      passionDesc:
        "We deeply love our city and put all our heart into making its wonders known. Every tour is an opportunity to share this passion.",
      professionalism: "Professionalism",
      professionalismDesc:
        "Our guides are certified, multilingual and constantly updated. We offer a high quality service with attention to detail.",
      authenticity: "Authenticity",
      authenticityDesc:
        "We show the authentic Naples, the one we Neapolitans know. No stereotypes, only true and genuine experiences.",
      teamTitle: "Our team",
      teamSubtitle: "Expert guides, passionate and always ready to welcome you",
      yearsExp: "years of experience",
    },
    contact: {
      title: "Contact Us",
      subtitle:
        "We are at your disposal for any information about our tours and services. Don't hesitate to contact us!",
      formTitle: "Send us a message",
      name: "Full Name",
      email: "Email",
      phone: "Phone",
      message: "Message",
      send: "Send message",
      namePlaceholder: "John Doe",
      emailPlaceholder: "john.doe@email.com",
      phonePlaceholder: "+1 123 456 7890",
      messagePlaceholder: "Write your message here...",
      infoTitle: "Contact information",
      address: "Address",
      addressText: `Via Toledo, 123
80134 Naples, Italy`,
      openingHours: "Opening hours",
      monFri: "Monday - Friday: 9:00 - 18:00",
      sat: "Saturday: 9:00 - 13:00",
      sun: "Sunday: Closed",
      faqTitle: "Frequently asked questions?",
      faqDesc:
        "Visit our FAQ section or contact us directly. We are also available on WhatsApp to quickly answer your questions.",
      whatsapp: "Contact us on WhatsApp",
      successMessage:
        "Thank you for your message! We will reply as soon as possible.",
    },
    footer: {
      description:
        "Discover Naples with our guided tours and personalized travel plans.",
      contacts: "Contacts",
      hours: "Hours",
      monFri: "Mon - Fri: 9:00 - 18:00",
      sat: "Sat: 9:00 - 13:00",
      sun: "Sun: Closed",
      rights: "All rights reserved.",
    },
  },
  de: {
    nav: {
      home: "Startseite",
      plans: "Plan",
      about: "Über uns",
      contact: "Kontakt",
    },
    home: {
      heroTitle: "Willkommen in Neapel",
      heroSubtitle:
        "Entdecken Sie die Schönheit, Kultur und Geschichte einer der faszinierendsten Städte Italiens",
      explorePlans: "Entdecken Sie unseren Plan",
      whyChooseTitle: "Warum Napoli Vera wählen?",
      whyChooseSubtitle:
        "4 Tage zwischen Gassen, Geschichten, Musik und Aromen. Dies ist keine Reise wie auf einer Postkarte. Es ist eine Erfahrung in Neapel: das echte, lebendige, laute, geheimnisvolle Neapel. Sie spazieren durch die Gassen, essen dort, wo die Neapolitaner essen, hören Geschichten, die Sie in keinem Reiseführer finden, und entdecken eine Stadt, die sich nur denen offenbart, die zuhören können. Napoli Vera ist für diejenigen gedacht, die die Stadt erleben und nicht nur besuchen möchten.",
      customTours: "Maßgeschneiderte Touren",
      customToursDesc:
        "Maßgeschneiderte Reiserouten für Ihre Bedürfnisse und Interessen",
      expertGuides: "Expertenführer",
      expertGuidesDesc:
        "Leidenschaftliche lokale Führer mit tiefem Wissen über die Stadt",
      flexibility: "Flexibilität",
      flexibilityDesc:
        "Wählen Sie aus Touren unterschiedlicher Dauer, von morgens bis abends",
      destinationsTitle: "Unsere Reiseziele",
      vesuvio: "Vesuv & Pompeji",
      vesuvioDesc: "Erkunden Sie den Vulkan und die antiken Ruinen",
      amalfi: "Amalfiküste",
      amalfiDesc: "Entdecken Sie die schönsten Dörfer Italiens",
    },
    plans: {
      title: "Unsere Reisepläne",
      subtitle:
        "Wählen Sie die perfekte Tour für Sie aus unseren Vorschlägen. Jeder Plan ist darauf ausgelegt, Ihnen ein unvergessliches Erlebnis bei der Entdeckung Neapels und seiner Umgebung zu bieten.",
      bookNow: "Jetzt buchen",
      customTourTitle: "Benötigen Sie eine individuelle Tour?",
      customTourDesc:
        "Kontaktieren Sie uns, um eine maßgeschneiderte Reiseroute für Sie zu erstellen. Wir können private Touren, thematische Erlebnisse und vieles mehr organisieren.",
      contactUs: "Kontaktieren Sie uns",
      classic: {
        name: "Klassische Tour",
        duration: "Halbtägig",
        features: [
          "Historisches Zentrum von Neapel",
          "Spaccanapoli und Via dei Tribunali",
          "Piazza del Plebiscito",
          "Castel Nuovo (Maschio Angioino)",
          "Professioneller Führer inklusive",
        ],
      },
      gastro: {
        name: "Gastronomie-Tour",
        duration: "4 Stunden",
        features: [
          "Neapolitanische Pizza-Verkostung",
          "Besuch lokaler Märkte",
          "Verkostung von Sfogliatelle und Babà",
          "Traditioneller neapolitanischer Kaffee",
          "Tour durch die besten Konditoreien",
        ],
      },
      vesuvio: {
        name: "Vesuv & Pompeji Tour",
        duration: "Ganztägig",
        features: [
          "Transport von/nach Neapel",
          "Geführte Tour durch die Ausgrabungen von Pompeji",
          "Ausflug zum Vesuvkrater",
          "Typisches Mittagessen inklusive",
          "Eintrittskarten inklusive",
        ],
      },
      amalfi: {
        name: "Amalfiküste",
        duration: "Ganztägig",
        features: [
          "Besuch in Positano und Amalfi",
          "Halt in Ravello",
          "Freizeit zum Einkaufen",
          "Komfortabler Transport",
          "Mehrsprachige Führer",
        ],
      },
    },
    about: {
      title: "Über uns",
      subtitle: "Unsere Leidenschaft für Neapel leitet uns jeden Tag",
      missionTitle: "Unsere Mission",
      missionText1:
        "Napoli Vera wurde aus der Leidenschaft einer Gruppe neapolitanischer Reiseführer geboren, die die Wunder ihrer Stadt mit Reisenden aus aller Welt teilen möchten. Wir glauben, dass Neapel eine einzigartige Stadt ist, reich an Geschichte, Kultur und Traditionen, die es verdienen, auf bestmögliche Weise entdeckt und erzählt zu werden.",
      missionText2:
        "Seit 2010 begleiten wir Tausende von Besuchern bei der Entdeckung Neapels und seiner Umgebung und bieten authentische und unvergessliche Touren an. Unsere jahrelange Erfahrung ermöglicht es uns, Reiserouten zu erstellen, die über die klassischen Touristenrouten hinausgehen und Sie in das schlagende Herz der neapolitanischen Stadt führen.",
      missionText3:
        "Jede unserer Touren ist darauf ausgelegt, ein einzigartiges Erlebnis zu bieten: von der Verkostung echter neapolitanischer Pizza in den Gassen von Spaccanapoli über den Besuch der Ausgrabungen von Pompeji mit detaillierten Erklärungen des römischen Lebens bis hin zu den atemberaubenden Ausblicken auf die Amalfiküste.",
      valuesTitle: "Unsere Werte",
      passion: "Leidenschaft",
      passionDesc:
        "Wir lieben unsere Stadt zutiefst und setzen unser ganzes Herz ein, um ihre Wunder bekannt zu machen. Jede Tour ist eine Gelegenheit, diese Leidenschaft zu teilen.",
      professionalism: "Professionalität",
      professionalismDesc:
        "Unsere Führer sind zertifiziert, mehrsprachig und ständig aktualisiert. Wir bieten einen qualitativ hochwertigen Service mit Liebe zum Detail.",
      authenticity: "Authentizität",
      authenticityDesc:
        "Wir zeigen das authentische Neapel, das wir Neapolitaner kennen. Keine Stereotypen, nur wahre und echte Erfahrungen.",
      teamTitle: "Unser Team",
      teamSubtitle:
        "Erfahrene Führer, leidenschaftlich und immer bereit, Sie willkommen zu heißen",
      yearsExp: "Jahre Erfahrung",
    },
    contact: {
      title: "Kontaktieren Sie uns",
      subtitle:
        "Wir stehen Ihnen für alle Informationen zu unseren Touren und Dienstleistungen zur Verfügung. Zögern Sie nicht, uns zu kontaktieren!",
      formTitle: "Senden Sie uns eine Nachricht",
      name: "Vollständiger Name",
      email: "E-Mail",
      phone: "Telefon",
      message: "Nachricht",
      send: "Nachricht senden",
      namePlaceholder: "Max Mustermann",
      emailPlaceholder: "max.mustermann@email.com",
      phonePlaceholder: "+49 123 456 7890",
      messagePlaceholder: "Schreiben Sie hier Ihre Nachricht...",
      infoTitle: "Kontaktinformationen",
      address: "Adresse",
      addressText: `Via Toledo, 123
80134 Neapel, Italien`,
      openingHours: "Öffnungszeiten",
      monFri: "Montag - Freitag: 9:00 - 18:00",
      sat: "Samstag: 9:00 - 13:00",
      sun: "Sonntag: Geschlossen",
      faqTitle: "Häufig gestellte Fragen?",
      faqDesc:
        "Besuchen Sie unseren FAQ-Bereich oder kontaktieren Sie uns direkt. Wir sind auch über WhatsApp verfügbar, um Ihre Fragen schnell zu beantworten.",
      whatsapp: "Kontaktieren Sie uns auf WhatsApp",
      successMessage:
        "Vielen Dank für Ihre Nachricht! Wir werden so schnell wie möglich antworten.",
    },
    footer: {
      description:
        "Entdecken Sie Neapel mit unseren geführten Touren und personalisierten Reiseplänen.",
      contacts: "Kontakte",
      hours: "Öffnungszeiten",
      monFri: "Mo - Fr: 9:00 - 18:00",
      sat: "Sa: 9:00 - 13:00",
      sun: "So: Geschlossen",
      rights: "Alle Rechte vorbehalten.",
    },
  },
  fr: {
    nav: {
      home: "Accueil",
      plans: "Plans",
      about: "À propos",
      contact: "Contact",
    },
    home: {
      heroTitle: "Bienvenue à Naples",
      heroSubtitle:
        "Découvrez la beauté, la culture et l'histoire de l'une des villes les plus fascinantes d'Italie",
      explorePlans: "Découvrez notre plan",
      whyChooseTitle: "Pourquoi choisir Napoli Vera?",
      whyChooseSubtitle:
        "4 jours entre ruelles, histoires, musique et saveurs. Ce n'est pas un voyage de carte postale. C'est une expérience au cœur de Naples : la vraie, vivante, bruyante, mystérieuse. Vous vous promènerez dans les ruelles, vous mangerez là où mangent les Napolitains, vous écouterez des histoires que vous ne trouverez pas dans les guides et vous découvrirez une ville qui ne se dévoile qu'à ceux qui savent écouter. Napoli Vera est conçu pour ceux qui veulent vivre la ville, pas seulement la visiter.",
      customTours: "Visites personnalisées",
      customToursDesc:
        "Itinéraires sur mesure pour vos besoins et vos intérêts",
      expertGuides: "Guides experts",
      expertGuidesDesc:
        "Guides locaux passionnés avec une connaissance approfondie de la ville",
      flexibility: "Flexibilité",
      flexibilityDesc:
        "Choisissez parmi des visites de différentes durées, du matin au soir",
      destinationsTitle: "Nos destinations",
      vesuvio: "Vésuve & Pompéi",
      vesuvioDesc: "Explorez le volcan et les ruines antiques",
      amalfi: "Côte amalfitaine",
      amalfiDesc: "Découvrez les plus beaux villages d'Italie",
    },
    plans: {
      title: "Nos plans de voyage",
      subtitle:
        "Choisissez la visite parfaite pour vous parmi nos propositions. Chaque plan est conçu pour vous offrir une expérience inoubliable à la découverte de Naples et de ses environs.",
      bookNow: "Réserver maintenant",
      customTourTitle: "Besoin d'une visite personnalisée?",
      customTourDesc:
        "Contactez-nous pour créer un itinéraire sur mesure pour vous. Nous pouvons organiser des visites privées, des expériences thématiques et bien plus encore.",
      contactUs: "Contactez-nous",
      classic: {
        name: "Visite classique",
        duration: "Demi-journée",
        features: [
          "Centre historique de Naples",
          "Spaccanapoli et Via dei Tribunali",
          "Piazza del Plebiscito",
          "Castel Nuovo (Maschio Angioino)",
          "Guide professionnel inclus",
        ],
      },
      gastro: {
        name: "Visite gastronomique",
        duration: "4 heures",
        features: [
          "Dégustation de pizza napolitaine",
          "Visite des marchés locaux",
          "Dégustation de sfogliatelle et babà",
          "Café napolitain traditionnel",
          "Visite des meilleures pâtisseries",
        ],
      },
      vesuvio: {
        name: "Visite Vésuve & Pompéi",
        duration: "Journée complète",
        features: [
          "Transport depuis/vers Naples",
          "Visite guidée des fouilles de Pompéi",
          "Excursion au cratère du Vésuve",
          "Déjeuner typique inclus",
          "Billets d'entrée inclus",
        ],
      },
      amalfi: {
        name: "Côte amalfitaine",
        duration: "Journée complète",
        features: [
          "Visite de Positano et Amalfi",
          "Arrêt à Ravello",
          "Temps libre pour le shopping",
          "Transport confortable",
          "Guides multilingues",
        ],
      },
    },
    about: {
      title: "À propos de nous",
      subtitle: "Notre passion pour Naples nous guide chaque jour",
      missionTitle: "Notre mission",
      missionText1:
        "Napoli Vera est né de la passion d'un groupe de guides touristiques napolitains qui souhaitent partager les merveilles de leur ville avec des voyageurs du monde entier. Nous croyons que Naples est une ville unique, riche en histoire, culture et traditions qui méritent d'être découvertes et racontées de la meilleure façon possible.",
      missionText2:
        "Depuis 2010, nous accompagnons des milliers de visiteurs à la découverte de Naples et de ses environs, en offrant des visites authentiques et mémorables. Notre expérience de plusieurs années nous permet de créer des itinéraires qui vont au-delà des routes touristiques classiques, vous emmenant au cœur battant de la ville napolitaine.",
      missionText3:
        "Chacune de nos visites est conçue pour offrir une expérience unique: de la dégustation de vraie pizza napolitaine dans les ruelles de Spaccanapoli, à la visite des fouilles de Pompéi avec des explications détaillées de la vie romaine, jusqu'aux vues à couper le souffle de la côte amalfitaine.",
      valuesTitle: "Nos valeurs",
      passion: "Passion",
      passionDesc:
        "Nous aimons profondément notre ville et mettons tout notre cœur à faire connaître ses merveilles. Chaque visite est une occasion de partager cette passion.",
      professionalism: "Professionnalisme",
      professionalismDesc:
        "Nos guides sont certifiés, multilingues et constamment mis à jour. Nous offrons un service de haute qualité avec attention aux détails.",
      authenticity: "Authenticité",
      authenticityDesc:
        "Nous montrons le Naples authentique, celui que nous, les Napolitains, connaissons. Pas de stéréotypes, seulement des expériences vraies et authentiques.",
      teamTitle: "Notre équipe",
      teamSubtitle:
        "Guides experts, passionnés et toujours prêts à vous accueillir",
      yearsExp: "ans d'expérience",
    },
    contact: {
      title: "Contactez-nous",
      subtitle:
        "Nous sommes à votre disposition pour toute information sur nos visites et services. N'hésitez pas à nous contacter!",
      formTitle: "Envoyez-nous un message",
      name: "Nom complet",
      email: "Email",
      phone: "Téléphone",
      message: "Message",
      send: "Envoyer le message",
      namePlaceholder: "Jean Dupont",
      emailPlaceholder: "jean.dupont@email.com",
      phonePlaceholder: "+33 1 23 45 67 89",
      messagePlaceholder: "Écrivez votre message ici...",
      infoTitle: "Informations de contact",
      address: "Adresse",
      addressText: `Via Toledo, 123
80134 Naples, Italie`,
      openingHours: "Heures d'ouverture",
      monFri: "Lundi - Vendredi: 9:00 - 18:00",
      sat: "Samedi: 9:00 - 13:00",
      sun: "Dimanche: Fermé",
      faqTitle: "Questions fréquemment posées?",
      faqDesc:
        "Visitez notre section FAQ ou contactez-nous directement. Nous sommes également disponibles sur WhatsApp pour répondre rapidement à vos questions.",
      whatsapp: "Contactez-nous sur WhatsApp",
      successMessage:
        "Merci pour votre message! Nous vous répondrons dans les plus brefs délais.",
    },
    footer: {
      description:
        "Découvrez Naples avec nos visites guidées et plans de voyage personnalisés.",
      contacts: "Contacts",
      hours: "Horaires",
      monFri: "Lun - Ven: 9:00 - 18:00",
      sat: "Sam: 9:00 - 13:00",
      sun: "Dim: Fermé",
      rights: "Tous droits réservés.",
    },
  },
  es: {
    nav: {
      home: "Inicio",
      plans: "Piano",
      about: "Sobre nosotros",
      contact: "Contacto",
    },
    home: {
      heroTitle: "Bienvenidos a Nápoles",
      heroSubtitle:
        "Descubre la belleza, la cultura y la historia de una de las ciudades más fascinantes de Italia",
      explorePlans: "Explora nuestro plan",
      whyChooseTitle: "¿Por qué elegir Napoli Vera?",
      whyChooseSubtitle:
        "Ofrecemos experiencias únicas para cada tipo de viajero",
      customTours: "Tours personalizados",
      customToursDesc: "Itinerarios a medida para tus necesidades e intereses",
      expertGuides: "Guías expertos",
      expertGuidesDesc:
        "Guías locales apasionados con profundo conocimiento de la ciudad",
      flexibility: "Flexibilidad",
      flexibilityDesc:
        "Elige entre tours de diferentes duraciones, de la mañana a la noche",
      destinationsTitle: "Nuestros destinos",
      vesuvio: "Vesubio y Pompeya",
      vesuvioDesc: "Explora el volcán y las ruinas antiguas",
      amalfi: "Costa Amalfitana",
      amalfiDesc: "Descubre los pueblos más hermosos de Italia",
    },
    plans: {
      title: "Nuestros planes de viaje",
      subtitle:
        "Elige el tour perfecto para ti entre nuestras propuestas. Cada plan está diseñado para ofrecerte una experiencia inolvidable descubriendo Nápoles y sus alrededores.",
      bookNow: "Reservar ahora",
      customTourTitle: "¿Necesitas un tour personalizado?",
      customTourDesc:
        "Contáctanos para crear un itinerario a medida para ti. Podemos organizar tours privados, experiencias temáticas y mucho más.",
      contactUs: "Contáctanos",
      classic: {
        name: "Tour Clásico",
        duration: "Medio día",
        features: [
          "Centro histórico de Nápoles",
          "Spaccanapoli y Via dei Tribunali",
          "Piazza del Plebiscito",
          "Castel Nuovo (Maschio Angioino)",
          "Guía profesional incluido",
        ],
      },
      gastro: {
        name: "Tour Gastronómico",
        duration: "4 horas",
        features: [
          "Degustación de pizza napolitana",
          "Visita a mercados locales",
          "Degustación de sfogliatelle y babà",
          "Café napolitano tradicional",
          "Tour por las mejores pastelerías",
        ],
      },
      vesuvio: {
        name: "Tour Vesubio y Pompeya",
        duration: "Día completo",
        features: [
          "Transporte desde/hacia Nápoles",
          "Visita guiada a las excavaciones de Pompeya",
          "Excursión al cráter del Vesubio",
          "Almuerzo típico incluido",
          "Entradas incluidas",
        ],
      },
      amalfi: {
        name: "Costa Amalfitana",
        duration: "Día completo",
        features: [
          "Visita a Positano y Amalfi",
          "Parada en Ravello",
          "Tiempo libre para compras",
          "Transporte cómodo",
          "Guías multilingües",
        ],
      },
    },
    about: {
      title: "Sobre nosotros",
      subtitle: "Nuestra pasión por Nápoles nos guía cada día",
      missionTitle: "Nuestra misión",
      missionText1:
        "Napoli Vera nació de la pasión de un grupo de guías turísticos napolitanos que desean compartir las maravillas de su ciudad con viajeros de todo el mundo. Creemos que Nápoles es una ciudad única, rica en historia, cultura y tradiciones que merecen ser descubiertas y contadas de la mejor manera posible.",
      missionText2:
        "Desde 2010, acompañamos a miles de visitantes en el descubrimiento de Nápoles y sus alrededores, ofreciendo tours auténticos y memorables. Nuestra experiencia de muchos años nos permite crear itinerarios que van más allá de las rutas turísticas clásicas, llevándote al corazón palpitante de la ciudad napolitana.",
      missionText3:
        "Cada uno de nuestros tours está diseñado para ofrecer una experiencia única: desde la degustación de verdadera pizza napolitana en los callejones de Spaccanapoli, hasta la visita de las excavaciones de Pompeya con explicaciones detalladas de la vida romana, hasta las vistas impresionantes de la Costa Amalfitana.",
      valuesTitle: "Nuestros valores",
      passion: "Pasión",
      passionDesc:
        "Amamos profundamente nuestra ciudad y ponemos todo nuestro corazón en dar a conocer sus maravillas. Cada tour es una oportunidad para compartir esta pasión.",
      professionalism: "Profesionalidad",
      professionalismDesc:
        "Nuestros guías están certificados, son multilingües y se actualizan constantemente. Ofrecemos un servicio de alta calidad con atención a los detalles.",
      authenticity: "Autenticidad",
      authenticityDesc:
        "Mostramos la Nápoles auténtica, la que conocemos los napolitanos. Sin estereotipos, solo experiencias verdaderas y genuinas.",
      teamTitle: "Nuestro equipo",
      teamSubtitle:
        "Guías expertos, apasionados y siempre listos para recibirte",
      yearsExp: "años de experiencia",
    },
    contact: {
      title: "Contáctanos",
      subtitle:
        "Estamos a tu disposición para cualquier información sobre nuestros tours y servicios. ¡No dudes en contactarnos!",
      formTitle: "Envíanos un mensaje",
      name: "Nombre completo",
      email: "Email",
      phone: "Teléfono",
      message: "Mensaje",
      send: "Enviar mensaje",
      namePlaceholder: "Juan Pérez",
      emailPlaceholder: "juan.perez@email.com",
      phonePlaceholder: "+34 123 456 789",
      messagePlaceholder: "Escribe tu mensaje aquí...",
      infoTitle: "Información de contacto",
      address: "Dirección",
      addressText: `Via Toledo, 123
80134 Nápoles, Italia`,
      openingHours: "Horario de apertura",
      monFri: "Lunes - Viernes: 9:00 - 18:00",
      sat: "Sábado: 9:00 - 13:00",
      sun: "Domingo: Cerrado",
      faqTitle: "¿Preguntas frecuentes?",
      faqDesc:
        "Visita nuestra sección de preguntas frecuentes o contáctanos directamente. También estamos disponibles en WhatsApp para responder rápidamente a tus preguntas.",
      whatsapp: "Contáctanos en WhatsApp",
      successMessage:
        "¡Gracias por tu mensaje! Te responderemos lo antes posible.",
    },
    footer: {
      description:
        "Descubre Nápoles con nuestros tours guiados y planes de viaje personalizados.",
      contacts: "Contactos",
      hours: "Horarios",
      monFri: "Lun - Vie: 9:00 - 18:00",
      sat: "Sáb: 9:00 - 13:00",
      sun: "Dom: Cerrado",
      rights: "Todos los derechos reservados.",
    },
  },
};
function bn(o) {
  return lh[o];
}
function ih() {
  const [o, s] = S.useState(!1),
    { language: u } = vn(),
    f = bn(u);
  return c.jsx("nav", {
    className: "bg-white shadow-md sticky top-0 z-50",
    children: c.jsxs("div", {
      className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
      children: [
        c.jsxs("div", {
          className: "flex justify-between items-center h-16",
          children: [
            c.jsx(ot, {
              to: "/",
              className: "flex items-center space-x-2",
              children: c.jsx("span", {
                className: "text-2xl font-bold text-blue-600",
                children: "Napoli Vera",
              }),
            }),
            c.jsxs("div", {
              className: "hidden md:flex items-center space-x-8",
              children: [
                c.jsx(ot, {
                  to: "/",
                  className:
                    "text-gray-700 hover:text-blue-600 transition-colors",
                  children: f.nav.home,
                }),
                c.jsx(ot, {
                  to: "/piani",
                  className:
                    "text-gray-700 hover:text-blue-600 transition-colors",
                  children: f.nav.plans,
                }),
                c.jsx(ot, {
                  to: "/chi-siamo",
                  className:
                    "text-gray-700 hover:text-blue-600 transition-colors",
                  children: f.nav.about,
                }),
                c.jsx(ot, {
                  to: "/contatti",
                  className:
                    "text-gray-700 hover:text-blue-600 transition-colors",
                  children: f.nav.contact,
                }),
                c.jsx(Ec, {}),
              ],
            }),
            c.jsxs("div", {
              className: "md:hidden flex items-center gap-2",
              children: [
                c.jsx(Ec, {}),
                c.jsx("button", {
                  onClick: () => s(!o),
                  className: "text-gray-700 hover:text-blue-600",
                  children: o
                    ? c.jsx(rh, { size: 24 })
                    : c.jsx(Ym, { size: 24 }),
                }),
              ],
            }),
          ],
        }),
        o &&
          c.jsxs("div", {
            className: "md:hidden pb-4 space-y-2",
            children: [
              c.jsx(ot, {
                to: "/",
                className:
                  "block py-2 text-gray-700 hover:text-blue-600 transition-colors",
                onClick: () => s(!1),
                children: f.nav.home,
              }),
              c.jsx(ot, {
                to: "/piani",
                className:
                  "block py-2 text-gray-700 hover:text-blue-600 transition-colors",
                onClick: () => s(!1),
                children: f.nav.plans,
              }),
              c.jsx(ot, {
                to: "/chi-siamo",
                className:
                  "block py-2 text-gray-700 hover:text-blue-600 transition-colors",
                onClick: () => s(!1),
                children: f.nav.about,
              }),
              c.jsx(ot, {
                to: "/contatti",
                className:
                  "block py-2 text-gray-700 hover:text-blue-600 transition-colors",
                onClick: () => s(!1),
                children: f.nav.contact,
              }),
            ],
          }),
      ],
    }),
  });
}
function oh() {
  const { language: o } = vn(),
    s = bn(o);
  return c.jsx("footer", {
    className: "bg-gray-900 text-white py-12 mt-auto",
    children: c.jsxs("div", {
      className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
      children: [
        c.jsxs("div", {
          className: "grid grid-cols-1 md:grid-cols-3 gap-8",
          children: [
            c.jsxs("div", {
              children: [
                c.jsx("h3", {
                  className: "text-xl font-bold mb-4",
                  children: "Napoli Vera",
                }),
                c.jsx("p", {
                  className: "text-gray-400",
                  children: s.footer.description,
                }),
              ],
            }),
            c.jsxs("div", {
              children: [
                c.jsx("h4", {
                  className: "font-semibold mb-4",
                  children: s.footer.contacts,
                }),
                c.jsxs("div", {
                  className: "space-y-2 text-gray-400",
                  children: [
                    c.jsxs("div", {
                      className: "flex items-center gap-2",
                      children: [
                        c.jsx(Kc, { size: 18 }),
                        c.jsx("span", { children: "info@Napoli Vera.it" }),
                      ],
                    }),
                    c.jsxs("div", {
                      className: "flex items-center gap-2",
                      children: [
                        c.jsx(Yc, { size: 18 }),
                        c.jsx("span", { children: "+39 081 123 4567" }),
                      ],
                    }),
                    c.jsxs("div", {
                      className: "flex items-center gap-2",
                      children: [
                        c.jsx(ei, { size: 18 }),
                        c.jsx("span", { children: "Napoli, Italia" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            c.jsxs("div", {
              children: [
                c.jsx("h4", {
                  className: "font-semibold mb-4",
                  children: s.footer.hours,
                }),
                c.jsxs("div", {
                  className: "text-gray-400",
                  children: [
                    c.jsx("p", { children: s.footer.monFri }),
                    c.jsx("p", { children: s.footer.sat }),
                    c.jsx("p", { children: s.footer.sun }),
                  ],
                }),
              ],
            }),
          ],
        }),
        c.jsx("div", {
          className:
            "border-t border-gray-800 mt-8 pt-8 text-center text-gray-400",
          children: c.jsxs("p", {
            children: ["© 2026 Napoli Vera. ", s.footer.rights],
          }),
        }),
      ],
    }),
  });
}
const sh =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==";
function Mr(o) {
  const [s, u] = S.useState(!1),
    f = () => {
      u(!0);
    },
    { src: m, alt: p, style: v, className: E, ...k } = o;
  return s
    ? c.jsx("div", {
        className: `inline-block bg-gray-100 text-center align-middle ${E ?? ""}`,
        style: v,
        children: c.jsx("div", {
          className: "flex items-center justify-center w-full h-full",
          children: c.jsx("img", {
            src: sh,
            alt: "Error loading image",
            ...k,
            "data-original-url": m,
          }),
        }),
      })
    : c.jsx("img", {
        src: m,
        alt: p,
        className: E,
        style: v,
        ...k,
        onError: f,
      });
}
function ah() {
  const { language: o } = vn(),
    s = bn(o);
  return c.jsxs("div", {
    className: "min-h-screen",
    children: [
      c.jsxs("section", {
        className: "relative h-[600px] flex items-center justify-center",
        children: [
          c.jsxs("div", {
            className: "absolute inset-0",
            children: [
              c.jsx(Mr, {
                src: "https://images.unsplash.com/photo-1707177614710-4d35764f7340?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOYXBsZXMlMjBJdGFseSUyMGNpdHlzY2FwZXxlbnwxfHx8fDE3Njg3MzU2MTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
                alt: "Napoli cityscape",
                className: "w-full h-full object-cover",
              }),
              c.jsx("div", { className: "absolute inset-0 bg-black/50" }),
            ],
          }),
          c.jsxs("div", {
            className: "relative z-10 text-center text-white px-4",
            children: [
              c.jsx("h1", {
                className: "text-5xl md:text-6xl font-bold mb-4",
                children: s.home.heroTitle,
              }),
              c.jsx("p", {
                className: "text-xl md:text-2xl mb-8 max-w-2xl mx-auto",
                children: s.home.heroSubtitle,
              }),
              c.jsx(ot, {
                to: "/piani",
                className:
                  "inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg transition-colors",
                children: s.home.explorePlans,
              }),
            ],
          }),
        ],
      }),
      c.jsx("section", {
        className: "py-16 bg-gray-50",
        children: c.jsxs("div", {
          className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
          children: [
            c.jsxs("div", {
              className: "text-center mb-12",
              children: [
                c.jsx("h2", {
                  className: "text-4xl font-bold mb-4",
                  children: s.home.whyChooseTitle,
                }),
                c.jsx("p", {
                  className: "text-xl text-gray-600",
                  children: s.home.whyChooseSubtitle,
                }),
              ],
            }),
            c.jsxs("div", {
              className: "grid grid-cols-1 md:grid-cols-3 gap-8",
              children: [
                c.jsxs("div", {
                  className: "bg-white p-8 rounded-lg shadow-md text-center",
                  children: [
                    c.jsx("div", {
                      className:
                        "w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4",
                      children: c.jsx(ei, {
                        className: "text-blue-600",
                        size: 32,
                      }),
                    }),
                    c.jsx("h3", {
                      className: "text-xl font-semibold mb-2",
                      children: s.home.customTours,
                    }),
                    c.jsx("p", {
                      className: "text-gray-600",
                      children: s.home.customToursDesc,
                    }),
                  ],
                }),
                c.jsxs("div", {
                  className: "bg-white p-8 rounded-lg shadow-md text-center",
                  children: [
                    c.jsx("div", {
                      className:
                        "w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4",
                      children: c.jsx(th, {
                        className: "text-blue-600",
                        size: 32,
                      }),
                    }),
                    c.jsx("h3", {
                      className: "text-xl font-semibold mb-2",
                      children: s.home.expertGuides,
                    }),
                    c.jsx("p", {
                      className: "text-gray-600",
                      children: s.home.expertGuidesDesc,
                    }),
                  ],
                }),
                c.jsxs("div", {
                  className: "bg-white p-8 rounded-lg shadow-md text-center",
                  children: [
                    c.jsx("div", {
                      className:
                        "w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4",
                      children: c.jsx(qc, {
                        className: "text-blue-600",
                        size: 32,
                      }),
                    }),
                    c.jsx("h3", {
                      className: "text-xl font-semibold mb-2",
                      children: s.home.flexibility,
                    }),
                    c.jsx("p", {
                      className: "text-gray-600",
                      children: s.home.flexibilityDesc,
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
      c.jsx("section", {
        className: "py-16",
        children: c.jsxs("div", {
          className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
          children: [
            c.jsx("h2", {
              className: "text-4xl font-bold text-center mb-12",
              children: s.home.destinationsTitle,
            }),
            c.jsxs("div", {
              className: "grid grid-cols-1 md:grid-cols-2 gap-8",
              children: [
                c.jsxs("div", {
                  className: "relative h-80 rounded-lg overflow-hidden group",
                  children: [
                    c.jsx(Mr, {
                      src: "https://images.unsplash.com/photo-1694631138401-971f4fe15c8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWZXN1dml1cyUyMHZvbGNhbm8lMjBOYXBsZXN8ZW58MXx8fHwxNzY4NzM1NjE5fDA&ixlib=rb-4.1.0&q=80&w=1080",
                      alt: "Vesuvio",
                      className:
                        "w-full h-full object-cover group-hover:scale-110 transition-transform duration-300",
                    }),
                    c.jsx("div", {
                      className:
                        "absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6",
                      children: c.jsxs("div", {
                        className: "text-white",
                        children: [
                          c.jsx("h3", {
                            className: "text-2xl font-bold mb-2",
                            children: s.home.vesuvio,
                          }),
                          c.jsx("p", { children: s.home.vesuvioDesc }),
                        ],
                      }),
                    }),
                  ],
                }),
                c.jsxs("div", {
                  className: "relative h-80 rounded-lg overflow-hidden group",
                  children: [
                    c.jsx(Mr, {
                      src: "https://images.unsplash.com/photo-1583844056361-4418a8f2a985?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBbWFsZmklMjBDb2FzdCUyMEl0YWx5fGVufDF8fHx8MTc2ODczNTYyMHww&ixlib=rb-4.1.0&q=80&w=1080",
                      alt: "Costiera Amalfitana",
                      className:
                        "w-full h-full object-cover group-hover:scale-110 transition-transform duration-300",
                    }),
                    c.jsx("div", {
                      className:
                        "absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6",
                      children: c.jsxs("div", {
                        className: "text-white",
                        children: [
                          c.jsx("h3", {
                            className: "text-2xl font-bold mb-2",
                            children: s.home.amalfi,
                          }),
                          c.jsx("p", { children: s.home.amalfiDesc }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
function uh() {
  const { language: o } = vn(),
    s = bn(o),
    u = [
      {
        name: s.plans.classic.name,
        duration: s.plans.classic.duration,
        price: "€45",
        image:
          "https://images.unsplash.com/photo-1707177614710-4d35764f7340?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOYXBsZXMlMjBJdGFseSUyMGNpdHlzY2FwZXxlbnwxfHx8fDE3Njg3MzU2MTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
        features: s.plans.classic.features,
      },
      {
        name: s.plans.gastro.name,
        duration: s.plans.gastro.duration,
        price: "€65",
        image:
          "https://images.unsplash.com/photo-1670275559226-cacd73cdfc32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOYXBsZXMlMjBwaXp6YSUyMGZvb2R8ZW58MXx8fHwxNzY4NzM1NjE5fDA&ixlib=rb-4.1.0&q=80&w=1080",
        features: s.plans.gastro.features,
      },
      {
        name: s.plans.vesuvio.name,
        duration: s.plans.vesuvio.duration,
        price: "€95",
        image:
          "https://images.unsplash.com/photo-1694631138401-971f4fe15c8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWZXN1dml1cyUyMHZvbGNhbm8lMjBOYXBsZXN8ZW58MXx8fHwxNzY4NzM1NjE5fDA&ixlib=rb-4.1.0&q=80&w=1080",
        features: s.plans.vesuvio.features,
      },
      {
        name: s.plans.amalfi.name,
        duration: s.plans.amalfi.duration,
        price: "€120",
        image:
          "https://images.unsplash.com/photo-1583844056361-4418a8f2a985?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBbWFsZmklMjBDb2FzdCUyMEl0YWx5fGVufDF8fHx8MTc2ODczNTYyMHww&ixlib=rb-4.1.0&q=80&w=1080",
        features: s.plans.amalfi.features,
      },
    ];
  return c.jsx("div", {
    className: "min-h-screen py-16",
    children: c.jsxs("div", {
      className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
      children: [
        c.jsxs("div", {
          className: "text-center mb-12",
          children: [
            c.jsx("h1", {
              className: "text-5xl font-bold mb-4",
              children: s.plans.title,
            }),
            c.jsx("p", {
              className: "text-xl text-gray-600 max-w-3xl mx-auto",
              children: s.plans.subtitle,
            }),
          ],
        }),
        c.jsx("div", {
          className: "grid grid-cols-1 md:grid-cols-2 gap-8",
          children: u.map((f, m) =>
            c.jsxs(
              "div",
              {
                className:
                  "bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow",
                children: [
                  c.jsxs("div", {
                    className: "relative h-64",
                    children: [
                      c.jsx(Mr, {
                        src: f.image,
                        alt: f.name,
                        className: "w-full h-full object-cover",
                      }),
                      c.jsx("div", {
                        className:
                          "absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-full font-semibold",
                        children: f.price,
                      }),
                    ],
                  }),
                  c.jsxs("div", {
                    className: "p-6",
                    children: [
                      c.jsxs("div", {
                        className: "flex justify-between items-start mb-4",
                        children: [
                          c.jsx("h2", {
                            className: "text-2xl font-bold",
                            children: f.name,
                          }),
                          c.jsx("span", {
                            className:
                              "text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full",
                            children: f.duration,
                          }),
                        ],
                      }),
                      c.jsx("ul", {
                        className: "space-y-3 mb-6",
                        children: f.features.map((p, v) =>
                          c.jsxs(
                            "li",
                            {
                              className: "flex items-start gap-2",
                              children: [
                                c.jsx(Vm, {
                                  className:
                                    "text-green-600 flex-shrink-0 mt-1",
                                  size: 20,
                                }),
                                c.jsx("span", {
                                  className: "text-gray-700",
                                  children: p,
                                }),
                              ],
                            },
                            v,
                          ),
                        ),
                      }),
                      c.jsx("button", {
                        className:
                          "w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition-colors font-semibold",
                        children: s.plans.bookNow,
                      }),
                    ],
                  }),
                ],
              },
              m,
            ),
          ),
        }),
        c.jsxs("div", {
          className: "mt-16 bg-blue-50 p-8 rounded-lg text-center",
          children: [
            c.jsx("h3", {
              className: "text-2xl font-bold mb-4",
              children: s.plans.customTourTitle,
            }),
            c.jsx("p", {
              className: "text-gray-700 mb-6 max-w-2xl mx-auto",
              children: s.plans.customTourDesc,
            }),
            c.jsx("a", {
              href: "/contatti",
              className:
                "inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors font-semibold",
              children: s.plans.contactUs,
            }),
          ],
        }),
      ],
    }),
  });
}
function ch() {
  const { language: o } = vn(),
    s = bn(o),
    u = [
      {
        name: "Marco Esposito",
        role:
          o === "it"
            ? "Guida turistica certificata"
            : o === "en"
              ? "Certified tour guide"
              : o === "de"
                ? "Zertifizierter Reiseführer"
                : o === "fr"
                  ? "Guide touristique certifié"
                  : "Guía turístico certificado",
        exp: 15,
      },
      {
        name: "Giulia Romano",
        role:
          o === "it"
            ? "Storica dell'arte"
            : o === "en"
              ? "Art historian"
              : o === "de"
                ? "Kunsthistorikerin"
                : o === "fr"
                  ? "Historienne de l'art"
                  : "Historiadora del arte",
        exp: 12,
      },
      {
        name: "Antonio Russo",
        role:
          o === "it"
            ? "Esperto gastronomico"
            : o === "en"
              ? "Food expert"
              : o === "de"
                ? "Gastronomie-Experte"
                : o === "fr"
                  ? "Expert gastronomique"
                  : "Experto gastronómico",
        exp: 10,
      },
      {
        name: "Francesca De Luca",
        role:
          o === "it"
            ? "Guida archeologica"
            : o === "en"
              ? "Archaeological guide"
              : o === "de"
                ? "Archäologischer Führer"
                : o === "fr"
                  ? "Guide archéologique"
                  : "Guía arqueológica",
        exp: 8,
      },
    ];
  return c.jsxs("div", {
    className: "min-h-screen",
    children: [
      c.jsxs("section", {
        className: "relative h-96 flex items-center justify-center",
        children: [
          c.jsxs("div", {
            className: "absolute inset-0",
            children: [
              c.jsx(Mr, {
                src: "https://images.unsplash.com/photo-1707177614710-4d35764f7340?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOYXBsZXMlMjBJdGFseSUyMGNpdHlzY2FwZXxlbnwxfHx8fDE3Njg3MzU2MTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
                alt: "Napoli",
                className: "w-full h-full object-cover",
              }),
              c.jsx("div", { className: "absolute inset-0 bg-black/60" }),
            ],
          }),
          c.jsxs("div", {
            className: "relative z-10 text-center text-white px-4",
            children: [
              c.jsx("h1", {
                className: "text-5xl md:text-6xl font-bold mb-4",
                children: s.about.title,
              }),
              c.jsx("p", {
                className: "text-xl md:text-2xl max-w-3xl mx-auto",
                children: s.about.subtitle,
              }),
            ],
          }),
        ],
      }),
      c.jsx("section", {
        className: "py-16",
        children: c.jsxs("div", {
          className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",
          children: [
            c.jsxs("div", {
              className: "text-center mb-12",
              children: [
                c.jsx("h2", {
                  className: "text-4xl font-bold mb-6",
                  children: s.about.missionTitle,
                }),
                c.jsx("p", {
                  className: "text-lg text-gray-700 leading-relaxed",
                  children: s.about.missionText1,
                }),
              ],
            }),
            c.jsxs("div", {
              className: "prose prose-lg mx-auto",
              children: [
                c.jsx("p", {
                  className: "text-gray-700 leading-relaxed mb-4",
                  children: s.about.missionText2,
                }),
                c.jsx("p", {
                  className: "text-gray-700 leading-relaxed",
                  children: s.about.missionText3,
                }),
              ],
            }),
          ],
        }),
      }),
      c.jsx("section", {
        className: "py-16 bg-gray-50",
        children: c.jsxs("div", {
          className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
          children: [
            c.jsx("h2", {
              className: "text-4xl font-bold text-center mb-12",
              children: s.about.valuesTitle,
            }),
            c.jsxs("div", {
              className: "grid grid-cols-1 md:grid-cols-3 gap-8",
              children: [
                c.jsxs("div", {
                  className: "bg-white p-8 rounded-lg shadow-md",
                  children: [
                    c.jsx("div", {
                      className:
                        "w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4",
                      children: c.jsx(Gm, {
                        className: "text-red-600",
                        size: 32,
                      }),
                    }),
                    c.jsx("h3", {
                      className: "text-2xl font-semibold mb-4",
                      children: s.about.passion,
                    }),
                    c.jsx("p", {
                      className: "text-gray-700",
                      children: s.about.passionDesc,
                    }),
                  ],
                }),
                c.jsxs("div", {
                  className: "bg-white p-8 rounded-lg shadow-md",
                  children: [
                    c.jsx("div", {
                      className:
                        "w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4",
                      children: c.jsx(Hm, {
                        className: "text-yellow-600",
                        size: 32,
                      }),
                    }),
                    c.jsx("h3", {
                      className: "text-2xl font-semibold mb-4",
                      children: s.about.professionalism,
                    }),
                    c.jsx("p", {
                      className: "text-gray-700",
                      children: s.about.professionalismDesc,
                    }),
                  ],
                }),
                c.jsxs("div", {
                  className: "bg-white p-8 rounded-lg shadow-md",
                  children: [
                    c.jsx("div", {
                      className:
                        "w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4",
                      children: c.jsx(Qc, {
                        className: "text-blue-600",
                        size: 32,
                      }),
                    }),
                    c.jsx("h3", {
                      className: "text-2xl font-semibold mb-4",
                      children: s.about.authenticity,
                    }),
                    c.jsx("p", {
                      className: "text-gray-700",
                      children: s.about.authenticityDesc,
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
      c.jsx("section", {
        className: "py-16",
        children: c.jsxs("div", {
          className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
          children: [
            c.jsxs("div", {
              className: "text-center mb-12",
              children: [
                c.jsx("h2", {
                  className: "text-4xl font-bold mb-4",
                  children: s.about.teamTitle,
                }),
                c.jsx("p", {
                  className: "text-xl text-gray-600",
                  children: s.about.teamSubtitle,
                }),
              ],
            }),
            c.jsx("div", {
              className: "grid grid-cols-1 md:grid-cols-4 gap-8",
              children: u.map((f, m) =>
                c.jsxs(
                  "div",
                  {
                    className: "text-center",
                    children: [
                      c.jsx("div", {
                        className:
                          "w-32 h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center",
                        children: c.jsx("span", {
                          className: "text-white text-3xl font-bold",
                          children: f.name
                            .split(" ")
                            .map((p) => p[0])
                            .join(""),
                        }),
                      }),
                      c.jsx("h3", {
                        className: "text-xl font-semibold mb-1",
                        children: f.name,
                      }),
                      c.jsx("p", {
                        className: "text-gray-600 mb-1",
                        children: f.role,
                      }),
                      c.jsxs("p", {
                        className: "text-sm text-gray-500",
                        children: [f.exp, " ", s.about.yearsExp],
                      }),
                    ],
                  },
                  m,
                ),
              ),
            }),
          ],
        }),
      }),
    ],
  });
}
function dh() {
  const { language: o } = vn(),
    s = bn(o),
    [u, f] = S.useState({ nome: "", email: "", telefono: "", messaggio: "" }),
    m = (v) => {
      (v.preventDefault(),
        alert(s.contact.successMessage),
        f({ nome: "", email: "", telefono: "", messaggio: "" }));
    },
    p = (v) => {
      f({ ...u, [v.target.name]: v.target.value });
    };
  return c.jsx("div", {
    className: "min-h-screen py-16",
    children: c.jsxs("div", {
      className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
      children: [
        c.jsxs("div", {
          className: "text-center mb-12",
          children: [
            c.jsx("h1", {
              className: "text-5xl font-bold mb-4",
              children: s.contact.title,
            }),
            c.jsx("p", {
              className: "text-xl text-gray-600 max-w-3xl mx-auto",
              children: s.contact.subtitle,
            }),
          ],
        }),
        c.jsxs("div", {
          className: "grid grid-cols-1 lg:grid-cols-2 gap-12",
          children: [
            c.jsxs("div", {
              className: "bg-white p-8 rounded-lg shadow-lg",
              children: [
                c.jsx("h2", {
                  className: "text-2xl font-bold mb-6",
                  children: s.contact.formTitle,
                }),
                c.jsxs("form", {
                  onSubmit: m,
                  className: "space-y-6",
                  children: [
                    c.jsxs("div", {
                      children: [
                        c.jsx("label", {
                          htmlFor: "nome",
                          className:
                            "block text-sm font-medium text-gray-700 mb-2",
                          children: s.contact.name,
                        }),
                        c.jsx("input", {
                          type: "text",
                          id: "nome",
                          name: "nome",
                          value: u.nome,
                          onChange: p,
                          required: !0,
                          className:
                            "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none",
                          placeholder: s.contact.namePlaceholder,
                        }),
                      ],
                    }),
                    c.jsxs("div", {
                      children: [
                        c.jsx("label", {
                          htmlFor: "email",
                          className:
                            "block text-sm font-medium text-gray-700 mb-2",
                          children: s.contact.email,
                        }),
                        c.jsx("input", {
                          type: "email",
                          id: "email",
                          name: "email",
                          value: u.email,
                          onChange: p,
                          required: !0,
                          className:
                            "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none",
                          placeholder: s.contact.emailPlaceholder,
                        }),
                      ],
                    }),
                    c.jsxs("div", {
                      children: [
                        c.jsx("label", {
                          htmlFor: "telefono",
                          className:
                            "block text-sm font-medium text-gray-700 mb-2",
                          children: s.contact.phone,
                        }),
                        c.jsx("input", {
                          type: "tel",
                          id: "telefono",
                          name: "telefono",
                          value: u.telefono,
                          onChange: p,
                          className:
                            "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none",
                          placeholder: s.contact.phonePlaceholder,
                        }),
                      ],
                    }),
                    c.jsxs("div", {
                      children: [
                        c.jsx("label", {
                          htmlFor: "messaggio",
                          className:
                            "block text-sm font-medium text-gray-700 mb-2",
                          children: s.contact.message,
                        }),
                        c.jsx("textarea", {
                          id: "messaggio",
                          name: "messaggio",
                          value: u.messaggio,
                          onChange: p,
                          required: !0,
                          rows: 5,
                          className:
                            "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none resize-none",
                          placeholder: s.contact.messagePlaceholder,
                        }),
                      ],
                    }),
                    c.jsxs("button", {
                      type: "submit",
                      className:
                        "w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition-colors font-semibold flex items-center justify-center gap-2",
                      children: [c.jsx(Jm, { size: 20 }), s.contact.send],
                    }),
                  ],
                }),
              ],
            }),
            c.jsxs("div", {
              className: "space-y-8",
              children: [
                c.jsxs("div", {
                  className: "bg-white p-8 rounded-lg shadow-lg",
                  children: [
                    c.jsx("h2", {
                      className: "text-2xl font-bold mb-6",
                      children: s.contact.infoTitle,
                    }),
                    c.jsxs("div", {
                      className: "space-y-6",
                      children: [
                        c.jsxs("div", {
                          className: "flex items-start gap-4",
                          children: [
                            c.jsx("div", {
                              className:
                                "w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0",
                              children: c.jsx(ei, {
                                className: "text-blue-600",
                                size: 24,
                              }),
                            }),
                            c.jsxs("div", {
                              children: [
                                c.jsx("h3", {
                                  className: "font-semibold mb-1",
                                  children: s.contact.address,
                                }),
                                c.jsx("p", {
                                  className:
                                    "text-gray-600 whitespace-pre-line",
                                  children: s.contact.addressText,
                                }),
                              ],
                            }),
                          ],
                        }),
                        c.jsxs("div", {
                          className: "flex items-start gap-4",
                          children: [
                            c.jsx("div", {
                              className:
                                "w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0",
                              children: c.jsx(Yc, {
                                className: "text-blue-600",
                                size: 24,
                              }),
                            }),
                            c.jsxs("div", {
                              children: [
                                c.jsx("h3", {
                                  className: "font-semibold mb-1",
                                  children: s.contact.phone,
                                }),
                                c.jsx("p", {
                                  className: "text-gray-600",
                                  children: "+39 081 123 4567",
                                }),
                                c.jsx("p", {
                                  className: "text-gray-600",
                                  children: "+39 333 123 4567",
                                }),
                              ],
                            }),
                          ],
                        }),
                        c.jsxs("div", {
                          className: "flex items-start gap-4",
                          children: [
                            c.jsx("div", {
                              className:
                                "w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0",
                              children: c.jsx(Kc, {
                                className: "text-blue-600",
                                size: 24,
                              }),
                            }),
                            c.jsxs("div", {
                              children: [
                                c.jsx("h3", {
                                  className: "font-semibold mb-1",
                                  children: s.contact.email,
                                }),
                                c.jsx("p", {
                                  className: "text-gray-600",
                                  children: "info@Napoli Vera.it",
                                }),
                                c.jsx("p", {
                                  className: "text-gray-600",
                                  children: "booking@Napoli Vera.it",
                                }),
                              ],
                            }),
                          ],
                        }),
                        c.jsxs("div", {
                          className: "flex items-start gap-4",
                          children: [
                            c.jsx("div", {
                              className:
                                "w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0",
                              children: c.jsx(qc, {
                                className: "text-blue-600",
                                size: 24,
                              }),
                            }),
                            c.jsxs("div", {
                              children: [
                                c.jsx("h3", {
                                  className: "font-semibold mb-1",
                                  children: s.contact.openingHours,
                                }),
                                c.jsx("p", {
                                  className: "text-gray-600",
                                  children: s.contact.monFri,
                                }),
                                c.jsx("p", {
                                  className: "text-gray-600",
                                  children: s.contact.sat,
                                }),
                                c.jsx("p", {
                                  className: "text-gray-600",
                                  children: s.contact.sun,
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                c.jsxs("div", {
                  className: "bg-blue-50 p-8 rounded-lg",
                  children: [
                    c.jsx("h3", {
                      className: "text-xl font-bold mb-4",
                      children: s.contact.faqTitle,
                    }),
                    c.jsx("p", {
                      className: "text-gray-700 mb-4",
                      children: s.contact.faqDesc,
                    }),
                    c.jsx("button", {
                      className:
                        "bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors font-semibold",
                      children: s.contact.whatsapp,
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        c.jsx("div", {
          className: "mt-12",
          children: c.jsx("div", {
            className:
              "bg-gray-200 h-96 rounded-lg flex items-center justify-center",
            children: c.jsxs("div", {
              className: "text-center text-gray-600",
              children: [
                c.jsx(ei, { size: 48, className: "mx-auto mb-2" }),
                c.jsx("p", {
                  className: "text-lg",
                  children:
                    o === "it"
                      ? "Mappa interattiva"
                      : o === "en"
                        ? "Interactive map"
                        : o === "de"
                          ? "Interaktive Karte"
                          : o === "fr"
                            ? "Carte interactive"
                            : "Mapa interactivo",
                }),
                c.jsx("p", {
                  className: "text-sm",
                  children: "Via Toledo, 123 - Napoli",
                }),
              ],
            }),
          }),
        }),
      ],
    }),
  });
}
function fh() {
  return c.jsx(Mm, {
    children: c.jsx(Em, {
      children: c.jsxs("div", {
        className: "min-h-screen flex flex-col",
        children: [
          c.jsx(ih, {}),
          c.jsx("main", {
            className: "flex-grow",
            children: c.jsxs(em, {
              children: [
                c.jsx(Dr, { path: "/", element: c.jsx(ah, {}) }),
                c.jsx(Dr, { path: "/piani", element: c.jsx(uh, {}) }),
                c.jsx(Dr, { path: "/chi-siamo", element: c.jsx(ch, {}) }),
                c.jsx(Dr, { path: "/contatti", element: c.jsx(dh, {}) }),
              ],
            }),
          }),
          c.jsx(oh, {}),
        ],
      }),
    }),
  });
}
np.createRoot(document.getElementById("root")).render(c.jsx(fh, {}));
