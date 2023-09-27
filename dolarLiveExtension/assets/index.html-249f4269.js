(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === "childList")
        for (const s of o.addedNodes) s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
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
function Xd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var bd = { exports: {} },
  _s = {},
  Zd = { exports: {} },
  K = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Gi = Symbol.for("react.element"),
  K0 = Symbol.for("react.portal"),
  G0 = Symbol.for("react.fragment"),
  Q0 = Symbol.for("react.strict_mode"),
  Y0 = Symbol.for("react.profiler"),
  X0 = Symbol.for("react.provider"),
  b0 = Symbol.for("react.context"),
  Z0 = Symbol.for("react.forward_ref"),
  q0 = Symbol.for("react.suspense"),
  J0 = Symbol.for("react.memo"),
  ey = Symbol.for("react.lazy"),
  Cc = Symbol.iterator;
function ty(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Cc && e[Cc]) || e["@@iterator"]), typeof e == "function" ? e : null);
}
var qd = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Jd = Object.assign,
  ep = {};
function zr(e, t, n) {
  (this.props = e), (this.context = t), (this.refs = ep), (this.updater = n || qd);
}
zr.prototype.isReactComponent = {};
zr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
zr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function tp() {}
tp.prototype = zr.prototype;
function nu(e, t, n) {
  (this.props = e), (this.context = t), (this.refs = ep), (this.updater = n || qd);
}
var ru = (nu.prototype = new tp());
ru.constructor = nu;
Jd(ru, zr.prototype);
ru.isPureReactComponent = !0;
var kc = Array.isArray,
  np = Object.prototype.hasOwnProperty,
  iu = { current: null },
  rp = { key: !0, ref: !0, __self: !0, __source: !0 };
function ip(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (o = "" + t.key), t))
      np.call(t, r) && !rp.hasOwnProperty(r) && (i[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) i.children = n;
  else if (1 < l) {
    for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
    i.children = a;
  }
  if (e && e.defaultProps) for (r in ((l = e.defaultProps), l)) i[r] === void 0 && (i[r] = l[r]);
  return { $$typeof: Gi, type: e, key: o, ref: s, props: i, _owner: iu.current };
}
function ny(e, t) {
  return { $$typeof: Gi, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function ou(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Gi;
}
function ry(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Pc = /\/+/g;
function sl(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? ry("" + e.key) : t.toString(36);
}
function No(e, t, n, r, i) {
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
          case Gi:
          case K0:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (i = i(s)),
      (e = r === "" ? "." + sl(s, 0) : r),
      kc(i)
        ? ((n = ""),
          e != null && (n = e.replace(Pc, "$&/") + "/"),
          No(i, t, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (ou(i) &&
            (i = ny(i, n + (!i.key || (s && s.key === i.key) ? "" : ("" + i.key).replace(Pc, "$&/") + "/") + e)),
          t.push(i)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), kc(e)))
    for (var l = 0; l < e.length; l++) {
      o = e[l];
      var a = r + sl(o, l);
      s += No(o, t, n, a, i);
    }
  else if (((a = ty(e)), typeof a == "function"))
    for (e = a.call(e), l = 0; !(o = e.next()).done; ) (o = o.value), (a = r + sl(o, l++)), (s += No(o, t, n, a, i));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return s;
}
function uo(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    No(e, r, "", "", function (o) {
      return t.call(n, o, i++);
    }),
    r
  );
}
function iy(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) && ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) && ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Me = { current: null },
  Mo = { transition: null },
  oy = { ReactCurrentDispatcher: Me, ReactCurrentBatchConfig: Mo, ReactCurrentOwner: iu };
K.Children = {
  map: uo,
  forEach: function (e, t, n) {
    uo(
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
      uo(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      uo(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!ou(e)) throw Error("React.Children.only expected to receive a single React element child.");
    return e;
  },
};
K.Component = zr;
K.Fragment = G0;
K.Profiler = Y0;
K.PureComponent = nu;
K.StrictMode = Q0;
K.Suspense = q0;
K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = oy;
K.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Jd({}, e.props),
    i = e.key,
    o = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (s = iu.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (a in t) np.call(t, a) && !rp.hasOwnProperty(a) && (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: Gi, type: e.type, key: i, ref: o, props: r, _owner: s };
};
K.createContext = function (e) {
  return (
    (e = {
      $$typeof: b0,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: X0, _context: e }),
    (e.Consumer = e)
  );
};
K.createElement = ip;
K.createFactory = function (e) {
  var t = ip.bind(null, e);
  return (t.type = e), t;
};
K.createRef = function () {
  return { current: null };
};
K.forwardRef = function (e) {
  return { $$typeof: Z0, render: e };
};
K.isValidElement = ou;
K.lazy = function (e) {
  return { $$typeof: ey, _payload: { _status: -1, _result: e }, _init: iy };
};
K.memo = function (e, t) {
  return { $$typeof: J0, type: e, compare: t === void 0 ? null : t };
};
K.startTransition = function (e) {
  var t = Mo.transition;
  Mo.transition = {};
  try {
    e();
  } finally {
    Mo.transition = t;
  }
};
K.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
K.useCallback = function (e, t) {
  return Me.current.useCallback(e, t);
};
K.useContext = function (e) {
  return Me.current.useContext(e);
};
K.useDebugValue = function () {};
K.useDeferredValue = function (e) {
  return Me.current.useDeferredValue(e);
};
K.useEffect = function (e, t) {
  return Me.current.useEffect(e, t);
};
K.useId = function () {
  return Me.current.useId();
};
K.useImperativeHandle = function (e, t, n) {
  return Me.current.useImperativeHandle(e, t, n);
};
K.useInsertionEffect = function (e, t) {
  return Me.current.useInsertionEffect(e, t);
};
K.useLayoutEffect = function (e, t) {
  return Me.current.useLayoutEffect(e, t);
};
K.useMemo = function (e, t) {
  return Me.current.useMemo(e, t);
};
K.useReducer = function (e, t, n) {
  return Me.current.useReducer(e, t, n);
};
K.useRef = function (e) {
  return Me.current.useRef(e);
};
K.useState = function (e) {
  return Me.current.useState(e);
};
K.useSyncExternalStore = function (e, t, n) {
  return Me.current.useSyncExternalStore(e, t, n);
};
K.useTransition = function () {
  return Me.current.useTransition();
};
K.version = "18.2.0";
Zd.exports = K;
var x = Zd.exports;
const Te = Xd(x);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var sy = x,
  ly = Symbol.for("react.element"),
  ay = Symbol.for("react.fragment"),
  uy = Object.prototype.hasOwnProperty,
  cy = sy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  fy = { key: !0, ref: !0, __self: !0, __source: !0 };
function op(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (s = t.ref);
  for (r in t) uy.call(t, r) && !fy.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps) for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return { $$typeof: ly, type: e, key: o, ref: s, props: i, _owner: cy.current };
}
_s.Fragment = ay;
_s.jsx = op;
_s.jsxs = op;
bd.exports = _s;
var C = bd.exports,
  Gl = {},
  sp = { exports: {} },
  Xe = {},
  lp = { exports: {} },
  ap = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(L, O) {
    var F = L.length;
    L.push(O);
    e: for (; 0 < F; ) {
      var N = (F - 1) >>> 1,
        H = L[N];
      if (0 < i(H, O)) (L[N] = O), (L[F] = H), (F = N);
      else break e;
    }
  }
  function n(L) {
    return L.length === 0 ? null : L[0];
  }
  function r(L) {
    if (L.length === 0) return null;
    var O = L[0],
      F = L.pop();
    if (F !== O) {
      L[0] = F;
      e: for (var N = 0, H = L.length, Ze = H >>> 1; N < Ze; ) {
        var Le = 2 * (N + 1) - 1,
          qe = L[Le],
          he = Le + 1,
          Je = L[he];
        if (0 > i(qe, F))
          he < H && 0 > i(Je, qe) ? ((L[N] = Je), (L[he] = F), (N = he)) : ((L[N] = qe), (L[Le] = F), (N = Le));
        else if (he < H && 0 > i(Je, F)) (L[N] = Je), (L[he] = F), (N = he);
        else break e;
      }
    }
    return O;
  }
  function i(L, O) {
    var F = L.sortIndex - O.sortIndex;
    return F !== 0 ? F : L.id - O.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var s = Date,
      l = s.now();
    e.unstable_now = function () {
      return s.now() - l;
    };
  }
  var a = [],
    u = [],
    c = 1,
    f = null,
    d = 3,
    h = !1,
    g = !1,
    v = !1,
    P = typeof setTimeout == "function" ? setTimeout : null,
    y = typeof clearTimeout == "function" ? clearTimeout : null,
    p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(L) {
    for (var O = n(u); O !== null; ) {
      if (O.callback === null) r(u);
      else if (O.startTime <= L) r(u), (O.sortIndex = O.expirationTime), t(a, O);
      else break;
      O = n(u);
    }
  }
  function w(L) {
    if (((v = !1), m(L), !g))
      if (n(a) !== null) (g = !0), b(S);
      else {
        var O = n(u);
        O !== null && ge(w, O.startTime - L);
      }
  }
  function S(L, O) {
    (g = !1), v && ((v = !1), y(k), (k = -1)), (h = !0);
    var F = d;
    try {
      for (m(O), f = n(a); f !== null && (!(f.expirationTime > O) || (L && !I())); ) {
        var N = f.callback;
        if (typeof N == "function") {
          (f.callback = null), (d = f.priorityLevel);
          var H = N(f.expirationTime <= O);
          (O = e.unstable_now()), typeof H == "function" ? (f.callback = H) : f === n(a) && r(a), m(O);
        } else r(a);
        f = n(a);
      }
      if (f !== null) var Ze = !0;
      else {
        var Le = n(u);
        Le !== null && ge(w, Le.startTime - O), (Ze = !1);
      }
      return Ze;
    } finally {
      (f = null), (d = F), (h = !1);
    }
  }
  var E = !1,
    T = null,
    k = -1,
    M = 5,
    D = -1;
  function I() {
    return !(e.unstable_now() - D < M);
  }
  function Y() {
    if (T !== null) {
      var L = e.unstable_now();
      D = L;
      var O = !0;
      try {
        O = T(!0, L);
      } finally {
        O ? U() : ((E = !1), (T = null));
      }
    } else E = !1;
  }
  var U;
  if (typeof p == "function")
    U = function () {
      p(Y);
    };
  else if (typeof MessageChannel < "u") {
    var j = new MessageChannel(),
      B = j.port2;
    (j.port1.onmessage = Y),
      (U = function () {
        B.postMessage(null);
      });
  } else
    U = function () {
      P(Y, 0);
    };
  function b(L) {
    (T = L), E || ((E = !0), U());
  }
  function ge(L, O) {
    k = P(function () {
      L(e.unstable_now());
    }, O);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (L) {
      L.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      g || h || ((g = !0), b(S));
    }),
    (e.unstable_forceFrameRate = function (L) {
      0 > L || 125 < L
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (M = 0 < L ? Math.floor(1e3 / L) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return d;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (L) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var O = 3;
          break;
        default:
          O = d;
      }
      var F = d;
      d = O;
      try {
        return L();
      } finally {
        d = F;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (L, O) {
      switch (L) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          L = 3;
      }
      var F = d;
      d = L;
      try {
        return O();
      } finally {
        d = F;
      }
    }),
    (e.unstable_scheduleCallback = function (L, O, F) {
      var N = e.unstable_now();
      switch (
        (typeof F == "object" && F !== null
          ? ((F = F.delay), (F = typeof F == "number" && 0 < F ? N + F : N))
          : (F = N),
        L)
      ) {
        case 1:
          var H = -1;
          break;
        case 2:
          H = 250;
          break;
        case 5:
          H = 1073741823;
          break;
        case 4:
          H = 1e4;
          break;
        default:
          H = 5e3;
      }
      return (
        (H = F + H),
        (L = { id: c++, callback: O, priorityLevel: L, startTime: F, expirationTime: H, sortIndex: -1 }),
        F > N
          ? ((L.sortIndex = F), t(u, L), n(a) === null && L === n(u) && (v ? (y(k), (k = -1)) : (v = !0), ge(w, F - N)))
          : ((L.sortIndex = H), t(a, L), g || h || ((g = !0), b(S))),
        L
      );
    }),
    (e.unstable_shouldYield = I),
    (e.unstable_wrapCallback = function (L) {
      var O = d;
      return function () {
        var F = d;
        d = O;
        try {
          return L.apply(this, arguments);
        } finally {
          d = F;
        }
      };
    });
})(ap);
lp.exports = ap;
var dy = lp.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var up = x,
  Qe = dy;
function A(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var cp = new Set(),
  Ei = {};
function Yn(e, t) {
  Lr(e, t), Lr(e + "Capture", t);
}
function Lr(e, t) {
  for (Ei[e] = t, e = 0; e < t.length; e++) cp.add(t[e]);
}
var zt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
  Ql = Object.prototype.hasOwnProperty,
  py =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Ec = {},
  Tc = {};
function hy(e) {
  return Ql.call(Tc, e) ? !0 : Ql.call(Ec, e) ? !1 : py.test(e) ? (Tc[e] = !0) : ((Ec[e] = !0), !1);
}
function my(e, t, n, r) {
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
function yy(e, t, n, r) {
  if (t === null || typeof t > "u" || my(e, t, n, r)) return !0;
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
function Oe(e, t, n, r, i, o, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = s);
}
var xe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    xe[e] = new Oe(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  xe[t] = new Oe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  xe[e] = new Oe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
  xe[e] = new Oe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    xe[e] = new Oe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  xe[e] = new Oe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  xe[e] = new Oe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  xe[e] = new Oe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  xe[e] = new Oe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var su = /[\-:]([a-z])/g;
function lu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(su, lu);
    xe[t] = new Oe(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) {
  var t = e.replace(su, lu);
  xe[t] = new Oe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(su, lu);
  xe[t] = new Oe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  xe[e] = new Oe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
xe.xlinkHref = new Oe("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function (e) {
  xe[e] = new Oe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function au(e, t, n, r) {
  var i = xe.hasOwnProperty(t) ? xe[t] : null;
  (i !== null
    ? i.type !== 0
    : r || !(2 < t.length) || (t[0] !== "o" && t[0] !== "O") || (t[1] !== "n" && t[1] !== "N")) &&
    (yy(t, n, i, r) && (n = null),
    r || i === null
      ? hy(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
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
var Wt = up.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  co = Symbol.for("react.element"),
  ir = Symbol.for("react.portal"),
  or = Symbol.for("react.fragment"),
  uu = Symbol.for("react.strict_mode"),
  Yl = Symbol.for("react.profiler"),
  fp = Symbol.for("react.provider"),
  dp = Symbol.for("react.context"),
  cu = Symbol.for("react.forward_ref"),
  Xl = Symbol.for("react.suspense"),
  bl = Symbol.for("react.suspense_list"),
  fu = Symbol.for("react.memo"),
  qt = Symbol.for("react.lazy"),
  pp = Symbol.for("react.offscreen"),
  Ac = Symbol.iterator;
function Zr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ac && e[Ac]) || e["@@iterator"]), typeof e == "function" ? e : null);
}
var se = Object.assign,
  ll;
function li(e) {
  if (ll === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      ll = (t && t[1]) || "";
    }
  return (
    `
` +
    ll +
    e
  );
}
var al = !1;
function ul(e, t) {
  if (!e || al) return "";
  al = !0;
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
          l = o.length - 1;
        1 <= s && 0 <= l && i[s] !== o[l];

      )
        l--;
      for (; 1 <= s && 0 <= l; s--, l--)
        if (i[s] !== o[l]) {
          if (s !== 1 || l !== 1)
            do
              if ((s--, l--, 0 > l || i[s] !== o[l])) {
                var a =
                  `
` + i[s].replace(" at new ", " at ");
                return e.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e.displayName)), a;
              }
            while (1 <= s && 0 <= l);
          break;
        }
    }
  } finally {
    (al = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? li(e) : "";
}
function gy(e) {
  switch (e.tag) {
    case 5:
      return li(e.type);
    case 16:
      return li("Lazy");
    case 13:
      return li("Suspense");
    case 19:
      return li("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = ul(e.type, !1)), e;
    case 11:
      return (e = ul(e.type.render, !1)), e;
    case 1:
      return (e = ul(e.type, !0)), e;
    default:
      return "";
  }
}
function Zl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case or:
      return "Fragment";
    case ir:
      return "Portal";
    case Yl:
      return "Profiler";
    case uu:
      return "StrictMode";
    case Xl:
      return "Suspense";
    case bl:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case dp:
        return (e.displayName || "Context") + ".Consumer";
      case fp:
        return (e._context.displayName || "Context") + ".Provider";
      case cu:
        var t = e.render;
        return (
          (e = e.displayName),
          e || ((e = t.displayName || t.name || ""), (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case fu:
        return (t = e.displayName || null), t !== null ? t : Zl(e.type) || "Memo";
      case qt:
        (t = e._payload), (e = e._init);
        try {
          return Zl(e(t));
        } catch {}
    }
  return null;
}
function vy(e) {
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
      return Zl(t);
    case 8:
      return t === uu ? "StrictMode" : "Mode";
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
function gn(e) {
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
function hp(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function wy(e) {
  var t = hp(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
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
function fo(e) {
  e._valueTracker || (e._valueTracker = wy(e));
}
function mp(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return e && (r = hp(e) ? (e.checked ? "true" : "false") : e.value), (e = r), e !== n ? (t.setValue(e), !0) : !1;
}
function Qo(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")) return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ql(e, t) {
  var n = t.checked;
  return se({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Lc(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = gn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null,
    });
}
function yp(e, t) {
  (t = t.checked), t != null && au(e, "checked", t, !1);
}
function Jl(e, t) {
  yp(e, t);
  var n = gn(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? ea(e, t.type, n) : t.hasOwnProperty("defaultValue") && ea(e, t.type, gn(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Rc(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!((r !== "submit" && r !== "reset") || (t.value !== void 0 && t.value !== null))) return;
    (t = "" + e._wrapperState.initialValue), n || t === e.value || (e.value = t), (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function ea(e, t, n) {
  (t !== "number" || Qo(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var ai = Array.isArray;
function xr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + gn(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function ta(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(A(91));
  return se({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function _c(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(A(92));
      if (ai(n)) {
        if (1 < n.length) throw Error(A(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: gn(n) };
}
function gp(e, t) {
  var n = gn(t.value),
    r = gn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Vc(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function vp(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function na(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? vp(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var po,
  wp = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (
        po = po || document.createElement("div"),
          po.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = po.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Ti(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var di = {
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
  xy = ["Webkit", "ms", "Moz", "O"];
Object.keys(di).forEach(function (e) {
  xy.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (di[t] = di[e]);
  });
});
function xp(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (di.hasOwnProperty(e) && di[e])
    ? ("" + t).trim()
    : t + "px";
}
function Sp(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = xp(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var Sy = se(
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
function ra(e, t) {
  if (t) {
    if (Sy[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(A(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(A(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(A(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(A(62));
  }
}
function ia(e, t) {
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
var oa = null;
function du(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var sa = null,
  Sr = null,
  Cr = null;
function Dc(e) {
  if ((e = Xi(e))) {
    if (typeof sa != "function") throw Error(A(280));
    var t = e.stateNode;
    t && ((t = Os(t)), sa(e.stateNode, e.type, t));
  }
}
function Cp(e) {
  Sr ? (Cr ? Cr.push(e) : (Cr = [e])) : (Sr = e);
}
function kp() {
  if (Sr) {
    var e = Sr,
      t = Cr;
    if (((Cr = Sr = null), Dc(e), t)) for (e = 0; e < t.length; e++) Dc(t[e]);
  }
}
function Pp(e, t) {
  return e(t);
}
function Ep() {}
var cl = !1;
function Tp(e, t, n) {
  if (cl) return e(t, n);
  cl = !0;
  try {
    return Pp(e, t, n);
  } finally {
    (cl = !1), (Sr !== null || Cr !== null) && (Ep(), kp());
  }
}
function Ai(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Os(n);
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
        ((e = e.type), (r = !(e === "button" || e === "input" || e === "select" || e === "textarea"))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(A(231, t, typeof n));
  return n;
}
var la = !1;
if (zt)
  try {
    var qr = {};
    Object.defineProperty(qr, "passive", {
      get: function () {
        la = !0;
      },
    }),
      window.addEventListener("test", qr, qr),
      window.removeEventListener("test", qr, qr);
  } catch {
    la = !1;
  }
function Cy(e, t, n, r, i, o, s, l, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var pi = !1,
  Yo = null,
  Xo = !1,
  aa = null,
  ky = {
    onError: function (e) {
      (pi = !0), (Yo = e);
    },
  };
function Py(e, t, n, r, i, o, s, l, a) {
  (pi = !1), (Yo = null), Cy.apply(ky, arguments);
}
function Ey(e, t, n, r, i, o, s, l, a) {
  if ((Py.apply(this, arguments), pi)) {
    if (pi) {
      var u = Yo;
      (pi = !1), (Yo = null);
    } else throw Error(A(198));
    Xo || ((Xo = !0), (aa = u));
  }
}
function Xn(e) {
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
function Ap(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null)) return t.dehydrated;
  }
  return null;
}
function Nc(e) {
  if (Xn(e) !== e) throw Error(A(188));
}
function Ty(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Xn(e)), t === null)) throw Error(A(188));
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
        if (o === n) return Nc(i), e;
        if (o === r) return Nc(i), t;
        o = o.sibling;
      }
      throw Error(A(188));
    }
    if (n.return !== r.return) (n = i), (r = o);
    else {
      for (var s = !1, l = i.child; l; ) {
        if (l === n) {
          (s = !0), (n = i), (r = o);
          break;
        }
        if (l === r) {
          (s = !0), (r = i), (n = o);
          break;
        }
        l = l.sibling;
      }
      if (!s) {
        for (l = o.child; l; ) {
          if (l === n) {
            (s = !0), (n = o), (r = i);
            break;
          }
          if (l === r) {
            (s = !0), (r = o), (n = i);
            break;
          }
          l = l.sibling;
        }
        if (!s) throw Error(A(189));
      }
    }
    if (n.alternate !== r) throw Error(A(190));
  }
  if (n.tag !== 3) throw Error(A(188));
  return n.stateNode.current === n ? e : t;
}
function Lp(e) {
  return (e = Ty(e)), e !== null ? Rp(e) : null;
}
function Rp(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Rp(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var _p = Qe.unstable_scheduleCallback,
  Mc = Qe.unstable_cancelCallback,
  Ay = Qe.unstable_shouldYield,
  Ly = Qe.unstable_requestPaint,
  ae = Qe.unstable_now,
  Ry = Qe.unstable_getCurrentPriorityLevel,
  pu = Qe.unstable_ImmediatePriority,
  Vp = Qe.unstable_UserBlockingPriority,
  bo = Qe.unstable_NormalPriority,
  _y = Qe.unstable_LowPriority,
  Dp = Qe.unstable_IdlePriority,
  Vs = null,
  Ct = null;
function Vy(e) {
  if (Ct && typeof Ct.onCommitFiberRoot == "function")
    try {
      Ct.onCommitFiberRoot(Vs, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var pt = Math.clz32 ? Math.clz32 : My,
  Dy = Math.log,
  Ny = Math.LN2;
function My(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Dy(e) / Ny) | 0)) | 0;
}
var ho = 64,
  mo = 4194304;
function ui(e) {
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
function Zo(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var l = s & ~i;
    l !== 0 ? (r = ui(l)) : ((o &= s), o !== 0 && (r = ui(o)));
  } else (s = n & ~i), s !== 0 ? (r = ui(s)) : o !== 0 && (r = ui(o));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & i) && ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0)))
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; ) (n = 31 - pt(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function Oy(e, t) {
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
function jy(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
    var s = 31 - pt(o),
      l = 1 << s,
      a = i[s];
    a === -1 ? (!(l & n) || l & r) && (i[s] = Oy(l, t)) : a <= t && (e.expiredLanes |= l), (o &= ~l);
  }
}
function ua(e) {
  return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Np() {
  var e = ho;
  return (ho <<= 1), !(ho & 4194240) && (ho = 64), e;
}
function fl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Qi(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - pt(t)),
    (e[t] = n);
}
function Fy(e, t) {
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
    var i = 31 - pt(n),
      o = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
  }
}
function hu(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - pt(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var Q = 0;
function Mp(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Op,
  mu,
  jp,
  Fp,
  zp,
  ca = !1,
  yo = [],
  sn = null,
  ln = null,
  an = null,
  Li = new Map(),
  Ri = new Map(),
  tn = [],
  zy =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Oc(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      sn = null;
      break;
    case "dragenter":
    case "dragleave":
      ln = null;
      break;
    case "mouseover":
    case "mouseout":
      an = null;
      break;
    case "pointerover":
    case "pointerout":
      Li.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Ri.delete(t.pointerId);
  }
}
function Jr(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [i] }),
      t !== null && ((t = Xi(t)), t !== null && mu(t)),
      e)
    : ((e.eventSystemFlags |= r), (t = e.targetContainers), i !== null && t.indexOf(i) === -1 && t.push(i), e);
}
function Iy(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (sn = Jr(sn, e, t, n, r, i)), !0;
    case "dragenter":
      return (ln = Jr(ln, e, t, n, r, i)), !0;
    case "mouseover":
      return (an = Jr(an, e, t, n, r, i)), !0;
    case "pointerover":
      var o = i.pointerId;
      return Li.set(o, Jr(Li.get(o) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (o = i.pointerId), Ri.set(o, Jr(Ri.get(o) || null, e, t, n, r, i)), !0;
  }
  return !1;
}
function Ip(e) {
  var t = Mn(e.target);
  if (t !== null) {
    var n = Xn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Ap(n)), t !== null)) {
          (e.blockedOn = t),
            zp(e.priority, function () {
              jp(n);
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
function Oo(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = fa(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (oa = r), n.target.dispatchEvent(r), (oa = null);
    } else return (t = Xi(n)), t !== null && mu(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function jc(e, t, n) {
  Oo(e) && n.delete(t);
}
function By() {
  (ca = !1),
    sn !== null && Oo(sn) && (sn = null),
    ln !== null && Oo(ln) && (ln = null),
    an !== null && Oo(an) && (an = null),
    Li.forEach(jc),
    Ri.forEach(jc);
}
function ei(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null), ca || ((ca = !0), Qe.unstable_scheduleCallback(Qe.unstable_NormalPriority, By)));
}
function _i(e) {
  function t(i) {
    return ei(i, e);
  }
  if (0 < yo.length) {
    ei(yo[0], e);
    for (var n = 1; n < yo.length; n++) {
      var r = yo[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    sn !== null && ei(sn, e), ln !== null && ei(ln, e), an !== null && ei(an, e), Li.forEach(t), Ri.forEach(t), n = 0;
    n < tn.length;
    n++
  )
    (r = tn[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < tn.length && ((n = tn[0]), n.blockedOn === null); ) Ip(n), n.blockedOn === null && tn.shift();
}
var kr = Wt.ReactCurrentBatchConfig,
  qo = !0;
function $y(e, t, n, r) {
  var i = Q,
    o = kr.transition;
  kr.transition = null;
  try {
    (Q = 1), yu(e, t, n, r);
  } finally {
    (Q = i), (kr.transition = o);
  }
}
function Uy(e, t, n, r) {
  var i = Q,
    o = kr.transition;
  kr.transition = null;
  try {
    (Q = 4), yu(e, t, n, r);
  } finally {
    (Q = i), (kr.transition = o);
  }
}
function yu(e, t, n, r) {
  if (qo) {
    var i = fa(e, t, n, r);
    if (i === null) Sl(e, t, r, Jo, n), Oc(e, r);
    else if (Iy(i, e, t, n, r)) r.stopPropagation();
    else if ((Oc(e, r), t & 4 && -1 < zy.indexOf(e))) {
      for (; i !== null; ) {
        var o = Xi(i);
        if ((o !== null && Op(o), (o = fa(e, t, n, r)), o === null && Sl(e, t, r, Jo, n), o === i)) break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else Sl(e, t, r, null, n);
  }
}
var Jo = null;
function fa(e, t, n, r) {
  if (((Jo = null), (e = du(r)), (e = Mn(e)), e !== null))
    if (((t = Xn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Ap(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Jo = e), null;
}
function Bp(e) {
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
      switch (Ry()) {
        case pu:
          return 1;
        case Vp:
          return 4;
        case bo:
        case _y:
          return 16;
        case Dp:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var rn = null,
  gu = null,
  jo = null;
function $p() {
  if (jo) return jo;
  var e,
    t = gu,
    n = t.length,
    r,
    i = "value" in rn ? rn.value : rn.textContent,
    o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === i[o - r]; r++);
  return (jo = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Fo(e) {
  var t = e.keyCode;
  return (
    "charCode" in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function go() {
  return !0;
}
function Fc() {
  return !1;
}
function be(e) {
  function t(n, r, i, o, s) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = s),
      (this.currentTarget = null);
    for (var l in e) e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(o) : o[l]));
    return (
      (this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? go : Fc),
      (this.isPropagationStopped = Fc),
      this
    );
  }
  return (
    se(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = go));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = go));
      },
      persist: function () {},
      isPersistent: go,
    }),
    t
  );
}
var Ir = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  vu = be(Ir),
  Yi = se({}, Ir, { view: 0, detail: 0 }),
  Hy = be(Yi),
  dl,
  pl,
  ti,
  Ds = se({}, Yi, {
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
    getModifierState: wu,
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
        : (e !== ti &&
            (ti && e.type === "mousemove"
              ? ((dl = e.screenX - ti.screenX), (pl = e.screenY - ti.screenY))
              : (pl = dl = 0),
            (ti = e)),
          dl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : pl;
    },
  }),
  zc = be(Ds),
  Wy = se({}, Ds, { dataTransfer: 0 }),
  Ky = be(Wy),
  Gy = se({}, Yi, { relatedTarget: 0 }),
  hl = be(Gy),
  Qy = se({}, Ir, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Yy = be(Qy),
  Xy = se({}, Ir, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  by = be(Xy),
  Zy = se({}, Ir, { data: 0 }),
  Ic = be(Zy),
  qy = {
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
  Jy = {
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
  eg = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function tg(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = eg[e]) ? !!t[e] : !1;
}
function wu() {
  return tg;
}
var ng = se({}, Yi, {
    key: function (e) {
      if (e.key) {
        var t = qy[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Fo(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Jy[e.keyCode] || "Unidentified"
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
    getModifierState: wu,
    charCode: function (e) {
      return e.type === "keypress" ? Fo(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress" ? Fo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
  }),
  rg = be(ng),
  ig = se({}, Ds, {
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
  Bc = be(ig),
  og = se({}, Yi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: wu,
  }),
  sg = be(og),
  lg = se({}, Ir, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  ag = be(lg),
  ug = se({}, Ds, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  cg = be(ug),
  fg = [9, 13, 27, 32],
  xu = zt && "CompositionEvent" in window,
  hi = null;
zt && "documentMode" in document && (hi = document.documentMode);
var dg = zt && "TextEvent" in window && !hi,
  Up = zt && (!xu || (hi && 8 < hi && 11 >= hi)),
  $c = String.fromCharCode(32),
  Uc = !1;
function Hp(e, t) {
  switch (e) {
    case "keyup":
      return fg.indexOf(t.keyCode) !== -1;
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
function Wp(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var sr = !1;
function pg(e, t) {
  switch (e) {
    case "compositionend":
      return Wp(t);
    case "keypress":
      return t.which !== 32 ? null : ((Uc = !0), $c);
    case "textInput":
      return (e = t.data), e === $c && Uc ? null : e;
    default:
      return null;
  }
}
function hg(e, t) {
  if (sr) return e === "compositionend" || (!xu && Hp(e, t)) ? ((e = $p()), (jo = gu = rn = null), (sr = !1), e) : null;
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
      return Up && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var mg = {
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
function Hc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!mg[e.type] : t === "textarea";
}
function Kp(e, t, n, r) {
  Cp(r),
    (t = es(t, "onChange")),
    0 < t.length && ((n = new vu("onChange", "change", null, n, r)), e.push({ event: n, listeners: t }));
}
var mi = null,
  Vi = null;
function yg(e) {
  nh(e, 0);
}
function Ns(e) {
  var t = ur(e);
  if (mp(t)) return e;
}
function gg(e, t) {
  if (e === "change") return t;
}
var Gp = !1;
if (zt) {
  var ml;
  if (zt) {
    var yl = "oninput" in document;
    if (!yl) {
      var Wc = document.createElement("div");
      Wc.setAttribute("oninput", "return;"), (yl = typeof Wc.oninput == "function");
    }
    ml = yl;
  } else ml = !1;
  Gp = ml && (!document.documentMode || 9 < document.documentMode);
}
function Kc() {
  mi && (mi.detachEvent("onpropertychange", Qp), (Vi = mi = null));
}
function Qp(e) {
  if (e.propertyName === "value" && Ns(Vi)) {
    var t = [];
    Kp(t, Vi, e, du(e)), Tp(yg, t);
  }
}
function vg(e, t, n) {
  e === "focusin" ? (Kc(), (mi = t), (Vi = n), mi.attachEvent("onpropertychange", Qp)) : e === "focusout" && Kc();
}
function wg(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ns(Vi);
}
function xg(e, t) {
  if (e === "click") return Ns(t);
}
function Sg(e, t) {
  if (e === "input" || e === "change") return Ns(t);
}
function Cg(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var mt = typeof Object.is == "function" ? Object.is : Cg;
function Di(e, t) {
  if (mt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Ql.call(t, i) || !mt(e[i], t[i])) return !1;
  }
  return !0;
}
function Gc(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Qc(e, t) {
  var n = Gc(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t)) return { node: n, offset: t - e };
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
    n = Gc(n);
  }
}
function Yp(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Yp(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Xp() {
  for (var e = window, t = Qo(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Qo(e.document);
  }
  return t;
}
function Su(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function kg(e) {
  var t = Xp(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Yp(n.ownerDocument.documentElement, n)) {
    if (r !== null && Su(n)) {
      if (((t = r.start), (e = r.end), e === void 0 && (e = t), "selectionStart" in n))
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (((e = ((t = n.ownerDocument || document) && t.defaultView) || window), e.getSelection)) {
        e = e.getSelection();
        var i = n.textContent.length,
          o = Math.min(r.start, i);
        (r = r.end === void 0 ? o : Math.min(r.end, i)),
          !e.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = Qc(n, o));
        var s = Qc(n, r);
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
          o > r ? (e.addRange(t), e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top);
  }
}
var Pg = zt && "documentMode" in document && 11 >= document.documentMode,
  lr = null,
  da = null,
  yi = null,
  pa = !1;
function Yc(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  pa ||
    lr == null ||
    lr !== Qo(r) ||
    ((r = lr),
    "selectionStart" in r && Su(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (yi && Di(yi, r)) ||
      ((yi = r),
      (r = es(da, "onSelect")),
      0 < r.length &&
        ((t = new vu("onSelect", "select", null, t, n)), e.push({ event: t, listeners: r }), (t.target = lr))));
}
function vo(e, t) {
  var n = {};
  return (n[e.toLowerCase()] = t.toLowerCase()), (n["Webkit" + e] = "webkit" + t), (n["Moz" + e] = "moz" + t), n;
}
var ar = {
    animationend: vo("Animation", "AnimationEnd"),
    animationiteration: vo("Animation", "AnimationIteration"),
    animationstart: vo("Animation", "AnimationStart"),
    transitionend: vo("Transition", "TransitionEnd"),
  },
  gl = {},
  bp = {};
zt &&
  ((bp = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete ar.animationend.animation, delete ar.animationiteration.animation, delete ar.animationstart.animation),
  "TransitionEvent" in window || delete ar.transitionend.transition);
function Ms(e) {
  if (gl[e]) return gl[e];
  if (!ar[e]) return e;
  var t = ar[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in bp) return (gl[e] = t[n]);
  return e;
}
var Zp = Ms("animationend"),
  qp = Ms("animationiteration"),
  Jp = Ms("animationstart"),
  eh = Ms("transitionend"),
  th = new Map(),
  Xc =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function kn(e, t) {
  th.set(e, t), Yn(t, [e]);
}
for (var vl = 0; vl < Xc.length; vl++) {
  var wl = Xc[vl],
    Eg = wl.toLowerCase(),
    Tg = wl[0].toUpperCase() + wl.slice(1);
  kn(Eg, "on" + Tg);
}
kn(Zp, "onAnimationEnd");
kn(qp, "onAnimationIteration");
kn(Jp, "onAnimationStart");
kn("dblclick", "onDoubleClick");
kn("focusin", "onFocus");
kn("focusout", "onBlur");
kn(eh, "onTransitionEnd");
Lr("onMouseEnter", ["mouseout", "mouseover"]);
Lr("onMouseLeave", ["mouseout", "mouseover"]);
Lr("onPointerEnter", ["pointerout", "pointerover"]);
Lr("onPointerLeave", ["pointerout", "pointerover"]);
Yn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Yn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Yn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Yn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Yn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Yn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var ci =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Ag = new Set("cancel close invalid load scroll toggle".split(" ").concat(ci));
function bc(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Ey(r, t, void 0, e), (e.currentTarget = null);
}
function nh(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var l = r[s],
            a = l.instance,
            u = l.currentTarget;
          if (((l = l.listener), a !== o && i.isPropagationStopped())) break e;
          bc(i, l, u), (o = a);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((l = r[s]), (a = l.instance), (u = l.currentTarget), (l = l.listener), a !== o && i.isPropagationStopped())
          )
            break e;
          bc(i, l, u), (o = a);
        }
    }
  }
  if (Xo) throw ((e = aa), (Xo = !1), (aa = null), e);
}
function q(e, t) {
  var n = t[va];
  n === void 0 && (n = t[va] = new Set());
  var r = e + "__bubble";
  n.has(r) || (rh(t, e, 2, !1), n.add(r));
}
function xl(e, t, n) {
  var r = 0;
  t && (r |= 4), rh(n, e, r, t);
}
var wo = "_reactListening" + Math.random().toString(36).slice(2);
function Ni(e) {
  if (!e[wo]) {
    (e[wo] = !0),
      cp.forEach(function (n) {
        n !== "selectionchange" && (Ag.has(n) || xl(n, !1, e), xl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[wo] || ((t[wo] = !0), xl("selectionchange", !1, t));
  }
}
function rh(e, t, n, r) {
  switch (Bp(t)) {
    case 1:
      var i = $y;
      break;
    case 4:
      i = Uy;
      break;
    default:
      i = yu;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !la || (t !== "touchstart" && t !== "touchmove" && t !== "wheel") || (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function Sl(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var l = r.stateNode.containerInfo;
        if (l === i || (l.nodeType === 8 && l.parentNode === i)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var a = s.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = s.stateNode.containerInfo), a === i || (a.nodeType === 8 && a.parentNode === i))
            )
              return;
            s = s.return;
          }
        for (; l !== null; ) {
          if (((s = Mn(l)), s === null)) return;
          if (((a = s.tag), a === 5 || a === 6)) {
            r = o = s;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  Tp(function () {
    var u = o,
      c = du(n),
      f = [];
    e: {
      var d = th.get(e);
      if (d !== void 0) {
        var h = vu,
          g = e;
        switch (e) {
          case "keypress":
            if (Fo(n) === 0) break e;
          case "keydown":
          case "keyup":
            h = rg;
            break;
          case "focusin":
            (g = "focus"), (h = hl);
            break;
          case "focusout":
            (g = "blur"), (h = hl);
            break;
          case "beforeblur":
          case "afterblur":
            h = hl;
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
            h = zc;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            h = Ky;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            h = sg;
            break;
          case Zp:
          case qp:
          case Jp:
            h = Yy;
            break;
          case eh:
            h = ag;
            break;
          case "scroll":
            h = Hy;
            break;
          case "wheel":
            h = cg;
            break;
          case "copy":
          case "cut":
          case "paste":
            h = by;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            h = Bc;
        }
        var v = (t & 4) !== 0,
          P = !v && e === "scroll",
          y = v ? (d !== null ? d + "Capture" : null) : d;
        v = [];
        for (var p = u, m; p !== null; ) {
          m = p;
          var w = m.stateNode;
          if (
            (m.tag === 5 && w !== null && ((m = w), y !== null && ((w = Ai(p, y)), w != null && v.push(Mi(p, w, m)))),
            P)
          )
            break;
          p = p.return;
        }
        0 < v.length && ((d = new h(d, g, null, n, c)), f.push({ event: d, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((d = e === "mouseover" || e === "pointerover"),
          (h = e === "mouseout" || e === "pointerout"),
          d && n !== oa && (g = n.relatedTarget || n.fromElement) && (Mn(g) || g[It]))
        )
          break e;
        if (
          (h || d) &&
          ((d = c.window === c ? c : (d = c.ownerDocument) ? d.defaultView || d.parentWindow : window),
          h
            ? ((g = n.relatedTarget || n.toElement),
              (h = u),
              (g = g ? Mn(g) : null),
              g !== null && ((P = Xn(g)), g !== P || (g.tag !== 5 && g.tag !== 6)) && (g = null))
            : ((h = null), (g = u)),
          h !== g)
        ) {
          if (
            ((v = zc),
            (w = "onMouseLeave"),
            (y = "onMouseEnter"),
            (p = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((v = Bc), (w = "onPointerLeave"), (y = "onPointerEnter"), (p = "pointer")),
            (P = h == null ? d : ur(h)),
            (m = g == null ? d : ur(g)),
            (d = new v(w, p + "leave", h, n, c)),
            (d.target = P),
            (d.relatedTarget = m),
            (w = null),
            Mn(c) === u && ((v = new v(y, p + "enter", g, n, c)), (v.target = m), (v.relatedTarget = P), (w = v)),
            (P = w),
            h && g)
          )
            t: {
              for (v = h, y = g, p = 0, m = v; m; m = nr(m)) p++;
              for (m = 0, w = y; w; w = nr(w)) m++;
              for (; 0 < p - m; ) (v = nr(v)), p--;
              for (; 0 < m - p; ) (y = nr(y)), m--;
              for (; p--; ) {
                if (v === y || (y !== null && v === y.alternate)) break t;
                (v = nr(v)), (y = nr(y));
              }
              v = null;
            }
          else v = null;
          h !== null && Zc(f, d, h, v, !1), g !== null && P !== null && Zc(f, P, g, v, !0);
        }
      }
      e: {
        if (
          ((d = u ? ur(u) : window),
          (h = d.nodeName && d.nodeName.toLowerCase()),
          h === "select" || (h === "input" && d.type === "file"))
        )
          var S = gg;
        else if (Hc(d))
          if (Gp) S = Sg;
          else {
            S = wg;
            var E = vg;
          }
        else
          (h = d.nodeName) && h.toLowerCase() === "input" && (d.type === "checkbox" || d.type === "radio") && (S = xg);
        if (S && (S = S(e, u))) {
          Kp(f, S, n, c);
          break e;
        }
        E && E(e, d, u),
          e === "focusout" && (E = d._wrapperState) && E.controlled && d.type === "number" && ea(d, "number", d.value);
      }
      switch (((E = u ? ur(u) : window), e)) {
        case "focusin":
          (Hc(E) || E.contentEditable === "true") && ((lr = E), (da = u), (yi = null));
          break;
        case "focusout":
          yi = da = lr = null;
          break;
        case "mousedown":
          pa = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (pa = !1), Yc(f, n, c);
          break;
        case "selectionchange":
          if (Pg) break;
        case "keydown":
        case "keyup":
          Yc(f, n, c);
      }
      var T;
      if (xu)
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
        sr ? Hp(e, n) && (k = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (k = "onCompositionStart");
      k &&
        (Up &&
          n.locale !== "ko" &&
          (sr || k !== "onCompositionStart"
            ? k === "onCompositionEnd" && sr && (T = $p())
            : ((rn = c), (gu = "value" in rn ? rn.value : rn.textContent), (sr = !0))),
        (E = es(u, k)),
        0 < E.length &&
          ((k = new Ic(k, e, null, n, c)),
          f.push({ event: k, listeners: E }),
          T ? (k.data = T) : ((T = Wp(n)), T !== null && (k.data = T)))),
        (T = dg ? pg(e, n) : hg(e, n)) &&
          ((u = es(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new Ic("onBeforeInput", "beforeinput", null, n, c)),
            f.push({ event: c, listeners: u }),
            (c.data = T)));
    }
    nh(f, t);
  });
}
function Mi(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function es(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      o = i.stateNode;
    i.tag === 5 &&
      o !== null &&
      ((i = o), (o = Ai(e, n)), o != null && r.unshift(Mi(e, o, i)), (o = Ai(e, t)), o != null && r.push(Mi(e, o, i))),
      (e = e.return);
  }
  return r;
}
function nr(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Zc(e, t, n, r, i) {
  for (var o = t._reactName, s = []; n !== null && n !== r; ) {
    var l = n,
      a = l.alternate,
      u = l.stateNode;
    if (a !== null && a === r) break;
    l.tag === 5 &&
      u !== null &&
      ((l = u),
      i
        ? ((a = Ai(n, o)), a != null && s.unshift(Mi(n, a, l)))
        : i || ((a = Ai(n, o)), a != null && s.push(Mi(n, a, l)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var Lg = /\r\n?/g,
  Rg = /\u0000|\uFFFD/g;
function qc(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Lg,
      `
`
    )
    .replace(Rg, "");
}
function xo(e, t, n) {
  if (((t = qc(t)), qc(e) !== t && n)) throw Error(A(425));
}
function ts() {}
var ha = null,
  ma = null;
function ya(e, t) {
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
var ga = typeof setTimeout == "function" ? setTimeout : void 0,
  _g = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Jc = typeof Promise == "function" ? Promise : void 0,
  Vg =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Jc < "u"
      ? function (e) {
          return Jc.resolve(null).then(e).catch(Dg);
        }
      : ga;
function Dg(e) {
  setTimeout(function () {
    throw e;
  });
}
function Cl(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), _i(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  _i(t);
}
function un(e) {
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
function ef(e) {
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
var Br = Math.random().toString(36).slice(2),
  St = "__reactFiber$" + Br,
  Oi = "__reactProps$" + Br,
  It = "__reactContainer$" + Br,
  va = "__reactEvents$" + Br,
  Ng = "__reactListeners$" + Br,
  Mg = "__reactHandles$" + Br;
function Mn(e) {
  var t = e[St];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[It] || n[St])) {
      if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
        for (e = ef(e); e !== null; ) {
          if ((n = e[St])) return n;
          e = ef(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Xi(e) {
  return (e = e[St] || e[It]), !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e;
}
function ur(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(A(33));
}
function Os(e) {
  return e[Oi] || null;
}
var wa = [],
  cr = -1;
function Pn(e) {
  return { current: e };
}
function J(e) {
  0 > cr || ((e.current = wa[cr]), (wa[cr] = null), cr--);
}
function Z(e, t) {
  cr++, (wa[cr] = e.current), (e.current = t);
}
var vn = {},
  Ae = Pn(vn),
  ze = Pn(!1),
  $n = vn;
function Rr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return vn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
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
function Ie(e) {
  return (e = e.childContextTypes), e != null;
}
function ns() {
  J(ze), J(Ae);
}
function tf(e, t, n) {
  if (Ae.current !== vn) throw Error(A(168));
  Z(Ae, t), Z(ze, n);
}
function ih(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function")) return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(A(108, vy(e) || "Unknown", i));
  return se({}, n, r);
}
function rs(e) {
  return (
    (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || vn),
    ($n = Ae.current),
    Z(Ae, e),
    Z(ze, ze.current),
    !0
  );
}
function nf(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(A(169));
  n ? ((e = ih(e, t, $n)), (r.__reactInternalMemoizedMergedChildContext = e), J(ze), J(Ae), Z(Ae, e)) : J(ze), Z(ze, n);
}
var Vt = null,
  js = !1,
  kl = !1;
function oh(e) {
  Vt === null ? (Vt = [e]) : Vt.push(e);
}
function Og(e) {
  (js = !0), oh(e);
}
function En() {
  if (!kl && Vt !== null) {
    kl = !0;
    var e = 0,
      t = Q;
    try {
      var n = Vt;
      for (Q = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Vt = null), (js = !1);
    } catch (i) {
      throw (Vt !== null && (Vt = Vt.slice(e + 1)), _p(pu, En), i);
    } finally {
      (Q = t), (kl = !1);
    }
  }
  return null;
}
var fr = [],
  dr = 0,
  is = null,
  os = 0,
  tt = [],
  nt = 0,
  Un = null,
  Dt = 1,
  Nt = "";
function _n(e, t) {
  (fr[dr++] = os), (fr[dr++] = is), (is = e), (os = t);
}
function sh(e, t, n) {
  (tt[nt++] = Dt), (tt[nt++] = Nt), (tt[nt++] = Un), (Un = e);
  var r = Dt;
  e = Nt;
  var i = 32 - pt(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var o = 32 - pt(t) + i;
  if (30 < o) {
    var s = i - (i % 5);
    (o = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (i -= s),
      (Dt = (1 << (32 - pt(t) + i)) | (n << i) | r),
      (Nt = o + e);
  } else (Dt = (1 << o) | (n << i) | r), (Nt = e);
}
function Cu(e) {
  e.return !== null && (_n(e, 1), sh(e, 1, 0));
}
function ku(e) {
  for (; e === is; ) (is = fr[--dr]), (fr[dr] = null), (os = fr[--dr]), (fr[dr] = null);
  for (; e === Un; )
    (Un = tt[--nt]), (tt[nt] = null), (Nt = tt[--nt]), (tt[nt] = null), (Dt = tt[--nt]), (tt[nt] = null);
}
var Ke = null,
  We = null,
  ee = !1,
  dt = null;
function lh(e, t) {
  var n = rt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function rf(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
        t !== null ? ((e.stateNode = t), (Ke = e), (We = un(t.firstChild)), !0) : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ke = e), (We = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Un !== null ? { id: Dt, overflow: Nt } : null),
            (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
            (n = rt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ke = e),
            (We = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function xa(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Sa(e) {
  if (ee) {
    var t = We;
    if (t) {
      var n = t;
      if (!rf(e, t)) {
        if (xa(e)) throw Error(A(418));
        t = un(n.nextSibling);
        var r = Ke;
        t && rf(e, t) ? lh(r, n) : ((e.flags = (e.flags & -4097) | 2), (ee = !1), (Ke = e));
      }
    } else {
      if (xa(e)) throw Error(A(418));
      (e.flags = (e.flags & -4097) | 2), (ee = !1), (Ke = e);
    }
  }
}
function of(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Ke = e;
}
function So(e) {
  if (e !== Ke) return !1;
  if (!ee) return of(e), (ee = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type), (t = t !== "head" && t !== "body" && !ya(e.type, e.memoizedProps))),
    t && (t = We))
  ) {
    if (xa(e)) throw (ah(), Error(A(418)));
    for (; t; ) lh(e, t), (t = un(t.nextSibling));
  }
  if ((of(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(A(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              We = un(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      We = null;
    }
  } else We = Ke ? un(e.stateNode.nextSibling) : null;
  return !0;
}
function ah() {
  for (var e = We; e; ) e = un(e.nextSibling);
}
function _r() {
  (We = Ke = null), (ee = !1);
}
function Pu(e) {
  dt === null ? (dt = [e]) : dt.push(e);
}
var jg = Wt.ReactCurrentBatchConfig;
function ct(e, t) {
  if (e && e.defaultProps) {
    (t = se({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var ss = Pn(null),
  ls = null,
  pr = null,
  Eu = null;
function Tu() {
  Eu = pr = ls = null;
}
function Au(e) {
  var t = ss.current;
  J(ss), (e._currentValue = t);
}
function Ca(e, t, n) {
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
function Pr(e, t) {
  (ls = e),
    (Eu = pr = null),
    (e = e.dependencies),
    e !== null && e.firstContext !== null && (e.lanes & t && (Fe = !0), (e.firstContext = null));
}
function ot(e) {
  var t = e._currentValue;
  if (Eu !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), pr === null)) {
      if (ls === null) throw Error(A(308));
      (pr = e), (ls.dependencies = { lanes: 0, firstContext: e });
    } else pr = pr.next = e;
  return t;
}
var On = null;
function Lu(e) {
  On === null ? (On = [e]) : On.push(e);
}
function uh(e, t, n, r) {
  var i = t.interleaved;
  return i === null ? ((n.next = n), Lu(t)) : ((n.next = i.next), (i.next = n)), (t.interleaved = n), Bt(e, r);
}
function Bt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t), (n = e.alternate), n !== null && (n.childLanes |= t), (n = e), (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Jt = !1;
function Ru(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function ch(e, t) {
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
function Ot(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function cn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), G & 2)) {
    var i = r.pending;
    return i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)), (r.pending = t), Bt(e, n);
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), Lu(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    Bt(e, n)
  );
}
function zo(e, t, n) {
  if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), hu(e, n);
  }
}
function sf(e, t) {
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
    (n = { baseState: r.baseState, firstBaseUpdate: i, lastBaseUpdate: o, shared: r.shared, effects: r.effects }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate), e === null ? (n.firstBaseUpdate = t) : (e.next = t), (n.lastBaseUpdate = t);
}
function as(e, t, n, r) {
  var i = e.updateQueue;
  Jt = !1;
  var o = i.firstBaseUpdate,
    s = i.lastBaseUpdate,
    l = i.shared.pending;
  if (l !== null) {
    i.shared.pending = null;
    var a = l,
      u = a.next;
    (a.next = null), s === null ? (o = u) : (s.next = u), (s = a);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (l = c.lastBaseUpdate),
      l !== s && (l === null ? (c.firstBaseUpdate = u) : (l.next = u), (c.lastBaseUpdate = a)));
  }
  if (o !== null) {
    var f = i.baseState;
    (s = 0), (c = u = a = null), (l = o);
    do {
      var d = l.lane,
        h = l.eventTime;
      if ((r & d) === d) {
        c !== null &&
          (c = c.next = { eventTime: h, lane: 0, tag: l.tag, payload: l.payload, callback: l.callback, next: null });
        e: {
          var g = e,
            v = l;
          switch (((d = t), (h = n), v.tag)) {
            case 1:
              if (((g = v.payload), typeof g == "function")) {
                f = g.call(h, f, d);
                break e;
              }
              f = g;
              break e;
            case 3:
              g.flags = (g.flags & -65537) | 128;
            case 0:
              if (((g = v.payload), (d = typeof g == "function" ? g.call(h, f, d) : g), d == null)) break e;
              f = se({}, f, d);
              break e;
            case 2:
              Jt = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64), (d = i.effects), d === null ? (i.effects = [l]) : d.push(l));
      } else
        (h = { eventTime: h, lane: d, tag: l.tag, payload: l.payload, callback: l.callback, next: null }),
          c === null ? ((u = c = h), (a = f)) : (c = c.next = h),
          (s |= d);
      if (((l = l.next), l === null)) {
        if (((l = i.shared.pending), l === null)) break;
        (d = l), (l = d.next), (d.next = null), (i.lastBaseUpdate = d), (i.shared.pending = null);
      }
    } while (1);
    if (
      (c === null && (a = f),
      (i.baseState = a),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (s |= i.lane), (i = i.next);
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    (Wn |= s), (e.lanes = s), (e.memoizedState = f);
  }
}
function lf(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function")) throw Error(A(191, i));
        i.call(r);
      }
    }
}
var fh = new up.Component().refs;
function ka(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : se({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Fs = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Xn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ne(),
      i = dn(e),
      o = Ot(r, i);
    (o.payload = t), n != null && (o.callback = n), (t = cn(e, o, i)), t !== null && (ht(t, e, i, r), zo(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ne(),
      i = dn(e),
      o = Ot(r, i);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = cn(e, o, i)),
      t !== null && (ht(t, e, i, r), zo(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Ne(),
      r = dn(e),
      i = Ot(n, r);
    (i.tag = 2), t != null && (i.callback = t), (t = cn(e, i, r)), t !== null && (ht(t, e, r, n), zo(t, e, r));
  },
};
function af(e, t, n, r, i, o, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, s)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Di(n, r) || !Di(i, o)
      : !0
  );
}
function dh(e, t, n) {
  var r = !1,
    i = vn,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = ot(o))
      : ((i = Ie(t) ? $n : Ae.current), (r = t.contextTypes), (o = (r = r != null) ? Rr(e, i) : vn)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Fs),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function uf(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Fs.enqueueReplaceState(t, t.state, null);
}
function Pa(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = fh), Ru(e);
  var o = t.contextType;
  typeof o == "object" && o !== null ? (i.context = ot(o)) : ((o = Ie(t) ? $n : Ae.current), (i.context = Rr(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (ka(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(),
      t !== i.state && Fs.enqueueReplaceState(i, i.state, null),
      as(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function ni(e, t, n) {
  if (((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(A(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(A(147, e));
      var i = r,
        o = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o
        ? t.ref
        : ((t = function (s) {
            var l = i.refs;
            l === fh && (l = i.refs = {}), s === null ? delete l[o] : (l[o] = s);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(A(284));
    if (!n._owner) throw Error(A(290, e));
  }
  return e;
}
function Co(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(A(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)))
  );
}
function cf(e) {
  var t = e._init;
  return t(e._payload);
}
function ph(e) {
  function t(y, p) {
    if (e) {
      var m = y.deletions;
      m === null ? ((y.deletions = [p]), (y.flags |= 16)) : m.push(p);
    }
  }
  function n(y, p) {
    if (!e) return null;
    for (; p !== null; ) t(y, p), (p = p.sibling);
    return null;
  }
  function r(y, p) {
    for (y = new Map(); p !== null; ) p.key !== null ? y.set(p.key, p) : y.set(p.index, p), (p = p.sibling);
    return y;
  }
  function i(y, p) {
    return (y = pn(y, p)), (y.index = 0), (y.sibling = null), y;
  }
  function o(y, p, m) {
    return (
      (y.index = m),
      e
        ? ((m = y.alternate), m !== null ? ((m = m.index), m < p ? ((y.flags |= 2), p) : m) : ((y.flags |= 2), p))
        : ((y.flags |= 1048576), p)
    );
  }
  function s(y) {
    return e && y.alternate === null && (y.flags |= 2), y;
  }
  function l(y, p, m, w) {
    return p === null || p.tag !== 6 ? ((p = _l(m, y.mode, w)), (p.return = y), p) : ((p = i(p, m)), (p.return = y), p);
  }
  function a(y, p, m, w) {
    var S = m.type;
    return S === or
      ? c(y, p, m.props.children, w, m.key)
      : p !== null &&
        (p.elementType === S || (typeof S == "object" && S !== null && S.$$typeof === qt && cf(S) === p.type))
      ? ((w = i(p, m.props)), (w.ref = ni(y, p, m)), (w.return = y), w)
      : ((w = Wo(m.type, m.key, m.props, null, y.mode, w)), (w.ref = ni(y, p, m)), (w.return = y), w);
  }
  function u(y, p, m, w) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== m.containerInfo ||
      p.stateNode.implementation !== m.implementation
      ? ((p = Vl(m, y.mode, w)), (p.return = y), p)
      : ((p = i(p, m.children || [])), (p.return = y), p);
  }
  function c(y, p, m, w, S) {
    return p === null || p.tag !== 7
      ? ((p = In(m, y.mode, w, S)), (p.return = y), p)
      : ((p = i(p, m)), (p.return = y), p);
  }
  function f(y, p, m) {
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return (p = _l("" + p, y.mode, m)), (p.return = y), p;
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case co:
          return (m = Wo(p.type, p.key, p.props, null, y.mode, m)), (m.ref = ni(y, null, p)), (m.return = y), m;
        case ir:
          return (p = Vl(p, y.mode, m)), (p.return = y), p;
        case qt:
          var w = p._init;
          return f(y, w(p._payload), m);
      }
      if (ai(p) || Zr(p)) return (p = In(p, y.mode, m, null)), (p.return = y), p;
      Co(y, p);
    }
    return null;
  }
  function d(y, p, m, w) {
    var S = p !== null ? p.key : null;
    if ((typeof m == "string" && m !== "") || typeof m == "number") return S !== null ? null : l(y, p, "" + m, w);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case co:
          return m.key === S ? a(y, p, m, w) : null;
        case ir:
          return m.key === S ? u(y, p, m, w) : null;
        case qt:
          return (S = m._init), d(y, p, S(m._payload), w);
      }
      if (ai(m) || Zr(m)) return S !== null ? null : c(y, p, m, w, null);
      Co(y, m);
    }
    return null;
  }
  function h(y, p, m, w, S) {
    if ((typeof w == "string" && w !== "") || typeof w == "number") return (y = y.get(m) || null), l(p, y, "" + w, S);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case co:
          return (y = y.get(w.key === null ? m : w.key) || null), a(p, y, w, S);
        case ir:
          return (y = y.get(w.key === null ? m : w.key) || null), u(p, y, w, S);
        case qt:
          var E = w._init;
          return h(y, p, m, E(w._payload), S);
      }
      if (ai(w) || Zr(w)) return (y = y.get(m) || null), c(p, y, w, S, null);
      Co(p, w);
    }
    return null;
  }
  function g(y, p, m, w) {
    for (var S = null, E = null, T = p, k = (p = 0), M = null; T !== null && k < m.length; k++) {
      T.index > k ? ((M = T), (T = null)) : (M = T.sibling);
      var D = d(y, T, m[k], w);
      if (D === null) {
        T === null && (T = M);
        break;
      }
      e && T && D.alternate === null && t(y, T),
        (p = o(D, p, k)),
        E === null ? (S = D) : (E.sibling = D),
        (E = D),
        (T = M);
    }
    if (k === m.length) return n(y, T), ee && _n(y, k), S;
    if (T === null) {
      for (; k < m.length; k++)
        (T = f(y, m[k], w)), T !== null && ((p = o(T, p, k)), E === null ? (S = T) : (E.sibling = T), (E = T));
      return ee && _n(y, k), S;
    }
    for (T = r(y, T); k < m.length; k++)
      (M = h(T, y, k, m[k], w)),
        M !== null &&
          (e && M.alternate !== null && T.delete(M.key === null ? k : M.key),
          (p = o(M, p, k)),
          E === null ? (S = M) : (E.sibling = M),
          (E = M));
    return (
      e &&
        T.forEach(function (I) {
          return t(y, I);
        }),
      ee && _n(y, k),
      S
    );
  }
  function v(y, p, m, w) {
    var S = Zr(m);
    if (typeof S != "function") throw Error(A(150));
    if (((m = S.call(m)), m == null)) throw Error(A(151));
    for (var E = (S = null), T = p, k = (p = 0), M = null, D = m.next(); T !== null && !D.done; k++, D = m.next()) {
      T.index > k ? ((M = T), (T = null)) : (M = T.sibling);
      var I = d(y, T, D.value, w);
      if (I === null) {
        T === null && (T = M);
        break;
      }
      e && T && I.alternate === null && t(y, T),
        (p = o(I, p, k)),
        E === null ? (S = I) : (E.sibling = I),
        (E = I),
        (T = M);
    }
    if (D.done) return n(y, T), ee && _n(y, k), S;
    if (T === null) {
      for (; !D.done; k++, D = m.next())
        (D = f(y, D.value, w)), D !== null && ((p = o(D, p, k)), E === null ? (S = D) : (E.sibling = D), (E = D));
      return ee && _n(y, k), S;
    }
    for (T = r(y, T); !D.done; k++, D = m.next())
      (D = h(T, y, k, D.value, w)),
        D !== null &&
          (e && D.alternate !== null && T.delete(D.key === null ? k : D.key),
          (p = o(D, p, k)),
          E === null ? (S = D) : (E.sibling = D),
          (E = D));
    return (
      e &&
        T.forEach(function (Y) {
          return t(y, Y);
        }),
      ee && _n(y, k),
      S
    );
  }
  function P(y, p, m, w) {
    if (
      (typeof m == "object" && m !== null && m.type === or && m.key === null && (m = m.props.children),
      typeof m == "object" && m !== null)
    ) {
      switch (m.$$typeof) {
        case co:
          e: {
            for (var S = m.key, E = p; E !== null; ) {
              if (E.key === S) {
                if (((S = m.type), S === or)) {
                  if (E.tag === 7) {
                    n(y, E.sibling), (p = i(E, m.props.children)), (p.return = y), (y = p);
                    break e;
                  }
                } else if (
                  E.elementType === S ||
                  (typeof S == "object" && S !== null && S.$$typeof === qt && cf(S) === E.type)
                ) {
                  n(y, E.sibling), (p = i(E, m.props)), (p.ref = ni(y, E, m)), (p.return = y), (y = p);
                  break e;
                }
                n(y, E);
                break;
              } else t(y, E);
              E = E.sibling;
            }
            m.type === or
              ? ((p = In(m.props.children, y.mode, w, m.key)), (p.return = y), (y = p))
              : ((w = Wo(m.type, m.key, m.props, null, y.mode, w)), (w.ref = ni(y, p, m)), (w.return = y), (y = w));
          }
          return s(y);
        case ir:
          e: {
            for (E = m.key; p !== null; ) {
              if (p.key === E)
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === m.containerInfo &&
                  p.stateNode.implementation === m.implementation
                ) {
                  n(y, p.sibling), (p = i(p, m.children || [])), (p.return = y), (y = p);
                  break e;
                } else {
                  n(y, p);
                  break;
                }
              else t(y, p);
              p = p.sibling;
            }
            (p = Vl(m, y.mode, w)), (p.return = y), (y = p);
          }
          return s(y);
        case qt:
          return (E = m._init), P(y, p, E(m._payload), w);
      }
      if (ai(m)) return g(y, p, m, w);
      if (Zr(m)) return v(y, p, m, w);
      Co(y, m);
    }
    return (typeof m == "string" && m !== "") || typeof m == "number"
      ? ((m = "" + m),
        p !== null && p.tag === 6
          ? (n(y, p.sibling), (p = i(p, m)), (p.return = y), (y = p))
          : (n(y, p), (p = _l(m, y.mode, w)), (p.return = y), (y = p)),
        s(y))
      : n(y, p);
  }
  return P;
}
var Vr = ph(!0),
  hh = ph(!1),
  bi = {},
  kt = Pn(bi),
  ji = Pn(bi),
  Fi = Pn(bi);
function jn(e) {
  if (e === bi) throw Error(A(174));
  return e;
}
function _u(e, t) {
  switch ((Z(Fi, t), Z(ji, e), Z(kt, bi), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : na(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t), (t = e.namespaceURI || null), (e = e.tagName), (t = na(t, e));
  }
  J(kt), Z(kt, t);
}
function Dr() {
  J(kt), J(ji), J(Fi);
}
function mh(e) {
  jn(Fi.current);
  var t = jn(kt.current),
    n = na(t, e.type);
  t !== n && (Z(ji, e), Z(kt, n));
}
function Vu(e) {
  ji.current === e && (J(kt), J(ji));
}
var re = Pn(0);
function us(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")) return t;
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
var Pl = [];
function Du() {
  for (var e = 0; e < Pl.length; e++) Pl[e]._workInProgressVersionPrimary = null;
  Pl.length = 0;
}
var Io = Wt.ReactCurrentDispatcher,
  El = Wt.ReactCurrentBatchConfig,
  Hn = 0,
  oe = null,
  fe = null,
  me = null,
  cs = !1,
  gi = !1,
  zi = 0,
  Fg = 0;
function Ce() {
  throw Error(A(321));
}
function Nu(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!mt(e[n], t[n])) return !1;
  return !0;
}
function Mu(e, t, n, r, i, o) {
  if (
    ((Hn = o),
    (oe = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Io.current = e === null || e.memoizedState === null ? $g : Ug),
    (e = n(r, i)),
    gi)
  ) {
    o = 0;
    do {
      if (((gi = !1), (zi = 0), 25 <= o)) throw Error(A(301));
      (o += 1), (me = fe = null), (t.updateQueue = null), (Io.current = Hg), (e = n(r, i));
    } while (gi);
  }
  if (((Io.current = fs), (t = fe !== null && fe.next !== null), (Hn = 0), (me = fe = oe = null), (cs = !1), t))
    throw Error(A(300));
  return e;
}
function Ou() {
  var e = zi !== 0;
  return (zi = 0), e;
}
function wt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return me === null ? (oe.memoizedState = me = e) : (me = me.next = e), me;
}
function st() {
  if (fe === null) {
    var e = oe.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = fe.next;
  var t = me === null ? oe.memoizedState : me.next;
  if (t !== null) (me = t), (fe = e);
  else {
    if (e === null) throw Error(A(310));
    (fe = e),
      (e = {
        memoizedState: fe.memoizedState,
        baseState: fe.baseState,
        baseQueue: fe.baseQueue,
        queue: fe.queue,
        next: null,
      }),
      me === null ? (oe.memoizedState = me = e) : (me = me.next = e);
  }
  return me;
}
function Ii(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Tl(e) {
  var t = st(),
    n = t.queue;
  if (n === null) throw Error(A(311));
  n.lastRenderedReducer = e;
  var r = fe,
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
    var l = (s = null),
      a = null,
      u = o;
    do {
      var c = u.lane;
      if ((Hn & c) === c)
        a !== null &&
          (a = a.next =
            { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var f = { lane: c, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null };
        a === null ? ((l = a = f), (s = r)) : (a = a.next = f), (oe.lanes |= c), (Wn |= c);
      }
      u = u.next;
    } while (u !== null && u !== o);
    a === null ? (s = r) : (a.next = l),
      mt(r, t.memoizedState) || (Fe = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (o = i.lane), (oe.lanes |= o), (Wn |= o), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Al(e) {
  var t = st(),
    n = t.queue;
  if (n === null) throw Error(A(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var s = (i = i.next);
    do (o = e(o, s.action)), (s = s.next);
    while (s !== i);
    mt(o, t.memoizedState) || (Fe = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function yh() {}
function gh(e, t) {
  var n = oe,
    r = st(),
    i = t(),
    o = !mt(r.memoizedState, i);
  if (
    (o && ((r.memoizedState = i), (Fe = !0)),
    (r = r.queue),
    ju(xh.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (me !== null && me.memoizedState.tag & 1))
  ) {
    if (((n.flags |= 2048), Bi(9, wh.bind(null, n, r, i, t), void 0, null), ye === null)) throw Error(A(349));
    Hn & 30 || vh(n, t, i);
  }
  return i;
}
function vh(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = oe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }), (oe.updateQueue = t), (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function wh(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Sh(t) && Ch(e);
}
function xh(e, t, n) {
  return n(function () {
    Sh(t) && Ch(e);
  });
}
function Sh(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !mt(e, n);
  } catch {
    return !0;
  }
}
function Ch(e) {
  var t = Bt(e, 1);
  t !== null && ht(t, e, 1, -1);
}
function ff(e) {
  var t = wt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Ii, lastRenderedState: e }),
    (t.queue = e),
    (e = e.dispatch = Bg.bind(null, oe, e)),
    [t.memoizedState, e]
  );
}
function Bi(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = oe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }), (oe.updateQueue = t), (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null ? (t.lastEffect = e.next = e) : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function kh() {
  return st().memoizedState;
}
function Bo(e, t, n, r) {
  var i = wt();
  (oe.flags |= e), (i.memoizedState = Bi(1 | t, n, void 0, r === void 0 ? null : r));
}
function zs(e, t, n, r) {
  var i = st();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (fe !== null) {
    var s = fe.memoizedState;
    if (((o = s.destroy), r !== null && Nu(r, s.deps))) {
      i.memoizedState = Bi(t, n, o, r);
      return;
    }
  }
  (oe.flags |= e), (i.memoizedState = Bi(1 | t, n, o, r));
}
function df(e, t) {
  return Bo(8390656, 8, e, t);
}
function ju(e, t) {
  return zs(2048, 8, e, t);
}
function Ph(e, t) {
  return zs(4, 2, e, t);
}
function Eh(e, t) {
  return zs(4, 4, e, t);
}
function Th(e, t) {
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
function Ah(e, t, n) {
  return (n = n != null ? n.concat([e]) : null), zs(4, 4, Th.bind(null, t, e), n);
}
function Fu() {}
function Lh(e, t) {
  var n = st();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Nu(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
}
function Rh(e, t) {
  var n = st();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Nu(t, r[1]) ? r[0] : ((e = e()), (n.memoizedState = [e, t]), e);
}
function _h(e, t, n) {
  return Hn & 21
    ? (mt(n, t) || ((n = Np()), (oe.lanes |= n), (Wn |= n), (e.baseState = !0)), t)
    : (e.baseState && ((e.baseState = !1), (Fe = !0)), (e.memoizedState = n));
}
function zg(e, t) {
  var n = Q;
  (Q = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = El.transition;
  El.transition = {};
  try {
    e(!1), t();
  } finally {
    (Q = n), (El.transition = r);
  }
}
function Vh() {
  return st().memoizedState;
}
function Ig(e, t, n) {
  var r = dn(e);
  if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), Dh(e))) Nh(t, n);
  else if (((n = uh(e, t, n, r)), n !== null)) {
    var i = Ne();
    ht(n, e, r, i), Mh(n, t, r);
  }
}
function Bg(e, t, n) {
  var r = dn(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Dh(e)) Nh(t, i);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && ((o = t.lastRenderedReducer), o !== null))
      try {
        var s = t.lastRenderedState,
          l = o(s, n);
        if (((i.hasEagerState = !0), (i.eagerState = l), mt(l, s))) {
          var a = t.interleaved;
          a === null ? ((i.next = i), Lu(t)) : ((i.next = a.next), (a.next = i)), (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = uh(e, t, i, r)), n !== null && ((i = Ne()), ht(n, e, r, i), Mh(n, t, r));
  }
}
function Dh(e) {
  var t = e.alternate;
  return e === oe || (t !== null && t === oe);
}
function Nh(e, t) {
  gi = cs = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
}
function Mh(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), hu(e, n);
  }
}
var fs = {
    readContext: ot,
    useCallback: Ce,
    useContext: Ce,
    useEffect: Ce,
    useImperativeHandle: Ce,
    useInsertionEffect: Ce,
    useLayoutEffect: Ce,
    useMemo: Ce,
    useReducer: Ce,
    useRef: Ce,
    useState: Ce,
    useDebugValue: Ce,
    useDeferredValue: Ce,
    useTransition: Ce,
    useMutableSource: Ce,
    useSyncExternalStore: Ce,
    useId: Ce,
    unstable_isNewReconciler: !1,
  },
  $g = {
    readContext: ot,
    useCallback: function (e, t) {
      return (wt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: ot,
    useEffect: df,
    useImperativeHandle: function (e, t, n) {
      return (n = n != null ? n.concat([e]) : null), Bo(4194308, 4, Th.bind(null, t, e), n);
    },
    useLayoutEffect: function (e, t) {
      return Bo(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Bo(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = wt();
      return (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e;
    },
    useReducer: function (e, t, n) {
      var r = wt();
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
        (e = e.dispatch = Ig.bind(null, oe, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = wt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: ff,
    useDebugValue: Fu,
    useDeferredValue: function (e) {
      return (wt().memoizedState = e);
    },
    useTransition: function () {
      var e = ff(!1),
        t = e[0];
      return (e = zg.bind(null, e[1])), (wt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = oe,
        i = wt();
      if (ee) {
        if (n === void 0) throw Error(A(407));
        n = n();
      } else {
        if (((n = t()), ye === null)) throw Error(A(349));
        Hn & 30 || vh(r, t, n);
      }
      i.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (i.queue = o),
        df(xh.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        Bi(9, wh.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = wt(),
        t = ye.identifierPrefix;
      if (ee) {
        var n = Nt,
          r = Dt;
        (n = (r & ~(1 << (32 - pt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = zi++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Fg++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Ug = {
    readContext: ot,
    useCallback: Lh,
    useContext: ot,
    useEffect: ju,
    useImperativeHandle: Ah,
    useInsertionEffect: Ph,
    useLayoutEffect: Eh,
    useMemo: Rh,
    useReducer: Tl,
    useRef: kh,
    useState: function () {
      return Tl(Ii);
    },
    useDebugValue: Fu,
    useDeferredValue: function (e) {
      var t = st();
      return _h(t, fe.memoizedState, e);
    },
    useTransition: function () {
      var e = Tl(Ii)[0],
        t = st().memoizedState;
      return [e, t];
    },
    useMutableSource: yh,
    useSyncExternalStore: gh,
    useId: Vh,
    unstable_isNewReconciler: !1,
  },
  Hg = {
    readContext: ot,
    useCallback: Lh,
    useContext: ot,
    useEffect: ju,
    useImperativeHandle: Ah,
    useInsertionEffect: Ph,
    useLayoutEffect: Eh,
    useMemo: Rh,
    useReducer: Al,
    useRef: kh,
    useState: function () {
      return Al(Ii);
    },
    useDebugValue: Fu,
    useDeferredValue: function (e) {
      var t = st();
      return fe === null ? (t.memoizedState = e) : _h(t, fe.memoizedState, e);
    },
    useTransition: function () {
      var e = Al(Ii)[0],
        t = st().memoizedState;
      return [e, t];
    },
    useMutableSource: yh,
    useSyncExternalStore: gh,
    useId: Vh,
    unstable_isNewReconciler: !1,
  };
function Nr(e, t) {
  try {
    var n = "",
      r = t;
    do (n += gy(r)), (r = r.return);
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
function Ll(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ea(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Wg = typeof WeakMap == "function" ? WeakMap : Map;
function Oh(e, t, n) {
  (n = Ot(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      ps || ((ps = !0), (Oa = r)), Ea(e, t);
    }),
    n
  );
}
function jh(e, t, n) {
  (n = Ot(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        Ea(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        Ea(e, t), typeof r != "function" && (fn === null ? (fn = new Set([this])) : fn.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, { componentStack: s !== null ? s : "" });
      }),
    n
  );
}
function pf(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Wg();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = iv.bind(null, e, t, n)), t.then(e, e));
}
function hf(e) {
  do {
    var t;
    if (((t = e.tag === 13) && ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)), t)) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function mf(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 && (n.alternate === null ? (n.tag = 17) : ((t = Ot(-1, 1)), (t.tag = 2), cn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Kg = Wt.ReactCurrentOwner,
  Fe = !1;
function De(e, t, n, r) {
  t.child = e === null ? hh(t, null, n, r) : Vr(t, e.child, n, r);
}
function yf(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return (
    Pr(t, i),
    (r = Mu(e, t, n, r, o, i)),
    (n = Ou()),
    e !== null && !Fe
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~i), $t(e, t, i))
      : (ee && n && Cu(t), (t.flags |= 1), De(e, t, r, i), t.child)
  );
}
function gf(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !Ku(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), Fh(e, t, o, r, i))
      : ((e = Wo(n.type, null, r, t, t.mode, i)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  if (((o = e.child), !(e.lanes & i))) {
    var s = o.memoizedProps;
    if (((n = n.compare), (n = n !== null ? n : Di), n(s, r) && e.ref === t.ref)) return $t(e, t, i);
  }
  return (t.flags |= 1), (e = pn(o, r)), (e.ref = t.ref), (e.return = t), (t.child = e);
}
function Fh(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Di(o, r) && e.ref === t.ref)
      if (((Fe = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0)) e.flags & 131072 && (Fe = !0);
      else return (t.lanes = e.lanes), $t(e, t, i);
  }
  return Ta(e, t, n, r, i);
}
function zh(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1)) (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), Z(mr, He), (He |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
          (t.updateQueue = null),
          Z(mr, He),
          (He |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        Z(mr, He),
        (He |= r);
    }
  else o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n), Z(mr, He), (He |= r);
  return De(e, t, i, n), t.child;
}
function Ih(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) && ((t.flags |= 512), (t.flags |= 2097152));
}
function Ta(e, t, n, r, i) {
  var o = Ie(n) ? $n : Ae.current;
  return (
    (o = Rr(t, o)),
    Pr(t, i),
    (n = Mu(e, t, n, r, o, i)),
    (r = Ou()),
    e !== null && !Fe
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~i), $t(e, t, i))
      : (ee && r && Cu(t), (t.flags |= 1), De(e, t, n, i), t.child)
  );
}
function vf(e, t, n, r, i) {
  if (Ie(n)) {
    var o = !0;
    rs(t);
  } else o = !1;
  if ((Pr(t, i), t.stateNode === null)) $o(e, t), dh(t, n, r), Pa(t, n, r, i), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      l = t.memoizedProps;
    s.props = l;
    var a = s.context,
      u = n.contextType;
    typeof u == "object" && u !== null ? (u = ot(u)) : ((u = Ie(n) ? $n : Ae.current), (u = Rr(t, u)));
    var c = n.getDerivedStateFromProps,
      f = typeof c == "function" || typeof s.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function") ||
      ((l !== r || a !== u) && uf(t, s, r, u)),
      (Jt = !1);
    var d = t.memoizedState;
    (s.state = d),
      as(t, r, s, i),
      (a = t.memoizedState),
      l !== r || d !== a || ze.current || Jt
        ? (typeof c == "function" && (ka(t, n, c, r), (a = t.memoizedState)),
          (l = Jt || af(t, n, l, r, d, a, u))
            ? (f ||
                (typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" && s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (s.props = r),
          (s.state = a),
          (s.context = u),
          (r = l))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), (r = !1));
  } else {
    (s = t.stateNode),
      ch(e, t),
      (l = t.memoizedProps),
      (u = t.type === t.elementType ? l : ct(t.type, l)),
      (s.props = u),
      (f = t.pendingProps),
      (d = s.context),
      (a = n.contextType),
      typeof a == "object" && a !== null ? (a = ot(a)) : ((a = Ie(n) ? $n : Ae.current), (a = Rr(t, a)));
    var h = n.getDerivedStateFromProps;
    (c = typeof h == "function" || typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function") ||
      ((l !== f || d !== a) && uf(t, s, r, a)),
      (Jt = !1),
      (d = t.memoizedState),
      (s.state = d),
      as(t, r, s, i);
    var g = t.memoizedState;
    l !== f || d !== g || ze.current || Jt
      ? (typeof h == "function" && (ka(t, n, h, r), (g = t.memoizedState)),
        (u = Jt || af(t, n, u, r, d, g, a) || !1)
          ? (c ||
              (typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, g, a),
              typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, g, a)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (l === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (l === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = g)),
        (s.props = r),
        (s.state = g),
        (s.context = a),
        (r = u))
      : (typeof s.componentDidUpdate != "function" ||
          (l === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (l === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Aa(e, t, n, r, o, i);
}
function Aa(e, t, n, r, i, o) {
  Ih(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return i && nf(t, n, !1), $t(e, t, o);
  (r = t.stateNode), (Kg.current = t);
  var l = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s ? ((t.child = Vr(t, e.child, null, o)), (t.child = Vr(t, null, l, o))) : De(e, t, l, o),
    (t.memoizedState = r.state),
    i && nf(t, n, !0),
    t.child
  );
}
function Bh(e) {
  var t = e.stateNode;
  t.pendingContext ? tf(e, t.pendingContext, t.pendingContext !== t.context) : t.context && tf(e, t.context, !1),
    _u(e, t.containerInfo);
}
function wf(e, t, n, r, i) {
  return _r(), Pu(i), (t.flags |= 256), De(e, t, n, r), t.child;
}
var La = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ra(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function $h(e, t, n) {
  var r = t.pendingProps,
    i = re.current,
    o = !1,
    s = (t.flags & 128) !== 0,
    l;
  if (
    ((l = s) || (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    l ? ((o = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (i |= 1),
    Z(re, i & 1),
    e === null)
  )
    return (
      Sa(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1 ? (e.data === "$!" ? (t.lanes = 8) : (t.lanes = 1073741824)) : (t.lanes = 1), null)
        : ((s = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && o !== null ? ((o.childLanes = 0), (o.pendingProps = s)) : (o = $s(s, r, 0, null)),
              (e = In(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Ra(n)),
              (t.memoizedState = La),
              e)
            : zu(t, s))
    );
  if (((i = e.memoizedState), i !== null && ((l = i.dehydrated), l !== null))) return Gg(e, t, s, r, l, i, n);
  if (o) {
    (o = r.fallback), (s = t.mode), (i = e.child), (l = i.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== i
        ? ((r = t.child), (r.childLanes = 0), (r.pendingProps = a), (t.deletions = null))
        : ((r = pn(i, a)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      l !== null ? (o = pn(l, o)) : ((o = In(o, s, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (s = e.child.memoizedState),
      (s = s === null ? Ra(n) : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }),
      (o.memoizedState = s),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = La),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = pn(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null && ((n = t.deletions), n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function zu(e, t) {
  return (t = $s({ mode: "visible", children: t }, e.mode, 0, null)), (t.return = e), (e.child = t);
}
function ko(e, t, n, r) {
  return (
    r !== null && Pu(r),
    Vr(t, e.child, null, n),
    (e = zu(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Gg(e, t, n, r, i, o, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Ll(Error(A(422)))), ko(e, t, s, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (i = t.mode),
        (r = $s({ mode: "visible", children: r.children }, i, 0, null)),
        (o = In(o, i, s, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && Vr(t, e.child, null, s),
        (t.child.memoizedState = Ra(s)),
        (t.memoizedState = La),
        o);
  if (!(t.mode & 1)) return ko(e, t, s, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (o = Error(A(419))), (r = Ll(o, r, void 0)), ko(e, t, s, r);
  }
  if (((l = (s & e.childLanes) !== 0), Fe || l)) {
    if (((r = ye), r !== null)) {
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
        i !== 0 && i !== o.retryLane && ((o.retryLane = i), Bt(e, i), ht(r, e, i, -1));
    }
    return Wu(), (r = Ll(Error(A(421)))), ko(e, t, s, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128), (t.child = e.child), (t = ov.bind(null, e)), (i._reactRetry = t), null)
    : ((e = o.treeContext),
      (We = un(i.nextSibling)),
      (Ke = t),
      (ee = !0),
      (dt = null),
      e !== null && ((tt[nt++] = Dt), (tt[nt++] = Nt), (tt[nt++] = Un), (Dt = e.id), (Nt = e.overflow), (Un = t)),
      (t = zu(t, r.children)),
      (t.flags |= 4096),
      t);
}
function xf(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ca(e.return, t, n);
}
function Rl(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: i })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = i));
}
function Uh(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if ((De(e, t, r.children, n), (r = re.current), r & 2)) (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && xf(e, n, t);
        else if (e.tag === 19) xf(e, n, t);
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
  if ((Z(re, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate), e !== null && us(e) === null && (i = n), (n = n.sibling);
        (n = i),
          n === null ? ((i = t.child), (t.child = null)) : ((i = n.sibling), (n.sibling = null)),
          Rl(t, !1, i, n, o);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && us(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        Rl(t, !0, n, null, o);
        break;
      case "together":
        Rl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function $o(e, t) {
  !(t.mode & 1) && e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function $t(e, t, n) {
  if ((e !== null && (t.dependencies = e.dependencies), (Wn |= t.lanes), !(n & t.childLanes))) return null;
  if (e !== null && t.child !== e.child) throw Error(A(153));
  if (t.child !== null) {
    for (e = t.child, n = pn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
      (e = e.sibling), (n = n.sibling = pn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Qg(e, t, n) {
  switch (t.tag) {
    case 3:
      Bh(t), _r();
      break;
    case 5:
      mh(t);
      break;
    case 1:
      Ie(t.type) && rs(t);
      break;
    case 4:
      _u(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      Z(ss, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (Z(re, re.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? $h(e, t, n)
          : (Z(re, re.current & 1), (e = $t(e, t, n)), e !== null ? e.sibling : null);
      Z(re, re.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Uh(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null && ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        Z(re, re.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), zh(e, t, n);
  }
  return $t(e, t, n);
}
var Hh, _a, Wh, Kh;
Hh = function (e, t) {
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
_a = function () {};
Wh = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), jn(kt.current);
    var o = null;
    switch (n) {
      case "input":
        (i = ql(e, i)), (r = ql(e, r)), (o = []);
        break;
      case "select":
        (i = se({}, i, { value: void 0 })), (r = se({}, r, { value: void 0 })), (o = []);
        break;
      case "textarea":
        (i = ta(e, i)), (r = ta(e, r)), (o = []);
        break;
      default:
        typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = ts);
    }
    ra(n, r);
    var s;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var l = i[u];
          for (s in l) l.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Ei.hasOwnProperty(u) ? o || (o = []) : (o = o || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (((l = i != null ? i[u] : void 0), r.hasOwnProperty(u) && a !== l && (a != null || l != null)))
        if (u === "style")
          if (l) {
            for (s in l) !l.hasOwnProperty(s) || (a && a.hasOwnProperty(s)) || (n || (n = {}), (n[s] = ""));
            for (s in a) a.hasOwnProperty(s) && l[s] !== a[s] && (n || (n = {}), (n[s] = a[s]));
          } else n || (o || (o = []), o.push(u, n)), (n = a);
        else
          u === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (l = l ? l.__html : void 0),
              a != null && l !== a && (o = o || []).push(u, a))
            : u === "children"
            ? (typeof a != "string" && typeof a != "number") || (o = o || []).push(u, "" + a)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (Ei.hasOwnProperty(u)
                ? (a != null && u === "onScroll" && q("scroll", e), o || l === a || (o = []))
                : (o = o || []).push(u, a));
    }
    n && (o = o || []).push("style", n);
    var u = o;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Kh = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function ri(e, t) {
  if (!ee)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; ) t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; ) n.alternate !== null && (r = n), (n = n.sibling);
        r === null ? (t || e.tail === null ? (e.tail = null) : (e.tail.sibling = null)) : (r.sibling = null);
    }
}
function ke(e) {
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
      (n |= i.lanes | i.childLanes), (r |= i.subtreeFlags), (r |= i.flags), (i.return = e), (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Yg(e, t, n) {
  var r = t.pendingProps;
  switch ((ku(t), t.tag)) {
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
      return ke(t), null;
    case 1:
      return Ie(t.type) && ns(), ke(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Dr(),
        J(ze),
        J(Ae),
        Du(),
        r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (So(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), dt !== null && (za(dt), (dt = null)))),
        _a(e, t),
        ke(t),
        null
      );
    case 5:
      Vu(t);
      var i = jn(Fi.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Wh(e, t, n, r, i), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(A(166));
          return ke(t), null;
        }
        if (((e = jn(kt.current)), So(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[St] = t), (r[Oi] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              q("cancel", r), q("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              q("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < ci.length; i++) q(ci[i], r);
              break;
            case "source":
              q("error", r);
              break;
            case "img":
            case "image":
            case "link":
              q("error", r), q("load", r);
              break;
            case "details":
              q("toggle", r);
              break;
            case "input":
              Lc(r, o), q("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }), q("invalid", r);
              break;
            case "textarea":
              _c(r, o), q("invalid", r);
          }
          ra(n, o), (i = null);
          for (var s in o)
            if (o.hasOwnProperty(s)) {
              var l = o[s];
              s === "children"
                ? typeof l == "string"
                  ? r.textContent !== l &&
                    (o.suppressHydrationWarning !== !0 && xo(r.textContent, l, e), (i = ["children", l]))
                  : typeof l == "number" &&
                    r.textContent !== "" + l &&
                    (o.suppressHydrationWarning !== !0 && xo(r.textContent, l, e), (i = ["children", "" + l]))
                : Ei.hasOwnProperty(s) && l != null && s === "onScroll" && q("scroll", r);
            }
          switch (n) {
            case "input":
              fo(r), Rc(r, o, !0);
              break;
            case "textarea":
              fo(r), Vc(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = ts);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = vp(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")), (e.innerHTML = "<script></script>"), (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = s.createElement(n, { is: r.is }))
                : ((e = s.createElement(n)),
                  n === "select" && ((s = e), r.multiple ? (s.multiple = !0) : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[St] = t),
            (e[Oi] = r),
            Hh(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = ia(n, r)), n)) {
              case "dialog":
                q("cancel", e), q("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                q("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < ci.length; i++) q(ci[i], e);
                i = r;
                break;
              case "source":
                q("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                q("error", e), q("load", e), (i = r);
                break;
              case "details":
                q("toggle", e), (i = r);
                break;
              case "input":
                Lc(e, r), (i = ql(e, r)), q("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }), (i = se({}, r, { value: void 0 })), q("invalid", e);
                break;
              case "textarea":
                _c(e, r), (i = ta(e, r)), q("invalid", e);
                break;
              default:
                i = r;
            }
            ra(n, i), (l = i);
            for (o in l)
              if (l.hasOwnProperty(o)) {
                var a = l[o];
                o === "style"
                  ? Sp(e, a)
                  : o === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && wp(e, a))
                  : o === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && Ti(e, a)
                    : typeof a == "number" && Ti(e, "" + a)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (Ei.hasOwnProperty(o)
                      ? a != null && o === "onScroll" && q("scroll", e)
                      : a != null && au(e, o, a, s));
              }
            switch (n) {
              case "input":
                fo(e), Rc(e, r, !1);
                break;
              case "textarea":
                fo(e), Vc(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + gn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? xr(e, !!r.multiple, o, !1)
                    : r.defaultValue != null && xr(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = ts);
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
      return ke(t), null;
    case 6:
      if (e && t.stateNode != null) Kh(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(A(166));
        if (((n = jn(Fi.current)), jn(kt.current), So(t))) {
          if (
            ((r = t.stateNode), (n = t.memoizedProps), (r[St] = t), (o = r.nodeValue !== n) && ((e = Ke), e !== null))
          )
            switch (e.tag) {
              case 3:
                xo(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && xo(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)), (r[St] = t), (t.stateNode = r);
      }
      return ke(t), null;
    case 13:
      if (
        (J(re), (r = t.memoizedState), e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ee && We !== null && t.mode & 1 && !(t.flags & 128)) ah(), _r(), (t.flags |= 98560), (o = !1);
        else if (((o = So(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(A(318));
            if (((o = t.memoizedState), (o = o !== null ? o.dehydrated : null), !o)) throw Error(A(317));
            o[St] = t;
          } else _r(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ke(t), (o = !1);
        } else dt !== null && (za(dt), (dt = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192), t.mode & 1 && (e === null || re.current & 1 ? pe === 0 && (pe = 3) : Wu())),
          t.updateQueue !== null && (t.flags |= 4),
          ke(t),
          null);
    case 4:
      return Dr(), _a(e, t), e === null && Ni(t.stateNode.containerInfo), ke(t), null;
    case 10:
      return Au(t.type._context), ke(t), null;
    case 17:
      return Ie(t.type) && ns(), ke(t), null;
    case 19:
      if ((J(re), (o = t.memoizedState), o === null)) return ke(t), null;
      if (((r = (t.flags & 128) !== 0), (s = o.rendering), s === null))
        if (r) ri(o, !1);
        else {
          if (pe !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = us(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    ri(o, !1),
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
                        (o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })),
                    (n = n.sibling);
                return Z(re, (re.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null && ae() > Mr && ((t.flags |= 128), (r = !0), ri(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = us(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              ri(o, !0),
              o.tail === null && o.tailMode === "hidden" && !s.alternate && !ee)
            )
              return ke(t), null;
          } else
            2 * ae() - o.renderingStartTime > Mr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), ri(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = o.last), n !== null ? (n.sibling = s) : (t.child = s), (o.last = s));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = ae()),
          (t.sibling = null),
          (n = re.current),
          Z(re, r ? (n & 1) | 2 : n & 1),
          t)
        : (ke(t), null);
    case 22:
    case 23:
      return (
        Hu(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1 ? He & 1073741824 && (ke(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ke(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(A(156, t.tag));
}
function Xg(e, t) {
  switch ((ku(t), t.tag)) {
    case 1:
      return Ie(t.type) && ns(), (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
    case 3:
      return (
        Dr(), J(ze), J(Ae), Du(), (e = t.flags), e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Vu(t), null;
    case 13:
      if ((J(re), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(A(340));
        _r();
      }
      return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
    case 19:
      return J(re), null;
    case 4:
      return Dr(), null;
    case 10:
      return Au(t.type._context), null;
    case 22:
    case 23:
      return Hu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Po = !1,
  Pe = !1,
  bg = typeof WeakSet == "function" ? WeakSet : Set,
  V = null;
function hr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        le(e, t, r);
      }
    else n.current = null;
}
function Va(e, t, n) {
  try {
    n();
  } catch (r) {
    le(e, t, r);
  }
}
var Sf = !1;
function Zg(e, t) {
  if (((ha = qo), (e = Xp()), Su(e))) {
    if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
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
            l = -1,
            a = -1,
            u = 0,
            c = 0,
            f = e,
            d = null;
          t: for (;;) {
            for (
              var h;
              f !== n || (i !== 0 && f.nodeType !== 3) || (l = s + i),
                f !== o || (r !== 0 && f.nodeType !== 3) || (a = s + r),
                f.nodeType === 3 && (s += f.nodeValue.length),
                (h = f.firstChild) !== null;

            )
              (d = f), (f = h);
            for (;;) {
              if (f === e) break t;
              if ((d === n && ++u === i && (l = s), d === o && ++c === r && (a = s), (h = f.nextSibling) !== null))
                break;
              (f = d), (d = f.parentNode);
            }
            f = h;
          }
          n = l === -1 || a === -1 ? null : { start: l, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (ma = { focusedElem: e, selectionRange: n }, qo = !1, V = t; V !== null; )
    if (((t = V), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)) (e.return = t), (V = e);
    else
      for (; V !== null; ) {
        t = V;
        try {
          var g = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (g !== null) {
                  var v = g.memoizedProps,
                    P = g.memoizedState,
                    y = t.stateNode,
                    p = y.getSnapshotBeforeUpdate(t.elementType === t.type ? v : ct(t.type, v), P);
                  y.__reactInternalSnapshotBeforeUpdate = p;
                }
                break;
              case 3:
                var m = t.stateNode.containerInfo;
                m.nodeType === 1
                  ? (m.textContent = "")
                  : m.nodeType === 9 && m.documentElement && m.removeChild(m.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(A(163));
            }
        } catch (w) {
          le(t, t.return, w);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (V = e);
          break;
        }
        V = t.return;
      }
  return (g = Sf), (Sf = !1), g;
}
function vi(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        (i.destroy = void 0), o !== void 0 && Va(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Is(e, t) {
  if (((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
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
function Da(e) {
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
function Gh(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Gh(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode), t !== null && (delete t[St], delete t[Oi], delete t[va], delete t[Ng], delete t[Mg])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Qh(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Cf(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Qh(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Na(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8 ? ((t = n.parentNode), t.insertBefore(e, n)) : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = ts));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Na(e, t, n), e = e.sibling; e !== null; ) Na(e, t, n), (e = e.sibling);
}
function Ma(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ma(e, t, n), e = e.sibling; e !== null; ) Ma(e, t, n), (e = e.sibling);
}
var ve = null,
  ft = !1;
function bt(e, t, n) {
  for (n = n.child; n !== null; ) Yh(e, t, n), (n = n.sibling);
}
function Yh(e, t, n) {
  if (Ct && typeof Ct.onCommitFiberUnmount == "function")
    try {
      Ct.onCommitFiberUnmount(Vs, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Pe || hr(n, t);
    case 6:
      var r = ve,
        i = ft;
      (ve = null),
        bt(e, t, n),
        (ve = r),
        (ft = i),
        ve !== null &&
          (ft
            ? ((e = ve), (n = n.stateNode), e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ve.removeChild(n.stateNode));
      break;
    case 18:
      ve !== null &&
        (ft
          ? ((e = ve), (n = n.stateNode), e.nodeType === 8 ? Cl(e.parentNode, n) : e.nodeType === 1 && Cl(e, n), _i(e))
          : Cl(ve, n.stateNode));
      break;
    case 4:
      (r = ve), (i = ft), (ve = n.stateNode.containerInfo), (ft = !0), bt(e, t, n), (ve = r), (ft = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Pe && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
        i = r = r.next;
        do {
          var o = i,
            s = o.destroy;
          (o = o.tag), s !== void 0 && (o & 2 || o & 4) && Va(n, t, s), (i = i.next);
        } while (i !== r);
      }
      bt(e, t, n);
      break;
    case 1:
      if (!Pe && (hr(n, t), (r = n.stateNode), typeof r.componentWillUnmount == "function"))
        try {
          (r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount();
        } catch (l) {
          le(n, t, l);
        }
      bt(e, t, n);
      break;
    case 21:
      bt(e, t, n);
      break;
    case 22:
      n.mode & 1 ? ((Pe = (r = Pe) || n.memoizedState !== null), bt(e, t, n), (Pe = r)) : bt(e, t, n);
      break;
    default:
      bt(e, t, n);
  }
}
function kf(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new bg()),
      t.forEach(function (r) {
        var i = sv.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function ut(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = e,
          s = t,
          l = s;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (ve = l.stateNode), (ft = !1);
              break e;
            case 3:
              (ve = l.stateNode.containerInfo), (ft = !0);
              break e;
            case 4:
              (ve = l.stateNode.containerInfo), (ft = !0);
              break e;
          }
          l = l.return;
        }
        if (ve === null) throw Error(A(160));
        Yh(o, s, i), (ve = null), (ft = !1);
        var a = i.alternate;
        a !== null && (a.return = null), (i.return = null);
      } catch (u) {
        le(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Xh(t, e), (t = t.sibling);
}
function Xh(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((ut(t, e), vt(e), r & 4)) {
        try {
          vi(3, e, e.return), Is(3, e);
        } catch (v) {
          le(e, e.return, v);
        }
        try {
          vi(5, e, e.return);
        } catch (v) {
          le(e, e.return, v);
        }
      }
      break;
    case 1:
      ut(t, e), vt(e), r & 512 && n !== null && hr(n, n.return);
      break;
    case 5:
      if ((ut(t, e), vt(e), r & 512 && n !== null && hr(n, n.return), e.flags & 32)) {
        var i = e.stateNode;
        try {
          Ti(i, "");
        } catch (v) {
          le(e, e.return, v);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          s = n !== null ? n.memoizedProps : o,
          l = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            l === "input" && o.type === "radio" && o.name != null && yp(i, o), ia(l, s);
            var u = ia(l, o);
            for (s = 0; s < a.length; s += 2) {
              var c = a[s],
                f = a[s + 1];
              c === "style"
                ? Sp(i, f)
                : c === "dangerouslySetInnerHTML"
                ? wp(i, f)
                : c === "children"
                ? Ti(i, f)
                : au(i, c, f, u);
            }
            switch (l) {
              case "input":
                Jl(i, o);
                break;
              case "textarea":
                gp(i, o);
                break;
              case "select":
                var d = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var h = o.value;
                h != null
                  ? xr(i, !!o.multiple, h, !1)
                  : d !== !!o.multiple &&
                    (o.defaultValue != null
                      ? xr(i, !!o.multiple, o.defaultValue, !0)
                      : xr(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[Oi] = o;
          } catch (v) {
            le(e, e.return, v);
          }
      }
      break;
    case 6:
      if ((ut(t, e), vt(e), r & 4)) {
        if (e.stateNode === null) throw Error(A(162));
        (i = e.stateNode), (o = e.memoizedProps);
        try {
          i.nodeValue = o;
        } catch (v) {
          le(e, e.return, v);
        }
      }
      break;
    case 3:
      if ((ut(t, e), vt(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
        try {
          _i(t.containerInfo);
        } catch (v) {
          le(e, e.return, v);
        }
      break;
    case 4:
      ut(t, e), vt(e);
      break;
    case 13:
      ut(t, e),
        vt(e),
        (i = e.child),
        i.flags & 8192 &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o || (i.alternate !== null && i.alternate.memoizedState !== null) || ($u = ae())),
        r & 4 && kf(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Pe = (u = Pe) || c), ut(t, e), (Pe = u)) : ut(t, e),
        vt(e),
        r & 8192)
      ) {
        if (((u = e.memoizedState !== null), (e.stateNode.isHidden = u) && !c && e.mode & 1))
          for (V = e, c = e.child; c !== null; ) {
            for (f = V = c; V !== null; ) {
              switch (((d = V), (h = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  vi(4, d, d.return);
                  break;
                case 1:
                  hr(d, d.return);
                  var g = d.stateNode;
                  if (typeof g.componentWillUnmount == "function") {
                    (r = d), (n = d.return);
                    try {
                      (t = r), (g.props = t.memoizedProps), (g.state = t.memoizedState), g.componentWillUnmount();
                    } catch (v) {
                      le(r, n, v);
                    }
                  }
                  break;
                case 5:
                  hr(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    Ef(f);
                    continue;
                  }
              }
              h !== null ? ((h.return = d), (V = h)) : Ef(f);
            }
            c = c.sibling;
          }
        e: for (c = null, f = e; ; ) {
          if (f.tag === 5) {
            if (c === null) {
              c = f;
              try {
                (i = f.stateNode),
                  u
                    ? ((o = i.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((l = f.stateNode),
                      (a = f.memoizedProps.style),
                      (s = a != null && a.hasOwnProperty("display") ? a.display : null),
                      (l.style.display = xp("display", s)));
              } catch (v) {
                le(e, e.return, v);
              }
            }
          } else if (f.tag === 6) {
            if (c === null)
              try {
                f.stateNode.nodeValue = u ? "" : f.memoizedProps;
              } catch (v) {
                le(e, e.return, v);
              }
          } else if (((f.tag !== 22 && f.tag !== 23) || f.memoizedState === null || f === e) && f.child !== null) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            c === f && (c = null), (f = f.return);
          }
          c === f && (c = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      ut(t, e), vt(e), r & 4 && kf(e);
      break;
    case 21:
      break;
    default:
      ut(t, e), vt(e);
  }
}
function vt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Qh(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(A(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Ti(i, ""), (r.flags &= -33));
          var o = Cf(e);
          Ma(e, o, i);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            l = Cf(e);
          Na(e, l, s);
          break;
        default:
          throw Error(A(161));
      }
    } catch (a) {
      le(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function qg(e, t, n) {
  (V = e), bh(e);
}
function bh(e, t, n) {
  for (var r = (e.mode & 1) !== 0; V !== null; ) {
    var i = V,
      o = i.child;
    if (i.tag === 22 && r) {
      var s = i.memoizedState !== null || Po;
      if (!s) {
        var l = i.alternate,
          a = (l !== null && l.memoizedState !== null) || Pe;
        l = Po;
        var u = Pe;
        if (((Po = s), (Pe = a) && !u))
          for (V = i; V !== null; )
            (s = V),
              (a = s.child),
              s.tag === 22 && s.memoizedState !== null ? Tf(i) : a !== null ? ((a.return = s), (V = a)) : Tf(i);
        for (; o !== null; ) (V = o), bh(o), (o = o.sibling);
        (V = i), (Po = l), (Pe = u);
      }
      Pf(e);
    } else i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (V = o)) : Pf(e);
  }
}
function Pf(e) {
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
              Pe || Is(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Pe)
                if (n === null) r.componentDidMount();
                else {
                  var i = t.elementType === t.type ? n.memoizedProps : ct(t.type, n.memoizedProps);
                  r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var o = t.updateQueue;
              o !== null && lf(t, o, r);
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
                lf(t, s, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
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
                    var f = c.dehydrated;
                    f !== null && _i(f);
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
              throw Error(A(163));
          }
        Pe || (t.flags & 512 && Da(t));
      } catch (d) {
        le(t, t.return, d);
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
function Ef(e) {
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
function Tf(e) {
  for (; V !== null; ) {
    var t = V;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Is(4, t);
          } catch (a) {
            le(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              le(t, i, a);
            }
          }
          var o = t.return;
          try {
            Da(t);
          } catch (a) {
            le(t, o, a);
          }
          break;
        case 5:
          var s = t.return;
          try {
            Da(t);
          } catch (a) {
            le(t, s, a);
          }
      }
    } catch (a) {
      le(t, t.return, a);
    }
    if (t === e) {
      V = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (V = l);
      break;
    }
    V = t.return;
  }
}
var Jg = Math.ceil,
  ds = Wt.ReactCurrentDispatcher,
  Iu = Wt.ReactCurrentOwner,
  it = Wt.ReactCurrentBatchConfig,
  G = 0,
  ye = null,
  ce = null,
  we = 0,
  He = 0,
  mr = Pn(0),
  pe = 0,
  $i = null,
  Wn = 0,
  Bs = 0,
  Bu = 0,
  wi = null,
  je = null,
  $u = 0,
  Mr = 1 / 0,
  _t = null,
  ps = !1,
  Oa = null,
  fn = null,
  Eo = !1,
  on = null,
  hs = 0,
  xi = 0,
  ja = null,
  Uo = -1,
  Ho = 0;
function Ne() {
  return G & 6 ? ae() : Uo !== -1 ? Uo : (Uo = ae());
}
function dn(e) {
  return e.mode & 1
    ? G & 2 && we !== 0
      ? we & -we
      : jg.transition !== null
      ? (Ho === 0 && (Ho = Np()), Ho)
      : ((e = Q), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Bp(e.type))), e)
    : 1;
}
function ht(e, t, n, r) {
  if (50 < xi) throw ((xi = 0), (ja = null), Error(A(185)));
  Qi(e, n, r),
    (!(G & 2) || e !== ye) &&
      (e === ye && (!(G & 2) && (Bs |= n), pe === 4 && nn(e, we)),
      Be(e, r),
      n === 1 && G === 0 && !(t.mode & 1) && ((Mr = ae() + 500), js && En()));
}
function Be(e, t) {
  var n = e.callbackNode;
  jy(e, t);
  var r = Zo(e, e === ye ? we : 0);
  if (r === 0) n !== null && Mc(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Mc(n), t === 1))
      e.tag === 0 ? Og(Af.bind(null, e)) : oh(Af.bind(null, e)),
        Vg(function () {
          !(G & 6) && En();
        }),
        (n = null);
    else {
      switch (Mp(r)) {
        case 1:
          n = pu;
          break;
        case 4:
          n = Vp;
          break;
        case 16:
          n = bo;
          break;
        case 536870912:
          n = Dp;
          break;
        default:
          n = bo;
      }
      n = im(n, Zh.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Zh(e, t) {
  if (((Uo = -1), (Ho = 0), G & 6)) throw Error(A(327));
  var n = e.callbackNode;
  if (Er() && e.callbackNode !== n) return null;
  var r = Zo(e, e === ye ? we : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = ms(e, r);
  else {
    t = r;
    var i = G;
    G |= 2;
    var o = Jh();
    (ye !== e || we !== t) && ((_t = null), (Mr = ae() + 500), zn(e, t));
    do
      try {
        nv();
        break;
      } catch (l) {
        qh(e, l);
      }
    while (1);
    Tu(), (ds.current = o), (G = i), ce !== null ? (t = 0) : ((ye = null), (we = 0), (t = pe));
  }
  if (t !== 0) {
    if ((t === 2 && ((i = ua(e)), i !== 0 && ((r = i), (t = Fa(e, i)))), t === 1))
      throw ((n = $i), zn(e, 0), nn(e, r), Be(e, ae()), n);
    if (t === 6) nn(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !ev(i) &&
          ((t = ms(e, r)), t === 2 && ((o = ua(e)), o !== 0 && ((r = o), (t = Fa(e, o)))), t === 1))
      )
        throw ((n = $i), zn(e, 0), nn(e, r), Be(e, ae()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(A(345));
        case 2:
          Vn(e, je, _t);
          break;
        case 3:
          if ((nn(e, r), (r & 130023424) === r && ((t = $u + 500 - ae()), 10 < t))) {
            if (Zo(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              Ne(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = ga(Vn.bind(null, e, je, _t), t);
            break;
          }
          Vn(e, je, _t);
          break;
        case 4:
          if ((nn(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var s = 31 - pt(r);
            (o = 1 << s), (s = t[s]), s > i && (i = s), (r &= ~o);
          }
          if (
            ((r = i),
            (r = ae() - r),
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
                : 1960 * Jg(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = ga(Vn.bind(null, e, je, _t), r);
            break;
          }
          Vn(e, je, _t);
          break;
        case 5:
          Vn(e, je, _t);
          break;
        default:
          throw Error(A(329));
      }
    }
  }
  return Be(e, ae()), e.callbackNode === n ? Zh.bind(null, e) : null;
}
function Fa(e, t) {
  var n = wi;
  return (
    e.current.memoizedState.isDehydrated && (zn(e, t).flags |= 256),
    (e = ms(e, t)),
    e !== 2 && ((t = je), (je = n), t !== null && za(t)),
    e
  );
}
function za(e) {
  je === null ? (je = e) : je.push.apply(je, e);
}
function ev(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!mt(o(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null)) (n.return = t), (t = n);
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
function nn(e, t) {
  for (t &= ~Bu, t &= ~Bs, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - pt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Af(e) {
  if (G & 6) throw Error(A(327));
  Er();
  var t = Zo(e, 0);
  if (!(t & 1)) return Be(e, ae()), null;
  var n = ms(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ua(e);
    r !== 0 && ((t = r), (n = Fa(e, r)));
  }
  if (n === 1) throw ((n = $i), zn(e, 0), nn(e, t), Be(e, ae()), n);
  if (n === 6) throw Error(A(345));
  return (e.finishedWork = e.current.alternate), (e.finishedLanes = t), Vn(e, je, _t), Be(e, ae()), null;
}
function Uu(e, t) {
  var n = G;
  G |= 1;
  try {
    return e(t);
  } finally {
    (G = n), G === 0 && ((Mr = ae() + 500), js && En());
  }
}
function Kn(e) {
  on !== null && on.tag === 0 && !(G & 6) && Er();
  var t = G;
  G |= 1;
  var n = it.transition,
    r = Q;
  try {
    if (((it.transition = null), (Q = 1), e)) return e();
  } finally {
    (Q = r), (it.transition = n), (G = t), !(G & 6) && En();
  }
}
function Hu() {
  (He = mr.current), J(mr);
}
function zn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), _g(n)), ce !== null))
    for (n = ce.return; n !== null; ) {
      var r = n;
      switch ((ku(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && ns();
          break;
        case 3:
          Dr(), J(ze), J(Ae), Du();
          break;
        case 5:
          Vu(r);
          break;
        case 4:
          Dr();
          break;
        case 13:
          J(re);
          break;
        case 19:
          J(re);
          break;
        case 10:
          Au(r.type._context);
          break;
        case 22:
        case 23:
          Hu();
      }
      n = n.return;
    }
  if (
    ((ye = e),
    (ce = e = pn(e.current, null)),
    (we = He = t),
    (pe = 0),
    ($i = null),
    (Bu = Bs = Wn = 0),
    (je = wi = null),
    On !== null)
  ) {
    for (t = 0; t < On.length; t++)
      if (((n = On[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          o = n.pending;
        if (o !== null) {
          var s = o.next;
          (o.next = i), (r.next = s);
        }
        n.pending = r;
      }
    On = null;
  }
  return e;
}
function qh(e, t) {
  do {
    var n = ce;
    try {
      if ((Tu(), (Io.current = fs), cs)) {
        for (var r = oe.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        cs = !1;
      }
      if (
        ((Hn = 0), (me = fe = oe = null), (gi = !1), (zi = 0), (Iu.current = null), n === null || n.return === null)
      ) {
        (pe = 1), ($i = t), (ce = null);
        break;
      }
      e: {
        var o = e,
          s = n.return,
          l = n,
          a = t;
        if (((t = we), (l.flags |= 32768), a !== null && typeof a == "object" && typeof a.then == "function")) {
          var u = a,
            c = l,
            f = c.tag;
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var d = c.alternate;
            d
              ? ((c.updateQueue = d.updateQueue), (c.memoizedState = d.memoizedState), (c.lanes = d.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var h = hf(s);
          if (h !== null) {
            (h.flags &= -257), mf(h, s, l, o, t), h.mode & 1 && pf(o, u, t), (t = h), (a = u);
            var g = t.updateQueue;
            if (g === null) {
              var v = new Set();
              v.add(a), (t.updateQueue = v);
            } else g.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              pf(o, u, t), Wu();
              break e;
            }
            a = Error(A(426));
          }
        } else if (ee && l.mode & 1) {
          var P = hf(s);
          if (P !== null) {
            !(P.flags & 65536) && (P.flags |= 256), mf(P, s, l, o, t), Pu(Nr(a, l));
            break e;
          }
        }
        (o = a = Nr(a, l)), pe !== 4 && (pe = 2), wi === null ? (wi = [o]) : wi.push(o), (o = s);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var y = Oh(o, a, t);
              sf(o, y);
              break e;
            case 1:
              l = a;
              var p = o.type,
                m = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof p.getDerivedStateFromError == "function" ||
                  (m !== null && typeof m.componentDidCatch == "function" && (fn === null || !fn.has(m))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var w = jh(o, l, t);
                sf(o, w);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      tm(n);
    } catch (S) {
      (t = S), ce === n && n !== null && (ce = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function Jh() {
  var e = ds.current;
  return (ds.current = fs), e === null ? fs : e;
}
function Wu() {
  (pe === 0 || pe === 3 || pe === 2) && (pe = 4), ye === null || (!(Wn & 268435455) && !(Bs & 268435455)) || nn(ye, we);
}
function ms(e, t) {
  var n = G;
  G |= 2;
  var r = Jh();
  (ye !== e || we !== t) && ((_t = null), zn(e, t));
  do
    try {
      tv();
      break;
    } catch (i) {
      qh(e, i);
    }
  while (1);
  if ((Tu(), (G = n), (ds.current = r), ce !== null)) throw Error(A(261));
  return (ye = null), (we = 0), pe;
}
function tv() {
  for (; ce !== null; ) em(ce);
}
function nv() {
  for (; ce !== null && !Ay(); ) em(ce);
}
function em(e) {
  var t = rm(e.alternate, e, He);
  (e.memoizedProps = e.pendingProps), t === null ? tm(e) : (ce = t), (Iu.current = null);
}
function tm(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Xg(n, t)), n !== null)) {
        (n.flags &= 32767), (ce = n);
        return;
      }
      if (e !== null) (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (pe = 6), (ce = null);
        return;
      }
    } else if (((n = Yg(n, t, He)), n !== null)) {
      ce = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ce = t;
      return;
    }
    ce = t = e;
  } while (t !== null);
  pe === 0 && (pe = 5);
}
function Vn(e, t, n) {
  var r = Q,
    i = it.transition;
  try {
    (it.transition = null), (Q = 1), rv(e, t, n, r);
  } finally {
    (it.transition = i), (Q = r);
  }
  return null;
}
function rv(e, t, n, r) {
  do Er();
  while (on !== null);
  if (G & 6) throw Error(A(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(A(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (Fy(e, o),
    e === ye && ((ce = ye = null), (we = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Eo ||
      ((Eo = !0),
      im(bo, function () {
        return Er(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = it.transition), (it.transition = null);
    var s = Q;
    Q = 1;
    var l = G;
    (G |= 4),
      (Iu.current = null),
      Zg(e, n),
      Xh(n, e),
      kg(ma),
      (qo = !!ha),
      (ma = ha = null),
      (e.current = n),
      qg(n),
      Ly(),
      (G = l),
      (Q = s),
      (it.transition = o);
  } else e.current = n;
  if (
    (Eo && ((Eo = !1), (on = e), (hs = i)),
    (o = e.pendingLanes),
    o === 0 && (fn = null),
    Vy(n.stateNode),
    Be(e, ae()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (ps) throw ((ps = !1), (e = Oa), (Oa = null), e);
  return (
    hs & 1 && e.tag !== 0 && Er(),
    (o = e.pendingLanes),
    o & 1 ? (e === ja ? xi++ : ((xi = 0), (ja = e))) : (xi = 0),
    En(),
    null
  );
}
function Er() {
  if (on !== null) {
    var e = Mp(hs),
      t = it.transition,
      n = Q;
    try {
      if (((it.transition = null), (Q = 16 > e ? 16 : e), on === null)) var r = !1;
      else {
        if (((e = on), (on = null), (hs = 0), G & 6)) throw Error(A(331));
        var i = G;
        for (G |= 4, V = e.current; V !== null; ) {
          var o = V,
            s = o.child;
          if (V.flags & 16) {
            var l = o.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var u = l[a];
                for (V = u; V !== null; ) {
                  var c = V;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      vi(8, c, o);
                  }
                  var f = c.child;
                  if (f !== null) (f.return = c), (V = f);
                  else
                    for (; V !== null; ) {
                      c = V;
                      var d = c.sibling,
                        h = c.return;
                      if ((Gh(c), c === u)) {
                        V = null;
                        break;
                      }
                      if (d !== null) {
                        (d.return = h), (V = d);
                        break;
                      }
                      V = h;
                    }
                }
              }
              var g = o.alternate;
              if (g !== null) {
                var v = g.child;
                if (v !== null) {
                  g.child = null;
                  do {
                    var P = v.sibling;
                    (v.sibling = null), (v = P);
                  } while (v !== null);
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
                    vi(9, o, o.return);
                }
              var y = o.sibling;
              if (y !== null) {
                (y.return = o.return), (V = y);
                break e;
              }
              V = o.return;
            }
        }
        var p = e.current;
        for (V = p; V !== null; ) {
          s = V;
          var m = s.child;
          if (s.subtreeFlags & 2064 && m !== null) (m.return = s), (V = m);
          else
            e: for (s = p; V !== null; ) {
              if (((l = V), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Is(9, l);
                  }
                } catch (S) {
                  le(l, l.return, S);
                }
              if (l === s) {
                V = null;
                break e;
              }
              var w = l.sibling;
              if (w !== null) {
                (w.return = l.return), (V = w);
                break e;
              }
              V = l.return;
            }
        }
        if (((G = i), En(), Ct && typeof Ct.onPostCommitFiberRoot == "function"))
          try {
            Ct.onPostCommitFiberRoot(Vs, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (Q = n), (it.transition = t);
    }
  }
  return !1;
}
function Lf(e, t, n) {
  (t = Nr(n, t)), (t = Oh(e, t, 1)), (e = cn(e, t, 1)), (t = Ne()), e !== null && (Qi(e, 1, t), Be(e, t));
}
function le(e, t, n) {
  if (e.tag === 3) Lf(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Lf(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" && (fn === null || !fn.has(r)))
        ) {
          (e = Nr(n, e)), (e = jh(t, e, 1)), (t = cn(t, e, 1)), (e = Ne()), t !== null && (Qi(t, 1, e), Be(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function iv(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Ne()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ye === e &&
      (we & n) === n &&
      (pe === 4 || (pe === 3 && (we & 130023424) === we && 500 > ae() - $u) ? zn(e, 0) : (Bu |= n)),
    Be(e, t);
}
function nm(e, t) {
  t === 0 && (e.mode & 1 ? ((t = mo), (mo <<= 1), !(mo & 130023424) && (mo = 4194304)) : (t = 1));
  var n = Ne();
  (e = Bt(e, t)), e !== null && (Qi(e, t, n), Be(e, n));
}
function ov(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), nm(e, n);
}
function sv(e, t) {
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
      throw Error(A(314));
  }
  r !== null && r.delete(t), nm(e, n);
}
var rm;
rm = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || ze.current) Fe = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Fe = !1), Qg(e, t, n);
      Fe = !!(e.flags & 131072);
    }
  else (Fe = !1), ee && t.flags & 1048576 && sh(t, os, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      $o(e, t), (e = t.pendingProps);
      var i = Rr(t, Ae.current);
      Pr(t, n), (i = Mu(null, t, r, e, i, n));
      var o = Ou();
      return (
        (t.flags |= 1),
        typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ie(r) ? ((o = !0), rs(t)) : (o = !1),
            (t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null),
            Ru(t),
            (i.updater = Fs),
            (t.stateNode = i),
            (i._reactInternals = t),
            Pa(t, r, e, n),
            (t = Aa(null, t, r, !0, o, n)))
          : ((t.tag = 0), ee && o && Cu(t), De(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          ($o(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = av(r)),
          (e = ct(r, e)),
          i)
        ) {
          case 0:
            t = Ta(null, t, r, e, n);
            break e;
          case 1:
            t = vf(null, t, r, e, n);
            break e;
          case 11:
            t = yf(null, t, r, e, n);
            break e;
          case 14:
            t = gf(null, t, r, ct(r.type, e), n);
            break e;
        }
        throw Error(A(306, r, ""));
      }
      return t;
    case 0:
      return (r = t.type), (i = t.pendingProps), (i = t.elementType === r ? i : ct(r, i)), Ta(e, t, r, i, n);
    case 1:
      return (r = t.type), (i = t.pendingProps), (i = t.elementType === r ? i : ct(r, i)), vf(e, t, r, i, n);
    case 3:
      e: {
        if ((Bh(t), e === null)) throw Error(A(387));
        (r = t.pendingProps), (o = t.memoizedState), (i = o.element), ch(e, t), as(t, r, null, n);
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
            (i = Nr(Error(A(423)), t)), (t = wf(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = Nr(Error(A(424)), t)), (t = wf(e, t, r, n, i));
            break e;
          } else
            for (
              We = un(t.stateNode.containerInfo.firstChild),
                Ke = t,
                ee = !0,
                dt = null,
                n = hh(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((_r(), r === i)) {
            t = $t(e, t, n);
            break e;
          }
          De(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        mh(t),
        e === null && Sa(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (s = i.children),
        ya(r, i) ? (s = null) : o !== null && ya(r, o) && (t.flags |= 32),
        Ih(e, t),
        De(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && Sa(t), null;
    case 13:
      return $h(e, t, n);
    case 4:
      return (
        _u(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Vr(t, null, r, n)) : De(e, t, r, n),
        t.child
      );
    case 11:
      return (r = t.type), (i = t.pendingProps), (i = t.elementType === r ? i : ct(r, i)), yf(e, t, r, i, n);
    case 7:
      return De(e, t, t.pendingProps, n), t.child;
    case 8:
      return De(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return De(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (s = i.value),
          Z(ss, r._currentValue),
          (r._currentValue = s),
          o !== null)
        )
          if (mt(o.value, s)) {
            if (o.children === i.children && !ze.current) {
              t = $t(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var l = o.dependencies;
              if (l !== null) {
                s = o.child;
                for (var a = l.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (o.tag === 1) {
                      (a = Ot(-1, n & -n)), (a.tag = 2);
                      var u = o.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null ? (a.next = a) : ((a.next = c.next), (c.next = a)), (u.pending = a);
                      }
                    }
                    (o.lanes |= n), (a = o.alternate), a !== null && (a.lanes |= n), Ca(o.return, n, t), (l.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (o.tag === 10) s = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((s = o.return), s === null)) throw Error(A(341));
                (s.lanes |= n), (l = s.alternate), l !== null && (l.lanes |= n), Ca(s, n, t), (s = o.sibling);
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
        De(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        Pr(t, n),
        (i = ot(i)),
        (r = r(i)),
        (t.flags |= 1),
        De(e, t, r, n),
        t.child
      );
    case 14:
      return (r = t.type), (i = ct(r, t.pendingProps)), (i = ct(r.type, i)), gf(e, t, r, i, n);
    case 15:
      return Fh(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : ct(r, i)),
        $o(e, t),
        (t.tag = 1),
        Ie(r) ? ((e = !0), rs(t)) : (e = !1),
        Pr(t, n),
        dh(t, r, i),
        Pa(t, r, i, n),
        Aa(null, t, r, !0, e, n)
      );
    case 19:
      return Uh(e, t, n);
    case 22:
      return zh(e, t, n);
  }
  throw Error(A(156, t.tag));
};
function im(e, t) {
  return _p(e, t);
}
function lv(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function rt(e, t, n, r) {
  return new lv(e, t, n, r);
}
function Ku(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function av(e) {
  if (typeof e == "function") return Ku(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === cu)) return 11;
    if (e === fu) return 14;
  }
  return 2;
}
function pn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = rt(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t), (n.type = e.type), (n.flags = 0), (n.subtreeFlags = 0), (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Wo(e, t, n, r, i, o) {
  var s = 2;
  if (((r = e), typeof e == "function")) Ku(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case or:
        return In(n.children, i, o, t);
      case uu:
        (s = 8), (i |= 8);
        break;
      case Yl:
        return (e = rt(12, n, t, i | 2)), (e.elementType = Yl), (e.lanes = o), e;
      case Xl:
        return (e = rt(13, n, t, i)), (e.elementType = Xl), (e.lanes = o), e;
      case bl:
        return (e = rt(19, n, t, i)), (e.elementType = bl), (e.lanes = o), e;
      case pp:
        return $s(n, i, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case fp:
              s = 10;
              break e;
            case dp:
              s = 9;
              break e;
            case cu:
              s = 11;
              break e;
            case fu:
              s = 14;
              break e;
            case qt:
              (s = 16), (r = null);
              break e;
          }
        throw Error(A(130, e == null ? e : typeof e, ""));
    }
  return (t = rt(s, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t;
}
function In(e, t, n, r) {
  return (e = rt(7, e, r, t)), (e.lanes = n), e;
}
function $s(e, t, n, r) {
  return (e = rt(22, e, r, t)), (e.elementType = pp), (e.lanes = n), (e.stateNode = { isHidden: !1 }), e;
}
function _l(e, t, n) {
  return (e = rt(6, e, null, t)), (e.lanes = n), e;
}
function Vl(e, t, n) {
  return (
    (t = rt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }),
    t
  );
}
function uv(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = fl(0)),
    (this.expirationTimes = fl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = fl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function Gu(e, t, n, r, i, o, s, l, a) {
  return (
    (e = new uv(e, t, n, l, a)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = rt(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Ru(o),
    e
  );
}
function cv(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: ir, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function om(e) {
  if (!e) return vn;
  e = e._reactInternals;
  e: {
    if (Xn(e) !== e || e.tag !== 1) throw Error(A(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ie(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(A(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ie(n)) return ih(e, n, t);
  }
  return t;
}
function sm(e, t, n, r, i, o, s, l, a) {
  return (
    (e = Gu(n, r, !0, e, i, o, s, l, a)),
    (e.context = om(null)),
    (n = e.current),
    (r = Ne()),
    (i = dn(n)),
    (o = Ot(r, i)),
    (o.callback = t ?? null),
    cn(n, o, i),
    (e.current.lanes = i),
    Qi(e, i, r),
    Be(e, r),
    e
  );
}
function Us(e, t, n, r) {
  var i = t.current,
    o = Ne(),
    s = dn(i);
  return (
    (n = om(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Ot(o, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = cn(i, t, s)),
    e !== null && (ht(e, i, s, o), zo(e, i, s)),
    s
  );
}
function ys(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Rf(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Qu(e, t) {
  Rf(e, t), (e = e.alternate) && Rf(e, t);
}
function fv() {
  return null;
}
var lm =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Yu(e) {
  this._internalRoot = e;
}
Hs.prototype.render = Yu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(A(409));
  Us(e, t, null, null);
};
Hs.prototype.unmount = Yu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Kn(function () {
      Us(null, e, null, null);
    }),
      (t[It] = null);
  }
};
function Hs(e) {
  this._internalRoot = e;
}
Hs.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Fp();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < tn.length && t !== 0 && t < tn[n].priority; n++);
    tn.splice(n, 0, e), n === 0 && Ip(e);
  }
};
function Xu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Ws(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function _f() {}
function dv(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var u = ys(s);
        o.call(u);
      };
    }
    var s = sm(t, r, e, 0, null, !1, !1, "", _f);
    return (e._reactRootContainer = s), (e[It] = s.current), Ni(e.nodeType === 8 ? e.parentNode : e), Kn(), s;
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var u = ys(a);
      l.call(u);
    };
  }
  var a = Gu(e, 0, !1, null, null, !1, !1, "", _f);
  return (
    (e._reactRootContainer = a),
    (e[It] = a.current),
    Ni(e.nodeType === 8 ? e.parentNode : e),
    Kn(function () {
      Us(t, a, n, r);
    }),
    a
  );
}
function Ks(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var s = o;
    if (typeof i == "function") {
      var l = i;
      i = function () {
        var a = ys(s);
        l.call(a);
      };
    }
    Us(t, s, e, i);
  } else s = dv(n, t, e, i, r);
  return ys(s);
}
Op = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = ui(t.pendingLanes);
        n !== 0 && (hu(t, n | 1), Be(t, ae()), !(G & 6) && ((Mr = ae() + 500), En()));
      }
      break;
    case 13:
      Kn(function () {
        var r = Bt(e, 1);
        if (r !== null) {
          var i = Ne();
          ht(r, e, 1, i);
        }
      }),
        Qu(e, 1);
  }
};
mu = function (e) {
  if (e.tag === 13) {
    var t = Bt(e, 134217728);
    if (t !== null) {
      var n = Ne();
      ht(t, e, 134217728, n);
    }
    Qu(e, 134217728);
  }
};
jp = function (e) {
  if (e.tag === 13) {
    var t = dn(e),
      n = Bt(e, t);
    if (n !== null) {
      var r = Ne();
      ht(n, e, t, r);
    }
    Qu(e, t);
  }
};
Fp = function () {
  return Q;
};
zp = function (e, t) {
  var n = Q;
  try {
    return (Q = e), t();
  } finally {
    Q = n;
  }
};
sa = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Jl(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Os(r);
            if (!i) throw Error(A(90));
            mp(r), Jl(r, i);
          }
        }
      }
      break;
    case "textarea":
      gp(e, n);
      break;
    case "select":
      (t = n.value), t != null && xr(e, !!n.multiple, t, !1);
  }
};
Pp = Uu;
Ep = Kn;
var pv = { usingClientEntryPoint: !1, Events: [Xi, ur, Os, Cp, kp, Uu] },
  ii = { findFiberByHostInstance: Mn, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" },
  hv = {
    bundleType: ii.bundleType,
    version: ii.version,
    rendererPackageName: ii.rendererPackageName,
    rendererConfig: ii.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Wt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Lp(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: ii.findFiberByHostInstance || fv,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var To = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!To.isDisabled && To.supportsFiber)
    try {
      (Vs = To.inject(hv)), (Ct = To);
    } catch {}
}
Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = pv;
Xe.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Xu(t)) throw Error(A(200));
  return cv(e, t, null, n);
};
Xe.createRoot = function (e, t) {
  if (!Xu(e)) throw Error(A(299));
  var n = !1,
    r = "",
    i = lm;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = Gu(e, 1, !1, null, null, n, !1, r, i)),
    (e[It] = t.current),
    Ni(e.nodeType === 8 ? e.parentNode : e),
    new Yu(t)
  );
};
Xe.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(A(188)) : ((e = Object.keys(e).join(",")), Error(A(268, e)));
  return (e = Lp(t)), (e = e === null ? null : e.stateNode), e;
};
Xe.flushSync = function (e) {
  return Kn(e);
};
Xe.hydrate = function (e, t, n) {
  if (!Ws(t)) throw Error(A(200));
  return Ks(null, e, t, !0, n);
};
Xe.hydrateRoot = function (e, t, n) {
  if (!Xu(e)) throw Error(A(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = "",
    s = lm;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = sm(t, null, e, 1, n ?? null, i, !1, o, s)),
    (e[It] = t.current),
    Ni(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new Hs(t);
};
Xe.render = function (e, t, n) {
  if (!Ws(t)) throw Error(A(200));
  return Ks(null, e, t, !1, n);
};
Xe.unmountComponentAtNode = function (e) {
  if (!Ws(e)) throw Error(A(40));
  return e._reactRootContainer
    ? (Kn(function () {
        Ks(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[It] = null);
        });
      }),
      !0)
    : !1;
};
Xe.unstable_batchedUpdates = Uu;
Xe.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Ws(n)) throw Error(A(200));
  if (e == null || e._reactInternals === void 0) throw Error(A(38));
  return Ks(e, t, n, !1, r);
};
Xe.version = "18.2.0-next-9e3b772b8-20220608";
function am() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(am);
    } catch (e) {
      console.error(e);
    }
}
am(), (sp.exports = Xe);
var mv = sp.exports,
  Vf = mv;
(Gl.createRoot = Vf.createRoot), (Gl.hydrateRoot = Vf.hydrateRoot);
const um = x.createContext({ transformPagePoint: (e) => e, isStatic: !1, reducedMotion: "never" }),
  Gs = x.createContext({}),
  Qs = x.createContext(null),
  Ys = typeof document < "u",
  gs = Ys ? x.useLayoutEffect : x.useEffect,
  cm = x.createContext({ strict: !1 });
function yv(e, t, n, r) {
  const { visualElement: i } = x.useContext(Gs),
    o = x.useContext(cm),
    s = x.useContext(Qs),
    l = x.useContext(um).reducedMotion,
    a = x.useRef();
  (r = r || o.renderer),
    !a.current &&
      r &&
      (a.current = r(e, {
        visualState: t,
        parent: i,
        props: n,
        presenceContext: s,
        blockInitialAnimation: s ? s.initial === !1 : !1,
        reducedMotionConfig: l,
      }));
  const u = a.current;
  return (
    x.useInsertionEffect(() => {
      u && u.update(n, s);
    }),
    gs(() => {
      u && u.render();
    }),
    x.useEffect(() => {
      u && u.updateFeatures();
    }),
    (window.HandoffAppearAnimations ? gs : x.useEffect)(() => {
      u && u.animationState && u.animationState.animateChanges();
    }),
    u
  );
}
function yr(e) {
  return typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
function gv(e, t, n) {
  return x.useCallback(
    (r) => {
      r && e.mount && e.mount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : yr(n) && (n.current = r));
    },
    [t]
  );
}
function Ui(e) {
  return typeof e == "string" || Array.isArray(e);
}
function Xs(e) {
  return typeof e == "object" && typeof e.start == "function";
}
const bu = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
  Zu = ["initial", ...bu];
function bs(e) {
  return Xs(e.animate) || Zu.some((t) => Ui(e[t]));
}
function fm(e) {
  return !!(bs(e) || e.variants);
}
function vv(e, t) {
  if (bs(e)) {
    const { initial: n, animate: r } = e;
    return { initial: n === !1 || Ui(n) ? n : void 0, animate: Ui(r) ? r : void 0 };
  }
  return e.inherit !== !1 ? t : {};
}
function wv(e) {
  const { initial: t, animate: n } = vv(e, x.useContext(Gs));
  return x.useMemo(() => ({ initial: t, animate: n }), [Df(t), Df(n)]);
}
function Df(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const Nf = {
    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  Hi = {};
for (const e in Nf) Hi[e] = { isEnabled: (t) => Nf[e].some((n) => !!t[n]) };
function xv(e) {
  for (const t in e) Hi[t] = { ...Hi[t], ...e[t] };
}
const qu = x.createContext({}),
  dm = x.createContext({}),
  Sv = Symbol.for("motionComponentSymbol");
function Cv({ preloadedFeatures: e, createVisualElement: t, useRender: n, useVisualState: r, Component: i }) {
  e && xv(e);
  function o(l, a) {
    let u;
    const c = { ...x.useContext(um), ...l, layoutId: kv(l) },
      { isStatic: f } = c,
      d = wv(l),
      h = r(l, f);
    if (!f && Ys) {
      d.visualElement = yv(i, h, c, t);
      const g = x.useContext(dm),
        v = x.useContext(cm).strict;
      d.visualElement && (u = d.visualElement.loadFeatures(c, v, e, g));
    }
    return x.createElement(
      Gs.Provider,
      { value: d },
      u && d.visualElement ? x.createElement(u, { visualElement: d.visualElement, ...c }) : null,
      n(i, l, gv(h, d.visualElement, a), h, f, d.visualElement)
    );
  }
  const s = x.forwardRef(o);
  return (s[Sv] = i), s;
}
function kv({ layoutId: e }) {
  const t = x.useContext(qu).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function Pv(e) {
  function t(r, i = {}) {
    return Cv(e(r, i));
  }
  if (typeof Proxy > "u") return t;
  const n = new Map();
  return new Proxy(t, { get: (r, i) => (n.has(i) || n.set(i, t(i)), n.get(i)) });
}
const Ev = [
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
function Ju(e) {
  return typeof e != "string" || e.includes("-") ? !1 : !!(Ev.indexOf(e) > -1 || /[A-Z]/.test(e));
}
const vs = {};
function Tv(e) {
  Object.assign(vs, e);
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
  bn = new Set(Zi);
function pm(e, { layout: t, layoutId: n }) {
  return bn.has(e) || e.startsWith("origin") || ((t || n !== void 0) && (!!vs[e] || e === "opacity"));
}
const $e = (e) => !!(e && e.getVelocity),
  Av = { x: "translateX", y: "translateY", z: "translateZ", transformPerspective: "perspective" },
  Lv = Zi.length;
function Rv(e, { enableHardwareAcceleration: t = !0, allowTransformNone: n = !0 }, r, i) {
  let o = "";
  for (let s = 0; s < Lv; s++) {
    const l = Zi[s];
    if (e[l] !== void 0) {
      const a = Av[l] || l;
      o += `${a}(${e[l]}) `;
    }
  }
  return t && !e.z && (o += "translateZ(0)"), (o = o.trim()), i ? (o = i(e, r ? "" : o)) : n && r && (o = "none"), o;
}
const hm = (e) => (t) => typeof t == "string" && t.startsWith(e),
  mm = hm("--"),
  Ia = hm("var(--"),
  _v = /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,
  Vv = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
  wn = (e, t, n) => Math.min(Math.max(n, e), t),
  Zn = { test: (e) => typeof e == "number", parse: parseFloat, transform: (e) => e },
  Si = { ...Zn, transform: (e) => wn(0, 1, e) },
  Ao = { ...Zn, default: 1 },
  Ci = (e) => Math.round(e * 1e5) / 1e5,
  Zs = /(-)?([\d]*\.?[\d])+/g,
  ym = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
  Dv = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function qi(e) {
  return typeof e == "string";
}
const Ji = (e) => ({
    test: (t) => qi(t) && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  Zt = Ji("deg"),
  Pt = Ji("%"),
  z = Ji("px"),
  Nv = Ji("vh"),
  Mv = Ji("vw"),
  Mf = { ...Pt, parse: (e) => Pt.parse(e) / 100, transform: (e) => Pt.transform(e * 100) },
  Of = { ...Zn, transform: Math.round },
  gm = {
    borderWidth: z,
    borderTopWidth: z,
    borderRightWidth: z,
    borderBottomWidth: z,
    borderLeftWidth: z,
    borderRadius: z,
    radius: z,
    borderTopLeftRadius: z,
    borderTopRightRadius: z,
    borderBottomRightRadius: z,
    borderBottomLeftRadius: z,
    width: z,
    maxWidth: z,
    height: z,
    maxHeight: z,
    size: z,
    top: z,
    right: z,
    bottom: z,
    left: z,
    padding: z,
    paddingTop: z,
    paddingRight: z,
    paddingBottom: z,
    paddingLeft: z,
    margin: z,
    marginTop: z,
    marginRight: z,
    marginBottom: z,
    marginLeft: z,
    rotate: Zt,
    rotateX: Zt,
    rotateY: Zt,
    rotateZ: Zt,
    scale: Ao,
    scaleX: Ao,
    scaleY: Ao,
    scaleZ: Ao,
    skew: Zt,
    skewX: Zt,
    skewY: Zt,
    distance: z,
    translateX: z,
    translateY: z,
    translateZ: z,
    x: z,
    y: z,
    z,
    perspective: z,
    transformPerspective: z,
    opacity: Si,
    originX: Mf,
    originY: Mf,
    originZ: z,
    zIndex: Of,
    fillOpacity: Si,
    strokeOpacity: Si,
    numOctaves: Of,
  };
function ec(e, t, n, r) {
  const { style: i, vars: o, transform: s, transformOrigin: l } = e;
  let a = !1,
    u = !1,
    c = !0;
  for (const f in t) {
    const d = t[f];
    if (mm(f)) {
      o[f] = d;
      continue;
    }
    const h = gm[f],
      g = Vv(d, h);
    if (bn.has(f)) {
      if (((a = !0), (s[f] = g), !c)) continue;
      d !== (h.default || 0) && (c = !1);
    } else f.startsWith("origin") ? ((u = !0), (l[f] = g)) : (i[f] = g);
  }
  if ((t.transform || (a || r ? (i.transform = Rv(e.transform, n, c, r)) : i.transform && (i.transform = "none")), u)) {
    const { originX: f = "50%", originY: d = "50%", originZ: h = 0 } = l;
    i.transformOrigin = `${f} ${d} ${h}`;
  }
}
const tc = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function vm(e, t, n) {
  for (const r in t) !$e(t[r]) && !pm(r, n) && (e[r] = t[r]);
}
function Ov({ transformTemplate: e }, t, n) {
  return x.useMemo(() => {
    const r = tc();
    return ec(r, t, { enableHardwareAcceleration: !n }, e), Object.assign({}, r.vars, r.style);
  }, [t]);
}
function jv(e, t, n) {
  const r = e.style || {},
    i = {};
  return vm(i, r, e), Object.assign(i, Ov(e, t, n)), e.transformValues ? e.transformValues(i) : i;
}
function Fv(e, t, n) {
  const r = {},
    i = jv(e, t, n);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((r.draggable = !1),
      (i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none"),
      (i.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (r.tabIndex = 0),
    (r.style = i),
    r
  );
}
const zv = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "transformValues",
  "custom",
  "inherit",
  "onLayoutAnimationStart",
  "onLayoutAnimationComplete",
  "onLayoutMeasure",
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
  "ignoreStrict",
  "viewport",
]);
function ws(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    zv.has(e)
  );
}
let wm = (e) => !ws(e);
function Iv(e) {
  e && (wm = (t) => (t.startsWith("on") ? !ws(t) : e(t)));
}
try {
  Iv(require("@emotion/is-prop-valid").default);
} catch {}
function Bv(e, t, n) {
  const r = {};
  for (const i in e)
    (i === "values" && typeof e.values == "object") ||
      ((wm(i) || (n === !0 && ws(i)) || (!t && !ws(i)) || (e.draggable && i.startsWith("onDrag"))) && (r[i] = e[i]));
  return r;
}
function jf(e, t, n) {
  return typeof e == "string" ? e : z.transform(t + n * e);
}
function $v(e, t, n) {
  const r = jf(t, e.x, e.width),
    i = jf(n, e.y, e.height);
  return `${r} ${i}`;
}
const Uv = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  Hv = { offset: "strokeDashoffset", array: "strokeDasharray" };
function Wv(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  const o = i ? Uv : Hv;
  e[o.offset] = z.transform(-r);
  const s = z.transform(t),
    l = z.transform(n);
  e[o.array] = `${s} ${l}`;
}
function nc(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: i,
    originY: o,
    pathLength: s,
    pathSpacing: l = 1,
    pathOffset: a = 0,
    ...u
  },
  c,
  f,
  d
) {
  if ((ec(e, u, c, d), f)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  const { attrs: h, style: g, dimensions: v } = e;
  h.transform && (v && (g.transform = h.transform), delete h.transform),
    v &&
      (i !== void 0 || o !== void 0 || g.transform) &&
      (g.transformOrigin = $v(v, i !== void 0 ? i : 0.5, o !== void 0 ? o : 0.5)),
    t !== void 0 && (h.x = t),
    n !== void 0 && (h.y = n),
    r !== void 0 && (h.scale = r),
    s !== void 0 && Wv(h, s, l, a, !1);
}
const xm = () => ({ ...tc(), attrs: {} }),
  rc = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function Kv(e, t, n, r) {
  const i = x.useMemo(() => {
    const o = xm();
    return (
      nc(o, t, { enableHardwareAcceleration: !1 }, rc(r), e.transformTemplate), { ...o.attrs, style: { ...o.style } }
    );
  }, [t]);
  if (e.style) {
    const o = {};
    vm(o, e.style, e), (i.style = { ...o, ...i.style });
  }
  return i;
}
function Gv(e = !1) {
  return (n, r, i, { latestValues: o }, s) => {
    const a = (Ju(n) ? Kv : Fv)(r, o, s, n),
      c = { ...Bv(r, typeof n == "string", e), ...a, ref: i },
      { children: f } = r,
      d = x.useMemo(() => ($e(f) ? f.get() : f), [f]);
    return x.createElement(n, { ...c, children: d });
  };
}
const ic = (e) => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
function Sm(e, { style: t, vars: n }, r, i) {
  Object.assign(e.style, t, i && i.getProjectionStyles(r));
  for (const o in n) e.style.setProperty(o, n[o]);
}
const Cm = new Set([
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
]);
function km(e, t, n, r) {
  Sm(e, t, void 0, r);
  for (const i in t.attrs) e.setAttribute(Cm.has(i) ? i : ic(i), t.attrs[i]);
}
function oc(e, t) {
  const { style: n } = e,
    r = {};
  for (const i in n) ($e(n[i]) || (t.style && $e(t.style[i])) || pm(i, e)) && (r[i] = n[i]);
  return r;
}
function Pm(e, t) {
  const n = oc(e, t);
  for (const r in e)
    if ($e(e[r]) || $e(t[r])) {
      const i = Zi.indexOf(r) !== -1 ? "attr" + r.charAt(0).toUpperCase() + r.substring(1) : r;
      n[i] = e[r];
    }
  return n;
}
function sc(e, t, n, r = {}, i = {}) {
  return (
    typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, i)),
    typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, i)),
    t
  );
}
function Em(e) {
  const t = x.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const xs = (e) => Array.isArray(e),
  Qv = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
  Yv = (e) => (xs(e) ? e[e.length - 1] || 0 : e);
function Ko(e) {
  const t = $e(e) ? e.get() : e;
  return Qv(t) ? t.toValue() : t;
}
function Xv({ scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n }, r, i, o) {
  const s = { latestValues: bv(r, i, o, e), renderState: t() };
  return n && (s.mount = (l) => n(r, l, s)), s;
}
const Tm = (e) => (t, n) => {
  const r = x.useContext(Gs),
    i = x.useContext(Qs),
    o = () => Xv(e, t, r, i);
  return n ? o() : Em(o);
};
function bv(e, t, n, r) {
  const i = {},
    o = r(e, {});
  for (const d in o) i[d] = Ko(o[d]);
  let { initial: s, animate: l } = e;
  const a = bs(e),
    u = fm(e);
  t && u && !a && e.inherit !== !1 && (s === void 0 && (s = t.initial), l === void 0 && (l = t.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || s === !1;
  const f = c ? l : s;
  return (
    f &&
      typeof f != "boolean" &&
      !Xs(f) &&
      (Array.isArray(f) ? f : [f]).forEach((h) => {
        const g = sc(e, h);
        if (!g) return;
        const { transitionEnd: v, transition: P, ...y } = g;
        for (const p in y) {
          let m = y[p];
          if (Array.isArray(m)) {
            const w = c ? m.length - 1 : 0;
            m = m[w];
          }
          m !== null && (i[p] = m);
        }
        for (const p in v) i[p] = v[p];
      }),
    i
  );
}
const Zv = {
    useVisualState: Tm({
      scrapeMotionValuesFromProps: Pm,
      createRenderState: xm,
      onMount: (e, t, { renderState: n, latestValues: r }) => {
        try {
          n.dimensions = typeof t.getBBox == "function" ? t.getBBox() : t.getBoundingClientRect();
        } catch {
          n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
        }
        nc(n, r, { enableHardwareAcceleration: !1 }, rc(t.tagName), e.transformTemplate), km(t, n);
      },
    }),
  },
  qv = { useVisualState: Tm({ scrapeMotionValuesFromProps: oc, createRenderState: tc }) };
function Jv(e, { forwardMotionProps: t = !1 }, n, r) {
  return { ...(Ju(e) ? Zv : qv), preloadedFeatures: n, useRender: Gv(t), createVisualElement: r, Component: e };
}
function Mt(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
const Am = (e) => (e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1);
function qs(e, t = "page") {
  return { point: { x: e[t + "X"], y: e[t + "Y"] } };
}
const e1 = (e) => (t) => Am(t) && e(t, qs(t));
function jt(e, t, n, r) {
  return Mt(e, t, e1(n), r);
}
const t1 = (e, t) => (n) => t(e(n)),
  hn = (...e) => e.reduce(t1);
function Lm(e) {
  let t = null;
  return () => {
    const n = () => {
      t = null;
    };
    return t === null ? ((t = e), n) : !1;
  };
}
const Ff = Lm("dragHorizontal"),
  zf = Lm("dragVertical");
function Rm(e) {
  let t = !1;
  if (e === "y") t = zf();
  else if (e === "x") t = Ff();
  else {
    const n = Ff(),
      r = zf();
    n && r
      ? (t = () => {
          n(), r();
        })
      : (n && n(), r && r());
  }
  return t;
}
function _m() {
  const e = Rm(!0);
  return e ? (e(), !1) : !0;
}
class Tn {
  constructor(t) {
    (this.isMounted = !1), (this.node = t);
  }
  update() {}
}
function n1(e) {
  let t = [],
    n = [],
    r = 0,
    i = !1,
    o = !1;
  const s = new WeakSet(),
    l = {
      schedule: (a, u = !1, c = !1) => {
        const f = c && i,
          d = f ? t : n;
        return u && s.add(a), d.indexOf(a) === -1 && (d.push(a), f && i && (r = t.length)), a;
      },
      cancel: (a) => {
        const u = n.indexOf(a);
        u !== -1 && n.splice(u, 1), s.delete(a);
      },
      process: (a) => {
        if (i) {
          o = !0;
          return;
        }
        if (((i = !0), ([t, n] = [n, t]), (n.length = 0), (r = t.length), r))
          for (let u = 0; u < r; u++) {
            const c = t[u];
            c(a), s.has(c) && (l.schedule(c), e());
          }
        (i = !1), o && ((o = !1), l.process(a));
      },
    };
  return l;
}
const ne = { delta: 0, timestamp: 0, isProcessing: !1 },
  r1 = 40;
let Ba = !0,
  Wi = !1;
const Js = ["read", "update", "preRender", "render", "postRender"],
  Tr = Js.reduce((e, t) => ((e[t] = n1(() => (Wi = !0))), e), {}),
  i1 = (e) => Tr[e].process(ne),
  Vm = (e) => {
    (Wi = !1),
      (ne.delta = Ba ? 1e3 / 60 : Math.max(Math.min(e - ne.timestamp, r1), 1)),
      (ne.timestamp = e),
      (ne.isProcessing = !0),
      Js.forEach(i1),
      (ne.isProcessing = !1),
      Wi && ((Ba = !1), requestAnimationFrame(Vm));
  },
  o1 = () => {
    (Wi = !0), (Ba = !0), ne.isProcessing || requestAnimationFrame(Vm);
  },
  te = Js.reduce((e, t) => {
    const n = Tr[t];
    return (e[t] = (r, i = !1, o = !1) => (Wi || o1(), n.schedule(r, i, o))), e;
  }, {});
function Ut(e) {
  Js.forEach((t) => Tr[t].cancel(e));
}
function If(e, t) {
  const n = "pointer" + (t ? "enter" : "leave"),
    r = "onHover" + (t ? "Start" : "End"),
    i = (o, s) => {
      if (o.type === "touch" || _m()) return;
      const l = e.getProps();
      e.animationState && l.whileHover && e.animationState.setActive("whileHover", t),
        l[r] && te.update(() => l[r](o, s));
    };
  return jt(e.current, n, i, { passive: !e.getProps()[r] });
}
class s1 extends Tn {
  mount() {
    this.unmount = hn(If(this.node, !0), If(this.node, !1));
  }
  unmount() {}
}
class l1 extends Tn {
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
    !t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1), (this.isActive = !1));
  }
  mount() {
    this.unmount = hn(
      Mt(this.node.current, "focus", () => this.onFocus()),
      Mt(this.node.current, "blur", () => this.onBlur())
    );
  }
  unmount() {}
}
const Dm = (e, t) => (t ? (e === t ? !0 : Dm(e, t.parentElement)) : !1),
  de = (e) => e;
function Dl(e, t) {
  if (!t) return;
  const n = new PointerEvent("pointer" + e);
  t(n, qs(n));
}
class a1 extends Tn {
  constructor() {
    super(...arguments),
      (this.removeStartListeners = de),
      (this.removeEndListeners = de),
      (this.removeAccessibleListeners = de),
      (this.startPointerPress = (t, n) => {
        if ((this.removeEndListeners(), this.isPressing)) return;
        const r = this.node.getProps(),
          o = jt(
            window,
            "pointerup",
            (l, a) => {
              if (!this.checkPressEnd()) return;
              const { onTap: u, onTapCancel: c } = this.node.getProps();
              te.update(() => {
                Dm(this.node.current, l.target) ? u && u(l, a) : c && c(l, a);
              });
            },
            { passive: !(r.onTap || r.onPointerUp) }
          ),
          s = jt(window, "pointercancel", (l, a) => this.cancelPress(l, a), {
            passive: !(r.onTapCancel || r.onPointerCancel),
          });
        (this.removeEndListeners = hn(o, s)), this.startPress(t, n);
      }),
      (this.startAccessiblePress = () => {
        const t = (o) => {
            if (o.key !== "Enter" || this.isPressing) return;
            const s = (l) => {
              l.key !== "Enter" ||
                !this.checkPressEnd() ||
                Dl("up", (a, u) => {
                  const { onTap: c } = this.node.getProps();
                  c && te.update(() => c(a, u));
                });
            };
            this.removeEndListeners(),
              (this.removeEndListeners = Mt(this.node.current, "keyup", s)),
              Dl("down", (l, a) => {
                this.startPress(l, a);
              });
          },
          n = Mt(this.node.current, "keydown", t),
          r = () => {
            this.isPressing && Dl("cancel", (o, s) => this.cancelPress(o, s));
          },
          i = Mt(this.node.current, "blur", r);
        this.removeAccessibleListeners = hn(n, i);
      });
  }
  startPress(t, n) {
    this.isPressing = !0;
    const { onTapStart: r, whileTap: i } = this.node.getProps();
    i && this.node.animationState && this.node.animationState.setActive("whileTap", !0), r && te.update(() => r(t, n));
  }
  checkPressEnd() {
    return (
      this.removeEndListeners(),
      (this.isPressing = !1),
      this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1),
      !_m()
    );
  }
  cancelPress(t, n) {
    if (!this.checkPressEnd()) return;
    const { onTapCancel: r } = this.node.getProps();
    r && te.update(() => r(t, n));
  }
  mount() {
    const t = this.node.getProps(),
      n = jt(this.node.current, "pointerdown", this.startPointerPress, {
        passive: !(t.onTapStart || t.onPointerStart),
      }),
      r = Mt(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = hn(n, r);
  }
  unmount() {
    this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners();
  }
}
const $a = new WeakMap(),
  Nl = new WeakMap(),
  u1 = (e) => {
    const t = $a.get(e.target);
    t && t(e);
  },
  c1 = (e) => {
    e.forEach(u1);
  };
function f1({ root: e, ...t }) {
  const n = e || document;
  Nl.has(n) || Nl.set(n, {});
  const r = Nl.get(n),
    i = JSON.stringify(t);
  return r[i] || (r[i] = new IntersectionObserver(c1, { root: e, ...t })), r[i];
}
function d1(e, t, n) {
  const r = f1(t);
  return (
    $a.set(e, n),
    r.observe(e),
    () => {
      $a.delete(e), r.unobserve(e);
    }
  );
}
const p1 = { some: 0, all: 1 };
class h1 extends Tn {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: i = "some", once: o } = t,
      s = { root: n ? n.current : void 0, rootMargin: r, threshold: typeof i == "number" ? i : p1[i] },
      l = (a) => {
        const { isIntersecting: u } = a;
        if (this.isInView === u || ((this.isInView = u), o && !u && this.hasEnteredView)) return;
        u && (this.hasEnteredView = !0),
          this.node.animationState && this.node.animationState.setActive("whileInView", u);
        const { onViewportEnter: c, onViewportLeave: f } = this.node.getProps(),
          d = u ? c : f;
        d && d(a);
      };
    return d1(this.node.current, s, l);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(m1(t, n)) && this.startObserver();
  }
  unmount() {}
}
function m1({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const y1 = { inView: { Feature: h1 }, tap: { Feature: a1 }, focus: { Feature: l1 }, hover: { Feature: s1 } };
function Nm(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
function g1(e) {
  const t = {};
  return e.values.forEach((n, r) => (t[r] = n.get())), t;
}
function v1(e) {
  const t = {};
  return e.values.forEach((n, r) => (t[r] = n.getVelocity())), t;
}
function el(e, t, n) {
  const r = e.getProps();
  return sc(r, t, n !== void 0 ? n : r.custom, g1(e), v1(e));
}
const w1 = "framerAppearId",
  x1 = "data-" + ic(w1);
let S1 = de,
  lc = de;
const mn = (e) => e * 1e3,
  Ft = (e) => e / 1e3,
  C1 = { current: !1 },
  Mm = (e) => Array.isArray(e) && typeof e[0] == "number";
function Om(e) {
  return !!(!e || (typeof e == "string" && jm[e]) || Mm(e) || (Array.isArray(e) && e.every(Om)));
}
const fi = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  jm = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: fi([0, 0.65, 0.55, 1]),
    circOut: fi([0.55, 0, 1, 0.45]),
    backIn: fi([0.31, 0.01, 0.66, -0.59]),
    backOut: fi([0.33, 1.53, 0.69, 0.99]),
  };
function Fm(e) {
  if (e) return Mm(e) ? fi(e) : Array.isArray(e) ? e.map(Fm) : jm[e];
}
function k1(e, t, n, { delay: r = 0, duration: i, repeat: o = 0, repeatType: s = "loop", ease: l, times: a } = {}) {
  const u = { [t]: n };
  a && (u.offset = a);
  const c = Fm(l);
  return (
    Array.isArray(c) && (u.easing = c),
    e.animate(u, {
      delay: r,
      duration: i,
      easing: Array.isArray(c) ? "linear" : c,
      fill: "both",
      iterations: o + 1,
      direction: s === "reverse" ? "alternate" : "normal",
    })
  );
}
const Bf = { waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate") },
  Ml = {},
  zm = {};
for (const e in Bf) zm[e] = () => (Ml[e] === void 0 && (Ml[e] = Bf[e]()), Ml[e]);
function P1(e, { repeat: t, repeatType: n = "loop" }) {
  const r = t && n !== "loop" && t % 2 === 1 ? 0 : e.length - 1;
  return e[r];
}
const Im = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  E1 = 1e-7,
  T1 = 12;
function A1(e, t, n, r, i) {
  let o,
    s,
    l = 0;
  do (s = t + (n - t) / 2), (o = Im(s, r, i) - e), o > 0 ? (n = s) : (t = s);
  while (Math.abs(o) > E1 && ++l < T1);
  return s;
}
function eo(e, t, n, r) {
  if (e === t && n === r) return de;
  const i = (o) => A1(o, 0, 1, e, n);
  return (o) => (o === 0 || o === 1 ? o : Im(i(o), t, r));
}
const L1 = eo(0.42, 0, 1, 1),
  R1 = eo(0, 0, 0.58, 1),
  Bm = eo(0.42, 0, 0.58, 1),
  _1 = (e) => Array.isArray(e) && typeof e[0] != "number",
  $m = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
  Um = (e) => (t) => 1 - e(1 - t),
  Hm = (e) => 1 - Math.sin(Math.acos(e)),
  ac = Um(Hm),
  V1 = $m(ac),
  Wm = eo(0.33, 1.53, 0.69, 0.99),
  uc = Um(Wm),
  D1 = $m(uc),
  N1 = (e) => ((e *= 2) < 1 ? 0.5 * uc(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1)))),
  M1 = {
    linear: de,
    easeIn: L1,
    easeInOut: Bm,
    easeOut: R1,
    circIn: Hm,
    circInOut: V1,
    circOut: ac,
    backIn: uc,
    backInOut: D1,
    backOut: Wm,
    anticipate: N1,
  },
  $f = (e) => {
    if (Array.isArray(e)) {
      lc(e.length === 4);
      const [t, n, r, i] = e;
      return eo(t, n, r, i);
    } else if (typeof e == "string") return M1[e];
    return e;
  },
  cc = (e, t) => (n) =>
    !!((qi(n) && Dv.test(n) && n.startsWith(e)) || (t && Object.prototype.hasOwnProperty.call(n, t))),
  Km = (e, t, n) => (r) => {
    if (!qi(r)) return r;
    const [i, o, s, l] = r.match(Zs);
    return { [e]: parseFloat(i), [t]: parseFloat(o), [n]: parseFloat(s), alpha: l !== void 0 ? parseFloat(l) : 1 };
  },
  O1 = (e) => wn(0, 255, e),
  Ol = { ...Zn, transform: (e) => Math.round(O1(e)) },
  Fn = {
    test: cc("rgb", "red"),
    parse: Km("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" + Ol.transform(e) + ", " + Ol.transform(t) + ", " + Ol.transform(n) + ", " + Ci(Si.transform(r)) + ")",
  };
function j1(e) {
  let t = "",
    n = "",
    r = "",
    i = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)), (n = e.substring(3, 5)), (r = e.substring(5, 7)), (i = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (i = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (i += i)),
    { red: parseInt(t, 16), green: parseInt(n, 16), blue: parseInt(r, 16), alpha: i ? parseInt(i, 16) / 255 : 1 }
  );
}
const Ua = { test: cc("#"), parse: j1, transform: Fn.transform },
  gr = {
    test: cc("hsl", "hue"),
    parse: Km("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      Pt.transform(Ci(t)) +
      ", " +
      Pt.transform(Ci(n)) +
      ", " +
      Ci(Si.transform(r)) +
      ")",
  },
  Ve = {
    test: (e) => Fn.test(e) || Ua.test(e) || gr.test(e),
    parse: (e) => (Fn.test(e) ? Fn.parse(e) : gr.test(e) ? gr.parse(e) : Ua.parse(e)),
    transform: (e) => (qi(e) ? e : e.hasOwnProperty("red") ? Fn.transform(e) : gr.transform(e)),
  },
  ie = (e, t, n) => -n * e + n * t + e;
function jl(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
  );
}
function F1({ hue: e, saturation: t, lightness: n, alpha: r }) {
  (e /= 360), (t /= 100), (n /= 100);
  let i = 0,
    o = 0,
    s = 0;
  if (!t) i = o = s = n;
  else {
    const l = n < 0.5 ? n * (1 + t) : n + t - n * t,
      a = 2 * n - l;
    (i = jl(a, l, e + 1 / 3)), (o = jl(a, l, e)), (s = jl(a, l, e - 1 / 3));
  }
  return { red: Math.round(i * 255), green: Math.round(o * 255), blue: Math.round(s * 255), alpha: r };
}
const Fl = (e, t, n) => {
    const r = e * e;
    return Math.sqrt(Math.max(0, n * (t * t - r) + r));
  },
  z1 = [Ua, Fn, gr],
  I1 = (e) => z1.find((t) => t.test(e));
function Uf(e) {
  const t = I1(e);
  let n = t.parse(e);
  return t === gr && (n = F1(n)), n;
}
const Gm = (e, t) => {
  const n = Uf(e),
    r = Uf(t),
    i = { ...n };
  return (o) => (
    (i.red = Fl(n.red, r.red, o)),
    (i.green = Fl(n.green, r.green, o)),
    (i.blue = Fl(n.blue, r.blue, o)),
    (i.alpha = ie(n.alpha, r.alpha, o)),
    Fn.transform(i)
  );
};
function B1(e) {
  var t, n;
  return (
    isNaN(e) &&
    qi(e) &&
    (((t = e.match(Zs)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((n = e.match(ym)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  );
}
const Qm = { regex: _v, countKey: "Vars", token: "${v}", parse: de },
  Ym = { regex: ym, countKey: "Colors", token: "${c}", parse: Ve.parse },
  Xm = { regex: Zs, countKey: "Numbers", token: "${n}", parse: Zn.parse };
function zl(e, { regex: t, countKey: n, token: r, parse: i }) {
  const o = e.tokenised.match(t);
  o && ((e["num" + n] = o.length), (e.tokenised = e.tokenised.replace(t, r)), e.values.push(...o.map(i)));
}
function Ss(e) {
  const t = e.toString(),
    n = { value: t, tokenised: t, values: [], numVars: 0, numColors: 0, numNumbers: 0 };
  return n.value.includes("var(--") && zl(n, Qm), zl(n, Ym), zl(n, Xm), n;
}
function bm(e) {
  return Ss(e).values;
}
function Zm(e) {
  const { values: t, numColors: n, numVars: r, tokenised: i } = Ss(e),
    o = t.length;
  return (s) => {
    let l = i;
    for (let a = 0; a < o; a++)
      a < r
        ? (l = l.replace(Qm.token, s[a]))
        : a < r + n
        ? (l = l.replace(Ym.token, Ve.transform(s[a])))
        : (l = l.replace(Xm.token, Ci(s[a])));
    return l;
  };
}
const $1 = (e) => (typeof e == "number" ? 0 : e);
function U1(e) {
  const t = bm(e);
  return Zm(e)(t.map($1));
}
const xn = { test: B1, parse: bm, createTransformer: Zm, getAnimatableNone: U1 },
  qm = (e, t) => (n) => `${n > 0 ? t : e}`;
function Jm(e, t) {
  return typeof e == "number" ? (n) => ie(e, t, n) : Ve.test(e) ? Gm(e, t) : e.startsWith("var(") ? qm(e, t) : t0(e, t);
}
const e0 = (e, t) => {
    const n = [...e],
      r = n.length,
      i = e.map((o, s) => Jm(o, t[s]));
    return (o) => {
      for (let s = 0; s < r; s++) n[s] = i[s](o);
      return n;
    };
  },
  H1 = (e, t) => {
    const n = { ...e, ...t },
      r = {};
    for (const i in n) e[i] !== void 0 && t[i] !== void 0 && (r[i] = Jm(e[i], t[i]));
    return (i) => {
      for (const o in r) n[o] = r[o](i);
      return n;
    };
  },
  t0 = (e, t) => {
    const n = xn.createTransformer(t),
      r = Ss(e),
      i = Ss(t);
    return r.numVars === i.numVars && r.numColors === i.numColors && r.numNumbers >= i.numNumbers
      ? hn(e0(r.values, i.values), n)
      : qm(e, t);
  },
  Ki = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  },
  Hf = (e, t) => (n) => ie(e, t, n);
function W1(e) {
  return typeof e == "number"
    ? Hf
    : typeof e == "string"
    ? Ve.test(e)
      ? Gm
      : t0
    : Array.isArray(e)
    ? e0
    : typeof e == "object"
    ? H1
    : Hf;
}
function K1(e, t, n) {
  const r = [],
    i = n || W1(e[0]),
    o = e.length - 1;
  for (let s = 0; s < o; s++) {
    let l = i(e[s], e[s + 1]);
    if (t) {
      const a = Array.isArray(t) ? t[s] || de : t;
      l = hn(a, l);
    }
    r.push(l);
  }
  return r;
}
function n0(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  const o = e.length;
  if ((lc(o === t.length), o === 1)) return () => t[0];
  e[0] > e[o - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const s = K1(t, r, i),
    l = s.length,
    a = (u) => {
      let c = 0;
      if (l > 1) for (; c < e.length - 2 && !(u < e[c + 1]); c++);
      const f = Ki(e[c], e[c + 1], u);
      return s[c](f);
    };
  return n ? (u) => a(wn(e[0], e[o - 1], u)) : a;
}
function G1(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const i = Ki(0, t, r);
    e.push(ie(n, 1, i));
  }
}
function Q1(e) {
  const t = [0];
  return G1(t, e.length - 1), t;
}
function Y1(e, t) {
  return e.map((n) => n * t);
}
function X1(e, t) {
  return e.map(() => t || Bm).splice(0, e.length - 1);
}
function Cs({ duration: e = 300, keyframes: t, times: n, ease: r = "easeInOut" }) {
  const i = _1(r) ? r.map($f) : $f(r),
    o = { done: !1, value: t[0] },
    s = Y1(n && n.length === t.length ? n : Q1(t), e),
    l = n0(s, t, { ease: Array.isArray(i) ? i : X1(t, i) });
  return { calculatedDuration: e, next: (a) => ((o.value = l(a)), (o.done = a >= e), o) };
}
function r0(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const b1 = 5;
function i0(e, t, n) {
  const r = Math.max(t - b1, 0);
  return r0(n - e(r), t - r);
}
const Il = 0.001,
  Z1 = 0.01,
  Wf = 10,
  q1 = 0.05,
  J1 = 1;
function ew({ duration: e = 800, bounce: t = 0.25, velocity: n = 0, mass: r = 1 }) {
  let i, o;
  S1(e <= mn(Wf));
  let s = 1 - t;
  (s = wn(q1, J1, s)),
    (e = wn(Z1, Wf, Ft(e))),
    s < 1
      ? ((i = (u) => {
          const c = u * s,
            f = c * e,
            d = c - n,
            h = Ha(u, s),
            g = Math.exp(-f);
          return Il - (d / h) * g;
        }),
        (o = (u) => {
          const f = u * s * e,
            d = f * n + n,
            h = Math.pow(s, 2) * Math.pow(u, 2) * e,
            g = Math.exp(-f),
            v = Ha(Math.pow(u, 2), s);
          return ((-i(u) + Il > 0 ? -1 : 1) * ((d - h) * g)) / v;
        }))
      : ((i = (u) => {
          const c = Math.exp(-u * e),
            f = (u - n) * e + 1;
          return -Il + c * f;
        }),
        (o = (u) => {
          const c = Math.exp(-u * e),
            f = (n - u) * (e * e);
          return c * f;
        }));
  const l = 5 / e,
    a = nw(i, o, l);
  if (((e = mn(e)), isNaN(a))) return { stiffness: 100, damping: 10, duration: e };
  {
    const u = Math.pow(a, 2) * r;
    return { stiffness: u, damping: s * 2 * Math.sqrt(r * u), duration: e };
  }
}
const tw = 12;
function nw(e, t, n) {
  let r = n;
  for (let i = 1; i < tw; i++) r = r - e(r) / t(r);
  return r;
}
function Ha(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const rw = ["duration", "bounce"],
  iw = ["stiffness", "damping", "mass"];
function Kf(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function ow(e) {
  let t = { velocity: 0, stiffness: 100, damping: 10, mass: 1, isResolvedFromDuration: !1, ...e };
  if (!Kf(e, iw) && Kf(e, rw)) {
    const n = ew(e);
    (t = { ...t, ...n, velocity: 0, mass: 1 }), (t.isResolvedFromDuration = !0);
  }
  return t;
}
function o0({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
  const i = e[0],
    o = e[e.length - 1],
    s = { done: !1, value: i },
    { stiffness: l, damping: a, mass: u, velocity: c, duration: f, isResolvedFromDuration: d } = ow(r),
    h = c ? -Ft(c) : 0,
    g = a / (2 * Math.sqrt(l * u)),
    v = o - i,
    P = Ft(Math.sqrt(l / u)),
    y = Math.abs(v) < 5;
  n || (n = y ? 0.01 : 2), t || (t = y ? 0.005 : 0.5);
  let p;
  if (g < 1) {
    const m = Ha(P, g);
    p = (w) => {
      const S = Math.exp(-g * P * w);
      return o - S * (((h + g * P * v) / m) * Math.sin(m * w) + v * Math.cos(m * w));
    };
  } else if (g === 1) p = (m) => o - Math.exp(-P * m) * (v + (h + P * v) * m);
  else {
    const m = P * Math.sqrt(g * g - 1);
    p = (w) => {
      const S = Math.exp(-g * P * w),
        E = Math.min(m * w, 300);
      return o - (S * ((h + g * P * v) * Math.sinh(E) + m * v * Math.cosh(E))) / m;
    };
  }
  return {
    calculatedDuration: (d && f) || null,
    next: (m) => {
      const w = p(m);
      if (d) s.done = m >= f;
      else {
        let S = h;
        m !== 0 && (g < 1 ? (S = i0(p, m, w)) : (S = 0));
        const E = Math.abs(S) <= n,
          T = Math.abs(o - w) <= t;
        s.done = E && T;
      }
      return (s.value = s.done ? o : w), s;
    },
  };
}
function Gf({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: i = 10,
  bounceStiffness: o = 500,
  modifyTarget: s,
  min: l,
  max: a,
  restDelta: u = 0.5,
  restSpeed: c,
}) {
  const f = e[0],
    d = { done: !1, value: f },
    h = (k) => (l !== void 0 && k < l) || (a !== void 0 && k > a),
    g = (k) => (l === void 0 ? a : a === void 0 || Math.abs(l - k) < Math.abs(a - k) ? l : a);
  let v = n * t;
  const P = f + v,
    y = s === void 0 ? P : s(P);
  y !== P && (v = y - f);
  const p = (k) => -v * Math.exp(-k / r),
    m = (k) => y + p(k),
    w = (k) => {
      const M = p(k),
        D = m(k);
      (d.done = Math.abs(M) <= u), (d.value = d.done ? y : D);
    };
  let S, E;
  const T = (k) => {
    h(d.value) &&
      ((S = k),
      (E = o0({
        keyframes: [d.value, g(d.value)],
        velocity: i0(m, k, d.value),
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
        return !E && S === void 0 && ((M = !0), w(k), T(k)), S !== void 0 && k > S ? E.next(k - S) : (!M && w(k), d);
      },
    }
  );
}
const sw = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: () => te.update(t, !0),
      stop: () => Ut(t),
      now: () => (ne.isProcessing ? ne.timestamp : performance.now()),
    };
  },
  Qf = 2e4;
function Yf(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < Qf; ) (t += n), (r = e.next(t));
  return t >= Qf ? 1 / 0 : t;
}
const lw = { decay: Gf, inertia: Gf, tween: Cs, keyframes: Cs, spring: o0 };
function ks({
  autoplay: e = !0,
  delay: t = 0,
  driver: n = sw,
  keyframes: r,
  type: i = "keyframes",
  repeat: o = 0,
  repeatDelay: s = 0,
  repeatType: l = "loop",
  onPlay: a,
  onStop: u,
  onComplete: c,
  onUpdate: f,
  ...d
}) {
  let h = 1,
    g = !1,
    v,
    P;
  const y = () => {
    v && v(),
      (P = new Promise((N) => {
        v = N;
      }));
  };
  y();
  let p;
  const m = lw[i] || Cs;
  let w;
  m !== Cs && typeof r[0] != "number" && ((w = n0([0, 100], r, { clamp: !1 })), (r = [0, 100]));
  const S = m({ ...d, keyframes: r });
  let E;
  l === "mirror" && (E = m({ ...d, keyframes: [...r].reverse(), velocity: -(d.velocity || 0) }));
  let T = "idle",
    k = null,
    M = null,
    D = null;
  S.calculatedDuration === null && o && (S.calculatedDuration = Yf(S));
  const { calculatedDuration: I } = S;
  let Y = 1 / 0,
    U = 1 / 0;
  I !== null && ((Y = I + s), (U = Y * (o + 1) - s));
  let j = 0;
  const B = (N) => {
      if (M === null) return;
      h > 0 && (M = Math.min(M, N)),
        h < 0 && (M = Math.min(N - U / h, M)),
        k !== null ? (j = k) : (j = Math.round(N - M) * h);
      const H = j - t * (h >= 0 ? 1 : -1),
        Ze = h >= 0 ? H < 0 : H > U;
      (j = Math.max(H, 0)), T === "finished" && k === null && (j = U);
      let Le = j,
        qe = S;
      if (o) {
        const Re = j / Y;
        let Tt = Math.floor(Re),
          Ue = Re % 1;
        !Ue && Re >= 1 && (Ue = 1), Ue === 1 && Tt--, (Tt = Math.min(Tt, o + 1));
        const At = !!(Tt % 2);
        At && (l === "reverse" ? ((Ue = 1 - Ue), s && (Ue -= s / Y)) : l === "mirror" && (qe = E));
        let Gt = wn(0, 1, Ue);
        j > U && (Gt = l === "reverse" && At ? 1 : 0), (Le = Gt * Y);
      }
      const he = Ze ? { done: !1, value: r[0] } : qe.next(Le);
      w && (he.value = w(he.value));
      let { done: Je } = he;
      !Ze && I !== null && (Je = h >= 0 ? j >= U : j <= 0);
      const qn = k === null && (T === "finished" || (T === "running" && Je));
      return f && f(he.value), qn && L(), he;
    },
    b = () => {
      p && p.stop(), (p = void 0);
    },
    ge = () => {
      (T = "idle"), b(), y(), (M = D = null);
    },
    L = () => {
      (T = "finished"), c && c(), b(), y();
    },
    O = () => {
      if (g) return;
      p || (p = n(B));
      const N = p.now();
      a && a(),
        k !== null ? (M = N - k) : (!M || T === "finished") && (M = N),
        (D = M),
        (k = null),
        (T = "running"),
        p.start();
    };
  e && O();
  const F = {
    then(N, H) {
      return P.then(N, H);
    },
    get time() {
      return Ft(j);
    },
    set time(N) {
      (N = mn(N)), (j = N), k !== null || !p || h === 0 ? (k = N) : (M = p.now() - N / h);
    },
    get duration() {
      const N = S.calculatedDuration === null ? Yf(S) : S.calculatedDuration;
      return Ft(N);
    },
    get speed() {
      return h;
    },
    set speed(N) {
      N === h || !p || ((h = N), (F.time = Ft(j)));
    },
    get state() {
      return T;
    },
    play: O,
    pause: () => {
      (T = "paused"), (k = j);
    },
    stop: () => {
      (g = !0), T !== "idle" && ((T = "idle"), u && u(), ge());
    },
    cancel: () => {
      D !== null && B(D), ge();
    },
    complete: () => {
      T = "finished";
    },
    sample: (N) => ((M = 0), B(N)),
  };
  return F;
}
const aw = new Set(["opacity", "clipPath", "filter", "transform", "backgroundColor"]),
  Lo = 10,
  uw = 2e4,
  cw = (e, t) => t.type === "spring" || e === "backgroundColor" || !Om(t.ease);
function fw(e, t, { onUpdate: n, onComplete: r, ...i }) {
  if (
    !(zm.waapi() && aw.has(t) && !i.repeatDelay && i.repeatType !== "mirror" && i.damping !== 0 && i.type !== "inertia")
  )
    return !1;
  let s = !1,
    l,
    a;
  const u = () => {
    a = new Promise((y) => {
      l = y;
    });
  };
  u();
  let { keyframes: c, duration: f = 300, ease: d, times: h } = i;
  if (cw(t, i)) {
    const y = ks({ ...i, repeat: 0, delay: 0 });
    let p = { done: !1, value: c[0] };
    const m = [];
    let w = 0;
    for (; !p.done && w < uw; ) (p = y.sample(w)), m.push(p.value), (w += Lo);
    (h = void 0), (c = m), (f = w - Lo), (d = "linear");
  }
  const g = k1(e.owner.current, t, c, { ...i, duration: f, ease: d, times: h }),
    v = () => g.cancel(),
    P = () => {
      te.update(v), l(), u();
    };
  return (
    (g.onfinish = () => {
      e.set(P1(c, i)), r && r(), P();
    }),
    {
      then(y, p) {
        return a.then(y, p);
      },
      get time() {
        return Ft(g.currentTime || 0);
      },
      set time(y) {
        g.currentTime = mn(y);
      },
      get speed() {
        return g.playbackRate;
      },
      set speed(y) {
        g.playbackRate = y;
      },
      get duration() {
        return Ft(f);
      },
      play: () => {
        s || (g.play(), Ut(v));
      },
      pause: () => g.pause(),
      stop: () => {
        if (((s = !0), g.playState === "idle")) return;
        const { currentTime: y } = g;
        if (y) {
          const p = ks({ ...i, autoplay: !1 });
          e.setWithVelocity(p.sample(y - Lo).value, p.sample(y).value, Lo);
        }
        P();
      },
      complete: () => g.finish(),
      cancel: P,
    }
  );
}
function dw({ keyframes: e, delay: t, onUpdate: n, onComplete: r }) {
  const i = () => (
    n && n(e[e.length - 1]),
    r && r(),
    {
      time: 0,
      speed: 1,
      duration: 0,
      play: de,
      pause: de,
      stop: de,
      then: (o) => (o(), Promise.resolve()),
      cancel: de,
      complete: de,
    }
  );
  return t ? ks({ keyframes: [0, 1], duration: 0, delay: t, onComplete: i }) : i();
}
const pw = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  hw = (e) => ({ type: "spring", stiffness: 550, damping: e === 0 ? 2 * Math.sqrt(550) : 30, restSpeed: 10 }),
  mw = { type: "keyframes", duration: 0.8 },
  yw = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  gw = (e, { keyframes: t }) => (t.length > 2 ? mw : bn.has(e) ? (e.startsWith("scale") ? hw(t[1]) : pw) : yw),
  Wa = (e, t) =>
    e === "zIndex"
      ? !1
      : !!(
          typeof t == "number" ||
          Array.isArray(t) ||
          (typeof t == "string" && (xn.test(t) || t === "0") && !t.startsWith("url("))
        ),
  vw = new Set(["brightness", "contrast", "saturate", "opacity"]);
function ww(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [r] = n.match(Zs) || [];
  if (!r) return e;
  const i = n.replace(r, "");
  let o = vw.has(t) ? 1 : 0;
  return r !== n && (o *= 100), t + "(" + o + i + ")";
}
const xw = /([a-z-]*)\(.*?\)/g,
  Ka = {
    ...xn,
    getAnimatableNone: (e) => {
      const t = e.match(xw);
      return t ? t.map(ww).join(" ") : e;
    },
  },
  Sw = {
    ...gm,
    color: Ve,
    backgroundColor: Ve,
    outlineColor: Ve,
    fill: Ve,
    stroke: Ve,
    borderColor: Ve,
    borderTopColor: Ve,
    borderRightColor: Ve,
    borderBottomColor: Ve,
    borderLeftColor: Ve,
    filter: Ka,
    WebkitFilter: Ka,
  },
  fc = (e) => Sw[e];
function s0(e, t) {
  let n = fc(e);
  return n !== Ka && (n = xn), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
}
const l0 = (e) => /^0[^.\s]+$/.test(e);
function Cw(e) {
  if (typeof e == "number") return e === 0;
  if (e !== null) return e === "none" || e === "0" || l0(e);
}
function kw(e, t, n, r) {
  const i = Wa(t, n);
  let o;
  Array.isArray(n) ? (o = [...n]) : (o = [null, n]);
  const s = r.from !== void 0 ? r.from : e.get();
  let l;
  const a = [];
  for (let u = 0; u < o.length; u++)
    o[u] === null && (o[u] = u === 0 ? s : o[u - 1]),
      Cw(o[u]) && a.push(u),
      typeof o[u] == "string" && o[u] !== "none" && o[u] !== "0" && (l = o[u]);
  if (i && a.length && l)
    for (let u = 0; u < a.length; u++) {
      const c = a[u];
      o[c] = s0(t, l);
    }
  return o;
}
function Pw({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: i,
  repeat: o,
  repeatType: s,
  repeatDelay: l,
  from: a,
  elapsed: u,
  ...c
}) {
  return !!Object.keys(c).length;
}
function a0(e, t) {
  return e[t] || e.default || e;
}
const dc =
  (e, t, n, r = {}) =>
  (i) => {
    const o = a0(r, e) || {},
      s = o.delay || r.delay || 0;
    let { elapsed: l = 0 } = r;
    l = l - mn(s);
    const a = kw(t, e, n, o),
      u = a[0],
      c = a[a.length - 1],
      f = Wa(e, u),
      d = Wa(e, c);
    let h = {
      keyframes: a,
      velocity: t.getVelocity(),
      ease: "easeOut",
      ...o,
      delay: -l,
      onUpdate: (g) => {
        t.set(g), o.onUpdate && o.onUpdate(g);
      },
      onComplete: () => {
        i(), o.onComplete && o.onComplete();
      },
    };
    if (
      (Pw(o) || (h = { ...h, ...gw(e, h) }),
      h.duration && (h.duration = mn(h.duration)),
      h.repeatDelay && (h.repeatDelay = mn(h.repeatDelay)),
      !f || !d || C1.current || o.type === !1)
    )
      return dw(h);
    if (t.owner && t.owner.current instanceof HTMLElement && !t.owner.getProps().onUpdate) {
      const g = fw(t, e, h);
      if (g) return g;
    }
    return ks(h);
  };
function Ps(e) {
  return !!($e(e) && e.add);
}
const Ew = (e) => /^\-?\d*\.?\d+$/.test(e);
function pc(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function hc(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class mc {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return pc(this.subscriptions, t), () => hc(this.subscriptions, t);
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
const Tw = (e) => !isNaN(parseFloat(e));
class Aw {
  constructor(t, n = {}) {
    (this.version = "10.12.17"),
      (this.timeDelta = 0),
      (this.lastUpdated = 0),
      (this.canTrackVelocity = !1),
      (this.events = {}),
      (this.updateAndNotify = (r, i = !0) => {
        (this.prev = this.current), (this.current = r);
        const { delta: o, timestamp: s } = ne;
        this.lastUpdated !== s &&
          ((this.timeDelta = o), (this.lastUpdated = s), te.postRender(this.scheduleVelocityCheck)),
          this.prev !== this.current && this.events.change && this.events.change.notify(this.current),
          this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()),
          i && this.events.renderRequest && this.events.renderRequest.notify(this.current);
      }),
      (this.scheduleVelocityCheck = () => te.postRender(this.velocityCheck)),
      (this.velocityCheck = ({ timestamp: r }) => {
        r !== this.lastUpdated &&
          ((this.prev = this.current),
          this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()));
      }),
      (this.hasAnimated = !1),
      (this.prev = this.current = t),
      (this.canTrackVelocity = Tw(this.current)),
      (this.owner = n.owner);
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new mc());
    const r = this.events[t].add(n);
    return t === "change"
      ? () => {
          r(),
            te.read(() => {
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
  set(t, n = !0) {
    !n || !this.passiveEffect ? this.updateAndNotify(t, n) : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    this.set(n), (this.prev = t), (this.timeDelta = r);
  }
  jump(t) {
    this.updateAndNotify(t), (this.prev = t), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    return this.canTrackVelocity ? r0(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0;
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        (this.hasAnimated = !0),
          (this.animation = t(n)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function Or(e, t) {
  return new Aw(e, t);
}
const u0 = (e) => (t) => t.test(e),
  Lw = { test: (e) => e === "auto", parse: (e) => e },
  c0 = [Zn, z, Pt, Zt, Mv, Nv, Lw],
  oi = (e) => c0.find(u0(e)),
  Rw = [...c0, Ve, xn],
  _w = (e) => Rw.find(u0(e));
function Vw(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Or(n));
}
function Dw(e, t) {
  const n = el(e, t);
  let { transitionEnd: r = {}, transition: i = {}, ...o } = n ? e.makeTargetAnimatable(n, !1) : {};
  o = { ...o, ...r };
  for (const s in o) {
    const l = Yv(o[s]);
    Vw(e, s, l);
  }
}
function Nw(e, t, n) {
  var r, i;
  const o = Object.keys(t).filter((l) => !e.hasValue(l)),
    s = o.length;
  if (s)
    for (let l = 0; l < s; l++) {
      const a = o[l],
        u = t[a];
      let c = null;
      Array.isArray(u) && (c = u[0]),
        c === null &&
          (c = (i = (r = n[a]) !== null && r !== void 0 ? r : e.readValue(a)) !== null && i !== void 0 ? i : t[a]),
        c != null &&
          (typeof c == "string" && (Ew(c) || l0(c)) ? (c = parseFloat(c)) : !_w(c) && xn.test(u) && (c = s0(a, u)),
          e.addValue(a, Or(c, { owner: e })),
          n[a] === void 0 && (n[a] = c),
          c !== null && e.setBaseTarget(a, c));
    }
}
function Mw(e, t) {
  return t ? (t[e] || t.default || t).from : void 0;
}
function Ow(e, t, n) {
  const r = {};
  for (const i in e) {
    const o = Mw(i, t);
    if (o !== void 0) r[i] = o;
    else {
      const s = n.getValue(i);
      s && (r[i] = s.get());
    }
  }
  return r;
}
function jw({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return (t[n] = !1), r;
}
function f0(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  let { transition: o = e.getDefaultTransition(), transitionEnd: s, ...l } = e.makeTargetAnimatable(t);
  const a = e.getValue("willChange");
  r && (o = r);
  const u = [],
    c = i && e.animationState && e.animationState.getState()[i];
  for (const f in l) {
    const d = e.getValue(f),
      h = l[f];
    if (!d || h === void 0 || (c && jw(c, f))) continue;
    const g = { delay: n, elapsed: 0, ...o };
    if (window.HandoffAppearAnimations && !d.hasAnimated) {
      const P = e.getProps()[x1];
      P && (g.elapsed = window.HandoffAppearAnimations(P, f, d, te));
    }
    d.start(dc(f, d, h, e.shouldReduceMotion && bn.has(f) ? { type: !1 } : g));
    const v = d.animation;
    Ps(a) && (a.add(f), v.then(() => a.remove(f))), u.push(v);
  }
  return (
    s &&
      Promise.all(u).then(() => {
        s && Dw(e, s);
      }),
    u
  );
}
function Ga(e, t, n = {}) {
  const r = el(e, t, n.custom);
  let { transition: i = e.getDefaultTransition() || {} } = r || {};
  n.transitionOverride && (i = n.transitionOverride);
  const o = r ? () => Promise.all(f0(e, r, n)) : () => Promise.resolve(),
    s =
      e.variantChildren && e.variantChildren.size
        ? (a = 0) => {
            const { delayChildren: u = 0, staggerChildren: c, staggerDirection: f } = i;
            return Fw(e, t, u + a, c, f, n);
          }
        : () => Promise.resolve(),
    { when: l } = i;
  if (l) {
    const [a, u] = l === "beforeChildren" ? [o, s] : [s, o];
    return a().then(() => u());
  } else return Promise.all([o(), s(n.delay)]);
}
function Fw(e, t, n = 0, r = 0, i = 1, o) {
  const s = [],
    l = (e.variantChildren.size - 1) * r,
    a = i === 1 ? (u = 0) => u * r : (u = 0) => l - u * r;
  return (
    Array.from(e.variantChildren)
      .sort(zw)
      .forEach((u, c) => {
        u.notify("AnimationStart", t),
          s.push(Ga(u, t, { ...o, delay: n + a(c) }).then(() => u.notify("AnimationComplete", t)));
      }),
    Promise.all(s)
  );
}
function zw(e, t) {
  return e.sortNodePosition(t);
}
function Iw(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const i = t.map((o) => Ga(e, o, n));
    r = Promise.all(i);
  } else if (typeof t == "string") r = Ga(e, t, n);
  else {
    const i = typeof t == "function" ? el(e, t, n.custom) : t;
    r = Promise.all(f0(e, i, n));
  }
  return r.then(() => e.notify("AnimationComplete", t));
}
const Bw = [...bu].reverse(),
  $w = bu.length;
function Uw(e) {
  return (t) => Promise.all(t.map(({ animation: n, options: r }) => Iw(e, n, r)));
}
function Hw(e) {
  let t = Uw(e);
  const n = Kw();
  let r = !0;
  const i = (a, u) => {
    const c = el(e, u);
    if (c) {
      const { transition: f, transitionEnd: d, ...h } = c;
      a = { ...a, ...h, ...d };
    }
    return a;
  };
  function o(a) {
    t = a(e);
  }
  function s(a, u) {
    const c = e.getProps(),
      f = e.getVariantContext(!0) || {},
      d = [],
      h = new Set();
    let g = {},
      v = 1 / 0;
    for (let y = 0; y < $w; y++) {
      const p = Bw[y],
        m = n[p],
        w = c[p] !== void 0 ? c[p] : f[p],
        S = Ui(w),
        E = p === u ? m.isActive : null;
      E === !1 && (v = y);
      let T = w === f[p] && w !== c[p] && S;
      if (
        (T && r && e.manuallyAnimateOnMount && (T = !1),
        (m.protectedKeys = { ...g }),
        (!m.isActive && E === null) || (!w && !m.prevProp) || Xs(w) || typeof w == "boolean")
      )
        continue;
      const k = Ww(m.prevProp, w);
      let M = k || (p === u && m.isActive && !T && S) || (y > v && S);
      const D = Array.isArray(w) ? w : [w];
      let I = D.reduce(i, {});
      E === !1 && (I = {});
      const { prevResolvedValues: Y = {} } = m,
        U = { ...Y, ...I },
        j = (B) => {
          (M = !0), h.delete(B), (m.needsAnimating[B] = !0);
        };
      for (const B in U) {
        const b = I[B],
          ge = Y[B];
        g.hasOwnProperty(B) ||
          (b !== ge
            ? xs(b) && xs(ge)
              ? !Nm(b, ge) || k
                ? j(B)
                : (m.protectedKeys[B] = !0)
              : b !== void 0
              ? j(B)
              : h.add(B)
            : b !== void 0 && h.has(B)
            ? j(B)
            : (m.protectedKeys[B] = !0));
      }
      (m.prevProp = w),
        (m.prevResolvedValues = I),
        m.isActive && (g = { ...g, ...I }),
        r && e.blockInitialAnimation && (M = !1),
        M && !T && d.push(...D.map((B) => ({ animation: B, options: { type: p, ...a } })));
    }
    if (h.size) {
      const y = {};
      h.forEach((p) => {
        const m = e.getBaseTarget(p);
        m !== void 0 && (y[p] = m);
      }),
        d.push({ animation: y });
    }
    let P = !!d.length;
    return r && c.initial === !1 && !e.manuallyAnimateOnMount && (P = !1), (r = !1), P ? t(d) : Promise.resolve();
  }
  function l(a, u, c) {
    var f;
    if (n[a].isActive === u) return Promise.resolve();
    (f = e.variantChildren) === null ||
      f === void 0 ||
      f.forEach((h) => {
        var g;
        return (g = h.animationState) === null || g === void 0 ? void 0 : g.setActive(a, u);
      }),
      (n[a].isActive = u);
    const d = s(c, a);
    for (const h in n) n[h].protectedKeys = {};
    return d;
  }
  return { animateChanges: s, setActive: l, setAnimateFunction: o, getState: () => n };
}
function Ww(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !Nm(t, e) : !1;
}
function Rn(e = !1) {
  return { isActive: e, protectedKeys: {}, needsAnimating: {}, prevResolvedValues: {} };
}
function Kw() {
  return {
    animate: Rn(!0),
    whileInView: Rn(),
    whileHover: Rn(),
    whileTap: Rn(),
    whileDrag: Rn(),
    whileFocus: Rn(),
    exit: Rn(),
  };
}
class Gw extends Tn {
  constructor(t) {
    super(t), t.animationState || (t.animationState = Hw(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    this.unmount(), Xs(t) && (this.unmount = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {}
}
let Qw = 0;
class Yw extends Tn {
  constructor() {
    super(...arguments), (this.id = Qw++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: t, onExitComplete: n, custom: r } = this.node.presenceContext,
      { isPresent: i } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === i) return;
    const o = this.node.animationState.setActive("exit", !t, { custom: r ?? this.node.getProps().custom });
    n && !t && o.then(() => n(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {}
}
const Xw = { animation: { Feature: Gw }, exit: { Feature: Yw } },
  Xf = (e, t) => Math.abs(e - t);
function bw(e, t) {
  const n = Xf(e.x, t.x),
    r = Xf(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class d0 {
  constructor(t, n, { transformPagePoint: r } = {}) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const u = $l(this.lastMoveEventInfo, this.history),
          c = this.startEvent !== null,
          f = bw(u.offset, { x: 0, y: 0 }) >= 3;
        if (!c && !f) return;
        const { point: d } = u,
          { timestamp: h } = ne;
        this.history.push({ ...d, timestamp: h });
        const { onStart: g, onMove: v } = this.handlers;
        c || (g && g(this.lastMoveEvent, u), (this.startEvent = this.lastMoveEvent)), v && v(this.lastMoveEvent, u);
      }),
      (this.handlePointerMove = (u, c) => {
        (this.lastMoveEvent = u),
          (this.lastMoveEventInfo = Bl(c, this.transformPagePoint)),
          te.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (u, c) => {
        if ((this.end(), !(this.lastMoveEvent && this.lastMoveEventInfo))) return;
        const { onEnd: f, onSessionEnd: d } = this.handlers,
          h = $l(u.type === "pointercancel" ? this.lastMoveEventInfo : Bl(c, this.transformPagePoint), this.history);
        this.startEvent && f && f(u, h), d && d(u, h);
      }),
      !Am(t))
    )
      return;
    (this.handlers = n), (this.transformPagePoint = r);
    const i = qs(t),
      o = Bl(i, this.transformPagePoint),
      { point: s } = o,
      { timestamp: l } = ne;
    this.history = [{ ...s, timestamp: l }];
    const { onSessionStart: a } = n;
    a && a(t, $l(o, this.history)),
      (this.removeListeners = hn(
        jt(window, "pointermove", this.handlePointerMove),
        jt(window, "pointerup", this.handlePointerUp),
        jt(window, "pointercancel", this.handlePointerUp)
      ));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), Ut(this.updatePoint);
  }
}
function Bl(e, t) {
  return t ? { point: t(e.point) } : e;
}
function bf(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function $l({ point: e }, t) {
  return { point: e, delta: bf(e, p0(t)), offset: bf(e, Zw(t)), velocity: qw(t, 0.1) };
}
function Zw(e) {
  return e[0];
}
function p0(e) {
  return e[e.length - 1];
}
function qw(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const i = p0(e);
  for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > mn(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  const o = Ft(i.timestamp - r.timestamp);
  if (o === 0) return { x: 0, y: 0 };
  const s = { x: (i.x - r.x) / o, y: (i.y - r.y) / o };
  return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s;
}
function Ye(e) {
  return e.max - e.min;
}
function Qa(e, t = 0, n = 0.01) {
  return Math.abs(e - t) <= n;
}
function Zf(e, t, n, r = 0.5) {
  (e.origin = r),
    (e.originPoint = ie(t.min, t.max, e.origin)),
    (e.scale = Ye(n) / Ye(t)),
    (Qa(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
    (e.translate = ie(n.min, n.max, e.origin) - e.originPoint),
    (Qa(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function ki(e, t, n, r) {
  Zf(e.x, t.x, n.x, r ? r.originX : void 0), Zf(e.y, t.y, n.y, r ? r.originY : void 0);
}
function qf(e, t, n) {
  (e.min = n.min + t.min), (e.max = e.min + Ye(t));
}
function Jw(e, t, n) {
  qf(e.x, t.x, n.x), qf(e.y, t.y, n.y);
}
function Jf(e, t, n) {
  (e.min = t.min - n.min), (e.max = e.min + Ye(t));
}
function Pi(e, t, n) {
  Jf(e.x, t.x, n.x), Jf(e.y, t.y, n.y);
}
function ex(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? ie(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? ie(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function ed(e, t, n) {
  return { min: t !== void 0 ? e.min + t : void 0, max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0 };
}
function tx(e, { top: t, left: n, bottom: r, right: i }) {
  return { x: ed(e.x, n, i), y: ed(e.y, t, r) };
}
function td(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function nx(e, t) {
  return { x: td(e.x, t.x), y: td(e.y, t.y) };
}
function rx(e, t) {
  let n = 0.5;
  const r = Ye(e),
    i = Ye(t);
  return i > r ? (n = Ki(t.min, t.max - r, e.min)) : r > i && (n = Ki(e.min, e.max - i, t.min)), wn(0, 1, n);
}
function ix(e, t) {
  const n = {};
  return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n;
}
const Ya = 0.35;
function ox(e = Ya) {
  return e === !1 ? (e = 0) : e === !0 && (e = Ya), { x: nd(e, "left", "right"), y: nd(e, "top", "bottom") };
}
function nd(e, t, n) {
  return { min: rd(e, t), max: rd(e, n) };
}
function rd(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const id = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  vr = () => ({ x: id(), y: id() }),
  od = () => ({ min: 0, max: 0 }),
  ue = () => ({ x: od(), y: od() });
function xt(e) {
  return [e("x"), e("y")];
}
function h0({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function sx({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function lx(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function Ul(e) {
  return e === void 0 || e === 1;
}
function Xa({ scale: e, scaleX: t, scaleY: n }) {
  return !Ul(e) || !Ul(t) || !Ul(n);
}
function Dn(e) {
  return Xa(e) || m0(e) || e.z || e.rotate || e.rotateX || e.rotateY;
}
function m0(e) {
  return sd(e.x) || sd(e.y);
}
function sd(e) {
  return e && e !== "0%";
}
function Es(e, t, n) {
  const r = e - n,
    i = t * r;
  return n + i;
}
function ld(e, t, n, r, i) {
  return i !== void 0 && (e = Es(e, i, r)), Es(e, n, r) + t;
}
function ba(e, t = 0, n = 1, r, i) {
  (e.min = ld(e.min, t, n, r, i)), (e.max = ld(e.max, t, n, r, i));
}
function y0(e, { x: t, y: n }) {
  ba(e.x, t.translate, t.scale, t.originPoint), ba(e.y, n.translate, n.scale, n.originPoint);
}
function ax(e, t, n, r = !1) {
  const i = n.length;
  if (!i) return;
  t.x = t.y = 1;
  let o, s;
  for (let l = 0; l < i; l++) {
    (o = n[l]), (s = o.projectionDelta);
    const a = o.instance;
    (a && a.style && a.style.display === "contents") ||
      (r &&
        o.options.layoutScroll &&
        o.scroll &&
        o !== o.root &&
        wr(e, { x: -o.scroll.offset.x, y: -o.scroll.offset.y }),
      s && ((t.x *= s.x.scale), (t.y *= s.y.scale), y0(e, s)),
      r && Dn(o.latestValues) && wr(e, o.latestValues));
  }
  (t.x = ad(t.x)), (t.y = ad(t.y));
}
function ad(e) {
  return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999 ? e : 1;
}
function en(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function ud(e, t, [n, r, i]) {
  const o = t[i] !== void 0 ? t[i] : 0.5,
    s = ie(e.min, e.max, o);
  ba(e, t[n], t[r], s, t.scale);
}
const ux = ["x", "scaleX", "originX"],
  cx = ["y", "scaleY", "originY"];
function wr(e, t) {
  ud(e.x, t, ux), ud(e.y, t, cx);
}
function g0(e, t) {
  return h0(lx(e.getBoundingClientRect(), t));
}
function fx(e, t, n) {
  const r = g0(e, n),
    { scroll: i } = t;
  return i && (en(r.x, i.offset.x), en(r.y, i.offset.y)), r;
}
const dx = new WeakMap();
class px {
  constructor(t) {
    (this.openGlobalLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = ue()),
      (this.visualElement = t);
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1) return;
    const i = (a) => {
        this.stopAnimation(), n && this.snapToCursor(qs(a, "page").point);
      },
      o = (a, u) => {
        const { drag: c, dragPropagation: f, onDragStart: d } = this.getProps();
        if (
          c &&
          !f &&
          (this.openGlobalLock && this.openGlobalLock(), (this.openGlobalLock = Rm(c)), !this.openGlobalLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0), (this.visualElement.projection.target = void 0)),
          xt((g) => {
            let v = this.getAxisMotionValue(g).get() || 0;
            if (Pt.test(v)) {
              const { projection: P } = this.visualElement;
              if (P && P.layout) {
                const y = P.layout.layoutBox[g];
                y && (v = Ye(y) * (parseFloat(v) / 100));
              }
            }
            this.originPoint[g] = v;
          }),
          d && te.update(() => d(a, u), !1, !0);
        const { animationState: h } = this.visualElement;
        h && h.setActive("whileDrag", !0);
      },
      s = (a, u) => {
        const { dragPropagation: c, dragDirectionLock: f, onDirectionLock: d, onDrag: h } = this.getProps();
        if (!c && !this.openGlobalLock) return;
        const { offset: g } = u;
        if (f && this.currentDirection === null) {
          (this.currentDirection = hx(g)), this.currentDirection !== null && d && d(this.currentDirection);
          return;
        }
        this.updateAxis("x", u.point, g), this.updateAxis("y", u.point, g), this.visualElement.render(), h && h(a, u);
      },
      l = (a, u) => this.stop(a, u);
    this.panSession = new d0(
      t,
      { onSessionStart: i, onStart: o, onMove: s, onSessionEnd: l },
      { transformPagePoint: this.visualElement.getTransformPagePoint() }
    );
  }
  stop(t, n) {
    const r = this.isDragging;
    if ((this.cancel(), !r)) return;
    const { velocity: i } = n;
    this.startAnimation(i);
    const { onDragEnd: o } = this.getProps();
    o && te.update(() => o(t, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), (this.panSession = void 0);
    const { dragPropagation: r } = this.getProps();
    !r && this.openGlobalLock && (this.openGlobalLock(), (this.openGlobalLock = null)),
      n && n.setActive("whileDrag", !1);
  }
  updateAxis(t, n, r) {
    const { drag: i } = this.getProps();
    if (!r || !Ro(t, i, this.currentDirection)) return;
    const o = this.getAxisMotionValue(t);
    let s = this.originPoint[t] + r[t];
    this.constraints && this.constraints[t] && (s = ex(s, this.constraints[t], this.elastic[t])), o.set(s);
  }
  resolveConstraints() {
    const { dragConstraints: t, dragElastic: n } = this.getProps(),
      { layout: r } = this.visualElement.projection || {},
      i = this.constraints;
    t && yr(t)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : t && r
      ? (this.constraints = tx(r.layoutBox, t))
      : (this.constraints = !1),
      (this.elastic = ox(n)),
      i !== this.constraints &&
        r &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        xt((o) => {
          this.getAxisMotionValue(o) && (this.constraints[o] = ix(r.layoutBox[o], this.constraints[o]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !yr(t)) return !1;
    const r = t.current,
      { projection: i } = this.visualElement;
    if (!i || !i.layout) return !1;
    const o = fx(r, i.root, this.visualElement.getTransformPagePoint());
    let s = nx(i.layout.layoutBox, o);
    if (n) {
      const l = n(sx(s));
      (this.hasMutatedConstraints = !!l), l && (s = h0(l));
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
        onDragTransitionEnd: l,
      } = this.getProps(),
      a = this.constraints || {},
      u = xt((c) => {
        if (!Ro(c, n, this.currentDirection)) return;
        let f = (a && a[c]) || {};
        s && (f = { min: 0, max: 0 });
        const d = i ? 200 : 1e6,
          h = i ? 40 : 1e7,
          g = {
            type: "inertia",
            velocity: r ? t[c] : 0,
            bounceStiffness: d,
            bounceDamping: h,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...o,
            ...f,
          };
        return this.startAxisValueAnimation(c, g);
      });
    return Promise.all(u).then(l);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return r.start(dc(t, r, 0, n));
  }
  stopAnimation() {
    xt((t) => this.getAxisMotionValue(t).stop());
  }
  getAxisMotionValue(t) {
    const n = "_drag" + t.toUpperCase(),
      r = this.visualElement.getProps(),
      i = r[n];
    return i || this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0);
  }
  snapToCursor(t) {
    xt((n) => {
      const { drag: r } = this.getProps();
      if (!Ro(n, r, this.currentDirection)) return;
      const { projection: i } = this.visualElement,
        o = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: s, max: l } = i.layout.layoutBox[n];
        o.set(t[n] - ie(s, l, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!yr(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    xt((s) => {
      const l = this.getAxisMotionValue(s);
      if (l) {
        const a = l.get();
        i[s] = rx({ min: a, max: a }, this.constraints[s]);
      }
    });
    const { transformTemplate: o } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = o ? o({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      xt((s) => {
        if (!Ro(s, t, null)) return;
        const l = this.getAxisMotionValue(s),
          { min: a, max: u } = this.constraints[s];
        l.set(ie(a, u, i[s]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    dx.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = jt(t, "pointerdown", (a) => {
        const { drag: u, dragListener: c = !0 } = this.getProps();
        u && c && this.start(a);
      }),
      r = () => {
        const { dragConstraints: a } = this.getProps();
        yr(a) && (this.constraints = this.resolveRefConstraints());
      },
      { projection: i } = this.visualElement,
      o = i.addEventListener("measure", r);
    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), r();
    const s = Mt(window, "resize", () => this.scalePositionWithinConstraints()),
      l = i.addEventListener("didUpdate", ({ delta: a, hasLayoutChanged: u }) => {
        this.isDragging &&
          u &&
          (xt((c) => {
            const f = this.getAxisMotionValue(c);
            f && ((this.originPoint[c] += a[c].translate), f.set(f.get() + a[c].translate));
          }),
          this.visualElement.render());
      });
    return () => {
      s(), n(), o(), l && l();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: i = !1,
        dragConstraints: o = !1,
        dragElastic: s = Ya,
        dragMomentum: l = !0,
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: i,
      dragConstraints: o,
      dragElastic: s,
      dragMomentum: l,
    };
  }
}
function Ro(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function hx(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n;
}
class mx extends Tn {
  constructor(t) {
    super(t), (this.removeGroupControls = de), (this.removeListeners = de), (this.controls = new px(t));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || de);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const cd = (e) => (t, n) => {
  e && te.update(() => e(t, n));
};
class yx extends Tn {
  constructor() {
    super(...arguments), (this.removePointerDownListener = de);
  }
  onPointerDown(t) {
    this.session = new d0(t, this.createPanHandlers(), { transformPagePoint: this.node.getTransformPagePoint() });
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: i } = this.node.getProps();
    return {
      onSessionStart: cd(t),
      onStart: cd(n),
      onMove: r,
      onEnd: (o, s) => {
        delete this.session, i && te.update(() => i(o, s));
      },
    };
  }
  mount() {
    this.removePointerDownListener = jt(this.node.current, "pointerdown", (t) => this.onPointerDown(t));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
function gx() {
  const e = x.useContext(Qs);
  if (e === null) return [!0, null];
  const { isPresent: t, onExitComplete: n, register: r } = e,
    i = x.useId();
  return x.useEffect(() => r(i), []), !t && n ? [!1, () => n && n(i)] : [!0];
}
const Go = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function fd(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const si = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (z.test(e)) e = parseFloat(e);
        else return e;
      const n = fd(e, t.target.x),
        r = fd(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  vx = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        i = xn.parse(e);
      if (i.length > 5) return r;
      const o = xn.createTransformer(e),
        s = typeof i[0] != "number" ? 1 : 0,
        l = n.x.scale * t.x,
        a = n.y.scale * t.y;
      (i[0 + s] /= l), (i[1 + s] /= a);
      const u = ie(l, a, 0.5);
      return typeof i[2 + s] == "number" && (i[2 + s] /= u), typeof i[3 + s] == "number" && (i[3 + s] /= u), o(i);
    },
  };
class wx extends Te.Component {
  componentDidMount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: i } = this.props,
      { projection: o } = t;
    Tv(xx),
      o &&
        (n.group && n.group.add(o),
        r && r.register && i && r.register(o),
        o.root.didUpdate(),
        o.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        o.setOptions({ ...o.options, onExitComplete: () => this.safeToRemove() })),
      (Go.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(t) {
    const { layoutDependency: n, visualElement: r, drag: i, isPresent: o } = this.props,
      s = r.projection;
    return (
      s &&
        ((s.isPresent = o),
        i || t.layoutDependency !== n || n === void 0 ? s.willUpdate() : this.safeToRemove(),
        t.isPresent !== o &&
          (o
            ? s.promote()
            : s.relegate() ||
              te.postRender(() => {
                const l = s.getStack();
                (!l || !l.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      queueMicrotask(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r } = this.props,
      { projection: i } = t;
    i && (i.scheduleCheckAfterUnmount(), n && n.group && n.group.remove(i), r && r.deregister && r.deregister(i));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function v0(e) {
  const [t, n] = gx(),
    r = x.useContext(qu);
  return Te.createElement(wx, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: x.useContext(dm),
    isPresent: t,
    safeToRemove: n,
  });
}
const xx = {
    borderRadius: {
      ...si,
      applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"],
    },
    borderTopLeftRadius: si,
    borderTopRightRadius: si,
    borderBottomLeftRadius: si,
    borderBottomRightRadius: si,
    boxShadow: vx,
  },
  w0 = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  Sx = w0.length,
  dd = (e) => (typeof e == "string" ? parseFloat(e) : e),
  pd = (e) => typeof e == "number" || z.test(e);
function Cx(e, t, n, r, i, o) {
  i
    ? ((e.opacity = ie(0, n.opacity !== void 0 ? n.opacity : 1, kx(r))),
      (e.opacityExit = ie(t.opacity !== void 0 ? t.opacity : 1, 0, Px(r))))
    : o && (e.opacity = ie(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
  for (let s = 0; s < Sx; s++) {
    const l = `border${w0[s]}Radius`;
    let a = hd(t, l),
      u = hd(n, l);
    if (a === void 0 && u === void 0) continue;
    a || (a = 0),
      u || (u = 0),
      a === 0 || u === 0 || pd(a) === pd(u)
        ? ((e[l] = Math.max(ie(dd(a), dd(u), r), 0)), (Pt.test(u) || Pt.test(a)) && (e[l] += "%"))
        : (e[l] = u);
  }
  (t.rotate || n.rotate) && (e.rotate = ie(t.rotate || 0, n.rotate || 0, r));
}
function hd(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const kx = x0(0, 0.5, ac),
  Px = x0(0.5, 0.95, de);
function x0(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(Ki(e, t, r)));
}
function md(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function et(e, t) {
  md(e.x, t.x), md(e.y, t.y);
}
function yd(e, t, n, r, i) {
  return (e -= t), (e = Es(e, 1 / n, r)), i !== void 0 && (e = Es(e, 1 / i, r)), e;
}
function Ex(e, t = 0, n = 1, r = 0.5, i, o = e, s = e) {
  if ((Pt.test(t) && ((t = parseFloat(t)), (t = ie(s.min, s.max, t / 100) - s.min)), typeof t != "number")) return;
  let l = ie(o.min, o.max, r);
  e === o && (l -= t), (e.min = yd(e.min, t, n, l, i)), (e.max = yd(e.max, t, n, l, i));
}
function gd(e, t, [n, r, i], o, s) {
  Ex(e, t[n], t[r], t[i], t.scale, o, s);
}
const Tx = ["x", "scaleX", "originX"],
  Ax = ["y", "scaleY", "originY"];
function vd(e, t, n, r) {
  gd(e.x, t, Tx, n ? n.x : void 0, r ? r.x : void 0), gd(e.y, t, Ax, n ? n.y : void 0, r ? r.y : void 0);
}
function wd(e) {
  return e.translate === 0 && e.scale === 1;
}
function S0(e) {
  return wd(e.x) && wd(e.y);
}
function Za(e, t) {
  return e.x.min === t.x.min && e.x.max === t.x.max && e.y.min === t.y.min && e.y.max === t.y.max;
}
function xd(e) {
  return Ye(e.x) / Ye(e.y);
}
class Lx {
  constructor() {
    this.members = [];
  }
  add(t) {
    pc(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if ((hc(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead)) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((i) => t === i);
    if (n === 0) return !1;
    let r;
    for (let i = n; i >= 0; i--) {
      const o = this.members[i];
      if (o.isPresent !== !1) {
        r = o;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
      r.instance && r.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = r),
        n && (t.resumeFrom.preserveOpacity = !0),
        r.snapshot && ((t.snapshot = r.snapshot), (t.snapshot.latestValues = r.animationValues || r.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: i } = t.options;
      i === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      n.onExitComplete && n.onExitComplete(), r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function Sd(e, t, n) {
  let r = "";
  const i = e.x.translate / t.x,
    o = e.y.translate / t.y;
  if (
    ((i || o) && (r = `translate3d(${i}px, ${o}px, 0) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const { rotate: a, rotateX: u, rotateY: c } = n;
    a && (r += `rotate(${a}deg) `), u && (r += `rotateX(${u}deg) `), c && (r += `rotateY(${c}deg) `);
  }
  const s = e.x.scale * t.x,
    l = e.y.scale * t.y;
  return (s !== 1 || l !== 1) && (r += `scale(${s}, ${l})`), r || "none";
}
const Rx = (e, t) => e.depth - t.depth;
class _x {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(t) {
    pc(this.children, t), (this.isDirty = !0);
  }
  remove(t) {
    hc(this.children, t), (this.isDirty = !0);
  }
  forEach(t) {
    this.isDirty && this.children.sort(Rx), (this.isDirty = !1), this.children.forEach(t);
  }
}
function Vx(e, t) {
  const n = performance.now(),
    r = ({ timestamp: i }) => {
      const o = i - n;
      o >= t && (Ut(r), e(o - t));
    };
  return te.read(r, !0), () => Ut(r);
}
function Dx(e) {
  window.MotionDebug && window.MotionDebug.record(e);
}
function Nx(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function Mx(e, t, n) {
  const r = $e(e) ? e : Or(e);
  return r.start(dc("", r, t, n)), r.animation;
}
const Cd = ["", "X", "Y", "Z"],
  kd = 1e3;
let Ox = 0;
const Nn = { type: "projectionFrame", totalNodes: 0, resolvedTargetDeltas: 0, recalculatedProjection: 0 };
function C0({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: i }) {
  return class {
    constructor(s = {}, l = t == null ? void 0 : t()) {
      (this.id = Ox++),
        (this.animationId = 0),
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
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (Nn.totalNodes = Nn.resolvedTargetDeltas = Nn.recalculatedProjection = 0),
            this.nodes.forEach(zx),
            this.nodes.forEach(Hx),
            this.nodes.forEach(Wx),
            this.nodes.forEach(Ix),
            Dx(Nn);
        }),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = s),
        (this.root = l ? l.root || l : this),
        (this.path = l ? [...l.path, l] : []),
        (this.parent = l),
        (this.depth = l ? l.depth + 1 : 0);
      for (let a = 0; a < this.path.length; a++) this.path[a].shouldResetTransform = !0;
      this.root === this && (this.nodes = new _x());
    }
    addEventListener(s, l) {
      return this.eventHandlers.has(s) || this.eventHandlers.set(s, new mc()), this.eventHandlers.get(s).add(l);
    }
    notifyListeners(s, ...l) {
      const a = this.eventHandlers.get(s);
      a && a.notify(...l);
    }
    hasListeners(s) {
      return this.eventHandlers.has(s);
    }
    mount(s, l = this.root.hasTreeAnimated) {
      if (this.instance) return;
      (this.isSVG = Nx(s)), (this.instance = s);
      const { layoutId: a, layout: u, visualElement: c } = this.options;
      if (
        (c && !c.current && c.mount(s),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        l && (u || a) && (this.isLayoutDirty = !0),
        e)
      ) {
        let f;
        const d = () => (this.root.updateBlockedByResize = !1);
        e(s, () => {
          (this.root.updateBlockedByResize = !0),
            f && f(),
            (f = Vx(d, 250)),
            Go.hasAnimatedSinceResize && ((Go.hasAnimatedSinceResize = !1), this.nodes.forEach(Ed));
        });
      }
      a && this.root.registerSharedNode(a, this),
        this.options.animate !== !1 &&
          c &&
          (a || u) &&
          this.addEventListener(
            "didUpdate",
            ({ delta: f, hasLayoutChanged: d, hasRelativeTargetChanged: h, layout: g }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const v = this.options.transition || c.getDefaultTransition() || Xx,
                { onLayoutAnimationStart: P, onLayoutAnimationComplete: y } = c.getProps(),
                p = !this.targetLayout || !Za(this.targetLayout, g) || h,
                m = !d && h;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                m ||
                (d && (p || !this.currentAnimation))
              ) {
                this.resumeFrom && ((this.resumingFrom = this.resumeFrom), (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(f, m);
                const w = { ...a0(v, "layout"), onPlay: P, onComplete: y };
                (c.shouldReduceMotion || this.options.layoutRoot) && ((w.delay = 0), (w.type = !1)),
                  this.startAnimation(w);
              } else d || Ed(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
              this.targetLayout = g;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const s = this.getStack();
      s && s.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        Ut(this.updateProjection);
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
      return this.isAnimationBlocked || (this.parent && this.parent.isTreeAnimationBlocked()) || !1;
    }
    startUpdate() {
      this.isUpdateBlocked() || ((this.isUpdating = !0), this.nodes && this.nodes.forEach(Kx), this.animationId++);
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
      if ((!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)) return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const f = this.path[c];
        (f.shouldResetTransform = !0), f.updateScroll("snapshot"), f.options.layoutRoot && f.willUpdate(!1);
      }
      const { layoutId: l, layout: a } = this.options;
      if (l === void 0 && !a) return;
      const u = this.getTransformTemplate();
      (this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        s && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Pd);
        return;
      }
      this.isUpdating || this.nodes.forEach($x),
        (this.isUpdating = !1),
        this.nodes.forEach(Ux),
        this.nodes.forEach(jx),
        this.nodes.forEach(Fx),
        this.clearAllSnapshots();
      const l = performance.now();
      (ne.delta = wn(0, 1e3 / 60, l - ne.timestamp)),
        (ne.timestamp = l),
        (ne.isProcessing = !0),
        Tr.update.process(ne),
        Tr.preRender.process(ne),
        Tr.render.process(ne),
        (ne.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled || ((this.updateScheduled = !0), queueMicrotask(() => this.update()));
    }
    clearAllSnapshots() {
      this.nodes.forEach(Bx), this.sharedNodes.forEach(Gx);
    }
    scheduleUpdateProjection() {
      te.preRender(this.updateProjection, !1, !0);
    }
    scheduleCheckAfterUnmount() {
      te.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let a = 0; a < this.path.length; a++) this.path[a].updateScroll();
      const s = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = ue()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: l } = this.options;
      l && l.notify("LayoutMeasure", this.layout.layoutBox, s ? s.layoutBox : void 0);
    }
    updateScroll(s = "measure") {
      let l = !!(this.options.layoutScroll && this.instance);
      this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === s && (l = !1),
        l &&
          (this.scroll = {
            animationId: this.root.animationId,
            phase: s,
            isRoot: r(this.instance),
            offset: n(this.instance),
          });
    }
    resetTransform() {
      if (!i) return;
      const s = this.isLayoutDirty || this.shouldResetTransform,
        l = this.projectionDelta && !S0(this.projectionDelta),
        a = this.getTransformTemplate(),
        u = a ? a(this.latestValues, "") : void 0,
        c = u !== this.prevTransformTemplateValue;
      s &&
        (l || Dn(this.latestValues) || c) &&
        (i(this.instance, u), (this.shouldResetTransform = !1), this.scheduleRender());
    }
    measure(s = !0) {
      const l = this.measurePageBox();
      let a = this.removeElementScroll(l);
      return (
        s && (a = this.removeTransform(a)),
        bx(a),
        { animationId: this.root.animationId, measuredBox: l, layoutBox: a, latestValues: {}, source: this.id }
      );
    }
    measurePageBox() {
      const { visualElement: s } = this.options;
      if (!s) return ue();
      const l = s.measureViewportBox(),
        { scroll: a } = this.root;
      return a && (en(l.x, a.offset.x), en(l.y, a.offset.y)), l;
    }
    removeElementScroll(s) {
      const l = ue();
      et(l, s);
      for (let a = 0; a < this.path.length; a++) {
        const u = this.path[a],
          { scroll: c, options: f } = u;
        if (u !== this.root && c && f.layoutScroll) {
          if (c.isRoot) {
            et(l, s);
            const { scroll: d } = this.root;
            d && (en(l.x, -d.offset.x), en(l.y, -d.offset.y));
          }
          en(l.x, c.offset.x), en(l.y, c.offset.y);
        }
      }
      return l;
    }
    applyTransform(s, l = !1) {
      const a = ue();
      et(a, s);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !l &&
          c.options.layoutScroll &&
          c.scroll &&
          c !== c.root &&
          wr(a, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
          Dn(c.latestValues) && wr(a, c.latestValues);
      }
      return Dn(this.latestValues) && wr(a, this.latestValues), a;
    }
    removeTransform(s) {
      const l = ue();
      et(l, s);
      for (let a = 0; a < this.path.length; a++) {
        const u = this.path[a];
        if (!u.instance || !Dn(u.latestValues)) continue;
        Xa(u.latestValues) && u.updateSnapshot();
        const c = ue(),
          f = u.measurePageBox();
        et(c, f), vd(l, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return Dn(this.latestValues) && vd(l, this.latestValues), l;
    }
    setTargetDelta(s) {
      (this.targetDelta = s), this.root.scheduleUpdateProjection(), (this.isProjectionDirty = !0);
    }
    setOptions(s) {
      this.options = { ...this.options, ...s, crossfade: s.crossfade !== void 0 ? s.crossfade : !0 };
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
        this.relativeParent.resolvedRelativeTargetAt !== ne.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(s = !1) {
      var l;
      const a = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty),
        this.isSharedProjectionDirty || (this.isSharedProjectionDirty = a.isSharedProjectionDirty);
      const u = !!this.resumingFrom || this !== a;
      if (
        !(
          s ||
          (u && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((l = this.parent) === null || l === void 0) && l.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget
        )
      )
        return;
      const { layout: f, layoutId: d } = this.options;
      if (!(!this.layout || !(f || d))) {
        if (((this.resolvedRelativeTargetAt = ne.timestamp), !this.targetDelta && !this.relativeTarget)) {
          const h = this.getClosestProjectingParent();
          h && h.layout && this.animationProgress !== 1
            ? ((this.relativeParent = h),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = ue()),
              (this.relativeTargetOrigin = ue()),
              Pi(this.relativeTargetOrigin, this.layout.layoutBox, h.layout.layoutBox),
              et(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target || ((this.target = ue()), (this.targetWithTransforms = ue())),
            this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                Jw(this.target, this.relativeTarget, this.relativeParent.target))
              : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : et(this.target, this.layout.layoutBox),
                y0(this.target, this.targetDelta))
              : et(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const h = this.getClosestProjectingParent();
            h &&
            !!h.resumingFrom == !!this.resumingFrom &&
            !h.options.layoutScroll &&
            h.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = h),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = ue()),
                (this.relativeTargetOrigin = ue()),
                Pi(this.relativeTargetOrigin, this.target, h.target),
                et(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          Nn.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || Xa(this.parent.latestValues) || m0(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      var s;
      const l = this.getLead(),
        a = !!this.resumingFrom || this !== l;
      let u = !0;
      if (
        ((this.isProjectionDirty || (!((s = this.parent) === null || s === void 0) && s.isProjectionDirty)) && (u = !1),
        a && (this.isSharedProjectionDirty || this.isTransformDirty) && (u = !1),
        this.resolvedRelativeTargetAt === ne.timestamp && (u = !1),
        u)
      )
        return;
      const { layout: c, layoutId: f } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(c || f))
      )
        return;
      et(this.layoutCorrected, this.layout.layoutBox);
      const d = this.treeScale.x,
        h = this.treeScale.y;
      ax(this.layoutCorrected, this.treeScale, this.path, a),
        l.layout && !l.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (l.target = l.layout.layoutBox);
      const { target: g } = l;
      if (!g) {
        this.projectionTransform &&
          ((this.projectionDelta = vr()), (this.projectionTransform = "none"), this.scheduleRender());
        return;
      }
      this.projectionDelta || ((this.projectionDelta = vr()), (this.projectionDeltaWithTransform = vr()));
      const v = this.projectionTransform;
      ki(this.projectionDelta, this.layoutCorrected, g, this.latestValues),
        (this.projectionTransform = Sd(this.projectionDelta, this.treeScale)),
        (this.projectionTransform !== v || this.treeScale.x !== d || this.treeScale.y !== h) &&
          ((this.hasProjected = !0), this.scheduleRender(), this.notifyListeners("projectionUpdate", g)),
        Nn.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(s = !0) {
      if ((this.options.scheduleRender && this.options.scheduleRender(), s)) {
        const l = this.getStack();
        l && l.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    setAnimationOrigin(s, l = !1) {
      const a = this.snapshot,
        u = a ? a.latestValues : {},
        c = { ...this.latestValues },
        f = vr();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !l);
      const d = ue(),
        h = a ? a.source : void 0,
        g = this.layout ? this.layout.source : void 0,
        v = h !== g,
        P = this.getStack(),
        y = !P || P.members.length <= 1,
        p = !!(v && !y && this.options.crossfade === !0 && !this.path.some(Yx));
      this.animationProgress = 0;
      let m;
      (this.mixTargetDelta = (w) => {
        const S = w / 1e3;
        Td(f.x, s.x, S),
          Td(f.y, s.y, S),
          this.setTargetDelta(f),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Pi(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            Qx(this.relativeTarget, this.relativeTargetOrigin, d, S),
            m && Za(this.relativeTarget, m) && (this.isProjectionDirty = !1),
            m || (m = ue()),
            et(m, this.relativeTarget)),
          v && ((this.animationValues = c), Cx(c, u, this.latestValues, S, p, y)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = S);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(s) {
      this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation && (Ut(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = te.update(() => {
          (Go.hasAnimatedSinceResize = !0),
            (this.currentAnimation = Mx(0, kd, {
              ...s,
              onUpdate: (l) => {
                this.mixTargetDelta(l), s.onUpdate && s.onUpdate(l);
              },
              onComplete: () => {
                s.onComplete && s.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0), (this.resumingFrom.preserveOpacity = void 0));
      const s = this.getStack();
      s && s.exitAnimationComplete(),
        (this.resumingFrom = this.currentAnimation = this.animationValues = void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(kd), this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const s = this.getLead();
      let { targetWithTransforms: l, target: a, layout: u, latestValues: c } = s;
      if (!(!l || !a || !u)) {
        if (this !== s && this.layout && u && k0(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
          a = this.target || ue();
          const f = Ye(this.layout.layoutBox.x);
          (a.x.min = s.target.x.min), (a.x.max = a.x.min + f);
          const d = Ye(this.layout.layoutBox.y);
          (a.y.min = s.target.y.min), (a.y.max = a.y.min + d);
        }
        et(l, a), wr(l, c), ki(this.projectionDeltaWithTransform, this.layoutCorrected, l, c);
      }
    }
    registerSharedNode(s, l) {
      this.sharedNodes.has(s) || this.sharedNodes.set(s, new Lx()), this.sharedNodes.get(s).add(l);
      const u = l.options.initialPromotionConfig;
      l.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity: u && u.shouldPreserveFollowOpacity ? u.shouldPreserveFollowOpacity(l) : void 0,
      });
    }
    isLead() {
      const s = this.getStack();
      return s ? s.lead === this : !0;
    }
    getLead() {
      var s;
      const { layoutId: l } = this.options;
      return l ? ((s = this.getStack()) === null || s === void 0 ? void 0 : s.lead) || this : this;
    }
    getPrevLead() {
      var s;
      const { layoutId: l } = this.options;
      return l ? ((s = this.getStack()) === null || s === void 0 ? void 0 : s.prevLead) : void 0;
    }
    getStack() {
      const { layoutId: s } = this.options;
      if (s) return this.root.sharedNodes.get(s);
    }
    promote({ needsReset: s, transition: l, preserveFollowOpacity: a } = {}) {
      const u = this.getStack();
      u && u.promote(this, a),
        s && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        l && this.setOptions({ transition: l });
    }
    relegate() {
      const s = this.getStack();
      return s ? s.relegate(this) : !1;
    }
    resetRotation() {
      const { visualElement: s } = this.options;
      if (!s) return;
      let l = !1;
      const { latestValues: a } = s;
      if (((a.rotate || a.rotateX || a.rotateY || a.rotateZ) && (l = !0), !l)) return;
      const u = {};
      for (let c = 0; c < Cd.length; c++) {
        const f = "rotate" + Cd[c];
        a[f] && ((u[f] = a[f]), s.setStaticValue(f, 0));
      }
      s.render();
      for (const c in u) s.setStaticValue(c, u[c]);
      s.scheduleRender();
    }
    getProjectionStyles(s = {}) {
      var l, a;
      const u = {};
      if (!this.instance || this.isSVG) return u;
      if (this.isVisible) u.visibility = "";
      else return { visibility: "hidden" };
      const c = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (u.opacity = ""),
          (u.pointerEvents = Ko(s.pointerEvents) || ""),
          (u.transform = c ? c(this.latestValues, "") : "none"),
          u
        );
      const f = this.getLead();
      if (!this.projectionDelta || !this.layout || !f.target) {
        const v = {};
        return (
          this.options.layoutId &&
            ((v.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1),
            (v.pointerEvents = Ko(s.pointerEvents) || "")),
          this.hasProjected &&
            !Dn(this.latestValues) &&
            ((v.transform = c ? c({}, "") : "none"), (this.hasProjected = !1)),
          v
        );
      }
      const d = f.animationValues || f.latestValues;
      this.applyTransformsToTarget(),
        (u.transform = Sd(this.projectionDeltaWithTransform, this.treeScale, d)),
        c && (u.transform = c(d, u.transform));
      const { x: h, y: g } = this.projectionDelta;
      (u.transformOrigin = `${h.origin * 100}% ${g.origin * 100}% 0`),
        f.animationValues
          ? (u.opacity =
              f === this
                ? (a = (l = d.opacity) !== null && l !== void 0 ? l : this.latestValues.opacity) !== null &&
                  a !== void 0
                  ? a
                  : 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : d.opacityExit)
          : (u.opacity =
              f === this ? (d.opacity !== void 0 ? d.opacity : "") : d.opacityExit !== void 0 ? d.opacityExit : 0);
      for (const v in vs) {
        if (d[v] === void 0) continue;
        const { correct: P, applyTo: y } = vs[v],
          p = u.transform === "none" ? d[v] : P(d[v], f);
        if (y) {
          const m = y.length;
          for (let w = 0; w < m; w++) u[y[w]] = p;
        } else u[v] = p;
      }
      return this.options.layoutId && (u.pointerEvents = f === this ? Ko(s.pointerEvents) || "" : "none"), u;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((s) => {
        var l;
        return (l = s.currentAnimation) === null || l === void 0 ? void 0 : l.stop();
      }),
        this.root.nodes.forEach(Pd),
        this.root.sharedNodes.clear();
    }
  };
}
function jx(e) {
  e.updateLayout();
}
function Fx(e) {
  var t;
  const n = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: i } = e.layout,
      { animationType: o } = e.options,
      s = n.source !== e.layout.source;
    o === "size"
      ? xt((f) => {
          const d = s ? n.measuredBox[f] : n.layoutBox[f],
            h = Ye(d);
          (d.min = r[f].min), (d.max = d.min + h);
        })
      : k0(o, n.layoutBox, r) &&
        xt((f) => {
          const d = s ? n.measuredBox[f] : n.layoutBox[f],
            h = Ye(r[f]);
          (d.max = d.min + h),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0), (e.relativeTarget[f].max = e.relativeTarget[f].min + h));
        });
    const l = vr();
    ki(l, r, n.layoutBox);
    const a = vr();
    s ? ki(a, e.applyTransform(i, !0), n.measuredBox) : ki(a, r, n.layoutBox);
    const u = !S0(l);
    let c = !1;
    if (!e.resumeFrom) {
      const f = e.getClosestProjectingParent();
      if (f && !f.resumeFrom) {
        const { snapshot: d, layout: h } = f;
        if (d && h) {
          const g = ue();
          Pi(g, n.layoutBox, d.layoutBox);
          const v = ue();
          Pi(v, r, h.layoutBox),
            Za(g, v) || (c = !0),
            f.options.layoutRoot && ((e.relativeTarget = v), (e.relativeTargetOrigin = g), (e.relativeParent = f));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: a,
      layoutDelta: l,
      hasLayoutChanged: u,
      hasRelativeTargetChanged: c,
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function zx(e) {
  Nn.totalNodes++,
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
function Ix(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function Bx(e) {
  e.clearSnapshot();
}
function Pd(e) {
  e.clearMeasurements();
}
function $x(e) {
  e.isLayoutDirty = !1;
}
function Ux(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function Ed(e) {
  e.finishAnimation(), (e.targetDelta = e.relativeTarget = e.target = void 0), (e.isProjectionDirty = !0);
}
function Hx(e) {
  e.resolveTargetDelta();
}
function Wx(e) {
  e.calcProjection();
}
function Kx(e) {
  e.resetRotation();
}
function Gx(e) {
  e.removeLeadSnapshot();
}
function Td(e, t, n) {
  (e.translate = ie(t.translate, 0, n)),
    (e.scale = ie(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function Ad(e, t, n, r) {
  (e.min = ie(t.min, n.min, r)), (e.max = ie(t.max, n.max, r));
}
function Qx(e, t, n, r) {
  Ad(e.x, t.x, n.x, r), Ad(e.y, t.y, n.y, r);
}
function Yx(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const Xx = { duration: 0.45, ease: [0.4, 0, 0.1, 1] };
function Ld(e) {
  (e.min = Math.round(e.min)), (e.max = Math.round(e.max));
}
function bx(e) {
  Ld(e.x), Ld(e.y);
}
function k0(e, t, n) {
  return e === "position" || (e === "preserve-aspect" && !Qa(xd(t), xd(n), 0.2));
}
const Zx = C0({
    attachResizeListener: (e, t) => Mt(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  Hl = { current: void 0 },
  P0 = C0({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!Hl.current) {
        const e = new Zx({});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (Hl.current = e);
      }
      return Hl.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  qx = { pan: { Feature: yx }, drag: { Feature: mx, ProjectionNode: P0, MeasureLayout: v0 } },
  Jx = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function e2(e) {
  const t = Jx.exec(e);
  if (!t) return [,];
  const [, n, r] = t;
  return [n, r];
}
function qa(e, t, n = 1) {
  const [r, i] = e2(e);
  if (!r) return;
  const o = window.getComputedStyle(t).getPropertyValue(r);
  return o ? o.trim() : Ia(i) ? qa(i, t, n + 1) : i;
}
function t2(e, { ...t }, n) {
  const r = e.current;
  if (!(r instanceof Element)) return { target: t, transitionEnd: n };
  n && (n = { ...n }),
    e.values.forEach((i) => {
      const o = i.get();
      if (!Ia(o)) return;
      const s = qa(o, r);
      s && i.set(s);
    });
  for (const i in t) {
    const o = t[i];
    if (!Ia(o)) continue;
    const s = qa(o, r);
    s && ((t[i] = s), n || (n = {}), n[i] === void 0 && (n[i] = o));
  }
  return { target: t, transitionEnd: n };
}
const n2 = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y", "translateX", "translateY"]),
  E0 = (e) => n2.has(e),
  r2 = (e) => Object.keys(e).some(E0),
  Rd = (e) => e === Zn || e === z,
  _d = (e, t) => parseFloat(e.split(", ")[t]),
  Vd =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === "none" || !r) return 0;
      const i = r.match(/^matrix3d\((.+)\)$/);
      if (i) return _d(i[1], t);
      {
        const o = r.match(/^matrix\((.+)\)$/);
        return o ? _d(o[1], e) : 0;
      }
    },
  i2 = new Set(["x", "y", "z"]),
  o2 = Zi.filter((e) => !i2.has(e));
function s2(e) {
  const t = [];
  return (
    o2.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t.length && e.render(),
    t
  );
}
const Dd = {
    width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
    height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
      e.max - e.min - parseFloat(t) - parseFloat(n),
    top: (e, { top: t }) => parseFloat(t),
    left: (e, { left: t }) => parseFloat(t),
    bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
    right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
    x: Vd(4, 13),
    y: Vd(5, 14),
  },
  l2 = (e, t, n) => {
    const r = t.measureViewportBox(),
      i = t.current,
      o = getComputedStyle(i),
      { display: s } = o,
      l = {};
    s === "none" && t.setStaticValue("display", e.display || "block"),
      n.forEach((u) => {
        l[u] = Dd[u](r, o);
      }),
      t.render();
    const a = t.measureViewportBox();
    return (
      n.forEach((u) => {
        const c = t.getValue(u);
        c && c.jump(l[u]), (e[u] = Dd[u](a, o));
      }),
      e
    );
  },
  a2 = (e, t, n = {}, r = {}) => {
    (t = { ...t }), (r = { ...r });
    const i = Object.keys(t).filter(E0);
    let o = [],
      s = !1;
    const l = [];
    if (
      (i.forEach((a) => {
        const u = e.getValue(a);
        if (!e.hasValue(a)) return;
        let c = n[a],
          f = oi(c);
        const d = t[a];
        let h;
        if (xs(d)) {
          const g = d.length,
            v = d[0] === null ? 1 : 0;
          (c = d[v]), (f = oi(c));
          for (let P = v; P < g && d[P] !== null; P++) h ? lc(oi(d[P]) === h) : (h = oi(d[P]));
        } else h = oi(d);
        if (f !== h)
          if (Rd(f) && Rd(h)) {
            const g = u.get();
            typeof g == "string" && u.set(parseFloat(g)),
              typeof d == "string" ? (t[a] = parseFloat(d)) : Array.isArray(d) && h === z && (t[a] = d.map(parseFloat));
          } else
            f != null && f.transform && h != null && h.transform && (c === 0 || d === 0)
              ? c === 0
                ? u.set(h.transform(c))
                : (t[a] = f.transform(d))
              : (s || ((o = s2(e)), (s = !0)), l.push(a), (r[a] = r[a] !== void 0 ? r[a] : t[a]), u.jump(d));
      }),
      l.length)
    ) {
      const a = l.indexOf("height") >= 0 ? window.pageYOffset : null,
        u = l2(t, e, l);
      return (
        o.length &&
          o.forEach(([c, f]) => {
            e.getValue(c).set(f);
          }),
        e.render(),
        Ys && a !== null && window.scrollTo({ top: a }),
        { target: u, transitionEnd: r }
      );
    } else return { target: t, transitionEnd: r };
  };
function u2(e, t, n, r) {
  return r2(t) ? a2(e, t, n, r) : { target: t, transitionEnd: r };
}
const c2 = (e, t, n, r) => {
    const i = t2(e, t, r);
    return (t = i.target), (r = i.transitionEnd), u2(e, t, n, r);
  },
  Ja = { current: null },
  T0 = { current: !1 };
function f2() {
  if (((T0.current = !0), !!Ys))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (Ja.current = e.matches);
      e.addListener(t), t();
    } else Ja.current = !1;
}
function d2(e, t, n) {
  const { willChange: r } = t;
  for (const i in t) {
    const o = t[i],
      s = n[i];
    if ($e(o)) e.addValue(i, o), Ps(r) && r.add(i);
    else if ($e(s)) e.addValue(i, Or(o, { owner: e })), Ps(r) && r.remove(i);
    else if (s !== o)
      if (e.hasValue(i)) {
        const l = e.getValue(i);
        !l.hasAnimated && l.set(o);
      } else {
        const l = e.getStaticValue(i);
        e.addValue(i, Or(l !== void 0 ? l : o, { owner: e }));
      }
  }
  for (const i in n) t[i] === void 0 && e.removeValue(i);
  return t;
}
const Nd = new WeakMap(),
  A0 = Object.keys(Hi),
  p2 = A0.length,
  Md = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete",
  ],
  h2 = Zu.length;
class m2 {
  constructor({ parent: t, props: n, presenceContext: r, reducedMotionConfig: i, visualState: o }, s = {}) {
    (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
      }),
      (this.scheduleRender = () => te.render(this.render, !1, !0));
    const { latestValues: l, renderState: a } = o;
    (this.latestValues = l),
      (this.baseTarget = { ...l }),
      (this.initialValues = n.initial ? { ...l } : {}),
      (this.renderState = a),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = i),
      (this.options = s),
      (this.isControllingVariants = bs(n)),
      (this.isVariantNode = fm(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current));
    const { willChange: u, ...c } = this.scrapeMotionValuesFromProps(n, {});
    for (const f in c) {
      const d = c[f];
      l[f] !== void 0 && $e(d) && (d.set(l[f], !1), Ps(u) && u.add(f));
    }
  }
  scrapeMotionValuesFromProps(t, n) {
    return {};
  }
  mount(t) {
    (this.current = t),
      Nd.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
      T0.current || f2(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Ja.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    Nd.delete(this.current),
      this.projection && this.projection.unmount(),
      Ut(this.notifyUpdate),
      Ut(this.render),
      this.valueSubscriptions.forEach((t) => t()),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (const t in this.events) this.events[t].clear();
    for (const t in this.features) this.features[t].unmount();
    this.current = null;
  }
  bindToMotionValue(t, n) {
    const r = bn.has(t),
      i = n.on("change", (s) => {
        (this.latestValues[t] = s),
          this.props.onUpdate && te.update(this.notifyUpdate, !1, !0),
          r && this.projection && (this.projection.isTransformDirty = !0);
      }),
      o = n.on("renderRequest", this.scheduleRender);
    this.valueSubscriptions.set(t, () => {
      i(), o();
    });
  }
  sortNodePosition(t) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  loadFeatures({ children: t, ...n }, r, i, o) {
    let s, l;
    for (let a = 0; a < p2; a++) {
      const u = A0[a],
        { isEnabled: c, Feature: f, ProjectionNode: d, MeasureLayout: h } = Hi[u];
      d && (s = d), c(n) && (!this.features[u] && f && (this.features[u] = new f(this)), h && (l = h));
    }
    if (!this.projection && s) {
      this.projection = new s(this.latestValues, this.parent && this.parent.projection);
      const { layoutId: a, layout: u, drag: c, dragConstraints: f, layoutScroll: d, layoutRoot: h } = n;
      this.projection.setOptions({
        layoutId: a,
        layout: u,
        alwaysMeasureLayout: !!c || (f && yr(f)),
        visualElement: this,
        scheduleRender: () => this.scheduleRender(),
        animationType: typeof u == "string" ? u : "both",
        initialPromotionConfig: o,
        layoutScroll: d,
        layoutRoot: h,
      });
    }
    return l;
  }
  updateFeatures() {
    for (const t in this.features) {
      const n = this.features[t];
      n.isMounted ? n.update() : (n.mount(), (n.isMounted = !0));
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.options, this.props);
  }
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : ue();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  makeTargetAnimatable(t, n = !0) {
    return this.makeTargetAnimatableFromInstance(t, this.props, n);
  }
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n);
    for (let r = 0; r < Md.length; r++) {
      const i = Md[r];
      this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
      const o = t["on" + i];
      o && (this.propEventSubscriptions[i] = this.on(i, o));
    }
    (this.prevMotionValues = d2(this, this.scrapeMotionValuesFromProps(t, this.prevProps), this.prevMotionValues)),
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
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
  }
  getVariantContext(t = !1) {
    if (t) return this.parent ? this.parent.getVariantContext() : void 0;
    if (!this.isControllingVariants) {
      const r = this.parent ? this.parent.getVariantContext() || {} : {};
      return this.props.initial !== void 0 && (r.initial = this.props.initial), r;
    }
    const n = {};
    for (let r = 0; r < h2; r++) {
      const i = Zu[r],
        o = this.props[i];
      (Ui(o) || o === !1) && (n[i] = o);
    }
    return n;
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n) return n.variantChildren && n.variantChildren.add(t), () => n.variantChildren.delete(t);
  }
  addValue(t, n) {
    n !== this.values.get(t) && (this.removeValue(t), this.bindToMotionValue(t, n)),
      this.values.set(t, n),
      (this.latestValues[t] = n.get());
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
    return r === void 0 && n !== void 0 && ((r = Or(n, { owner: this })), this.addValue(t, r)), r;
  }
  readValue(t) {
    return this.latestValues[t] !== void 0 || !this.current
      ? this.latestValues[t]
      : this.readValueFromInstance(this.current, t, this.options);
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var n;
    const { initial: r } = this.props,
      i =
        typeof r == "string" || typeof r == "object"
          ? (n = sc(this.props, r)) === null || n === void 0
            ? void 0
            : n[t]
          : void 0;
    if (r && i !== void 0) return i;
    const o = this.getBaseTargetFromProps(this.props, t);
    return o !== void 0 && !$e(o) ? o : this.initialValues[t] !== void 0 && i === void 0 ? void 0 : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new mc()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class L0 extends m2 {
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    delete n[t], delete r[t];
  }
  makeTargetAnimatableFromInstance({ transition: t, transitionEnd: n, ...r }, { transformValues: i }, o) {
    let s = Ow(r, t || {}, this);
    if ((i && (n && (n = i(n)), r && (r = i(r)), s && (s = i(s))), o)) {
      Nw(this, r, s);
      const l = c2(this, r, s, n);
      (n = l.transitionEnd), (r = l.target);
    }
    return { transition: t, transitionEnd: n, ...r };
  }
}
function y2(e) {
  return window.getComputedStyle(e);
}
class g2 extends L0 {
  readValueFromInstance(t, n) {
    if (bn.has(n)) {
      const r = fc(n);
      return (r && r.default) || 0;
    } else {
      const r = y2(t),
        i = (mm(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return g0(t, n);
  }
  build(t, n, r, i) {
    ec(t, n, r, i.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n) {
    return oc(t, n);
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    $e(t) &&
      (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
  renderInstance(t, n, r, i) {
    Sm(t, n, r, i);
  }
}
class v2 extends L0 {
  constructor() {
    super(...arguments), (this.isSVGTag = !1);
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (bn.has(n)) {
      const r = fc(n);
      return (r && r.default) || 0;
    }
    return (n = Cm.has(n) ? n : ic(n)), t.getAttribute(n);
  }
  measureInstanceViewportBox() {
    return ue();
  }
  scrapeMotionValuesFromProps(t, n) {
    return Pm(t, n);
  }
  build(t, n, r, i) {
    nc(t, n, r, this.isSVGTag, i.transformTemplate);
  }
  renderInstance(t, n, r, i) {
    km(t, n, r, i);
  }
  mount(t) {
    (this.isSVGTag = rc(t.tagName)), super.mount(t);
  }
}
const w2 = (e, t) =>
    Ju(e) ? new v2(t, { enableHardwareAcceleration: !1 }) : new g2(t, { enableHardwareAcceleration: !0 }),
  x2 = { layout: { ProjectionNode: P0, MeasureLayout: v0 } },
  S2 = { ...Xw, ...y1, ...qx, ...x2 },
  Ee = Pv((e, t) => Jv(e, t, S2, w2));
function R0() {
  const e = x.useRef(!1);
  return (
    gs(
      () => (
        (e.current = !0),
        () => {
          e.current = !1;
        }
      ),
      []
    ),
    e
  );
}
function C2() {
  const e = R0(),
    [t, n] = x.useState(0),
    r = x.useCallback(() => {
      e.current && n(t + 1);
    }, [t]);
  return [x.useCallback(() => te.postRender(r), [r]), t];
}
class k2 extends x.Component {
  getSnapshotBeforeUpdate(t) {
    const n = this.props.childRef.current;
    if (n && t.isPresent && !this.props.isPresent) {
      const r = this.props.sizeRef.current;
      (r.height = n.offsetHeight || 0), (r.width = n.offsetWidth || 0), (r.top = n.offsetTop), (r.left = n.offsetLeft);
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function P2({ children: e, isPresent: t }) {
  const n = x.useId(),
    r = x.useRef(null),
    i = x.useRef({ width: 0, height: 0, top: 0, left: 0 });
  return (
    x.useInsertionEffect(() => {
      const { width: o, height: s, top: l, left: a } = i.current;
      if (t || !r.current || !o || !s) return;
      r.current.dataset.motionPopId = n;
      const u = document.createElement("style");
      return (
        document.head.appendChild(u),
        u.sheet &&
          u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${s}px !important;
            top: ${l}px !important;
            left: ${a}px !important;
          }
        `),
        () => {
          document.head.removeChild(u);
        }
      );
    }, [t]),
    x.createElement(k2, { isPresent: t, childRef: r, sizeRef: i }, x.cloneElement(e, { ref: r }))
  );
}
const Wl = ({
  children: e,
  initial: t,
  isPresent: n,
  onExitComplete: r,
  custom: i,
  presenceAffectsLayout: o,
  mode: s,
}) => {
  const l = Em(E2),
    a = x.useId(),
    u = x.useMemo(
      () => ({
        id: a,
        initial: t,
        isPresent: n,
        custom: i,
        onExitComplete: (c) => {
          l.set(c, !0);
          for (const f of l.values()) if (!f) return;
          r && r();
        },
        register: (c) => (l.set(c, !1), () => l.delete(c)),
      }),
      o ? void 0 : [n]
    );
  return (
    x.useMemo(() => {
      l.forEach((c, f) => l.set(f, !1));
    }, [n]),
    x.useEffect(() => {
      !n && !l.size && r && r();
    }, [n]),
    s === "popLayout" && (e = x.createElement(P2, { isPresent: n }, e)),
    x.createElement(Qs.Provider, { value: u }, e)
  );
};
function E2() {
  return new Map();
}
function T2(e) {
  return x.useEffect(() => () => e(), []);
}
const rr = (e) => e.key || "";
function A2(e, t) {
  e.forEach((n) => {
    const r = rr(n);
    t.set(r, n);
  });
}
function L2(e) {
  const t = [];
  return (
    x.Children.forEach(e, (n) => {
      x.isValidElement(n) && t.push(n);
    }),
    t
  );
}
const _o = ({
  children: e,
  custom: t,
  initial: n = !0,
  onExitComplete: r,
  exitBeforeEnter: i,
  presenceAffectsLayout: o = !0,
  mode: s = "sync",
}) => {
  const l = x.useContext(qu).forceRender || C2()[0],
    a = R0(),
    u = L2(e);
  let c = u;
  const f = x.useRef(new Map()).current,
    d = x.useRef(c),
    h = x.useRef(new Map()).current,
    g = x.useRef(!0);
  if (
    (gs(() => {
      (g.current = !1), A2(u, h), (d.current = c);
    }),
    T2(() => {
      (g.current = !0), h.clear(), f.clear();
    }),
    g.current)
  )
    return x.createElement(
      x.Fragment,
      null,
      c.map((p) =>
        x.createElement(
          Wl,
          { key: rr(p), isPresent: !0, initial: n ? void 0 : !1, presenceAffectsLayout: o, mode: s },
          p
        )
      )
    );
  c = [...c];
  const v = d.current.map(rr),
    P = u.map(rr),
    y = v.length;
  for (let p = 0; p < y; p++) {
    const m = v[p];
    P.indexOf(m) === -1 && !f.has(m) && f.set(m, void 0);
  }
  return (
    s === "wait" && f.size && (c = []),
    f.forEach((p, m) => {
      if (P.indexOf(m) !== -1) return;
      const w = h.get(m);
      if (!w) return;
      const S = v.indexOf(m);
      let E = p;
      if (!E) {
        const T = () => {
          h.delete(m), f.delete(m);
          const k = d.current.findIndex((M) => M.key === m);
          if ((d.current.splice(k, 1), !f.size)) {
            if (((d.current = u), a.current === !1)) return;
            l(), r && r();
          }
        };
        (E = x.createElement(
          Wl,
          { key: rr(w), isPresent: !1, onExitComplete: T, custom: t, presenceAffectsLayout: o, mode: s },
          w
        )),
          f.set(m, E);
      }
      c.splice(S, 0, E);
    }),
    (c = c.map((p) => {
      const m = p.key;
      return f.has(m) ? p : x.createElement(Wl, { key: rr(p), isPresent: !0, presenceAffectsLayout: o, mode: s }, p);
    })),
    x.createElement(x.Fragment, null, f.size ? c : c.map((p) => x.cloneElement(p)))
  );
};
var _0 = { color: void 0, size: void 0, className: void 0, style: void 0, attr: void 0 },
  Od = Te.createContext && Te.createContext(_0),
  yn =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        (yn =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++) {
              t = arguments[n];
              for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            }
            return e;
          }),
        yn.apply(this, arguments)
      );
    },
  R2 =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
          t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
      return n;
    };
function V0(e) {
  return (
    e &&
    e.map(function (t, n) {
      return Te.createElement(t.tag, yn({ key: n }, t.attr), V0(t.child));
    })
  );
}
function at(e) {
  return function (t) {
    return Te.createElement(_2, yn({ attr: yn({}, e.attr) }, t), V0(e.child));
  };
}
function _2(e) {
  var t = function (n) {
    var r = e.attr,
      i = e.size,
      o = e.title,
      s = R2(e, ["attr", "size", "title"]),
      l = i || n.size || "1em",
      a;
    return (
      n.className && (a = n.className),
      e.className && (a = (a ? a + " " : "") + e.className),
      Te.createElement(
        "svg",
        yn({ stroke: "currentColor", fill: "currentColor", strokeWidth: "0" }, n.attr, r, s, {
          className: a,
          style: yn(yn({ color: e.color || n.color }, n.style), e.style),
          height: l,
          width: l,
          xmlns: "http://www.w3.org/2000/svg",
        }),
        o && Te.createElement("title", null, o),
        e.children
      )
    );
  };
  return Od !== void 0
    ? Te.createElement(Od.Consumer, null, function (n) {
        return t(n);
      })
    : t(_0);
}
function V2(e) {
  return at({
    tag: "svg",
    attr: { viewBox: "0 0 1024 1024" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372zm47.7-395.2l-25.4-5.9V348.6c38 5.2 61.5 29 65.5 58.2.5 4 3.9 6.9 7.9 6.9h44.9c4.7 0 8.4-4.1 8-8.8-6.1-62.3-57.4-102.3-125.9-109.2V263c0-4.4-3.6-8-8-8h-28.1c-4.4 0-8 3.6-8 8v33c-70.8 6.9-126.2 46-126.2 119 0 67.6 49.8 100.2 102.1 112.7l24.7 6.3v142.7c-44.2-5.9-69-29.5-74.1-61.3-.6-3.8-4-6.6-7.9-6.6H363c-4.7 0-8.4 4-8 8.7 4.5 55 46.2 105.6 135.2 112.1V761c0 4.4 3.6 8 8 8h28.4c4.4 0 8-3.6 8-8.1l-.2-31.7c78.3-6.9 134.3-48.8 134.3-124-.1-69.4-44.2-100.4-109-116.4zm-68.6-16.2c-5.6-1.6-10.3-3.1-15-5-33.8-12.2-49.5-31.9-49.5-57.3 0-36.3 27.5-57 64.5-61.7v124zM534.3 677V543.3c3.1.9 5.9 1.6 8.8 2.2 47.3 14.4 63.2 34.4 63.2 65.1 0 39.1-29.4 62.6-72 66.4z",
        },
      },
    ],
  })(e);
}
function D2(e) {
  return at({
    tag: "svg",
    attr: { viewBox: "0 0 1024 1024" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372zm117.7-588.6c-15.9-3.5-34.4-5.4-55.3-5.4-106.7 0-178.9 55.7-198.6 149.9H344c-4.4 0-8 3.6-8 8v27.2c0 4.4 3.6 8 8 8h26.4c-.3 4.1-.3 8.4-.3 12.8v36.9H344c-4.4 0-8 3.6-8 8V568c0 4.4 3.6 8 8 8h30.2c17.2 99.2 90.4 158 200.2 158 20.9 0 39.4-1.7 55.3-5.1 3.7-.8 6.4-4 6.4-7.8v-42.8c0-5-4.6-8.8-9.5-7.8-14.7 2.8-31.9 4.1-51.8 4.1-68.5 0-114.5-36.6-129.8-98.6h130.6c4.4 0 8-3.6 8-8v-27.2c0-4.4-3.6-8-8-8H439.2v-36c0-4.7 0-9.4.3-13.8h135.9c4.4 0 8-3.6 8-8v-27.2c0-4.4-3.6-8-8-8H447.1c17.2-56.9 62.3-90.4 127.6-90.4 19.9 0 37.1 1.5 51.7 4.4a8 8 0 0 0 9.6-7.8v-42.8c0-3.8-2.6-7-6.3-7.8z",
        },
      },
    ],
  })(e);
}
function N2(e) {
  return at({
    tag: "svg",
    attr: { viewBox: "0 0 1024 1024" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M878.3 392.1L631.9 145.7c-6.5-6.5-15-9.7-23.5-9.7s-17 3.2-23.5 9.7L423.8 306.9c-12.2-1.4-24.5-2-36.8-2-73.2 0-146.4 24.1-206.5 72.3a33.23 33.23 0 0 0-2.7 49.4l181.7 181.7-215.4 215.2a15.8 15.8 0 0 0-4.6 9.8l-3.4 37.2c-.9 9.4 6.6 17.4 15.9 17.4.5 0 1 0 1.5-.1l37.2-3.4c3.7-.3 7.2-2 9.8-4.6l215.4-215.4 181.7 181.7c6.5 6.5 15 9.7 23.5 9.7 9.7 0 19.3-4.2 25.9-12.4 56.3-70.3 79.7-158.3 70.2-243.4l161.1-161.1c12.9-12.8 12.9-33.8 0-46.8zM666.2 549.3l-24.5 24.5 3.8 34.4a259.92 259.92 0 0 1-30.4 153.9L262 408.8c12.9-7.1 26.3-13.1 40.3-17.9 27.2-9.4 55.7-14.1 84.7-14.1 9.6 0 19.3.5 28.9 1.6l34.4 3.8 24.5-24.5L608.5 224 800 415.5 666.2 549.3z",
        },
      },
    ],
  })(e);
}
function M2(e) {
  return at({
    tag: "svg",
    attr: { fill: "currentColor", viewBox: "0 0 16 16" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z",
        },
      },
      {
        tag: "path",
        attr: {
          d: "M4 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-2zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-4z",
        },
      },
    ],
  })(e);
}
function Vo(e) {
  return at({
    tag: "svg",
    attr: { fill: "currentColor", viewBox: "0 0 16 16" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z",
        },
      },
      {
        tag: "path",
        attr: {
          d: "M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z",
        },
      },
    ],
  })(e);
}
function O2(e) {
  return at({
    tag: "svg",
    attr: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      { tag: "line", attr: { x1: "2", x2: "22", y1: "2", y2: "22" } },
      { tag: "line", attr: { x1: "12", x2: "12", y1: "17", y2: "22" } },
      { tag: "path", attr: { d: "M9 9v1.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V17h12" } },
      { tag: "path", attr: { d: "M15 9.34V6h1a2 2 0 0 0 0-4H7.89" } },
    ],
  })(e);
}
function j2(e) {
  return at({
    tag: "svg",
    attr: { version: "1.2", baseProfile: "tiny", viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M19.164 19.547c-1.641-2.5-3.669-3.285-6.164-3.484v1.437c0 .534-.208 1.036-.586 1.414-.756.756-2.077.751-2.823.005l-6.293-6.207c-.191-.189-.298-.444-.298-.713s.107-.524.298-.712l6.288-6.203c.754-.755 2.073-.756 2.829.001.377.378.585.88.585 1.414v1.704c4.619.933 8 4.997 8 9.796v1c0 .442-.29.832-.714.958-.095.027-.19.042-.286.042-.331 0-.646-.165-.836-.452zm-7.141-5.536c2.207.056 4.638.394 6.758 2.121-.768-3.216-3.477-5.702-6.893-6.08-.504-.056-.888-.052-.888-.052v-3.497l-5.576 5.496 5.576 5.5v-3.499l1.023.011z",
        },
      },
    ],
  })(e);
}
function jd(e) {
  return at({
    tag: "svg",
    attr: { viewBox: "0 0 640 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M320 144c-53.02 0-96 50.14-96 112 0 61.85 42.98 112 96 112 53 0 96-50.13 96-112 0-61.86-42.98-112-96-112zm40 168c0 4.42-3.58 8-8 8h-64c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h16v-55.44l-.47.31a7.992 7.992 0 0 1-11.09-2.22l-8.88-13.31a7.992 7.992 0 0 1 2.22-11.09l15.33-10.22a23.99 23.99 0 0 1 13.31-4.03H328c4.42 0 8 3.58 8 8v88h16c4.42 0 8 3.58 8 8v16zM608 64H32C14.33 64 0 78.33 0 96v320c0 17.67 14.33 32 32 32h576c17.67 0 32-14.33 32-32V96c0-17.67-14.33-32-32-32zm-16 272c-35.35 0-64 28.65-64 64H112c0-35.35-28.65-64-64-64V176c35.35 0 64-28.65 64-64h416c0 35.35 28.65 64 64 64v160z",
        },
      },
    ],
  })(e);
}
const F2 = ({ dollarValue: e, euroValue: t }) => {
    const [n, r] = x.useState(""),
      [i, o] = x.useState(""),
      [s, l] = x.useState(""),
      [a, u] = x.useState("");
    return C.jsxs(Ee.div, {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.5, ease: "easeInOut" },
      className: "calculator-container",
      children: [
        C.jsxs("div", {
          className: "calculator-title",
          children: [C.jsx("h2", { children: "Dólar blue" }), C.jsxs("span", { children: ["1 dólar = $", e, " ARS"] })],
        }),
        C.jsxs("div", {
          className: "conversor-container",
          children: [
            C.jsxs("div", {
              className: "input-container",
              children: [
                C.jsx("div", { className: "coin-container", children: C.jsx(V2, {}) }),
                C.jsx("input", {
                  className: "input",
                  type: "number",
                  onChange: (c) => r(c.target.valueAsNumber),
                  placeholder: "USD",
                  autoFocus: !0,
                  min: 0,
                  value: n,
                }),
                C.jsx("div", {
                  className: "delete-container",
                  children: C.jsx(_o, {
                    children: n
                      ? C.jsx(Ee.span, {
                          initial: { opacity: 0, scale: 0, y: -25 },
                          animate: { opacity: 1, scale: 1, y: 0 },
                          exit: { opacity: 0, scale: 0, y: 25 },
                          transition: { duration: 0.3, ease: "easeInOut" },
                          children: C.jsx(Vo, {
                            onClick: () => {
                              r("");
                            },
                          }),
                        })
                      : null,
                  }),
                }),
              ],
            }),
            C.jsxs("div", {
              className: "result-container",
              children: [
                C.jsx("span", { children: "$" }),
                C.jsx("input", {
                  className: "input-result",
                  type: "text",
                  value: isNaN(e * +n) ? 0 : (e * +n).toLocaleString("es-ES"),
                  disabled: !0,
                  readOnly: !0,
                }),
                C.jsx("span", { children: "ARS" }),
              ],
            }),
          ],
        }),
        C.jsxs("div", {
          className: "conversor-container",
          children: [
            C.jsxs("div", {
              className: "input-container",
              children: [
                C.jsx("div", { className: "coin-container", children: C.jsx(jd, {}) }),
                C.jsx("input", {
                  className: "input",
                  type: "number",
                  onChange: (c) => o(c.target.valueAsNumber),
                  placeholder: "ARS",
                  min: 0,
                  value: i,
                }),
                C.jsx("div", {
                  className: "delete-container",
                  children: C.jsx(_o, {
                    children: i
                      ? C.jsx(Ee.span, {
                          initial: { opacity: 0, scale: 0, y: -25 },
                          animate: { opacity: 1, scale: 1, y: 0 },
                          exit: { opacity: 0, scale: 0, y: 25 },
                          transition: { duration: 0.3, ease: "easeInOut" },
                          children: C.jsx(Vo, {
                            onClick: () => {
                              o("");
                            },
                          }),
                        })
                      : null,
                  }),
                }),
              ],
            }),
            C.jsxs("div", {
              className: "result-container",
              children: [
                C.jsx("span", { children: "$" }),
                C.jsx("input", {
                  className: "input-result",
                  type: "text",
                  value: isNaN(+i / e) ? 0 : (+i / e).toFixed(2),
                  disabled: !0,
                  readOnly: !0,
                }),
                C.jsx("span", { children: "USD" }),
              ],
            }),
          ],
        }),
        C.jsx("div", { className: "extension-divider" }),
        C.jsxs("div", {
          className: "calculator-title",
          children: [C.jsx("h2", { children: "Euro blue" }), C.jsxs("span", { children: ["1 euro = $", t, " ARS"] })],
        }),
        C.jsxs("div", {
          className: "conversor-container",
          children: [
            C.jsxs("div", {
              className: "input-container",
              children: [
                C.jsx("div", { className: "coin-container", children: C.jsx(D2, {}) }),
                C.jsx("input", {
                  className: "input",
                  type: "number",
                  onChange: (c) => l(c.target.valueAsNumber),
                  placeholder: "EUR",
                  min: 0,
                  value: s,
                }),
                C.jsx("div", {
                  className: "delete-container",
                  children: C.jsx(_o, {
                    children: s
                      ? C.jsx(Ee.span, {
                          initial: { opacity: 0, scale: 0, y: -25 },
                          animate: { opacity: 1, scale: 1, y: 0 },
                          exit: { opacity: 0, scale: 0, y: 25 },
                          transition: { duration: 0.3, ease: "easeInOut" },
                          children: C.jsx(Vo, {
                            onClick: () => {
                              l("");
                            },
                          }),
                        })
                      : null,
                  }),
                }),
              ],
            }),
            C.jsxs("div", {
              className: "result-container",
              children: [
                C.jsx("span", { children: "$" }),
                C.jsx("input", {
                  className: "input-result",
                  type: "text",
                  value: isNaN(t * +s) ? 0 : (t * +s).toLocaleString("es-ES"),
                  disabled: !0,
                  readOnly: !0,
                }),
                C.jsx("span", { children: "ARS" }),
              ],
            }),
          ],
        }),
        C.jsxs("div", {
          className: "conversor-container",
          children: [
            C.jsxs("div", {
              className: "input-container",
              children: [
                C.jsx("div", { className: "coin-container", children: C.jsx(jd, {}) }),
                C.jsx("input", {
                  className: "input",
                  type: "number",
                  onChange: (c) => u(c.target.valueAsNumber),
                  placeholder: "ARS",
                  min: 0,
                  value: a,
                }),
                C.jsx("div", {
                  className: "delete-container",
                  children: C.jsx(_o, {
                    children: a
                      ? C.jsx(Ee.span, {
                          initial: { opacity: 0, scale: 0, y: -25 },
                          animate: { opacity: 1, scale: 1, y: 0 },
                          exit: { opacity: 0, scale: 0, y: 25 },
                          transition: { duration: 0.3, ease: "easeInOut" },
                          children: C.jsx(Vo, {
                            onClick: () => {
                              u("");
                            },
                          }),
                        })
                      : null,
                  }),
                }),
              ],
            }),
            C.jsxs("div", {
              className: "result-container",
              children: [
                C.jsx("span", { children: "$" }),
                C.jsx("input", {
                  className: "input-result",
                  type: "text",
                  value: isNaN(+a / t) ? 0 : (+a / t).toFixed(2),
                  disabled: !0,
                  readOnly: !0,
                }),
                C.jsx("span", { children: "EUR" }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  Fd = ({ type: e, officialSellValue: t, OfficialBuyValue: n, BlueSellValue: r, BlueBuyValue: i }) =>
    C.jsxs(Ee.div, {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.5, ease: "easeInOut" },
      className: "currency-container",
      children: [
        C.jsxs("div", {
          className: "type-container",
          children: [
            C.jsxs("h2", { children: [e, " oficial"] }),
            C.jsxs("div", {
              className: "price-container",
              children: [
                C.jsx("span", { className: "price-title", children: "Venta:" }),
                C.jsxs(Ee.span, {
                  initial: { opacity: 0, x: -20 },
                  animate: { opacity: t ? 1 : 0, x: 0 },
                  transition: { duration: 0.5, ease: "easeInOut" },
                  className: "price-value",
                  children: ["$", Math.round(t), " ARS"],
                }),
              ],
            }),
            C.jsxs("div", {
              className: "price-container",
              children: [
                C.jsx("span", { className: "price-title", children: "Compra:" }),
                C.jsxs(Ee.span, {
                  initial: { opacity: 0, x: -20 },
                  animate: { opacity: t ? 1 : 0, x: 0 },
                  transition: { duration: 0.5, ease: "easeInOut" },
                  className: "price-value",
                  children: ["$", Math.round(n), " ARS"],
                }),
              ],
            }),
          ],
        }),
        C.jsxs("div", {
          className: "type-container",
          children: [
            C.jsxs("h2", { children: [e, " blue"] }),
            C.jsxs("div", {
              className: "price-container",
              children: [
                C.jsx("span", { className: "price-title", children: "Venta:" }),
                C.jsxs(Ee.span, {
                  initial: { opacity: 0, x: -20 },
                  animate: { opacity: t ? 1 : 0, x: 0 },
                  transition: { duration: 0.5, ease: "easeInOut" },
                  className: "price-value",
                  children: ["$", r, " ARS"],
                }),
              ],
            }),
            C.jsxs("div", {
              className: "price-container",
              children: [
                C.jsx("span", { className: "price-title", children: "Compra:" }),
                C.jsxs(Ee.span, {
                  initial: { opacity: 0, x: -20 },
                  animate: { opacity: t ? 1 : 0, x: 0 },
                  transition: { duration: 0.5, ease: "easeInOut" },
                  className: "price-value",
                  children: ["$", i, " ARS"],
                }),
              ],
            }),
          ],
        }),
      ],
    });
function z2(e) {
  return at({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M19 5h-1V4a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v9a4 4 0 0 0 4 4h6c1.858 0 3.411-1.279 3.858-3H19a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3zm1 6a1 1 0 0 1-1 1h-1V7h1a1 1 0 0 1 1 1v3zm-2 8H3c0 1.654 1.346 3 3 3h11c1.654 0 3-1.346 3-3h-2z",
        },
      },
    ],
  })(e);
}
function I2(e) {
  return at({
    tag: "svg",
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      { tag: "title", attr: {}, child: [] },
      {
        tag: "path",
        attr: {
          d: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
        },
      },
    ],
  })(e);
}
function B2(e) {
  return at({
    tag: "svg",
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      { tag: "title", attr: {}, child: [] },
      {
        tag: "path",
        attr: {
          d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
        },
      },
    ],
  })(e);
}
function $2(e) {
  return at({
    tag: "svg",
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      { tag: "title", attr: {}, child: [] },
      {
        tag: "path",
        attr: {
          d: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z",
        },
      },
    ],
  })(e);
}
const jr = Math.min,
  Bn = Math.max,
  Ts = Math.round,
  Do = Math.floor,
  Sn = (e) => ({ x: e, y: e }),
  U2 = { left: "right", right: "left", bottom: "top", top: "bottom" },
  H2 = { start: "end", end: "start" };
function eu(e, t, n) {
  return Bn(e, jr(t, n));
}
function to(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Gn(e) {
  return e.split("-")[0];
}
function no(e) {
  return e.split("-")[1];
}
function D0(e) {
  return e === "x" ? "y" : "x";
}
function yc(e) {
  return e === "y" ? "height" : "width";
}
function tl(e) {
  return ["top", "bottom"].includes(Gn(e)) ? "y" : "x";
}
function gc(e) {
  return D0(tl(e));
}
function W2(e, t, n) {
  n === void 0 && (n = !1);
  const r = no(e),
    i = gc(e),
    o = yc(i);
  let s = i === "x" ? (r === (n ? "end" : "start") ? "right" : "left") : r === "start" ? "bottom" : "top";
  return t.reference[o] > t.floating[o] && (s = As(s)), [s, As(s)];
}
function K2(e) {
  const t = As(e);
  return [tu(e), t, tu(t)];
}
function tu(e) {
  return e.replace(/start|end/g, (t) => H2[t]);
}
function G2(e, t, n) {
  const r = ["left", "right"],
    i = ["right", "left"],
    o = ["top", "bottom"],
    s = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? (t ? i : r) : t ? r : i;
    case "left":
    case "right":
      return t ? o : s;
    default:
      return [];
  }
}
function Q2(e, t, n, r) {
  const i = no(e);
  let o = G2(Gn(e), n === "start", r);
  return i && ((o = o.map((s) => s + "-" + i)), t && (o = o.concat(o.map(tu)))), o;
}
function As(e) {
  return e.replace(/left|right|bottom|top/g, (t) => U2[t]);
}
function Y2(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function N0(e) {
  return typeof e != "number" ? Y2(e) : { top: e, right: e, bottom: e, left: e };
}
function Ls(e) {
  return { ...e, top: e.y, left: e.x, right: e.x + e.width, bottom: e.y + e.height };
}
function zd(e, t, n) {
  let { reference: r, floating: i } = e;
  const o = tl(t),
    s = gc(t),
    l = yc(s),
    a = Gn(t),
    u = o === "y",
    c = r.x + r.width / 2 - i.width / 2,
    f = r.y + r.height / 2 - i.height / 2,
    d = r[l] / 2 - i[l] / 2;
  let h;
  switch (a) {
    case "top":
      h = { x: c, y: r.y - i.height };
      break;
    case "bottom":
      h = { x: c, y: r.y + r.height };
      break;
    case "right":
      h = { x: r.x + r.width, y: f };
      break;
    case "left":
      h = { x: r.x - i.width, y: f };
      break;
    default:
      h = { x: r.x, y: r.y };
  }
  switch (no(t)) {
    case "start":
      h[s] -= d * (n && u ? -1 : 1);
      break;
    case "end":
      h[s] += d * (n && u ? -1 : 1);
      break;
  }
  return h;
}
const X2 = async (e, t, n) => {
  const { placement: r = "bottom", strategy: i = "absolute", middleware: o = [], platform: s } = n,
    l = o.filter(Boolean),
    a = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let u = await s.getElementRects({ reference: e, floating: t, strategy: i }),
    { x: c, y: f } = zd(u, r, a),
    d = r,
    h = {},
    g = 0;
  for (let v = 0; v < l.length; v++) {
    const { name: P, fn: y } = l[v],
      {
        x: p,
        y: m,
        data: w,
        reset: S,
      } = await y({
        x: c,
        y: f,
        initialPlacement: r,
        placement: d,
        strategy: i,
        middlewareData: h,
        rects: u,
        platform: s,
        elements: { reference: e, floating: t },
      });
    if (((c = p ?? c), (f = m ?? f), (h = { ...h, [P]: { ...h[P], ...w } }), S && g <= 50)) {
      g++,
        typeof S == "object" &&
          (S.placement && (d = S.placement),
          S.rects &&
            (u = S.rects === !0 ? await s.getElementRects({ reference: e, floating: t, strategy: i }) : S.rects),
          ({ x: c, y: f } = zd(u, d, a))),
        (v = -1);
      continue;
    }
  }
  return { x: c, y: f, placement: d, strategy: i, middlewareData: h };
};
async function M0(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: r, y: i, platform: o, rects: s, elements: l, strategy: a } = e,
    {
      boundary: u = "clippingAncestors",
      rootBoundary: c = "viewport",
      elementContext: f = "floating",
      altBoundary: d = !1,
      padding: h = 0,
    } = to(t, e),
    g = N0(h),
    P = l[d ? (f === "floating" ? "reference" : "floating") : f],
    y = Ls(
      await o.getClippingRect({
        element:
          (n = await (o.isElement == null ? void 0 : o.isElement(P))) == null || n
            ? P
            : P.contextElement || (await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(l.floating))),
        boundary: u,
        rootBoundary: c,
        strategy: a,
      })
    ),
    p = f === "floating" ? { ...s.floating, x: r, y: i } : s.reference,
    m = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l.floating)),
    w = (await (o.isElement == null ? void 0 : o.isElement(m)))
      ? (await (o.getScale == null ? void 0 : o.getScale(m))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    S = Ls(
      o.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: p, offsetParent: m, strategy: a })
        : p
    );
  return {
    top: (y.top - S.top + g.top) / w.y,
    bottom: (S.bottom - y.bottom + g.bottom) / w.y,
    left: (y.left - S.left + g.left) / w.x,
    right: (S.right - y.right + g.right) / w.x,
  };
}
const b2 = (e) => ({
    name: "arrow",
    options: e,
    async fn(t) {
      const { x: n, y: r, placement: i, rects: o, platform: s, elements: l } = t,
        { element: a, padding: u = 0 } = to(e, t) || {};
      if (a == null) return {};
      const c = N0(u),
        f = { x: n, y: r },
        d = gc(i),
        h = yc(d),
        g = await s.getDimensions(a),
        v = d === "y",
        P = v ? "top" : "left",
        y = v ? "bottom" : "right",
        p = v ? "clientHeight" : "clientWidth",
        m = o.reference[h] + o.reference[d] - f[d] - o.floating[h],
        w = f[d] - o.reference[d],
        S = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(a));
      let E = S ? S[p] : 0;
      (!E || !(await (s.isElement == null ? void 0 : s.isElement(S)))) && (E = l.floating[p] || o.floating[h]);
      const T = m / 2 - w / 2,
        k = E / 2 - g[h] / 2 - 1,
        M = jr(c[P], k),
        D = jr(c[y], k),
        I = M,
        Y = E - g[h] - D,
        U = E / 2 - g[h] / 2 + T,
        j = eu(I, U, Y),
        b =
          no(i) != null && U != j && o.reference[h] / 2 - (U < I ? M : D) - g[h] / 2 < 0 ? (U < I ? I - U : Y - U) : 0;
      return { [d]: f[d] - b, data: { [d]: j, centerOffset: U - j + b } };
    },
  }),
  Z2 = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "flip",
        options: e,
        async fn(t) {
          var n;
          const { placement: r, middlewareData: i, rects: o, initialPlacement: s, platform: l, elements: a } = t,
            {
              mainAxis: u = !0,
              crossAxis: c = !0,
              fallbackPlacements: f,
              fallbackStrategy: d = "bestFit",
              fallbackAxisSideDirection: h = "none",
              flipAlignment: g = !0,
              ...v
            } = to(e, t),
            P = Gn(r),
            y = Gn(s) === s,
            p = await (l.isRTL == null ? void 0 : l.isRTL(a.floating)),
            m = f || (y || !g ? [As(s)] : K2(s));
          !f && h !== "none" && m.push(...Q2(s, g, h, p));
          const w = [s, ...m],
            S = await M0(t, v),
            E = [];
          let T = ((n = i.flip) == null ? void 0 : n.overflows) || [];
          if ((u && E.push(S[P]), c)) {
            const I = W2(r, o, p);
            E.push(S[I[0]], S[I[1]]);
          }
          if (((T = [...T, { placement: r, overflows: E }]), !E.every((I) => I <= 0))) {
            var k, M;
            const I = (((k = i.flip) == null ? void 0 : k.index) || 0) + 1,
              Y = w[I];
            if (Y) return { data: { index: I, overflows: T }, reset: { placement: Y } };
            let U =
              (M = T.filter((j) => j.overflows[0] <= 0).sort((j, B) => j.overflows[1] - B.overflows[1])[0]) == null
                ? void 0
                : M.placement;
            if (!U)
              switch (d) {
                case "bestFit": {
                  var D;
                  const j =
                    (D = T.map((B) => [
                      B.placement,
                      B.overflows.filter((b) => b > 0).reduce((b, ge) => b + ge, 0),
                    ]).sort((B, b) => B[1] - b[1])[0]) == null
                      ? void 0
                      : D[0];
                  j && (U = j);
                  break;
                }
                case "initialPlacement":
                  U = s;
                  break;
              }
            if (r !== U) return { reset: { placement: U } };
          }
          return {};
        },
      }
    );
  };
async function q2(e, t) {
  const { placement: n, platform: r, elements: i } = e,
    o = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)),
    s = Gn(n),
    l = no(n),
    a = tl(n) === "y",
    u = ["left", "top"].includes(s) ? -1 : 1,
    c = o && a ? -1 : 1,
    f = to(t, e);
  let {
    mainAxis: d,
    crossAxis: h,
    alignmentAxis: g,
  } = typeof f == "number"
    ? { mainAxis: f, crossAxis: 0, alignmentAxis: null }
    : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...f };
  return (
    l && typeof g == "number" && (h = l === "end" ? g * -1 : g), a ? { x: h * c, y: d * u } : { x: d * u, y: h * c }
  );
}
const J2 = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: "offset",
        options: e,
        async fn(t) {
          const { x: n, y: r } = t,
            i = await q2(t, e);
          return { x: n + i.x, y: r + i.y, data: i };
        },
      }
    );
  },
  eS = function (e) {
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
              limiter: l = {
                fn: (P) => {
                  let { x: y, y: p } = P;
                  return { x: y, y: p };
                },
              },
              ...a
            } = to(e, t),
            u = { x: n, y: r },
            c = await M0(t, a),
            f = tl(Gn(i)),
            d = D0(f);
          let h = u[d],
            g = u[f];
          if (o) {
            const P = d === "y" ? "top" : "left",
              y = d === "y" ? "bottom" : "right",
              p = h + c[P],
              m = h - c[y];
            h = eu(p, h, m);
          }
          if (s) {
            const P = f === "y" ? "top" : "left",
              y = f === "y" ? "bottom" : "right",
              p = g + c[P],
              m = g - c[y];
            g = eu(p, g, m);
          }
          const v = l.fn({ ...t, [d]: h, [f]: g });
          return { ...v, data: { x: v.x - n, y: v.y - r } };
        },
      }
    );
  };
function Cn(e) {
  return O0(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Ge(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Kt(e) {
  var t;
  return (t = (O0(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function O0(e) {
  return e instanceof Node || e instanceof Ge(e).Node;
}
function Ht(e) {
  return e instanceof Element || e instanceof Ge(e).Element;
}
function Et(e) {
  return e instanceof HTMLElement || e instanceof Ge(e).HTMLElement;
}
function Id(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Ge(e).ShadowRoot;
}
function ro(e) {
  const { overflow: t, overflowX: n, overflowY: r, display: i } = lt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(i);
}
function tS(e) {
  return ["table", "td", "th"].includes(Cn(e));
}
function vc(e) {
  const t = wc(),
    n = lt(e);
  return (
    n.transform !== "none" ||
    n.perspective !== "none" ||
    (n.containerType ? n.containerType !== "normal" : !1) ||
    (!t && (n.backdropFilter ? n.backdropFilter !== "none" : !1)) ||
    (!t && (n.filter ? n.filter !== "none" : !1)) ||
    ["transform", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) ||
    ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r))
  );
}
function nS(e) {
  let t = Fr(e);
  for (; Et(t) && !nl(t); ) {
    if (vc(t)) return t;
    t = Fr(t);
  }
  return null;
}
function wc() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function nl(e) {
  return ["html", "body", "#document"].includes(Cn(e));
}
function lt(e) {
  return Ge(e).getComputedStyle(e);
}
function rl(e) {
  return Ht(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function Fr(e) {
  if (Cn(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || (Id(e) && e.host) || Kt(e);
  return Id(t) ? t.host : t;
}
function j0(e) {
  const t = Fr(e);
  return nl(t) ? (e.ownerDocument ? e.ownerDocument.body : e.body) : Et(t) && ro(t) ? t : j0(t);
}
function Rs(e, t) {
  var n;
  t === void 0 && (t = []);
  const r = j0(e),
    i = r === ((n = e.ownerDocument) == null ? void 0 : n.body),
    o = Ge(r);
  return i ? t.concat(o, o.visualViewport || [], ro(r) ? r : []) : t.concat(r, Rs(r));
}
function F0(e) {
  const t = lt(e);
  let n = parseFloat(t.width) || 0,
    r = parseFloat(t.height) || 0;
  const i = Et(e),
    o = i ? e.offsetWidth : n,
    s = i ? e.offsetHeight : r,
    l = Ts(n) !== o || Ts(r) !== s;
  return l && ((n = o), (r = s)), { width: n, height: r, $: l };
}
function xc(e) {
  return Ht(e) ? e : e.contextElement;
}
function Ar(e) {
  const t = xc(e);
  if (!Et(t)) return Sn(1);
  const n = t.getBoundingClientRect(),
    { width: r, height: i, $: o } = F0(t);
  let s = (o ? Ts(n.width) : n.width) / r,
    l = (o ? Ts(n.height) : n.height) / i;
  return (!s || !Number.isFinite(s)) && (s = 1), (!l || !Number.isFinite(l)) && (l = 1), { x: s, y: l };
}
const rS = Sn(0);
function z0(e) {
  const t = Ge(e);
  return !wc() || !t.visualViewport ? rS : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function iS(e, t, n) {
  return t === void 0 && (t = !1), !n || (t && n !== Ge(e)) ? !1 : t;
}
function Qn(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const i = e.getBoundingClientRect(),
    o = xc(e);
  let s = Sn(1);
  t && (r ? Ht(r) && (s = Ar(r)) : (s = Ar(e)));
  const l = iS(o, n, r) ? z0(o) : Sn(0);
  let a = (i.left + l.x) / s.x,
    u = (i.top + l.y) / s.y,
    c = i.width / s.x,
    f = i.height / s.y;
  if (o) {
    const d = Ge(o),
      h = r && Ht(r) ? Ge(r) : r;
    let g = d.frameElement;
    for (; g && r && h !== d; ) {
      const v = Ar(g),
        P = g.getBoundingClientRect(),
        y = lt(g),
        p = P.left + (g.clientLeft + parseFloat(y.paddingLeft)) * v.x,
        m = P.top + (g.clientTop + parseFloat(y.paddingTop)) * v.y;
      (a *= v.x), (u *= v.y), (c *= v.x), (f *= v.y), (a += p), (u += m), (g = Ge(g).frameElement);
    }
  }
  return Ls({ width: c, height: f, x: a, y: u });
}
function oS(e) {
  let { rect: t, offsetParent: n, strategy: r } = e;
  const i = Et(n),
    o = Kt(n);
  if (n === o) return t;
  let s = { scrollLeft: 0, scrollTop: 0 },
    l = Sn(1);
  const a = Sn(0);
  if ((i || (!i && r !== "fixed")) && ((Cn(n) !== "body" || ro(o)) && (s = rl(n)), Et(n))) {
    const u = Qn(n);
    (l = Ar(n)), (a.x = u.x + n.clientLeft), (a.y = u.y + n.clientTop);
  }
  return {
    width: t.width * l.x,
    height: t.height * l.y,
    x: t.x * l.x - s.scrollLeft * l.x + a.x,
    y: t.y * l.y - s.scrollTop * l.y + a.y,
  };
}
function sS(e) {
  return Array.from(e.getClientRects());
}
function I0(e) {
  return Qn(Kt(e)).left + rl(e).scrollLeft;
}
function lS(e) {
  const t = Kt(e),
    n = rl(e),
    r = e.ownerDocument.body,
    i = Bn(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
    o = Bn(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + I0(e);
  const l = -n.scrollTop;
  return lt(r).direction === "rtl" && (s += Bn(t.clientWidth, r.clientWidth) - i), { width: i, height: o, x: s, y: l };
}
function aS(e, t) {
  const n = Ge(e),
    r = Kt(e),
    i = n.visualViewport;
  let o = r.clientWidth,
    s = r.clientHeight,
    l = 0,
    a = 0;
  if (i) {
    (o = i.width), (s = i.height);
    const u = wc();
    (!u || (u && t === "fixed")) && ((l = i.offsetLeft), (a = i.offsetTop));
  }
  return { width: o, height: s, x: l, y: a };
}
function uS(e, t) {
  const n = Qn(e, !0, t === "fixed"),
    r = n.top + e.clientTop,
    i = n.left + e.clientLeft,
    o = Et(e) ? Ar(e) : Sn(1),
    s = e.clientWidth * o.x,
    l = e.clientHeight * o.y,
    a = i * o.x,
    u = r * o.y;
  return { width: s, height: l, x: a, y: u };
}
function Bd(e, t, n) {
  let r;
  if (t === "viewport") r = aS(e, n);
  else if (t === "document") r = lS(Kt(e));
  else if (Ht(t)) r = uS(t, n);
  else {
    const i = z0(e);
    r = { ...t, x: t.x - i.x, y: t.y - i.y };
  }
  return Ls(r);
}
function B0(e, t) {
  const n = Fr(e);
  return n === t || !Ht(n) || nl(n) ? !1 : lt(n).position === "fixed" || B0(n, t);
}
function cS(e, t) {
  const n = t.get(e);
  if (n) return n;
  let r = Rs(e).filter((l) => Ht(l) && Cn(l) !== "body"),
    i = null;
  const o = lt(e).position === "fixed";
  let s = o ? Fr(e) : e;
  for (; Ht(s) && !nl(s); ) {
    const l = lt(s),
      a = vc(s);
    !a && l.position === "fixed" && (i = null),
      (
        o
          ? !a && !i
          : (!a && l.position === "static" && !!i && ["absolute", "fixed"].includes(i.position)) ||
            (ro(s) && !a && B0(e, s))
      )
        ? (r = r.filter((c) => c !== s))
        : (i = l),
      (s = Fr(s));
  }
  return t.set(e, r), r;
}
function fS(e) {
  let { element: t, boundary: n, rootBoundary: r, strategy: i } = e;
  const s = [...(n === "clippingAncestors" ? cS(t, this._c) : [].concat(n)), r],
    l = s[0],
    a = s.reduce((u, c) => {
      const f = Bd(t, c, i);
      return (
        (u.top = Bn(f.top, u.top)),
        (u.right = jr(f.right, u.right)),
        (u.bottom = jr(f.bottom, u.bottom)),
        (u.left = Bn(f.left, u.left)),
        u
      );
    }, Bd(t, l, i));
  return { width: a.right - a.left, height: a.bottom - a.top, x: a.left, y: a.top };
}
function dS(e) {
  return F0(e);
}
function pS(e, t, n) {
  const r = Et(t),
    i = Kt(t),
    o = n === "fixed",
    s = Qn(e, !0, o, t);
  let l = { scrollLeft: 0, scrollTop: 0 };
  const a = Sn(0);
  if (r || (!r && !o))
    if (((Cn(t) !== "body" || ro(i)) && (l = rl(t)), r)) {
      const u = Qn(t, !0, o, t);
      (a.x = u.x + t.clientLeft), (a.y = u.y + t.clientTop);
    } else i && (a.x = I0(i));
  return { x: s.left + l.scrollLeft - a.x, y: s.top + l.scrollTop - a.y, width: s.width, height: s.height };
}
function $d(e, t) {
  return !Et(e) || lt(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function $0(e, t) {
  const n = Ge(e);
  if (!Et(e)) return n;
  let r = $d(e, t);
  for (; r && tS(r) && lt(r).position === "static"; ) r = $d(r, t);
  return r && (Cn(r) === "html" || (Cn(r) === "body" && lt(r).position === "static" && !vc(r))) ? n : r || nS(e) || n;
}
const hS = async function (e) {
  let { reference: t, floating: n, strategy: r } = e;
  const i = this.getOffsetParent || $0,
    o = this.getDimensions;
  return { reference: pS(t, await i(n), r), floating: { x: 0, y: 0, ...(await o(n)) } };
};
function mS(e) {
  return lt(e).direction === "rtl";
}
const yS = {
  convertOffsetParentRelativeRectToViewportRelativeRect: oS,
  getDocumentElement: Kt,
  getClippingRect: fS,
  getOffsetParent: $0,
  getElementRects: hS,
  getClientRects: sS,
  getDimensions: dS,
  getScale: Ar,
  isElement: Ht,
  isRTL: mS,
};
function gS(e, t) {
  let n = null,
    r;
  const i = Kt(e);
  function o() {
    clearTimeout(r), n && n.disconnect(), (n = null);
  }
  function s(l, a) {
    l === void 0 && (l = !1), a === void 0 && (a = 1), o();
    const { left: u, top: c, width: f, height: d } = e.getBoundingClientRect();
    if ((l || t(), !f || !d)) return;
    const h = Do(c),
      g = Do(i.clientWidth - (u + f)),
      v = Do(i.clientHeight - (c + d)),
      P = Do(u),
      p = { rootMargin: -h + "px " + -g + "px " + -v + "px " + -P + "px", threshold: Bn(0, jr(1, a)) || 1 };
    let m = !0;
    function w(S) {
      const E = S[0].intersectionRatio;
      if (E !== a) {
        if (!m) return s();
        E
          ? s(!1, E)
          : (r = setTimeout(() => {
              s(!1, 1e-7);
            }, 100));
      }
      m = !1;
    }
    try {
      n = new IntersectionObserver(w, { ...p, root: i.ownerDocument });
    } catch {
      n = new IntersectionObserver(w, p);
    }
    n.observe(e);
  }
  return s(!0), o;
}
function vS(e, t, n, r) {
  r === void 0 && (r = {});
  const {
      ancestorScroll: i = !0,
      ancestorResize: o = !0,
      elementResize: s = typeof ResizeObserver == "function",
      layoutShift: l = typeof IntersectionObserver == "function",
      animationFrame: a = !1,
    } = r,
    u = xc(e),
    c = i || o ? [...(u ? Rs(u) : []), ...Rs(t)] : [];
  c.forEach((y) => {
    i && y.addEventListener("scroll", n, { passive: !0 }), o && y.addEventListener("resize", n);
  });
  const f = u && l ? gS(u, n) : null;
  let d = -1,
    h = null;
  s &&
    ((h = new ResizeObserver((y) => {
      let [p] = y;
      p &&
        p.target === u &&
        h &&
        (h.unobserve(t),
        cancelAnimationFrame(d),
        (d = requestAnimationFrame(() => {
          h && h.observe(t);
        }))),
        n();
    })),
    u && !a && h.observe(u),
    h.observe(t));
  let g,
    v = a ? Qn(e) : null;
  a && P();
  function P() {
    const y = Qn(e);
    v && (y.x !== v.x || y.y !== v.y || y.width !== v.width || y.height !== v.height) && n(),
      (v = y),
      (g = requestAnimationFrame(P));
  }
  return (
    n(),
    () => {
      c.forEach((y) => {
        i && y.removeEventListener("scroll", n), o && y.removeEventListener("resize", n);
      }),
        f && f(),
        h && h.disconnect(),
        (h = null),
        a && cancelAnimationFrame(g);
    }
  );
}
const Ud = (e, t, n) => {
  const r = new Map(),
    i = { platform: yS, ...n },
    o = { ...i.platform, _c: r };
  return X2(e, t, { ...i, platform: o });
};
var U0 = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ (function (e) {
  (function () {
    var t = {}.hasOwnProperty;
    function n() {
      for (var r = [], i = 0; i < arguments.length; i++) {
        var o = arguments[i];
        if (o) {
          var s = typeof o;
          if (s === "string" || s === "number") r.push(o);
          else if (Array.isArray(o)) {
            if (o.length) {
              var l = n.apply(null, o);
              l && r.push(l);
            }
          } else if (s === "object") {
            if (o.toString !== Object.prototype.toString && !o.toString.toString().includes("[native code]")) {
              r.push(o.toString());
              continue;
            }
            for (var a in o) t.call(o, a) && o[a] && r.push(a);
          }
        }
      }
      return r.join(" ");
    }
    e.exports ? ((n.default = n), (e.exports = n)) : (window.classNames = n);
  })();
})(U0);
var wS = U0.exports;
const Hd = Xd(wS);
/*
 * React Tooltip
 * {@link https://github.com/ReactTooltip/react-tooltip}
 * @copyright ReactTooltip Team
 * @license MIT
 */ const xS = "react-tooltip-core-styles",
  SS = "react-tooltip-base-styles",
  Wd = { core: !1, base: !1 };
function Kd({ css: e, id: t = SS, type: n = "base", ref: r }) {
  var i, o;
  if (
    !e ||
    typeof document > "u" ||
    Wd[n] ||
    (n === "core" &&
      typeof process < "u" &&
      !((i = process == null ? void 0 : process.env) === null || i === void 0) &&
      i.REACT_TOOLTIP_DISABLE_CORE_STYLES) ||
    (n !== "base" &&
      typeof process < "u" &&
      !((o = process == null ? void 0 : process.env) === null || o === void 0) &&
      o.REACT_TOOLTIP_DISABLE_BASE_STYLES)
  )
    return;
  n === "core" && (t = xS), r || (r = {});
  const { insertAt: s } = r;
  if (document.getElementById(t))
    return void console.warn(`[react-tooltip] Element with id '${t}' already exists. Call \`removeStyle()\` first`);
  const l = document.head || document.getElementsByTagName("head")[0],
    a = document.createElement("style");
  (a.id = t),
    (a.type = "text/css"),
    s === "top" && l.firstChild ? l.insertBefore(a, l.firstChild) : l.appendChild(a),
    a.styleSheet ? (a.styleSheet.cssText = e) : a.appendChild(document.createTextNode(e)),
    (Wd[n] = !0);
}
const Gd = (e, t, n) => {
    let r = null;
    return function (...i) {
      const o = () => {
        (r = null), n || e.apply(this, i);
      };
      n && !r && (e.apply(this, i), (r = setTimeout(o, t))), n || (r && clearTimeout(r), (r = setTimeout(o, t)));
    };
  },
  CS = "DEFAULT_TOOLTIP_ID",
  kS = {
    anchorRefs: new Set(),
    activeAnchor: { current: null },
    attach: () => {},
    detach: () => {},
    setActiveAnchor: () => {},
  },
  PS = x.createContext({ getTooltipData: () => kS });
function H0(e = CS) {
  return x.useContext(PS).getTooltipData(e);
}
const ES = typeof window < "u" ? x.useLayoutEffect : x.useEffect,
  TS = (e) => {
    if (!(e instanceof HTMLElement || e instanceof SVGElement)) return !1;
    const t = getComputedStyle(e);
    return ["overflow", "overflow-x", "overflow-y"].some((n) => {
      const r = t.getPropertyValue(n);
      return r === "auto" || r === "scroll";
    });
  },
  Qd = (e) => {
    if (!e) return null;
    let t = e.parentElement;
    for (; t; ) {
      if (TS(t)) return t;
      t = t.parentElement;
    }
    return document.scrollingElement || document.documentElement;
  },
  Yd = async ({
    elementReference: e = null,
    tooltipReference: t = null,
    tooltipArrowReference: n = null,
    place: r = "top",
    offset: i = 10,
    strategy: o = "absolute",
    middlewares: s = [J2(Number(i)), Z2(), eS({ padding: 5 })],
    border: l,
  }) => {
    if (!e) return { tooltipStyles: {}, tooltipArrowStyles: {}, place: r };
    if (t === null) return { tooltipStyles: {}, tooltipArrowStyles: {}, place: r };
    const a = s;
    return n
      ? (a.push(b2({ element: n, padding: 5 })),
        Ud(e, t, { placement: r, strategy: o, middleware: a }).then(
          ({ x: u, y: c, placement: f, middlewareData: d }) => {
            var h, g;
            const v = { left: `${u}px`, top: `${c}px`, border: l },
              { x: P, y } = (h = d.arrow) !== null && h !== void 0 ? h : { x: 0, y: 0 },
              p =
                (g = { top: "bottom", right: "left", bottom: "top", left: "right" }[f.split("-")[0]]) !== null &&
                g !== void 0
                  ? g
                  : "bottom",
              m = l && { borderBottom: l, borderRight: l };
            let w = 0;
            if (l) {
              const S = `${l}`.match(/(\d+)px/);
              w = S != null && S[1] ? Number(S[1]) : 1;
            }
            return {
              tooltipStyles: v,
              tooltipArrowStyles: {
                left: P != null ? `${P}px` : "",
                top: y != null ? `${y}px` : "",
                right: "",
                bottom: "",
                ...m,
                [p]: `-${4 + w}px`,
              },
              place: f,
            };
          }
        ))
      : Ud(e, t, { placement: "bottom", strategy: o, middleware: a }).then(({ x: u, y: c, placement: f }) => ({
          tooltipStyles: { left: `${u}px`, top: `${c}px` },
          tooltipArrowStyles: {},
          place: f,
        }));
  };
var AS = "core-styles-module_tooltip__3vRRp",
  LS = "core-styles-module_fixed__pcSol",
  RS = "core-styles-module_arrow__cvMwQ",
  _S = "core-styles-module_noArrow__xock6",
  VS = "core-styles-module_clickable__ZuTTB",
  DS = "core-styles-module_show__Nt9eE",
  Kl = {
    tooltip: "styles-module_tooltip__mnnfp",
    arrow: "styles-module_arrow__K0L3T",
    dark: "styles-module_dark__xNqje",
    light: "styles-module_light__Z6W-X",
    success: "styles-module_success__A2AKt",
    warning: "styles-module_warning__SCK0X",
    error: "styles-module_error__JvumD",
    info: "styles-module_info__BWdHW",
  };
const NS = ({
    id: e,
    className: t,
    classNameArrow: n,
    variant: r = "dark",
    anchorId: i,
    anchorSelect: o,
    place: s = "top",
    offset: l = 10,
    events: a = ["hover"],
    openOnClick: u = !1,
    positionStrategy: c = "absolute",
    middlewares: f,
    wrapper: d,
    delayShow: h = 0,
    delayHide: g = 0,
    float: v = !1,
    hidden: P = !1,
    noArrow: y = !1,
    clickable: p = !1,
    closeOnEsc: m = !1,
    closeOnScroll: w = !1,
    closeOnResize: S = !1,
    style: E,
    position: T,
    afterShow: k,
    afterHide: M,
    content: D,
    contentWrapperRef: I,
    isOpen: Y,
    setIsOpen: U,
    activeAnchor: j,
    setActiveAnchor: B,
    border: b,
    opacity: ge,
    arrowColor: L,
  }) => {
    const O = x.useRef(null),
      F = x.useRef(null),
      N = x.useRef(null),
      H = x.useRef(null),
      [Ze, Le] = x.useState(s),
      [qe, he] = x.useState({}),
      [Je, qn] = x.useState({}),
      [Re, Tt] = x.useState(!1),
      [Ue, At] = x.useState(!1),
      Gt = x.useRef(!1),
      $r = x.useRef(null),
      { anchorRefs: Ur, setActiveAnchor: io } = H0(e),
      Jn = x.useRef(!1),
      [Qt, Hr] = x.useState([]),
      An = x.useRef(!1),
      er = u || a.includes("click");
    ES(
      () => (
        (An.current = !0),
        () => {
          An.current = !1;
        }
      ),
      []
    ),
      x.useEffect(() => {
        if (!Re) {
          const _ = setTimeout(() => {
            At(!1);
          }, 150);
          return () => {
            clearTimeout(_);
          };
        }
        return () => null;
      }, [Re]);
    const yt = (_) => {
      An.current &&
        (_ && At(!0),
        setTimeout(() => {
          An.current && (U == null || U(_), Y === void 0 && Tt(_));
        }, 10));
    };
    x.useEffect(() => {
      if (Y === void 0) return () => null;
      Y && At(!0);
      const _ = setTimeout(() => {
        Tt(Y);
      }, 10);
      return () => {
        clearTimeout(_);
      };
    }, [Y]),
      x.useEffect(() => {
        Re !== Gt.current && ((Gt.current = Re), Re ? k == null || k() : M == null || M());
      }, [Re]);
    const tr = (_ = g) => {
        H.current && clearTimeout(H.current),
          (H.current = setTimeout(() => {
            Jn.current || yt(!1);
          }, _));
      },
      Yt = (_) => {
        var $;
        if (!_) return;
        const R = ($ = _.currentTarget) !== null && $ !== void 0 ? $ : _.target;
        if (!(R != null && R.isConnected)) return B(null), void io({ current: null });
        h
          ? (N.current && clearTimeout(N.current),
            (N.current = setTimeout(() => {
              yt(!0);
            }, h)))
          : yt(!0),
          B(R),
          io({ current: R }),
          H.current && clearTimeout(H.current);
      },
      oo = () => {
        p ? tr(g || 100) : g ? tr() : yt(!1), N.current && clearTimeout(N.current);
      },
      Wr = ({ x: _, y: $ }) => {
        Yd({
          place: s,
          offset: l,
          elementReference: {
            getBoundingClientRect: () => ({ x: _, y: $, width: 0, height: 0, top: $, left: _, right: _, bottom: $ }),
          },
          tooltipReference: O.current,
          tooltipArrowReference: F.current,
          strategy: c,
          middlewares: f,
          border: b,
        }).then((R) => {
          Object.keys(R.tooltipStyles).length && he(R.tooltipStyles),
            Object.keys(R.tooltipArrowStyles).length && qn(R.tooltipArrowStyles),
            Le(R.place);
        });
      },
      so = (_) => {
        if (!_) return;
        const $ = _,
          R = { x: $.clientX, y: $.clientY };
        Wr(R), ($r.current = R);
      },
      lo = (_) => {
        Yt(_), g && tr();
      },
      Kr = (_) => {
        var $;
        [document.querySelector(`[id='${i}']`), ...Qt].some((R) => (R == null ? void 0 : R.contains(_.target))) ||
          (!(($ = O.current) === null || $ === void 0) && $.contains(_.target)) ||
          (yt(!1), N.current && clearTimeout(N.current));
      },
      Gr = Gd(Yt, 50, !0),
      Ln = Gd(oo, 50, !0),
      Xt = x.useCallback(() => {
        T
          ? Wr(T)
          : v
          ? $r.current && Wr($r.current)
          : Yd({
              place: s,
              offset: l,
              elementReference: j,
              tooltipReference: O.current,
              tooltipArrowReference: F.current,
              strategy: c,
              middlewares: f,
              border: b,
            }).then((_) => {
              An.current &&
                (Object.keys(_.tooltipStyles).length && he(_.tooltipStyles),
                Object.keys(_.tooltipArrowStyles).length && qn(_.tooltipArrowStyles),
                Le(_.place));
            });
      }, [Re, j, D, E, s, l, c, T, v]);
    x.useEffect(() => {
      var _, $;
      const R = new Set(Ur);
      Qt.forEach((Rt) => {
        R.add({ current: Rt });
      });
      const W = document.querySelector(`[id='${i}']`);
      W && R.add({ current: W });
      const X = () => {
          yt(!1);
        },
        _e = Qd(j),
        Se = Qd(O.current);
      w &&
        (window.addEventListener("scroll", X),
        _e == null || _e.addEventListener("scroll", X),
        Se == null || Se.addEventListener("scroll", X));
      let gt = null;
      S
        ? window.addEventListener("resize", X)
        : j && O.current && (gt = vS(j, O.current, Xt, { ancestorResize: !0, elementResize: !0, layoutShift: !0 }));
      const Yr = (Rt) => {
        Rt.key === "Escape" && yt(!1);
      };
      m && window.addEventListener("keydown", Yr);
      const Lt = [];
      er
        ? (window.addEventListener("click", Kr), Lt.push({ event: "click", listener: lo }))
        : (Lt.push(
            { event: "mouseenter", listener: Gr },
            { event: "mouseleave", listener: Ln },
            { event: "focus", listener: Gr },
            { event: "blur", listener: Ln }
          ),
          v && Lt.push({ event: "mousemove", listener: so }));
      const ao = () => {
          Jn.current = !0;
        },
        Sc = () => {
          (Jn.current = !1), oo();
        };
      return (
        p &&
          !er &&
          ((_ = O.current) === null || _ === void 0 || _.addEventListener("mouseenter", ao),
          ($ = O.current) === null || $ === void 0 || $.addEventListener("mouseleave", Sc)),
        Lt.forEach(({ event: Rt, listener: Xr }) => {
          R.forEach((il) => {
            var br;
            (br = il.current) === null || br === void 0 || br.addEventListener(Rt, Xr);
          });
        }),
        () => {
          var Rt, Xr;
          w &&
            (window.removeEventListener("scroll", X),
            _e == null || _e.removeEventListener("scroll", X),
            Se == null || Se.removeEventListener("scroll", X)),
            S ? window.removeEventListener("resize", X) : gt == null || gt(),
            er && window.removeEventListener("click", Kr),
            m && window.removeEventListener("keydown", Yr),
            p &&
              !er &&
              ((Rt = O.current) === null || Rt === void 0 || Rt.removeEventListener("mouseenter", ao),
              (Xr = O.current) === null || Xr === void 0 || Xr.removeEventListener("mouseleave", Sc)),
            Lt.forEach(({ event: il, listener: br }) => {
              R.forEach((W0) => {
                var ol;
                (ol = W0.current) === null || ol === void 0 || ol.removeEventListener(il, br);
              });
            });
        }
      );
    }, [j, Xt, Ue, Ur, Qt, m, a]),
      x.useEffect(() => {
        let _ = o ?? "";
        !_ && e && (_ = `[data-tooltip-id='${e}']`);
        const $ = new MutationObserver((R) => {
          const W = [];
          R.forEach((X) => {
            if (
              (X.type === "attributes" &&
                X.attributeName === "data-tooltip-id" &&
                X.target.getAttribute("data-tooltip-id") === e &&
                W.push(X.target),
              X.type === "childList" &&
                (j &&
                  [...X.removedNodes].some((_e) => {
                    var Se;
                    return (
                      !!(!((Se = _e == null ? void 0 : _e.contains) === null || Se === void 0) && Se.call(_e, j)) &&
                      (At(!1),
                      yt(!1),
                      B(null),
                      N.current && clearTimeout(N.current),
                      H.current && clearTimeout(H.current),
                      !0)
                    );
                  }),
                _))
            )
              try {
                const _e = [...X.addedNodes].filter((Se) => Se.nodeType === 1);
                W.push(..._e.filter((Se) => Se.matches(_))), W.push(..._e.flatMap((Se) => [...Se.querySelectorAll(_)]));
              } catch {}
          }),
            W.length && Hr((X) => [...X, ...W]);
        });
        return (
          $.observe(document.body, {
            childList: !0,
            subtree: !0,
            attributes: !0,
            attributeFilter: ["data-tooltip-id"],
          }),
          () => {
            $.disconnect();
          }
        );
      }, [e, o, j]),
      x.useEffect(() => {
        Xt();
      }, [Xt]),
      x.useEffect(() => {
        if (!(I != null && I.current)) return () => null;
        const _ = new ResizeObserver(() => {
          Xt();
        });
        return (
          _.observe(I.current),
          () => {
            _.disconnect();
          }
        );
      }, [D, I == null ? void 0 : I.current]),
      x.useEffect(() => {
        var _;
        const $ = document.querySelector(`[id='${i}']`),
          R = [...Qt, $];
        (j && R.includes(j)) || B((_ = Qt[0]) !== null && _ !== void 0 ? _ : $);
      }, [i, Qt, j]),
      x.useEffect(
        () => () => {
          N.current && clearTimeout(N.current), H.current && clearTimeout(H.current);
        },
        []
      ),
      x.useEffect(() => {
        let _ = o;
        if ((!_ && e && (_ = `[data-tooltip-id='${e}']`), _))
          try {
            const $ = Array.from(document.querySelectorAll(_));
            Hr($);
          } catch {
            Hr([]);
          }
      }, [e, o]);
    const Qr = !P && D && Re && Object.keys(qe).length > 0;
    return Ue
      ? Te.createElement(
          d,
          {
            id: e,
            role: "tooltip",
            className: Hd("react-tooltip", AS, Kl.tooltip, Kl[r], t, `react-tooltip__place-${Ze}`, {
              "react-tooltip__show": Qr,
              [DS]: Qr,
              [LS]: c === "fixed",
              [VS]: p,
            }),
            style: { ...E, ...qe, opacity: ge !== void 0 && Qr ? ge : void 0 },
            ref: O,
          },
          D,
          Te.createElement(d, {
            className: Hd("react-tooltip-arrow", RS, Kl.arrow, n, { [_S]: y }),
            style: { ...Je, background: L ? `linear-gradient(to right bottom, transparent 50%, ${L} 50%)` : void 0 },
            ref: F,
          })
        )
      : null;
  },
  MS = ({ content: e }) => Te.createElement("span", { dangerouslySetInnerHTML: { __html: e } }),
  OS = ({
    id: e,
    anchorId: t,
    anchorSelect: n,
    content: r,
    html: i,
    render: o,
    className: s,
    classNameArrow: l,
    variant: a = "dark",
    place: u = "top",
    offset: c = 10,
    wrapper: f = "div",
    children: d = null,
    events: h = ["hover"],
    openOnClick: g = !1,
    positionStrategy: v = "absolute",
    middlewares: P,
    delayShow: y = 0,
    delayHide: p = 0,
    float: m = !1,
    hidden: w = !1,
    noArrow: S = !1,
    clickable: E = !1,
    closeOnEsc: T = !1,
    closeOnScroll: k = !1,
    closeOnResize: M = !1,
    style: D,
    position: I,
    isOpen: Y,
    disableStyleInjection: U = !1,
    border: j,
    opacity: B,
    arrowColor: b,
    setIsOpen: ge,
    afterShow: L,
    afterHide: O,
  }) => {
    const [F, N] = x.useState(r),
      [H, Ze] = x.useState(i),
      [Le, qe] = x.useState(u),
      [he, Je] = x.useState(a),
      [qn, Re] = x.useState(c),
      [Tt, Ue] = x.useState(y),
      [At, Gt] = x.useState(p),
      [$r, Ur] = x.useState(m),
      [io, Jn] = x.useState(w),
      [Qt, Hr] = x.useState(f),
      [An, er] = x.useState(h),
      [yt, tr] = x.useState(v),
      [Yt, oo] = x.useState(null),
      Wr = x.useRef(U),
      { anchorRefs: so, activeAnchor: lo } = H0(e),
      Kr = (_) =>
        _ == null
          ? void 0
          : _.getAttributeNames().reduce(($, R) => {
              var W;
              return (
                R.startsWith("data-tooltip-") &&
                  ($[R.replace(/^data-tooltip-/, "")] =
                    (W = _ == null ? void 0 : _.getAttribute(R)) !== null && W !== void 0 ? W : null),
                $
              );
            }, {}),
      Gr = (_) => {
        const $ = {
          place: (R) => {
            var W;
            qe((W = R) !== null && W !== void 0 ? W : u);
          },
          content: (R) => {
            N(R ?? r);
          },
          html: (R) => {
            Ze(R ?? i);
          },
          variant: (R) => {
            var W;
            Je((W = R) !== null && W !== void 0 ? W : a);
          },
          offset: (R) => {
            Re(R === null ? c : Number(R));
          },
          wrapper: (R) => {
            var W;
            Hr((W = R) !== null && W !== void 0 ? W : f);
          },
          events: (R) => {
            const W = R == null ? void 0 : R.split(" ");
            er(W ?? h);
          },
          "position-strategy": (R) => {
            var W;
            tr((W = R) !== null && W !== void 0 ? W : v);
          },
          "delay-show": (R) => {
            Ue(R === null ? y : Number(R));
          },
          "delay-hide": (R) => {
            Gt(R === null ? p : Number(R));
          },
          float: (R) => {
            Ur(R === null ? m : R === "true");
          },
          hidden: (R) => {
            Jn(R === null ? w : R === "true");
          },
        };
        Object.values($).forEach((R) => R(null)),
          Object.entries(_).forEach(([R, W]) => {
            var X;
            (X = $[R]) === null || X === void 0 || X.call($, W);
          });
      };
    x.useEffect(() => {
      N(r);
    }, [r]),
      x.useEffect(() => {
        Ze(i);
      }, [i]),
      x.useEffect(() => {
        qe(u);
      }, [u]),
      x.useEffect(() => {
        Je(a);
      }, [a]),
      x.useEffect(() => {
        Re(c);
      }, [c]),
      x.useEffect(() => {
        Ue(y);
      }, [y]),
      x.useEffect(() => {
        Gt(p);
      }, [p]),
      x.useEffect(() => {
        Ur(m);
      }, [m]),
      x.useEffect(() => {
        Jn(w);
      }, [w]),
      x.useEffect(() => {
        tr(v);
      }, [v]),
      x.useEffect(() => {
        Wr.current !== U && console.warn("[react-tooltip] Do not change `disableStyleInjection` dynamically.");
      }, [U]),
      x.useEffect(() => {
        typeof window < "u" &&
          window.dispatchEvent(
            new CustomEvent("react-tooltip-inject-styles", { detail: { disableCore: U === "core", disableBase: U } })
          );
      }, []),
      x.useEffect(() => {
        var _;
        const $ = new Set(so);
        let R = n;
        if ((!R && e && (R = `[data-tooltip-id='${e}']`), R))
          try {
            document.querySelectorAll(R).forEach((gt) => {
              $.add({ current: gt });
            });
          } catch {
            console.warn(`[react-tooltip] "${R}" is not a valid CSS selector`);
          }
        const W = document.querySelector(`[id='${t}']`);
        if ((W && $.add({ current: W }), !$.size)) return () => null;
        const X = (_ = Yt ?? W) !== null && _ !== void 0 ? _ : lo.current,
          _e = new MutationObserver((gt) => {
            gt.forEach((Yr) => {
              var Lt;
              if (
                !X ||
                Yr.type !== "attributes" ||
                !(!((Lt = Yr.attributeName) === null || Lt === void 0) && Lt.startsWith("data-tooltip-"))
              )
                return;
              const ao = Kr(X);
              Gr(ao);
            });
          }),
          Se = { attributes: !0, childList: !1, subtree: !1 };
        if (X) {
          const gt = Kr(X);
          Gr(gt), _e.observe(X, Se);
        }
        return () => {
          _e.disconnect();
        };
      }, [so, lo, Yt, t, n]),
      x.useEffect(() => {
        D != null && D.border && console.warn("[react-tooltip] Do not set `style.border`. Use `border` prop instead."),
          j && !CSS.supports("border", `${j}`) && console.warn(`[react-tooltip] "${j}" is not a valid \`border\`.`),
          D != null &&
            D.opacity &&
            console.warn("[react-tooltip] Do not set `style.opacity`. Use `opacity` prop instead."),
          B && !CSS.supports("opacity", `${B}`) && console.warn(`[react-tooltip] "${B}" is not a valid \`opacity\`.`);
      }, []);
    let Ln = d;
    const Xt = x.useRef(null);
    if (o) {
      const _ = o({ content: F ?? null, activeAnchor: Yt });
      Ln = _ ? Te.createElement("div", { ref: Xt, className: "react-tooltip-content-wrapper" }, _) : null;
    } else F && (Ln = F);
    H && (Ln = Te.createElement(MS, { content: H }));
    const Qr = {
      id: e,
      anchorId: t,
      anchorSelect: n,
      className: s,
      classNameArrow: l,
      content: Ln,
      contentWrapperRef: Xt,
      place: Le,
      variant: he,
      offset: qn,
      wrapper: Qt,
      events: An,
      openOnClick: g,
      positionStrategy: yt,
      middlewares: P,
      delayShow: Tt,
      delayHide: At,
      float: $r,
      hidden: io,
      noArrow: S,
      clickable: E,
      closeOnEsc: T,
      closeOnScroll: k,
      closeOnResize: M,
      style: D,
      position: I,
      isOpen: Y,
      border: j,
      opacity: B,
      arrowColor: b,
      setIsOpen: ge,
      afterShow: L,
      afterHide: O,
      activeAnchor: Yt,
      setActiveAnchor: (_) => oo(_),
    };
    return Te.createElement(NS, { ...Qr });
  };
typeof window < "u" &&
  window.addEventListener("react-tooltip-inject-styles", (e) => {
    e.detail.disableCore ||
      Kd({
        css: ":root{--rt-color-white:#fff;--rt-color-dark:#222;--rt-color-success:#8dc572;--rt-color-error:#be6464;--rt-color-warning:#f0ad4e;--rt-color-info:#337ab7;--rt-opacity:0.9}.core-styles-module_tooltip__3vRRp{visibility:hidden;position:absolute;top:0;left:0;pointer-events:none;opacity:0;transition:opacity 0.3s ease-out;will-change:opacity,visibility}.core-styles-module_fixed__pcSol{position:fixed}.core-styles-module_arrow__cvMwQ{position:absolute;background:inherit}.core-styles-module_noArrow__xock6{display:none}.core-styles-module_clickable__ZuTTB{pointer-events:auto}.core-styles-module_show__Nt9eE{visibility:visible;opacity:var(--rt-opacity)}",
        type: "core",
      }),
      e.detail.disableBase ||
        Kd({
          css: `
.styles-module_tooltip__mnnfp{padding:8px 16px;border-radius:3px;font-size:90%;width:max-content}.styles-module_arrow__K0L3T{width:8px;height:8px}[class*='react-tooltip__place-top']>.styles-module_arrow__K0L3T{transform:rotate(45deg)}[class*='react-tooltip__place-right']>.styles-module_arrow__K0L3T{transform:rotate(135deg)}[class*='react-tooltip__place-bottom']>.styles-module_arrow__K0L3T{transform:rotate(225deg)}[class*='react-tooltip__place-left']>.styles-module_arrow__K0L3T{transform:rotate(315deg)}.styles-module_dark__xNqje{background:var(--rt-color-dark);color:var(--rt-color-white)}.styles-module_light__Z6W-X{background-color:var(--rt-color-white);color:var(--rt-color-dark)}.styles-module_success__A2AKt{background-color:var(--rt-color-success);color:var(--rt-color-white)}.styles-module_warning__SCK0X{background-color:var(--rt-color-warning);color:var(--rt-color-white)}.styles-module_error__JvumD{background-color:var(--rt-color-error);color:var(--rt-color-white)}.styles-module_info__BWdHW{background-color:var(--rt-color-info);color:var(--rt-color-white)}`,
          type: "base",
        });
  });
const jS = { backgroundColor: "#f6edd9", fontFamily: "'Montserrat', sans-serif", color: "#222", fontSize: "12px" },
  FS = () =>
    C.jsxs("footer", {
      className: "extension-footer",
      children: [
        C.jsx("div", {
          className: "contact-colab-links",
          children: C.jsxs("span", {
            children: ["Developed by ", C.jsx("span", { id: "name-highlight", children: "Luca" })],
          }),
        }),
        C.jsxs("div", {
          className: "contact-links",
          children: [
            C.jsx("a", {
              "data-tooltip-id": "tooltip",
              "data-tooltip-content": "Dejale una estrellita al repo ;)",
              href: "https://github.com/LucaCuello/DolarLive",
              target: "_blank",
              children: C.jsx(I2, {}),
            }),
            C.jsx("a", {
              "data-tooltip-id": "tooltip",
              "data-tooltip-content": "Conectemos en LinkedIn :)",
              href: "https://www.linkedin.com/in/luca-cuello41/",
              target: "_blank",
              children: C.jsx(B2, {}),
            }),
            C.jsx("a", {
              "data-tooltip-id": "tooltip",
              "data-tooltip-content": "Seguime en Twitter!",
              href: "https://twitter.com/LucaCuello_",
              target: "_blank",
              children: C.jsx($2, {}),
            }),
            C.jsx("a", {
              "data-tooltip-id": "tooltip",
              "data-tooltip-content": "Invitame un cafecito :D",
              href: "https://cafecito.app/lucacuello",
              target: "_blank",
              children: C.jsx(z2, {}),
            }),
          ],
        }),
        C.jsx(OS, {
          id: "tooltip",
          opacity: 1,
          border: "1px solid #536e5665",
          classNameArrow: "tooltip-arrow",
          style: jS,
        }),
      ],
    }),
  zS = () =>
    C.jsx("header", {
      className: "extension-header",
      children: C.jsx(Ee.img, {
        initial: { scale: 0, rotate: 100 },
        animate: { scale: 1, rotate: 0 },
        transition: { duration: 0.4, ease: "easeIn" },
        src: "logo.png",
        draggable: !1,
        alt: "logo",
      }),
    }),
  IS = ({ day: e, month: t, year: n, hours: r, minutes: i, calculator: o, euro: s }) =>
    C.jsxs(Ee.div, {
      className: "extension-title",
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.5, ease: "easeInOut" },
      children: [
        C.jsx("h1", { children: o ? "Calculadora blue" : "Cotización actual" }),
        C.jsx("span", { children: "Última actualización de cambio:" }),
        C.jsx(Ee.span, {
          initial: { opacity: 0 },
          animate: { opacity: s ? 1 : 0 },
          transition: { duration: 0.5, ease: "easeInOut" },
          children: isNaN(e) ? "" : `${e}/${t}/${n} a las ${r}:${i}hs`,
        }),
      ],
    });
function BS() {
  const [e, t] = x.useState(null),
    [n, r] = x.useState(null),
    [i, o] = x.useState(!1),
    [s, l] = x.useState(!1),
    a = "https://api.bluelytics.com.ar/v2/latest",
    u = "https://dolarapi.com/v1/dolares/",
    c = (w) => {
      localStorage.setItem("IsCalculatorSticky", w.toString());
    },
    f = () => {
      const w = localStorage.getItem("IsCalculatorSticky");
      w && o(w === "true");
    },
    d = () => {
      const w = localStorage.getItem("IsCalculatorSticky");
      if (w) return w === "true";
    };
  x.useEffect(() => {
    const w = async () => {
        try {
          const E = await fetch(a),
            T = await E.json(),
            k = await T;
          t(k);
        } catch (E) {
          console.log(E);
        }
      },
      S = async () => {
        try {
          const E = await fetch(u),
            T = await E.json(),
            k = await T,
            M = k[0],
            D = k[1];
          r({ dolarOficial: M, dolarBlue: D });
        } catch (E) {
          console.log(E);
        }
      };
    f(), w(), S();
  }, []);
  const h = new Date(e == null ? void 0 : e.last_update),
    g = h.getDate(),
    v = h.getMonth() + 1,
    P = h.getFullYear().toString().slice(2),
    y = h.getHours(),
    p = h.getMinutes(),
    m = {
      hidden: { scale: 0 },
      visible: () => ({ scale: 1, transition: { duration: 0.2, ease: "easeIn" } }),
      test: () => ({ opacity: 0, transition: { duration: 0.2, ease: "easeIn" } }),
    };
  return C.jsxs("div", {
    className: "extension-container",
    children: [
      C.jsx(zS, {}),
      C.jsx(IS, { day: g, month: v, year: P, hours: y, minutes: p, calculator: i, euro: e }),
      C.jsx("div", { className: "extension-divider" }),
      i
        ? null
        : C.jsxs(C.Fragment, {
            children: [
              C.jsx(Fd, {
                type: "Dólar",
                officialSellValue: n == null ? void 0 : n.dolarOficial.venta,
                OfficialBuyValue: n == null ? void 0 : n.dolarOficial.compra,
                BlueSellValue: n == null ? void 0 : n.dolarBlue.venta,
                BlueBuyValue: n == null ? void 0 : n.dolarBlue.compra,
              }),
              C.jsx("div", { className: "extension-divider" }),
              C.jsx(Fd, {
                type: "Euro",
                officialSellValue: e == null ? void 0 : e.oficial_euro.value_sell,
                OfficialBuyValue: e == null ? void 0 : e.oficial_euro.value_buy,
                BlueSellValue: e == null ? void 0 : e.blue_euro.value_sell,
                BlueBuyValue: e == null ? void 0 : e.blue_euro.value_buy,
              }),
            ],
          }),
      i
        ? C.jsx(F2, {
            dollarValue: +(n == null ? void 0 : n.dolarBlue.venta),
            euroValue: +(e == null ? void 0 : e.blue_euro.value_sell),
          })
        : null,
      C.jsx("div", { className: "extension-divider" }),
      C.jsxs("div", {
        className: "btns-container",
        children: [
          C.jsxs(Ee.button, {
            initial: "hidden",
            animate: "visible",
            variants: m,
            onClick: () => {
              o(!i);
            },
            children: [
              i ? C.jsx(j2, {}) : C.jsx(M2, {}),
              C.jsx("span", { children: i ? "Atrás" : "Calculadora blue" }),
            ],
          }),
          i
            ? d()
              ? C.jsxs(Ee.button, {
                  initial: "hidden",
                  animate: "visible",
                  variants: m,
                  onClick: () => {
                    c(!1), f(), l(!1);
                  },
                  children: [C.jsx(O2, {}), "Desfijar"],
                })
              : C.jsxs(Ee.button, {
                  initial: "hidden",
                  animate: s ? "test" : "visible",
                  variants: m,
                  onClick: () => {
                    c(!0), f(), l(!0);
                  },
                  children: [C.jsx(N2, {}), "Fijar calculadora"],
                })
            : null,
        ],
      }),
      C.jsx(FS, {}),
    ],
  });
}
Gl.createRoot(document.getElementById("root")).render(C.jsx(Te.StrictMode, { children: C.jsx(BS, {}) }));
