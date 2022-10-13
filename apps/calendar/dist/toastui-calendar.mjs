var Cl = Object.defineProperty, kl = Object.defineProperties;
var Nl = Object.getOwnPropertyDescriptors;
var Vn = Object.getOwnPropertySymbols;
var es = Object.prototype.hasOwnProperty, ts = Object.prototype.propertyIsEnumerable;
var sr = (e, t, n) => t in e ? Cl(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, x = (e, t) => {
  for (var n in t || (t = {}))
    es.call(t, n) && sr(e, n, t[n]);
  if (Vn)
    for (var n of Vn(t))
      ts.call(t, n) && sr(e, n, t[n]);
  return e;
}, ce = (e, t) => kl(e, Nl(t));
var jn = (e, t) => {
  var n = {};
  for (var o in e)
    es.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && Vn)
    for (var o of Vn(e))
      t.indexOf(o) < 0 && ts.call(e, o) && (n[o] = e[o]);
  return n;
};
var G = (e, t, n) => (sr(e, typeof t != "symbol" ? t + "" : t, n), n);
import Il from "tui-date-picker";
/*!
 * TOAST UI Calendar 2nd Edition
 * @version 2.1.3 | Wed Oct 12 2022
 * @author NHN Cloud FE Development Lab <dl_javascript@nhn.com>
 * @license MIT
 */
