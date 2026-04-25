var lh = (e) => {
  throw TypeError(e);
};
var Bl = (e, t, n) => t.has(e) || lh("Cannot " + n);
var R = (e, t, n) => (
    Bl(e, t, "read from private field"), n ? n.call(e) : t.get(e)
  ),
  J = (e, t, n) =>
    t.has(e)
      ? lh("Cannot add the same private member more than once")
      : t instanceof WeakSet
      ? t.add(e)
      : t.set(e, n),
  G = (e, t, n, r) => (
    Bl(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n
  ),
  Oe = (e, t, n) => (Bl(e, t, "access private method"), n);
var bs = (e, t, n, r) => ({
  set _(i) {
    G(e, t, i, n);
  },
  get _() {
    return R(e, t, r);
  },
});
function p1(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in e)) {
          const o = Object.getOwnPropertyDescriptor(r, i);
          o &&
            Object.defineProperty(
              e,
              i,
              o.get ? o : { enumerable: !0, get: () => r[i] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === "childList")
        for (const s of o.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const o = {};
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = n(i);
    fetch(i.href, o);
  }
})();
function Tg(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Pg = { exports: {} },
  rl = {},
  kg = { exports: {} },
  X = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var as = Symbol.for("react.element"),
  m1 = Symbol.for("react.portal"),
  g1 = Symbol.for("react.fragment"),
  y1 = Symbol.for("react.strict_mode"),
  v1 = Symbol.for("react.profiler"),
  x1 = Symbol.for("react.provider"),
  w1 = Symbol.for("react.context"),
  S1 = Symbol.for("react.forward_ref"),
  b1 = Symbol.for("react.suspense"),
  E1 = Symbol.for("react.memo"),
  C1 = Symbol.for("react.lazy"),
  uh = Symbol.iterator;
function T1(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (uh && e[uh]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Ng = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Ag = Object.assign,
  Rg = {};
function Hi(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Rg),
    (this.updater = n || Ng);
}
Hi.prototype.isReactComponent = {};
Hi.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Hi.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function jg() {}
jg.prototype = Hi.prototype;
function yd(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Rg),
    (this.updater = n || Ng);
}
var vd = (yd.prototype = new jg());
vd.constructor = yd;
Ag(vd, Hi.prototype);
vd.isPureReactComponent = !0;
var ch = Array.isArray,
  Mg = Object.prototype.hasOwnProperty,
  xd = { current: null },
  Dg = { key: !0, ref: !0, __self: !0, __source: !0 };
function Lg(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      Mg.call(t, r) && !Dg.hasOwnProperty(r) && (i[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) i.children = n;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    i.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
  return {
    $$typeof: as,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: xd.current,
  };
}
function P1(e, t) {
  return {
    $$typeof: as,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function wd(e) {
  return typeof e == "object" && e !== null && e.$$typeof === as;
}
function k1(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var dh = /\/+/g;
function $l(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? k1("" + e.key)
    : t.toString(36);
}
function Ys(e, t, n, r, i) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (o) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case as:
          case m1:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (i = i(s)),
      (e = r === "" ? "." + $l(s, 0) : r),
      ch(i)
        ? ((n = ""),
          e != null && (n = e.replace(dh, "$&/") + "/"),
          Ys(i, t, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (wd(i) &&
            (i = P1(
              i,
              n +
                (!i.key || (s && s.key === i.key)
                  ? ""
                  : ("" + i.key).replace(dh, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), ch(e)))
    for (var a = 0; a < e.length; a++) {
      o = e[a];
      var l = r + $l(o, a);
      s += Ys(o, t, n, l, i);
    }
  else if (((l = T1(e)), typeof l == "function"))
    for (e = l.call(e), a = 0; !(o = e.next()).done; )
      (o = o.value), (l = r + $l(o, a++)), (s += Ys(o, t, n, l, i));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return s;
}
function Es(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Ys(e, r, "", "", function (o) {
      return t.call(n, o, i++);
    }),
    r
  );
}
function N1(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Qe = { current: null },
  Xs = { transition: null },
  A1 = {
    ReactCurrentDispatcher: Qe,
    ReactCurrentBatchConfig: Xs,
    ReactCurrentOwner: xd,
  };
function Og() {
  throw Error("act(...) is not supported in production builds of React.");
}
X.Children = {
  map: Es,
  forEach: function (e, t, n) {
    Es(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Es(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Es(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!wd(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
X.Component = Hi;
X.Fragment = g1;
X.Profiler = v1;
X.PureComponent = yd;
X.StrictMode = y1;
X.Suspense = b1;
X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = A1;
X.act = Og;
X.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Ag({}, e.props),
    i = e.key,
    o = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (s = xd.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (l in t)
      Mg.call(t, l) &&
        !Dg.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: as, type: e.type, key: i, ref: o, props: r, _owner: s };
};
X.createContext = function (e) {
  return (
    (e = {
      $$typeof: w1,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: x1, _context: e }),
    (e.Consumer = e)
  );
};
X.createElement = Lg;
X.createFactory = function (e) {
  var t = Lg.bind(null, e);
  return (t.type = e), t;
};
X.createRef = function () {
  return { current: null };
};
X.forwardRef = function (e) {
  return { $$typeof: S1, render: e };
};
X.isValidElement = wd;
X.lazy = function (e) {
  return { $$typeof: C1, _payload: { _status: -1, _result: e }, _init: N1 };
};
X.memo = function (e, t) {
  return { $$typeof: E1, type: e, compare: t === void 0 ? null : t };
};
X.startTransition = function (e) {
  var t = Xs.transition;
  Xs.transition = {};
  try {
    e();
  } finally {
    Xs.transition = t;
  }
};
X.unstable_act = Og;
X.useCallback = function (e, t) {
  return Qe.current.useCallback(e, t);
};
X.useContext = function (e) {
  return Qe.current.useContext(e);
};
X.useDebugValue = function () {};
X.useDeferredValue = function (e) {
  return Qe.current.useDeferredValue(e);
};
X.useEffect = function (e, t) {
  return Qe.current.useEffect(e, t);
};
X.useId = function () {
  return Qe.current.useId();
};
X.useImperativeHandle = function (e, t, n) {
  return Qe.current.useImperativeHandle(e, t, n);
};
X.useInsertionEffect = function (e, t) {
  return Qe.current.useInsertionEffect(e, t);
};
X.useLayoutEffect = function (e, t) {
  return Qe.current.useLayoutEffect(e, t);
};
X.useMemo = function (e, t) {
  return Qe.current.useMemo(e, t);
};
X.useReducer = function (e, t, n) {
  return Qe.current.useReducer(e, t, n);
};
X.useRef = function (e) {
  return Qe.current.useRef(e);
};
X.useState = function (e) {
  return Qe.current.useState(e);
};
X.useSyncExternalStore = function (e, t, n) {
  return Qe.current.useSyncExternalStore(e, t, n);
};
X.useTransition = function () {
  return Qe.current.useTransition();
};
X.version = "18.3.1";
kg.exports = X;
var S = kg.exports;
const D = Tg(S),
  Ig = p1({ __proto__: null, default: D }, [S]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var R1 = S,
  j1 = Symbol.for("react.element"),
  M1 = Symbol.for("react.fragment"),
  D1 = Object.prototype.hasOwnProperty,
  L1 = R1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  O1 = { key: !0, ref: !0, __self: !0, __source: !0 };
function Fg(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) D1.call(t, r) && !O1.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: j1,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: L1.current,
  };
}
rl.Fragment = M1;
rl.jsx = Fg;
rl.jsxs = Fg;
Pg.exports = rl;
var p = Pg.exports,
  Vg = { exports: {} },
  ft = {},
  _g = { exports: {} },
  zg = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(P, A) {
    var I = P.length;
    P.push(A);
    e: for (; 0 < I; ) {
      var $ = (I - 1) >>> 1,
        B = P[$];
      if (0 < i(B, A)) (P[$] = A), (P[I] = B), (I = $);
      else break e;
    }
  }
  function n(P) {
    return P.length === 0 ? null : P[0];
  }
  function r(P) {
    if (P.length === 0) return null;
    var A = P[0],
      I = P.pop();
    if (I !== A) {
      P[0] = I;
      e: for (var $ = 0, B = P.length, Y = B >>> 1; $ < Y; ) {
        var q = 2 * ($ + 1) - 1,
          we = P[q],
          Le = q + 1,
          te = P[Le];
        if (0 > i(we, I))
          Le < B && 0 > i(te, we)
            ? ((P[$] = te), (P[Le] = I), ($ = Le))
            : ((P[$] = we), (P[q] = I), ($ = q));
        else if (Le < B && 0 > i(te, I)) (P[$] = te), (P[Le] = I), ($ = Le);
        else break e;
      }
    }
    return A;
  }
  function i(P, A) {
    var I = P.sortIndex - A.sortIndex;
    return I !== 0 ? I : P.id - A.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var s = Date,
      a = s.now();
    e.unstable_now = function () {
      return s.now() - a;
    };
  }
  var l = [],
    u = [],
    c = 1,
    d = null,
    f = 3,
    h = !1,
    x = !1,
    y = !1,
    w = typeof setTimeout == "function" ? setTimeout : null,
    g = typeof clearTimeout == "function" ? clearTimeout : null,
    m = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function v(P) {
    for (var A = n(u); A !== null; ) {
      if (A.callback === null) r(u);
      else if (A.startTime <= P)
        r(u), (A.sortIndex = A.expirationTime), t(l, A);
      else break;
      A = n(u);
    }
  }
  function b(P) {
    if (((y = !1), v(P), !x))
      if (n(l) !== null) (x = !0), z(E);
      else {
        var A = n(u);
        A !== null && H(b, A.startTime - P);
      }
  }
  function E(P, A) {
    (x = !1), y && ((y = !1), g(k), (k = -1)), (h = !0);
    var I = f;
    try {
      for (
        v(A), d = n(l);
        d !== null && (!(d.expirationTime > A) || (P && !F()));

      ) {
        var $ = d.callback;
        if (typeof $ == "function") {
          (d.callback = null), (f = d.priorityLevel);
          var B = $(d.expirationTime <= A);
          (A = e.unstable_now()),
            typeof B == "function" ? (d.callback = B) : d === n(l) && r(l),
            v(A);
        } else r(l);
        d = n(l);
      }
      if (d !== null) var Y = !0;
      else {
        var q = n(u);
        q !== null && H(b, q.startTime - A), (Y = !1);
      }
      return Y;
    } finally {
      (d = null), (f = I), (h = !1);
    }
  }
  var C = !1,
    T = null,
    k = -1,
    M = 5,
    N = -1;
  function F() {
    return !(e.unstable_now() - N < M);
  }
  function O() {
    if (T !== null) {
      var P = e.unstable_now();
      N = P;
      var A = !0;
      try {
        A = T(!0, P);
      } finally {
        A ? U() : ((C = !1), (T = null));
      }
    } else C = !1;
  }
  var U;
  if (typeof m == "function")
    U = function () {
      m(O);
    };
  else if (typeof MessageChannel < "u") {
    var L = new MessageChannel(),
      W = L.port2;
    (L.port1.onmessage = O),
      (U = function () {
        W.postMessage(null);
      });
  } else
    U = function () {
      w(O, 0);
    };
  function z(P) {
    (T = P), C || ((C = !0), U());
  }
  function H(P, A) {
    k = w(function () {
      P(e.unstable_now());
    }, A);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (P) {
      P.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      x || h || ((x = !0), z(E));
    }),
    (e.unstable_forceFrameRate = function (P) {
      0 > P || 125 < P
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (M = 0 < P ? Math.floor(1e3 / P) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (P) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var A = 3;
          break;
        default:
          A = f;
      }
      var I = f;
      f = A;
      try {
        return P();
      } finally {
        f = I;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (P, A) {
      switch (P) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          P = 3;
      }
      var I = f;
      f = P;
      try {
        return A();
      } finally {
        f = I;
      }
    }),
    (e.unstable_scheduleCallback = function (P, A, I) {
      var $ = e.unstable_now();
      switch (
        (typeof I == "object" && I !== null
          ? ((I = I.delay), (I = typeof I == "number" && 0 < I ? $ + I : $))
          : (I = $),
        P)
      ) {
        case 1:
          var B = -1;
          break;
        case 2:
          B = 250;
          break;
        case 5:
          B = 1073741823;
          break;
        case 4:
          B = 1e4;
          break;
        default:
          B = 5e3;
      }
      return (
        (B = I + B),
        (P = {
          id: c++,
          callback: A,
          priorityLevel: P,
          startTime: I,
          expirationTime: B,
          sortIndex: -1,
        }),
        I > $
          ? ((P.sortIndex = I),
            t(u, P),
            n(l) === null &&
              P === n(u) &&
              (y ? (g(k), (k = -1)) : (y = !0), H(b, I - $)))
          : ((P.sortIndex = B), t(l, P), x || h || ((x = !0), z(E))),
        P
      );
    }),
    (e.unstable_shouldYield = F),
    (e.unstable_wrapCallback = function (P) {
      var A = f;
      return function () {
        var I = f;
        f = A;
        try {
          return P.apply(this, arguments);
        } finally {
          f = I;
        }
      };
    });
})(zg);
_g.exports = zg;
var I1 = _g.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var F1 = S,
  dt = I1;
function j(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
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
var Bg = new Set(),
  Do = {};
function Ur(e, t) {
  Mi(e, t), Mi(e + "Capture", t);
}
function Mi(e, t) {
  for (Do[e] = t, e = 0; e < t.length; e++) Bg.add(t[e]);
}
var mn = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Vu = Object.prototype.hasOwnProperty,
  V1 =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  fh = {},
  hh = {};
function _1(e) {
  return Vu.call(hh, e)
    ? !0
    : Vu.call(fh, e)
    ? !1
    : V1.test(e)
    ? (hh[e] = !0)
    : ((fh[e] = !0), !1);
}
function z1(e, t, n, r) {
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
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function B1(e, t, n, r) {
  if (t === null || typeof t > "u" || z1(e, t, n, r)) return !0;
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
function Ye(e, t, n, r, i, o, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = s);
}
var De = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    De[e] = new Ye(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  De[t] = new Ye(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  De[e] = new Ye(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  De[e] = new Ye(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    De[e] = new Ye(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  De[e] = new Ye(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  De[e] = new Ye(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  De[e] = new Ye(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  De[e] = new Ye(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Sd = /[\-:]([a-z])/g;
function bd(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Sd, bd);
    De[t] = new Ye(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Sd, bd);
    De[t] = new Ye(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Sd, bd);
  De[t] = new Ye(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  De[e] = new Ye(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
De.xlinkHref = new Ye(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  De[e] = new Ye(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ed(e, t, n, r) {
  var i = De.hasOwnProperty(t) ? De[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (B1(t, n, i, r) && (n = null),
    r || i === null
      ? _1(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Sn = F1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Cs = Symbol.for("react.element"),
  ei = Symbol.for("react.portal"),
  ti = Symbol.for("react.fragment"),
  Cd = Symbol.for("react.strict_mode"),
  _u = Symbol.for("react.profiler"),
  $g = Symbol.for("react.provider"),
  Ug = Symbol.for("react.context"),
  Td = Symbol.for("react.forward_ref"),
  zu = Symbol.for("react.suspense"),
  Bu = Symbol.for("react.suspense_list"),
  Pd = Symbol.for("react.memo"),
  Ln = Symbol.for("react.lazy"),
  Wg = Symbol.for("react.offscreen"),
  ph = Symbol.iterator;
function no(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ph && e[ph]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var me = Object.assign,
  Ul;
function po(e) {
  if (Ul === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Ul = (t && t[1]) || "";
    }
  return (
    `
` +
    Ul +
    e
  );
}
var Wl = !1;
function Hl(e, t) {
  if (!e || Wl) return "";
  Wl = !0;
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
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var i = u.stack.split(`
`),
          o = r.stack.split(`
`),
          s = i.length - 1,
          a = o.length - 1;
        1 <= s && 0 <= a && i[s] !== o[a];

      )
        a--;
      for (; 1 <= s && 0 <= a; s--, a--)
        if (i[s] !== o[a]) {
          if (s !== 1 || a !== 1)
            do
              if ((s--, a--, 0 > a || i[s] !== o[a])) {
                var l =
                  `
` + i[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= s && 0 <= a);
          break;
        }
    }
  } finally {
    (Wl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? po(e) : "";
}
function $1(e) {
  switch (e.tag) {
    case 5:
      return po(e.type);
    case 16:
      return po("Lazy");
    case 13:
      return po("Suspense");
    case 19:
      return po("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Hl(e.type, !1)), e;
    case 11:
      return (e = Hl(e.type.render, !1)), e;
    case 1:
      return (e = Hl(e.type, !0)), e;
    default:
      return "";
  }
}
function $u(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case ti:
      return "Fragment";
    case ei:
      return "Portal";
    case _u:
      return "Profiler";
    case Cd:
      return "StrictMode";
    case zu:
      return "Suspense";
    case Bu:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Ug:
        return (e.displayName || "Context") + ".Consumer";
      case $g:
        return (e._context.displayName || "Context") + ".Provider";
      case Td:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Pd:
        return (
          (t = e.displayName || null), t !== null ? t : $u(e.type) || "Memo"
        );
      case Ln:
        (t = e._payload), (e = e._init);
        try {
          return $u(e(t));
        } catch {}
    }
  return null;
}
function U1(e) {
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
      return $u(t);
    case 8:
      return t === Cd ? "StrictMode" : "Mode";
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
function tr(e) {
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
function Hg(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function W1(e) {
  var t = Hg(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (s) {
          (r = "" + s), o.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Ts(e) {
  e._valueTracker || (e._valueTracker = W1(e));
}
function Kg(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Hg(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function ya(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Uu(e, t) {
  var n = t.checked;
  return me({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function mh(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = tr(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Gg(e, t) {
  (t = t.checked), t != null && Ed(e, "checked", t, !1);
}
function Wu(e, t) {
  Gg(e, t);
  var n = tr(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Hu(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Hu(e, t.type, tr(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function gh(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Hu(e, t, n) {
  (t !== "number" || ya(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var mo = Array.isArray;
function mi(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + tr(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ku(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(j(91));
  return me({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function yh(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(j(92));
      if (mo(n)) {
        if (1 < n.length) throw Error(j(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: tr(n) };
}
function Qg(e, t) {
  var n = tr(t.value),
    r = tr(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function vh(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Yg(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Gu(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Yg(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Ps,
  Xg = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Ps = Ps || document.createElement("div"),
          Ps.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Ps.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Lo(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var xo = {
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
  H1 = ["Webkit", "ms", "Moz", "O"];
Object.keys(xo).forEach(function (e) {
  H1.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (xo[t] = xo[e]);
  });
});
function qg(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (xo.hasOwnProperty(e) && xo[e])
    ? ("" + t).trim()
    : t + "px";
}
function Zg(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = qg(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var K1 = me(
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
  }
);
function Qu(e, t) {
  if (t) {
    if (K1[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(j(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(j(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(j(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(j(62));
  }
}
function Yu(e, t) {
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
var Xu = null;
function kd(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var qu = null,
  gi = null,
  yi = null;
function xh(e) {
  if ((e = cs(e))) {
    if (typeof qu != "function") throw Error(j(280));
    var t = e.stateNode;
    t && ((t = ll(t)), qu(e.stateNode, e.type, t));
  }
}
function Jg(e) {
  gi ? (yi ? yi.push(e) : (yi = [e])) : (gi = e);
}
function ey() {
  if (gi) {
    var e = gi,
      t = yi;
    if (((yi = gi = null), xh(e), t)) for (e = 0; e < t.length; e++) xh(t[e]);
  }
}
function ty(e, t) {
  return e(t);
}
function ny() {}
var Kl = !1;
function ry(e, t, n) {
  if (Kl) return e(t, n);
  Kl = !0;
  try {
    return ty(e, t, n);
  } finally {
    (Kl = !1), (gi !== null || yi !== null) && (ny(), ey());
  }
}
function Oo(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = ll(n);
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
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(j(231, t, typeof n));
  return n;
}
var Zu = !1;
if (mn)
  try {
    var ro = {};
    Object.defineProperty(ro, "passive", {
      get: function () {
        Zu = !0;
      },
    }),
      window.addEventListener("test", ro, ro),
      window.removeEventListener("test", ro, ro);
  } catch {
    Zu = !1;
  }
function G1(e, t, n, r, i, o, s, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var wo = !1,
  va = null,
  xa = !1,
  Ju = null,
  Q1 = {
    onError: function (e) {
      (wo = !0), (va = e);
    },
  };
function Y1(e, t, n, r, i, o, s, a, l) {
  (wo = !1), (va = null), G1.apply(Q1, arguments);
}
function X1(e, t, n, r, i, o, s, a, l) {
  if ((Y1.apply(this, arguments), wo)) {
    if (wo) {
      var u = va;
      (wo = !1), (va = null);
    } else throw Error(j(198));
    xa || ((xa = !0), (Ju = u));
  }
}
function Wr(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function iy(e) {
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
function wh(e) {
  if (Wr(e) !== e) throw Error(j(188));
}
function q1(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Wr(e)), t === null)) throw Error(j(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return wh(i), e;
        if (o === r) return wh(i), t;
        o = o.sibling;
      }
      throw Error(j(188));
    }
    if (n.return !== r.return) (n = i), (r = o);
    else {
      for (var s = !1, a = i.child; a; ) {
        if (a === n) {
          (s = !0), (n = i), (r = o);
          break;
        }
        if (a === r) {
          (s = !0), (r = i), (n = o);
          break;
        }
        a = a.sibling;
      }
      if (!s) {
        for (a = o.child; a; ) {
          if (a === n) {
            (s = !0), (n = o), (r = i);
            break;
          }
          if (a === r) {
            (s = !0), (r = o), (n = i);
            break;
          }
          a = a.sibling;
        }
        if (!s) throw Error(j(189));
      }
    }
    if (n.alternate !== r) throw Error(j(190));
  }
  if (n.tag !== 3) throw Error(j(188));
  return n.stateNode.current === n ? e : t;
}
function oy(e) {
  return (e = q1(e)), e !== null ? sy(e) : null;
}
function sy(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = sy(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var ay = dt.unstable_scheduleCallback,
  Sh = dt.unstable_cancelCallback,
  Z1 = dt.unstable_shouldYield,
  J1 = dt.unstable_requestPaint,
  xe = dt.unstable_now,
  eS = dt.unstable_getCurrentPriorityLevel,
  Nd = dt.unstable_ImmediatePriority,
  ly = dt.unstable_UserBlockingPriority,
  wa = dt.unstable_NormalPriority,
  tS = dt.unstable_LowPriority,
  uy = dt.unstable_IdlePriority,
  il = null,
  Jt = null;
function nS(e) {
  if (Jt && typeof Jt.onCommitFiberRoot == "function")
    try {
      Jt.onCommitFiberRoot(il, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Ft = Math.clz32 ? Math.clz32 : oS,
  rS = Math.log,
  iS = Math.LN2;
function oS(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((rS(e) / iS) | 0)) | 0;
}
var ks = 64,
  Ns = 4194304;
function go(e) {
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
function Sa(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var a = s & ~i;
    a !== 0 ? (r = go(a)) : ((o &= s), o !== 0 && (r = go(o)));
  } else (s = n & ~i), s !== 0 ? (r = go(s)) : o !== 0 && (r = go(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Ft(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function sS(e, t) {
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
function aS(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var s = 31 - Ft(o),
      a = 1 << s,
      l = i[s];
    l === -1
      ? (!(a & n) || a & r) && (i[s] = sS(a, t))
      : l <= t && (e.expiredLanes |= a),
      (o &= ~a);
  }
}
function ec(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function cy() {
  var e = ks;
  return (ks <<= 1), !(ks & 4194240) && (ks = 64), e;
}
function Gl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ls(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Ft(t)),
    (e[t] = n);
}
function lS(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - Ft(n),
      o = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
  }
}
function Ad(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Ft(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var ne = 0;
function dy(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var fy,
  Rd,
  hy,
  py,
  my,
  tc = !1,
  As = [],
  Gn = null,
  Qn = null,
  Yn = null,
  Io = new Map(),
  Fo = new Map(),
  In = [],
  uS =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function bh(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Gn = null;
      break;
    case "dragenter":
    case "dragleave":
      Qn = null;
      break;
    case "mouseover":
    case "mouseout":
      Yn = null;
      break;
    case "pointerover":
    case "pointerout":
      Io.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Fo.delete(t.pointerId);
  }
}
function io(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i],
      }),
      t !== null && ((t = cs(t)), t !== null && Rd(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function cS(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (Gn = io(Gn, e, t, n, r, i)), !0;
    case "dragenter":
      return (Qn = io(Qn, e, t, n, r, i)), !0;
    case "mouseover":
      return (Yn = io(Yn, e, t, n, r, i)), !0;
    case "pointerover":
      var o = i.pointerId;
      return Io.set(o, io(Io.get(o) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (o = i.pointerId), Fo.set(o, io(Fo.get(o) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function gy(e) {
  var t = br(e.target);
  if (t !== null) {
    var n = Wr(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = iy(n)), t !== null)) {
          (e.blockedOn = t),
            my(e.priority, function () {
              hy(n);
            });
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
function qs(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = nc(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Xu = r), n.target.dispatchEvent(r), (Xu = null);
    } else return (t = cs(n)), t !== null && Rd(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Eh(e, t, n) {
  qs(e) && n.delete(t);
}
function dS() {
  (tc = !1),
    Gn !== null && qs(Gn) && (Gn = null),
    Qn !== null && qs(Qn) && (Qn = null),
    Yn !== null && qs(Yn) && (Yn = null),
    Io.forEach(Eh),
    Fo.forEach(Eh);
}
function oo(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    tc ||
      ((tc = !0),
      dt.unstable_scheduleCallback(dt.unstable_NormalPriority, dS)));
}
function Vo(e) {
  function t(i) {
    return oo(i, e);
  }
  if (0 < As.length) {
    oo(As[0], e);
    for (var n = 1; n < As.length; n++) {
      var r = As[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Gn !== null && oo(Gn, e),
      Qn !== null && oo(Qn, e),
      Yn !== null && oo(Yn, e),
      Io.forEach(t),
      Fo.forEach(t),
      n = 0;
    n < In.length;
    n++
  )
    (r = In[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < In.length && ((n = In[0]), n.blockedOn === null); )
    gy(n), n.blockedOn === null && In.shift();
}
var vi = Sn.ReactCurrentBatchConfig,
  ba = !0;
function fS(e, t, n, r) {
  var i = ne,
    o = vi.transition;
  vi.transition = null;
  try {
    (ne = 1), jd(e, t, n, r);
  } finally {
    (ne = i), (vi.transition = o);
  }
}
function hS(e, t, n, r) {
  var i = ne,
    o = vi.transition;
  vi.transition = null;
  try {
    (ne = 4), jd(e, t, n, r);
  } finally {
    (ne = i), (vi.transition = o);
  }
}
function jd(e, t, n, r) {
  if (ba) {
    var i = nc(e, t, n, r);
    if (i === null) ru(e, t, r, Ea, n), bh(e, r);
    else if (cS(i, e, t, n, r)) r.stopPropagation();
    else if ((bh(e, r), t & 4 && -1 < uS.indexOf(e))) {
      for (; i !== null; ) {
        var o = cs(i);
        if (
          (o !== null && fy(o),
          (o = nc(e, t, n, r)),
          o === null && ru(e, t, r, Ea, n),
          o === i)
        )
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else ru(e, t, r, null, n);
  }
}
var Ea = null;
function nc(e, t, n, r) {
  if (((Ea = null), (e = kd(r)), (e = br(e)), e !== null))
    if (((t = Wr(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = iy(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Ea = e), null;
}
function yy(e) {
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
      switch (eS()) {
        case Nd:
          return 1;
        case ly:
          return 4;
        case wa:
        case tS:
          return 16;
        case uy:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Un = null,
  Md = null,
  Zs = null;
function vy() {
  if (Zs) return Zs;
  var e,
    t = Md,
    n = t.length,
    r,
    i = "value" in Un ? Un.value : Un.textContent,
    o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === i[o - r]; r++);
  return (Zs = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Js(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Rs() {
  return !0;
}
function Ch() {
  return !1;
}
function ht(e) {
  function t(n, r, i, o, s) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = s),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(o) : o[a]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? Rs
        : Ch),
      (this.isPropagationStopped = Ch),
      this
    );
  }
  return (
    me(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Rs));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Rs));
      },
      persist: function () {},
      isPersistent: Rs,
    }),
    t
  );
}
var Ki = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Dd = ht(Ki),
  us = me({}, Ki, { view: 0, detail: 0 }),
  pS = ht(us),
  Ql,
  Yl,
  so,
  ol = me({}, us, {
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
    getModifierState: Ld,
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
        : (e !== so &&
            (so && e.type === "mousemove"
              ? ((Ql = e.screenX - so.screenX), (Yl = e.screenY - so.screenY))
              : (Yl = Ql = 0),
            (so = e)),
          Ql);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Yl;
    },
  }),
  Th = ht(ol),
  mS = me({}, ol, { dataTransfer: 0 }),
  gS = ht(mS),
  yS = me({}, us, { relatedTarget: 0 }),
  Xl = ht(yS),
  vS = me({}, Ki, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  xS = ht(vS),
  wS = me({}, Ki, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  SS = ht(wS),
  bS = me({}, Ki, { data: 0 }),
  Ph = ht(bS),
  ES = {
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
  CS = {
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
  TS = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function PS(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = TS[e]) ? !!t[e] : !1;
}
function Ld() {
  return PS;
}
var kS = me({}, us, {
    key: function (e) {
      if (e.key) {
        var t = ES[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Js(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? CS[e.keyCode] || "Unidentified"
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
    getModifierState: Ld,
    charCode: function (e) {
      return e.type === "keypress" ? Js(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Js(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  NS = ht(kS),
  AS = me({}, ol, {
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
  kh = ht(AS),
  RS = me({}, us, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ld,
  }),
  jS = ht(RS),
  MS = me({}, Ki, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  DS = ht(MS),
  LS = me({}, ol, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
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
  OS = ht(LS),
  IS = [9, 13, 27, 32],
  Od = mn && "CompositionEvent" in window,
  So = null;
mn && "documentMode" in document && (So = document.documentMode);
var FS = mn && "TextEvent" in window && !So,
  xy = mn && (!Od || (So && 8 < So && 11 >= So)),
  Nh = " ",
  Ah = !1;
function wy(e, t) {
  switch (e) {
    case "keyup":
      return IS.indexOf(t.keyCode) !== -1;
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
function Sy(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var ni = !1;
function VS(e, t) {
  switch (e) {
    case "compositionend":
      return Sy(t);
    case "keypress":
      return t.which !== 32 ? null : ((Ah = !0), Nh);
    case "textInput":
      return (e = t.data), e === Nh && Ah ? null : e;
    default:
      return null;
  }
}
function _S(e, t) {
  if (ni)
    return e === "compositionend" || (!Od && wy(e, t))
      ? ((e = vy()), (Zs = Md = Un = null), (ni = !1), e)
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
      return xy && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var zS = {
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
function Rh(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!zS[e.type] : t === "textarea";
}
function by(e, t, n, r) {
  Jg(r),
    (t = Ca(t, "onChange")),
    0 < t.length &&
      ((n = new Dd("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var bo = null,
  _o = null;
function BS(e) {
  Dy(e, 0);
}
function sl(e) {
  var t = oi(e);
  if (Kg(t)) return e;
}
function $S(e, t) {
  if (e === "change") return t;
}
var Ey = !1;
if (mn) {
  var ql;
  if (mn) {
    var Zl = "oninput" in document;
    if (!Zl) {
      var jh = document.createElement("div");
      jh.setAttribute("oninput", "return;"),
        (Zl = typeof jh.oninput == "function");
    }
    ql = Zl;
  } else ql = !1;
  Ey = ql && (!document.documentMode || 9 < document.documentMode);
}
function Mh() {
  bo && (bo.detachEvent("onpropertychange", Cy), (_o = bo = null));
}
function Cy(e) {
  if (e.propertyName === "value" && sl(_o)) {
    var t = [];
    by(t, _o, e, kd(e)), ry(BS, t);
  }
}
function US(e, t, n) {
  e === "focusin"
    ? (Mh(), (bo = t), (_o = n), bo.attachEvent("onpropertychange", Cy))
    : e === "focusout" && Mh();
}
function WS(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return sl(_o);
}
function HS(e, t) {
  if (e === "click") return sl(t);
}
function KS(e, t) {
  if (e === "input" || e === "change") return sl(t);
}
function GS(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var zt = typeof Object.is == "function" ? Object.is : GS;
function zo(e, t) {
  if (zt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Vu.call(t, i) || !zt(e[i], t[i])) return !1;
  }
  return !0;
}
function Dh(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Lh(e, t) {
  var n = Dh(e);
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
    n = Dh(n);
  }
}
function Ty(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Ty(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Py() {
  for (var e = window, t = ya(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = ya(e.document);
  }
  return t;
}
function Id(e) {
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
function QS(e) {
  var t = Py(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Ty(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Id(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          o = Math.min(r.start, i);
        (r = r.end === void 0 ? o : Math.min(r.end, i)),
          !e.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = Lh(n, o));
        var s = Lh(n, r);
        i &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var YS = mn && "documentMode" in document && 11 >= document.documentMode,
  ri = null,
  rc = null,
  Eo = null,
  ic = !1;
function Oh(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ic ||
    ri == null ||
    ri !== ya(r) ||
    ((r = ri),
    "selectionStart" in r && Id(r)
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
    (Eo && zo(Eo, r)) ||
      ((Eo = r),
      (r = Ca(rc, "onSelect")),
      0 < r.length &&
        ((t = new Dd("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = ri))));
}
function js(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var ii = {
    animationend: js("Animation", "AnimationEnd"),
    animationiteration: js("Animation", "AnimationIteration"),
    animationstart: js("Animation", "AnimationStart"),
    transitionend: js("Transition", "TransitionEnd"),
  },
  Jl = {},
  ky = {};
mn &&
  ((ky = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete ii.animationend.animation,
    delete ii.animationiteration.animation,
    delete ii.animationstart.animation),
  "TransitionEvent" in window || delete ii.transitionend.transition);
function al(e) {
  if (Jl[e]) return Jl[e];
  if (!ii[e]) return e;
  var t = ii[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in ky) return (Jl[e] = t[n]);
  return e;
}
var Ny = al("animationend"),
  Ay = al("animationiteration"),
  Ry = al("animationstart"),
  jy = al("transitionend"),
  My = new Map(),
  Ih =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function dr(e, t) {
  My.set(e, t), Ur(t, [e]);
}
for (var eu = 0; eu < Ih.length; eu++) {
  var tu = Ih[eu],
    XS = tu.toLowerCase(),
    qS = tu[0].toUpperCase() + tu.slice(1);
  dr(XS, "on" + qS);
}
dr(Ny, "onAnimationEnd");
dr(Ay, "onAnimationIteration");
dr(Ry, "onAnimationStart");
dr("dblclick", "onDoubleClick");
dr("focusin", "onFocus");
dr("focusout", "onBlur");
dr(jy, "onTransitionEnd");
Mi("onMouseEnter", ["mouseout", "mouseover"]);
Mi("onMouseLeave", ["mouseout", "mouseover"]);
Mi("onPointerEnter", ["pointerout", "pointerover"]);
Mi("onPointerLeave", ["pointerout", "pointerover"]);
Ur(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Ur(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Ur("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Ur(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Ur(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Ur(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var yo =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  ZS = new Set("cancel close invalid load scroll toggle".split(" ").concat(yo));
function Fh(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), X1(r, t, void 0, e), (e.currentTarget = null);
}
function Dy(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var a = r[s],
            l = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), l !== o && i.isPropagationStopped())) break e;
          Fh(i, a, u), (o = l);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((a = r[s]),
            (l = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            l !== o && i.isPropagationStopped())
          )
            break e;
          Fh(i, a, u), (o = l);
        }
    }
  }
  if (xa) throw ((e = Ju), (xa = !1), (Ju = null), e);
}
function ae(e, t) {
  var n = t[uc];
  n === void 0 && (n = t[uc] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Ly(t, e, 2, !1), n.add(r));
}
function nu(e, t, n) {
  var r = 0;
  t && (r |= 4), Ly(n, e, r, t);
}
var Ms = "_reactListening" + Math.random().toString(36).slice(2);
function Bo(e) {
  if (!e[Ms]) {
    (e[Ms] = !0),
      Bg.forEach(function (n) {
        n !== "selectionchange" && (ZS.has(n) || nu(n, !1, e), nu(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Ms] || ((t[Ms] = !0), nu("selectionchange", !1, t));
  }
}
function Ly(e, t, n, r) {
  switch (yy(t)) {
    case 1:
      var i = fS;
      break;
    case 4:
      i = hS;
      break;
    default:
      i = jd;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !Zu ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function ru(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var a = r.stateNode.containerInfo;
        if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var l = s.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = s.stateNode.containerInfo),
              l === i || (l.nodeType === 8 && l.parentNode === i))
            )
              return;
            s = s.return;
          }
        for (; a !== null; ) {
          if (((s = br(a)), s === null)) return;
          if (((l = s.tag), l === 5 || l === 6)) {
            r = o = s;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  ry(function () {
    var u = o,
      c = kd(n),
      d = [];
    e: {
      var f = My.get(e);
      if (f !== void 0) {
        var h = Dd,
          x = e;
        switch (e) {
          case "keypress":
            if (Js(n) === 0) break e;
          case "keydown":
          case "keyup":
            h = NS;
            break;
          case "focusin":
            (x = "focus"), (h = Xl);
            break;
          case "focusout":
            (x = "blur"), (h = Xl);
            break;
          case "beforeblur":
          case "afterblur":
            h = Xl;
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
            h = Th;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            h = gS;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            h = jS;
            break;
          case Ny:
          case Ay:
          case Ry:
            h = xS;
            break;
          case jy:
            h = DS;
            break;
          case "scroll":
            h = pS;
            break;
          case "wheel":
            h = OS;
            break;
          case "copy":
          case "cut":
          case "paste":
            h = SS;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            h = kh;
        }
        var y = (t & 4) !== 0,
          w = !y && e === "scroll",
          g = y ? (f !== null ? f + "Capture" : null) : f;
        y = [];
        for (var m = u, v; m !== null; ) {
          v = m;
          var b = v.stateNode;
          if (
            (v.tag === 5 &&
              b !== null &&
              ((v = b),
              g !== null && ((b = Oo(m, g)), b != null && y.push($o(m, b, v)))),
            w)
          )
            break;
          m = m.return;
        }
        0 < y.length &&
          ((f = new h(f, x, null, n, c)), d.push({ event: f, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === "mouseover" || e === "pointerover"),
          (h = e === "mouseout" || e === "pointerout"),
          f &&
            n !== Xu &&
            (x = n.relatedTarget || n.fromElement) &&
            (br(x) || x[gn]))
        )
          break e;
        if (
          (h || f) &&
          ((f =
            c.window === c
              ? c
              : (f = c.ownerDocument)
              ? f.defaultView || f.parentWindow
              : window),
          h
            ? ((x = n.relatedTarget || n.toElement),
              (h = u),
              (x = x ? br(x) : null),
              x !== null &&
                ((w = Wr(x)), x !== w || (x.tag !== 5 && x.tag !== 6)) &&
                (x = null))
            : ((h = null), (x = u)),
          h !== x)
        ) {
          if (
            ((y = Th),
            (b = "onMouseLeave"),
            (g = "onMouseEnter"),
            (m = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((y = kh),
              (b = "onPointerLeave"),
              (g = "onPointerEnter"),
              (m = "pointer")),
            (w = h == null ? f : oi(h)),
            (v = x == null ? f : oi(x)),
            (f = new y(b, m + "leave", h, n, c)),
            (f.target = w),
            (f.relatedTarget = v),
            (b = null),
            br(c) === u &&
              ((y = new y(g, m + "enter", x, n, c)),
              (y.target = v),
              (y.relatedTarget = w),
              (b = y)),
            (w = b),
            h && x)
          )
            t: {
              for (y = h, g = x, m = 0, v = y; v; v = Zr(v)) m++;
              for (v = 0, b = g; b; b = Zr(b)) v++;
              for (; 0 < m - v; ) (y = Zr(y)), m--;
              for (; 0 < v - m; ) (g = Zr(g)), v--;
              for (; m--; ) {
                if (y === g || (g !== null && y === g.alternate)) break t;
                (y = Zr(y)), (g = Zr(g));
              }
              y = null;
            }
          else y = null;
          h !== null && Vh(d, f, h, y, !1),
            x !== null && w !== null && Vh(d, w, x, y, !0);
        }
      }
      e: {
        if (
          ((f = u ? oi(u) : window),
          (h = f.nodeName && f.nodeName.toLowerCase()),
          h === "select" || (h === "input" && f.type === "file"))
        )
          var E = $S;
        else if (Rh(f))
          if (Ey) E = KS;
          else {
            E = WS;
            var C = US;
          }
        else
          (h = f.nodeName) &&
            h.toLowerCase() === "input" &&
            (f.type === "checkbox" || f.type === "radio") &&
            (E = HS);
        if (E && (E = E(e, u))) {
          by(d, E, n, c);
          break e;
        }
        C && C(e, f, u),
          e === "focusout" &&
            (C = f._wrapperState) &&
            C.controlled &&
            f.type === "number" &&
            Hu(f, "number", f.value);
      }
      switch (((C = u ? oi(u) : window), e)) {
        case "focusin":
          (Rh(C) || C.contentEditable === "true") &&
            ((ri = C), (rc = u), (Eo = null));
          break;
        case "focusout":
          Eo = rc = ri = null;
          break;
        case "mousedown":
          ic = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (ic = !1), Oh(d, n, c);
          break;
        case "selectionchange":
          if (YS) break;
        case "keydown":
        case "keyup":
          Oh(d, n, c);
      }
      var T;
      if (Od)
        e: {
          switch (e) {
            case "compositionstart":
              var k = "onCompositionStart";
              break e;
            case "compositionend":
              k = "onCompositionEnd";
              break e;
            case "compositionupdate":
              k = "onCompositionUpdate";
              break e;
          }
          k = void 0;
        }
      else
        ni
          ? wy(e, n) && (k = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (k = "onCompositionStart");
      k &&
        (xy &&
          n.locale !== "ko" &&
          (ni || k !== "onCompositionStart"
            ? k === "onCompositionEnd" && ni && (T = vy())
            : ((Un = c),
              (Md = "value" in Un ? Un.value : Un.textContent),
              (ni = !0))),
        (C = Ca(u, k)),
        0 < C.length &&
          ((k = new Ph(k, e, null, n, c)),
          d.push({ event: k, listeners: C }),
          T ? (k.data = T) : ((T = Sy(n)), T !== null && (k.data = T)))),
        (T = FS ? VS(e, n) : _S(e, n)) &&
          ((u = Ca(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new Ph("onBeforeInput", "beforeinput", null, n, c)),
            d.push({ event: c, listeners: u }),
            (c.data = T)));
    }
    Dy(d, t);
  });
}
function $o(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Ca(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      o = i.stateNode;
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = Oo(e, n)),
      o != null && r.unshift($o(e, o, i)),
      (o = Oo(e, t)),
      o != null && r.push($o(e, o, i))),
      (e = e.return);
  }
  return r;
}
function Zr(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Vh(e, t, n, r, i) {
  for (var o = t._reactName, s = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      u = a.stateNode;
    if (l !== null && l === r) break;
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      i
        ? ((l = Oo(n, o)), l != null && s.unshift($o(n, l, a)))
        : i || ((l = Oo(n, o)), l != null && s.push($o(n, l, a)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var JS = /\r\n?/g,
  eb = /\u0000|\uFFFD/g;
function _h(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      JS,
      `
`
    )
    .replace(eb, "");
}
function Ds(e, t, n) {
  if (((t = _h(t)), _h(e) !== t && n)) throw Error(j(425));
}
function Ta() {}
var oc = null,
  sc = null;
function ac(e, t) {
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
var lc = typeof setTimeout == "function" ? setTimeout : void 0,
  tb = typeof clearTimeout == "function" ? clearTimeout : void 0,
  zh = typeof Promise == "function" ? Promise : void 0,
  nb =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof zh < "u"
      ? function (e) {
          return zh.resolve(null).then(e).catch(rb);
        }
      : lc;
function rb(e) {
  setTimeout(function () {
    throw e;
  });
}
function iu(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), Vo(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  Vo(t);
}
function Xn(e) {
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
function Bh(e) {
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
var Gi = Math.random().toString(36).slice(2),
  qt = "__reactFiber$" + Gi,
  Uo = "__reactProps$" + Gi,
  gn = "__reactContainer$" + Gi,
  uc = "__reactEvents$" + Gi,
  ib = "__reactListeners$" + Gi,
  ob = "__reactHandles$" + Gi;
function br(e) {
  var t = e[qt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[gn] || n[qt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Bh(e); e !== null; ) {
          if ((n = e[qt])) return n;
          e = Bh(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function cs(e) {
  return (
    (e = e[qt] || e[gn]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function oi(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(j(33));
}
function ll(e) {
  return e[Uo] || null;
}
var cc = [],
  si = -1;
function fr(e) {
  return { current: e };
}
function ue(e) {
  0 > si || ((e.current = cc[si]), (cc[si] = null), si--);
}
function oe(e, t) {
  si++, (cc[si] = e.current), (e.current = t);
}
var nr = {},
  Be = fr(nr),
  Je = fr(!1),
  Fr = nr;
function Di(e, t) {
  var n = e.type.contextTypes;
  if (!n) return nr;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    o;
  for (o in n) i[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function et(e) {
  return (e = e.childContextTypes), e != null;
}
function Pa() {
  ue(Je), ue(Be);
}
function $h(e, t, n) {
  if (Be.current !== nr) throw Error(j(168));
  oe(Be, t), oe(Je, n);
}
function Oy(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(j(108, U1(e) || "Unknown", i));
  return me({}, n, r);
}
function ka(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || nr),
    (Fr = Be.current),
    oe(Be, e),
    oe(Je, Je.current),
    !0
  );
}
function Uh(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(j(169));
  n
    ? ((e = Oy(e, t, Fr)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      ue(Je),
      ue(Be),
      oe(Be, e))
    : ue(Je),
    oe(Je, n);
}
var cn = null,
  ul = !1,
  ou = !1;
function Iy(e) {
  cn === null ? (cn = [e]) : cn.push(e);
}
function sb(e) {
  (ul = !0), Iy(e);
}
function hr() {
  if (!ou && cn !== null) {
    ou = !0;
    var e = 0,
      t = ne;
    try {
      var n = cn;
      for (ne = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (cn = null), (ul = !1);
    } catch (i) {
      throw (cn !== null && (cn = cn.slice(e + 1)), ay(Nd, hr), i);
    } finally {
      (ne = t), (ou = !1);
    }
  }
  return null;
}
var ai = [],
  li = 0,
  Na = null,
  Aa = 0,
  gt = [],
  yt = 0,
  Vr = null,
  fn = 1,
  hn = "";
function xr(e, t) {
  (ai[li++] = Aa), (ai[li++] = Na), (Na = e), (Aa = t);
}
function Fy(e, t, n) {
  (gt[yt++] = fn), (gt[yt++] = hn), (gt[yt++] = Vr), (Vr = e);
  var r = fn;
  e = hn;
  var i = 32 - Ft(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var o = 32 - Ft(t) + i;
  if (30 < o) {
    var s = i - (i % 5);
    (o = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (i -= s),
      (fn = (1 << (32 - Ft(t) + i)) | (n << i) | r),
      (hn = o + e);
  } else (fn = (1 << o) | (n << i) | r), (hn = e);
}
function Fd(e) {
  e.return !== null && (xr(e, 1), Fy(e, 1, 0));
}
function Vd(e) {
  for (; e === Na; )
    (Na = ai[--li]), (ai[li] = null), (Aa = ai[--li]), (ai[li] = null);
  for (; e === Vr; )
    (Vr = gt[--yt]),
      (gt[yt] = null),
      (hn = gt[--yt]),
      (gt[yt] = null),
      (fn = gt[--yt]),
      (gt[yt] = null);
}
var lt = null,
  at = null,
  de = !1,
  It = null;
function Vy(e, t) {
  var n = vt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Wh(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (lt = e), (at = Xn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (lt = e), (at = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Vr !== null ? { id: fn, overflow: hn } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = vt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (lt = e),
            (at = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function dc(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function fc(e) {
  if (de) {
    var t = at;
    if (t) {
      var n = t;
      if (!Wh(e, t)) {
        if (dc(e)) throw Error(j(418));
        t = Xn(n.nextSibling);
        var r = lt;
        t && Wh(e, t)
          ? Vy(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (de = !1), (lt = e));
      }
    } else {
      if (dc(e)) throw Error(j(418));
      (e.flags = (e.flags & -4097) | 2), (de = !1), (lt = e);
    }
  }
}
function Hh(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  lt = e;
}
function Ls(e) {
  if (e !== lt) return !1;
  if (!de) return Hh(e), (de = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !ac(e.type, e.memoizedProps))),
    t && (t = at))
  ) {
    if (dc(e)) throw (_y(), Error(j(418)));
    for (; t; ) Vy(e, t), (t = Xn(t.nextSibling));
  }
  if ((Hh(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(j(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              at = Xn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      at = null;
    }
  } else at = lt ? Xn(e.stateNode.nextSibling) : null;
  return !0;
}
function _y() {
  for (var e = at; e; ) e = Xn(e.nextSibling);
}
function Li() {
  (at = lt = null), (de = !1);
}
function _d(e) {
  It === null ? (It = [e]) : It.push(e);
}
var ab = Sn.ReactCurrentBatchConfig;
function ao(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(j(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(j(147, e));
      var i = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (s) {
            var a = i.refs;
            s === null ? delete a[o] : (a[o] = s);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(j(284));
    if (!n._owner) throw Error(j(290, e));
  }
  return e;
}
function Os(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      j(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Kh(e) {
  var t = e._init;
  return t(e._payload);
}
function zy(e) {
  function t(g, m) {
    if (e) {
      var v = g.deletions;
      v === null ? ((g.deletions = [m]), (g.flags |= 16)) : v.push(m);
    }
  }
  function n(g, m) {
    if (!e) return null;
    for (; m !== null; ) t(g, m), (m = m.sibling);
    return null;
  }
  function r(g, m) {
    for (g = new Map(); m !== null; )
      m.key !== null ? g.set(m.key, m) : g.set(m.index, m), (m = m.sibling);
    return g;
  }
  function i(g, m) {
    return (g = er(g, m)), (g.index = 0), (g.sibling = null), g;
  }
  function o(g, m, v) {
    return (
      (g.index = v),
      e
        ? ((v = g.alternate),
          v !== null
            ? ((v = v.index), v < m ? ((g.flags |= 2), m) : v)
            : ((g.flags |= 2), m))
        : ((g.flags |= 1048576), m)
    );
  }
  function s(g) {
    return e && g.alternate === null && (g.flags |= 2), g;
  }
  function a(g, m, v, b) {
    return m === null || m.tag !== 6
      ? ((m = fu(v, g.mode, b)), (m.return = g), m)
      : ((m = i(m, v)), (m.return = g), m);
  }
  function l(g, m, v, b) {
    var E = v.type;
    return E === ti
      ? c(g, m, v.props.children, b, v.key)
      : m !== null &&
        (m.elementType === E ||
          (typeof E == "object" &&
            E !== null &&
            E.$$typeof === Ln &&
            Kh(E) === m.type))
      ? ((b = i(m, v.props)), (b.ref = ao(g, m, v)), (b.return = g), b)
      : ((b = sa(v.type, v.key, v.props, null, g.mode, b)),
        (b.ref = ao(g, m, v)),
        (b.return = g),
        b);
  }
  function u(g, m, v, b) {
    return m === null ||
      m.tag !== 4 ||
      m.stateNode.containerInfo !== v.containerInfo ||
      m.stateNode.implementation !== v.implementation
      ? ((m = hu(v, g.mode, b)), (m.return = g), m)
      : ((m = i(m, v.children || [])), (m.return = g), m);
  }
  function c(g, m, v, b, E) {
    return m === null || m.tag !== 7
      ? ((m = Lr(v, g.mode, b, E)), (m.return = g), m)
      : ((m = i(m, v)), (m.return = g), m);
  }
  function d(g, m, v) {
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return (m = fu("" + m, g.mode, v)), (m.return = g), m;
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Cs:
          return (
            (v = sa(m.type, m.key, m.props, null, g.mode, v)),
            (v.ref = ao(g, null, m)),
            (v.return = g),
            v
          );
        case ei:
          return (m = hu(m, g.mode, v)), (m.return = g), m;
        case Ln:
          var b = m._init;
          return d(g, b(m._payload), v);
      }
      if (mo(m) || no(m))
        return (m = Lr(m, g.mode, v, null)), (m.return = g), m;
      Os(g, m);
    }
    return null;
  }
  function f(g, m, v, b) {
    var E = m !== null ? m.key : null;
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return E !== null ? null : a(g, m, "" + v, b);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Cs:
          return v.key === E ? l(g, m, v, b) : null;
        case ei:
          return v.key === E ? u(g, m, v, b) : null;
        case Ln:
          return (E = v._init), f(g, m, E(v._payload), b);
      }
      if (mo(v) || no(v)) return E !== null ? null : c(g, m, v, b, null);
      Os(g, v);
    }
    return null;
  }
  function h(g, m, v, b, E) {
    if ((typeof b == "string" && b !== "") || typeof b == "number")
      return (g = g.get(v) || null), a(m, g, "" + b, E);
    if (typeof b == "object" && b !== null) {
      switch (b.$$typeof) {
        case Cs:
          return (g = g.get(b.key === null ? v : b.key) || null), l(m, g, b, E);
        case ei:
          return (g = g.get(b.key === null ? v : b.key) || null), u(m, g, b, E);
        case Ln:
          var C = b._init;
          return h(g, m, v, C(b._payload), E);
      }
      if (mo(b) || no(b)) return (g = g.get(v) || null), c(m, g, b, E, null);
      Os(m, b);
    }
    return null;
  }
  function x(g, m, v, b) {
    for (
      var E = null, C = null, T = m, k = (m = 0), M = null;
      T !== null && k < v.length;
      k++
    ) {
      T.index > k ? ((M = T), (T = null)) : (M = T.sibling);
      var N = f(g, T, v[k], b);
      if (N === null) {
        T === null && (T = M);
        break;
      }
      e && T && N.alternate === null && t(g, T),
        (m = o(N, m, k)),
        C === null ? (E = N) : (C.sibling = N),
        (C = N),
        (T = M);
    }
    if (k === v.length) return n(g, T), de && xr(g, k), E;
    if (T === null) {
      for (; k < v.length; k++)
        (T = d(g, v[k], b)),
          T !== null &&
            ((m = o(T, m, k)), C === null ? (E = T) : (C.sibling = T), (C = T));
      return de && xr(g, k), E;
    }
    for (T = r(g, T); k < v.length; k++)
      (M = h(T, g, k, v[k], b)),
        M !== null &&
          (e && M.alternate !== null && T.delete(M.key === null ? k : M.key),
          (m = o(M, m, k)),
          C === null ? (E = M) : (C.sibling = M),
          (C = M));
    return (
      e &&
        T.forEach(function (F) {
          return t(g, F);
        }),
      de && xr(g, k),
      E
    );
  }
  function y(g, m, v, b) {
    var E = no(v);
    if (typeof E != "function") throw Error(j(150));
    if (((v = E.call(v)), v == null)) throw Error(j(151));
    for (
      var C = (E = null), T = m, k = (m = 0), M = null, N = v.next();
      T !== null && !N.done;
      k++, N = v.next()
    ) {
      T.index > k ? ((M = T), (T = null)) : (M = T.sibling);
      var F = f(g, T, N.value, b);
      if (F === null) {
        T === null && (T = M);
        break;
      }
      e && T && F.alternate === null && t(g, T),
        (m = o(F, m, k)),
        C === null ? (E = F) : (C.sibling = F),
        (C = F),
        (T = M);
    }
    if (N.done) return n(g, T), de && xr(g, k), E;
    if (T === null) {
      for (; !N.done; k++, N = v.next())
        (N = d(g, N.value, b)),
          N !== null &&
            ((m = o(N, m, k)), C === null ? (E = N) : (C.sibling = N), (C = N));
      return de && xr(g, k), E;
    }
    for (T = r(g, T); !N.done; k++, N = v.next())
      (N = h(T, g, k, N.value, b)),
        N !== null &&
          (e && N.alternate !== null && T.delete(N.key === null ? k : N.key),
          (m = o(N, m, k)),
          C === null ? (E = N) : (C.sibling = N),
          (C = N));
    return (
      e &&
        T.forEach(function (O) {
          return t(g, O);
        }),
      de && xr(g, k),
      E
    );
  }
  function w(g, m, v, b) {
    if (
      (typeof v == "object" &&
        v !== null &&
        v.type === ti &&
        v.key === null &&
        (v = v.props.children),
      typeof v == "object" && v !== null)
    ) {
      switch (v.$$typeof) {
        case Cs:
          e: {
            for (var E = v.key, C = m; C !== null; ) {
              if (C.key === E) {
                if (((E = v.type), E === ti)) {
                  if (C.tag === 7) {
                    n(g, C.sibling),
                      (m = i(C, v.props.children)),
                      (m.return = g),
                      (g = m);
                    break e;
                  }
                } else if (
                  C.elementType === E ||
                  (typeof E == "object" &&
                    E !== null &&
                    E.$$typeof === Ln &&
                    Kh(E) === C.type)
                ) {
                  n(g, C.sibling),
                    (m = i(C, v.props)),
                    (m.ref = ao(g, C, v)),
                    (m.return = g),
                    (g = m);
                  break e;
                }
                n(g, C);
                break;
              } else t(g, C);
              C = C.sibling;
            }
            v.type === ti
              ? ((m = Lr(v.props.children, g.mode, b, v.key)),
                (m.return = g),
                (g = m))
              : ((b = sa(v.type, v.key, v.props, null, g.mode, b)),
                (b.ref = ao(g, m, v)),
                (b.return = g),
                (g = b));
          }
          return s(g);
        case ei:
          e: {
            for (C = v.key; m !== null; ) {
              if (m.key === C)
                if (
                  m.tag === 4 &&
                  m.stateNode.containerInfo === v.containerInfo &&
                  m.stateNode.implementation === v.implementation
                ) {
                  n(g, m.sibling),
                    (m = i(m, v.children || [])),
                    (m.return = g),
                    (g = m);
                  break e;
                } else {
                  n(g, m);
                  break;
                }
              else t(g, m);
              m = m.sibling;
            }
            (m = hu(v, g.mode, b)), (m.return = g), (g = m);
          }
          return s(g);
        case Ln:
          return (C = v._init), w(g, m, C(v._payload), b);
      }
      if (mo(v)) return x(g, m, v, b);
      if (no(v)) return y(g, m, v, b);
      Os(g, v);
    }
    return (typeof v == "string" && v !== "") || typeof v == "number"
      ? ((v = "" + v),
        m !== null && m.tag === 6
          ? (n(g, m.sibling), (m = i(m, v)), (m.return = g), (g = m))
          : (n(g, m), (m = fu(v, g.mode, b)), (m.return = g), (g = m)),
        s(g))
      : n(g, m);
  }
  return w;
}
var Oi = zy(!0),
  By = zy(!1),
  Ra = fr(null),
  ja = null,
  ui = null,
  zd = null;
function Bd() {
  zd = ui = ja = null;
}
function $d(e) {
  var t = Ra.current;
  ue(Ra), (e._currentValue = t);
}
function hc(e, t, n) {
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
function xi(e, t) {
  (ja = e),
    (zd = ui = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ze = !0), (e.firstContext = null));
}
function bt(e) {
  var t = e._currentValue;
  if (zd !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), ui === null)) {
      if (ja === null) throw Error(j(308));
      (ui = e), (ja.dependencies = { lanes: 0, firstContext: e });
    } else ui = ui.next = e;
  return t;
}
var Er = null;
function Ud(e) {
  Er === null ? (Er = [e]) : Er.push(e);
}
function $y(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), Ud(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    yn(e, r)
  );
}
function yn(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var On = !1;
function Wd(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Uy(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function pn(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function qn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), Z & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      yn(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), Ud(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    yn(e, n)
  );
}
function ea(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ad(e, n);
  }
}
function Gh(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (i = o = s) : (o = o.next = s), (n = n.next);
      } while (n !== null);
      o === null ? (i = o = t) : (o = o.next = t);
    } else i = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Ma(e, t, n, r) {
  var i = e.updateQueue;
  On = !1;
  var o = i.firstBaseUpdate,
    s = i.lastBaseUpdate,
    a = i.shared.pending;
  if (a !== null) {
    i.shared.pending = null;
    var l = a,
      u = l.next;
    (l.next = null), s === null ? (o = u) : (s.next = u), (s = l);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (a = c.lastBaseUpdate),
      a !== s &&
        (a === null ? (c.firstBaseUpdate = u) : (a.next = u),
        (c.lastBaseUpdate = l)));
  }
  if (o !== null) {
    var d = i.baseState;
    (s = 0), (c = u = l = null), (a = o);
    do {
      var f = a.lane,
        h = a.eventTime;
      if ((r & f) === f) {
        c !== null &&
          (c = c.next =
            {
              eventTime: h,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var x = e,
            y = a;
          switch (((f = t), (h = n), y.tag)) {
            case 1:
              if (((x = y.payload), typeof x == "function")) {
                d = x.call(h, d, f);
                break e;
              }
              d = x;
              break e;
            case 3:
              x.flags = (x.flags & -65537) | 128;
            case 0:
              if (
                ((x = y.payload),
                (f = typeof x == "function" ? x.call(h, d, f) : x),
                f == null)
              )
                break e;
              d = me({}, d, f);
              break e;
            case 2:
              On = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (f = i.effects),
          f === null ? (i.effects = [a]) : f.push(a));
      } else
        (h = {
          eventTime: h,
          lane: f,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          c === null ? ((u = c = h), (l = d)) : (c = c.next = h),
          (s |= f);
      if (((a = a.next), a === null)) {
        if (((a = i.shared.pending), a === null)) break;
        (f = a),
          (a = f.next),
          (f.next = null),
          (i.lastBaseUpdate = f),
          (i.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (l = d),
      (i.baseState = l),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (s |= i.lane), (i = i.next);
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    (zr |= s), (e.lanes = s), (e.memoizedState = d);
  }
}
function Qh(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(j(191, i));
        i.call(r);
      }
    }
}
var ds = {},
  en = fr(ds),
  Wo = fr(ds),
  Ho = fr(ds);
function Cr(e) {
  if (e === ds) throw Error(j(174));
  return e;
}
function Hd(e, t) {
  switch ((oe(Ho, t), oe(Wo, e), oe(en, ds), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Gu(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Gu(t, e));
  }
  ue(en), oe(en, t);
}
function Ii() {
  ue(en), ue(Wo), ue(Ho);
}
function Wy(e) {
  Cr(Ho.current);
  var t = Cr(en.current),
    n = Gu(t, e.type);
  t !== n && (oe(Wo, e), oe(en, n));
}
function Kd(e) {
  Wo.current === e && (ue(en), ue(Wo));
}
var he = fr(0);
function Da(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var su = [];
function Gd() {
  for (var e = 0; e < su.length; e++)
    su[e]._workInProgressVersionPrimary = null;
  su.length = 0;
}
var ta = Sn.ReactCurrentDispatcher,
  au = Sn.ReactCurrentBatchConfig,
  _r = 0,
  pe = null,
  Ce = null,
  ke = null,
  La = !1,
  Co = !1,
  Ko = 0,
  lb = 0;
function Ie() {
  throw Error(j(321));
}
function Qd(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!zt(e[n], t[n])) return !1;
  return !0;
}
function Yd(e, t, n, r, i, o) {
  if (
    ((_r = o),
    (pe = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (ta.current = e === null || e.memoizedState === null ? fb : hb),
    (e = n(r, i)),
    Co)
  ) {
    o = 0;
    do {
      if (((Co = !1), (Ko = 0), 25 <= o)) throw Error(j(301));
      (o += 1),
        (ke = Ce = null),
        (t.updateQueue = null),
        (ta.current = pb),
        (e = n(r, i));
    } while (Co);
  }
  if (
    ((ta.current = Oa),
    (t = Ce !== null && Ce.next !== null),
    (_r = 0),
    (ke = Ce = pe = null),
    (La = !1),
    t)
  )
    throw Error(j(300));
  return e;
}
function Xd() {
  var e = Ko !== 0;
  return (Ko = 0), e;
}
function Ht() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ke === null ? (pe.memoizedState = ke = e) : (ke = ke.next = e), ke;
}
function Et() {
  if (Ce === null) {
    var e = pe.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Ce.next;
  var t = ke === null ? pe.memoizedState : ke.next;
  if (t !== null) (ke = t), (Ce = e);
  else {
    if (e === null) throw Error(j(310));
    (Ce = e),
      (e = {
        memoizedState: Ce.memoizedState,
        baseState: Ce.baseState,
        baseQueue: Ce.baseQueue,
        queue: Ce.queue,
        next: null,
      }),
      ke === null ? (pe.memoizedState = ke = e) : (ke = ke.next = e);
  }
  return ke;
}
function Go(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function lu(e) {
  var t = Et(),
    n = t.queue;
  if (n === null) throw Error(j(311));
  n.lastRenderedReducer = e;
  var r = Ce,
    i = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var s = i.next;
      (i.next = o.next), (o.next = s);
    }
    (r.baseQueue = i = o), (n.pending = null);
  }
  if (i !== null) {
    (o = i.next), (r = r.baseState);
    var a = (s = null),
      l = null,
      u = o;
    do {
      var c = u.lane;
      if ((_r & c) === c)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        l === null ? ((a = l = d), (s = r)) : (l = l.next = d),
          (pe.lanes |= c),
          (zr |= c);
      }
      u = u.next;
    } while (u !== null && u !== o);
    l === null ? (s = r) : (l.next = a),
      zt(r, t.memoizedState) || (Ze = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = l),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (o = i.lane), (pe.lanes |= o), (zr |= o), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function uu(e) {
  var t = Et(),
    n = t.queue;
  if (n === null) throw Error(j(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var s = (i = i.next);
    do (o = e(o, s.action)), (s = s.next);
    while (s !== i);
    zt(o, t.memoizedState) || (Ze = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function Hy() {}
function Ky(e, t) {
  var n = pe,
    r = Et(),
    i = t(),
    o = !zt(r.memoizedState, i);
  if (
    (o && ((r.memoizedState = i), (Ze = !0)),
    (r = r.queue),
    qd(Yy.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (ke !== null && ke.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Qo(9, Qy.bind(null, n, r, i, t), void 0, null),
      Ne === null)
    )
      throw Error(j(349));
    _r & 30 || Gy(n, t, i);
  }
  return i;
}
function Gy(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = pe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (pe.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Qy(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Xy(t) && qy(e);
}
function Yy(e, t, n) {
  return n(function () {
    Xy(t) && qy(e);
  });
}
function Xy(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !zt(e, n);
  } catch {
    return !0;
  }
}
function qy(e) {
  var t = yn(e, 1);
  t !== null && Vt(t, e, 1, -1);
}
function Yh(e) {
  var t = Ht();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Go,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = db.bind(null, pe, e)),
    [t.memoizedState, e]
  );
}
function Qo(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = pe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (pe.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Zy() {
  return Et().memoizedState;
}
function na(e, t, n, r) {
  var i = Ht();
  (pe.flags |= e),
    (i.memoizedState = Qo(1 | t, n, void 0, r === void 0 ? null : r));
}
function cl(e, t, n, r) {
  var i = Et();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (Ce !== null) {
    var s = Ce.memoizedState;
    if (((o = s.destroy), r !== null && Qd(r, s.deps))) {
      i.memoizedState = Qo(t, n, o, r);
      return;
    }
  }
  (pe.flags |= e), (i.memoizedState = Qo(1 | t, n, o, r));
}
function Xh(e, t) {
  return na(8390656, 8, e, t);
}
function qd(e, t) {
  return cl(2048, 8, e, t);
}
function Jy(e, t) {
  return cl(4, 2, e, t);
}
function ev(e, t) {
  return cl(4, 4, e, t);
}
function tv(e, t) {
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
function nv(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), cl(4, 4, tv.bind(null, t, e), n)
  );
}
function Zd() {}
function rv(e, t) {
  var n = Et();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Qd(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function iv(e, t) {
  var n = Et();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Qd(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function ov(e, t, n) {
  return _r & 21
    ? (zt(n, t) || ((n = cy()), (pe.lanes |= n), (zr |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ze = !0)), (e.memoizedState = n));
}
function ub(e, t) {
  var n = ne;
  (ne = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = au.transition;
  au.transition = {};
  try {
    e(!1), t();
  } finally {
    (ne = n), (au.transition = r);
  }
}
function sv() {
  return Et().memoizedState;
}
function cb(e, t, n) {
  var r = Jn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    av(e))
  )
    lv(t, n);
  else if (((n = $y(e, t, n, r)), n !== null)) {
    var i = Ge();
    Vt(n, e, r, i), uv(n, t, r);
  }
}
function db(e, t, n) {
  var r = Jn(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (av(e)) lv(t, i);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var s = t.lastRenderedState,
          a = o(s, n);
        if (((i.hasEagerState = !0), (i.eagerState = a), zt(a, s))) {
          var l = t.interleaved;
          l === null
            ? ((i.next = i), Ud(t))
            : ((i.next = l.next), (l.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = $y(e, t, i, r)),
      n !== null && ((i = Ge()), Vt(n, e, r, i), uv(n, t, r));
  }
}
function av(e) {
  var t = e.alternate;
  return e === pe || (t !== null && t === pe);
}
function lv(e, t) {
  Co = La = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function uv(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ad(e, n);
  }
}
var Oa = {
    readContext: bt,
    useCallback: Ie,
    useContext: Ie,
    useEffect: Ie,
    useImperativeHandle: Ie,
    useInsertionEffect: Ie,
    useLayoutEffect: Ie,
    useMemo: Ie,
    useReducer: Ie,
    useRef: Ie,
    useState: Ie,
    useDebugValue: Ie,
    useDeferredValue: Ie,
    useTransition: Ie,
    useMutableSource: Ie,
    useSyncExternalStore: Ie,
    useId: Ie,
    unstable_isNewReconciler: !1,
  },
  fb = {
    readContext: bt,
    useCallback: function (e, t) {
      return (Ht().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: bt,
    useEffect: Xh,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        na(4194308, 4, tv.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return na(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return na(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Ht();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Ht();
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
        (e = e.dispatch = cb.bind(null, pe, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Ht();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Yh,
    useDebugValue: Zd,
    useDeferredValue: function (e) {
      return (Ht().memoizedState = e);
    },
    useTransition: function () {
      var e = Yh(!1),
        t = e[0];
      return (e = ub.bind(null, e[1])), (Ht().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = pe,
        i = Ht();
      if (de) {
        if (n === void 0) throw Error(j(407));
        n = n();
      } else {
        if (((n = t()), Ne === null)) throw Error(j(349));
        _r & 30 || Gy(r, t, n);
      }
      i.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (i.queue = o),
        Xh(Yy.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        Qo(9, Qy.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Ht(),
        t = Ne.identifierPrefix;
      if (de) {
        var n = hn,
          r = fn;
        (n = (r & ~(1 << (32 - Ft(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Ko++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = lb++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  hb = {
    readContext: bt,
    useCallback: rv,
    useContext: bt,
    useEffect: qd,
    useImperativeHandle: nv,
    useInsertionEffect: Jy,
    useLayoutEffect: ev,
    useMemo: iv,
    useReducer: lu,
    useRef: Zy,
    useState: function () {
      return lu(Go);
    },
    useDebugValue: Zd,
    useDeferredValue: function (e) {
      var t = Et();
      return ov(t, Ce.memoizedState, e);
    },
    useTransition: function () {
      var e = lu(Go)[0],
        t = Et().memoizedState;
      return [e, t];
    },
    useMutableSource: Hy,
    useSyncExternalStore: Ky,
    useId: sv,
    unstable_isNewReconciler: !1,
  },
  pb = {
    readContext: bt,
    useCallback: rv,
    useContext: bt,
    useEffect: qd,
    useImperativeHandle: nv,
    useInsertionEffect: Jy,
    useLayoutEffect: ev,
    useMemo: iv,
    useReducer: uu,
    useRef: Zy,
    useState: function () {
      return uu(Go);
    },
    useDebugValue: Zd,
    useDeferredValue: function (e) {
      var t = Et();
      return Ce === null ? (t.memoizedState = e) : ov(t, Ce.memoizedState, e);
    },
    useTransition: function () {
      var e = uu(Go)[0],
        t = Et().memoizedState;
      return [e, t];
    },
    useMutableSource: Hy,
    useSyncExternalStore: Ky,
    useId: sv,
    unstable_isNewReconciler: !1,
  };
function jt(e, t) {
  if (e && e.defaultProps) {
    (t = me({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function pc(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : me({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var dl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Wr(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ge(),
      i = Jn(e),
      o = pn(r, i);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = qn(e, o, i)),
      t !== null && (Vt(t, e, i, r), ea(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ge(),
      i = Jn(e),
      o = pn(r, i);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = qn(e, o, i)),
      t !== null && (Vt(t, e, i, r), ea(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Ge(),
      r = Jn(e),
      i = pn(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = qn(e, i, r)),
      t !== null && (Vt(t, e, r, n), ea(t, e, r));
  },
};
function qh(e, t, n, r, i, o, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, s)
      : t.prototype && t.prototype.isPureReactComponent
      ? !zo(n, r) || !zo(i, o)
      : !0
  );
}
function cv(e, t, n) {
  var r = !1,
    i = nr,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = bt(o))
      : ((i = et(t) ? Fr : Be.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? Di(e, i) : nr)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = dl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Zh(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && dl.enqueueReplaceState(t, t.state, null);
}
function mc(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = {}), Wd(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (i.context = bt(o))
    : ((o = et(t) ? Fr : Be.current), (i.context = Di(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (pc(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && dl.enqueueReplaceState(i, i.state, null),
      Ma(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function Fi(e, t) {
  try {
    var n = "",
      r = t;
    do (n += $1(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function cu(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function gc(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var mb = typeof WeakMap == "function" ? WeakMap : Map;
function dv(e, t, n) {
  (n = pn(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Fa || ((Fa = !0), (Pc = r)), gc(e, t);
    }),
    n
  );
}
function fv(e, t, n) {
  (n = pn(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        gc(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        gc(e, t),
          typeof r != "function" &&
            (Zn === null ? (Zn = new Set([this])) : Zn.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function Jh(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new mb();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = Ab.bind(null, e, t, n)), t.then(e, e));
}
function ep(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function tp(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = pn(-1, 1)), (t.tag = 2), qn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var gb = Sn.ReactCurrentOwner,
  Ze = !1;
function Ue(e, t, n, r) {
  t.child = e === null ? By(t, null, n, r) : Oi(t, e.child, n, r);
}
function np(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return (
    xi(t, i),
    (r = Yd(e, t, n, r, o, i)),
    (n = Xd()),
    e !== null && !Ze
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        vn(e, t, i))
      : (de && n && Fd(t), (t.flags |= 1), Ue(e, t, r, i), t.child)
  );
}
function rp(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !af(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), hv(e, t, o, r, i))
      : ((e = sa(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & i))) {
    var s = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : zo), n(s, r) && e.ref === t.ref)
    )
      return vn(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = er(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function hv(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (zo(o, r) && e.ref === t.ref)
      if (((Ze = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
        e.flags & 131072 && (Ze = !0);
      else return (t.lanes = e.lanes), vn(e, t, i);
  }
  return yc(e, t, n, r, i);
}
function pv(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        oe(di, ot),
        (ot |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          oe(di, ot),
          (ot |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        oe(di, ot),
        (ot |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      oe(di, ot),
      (ot |= r);
  return Ue(e, t, i, n), t.child;
}
function mv(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function yc(e, t, n, r, i) {
  var o = et(n) ? Fr : Be.current;
  return (
    (o = Di(t, o)),
    xi(t, i),
    (n = Yd(e, t, n, r, o, i)),
    (r = Xd()),
    e !== null && !Ze
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        vn(e, t, i))
      : (de && r && Fd(t), (t.flags |= 1), Ue(e, t, n, i), t.child)
  );
}
function ip(e, t, n, r, i) {
  if (et(n)) {
    var o = !0;
    ka(t);
  } else o = !1;
  if ((xi(t, i), t.stateNode === null))
    ra(e, t), cv(t, n, r), mc(t, n, r, i), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      a = t.memoizedProps;
    s.props = a;
    var l = s.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = bt(u))
      : ((u = et(n) ? Fr : Be.current), (u = Di(t, u)));
    var c = n.getDerivedStateFromProps,
      d =
        typeof c == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== r || l !== u) && Zh(t, s, r, u)),
      (On = !1);
    var f = t.memoizedState;
    (s.state = f),
      Ma(t, r, s, i),
      (l = t.memoizedState),
      a !== r || f !== l || Je.current || On
        ? (typeof c == "function" && (pc(t, n, c, r), (l = t.memoizedState)),
          (a = On || qh(t, n, a, r, f, l, u))
            ? (d ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (s.props = r),
          (s.state = l),
          (s.context = u),
          (r = a))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      Uy(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : jt(t.type, a)),
      (s.props = u),
      (d = t.pendingProps),
      (f = s.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = bt(l))
        : ((l = et(n) ? Fr : Be.current), (l = Di(t, l)));
    var h = n.getDerivedStateFromProps;
    (c =
      typeof h == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== d || f !== l) && Zh(t, s, r, l)),
      (On = !1),
      (f = t.memoizedState),
      (s.state = f),
      Ma(t, r, s, i);
    var x = t.memoizedState;
    a !== d || f !== x || Je.current || On
      ? (typeof h == "function" && (pc(t, n, h, r), (x = t.memoizedState)),
        (u = On || qh(t, n, u, r, f, x, l) || !1)
          ? (c ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, x, l),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, x, l)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (a === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = x)),
        (s.props = r),
        (s.state = x),
        (s.context = l),
        (r = u))
      : (typeof s.componentDidUpdate != "function" ||
          (a === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return vc(e, t, n, r, o, i);
}
function vc(e, t, n, r, i, o) {
  mv(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return i && Uh(t, n, !1), vn(e, t, o);
  (r = t.stateNode), (gb.current = t);
  var a =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = Oi(t, e.child, null, o)), (t.child = Oi(t, null, a, o)))
      : Ue(e, t, a, o),
    (t.memoizedState = r.state),
    i && Uh(t, n, !0),
    t.child
  );
}
function gv(e) {
  var t = e.stateNode;
  t.pendingContext
    ? $h(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && $h(e, t.context, !1),
    Hd(e, t.containerInfo);
}
function op(e, t, n, r, i) {
  return Li(), _d(i), (t.flags |= 256), Ue(e, t, n, r), t.child;
}
var xc = { dehydrated: null, treeContext: null, retryLane: 0 };
function wc(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function yv(e, t, n) {
  var r = t.pendingProps,
    i = he.current,
    o = !1,
    s = (t.flags & 128) !== 0,
    a;
  if (
    ((a = s) ||
      (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    a
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    oe(he, i & 1),
    e === null)
  )
    return (
      fc(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = s))
                : (o = pl(s, r, 0, null)),
              (e = Lr(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = wc(n)),
              (t.memoizedState = xc),
              e)
            : Jd(t, s))
    );
  if (((i = e.memoizedState), i !== null && ((a = i.dehydrated), a !== null)))
    return yb(e, t, s, r, a, i, n);
  if (o) {
    (o = r.fallback), (s = t.mode), (i = e.child), (a = i.sibling);
    var l = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (t.deletions = null))
        : ((r = er(i, l)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      a !== null ? (o = er(a, o)) : ((o = Lr(o, s, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? wc(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (o.memoizedState = s),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = xc),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = er(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
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
function Jd(e, t) {
  return (
    (t = pl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Is(e, t, n, r) {
  return (
    r !== null && _d(r),
    Oi(t, e.child, null, n),
    (e = Jd(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function yb(e, t, n, r, i, o, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = cu(Error(j(422)))), Is(e, t, s, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (i = t.mode),
        (r = pl({ mode: "visible", children: r.children }, i, 0, null)),
        (o = Lr(o, i, s, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && Oi(t, e.child, null, s),
        (t.child.memoizedState = wc(s)),
        (t.memoizedState = xc),
        o);
  if (!(t.mode & 1)) return Is(e, t, s, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (o = Error(j(419))), (r = cu(o, r, void 0)), Is(e, t, s, r);
  }
  if (((a = (s & e.childLanes) !== 0), Ze || a)) {
    if (((r = Ne), r !== null)) {
      switch (s & -s) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
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
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | s) ? 0 : i),
        i !== 0 &&
          i !== o.retryLane &&
          ((o.retryLane = i), yn(e, i), Vt(r, e, i, -1));
    }
    return sf(), (r = cu(Error(j(421)))), Is(e, t, s, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Rb.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (at = Xn(i.nextSibling)),
      (lt = t),
      (de = !0),
      (It = null),
      e !== null &&
        ((gt[yt++] = fn),
        (gt[yt++] = hn),
        (gt[yt++] = Vr),
        (fn = e.id),
        (hn = e.overflow),
        (Vr = t)),
      (t = Jd(t, r.children)),
      (t.flags |= 4096),
      t);
}
function sp(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), hc(e.return, t, n);
}
function du(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = i));
}
function vv(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if ((Ue(e, t, r.children, n), (r = he.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && sp(e, n, t);
        else if (e.tag === 19) sp(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((oe(he, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && Da(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          du(t, !1, i, n, o);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && Da(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        du(t, !0, n, null, o);
        break;
      case "together":
        du(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function ra(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function vn(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (zr |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(j(153));
  if (t.child !== null) {
    for (
      e = t.child, n = er(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = er(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function vb(e, t, n) {
  switch (t.tag) {
    case 3:
      gv(t), Li();
      break;
    case 5:
      Wy(t);
      break;
    case 1:
      et(t.type) && ka(t);
      break;
    case 4:
      Hd(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      oe(Ra, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (oe(he, he.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? yv(e, t, n)
          : (oe(he, he.current & 1),
            (e = vn(e, t, n)),
            e !== null ? e.sibling : null);
      oe(he, he.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return vv(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        oe(he, he.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), pv(e, t, n);
  }
  return vn(e, t, n);
}
var xv, Sc, wv, Sv;
xv = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Sc = function () {};
wv = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), Cr(en.current);
    var o = null;
    switch (n) {
      case "input":
        (i = Uu(e, i)), (r = Uu(e, r)), (o = []);
        break;
      case "select":
        (i = me({}, i, { value: void 0 })),
          (r = me({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (i = Ku(e, i)), (r = Ku(e, r)), (o = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Ta);
    }
    Qu(n, r);
    var s;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var a = i[u];
          for (s in a) a.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Do.hasOwnProperty(u)
              ? o || (o = [])
              : (o = o || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (
        ((a = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && l !== a && (l != null || a != null))
      )
        if (u === "style")
          if (a) {
            for (s in a)
              !a.hasOwnProperty(s) ||
                (l && l.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in l)
              l.hasOwnProperty(s) &&
                a[s] !== l[s] &&
                (n || (n = {}), (n[s] = l[s]));
          } else n || (o || (o = []), o.push(u, n)), (n = l);
        else
          u === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (o = o || []).push(u, l))
            : u === "children"
            ? (typeof l != "string" && typeof l != "number") ||
              (o = o || []).push(u, "" + l)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (Do.hasOwnProperty(u)
                ? (l != null && u === "onScroll" && ae("scroll", e),
                  o || a === l || (o = []))
                : (o = o || []).push(u, l));
    }
    n && (o = o || []).push("style", n);
    var u = o;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Sv = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function lo(e, t) {
  if (!de)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Fe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function xb(e, t, n) {
  var r = t.pendingProps;
  switch ((Vd(t), t.tag)) {
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
      return Fe(t), null;
    case 1:
      return et(t.type) && Pa(), Fe(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Ii(),
        ue(Je),
        ue(Be),
        Gd(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Ls(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), It !== null && (Ac(It), (It = null)))),
        Sc(e, t),
        Fe(t),
        null
      );
    case 5:
      Kd(t);
      var i = Cr(Ho.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        wv(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(j(166));
          return Fe(t), null;
        }
        if (((e = Cr(en.current)), Ls(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[qt] = t), (r[Uo] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              ae("cancel", r), ae("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ae("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < yo.length; i++) ae(yo[i], r);
              break;
            case "source":
              ae("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ae("error", r), ae("load", r);
              break;
            case "details":
              ae("toggle", r);
              break;
            case "input":
              mh(r, o), ae("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                ae("invalid", r);
              break;
            case "textarea":
              yh(r, o), ae("invalid", r);
          }
          Qu(n, o), (i = null);
          for (var s in o)
            if (o.hasOwnProperty(s)) {
              var a = o[s];
              s === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (o.suppressHydrationWarning !== !0 &&
                      Ds(r.textContent, a, e),
                    (i = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (o.suppressHydrationWarning !== !0 &&
                      Ds(r.textContent, a, e),
                    (i = ["children", "" + a]))
                : Do.hasOwnProperty(s) &&
                  a != null &&
                  s === "onScroll" &&
                  ae("scroll", r);
            }
          switch (n) {
            case "input":
              Ts(r), gh(r, o, !0);
              break;
            case "textarea":
              Ts(r), vh(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Ta);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Yg(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = s.createElement(n, { is: r.is }))
                : ((e = s.createElement(n)),
                  n === "select" &&
                    ((s = e),
                    r.multiple
                      ? (s.multiple = !0)
                      : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[qt] = t),
            (e[Uo] = r),
            xv(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = Yu(n, r)), n)) {
              case "dialog":
                ae("cancel", e), ae("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ae("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < yo.length; i++) ae(yo[i], e);
                i = r;
                break;
              case "source":
                ae("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                ae("error", e), ae("load", e), (i = r);
                break;
              case "details":
                ae("toggle", e), (i = r);
                break;
              case "input":
                mh(e, r), (i = Uu(e, r)), ae("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = me({}, r, { value: void 0 })),
                  ae("invalid", e);
                break;
              case "textarea":
                yh(e, r), (i = Ku(e, r)), ae("invalid", e);
                break;
              default:
                i = r;
            }
            Qu(n, i), (a = i);
            for (o in a)
              if (a.hasOwnProperty(o)) {
                var l = a[o];
                o === "style"
                  ? Zg(e, l)
                  : o === "dangerouslySetInnerHTML"
                  ? ((l = l ? l.__html : void 0), l != null && Xg(e, l))
                  : o === "children"
                  ? typeof l == "string"
                    ? (n !== "textarea" || l !== "") && Lo(e, l)
                    : typeof l == "number" && Lo(e, "" + l)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (Do.hasOwnProperty(o)
                      ? l != null && o === "onScroll" && ae("scroll", e)
                      : l != null && Ed(e, o, l, s));
              }
            switch (n) {
              case "input":
                Ts(e), gh(e, r, !1);
                break;
              case "textarea":
                Ts(e), vh(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + tr(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? mi(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      mi(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = Ta);
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
      return Fe(t), null;
    case 6:
      if (e && t.stateNode != null) Sv(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(j(166));
        if (((n = Cr(Ho.current)), Cr(en.current), Ls(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[qt] = t),
            (o = r.nodeValue !== n) && ((e = lt), e !== null))
          )
            switch (e.tag) {
              case 3:
                Ds(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Ds(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[qt] = t),
            (t.stateNode = r);
      }
      return Fe(t), null;
    case 13:
      if (
        (ue(he),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (de && at !== null && t.mode & 1 && !(t.flags & 128))
          _y(), Li(), (t.flags |= 98560), (o = !1);
        else if (((o = Ls(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(j(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(j(317));
            o[qt] = t;
          } else
            Li(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Fe(t), (o = !1);
        } else It !== null && (Ac(It), (It = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || he.current & 1 ? Pe === 0 && (Pe = 3) : sf())),
          t.updateQueue !== null && (t.flags |= 4),
          Fe(t),
          null);
    case 4:
      return (
        Ii(), Sc(e, t), e === null && Bo(t.stateNode.containerInfo), Fe(t), null
      );
    case 10:
      return $d(t.type._context), Fe(t), null;
    case 17:
      return et(t.type) && Pa(), Fe(t), null;
    case 19:
      if ((ue(he), (o = t.memoizedState), o === null)) return Fe(t), null;
      if (((r = (t.flags & 128) !== 0), (s = o.rendering), s === null))
        if (r) lo(o, !1);
        else {
          if (Pe !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = Da(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    lo(o, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (s = o.alternate),
                    s === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = s.childLanes),
                        (o.lanes = s.lanes),
                        (o.child = s.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = s.memoizedProps),
                        (o.memoizedState = s.memoizedState),
                        (o.updateQueue = s.updateQueue),
                        (o.type = s.type),
                        (e = s.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return oe(he, (he.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            xe() > Vi &&
            ((t.flags |= 128), (r = !0), lo(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Da(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              lo(o, !0),
              o.tail === null && o.tailMode === "hidden" && !s.alternate && !de)
            )
              return Fe(t), null;
          } else
            2 * xe() - o.renderingStartTime > Vi &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), lo(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = o.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (o.last = s));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = xe()),
          (t.sibling = null),
          (n = he.current),
          oe(he, r ? (n & 1) | 2 : n & 1),
          t)
        : (Fe(t), null);
    case 22:
    case 23:
      return (
        of(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? ot & 1073741824 && (Fe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Fe(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(j(156, t.tag));
}
function wb(e, t) {
  switch ((Vd(t), t.tag)) {
    case 1:
      return (
        et(t.type) && Pa(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Ii(),
        ue(Je),
        ue(Be),
        Gd(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Kd(t), null;
    case 13:
      if (
        (ue(he), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(j(340));
        Li();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return ue(he), null;
    case 4:
      return Ii(), null;
    case 10:
      return $d(t.type._context), null;
    case 22:
    case 23:
      return of(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Fs = !1,
  _e = !1,
  Sb = typeof WeakSet == "function" ? WeakSet : Set,
  V = null;
function ci(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        ye(e, t, r);
      }
    else n.current = null;
}
function bc(e, t, n) {
  try {
    n();
  } catch (r) {
    ye(e, t, r);
  }
}
var ap = !1;
function bb(e, t) {
  if (((oc = ba), (e = Py()), Id(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            a = -1,
            l = -1,
            u = 0,
            c = 0,
            d = e,
            f = null;
          t: for (;;) {
            for (
              var h;
              d !== n || (i !== 0 && d.nodeType !== 3) || (a = s + i),
                d !== o || (r !== 0 && d.nodeType !== 3) || (l = s + r),
                d.nodeType === 3 && (s += d.nodeValue.length),
                (h = d.firstChild) !== null;

            )
              (f = d), (d = h);
            for (;;) {
              if (d === e) break t;
              if (
                (f === n && ++u === i && (a = s),
                f === o && ++c === r && (l = s),
                (h = d.nextSibling) !== null)
              )
                break;
              (d = f), (f = d.parentNode);
            }
            d = h;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (sc = { focusedElem: e, selectionRange: n }, ba = !1, V = t; V !== null; )
    if (((t = V), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (V = e);
    else
      for (; V !== null; ) {
        t = V;
        try {
          var x = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (x !== null) {
                  var y = x.memoizedProps,
                    w = x.memoizedState,
                    g = t.stateNode,
                    m = g.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? y : jt(t.type, y),
                      w
                    );
                  g.__reactInternalSnapshotBeforeUpdate = m;
                }
                break;
              case 3:
                var v = t.stateNode.containerInfo;
                v.nodeType === 1
                  ? (v.textContent = "")
                  : v.nodeType === 9 &&
                    v.documentElement &&
                    v.removeChild(v.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(j(163));
            }
        } catch (b) {
          ye(t, t.return, b);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (V = e);
          break;
        }
        V = t.return;
      }
  return (x = ap), (ap = !1), x;
}
function To(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        (i.destroy = void 0), o !== void 0 && bc(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function fl(e, t) {
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
function Ec(e) {
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
function bv(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), bv(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[qt], delete t[Uo], delete t[uc], delete t[ib], delete t[ob])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Ev(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function lp(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Ev(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Cc(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Ta));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Cc(e, t, n), e = e.sibling; e !== null; ) Cc(e, t, n), (e = e.sibling);
}
function Tc(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Tc(e, t, n), e = e.sibling; e !== null; ) Tc(e, t, n), (e = e.sibling);
}
var Ae = null,
  Ot = !1;
function Nn(e, t, n) {
  for (n = n.child; n !== null; ) Cv(e, t, n), (n = n.sibling);
}
function Cv(e, t, n) {
  if (Jt && typeof Jt.onCommitFiberUnmount == "function")
    try {
      Jt.onCommitFiberUnmount(il, n);
    } catch {}
  switch (n.tag) {
    case 5:
      _e || ci(n, t);
    case 6:
      var r = Ae,
        i = Ot;
      (Ae = null),
        Nn(e, t, n),
        (Ae = r),
        (Ot = i),
        Ae !== null &&
          (Ot
            ? ((e = Ae),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Ae.removeChild(n.stateNode));
      break;
    case 18:
      Ae !== null &&
        (Ot
          ? ((e = Ae),
            (n = n.stateNode),
            e.nodeType === 8
              ? iu(e.parentNode, n)
              : e.nodeType === 1 && iu(e, n),
            Vo(e))
          : iu(Ae, n.stateNode));
      break;
    case 4:
      (r = Ae),
        (i = Ot),
        (Ae = n.stateNode.containerInfo),
        (Ot = !0),
        Nn(e, t, n),
        (Ae = r),
        (Ot = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !_e &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var o = i,
            s = o.destroy;
          (o = o.tag),
            s !== void 0 && (o & 2 || o & 4) && bc(n, t, s),
            (i = i.next);
        } while (i !== r);
      }
      Nn(e, t, n);
      break;
    case 1:
      if (
        !_e &&
        (ci(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          ye(n, t, a);
        }
      Nn(e, t, n);
      break;
    case 21:
      Nn(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((_e = (r = _e) || n.memoizedState !== null), Nn(e, t, n), (_e = r))
        : Nn(e, t, n);
      break;
    default:
      Nn(e, t, n);
  }
}
function up(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Sb()),
      t.forEach(function (r) {
        var i = jb.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function kt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = e,
          s = t,
          a = s;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (Ae = a.stateNode), (Ot = !1);
              break e;
            case 3:
              (Ae = a.stateNode.containerInfo), (Ot = !0);
              break e;
            case 4:
              (Ae = a.stateNode.containerInfo), (Ot = !0);
              break e;
          }
          a = a.return;
        }
        if (Ae === null) throw Error(j(160));
        Cv(o, s, i), (Ae = null), (Ot = !1);
        var l = i.alternate;
        l !== null && (l.return = null), (i.return = null);
      } catch (u) {
        ye(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Tv(t, e), (t = t.sibling);
}
function Tv(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((kt(t, e), Wt(e), r & 4)) {
        try {
          To(3, e, e.return), fl(3, e);
        } catch (y) {
          ye(e, e.return, y);
        }
        try {
          To(5, e, e.return);
        } catch (y) {
          ye(e, e.return, y);
        }
      }
      break;
    case 1:
      kt(t, e), Wt(e), r & 512 && n !== null && ci(n, n.return);
      break;
    case 5:
      if (
        (kt(t, e),
        Wt(e),
        r & 512 && n !== null && ci(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          Lo(i, "");
        } catch (y) {
          ye(e, e.return, y);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          s = n !== null ? n.memoizedProps : o,
          a = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            a === "input" && o.type === "radio" && o.name != null && Gg(i, o),
              Yu(a, s);
            var u = Yu(a, o);
            for (s = 0; s < l.length; s += 2) {
              var c = l[s],
                d = l[s + 1];
              c === "style"
                ? Zg(i, d)
                : c === "dangerouslySetInnerHTML"
                ? Xg(i, d)
                : c === "children"
                ? Lo(i, d)
                : Ed(i, c, d, u);
            }
            switch (a) {
              case "input":
                Wu(i, o);
                break;
              case "textarea":
                Qg(i, o);
                break;
              case "select":
                var f = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var h = o.value;
                h != null
                  ? mi(i, !!o.multiple, h, !1)
                  : f !== !!o.multiple &&
                    (o.defaultValue != null
                      ? mi(i, !!o.multiple, o.defaultValue, !0)
                      : mi(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[Uo] = o;
          } catch (y) {
            ye(e, e.return, y);
          }
      }
      break;
    case 6:
      if ((kt(t, e), Wt(e), r & 4)) {
        if (e.stateNode === null) throw Error(j(162));
        (i = e.stateNode), (o = e.memoizedProps);
        try {
          i.nodeValue = o;
        } catch (y) {
          ye(e, e.return, y);
        }
      }
      break;
    case 3:
      if (
        (kt(t, e), Wt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Vo(t.containerInfo);
        } catch (y) {
          ye(e, e.return, y);
        }
      break;
    case 4:
      kt(t, e), Wt(e);
      break;
    case 13:
      kt(t, e),
        Wt(e),
        (i = e.child),
        i.flags & 8192 &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (nf = xe())),
        r & 4 && up(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((_e = (u = _e) || c), kt(t, e), (_e = u)) : kt(t, e),
        Wt(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (V = e, c = e.child; c !== null; ) {
            for (d = V = c; V !== null; ) {
              switch (((f = V), (h = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  To(4, f, f.return);
                  break;
                case 1:
                  ci(f, f.return);
                  var x = f.stateNode;
                  if (typeof x.componentWillUnmount == "function") {
                    (r = f), (n = f.return);
                    try {
                      (t = r),
                        (x.props = t.memoizedProps),
                        (x.state = t.memoizedState),
                        x.componentWillUnmount();
                    } catch (y) {
                      ye(r, n, y);
                    }
                  }
                  break;
                case 5:
                  ci(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    dp(d);
                    continue;
                  }
              }
              h !== null ? ((h.return = f), (V = h)) : dp(d);
            }
            c = c.sibling;
          }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                (i = d.stateNode),
                  u
                    ? ((o = i.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((a = d.stateNode),
                      (l = d.memoizedProps.style),
                      (s =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (a.style.display = qg("display", s)));
              } catch (y) {
                ye(e, e.return, y);
              }
            }
          } else if (d.tag === 6) {
            if (c === null)
              try {
                d.stateNode.nodeValue = u ? "" : d.memoizedProps;
              } catch (y) {
                ye(e, e.return, y);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            c === d && (c = null), (d = d.return);
          }
          c === d && (c = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      kt(t, e), Wt(e), r & 4 && up(e);
      break;
    case 21:
      break;
    default:
      kt(t, e), Wt(e);
  }
}
function Wt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Ev(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(j(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Lo(i, ""), (r.flags &= -33));
          var o = lp(e);
          Tc(e, o, i);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            a = lp(e);
          Cc(e, a, s);
          break;
        default:
          throw Error(j(161));
      }
    } catch (l) {
      ye(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Eb(e, t, n) {
  (V = e), Pv(e);
}
function Pv(e, t, n) {
  for (var r = (e.mode & 1) !== 0; V !== null; ) {
    var i = V,
      o = i.child;
    if (i.tag === 22 && r) {
      var s = i.memoizedState !== null || Fs;
      if (!s) {
        var a = i.alternate,
          l = (a !== null && a.memoizedState !== null) || _e;
        a = Fs;
        var u = _e;
        if (((Fs = s), (_e = l) && !u))
          for (V = i; V !== null; )
            (s = V),
              (l = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? fp(i)
                : l !== null
                ? ((l.return = s), (V = l))
                : fp(i);
        for (; o !== null; ) (V = o), Pv(o), (o = o.sibling);
        (V = i), (Fs = a), (_e = u);
      }
      cp(e);
    } else
      i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (V = o)) : cp(e);
  }
}
function cp(e) {
  for (; V !== null; ) {
    var t = V;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              _e || fl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !_e)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : jt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && Qh(t, o, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Qh(t, s, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
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
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var d = c.dehydrated;
                    d !== null && Vo(d);
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
              throw Error(j(163));
          }
        _e || (t.flags & 512 && Ec(t));
      } catch (f) {
        ye(t, t.return, f);
      }
    }
    if (t === e) {
      V = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (V = n);
      break;
    }
    V = t.return;
  }
}
function dp(e) {
  for (; V !== null; ) {
    var t = V;
    if (t === e) {
      V = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (V = n);
      break;
    }
    V = t.return;
  }
}
function fp(e) {
  for (; V !== null; ) {
    var t = V;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            fl(4, t);
          } catch (l) {
            ye(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              ye(t, i, l);
            }
          }
          var o = t.return;
          try {
            Ec(t);
          } catch (l) {
            ye(t, o, l);
          }
          break;
        case 5:
          var s = t.return;
          try {
            Ec(t);
          } catch (l) {
            ye(t, s, l);
          }
      }
    } catch (l) {
      ye(t, t.return, l);
    }
    if (t === e) {
      V = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (V = a);
      break;
    }
    V = t.return;
  }
}
var Cb = Math.ceil,
  Ia = Sn.ReactCurrentDispatcher,
  ef = Sn.ReactCurrentOwner,
  wt = Sn.ReactCurrentBatchConfig,
  Z = 0,
  Ne = null,
  be = null,
  Me = 0,
  ot = 0,
  di = fr(0),
  Pe = 0,
  Yo = null,
  zr = 0,
  hl = 0,
  tf = 0,
  Po = null,
  qe = null,
  nf = 0,
  Vi = 1 / 0,
  un = null,
  Fa = !1,
  Pc = null,
  Zn = null,
  Vs = !1,
  Wn = null,
  Va = 0,
  ko = 0,
  kc = null,
  ia = -1,
  oa = 0;
function Ge() {
  return Z & 6 ? xe() : ia !== -1 ? ia : (ia = xe());
}
function Jn(e) {
  return e.mode & 1
    ? Z & 2 && Me !== 0
      ? Me & -Me
      : ab.transition !== null
      ? (oa === 0 && (oa = cy()), oa)
      : ((e = ne),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : yy(e.type))),
        e)
    : 1;
}
function Vt(e, t, n, r) {
  if (50 < ko) throw ((ko = 0), (kc = null), Error(j(185)));
  ls(e, n, r),
    (!(Z & 2) || e !== Ne) &&
      (e === Ne && (!(Z & 2) && (hl |= n), Pe === 4 && Fn(e, Me)),
      tt(e, r),
      n === 1 && Z === 0 && !(t.mode & 1) && ((Vi = xe() + 500), ul && hr()));
}
function tt(e, t) {
  var n = e.callbackNode;
  aS(e, t);
  var r = Sa(e, e === Ne ? Me : 0);
  if (r === 0)
    n !== null && Sh(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Sh(n), t === 1))
      e.tag === 0 ? sb(hp.bind(null, e)) : Iy(hp.bind(null, e)),
        nb(function () {
          !(Z & 6) && hr();
        }),
        (n = null);
    else {
      switch (dy(r)) {
        case 1:
          n = Nd;
          break;
        case 4:
          n = ly;
          break;
        case 16:
          n = wa;
          break;
        case 536870912:
          n = uy;
          break;
        default:
          n = wa;
      }
      n = Lv(n, kv.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function kv(e, t) {
  if (((ia = -1), (oa = 0), Z & 6)) throw Error(j(327));
  var n = e.callbackNode;
  if (wi() && e.callbackNode !== n) return null;
  var r = Sa(e, e === Ne ? Me : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = _a(e, r);
  else {
    t = r;
    var i = Z;
    Z |= 2;
    var o = Av();
    (Ne !== e || Me !== t) && ((un = null), (Vi = xe() + 500), Dr(e, t));
    do
      try {
        kb();
        break;
      } catch (a) {
        Nv(e, a);
      }
    while (!0);
    Bd(),
      (Ia.current = o),
      (Z = i),
      be !== null ? (t = 0) : ((Ne = null), (Me = 0), (t = Pe));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = ec(e)), i !== 0 && ((r = i), (t = Nc(e, i)))), t === 1)
    )
      throw ((n = Yo), Dr(e, 0), Fn(e, r), tt(e, xe()), n);
    if (t === 6) Fn(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !Tb(i) &&
          ((t = _a(e, r)),
          t === 2 && ((o = ec(e)), o !== 0 && ((r = o), (t = Nc(e, o)))),
          t === 1))
      )
        throw ((n = Yo), Dr(e, 0), Fn(e, r), tt(e, xe()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(j(345));
        case 2:
          wr(e, qe, un);
          break;
        case 3:
          if (
            (Fn(e, r), (r & 130023424) === r && ((t = nf + 500 - xe()), 10 < t))
          ) {
            if (Sa(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              Ge(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = lc(wr.bind(null, e, qe, un), t);
            break;
          }
          wr(e, qe, un);
          break;
        case 4:
          if ((Fn(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var s = 31 - Ft(r);
            (o = 1 << s), (s = t[s]), s > i && (i = s), (r &= ~o);
          }
          if (
            ((r = i),
            (r = xe() - r),
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
                : 1960 * Cb(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = lc(wr.bind(null, e, qe, un), r);
            break;
          }
          wr(e, qe, un);
          break;
        case 5:
          wr(e, qe, un);
          break;
        default:
          throw Error(j(329));
      }
    }
  }
  return tt(e, xe()), e.callbackNode === n ? kv.bind(null, e) : null;
}
function Nc(e, t) {
  var n = Po;
  return (
    e.current.memoizedState.isDehydrated && (Dr(e, t).flags |= 256),
    (e = _a(e, t)),
    e !== 2 && ((t = qe), (qe = n), t !== null && Ac(t)),
    e
  );
}
function Ac(e) {
  qe === null ? (qe = e) : qe.push.apply(qe, e);
}
function Tb(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!zt(o(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Fn(e, t) {
  for (
    t &= ~tf,
      t &= ~hl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Ft(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function hp(e) {
  if (Z & 6) throw Error(j(327));
  wi();
  var t = Sa(e, 0);
  if (!(t & 1)) return tt(e, xe()), null;
  var n = _a(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ec(e);
    r !== 0 && ((t = r), (n = Nc(e, r)));
  }
  if (n === 1) throw ((n = Yo), Dr(e, 0), Fn(e, t), tt(e, xe()), n);
  if (n === 6) throw Error(j(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    wr(e, qe, un),
    tt(e, xe()),
    null
  );
}
function rf(e, t) {
  var n = Z;
  Z |= 1;
  try {
    return e(t);
  } finally {
    (Z = n), Z === 0 && ((Vi = xe() + 500), ul && hr());
  }
}
function Br(e) {
  Wn !== null && Wn.tag === 0 && !(Z & 6) && wi();
  var t = Z;
  Z |= 1;
  var n = wt.transition,
    r = ne;
  try {
    if (((wt.transition = null), (ne = 1), e)) return e();
  } finally {
    (ne = r), (wt.transition = n), (Z = t), !(Z & 6) && hr();
  }
}
function of() {
  (ot = di.current), ue(di);
}
function Dr(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), tb(n)), be !== null))
    for (n = be.return; n !== null; ) {
      var r = n;
      switch ((Vd(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Pa();
          break;
        case 3:
          Ii(), ue(Je), ue(Be), Gd();
          break;
        case 5:
          Kd(r);
          break;
        case 4:
          Ii();
          break;
        case 13:
          ue(he);
          break;
        case 19:
          ue(he);
          break;
        case 10:
          $d(r.type._context);
          break;
        case 22:
        case 23:
          of();
      }
      n = n.return;
    }
  if (
    ((Ne = e),
    (be = e = er(e.current, null)),
    (Me = ot = t),
    (Pe = 0),
    (Yo = null),
    (tf = hl = zr = 0),
    (qe = Po = null),
    Er !== null)
  ) {
    for (t = 0; t < Er.length; t++)
      if (((n = Er[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          o = n.pending;
        if (o !== null) {
          var s = o.next;
          (o.next = i), (r.next = s);
        }
        n.pending = r;
      }
    Er = null;
  }
  return e;
}
function Nv(e, t) {
  do {
    var n = be;
    try {
      if ((Bd(), (ta.current = Oa), La)) {
        for (var r = pe.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        La = !1;
      }
      if (
        ((_r = 0),
        (ke = Ce = pe = null),
        (Co = !1),
        (Ko = 0),
        (ef.current = null),
        n === null || n.return === null)
      ) {
        (Pe = 1), (Yo = t), (be = null);
        break;
      }
      e: {
        var o = e,
          s = n.return,
          a = n,
          l = t;
        if (
          ((t = Me),
          (a.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var u = l,
            c = a,
            d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var f = c.alternate;
            f
              ? ((c.updateQueue = f.updateQueue),
                (c.memoizedState = f.memoizedState),
                (c.lanes = f.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var h = ep(s);
          if (h !== null) {
            (h.flags &= -257),
              tp(h, s, a, o, t),
              h.mode & 1 && Jh(o, u, t),
              (t = h),
              (l = u);
            var x = t.updateQueue;
            if (x === null) {
              var y = new Set();
              y.add(l), (t.updateQueue = y);
            } else x.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              Jh(o, u, t), sf();
              break e;
            }
            l = Error(j(426));
          }
        } else if (de && a.mode & 1) {
          var w = ep(s);
          if (w !== null) {
            !(w.flags & 65536) && (w.flags |= 256),
              tp(w, s, a, o, t),
              _d(Fi(l, a));
            break e;
          }
        }
        (o = l = Fi(l, a)),
          Pe !== 4 && (Pe = 2),
          Po === null ? (Po = [o]) : Po.push(o),
          (o = s);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var g = dv(o, l, t);
              Gh(o, g);
              break e;
            case 1:
              a = l;
              var m = o.type,
                v = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof m.getDerivedStateFromError == "function" ||
                  (v !== null &&
                    typeof v.componentDidCatch == "function" &&
                    (Zn === null || !Zn.has(v))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var b = fv(o, a, t);
                Gh(o, b);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      jv(n);
    } catch (E) {
      (t = E), be === n && n !== null && (be = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Av() {
  var e = Ia.current;
  return (Ia.current = Oa), e === null ? Oa : e;
}
function sf() {
  (Pe === 0 || Pe === 3 || Pe === 2) && (Pe = 4),
    Ne === null || (!(zr & 268435455) && !(hl & 268435455)) || Fn(Ne, Me);
}
function _a(e, t) {
  var n = Z;
  Z |= 2;
  var r = Av();
  (Ne !== e || Me !== t) && ((un = null), Dr(e, t));
  do
    try {
      Pb();
      break;
    } catch (i) {
      Nv(e, i);
    }
  while (!0);
  if ((Bd(), (Z = n), (Ia.current = r), be !== null)) throw Error(j(261));
  return (Ne = null), (Me = 0), Pe;
}
function Pb() {
  for (; be !== null; ) Rv(be);
}
function kb() {
  for (; be !== null && !Z1(); ) Rv(be);
}
function Rv(e) {
  var t = Dv(e.alternate, e, ot);
  (e.memoizedProps = e.pendingProps),
    t === null ? jv(e) : (be = t),
    (ef.current = null);
}
function jv(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = wb(n, t)), n !== null)) {
        (n.flags &= 32767), (be = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Pe = 6), (be = null);
        return;
      }
    } else if (((n = xb(n, t, ot)), n !== null)) {
      be = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      be = t;
      return;
    }
    be = t = e;
  } while (t !== null);
  Pe === 0 && (Pe = 5);
}
function wr(e, t, n) {
  var r = ne,
    i = wt.transition;
  try {
    (wt.transition = null), (ne = 1), Nb(e, t, n, r);
  } finally {
    (wt.transition = i), (ne = r);
  }
  return null;
}
function Nb(e, t, n, r) {
  do wi();
  while (Wn !== null);
  if (Z & 6) throw Error(j(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(j(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (lS(e, o),
    e === Ne && ((be = Ne = null), (Me = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Vs ||
      ((Vs = !0),
      Lv(wa, function () {
        return wi(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = wt.transition), (wt.transition = null);
    var s = ne;
    ne = 1;
    var a = Z;
    (Z |= 4),
      (ef.current = null),
      bb(e, n),
      Tv(n, e),
      QS(sc),
      (ba = !!oc),
      (sc = oc = null),
      (e.current = n),
      Eb(n),
      J1(),
      (Z = a),
      (ne = s),
      (wt.transition = o);
  } else e.current = n;
  if (
    (Vs && ((Vs = !1), (Wn = e), (Va = i)),
    (o = e.pendingLanes),
    o === 0 && (Zn = null),
    nS(n.stateNode),
    tt(e, xe()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (Fa) throw ((Fa = !1), (e = Pc), (Pc = null), e);
  return (
    Va & 1 && e.tag !== 0 && wi(),
    (o = e.pendingLanes),
    o & 1 ? (e === kc ? ko++ : ((ko = 0), (kc = e))) : (ko = 0),
    hr(),
    null
  );
}
function wi() {
  if (Wn !== null) {
    var e = dy(Va),
      t = wt.transition,
      n = ne;
    try {
      if (((wt.transition = null), (ne = 16 > e ? 16 : e), Wn === null))
        var r = !1;
      else {
        if (((e = Wn), (Wn = null), (Va = 0), Z & 6)) throw Error(j(331));
        var i = Z;
        for (Z |= 4, V = e.current; V !== null; ) {
          var o = V,
            s = o.child;
          if (V.flags & 16) {
            var a = o.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (V = u; V !== null; ) {
                  var c = V;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      To(8, c, o);
                  }
                  var d = c.child;
                  if (d !== null) (d.return = c), (V = d);
                  else
                    for (; V !== null; ) {
                      c = V;
                      var f = c.sibling,
                        h = c.return;
                      if ((bv(c), c === u)) {
                        V = null;
                        break;
                      }
                      if (f !== null) {
                        (f.return = h), (V = f);
                        break;
                      }
                      V = h;
                    }
                }
              }
              var x = o.alternate;
              if (x !== null) {
                var y = x.child;
                if (y !== null) {
                  x.child = null;
                  do {
                    var w = y.sibling;
                    (y.sibling = null), (y = w);
                  } while (y !== null);
                }
              }
              V = o;
            }
          }
          if (o.subtreeFlags & 2064 && s !== null) (s.return = o), (V = s);
          else
            e: for (; V !== null; ) {
              if (((o = V), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    To(9, o, o.return);
                }
              var g = o.sibling;
              if (g !== null) {
                (g.return = o.return), (V = g);
                break e;
              }
              V = o.return;
            }
        }
        var m = e.current;
        for (V = m; V !== null; ) {
          s = V;
          var v = s.child;
          if (s.subtreeFlags & 2064 && v !== null) (v.return = s), (V = v);
          else
            e: for (s = m; V !== null; ) {
              if (((a = V), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      fl(9, a);
                  }
                } catch (E) {
                  ye(a, a.return, E);
                }
              if (a === s) {
                V = null;
                break e;
              }
              var b = a.sibling;
              if (b !== null) {
                (b.return = a.return), (V = b);
                break e;
              }
              V = a.return;
            }
        }
        if (
          ((Z = i), hr(), Jt && typeof Jt.onPostCommitFiberRoot == "function")
        )
          try {
            Jt.onPostCommitFiberRoot(il, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (ne = n), (wt.transition = t);
    }
  }
  return !1;
}
function pp(e, t, n) {
  (t = Fi(n, t)),
    (t = dv(e, t, 1)),
    (e = qn(e, t, 1)),
    (t = Ge()),
    e !== null && (ls(e, 1, t), tt(e, t));
}
function ye(e, t, n) {
  if (e.tag === 3) pp(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        pp(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Zn === null || !Zn.has(r)))
        ) {
          (e = Fi(n, e)),
            (e = fv(t, e, 1)),
            (t = qn(t, e, 1)),
            (e = Ge()),
            t !== null && (ls(t, 1, e), tt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Ab(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Ge()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Ne === e &&
      (Me & n) === n &&
      (Pe === 4 || (Pe === 3 && (Me & 130023424) === Me && 500 > xe() - nf)
        ? Dr(e, 0)
        : (tf |= n)),
    tt(e, t);
}
function Mv(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Ns), (Ns <<= 1), !(Ns & 130023424) && (Ns = 4194304))
      : (t = 1));
  var n = Ge();
  (e = yn(e, t)), e !== null && (ls(e, t, n), tt(e, n));
}
function Rb(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Mv(e, n);
}
function jb(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(j(314));
  }
  r !== null && r.delete(t), Mv(e, n);
}
var Dv;
Dv = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Je.current) Ze = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Ze = !1), vb(e, t, n);
      Ze = !!(e.flags & 131072);
    }
  else (Ze = !1), de && t.flags & 1048576 && Fy(t, Aa, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      ra(e, t), (e = t.pendingProps);
      var i = Di(t, Be.current);
      xi(t, n), (i = Yd(null, t, r, e, i, n));
      var o = Xd();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            et(r) ? ((o = !0), ka(t)) : (o = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            Wd(t),
            (i.updater = dl),
            (t.stateNode = i),
            (i._reactInternals = t),
            mc(t, r, e, n),
            (t = vc(null, t, r, !0, o, n)))
          : ((t.tag = 0), de && o && Fd(t), Ue(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (ra(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = Db(r)),
          (e = jt(r, e)),
          i)
        ) {
          case 0:
            t = yc(null, t, r, e, n);
            break e;
          case 1:
            t = ip(null, t, r, e, n);
            break e;
          case 11:
            t = np(null, t, r, e, n);
            break e;
          case 14:
            t = rp(null, t, r, jt(r.type, e), n);
            break e;
        }
        throw Error(j(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : jt(r, i)),
        yc(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : jt(r, i)),
        ip(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((gv(t), e === null)) throw Error(j(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          Uy(e, t),
          Ma(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (i = Fi(Error(j(423)), t)), (t = op(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = Fi(Error(j(424)), t)), (t = op(e, t, r, n, i));
            break e;
          } else
            for (
              at = Xn(t.stateNode.containerInfo.firstChild),
                lt = t,
                de = !0,
                It = null,
                n = By(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Li(), r === i)) {
            t = vn(e, t, n);
            break e;
          }
          Ue(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Wy(t),
        e === null && fc(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (s = i.children),
        ac(r, i) ? (s = null) : o !== null && ac(r, o) && (t.flags |= 32),
        mv(e, t),
        Ue(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && fc(t), null;
    case 13:
      return yv(e, t, n);
    case 4:
      return (
        Hd(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Oi(t, null, r, n)) : Ue(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : jt(r, i)),
        np(e, t, r, i, n)
      );
    case 7:
      return Ue(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ue(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ue(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (s = i.value),
          oe(Ra, r._currentValue),
          (r._currentValue = s),
          o !== null)
        )
          if (zt(o.value, s)) {
            if (o.children === i.children && !Je.current) {
              t = vn(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var a = o.dependencies;
              if (a !== null) {
                s = o.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (o.tag === 1) {
                      (l = pn(-1, n & -n)), (l.tag = 2);
                      var u = o.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (l.next = l)
                          : ((l.next = c.next), (c.next = l)),
                          (u.pending = l);
                      }
                    }
                    (o.lanes |= n),
                      (l = o.alternate),
                      l !== null && (l.lanes |= n),
                      hc(o.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (o.tag === 10) s = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((s = o.return), s === null)) throw Error(j(341));
                (s.lanes |= n),
                  (a = s.alternate),
                  a !== null && (a.lanes |= n),
                  hc(s, n, t),
                  (s = o.sibling);
              } else s = o.child;
              if (s !== null) s.return = o;
              else
                for (s = o; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((o = s.sibling), o !== null)) {
                    (o.return = s.return), (s = o);
                    break;
                  }
                  s = s.return;
                }
              o = s;
            }
        Ue(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        xi(t, n),
        (i = bt(i)),
        (r = r(i)),
        (t.flags |= 1),
        Ue(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = jt(r, t.pendingProps)),
        (i = jt(r.type, i)),
        rp(e, t, r, i, n)
      );
    case 15:
      return hv(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : jt(r, i)),
        ra(e, t),
        (t.tag = 1),
        et(r) ? ((e = !0), ka(t)) : (e = !1),
        xi(t, n),
        cv(t, r, i),
        mc(t, r, i, n),
        vc(null, t, r, !0, e, n)
      );
    case 19:
      return vv(e, t, n);
    case 22:
      return pv(e, t, n);
  }
  throw Error(j(156, t.tag));
};
function Lv(e, t) {
  return ay(e, t);
}
function Mb(e, t, n, r) {
  (this.tag = e),
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
    (this.alternate = null);
}
function vt(e, t, n, r) {
  return new Mb(e, t, n, r);
}
function af(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Db(e) {
  if (typeof e == "function") return af(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Td)) return 11;
    if (e === Pd) return 14;
  }
  return 2;
}
function er(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = vt(e.tag, t, e.key, e.mode)),
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
function sa(e, t, n, r, i, o) {
  var s = 2;
  if (((r = e), typeof e == "function")) af(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case ti:
        return Lr(n.children, i, o, t);
      case Cd:
        (s = 8), (i |= 8);
        break;
      case _u:
        return (
          (e = vt(12, n, t, i | 2)), (e.elementType = _u), (e.lanes = o), e
        );
      case zu:
        return (e = vt(13, n, t, i)), (e.elementType = zu), (e.lanes = o), e;
      case Bu:
        return (e = vt(19, n, t, i)), (e.elementType = Bu), (e.lanes = o), e;
      case Wg:
        return pl(n, i, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case $g:
              s = 10;
              break e;
            case Ug:
              s = 9;
              break e;
            case Td:
              s = 11;
              break e;
            case Pd:
              s = 14;
              break e;
            case Ln:
              (s = 16), (r = null);
              break e;
          }
        throw Error(j(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = vt(s, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function Lr(e, t, n, r) {
  return (e = vt(7, e, r, t)), (e.lanes = n), e;
}
function pl(e, t, n, r) {
  return (
    (e = vt(22, e, r, t)),
    (e.elementType = Wg),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function fu(e, t, n) {
  return (e = vt(6, e, null, t)), (e.lanes = n), e;
}
function hu(e, t, n) {
  return (
    (t = vt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Lb(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Gl(0)),
    (this.expirationTimes = Gl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Gl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function lf(e, t, n, r, i, o, s, a, l) {
  return (
    (e = new Lb(e, t, n, a, l)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = vt(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Wd(o),
    e
  );
}
function Ob(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: ei,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Ov(e) {
  if (!e) return nr;
  e = e._reactInternals;
  e: {
    if (Wr(e) !== e || e.tag !== 1) throw Error(j(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (et(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(j(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (et(n)) return Oy(e, n, t);
  }
  return t;
}
function Iv(e, t, n, r, i, o, s, a, l) {
  return (
    (e = lf(n, r, !0, e, i, o, s, a, l)),
    (e.context = Ov(null)),
    (n = e.current),
    (r = Ge()),
    (i = Jn(n)),
    (o = pn(r, i)),
    (o.callback = t ?? null),
    qn(n, o, i),
    (e.current.lanes = i),
    ls(e, i, r),
    tt(e, r),
    e
  );
}
function ml(e, t, n, r) {
  var i = t.current,
    o = Ge(),
    s = Jn(i);
  return (
    (n = Ov(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = pn(o, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = qn(i, t, s)),
    e !== null && (Vt(e, i, s, o), ea(e, i, s)),
    s
  );
}
function za(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function mp(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function uf(e, t) {
  mp(e, t), (e = e.alternate) && mp(e, t);
}
function Ib() {
  return null;
}
var Fv =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function cf(e) {
  this._internalRoot = e;
}
gl.prototype.render = cf.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(j(409));
  ml(e, t, null, null);
};
gl.prototype.unmount = cf.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Br(function () {
      ml(null, e, null, null);
    }),
      (t[gn] = null);
  }
};
function gl(e) {
  this._internalRoot = e;
}
gl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = py();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < In.length && t !== 0 && t < In[n].priority; n++);
    In.splice(n, 0, e), n === 0 && gy(e);
  }
};
function df(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function yl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function gp() {}
function Fb(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var u = za(s);
        o.call(u);
      };
    }
    var s = Iv(t, r, e, 0, null, !1, !1, "", gp);
    return (
      (e._reactRootContainer = s),
      (e[gn] = s.current),
      Bo(e.nodeType === 8 ? e.parentNode : e),
      Br(),
      s
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var u = za(l);
      a.call(u);
    };
  }
  var l = lf(e, 0, !1, null, null, !1, !1, "", gp);
  return (
    (e._reactRootContainer = l),
    (e[gn] = l.current),
    Bo(e.nodeType === 8 ? e.parentNode : e),
    Br(function () {
      ml(t, l, n, r);
    }),
    l
  );
}
function vl(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var s = o;
    if (typeof i == "function") {
      var a = i;
      i = function () {
        var l = za(s);
        a.call(l);
      };
    }
    ml(t, s, e, i);
  } else s = Fb(n, t, e, i, r);
  return za(s);
}
fy = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = go(t.pendingLanes);
        n !== 0 &&
          (Ad(t, n | 1), tt(t, xe()), !(Z & 6) && ((Vi = xe() + 500), hr()));
      }
      break;
    case 13:
      Br(function () {
        var r = yn(e, 1);
        if (r !== null) {
          var i = Ge();
          Vt(r, e, 1, i);
        }
      }),
        uf(e, 1);
  }
};
Rd = function (e) {
  if (e.tag === 13) {
    var t = yn(e, 134217728);
    if (t !== null) {
      var n = Ge();
      Vt(t, e, 134217728, n);
    }
    uf(e, 134217728);
  }
};
hy = function (e) {
  if (e.tag === 13) {
    var t = Jn(e),
      n = yn(e, t);
    if (n !== null) {
      var r = Ge();
      Vt(n, e, t, r);
    }
    uf(e, t);
  }
};
py = function () {
  return ne;
};
my = function (e, t) {
  var n = ne;
  try {
    return (ne = e), t();
  } finally {
    ne = n;
  }
};
qu = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Wu(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = ll(r);
            if (!i) throw Error(j(90));
            Kg(r), Wu(r, i);
          }
        }
      }
      break;
    case "textarea":
      Qg(e, n);
      break;
    case "select":
      (t = n.value), t != null && mi(e, !!n.multiple, t, !1);
  }
};
ty = rf;
ny = Br;
var Vb = { usingClientEntryPoint: !1, Events: [cs, oi, ll, Jg, ey, rf] },
  uo = {
    findFiberByHostInstance: br,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  _b = {
    bundleType: uo.bundleType,
    version: uo.version,
    rendererPackageName: uo.rendererPackageName,
    rendererConfig: uo.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Sn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = oy(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: uo.findFiberByHostInstance || Ib,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var _s = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!_s.isDisabled && _s.supportsFiber)
    try {
      (il = _s.inject(_b)), (Jt = _s);
    } catch {}
}
ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Vb;
ft.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!df(t)) throw Error(j(200));
  return Ob(e, t, null, n);
};
ft.createRoot = function (e, t) {
  if (!df(e)) throw Error(j(299));
  var n = !1,
    r = "",
    i = Fv;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = lf(e, 1, !1, null, null, n, !1, r, i)),
    (e[gn] = t.current),
    Bo(e.nodeType === 8 ? e.parentNode : e),
    new cf(t)
  );
};
ft.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(j(188))
      : ((e = Object.keys(e).join(",")), Error(j(268, e)));
  return (e = oy(t)), (e = e === null ? null : e.stateNode), e;
};
ft.flushSync = function (e) {
  return Br(e);
};
ft.hydrate = function (e, t, n) {
  if (!yl(t)) throw Error(j(200));
  return vl(null, e, t, !0, n);
};
ft.hydrateRoot = function (e, t, n) {
  if (!df(e)) throw Error(j(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = "",
    s = Fv;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = Iv(t, null, e, 1, n ?? null, i, !1, o, s)),
    (e[gn] = t.current),
    Bo(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new gl(t);
};
ft.render = function (e, t, n) {
  if (!yl(t)) throw Error(j(200));
  return vl(null, e, t, !1, n);
};
ft.unmountComponentAtNode = function (e) {
  if (!yl(e)) throw Error(j(40));
  return e._reactRootContainer
    ? (Br(function () {
        vl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[gn] = null);
        });
      }),
      !0)
    : !1;
};
ft.unstable_batchedUpdates = rf;
ft.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!yl(n)) throw Error(j(200));
  if (e == null || e._reactInternals === void 0) throw Error(j(38));
  return vl(e, t, n, !1, r);
};
ft.version = "18.3.1-next-f1338f8080-20240426";
function Vv() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Vv);
    } catch (e) {
      console.error(e);
    }
}
Vv(), (Vg.exports = ft);
var fs = Vg.exports;
const _v = Tg(fs);
var zv,
  yp = fs;
(zv = yp.createRoot), yp.hydrateRoot;
var xl = class {
    constructor() {
      (this.listeners = new Set()),
        (this.subscribe = this.subscribe.bind(this));
    }
    subscribe(e) {
      return (
        this.listeners.add(e),
        this.onSubscribe(),
        () => {
          this.listeners.delete(e), this.onUnsubscribe();
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  wl = typeof window > "u" || "Deno" in globalThis;
function Mt() {}
function zb(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Bb(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function $b(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function Rc(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ub(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function vp(e, t) {
  const {
    type: n = "all",
    exact: r,
    fetchStatus: i,
    predicate: o,
    queryKey: s,
    stale: a,
  } = e;
  if (s) {
    if (r) {
      if (t.queryHash !== ff(s, t.options)) return !1;
    } else if (!qo(t.queryKey, s)) return !1;
  }
  if (n !== "all") {
    const l = t.isActive();
    if ((n === "active" && !l) || (n === "inactive" && l)) return !1;
  }
  return !(
    (typeof a == "boolean" && t.isStale() !== a) ||
    (i && i !== t.state.fetchStatus) ||
    (o && !o(t))
  );
}
function xp(e, t) {
  const { exact: n, status: r, predicate: i, mutationKey: o } = e;
  if (o) {
    if (!t.options.mutationKey) return !1;
    if (n) {
      if (Xo(t.options.mutationKey) !== Xo(o)) return !1;
    } else if (!qo(t.options.mutationKey, o)) return !1;
  }
  return !((r && t.state.status !== r) || (i && !i(t)));
}
function ff(e, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || Xo)(e);
}
function Xo(e) {
  return JSON.stringify(e, (t, n) =>
    jc(n)
      ? Object.keys(n)
          .sort()
          .reduce((r, i) => ((r[i] = n[i]), r), {})
      : n
  );
}
function qo(e, t) {
  return e === t
    ? !0
    : typeof e != typeof t
    ? !1
    : e && t && typeof e == "object" && typeof t == "object"
    ? Object.keys(t).every((n) => qo(e[n], t[n]))
    : !1;
}
function Bv(e, t) {
  if (e === t) return e;
  const n = wp(e) && wp(t);
  if (n || (jc(e) && jc(t))) {
    const r = n ? e : Object.keys(e),
      i = r.length,
      o = n ? t : Object.keys(t),
      s = o.length,
      a = n ? [] : {},
      l = new Set(r);
    let u = 0;
    for (let c = 0; c < s; c++) {
      const d = n ? c : o[c];
      ((!n && l.has(d)) || n) && e[d] === void 0 && t[d] === void 0
        ? ((a[d] = void 0), u++)
        : ((a[d] = Bv(e[d], t[d])), a[d] === e[d] && e[d] !== void 0 && u++);
    }
    return i === s && u === i ? e : a;
  }
  return t;
}
function wp(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function jc(e) {
  if (!Sp(e)) return !1;
  const t = e.constructor;
  if (t === void 0) return !0;
  const n = t.prototype;
  return !(
    !Sp(n) ||
    !n.hasOwnProperty("isPrototypeOf") ||
    Object.getPrototypeOf(e) !== Object.prototype
  );
}
function Sp(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Wb(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function Hb(e, t, n) {
  return typeof n.structuralSharing == "function"
    ? n.structuralSharing(e, t)
    : n.structuralSharing !== !1
    ? Bv(e, t)
    : t;
}
function Kb(e, t, n = 0) {
  const r = [...e, t];
  return n && r.length > n ? r.slice(1) : r;
}
function Gb(e, t, n = 0) {
  const r = [t, ...e];
  return n && r.length > n ? r.slice(0, -1) : r;
}
var hf = Symbol();
function $v(e, t) {
  return !e.queryFn && t != null && t.initialPromise
    ? () => t.initialPromise
    : !e.queryFn || e.queryFn === hf
    ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`))
    : e.queryFn;
}
var kr,
  Vn,
  Ci,
  yg,
  Qb =
    ((yg = class extends xl {
      constructor() {
        super();
        J(this, kr);
        J(this, Vn);
        J(this, Ci);
        G(this, Ci, (t) => {
          if (!wl && window.addEventListener) {
            const n = () => t();
            return (
              window.addEventListener("visibilitychange", n, !1),
              () => {
                window.removeEventListener("visibilitychange", n);
              }
            );
          }
        });
      }
      onSubscribe() {
        R(this, Vn) || this.setEventListener(R(this, Ci));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          ((t = R(this, Vn)) == null || t.call(this), G(this, Vn, void 0));
      }
      setEventListener(t) {
        var n;
        G(this, Ci, t),
          (n = R(this, Vn)) == null || n.call(this),
          G(
            this,
            Vn,
            t((r) => {
              typeof r == "boolean" ? this.setFocused(r) : this.onFocus();
            })
          );
      }
      setFocused(t) {
        R(this, kr) !== t && (G(this, kr, t), this.onFocus());
      }
      onFocus() {
        const t = this.isFocused();
        this.listeners.forEach((n) => {
          n(t);
        });
      }
      isFocused() {
        var t;
        return typeof R(this, kr) == "boolean"
          ? R(this, kr)
          : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !==
              "hidden";
      }
    }),
    (kr = new WeakMap()),
    (Vn = new WeakMap()),
    (Ci = new WeakMap()),
    yg),
  Uv = new Qb(),
  Ti,
  _n,
  Pi,
  vg,
  Yb =
    ((vg = class extends xl {
      constructor() {
        super();
        J(this, Ti, !0);
        J(this, _n);
        J(this, Pi);
        G(this, Pi, (t) => {
          if (!wl && window.addEventListener) {
            const n = () => t(!0),
              r = () => t(!1);
            return (
              window.addEventListener("online", n, !1),
              window.addEventListener("offline", r, !1),
              () => {
                window.removeEventListener("online", n),
                  window.removeEventListener("offline", r);
              }
            );
          }
        });
      }
      onSubscribe() {
        R(this, _n) || this.setEventListener(R(this, Pi));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          ((t = R(this, _n)) == null || t.call(this), G(this, _n, void 0));
      }
      setEventListener(t) {
        var n;
        G(this, Pi, t),
          (n = R(this, _n)) == null || n.call(this),
          G(this, _n, t(this.setOnline.bind(this)));
      }
      setOnline(t) {
        R(this, Ti) !== t &&
          (G(this, Ti, t),
          this.listeners.forEach((r) => {
            r(t);
          }));
      }
      isOnline() {
        return R(this, Ti);
      }
    }),
    (Ti = new WeakMap()),
    (_n = new WeakMap()),
    (Pi = new WeakMap()),
    vg),
  Ba = new Yb();
function Xb() {
  let e, t;
  const n = new Promise((i, o) => {
    (e = i), (t = o);
  });
  (n.status = "pending"), n.catch(() => {});
  function r(i) {
    Object.assign(n, i), delete n.resolve, delete n.reject;
  }
  return (
    (n.resolve = (i) => {
      r({ status: "fulfilled", value: i }), e(i);
    }),
    (n.reject = (i) => {
      r({ status: "rejected", reason: i }), t(i);
    }),
    n
  );
}
function qb(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function Wv(e) {
  return (e ?? "online") === "online" ? Ba.isOnline() : !0;
}
var Hv = class extends Error {
  constructor(e) {
    super("CancelledError"),
      (this.revert = e == null ? void 0 : e.revert),
      (this.silent = e == null ? void 0 : e.silent);
  }
};
function pu(e) {
  return e instanceof Hv;
}
function Kv(e) {
  let t = !1,
    n = 0,
    r = !1,
    i;
  const o = Xb(),
    s = (y) => {
      var w;
      r || (f(new Hv(y)), (w = e.abort) == null || w.call(e));
    },
    a = () => {
      t = !0;
    },
    l = () => {
      t = !1;
    },
    u = () =>
      Uv.isFocused() &&
      (e.networkMode === "always" || Ba.isOnline()) &&
      e.canRun(),
    c = () => Wv(e.networkMode) && e.canRun(),
    d = (y) => {
      var w;
      r ||
        ((r = !0),
        (w = e.onSuccess) == null || w.call(e, y),
        i == null || i(),
        o.resolve(y));
    },
    f = (y) => {
      var w;
      r ||
        ((r = !0),
        (w = e.onError) == null || w.call(e, y),
        i == null || i(),
        o.reject(y));
    },
    h = () =>
      new Promise((y) => {
        var w;
        (i = (g) => {
          (r || u()) && y(g);
        }),
          (w = e.onPause) == null || w.call(e);
      }).then(() => {
        var y;
        (i = void 0), r || (y = e.onContinue) == null || y.call(e);
      }),
    x = () => {
      if (r) return;
      let y;
      const w = n === 0 ? e.initialPromise : void 0;
      try {
        y = w ?? e.fn();
      } catch (g) {
        y = Promise.reject(g);
      }
      Promise.resolve(y)
        .then(d)
        .catch((g) => {
          var C;
          if (r) return;
          const m = e.retry ?? (wl ? 0 : 3),
            v = e.retryDelay ?? qb,
            b = typeof v == "function" ? v(n, g) : v,
            E =
              m === !0 ||
              (typeof m == "number" && n < m) ||
              (typeof m == "function" && m(n, g));
          if (t || !E) {
            f(g);
            return;
          }
          n++,
            (C = e.onFail) == null || C.call(e, n, g),
            Wb(b)
              .then(() => (u() ? void 0 : h()))
              .then(() => {
                t ? f(g) : x();
              });
        });
    };
  return {
    promise: o,
    cancel: s,
    continue: () => (i == null || i(), o),
    cancelRetry: a,
    continueRetry: l,
    canStart: c,
    start: () => (c() ? x() : h().then(x), o),
  };
}
var Zb = (e) => setTimeout(e, 0);
function Jb() {
  let e = [],
    t = 0,
    n = (a) => {
      a();
    },
    r = (a) => {
      a();
    },
    i = Zb;
  const o = (a) => {
      t
        ? e.push(a)
        : i(() => {
            n(a);
          });
    },
    s = () => {
      const a = e;
      (e = []),
        a.length &&
          i(() => {
            r(() => {
              a.forEach((l) => {
                n(l);
              });
            });
          });
    };
  return {
    batch: (a) => {
      let l;
      t++;
      try {
        l = a();
      } finally {
        t--, t || s();
      }
      return l;
    },
    batchCalls:
      (a) =>
      (...l) => {
        o(() => {
          a(...l);
        });
      },
    schedule: o,
    setNotifyFunction: (a) => {
      n = a;
    },
    setBatchNotifyFunction: (a) => {
      r = a;
    },
    setScheduler: (a) => {
      i = a;
    },
  };
}
var We = Jb(),
  Nr,
  xg,
  Gv =
    ((xg = class {
      constructor() {
        J(this, Nr);
      }
      destroy() {
        this.clearGcTimeout();
      }
      scheduleGc() {
        this.clearGcTimeout(),
          Bb(this.gcTime) &&
            G(
              this,
              Nr,
              setTimeout(() => {
                this.optionalRemove();
              }, this.gcTime)
            );
      }
      updateGcTime(e) {
        this.gcTime = Math.max(
          this.gcTime || 0,
          e ?? (wl ? 1 / 0 : 5 * 60 * 1e3)
        );
      }
      clearGcTimeout() {
        R(this, Nr) && (clearTimeout(R(this, Nr)), G(this, Nr, void 0));
      }
    }),
    (Nr = new WeakMap()),
    xg),
  ki,
  Ar,
  mt,
  Rr,
  Ve,
  os,
  jr,
  Dt,
  ln,
  wg,
  eE =
    ((wg = class extends Gv {
      constructor(t) {
        super();
        J(this, Dt);
        J(this, ki);
        J(this, Ar);
        J(this, mt);
        J(this, Rr);
        J(this, Ve);
        J(this, os);
        J(this, jr);
        G(this, jr, !1),
          G(this, os, t.defaultOptions),
          this.setOptions(t.options),
          (this.observers = []),
          G(this, Rr, t.client),
          G(this, mt, R(this, Rr).getQueryCache()),
          (this.queryKey = t.queryKey),
          (this.queryHash = t.queryHash),
          G(this, ki, nE(this.options)),
          (this.state = t.state ?? R(this, ki)),
          this.scheduleGc();
      }
      get meta() {
        return this.options.meta;
      }
      get promise() {
        var t;
        return (t = R(this, Ve)) == null ? void 0 : t.promise;
      }
      setOptions(t) {
        (this.options = { ...R(this, os), ...t }),
          this.updateGcTime(this.options.gcTime);
      }
      optionalRemove() {
        !this.observers.length &&
          this.state.fetchStatus === "idle" &&
          R(this, mt).remove(this);
      }
      setData(t, n) {
        const r = Hb(this.state.data, t, this.options);
        return (
          Oe(this, Dt, ln).call(this, {
            data: r,
            type: "success",
            dataUpdatedAt: n == null ? void 0 : n.updatedAt,
            manual: n == null ? void 0 : n.manual,
          }),
          r
        );
      }
      setState(t, n) {
        Oe(this, Dt, ln).call(this, {
          type: "setState",
          state: t,
          setStateOptions: n,
        });
      }
      cancel(t) {
        var r, i;
        const n = (r = R(this, Ve)) == null ? void 0 : r.promise;
        return (
          (i = R(this, Ve)) == null || i.cancel(t),
          n ? n.then(Mt).catch(Mt) : Promise.resolve()
        );
      }
      destroy() {
        super.destroy(), this.cancel({ silent: !0 });
      }
      reset() {
        this.destroy(), this.setState(R(this, ki));
      }
      isActive() {
        return this.observers.some((t) => Ub(t.options.enabled, this) !== !1);
      }
      isDisabled() {
        return this.getObserversCount() > 0
          ? !this.isActive()
          : this.options.queryFn === hf ||
              this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
      }
      isStatic() {
        return this.getObserversCount() > 0
          ? this.observers.some(
              (t) => Rc(t.options.staleTime, this) === "static"
            )
          : !1;
      }
      isStale() {
        return this.getObserversCount() > 0
          ? this.observers.some((t) => t.getCurrentResult().isStale)
          : this.state.data === void 0 || this.state.isInvalidated;
      }
      isStaleByTime(t = 0) {
        return this.state.data === void 0
          ? !0
          : t === "static"
          ? !1
          : this.state.isInvalidated
          ? !0
          : !$b(this.state.dataUpdatedAt, t);
      }
      onFocus() {
        var n;
        const t = this.observers.find((r) => r.shouldFetchOnWindowFocus());
        t == null || t.refetch({ cancelRefetch: !1 }),
          (n = R(this, Ve)) == null || n.continue();
      }
      onOnline() {
        var n;
        const t = this.observers.find((r) => r.shouldFetchOnReconnect());
        t == null || t.refetch({ cancelRefetch: !1 }),
          (n = R(this, Ve)) == null || n.continue();
      }
      addObserver(t) {
        this.observers.includes(t) ||
          (this.observers.push(t),
          this.clearGcTimeout(),
          R(this, mt).notify({
            type: "observerAdded",
            query: this,
            observer: t,
          }));
      }
      removeObserver(t) {
        this.observers.includes(t) &&
          ((this.observers = this.observers.filter((n) => n !== t)),
          this.observers.length ||
            (R(this, Ve) &&
              (R(this, jr)
                ? R(this, Ve).cancel({ revert: !0 })
                : R(this, Ve).cancelRetry()),
            this.scheduleGc()),
          R(this, mt).notify({
            type: "observerRemoved",
            query: this,
            observer: t,
          }));
      }
      getObserversCount() {
        return this.observers.length;
      }
      invalidate() {
        this.state.isInvalidated ||
          Oe(this, Dt, ln).call(this, { type: "invalidate" });
      }
      fetch(t, n) {
        var u, c, d;
        if (this.state.fetchStatus !== "idle") {
          if (this.state.data !== void 0 && n != null && n.cancelRefetch)
            this.cancel({ silent: !0 });
          else if (R(this, Ve))
            return R(this, Ve).continueRetry(), R(this, Ve).promise;
        }
        if ((t && this.setOptions(t), !this.options.queryFn)) {
          const f = this.observers.find((h) => h.options.queryFn);
          f && this.setOptions(f.options);
        }
        const r = new AbortController(),
          i = (f) => {
            Object.defineProperty(f, "signal", {
              enumerable: !0,
              get: () => (G(this, jr, !0), r.signal),
            });
          },
          o = () => {
            const f = $v(this.options, n),
              x = (() => {
                const y = {
                  client: R(this, Rr),
                  queryKey: this.queryKey,
                  meta: this.meta,
                };
                return i(y), y;
              })();
            return (
              G(this, jr, !1),
              this.options.persister ? this.options.persister(f, x, this) : f(x)
            );
          },
          a = (() => {
            const f = {
              fetchOptions: n,
              options: this.options,
              queryKey: this.queryKey,
              client: R(this, Rr),
              state: this.state,
              fetchFn: o,
            };
            return i(f), f;
          })();
        (u = this.options.behavior) == null || u.onFetch(a, this),
          G(this, Ar, this.state),
          (this.state.fetchStatus === "idle" ||
            this.state.fetchMeta !==
              ((c = a.fetchOptions) == null ? void 0 : c.meta)) &&
            Oe(this, Dt, ln).call(this, {
              type: "fetch",
              meta: (d = a.fetchOptions) == null ? void 0 : d.meta,
            });
        const l = (f) => {
          var h, x, y, w;
          (pu(f) && f.silent) ||
            Oe(this, Dt, ln).call(this, { type: "error", error: f }),
            pu(f) ||
              ((x = (h = R(this, mt).config).onError) == null ||
                x.call(h, f, this),
              (w = (y = R(this, mt).config).onSettled) == null ||
                w.call(y, this.state.data, f, this)),
            this.scheduleGc();
        };
        return (
          G(
            this,
            Ve,
            Kv({
              initialPromise: n == null ? void 0 : n.initialPromise,
              fn: a.fetchFn,
              abort: r.abort.bind(r),
              onSuccess: (f) => {
                var h, x, y, w;
                if (f === void 0) {
                  l(new Error(`${this.queryHash} data is undefined`));
                  return;
                }
                try {
                  this.setData(f);
                } catch (g) {
                  l(g);
                  return;
                }
                (x = (h = R(this, mt).config).onSuccess) == null ||
                  x.call(h, f, this),
                  (w = (y = R(this, mt).config).onSettled) == null ||
                    w.call(y, f, this.state.error, this),
                  this.scheduleGc();
              },
              onError: l,
              onFail: (f, h) => {
                Oe(this, Dt, ln).call(this, {
                  type: "failed",
                  failureCount: f,
                  error: h,
                });
              },
              onPause: () => {
                Oe(this, Dt, ln).call(this, { type: "pause" });
              },
              onContinue: () => {
                Oe(this, Dt, ln).call(this, { type: "continue" });
              },
              retry: a.options.retry,
              retryDelay: a.options.retryDelay,
              networkMode: a.options.networkMode,
              canRun: () => !0,
            })
          ),
          R(this, Ve).start()
        );
      }
    }),
    (ki = new WeakMap()),
    (Ar = new WeakMap()),
    (mt = new WeakMap()),
    (Rr = new WeakMap()),
    (Ve = new WeakMap()),
    (os = new WeakMap()),
    (jr = new WeakMap()),
    (Dt = new WeakSet()),
    (ln = function (t) {
      const n = (r) => {
        switch (t.type) {
          case "failed":
            return {
              ...r,
              fetchFailureCount: t.failureCount,
              fetchFailureReason: t.error,
            };
          case "pause":
            return { ...r, fetchStatus: "paused" };
          case "continue":
            return { ...r, fetchStatus: "fetching" };
          case "fetch":
            return {
              ...r,
              ...tE(r.data, this.options),
              fetchMeta: t.meta ?? null,
            };
          case "success":
            return (
              G(this, Ar, void 0),
              {
                ...r,
                data: t.data,
                dataUpdateCount: r.dataUpdateCount + 1,
                dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
                error: null,
                isInvalidated: !1,
                status: "success",
                ...(!t.manual && {
                  fetchStatus: "idle",
                  fetchFailureCount: 0,
                  fetchFailureReason: null,
                }),
              }
            );
          case "error":
            const i = t.error;
            return pu(i) && i.revert && R(this, Ar)
              ? { ...R(this, Ar), fetchStatus: "idle" }
              : {
                  ...r,
                  error: i,
                  errorUpdateCount: r.errorUpdateCount + 1,
                  errorUpdatedAt: Date.now(),
                  fetchFailureCount: r.fetchFailureCount + 1,
                  fetchFailureReason: i,
                  fetchStatus: "idle",
                  status: "error",
                };
          case "invalidate":
            return { ...r, isInvalidated: !0 };
          case "setState":
            return { ...r, ...t.state };
        }
      };
      (this.state = n(this.state)),
        We.batch(() => {
          this.observers.forEach((r) => {
            r.onQueryUpdate();
          }),
            R(this, mt).notify({ query: this, type: "updated", action: t });
        });
    }),
    wg);
function tE(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: Wv(t.networkMode) ? "fetching" : "paused",
    ...(e === void 0 && { error: null, status: "pending" }),
  };
}
function nE(e) {
  const t =
      typeof e.initialData == "function" ? e.initialData() : e.initialData,
    n = t !== void 0,
    r = n
      ? typeof e.initialDataUpdatedAt == "function"
        ? e.initialDataUpdatedAt()
        : e.initialDataUpdatedAt
      : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: n ? r ?? Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: n ? "success" : "pending",
    fetchStatus: "idle",
  };
}
var Gt,
  Sg,
  rE =
    ((Sg = class extends xl {
      constructor(t = {}) {
        super();
        J(this, Gt);
        (this.config = t), G(this, Gt, new Map());
      }
      build(t, n, r) {
        const i = n.queryKey,
          o = n.queryHash ?? ff(i, n);
        let s = this.get(o);
        return (
          s ||
            ((s = new eE({
              client: t,
              queryKey: i,
              queryHash: o,
              options: t.defaultQueryOptions(n),
              state: r,
              defaultOptions: t.getQueryDefaults(i),
            })),
            this.add(s)),
          s
        );
      }
      add(t) {
        R(this, Gt).has(t.queryHash) ||
          (R(this, Gt).set(t.queryHash, t),
          this.notify({ type: "added", query: t }));
      }
      remove(t) {
        const n = R(this, Gt).get(t.queryHash);
        n &&
          (t.destroy(),
          n === t && R(this, Gt).delete(t.queryHash),
          this.notify({ type: "removed", query: t }));
      }
      clear() {
        We.batch(() => {
          this.getAll().forEach((t) => {
            this.remove(t);
          });
        });
      }
      get(t) {
        return R(this, Gt).get(t);
      }
      getAll() {
        return [...R(this, Gt).values()];
      }
      find(t) {
        const n = { exact: !0, ...t };
        return this.getAll().find((r) => vp(n, r));
      }
      findAll(t = {}) {
        const n = this.getAll();
        return Object.keys(t).length > 0 ? n.filter((r) => vp(t, r)) : n;
      }
      notify(t) {
        We.batch(() => {
          this.listeners.forEach((n) => {
            n(t);
          });
        });
      }
      onFocus() {
        We.batch(() => {
          this.getAll().forEach((t) => {
            t.onFocus();
          });
        });
      }
      onOnline() {
        We.batch(() => {
          this.getAll().forEach((t) => {
            t.onOnline();
          });
        });
      }
    }),
    (Gt = new WeakMap()),
    Sg),
  Qt,
  $e,
  Mr,
  Yt,
  jn,
  bg,
  iE =
    ((bg = class extends Gv {
      constructor(t) {
        super();
        J(this, Yt);
        J(this, Qt);
        J(this, $e);
        J(this, Mr);
        (this.mutationId = t.mutationId),
          G(this, $e, t.mutationCache),
          G(this, Qt, []),
          (this.state = t.state || oE()),
          this.setOptions(t.options),
          this.scheduleGc();
      }
      setOptions(t) {
        (this.options = t), this.updateGcTime(this.options.gcTime);
      }
      get meta() {
        return this.options.meta;
      }
      addObserver(t) {
        R(this, Qt).includes(t) ||
          (R(this, Qt).push(t),
          this.clearGcTimeout(),
          R(this, $e).notify({
            type: "observerAdded",
            mutation: this,
            observer: t,
          }));
      }
      removeObserver(t) {
        G(
          this,
          Qt,
          R(this, Qt).filter((n) => n !== t)
        ),
          this.scheduleGc(),
          R(this, $e).notify({
            type: "observerRemoved",
            mutation: this,
            observer: t,
          });
      }
      optionalRemove() {
        R(this, Qt).length ||
          (this.state.status === "pending"
            ? this.scheduleGc()
            : R(this, $e).remove(this));
      }
      continue() {
        var t;
        return (
          ((t = R(this, Mr)) == null ? void 0 : t.continue()) ??
          this.execute(this.state.variables)
        );
      }
      async execute(t) {
        var o, s, a, l, u, c, d, f, h, x, y, w, g, m, v, b, E, C, T, k;
        const n = () => {
          Oe(this, Yt, jn).call(this, { type: "continue" });
        };
        G(
          this,
          Mr,
          Kv({
            fn: () =>
              this.options.mutationFn
                ? this.options.mutationFn(t)
                : Promise.reject(new Error("No mutationFn found")),
            onFail: (M, N) => {
              Oe(this, Yt, jn).call(this, {
                type: "failed",
                failureCount: M,
                error: N,
              });
            },
            onPause: () => {
              Oe(this, Yt, jn).call(this, { type: "pause" });
            },
            onContinue: n,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => R(this, $e).canRun(this),
          })
        );
        const r = this.state.status === "pending",
          i = !R(this, Mr).canStart();
        try {
          if (r) n();
          else {
            Oe(this, Yt, jn).call(this, {
              type: "pending",
              variables: t,
              isPaused: i,
            }),
              await ((s = (o = R(this, $e).config).onMutate) == null
                ? void 0
                : s.call(o, t, this));
            const N = await ((l = (a = this.options).onMutate) == null
              ? void 0
              : l.call(a, t));
            N !== this.state.context &&
              Oe(this, Yt, jn).call(this, {
                type: "pending",
                context: N,
                variables: t,
                isPaused: i,
              });
          }
          const M = await R(this, Mr).start();
          return (
            await ((c = (u = R(this, $e).config).onSuccess) == null
              ? void 0
              : c.call(u, M, t, this.state.context, this)),
            await ((f = (d = this.options).onSuccess) == null
              ? void 0
              : f.call(d, M, t, this.state.context)),
            await ((x = (h = R(this, $e).config).onSettled) == null
              ? void 0
              : x.call(
                  h,
                  M,
                  null,
                  this.state.variables,
                  this.state.context,
                  this
                )),
            await ((w = (y = this.options).onSettled) == null
              ? void 0
              : w.call(y, M, null, t, this.state.context)),
            Oe(this, Yt, jn).call(this, { type: "success", data: M }),
            M
          );
        } catch (M) {
          try {
            throw (
              (await ((m = (g = R(this, $e).config).onError) == null
                ? void 0
                : m.call(g, M, t, this.state.context, this)),
              await ((b = (v = this.options).onError) == null
                ? void 0
                : b.call(v, M, t, this.state.context)),
              await ((C = (E = R(this, $e).config).onSettled) == null
                ? void 0
                : C.call(
                    E,
                    void 0,
                    M,
                    this.state.variables,
                    this.state.context,
                    this
                  )),
              await ((k = (T = this.options).onSettled) == null
                ? void 0
                : k.call(T, void 0, M, t, this.state.context)),
              M)
            );
          } finally {
            Oe(this, Yt, jn).call(this, { type: "error", error: M });
          }
        } finally {
          R(this, $e).runNext(this);
        }
      }
    }),
    (Qt = new WeakMap()),
    ($e = new WeakMap()),
    (Mr = new WeakMap()),
    (Yt = new WeakSet()),
    (jn = function (t) {
      const n = (r) => {
        switch (t.type) {
          case "failed":
            return {
              ...r,
              failureCount: t.failureCount,
              failureReason: t.error,
            };
          case "pause":
            return { ...r, isPaused: !0 };
          case "continue":
            return { ...r, isPaused: !1 };
          case "pending":
            return {
              ...r,
              context: t.context,
              data: void 0,
              failureCount: 0,
              failureReason: null,
              error: null,
              isPaused: t.isPaused,
              status: "pending",
              variables: t.variables,
              submittedAt: Date.now(),
            };
          case "success":
            return {
              ...r,
              data: t.data,
              failureCount: 0,
              failureReason: null,
              error: null,
              status: "success",
              isPaused: !1,
            };
          case "error":
            return {
              ...r,
              data: void 0,
              error: t.error,
              failureCount: r.failureCount + 1,
              failureReason: t.error,
              isPaused: !1,
              status: "error",
            };
        }
      };
      (this.state = n(this.state)),
        We.batch(() => {
          R(this, Qt).forEach((r) => {
            r.onMutationUpdate(t);
          }),
            R(this, $e).notify({ mutation: this, type: "updated", action: t });
        });
    }),
    bg);
function oE() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0,
  };
}
var dn,
  Lt,
  ss,
  Eg,
  sE =
    ((Eg = class extends xl {
      constructor(t = {}) {
        super();
        J(this, dn);
        J(this, Lt);
        J(this, ss);
        (this.config = t),
          G(this, dn, new Set()),
          G(this, Lt, new Map()),
          G(this, ss, 0);
      }
      build(t, n, r) {
        const i = new iE({
          mutationCache: this,
          mutationId: ++bs(this, ss)._,
          options: t.defaultMutationOptions(n),
          state: r,
        });
        return this.add(i), i;
      }
      add(t) {
        R(this, dn).add(t);
        const n = zs(t);
        if (typeof n == "string") {
          const r = R(this, Lt).get(n);
          r ? r.push(t) : R(this, Lt).set(n, [t]);
        }
        this.notify({ type: "added", mutation: t });
      }
      remove(t) {
        if (R(this, dn).delete(t)) {
          const n = zs(t);
          if (typeof n == "string") {
            const r = R(this, Lt).get(n);
            if (r)
              if (r.length > 1) {
                const i = r.indexOf(t);
                i !== -1 && r.splice(i, 1);
              } else r[0] === t && R(this, Lt).delete(n);
          }
        }
        this.notify({ type: "removed", mutation: t });
      }
      canRun(t) {
        const n = zs(t);
        if (typeof n == "string") {
          const r = R(this, Lt).get(n),
            i =
              r == null ? void 0 : r.find((o) => o.state.status === "pending");
          return !i || i === t;
        } else return !0;
      }
      runNext(t) {
        var r;
        const n = zs(t);
        if (typeof n == "string") {
          const i =
            (r = R(this, Lt).get(n)) == null
              ? void 0
              : r.find((o) => o !== t && o.state.isPaused);
          return (i == null ? void 0 : i.continue()) ?? Promise.resolve();
        } else return Promise.resolve();
      }
      clear() {
        We.batch(() => {
          R(this, dn).forEach((t) => {
            this.notify({ type: "removed", mutation: t });
          }),
            R(this, dn).clear(),
            R(this, Lt).clear();
        });
      }
      getAll() {
        return Array.from(R(this, dn));
      }
      find(t) {
        const n = { exact: !0, ...t };
        return this.getAll().find((r) => xp(n, r));
      }
      findAll(t = {}) {
        return this.getAll().filter((n) => xp(t, n));
      }
      notify(t) {
        We.batch(() => {
          this.listeners.forEach((n) => {
            n(t);
          });
        });
      }
      resumePausedMutations() {
        const t = this.getAll().filter((n) => n.state.isPaused);
        return We.batch(() =>
          Promise.all(t.map((n) => n.continue().catch(Mt)))
        );
      }
    }),
    (dn = new WeakMap()),
    (Lt = new WeakMap()),
    (ss = new WeakMap()),
    Eg);
function zs(e) {
  var t;
  return (t = e.options.scope) == null ? void 0 : t.id;
}
function bp(e) {
  return {
    onFetch: (t, n) => {
      var c, d, f, h, x;
      const r = t.options,
        i =
          (f =
            (d = (c = t.fetchOptions) == null ? void 0 : c.meta) == null
              ? void 0
              : d.fetchMore) == null
            ? void 0
            : f.direction,
        o = ((h = t.state.data) == null ? void 0 : h.pages) || [],
        s = ((x = t.state.data) == null ? void 0 : x.pageParams) || [];
      let a = { pages: [], pageParams: [] },
        l = 0;
      const u = async () => {
        let y = !1;
        const w = (v) => {
            Object.defineProperty(v, "signal", {
              enumerable: !0,
              get: () => (
                t.signal.aborted
                  ? (y = !0)
                  : t.signal.addEventListener("abort", () => {
                      y = !0;
                    }),
                t.signal
              ),
            });
          },
          g = $v(t.options, t.fetchOptions),
          m = async (v, b, E) => {
            if (y) return Promise.reject();
            if (b == null && v.pages.length) return Promise.resolve(v);
            const T = (() => {
                const F = {
                  client: t.client,
                  queryKey: t.queryKey,
                  pageParam: b,
                  direction: E ? "backward" : "forward",
                  meta: t.options.meta,
                };
                return w(F), F;
              })(),
              k = await g(T),
              { maxPages: M } = t.options,
              N = E ? Gb : Kb;
            return {
              pages: N(v.pages, k, M),
              pageParams: N(v.pageParams, b, M),
            };
          };
        if (i && o.length) {
          const v = i === "backward",
            b = v ? aE : Ep,
            E = { pages: o, pageParams: s },
            C = b(r, E);
          a = await m(E, C, v);
        } else {
          const v = e ?? o.length;
          do {
            const b = l === 0 ? s[0] ?? r.initialPageParam : Ep(r, a);
            if (l > 0 && b == null) break;
            (a = await m(a, b)), l++;
          } while (l < v);
        }
        return a;
      };
      t.options.persister
        ? (t.fetchFn = () => {
            var y, w;
            return (w = (y = t.options).persister) == null
              ? void 0
              : w.call(
                  y,
                  u,
                  {
                    client: t.client,
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal,
                  },
                  n
                );
          })
        : (t.fetchFn = u);
    },
  };
}
function Ep(e, { pages: t, pageParams: n }) {
  const r = t.length - 1;
  return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0;
}
function aE(e, { pages: t, pageParams: n }) {
  var r;
  return t.length > 0
    ? (r = e.getPreviousPageParam) == null
      ? void 0
      : r.call(e, t[0], t, n[0], n)
    : void 0;
}
var ge,
  zn,
  Bn,
  Ni,
  Ai,
  $n,
  Ri,
  ji,
  Cg,
  lE =
    ((Cg = class {
      constructor(e = {}) {
        J(this, ge);
        J(this, zn);
        J(this, Bn);
        J(this, Ni);
        J(this, Ai);
        J(this, $n);
        J(this, Ri);
        J(this, ji);
        G(this, ge, e.queryCache || new rE()),
          G(this, zn, e.mutationCache || new sE()),
          G(this, Bn, e.defaultOptions || {}),
          G(this, Ni, new Map()),
          G(this, Ai, new Map()),
          G(this, $n, 0);
      }
      mount() {
        bs(this, $n)._++,
          R(this, $n) === 1 &&
            (G(
              this,
              Ri,
              Uv.subscribe(async (e) => {
                e &&
                  (await this.resumePausedMutations(), R(this, ge).onFocus());
              })
            ),
            G(
              this,
              ji,
              Ba.subscribe(async (e) => {
                e &&
                  (await this.resumePausedMutations(), R(this, ge).onOnline());
              })
            ));
      }
      unmount() {
        var e, t;
        bs(this, $n)._--,
          R(this, $n) === 0 &&
            ((e = R(this, Ri)) == null || e.call(this),
            G(this, Ri, void 0),
            (t = R(this, ji)) == null || t.call(this),
            G(this, ji, void 0));
      }
      isFetching(e) {
        return R(this, ge).findAll({ ...e, fetchStatus: "fetching" }).length;
      }
      isMutating(e) {
        return R(this, zn).findAll({ ...e, status: "pending" }).length;
      }
      getQueryData(e) {
        var n;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (n = R(this, ge).get(t.queryHash)) == null
          ? void 0
          : n.state.data;
      }
      ensureQueryData(e) {
        const t = this.defaultQueryOptions(e),
          n = R(this, ge).build(this, t),
          r = n.state.data;
        return r === void 0
          ? this.fetchQuery(e)
          : (e.revalidateIfStale &&
              n.isStaleByTime(Rc(t.staleTime, n)) &&
              this.prefetchQuery(t),
            Promise.resolve(r));
      }
      getQueriesData(e) {
        return R(this, ge)
          .findAll(e)
          .map(({ queryKey: t, state: n }) => {
            const r = n.data;
            return [t, r];
          });
      }
      setQueryData(e, t, n) {
        const r = this.defaultQueryOptions({ queryKey: e }),
          i = R(this, ge).get(r.queryHash),
          o = i == null ? void 0 : i.state.data,
          s = zb(t, o);
        if (s !== void 0)
          return R(this, ge)
            .build(this, r)
            .setData(s, { ...n, manual: !0 });
      }
      setQueriesData(e, t, n) {
        return We.batch(() =>
          R(this, ge)
            .findAll(e)
            .map(({ queryKey: r }) => [r, this.setQueryData(r, t, n)])
        );
      }
      getQueryState(e) {
        var n;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (n = R(this, ge).get(t.queryHash)) == null ? void 0 : n.state;
      }
      removeQueries(e) {
        const t = R(this, ge);
        We.batch(() => {
          t.findAll(e).forEach((n) => {
            t.remove(n);
          });
        });
      }
      resetQueries(e, t) {
        const n = R(this, ge);
        return We.batch(
          () => (
            n.findAll(e).forEach((r) => {
              r.reset();
            }),
            this.refetchQueries({ type: "active", ...e }, t)
          )
        );
      }
      cancelQueries(e, t = {}) {
        const n = { revert: !0, ...t },
          r = We.batch(() =>
            R(this, ge)
              .findAll(e)
              .map((i) => i.cancel(n))
          );
        return Promise.all(r).then(Mt).catch(Mt);
      }
      invalidateQueries(e, t = {}) {
        return We.batch(
          () => (
            R(this, ge)
              .findAll(e)
              .forEach((n) => {
                n.invalidate();
              }),
            (e == null ? void 0 : e.refetchType) === "none"
              ? Promise.resolve()
              : this.refetchQueries(
                  {
                    ...e,
                    type:
                      (e == null ? void 0 : e.refetchType) ??
                      (e == null ? void 0 : e.type) ??
                      "active",
                  },
                  t
                )
          )
        );
      }
      refetchQueries(e, t = {}) {
        const n = { ...t, cancelRefetch: t.cancelRefetch ?? !0 },
          r = We.batch(() =>
            R(this, ge)
              .findAll(e)
              .filter((i) => !i.isDisabled() && !i.isStatic())
              .map((i) => {
                let o = i.fetch(void 0, n);
                return (
                  n.throwOnError || (o = o.catch(Mt)),
                  i.state.fetchStatus === "paused" ? Promise.resolve() : o
                );
              })
          );
        return Promise.all(r).then(Mt);
      }
      fetchQuery(e) {
        const t = this.defaultQueryOptions(e);
        t.retry === void 0 && (t.retry = !1);
        const n = R(this, ge).build(this, t);
        return n.isStaleByTime(Rc(t.staleTime, n))
          ? n.fetch(t)
          : Promise.resolve(n.state.data);
      }
      prefetchQuery(e) {
        return this.fetchQuery(e).then(Mt).catch(Mt);
      }
      fetchInfiniteQuery(e) {
        return (e.behavior = bp(e.pages)), this.fetchQuery(e);
      }
      prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(Mt).catch(Mt);
      }
      ensureInfiniteQueryData(e) {
        return (e.behavior = bp(e.pages)), this.ensureQueryData(e);
      }
      resumePausedMutations() {
        return Ba.isOnline()
          ? R(this, zn).resumePausedMutations()
          : Promise.resolve();
      }
      getQueryCache() {
        return R(this, ge);
      }
      getMutationCache() {
        return R(this, zn);
      }
      getDefaultOptions() {
        return R(this, Bn);
      }
      setDefaultOptions(e) {
        G(this, Bn, e);
      }
      setQueryDefaults(e, t) {
        R(this, Ni).set(Xo(e), { queryKey: e, defaultOptions: t });
      }
      getQueryDefaults(e) {
        const t = [...R(this, Ni).values()],
          n = {};
        return (
          t.forEach((r) => {
            qo(e, r.queryKey) && Object.assign(n, r.defaultOptions);
          }),
          n
        );
      }
      setMutationDefaults(e, t) {
        R(this, Ai).set(Xo(e), { mutationKey: e, defaultOptions: t });
      }
      getMutationDefaults(e) {
        const t = [...R(this, Ai).values()],
          n = {};
        return (
          t.forEach((r) => {
            qo(e, r.mutationKey) && Object.assign(n, r.defaultOptions);
          }),
          n
        );
      }
      defaultQueryOptions(e) {
        if (e._defaulted) return e;
        const t = {
          ...R(this, Bn).queries,
          ...this.getQueryDefaults(e.queryKey),
          ...e,
          _defaulted: !0,
        };
        return (
          t.queryHash || (t.queryHash = ff(t.queryKey, t)),
          t.refetchOnReconnect === void 0 &&
            (t.refetchOnReconnect = t.networkMode !== "always"),
          t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
          !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
          t.queryFn === hf && (t.enabled = !1),
          t
        );
      }
      defaultMutationOptions(e) {
        return e != null && e._defaulted
          ? e
          : {
              ...R(this, Bn).mutations,
              ...((e == null ? void 0 : e.mutationKey) &&
                this.getMutationDefaults(e.mutationKey)),
              ...e,
              _defaulted: !0,
            };
      }
      clear() {
        R(this, ge).clear(), R(this, zn).clear();
      }
    }),
    (ge = new WeakMap()),
    (zn = new WeakMap()),
    (Bn = new WeakMap()),
    (Ni = new WeakMap()),
    (Ai = new WeakMap()),
    ($n = new WeakMap()),
    (Ri = new WeakMap()),
    (ji = new WeakMap()),
    Cg),
  uE = S.createContext(void 0),
  cE = ({ client: e, children: t }) => (
    S.useEffect(
      () => (
        e.mount(),
        () => {
          e.unmount();
        }
      ),
      [e]
    ),
    p.jsx(uE.Provider, { value: e, children: t })
  );
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function $a() {
  return (
    ($a = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    $a.apply(this, arguments)
  );
}
var Hn;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(Hn || (Hn = {}));
const Cp = "popstate";
function dE(e) {
  e === void 0 && (e = {});
  function t(r, i) {
    let { pathname: o, search: s, hash: a } = r.location;
    return Mc(
      "",
      { pathname: o, search: s, hash: a },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || "default"
    );
  }
  function n(r, i) {
    return typeof i == "string" ? i : Yv(i);
  }
  return hE(t, n, null, e);
}
function rt(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Qv(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function fE() {
  return Math.random().toString(36).substr(2, 8);
}
function Tp(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Mc(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    $a(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Sl(t) : t,
      { state: n, key: (t && t.key) || r || fE() }
    )
  );
}
function Yv(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Sl(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function hE(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: o = !1 } = r,
    s = i.history,
    a = Hn.Pop,
    l = null,
    u = c();
  u == null && ((u = 0), s.replaceState($a({}, s.state, { idx: u }), ""));
  function c() {
    return (s.state || { idx: null }).idx;
  }
  function d() {
    a = Hn.Pop;
    let w = c(),
      g = w == null ? null : w - u;
    (u = w), l && l({ action: a, location: y.location, delta: g });
  }
  function f(w, g) {
    a = Hn.Push;
    let m = Mc(y.location, w, g);
    u = c() + 1;
    let v = Tp(m, u),
      b = y.createHref(m);
    try {
      s.pushState(v, "", b);
    } catch (E) {
      if (E instanceof DOMException && E.name === "DataCloneError") throw E;
      i.location.assign(b);
    }
    o && l && l({ action: a, location: y.location, delta: 1 });
  }
  function h(w, g) {
    a = Hn.Replace;
    let m = Mc(y.location, w, g);
    u = c();
    let v = Tp(m, u),
      b = y.createHref(m);
    s.replaceState(v, "", b),
      o && l && l({ action: a, location: y.location, delta: 0 });
  }
  function x(w) {
    let g = i.location.origin !== "null" ? i.location.origin : i.location.href,
      m = typeof w == "string" ? w : Yv(w);
    return (
      (m = m.replace(/ $/, "%20")),
      rt(
        g,
        "No window.location.(origin|href) available to create URL for href: " +
          m
      ),
      new URL(m, g)
    );
  }
  let y = {
    get action() {
      return a;
    },
    get location() {
      return e(i, s);
    },
    listen(w) {
      if (l) throw new Error("A history only accepts one active listener");
      return (
        i.addEventListener(Cp, d),
        (l = w),
        () => {
          i.removeEventListener(Cp, d), (l = null);
        }
      );
    },
    createHref(w) {
      return t(i, w);
    },
    createURL: x,
    encodeLocation(w) {
      let g = x(w);
      return { pathname: g.pathname, search: g.search, hash: g.hash };
    },
    push: f,
    replace: h,
    go(w) {
      return s.go(w);
    },
  };
  return y;
}
var Pp;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(Pp || (Pp = {}));
function pE(e, t, n) {
  return n === void 0 && (n = "/"), mE(e, t, n, !1);
}
function mE(e, t, n, r) {
  let i = typeof t == "string" ? Sl(t) : t,
    o = Zv(i.pathname || "/", n);
  if (o == null) return null;
  let s = Xv(e);
  gE(s);
  let a = null;
  for (let l = 0; a == null && l < s.length; ++l) {
    let u = kE(o);
    a = TE(s[l], u, r);
  }
  return a;
}
function Xv(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let i = (o, s, a) => {
    let l = {
      relativePath: a === void 0 ? o.path || "" : a,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: s,
      route: o,
    };
    l.relativePath.startsWith("/") &&
      (rt(
        l.relativePath.startsWith(r),
        'Absolute route path "' +
          l.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (l.relativePath = l.relativePath.slice(r.length)));
    let u = Si([r, l.relativePath]),
      c = n.concat(l);
    o.children &&
      o.children.length > 0 &&
      (rt(
        o.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".')
      ),
      Xv(o.children, t, c, u)),
      !(o.path == null && !o.index) &&
        t.push({ path: u, score: EE(u, o.index), routesMeta: c });
  };
  return (
    e.forEach((o, s) => {
      var a;
      if (o.path === "" || !((a = o.path) != null && a.includes("?"))) i(o, s);
      else for (let l of qv(o.path)) i(o, s, l);
    }),
    t
  );
}
function qv(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    i = n.endsWith("?"),
    o = n.replace(/\?$/, "");
  if (r.length === 0) return i ? [o, ""] : [o];
  let s = qv(r.join("/")),
    a = [];
  return (
    a.push(...s.map((l) => (l === "" ? o : [o, l].join("/")))),
    i && a.push(...s),
    a.map((l) => (e.startsWith("/") && l === "" ? "/" : l))
  );
}
function gE(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : CE(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const yE = /^:[\w-]+$/,
  vE = 3,
  xE = 2,
  wE = 1,
  SE = 10,
  bE = -2,
  kp = (e) => e === "*";
function EE(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(kp) && (r += bE),
    t && (r += xE),
    n
      .filter((i) => !kp(i))
      .reduce((i, o) => i + (yE.test(o) ? vE : o === "" ? wE : SE), r)
  );
}
function CE(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function TE(e, t, n) {
  let { routesMeta: r } = e,
    i = {},
    o = "/",
    s = [];
  for (let a = 0; a < r.length; ++a) {
    let l = r[a],
      u = a === r.length - 1,
      c = o === "/" ? t : t.slice(o.length) || "/",
      d = Np(
        { path: l.relativePath, caseSensitive: l.caseSensitive, end: u },
        c
      ),
      f = l.route;
    if (
      (!d &&
        u &&
        n &&
        !r[r.length - 1].route.index &&
        (d = Np(
          { path: l.relativePath, caseSensitive: l.caseSensitive, end: !1 },
          c
        )),
      !d)
    )
      return null;
    Object.assign(i, d.params),
      s.push({
        params: i,
        pathname: Si([o, d.pathname]),
        pathnameBase: NE(Si([o, d.pathnameBase])),
        route: f,
      }),
      d.pathnameBase !== "/" && (o = Si([o, d.pathnameBase]));
  }
  return s;
}
function Np(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = PE(e.path, e.caseSensitive, e.end),
    i = t.match(n);
  if (!i) return null;
  let o = i[0],
    s = o.replace(/(.)\/+$/, "$1"),
    a = i.slice(1);
  return {
    params: r.reduce((u, c, d) => {
      let { paramName: f, isOptional: h } = c;
      if (f === "*") {
        let y = a[d] || "";
        s = o.slice(0, o.length - y.length).replace(/(.)\/+$/, "$1");
      }
      const x = a[d];
      return (
        h && !x ? (u[f] = void 0) : (u[f] = (x || "").replace(/%2F/g, "/")), u
      );
    }, {}),
    pathname: o,
    pathnameBase: s,
    pattern: e,
  };
}
function PE(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Qv(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    i =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (s, a, l) => (
            r.push({ paramName: a, isOptional: l != null }),
            l ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (i += "\\/*$")
      : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i, t ? void 0 : "i"), r]
  );
}
function kE(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      Qv(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function Zv(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
const Si = (e) => e.join("/").replace(/\/\/+/g, "/"),
  NE = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/");
function AE(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const Jv = ["post", "put", "patch", "delete"];
new Set(Jv);
const RE = ["get", ...Jv];
new Set(RE);
/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ua() {
  return (
    (Ua = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ua.apply(this, arguments)
  );
}
const jE = S.createContext(null),
  ME = S.createContext(null),
  e0 = S.createContext(null),
  bl = S.createContext(null),
  El = S.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  t0 = S.createContext(null);
function pf() {
  return S.useContext(bl) != null;
}
function n0() {
  return pf() || rt(!1), S.useContext(bl).location;
}
function DE(e, t) {
  return LE(e, t);
}
function LE(e, t, n, r) {
  pf() || rt(!1);
  let { navigator: i } = S.useContext(e0),
    { matches: o } = S.useContext(El),
    s = o[o.length - 1],
    a = s ? s.params : {};
  s && s.pathname;
  let l = s ? s.pathnameBase : "/";
  s && s.route;
  let u = n0(),
    c;
  if (t) {
    var d;
    let w = typeof t == "string" ? Sl(t) : t;
    l === "/" || ((d = w.pathname) != null && d.startsWith(l)) || rt(!1),
      (c = w);
  } else c = u;
  let f = c.pathname || "/",
    h = f;
  if (l !== "/") {
    let w = l.replace(/^\//, "").split("/");
    h = "/" + f.replace(/^\//, "").split("/").slice(w.length).join("/");
  }
  let x = pE(e, { pathname: h }),
    y = _E(
      x &&
        x.map((w) =>
          Object.assign({}, w, {
            params: Object.assign({}, a, w.params),
            pathname: Si([
              l,
              i.encodeLocation
                ? i.encodeLocation(w.pathname).pathname
                : w.pathname,
            ]),
            pathnameBase:
              w.pathnameBase === "/"
                ? l
                : Si([
                    l,
                    i.encodeLocation
                      ? i.encodeLocation(w.pathnameBase).pathname
                      : w.pathnameBase,
                  ]),
          })
        ),
      o,
      n,
      r
    );
  return t && y
    ? S.createElement(
        bl.Provider,
        {
          value: {
            location: Ua(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              c
            ),
            navigationType: Hn.Pop,
          },
        },
        y
      )
    : y;
}
function OE() {
  let e = UE(),
    t = AE(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return S.createElement(
    S.Fragment,
    null,
    S.createElement("h2", null, "Unexpected Application Error!"),
    S.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? S.createElement("pre", { style: i }, n) : null,
    null
  );
}
const IE = S.createElement(OE, null);
class FE extends S.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? S.createElement(
          El.Provider,
          { value: this.props.routeContext },
          S.createElement(t0.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function VE(e) {
  let { routeContext: t, match: n, children: r } = e,
    i = S.useContext(jE);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    S.createElement(El.Provider, { value: t }, r)
  );
}
function _E(e, t, n, r) {
  var i;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var o;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (
      (o = r) != null &&
      o.v7_partialHydration &&
      t.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      e = n.matches;
    else return null;
  }
  let s = e,
    a = (i = n) == null ? void 0 : i.errors;
  if (a != null) {
    let c = s.findIndex(
      (d) => d.route.id && (a == null ? void 0 : a[d.route.id]) !== void 0
    );
    c >= 0 || rt(!1), (s = s.slice(0, Math.min(s.length, c + 1)));
  }
  let l = !1,
    u = -1;
  if (n && r && r.v7_partialHydration)
    for (let c = 0; c < s.length; c++) {
      let d = s[c];
      if (
        ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (u = c),
        d.route.id)
      ) {
        let { loaderData: f, errors: h } = n,
          x =
            d.route.loader &&
            f[d.route.id] === void 0 &&
            (!h || h[d.route.id] === void 0);
        if (d.route.lazy || x) {
          (l = !0), u >= 0 ? (s = s.slice(0, u + 1)) : (s = [s[0]]);
          break;
        }
      }
    }
  return s.reduceRight((c, d, f) => {
    let h,
      x = !1,
      y = null,
      w = null;
    n &&
      ((h = a && d.route.id ? a[d.route.id] : void 0),
      (y = d.route.errorElement || IE),
      l &&
        (u < 0 && f === 0
          ? ((x = !0), (w = null))
          : u === f &&
            ((x = !0), (w = d.route.hydrateFallbackElement || null))));
    let g = t.concat(s.slice(0, f + 1)),
      m = () => {
        let v;
        return (
          h
            ? (v = y)
            : x
            ? (v = w)
            : d.route.Component
            ? (v = S.createElement(d.route.Component, null))
            : d.route.element
            ? (v = d.route.element)
            : (v = c),
          S.createElement(VE, {
            match: d,
            routeContext: { outlet: c, matches: g, isDataRoute: n != null },
            children: v,
          })
        );
      };
    return n && (d.route.ErrorBoundary || d.route.errorElement || f === 0)
      ? S.createElement(FE, {
          location: n.location,
          revalidation: n.revalidation,
          component: y,
          error: h,
          children: m(),
          routeContext: { outlet: null, matches: g, isDataRoute: !0 },
        })
      : m();
  }, null);
}
var Dc = (function (e) {
  return (
    (e.UseBlocker = "useBlocker"),
    (e.UseLoaderData = "useLoaderData"),
    (e.UseActionData = "useActionData"),
    (e.UseRouteError = "useRouteError"),
    (e.UseNavigation = "useNavigation"),
    (e.UseRouteLoaderData = "useRouteLoaderData"),
    (e.UseMatches = "useMatches"),
    (e.UseRevalidator = "useRevalidator"),
    (e.UseNavigateStable = "useNavigate"),
    (e.UseRouteId = "useRouteId"),
    e
  );
})(Dc || {});
function zE(e) {
  let t = S.useContext(ME);
  return t || rt(!1), t;
}
function BE(e) {
  let t = S.useContext(El);
  return t || rt(!1), t;
}
function $E(e) {
  let t = BE(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || rt(!1), n.route.id;
}
function UE() {
  var e;
  let t = S.useContext(t0),
    n = zE(Dc.UseRouteError),
    r = $E(Dc.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function WE(e, t) {
  e == null || e.v7_startTransition, e == null || e.v7_relativeSplatPath;
}
function Lc(e) {
  rt(!1);
}
function HE(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: i = Hn.Pop,
    navigator: o,
    static: s = !1,
    future: a,
  } = e;
  pf() && rt(!1);
  let l = t.replace(/^\/*/, "/"),
    u = S.useMemo(
      () => ({
        basename: l,
        navigator: o,
        static: s,
        future: Ua({ v7_relativeSplatPath: !1 }, a),
      }),
      [l, a, o, s]
    );
  typeof r == "string" && (r = Sl(r));
  let {
      pathname: c = "/",
      search: d = "",
      hash: f = "",
      state: h = null,
      key: x = "default",
    } = r,
    y = S.useMemo(() => {
      let w = Zv(c, l);
      return w == null
        ? null
        : {
            location: { pathname: w, search: d, hash: f, state: h, key: x },
            navigationType: i,
          };
    }, [l, c, d, f, h, x, i]);
  return y == null
    ? null
    : S.createElement(
        e0.Provider,
        { value: u },
        S.createElement(bl.Provider, { children: n, value: y })
      );
}
function KE(e) {
  let { children: t, location: n } = e;
  return DE(Oc(t), n);
}
new Promise(() => {});
function Oc(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    S.Children.forEach(e, (r, i) => {
      if (!S.isValidElement(r)) return;
      let o = [...t, i];
      if (r.type === S.Fragment) {
        n.push.apply(n, Oc(r.props.children, o));
        return;
      }
      r.type !== Lc && rt(!1), !r.props.index || !r.props.children || rt(!1);
      let s = {
        id: r.props.id || o.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (s.children = Oc(r.props.children, o)), n.push(s);
    }),
    n
  );
}
/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ const GE = "6";
try {
  window.__reactRouterVersion = GE;
} catch {}
const QE = "startTransition",
  Ap = Ig[QE];
function YE(e) {
  let { basename: t, children: n, future: r, window: i } = e,
    o = S.useRef();
  o.current == null && (o.current = dE({ window: i, v5Compat: !0 }));
  let s = o.current,
    [a, l] = S.useState({ action: s.action, location: s.location }),
    { v7_startTransition: u } = r || {},
    c = S.useCallback(
      (d) => {
        u && Ap ? Ap(() => l(d)) : l(d);
      },
      [l, u]
    );
  return (
    S.useLayoutEffect(() => s.listen(c), [s, c]),
    S.useEffect(() => WE(r), [r]),
    S.createElement(HE, {
      basename: t,
      children: n,
      location: a.location,
      navigationType: a.action,
      navigator: s,
      future: r,
    })
  );
}
var Rp;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(Rp || (Rp = {}));
var jp;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(jp || (jp = {}));
var Mp = ["light", "dark"],
  XE = "(prefers-color-scheme: dark)",
  qE = S.createContext(void 0),
  ZE = { setTheme: (e) => {}, themes: [] },
  JE = () => {
    var e;
    return (e = S.useContext(qE)) != null ? e : ZE;
  };
S.memo(
  ({
    forcedTheme: e,
    storageKey: t,
    attribute: n,
    enableSystem: r,
    enableColorScheme: i,
    defaultTheme: o,
    value: s,
    attrs: a,
    nonce: l,
  }) => {
    let u = o === "system",
      c =
        n === "class"
          ? `var d=document.documentElement,c=d.classList;${`c.remove(${a
              .map((x) => `'${x}'`)
              .join(",")})`};`
          : `var d=document.documentElement,n='${n}',s='setAttribute';`,
      d = i
        ? Mp.includes(o) && o
          ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${o}'`
          : "if(e==='light'||e==='dark')d.style.colorScheme=e"
        : "",
      f = (x, y = !1, w = !0) => {
        let g = s ? s[x] : x,
          m = y ? x + "|| ''" : `'${g}'`,
          v = "";
        return (
          i &&
            w &&
            !y &&
            Mp.includes(x) &&
            (v += `d.style.colorScheme = '${x}';`),
          n === "class"
            ? y || g
              ? (v += `c.add(${m})`)
              : (v += "null")
            : g && (v += `d[s](n,${m})`),
          v
        );
      },
      h = e
        ? `!function(){${c}${f(e)}}()`
        : r
        ? `!function(){try{${c}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${XE}',m=window.matchMedia(t);if(m.media!==t||m.matches){${f(
            "dark"
          )}}else{${f("light")}}}else if(e){${
            s ? `var x=${JSON.stringify(s)};` : ""
          }${f(s ? "x[e]" : "e", !0)}}${
            u ? "" : "else{" + f(o, !1, !1) + "}"
          }${d}}catch(e){}}()`
        : `!function(){try{${c}var e=localStorage.getItem('${t}');if(e){${
            s ? `var x=${JSON.stringify(s)};` : ""
          }${f(s ? "x[e]" : "e", !0)}}else{${f(
            o,
            !1,
            !1
          )};}${d}}catch(t){}}();`;
    return S.createElement("script", {
      nonce: l,
      dangerouslySetInnerHTML: { __html: h },
    });
  }
);
var eC = (e) => {
    switch (e) {
      case "success":
        return rC;
      case "info":
        return oC;
      case "warning":
        return iC;
      case "error":
        return sC;
      default:
        return null;
    }
  },
  tC = Array(12).fill(0),
  nC = ({ visible: e, className: t }) =>
    D.createElement(
      "div",
      {
        className: ["sonner-loading-wrapper", t].filter(Boolean).join(" "),
        "data-visible": e,
      },
      D.createElement(
        "div",
        { className: "sonner-spinner" },
        tC.map((n, r) =>
          D.createElement("div", {
            className: "sonner-loading-bar",
            key: `spinner-bar-${r}`,
          })
        )
      )
    ),
  rC = D.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    D.createElement("path", {
      fillRule: "evenodd",
      d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
      clipRule: "evenodd",
    })
  ),
  iC = D.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    D.createElement("path", {
      fillRule: "evenodd",
      d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
      clipRule: "evenodd",
    })
  ),
  oC = D.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    D.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
      clipRule: "evenodd",
    })
  ),
  sC = D.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    D.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
      clipRule: "evenodd",
    })
  ),
  aC = D.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "12",
      height: "12",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    D.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
    D.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
  ),
  lC = () => {
    let [e, t] = D.useState(document.hidden);
    return (
      D.useEffect(() => {
        let n = () => {
          t(document.hidden);
        };
        return (
          document.addEventListener("visibilitychange", n),
          () => window.removeEventListener("visibilitychange", n)
        );
      }, []),
      e
    );
  },
  Ic = 1,
  uC = class {
    constructor() {
      (this.subscribe = (e) => (
        this.subscribers.push(e),
        () => {
          let t = this.subscribers.indexOf(e);
          this.subscribers.splice(t, 1);
        }
      )),
        (this.publish = (e) => {
          this.subscribers.forEach((t) => t(e));
        }),
        (this.addToast = (e) => {
          this.publish(e), (this.toasts = [...this.toasts, e]);
        }),
        (this.create = (e) => {
          var t;
          let { message: n, ...r } = e,
            i =
              typeof (e == null ? void 0 : e.id) == "number" ||
              ((t = e.id) == null ? void 0 : t.length) > 0
                ? e.id
                : Ic++,
            o = this.toasts.find((a) => a.id === i),
            s = e.dismissible === void 0 ? !0 : e.dismissible;
          return (
            this.dismissedToasts.has(i) && this.dismissedToasts.delete(i),
            o
              ? (this.toasts = this.toasts.map((a) =>
                  a.id === i
                    ? (this.publish({ ...a, ...e, id: i, title: n }),
                      { ...a, ...e, id: i, dismissible: s, title: n })
                    : a
                ))
              : this.addToast({ title: n, ...r, dismissible: s, id: i }),
            i
          );
        }),
        (this.dismiss = (e) => (
          this.dismissedToasts.add(e),
          e ||
            this.toasts.forEach((t) => {
              this.subscribers.forEach((n) => n({ id: t.id, dismiss: !0 }));
            }),
          this.subscribers.forEach((t) => t({ id: e, dismiss: !0 })),
          e
        )),
        (this.message = (e, t) => this.create({ ...t, message: e })),
        (this.error = (e, t) =>
          this.create({ ...t, message: e, type: "error" })),
        (this.success = (e, t) =>
          this.create({ ...t, type: "success", message: e })),
        (this.info = (e, t) => this.create({ ...t, type: "info", message: e })),
        (this.warning = (e, t) =>
          this.create({ ...t, type: "warning", message: e })),
        (this.loading = (e, t) =>
          this.create({ ...t, type: "loading", message: e })),
        (this.promise = (e, t) => {
          if (!t) return;
          let n;
          t.loading !== void 0 &&
            (n = this.create({
              ...t,
              promise: e,
              type: "loading",
              message: t.loading,
              description:
                typeof t.description != "function" ? t.description : void 0,
            }));
          let r = e instanceof Promise ? e : e(),
            i = n !== void 0,
            o,
            s = r
              .then(async (l) => {
                if (((o = ["resolve", l]), D.isValidElement(l)))
                  (i = !1), this.create({ id: n, type: "default", message: l });
                else if (dC(l) && !l.ok) {
                  i = !1;
                  let u =
                      typeof t.error == "function"
                        ? await t.error(`HTTP error! status: ${l.status}`)
                        : t.error,
                    c =
                      typeof t.description == "function"
                        ? await t.description(`HTTP error! status: ${l.status}`)
                        : t.description;
                  this.create({
                    id: n,
                    type: "error",
                    message: u,
                    description: c,
                  });
                } else if (t.success !== void 0) {
                  i = !1;
                  let u =
                      typeof t.success == "function"
                        ? await t.success(l)
                        : t.success,
                    c =
                      typeof t.description == "function"
                        ? await t.description(l)
                        : t.description;
                  this.create({
                    id: n,
                    type: "success",
                    message: u,
                    description: c,
                  });
                }
              })
              .catch(async (l) => {
                if (((o = ["reject", l]), t.error !== void 0)) {
                  i = !1;
                  let u =
                      typeof t.error == "function" ? await t.error(l) : t.error,
                    c =
                      typeof t.description == "function"
                        ? await t.description(l)
                        : t.description;
                  this.create({
                    id: n,
                    type: "error",
                    message: u,
                    description: c,
                  });
                }
              })
              .finally(() => {
                var l;
                i && (this.dismiss(n), (n = void 0)),
                  (l = t.finally) == null || l.call(t);
              }),
            a = () =>
              new Promise((l, u) =>
                s.then(() => (o[0] === "reject" ? u(o[1]) : l(o[1]))).catch(u)
              );
          return typeof n != "string" && typeof n != "number"
            ? { unwrap: a }
            : Object.assign(n, { unwrap: a });
        }),
        (this.custom = (e, t) => {
          let n = (t == null ? void 0 : t.id) || Ic++;
          return this.create({ jsx: e(n), id: n, ...t }), n;
        }),
        (this.getActiveToasts = () =>
          this.toasts.filter((e) => !this.dismissedToasts.has(e.id))),
        (this.subscribers = []),
        (this.toasts = []),
        (this.dismissedToasts = new Set());
    }
  },
  Xe = new uC(),
  cC = (e, t) => {
    let n = (t == null ? void 0 : t.id) || Ic++;
    return Xe.addToast({ title: e, ...t, id: n }), n;
  },
  dC = (e) =>
    e &&
    typeof e == "object" &&
    "ok" in e &&
    typeof e.ok == "boolean" &&
    "status" in e &&
    typeof e.status == "number",
  fC = cC,
  hC = () => Xe.toasts,
  pC = () => Xe.getActiveToasts();
Object.assign(
  fC,
  {
    success: Xe.success,
    info: Xe.info,
    warning: Xe.warning,
    error: Xe.error,
    custom: Xe.custom,
    message: Xe.message,
    promise: Xe.promise,
    dismiss: Xe.dismiss,
    loading: Xe.loading,
  },
  { getHistory: hC, getToasts: pC }
);
function mC(e, { insertAt: t } = {}) {
  if (typeof document > "u") return;
  let n = document.head || document.getElementsByTagName("head")[0],
    r = document.createElement("style");
  (r.type = "text/css"),
    t === "top" && n.firstChild
      ? n.insertBefore(r, n.firstChild)
      : n.appendChild(r),
    r.styleSheet
      ? (r.styleSheet.cssText = e)
      : r.appendChild(document.createTextNode(e));
}
mC(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function Bs(e) {
  return e.label !== void 0;
}
var gC = 3,
  yC = "32px",
  vC = "16px",
  Dp = 4e3,
  xC = 356,
  wC = 14,
  SC = 20,
  bC = 200;
function Nt(...e) {
  return e.filter(Boolean).join(" ");
}
function EC(e) {
  let [t, n] = e.split("-"),
    r = [];
  return t && r.push(t), n && r.push(n), r;
}
var CC = (e) => {
  var t, n, r, i, o, s, a, l, u, c, d;
  let {
      invert: f,
      toast: h,
      unstyled: x,
      interacting: y,
      setHeights: w,
      visibleToasts: g,
      heights: m,
      index: v,
      toasts: b,
      expanded: E,
      removeToast: C,
      defaultRichColors: T,
      closeButton: k,
      style: M,
      cancelButtonStyle: N,
      actionButtonStyle: F,
      className: O = "",
      descriptionClassName: U = "",
      duration: L,
      position: W,
      gap: z,
      loadingIcon: H,
      expandByDefault: P,
      classNames: A,
      icons: I,
      closeButtonAriaLabel: $ = "Close toast",
      pauseWhenPageIsHidden: B,
    } = e,
    [Y, q] = D.useState(null),
    [we, Le] = D.useState(null),
    [te, Kr] = D.useState(!1),
    [bn, mr] = D.useState(!1),
    [En, Gr] = D.useState(!1),
    [Cn, xs] = D.useState(!1),
    [Fl, ws] = D.useState(!1),
    [Vl, eo] = D.useState(0),
    [Qr, nh] = D.useState(0),
    to = D.useRef(h.duration || L || Dp),
    rh = D.useRef(null),
    gr = D.useRef(null),
    o1 = v === 0,
    s1 = v + 1 <= g,
    pt = h.type,
    Yr = h.dismissible !== !1,
    a1 = h.className || "",
    l1 = h.descriptionClassName || "",
    Ss = D.useMemo(
      () => m.findIndex((K) => K.toastId === h.id) || 0,
      [m, h.id]
    ),
    u1 = D.useMemo(() => {
      var K;
      return (K = h.closeButton) != null ? K : k;
    }, [h.closeButton, k]),
    ih = D.useMemo(() => h.duration || L || Dp, [h.duration, L]),
    _l = D.useRef(0),
    Xr = D.useRef(0),
    oh = D.useRef(0),
    qr = D.useRef(null),
    [c1, d1] = W.split("-"),
    sh = D.useMemo(
      () => m.reduce((K, re, ce) => (ce >= Ss ? K : K + re.height), 0),
      [m, Ss]
    ),
    ah = lC(),
    f1 = h.invert || f,
    zl = pt === "loading";
  (Xr.current = D.useMemo(() => Ss * z + sh, [Ss, sh])),
    D.useEffect(() => {
      to.current = ih;
    }, [ih]),
    D.useEffect(() => {
      Kr(!0);
    }, []),
    D.useEffect(() => {
      let K = gr.current;
      if (K) {
        let re = K.getBoundingClientRect().height;
        return (
          nh(re),
          w((ce) => [
            { toastId: h.id, height: re, position: h.position },
            ...ce,
          ]),
          () => w((ce) => ce.filter((Ct) => Ct.toastId !== h.id))
        );
      }
    }, [w, h.id]),
    D.useLayoutEffect(() => {
      if (!te) return;
      let K = gr.current,
        re = K.style.height;
      K.style.height = "auto";
      let ce = K.getBoundingClientRect().height;
      (K.style.height = re),
        nh(ce),
        w((Ct) =>
          Ct.find((Tt) => Tt.toastId === h.id)
            ? Ct.map((Tt) => (Tt.toastId === h.id ? { ...Tt, height: ce } : Tt))
            : [{ toastId: h.id, height: ce, position: h.position }, ...Ct]
        );
    }, [te, h.title, h.description, w, h.id]);
  let Tn = D.useCallback(() => {
    mr(!0),
      eo(Xr.current),
      w((K) => K.filter((re) => re.toastId !== h.id)),
      setTimeout(() => {
        C(h);
      }, bC);
  }, [h, C, w, Xr]);
  D.useEffect(() => {
    if (
      (h.promise && pt === "loading") ||
      h.duration === 1 / 0 ||
      h.type === "loading"
    )
      return;
    let K;
    return (
      E || y || (B && ah)
        ? (() => {
            if (oh.current < _l.current) {
              let re = new Date().getTime() - _l.current;
              to.current = to.current - re;
            }
            oh.current = new Date().getTime();
          })()
        : to.current !== 1 / 0 &&
          ((_l.current = new Date().getTime()),
          (K = setTimeout(() => {
            var re;
            (re = h.onAutoClose) == null || re.call(h, h), Tn();
          }, to.current))),
      () => clearTimeout(K)
    );
  }, [E, y, h, pt, B, ah, Tn]),
    D.useEffect(() => {
      h.delete && Tn();
    }, [Tn, h.delete]);
  function h1() {
    var K, re, ce;
    return I != null && I.loading
      ? D.createElement(
          "div",
          {
            className: Nt(
              A == null ? void 0 : A.loader,
              (K = h == null ? void 0 : h.classNames) == null
                ? void 0
                : K.loader,
              "sonner-loader"
            ),
            "data-visible": pt === "loading",
          },
          I.loading
        )
      : H
      ? D.createElement(
          "div",
          {
            className: Nt(
              A == null ? void 0 : A.loader,
              (re = h == null ? void 0 : h.classNames) == null
                ? void 0
                : re.loader,
              "sonner-loader"
            ),
            "data-visible": pt === "loading",
          },
          H
        )
      : D.createElement(nC, {
          className: Nt(
            A == null ? void 0 : A.loader,
            (ce = h == null ? void 0 : h.classNames) == null
              ? void 0
              : ce.loader
          ),
          visible: pt === "loading",
        });
  }
  return D.createElement(
    "li",
    {
      tabIndex: 0,
      ref: gr,
      className: Nt(
        O,
        a1,
        A == null ? void 0 : A.toast,
        (t = h == null ? void 0 : h.classNames) == null ? void 0 : t.toast,
        A == null ? void 0 : A.default,
        A == null ? void 0 : A[pt],
        (n = h == null ? void 0 : h.classNames) == null ? void 0 : n[pt]
      ),
      "data-sonner-toast": "",
      "data-rich-colors": (r = h.richColors) != null ? r : T,
      "data-styled": !(h.jsx || h.unstyled || x),
      "data-mounted": te,
      "data-promise": !!h.promise,
      "data-swiped": Fl,
      "data-removed": bn,
      "data-visible": s1,
      "data-y-position": c1,
      "data-x-position": d1,
      "data-index": v,
      "data-front": o1,
      "data-swiping": En,
      "data-dismissible": Yr,
      "data-type": pt,
      "data-invert": f1,
      "data-swipe-out": Cn,
      "data-swipe-direction": we,
      "data-expanded": !!(E || (P && te)),
      style: {
        "--index": v,
        "--toasts-before": v,
        "--z-index": b.length - v,
        "--offset": `${bn ? Vl : Xr.current}px`,
        "--initial-height": P ? "auto" : `${Qr}px`,
        ...M,
        ...h.style,
      },
      onDragEnd: () => {
        Gr(!1), q(null), (qr.current = null);
      },
      onPointerDown: (K) => {
        zl ||
          !Yr ||
          ((rh.current = new Date()),
          eo(Xr.current),
          K.target.setPointerCapture(K.pointerId),
          K.target.tagName !== "BUTTON" &&
            (Gr(!0), (qr.current = { x: K.clientX, y: K.clientY })));
      },
      onPointerUp: () => {
        var K, re, ce, Ct;
        if (Cn || !Yr) return;
        qr.current = null;
        let Tt = Number(
            ((K = gr.current) == null
              ? void 0
              : K.style
                  .getPropertyValue("--swipe-amount-x")
                  .replace("px", "")) || 0
          ),
          Pn = Number(
            ((re = gr.current) == null
              ? void 0
              : re.style
                  .getPropertyValue("--swipe-amount-y")
                  .replace("px", "")) || 0
          ),
          yr =
            new Date().getTime() -
            ((ce = rh.current) == null ? void 0 : ce.getTime()),
          Pt = Y === "x" ? Tt : Pn,
          kn = Math.abs(Pt) / yr;
        if (Math.abs(Pt) >= SC || kn > 0.11) {
          eo(Xr.current),
            (Ct = h.onDismiss) == null || Ct.call(h, h),
            Le(
              Y === "x" ? (Tt > 0 ? "right" : "left") : Pn > 0 ? "down" : "up"
            ),
            Tn(),
            xs(!0),
            ws(!1);
          return;
        }
        Gr(!1), q(null);
      },
      onPointerMove: (K) => {
        var re, ce, Ct, Tt;
        if (
          !qr.current ||
          !Yr ||
          ((re = window.getSelection()) == null
            ? void 0
            : re.toString().length) > 0
        )
          return;
        let Pn = K.clientY - qr.current.y,
          yr = K.clientX - qr.current.x,
          Pt = (ce = e.swipeDirections) != null ? ce : EC(W);
        !Y &&
          (Math.abs(yr) > 1 || Math.abs(Pn) > 1) &&
          q(Math.abs(yr) > Math.abs(Pn) ? "x" : "y");
        let kn = { x: 0, y: 0 };
        Y === "y"
          ? (Pt.includes("top") || Pt.includes("bottom")) &&
            ((Pt.includes("top") && Pn < 0) ||
              (Pt.includes("bottom") && Pn > 0)) &&
            (kn.y = Pn)
          : Y === "x" &&
            (Pt.includes("left") || Pt.includes("right")) &&
            ((Pt.includes("left") && yr < 0) ||
              (Pt.includes("right") && yr > 0)) &&
            (kn.x = yr),
          (Math.abs(kn.x) > 0 || Math.abs(kn.y) > 0) && ws(!0),
          (Ct = gr.current) == null ||
            Ct.style.setProperty("--swipe-amount-x", `${kn.x}px`),
          (Tt = gr.current) == null ||
            Tt.style.setProperty("--swipe-amount-y", `${kn.y}px`);
      },
    },
    u1 && !h.jsx
      ? D.createElement(
          "button",
          {
            "aria-label": $,
            "data-disabled": zl,
            "data-close-button": !0,
            onClick:
              zl || !Yr
                ? () => {}
                : () => {
                    var K;
                    Tn(), (K = h.onDismiss) == null || K.call(h, h);
                  },
            className: Nt(
              A == null ? void 0 : A.closeButton,
              (i = h == null ? void 0 : h.classNames) == null
                ? void 0
                : i.closeButton
            ),
          },
          (o = I == null ? void 0 : I.close) != null ? o : aC
        )
      : null,
    h.jsx || S.isValidElement(h.title)
      ? h.jsx
        ? h.jsx
        : typeof h.title == "function"
        ? h.title()
        : h.title
      : D.createElement(
          D.Fragment,
          null,
          pt || h.icon || h.promise
            ? D.createElement(
                "div",
                {
                  "data-icon": "",
                  className: Nt(
                    A == null ? void 0 : A.icon,
                    (s = h == null ? void 0 : h.classNames) == null
                      ? void 0
                      : s.icon
                  ),
                },
                h.promise || (h.type === "loading" && !h.icon)
                  ? h.icon || h1()
                  : null,
                h.type !== "loading"
                  ? h.icon || (I == null ? void 0 : I[pt]) || eC(pt)
                  : null
              )
            : null,
          D.createElement(
            "div",
            {
              "data-content": "",
              className: Nt(
                A == null ? void 0 : A.content,
                (a = h == null ? void 0 : h.classNames) == null
                  ? void 0
                  : a.content
              ),
            },
            D.createElement(
              "div",
              {
                "data-title": "",
                className: Nt(
                  A == null ? void 0 : A.title,
                  (l = h == null ? void 0 : h.classNames) == null
                    ? void 0
                    : l.title
                ),
              },
              typeof h.title == "function" ? h.title() : h.title
            ),
            h.description
              ? D.createElement(
                  "div",
                  {
                    "data-description": "",
                    className: Nt(
                      U,
                      l1,
                      A == null ? void 0 : A.description,
                      (u = h == null ? void 0 : h.classNames) == null
                        ? void 0
                        : u.description
                    ),
                  },
                  typeof h.description == "function"
                    ? h.description()
                    : h.description
                )
              : null
          ),
          S.isValidElement(h.cancel)
            ? h.cancel
            : h.cancel && Bs(h.cancel)
            ? D.createElement(
                "button",
                {
                  "data-button": !0,
                  "data-cancel": !0,
                  style: h.cancelButtonStyle || N,
                  onClick: (K) => {
                    var re, ce;
                    Bs(h.cancel) &&
                      Yr &&
                      ((ce = (re = h.cancel).onClick) == null || ce.call(re, K),
                      Tn());
                  },
                  className: Nt(
                    A == null ? void 0 : A.cancelButton,
                    (c = h == null ? void 0 : h.classNames) == null
                      ? void 0
                      : c.cancelButton
                  ),
                },
                h.cancel.label
              )
            : null,
          S.isValidElement(h.action)
            ? h.action
            : h.action && Bs(h.action)
            ? D.createElement(
                "button",
                {
                  "data-button": !0,
                  "data-action": !0,
                  style: h.actionButtonStyle || F,
                  onClick: (K) => {
                    var re, ce;
                    Bs(h.action) &&
                      ((ce = (re = h.action).onClick) == null || ce.call(re, K),
                      !K.defaultPrevented && Tn());
                  },
                  className: Nt(
                    A == null ? void 0 : A.actionButton,
                    (d = h == null ? void 0 : h.classNames) == null
                      ? void 0
                      : d.actionButton
                  ),
                },
                h.action.label
              )
            : null
        )
  );
};
function Lp() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  let e = document.documentElement.getAttribute("dir");
  return e === "auto" || !e
    ? window.getComputedStyle(document.documentElement).direction
    : e;
}
function TC(e, t) {
  let n = {};
  return (
    [e, t].forEach((r, i) => {
      let o = i === 1,
        s = o ? "--mobile-offset" : "--offset",
        a = o ? vC : yC;
      function l(u) {
        ["top", "right", "bottom", "left"].forEach((c) => {
          n[`${s}-${c}`] = typeof u == "number" ? `${u}px` : u;
        });
      }
      typeof r == "number" || typeof r == "string"
        ? l(r)
        : typeof r == "object"
        ? ["top", "right", "bottom", "left"].forEach((u) => {
            r[u] === void 0
              ? (n[`${s}-${u}`] = a)
              : (n[`${s}-${u}`] = typeof r[u] == "number" ? `${r[u]}px` : r[u]);
          })
        : l(a);
    }),
    n
  );
}
var PC = S.forwardRef(function (e, t) {
  let {
      invert: n,
      position: r = "bottom-right",
      hotkey: i = ["altKey", "KeyT"],
      expand: o,
      closeButton: s,
      className: a,
      offset: l,
      mobileOffset: u,
      theme: c = "light",
      richColors: d,
      duration: f,
      style: h,
      visibleToasts: x = gC,
      toastOptions: y,
      dir: w = Lp(),
      gap: g = wC,
      loadingIcon: m,
      icons: v,
      containerAriaLabel: b = "Notifications",
      pauseWhenPageIsHidden: E,
    } = e,
    [C, T] = D.useState([]),
    k = D.useMemo(
      () =>
        Array.from(
          new Set(
            [r].concat(C.filter((B) => B.position).map((B) => B.position))
          )
        ),
      [C, r]
    ),
    [M, N] = D.useState([]),
    [F, O] = D.useState(!1),
    [U, L] = D.useState(!1),
    [W, z] = D.useState(
      c !== "system"
        ? c
        : typeof window < "u" &&
          window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
    ),
    H = D.useRef(null),
    P = i.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
    A = D.useRef(null),
    I = D.useRef(!1),
    $ = D.useCallback((B) => {
      T((Y) => {
        var q;
        return (
          ((q = Y.find((we) => we.id === B.id)) != null && q.delete) ||
            Xe.dismiss(B.id),
          Y.filter(({ id: we }) => we !== B.id)
        );
      });
    }, []);
  return (
    D.useEffect(
      () =>
        Xe.subscribe((B) => {
          if (B.dismiss) {
            T((Y) => Y.map((q) => (q.id === B.id ? { ...q, delete: !0 } : q)));
            return;
          }
          setTimeout(() => {
            _v.flushSync(() => {
              T((Y) => {
                let q = Y.findIndex((we) => we.id === B.id);
                return q !== -1
                  ? [...Y.slice(0, q), { ...Y[q], ...B }, ...Y.slice(q + 1)]
                  : [B, ...Y];
              });
            });
          });
        }),
      []
    ),
    D.useEffect(() => {
      if (c !== "system") {
        z(c);
        return;
      }
      if (
        (c === "system" &&
          (window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
            ? z("dark")
            : z("light")),
        typeof window > "u")
      )
        return;
      let B = window.matchMedia("(prefers-color-scheme: dark)");
      try {
        B.addEventListener("change", ({ matches: Y }) => {
          z(Y ? "dark" : "light");
        });
      } catch {
        B.addListener(({ matches: q }) => {
          try {
            z(q ? "dark" : "light");
          } catch (we) {
            console.error(we);
          }
        });
      }
    }, [c]),
    D.useEffect(() => {
      C.length <= 1 && O(!1);
    }, [C]),
    D.useEffect(() => {
      let B = (Y) => {
        var q, we;
        i.every((Le) => Y[Le] || Y.code === Le) &&
          (O(!0), (q = H.current) == null || q.focus()),
          Y.code === "Escape" &&
            (document.activeElement === H.current ||
              ((we = H.current) != null &&
                we.contains(document.activeElement))) &&
            O(!1);
      };
      return (
        document.addEventListener("keydown", B),
        () => document.removeEventListener("keydown", B)
      );
    }, [i]),
    D.useEffect(() => {
      if (H.current)
        return () => {
          A.current &&
            (A.current.focus({ preventScroll: !0 }),
            (A.current = null),
            (I.current = !1));
        };
    }, [H.current]),
    D.createElement(
      "section",
      {
        ref: t,
        "aria-label": `${b} ${P}`,
        tabIndex: -1,
        "aria-live": "polite",
        "aria-relevant": "additions text",
        "aria-atomic": "false",
        suppressHydrationWarning: !0,
      },
      k.map((B, Y) => {
        var q;
        let [we, Le] = B.split("-");
        return C.length
          ? D.createElement(
              "ol",
              {
                key: B,
                dir: w === "auto" ? Lp() : w,
                tabIndex: -1,
                ref: H,
                className: a,
                "data-sonner-toaster": !0,
                "data-theme": W,
                "data-y-position": we,
                "data-lifted": F && C.length > 1 && !o,
                "data-x-position": Le,
                style: {
                  "--front-toast-height": `${
                    ((q = M[0]) == null ? void 0 : q.height) || 0
                  }px`,
                  "--width": `${xC}px`,
                  "--gap": `${g}px`,
                  ...h,
                  ...TC(l, u),
                },
                onBlur: (te) => {
                  I.current &&
                    !te.currentTarget.contains(te.relatedTarget) &&
                    ((I.current = !1),
                    A.current &&
                      (A.current.focus({ preventScroll: !0 }),
                      (A.current = null)));
                },
                onFocus: (te) => {
                  (te.target instanceof HTMLElement &&
                    te.target.dataset.dismissible === "false") ||
                    I.current ||
                    ((I.current = !0), (A.current = te.relatedTarget));
                },
                onMouseEnter: () => O(!0),
                onMouseMove: () => O(!0),
                onMouseLeave: () => {
                  U || O(!1);
                },
                onDragEnd: () => O(!1),
                onPointerDown: (te) => {
                  (te.target instanceof HTMLElement &&
                    te.target.dataset.dismissible === "false") ||
                    L(!0);
                },
                onPointerUp: () => L(!1),
              },
              C.filter(
                (te) => (!te.position && Y === 0) || te.position === B
              ).map((te, Kr) => {
                var bn, mr;
                return D.createElement(CC, {
                  key: te.id,
                  icons: v,
                  index: Kr,
                  toast: te,
                  defaultRichColors: d,
                  duration:
                    (bn = y == null ? void 0 : y.duration) != null ? bn : f,
                  className: y == null ? void 0 : y.className,
                  descriptionClassName:
                    y == null ? void 0 : y.descriptionClassName,
                  invert: n,
                  visibleToasts: x,
                  closeButton:
                    (mr = y == null ? void 0 : y.closeButton) != null ? mr : s,
                  interacting: U,
                  position: B,
                  style: y == null ? void 0 : y.style,
                  unstyled: y == null ? void 0 : y.unstyled,
                  classNames: y == null ? void 0 : y.classNames,
                  cancelButtonStyle: y == null ? void 0 : y.cancelButtonStyle,
                  actionButtonStyle: y == null ? void 0 : y.actionButtonStyle,
                  removeToast: $,
                  toasts: C.filter((En) => En.position == te.position),
                  heights: M.filter((En) => En.position == te.position),
                  setHeights: N,
                  expandByDefault: o,
                  gap: g,
                  loadingIcon: m,
                  expanded: F,
                  pauseWhenPageIsHidden: E,
                  swipeDirections: e.swipeDirections,
                });
              })
            )
          : null;
      })
    )
  );
});
const kC = ({ ...e }) => {
    const { theme: t = "system" } = JE();
    return p.jsx(PC, {
      theme: t,
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      },
      ...e,
    });
  },
  NC = 1,
  AC = 1e6;
let mu = 0;
function RC() {
  return (mu = (mu + 1) % Number.MAX_SAFE_INTEGER), mu.toString();
}
const gu = new Map(),
  Op = (e) => {
    if (gu.has(e)) return;
    const t = setTimeout(() => {
      gu.delete(e), No({ type: "REMOVE_TOAST", toastId: e });
    }, AC);
    gu.set(e, t);
  },
  jC = (e, t) => {
    switch (t.type) {
      case "ADD_TOAST":
        return { ...e, toasts: [t.toast, ...e.toasts].slice(0, NC) };
      case "UPDATE_TOAST":
        return {
          ...e,
          toasts: e.toasts.map((n) =>
            n.id === t.toast.id ? { ...n, ...t.toast } : n
          ),
        };
      case "DISMISS_TOAST": {
        const { toastId: n } = t;
        return (
          n
            ? Op(n)
            : e.toasts.forEach((r) => {
                Op(r.id);
              }),
          {
            ...e,
            toasts: e.toasts.map((r) =>
              r.id === n || n === void 0 ? { ...r, open: !1 } : r
            ),
          }
        );
      }
      case "REMOVE_TOAST":
        return t.toastId === void 0
          ? { ...e, toasts: [] }
          : { ...e, toasts: e.toasts.filter((n) => n.id !== t.toastId) };
    }
  },
  aa = [];
let la = { toasts: [] };
function No(e) {
  (la = jC(la, e)),
    aa.forEach((t) => {
      t(la);
    });
}
function MC({ ...e }) {
  const t = RC(),
    n = (i) => No({ type: "UPDATE_TOAST", toast: { ...i, id: t } }),
    r = () => No({ type: "DISMISS_TOAST", toastId: t });
  return (
    No({
      type: "ADD_TOAST",
      toast: {
        ...e,
        id: t,
        open: !0,
        onOpenChange: (i) => {
          i || r();
        },
      },
    }),
    { id: t, dismiss: r, update: n }
  );
}
function DC() {
  const [e, t] = S.useState(la);
  return (
    S.useEffect(
      () => (
        aa.push(t),
        () => {
          const n = aa.indexOf(t);
          n > -1 && aa.splice(n, 1);
        }
      ),
      [e]
    ),
    {
      ...e,
      toast: MC,
      dismiss: (n) => No({ type: "DISMISS_TOAST", toastId: n }),
    }
  );
}
function Te(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function (i) {
    if ((e == null || e(i), n === !1 || !i.defaultPrevented))
      return t == null ? void 0 : t(i);
  };
}
function Ip(e, t) {
  if (typeof e == "function") return e(t);
  e != null && (e.current = t);
}
function r0(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((i) => {
      const o = Ip(i, t);
      return !n && typeof o == "function" && (n = !0), o;
    });
    if (n)
      return () => {
        for (let i = 0; i < r.length; i++) {
          const o = r[i];
          typeof o == "function" ? o() : Ip(e[i], null);
        }
      };
  };
}
function Bt(...e) {
  return S.useCallback(r0(...e), e);
}
function Cl(e, t = []) {
  let n = [];
  function r(o, s) {
    const a = S.createContext(s),
      l = n.length;
    n = [...n, s];
    const u = (d) => {
      var g;
      const { scope: f, children: h, ...x } = d,
        y = ((g = f == null ? void 0 : f[e]) == null ? void 0 : g[l]) || a,
        w = S.useMemo(() => x, Object.values(x));
      return p.jsx(y.Provider, { value: w, children: h });
    };
    u.displayName = o + "Provider";
    function c(d, f) {
      var y;
      const h = ((y = f == null ? void 0 : f[e]) == null ? void 0 : y[l]) || a,
        x = S.useContext(h);
      if (x) return x;
      if (s !== void 0) return s;
      throw new Error(`\`${d}\` must be used within \`${o}\``);
    }
    return [u, c];
  }
  const i = () => {
    const o = n.map((s) => S.createContext(s));
    return function (a) {
      const l = (a == null ? void 0 : a[e]) || o;
      return S.useMemo(() => ({ [`__scope${e}`]: { ...a, [e]: l } }), [a, l]);
    };
  };
  return (i.scopeName = e), [r, LC(i, ...t)];
}
function LC(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((i) => ({ useScope: i(), scopeName: i.scopeName }));
    return function (o) {
      const s = r.reduce((a, { useScope: l, scopeName: u }) => {
        const d = l(o)[`__scope${u}`];
        return { ...a, ...d };
      }, {});
      return S.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    };
  };
  return (n.scopeName = t.scopeName), n;
}
function Fc(e) {
  const t = OC(e),
    n = S.forwardRef((r, i) => {
      const { children: o, ...s } = r,
        a = S.Children.toArray(o),
        l = a.find(FC);
      if (l) {
        const u = l.props.children,
          c = a.map((d) =>
            d === l
              ? S.Children.count(u) > 1
                ? S.Children.only(null)
                : S.isValidElement(u)
                ? u.props.children
                : null
              : d
          );
        return p.jsx(t, {
          ...s,
          ref: i,
          children: S.isValidElement(u) ? S.cloneElement(u, void 0, c) : null,
        });
      }
      return p.jsx(t, { ...s, ref: i, children: o });
    });
  return (n.displayName = `${e}.Slot`), n;
}
function OC(e) {
  const t = S.forwardRef((n, r) => {
    const { children: i, ...o } = n;
    if (S.isValidElement(i)) {
      const s = _C(i),
        a = VC(o, i.props);
      return (
        i.type !== S.Fragment && (a.ref = r ? r0(r, s) : s),
        S.cloneElement(i, a)
      );
    }
    return S.Children.count(i) > 1 ? S.Children.only(null) : null;
  });
  return (t.displayName = `${e}.SlotClone`), t;
}
var i0 = Symbol("radix.slottable");
function IC(e) {
  const t = ({ children: n }) => p.jsx(p.Fragment, { children: n });
  return (t.displayName = `${e}.Slottable`), (t.__radixId = i0), t;
}
function FC(e) {
  return (
    S.isValidElement(e) &&
    typeof e.type == "function" &&
    "__radixId" in e.type &&
    e.type.__radixId === i0
  );
}
function VC(e, t) {
  const n = { ...t };
  for (const r in t) {
    const i = e[r],
      o = t[r];
    /^on[A-Z]/.test(r)
      ? i && o
        ? (n[r] = (...a) => {
            const l = o(...a);
            return i(...a), l;
          })
        : i && (n[r] = i)
      : r === "style"
      ? (n[r] = { ...i, ...o })
      : r === "className" && (n[r] = [i, o].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function _C(e) {
  var r, i;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (i = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : i.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
function zC(e) {
  const t = e + "CollectionProvider",
    [n, r] = Cl(t),
    [i, o] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
    s = (y) => {
      const { scope: w, children: g } = y,
        m = D.useRef(null),
        v = D.useRef(new Map()).current;
      return p.jsx(i, { scope: w, itemMap: v, collectionRef: m, children: g });
    };
  s.displayName = t;
  const a = e + "CollectionSlot",
    l = Fc(a),
    u = D.forwardRef((y, w) => {
      const { scope: g, children: m } = y,
        v = o(a, g),
        b = Bt(w, v.collectionRef);
      return p.jsx(l, { ref: b, children: m });
    });
  u.displayName = a;
  const c = e + "CollectionItemSlot",
    d = "data-radix-collection-item",
    f = Fc(c),
    h = D.forwardRef((y, w) => {
      const { scope: g, children: m, ...v } = y,
        b = D.useRef(null),
        E = Bt(w, b),
        C = o(c, g);
      return (
        D.useEffect(
          () => (
            C.itemMap.set(b, { ref: b, ...v }), () => void C.itemMap.delete(b)
          )
        ),
        p.jsx(f, { [d]: "", ref: E, children: m })
      );
    });
  h.displayName = c;
  function x(y) {
    const w = o(e + "CollectionConsumer", y);
    return D.useCallback(() => {
      const m = w.collectionRef.current;
      if (!m) return [];
      const v = Array.from(m.querySelectorAll(`[${d}]`));
      return Array.from(w.itemMap.values()).sort(
        (C, T) => v.indexOf(C.ref.current) - v.indexOf(T.ref.current)
      );
    }, [w.collectionRef, w.itemMap]);
  }
  return [{ Provider: s, Slot: u, ItemSlot: h }, x, r];
}
var BC = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul",
  ],
  it = BC.reduce((e, t) => {
    const n = Fc(`Primitive.${t}`),
      r = S.forwardRef((i, o) => {
        const { asChild: s, ...a } = i,
          l = s ? n : t;
        return (
          typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
          p.jsx(l, { ...a, ref: o })
        );
      });
    return (r.displayName = `Primitive.${t}`), { ...e, [t]: r };
  }, {});
function o0(e, t) {
  e && fs.flushSync(() => e.dispatchEvent(t));
}
function rr(e) {
  const t = S.useRef(e);
  return (
    S.useEffect(() => {
      t.current = e;
    }),
    S.useMemo(
      () =>
        (...n) => {
          var r;
          return (r = t.current) == null ? void 0 : r.call(t, ...n);
        },
      []
    )
  );
}
function $C(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = rr(e);
  S.useEffect(() => {
    const r = (i) => {
      i.key === "Escape" && n(i);
    };
    return (
      t.addEventListener("keydown", r, { capture: !0 }),
      () => t.removeEventListener("keydown", r, { capture: !0 })
    );
  }, [n, t]);
}
var UC = "DismissableLayer",
  Vc = "dismissableLayer.update",
  WC = "dismissableLayer.pointerDownOutside",
  HC = "dismissableLayer.focusOutside",
  Fp,
  s0 = S.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  mf = S.forwardRef((e, t) => {
    const {
        disableOutsidePointerEvents: n = !1,
        onEscapeKeyDown: r,
        onPointerDownOutside: i,
        onFocusOutside: o,
        onInteractOutside: s,
        onDismiss: a,
        ...l
      } = e,
      u = S.useContext(s0),
      [c, d] = S.useState(null),
      f =
        (c == null ? void 0 : c.ownerDocument) ??
        (globalThis == null ? void 0 : globalThis.document),
      [, h] = S.useState({}),
      x = Bt(t, (T) => d(T)),
      y = Array.from(u.layers),
      [w] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1),
      g = y.indexOf(w),
      m = c ? y.indexOf(c) : -1,
      v = u.layersWithOutsidePointerEventsDisabled.size > 0,
      b = m >= g,
      E = GC((T) => {
        const k = T.target,
          M = [...u.branches].some((N) => N.contains(k));
        !b ||
          M ||
          (i == null || i(T),
          s == null || s(T),
          T.defaultPrevented || a == null || a());
      }, f),
      C = QC((T) => {
        const k = T.target;
        [...u.branches].some((N) => N.contains(k)) ||
          (o == null || o(T),
          s == null || s(T),
          T.defaultPrevented || a == null || a());
      }, f);
    return (
      $C((T) => {
        m === u.layers.size - 1 &&
          (r == null || r(T),
          !T.defaultPrevented && a && (T.preventDefault(), a()));
      }, f),
      S.useEffect(() => {
        if (c)
          return (
            n &&
              (u.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((Fp = f.body.style.pointerEvents),
                (f.body.style.pointerEvents = "none")),
              u.layersWithOutsidePointerEventsDisabled.add(c)),
            u.layers.add(c),
            Vp(),
            () => {
              n &&
                u.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (f.body.style.pointerEvents = Fp);
            }
          );
      }, [c, f, n, u]),
      S.useEffect(
        () => () => {
          c &&
            (u.layers.delete(c),
            u.layersWithOutsidePointerEventsDisabled.delete(c),
            Vp());
        },
        [c, u]
      ),
      S.useEffect(() => {
        const T = () => h({});
        return (
          document.addEventListener(Vc, T),
          () => document.removeEventListener(Vc, T)
        );
      }, []),
      p.jsx(it.div, {
        ...l,
        ref: x,
        style: {
          pointerEvents: v ? (b ? "auto" : "none") : void 0,
          ...e.style,
        },
        onFocusCapture: Te(e.onFocusCapture, C.onFocusCapture),
        onBlurCapture: Te(e.onBlurCapture, C.onBlurCapture),
        onPointerDownCapture: Te(
          e.onPointerDownCapture,
          E.onPointerDownCapture
        ),
      })
    );
  });
mf.displayName = UC;
var KC = "DismissableLayerBranch",
  a0 = S.forwardRef((e, t) => {
    const n = S.useContext(s0),
      r = S.useRef(null),
      i = Bt(t, r);
    return (
      S.useEffect(() => {
        const o = r.current;
        if (o)
          return (
            n.branches.add(o),
            () => {
              n.branches.delete(o);
            }
          );
      }, [n.branches]),
      p.jsx(it.div, { ...e, ref: i })
    );
  });
a0.displayName = KC;
function GC(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = rr(e),
    r = S.useRef(!1),
    i = S.useRef(() => {});
  return (
    S.useEffect(() => {
      const o = (a) => {
          if (a.target && !r.current) {
            let l = function () {
              l0(WC, n, u, { discrete: !0 });
            };
            const u = { originalEvent: a };
            a.pointerType === "touch"
              ? (t.removeEventListener("click", i.current),
                (i.current = l),
                t.addEventListener("click", i.current, { once: !0 }))
              : l();
          } else t.removeEventListener("click", i.current);
          r.current = !1;
        },
        s = window.setTimeout(() => {
          t.addEventListener("pointerdown", o);
        }, 0);
      return () => {
        window.clearTimeout(s),
          t.removeEventListener("pointerdown", o),
          t.removeEventListener("click", i.current);
      };
    }, [t, n]),
    { onPointerDownCapture: () => (r.current = !0) }
  );
}
function QC(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = rr(e),
    r = S.useRef(!1);
  return (
    S.useEffect(() => {
      const i = (o) => {
        o.target &&
          !r.current &&
          l0(HC, n, { originalEvent: o }, { discrete: !1 });
      };
      return (
        t.addEventListener("focusin", i),
        () => t.removeEventListener("focusin", i)
      );
    }, [t, n]),
    {
      onFocusCapture: () => (r.current = !0),
      onBlurCapture: () => (r.current = !1),
    }
  );
}
function Vp() {
  const e = new CustomEvent(Vc);
  document.dispatchEvent(e);
}
function l0(e, t, n, { discrete: r }) {
  const i = n.originalEvent.target,
    o = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && i.addEventListener(e, t, { once: !0 }),
    r ? o0(i, o) : i.dispatchEvent(o);
}
var YC = mf,
  XC = a0,
  ir = globalThis != null && globalThis.document ? S.useLayoutEffect : () => {},
  qC = "Portal",
  u0 = S.forwardRef((e, t) => {
    var a;
    const { container: n, ...r } = e,
      [i, o] = S.useState(!1);
    ir(() => o(!0), []);
    const s =
      n ||
      (i &&
        ((a = globalThis == null ? void 0 : globalThis.document) == null
          ? void 0
          : a.body));
    return s ? _v.createPortal(p.jsx(it.div, { ...r, ref: t }), s) : null;
  });
u0.displayName = qC;
function ZC(e, t) {
  return S.useReducer((n, r) => t[n][r] ?? n, e);
}
var gf = (e) => {
  const { present: t, children: n } = e,
    r = JC(t),
    i =
      typeof n == "function" ? n({ present: r.isPresent }) : S.Children.only(n),
    o = Bt(r.ref, eT(i));
  return typeof n == "function" || r.isPresent
    ? S.cloneElement(i, { ref: o })
    : null;
};
gf.displayName = "Presence";
function JC(e) {
  const [t, n] = S.useState(),
    r = S.useRef(null),
    i = S.useRef(e),
    o = S.useRef("none"),
    s = e ? "mounted" : "unmounted",
    [a, l] = ZC(s, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    S.useEffect(() => {
      const u = $s(r.current);
      o.current = a === "mounted" ? u : "none";
    }, [a]),
    ir(() => {
      const u = r.current,
        c = i.current;
      if (c !== e) {
        const f = o.current,
          h = $s(u);
        e
          ? l("MOUNT")
          : h === "none" || (u == null ? void 0 : u.display) === "none"
          ? l("UNMOUNT")
          : l(c && f !== h ? "ANIMATION_OUT" : "UNMOUNT"),
          (i.current = e);
      }
    }, [e, l]),
    ir(() => {
      if (t) {
        let u;
        const c = t.ownerDocument.defaultView ?? window,
          d = (h) => {
            const y = $s(r.current).includes(h.animationName);
            if (h.target === t && y && (l("ANIMATION_END"), !i.current)) {
              const w = t.style.animationFillMode;
              (t.style.animationFillMode = "forwards"),
                (u = c.setTimeout(() => {
                  t.style.animationFillMode === "forwards" &&
                    (t.style.animationFillMode = w);
                }));
            }
          },
          f = (h) => {
            h.target === t && (o.current = $s(r.current));
          };
        return (
          t.addEventListener("animationstart", f),
          t.addEventListener("animationcancel", d),
          t.addEventListener("animationend", d),
          () => {
            c.clearTimeout(u),
              t.removeEventListener("animationstart", f),
              t.removeEventListener("animationcancel", d),
              t.removeEventListener("animationend", d);
          }
        );
      } else l("ANIMATION_END");
    }, [t, l]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(a),
      ref: S.useCallback((u) => {
        (r.current = u ? getComputedStyle(u) : null), n(u);
      }, []),
    }
  );
}
function $s(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function eT(e) {
  var r, i;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (i = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : i.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
var tT = Ig[" useInsertionEffect ".trim().toString()] || ir;
function nT({ prop: e, defaultProp: t, onChange: n = () => {}, caller: r }) {
  const [i, o, s] = rT({ defaultProp: t, onChange: n }),
    a = e !== void 0,
    l = a ? e : i;
  {
    const c = S.useRef(e !== void 0);
    S.useEffect(() => {
      const d = c.current;
      d !== a &&
        console.warn(
          `${r} is changing from ${d ? "controlled" : "uncontrolled"} to ${
            a ? "controlled" : "uncontrolled"
          }. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
        ),
        (c.current = a);
    }, [a, r]);
  }
  const u = S.useCallback(
    (c) => {
      var d;
      if (a) {
        const f = iT(c) ? c(e) : c;
        f !== e && ((d = s.current) == null || d.call(s, f));
      } else o(c);
    },
    [a, e, o, s]
  );
  return [l, u];
}
function rT({ defaultProp: e, onChange: t }) {
  const [n, r] = S.useState(e),
    i = S.useRef(n),
    o = S.useRef(t);
  return (
    tT(() => {
      o.current = t;
    }, [t]),
    S.useEffect(() => {
      var s;
      i.current !== n &&
        ((s = o.current) == null || s.call(o, n), (i.current = n));
    }, [n, i]),
    [n, r, o]
  );
}
function iT(e) {
  return typeof e == "function";
}
var oT = Object.freeze({
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal",
  }),
  sT = "VisuallyHidden",
  Tl = S.forwardRef((e, t) =>
    p.jsx(it.span, { ...e, ref: t, style: { ...oT, ...e.style } })
  );
Tl.displayName = sT;
var aT = Tl,
  yf = "ToastProvider",
  [vf, lT, uT] = zC("Toast"),
  [c0, gM] = Cl("Toast", [uT]),
  [cT, Pl] = c0(yf),
  d0 = (e) => {
    const {
        __scopeToast: t,
        label: n = "Notification",
        duration: r = 5e3,
        swipeDirection: i = "right",
        swipeThreshold: o = 50,
        children: s,
      } = e,
      [a, l] = S.useState(null),
      [u, c] = S.useState(0),
      d = S.useRef(!1),
      f = S.useRef(!1);
    return (
      n.trim() ||
        console.error(
          `Invalid prop \`label\` supplied to \`${yf}\`. Expected non-empty \`string\`.`
        ),
      p.jsx(vf.Provider, {
        scope: t,
        children: p.jsx(cT, {
          scope: t,
          label: n,
          duration: r,
          swipeDirection: i,
          swipeThreshold: o,
          toastCount: u,
          viewport: a,
          onViewportChange: l,
          onToastAdd: S.useCallback(() => c((h) => h + 1), []),
          onToastRemove: S.useCallback(() => c((h) => h - 1), []),
          isFocusedToastEscapeKeyDownRef: d,
          isClosePausedRef: f,
          children: s,
        }),
      })
    );
  };
d0.displayName = yf;
var f0 = "ToastViewport",
  dT = ["F8"],
  _c = "toast.viewportPause",
  zc = "toast.viewportResume",
  h0 = S.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        hotkey: r = dT,
        label: i = "Notifications ({hotkey})",
        ...o
      } = e,
      s = Pl(f0, n),
      a = lT(n),
      l = S.useRef(null),
      u = S.useRef(null),
      c = S.useRef(null),
      d = S.useRef(null),
      f = Bt(t, d, s.onViewportChange),
      h = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
      x = s.toastCount > 0;
    S.useEffect(() => {
      const w = (g) => {
        var v;
        r.length !== 0 &&
          r.every((b) => g[b] || g.code === b) &&
          ((v = d.current) == null || v.focus());
      };
      return (
        document.addEventListener("keydown", w),
        () => document.removeEventListener("keydown", w)
      );
    }, [r]),
      S.useEffect(() => {
        const w = l.current,
          g = d.current;
        if (x && w && g) {
          const m = () => {
              if (!s.isClosePausedRef.current) {
                const C = new CustomEvent(_c);
                g.dispatchEvent(C), (s.isClosePausedRef.current = !0);
              }
            },
            v = () => {
              if (s.isClosePausedRef.current) {
                const C = new CustomEvent(zc);
                g.dispatchEvent(C), (s.isClosePausedRef.current = !1);
              }
            },
            b = (C) => {
              !w.contains(C.relatedTarget) && v();
            },
            E = () => {
              w.contains(document.activeElement) || v();
            };
          return (
            w.addEventListener("focusin", m),
            w.addEventListener("focusout", b),
            w.addEventListener("pointermove", m),
            w.addEventListener("pointerleave", E),
            window.addEventListener("blur", m),
            window.addEventListener("focus", v),
            () => {
              w.removeEventListener("focusin", m),
                w.removeEventListener("focusout", b),
                w.removeEventListener("pointermove", m),
                w.removeEventListener("pointerleave", E),
                window.removeEventListener("blur", m),
                window.removeEventListener("focus", v);
            }
          );
        }
      }, [x, s.isClosePausedRef]);
    const y = S.useCallback(
      ({ tabbingDirection: w }) => {
        const m = a().map((v) => {
          const b = v.ref.current,
            E = [b, ...CT(b)];
          return w === "forwards" ? E : E.reverse();
        });
        return (w === "forwards" ? m.reverse() : m).flat();
      },
      [a]
    );
    return (
      S.useEffect(() => {
        const w = d.current;
        if (w) {
          const g = (m) => {
            var E, C, T;
            const v = m.altKey || m.ctrlKey || m.metaKey;
            if (m.key === "Tab" && !v) {
              const k = document.activeElement,
                M = m.shiftKey;
              if (m.target === w && M) {
                (E = u.current) == null || E.focus();
                return;
              }
              const O = y({ tabbingDirection: M ? "backwards" : "forwards" }),
                U = O.findIndex((L) => L === k);
              yu(O.slice(U + 1))
                ? m.preventDefault()
                : M
                ? (C = u.current) == null || C.focus()
                : (T = c.current) == null || T.focus();
            }
          };
          return (
            w.addEventListener("keydown", g),
            () => w.removeEventListener("keydown", g)
          );
        }
      }, [a, y]),
      p.jsxs(XC, {
        ref: l,
        role: "region",
        "aria-label": i.replace("{hotkey}", h),
        tabIndex: -1,
        style: { pointerEvents: x ? void 0 : "none" },
        children: [
          x &&
            p.jsx(Bc, {
              ref: u,
              onFocusFromOutsideViewport: () => {
                const w = y({ tabbingDirection: "forwards" });
                yu(w);
              },
            }),
          p.jsx(vf.Slot, {
            scope: n,
            children: p.jsx(it.ol, { tabIndex: -1, ...o, ref: f }),
          }),
          x &&
            p.jsx(Bc, {
              ref: c,
              onFocusFromOutsideViewport: () => {
                const w = y({ tabbingDirection: "backwards" });
                yu(w);
              },
            }),
        ],
      })
    );
  });
h0.displayName = f0;
var p0 = "ToastFocusProxy",
  Bc = S.forwardRef((e, t) => {
    const { __scopeToast: n, onFocusFromOutsideViewport: r, ...i } = e,
      o = Pl(p0, n);
    return p.jsx(Tl, {
      "aria-hidden": !0,
      tabIndex: 0,
      ...i,
      ref: t,
      style: { position: "fixed" },
      onFocus: (s) => {
        var u;
        const a = s.relatedTarget;
        !((u = o.viewport) != null && u.contains(a)) && r();
      },
    });
  });
Bc.displayName = p0;
var hs = "Toast",
  fT = "toast.swipeStart",
  hT = "toast.swipeMove",
  pT = "toast.swipeCancel",
  mT = "toast.swipeEnd",
  m0 = S.forwardRef((e, t) => {
    const { forceMount: n, open: r, defaultOpen: i, onOpenChange: o, ...s } = e,
      [a, l] = nT({ prop: r, defaultProp: i ?? !0, onChange: o, caller: hs });
    return p.jsx(gf, {
      present: n || a,
      children: p.jsx(vT, {
        open: a,
        ...s,
        ref: t,
        onClose: () => l(!1),
        onPause: rr(e.onPause),
        onResume: rr(e.onResume),
        onSwipeStart: Te(e.onSwipeStart, (u) => {
          u.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: Te(e.onSwipeMove, (u) => {
          const { x: c, y: d } = u.detail.delta;
          u.currentTarget.setAttribute("data-swipe", "move"),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-x",
              `${c}px`
            ),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-y",
              `${d}px`
            );
        }),
        onSwipeCancel: Te(e.onSwipeCancel, (u) => {
          u.currentTarget.setAttribute("data-swipe", "cancel"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
        }),
        onSwipeEnd: Te(e.onSwipeEnd, (u) => {
          const { x: c, y: d } = u.detail.delta;
          u.currentTarget.setAttribute("data-swipe", "end"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-x",
              `${c}px`
            ),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-y",
              `${d}px`
            ),
            l(!1);
        }),
      }),
    });
  });
m0.displayName = hs;
var [gT, yT] = c0(hs, { onClose() {} }),
  vT = S.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        type: r = "foreground",
        duration: i,
        open: o,
        onClose: s,
        onEscapeKeyDown: a,
        onPause: l,
        onResume: u,
        onSwipeStart: c,
        onSwipeMove: d,
        onSwipeCancel: f,
        onSwipeEnd: h,
        ...x
      } = e,
      y = Pl(hs, n),
      [w, g] = S.useState(null),
      m = Bt(t, (L) => g(L)),
      v = S.useRef(null),
      b = S.useRef(null),
      E = i || y.duration,
      C = S.useRef(0),
      T = S.useRef(E),
      k = S.useRef(0),
      { onToastAdd: M, onToastRemove: N } = y,
      F = rr(() => {
        var W;
        (w == null ? void 0 : w.contains(document.activeElement)) &&
          ((W = y.viewport) == null || W.focus()),
          s();
      }),
      O = S.useCallback(
        (L) => {
          !L ||
            L === 1 / 0 ||
            (window.clearTimeout(k.current),
            (C.current = new Date().getTime()),
            (k.current = window.setTimeout(F, L)));
        },
        [F]
      );
    S.useEffect(() => {
      const L = y.viewport;
      if (L) {
        const W = () => {
            O(T.current), u == null || u();
          },
          z = () => {
            const H = new Date().getTime() - C.current;
            (T.current = T.current - H),
              window.clearTimeout(k.current),
              l == null || l();
          };
        return (
          L.addEventListener(_c, z),
          L.addEventListener(zc, W),
          () => {
            L.removeEventListener(_c, z), L.removeEventListener(zc, W);
          }
        );
      }
    }, [y.viewport, E, l, u, O]),
      S.useEffect(() => {
        o && !y.isClosePausedRef.current && O(E);
      }, [o, E, y.isClosePausedRef, O]),
      S.useEffect(() => (M(), () => N()), [M, N]);
    const U = S.useMemo(() => (w ? b0(w) : null), [w]);
    return y.viewport
      ? p.jsxs(p.Fragment, {
          children: [
            U &&
              p.jsx(xT, {
                __scopeToast: n,
                role: "status",
                "aria-live": r === "foreground" ? "assertive" : "polite",
                "aria-atomic": !0,
                children: U,
              }),
            p.jsx(gT, {
              scope: n,
              onClose: F,
              children: fs.createPortal(
                p.jsx(vf.ItemSlot, {
                  scope: n,
                  children: p.jsx(YC, {
                    asChild: !0,
                    onEscapeKeyDown: Te(a, () => {
                      y.isFocusedToastEscapeKeyDownRef.current || F(),
                        (y.isFocusedToastEscapeKeyDownRef.current = !1);
                    }),
                    children: p.jsx(it.li, {
                      role: "status",
                      "aria-live": "off",
                      "aria-atomic": !0,
                      tabIndex: 0,
                      "data-state": o ? "open" : "closed",
                      "data-swipe-direction": y.swipeDirection,
                      ...x,
                      ref: m,
                      style: {
                        userSelect: "none",
                        touchAction: "none",
                        ...e.style,
                      },
                      onKeyDown: Te(e.onKeyDown, (L) => {
                        L.key === "Escape" &&
                          (a == null || a(L.nativeEvent),
                          L.nativeEvent.defaultPrevented ||
                            ((y.isFocusedToastEscapeKeyDownRef.current = !0),
                            F()));
                      }),
                      onPointerDown: Te(e.onPointerDown, (L) => {
                        L.button === 0 &&
                          (v.current = { x: L.clientX, y: L.clientY });
                      }),
                      onPointerMove: Te(e.onPointerMove, (L) => {
                        if (!v.current) return;
                        const W = L.clientX - v.current.x,
                          z = L.clientY - v.current.y,
                          H = !!b.current,
                          P = ["left", "right"].includes(y.swipeDirection),
                          A = ["left", "up"].includes(y.swipeDirection)
                            ? Math.min
                            : Math.max,
                          I = P ? A(0, W) : 0,
                          $ = P ? 0 : A(0, z),
                          B = L.pointerType === "touch" ? 10 : 2,
                          Y = { x: I, y: $ },
                          q = { originalEvent: L, delta: Y };
                        H
                          ? ((b.current = Y), Us(hT, d, q, { discrete: !1 }))
                          : _p(Y, y.swipeDirection, B)
                          ? ((b.current = Y),
                            Us(fT, c, q, { discrete: !1 }),
                            L.target.setPointerCapture(L.pointerId))
                          : (Math.abs(W) > B || Math.abs(z) > B) &&
                            (v.current = null);
                      }),
                      onPointerUp: Te(e.onPointerUp, (L) => {
                        const W = b.current,
                          z = L.target;
                        if (
                          (z.hasPointerCapture(L.pointerId) &&
                            z.releasePointerCapture(L.pointerId),
                          (b.current = null),
                          (v.current = null),
                          W)
                        ) {
                          const H = L.currentTarget,
                            P = { originalEvent: L, delta: W };
                          _p(W, y.swipeDirection, y.swipeThreshold)
                            ? Us(mT, h, P, { discrete: !0 })
                            : Us(pT, f, P, { discrete: !0 }),
                            H.addEventListener(
                              "click",
                              (A) => A.preventDefault(),
                              { once: !0 }
                            );
                        }
                      }),
                    }),
                  }),
                }),
                y.viewport
              ),
            }),
          ],
        })
      : null;
  }),
  xT = (e) => {
    const { __scopeToast: t, children: n, ...r } = e,
      i = Pl(hs, t),
      [o, s] = S.useState(!1),
      [a, l] = S.useState(!1);
    return (
      bT(() => s(!0)),
      S.useEffect(() => {
        const u = window.setTimeout(() => l(!0), 1e3);
        return () => window.clearTimeout(u);
      }, []),
      a
        ? null
        : p.jsx(u0, {
            asChild: !0,
            children: p.jsx(Tl, {
              ...r,
              children:
                o && p.jsxs(p.Fragment, { children: [i.label, " ", n] }),
            }),
          })
    );
  },
  wT = "ToastTitle",
  g0 = S.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e;
    return p.jsx(it.div, { ...r, ref: t });
  });
g0.displayName = wT;
var ST = "ToastDescription",
  y0 = S.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e;
    return p.jsx(it.div, { ...r, ref: t });
  });
y0.displayName = ST;
var v0 = "ToastAction",
  x0 = S.forwardRef((e, t) => {
    const { altText: n, ...r } = e;
    return n.trim()
      ? p.jsx(S0, {
          altText: n,
          asChild: !0,
          children: p.jsx(xf, { ...r, ref: t }),
        })
      : (console.error(
          `Invalid prop \`altText\` supplied to \`${v0}\`. Expected non-empty \`string\`.`
        ),
        null);
  });
x0.displayName = v0;
var w0 = "ToastClose",
  xf = S.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e,
      i = yT(w0, n);
    return p.jsx(S0, {
      asChild: !0,
      children: p.jsx(it.button, {
        type: "button",
        ...r,
        ref: t,
        onClick: Te(e.onClick, i.onClose),
      }),
    });
  });
xf.displayName = w0;
var S0 = S.forwardRef((e, t) => {
  const { __scopeToast: n, altText: r, ...i } = e;
  return p.jsx(it.div, {
    "data-radix-toast-announce-exclude": "",
    "data-radix-toast-announce-alt": r || void 0,
    ...i,
    ref: t,
  });
});
function b0(e) {
  const t = [];
  return (
    Array.from(e.childNodes).forEach((r) => {
      if (
        (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent),
        ET(r))
      ) {
        const i = r.ariaHidden || r.hidden || r.style.display === "none",
          o = r.dataset.radixToastAnnounceExclude === "";
        if (!i)
          if (o) {
            const s = r.dataset.radixToastAnnounceAlt;
            s && t.push(s);
          } else t.push(...b0(r));
      }
    }),
    t
  );
}
function Us(e, t, n, { discrete: r }) {
  const i = n.originalEvent.currentTarget,
    o = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: n });
  t && i.addEventListener(e, t, { once: !0 }),
    r ? o0(i, o) : i.dispatchEvent(o);
}
var _p = (e, t, n = 0) => {
  const r = Math.abs(e.x),
    i = Math.abs(e.y),
    o = r > i;
  return t === "left" || t === "right" ? o && r > n : !o && i > n;
};
function bT(e = () => {}) {
  const t = rr(e);
  ir(() => {
    let n = 0,
      r = 0;
    return (
      (n = window.requestAnimationFrame(
        () => (r = window.requestAnimationFrame(t))
      )),
      () => {
        window.cancelAnimationFrame(n), window.cancelAnimationFrame(r);
      }
    );
  }, [t]);
}
function ET(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function CT(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (r) => {
        const i = r.tagName === "INPUT" && r.type === "hidden";
        return r.disabled || r.hidden || i
          ? NodeFilter.FILTER_SKIP
          : r.tabIndex >= 0
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function yu(e) {
  const t = document.activeElement;
  return e.some((n) =>
    n === t ? !0 : (n.focus(), document.activeElement !== t)
  );
}
var TT = d0,
  E0 = h0,
  C0 = m0,
  T0 = g0,
  P0 = y0,
  k0 = x0,
  N0 = xf;
function A0(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var i = e.length;
      for (t = 0; t < i; t++)
        e[t] && (n = A0(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function R0() {
  for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++)
    (e = arguments[n]) && (t = A0(e)) && (r && (r += " "), (r += t));
  return r;
}
const zp = (e) => (typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e),
  Bp = R0,
  PT = (e, t) => (n) => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
      return Bp(
        e,
        n == null ? void 0 : n.class,
        n == null ? void 0 : n.className
      );
    const { variants: i, defaultVariants: o } = t,
      s = Object.keys(i).map((u) => {
        const c = n == null ? void 0 : n[u],
          d = o == null ? void 0 : o[u];
        if (c === null) return null;
        const f = zp(c) || zp(d);
        return i[u][f];
      }),
      a =
        n &&
        Object.entries(n).reduce((u, c) => {
          let [d, f] = c;
          return f === void 0 || (u[d] = f), u;
        }, {}),
      l =
        t == null || (r = t.compoundVariants) === null || r === void 0
          ? void 0
          : r.reduce((u, c) => {
              let { class: d, className: f, ...h } = c;
              return Object.entries(h).every((x) => {
                let [y, w] = x;
                return Array.isArray(w)
                  ? w.includes({ ...o, ...a }[y])
                  : { ...o, ...a }[y] === w;
              })
                ? [...u, d, f]
                : u;
            }, []);
    return Bp(
      e,
      s,
      l,
      n == null ? void 0 : n.class,
      n == null ? void 0 : n.className
    );
  };
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const kT = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  j0 = (...e) =>
    e
      .filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n)
      .join(" ")
      .trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var NT = {
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
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const AT = S.forwardRef(
  (
    {
      color: e = "currentColor",
      size: t = 24,
      strokeWidth: n = 2,
      absoluteStrokeWidth: r,
      className: i = "",
      children: o,
      iconNode: s,
      ...a
    },
    l
  ) =>
    S.createElement(
      "svg",
      {
        ref: l,
        ...NT,
        width: t,
        height: t,
        stroke: e,
        strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
        className: j0("lucide", i),
        ...a,
      },
      [
        ...s.map(([u, c]) => S.createElement(u, c)),
        ...(Array.isArray(o) ? o : [o]),
      ]
    )
);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const RT = (e, t) => {
  const n = S.forwardRef(({ className: r, ...i }, o) =>
    S.createElement(AT, {
      ref: o,
      iconNode: t,
      className: j0(`lucide-${kT(e)}`, r),
      ...i,
    })
  );
  return (n.displayName = `${e}`), n;
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const jT = RT("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  wf = "-",
  MT = (e) => {
    const t = LT(e),
      { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
    return {
      getClassGroupId: (s) => {
        const a = s.split(wf);
        return a[0] === "" && a.length !== 1 && a.shift(), M0(a, t) || DT(s);
      },
      getConflictingClassGroupIds: (s, a) => {
        const l = n[s] || [];
        return a && r[s] ? [...l, ...r[s]] : l;
      },
    };
  },
  M0 = (e, t) => {
    var s;
    if (e.length === 0) return t.classGroupId;
    const n = e[0],
      r = t.nextPart.get(n),
      i = r ? M0(e.slice(1), r) : void 0;
    if (i) return i;
    if (t.validators.length === 0) return;
    const o = e.join(wf);
    return (s = t.validators.find(({ validator: a }) => a(o))) == null
      ? void 0
      : s.classGroupId;
  },
  $p = /^\[(.+)\]$/,
  DT = (e) => {
    if ($p.test(e)) {
      const t = $p.exec(e)[1],
        n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
      if (n) return "arbitrary.." + n;
    }
  },
  LT = (e) => {
    const { theme: t, prefix: n } = e,
      r = { nextPart: new Map(), validators: [] };
    return (
      IT(Object.entries(e.classGroups), n).forEach(([o, s]) => {
        $c(s, r, o, t);
      }),
      r
    );
  },
  $c = (e, t, n, r) => {
    e.forEach((i) => {
      if (typeof i == "string") {
        const o = i === "" ? t : Up(t, i);
        o.classGroupId = n;
        return;
      }
      if (typeof i == "function") {
        if (OT(i)) {
          $c(i(r), t, n, r);
          return;
        }
        t.validators.push({ validator: i, classGroupId: n });
        return;
      }
      Object.entries(i).forEach(([o, s]) => {
        $c(s, Up(t, o), n, r);
      });
    });
  },
  Up = (e, t) => {
    let n = e;
    return (
      t.split(wf).forEach((r) => {
        n.nextPart.has(r) ||
          n.nextPart.set(r, { nextPart: new Map(), validators: [] }),
          (n = n.nextPart.get(r));
      }),
      n
    );
  },
  OT = (e) => e.isThemeGetter,
  IT = (e, t) =>
    t
      ? e.map(([n, r]) => {
          const i = r.map((o) =>
            typeof o == "string"
              ? t + o
              : typeof o == "object"
              ? Object.fromEntries(
                  Object.entries(o).map(([s, a]) => [t + s, a])
                )
              : o
          );
          return [n, i];
        })
      : e,
  FT = (e) => {
    if (e < 1) return { get: () => {}, set: () => {} };
    let t = 0,
      n = new Map(),
      r = new Map();
    const i = (o, s) => {
      n.set(o, s), t++, t > e && ((t = 0), (r = n), (n = new Map()));
    };
    return {
      get(o) {
        let s = n.get(o);
        if (s !== void 0) return s;
        if ((s = r.get(o)) !== void 0) return i(o, s), s;
      },
      set(o, s) {
        n.has(o) ? n.set(o, s) : i(o, s);
      },
    };
  },
  D0 = "!",
  VT = (e) => {
    const { separator: t, experimentalParseClassName: n } = e,
      r = t.length === 1,
      i = t[0],
      o = t.length,
      s = (a) => {
        const l = [];
        let u = 0,
          c = 0,
          d;
        for (let w = 0; w < a.length; w++) {
          let g = a[w];
          if (u === 0) {
            if (g === i && (r || a.slice(w, w + o) === t)) {
              l.push(a.slice(c, w)), (c = w + o);
              continue;
            }
            if (g === "/") {
              d = w;
              continue;
            }
          }
          g === "[" ? u++ : g === "]" && u--;
        }
        const f = l.length === 0 ? a : a.substring(c),
          h = f.startsWith(D0),
          x = h ? f.substring(1) : f,
          y = d && d > c ? d - c : void 0;
        return {
          modifiers: l,
          hasImportantModifier: h,
          baseClassName: x,
          maybePostfixModifierPosition: y,
        };
      };
    return n ? (a) => n({ className: a, parseClassName: s }) : s;
  },
  _T = (e) => {
    if (e.length <= 1) return e;
    const t = [];
    let n = [];
    return (
      e.forEach((r) => {
        r[0] === "[" ? (t.push(...n.sort(), r), (n = [])) : n.push(r);
      }),
      t.push(...n.sort()),
      t
    );
  },
  zT = (e) => ({ cache: FT(e.cacheSize), parseClassName: VT(e), ...MT(e) }),
  BT = /\s+/,
  $T = (e, t) => {
    const {
        parseClassName: n,
        getClassGroupId: r,
        getConflictingClassGroupIds: i,
      } = t,
      o = [],
      s = e.trim().split(BT);
    let a = "";
    for (let l = s.length - 1; l >= 0; l -= 1) {
      const u = s[l],
        {
          modifiers: c,
          hasImportantModifier: d,
          baseClassName: f,
          maybePostfixModifierPosition: h,
        } = n(u);
      let x = !!h,
        y = r(x ? f.substring(0, h) : f);
      if (!y) {
        if (!x) {
          a = u + (a.length > 0 ? " " + a : a);
          continue;
        }
        if (((y = r(f)), !y)) {
          a = u + (a.length > 0 ? " " + a : a);
          continue;
        }
        x = !1;
      }
      const w = _T(c).join(":"),
        g = d ? w + D0 : w,
        m = g + y;
      if (o.includes(m)) continue;
      o.push(m);
      const v = i(y, x);
      for (let b = 0; b < v.length; ++b) {
        const E = v[b];
        o.push(g + E);
      }
      a = u + (a.length > 0 ? " " + a : a);
    }
    return a;
  };
function UT() {
  let e = 0,
    t,
    n,
    r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = L0(t)) && (r && (r += " "), (r += n));
  return r;
}
const L0 = (e) => {
  if (typeof e == "string") return e;
  let t,
    n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = L0(e[r])) && (n && (n += " "), (n += t));
  return n;
};
function WT(e, ...t) {
  let n,
    r,
    i,
    o = s;
  function s(l) {
    const u = t.reduce((c, d) => d(c), e());
    return (n = zT(u)), (r = n.cache.get), (i = n.cache.set), (o = a), a(l);
  }
  function a(l) {
    const u = r(l);
    if (u) return u;
    const c = $T(l, n);
    return i(l, c), c;
  }
  return function () {
    return o(UT.apply(null, arguments));
  };
}
const se = (e) => {
    const t = (n) => n[e] || [];
    return (t.isThemeGetter = !0), t;
  },
  O0 = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  HT = /^\d+\/\d+$/,
  KT = new Set(["px", "full", "screen"]),
  GT = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  QT =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  YT = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  XT = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  qT =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  an = (e) => bi(e) || KT.has(e) || HT.test(e),
  An = (e) => Qi(e, "length", oP),
  bi = (e) => !!e && !Number.isNaN(Number(e)),
  vu = (e) => Qi(e, "number", bi),
  co = (e) => !!e && Number.isInteger(Number(e)),
  ZT = (e) => e.endsWith("%") && bi(e.slice(0, -1)),
  Q = (e) => O0.test(e),
  Rn = (e) => GT.test(e),
  JT = new Set(["length", "size", "percentage"]),
  eP = (e) => Qi(e, JT, I0),
  tP = (e) => Qi(e, "position", I0),
  nP = new Set(["image", "url"]),
  rP = (e) => Qi(e, nP, aP),
  iP = (e) => Qi(e, "", sP),
  fo = () => !0,
  Qi = (e, t, n) => {
    const r = O0.exec(e);
    return r
      ? r[1]
        ? typeof t == "string"
          ? r[1] === t
          : t.has(r[1])
        : n(r[2])
      : !1;
  },
  oP = (e) => QT.test(e) && !YT.test(e),
  I0 = () => !1,
  sP = (e) => XT.test(e),
  aP = (e) => qT.test(e),
  lP = () => {
    const e = se("colors"),
      t = se("spacing"),
      n = se("blur"),
      r = se("brightness"),
      i = se("borderColor"),
      o = se("borderRadius"),
      s = se("borderSpacing"),
      a = se("borderWidth"),
      l = se("contrast"),
      u = se("grayscale"),
      c = se("hueRotate"),
      d = se("invert"),
      f = se("gap"),
      h = se("gradientColorStops"),
      x = se("gradientColorStopPositions"),
      y = se("inset"),
      w = se("margin"),
      g = se("opacity"),
      m = se("padding"),
      v = se("saturate"),
      b = se("scale"),
      E = se("sepia"),
      C = se("skew"),
      T = se("space"),
      k = se("translate"),
      M = () => ["auto", "contain", "none"],
      N = () => ["auto", "hidden", "clip", "visible", "scroll"],
      F = () => ["auto", Q, t],
      O = () => [Q, t],
      U = () => ["", an, An],
      L = () => ["auto", bi, Q],
      W = () => [
        "bottom",
        "center",
        "left",
        "left-bottom",
        "left-top",
        "right",
        "right-bottom",
        "right-top",
        "top",
      ],
      z = () => ["solid", "dashed", "dotted", "double", "none"],
      H = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      P = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
      ],
      A = () => ["", "0", Q],
      I = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      $ = () => [bi, Q];
    return {
      cacheSize: 500,
      separator: ":",
      theme: {
        colors: [fo],
        spacing: [an, An],
        blur: ["none", "", Rn, Q],
        brightness: $(),
        borderColor: [e],
        borderRadius: ["none", "", "full", Rn, Q],
        borderSpacing: O(),
        borderWidth: U(),
        contrast: $(),
        grayscale: A(),
        hueRotate: $(),
        invert: A(),
        gap: O(),
        gradientColorStops: [e],
        gradientColorStopPositions: [ZT, An],
        inset: F(),
        margin: F(),
        opacity: $(),
        padding: O(),
        saturate: $(),
        scale: $(),
        sepia: A(),
        skew: $(),
        space: O(),
        translate: O(),
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", "video", Q] }],
        container: ["container"],
        columns: [{ columns: [Rn] }],
        "break-after": [{ "break-after": I() }],
        "break-before": [{ "break-before": I() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: [...W(), Q] }],
        overflow: [{ overflow: N() }],
        "overflow-x": [{ "overflow-x": N() }],
        "overflow-y": [{ "overflow-y": N() }],
        overscroll: [{ overscroll: M() }],
        "overscroll-x": [{ "overscroll-x": M() }],
        "overscroll-y": [{ "overscroll-y": M() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: [y] }],
        "inset-x": [{ "inset-x": [y] }],
        "inset-y": [{ "inset-y": [y] }],
        start: [{ start: [y] }],
        end: [{ end: [y] }],
        top: [{ top: [y] }],
        right: [{ right: [y] }],
        bottom: [{ bottom: [y] }],
        left: [{ left: [y] }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: ["auto", co, Q] }],
        basis: [{ basis: F() }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
        flex: [{ flex: ["1", "auto", "initial", "none", Q] }],
        grow: [{ grow: A() }],
        shrink: [{ shrink: A() }],
        order: [{ order: ["first", "last", "none", co, Q] }],
        "grid-cols": [{ "grid-cols": [fo] }],
        "col-start-end": [{ col: ["auto", { span: ["full", co, Q] }, Q] }],
        "col-start": [{ "col-start": L() }],
        "col-end": [{ "col-end": L() }],
        "grid-rows": [{ "grid-rows": [fo] }],
        "row-start-end": [{ row: ["auto", { span: [co, Q] }, Q] }],
        "row-start": [{ "row-start": L() }],
        "row-end": [{ "row-end": L() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", Q] }],
        "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", Q] }],
        gap: [{ gap: [f] }],
        "gap-x": [{ "gap-x": [f] }],
        "gap-y": [{ "gap-y": [f] }],
        "justify-content": [{ justify: ["normal", ...P()] }],
        "justify-items": [
          { "justify-items": ["start", "end", "center", "stretch"] },
        ],
        "justify-self": [
          { "justify-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        "align-content": [{ content: ["normal", ...P(), "baseline"] }],
        "align-items": [
          { items: ["start", "end", "center", "baseline", "stretch"] },
        ],
        "align-self": [
          { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
        ],
        "place-content": [{ "place-content": [...P(), "baseline"] }],
        "place-items": [
          { "place-items": ["start", "end", "center", "baseline", "stretch"] },
        ],
        "place-self": [
          { "place-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        p: [{ p: [m] }],
        px: [{ px: [m] }],
        py: [{ py: [m] }],
        ps: [{ ps: [m] }],
        pe: [{ pe: [m] }],
        pt: [{ pt: [m] }],
        pr: [{ pr: [m] }],
        pb: [{ pb: [m] }],
        pl: [{ pl: [m] }],
        m: [{ m: [w] }],
        mx: [{ mx: [w] }],
        my: [{ my: [w] }],
        ms: [{ ms: [w] }],
        me: [{ me: [w] }],
        mt: [{ mt: [w] }],
        mr: [{ mr: [w] }],
        mb: [{ mb: [w] }],
        ml: [{ ml: [w] }],
        "space-x": [{ "space-x": [T] }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": [T] }],
        "space-y-reverse": ["space-y-reverse"],
        w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", Q, t] }],
        "min-w": [{ "min-w": [Q, t, "min", "max", "fit"] }],
        "max-w": [
          {
            "max-w": [
              Q,
              t,
              "none",
              "full",
              "min",
              "max",
              "fit",
              "prose",
              { screen: [Rn] },
              Rn,
            ],
          },
        ],
        h: [{ h: [Q, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
        "min-h": [
          { "min-h": [Q, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        "max-h": [
          { "max-h": [Q, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        size: [{ size: [Q, t, "auto", "min", "max", "fit"] }],
        "font-size": [{ text: ["base", Rn, An] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [
          {
            font: [
              "thin",
              "extralight",
              "light",
              "normal",
              "medium",
              "semibold",
              "bold",
              "extrabold",
              "black",
              vu,
            ],
          },
        ],
        "font-family": [{ font: [fo] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [
          {
            tracking: [
              "tighter",
              "tight",
              "normal",
              "wide",
              "wider",
              "widest",
              Q,
            ],
          },
        ],
        "line-clamp": [{ "line-clamp": ["none", bi, vu] }],
        leading: [
          {
            leading: [
              "none",
              "tight",
              "snug",
              "normal",
              "relaxed",
              "loose",
              an,
              Q,
            ],
          },
        ],
        "list-image": [{ "list-image": ["none", Q] }],
        "list-style-type": [{ list: ["none", "disc", "decimal", Q] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "placeholder-color": [{ placeholder: [e] }],
        "placeholder-opacity": [{ "placeholder-opacity": [g] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "text-color": [{ text: [e] }],
        "text-opacity": [{ "text-opacity": [g] }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...z(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: ["auto", "from-font", an, An] },
        ],
        "underline-offset": [{ "underline-offset": ["auto", an, Q] }],
        "text-decoration-color": [{ decoration: [e] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: O() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              Q,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", Q] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-opacity": [{ "bg-opacity": [g] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: [...W(), tP] }],
        "bg-repeat": [
          { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
        ],
        "bg-size": [{ bg: ["auto", "cover", "contain", eP] }],
        "bg-image": [
          {
            bg: [
              "none",
              { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
              rP,
            ],
          },
        ],
        "bg-color": [{ bg: [e] }],
        "gradient-from-pos": [{ from: [x] }],
        "gradient-via-pos": [{ via: [x] }],
        "gradient-to-pos": [{ to: [x] }],
        "gradient-from": [{ from: [h] }],
        "gradient-via": [{ via: [h] }],
        "gradient-to": [{ to: [h] }],
        rounded: [{ rounded: [o] }],
        "rounded-s": [{ "rounded-s": [o] }],
        "rounded-e": [{ "rounded-e": [o] }],
        "rounded-t": [{ "rounded-t": [o] }],
        "rounded-r": [{ "rounded-r": [o] }],
        "rounded-b": [{ "rounded-b": [o] }],
        "rounded-l": [{ "rounded-l": [o] }],
        "rounded-ss": [{ "rounded-ss": [o] }],
        "rounded-se": [{ "rounded-se": [o] }],
        "rounded-ee": [{ "rounded-ee": [o] }],
        "rounded-es": [{ "rounded-es": [o] }],
        "rounded-tl": [{ "rounded-tl": [o] }],
        "rounded-tr": [{ "rounded-tr": [o] }],
        "rounded-br": [{ "rounded-br": [o] }],
        "rounded-bl": [{ "rounded-bl": [o] }],
        "border-w": [{ border: [a] }],
        "border-w-x": [{ "border-x": [a] }],
        "border-w-y": [{ "border-y": [a] }],
        "border-w-s": [{ "border-s": [a] }],
        "border-w-e": [{ "border-e": [a] }],
        "border-w-t": [{ "border-t": [a] }],
        "border-w-r": [{ "border-r": [a] }],
        "border-w-b": [{ "border-b": [a] }],
        "border-w-l": [{ "border-l": [a] }],
        "border-opacity": [{ "border-opacity": [g] }],
        "border-style": [{ border: [...z(), "hidden"] }],
        "divide-x": [{ "divide-x": [a] }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": [a] }],
        "divide-y-reverse": ["divide-y-reverse"],
        "divide-opacity": [{ "divide-opacity": [g] }],
        "divide-style": [{ divide: z() }],
        "border-color": [{ border: [i] }],
        "border-color-x": [{ "border-x": [i] }],
        "border-color-y": [{ "border-y": [i] }],
        "border-color-s": [{ "border-s": [i] }],
        "border-color-e": [{ "border-e": [i] }],
        "border-color-t": [{ "border-t": [i] }],
        "border-color-r": [{ "border-r": [i] }],
        "border-color-b": [{ "border-b": [i] }],
        "border-color-l": [{ "border-l": [i] }],
        "divide-color": [{ divide: [i] }],
        "outline-style": [{ outline: ["", ...z()] }],
        "outline-offset": [{ "outline-offset": [an, Q] }],
        "outline-w": [{ outline: [an, An] }],
        "outline-color": [{ outline: [e] }],
        "ring-w": [{ ring: U() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: [e] }],
        "ring-opacity": [{ "ring-opacity": [g] }],
        "ring-offset-w": [{ "ring-offset": [an, An] }],
        "ring-offset-color": [{ "ring-offset": [e] }],
        shadow: [{ shadow: ["", "inner", "none", Rn, iP] }],
        "shadow-color": [{ shadow: [fo] }],
        opacity: [{ opacity: [g] }],
        "mix-blend": [{ "mix-blend": [...H(), "plus-lighter", "plus-darker"] }],
        "bg-blend": [{ "bg-blend": H() }],
        filter: [{ filter: ["", "none"] }],
        blur: [{ blur: [n] }],
        brightness: [{ brightness: [r] }],
        contrast: [{ contrast: [l] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", Rn, Q] }],
        grayscale: [{ grayscale: [u] }],
        "hue-rotate": [{ "hue-rotate": [c] }],
        invert: [{ invert: [d] }],
        saturate: [{ saturate: [v] }],
        sepia: [{ sepia: [E] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
        "backdrop-blur": [{ "backdrop-blur": [n] }],
        "backdrop-brightness": [{ "backdrop-brightness": [r] }],
        "backdrop-contrast": [{ "backdrop-contrast": [l] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [u] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [c] }],
        "backdrop-invert": [{ "backdrop-invert": [d] }],
        "backdrop-opacity": [{ "backdrop-opacity": [g] }],
        "backdrop-saturate": [{ "backdrop-saturate": [v] }],
        "backdrop-sepia": [{ "backdrop-sepia": [E] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": [s] }],
        "border-spacing-x": [{ "border-spacing-x": [s] }],
        "border-spacing-y": [{ "border-spacing-y": [s] }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "none",
              "all",
              "",
              "colors",
              "opacity",
              "shadow",
              "transform",
              Q,
            ],
          },
        ],
        duration: [{ duration: $() }],
        ease: [{ ease: ["linear", "in", "out", "in-out", Q] }],
        delay: [{ delay: $() }],
        animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", Q] }],
        transform: [{ transform: ["", "gpu", "none"] }],
        scale: [{ scale: [b] }],
        "scale-x": [{ "scale-x": [b] }],
        "scale-y": [{ "scale-y": [b] }],
        rotate: [{ rotate: [co, Q] }],
        "translate-x": [{ "translate-x": [k] }],
        "translate-y": [{ "translate-y": [k] }],
        "skew-x": [{ "skew-x": [C] }],
        "skew-y": [{ "skew-y": [C] }],
        "transform-origin": [
          {
            origin: [
              "center",
              "top",
              "top-right",
              "right",
              "bottom-right",
              "bottom",
              "bottom-left",
              "left",
              "top-left",
              Q,
            ],
          },
        ],
        accent: [{ accent: ["auto", e] }],
        appearance: [{ appearance: ["none", "auto"] }],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              Q,
            ],
          },
        ],
        "caret-color": [{ caret: [e] }],
        "pointer-events": [{ "pointer-events": ["none", "auto"] }],
        resize: [{ resize: ["none", "y", "x", ""] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": O() }],
        "scroll-mx": [{ "scroll-mx": O() }],
        "scroll-my": [{ "scroll-my": O() }],
        "scroll-ms": [{ "scroll-ms": O() }],
        "scroll-me": [{ "scroll-me": O() }],
        "scroll-mt": [{ "scroll-mt": O() }],
        "scroll-mr": [{ "scroll-mr": O() }],
        "scroll-mb": [{ "scroll-mb": O() }],
        "scroll-ml": [{ "scroll-ml": O() }],
        "scroll-p": [{ "scroll-p": O() }],
        "scroll-px": [{ "scroll-px": O() }],
        "scroll-py": [{ "scroll-py": O() }],
        "scroll-ps": [{ "scroll-ps": O() }],
        "scroll-pe": [{ "scroll-pe": O() }],
        "scroll-pt": [{ "scroll-pt": O() }],
        "scroll-pr": [{ "scroll-pr": O() }],
        "scroll-pb": [{ "scroll-pb": O() }],
        "scroll-pl": [{ "scroll-pl": O() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          { "will-change": ["auto", "scroll", "contents", "transform", Q] },
        ],
        fill: [{ fill: [e, "none"] }],
        "stroke-w": [{ stroke: [an, An, vu] }],
        stroke: [{ stroke: [e, "none"] }],
        sr: ["sr-only", "not-sr-only"],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
    };
  },
  uP = WT(lP);
function Hr(...e) {
  return uP(R0(e));
}
const cP = TT,
  F0 = S.forwardRef(({ className: e, ...t }, n) =>
    p.jsx(E0, {
      ref: n,
      className: Hr(
        "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        e
      ),
      ...t,
    })
  );
F0.displayName = E0.displayName;
const dP = PT(
    "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
    {
      variants: {
        variant: {
          default: "border bg-background text-foreground",
          destructive:
            "destructive group border-destructive bg-destructive text-destructive-foreground",
        },
      },
      defaultVariants: { variant: "default" },
    }
  ),
  V0 = S.forwardRef(({ className: e, variant: t, ...n }, r) =>
    p.jsx(C0, { ref: r, className: Hr(dP({ variant: t }), e), ...n })
  );
V0.displayName = C0.displayName;
const fP = S.forwardRef(({ className: e, ...t }, n) =>
  p.jsx(k0, {
    ref: n,
    className: Hr(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50",
      e
    ),
    ...t,
  })
);
fP.displayName = k0.displayName;
const _0 = S.forwardRef(({ className: e, ...t }, n) =>
  p.jsx(N0, {
    ref: n,
    className: Hr(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      e
    ),
    "toast-close": "",
    ...t,
    children: p.jsx(jT, { className: "h-4 w-4" }),
  })
);
_0.displayName = N0.displayName;
const z0 = S.forwardRef(({ className: e, ...t }, n) =>
  p.jsx(T0, { ref: n, className: Hr("text-sm font-semibold", e), ...t })
);
z0.displayName = T0.displayName;
const B0 = S.forwardRef(({ className: e, ...t }, n) =>
  p.jsx(P0, { ref: n, className: Hr("text-sm opacity-90", e), ...t })
);
B0.displayName = P0.displayName;
function hP() {
  const { toasts: e } = DC();
  return p.jsxs(cP, {
    children: [
      e.map(function ({ id: t, title: n, description: r, action: i, ...o }) {
        return p.jsxs(
          V0,
          {
            ...o,
            children: [
              p.jsxs("div", {
                className: "grid gap-1",
                children: [
                  n && p.jsx(z0, { children: n }),
                  r && p.jsx(B0, { children: r }),
                ],
              }),
              i,
              p.jsx(_0, {}),
            ],
          },
          t
        );
      }),
      p.jsx(F0, {}),
    ],
  });
}
const pP = ["top", "right", "bottom", "left"],
  or = Math.min,
  st = Math.max,
  Wa = Math.round,
  Ws = Math.floor,
  tn = (e) => ({ x: e, y: e }),
  mP = { left: "right", right: "left", bottom: "top", top: "bottom" },
  gP = { start: "end", end: "start" };
function Uc(e, t, n) {
  return st(e, or(t, n));
}
function xn(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function wn(e) {
  return e.split("-")[0];
}
function Yi(e) {
  return e.split("-")[1];
}
function Sf(e) {
  return e === "x" ? "y" : "x";
}
function bf(e) {
  return e === "y" ? "height" : "width";
}
const yP = new Set(["top", "bottom"]);
function Zt(e) {
  return yP.has(wn(e)) ? "y" : "x";
}
function Ef(e) {
  return Sf(Zt(e));
}
function vP(e, t, n) {
  n === void 0 && (n = !1);
  const r = Yi(e),
    i = Ef(e),
    o = bf(i);
  let s =
    i === "x"
      ? r === (n ? "end" : "start")
        ? "right"
        : "left"
      : r === "start"
      ? "bottom"
      : "top";
  return t.reference[o] > t.floating[o] && (s = Ha(s)), [s, Ha(s)];
}
function xP(e) {
  const t = Ha(e);
  return [Wc(e), t, Wc(t)];
}
function Wc(e) {
  return e.replace(/start|end/g, (t) => gP[t]);
}
const Wp = ["left", "right"],
  Hp = ["right", "left"],
  wP = ["top", "bottom"],
  SP = ["bottom", "top"];
function bP(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? (t ? Hp : Wp) : t ? Wp : Hp;
    case "left":
    case "right":
      return t ? wP : SP;
    default:
      return [];
  }
}
function EP(e, t, n, r) {
  const i = Yi(e);
  let o = bP(wn(e), n === "start", r);
  return (
    i && ((o = o.map((s) => s + "-" + i)), t && (o = o.concat(o.map(Wc)))), o
  );
}
function Ha(e) {
  return e.replace(/left|right|bottom|top/g, (t) => mP[t]);
}
function CP(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function $0(e) {
  return typeof e != "number"
    ? CP(e)
    : { top: e, right: e, bottom: e, left: e };
}
function Ka(e) {
  const { x: t, y: n, width: r, height: i } = e;
  return {
    width: r,
    height: i,
    top: n,
    left: t,
    right: t + r,
    bottom: n + i,
    x: t,
    y: n,
  };
}
function Kp(e, t, n) {
  let { reference: r, floating: i } = e;
  const o = Zt(t),
    s = Ef(t),
    a = bf(s),
    l = wn(t),
    u = o === "y",
    c = r.x + r.width / 2 - i.width / 2,
    d = r.y + r.height / 2 - i.height / 2,
    f = r[a] / 2 - i[a] / 2;
  let h;
  switch (l) {
    case "top":
      h = { x: c, y: r.y - i.height };
      break;
    case "bottom":
      h = { x: c, y: r.y + r.height };
      break;
    case "right":
      h = { x: r.x + r.width, y: d };
      break;
    case "left":
      h = { x: r.x - i.width, y: d };
      break;
    default:
      h = { x: r.x, y: r.y };
  }
  switch (Yi(t)) {
    case "start":
      h[s] -= f * (n && u ? -1 : 1);
      break;
    case "end":
      h[s] += f * (n && u ? -1 : 1);
      break;
  }
  return h;
}
const TP = async (e, t, n) => {
  const {
      placement: r = "bottom",
      strategy: i = "absolute",
      middleware: o = [],
      platform: s,
    } = n,
    a = o.filter(Boolean),
    l = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let u = await s.getElementRects({ reference: e, floating: t, strategy: i }),
    { x: c, y: d } = Kp(u, r, l),
    f = r,
    h = {},
    x = 0;
  for (let y = 0; y < a.length; y++) {
    const { name: w, fn: g } = a[y],
      {
        x: m,
        y: v,
        data: b,
        reset: E,
      } = await g({
        x: c,
        y: d,
        initialPlacement: r,
        placement: f,
        strategy: i,
        middlewareData: h,
        rects: u,
        platform: s,
        elements: { reference: e, floating: t },
      });
    (c = m ?? c),
      (d = v ?? d),
      (h = { ...h, [w]: { ...h[w], ...b } }),
      E &&
        x <= 50 &&
        (x++,
        typeof E == "object" &&
          (E.placement && (f = E.placement),
          E.rects &&
            (u =
              E.rects === !0
                ? await s.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: i,
                  })
                : E.rects),
          ({ x: c, y: d } = Kp(u, f, l))),
        (y = -1));
  }
  return { x: c, y: d, placement: f, strategy: i, middlewareData: h };
};
async function Zo(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: r, y: i, platform: o, rects: s, elements: a, strategy: l } = e,
    {
      boundary: u = "clippingAncestors",
      rootBoundary: c = "viewport",
      elementContext: d = "floating",
      altBoundary: f = !1,
      padding: h = 0,
    } = xn(t, e),
    x = $0(h),
    w = a[f ? (d === "floating" ? "reference" : "floating") : d],
    g = Ka(
      await o.getClippingRect({
        element:
          (n = await (o.isElement == null ? void 0 : o.isElement(w))) == null ||
          n
            ? w
            : w.contextElement ||
              (await (o.getDocumentElement == null
                ? void 0
                : o.getDocumentElement(a.floating))),
        boundary: u,
        rootBoundary: c,
        strategy: l,
      })
    ),
    m =
      d === "floating"
        ? { x: r, y: i, width: s.floating.width, height: s.floating.height }
        : s.reference,
    v = await (o.getOffsetParent == null
      ? void 0
      : o.getOffsetParent(a.floating)),
    b = (await (o.isElement == null ? void 0 : o.isElement(v)))
      ? (await (o.getScale == null ? void 0 : o.getScale(v))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    E = Ka(
      o.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: a,
            rect: m,
            offsetParent: v,
            strategy: l,
          })
        : m
    );
  return {
    top: (g.top - E.top + x.top) / b.y,
    bottom: (E.bottom - g.bottom + x.bottom) / b.y,
    left: (g.left - E.left + x.left) / b.x,
    right: (E.right - g.right + x.right) / b.x,
  };
}
const PP = (e) => ({
    name: "arrow",
    options: e,
    async fn(t) {
      const {
          x: n,
          y: r,
          placement: i,
          rects: o,
          platform: s,
          elements: a,
          middlewareData: l,
        } = t,
        { element: u, padding: c = 0 } = xn(e, t) || {};
      if (u == null) return {};
      const d = $0(c),
        f = { x: n, y: r },
        h = Ef(i),
        x = bf(h),
        y = await s.getDimensions(u),
        w = h === "y",
        g = w ? "top" : "left",
        m = w ? "bottom" : "right",
        v = w ? "clientHeight" : "clientWidth",
        b = o.reference[x] + o.reference[h] - f[h] - o.floating[x],
        E = f[h] - o.reference[h],
        C = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
      let T = C ? C[v] : 0;
      (!T || !(await (s.isElement == null ? void 0 : s.isElement(C)))) &&
        (T = a.floating[v] || o.floating[x]);
      const k = b / 2 - E / 2,
        M = T / 2 - y[x] / 2 - 1,
        N = or(d[g], M),
        F = or(d[m], M),
        O = N,
        U = T - y[x] - F,
        L = T / 2 - y[x] / 2 + k,
        W = Uc(O, L, U),
        z =
          !l.arrow &&
          Yi(i) != null &&
          L !== W &&
          o.reference[x] / 2 - (L < O ? N : F) - y[x] / 2 < 0,
        H = z ? (L < O ? L - O : L - U) : 0;
      return {
        [h]: f[h] + H,
        data: {
          [h]: W,
          centerOffset: L - W - H,
          ...(z && { alignmentOffset: H }),
        },
        reset: z,
      };
    },
  }),
  kP = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "flip",
        options: e,
        async fn(t) {
          var n, r;
          const {
              placement: i,
              middlewareData: o,
              rects: s,
              initialPlacement: a,
              platform: l,
              elements: u,
            } = t,
            {
              mainAxis: c = !0,
              crossAxis: d = !0,
              fallbackPlacements: f,
              fallbackStrategy: h = "bestFit",
              fallbackAxisSideDirection: x = "none",
              flipAlignment: y = !0,
              ...w
            } = xn(e, t);
          if ((n = o.arrow) != null && n.alignmentOffset) return {};
          const g = wn(i),
            m = Zt(a),
            v = wn(a) === a,
            b = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)),
            E = f || (v || !y ? [Ha(a)] : xP(a)),
            C = x !== "none";
          !f && C && E.push(...EP(a, y, x, b));
          const T = [a, ...E],
            k = await Zo(t, w),
            M = [];
          let N = ((r = o.flip) == null ? void 0 : r.overflows) || [];
          if ((c && M.push(k[g]), d)) {
            const L = vP(i, s, b);
            M.push(k[L[0]], k[L[1]]);
          }
          if (
            ((N = [...N, { placement: i, overflows: M }]),
            !M.every((L) => L <= 0))
          ) {
            var F, O;
            const L = (((F = o.flip) == null ? void 0 : F.index) || 0) + 1,
              W = T[L];
            if (
              W &&
              (!(d === "alignment" ? m !== Zt(W) : !1) ||
                N.every((P) => P.overflows[0] > 0 && Zt(P.placement) === m))
            )
              return {
                data: { index: L, overflows: N },
                reset: { placement: W },
              };
            let z =
              (O = N.filter((H) => H.overflows[0] <= 0).sort(
                (H, P) => H.overflows[1] - P.overflows[1]
              )[0]) == null
                ? void 0
                : O.placement;
            if (!z)
              switch (h) {
                case "bestFit": {
                  var U;
                  const H =
                    (U = N.filter((P) => {
                      if (C) {
                        const A = Zt(P.placement);
                        return A === m || A === "y";
                      }
                      return !0;
                    })
                      .map((P) => [
                        P.placement,
                        P.overflows
                          .filter((A) => A > 0)
                          .reduce((A, I) => A + I, 0),
                      ])
                      .sort((P, A) => P[1] - A[1])[0]) == null
                      ? void 0
                      : U[0];
                  H && (z = H);
                  break;
                }
                case "initialPlacement":
                  z = a;
                  break;
              }
            if (i !== z) return { reset: { placement: z } };
          }
          return {};
        },
      }
    );
  };
function Gp(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width,
  };
}
function Qp(e) {
  return pP.some((t) => e[t] >= 0);
}
const NP = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "hide",
        options: e,
        async fn(t) {
          const { rects: n } = t,
            { strategy: r = "referenceHidden", ...i } = xn(e, t);
          switch (r) {
            case "referenceHidden": {
              const o = await Zo(t, { ...i, elementContext: "reference" }),
                s = Gp(o, n.reference);
              return {
                data: { referenceHiddenOffsets: s, referenceHidden: Qp(s) },
              };
            }
            case "escaped": {
              const o = await Zo(t, { ...i, altBoundary: !0 }),
                s = Gp(o, n.floating);
              return { data: { escapedOffsets: s, escaped: Qp(s) } };
            }
            default:
              return {};
          }
        },
      }
    );
  },
  U0 = new Set(["left", "top"]);
async function AP(e, t) {
  const { placement: n, platform: r, elements: i } = e,
    o = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)),
    s = wn(n),
    a = Yi(n),
    l = Zt(n) === "y",
    u = U0.has(s) ? -1 : 1,
    c = o && l ? -1 : 1,
    d = xn(t, e);
  let {
    mainAxis: f,
    crossAxis: h,
    alignmentAxis: x,
  } = typeof d == "number"
    ? { mainAxis: d, crossAxis: 0, alignmentAxis: null }
    : {
        mainAxis: d.mainAxis || 0,
        crossAxis: d.crossAxis || 0,
        alignmentAxis: d.alignmentAxis,
      };
  return (
    a && typeof x == "number" && (h = a === "end" ? x * -1 : x),
    l ? { x: h * c, y: f * u } : { x: f * u, y: h * c }
  );
}
const RP = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: "offset",
        options: e,
        async fn(t) {
          var n, r;
          const { x: i, y: o, placement: s, middlewareData: a } = t,
            l = await AP(t, e);
          return s === ((n = a.offset) == null ? void 0 : n.placement) &&
            (r = a.arrow) != null &&
            r.alignmentOffset
            ? {}
            : { x: i + l.x, y: o + l.y, data: { ...l, placement: s } };
        },
      }
    );
  },
  jP = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "shift",
        options: e,
        async fn(t) {
          const { x: n, y: r, placement: i } = t,
            {
              mainAxis: o = !0,
              crossAxis: s = !1,
              limiter: a = {
                fn: (w) => {
                  let { x: g, y: m } = w;
                  return { x: g, y: m };
                },
              },
              ...l
            } = xn(e, t),
            u = { x: n, y: r },
            c = await Zo(t, l),
            d = Zt(wn(i)),
            f = Sf(d);
          let h = u[f],
            x = u[d];
          if (o) {
            const w = f === "y" ? "top" : "left",
              g = f === "y" ? "bottom" : "right",
              m = h + c[w],
              v = h - c[g];
            h = Uc(m, h, v);
          }
          if (s) {
            const w = d === "y" ? "top" : "left",
              g = d === "y" ? "bottom" : "right",
              m = x + c[w],
              v = x - c[g];
            x = Uc(m, x, v);
          }
          const y = a.fn({ ...t, [f]: h, [d]: x });
          return {
            ...y,
            data: { x: y.x - n, y: y.y - r, enabled: { [f]: o, [d]: s } },
          };
        },
      }
    );
  },
  MP = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(t) {
          const { x: n, y: r, placement: i, rects: o, middlewareData: s } = t,
            { offset: a = 0, mainAxis: l = !0, crossAxis: u = !0 } = xn(e, t),
            c = { x: n, y: r },
            d = Zt(i),
            f = Sf(d);
          let h = c[f],
            x = c[d];
          const y = xn(a, t),
            w =
              typeof y == "number"
                ? { mainAxis: y, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...y };
          if (l) {
            const v = f === "y" ? "height" : "width",
              b = o.reference[f] - o.floating[v] + w.mainAxis,
              E = o.reference[f] + o.reference[v] - w.mainAxis;
            h < b ? (h = b) : h > E && (h = E);
          }
          if (u) {
            var g, m;
            const v = f === "y" ? "width" : "height",
              b = U0.has(wn(i)),
              E =
                o.reference[d] -
                o.floating[v] +
                ((b && ((g = s.offset) == null ? void 0 : g[d])) || 0) +
                (b ? 0 : w.crossAxis),
              C =
                o.reference[d] +
                o.reference[v] +
                (b ? 0 : ((m = s.offset) == null ? void 0 : m[d]) || 0) -
                (b ? w.crossAxis : 0);
            x < E ? (x = E) : x > C && (x = C);
          }
          return { [f]: h, [d]: x };
        },
      }
    );
  },
  DP = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "size",
        options: e,
        async fn(t) {
          var n, r;
          const { placement: i, rects: o, platform: s, elements: a } = t,
            { apply: l = () => {}, ...u } = xn(e, t),
            c = await Zo(t, u),
            d = wn(i),
            f = Yi(i),
            h = Zt(i) === "y",
            { width: x, height: y } = o.floating;
          let w, g;
          d === "top" || d === "bottom"
            ? ((w = d),
              (g =
                f ===
                ((await (s.isRTL == null ? void 0 : s.isRTL(a.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((g = d), (w = f === "end" ? "top" : "bottom"));
          const m = y - c.top - c.bottom,
            v = x - c.left - c.right,
            b = or(y - c[w], m),
            E = or(x - c[g], v),
            C = !t.middlewareData.shift;
          let T = b,
            k = E;
          if (
            ((n = t.middlewareData.shift) != null && n.enabled.x && (k = v),
            (r = t.middlewareData.shift) != null && r.enabled.y && (T = m),
            C && !f)
          ) {
            const N = st(c.left, 0),
              F = st(c.right, 0),
              O = st(c.top, 0),
              U = st(c.bottom, 0);
            h
              ? (k = x - 2 * (N !== 0 || F !== 0 ? N + F : st(c.left, c.right)))
              : (T =
                  y - 2 * (O !== 0 || U !== 0 ? O + U : st(c.top, c.bottom)));
          }
          await l({ ...t, availableWidth: k, availableHeight: T });
          const M = await s.getDimensions(a.floating);
          return x !== M.width || y !== M.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function kl() {
  return typeof window < "u";
}
function Xi(e) {
  return W0(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function ut(e) {
  var t;
  return (
    (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
    window
  );
}
function sn(e) {
  var t;
  return (t = (W0(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : t.documentElement;
}
function W0(e) {
  return kl() ? e instanceof Node || e instanceof ut(e).Node : !1;
}
function $t(e) {
  return kl() ? e instanceof Element || e instanceof ut(e).Element : !1;
}
function rn(e) {
  return kl() ? e instanceof HTMLElement || e instanceof ut(e).HTMLElement : !1;
}
function Yp(e) {
  return !kl() || typeof ShadowRoot > "u"
    ? !1
    : e instanceof ShadowRoot || e instanceof ut(e).ShadowRoot;
}
const LP = new Set(["inline", "contents"]);
function ps(e) {
  const { overflow: t, overflowX: n, overflowY: r, display: i } = Ut(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !LP.has(i);
}
const OP = new Set(["table", "td", "th"]);
function IP(e) {
  return OP.has(Xi(e));
}
const FP = [":popover-open", ":modal"];
function Nl(e) {
  return FP.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const VP = ["transform", "translate", "scale", "rotate", "perspective"],
  _P = ["transform", "translate", "scale", "rotate", "perspective", "filter"],
  zP = ["paint", "layout", "strict", "content"];
function Cf(e) {
  const t = Tf(),
    n = $t(e) ? Ut(e) : e;
  return (
    VP.some((r) => (n[r] ? n[r] !== "none" : !1)) ||
    (n.containerType ? n.containerType !== "normal" : !1) ||
    (!t && (n.backdropFilter ? n.backdropFilter !== "none" : !1)) ||
    (!t && (n.filter ? n.filter !== "none" : !1)) ||
    _P.some((r) => (n.willChange || "").includes(r)) ||
    zP.some((r) => (n.contain || "").includes(r))
  );
}
function BP(e) {
  let t = sr(e);
  for (; rn(t) && !_i(t); ) {
    if (Cf(t)) return t;
    if (Nl(t)) return null;
    t = sr(t);
  }
  return null;
}
function Tf() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
const $P = new Set(["html", "body", "#document"]);
function _i(e) {
  return $P.has(Xi(e));
}
function Ut(e) {
  return ut(e).getComputedStyle(e);
}
function Al(e) {
  return $t(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function sr(e) {
  if (Xi(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || (Yp(e) && e.host) || sn(e);
  return Yp(t) ? t.host : t;
}
function H0(e) {
  const t = sr(e);
  return _i(t)
    ? e.ownerDocument
      ? e.ownerDocument.body
      : e.body
    : rn(t) && ps(t)
    ? t
    : H0(t);
}
function Jo(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const i = H0(e),
    o = i === ((r = e.ownerDocument) == null ? void 0 : r.body),
    s = ut(i);
  if (o) {
    const a = Hc(s);
    return t.concat(
      s,
      s.visualViewport || [],
      ps(i) ? i : [],
      a && n ? Jo(a) : []
    );
  }
  return t.concat(i, Jo(i, [], n));
}
function Hc(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function K0(e) {
  const t = Ut(e);
  let n = parseFloat(t.width) || 0,
    r = parseFloat(t.height) || 0;
  const i = rn(e),
    o = i ? e.offsetWidth : n,
    s = i ? e.offsetHeight : r,
    a = Wa(n) !== o || Wa(r) !== s;
  return a && ((n = o), (r = s)), { width: n, height: r, $: a };
}
function Pf(e) {
  return $t(e) ? e : e.contextElement;
}
function Ei(e) {
  const t = Pf(e);
  if (!rn(t)) return tn(1);
  const n = t.getBoundingClientRect(),
    { width: r, height: i, $: o } = K0(t);
  let s = (o ? Wa(n.width) : n.width) / r,
    a = (o ? Wa(n.height) : n.height) / i;
  return (
    (!s || !Number.isFinite(s)) && (s = 1),
    (!a || !Number.isFinite(a)) && (a = 1),
    { x: s, y: a }
  );
}
const UP = tn(0);
function G0(e) {
  const t = ut(e);
  return !Tf() || !t.visualViewport
    ? UP
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function WP(e, t, n) {
  return t === void 0 && (t = !1), !n || (t && n !== ut(e)) ? !1 : t;
}
function $r(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const i = e.getBoundingClientRect(),
    o = Pf(e);
  let s = tn(1);
  t && (r ? $t(r) && (s = Ei(r)) : (s = Ei(e)));
  const a = WP(o, n, r) ? G0(o) : tn(0);
  let l = (i.left + a.x) / s.x,
    u = (i.top + a.y) / s.y,
    c = i.width / s.x,
    d = i.height / s.y;
  if (o) {
    const f = ut(o),
      h = r && $t(r) ? ut(r) : r;
    let x = f,
      y = Hc(x);
    for (; y && r && h !== x; ) {
      const w = Ei(y),
        g = y.getBoundingClientRect(),
        m = Ut(y),
        v = g.left + (y.clientLeft + parseFloat(m.paddingLeft)) * w.x,
        b = g.top + (y.clientTop + parseFloat(m.paddingTop)) * w.y;
      (l *= w.x),
        (u *= w.y),
        (c *= w.x),
        (d *= w.y),
        (l += v),
        (u += b),
        (x = ut(y)),
        (y = Hc(x));
    }
  }
  return Ka({ width: c, height: d, x: l, y: u });
}
function kf(e, t) {
  const n = Al(e).scrollLeft;
  return t ? t.left + n : $r(sn(e)).left + n;
}
function Q0(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(),
    i = r.left + t.scrollLeft - (n ? 0 : kf(e, r)),
    o = r.top + t.scrollTop;
  return { x: i, y: o };
}
function HP(e) {
  let { elements: t, rect: n, offsetParent: r, strategy: i } = e;
  const o = i === "fixed",
    s = sn(r),
    a = t ? Nl(t.floating) : !1;
  if (r === s || (a && o)) return n;
  let l = { scrollLeft: 0, scrollTop: 0 },
    u = tn(1);
  const c = tn(0),
    d = rn(r);
  if (
    (d || (!d && !o)) &&
    ((Xi(r) !== "body" || ps(s)) && (l = Al(r)), rn(r))
  ) {
    const h = $r(r);
    (u = Ei(r)), (c.x = h.x + r.clientLeft), (c.y = h.y + r.clientTop);
  }
  const f = s && !d && !o ? Q0(s, l, !0) : tn(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + c.x + f.x,
    y: n.y * u.y - l.scrollTop * u.y + c.y + f.y,
  };
}
function KP(e) {
  return Array.from(e.getClientRects());
}
function GP(e) {
  const t = sn(e),
    n = Al(e),
    r = e.ownerDocument.body,
    i = st(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
    o = st(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + kf(e);
  const a = -n.scrollTop;
  return (
    Ut(r).direction === "rtl" && (s += st(t.clientWidth, r.clientWidth) - i),
    { width: i, height: o, x: s, y: a }
  );
}
function QP(e, t) {
  const n = ut(e),
    r = sn(e),
    i = n.visualViewport;
  let o = r.clientWidth,
    s = r.clientHeight,
    a = 0,
    l = 0;
  if (i) {
    (o = i.width), (s = i.height);
    const u = Tf();
    (!u || (u && t === "fixed")) && ((a = i.offsetLeft), (l = i.offsetTop));
  }
  return { width: o, height: s, x: a, y: l };
}
const YP = new Set(["absolute", "fixed"]);
function XP(e, t) {
  const n = $r(e, !0, t === "fixed"),
    r = n.top + e.clientTop,
    i = n.left + e.clientLeft,
    o = rn(e) ? Ei(e) : tn(1),
    s = e.clientWidth * o.x,
    a = e.clientHeight * o.y,
    l = i * o.x,
    u = r * o.y;
  return { width: s, height: a, x: l, y: u };
}
function Xp(e, t, n) {
  let r;
  if (t === "viewport") r = QP(e, n);
  else if (t === "document") r = GP(sn(e));
  else if ($t(t)) r = XP(t, n);
  else {
    const i = G0(e);
    r = { x: t.x - i.x, y: t.y - i.y, width: t.width, height: t.height };
  }
  return Ka(r);
}
function Y0(e, t) {
  const n = sr(e);
  return n === t || !$t(n) || _i(n)
    ? !1
    : Ut(n).position === "fixed" || Y0(n, t);
}
function qP(e, t) {
  const n = t.get(e);
  if (n) return n;
  let r = Jo(e, [], !1).filter((a) => $t(a) && Xi(a) !== "body"),
    i = null;
  const o = Ut(e).position === "fixed";
  let s = o ? sr(e) : e;
  for (; $t(s) && !_i(s); ) {
    const a = Ut(s),
      l = Cf(s);
    !l && a.position === "fixed" && (i = null),
      (
        o
          ? !l && !i
          : (!l && a.position === "static" && !!i && YP.has(i.position)) ||
            (ps(s) && !l && Y0(e, s))
      )
        ? (r = r.filter((c) => c !== s))
        : (i = a),
      (s = sr(s));
  }
  return t.set(e, r), r;
}
function ZP(e) {
  let { element: t, boundary: n, rootBoundary: r, strategy: i } = e;
  const s = [
      ...(n === "clippingAncestors"
        ? Nl(t)
          ? []
          : qP(t, this._c)
        : [].concat(n)),
      r,
    ],
    a = s[0],
    l = s.reduce((u, c) => {
      const d = Xp(t, c, i);
      return (
        (u.top = st(d.top, u.top)),
        (u.right = or(d.right, u.right)),
        (u.bottom = or(d.bottom, u.bottom)),
        (u.left = st(d.left, u.left)),
        u
      );
    }, Xp(t, a, i));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top,
  };
}
function JP(e) {
  const { width: t, height: n } = K0(e);
  return { width: t, height: n };
}
function ek(e, t, n) {
  const r = rn(t),
    i = sn(t),
    o = n === "fixed",
    s = $r(e, !0, o, t);
  let a = { scrollLeft: 0, scrollTop: 0 };
  const l = tn(0);
  function u() {
    l.x = kf(i);
  }
  if (r || (!r && !o))
    if (((Xi(t) !== "body" || ps(i)) && (a = Al(t)), r)) {
      const h = $r(t, !0, o, t);
      (l.x = h.x + t.clientLeft), (l.y = h.y + t.clientTop);
    } else i && u();
  o && !r && i && u();
  const c = i && !r && !o ? Q0(i, a) : tn(0),
    d = s.left + a.scrollLeft - l.x - c.x,
    f = s.top + a.scrollTop - l.y - c.y;
  return { x: d, y: f, width: s.width, height: s.height };
}
function xu(e) {
  return Ut(e).position === "static";
}
function qp(e, t) {
  if (!rn(e) || Ut(e).position === "fixed") return null;
  if (t) return t(e);
  let n = e.offsetParent;
  return sn(e) === n && (n = n.ownerDocument.body), n;
}
function X0(e, t) {
  const n = ut(e);
  if (Nl(e)) return n;
  if (!rn(e)) {
    let i = sr(e);
    for (; i && !_i(i); ) {
      if ($t(i) && !xu(i)) return i;
      i = sr(i);
    }
    return n;
  }
  let r = qp(e, t);
  for (; r && IP(r) && xu(r); ) r = qp(r, t);
  return r && _i(r) && xu(r) && !Cf(r) ? n : r || BP(e) || n;
}
const tk = async function (e) {
  const t = this.getOffsetParent || X0,
    n = this.getDimensions,
    r = await n(e.floating);
  return {
    reference: ek(e.reference, await t(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: r.width, height: r.height },
  };
};
function nk(e) {
  return Ut(e).direction === "rtl";
}
const rk = {
  convertOffsetParentRelativeRectToViewportRelativeRect: HP,
  getDocumentElement: sn,
  getClippingRect: ZP,
  getOffsetParent: X0,
  getElementRects: tk,
  getClientRects: KP,
  getDimensions: JP,
  getScale: Ei,
  isElement: $t,
  isRTL: nk,
};
function q0(e, t) {
  return (
    e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
  );
}
function ik(e, t) {
  let n = null,
    r;
  const i = sn(e);
  function o() {
    var a;
    clearTimeout(r), (a = n) == null || a.disconnect(), (n = null);
  }
  function s(a, l) {
    a === void 0 && (a = !1), l === void 0 && (l = 1), o();
    const u = e.getBoundingClientRect(),
      { left: c, top: d, width: f, height: h } = u;
    if ((a || t(), !f || !h)) return;
    const x = Ws(d),
      y = Ws(i.clientWidth - (c + f)),
      w = Ws(i.clientHeight - (d + h)),
      g = Ws(c),
      v = {
        rootMargin: -x + "px " + -y + "px " + -w + "px " + -g + "px",
        threshold: st(0, or(1, l)) || 1,
      };
    let b = !0;
    function E(C) {
      const T = C[0].intersectionRatio;
      if (T !== l) {
        if (!b) return s();
        T
          ? s(!1, T)
          : (r = setTimeout(() => {
              s(!1, 1e-7);
            }, 1e3));
      }
      T === 1 && !q0(u, e.getBoundingClientRect()) && s(), (b = !1);
    }
    try {
      n = new IntersectionObserver(E, { ...v, root: i.ownerDocument });
    } catch {
      n = new IntersectionObserver(E, v);
    }
    n.observe(e);
  }
  return s(!0), o;
}
function ok(e, t, n, r) {
  r === void 0 && (r = {});
  const {
      ancestorScroll: i = !0,
      ancestorResize: o = !0,
      elementResize: s = typeof ResizeObserver == "function",
      layoutShift: a = typeof IntersectionObserver == "function",
      animationFrame: l = !1,
    } = r,
    u = Pf(e),
    c = i || o ? [...(u ? Jo(u) : []), ...Jo(t)] : [];
  c.forEach((g) => {
    i && g.addEventListener("scroll", n, { passive: !0 }),
      o && g.addEventListener("resize", n);
  });
  const d = u && a ? ik(u, n) : null;
  let f = -1,
    h = null;
  s &&
    ((h = new ResizeObserver((g) => {
      let [m] = g;
      m &&
        m.target === u &&
        h &&
        (h.unobserve(t),
        cancelAnimationFrame(f),
        (f = requestAnimationFrame(() => {
          var v;
          (v = h) == null || v.observe(t);
        }))),
        n();
    })),
    u && !l && h.observe(u),
    h.observe(t));
  let x,
    y = l ? $r(e) : null;
  l && w();
  function w() {
    const g = $r(e);
    y && !q0(y, g) && n(), (y = g), (x = requestAnimationFrame(w));
  }
  return (
    n(),
    () => {
      var g;
      c.forEach((m) => {
        i && m.removeEventListener("scroll", n),
          o && m.removeEventListener("resize", n);
      }),
        d == null || d(),
        (g = h) == null || g.disconnect(),
        (h = null),
        l && cancelAnimationFrame(x);
    }
  );
}
const sk = RP,
  ak = jP,
  lk = kP,
  uk = DP,
  ck = NP,
  Zp = PP,
  dk = MP,
  fk = (e, t, n) => {
    const r = new Map(),
      i = { platform: rk, ...n },
      o = { ...i.platform, _c: r };
    return TP(e, t, { ...i, platform: o });
  };
var hk = typeof document < "u",
  pk = function () {},
  ua = hk ? S.useLayoutEffect : pk;
function Ga(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == "function" && e.toString() === t.toString()) return !0;
  let n, r, i;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (((n = e.length), n !== t.length)) return !1;
      for (r = n; r-- !== 0; ) if (!Ga(e[r], t[r])) return !1;
      return !0;
    }
    if (((i = Object.keys(e)), (n = i.length), n !== Object.keys(t).length))
      return !1;
    for (r = n; r-- !== 0; ) if (!{}.hasOwnProperty.call(t, i[r])) return !1;
    for (r = n; r-- !== 0; ) {
      const o = i[r];
      if (!(o === "_owner" && e.$$typeof) && !Ga(e[o], t[o])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Z0(e) {
  return typeof window > "u"
    ? 1
    : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Jp(e, t) {
  const n = Z0(e);
  return Math.round(t * n) / n;
}
function wu(e) {
  const t = S.useRef(e);
  return (
    ua(() => {
      t.current = e;
    }),
    t
  );
}
function mk(e) {
  e === void 0 && (e = {});
  const {
      placement: t = "bottom",
      strategy: n = "absolute",
      middleware: r = [],
      platform: i,
      elements: { reference: o, floating: s } = {},
      transform: a = !0,
      whileElementsMounted: l,
      open: u,
    } = e,
    [c, d] = S.useState({
      x: 0,
      y: 0,
      strategy: n,
      placement: t,
      middlewareData: {},
      isPositioned: !1,
    }),
    [f, h] = S.useState(r);
  Ga(f, r) || h(r);
  const [x, y] = S.useState(null),
    [w, g] = S.useState(null),
    m = S.useCallback((P) => {
      P !== C.current && ((C.current = P), y(P));
    }, []),
    v = S.useCallback((P) => {
      P !== T.current && ((T.current = P), g(P));
    }, []),
    b = o || x,
    E = s || w,
    C = S.useRef(null),
    T = S.useRef(null),
    k = S.useRef(c),
    M = l != null,
    N = wu(l),
    F = wu(i),
    O = wu(u),
    U = S.useCallback(() => {
      if (!C.current || !T.current) return;
      const P = { placement: t, strategy: n, middleware: f };
      F.current && (P.platform = F.current),
        fk(C.current, T.current, P).then((A) => {
          const I = { ...A, isPositioned: O.current !== !1 };
          L.current &&
            !Ga(k.current, I) &&
            ((k.current = I),
            fs.flushSync(() => {
              d(I);
            }));
        });
    }, [f, t, n, F, O]);
  ua(() => {
    u === !1 &&
      k.current.isPositioned &&
      ((k.current.isPositioned = !1), d((P) => ({ ...P, isPositioned: !1 })));
  }, [u]);
  const L = S.useRef(!1);
  ua(
    () => (
      (L.current = !0),
      () => {
        L.current = !1;
      }
    ),
    []
  ),
    ua(() => {
      if ((b && (C.current = b), E && (T.current = E), b && E)) {
        if (N.current) return N.current(b, E, U);
        U();
      }
    }, [b, E, U, N, M]);
  const W = S.useMemo(
      () => ({ reference: C, floating: T, setReference: m, setFloating: v }),
      [m, v]
    ),
    z = S.useMemo(() => ({ reference: b, floating: E }), [b, E]),
    H = S.useMemo(() => {
      const P = { position: n, left: 0, top: 0 };
      if (!z.floating) return P;
      const A = Jp(z.floating, c.x),
        I = Jp(z.floating, c.y);
      return a
        ? {
            ...P,
            transform: "translate(" + A + "px, " + I + "px)",
            ...(Z0(z.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: n, left: A, top: I };
    }, [n, a, z.floating, c.x, c.y]);
  return S.useMemo(
    () => ({ ...c, update: U, refs: W, elements: z, floatingStyles: H }),
    [c, U, W, z, H]
  );
}
const gk = (e) => {
    function t(n) {
      return {}.hasOwnProperty.call(n, "current");
    }
    return {
      name: "arrow",
      options: e,
      fn(n) {
        const { element: r, padding: i } = typeof e == "function" ? e(n) : e;
        return r && t(r)
          ? r.current != null
            ? Zp({ element: r.current, padding: i }).fn(n)
            : {}
          : r
          ? Zp({ element: r, padding: i }).fn(n)
          : {};
      },
    };
  },
  yk = (e, t) => ({ ...sk(e), options: [e, t] }),
  vk = (e, t) => ({ ...ak(e), options: [e, t] }),
  xk = (e, t) => ({ ...dk(e), options: [e, t] }),
  wk = (e, t) => ({ ...lk(e), options: [e, t] }),
  Sk = (e, t) => ({ ...uk(e), options: [e, t] }),
  bk = (e, t) => ({ ...ck(e), options: [e, t] }),
  Ek = (e, t) => ({ ...gk(e), options: [e, t] });
var Ck = "Arrow",
  J0 = S.forwardRef((e, t) => {
    const { children: n, width: r = 10, height: i = 5, ...o } = e;
    return p.jsx(it.svg, {
      ...o,
      ref: t,
      width: r,
      height: i,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : p.jsx("polygon", { points: "0,0 30,0 15,10" }),
    });
  });
J0.displayName = Ck;
var Tk = J0;
function Pk(e) {
  const [t, n] = S.useState(void 0);
  return (
    ir(() => {
      if (e) {
        n({ width: e.offsetWidth, height: e.offsetHeight });
        const r = new ResizeObserver((i) => {
          if (!Array.isArray(i) || !i.length) return;
          const o = i[0];
          let s, a;
          if ("borderBoxSize" in o) {
            const l = o.borderBoxSize,
              u = Array.isArray(l) ? l[0] : l;
            (s = u.inlineSize), (a = u.blockSize);
          } else (s = e.offsetWidth), (a = e.offsetHeight);
          n({ width: s, height: a });
        });
        return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
      } else n(void 0);
    }, [e]),
    t
  );
}
var ex = "Popper",
  [tx, nx] = Cl(ex),
  [yM, rx] = tx(ex),
  ix = "PopperAnchor",
  ox = S.forwardRef((e, t) => {
    const { __scopePopper: n, virtualRef: r, ...i } = e,
      o = rx(ix, n),
      s = S.useRef(null),
      a = Bt(t, s);
    return (
      S.useEffect(() => {
        o.onAnchorChange((r == null ? void 0 : r.current) || s.current);
      }),
      r ? null : p.jsx(it.div, { ...i, ref: a })
    );
  });
ox.displayName = ix;
var Nf = "PopperContent",
  [kk, Nk] = tx(Nf),
  sx = S.forwardRef((e, t) => {
    var te, Kr, bn, mr, En, Gr;
    const {
        __scopePopper: n,
        side: r = "bottom",
        sideOffset: i = 0,
        align: o = "center",
        alignOffset: s = 0,
        arrowPadding: a = 0,
        avoidCollisions: l = !0,
        collisionBoundary: u = [],
        collisionPadding: c = 0,
        sticky: d = "partial",
        hideWhenDetached: f = !1,
        updatePositionStrategy: h = "optimized",
        onPlaced: x,
        ...y
      } = e,
      w = rx(Nf, n),
      [g, m] = S.useState(null),
      v = Bt(t, (Cn) => m(Cn)),
      [b, E] = S.useState(null),
      C = Pk(b),
      T = (C == null ? void 0 : C.width) ?? 0,
      k = (C == null ? void 0 : C.height) ?? 0,
      M = r + (o !== "center" ? "-" + o : ""),
      N =
        typeof c == "number"
          ? c
          : { top: 0, right: 0, bottom: 0, left: 0, ...c },
      F = Array.isArray(u) ? u : [u],
      O = F.length > 0,
      U = { padding: N, boundary: F.filter(Rk), altBoundary: O },
      {
        refs: L,
        floatingStyles: W,
        placement: z,
        isPositioned: H,
        middlewareData: P,
      } = mk({
        strategy: "fixed",
        placement: M,
        whileElementsMounted: (...Cn) =>
          ok(...Cn, { animationFrame: h === "always" }),
        elements: { reference: w.anchor },
        middleware: [
          yk({ mainAxis: i + k, alignmentAxis: s }),
          l &&
            vk({
              mainAxis: !0,
              crossAxis: !1,
              limiter: d === "partial" ? xk() : void 0,
              ...U,
            }),
          l && wk({ ...U }),
          Sk({
            ...U,
            apply: ({
              elements: Cn,
              rects: xs,
              availableWidth: Fl,
              availableHeight: ws,
            }) => {
              const { width: Vl, height: eo } = xs.reference,
                Qr = Cn.floating.style;
              Qr.setProperty("--radix-popper-available-width", `${Fl}px`),
                Qr.setProperty("--radix-popper-available-height", `${ws}px`),
                Qr.setProperty("--radix-popper-anchor-width", `${Vl}px`),
                Qr.setProperty("--radix-popper-anchor-height", `${eo}px`);
            },
          }),
          b && Ek({ element: b, padding: a }),
          jk({ arrowWidth: T, arrowHeight: k }),
          f && bk({ strategy: "referenceHidden", ...U }),
        ],
      }),
      [A, I] = ux(z),
      $ = rr(x);
    ir(() => {
      H && ($ == null || $());
    }, [H, $]);
    const B = (te = P.arrow) == null ? void 0 : te.x,
      Y = (Kr = P.arrow) == null ? void 0 : Kr.y,
      q = ((bn = P.arrow) == null ? void 0 : bn.centerOffset) !== 0,
      [we, Le] = S.useState();
    return (
      ir(() => {
        g && Le(window.getComputedStyle(g).zIndex);
      }, [g]),
      p.jsx("div", {
        ref: L.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...W,
          transform: H ? W.transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: we,
          "--radix-popper-transform-origin": [
            (mr = P.transformOrigin) == null ? void 0 : mr.x,
            (En = P.transformOrigin) == null ? void 0 : En.y,
          ].join(" "),
          ...(((Gr = P.hide) == null ? void 0 : Gr.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none",
          }),
        },
        dir: e.dir,
        children: p.jsx(kk, {
          scope: n,
          placedSide: A,
          onArrowChange: E,
          arrowX: B,
          arrowY: Y,
          shouldHideArrow: q,
          children: p.jsx(it.div, {
            "data-side": A,
            "data-align": I,
            ...y,
            ref: v,
            style: { ...y.style, animation: H ? void 0 : "none" },
          }),
        }),
      })
    );
  });
sx.displayName = Nf;
var ax = "PopperArrow",
  Ak = { top: "bottom", right: "left", bottom: "top", left: "right" },
  lx = S.forwardRef(function (t, n) {
    const { __scopePopper: r, ...i } = t,
      o = Nk(ax, r),
      s = Ak[o.placedSide];
    return p.jsx("span", {
      ref: o.onArrowChange,
      style: {
        position: "absolute",
        left: o.arrowX,
        top: o.arrowY,
        [s]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0",
        }[o.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)",
        }[o.placedSide],
        visibility: o.shouldHideArrow ? "hidden" : void 0,
      },
      children: p.jsx(Tk, {
        ...i,
        ref: n,
        style: { ...i.style, display: "block" },
      }),
    });
  });
lx.displayName = ax;
function Rk(e) {
  return e !== null;
}
var jk = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var w, g, m;
    const { placement: n, rects: r, middlewareData: i } = t,
      s = ((w = i.arrow) == null ? void 0 : w.centerOffset) !== 0,
      a = s ? 0 : e.arrowWidth,
      l = s ? 0 : e.arrowHeight,
      [u, c] = ux(n),
      d = { start: "0%", center: "50%", end: "100%" }[c],
      f = (((g = i.arrow) == null ? void 0 : g.x) ?? 0) + a / 2,
      h = (((m = i.arrow) == null ? void 0 : m.y) ?? 0) + l / 2;
    let x = "",
      y = "";
    return (
      u === "bottom"
        ? ((x = s ? d : `${f}px`), (y = `${-l}px`))
        : u === "top"
        ? ((x = s ? d : `${f}px`), (y = `${r.floating.height + l}px`))
        : u === "right"
        ? ((x = `${-l}px`), (y = s ? d : `${h}px`))
        : u === "left" &&
          ((x = `${r.floating.width + l}px`), (y = s ? d : `${h}px`)),
      { data: { x, y } }
    );
  },
});
function ux(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var Mk = ox,
  Dk = sx,
  Lk = lx,
  [Rl, vM] = Cl("Tooltip", [nx]),
  Af = nx(),
  cx = "TooltipProvider",
  Ok = 700,
  em = "tooltip.open",
  [Ik, dx] = Rl(cx),
  fx = (e) => {
    const {
        __scopeTooltip: t,
        delayDuration: n = Ok,
        skipDelayDuration: r = 300,
        disableHoverableContent: i = !1,
        children: o,
      } = e,
      s = S.useRef(!0),
      a = S.useRef(!1),
      l = S.useRef(0);
    return (
      S.useEffect(() => {
        const u = l.current;
        return () => window.clearTimeout(u);
      }, []),
      p.jsx(Ik, {
        scope: t,
        isOpenDelayedRef: s,
        delayDuration: n,
        onOpen: S.useCallback(() => {
          window.clearTimeout(l.current), (s.current = !1);
        }, []),
        onClose: S.useCallback(() => {
          window.clearTimeout(l.current),
            (l.current = window.setTimeout(() => (s.current = !0), r));
        }, [r]),
        isPointerInTransitRef: a,
        onPointerInTransitChange: S.useCallback((u) => {
          a.current = u;
        }, []),
        disableHoverableContent: i,
        children: o,
      })
    );
  };
fx.displayName = cx;
var hx = "Tooltip",
  [xM, jl] = Rl(hx),
  Kc = "TooltipTrigger",
  Fk = S.forwardRef((e, t) => {
    const { __scopeTooltip: n, ...r } = e,
      i = jl(Kc, n),
      o = dx(Kc, n),
      s = Af(n),
      a = S.useRef(null),
      l = Bt(t, a, i.onTriggerChange),
      u = S.useRef(!1),
      c = S.useRef(!1),
      d = S.useCallback(() => (u.current = !1), []);
    return (
      S.useEffect(
        () => () => document.removeEventListener("pointerup", d),
        [d]
      ),
      p.jsx(Mk, {
        asChild: !0,
        ...s,
        children: p.jsx(it.button, {
          "aria-describedby": i.open ? i.contentId : void 0,
          "data-state": i.stateAttribute,
          ...r,
          ref: l,
          onPointerMove: Te(e.onPointerMove, (f) => {
            f.pointerType !== "touch" &&
              !c.current &&
              !o.isPointerInTransitRef.current &&
              (i.onTriggerEnter(), (c.current = !0));
          }),
          onPointerLeave: Te(e.onPointerLeave, () => {
            i.onTriggerLeave(), (c.current = !1);
          }),
          onPointerDown: Te(e.onPointerDown, () => {
            i.open && i.onClose(),
              (u.current = !0),
              document.addEventListener("pointerup", d, { once: !0 });
          }),
          onFocus: Te(e.onFocus, () => {
            u.current || i.onOpen();
          }),
          onBlur: Te(e.onBlur, i.onClose),
          onClick: Te(e.onClick, i.onClose),
        }),
      })
    );
  });
Fk.displayName = Kc;
var Vk = "TooltipPortal",
  [wM, _k] = Rl(Vk, { forceMount: void 0 }),
  zi = "TooltipContent",
  px = S.forwardRef((e, t) => {
    const n = _k(zi, e.__scopeTooltip),
      { forceMount: r = n.forceMount, side: i = "top", ...o } = e,
      s = jl(zi, e.__scopeTooltip);
    return p.jsx(gf, {
      present: r || s.open,
      children: s.disableHoverableContent
        ? p.jsx(mx, { side: i, ...o, ref: t })
        : p.jsx(zk, { side: i, ...o, ref: t }),
    });
  }),
  zk = S.forwardRef((e, t) => {
    const n = jl(zi, e.__scopeTooltip),
      r = dx(zi, e.__scopeTooltip),
      i = S.useRef(null),
      o = Bt(t, i),
      [s, a] = S.useState(null),
      { trigger: l, onClose: u } = n,
      c = i.current,
      { onPointerInTransitChange: d } = r,
      f = S.useCallback(() => {
        a(null), d(!1);
      }, [d]),
      h = S.useCallback(
        (x, y) => {
          const w = x.currentTarget,
            g = { x: x.clientX, y: x.clientY },
            m = Hk(g, w.getBoundingClientRect()),
            v = Kk(g, m),
            b = Gk(y.getBoundingClientRect()),
            E = Yk([...v, ...b]);
          a(E), d(!0);
        },
        [d]
      );
    return (
      S.useEffect(() => () => f(), [f]),
      S.useEffect(() => {
        if (l && c) {
          const x = (w) => h(w, c),
            y = (w) => h(w, l);
          return (
            l.addEventListener("pointerleave", x),
            c.addEventListener("pointerleave", y),
            () => {
              l.removeEventListener("pointerleave", x),
                c.removeEventListener("pointerleave", y);
            }
          );
        }
      }, [l, c, h, f]),
      S.useEffect(() => {
        if (s) {
          const x = (y) => {
            const w = y.target,
              g = { x: y.clientX, y: y.clientY },
              m =
                (l == null ? void 0 : l.contains(w)) ||
                (c == null ? void 0 : c.contains(w)),
              v = !Qk(g, s);
            m ? f() : v && (f(), u());
          };
          return (
            document.addEventListener("pointermove", x),
            () => document.removeEventListener("pointermove", x)
          );
        }
      }, [l, c, s, u, f]),
      p.jsx(mx, { ...e, ref: o })
    );
  }),
  [Bk, $k] = Rl(hx, { isInside: !1 }),
  Uk = IC("TooltipContent"),
  mx = S.forwardRef((e, t) => {
    const {
        __scopeTooltip: n,
        children: r,
        "aria-label": i,
        onEscapeKeyDown: o,
        onPointerDownOutside: s,
        ...a
      } = e,
      l = jl(zi, n),
      u = Af(n),
      { onClose: c } = l;
    return (
      S.useEffect(
        () => (
          document.addEventListener(em, c),
          () => document.removeEventListener(em, c)
        ),
        [c]
      ),
      S.useEffect(() => {
        if (l.trigger) {
          const d = (f) => {
            const h = f.target;
            h != null && h.contains(l.trigger) && c();
          };
          return (
            window.addEventListener("scroll", d, { capture: !0 }),
            () => window.removeEventListener("scroll", d, { capture: !0 })
          );
        }
      }, [l.trigger, c]),
      p.jsx(mf, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: o,
        onPointerDownOutside: s,
        onFocusOutside: (d) => d.preventDefault(),
        onDismiss: c,
        children: p.jsxs(Dk, {
          "data-state": l.stateAttribute,
          ...u,
          ...a,
          ref: t,
          style: {
            ...a.style,
            "--radix-tooltip-content-transform-origin":
              "var(--radix-popper-transform-origin)",
            "--radix-tooltip-content-available-width":
              "var(--radix-popper-available-width)",
            "--radix-tooltip-content-available-height":
              "var(--radix-popper-available-height)",
            "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-tooltip-trigger-height":
              "var(--radix-popper-anchor-height)",
          },
          children: [
            p.jsx(Uk, { children: r }),
            p.jsx(Bk, {
              scope: n,
              isInside: !0,
              children: p.jsx(aT, {
                id: l.contentId,
                role: "tooltip",
                children: i || r,
              }),
            }),
          ],
        }),
      })
    );
  });
px.displayName = zi;
var gx = "TooltipArrow",
  Wk = S.forwardRef((e, t) => {
    const { __scopeTooltip: n, ...r } = e,
      i = Af(n);
    return $k(gx, n).isInside ? null : p.jsx(Lk, { ...i, ...r, ref: t });
  });
Wk.displayName = gx;
function Hk(e, t) {
  const n = Math.abs(t.top - e.y),
    r = Math.abs(t.bottom - e.y),
    i = Math.abs(t.right - e.x),
    o = Math.abs(t.left - e.x);
  switch (Math.min(n, r, i, o)) {
    case o:
      return "left";
    case i:
      return "right";
    case n:
      return "top";
    case r:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function Kk(e, t, n = 5) {
  const r = [];
  switch (t) {
    case "top":
      r.push({ x: e.x - n, y: e.y + n }, { x: e.x + n, y: e.y + n });
      break;
    case "bottom":
      r.push({ x: e.x - n, y: e.y - n }, { x: e.x + n, y: e.y - n });
      break;
    case "left":
      r.push({ x: e.x + n, y: e.y - n }, { x: e.x + n, y: e.y + n });
      break;
    case "right":
      r.push({ x: e.x - n, y: e.y - n }, { x: e.x - n, y: e.y + n });
      break;
  }
  return r;
}
function Gk(e) {
  const { top: t, right: n, bottom: r, left: i } = e;
  return [
    { x: i, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: i, y: r },
  ];
}
function Qk(e, t) {
  const { x: n, y: r } = e;
  let i = !1;
  for (let o = 0, s = t.length - 1; o < t.length; s = o++) {
    const a = t[o],
      l = t[s],
      u = a.x,
      c = a.y,
      d = l.x,
      f = l.y;
    c > r != f > r && n < ((d - u) * (r - c)) / (f - c) + u && (i = !i);
  }
  return i;
}
function Yk(e) {
  const t = e.slice();
  return (
    t.sort((n, r) =>
      n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0
    ),
    Xk(t)
  );
}
function Xk(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let r = 0; r < e.length; r++) {
    const i = e[r];
    for (; t.length >= 2; ) {
      const o = t[t.length - 1],
        s = t[t.length - 2];
      if ((o.x - s.x) * (i.y - s.y) >= (o.y - s.y) * (i.x - s.x)) t.pop();
      else break;
    }
    t.push(i);
  }
  t.pop();
  const n = [];
  for (let r = e.length - 1; r >= 0; r--) {
    const i = e[r];
    for (; n.length >= 2; ) {
      const o = n[n.length - 1],
        s = n[n.length - 2];
      if ((o.x - s.x) * (i.y - s.y) >= (o.y - s.y) * (i.x - s.x)) n.pop();
      else break;
    }
    n.push(i);
  }
  return (
    n.pop(),
    t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y
      ? t
      : t.concat(n)
  );
}
var qk = fx,
  yx = px;
const Zk = qk,
  Jk = S.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) =>
    p.jsx(yx, {
      ref: r,
      sideOffset: t,
      className: Hr(
        "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        e
      ),
      ...n,
    })
  );
Jk.displayName = yx.displayName;
const vx = S.createContext({});
function e2(e) {
  const t = S.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const t2 = typeof window < "u",
  n2 = t2 ? S.useLayoutEffect : S.useEffect,
  Rf = S.createContext(null);
function jf(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Qa(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
const on = (e, t, n) => (n > t ? t : n < e ? e : n);
let Ml = () => {},
  Bi = () => {};
const ar = {},
  xx = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);
function wx(e) {
  return typeof e == "object" && e !== null;
}
const Sx = (e) => /^0[^.\s]+$/u.test(e);
function bx(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const St = (e) => e,
  r2 = (e, t) => (n) => t(e(n)),
  ms = (...e) => e.reduce(r2),
  es = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  };
class Mf {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return jf(this.subscriptions, t), () => Qa(this.subscriptions, t);
  }
  notify(t, n, r) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1) this.subscriptions[0](t, n, r);
      else
        for (let o = 0; o < i; o++) {
          const s = this.subscriptions[o];
          s && s(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const nt = (e) => e * 1e3,
  xt = (e) => e / 1e3;
function Ex(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const Cx = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  i2 = 1e-7,
  o2 = 12;
function s2(e, t, n, r, i) {
  let o,
    s,
    a = 0;
  do (s = t + (n - t) / 2), (o = Cx(s, r, i) - e), o > 0 ? (n = s) : (t = s);
  while (Math.abs(o) > i2 && ++a < o2);
  return s;
}
function gs(e, t, n, r) {
  if (e === t && n === r) return St;
  const i = (o) => s2(o, 0, 1, e, n);
  return (o) => (o === 0 || o === 1 ? o : Cx(i(o), t, r));
}
const Tx = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
  Px = (e) => (t) => 1 - e(1 - t),
  kx = gs(0.33, 1.53, 0.69, 0.99),
  Df = Px(kx),
  Nx = Tx(Df),
  Ax = (e) =>
    e >= 1
      ? 1
      : (e *= 2) < 1
      ? 0.5 * Df(e)
      : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  Lf = (e) => 1 - Math.sin(Math.acos(e)),
  Rx = Px(Lf),
  jx = Tx(Lf),
  a2 = gs(0.42, 0, 1, 1),
  l2 = gs(0, 0, 0.58, 1),
  Mx = gs(0.42, 0, 0.58, 1),
  u2 = (e) => Array.isArray(e) && typeof e[0] != "number",
  Dx = (e) => Array.isArray(e) && typeof e[0] == "number",
  tm = {
    linear: St,
    easeIn: a2,
    easeInOut: Mx,
    easeOut: l2,
    circIn: Lf,
    circInOut: jx,
    circOut: Rx,
    backIn: Df,
    backInOut: Nx,
    backOut: kx,
    anticipate: Ax,
  },
  c2 = (e) => typeof e == "string",
  nm = (e) => {
    if (Dx(e)) {
      Bi(
        e.length === 4,
        "Cubic bezier arrays must contain four numerical values.",
        "cubic-bezier-length"
      );
      const [t, n, r, i] = e;
      return gs(t, n, r, i);
    } else if (c2(e))
      return (
        Bi(
          tm[e] !== void 0,
          `Invalid easing type '${e}'`,
          "invalid-easing-type"
        ),
        tm[e]
      );
    return e;
  },
  Hs = [
    "setup",
    "read",
    "resolveKeyframes",
    "preUpdate",
    "update",
    "preRender",
    "render",
    "postRender",
  ],
  rm = { value: null, addProjectionMetrics: null };
function d2(e, t) {
  let n = new Set(),
    r = new Set(),
    i = !1,
    o = !1;
  const s = new WeakSet();
  let a = { delta: 0, timestamp: 0, isProcessing: !1 },
    l = 0;
  function u(d) {
    s.has(d) && (c.schedule(d), e()), l++, d(a);
  }
  const c = {
    schedule: (d, f = !1, h = !1) => {
      const y = h && i ? n : r;
      return f && s.add(d), y.add(d), d;
    },
    cancel: (d) => {
      r.delete(d), s.delete(d);
    },
    process: (d) => {
      if (((a = d), i)) {
        o = !0;
        return;
      }
      i = !0;
      const f = n;
      (n = r),
        (r = f),
        n.forEach(u),
        t && rm.value && rm.value.frameloop[t].push(l),
        (l = 0),
        n.clear(),
        (i = !1),
        o && ((o = !1), c.process(d));
    },
  };
  return c;
}
const f2 = 40;
function Lx(e, t) {
  let n = !1,
    r = !0;
  const i = { delta: 0, timestamp: 0, isProcessing: !1 },
    o = () => (n = !0),
    s = Hs.reduce((v, b) => ((v[b] = d2(o, t ? b : void 0)), v), {}),
    {
      setup: a,
      read: l,
      resolveKeyframes: u,
      preUpdate: c,
      update: d,
      preRender: f,
      render: h,
      postRender: x,
    } = s,
    y = () => {
      const v = ar.useManualTiming,
        b = v ? i.timestamp : performance.now();
      (n = !1),
        v ||
          (i.delta = r ? 1e3 / 60 : Math.max(Math.min(b - i.timestamp, f2), 1)),
        (i.timestamp = b),
        (i.isProcessing = !0),
        a.process(i),
        l.process(i),
        u.process(i),
        c.process(i),
        d.process(i),
        f.process(i),
        h.process(i),
        x.process(i),
        (i.isProcessing = !1),
        n && t && ((r = !1), e(y));
    },
    w = () => {
      (n = !0), (r = !0), i.isProcessing || e(y);
    };
  return {
    schedule: Hs.reduce((v, b) => {
      const E = s[b];
      return (v[b] = (C, T = !1, k = !1) => (n || w(), E.schedule(C, T, k))), v;
    }, {}),
    cancel: (v) => {
      for (let b = 0; b < Hs.length; b++) s[Hs[b]].cancel(v);
    },
    state: i,
    steps: s,
  };
}
const {
  schedule: ie,
  cancel: lr,
  state: Re,
  steps: Su,
} = Lx(typeof requestAnimationFrame < "u" ? requestAnimationFrame : St, !0);
let ca;
function h2() {
  ca = void 0;
}
const He = {
    now: () => (
      ca === void 0 &&
        He.set(
          Re.isProcessing || ar.useManualTiming
            ? Re.timestamp
            : performance.now()
        ),
      ca
    ),
    set: (e) => {
      (ca = e), queueMicrotask(h2);
    },
  },
  Ox = (e) => (t) => typeof t == "string" && t.startsWith(e),
  Ix = Ox("--"),
  p2 = Ox("var(--"),
  Of = (e) => (p2(e) ? m2.test(e.split("/*")[0].trim()) : !1),
  m2 =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function im(e) {
  return typeof e != "string" ? !1 : e.split("/*")[0].includes("var(--");
}
const qi = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  ts = { ...qi, transform: (e) => on(0, 1, e) },
  Ks = { ...qi, default: 1 },
  Ao = (e) => Math.round(e * 1e5) / 1e5,
  If = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function g2(e) {
  return e == null;
}
const y2 =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  Ff = (e, t) => (n) =>
    !!(
      (typeof n == "string" && y2.test(n) && n.startsWith(e)) ||
      (t && !g2(n) && Object.prototype.hasOwnProperty.call(n, t))
    ),
  Fx = (e, t, n) => (r) => {
    if (typeof r != "string") return r;
    const [i, o, s, a] = r.match(If);
    return {
      [e]: parseFloat(i),
      [t]: parseFloat(o),
      [n]: parseFloat(s),
      alpha: a !== void 0 ? parseFloat(a) : 1,
    };
  },
  v2 = (e) => on(0, 255, e),
  bu = { ...qi, transform: (e) => Math.round(v2(e)) },
  Tr = {
    test: Ff("rgb", "red"),
    parse: Fx("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      bu.transform(e) +
      ", " +
      bu.transform(t) +
      ", " +
      bu.transform(n) +
      ", " +
      Ao(ts.transform(r)) +
      ")",
  };
function x2(e) {
  let t = "",
    n = "",
    r = "",
    i = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (i = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (i = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (i += i)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1,
    }
  );
}
const Gc = { test: Ff("#"), parse: x2, transform: Tr.transform },
  ys = (e) => ({
    test: (t) =>
      typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  Mn = ys("deg"),
  nn = ys("%"),
  _ = ys("px"),
  w2 = ys("vh"),
  S2 = ys("vw"),
  om = {
    ...nn,
    parse: (e) => nn.parse(e) / 100,
    transform: (e) => nn.transform(e * 100),
  },
  fi = {
    test: Ff("hsl", "hue"),
    parse: Fx("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      nn.transform(Ao(t)) +
      ", " +
      nn.transform(Ao(n)) +
      ", " +
      Ao(ts.transform(r)) +
      ")",
  },
  Se = {
    test: (e) => Tr.test(e) || Gc.test(e) || fi.test(e),
    parse: (e) =>
      Tr.test(e) ? Tr.parse(e) : fi.test(e) ? fi.parse(e) : Gc.parse(e),
    transform: (e) =>
      typeof e == "string"
        ? e
        : e.hasOwnProperty("red")
        ? Tr.transform(e)
        : fi.transform(e),
    getAnimatableNone: (e) => {
      const t = Se.parse(e);
      return (t.alpha = 0), Se.transform(t);
    },
  },
  b2 =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function E2(e) {
  var t, n;
  return (
    isNaN(e) &&
    typeof e == "string" &&
    (((t = e.match(If)) == null ? void 0 : t.length) || 0) +
      (((n = e.match(b2)) == null ? void 0 : n.length) || 0) >
      0
  );
}
const Vx = "number",
  _x = "color",
  C2 = "var",
  T2 = "var(",
  sm = "${}",
  P2 =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function $i(e) {
  const t = e.toString(),
    n = [],
    r = { color: [], number: [], var: [] },
    i = [];
  let o = 0;
  const a = t
    .replace(
      P2,
      (l) => (
        Se.test(l)
          ? (r.color.push(o), i.push(_x), n.push(Se.parse(l)))
          : l.startsWith(T2)
          ? (r.var.push(o), i.push(C2), n.push(l))
          : (r.number.push(o), i.push(Vx), n.push(parseFloat(l))),
        ++o,
        sm
      )
    )
    .split(sm);
  return { values: n, split: a, indexes: r, types: i };
}
function k2(e) {
  return $i(e).values;
}
function zx({ split: e, types: t }) {
  const n = e.length;
  return (r) => {
    let i = "";
    for (let o = 0; o < n; o++)
      if (((i += e[o]), r[o] !== void 0)) {
        const s = t[o];
        s === Vx
          ? (i += Ao(r[o]))
          : s === _x
          ? (i += Se.transform(r[o]))
          : (i += r[o]);
      }
    return i;
  };
}
function N2(e) {
  return zx($i(e));
}
const A2 = (e) =>
    typeof e == "number" ? 0 : Se.test(e) ? Se.getAnimatableNone(e) : e,
  R2 = (e, t) =>
    typeof e == "number"
      ? t != null && t.trim().endsWith("/")
        ? e
        : 0
      : A2(e);
function j2(e) {
  const t = $i(e);
  return zx(t)(t.values.map((r, i) => R2(r, t.split[i])));
}
const _t = {
  test: E2,
  parse: k2,
  createTransformer: N2,
  getAnimatableNone: j2,
};
function Eu(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
      ? t
      : n < 2 / 3
      ? e + (t - e) * (2 / 3 - n) * 6
      : e
  );
}
function M2({ hue: e, saturation: t, lightness: n, alpha: r }) {
  (e /= 360), (t /= 100), (n /= 100);
  let i = 0,
    o = 0,
    s = 0;
  if (!t) i = o = s = n;
  else {
    const a = n < 0.5 ? n * (1 + t) : n + t - n * t,
      l = 2 * n - a;
    (i = Eu(l, a, e + 1 / 3)), (o = Eu(l, a, e)), (s = Eu(l, a, e - 1 / 3));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(o * 255),
    blue: Math.round(s * 255),
    alpha: r,
  };
}
function Ya(e, t) {
  return (n) => (n > 0 ? t : e);
}
const le = (e, t, n) => e + (t - e) * n,
  Cu = (e, t, n) => {
    const r = e * e,
      i = n * (t * t - r) + r;
    return i < 0 ? 0 : Math.sqrt(i);
  },
  D2 = [Gc, Tr, fi],
  L2 = (e) => D2.find((t) => t.test(e));
function am(e) {
  const t = L2(e);
  if (
    (Ml(
      !!t,
      `'${e}' is not an animatable color. Use the equivalent color code instead.`,
      "color-not-animatable"
    ),
    !t)
  )
    return !1;
  let n = t.parse(e);
  return t === fi && (n = M2(n)), n;
}
const lm = (e, t) => {
    const n = am(e),
      r = am(t);
    if (!n || !r) return Ya(e, t);
    const i = { ...n };
    return (o) => (
      (i.red = Cu(n.red, r.red, o)),
      (i.green = Cu(n.green, r.green, o)),
      (i.blue = Cu(n.blue, r.blue, o)),
      (i.alpha = le(n.alpha, r.alpha, o)),
      Tr.transform(i)
    );
  },
  Qc = new Set(["none", "hidden"]);
function O2(e, t) {
  return Qc.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e);
}
function I2(e, t) {
  return (n) => le(e, t, n);
}
function Vf(e) {
  return typeof e == "number"
    ? I2
    : typeof e == "string"
    ? Of(e)
      ? Ya
      : Se.test(e)
      ? lm
      : _2
    : Array.isArray(e)
    ? Bx
    : typeof e == "object"
    ? Se.test(e)
      ? lm
      : F2
    : Ya;
}
function Bx(e, t) {
  const n = [...e],
    r = n.length,
    i = e.map((o, s) => Vf(o)(o, t[s]));
  return (o) => {
    for (let s = 0; s < r; s++) n[s] = i[s](o);
    return n;
  };
}
function F2(e, t) {
  const n = { ...e, ...t },
    r = {};
  for (const i in n)
    e[i] !== void 0 && t[i] !== void 0 && (r[i] = Vf(e[i])(e[i], t[i]));
  return (i) => {
    for (const o in r) n[o] = r[o](i);
    return n;
  };
}
function V2(e, t) {
  const n = [],
    r = { color: 0, var: 0, number: 0 };
  for (let i = 0; i < t.values.length; i++) {
    const o = t.types[i],
      s = e.indexes[o][r[o]],
      a = e.values[s] ?? 0;
    (n[i] = a), r[o]++;
  }
  return n;
}
const _2 = (e, t) => {
  const n = _t.createTransformer(t),
    r = $i(e),
    i = $i(t);
  return r.indexes.var.length === i.indexes.var.length &&
    r.indexes.color.length === i.indexes.color.length &&
    r.indexes.number.length >= i.indexes.number.length
    ? (Qc.has(e) && !i.values.length) || (Qc.has(t) && !r.values.length)
      ? O2(e, t)
      : ms(Bx(V2(r, i), i.values), n)
    : (Ml(
        !0,
        `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`,
        "complex-values-different"
      ),
      Ya(e, t));
};
function $x(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number"
    ? le(e, t, n)
    : Vf(e)(e, t);
}
const z2 = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: (n = !0) => ie.update(t, n),
      stop: () => lr(t),
      now: () => (Re.isProcessing ? Re.timestamp : He.now()),
    };
  },
  Ux = (e, t, n = 10) => {
    let r = "";
    const i = Math.max(Math.round(t / n), 2);
    for (let o = 0; o < i; o++)
      r += Math.round(e(o / (i - 1)) * 1e4) / 1e4 + ", ";
    return `linear(${r.substring(0, r.length - 2)})`;
  },
  Xa = 2e4;
function _f(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < Xa; ) (t += n), (r = e.next(t));
  return t >= Xa ? 1 / 0 : t;
}
function B2(e, t = 100, n) {
  const r = n({ ...e, keyframes: [0, t] }),
    i = Math.min(_f(r), Xa);
  return {
    type: "keyframes",
    ease: (o) => r.next(i * o).value / t,
    duration: xt(i),
  };
}
const fe = {
  stiffness: 100,
  damping: 10,
  mass: 1,
  velocity: 0,
  duration: 800,
  bounce: 0.3,
  visualDuration: 0.3,
  restSpeed: { granular: 0.01, default: 2 },
  restDelta: { granular: 0.005, default: 0.5 },
  minDuration: 0.01,
  maxDuration: 10,
  minDamping: 0.05,
  maxDamping: 1,
};
function Yc(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const $2 = 12;
function U2(e, t, n) {
  let r = n;
  for (let i = 1; i < $2; i++) r = r - e(r) / t(r);
  return r;
}
const Tu = 0.001;
function W2({
  duration: e = fe.duration,
  bounce: t = fe.bounce,
  velocity: n = fe.velocity,
  mass: r = fe.mass,
}) {
  let i, o;
  Ml(
    e <= nt(fe.maxDuration),
    "Spring duration must be 10 seconds or less",
    "spring-duration-limit"
  );
  let s = 1 - t;
  (s = on(fe.minDamping, fe.maxDamping, s)),
    (e = on(fe.minDuration, fe.maxDuration, xt(e))),
    s < 1
      ? ((i = (u) => {
          const c = u * s,
            d = c * e,
            f = c - n,
            h = Yc(u, s),
            x = Math.exp(-d);
          return Tu - (f / h) * x;
        }),
        (o = (u) => {
          const d = u * s * e,
            f = d * n + n,
            h = Math.pow(s, 2) * Math.pow(u, 2) * e,
            x = Math.exp(-d),
            y = Yc(Math.pow(u, 2), s);
          return ((-i(u) + Tu > 0 ? -1 : 1) * ((f - h) * x)) / y;
        }))
      : ((i = (u) => {
          const c = Math.exp(-u * e),
            d = (u - n) * e + 1;
          return -Tu + c * d;
        }),
        (o = (u) => {
          const c = Math.exp(-u * e),
            d = (n - u) * (e * e);
          return c * d;
        }));
  const a = 5 / e,
    l = U2(i, o, a);
  if (((e = nt(e)), isNaN(l)))
    return { stiffness: fe.stiffness, damping: fe.damping, duration: e };
  {
    const u = Math.pow(l, 2) * r;
    return { stiffness: u, damping: s * 2 * Math.sqrt(r * u), duration: e };
  }
}
const H2 = ["duration", "bounce"],
  K2 = ["stiffness", "damping", "mass"];
function um(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function G2(e) {
  let t = {
    velocity: fe.velocity,
    stiffness: fe.stiffness,
    damping: fe.damping,
    mass: fe.mass,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!um(e, K2) && um(e, H2))
    if (((t.velocity = 0), e.visualDuration)) {
      const n = e.visualDuration,
        r = (2 * Math.PI) / (n * 1.2),
        i = r * r,
        o = 2 * on(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
      t = { ...t, mass: fe.mass, stiffness: i, damping: o };
    } else {
      const n = W2({ ...e, velocity: 0 });
      (t = { ...t, ...n, mass: fe.mass }), (t.isResolvedFromDuration = !0);
    }
  return t;
}
function qa(e = fe.visualDuration, t = fe.bounce) {
  const n =
    typeof e != "object"
      ? { visualDuration: e, keyframes: [0, 1], bounce: t }
      : e;
  let { restSpeed: r, restDelta: i } = n;
  const o = n.keyframes[0],
    s = n.keyframes[n.keyframes.length - 1],
    a = { done: !1, value: o },
    {
      stiffness: l,
      damping: u,
      mass: c,
      duration: d,
      velocity: f,
      isResolvedFromDuration: h,
    } = G2({ ...n, velocity: -xt(n.velocity || 0) }),
    x = f || 0,
    y = u / (2 * Math.sqrt(l * c)),
    w = s - o,
    g = xt(Math.sqrt(l / c)),
    m = Math.abs(w) < 5;
  r || (r = m ? fe.restSpeed.granular : fe.restSpeed.default),
    i || (i = m ? fe.restDelta.granular : fe.restDelta.default);
  let v, b, E, C, T, k;
  if (y < 1)
    (E = Yc(g, y)),
      (C = (x + y * g * w) / E),
      (v = (N) => {
        const F = Math.exp(-y * g * N);
        return s - F * (C * Math.sin(E * N) + w * Math.cos(E * N));
      }),
      (T = y * g * C + w * E),
      (k = y * g * w - C * E),
      (b = (N) =>
        Math.exp(-y * g * N) * (T * Math.sin(E * N) + k * Math.cos(E * N)));
  else if (y === 1) {
    v = (F) => s - Math.exp(-g * F) * (w + (x + g * w) * F);
    const N = x + g * w;
    b = (F) => Math.exp(-g * F) * (g * N * F - x);
  } else {
    const N = g * Math.sqrt(y * y - 1);
    v = (L) => {
      const W = Math.exp(-y * g * L),
        z = Math.min(N * L, 300);
      return (
        s - (W * ((x + y * g * w) * Math.sinh(z) + N * w * Math.cosh(z))) / N
      );
    };
    const F = (x + y * g * w) / N,
      O = y * g * F - w * N,
      U = y * g * w - F * N;
    b = (L) => {
      const W = Math.exp(-y * g * L),
        z = Math.min(N * L, 300);
      return W * (O * Math.sinh(z) + U * Math.cosh(z));
    };
  }
  const M = {
    calculatedDuration: (h && d) || null,
    velocity: (N) => nt(b(N)),
    next: (N) => {
      if (!h && y < 1) {
        const O = Math.exp(-y * g * N),
          U = Math.sin(E * N),
          L = Math.cos(E * N),
          W = s - O * (C * U + w * L),
          z = nt(O * (T * U + k * L));
        return (
          (a.done = Math.abs(z) <= r && Math.abs(s - W) <= i),
          (a.value = a.done ? s : W),
          a
        );
      }
      const F = v(N);
      if (h) a.done = N >= d;
      else {
        const O = nt(b(N));
        a.done = Math.abs(O) <= r && Math.abs(s - F) <= i;
      }
      return (a.value = a.done ? s : F), a;
    },
    toString: () => {
      const N = Math.min(_f(M), Xa),
        F = Ux((O) => M.next(N * O).value, N, 30);
      return N + "ms " + F;
    },
    toTransition: () => {},
  };
  return M;
}
qa.applyToOptions = (e) => {
  const t = B2(e, 100, qa);
  return (
    (e.ease = t.ease), (e.duration = nt(t.duration)), (e.type = "keyframes"), e
  );
};
const Q2 = 5;
function Wx(e, t, n) {
  const r = Math.max(t - Q2, 0);
  return Ex(n - e(r), t - r);
}
function Xc({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: i = 10,
  bounceStiffness: o = 500,
  modifyTarget: s,
  min: a,
  max: l,
  restDelta: u = 0.5,
  restSpeed: c,
}) {
  const d = e[0],
    f = { done: !1, value: d },
    h = (k) => (a !== void 0 && k < a) || (l !== void 0 && k > l),
    x = (k) =>
      a === void 0
        ? l
        : l === void 0 || Math.abs(a - k) < Math.abs(l - k)
        ? a
        : l;
  let y = n * t;
  const w = d + y,
    g = s === void 0 ? w : s(w);
  g !== w && (y = g - d);
  const m = (k) => -y * Math.exp(-k / r),
    v = (k) => g + m(k),
    b = (k) => {
      const M = m(k),
        N = v(k);
      (f.done = Math.abs(M) <= u), (f.value = f.done ? g : N);
    };
  let E, C;
  const T = (k) => {
    h(f.value) &&
      ((E = k),
      (C = qa({
        keyframes: [f.value, x(f.value)],
        velocity: Wx(v, k, f.value),
        damping: i,
        stiffness: o,
        restDelta: u,
        restSpeed: c,
      })));
  };
  return (
    T(0),
    {
      calculatedDuration: null,
      next: (k) => {
        let M = !1;
        return (
          !C && E === void 0 && ((M = !0), b(k), T(k)),
          E !== void 0 && k >= E ? C.next(k - E) : (!M && b(k), f)
        );
      },
    }
  );
}
function Y2(e, t, n) {
  const r = [],
    i = n || ar.mix || $x,
    o = e.length - 1;
  for (let s = 0; s < o; s++) {
    let a = i(e[s], e[s + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[s] || St : t;
      a = ms(l, a);
    }
    r.push(a);
  }
  return r;
}
function X2(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  const o = e.length;
  if (
    (Bi(
      o === t.length,
      "Both input and output ranges must be the same length",
      "range-length"
    ),
    o === 1)
  )
    return () => t[0];
  if (o === 2 && t[0] === t[1]) return () => t[1];
  const s = e[0] === e[1];
  e[0] > e[o - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const a = Y2(t, r, i),
    l = a.length,
    u = (c) => {
      if (s && c < e[0]) return t[0];
      let d = 0;
      if (l > 1) for (; d < e.length - 2 && !(c < e[d + 1]); d++);
      const f = es(e[d], e[d + 1], c);
      return a[d](f);
    };
  return n ? (c) => u(on(e[0], e[o - 1], c)) : u;
}
function q2(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const i = es(0, t, r);
    e.push(le(n, 1, i));
  }
}
function Z2(e) {
  const t = [0];
  return q2(t, e.length - 1), t;
}
function J2(e, t) {
  return e.map((n) => n * t);
}
function eN(e, t) {
  return e.map(() => t || Mx).splice(0, e.length - 1);
}
function Ro({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut",
}) {
  const i = u2(r) ? r.map(nm) : nm(r),
    o = { done: !1, value: t[0] },
    s = J2(n && n.length === t.length ? n : Z2(t), e),
    a = X2(s, t, { ease: Array.isArray(i) ? i : eN(t, i) });
  return {
    calculatedDuration: e,
    next: (l) => ((o.value = a(l)), (o.done = l >= e), o),
  };
}
const tN = (e) => e !== null;
function Dl(e, { repeat: t, repeatType: n = "loop" }, r, i = 1) {
  const o = e.filter(tN),
    a = i < 0 || (t && n !== "loop" && t % 2 === 1) ? 0 : o.length - 1;
  return !a || r === void 0 ? o[a] : r;
}
const nN = { decay: Xc, inertia: Xc, tween: Ro, keyframes: Ro, spring: qa };
function Hx(e) {
  typeof e.type == "string" && (e.type = nN[e.type]);
}
class zf {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((t) => {
      this.resolve = t;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  then(t, n) {
    return this.finished.then(t, n);
  }
}
const rN = (e) => e / 100;
class Za extends zf {
  constructor(t) {
    super(),
      (this.state = "idle"),
      (this.startTime = null),
      (this.isStopped = !1),
      (this.currentTime = 0),
      (this.holdTime = null),
      (this.playbackSpeed = 1),
      (this.delayState = { done: !1, value: void 0 }),
      (this.stop = () => {
        var r, i;
        const { motionValue: n } = this.options;
        n && n.updatedAt !== He.now() && this.tick(He.now()),
          (this.isStopped = !0),
          this.state !== "idle" &&
            (this.teardown(),
            (i = (r = this.options).onStop) == null || i.call(r));
      }),
      (this.options = t),
      this.initAnimation(),
      this.play(),
      t.autoplay === !1 && this.pause();
  }
  initAnimation() {
    const { options: t } = this;
    Hx(t);
    const {
      type: n = Ro,
      repeat: r = 0,
      repeatDelay: i = 0,
      repeatType: o,
      velocity: s = 0,
    } = t;
    let { keyframes: a } = t;
    const l = n || Ro;
    l !== Ro &&
      typeof a[0] != "number" &&
      ((this.mixKeyframes = ms(rN, $x(a[0], a[1]))), (a = [0, 100]));
    const u = l({ ...t, keyframes: a });
    o === "mirror" &&
      (this.mirroredGenerator = l({
        ...t,
        keyframes: [...a].reverse(),
        velocity: -s,
      })),
      u.calculatedDuration === null && (u.calculatedDuration = _f(u));
    const { calculatedDuration: c } = u;
    (this.calculatedDuration = c),
      (this.resolvedDuration = c + i),
      (this.totalDuration = this.resolvedDuration * (r + 1) - i),
      (this.generator = u);
  }
  updateTime(t) {
    const n = Math.round(t - this.startTime) * this.playbackSpeed;
    this.holdTime !== null
      ? (this.currentTime = this.holdTime)
      : (this.currentTime = n);
  }
  tick(t, n = !1) {
    const {
      generator: r,
      totalDuration: i,
      mixKeyframes: o,
      mirroredGenerator: s,
      resolvedDuration: a,
      calculatedDuration: l,
    } = this;
    if (this.startTime === null) return r.next(0);
    const {
      delay: u = 0,
      keyframes: c,
      repeat: d,
      repeatType: f,
      repeatDelay: h,
      type: x,
      onUpdate: y,
      finalKeyframe: w,
    } = this.options;
    this.speed > 0
      ? (this.startTime = Math.min(this.startTime, t))
      : this.speed < 0 &&
        (this.startTime = Math.min(t - i / this.speed, this.startTime)),
      n ? (this.currentTime = t) : this.updateTime(t);
    const g = this.currentTime - u * (this.playbackSpeed >= 0 ? 1 : -1),
      m = this.playbackSpeed >= 0 ? g < 0 : g > i;
    (this.currentTime = Math.max(g, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = i);
    let v = this.currentTime,
      b = r;
    if (d) {
      const k = Math.min(this.currentTime, i) / a;
      let M = Math.floor(k),
        N = k % 1;
      !N && k >= 1 && (N = 1),
        N === 1 && M--,
        (M = Math.min(M, d + 1)),
        !!(M % 2) &&
          (f === "reverse"
            ? ((N = 1 - N), h && (N -= h / a))
            : f === "mirror" && (b = s)),
        (v = on(0, 1, N) * a);
    }
    let E;
    m
      ? ((this.delayState.value = c[0]), (E = this.delayState))
      : (E = b.next(v)),
      o && !m && (E.value = o(E.value));
    let { done: C } = E;
    !m &&
      l !== null &&
      (C =
        this.playbackSpeed >= 0
          ? this.currentTime >= i
          : this.currentTime <= 0);
    const T =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && C));
    return (
      T && x !== Xc && (E.value = Dl(c, this.options, w, this.speed)),
      y && y(E.value),
      T && this.finish(),
      E
    );
  }
  then(t, n) {
    return this.finished.then(t, n);
  }
  get duration() {
    return xt(this.calculatedDuration);
  }
  get iterationDuration() {
    const { delay: t = 0 } = this.options || {};
    return this.duration + xt(t);
  }
  get time() {
    return xt(this.currentTime);
  }
  set time(t) {
    (t = nt(t)),
      (this.currentTime = t),
      this.startTime === null ||
      this.holdTime !== null ||
      this.playbackSpeed === 0
        ? (this.holdTime = t)
        : this.driver &&
          (this.startTime = this.driver.now() - t / this.playbackSpeed),
      this.driver
        ? this.driver.start(!1)
        : ((this.startTime = 0),
          (this.state = "paused"),
          (this.holdTime = t),
          this.tick(t));
  }
  getGeneratorVelocity() {
    const t = this.currentTime;
    if (t <= 0) return this.options.velocity || 0;
    if (this.generator.velocity) return this.generator.velocity(t);
    const n = this.generator.next(t).value;
    return Wx((r) => this.generator.next(r).value, t, n);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const n = this.playbackSpeed !== t;
    n && this.driver && this.updateTime(He.now()),
      (this.playbackSpeed = t),
      n && this.driver && (this.time = xt(this.currentTime));
  }
  play() {
    var i, o;
    if (this.isStopped) return;
    const { driver: t = z2, startTime: n } = this.options;
    this.driver || (this.driver = t((s) => this.tick(s))),
      (o = (i = this.options).onPlay) == null || o.call(i);
    const r = this.driver.now();
    this.state === "finished"
      ? (this.updateFinished(), (this.startTime = r))
      : this.holdTime !== null
      ? (this.startTime = r - this.holdTime)
      : this.startTime || (this.startTime = n ?? r),
      this.state === "finished" &&
        this.speed < 0 &&
        (this.startTime += this.calculatedDuration),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start();
  }
  pause() {
    (this.state = "paused"),
      this.updateTime(He.now()),
      (this.holdTime = this.currentTime);
  }
  complete() {
    this.state !== "running" && this.play(),
      (this.state = "finished"),
      (this.holdTime = null);
  }
  finish() {
    var t, n;
    this.notifyFinished(),
      this.teardown(),
      (this.state = "finished"),
      (n = (t = this.options).onComplete) == null || n.call(t);
  }
  cancel() {
    var t, n;
    (this.holdTime = null),
      (this.startTime = 0),
      this.tick(0),
      this.teardown(),
      (n = (t = this.options).onCancel) == null || n.call(t);
  }
  teardown() {
    (this.state = "idle"),
      this.stopDriver(),
      (this.startTime = this.holdTime = null);
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(t) {
    return (this.startTime = 0), this.tick(t, !0);
  }
  attachTimeline(t) {
    var n;
    return (
      this.options.allowFlatten &&
        ((this.options.type = "keyframes"),
        (this.options.ease = "linear"),
        this.initAnimation()),
      (n = this.driver) == null || n.stop(),
      t.observe(this)
    );
  }
}
function iN(e) {
  for (let t = 1; t < e.length; t++) e[t] ?? (e[t] = e[t - 1]);
}
const Pr = (e) => (e * 180) / Math.PI,
  qc = (e) => {
    const t = Pr(Math.atan2(e[1], e[0]));
    return Zc(t);
  },
  oN = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: (e) => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
    rotate: qc,
    rotateZ: qc,
    skewX: (e) => Pr(Math.atan(e[1])),
    skewY: (e) => Pr(Math.atan(e[2])),
    skew: (e) => (Math.abs(e[1]) + Math.abs(e[2])) / 2,
  },
  Zc = (e) => ((e = e % 360), e < 0 && (e += 360), e),
  cm = qc,
  dm = (e) => Math.sqrt(e[0] * e[0] + e[1] * e[1]),
  fm = (e) => Math.sqrt(e[4] * e[4] + e[5] * e[5]),
  sN = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: dm,
    scaleY: fm,
    scale: (e) => (dm(e) + fm(e)) / 2,
    rotateX: (e) => Zc(Pr(Math.atan2(e[6], e[5]))),
    rotateY: (e) => Zc(Pr(Math.atan2(-e[2], e[0]))),
    rotateZ: cm,
    rotate: cm,
    skewX: (e) => Pr(Math.atan(e[4])),
    skewY: (e) => Pr(Math.atan(e[1])),
    skew: (e) => (Math.abs(e[1]) + Math.abs(e[4])) / 2,
  };
function Jc(e) {
  return e.includes("scale") ? 1 : 0;
}
function ed(e, t) {
  if (!e || e === "none") return Jc(t);
  const n = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let r, i;
  if (n) (r = sN), (i = n);
  else {
    const a = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    (r = oN), (i = a);
  }
  if (!i) return Jc(t);
  const o = r[t],
    s = i[1].split(",").map(lN);
  return typeof o == "function" ? o(s) : s[o];
}
const aN = (e, t) => {
  const { transform: n = "none" } = getComputedStyle(e);
  return ed(n, t);
};
function lN(e) {
  return parseFloat(e.trim());
}
const Zi = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  Ji = new Set(Zi),
  hm = (e) => e === qi || e === _,
  uN = new Set(["x", "y", "z"]),
  cN = Zi.filter((e) => !uN.has(e));
function dN(e) {
  const t = [];
  return (
    cN.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t
  );
}
const Kn = {
  width: (
    { x: e },
    { paddingLeft: t = "0", paddingRight: n = "0", boxSizing: r }
  ) => {
    const i = e.max - e.min;
    return r === "border-box" ? i : i - parseFloat(t) - parseFloat(n);
  },
  height: (
    { y: e },
    { paddingTop: t = "0", paddingBottom: n = "0", boxSizing: r }
  ) => {
    const i = e.max - e.min;
    return r === "border-box" ? i : i - parseFloat(t) - parseFloat(n);
  },
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: (e, { transform: t }) => ed(t, "x"),
  y: (e, { transform: t }) => ed(t, "y"),
};
Kn.translateX = Kn.x;
Kn.translateY = Kn.y;
const Or = new Set();
let td = !1,
  nd = !1,
  rd = !1;
function Kx() {
  if (nd) {
    const e = Array.from(Or).filter((r) => r.needsMeasurement),
      t = new Set(e.map((r) => r.element)),
      n = new Map();
    t.forEach((r) => {
      const i = dN(r);
      i.length && (n.set(r, i), r.render());
    }),
      e.forEach((r) => r.measureInitialState()),
      t.forEach((r) => {
        r.render();
        const i = n.get(r);
        i &&
          i.forEach(([o, s]) => {
            var a;
            (a = r.getValue(o)) == null || a.set(s);
          });
      }),
      e.forEach((r) => r.measureEndState()),
      e.forEach((r) => {
        r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
      });
  }
  (nd = !1), (td = !1), Or.forEach((e) => e.complete(rd)), Or.clear();
}
function Gx() {
  Or.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (nd = !0);
  });
}
function fN() {
  (rd = !0), Gx(), Kx(), (rd = !1);
}
class Bf {
  constructor(t, n, r, i, o, s = !1) {
    (this.state = "pending"),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.unresolvedKeyframes = [...t]),
      (this.onComplete = n),
      (this.name = r),
      (this.motionValue = i),
      (this.element = o),
      (this.isAsync = s);
  }
  scheduleResolve() {
    (this.state = "scheduled"),
      this.isAsync
        ? (Or.add(this),
          td || ((td = !0), ie.read(Gx), ie.resolveKeyframes(Kx)))
        : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: t,
      name: n,
      element: r,
      motionValue: i,
    } = this;
    if (t[0] === null) {
      const o = i == null ? void 0 : i.get(),
        s = t[t.length - 1];
      if (o !== void 0) t[0] = o;
      else if (r && n) {
        const a = r.readValue(n, s);
        a != null && (t[0] = a);
      }
      t[0] === void 0 && (t[0] = s), i && o === void 0 && i.set(t[0]);
    }
    iN(t);
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete(t = !1) {
    (this.state = "complete"),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t),
      Or.delete(this);
  }
  cancel() {
    this.state === "scheduled" && (Or.delete(this), (this.state = "pending"));
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const hN = (e) => e.startsWith("--");
function Qx(e, t, n) {
  hN(t) ? e.style.setProperty(t, n) : (e.style[t] = n);
}
const pN = {};
function Yx(e, t) {
  const n = bx(e);
  return () => pN[t] ?? n();
}
const mN = Yx(() => window.ScrollTimeline !== void 0, "scrollTimeline"),
  Xx = Yx(() => {
    try {
      document
        .createElement("div")
        .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return !1;
    }
    return !0;
  }, "linearEasing"),
  vo = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  pm = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: vo([0, 0.65, 0.55, 1]),
    circOut: vo([0.55, 0, 1, 0.45]),
    backIn: vo([0.31, 0.01, 0.66, -0.59]),
    backOut: vo([0.33, 1.53, 0.69, 0.99]),
  };
function qx(e, t) {
  if (e)
    return typeof e == "function"
      ? Xx()
        ? Ux(e, t)
        : "ease-out"
      : Dx(e)
      ? vo(e)
      : Array.isArray(e)
      ? e.map((n) => qx(n, t) || pm.easeOut)
      : pm[e];
}
function gN(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: i = 300,
    repeat: o = 0,
    repeatType: s = "loop",
    ease: a = "easeOut",
    times: l,
  } = {},
  u = void 0
) {
  const c = { [t]: n };
  l && (c.offset = l);
  const d = qx(a, i);
  Array.isArray(d) && (c.easing = d);
  const f = {
    delay: r,
    duration: i,
    easing: Array.isArray(d) ? "linear" : d,
    fill: "both",
    iterations: o + 1,
    direction: s === "reverse" ? "alternate" : "normal",
  };
  return u && (f.pseudoElement = u), e.animate(c, f);
}
function Zx(e) {
  return typeof e == "function" && "applyToOptions" in e;
}
function yN({ type: e, ...t }) {
  return Zx(e) && Xx()
    ? e.applyToOptions(t)
    : (t.duration ?? (t.duration = 300), t.ease ?? (t.ease = "easeOut"), t);
}
class Jx extends zf {
  constructor(t) {
    if (
      (super(),
      (this.finishedTime = null),
      (this.isStopped = !1),
      (this.manualStartTime = null),
      !t)
    )
      return;
    const {
      element: n,
      name: r,
      keyframes: i,
      pseudoElement: o,
      allowFlatten: s = !1,
      finalKeyframe: a,
      onComplete: l,
    } = t;
    (this.isPseudoElement = !!o),
      (this.allowFlatten = s),
      (this.options = t),
      Bi(
        typeof t.type != "string",
        `Mini animate() doesn't support "type" as a string.`,
        "mini-spring"
      );
    const u = yN(t);
    (this.animation = gN(n, r, i, u, o)),
      u.autoplay === !1 && this.animation.pause(),
      (this.animation.onfinish = () => {
        if (((this.finishedTime = this.time), !o)) {
          const c = Dl(i, this.options, a, this.speed);
          this.updateMotionValue && this.updateMotionValue(c),
            Qx(n, r, c),
            this.animation.cancel();
        }
        l == null || l(), this.notifyFinished();
      });
  }
  play() {
    this.isStopped ||
      ((this.manualStartTime = null),
      this.animation.play(),
      this.state === "finished" && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    var t, n;
    (n = (t = this.animation).finish) == null || n.call(t);
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {}
  }
  stop() {
    if (this.isStopped) return;
    this.isStopped = !0;
    const { state: t } = this;
    t === "idle" ||
      t === "finished" ||
      (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(),
      this.isPseudoElement || this.cancel());
  }
  commitStyles() {
    var n, r, i;
    const t = (n = this.options) == null ? void 0 : n.element;
    !this.isPseudoElement &&
      t != null &&
      t.isConnected &&
      ((i = (r = this.animation).commitStyles) == null || i.call(r));
  }
  get duration() {
    var n, r;
    const t =
      ((r =
        (n = this.animation.effect) == null ? void 0 : n.getComputedTiming) ==
      null
        ? void 0
        : r.call(n).duration) || 0;
    return xt(Number(t));
  }
  get iterationDuration() {
    const { delay: t = 0 } = this.options || {};
    return this.duration + xt(t);
  }
  get time() {
    return xt(Number(this.animation.currentTime) || 0);
  }
  set time(t) {
    const n = this.finishedTime !== null;
    (this.manualStartTime = null),
      (this.finishedTime = null),
      (this.animation.currentTime = nt(t)),
      n && this.animation.pause();
  }
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(t) {
    t < 0 && (this.finishedTime = null), (this.animation.playbackRate = t);
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return this.manualStartTime ?? Number(this.animation.startTime);
  }
  set startTime(t) {
    this.manualStartTime = this.animation.startTime = t;
  }
  attachTimeline({ timeline: t, rangeStart: n, rangeEnd: r, observe: i }) {
    var o;
    return (
      this.allowFlatten &&
        ((o = this.animation.effect) == null ||
          o.updateTiming({ easing: "linear" })),
      (this.animation.onfinish = null),
      t && mN()
        ? ((this.animation.timeline = t),
          n && (this.animation.rangeStart = n),
          r && (this.animation.rangeEnd = r),
          St)
        : i(this)
    );
  }
}
const ew = { anticipate: Ax, backInOut: Nx, circInOut: jx };
function vN(e) {
  return e in ew;
}
function xN(e) {
  typeof e.ease == "string" && vN(e.ease) && (e.ease = ew[e.ease]);
}
const Pu = 10;
class wN extends Jx {
  constructor(t) {
    xN(t),
      Hx(t),
      super(t),
      t.startTime !== void 0 &&
        t.autoplay !== !1 &&
        (this.startTime = t.startTime),
      (this.options = t);
  }
  updateMotionValue(t) {
    const {
      motionValue: n,
      onUpdate: r,
      onComplete: i,
      element: o,
      ...s
    } = this.options;
    if (!n) return;
    if (t !== void 0) {
      n.set(t);
      return;
    }
    const a = new Za({ ...s, autoplay: !1 }),
      l = Math.max(Pu, He.now() - this.startTime),
      u = on(0, Pu, l - Pu),
      c = a.sample(l).value,
      { name: d } = this.options;
    o && d && Qx(o, d, c),
      n.setWithVelocity(a.sample(Math.max(0, l - u)).value, c, u),
      a.stop();
  }
}
const mm = (e, t) =>
  t === "zIndex"
    ? !1
    : !!(
        typeof e == "number" ||
        Array.isArray(e) ||
        (typeof e == "string" &&
          (_t.test(e) || e === "0") &&
          !e.startsWith("url("))
      );
function SN(e) {
  const t = e[0];
  if (e.length === 1) return !0;
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function bN(e, t, n, r) {
  const i = e[0];
  if (i === null) return !1;
  if (t === "display" || t === "visibility") return !0;
  const o = e[e.length - 1],
    s = mm(i, t),
    a = mm(o, t);
  return (
    Ml(
      s === a,
      `You are trying to animate ${t} from "${i}" to "${o}". "${
        s ? o : i
      }" is not an animatable value.`,
      "value-not-animatable"
    ),
    !s || !a ? !1 : SN(e) || ((n === "spring" || Zx(n)) && r)
  );
}
function id(e) {
  (e.duration = 0), (e.type = "keyframes");
}
const tw = new Set(["opacity", "clipPath", "filter", "transform"]),
  EN = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function CN(e) {
  for (let t = 0; t < e.length; t++)
    if (typeof e[t] == "string" && EN.test(e[t])) return !0;
  return !1;
}
const TN = new Set([
    "color",
    "backgroundColor",
    "outlineColor",
    "fill",
    "stroke",
    "borderColor",
    "borderTopColor",
    "borderRightColor",
    "borderBottomColor",
    "borderLeftColor",
  ]),
  PN = bx(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function kN(e) {
  var d;
  const {
    motionValue: t,
    name: n,
    repeatDelay: r,
    repeatType: i,
    damping: o,
    type: s,
    keyframes: a,
  } = e;
  if (
    !(
      ((d = t == null ? void 0 : t.owner) == null
        ? void 0
        : d.current) instanceof HTMLElement
    )
  )
    return !1;
  const { onUpdate: u, transformTemplate: c } = t.owner.getProps();
  return (
    PN() &&
    n &&
    (tw.has(n) || (TN.has(n) && CN(a))) &&
    (n !== "transform" || !c) &&
    !u &&
    !r &&
    i !== "mirror" &&
    o !== 0 &&
    s !== "inertia"
  );
}
const NN = 40;
class AN extends zf {
  constructor({
    autoplay: t = !0,
    delay: n = 0,
    type: r = "keyframes",
    repeat: i = 0,
    repeatDelay: o = 0,
    repeatType: s = "loop",
    keyframes: a,
    name: l,
    motionValue: u,
    element: c,
    ...d
  }) {
    var x;
    super(),
      (this.stop = () => {
        var y, w;
        this._animation &&
          (this._animation.stop(),
          (y = this.stopTimeline) == null || y.call(this)),
          (w = this.keyframeResolver) == null || w.cancel();
      }),
      (this.createdAt = He.now());
    const f = {
        autoplay: t,
        delay: n,
        type: r,
        repeat: i,
        repeatDelay: o,
        repeatType: s,
        name: l,
        motionValue: u,
        element: c,
        ...d,
      },
      h = (c == null ? void 0 : c.KeyframeResolver) || Bf;
    (this.keyframeResolver = new h(
      a,
      (y, w, g) => this.onKeyframesResolved(y, w, f, !g),
      l,
      u,
      c
    )),
      (x = this.keyframeResolver) == null || x.scheduleResolve();
  }
  onKeyframesResolved(t, n, r, i) {
    var g, m;
    this.keyframeResolver = void 0;
    const {
      name: o,
      type: s,
      velocity: a,
      delay: l,
      isHandoff: u,
      onUpdate: c,
    } = r;
    this.resolvedAt = He.now();
    let d = !0;
    bN(t, o, s, a) ||
      ((d = !1),
      (ar.instantAnimations || !l) && (c == null || c(Dl(t, r, n))),
      (t[0] = t[t.length - 1]),
      id(r),
      (r.repeat = 0));
    const h = {
        startTime: i
          ? this.resolvedAt
            ? this.resolvedAt - this.createdAt > NN
              ? this.resolvedAt
              : this.createdAt
            : this.createdAt
          : void 0,
        finalKeyframe: n,
        ...r,
        keyframes: t,
      },
      x = d && !u && kN(h),
      y =
        (m = (g = h.motionValue) == null ? void 0 : g.owner) == null
          ? void 0
          : m.current;
    let w;
    if (x)
      try {
        w = new wN({ ...h, element: y });
      } catch {
        w = new Za(h);
      }
    else w = new Za(h);
    w.finished
      .then(() => {
        this.notifyFinished();
      })
      .catch(St),
      this.pendingTimeline &&
        ((this.stopTimeline = w.attachTimeline(this.pendingTimeline)),
        (this.pendingTimeline = void 0)),
      (this._animation = w);
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(t, n) {
    return this.finished.finally(t).then(() => {});
  }
  get animation() {
    var t;
    return (
      this._animation ||
        ((t = this.keyframeResolver) == null || t.resume(), fN()),
      this._animation
    );
  }
  get duration() {
    return this.animation.duration;
  }
  get iterationDuration() {
    return this.animation.iterationDuration;
  }
  get time() {
    return this.animation.time;
  }
  set time(t) {
    this.animation.time = t;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(t) {
    this.animation.speed = t;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(t) {
    return (
      this._animation
        ? (this.stopTimeline = this.animation.attachTimeline(t))
        : (this.pendingTimeline = t),
      () => this.stop()
    );
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    var t;
    this._animation && this.animation.cancel(),
      (t = this.keyframeResolver) == null || t.cancel();
  }
}
function nw(e, t, n, r = 0, i = 1) {
  const o = Array.from(e)
      .sort((u, c) => u.sortNodePosition(c))
      .indexOf(t),
    s = e.size,
    a = (s - 1) * r;
  return typeof n == "function" ? n(o, s) : i === 1 ? o * r : a - o * r;
}
const RN = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function jN(e) {
  const t = RN.exec(e);
  if (!t) return [,];
  const [, n, r, i] = t;
  return [`--${n ?? r}`, i];
}
const MN = 4;
function rw(e, t, n = 1) {
  Bi(
    n <= MN,
    `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`,
    "max-css-var-depth"
  );
  const [r, i] = jN(e);
  if (!r) return;
  const o = window.getComputedStyle(t).getPropertyValue(r);
  if (o) {
    const s = o.trim();
    return xx(s) ? parseFloat(s) : s;
  }
  return Of(i) ? rw(i, t, n + 1) : i;
}
const DN = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  LN = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  ON = { type: "keyframes", duration: 0.8 },
  IN = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  FN = (e, { keyframes: t }) =>
    t.length > 2
      ? ON
      : Ji.has(e)
      ? e.startsWith("scale")
        ? LN(t[1])
        : DN
      : IN;
function iw(e, t) {
  if (e != null && e.inherit && t) {
    const { inherit: n, ...r } = e;
    return { ...t, ...r };
  }
  return e;
}
function $f(e, t) {
  const n =
    (e == null ? void 0 : e[t]) ?? (e == null ? void 0 : e.default) ?? e;
  return n !== e ? iw(n, e) : n;
}
const VN = new Set([
  "when",
  "delay",
  "delayChildren",
  "staggerChildren",
  "staggerDirection",
  "repeat",
  "repeatType",
  "repeatDelay",
  "from",
  "elapsed",
]);
function _N(e) {
  for (const t in e) if (!VN.has(t)) return !0;
  return !1;
}
const Uf =
  (e, t, n, r = {}, i, o) =>
  (s) => {
    const a = $f(r, e) || {},
      l = a.delay || r.delay || 0;
    let { elapsed: u = 0 } = r;
    u = u - nt(l);
    const c = {
      keyframes: Array.isArray(n) ? n : [null, n],
      ease: "easeOut",
      velocity: t.getVelocity(),
      ...a,
      delay: -u,
      onUpdate: (f) => {
        t.set(f), a.onUpdate && a.onUpdate(f);
      },
      onComplete: () => {
        s(), a.onComplete && a.onComplete();
      },
      name: e,
      motionValue: t,
      element: o ? void 0 : i,
    };
    _N(a) || Object.assign(c, FN(e, c)),
      c.duration && (c.duration = nt(c.duration)),
      c.repeatDelay && (c.repeatDelay = nt(c.repeatDelay)),
      c.from !== void 0 && (c.keyframes[0] = c.from);
    let d = !1;
    if (
      ((c.type === !1 || (c.duration === 0 && !c.repeatDelay)) &&
        (id(c), c.delay === 0 && (d = !0)),
      (ar.instantAnimations ||
        ar.skipAnimations ||
        (i != null && i.shouldSkipAnimations)) &&
        ((d = !0), id(c), (c.delay = 0)),
      (c.allowFlatten = !a.type && !a.ease),
      d && !o && t.get() !== void 0)
    ) {
      const f = Dl(c.keyframes, a);
      if (f !== void 0) {
        ie.update(() => {
          c.onUpdate(f), c.onComplete();
        });
        return;
      }
    }
    return a.isSync ? new Za(c) : new AN(c);
  };
function gm(e) {
  const t = [{}, {}];
  return (
    e == null ||
      e.values.forEach((n, r) => {
        (t[0][r] = n.get()), (t[1][r] = n.getVelocity());
      }),
    t
  );
}
function Wf(e, t, n, r) {
  if (typeof t == "function") {
    const [i, o] = gm(r);
    t = t(n !== void 0 ? n : e.custom, i, o);
  }
  if (
    (typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function")
  ) {
    const [i, o] = gm(r);
    t = t(n !== void 0 ? n : e.custom, i, o);
  }
  return t;
}
function Ir(e, t, n) {
  const r = e.getProps();
  return Wf(r, t, n !== void 0 ? n : r.custom, e);
}
const ow = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    ...Zi,
  ]),
  ym = 30,
  zN = (e) => !isNaN(parseFloat(e));
class BN {
  constructor(t, n = {}) {
    (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (r) => {
        var o;
        const i = He.now();
        if (
          (this.updatedAt !== i && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(r),
          this.current !== this.prev &&
            ((o = this.events.change) == null || o.notify(this.current),
            this.dependents))
        )
          for (const s of this.dependents) s.dirty();
      }),
      (this.hasAnimated = !1),
      this.setCurrent(t),
      (this.owner = n.owner);
  }
  setCurrent(t) {
    (this.current = t),
      (this.updatedAt = He.now()),
      this.canTrackVelocity === null &&
        t !== void 0 &&
        (this.canTrackVelocity = zN(this.current));
  }
  setPrevFrameValue(t = this.current) {
    (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new Mf());
    const r = this.events[t].add(n);
    return t === "change"
      ? () => {
          r(),
            ie.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : r;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, n) {
    (this.passiveEffect = t), (this.stopPassiveEffect = n);
  }
  set(t) {
    this.passiveEffect
      ? this.passiveEffect(t, this.updateAndNotify)
      : this.updateAndNotify(t);
  }
  setWithVelocity(t, n, r) {
    this.set(n),
      (this.prev = void 0),
      (this.prevFrameValue = t),
      (this.prevUpdatedAt = this.updatedAt - r);
  }
  jump(t, n = !0) {
    this.updateAndNotify(t),
      (this.prev = t),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      n && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  dirty() {
    var t;
    (t = this.events.change) == null || t.notify(this.current);
  }
  addDependent(t) {
    this.dependents || (this.dependents = new Set()), this.dependents.add(t);
  }
  removeDependent(t) {
    this.dependents && this.dependents.delete(t);
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const t = He.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      t - this.updatedAt > ym
    )
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, ym);
    return Ex(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        (this.hasAnimated = !0),
          (this.animation = t(n)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    var t, n;
    (t = this.dependents) == null || t.clear(),
      (n = this.events.destroy) == null || n.notify(),
      this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function Ui(e, t) {
  return new BN(e, t);
}
const od = (e) => Array.isArray(e);
function $N(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Ui(n));
}
function UN(e) {
  return od(e) ? e[e.length - 1] || 0 : e;
}
function WN(e, t) {
  const n = Ir(e, t);
  let { transitionEnd: r = {}, transition: i = {}, ...o } = n || {};
  o = { ...o, ...r };
  for (const s in o) {
    const a = UN(o[s]);
    $N(e, s, a);
  }
}
const je = (e) => !!(e && e.getVelocity);
function HN(e) {
  return !!(je(e) && e.add);
}
function sd(e, t) {
  const n = e.getValue("willChange");
  if (HN(n)) return n.add(t);
  if (!n && ar.WillChange) {
    const r = new ar.WillChange("auto");
    e.addValue("willChange", r), r.add(t);
  }
}
function Hf(e) {
  return e.replace(/([A-Z])/g, (t) => `-${t.toLowerCase()}`);
}
const KN = "framerAppearId",
  sw = "data-" + Hf(KN);
function aw(e) {
  return e.props[sw];
}
function GN({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return (t[n] = !1), r;
}
function lw(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  let { transition: o, transitionEnd: s, ...a } = t;
  const l = e.getDefaultTransition();
  o = o ? iw(o, l) : l;
  const u = o == null ? void 0 : o.reduceMotion;
  r && (o = r);
  const c = [],
    d = i && e.animationState && e.animationState.getState()[i];
  for (const f in a) {
    const h = e.getValue(f, e.latestValues[f] ?? null),
      x = a[f];
    if (x === void 0 || (d && GN(d, f))) continue;
    const y = { delay: n, ...$f(o || {}, f) },
      w = h.get();
    if (
      w !== void 0 &&
      !h.isAnimating() &&
      !Array.isArray(x) &&
      x === w &&
      !y.velocity
    ) {
      ie.update(() => h.set(x));
      continue;
    }
    let g = !1;
    if (window.MotionHandoffAnimation) {
      const b = aw(e);
      if (b) {
        const E = window.MotionHandoffAnimation(b, f, ie);
        E !== null && ((y.startTime = E), (g = !0));
      }
    }
    sd(e, f);
    const m = u ?? e.shouldReduceMotion;
    h.start(Uf(f, h, x, m && ow.has(f) ? { type: !1 } : y, e, g));
    const v = h.animation;
    v && c.push(v);
  }
  if (s) {
    const f = () =>
      ie.update(() => {
        s && WN(e, s);
      });
    c.length ? Promise.all(c).then(f) : f();
  }
  return c;
}
function ad(e, t, n = {}) {
  var l;
  const r = Ir(
    e,
    t,
    n.type === "exit"
      ? (l = e.presenceContext) == null
        ? void 0
        : l.custom
      : void 0
  );
  let { transition: i = e.getDefaultTransition() || {} } = r || {};
  n.transitionOverride && (i = n.transitionOverride);
  const o = r ? () => Promise.all(lw(e, r, n)) : () => Promise.resolve(),
    s =
      e.variantChildren && e.variantChildren.size
        ? (u = 0) => {
            const {
              delayChildren: c = 0,
              staggerChildren: d,
              staggerDirection: f,
            } = i;
            return QN(e, t, u, c, d, f, n);
          }
        : () => Promise.resolve(),
    { when: a } = i;
  if (a) {
    const [u, c] = a === "beforeChildren" ? [o, s] : [s, o];
    return u().then(() => c());
  } else return Promise.all([o(), s(n.delay)]);
}
function QN(e, t, n = 0, r = 0, i = 0, o = 1, s) {
  const a = [];
  for (const l of e.variantChildren)
    l.notify("AnimationStart", t),
      a.push(
        ad(l, t, {
          ...s,
          delay:
            n +
            (typeof r == "function" ? 0 : r) +
            nw(e.variantChildren, l, r, i, o),
        }).then(() => l.notify("AnimationComplete", t))
      );
  return Promise.all(a);
}
function YN(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const i = t.map((o) => ad(e, o, n));
    r = Promise.all(i);
  } else if (typeof t == "string") r = ad(e, t, n);
  else {
    const i = typeof t == "function" ? Ir(e, t, n.custom) : t;
    r = Promise.all(lw(e, i, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
const XN = { test: (e) => e === "auto", parse: (e) => e },
  uw = (e) => (t) => t.test(e),
  cw = [qi, _, nn, Mn, S2, w2, XN],
  vm = (e) => cw.find(uw(e));
function qN(e) {
  return typeof e == "number"
    ? e === 0
    : e !== null
    ? e === "none" || e === "0" || Sx(e)
    : !0;
}
const ZN = new Set(["brightness", "contrast", "saturate", "opacity"]);
function JN(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [r] = n.match(If) || [];
  if (!r) return e;
  const i = n.replace(r, "");
  let o = ZN.has(t) ? 1 : 0;
  return r !== n && (o *= 100), t + "(" + o + i + ")";
}
const eA = /\b([a-z-]*)\(.*?\)/gu,
  ld = {
    ..._t,
    getAnimatableNone: (e) => {
      const t = e.match(eA);
      return t ? t.map(JN).join(" ") : e;
    },
  },
  ud = {
    ..._t,
    getAnimatableNone: (e) => {
      const t = _t.parse(e);
      return _t.createTransformer(e)(
        t.map((r) =>
          typeof r == "number"
            ? 0
            : typeof r == "object"
            ? { ...r, alpha: 1 }
            : r
        )
      );
    },
  },
  xm = { ...qi, transform: Math.round },
  tA = {
    rotate: Mn,
    rotateX: Mn,
    rotateY: Mn,
    rotateZ: Mn,
    scale: Ks,
    scaleX: Ks,
    scaleY: Ks,
    scaleZ: Ks,
    skew: Mn,
    skewX: Mn,
    skewY: Mn,
    distance: _,
    translateX: _,
    translateY: _,
    translateZ: _,
    x: _,
    y: _,
    z: _,
    perspective: _,
    transformPerspective: _,
    opacity: ts,
    originX: om,
    originY: om,
    originZ: _,
  },
  Kf = {
    borderWidth: _,
    borderTopWidth: _,
    borderRightWidth: _,
    borderBottomWidth: _,
    borderLeftWidth: _,
    borderRadius: _,
    borderTopLeftRadius: _,
    borderTopRightRadius: _,
    borderBottomRightRadius: _,
    borderBottomLeftRadius: _,
    width: _,
    maxWidth: _,
    height: _,
    maxHeight: _,
    top: _,
    right: _,
    bottom: _,
    left: _,
    inset: _,
    insetBlock: _,
    insetBlockStart: _,
    insetBlockEnd: _,
    insetInline: _,
    insetInlineStart: _,
    insetInlineEnd: _,
    padding: _,
    paddingTop: _,
    paddingRight: _,
    paddingBottom: _,
    paddingLeft: _,
    paddingBlock: _,
    paddingBlockStart: _,
    paddingBlockEnd: _,
    paddingInline: _,
    paddingInlineStart: _,
    paddingInlineEnd: _,
    margin: _,
    marginTop: _,
    marginRight: _,
    marginBottom: _,
    marginLeft: _,
    marginBlock: _,
    marginBlockStart: _,
    marginBlockEnd: _,
    marginInline: _,
    marginInlineStart: _,
    marginInlineEnd: _,
    fontSize: _,
    backgroundPositionX: _,
    backgroundPositionY: _,
    ...tA,
    zIndex: xm,
    fillOpacity: ts,
    strokeOpacity: ts,
    numOctaves: xm,
  },
  nA = {
    ...Kf,
    color: Se,
    backgroundColor: Se,
    outlineColor: Se,
    fill: Se,
    stroke: Se,
    borderColor: Se,
    borderTopColor: Se,
    borderRightColor: Se,
    borderBottomColor: Se,
    borderLeftColor: Se,
    filter: ld,
    WebkitFilter: ld,
    mask: ud,
    WebkitMask: ud,
  },
  dw = (e) => nA[e],
  rA = new Set([ld, ud]);
function fw(e, t) {
  let n = dw(e);
  return (
    rA.has(n) || (n = _t), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
const iA = new Set(["auto", "none", "0"]);
function oA(e, t, n) {
  let r = 0,
    i;
  for (; r < e.length && !i; ) {
    const o = e[r];
    typeof o == "string" && !iA.has(o) && $i(o).values.length && (i = e[r]),
      r++;
  }
  if (i && n) for (const o of t) e[o] = fw(n, i);
}
class sA extends Bf {
  constructor(t, n, r, i, o) {
    super(t, n, r, i, o, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n || !n.current) return;
    super.readKeyframes();
    for (let c = 0; c < t.length; c++) {
      let d = t[c];
      if (typeof d == "string" && ((d = d.trim()), Of(d))) {
        const f = rw(d, n.current);
        f !== void 0 && (t[c] = f),
          c === t.length - 1 && (this.finalKeyframe = d);
      }
    }
    if ((this.resolveNoneKeyframes(), !ow.has(r) || t.length !== 2)) return;
    const [i, o] = t,
      s = vm(i),
      a = vm(o),
      l = im(i),
      u = im(o);
    if (l !== u && Kn[r]) {
      this.needsMeasurement = !0;
      return;
    }
    if (s !== a)
      if (hm(s) && hm(a))
        for (let c = 0; c < t.length; c++) {
          const d = t[c];
          typeof d == "string" && (t[c] = parseFloat(d));
        }
      else Kn[r] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this,
      r = [];
    for (let i = 0; i < t.length; i++) (t[i] === null || qN(t[i])) && r.push(i);
    r.length && oA(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t || !t.current) return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = Kn[r](
        t.measureViewportBox(),
        window.getComputedStyle(t.current)
      )),
      (n[0] = this.measuredOrigin);
    const i = n[n.length - 1];
    i !== void 0 && t.getValue(r, i).jump(i, !1);
  }
  measureEndState() {
    var a;
    const { element: t, name: n, unresolvedKeyframes: r } = this;
    if (!t || !t.current) return;
    const i = t.getValue(n);
    i && i.jump(this.measuredOrigin, !1);
    const o = r.length - 1,
      s = r[o];
    (r[o] = Kn[n](t.measureViewportBox(), window.getComputedStyle(t.current))),
      s !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = s),
      (a = this.removedTransforms) != null &&
        a.length &&
        this.removedTransforms.forEach(([l, u]) => {
          t.getValue(l).set(u);
        }),
      this.resolveNoneKeyframes();
  }
}
function hw(e, t, n) {
  if (e == null) return [];
  if (e instanceof EventTarget) return [e];
  if (typeof e == "string") {
    const i = document.querySelectorAll(e);
    return i ? Array.from(i) : [];
  }
  return Array.from(e).filter((r) => r != null);
}
const pw = (e, t) => (t && typeof e == "number" ? t.transform(e) : e);
function aA(e) {
  return wx(e) && "offsetHeight" in e && !("ownerSVGElement" in e);
}
const { schedule: Gf, cancel: SM } = Lx(queueMicrotask, !1),
  Rt = { x: !1, y: !1 };
function mw() {
  return Rt.x || Rt.y;
}
function lA(e) {
  return e === "x" || e === "y"
    ? Rt[e]
      ? null
      : ((Rt[e] = !0),
        () => {
          Rt[e] = !1;
        })
    : Rt.x || Rt.y
    ? null
    : ((Rt.x = Rt.y = !0),
      () => {
        Rt.x = Rt.y = !1;
      });
}
function gw(e, t) {
  const n = hw(e),
    r = new AbortController(),
    i = { passive: !0, ...t, signal: r.signal };
  return [n, i, () => r.abort()];
}
function uA(e) {
  return !(e.pointerType === "touch" || mw());
}
function cA(e, t, n = {}) {
  const [r, i, o] = gw(e, n);
  return (
    r.forEach((s) => {
      let a = !1,
        l = !1,
        u;
      const c = () => {
          s.removeEventListener("pointerleave", x);
        },
        d = (w) => {
          u && (u(w), (u = void 0)), c();
        },
        f = (w) => {
          (a = !1),
            window.removeEventListener("pointerup", f),
            window.removeEventListener("pointercancel", f),
            l && ((l = !1), d(w));
        },
        h = () => {
          (a = !0),
            window.addEventListener("pointerup", f, i),
            window.addEventListener("pointercancel", f, i);
        },
        x = (w) => {
          if (w.pointerType !== "touch") {
            if (a) {
              l = !0;
              return;
            }
            d(w);
          }
        },
        y = (w) => {
          if (!uA(w)) return;
          l = !1;
          const g = t(s, w);
          typeof g == "function" &&
            ((u = g), s.addEventListener("pointerleave", x, i));
        };
      s.addEventListener("pointerenter", y, i),
        s.addEventListener("pointerdown", h, i);
    }),
    o
  );
}
const yw = (e, t) => (t ? (e === t ? !0 : yw(e, t.parentElement)) : !1),
  Qf = (e) =>
    e.pointerType === "mouse"
      ? typeof e.button != "number" || e.button <= 0
      : e.isPrimary !== !1,
  dA = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function fA(e) {
  return dA.has(e.tagName) || e.isContentEditable === !0;
}
const hA = new Set(["INPUT", "SELECT", "TEXTAREA"]);
function pA(e) {
  return hA.has(e.tagName) || e.isContentEditable === !0;
}
const da = new WeakSet();
function wm(e) {
  return (t) => {
    t.key === "Enter" && e(t);
  };
}
function ku(e, t) {
  e.dispatchEvent(
    new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 })
  );
}
const mA = (e, t) => {
  const n = e.currentTarget;
  if (!n) return;
  const r = wm(() => {
    if (da.has(n)) return;
    ku(n, "down");
    const i = wm(() => {
        ku(n, "up");
      }),
      o = () => ku(n, "cancel");
    n.addEventListener("keyup", i, t), n.addEventListener("blur", o, t);
  });
  n.addEventListener("keydown", r, t),
    n.addEventListener("blur", () => n.removeEventListener("keydown", r), t);
};
function Sm(e) {
  return Qf(e) && !mw();
}
const bm = new WeakSet();
function gA(e, t, n = {}) {
  const [r, i, o] = gw(e, n),
    s = (a) => {
      const l = a.currentTarget;
      if (!Sm(a) || bm.has(a)) return;
      da.add(l), n.stopPropagation && bm.add(a);
      const u = t(l, a),
        c = (h, x) => {
          window.removeEventListener("pointerup", d),
            window.removeEventListener("pointercancel", f),
            da.has(l) && da.delete(l),
            Sm(h) && typeof u == "function" && u(h, { success: x });
        },
        d = (h) => {
          c(
            h,
            l === window ||
              l === document ||
              n.useGlobalTarget ||
              yw(l, h.target)
          );
        },
        f = (h) => {
          c(h, !1);
        };
      window.addEventListener("pointerup", d, i),
        window.addEventListener("pointercancel", f, i);
    };
  return (
    r.forEach((a) => {
      (n.useGlobalTarget ? window : a).addEventListener("pointerdown", s, i),
        aA(a) &&
          (a.addEventListener("focus", (u) => mA(u, i)),
          !fA(a) && !a.hasAttribute("tabindex") && (a.tabIndex = 0));
    }),
    o
  );
}
function Yf(e) {
  return wx(e) && "ownerSVGElement" in e;
}
const fa = new WeakMap();
let Dn;
const vw = (e, t, n) => (r, i) =>
    i && i[0]
      ? i[0][e + "Size"]
      : Yf(r) && "getBBox" in r
      ? r.getBBox()[t]
      : r[n],
  yA = vw("inline", "width", "offsetWidth"),
  vA = vw("block", "height", "offsetHeight");
function xA({ target: e, borderBoxSize: t }) {
  var n;
  (n = fa.get(e)) == null ||
    n.forEach((r) => {
      r(e, {
        get width() {
          return yA(e, t);
        },
        get height() {
          return vA(e, t);
        },
      });
    });
}
function wA(e) {
  e.forEach(xA);
}
function SA() {
  typeof ResizeObserver > "u" || (Dn = new ResizeObserver(wA));
}
function bA(e, t) {
  Dn || SA();
  const n = hw(e);
  return (
    n.forEach((r) => {
      let i = fa.get(r);
      i || ((i = new Set()), fa.set(r, i)),
        i.add(t),
        Dn == null || Dn.observe(r);
    }),
    () => {
      n.forEach((r) => {
        const i = fa.get(r);
        i == null || i.delete(t),
          (i != null && i.size) || Dn == null || Dn.unobserve(r);
      });
    }
  );
}
const ha = new Set();
let hi;
function EA() {
  (hi = () => {
    const e = {
      get width() {
        return window.innerWidth;
      },
      get height() {
        return window.innerHeight;
      },
    };
    ha.forEach((t) => t(e));
  }),
    window.addEventListener("resize", hi);
}
function CA(e) {
  return (
    ha.add(e),
    hi || EA(),
    () => {
      ha.delete(e),
        !ha.size &&
          typeof hi == "function" &&
          (window.removeEventListener("resize", hi), (hi = void 0));
    }
  );
}
function Em(e, t) {
  return typeof e == "function" ? CA(e) : bA(e, t);
}
function TA(e) {
  return Yf(e) && e.tagName === "svg";
}
const PA = [...cw, Se, _t],
  kA = (e) => PA.find(uw(e)),
  Cm = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  pi = () => ({ x: Cm(), y: Cm() }),
  Tm = () => ({ min: 0, max: 0 }),
  Ee = () => ({ x: Tm(), y: Tm() }),
  NA = new WeakMap();
function Ll(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
function ns(e) {
  return typeof e == "string" || Array.isArray(e);
}
const Xf = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  qf = ["initial", ...Xf];
function Ol(e) {
  return Ll(e.animate) || qf.some((t) => ns(e[t]));
}
function xw(e) {
  return !!(Ol(e) || e.variants);
}
function AA(e, t, n) {
  for (const r in t) {
    const i = t[r],
      o = n[r];
    if (je(i)) e.addValue(r, i);
    else if (je(o)) e.addValue(r, Ui(i, { owner: e }));
    else if (o !== i)
      if (e.hasValue(r)) {
        const s = e.getValue(r);
        s.liveStyle === !0 ? s.jump(i) : s.hasAnimated || s.set(i);
      } else {
        const s = e.getStaticValue(r);
        e.addValue(r, Ui(s !== void 0 ? s : i, { owner: e }));
      }
  }
  for (const r in n) t[r] === void 0 && e.removeValue(r);
  return t;
}
const cd = { current: null },
  ww = { current: !1 },
  RA = typeof window < "u";
function jA() {
  if (((ww.current = !0), !!RA))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (cd.current = e.matches);
      e.addEventListener("change", t), t();
    } else cd.current = !1;
}
const Pm = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete",
];
let Ja = {};
function Sw(e) {
  Ja = e;
}
function MA() {
  return Ja;
}
class DA {
  scrapeMotionValuesFromProps(t, n, r) {
    return {};
  }
  constructor(
    {
      parent: t,
      props: n,
      presenceContext: r,
      reducedMotionConfig: i,
      skipAnimations: o,
      blockInitialAnimation: s,
      visualState: a,
    },
    l = {}
  ) {
    (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.shouldSkipAnimations = !1),
      (this.values = new Map()),
      (this.KeyframeResolver = Bf),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.hasBeenMounted = !1),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection
          ));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const h = He.now();
        this.renderScheduledAt < h &&
          ((this.renderScheduledAt = h), ie.render(this.render, !1, !0));
      });
    const { latestValues: u, renderState: c } = a;
    (this.latestValues = u),
      (this.baseTarget = { ...u }),
      (this.initialValues = n.initial ? { ...u } : {}),
      (this.renderState = c),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = i),
      (this.skipAnimationsConfig = o),
      (this.options = l),
      (this.blockInitialAnimation = !!s),
      (this.isControllingVariants = Ol(n)),
      (this.isVariantNode = xw(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current));
    const { willChange: d, ...f } = this.scrapeMotionValuesFromProps(
      n,
      {},
      this
    );
    for (const h in f) {
      const x = f[h];
      u[h] !== void 0 && je(x) && x.set(u[h]);
    }
  }
  mount(t) {
    var n, r;
    if (this.hasBeenMounted)
      for (const i in this.initialValues)
        (n = this.values.get(i)) == null || n.jump(this.initialValues[i]),
          (this.latestValues[i] = this.initialValues[i]);
    (this.current = t),
      NA.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((i, o) => this.bindToMotionValue(o, i)),
      this.reducedMotionConfig === "never"
        ? (this.shouldReduceMotion = !1)
        : this.reducedMotionConfig === "always"
        ? (this.shouldReduceMotion = !0)
        : (ww.current || jA(), (this.shouldReduceMotion = cd.current)),
      (this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1),
      (r = this.parent) == null || r.addChild(this),
      this.update(this.props, this.presenceContext),
      (this.hasBeenMounted = !0);
  }
  unmount() {
    var t;
    this.projection && this.projection.unmount(),
      lr(this.notifyUpdate),
      lr(this.render),
      this.valueSubscriptions.forEach((n) => n()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      (t = this.parent) == null || t.removeChild(this);
    for (const n in this.events) this.events[n].clear();
    for (const n in this.features) {
      const r = this.features[n];
      r && (r.unmount(), (r.isMounted = !1));
    }
    this.current = null;
  }
  addChild(t) {
    this.children.add(t),
      this.enteringChildren ?? (this.enteringChildren = new Set()),
      this.enteringChildren.add(t);
  }
  removeChild(t) {
    this.children.delete(t),
      this.enteringChildren && this.enteringChildren.delete(t);
  }
  bindToMotionValue(t, n) {
    if (
      (this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)(),
      n.accelerate && tw.has(t) && this.current instanceof HTMLElement)
    ) {
      const {
          factory: s,
          keyframes: a,
          times: l,
          ease: u,
          duration: c,
        } = n.accelerate,
        d = new Jx({
          element: this.current,
          name: t,
          keyframes: a,
          times: l,
          ease: u,
          duration: nt(c),
        }),
        f = s(d);
      this.valueSubscriptions.set(t, () => {
        f(), d.cancel();
      });
      return;
    }
    const r = Ji.has(t);
    r && this.onBindTransform && this.onBindTransform();
    const i = n.on("change", (s) => {
      (this.latestValues[t] = s),
        this.props.onUpdate && ie.preRender(this.notifyUpdate),
        r && this.projection && (this.projection.isTransformDirty = !0),
        this.scheduleRender();
    });
    let o;
    typeof window < "u" &&
      window.MotionCheckAppearSync &&
      (o = window.MotionCheckAppearSync(this, t, n)),
      this.valueSubscriptions.set(t, () => {
        i(), o && o(), n.owner && n.stop();
      });
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = "animation";
    for (t in Ja) {
      const n = Ja[t];
      if (!n) continue;
      const { isEnabled: r, Feature: i } = n;
      if (
        (!this.features[t] &&
          i &&
          r(this.props) &&
          (this.features[t] = new i(this)),
        this.features[t])
      ) {
        const o = this.features[t];
        o.isMounted ? o.update() : (o.mount(), (o.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : Ee();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n);
    for (let r = 0; r < Pm.length; r++) {
      const i = Pm[r];
      this.propEventSubscriptions[i] &&
        (this.propEventSubscriptions[i](),
        delete this.propEventSubscriptions[i]);
      const o = "on" + i,
        s = t[o];
      s && (this.propEventSubscriptions[i] = this.on(i, s));
    }
    (this.prevMotionValues = AA(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps || {}, this),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
      ? this.parent.getClosestVariantNode()
      : void 0;
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(t),
        () => n.variantChildren.delete(t)
      );
  }
  addValue(t, n) {
    const r = this.values.get(t);
    n !== r &&
      (r && this.removeValue(t),
      this.bindToMotionValue(t, n),
      this.values.set(t, n),
      (this.latestValues[t] = n.get()));
  }
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState);
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let r = this.values.get(t);
    return (
      r === void 0 &&
        n !== void 0 &&
        ((r = Ui(n === null ? void 0 : n, { owner: this })),
        this.addValue(t, r)),
      r
    );
  }
  readValue(t, n) {
    let r =
      this.latestValues[t] !== void 0 || !this.current
        ? this.latestValues[t]
        : this.getBaseTargetFromProps(this.props, t) ??
          this.readValueFromInstance(this.current, t, this.options);
    return (
      r != null &&
        (typeof r == "string" && (xx(r) || Sx(r))
          ? (r = parseFloat(r))
          : !kA(r) && _t.test(n) && (r = fw(t, n)),
        this.setBaseTarget(t, je(r) ? r.get() : r)),
      je(r) ? r.get() : r
    );
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var o;
    const { initial: n } = this.props;
    let r;
    if (typeof n == "string" || typeof n == "object") {
      const s = Wf(
        this.props,
        n,
        (o = this.presenceContext) == null ? void 0 : o.custom
      );
      s && (r = s[t]);
    }
    if (n && r !== void 0) return r;
    const i = this.getBaseTargetFromProps(this.props, t);
    return i !== void 0 && !je(i)
      ? i
      : this.initialValues[t] !== void 0 && r === void 0
      ? void 0
      : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new Mf()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
  scheduleRenderMicrotask() {
    Gf.render(this.render);
  }
}
class bw extends DA {
  constructor() {
    super(...arguments), (this.KeyframeResolver = sA);
  }
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    const r = t.style;
    return r ? r[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    delete n[t], delete r[t];
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    je(t) &&
      (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
}
class pr {
  constructor(t) {
    (this.isMounted = !1), (this.node = t);
  }
  update() {}
}
function Ew({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function LA({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function OA(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function Nu(e) {
  return e === void 0 || e === 1;
}
function dd({ scale: e, scaleX: t, scaleY: n }) {
  return !Nu(e) || !Nu(t) || !Nu(n);
}
function Sr(e) {
  return (
    dd(e) ||
    Cw(e) ||
    e.z ||
    e.rotate ||
    e.rotateX ||
    e.rotateY ||
    e.skewX ||
    e.skewY
  );
}
function Cw(e) {
  return km(e.x) || km(e.y);
}
function km(e) {
  return e && e !== "0%";
}
function el(e, t, n) {
  const r = e - n,
    i = t * r;
  return n + i;
}
function Nm(e, t, n, r, i) {
  return i !== void 0 && (e = el(e, i, r)), el(e, n, r) + t;
}
function fd(e, t = 0, n = 1, r, i) {
  (e.min = Nm(e.min, t, n, r, i)), (e.max = Nm(e.max, t, n, r, i));
}
function Tw(e, { x: t, y: n }) {
  fd(e.x, t.translate, t.scale, t.originPoint),
    fd(e.y, n.translate, n.scale, n.originPoint);
}
const Am = 0.999999999999,
  Rm = 1.0000000000001;
function IA(e, t, n, r = !1) {
  var a;
  const i = n.length;
  if (!i) return;
  t.x = t.y = 1;
  let o, s;
  for (let l = 0; l < i; l++) {
    (o = n[l]), (s = o.projectionDelta);
    const { visualElement: u } = o.options;
    (u && u.props.style && u.props.style.display === "contents") ||
      (r &&
        o.options.layoutScroll &&
        o.scroll &&
        o !== o.root &&
        (Xt(e.x, -o.scroll.offset.x), Xt(e.y, -o.scroll.offset.y)),
      s && ((t.x *= s.x.scale), (t.y *= s.y.scale), Tw(e, s)),
      r &&
        Sr(o.latestValues) &&
        pa(e, o.latestValues, (a = o.layout) == null ? void 0 : a.layoutBox));
  }
  t.x < Rm && t.x > Am && (t.x = 1), t.y < Rm && t.y > Am && (t.y = 1);
}
function Xt(e, t) {
  (e.min += t), (e.max += t);
}
function jm(e, t, n, r, i = 0.5) {
  const o = le(e.min, e.max, i);
  fd(e, t, n, o, r);
}
function Mm(e, t) {
  return typeof e == "string" ? (parseFloat(e) / 100) * (t.max - t.min) : e;
}
function pa(e, t, n) {
  const r = n ?? e;
  jm(e.x, Mm(t.x, r.x), t.scaleX, t.scale, t.originX),
    jm(e.y, Mm(t.y, r.y), t.scaleY, t.scale, t.originY);
}
function Pw(e, t) {
  return Ew(OA(e.getBoundingClientRect(), t));
}
function FA(e, t, n) {
  const r = Pw(e, n),
    { scroll: i } = t;
  return i && (Xt(r.x, i.offset.x), Xt(r.y, i.offset.y)), r;
}
const VA = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  _A = Zi.length;
function zA(e, t, n) {
  let r = "",
    i = !0;
  for (let o = 0; o < _A; o++) {
    const s = Zi[o],
      a = e[s];
    if (a === void 0) continue;
    let l = !0;
    if (typeof a == "number") l = a === (s.startsWith("scale") ? 1 : 0);
    else {
      const u = parseFloat(a);
      l = s.startsWith("scale") ? u === 1 : u === 0;
    }
    if (!l || n) {
      const u = pw(a, Kf[s]);
      if (!l) {
        i = !1;
        const c = VA[s] || s;
        r += `${c}(${u}) `;
      }
      n && (t[s] = u);
    }
  }
  return (r = r.trim()), n ? (r = n(t, i ? "" : r)) : i && (r = "none"), r;
}
function Zf(e, t, n) {
  const { style: r, vars: i, transformOrigin: o } = e;
  let s = !1,
    a = !1;
  for (const l in t) {
    const u = t[l];
    if (Ji.has(l)) {
      s = !0;
      continue;
    } else if (Ix(l)) {
      i[l] = u;
      continue;
    } else {
      const c = pw(u, Kf[l]);
      l.startsWith("origin") ? ((a = !0), (o[l] = c)) : (r[l] = c);
    }
  }
  if (
    (t.transform ||
      (s || n
        ? (r.transform = zA(t, e.transform, n))
        : r.transform && (r.transform = "none")),
    a)
  ) {
    const { originX: l = "50%", originY: u = "50%", originZ: c = 0 } = o;
    r.transformOrigin = `${l} ${u} ${c}`;
  }
}
function kw(e, { style: t, vars: n }, r, i) {
  const o = e.style;
  let s;
  for (s in t) o[s] = t[s];
  i == null || i.applyProjectionStyles(o, r);
  for (s in n) o.setProperty(s, n[s]);
}
function Dm(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const ho = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (_.test(e)) e = parseFloat(e);
        else return e;
      const n = Dm(e, t.target.x),
        r = Dm(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  BA = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        i = _t.parse(e);
      if (i.length > 5) return r;
      const o = _t.createTransformer(e),
        s = typeof i[0] != "number" ? 1 : 0,
        a = n.x.scale * t.x,
        l = n.y.scale * t.y;
      (i[0 + s] /= a), (i[1 + s] /= l);
      const u = le(a, l, 0.5);
      return (
        typeof i[2 + s] == "number" && (i[2 + s] /= u),
        typeof i[3 + s] == "number" && (i[3 + s] /= u),
        o(i)
      );
    },
  },
  hd = {
    borderRadius: {
      ...ho,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: ho,
    borderTopRightRadius: ho,
    borderBottomLeftRadius: ho,
    borderBottomRightRadius: ho,
    boxShadow: BA,
  };
function Nw(e, { layout: t, layoutId: n }) {
  return (
    Ji.has(e) ||
    e.startsWith("origin") ||
    ((t || n !== void 0) && (!!hd[e] || e === "opacity"))
  );
}
function Jf(e, t, n) {
  var s;
  const r = e.style,
    i = t == null ? void 0 : t.style,
    o = {};
  if (!r) return o;
  for (const a in r)
    (je(r[a]) ||
      (i && je(i[a])) ||
      Nw(a, e) ||
      ((s = n == null ? void 0 : n.getValue(a)) == null
        ? void 0
        : s.liveStyle) !== void 0) &&
      (o[a] = r[a]);
  return o;
}
function $A(e) {
  return window.getComputedStyle(e);
}
class UA extends bw {
  constructor() {
    super(...arguments), (this.type = "html"), (this.renderInstance = kw);
  }
  readValueFromInstance(t, n) {
    var r;
    if (Ji.has(n))
      return (r = this.projection) != null && r.isProjecting ? Jc(n) : aN(t, n);
    {
      const i = $A(t),
        o = (Ix(n) ? i.getPropertyValue(n) : i[n]) || 0;
      return typeof o == "string" ? o.trim() : o;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return Pw(t, n);
  }
  build(t, n, r) {
    Zf(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return Jf(t, n, r);
  }
}
const WA = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  HA = { offset: "strokeDashoffset", array: "strokeDasharray" };
function KA(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  const o = i ? WA : HA;
  (e[o.offset] = `${-r}`), (e[o.array] = `${t} ${n}`);
}
const GA = ["offsetDistance", "offsetPath", "offsetRotate", "offsetAnchor"];
function Aw(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    pathLength: i,
    pathSpacing: o = 1,
    pathOffset: s = 0,
    ...a
  },
  l,
  u,
  c
) {
  if ((Zf(e, a, u), l)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  const { attrs: d, style: f } = e;
  d.transform && ((f.transform = d.transform), delete d.transform),
    (f.transform || d.transformOrigin) &&
      ((f.transformOrigin = d.transformOrigin ?? "50% 50%"),
      delete d.transformOrigin),
    f.transform &&
      ((f.transformBox = (c == null ? void 0 : c.transformBox) ?? "fill-box"),
      delete d.transformBox);
  for (const h of GA) d[h] !== void 0 && ((f[h] = d[h]), delete d[h]);
  t !== void 0 && (d.x = t),
    n !== void 0 && (d.y = n),
    r !== void 0 && (d.scale = r),
    i !== void 0 && KA(d, i, o, s, !1);
}
const Rw = new Set([
    "baseFrequency",
    "diffuseConstant",
    "kernelMatrix",
    "kernelUnitLength",
    "keySplines",
    "keyTimes",
    "limitingConeAngle",
    "markerHeight",
    "markerWidth",
    "numOctaves",
    "targetX",
    "targetY",
    "surfaceScale",
    "specularConstant",
    "specularExponent",
    "stdDeviation",
    "tableValues",
    "viewBox",
    "gradientTransform",
    "pathLength",
    "startOffset",
    "textLength",
    "lengthAdjust",
  ]),
  jw = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function QA(e, t, n, r) {
  kw(e, t, void 0, r);
  for (const i in t.attrs) e.setAttribute(Rw.has(i) ? i : Hf(i), t.attrs[i]);
}
function Mw(e, t, n) {
  const r = Jf(e, t, n);
  for (const i in e)
    if (je(e[i]) || je(t[i])) {
      const o =
        Zi.indexOf(i) !== -1
          ? "attr" + i.charAt(0).toUpperCase() + i.substring(1)
          : i;
      r[o] = e[i];
    }
  return r;
}
class YA extends bw {
  constructor() {
    super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = Ee);
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (Ji.has(n)) {
      const r = dw(n);
      return (r && r.default) || 0;
    }
    return (n = Rw.has(n) ? n : Hf(n)), t.getAttribute(n);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return Mw(t, n, r);
  }
  build(t, n, r) {
    Aw(t, n, this.isSVGTag, r.transformTemplate, r.style);
  }
  renderInstance(t, n, r, i) {
    QA(t, n, r, i);
  }
  mount(t) {
    (this.isSVGTag = jw(t.tagName)), super.mount(t);
  }
}
const XA = qf.length;
function Dw(e) {
  if (!e) return;
  if (!e.isControllingVariants) {
    const n = e.parent ? Dw(e.parent) || {} : {};
    return e.props.initial !== void 0 && (n.initial = e.props.initial), n;
  }
  const t = {};
  for (let n = 0; n < XA; n++) {
    const r = qf[n],
      i = e.props[r];
    (ns(i) || i === !1) && (t[r] = i);
  }
  return t;
}
function Lw(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
const qA = [...Xf].reverse(),
  ZA = Xf.length;
function JA(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => YN(e, n, r)));
}
function eR(e) {
  let t = JA(e),
    n = Lm(),
    r = !0,
    i = !1;
  const o = (u) => (c, d) => {
    var h;
    const f = Ir(
      e,
      d,
      u === "exit"
        ? (h = e.presenceContext) == null
          ? void 0
          : h.custom
        : void 0
    );
    if (f) {
      const { transition: x, transitionEnd: y, ...w } = f;
      c = { ...c, ...w, ...y };
    }
    return c;
  };
  function s(u) {
    t = u(e);
  }
  function a(u) {
    const { props: c } = e,
      d = Dw(e.parent) || {},
      f = [],
      h = new Set();
    let x = {},
      y = 1 / 0;
    for (let g = 0; g < ZA; g++) {
      const m = qA[g],
        v = n[m],
        b = c[m] !== void 0 ? c[m] : d[m],
        E = ns(b),
        C = m === u ? v.isActive : null;
      C === !1 && (y = g);
      let T = b === d[m] && b !== c[m] && E;
      if (
        (T && (r || i) && e.manuallyAnimateOnMount && (T = !1),
        (v.protectedKeys = { ...x }),
        (!v.isActive && C === null) ||
          (!b && !v.prevProp) ||
          Ll(b) ||
          typeof b == "boolean")
      )
        continue;
      if (m === "exit" && v.isActive && C !== !0) {
        v.prevResolvedValues && (x = { ...x, ...v.prevResolvedValues });
        continue;
      }
      const k = tR(v.prevProp, b);
      let M = k || (m === u && v.isActive && !T && E) || (g > y && E),
        N = !1;
      const F = Array.isArray(b) ? b : [b];
      let O = F.reduce(o(m), {});
      C === !1 && (O = {});
      const { prevResolvedValues: U = {} } = v,
        L = { ...U, ...O },
        W = (P) => {
          (M = !0),
            h.has(P) && ((N = !0), h.delete(P)),
            (v.needsAnimating[P] = !0);
          const A = e.getValue(P);
          A && (A.liveStyle = !1);
        };
      for (const P in L) {
        const A = O[P],
          I = U[P];
        if (x.hasOwnProperty(P)) continue;
        let $ = !1;
        od(A) && od(I) ? ($ = !Lw(A, I)) : ($ = A !== I),
          $
            ? A != null
              ? W(P)
              : h.add(P)
            : A !== void 0 && h.has(P)
            ? W(P)
            : (v.protectedKeys[P] = !0);
      }
      (v.prevProp = b),
        (v.prevResolvedValues = O),
        v.isActive && (x = { ...x, ...O }),
        (r || i) && e.blockInitialAnimation && (M = !1);
      const z = T && k;
      M &&
        (!z || N) &&
        f.push(
          ...F.map((P) => {
            const A = { type: m };
            if (
              typeof P == "string" &&
              (r || i) &&
              !z &&
              e.manuallyAnimateOnMount &&
              e.parent
            ) {
              const { parent: I } = e,
                $ = Ir(I, P);
              if (I.enteringChildren && $) {
                const { delayChildren: B } = $.transition || {};
                A.delay = nw(I.enteringChildren, e, B);
              }
            }
            return { animation: P, options: A };
          })
        );
    }
    if (h.size) {
      const g = {};
      if (typeof c.initial != "boolean") {
        const m = Ir(e, Array.isArray(c.initial) ? c.initial[0] : c.initial);
        m && m.transition && (g.transition = m.transition);
      }
      h.forEach((m) => {
        const v = e.getBaseTarget(m),
          b = e.getValue(m);
        b && (b.liveStyle = !0), (g[m] = v ?? null);
      }),
        f.push({ animation: g });
    }
    let w = !!f.length;
    return (
      r &&
        (c.initial === !1 || c.initial === c.animate) &&
        !e.manuallyAnimateOnMount &&
        (w = !1),
      (r = !1),
      (i = !1),
      w ? t(f) : Promise.resolve()
    );
  }
  function l(u, c) {
    var f;
    if (n[u].isActive === c) return Promise.resolve();
    (f = e.variantChildren) == null ||
      f.forEach((h) => {
        var x;
        return (x = h.animationState) == null ? void 0 : x.setActive(u, c);
      }),
      (n[u].isActive = c);
    const d = a(u);
    for (const h in n) n[h].protectedKeys = {};
    return d;
  }
  return {
    animateChanges: a,
    setActive: l,
    setAnimateFunction: s,
    getState: () => n,
    reset: () => {
      (n = Lm()), (i = !0);
    },
  };
}
function tR(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !Lw(t, e) : !1;
}
function vr(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function Lm() {
  return {
    animate: vr(!0),
    whileInView: vr(),
    whileHover: vr(),
    whileTap: vr(),
    whileDrag: vr(),
    whileFocus: vr(),
    exit: vr(),
  };
}
function pd(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function At(e, t) {
  pd(e.x, t.x), pd(e.y, t.y);
}
function Om(e, t) {
  (e.translate = t.translate),
    (e.scale = t.scale),
    (e.originPoint = t.originPoint),
    (e.origin = t.origin);
}
const Ow = 1e-4,
  nR = 1 - Ow,
  rR = 1 + Ow,
  Iw = 0.01,
  iR = 0 - Iw,
  oR = 0 + Iw;
function Ke(e) {
  return e.max - e.min;
}
function sR(e, t, n) {
  return Math.abs(e - t) <= n;
}
function Im(e, t, n, r = 0.5) {
  (e.origin = r),
    (e.originPoint = le(t.min, t.max, e.origin)),
    (e.scale = Ke(n) / Ke(t)),
    (e.translate = le(n.min, n.max, e.origin) - e.originPoint),
    ((e.scale >= nR && e.scale <= rR) || isNaN(e.scale)) && (e.scale = 1),
    ((e.translate >= iR && e.translate <= oR) || isNaN(e.translate)) &&
      (e.translate = 0);
}
function jo(e, t, n, r) {
  Im(e.x, t.x, n.x, r ? r.originX : void 0),
    Im(e.y, t.y, n.y, r ? r.originY : void 0);
}
function Fm(e, t, n, r = 0) {
  const i = r ? le(n.min, n.max, r) : n.min;
  (e.min = i + t.min), (e.max = e.min + Ke(t));
}
function aR(e, t, n, r) {
  Fm(e.x, t.x, n.x, r == null ? void 0 : r.x),
    Fm(e.y, t.y, n.y, r == null ? void 0 : r.y);
}
function Vm(e, t, n, r = 0) {
  const i = r ? le(n.min, n.max, r) : n.min;
  (e.min = t.min - i), (e.max = e.min + Ke(t));
}
function tl(e, t, n, r) {
  Vm(e.x, t.x, n.x, r == null ? void 0 : r.x),
    Vm(e.y, t.y, n.y, r == null ? void 0 : r.y);
}
function _m(e, t, n, r, i) {
  return (
    (e -= t), (e = el(e, 1 / n, r)), i !== void 0 && (e = el(e, 1 / i, r)), e
  );
}
function lR(e, t = 0, n = 1, r = 0.5, i, o = e, s = e) {
  if (
    (nn.test(t) &&
      ((t = parseFloat(t)), (t = le(s.min, s.max, t / 100) - s.min)),
    typeof t != "number")
  )
    return;
  let a = le(o.min, o.max, r);
  e === o && (a -= t),
    (e.min = _m(e.min, t, n, a, i)),
    (e.max = _m(e.max, t, n, a, i));
}
function zm(e, t, [n, r, i], o, s) {
  lR(e, t[n], t[r], t[i], t.scale, o, s);
}
const uR = ["x", "scaleX", "originX"],
  cR = ["y", "scaleY", "originY"];
function Bm(e, t, n, r) {
  zm(e.x, t, uR, n ? n.x : void 0, r ? r.x : void 0),
    zm(e.y, t, cR, n ? n.y : void 0, r ? r.y : void 0);
}
function $m(e) {
  return e.translate === 0 && e.scale === 1;
}
function Fw(e) {
  return $m(e.x) && $m(e.y);
}
function Um(e, t) {
  return e.min === t.min && e.max === t.max;
}
function dR(e, t) {
  return Um(e.x, t.x) && Um(e.y, t.y);
}
function Wm(e, t) {
  return (
    Math.round(e.min) === Math.round(t.min) &&
    Math.round(e.max) === Math.round(t.max)
  );
}
function Vw(e, t) {
  return Wm(e.x, t.x) && Wm(e.y, t.y);
}
function Hm(e) {
  return Ke(e.x) / Ke(e.y);
}
function Km(e, t) {
  return (
    e.translate === t.translate &&
    e.scale === t.scale &&
    e.originPoint === t.originPoint
  );
}
function Kt(e) {
  return [e("x"), e("y")];
}
function fR(e, t, n) {
  let r = "";
  const i = e.x.translate / t.x,
    o = e.y.translate / t.y,
    s = (n == null ? void 0 : n.z) || 0;
  if (
    ((i || o || s) && (r = `translate3d(${i}px, ${o}px, ${s}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const {
      transformPerspective: u,
      rotate: c,
      rotateX: d,
      rotateY: f,
      skewX: h,
      skewY: x,
    } = n;
    u && (r = `perspective(${u}px) ${r}`),
      c && (r += `rotate(${c}deg) `),
      d && (r += `rotateX(${d}deg) `),
      f && (r += `rotateY(${f}deg) `),
      h && (r += `skewX(${h}deg) `),
      x && (r += `skewY(${x}deg) `);
  }
  const a = e.x.scale * t.x,
    l = e.y.scale * t.y;
  return (a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`), r || "none";
}
const _w = [
    "borderTopLeftRadius",
    "borderTopRightRadius",
    "borderBottomLeftRadius",
    "borderBottomRightRadius",
  ],
  hR = _w.length,
  Gm = (e) => (typeof e == "string" ? parseFloat(e) : e),
  Qm = (e) => typeof e == "number" || _.test(e);
function pR(e, t, n, r, i, o) {
  i
    ? ((e.opacity = le(0, n.opacity ?? 1, mR(r))),
      (e.opacityExit = le(t.opacity ?? 1, 0, gR(r))))
    : o && (e.opacity = le(t.opacity ?? 1, n.opacity ?? 1, r));
  for (let s = 0; s < hR; s++) {
    const a = _w[s];
    let l = Ym(t, a),
      u = Ym(n, a);
    if (l === void 0 && u === void 0) continue;
    l || (l = 0),
      u || (u = 0),
      l === 0 || u === 0 || Qm(l) === Qm(u)
        ? ((e[a] = Math.max(le(Gm(l), Gm(u), r), 0)),
          (nn.test(u) || nn.test(l)) && (e[a] += "%"))
        : (e[a] = u);
  }
  (t.rotate || n.rotate) && (e.rotate = le(t.rotate || 0, n.rotate || 0, r));
}
function Ym(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const mR = zw(0, 0.5, Rx),
  gR = zw(0.5, 0.95, St);
function zw(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(es(e, t, r)));
}
function yR(e, t, n) {
  const r = je(e) ? e : Ui(e);
  return r.start(Uf("", r, t, n)), r.animation;
}
function rs(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
const vR = (e, t) => e.depth - t.depth;
class xR {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(t) {
    jf(this.children, t), (this.isDirty = !0);
  }
  remove(t) {
    Qa(this.children, t), (this.isDirty = !0);
  }
  forEach(t) {
    this.isDirty && this.children.sort(vR),
      (this.isDirty = !1),
      this.children.forEach(t);
  }
}
function wR(e, t) {
  const n = He.now(),
    r = ({ timestamp: i }) => {
      const o = i - n;
      o >= t && (lr(r), e(o - t));
    };
  return ie.setup(r, !0), () => lr(r);
}
function ma(e) {
  return je(e) ? e.get() : e;
}
class SR {
  constructor() {
    this.members = [];
  }
  add(t) {
    jf(this.members, t);
    for (let n = this.members.length - 1; n >= 0; n--) {
      const r = this.members[n];
      if (r === t || r === this.lead || r === this.prevLead) continue;
      const i = r.instance;
      (!i || i.isConnected === !1) &&
        !r.snapshot &&
        (Qa(this.members, r), r.unmount());
    }
    t.scheduleRender();
  }
  remove(t) {
    if (
      (Qa(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    var n;
    for (let r = this.members.indexOf(t) - 1; r >= 0; r--) {
      const i = this.members[r];
      if (
        i.isPresent !== !1 &&
        ((n = i.instance) == null ? void 0 : n.isConnected) !== !1
      )
        return this.promote(i), !0;
    }
    return !1;
  }
  promote(t, n) {
    var i;
    const r = this.lead;
    if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
      r.updateSnapshot(), t.scheduleRender();
      const { layoutDependency: o } = r.options,
        { layoutDependency: s } = t.options;
      (o === void 0 || o !== s) &&
        ((t.resumeFrom = r),
        n && (r.preserveOpacity = !0),
        r.snapshot &&
          ((t.snapshot = r.snapshot),
          (t.snapshot.latestValues = r.animationValues || r.latestValues)),
        (i = t.root) != null && i.isUpdating && (t.isLayoutDirty = !0)),
        t.options.crossfade === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      var n, r, i, o, s;
      (r = (n = t.options).onExitComplete) == null || r.call(n),
        (s =
          (i = t.resumingFrom) == null
            ? void 0
            : (o = i.options).onExitComplete) == null || s.call(o);
    });
  }
  scheduleRender() {
    this.members.forEach((t) => t.instance && t.scheduleRender(!1));
  }
  removeLeadSnapshot() {
    var t;
    (t = this.lead) != null && t.snapshot && (this.lead.snapshot = void 0);
  }
}
const ga = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 },
  Au = ["", "X", "Y", "Z"],
  bR = 1e3;
let ER = 0;
function Ru(e, t, n, r) {
  const { latestValues: i } = t;
  i[e] && ((n[e] = i[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
}
function Bw(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
  const { visualElement: t } = e.options;
  if (!t) return;
  const n = aw(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: i, layoutId: o } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", ie, !(i || o));
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && Bw(r);
}
function $w({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: i,
}) {
  return class {
    constructor(s = {}, a = t == null ? void 0 : t()) {
      (this.id = ER++),
        (this.animationId = 0),
        (this.animationCommitId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.layoutVersion = 0),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (this.projectionUpdateScheduled = !1),
            this.nodes.forEach(PR),
            this.nodes.forEach(MR),
            this.nodes.forEach(DR),
            this.nodes.forEach(kR);
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.linkedParentVersion = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = s),
        (this.root = a ? a.root || a : this),
        (this.path = a ? [...a.path, a] : []),
        (this.parent = a),
        (this.depth = a ? a.depth + 1 : 0);
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new xR());
    }
    addEventListener(s, a) {
      return (
        this.eventHandlers.has(s) || this.eventHandlers.set(s, new Mf()),
        this.eventHandlers.get(s).add(a)
      );
    }
    notifyListeners(s, ...a) {
      const l = this.eventHandlers.get(s);
      l && l.notify(...a);
    }
    hasListeners(s) {
      return this.eventHandlers.has(s);
    }
    mount(s) {
      if (this.instance) return;
      (this.isSVG = Yf(s) && !TA(s)), (this.instance = s);
      const { layoutId: a, layout: l, visualElement: u } = this.options;
      if (
        (u && !u.current && u.mount(s),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        this.root.hasTreeAnimated && (l || a) && (this.isLayoutDirty = !0),
        e)
      ) {
        let c,
          d = 0;
        const f = () => (this.root.updateBlockedByResize = !1);
        ie.read(() => {
          d = window.innerWidth;
        }),
          e(s, () => {
            const h = window.innerWidth;
            h !== d &&
              ((d = h),
              (this.root.updateBlockedByResize = !0),
              c && c(),
              (c = wR(f, 250)),
              ga.hasAnimatedSinceResize &&
                ((ga.hasAnimatedSinceResize = !1), this.nodes.forEach(Zm)));
          });
      }
      a && this.root.registerSharedNode(a, this),
        this.options.animate !== !1 &&
          u &&
          (a || l) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: c,
              hasLayoutChanged: d,
              hasRelativeLayoutChanged: f,
              layout: h,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const x =
                  this.options.transition || u.getDefaultTransition() || VR,
                { onLayoutAnimationStart: y, onLayoutAnimationComplete: w } =
                  u.getProps(),
                g = !this.targetLayout || !Vw(this.targetLayout, h),
                m = !d && f;
              if (
                this.options.layoutRoot ||
                this.resumeFrom ||
                m ||
                (d && (g || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0));
                const v = { ...$f(x, "layout"), onPlay: y, onComplete: w };
                (u.shouldReduceMotion || this.options.layoutRoot) &&
                  ((v.delay = 0), (v.type = !1)),
                  this.startAnimation(v),
                  this.setAnimationOrigin(c, m);
              } else
                d || Zm(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = h;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const s = this.getStack();
      s && s.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        this.eventHandlers.clear(),
        lr(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(LR),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: s } = this.options;
      return s && s.getProps().transformTemplate;
    }
    willUpdate(s = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          Bw(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const d = this.path[c];
        (d.shouldResetTransform = !0),
          (typeof d.latestValues.x == "string" ||
            typeof d.latestValues.y == "string") &&
            (d.isLayoutDirty = !0),
          d.updateScroll("snapshot"),
          d.options.layoutRoot && d.willUpdate(!1);
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l) return;
      const u = this.getTransformTemplate();
      (this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        s && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        const l = this.updateBlockedByResize;
        this.unblockUpdate(),
          (this.updateBlockedByResize = !1),
          this.clearAllSnapshots(),
          l && this.nodes.forEach(AR),
          this.nodes.forEach(Xm);
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(qm);
        return;
      }
      (this.animationCommitId = this.animationId),
        this.isUpdating
          ? ((this.isUpdating = !1),
            this.nodes.forEach(RR),
            this.nodes.forEach(jR),
            this.nodes.forEach(CR),
            this.nodes.forEach(TR))
          : this.nodes.forEach(qm),
        this.clearAllSnapshots();
      const a = He.now();
      (Re.delta = on(0, 1e3 / 60, a - Re.timestamp)),
        (Re.timestamp = a),
        (Re.isProcessing = !0),
        Su.update.process(Re),
        Su.preRender.process(Re),
        Su.render.process(Re),
        (Re.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), Gf.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(NR), this.sharedNodes.forEach(OR);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        ie.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      ie.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot ||
        !this.instance ||
        ((this.snapshot = this.measure()),
        this.snapshot &&
          !Ke(this.snapshot.measuredBox.x) &&
          !Ke(this.snapshot.measuredBox.y) &&
          (this.snapshot = void 0));
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
      const s = this.layout;
      (this.layout = this.measure(!1)),
        this.layoutVersion++,
        this.layoutCorrected || (this.layoutCorrected = Ee()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: a } = this.options;
      a &&
        a.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          s ? s.layoutBox : void 0
        );
    }
    updateScroll(s = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === s &&
          (a = !1),
        a && this.instance)
      ) {
        const l = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: s,
          isRoot: l,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : l,
        };
      }
    }
    resetTransform() {
      if (!i) return;
      const s =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        a = this.projectionDelta && !Fw(this.projectionDelta),
        l = this.getTransformTemplate(),
        u = l ? l(this.latestValues, "") : void 0,
        c = u !== this.prevTransformTemplateValue;
      s &&
        this.instance &&
        (a || Sr(this.latestValues) || c) &&
        (i(this.instance, u),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(s = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return (
        s && (l = this.removeTransform(l)),
        _R(l),
        {
          animationId: this.root.animationId,
          measuredBox: a,
          layoutBox: l,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      var u;
      const { visualElement: s } = this.options;
      if (!s) return Ee();
      const a = s.measureViewportBox();
      if (
        !(
          ((u = this.scroll) == null ? void 0 : u.wasRoot) || this.path.some(zR)
        )
      ) {
        const { scroll: c } = this.root;
        c && (Xt(a.x, c.offset.x), Xt(a.y, c.offset.y));
      }
      return a;
    }
    removeElementScroll(s) {
      var l;
      const a = Ee();
      if ((At(a, s), (l = this.scroll) != null && l.wasRoot)) return a;
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u],
          { scroll: d, options: f } = c;
        c !== this.root &&
          d &&
          f.layoutScroll &&
          (d.wasRoot && At(a, s), Xt(a.x, d.offset.x), Xt(a.y, d.offset.y));
      }
      return a;
    }
    applyTransform(s, a = !1, l) {
      var c, d;
      const u = l || Ee();
      At(u, s);
      for (let f = 0; f < this.path.length; f++) {
        const h = this.path[f];
        !a &&
          h.options.layoutScroll &&
          h.scroll &&
          h !== h.root &&
          (Xt(u.x, -h.scroll.offset.x), Xt(u.y, -h.scroll.offset.y)),
          Sr(h.latestValues) &&
            pa(
              u,
              h.latestValues,
              (c = h.layout) == null ? void 0 : c.layoutBox
            );
      }
      return (
        Sr(this.latestValues) &&
          pa(
            u,
            this.latestValues,
            (d = this.layout) == null ? void 0 : d.layoutBox
          ),
        u
      );
    }
    removeTransform(s) {
      var l;
      const a = Ee();
      At(a, s);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        if (!Sr(c.latestValues)) continue;
        let d;
        c.instance &&
          (dd(c.latestValues) && c.updateSnapshot(),
          (d = Ee()),
          At(d, c.measurePageBox())),
          Bm(
            a,
            c.latestValues,
            (l = c.snapshot) == null ? void 0 : l.layoutBox,
            d
          );
      }
      return Sr(this.latestValues) && Bm(a, this.latestValues), a;
    }
    setTargetDelta(s) {
      (this.targetDelta = s),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(s) {
      this.options = {
        ...this.options,
        ...s,
        crossfade: s.crossfade !== void 0 ? s.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== Re.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(s = !1) {
      var h;
      const a = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = a.isSharedProjectionDirty);
      const l = !!this.resumingFrom || this !== a;
      if (
        !(
          s ||
          (l && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          ((h = this.parent) != null && h.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: c, layoutId: d } = this.options;
      if (!this.layout || !(c || d)) return;
      this.resolvedRelativeTargetAt = Re.timestamp;
      const f = this.getClosestProjectingParent();
      f &&
        this.linkedParentVersion !== f.layoutVersion &&
        !f.options.layoutRoot &&
        this.removeRelativeTarget(),
        !this.targetDelta &&
          !this.relativeTarget &&
          (this.options.layoutAnchor !== !1 && f && f.layout
            ? this.createRelativeTarget(
                f,
                this.layout.layoutBox,
                f.layout.layoutBox
              )
            : this.removeRelativeTarget()),
        !(!this.relativeTarget && !this.targetDelta) &&
          (this.target ||
            ((this.target = Ee()), (this.targetWithTransforms = Ee())),
          this.relativeTarget &&
          this.relativeTargetOrigin &&
          this.relativeParent &&
          this.relativeParent.target
            ? (this.forceRelativeParentToResolveTarget(),
              aR(
                this.target,
                this.relativeTarget,
                this.relativeParent.target,
                this.options.layoutAnchor || void 0
              ))
            : this.targetDelta
            ? (this.resumingFrom
                ? this.applyTransform(this.layout.layoutBox, !1, this.target)
                : At(this.target, this.layout.layoutBox),
              Tw(this.target, this.targetDelta))
            : At(this.target, this.layout.layoutBox),
          this.attemptToResolveRelativeTarget &&
            ((this.attemptToResolveRelativeTarget = !1),
            this.options.layoutAnchor !== !1 &&
            f &&
            !!f.resumingFrom == !!this.resumingFrom &&
            !f.options.layoutScroll &&
            f.target &&
            this.animationProgress !== 1
              ? this.createRelativeTarget(f, this.target, f.target)
              : (this.relativeParent = this.relativeTarget = void 0)));
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          dd(this.parent.latestValues) ||
          Cw(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    createRelativeTarget(s, a, l) {
      (this.relativeParent = s),
        (this.linkedParentVersion = s.layoutVersion),
        this.forceRelativeParentToResolveTarget(),
        (this.relativeTarget = Ee()),
        (this.relativeTargetOrigin = Ee()),
        tl(
          this.relativeTargetOrigin,
          a,
          l,
          this.options.layoutAnchor || void 0
        ),
        At(this.relativeTarget, this.relativeTargetOrigin);
    }
    removeRelativeTarget() {
      this.relativeParent = this.relativeTarget = void 0;
    }
    calcProjection() {
      var x;
      const s = this.getLead(),
        a = !!this.resumingFrom || this !== s;
      let l = !0;
      if (
        ((this.isProjectionDirty ||
          ((x = this.parent) != null && x.isProjectionDirty)) &&
          (l = !1),
        a &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (l = !1),
        this.resolvedRelativeTargetAt === Re.timestamp && (l = !1),
        l)
      )
        return;
      const { layout: u, layoutId: c } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(u || c))
      )
        return;
      At(this.layoutCorrected, this.layout.layoutBox);
      const d = this.treeScale.x,
        f = this.treeScale.y;
      IA(this.layoutCorrected, this.treeScale, this.path, a),
        s.layout &&
          !s.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((s.target = s.layout.layoutBox), (s.targetWithTransforms = Ee()));
      const { target: h } = s;
      if (!h) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (Om(this.prevProjectionDelta.x, this.projectionDelta.x),
          Om(this.prevProjectionDelta.y, this.projectionDelta.y)),
        jo(this.projectionDelta, this.layoutCorrected, h, this.latestValues),
        (this.treeScale.x !== d ||
          this.treeScale.y !== f ||
          !Km(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !Km(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", h));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(s = !0) {
      var a;
      if (((a = this.options.visualElement) == null || a.scheduleRender(), s)) {
        const l = this.getStack();
        l && l.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      (this.prevProjectionDelta = pi()),
        (this.projectionDelta = pi()),
        (this.projectionDeltaWithTransform = pi());
    }
    setAnimationOrigin(s, a = !1) {
      const l = this.snapshot,
        u = l ? l.latestValues : {},
        c = { ...this.latestValues },
        d = pi();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !a);
      const f = Ee(),
        h = l ? l.source : void 0,
        x = this.layout ? this.layout.source : void 0,
        y = h !== x,
        w = this.getStack(),
        g = !w || w.members.length <= 1,
        m = !!(y && !g && this.options.crossfade === !0 && !this.path.some(FR));
      this.animationProgress = 0;
      let v;
      (this.mixTargetDelta = (b) => {
        const E = b / 1e3;
        Jm(d.x, s.x, E),
          Jm(d.y, s.y, E),
          this.setTargetDelta(d),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (tl(
              f,
              this.layout.layoutBox,
              this.relativeParent.layout.layoutBox,
              this.options.layoutAnchor || void 0
            ),
            IR(this.relativeTarget, this.relativeTargetOrigin, f, E),
            v && dR(this.relativeTarget, v) && (this.isProjectionDirty = !1),
            v || (v = Ee()),
            At(v, this.relativeTarget)),
          y &&
            ((this.animationValues = c), pR(c, u, this.latestValues, E, m, g)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = E);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(s) {
      var a, l, u;
      this.notifyListeners("animationStart"),
        (a = this.currentAnimation) == null || a.stop(),
        (u = (l = this.resumingFrom) == null ? void 0 : l.currentAnimation) ==
          null || u.stop(),
        this.pendingAnimation &&
          (lr(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = ie.update(() => {
          (ga.hasAnimatedSinceResize = !0),
            this.motionValue || (this.motionValue = Ui(0)),
            this.motionValue.jump(0, !1),
            (this.currentAnimation = yR(this.motionValue, [0, 1e3], {
              ...s,
              velocity: 0,
              isSync: !0,
              onUpdate: (c) => {
                this.mixTargetDelta(c), s.onUpdate && s.onUpdate(c);
              },
              onStop: () => {},
              onComplete: () => {
                s.onComplete && s.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const s = this.getStack();
      s && s.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(bR),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const s = this.getLead();
      let {
        targetWithTransforms: a,
        target: l,
        layout: u,
        latestValues: c,
      } = s;
      if (!(!a || !l || !u)) {
        if (
          this !== s &&
          this.layout &&
          u &&
          Uw(this.options.animationType, this.layout.layoutBox, u.layoutBox)
        ) {
          l = this.target || Ee();
          const d = Ke(this.layout.layoutBox.x);
          (l.x.min = s.target.x.min), (l.x.max = l.x.min + d);
          const f = Ke(this.layout.layoutBox.y);
          (l.y.min = s.target.y.min), (l.y.max = l.y.min + f);
        }
        At(a, l),
          pa(a, c),
          jo(this.projectionDeltaWithTransform, this.layoutCorrected, a, c);
      }
    }
    registerSharedNode(s, a) {
      this.sharedNodes.has(s) || this.sharedNodes.set(s, new SR()),
        this.sharedNodes.get(s).add(a);
      const u = a.options.initialPromotionConfig;
      a.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity:
          u && u.shouldPreserveFollowOpacity
            ? u.shouldPreserveFollowOpacity(a)
            : void 0,
      });
    }
    isLead() {
      const s = this.getStack();
      return s ? s.lead === this : !0;
    }
    getLead() {
      var a;
      const { layoutId: s } = this.options;
      return s
        ? ((a = this.getStack()) == null ? void 0 : a.lead) || this
        : this;
    }
    getPrevLead() {
      var a;
      const { layoutId: s } = this.options;
      return s ? ((a = this.getStack()) == null ? void 0 : a.prevLead) : void 0;
    }
    getStack() {
      const { layoutId: s } = this.options;
      if (s) return this.root.sharedNodes.get(s);
    }
    promote({ needsReset: s, transition: a, preserveFollowOpacity: l } = {}) {
      const u = this.getStack();
      u && u.promote(this, l),
        s && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        a && this.setOptions({ transition: a });
    }
    relegate() {
      const s = this.getStack();
      return s ? s.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: s } = this.options;
      if (!s) return;
      let a = !1;
      const { latestValues: l } = s;
      if (
        ((l.z ||
          l.rotate ||
          l.rotateX ||
          l.rotateY ||
          l.rotateZ ||
          l.skewX ||
          l.skewY) &&
          (a = !0),
        !a)
      )
        return;
      const u = {};
      l.z && Ru("z", s, u, this.animationValues);
      for (let c = 0; c < Au.length; c++)
        Ru(`rotate${Au[c]}`, s, u, this.animationValues),
          Ru(`skew${Au[c]}`, s, u, this.animationValues);
      s.render();
      for (const c in u)
        s.setStaticValue(c, u[c]),
          this.animationValues && (this.animationValues[c] = u[c]);
      s.scheduleRender();
    }
    applyProjectionStyles(s, a) {
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) {
        s.visibility = "hidden";
        return;
      }
      const l = this.getTransformTemplate();
      if (this.needsReset) {
        (this.needsReset = !1),
          (s.visibility = ""),
          (s.opacity = ""),
          (s.pointerEvents = ma(a == null ? void 0 : a.pointerEvents) || ""),
          (s.transform = l ? l(this.latestValues, "") : "none");
        return;
      }
      const u = this.getLead();
      if (!this.projectionDelta || !this.layout || !u.target) {
        this.options.layoutId &&
          ((s.opacity =
            this.latestValues.opacity !== void 0
              ? this.latestValues.opacity
              : 1),
          (s.pointerEvents = ma(a == null ? void 0 : a.pointerEvents) || "")),
          this.hasProjected &&
            !Sr(this.latestValues) &&
            ((s.transform = l ? l({}, "") : "none"), (this.hasProjected = !1));
        return;
      }
      s.visibility = "";
      const c = u.animationValues || u.latestValues;
      this.applyTransformsToTarget();
      let d = fR(this.projectionDeltaWithTransform, this.treeScale, c);
      l && (d = l(c, d)), (s.transform = d);
      const { x: f, y: h } = this.projectionDelta;
      (s.transformOrigin = `${f.origin * 100}% ${h.origin * 100}% 0`),
        u.animationValues
          ? (s.opacity =
              u === this
                ? c.opacity ?? this.latestValues.opacity ?? 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : c.opacityExit)
          : (s.opacity =
              u === this
                ? c.opacity !== void 0
                  ? c.opacity
                  : ""
                : c.opacityExit !== void 0
                ? c.opacityExit
                : 0);
      for (const x in hd) {
        if (c[x] === void 0) continue;
        const { correct: y, applyTo: w, isCSSVariable: g } = hd[x],
          m = d === "none" ? c[x] : y(c[x], u);
        if (w) {
          const v = w.length;
          for (let b = 0; b < v; b++) s[w[b]] = m;
        } else
          g ? (this.options.visualElement.renderState.vars[x] = m) : (s[x] = m);
      }
      this.options.layoutId &&
        (s.pointerEvents =
          u === this ? ma(a == null ? void 0 : a.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((s) => {
        var a;
        return (a = s.currentAnimation) == null ? void 0 : a.stop();
      }),
        this.root.nodes.forEach(Xm),
        this.root.sharedNodes.clear();
    }
  };
}
function CR(e) {
  e.updateLayout();
}
function TR(e) {
  var n;
  const t = ((n = e.resumeFrom) == null ? void 0 : n.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && t && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: i } = e.layout,
      { animationType: o } = e.options,
      s = t.source !== e.layout.source;
    if (o === "size")
      Kt((d) => {
        const f = s ? t.measuredBox[d] : t.layoutBox[d],
          h = Ke(f);
        (f.min = r[d].min), (f.max = f.min + h);
      });
    else if (o === "x" || o === "y") {
      const d = o === "x" ? "y" : "x";
      pd(s ? t.measuredBox[d] : t.layoutBox[d], r[d]);
    } else
      Uw(o, t.layoutBox, r) &&
        Kt((d) => {
          const f = s ? t.measuredBox[d] : t.layoutBox[d],
            h = Ke(r[d]);
          (f.max = f.min + h),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[d].max = e.relativeTarget[d].min + h));
        });
    const a = pi();
    jo(a, r, t.layoutBox);
    const l = pi();
    s ? jo(l, e.applyTransform(i, !0), t.measuredBox) : jo(l, r, t.layoutBox);
    const u = !Fw(a);
    let c = !1;
    if (!e.resumeFrom) {
      const d = e.getClosestProjectingParent();
      if (d && !d.resumeFrom) {
        const { snapshot: f, layout: h } = d;
        if (f && h) {
          const x = e.options.layoutAnchor || void 0,
            y = Ee();
          tl(y, t.layoutBox, f.layoutBox, x);
          const w = Ee();
          tl(w, r, h.layoutBox, x),
            Vw(y, w) || (c = !0),
            d.options.layoutRoot &&
              ((e.relativeTarget = w),
              (e.relativeTargetOrigin = y),
              (e.relativeParent = d));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: t,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: u,
      hasRelativeLayoutChanged: c,
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function PR(e) {
  e.parent &&
    (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
    e.isSharedProjectionDirty ||
      (e.isSharedProjectionDirty = !!(
        e.isProjectionDirty ||
        e.parent.isProjectionDirty ||
        e.parent.isSharedProjectionDirty
      )),
    e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function kR(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function NR(e) {
  e.clearSnapshot();
}
function Xm(e) {
  e.clearMeasurements();
}
function AR(e) {
  (e.isLayoutDirty = !0), e.updateLayout();
}
function qm(e) {
  e.isLayoutDirty = !1;
}
function RR(e) {
  e.isAnimationBlocked &&
    e.layout &&
    !e.isLayoutDirty &&
    ((e.snapshot = e.layout), (e.isLayoutDirty = !0));
}
function jR(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform();
}
function Zm(e) {
  e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0);
}
function MR(e) {
  e.resolveTargetDelta();
}
function DR(e) {
  e.calcProjection();
}
function LR(e) {
  e.resetSkewAndRotation();
}
function OR(e) {
  e.removeLeadSnapshot();
}
function Jm(e, t, n) {
  (e.translate = le(t.translate, 0, n)),
    (e.scale = le(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function eg(e, t, n, r) {
  (e.min = le(t.min, n.min, r)), (e.max = le(t.max, n.max, r));
}
function IR(e, t, n, r) {
  eg(e.x, t.x, n.x, r), eg(e.y, t.y, n.y, r);
}
function FR(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const VR = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  tg = (e) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(e),
  ng = tg("applewebkit/") && !tg("chrome/") ? Math.round : St;
function rg(e) {
  (e.min = ng(e.min)), (e.max = ng(e.max));
}
function _R(e) {
  rg(e.x), rg(e.y);
}
function Uw(e, t, n) {
  return (
    e === "position" || (e === "preserve-aspect" && !sR(Hm(t), Hm(n), 0.2))
  );
}
function zR(e) {
  var t;
  return e !== e.root && ((t = e.scroll) == null ? void 0 : t.wasRoot);
}
const BR = $w({
    attachResizeListener: (e, t) => rs(e, "resize", t),
    measureScroll: () => {
      var e, t;
      return {
        x:
          document.documentElement.scrollLeft ||
          ((e = document.body) == null ? void 0 : e.scrollLeft) ||
          0,
        y:
          document.documentElement.scrollTop ||
          ((t = document.body) == null ? void 0 : t.scrollTop) ||
          0,
      };
    },
    checkIsScrollRoot: () => !0,
  }),
  ju = { current: void 0 },
  Ww = $w({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!ju.current) {
        const e = new BR({});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (ju.current = e);
      }
      return ju.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  Hw = S.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  });
function $R(e = !0) {
  const t = S.useContext(Rf);
  if (t === null) return [!0, null];
  const { isPresent: n, onExitComplete: r, register: i } = t,
    o = S.useId();
  S.useEffect(() => {
    if (e) return i(o);
  }, [e]);
  const s = S.useCallback(() => e && r && r(o), [o, r, e]);
  return !n && r ? [!1, s] : [!0];
}
const Kw = S.createContext({ strict: !1 }),
  ig = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  };
let og = !1;
function UR() {
  if (og) return;
  const e = {};
  for (const t in ig) e[t] = { isEnabled: (n) => ig[t].some((r) => !!n[r]) };
  Sw(e), (og = !0);
}
function Gw() {
  return UR(), MA();
}
function WR(e) {
  const t = Gw();
  for (const n in e) t[n] = { ...t[n], ...e[n] };
  Sw(t);
}
const HR = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "propagate",
  "ignoreStrict",
  "viewport",
]);
function nl(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    e.startsWith("onLayout") ||
    HR.has(e)
  );
}
let Qw = (e) => !nl(e);
function KR(e) {
  typeof e == "function" && (Qw = (t) => (t.startsWith("on") ? !nl(t) : e(t)));
}
try {
  KR(require("@emotion/is-prop-valid").default);
} catch {}
function GR(e, t, n) {
  const r = {};
  for (const i in e)
    (i === "values" && typeof e.values == "object") ||
      je(e[i]) ||
      ((Qw(i) ||
        (n === !0 && nl(i)) ||
        (!t && !nl(i)) ||
        (e.draggable && i.startsWith("onDrag"))) &&
        (r[i] = e[i]));
  return r;
}
const Il = S.createContext({});
function QR(e, t) {
  if (Ol(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || ns(n) ? n : void 0,
      animate: ns(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function YR(e) {
  const { initial: t, animate: n } = QR(e, S.useContext(Il));
  return S.useMemo(() => ({ initial: t, animate: n }), [sg(t), sg(n)]);
}
function sg(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const eh = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function Yw(e, t, n) {
  for (const r in t) !je(t[r]) && !Nw(r, n) && (e[r] = t[r]);
}
function XR({ transformTemplate: e }, t) {
  return S.useMemo(() => {
    const n = eh();
    return Zf(n, t, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function qR(e, t) {
  const n = e.style || {},
    r = {};
  return Yw(r, n, e), Object.assign(r, XR(e, t)), r;
}
function ZR(e, t) {
  const n = {},
    r = qR(e, t);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((n.draggable = !1),
      (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none"),
      (r.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (n.tabIndex = 0),
    (n.style = r),
    n
  );
}
const Xw = () => ({ ...eh(), attrs: {} });
function JR(e, t, n, r) {
  const i = S.useMemo(() => {
    const o = Xw();
    return (
      Aw(o, t, jw(r), e.transformTemplate, e.style),
      { ...o.attrs, style: { ...o.style } }
    );
  }, [t]);
  if (e.style) {
    const o = {};
    Yw(o, e.style, e), (i.style = { ...o, ...i.style });
  }
  return i;
}
const ej = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function th(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(ej.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
function tj(e, t, n, { latestValues: r }, i, o = !1, s) {
  const l = (s ?? th(e) ? JR : ZR)(t, r, i, e),
    u = GR(t, typeof e == "string", o),
    c = e !== S.Fragment ? { ...u, ...l, ref: n } : {},
    { children: d } = t,
    f = S.useMemo(() => (je(d) ? d.get() : d), [d]);
  return S.createElement(e, { ...c, children: f });
}
function nj({ scrapeMotionValuesFromProps: e, createRenderState: t }, n, r, i) {
  return { latestValues: rj(n, r, i, e), renderState: t() };
}
function rj(e, t, n, r) {
  const i = {},
    o = r(e, {});
  for (const f in o) i[f] = ma(o[f]);
  let { initial: s, animate: a } = e;
  const l = Ol(e),
    u = xw(e);
  t &&
    u &&
    !l &&
    e.inherit !== !1 &&
    (s === void 0 && (s = t.initial), a === void 0 && (a = t.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || s === !1;
  const d = c ? a : s;
  if (d && typeof d != "boolean" && !Ll(d)) {
    const f = Array.isArray(d) ? d : [d];
    for (let h = 0; h < f.length; h++) {
      const x = Wf(e, f[h]);
      if (x) {
        const { transitionEnd: y, transition: w, ...g } = x;
        for (const m in g) {
          let v = g[m];
          if (Array.isArray(v)) {
            const b = c ? v.length - 1 : 0;
            v = v[b];
          }
          v !== null && (i[m] = v);
        }
        for (const m in y) i[m] = y[m];
      }
    }
  }
  return i;
}
const qw = (e) => (t, n) => {
    const r = S.useContext(Il),
      i = S.useContext(Rf),
      o = () => nj(e, t, r, i);
    return n ? o() : e2(o);
  },
  ij = qw({ scrapeMotionValuesFromProps: Jf, createRenderState: eh }),
  oj = qw({ scrapeMotionValuesFromProps: Mw, createRenderState: Xw }),
  sj = Symbol.for("motionComponentSymbol");
function aj(e, t, n) {
  const r = S.useRef(n);
  S.useInsertionEffect(() => {
    r.current = n;
  });
  const i = S.useRef(null);
  return S.useCallback(
    (o) => {
      var a;
      o && ((a = e.onMount) == null || a.call(e, o));
      const s = r.current;
      if (typeof s == "function")
        if (o) {
          const l = s(o);
          typeof l == "function" && (i.current = l);
        } else i.current ? (i.current(), (i.current = null)) : s(o);
      else s && (s.current = o);
      t && (o ? t.mount(o) : t.unmount());
    },
    [t]
  );
}
const Zw = S.createContext({});
function Jr(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function lj(e, t, n, r, i, o) {
  var v, b;
  const { visualElement: s } = S.useContext(Il),
    a = S.useContext(Kw),
    l = S.useContext(Rf),
    u = S.useContext(Hw),
    c = u.reducedMotion,
    d = u.skipAnimations,
    f = S.useRef(null),
    h = S.useRef(!1);
  (r = r || a.renderer),
    !f.current &&
      r &&
      ((f.current = r(e, {
        visualState: t,
        parent: s,
        props: n,
        presenceContext: l,
        blockInitialAnimation: l ? l.initial === !1 : !1,
        reducedMotionConfig: c,
        skipAnimations: d,
        isSVG: o,
      })),
      h.current && f.current && (f.current.manuallyAnimateOnMount = !0));
  const x = f.current,
    y = S.useContext(Zw);
  x &&
    !x.projection &&
    i &&
    (x.type === "html" || x.type === "svg") &&
    uj(f.current, n, i, y);
  const w = S.useRef(!1);
  S.useInsertionEffect(() => {
    x && w.current && x.update(n, l);
  });
  const g = n[sw],
    m = S.useRef(
      !!g &&
        typeof window < "u" &&
        !((v = window.MotionHandoffIsComplete) != null && v.call(window, g)) &&
        ((b = window.MotionHasOptimisedAnimation) == null
          ? void 0
          : b.call(window, g))
    );
  return (
    n2(() => {
      (h.current = !0),
        x &&
          ((w.current = !0),
          (window.MotionIsMounted = !0),
          x.updateFeatures(),
          x.scheduleRenderMicrotask(),
          m.current && x.animationState && x.animationState.animateChanges());
    }),
    S.useEffect(() => {
      x &&
        (!m.current && x.animationState && x.animationState.animateChanges(),
        m.current &&
          (queueMicrotask(() => {
            var E;
            (E = window.MotionHandoffMarkAsComplete) == null ||
              E.call(window, g);
          }),
          (m.current = !1)),
        (x.enteringChildren = void 0));
    }),
    x
  );
}
function uj(e, t, n, r) {
  const {
    layoutId: i,
    layout: o,
    drag: s,
    dragConstraints: a,
    layoutScroll: l,
    layoutRoot: u,
    layoutAnchor: c,
    layoutCrossfade: d,
  } = t;
  (e.projection = new n(
    e.latestValues,
    t["data-framer-portal-id"] ? void 0 : Jw(e.parent)
  )),
    e.projection.setOptions({
      layoutId: i,
      layout: o,
      alwaysMeasureLayout: !!s || (a && Jr(a)),
      visualElement: e,
      animationType: typeof o == "string" ? o : "both",
      initialPromotionConfig: r,
      crossfade: d,
      layoutScroll: l,
      layoutRoot: u,
      layoutAnchor: c,
    });
}
function Jw(e) {
  if (e) return e.options.allowProjection !== !1 ? e.projection : Jw(e.parent);
}
function Mu(e, { forwardMotionProps: t = !1, type: n } = {}, r, i) {
  r && WR(r);
  const o = n ? n === "svg" : th(e),
    s = o ? oj : ij;
  function a(u, c) {
    let d;
    const f = { ...S.useContext(Hw), ...u, layoutId: cj(u) },
      { isStatic: h } = f,
      x = YR(u),
      y = s(u, h);
    if (!h && typeof window < "u") {
      dj();
      const w = fj(f);
      (d = w.MeasureLayout),
        (x.visualElement = lj(e, y, f, i, w.ProjectionNode, o));
    }
    return p.jsxs(Il.Provider, {
      value: x,
      children: [
        d && x.visualElement
          ? p.jsx(d, { visualElement: x.visualElement, ...f })
          : null,
        tj(e, u, aj(y, x.visualElement, c), y, h, t, o),
      ],
    });
  }
  a.displayName = `motion.${
    typeof e == "string" ? e : `create(${e.displayName ?? e.name ?? ""})`
  }`;
  const l = S.forwardRef(a);
  return (l[sj] = e), l;
}
function cj({ layoutId: e }) {
  const t = S.useContext(vx).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function dj(e, t) {
  S.useContext(Kw).strict;
}
function fj(e) {
  const t = Gw(),
    { drag: n, layout: r } = t;
  if (!n && !r) return {};
  const i = { ...n, ...r };
  return {
    MeasureLayout:
      (n != null && n.isEnabled(e)) || (r != null && r.isEnabled(e))
        ? i.MeasureLayout
        : void 0,
    ProjectionNode: i.ProjectionNode,
  };
}
function hj(e, t) {
  if (typeof Proxy > "u") return Mu;
  const n = new Map(),
    r = (o, s) => Mu(o, s, e, t),
    i = (o, s) => r(o, s);
  return new Proxy(i, {
    get: (o, s) =>
      s === "create"
        ? r
        : (n.has(s) || n.set(s, Mu(s, void 0, e, t)), n.get(s)),
  });
}
const pj = (e, t) =>
  t.isSVG ?? th(e)
    ? new YA(t)
    : new UA(t, { allowProjection: e !== S.Fragment });
class mj extends pr {
  constructor(t) {
    super(t), t.animationState || (t.animationState = eR(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    Ll(t) && (this.unmountControls = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var t;
    this.node.animationState.reset(),
      (t = this.unmountControls) == null || t.call(this);
  }
}
let gj = 0;
class yj extends pr {
  constructor() {
    super(...arguments), (this.id = gj++), (this.isExitComplete = !1);
  }
  update() {
    var o;
    if (!this.node.presenceContext) return;
    const { isPresent: t, onExitComplete: n } = this.node.presenceContext,
      { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === r) return;
    if (t && r === !1) {
      if (this.isExitComplete) {
        const { initial: s, custom: a } = this.node.getProps();
        if (typeof s == "string") {
          const l = Ir(this.node, s, a);
          if (l) {
            const { transition: u, transitionEnd: c, ...d } = l;
            for (const f in d)
              (o = this.node.getValue(f)) == null || o.jump(d[f]);
          }
        }
        this.node.animationState.reset(),
          this.node.animationState.animateChanges();
      } else this.node.animationState.setActive("exit", !1);
      this.isExitComplete = !1;
      return;
    }
    const i = this.node.animationState.setActive("exit", !t);
    n &&
      !t &&
      i.then(() => {
        (this.isExitComplete = !0), n(this.id);
      });
  }
  mount() {
    const { register: t, onExitComplete: n } = this.node.presenceContext || {};
    n && n(this.id), t && (this.unmount = t(this.id));
  }
  unmount() {}
}
const vj = { animation: { Feature: mj }, exit: { Feature: yj } };
function vs(e) {
  return { point: { x: e.pageX, y: e.pageY } };
}
const xj = (e) => (t) => Qf(t) && e(t, vs(t));
function Mo(e, t, n, r) {
  return rs(e, t, xj(n), r);
}
const e1 = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  ag = (e, t) => Math.abs(e - t);
function wj(e, t) {
  const n = ag(e.x, t.x),
    r = ag(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
const lg = new Set(["auto", "scroll"]);
class t1 {
  constructor(
    t,
    n,
    {
      transformPagePoint: r,
      contextWindow: i = window,
      dragSnapToOrigin: o = !1,
      distanceThreshold: s = 3,
      element: a,
    } = {}
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.lastRawMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.scrollPositions = new Map()),
      (this.removeScrollListeners = null),
      (this.onElementScroll = (h) => {
        this.handleScroll(h.target);
      }),
      (this.onWindowScroll = () => {
        this.handleScroll(window);
      }),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        this.lastRawMoveEventInfo &&
          (this.lastMoveEventInfo = Gs(
            this.lastRawMoveEventInfo,
            this.transformPagePoint
          ));
        const h = Du(this.lastMoveEventInfo, this.history),
          x = this.startEvent !== null,
          y = wj(h.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
        if (!x && !y) return;
        const { point: w } = h,
          { timestamp: g } = Re;
        this.history.push({ ...w, timestamp: g });
        const { onStart: m, onMove: v } = this.handlers;
        x ||
          (m && m(this.lastMoveEvent, h),
          (this.startEvent = this.lastMoveEvent)),
          v && v(this.lastMoveEvent, h);
      }),
      (this.handlePointerMove = (h, x) => {
        (this.lastMoveEvent = h),
          (this.lastRawMoveEventInfo = x),
          (this.lastMoveEventInfo = Gs(x, this.transformPagePoint)),
          ie.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (h, x) => {
        this.end();
        const { onEnd: y, onSessionEnd: w, resumeAnimation: g } = this.handlers;
        if (
          ((this.dragSnapToOrigin || !this.startEvent) && g && g(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const m = Du(
          h.type === "pointercancel"
            ? this.lastMoveEventInfo
            : Gs(x, this.transformPagePoint),
          this.history
        );
        this.startEvent && y && y(h, m), w && w(h, m);
      }),
      !Qf(t))
    )
      return;
    (this.dragSnapToOrigin = o),
      (this.handlers = n),
      (this.transformPagePoint = r),
      (this.distanceThreshold = s),
      (this.contextWindow = i || window);
    const l = vs(t),
      u = Gs(l, this.transformPagePoint),
      { point: c } = u,
      { timestamp: d } = Re;
    this.history = [{ ...c, timestamp: d }];
    const { onSessionStart: f } = n;
    f && f(t, Du(u, this.history)),
      (this.removeListeners = ms(
        Mo(this.contextWindow, "pointermove", this.handlePointerMove),
        Mo(this.contextWindow, "pointerup", this.handlePointerUp),
        Mo(this.contextWindow, "pointercancel", this.handlePointerUp)
      )),
      a && this.startScrollTracking(a);
  }
  startScrollTracking(t) {
    let n = t.parentElement;
    for (; n; ) {
      const r = getComputedStyle(n);
      (lg.has(r.overflowX) || lg.has(r.overflowY)) &&
        this.scrollPositions.set(n, { x: n.scrollLeft, y: n.scrollTop }),
        (n = n.parentElement);
    }
    this.scrollPositions.set(window, { x: window.scrollX, y: window.scrollY }),
      window.addEventListener("scroll", this.onElementScroll, { capture: !0 }),
      window.addEventListener("scroll", this.onWindowScroll),
      (this.removeScrollListeners = () => {
        window.removeEventListener("scroll", this.onElementScroll, {
          capture: !0,
        }),
          window.removeEventListener("scroll", this.onWindowScroll);
      });
  }
  handleScroll(t) {
    const n = this.scrollPositions.get(t);
    if (!n) return;
    const r = t === window,
      i = r
        ? { x: window.scrollX, y: window.scrollY }
        : { x: t.scrollLeft, y: t.scrollTop },
      o = { x: i.x - n.x, y: i.y - n.y };
    (o.x === 0 && o.y === 0) ||
      (r
        ? this.lastMoveEventInfo &&
          ((this.lastMoveEventInfo.point.x += o.x),
          (this.lastMoveEventInfo.point.y += o.y))
        : this.history.length > 0 &&
          ((this.history[0].x -= o.x), (this.history[0].y -= o.y)),
      this.scrollPositions.set(t, i),
      ie.update(this.updatePoint, !0));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(),
      this.removeScrollListeners && this.removeScrollListeners(),
      this.scrollPositions.clear(),
      lr(this.updatePoint);
  }
}
function Gs(e, t) {
  return t ? { point: t(e.point) } : e;
}
function ug(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Du({ point: e }, t) {
  return {
    point: e,
    delta: ug(e, n1(t)),
    offset: ug(e, Sj(t)),
    velocity: bj(t, 0.1),
  };
}
function Sj(e) {
  return e[0];
}
function n1(e) {
  return e[e.length - 1];
}
function bj(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const i = n1(e);
  for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > nt(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  r === e[0] &&
    e.length > 2 &&
    i.timestamp - r.timestamp > nt(t) * 2 &&
    (r = e[1]);
  const o = xt(i.timestamp - r.timestamp);
  if (o === 0) return { x: 0, y: 0 };
  const s = { x: (i.x - r.x) / o, y: (i.y - r.y) / o };
  return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s;
}
function Ej(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? le(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? le(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function cg(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function Cj(e, { top: t, left: n, bottom: r, right: i }) {
  return { x: cg(e.x, n, i), y: cg(e.y, t, r) };
}
function dg(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function Tj(e, t) {
  return { x: dg(e.x, t.x), y: dg(e.y, t.y) };
}
function Pj(e, t) {
  let n = 0.5;
  const r = Ke(e),
    i = Ke(t);
  return (
    i > r
      ? (n = es(t.min, t.max - r, e.min))
      : r > i && (n = es(e.min, e.max - i, t.min)),
    on(0, 1, n)
  );
}
function kj(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
const md = 0.35;
function Nj(e = md) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = md),
    { x: fg(e, "left", "right"), y: fg(e, "top", "bottom") }
  );
}
function fg(e, t, n) {
  return { min: hg(e, t), max: hg(e, n) };
}
function hg(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const Aj = new WeakMap();
class Rj {
  constructor(t) {
    (this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = Ee()),
      (this.latestPointerEvent = null),
      (this.latestPanInfo = null),
      (this.visualElement = t);
  }
  start(t, { snapToCursor: n = !1, distanceThreshold: r } = {}) {
    const { presenceContext: i } = this.visualElement;
    if (i && i.isPresent === !1) return;
    const o = (d) => {
        n && this.snapToCursor(vs(d).point), this.stopAnimation();
      },
      s = (d, f) => {
        const { drag: h, dragPropagation: x, onDragStart: y } = this.getProps();
        if (
          h &&
          !x &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = lA(h)),
          !this.openDragLock)
        )
          return;
        (this.latestPointerEvent = d),
          (this.latestPanInfo = f),
          (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          Kt((g) => {
            let m = this.getAxisMotionValue(g).get() || 0;
            if (nn.test(m)) {
              const { projection: v } = this.visualElement;
              if (v && v.layout) {
                const b = v.layout.layoutBox[g];
                b && (m = Ke(b) * (parseFloat(m) / 100));
              }
            }
            this.originPoint[g] = m;
          }),
          y && ie.update(() => y(d, f), !1, !0),
          sd(this.visualElement, "transform");
        const { animationState: w } = this.visualElement;
        w && w.setActive("whileDrag", !0);
      },
      a = (d, f) => {
        (this.latestPointerEvent = d), (this.latestPanInfo = f);
        const {
          dragPropagation: h,
          dragDirectionLock: x,
          onDirectionLock: y,
          onDrag: w,
        } = this.getProps();
        if (!h && !this.openDragLock) return;
        const { offset: g } = f;
        if (x && this.currentDirection === null) {
          (this.currentDirection = Mj(g)),
            this.currentDirection !== null && y && y(this.currentDirection);
          return;
        }
        this.updateAxis("x", f.point, g),
          this.updateAxis("y", f.point, g),
          this.visualElement.render(),
          w && ie.update(() => w(d, f), !1, !0);
      },
      l = (d, f) => {
        (this.latestPointerEvent = d),
          (this.latestPanInfo = f),
          this.stop(d, f),
          (this.latestPointerEvent = null),
          (this.latestPanInfo = null);
      },
      u = () => {
        const { dragSnapToOrigin: d } = this.getProps();
        (d || this.constraints) && this.startAnimation({ x: 0, y: 0 });
      },
      { dragSnapToOrigin: c } = this.getProps();
    this.panSession = new t1(
      t,
      {
        onSessionStart: o,
        onStart: s,
        onMove: a,
        onSessionEnd: l,
        resumeAnimation: u,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: c,
        distanceThreshold: r,
        contextWindow: e1(this.visualElement),
        element: this.visualElement.current,
      }
    );
  }
  stop(t, n) {
    const r = t || this.latestPointerEvent,
      i = n || this.latestPanInfo,
      o = this.isDragging;
    if ((this.cancel(), !o || !i || !r)) return;
    const { velocity: s } = i;
    this.startAnimation(s);
    const { onDragEnd: a } = this.getProps();
    a && ie.postRender(() => a(r, i));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1), this.endPanSession();
    const { dragPropagation: r } = this.getProps();
    !r &&
      this.openDragLock &&
      (this.openDragLock(), (this.openDragLock = null)),
      n && n.setActive("whileDrag", !1);
  }
  endPanSession() {
    this.panSession && this.panSession.end(), (this.panSession = void 0);
  }
  updateAxis(t, n, r) {
    const { drag: i } = this.getProps();
    if (!r || !Qs(t, i, this.currentDirection)) return;
    const o = this.getAxisMotionValue(t);
    let s = this.originPoint[t] + r[t];
    this.constraints &&
      this.constraints[t] &&
      (s = Ej(s, this.constraints[t], this.elastic[t])),
      o.set(s);
  }
  resolveConstraints() {
    var o;
    const { dragConstraints: t, dragElastic: n } = this.getProps(),
      r =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (o = this.visualElement.projection) == null
          ? void 0
          : o.layout,
      i = this.constraints;
    t && Jr(t)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : t && r
      ? (this.constraints = Cj(r.layoutBox, t))
      : (this.constraints = !1),
      (this.elastic = Nj(n)),
      i !== this.constraints &&
        !Jr(t) &&
        r &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        Kt((s) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(s) &&
            (this.constraints[s] = kj(r.layoutBox[s], this.constraints[s]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !Jr(t)) return !1;
    const r = t.current;
    Bi(
      r !== null,
      "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.",
      "drag-constraints-ref"
    );
    const { projection: i } = this.visualElement;
    if (!i || !i.layout) return !1;
    const o = FA(r, i.root, this.visualElement.getTransformPagePoint());
    let s = Tj(i.layout.layoutBox, o);
    if (n) {
      const a = n(LA(s));
      (this.hasMutatedConstraints = !!a), a && (s = Ew(a));
    }
    return s;
  }
  startAnimation(t) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: i,
        dragTransition: o,
        dragSnapToOrigin: s,
        onDragTransitionEnd: a,
      } = this.getProps(),
      l = this.constraints || {},
      u = Kt((c) => {
        if (!Qs(c, n, this.currentDirection)) return;
        let d = (l && l[c]) || {};
        (s === !0 || s === c) && (d = { min: 0, max: 0 });
        const f = i ? 200 : 1e6,
          h = i ? 40 : 1e7,
          x = {
            type: "inertia",
            velocity: r ? t[c] : 0,
            bounceStiffness: f,
            bounceDamping: h,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...o,
            ...d,
          };
        return this.startAxisValueAnimation(c, x);
      });
    return Promise.all(u).then(a);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return (
      sd(this.visualElement, t), r.start(Uf(t, r, 0, n, this.visualElement, !1))
    );
  }
  stopAnimation() {
    Kt((t) => this.getAxisMotionValue(t).stop());
  }
  getAxisMotionValue(t) {
    const n = `_drag${t.toUpperCase()}`,
      r = this.visualElement.getProps(),
      i = r[n];
    return (
      i ||
      this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    );
  }
  snapToCursor(t) {
    Kt((n) => {
      const { drag: r } = this.getProps();
      if (!Qs(n, r, this.currentDirection)) return;
      const { projection: i } = this.visualElement,
        o = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: s, max: a } = i.layout.layoutBox[n],
          l = o.get() || 0;
        o.set(t[n] - le(s, a, 0.5) + l);
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!Jr(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    Kt((s) => {
      const a = this.getAxisMotionValue(s);
      if (a && this.constraints !== !1) {
        const l = a.get();
        i[s] = Pj({ min: l, max: l }, this.constraints[s]);
      }
    });
    const { transformTemplate: o } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = o ? o({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      (this.constraints = !1),
      this.resolveConstraints(),
      Kt((s) => {
        if (!Qs(s, t, null)) return;
        const a = this.getAxisMotionValue(s),
          { min: l, max: u } = this.constraints[s];
        a.set(le(l, u, i[s]));
      }),
      this.visualElement.render();
  }
  addListeners() {
    if (!this.visualElement.current) return;
    Aj.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = Mo(t, "pointerdown", (u) => {
        const { drag: c, dragListener: d = !0 } = this.getProps(),
          f = u.target,
          h = f !== t && pA(f);
        c && d && !h && this.start(u);
      });
    let r;
    const i = () => {
        const { dragConstraints: u } = this.getProps();
        Jr(u) &&
          u.current &&
          ((this.constraints = this.resolveRefConstraints()),
          r ||
            (r = jj(t, u.current, () =>
              this.scalePositionWithinConstraints()
            )));
      },
      { projection: o } = this.visualElement,
      s = o.addEventListener("measure", i);
    o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()),
      ie.read(i);
    const a = rs(window, "resize", () => this.scalePositionWithinConstraints()),
      l = o.addEventListener(
        "didUpdate",
        ({ delta: u, hasLayoutChanged: c }) => {
          this.isDragging &&
            c &&
            (Kt((d) => {
              const f = this.getAxisMotionValue(d);
              f &&
                ((this.originPoint[d] += u[d].translate),
                f.set(f.get() + u[d].translate));
            }),
            this.visualElement.render());
        }
      );
    return () => {
      a(), n(), s(), l && l(), r && r();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: i = !1,
        dragConstraints: o = !1,
        dragElastic: s = md,
        dragMomentum: a = !0,
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: i,
      dragConstraints: o,
      dragElastic: s,
      dragMomentum: a,
    };
  }
}
function pg(e) {
  let t = !0;
  return () => {
    if (t) {
      t = !1;
      return;
    }
    e();
  };
}
function jj(e, t, n) {
  const r = Em(e, pg(n)),
    i = Em(t, pg(n));
  return () => {
    r(), i();
  };
}
function Qs(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function Mj(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n;
}
class Dj extends pr {
  constructor(t) {
    super(t),
      (this.removeGroupControls = St),
      (this.removeListeners = St),
      (this.controls = new Rj(t));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || St);
  }
  update() {
    const { dragControls: t } = this.node.getProps(),
      { dragControls: n } = this.node.prevProps || {};
    t !== n &&
      (this.removeGroupControls(),
      t && (this.removeGroupControls = t.subscribe(this.controls)));
  }
  unmount() {
    this.removeGroupControls(),
      this.removeListeners(),
      this.controls.isDragging || this.controls.endPanSession();
  }
}
const Lu = (e) => (t, n) => {
  e && ie.update(() => e(t, n), !1, !0);
};
class Lj extends pr {
  constructor() {
    super(...arguments), (this.removePointerDownListener = St);
  }
  onPointerDown(t) {
    this.session = new t1(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: e1(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: n,
      onPan: r,
      onPanEnd: i,
    } = this.node.getProps();
    return {
      onSessionStart: Lu(t),
      onStart: Lu(n),
      onMove: Lu(r),
      onEnd: (o, s) => {
        delete this.session, i && ie.postRender(() => i(o, s));
      },
    };
  }
  mount() {
    this.removePointerDownListener = Mo(this.node.current, "pointerdown", (t) =>
      this.onPointerDown(t)
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
let Ou = !1;
class Oj extends S.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
        layoutId: i,
      } = this.props,
      { projection: o } = t;
    o &&
      (n.group && n.group.add(o),
      r && r.register && i && r.register(o),
      Ou && o.root.didUpdate(),
      o.addEventListener("animationComplete", () => {
        this.safeToRemove();
      }),
      o.setOptions({
        ...o.options,
        layoutDependency: this.props.layoutDependency,
        onExitComplete: () => this.safeToRemove(),
      })),
      (ga.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: n,
        visualElement: r,
        drag: i,
        isPresent: o,
      } = this.props,
      { projection: s } = r;
    return (
      s &&
        ((s.isPresent = o),
        t.layoutDependency !== n &&
          s.setOptions({ ...s.options, layoutDependency: n }),
        (Ou = !0),
        i || t.layoutDependency !== n || n === void 0 || t.isPresent !== o
          ? s.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== o &&
          (o
            ? s.promote()
            : s.relegate() ||
              ie.postRender(() => {
                const a = s.getStack();
                (!a || !a.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { visualElement: t, layoutAnchor: n } = this.props,
      { projection: r } = t;
    r &&
      ((r.options.layoutAnchor = n),
      r.root.didUpdate(),
      Gf.postRender(() => {
        !r.currentAnimation && r.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
      } = this.props,
      { projection: i } = t;
    (Ou = !0),
      i &&
        (i.scheduleCheckAfterUnmount(),
        n && n.group && n.group.remove(i),
        r && r.deregister && r.deregister(i));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function r1(e) {
  const [t, n] = $R(),
    r = S.useContext(vx);
  return p.jsx(Oj, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: S.useContext(Zw),
    isPresent: t,
    safeToRemove: n,
  });
}
const Ij = {
  pan: { Feature: Lj },
  drag: { Feature: Dj, ProjectionNode: Ww, MeasureLayout: r1 },
};
function mg(e, t, n) {
  const { props: r } = e;
  e.animationState &&
    r.whileHover &&
    e.animationState.setActive("whileHover", n === "Start");
  const i = "onHover" + n,
    o = r[i];
  o && ie.postRender(() => o(t, vs(t)));
}
class Fj extends pr {
  mount() {
    const { current: t } = this.node;
    t &&
      (this.unmount = cA(
        t,
        (n, r) => (mg(this.node, r, "Start"), (i) => mg(this.node, i, "End"))
      ));
  }
  unmount() {}
}
class Vj extends pr {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = ms(
      rs(this.node.current, "focus", () => this.onFocus()),
      rs(this.node.current, "blur", () => this.onBlur())
    );
  }
  unmount() {}
}
function gg(e, t, n) {
  const { props: r } = e;
  if (e.current instanceof HTMLButtonElement && e.current.disabled) return;
  e.animationState &&
    r.whileTap &&
    e.animationState.setActive("whileTap", n === "Start");
  const i = "onTap" + (n === "End" ? "" : n),
    o = r[i];
  o && ie.postRender(() => o(t, vs(t)));
}
class _j extends pr {
  mount() {
    const { current: t } = this.node;
    if (!t) return;
    const { globalTapTarget: n, propagate: r } = this.node.props;
    this.unmount = gA(
      t,
      (i, o) => (
        gg(this.node, o, "Start"),
        (s, { success: a }) => gg(this.node, s, a ? "End" : "Cancel")
      ),
      {
        useGlobalTarget: n,
        stopPropagation: (r == null ? void 0 : r.tap) === !1,
      }
    );
  }
  unmount() {}
}
const gd = new WeakMap(),
  Iu = new WeakMap(),
  zj = (e) => {
    const t = gd.get(e.target);
    t && t(e);
  },
  Bj = (e) => {
    e.forEach(zj);
  };
function $j({ root: e, ...t }) {
  const n = e || document;
  Iu.has(n) || Iu.set(n, {});
  const r = Iu.get(n),
    i = JSON.stringify(t);
  return r[i] || (r[i] = new IntersectionObserver(Bj, { root: e, ...t })), r[i];
}
function Uj(e, t, n) {
  const r = $j(t);
  return (
    gd.set(e, n),
    r.observe(e),
    () => {
      gd.delete(e), r.unobserve(e);
    }
  );
}
const Wj = { some: 0, all: 1 };
class Hj extends pr {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    var l;
    (l = this.stopObserver) == null || l.call(this);
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: i = "some", once: o } = t,
      s = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof i == "number" ? i : Wj[i],
      },
      a = (u) => {
        const { isIntersecting: c } = u;
        if (
          this.isInView === c ||
          ((this.isInView = c), o && !c && this.hasEnteredView)
        )
          return;
        c && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", c);
        const { onViewportEnter: d, onViewportLeave: f } = this.node.getProps(),
          h = c ? d : f;
        h && h(u);
      };
    this.stopObserver = Uj(this.node.current, s, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(Kj(t, n)) && this.startObserver();
  }
  unmount() {
    var t;
    (t = this.stopObserver) == null || t.call(this),
      (this.hasEnteredView = !1),
      (this.isInView = !1);
  }
}
function Kj({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const Gj = {
    inView: { Feature: Hj },
    tap: { Feature: _j },
    focus: { Feature: Vj },
    hover: { Feature: Fj },
  },
  Qj = { layout: { ProjectionNode: Ww, MeasureLayout: r1 } },
  Yj = { ...vj, ...Gj, ...Ij, ...Qj },
  ve = hj(Yj, pj),
  Xj = "/assets/peace-frog-meditate-DSdQiRVr.jpeg",
  i1 = "/assets/psychedelic-bg-BmMlMf1E.jpg",
  ee = ({ children: e, className: t = "", delay: n = 0, duration: r = 5 }) =>
    p.jsx(ve.div, {
      className: `absolute pointer-events-none select-none ${t}`,
      animate: { y: [0, -15, 0], rotate: [0, 8, -5, 0] },
      transition: { duration: r, repeat: 1 / 0, delay: n, ease: "easeInOut" },
      children: e,
    }),
  ct = ({ size: e = 60, color: t = "currentColor", className: n = "" }) =>
    p.jsxs("svg", {
      width: e,
      height: e,
      viewBox: "0 0 60 60",
      className: n,
      children: [
        p.jsx("circle", {
          cx: "30",
          cy: "30",
          r: "27",
          fill: "none",
          stroke: t,
          strokeWidth: "4",
        }),
        p.jsx("line", {
          x1: "30",
          y1: "3",
          x2: "30",
          y2: "57",
          stroke: t,
          strokeWidth: "4",
        }),
        p.jsx("line", {
          x1: "30",
          y1: "30",
          x2: "11",
          y2: "49",
          stroke: t,
          strokeWidth: "4",
        }),
        p.jsx("line", {
          x1: "30",
          y1: "30",
          x2: "49",
          y2: "49",
          stroke: t,
          strokeWidth: "4",
        }),
      ],
    }),
  ze = ({ size: e = 50, className: t = "", style: n }) =>
    p.jsxs("svg", {
      width: e,
      height: e,
      viewBox: "0 0 50 50",
      className: t,
      style: n,
      children: [
        [0, 60, 120, 180, 240, 300].map((r) =>
          p.jsx(
            "ellipse",
            {
              cx: "25",
              cy: "25",
              rx: "8",
              ry: "14",
              fill: "currentColor",
              opacity: "0.8",
              transform: `rotate(${r} 25 25)`,
            },
            r
          )
        ),
        p.jsx("circle", {
          cx: "25",
          cy: "25",
          r: "6",
          fill: "hsl(45 95% 55%)",
        }),
      ],
    }),
  ur = ({ width: e = 120, className: t = "" }) =>
    p.jsx("svg", {
      width: e,
      height: e * 0.5,
      viewBox: "0 0 120 60",
      className: t,
      children: [
        "#e85555",
        "#e8923a",
        "#e8d44a",
        "#5ab85a",
        "#4a8ae8",
        "#8a4ae8",
      ].map((n, r) =>
        p.jsx(
          "path",
          {
            d: `M ${10 + r * 3},55 A ${50 - r * 3},${50 - r * 3} 0 0 1 ${
              110 - r * 3
            },55`,
            fill: "none",
            stroke: n,
            strokeWidth: "4",
            opacity: "0.9",
          },
          r
        )
      ),
    }),
  cr = ({ size: e = 40, className: t = "" }) =>
    p.jsxs("svg", {
      width: e,
      height: e,
      viewBox: "0 0 40 40",
      className: t,
      children: [
        p.jsx("circle", {
          cx: "20",
          cy: "20",
          r: "18",
          fill: "hsl(48 100% 65%)",
          stroke: "hsl(30 30% 35%)",
          strokeWidth: "2",
        }),
        p.jsx("circle", {
          cx: "14",
          cy: "16",
          r: "2.5",
          fill: "hsl(30 30% 25%)",
        }),
        p.jsx("circle", {
          cx: "26",
          cy: "16",
          r: "2.5",
          fill: "hsl(30 30% 25%)",
        }),
        p.jsx("path", {
          d: "M12,24 Q20,32 28,24",
          fill: "none",
          stroke: "hsl(30 30% 25%)",
          strokeWidth: "2.5",
          strokeLinecap: "round",
        }),
      ],
    }),
  Wi = ({ size: e = 45, className: t = "" }) =>
    p.jsxs("svg", {
      width: e,
      height: e,
      viewBox: "0 0 45 45",
      className: t,
      children: [
        p.jsx("ellipse", {
          cx: "15",
          cy: "18",
          rx: "12",
          ry: "10",
          fill: "hsl(25 90% 55%)",
          opacity: "0.8",
          transform: "rotate(-15 15 18)",
        }),
        p.jsx("ellipse", {
          cx: "30",
          cy: "18",
          rx: "12",
          ry: "10",
          fill: "hsl(330 80% 60%)",
          opacity: "0.8",
          transform: "rotate(15 30 18)",
        }),
        p.jsx("ellipse", {
          cx: "17",
          cy: "28",
          rx: "8",
          ry: "6",
          fill: "hsl(45 95% 55%)",
          opacity: "0.7",
          transform: "rotate(-10 17 28)",
        }),
        p.jsx("ellipse", {
          cx: "28",
          cy: "28",
          rx: "8",
          ry: "6",
          fill: "hsl(140 50% 45%)",
          opacity: "0.7",
          transform: "rotate(10 28 28)",
        }),
        p.jsx("line", {
          x1: "22.5",
          y1: "10",
          x2: "22.5",
          y2: "38",
          stroke: "hsl(30 30% 35%)",
          strokeWidth: "2",
        }),
      ],
    }),
  is = ({ size: e = 30, className: t = "" }) =>
    p.jsx("svg", {
      width: e,
      height: e,
      viewBox: "0 0 30 30",
      className: t,
      children: p.jsx("polygon", {
        points:
          "15,2 18.5,11 28,11 20.5,17 23,27 15,21 7,27 9.5,17 2,11 11.5,11",
        fill: "hsl(48 100% 65%)",
        stroke: "hsl(30 30% 35%)",
        strokeWidth: "1",
      }),
    }),
  qj = () =>
    p.jsxs(p.Fragment, {
      children: [
        p.jsx(ee, {
          className: "top-[5%] left-[3%]",
          delay: 0,
          duration: 6,
          children: p.jsx(ze, { size: 55, className: "text-rainbow-red" }),
        }),
        p.jsx(ee, {
          className: "top-[3%] left-[25%]",
          delay: 1.5,
          duration: 5,
          children: p.jsx(ct, {
            size: 45,
            color: "hsl(280 60% 55%)",
            className: "opacity-70",
          }),
        }),
        p.jsx(ee, {
          className: "top-[8%] right-[20%]",
          delay: 0.8,
          duration: 7,
          children: p.jsx(ur, { width: 100 }),
        }),
        p.jsx(ee, {
          className: "top-[4%] right-[4%]",
          delay: 2,
          duration: 5.5,
          children: p.jsx(cr, { size: 50 }),
        }),
        p.jsx(ee, {
          className: "top-[25%] left-[2%]",
          delay: 0.3,
          duration: 6.5,
          children: p.jsx(Wi, { size: 55 }),
        }),
        p.jsx(ee, {
          className: "top-[35%] right-[3%]",
          delay: 1,
          duration: 5,
          children: p.jsx(ze, { size: 45, className: "text-rainbow-orange" }),
        }),
        p.jsx(ee, {
          className: "top-[20%] right-[12%]",
          delay: 2.5,
          duration: 6,
          children: p.jsx(is, { size: 35 }),
        }),
        p.jsx(ee, {
          className: "top-[40%] left-[8%]",
          delay: 1.8,
          duration: 4.5,
          children: p.jsx(ct, {
            size: 35,
            color: "hsl(140 50% 45%)",
            className: "opacity-60",
          }),
        }),
        p.jsx(ee, {
          className: "bottom-[20%] left-[5%]",
          delay: 0.6,
          duration: 5.5,
          children: p.jsx(ze, { size: 40, className: "text-hot-pink" }),
        }),
        p.jsx(ee, {
          className: "bottom-[15%] right-[8%]",
          delay: 1.3,
          duration: 6,
          children: p.jsx(Wi, { size: 40 }),
        }),
        p.jsx(ee, {
          className: "bottom-[25%] right-[20%]",
          delay: 2.2,
          duration: 5,
          children: p.jsx(cr, { size: 35 }),
        }),
        p.jsx(ee, {
          className: "bottom-[8%] left-[20%]",
          delay: 0.9,
          duration: 7,
          children: p.jsx(is, { size: 28 }),
        }),
        p.jsx(ee, {
          className: "bottom-[30%] left-[15%]",
          delay: 1.7,
          duration: 5.8,
          children: p.jsx(ur, { width: 80 }),
        }),
        p.jsx(ee, {
          className: "bottom-[5%] right-[15%]",
          delay: 2.8,
          duration: 6.2,
          children: p.jsx(ct, {
            size: 40,
            color: "hsl(210 70% 55%)",
            className: "opacity-50",
          }),
        }),
      ],
    }),
  Zj = () =>
    p.jsxs(p.Fragment, {
      children: [
        p.jsx(ee, {
          className: "top-[5%] right-[5%]",
          delay: 0.5,
          duration: 6,
          children: p.jsx(ze, { size: 50, className: "text-rainbow-yellow" }),
        }),
        p.jsx(ee, {
          className: "top-[10%] left-[5%]",
          delay: 1.2,
          duration: 5.5,
          children: p.jsx(Wi, { size: 50 }),
        }),
        p.jsx(ee, {
          className: "bottom-[10%] right-[8%]",
          delay: 0.8,
          duration: 6.5,
          children: p.jsx(ct, { size: 40, color: "hsl(45 95% 55%)" }),
        }),
        p.jsx(ee, {
          className: "bottom-[5%] left-[10%]",
          delay: 2,
          duration: 5,
          children: p.jsx(cr, { size: 40 }),
        }),
        p.jsx(ee, {
          className: "top-[50%] right-[2%]",
          delay: 1.5,
          duration: 7,
          children: p.jsx(is, { size: 30 }),
        }),
        p.jsx(ee, {
          className: "top-[40%] left-[2%]",
          delay: 0.3,
          duration: 5.8,
          children: p.jsx(ze, { size: 35, className: "text-rainbow-green" }),
        }),
      ],
    }),
  Jj = () =>
    p.jsxs(p.Fragment, {
      children: [
        p.jsx(ee, {
          className: "top-[5%] left-[5%]",
          delay: 0.7,
          duration: 6,
          children: p.jsx(ur, { width: 90 }),
        }),
        p.jsx(ee, {
          className: "top-[8%] right-[6%]",
          delay: 1.5,
          duration: 5.5,
          children: p.jsx(ze, { size: 45, className: "text-sky-blue" }),
        }),
        p.jsx(ee, {
          className: "bottom-[8%] left-[8%]",
          delay: 0.4,
          duration: 6.5,
          children: p.jsx(Wi, { size: 45 }),
        }),
        p.jsx(ee, {
          className: "bottom-[15%] right-[5%]",
          delay: 2.2,
          duration: 5,
          children: p.jsx(cr, { size: 45 }),
        }),
        p.jsx(ee, {
          className: "top-[45%] left-[2%]",
          delay: 1,
          duration: 5.8,
          children: p.jsx(ct, { size: 38, color: "hsl(25 90% 55%)" }),
        }),
        p.jsx(ee, {
          className: "top-[30%] right-[3%]",
          delay: 1.8,
          duration: 6.2,
          children: p.jsx(is, { size: 32 }),
        }),
      ],
    }),
  eM = () =>
    p.jsxs(p.Fragment, {
      children: [
        p.jsx(ee, {
          className: "top-[5%] left-[5%]",
          delay: 0,
          duration: 5.5,
          children: p.jsx(ct, {
            size: 50,
            color: "hsl(45 95% 55%)",
            className: "opacity-60",
          }),
        }),
        p.jsx(ee, {
          className: "top-[10%] right-[8%]",
          delay: 1,
          duration: 6,
          children: p.jsx(ze, { size: 45, className: "text-rainbow-purple" }),
        }),
        p.jsx(ee, {
          className: "bottom-[10%] left-[8%]",
          delay: 1.5,
          duration: 5,
          children: p.jsx(ur, { width: 85 }),
        }),
        p.jsx(ee, {
          className: "bottom-[5%] right-[5%]",
          delay: 2,
          duration: 6.5,
          children: p.jsx(Wi, { size: 40 }),
        }),
        p.jsx(ee, {
          className: "top-[50%] right-[3%]",
          delay: 0.8,
          duration: 5.8,
          children: p.jsx(cr, { size: 38 }),
        }),
        p.jsx(ee, {
          className: "top-[40%] left-[3%]",
          delay: 2.5,
          duration: 6.2,
          children: p.jsx(is, { size: 35 }),
        }),
      ],
    }),
  tM = () =>
    p.jsxs("section", {
      className:
        "relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 py-20",
      children: [
        p.jsx("div", {
          className: "absolute inset-0 bg-cover bg-center opacity-20",
          style: { backgroundImage: `url(${i1})` },
        }),
        p.jsx("div", { className: "absolute inset-0 bg-groovy-gradient" }),
        p.jsx("div", {
          className: "absolute inset-0 peace-pattern-overlay opacity-40",
        }),
        p.jsx("div", {
          className:
            "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-spin-slow opacity-[0.06]",
          children: p.jsx(ct, { size: 600, color: "hsl(30 30% 35%)" }),
        }),
        p.jsx(qj, {}),
        p.jsx(ve.div, {
          className: "z-10 mb-2",
          initial: { opacity: 0, scale: 0.5 },
          animate: { opacity: 1, scale: 1 },
          transition: { duration: 1 },
          children: p.jsx(ur, { width: 180 }),
        }),
        p.jsx(ve.div, {
          className: "z-10 relative mb-0",
          initial: { opacity: 0, rotate: -8, x: -40 },
          animate: { opacity: 1, rotate: -4, x: -20 },
          transition: { duration: 0.8, type: "spring" },
          children: p.jsx("span", {
            className:
              "font-groovy text-3xl md:text-5xl text-warm-brown text-neon-glow",
            children: "Welcome to",
          }),
        }),
        p.jsxs(ve.div, {
          className: "z-10 relative mb-2",
          initial: { opacity: 0, scale: 0.5 },
          animate: { opacity: 1, scale: 1 },
          transition: {
            duration: 0.8,
            delay: 0.15,
            type: "spring",
            bounce: 0.4,
          },
          children: [
            p.jsx("h1", {
              className:
                "text-6xl md:text-[8rem] lg:text-[10rem] font-display leading-none text-outline-thick absolute top-1 left-1 opacity-20 select-none",
              "aria-hidden": "true",
              children: "PEACEFROG",
            }),
            p.jsx("h1", {
              className:
                "text-6xl md:text-[8rem] lg:text-[10rem] font-display leading-none text-rainbow-animate text-retro-shadow relative",
              children: "PEACEFROG",
            }),
          ],
        }),
        p.jsx(ve.div, {
          className: "z-10 relative mt-2",
          initial: { opacity: 0, y: 20, rotate: 3 },
          animate: { opacity: 1, y: 0, rotate: 2 },
          transition: { delay: 0.4 },
          children: p.jsx("div", {
            className:
              "bg-warm-brown px-6 py-2 rounded-sm shadow-retro inline-block",
            children: p.jsx("span", {
              className:
                "font-chunky text-lg md:text-xl tracking-[0.3em] text-primary uppercase",
              children: "$PEACE on Ethereum",
            }),
          }),
        }),
        p.jsx(ve.div, {
          className: "relative z-10 mt-10",
          initial: { opacity: 0, y: 60, rotate: 5 },
          animate: { opacity: 1, y: 0, rotate: -2 },
          transition: { duration: 1, delay: 0.3, type: "spring" },
          children: p.jsxs("div", {
            className: "relative",
            children: [
              p.jsx("div", {
                className:
                  "absolute -inset-6 bg-gradient-to-br from-rainbow-yellow/40 via-rainbow-orange/30 to-rainbow-red/20 rounded-[2rem] blur-2xl",
              }),
              p.jsxs("div", {
                className: "relative polaroid rounded-lg scrapbook-tilt-3",
                children: [
                  p.jsx("img", {
                    src: Xj,
                    alt: "Peace Frog meditating",
                    className: "w-64 md:w-80 lg:w-96 rounded-sm",
                    width: 384,
                    height: 384,
                  }),
                  p.jsx("p", {
                    className:
                      "font-groovy text-warm-brown text-center text-lg mt-2 -mb-6",
                    children: "feels good man ☮",
                  }),
                ],
              }),
              p.jsx("div", {
                className: "absolute -top-6 -right-6 animate-wiggle",
                children: p.jsx(cr, { size: 50 }),
              }),
              p.jsx("div", {
                className:
                  "absolute -bottom-4 -left-4 bg-accent text-accent-foreground font-chunky text-xs px-3 py-1 rounded-full shadow-groovy rotate-[-8deg] animate-bounce-gentle",
                children: "THE OG 🐸",
              }),
            ],
          }),
        }),
        p.jsxs(ve.div, {
          className: "z-10 mt-10 text-center max-w-2xl",
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { delay: 0.9 },
          children: [
            p.jsxs("p", {
              className: "leading-snug",
              children: [
                p.jsx("span", {
                  className: "font-chunky text-2xl md:text-4xl text-accent",
                  children: "War feels bad man.",
                }),
                p.jsx("br", {}),
                p.jsx("span", {
                  className:
                    "font-groovy text-2xl md:text-4xl text-secondary text-groovy-shadow",
                  children: "Peace feels good man!",
                }),
                p.jsx("span", { className: "text-3xl ml-2", children: "☮" }),
              ],
            }),
            p.jsx(ve.p, {
              className:
                "font-body text-base text-muted-foreground mt-4 max-w-lg mx-auto",
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { delay: 1.2 },
              children:
                "A symbolic reminder that humans have a long way to go — especially in these times where the world needs peaceful times to heal wounds.",
            }),
          ],
        }),
        p.jsxs(ve.div, {
          className:
            "flex gap-5 mt-10 z-10 flex-wrap justify-center items-center",
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 1.1 },
          children: [
            p.jsx("a", {
              href: "https://x.com/PeaceFrog_x",
              target: "_blank",
              rel: "noopener noreferrer",
              className:
                "bg-warm-brown text-primary font-chunky px-8 py-3 rounded-full text-lg shadow-retro hover:scale-110 hover:-rotate-3 transition-all duration-300 rotate-[-2deg]",
              children: "𝕏 Twitter",
            }),
            p.jsx("a", {
              href: "https://dexscreener.com/ethereum/0x9E59c6B9dBAA00685D934a614a14fc8FF0A002DB",
              target: "_blank",
              rel: "noopener noreferrer",
              className:
                "bg-secondary text-secondary-foreground font-chunky px-8 py-3 rounded-full text-lg shadow-retro hover:scale-110 hover:rotate-3 transition-all duration-300 rotate-[1deg]",
              children: "Chart",
            }),
            p.jsx("a", {
              href: "https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0x9E59c6B9dBAA00685D934a614a14fc8FF0A002DB",
              className:
                "bg-accent text-accent-foreground font-chunky px-10 py-4 rounded-full text-xl shadow-retro hover:scale-110 transition-all duration-300 animate-bounce-gentle border-4 border-rainbow-yellow",
              children: "Buy $PEACE 🐸",
            }),
          ],
        }),
        p.jsx("div", {
          className: "absolute bottom-0 left-0 right-0 h-16 wavy-divider",
        }),
      ],
    }),
  nM = ({ children: e, className: t = "" }) =>
    p.jsx("div", {
      className: `overflow-hidden whitespace-nowrap ${t}`,
      children: p.jsxs("div", {
        className: "inline-flex animate-marquee",
        children: [e, e],
      }),
    }),
  Fu = ({ variant: e = "default" }) => {
    const t = [
        "☮ PEACE",
        "✿ LOVE",
        "🐸 FROG",
        "☮ $PEACE",
        "✌ GROOVY",
        "❤ VIBES",
        "🌈 HARMONY",
        "🦋 FREEDOM",
        "🌻 FLOWER POWER",
      ],
      n =
        e === "groovy"
          ? "bg-gradient-to-r from-rainbow-orange via-rainbow-yellow to-rainbow-orange"
          : e === "rainbow"
          ? "bg-gradient-to-r from-rainbow-red via-rainbow-yellow via-rainbow-green to-rainbow-blue"
          : "bg-warm-brown",
      r =
        e === "groovy" || e === "rainbow" ? "text-foreground" : "text-primary";
    return p.jsx("div", {
      className: "relative",
      children: p.jsx(nM, {
        className: `${n} py-3 border-y-2 border-warm-brown/30`,
        children: t.map((i, o) =>
          p.jsx(
            "span",
            {
              className: `mx-8 text-lg font-chunky ${r} drop-shadow-sm`,
              children: i,
            },
            o
          )
        ),
      }),
    });
  },
  rM = "/assets/peace-frog-bird-BvJXINUK.jpeg",
  iM = "/assets/groovy-pattern-SZ3u5dLQ.jpg",
  oM = () =>
    p.jsxs("section", {
      className: "relative py-28 px-4 overflow-hidden",
      children: [
        p.jsx("div", {
          className: "absolute inset-0 bg-cover bg-center opacity-15",
          style: { backgroundImage: `url(${iM})` },
        }),
        p.jsx("div", { className: "absolute inset-0 bg-sunset-gradient" }),
        p.jsx("div", { className: "absolute inset-0 flower-pattern-overlay" }),
        p.jsx(Zj, {}),
        p.jsxs("div", {
          className: "max-w-6xl mx-auto relative z-10",
          children: [
            p.jsxs(ve.div, {
              className: "text-center mb-20",
              initial: { opacity: 0, y: 30 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: !0 },
              children: [
                p.jsx("span", {
                  className: "font-groovy text-2xl text-accent block mb-1",
                  children: "✿ The Beginning ✿",
                }),
                p.jsxs("div", {
                  className: "relative inline-block",
                  children: [
                    p.jsx("span", {
                      className:
                        "text-4xl md:text-7xl font-display text-outline absolute -top-2 -left-2 opacity-15 select-none",
                      "aria-hidden": "true",
                      children: "THE ORIGIN",
                    }),
                    p.jsx("h2", {
                      className:
                        "text-4xl md:text-7xl font-display text-rainbow-animate relative",
                      children: "THE ORIGIN",
                    }),
                  ],
                }),
                p.jsx("div", {
                  className:
                    "mt-3 inline-block bg-warm-brown px-5 py-1 rounded-sm rotate-[-1deg] shadow-groovy",
                  children: p.jsx("span", {
                    className:
                      "font-chunky text-sm tracking-[0.4em] text-primary uppercase",
                    children: "Est. 2004 by Matt Furie",
                  }),
                }),
              ],
            }),
            p.jsxs("div", {
              className: "relative",
              children: [
                p.jsx(ve.div, {
                  className:
                    "md:absolute md:left-0 md:top-0 md:w-[48%] z-20 mb-8 md:mb-0",
                  initial: { opacity: 0, x: -60, rotate: -8 },
                  whileInView: { opacity: 1, x: 0, rotate: -3 },
                  viewport: { once: !0 },
                  transition: { duration: 0.8, type: "spring" },
                  children: p.jsxs("div", {
                    className: "relative inline-block",
                    children: [
                      p.jsx("div", {
                        className:
                          "absolute -inset-4 bg-gradient-to-br from-rainbow-green/30 via-rainbow-blue/20 to-rainbow-purple/30 rounded-xl blur-lg",
                      }),
                      p.jsxs("div", {
                        className: "relative polaroid rounded-lg",
                        children: [
                          p.jsx("img", {
                            src: rM,
                            alt: "Peace Frog with bird — original Matt Furie artwork",
                            loading: "lazy",
                            width: 836,
                            height: 923,
                            className: "w-full max-w-sm rounded-sm",
                          }),
                          p.jsx("p", {
                            className:
                              "font-groovy text-warm-brown text-center mt-2 -mb-6 text-base",
                            children: "original artwork ✌",
                          }),
                        ],
                      }),
                      p.jsx("div", {
                        className:
                          "absolute -top-5 -right-5 bg-rainbow-yellow text-warm-brown font-chunky text-sm px-4 py-2 rounded-full shadow-groovy rotate-[15deg] animate-wiggle z-30",
                        children: "OG 2004",
                      }),
                      p.jsx("div", {
                        className: "absolute -bottom-3 -left-3",
                        children: p.jsx(ze, {
                          size: 40,
                          className: "text-accent animate-float",
                        }),
                      }),
                    ],
                  }),
                }),
                p.jsxs(ve.div, {
                  className: "md:ml-[42%] space-y-5 relative z-10",
                  initial: { opacity: 0, x: 60 },
                  whileInView: { opacity: 1, x: 0 },
                  viewport: { once: !0 },
                  transition: { duration: 0.8, delay: 0.15 },
                  children: [
                    p.jsx("div", {
                      className:
                        "relative bg-card/90 backdrop-blur-sm rounded-2xl p-7 border-groovy shadow-retro scrapbook-tilt-2 torn-bottom",
                      children: p.jsx("div", {
                        className: "relative tape-effect pt-2",
                        children: p.jsxs("p", {
                          className:
                            "font-groovy text-3xl md:text-4xl text-accent leading-snug",
                          children: [
                            "Before Pepe,",
                            p.jsx("br", {}),
                            p.jsx("span", {
                              className: "text-rainbow-animate",
                              children: "there was Peace Frog.",
                            }),
                            " 🐸",
                          ],
                        }),
                      }),
                    }),
                    p.jsxs("div", {
                      className:
                        "relative bg-gradient-to-br from-rainbow-yellow/15 via-rainbow-orange/10 to-card/80 backdrop-blur-sm rounded-2xl p-6 border-2 border-rainbow-yellow/40 shadow-float scrapbook-tilt-3 ml-4 md:ml-8",
                      children: [
                        p.jsx("div", {
                          className: "absolute -top-3 -right-3",
                          children: p.jsx(Wi, {
                            size: 35,
                            className: "animate-float",
                          }),
                        }),
                        p.jsx("p", {
                          className:
                            "font-display text-xl md:text-2xl text-rainbow-animate mb-3 leading-snug",
                          children: '"Flight of the Peace Frog"',
                        }),
                        p.jsxs("p", {
                          className:
                            "font-body text-lg text-foreground leading-relaxed",
                          children: [
                            "As said by Matt Furie himself, this was the cornerstone of Pepe's origin — becoming one of, if not",
                            p.jsx("span", {
                              className: "font-chunky text-accent",
                              children: " the most iconic art piece",
                            }),
                            " in his entire career.",
                          ],
                        }),
                      ],
                    }),
                    p.jsxs("div", {
                      className:
                        "bg-card/80 backdrop-blur-sm rounded-2xl p-6 border-2 border-rainbow-orange/40 shadow-float scrapbook-tilt-4",
                      children: [
                        p.jsxs("p", {
                          className:
                            "font-body text-lg text-foreground leading-relaxed",
                          children: [
                            "Matt Furie drew him in ",
                            p.jsx("span", {
                              className:
                                "font-chunky text-2xl text-accent inline-block rotate-[-2deg]",
                              children: "2004",
                            }),
                            ". The world was at war — Iraq, Afghanistan, a generation growing up under threat levels and uncertainty.",
                          ],
                        }),
                        p.jsx("p", {
                          className: "font-groovy text-xl text-secondary mt-3",
                          children:
                            "Peace Frog was the response. A quiet symbol in a loud time. ✿",
                        }),
                      ],
                    }),
                    p.jsxs("div", {
                      className:
                        "relative bg-card/80 backdrop-blur-sm rounded-2xl p-6 border-2 border-rainbow-green/40 shadow-float scrapbook-tilt-2",
                      children: [
                        p.jsx("div", {
                          className: "absolute -right-4 -top-4 opacity-30",
                          children: p.jsx(ct, {
                            size: 50,
                            color: "hsl(140 50% 45%)",
                          }),
                        }),
                        p.jsxs("p", {
                          className:
                            "font-body text-lg text-foreground leading-relaxed",
                          children: [
                            "Pepe came later. Same creator, same universe. Pepe became the",
                            p.jsx("span", {
                              className: "font-chunky text-rainbow-blue",
                              children: " most recognized meme",
                            }),
                            " on the internet and the most iconic memecoin ever launched.",
                          ],
                        }),
                        p.jsx("p", {
                          className: "font-chunky text-lg text-warm-brown mt-2",
                          children: "But Pepe didn't come from nowhere.",
                        }),
                      ],
                    }),
                    p.jsxs("div", {
                      className:
                        "bg-gradient-to-r from-rainbow-yellow/25 via-rainbow-orange/25 to-rainbow-red/20 rounded-2xl p-6 border-groovy shadow-neon scrapbook-tilt-3 ml-2",
                      children: [
                        p.jsxs("div", {
                          className:
                            "flex items-center justify-center gap-3 mb-2",
                          children: [
                            p.jsx(ze, { size: 25, className: "text-accent" }),
                            p.jsx(ur, { width: 80 }),
                            p.jsx(ze, {
                              size: 25,
                              className: "text-secondary",
                            }),
                          ],
                        }),
                        p.jsx("p", {
                          className:
                            "font-display text-2xl md:text-3xl text-secondary text-center text-groovy-shadow",
                          children: "☮ PEACE FROG IS THE ORIGIN ✿",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        p.jsx("div", {
          className:
            "absolute bottom-0 left-0 right-0 h-16 wavy-divider rotate-180",
        }),
      ],
    }),
  sM = "/assets/peace-frog-moon-DHsHONUZ.jpeg",
  aM = "/assets/night-meadow-bg-BaAj-e7f.jpg",
  lM = () =>
    p.jsxs("section", {
      className: "relative py-28 px-4 overflow-hidden",
      children: [
        p.jsx("div", {
          className: "absolute inset-0 bg-cover bg-center opacity-30",
          style: { backgroundImage: `url(${aM})` },
        }),
        p.jsx("div", {
          className:
            "absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/80",
        }),
        p.jsx("div", {
          className: "absolute inset-0 peace-pattern-overlay opacity-20",
        }),
        p.jsx(Jj, {}),
        p.jsxs("div", {
          className: "max-w-6xl mx-auto relative z-10",
          children: [
            p.jsxs(ve.div, {
              className: "text-center mb-20",
              initial: { opacity: 0, y: 30 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: !0 },
              children: [
                p.jsx("span", {
                  className:
                    "font-groovy text-2xl text-rainbow-purple block mb-1",
                  children: "🌙 The Moment 🌙",
                }),
                p.jsxs("div", {
                  className: "relative inline-block",
                  children: [
                    p.jsx("span", {
                      className:
                        "text-4xl md:text-7xl font-display text-outline absolute -top-2 left-2 opacity-15 select-none",
                      "aria-hidden": "true",
                      children: "THE SETUP",
                    }),
                    p.jsx("h2", {
                      className:
                        "text-4xl md:text-7xl font-display text-rainbow-animate relative",
                      children: "THE SETUP",
                    }),
                  ],
                }),
              ],
            }),
            p.jsxs("div", {
              className: "relative min-h-[600px]",
              children: [
                p.jsx(ve.div, {
                  className:
                    "md:absolute md:right-0 md:top-8 md:w-[45%] z-20 mb-10 md:mb-0",
                  initial: { opacity: 0, x: 60, rotate: 5 },
                  whileInView: { opacity: 1, x: 0, rotate: 3 },
                  viewport: { once: !0 },
                  transition: { duration: 0.8, type: "spring" },
                  children: p.jsxs("div", {
                    className: "relative inline-block",
                    children: [
                      p.jsx("div", {
                        className:
                          "absolute -inset-4 bg-gradient-to-br from-rainbow-blue/30 via-rainbow-purple/20 to-hot-pink/20 rounded-xl blur-lg",
                      }),
                      p.jsxs("div", {
                        className: "relative polaroid rounded-lg",
                        children: [
                          p.jsx("img", {
                            src: sM,
                            alt: "Peace Frog watching the moon",
                            loading: "lazy",
                            width: 1920,
                            height: 1080,
                            className: "w-full max-w-md rounded-sm",
                          }),
                          p.jsx("p", {
                            className:
                              "font-groovy text-warm-brown text-center mt-2 -mb-6 text-base",
                            children: "a unique & beautiful cosmic wonder 🌙",
                          }),
                        ],
                      }),
                      p.jsx("div", {
                        className:
                          "absolute -bottom-4 -left-4 bg-rainbow-purple text-accent-foreground font-chunky text-xs px-3 py-1 rounded-full shadow-groovy rotate-[-10deg] animate-wiggle",
                        children: "🌙 COSMIC",
                      }),
                      p.jsx("div", {
                        className: "absolute -top-4 -right-3",
                        children: p.jsx(cr, {
                          size: 40,
                          className: "animate-bounce-gentle",
                        }),
                      }),
                    ],
                  }),
                }),
                p.jsxs(ve.div, {
                  className: "md:w-[52%] space-y-5",
                  initial: { opacity: 0, x: -50 },
                  whileInView: { opacity: 1, x: 0 },
                  viewport: { once: !0 },
                  transition: { duration: 0.8 },
                  children: [
                    p.jsxs("div", {
                      className:
                        "relative bg-card/90 backdrop-blur-sm rounded-2xl p-7 border-groovy shadow-retro scrapbook-tilt-3 torn-bottom",
                      children: [
                        p.jsx("div", {
                          className:
                            "absolute -left-2 -top-2 text-7xl text-rainbow-yellow/50 font-display leading-none select-none",
                          "aria-hidden": "true",
                          children: '"',
                        }),
                        p.jsx("div", { className: "tape-effect" }),
                        p.jsx("p", {
                          className:
                            "font-groovy text-xl md:text-2xl text-accent leading-relaxed pt-4 pl-4",
                          children:
                            "Flight of the Peace Frog was the cornerstone of Pepe's origin",
                        }),
                        p.jsx("p", {
                          className:
                            "font-chunky text-sm text-muted-foreground mt-3 pl-4 tracking-widest uppercase",
                          children: "— Matt Furie",
                        }),
                        p.jsx("div", {
                          className:
                            "absolute -right-2 bottom-2 text-7xl text-rainbow-yellow/50 font-display leading-none select-none rotate-180",
                          "aria-hidden": "true",
                          children: '"',
                        }),
                      ],
                    }),
                    p.jsxs("div", {
                      className:
                        "relative bg-gradient-to-br from-rainbow-purple/15 via-rainbow-blue/10 to-card/80 backdrop-blur-sm rounded-2xl p-6 border-2 border-rainbow-purple/40 shadow-float scrapbook-tilt-2 ml-6",
                      children: [
                        p.jsx("div", {
                          className: "absolute top-3 right-3 opacity-30",
                          children: p.jsx(ct, {
                            size: 40,
                            color: "hsl(280 60% 55%)",
                          }),
                        }),
                        p.jsxs("p", {
                          className:
                            "font-body text-lg text-foreground leading-relaxed",
                          children: [
                            "Matt has said that frogs are ",
                            p.jsx("span", {
                              className:
                                "font-display text-2xl text-rainbow-animate inline-block rotate-[-1deg]",
                              children:
                                '"a unique and beautiful cosmic wonder."',
                            }),
                          ],
                        }),
                        p.jsx("p", {
                          className: "font-groovy text-lg text-secondary mt-3",
                          children: "Peacefrog is a symbolic reminder ✿",
                        }),
                      ],
                    }),
                    p.jsxs("div", {
                      className:
                        "bg-accent/15 backdrop-blur-sm rounded-2xl p-6 border-2 border-accent/40 shadow-float scrapbook-tilt-4",
                      children: [
                        p.jsxs("div", {
                          className: "flex items-center gap-4 mb-3",
                          children: [
                            p.jsx("span", {
                              className: "font-display text-3xl text-accent",
                              children: "WAR",
                            }),
                            p.jsx("div", {
                              className:
                                "h-[2px] flex-1 bg-gradient-to-r from-accent/60 to-transparent",
                            }),
                          ],
                        }),
                        p.jsx("p", {
                          className:
                            "font-body text-lg text-foreground leading-relaxed",
                          children:
                            "The world needs peaceful times to heal wounds. Gaza, Ukraine, Iran, tariffs — escalation everywhere.",
                        }),
                        p.jsx("p", {
                          className: "font-chunky text-lg text-warm-brown mt-2",
                          children:
                            "War had its run. The market tells you what it's paying attention to.",
                        }),
                      ],
                    }),
                    p.jsxs("div", {
                      className: "text-center py-4 scrapbook-tilt-3",
                      children: [
                        p.jsxs("div", {
                          className: "flex items-center justify-center gap-4",
                          children: [
                            p.jsx(ze, {
                              size: 30,
                              className: "text-accent animate-wiggle",
                            }),
                            p.jsxs("p", {
                              className:
                                "font-display text-2xl md:text-4xl text-foreground",
                              children: [
                                p.jsx("span", {
                                  className: "text-outline",
                                  children: "WAR",
                                }),
                                p.jsx("span", {
                                  className:
                                    "font-groovy text-xl text-muted-foreground mx-4",
                                  children: "→",
                                }),
                                p.jsx("span", {
                                  className: "text-rainbow-animate",
                                  children: "PEACE",
                                }),
                              ],
                            }),
                            p.jsx(ze, {
                              size: 30,
                              className: "text-secondary animate-wiggle",
                              style: { animationDelay: "0.5s" },
                            }),
                          ],
                        }),
                        p.jsx("p", {
                          className: "font-chunky text-lg text-secondary mt-2",
                          children: "Now the cycle completes ☮",
                        }),
                        p.jsx(ur, { width: 100, className: "mx-auto mt-2" }),
                      ],
                    }),
                    p.jsx("div", {
                      className:
                        "relative bg-card/90 backdrop-blur-sm rounded-2xl p-7 border-groovy shadow-neon scrapbook-tilt-2",
                      children: p.jsx("p", {
                        className:
                          "font-groovy text-lg md:text-xl text-accent text-center leading-relaxed",
                        children:
                          "$PEACE isn't a derivative. It's the character that started it all, drawn two decades ago for a moment that looks exactly like this one.",
                      }),
                    }),
                    p.jsxs(ve.div, {
                      className: "text-center pt-2",
                      initial: { opacity: 0, scale: 0.9 },
                      whileInView: { opacity: 1, scale: 1 },
                      viewport: { once: !0 },
                      children: [
                        p.jsx("p", {
                          className:
                            "font-groovy text-xl md:text-2xl text-secondary text-groovy-shadow",
                          children: "The origin story was always here.",
                        }),
                        p.jsx("div", {
                          className:
                            "inline-block bg-warm-brown text-primary font-chunky text-sm px-5 py-1 rounded-sm mt-2 rotate-[2deg] shadow-groovy",
                          children: "It just didn't have a ticker yet 🐸",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            p.jsx(ve.div, {
              className: "mt-20 text-center",
              initial: { opacity: 0, y: 40 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: !0 },
              children: p.jsxs("div", {
                className: "relative inline-block max-w-3xl",
                children: [
                  p.jsx("div", {
                    className:
                      "absolute -inset-6 bg-gradient-to-r from-rainbow-yellow/20 via-rainbow-green/15 to-rainbow-blue/20 rounded-3xl blur-xl",
                  }),
                  p.jsxs("div", {
                    className:
                      "relative bg-card/95 backdrop-blur-sm rounded-3xl p-10 border-groovy shadow-retro",
                    children: [
                      p.jsx(ct, {
                        size: 60,
                        color: "hsl(140 50% 45%)",
                        className: "mx-auto mb-4 animate-float opacity-60",
                      }),
                      p.jsx("p", {
                        className:
                          "font-display text-3xl md:text-5xl text-rainbow-animate leading-tight mb-4",
                        children: "WAR FEELS BAD MAN",
                      }),
                      p.jsx("div", {
                        className:
                          "h-1 w-24 bg-gradient-to-r from-rainbow-red via-rainbow-yellow to-rainbow-green mx-auto rounded-full my-4",
                      }),
                      p.jsx("p", {
                        className:
                          "font-display text-3xl md:text-5xl text-secondary leading-tight text-groovy-shadow",
                        children: "PEACE FEELS GOOD MAN",
                      }),
                      p.jsx("p", { className: "text-5xl mt-4", children: "☮" }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        }),
        p.jsx("div", {
          className: "absolute bottom-0 left-0 right-0 h-16 wavy-divider",
        }),
      ],
    }),
  uM = () => {
    const e = [
      {
        label: "Chain",
        value: "Ethereum",
        icon: "🌐",
        tilt: "scrapbook-tilt-3",
        accent: "border-rainbow-blue/50",
      },
      {
        label: "Symbol",
        value: "PEACE",
        icon: "☮",
        tilt: "scrapbook-tilt-4",
        accent: "border-rainbow-green/50",
      },
      {
        label: "Ticker",
        value: "$PEACE",
        icon: "🐸",
        tilt: "scrapbook-tilt-2",
        accent: "border-rainbow-orange/50",
      },
    ];
    return p.jsxs("section", {
      id: "buy",
      className: "relative py-28 px-4 overflow-hidden",
      children: [
        p.jsx("div", {
          className: "absolute inset-0 bg-cover bg-center opacity-10",
          style: { backgroundImage: `url(${i1})` },
        }),
        p.jsx("div", { className: "absolute inset-0 bg-rainbow-gradient" }),
        p.jsx("div", {
          className: "absolute inset-0 flower-pattern-overlay opacity-30",
        }),
        p.jsx("div", {
          className:
            "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-spin-slow opacity-[0.05]",
          children: p.jsx(ct, { size: 500, color: "hsl(30 30% 35%)" }),
        }),
        p.jsx(eM, {}),
        p.jsxs("div", {
          className: "max-w-5xl mx-auto relative z-10",
          children: [
            p.jsxs(ve.div, {
              className: "text-center mb-16",
              initial: { opacity: 0, y: 30 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: !0 },
              children: [
                p.jsx("span", {
                  className: "font-groovy text-2xl text-secondary block mb-2",
                  children: "🐸 Get Groovy 🐸",
                }),
                p.jsxs("div", {
                  className: "relative inline-block",
                  children: [
                    p.jsx("span", {
                      className:
                        "text-6xl md:text-[9rem] font-display text-outline-thick absolute -top-3 -left-3 opacity-10 select-none",
                      "aria-hidden": "true",
                      children: "$PEACE",
                    }),
                    p.jsx("h2", {
                      className:
                        "text-6xl md:text-[9rem] font-display text-rainbow-animate relative text-retro-shadow leading-none",
                      children: "$PEACE",
                    }),
                  ],
                }),
                p.jsx("div", {
                  className: "mt-4",
                  children: p.jsx(ur, { width: 160, className: "mx-auto" }),
                }),
              ],
            }),
            p.jsx(ve.div, {
              className:
                "flex flex-col md:flex-row gap-6 md:gap-4 items-center md:items-stretch justify-center mb-14",
              initial: { opacity: 0, y: 30 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: !0 },
              transition: { duration: 0.8 },
              children: e.map((t, n) =>
                p.jsxs(
                  ve.div,
                  {
                    className: `relative bg-card/90 backdrop-blur-sm rounded-2xl p-8 border-3 ${t.accent} border-groovy shadow-retro ${t.tilt} hover:shadow-neon transition-all duration-300 w-full md:w-1/3`,
                    whileHover: { scale: 1.08, rotate: 0 },
                    children: [
                      p.jsx("span", {
                        className: "text-5xl mb-4 block animate-bounce-gentle",
                        style: { animationDelay: `${n * 0.3}s` },
                        children: t.icon,
                      }),
                      p.jsx("p", {
                        className:
                          "font-chunky text-muted-foreground text-xs uppercase tracking-[0.5em]",
                        children: t.label,
                      }),
                      p.jsx("p", {
                        className:
                          "font-display text-3xl text-rainbow-animate mt-2",
                        children: t.value,
                      }),
                    ],
                  },
                  n
                )
              ),
            }),
            p.jsx(ve.div, {
              className: "relative",
              initial: { opacity: 0, scale: 0.95 },
              whileInView: { opacity: 1, scale: 1 },
              viewport: { once: !0 },
              children: p.jsxs("div", {
                className:
                  "bg-card/90 backdrop-blur-sm rounded-2xl p-8 border-groovy shadow-neon scrapbook-tilt-2 relative",
                children: [
                  p.jsx("div", { className: "tape-effect" }),
                  p.jsx("p", {
                    className:
                      "font-chunky text-muted-foreground text-xs uppercase tracking-[0.5em] mb-3 pt-3",
                    children: "Contract Address",
                  }),
                  p.jsx("p", {
                    className:
                      "font-display text-lg md:text-2xl text-rainbow-animate text-center break-all leading-relaxed",
                    children: "0x9E59c6B9dBAA00685D934a614a14fc8FF0A002DB",
                  }),
                  p.jsx("button", {
                    onClick: () =>
                      navigator.clipboard.writeText(
                        "0x9E59c6B9dBAA00685D934a614a14fc8FF0A002DB"
                      ),
                    className:
                      "mt-4 font-chunky text-sm bg-secondary/20 hover:bg-secondary/40 px-6 py-2 rounded-full transition-all hover:scale-105 border border-secondary/30",
                    children: "📋 Copy Address",
                  }),
                  p.jsx("div", {
                    className: "flex justify-center gap-3 mt-5",
                    children: ["✿", "☮", "🐸", "🌈", "✌", "❤", "🦋"].map(
                      (t, n) =>
                        p.jsx(
                          ve.span,
                          {
                            className: "text-2xl",
                            animate: { y: [0, -8, 0] },
                            transition: {
                              duration: 1.5,
                              repeat: 1 / 0,
                              delay: n * 0.15,
                            },
                            children: t,
                          },
                          n
                        )
                    ),
                  }),
                ],
              }),
            }),
            p.jsxs("div", {
              className: "flex justify-center gap-8 items-center mt-12",
              children: [
                p.jsx(ze, {
                  size: 45,
                  className: "text-rainbow-red animate-wiggle",
                }),
                p.jsx(ct, {
                  size: 65,
                  className: "text-secondary animate-float",
                }),
                p.jsx(ze, {
                  size: 45,
                  className: "text-rainbow-orange animate-wiggle",
                  style: { animationDelay: "0.5s" },
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  cM = () =>
    p.jsxs("footer", {
      className:
        "relative bg-warm-brown py-12 px-4 text-center overflow-hidden",
      children: [
        p.jsx("div", {
          className: "absolute inset-0 peace-pattern-overlay opacity-10",
        }),
        p.jsxs("div", {
          className: "relative z-10",
          children: [
            p.jsxs("div", {
              className: "flex justify-center gap-4 items-center mb-4",
              children: [
                p.jsx(ze, {
                  size: 30,
                  className: "text-rainbow-yellow animate-wiggle",
                }),
                p.jsx(ct, {
                  size: 45,
                  color: "hsl(45 95% 55%)",
                  className: "animate-float",
                }),
                p.jsx(ze, {
                  size: 30,
                  className: "text-rainbow-yellow animate-wiggle",
                  style: { animationDelay: "0.5s" },
                }),
              ],
            }),
            p.jsx("p", {
              className: "font-groovy text-3xl text-primary mb-2",
              children: "☮ Peace Frog ☮",
            }),
            p.jsx("p", {
              className: "font-body text-primary/70 text-sm mb-6",
              children: "The origin story. Est. 2004 by Matt Furie.",
            }),
            p.jsxs("div", {
              className: "flex justify-center gap-6 mb-6",
              children: [
                p.jsx("a", {
                  href: "https://x.com/PeaceFrog_x",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className:
                    "font-chunky text-primary/80 hover:text-primary transition-all hover:scale-110 text-lg",
                  children: "𝕏 Twitter",
                }),
                p.jsx("a", {
                  href: "https://t.me/PeaceFrog_entry",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className:
                    "font-chunky text-primary/80 hover:text-primary transition-all hover:scale-110 text-lg",
                  children: "Telegram",
                }),
              ],
            }),
            p.jsx("div", {
              className: "flex justify-center gap-3 mb-6",
              children: ["☮", "✿", "🐸", "🌈", "✌", "❤", "🦋", "🌻"].map(
                (e, t) =>
                  p.jsx(
                    "span",
                    { className: "text-xl opacity-60", children: e },
                    t
                  )
              ),
            }),
            p.jsx("div", {
              className: "flex justify-center mt-4",
              children: p.jsx(cr, { size: 30, className: "opacity-50" }),
            }),
          ],
        }),
      ],
    }),
  dM = () =>
    p.jsxs("div", {
      className: "min-h-screen bg-background overflow-x-hidden",
      children: [
        p.jsx(tM, {}),
        p.jsx(Fu, { variant: "groovy" }),
        p.jsx(oM, {}),
        p.jsx(Fu, { variant: "default" }),
        p.jsx(lM, {}),
        p.jsx(Fu, { variant: "rainbow" }),
        p.jsx(uM, {}),
        p.jsx(cM, {}),
      ],
    }),
  fM = () => {
    const e = n0();
    return (
      S.useEffect(() => {
        console.error(
          "404 Error: User attempted to access non-existent route:",
          e.pathname
        );
      }, [e.pathname]),
      p.jsx("div", {
        className: "flex min-h-screen items-center justify-center bg-muted",
        children: p.jsxs("div", {
          className: "text-center",
          children: [
            p.jsx("h1", {
              className: "mb-4 text-4xl font-bold",
              children: "404",
            }),
            p.jsx("p", {
              className: "mb-4 text-xl text-muted-foreground",
              children: "Oops! Page not found",
            }),
            p.jsx("a", {
              href: "/",
              className: "text-primary underline hover:text-primary/90",
              children: "Return to Home",
            }),
          ],
        }),
      })
    );
  },
  hM = new lE(),
  pM = () =>
    p.jsx(cE, {
      client: hM,
      children: p.jsxs(Zk, {
        children: [
          p.jsx(hP, {}),
          p.jsx(kC, {}),
          p.jsx(YE, {
            children: p.jsxs(KE, {
              children: [
                p.jsx(Lc, { path: "/", element: p.jsx(dM, {}) }),
                p.jsx(Lc, { path: "*", element: p.jsx(fM, {}) }),
              ],
            }),
          }),
        ],
      }),
    });
zv(document.getElementById("root")).render(p.jsx(pM, {}));
