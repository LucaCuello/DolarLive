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
function bp(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var yf = { exports: {} },
  wo = {},
  vf = { exports: {} },
  O = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var qr = Symbol.for("react.element"),
  em = Symbol.for("react.portal"),
  tm = Symbol.for("react.fragment"),
  nm = Symbol.for("react.strict_mode"),
  rm = Symbol.for("react.profiler"),
  im = Symbol.for("react.provider"),
  om = Symbol.for("react.context"),
  sm = Symbol.for("react.forward_ref"),
  lm = Symbol.for("react.suspense"),
  am = Symbol.for("react.memo"),
  um = Symbol.for("react.lazy"),
  eu = Symbol.iterator;
function cm(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (eu && e[eu]) || e["@@iterator"]), typeof e == "function" ? e : null);
}
var xf = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Sf = Object.assign,
  wf = {};
function er(e, t, n) {
  (this.props = e), (this.context = t), (this.refs = wf), (this.updater = n || xf);
}
er.prototype.isReactComponent = {};
er.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
er.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Pf() {}
Pf.prototype = er.prototype;
function zl(e, t, n) {
  (this.props = e), (this.context = t), (this.refs = wf), (this.updater = n || xf);
}
var Il = (zl.prototype = new Pf());
Il.constructor = zl;
Sf(Il, er.prototype);
Il.isPureReactComponent = !0;
var tu = Array.isArray,
  kf = Object.prototype.hasOwnProperty,
  Bl = { current: null },
  Cf = { key: !0, ref: !0, __self: !0, __source: !0 };
