var Cl = Object.defineProperty, kl = Object.defineProperties;
var Nl = Object.getOwnPropertyDescriptors;
var Vn = Object.getOwnPropertySymbols;
var Qi = Object.prototype.hasOwnProperty, es = Object.prototype.propertyIsEnumerable;
var sr = (e, t, n) => t in e ? Cl(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, x = (e, t) => {
  for (var n in t || (t = {}))
    Qi.call(t, n) && sr(e, n, t[n]);
  if (Vn)
    for (var n of Vn(t))
      es.call(t, n) && sr(e, n, t[n]);
  return e;
}, ce = (e, t) => kl(e, Nl(t));
var jn = (e, t) => {
  var n = {};
  for (var o in e)
    Qi.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && Vn)
    for (var o of Vn(e))
      t.indexOf(o) < 0 && es.call(e, o) && (n[o] = e[o]);
  return n;
};
var B = (e, t, n) => (sr(e, typeof t != "symbol" ? t + "" : t, n), n);
import Il from "tui-date-picker";
/*!
 * TOAST UI Calendar 2nd Edition
 * @version 2.1.3 | Thu Oct 20 2022
 * @author NHN Cloud FE Development Lab <dl_javascript@nhn.com>
 * @license MIT
 */
var Ln, H, aa, Tn, ts, ca, po = {}, la = [], Ml = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function ot(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function ua(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function d(e, t, n) {
  var o, r, i, s = {};
  for (i in t)
    i == "key" ? o = t[i] : i == "ref" ? r = t[i] : s[i] = t[i];
  if (arguments.length > 2 && (s.children = arguments.length > 3 ? Ln.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (i in e.defaultProps)
      s[i] === void 0 && (s[i] = e.defaultProps[i]);
  return bn(e, s, o, r, null);
}
function bn(e, t, n, o, r) {
  var i = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: r == null ? ++aa : r };
  return r == null && H.vnode != null && H.vnode(i), i;
}
function xe(e) {
  return e.children;
}
function rt(e, t) {
  this.props = e, this.context = t;
}
function Xt(e, t) {
  if (t == null)
    return e.__ ? Xt(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? Xt(e) : null;
}
function da(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return da(e);
  }
}
function Er(e) {
  (!e.__d && (e.__d = !0) && Tn.push(e) && !mo.__r++ || ts !== H.debounceRendering) && ((ts = H.debounceRendering) || setTimeout)(mo);
}
function mo() {
  for (var e; mo.__r = Tn.length; )
    e = Tn.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Tn = [], e.some(function(t) {
      var n, o, r, i, s, a;
      t.__d && (s = (i = (n = t).__v).__e, (a = n.__P) && (o = [], (r = ot({}, i)).__v = i.__v + 1, zr(a, i, r, n.__n, a.ownerSVGElement !== void 0, i.__h != null ? [s] : null, o, s == null ? Xt(i) : s, i.__h), ha(o, i), i.__e != s && da(i)));
    });
}
function fa(e, t, n, o, r, i, s, a, l, u) {
  var c, f, p, h, m, _, y, w = o && o.__k || la, E = w.length;
  for (n.__k = [], c = 0; c < t.length; c++)
    if ((h = n.__k[c] = (h = t[c]) == null || typeof h == "boolean" ? null : typeof h == "string" || typeof h == "number" || typeof h == "bigint" ? bn(null, h, null, null, h) : Array.isArray(h) ? bn(xe, { children: h }, null, null, null) : h.__b > 0 ? bn(h.type, h.props, h.key, null, h.__v) : h) != null) {
      if (h.__ = n, h.__b = n.__b + 1, (p = w[c]) === null || p && h.key == p.key && h.type === p.type)
        w[c] = void 0;
      else
        for (f = 0; f < E; f++) {
          if ((p = w[f]) && h.key == p.key && h.type === p.type) {
            w[f] = void 0;
            break;
          }
          p = null;
        }
      zr(e, h, p = p || po, r, i, s, a, l, u), m = h.__e, (f = h.ref) && p.ref != f && (y || (y = []), p.ref && y.push(p.ref, null, h), y.push(f, h.__c || m, h)), m != null ? (_ == null && (_ = m), typeof h.type == "function" && h.__k === p.__k ? h.__d = l = pa(h, l, e) : l = ma(e, h, p, w, m, l), typeof n.type == "function" && (n.__d = l)) : l && p.__e == l && l.parentNode != e && (l = Xt(p));
    }
  for (n.__e = _, c = E; c--; )
    w[c] != null && (typeof n.type == "function" && w[c].__e != null && w[c].__e == n.__d && (n.__d = Xt(o, c + 1)), va(w[c], w[c]));
  if (y)
    for (c = 0; c < y.length; c++)
      ga(y[c], y[++c], y[++c]);
}
function pa(e, t, n) {
  for (var o, r = e.__k, i = 0; r && i < r.length; i++)
    (o = r[i]) && (o.__ = e, t = typeof o.type == "function" ? pa(o, t, n) : ma(n, o, o, r, o.__e, t));
  return t;
}
function Nn(e, t) {
  return t = t || [], e == null || typeof e == "boolean" || (Array.isArray(e) ? e.some(function(n) {
    Nn(n, t);
  }) : t.push(e)), t;
}
function ma(e, t, n, o, r, i) {
  var s, a, l;
  if (t.__d !== void 0)
    s = t.__d, t.__d = void 0;
  else if (n == null || r != i || r.parentNode == null)
    e:
      if (i == null || i.parentNode !== e)
        e.appendChild(r), s = null;
      else {
        for (a = i, l = 0; (a = a.nextSibling) && l < o.length; l += 2)
          if (a == r)
            break e;
        e.insertBefore(r, i), s = i;
      }
  return s !== void 0 ? s : r.nextSibling;
}
function Al(e, t, n, o, r) {
  var i;
  for (i in n)
    i === "children" || i === "key" || i in t || ho(e, i, null, n[i], o);
  for (i in t)
    r && typeof t[i] != "function" || i === "children" || i === "key" || i === "value" || i === "checked" || n[i] === t[i] || ho(e, i, t[i], n[i], o);
}
function ns(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Ml.test(t) ? n : n + "px";
}
function ho(e, t, n, o, r) {
  var i;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof o == "string" && (e.style.cssText = o = ""), o)
          for (t in o)
            n && t in n || ns(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || ns(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      i = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + i] = n, n ? o || e.addEventListener(t, i ? rs : os, i) : e.removeEventListener(t, i ? rs : os, i);
    else if (t !== "dangerouslySetInnerHTML") {
      if (r)
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t in e)
        try {
          e[t] = n == null ? "" : n;
          break e;
        } catch (s) {
        }
      typeof n == "function" || (n != null && (n !== !1 || t[0] === "a" && t[1] === "r") ? e.setAttribute(t, n) : e.removeAttribute(t));
    }
}
function os(e) {
  this.l[e.type + !1](H.event ? H.event(e) : e);
}
function rs(e) {
  this.l[e.type + !0](H.event ? H.event(e) : e);
}
function zr(e, t, n, o, r, i, s, a, l) {
  var u, c, f, p, h, m, _, y, w, E, T, k, S, N = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (l = n.__h, a = t.__e = n.__e, t.__h = null, i = [a]), (u = H.__b) && u(t);
  try {
    e:
      if (typeof N == "function") {
        if (y = t.props, w = (u = N.contextType) && o[u.__c], E = u ? w ? w.props.value : u.__ : o, n.__c ? _ = (c = t.__c = n.__c).__ = c.__E : ("prototype" in N && N.prototype.render ? t.__c = c = new N(y, E) : (t.__c = c = new rt(y, E), c.constructor = N, c.render = Rl), w && w.sub(c), c.props = y, c.state || (c.state = {}), c.context = E, c.__n = o, f = c.__d = !0, c.__h = []), c.__s == null && (c.__s = c.state), N.getDerivedStateFromProps != null && (c.__s == c.state && (c.__s = ot({}, c.__s)), ot(c.__s, N.getDerivedStateFromProps(y, c.__s))), p = c.props, h = c.state, f)
          N.getDerivedStateFromProps == null && c.componentWillMount != null && c.componentWillMount(), c.componentDidMount != null && c.__h.push(c.componentDidMount);
        else {
          if (N.getDerivedStateFromProps == null && y !== p && c.componentWillReceiveProps != null && c.componentWillReceiveProps(y, E), !c.__e && c.shouldComponentUpdate != null && c.shouldComponentUpdate(y, c.__s, E) === !1 || t.__v === n.__v) {
            c.props = y, c.state = c.__s, t.__v !== n.__v && (c.__d = !1), c.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(W) {
              W && (W.__ = t);
            }), c.__h.length && s.push(c);
            break e;
          }
          c.componentWillUpdate != null && c.componentWillUpdate(y, c.__s, E), c.componentDidUpdate != null && c.__h.push(function() {
            c.componentDidUpdate(p, h, m);
          });
        }
        if (c.context = E, c.props = y, c.__v = t, c.__P = e, T = H.__r, k = 0, "prototype" in N && N.prototype.render)
          c.state = c.__s, c.__d = !1, T && T(t), u = c.render(c.props, c.state, c.context);
        else
          do
            c.__d = !1, T && T(t), u = c.render(c.props, c.state, c.context), c.state = c.__s;
          while (c.__d && ++k < 25);
        c.state = c.__s, c.getChildContext != null && (o = ot(ot({}, o), c.getChildContext())), f || c.getSnapshotBeforeUpdate == null || (m = c.getSnapshotBeforeUpdate(p, h)), S = u != null && u.type === xe && u.key == null ? u.props.children : u, fa(e, Array.isArray(S) ? S : [S], t, n, o, r, i, s, a, l), c.base = t.__e, t.__h = null, c.__h.length && s.push(c), _ && (c.__E = c.__ = null), c.__e = !1;
      } else
        i == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = xl(n.__e, t, n, o, r, i, s, l);
    (u = H.diffed) && u(t);
  } catch (W) {
    t.__v = null, (l || i != null) && (t.__e = a, t.__h = !!l, i[i.indexOf(a)] = null), H.__e(W, t, n);
  }
}
function ha(e, t) {
  H.__c && H.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      H.__e(o, n.__v);
    }
  });
}
function xl(e, t, n, o, r, i, s, a) {
  var l, u, c, f = n.props, p = t.props, h = t.type, m = 0;
  if (h === "svg" && (r = !0), i != null) {
    for (; m < i.length; m++)
      if ((l = i[m]) && "setAttribute" in l == !!h && (h ? l.localName === h : l.nodeType === 3)) {
        e = l, i[m] = null;
        break;
      }
  }
  if (e == null) {
    if (h === null)
      return document.createTextNode(p);
    e = r ? document.createElementNS("http://www.w3.org/2000/svg", h) : document.createElement(h, p.is && p), i = null, a = !1;
  }
  if (h === null)
    f === p || a && e.data === p || (e.data = p);
  else {
    if (i = i && Ln.call(e.childNodes), u = (f = n.props || po).dangerouslySetInnerHTML, c = p.dangerouslySetInnerHTML, !a) {
      if (i != null)
        for (f = {}, m = 0; m < e.attributes.length; m++)
          f[e.attributes[m].name] = e.attributes[m].value;
      (c || u) && (c && (u && c.__html == u.__html || c.__html === e.innerHTML) || (e.innerHTML = c && c.__html || ""));
    }
    if (Al(e, p, f, r, a), c)
      t.__k = [];
    else if (m = t.props.children, fa(e, Array.isArray(m) ? m : [m], t, n, o, r && h !== "foreignObject", i, s, i ? i[0] : n.__k && Xt(n, 0), a), i != null)
      for (m = i.length; m--; )
        i[m] != null && ua(i[m]);
    a || ("value" in p && (m = p.value) !== void 0 && (m !== e.value || h === "progress" && !m || h === "option" && m !== f.value) && ho(e, "value", m, f.value, !1), "checked" in p && (m = p.checked) !== void 0 && m !== e.checked && ho(e, "checked", m, f.checked, !1));
  }
  return e;
}
function ga(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    H.__e(o, n);
  }
}
function va(e, t, n) {
  var o, r;
  if (H.unmount && H.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || ga(o, null, t)), (o = e.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (i) {
        H.__e(i, t);
      }
    o.base = o.__P = null;
  }
  if (o = e.__k)
    for (r = 0; r < o.length; r++)
      o[r] && va(o[r], t, typeof e.type != "function");
  n || e.__e == null || ua(e.__e), e.__e = e.__d = void 0;
}
function Rl(e, t, n) {
  return this.constructor(e, n);
}
function go(e, t, n) {
  var o, r, i;
  H.__ && H.__(e, t), r = (o = typeof n == "function") ? null : n && n.__k || t.__k, i = [], zr(t, e = (!o && n || t).__k = d(xe, null, [e]), r || po, po, t.ownerSVGElement !== void 0, !o && n ? [n] : r ? null : t.firstChild ? Ln.call(t.childNodes) : null, i, !o && n ? n : r ? r.__e : t.firstChild, o), ha(i, e);
}
function Ol(e, t, n) {
  var o, r, i, s = ot({}, e.props);
  for (i in t)
    i == "key" ? o = t[i] : i == "ref" ? r = t[i] : s[i] = t[i];
  return arguments.length > 2 && (s.children = arguments.length > 3 ? Ln.call(arguments, 2) : n), bn(e.type, s, o || e.key, r || e.ref, null);
}
function Io(e, t) {
  var n = { __c: t = "__cC" + ca++, __: e, Consumer: function(o, r) {
    return o.children(r);
  }, Provider: function(o) {
    var r, i;
    return this.getChildContext || (r = [], (i = {})[t] = this, this.getChildContext = function() {
      return i;
    }, this.shouldComponentUpdate = function(s) {
      this.props.value !== s.value && r.some(Er);
    }, this.sub = function(s) {
      r.push(s);
      var a = s.componentWillUnmount;
      s.componentWillUnmount = function() {
        r.splice(r.indexOf(s), 1), a && a.call(s);
      };
    }), o.children;
  } };
  return n.Provider.__ = n.Consumer.contextType = n;
}
Ln = la.slice, H = { __e: function(e, t, n, o) {
  for (var r, i, s; t = t.__; )
    if ((r = t.__c) && !r.__)
      try {
        if ((i = r.constructor) && i.getDerivedStateFromError != null && (r.setState(i.getDerivedStateFromError(e)), s = r.__d), r.componentDidCatch != null && (r.componentDidCatch(e, o || {}), s = r.__d), s)
          return r.__E = r;
      } catch (a) {
        e = a;
      }
  throw e;
} }, aa = 0, rt.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = ot({}, this.state), typeof e == "function" && (e = e(ot({}, n), this.props)), e && ot(n, e), e != null && this.__v && (t && this.__h.push(t), Er(this));
}, rt.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Er(this));
}, rt.prototype.render = xe, Tn = [], mo.__r = 0, ca = 0;
var tn, _e, ar, is, In = 0, _a = [], so = [], ss = H.__b, as = H.__r, cs = H.diffed, ls = H.__c, us = H.unmount;
function Hn(e, t) {
  H.__h && H.__h(_e, e, In || t), In = 0;
  var n = _e.__H || (_e.__H = { __: [], __h: [] });
  return e >= n.__.length && n.__.push({ __V: so }), n.__[e];
}
function ae(e) {
  return In = 1, Wr(ya, e);
}
function Wr(e, t, n) {
  var o = Hn(tn++, 2);
  return o.t = e, o.__c || (o.__ = [n ? n(t) : ya(void 0, t), function(r) {
    var i = o.t(o.__[0], r);
    o.__[0] !== i && (o.__ = [i, o.__[1]], o.__c.setState({}));
  }], o.__c = _e), o.__;
}
function re(e, t) {
  var n = Hn(tn++, 3);
  !H.__s && Yr(n.__H, t) && (n.__ = e, n.u = t, _e.__H.__h.push(n));
}
function ht(e, t) {
  var n = Hn(tn++, 4);
  !H.__s && Yr(n.__H, t) && (n.__ = e, n.u = t, _e.__h.push(n));
}
function te(e) {
  return In = 5, U(function() {
    return { current: e };
  }, []);
}
function U(e, t) {
  var n = Hn(tn++, 7);
  return Yr(n.__H, t) ? (n.__V = e(), n.u = t, n.__h = e, n.__V) : n.__;
}
function ee(e, t) {
  return In = 8, U(function() {
    return e;
  }, t);
}
function Mn(e) {
  var t = _e.context[e.__c], n = Hn(tn++, 9);
  return n.c = e, t ? (n.__ == null && (n.__ = !0, t.sub(_e)), t.props.value) : e.__;
}
function Pl() {
  for (var e; e = _a.shift(); )
    if (e.__P)
      try {
        e.__H.__h.forEach(ao), e.__H.__h.forEach(Dr), e.__H.__h = [];
      } catch (t) {
        e.__H.__h = [], H.__e(t, e.__v);
      }
}
H.__b = function(e) {
  _e = null, ss && ss(e);
}, H.__r = function(e) {
  as && as(e), tn = 0;
  var t = (_e = e.__c).__H;
  t && (ar === _e ? (t.__h = [], _e.__h = [], t.__.forEach(function(n) {
    n.__V = so, n.u = void 0;
  })) : (t.__h.forEach(ao), t.__h.forEach(Dr), t.__h = [])), ar = _e;
}, H.diffed = function(e) {
  cs && cs(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (_a.push(t) !== 1 && is === H.requestAnimationFrame || ((is = H.requestAnimationFrame) || function(n) {
    var o, r = function() {
      clearTimeout(i), ds && cancelAnimationFrame(o), setTimeout(n);
    }, i = setTimeout(r, 100);
    ds && (o = requestAnimationFrame(r));
  })(Pl)), t.__H.__.forEach(function(n) {
    n.u && (n.__H = n.u), n.__V !== so && (n.__ = n.__V), n.u = void 0, n.__V = so;
  })), ar = _e = null;
}, H.__c = function(e, t) {
  t.some(function(n) {
    try {
      n.__h.forEach(ao), n.__h = n.__h.filter(function(o) {
        return !o.__ || Dr(o);
      });
    } catch (o) {
      t.some(function(r) {
        r.__h && (r.__h = []);
      }), t = [], H.__e(o, n.__v);
    }
  }), ls && ls(e, t);
}, H.unmount = function(e) {
  us && us(e);
  var t, n = e.__c;
  n && n.__H && (n.__H.__.forEach(function(o) {
    try {
      ao(o);
    } catch (r) {
      t = r;
    }
  }), t && H.__e(t, n.__v));
};
var ds = typeof requestAnimationFrame == "function";
function ao(e) {
  var t = _e, n = e.__c;
  typeof n == "function" && (e.__c = void 0, n()), _e = t;
}
function Dr(e) {
  var t = _e;
  e.__c = e.__(), _e = t;
}
function Yr(e, t) {
  return !e || e.length !== t.length || t.some(function(n, o) {
    return n !== e[o];
  });
}
function ya(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Ee(e) {
  for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
    n[o - 1] = arguments[o];
  if (process.env.NODE_ENV !== "production") {
    var r = zl[e], i = r ? typeof r == "function" ? r.apply(null, n) : r : "unknown error nr: " + e;
    throw Error("[Immer] " + i);
  }
  throw Error("[Immer] minified error nr: " + e + (n.length ? " " + n.map(function(s) {
    return "'" + s + "'";
  }).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf");
}
function Kt(e) {
  return !!e && !!e[He];
}
function bt(e) {
  return !!e && (function(t) {
    if (!t || typeof t != "object")
      return !1;
    var n = Object.getPrototypeOf(t);
    if (n === null)
      return !0;
    var o = Object.hasOwnProperty.call(n, "constructor") && n.constructor;
    return o === Object || typeof o == "function" && Function.toString.call(o) === Wl;
  }(e) || Array.isArray(e) || !!e[ys] || !!e.constructor[ys] || Vr(e) || jr(e));
}
function An(e, t, n) {
  n === void 0 && (n = !1), nn(e) === 0 ? (n ? Object.keys : Jr)(e).forEach(function(o) {
    n && typeof o == "symbol" || t(o, e[o], e);
  }) : e.forEach(function(o, r) {
    return t(r, o, e);
  });
}
function nn(e) {
  var t = e[He];
  return t ? t.i > 3 ? t.i - 4 : t.i : Array.isArray(e) ? 1 : Vr(e) ? 2 : jr(e) ? 3 : 0;
}
function Sr(e, t) {
  return nn(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function Ll(e, t) {
  return nn(e) === 2 ? e.get(t) : e[t];
}
function wa(e, t, n) {
  var o = nn(e);
  o === 2 ? e.set(t, n) : o === 3 ? (e.delete(t), e.add(n)) : e[t] = n;
}
function Hl(e, t) {
  return e === t ? e !== 0 || 1 / e == 1 / t : e != e && t != t;
}
function Vr(e) {
  return Fl && e instanceof Map;
}
function jr(e) {
  return Ul && e instanceof Set;
}
function Tt(e) {
  return e.o || e.t;
}
function Xr(e) {
  if (Array.isArray(e))
    return Array.prototype.slice.call(e);
  var t = Yl(e);
  delete t[He];
  for (var n = Jr(t), o = 0; o < n.length; o++) {
    var r = n[o], i = t[r];
    i.writable === !1 && (i.writable = !0, i.configurable = !0), (i.get || i.set) && (t[r] = { configurable: !0, writable: !0, enumerable: i.enumerable, value: e[r] });
  }
  return Object.create(Object.getPrototypeOf(e), t);
}
function Kr(e, t) {
  return t === void 0 && (t = !1), qr(e) || Kt(e) || !bt(e) || (nn(e) > 1 && (e.set = e.add = e.clear = e.delete = $l), Object.freeze(e), t && An(e, function(n, o) {
    return Kr(o, !0);
  }, !0)), e;
}
function $l() {
  Ee(2);
}
function qr(e) {
  return e == null || typeof e != "object" || Object.isFrozen(e);
}
function Ze(e) {
  var t = Vl[e];
  return t || Ee(18, e), t;
}
function fs() {
  return process.env.NODE_ENV === "production" || qt || Ee(0), qt;
}
function cr(e, t) {
  t && (Ze("Patches"), e.u = [], e.s = [], e.v = t);
}
function vo(e) {
  Tr(e), e.p.forEach(Bl), e.p = null;
}
function Tr(e) {
  e === qt && (qt = e.l);
}
function ps(e) {
  return qt = { p: [], l: qt, h: e, m: !0, _: 0 };
}
function Bl(e) {
  var t = e[He];
  t.i === 0 || t.i === 1 ? t.j() : t.O = !0;
}
function lr(e, t) {
  t._ = t.p.length;
  var n = t.p[0], o = e !== void 0 && e !== n;
  return t.h.g || Ze("ES5").S(t, e, o), o ? (n[He].P && (vo(t), Ee(4)), bt(e) && (e = _o(t, e), t.l || yo(t, e)), t.u && Ze("Patches").M(n[He].t, e, t.u, t.s)) : e = _o(t, n, []), vo(t), t.u && t.v(t.u, t.s), e !== Ea ? e : void 0;
}
function _o(e, t, n) {
  if (qr(t))
    return t;
  var o = t[He];
  if (!o)
    return An(t, function(i, s) {
      return ms(e, o, t, i, s, n);
    }, !0), t;
  if (o.A !== e)
    return t;
  if (!o.P)
    return yo(e, o.t, !0), o.t;
  if (!o.I) {
    o.I = !0, o.A._--;
    var r = o.i === 4 || o.i === 5 ? o.o = Xr(o.k) : o.o;
    An(o.i === 3 ? new Set(r) : r, function(i, s) {
      return ms(e, o, r, i, s, n);
    }), yo(e, r, !1), n && e.u && Ze("Patches").R(o, n, e.u, e.s);
  }
  return o.o;
}
function ms(e, t, n, o, r, i) {
  if (process.env.NODE_ENV !== "production" && r === n && Ee(5), Kt(r)) {
    var s = _o(e, r, i && t && t.i !== 3 && !Sr(t.D, o) ? i.concat(o) : void 0);
    if (wa(n, o, s), !Kt(s))
      return;
    e.m = !1;
  }
  if (bt(r) && !qr(r)) {
    if (!e.h.F && e._ < 1)
      return;
    _o(e, r), t && t.A.l || yo(e, r);
  }
}
function yo(e, t, n) {
  n === void 0 && (n = !1), e.h.F && e.m && Kr(t, n);
}
function ur(e, t) {
  var n = e[He];
  return (n ? Tt(n) : e)[t];
}
function hs(e, t) {
  if (t in e)
    for (var n = Object.getPrototypeOf(e); n; ) {
      var o = Object.getOwnPropertyDescriptor(n, t);
      if (o)
        return o;
      n = Object.getPrototypeOf(n);
    }
}
function br(e) {
  e.P || (e.P = !0, e.l && br(e.l));
}
function dr(e) {
  e.o || (e.o = Xr(e.t));
}
function Cr(e, t, n) {
  var o = Vr(t) ? Ze("MapSet").N(t, n) : jr(t) ? Ze("MapSet").T(t, n) : e.g ? function(r, i) {
    var s = Array.isArray(r), a = { i: s ? 1 : 0, A: i ? i.A : fs(), P: !1, I: !1, D: {}, l: i, t: r, k: null, o: null, j: null, C: !1 }, l = a, u = kr;
    s && (l = [a], u = Dn);
    var c = Proxy.revocable(l, u), f = c.revoke, p = c.proxy;
    return a.k = p, a.j = f, p;
  }(t, n) : Ze("ES5").J(t, n);
  return (n ? n.A : fs()).p.push(o), o;
}
function Gl(e) {
  return Kt(e) || Ee(22, e), function t(n) {
    if (!bt(n))
      return n;
    var o, r = n[He], i = nn(n);
    if (r) {
      if (!r.P && (r.i < 4 || !Ze("ES5").K(r)))
        return r.t;
      r.I = !0, o = gs(n, i), r.I = !1;
    } else
      o = gs(n, i);
    return An(o, function(s, a) {
      r && Ll(r.t, s) === a || wa(o, s, t(a));
    }), i === 3 ? new Set(o) : o;
  }(e);
}
function gs(e, t) {
  switch (t) {
    case 2:
      return new Map(e);
    case 3:
      return Array.from(e);
  }
  return Xr(e);
}
var vs, qt, Zr = typeof Symbol != "undefined" && typeof Symbol("x") == "symbol", Fl = typeof Map != "undefined", Ul = typeof Set != "undefined", _s = typeof Proxy != "undefined" && Proxy.revocable !== void 0 && typeof Reflect != "undefined", Ea = Zr ? Symbol.for("immer-nothing") : ((vs = {})["immer-nothing"] = !0, vs), ys = Zr ? Symbol.for("immer-draftable") : "__$immer_draftable", He = Zr ? Symbol.for("immer-state") : "__$immer_state", zl = { 0: "Illegal state", 1: "Immer drafts cannot have computed properties", 2: "This object has been frozen and should not be mutated", 3: function(e) {
  return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + e;
}, 4: "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.", 5: "Immer forbids circular references", 6: "The first or second argument to `produce` must be a function", 7: "The third argument to `produce` must be a function or undefined", 8: "First argument to `createDraft` must be a plain object, an array, or an immerable object", 9: "First argument to `finishDraft` must be a draft returned by `createDraft`", 10: "The given draft is already finalized", 11: "Object.defineProperty() cannot be used on an Immer draft", 12: "Object.setPrototypeOf() cannot be used on an Immer draft", 13: "Immer only supports deleting array indices", 14: "Immer only supports setting array indices and the 'length' property", 15: function(e) {
  return "Cannot apply patch, path doesn't resolve: " + e;
}, 16: 'Sets cannot have "replace" patches.', 17: function(e) {
  return "Unsupported patch operation: " + e;
}, 18: function(e) {
  return "The plugin for '" + e + "' has not been loaded into Immer. To enable the plugin, import and call `enable" + e + "()` when initializing your application.";
}, 20: "Cannot use proxies if Proxy, Proxy.revocable or Reflect are not available", 21: function(e) {
  return "produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '" + e + "'";
}, 22: function(e) {
  return "'current' expects a draft, got: " + e;
}, 23: function(e) {
  return "'original' expects a draft, got: " + e;
}, 24: "Patching reserved attributes like __proto__, prototype and constructor is not allowed" }, Wl = "" + Object.prototype.constructor, Jr = typeof Reflect != "undefined" && Reflect.ownKeys ? Reflect.ownKeys : Object.getOwnPropertySymbols !== void 0 ? function(e) {
  return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
} : Object.getOwnPropertyNames, Yl = Object.getOwnPropertyDescriptors || function(e) {
  var t = {};
  return Jr(e).forEach(function(n) {
    t[n] = Object.getOwnPropertyDescriptor(e, n);
  }), t;
}, Vl = {}, kr = { get: function(e, t) {
  if (t === He)
    return e;
  var n = Tt(e);
  if (!Sr(n, t))
    return function(r, i, s) {
      var a, l = hs(i, s);
      return l ? "value" in l ? l.value : (a = l.get) === null || a === void 0 ? void 0 : a.call(r.k) : void 0;
    }(e, n, t);
  var o = n[t];
  return e.I || !bt(o) ? o : o === ur(e.t, t) ? (dr(e), e.o[t] = Cr(e.A.h, o, e)) : o;
}, has: function(e, t) {
  return t in Tt(e);
}, ownKeys: function(e) {
  return Reflect.ownKeys(Tt(e));
}, set: function(e, t, n) {
  var o = hs(Tt(e), t);
  if (o != null && o.set)
    return o.set.call(e.k, n), !0;
  if (!e.P) {
    var r = ur(Tt(e), t), i = r == null ? void 0 : r[He];
    if (i && i.t === n)
      return e.o[t] = n, e.D[t] = !1, !0;
    if (Hl(n, r) && (n !== void 0 || Sr(e.t, t)))
      return !0;
    dr(e), br(e);
  }
  return e.o[t] === n && typeof n != "number" && (n !== void 0 || t in e.o) || (e.o[t] = n, e.D[t] = !0, !0);
}, deleteProperty: function(e, t) {
  return ur(e.t, t) !== void 0 || t in e.t ? (e.D[t] = !1, dr(e), br(e)) : delete e.D[t], e.o && delete e.o[t], !0;
}, getOwnPropertyDescriptor: function(e, t) {
  var n = Tt(e), o = Reflect.getOwnPropertyDescriptor(n, t);
  return o && { writable: !0, configurable: e.i !== 1 || t !== "length", enumerable: o.enumerable, value: n[t] };
}, defineProperty: function() {
  Ee(11);
}, getPrototypeOf: function(e) {
  return Object.getPrototypeOf(e.t);
}, setPrototypeOf: function() {
  Ee(12);
} }, Dn = {};
An(kr, function(e, t) {
  Dn[e] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
}), Dn.deleteProperty = function(e, t) {
  return process.env.NODE_ENV !== "production" && isNaN(parseInt(t)) && Ee(13), Dn.set.call(this, e, t, void 0);
}, Dn.set = function(e, t, n) {
  return process.env.NODE_ENV !== "production" && t !== "length" && isNaN(parseInt(t)) && Ee(14), kr.set.call(this, e[0], t, n, e[0]);
};
var jl = function() {
  function e(n) {
    var o = this;
    this.g = _s, this.F = !0, this.produce = function(r, i, s) {
      if (typeof r == "function" && typeof i != "function") {
        var a = i;
        i = r;
        var l = o;
        return function(_) {
          var y = this;
          _ === void 0 && (_ = a);
          for (var w = arguments.length, E = Array(w > 1 ? w - 1 : 0), T = 1; T < w; T++)
            E[T - 1] = arguments[T];
          return l.produce(_, function(k) {
            var S;
            return (S = i).call.apply(S, [y, k].concat(E));
          });
        };
      }
      var u;
      if (typeof i != "function" && Ee(6), s !== void 0 && typeof s != "function" && Ee(7), bt(r)) {
        var c = ps(o), f = Cr(o, r, void 0), p = !0;
        try {
          u = i(f), p = !1;
        } finally {
          p ? vo(c) : Tr(c);
        }
        return typeof Promise != "undefined" && u instanceof Promise ? u.then(function(_) {
          return cr(c, s), lr(_, c);
        }, function(_) {
          throw vo(c), _;
        }) : (cr(c, s), lr(u, c));
      }
      if (!r || typeof r != "object") {
        if ((u = i(r)) === void 0 && (u = r), u === Ea && (u = void 0), o.F && Kr(u, !0), s) {
          var h = [], m = [];
          Ze("Patches").M(r, u, h, m), s(h, m);
        }
        return u;
      }
      Ee(21, r);
    }, this.produceWithPatches = function(r, i) {
      if (typeof r == "function")
        return function(u) {
          for (var c = arguments.length, f = Array(c > 1 ? c - 1 : 0), p = 1; p < c; p++)
            f[p - 1] = arguments[p];
          return o.produceWithPatches(u, function(h) {
            return r.apply(void 0, [h].concat(f));
          });
        };
      var s, a, l = o.produce(r, i, function(u, c) {
        s = u, a = c;
      });
      return typeof Promise != "undefined" && l instanceof Promise ? l.then(function(u) {
        return [u, s, a];
      }) : [l, s, a];
    }, typeof (n == null ? void 0 : n.useProxies) == "boolean" && this.setUseProxies(n.useProxies), typeof (n == null ? void 0 : n.autoFreeze) == "boolean" && this.setAutoFreeze(n.autoFreeze);
  }
  var t = e.prototype;
  return t.createDraft = function(n) {
    bt(n) || Ee(8), Kt(n) && (n = Gl(n));
    var o = ps(this), r = Cr(this, n, void 0);
    return r[He].C = !0, Tr(o), r;
  }, t.finishDraft = function(n, o) {
    var r = n && n[He];
    process.env.NODE_ENV !== "production" && (r && r.C || Ee(9), r.I && Ee(10));
    var i = r.A;
    return cr(i, o), lr(void 0, i);
  }, t.setAutoFreeze = function(n) {
    this.F = n;
  }, t.setUseProxies = function(n) {
    n && !_s && Ee(20), this.g = n;
  }, t.applyPatches = function(n, o) {
    var r;
    for (r = o.length - 1; r >= 0; r--) {
      var i = o[r];
      if (i.path.length === 0 && i.op === "replace") {
        n = i.value;
        break;
      }
    }
    r > -1 && (o = o.slice(r + 1));
    var s = Ze("Patches").$;
    return Kt(n) ? s(n, o) : this.produce(n, function(a) {
      return s(a, o);
    });
  }, e;
}(), $e = new jl(), Xl = $e.produce;
$e.produceWithPatches.bind($e);
$e.setAutoFreeze.bind($e);
$e.setUseProxies.bind($e);
$e.applyPatches.bind($e);
$e.createDraft.bind($e);
$e.finishDraft.bind($e);
const Q = Xl;
var Kl = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {};
function ql(e) {
  return e === void 0;
}
var Be = ql, Zl = Be;
function Jl(e, t, n) {
  var o = [], r;
  for (Zl(t) && (t = e || 0, e = 0), n = n || 1, r = n < 0 ? -1 : 1, t *= r; e * r < t; e += n)
    o.push(e);
  return o;
}
var gt = Jl;
const Ql = "0", Zt = 24, Mo = 2, Qr = 3, Ao = 27, fr = 5, eu = 280, co = 44, Nr = 12, tu = 12, nu = "12px 17px 0", Da = 42, Sa = 1, Ta = 2, Jt = 60, ws = {
  color: "#000",
  backgroundColor: "#a1b56c",
  dragBackgroundColor: "#a1b56c",
  borderColor: "#000"
}, wo = 2, Es = 9;
function ou(e) {
  return typeof e == "boolean" || e instanceof Boolean;
}
var ei = ou;
function ru(e) {
  return typeof e == "number" || e instanceof Number;
}
var lo = ru;
function iu(e) {
  return e === Object(e);
}
var uo = iu;
function su(e) {
  return typeof e == "string" || e instanceof String;
}
var be = su;
function F(e) {
  return Be(e) || e === null;
}
function L(e) {
  return !F(e);
}
function Cn(e) {
  return typeof e == "function";
}
const au = "toastui-calendar-";
function v(...e) {
  const t = [];
  return e.forEach((n) => {
    !n || (be(n) ? t.push(n) : Object.keys(n).forEach((o) => {
      n[o] && t.push(o);
    }));
  }), t.map((n) => `${au}${n}`).join(" ");
}
function X(e) {
  return `${e}%`;
}
function Eo(e) {
  return `${e}px`;
}
function Ir(e) {
  const t = /(\d+)%/, n = e.match(t), o = /(-?)\s?(\d+)px/, r = e.match(o);
  return {
    percent: n ? parseInt(n[1], 10) : 0,
    px: r ? parseInt(`${r[1]}${r[2]}`, 10) : 0
  };
}
function ba(e, t) {
  const n = e.model.getColors();
  return Object.keys(ws).reduce((o, r) => {
    var s, a;
    const i = r;
    return o[i] = (a = (s = n[i]) != null ? s : t[i]) != null ? a : ws[i], o;
  }, {});
}
const cu = /^(-?(?:[1-9][0-9]*)?[0-9]{4})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9])T(2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9])(\.)?([0-9]+)?([+-]\d\d(?::?\d\d)?|\s*Z)?$/;
function Ds() {
  throw new Error("This operation is not supported.");
}
function lu(e) {
  const t = cu.exec(e);
  if (t) {
    const [, n, o, r, i, s, a, , l, u] = t;
    return {
      y: Number(n),
      M: Number(o) - 1,
      d: Number(r),
      h: Number(i),
      m: Number(s),
      s: Number(a),
      ms: Number(l) || 0,
      zoneInfo: u
    };
  }
  return null;
}
function uu(e) {
  const t = lu(e);
  if (t && !t.zoneInfo) {
    const { y: n, M: o, d: r, h: i, m: s, s: a, ms: l } = t;
    return new Date(n, o, r, i, s, a, l);
  }
  return null;
}
class on {
  constructor(...t) {
    const [n] = t;
    n instanceof Date ? this.d = new Date(n.getTime()) : be(n) && t.length === 1 && (this.d = uu(n)), this.d || (this.d = new Date(...t));
  }
  setTimezoneOffset() {
    Ds();
  }
  setTimezoneName() {
    Ds();
  }
  clone() {
    return new on(this.d);
  }
  toDate() {
    return new Date(this.d.getTime());
  }
  toString() {
    return this.d.toString();
  }
}
const du = [
  "getTime",
  "getTimezoneOffset",
  "getFullYear",
  "getMonth",
  "getDate",
  "getHours",
  "getMinutes",
  "getSeconds",
  "getMilliseconds",
  "getDay"
], fu = [
  "setTime",
  "setFullYear",
  "setMonth",
  "setDate",
  "setHours",
  "setMinutes",
  "setSeconds",
  "setMilliseconds"
];
du.forEach((e) => {
  on.prototype[e] = function(...t) {
    return this.d[e](...t);
  };
});
fu.forEach((e) => {
  on.prototype[e] = function(...t) {
    return this.d[e](...t);
  };
});
class xo extends on {
  clone() {
    return new xo(this.d);
  }
  getTimezoneOffset() {
    return 0;
  }
}
const pu = [
  "FullYear",
  "Month",
  "Date",
  "Hours",
  "Minutes",
  "Seconds",
  "Milliseconds",
  "Day"
], mu = [
  "FullYear",
  "Month",
  "Date",
  "Hours",
  "Minutes",
  "Seconds",
  "Milliseconds"
];
pu.forEach((e) => {
  const t = `get${e}`;
  xo.prototype[t] = function(...n) {
    return this.d[`getUTC${e}`](...n);
  };
});
mu.forEach((e) => {
  const t = `set${e}`;
  xo.prototype[t] = function(...n) {
    return this.d[`setUTC${e}`](...n);
  };
});
const hu = "Invalid DateTime Format", gu = "Invalid IANA Timezone Name", vu = "Invalid View Type", xn = "@toast-ui/calendar: ";
class _u extends Error {
  constructor(t) {
    super(`${xn}${gu} - ${t}`), this.name = "InvalidTimezoneNameError";
  }
}
class yu extends Error {
  constructor(t) {
    super(`${xn}${hu} - ${t}`), this.name = "InvalidDateTimeFormatError";
  }
}
class wu extends Error {
  constructor(t) {
    super(`${xn}${vu} - ${t}`), this.name = "InvalidViewTypeError";
  }
}
const Eu = {
  error: (e, ...t) => {
    console.error(`${xn}${e}`, ...t);
  },
  warn: (e, ...t) => {
    console.warn(`${xn}${e}`, ...t);
  }
};
let Du = on;
function Ss(...e) {
  return new Du(...e);
}
function Su() {
  return -new Date().getTimezoneOffset();
}
function kn(e, t = new O()) {
  if (!Tu())
    return Eu.warn(
      `Intl.DateTimeFormat is not fully supported. So It will return the local timezone offset only.
You can use a polyfill to fix this issue.`
    ), -t.toDate().getTimezoneOffset();
  Ca(e);
  const n = ku(t, e), o = Nu(n);
  return Math.round((o.getTime() - t.getTime()) / 60 / 1e3);
}
function yn(e, t) {
  t && Ca(t);
  const n = new O(e.getFullYear(), 0, 1), o = new O(e.getFullYear(), 6, 1);
  return t ? Math.max(
    -kn(t, n),
    -kn(t, o)
  ) !== -kn(t, e) : Math.max(n.getTimezoneOffset(), o.getTimezoneOffset()) !== e.toDate().getTimezoneOffset();
}
const pr = {}, Ts = {};
function Tu() {
  var e, t;
  return Cn((t = (e = Intl == null ? void 0 : Intl.DateTimeFormat) == null ? void 0 : e.prototype) == null ? void 0 : t.formatToParts);
}
function Ca(e) {
  if (Ts[e])
    return !0;
  try {
    return Intl.DateTimeFormat("en-US", { timeZone: e }), Ts[e] = !0, !0;
  } catch (t) {
    throw new _u(e);
  }
}
function bu(e) {
  if (pr[e])
    return pr[e];
  const t = new Intl.DateTimeFormat("en-US", {
    timeZone: e,
    hourCycle: "h23",
    hour12: !1,
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  });
  return pr[e] = t, t;
}
const Cu = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
};
function ku(e, t) {
  return bu(t).formatToParts(e.toDate()).reduce((r, i) => {
    const s = Cu[i.type];
    return L(s) && (r[s] = parseInt(i.value, 10)), r;
  }, []);
}
function Nu(e) {
  const [t, n, o, r, i, s] = e, a = n - 1;
  return new Date(Date.UTC(t, a, o, r % 24, i, s));
}
function mr(e) {
  return (Su() - e) * ni;
}
class O {
  constructor(...t) {
    B(this, "tzOffset", null);
    B(this, "d");
    t[0] instanceof O ? this.d = Ss(t[0].getTime()) : this.d = Ss(...t);
  }
  toString() {
    return this.d.toString();
  }
  addFullYear(t) {
    return this.setFullYear(this.getFullYear() + t), this;
  }
  addMonth(t) {
    return this.setMonth(this.getMonth() + t), this;
  }
  addDate(t) {
    return this.setDate(this.getDate() + t), this;
  }
  addHours(t) {
    return this.setHours(this.getHours() + t), this;
  }
  addMinutes(t) {
    return this.setMinutes(this.getMinutes() + t), this;
  }
  addSeconds(t) {
    return this.setSeconds(this.getSeconds() + t), this;
  }
  addMilliseconds(t) {
    return this.setMilliseconds(this.getMilliseconds() + t), this;
  }
  setWithRaw(t, n, o, r, i, s, a) {
    return this.setFullYear(t, n, o), this.setHours(r, i, s, a), this;
  }
  toDate() {
    return this.d.toDate();
  }
  valueOf() {
    return this.getTime();
  }
  getTimezoneOffset() {
    var t;
    return (t = this.tzOffset) != null ? t : this.d.getTimezoneOffset();
  }
  getTime() {
    return this.d.getTime();
  }
  getFullYear() {
    return this.d.getFullYear();
  }
  getMonth() {
    return this.d.getMonth();
  }
  getDate() {
    return this.d.getDate();
  }
  getHours() {
    return this.d.getHours();
  }
  getMinutes() {
    return this.d.getMinutes();
  }
  getSeconds() {
    return this.d.getSeconds();
  }
  getMilliseconds() {
    return this.d.getMilliseconds();
  }
  getDay() {
    return this.d.getDay();
  }
  setTime(t) {
    return this.d.setTime(t);
  }
  setFullYear(t, n = this.getMonth(), o = this.getDate()) {
    return this.d.setFullYear(t, n, o);
  }
  setMonth(t, n = this.getDate()) {
    return this.d.setMonth(t, n);
  }
  setDate(t) {
    return this.d.setDate(t);
  }
  setHours(t, n = this.getMinutes(), o = this.getSeconds(), r = this.getMilliseconds()) {
    return this.d.setHours(t, n, o, r);
  }
  setMinutes(t, n = this.getSeconds(), o = this.getMilliseconds()) {
    return this.d.setMinutes(t, n, o);
  }
  setSeconds(t, n = this.getMilliseconds()) {
    return this.d.setSeconds(t, n);
  }
  setMilliseconds(t) {
    return this.d.setMilliseconds(t);
  }
  tz(t) {
    if (t === "Local")
      return new O(this.getTime());
    const n = be(t) ? kn(t, this) : t, o = new O(this.getTime() - mr(n));
    return o.tzOffset = n, o;
  }
  local(t) {
    if (L(t)) {
      const n = be(t) ? kn(t, this) : t;
      return new O(this.getTime() + mr(n));
    }
    return new O(
      this.getTime() + (L(this.tzOffset) ? mr(this.tzOffset) : 0)
    );
  }
}
function Iu(e, ...t) {
  return t.reduce((n, o) => (e.hasOwnProperty(o) && (n[o] = e[o]), n), {});
}
function Mu(e) {
  return Object.assign(Object.create(Object.getPrototypeOf(e)), e);
}
function Ye(e, t = {}) {
  return uo(t) && Object.keys(t).forEach((n) => {
    const o = n, r = n;
    !Array.isArray(t[r]) && uo(e[o]) && uo(t[r]) && !(t[r] instanceof O) ? e[o] = Ye(
      e[o],
      t[r]
    ) : e[o] = t[r];
  }), e;
}
const Au = [
  "top",
  "left",
  "width",
  "height",
  "exceedLeft",
  "exceedRight",
  "croppedStart",
  "croppedEnd",
  "goingDurationHeight",
  "modelDurationHeight",
  "comingDurationHeight",
  "duplicateEvents",
  "duplicateEventIndex",
  "duplicateStarts",
  "duplicateEnds",
  "duplicateLeft",
  "duplicateWidth",
  "collapse",
  "isMain"
];
class Ct {
  constructor(t) {
    B(this, "model");
    B(this, "top", 0);
    B(this, "left", 0);
    B(this, "width", 0);
    B(this, "height", 0);
    B(this, "renderStarts");
    B(this, "renderEnds");
    B(this, "exceedLeft", !1);
    B(this, "exceedRight", !1);
    B(this, "croppedStart", !1);
    B(this, "croppedEnd", !1);
    B(this, "goingDurationHeight", 0);
    B(this, "modelDurationHeight", 100);
    B(this, "comingDurationHeight", 0);
    B(this, "duplicateEvents", []);
    B(this, "duplicateEventIndex", -1);
    B(this, "duplicateStarts");
    B(this, "duplicateEnds");
    B(this, "duplicateLeft", "");
    B(this, "duplicateWidth", "");
    B(this, "collapse", !1);
    B(this, "isMain", !1);
    this.model = t;
  }
  getUIProps() {
    return Iu(this, ...Au);
  }
  setUIProps(t) {
    Object.assign(this, t);
  }
  getStarts() {
    return this.renderStarts ? this.renderStarts : this.model.getStarts();
  }
  getEnds() {
    return this.renderEnds ? this.renderEnds : this.model.getEnds();
  }
  cid() {
    return this.model.cid();
  }
  valueOf() {
    return this.model;
  }
  duration() {
    return this.model.duration();
  }
  collidesWith(t, n = !0) {
    const o = [];
    [this, t].forEach((s) => {
      s instanceof Ct && s.duplicateEvents.length > 0 ? o.push({
        start: s.duplicateStarts,
        end: s.duplicateEnds,
        goingDuration: 0,
        comingDuration: 0
      }) : o.push({
        start: s.getStarts(),
        end: s.getEnds(),
        goingDuration: s.valueOf().goingDuration,
        comingDuration: s.valueOf().comingDuration
      });
    });
    const [r, i] = o;
    return Ma({
      start: r.start.getTime(),
      end: r.end.getTime(),
      targetStart: i.start.getTime(),
      targetEnd: i.end.getTime(),
      goingDuration: r.goingDuration,
      comingDuration: r.comingDuration,
      targetGoingDuration: i.goingDuration,
      targetComingDuration: i.comingDuration,
      usingTravelTime: n
    });
  }
  clone() {
    const t = this.getUIProps(), n = new Ct(this.model);
    return n.setUIProps(t), this.renderStarts && (n.renderStarts = new O(this.renderStarts)), this.renderEnds && (n.renderEnds = new O(this.renderEnds)), n;
  }
}
function xu(e, t) {
  return e !== t ? e ? -1 : 1 : 0;
}
function Ru(e, t) {
  return Number(e) - Number(t);
}
function Ou(e, t) {
  const n = String(e), o = String(t);
  return n === o ? 0 : n > o ? 1 : -1;
}
function Pu(e, t) {
  const n = e instanceof Ct ? e.model : e, o = t instanceof Ct ? t.model : t, r = xu(
    n.isAllday || n.hasMultiDates,
    o.isAllday || o.hasMultiDates
  );
  if (r)
    return r;
  const i = vt(e.getStarts(), t.getStarts());
  if (i)
    return i;
  const s = e.duration(), a = t.duration();
  return s < a ? 1 : s > a ? -1 : n.cid() - o.cid();
}
function Lu(e, t, n, o) {
  let r = 0, i = e.length - 1, s, a, l;
  for (o = o || Ou; r <= i; )
    if (s = (r + i) / 2 | 0, a = n ? n(e[s]) : e[s], l = o(a, t), l < 0)
      r = s + 1;
    else if (l > 0)
      i = s - 1;
    else
      return s;
  return ~i;
}
const kt = {
  bsearch: Lu,
  compare: {
    event: {
      asc: Pu
    },
    num: {
      asc: Ru
    }
  }
};
function Mr(e) {
  return e[0];
}
function it(e) {
  return e[e.length - 1];
}
function ti(e, t) {
  for (let n = e.length - 1; n >= 0; n -= 1)
    if (t(e[n]))
      return n;
  return -1;
}
function bs(e, t) {
  return e > 0 ? Array.from({ length: e }, () => Array.isArray(t) ? t.slice() : t) : [];
}
var rn = /* @__PURE__ */ ((e) => (e[e.SUN = 0] = "SUN", e[e.MON = 1] = "MON", e[e.TUE = 2] = "TUE", e[e.WED = 3] = "WED", e[e.THU = 4] = "THU", e[e.FRI = 5] = "FRI", e[e.SAT = 6] = "SAT", e))(rn || {});
const Ke = 7, Hu = /^(\d{4}[-|/]*\d{2}[-|/]*\d{2})\s?(\d{2}:\d{2}:\d{2})?$/, $u = {
  millisecondsTo: {},
  millisecondsFrom: {}
}, Bu = [24, 60, 60, 1e3];
function Me(e, t) {
  let n = "", o = 0;
  if (String(e).length > t)
    return String(e);
  for (; o < t - 1; o += 1)
    n += "0";
  return (n + e).slice(t * -1);
}
function Cs(e) {
  let t = e.getHours();
  return t === 0 && (t = 12), t > 12 && (t = t % 12), t;
}
const Gu = {
  YYYYMMDD(e) {
    return [
      e.getFullYear(),
      Me(e.getMonth() + 1, 2),
      Me(e.getDate(), 2)
    ].join("");
  },
  YYYY(e) {
    return String(e.getFullYear());
  },
  MM(e) {
    return Me(e.getMonth() + 1, 2);
  },
  DD(e) {
    return Me(e.getDate(), 2);
  },
  "HH:mm": function(e) {
    const t = e.getHours(), n = e.getMinutes();
    return `${Me(t, 2)}:${Me(n, 2)}`;
  },
  "hh:mm": function(e) {
    const t = Cs(e), n = e.getMinutes();
    return `${Me(t, 2)}:${Me(n, 2)}`;
  },
  hh(e) {
    const t = Cs(e);
    return String(t);
  },
  tt(e) {
    return e.getHours() < 12 ? "am" : "pm";
  }
}, at = 864e5, ni = 6e4, Xn = 20 * ni, ka = 30 * 60 * 1e3;
function me(e, t) {
  let n = t;
  return Object.entries(Gu).forEach(([o, r]) => {
    n = n.replace(o, r(e));
  }), n;
}
function Fu(e, t, n) {
  const o = {
    date: 0,
    hour: 1,
    minute: 2,
    second: 3
  };
  return !(e in o) || isNaN(t) ? 0 : [t].concat(Bu.slice(o[e])).reduce(n);
}
function Kn(e, t) {
  const n = $u.millisecondsFrom, o = e + t;
  if (n[o])
    return n[o];
  const r = Fu(e, t, (i, s) => i * s);
  return r ? (n[o] = r, n[o]) : 0;
}
function he(e) {
  const t = e ? new O(e) : new O();
  return t.setHours(0, 0, 0, 0), t;
}
function Ar(e, t, n) {
  const o = e.getTime(), r = t.getTime(), i = new O(e), s = [];
  let a = o;
  for (; a <= r && r >= i.getTime(); )
    s.push(new O(i)), a = a + n, i.addMilliseconds(n);
  return s;
}
function sn(e) {
  return new O(e);
}
function vt(e, t) {
  const n = e.getTime(), o = t.getTime();
  return n < o ? -1 : n > o ? 1 : 0;
}
function Uu(e, t) {
  return e.getFullYear() === t.getFullYear();
}
function zu(e, t) {
  return Uu(e, t) && e.getMonth() === t.getMonth();
}
function Nt(e, t) {
  return zu(e, t) && e.getDate() === t.getDate();
}
function oi(e, t) {
  return vt(e, t) === 1 ? e : t;
}
function Na(e, t) {
  return vt(e, t) === -1 ? e : t;
}
function ks(e, t = -1) {
  const n = e.match(Hu);
  let o, r, i;
  if (!n)
    throw new yu(e);
  if (e.length > 8) {
    o = ~e.indexOf("/") ? "/" : "-";
    const s = n.splice(1);
    r = s[0].split(o), i = s[1] ? s[1].split(":") : [0, 0, 0];
  } else {
    const [s] = n;
    r = [s.substr(0, 4), s.substr(4, 2), s.substr(6, 2)], i = [0, 0, 0];
  }
  return new O().setWithRaw(
    Number(r[0]),
    Number(r[1]) + t,
    Number(r[2]),
    Number(i[0]),
    Number(i[1]),
    Number(i[2]),
    0
  );
}
function Re(e) {
  const t = e ? new O(e) : new O();
  return t.setHours(23, 59, 59, 999), t;
}
function Fe(e) {
  return e === 0 || e === 6;
}
function ri(e) {
  return e === 0;
}
function ii(e) {
  return e === 6;
}
function Ia(e) {
  const t = new O(e);
  return t.setDate(1), t.setHours(0, 0, 0, 0), t;
}
function Wu(e) {
  const t = Ia(e);
  return t.setMonth(t.getMonth() + 1), t.setDate(t.getDate() - 1), t.setHours(23, 59, 59, 999), t;
}
function si(e, t, n, o) {
  const i = 100 / e, s = e > 5 ? 100 / (e - 1) : i;
  let a = 0;
  const l = gt(n, Ke).concat(gt(e)).slice(0, Ke);
  t = o ? !1 : t;
  const u = l.map((p) => {
    let h = t ? s : i;
    e > 5 && t && Fe(p) && (h = s / 2);
    const m = {
      width: h,
      left: a
    };
    return a += h, m;
  }), { length: c } = u, f = bs(c, bs(c, 0));
  return u.forEach(({ width: p }, h) => {
    for (let m = 0; m <= h; m += 1)
      for (let _ = h; _ < c; _ += 1)
        f[m][_] += p;
  }), f[0][c - 1] = 100, {
    rowStyleInfo: u,
    cellWidthMap: f.map((p) => p.map(X))
  };
}
function Do(e, t) {
  const n = sn(e);
  return n.setMilliseconds(e.getMilliseconds() + t), n;
}
function Ae(e, t) {
  const n = sn(e);
  return n.setMinutes(e.getMinutes() + t), n;
}
function qe(e, t) {
  const n = sn(e);
  return n.setHours(...t.split(":").map(Number)), n;
}
function It(e, t) {
  const n = sn(e);
  return n.setDate(e.getDate() + t), n;
}
function Yu(e, t) {
  const n = sn(e);
  return n.setDate(e.getDate() - t), n;
}
function Vu(e, t = 1) {
  const n = sn(e);
  if (t !== 0) {
    const o = n.getDate(), r = new O(n.getTime());
    r.setMonth(n.getMonth() + t + 1, 0);
    const i = r.getDate();
    if (o >= i)
      return r;
    n.setFullYear(r.getFullYear(), r.getMonth(), o);
  }
  return n;
}
function ai(e, t) {
  const n = new O(e.getFullYear(), e.getMonth(), e.getDate()).getTime(), o = new O(t.getFullYear(), t.getMonth(), t.getDate()).getTime();
  return Math.round((n - o) / at);
}
function ju(e, t, n, o) {
  return n > e && n < t || o > e && o < t || n <= e && o >= t;
}
function Ma({
  start: e,
  end: t,
  targetStart: n,
  targetEnd: o,
  goingDuration: r,
  comingDuration: i,
  targetGoingDuration: s,
  targetComingDuration: a,
  usingTravelTime: l
}) {
  return Math.abs(t - e) < Xn && (t += Xn), Math.abs(t - e) < Xn && (t += Xn), l && (e -= Kn("minute", r), t += Kn("minute", i), n -= Kn("minute", s), o += Kn("minute", a)), ju(e, t, n, o);
}
function Xu(e, t, n) {
  return e.id === t && e.calendarId === n;
}
function Ku() {
  let e = 0;
  return {
    next() {
      return e += 1, e;
    }
  };
}
const qu = function() {
  const e = Ku();
  return () => e.next();
}();
function Ns(e) {
  return e.__fe_id || (e.__fe_id = qu()), e.__fe_id;
}
class ci {
  constructor(t = {}) {
    B(this, "id", "");
    B(this, "calendarId", "");
    B(this, "title", "");
    B(this, "body", "");
    B(this, "isAllday", !1);
    B(this, "start", new O());
    B(this, "end", new O());
    B(this, "goingDuration", 0);
    B(this, "comingDuration", 0);
    B(this, "location", "");
    B(this, "attendees", []);
    B(this, "category", "time");
    B(this, "dueDateClass", "");
    B(this, "recurrenceRule", "");
    B(this, "state", "Busy");
    B(this, "isVisible", !0);
    B(this, "isPending", !1);
    B(this, "isFocused", !1);
    B(this, "isReadOnly", !1);
    B(this, "isPrivate", !1);
    B(this, "color");
    B(this, "backgroundColor");
    B(this, "dragBackgroundColor");
    B(this, "borderColor");
    B(this, "customStyle", {});
    B(this, "raw", null);
    B(this, "hasMultiDates", !1);
    Ns(this), this.init(t);
  }
  init({
    id: t = "",
    calendarId: n = "",
    title: o = "",
    body: r = "",
    isAllday: i = !1,
    start: s = new O(),
    end: a = new O(),
    goingDuration: l = 0,
    comingDuration: u = 0,
    location: c = "",
    attendees: f = [],
    category: p = "time",
    dueDateClass: h = "",
    recurrenceRule: m = "",
    state: _ = "Busy",
    isVisible: y = !0,
    isPending: w = !1,
    isFocused: E = !1,
    isReadOnly: T = !1,
    isPrivate: k = !1,
    color: S,
    backgroundColor: N,
    dragBackgroundColor: W,
    borderColor: V,
    customStyle: I = {},
    raw: $ = null
  } = {}) {
    this.id = t, this.calendarId = n, this.title = o, this.body = r, this.isAllday = p === "allday" ? !0 : i, this.goingDuration = l, this.comingDuration = u, this.location = c, this.attendees = f, this.category = p, this.dueDateClass = h, this.recurrenceRule = m, this.state = _, this.isVisible = y, this.isPending = w, this.isFocused = E, this.isReadOnly = T, this.isPrivate = k, this.color = S, this.backgroundColor = N, this.dragBackgroundColor = W, this.borderColor = V, this.customStyle = I, this.raw = $, this.isAllday ? this.setAlldayPeriod(s, a) : this.setTimePeriod(s, a), (p === "milestone" || p === "task") && (this.start = new O(this.end));
  }
  setAlldayPeriod(t, n) {
    let o, r;
    be(t) ? o = ks(t.substring(0, 10)) : o = new O(t || Date.now()), be(n) ? r = ks(n.substring(0, 10)) : r = new O(n || this.start), this.start = o, this.start.setHours(0, 0, 0), this.end = r || new O(this.start), this.end.setHours(23, 59, 59);
  }
  setTimePeriod(t, n) {
    this.start = new O(t || Date.now()), this.end = new O(n || this.start), n || this.end.setMinutes(this.end.getMinutes() + 30), this.hasMultiDates = this.end.getTime() - this.start.getTime() > at;
  }
  getStarts() {
    return this.start;
  }
  getEnds() {
    return this.end;
  }
  cid() {
    return Ns(this);
  }
  equals(t) {
    return !(this.id !== t.id || this.title !== t.title || this.body !== t.body || this.isAllday !== t.isAllday || vt(this.getStarts(), t.getStarts()) !== 0 || vt(this.getEnds(), t.getEnds()) !== 0 || this.color !== t.color || this.backgroundColor !== t.backgroundColor || this.dragBackgroundColor !== t.dragBackgroundColor || this.borderColor !== t.borderColor);
  }
  duration() {
    const t = Number(this.getStarts()), n = Number(this.getEnds());
    let o;
    return this.isAllday ? o = Number(Re(n)) - Number(he(t)) : o = n - t, o;
  }
  valueOf() {
    return this;
  }
  collidesWith(t, n = !0) {
    return t = t instanceof Ct ? t.model : t, Ma({
      start: Number(this.getStarts()),
      end: Number(this.getEnds()),
      targetStart: Number(t.getStarts()),
      targetEnd: Number(t.getEnds()),
      goingDuration: this.goingDuration,
      comingDuration: this.comingDuration,
      targetGoingDuration: t.goingDuration,
      targetComingDuration: t.comingDuration,
      usingTravelTime: n
    });
  }
  toEventObject() {
    return {
      id: this.id,
      calendarId: this.calendarId,
      __cid: this.cid(),
      title: this.title,
      body: this.body,
      isAllday: this.isAllday,
      start: this.start,
      end: this.end,
      goingDuration: this.goingDuration,
      comingDuration: this.comingDuration,
      location: this.location,
      attendees: this.attendees,
      category: this.category,
      dueDateClass: this.dueDateClass,
      recurrenceRule: this.recurrenceRule,
      state: this.state,
      isVisible: this.isVisible,
      isPending: this.isPending,
      isFocused: this.isFocused,
      isReadOnly: this.isReadOnly,
      isPrivate: this.isPrivate,
      color: this.color,
      backgroundColor: this.backgroundColor,
      dragBackgroundColor: this.dragBackgroundColor,
      borderColor: this.borderColor,
      customStyle: this.customStyle,
      raw: this.raw
    };
  }
  getColors() {
    return {
      color: this.color,
      backgroundColor: this.backgroundColor,
      dragBackgroundColor: this.dragBackgroundColor,
      borderColor: this.borderColor
    };
  }
}
B(ci, "schema", {
  required: ["title"],
  dateRange: ["start", "end"]
});
function Zu({ model: e }) {
  const { category: t, isAllday: n, hasMultiDates: o } = e;
  return t === "time" && !n && !o;
}
class Je {
  constructor(t) {
    B(this, "internalMap", /* @__PURE__ */ new Map());
    Cn(t) && (this.getItemID = t);
  }
  static and(...t) {
    const { length: n } = t;
    return (o) => {
      for (let r = 0; r < n; r += 1)
        if (!t[r].call(null, o))
          return !1;
      return !0;
    };
  }
  static or(...t) {
    const { length: n } = t;
    return n ? (o) => {
      let r = t[0].call(null, o);
      for (let i = 1; i < n; i += 1)
        r = r || t[i].call(null, o);
      return r;
    } : () => !1;
  }
  getItemID(t) {
    var n;
    return (n = t == null ? void 0 : t._id) != null ? n : "";
  }
  getFirstItem() {
    return this.internalMap.values().next().value;
  }
  add(...t) {
    return t.forEach((n) => {
      const o = this.getItemID(n);
      this.internalMap.set(o, n);
    }), this;
  }
  remove(...t) {
    const n = [];
    return t.forEach((o) => {
      const r = be(o) || lo(o) ? o : this.getItemID(o);
      !this.internalMap.has(r) || (n.push(this.internalMap.get(r)), this.internalMap.delete(r));
    }), n.length === 1 ? n[0] : n;
  }
  has(t) {
    const n = be(t) || lo(t) ? t : this.getItemID(t);
    return this.internalMap.has(n);
  }
  get(t) {
    var o;
    const n = be(t) || lo(t) ? t : this.getItemID(t);
    return (o = this.internalMap.get(n)) != null ? o : null;
  }
  doWhenHas(t, n) {
    const o = this.internalMap.get(t);
    F(o) || n(o);
  }
  filter(t) {
    const n = new Je();
    return this.hasOwnProperty("getItemID") && (n.getItemID = this.getItemID), this.internalMap.forEach((o) => {
      t(o) === !0 && n.add(o);
    }), n;
  }
  groupBy(t) {
    const n = {};
    return this.internalMap.forEach((o) => {
      var i;
      let r = Cn(t) ? t(o) : o[t];
      Cn(r) && (r = r.call(o)), (i = n[r]) != null || (n[r] = new Je(this.getItemID)), n[r].add(o);
    }), n;
  }
  find(t) {
    let n = null;
    const o = this.internalMap.values();
    let r = o.next();
    for (; r.done === !1; ) {
      if (t(r.value)) {
        n = r.value;
        break;
      }
      r = o.next();
    }
    return n;
  }
  sort(t) {
    return this.toArray().sort(t);
  }
  each(t) {
    const n = this.internalMap.entries();
    let o = n.next();
    for (; o.done === !1; ) {
      const [r, i] = o.value;
      if (t(i, r) === !1)
        break;
      o = n.next();
    }
  }
  clear() {
    this.internalMap.clear();
  }
  toArray() {
    return Array.from(this.internalMap.values());
  }
  get size() {
    return this.internalMap.size;
  }
}
function Qt(...e) {
  const t = new Je((n) => n.cid());
  return e.length && t.add(...e), t;
}
function Aa(e, t) {
  return Ar(he(e), Re(t), at);
}
function Ju(e) {
  return e.isAllday || e.category === "time" && Number(e.end) - Number(e.start) > at;
}
function Qu(e) {
  const { model: t } = e;
  return Ju(t) ? "allday" : t.category;
}
function xa(e, t) {
  Aa(t.getStarts(), t.getEnds()).forEach((o) => {
    const r = me(o, "YYYYMMDD");
    (e[r] = e[r] || []).push(t.cid());
  });
}
function Ra(e, t) {
  const n = t.cid();
  Object.values(e).forEach((o) => {
    const r = o.indexOf(n);
    ~r && o.splice(r, 1);
  });
}
function ed(e, t) {
  return e.events.add(t), xa(e.idsOfDay, t), t;
}
function td(e, t) {
  const n = new ci(t);
  return ed(e, n);
}
function nd(e, t = []) {
  return t.map((n) => td(e, n));
}
function od(e, t, n, o) {
  const { idsOfDay: r } = e, i = e.events.find((s) => Xu(s, t, n));
  return i ? (i.init(x(x({}, i), o)), Ra(r, i), xa(r, i), !0) : !1;
}
function rd(e, t) {
  return Ra(e.idsOfDay, t), e.events.remove(t), t;
}
function id(e) {
  e.idsOfDay = {}, e.events.clear();
}
function sd(e = []) {
  return {
    calendar: {
      calendars: e,
      events: Qt(),
      idsOfDay: {}
    }
  };
}
function ad(e) {
  return {
    createEvents: (t) => e(
      Q((n) => {
        nd(n.calendar, t);
      })
    ),
    updateEvent: ({ event: t, eventData: n }) => e(
      Q((o) => {
        od(
          o.calendar,
          t.id,
          t.calendarId,
          n
        );
      })
    ),
    deleteEvent: (t) => e(
      Q((n) => {
        rd(n.calendar, t);
      })
    ),
    clearEvents: () => e(
      Q((t) => {
        id(t.calendar);
      })
    ),
    setCalendars: (t) => e(
      Q((n) => {
        n.calendar.calendars = t;
      })
    ),
    setCalendarColor: (t, n) => e(
      Q((o) => {
        const r = o.calendar.calendars.map((a) => a.id === t ? x(x({}, a), n) : a), i = o.calendar.events.toArray().map((a) => {
          var l, u, c, f;
          return a.calendarId === t && (a.color = (l = n.color) != null ? l : a.color, a.backgroundColor = (u = n.backgroundColor) != null ? u : a.backgroundColor, a.borderColor = (c = n.borderColor) != null ? c : a.borderColor, a.dragBackgroundColor = (f = n.dragBackgroundColor) != null ? f : a.dragBackgroundColor), a;
        }), s = Qt(...i);
        o.calendar.calendars = r, o.calendar.events = s;
      })
    ),
    setCalendarVisibility: (t, n) => e(
      Q((o) => {
        const r = o.calendar.events.toArray();
        o.calendar.events = Qt(
          ...r.map((i) => (t.includes(i.calendarId) && (i.isVisible = n), i))
        );
      })
    )
  };
}
var Ve = /* @__PURE__ */ ((e) => (e[e.IDLE = 0] = "IDLE", e[e.INIT = 1] = "INIT", e[e.DRAGGING = 2] = "DRAGGING", e[e.CANCELED = 3] = "CANCELED", e))(Ve || {});
function xr() {
  return {
    dnd: {
      draggingItemType: null,
      draggingState: 0,
      initX: null,
      initY: null,
      x: null,
      y: null,
      draggingEventUIModel: null
    }
  };
}
function cd(e) {
  return {
    initDrag: (t) => {
      e(
        Q((n) => {
          n.dnd = ce(x(x({}, n.dnd), t), {
            draggingState: 1
          });
        })
      );
    },
    setDragging: (t) => {
      e(
        Q((n) => {
          n.dnd = ce(x(x({}, n.dnd), t), {
            draggingState: 2
          });
        })
      );
    },
    cancelDrag: () => {
      e(
        Q((t) => {
          t.dnd = xr().dnd, t.dnd.draggingState = 3;
        })
      );
    },
    reset: () => {
      e(
        Q((t) => {
          t.dnd = xr().dnd;
        })
      );
    },
    setDraggingEventUIModel: (t) => {
      e(
        Q((n) => {
          var o;
          n.dnd.draggingEventUIModel = (o = t == null ? void 0 : t.clone()) != null ? o : null;
        })
      );
    }
  };
}
function Oa() {
  return {
    gridSelection: {
      dayGridMonth: null,
      dayGridWeek: null,
      timeGrid: null,
      accumulated: {
        dayGridMonth: []
      }
    }
  };
}
function ld(e) {
  return {
    setGridSelection: (t, n) => {
      e(
        Q((o) => {
          o.gridSelection[t] = n;
        })
      );
    },
    addGridSelection: (t, n) => {
      e(
        Q((o) => {
          t === "dayGridMonth" && n && (o.gridSelection.accumulated[t] = [
            ...o.gridSelection.accumulated[t],
            n
          ], o.gridSelection.dayGridMonth = null);
        })
      );
    },
    clearAll: () => e(
      Q((t) => {
        t.gridSelection = Oa().gridSelection;
      })
    )
  };
}
const Rr = 3, Ro = -1;
function qn(e, t, n) {
  return Object.keys(e).reduce((o, r) => r === t ? o : o - e[r].height - Rr, n);
}
function ud() {
  return {
    layout: 500,
    weekViewLayout: {
      lastPanelType: null,
      dayGridRows: {},
      selectedDuplicateEventCid: Ro
    }
  };
}
function dd(e) {
  return {
    setLastPanelType: (t) => {
      e(
        Q((n) => {
          n.weekViewLayout.lastPanelType = t, t && (n.weekViewLayout.dayGridRows[t].height = qn(
            n.weekViewLayout.dayGridRows,
            t,
            n.layout
          ));
        })
      );
    },
    updateLayoutHeight: (t) => e(
      Q((n) => {
        const { lastPanelType: o } = n.weekViewLayout;
        n.layout = t, o && (n.weekViewLayout.dayGridRows[o].height = qn(
          n.weekViewLayout.dayGridRows,
          o,
          t
        ));
      })
    ),
    updateDayGridRowHeight: ({ rowName: t, height: n }) => e(
      Q((o) => {
        const { lastPanelType: r } = o.weekViewLayout;
        o.weekViewLayout.dayGridRows[t] = { height: n }, r && (o.weekViewLayout.dayGridRows[r].height = qn(
          o.weekViewLayout.dayGridRows,
          r,
          o.layout
        ));
      })
    ),
    updateDayGridRowHeightByDiff: ({ rowName: t, diff: n }) => e(
      Q((o) => {
        var s, a, l;
        const { lastPanelType: r } = o.weekViewLayout, i = (l = (a = (s = o.weekViewLayout.dayGridRows) == null ? void 0 : s[t]) == null ? void 0 : a.height) != null ? l : Jt;
        o.weekViewLayout.dayGridRows[t] = { height: i + n }, r && (o.weekViewLayout.dayGridRows[r].height = qn(
          o.weekViewLayout.dayGridRows,
          r,
          o.layout
        ));
      })
    ),
    setSelectedDuplicateEventCid: (t) => e(
      Q((n) => {
        n.weekViewLayout.selectedDuplicateEventCid = t != null ? t : Ro;
      })
    )
  };
}
function Oo(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
const Pa = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"], So = (e) => Pa[e];
function La(e, t) {
  return e.map((n) => {
    const o = n.getDay(), r = t.length > 0 ? t[o] : Oo(So(o));
    return {
      date: n.getDate(),
      day: n.getDay(),
      dayName: r,
      isToday: !0,
      renderDate: "date",
      dateInstance: n
    };
  });
}
function Ha(e) {
  if (!e)
    return !1;
  const t = {
    getDuplicateEvents: (n, o) => o.filter(
      (r) => r.title === n.title && vt(r.start, n.start) === 0 && vt(r.end, n.end) === 0
    ).sort((r, i) => r.calendarId > i.calendarId ? 1 : -1),
    getMainEvent: (n) => it(n)
  };
  return ei(e) ? t : x(x({}, t), e);
}
function fd(e = {}) {
  const t = x({
    startDayOfWeek: rn.SUN,
    dayNames: [],
    narrowWeekend: !1,
    workweek: !1,
    showNowIndicator: !0,
    showTimezoneCollapseButton: !1,
    timezonesCollapsed: !1,
    hourStart: 0,
    hourEnd: 24,
    eventView: !0,
    taskView: !0,
    collapseDuplicateEvents: !1
  }, e);
  return t.collapseDuplicateEvents = Ha(t.collapseDuplicateEvents), t;
}
function pd(e = {}) {
  return x({
    zones: []
  }, e);
}
function md(e = {}) {
  const t = x({
    dayNames: [],
    visibleWeeksCount: 0,
    workweek: !1,
    narrowWeekend: !1,
    startDayOfWeek: rn.SUN,
    isAlways6Weeks: !0,
    visibleEventCount: 6
  }, e);
  return t.dayNames.length === 0 && (t.dayNames = Pa.slice()), t;
}
function $a(e) {
  return ei(e) ? {
    enableDblClick: e,
    enableClick: e
  } : x({
    enableDblClick: !0,
    enableClick: !0
  }, e);
}
const hd = (e) => !!e.isVisible;
function gd(e = {}) {
  var t, n, o, r, i, s, a;
  return {
    options: {
      defaultView: (t = e.defaultView) != null ? t : "week",
      useFormPopup: (n = e.useFormPopup) != null ? n : !1,
      useDetailPopup: (o = e.useDetailPopup) != null ? o : !1,
      isReadOnly: (r = e.isReadOnly) != null ? r : !1,
      week: fd(e.week),
      month: md(e.month),
      gridSelection: $a(e.gridSelection),
      usageStatistics: (i = e.usageStatistics) != null ? i : !0,
      eventFilter: (s = e.eventFilter) != null ? s : hd,
      timezone: pd(e.timezone),
      onClickTimeGrid: (a = e.onClickTimeGrid) != null ? a : function() {
        return null;
      }
    }
  };
}
function vd(e) {
  return {
    setOptions: (t = {}) => e(
      Q((n) => {
        var o;
        t.gridSelection && (t.gridSelection = $a(t.gridSelection)), (o = t.week) != null && o.collapseDuplicateEvents && (t.week.collapseDuplicateEvents = Ha(
          t.week.collapseDuplicateEvents
        )), Ye(n.options, t);
      })
    )
  };
}
var Po = /* @__PURE__ */ ((e) => (e.SeeMore = "seeMore", e.Form = "form", e.Detail = "detail", e))(Po || {});
function _d() {
  return {
    popup: {
      seeMore: null,
      form: null,
      detail: null
    }
  };
}
function yd(e) {
  return {
    showSeeMorePopup: (t) => e(
      Q((n) => {
        n.popup.seeMore = t, n.popup.form = null, n.popup.detail = null;
      })
    ),
    showFormPopup: (t) => e(
      Q((n) => {
        n.popup.form = t, n.popup.seeMore = null, n.popup.detail = null;
      })
    ),
    showDetailPopup: (t, n) => e(
      Q((o) => {
        o.popup.detail = t, o.popup.form = null, n || (o.popup.seeMore = null);
      })
    ),
    hideSeeMorePopup: () => e(
      Q((t) => {
        t.popup.seeMore = null;
      })
    ),
    hideFormPopup: () => e(
      Q((t) => {
        t.popup.form = null;
      })
    ),
    hideDetailPopup: () => e(
      Q((t) => {
        t.popup.detail = null;
      })
    ),
    hideAllPopup: () => e(
      Q((t) => {
        t.popup.seeMore = null, t.popup.form = null, t.popup.detail = null;
      })
    )
  };
}
const an = () => {
}, wd = /^auto$|^$|%/;
function Is(e, t) {
  let n = e.style[t];
  if ((!n || n === "auto") && document.defaultView) {
    const o = document.defaultView.getComputedStyle(e, null);
    n = o ? o[t] : null;
  }
  return n === "auto" ? null : n;
}
function Ms(e) {
  return be(e) ? wd.test(e) : e === null;
}
function Ba(e) {
  const t = Is(e, "width"), n = Is(e, "height");
  if ((Ms(t) || Ms(n)) && e.getBoundingClientRect) {
    const { width: o, height: r } = e.getBoundingClientRect();
    return {
      width: o || e.offsetWidth,
      height: r || e.offsetHeight
    };
  }
  return {
    width: parseFloat(t != null ? t : "0"),
    height: parseFloat(n != null ? n : "0")
  };
}
const Ed = typeof Element == "undefined" ? an : Element, hr = Ed.prototype;
hr.matches || hr.webkitMatchesSelector || hr.msMatchesSelector;
function Zn(e) {
  return e.replace(/<([^>]+)>/gi, "");
}
const zt = 60, Dd = {
  milestone(e) {
    const t = v("icon", "ic-milestone");
    return /* @__PURE__ */ d(xe, null, /* @__PURE__ */ d("span", {
      className: t
    }), /* @__PURE__ */ d("span", {
      style: {
        backgroundColor: e.backgroundColor
      }
    }, Zn(e.title)));
  },
  milestoneTitle() {
    return /* @__PURE__ */ d("span", {
      className: v("left-content")
    }, "Milestone");
  },
  task(e) {
    return `#${e.title}`;
  },
  taskTitle() {
    return /* @__PURE__ */ d("span", {
      className: v("left-content")
    }, "Task");
  },
  alldayTitle() {
    return /* @__PURE__ */ d("span", {
      className: v("left-content")
    }, "All Day");
  },
  allday(e) {
    return Zn(e.title);
  },
  time(e) {
    const { start: t, title: n } = e;
    return t ? /* @__PURE__ */ d("span", null, /* @__PURE__ */ d("strong", null, me(t, "HH:mm")), "\xA0", /* @__PURE__ */ d("span", null, Zn(n))) : Zn(n);
  },
  goingDuration(e) {
    const { goingDuration: t } = e, n = Math.floor(t / zt), o = t % zt;
    return `GoingTime ${Me(n, 2)}:${Me(o, 2)}`;
  },
  comingDuration(e) {
    const { comingDuration: t } = e, n = Math.floor(t / zt), o = t % zt;
    return `ComingTime ${Me(n, 2)}:${Me(o, 2)}`;
  },
  monthMoreTitleDate(e) {
    const { date: t, day: n } = e, o = v("more-title-date"), r = v("more-title-day"), i = Oo(So(n));
    return /* @__PURE__ */ d(xe, null, /* @__PURE__ */ d("span", {
      className: o
    }, t), /* @__PURE__ */ d("span", {
      className: r
    }, i));
  },
  monthMoreClose() {
    return "";
  },
  monthGridHeader(e) {
    const t = parseInt(e.date.split("-")[2], 10), n = v("weekday-grid-date", { "weekday-grid-date-decorator": e.isToday });
    return /* @__PURE__ */ d("span", {
      className: n
    }, t);
  },
  monthGridHeaderExceed(e) {
    const t = v("weekday-grid-more-events");
    return /* @__PURE__ */ d("span", {
      className: t
    }, e.hiddenEventCount, " more");
  },
  monthGridFooter(e) {
    return "";
  },
  monthGridFooterExceed(e) {
    return "";
  },
  monthDayName(e) {
    return e.label;
  },
  weekDayName(e) {
    const t = v("day-name__date"), n = v("day-name__name");
    return /* @__PURE__ */ d(xe, null, /* @__PURE__ */ d("span", {
      className: t
    }, e.date), "\xA0\xA0", /* @__PURE__ */ d("span", {
      className: n
    }, e.dayName));
  },
  weekGridFooterExceed(e) {
    return `+${e}`;
  },
  collapseBtnTitle() {
    const e = v("collapse-btn-icon");
    return /* @__PURE__ */ d("span", {
      className: e
    });
  },
  timezoneDisplayLabel({ displayLabel: e, timezoneOffset: t }) {
    if (F(e) && L(t)) {
      const n = t < 0 ? "-" : "+", o = Math.abs(t / zt), r = Math.abs(t % zt);
      return `GMT${n}${Me(o, 2)}:${Me(r, 2)}`;
    }
    return e;
  },
  timegridDisplayPrimaryTime(e) {
    const { time: t } = e;
    return me(t, "hh tt");
  },
  timegridDisplayTime(e) {
    const { time: t } = e;
    return me(t, "HH:mm");
  },
  timegridNowIndicatorLabel(e) {
    const { time: t, format: n = "HH:mm" } = e;
    return me(t, n);
  },
  popupIsAllday() {
    return "All day";
  },
  popupStateFree() {
    return "Free";
  },
  popupStateBusy() {
    return "Busy";
  },
  titlePlaceholder() {
    return "Subject";
  },
  locationPlaceholder() {
    return "Location";
  },
  startDatePlaceholder() {
    return "Start date";
  },
  endDatePlaceholder() {
    return "End date";
  },
  popupSave() {
    return "Save";
  },
  popupUpdate() {
    return "Update";
  },
  popupEdit() {
    return "Edit";
  },
  popupDelete() {
    return "Delete";
  },
  popupDetailTitle({ title: e }) {
    return e;
  },
  popupDetailDate({ isAllday: e, start: t, end: n }) {
    const o = "YYYY.MM.DD", r = "hh:mm tt", i = `${o} ${r}`, s = me(t, e ? o : r), a = Nt(t, n) ? r : i;
    return e ? `${s}${Nt(t, n) ? "" : ` - ${me(n, o)}`}` : `${me(t, i)} - ${me(n, a)}`;
  },
  popupDetailLocation({ location: e }) {
    return e;
  },
  popupDetailAttendees({ attendees: e = [] }) {
    return e.join(", ");
  },
  popupDetailState({ state: e }) {
    return e || "Busy";
  },
  popupDetailRecurrenceRule({ recurrenceRule: e }) {
    return e;
  },
  popupDetailBody({ body: e }) {
    return e;
  }
};
function Sd(e = {}) {
  return {
    template: x(x({}, Dd), e)
  };
}
function Td(e) {
  return {
    setTemplate: (t) => e(
      Q((n) => {
        n.template = x(x({}, n.template), t);
      })
    )
  };
}
function bd(e = "week") {
  const t = new O();
  return t.setHours(0, 0, 0, 0), {
    view: {
      currentView: e,
      renderDate: t
    }
  };
}
function Cd(e) {
  return {
    changeView: (t) => e(
      Q((n) => {
        n.view.currentView = t;
      })
    ),
    setRenderDate: (t) => e(
      Q((n) => {
        n.view.renderDate = he(t);
      })
    )
  };
}
const kd = Be(window) || !window.navigator, As = kd ? re : ht;
function Ga() {
  const e = Io(null);
  function t({
    children: r,
    store: i
  }) {
    return d(e.Provider, { value: i, children: r });
  }
  return {
    StoreProvider: t,
    useStore: (r, i = Object.is) => {
      const s = Mn(e);
      if (F(s))
        throw new Error("StoreProvider is not found");
      const [, a] = Wr((E) => E + 1, 0), l = s.getState(), u = te(l), c = te(r), f = te(i), p = te(!1), h = te();
      Be(h.current) && (h.current = r(l));
      let m, _ = !1;
      (u.current !== l || c.current !== r || f.current !== i || p.current) && (m = r(l), _ = !i(h.current, m)), As(() => {
        _ && (h.current = m), u.current = l, c.current = r, f.current = i, p.current = !1;
      });
      const w = te(l);
      return As(() => {
        const E = () => {
          try {
            const k = s.getState(), S = c.current(k);
            !f.current(
              h.current,
              S
            ) && (u.current = k, h.current = m, a());
          } catch (k) {
            console.error("[toastui-calendar] failed to update state", k == null ? void 0 : k.message), p.current = !0, a();
          }
        }, T = s.subscribe(E);
        return s.getState() !== w.current && E(), T;
      }, []), _ ? m : h.current;
    },
    useInternalStore: () => {
      const r = Mn(e);
      if (F(r))
        throw new Error("StoreProvider is not found");
      return U(() => r, [r]);
    }
  };
}
function Fa(e) {
  let t;
  const n = /* @__PURE__ */ new Set(), o = (l) => {
    const u = l(t);
    if (u !== t) {
      const c = t;
      t = x(x({}, t), u), n.forEach((f) => f(t, c));
    }
  }, r = () => t, a = { setState: o, getState: r, subscribe: (l, u, c) => {
    let f = l;
    if (u) {
      let p = u(t);
      const h = c != null ? c : Object.is;
      f = () => {
        const m = u(t);
        if (!h(p, m)) {
          const _ = p;
          p = m, l(p, _);
        }
      };
    }
    return n.add(f), () => n.delete(f);
  }, clearListeners: () => n.clear() };
  return t = e(o, r, a), a;
}
const Nd = (e) => (t) => ce(x(x(x(x(x(x(x(x({}, gd(e)), Sd(e.template)), _d()), ud()), sd(e.calendars)), bd(e.defaultView)), xr()), Oa()), {
  dispatch: {
    options: vd(t),
    popup: yd(t),
    weekViewLayout: dd(t),
    calendar: ad(t),
    view: Cd(t),
    dnd: cd(t),
    gridSelection: ld(t),
    template: Td(t)
  }
}), Id = (e = {}) => Fa(Nd(e)), { StoreProvider: Md, useStore: z, useInternalStore: Ua } = Ga();
function Se(e) {
  return z(
    ee(
      (t) => e ? t.dispatch[e] : t.dispatch,
      [e]
    )
  );
}
function yt(e) {
  return (t) => t[e];
}
const Lo = yt("calendar"), za = yt(
  "weekViewLayout"
), Wa = yt("template"), cn = yt("view"), je = yt("options"), At = yt("dnd");
var gr = { exports: {} };
/*! @license DOMPurify 2.3.8 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.3.8/LICENSE */
var xs;
function Rs() {
  return xs || (xs = 1, function(e, t) {
    (function(n, o) {
      e.exports = o();
    })(Kl, function() {
      function n(M) {
        return n = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(A) {
          return typeof A;
        } : function(A) {
          return A && typeof Symbol == "function" && A.constructor === Symbol && A !== Symbol.prototype ? "symbol" : typeof A;
        }, n(M);
      }
      function o(M, A) {
        return o = Object.setPrototypeOf || function(J, fe) {
          return J.__proto__ = fe, J;
        }, o(M, A);
      }
      function r() {
        if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham)
          return !1;
        if (typeof Proxy == "function")
          return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          })), !0;
        } catch (M) {
          return !1;
        }
      }
      function i(M, A, Y) {
        return r() ? i = Reflect.construct : i = function(fe, Lt, dt) {
          var ft = [null];
          ft.push.apply(ft, Lt);
          var mn = Function.bind.apply(fe, ft), hn = new mn();
          return dt && o(hn, dt.prototype), hn;
        }, i.apply(null, arguments);
      }
      function s(M) {
        return a(M) || l(M) || u(M) || f();
      }
      function a(M) {
        if (Array.isArray(M))
          return c(M);
      }
      function l(M) {
        if (typeof Symbol != "undefined" && M[Symbol.iterator] != null || M["@@iterator"] != null)
          return Array.from(M);
      }
      function u(M, A) {
        if (!!M) {
          if (typeof M == "string")
            return c(M, A);
          var Y = Object.prototype.toString.call(M).slice(8, -1);
          if (Y === "Object" && M.constructor && (Y = M.constructor.name), Y === "Map" || Y === "Set")
            return Array.from(M);
          if (Y === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Y))
            return c(M, A);
        }
      }
      function c(M, A) {
        (A == null || A > M.length) && (A = M.length);
        for (var Y = 0, J = new Array(A); Y < A; Y++)
          J[Y] = M[Y];
        return J;
      }
      function f() {
        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      var p = Object.hasOwnProperty, h = Object.setPrototypeOf, m = Object.isFrozen, _ = Object.getPrototypeOf, y = Object.getOwnPropertyDescriptor, w = Object.freeze, E = Object.seal, T = Object.create, k = typeof Reflect != "undefined" && Reflect, S = k.apply, N = k.construct;
      S || (S = function(A, Y, J) {
        return A.apply(Y, J);
      }), w || (w = function(A) {
        return A;
      }), E || (E = function(A) {
        return A;
      }), N || (N = function(A, Y) {
        return i(A, s(Y));
      });
      var W = oe(Array.prototype.forEach), V = oe(Array.prototype.pop), I = oe(Array.prototype.push), $ = oe(String.prototype.toLowerCase), R = oe(String.prototype.match), K = oe(String.prototype.replace), q = oe(String.prototype.indexOf), D = oe(String.prototype.trim), b = oe(RegExp.prototype.test), Z = Ce(TypeError);
      function oe(M) {
        return function(A) {
          for (var Y = arguments.length, J = new Array(Y > 1 ? Y - 1 : 0), fe = 1; fe < Y; fe++)
            J[fe - 1] = arguments[fe];
          return S(M, A, J);
        };
      }
      function Ce(M) {
        return function() {
          for (var A = arguments.length, Y = new Array(A), J = 0; J < A; J++)
            Y[J] = arguments[J];
          return N(M, Y);
        };
      }
      function j(M, A) {
        h && h(M, null);
        for (var Y = A.length; Y--; ) {
          var J = A[Y];
          if (typeof J == "string") {
            var fe = $(J);
            fe !== J && (m(A) || (A[Y] = fe), J = fe);
          }
          M[J] = !0;
        }
        return M;
      }
      function de(M) {
        var A = T(null), Y;
        for (Y in M)
          S(p, M, [Y]) && (A[Y] = M[Y]);
        return A;
      }
      function Oe(M, A) {
        for (; M !== null; ) {
          var Y = y(M, A);
          if (Y) {
            if (Y.get)
              return oe(Y.get);
            if (typeof Y.value == "function")
              return oe(Y.value);
          }
          M = _(M);
        }
        function J(fe) {
          return console.warn("fallback value for", fe), null;
        }
        return J;
      }
      var Et = w(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), ue = w(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Ue = w(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Pe = w(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), lt = w(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]), pn = w(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Rt = w(["#text"]), Ot = w(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]), ut = w(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Pt = w(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), $n = w(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), jc = E(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Xc = E(/<%[\w\W]*|[\w\W]*%>/gm), Kc = E(/^data-[\-\w.\u00B7-\uFFFF]/), qc = E(/^aria-[\-\w]+$/), Zc = E(
        /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
      ), Jc = E(/^(?:\w+script|data):/i), Qc = E(
        /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
      ), el = E(/^html$/i), tl = function() {
        return typeof window == "undefined" ? null : window;
      }, nl = function(A, Y) {
        if (n(A) !== "object" || typeof A.createPolicy != "function")
          return null;
        var J = null, fe = "data-tt-policy-suffix";
        Y.currentScript && Y.currentScript.hasAttribute(fe) && (J = Y.currentScript.getAttribute(fe));
        var Lt = "dompurify" + (J ? "#" + J : "");
        try {
          return A.createPolicy(Lt, {
            createHTML: function(ft) {
              return ft;
            }
          });
        } catch (dt) {
          return console.warn("TrustedTypes policy " + Lt + " could not be created."), null;
        }
      };
      function Ii() {
        var M = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : tl(), A = function(g) {
          return Ii(g);
        };
        if (A.version = "2.3.8", A.removed = [], !M || !M.document || M.document.nodeType !== 9)
          return A.isSupported = !1, A;
        var Y = M.document, J = M.document, fe = M.DocumentFragment, Lt = M.HTMLTemplateElement, dt = M.Node, ft = M.Element, mn = M.NodeFilter, hn = M.NamedNodeMap, rl = hn === void 0 ? M.NamedNodeMap || M.MozNamedAttrMap : hn, il = M.HTMLFormElement, sl = M.DOMParser, al = M.trustedTypes, Bn = ft.prototype, cl = Oe(Bn, "cloneNode"), ll = Oe(Bn, "nextSibling"), ul = Oe(Bn, "childNodes"), zo = Oe(Bn, "parentNode");
        if (typeof Lt == "function") {
          var Wo = J.createElement("template");
          Wo.content && Wo.content.ownerDocument && (J = Wo.content.ownerDocument);
        }
        var pt = nl(al, Y), Mi = pt ? pt.createHTML("") : "", Gn = J, Yo = Gn.implementation, dl = Gn.createNodeIterator, fl = Gn.createDocumentFragment, pl = Gn.getElementsByTagName, ml = Y.importNode, Ai = {};
        try {
          Ai = de(J).documentMode ? J.documentMode : {};
        } catch (G) {
        }
        var Xe = {};
        A.isSupported = typeof zo == "function" && Yo && typeof Yo.createHTMLDocument != "undefined" && Ai !== 9;
        var Vo = jc, jo = Xc, hl = Kc, gl = qc, vl = Jc, xi = Qc, Xo = Zc, ge = null, Ri = j({}, [].concat(s(Et), s(ue), s(Ue), s(lt), s(Rt))), ye = null, Oi = j({}, [].concat(s(Ot), s(ut), s(Pt), s($n))), pe = Object.seal(Object.create(null, {
          tagNameCheck: {
            writable: !0,
            configurable: !1,
            enumerable: !0,
            value: null
          },
          attributeNameCheck: {
            writable: !0,
            configurable: !1,
            enumerable: !0,
            value: null
          },
          allowCustomizedBuiltInElements: {
            writable: !0,
            configurable: !1,
            enumerable: !0,
            value: !1
          }
        })), gn = null, Ko = null, Pi = !0, qo = !0, Li = !1, Ht = !1, Dt = !1, Zo = !1, Jo = !1, $t = !1, Fn = !1, Un = !1, Hi = !0, Qo = !0, vn = !1, Bt = {}, Gt = null, $i = j({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), Bi = null, Gi = j({}, ["audio", "video", "img", "source", "image", "track"]), er = null, Fi = j({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), tr = "http://www.w3.org/1998/Math/MathML", nr = "http://www.w3.org/2000/svg", mt = "http://www.w3.org/1999/xhtml", zn = mt, or = !1, Ft, _l = ["application/xhtml+xml", "text/html"], yl = "text/html", St, Ut = null, wl = J.createElement("form"), Ui = function(g) {
          return g instanceof RegExp || g instanceof Function;
        }, rr = function(g) {
          Ut && Ut === g || ((!g || n(g) !== "object") && (g = {}), g = de(g), ge = "ALLOWED_TAGS" in g ? j({}, g.ALLOWED_TAGS) : Ri, ye = "ALLOWED_ATTR" in g ? j({}, g.ALLOWED_ATTR) : Oi, er = "ADD_URI_SAFE_ATTR" in g ? j(de(Fi), g.ADD_URI_SAFE_ATTR) : Fi, Bi = "ADD_DATA_URI_TAGS" in g ? j(de(Gi), g.ADD_DATA_URI_TAGS) : Gi, Gt = "FORBID_CONTENTS" in g ? j({}, g.FORBID_CONTENTS) : $i, gn = "FORBID_TAGS" in g ? j({}, g.FORBID_TAGS) : {}, Ko = "FORBID_ATTR" in g ? j({}, g.FORBID_ATTR) : {}, Bt = "USE_PROFILES" in g ? g.USE_PROFILES : !1, Pi = g.ALLOW_ARIA_ATTR !== !1, qo = g.ALLOW_DATA_ATTR !== !1, Li = g.ALLOW_UNKNOWN_PROTOCOLS || !1, Ht = g.SAFE_FOR_TEMPLATES || !1, Dt = g.WHOLE_DOCUMENT || !1, $t = g.RETURN_DOM || !1, Fn = g.RETURN_DOM_FRAGMENT || !1, Un = g.RETURN_TRUSTED_TYPE || !1, Jo = g.FORCE_BODY || !1, Hi = g.SANITIZE_DOM !== !1, Qo = g.KEEP_CONTENT !== !1, vn = g.IN_PLACE || !1, Xo = g.ALLOWED_URI_REGEXP || Xo, zn = g.NAMESPACE || mt, g.CUSTOM_ELEMENT_HANDLING && Ui(g.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (pe.tagNameCheck = g.CUSTOM_ELEMENT_HANDLING.tagNameCheck), g.CUSTOM_ELEMENT_HANDLING && Ui(g.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (pe.attributeNameCheck = g.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), g.CUSTOM_ELEMENT_HANDLING && typeof g.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (pe.allowCustomizedBuiltInElements = g.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), Ft = _l.indexOf(g.PARSER_MEDIA_TYPE) === -1 ? Ft = yl : Ft = g.PARSER_MEDIA_TYPE, St = Ft === "application/xhtml+xml" ? function(C) {
            return C;
          } : $, Ht && (qo = !1), Fn && ($t = !0), Bt && (ge = j({}, s(Rt)), ye = [], Bt.html === !0 && (j(ge, Et), j(ye, Ot)), Bt.svg === !0 && (j(ge, ue), j(ye, ut), j(ye, $n)), Bt.svgFilters === !0 && (j(ge, Ue), j(ye, ut), j(ye, $n)), Bt.mathMl === !0 && (j(ge, lt), j(ye, Pt), j(ye, $n))), g.ADD_TAGS && (ge === Ri && (ge = de(ge)), j(ge, g.ADD_TAGS)), g.ADD_ATTR && (ye === Oi && (ye = de(ye)), j(ye, g.ADD_ATTR)), g.ADD_URI_SAFE_ATTR && j(er, g.ADD_URI_SAFE_ATTR), g.FORBID_CONTENTS && (Gt === $i && (Gt = de(Gt)), j(Gt, g.FORBID_CONTENTS)), Qo && (ge["#text"] = !0), Dt && j(ge, ["html", "head", "body"]), ge.table && (j(ge, ["tbody"]), delete gn.tbody), w && w(g), Ut = g);
        }, zi = j({}, ["mi", "mo", "mn", "ms", "mtext"]), Wi = j({}, ["foreignobject", "desc", "title", "annotation-xml"]), El = j({}, ["title", "style", "font", "a", "script"]), Wn = j({}, ue);
        j(Wn, Ue), j(Wn, Pe);
        var ir = j({}, lt);
        j(ir, pn);
        var Dl = function(g) {
          var C = zo(g);
          (!C || !C.tagName) && (C = {
            namespaceURI: mt,
            tagName: "template"
          });
          var P = $(g.tagName), ie = $(C.tagName);
          return g.namespaceURI === nr ? C.namespaceURI === mt ? P === "svg" : C.namespaceURI === tr ? P === "svg" && (ie === "annotation-xml" || zi[ie]) : Boolean(Wn[P]) : g.namespaceURI === tr ? C.namespaceURI === mt ? P === "math" : C.namespaceURI === nr ? P === "math" && Wi[ie] : Boolean(ir[P]) : g.namespaceURI === mt ? C.namespaceURI === nr && !Wi[ie] || C.namespaceURI === tr && !zi[ie] ? !1 : !ir[P] && (El[P] || !Wn[P]) : !1;
        }, et = function(g) {
          I(A.removed, {
            element: g
          });
          try {
            g.parentNode.removeChild(g);
          } catch (C) {
            try {
              g.outerHTML = Mi;
            } catch (P) {
              g.remove();
            }
          }
        }, Yi = function(g, C) {
          try {
            I(A.removed, {
              attribute: C.getAttributeNode(g),
              from: C
            });
          } catch (P) {
            I(A.removed, {
              attribute: null,
              from: C
            });
          }
          if (C.removeAttribute(g), g === "is" && !ye[g])
            if ($t || Fn)
              try {
                et(C);
              } catch (P) {
              }
            else
              try {
                C.setAttribute(g, "");
              } catch (P) {
              }
        }, Vi = function(g) {
          var C, P;
          if (Jo)
            g = "<remove></remove>" + g;
          else {
            var ie = R(g, /^[\r\n\t ]+/);
            P = ie && ie[0];
          }
          Ft === "application/xhtml+xml" && (g = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + g + "</body></html>");
          var Ie = pt ? pt.createHTML(g) : g;
          if (zn === mt)
            try {
              C = new sl().parseFromString(Ie, Ft);
            } catch (we) {
            }
          if (!C || !C.documentElement) {
            C = Yo.createDocument(zn, "template", null);
            try {
              C.documentElement.innerHTML = or ? "" : Ie;
            } catch (we) {
            }
          }
          var Te = C.body || C.documentElement;
          return g && P && Te.insertBefore(J.createTextNode(P), Te.childNodes[0] || null), zn === mt ? pl.call(C, Dt ? "html" : "body")[0] : Dt ? C.documentElement : Te;
        }, ji = function(g) {
          return dl.call(
            g.ownerDocument || g,
            g,
            mn.SHOW_ELEMENT | mn.SHOW_COMMENT | mn.SHOW_TEXT,
            null,
            !1
          );
        }, Sl = function(g) {
          return g instanceof il && (typeof g.nodeName != "string" || typeof g.textContent != "string" || typeof g.removeChild != "function" || !(g.attributes instanceof rl) || typeof g.removeAttribute != "function" || typeof g.setAttribute != "function" || typeof g.namespaceURI != "string" || typeof g.insertBefore != "function");
        }, _n = function(g) {
          return n(dt) === "object" ? g instanceof dt : g && n(g) === "object" && typeof g.nodeType == "number" && typeof g.nodeName == "string";
        }, tt = function(g, C, P) {
          !Xe[g] || W(Xe[g], function(ie) {
            ie.call(A, C, P, Ut);
          });
        }, Xi = function(g) {
          var C;
          if (tt("beforeSanitizeElements", g, null), Sl(g) || b(/[\u0080-\uFFFF]/, g.nodeName))
            return et(g), !0;
          var P = St(g.nodeName);
          if (tt("uponSanitizeElement", g, {
            tagName: P,
            allowedTags: ge
          }), g.hasChildNodes() && !_n(g.firstElementChild) && (!_n(g.content) || !_n(g.content.firstElementChild)) && b(/<[/\w]/g, g.innerHTML) && b(/<[/\w]/g, g.textContent) || P === "select" && b(/<template/i, g.innerHTML))
            return et(g), !0;
          if (!ge[P] || gn[P]) {
            if (!gn[P] && qi(P) && (pe.tagNameCheck instanceof RegExp && b(pe.tagNameCheck, P) || pe.tagNameCheck instanceof Function && pe.tagNameCheck(P)))
              return !1;
            if (Qo && !Gt[P]) {
              var ie = zo(g) || g.parentNode, Ie = ul(g) || g.childNodes;
              if (Ie && ie)
                for (var Te = Ie.length, we = Te - 1; we >= 0; --we)
                  ie.insertBefore(cl(Ie[we], !0), ll(g));
            }
            return et(g), !0;
          }
          return g instanceof ft && !Dl(g) || (P === "noscript" || P === "noembed") && b(/<\/no(script|embed)/i, g.innerHTML) ? (et(g), !0) : (Ht && g.nodeType === 3 && (C = g.textContent, C = K(C, Vo, " "), C = K(C, jo, " "), g.textContent !== C && (I(A.removed, {
            element: g.cloneNode()
          }), g.textContent = C)), tt("afterSanitizeElements", g, null), !1);
        }, Ki = function(g, C, P) {
          if (Hi && (C === "id" || C === "name") && (P in J || P in wl))
            return !1;
          if (!(qo && !Ko[C] && b(hl, C))) {
            if (!(Pi && b(gl, C))) {
              if (!ye[C] || Ko[C]) {
                if (!(qi(g) && (pe.tagNameCheck instanceof RegExp && b(pe.tagNameCheck, g) || pe.tagNameCheck instanceof Function && pe.tagNameCheck(g)) && (pe.attributeNameCheck instanceof RegExp && b(pe.attributeNameCheck, C) || pe.attributeNameCheck instanceof Function && pe.attributeNameCheck(C)) || C === "is" && pe.allowCustomizedBuiltInElements && (pe.tagNameCheck instanceof RegExp && b(pe.tagNameCheck, P) || pe.tagNameCheck instanceof Function && pe.tagNameCheck(P))))
                  return !1;
              } else if (!er[C]) {
                if (!b(Xo, K(P, xi, ""))) {
                  if (!((C === "src" || C === "xlink:href" || C === "href") && g !== "script" && q(P, "data:") === 0 && Bi[g])) {
                    if (!(Li && !b(vl, K(P, xi, "")))) {
                      if (P)
                        return !1;
                    }
                  }
                }
              }
            }
          }
          return !0;
        }, qi = function(g) {
          return g.indexOf("-") > 0;
        }, Zi = function(g) {
          var C, P, ie, Ie;
          tt("beforeSanitizeAttributes", g, null);
          var Te = g.attributes;
          if (!!Te) {
            var we = {
              attrName: "",
              attrValue: "",
              keepAttr: !0,
              allowedAttributes: ye
            };
            for (Ie = Te.length; Ie--; ) {
              C = Te[Ie];
              var Yn = C, ke = Yn.name, Ji = Yn.namespaceURI;
              if (P = ke === "value" ? C.value : D(C.value), ie = St(ke), we.attrName = ie, we.attrValue = P, we.keepAttr = !0, we.forceKeepAttr = void 0, tt("uponSanitizeAttribute", g, we), P = we.attrValue, !we.forceKeepAttr && (Yi(ke, g), !!we.keepAttr)) {
                if (b(/\/>/i, P)) {
                  Yi(ke, g);
                  continue;
                }
                Ht && (P = K(P, Vo, " "), P = K(P, jo, " "));
                var bl = St(g.nodeName);
                if (!!Ki(bl, ie, P))
                  try {
                    Ji ? g.setAttributeNS(Ji, ke, P) : g.setAttribute(ke, P), V(A.removed);
                  } catch (ag) {
                  }
              }
            }
            tt("afterSanitizeAttributes", g, null);
          }
        }, Tl = function G(g) {
          var C, P = ji(g);
          for (tt("beforeSanitizeShadowDOM", g, null); C = P.nextNode(); )
            tt("uponSanitizeShadowNode", C, null), !Xi(C) && (C.content instanceof fe && G(C.content), Zi(C));
          tt("afterSanitizeShadowDOM", g, null);
        };
        return A.sanitize = function(G, g) {
          var C, P, ie, Ie, Te;
          if (or = !G, or && (G = "<!-->"), typeof G != "string" && !_n(G)) {
            if (typeof G.toString != "function")
              throw Z("toString is not a function");
            if (G = G.toString(), typeof G != "string")
              throw Z("dirty is not a string, aborting");
          }
          if (!A.isSupported) {
            if (n(M.toStaticHTML) === "object" || typeof M.toStaticHTML == "function") {
              if (typeof G == "string")
                return M.toStaticHTML(G);
              if (_n(G))
                return M.toStaticHTML(G.outerHTML);
            }
            return G;
          }
          if (Zo || rr(g), A.removed = [], typeof G == "string" && (vn = !1), vn) {
            if (G.nodeName) {
              var we = St(G.nodeName);
              if (!ge[we] || gn[we])
                throw Z("root node is forbidden and cannot be sanitized in-place");
            }
          } else if (G instanceof dt)
            C = Vi("<!---->"), P = C.ownerDocument.importNode(G, !0), P.nodeType === 1 && P.nodeName === "BODY" || P.nodeName === "HTML" ? C = P : C.appendChild(P);
          else {
            if (!$t && !Ht && !Dt && G.indexOf("<") === -1)
              return pt && Un ? pt.createHTML(G) : G;
            if (C = Vi(G), !C)
              return $t ? null : Un ? Mi : "";
          }
          C && Jo && et(C.firstChild);
          for (var Yn = ji(vn ? G : C); ie = Yn.nextNode(); )
            ie.nodeType === 3 && ie === Ie || Xi(ie) || (ie.content instanceof fe && Tl(ie.content), Zi(ie), Ie = ie);
          if (Ie = null, vn)
            return G;
          if ($t) {
            if (Fn)
              for (Te = fl.call(C.ownerDocument); C.firstChild; )
                Te.appendChild(C.firstChild);
            else
              Te = C;
            return ye.shadowroot && (Te = ml.call(Y, Te, !0)), Te;
          }
          var ke = Dt ? C.outerHTML : C.innerHTML;
          return Dt && ge["!doctype"] && C.ownerDocument && C.ownerDocument.doctype && C.ownerDocument.doctype.name && b(el, C.ownerDocument.doctype.name) && (ke = "<!DOCTYPE " + C.ownerDocument.doctype.name + `>
` + ke), Ht && (ke = K(ke, Vo, " "), ke = K(ke, jo, " ")), pt && Un ? pt.createHTML(ke) : ke;
        }, A.setConfig = function(G) {
          rr(G), Zo = !0;
        }, A.clearConfig = function() {
          Ut = null, Zo = !1;
        }, A.isValidAttribute = function(G, g, C) {
          Ut || rr({});
          var P = St(G), ie = St(g);
          return Ki(P, ie, C);
        }, A.addHook = function(G, g) {
          typeof g == "function" && (Xe[G] = Xe[G] || [], I(Xe[G], g));
        }, A.removeHook = function(G) {
          if (Xe[G])
            return V(Xe[G]);
        }, A.removeHooks = function(G) {
          Xe[G] && (Xe[G] = []);
        }, A.removeAllHooks = function() {
          Xe = {};
        }, A;
      }
      var ol = Ii();
      return ol;
    });
  }(gr)), gr.exports;
}
var To = window.DOMPurify || (window.DOMPurify = Rs().default || Rs());
const Jn = "data-target-temp";
function Ad() {
  To.addHook("beforeSanitizeAttributes", (e) => {
    if (e.tagName === "A") {
      const t = e.getAttribute("target");
      t ? e.setAttribute(Jn, t) : e.setAttribute("target", "_self");
    }
  }), To.addHook("afterSanitizeAttributes", (e) => {
    e.tagName === "A" && e.hasAttribute(Jn) && (e.setAttribute("target", e.getAttribute(Jn)), e.removeAttribute(Jn), e.getAttribute("target") === "_blank" && e.setAttribute("rel", "noopener"));
  });
}
function xd() {
  To.removeAllHooks();
}
function Rd(e) {
  return To.sanitize(e);
}
function ne({ template: e, param: t, as: n = "div" }) {
  var s;
  const r = z(Wa)[e];
  if (F(r))
    return null;
  const i = r(t);
  return be(i) ? d(n, {
    className: v(`template-${e}`),
    dangerouslySetInnerHTML: {
      __html: Rd(i)
    }
  }) : Ol(i, {
    className: `${(s = i.props.className) != null ? s : ""} ${v(`template-${e}`)}`
  });
}
const Ya = Io(
  null
), Od = Ya.Provider, Ne = () => {
  const e = Mn(Ya);
  if (!e)
    throw new Error("useEventBus must be used within a EventBusProvider");
  return e;
}, Ho = (e) => {
  var t, n, o, r, i;
  return (i = (r = (o = (n = (t = e.options) == null ? void 0 : t.timezone) == null ? void 0 : n.zones) == null ? void 0 : o[0]) == null ? void 0 : r.timezoneName) != null ? i : "Local";
}, Pd = (e) => {
  var t, n;
  return (n = (t = e.options) == null ? void 0 : t.timezone) == null ? void 0 : n.customOffsetCalculator;
}, Va = (e) => {
  var t;
  return (t = e.options.timezone.zones) != null ? t : [];
};
function $o() {
  const e = z(Pd), t = L(e);
  return ee(
    (n, o = new O()) => o.tz(
      t ? e(n, o.getTime()) : n
    ),
    [e, t]
  );
}
function Bo() {
  const e = z(Ho), t = $o(), n = ee(
    () => t(e),
    [e, t]
  );
  return [e, n];
}
function Ld(e, t) {
  return e === "week";
}
function Hd({
  dayName: e,
  theme: t,
  today: n
}) {
  var a, l;
  const { day: o, dateInstance: r } = e, i = Nt(n, r), s = !i && r < n;
  return ri(o) ? t.common.holiday.color : s ? (a = t.week) == null ? void 0 : a.pastDay.color : ii(o) ? t.common.saturday.color : i ? (l = t.week) == null ? void 0 : l.today.color : t.common.dayName.color;
}
function $d({
  dayName: e,
  theme: t
}) {
  const { day: n } = e;
  return ri(n) ? t.common.holiday.color : ii(n) ? t.common.saturday.color : t.common.dayName.color;
}
function Bd({ dayName: e, style: t, type: n, theme: o }) {
  const r = Ne(), [, i] = Bo(), s = i(), { day: a } = e, l = n === "week" ? Hd({ dayName: e, theme: o, today: s }) : $d({ dayName: e, theme: o }), u = `${n}DayName`, c = () => {
    Ld(n) && r.fire("clickDayName", { date: me(e.dateInstance, "YYYY-MM-DD") });
  };
  return /* @__PURE__ */ d("div", {
    className: v("day-name-item", n),
    style: t
  }, /* @__PURE__ */ d("span", {
    className: v({ [`holiday-${So(a)}`]: Fe(a) }),
    style: { color: l },
    onClick: c,
    "data-testid": `dayName-${n}-${So(a)}`
  }, /* @__PURE__ */ d(ne, {
    template: u,
    param: e
  })));
}
const ja = yt("common"), Gd = yt("month"), Xa = (e) => e.week.dayGridLeft, li = (e) => e.week.timeGridLeft, Fd = (e) => e.month.moreView, Ka = (e) => e.month.gridCell, Ud = {
  border: "1px solid #e5e5e5",
  backgroundColor: "white",
  holiday: {
    color: "#ff4040"
  },
  saturday: {
    color: "#333"
  },
  dayName: {
    color: "#333"
  },
  today: {
    color: "#fff"
  },
  gridSelection: {
    backgroundColor: "rgba(81, 92, 230, 0.05)",
    border: "1px solid #515ce6"
  }
}, zd = {
  dayName: {
    borderLeft: "none",
    borderTop: "1px solid #e5e5e5",
    borderBottom: "1px solid #e5e5e5",
    backgroundColor: "inherit"
  },
  weekend: {
    backgroundColor: "inherit"
  },
  today: {
    color: "inherit",
    backgroundColor: "rgba(81, 92, 230, 0.05)"
  },
  pastDay: {
    color: "#bbb"
  },
  panelResizer: {
    border: "1px solid #e5e5e5"
  },
  dayGrid: {
    borderRight: "1px solid #e5e5e5",
    backgroundColor: "inherit"
  },
  dayGridLeft: {
    borderRight: "1px solid #e5e5e5",
    backgroundColor: "inherit",
    width: "72px"
  },
  timeGrid: {
    borderRight: "1px solid #e5e5e5"
  },
  timeGridLeft: {
    backgroundColor: "inherit",
    borderRight: "1px solid #e5e5e5",
    width: "72px"
  },
  timeGridLeftAdditionalTimezone: {
    backgroundColor: "white"
  },
  timeGridHalfHourLine: {
    borderBottom: "none"
  },
  timeGridHourLine: {
    borderBottom: "1px solid #e5e5e5"
  },
  nowIndicatorLabel: {
    color: "#515ce6"
  },
  nowIndicatorPast: {
    border: "1px dashed #515ce6"
  },
  nowIndicatorBullet: {
    backgroundColor: "#515ce6"
  },
  nowIndicatorToday: {
    border: "1px solid #515ce6"
  },
  nowIndicatorFuture: {
    border: "none"
  },
  pastTime: {
    color: "#bbb"
  },
  futureTime: {
    color: "#333"
  },
  gridSelection: {
    color: "#515ce6"
  }
}, Wd = {
  dayName: {
    borderLeft: "none",
    backgroundColor: "inherit"
  },
  holidayExceptThisMonth: {
    color: "rgba(255, 64, 64, 0.4)"
  },
  dayExceptThisMonth: {
    color: "rgba(51, 51, 51, 0.4)"
  },
  weekend: {
    backgroundColor: "inherit"
  },
  moreView: {
    border: "1px solid #d5d5d5",
    boxShadow: "0 2px 6px 0 rgba(0, 0, 0, 0.1)",
    backgroundColor: "white",
    width: null,
    height: null
  },
  gridCell: {
    headerHeight: 31,
    footerHeight: null
  },
  moreViewTitle: {
    backgroundColor: "inherit"
  }
};
function Yd(e = {}) {
  return {
    common: Ye(Ud, e)
  };
}
function Vd(e) {
  return {
    setTheme: (t) => {
      e(
        Q((n) => {
          n.common = Ye(n.common, t.common), n.week = Ye(n.week, t.week), n.month = Ye(n.month, t.month);
        })
      );
    },
    setCommonTheme: (t) => {
      e(
        Q((n) => {
          n.common = Ye(n.common, t);
        })
      );
    },
    setWeekTheme: (t) => {
      e(
        Q((n) => {
          n.week = Ye(n.week, t);
        })
      );
    },
    setMonthTheme: (t) => {
      e(
        Q((n) => {
          n.month = Ye(n.month, t);
        })
      );
    }
  };
}
function jd(e = {}) {
  return {
    month: Ye(Wd, e)
  };
}
function Xd(e = {}) {
  return {
    week: Ye(zd, e)
  };
}
const Kd = (e = {}) => (t) => ce(x(x(x({}, Yd(e == null ? void 0 : e.common)), Xd(e == null ? void 0 : e.week)), jd(e == null ? void 0 : e.month)), {
  dispatch: x({}, Vd(t))
}), qd = (e = {}) => Fa(Kd(e)), {
  StoreProvider: Zd,
  useInternalStore: ug,
  useStore: se
} = Ga();
function Jd() {
  return se(ja);
}
function qa() {
  return se(Gd);
}
function Qd(e) {
  return {
    common: {
      saturday: e.common.saturday,
      holiday: e.common.holiday,
      today: e.common.today,
      dayName: e.common.dayName
    },
    week: {
      pastDay: e.week.pastDay,
      today: e.week.today,
      dayName: e.week.dayName
    }
  };
}
function ef(e) {
  return {
    common: {
      saturday: e.common.saturday,
      holiday: e.common.holiday,
      today: e.common.today,
      dayName: e.common.dayName
    },
    month: {
      dayName: e.month.dayName
    }
  };
}
function ui({
  dayNames: e,
  marginLeft: t = Ql,
  rowStyleInfo: n,
  type: o = "month"
}) {
  var c, f;
  const r = se(o === "month" ? ef : Qd), p = (f = (c = r[o]) == null ? void 0 : c.dayName) != null ? f : {}, { backgroundColor: i = "white", borderLeft: s = null } = p, a = jn(p, ["backgroundColor", "borderLeft"]), { borderTop: l = null, borderBottom: u = null } = a;
  return /* @__PURE__ */ d("div", {
    "data-testid": `grid-header-${o}`,
    className: v("day-names", o),
    style: {
      backgroundColor: i,
      borderTop: l,
      borderBottom: u
    }
  }, /* @__PURE__ */ d("div", {
    className: v("day-name-container"),
    style: { marginLeft: t }
  }, e.map((h, m) => /* @__PURE__ */ d(Bd, {
    type: o,
    key: `dayNames-${h.day}`,
    dayName: h,
    style: {
      width: m === 0 ? `calc(${X(n[m].width)} + 1px)` : X(n[m].width),
      left: m === 0 ? `calc(${X(n[m].left)} - 1px)` : X(n[m].left),
      borderLeft: s
    },
    theme: r
  }))));
}
const tf = 6;
var Rn = /* @__PURE__ */ ((e) => (e.header = "header", e.footer = "footer", e))(Rn || {});
function Go(e, t = !0) {
  const n = [];
  let o;
  return e.length && (n[0] = [e[0].cid()], e.slice(1).forEach((r, i) => {
    o = e.slice(0, i + 1).reverse();
    const s = o.find(
      (a) => r.collidesWith(a, t)
    );
    s ? n.slice().reverse().some((a) => ~a.indexOf(s.cid()) ? (a.push(r.cid()), !0) : !1) : n.push([r.cid()]);
  })), n;
}
function nf(e, t) {
  let { length: n } = e;
  for (; n > 0; )
    if (n -= 1, !Be(e[n][t]))
      return n;
  return -1;
}
function Fo(e, t, n = !0) {
  const o = [];
  return t.forEach((r) => {
    const i = [[]];
    r.forEach((s) => {
      const a = e.get(s);
      let l = 0, u = !1, c, f;
      for (; !u; )
        f = nf(i, l), f === -1 ? (i[0].push(a), u = !0) : a.collidesWith(i[f][l], n) || (c = f + 1, Be(i[c]) && (i[c] = []), i[c][l] = a, u = !0), l += 1;
    }), o.push(i);
  }), o;
}
function Za(e, t) {
  return (n) => {
    const o = n.getStarts();
    return !(n.getEnds() < e || o > t);
  };
}
function Ja(e, t, n, o) {
  const r = Ar(e, t, at).map(
    (i) => me(i, "YYYYMMDD")
  );
  n.forEach((i) => {
    i.forEach((s) => {
      s.forEach((a, l) => {
        if (!a)
          return;
        const u = me(a.getStarts(), "YYYYMMDD"), c = Ar(
          he(a.getStarts()),
          Re(a.getEnds()),
          at
        ).length;
        a.top = l, a.left = r.indexOf(u), a.width = c, o == null || o(a);
      });
    });
  });
}
function Os(e, t, n) {
  return n.getStarts() < e && (n.exceedLeft = !0, n.renderStarts = new O(e)), n.getEnds() > t && (n.exceedRight = !0, n.renderEnds = new O(t)), n;
}
function Qa(e, t, n) {
  return n instanceof Je ? (n.each((o) => (Os(e, t, o), !0)), null) : Os(e, t, n);
}
function ec(e) {
  const t = new Je((n) => n.cid());
  return e.each(function(n) {
    t.add(new Ct(n));
  }), t;
}
function di({ model: e }) {
  return e.isAllday || e.hasMultiDates;
}
function tc(e) {
  return !di(e);
}
function of(e) {
  e.top = e.top || 0, e.top += 1;
}
function rf(e, t, n) {
  n.each((o) => {
    (o.model.isAllday || o.model.hasMultiDates) && Qa(he(e), Re(t), o);
  });
}
function sf(e, t, n) {
  const o = [];
  return e[t].forEach((r) => {
    n.doWhenHas(r, (i) => {
      o.push(i.top);
    });
  }), o.length > 0 ? Math.max(...o) : 0;
}
function af(e, t) {
  const n = t.filter(di), o = t.filter(tc).sort(kt.compare.event.asc), r = {};
  o.forEach((i) => {
    const s = me(i.getStarts(), "YYYYMMDD");
    let a = r[s];
    Be(a) && (a = r[s] = sf(
      e,
      s,
      n
    )), r[s] = i.top = a + 1;
  });
}
function cf(e, t) {
  const n = t.filter(di), o = t.filter(tc).sort(kt.compare.event.asc), r = {};
  o.forEach((i) => {
    const s = me(i.getStarts(), "YYYYMMDD");
    let a = r[s];
    if (Be(a) && (a = r[s] = [], e[s].forEach((l) => {
      n.doWhenHas(l, (u) => {
        a.push(u.top);
      });
    })), a.indexOf(i.top) >= 0) {
      const l = Math.max(...a) + 1;
      for (let u = 1; u <= l && (i.top = u, !(a.indexOf(i.top) < 0)); u += 1)
        ;
    }
    a.push(i.top);
  });
}
function lf(e) {
  e.each((t) => {
    const { model: n } = t, o = n.getStarts(), r = n.getEnds();
    n.hasMultiDates = !Nt(o, r), !n.isAllday && n.hasMultiDates && (t.renderStarts = he(o), t.renderEnds = Re(r));
  });
}
function uf(e, t) {
  const { start: n, end: o, andFilters: r = [], alldayFirstMode: i = !1 } = t, { events: s, idsOfDay: a } = e, l = Je.and(...[Za(n, o)].concat(r)), u = s.filter(l), c = ec(u);
  lf(c), rf(n, o, c);
  const f = c.sort(kt.compare.event.asc), p = !1, h = Go(f, p), m = Fo(c, h, p);
  return Ja(n, o, m, of), i ? af(a, c) : cf(a, c), m;
}
function df(e, t) {
  return (n) => {
    const o = n.getStarts(), r = n.getEnds(), i = o.getTime(), s = r.getTime(), a = o.getFullYear(), l = o.getMonth(), u = o.getDate(), c = new O(a, l, u).setHours(e), f = new O(a, l, u).setHours(t);
    return i >= c && i < f || s > c && s <= f || i < c && s > c || s > f && i < f;
  };
}
function ff(e, t) {
  return e === 0 && t === 24 ? (n) => n.sort(kt.compare.event.asc) : (n) => n.filter(df(e, t)).sort(kt.compare.event.asc);
}
function pf(e, t, n, o) {
  const r = {};
  return Aa(t, n).forEach((s) => {
    const a = me(s, "YYYYMMDD"), l = e[a], u = r[a] = new Je((c) => c.cid());
    l && l.length && l.forEach((c) => {
      o.doWhenHas(c, (f) => {
        u.add(f);
      });
    });
  }, {}), r;
}
function mf(e, t) {
  const { start: n, end: o, uiModelTimeColl: r, hourStart: i, hourEnd: s } = t, a = pf(e, n, o, r), l = {}, u = ff(i, s), c = !0;
  return Object.entries(a).forEach(([f, p]) => {
    const h = u(p), m = Go(h, c), _ = Fo(p, m, c);
    l[f] = _;
  }), l;
}
function hf(e) {
  e.each((t) => {
    const { model: n } = t;
    n.hasMultiDates = !0, t.renderStarts = he(n.getStarts()), t.renderEnds = Re(n.getEnds());
  });
}
function gf(e, t, n) {
  if (!n || !n.size)
    return [];
  hf(n), Qa(e, t, n);
  const o = n.sort(kt.compare.event.asc), r = !0, i = Go(o, r), s = Fo(n, i, r);
  return Ja(e, t, s), s;
}
function vf(e, t) {
  var m, _;
  const { start: n, end: o, panels: r, andFilters: i = [], options: s } = t, { events: a, idsOfDay: l } = e, u = (m = s == null ? void 0 : s.hourStart) != null ? m : 0, c = (_ = s == null ? void 0 : s.hourEnd) != null ? _ : 24, f = Je.and(...[Za(n, o)].concat(i)), h = ec(a.filter(f)).groupBy(Qu);
  return r.reduce(
    (y, w) => {
      const { name: E, type: T } = w;
      return F(h[E]) ? y : ce(x({}, y), {
        [E]: T === "daygrid" ? gf(n, o, h[E]) : mf(l, {
          start: n,
          end: o,
          uiModelTimeColl: h[E],
          hourStart: u,
          hourEnd: c
        })
      });
    },
    {
      milestone: [],
      task: [],
      allday: [],
      time: {}
    }
  );
}
function Or(e, t, n) {
  const o = Math.max(e, ...t);
  return Math.min(o, ...n);
}
function nc(e, t, n) {
  return t * n / e;
}
function oc(e, t, n) {
  return t <= e && e <= n;
}
const Qe = 24, fi = 100;
function rc(e, t) {
  e.forEach((n) => {
    n.forEach((o) => {
      o.forEach((r, i) => {
        t(r, i);
      });
    });
  });
}
function pi(e, t) {
  return ({ top: n }) => e >= n * t;
}
function _f(e, t) {
  return ({ top: n }) => e < n * t;
}
function ic(e, t, n) {
  return e.filter(_f(t, n)).length;
}
const yf = (e) => e.filter((t) => Fe(t.getDay())).length;
function mi(e, t, n) {
  const o = yf(e), r = e.length, i = o === r, s = n / (t && !i ? r * 2 - o : r), a = e.map((u) => {
    const c = u.getDay();
    return !t || i || Fe(c) ? s : s * 2;
  }), l = a.reduce(
    (u, c, f) => f ? [...u, u[f - 1] + a[f - 1]] : [0],
    []
  );
  return {
    widthList: a,
    leftList: l
  };
}
function bo(e, t, n) {
  return e.reduce((o, r, i) => t <= i && i <= n ? o + r : o, 0);
}
const wf = (e) => (t) => {
  const n = he(t.getStarts()), o = he(t.getEnds());
  return n <= e && e <= o;
};
function Co(e, t) {
  return t.findIndex((n) => e >= he(n) && e <= Re(n));
}
const Ef = (e, t, n, o) => {
  const { widthList: r } = mi(n, o, fi);
  return {
    left: e ? bo(r, 0, e - 1) : 0,
    width: bo(r, e != null ? e : 0, t < 0 ? n.length - 1 : t)
  };
}, sc = (e, t, n, o) => {
  const { widthList: r } = mi(n, o, fi);
  let i = 0, s = n.length - 1;
  return n.forEach((a, l) => {
    a <= e && (i = l), a <= t && (s = l);
  }), {
    width: bo(r, i, s),
    left: i ? bo(r, 0, i - 1) : 0
  };
};
function Df(e, t, n = !1) {
  const o = e.getStarts(), r = e.getEnds(), { width: i, left: s } = sc(o, r, t, n);
  return e.width = i, e.left = s, e;
}
function Sf(e, t, n) {
  const { idsOfDay: o } = t, r = uf(t, {
    start: e[0],
    end: Re(e[e.length - 1])
  }), i = [];
  rc(r, (a) => {
    const l = a.model.cid();
    i[l] = Df(a, e, n);
  });
  const s = Object.keys(o).reduce(
    (a, l) => {
      const u = o[l];
      return a[l] = u.map((c) => i[c]).filter((c) => !!c), a;
    },
    {}
  );
  return {
    uiModels: Object.values(i),
    gridDateEventModelMap: s
  };
}
const Tf = (e, t, n = !1) => (rc(e, (o) => {
  const r = o.getStarts(), i = o.getEnds(), { width: s, left: a } = sc(r, i, t, n);
  o.width = s, o.left = a, o.top += 1;
}), ac(e)), bf = (e) => e.filter((t) => !!t);
function ac(e) {
  return e.flatMap((t) => t.flatMap((n) => bf(n)));
}
const Cf = (e) => Array.from(
  new Set(
    Object.values(e).reduce(
      (t, n) => t.concat(...ac(n)),
      []
    )
  )
), cc = (e, t, {
  narrowWeekend: n,
  hourStart: o,
  hourEnd: r,
  weekStartDate: i,
  weekEndDate: s
}) => {
  const l = vf(t, {
    start: i,
    end: s,
    panels: [
      {
        name: "milestone",
        type: "daygrid",
        show: !0
      },
      {
        name: "task",
        type: "daygrid",
        show: !0
      },
      {
        name: "allday",
        type: "daygrid",
        show: !0
      },
      {
        name: "time",
        type: "timegrid",
        show: !0
      }
    ],
    andFilters: [],
    options: {
      hourStart: o,
      hourEnd: r
    }
  });
  return Object.keys(l).reduce(
    (u, c) => {
      const f = l[c];
      return ce(x({}, u), {
        [c]: Array.isArray(f) ? Tf(f, e, n) : Cf(f)
      });
    },
    {
      milestone: [],
      allday: [],
      task: [],
      time: []
    }
  );
};
function lc(e, {
  workweek: t = !1,
  visibleWeeksCount: n = 0,
  startDayOfWeek: o = 0,
  isAlways6Weeks: r = !1
}) {
  const i = new O(e), s = n > 0, a = s ? i : Ia(i), l = Yu(
    a,
    a.getDay() - o + (a.getDay() < o ? Ke : 0)
  ), u = l.getDay(), c = Wu(i).getDate(), f = ai(l, a), p = c + Math.abs(f);
  let h = tf;
  return s ? h = n : r === !1 && (h = Math.ceil(p / Ke)), gt(0, h).map(
    (m) => gt(0, Ke).reduce((_, y) => {
      const w = m * Ke + y, E = (w + u) % Ke;
      if (!t || t && !Fe(E)) {
        const T = It(l, w);
        _.push(T);
      }
      return _;
    }, [])
  );
}
function uc(e, { startDayOfWeek: t = rn.SUN, workweek: n }) {
  const o = he(e), i = o.getDay() - t;
  return (i >= 0 ? gt(-i, Ke - i) : gt(-Ke - i, -i)).reduce((a, l) => {
    const u = It(o, l);
    return n && Fe(u.getDay()) || a.push(u), a;
  }, []);
}
function kf(e, t = !1) {
  const n = e.length, o = n > 5 && t, r = o ? 100 / (n - 1) : 100 / n;
  return e.map((i) => {
    const s = o && Fe(i.getDay()) ? r / 2 : r;
    return {
      date: i,
      width: s
    };
  }).reduce((i, s, a) => {
    const l = i[a - 1];
    return i.push(ce(x({}, s), {
      left: a === 0 ? 0 : l.left + l.width
    })), i;
  }, []);
}
function dc(e, t) {
  var s;
  const n = kf(e, (s = t.narrowWeekend) != null ? s : !1), o = (t.hourEnd - t.hourStart) * 2, r = 100 / o, i = gt(o).map((a, l) => {
    const u = l % 2 === 1, c = t.hourStart + Math.floor(a / 2), f = `${c}:${u ? "30" : "00"}`.padStart(5, "0"), p = (u ? `${c + 1}:00` : `${c}:30`).padStart(
      5,
      "0"
    );
    return {
      top: r * l,
      height: r,
      startTime: f,
      endTime: p
    };
  });
  return {
    columns: n,
    rows: i
  };
}
function Nf({ clientX: e, clientY: t }, { left: n, top: o, clientLeft: r, clientTop: i }) {
  return [e - n - r, t - o - i];
}
function If(e, t, n) {
  const o = Math.floor(nc(t, e, n));
  return Or(o, [0], [e - 1]);
}
function hi({
  rowsCount: e,
  columnsCount: t,
  container: n,
  narrowWeekend: o = !1,
  startDayOfWeek: r = rn.SUN
}) {
  if (F(n))
    return () => null;
  const i = gt(r, r + t).map(
    (a) => a % Ke
  ), s = o ? i.filter((a) => Fe(a)).length : 0;
  return function(l) {
    const {
      left: u,
      top: c,
      width: f,
      height: p
    } = n.getBoundingClientRect(), [h, m] = Nf(l, {
      left: u,
      top: c,
      clientLeft: n.clientLeft,
      clientTop: n.clientTop
    });
    if (h < 0 || m < 0 || h > f || m > p)
      return null;
    const _ = o ? f / (t - s + 1) : f / t, y = i.map(
      (T) => o && Fe(T) ? _ / 2 : _
    ), w = [];
    return y.forEach((T, k) => {
      k === 0 ? w.push(0) : w.push(w[k - 1] + y[k - 1]);
    }), {
      columnIndex: ti(w, (T) => h >= T),
      rowIndex: If(e, p, m)
    };
  };
}
function Mf(e) {
  return e.common.gridSelection;
}
function gi({ type: e, gridSelectionData: t, weekDates: n, narrowWeekend: o }) {
  const { backgroundColor: r, border: i } = se(Mf), { startCellIndex: s, endCellIndex: a } = t, { left: l, width: u } = Ef(
    Math.min(s, a),
    Math.max(s, a),
    n,
    o
  ), c = {
    left: X(l),
    width: X(u),
    height: X(100),
    backgroundColor: r,
    border: i
  };
  return u > 0 ? /* @__PURE__ */ d("div", {
    className: v(e, "grid-selection"),
    style: c
  }) : null;
}
function vi(e, t, n) {
  return {
    startColumnIndex: n ? t.columnIndex : e.columnIndex,
    startRowIndex: n ? t.rowIndex : e.rowIndex,
    endColumnIndex: n ? e.columnIndex : t.columnIndex,
    endRowIndex: n ? e.rowIndex : t.rowIndex
  };
}
function Af(e, t, n) {
  if (F(e))
    return null;
  const { startColumnIndex: o, endColumnIndex: r, endRowIndex: i, startRowIndex: s } = e;
  if (!oc(t, o, r))
    return null;
  const u = {
    startRowIndex: s,
    endRowIndex: i,
    isSelectingMultipleColumns: o !== r,
    isStartingColumn: t === o
  };
  return o < t && t < r ? (u.startRowIndex = 0, u.endRowIndex = n) : o !== r && (o === t ? u.endRowIndex = n : r === t && (u.startRowIndex = 0)), u;
}
const Pr = {
  sortSelection: (e, t) => {
    const n = e.columnIndex > t.columnIndex || e.columnIndex === t.columnIndex && e.rowIndex > t.rowIndex;
    return vi(e, t, n);
  },
  getDateFromCollection: (e, t) => {
    const n = e, o = qe(
      n.columns[t.startColumnIndex].date,
      n.rows[t.startRowIndex].startTime
    ), r = qe(
      n.columns[t.endColumnIndex].date,
      n.rows[t.endRowIndex].endTime
    );
    return [o, r];
  },
  calculateSelection: Af
};
function xf(e, t, n) {
  if (!(L(e) && L(t) && L(n)))
    return null;
  const { startRowIndex: o, startColumnIndex: r, endRowIndex: i, endColumnIndex: s } = e;
  if (!oc(
    t,
    Math.min(o, i),
    Math.max(o, i)
  ))
    return null;
  let a = r, l = s;
  return o < t && (a = 0), i > t && (l = n - 1), { startCellIndex: a, endCellIndex: l };
}
const ko = {
  sortSelection: (e, t) => {
    const n = e.rowIndex > t.rowIndex || e.rowIndex === t.rowIndex && e.columnIndex > t.columnIndex;
    return vi(e, t, n);
  },
  getDateFromCollection: (e, t) => {
    const n = e;
    return [
      n[t.startRowIndex][t.startColumnIndex],
      n[t.endRowIndex][t.endColumnIndex]
    ];
  },
  calculateSelection: xf
};
function Rf(e) {
  return L(e) ? {
    startCellIndex: e.startColumnIndex,
    endCellIndex: e.endColumnIndex
  } : null;
}
const Lr = {
  sortSelection: (e, t) => {
    const n = e.columnIndex > t.columnIndex;
    return vi(e, t, n);
  },
  getDateFromCollection: (e, t) => {
    const n = e;
    return [n[t.startColumnIndex], n[t.endColumnIndex]];
  },
  calculateSelection: Rf
};
function Of(e) {
  return Lr.calculateSelection(e.gridSelection.dayGridWeek);
}
function Pf({ weekDates: e, narrowWeekend: t }) {
  const n = z(Of);
  return F(n) ? null : /* @__PURE__ */ d(gi, {
    type: "allday",
    gridSelectionData: n,
    weekDates: e,
    narrowWeekend: t
  });
}
function fc(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Hr(e, t) {
  for (var n in e)
    if (n !== "__source" && !(n in t))
      return !0;
  for (var o in t)
    if (o !== "__source" && e[o] !== t[o])
      return !0;
  return !1;
}
function Ps(e) {
  this.props = e;
}
function ln(e, t) {
  function n(r) {
    var i = this.props.ref, s = i == r.ref;
    return !s && i && (i.call ? i(null) : i.current = null), t ? !t(this.props, r) || !s : Hr(this.props, r);
  }
  function o(r) {
    return this.shouldComponentUpdate = n, d(e, r);
  }
  return o.displayName = "Memo(" + (e.displayName || e.name) + ")", o.prototype.isReactComponent = !0, o.__f = !0, o;
}
(Ps.prototype = new rt()).isPureReactComponent = !0, Ps.prototype.shouldComponentUpdate = function(e, t) {
  return Hr(this.props, e) || Hr(this.state, t);
};
var Ls = H.__b;
H.__b = function(e) {
  e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), Ls && Ls(e);
};
var Lf = typeof Symbol != "undefined" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function pc(e) {
  function t(n) {
    var o = fc({}, n);
    return delete o.ref, e(o, n.ref || null);
  }
  return t.$$typeof = Lf, t.render = t, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")", t;
}
var Hf = H.__e;
H.__e = function(e, t, n, o) {
  if (e.then) {
    for (var r, i = t; i = i.__; )
      if ((r = i.__c) && r.__c)
        return t.__e == null && (t.__e = n.__e, t.__k = n.__k), r.__c(e, t);
  }
  Hf(e, t, n, o);
};
var Hs = H.unmount;
function vr() {
  this.__u = 0, this.t = null, this.__b = null;
}
function mc(e) {
  var t = e.__.__c;
  return t && t.__a && t.__a(e);
}
function Qn() {
  this.u = null, this.o = null;
}
H.unmount = function(e) {
  var t = e.__c;
  t && t.__R && t.__R(), t && e.__h === !0 && (e.type = null), Hs && Hs(e);
}, (vr.prototype = new rt()).__c = function(e, t) {
  var n = t.__c, o = this;
  o.t == null && (o.t = []), o.t.push(n);
  var r = mc(o.__v), i = !1, s = function() {
    i || (i = !0, n.__R = null, r ? r(a) : a());
  };
  n.__R = s;
  var a = function() {
    if (!--o.__u) {
      if (o.state.__a) {
        var u = o.state.__a;
        o.__v.__k[0] = function f(p, h, m) {
          return p && (p.__v = null, p.__k = p.__k && p.__k.map(function(_) {
            return f(_, h, m);
          }), p.__c && p.__c.__P === h && (p.__e && m.insertBefore(p.__e, p.__d), p.__c.__e = !0, p.__c.__P = m)), p;
        }(u, u.__c.__P, u.__c.__O);
      }
      var c;
      for (o.setState({ __a: o.__b = null }); c = o.t.pop(); )
        c.forceUpdate();
    }
  }, l = t.__h === !0;
  o.__u++ || l || o.setState({ __a: o.__b = o.__v.__k[0] }), e.then(s, s);
}, vr.prototype.componentWillUnmount = function() {
  this.t = [];
}, vr.prototype.render = function(e, t) {
  if (this.__b) {
    if (this.__v.__k) {
      var n = document.createElement("div"), o = this.__v.__k[0].__c;
      this.__v.__k[0] = function i(s, a, l) {
        return s && (s.__c && s.__c.__H && (s.__c.__H.__.forEach(function(u) {
          typeof u.__c == "function" && u.__c();
        }), s.__c.__H = null), (s = fc({}, s)).__c != null && (s.__c.__P === l && (s.__c.__P = a), s.__c = null), s.__k = s.__k && s.__k.map(function(u) {
          return i(u, a, l);
        })), s;
      }(this.__b, n, o.__O = o.__P);
    }
    this.__b = null;
  }
  var r = t.__a && d(xe, null, e.fallback);
  return r && (r.__h = null), [d(xe, null, t.__a ? null : e.children), r];
};
var $s = function(e, t, n) {
  if (++n[1] === n[0] && e.o.delete(t), e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.o.size))
    for (n = e.u; n; ) {
      for (; n.length > 3; )
        n.pop()();
      if (n[1] < n[0])
        break;
      e.u = n = n[2];
    }
};
function $f(e) {
  return this.getChildContext = function() {
    return e.context;
  }, e.children;
}
function Bf(e) {
  var t = this, n = e.i;
  t.componentWillUnmount = function() {
    go(null, t.l), t.l = null, t.i = null;
  }, t.i && t.i !== n && t.componentWillUnmount(), e.__v ? (t.l || (t.i = n, t.l = { nodeType: 1, parentNode: n, childNodes: [], appendChild: function(o) {
    this.childNodes.push(o), t.i.appendChild(o);
  }, insertBefore: function(o, r) {
    this.childNodes.push(o), t.i.appendChild(o);
  }, removeChild: function(o) {
    this.childNodes.splice(this.childNodes.indexOf(o) >>> 1, 1), t.i.removeChild(o);
  } }), go(d($f, { context: t.context }, e.__v), t.l)) : t.l && t.componentWillUnmount();
}
function _i(e, t) {
  var n = d(Bf, { __v: e, i: t });
  return n.containerInfo = t, n;
}
(Qn.prototype = new rt()).__a = function(e) {
  var t = this, n = mc(t.__v), o = t.o.get(e);
  return o[0]++, function(r) {
    var i = function() {
      t.props.revealOrder ? (o.push(r), $s(t, e, o)) : r();
    };
    n ? n(i) : i();
  };
}, Qn.prototype.render = function(e) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var t = Nn(e.children);
  e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
  for (var n = t.length; n--; )
    this.o.set(t[n], this.u = [1, 0, this.u]);
  return e.children;
}, Qn.prototype.componentDidUpdate = Qn.prototype.componentDidMount = function() {
  var e = this;
  this.o.forEach(function(t, n) {
    $s(e, n, t);
  });
};
var Gf = typeof Symbol != "undefined" && Symbol.for && Symbol.for("react.element") || 60103, Ff = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|shape|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, Uf = typeof document != "undefined", zf = function(e) {
  return (typeof Symbol != "undefined" && typeof Symbol() == "symbol" ? /fil|che|rad/i : /fil|che|ra/i).test(e);
};
rt.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e) {
  Object.defineProperty(rt.prototype, e, { configurable: !0, get: function() {
    return this["UNSAFE_" + e];
  }, set: function(t) {
    Object.defineProperty(this, e, { configurable: !0, writable: !0, value: t });
  } });
});
var Bs = H.event;
function Wf() {
}
function Yf() {
  return this.cancelBubble;
}
function Vf() {
  return this.defaultPrevented;
}
H.event = function(e) {
  return Bs && (e = Bs(e)), e.persist = Wf, e.isPropagationStopped = Yf, e.isDefaultPrevented = Vf, e.nativeEvent = e;
};
var Gs = { configurable: !0, get: function() {
  return this.class;
} }, Fs = H.vnode;
H.vnode = function(e) {
  var t = e.type, n = e.props, o = n;
  if (typeof t == "string") {
    var r = t.indexOf("-") === -1;
    for (var i in o = {}, n) {
      var s = n[i];
      Uf && i === "children" && t === "noscript" || i === "value" && "defaultValue" in n && s == null || (i === "defaultValue" && "value" in n && n.value == null ? i = "value" : i === "download" && s === !0 ? s = "" : /ondoubleclick/i.test(i) ? i = "ondblclick" : /^onchange(textarea|input)/i.test(i + t) && !zf(n.type) ? i = "oninput" : /^onfocus$/i.test(i) ? i = "onfocusin" : /^onblur$/i.test(i) ? i = "onfocusout" : /^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(i) ? i = i.toLowerCase() : r && Ff.test(i) ? i = i.replace(/[A-Z0-9]/, "-$&").toLowerCase() : s === null && (s = void 0), /^oninput$/i.test(i) && (i = i.toLowerCase(), o[i] && (i = "oninputCapture")), o[i] = s);
    }
    t == "select" && o.multiple && Array.isArray(o.value) && (o.value = Nn(n.children).forEach(function(a) {
      a.props.selected = o.value.indexOf(a.props.value) != -1;
    })), t == "select" && o.defaultValue != null && (o.value = Nn(n.children).forEach(function(a) {
      a.props.selected = o.multiple ? o.defaultValue.indexOf(a.props.value) != -1 : o.defaultValue == a.props.value;
    })), e.props = o, n.class != n.className && (Gs.enumerable = "className" in n, n.className != null && (o.class = n.className), Object.defineProperty(o, "className", Gs));
  }
  e.$$typeof = Gf, Fs && Fs(e);
};
var Us = H.__r;
H.__r = function(e) {
  Us && Us(e), e.__c;
};
function jf(e) {
  return !!e.__k && (go(null, e), !0);
}
function Xf({ index: e, exceedCount: t, isClicked: n, onClickExceedCount: o }) {
  const r = () => o(e), i = { display: n ? "none" : "" };
  return t && !n ? /* @__PURE__ */ d("span", {
    className: v("weekday-exceed-in-week"),
    onClick: r,
    style: i
  }, /* @__PURE__ */ d(ne, {
    template: "weekGridFooterExceed",
    param: t
  })) : null;
}
function Kf({ isClicked: e, isClickedIndex: t, onClickCollapseButton: n }) {
  return e && t ? /* @__PURE__ */ d("span", {
    className: v("weekday-exceed-in-week"),
    onClick: n
  }, /* @__PURE__ */ d(ne, {
    template: "collapseBtnTitle"
  })) : null;
}
function qf({
  width: e,
  left: t,
  index: n,
  exceedCount: o,
  isClicked: r,
  onClickExceedCount: i,
  isClickedIndex: s,
  onClickCollapseButton: a,
  isLastCell: l
}) {
  const { borderRight: u, backgroundColor: c } = se(ee((p) => p.week.dayGrid, [])), f = {
    width: e,
    left: t,
    borderRight: l ? "none" : u,
    backgroundColor: c
  };
  return /* @__PURE__ */ d("div", {
    className: v("panel-grid"),
    style: f
  }, /* @__PURE__ */ d(Xf, {
    index: n,
    exceedCount: o,
    isClicked: r,
    onClickExceedCount: i
  }), /* @__PURE__ */ d(Kf, {
    isClickedIndex: s,
    isClicked: r,
    onClickCollapseButton: a
  }));
}
const hc = ln(function({
  uiModels: t,
  weekDates: n,
  narrowWeekend: o,
  height: r,
  clickedIndex: i,
  isClickedCount: s,
  onClickExceedCount: a,
  onClickCollapseButton: l
}) {
  const { widthList: c, leftList: f } = mi(
    n,
    o,
    fi
  ), p = n.length - 1;
  return /* @__PURE__ */ d(xe, null, n.map((h, m) => {
    const _ = X(c[m]), y = X(f[m]), w = t.filter(wf(h)), E = ic(w, r, Qe + 2), T = m === i, k = m === p;
    return /* @__PURE__ */ d(qf, {
      key: `panel-grid-${h.getDate()}`,
      width: _,
      left: y,
      index: m,
      exceedCount: E,
      isClicked: s,
      onClickExceedCount: a,
      isClickedIndex: T,
      onClickCollapseButton: l,
      isLastCell: k
    });
  }));
});
function Zf({ onMouseDown: e }) {
  return /* @__PURE__ */ d("span", {
    className: `${v("weekday-resize-handle")} ${v("handle-y")}`,
    onMouseDown: e,
    "data-testid": "horizontal-event-resize-icon"
  }, /* @__PURE__ */ d("i", {
    className: `${v("icon")} ${v("ic-handle-y")}`
  }));
}
const gc = Io(null), Jf = gc.Provider, xt = () => {
  const e = Mn(gc);
  if (Be(e))
    throw new Error("LayoutContainerProvider is not found");
  return e;
}, Qf = {
  panelResizer: "panelResizer"
}, On = {
  resizeEvent: (e, t) => `event/${e}/resize/${t}`,
  moveEvent: (e, t) => `event/${e}/move/${t}`,
  gridSelection: (e) => `gridSelection/${e}`
};
function vc(e) {
  return z(
    ee(
      (t) => t.calendar.calendars.find((n) => n.id === e),
      [e]
    )
  );
}
function yi(e) {
  var n;
  const t = vc((n = e == null ? void 0 : e.calendarId) != null ? n : null);
  return U(
    () => ({
      color: t == null ? void 0 : t.color,
      borderColor: t == null ? void 0 : t.borderColor,
      backgroundColor: t == null ? void 0 : t.backgroundColor,
      dragBackgroundColor: t == null ? void 0 : t.dragBackgroundColor
    }),
    [t]
  );
}
var _c = /* @__PURE__ */ ((e) => (e.ESCAPE = "Escape", e))(_c || {});
const ep = {
  Escape: 27
}, zs = 3;
function _t(e, t) {
  const n = Ua(), o = te(e), r = te(t);
  re(() => {
    o.current = e, r.current = t;
  }, [e, t]), re(
    () => n.subscribe(
      (i) => r.current(i),
      (i) => o.current(i)
    ),
    [e, n]
  );
}
function tp(e, t) {
  return e.key ? e.key === t : e.keyCode === ep[t];
}
function np(e) {
  return e === 0;
}
function op(e, t, n, o) {
  return Math.abs(e - n) >= zs || Math.abs(t - o) >= zs;
}
function en(e, { onInit: t, onDragStart: n, onDrag: o, onMouseUp: r, onPressESCKey: i } = {}) {
  const { initDrag: s, setDragging: a, cancelDrag: l, reset: u } = Se("dnd"), c = Ua(), f = te(c.getState().dnd);
  _t(At, (S) => {
    f.current = S;
  });
  const [p, h] = ae(!1), m = te(null), _ = te(null), y = te(null), w = ee(
    (S) => {
      !np(S.button) || (S.currentTarget && (S.currentTarget.ondragstart = function() {
        return !1;
      }), S.preventDefault(), h(!0), s({
        draggingItemType: e,
        initX: S.clientX,
        initY: S.clientY
      }), t == null || t(S, f.current));
    },
    [t, e, s]
  ), E = ee(
    (S) => {
      const {
        initX: N,
        initY: W,
        draggingState: V,
        draggingItemType: I
      } = f.current;
      if (I !== e) {
        h(!1), u();
        return;
      }
      if (!(L(N) && L(W) && !op(N, W, S.clientX, S.clientY))) {
        if (V <= Ve.INIT) {
          a({ x: S.clientX, y: S.clientY }), n == null || n(S, f.current);
          return;
        }
        a({ x: S.clientX, y: S.clientY }), o == null || o(S, f.current);
      }
    },
    [e, o, n, a, u]
  ), T = ee(
    (S) => {
      S.stopPropagation(), p && (r == null || r(S, f.current), h(!1), u());
    },
    [p, r, u]
  ), k = ee(
    (S) => {
      tp(S, _c.ESCAPE) && (h(!1), l(), i == null || i(S, f.current));
    },
    [i, l]
  );
  return re(() => {
    m.current = E, _.current = T, y.current = k;
  }, [k, E, T]), re(() => {
    const S = (V) => {
      var I;
      return (I = m.current) == null ? void 0 : I.call(m, V);
    }, N = (V) => {
      var I;
      return (I = _.current) == null ? void 0 : I.call(_, V);
    }, W = (V) => {
      var I;
      return (I = y.current) == null ? void 0 : I.call(y, V);
    };
    return p ? (document.addEventListener("mousemove", S), document.addEventListener("mouseup", N), document.addEventListener("keydown", W), () => {
      document.removeEventListener("mousemove", S), document.removeEventListener("mouseup", N), document.removeEventListener("keydown", W);
    }) : an;
  }, [p, u]), w;
}
function wi(e, t) {
  return e ? t : void 0;
}
function yc(e) {
  return {
    vertical: e ? 5 : 2,
    horizontal: 8
  };
}
function rp(e, t) {
  const n = e ? 0 : "2px", o = t ? 0 : "2px";
  return `${n} ${o} ${o} ${n}`;
}
function ip({
  uiModel: e,
  flat: t,
  eventHeight: n,
  isDraggingTarget: o,
  calendarColor: r
}) {
  const { exceedLeft: i, exceedRight: s } = e, { color: a, backgroundColor: l, dragBackgroundColor: u, borderColor: c } = ba(
    e,
    r
  ), f = {
    color: a,
    backgroundColor: o ? u : l,
    borderLeft: i ? "none" : `3px solid ${c}`,
    borderRadius: rp(i, s),
    overflow: "hidden",
    height: n,
    lineHeight: Eo(n),
    opacity: o ? 0.5 : 1
  }, p = yc(t);
  return x(t ? {
    marginTop: p.vertical
  } : {
    marginLeft: i ? 0 : p.horizontal,
    marginRight: s ? 0 : p.horizontal
  }, f);
}
function sp({
  flat: e,
  uiModel: t,
  resizingWidth: n,
  movingLeft: o,
  eventHeight: r,
  headerHeight: i
}) {
  const { top: s, left: a, width: l, model: u } = t, c = yc(e), f = e ? {} : {
    width: n || X(l),
    left: X(o != null ? o : a),
    top: (s - 1) * (r + c.vertical) + i,
    position: "absolute"
  };
  return Object.assign(f, u.customStyle);
}
function ap({ model: e }) {
  const t = e.calendarId ? `${e.calendarId}-` : "", n = e.id ? `${e.id}-` : "";
  return `${t}${n}${e.title}`;
}
const nt = {
  eventBody: v("weekday-event"),
  eventTitle: v("weekday-event-title"),
  eventDot: v("weekday-event-dot"),
  moveEvent: v("dragging--move-event"),
  resizeEvent: v("dragging--resize-horizontal-event")
};
function wt({
  flat: e = !1,
  uiModel: t,
  eventHeight: n,
  headerHeight: o,
  resizingWidth: r = null,
  movingLeft: i = null
}) {
  const { currentView: s } = z(cn), { useDetailPopup: a, isReadOnly: l } = z(je), { setDraggingEventUIModel: u } = Se("dnd"), { showDetailPopup: c } = Se("popup"), f = xt(), p = Ne(), h = yi(t.model), [m, _] = ae(!1), y = te(null), { isReadOnly: w, id: E, calendarId: T } = t.model, k = !l && !w && F(r) && F(i), S = (b) => {
    u(t), f == null || f.classList.add(b);
  }, N = (b) => {
    _(!1), f == null || f.classList.remove(b);
  };
  _t(At, ({ draggingEventUIModel: b, draggingState: Z }) => {
    Z === Ve.DRAGGING && (b == null ? void 0 : b.cid()) === t.cid() && F(r) && F(i) ? _(!0) : _(!1);
  }), re(() => {
    k && p.fire("afterRenderEvent", t.model.toEventObject());
  }, []);
  const W = en(On.resizeEvent("dayGrid", `${t.cid()}`), {
    onDragStart: () => S(nt.resizeEvent),
    onMouseUp: () => N(nt.resizeEvent),
    onPressESCKey: () => N(nt.resizeEvent)
  }), V = en(On.moveEvent("dayGrid", `${t.cid()}`), {
    onDragStart: () => {
      k && S(nt.moveEvent);
    },
    onMouseUp: (b, { draggingState: Z }) => {
      N(nt.moveEvent);
      const oe = Z <= Ve.INIT;
      oe && a && y.current && c(
        {
          event: t.model,
          eventRect: y.current.getBoundingClientRect()
        },
        e
      ), oe && p.fire("clickEvent", { event: t.model.toEventObject(), nativeEvent: b });
    },
    onPressESCKey: () => N(nt.moveEvent)
  }), I = (b) => {
    b.stopPropagation(), k && W(b);
  }, $ = (b) => {
    b.stopPropagation(), V(b);
  }, R = !m && s === "month" && t.model.category === "time" && Nt(t.model.start, t.model.end), K = !k || e || m || t.exceedRight, q = sp({
    uiModel: t,
    eventHeight: n,
    headerHeight: o,
    flat: e,
    movingLeft: i,
    resizingWidth: r
  }), D = ip({
    uiModel: t,
    flat: e,
    eventHeight: n,
    isDraggingTarget: m,
    calendarColor: h
  });
  return /* @__PURE__ */ d("div", {
    className: v("weekday-event-block", {
      "weekday-exceed-left": t.exceedLeft,
      "weekday-exceed-right": t.exceedRight
    }),
    style: q,
    "data-testid": wi(k, ap(t)),
    "data-calendar-id": T,
    "data-event-id": E,
    ref: y
  }, /* @__PURE__ */ d("div", {
    className: nt.eventBody,
    style: ce(x({}, D), {
      backgroundColor: R ? null : D.backgroundColor,
      borderLeft: R ? null : D.borderLeft
    }),
    onMouseDown: $
  }, R ? /* @__PURE__ */ d("span", {
    className: nt.eventDot,
    style: { backgroundColor: D.backgroundColor }
  }) : null, /* @__PURE__ */ d("span", {
    className: nt.eventTitle
  }, /* @__PURE__ */ d(ne, {
    template: t.model.category,
    param: t.model
  })), K ? null : /* @__PURE__ */ d(Zf, {
    onMouseDown: I
  })));
}
function un(e, t) {
  const n = te(e);
  re(() => {
    n.current = e;
  }, [e]), re(() => {
    t && (() => n.current())();
  }, [t]);
}
function dn(e) {
  const [t, n] = ae(null);
  _t(At, (r) => {
    if (L(r.x) && L(r.y)) {
      const i = e({
        clientX: r.x,
        clientY: r.y
      });
      i && n(i);
    }
  });
  const o = ee(() => n(null), []);
  return [t, o];
}
const cp = (e, t, n) => {
  function o(r) {
    return new RegExp(`^event/${t}/${n}/\\d+$`).test(r);
  }
  return F(e) ? null : o(e) ? it(e.split("/")) : null;
};
function fn(e, t) {
  const [n, o] = ae(!1), [r, i] = ae(!1), [s, a] = ae(null);
  return _t(At, ({ draggingItemType: u, draggingEventUIModel: c, draggingState: f }) => {
    const p = cp(u, e, t), h = Number(p) === (c == null ? void 0 : c.cid()), m = f === Ve.IDLE, _ = f === Ve.CANCELED;
    F(s) && h && a(c), L(s) && (m || _) && (o(!0), i(_));
  }), {
    isDraggingEnd: n,
    isDraggingCanceled: r,
    draggingEvent: s,
    clearDraggingEvent: () => {
      a(null), o(!1), i(!1);
    }
  };
}
function lp({ rowStyleInfo: e, gridPositionFinder: t }) {
  const n = Ne(), {
    isDraggingEnd: o,
    isDraggingCanceled: r,
    draggingEvent: i,
    clearDraggingEvent: s
  } = fn("dayGrid", "move"), a = te(null), [l, u] = dn(t), { columnIndex: c } = l != null ? l : {}, f = U(
    () => F(i) ? null : e.findIndex(({ left: h }) => h === i.left),
    [e, i]
  ), p = U(() => {
    if (F(c) || F(a.current) || F(f))
      return null;
    const h = f + c - a.current;
    return h < 0 ? -e[-h].left : e[h].left;
  }, [c, e, f]);
  return re(() => {
    F(a.current) && L(c) && (a.current = c);
  }, [c]), un(() => {
    if (!r && L(i) && L(c) && L(p) && c !== a.current && L(a.current)) {
      const m = c - a.current, _ = new O(i.model.getStarts()), y = new O(i.model.getEnds());
      _.addDate(m), y.addDate(m), n.fire("beforeUpdateEvent", {
        event: i.model.toEventObject(),
        changes: {
          start: _,
          end: y
        }
      });
    }
    s(), u(), a.current = null;
  }, o), U(
    () => ({
      movingEvent: i,
      movingLeft: p
    }),
    [p, i]
  );
}
function up({
  rowStyleInfo: e,
  gridPositionFinder: t
}) {
  const { movingEvent: n, movingLeft: o } = lp({
    rowStyleInfo: e,
    gridPositionFinder: t
  });
  return F(n) ? null : /* @__PURE__ */ d(wt, {
    uiModel: n,
    eventHeight: Qe,
    headerHeight: 0,
    movingLeft: o
  });
}
function dp(e, t) {
  const n = Co(e.getStarts(), t), o = Co(e.getEnds(), t);
  return { start: n, end: o };
}
function fp({
  weekDates: e,
  gridColWidthMap: t,
  gridPositionFinder: n
}) {
  const o = Ne(), {
    isDraggingEnd: r,
    isDraggingCanceled: i,
    draggingEvent: s,
    clearDraggingEvent: a
  } = fn("dayGrid", "resize"), [l, u] = dn(n), { columnIndex: c } = l != null ? l : {}, f = U(() => s ? dp(s, e) : { start: -1, end: -1 }, [e, s]), p = U(() => f.start > -1 && L(c) ? t[f.start][c] : null, [c, t, f.start]);
  return un(() => {
    if (!i && L(s) && L(c) && f.start <= c && f.end !== c) {
      const m = e[c];
      o.fire("beforeUpdateEvent", {
        event: s.model.toEventObject(),
        changes: { end: m }
      });
    }
    u(), a();
  }, r), U(
    () => ({
      resizingEvent: s,
      resizingWidth: p
    }),
    [p, s]
  );
}
function pp({ weekDates: e, gridColWidthMap: t, gridPositionFinder: n }) {
  const { resizingEvent: o, resizingWidth: r } = fp({
    weekDates: e,
    gridColWidthMap: t,
    gridPositionFinder: n
  });
  return F(o) ? null : /* @__PURE__ */ d(wt, {
    uiModel: o,
    eventHeight: Qe,
    headerHeight: 0,
    resizingWidth: r
  });
}
function Ge() {
  const [e, t] = ae(null), n = ee((o) => {
    o && t(o);
  }, []);
  return [e, n];
}
function wc(e, t) {
  const [n, o] = ae(0), [r, i] = ae(!1), { updateDayGridRowHeight: s } = Se("weekViewLayout"), a = ee(
    (u) => {
      i(!0), o(u), s({
        rowName: t,
        height: (e + 1) * Qe
      });
    },
    [t, e, s]
  ), l = ee(() => {
    i(!1), s({
      rowName: t,
      height: Jt
    });
  }, [t, s]);
  return {
    clickedIndex: n,
    isClickedCount: r,
    onClickExceedCount: a,
    onClickCollapseButton: l
  };
}
function mp(e, t, n) {
  let o;
  const r = (s) => {
    if (o || (o = s), s - o >= t) {
      e(), n(an);
      return;
    }
    const l = requestAnimationFrame(r);
    n(() => cancelAnimationFrame(l));
  }, i = requestAnimationFrame(r);
  n(() => cancelAnimationFrame(i));
}
function hp({
  onClick: e,
  onDblClick: t,
  delay: n = 300
}) {
  const o = te(an), r = (l) => {
    o.current = l;
  }, i = () => {
    o.current();
  };
  return re(() => i, []), [(l) => {
    i(), mp(e.bind(null, l), n, r);
  }, (l) => {
    i(), t(l);
  }];
}
const gp = {
  dayGridMonth: "month",
  dayGridWeek: "allday",
  timeGrid: "time"
};
function vp(e, t) {
  return e < t ? [e, t] : [t, e];
}
function Ei({
  type: e,
  selectionSorter: t,
  dateGetter: n,
  dateCollection: o,
  gridPositionFinder: r
}) {
  const { useFormPopup: i, gridSelection: s } = z(je), { enableDblClick: a, enableClick: l } = s, { setGridSelection: u, addGridSelection: c, clearAll: f } = Se("gridSelection"), { hideAllPopup: p, showFormPopup: h } = Se("popup"), m = Ne(), _ = xt(), [y, w] = ae(null), [E, T] = ae(null), k = te(!1), S = te(null);
  _t(
    ee((D) => D.gridSelection[e], [e]),
    (D) => {
      S.current = D;
    }
  ), _t(At, ({ draggingState: D, draggingItemType: b }) => {
    k.current = b === N && D >= Ve.INIT;
  });
  const N = On.gridSelection(e), W = (D) => {
    const b = r(D);
    L(E) && L(b) && u(e, t(E, b));
  }, [V, I] = hp({
    onClick: (D) => {
      l && R(D, !0);
    },
    onDblClick: (D) => {
      a && R(D, !0);
    },
    delay: 250
  }), $ = (D) => {
    const b = D.detail <= 1;
    if (!(!l && (!a || b))) {
      if (l) {
        b ? V(D) : I(D);
        return;
      }
      R(D, !0);
    }
  }, R = (D, b) => {
    var Z;
    if (b && W(D), L(S.current)) {
      const [oe, Ce] = vp(
        ...n(o, S.current)
      );
      if (i && L(y)) {
        const Oe = {
          top: (D.clientY + y.y) / 2,
          left: (D.clientX + y.x) / 2
        };
        h({
          isCreationPopup: !0,
          title: "",
          location: "",
          start: oe,
          end: Ce,
          isAllday: e !== "timeGrid",
          isPrivate: !1,
          popupArrowPointPosition: Oe,
          close: f
        });
      }
      const j = `.${v(gp[e])}.${v(
        "grid-selection"
      )}`, de = Array.from(
        (Z = _ == null ? void 0 : _.querySelectorAll(j)) != null ? Z : []
      );
      m.fire("selectDateTime", {
        start: oe.toDate(),
        end: Ce.toDate(),
        isAllday: e !== "timeGrid",
        nativeEvent: D,
        gridSelectionElements: de
      });
    }
  }, K = ee(() => {
    w(null), T(null), u(e, null);
  }, [u, e]), q = en(N, {
    onInit: (D) => {
      i && (w({
        x: D.clientX,
        y: D.clientY
      }), p());
      const b = r(D);
      L(b) && T(b), i || c(e, S.current);
    },
    onDragStart: (D) => {
      W(D);
    },
    onDrag: (D) => {
      k.current && W(D);
    },
    onMouseUp: (D, { draggingState: b }) => {
      D.stopPropagation();
      const Z = b <= Ve.INIT;
      Z ? $(D) : R(D, Z);
    },
    onPressESCKey: K
  });
  return re(() => K, [K]), q;
}
const _p = "alldayTitle";
function Ec({
  events: e,
  weekDates: t,
  height: n = Jt,
  options: o = {},
  rowStyleInfo: r,
  gridColWidthMap: i
}) {
  const { isReadOnly: s } = z(je), a = se(Xa), [l, u] = Ge(), { narrowWeekend: c = !1, startDayOfWeek: f = rn.SUN } = o, p = U(() => Math.max(0, ...e.map(({ top: S }) => S)), [e]), h = U(
    () => hi({
      container: l,
      rowsCount: 1,
      columnsCount: t.length,
      narrowWeekend: c,
      startDayOfWeek: f
    }),
    [l, t.length, c, f]
  ), { clickedIndex: m, isClickedCount: _, onClickExceedCount: y, onClickCollapseButton: w } = wc(p, "allday"), E = U(
    () => e.filter(pi(n, Qe + Ta)).map((S) => /* @__PURE__ */ d(wt, {
      key: `allday-DayEvent-${S.cid()}`,
      uiModel: S,
      eventHeight: Qe,
      headerHeight: 0
    })),
    [e, n]
  ), T = Ei({
    type: "dayGridWeek",
    gridPositionFinder: h,
    dateCollection: t,
    selectionSorter: Lr.sortSelection,
    dateGetter: Lr.getDateFromCollection
  }), k = (S) => {
    const N = S.target;
    s || !N.classList.contains(v("panel-grid")) || T(S);
  };
  return /* @__PURE__ */ d(xe, null, /* @__PURE__ */ d("div", {
    className: v("panel-title"),
    style: a
  }, /* @__PURE__ */ d(ne, {
    template: _p,
    param: "alldayTitle"
  })), /* @__PURE__ */ d("div", {
    className: v("allday-panel"),
    ref: u,
    onMouseDown: k
  }, /* @__PURE__ */ d("div", {
    className: v("panel-grid-wrapper")
  }, /* @__PURE__ */ d(hc, {
    uiModels: e,
    weekDates: t,
    narrowWeekend: c,
    height: n,
    clickedIndex: m,
    isClickedCount: _,
    onClickExceedCount: y,
    onClickCollapseButton: w
  })), /* @__PURE__ */ d("div", {
    className: v("panel-allday-events")
  }, E), /* @__PURE__ */ d(pp, {
    weekDates: t,
    gridPositionFinder: h,
    gridColWidthMap: i
  }), /* @__PURE__ */ d(up, {
    rowStyleInfo: r,
    gridPositionFinder: h
  }), /* @__PURE__ */ d(Pf, {
    weekDates: t,
    narrowWeekend: c
  })));
}
function Dc({
  events: e,
  weekDates: t,
  category: n,
  height: o = Jt,
  options: r = {}
}) {
  const i = se(Xa), s = U(() => Math.max(0, ...e.map(({ top: m }) => m)), [e]), { narrowWeekend: a = !1 } = r, l = `${n}Title`, { clickedIndex: u, isClickedCount: c, onClickExceedCount: f, onClickCollapseButton: p } = wc(s, n), h = U(
    () => e.filter(pi(o, Qe + Ta)).map((m) => /* @__PURE__ */ d(wt, {
      key: `${n}-DayEvent-${m.cid()}`,
      uiModel: m,
      eventHeight: Qe,
      headerHeight: 0
    })),
    [n, e, o]
  );
  return /* @__PURE__ */ d(xe, null, /* @__PURE__ */ d("div", {
    className: v("panel-title"),
    style: i
  }, /* @__PURE__ */ d(ne, {
    template: l,
    param: n
  })), /* @__PURE__ */ d("div", {
    className: v("allday-panel")
  }, /* @__PURE__ */ d("div", {
    className: v("panel-grid-wrapper")
  }, /* @__PURE__ */ d(hc, {
    uiModels: e,
    weekDates: t,
    narrowWeekend: a,
    height: o,
    clickedIndex: u,
    isClickedCount: c,
    onClickExceedCount: f,
    onClickCollapseButton: p
  })), /* @__PURE__ */ d("div", {
    className: v(`panel-${n}-events`)
  }, h)));
}
const ve = {
  detailItem: v("detail-item"),
  detailItemIndent: v("detail-item", "detail-item-indent"),
  detailItemSeparate: v("detail-item", "detail-item-separate"),
  sectionDetail: v("popup-section", "section-detail"),
  content: v("content"),
  locationIcon: v("icon", "ic-location-b"),
  repeatIcon: v("icon", "ic-repeat-b"),
  userIcon: v("icon", "ic-user-b"),
  stateIcon: v("icon", "ic-state-b"),
  calendarDotIcon: v("icon", "calendar-dot")
};
function yp({ event: e }) {
  var l, u;
  const { location: t, recurrenceRule: n, attendees: o, state: r, calendarId: i, body: s } = e, a = vc(i);
  return /* @__PURE__ */ d("div", {
    className: ve.sectionDetail
  }, t && /* @__PURE__ */ d("div", {
    className: ve.detailItem
  }, /* @__PURE__ */ d("span", {
    className: ve.locationIcon
  }), /* @__PURE__ */ d("span", {
    className: ve.content
  }, /* @__PURE__ */ d(ne, {
    template: "popupDetailLocation",
    param: e,
    as: "span"
  }))), n && /* @__PURE__ */ d("div", {
    className: ve.detailItem
  }, /* @__PURE__ */ d("span", {
    className: ve.repeatIcon
  }), /* @__PURE__ */ d("span", {
    className: ve.content
  }, /* @__PURE__ */ d(ne, {
    template: "popupDetailRecurrenceRule",
    param: e,
    as: "span"
  }))), o && /* @__PURE__ */ d("div", {
    className: ve.detailItemIndent
  }, /* @__PURE__ */ d("span", {
    className: ve.userIcon
  }), /* @__PURE__ */ d("span", {
    className: ve.content
  }, /* @__PURE__ */ d(ne, {
    template: "popupDetailAttendees",
    param: e,
    as: "span"
  }))), r && /* @__PURE__ */ d("div", {
    className: ve.detailItem
  }, /* @__PURE__ */ d("span", {
    className: ve.stateIcon
  }), /* @__PURE__ */ d("span", {
    className: ve.content
  }, /* @__PURE__ */ d(ne, {
    template: "popupDetailState",
    param: e,
    as: "span"
  }))), a && /* @__PURE__ */ d("div", {
    className: ve.detailItem
  }, /* @__PURE__ */ d("span", {
    className: ve.calendarDotIcon,
    style: {
      backgroundColor: (l = a == null ? void 0 : a.backgroundColor) != null ? l : ""
    }
  }), /* @__PURE__ */ d("span", {
    className: ve.content
  }, (u = a == null ? void 0 : a.name) != null ? u : "")), s && /* @__PURE__ */ d("div", {
    className: ve.detailItemSeparate
  }, /* @__PURE__ */ d("span", {
    className: ve.content
  }, /* @__PURE__ */ d(ne, {
    template: "popupDetailBody",
    param: e,
    as: "span"
  }))));
}
const _r = {
  sectionHeader: v("popup-section", "section-header"),
  content: v("content"),
  eventTitle: v("event-title")
};
function wp({ event: e }) {
  return /* @__PURE__ */ d("div", {
    className: _r.sectionHeader
  }, /* @__PURE__ */ d("div", {
    className: _r.eventTitle
  }, /* @__PURE__ */ d(ne, {
    template: "popupDetailTitle",
    param: e,
    as: "span"
  })), /* @__PURE__ */ d("div", {
    className: _r.content
  }, /* @__PURE__ */ d(ne, {
    template: "popupDetailDate",
    param: e,
    as: "span"
  })));
}
const Ep = v("see-more-popup-slot"), Dp = v("event-form-popup-slot"), Sp = v("event-detail-popup-slot"), $r = 8, Tp = [
  "isPrivate",
  "isAllday",
  "isPending",
  "isFocused",
  "isVisible",
  "isReadOnly"
];
var Yt = /* @__PURE__ */ ((e) => (e.right = "right", e.left = "left", e))(Yt || {}), Vt = /* @__PURE__ */ ((e) => (e.top = "top", e.bottom = "bottom", e))(Vt || {});
const Sc = Io(null);
function bp({ children: e }) {
  const [t, n] = Ge(), [o, r] = Ge(), [i, s] = Ge(), [a, l] = Ge(), u = {
    container: t,
    seeMorePopupSlot: o,
    formPopupSlot: i,
    detailPopupSlot: a
  };
  return /* @__PURE__ */ d(Sc.Provider, {
    value: u
  }, e, /* @__PURE__ */ d("div", {
    ref: n,
    className: v("floating-layer")
  }, /* @__PURE__ */ d("div", {
    ref: r,
    className: Ep
  }), /* @__PURE__ */ d("div", {
    ref: s,
    className: Dp
  }), /* @__PURE__ */ d("div", {
    ref: l,
    className: Sp
  })));
}
const Di = (e) => {
  var n;
  const t = Mn(Sc);
  if (Be(t))
    throw new Error("FloatingLayerProvider is not found");
  return (n = t == null ? void 0 : t[e]) != null ? n : null;
};
function Tc(e, t, n) {
  return e + n.height > t.top + t.height;
}
function bc(e, t, n) {
  return e + n.width > t.left + t.width;
}
const Cp = (e) => e.popup[Po.Form], kp = (e) => e.popup[Po.Detail], Np = (e) => e.popup[Po.SeeMore], Le = {
  popupContainer: v("popup-container"),
  detailContainer: v("detail-container"),
  topLine: v("popup-top-line"),
  border: v("popup-arrow-border"),
  fill: v("popup-arrow-fill"),
  sectionButton: v("popup-section", "section-button"),
  content: v("content"),
  editIcon: v("icon", "ic-edit"),
  deleteIcon: v("icon", "ic-delete"),
  editButton: v("edit-button"),
  deleteButton: v("delete-button"),
  verticalLine: v("vertical-line")
};
function Ip(e, t, n) {
  let o = e.top + e.height / 2 - n.height / 2, r = e.left + e.width;
  return Tc(o, t, n) && (o = t.top + t.height - n.height), bc(r, t, n) && (r = e.left - n.width), [
    Math.max(o, t.top) + window.scrollY,
    Math.max(r, t.left) + window.scrollX
  ];
}
function Mp(e, t, n) {
  const o = e.top + e.height / 2 + window.scrollY, s = e.left + e.width + n.width > t.left + t.width ? Yt.right : Yt.left;
  return { top: o, direction: s };
}
function Ap() {
  const { useFormPopup: e } = z(je), t = z(kp), { event: n, eventRect: o } = t != null ? t : {}, { showFormPopup: r, hideDetailPopup: i } = Se("popup"), s = yi(n), a = xt(), l = Di("detailPopupSlot"), u = Ne(), c = te(null), [f, p] = ae({}), [h, m] = ae(0), [_, y] = ae(
    Yt.left
  ), w = U(() => {
    const q = _ === Yt.right, D = _ === Yt.left;
    return v("popup-arrow", { right: q, left: D });
  }, [_]);
  if (ht(() => {
    if (c.current && o && a) {
      const q = a.getBoundingClientRect(), D = c.current.getBoundingClientRect(), [b, Z] = Ip(o, q, D), { top: oe, direction: Ce } = Mp(
        o,
        q,
        D
      );
      p({ top: b, left: Z }), m(oe - b - $r), y(Ce);
    }
  }, [o, a]), F(n) || F(o) || F(l))
    return null;
  const {
    title: E = "",
    isAllday: T = !1,
    start: k = new O(),
    end: S = new O(),
    location: N,
    state: W,
    isReadOnly: V,
    isPrivate: I
  } = n, $ = {
    top: o.top + o.height / 2,
    left: o.left + o.width / 2
  }, R = () => {
    e ? r({
      isCreationPopup: !1,
      event: n,
      title: E,
      location: N,
      start: k,
      end: S,
      isAllday: T,
      isPrivate: I,
      eventState: W,
      popupArrowPointPosition: $
    }) : u.fire("beforeUpdateEvent", { event: n.toEventObject(), changes: {} });
  }, K = () => {
    u.fire("beforeDeleteEvent", n.toEventObject()), i();
  };
  return _i(
    /* @__PURE__ */ d("div", {
      role: "dialog",
      className: Le.popupContainer,
      ref: c,
      style: f
    }, /* @__PURE__ */ d("div", {
      className: Le.detailContainer
    }, /* @__PURE__ */ d(wp, {
      event: n
    }), /* @__PURE__ */ d(yp, {
      event: n
    }), !V && /* @__PURE__ */ d("div", {
      className: Le.sectionButton
    }, /* @__PURE__ */ d("button", {
      type: "button",
      className: Le.editButton,
      onClick: R
    }, /* @__PURE__ */ d("span", {
      className: Le.editIcon
    }), /* @__PURE__ */ d("span", {
      className: Le.content
    }, /* @__PURE__ */ d(ne, {
      template: "popupEdit",
      as: "span"
    }))), /* @__PURE__ */ d("div", {
      className: Le.verticalLine
    }), /* @__PURE__ */ d("button", {
      type: "button",
      className: Le.deleteButton,
      onClick: K
    }, /* @__PURE__ */ d("span", {
      className: Le.deleteIcon
    }), /* @__PURE__ */ d("span", {
      className: Le.content
    }, /* @__PURE__ */ d(ne, {
      template: "popupDelete",
      as: "span"
    }))))), /* @__PURE__ */ d("div", {
      className: Le.topLine,
      style: { backgroundColor: s.backgroundColor }
    }), /* @__PURE__ */ d("div", {
      className: w
    }, /* @__PURE__ */ d("div", {
      className: Le.border,
      style: { top: h }
    }, /* @__PURE__ */ d("div", {
      className: Le.fill
    })))),
    l
  );
}
const fo = {
  dropdownMenu: v("dropdown-menu"),
  dropdownMenuItem: v("dropdown-menu-item"),
  dotIcon: v("icon", "dot"),
  content: v("content")
};
function xp({ index: e, name: t, backgroundColor: n, onClick: o }) {
  return /* @__PURE__ */ d("li", {
    className: fo.dropdownMenuItem,
    onClick: (r) => o(r, e)
  }, /* @__PURE__ */ d("span", {
    className: fo.dotIcon,
    style: { backgroundColor: n }
  }), /* @__PURE__ */ d("span", {
    className: fo.content
  }, t));
}
function Rp({ calendars: e, setOpened: t, onChangeIndex: n }) {
  const o = (r, i) => {
    r.stopPropagation(), t(!1), n(i);
  };
  return /* @__PURE__ */ d("ul", {
    className: fo.dropdownMenu
  }, e.map(({ name: r, backgroundColor: i = "000" }, s) => /* @__PURE__ */ d(xp, {
    key: `dropdown-${r}-${s}`,
    index: s,
    name: r,
    backgroundColor: i,
    onClick: o
  })));
}
function Mt({
  children: e,
  classNames: t = [],
  onClick: n = an
}) {
  return /* @__PURE__ */ d("div", {
    className: v("popup-section", ...t),
    onClick: n
  }, e);
}
function Cc() {
  const [e, t] = ae(!1);
  return { isOpened: e, setOpened: t, toggleDropdown: () => t((o) => !o) };
}
var ct = /* @__PURE__ */ ((e) => (e.init = "init", e.setCalendarId = "setCalendarId", e.setTitle = "setTitle", e.setLocation = "setLocation", e.setPrivate = "setPrivate", e.setAllday = "setAllday", e.setState = "setState", e.reset = "reset", e))(ct || {});
const Br = {
  title: "",
  location: "",
  isAllday: !1,
  isPrivate: !1,
  state: "Busy"
};
function Op(e, t) {
  switch (t.type) {
    case "init":
      return x(x({}, Br), t.event);
    case "setCalendarId":
      return ce(x({}, e), { calendarId: t.calendarId });
    case "setTitle":
      return ce(x({}, e), { title: t.title });
    case "setLocation":
      return ce(x({}, e), { location: t.location });
    case "setPrivate":
      return ce(x({}, e), { isPrivate: t.isPrivate });
    case "setAllday":
      return ce(x({}, e), { isAllday: t.isAllday });
    case "setState":
      return ce(x({}, e), { state: t.state });
    case "reset":
      return x(x({}, e), Br);
    default:
      return e;
  }
}
function Pp(e) {
  return Wr(Op, x({ calendarId: e }, Br));
}
const eo = {
  popupSection: ["dropdown-section", "calendar-section"],
  popupSectionItem: v("popup-section-item", "popup-button"),
  dotIcon: v("icon", "dot"),
  content: v("content", "event-calendar")
};
function Lp({ calendars: e, selectedCalendarId: t, formStateDispatch: n }) {
  const { isOpened: o, setOpened: r, toggleDropdown: i } = Cc(), s = e.find((c) => c.id === t), { backgroundColor: a = "", name: l = "" } = s != null ? s : {}, u = (c) => n({ type: ct.setCalendarId, calendarId: e[c].id });
  return /* @__PURE__ */ d(Mt, {
    onClick: i,
    classNames: eo.popupSection
  }, /* @__PURE__ */ d("button", {
    type: "button",
    className: eo.popupSectionItem
  }, /* @__PURE__ */ d("span", {
    className: eo.dotIcon,
    style: { backgroundColor: a }
  }), /* @__PURE__ */ d("span", {
    className: eo.content
  }, l), /* @__PURE__ */ d("span", {
    className: v("icon", "ic-dropdown-arrow", { open: o })
  })), o && /* @__PURE__ */ d(Rp, {
    calendars: e,
    setOpened: r,
    onChangeIndex: u
  }));
}
const Ws = {
  closeButton: v("popup-button", "popup-close"),
  closeIcon: v("icon", "ic-close")
};
function kc({ type: e, close: t }) {
  const { hideAllPopup: n } = Se("popup"), o = () => {
    n(), Cn(t) && t();
  };
  return /* @__PURE__ */ d("button", {
    type: "button",
    className: Ws.closeButton,
    onClick: o
  }, e === "moreEvents" ? /* @__PURE__ */ d(ne, {
    template: "monthMoreClose"
  }) : /* @__PURE__ */ d("i", {
    className: Ws.closeIcon
  }));
}
const Hp = {
  confirmButton: v("popup-button", "popup-confirm")
};
function $p({ children: e }) {
  return /* @__PURE__ */ d("button", {
    type: "submit",
    className: Hp.confirmButton
  }, /* @__PURE__ */ d("span", null, e));
}
function No({
  template: e,
  model: t,
  defaultValue: n = ""
}) {
  const r = z(Wa)[e];
  if (F(r))
    return n;
  let i = r(t);
  return be(i) || (i = n), i;
}
const ze = {
  datePickerContainer: v("datepicker-container"),
  datePicker: v("popup-section-item", "popup-date-picker"),
  allday: v("popup-section-item", "popup-section-allday"),
  dateIcon: v("icon", "ic-date"),
  dateDash: v("popup-date-dash"),
  content: v("content")
}, Bp = pc(function({ start: t, end: n, isAllday: o = !1, formStateDispatch: r }, i) {
  const { usageStatistics: s } = z(je), a = te(null), l = te(null), u = te(null), c = te(null), f = No({
    template: "startDatePlaceholder",
    defaultValue: "Start Date"
  }), p = No({
    template: "endDatePlaceholder",
    defaultValue: "End Date"
  }), h = () => r({ type: ct.setAllday, isAllday: !o });
  return re(() => {
    if (a.current && l.current && u.current && c.current) {
      const m = new O(t), _ = new O(n);
      o && (m.setHours(12, 0, 0), _.setHours(13, 0, 0)), i.current = Il.createRangePicker({
        startpicker: {
          date: m.toDate(),
          input: l.current,
          container: a.current
        },
        endpicker: {
          date: _.toDate(),
          input: c.current,
          container: u.current
        },
        format: o ? "yyyy-MM-dd" : "yyyy-MM-dd HH:mm",
        timePicker: o ? !1 : {
          showMeridiem: !1,
          usageStatistics: s
        },
        usageStatistics: s
      });
    }
  }, [t, n, o, s, i]), /* @__PURE__ */ d(Mt, null, /* @__PURE__ */ d("div", {
    className: ze.datePicker
  }, /* @__PURE__ */ d("span", {
    className: ze.dateIcon
  }), /* @__PURE__ */ d("input", {
    name: "start",
    className: ze.content,
    placeholder: f,
    ref: l
  }), /* @__PURE__ */ d("div", {
    className: ze.datePickerContainer,
    ref: a
  })), /* @__PURE__ */ d("span", {
    className: ze.dateDash
  }, "-"), /* @__PURE__ */ d("div", {
    className: ze.datePicker
  }, /* @__PURE__ */ d("span", {
    className: ze.dateIcon
  }), /* @__PURE__ */ d("input", {
    name: "end",
    className: ze.content,
    placeholder: p,
    ref: c
  }), /* @__PURE__ */ d("div", {
    className: ze.datePickerContainer,
    ref: u
  })), /* @__PURE__ */ d("div", {
    className: ze.allday,
    onClick: h
  }, /* @__PURE__ */ d("span", {
    className: v("icon", {
      "ic-checkbox-normal": !o,
      "ic-checkbox-checked": o
    })
  }), /* @__PURE__ */ d("span", {
    className: ze.content
  }, /* @__PURE__ */ d(ne, {
    template: "popupIsAllday"
  })), /* @__PURE__ */ d("input", {
    name: "isAllday",
    type: "checkbox",
    className: v("hidden-input"),
    value: o ? "true" : "false",
    checked: o
  })));
}), Gp = ["Busy", "Free"], to = {
  popupSectionItem: v("popup-section-item", "dropdown-menu-item"),
  dropdownMenu: v("dropdown-menu"),
  icon: v("icon"),
  content: v("content")
};
function Fp({ setOpened: e, setEventState: t }) {
  const n = (o, r) => {
    o.stopPropagation(), e(!1), t(r);
  };
  return /* @__PURE__ */ d("ul", {
    className: to.dropdownMenu
  }, Gp.map((o) => /* @__PURE__ */ d("li", {
    key: o,
    className: to.popupSectionItem,
    onClick: (r) => n(r, o)
  }, /* @__PURE__ */ d("span", {
    className: to.icon
  }), /* @__PURE__ */ d("span", {
    className: to.content
  }, o === "Busy" ? /* @__PURE__ */ d(ne, {
    template: "popupStateBusy"
  }) : /* @__PURE__ */ d(ne, {
    template: "popupStateFree"
  })))));
}
const wn = {
  popupSection: ["dropdown-section", "state-section"],
  popupSectionItem: v("popup-section-item", "popup-button"),
  stateIcon: v("icon", "ic-state"),
  arrowIcon: v("icon", "ic-dropdown-arrow"),
  content: v("content", "event-state")
};
function Up({ eventState: e = "Busy", formStateDispatch: t }) {
  const { isOpened: n, setOpened: o, toggleDropdown: r } = Cc(), i = (s) => t({ type: ct.setState, state: s });
  return /* @__PURE__ */ d(Mt, {
    onClick: r,
    classNames: wn.popupSection
  }, /* @__PURE__ */ d("button", {
    type: "button",
    className: wn.popupSectionItem
  }, /* @__PURE__ */ d("span", {
    className: wn.stateIcon
  }), /* @__PURE__ */ d("span", {
    className: wn.content
  }, e === "Busy" ? /* @__PURE__ */ d(ne, {
    template: "popupStateBusy"
  }) : /* @__PURE__ */ d(ne, {
    template: "popupStateFree"
  })), /* @__PURE__ */ d("span", {
    className: wn.arrowIcon
  })), n && /* @__PURE__ */ d(Fp, {
    setOpened: o,
    setEventState: i
  }));
}
const yr = {
  popupSectionItem: v("popup-section-item", "popup-section-location"),
  locationIcon: v("icon", "ic-location"),
  content: v("content")
};
function zp({ location: e, formStateDispatch: t }) {
  const n = No({
    template: "locationPlaceholder",
    defaultValue: "Location"
  }), o = (r) => {
    t({ type: ct.setLocation, location: r.currentTarget.value });
  };
  return /* @__PURE__ */ d(Mt, null, /* @__PURE__ */ d("div", {
    className: yr.popupSectionItem
  }, /* @__PURE__ */ d("span", {
    className: yr.locationIcon
  }), /* @__PURE__ */ d("input", {
    name: "location",
    className: yr.content,
    placeholder: n,
    value: e,
    onChange: o
  })));
}
const no = {
  popupSectionItem: v("popup-section-item", "popup-section-title"),
  privateButton: v("popup-section-item", "popup-section-private", "popup-button"),
  titleIcon: v("icon", "ic-title"),
  content: v("content")
};
function Wp({ title: e, isPrivate: t = !1, formStateDispatch: n }) {
  const o = No({
    template: "titlePlaceholder",
    defaultValue: "Subject"
  }), r = () => n({ type: ct.setPrivate, isPrivate: !t }), i = (s) => {
    n({ type: ct.setTitle, title: s.currentTarget.value });
  };
  return /* @__PURE__ */ d(Mt, null, /* @__PURE__ */ d("div", {
    className: no.popupSectionItem
  }, /* @__PURE__ */ d("span", {
    className: no.titleIcon
  }), /* @__PURE__ */ d("input", {
    name: "title",
    className: no.content,
    placeholder: o,
    value: e,
    onChange: i,
    required: !0
  })), /* @__PURE__ */ d("button", {
    type: "button",
    className: no.privateButton,
    onClick: r
  }, /* @__PURE__ */ d("span", {
    className: v("icon", { "ic-private": t, "ic-public": !t })
  }), /* @__PURE__ */ d("input", {
    name: "isPrivate",
    type: "checkbox",
    className: v("hidden-input"),
    value: t ? "true" : "false",
    checked: t
  })));
}
const oo = {
  popupContainer: v("popup-container"),
  formContainer: v("form-container"),
  popupArrowBorder: v("popup-arrow-border"),
  popupArrowFill: v("popup-arrow-fill")
};
function Yp(e, t, n) {
  let o = e.top - n.height - $r, r = e.left - n.width / 2, i = Vt.bottom;
  return o < t.top && (i = Vt.top, o = e.top + $r), Tc(o, t, n) && (o = t.top + t.height - n.height), bc(r, t, n) && (r = t.left + t.width - n.width), {
    top: o + window.scrollY,
    left: Math.max(r, t.left) + window.scrollX,
    direction: i
  };
}
function Vp(e) {
  return Tp.indexOf(e) !== -1;
}
function jp(e, t) {
  return Object.entries(t).reduce((n, [o, r]) => {
    const i = o;
    return e[i] instanceof O ? vt(e[i], r) !== 0 && (n[i] = r) : e[i] !== r && (n[i] = r), n;
  }, {});
}
function Xp() {
  var V;
  const { calendars: e } = z(Lo), { hideAllPopup: t } = Se("popup"), n = z(Cp), { start: o, end: r, popupArrowPointPosition: i, close: s, isCreationPopup: a, event: l } = n != null ? n : {}, u = Ne(), c = Di("formPopupSlot"), [f, p] = Pp((V = e[0]) == null ? void 0 : V.id), h = te(null), m = te(null), [_, y] = ae({}), [w, E] = ae(0), [T, k] = ae(
    Vt.bottom
  ), S = xt(), N = U(() => {
    const I = T === Vt.top, $ = T === Vt.bottom;
    return v("popup-arrow", { top: I, bottom: $ });
  }, [T]);
  if (ht(() => {
    if (m.current && i && S) {
      const I = S.getBoundingClientRect(), $ = m.current.getBoundingClientRect(), { top: R, left: K, direction: q } = Yp(
        i,
        I,
        $
      ), D = i.left - K;
      y({ left: K, top: R }), E(D), k(q);
    }
  }, [S, i]), re(() => {
    L(n) && L(l) && p({
      type: ct.init,
      event: {
        title: n.title,
        location: n.location,
        isAllday: n.isAllday,
        isPrivate: n.isPrivate,
        calendarId: l.calendarId,
        state: n.eventState
      }
    });
  }, [e, l, p, n]), re(() => {
    F(n) && p({ type: ct.reset });
  }, [p, n]), F(o) || F(r) || F(c))
    return null;
  const W = (I) => {
    var K, q;
    I.preventDefault();
    const $ = new FormData(I.target), R = x({}, f);
    if ($.forEach((D, b) => {
      R[b] = Vp(b) ? D === "true" : D;
    }), R.start = new O((K = h.current) == null ? void 0 : K.getStartDate()), R.end = new O((q = h.current) == null ? void 0 : q.getEndDate()), a)
      u.fire("beforeCreateEvent", R);
    else if (l) {
      const D = jp(l, R);
      u.fire("beforeUpdateEvent", { event: l.toEventObject(), changes: D });
    }
    t();
  };
  return _i(
    /* @__PURE__ */ d("div", {
      role: "dialog",
      className: oo.popupContainer,
      ref: m,
      style: _
    }, /* @__PURE__ */ d("form", {
      onSubmit: W
    }, /* @__PURE__ */ d("div", {
      className: oo.formContainer
    }, e != null && e.length ? /* @__PURE__ */ d(Lp, {
      selectedCalendarId: f.calendarId,
      calendars: e,
      formStateDispatch: p
    }) : /* @__PURE__ */ d(Mt, null), /* @__PURE__ */ d(Wp, {
      title: f.title,
      isPrivate: f.isPrivate,
      formStateDispatch: p
    }), /* @__PURE__ */ d(zp, {
      location: f.location,
      formStateDispatch: p
    }), /* @__PURE__ */ d(Bp, {
      start: o,
      end: r,
      isAllday: f.isAllday,
      formStateDispatch: p,
      ref: h
    }), /* @__PURE__ */ d(Up, {
      eventState: f.state,
      formStateDispatch: p
    }), /* @__PURE__ */ d(kc, {
      type: "form",
      close: s
    }), /* @__PURE__ */ d(Mt, null, /* @__PURE__ */ d($p, null, a ? /* @__PURE__ */ d(ne, {
      template: "popupSave"
    }) : /* @__PURE__ */ d(ne, {
      template: "popupUpdate"
    })))), /* @__PURE__ */ d("div", {
      className: N
    }, /* @__PURE__ */ d("div", {
      className: oo.popupArrowBorder,
      style: { left: w }
    }, /* @__PURE__ */ d("div", {
      className: oo.popupArrowFill
    }))))),
    c
  );
}
function Kp(e) {
  return Object.values(e.popup).find((t) => L(t));
}
function qp() {
  const e = z(Kp), { hideAllPopup: t } = Se("popup"), n = L(e), o = (r) => {
    var i;
    r.stopPropagation(), (i = e == null ? void 0 : e.close) == null || i.call(e), t();
  };
  return /* @__PURE__ */ d("div", {
    className: v("popup-overlay"),
    style: { display: n ? "block" : "none" },
    onClick: o
  });
}
const ro = {
  container: v("see-more-container"),
  seeMore: v("see-more"),
  header: v("see-more-header"),
  list: v("month-more-list")
};
function Zp() {
  const e = z(Np), { date: t, events: n = [], popupPosition: o } = e != null ? e : {}, { moreView: r, moreViewTitle: i } = qa(), s = Di("seeMorePopupSlot"), a = Ne(), l = te(null), u = F(t) || F(o) || F(s);
  if (re(() => {
    !u && l.current && a.fire("clickMoreEventsBtn", {
      date: t.toDate(),
      target: l.current
    });
  }, [t, a, u]), u)
    return null;
  const c = {
    height: co,
    marginBottom: Nr,
    padding: nu,
    backgroundColor: i.backgroundColor
  }, f = {
    ymd: me(t, "YYYY-MM-DD"),
    day: t.getDay(),
    date: t.getDate().toString().padStart(2, "0")
  }, p = {
    height: `calc(100% - ${co + Nr + tu}px)`
  };
  return _i(
    /* @__PURE__ */ d("div", {
      role: "dialog",
      className: ro.container,
      style: o,
      ref: l
    }, /* @__PURE__ */ d("div", {
      className: ro.seeMore,
      style: r
    }, /* @__PURE__ */ d("div", {
      className: ro.header,
      style: c
    }, /* @__PURE__ */ d(ne, {
      template: "monthMoreTitleDate",
      param: f
    }), /* @__PURE__ */ d(kc, {
      type: "moreEvents"
    })), /* @__PURE__ */ d("div", {
      className: ro.list,
      style: p
    }, n.map((h) => /* @__PURE__ */ d(wt, {
      key: `see-more-event-item-${h.cid()}`,
      uiModel: h,
      eventHeight: Zt,
      headerHeight: co,
      flat: !0
    }))))),
    s
  );
}
function Jp(e, t) {
  const n = { height: X(100) };
  return e && (n.width = e), t && (n.height = t), n;
}
function Si({
  children: e,
  width: t,
  height: n,
  className: o = "",
  autoAdjustPanels: r = !1
}) {
  const { backgroundColor: i } = se(ja), [s, a] = Ge(), { setLastPanelType: l, updateLayoutHeight: u } = Se("weekViewLayout"), c = U(() => `${v("layout")} ${o}`, [o]);
  return ht(() => {
    if (s) {
      const f = () => u(s.offsetHeight);
      return f(), window.addEventListener("resize", f), () => window.removeEventListener("resize", f);
    }
    return an;
  }, [s, u]), ht(() => {
    if (s && r) {
      const f = Nn(e), p = f[f.length - 1];
      !be(p) && !lo(p) && !F(p) && l(p.props.name);
    }
  }, [e, l, r, s]), /* @__PURE__ */ d(Jf, {
    value: s
  }, /* @__PURE__ */ d("div", {
    ref: a,
    className: c,
    style: ce(x({}, Jp(t, n)), { backgroundColor: i })
  }, s ? e : null), /* @__PURE__ */ d(Xp, null), /* @__PURE__ */ d(Ap, null), /* @__PURE__ */ d(Zp, null), /* @__PURE__ */ d(qp, null));
}
function Qp(e, t) {
  return {
    height: e,
    width: "100%",
    cursor: "row-resize",
    borderTop: t,
    borderBottom: t
  };
}
function em({ name: e, height: t }) {
  const n = se(ee((c) => c.week.panelResizer.border, [])), o = Qp(t, n), r = ce(x({}, o), {
    display: "none",
    border: "none",
    backgroundColor: "#999"
  }), [i, s] = ae(r), a = te(null), { updateDayGridRowHeightByDiff: l } = Se("weekViewLayout"), u = en(Qf.panelResizer, {
    onDragStart: (c) => {
      a.current = { left: c.pageX, top: c.pageY };
    },
    onDrag: (c) => {
      if (a.current) {
        const f = c.pageY - a.current.top;
        s((p) => ce(x({}, p), { top: f, display: null }));
      }
    },
    onMouseUp: (c) => {
      if (a.current) {
        const f = c.pageY - a.current.top;
        a.current = null, s(r), l({ rowName: e, diff: f });
      }
    }
  });
  return /* @__PURE__ */ d("div", {
    style: { position: "relative" }
  }, /* @__PURE__ */ d("div", {
    className: v("panel-resizer"),
    style: o,
    onMouseDown: u
  }), /* @__PURE__ */ d("div", {
    className: v("panel-resizer-guide"),
    style: i
  }));
}
function Ys(e, t) {
  return t ? Math.min(t, e) : e;
}
function tm({
  initialHeight: e,
  initialWidth: t,
  overflowX: n,
  overflowY: o,
  maxExpandableWidth: r,
  maxExpandableHeight: i,
  minHeight: s,
  maxHeight: a,
  minWidth: l,
  maxWidth: u
}) {
  const c = {};
  return t && (c.width = Ys(t, r), c.height = "100%"), e && (c.width = "100%", c.height = Ys(e, i)), n && (c.overflowX = "auto"), o && (c.overflowY = "auto"), ce(x({}, c), { minHeight: s, maxHeight: a, minWidth: l, maxWidth: u });
}
const jt = pc(function({
  name: t,
  initialWidth: n = Jt,
  initialHeight: o = Jt,
  overflowX: r,
  overflowY: i,
  maxExpandableWidth: s,
  maxExpandableHeight: a,
  minHeight: l,
  maxHeight: u,
  minWidth: c,
  maxWidth: f,
  resizerWidth: p = Rr,
  resizerHeight: h = Rr,
  resizable: m,
  children: _
}, y) {
  const { updateDayGridRowHeight: w } = Se("weekViewLayout"), { height: E } = z(
    ee((N) => {
      var W;
      return (W = N.weekViewLayout.dayGridRows[t]) != null ? W : {};
    }, [t])
  ), T = E != null ? E : o;
  ht(() => {
    w({ rowName: t, height: o });
  }, [o, t, w]);
  const k = tm({
    initialWidth: n,
    initialHeight: T,
    overflowX: r,
    overflowY: i,
    maxExpandableWidth: s,
    maxExpandableHeight: a,
    minHeight: l,
    maxHeight: u,
    minWidth: c,
    maxWidth: f
  }), S = U(() => F(m) || ei(m) ? !!m : m.includes(t), [m, t]);
  return /* @__PURE__ */ d(xe, null, /* @__PURE__ */ d("div", {
    className: v("panel", t),
    style: k,
    ref: y
  }, _), S ? /* @__PURE__ */ d(em, {
    name: t,
    width: p,
    height: h
  }) : null);
}), Nc = "timegrid", De = (e) => `${Nc}-${e}`, nm = {
  second: "HH:mm:ss",
  minute: "HH:mm",
  hour: "HH:mm",
  date: "HH:mm",
  month: "MM.DD",
  year: "YYYY.MM.DD"
}, We = {
  time: v("event-time"),
  content: v("event-time-content"),
  travelTime: v("travel-time"),
  resizeHandleX: v("resize-handler-x"),
  moveEvent: v("dragging--move-event"),
  resizeEvent: v("dragging--resize-vertical-event")
};
function om(e) {
  const { percent: t, px: n } = Ir(`${e}`);
  return e > 0 || t > 0 || n > 0 ? wo : 0;
}
function rm(e, t) {
  return be(e) ? e : e >= 0 ? `calc(${X(e)} - ${t}px)` : "";
}
function im({
  uiModel: e,
  isDraggingTarget: t,
  hasNextStartTime: n,
  calendarColor: o,
  minHeight: r
}) {
  const {
    top: i,
    left: s,
    height: a,
    width: l,
    duplicateLeft: u,
    duplicateWidth: c,
    goingDurationHeight: f,
    modelDurationHeight: p,
    comingDurationHeight: h,
    croppedStart: m,
    croppedEnd: _
  } = e, y = "white", w = 2, E = 2, T = om(s), { color: k, backgroundColor: S, borderColor: N, dragBackgroundColor: W } = ba(
    e,
    o
  ), V = {
    width: rm(c || l, T),
    height: `calc(${X(Math.max(a, r))} - ${E}px)`,
    top: X(i),
    left: u || X(s),
    borderRadius: w,
    borderLeft: `3px solid ${N}`,
    marginLeft: T,
    color: k,
    backgroundColor: t ? W : S,
    opacity: t ? 0.5 : 1,
    zIndex: n ? 1 : 0
  }, I = {
    height: X(f),
    borderBottom: `1px dashed ${y}`
  }, $ = {
    height: X(p)
  }, R = {
    height: X(h),
    borderTop: `1px dashed ${y}`
  };
  return m && (V.borderTopLeftRadius = 0, V.borderTopRightRadius = 0), _ && (V.borderBottomLeftRadius = 0, V.borderBottomRightRadius = 0), {
    containerStyle: V,
    goingDurationStyle: I,
    modelDurationStyle: $,
    comingDurationStyle: R
  };
}
function sm({
  uiModel: e,
  isReadOnlyCalendar: t,
  isDraggingTarget: n,
  hasNextStartTime: o
}) {
  const { model: r } = e;
  return !t && !r.isReadOnly && !n && !o;
}
function Ti({
  uiModel: e,
  nextStartTime: t,
  isResizingGuide: n = !1,
  minHeight: o = 0
}) {
  const {
    useDetailPopup: r,
    isReadOnly: i,
    week: s
  } = z(je), a = yi(e.model), { collapseDuplicateEvents: l } = s, u = xt(), { showDetailPopup: c } = Se("popup"), { setDraggingEventUIModel: f } = Se("dnd"), { setSelectedDuplicateEventCid: p } = Se("weekViewLayout"), h = Ne(), m = te(null), [_, y] = ae(!1), { model: w, goingDurationHeight: E, modelDurationHeight: T, comingDurationHeight: k, croppedEnd: S } = e, { id: N, calendarId: W, customStyle: V } = w, I = L(t), { containerStyle: $, goingDurationStyle: R, modelDurationStyle: K, comingDurationStyle: q } = im(
    { uiModel: e, isDraggingTarget: _, hasNextStartTime: I, calendarColor: a, minHeight: o }
  ), D = I || n;
  _t(At, ({ draggingEventUIModel: ue, draggingState: Ue }) => {
    Ue === Ve.DRAGGING && (ue == null ? void 0 : ue.cid()) === e.cid() && !I && !n ? y(!0) : y(!1);
  }), re(() => {
    n || h.fire("afterRenderEvent", e.model.toEventObject());
  }, []);
  const b = (ue) => {
    f(e), u == null || u.classList.add(ue);
  }, Z = (ue) => {
    y(!1), u == null || u.classList.remove(ue);
  }, oe = en(On.moveEvent("timeGrid", `${e.cid()}`), {
    onDragStart: () => {
      Oe && b(We.moveEvent);
    },
    onMouseUp: (ue, { draggingState: Ue }) => {
      Z(We.moveEvent);
      const Pe = Ue <= Ve.INIT;
      if (Pe && l) {
        const lt = e.duplicateEvents.length > 0 ? e.cid() : Ro;
        p(lt);
      }
      Pe && r && m.current && c(
        {
          event: e.model,
          eventRect: m.current.getBoundingClientRect()
        },
        !1
      ), Pe && h.fire("clickEvent", { event: e.model.toEventObject(), nativeEvent: ue });
    },
    onPressESCKey: () => Z(We.moveEvent)
  }), Ce = (ue) => {
    ue.stopPropagation(), oe(ue);
  }, j = en(
    On.resizeEvent("timeGrid", `${e.cid()}`),
    {
      onDragStart: () => b(We.resizeEvent),
      onMouseUp: () => Z(We.resizeEvent),
      onPressESCKey: () => Z(We.resizeEvent)
    }
  ), de = (ue) => {
    ue.stopPropagation(), j(ue);
  }, Oe = sm({
    uiModel: e,
    isReadOnlyCalendar: i,
    isDraggingTarget: _,
    hasNextStartTime: I
  }), Et = Oe && !S;
  return /* @__PURE__ */ d("div", {
    "data-testid": `${D ? "guide-" : ""}time-event-${w.title}-${e.cid()}`,
    "data-calendar-id": W,
    "data-event-id": N,
    className: We.time,
    style: x(x({}, $), V),
    onMouseDown: Ce,
    ref: m
  }, E ? /* @__PURE__ */ d("div", {
    className: We.travelTime,
    style: R
  }, /* @__PURE__ */ d(ne, {
    template: "goingDuration",
    param: w
  })) : null, T ? /* @__PURE__ */ d("div", {
    className: We.content,
    style: K
  }, /* @__PURE__ */ d(ne, {
    template: "time",
    param: ce(x({}, w.toEventObject()), {
      start: I ? t : w.start
    })
  })) : null, k ? /* @__PURE__ */ d("div", {
    className: We.travelTime,
    style: q
  }, /* @__PURE__ */ d(ne, {
    template: "comingDuration",
    param: w
  })) : null, Et ? /* @__PURE__ */ d("div", {
    className: We.resizeHandleX,
    onMouseDown: de
  }) : null);
}
function am({ top: e, height: t, text: n }) {
  const { backgroundColor: o, border: r } = se(
    ee((a) => a.common.gridSelection, [])
  ), i = se(ee((a) => a.week.gridSelection.color, [])), s = {
    top: X(e),
    height: X(t),
    backgroundColor: o,
    border: r
  };
  return /* @__PURE__ */ d("div", {
    className: v("time", "grid-selection"),
    style: s,
    "data-testid": `time-grid-selection-${e}-${t}`
  }, n.length > 0 ? /* @__PURE__ */ d("span", {
    className: v("grid-selection-label"),
    style: { color: i }
  }, n) : null);
}
function cm({ columnIndex: e, timeGridRows: t }) {
  const n = z(
    ee(
      (r) => Pr.calculateSelection(
        r.gridSelection.timeGrid,
        e,
        t.length - 1
      ),
      [e, t]
    )
  ), o = U(() => {
    if (!n)
      return null;
    const { startRowIndex: r, endRowIndex: i, isStartingColumn: s, isSelectingMultipleColumns: a } = n, { top: l, startTime: u } = t[r], {
      top: c,
      height: f,
      endTime: p
    } = t[i], h = c + f - l;
    let m = `${u} - ${p}`;
    return a && (m = s ? u : ""), {
      top: l,
      height: h,
      text: m
    };
  }, [n, t]);
  return F(o) ? null : /* @__PURE__ */ d(am, x({}, o));
}
function lm({
  gridPositionFinder: e,
  totalUIModels: t,
  columnIndex: n,
  timeGridData: o
}) {
  const r = Ne(), {
    isDraggingEnd: i,
    isDraggingCanceled: s,
    draggingEvent: a,
    clearDraggingEvent: l
  } = fn("timeGrid", "resize"), [u, c] = dn(e), [f, p] = ae(null), h = ee(() => {
    p(null), l(), c();
  }, [c, l]), m = U(() => {
    if (F(a))
      return null;
    const { columns: w, rows: E } = o, T = t.map(
      (b) => b.filter(
        (Z) => Z.cid() === a.cid()
      )
    ), k = (b, Z) => (oe) => {
      const Ce = qe(w[Z].date, oe.startTime), j = qe(
        o.columns[Z].date,
        oe.endTime
      );
      return Ce <= b && b < j;
    }, S = T.findIndex((b) => b.length > 0), N = T[S][0], { goingDuration: W = 0 } = N.model, V = Ae(N.getStarts(), -W), I = Math.max(
      E.findIndex(k(V, S)),
      0
    ), $ = ti(
      T,
      (b) => b.length > 0
    ), R = T[$][0], { comingDuration: K = 0 } = R.model, q = Ae(R.getStarts(), K);
    let D = E.findIndex(k(q, $));
    return D = D >= 0 ? D : E.length - 1, {
      eventStartDateColumnIndex: S,
      eventStartDateRowIndex: I,
      eventEndDateColumnIndex: $,
      eventEndDateRowIndex: D,
      resizeTargetUIModelColumns: T
    };
  }, [a, o, t]), _ = L(m) && L(a) && L(u), y = U(
    () => m ? o.rows[0].height : 0,
    [m, o.rows]
  );
  return re(() => {
    if (_) {
      const { eventStartDateRowIndex: w, eventStartDateColumnIndex: E, eventEndDateColumnIndex: T } = m;
      if (n === T && E === T) {
        const k = a.clone(), { height: S, goingDurationHeight: N, comingDurationHeight: W } = k, V = Math.max(
          y + N * S / 100 + W * S / 100,
          o.rows[u.rowIndex].top - o.rows[w].top + y
        ), I = N * S / V, $ = W * S / V;
        k.setUIProps({
          height: V,
          goingDurationHeight: I,
          comingDurationHeight: $,
          modelDurationHeight: 100 - (I + $)
        }), p(k);
      }
    }
  }, [
    m,
    _,
    n,
    u,
    a,
    o.rows,
    y
  ]), re(() => {
    if (_) {
      const { resizeTargetUIModelColumns: w, eventStartDateColumnIndex: E, eventEndDateColumnIndex: T } = m;
      if ((n === E || n === T) && E !== T) {
        let k;
        n === E ? k = w[n][0].clone() : (k = a.clone(), k.setUIProps({
          height: o.rows[u.rowIndex].top + y
        })), p(k);
      }
    }
  }, [
    m,
    _,
    n,
    u,
    a,
    o.rows,
    y
  ]), un(() => {
    if (!s && L(m) && L(u) && L(a) && m.eventEndDateColumnIndex === n) {
      const { comingDuration: E = 0 } = a.model, T = Ae(
        qe(
          o.columns[n].date,
          o.rows[u.rowIndex].endTime
        ),
        -E
      ), k = Ae(a.getStarts(), 30);
      r.fire("beforeUpdateEvent", {
        event: a.model.toEventObject(),
        changes: {
          end: oi(k, T)
        }
      });
    }
    h();
  }, i), f;
}
function um({
  gridPositionFinder: e,
  totalUIModels: t,
  columnIndex: n,
  timeGridData: o
}) {
  const r = lm({
    gridPositionFinder: e,
    totalUIModels: t,
    columnIndex: n,
    timeGridData: o
  });
  return F(r) ? null : /* @__PURE__ */ d(Ti, {
    uiModel: r,
    isResizingGuide: !0
  });
}
const Ic = {
  column: v("column"),
  backgrounds: v("background-events"),
  events: v("events")
};
function dm({
  eventUIModels: e,
  minEventHeight: t
}) {
  const n = { marginRight: 8 };
  return /* @__PURE__ */ d("div", {
    className: Ic.events,
    style: n
  }, e.map((o) => /* @__PURE__ */ d(Ti, {
    key: `${o.valueOf()}-${o.cid()}`,
    uiModel: o,
    minHeight: t
  })));
}
function fm(e) {
  return {
    defaultBackgroundColor: e.week.dayGrid.backgroundColor,
    todayBackgroundColor: e.week.today.backgroundColor,
    weekendBackgroundColor: e.week.weekend.backgroundColor
  };
}
function pm({
  today: e,
  columnDate: t,
  defaultBackgroundColor: n,
  todayBackgroundColor: o,
  weekendBackgroundColor: r
}) {
  const i = Nt(e, t), s = Fe(t.getDay());
  return i ? o : s ? r : n;
}
const mm = ln(function({
  columnDate: t,
  columnWidth: n,
  columnIndex: o,
  totalUIModels: r,
  gridPositionFinder: i,
  timeGridData: s,
  isLastColumn: a
}) {
  const { rows: l } = s, u = se(ee((w) => w.week.timeGrid.borderRight, [])), c = se(fm), [, f] = Bo(), p = f(), h = pm(x({ today: p, columnDate: t }, c)), m = {
    width: n,
    backgroundColor: h,
    borderRight: a ? "none" : u
  }, _ = r[o], y = l[0].height;
  return /* @__PURE__ */ d("div", {
    className: Ic.column,
    style: m,
    "data-testid": `timegrid-column-${t.getDay()}`
  }, /* @__PURE__ */ d(dm, {
    eventUIModels: _,
    minEventHeight: y
  }), /* @__PURE__ */ d(um, {
    gridPositionFinder: i,
    totalUIModels: r,
    columnIndex: o,
    timeGridData: s
  }), /* @__PURE__ */ d(cm, {
    columnIndex: o,
    timeGridRows: l
  }));
});
function hm(e) {
  return {
    halfHourLineBorder: e.week.timeGridHalfHourLine.borderBottom,
    hourLineBorder: e.week.timeGridHourLine.borderBottom
  };
}
const gm = ln(function({
  timeGridRows: t
}) {
  const { halfHourLineBorder: n, hourLineBorder: o } = se(hm);
  return /* @__PURE__ */ d("div", {
    className: v("gridlines")
  }, t.map((r, i) => {
    const s = i % 2 === 0;
    return /* @__PURE__ */ d("div", {
      key: `gridline-${r.startTime}-${r.endTime}`,
      className: v("gridline-half"),
      style: {
        top: X(r.top),
        height: X(r.height),
        borderBottom: s ? n : o
      },
      "data-testid": `gridline-${r.startTime}-${r.endTime}`
    });
  }));
}), vm = 30;
function Vs(e, t) {
  const n = e.getHours() - t, o = e.getMinutes();
  return n * 2 + Math.floor(o / vm);
}
function _m({
  draggingEvent: e,
  columnDiff: t,
  rowDiff: n,
  timeGridDataRows: o,
  currentDate: r
}) {
  const i = o[0].height, s = i * o.length, a = n * ka + t * at, l = Number(o[0].startTime.split(":")[0]), { goingDuration: u = 0, comingDuration: c = 0 } = e.model, f = Ae(e.getStarts(), -u), p = Ae(e.getEnds(), c), h = Do(f, a), m = Do(p, a), _ = Math.max(Vs(h, l), 0), y = Math.min(Vs(m, l), o.length - 1), w = h.getFullYear() < r.getFullYear() || h.getMonth() < r.getMonth() || h.getDate() < r.getDate(), E = m.getFullYear() > r.getFullYear() || m.getMonth() > r.getMonth() || m.getDate() > r.getDate(), T = y - (w ? 0 : _), k = w ? 0 : o[_].top, S = E ? s : Math.max(T, 1) * i;
  return { top: k, height: S };
}
const ym = (e) => e.dnd.initX, wm = (e) => e.dnd.initY;
function Em({
  gridPositionFinder: e,
  timeGridData: t
}) {
  const n = z(ym), o = z(wm), r = Ne(), { isDraggingEnd: i, isDraggingCanceled: s, draggingEvent: a, clearDraggingEvent: l } = fn(
    "timeGrid",
    "move"
  ), [u, c] = dn(e), f = te(null);
  re(() => {
    L(n) && L(o) && (f.current = e({
      clientX: n,
      clientY: o
    }));
  }, [e, n, o]);
  const p = U(() => F(f.current) || F(u) ? null : {
    columnDiff: u.columnIndex - f.current.columnIndex,
    rowDiff: u.rowIndex - f.current.rowIndex
  }, [u]), h = U(() => F(a) ? null : a.getStarts(), [a]), m = ee(() => {
    c(), l(), f.current = null;
  }, [c, l]), _ = U(() => F(p) || F(h) ? null : Do(
    h,
    p.rowDiff * ka + p.columnDiff * at
  ), [p, h]), y = U(() => {
    if (F(a) || F(u) || F(p))
      return null;
    const w = a.clone(), { top: E, height: T } = _m({
      draggingEvent: w,
      columnDiff: p.columnDiff,
      rowDiff: p.rowDiff,
      timeGridDataRows: t.rows,
      currentDate: t.columns[u.columnIndex].date
    });
    return w.setUIProps({
      left: t.columns[u.columnIndex].left,
      width: t.columns[u.columnIndex].width,
      top: E,
      height: T
    }), w;
  }, [u, a, p, t.columns, t.rows]);
  return un(() => {
    if (!s && L(a) && L(u) && L(p) && L(_) && (p.rowDiff !== 0 || p.columnDiff !== 0)) {
      const E = a.duration(), T = Do(_, E);
      r.fire("beforeUpdateEvent", {
        event: a.model.toEventObject(),
        changes: {
          start: _,
          end: T
        }
      });
    }
    m();
  }, i), {
    movingEvent: y,
    nextStartTime: _
  };
}
function Dm({
  gridPositionFinder: e,
  timeGridData: t
}) {
  const { movingEvent: n, nextStartTime: o } = Em({
    gridPositionFinder: e,
    timeGridData: t
  });
  return F(n) ? null : /* @__PURE__ */ d(Ti, {
    uiModel: n,
    nextStartTime: o
  });
}
const Mc = {
  NOW_INDICATOR: "timegrid-now-indicator",
  NOW_INDICATOR_LABEL: "timegrid-now-indicator-label"
}, En = {
  line: v(De("now-indicator")),
  left: v(De("now-indicator-left")),
  marker: v(De("now-indicator-marker")),
  today: v(De("now-indicator-today")),
  right: v(De("now-indicator-right"))
};
function Sm(e) {
  return {
    pastBorder: e.week.nowIndicatorPast.border,
    todayBorder: e.week.nowIndicatorToday.border,
    futureBorder: e.week.nowIndicatorFuture.border,
    bulletBackgroundColor: e.week.nowIndicatorBullet.backgroundColor
  };
}
function Tm({ top: e, columnWidth: t, columnCount: n, columnIndex: o }) {
  const { pastBorder: r, todayBorder: i, futureBorder: s, bulletBackgroundColor: a } = se(Sm), l = xt(), u = Ne(), c = te(null), f = {
    left: X(t * o),
    width: X(t * o)
  }, p = {
    left: X(t * (o + 1)),
    width: X(t * (n - o + 1))
  };
  return re(() => {
    const h = (m) => {
      var y;
      const _ = (y = l == null ? void 0 : l.querySelector(`.${v("panel")}.${v("time")}`)) != null ? y : null;
      if (_ && c.current) {
        const { offsetHeight: w } = _, { offsetTop: E } = c.current, T = E - w / 2;
        _.scrollTo ? _.scrollTo({ top: T, behavior: m }) : _.scrollTop = T;
      }
    };
    return u.on("scrollToNow", h), () => u.off("scrollToNow", h);
  }, [u, l]), re(() => {
    u.fire("scrollToNow", "smooth");
  }, [u]), /* @__PURE__ */ d("div", {
    ref: c,
    className: En.line,
    style: { top: X(e) },
    "data-testid": Mc.NOW_INDICATOR
  }, /* @__PURE__ */ d("div", {
    className: En.left,
    style: { width: f.width, borderTop: r }
  }), /* @__PURE__ */ d("div", {
    className: En.marker,
    style: { left: f.left, backgroundColor: a }
  }), /* @__PURE__ */ d("div", {
    className: En.today,
    style: {
      left: f.left,
      width: X(t),
      borderTop: i
    }
  }), /* @__PURE__ */ d("div", {
    className: En.right,
    style: {
      left: p.left,
      borderTop: s
    }
  }));
}
const js = {
  now: De("current-time"),
  dayDifference: De("day-difference")
};
function bm({ unit: e, top: t, now: n, zonedNow: o }) {
  const r = se(ee((a) => a.week.nowIndicatorLabel.color, [])), i = U(() => ai(o, n), [o, n]), s = {
    unit: e,
    time: o,
    format: nm[e]
  };
  return /* @__PURE__ */ d("div", {
    className: v(js.now),
    style: { top: X(t), color: r },
    "data-testid": Mc.NOW_INDICATOR_LABEL
  }, i !== 0 && /* @__PURE__ */ d("span", {
    className: v(js.dayDifference)
  }, `[${i > 0 ? "+" : "-"}${Math.abs(i)}]`), /* @__PURE__ */ d(ne, {
    template: "timegridNowIndicatorLabel",
    param: s,
    as: "span"
  }));
}
const Cm = (e) => {
  var t;
  return (t = e.options.month.visibleEventCount) != null ? t : 6;
}, Ac = (e) => e.options.week.showNowIndicator, km = (e) => {
  var t;
  return (t = e.options.week.showTimezoneCollapseButton) != null ? t : !1;
}, xc = (e) => {
  var t;
  return (t = e.options.week.timezonesCollapsed) != null ? t : !1;
}, Wt = {
  timeColumn: De("time-column"),
  hourRows: De("hour-rows"),
  time: De("time"),
  timeLabel: De("time-label"),
  first: De("time-first"),
  last: De("time-last"),
  hidden: De("time-hidden")
};
function Nm(e) {
  return {
    primaryTimezoneBackgroundColor: e.week.timeGridLeft.backgroundColor,
    subTimezoneBackgroundColor: e.week.timeGridLeftAdditionalTimezone.backgroundColor
  };
}
function Im(e) {
  return {
    pastTimeColor: e.week.pastTime.color,
    futureTimeColor: e.week.futureTime.color
  };
}
function Xs({ rowsInfo: e, isPrimary: t, borderRight: n, width: o, nowIndicatorState: r }) {
  var p;
  const i = z(Ac), { primaryTimezoneBackgroundColor: s, subTimezoneBackgroundColor: a } = se(Nm), { pastTimeColor: l, futureTimeColor: u } = se(Im), c = L(r) ? Ae(r.now, (p = e[0].diffFromPrimaryTimezone) != null ? p : 0) : null, f = t ? s : a;
  return /* @__PURE__ */ d("div", {
    role: "rowgroup",
    className: v(Wt.hourRows),
    style: { width: X(o), borderRight: n, backgroundColor: f }
  }, e.map(({ date: h, top: m, className: _ }) => {
    const w = L(c) && h < c ? l : u;
    return /* @__PURE__ */ d("div", {
      key: h.getTime(),
      className: _,
      style: {
        top: X(m),
        color: w
      },
      role: "row"
    }, /* @__PURE__ */ d(ne, {
      template: `timegridDisplay${t ? "Primary" : ""}Time`,
      param: { time: h },
      as: "span"
    }));
  }), i && L(r) && L(c) && /* @__PURE__ */ d(bm, {
    unit: "hour",
    top: r.top,
    now: r.now,
    zonedNow: c
  }));
}
const Mm = ln(function({ timeGridRows: t, nowIndicatorState: n }) {
  const o = z(Va), r = z(xc), i = $o(), { width: s, borderRight: a } = se(li), l = U(
    () => t.filter((_, y) => y % 2 === 0 || y === t.length - 1),
    [t]
  ), u = ee(
    (_, y, w) => {
      const E = () => !1, T = y === 0, k = y === l.length - 1, S = v(Wt.time, {
        [Wt.first]: T,
        [Wt.last]: k,
        [Wt.hidden]: E()
      });
      let N = qe(new O(), k ? _.endTime : _.startTime);
      return L(w) && (N = Ae(N, w)), {
        date: N,
        top: _.top,
        className: S,
        diffFromPrimaryTimezone: w
      };
    },
    [l]
  ), [c, ...f] = o, p = f.length > 0 ? 100 / (f.length + 1) : 100, h = l.map(
    (_, y) => u(_, y)
  ), m = U(() => f.length === 0 ? [] : f.reverse().map((_) => {
    const { timezoneName: y } = _, w = i(c.timezoneName).getTimezoneOffset(), T = i(y).getTimezoneOffset() - w;
    return l.map(
      (k, S) => u(k, S, T)
    );
  }), [u, f, c, l, i]);
  return /* @__PURE__ */ d("div", {
    className: v(Wt.timeColumn),
    style: { width: s },
    "data-testid": "timegrid-time-column"
  }, !r && m.map((_) => /* @__PURE__ */ d(Xs, {
    key: _[0].diffFromPrimaryTimezone,
    rowsInfo: _,
    isPrimary: !1,
    borderRight: a,
    width: p,
    nowIndicatorState: n
  })), /* @__PURE__ */ d(Xs, {
    rowsInfo: h,
    isPrimary: !0,
    borderRight: a,
    width: r ? 100 : p,
    nowIndicatorState: n
  }));
});
function Gr(e, t, n) {
  const o = t.getTime(), r = n.getTime(), i = Or(e.getTime(), [o], [r]) - o, s = r - o, a = nc(s, 100, i);
  return Or(a, [0], [100]);
}
function Fr(e, t, n, o) {
  const r = Gr(e, n, o), s = Gr(t, n, o) - r;
  return {
    top: r,
    height: s
  };
}
const Am = 1;
function Rc(e, t) {
  return (n) => {
    const { goingDuration: o = 0, comingDuration: r = 0 } = n.model, i = Ae(n.getStarts(), -o);
    return !(Ae(n.getEnds(), r) <= e || i >= t);
  };
}
function xm(e, t) {
  const { renderStart: n, renderEnd: o, modelStart: r, modelEnd: i } = t, { goingDuration: s = 0, comingDuration: a = 0 } = e.model;
  let l = 100;
  if (s > 0) {
    const { height: u } = Fr(
      n,
      r,
      n,
      o
    );
    e.goingDurationHeight = u, l -= u;
  }
  if (a > 0) {
    const { height: u } = Fr(
      i,
      o,
      n,
      o
    );
    e.comingDurationHeight = u, l -= u;
  }
  e.modelDurationHeight = l;
}
function Rm(e, t) {
  const { goingStart: n, comingEnd: o, startColumnTime: r, endColumnTime: i } = t;
  n < r && (e.croppedStart = !0), o > i && (e.croppedEnd = !0);
}
function Om(e, t) {
  const { duplicateEvents: n, duplicateEventIndex: o } = e, r = n[o - 1];
  let i = t;
  if (r) {
    const { percent: s, px: a } = Ir(`${r.duplicateLeft}`), { percent: l, px: u } = Ir(`${r.duplicateWidth}`), c = s + l, f = a + u + wo;
    c !== 0 ? i = `calc(${X(c)} ${f > 0 ? "+" : "-"} ${Eo(Math.abs(f))})` : i = Eo(f);
  } else
    i = X(i);
  return i;
}
function Pm(e, t) {
  const { collapse: n } = e;
  return n ? `${Es}px` : `calc(${X(t)} - ${Eo(
    (Es + wo) * (e.duplicateEvents.length - 1) + wo
  )})`;
}
function Lm(e, t) {
  const { startColumnTime: n, endColumnTime: o, baseWidth: r, columnIndex: i, renderStart: s, renderEnd: a } = t, { duplicateEvents: l } = e, { top: u, height: c } = Fr(
    s,
    a,
    n,
    o
  ), f = {
    top: u,
    left: r * i,
    width: r,
    height: Math.max(Am, c),
    duplicateLeft: "",
    duplicateWidth: ""
  };
  l.length > 0 && (f.duplicateLeft = Om(e, f.left), f.duplicateWidth = Pm(e, f.width)), e.setUIProps(f);
}
function Hm(e, t, n, o, r) {
  const { goingDuration: i = 0, comingDuration: s = 0 } = e.model, a = e.getStarts(), l = e.getEnds(), u = Ae(a, -i), c = Ae(l, s), f = oi(u, o), p = Na(c, r);
  return {
    baseWidth: n,
    columnIndex: t,
    modelStart: a,
    modelEnd: l,
    renderStart: f,
    renderEnd: p,
    goingStart: u,
    comingEnd: c,
    startColumnTime: o,
    endColumnTime: r,
    duplicateEvents: e.duplicateEvents
  };
}
function Oc({
  uiModel: e,
  columnIndex: t,
  baseWidth: n,
  startColumnTime: o,
  endColumnTime: r,
  isDuplicateEvent: i = !1
}) {
  if (!i && e.duplicateEvents.length > 0) {
    e.duplicateEvents.forEach((a) => {
      Oc({
        uiModel: a,
        columnIndex: t,
        baseWidth: n,
        startColumnTime: o,
        endColumnTime: r,
        isDuplicateEvent: !0
      });
    });
    return;
  }
  const s = Hm(
    e,
    t,
    n,
    o,
    r
  );
  Lm(e, s), xm(e, s), Rm(e, s);
}
function $m(e, t, n) {
  const { getDuplicateEvents: o, getMainEvent: r } = t, i = e.map((s) => s.model.toEventObject());
  return e.forEach((s) => {
    if (s.collapse || s.duplicateEvents.length > 0)
      return;
    const a = o(s.model.toEventObject(), i);
    if (a.length <= 1)
      return;
    const l = r(a), u = a.map(
      (h) => e.find((m) => m.cid() === h.__cid)
    ), c = !!(n > Ro && a.find((h) => h.__cid === n)), f = a.reduce((h, { start: m, goingDuration: _ }) => {
      const y = Ae(m, -_);
      return Na(h, y);
    }, a[0].start), p = a.reduce((h, { end: m, comingDuration: _ }) => {
      const y = Ae(m, _);
      return oi(h, y);
    }, a[0].end);
    u.forEach((h, m) => {
      const _ = h.cid() === l.__cid, y = !(c && h.cid() === n || !c && _);
      h.setUIProps({
        duplicateEvents: u,
        duplicateEventIndex: m,
        collapse: y,
        isMain: _,
        duplicateStarts: f,
        duplicateEnds: p
      });
    });
  }), e;
}
function Bm(e, t, n, o, r) {
  const i = e.filter(Zu).filter(Rc(t, n)).sort(kt.compare.event.asc);
  r && $m(i, r, o);
  const s = i.filter((f) => !f.collapse), a = Qt(...s), l = !0, u = Go(s, l);
  return Fo(a, u, l).forEach((f) => {
    const p = Math.max(...f.map((m) => m.length)), h = Math.round(100 / p);
    f.forEach((m) => {
      m.forEach((_, y) => {
        Oc({ uiModel: _, columnIndex: y, baseWidth: h, startColumnTime: t, endColumnTime: n });
      });
    });
  }), i;
}
function Gm(e, t) {
  const n = te(e);
  re(() => {
    n.current = e;
  }, [e]), re(() => {
    const o = () => n.current(), r = t != null ? t : -1;
    if (r > 0) {
      const i = setInterval(o, r);
      return () => clearInterval(i);
    }
  }, [t]);
}
function Fm() {
  const e = te(!0);
  return re(() => () => {
    e.current = !1;
  }, []), ee(() => e.current, []);
}
const Ks = {
  timegrid: v(Nc),
  scrollArea: v(De("scroll-area"))
};
function Pc({ timeGridData: e, events: t }) {
  const {
    isReadOnly: n,
    week: { narrowWeekend: o, startDayOfWeek: r, collapseDuplicateEvents: i },
    onClickTimeGrid: s
  } = z(je), a = z(Ac), l = z(
    (I) => I.weekViewLayout.selectedDuplicateEventCid
  ), [, u] = Bo(), c = Fm(), { width: f } = se(li), [p, h] = ae(null), { columns: m, rows: _ } = e, y = m.length - 1, w = U(
    () => m.map(
      ({ date: I }) => t.filter(Rc(he(I), Re(I))).map(($) => $.clone())
    ).map(
      (I, $) => Bm(
        I,
        qe(m[$].date, Mr(_).startTime),
        qe(m[$].date, it(_).endTime),
        l,
        i
      )
    ),
    [m, _, t, l, i]
  ), E = U(() => {
    const I = u(), $ = m.findIndex((q) => Nt(q.date, I));
    if ($ < 0)
      return null;
    const R = qe(
      m[$].date,
      e.rows[0].startTime
    ), K = qe(
      m[$].date,
      it(e.rows).endTime
    );
    return {
      startTime: R,
      endTime: K,
      currentDateIndex: $
    };
  }, [m, u, e.rows]), [T, k] = Ge(), S = U(
    () => hi({
      rowsCount: _.length,
      columnsCount: m.length,
      container: T,
      narrowWeekend: o,
      startDayOfWeek: r
    }),
    [m.length, T, o, _.length, r]
  ), N = Ei({
    type: "timeGrid",
    gridPositionFinder: S,
    selectionSorter: Pr.sortSelection,
    dateGetter: Pr.getDateFromCollection,
    dateCollection: e
  }), W = ee(() => {
    if (L(E)) {
      const { startTime: I, endTime: $ } = E, R = u();
      I <= R && R <= $ && h({
        top: Gr(R, I, $),
        now: R
      });
    }
  }, [E, u]);
  ht(() => {
    var I;
    c() && (((I = E == null ? void 0 : E.currentDateIndex) != null ? I : -1) >= 0 ? W() : h(null));
  }, [E, c, W]), Gm(W, L(E) ? ni : null);
  const V = ee(
    (I) => {
      const $ = S(I);
      if ($) {
        const R = m[$.columnIndex], K = _[$.rowIndex], q = new O(R.date);
        q.addHours(Number.parseInt(K.startTime.split(":")[0], 10)), s(q);
      }
    },
    [m, S, s, _]
  );
  return /* @__PURE__ */ d("div", {
    className: Ks.timegrid
  }, /* @__PURE__ */ d("div", {
    className: Ks.scrollArea
  }, /* @__PURE__ */ d(Mm, {
    timeGridRows: _,
    nowIndicatorState: p
  }), /* @__PURE__ */ d("div", {
    onClick: V,
    className: v("columns"),
    style: { left: f },
    ref: k,
    onMouseDown: wi(!n, N)
  }, /* @__PURE__ */ d(gm, {
    timeGridRows: _
  }), /* @__PURE__ */ d(Dm, {
    gridPositionFinder: S,
    timeGridData: e
  }), m.map((I, $) => /* @__PURE__ */ d(mm, {
    key: I.date.toString(),
    timeGridData: e,
    columnDate: I.date,
    columnWidth: X(I.width),
    columnIndex: $,
    totalUIModels: w,
    gridPositionFinder: S,
    isLastColumn: $ === y
  })), a && L(E) && L(p) ? /* @__PURE__ */ d(Tm, {
    top: p.top,
    columnWidth: m[0].width,
    columnCount: m.length,
    columnIndex: E.currentDateIndex
  }) : null)));
}
function Um({ isCollapsed: e }) {
  const t = Ne(), n = v("icon", {
    "ic-arrow-right": e,
    "ic-arrow-left": !e
  });
  return /* @__PURE__ */ d("button", {
    className: v(De("timezone-collapse-button")),
    "aria-expanded": !e,
    onClick: () => t.fire("clickTimezonesCollapseBtn", e)
  }, /* @__PURE__ */ d("span", {
    className: n,
    role: "img"
  }));
}
function qs({ label: e, offset: t, tooltip: n, width: o = 100, left: r }) {
  return /* @__PURE__ */ d("div", {
    title: n,
    className: v(De("timezone-label")),
    style: {
      width: X(o),
      height: X(100),
      left: X(r)
    },
    role: "gridcell"
  }, /* @__PURE__ */ d(ne, {
    template: "timezoneDisplayLabel",
    param: { displayLabel: e, timezoneOffset: t },
    as: "span"
  }));
}
function zm() {
  const e = z(km), t = z(xc);
  return U(() => ({
    showTimezoneCollapseButton: e,
    timezonesCollapsed: t
  }), [e, t]);
}
function Lc({ top: e }) {
  const t = z(Va), { width: n } = se(li), o = $o(), { showTimezoneCollapseButton: r, timezonesCollapsed: i } = zm();
  if (t.length <= 1)
    return null;
  const s = t.map(({ displayLabel: p, timezoneName: h, tooltip: m }) => Be(p) ? {
    label: null,
    offset: o(h).getTimezoneOffset(),
    tooltip: m != null ? m : h
  } : { label: p, offset: null, tooltip: m != null ? m : h }), [a, ...l] = s, u = l.reverse(), c = i ? 1 : t.length, f = 100 / c;
  return /* @__PURE__ */ d("div", {
    style: {
      top: e,
      width: n
    },
    role: "columnheader",
    className: v("timezone-labels-slot")
  }, !i && u.map((p, h) => {
    var m;
    return /* @__PURE__ */ d(qs, x({
      key: `subTimezone-${(m = p.label) != null ? m : p.offset}`,
      width: f,
      left: f * h
    }, p));
  }), r && /* @__PURE__ */ d(Um, {
    isCollapsed: i
  }), /* @__PURE__ */ d(qs, x({
    width: f,
    left: f * u.length
  }, a)));
}
const Wm = {
  MONTH: "month",
  WEEK: "week",
  DAY: "day"
}, Ym = ["milestone", "task"], Vm = ["allday", "time"];
function Hc(e, t) {
  const n = [];
  return e === !0 ? n.push(...Ym) : Array.isArray(e) && n.push(...e), t === !0 ? n.push(...Vm) : Array.isArray(t) && n.push(...t), n;
}
function jm(e) {
  const t = z(Ho), n = $o();
  return U(() => {
    if (t === "Local")
      return e;
    const o = yn(new O()), {
      timedEvents: r = Qt(),
      totalEvents: i = Qt()
    } = e.groupBy(
      (s) => s.category === "time" ? "timedEvents" : "totalEvents"
    );
    return r.each((s) => {
      const a = Mu(s);
      let l = n(t, a.start), u = n(t, a.end);
      o ? (yn(l) || (l = l.addHours(1)), yn(u) || (u = u.addHours(1))) : (yn(l) && (l = l.addHours(-1)), yn(u) && (u = u.addHours(-1))), a.start = l, a.end = u, i.add(a);
    }), i;
  }, [e, t, n]);
}
function bi(e, ...t) {
  const n = U(
    () => e.events.filter(Je.and(...t)),
    [e.events, t]
  ), o = jm(n);
  return U(
    () => ce(x({}, e), {
      events: o
    }),
    [e, o]
  );
}
function Xm(e) {
  return /^(event|gridSelection)\/timeGrid/.test(e != null ? e : "");
}
function $c(e, t) {
  _t(At, ({ y: n, draggingItemType: o, draggingState: r }) => {
    if (L(e) && Xm(o) && r === Ve.DRAGGING && L(n)) {
      const { offsetTop: i, offsetHeight: s, scrollHeight: a } = e, l = Math.floor(a / t), u = i + s;
      if (n < i + l) {
        const c = n - (i + l);
        e.scrollTop = Math.max(0, e.scrollTop + c);
      } else if (n > u - l) {
        const c = n - (u - l);
        e.scrollTop = Math.min(s, e.scrollTop + c);
      }
    }
  });
}
function Km(e) {
  var t, n, o;
  return (o = (n = (t = e.weekViewLayout) == null ? void 0 : t.dayGridRows) == null ? void 0 : n.time) == null ? void 0 : o.height;
}
function Bc(e) {
  const t = z(Km), [n, o] = ae(null);
  return ht(() => {
    L(t) && e && o(e.offsetTop);
  }, [t, e]), n;
}
function qm() {
  const e = z(Lo), t = z(je), { dayGridRows: n, lastPanelType: o } = z(za), { renderDate: r } = z(cn);
  return U(
    () => ({
      calendar: e,
      options: t,
      gridRowLayout: n,
      lastPanelType: o,
      renderDate: r
    }),
    [e, t, n, o, r]
  );
}
function Gc() {
  var R, K;
  const { calendar: e, options: t, gridRowLayout: n, lastPanelType: o, renderDate: r } = qm(), i = z(Ho), s = se(ee((q) => q.week.dayGridLeft.width, [])), [a, l] = Ge(), u = t.week, { narrowWeekend: c, startDayOfWeek: f, workweek: p, hourStart: h, hourEnd: m, eventView: _, taskView: y } = u, w = U(() => [r], [r]), E = La(w, (K = (R = t.week) == null ? void 0 : R.dayNames) != null ? K : []), { rowStyleInfo: T, cellWidthMap: k } = si(
    w.length,
    c,
    f,
    p
  ), S = bi(e, t.eventFilter), N = U(() => {
    const q = () => i === "Local" ? [he(w[0]), Re(w[0])] : [he(It(w[0], -1)), Re(It(w[0], 1))], [D, b] = q();
    return cc(w, S, {
      narrowWeekend: c,
      hourStart: h,
      hourEnd: m,
      weekStartDate: D,
      weekEndDate: b
    });
  }, [S, w, m, h, c, i]), W = U(
    () => dc(w, {
      hourStart: h,
      hourEnd: m,
      narrowWeekend: c
    }),
    [w, m, h, c]
  ), V = Hc(y, _), I = V.map((q) => {
    var b, Z;
    if (q === "time")
      return null;
    const D = q;
    return /* @__PURE__ */ d(jt, {
      key: D,
      name: D,
      resizable: D !== o
    }, D === "allday" ? /* @__PURE__ */ d(Ec, {
      events: N[D],
      rowStyleInfo: T,
      gridColWidthMap: k,
      weekDates: w,
      height: (b = n[D]) == null ? void 0 : b.height,
      options: u
    }) : /* @__PURE__ */ d(Dc, {
      category: D,
      events: N[D],
      weekDates: w,
      height: (Z = n[D]) == null ? void 0 : Z.height,
      options: u,
      gridColWidthMap: k
    }));
  });
  $c(a, W.rows.length);
  const $ = Bc(a);
  return /* @__PURE__ */ d(Si, {
    className: v("day-view"),
    autoAdjustPanels: !0
  }, /* @__PURE__ */ d(jt, {
    name: "day-view-day-names",
    initialHeight: Da + Sa
  }, /* @__PURE__ */ d(ui, {
    type: "week",
    dayNames: E,
    marginLeft: s,
    rowStyleInfo: T
  })), I, V.includes("time") ? /* @__PURE__ */ d(jt, {
    name: "time",
    autoSize: 1,
    ref: l
  }, /* @__PURE__ */ d(Pc, {
    events: N.time,
    timeGridData: W
  }), /* @__PURE__ */ d(Lc, {
    top: $
  })) : null);
}
function Zm({ rowIndex: e, weekDates: t, narrowWeekend: n }) {
  const o = z(
    ee(
      (r) => r.gridSelection.accumulated.dayGridMonth.map(
        (i) => ko.calculateSelection(i, e, t.length)
      ),
      [e, t]
    )
  );
  return /* @__PURE__ */ d("div", {
    className: v("accumulated-grid-selection")
  }, o.map(
    (r) => r ? /* @__PURE__ */ d(gi, {
      type: "accumulated",
      gridSelectionData: r,
      weekDates: t,
      narrowWeekend: n
    }) : null
  ));
}
function Jm({ type: e, param: t }) {
  const n = `monthGrid${e === Rn.header ? "Header" : "Footer"}Exceed`;
  return /* @__PURE__ */ d(ne, {
    template: n,
    param: t
  });
}
function Qm({
  date: e,
  theme: t,
  renderDate: n,
  isToday: o
}) {
  const r = e.getDay(), s = n.getMonth() === e.getMonth(), {
    common: { holiday: a, saturday: l, today: u, dayName: c },
    month: { dayExceptThisMonth: f, holidayExceptThisMonth: p }
  } = t;
  return o ? u.color : ri(r) ? s ? a.color : p.color : ii(r) ? s ? l.color : f.color : s ? c.color : f.color;
}
function eh() {
  const e = Jd(), t = qa();
  return U(() => ({ common: e, month: t }), [e, t]);
}
function Zs({ type: e = Rn.header, exceedCount: t = 0, date: n }) {
  const { renderDate: o } = z(cn), [, r] = Bo(), i = eh(), s = i.month.gridCell[`${e}Height`], a = me(n, "YYYYMMDD"), l = me(r(), "YYYYMMDD"), u = a === l, c = {
    date: me(n, "YYYY-MM-DD"),
    day: n.getDay(),
    hiddenEventCount: t,
    isOtherMonth: n.getMonth() !== o.getMonth(),
    isToday: a === l,
    month: n.getMonth(),
    ymd: a
  }, f = { color: Qm({ date: n, theme: i, isToday: u, renderDate: o }) }, p = `monthGrid${Oo(e)}`;
  return F(s) ? null : /* @__PURE__ */ d("div", {
    className: v(`grid-cell-${e}`),
    style: { height: s }
  }, /* @__PURE__ */ d("span", {
    className: v("grid-cell-date"),
    style: f
  }, /* @__PURE__ */ d(ne, {
    template: p,
    param: c
  })), t ? /* @__PURE__ */ d(Jm, {
    param: c,
    type: e,
    className: v("grid-cell-more-events")
  }) : null);
}
function th({
  grid: e,
  offsetWidth: t,
  eventLength: n,
  layerSize: o
}) {
  const r = Ba(e).height + fr * 2;
  let i = t + fr * 2;
  const { width: s, height: a } = o, l = 10;
  i = Math.max(i, eu);
  let u = co + Nr + fr;
  const c = Zt + Mo;
  return n <= l ? u += c * n : u += c * l, s && (i = s), a && (u = a), (isNaN(u) || u < r) && (u = r), { width: i, height: u };
}
function nh(e, t, n) {
  const {
    width: o,
    height: r,
    left: i,
    top: s
  } = t, { width: a, height: l } = e, u = i + o, c = s + r;
  let f = n.left + n.width / 2 - a / 2, { top: p } = n;
  const h = f < i, m = f + a > u, _ = p < s, y = p + l > c;
  return h && (f = i), m && (f = u - a), _ && (p = s), y && (p = c - l), { top: p + window.scrollY, left: f + window.scrollX };
}
function oh({
  layoutContainer: e,
  cell: t,
  popupSize: n
}) {
  const o = e.getBoundingClientRect(), r = t.getBoundingClientRect(), i = nh(n, o, r);
  return x(x({}, n), i);
}
function rh(e, t, n) {
  const { width: o, height: r } = se(Fd), [i, s] = Ge(), [a, l] = ae(null);
  return re(() => {
    if (n && t && i) {
      const u = th({
        grid: t,
        offsetWidth: i.offsetWidth,
        eventLength: e,
        layerSize: {
          width: o,
          height: r
        }
      }), c = oh({
        cell: i,
        layoutContainer: n,
        popupSize: u
      });
      l(c);
    }
  }, [n, i, e, t, o, r]), { popupPosition: a, containerRefCallback: s };
}
function ih(e) {
  return e.month.weekend.backgroundColor;
}
function sh({ date: e, events: t = [], style: n, parentContainer: o, contentAreaHeight: r }) {
  const i = xt(), { showSeeMorePopup: s } = Se("popup"), a = se(ih), { popupPosition: l, containerRefCallback: u } = rh(
    t.length,
    o,
    i
  ), c = ee(() => {
    l && s({
      date: e,
      popupPosition: l,
      events: t
    });
  }, [e, t, l, s]), f = ic(
    t,
    r,
    Zt + Mo
  );
  return /* @__PURE__ */ d("div", {
    className: v("daygrid-cell"),
    style: ce(x({}, n), { backgroundColor: Fe(e.getDay()) ? a : "inherit" }),
    ref: u
  }, /* @__PURE__ */ d(Zs, {
    type: Rn.header,
    exceedCount: f,
    date: e,
    onClickExceedCount: c
  }), /* @__PURE__ */ d(Zs, {
    type: Rn.footer,
    exceedCount: f,
    date: e,
    onClickExceedCount: c
  }));
}
const ah = ln(function({
  week: t,
  rowInfo: n,
  gridDateEventModelMap: o = {},
  contentAreaHeight: r
}) {
  const [i, s] = Ge(), a = se(ee((l) => l.common.border, []));
  return /* @__PURE__ */ d("div", {
    className: v("weekday-grid"),
    style: { borderTop: a },
    ref: s
  }, t.map((l, u) => {
    const c = l.getDay(), { width: f, left: p } = n[u], h = me(he(l), "YYYYMMDD");
    return /* @__PURE__ */ d(sh, {
      key: `daygrid-cell-${c}`,
      date: l,
      style: {
        width: X(f),
        left: X(p)
      },
      parentContainer: i,
      events: o[h],
      contentAreaHeight: r
    });
  }));
});
function ch({ weekDates: e, narrowWeekend: t, rowIndex: n }) {
  const o = z(
    ee(
      (r) => ko.calculateSelection(
        r.gridSelection.dayGridMonth,
        n,
        e.length
      ),
      [n, e.length]
    )
  );
  return F(o) ? null : /* @__PURE__ */ d(gi, {
    type: "month",
    gridSelectionData: o,
    weekDates: e,
    narrowWeekend: t
  });
}
const lh = ln(function({
  contentAreaHeight: t,
  eventHeight: n = Qe,
  events: o,
  name: r,
  className: i
}) {
  const { headerHeight: s } = se(Ka), a = o.filter(pi(t, n + Mo)).map((l) => /* @__PURE__ */ d(wt, {
    key: `${r}-DayEvent-${l.cid()}`,
    uiModel: l,
    eventHeight: n,
    headerHeight: s != null ? s : Ao
  }));
  return /* @__PURE__ */ d("div", {
    className: i
  }, a);
});
function uh({
  dateMatrix: e,
  rowInfo: t,
  gridPositionFinder: n,
  rowIndex: o
}) {
  const r = Ne(), {
    isDraggingEnd: i,
    isDraggingCanceled: s,
    draggingEvent: a,
    clearDraggingEvent: l
  } = fn("dayGrid", "move"), [u, c] = dn(n), f = U(() => {
    var h, m;
    let p = null;
    return a && (u == null ? void 0 : u.rowIndex) === o && (p = a, p.left = t[(h = u == null ? void 0 : u.columnIndex) != null ? h : 0].left, p.width = t[(m = u == null ? void 0 : u.columnIndex) != null ? m : 0].width), p;
  }, [a, u == null ? void 0 : u.rowIndex, u == null ? void 0 : u.columnIndex, o, t]);
  return un(() => {
    if (!s && L(f) && L(u)) {
      const h = f.model.getStarts(), m = f.duration(), _ = e[u.rowIndex][u.columnIndex], y = ai(_, h) * at, w = new O(h.getTime() + y), E = new O(w.getTime() + m);
      r.fire("beforeUpdateEvent", {
        event: f.model.toEventObject(),
        changes: {
          start: w,
          end: E
        }
      });
    }
    l(), c();
  }, i), f;
}
function dh({ dateMatrix: e, gridPositionFinder: t, rowInfo: n, rowIndex: o }) {
  const r = uh({
    dateMatrix: e,
    rowInfo: n,
    gridPositionFinder: t,
    rowIndex: o
  });
  return F(r) ? null : /* @__PURE__ */ d(wt, {
    uiModel: r,
    movingLeft: r.left,
    eventHeight: Qe,
    headerHeight: Qr + Ao
  });
}
function Js(e, t) {
  const n = Math.max(Co(e.getStarts(), t), 0), o = Co(e.getEnds(), t);
  return {
    startColumnIndex: n,
    endColumnIndex: o
  };
}
function fh({
  dateMatrix: e,
  gridPositionFinder: t,
  renderedUIModels: n,
  cellWidthMap: o,
  rowIndex: r
}) {
  const i = Ne(), {
    isDraggingEnd: s,
    isDraggingCanceled: a,
    draggingEvent: l,
    clearDraggingEvent: u
  } = fn("dayGrid", "resize"), [c, f] = dn(t), [p, h] = ae(null), m = ee(() => {
    h(null), f(), u();
  }, [f, u]), _ = U(() => {
    if (F(l))
      return null;
    const w = n.map(
      ({ uiModels: N }) => N.filter(
        (W) => W.cid() === l.cid()
      )
    ), E = w.findIndex((N) => N.length > 0), T = ti(w, (N) => N.length > 0), k = Js(
      w[E][0],
      e[E]
    ), S = Js(
      w[T][0],
      e[T]
    );
    return {
      eventStartDateColumnIndex: k.startColumnIndex,
      eventStartDateRowIndex: E,
      eventEndDateColumnIndex: S.endColumnIndex,
      eventEndDateRowIndex: T,
      resizeTargetUIModelRows: w
    };
  }, [e, n, l]), y = L(_) && L(l) && L(c);
  return re(() => {
    if (y && r === _.eventStartDateRowIndex) {
      const { eventStartDateRowIndex: w, eventStartDateColumnIndex: E } = _, T = _.resizeTargetUIModelRows[w][0].clone();
      let k;
      w === c.rowIndex ? k = o[E][Math.max(E, c.columnIndex)] : w > c.rowIndex ? k = o[E][E] : (k = o[E][e[r].length - 1], T.setUIProps({ exceedRight: !0 })), h([T, k]);
    }
  }, [_, y, o, c, e, r]), re(() => {
    if (y && _.eventStartDateRowIndex < r && r < c.rowIndex) {
      const w = l.clone();
      w.setUIProps({ left: 0, exceedLeft: !0, exceedRight: !0 }), h([w, "100%"]);
    }
  }, [_, y, c, l, r]), re(() => {
    if (y && _.eventStartDateRowIndex < c.rowIndex && r === c.rowIndex) {
      const w = l.clone();
      w.setUIProps({ left: 0, exceedLeft: !0 }), h([w, o[0][c.columnIndex]]);
    }
  }, [
    _,
    y,
    o,
    c,
    l,
    r
  ]), re(() => {
    y && r > _.eventStartDateRowIndex && r > c.rowIndex && h(null);
  }, [y, c, _, r]), un(() => {
    if (y) {
      const { eventStartDateColumnIndex: w, eventStartDateRowIndex: E } = _;
      if (!a && (c.rowIndex === E && c.columnIndex >= w || c.rowIndex > E)) {
        const k = e[c.rowIndex][c.columnIndex];
        i.fire("beforeUpdateEvent", {
          event: l.model.toEventObject(),
          changes: {
            end: k
          }
        });
      }
    }
    m();
  }, s), p;
}
function ph({
  dateMatrix: e,
  cellWidthMap: t,
  gridPositionFinder: n,
  renderedUIModels: o,
  rowIndex: r
}) {
  const i = fh({
    dateMatrix: e,
    gridPositionFinder: n,
    cellWidthMap: t,
    renderedUIModels: o,
    rowIndex: r
  });
  if (F(i))
    return null;
  const [s, a] = i;
  return /* @__PURE__ */ d("div", {
    className: v("weekday-events")
  }, /* @__PURE__ */ d(wt, {
    key: `resizing-event-${s.cid()}`,
    uiModel: s,
    eventHeight: Zt,
    headerHeight: Qr + Ao,
    resizingWidth: a
  }));
}
const mh = 100;
function hh(e) {
  const t = z(Cm), { headerHeight: n, footerHeight: o } = se(Ka), r = te(null), [i, s] = ae(0);
  return re(() => {
    if (r.current) {
      const a = Ba(r.current).height, l = Qr + (n != null ? n : Ao), u = o != null ? o : 0, c = a - l - u, f = t * (e + Mo);
      s(Math.min(c, f));
    }
  }, [o, n, e, t]), { ref: r, cellContentAreaHeight: i };
}
function gh({ dateMatrix: e = [], rowInfo: t = [], cellWidthMap: n = [] }) {
  const [o, r] = Ge(), i = z(Lo), { ref: s, cellContentAreaHeight: a } = hh(Zt), { eventFilter: l, month: u, isReadOnly: c } = z(je), { narrowWeekend: f, startDayOfWeek: p } = u, h = mh / e.length, m = U(
    () => hi({
      container: o,
      rowsCount: e.length,
      columnsCount: e[0].length,
      narrowWeekend: f,
      startDayOfWeek: p
    }),
    [e, o, f, p]
  ), _ = bi(i, l), y = U(
    () => e.map((E) => Sf(E, _, f)),
    [_, e, f]
  ), w = Ei({
    type: "dayGridMonth",
    gridPositionFinder: m,
    dateCollection: e,
    dateGetter: ko.getDateFromCollection,
    selectionSorter: ko.sortSelection
  });
  return /* @__PURE__ */ d("div", {
    ref: r,
    onMouseDown: wi(!c, w),
    className: v("month-daygrid")
  }, e.map((E, T) => {
    const { uiModels: k, gridDateEventModelMap: S } = y[T];
    return /* @__PURE__ */ d("div", {
      key: `dayGrid-events-${T}`,
      className: v("month-week-item"),
      style: { height: X(h) },
      ref: s
    }, /* @__PURE__ */ d("div", {
      className: v("weekday")
    }, /* @__PURE__ */ d(ah, {
      gridDateEventModelMap: S,
      week: E,
      rowInfo: t,
      contentAreaHeight: a
    }), /* @__PURE__ */ d(lh, {
      name: "month",
      events: k,
      contentAreaHeight: a,
      eventHeight: Zt,
      className: v("weekday-events")
    }), /* @__PURE__ */ d(ch, {
      weekDates: E,
      narrowWeekend: f,
      rowIndex: T
    }), /* @__PURE__ */ d(Zm, {
      rowIndex: T,
      weekDates: E,
      narrowWeekend: f
    })), /* @__PURE__ */ d(ph, {
      dateMatrix: e,
      gridPositionFinder: m,
      rowIndex: T,
      cellWidthMap: n,
      renderedUIModels: y
    }), /* @__PURE__ */ d(dh, {
      dateMatrix: e,
      gridPositionFinder: m,
      rowIndex: T,
      rowInfo: t
    }));
  }));
}
function vh(e) {
  const { dayNames: t, startDayOfWeek: n, workweek: o } = e.month;
  return [...Array(7)].map((s, a) => (n + a) % 7).map((s) => ({
    day: s,
    label: Oo(t[s])
  })).filter((s) => o ? !Fe(s.day) : !0);
}
function Fc() {
  const e = z(je), { renderDate: t } = z(cn), n = vh(e), o = e.month, { narrowWeekend: r, startDayOfWeek: i, workweek: s } = o, a = U(
    () => lc(t, o),
    [o, t]
  ), { rowStyleInfo: l, cellWidthMap: u } = U(
    () => si(n.length, r, i, s),
    [n.length, r, i, s]
  ), c = l.map((f, p) => ce(x({}, f), {
    date: a[0][p]
  }));
  return /* @__PURE__ */ d(Si, {
    className: v("month")
  }, /* @__PURE__ */ d(ui, {
    type: "month",
    dayNames: n,
    options: o,
    rowStyleInfo: l
  }), /* @__PURE__ */ d(gh, {
    dateMatrix: a,
    rowInfo: c,
    cellWidthMap: u
  }));
}
function _h() {
  const e = z(je), t = z(Lo), { dayGridRows: n, lastPanelType: o } = z(za), { renderDate: r } = z(cn);
  return U(
    () => ({
      options: e,
      calendar: t,
      gridRowLayout: n,
      lastPanelType: o,
      renderDate: r
    }),
    [t, n, o, e, r]
  );
}
function Uc() {
  var K, q;
  const { options: e, calendar: t, gridRowLayout: n, lastPanelType: o, renderDate: r } = _h(), i = se(ee((D) => D.week.dayGridLeft.width, [])), s = z(Ho), [a, l] = Ge(), u = e.week, { narrowWeekend: c, startDayOfWeek: f, workweek: p, hourStart: h, hourEnd: m, eventView: _, taskView: y } = u, w = U(() => uc(r, u), [r, u]), E = La(w, (q = (K = e.week) == null ? void 0 : K.dayNames) != null ? q : []), { rowStyleInfo: T, cellWidthMap: k } = si(
    w.length,
    c,
    f,
    p
  ), S = bi(t, e.eventFilter), N = U(() => {
    const D = () => s === "Local" ? [he(Mr(w)), Re(it(w))] : [he(It(Mr(w), -1)), Re(It(it(w), 1))], [b, Z] = D();
    return cc(w, S, {
      narrowWeekend: c,
      hourStart: h,
      hourEnd: m,
      weekStartDate: b,
      weekEndDate: Z
    });
  }, [S, m, h, c, s, w]), W = U(
    () => dc(w, {
      hourStart: h,
      hourEnd: m,
      narrowWeekend: c
    }),
    [m, h, c, w]
  ), V = Hc(y, _), I = V.map((D) => {
    var Z, oe;
    if (D === "time")
      return null;
    const b = D;
    return /* @__PURE__ */ d(jt, {
      name: b,
      key: b,
      resizable: b !== o
    }, b === "allday" ? /* @__PURE__ */ d(Ec, {
      events: N[b],
      rowStyleInfo: T,
      gridColWidthMap: k,
      weekDates: w,
      height: (Z = n[b]) == null ? void 0 : Z.height,
      options: u
    }) : /* @__PURE__ */ d(Dc, {
      category: b,
      events: N[b],
      weekDates: w,
      height: (oe = n[b]) == null ? void 0 : oe.height,
      options: u,
      gridColWidthMap: k
    }));
  }), $ = U(() => V.includes("time"), [V]);
  $c(a, W.rows.length);
  const R = Bc(a);
  return /* @__PURE__ */ d(Si, {
    className: v("week-view"),
    autoAdjustPanels: !0
  }, /* @__PURE__ */ d(jt, {
    name: "week-view-day-names",
    initialHeight: Da + Sa * 2
  }, /* @__PURE__ */ d(ui, {
    type: "week",
    dayNames: E,
    marginLeft: i,
    options: u,
    rowStyleInfo: T
  })), I, $ ? /* @__PURE__ */ d(jt, {
    name: "time",
    autoSize: 1,
    ref: l
  }, /* @__PURE__ */ d(Pc, {
    events: N.time,
    timeGridData: W
  }), /* @__PURE__ */ d(Lc, {
    top: R
  })) : null);
}
const yh = {
  month: Fc,
  week: Uc,
  day: Gc
};
function wh() {
  const { currentView: e } = z(cn), t = U(() => yh[e] || (() => null), [e]);
  return /* @__PURE__ */ d(t, null);
}
var Eh = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i, Dh = /[&<>"]/;
function Qs(e) {
  var t = String(e);
  return Dh.test(t) ? t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") : t;
}
var ea = function(e, t) {
  return String(e).replace(/(\n+)/g, "$1" + (t || "	"));
}, ta = function(e, t, n) {
  return String(e).length > (t || 40) || !n && String(e).indexOf(`
`) !== -1 || String(e).indexOf("<") !== -1;
}, na = {};
function Sh(e) {
  var t = "";
  for (var n in e) {
    var o = e[n];
    o != null && o !== "" && (t && (t += " "), t += n[0] == "-" ? n : na[n] || (na[n] = n.replace(/([A-Z])/g, "-$1").toLowerCase()), t += ": ", t += o, typeof o == "number" && Eh.test(n) === !1 && (t += "px"), t += ";");
  }
  return t || void 0;
}
function io(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Ur(e, t) {
  return Array.isArray(t) ? t.reduce(Ur, e) : t != null && t !== !1 && e.push(t), e;
}
var Th = { shallow: !0 }, wr = [], bh = /^(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)$/, oa = /[\s\n\\/='"\0<>]/;
function ra() {
  this.__d = !0;
}
Pn.render = Pn;
var Ch = function(e, t) {
  return Pn(e, t, Th);
}, ia = [];
function Pn(e, t, n) {
  t = t || {}, n = n || {};
  var o = H.__s;
  H.__s = !0;
  var r = Sn(e, t, n);
  return H.__c && H.__c(e, ia), ia.length = 0, H.__s = o, r;
}
function Sn(e, t, n, o, r, i) {
  if (e == null || typeof e == "boolean")
    return "";
  if (typeof e != "object")
    return Qs(e);
  var s = n.pretty, a = s && typeof s == "string" ? s : "	";
  if (Array.isArray(e)) {
    for (var l = "", u = 0; u < e.length; u++)
      s && u > 0 && (l += `
`), l += Sn(e[u], t, n, o, r, i);
    return l;
  }
  var c, f = e.type, p = e.props, h = !1;
  if (typeof f == "function") {
    if (h = !0, !n.shallow || !o && n.renderRootComponent !== !1) {
      if (f === xe) {
        var m = [];
        return Ur(m, e.props.children), Sn(m, t, n, n.shallowHighOrder !== !1, r, i);
      }
      var _, y = e.__c = { __v: e, context: t, props: e.props, setState: ra, forceUpdate: ra, __d: !0, __h: [] };
      H.__b && H.__b(e);
      var w = H.__r;
      if (f.prototype && typeof f.prototype.render == "function") {
        var E = f.contextType, T = E && t[E.__c], k = E != null ? T ? T.props.value : E.__ : t;
        (y = e.__c = new f(p, k)).__v = e, y._dirty = y.__d = !0, y.props = p, y.state == null && (y.state = {}), y._nextState == null && y.__s == null && (y._nextState = y.__s = y.state), y.context = k, f.getDerivedStateFromProps ? y.state = io(io({}, y.state), f.getDerivedStateFromProps(y.props, y.state)) : y.componentWillMount && (y.componentWillMount(), y.state = y._nextState !== y.state ? y._nextState : y.__s !== y.state ? y.__s : y.state), w && w(e), _ = y.render(y.props, y.state, y.context);
      } else
        for (var S = f.contextType, N = S && t[S.__c], W = S != null ? N ? N.props.value : S.__ : t, V = 0; y.__d && V++ < 25; )
          y.__d = !1, w && w(e), _ = f.call(e.__c, p, W);
      return y.getChildContext && (t = io(io({}, t), y.getChildContext())), H.diffed && H.diffed(e), Sn(_, t, n, n.shallowHighOrder !== !1, r, i);
    }
    f = (c = f).displayName || c !== Function && c.name || function(Rt) {
      var Ot = (Function.prototype.toString.call(Rt).match(/^\s*function\s+([^( ]+)/) || "")[1];
      if (!Ot) {
        for (var ut = -1, Pt = wr.length; Pt--; )
          if (wr[Pt] === Rt) {
            ut = Pt;
            break;
          }
        ut < 0 && (ut = wr.push(Rt) - 1), Ot = "UnnamedComponent" + ut;
      }
      return Ot;
    }(c);
  }
  var I, $, R = "<" + f;
  if (p) {
    var K = Object.keys(p);
    n && n.sortAttributes === !0 && K.sort();
    for (var q = 0; q < K.length; q++) {
      var D = K[q], b = p[D];
      if (D !== "children") {
        if (!oa.test(D) && (n && n.allAttributes || D !== "key" && D !== "ref" && D !== "__self" && D !== "__source")) {
          if (D === "defaultValue")
            D = "value";
          else if (D === "defaultChecked")
            D = "checked";
          else if (D === "defaultSelected")
            D = "selected";
          else if (D === "className") {
            if (p.class !== void 0)
              continue;
            D = "class";
          } else
            r && /^xlink:?./.test(D) && (D = D.toLowerCase().replace(/^xlink:?/, "xlink:"));
          if (D === "htmlFor") {
            if (p.for)
              continue;
            D = "for";
          }
          D === "style" && b && typeof b == "object" && (b = Sh(b)), D[0] === "a" && D[1] === "r" && typeof b == "boolean" && (b = String(b));
          var Z = n.attributeHook && n.attributeHook(D, b, t, n, h);
          if (Z || Z === "")
            R += Z;
          else if (D === "dangerouslySetInnerHTML")
            $ = b && b.__html;
          else if (f === "textarea" && D === "value")
            I = b;
          else if ((b || b === 0 || b === "") && typeof b != "function") {
            if (!(b !== !0 && b !== "" || (b = D, n && n.xml))) {
              R = R + " " + D;
              continue;
            }
            if (D === "value") {
              if (f === "select") {
                i = b;
                continue;
              }
              f === "option" && i == b && p.selected === void 0 && (R += " selected");
            }
            R = R + " " + D + '="' + Qs(b) + '"';
          }
        }
      } else
        I = b;
    }
  }
  if (s) {
    var oe = R.replace(/\n\s*/, " ");
    oe === R || ~oe.indexOf(`
`) ? s && ~R.indexOf(`
`) && (R += `
`) : R = oe;
  }
  if (R += ">", oa.test(f))
    throw new Error(f + " is not a valid HTML tag name in " + R);
  var Ce, j = bh.test(f) || n.voidElements && n.voidElements.test(f), de = [];
  if ($)
    s && ta($) && ($ = `
` + a + ea($, a)), R += $;
  else if (I != null && Ur(Ce = [], I).length) {
    for (var Oe = s && ~R.indexOf(`
`), Et = !1, ue = 0; ue < Ce.length; ue++) {
      var Ue = Ce[ue];
      if (Ue != null && Ue !== !1) {
        var Pe = Sn(Ue, t, n, !0, f === "svg" || f !== "foreignObject" && r, i);
        if (s && !Oe && ta(Pe) && (Oe = !0), Pe)
          if (s) {
            var lt = Pe.length > 0 && Pe[0] != "<";
            Et && lt ? de[de.length - 1] += Pe : de.push(Pe), Et = lt;
          } else
            de.push(Pe);
      }
    }
    if (s && Oe)
      for (var pn = de.length; pn--; )
        de[pn] = `
` + a + ea(de[pn], a);
  }
  if (de.length || $)
    R += de.join("");
  else if (n && n.xml)
    return R.substring(0, R.length - 1) + " />";
  return !j || Ce || $ ? (s && ~R.indexOf(`
`) && (R += `
`), R = R + "</" + f + ">") : R = R.replace(/>$/, " />"), R;
}
Pn.shallowRender = Ch;
function kh(e, t, n) {
  var o;
  n = n || null;
  for (o in e)
    if (e.hasOwnProperty(o) && t.call(n, e[o], o, e) === !1)
      break;
}
var zc = kh, Nh = zc;
function Ih(e, t) {
  var n = document.createElement("img"), o = "";
  return Nh(t, function(r, i) {
    o += "&" + i + "=" + r;
  }), o = o.substring(1), n.src = e + "?" + o, n.style.display = "none", document.body.appendChild(n), document.body.removeChild(n), n;
}
var Mh = Ih, Ah = Be, xh = Mh, Rh = 7 * 24 * 60 * 60 * 1e3;
function Oh(e) {
  var t = new Date().getTime();
  return t - e > Rh;
}
function Ph(e, t) {
  var n = "https://www.google-analytics.com/collect", o = location.hostname, r = "event", i = "use", s = "TOAST UI " + e + " for " + o + ": Statistics", a = window.localStorage.getItem(s);
  !Ah(window.tui) && window.tui.usageStatistics === !1 || a && !Oh(a) || (window.localStorage.setItem(s, new Date().getTime()), setTimeout(function() {
    (document.readyState === "interactive" || document.readyState === "complete") && xh(n, {
      v: 1,
      t: r,
      tid: t,
      cid: o,
      dp: o,
      dh: e,
      el: e,
      ec: i
    });
  }, 1e3));
}
var Lh = Ph;
function sa({ theme: e, store: t, eventBus: n, children: o }) {
  return /* @__PURE__ */ d(Od, {
    value: n
  }, /* @__PURE__ */ d(Zd, {
    store: e
  }, /* @__PURE__ */ d(Md, {
    store: t
  }, /* @__PURE__ */ d(bp, null, o))));
}
const Hh = "UA-129951699-1";
function $h(e, t) {
  var n = Object.prototype.hasOwnProperty, o, r, i, s;
  for (i = 1, s = arguments.length; i < s; i += 1) {
    o = arguments[i];
    for (r in o)
      n.call(o, r) && (e[r] = o[r]);
  }
  return e;
}
var Bh = $h;
function Gh(e) {
  return e === null;
}
var Fh = Gh, Uh = Be, zh = Fh;
function Wh(e) {
  return !Uh(e) && !zh(e);
}
var Yh = Wh;
function Vh(e) {
  return e instanceof Array;
}
var Wc = Vh;
function jh(e) {
  return e instanceof Function;
}
var Xh = jh;
function Kh(e, t, n) {
  var o = 0, r = e.length;
  for (n = n || null; o < r && t.call(n, e[o], o, e) !== !1; o += 1)
    ;
}
var qh = Kh, Zh = Wc, Jh = qh, Qh = zc;
function eg(e, t, n) {
  Zh(e) ? Jh(e, t, n) : Qh(e, t, n);
}
var tg = eg, ng = Bh, Yc = Yh, Ci = be, ki = uo, og = Wc, Ni = Xh, st = tg, Vc = /\s+/g;
function le() {
  this.events = null, this.contexts = null;
}
le.mixin = function(e) {
  ng(e.prototype, le.prototype);
};
le.prototype._getHandlerItem = function(e, t) {
  var n = { handler: e };
  return t && (n.context = t), n;
};
le.prototype._safeEvent = function(e) {
  var t = this.events, n;
  return t || (t = this.events = {}), e && (n = t[e], n || (n = [], t[e] = n), t = n), t;
};
le.prototype._safeContext = function() {
  var e = this.contexts;
  return e || (e = this.contexts = []), e;
};
le.prototype._indexOfContext = function(e) {
  for (var t = this._safeContext(), n = 0; t[n]; ) {
    if (e === t[n][0])
      return n;
    n += 1;
  }
  return -1;
};
le.prototype._memorizeContext = function(e) {
  var t, n;
  !Yc(e) || (t = this._safeContext(), n = this._indexOfContext(e), n > -1 ? t[n][1] += 1 : t.push([e, 1]));
};
le.prototype._forgetContext = function(e) {
  var t, n;
  !Yc(e) || (t = this._safeContext(), n = this._indexOfContext(e), n > -1 && (t[n][1] -= 1, t[n][1] <= 0 && t.splice(n, 1)));
};
le.prototype._bindEvent = function(e, t, n) {
  var o = this._safeEvent(e);
  this._memorizeContext(n), o.push(this._getHandlerItem(t, n));
};
le.prototype.on = function(e, t, n) {
  var o = this;
  Ci(e) ? (e = e.split(Vc), st(e, function(r) {
    o._bindEvent(r, t, n);
  })) : ki(e) && (n = t, st(e, function(r, i) {
    o.on(i, r, n);
  }));
};
le.prototype.once = function(e, t, n) {
  var o = this;
  if (ki(e)) {
    n = t, st(e, function(i, s) {
      o.once(s, i, n);
    });
    return;
  }
  function r() {
    t.apply(n, arguments), o.off(e, r, n);
  }
  this.on(e, r, n);
};
le.prototype._spliceMatches = function(e, t) {
  var n = 0, o;
  if (!!og(e))
    for (o = e.length; n < o; n += 1)
      t(e[n]) === !0 && (e.splice(n, 1), o -= 1, n -= 1);
};
le.prototype._matchHandler = function(e) {
  var t = this;
  return function(n) {
    var o = e === n.handler;
    return o && t._forgetContext(n.context), o;
  };
};
le.prototype._matchContext = function(e) {
  var t = this;
  return function(n) {
    var o = e === n.context;
    return o && t._forgetContext(n.context), o;
  };
};
le.prototype._matchHandlerAndContext = function(e, t) {
  var n = this;
  return function(o) {
    var r = e === o.handler, i = t === o.context, s = r && i;
    return s && n._forgetContext(o.context), s;
  };
};
le.prototype._offByEventName = function(e, t) {
  var n = this, o = Ni(t), r = n._matchHandler(t);
  e = e.split(Vc), st(e, function(i) {
    var s = n._safeEvent(i);
    o ? n._spliceMatches(s, r) : (st(s, function(a) {
      n._forgetContext(a.context);
    }), n.events[i] = []);
  });
};
le.prototype._offByHandler = function(e) {
  var t = this, n = this._matchHandler(e);
  st(this._safeEvent(), function(o) {
    t._spliceMatches(o, n);
  });
};
le.prototype._offByObject = function(e, t) {
  var n = this, o;
  this._indexOfContext(e) < 0 ? st(e, function(r, i) {
    n.off(i, r);
  }) : Ci(t) ? (o = this._matchContext(e), n._spliceMatches(this._safeEvent(t), o)) : Ni(t) ? (o = this._matchHandlerAndContext(t, e), st(this._safeEvent(), function(r) {
    n._spliceMatches(r, o);
  })) : (o = this._matchContext(e), st(this._safeEvent(), function(r) {
    n._spliceMatches(r, o);
  }));
};
le.prototype.off = function(e, t) {
  Ci(e) ? this._offByEventName(e, t) : arguments.length ? Ni(e) ? this._offByHandler(e) : ki(e) && this._offByObject(e, t) : (this.events = {}, this.contexts = []);
};
le.prototype.fire = function(e) {
  this.invoke.apply(this, arguments);
};
le.prototype.invoke = function(e) {
  var t, n, o, r;
  if (!this.hasListener(e))
    return !0;
  for (t = this._safeEvent(e), n = Array.prototype.slice.call(arguments, 1), o = 0; t[o]; ) {
    if (r = t[o], r.handler.apply(r.context, n) === !1)
      return !1;
    o += 1;
  }
  return !0;
};
le.prototype.hasListener = function(e) {
  return this.getListenerLength(e) > 0;
};
le.prototype.getListenerLength = function(e) {
  var t = this._safeEvent(e);
  return t.length;
};
var rg = le;
class ig extends rg {
  on(t, n) {
    return super.on(t, n), this;
  }
  off(t, n) {
    return super.off(t, n), this;
  }
  fire(t, ...n) {
    return super.fire(t, ...n), this;
  }
  once(t, n) {
    return super.once(t, n), this;
  }
}
class Uo {
  constructor(t, n = {}) {
    B(this, "container");
    B(this, "renderRange");
    B(this, "eventBus");
    B(this, "theme");
    B(this, "store");
    var o;
    this.container = be(t) ? (o = document == null ? void 0 : document.querySelector(t)) != null ? o : null : t, this.theme = qd(n.theme), this.eventBus = new ig(), this.store = Id(n), this.renderRange = this.calculateRenderRange(he()), Ad(), this.getStoreState().options.usageStatistics === !0 && Lh("calendar", Hh);
  }
  getStoreState(t) {
    const n = this.store.getState();
    return t ? n[t] : n;
  }
  getStoreDispatchers(t) {
    const n = this.store.getState().dispatch;
    return t ? n[t] : n;
  }
  destroy() {
    this.container && jf(this.container), this.store.clearListeners(), this.theme.clearListeners(), this.eventBus.off(), xd();
    for (const t in this)
      this.hasOwnProperty(t) && delete this[t];
  }
  calculateMonthRenderDate({
    renderDate: t,
    offset: n,
    monthOptions: o
  }) {
    let r = new O(t);
    const { visibleWeeksCount: i } = o;
    i > 0 ? r = It(r, n * 7 * i) : r = Vu(r, n);
    const s = lc(r, o), [[a]] = s, l = it(it(s));
    return {
      renderDate: r,
      renderRange: { start: a, end: l }
    };
  }
  calculateWeekRenderDate({
    renderDate: t,
    offset: n,
    weekOptions: o
  }) {
    const r = new O(t);
    r.addDate(n * 7);
    const i = uc(r, o), [s] = i, a = it(i);
    return {
      renderDate: r,
      renderRange: { start: s, end: a }
    };
  }
  calculateDayRenderDate({ renderDate: t, offset: n }) {
    const o = new O(t);
    o.addDate(n);
    const r = he(o), i = Re(o);
    return {
      renderDate: o,
      renderRange: { start: r, end: i }
    };
  }
  move(t) {
    if (F(t))
      return;
    const { currentView: n, renderDate: o } = this.getStoreState().view, { options: r } = this.getStoreState(), { setRenderDate: i } = this.getStoreDispatchers().view, s = new O(o);
    let a = {
      renderDate: s,
      renderRange: { start: new O(s), end: new O(s) }
    };
    n === "month" ? a = this.calculateMonthRenderDate({
      renderDate: o,
      offset: t,
      monthOptions: r.month
    }) : n === "week" ? a = this.calculateWeekRenderDate({
      renderDate: o,
      offset: t,
      weekOptions: r.week
    }) : n === "day" && (a = this.calculateDayRenderDate({ renderDate: o, offset: t })), i(a.renderDate), this.renderRange = a.renderRange;
  }
  createEvents(t) {
    const { createEvents: n } = this.getStoreDispatchers("calendar");
    n(t);
  }
  getEventModel(t, n) {
    const { events: o } = this.getStoreState("calendar");
    return o.find(
      ({ id: r, calendarId: i }) => r === t && i === n
    );
  }
  getEvent(t, n) {
    var o, r;
    return (r = (o = this.getEventModel(t, n)) == null ? void 0 : o.toEventObject()) != null ? r : null;
  }
  updateEvent(t, n, o) {
    const { updateEvent: r } = this.getStoreDispatchers("calendar"), i = this.getEventModel(t, n);
    i && r({ event: i, eventData: o });
  }
  deleteEvent(t, n) {
    const { deleteEvent: o } = this.getStoreDispatchers("calendar"), r = this.getEventModel(t, n);
    r && o(r);
  }
  setCalendarVisibility(t, n) {
    const { setCalendarVisibility: o } = this.getStoreDispatchers("calendar"), r = Array.isArray(t) ? t : [t];
    o(r, n);
  }
  render() {
    return L(this.container) && go(
      /* @__PURE__ */ d(sa, {
        theme: this.theme,
        store: this.store,
        eventBus: this.eventBus
      }, this.getComponent()),
      this.container
    ), this;
  }
  renderToString() {
    return Pn(
      /* @__PURE__ */ d(sa, {
        theme: this.theme,
        store: this.store,
        eventBus: this.eventBus
      }, this.getComponent())
    );
  }
  clear() {
    const { clearEvents: t } = this.getStoreDispatchers("calendar");
    t();
  }
  scrollToNow(t = "auto") {
    this.eventBus.fire("scrollToNow", t);
  }
  calculateRenderRange(t) {
    const { currentView: n } = this.getStoreState().view, { options: o } = this.getStoreState(), r = new O(t);
    let i = { start: new O(r), end: new O(r) };
    return n === "month" ? i = this.calculateMonthRenderDate({
      renderDate: t,
      offset: 0,
      monthOptions: o.month
    }).renderRange : n === "week" ? i = this.calculateWeekRenderDate({
      renderDate: t,
      offset: 0,
      weekOptions: o.week
    }).renderRange : n === "day" && (i = this.calculateDayRenderDate({ renderDate: t, offset: 0 }).renderRange), i;
  }
  today() {
    const { setRenderDate: t } = this.getStoreDispatchers().view, n = new O();
    t(n), this.renderRange = this.calculateRenderRange(n);
  }
  setDate(t) {
    const { setRenderDate: n } = this.getStoreDispatchers("view"), o = new O(t);
    n(o), this.renderRange = this.calculateRenderRange(o);
  }
  next() {
    this.move(1);
  }
  prev() {
    this.move(-1);
  }
  setCalendarColor(t, n) {
    const { setCalendarColor: o } = this.getStoreDispatchers().calendar;
    o(t, n);
  }
  changeView(t) {
    const { changeView: n } = this.getStoreDispatchers("view");
    n(t), this.renderRange = this.calculateRenderRange(this.getDate());
  }
  getElement(t, n) {
    return this.getEvent(t, n) && this.container ? this.container.querySelector(
      `[data-event-id="${t}"][data-calendar-id="${n}"]`
    ) : null;
  }
  setTheme(t) {
    const { setTheme: n } = this.theme.getState().dispatch;
    n(t);
  }
  getOptions() {
    const { options: t, template: n } = this.getStoreState(), i = this.theme.getState(), { dispatch: o } = i, r = jn(i, ["dispatch"]);
    return ce(x({}, t), {
      template: n,
      theme: r
    });
  }
  setOptions(t) {
    const l = t, { theme: n, template: o } = l, r = jn(l, ["theme", "template"]), { setTheme: i } = this.theme.getState().dispatch, {
      options: { setOptions: s },
      template: { setTemplate: a }
    } = this.getStoreDispatchers();
    L(n) && i(n), L(o) && a(o), s(r);
  }
  getDate() {
    const { renderDate: t } = this.getStoreState().view;
    return t;
  }
  getDateRangeStart() {
    return this.renderRange.start;
  }
  getDateRangeEnd() {
    return this.renderRange.end;
  }
  getViewName() {
    const { currentView: t } = this.getStoreState("view");
    return t;
  }
  setCalendars(t) {
    const { setCalendars: n } = this.getStoreDispatchers().calendar;
    n(t);
  }
  openFormPopup(t) {
    const { showFormPopup: n } = this.getStoreDispatchers().popup, o = new ci(t), { title: r, location: i, start: s, end: a, isAllday: l, isPrivate: u, state: c } = o;
    n({
      isCreationPopup: !0,
      event: o,
      title: r,
      location: i,
      start: s,
      end: a,
      isAllday: l,
      isPrivate: u,
      eventState: c
    });
  }
  clearGridSelections() {
    const { clearAll: t } = this.getStoreDispatchers().gridSelection;
    t();
  }
  fire(t, ...n) {
    return this.eventBus.fire(t, ...n), this;
  }
  off(t, n) {
    return this.eventBus.off(t, n), this;
  }
  on(t, n) {
    return this.eventBus.on(t, n), this;
  }
  once(t, n) {
    return this.eventBus.once(t, n), this;
  }
}
function sg(e) {
  return !!Object.values(Wm).find((t) => t === e);
}
class dg extends Uo {
  constructor(t, n = {}) {
    super(t, n);
    const { defaultView: o = "week" } = n;
    if (!sg(o))
      throw new wu(o);
    this.render();
  }
  getComponent() {
    return /* @__PURE__ */ d(wh, null);
  }
}
class fg extends Uo {
  constructor(t, n = {}) {
    super(t, n), this.render();
  }
  getComponent() {
    return /* @__PURE__ */ d(Gc, null);
  }
}
class pg extends Uo {
  constructor(t, n = {}) {
    super(t, n), this.render();
  }
  getComponent() {
    return /* @__PURE__ */ d(Fc, null);
  }
  hideMoreView() {
    const { hideSeeMorePopup: t } = this.getStoreDispatchers().popup;
    t();
  }
}
class mg extends Uo {
  constructor(t, n = {}) {
    super(t, n), this.render();
  }
  getComponent() {
    return /* @__PURE__ */ d(Uc, null);
  }
}
export {
  fg as Day,
  pg as Month,
  O as TZDate,
  mg as Week,
  dg as default
};