var Ln, $, ca, Tn, ns, la, po = {}, ua = [], Ml = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function ot(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function da(e) {
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
  var i = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: r == null ? ++ca : r };
  return r == null && $.vnode != null && $.vnode(i), i;
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
function fa(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return fa(e);
  }
}
function Er(e) {
  (!e.__d && (e.__d = !0) && Tn.push(e) && !mo.__r++ || ns !== $.debounceRendering) && ((ns = $.debounceRendering) || setTimeout)(mo);
}
function mo() {
  for (var e; mo.__r = Tn.length; )
    e = Tn.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Tn = [], e.some(function(t) {
      var n, o, r, i, s, a;
      t.__d && (s = (i = (n = t).__v).__e, (a = n.__P) && (o = [], (r = ot({}, i)).__v = i.__v + 1, zr(a, i, r, n.__n, a.ownerSVGElement !== void 0, i.__h != null ? [s] : null, o, s == null ? Xt(i) : s, i.__h), ga(o, i), i.__e != s && fa(i)));
    });
}
function pa(e, t, n, o, r, i, s, a, l, u) {
  var c, f, p, m, h, w, y, v = o && o.__k || ua, E = v.length;
  for (n.__k = [], c = 0; c < t.length; c++)
    if ((m = n.__k[c] = (m = t[c]) == null || typeof m == "boolean" ? null : typeof m == "string" || typeof m == "number" || typeof m == "bigint" ? bn(null, m, null, null, m) : Array.isArray(m) ? bn(xe, { children: m }, null, null, null) : m.__b > 0 ? bn(m.type, m.props, m.key, null, m.__v) : m) != null) {
      if (m.__ = n, m.__b = n.__b + 1, (p = v[c]) === null || p && m.key == p.key && m.type === p.type)
        v[c] = void 0;
      else
        for (f = 0; f < E; f++) {
          if ((p = v[f]) && m.key == p.key && m.type === p.type) {
            v[f] = void 0;
            break;
          }
          p = null;
        }
      zr(e, m, p = p || po, r, i, s, a, l, u), h = m.__e, (f = m.ref) && p.ref != f && (y || (y = []), p.ref && y.push(p.ref, null, m), y.push(f, m.__c || h, m)), h != null ? (w == null && (w = h), typeof m.type == "function" && m.__k === p.__k ? m.__d = l = ma(m, l, e) : l = ha(e, m, p, v, h, l), typeof n.type == "function" && (n.__d = l)) : l && p.__e == l && l.parentNode != e && (l = Xt(p));
    }
  for (n.__e = w, c = E; c--; )
    v[c] != null && (typeof n.type == "function" && v[c].__e != null && v[c].__e == n.__d && (n.__d = Xt(o, c + 1)), _a(v[c], v[c]));
  if (y)
    for (c = 0; c < y.length; c++)
      va(y[c], y[++c], y[++c]);
}
function ma(e, t, n) {
  for (var o, r = e.__k, i = 0; r && i < r.length; i++)
    (o = r[i]) && (o.__ = e, t = typeof o.type == "function" ? ma(o, t, n) : ha(n, o, o, r, o.__e, t));
  return t;
}
function Nn(e, t) {
  return t = t || [], e == null || typeof e == "boolean" || (Array.isArray(e) ? e.some(function(n) {
    Nn(n, t);
  }) : t.push(e)), t;
}
function ha(e, t, n, o, r, i) {
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
function os(e, t, n) {
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
            n && t in n || os(e.style, t, "");
        if (n)
          for (t in n)
            o && n[t] === o[t] || os(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      i = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + i] = n, n ? o || e.addEventListener(t, i ? is : rs, i) : e.removeEventListener(t, i ? is : rs, i);
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
function rs(e) {
  this.l[e.type + !1]($.event ? $.event(e) : e);
}
function is(e) {
  this.l[e.type + !0]($.event ? $.event(e) : e);
}
function zr(e, t, n, o, r, i, s, a, l) {
  var u, c, f, p, m, h, w, y, v, E, b, k, S, N = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (l = n.__h, a = t.__e = n.__e, t.__h = null, i = [a]), (u = $.__b) && u(t);
  try {
    e:
      if (typeof N == "function") {
        if (y = t.props, v = (u = N.contextType) && o[u.__c], E = u ? v ? v.props.value : u.__ : o, n.__c ? w = (c = t.__c = n.__c).__ = c.__E : ("prototype" in N && N.prototype.render ? t.__c = c = new N(y, E) : (t.__c = c = new rt(y, E), c.constructor = N, c.render = Rl), v && v.sub(c), c.props = y, c.state || (c.state = {}), c.context = E, c.__n = o, f = c.__d = !0, c.__h = []), c.__s == null && (c.__s = c.state), N.getDerivedStateFromProps != null && (c.__s == c.state && (c.__s = ot({}, c.__s)), ot(c.__s, N.getDerivedStateFromProps(y, c.__s))), p = c.props, m = c.state, f)
          N.getDerivedStateFromProps == null && c.componentWillMount != null && c.componentWillMount(), c.componentDidMount != null && c.__h.push(c.componentDidMount);
        else {
          if (N.getDerivedStateFromProps == null && y !== p && c.componentWillReceiveProps != null && c.componentWillReceiveProps(y, E), !c.__e && c.shouldComponentUpdate != null && c.shouldComponentUpdate(y, c.__s, E) === !1 || t.__v === n.__v) {
            c.props = y, c.state = c.__s, t.__v !== n.__v && (c.__d = !1), c.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(M) {
              M && (M.__ = t);
            }), c.__h.length && s.push(c);
            break e;
          }
          c.componentWillUpdate != null && c.componentWillUpdate(y, c.__s, E), c.componentDidUpdate != null && c.__h.push(function() {
            c.componentDidUpdate(p, m, h);
          });
        }
        if (c.context = E, c.props = y, c.__v = t, c.__P = e, b = $.__r, k = 0, "prototype" in N && N.prototype.render)
          c.state = c.__s, c.__d = !1, b && b(t), u = c.render(c.props, c.state, c.context);
        else
          do
            c.__d = !1, b && b(t), u = c.render(c.props, c.state, c.context), c.state = c.__s;
          while (c.__d && ++k < 25);
        c.state = c.__s, c.getChildContext != null && (o = ot(ot({}, o), c.getChildContext())), f || c.getSnapshotBeforeUpdate == null || (h = c.getSnapshotBeforeUpdate(p, m)), S = u != null && u.type === xe && u.key == null ? u.props.children : u, pa(e, Array.isArray(S) ? S : [S], t, n, o, r, i, s, a, l), c.base = t.__e, t.__h = null, c.__h.length && s.push(c), w && (c.__E = c.__ = null), c.__e = !1;
      } else
        i == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = xl(n.__e, t, n, o, r, i, s, l);
    (u = $.diffed) && u(t);
  } catch (M) {
    t.__v = null, (l || i != null) && (t.__e = a, t.__h = !!l, i[i.indexOf(a)] = null), $.__e(M, t, n);
  }
}
function ga(e, t) {
  $.__c && $.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(o) {
        o.call(n);
      });
    } catch (o) {
      $.__e(o, n.__v);
    }
  });
}
function xl(e, t, n, o, r, i, s, a) {
  var l, u, c, f = n.props, p = t.props, m = t.type, h = 0;
  if (m === "svg" && (r = !0), i != null) {
    for (; h < i.length; h++)
      if ((l = i[h]) && "setAttribute" in l == !!m && (m ? l.localName === m : l.nodeType === 3)) {
        e = l, i[h] = null;
        break;
      }
  }
  if (e == null) {
    if (m === null)
      return document.createTextNode(p);
    e = r ? document.createElementNS("http://www.w3.org/2000/svg", m) : document.createElement(m, p.is && p), i = null, a = !1;
  }
  if (m === null)
    f === p || a && e.data === p || (e.data = p);
  else {
    if (i = i && Ln.call(e.childNodes), u = (f = n.props || po).dangerouslySetInnerHTML, c = p.dangerouslySetInnerHTML, !a) {
      if (i != null)
        for (f = {}, h = 0; h < e.attributes.length; h++)
          f[e.attributes[h].name] = e.attributes[h].value;
      (c || u) && (c && (u && c.__html == u.__html || c.__html === e.innerHTML) || (e.innerHTML = c && c.__html || ""));
    }
    if (Al(e, p, f, r, a), c)
      t.__k = [];
    else if (h = t.props.children, pa(e, Array.isArray(h) ? h : [h], t, n, o, r && m !== "foreignObject", i, s, i ? i[0] : n.__k && Xt(n, 0), a), i != null)
      for (h = i.length; h--; )
        i[h] != null && da(i[h]);
    a || ("value" in p && (h = p.value) !== void 0 && (h !== e.value || m === "progress" && !h || m === "option" && h !== f.value) && ho(e, "value", h, f.value, !1), "checked" in p && (h = p.checked) !== void 0 && h !== e.checked && ho(e, "checked", h, f.checked, !1));
  }
  return e;
}
function va(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (o) {
    $.__e(o, n);
  }
}
function _a(e, t, n) {
  var o, r;
  if ($.unmount && $.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || va(o, null, t)), (o = e.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (i) {
        $.__e(i, t);
      }
    o.base = o.__P = null;
  }
  if (o = e.__k)
    for (r = 0; r < o.length; r++)
      o[r] && _a(o[r], t, typeof e.type != "function");
  n || e.__e == null || da(e.__e), e.__e = e.__d = void 0;
}
function Rl(e, t, n) {
  return this.constructor(e, n);
}
function go(e, t, n) {
  var o, r, i;
  $.__ && $.__(e, t), r = (o = typeof n == "function") ? null : n && n.__k || t.__k, i = [], zr(t, e = (!o && n || t).__k = d(xe, null, [e]), r || po, po, t.ownerSVGElement !== void 0, !o && n ? [n] : r ? null : t.firstChild ? Ln.call(t.childNodes) : null, i, !o && n ? n : r ? r.__e : t.firstChild, o), ga(i, e);
}
function Ol(e, t, n) {
  var o, r, i, s = ot({}, e.props);
  for (i in t)
    i == "key" ? o = t[i] : i == "ref" ? r = t[i] : s[i] = t[i];
  return arguments.length > 2 && (s.children = arguments.length > 3 ? Ln.call(arguments, 2) : n), bn(e.type, s, o || e.key, r || e.ref, null);
}
function Io(e, t) {
  var n = { __c: t = "__cC" + la++, __: e, Consumer: function(o, r) {
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
Ln = ua.slice, $ = { __e: function(e, t, n, o) {
  for (var r, i, s; t = t.__; )
    if ((r = t.__c) && !r.__)
      try {
        if ((i = r.constructor) && i.getDerivedStateFromError != null && (r.setState(i.getDerivedStateFromError(e)), s = r.__d), r.componentDidCatch != null && (r.componentDidCatch(e, o || {}), s = r.__d), s)
          return r.__E = r;
      } catch (a) {
        e = a;
      }
  throw e;
} }, ca = 0, rt.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = ot({}, this.state), typeof e == "function" && (e = e(ot({}, n), this.props)), e && ot(n, e), e != null && this.__v && (t && this.__h.push(t), Er(this));
}, rt.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Er(this));
}, rt.prototype.render = xe, Tn = [], mo.__r = 0, la = 0;
var tn, _e, ar, ss, In = 0, ya = [], so = [], as = $.__b, cs = $.__r, ls = $.diffed, us = $.__c, ds = $.unmount;
function Hn(e, t) {
  $.__h && $.__h(_e, e, In || t), In = 0;
  var n = _e.__H || (_e.__H = { __: [], __h: [] });
  return e >= n.__.length && n.__.push({ __V: so }), n.__[e];
}
function ae(e) {
  return In = 1, Wr(wa, e);
}
function Wr(e, t, n) {
  var o = Hn(tn++, 2);
  return o.t = e, o.__c || (o.__ = [n ? n(t) : wa(void 0, t), function(r) {
    var i = o.t(o.__[0], r);
    o.__[0] !== i && (o.__ = [i, o.__[1]], o.__c.setState({}));
  }], o.__c = _e), o.__;
}
function re(e, t) {
  var n = Hn(tn++, 3);
  !$.__s && Yr(n.__H, t) && (n.__ = e, n.u = t, _e.__H.__h.push(n));
}
function ht(e, t) {
  var n = Hn(tn++, 4);
  !$.__s && Yr(n.__H, t) && (n.__ = e, n.u = t, _e.__h.push(n));
}
function te(e) {
  return In = 5, W(function() {
    return { current: e };
  }, []);
}
function W(e, t) {
  var n = Hn(tn++, 7);
  return Yr(n.__H, t) ? (n.__V = e(), n.u = t, n.__h = e, n.__V) : n.__;
}
function Q(e, t) {
  return In = 8, W(function() {
    return e;
  }, t);
}
function Mn(e) {
  var t = _e.context[e.__c], n = Hn(tn++, 9);
  return n.c = e, t ? (n.__ == null && (n.__ = !0, t.sub(_e)), t.props.value) : e.__;
}
function Pl() {
  for (var e; e = ya.shift(); )
    if (e.__P)
      try {
        e.__H.__h.forEach(ao), e.__H.__h.forEach(Dr), e.__H.__h = [];
      } catch (t) {
        e.__H.__h = [], $.__e(t, e.__v);
      }
}
$.__b = function(e) {
  _e = null, as && as(e);
}, $.__r = function(e) {
  cs && cs(e), tn = 0;
  var t = (_e = e.__c).__H;
  t && (ar === _e ? (t.__h = [], _e.__h = [], t.__.forEach(function(n) {
    n.__V = so, n.u = void 0;
  })) : (t.__h.forEach(ao), t.__h.forEach(Dr), t.__h = [])), ar = _e;
}, $.diffed = function(e) {
  ls && ls(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (ya.push(t) !== 1 && ss === $.requestAnimationFrame || ((ss = $.requestAnimationFrame) || function(n) {
    var o, r = function() {
      clearTimeout(i), fs && cancelAnimationFrame(o), setTimeout(n);
    }, i = setTimeout(r, 100);
    fs && (o = requestAnimationFrame(r));
  })(Pl)), t.__H.__.forEach(function(n) {
    n.u && (n.__H = n.u), n.__V !== so && (n.__ = n.__V), n.u = void 0, n.__V = so;
  })), ar = _e = null;
}, $.__c = function(e, t) {
  t.some(function(n) {
    try {
      n.__h.forEach(ao), n.__h = n.__h.filter(function(o) {
        return !o.__ || Dr(o);
      });
    } catch (o) {
      t.some(function(r) {
        r.__h && (r.__h = []);
      }), t = [], $.__e(o, n.__v);
    }
  }), us && us(e, t);
}, $.unmount = function(e) {
  ds && ds(e);
  var t, n = e.__c;
  n && n.__H && (n.__H.__.forEach(function(o) {
    try {
      ao(o);
    } catch (r) {
      t = r;
    }
  }), t && $.__e(t, n.__v));
};
var fs = typeof requestAnimationFrame == "function";
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
function wa(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function De(e) {
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
  }(e) || Array.isArray(e) || !!e[ws] || !!e.constructor[ws] || Vr(e) || jr(e));
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
function Ea(e, t, n) {
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
  De(2);
}
function qr(e) {
  return e == null || typeof e != "object" || Object.isFrozen(e);
}
function Ze(e) {
  var t = Vl[e];
  return t || De(18, e), t;
}
function ps() {
  return process.env.NODE_ENV === "production" || qt || De(0), qt;
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
function ms(e) {
  return qt = { p: [], l: qt, h: e, m: !0, _: 0 };
}
function Bl(e) {
  var t = e[He];
  t.i === 0 || t.i === 1 ? t.j() : t.O = !0;
}
function lr(e, t) {
  t._ = t.p.length;
  var n = t.p[0], o = e !== void 0 && e !== n;
  return t.h.g || Ze("ES5").S(t, e, o), o ? (n[He].P && (vo(t), De(4)), bt(e) && (e = _o(t, e), t.l || yo(t, e)), t.u && Ze("Patches").M(n[He].t, e, t.u, t.s)) : e = _o(t, n, []), vo(t), t.u && t.v(t.u, t.s), e !== Da ? e : void 0;
}
function _o(e, t, n) {
  if (qr(t))
    return t;
  var o = t[He];
  if (!o)
    return An(t, function(i, s) {
      return hs(e, o, t, i, s, n);
    }, !0), t;
  if (o.A !== e)
    return t;
  if (!o.P)
    return yo(e, o.t, !0), o.t;
  if (!o.I) {
    o.I = !0, o.A._--;
    var r = o.i === 4 || o.i === 5 ? o.o = Xr(o.k) : o.o;
    An(o.i === 3 ? new Set(r) : r, function(i, s) {
      return hs(e, o, r, i, s, n);
    }), yo(e, r, !1), n && e.u && Ze("Patches").R(o, n, e.u, e.s);
  }
  return o.o;
}
function hs(e, t, n, o, r, i) {
  if (process.env.NODE_ENV !== "production" && r === n && De(5), Kt(r)) {
    var s = _o(e, r, i && t && t.i !== 3 && !Sr(t.D, o) ? i.concat(o) : void 0);
    if (Ea(n, o, s), !Kt(s))
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
function gs(e, t) {
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
    var s = Array.isArray(r), a = { i: s ? 1 : 0, A: i ? i.A : ps(), P: !1, I: !1, D: {}, l: i, t: r, k: null, o: null, j: null, C: !1 }, l = a, u = kr;
    s && (l = [a], u = Dn);
    var c = Proxy.revocable(l, u), f = c.revoke, p = c.proxy;
    return a.k = p, a.j = f, p;
  }(t, n) : Ze("ES5").J(t, n);
  return (n ? n.A : ps()).p.push(o), o;
}
function Gl(e) {
  return Kt(e) || De(22, e), function t(n) {
    if (!bt(n))
      return n;
    var o, r = n[He], i = nn(n);
    if (r) {
      if (!r.P && (r.i < 4 || !Ze("ES5").K(r)))
        return r.t;
      r.I = !0, o = vs(n, i), r.I = !1;
    } else
      o = vs(n, i);
    return An(o, function(s, a) {
      r && Ll(r.t, s) === a || Ea(o, s, t(a));
    }), i === 3 ? new Set(o) : o;
  }(e);
}
function vs(e, t) {
  switch (t) {
    case 2:
      return new Map(e);
    case 3:
      return Array.from(e);
  }
  return Xr(e);
}
var _s, qt, Zr = typeof Symbol != "undefined" && typeof Symbol("x") == "symbol", Fl = typeof Map != "undefined", Ul = typeof Set != "undefined", ys = typeof Proxy != "undefined" && Proxy.revocable !== void 0 && typeof Reflect != "undefined", Da = Zr ? Symbol.for("immer-nothing") : ((_s = {})["immer-nothing"] = !0, _s), ws = Zr ? Symbol.for("immer-draftable") : "__$immer_draftable", He = Zr ? Symbol.for("immer-state") : "__$immer_state", zl = { 0: "Illegal state", 1: "Immer drafts cannot have computed properties", 2: "This object has been frozen and should not be mutated", 3: function(e) {
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
      var a, l = gs(i, s);
      return l ? "value" in l ? l.value : (a = l.get) === null || a === void 0 ? void 0 : a.call(r.k) : void 0;
    }(e, n, t);
  var o = n[t];
  return e.I || !bt(o) ? o : o === ur(e.t, t) ? (dr(e), e.o[t] = Cr(e.A.h, o, e)) : o;
}, has: function(e, t) {
  return t in Tt(e);
}, ownKeys: function(e) {
  return Reflect.ownKeys(Tt(e));
}, set: function(e, t, n) {
  var o = gs(Tt(e), t);
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
  De(11);
}, getPrototypeOf: function(e) {
  return Object.getPrototypeOf(e.t);
}, setPrototypeOf: function() {
  De(12);
} }, Dn = {};
An(kr, function(e, t) {
  Dn[e] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
}), Dn.deleteProperty = function(e, t) {
  return process.env.NODE_ENV !== "production" && isNaN(parseInt(t)) && De(13), Dn.set.call(this, e, t, void 0);
}, Dn.set = function(e, t, n) {
  return process.env.NODE_ENV !== "production" && t !== "length" && isNaN(parseInt(t)) && De(14), kr.set.call(this, e[0], t, n, e[0]);
};
var jl = function() {
  function e(n) {
    var o = this;
    this.g = ys, this.F = !0, this.produce = function(r, i, s) {
      if (typeof r == "function" && typeof i != "function") {
        var a = i;
        i = r;
        var l = o;
        return function(w) {
          var y = this;
          w === void 0 && (w = a);
          for (var v = arguments.length, E = Array(v > 1 ? v - 1 : 0), b = 1; b < v; b++)
            E[b - 1] = arguments[b];
          return l.produce(w, function(k) {
            var S;
            return (S = i).call.apply(S, [y, k].concat(E));
          });
        };
      }
      var u;
      if (typeof i != "function" && De(6), s !== void 0 && typeof s != "function" && De(7), bt(r)) {
        var c = ms(o), f = Cr(o, r, void 0), p = !0;
        try {
          u = i(f), p = !1;
        } finally {
          p ? vo(c) : Tr(c);
        }
        return typeof Promise != "undefined" && u instanceof Promise ? u.then(function(w) {
          return cr(c, s), lr(w, c);
        }, function(w) {
          throw vo(c), w;
        }) : (cr(c, s), lr(u, c));
      }
      if (!r || typeof r != "object") {
        if ((u = i(r)) === void 0 && (u = r), u === Da && (u = void 0), o.F && Kr(u, !0), s) {
          var m = [], h = [];
          Ze("Patches").M(r, u, m, h), s(m, h);
        }
        return u;
      }
      De(21, r);
    }, this.produceWithPatches = function(r, i) {
      if (typeof r == "function")
        return function(u) {
          for (var c = arguments.length, f = Array(c > 1 ? c - 1 : 0), p = 1; p < c; p++)
            f[p - 1] = arguments[p];
          return o.produceWithPatches(u, function(m) {
            return r.apply(void 0, [m].concat(f));
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
    bt(n) || De(8), Kt(n) && (n = Gl(n));
    var o = ms(this), r = Cr(this, n, void 0);
    return r[He].C = !0, Tr(o), r;
  }, t.finishDraft = function(n, o) {
    var r = n && n[He];
    process.env.NODE_ENV !== "production" && (r && r.C || De(9), r.I && De(10));
    var i = r.A;
    return cr(i, o), lr(void 0, i);
  }, t.setAutoFreeze = function(n) {
    this.F = n;
  }, t.setUseProxies = function(n) {
    n && !ys && De(20), this.g = n;
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
const J = Xl;
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
const Ql = "0", Zt = 24, Mo = 2, Qr = 3, Ao = 27, fr = 5, eu = 280, co = 44, Nr = 12, tu = 12, nu = "12px 17px 0", Sa = 42, Ta = 1, ba = 2, Jt = 72, Es = {
  color: "#000",
  backgroundColor: "#a1b56c",
  dragBackgroundColor: "#a1b56c",
  borderColor: "#000"
}, wo = 2, Ds = 9;
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
function U(e) {
  return Be(e) || e === null;
}
function P(e) {
  return !U(e);
}
function Cn(e) {
  return typeof e == "function";
}
const au = "toastui-calendar-";
function _(...e) {
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
function Ca(e, t) {
  const n = e.model.getColors();
  return Object.keys(Es).reduce((o, r) => {
    var s, a;
    const i = r;
    return o[i] = (a = (s = n[i]) != null ? s : t[i]) != null ? a : Es[i], o;
  }, {});
}
const cu = /^(-?(?:[1-9][0-9]*)?[0-9]{4})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9])T(2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9])(\.)?([0-9]+)?([+-]\d\d(?::?\d\d)?|\s*Z)?$/;
function Ss() {
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
    Ss();
  }
  setTimezoneName() {
    Ss();
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
function Ts(...e) {
  return new Du(...e);
}
function Su() {
  return -new Date().getTimezoneOffset();
}
function kn(e, t = new R()) {
  if (!Tu())
    return Eu.warn(
      `Intl.DateTimeFormat is not fully supported. So It will return the local timezone offset only.
You can use a polyfill to fix this issue.`
    ), -t.toDate().getTimezoneOffset();
  ka(e);
  const n = ku(t, e), o = Nu(n);
  return Math.round((o.getTime() - t.getTime()) / 60 / 1e3);
}
function yn(e, t) {
  t && ka(t);
  const n = new R(e.getFullYear(), 0, 1), o = new R(e.getFullYear(), 6, 1);
  return t ? Math.max(
    -kn(t, n),
    -kn(t, o)
  ) !== -kn(t, e) : Math.max(n.getTimezoneOffset(), o.getTimezoneOffset()) !== e.toDate().getTimezoneOffset();
}
const pr = {}, bs = {};
function Tu() {
  var e, t;
  return Cn((t = (e = Intl == null ? void 0 : Intl.DateTimeFormat) == null ? void 0 : e.prototype) == null ? void 0 : t.formatToParts);
}
function ka(e) {
  if (bs[e])
    return !0;
  try {
    return Intl.DateTimeFormat("en-US", { timeZone: e }), bs[e] = !0, !0;
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
    return P(s) && (r[s] = parseInt(i.value, 10)), r;
  }, []);
}
function Nu(e) {
  const [t, n, o, r, i, s] = e, a = n - 1;
  return new Date(Date.UTC(t, a, o, r % 24, i, s));
}
function mr(e) {
  return (Su() - e) * ni;
}
class R {
  constructor(...t) {
    G(this, "tzOffset", null);
    G(this, "d");
    t[0] instanceof R ? this.d = Ts(t[0].getTime()) : this.d = Ts(...t);
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
      return new R(this.getTime());
    const n = be(t) ? kn(t, this) : t, o = new R(this.getTime() - mr(n));
    return o.tzOffset = n, o;
  }
  local(t) {
    if (P(t)) {
      const n = be(t) ? kn(t, this) : t;
      return new R(this.getTime() + mr(n));
    }
    return new R(
      this.getTime() + (P(this.tzOffset) ? mr(this.tzOffset) : 0)
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
    !Array.isArray(t[r]) && uo(e[o]) && uo(t[r]) && !(t[r] instanceof R) ? e[o] = Ye(
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
    G(this, "model");
    G(this, "top", 0);
    G(this, "left", 0);
    G(this, "width", 0);
    G(this, "height", 0);
    G(this, "renderStarts");
    G(this, "renderEnds");
    G(this, "exceedLeft", !1);
    G(this, "exceedRight", !1);
    G(this, "croppedStart", !1);
    G(this, "croppedEnd", !1);
    G(this, "goingDurationHeight", 0);
    G(this, "modelDurationHeight", 100);
    G(this, "comingDurationHeight", 0);
    G(this, "duplicateEvents", []);
    G(this, "duplicateEventIndex", -1);
    G(this, "duplicateStarts");
    G(this, "duplicateEnds");
    G(this, "duplicateLeft", "");
    G(this, "duplicateWidth", "");
    G(this, "collapse", !1);
    G(this, "isMain", !1);
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
    return Aa({
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
    return n.setUIProps(t), this.renderStarts && (n.renderStarts = new R(this.renderStarts)), this.renderEnds && (n.renderEnds = new R(this.renderEnds)), n;
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
function Cs(e, t) {
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
function ks(e) {
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
    const t = ks(e), n = e.getMinutes();
    return `${Me(t, 2)}:${Me(n, 2)}`;
  },
  hh(e) {
    const t = ks(e);
    return String(t);
  },
  tt(e) {
    return e.getHours() < 12 ? "am" : "pm";
  }
}, at = 864e5, ni = 6e4, Xn = 20 * ni, Na = 30 * 60 * 1e3;
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
  const t = e ? new R(e) : new R();
  return t.setHours(0, 0, 0, 0), t;
}
function Ar(e, t, n) {
  const o = e.getTime(), r = t.getTime(), i = new R(e), s = [];
  let a = o;
  for (; a <= r && r >= i.getTime(); )
    s.push(new R(i)), a = a + n, i.addMilliseconds(n);
  return s;
}
function sn(e) {
  return new R(e);
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
function Ia(e, t) {
  return vt(e, t) === -1 ? e : t;
}
function Ns(e, t = -1) {
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
  return new R().setWithRaw(
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
  const t = e ? new R(e) : new R();
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
function Ma(e) {
  const t = new R(e);
  return t.setDate(1), t.setHours(0, 0, 0, 0), t;
}
function Wu(e) {
  const t = Ma(e);
  return t.setMonth(t.getMonth() + 1), t.setDate(t.getDate() - 1), t.setHours(23, 59, 59, 999), t;
}
function si(e, t, n, o) {
  const i = 100 / e, s = e > 5 ? 100 / (e - 1) : i;
  let a = 0;
  const l = gt(n, Ke).concat(gt(e)).slice(0, Ke);
  t = o ? !1 : t;
  const u = l.map((p) => {
    let m = t ? s : i;
    e > 5 && t && Fe(p) && (m = s / 2);
    const h = {
      width: m,
      left: a
    };
    return a += m, h;
  }), { length: c } = u, f = Cs(c, Cs(c, 0));
  return u.forEach(({ width: p }, m) => {
    for (let h = 0; h <= m; h += 1)
      for (let w = m; w < c; w += 1)
        f[h][w] += p;
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
    const o = n.getDate(), r = new R(n.getTime());
    r.setMonth(n.getMonth() + t + 1, 0);
    const i = r.getDate();
    if (o >= i)
      return r;
    n.setFullYear(r.getFullYear(), r.getMonth(), o);
  }
  return n;
}
function ai(e, t) {
  const n = new R(e.getFullYear(), e.getMonth(), e.getDate()).getTime(), o = new R(t.getFullYear(), t.getMonth(), t.getDate()).getTime();
  return Math.round((n - o) / at);
}
function ju(e, t, n, o) {
  return n > e && n < t || o > e && o < t || n <= e && o >= t;
}
function Aa({
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
function Is(e) {
  return e.__fe_id || (e.__fe_id = qu()), e.__fe_id;
}
class ci {
  constructor(t = {}) {
    G(this, "id", "");
    G(this, "calendarId", "");
    G(this, "title", "");
    G(this, "body", "");
    G(this, "isAllday", !1);
    G(this, "start", new R());
    G(this, "end", new R());
    G(this, "goingDuration", 0);
    G(this, "comingDuration", 0);
    G(this, "location", "");
    G(this, "attendees", []);
    G(this, "category", "time");
    G(this, "dueDateClass", "");
    G(this, "recurrenceRule", "");
    G(this, "state", "Busy");
    G(this, "isVisible", !0);
    G(this, "isPending", !1);
    G(this, "isFocused", !1);
    G(this, "isReadOnly", !1);
    G(this, "isPrivate", !1);
    G(this, "color");
    G(this, "backgroundColor");
    G(this, "dragBackgroundColor");
    G(this, "borderColor");
    G(this, "customStyle", {});
    G(this, "raw", null);
    G(this, "hasMultiDates", !1);
    Is(this), this.init(t);
  }
  init({
    id: t = "",
    calendarId: n = "",
    title: o = "",
    body: r = "",
    isAllday: i = !1,
    start: s = new R(),
    end: a = new R(),
    goingDuration: l = 0,
    comingDuration: u = 0,
    location: c = "",
    attendees: f = [],
    category: p = "time",
    dueDateClass: m = "",
    recurrenceRule: h = "",
    state: w = "Busy",
    isVisible: y = !0,
    isPending: v = !1,
    isFocused: E = !1,
    isReadOnly: b = !1,
    isPrivate: k = !1,
    color: S,
    backgroundColor: N,
    dragBackgroundColor: M,
    borderColor: L,
    customStyle: H = {},
    raw: Y = null
  } = {}) {
    this.id = t, this.calendarId = n, this.title = o, this.body = r, this.isAllday = p === "allday" ? !0 : i, this.goingDuration = l, this.comingDuration = u, this.location = c, this.attendees = f, this.category = p, this.dueDateClass = m, this.recurrenceRule = h, this.state = w, this.isVisible = y, this.isPending = v, this.isFocused = E, this.isReadOnly = b, this.isPrivate = k, this.color = S, this.backgroundColor = N, this.dragBackgroundColor = M, this.borderColor = L, this.customStyle = H, this.raw = Y, this.isAllday ? this.setAlldayPeriod(s, a) : this.setTimePeriod(s, a), (p === "milestone" || p === "task") && (this.start = new R(this.end));
  }
  setAlldayPeriod(t, n) {
    let o, r;
    be(t) ? o = Ns(t.substring(0, 10)) : o = new R(t || Date.now()), be(n) ? r = Ns(n.substring(0, 10)) : r = new R(n || this.start), this.start = o, this.start.setHours(0, 0, 0), this.end = r || new R(this.start), this.end.setHours(23, 59, 59);
  }
  setTimePeriod(t, n) {
    this.start = new R(t || Date.now()), this.end = new R(n || this.start), n || this.end.setMinutes(this.end.getMinutes() + 30), this.hasMultiDates = this.end.getTime() - this.start.getTime() > at;
  }
  getStarts() {
    return this.start;
  }
  getEnds() {
    return this.end;
  }
  cid() {
    return Is(this);
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
    return t = t instanceof Ct ? t.model : t, Aa({
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
G(ci, "schema", {
  required: ["title"],
  dateRange: ["start", "end"]
});
function Zu({ model: e }) {
  const { category: t, isAllday: n, hasMultiDates: o } = e;
  return t === "time" && !n && !o;
}
class Je {
  constructor(t) {
    G(this, "internalMap", /* @__PURE__ */ new Map());
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
    U(o) || n(o);
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
function xa(e, t) {
  return Ar(he(e), Re(t), at);
}
function Ju(e) {
  return e.isAllday || e.category === "time" && Number(e.end) - Number(e.start) > at;
}
function Qu(e) {
  const { model: t } = e;
  return Ju(t) ? "allday" : t.category;
}
function Ra(e, t) {
  xa(t.getStarts(), t.getEnds()).forEach((o) => {
    const r = me(o, "YYYYMMDD");
    (e[r] = e[r] || []).push(t.cid());
  });
}
function Oa(e, t) {
  const n = t.cid();
  Object.values(e).forEach((o) => {
    const r = o.indexOf(n);
    ~r && o.splice(r, 1);
  });
}
function ed(e, t) {
  return e.events.add(t), Ra(e.idsOfDay, t), t;
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
  return i ? (i.init(x(x({}, i), o)), Oa(r, i), Ra(r, i), !0) : !1;
}
function rd(e, t) {
  return Oa(e.idsOfDay, t), e.events.remove(t), t;
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
      J((n) => {
        nd(n.calendar, t);
      })
    ),
    updateEvent: ({ event: t, eventData: n }) => e(
      J((o) => {
        od(
          o.calendar,
          t.id,
          t.calendarId,
          n
        );
      })
    ),
    deleteEvent: (t) => e(
      J((n) => {
        rd(n.calendar, t);
      })
    ),
    clearEvents: () => e(
      J((t) => {
        id(t.calendar);
      })
    ),
    setCalendars: (t) => e(
      J((n) => {
        n.calendar.calendars = t;
      })
    ),
    setCalendarColor: (t, n) => e(
      J((o) => {
        const r = o.calendar.calendars.map((a) => a.id === t ? x(x({}, a), n) : a), i = o.calendar.events.toArray().map((a) => {
          var l, u, c, f;
          return a.calendarId === t && (a.color = (l = n.color) != null ? l : a.color, a.backgroundColor = (u = n.backgroundColor) != null ? u : a.backgroundColor, a.borderColor = (c = n.borderColor) != null ? c : a.borderColor, a.dragBackgroundColor = (f = n.dragBackgroundColor) != null ? f : a.dragBackgroundColor), a;
        }), s = Qt(...i);
        o.calendar.calendars = r, o.calendar.events = s;
      })
    ),
    setCalendarVisibility: (t, n) => e(
      J((o) => {
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
        J((n) => {
          n.dnd = ce(x(x({}, n.dnd), t), {
            draggingState: 1
          });
        })
      );
    },
    setDragging: (t) => {
      e(
        J((n) => {
          n.dnd = ce(x(x({}, n.dnd), t), {
            draggingState: 2
          });
        })
      );
    },
    cancelDrag: () => {
      e(
        J((t) => {
          t.dnd = xr().dnd, t.dnd.draggingState = 3;
        })
      );
    },
    reset: () => {
      e(
        J((t) => {
          t.dnd = xr().dnd;
        })
      );
    },
    setDraggingEventUIModel: (t) => {
      e(
        J((n) => {
          var o;
          n.dnd.draggingEventUIModel = (o = t == null ? void 0 : t.clone()) != null ? o : null;
        })
      );
    }
  };
}
function Pa() {
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
        J((o) => {
          o.gridSelection[t] = n;
        })
      );
    },
    addGridSelection: (t, n) => {
      e(
        J((o) => {
          t === "dayGridMonth" && n && (o.gridSelection.accumulated[t] = [
            ...o.gridSelection.accumulated[t],
            n
          ], o.gridSelection.dayGridMonth = null);
        })
      );
    },
    clearAll: () => e(
      J((t) => {
        t.gridSelection = Pa().gridSelection;
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
        J((n) => {
          n.weekViewLayout.lastPanelType = t, t && (n.weekViewLayout.dayGridRows[t].height = qn(
            n.weekViewLayout.dayGridRows,
            t,
            n.layout
          ));
        })
      );
    },
    updateLayoutHeight: (t) => e(
      J((n) => {
        const { lastPanelType: o } = n.weekViewLayout;
        n.layout = t, o && (n.weekViewLayout.dayGridRows[o].height = qn(
          n.weekViewLayout.dayGridRows,
          o,
          t
        ));
      })
    ),
    updateDayGridRowHeight: ({ rowName: t, height: n }) => e(
      J((o) => {
        const { lastPanelType: r } = o.weekViewLayout;
        o.weekViewLayout.dayGridRows[t] = { height: n }, r && (o.weekViewLayout.dayGridRows[r].height = qn(
          o.weekViewLayout.dayGridRows,
          r,
          o.layout
        ));
      })
    ),
    updateDayGridRowHeightByDiff: ({ rowName: t, diff: n }) => e(
      J((o) => {
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
      J((n) => {
        n.weekViewLayout.selectedDuplicateEventCid = t != null ? t : Ro;
      })
    )
  };
}
function Oo(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
const La = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"], So = (e) => La[e];
function Ha(e, t) {
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
function $a(e) {
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
  return t.collapseDuplicateEvents = $a(t.collapseDuplicateEvents), t;
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
  return t.dayNames.length === 0 && (t.dayNames = La.slice()), t;
}
function Ba(e) {
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
  var t, n, o, r, i, s;
  return {
    options: {
      defaultView: (t = e.defaultView) != null ? t : "week",
      useFormPopup: (n = e.useFormPopup) != null ? n : !1,
      useDetailPopup: (o = e.useDetailPopup) != null ? o : !1,
      isReadOnly: (r = e.isReadOnly) != null ? r : !1,
      week: fd(e.week),
      month: md(e.month),
      gridSelection: Ba(e.gridSelection),
      usageStatistics: (i = e.usageStatistics) != null ? i : !0,
      eventFilter: (s = e.eventFilter) != null ? s : hd,
      timezone: pd(e.timezone)
    }
  };
}
function vd(e) {
  return {
    setOptions: (t = {}) => e(
      J((n) => {
        var o;
        t.gridSelection && (t.gridSelection = Ba(t.gridSelection)), (o = t.week) != null && o.collapseDuplicateEvents && (t.week.collapseDuplicateEvents = $a(
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
      J((n) => {
        n.popup.seeMore = t, n.popup.form = null, n.popup.detail = null;
      })
    ),
    showFormPopup: (t) => e(
      J((n) => {
        n.popup.form = t, n.popup.seeMore = null, n.popup.detail = null;
      })
    ),
    showDetailPopup: (t, n) => e(
      J((o) => {
        o.popup.detail = t, o.popup.form = null, n || (o.popup.seeMore = null);
      })
    ),
    hideSeeMorePopup: () => e(
      J((t) => {
        t.popup.seeMore = null;
      })
    ),
    hideFormPopup: () => e(
      J((t) => {
        t.popup.form = null;
      })
    ),
    hideDetailPopup: () => e(
      J((t) => {
        t.popup.detail = null;
      })
    ),
    hideAllPopup: () => e(
      J((t) => {
        t.popup.seeMore = null, t.popup.form = null, t.popup.detail = null;
      })
    )
  };
}
const an = () => {
}, wd = /^auto$|^$|%/;
function Ms(e, t) {
  let n = e.style[t];
  if ((!n || n === "auto") && document.defaultView) {
    const o = document.defaultView.getComputedStyle(e, null);
    n = o ? o[t] : null;
  }
  return n === "auto" ? null : n;
}
function As(e) {
  return be(e) ? wd.test(e) : e === null;
}
function Ga(e) {
  const t = Ms(e, "width"), n = Ms(e, "height");
  if ((As(t) || As(n)) && e.getBoundingClientRect) {
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
    const t = _("icon", "ic-milestone");
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
      className: _("left-content")
    }, "Milestone");
  },
  task(e) {
    return `#${e.title}`;
  },
  taskTitle() {
    return /* @__PURE__ */ d("span", {
      className: _("left-content")
    }, "Task");
  },
  alldayTitle() {
    return /* @__PURE__ */ d("span", {
      className: _("left-content")
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
    const { date: t, day: n } = e, o = _("more-title-date"), r = _("more-title-day"), i = Oo(So(n));
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
    const t = parseInt(e.date.split("-")[2], 10), n = _("weekday-grid-date", { "weekday-grid-date-decorator": e.isToday });
    return /* @__PURE__ */ d("span", {
      className: n
    }, t);
  },
  monthGridHeaderExceed(e) {
    const t = _("weekday-grid-more-events");
    return /* @__PURE__ */ d("span", {
      className: t
    }, e, " more");
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
    const t = _("day-name__date"), n = _("day-name__name");
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
    const e = _("collapse-btn-icon");
    return /* @__PURE__ */ d("span", {
      className: e
    });
  },
  timezoneDisplayLabel({ displayLabel: e, timezoneOffset: t }) {
    if (U(e) && P(t)) {
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
      J((n) => {
        n.template = x(x({}, n.template), t);
      })
    )
  };
}
function bd(e = "week") {
  const t = new R();
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
      J((n) => {
        n.view.currentView = t;
      })
    ),
    setRenderDate: (t) => e(
      J((n) => {
        n.view.renderDate = he(t);
      })
    )
  };
}
const kd = Be(window) || !window.navigator, xs = kd ? re : ht;
function Fa() {
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
      if (U(s))
        throw new Error("StoreProvider is not found");
      const [, a] = Wr((E) => E + 1, 0), l = s.getState(), u = te(l), c = te(r), f = te(i), p = te(!1), m = te();
      Be(m.current) && (m.current = r(l));
      let h, w = !1;
      (u.current !== l || c.current !== r || f.current !== i || p.current) && (h = r(l), w = !i(m.current, h)), xs(() => {
        w && (m.current = h), u.current = l, c.current = r, f.current = i, p.current = !1;
      });
      const v = te(l);
      return xs(() => {
        const E = () => {
          try {
            const k = s.getState(), S = c.current(k);
            !f.current(
              m.current,
              S
            ) && (u.current = k, m.current = h, a());
          } catch (k) {
            console.error("[toastui-calendar] failed to update state", k == null ? void 0 : k.message), p.current = !0, a();
          }
        }, b = s.subscribe(E);
        return s.getState() !== v.current && E(), b;
      }, []), w ? h : m.current;
    },
    useInternalStore: () => {
      const r = Mn(e);
      if (U(r))
        throw new Error("StoreProvider is not found");
      return W(() => r, [r]);
    }
  };
}
function Ua(e) {
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
      const m = c != null ? c : Object.is;
      f = () => {
        const h = u(t);
        if (!m(p, h)) {
          const w = p;
          p = h, l(p, w);
        }
      };
    }
    return n.add(f), () => n.delete(f);
  }, clearListeners: () => n.clear() };
  return t = e(o, r, a), a;
}
const Nd = (e) => (t) => ce(x(x(x(x(x(x(x(x({}, gd(e)), Sd(e.template)), _d()), ud()), sd(e.calendars)), bd(e.defaultView)), xr()), Pa()), {
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
}), Id = (e = {}) => Ua(Nd(e)), { StoreProvider: Md, useStore: z, useInternalStore: za } = Fa();
function ye(e) {
  return z(
    Q(
      (t) => e ? t.dispatch[e] : t.dispatch,
      [e]
    )
  );
}
function yt(e) {
  return (t) => t[e];
}
const Lo = yt("calendar"), Wa = yt(
  "weekViewLayout"
), Ya = yt("template"), cn = yt("view"), je = yt("options"), At = yt("dnd");
var gr = { exports: {} };
/*! @license DOMPurify 2.3.8 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.3.8/LICENSE */
var Rs;
function Os() {
  return Rs || (Rs = 1, function(e, t) {
    (function(n, o) {
      e.exports = o();
    })(Kl, function() {
      function n(I) {
        return n = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(A) {
          return typeof A;
        } : function(A) {
          return A && typeof Symbol == "function" && A.constructor === Symbol && A !== Symbol.prototype ? "symbol" : typeof A;
        }, n(I);
      }
      function o(I, A) {
        return o = Object.setPrototypeOf || function(q, fe) {
          return q.__proto__ = fe, q;
        }, o(I, A);
      }
      function r() {
        if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham)
          return !1;
        if (typeof Proxy == "function")
          return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          })), !0;
        } catch (I) {
          return !1;
        }
      }
      function i(I, A, V) {
        return r() ? i = Reflect.construct : i = function(fe, Lt, dt) {
          var ft = [null];
          ft.push.apply(ft, Lt);
          var mn = Function.bind.apply(fe, ft), hn = new mn();
          return dt && o(hn, dt.prototype), hn;
        }, i.apply(null, arguments);
      }
      function s(I) {
        return a(I) || l(I) || u(I) || f();
      }
      function a(I) {
        if (Array.isArray(I))
          return c(I);
      }
      function l(I) {
        if (typeof Symbol != "undefined" && I[Symbol.iterator] != null || I["@@iterator"] != null)
          return Array.from(I);
      }
      function u(I, A) {
        if (!!I) {
          if (typeof I == "string")
            return c(I, A);
          var V = Object.prototype.toString.call(I).slice(8, -1);
          if (V === "Object" && I.constructor && (V = I.constructor.name), V === "Map" || V === "Set")
            return Array.from(I);
          if (V === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(V))
            return c(I, A);
        }
      }
      function c(I, A) {
        (A == null || A > I.length) && (A = I.length);
        for (var V = 0, q = new Array(A); V < A; V++)
          q[V] = I[V];
        return q;
      }
      function f() {
        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      var p = Object.hasOwnProperty, m = Object.setPrototypeOf, h = Object.isFrozen, w = Object.getPrototypeOf, y = Object.getOwnPropertyDescriptor, v = Object.freeze, E = Object.seal, b = Object.create, k = typeof Reflect != "undefined" && Reflect, S = k.apply, N = k.construct;
      S || (S = function(A, V, q) {
        return A.apply(V, q);
      }), v || (v = function(A) {
        return A;
      }), E || (E = function(A) {
        return A;
      }), N || (N = function(A, V) {
        return i(A, s(V));
      });
      var M = oe(Array.prototype.forEach), L = oe(Array.prototype.pop), H = oe(Array.prototype.push), Y = oe(String.prototype.toLowerCase), B = oe(String.prototype.match), Z = oe(String.prototype.replace), ee = oe(String.prototype.indexOf), D = oe(String.prototype.trim), T = oe(RegExp.prototype.test), K = Ce(TypeError);
      function oe(I) {
        return function(A) {
          for (var V = arguments.length, q = new Array(V > 1 ? V - 1 : 0), fe = 1; fe < V; fe++)
            q[fe - 1] = arguments[fe];
          return S(I, A, q);
        };
      }
      function Ce(I) {
        return function() {
          for (var A = arguments.length, V = new Array(A), q = 0; q < A; q++)
            V[q] = arguments[q];
          return N(I, V);
        };
      }
      function j(I, A) {
        m && m(I, null);
        for (var V = A.length; V--; ) {
          var q = A[V];
          if (typeof q == "string") {
            var fe = Y(q);
            fe !== q && (h(A) || (A[V] = fe), q = fe);
          }
          I[q] = !0;
        }
        return I;
      }
      function de(I) {
        var A = b(null), V;
        for (V in I)
          S(p, I, [V]) && (A[V] = I[V]);
        return A;
      }
      function Oe(I, A) {
        for (; I !== null; ) {
          var V = y(I, A);
          if (V) {
            if (V.get)
              return oe(V.get);
            if (typeof V.value == "function")
              return oe(V.value);
          }
          I = w(I);
        }
        function q(fe) {
          return console.warn("fallback value for", fe), null;
        }
        return q;
      }
      var Et = v(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), ue = v(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Ue = v(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Pe = v(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), lt = v(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]), pn = v(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Rt = v(["#text"]), Ot = v(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]), ut = v(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Pt = v(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), $n = v(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), jc = E(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Xc = E(/<%[\w\W]*|[\w\W]*%>/gm), Kc = E(/^data-[\-\w.\u00B7-\uFFFF]/), qc = E(/^aria-[\-\w]+$/), Zc = E(
        /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
      ), Jc = E(/^(?:\w+script|data):/i), Qc = E(
        /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
      ), el = E(/^html$/i), tl = function() {
        return typeof window == "undefined" ? null : window;
      }, nl = function(A, V) {
        if (n(A) !== "object" || typeof A.createPolicy != "function")
          return null;
        var q = null, fe = "data-tt-policy-suffix";
        V.currentScript && V.currentScript.hasAttribute(fe) && (q = V.currentScript.getAttribute(fe));
        var Lt = "dompurify" + (q ? "#" + q : "");
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
      function Mi() {
        var I = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : tl(), A = function(g) {
          return Mi(g);
        };
        if (A.version = "2.3.8", A.removed = [], !I || !I.document || I.document.nodeType !== 9)
          return A.isSupported = !1, A;
        var V = I.document, q = I.document, fe = I.DocumentFragment, Lt = I.HTMLTemplateElement, dt = I.Node, ft = I.Element, mn = I.NodeFilter, hn = I.NamedNodeMap, rl = hn === void 0 ? I.NamedNodeMap || I.MozNamedAttrMap : hn, il = I.HTMLFormElement, sl = I.DOMParser, al = I.trustedTypes, Bn = ft.prototype, cl = Oe(Bn, "cloneNode"), ll = Oe(Bn, "nextSibling"), ul = Oe(Bn, "childNodes"), zo = Oe(Bn, "parentNode");
        if (typeof Lt == "function") {
          var Wo = q.createElement("template");
          Wo.content && Wo.content.ownerDocument && (q = Wo.content.ownerDocument);
        }
        var pt = nl(al, V), Ai = pt ? pt.createHTML("") : "", Gn = q, Yo = Gn.implementation, dl = Gn.createNodeIterator, fl = Gn.createDocumentFragment, pl = Gn.getElementsByTagName, ml = V.importNode, xi = {};
        try {
          xi = de(q).documentMode ? q.documentMode : {};
        } catch (F) {
        }
        var Xe = {};
        A.isSupported = typeof zo == "function" && Yo && typeof Yo.createHTMLDocument != "undefined" && xi !== 9;
        var Vo = jc, jo = Xc, hl = Kc, gl = qc, vl = Jc, Ri = Qc, Xo = Zc, ge = null, Oi = j({}, [].concat(s(Et), s(ue), s(Ue), s(lt), s(Rt))), we = null, Pi = j({}, [].concat(s(Ot), s(ut), s(Pt), s($n))), pe = Object.seal(Object.create(null, {
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
        })), gn = null, Ko = null, Li = !0, qo = !0, Hi = !1, Ht = !1, Dt = !1, Zo = !1, Jo = !1, $t = !1, Fn = !1, Un = !1, $i = !0, Qo = !0, vn = !1, Bt = {}, Gt = null, Bi = j({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), Gi = null, Fi = j({}, ["audio", "video", "img", "source", "image", "track"]), er = null, Ui = j({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), tr = "http://www.w3.org/1998/Math/MathML", nr = "http://www.w3.org/2000/svg", mt = "http://www.w3.org/1999/xhtml", zn = mt, or = !1, Ft, _l = ["application/xhtml+xml", "text/html"], yl = "text/html", St, Ut = null, wl = q.createElement("form"), zi = function(g) {
          return g instanceof RegExp || g instanceof Function;
        }, rr = function(g) {
          Ut && Ut === g || ((!g || n(g) !== "object") && (g = {}), g = de(g), ge = "ALLOWED_TAGS" in g ? j({}, g.ALLOWED_TAGS) : Oi, we = "ALLOWED_ATTR" in g ? j({}, g.ALLOWED_ATTR) : Pi, er = "ADD_URI_SAFE_ATTR" in g ? j(de(Ui), g.ADD_URI_SAFE_ATTR) : Ui, Gi = "ADD_DATA_URI_TAGS" in g ? j(de(Fi), g.ADD_DATA_URI_TAGS) : Fi, Gt = "FORBID_CONTENTS" in g ? j({}, g.FORBID_CONTENTS) : Bi, gn = "FORBID_TAGS" in g ? j({}, g.FORBID_TAGS) : {}, Ko = "FORBID_ATTR" in g ? j({}, g.FORBID_ATTR) : {}, Bt = "USE_PROFILES" in g ? g.USE_PROFILES : !1, Li = g.ALLOW_ARIA_ATTR !== !1, qo = g.ALLOW_DATA_ATTR !== !1, Hi = g.ALLOW_UNKNOWN_PROTOCOLS || !1, Ht = g.SAFE_FOR_TEMPLATES || !1, Dt = g.WHOLE_DOCUMENT || !1, $t = g.RETURN_DOM || !1, Fn = g.RETURN_DOM_FRAGMENT || !1, Un = g.RETURN_TRUSTED_TYPE || !1, Jo = g.FORCE_BODY || !1, $i = g.SANITIZE_DOM !== !1, Qo = g.KEEP_CONTENT !== !1, vn = g.IN_PLACE || !1, Xo = g.ALLOWED_URI_REGEXP || Xo, zn = g.NAMESPACE || mt, g.CUSTOM_ELEMENT_HANDLING && zi(g.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (pe.tagNameCheck = g.CUSTOM_ELEMENT_HANDLING.tagNameCheck), g.CUSTOM_ELEMENT_HANDLING && zi(g.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (pe.attributeNameCheck = g.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), g.CUSTOM_ELEMENT_HANDLING && typeof g.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (pe.allowCustomizedBuiltInElements = g.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), Ft = _l.indexOf(g.PARSER_MEDIA_TYPE) === -1 ? Ft = yl : Ft = g.PARSER_MEDIA_TYPE, St = Ft === "application/xhtml+xml" ? function(C) {
            return C;
          } : Y, Ht && (qo = !1), Fn && ($t = !0), Bt && (ge = j({}, s(Rt)), we = [], Bt.html === !0 && (j(ge, Et), j(we, Ot)), Bt.svg === !0 && (j(ge, ue), j(we, ut), j(we, $n)), Bt.svgFilters === !0 && (j(ge, Ue), j(we, ut), j(we, $n)), Bt.mathMl === !0 && (j(ge, lt), j(we, Pt), j(we, $n))), g.ADD_TAGS && (ge === Oi && (ge = de(ge)), j(ge, g.ADD_TAGS)), g.ADD_ATTR && (we === Pi && (we = de(we)), j(we, g.ADD_ATTR)), g.ADD_URI_SAFE_ATTR && j(er, g.ADD_URI_SAFE_ATTR), g.FORBID_CONTENTS && (Gt === Bi && (Gt = de(Gt)), j(Gt, g.FORBID_CONTENTS)), Qo && (ge["#text"] = !0), Dt && j(ge, ["html", "head", "body"]), ge.table && (j(ge, ["tbody"]), delete gn.tbody), v && v(g), Ut = g);
        }, Wi = j({}, ["mi", "mo", "mn", "ms", "mtext"]), Yi = j({}, ["foreignobject", "desc", "title", "annotation-xml"]), El = j({}, ["title", "style", "font", "a", "script"]), Wn = j({}, ue);
        j(Wn, Ue), j(Wn, Pe);
        var ir = j({}, lt);
        j(ir, pn);
        var Dl = function(g) {
          var C = zo(g);
          (!C || !C.tagName) && (C = {
            namespaceURI: mt,
            tagName: "template"
          });
          var O = Y(g.tagName), ie = Y(C.tagName);
          return g.namespaceURI === nr ? C.namespaceURI === mt ? O === "svg" : C.namespaceURI === tr ? O === "svg" && (ie === "annotation-xml" || Wi[ie]) : Boolean(Wn[O]) : g.namespaceURI === tr ? C.namespaceURI === mt ? O === "math" : C.namespaceURI === nr ? O === "math" && Yi[ie] : Boolean(ir[O]) : g.namespaceURI === mt ? C.namespaceURI === nr && !Yi[ie] || C.namespaceURI === tr && !Wi[ie] ? !1 : !ir[O] && (El[O] || !Wn[O]) : !1;
        }, et = function(g) {
          H(A.removed, {
            element: g
          });
          try {
            g.parentNode.removeChild(g);
          } catch (C) {
            try {
              g.outerHTML = Ai;
            } catch (O) {
              g.remove();
            }
          }
        }, Vi = function(g, C) {
          try {
            H(A.removed, {
              attribute: C.getAttributeNode(g),
              from: C
            });
          } catch (O) {
            H(A.removed, {
              attribute: null,
              from: C
            });
          }
          if (C.removeAttribute(g), g === "is" && !we[g])
            if ($t || Fn)
              try {
                et(C);
              } catch (O) {
              }
            else
              try {
                C.setAttribute(g, "");
              } catch (O) {
              }
        }, ji = function(g) {
          var C, O;
          if (Jo)
            g = "<remove></remove>" + g;
          else {
            var ie = B(g, /^[\r\n\t ]+/);
            O = ie && ie[0];
          }
          Ft === "application/xhtml+xml" && (g = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + g + "</body></html>");
          var Ie = pt ? pt.createHTML(g) : g;
          if (zn === mt)
            try {
              C = new sl().parseFromString(Ie, Ft);
            } catch (Ee) {
            }
          if (!C || !C.documentElement) {
            C = Yo.createDocument(zn, "template", null);
            try {
              C.documentElement.innerHTML = or ? "" : Ie;
            } catch (Ee) {
            }
          }
          var Te = C.body || C.documentElement;
          return g && O && Te.insertBefore(q.createTextNode(O), Te.childNodes[0] || null), zn === mt ? pl.call(C, Dt ? "html" : "body")[0] : Dt ? C.documentElement : Te;
        }, Xi = function(g) {
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
        }, tt = function(g, C, O) {
          !Xe[g] || M(Xe[g], function(ie) {
            ie.call(A, C, O, Ut);
          });
        }, Ki = function(g) {
          var C;
          if (tt("beforeSanitizeElements", g, null), Sl(g) || T(/[\u0080-\uFFFF]/, g.nodeName))
            return et(g), !0;
          var O = St(g.nodeName);
          if (tt("uponSanitizeElement", g, {
            tagName: O,
            allowedTags: ge
          }), g.hasChildNodes() && !_n(g.firstElementChild) && (!_n(g.content) || !_n(g.content.firstElementChild)) && T(/<[/\w]/g, g.innerHTML) && T(/<[/\w]/g, g.textContent) || O === "select" && T(/<template/i, g.innerHTML))
            return et(g), !0;
          if (!ge[O] || gn[O]) {
            if (!gn[O] && Zi(O) && (pe.tagNameCheck instanceof RegExp && T(pe.tagNameCheck, O) || pe.tagNameCheck instanceof Function && pe.tagNameCheck(O)))
              return !1;
            if (Qo && !Gt[O]) {
              var ie = zo(g) || g.parentNode, Ie = ul(g) || g.childNodes;
              if (Ie && ie)
                for (var Te = Ie.length, Ee = Te - 1; Ee >= 0; --Ee)
                  ie.insertBefore(cl(Ie[Ee], !0), ll(g));
            }
            return et(g), !0;
          }
          return g instanceof ft && !Dl(g) || (O === "noscript" || O === "noembed") && T(/<\/no(script|embed)/i, g.innerHTML) ? (et(g), !0) : (Ht && g.nodeType === 3 && (C = g.textContent, C = Z(C, Vo, " "), C = Z(C, jo, " "), g.textContent !== C && (H(A.removed, {
            element: g.cloneNode()
          }), g.textContent = C)), tt("afterSanitizeElements", g, null), !1);
        }, qi = function(g, C, O) {
          if ($i && (C === "id" || C === "name") && (O in q || O in wl))
            return !1;
          if (!(qo && !Ko[C] && T(hl, C))) {
            if (!(Li && T(gl, C))) {
              if (!we[C] || Ko[C]) {
                if (!(Zi(g) && (pe.tagNameCheck instanceof RegExp && T(pe.tagNameCheck, g) || pe.tagNameCheck instanceof Function && pe.tagNameCheck(g)) && (pe.attributeNameCheck instanceof RegExp && T(pe.attributeNameCheck, C) || pe.attributeNameCheck instanceof Function && pe.attributeNameCheck(C)) || C === "is" && pe.allowCustomizedBuiltInElements && (pe.tagNameCheck instanceof RegExp && T(pe.tagNameCheck, O) || pe.tagNameCheck instanceof Function && pe.tagNameCheck(O))))
                  return !1;
              } else if (!er[C]) {
                if (!T(Xo, Z(O, Ri, ""))) {
                  if (!((C === "src" || C === "xlink:href" || C === "href") && g !== "script" && ee(O, "data:") === 0 && Gi[g])) {
                    if (!(Hi && !T(vl, Z(O, Ri, "")))) {
                      if (O)
                        return !1;
                    }
                  }
                }
              }
            }
          }
          return !0;
        }, Zi = function(g) {
          return g.indexOf("-") > 0;
        }, Ji = function(g) {
          var C, O, ie, Ie;
          tt("beforeSanitizeAttributes", g, null);
          var Te = g.attributes;
          if (!!Te) {
            var Ee = {
              attrName: "",
              attrValue: "",
              keepAttr: !0,
              allowedAttributes: we
            };
            for (Ie = Te.length; Ie--; ) {
              C = Te[Ie];
              var Yn = C, ke = Yn.name, Qi = Yn.namespaceURI;
              if (O = ke === "value" ? C.value : D(C.value), ie = St(ke), Ee.attrName = ie, Ee.attrValue = O, Ee.keepAttr = !0, Ee.forceKeepAttr = void 0, tt("uponSanitizeAttribute", g, Ee), O = Ee.attrValue, !Ee.forceKeepAttr && (Vi(ke, g), !!Ee.keepAttr)) {
                if (T(/\/>/i, O)) {
                  Vi(ke, g);
                  continue;
                }
                Ht && (O = Z(O, Vo, " "), O = Z(O, jo, " "));
                var bl = St(g.nodeName);
                if (!!qi(bl, ie, O))
                  try {
                    Qi ? g.setAttributeNS(Qi, ke, O) : g.setAttribute(ke, O), L(A.removed);
                  } catch (ag) {
                  }
              }
            }
            tt("afterSanitizeAttributes", g, null);
          }
        }, Tl = function F(g) {
          var C, O = Xi(g);
          for (tt("beforeSanitizeShadowDOM", g, null); C = O.nextNode(); )
            tt("uponSanitizeShadowNode", C, null), !Ki(C) && (C.content instanceof fe && F(C.content), Ji(C));
          tt("afterSanitizeShadowDOM", g, null);
        };
        return A.sanitize = function(F, g) {
          var C, O, ie, Ie, Te;
          if (or = !F, or && (F = "<!-->"), typeof F != "string" && !_n(F)) {
            if (typeof F.toString != "function")
              throw K("toString is not a function");
            if (F = F.toString(), typeof F != "string")
              throw K("dirty is not a string, aborting");
          }
          if (!A.isSupported) {
            if (n(I.toStaticHTML) === "object" || typeof I.toStaticHTML == "function") {
              if (typeof F == "string")
                return I.toStaticHTML(F);
              if (_n(F))
                return I.toStaticHTML(F.outerHTML);
            }
            return F;
          }
          if (Zo || rr(g), A.removed = [], typeof F == "string" && (vn = !1), vn) {
            if (F.nodeName) {
              var Ee = St(F.nodeName);
              if (!ge[Ee] || gn[Ee])
                throw K("root node is forbidden and cannot be sanitized in-place");
            }
          } else if (F instanceof dt)
            C = ji("<!---->"), O = C.ownerDocument.importNode(F, !0), O.nodeType === 1 && O.nodeName === "BODY" || O.nodeName === "HTML" ? C = O : C.appendChild(O);
          else {
            if (!$t && !Ht && !Dt && F.indexOf("<") === -1)
              return pt && Un ? pt.createHTML(F) : F;
            if (C = ji(F), !C)
              return $t ? null : Un ? Ai : "";
          }
          C && Jo && et(C.firstChild);
          for (var Yn = Xi(vn ? F : C); ie = Yn.nextNode(); )
            ie.nodeType === 3 && ie === Ie || Ki(ie) || (ie.content instanceof fe && Tl(ie.content), Ji(ie), Ie = ie);
          if (Ie = null, vn)
            return F;
          if ($t) {
            if (Fn)
              for (Te = fl.call(C.ownerDocument); C.firstChild; )
                Te.appendChild(C.firstChild);
            else
              Te = C;
            return we.shadowroot && (Te = ml.call(V, Te, !0)), Te;
          }
          var ke = Dt ? C.outerHTML : C.innerHTML;
          return Dt && ge["!doctype"] && C.ownerDocument && C.ownerDocument.doctype && C.ownerDocument.doctype.name && T(el, C.ownerDocument.doctype.name) && (ke = "<!DOCTYPE " + C.ownerDocument.doctype.name + `>
` + ke), Ht && (ke = Z(ke, Vo, " "), ke = Z(ke, jo, " ")), pt && Un ? pt.createHTML(ke) : ke;
        }, A.setConfig = function(F) {
          rr(F), Zo = !0;
        }, A.clearConfig = function() {
          Ut = null, Zo = !1;
        }, A.isValidAttribute = function(F, g, C) {
          Ut || rr({});
          var O = St(F), ie = St(g);
          return qi(O, ie, C);
        }, A.addHook = function(F, g) {
          typeof g == "function" && (Xe[F] = Xe[F] || [], H(Xe[F], g));
        }, A.removeHook = function(F) {
          if (Xe[F])
            return L(Xe[F]);
        }, A.removeHooks = function(F) {
          Xe[F] && (Xe[F] = []);
        }, A.removeAllHooks = function() {
          Xe = {};
        }, A;
      }
      var ol = Mi();
      return ol;
    });
  }(gr)), gr.exports;
}
var To = window.DOMPurify || (window.DOMPurify = Os().default || Os());
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
  const r = z(Ya)[e];
  if (U(r))
    return null;
  const i = r(t);
  return be(i) ? d(n, {
    className: _(`template-${e}`),
    dangerouslySetInnerHTML: {
      __html: Rd(i)
    }
  }) : Ol(i, {
    className: `${(s = i.props.className) != null ? s : ""} ${_(`template-${e}`)}`
  });
}
const Va = Io(
  null
), Od = Va.Provider, Ne = () => {
  const e = Mn(Va);
  if (!e)
    throw new Error("useEventBus must be used within a EventBusProvider");
  return e;
}, Ho = (e) => {
  var t, n, o, r, i;
  return (i = (r = (o = (n = (t = e.options) == null ? void 0 : t.timezone) == null ? void 0 : n.zones) == null ? void 0 : o[0]) == null ? void 0 : r.timezoneName) != null ? i : "Local";
}, Pd = (e) => {
  var t, n;
  return (n = (t = e.options) == null ? void 0 : t.timezone) == null ? void 0 : n.customOffsetCalculator;
}, ja = (e) => {
  var t;
  return (t = e.options.timezone.zones) != null ? t : [];
};
function $o() {
  const e = z(Pd), t = P(e);
  return Q(
    (n, o = new R()) => o.tz(
      t ? e(n, o.getTime()) : n
    ),
    [e, t]
  );
}
function Bo() {
  const e = z(Ho), t = $o(), n = Q(
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
    className: _("day-name-item", n),
    style: t
  }, /* @__PURE__ */ d("span", {
    className: _({ [`holiday-${So(a)}`]: Fe(a) }),
    style: { color: l },
    onClick: c,
    "data-testid": `dayName-${n}-${So(a)}`
  }, /* @__PURE__ */ d(ne, {
    template: u,
    param: e
  })));
}
const Xa = yt("common"), Gd = yt("month"), Ka = (e) => e.week.dayGridLeft, li = (e) => e.week.timeGridLeft, Fd = (e) => e.month.moreView, qa = (e) => e.month.gridCell, Ud = {
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
        J((n) => {
          n.common = Ye(n.common, t.common), n.week = Ye(n.week, t.week), n.month = Ye(n.month, t.month);
        })
      );
    },
    setCommonTheme: (t) => {
      e(
        J((n) => {
          n.common = Ye(n.common, t);
        })
      );
    },
    setWeekTheme: (t) => {
      e(
        J((n) => {
          n.week = Ye(n.week, t);
        })
      );
    },
    setMonthTheme: (t) => {
      e(
        J((n) => {
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
}), qd = (e = {}) => Ua(Kd(e)), {
  StoreProvider: Zd,
  useInternalStore: ug,
  useStore: se
} = Fa();
function Jd() {
  return se(Xa);
}
function Za() {
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
    className: _("day-names", o),
    style: {
      backgroundColor: i,
      borderTop: l,
      borderBottom: u
    }
  }, /* @__PURE__ */ d("div", {
    className: _("day-name-container"),
    style: { marginLeft: t }
  }, e.map((m, h) => /* @__PURE__ */ d(Bd, {
    type: o,
    key: `dayNames-${m.day}`,
    dayName: m,
    style: {
      width: X(n[h].width),
      left: X(n[h].left),
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
function Ja(e, t) {
  return (n) => {
    const o = n.getStarts();
    return !(n.getEnds() < e || o > t);
  };
}
function Qa(e, t, n, o) {
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
function Ps(e, t, n) {
  return n.getStarts() < e && (n.exceedLeft = !0, n.renderStarts = new R(e)), n.getEnds() > t && (n.exceedRight = !0, n.renderEnds = new R(t)), n;
}
function ec(e, t, n) {
  return n instanceof Je ? (n.each((o) => (Ps(e, t, o), !0)), null) : Ps(e, t, n);
}
function tc(e) {
  const t = new Je((n) => n.cid());
  return e.each(function(n) {
    t.add(new Ct(n));
  }), t;
}
function di({ model: e }) {
  return e.isAllday || e.hasMultiDates;
}
function nc(e) {
  return !di(e);
}
function of(e) {
  e.top = e.top || 0, e.top += 1;
}
function rf(e, t, n) {
  n.each((o) => {
    (o.model.isAllday || o.model.hasMultiDates) && ec(he(e), Re(t), o);
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
  const n = t.filter(di), o = t.filter(nc).sort(kt.compare.event.asc), r = {};
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
  const n = t.filter(di), o = t.filter(nc).sort(kt.compare.event.asc), r = {};
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
  const { start: n, end: o, andFilters: r = [], alldayFirstMode: i = !1 } = t, { events: s, idsOfDay: a } = e, l = Je.and(...[Ja(n, o)].concat(r)), u = s.filter(l), c = tc(u);
  lf(c), rf(n, o, c);
  const f = c.sort(kt.compare.event.asc), p = !1, m = Go(f, p), h = Fo(c, m, p);
  return Qa(n, o, h, of), i ? af(a, c) : cf(a, c), h;
}
function df(e, t) {
  return (n) => {
    const o = n.getStarts(), r = n.getEnds(), i = o.getTime(), s = r.getTime(), a = o.getFullYear(), l = o.getMonth(), u = o.getDate(), c = new R(a, l, u).setHours(e), f = new R(a, l, u).setHours(t);
    return i >= c && i < f || s > c && s <= f || i < c && s > c || s > f && i < f;
  };
}
function ff(e, t) {
  return e === 0 && t === 24 ? (n) => n.sort(kt.compare.event.asc) : (n) => n.filter(df(e, t)).sort(kt.compare.event.asc);
}
function pf(e, t, n, o) {
  const r = {};
  return xa(t, n).forEach((s) => {
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
    const m = u(p), h = Go(m, c), w = Fo(p, h, c);
    l[f] = w;
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
  hf(n), ec(e, t, n);
  const o = n.sort(kt.compare.event.asc), r = !0, i = Go(o, r), s = Fo(n, i, r);
  return Qa(e, t, s), s;
}
function vf(e, t) {
  var h, w;
  const { start: n, end: o, panels: r, andFilters: i = [], options: s } = t, { events: a, idsOfDay: l } = e, u = (h = s == null ? void 0 : s.hourStart) != null ? h : 0, c = (w = s == null ? void 0 : s.hourEnd) != null ? w : 24, f = Je.and(...[Ja(n, o)].concat(i)), m = tc(a.filter(f)).groupBy(Qu);
  return r.reduce(
    (y, v) => {
      const { name: E, type: b } = v;
      return U(m[E]) ? y : ce(x({}, y), {
        [E]: b === "daygrid" ? gf(n, o, m[E]) : mf(l, {
          start: n,
          end: o,
          uiModelTimeColl: m[E],
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
function oc(e, t, n) {
  return t * n / e;
}
function rc(e, t, n) {
  return t <= e && e <= n;
}
const Qe = 22, fi = 100;
function ic(e, t) {
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
function sc(e, t, n) {
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
}, ac = (e, t, n, o) => {
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
  const o = e.getStarts(), r = e.getEnds(), { width: i, left: s } = ac(o, r, t, n);
  return e.width = i, e.left = s, e;
}
function Sf(e, t, n) {
  const { idsOfDay: o } = t, r = uf(t, {
    start: e[0],
    end: Re(e[e.length - 1])
  }), i = [];
  ic(r, (a) => {
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
const Tf = (e, t, n = !1) => (ic(e, (o) => {
  const r = o.getStarts(), i = o.getEnds(), { width: s, left: a } = ac(r, i, t, n);
  o.width = s, o.left = a, o.top += 1;
}), cc(e)), bf = (e) => e.filter((t) => !!t);
function cc(e) {
  return e.flatMap((t) => t.flatMap((n) => bf(n)));
}
const Cf = (e) => Array.from(
  new Set(
    Object.values(e).reduce(
      (t, n) => t.concat(...cc(n)),
      []
    )
  )
), lc = (e, t, {
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
function uc(e, {
  workweek: t = !1,
  visibleWeeksCount: n = 0,
  startDayOfWeek: o = 0,
  isAlways6Weeks: r = !0
}) {
  const i = new R(e), s = n > 0, a = s ? i : Ma(i), l = Yu(
    a,
    a.getDay() - o + (a.getDay() < o ? Ke : 0)
  ), u = l.getDay(), c = Wu(i).getDate(), f = ai(l, a), p = c + Math.abs(f);
  let m = tf;
  return s ? m = n : r === !1 && (m = Math.ceil(p / Ke)), gt(0, m).map(
    (h) => gt(0, Ke).reduce((w, y) => {
      const v = h * Ke + y, E = (v + u) % Ke;
      if (!t || t && !Fe(E)) {
        const b = It(l, v);
        w.push(b);
      }
      return w;
    }, [])
  );
}
function dc(e, { startDayOfWeek: t = rn.SUN, workweek: n }) {
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
function fc(e, t) {
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
  const o = Math.floor(oc(t, e, n));
  return Or(o, [0], [e - 1]);
}
function hi({
  rowsCount: e,
  columnsCount: t,
  container: n,
  narrowWeekend: o = !1,
  startDayOfWeek: r = rn.SUN
}) {
  if (U(n))
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
    } = n.getBoundingClientRect(), [m, h] = Nf(l, {
      left: u,
      top: c,
      clientLeft: n.clientLeft,
      clientTop: n.clientTop
    });
    if (m < 0 || h < 0 || m > f || h > p)
      return null;
    const w = o ? f / (t - s + 1) : f / t, y = i.map(
      (b) => o && Fe(b) ? w / 2 : w
    ), v = [];
    return y.forEach((b, k) => {
      k === 0 ? v.push(0) : v.push(v[k - 1] + y[k - 1]);
    }), {
      columnIndex: ti(v, (b) => m >= b),
      rowIndex: If(e, p, h)
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
    className: _(e, "grid-selection"),
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
  if (U(e))
    return null;
  const { startColumnIndex: o, endColumnIndex: r, endRowIndex: i, startRowIndex: s } = e;
  if (!rc(t, o, r))
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
  if (!(P(e) && P(t) && P(n)))
    return null;
  const { startRowIndex: o, startColumnIndex: r, endRowIndex: i, endColumnIndex: s } = e;
  if (!rc(
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
  return P(e) ? {
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
  return U(n) ? null : /* @__PURE__ */ d(gi, {
    type: "allday",
    gridSelectionData: n,
    weekDates: e,
    narrowWeekend: t
  });
}
function pc(e, t) {
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
function Ls(e) {
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
(Ls.prototype = new rt()).isPureReactComponent = !0, Ls.prototype.shouldComponentUpdate = function(e, t) {
  return Hr(this.props, e) || Hr(this.state, t);
};
var Hs = $.__b;
$.__b = function(e) {
  e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), Hs && Hs(e);
};
var Lf = typeof Symbol != "undefined" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function mc(e) {
  function t(n) {
    var o = pc({}, n);
    return delete o.ref, e(o, n.ref || null);
  }
  return t.$$typeof = Lf, t.render = t, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")", t;
}
var Hf = $.__e;
$.__e = function(e, t, n, o) {
  if (e.then) {
    for (var r, i = t; i = i.__; )
      if ((r = i.__c) && r.__c)
        return t.__e == null && (t.__e = n.__e, t.__k = n.__k), r.__c(e, t);
  }
  Hf(e, t, n, o);
};
var $s = $.unmount;
function vr() {
  this.__u = 0, this.t = null, this.__b = null;
}
function hc(e) {
  var t = e.__.__c;
  return t && t.__a && t.__a(e);
}
function Qn() {
  this.u = null, this.o = null;
}
$.unmount = function(e) {
  var t = e.__c;
  t && t.__R && t.__R(), t && e.__h === !0 && (e.type = null), $s && $s(e);
}, (vr.prototype = new rt()).__c = function(e, t) {
  var n = t.__c, o = this;
  o.t == null && (o.t = []), o.t.push(n);
  var r = hc(o.__v), i = !1, s = function() {
    i || (i = !0, n.__R = null, r ? r(a) : a());
  };
  n.__R = s;
  var a = function() {
    if (!--o.__u) {
      if (o.state.__a) {
        var u = o.state.__a;
        o.__v.__k[0] = function f(p, m, h) {
          return p && (p.__v = null, p.__k = p.__k && p.__k.map(function(w) {
            return f(w, m, h);
          }), p.__c && p.__c.__P === m && (p.__e && h.insertBefore(p.__e, p.__d), p.__c.__e = !0, p.__c.__P = h)), p;
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
        }), s.__c.__H = null), (s = pc({}, s)).__c != null && (s.__c.__P === l && (s.__c.__P = a), s.__c = null), s.__k = s.__k && s.__k.map(function(u) {
          return i(u, a, l);
        })), s;
      }(this.__b, n, o.__O = o.__P);
    }
    this.__b = null;
  }
  var r = t.__a && d(xe, null, e.fallback);
  return r && (r.__h = null), [d(xe, null, t.__a ? null : e.children), r];
};
var Bs = function(e, t, n) {
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
  var t = this, n = hc(t.__v), o = t.o.get(e);
  return o[0]++, function(r) {
    var i = function() {
      t.props.revealOrder ? (o.push(r), Bs(t, e, o)) : r();
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
    Bs(e, n, t);
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
var Gs = $.event;
function Wf() {
}
function Yf() {
  return this.cancelBubble;
}
function Vf() {
  return this.defaultPrevented;
}
$.event = function(e) {
  return Gs && (e = Gs(e)), e.persist = Wf, e.isPropagationStopped = Yf, e.isDefaultPrevented = Vf, e.nativeEvent = e;
};
var Fs = { configurable: !0, get: function() {
  return this.class;
} }, Us = $.vnode;
$.vnode = function(e) {
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
    })), e.props = o, n.class != n.className && (Fs.enumerable = "className" in n, n.className != null && (o.class = n.className), Object.defineProperty(o, "className", Fs));
  }
  e.$$typeof = Gf, Us && Us(e);
};
var zs = $.__r;
$.__r = function(e) {
  zs && zs(e), e.__c;
};
function jf(e) {
  return !!e.__k && (go(null, e), !0);
}
function Xf({ index: e, exceedCount: t, isClicked: n, onClickExceedCount: o }) {
  const r = () => o(e), i = { display: n ? "none" : "" };
  return t && !n ? /* @__PURE__ */ d("span", {
    className: _("weekday-exceed-in-week"),
    onClick: r,
    style: i
  }, /* @__PURE__ */ d(ne, {
    template: "weekGridFooterExceed",
    param: t
  })) : null;
}
function Kf({ isClicked: e, isClickedIndex: t, onClickCollapseButton: n }) {
  return e && t ? /* @__PURE__ */ d("span", {
    className: _("weekday-exceed-in-week"),
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
  const { borderRight: u, backgroundColor: c } = se(Q((p) => p.week.dayGrid, [])), f = {
    width: e,
    left: t,
    borderRight: l ? "none" : u,
    backgroundColor: c
  };
  return /* @__PURE__ */ d("div", {
    className: _("panel-grid"),
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
const gc = ln(function({
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
  return /* @__PURE__ */ d(xe, null, n.map((m, h) => {
    const w = X(c[h]), y = X(f[h]), v = t.filter(wf(m)), E = sc(v, r, Qe + 2), b = h === i, k = h === p;
    return /* @__PURE__ */ d(qf, {
      key: `panel-grid-${m.getDate()}`,
      width: w,
      left: y,
      index: h,
      exceedCount: E,
      isClicked: s,
      onClickExceedCount: a,
      isClickedIndex: b,
      onClickCollapseButton: l,
      isLastCell: k
    });
  }));
});
function Zf({ onMouseDown: e }) {
  return /* @__PURE__ */ d("span", {
    className: `${_("weekday-resize-handle")} ${_("handle-y")}`,
    onMouseDown: e,
    "data-testid": "horizontal-event-resize-icon"
  }, /* @__PURE__ */ d("i", {
    className: `${_("icon")} ${_("ic-handle-y")}`
  }));
}
const vc = Io(null), Jf = vc.Provider, xt = () => {
  const e = Mn(vc);
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
function _c(e) {
  return z(
    Q(
      (t) => t.calendar.calendars.find((n) => n.id === e),
      [e]
    )
  );
}
function yi(e) {
  var n;
  const t = _c((n = e == null ? void 0 : e.calendarId) != null ? n : null);
  return W(
    () => ({
      color: t == null ? void 0 : t.color,
      borderColor: t == null ? void 0 : t.borderColor,
      backgroundColor: t == null ? void 0 : t.backgroundColor,
      dragBackgroundColor: t == null ? void 0 : t.dragBackgroundColor
    }),
    [t]
  );
}
var yc = /* @__PURE__ */ ((e) => (e.ESCAPE = "Escape", e))(yc || {});
const ep = {
  Escape: 27
}, Ws = 3;
function _t(e, t) {
  const n = za(), o = te(e), r = te(t);
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
  return Math.abs(e - n) >= Ws || Math.abs(t - o) >= Ws;
}
function en(e, { onInit: t, onDragStart: n, onDrag: o, onMouseUp: r, onPressESCKey: i } = {}) {
  const { initDrag: s, setDragging: a, cancelDrag: l, reset: u } = ye("dnd"), c = za(), f = te(c.getState().dnd);
  _t(At, (S) => {
    f.current = S;
  });
  const [p, m] = ae(!1), h = te(null), w = te(null), y = te(null), v = Q(
    (S) => {
      !np(S.button) || (S.currentTarget && (S.currentTarget.ondragstart = function() {
        return !1;
      }), S.preventDefault(), m(!0), s({
        draggingItemType: e,
        initX: S.clientX,
        initY: S.clientY
      }), t == null || t(S, f.current));
    },
    [t, e, s]
  ), E = Q(
    (S) => {
      const {
        initX: N,
        initY: M,
        draggingState: L,
        draggingItemType: H
      } = f.current;
      if (H !== e) {
        m(!1), u();
        return;
      }
      if (!(P(N) && P(M) && !op(N, M, S.clientX, S.clientY))) {
        if (L <= Ve.INIT) {
          a({ x: S.clientX, y: S.clientY }), n == null || n(S, f.current);
          return;
        }
        a({ x: S.clientX, y: S.clientY }), o == null || o(S, f.current);
      }
    },
    [e, o, n, a, u]
  ), b = Q(
    (S) => {
      S.stopPropagation(), p && (r == null || r(S, f.current), m(!1), u());
    },
    [p, r, u]
  ), k = Q(
    (S) => {
      tp(S, yc.ESCAPE) && (m(!1), l(), i == null || i(S, f.current));
    },
    [i, l]
  );
  return re(() => {
    h.current = E, w.current = b, y.current = k;
  }, [k, E, b]), re(() => {
    const S = (L) => {
      var H;
      return (H = h.current) == null ? void 0 : H.call(h, L);
    }, N = (L) => {
      var H;
      return (H = w.current) == null ? void 0 : H.call(w, L);
    }, M = (L) => {
      var H;
      return (H = y.current) == null ? void 0 : H.call(y, L);
    };
    return p ? (document.addEventListener("mousemove", S), document.addEventListener("mouseup", N), document.addEventListener("keydown", M), () => {
      document.removeEventListener("mousemove", S), document.removeEventListener("mouseup", N), document.removeEventListener("keydown", M);
    }) : an;
  }, [p, u]), v;
}
function wi(e, t) {
  return e ? t : void 0;
}
function wc(e) {
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
  const { exceedLeft: i, exceedRight: s } = e, { color: a, backgroundColor: l, dragBackgroundColor: u, borderColor: c } = Ca(
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
  }, p = wc(t);
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
  const { top: s, left: a, width: l, model: u } = t, c = wc(e), f = e ? {} : {
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
  eventBody: _("weekday-event"),
  eventTitle: _("weekday-event-title"),
  eventDot: _("weekday-event-dot"),
  moveEvent: _("dragging--move-event"),
  resizeEvent: _("dragging--resize-horizontal-event")
};
function wt({
  flat: e = !1,
  uiModel: t,
  eventHeight: n,
  headerHeight: o,
  resizingWidth: r = null,
  movingLeft: i = null
}) {
  const { currentView: s } = z(cn), { useDetailPopup: a, isReadOnly: l } = z(je), { setDraggingEventUIModel: u } = ye("dnd"), { showDetailPopup: c } = ye("popup"), f = xt(), p = Ne(), m = yi(t.model), [h, w] = ae(!1), y = te(null), { isReadOnly: v, id: E, calendarId: b } = t.model, k = !l && !v && U(r) && U(i), S = (T) => {
    u(t), f == null || f.classList.add(T);
  }, N = (T) => {
    w(!1), f == null || f.classList.remove(T);
  };
  _t(At, ({ draggingEventUIModel: T, draggingState: K }) => {
    K === Ve.DRAGGING && (T == null ? void 0 : T.cid()) === t.cid() && U(r) && U(i) ? w(!0) : w(!1);
  }), re(() => {
    k && p.fire("afterRenderEvent", t.model.toEventObject());
  }, []);
  const M = en(On.resizeEvent("dayGrid", `${t.cid()}`), {
    onDragStart: () => S(nt.resizeEvent),
    onMouseUp: () => N(nt.resizeEvent),
    onPressESCKey: () => N(nt.resizeEvent)
  }), L = en(On.moveEvent("dayGrid", `${t.cid()}`), {
    onDragStart: () => {
      k && S(nt.moveEvent);
    },
    onMouseUp: (T, { draggingState: K }) => {
      N(nt.moveEvent);
      const oe = K <= Ve.INIT;
      oe && a && y.current && c(
        {
          event: t.model,
          eventRect: y.current.getBoundingClientRect()
        },
        e
      ), oe && p.fire("clickEvent", { event: t.model.toEventObject(), nativeEvent: T });
    },
    onPressESCKey: () => N(nt.moveEvent)
  }), H = (T) => {
    T.stopPropagation(), k && M(T);
  }, Y = (T) => {
    T.stopPropagation(), L(T);
  }, B = !h && s === "month" && t.model.category === "time" && Nt(t.model.start, t.model.end), Z = !k || e || h || t.exceedRight, ee = sp({
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
    isDraggingTarget: h,
    calendarColor: m
  });
  return /* @__PURE__ */ d("div", {
    className: _("weekday-event-block", {
      "weekday-exceed-left": t.exceedLeft,
      "weekday-exceed-right": t.exceedRight
    }),
    style: ee,
    "data-testid": wi(k, ap(t)),
    "data-calendar-id": b,
    "data-event-id": E,
    ref: y
  }, /* @__PURE__ */ d("div", {
    className: nt.eventBody,
    style: ce(x({}, D), {
      backgroundColor: B ? null : D.backgroundColor,
      borderLeft: B ? null : D.borderLeft
    }),
    onMouseDown: Y
  }, B ? /* @__PURE__ */ d("span", {
    className: nt.eventDot,
    style: { backgroundColor: D.backgroundColor }
  }) : null, /* @__PURE__ */ d("span", {
    className: nt.eventTitle
  }, /* @__PURE__ */ d(ne, {
    template: t.model.category,
    param: t.model
  })), Z ? null : /* @__PURE__ */ d(Zf, {
    onMouseDown: H
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
    if (P(r.x) && P(r.y)) {
      const i = e({
        clientX: r.x,
        clientY: r.y
      });
      i && n(i);
    }
  });
  const o = Q(() => n(null), []);
  return [t, o];
}
const cp = (e, t, n) => {
  function o(r) {
    return new RegExp(`^event/${t}/${n}/\\d+$`).test(r);
  }
  return U(e) ? null : o(e) ? it(e.split("/")) : null;
};
function fn(e, t) {
  const [n, o] = ae(!1), [r, i] = ae(!1), [s, a] = ae(null);
  return _t(At, ({ draggingItemType: u, draggingEventUIModel: c, draggingState: f }) => {
    const p = cp(u, e, t), m = Number(p) === (c == null ? void 0 : c.cid()), h = f === Ve.IDLE, w = f === Ve.CANCELED;
    U(s) && m && a(c), P(s) && (h || w) && (o(!0), i(w));
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
  } = fn("dayGrid", "move"), a = te(null), [l, u] = dn(t), { columnIndex: c } = l != null ? l : {}, f = W(
    () => U(i) ? null : e.findIndex(({ left: m }) => m === i.left),
    [e, i]
  ), p = W(() => {
    if (U(c) || U(a.current) || U(f))
      return null;
    const m = f + c - a.current;
    return m < 0 ? -e[-m].left : e[m].left;
  }, [c, e, f]);
  return re(() => {
    U(a.current) && P(c) && (a.current = c);
  }, [c]), un(() => {
    if (!r && P(i) && P(c) && P(p) && c !== a.current && P(a.current)) {
      const h = c - a.current, w = new R(i.model.getStarts()), y = new R(i.model.getEnds());
      w.addDate(h), y.addDate(h), n.fire("beforeUpdateEvent", {
        event: i.model.toEventObject(),
        changes: {
          start: w,
          end: y
        }
      });
    }
    s(), u(), a.current = null;
  }, o), W(
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
  return U(n) ? null : /* @__PURE__ */ d(wt, {
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
  } = fn("dayGrid", "resize"), [l, u] = dn(n), { columnIndex: c } = l != null ? l : {}, f = W(() => s ? dp(s, e) : { start: -1, end: -1 }, [e, s]), p = W(() => f.start > -1 && P(c) ? t[f.start][c] : null, [c, t, f.start]);
  return un(() => {
    if (!i && P(s) && P(c) && f.start <= c && f.end !== c) {
      const h = e[c];
      o.fire("beforeUpdateEvent", {
        event: s.model.toEventObject(),
        changes: { end: h }
      });
    }
    u(), a();
  }, r), W(
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
  return U(o) ? null : /* @__PURE__ */ d(wt, {
    uiModel: o,
    eventHeight: Qe,
    headerHeight: 0,
    resizingWidth: r
  });
}
function Ge() {
  const [e, t] = ae(null), n = Q((o) => {
    o && t(o);
  }, []);
  return [e, n];
}
function Ec(e, t) {
  const [n, o] = ae(0), [r, i] = ae(!1), { updateDayGridRowHeight: s } = ye("weekViewLayout"), a = Q(
    (u) => {
      i(!0), o(u), s({
        rowName: t,
        height: (e + 1) * Qe
      });
    },
    [t, e, s]
  ), l = Q(() => {
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
  const { useFormPopup: i, gridSelection: s } = z(je), { enableDblClick: a, enableClick: l } = s, { setGridSelection: u, addGridSelection: c, clearAll: f } = ye("gridSelection"), { hideAllPopup: p, showFormPopup: m } = ye("popup"), h = Ne(), w = xt(), [y, v] = ae(null), [E, b] = ae(null), k = te(!1), S = te(null);
  _t(
    Q((D) => D.gridSelection[e], [e]),
    (D) => {
      S.current = D;
    }
  ), _t(At, ({ draggingState: D, draggingItemType: T }) => {
    k.current = T === N && D >= Ve.INIT;
  });
  const N = On.gridSelection(e), M = (D) => {
    const T = r(D);
    P(E) && P(T) && u(e, t(E, T));
  }, [L, H] = hp({
    onClick: (D) => {
      l && B(D, !0);
    },
    onDblClick: (D) => {
      a && B(D, !0);
    },
    delay: 250
  }), Y = (D) => {
    const T = D.detail <= 1;
    if (!(!l && (!a || T))) {
      if (l) {
        T ? L(D) : H(D);
        return;
      }
      B(D, !0);
    }
  }, B = (D, T) => {
    var K;
    if (T && M(D), P(S.current)) {
      const [oe, Ce] = vp(
        ...n(o, S.current)
      );
      if (i && P(y)) {
        const Oe = {
          top: (D.clientY + y.y) / 2,
          left: (D.clientX + y.x) / 2
        };
        m({
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
      const j = `.${_(gp[e])}.${_(
        "grid-selection"
      )}`, de = Array.from(
        (K = w == null ? void 0 : w.querySelectorAll(j)) != null ? K : []
      );
      h.fire("selectDateTime", {
        start: oe.toDate(),
        end: Ce.toDate(),
        isAllday: e !== "timeGrid",
        nativeEvent: D,
        gridSelectionElements: de
      });
    }
  }, Z = Q(() => {
    v(null), b(null), u(e, null);
  }, [u, e]), ee = en(N, {
    onInit: (D) => {
      i && (v({
        x: D.clientX,
        y: D.clientY
      }), p());
      const T = r(D);
      P(T) && b(T), i || c(e, S.current);
    },
    onDragStart: (D) => {
      M(D);
    },
    onDrag: (D) => {
      k.current && M(D);
    },
    onMouseUp: (D, { draggingState: T }) => {
      D.stopPropagation();
      const K = T <= Ve.INIT;
      K ? Y(D) : B(D, K);
    },
    onPressESCKey: Z
  });
  return re(() => Z, [Z]), ee;
}
const _p = "alldayTitle";
function Dc({
  events: e,
  weekDates: t,
  height: n = Jt,
  options: o = {},
  rowStyleInfo: r,
  gridColWidthMap: i
}) {
  const { isReadOnly: s } = z(je), a = se(Ka), [l, u] = Ge(), { narrowWeekend: c = !1, startDayOfWeek: f = rn.SUN } = o, p = W(() => Math.max(0, ...e.map(({ top: S }) => S)), [e]), m = W(
    () => hi({
      container: l,
      rowsCount: 1,
      columnsCount: t.length,
      narrowWeekend: c,
      startDayOfWeek: f
    }),
    [l, t.length, c, f]
  ), { clickedIndex: h, isClickedCount: w, onClickExceedCount: y, onClickCollapseButton: v } = Ec(p, "allday"), E = W(
    () => e.filter(pi(n, Qe + ba)).map((S) => /* @__PURE__ */ d(wt, {
      key: `allday-DayEvent-${S.cid()}`,
      uiModel: S,
      eventHeight: Qe,
      headerHeight: 0
    })),
    [e, n]
  ), b = Ei({
    type: "dayGridWeek",
    gridPositionFinder: m,
    dateCollection: t,
    selectionSorter: Lr.sortSelection,
    dateGetter: Lr.getDateFromCollection
  }), k = (S) => {
    const N = S.target;
    s || !N.classList.contains(_("panel-grid")) || b(S);
  };
  return /* @__PURE__ */ d(xe, null, /* @__PURE__ */ d("div", {
    className: _("panel-title"),
    style: a
  }, /* @__PURE__ */ d(ne, {
    template: _p,
    param: "alldayTitle"
  })), /* @__PURE__ */ d("div", {
    className: _("allday-panel"),
    ref: u,
    onMouseDown: k
  }, /* @__PURE__ */ d("div", {
    className: _("panel-grid-wrapper")
  }, /* @__PURE__ */ d(gc, {
    uiModels: e,
    weekDates: t,
    narrowWeekend: c,
    height: n,
    clickedIndex: h,
    isClickedCount: w,
    onClickExceedCount: y,
    onClickCollapseButton: v
  })), /* @__PURE__ */ d("div", {
    className: _("panel-allday-events")
  }, E), /* @__PURE__ */ d(pp, {
    weekDates: t,
    gridPositionFinder: m,
    gridColWidthMap: i
  }), /* @__PURE__ */ d(up, {
    rowStyleInfo: r,
    gridPositionFinder: m
  }), /* @__PURE__ */ d(Pf, {
    weekDates: t,
    narrowWeekend: c
  })));
}
function Sc({
  events: e,
  weekDates: t,
  category: n,
  height: o = Jt,
  options: r = {}
}) {
  const i = se(Ka), s = W(() => Math.max(0, ...e.map(({ top: h }) => h)), [e]), { narrowWeekend: a = !1 } = r, l = `${n}Title`, { clickedIndex: u, isClickedCount: c, onClickExceedCount: f, onClickCollapseButton: p } = Ec(s, n), m = W(
    () => e.filter(pi(o, Qe + ba)).map((h) => /* @__PURE__ */ d(wt, {
      key: `${n}-DayEvent-${h.cid()}`,
      uiModel: h,
      eventHeight: Qe,
      headerHeight: 0
    })),
    [n, e, o]
  );
  return /* @__PURE__ */ d(xe, null, /* @__PURE__ */ d("div", {
    className: _("panel-title"),
    style: i
  }, /* @__PURE__ */ d(ne, {
    template: l,
    param: n
  })), /* @__PURE__ */ d("div", {
    className: _("allday-panel")
  }, /* @__PURE__ */ d("div", {
    className: _("panel-grid-wrapper")
  }, /* @__PURE__ */ d(gc, {
    uiModels: e,
    weekDates: t,
    narrowWeekend: a,
    height: o,
    clickedIndex: u,
    isClickedCount: c,
    onClickExceedCount: f,
    onClickCollapseButton: p
  })), /* @__PURE__ */ d("div", {
    className: _(`panel-${n}-events`)
  }, m)));
}
const ve = {
  detailItem: _("detail-item"),
  detailItemIndent: _("detail-item", "detail-item-indent"),
  detailItemSeparate: _("detail-item", "detail-item-separate"),
  sectionDetail: _("popup-section", "section-detail"),
  content: _("content"),
  locationIcon: _("icon", "ic-location-b"),
  repeatIcon: _("icon", "ic-repeat-b"),
  userIcon: _("icon", "ic-user-b"),
  stateIcon: _("icon", "ic-state-b"),
  calendarDotIcon: _("icon", "calendar-dot")
};
function yp({ event: e }) {
  var l, u;
  const { location: t, recurrenceRule: n, attendees: o, state: r, calendarId: i, body: s } = e, a = _c(i);
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
  sectionHeader: _("popup-section", "section-header"),
  content: _("content"),
  eventTitle: _("event-title")
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
const Ep = _("see-more-popup-slot"), Dp = _("event-form-popup-slot"), Sp = _("event-detail-popup-slot"), $r = 8, Tp = [
  "isPrivate",
  "isAllday",
  "isPending",
  "isFocused",
  "isVisible",
  "isReadOnly"
];
var Yt = /* @__PURE__ */ ((e) => (e.right = "right", e.left = "left", e))(Yt || {}), Vt = /* @__PURE__ */ ((e) => (e.top = "top", e.bottom = "bottom", e))(Vt || {});
const Tc = Io(null);
function bp({ children: e }) {
  const [t, n] = Ge(), [o, r] = Ge(), [i, s] = Ge(), [a, l] = Ge(), u = {
    container: t,
    seeMorePopupSlot: o,
    formPopupSlot: i,
    detailPopupSlot: a
  };
  return /* @__PURE__ */ d(Tc.Provider, {
    value: u
  }, e, /* @__PURE__ */ d("div", {
    ref: n,
    className: _("floating-layer")
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
  const t = Mn(Tc);
  if (Be(t))
    throw new Error("FloatingLayerProvider is not found");
  return (n = t == null ? void 0 : t[e]) != null ? n : null;
};
function bc(e, t, n) {
  return e + n.height > t.top + t.height;
}
function Cc(e, t, n) {
  return e + n.width > t.left + t.width;
}
const Cp = (e) => e.popup[Po.Form], kp = (e) => e.popup[Po.Detail], Np = (e) => e.popup[Po.SeeMore], Le = {
  popupContainer: _("popup-container"),
  detailContainer: _("detail-container"),
  topLine: _("popup-top-line"),
  border: _("popup-arrow-border"),
  fill: _("popup-arrow-fill"),
  sectionButton: _("popup-section", "section-button"),
  content: _("content"),
  editIcon: _("icon", "ic-edit"),
  deleteIcon: _("icon", "ic-delete"),
  editButton: _("edit-button"),
  deleteButton: _("delete-button"),
  verticalLine: _("vertical-line")
};
function Ip(e, t, n) {
  let o = e.top + e.height / 2 - n.height / 2, r = e.left + e.width;
  return bc(o, t, n) && (o = t.top + t.height - n.height), Cc(r, t, n) && (r = e.left - n.width), [
    Math.max(o, t.top) + window.scrollY,
    Math.max(r, t.left) + window.scrollX
  ];
}
function Mp(e, t, n) {
  const o = e.top + e.height / 2 + window.scrollY, s = e.left + e.width + n.width > t.left + t.width ? Yt.right : Yt.left;
  return { top: o, direction: s };
}
function Ap() {
  const { useFormPopup: e } = z(je), t = z(kp), { event: n, eventRect: o } = t != null ? t : {}, { showFormPopup: r, hideDetailPopup: i } = ye("popup"), s = yi(n), a = xt(), l = Di("detailPopupSlot"), u = Ne(), c = te(null), [f, p] = ae({}), [m, h] = ae(0), [w, y] = ae(
    Yt.left
  ), v = W(() => {
    const ee = w === Yt.right, D = w === Yt.left;
    return _("popup-arrow", { right: ee, left: D });
  }, [w]);
  if (ht(() => {
    if (c.current && o && a) {
      const ee = a.getBoundingClientRect(), D = c.current.getBoundingClientRect(), [T, K] = Ip(o, ee, D), { top: oe, direction: Ce } = Mp(
        o,
        ee,
        D
      );
      p({ top: T, left: K }), h(oe - T - $r), y(Ce);
    }
  }, [o, a]), U(n) || U(o) || U(l))
    return null;
  const {
    title: E = "",
    isAllday: b = !1,
    start: k = new R(),
    end: S = new R(),
    location: N,
    state: M,
    isReadOnly: L,
    isPrivate: H
  } = n, Y = {
    top: o.top + o.height / 2,
    left: o.left + o.width / 2
  }, B = () => {
    e ? r({
      isCreationPopup: !1,
      event: n,
      title: E,
      location: N,
      start: k,
      end: S,
      isAllday: b,
      isPrivate: H,
      eventState: M,
      popupArrowPointPosition: Y
    }) : u.fire("beforeUpdateEvent", { event: n.toEventObject(), changes: {} });
  }, Z = () => {
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
    }), !L && /* @__PURE__ */ d("div", {
      className: Le.sectionButton
    }, /* @__PURE__ */ d("button", {
      type: "button",
      className: Le.editButton,
      onClick: B
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
      onClick: Z
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
      className: v
    }, /* @__PURE__ */ d("div", {
      className: Le.border,
      style: { top: m }
    }, /* @__PURE__ */ d("div", {
      className: Le.fill
    })))),
    l
  );
}
const fo = {
  dropdownMenu: _("dropdown-menu"),
  dropdownMenuItem: _("dropdown-menu-item"),
  dotIcon: _("icon", "dot"),
  content: _("content")
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
    className: _("popup-section", ...t),
    onClick: n
  }, e);
}
function kc() {
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
  popupSectionItem: _("popup-section-item", "popup-button"),
  dotIcon: _("icon", "dot"),
  content: _("content", "event-calendar")
};
function Lp({ calendars: e, selectedCalendarId: t, formStateDispatch: n }) {
  const { isOpened: o, setOpened: r, toggleDropdown: i } = kc(), s = e.find((c) => c.id === t), { backgroundColor: a = "", name: l = "" } = s != null ? s : {}, u = (c) => n({ type: ct.setCalendarId, calendarId: e[c].id });
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
    className: _("icon", "ic-dropdown-arrow", { open: o })
  })), o && /* @__PURE__ */ d(Rp, {
    calendars: e,
    setOpened: r,
    onChangeIndex: u
  }));
}
const Ys = {
  closeButton: _("popup-button", "popup-close"),
  closeIcon: _("icon", "ic-close")
};
function Nc({ type: e, close: t }) {
  const { hideAllPopup: n } = ye("popup"), o = () => {
    n(), Cn(t) && t();
  };
  return /* @__PURE__ */ d("button", {
    type: "button",
    className: Ys.closeButton,
    onClick: o
  }, e === "moreEvents" ? /* @__PURE__ */ d(ne, {
    template: "monthMoreClose"
  }) : /* @__PURE__ */ d("i", {
    className: Ys.closeIcon
  }));
}
const Hp = {
  confirmButton: _("popup-button", "popup-confirm")
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
  const r = z(Ya)[e];
  if (U(r))
    return n;
  let i = r(t);
  return be(i) || (i = n), i;
}
const ze = {
  datePickerContainer: _("datepicker-container"),
  datePicker: _("popup-section-item", "popup-date-picker"),
  allday: _("popup-section-item", "popup-section-allday"),
  dateIcon: _("icon", "ic-date"),
  dateDash: _("popup-date-dash"),
  content: _("content")
}, Bp = mc(function({ start: t, end: n, isAllday: o = !1, formStateDispatch: r }, i) {
  const { usageStatistics: s } = z(je), a = te(null), l = te(null), u = te(null), c = te(null), f = No({
    template: "startDatePlaceholder",
    defaultValue: "Start Date"
  }), p = No({
    template: "endDatePlaceholder",
    defaultValue: "End Date"
  }), m = () => r({ type: ct.setAllday, isAllday: !o });
  return re(() => {
    if (a.current && l.current && u.current && c.current) {
      const h = new R(t), w = new R(n);
      o && (h.setHours(12, 0, 0), w.setHours(13, 0, 0)), i.current = Il.createRangePicker({
        startpicker: {
          date: h.toDate(),
          input: l.current,
          container: a.current
        },
        endpicker: {
          date: w.toDate(),
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
    onClick: m
  }, /* @__PURE__ */ d("span", {
    className: _("icon", {
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
    className: _("hidden-input"),
    value: o ? "true" : "false",
    checked: o
  })));
}), Gp = ["Busy", "Free"], to = {
  popupSectionItem: _("popup-section-item", "dropdown-menu-item"),
  dropdownMenu: _("dropdown-menu"),
  icon: _("icon"),
  content: _("content")
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
  popupSectionItem: _("popup-section-item", "popup-button"),
  stateIcon: _("icon", "ic-state"),
  arrowIcon: _("icon", "ic-dropdown-arrow"),
  content: _("content", "event-state")
};
function Up({ eventState: e = "Busy", formStateDispatch: t }) {
  const { isOpened: n, setOpened: o, toggleDropdown: r } = kc(), i = (s) => t({ type: ct.setState, state: s });
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
  popupSectionItem: _("popup-section-item", "popup-section-location"),
  locationIcon: _("icon", "ic-location"),
  content: _("content")
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
  popupSectionItem: _("popup-section-item", "popup-section-title"),
  privateButton: _("popup-section-item", "popup-section-private", "popup-button"),
  titleIcon: _("icon", "ic-title"),
  content: _("content")
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
    className: _("icon", { "ic-private": t, "ic-public": !t })
  }), /* @__PURE__ */ d("input", {
    name: "isPrivate",
    type: "checkbox",
    className: _("hidden-input"),
    value: t ? "true" : "false",
    checked: t
  })));
}
const oo = {
  popupContainer: _("popup-container"),
  formContainer: _("form-container"),
  popupArrowBorder: _("popup-arrow-border"),
  popupArrowFill: _("popup-arrow-fill")
};
function Yp(e, t, n) {
  let o = e.top - n.height - $r, r = e.left - n.width / 2, i = Vt.bottom;
  return o < t.top && (i = Vt.top, o = e.top + $r), bc(o, t, n) && (o = t.top + t.height - n.height), Cc(r, t, n) && (r = t.left + t.width - n.width), {
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
    return e[i] instanceof R ? vt(e[i], r) !== 0 && (n[i] = r) : e[i] !== r && (n[i] = r), n;
  }, {});
}
function Xp() {
  var L;
  const { calendars: e } = z(Lo), { hideAllPopup: t } = ye("popup"), n = z(Cp), { start: o, end: r, popupArrowPointPosition: i, close: s, isCreationPopup: a, event: l } = n != null ? n : {}, u = Ne(), c = Di("formPopupSlot"), [f, p] = Pp((L = e[0]) == null ? void 0 : L.id), m = te(null), h = te(null), [w, y] = ae({}), [v, E] = ae(0), [b, k] = ae(
    Vt.bottom
  ), S = xt(), N = W(() => {
    const H = b === Vt.top, Y = b === Vt.bottom;
    return _("popup-arrow", { top: H, bottom: Y });
  }, [b]);
  if (ht(() => {
    if (h.current && i && S) {
      const H = S.getBoundingClientRect(), Y = h.current.getBoundingClientRect(), { top: B, left: Z, direction: ee } = Yp(
        i,
        H,
        Y
      ), D = i.left - Z;
      y({ left: Z, top: B }), E(D), k(ee);
    }
  }, [S, i]), re(() => {
    P(n) && P(l) && p({
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
    U(n) && p({ type: ct.reset });
  }, [p, n]), U(o) || U(r) || U(c))
    return null;
  const M = (H) => {
    var Z, ee;
    H.preventDefault();
    const Y = new FormData(H.target), B = x({}, f);
    if (Y.forEach((D, T) => {
      B[T] = Vp(T) ? D === "true" : D;
    }), B.start = new R((Z = m.current) == null ? void 0 : Z.getStartDate()), B.end = new R((ee = m.current) == null ? void 0 : ee.getEndDate()), a)
      u.fire("beforeCreateEvent", B);
    else if (l) {
      const D = jp(l, B);
      u.fire("beforeUpdateEvent", { event: l.toEventObject(), changes: D });
    }
    t();
  };
  return _i(
    /* @__PURE__ */ d("div", {
      role: "dialog",
      className: oo.popupContainer,
      ref: h,
      style: w
    }, /* @__PURE__ */ d("form", {
      onSubmit: M
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
      ref: m
    }), /* @__PURE__ */ d(Up, {
      eventState: f.state,
      formStateDispatch: p
    }), /* @__PURE__ */ d(Nc, {
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
      style: { left: v }
    }, /* @__PURE__ */ d("div", {
      className: oo.popupArrowFill
    }))))),
    c
  );
}
function Kp(e) {
  return Object.values(e.popup).find((t) => P(t));
}
function qp() {
  const e = z(Kp), { hideAllPopup: t } = ye("popup"), n = P(e), o = (r) => {
    var i;
    r.stopPropagation(), (i = e == null ? void 0 : e.close) == null || i.call(e), t();
  };
  return /* @__PURE__ */ d("div", {
    className: _("popup-overlay"),
    style: { display: n ? "block" : "none" },
    onClick: o
  });
}
const ro = {
  container: _("see-more-container"),
  seeMore: _("see-more"),
  header: _("see-more-header"),
  list: _("month-more-list")
};
function Zp() {
  const e = z(Np), { date: t, events: n = [], popupPosition: o } = e != null ? e : {}, { moreView: r, moreViewTitle: i } = Za(), s = Di("seeMorePopupSlot"), a = Ne(), l = te(null), u = U(t) || U(o) || U(s);
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
    }), /* @__PURE__ */ d(Nc, {
      type: "moreEvents"
    })), /* @__PURE__ */ d("div", {
      className: ro.list,
      style: p
    }, n.map((m) => /* @__PURE__ */ d(wt, {
      key: `see-more-event-item-${m.cid()}`,
      uiModel: m,
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
  const { backgroundColor: i } = se(Xa), [s, a] = Ge(), { setLastPanelType: l, updateLayoutHeight: u } = ye("weekViewLayout"), c = W(() => `${_("layout")} ${o}`, [o]);
  return ht(() => {
    if (s) {
      const f = () => u(s.offsetHeight);
      return f(), window.addEventListener("resize", f), () => window.removeEventListener("resize", f);
    }
    return an;
  }, [s, u]), ht(() => {
    if (s && r) {
      const f = Nn(e), p = f[f.length - 1];
      !be(p) && !lo(p) && !U(p) && l(p.props.name);
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
  const n = se(Q((c) => c.week.panelResizer.border, [])), o = Qp(t, n), r = ce(x({}, o), {
    display: "none",
    border: "none",
    backgroundColor: "#999"
  }), [i, s] = ae(r), a = te(null), { updateDayGridRowHeightByDiff: l } = ye("weekViewLayout"), u = en(Qf.panelResizer, {
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
    className: _("panel-resizer"),
    style: o,
    onMouseDown: u
  }), /* @__PURE__ */ d("div", {
    className: _("panel-resizer-guide"),
    style: i
  }));
}
function Vs(e, t) {
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
  return t && (c.width = Vs(t, r), c.height = "100%"), e && (c.width = "100%", c.height = Vs(e, i)), n && (c.overflowX = "auto"), o && (c.overflowY = "auto"), ce(x({}, c), { minHeight: s, maxHeight: a, minWidth: l, maxWidth: u });
}
const jt = mc(function({
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
  resizerHeight: m = Rr,
  resizable: h,
  children: w
}, y) {
  const { updateDayGridRowHeight: v } = ye("weekViewLayout"), { height: E } = z(
    Q((N) => {
      var M;
      return (M = N.weekViewLayout.dayGridRows[t]) != null ? M : {};
    }, [t])
  ), b = E != null ? E : o;
  ht(() => {
    v({ rowName: t, height: o });
  }, [o, t, v]);
  const k = tm({
    initialWidth: n,
    initialHeight: b,
    overflowX: r,
    overflowY: i,
    maxExpandableWidth: s,
    maxExpandableHeight: a,
    minHeight: l,
    maxHeight: u,
    minWidth: c,
    maxWidth: f
  }), S = W(() => U(h) || ei(h) ? !!h : h.includes(t), [h, t]);
  return /* @__PURE__ */ d(xe, null, /* @__PURE__ */ d("div", {
    className: _("panel", t),
    style: k,
    ref: y
  }, w), S ? /* @__PURE__ */ d(em, {
    name: t,
    width: p,
    height: m
  }) : null);
}), Ic = "timegrid", Se = (e) => `${Ic}-${e}`, nm = {
  second: "HH:mm:ss",
  minute: "HH:mm",
  hour: "HH:mm",
  date: "HH:mm",
  month: "MM.DD",
  year: "YYYY.MM.DD"
}, We = {
  time: _("event-time"),
  content: _("event-time-content"),
  travelTime: _("travel-time"),
  resizeHandleX: _("resize-handler-x"),
  moveEvent: _("dragging--move-event"),
  resizeEvent: _("dragging--resize-vertical-event")
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
    comingDurationHeight: m,
    croppedStart: h,
    croppedEnd: w
  } = e, y = "white", v = 2, E = 2, b = om(s), { color: k, backgroundColor: S, borderColor: N, dragBackgroundColor: M } = Ca(
    e,
    o
  ), L = {
    width: rm(c || l, b),
    height: `calc(${X(Math.max(a, r))} - ${E}px)`,
    top: X(i),
    left: u || X(s),
    borderRadius: v,
    borderLeft: `3px solid ${N}`,
    marginLeft: b,
    color: k,
    backgroundColor: t ? M : S,
    opacity: t ? 0.5 : 1,
    zIndex: n ? 1 : 0
  }, H = {
    height: X(f),
    borderBottom: `1px dashed ${y}`
  }, Y = {
    height: X(p)
  }, B = {
    height: X(m),
    borderTop: `1px dashed ${y}`
  };
  return h && (L.borderTopLeftRadius = 0, L.borderTopRightRadius = 0), w && (L.borderBottomLeftRadius = 0, L.borderBottomRightRadius = 0), {
    containerStyle: L,
    goingDurationStyle: H,
    modelDurationStyle: Y,
    comingDurationStyle: B
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
  } = z(je), a = yi(e.model), { collapseDuplicateEvents: l } = s, u = xt(), { showDetailPopup: c } = ye("popup"), { setDraggingEventUIModel: f } = ye("dnd"), { setSelectedDuplicateEventCid: p } = ye("weekViewLayout"), m = Ne(), h = te(null), [w, y] = ae(!1), { model: v, goingDurationHeight: E, modelDurationHeight: b, comingDurationHeight: k, croppedEnd: S } = e, { id: N, calendarId: M, customStyle: L } = v, H = P(t), { containerStyle: Y, goingDurationStyle: B, modelDurationStyle: Z, comingDurationStyle: ee } = im(
    { uiModel: e, isDraggingTarget: w, hasNextStartTime: H, calendarColor: a, minHeight: o }
  ), D = H || n;
  _t(At, ({ draggingEventUIModel: ue, draggingState: Ue }) => {
    Ue === Ve.DRAGGING && (ue == null ? void 0 : ue.cid()) === e.cid() && !H && !n ? y(!0) : y(!1);
  }), re(() => {
    n || m.fire("afterRenderEvent", e.model.toEventObject());
  }, []);
  const T = (ue) => {
    f(e), u == null || u.classList.add(ue);
  }, K = (ue) => {
    y(!1), u == null || u.classList.remove(ue);
  }, oe = en(On.moveEvent("timeGrid", `${e.cid()}`), {
    onDragStart: () => {
      Oe && T(We.moveEvent);
    },
    onMouseUp: (ue, { draggingState: Ue }) => {
      K(We.moveEvent);
      const Pe = Ue <= Ve.INIT;
      if (Pe && l) {
        const lt = e.duplicateEvents.length > 0 ? e.cid() : Ro;
        p(lt);
      }
      Pe && r && h.current && c(
        {
          event: e.model,
          eventRect: h.current.getBoundingClientRect()
        },
        !1
      ), Pe && m.fire("clickEvent", { event: e.model.toEventObject(), nativeEvent: ue });
    },
    onPressESCKey: () => K(We.moveEvent)
  }), Ce = (ue) => {
    ue.stopPropagation(), oe(ue);
  }, j = en(
    On.resizeEvent("timeGrid", `${e.cid()}`),
    {
      onDragStart: () => T(We.resizeEvent),
      onMouseUp: () => K(We.resizeEvent),
      onPressESCKey: () => K(We.resizeEvent)
    }
  ), de = (ue) => {
    ue.stopPropagation(), j(ue);
  }, Oe = sm({
    uiModel: e,
    isReadOnlyCalendar: i,
    isDraggingTarget: w,
    hasNextStartTime: H
  }), Et = Oe && !S;
  return /* @__PURE__ */ d("div", {
    "data-testid": `${D ? "guide-" : ""}time-event-${v.title}-${e.cid()}`,
    "data-calendar-id": M,
    "data-event-id": N,
    className: We.time,
    style: x(x({}, Y), L),
    onMouseDown: Ce,
    ref: h
  }, E ? /* @__PURE__ */ d("div", {
    className: We.travelTime,
    style: B
  }, /* @__PURE__ */ d(ne, {
    template: "goingDuration",
    param: v
  })) : null, b ? /* @__PURE__ */ d("div", {
    className: We.content,
    style: Z
  }, /* @__PURE__ */ d(ne, {
    template: "time",
    param: ce(x({}, v.toEventObject()), {
      start: H ? t : v.start
    })
  })) : null, k ? /* @__PURE__ */ d("div", {
    className: We.travelTime,
    style: ee
  }, /* @__PURE__ */ d(ne, {
    template: "comingDuration",
    param: v
  })) : null, Et ? /* @__PURE__ */ d("div", {
    className: We.resizeHandleX,
    onMouseDown: de
  }) : null);
}
function am({ top: e, height: t, text: n }) {
  const { backgroundColor: o, border: r } = se(
    Q((a) => a.common.gridSelection, [])
  ), i = se(Q((a) => a.week.gridSelection.color, [])), s = {
    top: X(e),
    height: X(t),
    backgroundColor: o,
    border: r
  };
  return /* @__PURE__ */ d("div", {
    className: _("time", "grid-selection"),
    style: s,
    "data-testid": `time-grid-selection-${e}-${t}`
  }, n.length > 0 ? /* @__PURE__ */ d("span", {
    className: _("grid-selection-label"),
    style: { color: i }
  }, n) : null);
}
function cm({ columnIndex: e, timeGridRows: t }) {
  const n = z(
    Q(
      (r) => Pr.calculateSelection(
        r.gridSelection.timeGrid,
        e,
        t.length - 1
      ),
      [e, t]
    )
  ), o = W(() => {
    if (!n)
      return null;
    const { startRowIndex: r, endRowIndex: i, isStartingColumn: s, isSelectingMultipleColumns: a } = n, { top: l, startTime: u } = t[r], {
      top: c,
      height: f,
      endTime: p
    } = t[i], m = c + f - l;
    let h = `${u} - ${p}`;
    return a && (h = s ? u : ""), {
      top: l,
      height: m,
      text: h
    };
  }, [n, t]);
  return U(o) ? null : /* @__PURE__ */ d(am, x({}, o));
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
  } = fn("timeGrid", "resize"), [u, c] = dn(e), [f, p] = ae(null), m = Q(() => {
    p(null), l(), c();
  }, [c, l]), h = W(() => {
    if (U(a))
      return null;
    const { columns: v, rows: E } = o, b = t.map(
      (T) => T.filter(
        (K) => K.cid() === a.cid()
      )
    ), k = (T, K) => (oe) => {
      const Ce = qe(v[K].date, oe.startTime), j = qe(
        o.columns[K].date,
        oe.endTime
      );
      return Ce <= T && T < j;
    }, S = b.findIndex((T) => T.length > 0), N = b[S][0], { goingDuration: M = 0 } = N.model, L = Ae(N.getStarts(), -M), H = Math.max(
      E.findIndex(k(L, S)),
      0
    ), Y = ti(
      b,
      (T) => T.length > 0
    ), B = b[Y][0], { comingDuration: Z = 0 } = B.model, ee = Ae(B.getStarts(), Z);
    let D = E.findIndex(k(ee, Y));
    return D = D >= 0 ? D : E.length - 1, {
      eventStartDateColumnIndex: S,
      eventStartDateRowIndex: H,
      eventEndDateColumnIndex: Y,
      eventEndDateRowIndex: D,
      resizeTargetUIModelColumns: b
    };
  }, [a, o, t]), w = P(h) && P(a) && P(u), y = W(
    () => h ? o.rows[0].height : 0,
    [h, o.rows]
  );
  return re(() => {
    if (w) {
      const { eventStartDateRowIndex: v, eventStartDateColumnIndex: E, eventEndDateColumnIndex: b } = h;
      if (n === b && E === b) {
        const k = a.clone(), { height: S, goingDurationHeight: N, comingDurationHeight: M } = k, L = Math.max(
          y + N * S / 100 + M * S / 100,
          o.rows[u.rowIndex].top - o.rows[v].top + y
        ), H = N * S / L, Y = M * S / L;
        k.setUIProps({
          height: L,
          goingDurationHeight: H,
          comingDurationHeight: Y,
          modelDurationHeight: 100 - (H + Y)
        }), p(k);
      }
    }
  }, [
    h,
    w,
    n,
    u,
    a,
    o.rows,
    y
  ]), re(() => {
    if (w) {
      const { resizeTargetUIModelColumns: v, eventStartDateColumnIndex: E, eventEndDateColumnIndex: b } = h;
      if ((n === E || n === b) && E !== b) {
        let k;
        n === E ? k = v[n][0].clone() : (k = a.clone(), k.setUIProps({
          height: o.rows[u.rowIndex].top + y
        })), p(k);
      }
    }
  }, [
    h,
    w,
    n,
    u,
    a,
    o.rows,
    y
  ]), un(() => {
    if (!s && P(h) && P(u) && P(a) && h.eventEndDateColumnIndex === n) {
      const { comingDuration: E = 0 } = a.model, b = Ae(
        qe(
          o.columns[n].date,
          o.rows[u.rowIndex].endTime
        ),
        -E
      ), k = Ae(a.getStarts(), 30);
      r.fire("beforeUpdateEvent", {
        event: a.model.toEventObject(),
        changes: {
          end: oi(k, b)
        }
      });
    }
    m();
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
  return U(r) ? null : /* @__PURE__ */ d(Ti, {
    uiModel: r,
    isResizingGuide: !0
  });
}
const Mc = {
  column: _("column"),
  backgrounds: _("background-events"),
  events: _("events")
};
function dm({
  eventUIModels: e,
  minEventHeight: t
}) {
  const n = { marginRight: 8 };
  return /* @__PURE__ */ d("div", {
    className: Mc.events,
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
  const { rows: l } = s, u = se(Q((v) => v.week.timeGrid.borderRight, [])), c = se(fm), [, f] = Bo(), p = f(), m = pm(x({ today: p, columnDate: t }, c)), h = {
    width: n,
    backgroundColor: m,
    borderRight: a ? "none" : u
  }, w = r[o], y = l[0].height;
  return /* @__PURE__ */ d("div", {
    className: Mc.column,
    style: h,
    "data-testid": `timegrid-column-${t.getDay()}`
  }, /* @__PURE__ */ d(dm, {
    eventUIModels: w,
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
    className: _("gridlines")
  }, t.map((r, i) => {
    const s = i % 2 === 0;
    return /* @__PURE__ */ d("div", {
      key: `gridline-${r.startTime}-${r.endTime}`,
      className: _("gridline-half"),
      style: {
        top: X(r.top),
        height: X(r.height),
        borderBottom: s ? n : o
      },
      "data-testid": `gridline-${r.startTime}-${r.endTime}`
    });
  }));
}), vm = 30;
function js(e, t) {
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
  const i = o[0].height, s = i * o.length, a = n * Na + t * at, l = Number(o[0].startTime.split(":")[0]), { goingDuration: u = 0, comingDuration: c = 0 } = e.model, f = Ae(e.getStarts(), -u), p = Ae(e.getEnds(), c), m = Do(f, a), h = Do(p, a), w = Math.max(js(m, l), 0), y = Math.min(js(h, l), o.length - 1), v = m.getFullYear() < r.getFullYear() || m.getMonth() < r.getMonth() || m.getDate() < r.getDate(), E = h.getFullYear() > r.getFullYear() || h.getMonth() > r.getMonth() || h.getDate() > r.getDate(), b = y - (v ? 0 : w), k = v ? 0 : o[w].top, S = E ? s : Math.max(b, 1) * i;
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
    P(n) && P(o) && (f.current = e({
      clientX: n,
      clientY: o
    }));
  }, [e, n, o]);
  const p = W(() => U(f.current) || U(u) ? null : {
    columnDiff: u.columnIndex - f.current.columnIndex,
    rowDiff: u.rowIndex - f.current.rowIndex
  }, [u]), m = W(() => U(a) ? null : a.getStarts(), [a]), h = Q(() => {
    c(), l(), f.current = null;
  }, [c, l]), w = W(() => U(p) || U(m) ? null : Do(
    m,
    p.rowDiff * Na + p.columnDiff * at
  ), [p, m]), y = W(() => {
    if (U(a) || U(u) || U(p))
      return null;
    const v = a.clone(), { top: E, height: b } = _m({
      draggingEvent: v,
      columnDiff: p.columnDiff,
      rowDiff: p.rowDiff,
      timeGridDataRows: t.rows,
      currentDate: t.columns[u.columnIndex].date
    });
    return v.setUIProps({
      left: t.columns[u.columnIndex].left,
      width: t.columns[u.columnIndex].width,
      top: E,
      height: b
    }), v;
  }, [u, a, p, t.columns, t.rows]);
  return un(() => {
    if (!s && P(a) && P(u) && P(p) && P(w) && (p.rowDiff !== 0 || p.columnDiff !== 0)) {
      const E = a.duration(), b = Do(w, E);
      r.fire("beforeUpdateEvent", {
        event: a.model.toEventObject(),
        changes: {
          start: w,
          end: b
        }
      });
    }
    h();
  }, i), {
    movingEvent: y,
    nextStartTime: w
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
  return U(n) ? null : /* @__PURE__ */ d(Ti, {
    uiModel: n,
    nextStartTime: o
  });
}
const Ac = {
  NOW_INDICATOR: "timegrid-now-indicator",
  NOW_INDICATOR_LABEL: "timegrid-now-indicator-label"
}, En = {
  line: _(Se("now-indicator")),
  left: _(Se("now-indicator-left")),
  marker: _(Se("now-indicator-marker")),
  today: _(Se("now-indicator-today")),
  right: _(Se("now-indicator-right"))
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
    const m = (h) => {
      var y;
      const w = (y = l == null ? void 0 : l.querySelector(`.${_("panel")}.${_("time")}`)) != null ? y : null;
      if (w && c.current) {
        const { offsetHeight: v } = w, { offsetTop: E } = c.current, b = E - v / 2;
        w.scrollTo ? w.scrollTo({ top: b, behavior: h }) : w.scrollTop = b;
      }
    };
    return u.on("scrollToNow", m), () => u.off("scrollToNow", m);
  }, [u, l]), re(() => {
    u.fire("scrollToNow", "smooth");
  }, [u]), /* @__PURE__ */ d("div", {
    ref: c,
    className: En.line,
    style: { top: X(e) },
    "data-testid": Ac.NOW_INDICATOR
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
const Xs = {
  now: Se("current-time"),
  dayDifference: Se("day-difference")
};
function bm({ unit: e, top: t, now: n, zonedNow: o }) {
  const r = se(Q((a) => a.week.nowIndicatorLabel.color, [])), i = W(() => ai(o, n), [o, n]), s = {
    unit: e,
    time: o,
    format: nm[e]
  };
  return /* @__PURE__ */ d("div", {
    className: _(Xs.now),
    style: { top: X(t), color: r },
    "data-testid": Ac.NOW_INDICATOR_LABEL
  }, i !== 0 && /* @__PURE__ */ d("span", {
    className: _(Xs.dayDifference)
  }, `[${i > 0 ? "+" : "-"}${Math.abs(i)}]`), /* @__PURE__ */ d(ne, {
    template: "timegridNowIndicatorLabel",
    param: s,
    as: "span"
  }));
}
const Cm = (e) => {
  var t;
  return (t = e.options.month.visibleEventCount) != null ? t : 6;
}, bi = (e) => e.options.week.showNowIndicator, km = (e) => {
  var t;
  return (t = e.options.week.showTimezoneCollapseButton) != null ? t : !1;
}, xc = (e) => {
  var t;
  return (t = e.options.week.timezonesCollapsed) != null ? t : !1;
}, Wt = {
  timeColumn: Se("time-column"),
  hourRows: Se("hour-rows"),
  time: Se("time"),
  timeLabel: Se("time-label"),
  first: Se("time-first"),
  last: Se("time-last"),
  hidden: Se("time-hidden")
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
function Ks({ rowsInfo: e, isPrimary: t, borderRight: n, width: o, nowIndicatorState: r }) {
  var p;
  const i = z(bi), { primaryTimezoneBackgroundColor: s, subTimezoneBackgroundColor: a } = se(Nm), { pastTimeColor: l, futureTimeColor: u } = se(Im), c = P(r) ? Ae(r.now, (p = e[0].diffFromPrimaryTimezone) != null ? p : 0) : null, f = t ? s : a;
  return /* @__PURE__ */ d("div", {
    role: "rowgroup",
    className: _(Wt.hourRows),
    style: { width: X(o), borderRight: n, backgroundColor: f }
  }, e.map(({ date: m, top: h, className: w }) => {
    const v = P(c) && m < c ? l : u;
    return /* @__PURE__ */ d("div", {
      key: m.getTime(),
      className: w,
      style: {
        top: X(h),
        color: v
      },
      role: "row"
    }, /* @__PURE__ */ d(ne, {
      template: `timegridDisplay${t ? "Primary" : ""}Time`,
      param: { time: m },
      as: "span"
    }));
  }), i && P(r) && P(c) && /* @__PURE__ */ d(bm, {
    unit: "hour",
    top: r.top,
    now: r.now,
    zonedNow: c
  }));
}
const Mm = ln(function({ timeGridRows: t, nowIndicatorState: n }) {
  const o = z(bi), r = z(ja), i = z(xc), s = $o(), { width: a, borderRight: l } = se(li), u = W(
    () => t.filter((y, v) => v % 2 === 0 || v === t.length - 1),
    [t]
  ), c = Q(
    (y, v, E) => {
      const b = ({ top: L, height: H }) => {
        if (!o || U(n))
          return !1;
        const Y = n.top;
        return L - H <= Y && Y <= L + H;
      }, k = v === 0, S = v === u.length - 1, N = _(Wt.time, {
        [Wt.first]: k,
        [Wt.last]: S,
        [Wt.hidden]: b(y)
      });
      let M = qe(new R(), S ? y.endTime : y.startTime);
      return P(E) && (M = Ae(M, E)), {
        date: M,
        top: y.top,
        className: N,
        diffFromPrimaryTimezone: E
      };
    },
    [u, n, o]
  ), [f, ...p] = r, m = p.length > 0 ? 100 / (p.length + 1) : 100, h = u.map(
    (y, v) => c(y, v)
  ), w = W(() => p.length === 0 ? [] : p.reverse().map((y) => {
    const { timezoneName: v } = y, E = s(f.timezoneName).getTimezoneOffset(), k = s(v).getTimezoneOffset() - E;
    return u.map(
      (S, N) => c(S, N, k)
    );
  }), [c, p, f, u, s]);
  return /* @__PURE__ */ d("div", {
    className: _(Wt.timeColumn),
    style: { width: a },
    "data-testid": "timegrid-time-column"
  }, !i && w.map((y) => /* @__PURE__ */ d(Ks, {
    key: y[0].diffFromPrimaryTimezone,
    rowsInfo: y,
    isPrimary: !1,
    borderRight: l,
    width: m,
    nowIndicatorState: n
  })), /* @__PURE__ */ d(Ks, {
    rowsInfo: h,
    isPrimary: !0,
    borderRight: l,
    width: i ? 100 : m,
    nowIndicatorState: n
  }));
});
function Gr(e, t, n) {
  const o = t.getTime(), r = n.getTime(), i = Or(e.getTime(), [o], [r]) - o, s = r - o, a = oc(s, 100, i);
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
  return n ? `${Ds}px` : `calc(${X(t)} - ${Eo(
    (Ds + wo) * (e.duplicateEvents.length - 1) + wo
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
  const { goingDuration: i = 0, comingDuration: s = 0 } = e.model, a = e.getStarts(), l = e.getEnds(), u = Ae(a, -i), c = Ae(l, s), f = oi(u, o), p = Ia(c, r);
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
      (m) => e.find((h) => h.cid() === m.__cid)
    ), c = !!(n > Ro && a.find((m) => m.__cid === n)), f = a.reduce((m, { start: h, goingDuration: w }) => {
      const y = Ae(h, -w);
      return Ia(m, y);
    }, a[0].start), p = a.reduce((m, { end: h, comingDuration: w }) => {
      const y = Ae(h, w);
      return oi(m, y);
    }, a[0].end);
    u.forEach((m, h) => {
      const w = m.cid() === l.__cid, y = !(c && m.cid() === n || !c && w);
      m.setUIProps({
        duplicateEvents: u,
        duplicateEventIndex: h,
        collapse: y,
        isMain: w,
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
    const p = Math.max(...f.map((h) => h.length)), m = Math.round(100 / p);
    f.forEach((h) => {
      h.forEach((w, y) => {
        Oc({ uiModel: w, columnIndex: y, baseWidth: m, startColumnTime: t, endColumnTime: n });
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
  }, []), Q(() => e.current, []);
}
const qs = {
  timegrid: _(Ic),
  scrollArea: _(Se("scroll-area"))
};
function Pc({ timeGridData: e, events: t }) {
  const {
    isReadOnly: n,
    week: { narrowWeekend: o, startDayOfWeek: r, collapseDuplicateEvents: i }
  } = z(je), s = z(bi), a = z(
    (M) => M.weekViewLayout.selectedDuplicateEventCid
  ), [, l] = Bo(), u = Fm(), { width: c } = se(li), [f, p] = ae(null), { columns: m, rows: h } = e, w = m.length - 1, y = W(
    () => m.map(
      ({ date: M }) => t.filter(Rc(he(M), Re(M))).map((L) => L.clone())
    ).map(
      (M, L) => Bm(
        M,
        qe(m[L].date, Mr(h).startTime),
        qe(m[L].date, it(h).endTime),
        a,
        i
      )
    ),
    [m, h, t, a, i]
  ), v = W(() => {
    const M = l(), L = m.findIndex((B) => Nt(B.date, M));
    if (L < 0)
      return null;
    const H = qe(
      m[L].date,
      e.rows[0].startTime
    ), Y = qe(
      m[L].date,
      it(e.rows).endTime
    );
    return {
      startTime: H,
      endTime: Y,
      currentDateIndex: L
    };
  }, [m, l, e.rows]), [E, b] = Ge(), k = W(
    () => hi({
      rowsCount: h.length,
      columnsCount: m.length,
      container: E,
      narrowWeekend: o,
      startDayOfWeek: r
    }),
    [m.length, E, o, h.length, r]
  ), S = Ei({
    type: "timeGrid",
    gridPositionFinder: k,
    selectionSorter: Pr.sortSelection,
    dateGetter: Pr.getDateFromCollection,
    dateCollection: e
  }), N = Q(() => {
    if (P(v)) {
      const { startTime: M, endTime: L } = v, H = l();
      M <= H && H <= L && p({
        top: Gr(H, M, L),
        now: H
      });
    }
  }, [v, l]);
  return ht(() => {
    var M;
    u() && (((M = v == null ? void 0 : v.currentDateIndex) != null ? M : -1) >= 0 ? N() : p(null));
  }, [v, u, N]), Gm(N, P(v) ? ni : null), /* @__PURE__ */ d("div", {
    className: qs.timegrid
  }, /* @__PURE__ */ d("div", {
    className: qs.scrollArea
  }, /* @__PURE__ */ d(Mm, {
    timeGridRows: h,
    nowIndicatorState: f
  }), /* @__PURE__ */ d("div", {
    className: _("columns"),
    style: { left: c },
    ref: b,
    onMouseDown: wi(!n, S)
  }, /* @__PURE__ */ d(gm, {
    timeGridRows: h
  }), /* @__PURE__ */ d(Dm, {
    gridPositionFinder: k,
    timeGridData: e
  }), m.map((M, L) => /* @__PURE__ */ d(mm, {
    key: M.date.toString(),
    timeGridData: e,
    columnDate: M.date,
    columnWidth: X(M.width),
    columnIndex: L,
    totalUIModels: y,
    gridPositionFinder: k,
    isLastColumn: L === w
  })), s && P(v) && P(f) ? /* @__PURE__ */ d(Tm, {
    top: f.top,
    columnWidth: m[0].width,
    columnCount: m.length,
    columnIndex: v.currentDateIndex
  }) : null)));
}
function Um({ isCollapsed: e }) {
  const t = Ne(), n = _("icon", {
    "ic-arrow-right": e,
    "ic-arrow-left": !e
  });
  return /* @__PURE__ */ d("button", {
    className: _(Se("timezone-collapse-button")),
    "aria-expanded": !e,
    onClick: () => t.fire("clickTimezonesCollapseBtn", e)
  }, /* @__PURE__ */ d("span", {
    className: n,
    role: "img"
  }));
}
function Zs({ label: e, offset: t, tooltip: n, width: o = 100, left: r }) {
  return /* @__PURE__ */ d("div", {
    title: n,
    className: _(Se("timezone-label")),
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
  return W(() => ({
    showTimezoneCollapseButton: e,
    timezonesCollapsed: t
  }), [e, t]);
}
function Lc({ top: e }) {
  const t = z(ja), { width: n } = se(li), o = $o(), { showTimezoneCollapseButton: r, timezonesCollapsed: i } = zm();
  if (t.length <= 1)
    return null;
  const s = t.map(({ displayLabel: p, timezoneName: m, tooltip: h }) => Be(p) ? {
    label: null,
    offset: o(m).getTimezoneOffset(),
    tooltip: h != null ? h : m
  } : { label: p, offset: null, tooltip: h != null ? h : m }), [a, ...l] = s, u = l.reverse(), c = i ? 1 : t.length, f = 100 / c;
  return /* @__PURE__ */ d("div", {
    style: {
      top: e,
      width: n
    },
    role: "columnheader",
    className: _("timezone-labels-slot")
  }, !i && u.map((p, m) => {
    var h;
    return /* @__PURE__ */ d(Zs, x({
      key: `subTimezone-${(h = p.label) != null ? h : p.offset}`,
      width: f,
      left: f * m
    }, p));
  }), r && /* @__PURE__ */ d(Um, {
    isCollapsed: i
  }), /* @__PURE__ */ d(Zs, x({
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
  return W(() => {
    if (t === "Local")
      return e;
    const o = yn(new R()), {
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
function Ci(e, ...t) {
  const n = W(
    () => e.events.filter(Je.and(...t)),
    [e.events, t]
  ), o = jm(n);
  return W(
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
    if (P(e) && Xm(o) && r === Ve.DRAGGING && P(n)) {
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
    P(t) && e && o(e.offsetTop);
  }, [t, e]), n;
}
function qm() {
  const e = z(Lo), t = z(je), { dayGridRows: n, lastPanelType: o } = z(Wa), { renderDate: r } = z(cn);
  return W(
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
  var B, Z;
  const { calendar: e, options: t, gridRowLayout: n, lastPanelType: o, renderDate: r } = qm(), i = z(Ho), s = se(Q((ee) => ee.week.dayGridLeft.width, [])), [a, l] = Ge(), u = t.week, { narrowWeekend: c, startDayOfWeek: f, workweek: p, hourStart: m, hourEnd: h, eventView: w, taskView: y } = u, v = W(() => [r], [r]), E = Ha(v, (Z = (B = t.week) == null ? void 0 : B.dayNames) != null ? Z : []), { rowStyleInfo: b, cellWidthMap: k } = si(
    v.length,
    c,
    f,
    p
  ), S = Ci(e, t.eventFilter), N = W(() => {
    const ee = () => i === "Local" ? [he(v[0]), Re(v[0])] : [he(It(v[0], -1)), Re(It(v[0], 1))], [D, T] = ee();
    return lc(v, S, {
      narrowWeekend: c,
      hourStart: m,
      hourEnd: h,
      weekStartDate: D,
      weekEndDate: T
    });
  }, [S, v, h, m, c, i]), M = W(
    () => fc(v, {
      hourStart: m,
      hourEnd: h,
      narrowWeekend: c
    }),
    [v, h, m, c]
  ), L = Hc(y, w), H = L.map((ee) => {
    var T, K;
    if (ee === "time")
      return null;
    const D = ee;
    return /* @__PURE__ */ d(jt, {
      key: D,
      name: D,
      resizable: D !== o
    }, D === "allday" ? /* @__PURE__ */ d(Dc, {
      events: N[D],
      rowStyleInfo: b,
      gridColWidthMap: k,
      weekDates: v,
      height: (T = n[D]) == null ? void 0 : T.height,
      options: u
    }) : /* @__PURE__ */ d(Sc, {
      category: D,
      events: N[D],
      weekDates: v,
      height: (K = n[D]) == null ? void 0 : K.height,
      options: u,
      gridColWidthMap: k
    }));
  });
  $c(a, M.rows.length);
  const Y = Bc(a);
  return /* @__PURE__ */ d(Si, {
    className: _("day-view"),
    autoAdjustPanels: !0
  }, /* @__PURE__ */ d(jt, {
    name: "day-view-day-names",
    initialHeight: Sa + Ta
  }, /* @__PURE__ */ d(ui, {
    type: "week",
    dayNames: E,
    marginLeft: s,
    rowStyleInfo: b
  })), H, L.includes("time") ? /* @__PURE__ */ d(jt, {
    name: "time",
    autoSize: 1,
    ref: l
  }, /* @__PURE__ */ d(Pc, {
    events: N.time,
    timeGridData: M
  }), /* @__PURE__ */ d(Lc, {
    top: Y
  })) : null);
}
function Zm({ rowIndex: e, weekDates: t, narrowWeekend: n }) {
  const o = z(
    Q(
      (r) => r.gridSelection.accumulated.dayGridMonth.map(
        (i) => ko.calculateSelection(i, e, t.length)
      ),
      [e, t]
    )
  );
  return /* @__PURE__ */ d("div", {
    className: _("accumulated-grid-selection")
  }, o.map(
    (r) => r ? /* @__PURE__ */ d(gi, {
      type: "accumulated",
      gridSelectionData: r,
      weekDates: t,
      narrowWeekend: n
    }) : null
  ));
}
function Jm({ type: e, number: t, onClickButton: n, className: o }) {
  const { reset: r } = ye("dnd"), i = (l) => {
    l.stopPropagation();
  }, s = () => {
    r(), n();
  }, a = `monthGrid${e === Rn.header ? "Header" : "Footer"}Exceed`;
  return /* @__PURE__ */ d("button", {
    type: "button",
    onMouseDown: i,
    onClick: s,
    className: o
  }, /* @__PURE__ */ d(ne, {
    template: a,
    param: t
  }));
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
  const e = Jd(), t = Za();
  return W(() => ({ common: e, month: t }), [e, t]);
}
function Js({
  type: e = Rn.header,
  exceedCount: t = 0,
  date: n,
  onClickExceedCount: o
}) {
  const { renderDate: r } = z(cn), [, i] = Bo(), s = eh(), a = s.month.gridCell[`${e}Height`], l = me(n, "YYYYMMDD"), u = me(i(), "YYYYMMDD"), c = l === u, f = {
    date: me(n, "YYYY-MM-DD"),
    day: n.getDay(),
    hiddenEventCount: t,
    isOtherMonth: n.getMonth() !== r.getMonth(),
    isToday: l === u,
    month: n.getMonth(),
    ymd: l
  }, p = { color: Qm({ date: n, theme: s, isToday: c, renderDate: r }) }, m = `monthGrid${Oo(e)}`;
  return U(a) ? null : /* @__PURE__ */ d("div", {
    className: _(`grid-cell-${e}`),
    style: { height: a }
  }, /* @__PURE__ */ d("span", {
    className: _("grid-cell-date"),
    style: p
  }, /* @__PURE__ */ d(ne, {
    template: m,
    param: f
  })), t ? /* @__PURE__ */ d(Jm, {
    type: e,
    number: t,
    onClickButton: o,
    className: _("grid-cell-more-events")
  }) : null);
}
function th({
  grid: e,
  offsetWidth: t,
  eventLength: n,
  layerSize: o
}) {
  const r = Ga(e).height + fr * 2;
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
  const m = f < i, h = f + a > u, w = p < s, y = p + l > c;
  return m && (f = i), h && (f = u - a), w && (p = s), y && (p = c - l), { top: p + window.scrollY, left: f + window.scrollX };
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
  const i = xt(), { showSeeMorePopup: s } = ye("popup"), a = se(ih), { popupPosition: l, containerRefCallback: u } = rh(
    t.length,
    o,
    i
  ), c = Q(() => {
    l && s({
      date: e,
      popupPosition: l,
      events: t
    });
  }, [e, t, l, s]), f = sc(
    t,
    r,
    Zt + Mo
  );
  return /* @__PURE__ */ d("div", {
    className: _("daygrid-cell"),
    style: ce(x({}, n), { backgroundColor: Fe(e.getDay()) ? a : "inherit" }),
    ref: u
  }, /* @__PURE__ */ d(Js, {
    type: Rn.header,
    exceedCount: f,
    date: e,
    onClickExceedCount: c
  }), /* @__PURE__ */ d(Js, {
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
  const [i, s] = Ge(), a = se(Q((l) => l.common.border, []));
  return /* @__PURE__ */ d("div", {
    className: _("weekday-grid"),
    style: { borderTop: a },
    ref: s
  }, t.map((l, u) => {
    const c = l.getDay(), { width: f, left: p } = n[u], m = me(he(l), "YYYYMMDD");
    return /* @__PURE__ */ d(sh, {
      key: `daygrid-cell-${c}`,
      date: l,
      style: {
        width: X(f),
        left: X(p)
      },
      parentContainer: i,
      events: o[m],
      contentAreaHeight: r
    });
  }));
});
function ch({ weekDates: e, narrowWeekend: t, rowIndex: n }) {
  const o = z(
    Q(
      (r) => ko.calculateSelection(
        r.gridSelection.dayGridMonth,
        n,
        e.length
      ),
      [n, e.length]
    )
  );
  return U(o) ? null : /* @__PURE__ */ d(gi, {
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
  const { headerHeight: s } = se(qa), a = o.filter(pi(t, n + Mo)).map((l) => /* @__PURE__ */ d(wt, {
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
  } = fn("dayGrid", "move"), [u, c] = dn(n), f = W(() => {
    var m, h;
    let p = null;
    return a && (u == null ? void 0 : u.rowIndex) === o && (p = a, p.left = t[(m = u == null ? void 0 : u.columnIndex) != null ? m : 0].left, p.width = t[(h = u == null ? void 0 : u.columnIndex) != null ? h : 0].width), p;
  }, [a, u == null ? void 0 : u.rowIndex, u == null ? void 0 : u.columnIndex, o, t]);
  return un(() => {
    if (!s && P(f) && P(u)) {
      const m = f.model.getStarts(), h = f.duration(), w = e[u.rowIndex][u.columnIndex], y = ai(w, m) * at, v = new R(m.getTime() + y), E = new R(v.getTime() + h);
      r.fire("beforeUpdateEvent", {
        event: f.model.toEventObject(),
        changes: {
          start: v,
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
  return U(r) ? null : /* @__PURE__ */ d(wt, {
    uiModel: r,
    movingLeft: r.left,
    eventHeight: Qe,
    headerHeight: Qr + Ao
  });
}
function Qs(e, t) {
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
  } = fn("dayGrid", "resize"), [c, f] = dn(t), [p, m] = ae(null), h = Q(() => {
    m(null), f(), u();
  }, [f, u]), w = W(() => {
    if (U(l))
      return null;
    const v = n.map(
      ({ uiModels: N }) => N.filter(
        (M) => M.cid() === l.cid()
      )
    ), E = v.findIndex((N) => N.length > 0), b = ti(v, (N) => N.length > 0), k = Qs(
      v[E][0],
      e[E]
    ), S = Qs(
      v[b][0],
      e[b]
    );
    return {
      eventStartDateColumnIndex: k.startColumnIndex,
      eventStartDateRowIndex: E,
      eventEndDateColumnIndex: S.endColumnIndex,
      eventEndDateRowIndex: b,
      resizeTargetUIModelRows: v
    };
  }, [e, n, l]), y = P(w) && P(l) && P(c);
  return re(() => {
    if (y && r === w.eventStartDateRowIndex) {
      const { eventStartDateRowIndex: v, eventStartDateColumnIndex: E } = w, b = w.resizeTargetUIModelRows[v][0].clone();
      let k;
      v === c.rowIndex ? k = o[E][Math.max(E, c.columnIndex)] : v > c.rowIndex ? k = o[E][E] : (k = o[E][e[r].length - 1], b.setUIProps({ exceedRight: !0 })), m([b, k]);
    }
  }, [w, y, o, c, e, r]), re(() => {
    if (y && w.eventStartDateRowIndex < r && r < c.rowIndex) {
      const v = l.clone();
      v.setUIProps({ left: 0, exceedLeft: !0, exceedRight: !0 }), m([v, "100%"]);
    }
  }, [w, y, c, l, r]), re(() => {
    if (y && w.eventStartDateRowIndex < c.rowIndex && r === c.rowIndex) {
      const v = l.clone();
      v.setUIProps({ left: 0, exceedLeft: !0 }), m([v, o[0][c.columnIndex]]);
    }
  }, [
    w,
    y,
    o,
    c,
    l,
    r
  ]), re(() => {
    y && r > w.eventStartDateRowIndex && r > c.rowIndex && m(null);
  }, [y, c, w, r]), un(() => {
    if (y) {
      const { eventStartDateColumnIndex: v, eventStartDateRowIndex: E } = w;
      if (!a && (c.rowIndex === E && c.columnIndex >= v || c.rowIndex > E)) {
        const k = e[c.rowIndex][c.columnIndex];
        i.fire("beforeUpdateEvent", {
          event: l.model.toEventObject(),
          changes: {
            end: k
          }
        });
      }
    }
    h();
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
  if (U(i))
    return null;
  const [s, a] = i;
  return /* @__PURE__ */ d("div", {
    className: _("weekday-events")
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
  const t = z(Cm), { headerHeight: n, footerHeight: o } = se(qa), r = te(null), [i, s] = ae(0);
  return re(() => {
    if (r.current) {
      const a = Ga(r.current).height, l = Qr + (n != null ? n : Ao), u = o != null ? o : 0, c = a - l - u, f = t * (e + Mo);
      s(Math.min(c, f));
    }
  }, [o, n, e, t]), { ref: r, cellContentAreaHeight: i };
}
function gh({ dateMatrix: e = [], rowInfo: t = [], cellWidthMap: n = [] }) {
  const [o, r] = Ge(), i = z(Lo), { ref: s, cellContentAreaHeight: a } = hh(Zt), { eventFilter: l, month: u, isReadOnly: c } = z(je), { narrowWeekend: f, startDayOfWeek: p } = u, m = mh / e.length, h = W(
    () => hi({
      container: o,
      rowsCount: e.length,
      columnsCount: e[0].length,
      narrowWeekend: f,
      startDayOfWeek: p
    }),
    [e, o, f, p]
  ), w = Ci(i, l), y = W(
    () => e.map((E) => Sf(E, w, f)),
    [w, e, f]
  ), v = Ei({
    type: "dayGridMonth",
    gridPositionFinder: h,
    dateCollection: e,
    dateGetter: ko.getDateFromCollection,
    selectionSorter: ko.sortSelection
  });
  return /* @__PURE__ */ d("div", {
    ref: r,
    onMouseDown: wi(!c, v),
    className: _("month-daygrid")
  }, e.map((E, b) => {
    const { uiModels: k, gridDateEventModelMap: S } = y[b];
    return /* @__PURE__ */ d("div", {
      key: `dayGrid-events-${b}`,
      className: _("month-week-item"),
      style: { height: X(m) },
      ref: s
    }, /* @__PURE__ */ d("div", {
      className: _("weekday")
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
      className: _("weekday-events")
    }), /* @__PURE__ */ d(ch, {
      weekDates: E,
      narrowWeekend: f,
      rowIndex: b
    }), /* @__PURE__ */ d(Zm, {
      rowIndex: b,
      weekDates: E,
      narrowWeekend: f
    })), /* @__PURE__ */ d(ph, {
      dateMatrix: e,
      gridPositionFinder: h,
      rowIndex: b,
      cellWidthMap: n,
      renderedUIModels: y
    }), /* @__PURE__ */ d(dh, {
      dateMatrix: e,
      gridPositionFinder: h,
      rowIndex: b,
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
  const e = z(je), { renderDate: t } = z(cn), n = vh(e), o = e.month, { narrowWeekend: r, startDayOfWeek: i, workweek: s } = o, a = W(
    () => uc(t, o),
    [o, t]
  ), { rowStyleInfo: l, cellWidthMap: u } = W(
    () => si(n.length, r, i, s),
    [n.length, r, i, s]
  ), c = l.map((f, p) => ce(x({}, f), {
    date: a[0][p]
  }));
  return /* @__PURE__ */ d(Si, {
    className: _("month")
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
  const e = z(je), t = z(Lo), { dayGridRows: n, lastPanelType: o } = z(Wa), { renderDate: r } = z(cn);
  return W(
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
  var Z, ee;
  const { options: e, calendar: t, gridRowLayout: n, lastPanelType: o, renderDate: r } = _h(), i = se(Q((D) => D.week.dayGridLeft.width, [])), s = z(Ho), [a, l] = Ge(), u = e.week, { narrowWeekend: c, startDayOfWeek: f, workweek: p, hourStart: m, hourEnd: h, eventView: w, taskView: y } = u, v = W(() => dc(r, u), [r, u]), E = Ha(v, (ee = (Z = e.week) == null ? void 0 : Z.dayNames) != null ? ee : []), { rowStyleInfo: b, cellWidthMap: k } = si(
    v.length,
    c,
    f,
    p
  ), S = Ci(t, e.eventFilter), N = W(() => {
    const D = () => s === "Local" ? [he(Mr(v)), Re(it(v))] : [he(It(Mr(v), -1)), Re(It(it(v), 1))], [T, K] = D();
    return lc(v, S, {
      narrowWeekend: c,
      hourStart: m,
      hourEnd: h,
      weekStartDate: T,
      weekEndDate: K
    });
  }, [S, h, m, c, s, v]), M = W(
    () => fc(v, {
      hourStart: m,
      hourEnd: h,
      narrowWeekend: c
    }),
    [h, m, c, v]
  ), L = Hc(y, w), H = L.map((D) => {
    var K, oe;
    if (D === "time")
      return null;
    const T = D;
    return /* @__PURE__ */ d(jt, {
      name: T,
      key: T,
      resizable: T !== o
    }, T === "allday" ? /* @__PURE__ */ d(Dc, {
      events: N[T],
      rowStyleInfo: b,
      gridColWidthMap: k,
      weekDates: v,
      height: (K = n[T]) == null ? void 0 : K.height,
      options: u
    }) : /* @__PURE__ */ d(Sc, {
      category: T,
      events: N[T],
      weekDates: v,
      height: (oe = n[T]) == null ? void 0 : oe.height,
      options: u,
      gridColWidthMap: k
    }));
  }), Y = W(() => L.includes("time"), [L]);
  $c(a, M.rows.length);
  const B = Bc(a);
  return /* @__PURE__ */ d(Si, {
    className: _("week-view"),
    autoAdjustPanels: !0
  }, /* @__PURE__ */ d(jt, {
    name: "week-view-day-names",
    initialHeight: Sa + Ta * 2
  }, /* @__PURE__ */ d(ui, {
    type: "week",
    dayNames: E,
    marginLeft: i,
    options: u,
    rowStyleInfo: b
  })), H, Y ? /* @__PURE__ */ d(jt, {
    name: "time",
    autoSize: 1,
    ref: l
  }, /* @__PURE__ */ d(Pc, {
    events: N.time,
    timeGridData: M
  }), /* @__PURE__ */ d(Lc, {
    top: B
  })) : null);
}
const yh = {
  month: Fc,
  week: Uc,
  day: Gc
};
function wh() {
  const { currentView: e } = z(cn), t = W(() => yh[e] || (() => null), [e]);
  return /* @__PURE__ */ d(t, null);
}
var Eh = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i, Dh = /[&<>"]/;
function ea(e) {
  var t = String(e);
  return Dh.test(t) ? t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") : t;
}
var ta = function(e, t) {
  return String(e).replace(/(\n+)/g, "$1" + (t || "	"));
}, na = function(e, t, n) {
  return String(e).length > (t || 40) || !n && String(e).indexOf(`
`) !== -1 || String(e).indexOf("<") !== -1;
}, oa = {};
function Sh(e) {
  var t = "";
  for (var n in e) {
    var o = e[n];
    o != null && o !== "" && (t && (t += " "), t += n[0] == "-" ? n : oa[n] || (oa[n] = n.replace(/([A-Z])/g, "-$1").toLowerCase()), t += ": ", t += o, typeof o == "number" && Eh.test(n) === !1 && (t += "px"), t += ";");
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
var Th = { shallow: !0 }, wr = [], bh = /^(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)$/, ra = /[\s\n\\/='"\0<>]/;
function ia() {
  this.__d = !0;
}
Pn.render = Pn;
var Ch = function(e, t) {
  return Pn(e, t, Th);
}, sa = [];
function Pn(e, t, n) {
  t = t || {}, n = n || {};
  var o = $.__s;
  $.__s = !0;
  var r = Sn(e, t, n);
  return $.__c && $.__c(e, sa), sa.length = 0, $.__s = o, r;
}
function Sn(e, t, n, o, r, i) {
  if (e == null || typeof e == "boolean")
    return "";
  if (typeof e != "object")
    return ea(e);
  var s = n.pretty, a = s && typeof s == "string" ? s : "	";
  if (Array.isArray(e)) {
    for (var l = "", u = 0; u < e.length; u++)
      s && u > 0 && (l += `
`), l += Sn(e[u], t, n, o, r, i);
    return l;
  }
  var c, f = e.type, p = e.props, m = !1;
  if (typeof f == "function") {
    if (m = !0, !n.shallow || !o && n.renderRootComponent !== !1) {
      if (f === xe) {
        var h = [];
        return Ur(h, e.props.children), Sn(h, t, n, n.shallowHighOrder !== !1, r, i);
      }
      var w, y = e.__c = { __v: e, context: t, props: e.props, setState: ia, forceUpdate: ia, __d: !0, __h: [] };
      $.__b && $.__b(e);
      var v = $.__r;
      if (f.prototype && typeof f.prototype.render == "function") {
        var E = f.contextType, b = E && t[E.__c], k = E != null ? b ? b.props.value : E.__ : t;
        (y = e.__c = new f(p, k)).__v = e, y._dirty = y.__d = !0, y.props = p, y.state == null && (y.state = {}), y._nextState == null && y.__s == null && (y._nextState = y.__s = y.state), y.context = k, f.getDerivedStateFromProps ? y.state = io(io({}, y.state), f.getDerivedStateFromProps(y.props, y.state)) : y.componentWillMount && (y.componentWillMount(), y.state = y._nextState !== y.state ? y._nextState : y.__s !== y.state ? y.__s : y.state), v && v(e), w = y.render(y.props, y.state, y.context);
      } else
        for (var S = f.contextType, N = S && t[S.__c], M = S != null ? N ? N.props.value : S.__ : t, L = 0; y.__d && L++ < 25; )
          y.__d = !1, v && v(e), w = f.call(e.__c, p, M);
      return y.getChildContext && (t = io(io({}, t), y.getChildContext())), $.diffed && $.diffed(e), Sn(w, t, n, n.shallowHighOrder !== !1, r, i);
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
  var H, Y, B = "<" + f;
  if (p) {
    var Z = Object.keys(p);
    n && n.sortAttributes === !0 && Z.sort();
    for (var ee = 0; ee < Z.length; ee++) {
      var D = Z[ee], T = p[D];
      if (D !== "children") {
        if (!ra.test(D) && (n && n.allAttributes || D !== "key" && D !== "ref" && D !== "__self" && D !== "__source")) {
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
          D === "style" && T && typeof T == "object" && (T = Sh(T)), D[0] === "a" && D[1] === "r" && typeof T == "boolean" && (T = String(T));
          var K = n.attributeHook && n.attributeHook(D, T, t, n, m);
          if (K || K === "")
            B += K;
          else if (D === "dangerouslySetInnerHTML")
            Y = T && T.__html;
          else if (f === "textarea" && D === "value")
            H = T;
          else if ((T || T === 0 || T === "") && typeof T != "function") {
            if (!(T !== !0 && T !== "" || (T = D, n && n.xml))) {
              B = B + " " + D;
              continue;
            }
            if (D === "value") {
              if (f === "select") {
                i = T;
                continue;
              }
              f === "option" && i == T && p.selected === void 0 && (B += " selected");
            }
            B = B + " " + D + '="' + ea(T) + '"';
          }
        }
      } else
        H = T;
    }
  }
  if (s) {
    var oe = B.replace(/\n\s*/, " ");
    oe === B || ~oe.indexOf(`
`) ? s && ~B.indexOf(`
`) && (B += `
`) : B = oe;
  }
  if (B += ">", ra.test(f))
    throw new Error(f + " is not a valid HTML tag name in " + B);
  var Ce, j = bh.test(f) || n.voidElements && n.voidElements.test(f), de = [];
  if (Y)
    s && na(Y) && (Y = `
` + a + ta(Y, a)), B += Y;
  else if (H != null && Ur(Ce = [], H).length) {
    for (var Oe = s && ~B.indexOf(`
`), Et = !1, ue = 0; ue < Ce.length; ue++) {
      var Ue = Ce[ue];
      if (Ue != null && Ue !== !1) {
        var Pe = Sn(Ue, t, n, !0, f === "svg" || f !== "foreignObject" && r, i);
        if (s && !Oe && na(Pe) && (Oe = !0), Pe)
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
` + a + ta(de[pn], a);
  }
  if (de.length || Y)
    B += de.join("");
  else if (n && n.xml)
    return B.substring(0, B.length - 1) + " />";
  return !j || Ce || Y ? (s && ~B.indexOf(`
`) && (B += `
`), B = B + "</" + f + ">") : B = B.replace(/>$/, " />"), B;
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
function aa({ theme: e, store: t, eventBus: n, children: o }) {
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
var tg = eg, ng = Bh, Yc = Yh, ki = be, Ni = uo, og = Wc, Ii = Xh, st = tg, Vc = /\s+/g;
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
  ki(e) ? (e = e.split(Vc), st(e, function(r) {
    o._bindEvent(r, t, n);
  })) : Ni(e) && (n = t, st(e, function(r, i) {
    o.on(i, r, n);
  }));
};
le.prototype.once = function(e, t, n) {
  var o = this;
  if (Ni(e)) {
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
  var n = this, o = Ii(t), r = n._matchHandler(t);
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
  }) : ki(t) ? (o = this._matchContext(e), n._spliceMatches(this._safeEvent(t), o)) : Ii(t) ? (o = this._matchHandlerAndContext(t, e), st(this._safeEvent(), function(r) {
    n._spliceMatches(r, o);
  })) : (o = this._matchContext(e), st(this._safeEvent(), function(r) {
    n._spliceMatches(r, o);
  }));
};
le.prototype.off = function(e, t) {
  ki(e) ? this._offByEventName(e, t) : arguments.length ? Ii(e) ? this._offByHandler(e) : Ni(e) && this._offByObject(e, t) : (this.events = {}, this.contexts = []);
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
    G(this, "container");
    G(this, "renderRange");
    G(this, "eventBus");
    G(this, "theme");
    G(this, "store");
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
    let r = new R(t);
    const { visibleWeeksCount: i } = o;
    i > 0 ? r = It(r, n * 7 * i) : r = Vu(r, n);
    const s = uc(r, o), [[a]] = s, l = it(it(s));
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
    const r = new R(t);
    r.addDate(n * 7);
    const i = dc(r, o), [s] = i, a = it(i);
    return {
      renderDate: r,
      renderRange: { start: s, end: a }
    };
  }
  calculateDayRenderDate({ renderDate: t, offset: n }) {
    const o = new R(t);
    o.addDate(n);
    const r = he(o), i = Re(o);
    return {
      renderDate: o,
      renderRange: { start: r, end: i }
    };
  }
  move(t) {
    if (U(t))
      return;
    const { currentView: n, renderDate: o } = this.getStoreState().view, { options: r } = this.getStoreState(), { setRenderDate: i } = this.getStoreDispatchers().view, s = new R(o);
    let a = {
      renderDate: s,
      renderRange: { start: new R(s), end: new R(s) }
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
    return P(this.container) && go(
      /* @__PURE__ */ d(aa, {
        theme: this.theme,
        store: this.store,
        eventBus: this.eventBus
      }, this.getComponent()),
      this.container
    ), this;
  }
  renderToString() {
    return Pn(
      /* @__PURE__ */ d(aa, {
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
    const { currentView: n } = this.getStoreState().view, { options: o } = this.getStoreState(), r = new R(t);
    let i = { start: new R(r), end: new R(r) };
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
    const { setRenderDate: t } = this.getStoreDispatchers().view, n = new R();
    t(n), this.renderRange = this.calculateRenderRange(n);
  }
  setDate(t) {
    const { setRenderDate: n } = this.getStoreDispatchers("view"), o = new R(t);
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
    P(n) && i(n), P(o) && a(o), s(r);
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
  R as TZDate,
  mg as Week,
  dg as default
};