function Tf(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (o = "" + t.key), t))
      kf.call(t, r) && !Cf.hasOwnProperty(r) && (i[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) i.children = n;
  else if (1 < l) {
    for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
    i.children = a;
  }
  if (e && e.defaultProps) for (r in ((l = e.defaultProps), l)) i[r] === void 0 && (i[r] = l[r]);
  return { $$typeof: qr, type: e, key: o, ref: s, props: i, _owner: Bl.current };
}
function fm(e, t) {
  return { $$typeof: qr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Ul(e) {
  return typeof e == "object" && e !== null && e.$$typeof === qr;
}
function dm(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var nu = /\/+/g;
function Go(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? dm("" + e.key) : t.toString(36);
}
function Li(e, t, n, r, i) {
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
          case qr:
          case em:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (i = i(s)),
      (e = r === "" ? "." + Go(s, 0) : r),
      tu(i)
        ? ((n = ""),
          e != null && (n = e.replace(nu, "$&/") + "/"),
          Li(i, t, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (Ul(i) &&
            (i = fm(i, n + (!i.key || (s && s.key === i.key) ? "" : ("" + i.key).replace(nu, "$&/") + "/") + e)),
          t.push(i)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), tu(e)))
    for (var l = 0; l < e.length; l++) {
      o = e[l];
      var a = r + Go(o, l);
      s += Li(o, t, n, a, i);
    }
  else if (((a = cm(e)), typeof a == "function"))
    for (e = a.call(e), l = 0; !(o = e.next()).done; ) (o = o.value), (a = r + Go(o, l++)), (s += Li(o, t, n, a, i));
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
function ai(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Li(e, r, "", "", function (o) {
      return t.call(n, o, i++);
    }),
    r
  );
}
function hm(e) {
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
var ve = { current: null },
  Di = { transition: null },
  pm = { ReactCurrentDispatcher: ve, ReactCurrentBatchConfig: Di, ReactCurrentOwner: Bl };
O.Children = {
  map: ai,
  forEach: function (e, t, n) {
    ai(
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
      ai(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      ai(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Ul(e)) throw Error("React.Children.only expected to receive a single React element child.");
    return e;
  },
};
O.Component = er;
O.Fragment = tm;
O.Profiler = rm;
O.PureComponent = zl;
O.StrictMode = nm;
O.Suspense = lm;
O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = pm;
O.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Sf({}, e.props),
    i = e.key,
    o = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (s = Bl.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (a in t) kf.call(t, a) && !Cf.hasOwnProperty(a) && (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: qr, type: e.type, key: i, ref: o, props: r, _owner: s };
};
O.createContext = function (e) {
  return (
    (e = {
      $$typeof: om,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: im, _context: e }),
    (e.Consumer = e)
  );
};
O.createElement = Tf;
O.createFactory = function (e) {
  var t = Tf.bind(null, e);
  return (t.type = e), t;
};
O.createRef = function () {
  return { current: null };
};
O.forwardRef = function (e) {
  return { $$typeof: sm, render: e };
};
O.isValidElement = Ul;
O.lazy = function (e) {
  return { $$typeof: um, _payload: { _status: -1, _result: e }, _init: hm };
};
O.memo = function (e, t) {
  return { $$typeof: am, type: e, compare: t === void 0 ? null : t };
};
O.startTransition = function (e) {
  var t = Di.transition;
  Di.transition = {};
  try {
    e();
  } finally {
    Di.transition = t;
  }
};
O.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
O.useCallback = function (e, t) {
  return ve.current.useCallback(e, t);
};
O.useContext = function (e) {
  return ve.current.useContext(e);
};
O.useDebugValue = function () {};
O.useDeferredValue = function (e) {
  return ve.current.useDeferredValue(e);
};
O.useEffect = function (e, t) {
  return ve.current.useEffect(e, t);
};
O.useId = function () {
  return ve.current.useId();
};
O.useImperativeHandle = function (e, t, n) {
  return ve.current.useImperativeHandle(e, t, n);
};
O.useInsertionEffect = function (e, t) {
  return ve.current.useInsertionEffect(e, t);
};
O.useLayoutEffect = function (e, t) {
  return ve.current.useLayoutEffect(e, t);
};
O.useMemo = function (e, t) {
  return ve.current.useMemo(e, t);
};
O.useReducer = function (e, t, n) {
  return ve.current.useReducer(e, t, n);
};
O.useRef = function (e) {
  return ve.current.useRef(e);
};
O.useState = function (e) {
  return ve.current.useState(e);
};
O.useSyncExternalStore = function (e, t, n) {
  return ve.current.useSyncExternalStore(e, t, n);
};
O.useTransition = function () {
  return ve.current.useTransition();
};
O.version = "18.2.0";
vf.exports = O;
var D = vf.exports;
const it = bp(D);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var mm = D,
  gm = Symbol.for("react.element"),
  ym = Symbol.for("react.fragment"),
  vm = Object.prototype.hasOwnProperty,
  xm = mm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Sm = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ef(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (s = t.ref);
  for (r in t) vm.call(t, r) && !Sm.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps) for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return { $$typeof: gm, type: e, key: o, ref: s, props: i, _owner: xm.current };
}
wo.Fragment = ym;
wo.jsx = Ef;
wo.jsxs = Ef;
yf.exports = wo;
var S = yf.exports,
  Ms = {},
  Vf = { exports: {} },
  je = {},
  Lf = { exports: {} },
  Df = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(V, j) {
    var _ = V.length;
    V.push(j);
    e: for (; 0 < _; ) {
      var R = (_ - 1) >>> 1,
        $ = V[R];
      if (0 < i($, j)) (V[R] = j), (V[_] = $), (_ = R);
      else break e;
    }
  }
  function n(V) {
    return V.length === 0 ? null : V[0];
  }
  function r(V) {
    if (V.length === 0) return null;
    var j = V[0],
      _ = V.pop();
    if (_ !== j) {
      V[0] = _;
      e: for (var R = 0, $ = V.length, Jt = $ >>> 1; R < Jt; ) {
        var be = 2 * (R + 1) - 1,
          wn = V[be],
          Le = be + 1,
          qt = V[Le];
        if (0 > i(wn, _))
          Le < $ && 0 > i(qt, wn) ? ((V[R] = qt), (V[Le] = _), (R = Le)) : ((V[R] = wn), (V[be] = _), (R = be));
        else if (Le < $ && 0 > i(qt, _)) (V[R] = qt), (V[Le] = _), (R = Le);
        else break e;
      }
    }
    return j;
  }
  function i(V, j) {
    var _ = V.sortIndex - j.sortIndex;
    return _ !== 0 ? _ : V.id - j.id;
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
    g = !1,
    y = !1,
    x = !1,
    E = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(V) {
    for (var j = n(u); j !== null; ) {
      if (j.callback === null) r(u);
      else if (j.startTime <= V) r(u), (j.sortIndex = j.expirationTime), t(a, j);
      else break;
      j = n(u);
    }
  }
  function v(V) {
    if (((x = !1), p(V), !y))
      if (n(a) !== null) (y = !0), Oe(w);
      else {
        var j = n(u);
        j !== null && qe(v, j.startTime - V);
      }
  }
  function w(V, j) {
    (y = !1), x && ((x = !1), m(P), (P = -1)), (g = !0);
    var _ = d;
    try {
      for (p(j), f = n(a); f !== null && (!(f.expirationTime > j) || (V && !Z())); ) {
        var R = f.callback;
        if (typeof R == "function") {
          (f.callback = null), (d = f.priorityLevel);
          var $ = R(f.expirationTime <= j);
          (j = e.unstable_now()), typeof $ == "function" ? (f.callback = $) : f === n(a) && r(a), p(j);
        } else r(a);
        f = n(a);
      }
      if (f !== null) var Jt = !0;
      else {
        var be = n(u);
        be !== null && qe(v, be.startTime - j), (Jt = !1);
      }
      return Jt;
    } finally {
      (f = null), (d = _), (g = !1);
    }
  }
  var T = !1,
    C = null,
    P = -1,
    N = 5,
    A = -1;
  function Z() {
    return !(e.unstable_now() - A < N);
  }
  function Se() {
    if (C !== null) {
      var V = e.unstable_now();
      A = V;
      var j = !0;
      try {
        j = C(!0, V);
      } finally {
        j ? we() : ((T = !1), (C = null));
      }
    } else T = !1;
  }
  var we;
  if (typeof h == "function")
    we = function () {
      h(Se);
    };
  else if (typeof MessageChannel < "u") {
    var q = new MessageChannel(),
      b = q.port2;
    (q.port1.onmessage = Se),
      (we = function () {
        b.postMessage(null);
      });
  } else
    we = function () {
      E(Se, 0);
    };
  function Oe(V) {
    (C = V), T || ((T = !0), we());
  }
  function qe(V, j) {
    P = E(function () {
      V(e.unstable_now());
    }, j);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (V) {
      V.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || g || ((y = !0), Oe(w));
    }),
    (e.unstable_forceFrameRate = function (V) {
      0 > V || 125 < V
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (N = 0 < V ? Math.floor(1e3 / V) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return d;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (V) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var j = 3;
          break;
        default:
          j = d;
      }
      var _ = d;
      d = j;
      try {
        return V();
      } finally {
        d = _;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (V, j) {
      switch (V) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          V = 3;
      }
      var _ = d;
      d = V;
      try {
        return j();
      } finally {
        d = _;
      }
    }),
    (e.unstable_scheduleCallback = function (V, j, _) {
      var R = e.unstable_now();
      switch (
        (typeof _ == "object" && _ !== null
          ? ((_ = _.delay), (_ = typeof _ == "number" && 0 < _ ? R + _ : R))
          : (_ = R),
        V)
      ) {
        case 1:
          var $ = -1;
          break;
        case 2:
          $ = 250;
          break;
        case 5:
          $ = 1073741823;
          break;
        case 4:
          $ = 1e4;
          break;
        default:
          $ = 5e3;
      }
      return (
        ($ = _ + $),
        (V = { id: c++, callback: j, priorityLevel: V, startTime: _, expirationTime: $, sortIndex: -1 }),
        _ > R
          ? ((V.sortIndex = _), t(u, V), n(a) === null && V === n(u) && (x ? (m(P), (P = -1)) : (x = !0), qe(v, _ - R)))
          : ((V.sortIndex = $), t(a, V), y || g || ((y = !0), Oe(w))),
        V
      );
    }),
    (e.unstable_shouldYield = Z),
    (e.unstable_wrapCallback = function (V) {
      var j = d;
      return function () {
        var _ = d;
        d = j;
        try {
          return V.apply(this, arguments);
        } finally {
          d = _;
        }
      };
    });
})(Df);
Lf.exports = Df;
var wm = Lf.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Mf = D,
  Ne = wm;
function k(e) {
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
var Af = new Set(),
  Ar = {};
function yn(e, t) {
  Gn(e, t), Gn(e + "Capture", t);
}
function Gn(e, t) {
  for (Ar[e] = t, e = 0; e < t.length; e++) Af.add(t[e]);
}
var yt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
  As = Object.prototype.hasOwnProperty,
  Pm =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  ru = {},
  iu = {};
function km(e) {
  return As.call(iu, e) ? !0 : As.call(ru, e) ? !1 : Pm.test(e) ? (iu[e] = !0) : ((ru[e] = !0), !1);
}
function Cm(e, t, n, r) {
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
function Tm(e, t, n, r) {
  if (t === null || typeof t > "u" || Cm(e, t, n, r)) return !0;
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
function xe(e, t, n, r, i, o, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = s);
}
var ce = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ce[e] = new xe(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ce[t] = new xe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ce[e] = new xe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
  ce[e] = new xe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ce[e] = new xe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ce[e] = new xe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ce[e] = new xe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ce[e] = new xe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ce[e] = new xe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var $l = /[\-:]([a-z])/g;
function Hl(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace($l, Hl);
    ce[t] = new xe(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) {
  var t = e.replace($l, Hl);
  ce[t] = new xe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace($l, Hl);
  ce[t] = new xe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ce[e] = new xe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ce.xlinkHref = new xe("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function (e) {
  ce[e] = new xe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Wl(e, t, n, r) {
  var i = ce.hasOwnProperty(t) ? ce[t] : null;
  (i !== null
    ? i.type !== 0
    : r || !(2 < t.length) || (t[0] !== "o" && t[0] !== "O") || (t[1] !== "n" && t[1] !== "N")) &&
    (Tm(t, n, i, r) && (n = null),
    r || i === null
      ? km(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
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
var Pt = Mf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  ui = Symbol.for("react.element"),
  kn = Symbol.for("react.portal"),
  Cn = Symbol.for("react.fragment"),
  Kl = Symbol.for("react.strict_mode"),
  Ns = Symbol.for("react.profiler"),
  Nf = Symbol.for("react.provider"),
  Rf = Symbol.for("react.context"),
  Gl = Symbol.for("react.forward_ref"),
  Rs = Symbol.for("react.suspense"),
  js = Symbol.for("react.suspense_list"),
  Ql = Symbol.for("react.memo"),
  Tt = Symbol.for("react.lazy"),
  jf = Symbol.for("react.offscreen"),
  ou = Symbol.iterator;
function rr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ou && e[ou]) || e["@@iterator"]), typeof e == "function" ? e : null);
}
var X = Object.assign,
  Qo;
function hr(e) {
  if (Qo === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Qo = (t && t[1]) || "";
    }
  return (
    `
` +
    Qo +
    e
  );
}
var Yo = !1;
function Xo(e, t) {
  if (!e || Yo) return "";
  Yo = !0;
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
    (Yo = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? hr(e) : "";
}
function Em(e) {
  switch (e.tag) {
    case 5:
      return hr(e.type);
    case 16:
      return hr("Lazy");
    case 13:
      return hr("Suspense");
    case 19:
      return hr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Xo(e.type, !1)), e;
    case 11:
      return (e = Xo(e.type.render, !1)), e;
    case 1:
      return (e = Xo(e.type, !0)), e;
    default:
      return "";
  }
}
function _s(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Cn:
      return "Fragment";
    case kn:
      return "Portal";
    case Ns:
      return "Profiler";
    case Kl:
      return "StrictMode";
    case Rs:
      return "Suspense";
    case js:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Rf:
        return (e.displayName || "Context") + ".Consumer";
      case Nf:
        return (e._context.displayName || "Context") + ".Provider";
      case Gl:
        var t = e.render;
        return (
          (e = e.displayName),
          e || ((e = t.displayName || t.name || ""), (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Ql:
        return (t = e.displayName || null), t !== null ? t : _s(e.type) || "Memo";
      case Tt:
        (t = e._payload), (e = e._init);
        try {
          return _s(e(t));
        } catch {}
    }
  return null;
}
function Vm(e) {
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
      return _s(t);
    case 8:
      return t === Kl ? "StrictMode" : "Mode";
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
function Ht(e) {
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
function _f(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Lm(e) {
  var t = _f(e) ? "checked" : "value",
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
function ci(e) {
  e._valueTracker || (e._valueTracker = Lm(e));
}
function Of(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return e && (r = _f(e) ? (e.checked ? "true" : "false") : e.value), (e = r), e !== n ? (t.setValue(e), !0) : !1;
}
function $i(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")) return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Os(e, t) {
  var n = t.checked;
  return X({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function su(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Ht(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null,
    });
}
function Ff(e, t) {
  (t = t.checked), t != null && Wl(e, "checked", t, !1);
}
function Fs(e, t) {
  Ff(e, t);
  var n = Ht(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? zs(e, t.type, n) : t.hasOwnProperty("defaultValue") && zs(e, t.type, Ht(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function lu(e, t, n) {
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
function zs(e, t, n) {
  (t !== "number" || $i(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var pr = Array.isArray;
function In(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Ht(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Is(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(k(91));
  return X({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function au(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(k(92));
      if (pr(n)) {
        if (1 < n.length) throw Error(k(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Ht(n) };
}
function zf(e, t) {
  var n = Ht(t.value),
    r = Ht(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function uu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function If(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Bs(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? If(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var fi,
  Bf = (function (e) {
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
        fi = fi || document.createElement("div"),
          fi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = fi.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Nr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var vr = {
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
  Dm = ["Webkit", "ms", "Moz", "O"];
Object.keys(vr).forEach(function (e) {
  Dm.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (vr[t] = vr[e]);
  });
});
function Uf(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (vr.hasOwnProperty(e) && vr[e])
    ? ("" + t).trim()
    : t + "px";
}
function $f(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = Uf(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var Mm = X(
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
function Us(e, t) {
  if (t) {
    if (Mm[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(k(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(k(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(k(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(k(62));
  }
}
function $s(e, t) {
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
var Hs = null;
function Yl(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Ws = null,
  Bn = null,
  Un = null;
function cu(e) {
  if ((e = ti(e))) {
    if (typeof Ws != "function") throw Error(k(280));
    var t = e.stateNode;
    t && ((t = Eo(t)), Ws(e.stateNode, e.type, t));
  }
}
function Hf(e) {
  Bn ? (Un ? Un.push(e) : (Un = [e])) : (Bn = e);
}
function Wf() {
  if (Bn) {
    var e = Bn,
      t = Un;
    if (((Un = Bn = null), cu(e), t)) for (e = 0; e < t.length; e++) cu(t[e]);
  }
}
function Kf(e, t) {
  return e(t);
}
function Gf() {}
var Zo = !1;
function Qf(e, t, n) {
  if (Zo) return e(t, n);
  Zo = !0;
  try {
    return Kf(e, t, n);
  } finally {
    (Zo = !1), (Bn !== null || Un !== null) && (Gf(), Wf());
  }
}
function Rr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Eo(n);
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
  if (n && typeof n != "function") throw Error(k(231, t, typeof n));
  return n;
}
var Ks = !1;
if (yt)
  try {
    var ir = {};
    Object.defineProperty(ir, "passive", {
      get: function () {
        Ks = !0;
      },
    }),
      window.addEventListener("test", ir, ir),
      window.removeEventListener("test", ir, ir);
  } catch {
    Ks = !1;
  }
function Am(e, t, n, r, i, o, s, l, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var xr = !1,
  Hi = null,
  Wi = !1,
  Gs = null,
  Nm = {
    onError: function (e) {
      (xr = !0), (Hi = e);
    },
  };
function Rm(e, t, n, r, i, o, s, l, a) {
  (xr = !1), (Hi = null), Am.apply(Nm, arguments);
}
function jm(e, t, n, r, i, o, s, l, a) {
  if ((Rm.apply(this, arguments), xr)) {
    if (xr) {
      var u = Hi;
      (xr = !1), (Hi = null);
    } else throw Error(k(198));
    Wi || ((Wi = !0), (Gs = u));
  }
}
function vn(e) {
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
function Yf(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null)) return t.dehydrated;
  }
  return null;
}
function fu(e) {
  if (vn(e) !== e) throw Error(k(188));
}
function _m(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = vn(e)), t === null)) throw Error(k(188));
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
        if (o === n) return fu(i), e;
        if (o === r) return fu(i), t;
        o = o.sibling;
      }
      throw Error(k(188));
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
        if (!s) throw Error(k(189));
      }
    }
    if (n.alternate !== r) throw Error(k(190));
  }
  if (n.tag !== 3) throw Error(k(188));
  return n.stateNode.current === n ? e : t;
}
function Xf(e) {
  return (e = _m(e)), e !== null ? Zf(e) : null;
}
function Zf(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Zf(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Jf = Ne.unstable_scheduleCallback,
  du = Ne.unstable_cancelCallback,
  Om = Ne.unstable_shouldYield,
  Fm = Ne.unstable_requestPaint,
  ee = Ne.unstable_now,
  zm = Ne.unstable_getCurrentPriorityLevel,
  Xl = Ne.unstable_ImmediatePriority,
  qf = Ne.unstable_UserBlockingPriority,
  Ki = Ne.unstable_NormalPriority,
  Im = Ne.unstable_LowPriority,
  bf = Ne.unstable_IdlePriority,
  Po = null,
  ot = null;
function Bm(e) {
  if (ot && typeof ot.onCommitFiberRoot == "function")
    try {
      ot.onCommitFiberRoot(Po, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Xe = Math.clz32 ? Math.clz32 : Hm,
  Um = Math.log,
  $m = Math.LN2;
function Hm(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Um(e) / $m) | 0)) | 0;
}
var di = 64,
  hi = 4194304;
function mr(e) {
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
function Gi(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var l = s & ~i;
    l !== 0 ? (r = mr(l)) : ((o &= s), o !== 0 && (r = mr(o)));
  } else (s = n & ~i), s !== 0 ? (r = mr(s)) : o !== 0 && (r = mr(o));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & i) && ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0)))
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; ) (n = 31 - Xe(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function Wm(e, t) {
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
function Km(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
    var s = 31 - Xe(o),
      l = 1 << s,
      a = i[s];
    a === -1 ? (!(l & n) || l & r) && (i[s] = Wm(l, t)) : a <= t && (e.expiredLanes |= l), (o &= ~l);
  }
}
function Qs(e) {
  return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function ed() {
  var e = di;
  return (di <<= 1), !(di & 4194240) && (di = 64), e;
}
function Jo(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function br(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Xe(t)),
    (e[t] = n);
}
function Gm(e, t) {
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
    var i = 31 - Xe(n),
      o = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
  }
}
function Zl(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Xe(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var z = 0;
function td(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var nd,
  Jl,
  rd,
  id,
  od,
  Ys = !1,
  pi = [],
  Nt = null,
  Rt = null,
  jt = null,
  jr = new Map(),
  _r = new Map(),
  Lt = [],
  Qm =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function hu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Nt = null;
      break;
    case "dragenter":
    case "dragleave":
      Rt = null;
      break;
    case "mouseover":
    case "mouseout":
      jt = null;
      break;
    case "pointerover":
    case "pointerout":
      jr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      _r.delete(t.pointerId);
  }
}
function or(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [i] }),
      t !== null && ((t = ti(t)), t !== null && Jl(t)),
      e)
    : ((e.eventSystemFlags |= r), (t = e.targetContainers), i !== null && t.indexOf(i) === -1 && t.push(i), e);
}
function Ym(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (Nt = or(Nt, e, t, n, r, i)), !0;
    case "dragenter":
      return (Rt = or(Rt, e, t, n, r, i)), !0;
    case "mouseover":
      return (jt = or(jt, e, t, n, r, i)), !0;
    case "pointerover":
      var o = i.pointerId;
      return jr.set(o, or(jr.get(o) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (o = i.pointerId), _r.set(o, or(_r.get(o) || null, e, t, n, r, i)), !0;
  }
  return !1;
}
function sd(e) {
  var t = sn(e.target);
  if (t !== null) {
    var n = vn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Yf(n)), t !== null)) {
          (e.blockedOn = t),
            od(e.priority, function () {
              rd(n);
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
function Mi(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Xs(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Hs = r), n.target.dispatchEvent(r), (Hs = null);
    } else return (t = ti(n)), t !== null && Jl(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function pu(e, t, n) {
  Mi(e) && n.delete(t);
}
function Xm() {
  (Ys = !1),
    Nt !== null && Mi(Nt) && (Nt = null),
    Rt !== null && Mi(Rt) && (Rt = null),
    jt !== null && Mi(jt) && (jt = null),
    jr.forEach(pu),
    _r.forEach(pu);
}
function sr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null), Ys || ((Ys = !0), Ne.unstable_scheduleCallback(Ne.unstable_NormalPriority, Xm)));
}
function Or(e) {
  function t(i) {
    return sr(i, e);
  }
  if (0 < pi.length) {
    sr(pi[0], e);
    for (var n = 1; n < pi.length; n++) {
      var r = pi[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Nt !== null && sr(Nt, e), Rt !== null && sr(Rt, e), jt !== null && sr(jt, e), jr.forEach(t), _r.forEach(t), n = 0;
    n < Lt.length;
    n++
  )
    (r = Lt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Lt.length && ((n = Lt[0]), n.blockedOn === null); ) sd(n), n.blockedOn === null && Lt.shift();
}
var $n = Pt.ReactCurrentBatchConfig,
  Qi = !0;
function Zm(e, t, n, r) {
  var i = z,
    o = $n.transition;
  $n.transition = null;
  try {
    (z = 1), ql(e, t, n, r);
  } finally {
    (z = i), ($n.transition = o);
  }
}
function Jm(e, t, n, r) {
  var i = z,
    o = $n.transition;
  $n.transition = null;
  try {
    (z = 4), ql(e, t, n, r);
  } finally {
    (z = i), ($n.transition = o);
  }
}
function ql(e, t, n, r) {
  if (Qi) {
    var i = Xs(e, t, n, r);
    if (i === null) ls(e, t, r, Yi, n), hu(e, r);
    else if (Ym(i, e, t, n, r)) r.stopPropagation();
    else if ((hu(e, r), t & 4 && -1 < Qm.indexOf(e))) {
      for (; i !== null; ) {
        var o = ti(i);
        if ((o !== null && nd(o), (o = Xs(e, t, n, r)), o === null && ls(e, t, r, Yi, n), o === i)) break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else ls(e, t, r, null, n);
  }
}
var Yi = null;
function Xs(e, t, n, r) {
  if (((Yi = null), (e = Yl(r)), (e = sn(e)), e !== null))
    if (((t = vn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Yf(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Yi = e), null;
}
function ld(e) {
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
      switch (zm()) {
        case Xl:
          return 1;
        case qf:
          return 4;
        case Ki:
        case Im:
          return 16;
        case bf:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Mt = null,
  bl = null,
  Ai = null;
function ad() {
  if (Ai) return Ai;
  var e,
    t = bl,
    n = t.length,
    r,
    i = "value" in Mt ? Mt.value : Mt.textContent,
    o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === i[o - r]; r++);
  return (Ai = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Ni(e) {
  var t = e.keyCode;
  return (
    "charCode" in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function mi() {
  return !0;
}
function mu() {
  return !1;
}
function _e(e) {
  function t(n, r, i, o, s) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = s),
      (this.currentTarget = null);
    for (var l in e) e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(o) : o[l]));
    return (
      (this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? mi : mu),
      (this.isPropagationStopped = mu),
      this
    );
  }
  return (
    X(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = mi));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = mi));
      },
      persist: function () {},
      isPersistent: mi,
    }),
    t
  );
}
var tr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  ea = _e(tr),
  ei = X({}, tr, { view: 0, detail: 0 }),
  qm = _e(ei),
  qo,
  bo,
  lr,
  ko = X({}, ei, {
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
    getModifierState: ta,
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
        : (e !== lr &&
            (lr && e.type === "mousemove"
              ? ((qo = e.screenX - lr.screenX), (bo = e.screenY - lr.screenY))
              : (bo = qo = 0),
            (lr = e)),
          qo);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : bo;
    },
  }),
  gu = _e(ko),
  bm = X({}, ko, { dataTransfer: 0 }),
  e0 = _e(bm),
  t0 = X({}, ei, { relatedTarget: 0 }),
  es = _e(t0),
  n0 = X({}, tr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  r0 = _e(n0),
  i0 = X({}, tr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  o0 = _e(i0),
  s0 = X({}, tr, { data: 0 }),
  yu = _e(s0),
  l0 = {
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
  a0 = {
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
  u0 = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function c0(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = u0[e]) ? !!t[e] : !1;
}
function ta() {
  return c0;
}
var f0 = X({}, ei, {
    key: function (e) {
      if (e.key) {
        var t = l0[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Ni(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? a0[e.keyCode] || "Unidentified"
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
    getModifierState: ta,
    charCode: function (e) {
      return e.type === "keypress" ? Ni(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress" ? Ni(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
  }),
  d0 = _e(f0),
  h0 = X({}, ko, {
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
  vu = _e(h0),
  p0 = X({}, ei, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ta,
  }),
  m0 = _e(p0),
  g0 = X({}, tr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  y0 = _e(g0),
  v0 = X({}, ko, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  x0 = _e(v0),
  S0 = [9, 13, 27, 32],
  na = yt && "CompositionEvent" in window,
  Sr = null;
yt && "documentMode" in document && (Sr = document.documentMode);
var w0 = yt && "TextEvent" in window && !Sr,
  ud = yt && (!na || (Sr && 8 < Sr && 11 >= Sr)),
  xu = String.fromCharCode(32),
  Su = !1;
function cd(e, t) {
  switch (e) {
    case "keyup":
      return S0.indexOf(t.keyCode) !== -1;
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
function fd(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Tn = !1;
function P0(e, t) {
  switch (e) {
    case "compositionend":
      return fd(t);
    case "keypress":
      return t.which !== 32 ? null : ((Su = !0), xu);
    case "textInput":
      return (e = t.data), e === xu && Su ? null : e;
    default:
      return null;
  }
}
function k0(e, t) {
  if (Tn) return e === "compositionend" || (!na && cd(e, t)) ? ((e = ad()), (Ai = bl = Mt = null), (Tn = !1), e) : null;
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
      return ud && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var C0 = {
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
function wu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!C0[e.type] : t === "textarea";
}
function dd(e, t, n, r) {
  Hf(r),
    (t = Xi(t, "onChange")),
    0 < t.length && ((n = new ea("onChange", "change", null, n, r)), e.push({ event: n, listeners: t }));
}
var wr = null,
  Fr = null;
function T0(e) {
  kd(e, 0);
}
function Co(e) {
  var t = Ln(e);
  if (Of(t)) return e;
}
function E0(e, t) {
  if (e === "change") return t;
}
var hd = !1;
if (yt) {
  var ts;
  if (yt) {
    var ns = "oninput" in document;
    if (!ns) {
      var Pu = document.createElement("div");
      Pu.setAttribute("oninput", "return;"), (ns = typeof Pu.oninput == "function");
    }
    ts = ns;
  } else ts = !1;
  hd = ts && (!document.documentMode || 9 < document.documentMode);
}
function ku() {
  wr && (wr.detachEvent("onpropertychange", pd), (Fr = wr = null));
}
function pd(e) {
  if (e.propertyName === "value" && Co(Fr)) {
    var t = [];
    dd(t, Fr, e, Yl(e)), Qf(T0, t);
  }
}
function V0(e, t, n) {
  e === "focusin" ? (ku(), (wr = t), (Fr = n), wr.attachEvent("onpropertychange", pd)) : e === "focusout" && ku();
}
function L0(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Co(Fr);
}
function D0(e, t) {
  if (e === "click") return Co(t);
}
function M0(e, t) {
  if (e === "input" || e === "change") return Co(t);
}
function A0(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Je = typeof Object.is == "function" ? Object.is : A0;
function zr(e, t) {
  if (Je(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!As.call(t, i) || !Je(e[i], t[i])) return !1;
  }
  return !0;
}
function Cu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Tu(e, t) {
  var n = Cu(e);
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
    n = Cu(n);
  }
}
function md(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? md(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function gd() {
  for (var e = window, t = $i(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = $i(e.document);
  }
  return t;
}
function ra(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function N0(e) {
  var t = gd(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && md(n.ownerDocument.documentElement, n)) {
    if (r !== null && ra(n)) {
      if (((t = r.start), (e = r.end), e === void 0 && (e = t), "selectionStart" in n))
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (((e = ((t = n.ownerDocument || document) && t.defaultView) || window), e.getSelection)) {
        e = e.getSelection();
        var i = n.textContent.length,
          o = Math.min(r.start, i);
        (r = r.end === void 0 ? o : Math.min(r.end, i)),
          !e.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = Tu(n, o));
        var s = Tu(n, r);
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
var R0 = yt && "documentMode" in document && 11 >= document.documentMode,
  En = null,
  Zs = null,
  Pr = null,
  Js = !1;
function Eu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Js ||
    En == null ||
    En !== $i(r) ||
    ((r = En),
    "selectionStart" in r && ra(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Pr && zr(Pr, r)) ||
      ((Pr = r),
      (r = Xi(Zs, "onSelect")),
      0 < r.length &&
        ((t = new ea("onSelect", "select", null, t, n)), e.push({ event: t, listeners: r }), (t.target = En))));
}
function gi(e, t) {
  var n = {};
  return (n[e.toLowerCase()] = t.toLowerCase()), (n["Webkit" + e] = "webkit" + t), (n["Moz" + e] = "moz" + t), n;
}
var Vn = {
    animationend: gi("Animation", "AnimationEnd"),
    animationiteration: gi("Animation", "AnimationIteration"),
    animationstart: gi("Animation", "AnimationStart"),
    transitionend: gi("Transition", "TransitionEnd"),
  },
  rs = {},
  yd = {};
yt &&
  ((yd = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Vn.animationend.animation, delete Vn.animationiteration.animation, delete Vn.animationstart.animation),
  "TransitionEvent" in window || delete Vn.transitionend.transition);
function To(e) {
  if (rs[e]) return rs[e];
  if (!Vn[e]) return e;
  var t = Vn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in yd) return (rs[e] = t[n]);
  return e;
}
var vd = To("animationend"),
  xd = To("animationiteration"),
  Sd = To("animationstart"),
  wd = To("transitionend"),
  Pd = new Map(),
  Vu =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Qt(e, t) {
  Pd.set(e, t), yn(t, [e]);
}
for (var is = 0; is < Vu.length; is++) {
  var os = Vu[is],
    j0 = os.toLowerCase(),
    _0 = os[0].toUpperCase() + os.slice(1);
  Qt(j0, "on" + _0);
}
Qt(vd, "onAnimationEnd");
Qt(xd, "onAnimationIteration");
Qt(Sd, "onAnimationStart");
Qt("dblclick", "onDoubleClick");
Qt("focusin", "onFocus");
Qt("focusout", "onBlur");
Qt(wd, "onTransitionEnd");
Gn("onMouseEnter", ["mouseout", "mouseover"]);
Gn("onMouseLeave", ["mouseout", "mouseover"]);
Gn("onPointerEnter", ["pointerout", "pointerover"]);
Gn("onPointerLeave", ["pointerout", "pointerover"]);
yn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
yn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
yn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
yn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
yn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
yn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var gr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  O0 = new Set("cancel close invalid load scroll toggle".split(" ").concat(gr));
function Lu(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), jm(r, t, void 0, e), (e.currentTarget = null);
}
function kd(e, t) {
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
          Lu(i, l, u), (o = a);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((l = r[s]), (a = l.instance), (u = l.currentTarget), (l = l.listener), a !== o && i.isPropagationStopped())
          )
            break e;
          Lu(i, l, u), (o = a);
        }
    }
  }
  if (Wi) throw ((e = Gs), (Wi = !1), (Gs = null), e);
}
function B(e, t) {
  var n = t[nl];
  n === void 0 && (n = t[nl] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Cd(t, e, 2, !1), n.add(r));
}
function ss(e, t, n) {
  var r = 0;
  t && (r |= 4), Cd(n, e, r, t);
}
var yi = "_reactListening" + Math.random().toString(36).slice(2);
function Ir(e) {
  if (!e[yi]) {
    (e[yi] = !0),
      Af.forEach(function (n) {
        n !== "selectionchange" && (O0.has(n) || ss(n, !1, e), ss(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[yi] || ((t[yi] = !0), ss("selectionchange", !1, t));
  }
}
function Cd(e, t, n, r) {
  switch (ld(t)) {
    case 1:
      var i = Zm;
      break;
    case 4:
      i = Jm;
      break;
    default:
      i = ql;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !Ks || (t !== "touchstart" && t !== "touchmove" && t !== "wheel") || (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function ls(e, t, n, r, i) {
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
          if (((s = sn(l)), s === null)) return;
          if (((a = s.tag), a === 5 || a === 6)) {
            r = o = s;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  Qf(function () {
    var u = o,
      c = Yl(n),
      f = [];
    e: {
      var d = Pd.get(e);
      if (d !== void 0) {
        var g = ea,
          y = e;
        switch (e) {
          case "keypress":
            if (Ni(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = d0;
            break;
          case "focusin":
            (y = "focus"), (g = es);
            break;
          case "focusout":
            (y = "blur"), (g = es);
            break;
          case "beforeblur":
          case "afterblur":
            g = es;
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
            g = gu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = e0;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = m0;
            break;
          case vd:
          case xd:
          case Sd:
            g = r0;
            break;
          case wd:
            g = y0;
            break;
          case "scroll":
            g = qm;
            break;
          case "wheel":
            g = x0;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = o0;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = vu;
        }
        var x = (t & 4) !== 0,
          E = !x && e === "scroll",
          m = x ? (d !== null ? d + "Capture" : null) : d;
        x = [];
        for (var h = u, p; h !== null; ) {
          p = h;
          var v = p.stateNode;
          if (
            (p.tag === 5 && v !== null && ((p = v), m !== null && ((v = Rr(h, m)), v != null && x.push(Br(h, v, p)))),
            E)
          )
            break;
          h = h.return;
        }
        0 < x.length && ((d = new g(d, y, null, n, c)), f.push({ event: d, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((d = e === "mouseover" || e === "pointerover"),
          (g = e === "mouseout" || e === "pointerout"),
          d && n !== Hs && (y = n.relatedTarget || n.fromElement) && (sn(y) || y[vt]))
        )
          break e;
        if (
          (g || d) &&
          ((d = c.window === c ? c : (d = c.ownerDocument) ? d.defaultView || d.parentWindow : window),
          g
            ? ((y = n.relatedTarget || n.toElement),
              (g = u),
              (y = y ? sn(y) : null),
              y !== null && ((E = vn(y)), y !== E || (y.tag !== 5 && y.tag !== 6)) && (y = null))
            : ((g = null), (y = u)),
          g !== y)
        ) {
          if (
            ((x = gu),
            (v = "onMouseLeave"),
            (m = "onMouseEnter"),
            (h = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((x = vu), (v = "onPointerLeave"), (m = "onPointerEnter"), (h = "pointer")),
            (E = g == null ? d : Ln(g)),
            (p = y == null ? d : Ln(y)),
            (d = new x(v, h + "leave", g, n, c)),
            (d.target = E),
            (d.relatedTarget = p),
            (v = null),
            sn(c) === u && ((x = new x(m, h + "enter", y, n, c)), (x.target = p), (x.relatedTarget = E), (v = x)),
            (E = v),
            g && y)
          )
            t: {
              for (x = g, m = y, h = 0, p = x; p; p = Pn(p)) h++;
              for (p = 0, v = m; v; v = Pn(v)) p++;
              for (; 0 < h - p; ) (x = Pn(x)), h--;
              for (; 0 < p - h; ) (m = Pn(m)), p--;
              for (; h--; ) {
                if (x === m || (m !== null && x === m.alternate)) break t;
                (x = Pn(x)), (m = Pn(m));
              }
              x = null;
            }
          else x = null;
          g !== null && Du(f, d, g, x, !1), y !== null && E !== null && Du(f, E, y, x, !0);
        }
      }
      e: {
        if (
          ((d = u ? Ln(u) : window),
          (g = d.nodeName && d.nodeName.toLowerCase()),
          g === "select" || (g === "input" && d.type === "file"))
        )
          var w = E0;
        else if (wu(d))
          if (hd) w = M0;
          else {
            w = L0;
            var T = V0;
          }
        else
          (g = d.nodeName) && g.toLowerCase() === "input" && (d.type === "checkbox" || d.type === "radio") && (w = D0);
        if (w && (w = w(e, u))) {
          dd(f, w, n, c);
          break e;
        }
        T && T(e, d, u),
          e === "focusout" && (T = d._wrapperState) && T.controlled && d.type === "number" && zs(d, "number", d.value);
      }
      switch (((T = u ? Ln(u) : window), e)) {
        case "focusin":
          (wu(T) || T.contentEditable === "true") && ((En = T), (Zs = u), (Pr = null));
          break;
        case "focusout":
          Pr = Zs = En = null;
          break;
        case "mousedown":
          Js = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Js = !1), Eu(f, n, c);
          break;
        case "selectionchange":
          if (R0) break;
        case "keydown":
        case "keyup":
          Eu(f, n, c);
      }
      var C;
      if (na)
        e: {
          switch (e) {
            case "compositionstart":
              var P = "onCompositionStart";
              break e;
            case "compositionend":
              P = "onCompositionEnd";
              break e;
            case "compositionupdate":
              P = "onCompositionUpdate";
              break e;
          }
          P = void 0;
        }
      else
        Tn ? cd(e, n) && (P = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
      P &&
        (ud &&
          n.locale !== "ko" &&
          (Tn || P !== "onCompositionStart"
            ? P === "onCompositionEnd" && Tn && (C = ad())
            : ((Mt = c), (bl = "value" in Mt ? Mt.value : Mt.textContent), (Tn = !0))),
        (T = Xi(u, P)),
        0 < T.length &&
          ((P = new yu(P, e, null, n, c)),
          f.push({ event: P, listeners: T }),
          C ? (P.data = C) : ((C = fd(n)), C !== null && (P.data = C)))),
        (C = w0 ? P0(e, n) : k0(e, n)) &&
          ((u = Xi(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new yu("onBeforeInput", "beforeinput", null, n, c)),
            f.push({ event: c, listeners: u }),
            (c.data = C)));
    }
    kd(f, t);
  });
}
function Br(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Xi(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      o = i.stateNode;
    i.tag === 5 &&
      o !== null &&
      ((i = o), (o = Rr(e, n)), o != null && r.unshift(Br(e, o, i)), (o = Rr(e, t)), o != null && r.push(Br(e, o, i))),
      (e = e.return);
  }
  return r;
}
function Pn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Du(e, t, n, r, i) {
  for (var o = t._reactName, s = []; n !== null && n !== r; ) {
    var l = n,
      a = l.alternate,
      u = l.stateNode;
    if (a !== null && a === r) break;
    l.tag === 5 &&
      u !== null &&
      ((l = u),
      i
        ? ((a = Rr(n, o)), a != null && s.unshift(Br(n, a, l)))
        : i || ((a = Rr(n, o)), a != null && s.push(Br(n, a, l)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var F0 = /\r\n?/g,
  z0 = /\u0000|\uFFFD/g;
function Mu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      F0,
      `
`
    )
    .replace(z0, "");
}
function vi(e, t, n) {
  if (((t = Mu(t)), Mu(e) !== t && n)) throw Error(k(425));
}
function Zi() {}
var qs = null,
  bs = null;
function el(e, t) {
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
var tl = typeof setTimeout == "function" ? setTimeout : void 0,
  I0 = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Au = typeof Promise == "function" ? Promise : void 0,
  B0 =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Au < "u"
      ? function (e) {
          return Au.resolve(null).then(e).catch(U0);
        }
      : tl;
function U0(e) {
  setTimeout(function () {
    throw e;
  });
}
function as(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), Or(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  Or(t);
}
function _t(e) {
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
function Nu(e) {
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
var nr = Math.random().toString(36).slice(2),
  rt = "__reactFiber$" + nr,
  Ur = "__reactProps$" + nr,
  vt = "__reactContainer$" + nr,
  nl = "__reactEvents$" + nr,
  $0 = "__reactListeners$" + nr,
  H0 = "__reactHandles$" + nr;
function sn(e) {
  var t = e[rt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[vt] || n[rt])) {
      if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
        for (e = Nu(e); e !== null; ) {
          if ((n = e[rt])) return n;
          e = Nu(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function ti(e) {
  return (e = e[rt] || e[vt]), !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e;
}
function Ln(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(k(33));
}
function Eo(e) {
  return e[Ur] || null;
}
var rl = [],
  Dn = -1;
function Yt(e) {
  return { current: e };
}
function U(e) {
  0 > Dn || ((e.current = rl[Dn]), (rl[Dn] = null), Dn--);
}
function I(e, t) {
  Dn++, (rl[Dn] = e.current), (e.current = t);
}
var Wt = {},
  pe = Yt(Wt),
  Ce = Yt(!1),
  dn = Wt;
function Qn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Wt;
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
function Te(e) {
  return (e = e.childContextTypes), e != null;
}
function Ji() {
  U(Ce), U(pe);
}
function Ru(e, t, n) {
  if (pe.current !== Wt) throw Error(k(168));
  I(pe, t), I(Ce, n);
}
function Td(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function")) return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(k(108, Vm(e) || "Unknown", i));
  return X({}, n, r);
}
function qi(e) {
  return (
    (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Wt),
    (dn = pe.current),
    I(pe, e),
    I(Ce, Ce.current),
    !0
  );
}
function ju(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(k(169));
  n ? ((e = Td(e, t, dn)), (r.__reactInternalMemoizedMergedChildContext = e), U(Ce), U(pe), I(pe, e)) : U(Ce), I(Ce, n);
}
var ct = null,
  Vo = !1,
  us = !1;
function Ed(e) {
  ct === null ? (ct = [e]) : ct.push(e);
}
function W0(e) {
  (Vo = !0), Ed(e);
}
function Xt() {
  if (!us && ct !== null) {
    us = !0;
    var e = 0,
      t = z;
    try {
      var n = ct;
      for (z = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (ct = null), (Vo = !1);
    } catch (i) {
      throw (ct !== null && (ct = ct.slice(e + 1)), Jf(Xl, Xt), i);
    } finally {
      (z = t), (us = !1);
    }
  }
  return null;
}
var Mn = [],
  An = 0,
  bi = null,
  eo = 0,
  ze = [],
  Ie = 0,
  hn = null,
  ft = 1,
  dt = "";
function tn(e, t) {
  (Mn[An++] = eo), (Mn[An++] = bi), (bi = e), (eo = t);
}
function Vd(e, t, n) {
  (ze[Ie++] = ft), (ze[Ie++] = dt), (ze[Ie++] = hn), (hn = e);
  var r = ft;
  e = dt;
  var i = 32 - Xe(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var o = 32 - Xe(t) + i;
  if (30 < o) {
    var s = i - (i % 5);
    (o = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (i -= s),
      (ft = (1 << (32 - Xe(t) + i)) | (n << i) | r),
      (dt = o + e);
  } else (ft = (1 << o) | (n << i) | r), (dt = e);
}
function ia(e) {
  e.return !== null && (tn(e, 1), Vd(e, 1, 0));
}
function oa(e) {
  for (; e === bi; ) (bi = Mn[--An]), (Mn[An] = null), (eo = Mn[--An]), (Mn[An] = null);
  for (; e === hn; )
    (hn = ze[--Ie]), (ze[Ie] = null), (dt = ze[--Ie]), (ze[Ie] = null), (ft = ze[--Ie]), (ze[Ie] = null);
}
var Ae = null,
  Me = null,
  H = !1,
  Ye = null;
function Ld(e, t) {
  var n = Ue(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function _u(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
        t !== null ? ((e.stateNode = t), (Ae = e), (Me = _t(t.firstChild)), !0) : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ae = e), (Me = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = hn !== null ? { id: ft, overflow: dt } : null),
            (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
            (n = Ue(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ae = e),
            (Me = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function il(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ol(e) {
  if (H) {
    var t = Me;
    if (t) {
      var n = t;
      if (!_u(e, t)) {
        if (il(e)) throw Error(k(418));
        t = _t(n.nextSibling);
        var r = Ae;
        t && _u(e, t) ? Ld(r, n) : ((e.flags = (e.flags & -4097) | 2), (H = !1), (Ae = e));
      }
    } else {
      if (il(e)) throw Error(k(418));
      (e.flags = (e.flags & -4097) | 2), (H = !1), (Ae = e);
    }
  }
}
function Ou(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Ae = e;
}
function xi(e) {
  if (e !== Ae) return !1;
  if (!H) return Ou(e), (H = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type), (t = t !== "head" && t !== "body" && !el(e.type, e.memoizedProps))),
    t && (t = Me))
  ) {
    if (il(e)) throw (Dd(), Error(k(418)));
    for (; t; ) Ld(e, t), (t = _t(t.nextSibling));
  }
  if ((Ou(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(k(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Me = _t(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Me = null;
    }
  } else Me = Ae ? _t(e.stateNode.nextSibling) : null;
  return !0;
}
function Dd() {
  for (var e = Me; e; ) e = _t(e.nextSibling);
}
function Yn() {
  (Me = Ae = null), (H = !1);
}
function sa(e) {
  Ye === null ? (Ye = [e]) : Ye.push(e);
}
var K0 = Pt.ReactCurrentBatchConfig;
function Ge(e, t) {
  if (e && e.defaultProps) {
    (t = X({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var to = Yt(null),
  no = null,
  Nn = null,
  la = null;
function aa() {
  la = Nn = no = null;
}
function ua(e) {
  var t = to.current;
  U(to), (e._currentValue = t);
}
function sl(e, t, n) {
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
function Hn(e, t) {
  (no = e),
    (la = Nn = null),
    (e = e.dependencies),
    e !== null && e.firstContext !== null && (e.lanes & t && (ke = !0), (e.firstContext = null));
}
function He(e) {
  var t = e._currentValue;
  if (la !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Nn === null)) {
      if (no === null) throw Error(k(308));
      (Nn = e), (no.dependencies = { lanes: 0, firstContext: e });
    } else Nn = Nn.next = e;
  return t;
}
var ln = null;
function ca(e) {
  ln === null ? (ln = [e]) : ln.push(e);
}
function Md(e, t, n, r) {
  var i = t.interleaved;
  return i === null ? ((n.next = n), ca(t)) : ((n.next = i.next), (i.next = n)), (t.interleaved = n), xt(e, r);
}
function xt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t), (n = e.alternate), n !== null && (n.childLanes |= t), (n = e), (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Et = !1;
function fa(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Ad(e, t) {
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
function pt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Ot(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), F & 2)) {
    var i = r.pending;
    return i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)), (r.pending = t), xt(e, n);
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), ca(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    xt(e, n)
  );
}
function Ri(e, t, n) {
  if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Zl(e, n);
  }
}
function Fu(e, t) {
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
function ro(e, t, n, r) {
  var i = e.updateQueue;
  Et = !1;
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
        g = l.eventTime;
      if ((r & d) === d) {
        c !== null &&
          (c = c.next = { eventTime: g, lane: 0, tag: l.tag, payload: l.payload, callback: l.callback, next: null });
        e: {
          var y = e,
            x = l;
          switch (((d = t), (g = n), x.tag)) {
            case 1:
              if (((y = x.payload), typeof y == "function")) {
                f = y.call(g, f, d);
                break e;
              }
              f = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (((y = x.payload), (d = typeof y == "function" ? y.call(g, f, d) : y), d == null)) break e;
              f = X({}, f, d);
              break e;
            case 2:
              Et = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64), (d = i.effects), d === null ? (i.effects = [l]) : d.push(l));
      } else
        (g = { eventTime: g, lane: d, tag: l.tag, payload: l.payload, callback: l.callback, next: null }),
          c === null ? ((u = c = g), (a = f)) : (c = c.next = g),
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
    (mn |= s), (e.lanes = s), (e.memoizedState = f);
  }
}
function zu(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function")) throw Error(k(191, i));
        i.call(r);
      }
    }
}
var Nd = new Mf.Component().refs;
function ll(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : X({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Lo = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? vn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ye(),
      i = zt(e),
      o = pt(r, i);
    (o.payload = t), n != null && (o.callback = n), (t = Ot(e, o, i)), t !== null && (Ze(t, e, i, r), Ri(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ye(),
      i = zt(e),
      o = pt(r, i);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = Ot(e, o, i)),
      t !== null && (Ze(t, e, i, r), Ri(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ye(),
      r = zt(e),
      i = pt(n, r);
    (i.tag = 2), t != null && (i.callback = t), (t = Ot(e, i, r)), t !== null && (Ze(t, e, r, n), Ri(t, e, r));
  },
};
function Iu(e, t, n, r, i, o, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, s)
      : t.prototype && t.prototype.isPureReactComponent
      ? !zr(n, r) || !zr(i, o)
      : !0
  );
}
function Rd(e, t, n) {
  var r = !1,
    i = Wt,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = He(o))
      : ((i = Te(t) ? dn : pe.current), (r = t.contextTypes), (o = (r = r != null) ? Qn(e, i) : Wt)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Lo),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Bu(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Lo.enqueueReplaceState(t, t.state, null);
}
function al(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = Nd), fa(e);
  var o = t.contextType;
  typeof o == "object" && o !== null ? (i.context = He(o)) : ((o = Te(t) ? dn : pe.current), (i.context = Qn(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (ll(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(),
      t !== i.state && Lo.enqueueReplaceState(i, i.state, null),
      ro(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function ar(e, t, n) {
  if (((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(k(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(k(147, e));
      var i = r,
        o = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o
        ? t.ref
        : ((t = function (s) {
            var l = i.refs;
            l === Nd && (l = i.refs = {}), s === null ? delete l[o] : (l[o] = s);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(k(284));
    if (!n._owner) throw Error(k(290, e));
  }
  return e;
}
function Si(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(k(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)))
  );
}
function Uu(e) {
  var t = e._init;
  return t(e._payload);
}
function jd(e) {
  function t(m, h) {
    if (e) {
      var p = m.deletions;
      p === null ? ((m.deletions = [h]), (m.flags |= 16)) : p.push(h);
    }
  }
  function n(m, h) {
    if (!e) return null;
    for (; h !== null; ) t(m, h), (h = h.sibling);
    return null;
  }
  function r(m, h) {
    for (m = new Map(); h !== null; ) h.key !== null ? m.set(h.key, h) : m.set(h.index, h), (h = h.sibling);
    return m;
  }
  function i(m, h) {
    return (m = It(m, h)), (m.index = 0), (m.sibling = null), m;
  }
  function o(m, h, p) {
    return (
      (m.index = p),
      e
        ? ((p = m.alternate), p !== null ? ((p = p.index), p < h ? ((m.flags |= 2), h) : p) : ((m.flags |= 2), h))
        : ((m.flags |= 1048576), h)
    );
  }
  function s(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function l(m, h, p, v) {
    return h === null || h.tag !== 6 ? ((h = gs(p, m.mode, v)), (h.return = m), h) : ((h = i(h, p)), (h.return = m), h);
  }
  function a(m, h, p, v) {
    var w = p.type;
    return w === Cn
      ? c(m, h, p.props.children, v, p.key)
      : h !== null &&
        (h.elementType === w || (typeof w == "object" && w !== null && w.$$typeof === Tt && Uu(w) === h.type))
      ? ((v = i(h, p.props)), (v.ref = ar(m, h, p)), (v.return = m), v)
      : ((v = Ii(p.type, p.key, p.props, null, m.mode, v)), (v.ref = ar(m, h, p)), (v.return = m), v);
  }
  function u(m, h, p, v) {
    return h === null ||
      h.tag !== 4 ||
      h.stateNode.containerInfo !== p.containerInfo ||
      h.stateNode.implementation !== p.implementation
      ? ((h = ys(p, m.mode, v)), (h.return = m), h)
      : ((h = i(h, p.children || [])), (h.return = m), h);
  }
  function c(m, h, p, v, w) {
    return h === null || h.tag !== 7
      ? ((h = fn(p, m.mode, v, w)), (h.return = m), h)
      : ((h = i(h, p)), (h.return = m), h);
  }
  function f(m, h, p) {
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return (h = gs("" + h, m.mode, p)), (h.return = m), h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case ui:
          return (p = Ii(h.type, h.key, h.props, null, m.mode, p)), (p.ref = ar(m, null, h)), (p.return = m), p;
        case kn:
          return (h = ys(h, m.mode, p)), (h.return = m), h;
        case Tt:
          var v = h._init;
          return f(m, v(h._payload), p);
      }
      if (pr(h) || rr(h)) return (h = fn(h, m.mode, p, null)), (h.return = m), h;
      Si(m, h);
    }
    return null;
  }
  function d(m, h, p, v) {
    var w = h !== null ? h.key : null;
    if ((typeof p == "string" && p !== "") || typeof p == "number") return w !== null ? null : l(m, h, "" + p, v);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case ui:
          return p.key === w ? a(m, h, p, v) : null;
        case kn:
          return p.key === w ? u(m, h, p, v) : null;
        case Tt:
          return (w = p._init), d(m, h, w(p._payload), v);
      }
      if (pr(p) || rr(p)) return w !== null ? null : c(m, h, p, v, null);
      Si(m, p);
    }
    return null;
  }
  function g(m, h, p, v, w) {
    if ((typeof v == "string" && v !== "") || typeof v == "number") return (m = m.get(p) || null), l(h, m, "" + v, w);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case ui:
          return (m = m.get(v.key === null ? p : v.key) || null), a(h, m, v, w);
        case kn:
          return (m = m.get(v.key === null ? p : v.key) || null), u(h, m, v, w);
        case Tt:
          var T = v._init;
          return g(m, h, p, T(v._payload), w);
      }
      if (pr(v) || rr(v)) return (m = m.get(p) || null), c(h, m, v, w, null);
      Si(h, v);
    }
    return null;
  }
  function y(m, h, p, v) {
    for (var w = null, T = null, C = h, P = (h = 0), N = null; C !== null && P < p.length; P++) {
      C.index > P ? ((N = C), (C = null)) : (N = C.sibling);
      var A = d(m, C, p[P], v);
      if (A === null) {
        C === null && (C = N);
        break;
      }
      e && C && A.alternate === null && t(m, C),
        (h = o(A, h, P)),
        T === null ? (w = A) : (T.sibling = A),
        (T = A),
        (C = N);
    }
    if (P === p.length) return n(m, C), H && tn(m, P), w;
    if (C === null) {
      for (; P < p.length; P++)
        (C = f(m, p[P], v)), C !== null && ((h = o(C, h, P)), T === null ? (w = C) : (T.sibling = C), (T = C));
      return H && tn(m, P), w;
    }
    for (C = r(m, C); P < p.length; P++)
      (N = g(C, m, P, p[P], v)),
        N !== null &&
          (e && N.alternate !== null && C.delete(N.key === null ? P : N.key),
          (h = o(N, h, P)),
          T === null ? (w = N) : (T.sibling = N),
          (T = N));
    return (
      e &&
        C.forEach(function (Z) {
          return t(m, Z);
        }),
      H && tn(m, P),
      w
    );
  }
  function x(m, h, p, v) {
    var w = rr(p);
    if (typeof w != "function") throw Error(k(150));
    if (((p = w.call(p)), p == null)) throw Error(k(151));
    for (var T = (w = null), C = h, P = (h = 0), N = null, A = p.next(); C !== null && !A.done; P++, A = p.next()) {
      C.index > P ? ((N = C), (C = null)) : (N = C.sibling);
      var Z = d(m, C, A.value, v);
      if (Z === null) {
        C === null && (C = N);
        break;
      }
      e && C && Z.alternate === null && t(m, C),
        (h = o(Z, h, P)),
        T === null ? (w = Z) : (T.sibling = Z),
        (T = Z),
        (C = N);
    }
    if (A.done) return n(m, C), H && tn(m, P), w;
    if (C === null) {
      for (; !A.done; P++, A = p.next())
        (A = f(m, A.value, v)), A !== null && ((h = o(A, h, P)), T === null ? (w = A) : (T.sibling = A), (T = A));
      return H && tn(m, P), w;
    }
    for (C = r(m, C); !A.done; P++, A = p.next())
      (A = g(C, m, P, A.value, v)),
        A !== null &&
          (e && A.alternate !== null && C.delete(A.key === null ? P : A.key),
          (h = o(A, h, P)),
          T === null ? (w = A) : (T.sibling = A),
          (T = A));
    return (
      e &&
        C.forEach(function (Se) {
          return t(m, Se);
        }),
      H && tn(m, P),
      w
    );
  }
  function E(m, h, p, v) {
    if (
      (typeof p == "object" && p !== null && p.type === Cn && p.key === null && (p = p.props.children),
      typeof p == "object" && p !== null)
    ) {
      switch (p.$$typeof) {
        case ui:
          e: {
            for (var w = p.key, T = h; T !== null; ) {
              if (T.key === w) {
                if (((w = p.type), w === Cn)) {
                  if (T.tag === 7) {
                    n(m, T.sibling), (h = i(T, p.props.children)), (h.return = m), (m = h);
                    break e;
                  }
                } else if (
                  T.elementType === w ||
                  (typeof w == "object" && w !== null && w.$$typeof === Tt && Uu(w) === T.type)
                ) {
                  n(m, T.sibling), (h = i(T, p.props)), (h.ref = ar(m, T, p)), (h.return = m), (m = h);
                  break e;
                }
                n(m, T);
                break;
              } else t(m, T);
              T = T.sibling;
            }
            p.type === Cn
              ? ((h = fn(p.props.children, m.mode, v, p.key)), (h.return = m), (m = h))
              : ((v = Ii(p.type, p.key, p.props, null, m.mode, v)), (v.ref = ar(m, h, p)), (v.return = m), (m = v));
          }
          return s(m);
        case kn:
          e: {
            for (T = p.key; h !== null; ) {
              if (h.key === T)
                if (
                  h.tag === 4 &&
                  h.stateNode.containerInfo === p.containerInfo &&
                  h.stateNode.implementation === p.implementation
                ) {
                  n(m, h.sibling), (h = i(h, p.children || [])), (h.return = m), (m = h);
                  break e;
                } else {
                  n(m, h);
                  break;
                }
              else t(m, h);
              h = h.sibling;
            }
            (h = ys(p, m.mode, v)), (h.return = m), (m = h);
          }
          return s(m);
        case Tt:
          return (T = p._init), E(m, h, T(p._payload), v);
      }
      if (pr(p)) return y(m, h, p, v);
      if (rr(p)) return x(m, h, p, v);
      Si(m, p);
    }
    return (typeof p == "string" && p !== "") || typeof p == "number"
      ? ((p = "" + p),
        h !== null && h.tag === 6
          ? (n(m, h.sibling), (h = i(h, p)), (h.return = m), (m = h))
          : (n(m, h), (h = gs(p, m.mode, v)), (h.return = m), (m = h)),
        s(m))
      : n(m, h);
  }
  return E;
}
var Xn = jd(!0),
  _d = jd(!1),
  ni = {},
  st = Yt(ni),
  $r = Yt(ni),
  Hr = Yt(ni);
function an(e) {
  if (e === ni) throw Error(k(174));
  return e;
}
function da(e, t) {
  switch ((I(Hr, t), I($r, e), I(st, ni), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Bs(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t), (t = e.namespaceURI || null), (e = e.tagName), (t = Bs(t, e));
  }
  U(st), I(st, t);
}
function Zn() {
  U(st), U($r), U(Hr);
}
function Od(e) {
  an(Hr.current);
  var t = an(st.current),
    n = Bs(t, e.type);
  t !== n && (I($r, e), I(st, n));
}
function ha(e) {
  $r.current === e && (U(st), U($r));
}
var K = Yt(0);
function io(e) {
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
var cs = [];
function pa() {
  for (var e = 0; e < cs.length; e++) cs[e]._workInProgressVersionPrimary = null;
  cs.length = 0;
}
var ji = Pt.ReactCurrentDispatcher,
  fs = Pt.ReactCurrentBatchConfig,
  pn = 0,
  Y = null,
  re = null,
  se = null,
  oo = !1,
  kr = !1,
  Wr = 0,
  G0 = 0;
function fe() {
  throw Error(k(321));
}
function ma(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Je(e[n], t[n])) return !1;
  return !0;
}
function ga(e, t, n, r, i, o) {
  if (
    ((pn = o),
    (Y = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (ji.current = e === null || e.memoizedState === null ? Z0 : J0),
    (e = n(r, i)),
    kr)
  ) {
    o = 0;
    do {
      if (((kr = !1), (Wr = 0), 25 <= o)) throw Error(k(301));
      (o += 1), (se = re = null), (t.updateQueue = null), (ji.current = q0), (e = n(r, i));
    } while (kr);
  }
  if (((ji.current = so), (t = re !== null && re.next !== null), (pn = 0), (se = re = Y = null), (oo = !1), t))
    throw Error(k(300));
  return e;
}
function ya() {
  var e = Wr !== 0;
  return (Wr = 0), e;
}
function tt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return se === null ? (Y.memoizedState = se = e) : (se = se.next = e), se;
}
function We() {
  if (re === null) {
    var e = Y.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = re.next;
  var t = se === null ? Y.memoizedState : se.next;
  if (t !== null) (se = t), (re = e);
  else {
    if (e === null) throw Error(k(310));
    (re = e),
      (e = {
        memoizedState: re.memoizedState,
        baseState: re.baseState,
        baseQueue: re.baseQueue,
        queue: re.queue,
        next: null,
      }),
      se === null ? (Y.memoizedState = se = e) : (se = se.next = e);
  }
  return se;
}
function Kr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ds(e) {
  var t = We(),
    n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = re,
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
      if ((pn & c) === c)
        a !== null &&
          (a = a.next =
            { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var f = { lane: c, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null };
        a === null ? ((l = a = f), (s = r)) : (a = a.next = f), (Y.lanes |= c), (mn |= c);
      }
      u = u.next;
    } while (u !== null && u !== o);
    a === null ? (s = r) : (a.next = l),
      Je(r, t.memoizedState) || (ke = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (o = i.lane), (Y.lanes |= o), (mn |= o), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function hs(e) {
  var t = We(),
    n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var s = (i = i.next);
    do (o = e(o, s.action)), (s = s.next);
    while (s !== i);
    Je(o, t.memoizedState) || (ke = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function Fd() {}
function zd(e, t) {
  var n = Y,
    r = We(),
    i = t(),
    o = !Je(r.memoizedState, i);
  if (
    (o && ((r.memoizedState = i), (ke = !0)),
    (r = r.queue),
    va(Ud.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (se !== null && se.memoizedState.tag & 1))
  ) {
    if (((n.flags |= 2048), Gr(9, Bd.bind(null, n, r, i, t), void 0, null), le === null)) throw Error(k(349));
    pn & 30 || Id(n, t, i);
  }
  return i;
}
function Id(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Y.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }), (Y.updateQueue = t), (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Bd(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), $d(t) && Hd(e);
}
function Ud(e, t, n) {
  return n(function () {
    $d(t) && Hd(e);
  });
}
function $d(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Je(e, n);
  } catch {
    return !0;
  }
}
function Hd(e) {
  var t = xt(e, 1);
  t !== null && Ze(t, e, 1, -1);
}
function $u(e) {
  var t = tt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Kr, lastRenderedState: e }),
    (t.queue = e),
    (e = e.dispatch = X0.bind(null, Y, e)),
    [t.memoizedState, e]
  );
}
function Gr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Y.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }), (Y.updateQueue = t), (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null ? (t.lastEffect = e.next = e) : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Wd() {
  return We().memoizedState;
}
function _i(e, t, n, r) {
  var i = tt();
  (Y.flags |= e), (i.memoizedState = Gr(1 | t, n, void 0, r === void 0 ? null : r));
}
function Do(e, t, n, r) {
  var i = We();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (re !== null) {
    var s = re.memoizedState;
    if (((o = s.destroy), r !== null && ma(r, s.deps))) {
      i.memoizedState = Gr(t, n, o, r);
      return;
    }
  }
  (Y.flags |= e), (i.memoizedState = Gr(1 | t, n, o, r));
}
function Hu(e, t) {
  return _i(8390656, 8, e, t);
}
function va(e, t) {
  return Do(2048, 8, e, t);
}
function Kd(e, t) {
  return Do(4, 2, e, t);
}
function Gd(e, t) {
  return Do(4, 4, e, t);
}
function Qd(e, t) {
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
function Yd(e, t, n) {
  return (n = n != null ? n.concat([e]) : null), Do(4, 4, Qd.bind(null, t, e), n);
}
function xa() {}
function Xd(e, t) {
  var n = We();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ma(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
}
function Zd(e, t) {
  var n = We();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ma(t, r[1]) ? r[0] : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Jd(e, t, n) {
  return pn & 21
    ? (Je(n, t) || ((n = ed()), (Y.lanes |= n), (mn |= n), (e.baseState = !0)), t)
    : (e.baseState && ((e.baseState = !1), (ke = !0)), (e.memoizedState = n));
}
function Q0(e, t) {
  var n = z;
  (z = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = fs.transition;
  fs.transition = {};
  try {
    e(!1), t();
  } finally {
    (z = n), (fs.transition = r);
  }
}
function qd() {
  return We().memoizedState;
}
function Y0(e, t, n) {
  var r = zt(e);
  if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), bd(e))) eh(t, n);
  else if (((n = Md(e, t, n, r)), n !== null)) {
    var i = ye();
    Ze(n, e, r, i), th(n, t, r);
  }
}
function X0(e, t, n) {
  var r = zt(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (bd(e)) eh(t, i);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && ((o = t.lastRenderedReducer), o !== null))
      try {
        var s = t.lastRenderedState,
          l = o(s, n);
        if (((i.hasEagerState = !0), (i.eagerState = l), Je(l, s))) {
          var a = t.interleaved;
          a === null ? ((i.next = i), ca(t)) : ((i.next = a.next), (a.next = i)), (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = Md(e, t, i, r)), n !== null && ((i = ye()), Ze(n, e, r, i), th(n, t, r));
  }
}
function bd(e) {
  var t = e.alternate;
  return e === Y || (t !== null && t === Y);
}
function eh(e, t) {
  kr = oo = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
}
function th(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Zl(e, n);
  }
}
var so = {
    readContext: He,
    useCallback: fe,
    useContext: fe,
    useEffect: fe,
    useImperativeHandle: fe,
    useInsertionEffect: fe,
    useLayoutEffect: fe,
    useMemo: fe,
    useReducer: fe,
    useRef: fe,
    useState: fe,
    useDebugValue: fe,
    useDeferredValue: fe,
    useTransition: fe,
    useMutableSource: fe,
    useSyncExternalStore: fe,
    useId: fe,
    unstable_isNewReconciler: !1,
  },
  Z0 = {
    readContext: He,
    useCallback: function (e, t) {
      return (tt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: He,
    useEffect: Hu,
    useImperativeHandle: function (e, t, n) {
      return (n = n != null ? n.concat([e]) : null), _i(4194308, 4, Qd.bind(null, t, e), n);
    },
    useLayoutEffect: function (e, t) {
      return _i(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return _i(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = tt();
      return (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e;
    },
    useReducer: function (e, t, n) {
      var r = tt();
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
        (e = e.dispatch = Y0.bind(null, Y, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = tt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: $u,
    useDebugValue: xa,
    useDeferredValue: function (e) {
      return (tt().memoizedState = e);
    },
    useTransition: function () {
      var e = $u(!1),
        t = e[0];
      return (e = Q0.bind(null, e[1])), (tt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Y,
        i = tt();
      if (H) {
        if (n === void 0) throw Error(k(407));
        n = n();
      } else {
        if (((n = t()), le === null)) throw Error(k(349));
        pn & 30 || Id(r, t, n);
      }
      i.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (i.queue = o),
        Hu(Ud.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        Gr(9, Bd.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = tt(),
        t = le.identifierPrefix;
      if (H) {
        var n = dt,
          r = ft;
        (n = (r & ~(1 << (32 - Xe(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Wr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = G0++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  J0 = {
    readContext: He,
    useCallback: Xd,
    useContext: He,
    useEffect: va,
    useImperativeHandle: Yd,
    useInsertionEffect: Kd,
    useLayoutEffect: Gd,
    useMemo: Zd,
    useReducer: ds,
    useRef: Wd,
    useState: function () {
      return ds(Kr);
    },
    useDebugValue: xa,
    useDeferredValue: function (e) {
      var t = We();
      return Jd(t, re.memoizedState, e);
    },
    useTransition: function () {
      var e = ds(Kr)[0],
        t = We().memoizedState;
      return [e, t];
    },
    useMutableSource: Fd,
    useSyncExternalStore: zd,
    useId: qd,
    unstable_isNewReconciler: !1,
  },
  q0 = {
    readContext: He,
    useCallback: Xd,
    useContext: He,
    useEffect: va,
    useImperativeHandle: Yd,
    useInsertionEffect: Kd,
    useLayoutEffect: Gd,
    useMemo: Zd,
    useReducer: hs,
    useRef: Wd,
    useState: function () {
      return hs(Kr);
    },
    useDebugValue: xa,
    useDeferredValue: function (e) {
      var t = We();
      return re === null ? (t.memoizedState = e) : Jd(t, re.memoizedState, e);
    },
    useTransition: function () {
      var e = hs(Kr)[0],
        t = We().memoizedState;
      return [e, t];
    },
    useMutableSource: Fd,
    useSyncExternalStore: zd,
    useId: qd,
    unstable_isNewReconciler: !1,
  };
function Jn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Em(r)), (r = r.return);
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
function ps(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function ul(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var b0 = typeof WeakMap == "function" ? WeakMap : Map;
function nh(e, t, n) {
  (n = pt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      ao || ((ao = !0), (xl = r)), ul(e, t);
    }),
    n
  );
}
function rh(e, t, n) {
  (n = pt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        ul(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        ul(e, t), typeof r != "function" && (Ft === null ? (Ft = new Set([this])) : Ft.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, { componentStack: s !== null ? s : "" });
      }),
    n
  );
}
function Wu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new b0();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = hg.bind(null, e, t, n)), t.then(e, e));
}
function Ku(e) {
  do {
    var t;
    if (((t = e.tag === 13) && ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)), t)) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Gu(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 && (n.alternate === null ? (n.tag = 17) : ((t = pt(-1, 1)), (t.tag = 2), Ot(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var eg = Pt.ReactCurrentOwner,
  ke = !1;
function ge(e, t, n, r) {
  t.child = e === null ? _d(t, null, n, r) : Xn(t, e.child, n, r);
}
function Qu(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return (
    Hn(t, i),
    (r = ga(e, t, n, r, o, i)),
    (n = ya()),
    e !== null && !ke
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~i), St(e, t, i))
      : (H && n && ia(t), (t.flags |= 1), ge(e, t, r, i), t.child)
  );
}
function Yu(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !Va(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), ih(e, t, o, r, i))
      : ((e = Ii(n.type, null, r, t, t.mode, i)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  if (((o = e.child), !(e.lanes & i))) {
    var s = o.memoizedProps;
    if (((n = n.compare), (n = n !== null ? n : zr), n(s, r) && e.ref === t.ref)) return St(e, t, i);
  }
  return (t.flags |= 1), (e = It(o, r)), (e.ref = t.ref), (e.return = t), (t.child = e);
}
function ih(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (zr(o, r) && e.ref === t.ref)
      if (((ke = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0)) e.flags & 131072 && (ke = !0);
      else return (t.lanes = e.lanes), St(e, t, i);
  }
  return cl(e, t, n, r, i);
}
function oh(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1)) (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), I(jn, De), (De |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
          (t.updateQueue = null),
          I(jn, De),
          (De |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        I(jn, De),
        (De |= r);
    }
  else o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n), I(jn, De), (De |= r);
  return ge(e, t, i, n), t.child;
}
function sh(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) && ((t.flags |= 512), (t.flags |= 2097152));
}
function cl(e, t, n, r, i) {
  var o = Te(n) ? dn : pe.current;
  return (
    (o = Qn(t, o)),
    Hn(t, i),
    (n = ga(e, t, n, r, o, i)),
    (r = ya()),
    e !== null && !ke
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~i), St(e, t, i))
      : (H && r && ia(t), (t.flags |= 1), ge(e, t, n, i), t.child)
  );
}
function Xu(e, t, n, r, i) {
  if (Te(n)) {
    var o = !0;
    qi(t);
  } else o = !1;
  if ((Hn(t, i), t.stateNode === null)) Oi(e, t), Rd(t, n, r), al(t, n, r, i), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      l = t.memoizedProps;
    s.props = l;
    var a = s.context,
      u = n.contextType;
    typeof u == "object" && u !== null ? (u = He(u)) : ((u = Te(n) ? dn : pe.current), (u = Qn(t, u)));
    var c = n.getDerivedStateFromProps,
      f = typeof c == "function" || typeof s.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function") ||
      ((l !== r || a !== u) && Bu(t, s, r, u)),
      (Et = !1);
    var d = t.memoizedState;
    (s.state = d),
      ro(t, r, s, i),
      (a = t.memoizedState),
      l !== r || d !== a || Ce.current || Et
        ? (typeof c == "function" && (ll(t, n, c, r), (a = t.memoizedState)),
          (l = Et || Iu(t, n, l, r, d, a, u))
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
      Ad(e, t),
      (l = t.memoizedProps),
      (u = t.type === t.elementType ? l : Ge(t.type, l)),
      (s.props = u),
      (f = t.pendingProps),
      (d = s.context),
      (a = n.contextType),
      typeof a == "object" && a !== null ? (a = He(a)) : ((a = Te(n) ? dn : pe.current), (a = Qn(t, a)));
    var g = n.getDerivedStateFromProps;
    (c = typeof g == "function" || typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function") ||
      ((l !== f || d !== a) && Bu(t, s, r, a)),
      (Et = !1),
      (d = t.memoizedState),
      (s.state = d),
      ro(t, r, s, i);
    var y = t.memoizedState;
    l !== f || d !== y || Ce.current || Et
      ? (typeof g == "function" && (ll(t, n, g, r), (y = t.memoizedState)),
        (u = Et || Iu(t, n, u, r, d, y, a) || !1)
          ? (c ||
              (typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, y, a),
              typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, y, a)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (l === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (l === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (s.props = r),
        (s.state = y),
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
  return fl(e, t, n, r, o, i);
}
function fl(e, t, n, r, i, o) {
  sh(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return i && ju(t, n, !1), St(e, t, o);
  (r = t.stateNode), (eg.current = t);
  var l = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s ? ((t.child = Xn(t, e.child, null, o)), (t.child = Xn(t, null, l, o))) : ge(e, t, l, o),
    (t.memoizedState = r.state),
    i && ju(t, n, !0),
    t.child
  );
}
function lh(e) {
  var t = e.stateNode;
  t.pendingContext ? Ru(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Ru(e, t.context, !1),
    da(e, t.containerInfo);
}
function Zu(e, t, n, r, i) {
  return Yn(), sa(i), (t.flags |= 256), ge(e, t, n, r), t.child;
}
var dl = { dehydrated: null, treeContext: null, retryLane: 0 };
function hl(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function ah(e, t, n) {
  var r = t.pendingProps,
    i = K.current,
    o = !1,
    s = (t.flags & 128) !== 0,
    l;
  if (
    ((l = s) || (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    l ? ((o = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (i |= 1),
    I(K, i & 1),
    e === null)
  )
    return (
      ol(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1 ? (e.data === "$!" ? (t.lanes = 8) : (t.lanes = 1073741824)) : (t.lanes = 1), null)
        : ((s = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && o !== null ? ((o.childLanes = 0), (o.pendingProps = s)) : (o = No(s, r, 0, null)),
              (e = fn(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = hl(n)),
              (t.memoizedState = dl),
              e)
            : Sa(t, s))
    );
  if (((i = e.memoizedState), i !== null && ((l = i.dehydrated), l !== null))) return tg(e, t, s, r, l, i, n);
  if (o) {
    (o = r.fallback), (s = t.mode), (i = e.child), (l = i.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== i
        ? ((r = t.child), (r.childLanes = 0), (r.pendingProps = a), (t.deletions = null))
        : ((r = It(i, a)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      l !== null ? (o = It(l, o)) : ((o = fn(o, s, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (s = e.child.memoizedState),
      (s = s === null ? hl(n) : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }),
      (o.memoizedState = s),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = dl),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = It(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null && ((n = t.deletions), n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Sa(e, t) {
  return (t = No({ mode: "visible", children: t }, e.mode, 0, null)), (t.return = e), (e.child = t);
}
function wi(e, t, n, r) {
  return (
    r !== null && sa(r),
    Xn(t, e.child, null, n),
    (e = Sa(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function tg(e, t, n, r, i, o, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = ps(Error(k(422)))), wi(e, t, s, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (i = t.mode),
        (r = No({ mode: "visible", children: r.children }, i, 0, null)),
        (o = fn(o, i, s, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && Xn(t, e.child, null, s),
        (t.child.memoizedState = hl(s)),
        (t.memoizedState = dl),
        o);
  if (!(t.mode & 1)) return wi(e, t, s, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (o = Error(k(419))), (r = ps(o, r, void 0)), wi(e, t, s, r);
  }
  if (((l = (s & e.childLanes) !== 0), ke || l)) {
    if (((r = le), r !== null)) {
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
        i !== 0 && i !== o.retryLane && ((o.retryLane = i), xt(e, i), Ze(r, e, i, -1));
    }
    return Ea(), (r = ps(Error(k(421)))), wi(e, t, s, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128), (t.child = e.child), (t = pg.bind(null, e)), (i._reactRetry = t), null)
    : ((e = o.treeContext),
      (Me = _t(i.nextSibling)),
      (Ae = t),
      (H = !0),
      (Ye = null),
      e !== null && ((ze[Ie++] = ft), (ze[Ie++] = dt), (ze[Ie++] = hn), (ft = e.id), (dt = e.overflow), (hn = t)),
      (t = Sa(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Ju(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), sl(e.return, t, n);
}
function ms(e, t, n, r, i) {
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
function uh(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if ((ge(e, t, r.children, n), (r = K.current), r & 2)) (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Ju(e, n, t);
        else if (e.tag === 19) Ju(e, n, t);
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
  if ((I(K, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate), e !== null && io(e) === null && (i = n), (n = n.sibling);
        (n = i),
          n === null ? ((i = t.child), (t.child = null)) : ((i = n.sibling), (n.sibling = null)),
          ms(t, !1, i, n, o);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && io(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        ms(t, !0, n, null, o);
        break;
      case "together":
        ms(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Oi(e, t) {
  !(t.mode & 1) && e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function St(e, t, n) {
  if ((e !== null && (t.dependencies = e.dependencies), (mn |= t.lanes), !(n & t.childLanes))) return null;
  if (e !== null && t.child !== e.child) throw Error(k(153));
  if (t.child !== null) {
    for (e = t.child, n = It(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
      (e = e.sibling), (n = n.sibling = It(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function ng(e, t, n) {
  switch (t.tag) {
    case 3:
      lh(t), Yn();
      break;
    case 5:
      Od(t);
      break;
    case 1:
      Te(t.type) && qi(t);
      break;
    case 4:
      da(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      I(to, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (I(K, K.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? ah(e, t, n)
          : (I(K, K.current & 1), (e = St(e, t, n)), e !== null ? e.sibling : null);
      I(K, K.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return uh(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null && ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        I(K, K.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), oh(e, t, n);
  }
  return St(e, t, n);
}
var ch, pl, fh, dh;
ch = function (e, t) {
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
pl = function () {};
fh = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), an(st.current);
    var o = null;
    switch (n) {
      case "input":
        (i = Os(e, i)), (r = Os(e, r)), (o = []);
        break;
      case "select":
        (i = X({}, i, { value: void 0 })), (r = X({}, r, { value: void 0 })), (o = []);
        break;
      case "textarea":
        (i = Is(e, i)), (r = Is(e, r)), (o = []);
        break;
      default:
        typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Zi);
    }
    Us(n, r);
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
            (Ar.hasOwnProperty(u) ? o || (o = []) : (o = o || []).push(u, null));
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
              (Ar.hasOwnProperty(u)
                ? (a != null && u === "onScroll" && B("scroll", e), o || l === a || (o = []))
                : (o = o || []).push(u, a));
    }
    n && (o = o || []).push("style", n);
    var u = o;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
dh = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function ur(e, t) {
  if (!H)
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
function de(e) {
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
function rg(e, t, n) {
  var r = t.pendingProps;
  switch ((oa(t), t.tag)) {
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
      return de(t), null;
    case 1:
      return Te(t.type) && Ji(), de(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Zn(),
        U(Ce),
        U(pe),
        pa(),
        r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (xi(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Ye !== null && (Pl(Ye), (Ye = null)))),
        pl(e, t),
        de(t),
        null
      );
    case 5:
      ha(t);
      var i = an(Hr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        fh(e, t, n, r, i), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(k(166));
          return de(t), null;
        }
        if (((e = an(st.current)), xi(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[rt] = t), (r[Ur] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              B("cancel", r), B("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              B("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < gr.length; i++) B(gr[i], r);
              break;
            case "source":
              B("error", r);
              break;
            case "img":
            case "image":
            case "link":
              B("error", r), B("load", r);
              break;
            case "details":
              B("toggle", r);
              break;
            case "input":
              su(r, o), B("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }), B("invalid", r);
              break;
            case "textarea":
              au(r, o), B("invalid", r);
          }
          Us(n, o), (i = null);
          for (var s in o)
            if (o.hasOwnProperty(s)) {
              var l = o[s];
              s === "children"
                ? typeof l == "string"
                  ? r.textContent !== l &&
                    (o.suppressHydrationWarning !== !0 && vi(r.textContent, l, e), (i = ["children", l]))
                  : typeof l == "number" &&
                    r.textContent !== "" + l &&
                    (o.suppressHydrationWarning !== !0 && vi(r.textContent, l, e), (i = ["children", "" + l]))
                : Ar.hasOwnProperty(s) && l != null && s === "onScroll" && B("scroll", r);
            }
          switch (n) {
            case "input":
              ci(r), lu(r, o, !0);
              break;
            case "textarea":
              ci(r), uu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Zi);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = If(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")), (e.innerHTML = "<script></script>"), (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = s.createElement(n, { is: r.is }))
                : ((e = s.createElement(n)),
                  n === "select" && ((s = e), r.multiple ? (s.multiple = !0) : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[rt] = t),
            (e[Ur] = r),
            ch(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = $s(n, r)), n)) {
              case "dialog":
                B("cancel", e), B("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                B("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < gr.length; i++) B(gr[i], e);
                i = r;
                break;
              case "source":
                B("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                B("error", e), B("load", e), (i = r);
                break;
              case "details":
                B("toggle", e), (i = r);
                break;
              case "input":
                su(e, r), (i = Os(e, r)), B("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }), (i = X({}, r, { value: void 0 })), B("invalid", e);
                break;
              case "textarea":
                au(e, r), (i = Is(e, r)), B("invalid", e);
                break;
              default:
                i = r;
            }
            Us(n, i), (l = i);
            for (o in l)
              if (l.hasOwnProperty(o)) {
                var a = l[o];
                o === "style"
                  ? $f(e, a)
                  : o === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && Bf(e, a))
                  : o === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && Nr(e, a)
                    : typeof a == "number" && Nr(e, "" + a)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (Ar.hasOwnProperty(o)
                      ? a != null && o === "onScroll" && B("scroll", e)
                      : a != null && Wl(e, o, a, s));
              }
            switch (n) {
              case "input":
                ci(e), lu(e, r, !1);
                break;
              case "textarea":
                ci(e), uu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Ht(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? In(e, !!r.multiple, o, !1)
                    : r.defaultValue != null && In(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = Zi);
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
      return de(t), null;
    case 6:
      if (e && t.stateNode != null) dh(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(k(166));
        if (((n = an(Hr.current)), an(st.current), xi(t))) {
          if (
            ((r = t.stateNode), (n = t.memoizedProps), (r[rt] = t), (o = r.nodeValue !== n) && ((e = Ae), e !== null))
          )
            switch (e.tag) {
              case 3:
                vi(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && vi(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)), (r[rt] = t), (t.stateNode = r);
      }
      return de(t), null;
    case 13:
      if (
        (U(K), (r = t.memoizedState), e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (H && Me !== null && t.mode & 1 && !(t.flags & 128)) Dd(), Yn(), (t.flags |= 98560), (o = !1);
        else if (((o = xi(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(k(318));
            if (((o = t.memoizedState), (o = o !== null ? o.dehydrated : null), !o)) throw Error(k(317));
            o[rt] = t;
          } else Yn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          de(t), (o = !1);
        } else Ye !== null && (Pl(Ye), (Ye = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192), t.mode & 1 && (e === null || K.current & 1 ? oe === 0 && (oe = 3) : Ea())),
          t.updateQueue !== null && (t.flags |= 4),
          de(t),
          null);
    case 4:
      return Zn(), pl(e, t), e === null && Ir(t.stateNode.containerInfo), de(t), null;
    case 10:
      return ua(t.type._context), de(t), null;
    case 17:
      return Te(t.type) && Ji(), de(t), null;
    case 19:
      if ((U(K), (o = t.memoizedState), o === null)) return de(t), null;
      if (((r = (t.flags & 128) !== 0), (s = o.rendering), s === null))
        if (r) ur(o, !1);
        else {
          if (oe !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = io(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    ur(o, !1),
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
                return I(K, (K.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null && ee() > qn && ((t.flags |= 128), (r = !0), ur(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = io(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              ur(o, !0),
              o.tail === null && o.tailMode === "hidden" && !s.alternate && !H)
            )
              return de(t), null;
          } else
            2 * ee() - o.renderingStartTime > qn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), ur(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = o.last), n !== null ? (n.sibling = s) : (t.child = s), (o.last = s));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = ee()),
          (t.sibling = null),
          (n = K.current),
          I(K, r ? (n & 1) | 2 : n & 1),
          t)
        : (de(t), null);
    case 22:
    case 23:
      return (
        Ta(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1 ? De & 1073741824 && (de(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : de(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(k(156, t.tag));
}
function ig(e, t) {
  switch ((oa(t), t.tag)) {
    case 1:
      return Te(t.type) && Ji(), (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
    case 3:
      return (
        Zn(), U(Ce), U(pe), pa(), (e = t.flags), e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return ha(t), null;
    case 13:
      if ((U(K), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(k(340));
        Yn();
      }
      return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
    case 19:
      return U(K), null;
    case 4:
      return Zn(), null;
    case 10:
      return ua(t.type._context), null;
    case 22:
    case 23:
      return Ta(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Pi = !1,
  he = !1,
  og = typeof WeakSet == "function" ? WeakSet : Set,
  L = null;
function Rn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        J(e, t, r);
      }
    else n.current = null;
}
function ml(e, t, n) {
  try {
    n();
  } catch (r) {
    J(e, t, r);
  }
}
var qu = !1;
function sg(e, t) {
  if (((qs = Qi), (e = gd()), ra(e))) {
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
              var g;
              f !== n || (i !== 0 && f.nodeType !== 3) || (l = s + i),
                f !== o || (r !== 0 && f.nodeType !== 3) || (a = s + r),
                f.nodeType === 3 && (s += f.nodeValue.length),
                (g = f.firstChild) !== null;

            )
              (d = f), (f = g);
            for (;;) {
              if (f === e) break t;
              if ((d === n && ++u === i && (l = s), d === o && ++c === r && (a = s), (g = f.nextSibling) !== null))
                break;
              (f = d), (d = f.parentNode);
            }
            f = g;
          }
          n = l === -1 || a === -1 ? null : { start: l, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (bs = { focusedElem: e, selectionRange: n }, Qi = !1, L = t; L !== null; )
    if (((t = L), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)) (e.return = t), (L = e);
    else
      for (; L !== null; ) {
        t = L;
        try {
          var y = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var x = y.memoizedProps,
                    E = y.memoizedState,
                    m = t.stateNode,
                    h = m.getSnapshotBeforeUpdate(t.elementType === t.type ? x : Ge(t.type, x), E);
                  m.__reactInternalSnapshotBeforeUpdate = h;
                }
                break;
              case 3:
                var p = t.stateNode.containerInfo;
                p.nodeType === 1
                  ? (p.textContent = "")
                  : p.nodeType === 9 && p.documentElement && p.removeChild(p.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(k(163));
            }
        } catch (v) {
          J(t, t.return, v);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (L = e);
          break;
        }
        L = t.return;
      }
  return (y = qu), (qu = !1), y;
}
function Cr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        (i.destroy = void 0), o !== void 0 && ml(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Mo(e, t) {
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
function gl(e) {
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
function hh(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), hh(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode), t !== null && (delete t[rt], delete t[Ur], delete t[nl], delete t[$0], delete t[H0])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function ph(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function bu(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || ph(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function yl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8 ? ((t = n.parentNode), t.insertBefore(e, n)) : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Zi));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (yl(e, t, n), e = e.sibling; e !== null; ) yl(e, t, n), (e = e.sibling);
}
function vl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (vl(e, t, n), e = e.sibling; e !== null; ) vl(e, t, n), (e = e.sibling);
}
var ae = null,
  Qe = !1;
function kt(e, t, n) {
  for (n = n.child; n !== null; ) mh(e, t, n), (n = n.sibling);
}
function mh(e, t, n) {
  if (ot && typeof ot.onCommitFiberUnmount == "function")
    try {
      ot.onCommitFiberUnmount(Po, n);
    } catch {}
  switch (n.tag) {
    case 5:
      he || Rn(n, t);
    case 6:
      var r = ae,
        i = Qe;
      (ae = null),
        kt(e, t, n),
        (ae = r),
        (Qe = i),
        ae !== null &&
          (Qe
            ? ((e = ae), (n = n.stateNode), e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ae.removeChild(n.stateNode));
      break;
    case 18:
      ae !== null &&
        (Qe
          ? ((e = ae), (n = n.stateNode), e.nodeType === 8 ? as(e.parentNode, n) : e.nodeType === 1 && as(e, n), Or(e))
          : as(ae, n.stateNode));
      break;
    case 4:
      (r = ae), (i = Qe), (ae = n.stateNode.containerInfo), (Qe = !0), kt(e, t, n), (ae = r), (Qe = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!he && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
        i = r = r.next;
        do {
          var o = i,
            s = o.destroy;
          (o = o.tag), s !== void 0 && (o & 2 || o & 4) && ml(n, t, s), (i = i.next);
        } while (i !== r);
      }
      kt(e, t, n);
      break;
    case 1:
      if (!he && (Rn(n, t), (r = n.stateNode), typeof r.componentWillUnmount == "function"))
        try {
          (r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount();
        } catch (l) {
          J(n, t, l);
        }
      kt(e, t, n);
      break;
    case 21:
      kt(e, t, n);
      break;
    case 22:
      n.mode & 1 ? ((he = (r = he) || n.memoizedState !== null), kt(e, t, n), (he = r)) : kt(e, t, n);
      break;
    default:
      kt(e, t, n);
  }
}
function ec(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new og()),
      t.forEach(function (r) {
        var i = mg.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function Ke(e, t) {
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
              (ae = l.stateNode), (Qe = !1);
              break e;
            case 3:
              (ae = l.stateNode.containerInfo), (Qe = !0);
              break e;
            case 4:
              (ae = l.stateNode.containerInfo), (Qe = !0);
              break e;
          }
          l = l.return;
        }
        if (ae === null) throw Error(k(160));
        mh(o, s, i), (ae = null), (Qe = !1);
        var a = i.alternate;
        a !== null && (a.return = null), (i.return = null);
      } catch (u) {
        J(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) gh(t, e), (t = t.sibling);
}
function gh(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ke(t, e), et(e), r & 4)) {
        try {
          Cr(3, e, e.return), Mo(3, e);
        } catch (x) {
          J(e, e.return, x);
        }
        try {
          Cr(5, e, e.return);
        } catch (x) {
          J(e, e.return, x);
        }
      }
      break;
    case 1:
      Ke(t, e), et(e), r & 512 && n !== null && Rn(n, n.return);
      break;
    case 5:
      if ((Ke(t, e), et(e), r & 512 && n !== null && Rn(n, n.return), e.flags & 32)) {
        var i = e.stateNode;
        try {
          Nr(i, "");
        } catch (x) {
          J(e, e.return, x);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          s = n !== null ? n.memoizedProps : o,
          l = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            l === "input" && o.type === "radio" && o.name != null && Ff(i, o), $s(l, s);
            var u = $s(l, o);
            for (s = 0; s < a.length; s += 2) {
              var c = a[s],
                f = a[s + 1];
              c === "style"
                ? $f(i, f)
                : c === "dangerouslySetInnerHTML"
                ? Bf(i, f)
                : c === "children"
                ? Nr(i, f)
                : Wl(i, c, f, u);
            }
            switch (l) {
              case "input":
                Fs(i, o);
                break;
              case "textarea":
                zf(i, o);
                break;
              case "select":
                var d = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var g = o.value;
                g != null
                  ? In(i, !!o.multiple, g, !1)
                  : d !== !!o.multiple &&
                    (o.defaultValue != null
                      ? In(i, !!o.multiple, o.defaultValue, !0)
                      : In(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[Ur] = o;
          } catch (x) {
            J(e, e.return, x);
          }
      }
      break;
    case 6:
      if ((Ke(t, e), et(e), r & 4)) {
        if (e.stateNode === null) throw Error(k(162));
        (i = e.stateNode), (o = e.memoizedProps);
        try {
          i.nodeValue = o;
        } catch (x) {
          J(e, e.return, x);
        }
      }
      break;
    case 3:
      if ((Ke(t, e), et(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
        try {
          Or(t.containerInfo);
        } catch (x) {
          J(e, e.return, x);
        }
      break;
    case 4:
      Ke(t, e), et(e);
      break;
    case 13:
      Ke(t, e),
        et(e),
        (i = e.child),
        i.flags & 8192 &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o || (i.alternate !== null && i.alternate.memoizedState !== null) || (ka = ee())),
        r & 4 && ec(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((he = (u = he) || c), Ke(t, e), (he = u)) : Ke(t, e),
        et(e),
        r & 8192)
      ) {
        if (((u = e.memoizedState !== null), (e.stateNode.isHidden = u) && !c && e.mode & 1))
          for (L = e, c = e.child; c !== null; ) {
            for (f = L = c; L !== null; ) {
              switch (((d = L), (g = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Cr(4, d, d.return);
                  break;
                case 1:
                  Rn(d, d.return);
                  var y = d.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    (r = d), (n = d.return);
                    try {
                      (t = r), (y.props = t.memoizedProps), (y.state = t.memoizedState), y.componentWillUnmount();
                    } catch (x) {
                      J(r, n, x);
                    }
                  }
                  break;
                case 5:
                  Rn(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    nc(f);
                    continue;
                  }
              }
              g !== null ? ((g.return = d), (L = g)) : nc(f);
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
                      (l.style.display = Uf("display", s)));
              } catch (x) {
                J(e, e.return, x);
              }
            }
          } else if (f.tag === 6) {
            if (c === null)
              try {
                f.stateNode.nodeValue = u ? "" : f.memoizedProps;
              } catch (x) {
                J(e, e.return, x);
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
      Ke(t, e), et(e), r & 4 && ec(e);
      break;
    case 21:
      break;
    default:
      Ke(t, e), et(e);
  }
}
function et(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (ph(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(k(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Nr(i, ""), (r.flags &= -33));
          var o = bu(e);
          vl(e, o, i);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            l = bu(e);
          yl(e, l, s);
          break;
        default:
          throw Error(k(161));
      }
    } catch (a) {
      J(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function lg(e, t, n) {
  (L = e), yh(e);
}
function yh(e, t, n) {
  for (var r = (e.mode & 1) !== 0; L !== null; ) {
    var i = L,
      o = i.child;
    if (i.tag === 22 && r) {
      var s = i.memoizedState !== null || Pi;
      if (!s) {
        var l = i.alternate,
          a = (l !== null && l.memoizedState !== null) || he;
        l = Pi;
        var u = he;
        if (((Pi = s), (he = a) && !u))
          for (L = i; L !== null; )
            (s = L),
              (a = s.child),
              s.tag === 22 && s.memoizedState !== null ? rc(i) : a !== null ? ((a.return = s), (L = a)) : rc(i);
        for (; o !== null; ) (L = o), yh(o), (o = o.sibling);
        (L = i), (Pi = l), (he = u);
      }
      tc(e);
    } else i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (L = o)) : tc(e);
  }
}
function tc(e) {
  for (; L !== null; ) {
    var t = L;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              he || Mo(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !he)
                if (n === null) r.componentDidMount();
                else {
                  var i = t.elementType === t.type ? n.memoizedProps : Ge(t.type, n.memoizedProps);
                  r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var o = t.updateQueue;
              o !== null && zu(t, o, r);
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
                zu(t, s, n);
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
                    f !== null && Or(f);
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
              throw Error(k(163));
          }
        he || (t.flags & 512 && gl(t));
      } catch (d) {
        J(t, t.return, d);
      }
    }
    if (t === e) {
      L = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (L = n);
      break;
    }
    L = t.return;
  }
}
function nc(e) {
  for (; L !== null; ) {
    var t = L;
    if (t === e) {
      L = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (L = n);
      break;
    }
    L = t.return;
  }
}
function rc(e) {
  for (; L !== null; ) {
    var t = L;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Mo(4, t);
          } catch (a) {
            J(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              J(t, i, a);
            }
          }
          var o = t.return;
          try {
            gl(t);
          } catch (a) {
            J(t, o, a);
          }
          break;
        case 5:
          var s = t.return;
          try {
            gl(t);
          } catch (a) {
            J(t, s, a);
          }
      }
    } catch (a) {
      J(t, t.return, a);
    }
    if (t === e) {
      L = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (L = l);
      break;
    }
    L = t.return;
  }
}
var ag = Math.ceil,
  lo = Pt.ReactCurrentDispatcher,
  wa = Pt.ReactCurrentOwner,
  $e = Pt.ReactCurrentBatchConfig,
  F = 0,
  le = null,
  ne = null,
  ue = 0,
  De = 0,
  jn = Yt(0),
  oe = 0,
  Qr = null,
  mn = 0,
  Ao = 0,
  Pa = 0,
  Tr = null,
  Pe = null,
  ka = 0,
  qn = 1 / 0,
  ut = null,
  ao = !1,
  xl = null,
  Ft = null,
  ki = !1,
  At = null,
  uo = 0,
  Er = 0,
  Sl = null,
  Fi = -1,
  zi = 0;
function ye() {
  return F & 6 ? ee() : Fi !== -1 ? Fi : (Fi = ee());
}
function zt(e) {
  return e.mode & 1
    ? F & 2 && ue !== 0
      ? ue & -ue
      : K0.transition !== null
      ? (zi === 0 && (zi = ed()), zi)
      : ((e = z), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : ld(e.type))), e)
    : 1;
}
function Ze(e, t, n, r) {
  if (50 < Er) throw ((Er = 0), (Sl = null), Error(k(185)));
  br(e, n, r),
    (!(F & 2) || e !== le) &&
      (e === le && (!(F & 2) && (Ao |= n), oe === 4 && Dt(e, ue)),
      Ee(e, r),
      n === 1 && F === 0 && !(t.mode & 1) && ((qn = ee() + 500), Vo && Xt()));
}
function Ee(e, t) {
  var n = e.callbackNode;
  Km(e, t);
  var r = Gi(e, e === le ? ue : 0);
  if (r === 0) n !== null && du(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && du(n), t === 1))
      e.tag === 0 ? W0(ic.bind(null, e)) : Ed(ic.bind(null, e)),
        B0(function () {
          !(F & 6) && Xt();
        }),
        (n = null);
    else {
      switch (td(r)) {
        case 1:
          n = Xl;
          break;
        case 4:
          n = qf;
          break;
        case 16:
          n = Ki;
          break;
        case 536870912:
          n = bf;
          break;
        default:
          n = Ki;
      }
      n = Th(n, vh.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function vh(e, t) {
  if (((Fi = -1), (zi = 0), F & 6)) throw Error(k(327));
  var n = e.callbackNode;
  if (Wn() && e.callbackNode !== n) return null;
  var r = Gi(e, e === le ? ue : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = co(e, r);
  else {
    t = r;
    var i = F;
    F |= 2;
    var o = Sh();
    (le !== e || ue !== t) && ((ut = null), (qn = ee() + 500), cn(e, t));
    do
      try {
        fg();
        break;
      } catch (l) {
        xh(e, l);
      }
    while (1);
    aa(), (lo.current = o), (F = i), ne !== null ? (t = 0) : ((le = null), (ue = 0), (t = oe));
  }
  if (t !== 0) {
    if ((t === 2 && ((i = Qs(e)), i !== 0 && ((r = i), (t = wl(e, i)))), t === 1))
      throw ((n = Qr), cn(e, 0), Dt(e, r), Ee(e, ee()), n);
    if (t === 6) Dt(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !ug(i) &&
          ((t = co(e, r)), t === 2 && ((o = Qs(e)), o !== 0 && ((r = o), (t = wl(e, o)))), t === 1))
      )
        throw ((n = Qr), cn(e, 0), Dt(e, r), Ee(e, ee()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(k(345));
        case 2:
          nn(e, Pe, ut);
          break;
        case 3:
          if ((Dt(e, r), (r & 130023424) === r && ((t = ka + 500 - ee()), 10 < t))) {
            if (Gi(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              ye(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = tl(nn.bind(null, e, Pe, ut), t);
            break;
          }
          nn(e, Pe, ut);
          break;
        case 4:
          if ((Dt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var s = 31 - Xe(r);
            (o = 1 << s), (s = t[s]), s > i && (i = s), (r &= ~o);
          }
          if (
            ((r = i),
            (r = ee() - r),
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
                : 1960 * ag(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = tl(nn.bind(null, e, Pe, ut), r);
            break;
          }
          nn(e, Pe, ut);
          break;
        case 5:
          nn(e, Pe, ut);
          break;
        default:
          throw Error(k(329));
      }
    }
  }
  return Ee(e, ee()), e.callbackNode === n ? vh.bind(null, e) : null;
}
function wl(e, t) {
  var n = Tr;
  return (
    e.current.memoizedState.isDehydrated && (cn(e, t).flags |= 256),
    (e = co(e, t)),
    e !== 2 && ((t = Pe), (Pe = n), t !== null && Pl(t)),
    e
  );
}
function Pl(e) {
  Pe === null ? (Pe = e) : Pe.push.apply(Pe, e);
}
function ug(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!Je(o(), i)) return !1;
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
function Dt(e, t) {
  for (t &= ~Pa, t &= ~Ao, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Xe(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function ic(e) {
  if (F & 6) throw Error(k(327));
  Wn();
  var t = Gi(e, 0);
  if (!(t & 1)) return Ee(e, ee()), null;
  var n = co(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Qs(e);
    r !== 0 && ((t = r), (n = wl(e, r)));
  }
  if (n === 1) throw ((n = Qr), cn(e, 0), Dt(e, t), Ee(e, ee()), n);
  if (n === 6) throw Error(k(345));
  return (e.finishedWork = e.current.alternate), (e.finishedLanes = t), nn(e, Pe, ut), Ee(e, ee()), null;
}
function Ca(e, t) {
  var n = F;
  F |= 1;
  try {
    return e(t);
  } finally {
    (F = n), F === 0 && ((qn = ee() + 500), Vo && Xt());
  }
}
function gn(e) {
  At !== null && At.tag === 0 && !(F & 6) && Wn();
  var t = F;
  F |= 1;
  var n = $e.transition,
    r = z;
  try {
    if ((($e.transition = null), (z = 1), e)) return e();
  } finally {
    (z = r), ($e.transition = n), (F = t), !(F & 6) && Xt();
  }
}
function Ta() {
  (De = jn.current), U(jn);
}
function cn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), I0(n)), ne !== null))
    for (n = ne.return; n !== null; ) {
      var r = n;
      switch ((oa(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Ji();
          break;
        case 3:
          Zn(), U(Ce), U(pe), pa();
          break;
        case 5:
          ha(r);
          break;
        case 4:
          Zn();
          break;
        case 13:
          U(K);
          break;
        case 19:
          U(K);
          break;
        case 10:
          ua(r.type._context);
          break;
        case 22:
        case 23:
          Ta();
      }
      n = n.return;
    }
  if (
    ((le = e),
    (ne = e = It(e.current, null)),
    (ue = De = t),
    (oe = 0),
    (Qr = null),
    (Pa = Ao = mn = 0),
    (Pe = Tr = null),
    ln !== null)
  ) {
    for (t = 0; t < ln.length; t++)
      if (((n = ln[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          o = n.pending;
        if (o !== null) {
          var s = o.next;
          (o.next = i), (r.next = s);
        }
        n.pending = r;
      }
    ln = null;
  }
  return e;
}
function xh(e, t) {
  do {
    var n = ne;
    try {
      if ((aa(), (ji.current = so), oo)) {
        for (var r = Y.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        oo = !1;
      }
      if (((pn = 0), (se = re = Y = null), (kr = !1), (Wr = 0), (wa.current = null), n === null || n.return === null)) {
        (oe = 1), (Qr = t), (ne = null);
        break;
      }
      e: {
        var o = e,
          s = n.return,
          l = n,
          a = t;
        if (((t = ue), (l.flags |= 32768), a !== null && typeof a == "object" && typeof a.then == "function")) {
          var u = a,
            c = l,
            f = c.tag;
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var d = c.alternate;
            d
              ? ((c.updateQueue = d.updateQueue), (c.memoizedState = d.memoizedState), (c.lanes = d.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var g = Ku(s);
          if (g !== null) {
            (g.flags &= -257), Gu(g, s, l, o, t), g.mode & 1 && Wu(o, u, t), (t = g), (a = u);
            var y = t.updateQueue;
            if (y === null) {
              var x = new Set();
              x.add(a), (t.updateQueue = x);
            } else y.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              Wu(o, u, t), Ea();
              break e;
            }
            a = Error(k(426));
          }
        } else if (H && l.mode & 1) {
          var E = Ku(s);
          if (E !== null) {
            !(E.flags & 65536) && (E.flags |= 256), Gu(E, s, l, o, t), sa(Jn(a, l));
            break e;
          }
        }
        (o = a = Jn(a, l)), oe !== 4 && (oe = 2), Tr === null ? (Tr = [o]) : Tr.push(o), (o = s);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var m = nh(o, a, t);
              Fu(o, m);
              break e;
            case 1:
              l = a;
              var h = o.type,
                p = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof h.getDerivedStateFromError == "function" ||
                  (p !== null && typeof p.componentDidCatch == "function" && (Ft === null || !Ft.has(p))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var v = rh(o, l, t);
                Fu(o, v);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Ph(n);
    } catch (w) {
      (t = w), ne === n && n !== null && (ne = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function Sh() {
  var e = lo.current;
  return (lo.current = so), e === null ? so : e;
}
function Ea() {
  (oe === 0 || oe === 3 || oe === 2) && (oe = 4), le === null || (!(mn & 268435455) && !(Ao & 268435455)) || Dt(le, ue);
}
function co(e, t) {
  var n = F;
  F |= 2;
  var r = Sh();
  (le !== e || ue !== t) && ((ut = null), cn(e, t));
  do
    try {
      cg();
      break;
    } catch (i) {
      xh(e, i);
    }
  while (1);
  if ((aa(), (F = n), (lo.current = r), ne !== null)) throw Error(k(261));
  return (le = null), (ue = 0), oe;
}
function cg() {
  for (; ne !== null; ) wh(ne);
}
function fg() {
  for (; ne !== null && !Om(); ) wh(ne);
}
function wh(e) {
  var t = Ch(e.alternate, e, De);
  (e.memoizedProps = e.pendingProps), t === null ? Ph(e) : (ne = t), (wa.current = null);
}
function Ph(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = ig(n, t)), n !== null)) {
        (n.flags &= 32767), (ne = n);
        return;
      }
      if (e !== null) (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (oe = 6), (ne = null);
        return;
      }
    } else if (((n = rg(n, t, De)), n !== null)) {
      ne = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ne = t;
      return;
    }
    ne = t = e;
  } while (t !== null);
  oe === 0 && (oe = 5);
}
function nn(e, t, n) {
  var r = z,
    i = $e.transition;
  try {
    ($e.transition = null), (z = 1), dg(e, t, n, r);
  } finally {
    ($e.transition = i), (z = r);
  }
  return null;
}
function dg(e, t, n, r) {
  do Wn();
  while (At !== null);
  if (F & 6) throw Error(k(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(k(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (Gm(e, o),
    e === le && ((ne = le = null), (ue = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      ki ||
      ((ki = !0),
      Th(Ki, function () {
        return Wn(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = $e.transition), ($e.transition = null);
    var s = z;
    z = 1;
    var l = F;
    (F |= 4),
      (wa.current = null),
      sg(e, n),
      gh(n, e),
      N0(bs),
      (Qi = !!qs),
      (bs = qs = null),
      (e.current = n),
      lg(n),
      Fm(),
      (F = l),
      (z = s),
      ($e.transition = o);
  } else e.current = n;
  if (
    (ki && ((ki = !1), (At = e), (uo = i)),
    (o = e.pendingLanes),
    o === 0 && (Ft = null),
    Bm(n.stateNode),
    Ee(e, ee()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (ao) throw ((ao = !1), (e = xl), (xl = null), e);
  return (
    uo & 1 && e.tag !== 0 && Wn(),
    (o = e.pendingLanes),
    o & 1 ? (e === Sl ? Er++ : ((Er = 0), (Sl = e))) : (Er = 0),
    Xt(),
    null
  );
}
function Wn() {
  if (At !== null) {
    var e = td(uo),
      t = $e.transition,
      n = z;
    try {
      if ((($e.transition = null), (z = 16 > e ? 16 : e), At === null)) var r = !1;
      else {
        if (((e = At), (At = null), (uo = 0), F & 6)) throw Error(k(331));
        var i = F;
        for (F |= 4, L = e.current; L !== null; ) {
          var o = L,
            s = o.child;
          if (L.flags & 16) {
            var l = o.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var u = l[a];
                for (L = u; L !== null; ) {
                  var c = L;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Cr(8, c, o);
                  }
                  var f = c.child;
                  if (f !== null) (f.return = c), (L = f);
                  else
                    for (; L !== null; ) {
                      c = L;
                      var d = c.sibling,
                        g = c.return;
                      if ((hh(c), c === u)) {
                        L = null;
                        break;
                      }
                      if (d !== null) {
                        (d.return = g), (L = d);
                        break;
                      }
                      L = g;
                    }
                }
              }
              var y = o.alternate;
              if (y !== null) {
                var x = y.child;
                if (x !== null) {
                  y.child = null;
                  do {
                    var E = x.sibling;
                    (x.sibling = null), (x = E);
                  } while (x !== null);
                }
              }
              L = o;
            }
          }
          if (o.subtreeFlags & 2064 && s !== null) (s.return = o), (L = s);
          else
            e: for (; L !== null; ) {
              if (((o = L), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Cr(9, o, o.return);
                }
              var m = o.sibling;
              if (m !== null) {
                (m.return = o.return), (L = m);
                break e;
              }
              L = o.return;
            }
        }
        var h = e.current;
        for (L = h; L !== null; ) {
          s = L;
          var p = s.child;
          if (s.subtreeFlags & 2064 && p !== null) (p.return = s), (L = p);
          else
            e: for (s = h; L !== null; ) {
              if (((l = L), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Mo(9, l);
                  }
                } catch (w) {
                  J(l, l.return, w);
                }
              if (l === s) {
                L = null;
                break e;
              }
              var v = l.sibling;
              if (v !== null) {
                (v.return = l.return), (L = v);
                break e;
              }
              L = l.return;
            }
        }
        if (((F = i), Xt(), ot && typeof ot.onPostCommitFiberRoot == "function"))
          try {
            ot.onPostCommitFiberRoot(Po, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (z = n), ($e.transition = t);
    }
  }
  return !1;
}
function oc(e, t, n) {
  (t = Jn(n, t)), (t = nh(e, t, 1)), (e = Ot(e, t, 1)), (t = ye()), e !== null && (br(e, 1, t), Ee(e, t));
}
function J(e, t, n) {
  if (e.tag === 3) oc(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        oc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" && (Ft === null || !Ft.has(r)))
        ) {
          (e = Jn(n, e)), (e = rh(t, e, 1)), (t = Ot(t, e, 1)), (e = ye()), t !== null && (br(t, 1, e), Ee(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function hg(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = ye()),
    (e.pingedLanes |= e.suspendedLanes & n),
    le === e &&
      (ue & n) === n &&
      (oe === 4 || (oe === 3 && (ue & 130023424) === ue && 500 > ee() - ka) ? cn(e, 0) : (Pa |= n)),
    Ee(e, t);
}
function kh(e, t) {
  t === 0 && (e.mode & 1 ? ((t = hi), (hi <<= 1), !(hi & 130023424) && (hi = 4194304)) : (t = 1));
  var n = ye();
  (e = xt(e, t)), e !== null && (br(e, t, n), Ee(e, n));
}
function pg(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), kh(e, n);
}
function mg(e, t) {
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
      throw Error(k(314));
  }
  r !== null && r.delete(t), kh(e, n);
}
var Ch;
Ch = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ce.current) ke = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (ke = !1), ng(e, t, n);
      ke = !!(e.flags & 131072);
    }
  else (ke = !1), H && t.flags & 1048576 && Vd(t, eo, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Oi(e, t), (e = t.pendingProps);
      var i = Qn(t, pe.current);
      Hn(t, n), (i = ga(null, t, r, e, i, n));
      var o = ya();
      return (
        (t.flags |= 1),
        typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Te(r) ? ((o = !0), qi(t)) : (o = !1),
            (t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null),
            fa(t),
            (i.updater = Lo),
            (t.stateNode = i),
            (i._reactInternals = t),
            al(t, r, e, n),
            (t = fl(null, t, r, !0, o, n)))
          : ((t.tag = 0), H && o && ia(t), ge(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Oi(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = yg(r)),
          (e = Ge(r, e)),
          i)
        ) {
          case 0:
            t = cl(null, t, r, e, n);
            break e;
          case 1:
            t = Xu(null, t, r, e, n);
            break e;
          case 11:
            t = Qu(null, t, r, e, n);
            break e;
          case 14:
            t = Yu(null, t, r, Ge(r.type, e), n);
            break e;
        }
        throw Error(k(306, r, ""));
      }
      return t;
    case 0:
      return (r = t.type), (i = t.pendingProps), (i = t.elementType === r ? i : Ge(r, i)), cl(e, t, r, i, n);
    case 1:
      return (r = t.type), (i = t.pendingProps), (i = t.elementType === r ? i : Ge(r, i)), Xu(e, t, r, i, n);
    case 3:
      e: {
        if ((lh(t), e === null)) throw Error(k(387));
        (r = t.pendingProps), (o = t.memoizedState), (i = o.element), Ad(e, t), ro(t, r, null, n);
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
            (i = Jn(Error(k(423)), t)), (t = Zu(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = Jn(Error(k(424)), t)), (t = Zu(e, t, r, n, i));
            break e;
          } else
            for (
              Me = _t(t.stateNode.containerInfo.firstChild),
                Ae = t,
                H = !0,
                Ye = null,
                n = _d(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Yn(), r === i)) {
            t = St(e, t, n);
            break e;
          }
          ge(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Od(t),
        e === null && ol(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (s = i.children),
        el(r, i) ? (s = null) : o !== null && el(r, o) && (t.flags |= 32),
        sh(e, t),
        ge(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && ol(t), null;
    case 13:
      return ah(e, t, n);
    case 4:
      return (
        da(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Xn(t, null, r, n)) : ge(e, t, r, n),
        t.child
      );
    case 11:
      return (r = t.type), (i = t.pendingProps), (i = t.elementType === r ? i : Ge(r, i)), Qu(e, t, r, i, n);
    case 7:
      return ge(e, t, t.pendingProps, n), t.child;
    case 8:
      return ge(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ge(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (s = i.value),
          I(to, r._currentValue),
          (r._currentValue = s),
          o !== null)
        )
          if (Je(o.value, s)) {
            if (o.children === i.children && !Ce.current) {
              t = St(e, t, n);
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
                      (a = pt(-1, n & -n)), (a.tag = 2);
                      var u = o.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null ? (a.next = a) : ((a.next = c.next), (c.next = a)), (u.pending = a);
                      }
                    }
                    (o.lanes |= n), (a = o.alternate), a !== null && (a.lanes |= n), sl(o.return, n, t), (l.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (o.tag === 10) s = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((s = o.return), s === null)) throw Error(k(341));
                (s.lanes |= n), (l = s.alternate), l !== null && (l.lanes |= n), sl(s, n, t), (s = o.sibling);
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
        ge(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        Hn(t, n),
        (i = He(i)),
        (r = r(i)),
        (t.flags |= 1),
        ge(e, t, r, n),
        t.child
      );
    case 14:
      return (r = t.type), (i = Ge(r, t.pendingProps)), (i = Ge(r.type, i)), Yu(e, t, r, i, n);
    case 15:
      return ih(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ge(r, i)),
        Oi(e, t),
        (t.tag = 1),
        Te(r) ? ((e = !0), qi(t)) : (e = !1),
        Hn(t, n),
        Rd(t, r, i),
        al(t, r, i, n),
        fl(null, t, r, !0, e, n)
      );
    case 19:
      return uh(e, t, n);
    case 22:
      return oh(e, t, n);
  }
  throw Error(k(156, t.tag));
};
function Th(e, t) {
  return Jf(e, t);
}
function gg(e, t, n, r) {
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
function Ue(e, t, n, r) {
  return new gg(e, t, n, r);
}
function Va(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function yg(e) {
  if (typeof e == "function") return Va(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Gl)) return 11;
    if (e === Ql) return 14;
  }
  return 2;
}
function It(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ue(e.tag, t, e.key, e.mode)),
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
function Ii(e, t, n, r, i, o) {
  var s = 2;
  if (((r = e), typeof e == "function")) Va(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case Cn:
        return fn(n.children, i, o, t);
      case Kl:
        (s = 8), (i |= 8);
        break;
      case Ns:
        return (e = Ue(12, n, t, i | 2)), (e.elementType = Ns), (e.lanes = o), e;
      case Rs:
        return (e = Ue(13, n, t, i)), (e.elementType = Rs), (e.lanes = o), e;
      case js:
        return (e = Ue(19, n, t, i)), (e.elementType = js), (e.lanes = o), e;
      case jf:
        return No(n, i, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Nf:
              s = 10;
              break e;
            case Rf:
              s = 9;
              break e;
            case Gl:
              s = 11;
              break e;
            case Ql:
              s = 14;
              break e;
            case Tt:
              (s = 16), (r = null);
              break e;
          }
        throw Error(k(130, e == null ? e : typeof e, ""));
    }
  return (t = Ue(s, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t;
}
function fn(e, t, n, r) {
  return (e = Ue(7, e, r, t)), (e.lanes = n), e;
}
function No(e, t, n, r) {
  return (e = Ue(22, e, r, t)), (e.elementType = jf), (e.lanes = n), (e.stateNode = { isHidden: !1 }), e;
}
function gs(e, t, n) {
  return (e = Ue(6, e, null, t)), (e.lanes = n), e;
}
function ys(e, t, n) {
  return (
    (t = Ue(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }),
    t
  );
}
function vg(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Jo(0)),
    (this.expirationTimes = Jo(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Jo(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function La(e, t, n, r, i, o, s, l, a) {
  return (
    (e = new vg(e, t, n, l, a)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Ue(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    fa(o),
    e
  );
}
function xg(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: kn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Eh(e) {
  if (!e) return Wt;
  e = e._reactInternals;
  e: {
    if (vn(e) !== e || e.tag !== 1) throw Error(k(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Te(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(k(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Te(n)) return Td(e, n, t);
  }
  return t;
}
function Vh(e, t, n, r, i, o, s, l, a) {
  return (
    (e = La(n, r, !0, e, i, o, s, l, a)),
    (e.context = Eh(null)),
    (n = e.current),
    (r = ye()),
    (i = zt(n)),
    (o = pt(r, i)),
    (o.callback = t ?? null),
    Ot(n, o, i),
    (e.current.lanes = i),
    br(e, i, r),
    Ee(e, r),
    e
  );
}
function Ro(e, t, n, r) {
  var i = t.current,
    o = ye(),
    s = zt(i);
  return (
    (n = Eh(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = pt(o, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Ot(i, t, s)),
    e !== null && (Ze(e, i, s, o), Ri(e, i, s)),
    s
  );
}
function fo(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function sc(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Da(e, t) {
  sc(e, t), (e = e.alternate) && sc(e, t);
}
function Sg() {
  return null;
}
var Lh =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Ma(e) {
  this._internalRoot = e;
}
jo.prototype.render = Ma.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(k(409));
  Ro(e, t, null, null);
};
jo.prototype.unmount = Ma.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    gn(function () {
      Ro(null, e, null, null);
    }),
      (t[vt] = null);
  }
};
function jo(e) {
  this._internalRoot = e;
}
jo.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = id();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Lt.length && t !== 0 && t < Lt[n].priority; n++);
    Lt.splice(n, 0, e), n === 0 && sd(e);
  }
};
function Aa(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function _o(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function lc() {}
function wg(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var u = fo(s);
        o.call(u);
      };
    }
    var s = Vh(t, r, e, 0, null, !1, !1, "", lc);
    return (e._reactRootContainer = s), (e[vt] = s.current), Ir(e.nodeType === 8 ? e.parentNode : e), gn(), s;
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var u = fo(a);
      l.call(u);
    };
  }
  var a = La(e, 0, !1, null, null, !1, !1, "", lc);
  return (
    (e._reactRootContainer = a),
    (e[vt] = a.current),
    Ir(e.nodeType === 8 ? e.parentNode : e),
    gn(function () {
      Ro(t, a, n, r);
    }),
    a
  );
}
function Oo(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var s = o;
    if (typeof i == "function") {
      var l = i;
      i = function () {
        var a = fo(s);
        l.call(a);
      };
    }
    Ro(t, s, e, i);
  } else s = wg(n, t, e, i, r);
  return fo(s);
}
nd = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = mr(t.pendingLanes);
        n !== 0 && (Zl(t, n | 1), Ee(t, ee()), !(F & 6) && ((qn = ee() + 500), Xt()));
      }
      break;
    case 13:
      gn(function () {
        var r = xt(e, 1);
        if (r !== null) {
          var i = ye();
          Ze(r, e, 1, i);
        }
      }),
        Da(e, 1);
  }
};
Jl = function (e) {
  if (e.tag === 13) {
    var t = xt(e, 134217728);
    if (t !== null) {
      var n = ye();
      Ze(t, e, 134217728, n);
    }
    Da(e, 134217728);
  }
};
rd = function (e) {
  if (e.tag === 13) {
    var t = zt(e),
      n = xt(e, t);
    if (n !== null) {
      var r = ye();
      Ze(n, e, t, r);
    }
    Da(e, t);
  }
};
id = function () {
  return z;
};
od = function (e, t) {
  var n = z;
  try {
    return (z = e), t();
  } finally {
    z = n;
  }
};
Ws = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Fs(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Eo(r);
            if (!i) throw Error(k(90));
            Of(r), Fs(r, i);
          }
        }
      }
      break;
    case "textarea":
      zf(e, n);
      break;
    case "select":
      (t = n.value), t != null && In(e, !!n.multiple, t, !1);
  }
};
Kf = Ca;
Gf = gn;
var Pg = { usingClientEntryPoint: !1, Events: [ti, Ln, Eo, Hf, Wf, Ca] },
  cr = { findFiberByHostInstance: sn, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" },
  kg = {
    bundleType: cr.bundleType,
    version: cr.version,
    rendererPackageName: cr.rendererPackageName,
    rendererConfig: cr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Pt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Xf(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: cr.findFiberByHostInstance || Sg,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ci = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ci.isDisabled && Ci.supportsFiber)
    try {
      (Po = Ci.inject(kg)), (ot = Ci);
    } catch {}
}
je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Pg;
je.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Aa(t)) throw Error(k(200));
  return xg(e, t, null, n);
};
je.createRoot = function (e, t) {
  if (!Aa(e)) throw Error(k(299));
  var n = !1,
    r = "",
    i = Lh;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = La(e, 1, !1, null, null, n, !1, r, i)),
    (e[vt] = t.current),
    Ir(e.nodeType === 8 ? e.parentNode : e),
    new Ma(t)
  );
};
je.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(k(188)) : ((e = Object.keys(e).join(",")), Error(k(268, e)));
  return (e = Xf(t)), (e = e === null ? null : e.stateNode), e;
};
je.flushSync = function (e) {
  return gn(e);
};
je.hydrate = function (e, t, n) {
  if (!_o(t)) throw Error(k(200));
  return Oo(null, e, t, !0, n);
};
je.hydrateRoot = function (e, t, n) {
  if (!Aa(e)) throw Error(k(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = "",
    s = Lh;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = Vh(t, null, e, 1, n ?? null, i, !1, o, s)),
    (e[vt] = t.current),
    Ir(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new jo(t);
};
je.render = function (e, t, n) {
  if (!_o(t)) throw Error(k(200));
  return Oo(null, e, t, !1, n);
};
je.unmountComponentAtNode = function (e) {
  if (!_o(e)) throw Error(k(40));
  return e._reactRootContainer
    ? (gn(function () {
        Oo(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[vt] = null);
        });
      }),
      !0)
    : !1;
};
je.unstable_batchedUpdates = Ca;
je.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!_o(n)) throw Error(k(200));
  if (e == null || e._reactInternals === void 0) throw Error(k(38));
  return Oo(e, t, n, !1, r);
};
je.version = "18.2.0-next-9e3b772b8-20220608";
function Dh() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Dh);
    } catch (e) {
      console.error(e);
    }
}
Dh(), (Vf.exports = je);
var Cg = Vf.exports,
  ac = Cg;
(Ms.createRoot = ac.createRoot), (Ms.hydrateRoot = ac.hydrateRoot);
const Mh = D.createContext({ transformPagePoint: (e) => e, isStatic: !1, reducedMotion: "never" }),
  Fo = D.createContext({}),
  Na = D.createContext(null),
  zo = typeof document < "u",
  uc = zo ? D.useLayoutEffect : D.useEffect,
  Ah = D.createContext({ strict: !1 });
function Tg(e, t, n, r) {
  const { visualElement: i } = D.useContext(Fo),
    o = D.useContext(Ah),
    s = D.useContext(Na),
    l = D.useContext(Mh).reducedMotion,
    a = D.useRef();
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
    D.useInsertionEffect(() => {
      u && u.update(n, s);
    }),
    uc(() => {
      u && u.render();
    }),
    D.useEffect(() => {
      u && u.updateFeatures();
    }),
    (window.HandoffAppearAnimations ? uc : D.useEffect)(() => {
      u && u.animationState && u.animationState.animateChanges();
    }),
    u
  );
}
function _n(e) {
  return typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
function Eg(e, t, n) {
  return D.useCallback(
    (r) => {
      r && e.mount && e.mount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : _n(n) && (n.current = r));
    },
    [t]
  );
}
function Yr(e) {
  return typeof e == "string" || Array.isArray(e);
}
function Io(e) {
  return typeof e == "object" && typeof e.start == "function";
}
const Ra = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
  ja = ["initial", ...Ra];
function Bo(e) {
  return Io(e.animate) || ja.some((t) => Yr(e[t]));
}
function Nh(e) {
  return !!(Bo(e) || e.variants);
}
function Vg(e, t) {
  if (Bo(e)) {
    const { initial: n, animate: r } = e;
    return { initial: n === !1 || Yr(n) ? n : void 0, animate: Yr(r) ? r : void 0 };
  }
  return e.inherit !== !1 ? t : {};
}
function Lg(e) {
  const { initial: t, animate: n } = Vg(e, D.useContext(Fo));
  return D.useMemo(() => ({ initial: t, animate: n }), [cc(t), cc(n)]);
}
function cc(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const fc = {
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
  Xr = {};
for (const e in fc) Xr[e] = { isEnabled: (t) => fc[e].some((n) => !!t[n]) };
function Dg(e) {
  for (const t in e) Xr[t] = { ...Xr[t], ...e[t] };
}
const Rh = D.createContext({}),
  jh = D.createContext({}),
  Mg = Symbol.for("motionComponentSymbol");
function Ag({ preloadedFeatures: e, createVisualElement: t, useRender: n, useVisualState: r, Component: i }) {
  e && Dg(e);
  function o(l, a) {
    let u;
    const c = { ...D.useContext(Mh), ...l, layoutId: Ng(l) },
      { isStatic: f } = c,
      d = Lg(l),
      g = r(l, f);
    if (!f && zo) {
      d.visualElement = Tg(i, g, c, t);
      const y = D.useContext(jh),
        x = D.useContext(Ah).strict;
      d.visualElement && (u = d.visualElement.loadFeatures(c, x, e, y));
    }
    return D.createElement(
      Fo.Provider,
      { value: d },
      u && d.visualElement ? D.createElement(u, { visualElement: d.visualElement, ...c }) : null,
      n(i, l, Eg(g, d.visualElement, a), g, f, d.visualElement)
    );
  }
  const s = D.forwardRef(o);
  return (s[Mg] = i), s;
}
function Ng({ layoutId: e }) {
  const t = D.useContext(Rh).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function Rg(e) {
  function t(r, i = {}) {
    return Ag(e(r, i));
  }
  if (typeof Proxy > "u") return t;
  const n = new Map();
  return new Proxy(t, { get: (r, i) => (n.has(i) || n.set(i, t(i)), n.get(i)) });
}
const jg = [
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
function _a(e) {
  return typeof e != "string" || e.includes("-") ? !1 : !!(jg.indexOf(e) > -1 || /[A-Z]/.test(e));
}
const ho = {};
function _g(e) {
  Object.assign(ho, e);
}
const ri = [
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
  xn = new Set(ri);
function _h(e, { layout: t, layoutId: n }) {
  return xn.has(e) || e.startsWith("origin") || ((t || n !== void 0) && (!!ho[e] || e === "opacity"));
}
const Ve = (e) => !!(e && e.getVelocity),
  Og = { x: "translateX", y: "translateY", z: "translateZ", transformPerspective: "perspective" },
  Fg = ri.length;
function zg(e, { enableHardwareAcceleration: t = !0, allowTransformNone: n = !0 }, r, i) {
  let o = "";
  for (let s = 0; s < Fg; s++) {
    const l = ri[s];
    if (e[l] !== void 0) {
      const a = Og[l] || l;
      o += `${a}(${e[l]}) `;
    }
  }
  return t && !e.z && (o += "translateZ(0)"), (o = o.trim()), i ? (o = i(e, r ? "" : o)) : n && r && (o = "none"), o;
}
const Oh = (e) => (t) => typeof t == "string" && t.startsWith(e),
  Fh = Oh("--"),
  kl = Oh("var(--"),
  Ig = /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,
  Bg = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
  Kt = (e, t, n) => Math.min(Math.max(n, e), t),
  Sn = { test: (e) => typeof e == "number", parse: parseFloat, transform: (e) => e },
  Vr = { ...Sn, transform: (e) => Kt(0, 1, e) },
  Ti = { ...Sn, default: 1 },
  Lr = (e) => Math.round(e * 1e5) / 1e5,
  Uo = /(-)?([\d]*\.?[\d])+/g,
  zh = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
  Ug = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function ii(e) {
  return typeof e == "string";
}
const oi = (e) => ({
    test: (t) => ii(t) && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  Ct = oi("deg"),
  lt = oi("%"),
  M = oi("px"),
  $g = oi("vh"),
  Hg = oi("vw"),
  dc = { ...lt, parse: (e) => lt.parse(e) / 100, transform: (e) => lt.transform(e * 100) },
  hc = { ...Sn, transform: Math.round },
  Ih = {
    borderWidth: M,
    borderTopWidth: M,
    borderRightWidth: M,
    borderBottomWidth: M,
    borderLeftWidth: M,
    borderRadius: M,
    radius: M,
    borderTopLeftRadius: M,
    borderTopRightRadius: M,
    borderBottomRightRadius: M,
    borderBottomLeftRadius: M,
    width: M,
    maxWidth: M,
    height: M,
    maxHeight: M,
    size: M,
    top: M,
    right: M,
    bottom: M,
    left: M,
    padding: M,
    paddingTop: M,
    paddingRight: M,
    paddingBottom: M,
    paddingLeft: M,
    margin: M,
    marginTop: M,
    marginRight: M,
    marginBottom: M,
    marginLeft: M,
    rotate: Ct,
    rotateX: Ct,
    rotateY: Ct,
    rotateZ: Ct,
    scale: Ti,
    scaleX: Ti,
    scaleY: Ti,
    scaleZ: Ti,
    skew: Ct,
    skewX: Ct,
    skewY: Ct,
    distance: M,
    translateX: M,
    translateY: M,
    translateZ: M,
    x: M,
    y: M,
    z: M,
    perspective: M,
    transformPerspective: M,
    opacity: Vr,
    originX: dc,
    originY: dc,
    originZ: M,
    zIndex: hc,
    fillOpacity: Vr,
    strokeOpacity: Vr,
    numOctaves: hc,
  };
function Oa(e, t, n, r) {
  const { style: i, vars: o, transform: s, transformOrigin: l } = e;
  let a = !1,
    u = !1,
    c = !0;
  for (const f in t) {
    const d = t[f];
    if (Fh(f)) {
      o[f] = d;
      continue;
    }
    const g = Ih[f],
      y = Bg(d, g);
    if (xn.has(f)) {
      if (((a = !0), (s[f] = y), !c)) continue;
      d !== (g.default || 0) && (c = !1);
    } else f.startsWith("origin") ? ((u = !0), (l[f] = y)) : (i[f] = y);
  }
  if ((t.transform || (a || r ? (i.transform = zg(e.transform, n, c, r)) : i.transform && (i.transform = "none")), u)) {
    const { originX: f = "50%", originY: d = "50%", originZ: g = 0 } = l;
    i.transformOrigin = `${f} ${d} ${g}`;
  }
}
const Fa = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function Bh(e, t, n) {
  for (const r in t) !Ve(t[r]) && !_h(r, n) && (e[r] = t[r]);
}
function Wg({ transformTemplate: e }, t, n) {
  return D.useMemo(() => {
    const r = Fa();
    return Oa(r, t, { enableHardwareAcceleration: !n }, e), Object.assign({}, r.vars, r.style);
  }, [t]);
}
function Kg(e, t, n) {
  const r = e.style || {},
    i = {};
  return Bh(i, r, e), Object.assign(i, Wg(e, t, n)), e.transformValues ? e.transformValues(i) : i;
}
function Gg(e, t, n) {
  const r = {},
    i = Kg(e, t, n);
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
const Qg = new Set([
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
function po(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    Qg.has(e)
  );
}
let Uh = (e) => !po(e);
function Yg(e) {
  e && (Uh = (t) => (t.startsWith("on") ? !po(t) : e(t)));
}
try {
  Yg(require("@emotion/is-prop-valid").default);
} catch {}
function Xg(e, t, n) {
  const r = {};
  for (const i in e)
    (i === "values" && typeof e.values == "object") ||
      ((Uh(i) || (n === !0 && po(i)) || (!t && !po(i)) || (e.draggable && i.startsWith("onDrag"))) && (r[i] = e[i]));
  return r;
}
function pc(e, t, n) {
  return typeof e == "string" ? e : M.transform(t + n * e);
}
function Zg(e, t, n) {
  const r = pc(t, e.x, e.width),
    i = pc(n, e.y, e.height);
  return `${r} ${i}`;
}
const Jg = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  qg = { offset: "strokeDashoffset", array: "strokeDasharray" };
function bg(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  const o = i ? Jg : qg;
  e[o.offset] = M.transform(-r);
  const s = M.transform(t),
    l = M.transform(n);
  e[o.array] = `${s} ${l}`;
}
function za(
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
  if ((Oa(e, u, c, d), f)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  const { attrs: g, style: y, dimensions: x } = e;
  g.transform && (x && (y.transform = g.transform), delete g.transform),
    x &&
      (i !== void 0 || o !== void 0 || y.transform) &&
      (y.transformOrigin = Zg(x, i !== void 0 ? i : 0.5, o !== void 0 ? o : 0.5)),
    t !== void 0 && (g.x = t),
    n !== void 0 && (g.y = n),
    r !== void 0 && (g.scale = r),
    s !== void 0 && bg(g, s, l, a, !1);
}
const $h = () => ({ ...Fa(), attrs: {} }),
  Ia = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function ey(e, t, n, r) {
  const i = D.useMemo(() => {
    const o = $h();
    return (
      za(o, t, { enableHardwareAcceleration: !1 }, Ia(r), e.transformTemplate), { ...o.attrs, style: { ...o.style } }
    );
  }, [t]);
  if (e.style) {
    const o = {};
    Bh(o, e.style, e), (i.style = { ...o, ...i.style });
  }
  return i;
}
function ty(e = !1) {
  return (n, r, i, { latestValues: o }, s) => {
    const a = (_a(n) ? ey : Gg)(r, o, s, n),
      c = { ...Xg(r, typeof n == "string", e), ...a, ref: i },
      { children: f } = r,
      d = D.useMemo(() => (Ve(f) ? f.get() : f), [f]);
    return D.createElement(n, { ...c, children: d });
  };
}
const Ba = (e) => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
function Hh(e, { style: t, vars: n }, r, i) {
  Object.assign(e.style, t, i && i.getProjectionStyles(r));
  for (const o in n) e.style.setProperty(o, n[o]);
}
const Wh = new Set([
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
function Kh(e, t, n, r) {
  Hh(e, t, void 0, r);
  for (const i in t.attrs) e.setAttribute(Wh.has(i) ? i : Ba(i), t.attrs[i]);
}
function Ua(e, t) {
  const { style: n } = e,
    r = {};
  for (const i in n) (Ve(n[i]) || (t.style && Ve(t.style[i])) || _h(i, e)) && (r[i] = n[i]);
  return r;
}
function Gh(e, t) {
  const n = Ua(e, t);
  for (const r in e)
    if (Ve(e[r]) || Ve(t[r])) {
      const i = ri.indexOf(r) !== -1 ? "attr" + r.charAt(0).toUpperCase() + r.substring(1) : r;
      n[i] = e[r];
    }
  return n;
}
function $a(e, t, n, r = {}, i = {}) {
  return (
    typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, i)),
    typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, i)),
    t
  );
}
function ny(e) {
  const t = D.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const mo = (e) => Array.isArray(e),
  ry = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
  iy = (e) => (mo(e) ? e[e.length - 1] || 0 : e);
function Bi(e) {
  const t = Ve(e) ? e.get() : e;
  return ry(t) ? t.toValue() : t;
}
function oy({ scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n }, r, i, o) {
  const s = { latestValues: sy(r, i, o, e), renderState: t() };
  return n && (s.mount = (l) => n(r, l, s)), s;
}
const Qh = (e) => (t, n) => {
  const r = D.useContext(Fo),
    i = D.useContext(Na),
    o = () => oy(e, t, r, i);
  return n ? o() : ny(o);
};
function sy(e, t, n, r) {
  const i = {},
    o = r(e, {});
  for (const d in o) i[d] = Bi(o[d]);
  let { initial: s, animate: l } = e;
  const a = Bo(e),
    u = Nh(e);
  t && u && !a && e.inherit !== !1 && (s === void 0 && (s = t.initial), l === void 0 && (l = t.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || s === !1;
  const f = c ? l : s;
  return (
    f &&
      typeof f != "boolean" &&
      !Io(f) &&
      (Array.isArray(f) ? f : [f]).forEach((g) => {
        const y = $a(e, g);
        if (!y) return;
        const { transitionEnd: x, transition: E, ...m } = y;
        for (const h in m) {
          let p = m[h];
          if (Array.isArray(p)) {
            const v = c ? p.length - 1 : 0;
            p = p[v];
          }
          p !== null && (i[h] = p);
        }
        for (const h in x) i[h] = x[h];
      }),
    i
  );
}
const ly = {
    useVisualState: Qh({
      scrapeMotionValuesFromProps: Gh,
      createRenderState: $h,
      onMount: (e, t, { renderState: n, latestValues: r }) => {
        try {
          n.dimensions = typeof t.getBBox == "function" ? t.getBBox() : t.getBoundingClientRect();
        } catch {
          n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
        }
        za(n, r, { enableHardwareAcceleration: !1 }, Ia(t.tagName), e.transformTemplate), Kh(t, n);
      },
    }),
  },
  ay = { useVisualState: Qh({ scrapeMotionValuesFromProps: Ua, createRenderState: Fa }) };
function uy(e, { forwardMotionProps: t = !1 }, n, r) {
  return { ...(_a(e) ? ly : ay), preloadedFeatures: n, useRender: ty(t), createVisualElement: r, Component: e };
}
function ht(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
const Yh = (e) => (e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1);
function $o(e, t = "page") {
  return { point: { x: e[t + "X"], y: e[t + "Y"] } };
}
const cy = (e) => (t) => Yh(t) && e(t, $o(t));
function mt(e, t, n, r) {
  return ht(e, t, cy(n), r);
}
const fy = (e, t) => (n) => t(e(n)),
  Bt = (...e) => e.reduce(fy);
function Xh(e) {
  let t = null;
  return () => {
    const n = () => {
      t = null;
    };
    return t === null ? ((t = e), n) : !1;
  };
}
const mc = Xh("dragHorizontal"),
  gc = Xh("dragVertical");
function Zh(e) {
  let t = !1;
  if (e === "y") t = gc();
  else if (e === "x") t = mc();
  else {
    const n = mc(),
      r = gc();
    n && r
      ? (t = () => {
          n(), r();
        })
      : (n && n(), r && r());
  }
  return t;
}
function Jh() {
  const e = Zh(!0);
  return e ? (e(), !1) : !0;
}
class Zt {
  constructor(t) {
    (this.isMounted = !1), (this.node = t);
  }
  update() {}
}
function dy(e) {
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
const W = { delta: 0, timestamp: 0, isProcessing: !1 },
  hy = 40;
let Cl = !0,
  Zr = !1;
const Ho = ["read", "update", "preRender", "render", "postRender"],
  Kn = Ho.reduce((e, t) => ((e[t] = dy(() => (Zr = !0))), e), {}),
  py = (e) => Kn[e].process(W),
  qh = (e) => {
    (Zr = !1),
      (W.delta = Cl ? 1e3 / 60 : Math.max(Math.min(e - W.timestamp, hy), 1)),
      (W.timestamp = e),
      (W.isProcessing = !0),
      Ho.forEach(py),
      (W.isProcessing = !1),
      Zr && ((Cl = !1), requestAnimationFrame(qh));
  },
  my = () => {
    (Zr = !0), (Cl = !0), W.isProcessing || requestAnimationFrame(qh);
  },
  Q = Ho.reduce((e, t) => {
    const n = Kn[t];
    return (e[t] = (r, i = !1, o = !1) => (Zr || my(), n.schedule(r, i, o))), e;
  }, {});
function wt(e) {
  Ho.forEach((t) => Kn[t].cancel(e));
}
function yc(e, t) {
  const n = "pointer" + (t ? "enter" : "leave"),
    r = "onHover" + (t ? "Start" : "End"),
    i = (o, s) => {
      if (o.type === "touch" || Jh()) return;
      const l = e.getProps();
      e.animationState && l.whileHover && e.animationState.setActive("whileHover", t),
        l[r] && Q.update(() => l[r](o, s));
    };
  return mt(e.current, n, i, { passive: !e.getProps()[r] });
}
class gy extends Zt {
  mount() {
    this.unmount = Bt(yc(this.node, !0), yc(this.node, !1));
  }
  unmount() {}
}
class yy extends Zt {
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
    this.unmount = Bt(
      ht(this.node.current, "focus", () => this.onFocus()),
      ht(this.node.current, "blur", () => this.onBlur())
    );
  }
  unmount() {}
}
const bh = (e, t) => (t ? (e === t ? !0 : bh(e, t.parentElement)) : !1),
  ie = (e) => e;
function vs(e, t) {
  if (!t) return;
  const n = new PointerEvent("pointer" + e);
  t(n, $o(n));
}
class vy extends Zt {
  constructor() {
    super(...arguments),
      (this.removeStartListeners = ie),
      (this.removeEndListeners = ie),
      (this.removeAccessibleListeners = ie),
      (this.startPointerPress = (t, n) => {
        if ((this.removeEndListeners(), this.isPressing)) return;
        const r = this.node.getProps(),
          o = mt(
            window,
            "pointerup",
            (l, a) => {
              if (!this.checkPressEnd()) return;
              const { onTap: u, onTapCancel: c } = this.node.getProps();
              Q.update(() => {
                bh(this.node.current, l.target) ? u && u(l, a) : c && c(l, a);
              });
            },
            { passive: !(r.onTap || r.onPointerUp) }
          ),
          s = mt(window, "pointercancel", (l, a) => this.cancelPress(l, a), {
            passive: !(r.onTapCancel || r.onPointerCancel),
          });
        (this.removeEndListeners = Bt(o, s)), this.startPress(t, n);
      }),
      (this.startAccessiblePress = () => {
        const t = (o) => {
            if (o.key !== "Enter" || this.isPressing) return;
            const s = (l) => {
              l.key !== "Enter" ||
                !this.checkPressEnd() ||
                vs("up", (a, u) => {
                  const { onTap: c } = this.node.getProps();
                  c && Q.update(() => c(a, u));
                });
            };
            this.removeEndListeners(),
              (this.removeEndListeners = ht(this.node.current, "keyup", s)),
              vs("down", (l, a) => {
                this.startPress(l, a);
              });
          },
          n = ht(this.node.current, "keydown", t),
          r = () => {
            this.isPressing && vs("cancel", (o, s) => this.cancelPress(o, s));
          },
          i = ht(this.node.current, "blur", r);
        this.removeAccessibleListeners = Bt(n, i);
      });
  }
  startPress(t, n) {
    this.isPressing = !0;
    const { onTapStart: r, whileTap: i } = this.node.getProps();
    i && this.node.animationState && this.node.animationState.setActive("whileTap", !0), r && Q.update(() => r(t, n));
  }
  checkPressEnd() {
    return (
      this.removeEndListeners(),
      (this.isPressing = !1),
      this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1),
      !Jh()
    );
  }
  cancelPress(t, n) {
    if (!this.checkPressEnd()) return;
    const { onTapCancel: r } = this.node.getProps();
    r && Q.update(() => r(t, n));
  }
  mount() {
    const t = this.node.getProps(),
      n = mt(this.node.current, "pointerdown", this.startPointerPress, {
        passive: !(t.onTapStart || t.onPointerStart),
      }),
      r = ht(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = Bt(n, r);
  }
  unmount() {
    this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners();
  }
}
const Tl = new WeakMap(),
  xs = new WeakMap(),
  xy = (e) => {
    const t = Tl.get(e.target);
    t && t(e);
  },
  Sy = (e) => {
    e.forEach(xy);
  };
function wy({ root: e, ...t }) {
  const n = e || document;
  xs.has(n) || xs.set(n, {});
  const r = xs.get(n),
    i = JSON.stringify(t);
  return r[i] || (r[i] = new IntersectionObserver(Sy, { root: e, ...t })), r[i];
}
function Py(e, t, n) {
  const r = wy(t);
  return (
    Tl.set(e, n),
    r.observe(e),
    () => {
      Tl.delete(e), r.unobserve(e);
    }
  );
}
const ky = { some: 0, all: 1 };
class Cy extends Zt {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: i = "some", once: o } = t,
      s = { root: n ? n.current : void 0, rootMargin: r, threshold: typeof i == "number" ? i : ky[i] },
      l = (a) => {
        const { isIntersecting: u } = a;
        if (this.isInView === u || ((this.isInView = u), o && !u && this.hasEnteredView)) return;
        u && (this.hasEnteredView = !0),
          this.node.animationState && this.node.animationState.setActive("whileInView", u);
        const { onViewportEnter: c, onViewportLeave: f } = this.node.getProps(),
          d = u ? c : f;
        d && d(a);
      };
    return Py(this.node.current, s, l);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(Ty(t, n)) && this.startObserver();
  }
  unmount() {}
}
function Ty({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const Ey = { inView: { Feature: Cy }, tap: { Feature: vy }, focus: { Feature: yy }, hover: { Feature: gy } };
function ep(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
function Vy(e) {
  const t = {};
  return e.values.forEach((n, r) => (t[r] = n.get())), t;
}
function Ly(e) {
  const t = {};
  return e.values.forEach((n, r) => (t[r] = n.getVelocity())), t;
}
function Wo(e, t, n) {
  const r = e.getProps();
  return $a(r, t, n !== void 0 ? n : r.custom, Vy(e), Ly(e));
}
const Dy = "framerAppearId",
  My = "data-" + Ba(Dy);
let Ay = ie,
  Ha = ie;
const Ut = (e) => e * 1e3,
  gt = (e) => e / 1e3,
  Ny = { current: !1 },
  tp = (e) => Array.isArray(e) && typeof e[0] == "number";
function np(e) {
  return !!(!e || (typeof e == "string" && rp[e]) || tp(e) || (Array.isArray(e) && e.every(np)));
}
const yr = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  rp = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: yr([0, 0.65, 0.55, 1]),
    circOut: yr([0.55, 0, 1, 0.45]),
    backIn: yr([0.31, 0.01, 0.66, -0.59]),
    backOut: yr([0.33, 1.53, 0.69, 0.99]),
  };
function ip(e) {
  if (e) return tp(e) ? yr(e) : Array.isArray(e) ? e.map(ip) : rp[e];
}
function Ry(e, t, n, { delay: r = 0, duration: i, repeat: o = 0, repeatType: s = "loop", ease: l, times: a } = {}) {
  const u = { [t]: n };
  a && (u.offset = a);
  const c = ip(l);
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
const vc = { waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate") },
  Ss = {},
  op = {};
for (const e in vc) op[e] = () => (Ss[e] === void 0 && (Ss[e] = vc[e]()), Ss[e]);
function jy(e, { repeat: t, repeatType: n = "loop" }) {
  const r = t && n !== "loop" && t % 2 === 1 ? 0 : e.length - 1;
  return e[r];
}
const sp = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  _y = 1e-7,
  Oy = 12;
function Fy(e, t, n, r, i) {
  let o,
    s,
    l = 0;
  do (s = t + (n - t) / 2), (o = sp(s, r, i) - e), o > 0 ? (n = s) : (t = s);
  while (Math.abs(o) > _y && ++l < Oy);
  return s;
}
function si(e, t, n, r) {
  if (e === t && n === r) return ie;
  const i = (o) => Fy(o, 0, 1, e, n);
  return (o) => (o === 0 || o === 1 ? o : sp(i(o), t, r));
}
const zy = si(0.42, 0, 1, 1),
  Iy = si(0, 0, 0.58, 1),
  lp = si(0.42, 0, 0.58, 1),
  By = (e) => Array.isArray(e) && typeof e[0] != "number",
  ap = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
  up = (e) => (t) => 1 - e(1 - t),
  cp = (e) => 1 - Math.sin(Math.acos(e)),
  Wa = up(cp),
  Uy = ap(Wa),
  fp = si(0.33, 1.53, 0.69, 0.99),
  Ka = up(fp),
  $y = ap(Ka),
  Hy = (e) => ((e *= 2) < 1 ? 0.5 * Ka(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1)))),
  Wy = {
    linear: ie,
    easeIn: zy,
    easeInOut: lp,
    easeOut: Iy,
    circIn: cp,
    circInOut: Uy,
    circOut: Wa,
    backIn: Ka,
    backInOut: $y,
    backOut: fp,
    anticipate: Hy,
  },
  xc = (e) => {
    if (Array.isArray(e)) {
      Ha(e.length === 4);
      const [t, n, r, i] = e;
      return si(t, n, r, i);
    } else if (typeof e == "string") return Wy[e];
    return e;
  },
  Ga = (e, t) => (n) =>
    !!((ii(n) && Ug.test(n) && n.startsWith(e)) || (t && Object.prototype.hasOwnProperty.call(n, t))),
  dp = (e, t, n) => (r) => {
    if (!ii(r)) return r;
    const [i, o, s, l] = r.match(Uo);
    return { [e]: parseFloat(i), [t]: parseFloat(o), [n]: parseFloat(s), alpha: l !== void 0 ? parseFloat(l) : 1 };
  },
  Ky = (e) => Kt(0, 255, e),
  ws = { ...Sn, transform: (e) => Math.round(Ky(e)) },
  un = {
    test: Ga("rgb", "red"),
    parse: dp("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" + ws.transform(e) + ", " + ws.transform(t) + ", " + ws.transform(n) + ", " + Lr(Vr.transform(r)) + ")",
  };
function Gy(e) {
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
const El = { test: Ga("#"), parse: Gy, transform: un.transform },
  On = {
    test: Ga("hsl", "hue"),
    parse: dp("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      lt.transform(Lr(t)) +
      ", " +
      lt.transform(Lr(n)) +
      ", " +
      Lr(Vr.transform(r)) +
      ")",
  },
  me = {
    test: (e) => un.test(e) || El.test(e) || On.test(e),
    parse: (e) => (un.test(e) ? un.parse(e) : On.test(e) ? On.parse(e) : El.parse(e)),
    transform: (e) => (ii(e) ? e : e.hasOwnProperty("red") ? un.transform(e) : On.transform(e)),
  },
  G = (e, t, n) => -n * e + n * t + e;
function Ps(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
  );
}
function Qy({ hue: e, saturation: t, lightness: n, alpha: r }) {
  (e /= 360), (t /= 100), (n /= 100);
  let i = 0,
    o = 0,
    s = 0;
  if (!t) i = o = s = n;
  else {
    const l = n < 0.5 ? n * (1 + t) : n + t - n * t,
      a = 2 * n - l;
    (i = Ps(a, l, e + 1 / 3)), (o = Ps(a, l, e)), (s = Ps(a, l, e - 1 / 3));
  }
  return { red: Math.round(i * 255), green: Math.round(o * 255), blue: Math.round(s * 255), alpha: r };
}
const ks = (e, t, n) => {
    const r = e * e;
    return Math.sqrt(Math.max(0, n * (t * t - r) + r));
  },
  Yy = [El, un, On],
  Xy = (e) => Yy.find((t) => t.test(e));
function Sc(e) {
  const t = Xy(e);
  let n = t.parse(e);
  return t === On && (n = Qy(n)), n;
}
const hp = (e, t) => {
  const n = Sc(e),
    r = Sc(t),
    i = { ...n };
  return (o) => (
    (i.red = ks(n.red, r.red, o)),
    (i.green = ks(n.green, r.green, o)),
    (i.blue = ks(n.blue, r.blue, o)),
    (i.alpha = G(n.alpha, r.alpha, o)),
    un.transform(i)
  );
};
function Zy(e) {
  var t, n;
  return (
    isNaN(e) &&
    ii(e) &&
    (((t = e.match(Uo)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((n = e.match(zh)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  );
}
const pp = { regex: Ig, countKey: "Vars", token: "${v}", parse: ie },
  mp = { regex: zh, countKey: "Colors", token: "${c}", parse: me.parse },
  gp = { regex: Uo, countKey: "Numbers", token: "${n}", parse: Sn.parse };
function Cs(e, { regex: t, countKey: n, token: r, parse: i }) {
  const o = e.tokenised.match(t);
  o && ((e["num" + n] = o.length), (e.tokenised = e.tokenised.replace(t, r)), e.values.push(...o.map(i)));
}
function go(e) {
  const t = e.toString(),
    n = { value: t, tokenised: t, values: [], numVars: 0, numColors: 0, numNumbers: 0 };
  return n.value.includes("var(--") && Cs(n, pp), Cs(n, mp), Cs(n, gp), n;
}
function yp(e) {
  return go(e).values;
}
function vp(e) {
  const { values: t, numColors: n, numVars: r, tokenised: i } = go(e),
    o = t.length;
  return (s) => {
    let l = i;
    for (let a = 0; a < o; a++)
      a < r
        ? (l = l.replace(pp.token, s[a]))
        : a < r + n
        ? (l = l.replace(mp.token, me.transform(s[a])))
        : (l = l.replace(gp.token, Lr(s[a])));
    return l;
  };
}
const Jy = (e) => (typeof e == "number" ? 0 : e);
function qy(e) {
  const t = yp(e);
  return vp(e)(t.map(Jy));
}
const Gt = { test: Zy, parse: yp, createTransformer: vp, getAnimatableNone: qy },
  xp = (e, t) => (n) => `${n > 0 ? t : e}`;
function Sp(e, t) {
  return typeof e == "number" ? (n) => G(e, t, n) : me.test(e) ? hp(e, t) : e.startsWith("var(") ? xp(e, t) : Pp(e, t);
}
const wp = (e, t) => {
    const n = [...e],
      r = n.length,
      i = e.map((o, s) => Sp(o, t[s]));
    return (o) => {
      for (let s = 0; s < r; s++) n[s] = i[s](o);
      return n;
    };
  },
  by = (e, t) => {
    const n = { ...e, ...t },
      r = {};
    for (const i in n) e[i] !== void 0 && t[i] !== void 0 && (r[i] = Sp(e[i], t[i]));
    return (i) => {
      for (const o in r) n[o] = r[o](i);
      return n;
    };
  },
  Pp = (e, t) => {
    const n = Gt.createTransformer(t),
      r = go(e),
      i = go(t);
    return r.numVars === i.numVars && r.numColors === i.numColors && r.numNumbers >= i.numNumbers
      ? Bt(wp(r.values, i.values), n)
      : xp(e, t);
  },
  Jr = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  },
  wc = (e, t) => (n) => G(e, t, n);
function ev(e) {
  return typeof e == "number"
    ? wc
    : typeof e == "string"
    ? me.test(e)
      ? hp
      : Pp
    : Array.isArray(e)
    ? wp
    : typeof e == "object"
    ? by
    : wc;
}
function tv(e, t, n) {
  const r = [],
    i = n || ev(e[0]),
    o = e.length - 1;
  for (let s = 0; s < o; s++) {
    let l = i(e[s], e[s + 1]);
    if (t) {
      const a = Array.isArray(t) ? t[s] || ie : t;
      l = Bt(a, l);
    }
    r.push(l);
  }
  return r;
}
function kp(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  const o = e.length;
  if ((Ha(o === t.length), o === 1)) return () => t[0];
  e[0] > e[o - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const s = tv(t, r, i),
    l = s.length,
    a = (u) => {
      let c = 0;
      if (l > 1) for (; c < e.length - 2 && !(u < e[c + 1]); c++);
      const f = Jr(e[c], e[c + 1], u);
      return s[c](f);
    };
  return n ? (u) => a(Kt(e[0], e[o - 1], u)) : a;
}
function nv(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const i = Jr(0, t, r);
    e.push(G(n, 1, i));
  }
}
function rv(e) {
  const t = [0];
  return nv(t, e.length - 1), t;
}
function iv(e, t) {
  return e.map((n) => n * t);
}
function ov(e, t) {
  return e.map(() => t || lp).splice(0, e.length - 1);
}
function yo({ duration: e = 300, keyframes: t, times: n, ease: r = "easeInOut" }) {
  const i = By(r) ? r.map(xc) : xc(r),
    o = { done: !1, value: t[0] },
    s = iv(n && n.length === t.length ? n : rv(t), e),
    l = kp(s, t, { ease: Array.isArray(i) ? i : ov(t, i) });
  return { calculatedDuration: e, next: (a) => ((o.value = l(a)), (o.done = a >= e), o) };
}
function Cp(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const sv = 5;
function Tp(e, t, n) {
  const r = Math.max(t - sv, 0);
  return Cp(n - e(r), t - r);
}
const Ts = 0.001,
  lv = 0.01,
  Pc = 10,
  av = 0.05,
  uv = 1;
function cv({ duration: e = 800, bounce: t = 0.25, velocity: n = 0, mass: r = 1 }) {
  let i, o;
  Ay(e <= Ut(Pc));
  let s = 1 - t;
  (s = Kt(av, uv, s)),
    (e = Kt(lv, Pc, gt(e))),
    s < 1
      ? ((i = (u) => {
          const c = u * s,
            f = c * e,
            d = c - n,
            g = Vl(u, s),
            y = Math.exp(-f);
          return Ts - (d / g) * y;
        }),
        (o = (u) => {
          const f = u * s * e,
            d = f * n + n,
            g = Math.pow(s, 2) * Math.pow(u, 2) * e,
            y = Math.exp(-f),
            x = Vl(Math.pow(u, 2), s);
          return ((-i(u) + Ts > 0 ? -1 : 1) * ((d - g) * y)) / x;
        }))
      : ((i = (u) => {
          const c = Math.exp(-u * e),
            f = (u - n) * e + 1;
          return -Ts + c * f;
        }),
        (o = (u) => {
          const c = Math.exp(-u * e),
            f = (n - u) * (e * e);
          return c * f;
        }));
  const l = 5 / e,
    a = dv(i, o, l);
  if (((e = Ut(e)), isNaN(a))) return { stiffness: 100, damping: 10, duration: e };
  {
    const u = Math.pow(a, 2) * r;
    return { stiffness: u, damping: s * 2 * Math.sqrt(r * u), duration: e };
  }
}
const fv = 12;
function dv(e, t, n) {
  let r = n;
  for (let i = 1; i < fv; i++) r = r - e(r) / t(r);
  return r;
}
function Vl(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const hv = ["duration", "bounce"],
  pv = ["stiffness", "damping", "mass"];
function kc(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function mv(e) {
  let t = { velocity: 0, stiffness: 100, damping: 10, mass: 1, isResolvedFromDuration: !1, ...e };
  if (!kc(e, pv) && kc(e, hv)) {
    const n = cv(e);
    (t = { ...t, ...n, velocity: 0, mass: 1 }), (t.isResolvedFromDuration = !0);
  }
  return t;
}
function Ep({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
  const i = e[0],
    o = e[e.length - 1],
    s = { done: !1, value: i },
    { stiffness: l, damping: a, mass: u, velocity: c, duration: f, isResolvedFromDuration: d } = mv(r),
    g = c ? -gt(c) : 0,
    y = a / (2 * Math.sqrt(l * u)),
    x = o - i,
    E = gt(Math.sqrt(l / u)),
    m = Math.abs(x) < 5;
  n || (n = m ? 0.01 : 2), t || (t = m ? 0.005 : 0.5);
  let h;
  if (y < 1) {
    const p = Vl(E, y);
    h = (v) => {
      const w = Math.exp(-y * E * v);
      return o - w * (((g + y * E * x) / p) * Math.sin(p * v) + x * Math.cos(p * v));
    };
  } else if (y === 1) h = (p) => o - Math.exp(-E * p) * (x + (g + E * x) * p);
  else {
    const p = E * Math.sqrt(y * y - 1);
    h = (v) => {
      const w = Math.exp(-y * E * v),
        T = Math.min(p * v, 300);
      return o - (w * ((g + y * E * x) * Math.sinh(T) + p * x * Math.cosh(T))) / p;
    };
  }
  return {
    calculatedDuration: (d && f) || null,
    next: (p) => {
      const v = h(p);
      if (d) s.done = p >= f;
      else {
        let w = g;
        p !== 0 && (y < 1 ? (w = Tp(h, p, v)) : (w = 0));
        const T = Math.abs(w) <= n,
          C = Math.abs(o - v) <= t;
        s.done = T && C;
      }
      return (s.value = s.done ? o : v), s;
    },
  };
}
function Cc({
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
    g = (P) => (l !== void 0 && P < l) || (a !== void 0 && P > a),
    y = (P) => (l === void 0 ? a : a === void 0 || Math.abs(l - P) < Math.abs(a - P) ? l : a);
  let x = n * t;
  const E = f + x,
    m = s === void 0 ? E : s(E);
  m !== E && (x = m - f);
  const h = (P) => -x * Math.exp(-P / r),
    p = (P) => m + h(P),
    v = (P) => {
      const N = h(P),
        A = p(P);
      (d.done = Math.abs(N) <= u), (d.value = d.done ? m : A);
    };
  let w, T;
  const C = (P) => {
    g(d.value) &&
      ((w = P),
      (T = Ep({
        keyframes: [d.value, y(d.value)],
        velocity: Tp(p, P, d.value),
        damping: i,
        stiffness: o,
        restDelta: u,
        restSpeed: c,
      })));
  };
  return (
    C(0),
    {
      calculatedDuration: null,
      next: (P) => {
        let N = !1;
        return !T && w === void 0 && ((N = !0), v(P), C(P)), w !== void 0 && P > w ? T.next(P - w) : (!N && v(P), d);
      },
    }
  );
}
const gv = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: () => Q.update(t, !0),
      stop: () => wt(t),
      now: () => (W.isProcessing ? W.timestamp : performance.now()),
    };
  },
  Tc = 2e4;
function Ec(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < Tc; ) (t += n), (r = e.next(t));
  return t >= Tc ? 1 / 0 : t;
}
const yv = { decay: Cc, inertia: Cc, tween: yo, keyframes: yo, spring: Ep };
function vo({
  autoplay: e = !0,
  delay: t = 0,
  driver: n = gv,
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
  let g = 1,
    y = !1,
    x,
    E;
  const m = () => {
    x && x(),
      (E = new Promise((R) => {
        x = R;
      }));
  };
  m();
  let h;
  const p = yv[i] || yo;
  let v;
  p !== yo && typeof r[0] != "number" && ((v = kp([0, 100], r, { clamp: !1 })), (r = [0, 100]));
  const w = p({ ...d, keyframes: r });
  let T;
  l === "mirror" && (T = p({ ...d, keyframes: [...r].reverse(), velocity: -(d.velocity || 0) }));
  let C = "idle",
    P = null,
    N = null,
    A = null;
  w.calculatedDuration === null && o && (w.calculatedDuration = Ec(w));
  const { calculatedDuration: Z } = w;
  let Se = 1 / 0,
    we = 1 / 0;
  Z !== null && ((Se = Z + s), (we = Se * (o + 1) - s));
  let q = 0;
  const b = (R) => {
      if (N === null) return;
      g > 0 && (N = Math.min(N, R)),
        g < 0 && (N = Math.min(R - we / g, N)),
        P !== null ? (q = P) : (q = Math.round(R - N) * g);
      const $ = q - t * (g >= 0 ? 1 : -1),
        Jt = g >= 0 ? $ < 0 : $ > we;
      (q = Math.max($, 0)), C === "finished" && P === null && (q = we);
      let be = q,
        wn = w;
      if (o) {
        const Ko = q / Se;
        let li = Math.floor(Ko),
          bt = Ko % 1;
        !bt && Ko >= 1 && (bt = 1), bt === 1 && li--, (li = Math.min(li, o + 1));
        const qa = !!(li % 2);
        qa && (l === "reverse" ? ((bt = 1 - bt), s && (bt -= s / Se)) : l === "mirror" && (wn = T));
        let ba = Kt(0, 1, bt);
        q > we && (ba = l === "reverse" && qa ? 1 : 0), (be = ba * Se);
      }
      const Le = Jt ? { done: !1, value: r[0] } : wn.next(be);
      v && (Le.value = v(Le.value));
      let { done: qt } = Le;
      !Jt && Z !== null && (qt = g >= 0 ? q >= we : q <= 0);
      const qp = P === null && (C === "finished" || (C === "running" && qt));
      return f && f(Le.value), qp && V(), Le;
    },
    Oe = () => {
      h && h.stop(), (h = void 0);
    },
    qe = () => {
      (C = "idle"), Oe(), m(), (N = A = null);
    },
    V = () => {
      (C = "finished"), c && c(), Oe(), m();
    },
    j = () => {
      if (y) return;
      h || (h = n(b));
      const R = h.now();
      a && a(),
        P !== null ? (N = R - P) : (!N || C === "finished") && (N = R),
        (A = N),
        (P = null),
        (C = "running"),
        h.start();
    };
  e && j();
  const _ = {
    then(R, $) {
      return E.then(R, $);
    },
    get time() {
      return gt(q);
    },
    set time(R) {
      (R = Ut(R)), (q = R), P !== null || !h || g === 0 ? (P = R) : (N = h.now() - R / g);
    },
    get duration() {
      const R = w.calculatedDuration === null ? Ec(w) : w.calculatedDuration;
      return gt(R);
    },
    get speed() {
      return g;
    },
    set speed(R) {
      R === g || !h || ((g = R), (_.time = gt(q)));
    },
    get state() {
      return C;
    },
    play: j,
    pause: () => {
      (C = "paused"), (P = q);
    },
    stop: () => {
      (y = !0), C !== "idle" && ((C = "idle"), u && u(), qe());
    },
    cancel: () => {
      A !== null && b(A), qe();
    },
    complete: () => {
      C = "finished";
    },
    sample: (R) => ((N = 0), b(R)),
  };
  return _;
}
const vv = new Set(["opacity", "clipPath", "filter", "transform", "backgroundColor"]),
  Ei = 10,
  xv = 2e4,
  Sv = (e, t) => t.type === "spring" || e === "backgroundColor" || !np(t.ease);
function wv(e, t, { onUpdate: n, onComplete: r, ...i }) {
  if (
    !(op.waapi() && vv.has(t) && !i.repeatDelay && i.repeatType !== "mirror" && i.damping !== 0 && i.type !== "inertia")
  )
    return !1;
  let s = !1,
    l,
    a;
  const u = () => {
    a = new Promise((m) => {
      l = m;
    });
  };
  u();
  let { keyframes: c, duration: f = 300, ease: d, times: g } = i;
  if (Sv(t, i)) {
    const m = vo({ ...i, repeat: 0, delay: 0 });
    let h = { done: !1, value: c[0] };
    const p = [];
    let v = 0;
    for (; !h.done && v < xv; ) (h = m.sample(v)), p.push(h.value), (v += Ei);
    (g = void 0), (c = p), (f = v - Ei), (d = "linear");
  }
  const y = Ry(e.owner.current, t, c, { ...i, duration: f, ease: d, times: g }),
    x = () => y.cancel(),
    E = () => {
      Q.update(x), l(), u();
    };
  return (
    (y.onfinish = () => {
      e.set(jy(c, i)), r && r(), E();
    }),
    {
      then(m, h) {
        return a.then(m, h);
      },
      get time() {
        return gt(y.currentTime || 0);
      },
      set time(m) {
        y.currentTime = Ut(m);
      },
      get speed() {
        return y.playbackRate;
      },
      set speed(m) {
        y.playbackRate = m;
      },
      get duration() {
        return gt(f);
      },
      play: () => {
        s || (y.play(), wt(x));
      },
      pause: () => y.pause(),
      stop: () => {
        if (((s = !0), y.playState === "idle")) return;
        const { currentTime: m } = y;
        if (m) {
          const h = vo({ ...i, autoplay: !1 });
          e.setWithVelocity(h.sample(m - Ei).value, h.sample(m).value, Ei);
        }
        E();
      },
      complete: () => y.finish(),
      cancel: E,
    }
  );
}
function Pv({ keyframes: e, delay: t, onUpdate: n, onComplete: r }) {
  const i = () => (
    n && n(e[e.length - 1]),
    r && r(),
    {
      time: 0,
      speed: 1,
      duration: 0,
      play: ie,
      pause: ie,
      stop: ie,
      then: (o) => (o(), Promise.resolve()),
      cancel: ie,
      complete: ie,
    }
  );
  return t ? vo({ keyframes: [0, 1], duration: 0, delay: t, onComplete: i }) : i();
}
const kv = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  Cv = (e) => ({ type: "spring", stiffness: 550, damping: e === 0 ? 2 * Math.sqrt(550) : 30, restSpeed: 10 }),
  Tv = { type: "keyframes", duration: 0.8 },
  Ev = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  Vv = (e, { keyframes: t }) => (t.length > 2 ? Tv : xn.has(e) ? (e.startsWith("scale") ? Cv(t[1]) : kv) : Ev),
  Ll = (e, t) =>
    e === "zIndex"
      ? !1
      : !!(
          typeof t == "number" ||
          Array.isArray(t) ||
          (typeof t == "string" && (Gt.test(t) || t === "0") && !t.startsWith("url("))
        ),
  Lv = new Set(["brightness", "contrast", "saturate", "opacity"]);
function Dv(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [r] = n.match(Uo) || [];
  if (!r) return e;
  const i = n.replace(r, "");
  let o = Lv.has(t) ? 1 : 0;
  return r !== n && (o *= 100), t + "(" + o + i + ")";
}
const Mv = /([a-z-]*)\(.*?\)/g,
  Dl = {
    ...Gt,
    getAnimatableNone: (e) => {
      const t = e.match(Mv);
      return t ? t.map(Dv).join(" ") : e;
    },
  },
  Av = {
    ...Ih,
    color: me,
    backgroundColor: me,
    outlineColor: me,
    fill: me,
    stroke: me,
    borderColor: me,
    borderTopColor: me,
    borderRightColor: me,
    borderBottomColor: me,
    borderLeftColor: me,
    filter: Dl,
    WebkitFilter: Dl,
  },
  Qa = (e) => Av[e];
function Vp(e, t) {
  let n = Qa(e);
  return n !== Dl && (n = Gt), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
}
const Lp = (e) => /^0[^.\s]+$/.test(e);
function Nv(e) {
  if (typeof e == "number") return e === 0;
  if (e !== null) return e === "none" || e === "0" || Lp(e);
}
function Rv(e, t, n, r) {
  const i = Ll(t, n);
  let o;
  Array.isArray(n) ? (o = [...n]) : (o = [null, n]);
  const s = r.from !== void 0 ? r.from : e.get();
  let l;
  const a = [];
  for (let u = 0; u < o.length; u++)
    o[u] === null && (o[u] = u === 0 ? s : o[u - 1]),
      Nv(o[u]) && a.push(u),
      typeof o[u] == "string" && o[u] !== "none" && o[u] !== "0" && (l = o[u]);
  if (i && a.length && l)
    for (let u = 0; u < a.length; u++) {
      const c = a[u];
      o[c] = Vp(t, l);
    }
  return o;
}
function jv({
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
function Dp(e, t) {
  return e[t] || e.default || e;
}
const Ya =
  (e, t, n, r = {}) =>
  (i) => {
    const o = Dp(r, e) || {},
      s = o.delay || r.delay || 0;
    let { elapsed: l = 0 } = r;
    l = l - Ut(s);
    const a = Rv(t, e, n, o),
      u = a[0],
      c = a[a.length - 1],
      f = Ll(e, u),
      d = Ll(e, c);
    let g = {
      keyframes: a,
      velocity: t.getVelocity(),
      ease: "easeOut",
      ...o,
      delay: -l,
      onUpdate: (y) => {
        t.set(y), o.onUpdate && o.onUpdate(y);
      },
      onComplete: () => {
        i(), o.onComplete && o.onComplete();
      },
    };
    if (
      (jv(o) || (g = { ...g, ...Vv(e, g) }),
      g.duration && (g.duration = Ut(g.duration)),
      g.repeatDelay && (g.repeatDelay = Ut(g.repeatDelay)),
      !f || !d || Ny.current || o.type === !1)
    )
      return Pv(g);
    if (t.owner && t.owner.current instanceof HTMLElement && !t.owner.getProps().onUpdate) {
      const y = wv(t, e, g);
      if (y) return y;
    }
    return vo(g);
  };
function xo(e) {
  return !!(Ve(e) && e.add);
}
const _v = (e) => /^\-?\d*\.?\d+$/.test(e);
function Xa(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Za(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class Ja {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return Xa(this.subscriptions, t), () => Za(this.subscriptions, t);
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
const Ov = (e) => !isNaN(parseFloat(e));
class Fv {
  constructor(t, n = {}) {
    (this.version = "10.12.17"),
      (this.timeDelta = 0),
      (this.lastUpdated = 0),
      (this.canTrackVelocity = !1),
      (this.events = {}),
      (this.updateAndNotify = (r, i = !0) => {
        (this.prev = this.current), (this.current = r);
        const { delta: o, timestamp: s } = W;
        this.lastUpdated !== s &&
          ((this.timeDelta = o), (this.lastUpdated = s), Q.postRender(this.scheduleVelocityCheck)),
          this.prev !== this.current && this.events.change && this.events.change.notify(this.current),
          this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()),
          i && this.events.renderRequest && this.events.renderRequest.notify(this.current);
      }),
      (this.scheduleVelocityCheck = () => Q.postRender(this.velocityCheck)),
      (this.velocityCheck = ({ timestamp: r }) => {
        r !== this.lastUpdated &&
          ((this.prev = this.current),
          this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()));
      }),
      (this.hasAnimated = !1),
      (this.prev = this.current = t),
      (this.canTrackVelocity = Ov(this.current)),
      (this.owner = n.owner);
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new Ja());
    const r = this.events[t].add(n);
    return t === "change"
      ? () => {
          r(),
            Q.read(() => {
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
    return this.canTrackVelocity ? Cp(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0;
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
function bn(e, t) {
  return new Fv(e, t);
}
const Mp = (e) => (t) => t.test(e),
  zv = { test: (e) => e === "auto", parse: (e) => e },
  Ap = [Sn, M, lt, Ct, Hg, $g, zv],
  fr = (e) => Ap.find(Mp(e)),
  Iv = [...Ap, me, Gt],
  Bv = (e) => Iv.find(Mp(e));
function Uv(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, bn(n));
}
function $v(e, t) {
  const n = Wo(e, t);
  let { transitionEnd: r = {}, transition: i = {}, ...o } = n ? e.makeTargetAnimatable(n, !1) : {};
  o = { ...o, ...r };
  for (const s in o) {
    const l = iy(o[s]);
    Uv(e, s, l);
  }
}
function Hv(e, t, n) {
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
          (typeof c == "string" && (_v(c) || Lp(c)) ? (c = parseFloat(c)) : !Bv(c) && Gt.test(u) && (c = Vp(a, u)),
          e.addValue(a, bn(c, { owner: e })),
          n[a] === void 0 && (n[a] = c),
          c !== null && e.setBaseTarget(a, c));
    }
}
function Wv(e, t) {
  return t ? (t[e] || t.default || t).from : void 0;
}
function Kv(e, t, n) {
  const r = {};
  for (const i in e) {
    const o = Wv(i, t);
    if (o !== void 0) r[i] = o;
    else {
      const s = n.getValue(i);
      s && (r[i] = s.get());
    }
  }
  return r;
}
function Gv({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return (t[n] = !1), r;
}
function Np(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  let { transition: o = e.getDefaultTransition(), transitionEnd: s, ...l } = e.makeTargetAnimatable(t);
  const a = e.getValue("willChange");
  r && (o = r);
  const u = [],
    c = i && e.animationState && e.animationState.getState()[i];
  for (const f in l) {
    const d = e.getValue(f),
      g = l[f];
    if (!d || g === void 0 || (c && Gv(c, f))) continue;
    const y = { delay: n, elapsed: 0, ...o };
    if (window.HandoffAppearAnimations && !d.hasAnimated) {
      const E = e.getProps()[My];
      E && (y.elapsed = window.HandoffAppearAnimations(E, f, d, Q));
    }
    d.start(Ya(f, d, g, e.shouldReduceMotion && xn.has(f) ? { type: !1 } : y));
    const x = d.animation;
    xo(a) && (a.add(f), x.then(() => a.remove(f))), u.push(x);
  }
  return (
    s &&
      Promise.all(u).then(() => {
        s && $v(e, s);
      }),
    u
  );
}
function Ml(e, t, n = {}) {
  const r = Wo(e, t, n.custom);
  let { transition: i = e.getDefaultTransition() || {} } = r || {};
  n.transitionOverride && (i = n.transitionOverride);
  const o = r ? () => Promise.all(Np(e, r, n)) : () => Promise.resolve(),
    s =
      e.variantChildren && e.variantChildren.size
        ? (a = 0) => {
            const { delayChildren: u = 0, staggerChildren: c, staggerDirection: f } = i;
            return Qv(e, t, u + a, c, f, n);
          }
        : () => Promise.resolve(),
    { when: l } = i;
  if (l) {
    const [a, u] = l === "beforeChildren" ? [o, s] : [s, o];
    return a().then(() => u());
  } else return Promise.all([o(), s(n.delay)]);
}
function Qv(e, t, n = 0, r = 0, i = 1, o) {
  const s = [],
    l = (e.variantChildren.size - 1) * r,
    a = i === 1 ? (u = 0) => u * r : (u = 0) => l - u * r;
  return (
    Array.from(e.variantChildren)
      .sort(Yv)
      .forEach((u, c) => {
        u.notify("AnimationStart", t),
          s.push(Ml(u, t, { ...o, delay: n + a(c) }).then(() => u.notify("AnimationComplete", t)));
      }),
    Promise.all(s)
  );
}
function Yv(e, t) {
  return e.sortNodePosition(t);
}
function Xv(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const i = t.map((o) => Ml(e, o, n));
    r = Promise.all(i);
  } else if (typeof t == "string") r = Ml(e, t, n);
  else {
    const i = typeof t == "function" ? Wo(e, t, n.custom) : t;
    r = Promise.all(Np(e, i, n));
  }
  return r.then(() => e.notify("AnimationComplete", t));
}
const Zv = [...Ra].reverse(),
  Jv = Ra.length;
function qv(e) {
  return (t) => Promise.all(t.map(({ animation: n, options: r }) => Xv(e, n, r)));
}
function bv(e) {
  let t = qv(e);
  const n = t1();
  let r = !0;
  const i = (a, u) => {
    const c = Wo(e, u);
    if (c) {
      const { transition: f, transitionEnd: d, ...g } = c;
      a = { ...a, ...g, ...d };
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
      g = new Set();
    let y = {},
      x = 1 / 0;
    for (let m = 0; m < Jv; m++) {
      const h = Zv[m],
        p = n[h],
        v = c[h] !== void 0 ? c[h] : f[h],
        w = Yr(v),
        T = h === u ? p.isActive : null;
      T === !1 && (x = m);
      let C = v === f[h] && v !== c[h] && w;
      if (
        (C && r && e.manuallyAnimateOnMount && (C = !1),
        (p.protectedKeys = { ...y }),
        (!p.isActive && T === null) || (!v && !p.prevProp) || Io(v) || typeof v == "boolean")
      )
        continue;
      const P = e1(p.prevProp, v);
      let N = P || (h === u && p.isActive && !C && w) || (m > x && w);
      const A = Array.isArray(v) ? v : [v];
      let Z = A.reduce(i, {});
      T === !1 && (Z = {});
      const { prevResolvedValues: Se = {} } = p,
        we = { ...Se, ...Z },
        q = (b) => {
          (N = !0), g.delete(b), (p.needsAnimating[b] = !0);
        };
      for (const b in we) {
        const Oe = Z[b],
          qe = Se[b];
        y.hasOwnProperty(b) ||
          (Oe !== qe
            ? mo(Oe) && mo(qe)
              ? !ep(Oe, qe) || P
                ? q(b)
                : (p.protectedKeys[b] = !0)
              : Oe !== void 0
              ? q(b)
              : g.add(b)
            : Oe !== void 0 && g.has(b)
            ? q(b)
            : (p.protectedKeys[b] = !0));
      }
      (p.prevProp = v),
        (p.prevResolvedValues = Z),
        p.isActive && (y = { ...y, ...Z }),
        r && e.blockInitialAnimation && (N = !1),
        N && !C && d.push(...A.map((b) => ({ animation: b, options: { type: h, ...a } })));
    }
    if (g.size) {
      const m = {};
      g.forEach((h) => {
        const p = e.getBaseTarget(h);
        p !== void 0 && (m[h] = p);
      }),
        d.push({ animation: m });
    }
    let E = !!d.length;
    return r && c.initial === !1 && !e.manuallyAnimateOnMount && (E = !1), (r = !1), E ? t(d) : Promise.resolve();
  }
  function l(a, u, c) {
    var f;
    if (n[a].isActive === u) return Promise.resolve();
    (f = e.variantChildren) === null ||
      f === void 0 ||
      f.forEach((g) => {
        var y;
        return (y = g.animationState) === null || y === void 0 ? void 0 : y.setActive(a, u);
      }),
      (n[a].isActive = u);
    const d = s(c, a);
    for (const g in n) n[g].protectedKeys = {};
    return d;
  }
  return { animateChanges: s, setActive: l, setAnimateFunction: o, getState: () => n };
}
function e1(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !ep(t, e) : !1;
}
function en(e = !1) {
  return { isActive: e, protectedKeys: {}, needsAnimating: {}, prevResolvedValues: {} };
}
function t1() {
  return {
    animate: en(!0),
    whileInView: en(),
    whileHover: en(),
    whileTap: en(),
    whileDrag: en(),
    whileFocus: en(),
    exit: en(),
  };
}
class n1 extends Zt {
  constructor(t) {
    super(t), t.animationState || (t.animationState = bv(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    this.unmount(), Io(t) && (this.unmount = t.subscribe(this.node));
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
let r1 = 0;
class i1 extends Zt {
  constructor() {
    super(...arguments), (this.id = r1++);
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
const o1 = { animation: { Feature: n1 }, exit: { Feature: i1 } },
  Vc = (e, t) => Math.abs(e - t);
function s1(e, t) {
  const n = Vc(e.x, t.x),
    r = Vc(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class Rp {
  constructor(t, n, { transformPagePoint: r } = {}) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const u = Vs(this.lastMoveEventInfo, this.history),
          c = this.startEvent !== null,
          f = s1(u.offset, { x: 0, y: 0 }) >= 3;
        if (!c && !f) return;
        const { point: d } = u,
          { timestamp: g } = W;
        this.history.push({ ...d, timestamp: g });
        const { onStart: y, onMove: x } = this.handlers;
        c || (y && y(this.lastMoveEvent, u), (this.startEvent = this.lastMoveEvent)), x && x(this.lastMoveEvent, u);
      }),
      (this.handlePointerMove = (u, c) => {
        (this.lastMoveEvent = u),
          (this.lastMoveEventInfo = Es(c, this.transformPagePoint)),
          Q.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (u, c) => {
        if ((this.end(), !(this.lastMoveEvent && this.lastMoveEventInfo))) return;
        const { onEnd: f, onSessionEnd: d } = this.handlers,
          g = Vs(u.type === "pointercancel" ? this.lastMoveEventInfo : Es(c, this.transformPagePoint), this.history);
        this.startEvent && f && f(u, g), d && d(u, g);
      }),
      !Yh(t))
    )
      return;
    (this.handlers = n), (this.transformPagePoint = r);
    const i = $o(t),
      o = Es(i, this.transformPagePoint),
      { point: s } = o,
      { timestamp: l } = W;
    this.history = [{ ...s, timestamp: l }];
    const { onSessionStart: a } = n;
    a && a(t, Vs(o, this.history)),
      (this.removeListeners = Bt(
        mt(window, "pointermove", this.handlePointerMove),
        mt(window, "pointerup", this.handlePointerUp),
        mt(window, "pointercancel", this.handlePointerUp)
      ));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), wt(this.updatePoint);
  }
}
function Es(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Lc(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Vs({ point: e }, t) {
  return { point: e, delta: Lc(e, jp(t)), offset: Lc(e, l1(t)), velocity: a1(t, 0.1) };
}
function l1(e) {
  return e[0];
}
function jp(e) {
  return e[e.length - 1];
}
function a1(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const i = jp(e);
  for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > Ut(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  const o = gt(i.timestamp - r.timestamp);
  if (o === 0) return { x: 0, y: 0 };
  const s = { x: (i.x - r.x) / o, y: (i.y - r.y) / o };
  return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s;
}
function Re(e) {
  return e.max - e.min;
}
function Al(e, t = 0, n = 0.01) {
  return Math.abs(e - t) <= n;
}
function Dc(e, t, n, r = 0.5) {
  (e.origin = r),
    (e.originPoint = G(t.min, t.max, e.origin)),
    (e.scale = Re(n) / Re(t)),
    (Al(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
    (e.translate = G(n.min, n.max, e.origin) - e.originPoint),
    (Al(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function Dr(e, t, n, r) {
  Dc(e.x, t.x, n.x, r ? r.originX : void 0), Dc(e.y, t.y, n.y, r ? r.originY : void 0);
}
function Mc(e, t, n) {
  (e.min = n.min + t.min), (e.max = e.min + Re(t));
}
function u1(e, t, n) {
  Mc(e.x, t.x, n.x), Mc(e.y, t.y, n.y);
}
function Ac(e, t, n) {
  (e.min = t.min - n.min), (e.max = e.min + Re(t));
}
function Mr(e, t, n) {
  Ac(e.x, t.x, n.x), Ac(e.y, t.y, n.y);
}
function c1(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? G(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? G(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function Nc(e, t, n) {
  return { min: t !== void 0 ? e.min + t : void 0, max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0 };
}
function f1(e, { top: t, left: n, bottom: r, right: i }) {
  return { x: Nc(e.x, n, i), y: Nc(e.y, t, r) };
}
function Rc(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function d1(e, t) {
  return { x: Rc(e.x, t.x), y: Rc(e.y, t.y) };
}
function h1(e, t) {
  let n = 0.5;
  const r = Re(e),
    i = Re(t);
  return i > r ? (n = Jr(t.min, t.max - r, e.min)) : r > i && (n = Jr(e.min, e.max - i, t.min)), Kt(0, 1, n);
}
function p1(e, t) {
  const n = {};
  return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n;
}
const Nl = 0.35;
function m1(e = Nl) {
  return e === !1 ? (e = 0) : e === !0 && (e = Nl), { x: jc(e, "left", "right"), y: jc(e, "top", "bottom") };
}
function jc(e, t, n) {
  return { min: _c(e, t), max: _c(e, n) };
}
function _c(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const Oc = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  Fn = () => ({ x: Oc(), y: Oc() }),
  Fc = () => ({ min: 0, max: 0 }),
  te = () => ({ x: Fc(), y: Fc() });
function nt(e) {
  return [e("x"), e("y")];
}
function _p({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function g1({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function y1(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function Ls(e) {
  return e === void 0 || e === 1;
}
function Rl({ scale: e, scaleX: t, scaleY: n }) {
  return !Ls(e) || !Ls(t) || !Ls(n);
}
function rn(e) {
  return Rl(e) || Op(e) || e.z || e.rotate || e.rotateX || e.rotateY;
}
function Op(e) {
  return zc(e.x) || zc(e.y);
}
function zc(e) {
  return e && e !== "0%";
}
function So(e, t, n) {
  const r = e - n,
    i = t * r;
  return n + i;
}
function Ic(e, t, n, r, i) {
  return i !== void 0 && (e = So(e, i, r)), So(e, n, r) + t;
}
function jl(e, t = 0, n = 1, r, i) {
  (e.min = Ic(e.min, t, n, r, i)), (e.max = Ic(e.max, t, n, r, i));
}
function Fp(e, { x: t, y: n }) {
  jl(e.x, t.translate, t.scale, t.originPoint), jl(e.y, n.translate, n.scale, n.originPoint);
}
function v1(e, t, n, r = !1) {
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
        zn(e, { x: -o.scroll.offset.x, y: -o.scroll.offset.y }),
      s && ((t.x *= s.x.scale), (t.y *= s.y.scale), Fp(e, s)),
      r && rn(o.latestValues) && zn(e, o.latestValues));
  }
  (t.x = Bc(t.x)), (t.y = Bc(t.y));
}
function Bc(e) {
  return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999 ? e : 1;
}
function Vt(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function Uc(e, t, [n, r, i]) {
  const o = t[i] !== void 0 ? t[i] : 0.5,
    s = G(e.min, e.max, o);
  jl(e, t[n], t[r], s, t.scale);
}
const x1 = ["x", "scaleX", "originX"],
  S1 = ["y", "scaleY", "originY"];
function zn(e, t) {
  Uc(e.x, t, x1), Uc(e.y, t, S1);
}
function zp(e, t) {
  return _p(y1(e.getBoundingClientRect(), t));
}
function w1(e, t, n) {
  const r = zp(e, n),
    { scroll: i } = t;
  return i && (Vt(r.x, i.offset.x), Vt(r.y, i.offset.y)), r;
}
const P1 = new WeakMap();
class k1 {
  constructor(t) {
    (this.openGlobalLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = te()),
      (this.visualElement = t);
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1) return;
    const i = (a) => {
        this.stopAnimation(), n && this.snapToCursor($o(a, "page").point);
      },
      o = (a, u) => {
        const { drag: c, dragPropagation: f, onDragStart: d } = this.getProps();
        if (
          c &&
          !f &&
          (this.openGlobalLock && this.openGlobalLock(), (this.openGlobalLock = Zh(c)), !this.openGlobalLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0), (this.visualElement.projection.target = void 0)),
          nt((y) => {
            let x = this.getAxisMotionValue(y).get() || 0;
            if (lt.test(x)) {
              const { projection: E } = this.visualElement;
              if (E && E.layout) {
                const m = E.layout.layoutBox[y];
                m && (x = Re(m) * (parseFloat(x) / 100));
              }
            }
            this.originPoint[y] = x;
          }),
          d && Q.update(() => d(a, u), !1, !0);
        const { animationState: g } = this.visualElement;
        g && g.setActive("whileDrag", !0);
      },
      s = (a, u) => {
        const { dragPropagation: c, dragDirectionLock: f, onDirectionLock: d, onDrag: g } = this.getProps();
        if (!c && !this.openGlobalLock) return;
        const { offset: y } = u;
        if (f && this.currentDirection === null) {
          (this.currentDirection = C1(y)), this.currentDirection !== null && d && d(this.currentDirection);
          return;
        }
        this.updateAxis("x", u.point, y), this.updateAxis("y", u.point, y), this.visualElement.render(), g && g(a, u);
      },
      l = (a, u) => this.stop(a, u);
    this.panSession = new Rp(
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
    o && Q.update(() => o(t, n));
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
    if (!r || !Vi(t, i, this.currentDirection)) return;
    const o = this.getAxisMotionValue(t);
    let s = this.originPoint[t] + r[t];
    this.constraints && this.constraints[t] && (s = c1(s, this.constraints[t], this.elastic[t])), o.set(s);
  }
  resolveConstraints() {
    const { dragConstraints: t, dragElastic: n } = this.getProps(),
      { layout: r } = this.visualElement.projection || {},
      i = this.constraints;
    t && _n(t)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : t && r
      ? (this.constraints = f1(r.layoutBox, t))
      : (this.constraints = !1),
      (this.elastic = m1(n)),
      i !== this.constraints &&
        r &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        nt((o) => {
          this.getAxisMotionValue(o) && (this.constraints[o] = p1(r.layoutBox[o], this.constraints[o]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !_n(t)) return !1;
    const r = t.current,
      { projection: i } = this.visualElement;
    if (!i || !i.layout) return !1;
    const o = w1(r, i.root, this.visualElement.getTransformPagePoint());
    let s = d1(i.layout.layoutBox, o);
    if (n) {
      const l = n(g1(s));
      (this.hasMutatedConstraints = !!l), l && (s = _p(l));
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
      u = nt((c) => {
        if (!Vi(c, n, this.currentDirection)) return;
        let f = (a && a[c]) || {};
        s && (f = { min: 0, max: 0 });
        const d = i ? 200 : 1e6,
          g = i ? 40 : 1e7,
          y = {
            type: "inertia",
            velocity: r ? t[c] : 0,
            bounceStiffness: d,
            bounceDamping: g,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...o,
            ...f,
          };
        return this.startAxisValueAnimation(c, y);
      });
    return Promise.all(u).then(l);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return r.start(Ya(t, r, 0, n));
  }
  stopAnimation() {
    nt((t) => this.getAxisMotionValue(t).stop());
  }
  getAxisMotionValue(t) {
    const n = "_drag" + t.toUpperCase(),
      r = this.visualElement.getProps(),
      i = r[n];
    return i || this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0);
  }
  snapToCursor(t) {
    nt((n) => {
      const { drag: r } = this.getProps();
      if (!Vi(n, r, this.currentDirection)) return;
      const { projection: i } = this.visualElement,
        o = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: s, max: l } = i.layout.layoutBox[n];
        o.set(t[n] - G(s, l, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!_n(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    nt((s) => {
      const l = this.getAxisMotionValue(s);
      if (l) {
        const a = l.get();
        i[s] = h1({ min: a, max: a }, this.constraints[s]);
      }
    });
    const { transformTemplate: o } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = o ? o({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      nt((s) => {
        if (!Vi(s, t, null)) return;
        const l = this.getAxisMotionValue(s),
          { min: a, max: u } = this.constraints[s];
        l.set(G(a, u, i[s]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    P1.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = mt(t, "pointerdown", (a) => {
        const { drag: u, dragListener: c = !0 } = this.getProps();
        u && c && this.start(a);
      }),
      r = () => {
        const { dragConstraints: a } = this.getProps();
        _n(a) && (this.constraints = this.resolveRefConstraints());
      },
      { projection: i } = this.visualElement,
      o = i.addEventListener("measure", r);
    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), r();
    const s = ht(window, "resize", () => this.scalePositionWithinConstraints()),
      l = i.addEventListener("didUpdate", ({ delta: a, hasLayoutChanged: u }) => {
        this.isDragging &&
          u &&
          (nt((c) => {
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
        dragElastic: s = Nl,
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
function Vi(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function C1(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n;
}
class T1 extends Zt {
  constructor(t) {
    super(t), (this.removeGroupControls = ie), (this.removeListeners = ie), (this.controls = new k1(t));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || ie);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const $c = (e) => (t, n) => {
  e && Q.update(() => e(t, n));
};
class E1 extends Zt {
  constructor() {
    super(...arguments), (this.removePointerDownListener = ie);
  }
  onPointerDown(t) {
    this.session = new Rp(t, this.createPanHandlers(), { transformPagePoint: this.node.getTransformPagePoint() });
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: i } = this.node.getProps();
    return {
      onSessionStart: $c(t),
      onStart: $c(n),
      onMove: r,
      onEnd: (o, s) => {
        delete this.session, i && Q.update(() => i(o, s));
      },
    };
  }
  mount() {
    this.removePointerDownListener = mt(this.node.current, "pointerdown", (t) => this.onPointerDown(t));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
function V1() {
  const e = D.useContext(Na);
  if (e === null) return [!0, null];
  const { isPresent: t, onExitComplete: n, register: r } = e,
    i = D.useId();
  return D.useEffect(() => r(i), []), !t && n ? [!1, () => n && n(i)] : [!0];
}
const Ui = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function Hc(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const dr = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (M.test(e)) e = parseFloat(e);
        else return e;
      const n = Hc(e, t.target.x),
        r = Hc(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  L1 = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        i = Gt.parse(e);
      if (i.length > 5) return r;
      const o = Gt.createTransformer(e),
        s = typeof i[0] != "number" ? 1 : 0,
        l = n.x.scale * t.x,
        a = n.y.scale * t.y;
      (i[0 + s] /= l), (i[1 + s] /= a);
      const u = G(l, a, 0.5);
      return typeof i[2 + s] == "number" && (i[2 + s] /= u), typeof i[3 + s] == "number" && (i[3 + s] /= u), o(i);
    },
  };
class D1 extends it.Component {
  componentDidMount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: i } = this.props,
      { projection: o } = t;
    _g(M1),
      o &&
        (n.group && n.group.add(o),
        r && r.register && i && r.register(o),
        o.root.didUpdate(),
        o.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        o.setOptions({ ...o.options, onExitComplete: () => this.safeToRemove() })),
      (Ui.hasEverUpdated = !0);
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
              Q.postRender(() => {
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
function Ip(e) {
  const [t, n] = V1(),
    r = D.useContext(Rh);
  return it.createElement(D1, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: D.useContext(jh),
    isPresent: t,
    safeToRemove: n,
  });
}
const M1 = {
    borderRadius: {
      ...dr,
      applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"],
    },
    borderTopLeftRadius: dr,
    borderTopRightRadius: dr,
    borderBottomLeftRadius: dr,
    borderBottomRightRadius: dr,
    boxShadow: L1,
  },
  Bp = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  A1 = Bp.length,
  Wc = (e) => (typeof e == "string" ? parseFloat(e) : e),
  Kc = (e) => typeof e == "number" || M.test(e);
function N1(e, t, n, r, i, o) {
  i
    ? ((e.opacity = G(0, n.opacity !== void 0 ? n.opacity : 1, R1(r))),
      (e.opacityExit = G(t.opacity !== void 0 ? t.opacity : 1, 0, j1(r))))
    : o && (e.opacity = G(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
  for (let s = 0; s < A1; s++) {
    const l = `border${Bp[s]}Radius`;
    let a = Gc(t, l),
      u = Gc(n, l);
    if (a === void 0 && u === void 0) continue;
    a || (a = 0),
      u || (u = 0),
      a === 0 || u === 0 || Kc(a) === Kc(u)
        ? ((e[l] = Math.max(G(Wc(a), Wc(u), r), 0)), (lt.test(u) || lt.test(a)) && (e[l] += "%"))
        : (e[l] = u);
  }
  (t.rotate || n.rotate) && (e.rotate = G(t.rotate || 0, n.rotate || 0, r));
}
function Gc(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const R1 = Up(0, 0.5, Wa),
  j1 = Up(0.5, 0.95, ie);
function Up(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(Jr(e, t, r)));
}
function Qc(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function Fe(e, t) {
  Qc(e.x, t.x), Qc(e.y, t.y);
}
function Yc(e, t, n, r, i) {
  return (e -= t), (e = So(e, 1 / n, r)), i !== void 0 && (e = So(e, 1 / i, r)), e;
}
function _1(e, t = 0, n = 1, r = 0.5, i, o = e, s = e) {
  if ((lt.test(t) && ((t = parseFloat(t)), (t = G(s.min, s.max, t / 100) - s.min)), typeof t != "number")) return;
  let l = G(o.min, o.max, r);
  e === o && (l -= t), (e.min = Yc(e.min, t, n, l, i)), (e.max = Yc(e.max, t, n, l, i));
}
function Xc(e, t, [n, r, i], o, s) {
  _1(e, t[n], t[r], t[i], t.scale, o, s);
}
const O1 = ["x", "scaleX", "originX"],
  F1 = ["y", "scaleY", "originY"];
function Zc(e, t, n, r) {
  Xc(e.x, t, O1, n ? n.x : void 0, r ? r.x : void 0), Xc(e.y, t, F1, n ? n.y : void 0, r ? r.y : void 0);
}
function Jc(e) {
  return e.translate === 0 && e.scale === 1;
}
function $p(e) {
  return Jc(e.x) && Jc(e.y);
}
function _l(e, t) {
  return e.x.min === t.x.min && e.x.max === t.x.max && e.y.min === t.y.min && e.y.max === t.y.max;
}
function qc(e) {
  return Re(e.x) / Re(e.y);
}
class z1 {
  constructor() {
    this.members = [];
  }
  add(t) {
    Xa(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if ((Za(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead)) {
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
function bc(e, t, n) {
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
const I1 = (e, t) => e.depth - t.depth;
class B1 {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(t) {
    Xa(this.children, t), (this.isDirty = !0);
  }
  remove(t) {
    Za(this.children, t), (this.isDirty = !0);
  }
  forEach(t) {
    this.isDirty && this.children.sort(I1), (this.isDirty = !1), this.children.forEach(t);
  }
}
function U1(e, t) {
  const n = performance.now(),
    r = ({ timestamp: i }) => {
      const o = i - n;
      o >= t && (wt(r), e(o - t));
    };
  return Q.read(r, !0), () => wt(r);
}
function $1(e) {
  window.MotionDebug && window.MotionDebug.record(e);
}
function H1(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function W1(e, t, n) {
  const r = Ve(e) ? e : bn(e);
  return r.start(Ya("", r, t, n)), r.animation;
}
const ef = ["", "X", "Y", "Z"],
  tf = 1e3;
let K1 = 0;
const on = { type: "projectionFrame", totalNodes: 0, resolvedTargetDeltas: 0, recalculatedProjection: 0 };
function Hp({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: i }) {
  return class {
    constructor(s = {}, l = t == null ? void 0 : t()) {
      (this.id = K1++),
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
          (on.totalNodes = on.resolvedTargetDeltas = on.recalculatedProjection = 0),
            this.nodes.forEach(Y1),
            this.nodes.forEach(b1),
            this.nodes.forEach(e2),
            this.nodes.forEach(X1),
            $1(on);
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
      this.root === this && (this.nodes = new B1());
    }
    addEventListener(s, l) {
      return this.eventHandlers.has(s) || this.eventHandlers.set(s, new Ja()), this.eventHandlers.get(s).add(l);
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
      (this.isSVG = H1(s)), (this.instance = s);
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
            (f = U1(d, 250)),
            Ui.hasAnimatedSinceResize && ((Ui.hasAnimatedSinceResize = !1), this.nodes.forEach(rf));
        });
      }
      a && this.root.registerSharedNode(a, this),
        this.options.animate !== !1 &&
          c &&
          (a || u) &&
          this.addEventListener(
            "didUpdate",
            ({ delta: f, hasLayoutChanged: d, hasRelativeTargetChanged: g, layout: y }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const x = this.options.transition || c.getDefaultTransition() || o2,
                { onLayoutAnimationStart: E, onLayoutAnimationComplete: m } = c.getProps(),
                h = !this.targetLayout || !_l(this.targetLayout, y) || g,
                p = !d && g;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                p ||
                (d && (h || !this.currentAnimation))
              ) {
                this.resumeFrom && ((this.resumingFrom = this.resumeFrom), (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(f, p);
                const v = { ...Dp(x, "layout"), onPlay: E, onComplete: m };
                (c.shouldReduceMotion || this.options.layoutRoot) && ((v.delay = 0), (v.type = !1)),
                  this.startAnimation(v);
              } else d || rf(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
              this.targetLayout = y;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const s = this.getStack();
      s && s.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        wt(this.updateProjection);
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
      this.isUpdateBlocked() || ((this.isUpdating = !0), this.nodes && this.nodes.forEach(t2), this.animationId++);
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
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(nf);
        return;
      }
      this.isUpdating || this.nodes.forEach(J1),
        (this.isUpdating = !1),
        this.nodes.forEach(q1),
        this.nodes.forEach(G1),
        this.nodes.forEach(Q1),
        this.clearAllSnapshots();
      const l = performance.now();
      (W.delta = Kt(0, 1e3 / 60, l - W.timestamp)),
        (W.timestamp = l),
        (W.isProcessing = !0),
        Kn.update.process(W),
        Kn.preRender.process(W),
        Kn.render.process(W),
        (W.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled || ((this.updateScheduled = !0), queueMicrotask(() => this.update()));
    }
    clearAllSnapshots() {
      this.nodes.forEach(Z1), this.sharedNodes.forEach(n2);
    }
    scheduleUpdateProjection() {
      Q.preRender(this.updateProjection, !1, !0);
    }
    scheduleCheckAfterUnmount() {
      Q.postRender(() => {
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
        (this.layoutCorrected = te()),
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
        l = this.projectionDelta && !$p(this.projectionDelta),
        a = this.getTransformTemplate(),
        u = a ? a(this.latestValues, "") : void 0,
        c = u !== this.prevTransformTemplateValue;
      s &&
        (l || rn(this.latestValues) || c) &&
        (i(this.instance, u), (this.shouldResetTransform = !1), this.scheduleRender());
    }
    measure(s = !0) {
      const l = this.measurePageBox();
      let a = this.removeElementScroll(l);
      return (
        s && (a = this.removeTransform(a)),
        s2(a),
        { animationId: this.root.animationId, measuredBox: l, layoutBox: a, latestValues: {}, source: this.id }
      );
    }
    measurePageBox() {
      const { visualElement: s } = this.options;
      if (!s) return te();
      const l = s.measureViewportBox(),
        { scroll: a } = this.root;
      return a && (Vt(l.x, a.offset.x), Vt(l.y, a.offset.y)), l;
    }
    removeElementScroll(s) {
      const l = te();
      Fe(l, s);
      for (let a = 0; a < this.path.length; a++) {
        const u = this.path[a],
          { scroll: c, options: f } = u;
        if (u !== this.root && c && f.layoutScroll) {
          if (c.isRoot) {
            Fe(l, s);
            const { scroll: d } = this.root;
            d && (Vt(l.x, -d.offset.x), Vt(l.y, -d.offset.y));
          }
          Vt(l.x, c.offset.x), Vt(l.y, c.offset.y);
        }
      }
      return l;
    }
    applyTransform(s, l = !1) {
      const a = te();
      Fe(a, s);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !l &&
          c.options.layoutScroll &&
          c.scroll &&
          c !== c.root &&
          zn(a, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
          rn(c.latestValues) && zn(a, c.latestValues);
      }
      return rn(this.latestValues) && zn(a, this.latestValues), a;
    }
    removeTransform(s) {
      const l = te();
      Fe(l, s);
      for (let a = 0; a < this.path.length; a++) {
        const u = this.path[a];
        if (!u.instance || !rn(u.latestValues)) continue;
        Rl(u.latestValues) && u.updateSnapshot();
        const c = te(),
          f = u.measurePageBox();
        Fe(c, f), Zc(l, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return rn(this.latestValues) && Zc(l, this.latestValues), l;
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
        this.relativeParent.resolvedRelativeTargetAt !== W.timestamp &&
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
        if (((this.resolvedRelativeTargetAt = W.timestamp), !this.targetDelta && !this.relativeTarget)) {
          const g = this.getClosestProjectingParent();
          g && g.layout && this.animationProgress !== 1
            ? ((this.relativeParent = g),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = te()),
              (this.relativeTargetOrigin = te()),
              Mr(this.relativeTargetOrigin, this.layout.layoutBox, g.layout.layoutBox),
              Fe(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target || ((this.target = te()), (this.targetWithTransforms = te())),
            this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                u1(this.target, this.relativeTarget, this.relativeParent.target))
              : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : Fe(this.target, this.layout.layoutBox),
                Fp(this.target, this.targetDelta))
              : Fe(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const g = this.getClosestProjectingParent();
            g &&
            !!g.resumingFrom == !!this.resumingFrom &&
            !g.options.layoutScroll &&
            g.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = g),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = te()),
                (this.relativeTargetOrigin = te()),
                Mr(this.relativeTargetOrigin, this.target, g.target),
                Fe(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          on.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || Rl(this.parent.latestValues) || Op(this.parent.latestValues)))
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
        this.resolvedRelativeTargetAt === W.timestamp && (u = !1),
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
      Fe(this.layoutCorrected, this.layout.layoutBox);
      const d = this.treeScale.x,
        g = this.treeScale.y;
      v1(this.layoutCorrected, this.treeScale, this.path, a),
        l.layout && !l.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (l.target = l.layout.layoutBox);
      const { target: y } = l;
      if (!y) {
        this.projectionTransform &&
          ((this.projectionDelta = Fn()), (this.projectionTransform = "none"), this.scheduleRender());
        return;
      }
      this.projectionDelta || ((this.projectionDelta = Fn()), (this.projectionDeltaWithTransform = Fn()));
      const x = this.projectionTransform;
      Dr(this.projectionDelta, this.layoutCorrected, y, this.latestValues),
        (this.projectionTransform = bc(this.projectionDelta, this.treeScale)),
        (this.projectionTransform !== x || this.treeScale.x !== d || this.treeScale.y !== g) &&
          ((this.hasProjected = !0), this.scheduleRender(), this.notifyListeners("projectionUpdate", y)),
        on.recalculatedProjection++;
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
        f = Fn();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !l);
      const d = te(),
        g = a ? a.source : void 0,
        y = this.layout ? this.layout.source : void 0,
        x = g !== y,
        E = this.getStack(),
        m = !E || E.members.length <= 1,
        h = !!(x && !m && this.options.crossfade === !0 && !this.path.some(i2));
      this.animationProgress = 0;
      let p;
      (this.mixTargetDelta = (v) => {
        const w = v / 1e3;
        of(f.x, s.x, w),
          of(f.y, s.y, w),
          this.setTargetDelta(f),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Mr(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            r2(this.relativeTarget, this.relativeTargetOrigin, d, w),
            p && _l(this.relativeTarget, p) && (this.isProjectionDirty = !1),
            p || (p = te()),
            Fe(p, this.relativeTarget)),
          x && ((this.animationValues = c), N1(c, u, this.latestValues, w, h, m)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = w);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(s) {
      this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation && (wt(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = Q.update(() => {
          (Ui.hasAnimatedSinceResize = !0),
            (this.currentAnimation = W1(0, tf, {
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
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(tf), this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const s = this.getLead();
      let { targetWithTransforms: l, target: a, layout: u, latestValues: c } = s;
      if (!(!l || !a || !u)) {
        if (this !== s && this.layout && u && Wp(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
          a = this.target || te();
          const f = Re(this.layout.layoutBox.x);
          (a.x.min = s.target.x.min), (a.x.max = a.x.min + f);
          const d = Re(this.layout.layoutBox.y);
          (a.y.min = s.target.y.min), (a.y.max = a.y.min + d);
        }
        Fe(l, a), zn(l, c), Dr(this.projectionDeltaWithTransform, this.layoutCorrected, l, c);
      }
    }
    registerSharedNode(s, l) {
      this.sharedNodes.has(s) || this.sharedNodes.set(s, new z1()), this.sharedNodes.get(s).add(l);
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
      for (let c = 0; c < ef.length; c++) {
        const f = "rotate" + ef[c];
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
          (u.pointerEvents = Bi(s.pointerEvents) || ""),
          (u.transform = c ? c(this.latestValues, "") : "none"),
          u
        );
      const f = this.getLead();
      if (!this.projectionDelta || !this.layout || !f.target) {
        const x = {};
        return (
          this.options.layoutId &&
            ((x.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1),
            (x.pointerEvents = Bi(s.pointerEvents) || "")),
          this.hasProjected &&
            !rn(this.latestValues) &&
            ((x.transform = c ? c({}, "") : "none"), (this.hasProjected = !1)),
          x
        );
      }
      const d = f.animationValues || f.latestValues;
      this.applyTransformsToTarget(),
        (u.transform = bc(this.projectionDeltaWithTransform, this.treeScale, d)),
        c && (u.transform = c(d, u.transform));
      const { x: g, y } = this.projectionDelta;
      (u.transformOrigin = `${g.origin * 100}% ${y.origin * 100}% 0`),
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
      for (const x in ho) {
        if (d[x] === void 0) continue;
        const { correct: E, applyTo: m } = ho[x],
          h = u.transform === "none" ? d[x] : E(d[x], f);
        if (m) {
          const p = m.length;
          for (let v = 0; v < p; v++) u[m[v]] = h;
        } else u[x] = h;
      }
      return this.options.layoutId && (u.pointerEvents = f === this ? Bi(s.pointerEvents) || "" : "none"), u;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((s) => {
        var l;
        return (l = s.currentAnimation) === null || l === void 0 ? void 0 : l.stop();
      }),
        this.root.nodes.forEach(nf),
        this.root.sharedNodes.clear();
    }
  };
}
function G1(e) {
  e.updateLayout();
}
function Q1(e) {
  var t;
  const n = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: i } = e.layout,
      { animationType: o } = e.options,
      s = n.source !== e.layout.source;
    o === "size"
      ? nt((f) => {
          const d = s ? n.measuredBox[f] : n.layoutBox[f],
            g = Re(d);
          (d.min = r[f].min), (d.max = d.min + g);
        })
      : Wp(o, n.layoutBox, r) &&
        nt((f) => {
          const d = s ? n.measuredBox[f] : n.layoutBox[f],
            g = Re(r[f]);
          (d.max = d.min + g),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0), (e.relativeTarget[f].max = e.relativeTarget[f].min + g));
        });
    const l = Fn();
    Dr(l, r, n.layoutBox);
    const a = Fn();
    s ? Dr(a, e.applyTransform(i, !0), n.measuredBox) : Dr(a, r, n.layoutBox);
    const u = !$p(l);
    let c = !1;
    if (!e.resumeFrom) {
      const f = e.getClosestProjectingParent();
      if (f && !f.resumeFrom) {
        const { snapshot: d, layout: g } = f;
        if (d && g) {
          const y = te();
          Mr(y, n.layoutBox, d.layoutBox);
          const x = te();
          Mr(x, r, g.layoutBox),
            _l(y, x) || (c = !0),
            f.options.layoutRoot && ((e.relativeTarget = x), (e.relativeTargetOrigin = y), (e.relativeParent = f));
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
function Y1(e) {
  on.totalNodes++,
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
function X1(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function Z1(e) {
  e.clearSnapshot();
}
function nf(e) {
  e.clearMeasurements();
}
function J1(e) {
  e.isLayoutDirty = !1;
}
function q1(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function rf(e) {
  e.finishAnimation(), (e.targetDelta = e.relativeTarget = e.target = void 0), (e.isProjectionDirty = !0);
}
function b1(e) {
  e.resolveTargetDelta();
}
function e2(e) {
  e.calcProjection();
}
function t2(e) {
  e.resetRotation();
}
function n2(e) {
  e.removeLeadSnapshot();
}
function of(e, t, n) {
  (e.translate = G(t.translate, 0, n)),
    (e.scale = G(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function sf(e, t, n, r) {
  (e.min = G(t.min, n.min, r)), (e.max = G(t.max, n.max, r));
}
function r2(e, t, n, r) {
  sf(e.x, t.x, n.x, r), sf(e.y, t.y, n.y, r);
}
function i2(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const o2 = { duration: 0.45, ease: [0.4, 0, 0.1, 1] };
function lf(e) {
  (e.min = Math.round(e.min)), (e.max = Math.round(e.max));
}
function s2(e) {
  lf(e.x), lf(e.y);
}
function Wp(e, t, n) {
  return e === "position" || (e === "preserve-aspect" && !Al(qc(t), qc(n), 0.2));
}
const l2 = Hp({
    attachResizeListener: (e, t) => ht(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  Ds = { current: void 0 },
  Kp = Hp({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!Ds.current) {
        const e = new l2({});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (Ds.current = e);
      }
      return Ds.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  a2 = { pan: { Feature: E1 }, drag: { Feature: T1, ProjectionNode: Kp, MeasureLayout: Ip } },
  u2 = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function c2(e) {
  const t = u2.exec(e);
  if (!t) return [,];
  const [, n, r] = t;
  return [n, r];
}
function Ol(e, t, n = 1) {
  const [r, i] = c2(e);
  if (!r) return;
  const o = window.getComputedStyle(t).getPropertyValue(r);
  return o ? o.trim() : kl(i) ? Ol(i, t, n + 1) : i;
}
function f2(e, { ...t }, n) {
  const r = e.current;
  if (!(r instanceof Element)) return { target: t, transitionEnd: n };
  n && (n = { ...n }),
    e.values.forEach((i) => {
      const o = i.get();
      if (!kl(o)) return;
      const s = Ol(o, r);
      s && i.set(s);
    });
  for (const i in t) {
    const o = t[i];
    if (!kl(o)) continue;
    const s = Ol(o, r);
    s && ((t[i] = s), n || (n = {}), n[i] === void 0 && (n[i] = o));
  }
  return { target: t, transitionEnd: n };
}
const d2 = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y", "translateX", "translateY"]),
  Gp = (e) => d2.has(e),
  h2 = (e) => Object.keys(e).some(Gp),
  af = (e) => e === Sn || e === M,
  uf = (e, t) => parseFloat(e.split(", ")[t]),
  cf =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === "none" || !r) return 0;
      const i = r.match(/^matrix3d\((.+)\)$/);
      if (i) return uf(i[1], t);
      {
        const o = r.match(/^matrix\((.+)\)$/);
        return o ? uf(o[1], e) : 0;
      }
    },
  p2 = new Set(["x", "y", "z"]),
  m2 = ri.filter((e) => !p2.has(e));
function g2(e) {
  const t = [];
  return (
    m2.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t.length && e.render(),
    t
  );
}
const ff = {
    width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
    height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
      e.max - e.min - parseFloat(t) - parseFloat(n),
    top: (e, { top: t }) => parseFloat(t),
    left: (e, { left: t }) => parseFloat(t),
    bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
    right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
    x: cf(4, 13),
    y: cf(5, 14),
  },
  y2 = (e, t, n) => {
    const r = t.measureViewportBox(),
      i = t.current,
      o = getComputedStyle(i),
      { display: s } = o,
      l = {};
    s === "none" && t.setStaticValue("display", e.display || "block"),
      n.forEach((u) => {
        l[u] = ff[u](r, o);
      }),
      t.render();
    const a = t.measureViewportBox();
    return (
      n.forEach((u) => {
        const c = t.getValue(u);
        c && c.jump(l[u]), (e[u] = ff[u](a, o));
      }),
      e
    );
  },
  v2 = (e, t, n = {}, r = {}) => {
    (t = { ...t }), (r = { ...r });
    const i = Object.keys(t).filter(Gp);
    let o = [],
      s = !1;
    const l = [];
    if (
      (i.forEach((a) => {
        const u = e.getValue(a);
        if (!e.hasValue(a)) return;
        let c = n[a],
          f = fr(c);
        const d = t[a];
        let g;
        if (mo(d)) {
          const y = d.length,
            x = d[0] === null ? 1 : 0;
          (c = d[x]), (f = fr(c));
          for (let E = x; E < y && d[E] !== null; E++) g ? Ha(fr(d[E]) === g) : (g = fr(d[E]));
        } else g = fr(d);
        if (f !== g)
          if (af(f) && af(g)) {
            const y = u.get();
            typeof y == "string" && u.set(parseFloat(y)),
              typeof d == "string" ? (t[a] = parseFloat(d)) : Array.isArray(d) && g === M && (t[a] = d.map(parseFloat));
          } else
            f != null && f.transform && g != null && g.transform && (c === 0 || d === 0)
              ? c === 0
                ? u.set(g.transform(c))
                : (t[a] = f.transform(d))
              : (s || ((o = g2(e)), (s = !0)), l.push(a), (r[a] = r[a] !== void 0 ? r[a] : t[a]), u.jump(d));
      }),
      l.length)
    ) {
      const a = l.indexOf("height") >= 0 ? window.pageYOffset : null,
        u = y2(t, e, l);
      return (
        o.length &&
          o.forEach(([c, f]) => {
            e.getValue(c).set(f);
          }),
        e.render(),
        zo && a !== null && window.scrollTo({ top: a }),
        { target: u, transitionEnd: r }
      );
    } else return { target: t, transitionEnd: r };
  };
function x2(e, t, n, r) {
  return h2(t) ? v2(e, t, n, r) : { target: t, transitionEnd: r };
}
const S2 = (e, t, n, r) => {
    const i = f2(e, t, r);
    return (t = i.target), (r = i.transitionEnd), x2(e, t, n, r);
  },
  Fl = { current: null },
  Qp = { current: !1 };
function w2() {
  if (((Qp.current = !0), !!zo))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (Fl.current = e.matches);
      e.addListener(t), t();
    } else Fl.current = !1;
}
function P2(e, t, n) {
  const { willChange: r } = t;
  for (const i in t) {
    const o = t[i],
      s = n[i];
    if (Ve(o)) e.addValue(i, o), xo(r) && r.add(i);
    else if (Ve(s)) e.addValue(i, bn(o, { owner: e })), xo(r) && r.remove(i);
    else if (s !== o)
      if (e.hasValue(i)) {
        const l = e.getValue(i);
        !l.hasAnimated && l.set(o);
      } else {
        const l = e.getStaticValue(i);
        e.addValue(i, bn(l !== void 0 ? l : o, { owner: e }));
      }
  }
  for (const i in n) t[i] === void 0 && e.removeValue(i);
  return t;
}
const df = new WeakMap(),
  Yp = Object.keys(Xr),
  k2 = Yp.length,
  hf = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete",
  ],
  C2 = ja.length;
class T2 {
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
      (this.scheduleRender = () => Q.render(this.render, !1, !0));
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
      (this.isControllingVariants = Bo(n)),
      (this.isVariantNode = Nh(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current));
    const { willChange: u, ...c } = this.scrapeMotionValuesFromProps(n, {});
    for (const f in c) {
      const d = c[f];
      l[f] !== void 0 && Ve(d) && (d.set(l[f], !1), xo(u) && u.add(f));
    }
  }
  scrapeMotionValuesFromProps(t, n) {
    return {};
  }
  mount(t) {
    (this.current = t),
      df.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
      Qp.current || w2(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Fl.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    df.delete(this.current),
      this.projection && this.projection.unmount(),
      wt(this.notifyUpdate),
      wt(this.render),
      this.valueSubscriptions.forEach((t) => t()),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (const t in this.events) this.events[t].clear();
    for (const t in this.features) this.features[t].unmount();
    this.current = null;
  }
  bindToMotionValue(t, n) {
    const r = xn.has(t),
      i = n.on("change", (s) => {
        (this.latestValues[t] = s),
          this.props.onUpdate && Q.update(this.notifyUpdate, !1, !0),
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
    for (let a = 0; a < k2; a++) {
      const u = Yp[a],
        { isEnabled: c, Feature: f, ProjectionNode: d, MeasureLayout: g } = Xr[u];
      d && (s = d), c(n) && (!this.features[u] && f && (this.features[u] = new f(this)), g && (l = g));
    }
    if (!this.projection && s) {
      this.projection = new s(this.latestValues, this.parent && this.parent.projection);
      const { layoutId: a, layout: u, drag: c, dragConstraints: f, layoutScroll: d, layoutRoot: g } = n;
      this.projection.setOptions({
        layoutId: a,
        layout: u,
        alwaysMeasureLayout: !!c || (f && _n(f)),
        visualElement: this,
        scheduleRender: () => this.scheduleRender(),
        animationType: typeof u == "string" ? u : "both",
        initialPromotionConfig: o,
        layoutScroll: d,
        layoutRoot: g,
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
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : te();
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
    for (let r = 0; r < hf.length; r++) {
      const i = hf[r];
      this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
      const o = t["on" + i];
      o && (this.propEventSubscriptions[i] = this.on(i, o));
    }
    (this.prevMotionValues = P2(this, this.scrapeMotionValuesFromProps(t, this.prevProps), this.prevMotionValues)),
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
    for (let r = 0; r < C2; r++) {
      const i = ja[r],
        o = this.props[i];
      (Yr(o) || o === !1) && (n[i] = o);
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
    return r === void 0 && n !== void 0 && ((r = bn(n, { owner: this })), this.addValue(t, r)), r;
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
          ? (n = $a(this.props, r)) === null || n === void 0
            ? void 0
            : n[t]
          : void 0;
    if (r && i !== void 0) return i;
    const o = this.getBaseTargetFromProps(this.props, t);
    return o !== void 0 && !Ve(o) ? o : this.initialValues[t] !== void 0 && i === void 0 ? void 0 : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new Ja()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class Xp extends T2 {
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
    let s = Kv(r, t || {}, this);
    if ((i && (n && (n = i(n)), r && (r = i(r)), s && (s = i(s))), o)) {
      Hv(this, r, s);
      const l = S2(this, r, s, n);
      (n = l.transitionEnd), (r = l.target);
    }
    return { transition: t, transitionEnd: n, ...r };
  }
}
function E2(e) {
  return window.getComputedStyle(e);
}
class V2 extends Xp {
  readValueFromInstance(t, n) {
    if (xn.has(n)) {
      const r = Qa(n);
      return (r && r.default) || 0;
    } else {
      const r = E2(t),
        i = (Fh(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return zp(t, n);
  }
  build(t, n, r, i) {
    Oa(t, n, r, i.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n) {
    return Ua(t, n);
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    Ve(t) &&
      (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
  renderInstance(t, n, r, i) {
    Hh(t, n, r, i);
  }
}
class L2 extends Xp {
  constructor() {
    super(...arguments), (this.isSVGTag = !1);
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (xn.has(n)) {
      const r = Qa(n);
      return (r && r.default) || 0;
    }
    return (n = Wh.has(n) ? n : Ba(n)), t.getAttribute(n);
  }
  measureInstanceViewportBox() {
    return te();
  }
  scrapeMotionValuesFromProps(t, n) {
    return Gh(t, n);
  }
  build(t, n, r, i) {
    za(t, n, r, this.isSVGTag, i.transformTemplate);
  }
  renderInstance(t, n, r, i) {
    Kh(t, n, r, i);
  }
  mount(t) {
    (this.isSVGTag = Ia(t.tagName)), super.mount(t);
  }
}
const D2 = (e, t) =>
    _a(e) ? new L2(t, { enableHardwareAcceleration: !1 }) : new V2(t, { enableHardwareAcceleration: !0 }),
  M2 = { layout: { ProjectionNode: Kp, MeasureLayout: Ip } },
  A2 = { ...o1, ...Ey, ...a2, ...M2 },
  Be = Rg((e, t) => uy(e, t, A2, D2));
var Zp = { color: void 0, size: void 0, className: void 0, style: void 0, attr: void 0 },
  pf = it.createContext && it.createContext(Zp),
  $t =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        ($t =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++) {
              t = arguments[n];
              for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            }
            return e;
          }),
        $t.apply(this, arguments)
      );
    },
  N2 =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
          t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
      return n;
    };
function Jp(e) {
  return (
    e &&
    e.map(function (t, n) {
      return it.createElement(t.tag, $t({ key: n }, t.attr), Jp(t.child));
    })
  );
}
function at(e) {
  return function (t) {
    return it.createElement(R2, $t({ attr: $t({}, e.attr) }, t), Jp(e.child));
  };
}
function R2(e) {
  var t = function (n) {
    var r = e.attr,
      i = e.size,
      o = e.title,
      s = N2(e, ["attr", "size", "title"]),
      l = i || n.size || "1em",
      a;
    return (
      n.className && (a = n.className),
      e.className && (a = (a ? a + " " : "") + e.className),
      it.createElement(
        "svg",
        $t({ stroke: "currentColor", fill: "currentColor", strokeWidth: "0" }, n.attr, r, s, {
          className: a,
          style: $t($t({ color: e.color || n.color }, n.style), e.style),
          height: l,
          width: l,
          xmlns: "http://www.w3.org/2000/svg",
        }),
        o && it.createElement("title", null, o),
        e.children
      )
    );
  };
  return pf !== void 0
    ? it.createElement(pf.Consumer, null, function (n) {
        return t(n);
      })
    : t(Zp);
}
function j2(e) {
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
function _2(e) {
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
function O2(e) {
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
function F2(e) {
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
function z2(e) {
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
function I2(e) {
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
function mf(e) {
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
const B2 = ({ dollarValue: e, euroValue: t }) => {
    const [n, r] = D.useState(0),
      [i, o] = D.useState(0),
      [s, l] = D.useState(0),
      [a, u] = D.useState(0);
    return S.jsxs(Be.div, {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.5, ease: "easeInOut" },
      className: "calculator-container",
      children: [
        S.jsxs("div", {
          className: "calculator-title",
          children: [S.jsx("h2", { children: "Dólar blue" }), S.jsxs("span", { children: ["1 dólar = $", e, " ARS"] })],
        }),
        S.jsxs("div", {
          className: "conversor-container",
          children: [
            S.jsxs("div", {
              className: "input-container",
              children: [
                S.jsx("div", { className: "coin-container", children: S.jsx(j2, {}) }),
                S.jsx("input", {
                  className: "input",
                  type: "number",
                  onChange: (c) => r(c.target.valueAsNumber),
                  placeholder: "USD",
                  autoFocus: !0,
                  min: 0,
                }),
              ],
            }),
            S.jsxs("div", {
              className: "result-container",
              children: [
                S.jsx("span", { children: "$" }),
                S.jsx("input", {
                  className: "input-result",
                  type: "number",
                  value: isNaN(e * n) ? 0 : e * n,
                  readOnly: !0,
                }),
                S.jsx("span", { children: "ARS" }),
              ],
            }),
          ],
        }),
        S.jsxs("div", {
          className: "conversor-container",
          children: [
            S.jsxs("div", {
              className: "input-container",
              children: [
                S.jsx("div", { className: "coin-container", children: S.jsx(mf, {}) }),
                S.jsx("input", {
                  className: "input",
                  type: "number",
                  onChange: (c) => o(c.target.valueAsNumber),
                  placeholder: "ARS",
                  min: 0,
                }),
              ],
            }),
            S.jsxs("div", {
              className: "result-container",
              children: [
                S.jsx("span", { children: "$" }),
                S.jsx("input", {
                  className: "input-result",
                  type: "number",
                  value: isNaN(i / e) ? 0 : (i / e).toFixed(2),
                  readOnly: !0,
                }),
                S.jsx("span", { children: "USD" }),
              ],
            }),
          ],
        }),
        S.jsx("div", { className: "extension-divider" }),
        S.jsxs("div", {
          className: "calculator-title",
          children: [S.jsx("h2", { children: "Euro blue" }), S.jsxs("span", { children: ["1 euro = $", t, " ARS"] })],
        }),
        S.jsxs("div", {
          className: "conversor-container",
          children: [
            S.jsxs("div", {
              className: "input-container",
              children: [
                S.jsx("div", { className: "coin-container", children: S.jsx(_2, {}) }),
                S.jsx("input", {
                  className: "input",
                  type: "number",
                  onChange: (c) => l(c.target.valueAsNumber),
                  placeholder: "EUR",
                  min: 0,
                }),
              ],
            }),
            S.jsxs("div", {
              className: "result-container",
              children: [
                S.jsx("span", { children: "$" }),
                S.jsx("input", {
                  className: "input-result",
                  type: "number",
                  value: isNaN(t * s) ? 0 : t * s,
                  readOnly: !0,
                }),
                S.jsx("span", { children: "ARS" }),
              ],
            }),
          ],
        }),
        S.jsxs("div", {
          className: "conversor-container",
          children: [
            S.jsxs("div", {
              className: "input-container",
              children: [
                S.jsx("div", { className: "coin-container", children: S.jsx(mf, {}) }),
                S.jsx("input", {
                  className: "input",
                  type: "number",
                  onChange: (c) => u(c.target.valueAsNumber),
                  placeholder: "ARS",
                  min: 0,
                }),
              ],
            }),
            S.jsxs("div", {
              className: "result-container",
              children: [
                S.jsx("span", { children: "$" }),
                S.jsx("input", {
                  className: "input-result",
                  type: "number",
                  value: isNaN(a / t) ? 0 : (a / t).toFixed(2),
                  readOnly: !0,
                }),
                S.jsx("span", { children: "EUR" }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  gf = ({ type: e, officialSellValue: t, OfficialBuyValue: n, BlueSellValue: r, BlueBuyValue: i }) =>
    S.jsxs(Be.div, {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.5, ease: "easeInOut" },
      className: "currency-container",
      children: [
        S.jsxs("div", {
          className: "type-container",
          children: [
            S.jsxs("h2", { children: [e, " oficial"] }),
            S.jsxs("div", {
              className: "price-container",
              children: [
                S.jsx("span", { className: "price-title", children: "Venta:" }),
                S.jsxs(Be.span, {
                  initial: { opacity: 0, x: -20 },
                  animate: { opacity: t ? 1 : 0, x: 0 },
                  transition: { duration: 0.5, ease: "easeInOut" },
                  className: "price-value",
                  children: ["$", Math.round(t), " ARS"],
                }),
              ],
            }),
            S.jsxs("div", {
              className: "price-container",
              children: [
                S.jsx("span", { className: "price-title", children: "Compra:" }),
                S.jsxs(Be.span, {
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
        S.jsxs("div", {
          className: "type-container",
          children: [
            S.jsxs("h2", { children: [e, " blue"] }),
            S.jsxs("div", {
              className: "price-container",
              children: [
                S.jsx("span", { className: "price-title", children: "Venta:" }),
                S.jsxs(Be.span, {
                  initial: { opacity: 0, x: -20 },
                  animate: { opacity: t ? 1 : 0, x: 0 },
                  transition: { duration: 0.5, ease: "easeInOut" },
                  className: "price-value",
                  children: ["$", r, " ARS"],
                }),
              ],
            }),
            S.jsxs("div", {
              className: "price-container",
              children: [
                S.jsx("span", { className: "price-title", children: "Compra:" }),
                S.jsxs(Be.span, {
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
function U2(e) {
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
function $2(e) {
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
function H2(e) {
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
const W2 = () =>
    S.jsxs("footer", {
      className: "extension-footer",
      children: [
        S.jsxs("span", { children: ["Developed by ", S.jsx("span", { id: "name-highlight", children: "Luca" })] }),
        S.jsxs("div", {
          className: "contact-links",
          children: [
            S.jsx("a", { href: "https://github.com/LucaCuello", target: "_blank", children: S.jsx(U2, {}) }),
            S.jsx("a", {
              href: "https://www.linkedin.com/in/luca-cuello41/",
              target: "_blank",
              children: S.jsx($2, {}),
            }),
            S.jsx("a", { href: "https://twitter.com/LucaCuello_", target: "_blank", children: S.jsx(H2, {}) }),
          ],
        }),
      ],
    }),
  K2 = () =>
    S.jsx("header", {
      className: "extension-header",
      children: S.jsx(Be.img, {
        initial: { scale: 0, rotate: 100 },
        animate: { scale: 1, rotate: 0 },
        transition: { duration: 0.4, ease: "easeIn" },
        src: "Logo.png",
        draggable: !1,
        alt: "logo",
      }),
    }),
  G2 = ({ day: e, month: t, year: n, hours: r, minutes: i, calculator: o, euro: s }) =>
    S.jsxs(Be.div, {
      className: "extension-title",
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.5, ease: "easeInOut" },
      children: [
        S.jsx("h1", { children: o ? "Calculadora blue" : "Cotización actual" }),
        S.jsx("span", { children: "Última actualización de cambio:" }),
        S.jsx(Be.span, {
          initial: { opacity: 0 },
          animate: { opacity: s ? 1 : 0 },
          transition: { duration: 0.5, ease: "easeInOut" },
          children: isNaN(e) ? "" : `${e}/${t}/${n} a las ${r}:${i}hs`,
        }),
      ],
    });
function Q2() {
  const [e, t] = D.useState(null),
    [n, r] = D.useState(null),
    [i, o] = D.useState(!1),
    [s, l] = D.useState(!1),
    a = "https://api.bluelytics.com.ar/v2/latest",
    u = "https://dolarapi.com/v1/dolares/",
    c = (v) => {
      localStorage.setItem("IsCalculatorSticky", v.toString());
    },
    f = () => {
      const v = localStorage.getItem("IsCalculatorSticky");
      v && o(v === "true");
    },
    d = () => {
      const v = localStorage.getItem("IsCalculatorSticky");
      if (v) return v === "true";
    };
  D.useEffect(() => {
    const v = async () => {
        try {
          const T = await fetch(a),
            C = await T.json(),
            P = await C;
          t(P);
        } catch (T) {
          console.log(T);
        }
      },
      w = async () => {
        try {
          const T = await fetch(u),
            C = await T.json(),
            P = await C,
            N = P[0],
            A = P[1];
          r({ dolarOficial: N, dolarBlue: A });
        } catch (T) {
          console.log(T);
        }
      };
    f(), v(), w();
  }, []);
  const g = new Date(e == null ? void 0 : e.last_update),
    y = g.getDate(),
    x = g.getMonth() + 1,
    E = g.getFullYear().toString().slice(2),
    m = g.getHours(),
    h = g.getMinutes(),
    p = {
      hidden: { scale: 0 },
      visible: () => ({ scale: 1, transition: { duration: 0.2, ease: "easeIn" } }),
      test: () => ({ opacity: 0, transition: { duration: 0.2, ease: "easeIn" } }),
    };
  return S.jsxs("div", {
    className: "extension-container",
    children: [
      S.jsx(K2, {}),
      S.jsx(G2, { day: y, month: x, year: E, hours: m, minutes: h, calculator: i, euro: e }),
      S.jsx("div", { className: "extension-divider" }),
      i
        ? null
        : S.jsxs(S.Fragment, {
            children: [
              S.jsx(gf, {
                type: "Dólar",
                officialSellValue: n == null ? void 0 : n.dolarOficial.venta,
                OfficialBuyValue: n == null ? void 0 : n.dolarOficial.compra,
                BlueSellValue: n == null ? void 0 : n.dolarBlue.venta,
                BlueBuyValue: n == null ? void 0 : n.dolarBlue.compra,
              }),
              S.jsx("div", { className: "extension-divider" }),
              S.jsx(gf, {
                type: "Euro",
                officialSellValue: e == null ? void 0 : e.oficial_euro.value_sell,
                OfficialBuyValue: e == null ? void 0 : e.oficial_euro.value_buy,
                BlueSellValue: e == null ? void 0 : e.blue_euro.value_sell,
                BlueBuyValue: e == null ? void 0 : e.blue_euro.value_buy,
              }),
            ],
          }),
      i
        ? S.jsx(B2, {
            dollarValue: +(n == null ? void 0 : n.dolarBlue.venta),
            euroValue: +(e == null ? void 0 : e.blue_euro.value_sell),
          })
        : null,
      S.jsx("div", { className: "extension-divider" }),
      S.jsxs("div", {
        className: "btns-container",
        children: [
          S.jsxs(Be.button, {
            initial: "hidden",
            animate: "visible",
            variants: p,
            onClick: () => {
              o(!i);
            },
            children: [
              i ? S.jsx(I2, {}) : S.jsx(F2, {}),
              S.jsx("span", { children: i ? "Atrás" : "Calculadora blue" }),
            ],
          }),
          i
            ? d()
              ? S.jsxs(Be.button, {
                  initial: "hidden",
                  animate: "visible",
                  variants: p,
                  onClick: () => {
                    c(!1), f(), l(!1);
                  },
                  children: [S.jsx(z2, {}), "Desfijar"],
                })
              : S.jsxs(Be.button, {
                  initial: "hidden",
                  animate: s ? "test" : "visible",
                  variants: p,
                  onClick: () => {
                    c(!0), f(), l(!0);
                  },
                  children: [S.jsx(O2, {}), "Fijar calculadora"],
                })
            : null,
        ],
      }),
      S.jsx(W2, {}),
    ],
  });
}
Ms.createRoot(document.getElementById("root")).render(S.jsx(it.StrictMode, { children: S.jsx(Q2, {}) }));
