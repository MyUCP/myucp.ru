! function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    function n(e) {
        var t = e.length,
            n = rt.type(e);
        return "function" === n || rt.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }

    function i(e, t, n) {
        if (rt.isFunction(t)) return rt.grep(e, function(e, i) {
            return !!t.call(e, i, e) !== n
        });
        if (t.nodeType) return rt.grep(e, function(e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (dt.test(t)) return rt.filter(t, e, n);
            t = rt.filter(t, e)
        }
        return rt.grep(e, function(e) {
            return rt.inArray(e, t) >= 0 !== n
        })
    }

    function r(e, t) {
        do e = e[t]; while (e && 1 !== e.nodeType);
        return e
    }

    function o(e) {
        var t = wt[e] = {};
        return rt.each(e.match(bt) || [], function(e, n) {
            t[n] = !0
        }), t
    }

    function a() {
        ht.addEventListener ? (ht.removeEventListener("DOMContentLoaded", s, !1), e.removeEventListener("load", s, !1)) : (ht.detachEvent("onreadystatechange", s), e.detachEvent("onload", s))
    }

    function s() {
        (ht.addEventListener || "load" === event.type || "complete" === ht.readyState) && (a(), rt.ready())
    }

    function l(e, t, n) {
        if (void 0 === n && 1 === e.nodeType) {
            var i = "data-" + t.replace(St, "-$1").toLowerCase();
            if (n = e.getAttribute(i), "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : At.test(n) ? rt.parseJSON(n) : n
                } catch (r) {}
                rt.data(e, t, n)
            } else n = void 0
        }
        return n
    }

    function u(e) {
        var t;
        for (t in e)
            if (("data" !== t || !rt.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }

    function c(e, t, n, i) {
        if (rt.acceptData(e)) {
            var r, o, a = rt.expando,
                s = e.nodeType,
                l = s ? rt.cache : e,
                u = s ? e[a] : e[a] && a;
            if (u && l[u] && (i || l[u].data) || void 0 !== n || "string" != typeof t) return u || (u = s ? e[a] = V.pop() || rt.guid++ : a), l[u] || (l[u] = s ? {} : {
                toJSON: rt.noop
            }), ("object" == typeof t || "function" == typeof t) && (i ? l[u] = rt.extend(l[u], t) : l[u].data = rt.extend(l[u].data, t)), o = l[u], i || (o.data || (o.data = {}), o = o.data), void 0 !== n && (o[rt.camelCase(t)] = n), "string" == typeof t ? (r = o[t], null == r && (r = o[rt.camelCase(t)])) : r = o, r
        }
    }

    function f(e, t, n) {
        if (rt.acceptData(e)) {
            var i, r, o = e.nodeType,
                a = o ? rt.cache : e,
                s = o ? e[rt.expando] : rt.expando;
            if (a[s]) {
                if (t && (i = n ? a[s] : a[s].data)) {
                    rt.isArray(t) ? t = t.concat(rt.map(t, rt.camelCase)) : t in i ? t = [t] : (t = rt.camelCase(t), t = t in i ? [t] : t.split(" ")), r = t.length;
                    for (; r--;) delete i[t[r]];
                    if (n ? !u(i) : !rt.isEmptyObject(i)) return
                }(n || (delete a[s].data, u(a[s]))) && (o ? rt.cleanData([e], !0) : nt.deleteExpando || a != a.window ? delete a[s] : a[s] = null)
            }
        }
    }

    function d() {
        return !0
    }

    function p() {
        return !1
    }

    function h() {
        try {
            return ht.activeElement
        } catch (e) {}
    }

    function m(e) {
        var t = Bt.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement)
            for (; t.length;) n.createElement(t.pop());
        return n
    }

    function g(e, t) {
        var n, i, r = 0,
            o = typeof e.getElementsByTagName !== Ct ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== Ct ? e.querySelectorAll(t || "*") : void 0;
        if (!o)
            for (o = [], n = e.childNodes || e; null != (i = n[r]); r++) !t || rt.nodeName(i, t) ? o.push(i) : rt.merge(o, g(i, t));
        return void 0 === t || t && rt.nodeName(e, t) ? rt.merge([e], o) : o
    }

    function v(e) {
        Ft.test(e.type) && (e.defaultChecked = e.checked)
    }

    function y(e, t) {
        return rt.nodeName(e, "table") && rt.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function b(e) {
        return e.type = (null !== rt.find.attr(e, "type")) + "/" + e.type, e
    }

    function w(e) {
        var t = Gt.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function x(e, t) {
        for (var n, i = 0; null != (n = e[i]); i++) rt._data(n, "globalEval", !t || rt._data(t[i], "globalEval"))
    }

    function T(e, t) {
        if (1 === t.nodeType && rt.hasData(e)) {
            var n, i, r, o = rt._data(e),
                a = rt._data(t, o),
                s = o.events;
            if (s) {
                delete a.handle, a.events = {};
                for (n in s)
                    for (i = 0, r = s[n].length; r > i; i++) rt.event.add(t, n, s[n][i])
            }
            a.data && (a.data = rt.extend({}, a.data))
        }
    }

    function C(e, t) {
        var n, i, r;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !nt.noCloneEvent && t[rt.expando]) {
                r = rt._data(t);
                for (i in r.events) rt.removeEvent(t, i, r.handle);
                t.removeAttribute(rt.expando)
            }
            "script" === n && t.text !== e.text ? (b(t).text = e.text, w(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), nt.html5Clone && e.innerHTML && !rt.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Ft.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }

    function A(t, n) {
        var i, r = rt(n.createElement(t)).appendTo(n.body),
            o = e.getDefaultComputedStyle && (i = e.getDefaultComputedStyle(r[0])) ? i.display : rt.css(r[0], "display");
        return r.detach(), o
    }

    function S(e) {
        var t = ht,
            n = Zt[e];
        return n || (n = A(e, t), "none" !== n && n || (Yt = (Yt || rt("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (Yt[0].contentWindow || Yt[0].contentDocument).document, t.write(), t.close(), n = A(e, t), Yt.detach()), Zt[e] = n), n
    }

    function k(e, t) {
        return {
            get: function() {
                var n = e();
                if (null != n) return n ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function E(e, t) {
        if (t in e) return t;
        for (var n = t.charAt(0).toUpperCase() + t.slice(1), i = t, r = pn.length; r--;)
            if (t = pn[r] + n, t in e) return t;
        return i
    }

    function N(e, t) {
        for (var n, i, r, o = [], a = 0, s = e.length; s > a; a++) i = e[a], i.style && (o[a] = rt._data(i, "olddisplay"), n = i.style.display, t ? (o[a] || "none" !== n || (i.style.display = ""), "" === i.style.display && Nt(i) && (o[a] = rt._data(i, "olddisplay", S(i.nodeName)))) : (r = Nt(i), (n && "none" !== n || !r) && rt._data(i, "olddisplay", r ? n : rt.css(i, "display"))));
        for (a = 0; s > a; a++) i = e[a], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? o[a] || "" : "none"));
        return e
    }

    function _(e, t, n) {
        var i = un.exec(t);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
    }

    function F(e, t, n, i, r) {
        for (var o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2) "margin" === n && (a += rt.css(e, n + Et[o], !0, r)), i ? ("content" === n && (a -= rt.css(e, "padding" + Et[o], !0, r)), "margin" !== n && (a -= rt.css(e, "border" + Et[o] + "Width", !0, r))) : (a += rt.css(e, "padding" + Et[o], !0, r), "padding" !== n && (a += rt.css(e, "border" + Et[o] + "Width", !0, r)));
        return a
    }

    function D(e, t, n) {
        var i = !0,
            r = "width" === t ? e.offsetWidth : e.offsetHeight,
            o = en(e),
            a = nt.boxSizing && "border-box" === rt.css(e, "boxSizing", !1, o);
        if (0 >= r || null == r) {
            if (r = tn(e, t, o), (0 > r || null == r) && (r = e.style[t]), rn.test(r)) return r;
            i = a && (nt.boxSizingReliable() || r === e.style[t]), r = parseFloat(r) || 0
        }
        return r + F(e, t, n || (a ? "border" : "content"), i, o) + "px"
    }

    function I(e, t, n, i, r) {
        return new I.prototype.init(e, t, n, i, r)
    }

    function L() {
        return setTimeout(function() {
            hn = void 0
        }), hn = rt.now()
    }

    function j(e, t) {
        var n, i = {
                height: e
            },
            r = 0;
        for (t = t ? 1 : 0; 4 > r; r += 2 - t) n = Et[r], i["margin" + n] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function R(e, t, n) {
        for (var i, r = (wn[t] || []).concat(wn["*"]), o = 0, a = r.length; a > o; o++)
            if (i = r[o].call(n, t, e)) return i
    }

    function B(e, t, n) {
        var i, r, o, a, s, l, u, c, f = this,
            d = {},
            p = e.style,
            h = e.nodeType && Nt(e),
            m = rt._data(e, "fxshow");
        n.queue || (s = rt._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function() {
            s.unqueued || l()
        }), s.unqueued++, f.always(function() {
            f.always(function() {
                s.unqueued--, rt.queue(e, "fx").length || s.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], u = rt.css(e, "display"), c = "none" === u ? rt._data(e, "olddisplay") || S(e.nodeName) : u, "inline" === c && "none" === rt.css(e, "float") && (nt.inlineBlockNeedsLayout && "inline" !== S(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", nt.shrinkWrapBlocks() || f.always(function() {
            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
        }));
        for (i in t)
            if (r = t[i], gn.exec(r)) {
                if (delete t[i], o = o || "toggle" === r, r === (h ? "hide" : "show")) {
                    if ("show" !== r || !m || void 0 === m[i]) continue;
                    h = !0
                }
                d[i] = m && m[i] || rt.style(e, i)
            } else u = void 0;
        if (rt.isEmptyObject(d)) "inline" === ("none" === u ? S(e.nodeName) : u) && (p.display = u);
        else {
            m ? "hidden" in m && (h = m.hidden) : m = rt._data(e, "fxshow", {}), o && (m.hidden = !h), h ? rt(e).show() : f.done(function() {
                rt(e).hide()
            }), f.done(function() {
                var t;
                rt._removeData(e, "fxshow");
                for (t in d) rt.style(e, t, d[t])
            });
            for (i in d) a = R(h ? m[i] : 0, i, f), i in m || (m[i] = a.start, h && (a.end = a.start, a.start = "width" === i || "height" === i ? 1 : 0))
        }
    }

    function P(e, t) {
        var n, i, r, o, a;
        for (n in e)
            if (i = rt.camelCase(n), r = t[i], o = e[n], rt.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), a = rt.cssHooks[i], a && "expand" in a) {
                o = a.expand(o), delete e[i];
                for (n in o) n in e || (e[n] = o[n], t[n] = r)
            } else t[i] = r
    }

    function O(e, t, n) {
        var i, r, o = 0,
            a = bn.length,
            s = rt.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (r) return !1;
                for (var t = hn || L(), n = Math.max(0, u.startTime + u.duration - t), i = n / u.duration || 0, o = 1 - i, a = 0, l = u.tweens.length; l > a; a++) u.tweens[a].run(o);
                return s.notifyWith(e, [u, o, n]), 1 > o && l ? n : (s.resolveWith(e, [u]), !1)
            },
            u = s.promise({
                elem: e,
                props: rt.extend({}, t),
                opts: rt.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: hn || L(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var i = rt.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                    return u.tweens.push(i), i
                },
                stop: function(t) {
                    var n = 0,
                        i = t ? u.tweens.length : 0;
                    if (r) return this;
                    for (r = !0; i > n; n++) u.tweens[n].run(1);
                    return t ? s.resolveWith(e, [u, t]) : s.rejectWith(e, [u, t]), this
                }
            }),
            c = u.props;
        for (P(c, u.opts.specialEasing); a > o; o++)
            if (i = bn[o].call(u, e, c, u.opts)) return i;
        return rt.map(c, R, u), rt.isFunction(u.opts.start) && u.opts.start.call(e, u), rt.fx.timer(rt.extend(l, {
            elem: e,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function $(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var i, r = 0,
                o = t.toLowerCase().match(bt) || [];
            if (rt.isFunction(n))
                for (; i = o[r++];) "+" === i.charAt(0) ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }

    function H(e, t, n, i) {
        function r(s) {
            var l;
            return o[s] = !0, rt.each(e[s] || [], function(e, s) {
                var u = s(t, n, i);
                return "string" != typeof u || a || o[u] ? a ? !(l = u) : void 0 : (t.dataTypes.unshift(u), r(u), !1)
            }), l
        }
        var o = {},
            a = e === Un;
        return r(t.dataTypes[0]) || !o["*"] && r("*")
    }

    function M(e, t) {
        var n, i, r = rt.ajaxSettings.flatOptions || {};
        for (i in t) void 0 !== t[i] && ((r[i] ? e : n || (n = {}))[i] = t[i]);
        return n && rt.extend(!0, e, n), e
    }

    function q(e, t, n) {
        for (var i, r, o, a, s = e.contents, l = e.dataTypes;
            "*" === l[0];) l.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r)
            for (a in s)
                if (s[a] && s[a].test(r)) {
                    l.unshift(a);
                    break
                }
        if (l[0] in n) o = l[0];
        else {
            for (a in n) {
                if (!l[0] || e.converters[a + " " + l[0]]) {
                    o = a;
                    break
                }
                i || (i = a)
            }
            o = o || i
        }
        return o ? (o !== l[0] && l.unshift(o), n[o]) : void 0
    }

    function z(e, t, n, i) {
        var r, o, a, s, l, u = {},
            c = e.dataTypes.slice();
        if (c[1])
            for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
        for (o = c.shift(); o;)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift())
                if ("*" === o) o = l;
                else if ("*" !== l && l !== o) {
            if (a = u[l + " " + o] || u["* " + o], !a)
                for (r in u)
                    if (s = r.split(" "), s[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                        a === !0 ? a = u[r] : u[r] !== !0 && (o = s[0], c.unshift(s[1]));
                        break
                    }
            if (a !== !0)
                if (a && e["throws"]) t = a(t);
                else try {
                    t = a(t)
                } catch (f) {
                    return {
                        state: "parsererror",
                        error: a ? f : "No conversion from " + l + " to " + o
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function U(e, t, n, i) {
        var r;
        if (rt.isArray(t)) rt.each(t, function(t, r) {
            n || Vn.test(e) ? i(e, r) : U(e + "[" + ("object" == typeof r ? t : "") + "]", r, n, i)
        });
        else if (n || "object" !== rt.type(t)) i(e, t);
        else
            for (r in t) U(e + "[" + r + "]", t[r], n, i)
    }

    function W() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }

    function X() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }

    function G(e) {
        return rt.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }
    var V = [],
        Q = V.slice,
        K = V.concat,
        J = V.push,
        Y = V.indexOf,
        Z = {},
        et = Z.toString,
        tt = Z.hasOwnProperty,
        nt = {},
        it = "1.11.2",
        rt = function(e, t) {
            return new rt.fn.init(e, t)
        },
        ot = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        at = /^-ms-/,
        st = /-([\da-z])/gi,
        lt = function(e, t) {
            return t.toUpperCase()
        };
    rt.fn = rt.prototype = {
        jquery: it,
        constructor: rt,
        selector: "",
        length: 0,
        toArray: function() {
            return Q.call(this)
        },
        get: function(e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : Q.call(this)
        },
        pushStack: function(e) {
            var t = rt.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e, t) {
            return rt.each(this, e, t)
        },
        map: function(e) {
            return this.pushStack(rt.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(Q.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: J,
        sort: V.sort,
        splice: V.splice
    }, rt.extend = rt.fn.extend = function() {
        var e, t, n, i, r, o, a = arguments[0] || {},
            s = 1,
            l = arguments.length,
            u = !1;
        for ("boolean" == typeof a && (u = a, a = arguments[s] || {}, s++), "object" == typeof a || rt.isFunction(a) || (a = {}), s === l && (a = this, s--); l > s; s++)
            if (null != (r = arguments[s]))
                for (i in r) e = a[i], n = r[i], a !== n && (u && n && (rt.isPlainObject(n) || (t = rt.isArray(n))) ? (t ? (t = !1, o = e && rt.isArray(e) ? e : []) : o = e && rt.isPlainObject(e) ? e : {}, a[i] = rt.extend(u, o, n)) : void 0 !== n && (a[i] = n));
        return a
    }, rt.extend({
        expando: "jQuery" + (it + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === rt.type(e)
        },
        isArray: Array.isArray || function(e) {
            return "array" === rt.type(e)
        },
        isWindow: function(e) {
            return null != e && e == e.window
        },
        isNumeric: function(e) {
            return !rt.isArray(e) && e - parseFloat(e) + 1 >= 0
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        isPlainObject: function(e) {
            var t;
            if (!e || "object" !== rt.type(e) || e.nodeType || rt.isWindow(e)) return !1;
            try {
                if (e.constructor && !tt.call(e, "constructor") && !tt.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (n) {
                return !1
            }
            if (nt.ownLast)
                for (t in e) return tt.call(e, t);
            for (t in e);
            return void 0 === t || tt.call(e, t)
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? Z[et.call(e)] || "object" : typeof e
        },
        globalEval: function(t) {
            t && rt.trim(t) && (e.execScript || function(t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function(e) {
            return e.replace(at, "ms-").replace(st, lt)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, i) {
            var r, o = 0,
                a = e.length,
                s = n(e);
            if (i) {
                if (s)
                    for (; a > o && (r = t.apply(e[o], i), r !== !1); o++);
                else
                    for (o in e)
                        if (r = t.apply(e[o], i), r === !1) break
            } else if (s)
                for (; a > o && (r = t.call(e[o], o, e[o]), r !== !1); o++);
            else
                for (o in e)
                    if (r = t.call(e[o], o, e[o]), r === !1) break; return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(ot, "")
        },
        makeArray: function(e, t) {
            var i = t || [];
            return null != e && (n(Object(e)) ? rt.merge(i, "string" == typeof e ? [e] : e) : J.call(i, e)), i
        },
        inArray: function(e, t, n) {
            var i;
            if (t) {
                if (Y) return Y.call(t, e, n);
                for (i = t.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)
                    if (n in t && t[n] === e) return n
            }
            return -1
        },
        merge: function(e, t) {
            for (var n = +t.length, i = 0, r = e.length; n > i;) e[r++] = t[i++];
            if (n !== n)
                for (; void 0 !== t[i];) e[r++] = t[i++];
            return e.length = r, e
        },
        grep: function(e, t, n) {
            for (var i, r = [], o = 0, a = e.length, s = !n; a > o; o++) i = !t(e[o], o), i !== s && r.push(e[o]);
            return r
        },
        map: function(e, t, i) {
            var r, o = 0,
                a = e.length,
                s = n(e),
                l = [];
            if (s)
                for (; a > o; o++) r = t(e[o], o, i), null != r && l.push(r);
            else
                for (o in e) r = t(e[o], o, i), null != r && l.push(r);
            return K.apply([], l)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, i, r;
            return "string" == typeof t && (r = e[t], t = e, e = r), rt.isFunction(e) ? (n = Q.call(arguments, 2), i = function() {
                return e.apply(t || this, n.concat(Q.call(arguments)))
            }, i.guid = e.guid = e.guid || rt.guid++, i) : void 0
        },
        now: function() {
            return +new Date
        },
        support: nt
    }), rt.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        Z["[object " + t + "]"] = t.toLowerCase()
    });
    var ut = function(e) {
        function t(e, t, n, i) {
            var r, o, a, s, l, u, f, p, h, m;
            if ((t ? t.ownerDocument || t : H) !== I && D(t), t = t || I, n = n || [], s = t.nodeType, "string" != typeof e || !e || 1 !== s && 9 !== s && 11 !== s) return n;
            if (!i && j) {
                if (11 !== s && (r = yt.exec(e)))
                    if (a = r[1]) {
                        if (9 === s) {
                            if (o = t.getElementById(a), !o || !o.parentNode) return n;
                            if (o.id === a) return n.push(o), n
                        } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && O(t, o) && o.id === a) return n.push(o), n
                    } else {
                        if (r[2]) return Y.apply(n, t.getElementsByTagName(e)), n;
                        if ((a = r[3]) && x.getElementsByClassName) return Y.apply(n, t.getElementsByClassName(a)), n
                    }
                if (x.qsa && (!R || !R.test(e))) {
                    if (p = f = $, h = t, m = 1 !== s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                        for (u = S(e), (f = t.getAttribute("id")) ? p = f.replace(wt, "\\$&") : t.setAttribute("id", p), p = "[id='" + p + "'] ", l = u.length; l--;) u[l] = p + d(u[l]);
                        h = bt.test(e) && c(t.parentNode) || t, m = u.join(",")
                    }
                    if (m) try {
                        return Y.apply(n, h.querySelectorAll(m)), n
                    } catch (g) {} finally {
                        f || t.removeAttribute("id")
                    }
                }
            }
            return E(e.replace(lt, "$1"), t, n, i)
        }

        function n() {
            function e(n, i) {
                return t.push(n + " ") > T.cacheLength && delete e[t.shift()], e[n + " "] = i
            }
            var t = [];
            return e
        }

        function i(e) {
            return e[$] = !0, e
        }

        function r(e) {
            var t = I.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function o(e, t) {
            for (var n = e.split("|"), i = e.length; i--;) T.attrHandle[n[i]] = t
        }

        function a(e, t) {
            var n = t && e,
                i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || G) - (~e.sourceIndex || G);
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function s(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }

        function l(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function u(e) {
            return i(function(t) {
                return t = +t, i(function(n, i) {
                    for (var r, o = e([], n.length, t), a = o.length; a--;) n[r = o[a]] && (n[r] = !(i[r] = n[r]))
                })
            })
        }

        function c(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }

        function f() {}

        function d(e) {
            for (var t = 0, n = e.length, i = ""; n > t; t++) i += e[t].value;
            return i
        }

        function p(e, t, n) {
            var i = t.dir,
                r = n && "parentNode" === i,
                o = q++;
            return t.first ? function(t, n, o) {
                for (; t = t[i];)
                    if (1 === t.nodeType || r) return e(t, n, o)
            } : function(t, n, a) {
                var s, l, u = [M, o];
                if (a) {
                    for (; t = t[i];)
                        if ((1 === t.nodeType || r) && e(t, n, a)) return !0
                } else
                    for (; t = t[i];)
                        if (1 === t.nodeType || r) {
                            if (l = t[$] || (t[$] = {}), (s = l[i]) && s[0] === M && s[1] === o) return u[2] = s[2];
                            if (l[i] = u, u[2] = e(t, n, a)) return !0
                        }
            }
        }

        function h(e) {
            return e.length > 1 ? function(t, n, i) {
                for (var r = e.length; r--;)
                    if (!e[r](t, n, i)) return !1;
                return !0
            } : e[0]
        }

        function m(e, n, i) {
            for (var r = 0, o = n.length; o > r; r++) t(e, n[r], i);
            return i
        }

        function g(e, t, n, i, r) {
            for (var o, a = [], s = 0, l = e.length, u = null != t; l > s; s++)(o = e[s]) && (!n || n(o, i, r)) && (a.push(o), u && t.push(s));
            return a
        }

        function v(e, t, n, r, o, a) {
            return r && !r[$] && (r = v(r)), o && !o[$] && (o = v(o, a)), i(function(i, a, s, l) {
                var u, c, f, d = [],
                    p = [],
                    h = a.length,
                    v = i || m(t || "*", s.nodeType ? [s] : s, []),
                    y = !e || !i && t ? v : g(v, d, e, s, l),
                    b = n ? o || (i ? e : h || r) ? [] : a : y;
                if (n && n(y, b, s, l), r)
                    for (u = g(b, p), r(u, [], s, l), c = u.length; c--;)(f = u[c]) && (b[p[c]] = !(y[p[c]] = f));
                if (i) {
                    if (o || e) {
                        if (o) {
                            for (u = [], c = b.length; c--;)(f = b[c]) && u.push(y[c] = f);
                            o(null, b = [], u, l)
                        }
                        for (c = b.length; c--;)(f = b[c]) && (u = o ? et(i, f) : d[c]) > -1 && (i[u] = !(a[u] = f))
                    }
                } else b = g(b === a ? b.splice(h, b.length) : b), o ? o(null, a, b, l) : Y.apply(a, b)
            })
        }

        function y(e) {
            for (var t, n, i, r = e.length, o = T.relative[e[0].type], a = o || T.relative[" "], s = o ? 1 : 0, l = p(function(e) {
                    return e === t
                }, a, !0), u = p(function(e) {
                    return et(t, e) > -1
                }, a, !0), c = [function(e, n, i) {
                    var r = !o && (i || n !== N) || ((t = n).nodeType ? l(e, n, i) : u(e, n, i));
                    return t = null, r
                }]; r > s; s++)
                if (n = T.relative[e[s].type]) c = [p(h(c), n)];
                else {
                    if (n = T.filter[e[s].type].apply(null, e[s].matches), n[$]) {
                        for (i = ++s; r > i && !T.relative[e[i].type]; i++);
                        return v(s > 1 && h(c), s > 1 && d(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(lt, "$1"), n, i > s && y(e.slice(s, i)), r > i && y(e = e.slice(i)), r > i && d(e))
                    }
                    c.push(n)
                }
            return h(c)
        }

        function b(e, n) {
            var r = n.length > 0,
                o = e.length > 0,
                a = function(i, a, s, l, u) {
                    var c, f, d, p = 0,
                        h = "0",
                        m = i && [],
                        v = [],
                        y = N,
                        b = i || o && T.find.TAG("*", u),
                        w = M += null == y ? 1 : Math.random() || .1,
                        x = b.length;
                    for (u && (N = a !== I && a); h !== x && null != (c = b[h]); h++) {
                        if (o && c) {
                            for (f = 0; d = e[f++];)
                                if (d(c, a, s)) {
                                    l.push(c);
                                    break
                                }
                            u && (M = w)
                        }
                        r && ((c = !d && c) && p--, i && m.push(c))
                    }
                    if (p += h, r && h !== p) {
                        for (f = 0; d = n[f++];) d(m, v, a, s);
                        if (i) {
                            if (p > 0)
                                for (; h--;) m[h] || v[h] || (v[h] = K.call(l));
                            v = g(v)
                        }
                        Y.apply(l, v), u && !i && v.length > 0 && p + n.length > 1 && t.uniqueSort(l)
                    }
                    return u && (M = w, N = y), m
                };
            return r ? i(a) : a
        }
        var w, x, T, C, A, S, k, E, N, _, F, D, I, L, j, R, B, P, O, $ = "sizzle" + 1 * new Date,
            H = e.document,
            M = 0,
            q = 0,
            z = n(),
            U = n(),
            W = n(),
            X = function(e, t) {
                return e === t && (F = !0), 0
            },
            G = 1 << 31,
            V = {}.hasOwnProperty,
            Q = [],
            K = Q.pop,
            J = Q.push,
            Y = Q.push,
            Z = Q.slice,
            et = function(e, t) {
                for (var n = 0, i = e.length; i > n; n++)
                    if (e[n] === t) return n;
                return -1
            },
            tt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            nt = "[\\x20\\t\\r\\n\\f]",
            it = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            rt = it.replace("w", "w#"),
            ot = "\\[" + nt + "*(" + it + ")(?:" + nt + "*([*^$|!~]?=)" + nt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + rt + "))|)" + nt + "*\\]",
            at = ":(" + it + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ot + ")*)|.*)\\)|)",
            st = new RegExp(nt + "+", "g"),
            lt = new RegExp("^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$", "g"),
            ut = new RegExp("^" + nt + "*," + nt + "*"),
            ct = new RegExp("^" + nt + "*([>+~]|" + nt + ")" + nt + "*"),
            ft = new RegExp("=" + nt + "*([^\\]'\"]*?)" + nt + "*\\]", "g"),
            dt = new RegExp(at),
            pt = new RegExp("^" + rt + "$"),
            ht = {
                ID: new RegExp("^#(" + it + ")"),
                CLASS: new RegExp("^\\.(" + it + ")"),
                TAG: new RegExp("^(" + it.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + ot),
                PSEUDO: new RegExp("^" + at),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + nt + "*(even|odd|(([+-]|)(\\d*)n|)" + nt + "*(?:([+-]|)" + nt + "*(\\d+)|))" + nt + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + tt + ")$", "i"),
                needsContext: new RegExp("^" + nt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + nt + "*((?:-\\d)?\\d*)" + nt + "*\\)|)(?=[^-]|$)", "i")
            },
            mt = /^(?:input|select|textarea|button)$/i,
            gt = /^h\d$/i,
            vt = /^[^{]+\{\s*\[native \w/,
            yt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            bt = /[+~]/,
            wt = /'|\\/g,
            xt = new RegExp("\\\\([\\da-f]{1,6}" + nt + "?|(" + nt + ")|.)", "ig"),
            Tt = function(e, t, n) {
                var i = "0x" + t - 65536;
                return i !== i || n ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            },
            Ct = function() {
                D()
            };
        try {
            Y.apply(Q = Z.call(H.childNodes), H.childNodes), Q[H.childNodes.length].nodeType
        } catch (At) {
            Y = {
                apply: Q.length ? function(e, t) {
                    J.apply(e, Z.call(t))
                } : function(e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];);
                    e.length = n - 1
                }
            }
        }
        x = t.support = {}, A = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }, D = t.setDocument = function(e) {
            var t, n, i = e ? e.ownerDocument || e : H;
            return i !== I && 9 === i.nodeType && i.documentElement ? (I = i, L = i.documentElement, n = i.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", Ct, !1) : n.attachEvent && n.attachEvent("onunload", Ct)), j = !A(i), x.attributes = r(function(e) {
                return e.className = "i", !e.getAttribute("className")
            }), x.getElementsByTagName = r(function(e) {
                return e.appendChild(i.createComment("")), !e.getElementsByTagName("*").length
            }), x.getElementsByClassName = vt.test(i.getElementsByClassName), x.getById = r(function(e) {
                return L.appendChild(e).id = $, !i.getElementsByName || !i.getElementsByName($).length
            }), x.getById ? (T.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && j) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }, T.filter.ID = function(e) {
                var t = e.replace(xt, Tt);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete T.find.ID, T.filter.ID = function(e) {
                var t = e.replace(xt, Tt);
                return function(e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), T.find.TAG = x.getElementsByTagName ? function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : x.qsa ? t.querySelectorAll(e) : void 0
            } : function(e, t) {
                var n, i = [],
                    r = 0,
                    o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                    return i
                }
                return o
            }, T.find.CLASS = x.getElementsByClassName && function(e, t) {
                return j ? t.getElementsByClassName(e) : void 0
            }, B = [], R = [], (x.qsa = vt.test(i.querySelectorAll)) && (r(function(e) {
                L.appendChild(e).innerHTML = "<a id='" + $ + "'></a><select id='" + $ + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && R.push("[*^$]=" + nt + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || R.push("\\[" + nt + "*(?:value|" + tt + ")"), e.querySelectorAll("[id~=" + $ + "-]").length || R.push("~="), e.querySelectorAll(":checked").length || R.push(":checked"), e.querySelectorAll("a#" + $ + "+*").length || R.push(".#.+[+~]")
            }), r(function(e) {
                var t = i.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && R.push("name" + nt + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || R.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), R.push(",.*:")
            })), (x.matchesSelector = vt.test(P = L.matches || L.webkitMatchesSelector || L.mozMatchesSelector || L.oMatchesSelector || L.msMatchesSelector)) && r(function(e) {
                x.disconnectedMatch = P.call(e, "div"), P.call(e, "[s!='']:x"), B.push("!=", at)
            }), R = R.length && new RegExp(R.join("|")), B = B.length && new RegExp(B.join("|")), t = vt.test(L.compareDocumentPosition), O = t || vt.test(L.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
            } : function(e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, X = t ? function(e, t) {
                if (e === t) return F = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !x.sortDetached && t.compareDocumentPosition(e) === n ? e === i || e.ownerDocument === H && O(H, e) ? -1 : t === i || t.ownerDocument === H && O(H, t) ? 1 : _ ? et(_, e) - et(_, t) : 0 : 4 & n ? -1 : 1)
            } : function(e, t) {
                if (e === t) return F = !0, 0;
                var n, r = 0,
                    o = e.parentNode,
                    s = t.parentNode,
                    l = [e],
                    u = [t];
                if (!o || !s) return e === i ? -1 : t === i ? 1 : o ? -1 : s ? 1 : _ ? et(_, e) - et(_, t) : 0;
                if (o === s) return a(e, t);
                for (n = e; n = n.parentNode;) l.unshift(n);
                for (n = t; n = n.parentNode;) u.unshift(n);
                for (; l[r] === u[r];) r++;
                return r ? a(l[r], u[r]) : l[r] === H ? -1 : u[r] === H ? 1 : 0
            }, i) : I
        }, t.matches = function(e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== I && D(e), n = n.replace(ft, "='$1']"), !(!x.matchesSelector || !j || B && B.test(n) || R && R.test(n))) try {
                var i = P.call(e, n);
                if (i || x.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
            } catch (r) {}
            return t(n, I, null, [e]).length > 0
        }, t.contains = function(e, t) {
            return (e.ownerDocument || e) !== I && D(e), O(e, t)
        }, t.attr = function(e, t) {
            (e.ownerDocument || e) !== I && D(e);
            var n = T.attrHandle[t.toLowerCase()],
                i = n && V.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !j) : void 0;
            return void 0 !== i ? i : x.attributes || !j ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }, t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function(e) {
            var t, n = [],
                i = 0,
                r = 0;
            if (F = !x.detectDuplicates, _ = !x.sortStable && e.slice(0), e.sort(X), F) {
                for (; t = e[r++];) t === e[r] && (i = n.push(r));
                for (; i--;) e.splice(n[i], 1)
            }
            return _ = null, e
        }, C = t.getText = function(e) {
            var t, n = "",
                i = 0,
                r = e.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += C(e)
                } else if (3 === r || 4 === r) return e.nodeValue
            } else
                for (; t = e[i++];) n += C(t);
            return n
        }, T = t.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: ht,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(xt, Tt), e[3] = (e[3] || e[4] || e[5] || "").replace(xt, Tt), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return ht.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && dt.test(n) && (t = S(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(xt, Tt).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = z[e + " "];
                    return t || (t = new RegExp("(^|" + nt + ")" + e + "(" + nt + "|$)")) && z(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, n, i) {
                    return function(r) {
                        var o = t.attr(r, e);
                        return null == o ? "!=" === n : n ? (o += "", "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o.replace(st, " ") + " ").indexOf(i) > -1 : "|=" === n ? o === i || o.slice(0, i.length + 1) === i + "-" : !1) : !0
                    }
                },
                CHILD: function(e, t, n, i, r) {
                    var o = "nth" !== e.slice(0, 3),
                        a = "last" !== e.slice(-4),
                        s = "of-type" === t;
                    return 1 === i && 0 === r ? function(e) {
                        return !!e.parentNode
                    } : function(t, n, l) {
                        var u, c, f, d, p, h, m = o !== a ? "nextSibling" : "previousSibling",
                            g = t.parentNode,
                            v = s && t.nodeName.toLowerCase(),
                            y = !l && !s;
                        if (g) {
                            if (o) {
                                for (; m;) {
                                    for (f = t; f = f[m];)
                                        if (s ? f.nodeName.toLowerCase() === v : 1 === f.nodeType) return !1;
                                    h = m = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? g.firstChild : g.lastChild], a && y) {
                                for (c = g[$] || (g[$] = {}), u = c[e] || [], p = u[0] === M && u[1], d = u[0] === M && u[2], f = p && g.childNodes[p]; f = ++p && f && f[m] || (d = p = 0) || h.pop();)
                                    if (1 === f.nodeType && ++d && f === t) {
                                        c[e] = [M, p, d];
                                        break
                                    }
                            } else if (y && (u = (t[$] || (t[$] = {}))[e]) && u[0] === M) d = u[1];
                            else
                                for (;
                                    (f = ++p && f && f[m] || (d = p = 0) || h.pop()) && ((s ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++d || (y && ((f[$] || (f[$] = {}))[e] = [M, d]), f !== t)););
                            return d -= r, d === i || d % i === 0 && d / i >= 0
                        }
                    }
                },
                PSEUDO: function(e, n) {
                    var r, o = T.pseudos[e] || T.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return o[$] ? o(n) : o.length > 1 ? (r = [e, e, "", n], T.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) {
                        for (var i, r = o(e, n), a = r.length; a--;) i = et(e, r[a]), e[i] = !(t[i] = r[a])
                    }) : function(e) {
                        return o(e, 0, r)
                    }) : o
                }
            },
            pseudos: {
                not: i(function(e) {
                    var t = [],
                        n = [],
                        r = k(e.replace(lt, "$1"));
                    return r[$] ? i(function(e, t, n, i) {
                        for (var o, a = r(e, null, i, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                    }) : function(e, i, o) {
                        return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
                    }
                }),
                has: i(function(e) {
                    return function(n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: i(function(e) {
                    return e = e.replace(xt, Tt),
                        function(t) {
                            return (t.textContent || t.innerText || C(t)).indexOf(e) > -1
                        }
                }),
                lang: i(function(e) {
                    return pt.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(xt, Tt).toLowerCase(),
                        function(t) {
                            var n;
                            do
                                if (n = j ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                            while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === L
                },
                focus: function(e) {
                    return e === I.activeElement && (!I.hasFocus || I.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function(e) {
                    return !T.pseudos.empty(e)
                },
                header: function(e) {
                    return gt.test(e.nodeName)
                },
                input: function(e) {
                    return mt.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: u(function() {
                    return [0]
                }),
                last: u(function(e, t) {
                    return [t - 1]
                }),
                eq: u(function(e, t, n) {
                    return [0 > n ? n + t : n]
                }),
                even: u(function(e, t) {
                    for (var n = 0; t > n; n += 2) e.push(n);
                    return e
                }),
                odd: u(function(e, t) {
                    for (var n = 1; t > n; n += 2) e.push(n);
                    return e
                }),
                lt: u(function(e, t, n) {
                    for (var i = 0 > n ? n + t : n; --i >= 0;) e.push(i);
                    return e
                }),
                gt: u(function(e, t, n) {
                    for (var i = 0 > n ? n + t : n; ++i < t;) e.push(i);
                    return e
                })
            }
        }, T.pseudos.nth = T.pseudos.eq;
        for (w in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) T.pseudos[w] = s(w);
        for (w in {
                submit: !0,
                reset: !0
            }) T.pseudos[w] = l(w);
        return f.prototype = T.filters = T.pseudos, T.setFilters = new f, S = t.tokenize = function(e, n) {
            var i, r, o, a, s, l, u, c = U[e + " "];
            if (c) return n ? 0 : c.slice(0);
            for (s = e, l = [], u = T.preFilter; s;) {
                (!i || (r = ut.exec(s))) && (r && (s = s.slice(r[0].length) || s), l.push(o = [])), i = !1, (r = ct.exec(s)) && (i = r.shift(), o.push({
                    value: i,
                    type: r[0].replace(lt, " ")
                }), s = s.slice(i.length));
                for (a in T.filter) !(r = ht[a].exec(s)) || u[a] && !(r = u[a](r)) || (i = r.shift(), o.push({
                    value: i,
                    type: a,
                    matches: r
                }), s = s.slice(i.length));
                if (!i) break
            }
            return n ? s.length : s ? t.error(e) : U(e, l).slice(0)
        }, k = t.compile = function(e, t) {
            var n, i = [],
                r = [],
                o = W[e + " "];
            if (!o) {
                for (t || (t = S(e)), n = t.length; n--;) o = y(t[n]), o[$] ? i.push(o) : r.push(o);
                o = W(e, b(r, i)), o.selector = e
            }
            return o
        }, E = t.select = function(e, t, n, i) {
            var r, o, a, s, l, u = "function" == typeof e && e,
                f = !i && S(e = u.selector || e);
            if (n = n || [], 1 === f.length) {
                if (o = f[0] = f[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && x.getById && 9 === t.nodeType && j && T.relative[o[1].type]) {
                    if (t = (T.find.ID(a.matches[0].replace(xt, Tt), t) || [])[0], !t) return n;
                    u && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                for (r = ht.needsContext.test(e) ? 0 : o.length; r-- && (a = o[r], !T.relative[s = a.type]);)
                    if ((l = T.find[s]) && (i = l(a.matches[0].replace(xt, Tt), bt.test(o[0].type) && c(t.parentNode) || t))) {
                        if (o.splice(r, 1), e = i.length && d(o), !e) return Y.apply(n, i), n;
                        break
                    }
            }
            return (u || k(e, f))(i, t, !j, n, bt.test(e) && c(t.parentNode) || t), n
        }, x.sortStable = $.split("").sort(X).join("") === $, x.detectDuplicates = !!F, D(), x.sortDetached = r(function(e) {
            return 1 & e.compareDocumentPosition(I.createElement("div"))
        }), r(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function(e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), x.attributes && r(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || o("value", function(e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), r(function(e) {
            return null == e.getAttribute("disabled")
        }) || o(tt, function(e, t, n) {
            var i;
            return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }), t
    }(e);
    rt.find = ut, rt.expr = ut.selectors, rt.expr[":"] = rt.expr.pseudos, rt.unique = ut.uniqueSort, rt.text = ut.getText, rt.isXMLDoc = ut.isXML, rt.contains = ut.contains;
    var ct = rt.expr.match.needsContext,
        ft = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        dt = /^.[^:#\[\.,]*$/;
    rt.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? rt.find.matchesSelector(i, e) ? [i] : [] : rt.find.matches(e, rt.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, rt.fn.extend({
        find: function(e) {
            var t, n = [],
                i = this,
                r = i.length;
            if ("string" != typeof e) return this.pushStack(rt(e).filter(function() {
                for (t = 0; r > t; t++)
                    if (rt.contains(i[t], this)) return !0
            }));
            for (t = 0; r > t; t++) rt.find(e, i[t], n);
            return n = this.pushStack(r > 1 ? rt.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
        },
        filter: function(e) {
            return this.pushStack(i(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(i(this, e || [], !0))
        },
        is: function(e) {
            return !!i(this, "string" == typeof e && ct.test(e) ? rt(e) : e || [], !1).length
        }
    });
    var pt, ht = e.document,
        mt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        gt = rt.fn.init = function(e, t) {
            var n, i;
            if (!e) return this;
            if ("string" == typeof e) {
                if (n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : mt.exec(e), !n || !n[1] && t) return !t || t.jquery ? (t || pt).find(e) : this.constructor(t).find(e);
                if (n[1]) {
                    if (t = t instanceof rt ? t[0] : t, rt.merge(this, rt.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : ht, !0)), ft.test(n[1]) && rt.isPlainObject(t))
                        for (n in t) rt.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                    return this
                }
                if (i = ht.getElementById(n[2]), i && i.parentNode) {
                    if (i.id !== n[2]) return pt.find(e);
                    this.length = 1, this[0] = i
                }
                return this.context = ht, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : rt.isFunction(e) ? "undefined" != typeof pt.ready ? pt.ready(e) : e(rt) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), rt.makeArray(e, this))
        };
    gt.prototype = rt.fn, pt = rt(ht);
    var vt = /^(?:parents|prev(?:Until|All))/,
        yt = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    rt.extend({
        dir: function(e, t, n) {
            for (var i = [], r = e[t]; r && 9 !== r.nodeType && (void 0 === n || 1 !== r.nodeType || !rt(r).is(n));) 1 === r.nodeType && i.push(r), r = r[t];
            return i
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    }), rt.fn.extend({
        has: function(e) {
            var t, n = rt(e, this),
                i = n.length;
            return this.filter(function() {
                for (t = 0; i > t; t++)
                    if (rt.contains(this, n[t])) return !0
            })
        },
        closest: function(e, t) {
            for (var n, i = 0, r = this.length, o = [], a = ct.test(e) || "string" != typeof e ? rt(e, t || this.context) : 0; r > i; i++)
                for (n = this[i]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && rt.find.matchesSelector(n, e))) {
                        o.push(n);
                        break
                    }
            return this.pushStack(o.length > 1 ? rt.unique(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? rt.inArray(this[0], rt(e)) : rt.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(rt.unique(rt.merge(this.get(), rt(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), rt.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return rt.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return rt.dir(e, "parentNode", n)
        },
        next: function(e) {
            return r(e, "nextSibling")
        },
        prev: function(e) {
            return r(e, "previousSibling")
        },
        nextAll: function(e) {
            return rt.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return rt.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return rt.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return rt.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return rt.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return rt.sibling(e.firstChild)
        },
        contents: function(e) {
            return rt.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : rt.merge([], e.childNodes)
        }
    }, function(e, t) {
        rt.fn[e] = function(n, i) {
            var r = rt.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = rt.filter(i, r)), this.length > 1 && (yt[e] || (r = rt.unique(r)), vt.test(e) && (r = r.reverse())), this.pushStack(r)
        }
    });
    var bt = /\S+/g,
        wt = {};
    rt.Callbacks = function(e) {
        e = "string" == typeof e ? wt[e] || o(e) : rt.extend({}, e);
        var t, n, i, r, a, s, l = [],
            u = !e.once && [],
            c = function(o) {
                for (n = e.memory && o, i = !0, a = s || 0, s = 0, r = l.length, t = !0; l && r > a; a++)
                    if (l[a].apply(o[0], o[1]) === !1 && e.stopOnFalse) {
                        n = !1;
                        break
                    }
                t = !1, l && (u ? u.length && c(u.shift()) : n ? l = [] : f.disable())
            },
            f = {
                add: function() {
                    if (l) {
                        var i = l.length;
                        ! function o(t) {
                            rt.each(t, function(t, n) {
                                var i = rt.type(n);
                                "function" === i ? e.unique && f.has(n) || l.push(n) : n && n.length && "string" !== i && o(n)
                            })
                        }(arguments), t ? r = l.length : n && (s = i, c(n))
                    }
                    return this
                },
                remove: function() {
                    return l && rt.each(arguments, function(e, n) {
                        for (var i;
                            (i = rt.inArray(n, l, i)) > -1;) l.splice(i, 1), t && (r >= i && r--, a >= i && a--)
                    }), this
                },
                has: function(e) {
                    return e ? rt.inArray(e, l) > -1 : !(!l || !l.length)
                },
                empty: function() {
                    return l = [], r = 0, this
                },
                disable: function() {
                    return l = u = n = void 0, this
                },
                disabled: function() {
                    return !l
                },
                lock: function() {
                    return u = void 0, n || f.disable(), this
                },
                locked: function() {
                    return !u
                },
                fireWith: function(e, n) {
                    return !l || i && !u || (n = n || [], n = [e, n.slice ? n.slice() : n], t ? u.push(n) : c(n)), this
                },
                fire: function() {
                    return f.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!i
                }
            };
        return f
    }, rt.extend({
        Deferred: function(e) {
            var t = [
                    ["resolve", "done", rt.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", rt.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", rt.Callbacks("memory")]
                ],
                n = "pending",
                i = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return r.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return rt.Deferred(function(n) {
                            rt.each(t, function(t, o) {
                                var a = rt.isFunction(e[t]) && e[t];
                                r[o[1]](function() {
                                    var e = a && a.apply(this, arguments);
                                    e && rt.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === i ? n.promise() : this, a ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? rt.extend(e, i) : i
                    }
                },
                r = {};
            return i.pipe = i.then, rt.each(t, function(e, o) {
                var a = o[2],
                    s = o[3];
                i[o[1]] = a.add, s && a.add(function() {
                    n = s
                }, t[1 ^ e][2].disable, t[2][2].lock), r[o[0]] = function() {
                    return r[o[0] + "With"](this === r ? i : this, arguments), this
                }, r[o[0] + "With"] = a.fireWith
            }), i.promise(r), e && e.call(r, r), r
        },
        when: function(e) {
            var t, n, i, r = 0,
                o = Q.call(arguments),
                a = o.length,
                s = 1 !== a || e && rt.isFunction(e.promise) ? a : 0,
                l = 1 === s ? e : rt.Deferred(),
                u = function(e, n, i) {
                    return function(r) {
                        n[e] = this, i[e] = arguments.length > 1 ? Q.call(arguments) : r, i === t ? l.notifyWith(n, i) : --s || l.resolveWith(n, i)
                    }
                };
            if (a > 1)
                for (t = new Array(a), n = new Array(a), i = new Array(a); a > r; r++) o[r] && rt.isFunction(o[r].promise) ? o[r].promise().done(u(r, i, o)).fail(l.reject).progress(u(r, n, t)) : --s;
            return s || l.resolveWith(i, o), l.promise()
        }
    });
    var xt;
    rt.fn.ready = function(e) {
        return rt.ready.promise().done(e), this
    }, rt.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? rt.readyWait++ : rt.ready(!0)
        },
        ready: function(e) {
            if (e === !0 ? !--rt.readyWait : !rt.isReady) {
                if (!ht.body) return setTimeout(rt.ready);
                rt.isReady = !0, e !== !0 && --rt.readyWait > 0 || (xt.resolveWith(ht, [rt]), rt.fn.triggerHandler && (rt(ht).triggerHandler("ready"), rt(ht).off("ready")))
            }
        }
    }), rt.ready.promise = function(t) {
        if (!xt)
            if (xt = rt.Deferred(), "complete" === ht.readyState) setTimeout(rt.ready);
            else if (ht.addEventListener) ht.addEventListener("DOMContentLoaded", s, !1), e.addEventListener("load", s, !1);
        else {
            ht.attachEvent("onreadystatechange", s), e.attachEvent("onload", s);
            var n = !1;
            try {
                n = null == e.frameElement && ht.documentElement
            } catch (i) {}
            n && n.doScroll && ! function r() {
                if (!rt.isReady) {
                    try {
                        n.doScroll("left")
                    } catch (e) {
                        return setTimeout(r, 50)
                    }
                    a(), rt.ready()
                }
            }()
        }
        return xt.promise(t)
    };
    var Tt, Ct = "undefined";
    for (Tt in rt(nt)) break;
    nt.ownLast = "0" !== Tt, nt.inlineBlockNeedsLayout = !1, rt(function() {
            var e, t, n, i;
            n = ht.getElementsByTagName("body")[0], n && n.style && (t = ht.createElement("div"), i = ht.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), typeof t.style.zoom !== Ct && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", nt.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(i))
        }),
        function() {
            var e = ht.createElement("div");
            if (null == nt.deleteExpando) {
                nt.deleteExpando = !0;
                try {
                    delete e.test
                } catch (t) {
                    nt.deleteExpando = !1
                }
            }
            e = null
        }(), rt.acceptData = function(e) {
            var t = rt.noData[(e.nodeName + " ").toLowerCase()],
                n = +e.nodeType || 1;
            return 1 !== n && 9 !== n ? !1 : !t || t !== !0 && e.getAttribute("classid") === t
        };
    var At = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        St = /([A-Z])/g;
    rt.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(e) {
            return e = e.nodeType ? rt.cache[e[rt.expando]] : e[rt.expando], !!e && !u(e)
        },
        data: function(e, t, n) {
            return c(e, t, n)
        },
        removeData: function(e, t) {
            return f(e, t)
        },
        _data: function(e, t, n) {
            return c(e, t, n, !0)
        },
        _removeData: function(e, t) {
            return f(e, t, !0)
        }
    }), rt.fn.extend({
        data: function(e, t) {
            var n, i, r, o = this[0],
                a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (r = rt.data(o), 1 === o.nodeType && !rt._data(o, "parsedAttrs"))) {
                    for (n = a.length; n--;) a[n] && (i = a[n].name, 0 === i.indexOf("data-") && (i = rt.camelCase(i.slice(5)), l(o, i, r[i])));
                    rt._data(o, "parsedAttrs", !0)
                }
                return r
            }
            return "object" == typeof e ? this.each(function() {
                rt.data(this, e)
            }) : arguments.length > 1 ? this.each(function() {
                rt.data(this, e, t)
            }) : o ? l(o, e, rt.data(o, e)) : void 0
        },
        removeData: function(e) {
            return this.each(function() {
                rt.removeData(this, e)
            })
        }
    }), rt.extend({
        queue: function(e, t, n) {
            var i;
            return e ? (t = (t || "fx") + "queue", i = rt._data(e, t), n && (!i || rt.isArray(n) ? i = rt._data(e, t, rt.makeArray(n)) : i.push(n)), i || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = rt.queue(e, t),
                i = n.length,
                r = n.shift(),
                o = rt._queueHooks(e, t),
                a = function() {
                    rt.dequeue(e, t)
                };
            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, a, o)), !i && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return rt._data(e, n) || rt._data(e, n, {
                empty: rt.Callbacks("once memory").add(function() {
                    rt._removeData(e, t + "queue"), rt._removeData(e, n)
                })
            })
        }
    }), rt.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? rt.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = rt.queue(this, e, t);
                rt._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && rt.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                rt.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, i = 1,
                r = rt.Deferred(),
                o = this,
                a = this.length,
                s = function() {
                    --i || r.resolveWith(o, [o])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) n = rt._data(o[a], e + "queueHooks"), n && n.empty && (i++, n.empty.add(s));
            return s(), r.promise(t)
        }
    });
    var kt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Et = ["Top", "Right", "Bottom", "Left"],
        Nt = function(e, t) {
            return e = t || e, "none" === rt.css(e, "display") || !rt.contains(e.ownerDocument, e)
        },
        _t = rt.access = function(e, t, n, i, r, o, a) {
            var s = 0,
                l = e.length,
                u = null == n;
            if ("object" === rt.type(n)) {
                r = !0;
                for (s in n) rt.access(e, t, s, n[s], !0, o, a)
            } else if (void 0 !== i && (r = !0, rt.isFunction(i) || (a = !0), u && (a ? (t.call(e, i), t = null) : (u = t, t = function(e, t, n) {
                    return u.call(rt(e), n)
                })), t))
                for (; l > s; s++) t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
            return r ? e : u ? t.call(e) : l ? t(e[0], n) : o
        },
        Ft = /^(?:checkbox|radio)$/i;
    ! function() {
        var e = ht.createElement("input"),
            t = ht.createElement("div"),
            n = ht.createDocumentFragment();
        if (t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", nt.leadingWhitespace = 3 === t.firstChild.nodeType, nt.tbody = !t.getElementsByTagName("tbody").length, nt.htmlSerialize = !!t.getElementsByTagName("link").length, nt.html5Clone = "<:nav></:nav>" !== ht.createElement("nav").cloneNode(!0).outerHTML, e.type = "checkbox", e.checked = !0, n.appendChild(e), nt.appendChecked = e.checked, t.innerHTML = "<textarea>x</textarea>", nt.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, n.appendChild(t), t.innerHTML = "<input type='radio' checked='checked' name='t'/>", nt.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, nt.noCloneEvent = !0, t.attachEvent && (t.attachEvent("onclick", function() {
                nt.noCloneEvent = !1
            }), t.cloneNode(!0).click()), null == nt.deleteExpando) {
            nt.deleteExpando = !0;
            try {
                delete t.test
            } catch (i) {
                nt.deleteExpando = !1
            }
        }
    }(),
    function() {
        var t, n, i = ht.createElement("div");
        for (t in {
                submit: !0,
                change: !0,
                focusin: !0
            }) n = "on" + t, (nt[t + "Bubbles"] = n in e) || (i.setAttribute(n, "t"), nt[t + "Bubbles"] = i.attributes[n].expando === !1);
        i = null
    }();
    var Dt = /^(?:input|select|textarea)$/i,
        It = /^key/,
        Lt = /^(?:mouse|pointer|contextmenu)|click/,
        jt = /^(?:focusinfocus|focusoutblur)$/,
        Rt = /^([^.]*)(?:\.(.+)|)$/;
    rt.event = {
        global: {},
        add: function(e, t, n, i, r) {
            var o, a, s, l, u, c, f, d, p, h, m, g = rt._data(e);
            if (g) {
                for (n.handler && (l = n, n = l.handler, r = l.selector), n.guid || (n.guid = rt.guid++), (a = g.events) || (a = g.events = {}), (c = g.handle) || (c = g.handle = function(e) {
                        return typeof rt === Ct || e && rt.event.triggered === e.type ? void 0 : rt.event.dispatch.apply(c.elem, arguments)
                    }, c.elem = e), t = (t || "").match(bt) || [""], s = t.length; s--;) o = Rt.exec(t[s]) || [], p = m = o[1], h = (o[2] || "").split(".").sort(), p && (u = rt.event.special[p] || {}, p = (r ? u.delegateType : u.bindType) || p, u = rt.event.special[p] || {}, f = rt.extend({
                    type: p,
                    origType: m,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: r,
                    needsContext: r && rt.expr.match.needsContext.test(r),
                    namespace: h.join(".")
                }, l), (d = a[p]) || (d = a[p] = [], d.delegateCount = 0, u.setup && u.setup.call(e, i, h, c) !== !1 || (e.addEventListener ? e.addEventListener(p, c, !1) : e.attachEvent && e.attachEvent("on" + p, c))), u.add && (u.add.call(e, f), f.handler.guid || (f.handler.guid = n.guid)), r ? d.splice(d.delegateCount++, 0, f) : d.push(f), rt.event.global[p] = !0);
                e = null
            }
        },
        remove: function(e, t, n, i, r) {
            var o, a, s, l, u, c, f, d, p, h, m, g = rt.hasData(e) && rt._data(e);
            if (g && (c = g.events)) {
                for (t = (t || "").match(bt) || [""], u = t.length; u--;)
                    if (s = Rt.exec(t[u]) || [], p = m = s[1], h = (s[2] || "").split(".").sort(), p) {
                        for (f = rt.event.special[p] || {}, p = (i ? f.delegateType : f.bindType) || p, d = c[p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = d.length; o--;) a = d[o], !r && m !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || i && i !== a.selector && ("**" !== i || !a.selector) || (d.splice(o, 1), a.selector && d.delegateCount--, f.remove && f.remove.call(e, a));
                        l && !d.length && (f.teardown && f.teardown.call(e, h, g.handle) !== !1 || rt.removeEvent(e, p, g.handle), delete c[p])
                    } else
                        for (p in c) rt.event.remove(e, p + t[u], n, i, !0);
                rt.isEmptyObject(c) && (delete g.handle, rt._removeData(e, "events"))
            }
        },
        trigger: function(t, n, i, r) {
            var o, a, s, l, u, c, f, d = [i || ht],
                p = tt.call(t, "type") ? t.type : t,
                h = tt.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = c = i = i || ht, 3 !== i.nodeType && 8 !== i.nodeType && !jt.test(p + rt.event.triggered) && (p.indexOf(".") >= 0 && (h = p.split("."), p = h.shift(), h.sort()), a = p.indexOf(":") < 0 && "on" + p, t = t[rt.expando] ? t : new rt.Event(p, "object" == typeof t && t), t.isTrigger = r ? 2 : 3, t.namespace = h.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : rt.makeArray(n, [t]), u = rt.event.special[p] || {}, r || !u.trigger || u.trigger.apply(i, n) !== !1)) {
                if (!r && !u.noBubble && !rt.isWindow(i)) {
                    for (l = u.delegateType || p, jt.test(l + p) || (s = s.parentNode); s; s = s.parentNode) d.push(s), c = s;
                    c === (i.ownerDocument || ht) && d.push(c.defaultView || c.parentWindow || e)
                }
                for (f = 0;
                    (s = d[f++]) && !t.isPropagationStopped();) t.type = f > 1 ? l : u.bindType || p, o = (rt._data(s, "events") || {})[t.type] && rt._data(s, "handle"), o && o.apply(s, n), o = a && s[a], o && o.apply && rt.acceptData(s) && (t.result = o.apply(s, n), t.result === !1 && t.preventDefault());
                if (t.type = p, !r && !t.isDefaultPrevented() && (!u._default || u._default.apply(d.pop(), n) === !1) && rt.acceptData(i) && a && i[p] && !rt.isWindow(i)) {
                    c = i[a], c && (i[a] = null), rt.event.triggered = p;
                    try {
                        i[p]()
                    } catch (m) {}
                    rt.event.triggered = void 0, c && (i[a] = c)
                }
                return t.result
            }
        },
        dispatch: function(e) {
            e = rt.event.fix(e);
            var t, n, i, r, o, a = [],
                s = Q.call(arguments),
                l = (rt._data(this, "events") || {})[e.type] || [],
                u = rt.event.special[e.type] || {};
            if (s[0] = e, e.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, e) !== !1) {
                for (a = rt.event.handlers.call(this, e, l), t = 0;
                    (r = a[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = r.elem, o = 0;
                        (i = r.handlers[o++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, n = ((rt.event.special[i.origType] || {}).handle || i.handler).apply(r.elem, s), void 0 !== n && (e.result = n) === !1 && (e.preventDefault(), e.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, t) {
            var n, i, r, o, a = [],
                s = t.delegateCount,
                l = e.target;
            if (s && l.nodeType && (!e.button || "click" !== e.type))
                for (; l != this; l = l.parentNode || this)
                    if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
                        for (r = [], o = 0; s > o; o++) i = t[o], n = i.selector + " ", void 0 === r[n] && (r[n] = i.needsContext ? rt(n, this).index(l) >= 0 : rt.find(n, this, null, [l]).length), r[n] && r.push(i);
                        r.length && a.push({
                            elem: l,
                            handlers: r
                        })
                    }
            return s < t.length && a.push({
                elem: this,
                handlers: t.slice(s)
            }), a
        },
        fix: function(e) {
            if (e[rt.expando]) return e;
            var t, n, i, r = e.type,
                o = e,
                a = this.fixHooks[r];
            for (a || (this.fixHooks[r] = a = Lt.test(r) ? this.mouseHooks : It.test(r) ? this.keyHooks : {}), i = a.props ? this.props.concat(a.props) : this.props, e = new rt.Event(o), t = i.length; t--;) n = i[t], e[n] = o[n];
            return e.target || (e.target = o.srcElement || ht), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, o) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, i, r, o = t.button,
                    a = t.fromElement;
                return null == e.pageX && null != t.clientX && (i = e.target.ownerDocument || ht, r = i.documentElement, n = i.body, e.pageX = t.clientX + (r && r.scrollLeft || n && n.scrollLeft || 0) - (r && r.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || n && n.scrollTop || 0) - (r && r.clientTop || n && n.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== h() && this.focus) try {
                        return this.focus(), !1
                    } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === h() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return rt.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function(e) {
                    return rt.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, i) {
            var r = rt.extend(new rt.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            i ? rt.event.trigger(r, null, t) : rt.event.dispatch.call(t, r), r.isDefaultPrevented() && n.preventDefault()
        }
    }, rt.removeEvent = ht.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function(e, t, n) {
        var i = "on" + t;
        e.detachEvent && (typeof e[i] === Ct && (e[i] = null), e.detachEvent(i, n))
    }, rt.Event = function(e, t) {
        return this instanceof rt.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? d : p) : this.type = e, t && rt.extend(this, t), this.timeStamp = e && e.timeStamp || rt.now(), void(this[rt.expando] = !0)) : new rt.Event(e, t)
    }, rt.Event.prototype = {
        isDefaultPrevented: p,
        isPropagationStopped: p,
        isImmediatePropagationStopped: p,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = d, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = d, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = d, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, rt.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        rt.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, i = this,
                    r = e.relatedTarget,
                    o = e.handleObj;
                return (!r || r !== i && !rt.contains(i, r)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), nt.submitBubbles || (rt.event.special.submit = {
        setup: function() {
            return rt.nodeName(this, "form") ? !1 : void rt.event.add(this, "click._submit keypress._submit", function(e) {
                var t = e.target,
                    n = rt.nodeName(t, "input") || rt.nodeName(t, "button") ? t.form : void 0;
                n && !rt._data(n, "submitBubbles") && (rt.event.add(n, "submit._submit", function(e) {
                    e._submit_bubble = !0
                }), rt._data(n, "submitBubbles", !0))
            })
        },
        postDispatch: function(e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && rt.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function() {
            return rt.nodeName(this, "form") ? !1 : void rt.event.remove(this, "._submit")
        }
    }), nt.changeBubbles || (rt.event.special.change = {
        setup: function() {
            return Dt.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (rt.event.add(this, "propertychange._change", function(e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), rt.event.add(this, "click._change", function(e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1), rt.event.simulate("change", this, e, !0)
            })), !1) : void rt.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                Dt.test(t.nodeName) && !rt._data(t, "changeBubbles") && (rt.event.add(t, "change._change", function(e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || rt.event.simulate("change", this.parentNode, e, !0)
                }), rt._data(t, "changeBubbles", !0))
            })
        },
        handle: function(e) {
            var t = e.target;
            return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return rt.event.remove(this, "._change"), !Dt.test(this.nodeName)
        }
    }), nt.focusinBubbles || rt.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            rt.event.simulate(t, e.target, rt.event.fix(e), !0)
        };
        rt.event.special[t] = {
            setup: function() {
                var i = this.ownerDocument || this,
                    r = rt._data(i, t);
                r || i.addEventListener(e, n, !0), rt._data(i, t, (r || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this,
                    r = rt._data(i, t) - 1;
                r ? rt._data(i, t, r) : (i.removeEventListener(e, n, !0), rt._removeData(i, t))
            }
        }
    }), rt.fn.extend({
        on: function(e, t, n, i, r) {
            var o, a;
            if ("object" == typeof e) {
                "string" != typeof t && (n = n || t, t = void 0);
                for (o in e) this.on(o, t, n, e[o], r);
                return this
            }
            if (null == n && null == i ? (i = t, n = t = void 0) : null == i && ("string" == typeof t ? (i = n, n = void 0) : (i = n, n = t, t = void 0)), i === !1) i = p;
            else if (!i) return this;
            return 1 === r && (a = i, i = function(e) {
                return rt().off(e), a.apply(this, arguments)
            }, i.guid = a.guid || (a.guid = rt.guid++)), this.each(function() {
                rt.event.add(this, e, i, n, t)
            })
        },
        one: function(e, t, n, i) {
            return this.on(e, t, n, i, 1)
        },
        off: function(e, t, n) {
            var i, r;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, rt(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (r in e) this.off(r, t, e[r]);
                return this
            }
            return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = p), this.each(function() {
                rt.event.remove(this, e, n, t)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                rt.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            return n ? rt.event.trigger(e, t, n, !0) : void 0
        }
    });
    var Bt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        Pt = / jQuery\d+="(?:null|\d+)"/g,
        Ot = new RegExp("<(?:" + Bt + ")[\\s/>]", "i"),
        $t = /^\s+/,
        Ht = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Mt = /<([\w:]+)/,
        qt = /<tbody/i,
        zt = /<|&#?\w+;/,
        Ut = /<(?:script|style|link)/i,
        Wt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Xt = /^$|\/(?:java|ecma)script/i,
        Gt = /^true\/(.*)/,
        Vt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Qt = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: nt.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        Kt = m(ht),
        Jt = Kt.appendChild(ht.createElement("div"));
    Qt.optgroup = Qt.option, Qt.tbody = Qt.tfoot = Qt.colgroup = Qt.caption = Qt.thead, Qt.th = Qt.td, rt.extend({
        clone: function(e, t, n) {
            var i, r, o, a, s, l = rt.contains(e.ownerDocument, e);
            if (nt.html5Clone || rt.isXMLDoc(e) || !Ot.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Jt.innerHTML = e.outerHTML, Jt.removeChild(o = Jt.firstChild)), !(nt.noCloneEvent && nt.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || rt.isXMLDoc(e)))
                for (i = g(o), s = g(e), a = 0; null != (r = s[a]); ++a) i[a] && C(r, i[a]);
            if (t)
                if (n)
                    for (s = s || g(e), i = i || g(o), a = 0; null != (r = s[a]); a++) T(r, i[a]);
                else T(e, o);
            return i = g(o, "script"), i.length > 0 && x(i, !l && g(e, "script")), i = s = r = null, o
        },
        buildFragment: function(e, t, n, i) {
            for (var r, o, a, s, l, u, c, f = e.length, d = m(t), p = [], h = 0; f > h; h++)
                if (o = e[h], o || 0 === o)
                    if ("object" === rt.type(o)) rt.merge(p, o.nodeType ? [o] : o);
                    else if (zt.test(o)) {
                for (s = s || d.appendChild(t.createElement("div")), l = (Mt.exec(o) || ["", ""])[1].toLowerCase(), c = Qt[l] || Qt._default, s.innerHTML = c[1] + o.replace(Ht, "<$1></$2>") + c[2], r = c[0]; r--;) s = s.lastChild;
                if (!nt.leadingWhitespace && $t.test(o) && p.push(t.createTextNode($t.exec(o)[0])), !nt.tbody)
                    for (o = "table" !== l || qt.test(o) ? "<table>" !== c[1] || qt.test(o) ? 0 : s : s.firstChild, r = o && o.childNodes.length; r--;) rt.nodeName(u = o.childNodes[r], "tbody") && !u.childNodes.length && o.removeChild(u);
                for (rt.merge(p, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
                s = d.lastChild
            } else p.push(t.createTextNode(o));
            for (s && d.removeChild(s), nt.appendChecked || rt.grep(g(p, "input"), v), h = 0; o = p[h++];)
                if ((!i || -1 === rt.inArray(o, i)) && (a = rt.contains(o.ownerDocument, o), s = g(d.appendChild(o), "script"), a && x(s), n))
                    for (r = 0; o = s[r++];) Xt.test(o.type || "") && n.push(o);
            return s = null, d
        },
        cleanData: function(e, t) {
            for (var n, i, r, o, a = 0, s = rt.expando, l = rt.cache, u = nt.deleteExpando, c = rt.event.special; null != (n = e[a]); a++)
                if ((t || rt.acceptData(n)) && (r = n[s], o = r && l[r])) {
                    if (o.events)
                        for (i in o.events) c[i] ? rt.event.remove(n, i) : rt.removeEvent(n, i, o.handle);
                    l[r] && (delete l[r], u ? delete n[s] : typeof n.removeAttribute !== Ct ? n.removeAttribute(s) : n[s] = null, V.push(r))
                }
        }
    }), rt.fn.extend({
        text: function(e) {
            return _t(this, function(e) {
                return void 0 === e ? rt.text(this) : this.empty().append((this[0] && this[0].ownerDocument || ht).createTextNode(e))
            }, null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = y(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = y(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            for (var n, i = e ? rt.filter(e, this) : this, r = 0; null != (n = i[r]); r++) t || 1 !== n.nodeType || rt.cleanData(g(n)), n.parentNode && (t && rt.contains(n.ownerDocument, n) && x(g(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && rt.cleanData(g(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                e.options && rt.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                return rt.clone(this, e, t)
            })
        },
        html: function(e) {
            return _t(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(Pt, "") : void 0;
                if (!("string" != typeof e || Ut.test(e) || !nt.htmlSerialize && Ot.test(e) || !nt.leadingWhitespace && $t.test(e) || Qt[(Mt.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(Ht, "<$1></$2>");
                    try {
                        for (; i > n; n++) t = this[n] || {}, 1 === t.nodeType && (rt.cleanData(g(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (r) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = arguments[0];
            return this.domManip(arguments, function(t) {
                e = this.parentNode, rt.cleanData(g(this)), e && e.replaceChild(t, this)
            }), e && (e.length || e.nodeType) ? this : this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, t) {
            e = K.apply([], e);
            var n, i, r, o, a, s, l = 0,
                u = this.length,
                c = this,
                f = u - 1,
                d = e[0],
                p = rt.isFunction(d);
            if (p || u > 1 && "string" == typeof d && !nt.checkClone && Wt.test(d)) return this.each(function(n) {
                var i = c.eq(n);
                p && (e[0] = d.call(this, n, i.html())), i.domManip(e, t)
            });
            if (u && (s = rt.buildFragment(e, this[0].ownerDocument, !1, this), n = s.firstChild, 1 === s.childNodes.length && (s = n), n)) {
                for (o = rt.map(g(s, "script"), b), r = o.length; u > l; l++) i = s, l !== f && (i = rt.clone(i, !0, !0), r && rt.merge(o, g(i, "script"))), t.call(this[l], i, l);
                if (r)
                    for (a = o[o.length - 1].ownerDocument, rt.map(o, w), l = 0; r > l; l++) i = o[l], Xt.test(i.type || "") && !rt._data(i, "globalEval") && rt.contains(a, i) && (i.src ? rt._evalUrl && rt._evalUrl(i.src) : rt.globalEval((i.text || i.textContent || i.innerHTML || "").replace(Vt, "")));
                s = n = null
            }
            return this
        }
    }), rt.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        rt.fn[e] = function(e) {
            for (var n, i = 0, r = [], o = rt(e), a = o.length - 1; a >= i; i++) n = i === a ? this : this.clone(!0), rt(o[i])[t](n), J.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var Yt, Zt = {};
    ! function() {
        var e;
        nt.shrinkWrapBlocks = function() {
            if (null != e) return e;
            e = !1;
            var t, n, i;
            return n = ht.getElementsByTagName("body")[0], n && n.style ? (t = ht.createElement("div"), i = ht.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), typeof t.style.zoom !== Ct && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(ht.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), n.removeChild(i), e) : void 0
        }
    }();
    var en, tn, nn = /^margin/,
        rn = new RegExp("^(" + kt + ")(?!px)[a-z%]+$", "i"),
        on = /^(top|right|bottom|left)$/;
    e.getComputedStyle ? (en = function(t) {
            return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : e.getComputedStyle(t, null)
        }, tn = function(e, t, n) {
            var i, r, o, a, s = e.style;
            return n = n || en(e), a = n ? n.getPropertyValue(t) || n[t] : void 0, n && ("" !== a || rt.contains(e.ownerDocument, e) || (a = rt.style(e, t)), rn.test(a) && nn.test(t) && (i = s.width, r = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = r, s.maxWidth = o)), void 0 === a ? a : a + ""
        }) : ht.documentElement.currentStyle && (en = function(e) {
            return e.currentStyle
        }, tn = function(e, t, n) {
            var i, r, o, a, s = e.style;
            return n = n || en(e), a = n ? n[t] : void 0, null == a && s && s[t] && (a = s[t]), rn.test(a) && !on.test(t) && (i = s.left, r = e.runtimeStyle, o = r && r.left, o && (r.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em" : a, a = s.pixelLeft + "px", s.left = i, o && (r.left = o)), void 0 === a ? a : a + "" || "auto"
        }),
        function() {
            function t() {
                var t, n, i, r;
                n = ht.getElementsByTagName("body")[0], n && n.style && (t = ht.createElement("div"), i = ht.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), t.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", o = a = !1, l = !0, e.getComputedStyle && (o = "1%" !== (e.getComputedStyle(t, null) || {}).top, a = "4px" === (e.getComputedStyle(t, null) || {
                    width: "4px"
                }).width, r = t.appendChild(ht.createElement("div")), r.style.cssText = t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", r.style.marginRight = r.style.width = "0", t.style.width = "1px", l = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight), t.removeChild(r)), t.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", r = t.getElementsByTagName("td"), r[0].style.cssText = "margin:0;border:0;padding:0;display:none", s = 0 === r[0].offsetHeight, s && (r[0].style.display = "", r[1].style.display = "none", s = 0 === r[0].offsetHeight), n.removeChild(i))
            }
            var n, i, r, o, a, s, l;
            n = ht.createElement("div"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", r = n.getElementsByTagName("a")[0], i = r && r.style, i && (i.cssText = "float:left;opacity:.5", nt.opacity = "0.5" === i.opacity, nt.cssFloat = !!i.cssFloat, n.style.backgroundClip = "content-box", n.cloneNode(!0).style.backgroundClip = "", nt.clearCloneStyle = "content-box" === n.style.backgroundClip, nt.boxSizing = "" === i.boxSizing || "" === i.MozBoxSizing || "" === i.WebkitBoxSizing, rt.extend(nt, {
                reliableHiddenOffsets: function() {
                    return null == s && t(), s
                },
                boxSizingReliable: function() {
                    return null == a && t(), a
                },
                pixelPosition: function() {
                    return null == o && t(), o
                },
                reliableMarginRight: function() {
                    return null == l && t(), l
                }
            }))
        }(), rt.swap = function(e, t, n, i) {
            var r, o, a = {};
            for (o in t) a[o] = e.style[o], e.style[o] = t[o];
            r = n.apply(e, i || []);
            for (o in t) e.style[o] = a[o];
            return r
        };
    var an = /alpha\([^)]*\)/i,
        sn = /opacity\s*=\s*([^)]*)/,
        ln = /^(none|table(?!-c[ea]).+)/,
        un = new RegExp("^(" + kt + ")(.*)$", "i"),
        cn = new RegExp("^([+-])=(" + kt + ")", "i"),
        fn = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        dn = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        pn = ["Webkit", "O", "Moz", "ms"];
    rt.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = tn(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": nt.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, o, a, s = rt.camelCase(t),
                    l = e.style;
                if (t = rt.cssProps[s] || (rt.cssProps[s] = E(l, s)), a = rt.cssHooks[t] || rt.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (r = a.get(e, !1, i)) ? r : l[t];
                if (o = typeof n, "string" === o && (r = cn.exec(n)) && (n = (r[1] + 1) * r[2] + parseFloat(rt.css(e, t)), o = "number"), null != n && n === n && ("number" !== o || rt.cssNumber[s] || (n += "px"), nt.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), !(a && "set" in a && void 0 === (n = a.set(e, n, i))))) try {
                    l[t] = n
                } catch (u) {}
            }
        },
        css: function(e, t, n, i) {
            var r, o, a, s = rt.camelCase(t);
            return t = rt.cssProps[s] || (rt.cssProps[s] = E(e.style, s)), a = rt.cssHooks[t] || rt.cssHooks[s], a && "get" in a && (o = a.get(e, !0, n)), void 0 === o && (o = tn(e, t, i)), "normal" === o && t in dn && (o = dn[t]), "" === n || n ? (r = parseFloat(o), n === !0 || rt.isNumeric(r) ? r || 0 : o) : o
        }
    }), rt.each(["height", "width"], function(e, t) {
        rt.cssHooks[t] = {
            get: function(e, n, i) {
                return n ? ln.test(rt.css(e, "display")) && 0 === e.offsetWidth ? rt.swap(e, fn, function() {
                    return D(e, t, i)
                }) : D(e, t, i) : void 0
            },
            set: function(e, n, i) {
                var r = i && en(e);
                return _(e, n, i ? F(e, t, i, nt.boxSizing && "border-box" === rt.css(e, "boxSizing", !1, r), r) : 0)
            }
        }
    }), nt.opacity || (rt.cssHooks.opacity = {
        get: function(e, t) {
            return sn.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var n = e.style,
                i = e.currentStyle,
                r = rt.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                o = i && i.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === rt.trim(o.replace(an, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || i && !i.filter) || (n.filter = an.test(o) ? o.replace(an, r) : o + " " + r)
        }
    }), rt.cssHooks.marginRight = k(nt.reliableMarginRight, function(e, t) {
        return t ? rt.swap(e, {
            display: "inline-block"
        }, tn, [e, "marginRight"]) : void 0
    }), rt.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        rt.cssHooks[e + t] = {
            expand: function(n) {
                for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) r[e + Et[i] + t] = o[i] || o[i - 2] || o[0];
                return r
            }
        }, nn.test(e) || (rt.cssHooks[e + t].set = _)
    }), rt.fn.extend({
        css: function(e, t) {
            return _t(this, function(e, t, n) {
                var i, r, o = {},
                    a = 0;
                if (rt.isArray(t)) {
                    for (i = en(e), r = t.length; r > a; a++) o[t[a]] = rt.css(e, t[a], !1, i);
                    return o
                }
                return void 0 !== n ? rt.style(e, t, n) : rt.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function() {
            return N(this, !0)
        },
        hide: function() {
            return N(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                Nt(this) ? rt(this).show() : rt(this).hide()
            })
        }
    }), rt.Tween = I, I.prototype = {
        constructor: I,
        init: function(e, t, n, i, r, o) {
            this.elem = e, this.prop = n, this.easing = r || "swing", this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (rt.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = I.propHooks[this.prop];
            return e && e.get ? e.get(this) : I.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = I.propHooks[this.prop];
            return this.pos = t = this.options.duration ? rt.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : I.propHooks._default.set(this), this
        }
    }, I.prototype.init.prototype = I.prototype, I.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = rt.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function(e) {
                rt.fx.step[e.prop] ? rt.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[rt.cssProps[e.prop]] || rt.cssHooks[e.prop]) ? rt.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, I.propHooks.scrollTop = I.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, rt.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, rt.fx = I.prototype.init, rt.fx.step = {};
    var hn, mn, gn = /^(?:toggle|show|hide)$/,
        vn = new RegExp("^(?:([+-])=|)(" + kt + ")([a-z%]*)$", "i"),
        yn = /queueHooks$/,
        bn = [B],
        wn = {
            "*": [function(e, t) {
                var n = this.createTween(e, t),
                    i = n.cur(),
                    r = vn.exec(t),
                    o = r && r[3] || (rt.cssNumber[e] ? "" : "px"),
                    a = (rt.cssNumber[e] || "px" !== o && +i) && vn.exec(rt.css(n.elem, e)),
                    s = 1,
                    l = 20;
                if (a && a[3] !== o) {
                    o = o || a[3], r = r || [], a = +i || 1;
                    do s = s || ".5", a /= s, rt.style(n.elem, e, a + o); while (s !== (s = n.cur() / i) && 1 !== s && --l)
                }
                return r && (a = n.start = +a || +i || 0, n.unit = o, n.end = r[1] ? a + (r[1] + 1) * r[2] : +r[2]), n
            }]
        };
    rt.Animation = rt.extend(O, {
            tweener: function(e, t) {
                rt.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                for (var n, i = 0, r = e.length; r > i; i++) n = e[i], wn[n] = wn[n] || [], wn[n].unshift(t)
            },
            prefilter: function(e, t) {
                t ? bn.unshift(e) : bn.push(e)
            }
        }), rt.speed = function(e, t, n) {
            var i = e && "object" == typeof e ? rt.extend({}, e) : {
                complete: n || !n && t || rt.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !rt.isFunction(t) && t
            };
            return i.duration = rt.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in rt.fx.speeds ? rt.fx.speeds[i.duration] : rt.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                rt.isFunction(i.old) && i.old.call(this), i.queue && rt.dequeue(this, i.queue)
            }, i
        }, rt.fn.extend({
            fadeTo: function(e, t, n, i) {
                return this.filter(Nt).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, i)
            },
            animate: function(e, t, n, i) {
                var r = rt.isEmptyObject(e),
                    o = rt.speed(t, n, i),
                    a = function() {
                        var t = O(this, rt.extend({}, e), o);
                        (r || rt._data(this, "finish")) && t.stop(!0)
                    };
                return a.finish = a, r || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
            },
            stop: function(e, t, n) {
                var i = function(e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        r = null != e && e + "queueHooks",
                        o = rt.timers,
                        a = rt._data(this);
                    if (r) a[r] && a[r].stop && i(a[r]);
                    else
                        for (r in a) a[r] && a[r].stop && yn.test(r) && i(a[r]);
                    for (r = o.length; r--;) o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n), t = !1, o.splice(r, 1));
                    (t || !n) && rt.dequeue(this, e)
                })
            },
            finish: function(e) {
                return e !== !1 && (e = e || "fx"), this.each(function() {
                    var t, n = rt._data(this),
                        i = n[e + "queue"],
                        r = n[e + "queueHooks"],
                        o = rt.timers,
                        a = i ? i.length : 0;
                    for (n.finish = !0, rt.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; a > t; t++) i[t] && i[t].finish && i[t].finish.call(this);
                    delete n.finish
                })
            }
        }), rt.each(["toggle", "show", "hide"], function(e, t) {
            var n = rt.fn[t];
            rt.fn[t] = function(e, i, r) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(j(t, !0), e, i, r)
            }
        }), rt.each({
            slideDown: j("show"),
            slideUp: j("hide"),
            slideToggle: j("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            rt.fn[e] = function(e, n, i) {
                return this.animate(t, e, n, i)
            }
        }), rt.timers = [], rt.fx.tick = function() {
            var e, t = rt.timers,
                n = 0;
            for (hn = rt.now(); n < t.length; n++) e = t[n], e() || t[n] !== e || t.splice(n--, 1);
            t.length || rt.fx.stop(), hn = void 0
        }, rt.fx.timer = function(e) {
            rt.timers.push(e), e() ? rt.fx.start() : rt.timers.pop()
        }, rt.fx.interval = 13, rt.fx.start = function() {
            mn || (mn = setInterval(rt.fx.tick, rt.fx.interval))
        }, rt.fx.stop = function() {
            clearInterval(mn), mn = null
        }, rt.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, rt.fn.delay = function(e, t) {
            return e = rt.fx ? rt.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                var i = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(i)
                }
            })
        },
        function() {
            var e, t, n, i, r;
            t = ht.createElement("div"), t.setAttribute("className", "t"), t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", i = t.getElementsByTagName("a")[0], n = ht.createElement("select"), r = n.appendChild(ht.createElement("option")), e = t.getElementsByTagName("input")[0], i.style.cssText = "top:1px", nt.getSetAttribute = "t" !== t.className, nt.style = /top/.test(i.getAttribute("style")), nt.hrefNormalized = "/a" === i.getAttribute("href"), nt.checkOn = !!e.value, nt.optSelected = r.selected, nt.enctype = !!ht.createElement("form").enctype, n.disabled = !0, nt.optDisabled = !r.disabled, e = ht.createElement("input"), e.setAttribute("value", ""), nt.input = "" === e.getAttribute("value"), e.value = "t", e.setAttribute("type", "radio"), nt.radioValue = "t" === e.value
        }();
    var xn = /\r/g;
    rt.fn.extend({
        val: function(e) {
            var t, n, i, r = this[0]; {
                if (arguments.length) return i = rt.isFunction(e), this.each(function(n) {
                    var r;
                    1 === this.nodeType && (r = i ? e.call(this, n, rt(this).val()) : e, null == r ? r = "" : "number" == typeof r ? r += "" : rt.isArray(r) && (r = rt.map(r, function(e) {
                        return null == e ? "" : e + ""
                    })), t = rt.valHooks[this.type] || rt.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
                });
                if (r) return t = rt.valHooks[r.type] || rt.valHooks[r.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(xn, "") : null == n ? "" : n)
            }
        }
    }), rt.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = rt.find.attr(e, "value");
                    return null != t ? t : rt.trim(rt.text(e))
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, i = e.options, r = e.selectedIndex, o = "select-one" === e.type || 0 > r, a = o ? null : [], s = o ? r + 1 : i.length, l = 0 > r ? s : o ? r : 0; s > l; l++)
                        if (n = i[l], !(!n.selected && l !== r || (nt.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && rt.nodeName(n.parentNode, "optgroup"))) {
                            if (t = rt(n).val(), o) return t;
                            a.push(t)
                        }
                    return a
                },
                set: function(e, t) {
                    for (var n, i, r = e.options, o = rt.makeArray(t), a = r.length; a--;)
                        if (i = r[a], rt.inArray(rt.valHooks.option.get(i), o) >= 0) try {
                            i.selected = n = !0
                        } catch (s) {
                            i.scrollHeight
                        } else i.selected = !1;
                    return n || (e.selectedIndex = -1), r
                }
            }
        }
    }), rt.each(["radio", "checkbox"], function() {
        rt.valHooks[this] = {
            set: function(e, t) {
                return rt.isArray(t) ? e.checked = rt.inArray(rt(e).val(), t) >= 0 : void 0
            }
        }, nt.checkOn || (rt.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var Tn, Cn, An = rt.expr.attrHandle,
        Sn = /^(?:checked|selected)$/i,
        kn = nt.getSetAttribute,
        En = nt.input;
    rt.fn.extend({
        attr: function(e, t) {
            return _t(this, rt.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                rt.removeAttr(this, e)
            })
        }
    }), rt.extend({
        attr: function(e, t, n) {
            var i, r, o = e.nodeType;
            if (e && 3 !== o && 8 !== o && 2 !== o) return typeof e.getAttribute === Ct ? rt.prop(e, t, n) : (1 === o && rt.isXMLDoc(e) || (t = t.toLowerCase(), i = rt.attrHooks[t] || (rt.expr.match.bool.test(t) ? Cn : Tn)), void 0 === n ? i && "get" in i && null !== (r = i.get(e, t)) ? r : (r = rt.find.attr(e, t), null == r ? void 0 : r) : null !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : void rt.removeAttr(e, t))
        },
        removeAttr: function(e, t) {
            var n, i, r = 0,
                o = t && t.match(bt);
            if (o && 1 === e.nodeType)
                for (; n = o[r++];) i = rt.propFix[n] || n, rt.expr.match.bool.test(n) ? En && kn || !Sn.test(n) ? e[i] = !1 : e[rt.camelCase("default-" + n)] = e[i] = !1 : rt.attr(e, n, ""), e.removeAttribute(kn ? n : i)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!nt.radioValue && "radio" === t && rt.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }
    }), Cn = {
        set: function(e, t, n) {
            return t === !1 ? rt.removeAttr(e, n) : En && kn || !Sn.test(n) ? e.setAttribute(!kn && rt.propFix[n] || n, n) : e[rt.camelCase("default-" + n)] = e[n] = !0, n
        }
    }, rt.each(rt.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = An[t] || rt.find.attr;
        An[t] = En && kn || !Sn.test(t) ? function(e, t, i) {
            var r, o;
            return i || (o = An[t], An[t] = r, r = null != n(e, t, i) ? t.toLowerCase() : null, An[t] = o), r
        } : function(e, t, n) {
            return n ? void 0 : e[rt.camelCase("default-" + t)] ? t.toLowerCase() : null
        }
    }), En && kn || (rt.attrHooks.value = {
        set: function(e, t, n) {
            return rt.nodeName(e, "input") ? void(e.defaultValue = t) : Tn && Tn.set(e, t, n)
        }
    }), kn || (Tn = {
        set: function(e, t, n) {
            var i = e.getAttributeNode(n);
            return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(n)), i.value = t += "", "value" === n || t === e.getAttribute(n) ? t : void 0
        }
    }, An.id = An.name = An.coords = function(e, t, n) {
        var i;
        return n ? void 0 : (i = e.getAttributeNode(t)) && "" !== i.value ? i.value : null
    }, rt.valHooks.button = {
        get: function(e, t) {
            var n = e.getAttributeNode(t);
            return n && n.specified ? n.value : void 0
        },
        set: Tn.set
    }, rt.attrHooks.contenteditable = {
        set: function(e, t, n) {
            Tn.set(e, "" === t ? !1 : t, n)
        }
    }, rt.each(["width", "height"], function(e, t) {
        rt.attrHooks[t] = {
            set: function(e, n) {
                return "" === n ? (e.setAttribute(t, "auto"), n) : void 0
            }
        }
    })), nt.style || (rt.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || void 0
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    });
    var Nn = /^(?:input|select|textarea|button|object)$/i,
        _n = /^(?:a|area)$/i;
    rt.fn.extend({
        prop: function(e, t) {
            return _t(this, rt.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = rt.propFix[e] || e, this.each(function() {
                try {
                    this[e] = void 0, delete this[e]
                } catch (t) {}
            })
        }
    }), rt.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(e, t, n) {
            var i, r, o, a = e.nodeType;
            if (e && 3 !== a && 8 !== a && 2 !== a) return o = 1 !== a || !rt.isXMLDoc(e), o && (t = rt.propFix[t] || t, r = rt.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = rt.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : Nn.test(e.nodeName) || _n.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }
    }), nt.hrefNormalized || rt.each(["href", "src"], function(e, t) {
        rt.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    }), nt.optSelected || (rt.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    }), rt.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        rt.propFix[this.toLowerCase()] = this
    }), nt.enctype || (rt.propFix.enctype = "encoding");
    var Fn = /[\t\r\n\f]/g;
    rt.fn.extend({
        addClass: function(e) {
            var t, n, i, r, o, a, s = 0,
                l = this.length,
                u = "string" == typeof e && e;
            if (rt.isFunction(e)) return this.each(function(t) {
                rt(this).addClass(e.call(this, t, this.className))
            });
            if (u)
                for (t = (e || "").match(bt) || []; l > s; s++)
                    if (n = this[s], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Fn, " ") : " ")) {
                        for (o = 0; r = t[o++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                        a = rt.trim(i), n.className !== a && (n.className = a)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, i, r, o, a, s = 0,
                l = this.length,
                u = 0 === arguments.length || "string" == typeof e && e;
            if (rt.isFunction(e)) return this.each(function(t) {
                rt(this).removeClass(e.call(this, t, this.className))
            });
            if (u)
                for (t = (e || "").match(bt) || []; l > s; s++)
                    if (n = this[s], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Fn, " ") : "")) {
                        for (o = 0; r = t[o++];)
                            for (; i.indexOf(" " + r + " ") >= 0;) i = i.replace(" " + r + " ", " ");
                        a = e ? rt.trim(i) : "", n.className !== a && (n.className = a)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(rt.isFunction(e) ? function(n) {
                rt(this).toggleClass(e.call(this, n, this.className, t), t)
            } : function() {
                if ("string" === n)
                    for (var t, i = 0, r = rt(this), o = e.match(bt) || []; t = o[i++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                else(n === Ct || "boolean" === n) && (this.className && rt._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : rt._data(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, i = this.length; i > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Fn, " ").indexOf(t) >= 0) return !0;
            return !1
        }
    }), rt.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        rt.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), rt.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var Dn = rt.now(),
        In = /\?/,
        Ln = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    rt.parseJSON = function(t) {
        if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
        var n, i = null,
            r = rt.trim(t + "");
        return r && !rt.trim(r.replace(Ln, function(e, t, r, o) {
            return n && t && (i = 0), 0 === i ? e : (n = r || t, i += !o - !r, "")
        })) ? Function("return " + r)() : rt.error("Invalid JSON: " + t)
    }, rt.parseXML = function(t) {
        var n, i;
        if (!t || "string" != typeof t) return null;
        try {
            e.DOMParser ? (i = new DOMParser, n = i.parseFromString(t, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(t))
        } catch (r) {
            n = void 0
        }
        return n && n.documentElement && !n.getElementsByTagName("parsererror").length || rt.error("Invalid XML: " + t), n
    };
    var jn, Rn, Bn = /#.*$/,
        Pn = /([?&])_=[^&]*/,
        On = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        $n = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Hn = /^(?:GET|HEAD)$/,
        Mn = /^\/\//,
        qn = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        zn = {},
        Un = {},
        Wn = "*/".concat("*");
    try {
        Rn = location.href
    } catch (Xn) {
        Rn = ht.createElement("a"), Rn.href = "", Rn = Rn.href
    }
    jn = qn.exec(Rn.toLowerCase()) || [], rt.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Rn,
            type: "GET",
            isLocal: $n.test(jn[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Wn,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": rt.parseJSON,
                "text xml": rt.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? M(M(e, rt.ajaxSettings), t) : M(rt.ajaxSettings, e)
        },
        ajaxPrefilter: $(zn),
        ajaxTransport: $(Un),
        ajax: function(e, t) {
            function n(e, t, n, i) {
                var r, c, v, y, w, T = t;
                2 !== b && (b = 2, s && clearTimeout(s), u = void 0, a = i || "", x.readyState = e > 0 ? 4 : 0, r = e >= 200 && 300 > e || 304 === e, n && (y = q(f, x, n)), y = z(f, y, x, r), r ? (f.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (rt.lastModified[o] = w), w = x.getResponseHeader("etag"), w && (rt.etag[o] = w)), 204 === e || "HEAD" === f.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = y.state, c = y.data, v = y.error, r = !v)) : (v = T, (e || !T) && (T = "error", 0 > e && (e = 0))), x.status = e, x.statusText = (t || T) + "", r ? h.resolveWith(d, [c, T, x]) : h.rejectWith(d, [x, T, v]), x.statusCode(g), g = void 0, l && p.trigger(r ? "ajaxSuccess" : "ajaxError", [x, f, r ? c : v]), m.fireWith(d, [x, T]), l && (p.trigger("ajaxComplete", [x, f]), --rt.active || rt.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var i, r, o, a, s, l, u, c, f = rt.ajaxSetup({}, t),
                d = f.context || f,
                p = f.context && (d.nodeType || d.jquery) ? rt(d) : rt.event,
                h = rt.Deferred(),
                m = rt.Callbacks("once memory"),
                g = f.statusCode || {},
                v = {},
                y = {},
                b = 0,
                w = "canceled",
                x = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === b) {
                            if (!c)
                                for (c = {}; t = On.exec(a);) c[t[1].toLowerCase()] = t[2];
                            t = c[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === b ? a : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return b || (e = y[n] = y[n] || e, v[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return b || (f.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (2 > b)
                                for (t in e) g[t] = [g[t], e[t]];
                            else x.always(e[x.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || w;
                        return u && u.abort(t), n(0, t), this
                    }
                };
            if (h.promise(x).complete = m.add, x.success = x.done, x.error = x.fail, f.url = ((e || f.url || Rn) + "").replace(Bn, "").replace(Mn, jn[1] + "//"), f.type = t.method || t.type || f.method || f.type, f.dataTypes = rt.trim(f.dataType || "*").toLowerCase().match(bt) || [""], null == f.crossDomain && (i = qn.exec(f.url.toLowerCase()), f.crossDomain = !(!i || i[1] === jn[1] && i[2] === jn[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (jn[3] || ("http:" === jn[1] ? "80" : "443")))), f.data && f.processData && "string" != typeof f.data && (f.data = rt.param(f.data, f.traditional)), H(zn, f, t, x), 2 === b) return x;
            l = rt.event && f.global, l && 0 === rt.active++ && rt.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !Hn.test(f.type), o = f.url, f.hasContent || (f.data && (o = f.url += (In.test(o) ? "&" : "?") + f.data, delete f.data), f.cache === !1 && (f.url = Pn.test(o) ? o.replace(Pn, "$1_=" + Dn++) : o + (In.test(o) ? "&" : "?") + "_=" + Dn++)), f.ifModified && (rt.lastModified[o] && x.setRequestHeader("If-Modified-Since", rt.lastModified[o]), rt.etag[o] && x.setRequestHeader("If-None-Match", rt.etag[o])), (f.data && f.hasContent && f.contentType !== !1 || t.contentType) && x.setRequestHeader("Content-Type", f.contentType), x.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Wn + "; q=0.01" : "") : f.accepts["*"]);
            for (r in f.headers) x.setRequestHeader(r, f.headers[r]);
            if (f.beforeSend && (f.beforeSend.call(d, x, f) === !1 || 2 === b)) return x.abort();
            w = "abort";
            for (r in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) x[r](f[r]);
            if (u = H(Un, f, t, x)) {
                x.readyState = 1, l && p.trigger("ajaxSend", [x, f]), f.async && f.timeout > 0 && (s = setTimeout(function() {
                    x.abort("timeout")
                }, f.timeout));
                try {
                    b = 1, u.send(v, n)
                } catch (T) {
                    if (!(2 > b)) throw T;
                    n(-1, T)
                }
            } else n(-1, "No Transport");
            return x
        },
        getJSON: function(e, t, n) {
            return rt.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return rt.get(e, void 0, t, "script")
        }
    }), rt.each(["get", "post"], function(e, t) {
        rt[t] = function(e, n, i, r) {
            return rt.isFunction(n) && (r = r || i, i = n, n = void 0), rt.ajax({
                url: e,
                type: t,
                dataType: r,
                data: n,
                success: i
            })
        }
    }), rt._evalUrl = function(e) {
        return rt.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, rt.fn.extend({
        wrapAll: function(e) {
            if (rt.isFunction(e)) return this.each(function(t) {
                rt(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = rt(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return this.each(rt.isFunction(e) ? function(t) {
                rt(this).wrapInner(e.call(this, t))
            } : function() {
                var t = rt(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = rt.isFunction(e);
            return this.each(function(n) {
                rt(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                rt.nodeName(this, "body") || rt(this).replaceWith(this.childNodes)
            }).end()
        }
    }), rt.expr.filters.hidden = function(e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !nt.reliableHiddenOffsets() && "none" === (e.style && e.style.display || rt.css(e, "display"))
    }, rt.expr.filters.visible = function(e) {
        return !rt.expr.filters.hidden(e)
    };
    var Gn = /%20/g,
        Vn = /\[\]$/,
        Qn = /\r?\n/g,
        Kn = /^(?:submit|button|image|reset|file)$/i,
        Jn = /^(?:input|select|textarea|keygen)/i;
    rt.param = function(e, t) {
        var n, i = [],
            r = function(e, t) {
                t = rt.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (void 0 === t && (t = rt.ajaxSettings && rt.ajaxSettings.traditional), rt.isArray(e) || e.jquery && !rt.isPlainObject(e)) rt.each(e, function() {
            r(this.name, this.value)
        });
        else
            for (n in e) U(n, e[n], t, r);
        return i.join("&").replace(Gn, "+")
    }, rt.fn.extend({
        serialize: function() {
            return rt.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = rt.prop(this, "elements");
                return e ? rt.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !rt(this).is(":disabled") && Jn.test(this.nodeName) && !Kn.test(e) && (this.checked || !Ft.test(e))
            }).map(function(e, t) {
                var n = rt(this).val();
                return null == n ? null : rt.isArray(n) ? rt.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Qn, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Qn, "\r\n")
                }
            }).get()
        }
    }), rt.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function() {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && W() || X()
    } : W;
    var Yn = 0,
        Zn = {},
        ei = rt.ajaxSettings.xhr();
    e.attachEvent && e.attachEvent("onunload", function() {
        for (var e in Zn) Zn[e](void 0, !0)
    }), nt.cors = !!ei && "withCredentials" in ei, ei = nt.ajax = !!ei, ei && rt.ajaxTransport(function(e) {
        if (!e.crossDomain || nt.cors) {
            var t;
            return {
                send: function(n, i) {
                    var r, o = e.xhr(),
                        a = ++Yn;
                    if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (r in e.xhrFields) o[r] = e.xhrFields[r];
                    e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                    for (r in n) void 0 !== n[r] && o.setRequestHeader(r, n[r] + "");
                    o.send(e.hasContent && e.data || null), t = function(n, r) {
                        var s, l, u;
                        if (t && (r || 4 === o.readyState))
                            if (delete Zn[a], t = void 0, o.onreadystatechange = rt.noop, r) 4 !== o.readyState && o.abort();
                            else {
                                u = {}, s = o.status, "string" == typeof o.responseText && (u.text = o.responseText);
                                try {
                                    l = o.statusText
                                } catch (c) {
                                    l = ""
                                }
                                s || !e.isLocal || e.crossDomain ? 1223 === s && (s = 204) : s = u.text ? 200 : 404
                            }
                        u && i(s, l, u, o.getAllResponseHeaders())
                    }, e.async ? 4 === o.readyState ? setTimeout(t) : o.onreadystatechange = Zn[a] = t : t()
                },
                abort: function() {
                    t && t(void 0, !0)
                }
            }
        }
    }), rt.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return rt.globalEval(e), e
            }
        }
    }), rt.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), rt.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n = ht.head || rt("head")[0] || ht.documentElement;
            return {
                send: function(i, r) {
                    t = ht.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function(e, n) {
                        (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || r(200, "success"))
                    }, n.insertBefore(t, n.firstChild)
                },
                abort: function() {
                    t && t.onload(void 0, !0)
                }
            }
        }
    });
    var ti = [],
        ni = /(=)\?(?=&|$)|\?\?/;
    rt.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = ti.pop() || rt.expando + "_" + Dn++;
            return this[e] = !0, e
        }
    }), rt.ajaxPrefilter("json jsonp", function(t, n, i) {
        var r, o, a, s = t.jsonp !== !1 && (ni.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && ni.test(t.data) && "data");
        return s || "jsonp" === t.dataTypes[0] ? (r = t.jsonpCallback = rt.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(ni, "$1" + r) : t.jsonp !== !1 && (t.url += (In.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function() {
            return a || rt.error(r + " was not called"), a[0]
        }, t.dataTypes[0] = "json", o = e[r], e[r] = function() {
            a = arguments
        }, i.always(function() {
            e[r] = o, t[r] && (t.jsonpCallback = n.jsonpCallback, ti.push(r)), a && rt.isFunction(o) && o(a[0]), a = o = void 0
        }), "script") : void 0
    }), rt.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || ht;
        var i = ft.exec(e),
            r = !n && [];
        return i ? [t.createElement(i[1])] : (i = rt.buildFragment([e], t, r), r && r.length && rt(r).remove(), rt.merge([], i.childNodes))
    };
    var ii = rt.fn.load;
    rt.fn.load = function(e, t, n) {
        if ("string" != typeof e && ii) return ii.apply(this, arguments);
        var i, r, o, a = this,
            s = e.indexOf(" ");
        return s >= 0 && (i = rt.trim(e.slice(s, e.length)), e = e.slice(0, s)), rt.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), a.length > 0 && rt.ajax({
            url: e,
            type: o,
            dataType: "html",
            data: t
        }).done(function(e) {
            r = arguments, a.html(i ? rt("<div>").append(rt.parseHTML(e)).find(i) : e)
        }).complete(n && function(e, t) {
            a.each(n, r || [e.responseText, t, e])
        }), this
    }, rt.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        rt.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), rt.expr.filters.animated = function(e) {
        return rt.grep(rt.timers, function(t) {
            return e === t.elem
        }).length
    };
    var ri = e.document.documentElement;
    rt.offset = {
        setOffset: function(e, t, n) {
            var i, r, o, a, s, l, u, c = rt.css(e, "position"),
                f = rt(e),
                d = {};
            "static" === c && (e.style.position = "relative"), s = f.offset(), o = rt.css(e, "top"), l = rt.css(e, "left"), u = ("absolute" === c || "fixed" === c) && rt.inArray("auto", [o, l]) > -1, u ? (i = f.position(), a = i.top, r = i.left) : (a = parseFloat(o) || 0, r = parseFloat(l) || 0), rt.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (d.top = t.top - s.top + a), null != t.left && (d.left = t.left - s.left + r), "using" in t ? t.using.call(e, d) : f.css(d)
        }
    }, rt.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                rt.offset.setOffset(this, e, t)
            });
            var t, n, i = {
                    top: 0,
                    left: 0
                },
                r = this[0],
                o = r && r.ownerDocument;
            if (o) return t = o.documentElement, rt.contains(t, r) ? (typeof r.getBoundingClientRect !== Ct && (i = r.getBoundingClientRect()), n = G(o), {
                top: i.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                left: i.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
            }) : i
        },
        position: function() {
            if (this[0]) {
                var e, t, n = {
                        top: 0,
                        left: 0
                    },
                    i = this[0];
                return "fixed" === rt.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), rt.nodeName(e[0], "html") || (n = e.offset()), n.top += rt.css(e[0], "borderTopWidth", !0), n.left += rt.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - rt.css(i, "marginTop", !0),
                    left: t.left - n.left - rt.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || ri; e && !rt.nodeName(e, "html") && "static" === rt.css(e, "position");) e = e.offsetParent;
                return e || ri
            })
        }
    }), rt.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = /Y/.test(t);
        rt.fn[e] = function(i) {
            return _t(this, function(e, i, r) {
                var o = G(e);
                return void 0 === r ? o ? t in o ? o[t] : o.document.documentElement[i] : e[i] : void(o ? o.scrollTo(n ? rt(o).scrollLeft() : r, n ? r : rt(o).scrollTop()) : e[i] = r)
            }, e, i, arguments.length, null)
        }
    }), rt.each(["top", "left"], function(e, t) {
        rt.cssHooks[t] = k(nt.pixelPosition, function(e, n) {
            return n ? (n = tn(e, t), rn.test(n) ? rt(e).position()[t] + "px" : n) : void 0
        })
    }), rt.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        rt.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, i) {
            rt.fn[i] = function(i, r) {
                var o = arguments.length && (n || "boolean" != typeof i),
                    a = n || (i === !0 || r === !0 ? "margin" : "border");
                return _t(this, function(t, n, i) {
                    var r;
                    return rt.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === i ? rt.css(t, n, a) : rt.style(t, n, i, a)
                }, t, o ? i : void 0, o, null)
            }
        })
    }), rt.fn.size = function() {
        return this.length
    }, rt.fn.andSelf = rt.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return rt
    });
    var oi = e.jQuery,
        ai = e.$;
    return rt.noConflict = function(t) {
        return e.$ === rt && (e.$ = ai), t && e.jQuery === rt && (e.jQuery = oi), rt
    }, typeof t === Ct && (e.jQuery = e.$ = rt), rt
}),
function(e, t) {
    "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : e.NProgress = t()
}(this, function() {
    function e(e, t, n) {
        return t > e ? t : e > n ? n : e
    }

    function t(e) {
        return 100 * (-1 + e)
    }

    function n(e, n, i) {
        var r;
        return r = "translate3d" === u.positionUsing ? {
            transform: "translate3d(" + t(e) + "%,0,0)"
        } : "translate" === u.positionUsing ? {
            transform: "translate(" + t(e) + "%,0)"
        } : {
            "margin-left": t(e) + "%"
        }, r.transition = "all " + n + "ms " + i, r
    }

    function i(e, t) {
        var n = "string" == typeof e ? e : a(e);
        return n.indexOf(" " + t + " ") >= 0
    }

    function r(e, t) {
        var n = a(e),
            r = n + t;
        i(n, t) || (e.className = r.substring(1))
    }

    function o(e, t) {
        var n, r = a(e);
        i(e, t) && (n = r.replace(" " + t + " ", " "), e.className = n.substring(1, n.length - 1))
    }

    function a(e) {
        return (" " + (e.className || "") + " ").replace(/\s+/gi, " ")
    }

    function s(e) {
        e && e.parentNode && e.parentNode.removeChild(e)
    }
    var l = {};
    l.version = "0.1.6";
    var u = l.settings = {
        minimum: .08,
        easing: "ease",
        positionUsing: "",
        speed: 200,
        trickle: !0,
        trickleRate: .02,
        trickleSpeed: 800,
        showSpinner: !0,
        barSelector: '[role="bar"]',
        spinnerSelector: '[role="spinner"]',
        parent: "body",
        template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
    };
    l.configure = function(e) {
            var t, n;
            for (t in e) n = e[t], void 0 !== n && e.hasOwnProperty(t) && (u[t] = n);
            return this
        }, l.status = null, l.set = function(t) {
            var i = l.isStarted();
            t = e(t, u.minimum, 1), l.status = 1 === t ? null : t;
            var r = l.render(!i),
                o = r.querySelector(u.barSelector),
                a = u.speed,
                s = u.easing;
            return r.offsetWidth, c(function(e) {
                "" === u.positionUsing && (u.positionUsing = l.getPositioningCSS()), f(o, n(t, a, s)), 1 === t ? (f(r, {
                    transition: "none",
                    opacity: 1
                }), r.offsetWidth, setTimeout(function() {
                    f(r, {
                        transition: "all " + a + "ms linear",
                        opacity: 0
                    }), setTimeout(function() {
                        l.remove(), e()
                    }, a)
                }, a)) : setTimeout(e, a)
            }), this
        }, l.isStarted = function() {
            return "number" == typeof l.status
        }, l.start = function() {
            l.status || l.set(0);
            var e = function() {
                setTimeout(function() {
                    l.status && (l.trickle(), e())
                }, u.trickleSpeed)
            };
            return u.trickle && e(), this
        }, l.done = function(e) {
            return e || l.status ? l.inc(.3 + .5 * Math.random()).set(1) : this
        }, l.inc = function(t) {
            var n = l.status;
            return n ? ("number" != typeof t && (t = (1 - n) * e(Math.random() * n, .1, .95)), n = e(n + t, 0, .994), l.set(n)) : l.start()
        }, l.trickle = function() {
            return l.inc(Math.random() * u.trickleRate)
        },
        function() {
            var e = 0,
                t = 0;
            l.promise = function(n) {
                return n && "resolved" != n.state() ? (0 == t && l.start(), e++, t++, n.always(function() {
                    t--, 0 == t ? (e = 0, l.done()) : l.set((e - t) / e)
                }), this) : this
            }
        }(), l.render = function(e) {
            if (l.isRendered()) return document.getElementById("nprogress");
            r(document.documentElement, "nprogress-busy");
            var n = document.createElement("div");
            n.id = "nprogress", n.innerHTML = u.template;
            var i, o = n.querySelector(u.barSelector),
                a = e ? "-100" : t(l.status || 0),
                c = document.querySelector(u.parent);
            return f(o, {
                transition: "all 0 linear",
                transform: "translate3d(" + a + "%,0,0)"
            }), u.showSpinner || (i = n.querySelector(u.spinnerSelector), i && s(i)), c != document.body && r(c, "nprogress-custom-parent"), c.appendChild(n), n
        }, l.remove = function() {
            o(document.documentElement, "nprogress-busy"), o(document.querySelector(u.parent), "nprogress-custom-parent");
            var e = document.getElementById("nprogress");
            e && s(e)
        }, l.isRendered = function() {
            return !!document.getElementById("nprogress")
        }, l.getPositioningCSS = function() {
            var e = document.body.style,
                t = "WebkitTransform" in e ? "Webkit" : "MozTransform" in e ? "Moz" : "msTransform" in e ? "ms" : "OTransform" in e ? "O" : "";
            return t + "Perspective" in e ? "translate3d" : t + "Transform" in e ? "translate" : "margin"
        };
    var c = function() {
            function e() {
                var n = t.shift();
                n && n(e)
            }
            var t = [];
            return function(n) {
                t.push(n), 1 == t.length && e()
            }
        }(),
        f = function() {
            function e(e) {
                return e.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function(e, t) {
                    return t.toUpperCase()
                })
            }

            function t(e) {
                var t = document.body.style;
                if (e in t) return e;
                for (var n, i = r.length, o = e.charAt(0).toUpperCase() + e.slice(1); i--;)
                    if (n = r[i] + o, n in t) return n;
                return e
            }

            function n(n) {
                return n = e(n), o[n] || (o[n] = t(n))
            }

            function i(e, t, i) {
                t = n(t), e.style[t] = i
            }
            var r = ["Webkit", "O", "Moz", "ms"],
                o = {};
            return function(e, t) {
                var n, r, o = arguments;
                if (2 == o.length)
                    for (n in t) r = t[n], void 0 !== r && t.hasOwnProperty(n) && i(e, n, r);
                else i(e, o[1], o[2])
            }
        }();
    return l
}),
function(e, t, n) {
    function i() {
        function i(e) {
            var t = p;
            return "undefined" != typeof t[e] ? t[e] : w[e]
        }

        function s(t) {
            var i = t || e.event,
                r = i.keyCode || i.which;
            if (-1 !== [9, 13, 32, 27].indexOf(r)) {
                for (var o = i.target || i.srcElement, a = -1, s = 0; s < I.length; s++)
                    if (o === I[s]) {
                        a = s;
                        break
                    }
                9 === r ? (o = -1 === a ? _ : a === I.length - 1 ? I[0] : I[a + 1], B(i), o.focus(), l(o, v.confirmButtonColor)) : (o = 13 === r || 32 === r ? -1 === a ? _ : n : 27 === r && v.allowEscapeKey === !0 ? F : n, o !== n && R(o, i))
            }
        }

        function f(t) {
            var n = t || e.event,
                i = n.target || n.srcElement,
                r = n.relatedTarget,
                o = C(S, "visible");
            if (o) {
                var a = -1;
                if (null !== r) {
                    for (var s = 0; s < I.length; s++)
                        if (r === I[s]) {
                            a = s;
                            break
                        } - 1 === a && i.focus()
                } else g = i
            }
        }
        var p = arguments[0];
        if (arguments[0] === n) return d("SweetAlert expects at least 1 attribute!"), !1;
        var v = a({}, w);
        switch (typeof arguments[0]) {
            case "string":
                v.title = arguments[0], v.text = arguments[1] || "", v.type = arguments[2] || "";
                break;
            case "object":
                if (arguments[0].title === n) return d('Missing "title" argument!'), !1;
                v.title = arguments[0].title;
                for (var y = ["text", "type", "customClass", "allowOutsideClick", "showCancelButton", "closeOnConfirm", "closeOnCancel", "timer", "confirmButtonColor", "cancelButtonText", "imageUrl", "imageSize", "html", "animation", "allowEscapeKey"], b = y.length, T = 0; b > T; T++) {
                    var A = y[T];
                    v[A] = i(A)
                }
                v.confirmButtonText = v.showCancelButton ? "Confirm" : w.confirmButtonText, v.confirmButtonText = i("confirmButtonText"), v.doneFunction = arguments[1] || null;
                break;
            default:
                return d('Unexpected type of argument! Expected "string" or "object", got ' + typeof arguments[0]), !1
        }
        r(v), c(), u();
        for (var S = x(), k = function(t) {
                var n = t || e.event,
                    i = n.target || n.srcElement,
                    r = -1 !== i.className.indexOf("confirm"),
                    a = C(S, "visible"),
                    s = v.doneFunction && "true" === S.getAttribute("data-has-done-function");
                switch (n.type) {
                    case "mouseover":
                        r && (i.style.backgroundColor = o(v.confirmButtonColor, -.04));
                        break;
                    case "mouseout":
                        r && (i.style.backgroundColor = v.confirmButtonColor);
                        break;
                    case "mousedown":
                        r && (i.style.backgroundColor = o(v.confirmButtonColor, -.14));
                        break;
                    case "mouseup":
                        r && (i.style.backgroundColor = o(v.confirmButtonColor, -.04));
                        break;
                    case "focus":
                        var l = S.querySelector("button.confirm"),
                            u = S.querySelector("button.cancel");
                        r ? u.style.boxShadow = "none" : l.style.boxShadow = "none";
                        break;
                    case "click":
                        if (r && s && a) v.doneFunction(!0), v.closeOnConfirm && e.sweetAlert.close();
                        else if (s && a) {
                            var c = String(v.doneFunction).replace(/\s/g, ""),
                                f = "function(" === c.substring(0, 9) && ")" !== c.substring(9, 10);
                            f && v.doneFunction(!1), v.closeOnCancel && e.sweetAlert.close()
                        } else e.sweetAlert.close()
                }
            }, E = S.querySelectorAll("button"), N = 0; N < E.length; N++) E[N].onclick = k, E[N].onmouseover = k, E[N].onmouseout = k, E[N].onmousedown = k, E[N].onfocus = k;
        h = t.onclick, t.onclick = function(t) {
            var n = t || e.event,
                i = n.target || n.srcElement,
                r = S === i,
                o = D(S, i),
                a = C(S, "visible"),
                s = "true" === S.getAttribute("data-allow-ouside-click");
            !r && !o && a && s && e.sweetAlert.close()
        };
        var _ = S.querySelector("button.confirm"),
            F = S.querySelector("button.cancel"),
            I = S.querySelectorAll("button[tabindex]");
        m = e.onkeydown, e.onkeydown = s, _.onblur = f, F.onblur = f, e.onfocus = function() {
            e.setTimeout(function() {
                g !== n && (g.focus(), g = n)
            }, 0)
        }
    }

    function r(e) {
        var t = x(),
            n = t.querySelector("h2"),
            i = t.querySelector("p"),
            r = t.querySelector("button.cancel"),
            o = t.querySelector("button.confirm");
        if (n.innerHTML = e.html ? e.title : k(e.title).split("\n").join("<br>"), i.innerHTML = e.html ? e.text : k(e.text || "").split("\n").join("<br>"), e.text && N(i), e.customClass) A(t, e.customClass), t.setAttribute("data-custom-class", e.customClass);
        else {
            var a = t.getAttribute("data-custom-class");
            S(t, a), t.setAttribute("data-custom-class", "")
        }
        if (F(t.querySelectorAll(".icon")), e.type && !f()) {
            for (var s = !1, u = 0; u < b.length; u++)
                if (e.type === b[u]) {
                    s = !0;
                    break
                }
            if (!s) return d("Unknown alert type: " + e.type), !1;
            var c = t.querySelector(".icon." + e.type);
            switch (N(c), e.type) {
                case "success":
                    A(c, "animate"), A(c.querySelector(".tip"), "animateSuccessTip"), A(c.querySelector(".long"), "animateSuccessLong");
                    break;
                case "error":
                    A(c, "animateErrorIcon"), A(c.querySelector(".x-mark"), "animateXMark");
                    break;
                case "warning":
                    A(c, "pulseWarning"), A(c.querySelector(".body"), "pulseWarningIns"), A(c.querySelector(".dot"), "pulseWarningIns")
            }
        }
        if (e.imageUrl) {
            var p = t.querySelector(".icon.custom");
            p.style.backgroundImage = "url(" + e.imageUrl + ")", N(p);
            var h = 80,
                m = 80;
            if (e.imageSize) {
                var g = e.imageSize.toString().split("x"),
                    v = g[0],
                    y = g[1];
                v && y ? (h = v, m = y) : d("Parameter imageSize expects value with format WIDTHxHEIGHT, got " + e.imageSize)
            }
            p.setAttribute("style", p.getAttribute("style") + "width:" + h + "px; height:" + m + "px")
        }
        t.setAttribute("data-has-cancel-button", e.showCancelButton), e.showCancelButton ? r.style.display = "inline-block" : F(r), e.cancelButtonText && (r.innerHTML = k(e.cancelButtonText)), e.confirmButtonText && (o.innerHTML = k(e.confirmButtonText)), o.style.backgroundColor = e.confirmButtonColor, l(o, e.confirmButtonColor), t.setAttribute("data-allow-ouside-click", e.allowOutsideClick);
        var w = e.doneFunction ? !0 : !1;
        t.setAttribute("data-has-done-function", w), e.animation ? t.setAttribute("data-animation", "pop") : t.setAttribute("data-animation", "none"), t.setAttribute("data-timer", e.timer)
    }

    function o(e, t) {
        e = String(e).replace(/[^0-9a-f]/gi, ""), e.length < 6 && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]), t = t || 0;
        var n, i, r = "#";
        for (i = 0; 3 > i; i++) n = parseInt(e.substr(2 * i, 2), 16), n = Math.round(Math.min(Math.max(0, n + n * t), 255)).toString(16), r += ("00" + n).substr(n.length);
        return r
    }

    function a(e, t) {
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        return e
    }

    function s(e) {
        var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
        return t ? parseInt(t[1], 16) + ", " + parseInt(t[2], 16) + ", " + parseInt(t[3], 16) : null
    }

    function l(e, t) {
        var n = s(t);
        e.style.boxShadow = "0 0 2px rgba(" + n + ", 0.8), inset 0 0 0 1px rgba(0, 0, 0, 0.05)"
    }

    function u() {
        var n = x();
        L(T(), 10), N(n), A(n, "showSweetAlert"), S(n, "hideSweetAlert"), p = t.activeElement;
        var i = n.querySelector("button.confirm");
        i.focus(), setTimeout(function() {
            A(n, "visible")
        }, 500);
        var r = n.getAttribute("data-timer");
        "null" !== r && "" !== r && (n.timeout = setTimeout(function() {
            e.sweetAlert.close()
        }, r))
    }

    function c() {
        var e = x();
        e.style.marginTop = I(x())
    }

    function f() {
        return e.attachEvent && !e.addEventListener ? !0 : !1
    }

    function d(t) {
        e.console && e.console.log("SweetAlert: " + t)
    }
    var p, h, m, g, v = ".sweet-alert",
        y = ".sweet-overlay",
        b = ["error", "warning", "info", "success"],
        w = {
            title: "",
            text: "",
            type: null,
            allowOutsideClick: !1,
            showCancelButton: !1,
            closeOnConfirm: !0,
            closeOnCancel: !0,
            confirmButtonText: "OK",
            confirmButtonColor: "#AEDEF4",
            cancelButtonText: "Cancel",
            imageUrl: null,
            imageSize: null,
            timer: null,
            customClass: "",
            html: !1,
            animation: !0,
            allowEscapeKey: !0
        },
        x = function() {
            var e = t.querySelector(v);
            return e || (sweetAlertInitialize(), e = x()), e
        },
        T = function() {
            return t.querySelector(y)
        },
        C = function(e, t) {
            return new RegExp(" " + t + " ").test(" " + e.className + " ")
        },
        A = function(e, t) {
            C(e, t) || (e.className += " " + t)
        },
        S = function(e, t) {
            var n = " " + e.className.replace(/[\t\r\n]/g, " ") + " ";
            if (C(e, t)) {
                for (; n.indexOf(" " + t + " ") >= 0;) n = n.replace(" " + t + " ", " ");
                e.className = n.replace(/^\s+|\s+$/g, "")
            }
        },
        k = function(e) {
            var n = t.createElement("div");
            return n.appendChild(t.createTextNode(e)), n.innerHTML
        },
        E = function(e) {
            e.style.opacity = "", e.style.display = "block"
        },
        N = function(e) {
            if (e && !e.length) return E(e);
            for (var t = 0; t < e.length; ++t) E(e[t])
        },
        _ = function(e) {
            e.style.opacity = "", e.style.display = "none"
        },
        F = function(e) {
            if (e && !e.length) return _(e);
            for (var t = 0; t < e.length; ++t) _(e[t])
        },
        D = function(e, t) {
            for (var n = t.parentNode; null !== n;) {
                if (n === e) return !0;
                n = n.parentNode
            }
            return !1
        },
        I = function(e) {
            e.style.left = "-9999px", e.style.display = "block";
            var t, n = e.clientHeight;
            return t = "undefined" != typeof getComputedStyle ? parseInt(getComputedStyle(e).getPropertyValue("padding"), 10) : parseInt(e.currentStyle.padding), e.style.left = "", e.style.display = "none", "-" + parseInt(n / 2 + t) + "px"
        },
        L = function(e, t) {
            if (+e.style.opacity < 1) {
                t = t || 16, e.style.opacity = 0, e.style.display = "block";
                var n = +new Date,
                    i = function() {
                        e.style.opacity = +e.style.opacity + (new Date - n) / 100, n = +new Date, +e.style.opacity < 1 && setTimeout(i, t)
                    };
                i()
            }
            e.style.display = "block"
        },
        j = function(e, t) {
            t = t || 16, e.style.opacity = 1;
            var n = +new Date,
                i = function() {
                    e.style.opacity = +e.style.opacity - (new Date - n) / 100, n = +new Date, +e.style.opacity > 0 ? setTimeout(i, t) : e.style.display = "none"
                };
            i()
        },
        R = function(n) {
            if ("function" == typeof MouseEvent) {
                var i = new MouseEvent("click", {
                    view: e,
                    bubbles: !1,
                    cancelable: !0
                });
                n.dispatchEvent(i)
            } else if (t.createEvent) {
                var r = t.createEvent("MouseEvents");
                r.initEvent("click", !1, !1), n.dispatchEvent(r)
            } else t.createEventObject ? n.fireEvent("onclick") : "function" == typeof n.onclick && n.onclick()
        },
        B = function(t) {
            "function" == typeof t.stopPropagation ? (t.stopPropagation(), t.preventDefault()) : e.event && e.event.hasOwnProperty("cancelBubble") && (e.event.cancelBubble = !0)
        };
    e.sweetAlertInitialize = function() {
        var e = '<div class="sweet-overlay" tabIndex="-1"></div><div class="sweet-alert" tabIndex="-1"><div class="icon error"><span class="x-mark"><span class="line left"></span><span class="line right"></span></span></div><div class="icon warning"> <span class="body"></span> <span class="dot"></span> </div> <div class="icon info"></div> <div class="icon success"> <span class="line tip"></span> <span class="line long"></span> <div class="placeholder"></div> <div class="fix"></div> </div> <div class="icon custom"></div> <h2>Title</h2><p>Text</p><button class="cancel" tabIndex="2">Cancel</button><button class="confirm" tabIndex="1">OK</button></div>',
            n = t.createElement("div");
        for (n.innerHTML = e; n.firstChild;) t.body.appendChild(n.firstChild)
    }, e.sweetAlert = e.swal = function() {
        var e = arguments;
        if (null !== x()) i.apply(this, e);
        else var t = setInterval(function() {
            null !== x() && (clearInterval(t), i.apply(this, e))
        }, 100)
    }, e.sweetAlert.setDefaults = e.swal.setDefaults = function(e) {
        if (!e) throw new Error("userParams is required");
        if ("object" != typeof e) throw new Error("userParams has to be a object");
        a(w, e)
    }, e.sweetAlert.close = e.swal.close = function() {
        var i = x();
        j(T(), 5), j(i, 5), S(i, "showSweetAlert"), A(i, "hideSweetAlert"), S(i, "visible");
        var r = i.querySelector(".icon.success");
        S(r, "animate"), S(r.querySelector(".tip"), "animateSuccessTip"), S(r.querySelector(".long"), "animateSuccessLong");
        var o = i.querySelector(".icon.error");
        S(o, "animateErrorIcon"), S(o.querySelector(".x-mark"), "animateXMark");
        var a = i.querySelector(".icon.warning");
        S(a, "pulseWarning"), S(a.querySelector(".body"), "pulseWarningIns"), S(a.querySelector(".dot"), "pulseWarningIns"), e.onkeydown = m, t.onclick = h, p && p.focus(), g = n, clearTimeout(i.timeout)
    }
}(window, document), ! function() {
    var e = null;
    window.PR_SHOULD_USE_CONTINUATION = !0,
        function() {
            function t(e) {
                function t(e) {
                    var t = e.charCodeAt(0);
                    if (92 !== t) return t;
                    var n = e.charAt(1);
                    return (t = f[n]) ? t : n >= "0" && "7" >= n ? parseInt(e.substring(1), 8) : "u" === n || "x" === n ? parseInt(e.substring(2), 16) : e.charCodeAt(1)
                }

                function n(e) {
                    return 32 > e ? (16 > e ? "\\x0" : "\\x") + e.toString(16) : (e = String.fromCharCode(e), "\\" === e || "-" === e || "]" === e || "^" === e ? "\\" + e : e)
                }

                function i(e) {
                    var i = e.substring(1, e.length - 1).match(/\\u[\dA-Fa-f]{4}|\\x[\dA-Fa-f]{2}|\\[0-3][0-7]{0,2}|\\[0-7]{1,2}|\\[\S\s]|[^\\]/g),
                        e = [],
                        r = "^" === i[0],
                        o = ["["];
                    r && o.push("^");
                    for (var r = r ? 1 : 0, a = i.length; a > r; ++r) {
                        var s = i[r];
                        if (/\\[bdsw]/i.test(s)) o.push(s);
                        else {
                            var l, s = t(s);
                            a > r + 2 && "-" === i[r + 1] ? (l = t(i[r + 2]), r += 2) : l = s, e.push([s, l]), 65 > l || s > 122 || (65 > l || s > 90 || e.push([32 | Math.max(65, s), 32 | Math.min(l, 90)]), 97 > l || s > 122 || e.push([-33 & Math.max(97, s), -33 & Math.min(l, 122)]))
                        }
                    }
                    for (e.sort(function(e, t) {
                            return e[0] - t[0] || t[1] - e[1]
                        }), i = [], a = [], r = 0; r < e.length; ++r) s = e[r], s[0] <= a[1] + 1 ? a[1] = Math.max(a[1], s[1]) : i.push(a = s);
                    for (r = 0; r < i.length; ++r) s = i[r], o.push(n(s[0])), s[1] > s[0] && (s[1] + 1 > s[0] && o.push("-"), o.push(n(s[1])));
                    return o.push("]"), o.join("")
                }

                function r(e) {
                    for (var t = e.source.match(/\[(?:[^\\\]]|\\[\S\s])*]|\\u[\dA-Fa-f]{4}|\\x[\dA-Fa-f]{2}|\\\d+|\\[^\dux]|\(\?[!:=]|[()^]|[^()[\\^]+/g), r = t.length, s = [], l = 0, u = 0; r > l; ++l) {
                        var c = t[l];
                        "(" === c ? ++u : "\\" === c.charAt(0) && (c = +c.substring(1)) && (u >= c ? s[c] = -1 : t[l] = n(c))
                    }
                    for (l = 1; l < s.length; ++l) - 1 === s[l] && (s[l] = ++o);
                    for (u = l = 0; r > l; ++l) c = t[l], "(" === c ? (++u, s[u] || (t[l] = "(?:")) : "\\" === c.charAt(0) && (c = +c.substring(1)) && u >= c && (t[l] = "\\" + s[c]);
                    for (l = 0; r > l; ++l) "^" === t[l] && "^" !== t[l + 1] && (t[l] = "");
                    if (e.ignoreCase && a)
                        for (l = 0; r > l; ++l) c = t[l], e = c.charAt(0), c.length >= 2 && "[" === e ? t[l] = i(c) : "\\" !== e && (t[l] = c.replace(/[A-Za-z]/g, function(e) {
                            return e = e.charCodeAt(0), "[" + String.fromCharCode(-33 & e, 32 | e) + "]"
                        }));
                    return t.join("")
                }
                for (var o = 0, a = !1, s = !1, l = 0, u = e.length; u > l; ++l) {
                    var c = e[l];
                    if (c.ignoreCase) s = !0;
                    else if (/[a-z]/i.test(c.source.replace(/\\u[\da-f]{4}|\\x[\da-f]{2}|\\[^UXux]/gi, ""))) {
                        a = !0, s = !1;
                        break
                    }
                }
                for (var f = {
                        b: 8,
                        t: 9,
                        n: 10,
                        v: 11,
                        f: 12,
                        r: 13
                    }, d = [], l = 0, u = e.length; u > l; ++l) {
                    if (c = e[l], c.global || c.multiline) throw Error("" + c);
                    d.push("(?:" + r(c) + ")")
                }
                return RegExp(d.join("|"), s ? "gi" : "g")
            }

            function n(e, t) {
                function n(e) {
                    var l = e.nodeType;
                    if (1 == l) {
                        if (!i.test(e.className)) {
                            for (l = e.firstChild; l; l = l.nextSibling) n(l);
                            l = e.nodeName.toLowerCase(), ("br" === l || "li" === l) && (r[s] = "\n", a[s << 1] = o++, a[s++ << 1 | 1] = e)
                        }
                    } else(3 == l || 4 == l) && (l = e.nodeValue, l.length && (l = t ? l.replace(/\r\n?/g, "\n") : l.replace(/[\t\n\r ]+/g, " "), r[s] = l, a[s << 1] = o, o += l.length, a[s++ << 1 | 1] = e))
                }
                var i = /(?:^|\s)nocode(?:\s|$)/,
                    r = [],
                    o = 0,
                    a = [],
                    s = 0;
                return n(e), {
                    a: r.join("").replace(/\n$/, ""),
                    d: a
                }
            }

            function i(e, t, n, i) {
                t && (e = {
                    a: t,
                    e: e
                }, n(e), i.push.apply(i, e.g))
            }

            function r(e) {
                for (var t = void 0, n = e.firstChild; n; n = n.nextSibling) var i = n.nodeType,
                    t = 1 === i ? t ? e : n : 3 === i && x.test(n.nodeValue) ? e : t;
                return t === e ? void 0 : t
            }

            function o(n, r) {
                function o(e) {
                    for (var t = e.e, n = [t, "pln"], c = 0, f = e.a.match(a) || [], d = {}, p = 0, h = f.length; h > p; ++p) {
                        var m, g = f[p],
                            v = d[g],
                            y = void 0;
                        if ("string" == typeof v) m = !1;
                        else {
                            var b = s[g.charAt(0)];
                            if (b) y = g.match(b[1]), v = b[0];
                            else {
                                for (m = 0; l > m; ++m)
                                    if (b = r[m], y = g.match(b[1])) {
                                        v = b[0];
                                        break
                                    }
                                y || (v = "pln")
                            }!(m = v.length >= 5 && "lang-" === v.substring(0, 5)) || y && "string" == typeof y[1] || (m = !1, v = "src"), m || (d[g] = v)
                        }
                        if (b = c, c += g.length, m) {
                            m = y[1];
                            var w = g.indexOf(m),
                                x = w + m.length;
                            y[2] && (x = g.length - y[2].length, w = x - m.length), v = v.substring(5), i(t + b, g.substring(0, w), o, n), i(t + b + w, m, u(v, m), n), i(t + b + x, g.substring(x), o, n)
                        } else n.push(t + b, v)
                    }
                    e.g = n
                }
                var a, s = {};
                ! function() {
                    for (var i = n.concat(r), o = [], l = {}, u = 0, c = i.length; c > u; ++u) {
                        var f = i[u],
                            d = f[3];
                        if (d)
                            for (var p = d.length; --p >= 0;) s[d.charAt(p)] = f;
                        f = f[1], d = "" + f, l.hasOwnProperty(d) || (o.push(f), l[d] = e)
                    }
                    o.push(/[\S\s]/), a = t(o)
                }();
                var l = r.length;
                return o
            }

            function a(t) {
                var n = [],
                    i = [];
                n.push(t.tripleQuotedStrings ? ["str", /^(?:'''(?:[^'\\]|\\[\S\s]|''?(?=[^']))*(?:'''|$)|"""(?:[^"\\]|\\[\S\s]|""?(?=[^"]))*(?:"""|$)|'(?:[^'\\]|\\[\S\s])*(?:'|$)|"(?:[^"\\]|\\[\S\s])*(?:"|$))/, e, "'\""] : t.multiLineStrings ? ["str", /^(?:'(?:[^'\\]|\\[\S\s])*(?:'|$)|"(?:[^"\\]|\\[\S\s])*(?:"|$)|`(?:[^\\`]|\\[\S\s])*(?:`|$))/, e, "'\"`"] : ["str", /^(?:'(?:[^\n\r'\\]|\\.)*(?:'|$)|"(?:[^\n\r"\\]|\\.)*(?:"|$))/, e, "\"'"]), t.verbatimStrings && i.push(["str", /^@"(?:[^"]|"")*(?:"|$)/, e]);
                var r = t.hashComments;
                if (r && (t.cStyleComments ? (n.push(r > 1 ? ["com", /^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/, e, "#"] : ["com", /^#(?:(?:define|e(?:l|nd)if|else|error|ifn?def|include|line|pragma|undef|warning)\b|[^\n\r]*)/, e, "#"]), i.push(["str", /^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h(?:h|pp|\+\+)?|[a-z]\w*)>/, e])) : n.push(["com", /^#[^\n\r]*/, e, "#"])), t.cStyleComments && (i.push(["com", /^\/\/[^\n\r]*/, e]), i.push(["com", /^\/\*[\S\s]*?(?:\*\/|$)/, e])), r = t.regexLiterals) {
                    var a = (r = r > 1 ? "" : "\n\r") ? "." : "[\\S\\s]";
                    i.push(["lang-regex", RegExp("^(?:^^\\.?|[+-]|[!=]=?=?|\\#|%=?|&&?=?|\\(|\\*=?|[+\\-]=|->|\\/=?|::?|<<?=?|>>?>?=?|,|;|\\?|@|\\[|~|{|\\^\\^?=?|\\|\\|?=?|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\\s*(" + ("/(?=[^/*" + r + "])(?:[^/\\x5B\\x5C" + r + "]|\\x5C" + a + "|\\x5B(?:[^\\x5C\\x5D" + r + "]|\\x5C" + a + ")*(?:\\x5D|$))+/") + ")")])
                }
                return (r = t.types) && i.push(["typ", r]), r = ("" + t.keywords).replace(/^ | $/g, ""), r.length && i.push(["kwd", RegExp("^(?:" + r.replace(/[\s,]+/g, "|") + ")\\b"), e]), n.push(["pln", /^\s+/, e, " \r\n	 "]), r = "^.[^\\s\\w.$@'\"`/\\\\]*", t.regexLiterals && (r += "(?!s*/)"), i.push(["lit", /^@[$_a-z][\w$@]*/i, e], ["typ", /^(?:[@_]?[A-Z]+[a-z][\w$@]*|\w+_t\b)/, e], ["pln", /^[$_a-z][\w$@]*/i, e], ["lit", /^(?:0x[\da-f]+|(?:\d(?:_\d+)*\d*(?:\.\d*)?|\.\d\+)(?:e[+-]?\d+)?)[a-z]*/i, e, "0123456789"], ["pln", /^\\[\S\s]?/, e], ["pun", RegExp(r), e]), o(n, i)
            }

            function s(e, t, n) {
                function i(e) {
                    var t = e.nodeType;
                    if (1 != t || o.test(e.className)) {
                        if ((3 == t || 4 == t) && n) {
                            var l = e.nodeValue,
                                u = l.match(a);
                            u && (t = l.substring(0, u.index), e.nodeValue = t, (l = l.substring(u.index + u[0].length)) && e.parentNode.insertBefore(s.createTextNode(l), e.nextSibling), r(e), t || e.parentNode.removeChild(e))
                        }
                    } else if ("br" === e.nodeName) r(e), e.parentNode && e.parentNode.removeChild(e);
                    else
                        for (e = e.firstChild; e; e = e.nextSibling) i(e)
                }

                function r(e) {
                    function t(e, n) {
                        var i = n ? e.cloneNode(!1) : e,
                            r = e.parentNode;
                        if (r) {
                            var r = t(r, 1),
                                o = e.nextSibling;
                            r.appendChild(i);
                            for (var a = o; a; a = o) o = a.nextSibling, r.appendChild(a)
                        }
                        return i
                    }
                    for (; !e.nextSibling;)
                        if (e = e.parentNode, !e) return;
                    for (var n, e = t(e.nextSibling, 0);
                        (n = e.parentNode) && 1 === n.nodeType;) e = n;
                    u.push(e)
                }
                for (var o = /(?:^|\s)nocode(?:\s|$)/, a = /\r\n?|\n/, s = e.ownerDocument, l = s.createElement("li"); e.firstChild;) l.appendChild(e.firstChild);
                for (var u = [l], c = 0; c < u.length; ++c) i(u[c]);
                t === (0 | t) && u[0].setAttribute("value", t);
                var f = s.createElement("ol");
                f.className = "linenums";
                for (var t = Math.max(0, t - 1 | 0) || 0, c = 0, d = u.length; d > c; ++c) l = u[c], l.className = "L" + (c + t) % 10, l.firstChild || l.appendChild(s.createTextNode(" ")), f.appendChild(l);
                e.appendChild(f)
            }

            function l(e, t) {
                for (var n = t.length; --n >= 0;) {
                    var i = t[n];
                    C.hasOwnProperty(i) ? f.console && console.warn("cannot override language handler %s", i) : C[i] = e
                }
            }

            function u(e, t) {
                return e && C.hasOwnProperty(e) || (e = /^\s*</.test(t) ? "default-markup" : "default-code"), C[e]
            }

            function c(e) {
                var t = e.h;
                try {
                    var i = n(e.c, e.i),
                        r = i.a;
                    e.a = r, e.d = i.d, e.e = 0, u(t, r)(e);
                    var o = /\bMSIE\s(\d+)/.exec(navigator.userAgent),
                        o = o && +o[1] <= 8,
                        t = /\n/g,
                        a = e.a,
                        s = a.length,
                        i = 0,
                        l = e.d,
                        c = l.length,
                        r = 0,
                        d = e.g,
                        p = d.length,
                        h = 0;
                    d[p] = s;
                    var m, g;
                    for (g = m = 0; p > g;) d[g] !== d[g + 2] ? (d[m++] = d[g++], d[m++] = d[g++]) : g += 2;
                    for (p = m, g = m = 0; p > g;) {
                        for (var v = d[g], y = d[g + 1], b = g + 2; p >= b + 2 && d[b + 1] === y;) b += 2;
                        d[m++] = v, d[m++] = y, g = b
                    }
                    d.length = m;
                    var w, x = e.c;
                    x && (w = x.style.display, x.style.display = "none");
                    try {
                        for (; c > r;) {
                            var T, C = l[r + 2] || s,
                                A = d[h + 2] || s,
                                b = Math.min(C, A),
                                S = l[r + 1];
                            if (1 !== S.nodeType && (T = a.substring(i, b))) {
                                o && (T = T.replace(t, "\r")), S.nodeValue = T;
                                var k = S.ownerDocument,
                                    E = k.createElement("span");
                                E.className = d[h + 1];
                                var N = S.parentNode;
                                N.replaceChild(E, S), E.appendChild(S), C > i && (l[r + 1] = S = k.createTextNode(a.substring(b, C)), N.insertBefore(S, E.nextSibling))
                            }
                            i = b, i >= C && (r += 2), i >= A && (h += 2)
                        }
                    } finally {
                        x && (x.style.display = w)
                    }
                } catch (_) {
                    f.console && console.log(_ && _.stack || _)
                }
            }
            var f = window,
                d = ["break,continue,do,else,for,if,return,while"],
                p = [
                    [d, "auto,case,char,const,default,double,enum,extern,float,goto,inline,int,long,register,short,signed,sizeof,static,struct,switch,typedef,union,unsigned,void,volatile"], "catch,class,delete,false,import,new,operator,private,protected,public,this,throw,true,try,typeof"
                ],
                h = [p, "alignof,align_union,asm,axiom,bool,concept,concept_map,const_cast,constexpr,decltype,delegate,dynamic_cast,explicit,export,friend,generic,late_check,mutable,namespace,nullptr,property,reinterpret_cast,static_assert,static_cast,template,typeid,typename,using,virtual,where"],
                m = [p, "abstract,assert,boolean,byte,extends,final,finally,implements,import,instanceof,interface,null,native,package,strictfp,super,synchronized,throws,transient"],
                g = [m, "as,base,by,checked,decimal,delegate,descending,dynamic,event,fixed,foreach,from,group,implicit,in,internal,into,is,let,lock,object,out,override,orderby,params,partial,readonly,ref,sbyte,sealed,stackalloc,string,select,uint,ulong,unchecked,unsafe,ushort,var,virtual,where"],
                p = [p, "debugger,eval,export,function,get,null,set,undefined,var,with,Infinity,NaN"],
                v = [d, "and,as,assert,class,def,del,elif,except,exec,finally,from,global,import,in,is,lambda,nonlocal,not,or,pass,print,raise,try,with,yield,False,True,None"],
                y = [d, "alias,and,begin,case,class,def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo,rescue,retry,self,super,then,true,undef,unless,until,when,yield,BEGIN,END"],
                b = [d, "as,assert,const,copy,drop,enum,extern,fail,false,fn,impl,let,log,loop,match,mod,move,mut,priv,pub,pure,ref,self,static,struct,true,trait,type,unsafe,use"],
                d = [d, "case,done,elif,esac,eval,fi,function,in,local,set,then,until"],
                w = /^(DIR|FILE|vector|(de|priority_)?queue|list|stack|(const_)?iterator|(multi)?(set|map)|bitset|u?(int|float)\d*)\b/,
                x = /\S/,
                T = a({
                    keywords: [h, g, p, "caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END", v, y, d],
                    hashComments: !0,
                    cStyleComments: !0,
                    multiLineStrings: !0,
                    regexLiterals: !0
                }),
                C = {};
            l(T, ["default-code"]), l(o([], [
                ["pln", /^[^<?]+/],
                ["dec", /^<!\w[^>]*(?:>|$)/],
                ["com", /^<\!--[\S\s]*?(?:--\>|$)/],
                ["lang-", /^<\?([\S\s]+?)(?:\?>|$)/],
                ["lang-", /^<%([\S\s]+?)(?:%>|$)/],
                ["pun", /^(?:<[%?]|[%?]>)/],
                ["lang-", /^<xmp\b[^>]*>([\S\s]+?)<\/xmp\b[^>]*>/i],
                ["lang-js", /^<script\b[^>]*>([\S\s]*?)(<\/script\b[^>]*>)/i],
                ["lang-css", /^<style\b[^>]*>([\S\s]*?)(<\/style\b[^>]*>)/i],
                ["lang-in.tag", /^(<\/?[a-z][^<>]*>)/i]
            ]), ["default-markup", "htm", "html", "mxml", "xhtml", "xml", "xsl"]), l(o([
                ["pln", /^\s+/, e, " 	\r\n"],
                ["atv", /^(?:"[^"]*"?|'[^']*'?)/, e, "\"'"]
            ], [
                ["tag", /^^<\/?[a-z](?:[\w-.:]*\w)?|\/?>$/i],
                ["atn", /^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i],
                ["lang-uq.val", /^=\s*([^\s"'>]*(?:[^\s"'/>]|\/(?=\s)))/],
                ["pun", /^[/<->]+/],
                ["lang-js", /^on\w+\s*=\s*"([^"]+)"/i],
                ["lang-js", /^on\w+\s*=\s*'([^']+)'/i],
                ["lang-js", /^on\w+\s*=\s*([^\s"'>]+)/i],
                ["lang-css", /^style\s*=\s*"([^"]+)"/i],
                ["lang-css", /^style\s*=\s*'([^']+)'/i],
                ["lang-css", /^style\s*=\s*([^\s"'>]+)/i]
            ]), ["in.tag"]), l(o([], [
                ["atv", /^[\S\s]+/]
            ]), ["uq.val"]), l(a({
                keywords: h,
                hashComments: !0,
                cStyleComments: !0,
                types: w
            }), ["c", "cc", "cpp", "cxx", "cyc", "m"]), l(a({
                keywords: "null,true,false"
            }), ["json"]), l(a({
                keywords: g,
                hashComments: !0,
                cStyleComments: !0,
                verbatimStrings: !0,
                types: w
            }), ["cs"]), l(a({
                keywords: m,
                cStyleComments: !0
            }), ["java"]), l(a({
                keywords: d,
                hashComments: !0,
                multiLineStrings: !0
            }), ["bash", "bsh", "csh", "sh"]), l(a({
                keywords: v,
                hashComments: !0,
                multiLineStrings: !0,
                tripleQuotedStrings: !0
            }), ["cv", "py", "python"]), l(a({
                keywords: "caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",
                hashComments: !0,
                multiLineStrings: !0,
                regexLiterals: 2
            }), ["perl", "pl", "pm"]), l(a({
                keywords: y,
                hashComments: !0,
                multiLineStrings: !0,
                regexLiterals: !0
            }), ["rb", "ruby"]), l(a({
                keywords: p,
                cStyleComments: !0,
                regexLiterals: !0
            }), ["javascript", "js"]), l(a({
                keywords: "all,and,by,catch,class,else,extends,false,finally,for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then,throw,true,try,unless,until,when,while,yes",
                hashComments: 3,
                cStyleComments: !0,
                multilineStrings: !0,
                tripleQuotedStrings: !0,
                regexLiterals: !0
            }), ["coffee"]), l(a({
                keywords: b,
                cStyleComments: !0,
                multilineStrings: !0
            }), ["rc", "rs", "rust"]), l(o([], [
                ["str", /^[\S\s]+/]
            ]), ["regex"]);
            var A = f.PR = {
                createSimpleLexer: o,
                registerLangHandler: l,
                sourceDecorator: a,
                PR_ATTRIB_NAME: "atn",
                PR_ATTRIB_VALUE: "atv",
                PR_COMMENT: "com",
                PR_DECLARATION: "dec",
                PR_KEYWORD: "kwd",
                PR_LITERAL: "lit",
                PR_NOCODE: "nocode",
                PR_PLAIN: "pln",
                PR_PUNCTUATION: "pun",
                PR_SOURCE: "src",
                PR_STRING: "str",
                PR_TAG: "tag",
                PR_TYPE: "typ",
                prettyPrintOne: f.prettyPrintOne = function(e, t, n) {
                    var i = document.createElement("div");
                    return i.innerHTML = "<pre>" + e + "</pre>", i = i.firstChild, n && s(i, n, !0), c({
                        h: t,
                        j: n,
                        c: i,
                        i: 1
                    }), i.innerHTML
                },
                prettyPrint: f.prettyPrint = function(t, n) {
                    function i() {
                        for (var n = f.PR_SHOULD_USE_CONTINUATION ? h.now() + 250 : 1 / 0; g < l.length && h.now() < n; g++) {
                            for (var o = l[g], u = C, d = o; d = d.previousSibling;) {
                                var p = d.nodeType,
                                    A = (7 === p || 8 === p) && d.nodeValue;
                                if (A ? !/^\??prettify\b/.test(A) : 3 !== p || /\S/.test(d.nodeValue)) break;
                                if (A) {
                                    u = {}, A.replace(/\b(\w+)=([\w%+\-.:]+)/g, function(e, t, n) {
                                        u[t] = n
                                    });
                                    break
                                }
                            }
                            if (d = o.className, (u !== C || y.test(d)) && !b.test(d)) {
                                for (p = !1, A = o.parentNode; A; A = A.parentNode)
                                    if (T.test(A.tagName) && A.className && y.test(A.className)) {
                                        p = !0;
                                        break
                                    }
                                if (!p) {
                                    if (o.className += " prettyprinted", p = u.lang, !p) {
                                        var S, p = d.match(v);
                                        !p && (S = r(o)) && x.test(S.tagName) && (p = S.className.match(v)), p && (p = p[1])
                                    }
                                    if (w.test(o.tagName)) A = 1;
                                    else var A = o.currentStyle,
                                        k = a.defaultView,
                                        A = (A = A ? A.whiteSpace : k && k.getComputedStyle ? k.getComputedStyle(o, e).getPropertyValue("white-space") : 0) && "pre" === A.substring(0, 3);
                                    k = u.linenums, (k = "true" === k || +k) || (k = (k = d.match(/\blinenums\b(?::(\d+))?/)) ? k[1] && k[1].length ? +k[1] : !0 : !1), k && s(o, k, A), m = {
                                        h: p,
                                        c: o,
                                        j: k,
                                        i: A
                                    }, c(m)
                                }
                            }
                        }
                        g < l.length ? setTimeout(i, 250) : "function" == typeof t && t()
                    }
                    for (var o = n || document.body, a = o.ownerDocument || document, o = [o.getElementsByTagName("pre"), o.getElementsByTagName("code"), o.getElementsByTagName("xmp")], l = [], u = 0; u < o.length; ++u)
                        for (var d = 0, p = o[u].length; p > d; ++d) l.push(o[u][d]);
                    var o = e,
                        h = Date;
                    h.now || (h = {
                        now: function() {
                            return +new Date
                        }
                    });
                    var m, g = 0,
                        v = /\blang(?:uage)?-([\w.]+)(?!\S)/,
                        y = /\bprettyprint\b/,
                        b = /\bprettyprinted\b/,
                        w = /pre|xmp/i,
                        x = /^code$/i,
                        T = /^(?:pre|code|xmp)$/i,
                        C = {};
                    i()
                }
            };
            "function" == typeof define && define.amd && define("google-code-prettify", [], function() {
                return A
            })
        }()
}(), ! function(e) {
    "use strict";
    var t = e.HTMLCanvasElement && e.HTMLCanvasElement.prototype,
        n = e.Blob && function() {
            try {
                return Boolean(new Blob)
            } catch (e) {
                return !1
            }
        }(),
        i = n && e.Uint8Array && function() {
            try {
                return 100 === new Blob([new Uint8Array(100)]).size
            } catch (e) {
                return !1
            }
        }(),
        r = e.BlobBuilder || e.WebKitBlobBuilder || e.MozBlobBuilder || e.MSBlobBuilder,
        o = (n || r) && e.atob && e.ArrayBuffer && e.Uint8Array && function(e) {
            var t, o, a, s, l, u;
            for (t = e.split(",")[0].indexOf("base64") >= 0 ? atob(e.split(",")[1]) : decodeURIComponent(e.split(",")[1]), o = new ArrayBuffer(t.length), a = new Uint8Array(o), s = 0; s < t.length; s += 1) a[s] = t.charCodeAt(s);
            return l = e.split(",")[0].split(":")[1].split(";")[0], n ? new Blob([i ? a : o], {
                type: l
            }) : (u = new r, u.append(o), u.getBlob(l))
        };
    e.HTMLCanvasElement && !t.toBlob && (t.mozGetAsFile ? t.toBlob = function(e, n, i) {
        e(i && t.toDataURL && o ? o(this.toDataURL(n, i)) : this.mozGetAsFile("blob", n))
    } : t.toDataURL && o && (t.toBlob = function(e, t, n) {
        e(o(this.toDataURL(t, n)))
    })), e.dataURLtoBlob = o
}(window),
function(e, t) {
    "use strict";

    function n(e, t, n, i, r) {
        var o = {
            type: n.type || n,
            target: e,
            result: i
        };
        U(o, r), t(o)
    }

    function i(e) {
        return w && !!w.prototype["readAs" + e]
    }

    function r(e, r, o, a) {
        if (K.isBlob(e) && i(o)) {
            var s = new w;
            W(s, O, function u(t) {
                var i = t.type;
                "progress" == i ? n(e, r, t, t.target.result, {
                    loaded: t.loaded,
                    total: t.total
                }) : "loadend" == i ? (X(s, O, u), s = null) : n(e, r, t, t.target.result)
            });
            try {
                a ? s["readAs" + o](e, a) : s["readAs" + o](e)
            } catch (l) {
                n(e, r, "error", t, {
                    error: l.toString()
                })
            }
        } else n(e, r, "error", t, {
            error: "filreader_not_support_" + o
        })
    }

    function o(e, t) {
        if (!e.type && e.size % 4096 === 0 && e.size <= 102400)
            if (w) try {
                var n = new w;
                G(n, O, function(e) {
                    var i = "error" != e.type;
                    t(i), i && n.abort()
                }), n.readAsDataURL(e)
            } catch (i) {
                t(!1)
            } else t(null);
            else t(!0)
    }

    function a(e) {
        var t;
        return e.getAsEntry ? t = e.getAsEntry() : e.webkitGetAsEntry && (t = e.webkitGetAsEntry()), t
    }

    function s(e, t) {
        if (e)
            if (e.isFile) e.file(function(n) {
                n.fullPath = e.fullPath, t(!1, [n])
            }, function(e) {
                t("FileError.code: " + e.code)
            });
            else if (e.isDirectory) {
            var n = e.createReader(),
                i = [];
            n.readEntries(function(e) {
                K.afor(e, function(e, n) {
                    s(n, function(n, r) {
                        n ? K.log(n) : i = i.concat(r), e ? e() : t(!1, i)
                    })
                })
            }, function(e) {
                t("directory_reader: " + e)
            })
        } else s(a(e), t);
        else t("invalid entry")
    }

    function l(e) {
        var t = {};
        return z(e, function(e, n) {
            e && "object" == typeof e && void 0 === e.nodeType && (e = U({}, e)), t[n] = e
        }), t
    }

    function u(e) {
        return D.test(e && e.tagName)
    }

    function c(e) {
        return (e.originalEvent || e || "").dataTransfer || {}
    }

    function f(e) {
        var t;
        for (t in e)
            if (e.hasOwnProperty(t) && !(e[t] instanceof Object || "overlay" === t || "filter" === t)) return !0;
        return !1
    }
    var d = 1,
        p = function() {},
        h = e.document,
        m = h.doctype || {},
        g = e.navigator.userAgent,
        v = e.createObjectURL && e || e.URL && URL.revokeObjectURL && URL || e.webkitURL && webkitURL,
        y = e.Blob,
        b = e.File,
        w = e.FileReader,
        x = e.FormData,
        T = e.XMLHttpRequest,
        C = e.jQuery,
        A = !(!(b && w && (e.Uint8Array || x || T.prototype.sendAsBinary)) || /safari\//i.test(g) && !/chrome\//i.test(g) && /windows/i.test(g)),
        S = A && "withCredentials" in new T,
        k = A && !!y && !!(y.prototype.webkitSlice || y.prototype.mozSlice || y.prototype.slice),
        E = e.dataURLtoBlob,
        N = /img/i,
        _ = /canvas/i,
        F = /img|canvas/i,
        D = /input/i,
        I = /^data:[^,]+,/,
        L = {}.toString,
        j = e.Math,
        R = function(t) {
            return t = new e.Number(j.pow(1024, t)), t.from = function(e) {
                return j.round(e * this)
            }, t
        },
        B = {},
        P = [],
        O = "abort progress error load loadend",
        $ = "status statusText readyState response responseXML responseText responseBody".split(" "),
        H = "currentTarget",
        M = "preventDefault",
        q = function(e) {
            return e && "length" in e
        },
        z = function(e, t, n) {
            if (e)
                if (q(e))
                    for (var i = 0, r = e.length; r > i; i++) i in e && t.call(n, e[i], i, e);
                else
                    for (var o in e) e.hasOwnProperty(o) && t.call(n, e[o], o, e)
        },
        U = function(e) {
            for (var t = arguments, n = 1, i = function(t, n) {
                    e[n] = t
                }; n < t.length; n++) z(t[n], i);
            return e
        },
        W = function(e, t, n) {
            if (e) {
                var i = K.uid(e);
                B[i] || (B[i] = {});
                var r = w && e && e instanceof w;
                z(t.split(/\s+/), function(t) {
                    C && !r ? C.event.add(e, t, n) : (B[i][t] || (B[i][t] = []), B[i][t].push(n), e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent ? e.attachEvent("on" + t, n) : e["on" + t] = n)
                })
            }
        },
        X = function(e, t, n) {
            if (e) {
                var i = K.uid(e),
                    r = B[i] || {},
                    o = w && e && e instanceof w;
                z(t.split(/\s+/), function(t) {
                    if (C && !o) C.event.remove(e, t, n);
                    else {
                        for (var i = r[t] || [], a = i.length; a--;)
                            if (i[a] === n) {
                                i.splice(a, 1);
                                break
                            }
                        e.addEventListener ? e.removeEventListener(t, n, !1) : e.detachEvent ? e.detachEvent("on" + t, n) : e["on" + t] = null
                    }
                })
            }
        },
        G = function(e, t, n) {
            W(e, t, function i(r) {
                X(e, t, i), n(r)
            })
        },
        V = function(t) {
            return t.target || (t.target = e.event && e.event.srcElement || h), 3 === t.target.nodeType && (t.target = t.target.parentNode), t
        },
        Q = function(e) {
            var t = h.createElement("input");
            return t.setAttribute("type", "file"), e in t
        },
        K = {
            version: "2.0.9",
            cors: !1,
            html5: !0,
            media: !1,
            formData: !0,
            multiPassResize: !0,
            debug: !1,
            pingUrl: !1,
            multiFlash: !1,
            flashAbortTimeout: 0,
            withCredentials: !0,
            staticPath: "./dist/",
            flashUrl: 0,
            flashImageUrl: 0,
            postNameConcat: function(e, t) {
                return e + (null != t ? "[" + t + "]" : "")
            },
            ext2mime: {
                jpg: "image/jpeg",
                tif: "image/tiff",
                txt: "text/plain"
            },
            accept: {
                "image/*": "art bm bmp dwg dxf cbr cbz fif fpx gif ico iefs jfif jpe jpeg jpg jps jut mcf nap nif pbm pcx pgm pict pm png pnm qif qtif ras rast rf rp svf tga tif tiff xbm xbm xpm xwd",
                "audio/*": "m4a flac aac rm mpa wav wma ogg mp3 mp2 m3u mod amf dmf dsm far gdm imf it m15 med okt s3m stm sfx ult uni xm sid ac3 dts cue aif aiff wpl ape mac mpc mpp shn wv nsf spc gym adplug adx dsp adp ymf ast afc hps xs",
                "video/*": "m4v 3gp nsv ts ty strm rm rmvb m3u ifo mov qt divx xvid bivx vob nrg img iso pva wmv asf asx ogm m2v avi bin dat dvr-ms mpg mpeg mp4 mkv avc vp3 svq3 nuv viv dv fli flv wpl"
            },
            uploadRetry: 0,
            networkDownRetryTimeout: 5e3,
            chunkSize: 0,
            chunkUploadRetry: 0,
            chunkNetworkDownRetryTimeout: 2e3,
            KB: R(1),
            MB: R(2),
            GB: R(3),
            TB: R(4),
            EMPTY_PNG: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQIW2NkAAIAAAoAAggA9GkAAAAASUVORK5CYII=",
            expando: "fileapi" + (new Date).getTime(),
            uid: function(e) {
                return e ? e[K.expando] = e[K.expando] || K.uid() : (++d, K.expando + d)
            },
            log: function() {
                K.debug && e.console && console.log && (console.log.apply ? console.log.apply(console, arguments) : console.log([].join.call(arguments, " ")))
            },
            newImage: function(e, t) {
                var n = h.createElement("img");
                return t && K.event.one(n, "error load", function(e) {
                    t("error" == e.type, n), n = null
                }), n.src = e, n
            },
            getXHR: function() {
                var t;
                if (T) t = new T;
                else if (e.ActiveXObject) try {
                    t = new ActiveXObject("MSXML2.XMLHttp.3.0")
                } catch (n) {
                    t = new ActiveXObject("Microsoft.XMLHTTP")
                }
                return t
            },
            isArray: q,
            support: {
                dnd: S && "ondrop" in h.createElement("div"),
                cors: S,
                html5: A,
                chunked: k,
                dataURI: !0,
                accept: Q("accept"),
                multiple: Q("multiple")
            },
            event: {
                on: W,
                off: X,
                one: G,
                fix: V
            },
            throttle: function(t, n) {
                var i, r;
                return function() {
                    r = arguments, i || (t.apply(e, r), i = setTimeout(function() {
                        i = 0, t.apply(e, r)
                    }, n))
                }
            },
            F: function() {},
            parseJSON: function(t) {
                var n;
                return n = e.JSON && JSON.parse ? JSON.parse(t) : new Function("return (" + t.replace(/([\r\n])/g, "\\$1") + ");")()
            },
            trim: function(e) {
                return e = String(e), e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
            },
            defer: function() {
                var e, n, i = [],
                    r = {
                        resolve: function(t, o) {
                            for (r.resolve = p, n = t || !1, e = o; o = i.shift();) o(n, e)
                        },
                        then: function(r) {
                            n !== t ? r(n, e) : i.push(r)
                        }
                    };
                return r
            },
            queue: function(e) {
                var t = 0,
                    n = 0,
                    i = !1,
                    r = !1,
                    o = {
                        inc: function() {
                            n++
                        },
                        next: function() {
                            t++, setTimeout(o.check, 0)
                        },
                        check: function() {
                            t >= n && !i && o.end()
                        },
                        isFail: function() {
                            return i
                        },
                        fail: function() {
                            !i && e(i = !0)
                        },
                        end: function() {
                            r || (r = !0, e())
                        }
                    };
                return o
            },
            each: z,
            afor: function(e, t) {
                var n = 0,
                    i = e.length;
                q(e) && i-- ? ! function r() {
                    t(i != n && r, e[n], n++)
                }() : t(!1)
            },
            extend: U,
            isFile: function(e) {
                return "[object File]" === L.call(e)
            },
            isBlob: function(e) {
                return this.isFile(e) || "[object Blob]" === L.call(e)
            },
            isCanvas: function(e) {
                return e && _.test(e.nodeName)
            },
            getFilesFilter: function(e) {
                return e = "string" == typeof e ? e : e.getAttribute && e.getAttribute("accept") || "", e ? new RegExp("(" + e.replace(/\./g, "\\.").replace(/,/g, "|") + ")$", "i") : /./
            },
            readAsDataURL: function(e, t) {
                K.isCanvas(e) ? n(e, t, "load", K.toDataURL(e)) : r(e, t, "DataURL")
            },
            readAsBinaryString: function(e, t) {
                i("BinaryString") ? r(e, t, "BinaryString") : r(e, function(e) {
                    if ("load" == e.type) try {
                        e.result = K.toBinaryString(e.result)
                    } catch (n) {
                        e.type = "error", e.message = n.toString()
                    }
                    t(e)
                }, "DataURL")
            },
            readAsArrayBuffer: function(e, t) {
                r(e, t, "ArrayBuffer")
            },
            readAsText: function(e, t, n) {
                n || (n = t, t = "utf-8"), r(e, n, "Text", t)
            },
            toDataURL: function(e, t) {
                return "string" == typeof e ? e : e.toDataURL ? e.toDataURL(t || "image/png") : void 0
            },
            toBinaryString: function(t) {
                return e.atob(K.toDataURL(t).replace(I, ""))
            },
            readAsImage: function(e, i, r) {
                if (K.isFile(e))
                    if (v) {
                        var o = v.createObjectURL(e);
                        o === t ? n(e, i, "error") : K.readAsImage(o, i, r)
                    } else K.readAsDataURL(e, function(t) {
                        "load" == t.type ? K.readAsImage(t.result, i, r) : (r || "error" == t.type) && n(e, i, t, null, {
                            loaded: t.loaded,
                            total: t.total
                        })
                    });
                else if (K.isCanvas(e)) n(e, i, "load", e);
                else if (N.test(e.nodeName))
                    if (e.complete) n(e, i, "load", e);
                    else {
                        var a = "error abort load";
                        G(e, a, function l(t) {
                            "load" == t.type && v && v.revokeObjectURL(e.src), X(e, a, l), n(e, i, t, e)
                        })
                    } else if (e.iframe) n(e, i, {
                    type: "error"
                });
                else {
                    var s = K.newImage(e.dataURL || e);
                    K.readAsImage(s, i, r)
                }
            },
            checkFileObj: function(e) {
                var t = {},
                    n = K.accept;
                return "object" == typeof e ? t = e : t.name = (e + "").split(/\\|\//g).pop(), null == t.type && (t.type = t.name.split(".").pop()), z(n, function(e, n) {
                    e = new RegExp(e.replace(/\s/g, "|"), "i"), (e.test(t.type) || K.ext2mime[t.type]) && (t.type = K.ext2mime[t.type] || n.split("/")[0] + "/" + t.type)
                }), t
            },
            getDropFiles: function(e, t) {
                var n = [],
                    i = c(e),
                    r = q(i.items) && i.items[0] && a(i.items[0]),
                    l = K.queue(function() {
                        t(n)
                    });
                z((r ? i.items : i.files) || [], function(e) {
                    l.inc();
                    try {
                        r ? s(e, function(e, t) {
                            e ? K.log("[err] getDropFiles:", e) : n.push.apply(n, t), l.next()
                        }) : o(e, function(t) {
                            t && n.push(e), l.next()
                        })
                    } catch (t) {
                        l.next(), K.log("[err] getDropFiles: ", t)
                    }
                }), l.check()
            },
            getFiles: function(e, t, n) {
                var i = [];
                return n ? (K.filterFiles(K.getFiles(e), t, n), null) : (e.jquery && (e.each(function() {
                    i = i.concat(K.getFiles(this))
                }), e = i, i = []), "string" == typeof t && (t = K.getFilesFilter(t)), e.originalEvent ? e = V(e.originalEvent) : e.srcElement && (e = V(e)), e.dataTransfer ? e = e.dataTransfer : e.target && (e = e.target), e.files ? (i = e.files, A || (i[0].blob = e, i[0].iframe = !0)) : !A && u(e) ? K.trim(e.value) && (i = [K.checkFileObj(e.value)], i[0].blob = e, i[0].iframe = !0) : q(e) && (i = e), K.filter(i, function(e) {
                    return !t || t.test(e.name)
                }))
            },
            getTotalSize: function(e) {
                for (var t = 0, n = e && e.length; n--;) t += e[n].size;
                return t
            },
            getInfo: function(e, t) {
                var n = {},
                    i = P.concat();
                K.isFile(e) ? ! function r() {
                    var o = i.shift();
                    o ? o.test(e.type) ? o(e, function(e, i) {
                        e ? t(e) : (U(n, i), r())
                    }) : r() : t(!1, n)
                }() : t("not_support_info", n)
            },
            addInfoReader: function(e, t) {
                t.test = function(t) {
                    return e.test(t)
                }, P.push(t)
            },
            filter: function(e, t) {
                for (var n, i = [], r = 0, o = e.length; o > r; r++) r in e && (n = e[r], t.call(n, n, r, e) && i.push(n));
                return i
            },
            filterFiles: function(e, t, n) {
                if (e.length) {
                    var i, r = e.concat(),
                        o = [],
                        a = [];
                    ! function s() {
                        r.length ? (i = r.shift(), K.getInfo(i, function(e, n) {
                            (t(i, e ? !1 : n) ? o : a).push(i), s()
                        })) : n(o, a)
                    }()
                } else n([], e)
            },
            upload: function(e) {
                e = U({
                    jsonp: "callback",
                    prepare: K.F,
                    beforeupload: K.F,
                    upload: K.F,
                    fileupload: K.F,
                    fileprogress: K.F,
                    filecomplete: K.F,
                    progress: K.F,
                    complete: K.F,
                    pause: K.F,
                    imageOriginal: !0,
                    chunkSize: K.chunkSize,
                    chunkUploadRetry: K.chunkUploadRetry,
                    uploadRetry: K.uploadRetry
                }, e), e.imageAutoOrientation && !e.imageTransform && (e.imageTransform = {
                    rotate: "auto"
                });
                var t, n = new K.XHR(e),
                    i = this._getFilesDataArray(e.files),
                    r = this,
                    o = 0,
                    a = 0,
                    s = !1;
                return z(i, function(e) {
                    o += e.size
                }), n.files = [], z(i, function(e) {
                    n.files.push(e.file)
                }), n.total = o, n.loaded = 0, n.filesLeft = i.length, e.beforeupload(n, e), t = function() {
                    var u = i.shift(),
                        c = u && u.file,
                        f = !1,
                        d = l(e);
                    if (n.filesLeft = i.length, c && c.name === K.expando && (c = null, K.log("[warn] FileAPI.upload() — called without files")), ("abort" != n.statusText || n.current) && u) {
                        if (s = !1, n.currentFile = c, c && e.prepare(c, d) === !1) return void t.call(r);
                        d.file = c, r._getFormData(d, u, function(s) {
                            a || e.upload(n, e);
                            var l = new K.XHR(U({}, d, {
                                upload: c ? function() {
                                    e.fileupload(c, l, d)
                                } : p,
                                progress: c ? function(t) {
                                    f || (f = t.loaded === t.total, e.fileprogress({
                                        type: "progress",
                                        total: u.total = t.total,
                                        loaded: u.loaded = t.loaded
                                    }, c, l, d), e.progress({
                                        type: "progress",
                                        total: o,
                                        loaded: n.loaded = a + u.size * (t.loaded / t.total) || 0
                                    }, c, l, d))
                                } : p,
                                complete: function(i) {
                                    z($, function(e) {
                                        n[e] = l[e]
                                    }), c && (u.total = u.total || u.size, u.loaded = u.total, i || (this.progress(u), f = !0, a += u.size, n.loaded = a), e.filecomplete(i, l, c, d)), setTimeout(function() {
                                        t.call(r)
                                    }, 0)
                                }
                            }));
                            n.abort = function(e) {
                                e || (i.length = 0), this.current = e, l.abort()
                            }, l.send(s)
                        })
                    } else {
                        var h = 200 == n.status || 201 == n.status || 204 == n.status;
                        e.complete(h ? !1 : n.statusText || "error", n, e), s = !0
                    }
                }, setTimeout(t, 0), n.append = function(e, a) {
                    e = K._getFilesDataArray([].concat(e)), z(e, function(e) {
                        o += e.size, n.files.push(e.file), a ? i.unshift(e) : i.push(e)
                    }), n.statusText = "", s && t.call(r)
                }, n.remove = function(e) {
                    for (var t, n = i.length; n--;) i[n].file == e && (t = i.splice(n, 1), o -= t.size);
                    return t
                }, n
            },
            _getFilesDataArray: function(e) {
                var t = [],
                    n = {};
                if (u(e)) {
                    var i = K.getFiles(e);
                    n[e.name || "file"] = null !== e.getAttribute("multiple") ? i : i[0]
                } else q(e) && u(e[0]) ? z(e, function(e) {
                    n[e.name || "file"] = K.getFiles(e)
                }) : n = e;
                return z(n, function r(e, n) {
                    q(e) ? z(e, function(e) {
                        r(e, n)
                    }) : e && (e.name || e.image) && t.push({
                        name: n,
                        file: e,
                        size: e.size,
                        total: e.size,
                        loaded: 0
                    })
                }), t.length || t.push({
                    file: {
                        name: K.expando
                    }
                }), t
            },
            _getFormData: function(e, t, n) {
                var i = t.file,
                    r = t.name,
                    o = i.name,
                    a = i.type,
                    s = K.support.transform && e.imageTransform,
                    l = new K.Form,
                    u = K.queue(function() {
                        n(l)
                    }),
                    c = s && f(s),
                    d = K.postNameConcat;
                z(e.data, function p(e, t) {
                        "object" == typeof e ? z(e, function(e, n) {
                            p(e, d(t, n))
                        }) : l.append(t, e)
                    }),
                    function h(t) {
                        t.image ? (u.inc(), t.toData(function(e, t) {
                            o = o || (new Date).getTime() + ".png", h(t), u.next()
                        })) : K.Image && s && (/^image/.test(t.type) || F.test(t.nodeName)) ? (u.inc(), c && (s = [s]), K.Image.transform(t, s, e.imageAutoOrientation, function(n, i) {
                            if (c && !n) E || K.flashEngine || (l.multipart = !0), l.append(r, i[0], o, s[0].type || a);
                            else {
                                var f = 0;
                                n || z(i, function(e, t) {
                                    E || K.flashEngine || (l.multipart = !0), s[t].postName || (f = 1), l.append(s[t].postName || d(r, t), e, o, s[t].type || a)
                                }), (n || e.imageOriginal) && l.append(d(r, f ? "original" : null), t, o, a)
                            }
                            u.next()
                        })) : o !== K.expando && l.append(r, t, o)
                    }(i), u.check()
            },
            reset: function(e, t) {
                var n, i;
                return C ? (i = C(e).clone(!0).insertBefore(e).val("")[0], t || C(e).remove()) : (n = e.parentNode, i = n.insertBefore(e.cloneNode(!0), e), i.value = "", t || n.removeChild(e), z(B[K.uid(e)], function(t, n) {
                    z(t, function(t) {
                        X(e, n, t), W(i, n, t)
                    })
                })), i
            },
            load: function(e, t) {
                var n = K.getXHR();
                return n ? (n.open("GET", e, !0), n.overrideMimeType && n.overrideMimeType("text/plain; charset=x-user-defined"), W(n, "progress", function(e) {
                    e.lengthComputable && t({
                        type: e.type,
                        loaded: e.loaded,
                        total: e.total
                    }, n)
                }), n.onreadystatechange = function() {
                    if (4 == n.readyState)
                        if (n.onreadystatechange = null, 200 == n.status) {
                            e = e.split("/");
                            var i = {
                                name: e[e.length - 1],
                                size: n.getResponseHeader("Content-Length"),
                                type: n.getResponseHeader("Content-Type")
                            };
                            i.dataURL = "data:" + i.type + ";base64," + K.encode64(n.responseBody || n.responseText), t({
                                type: "load",
                                result: i
                            }, n)
                        } else t({
                            type: "error"
                        }, n)
                }, n.send(null)) : t({
                    type: "error"
                }), n
            },
            encode64: function(e) {
                var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                    n = "",
                    i = 0;
                for ("string" != typeof e && (e = String(e)); i < e.length;) {
                    var r, o, a = 255 & e.charCodeAt(i++),
                        s = 255 & e.charCodeAt(i++),
                        l = 255 & e.charCodeAt(i++),
                        u = a >> 2,
                        c = (3 & a) << 4 | s >> 4;
                    isNaN(s) ? r = o = 64 : (r = (15 & s) << 2 | l >> 6, o = isNaN(l) ? 64 : 63 & l), n += t.charAt(u) + t.charAt(c) + t.charAt(r) + t.charAt(o)
                }
                return n
            }
        };
    K.addInfoReader(/^image/, function(e, t) {
        if (!e.__dimensions) {
            var n = e.__dimensions = K.defer();
            K.readAsImage(e, function(e) {
                var t = e.target;
                n.resolve("load" == e.type ? !1 : "error", {
                    width: t.width,
                    height: t.height
                }), t.src = K.EMPTY_PNG, t = null
            })
        }
        e.__dimensions.then(t)
    }), K.event.dnd = function(e, t, n) {
        var i, r;
        n || (n = t, t = K.F), w ? (W(e, "dragenter dragleave dragover", t.ff = t.ff || function(e) {
            for (var n = c(e).types, o = n && n.length, a = !1; o--;)
                if (~n[o].indexOf("File")) {
                    e[M](), r !== e.type && (r = e.type, "dragleave" != r && t.call(e[H], !0, e), a = !0);
                    break
                }
            a && (clearTimeout(i), i = setTimeout(function() {
                t.call(e[H], "dragleave" != r, e)
            }, 50))
        }), W(e, "drop", n.ff = n.ff || function(e) {
            e[M](), r = 0, t.call(e[H], !1, e), K.getDropFiles(e, function(t) {
                n.call(e[H], t, e)
            })
        })) : K.log("Drag'n'Drop -- not supported")
    }, K.event.dnd.off = function(e, t, n) {
        X(e, "dragenter dragleave dragover", t.ff), X(e, "drop", n.ff)
    }, C && !C.fn.dnd && (C.fn.dnd = function(e, t) {
        return this.each(function() {
            K.event.dnd(this, e, t)
        })
    }, C.fn.offdnd = function(e, t) {
        return this.each(function() {
            K.event.dnd.off(this, e, t)
        })
    }), e.FileAPI = U(K, e.FileAPI), K.log("FileAPI: " + K.version), K.log("protocol: " + e.location.protocol), K.log("doctype: [" + m.name + "] " + m.publicId + " " + m.systemId), z(h.getElementsByTagName("meta"), function(e) {
        /x-ua-compatible/i.test(e.getAttribute("http-equiv")) && K.log("meta.http-equiv: " + e.getAttribute("content"))
    }), K.flashUrl || (K.flashUrl = K.staticPath + "FileAPI.flash.swf"), K.flashImageUrl || (K.flashImageUrl = K.staticPath + "FileAPI.flash.image.swf"), K.flashWebcamUrl || (K.flashWebcamUrl = K.staticPath + "FileAPI.flash.camera.swf")
}(window, void 0),
function(e, t, n) {
    "use strict";

    function i(t) {
        if (t instanceof i) {
            var n = new i(t.file);
            return e.extend(n.matrix, t.matrix), n
        }
        return this instanceof i ? (this.file = t, this.size = t.size || 100, void(this.matrix = {
            sx: 0,
            sy: 0,
            sw: 0,
            sh: 0,
            dx: 0,
            dy: 0,
            dw: 0,
            dh: 0,
            resize: 0,
            deg: 0,
            quality: 1,
            filter: 0
        })) : new i(t)
    }
    var r = Math.min,
        o = Math.round,
        a = function() {
            return t.createElement("canvas")
        },
        s = !1,
        l = {
            8: 270,
            3: 180,
            6: 90,
            7: 270,
            4: 180,
            5: 90
        };
    try {
        s = a().toDataURL("image/png").indexOf("data:image/png") > -1
    } catch (u) {}
    i.prototype = {
        image: !0,
        constructor: i,
        set: function(t) {
            return e.extend(this.matrix, t), this
        },
        crop: function(e, t, i, r) {
            return i === n && (i = e, r = t, e = t = 0), this.set({
                sx: e,
                sy: t,
                sw: i,
                sh: r || i
            })
        },
        resize: function(e, t, n) {
            return /min|max|height|width/.test(t) && (n = t, t = e), this.set({
                dw: e,
                dh: t || e,
                resize: n
            })
        },
        preview: function(e, t) {
            return this.resize(e, t || e, "preview")
        },
        rotate: function(e) {
            return this.set({
                deg: e
            })
        },
        filter: function(e) {
            return this.set({
                filter: e
            })
        },
        overlay: function(e) {
            return this.set({
                overlay: e
            })
        },
        clone: function() {
            return new i(this)
        },
        _load: function(t, n) {
            var i = this;
            /img|video/i.test(t.nodeName) ? n.call(i, null, t) : e.readAsImage(t, function(e) {
                n.call(i, "load" != e.type, e.result)
            })
        },
        _apply: function(t, n) {
            var o, s = a(),
                l = this.getMatrix(t),
                u = s.getContext("2d"),
                c = t.videoWidth || t.width,
                f = t.videoHeight || t.height,
                d = l.deg,
                p = l.dw,
                h = l.dh,
                m = c,
                g = f,
                v = l.filter,
                y = t,
                b = l.overlay,
                w = e.queue(function() {
                    t.src = e.EMPTY_PNG, n(!1, s)
                }),
                x = e.renderImageToCanvas;
            for (d -= 360 * Math.floor(d / 360), t._type = this.file.type; l.multipass && r(m / p, g / h) > 2;) m = m / 2 + .5 | 0, g = g / 2 + .5 | 0, o = a(), o.width = m, o.height = g, y !== t ? (x(o, y, 0, 0, y.width, y.height, 0, 0, m, g), y = o) : (y = o, x(y, t, l.sx, l.sy, l.sw, l.sh, 0, 0, m, g), l.sx = l.sy = l.sw = l.sh = 0);
            s.width = d % 180 ? h : p, s.height = d % 180 ? p : h, s.type = l.type, s.quality = l.quality, u.rotate(d * Math.PI / 180), x(u.canvas, y, l.sx, l.sy, l.sw || y.width, l.sh || y.height, 180 == d || 270 == d ? -p : 0, 90 == d || 180 == d ? -h : 0, p, h), p = s.width, h = s.height, b && e.each([].concat(b), function(t) {
                w.inc();
                var n = new window.Image,
                    i = function() {
                        var r = 0 | t.x,
                            o = 0 | t.y,
                            a = t.w || n.width,
                            s = t.h || n.height,
                            l = t.rel;
                        r = 1 == l || 4 == l || 7 == l ? (p - a + r) / 2 : 2 == l || 5 == l || 8 == l ? p - (a + r) : r, o = 3 == l || 4 == l || 5 == l ? (h - s + o) / 2 : l >= 6 ? h - (s + o) : o, e.event.off(n, "error load abort", i);
                        try {
                            u.globalAlpha = t.opacity || 1, u.drawImage(n, r, o, a, s)
                        } catch (c) {}
                        w.next()
                    };
                e.event.on(n, "error load abort", i), n.src = t.src, n.complete && i()
            }), v && (w.inc(), i.applyFilter(s, v, w.next)), w.check()
        },
        getMatrix: function(t) {
            var n = e.extend({}, this.matrix),
                i = n.sw = n.sw || t.videoWidth || t.naturalWidth || t.width,
                a = n.sh = n.sh || t.videoHeight || t.naturalHeight || t.height,
                s = n.dw = n.dw || i,
                l = n.dh = n.dh || a,
                u = i / a,
                c = s / l,
                f = n.resize;
            if ("preview" == f) {
                if (s != i || l != a) {
                    var d, p;
                    c >= u ? (d = i, p = d / c) : (p = a, d = p * c), (d != i || p != a) && (n.sx = ~~((i - d) / 2), n.sy = ~~((a - p) / 2), i = d, a = p)
                }
            } else "height" == f ? s = l * u : "width" == f ? l = s / u : f && (i > s || a > l ? "min" == f ? (s = o(c > u ? r(i, s) : l * u), l = o(c > u ? s / u : r(a, l))) : (s = o(u >= c ? r(i, s) : l * u), l = o(u >= c ? s / u : r(a, l))) : (s = i, l = a));
            return n.sw = i, n.sh = a, n.dw = s, n.dh = l, n.multipass = e.multiPassResize, n
        },
        _trans: function(t) {
            this._load(this.file, function(n, i) {
                if (n) t(n);
                else try {
                    this._apply(i, t)
                } catch (n) {
                    e.log("[err] FileAPI.Image.fn._apply:", n), t(n)
                }
            })
        },
        get: function(t) {
            if (e.support.transform) {
                var n = this,
                    i = n.matrix;
                "auto" == i.deg ? e.getInfo(n.file, function(e, r) {
                    i.deg = l[r && r.exif && r.exif.Orientation] || 0, n._trans(t)
                }) : n._trans(t)
            } else t("not_support_transform");
            return this
        },
        toData: function(e) {
            return this.get(e)
        }
    }, i.exifOrientation = l, i.transform = function(t, r, o, a) {
        function s(s, l) {
            var u = {},
                c = e.queue(function(e) {
                    a(e, u)
                });
            s ? c.fail() : e.each(r, function(e, r) {
                if (!c.isFail()) {
                    var a = new i(l.nodeType ? l : t),
                        s = "function" == typeof e;
                    if (s ? e(l, a) : e.width ? a[e.preview ? "preview" : "resize"](e.width, e.height, e.strategy) : e.maxWidth && (l.width > e.maxWidth || l.height > e.maxHeight) && a.resize(e.maxWidth, e.maxHeight, "max"), e.crop) {
                        var f = e.crop;
                        a.crop(0 | f.x, 0 | f.y, f.w || f.width, f.h || f.height)
                    }
                    e.rotate === n && o && (e.rotate = "auto"), a.set({
                        type: a.matrix.type || e.type || t.type || "image/png"
                    }), s || a.set({
                        deg: e.rotate,
                        overlay: e.overlay,
                        filter: e.filter,
                        quality: e.quality || 1
                    }), c.inc(), a.toData(function(e, t) {
                        e ? c.fail() : (u[r] = t, c.next())
                    })
                }
            })
        }
        t.width ? s(!1, t) : e.getInfo(t, s)
    }, e.each(["TOP", "CENTER", "BOTTOM"], function(t, n) {
        e.each(["LEFT", "CENTER", "RIGHT"], function(e, r) {
            i[t + "_" + e] = 3 * n + r, i[e + "_" + t] = 3 * n + r
        })
    }), i.toCanvas = function(e) {
        var n = t.createElement("canvas");
        return n.width = e.videoWidth || e.width, n.height = e.videoHeight || e.height, n.getContext("2d").drawImage(e, 0, 0), n
    }, i.fromDataURL = function(t, n, i) {
        var r = e.newImage(t);
        e.extend(r, n), i(r)
    }, i.applyFilter = function(t, n, r) {
        "function" == typeof n ? n(t, r) : window.Caman && window.Caman("IMG" == t.tagName ? i.toCanvas(t) : t, function() {
            "string" == typeof n ? this[n]() : e.each(n, function(e, t) {
                this[t](e)
            }, this), this.render(r)
        })
    }, e.renderImageToCanvas = function(t, n, i, r, o, a, s, l, u, c) {
        try {
            return t.getContext("2d").drawImage(n, i, r, o, a, s, l, u, c)
        } catch (f) {
            throw e.log("renderImageToCanvas failed"), f
        }
    }, e.support.canvas = e.support.transform = s, e.Image = i
}(FileAPI, document),
function(e) {
    "use strict";
    e(FileAPI)
}(function(e) {
    "use strict";
    if (window.navigator && window.navigator.platform && /iP(hone|od|ad)/.test(window.navigator.platform)) {
        var t = e.renderImageToCanvas;
        e.detectSubsampling = function(e) {
            var t, n;
            return e.width * e.height > 1048576 ? (t = document.createElement("canvas"), t.width = t.height = 1, n = t.getContext("2d"), n.drawImage(e, -e.width + 1, 0), 0 === n.getImageData(0, 0, 1, 1).data[3]) : !1
        }, e.detectVerticalSquash = function(e, t) {
            var n, i, r, o, a, s = e.naturalHeight || e.height,
                l = document.createElement("canvas"),
                u = l.getContext("2d");
            for (t && (s /= 2), l.width = 1, l.height = s, u.drawImage(e, 0, 0), n = u.getImageData(0, 0, 1, s).data, i = 0, r = s, o = s; o > i;) a = n[4 * (o - 1) + 3], 0 === a ? r = o : i = o, o = r + i >> 1;
            return o / s || 1
        }, e.renderImageToCanvas = function(n, i, r, o, a, s, l, u, c, f) {
            if ("image/jpeg" === i._type) {
                var d, p, h, m, g = n.getContext("2d"),
                    v = document.createElement("canvas"),
                    y = 1024,
                    b = v.getContext("2d");
                if (v.width = y, v.height = y, g.save(), d = e.detectSubsampling(i), d && (r /= 2, o /= 2, a /= 2, s /= 2), p = e.detectVerticalSquash(i, d), d || 1 !== p) {
                    for (o *= p, c = Math.ceil(y * c / a), f = Math.ceil(y * f / s / p), u = 0, m = 0; s > m;) {
                        for (l = 0, h = 0; a > h;) b.clearRect(0, 0, y, y), b.drawImage(i, r, o, a, s, -h, -m, a, s), g.drawImage(v, 0, 0, y, y, l, u, c, f), h += y, l += c;
                        m += y, u += f
                    }
                    return g.restore(), n
                }
            }
            return t(n, i, r, o, a, s, l, u, c, f)
        }
    }
}),
function(e, t) {
    "use strict";

    function n(t, n, i) {
        var r = t.blob,
            o = t.file;
        if (o) {
            if (!r.toDataURL) return void e.readAsBinaryString(r, function(e) {
                "load" == e.type && n(t, e.result)
            });
            var a = {
                    "image/jpeg": ".jpe?g",
                    "image/png": ".png"
                },
                s = a[t.type] ? t.type : "image/png",
                l = a[s] || ".png",
                u = r.quality || 1;
            o.match(new RegExp(l + "$", "i")) || (o += l.replace("?", "")), t.file = o, t.type = s, !i && r.toBlob ? r.toBlob(function(e) {
                n(t, e)
            }, s, u) : n(t, e.toBinaryString(r.toDataURL(s, u)))
        } else n(t, r)
    }
    var i = t.document,
        r = t.FormData,
        o = function() {
            this.items = []
        },
        a = t.encodeURIComponent;
    o.prototype = {
        append: function(e, t, n, i) {
            this.items.push({
                name: e,
                blob: t && t.blob || (void 0 == t ? "" : t),
                file: t && (n || t.name),
                type: t && (i || t.type)
            })
        },
        each: function(e) {
            for (var t = 0, n = this.items.length; n > t; t++) e.call(this, this.items[t])
        },
        toData: function(t, n) {
            n._chunked = e.support.chunked && n.chunkSize > 0 && 1 == e.filter(this.items, function(e) {
                return e.file
            }).length, e.support.html5 ? e.formData && !this.multipart && r ? n._chunked ? (e.log("FileAPI.Form.toPlainData"), this.toPlainData(t)) : (e.log("FileAPI.Form.toFormData"), this.toFormData(t)) : (e.log("FileAPI.Form.toMultipartData"), this.toMultipartData(t)) : (e.log("FileAPI.Form.toHtmlData"), this.toHtmlData(t))
        },
        _to: function(t, n, i, r) {
            var o = e.queue(function() {
                n(t)
            });
            this.each(function(e) {
                i(e, t, o, r)
            }), o.check()
        },
        toHtmlData: function(t) {
            this._to(i.createDocumentFragment(), t, function(t, n) {
                var r, o = t.blob;
                t.file ? (e.reset(o, !0), o.name = t.name, o.disabled = !1, n.appendChild(o)) : (r = i.createElement("input"), r.name = t.name, r.type = "hidden", r.value = o, n.appendChild(r))
            })
        },
        toPlainData: function(e) {
            this._to({}, e, function(e, t, i) {
                e.file && (t.type = e.file), e.blob.toBlob ? (i.inc(), n(e, function(e, n) {
                    t.name = e.name, t.file = n, t.size = n.length, t.type = e.type, i.next()
                })) : e.file ? (t.name = e.blob.name, t.file = e.blob, t.size = e.blob.size, t.type = e.type) : (t.params || (t.params = []), t.params.push(a(e.name) + "=" + a(e.blob))), t.start = -1, t.end = t.file && t.file.FileAPIReadPosition || -1, t.retry = 0
            })
        },
        toFormData: function(e) {
            this._to(new r, e, function(e, t, i) {
                e.blob && e.blob.toBlob ? (i.inc(), n(e, function(e, n) {
                    t.append(e.name, n, e.file), i.next()
                })) : e.file ? t.append(e.name, e.blob, e.file) : t.append(e.name, e.blob), e.file && t.append("_" + e.name, e.file)
            })
        },
        toMultipartData: function(t) {
            this._to([], t, function(e, t, i, r) {
                i.inc(), n(e, function(e, n) {
                    t.push("--_" + r + ('\r\nContent-Disposition: form-data; name="' + e.name + '"' + (e.file ? '; filename="' + a(e.file) + '"' : "") + (e.file ? "\r\nContent-Type: " + (e.type || "application/octet-stream") : "") + "\r\n\r\n" + (e.file ? n : a(n)) + "\r\n")), i.next()
                }, !0)
            }, e.expando)
        }
    }, e.Form = o
}(FileAPI, window),
function(e, t) {
    "use strict";
    var n = function() {},
        i = e.document,
        r = function(e) {
            this.uid = t.uid(), this.xhr = {
                abort: n,
                getResponseHeader: n,
                getAllResponseHeaders: n
            }, this.options = e
        },
        o = {
            "": 1,
            XML: 1,
            Text: 1,
            Body: 1
        };
    r.prototype = {
        status: 0,
        statusText: "",
        constructor: r,
        getResponseHeader: function(e) {
            return this.xhr.getResponseHeader(e)
        },
        getAllResponseHeaders: function() {
            return this.xhr.getAllResponseHeaders() || {}
        },
        end: function(i, r) {
            var o = this,
                a = o.options;
            o.end = o.abort = n, o.status = i, r && (o.statusText = r), t.log("xhr.end:", i, r), a.complete(200 == i || 201 == i ? !1 : o.statusText || "unknown", o), o.xhr && o.xhr.node && setTimeout(function() {
                var t = o.xhr.node;
                try {
                    t.parentNode.removeChild(t)
                } catch (n) {}
                try {
                    delete e[o.uid]
                } catch (n) {}
                e[o.uid] = o.xhr.node = null
            }, 9)
        },
        abort: function() {
            this.end(0, "abort"), this.xhr && (this.xhr.aborted = !0, this.xhr.abort())
        },
        send: function(e) {
            var t = this,
                n = this.options;
            e.toData(function(e) {
                n.upload(n, t), t._send.call(t, n, e)
            }, n)
        },
        _send: function(n, r) {
            var a, s = this,
                l = s.uid,
                u = s.uid + "Load",
                c = n.url;
            if (t.log("XHR._send:", r), n.cache || (c += (~c.indexOf("?") ? "&" : "?") + t.uid()), r.nodeName) {
                var f = n.jsonp;
                c = c.replace(/([a-z]+)=(\?)/i, "$1=" + l), n.upload(n, s);
                var d = function(e) {
                        if (~c.indexOf(e.origin)) try {
                            var n = t.parseJSON(e.data);
                            n.id == l && p(n.status, n.statusText, n.response)
                        } catch (i) {
                            p(0, i.message)
                        }
                    },
                    p = e[l] = function(n, i, r) {
                        s.readyState = 4, s.responseText = r, s.end(n, i), t.event.off(e, "message", d), e[l] = a = m = e[u] = null
                    };
                s.xhr.abort = function() {
                    try {
                        m.stop ? m.stop() : m.contentWindow.stop ? m.contentWindow.stop() : m.contentWindow.document.execCommand("Stop")
                    } catch (e) {}
                    p(0, "abort")
                }, t.event.on(e, "message", d), e[u] = function() {
                    try {
                        var e = m.contentWindow,
                            n = e.document,
                            i = e.result || t.parseJSON(n.body.innerHTML);
                        p(i.status, i.statusText, i.response)
                    } catch (r) {
                        t.log("[transport.onload]", r)
                    }
                }, a = i.createElement("div"), a.innerHTML = '<form target="' + l + '" action="' + c + '" method="POST" enctype="multipart/form-data" style="position: absolute; top: -1000px; overflow: hidden; width: 1px; height: 1px;"><iframe name="' + l + '" src="javascript:false;" onload="' + u + '()"></iframe>' + (f && n.url.indexOf("=?") < 0 ? '<input value="' + l + '" name="' + f + '" type="hidden"/>' : "") + "</form>";
                var h = a.getElementsByTagName("form")[0],
                    m = a.getElementsByTagName("iframe")[0];
                h.appendChild(r), t.log(h.parentNode.innerHTML), i.body.appendChild(a), s.xhr.node = a, s.readyState = 2, h.submit(), h = null
            } else {
                if (c = c.replace(/([a-z]+)=(\?)&?/i, ""), this.xhr && this.xhr.aborted) return void t.log("Error: already aborted");
                if (a = s.xhr = t.getXHR(), r.params && (c += (c.indexOf("?") < 0 ? "?" : "&") + r.params.join("&")), a.open("POST", c, !0), t.withCredentials && (a.withCredentials = "true"), n.headers && n.headers["X-Requested-With"] || a.setRequestHeader("X-Requested-With", "XMLHttpRequest"), t.each(n.headers, function(e, t) {
                        a.setRequestHeader(t, e)
                    }), n._chunked) {
                    a.upload && a.upload.addEventListener("progress", t.throttle(function(e) {
                        r.retry || n.progress({
                            type: e.type,
                            total: r.size,
                            loaded: r.start + e.loaded,
                            totalSize: r.size
                        }, s, n)
                    }, 100), !1), a.onreadystatechange = function() {
                        var e = parseInt(a.getResponseHeader("X-Last-Known-Byte"), 10);
                        if (s.status = a.status, s.statusText = a.statusText, s.readyState = a.readyState, 4 == a.readyState) {
                            for (var i in o) s["response" + i] = a["response" + i];
                            if (a.onreadystatechange = null, !a.status || a.status - 201 > 0)
                                if (t.log("Error: " + a.status), (!a.status && !a.aborted || 500 == a.status || 416 == a.status) && ++r.retry <= n.chunkUploadRetry) {
                                    var l = a.status ? 0 : t.chunkNetworkDownRetryTimeout;
                                    n.pause(r.file, n), t.log("X-Last-Known-Byte: " + e), e ? r.end = e : (r.end = r.start - 1, 416 == a.status && (r.end = r.end - n.chunkSize)), setTimeout(function() {
                                        s._send(n, r)
                                    }, l)
                                } else s.end(a.status);
                            else r.retry = 0, r.end == r.size - 1 ? s.end(a.status) : (t.log("X-Last-Known-Byte: " + e), e && (r.end = e), r.file.FileAPIReadPosition = r.end, setTimeout(function() {
                                s._send(n, r)
                            }, 0));
                            a = null
                        }
                    }, r.start = r.end + 1, r.end = Math.max(Math.min(r.start + n.chunkSize, r.size) - 1, r.start);
                    var g = r.file,
                        v = (g.slice || g.mozSlice || g.webkitSlice).call(g, r.start, r.end + 1);
                    r.size && !v.size ? setTimeout(function() {
                        s.end(-1)
                    }) : (a.setRequestHeader("Content-Range", "bytes " + r.start + "-" + r.end + "/" + r.size), a.setRequestHeader("Content-Disposition", "attachment; filename=" + encodeURIComponent(r.name)), a.setRequestHeader("Content-Type", r.type || "application/octet-stream"), a.send(v)), g = v = null
                } else if (a.upload && a.upload.addEventListener("progress", t.throttle(function(e) {
                        n.progress(e, s, n)
                    }, 100), !1), a.onreadystatechange = function() {
                        if (s.status = a.status, s.statusText = a.statusText, s.readyState = a.readyState, 4 == a.readyState) {
                            for (var e in o) s["response" + e] = a["response" + e];
                            if (a.onreadystatechange = null, !a.status || a.status > 201)
                                if (t.log("Error: " + a.status), (!a.status && !a.aborted || 500 == a.status) && (n.retry || 0) < n.uploadRetry) {
                                    n.retry = (n.retry || 0) + 1;
                                    var i = t.networkDownRetryTimeout;
                                    n.pause(n.file, n), setTimeout(function() {
                                        s._send(n, r)
                                    }, i)
                                } else s.end(a.status);
                            else s.end(a.status);
                            a = null
                        }
                    }, t.isArray(r)) {
                    a.setRequestHeader("Content-Type", "multipart/form-data; boundary=_" + t.expando);
                    var y = r.join("") + "--_" + t.expando + "--";
                    if (a.sendAsBinary) a.sendAsBinary(y);
                    else {
                        var b = Array.prototype.map.call(y, function(e) {
                            return 255 & e.charCodeAt(0)
                        });
                        a.send(new Uint8Array(b).buffer)
                    }
                } else a.send(r)
            }
        }
    }, t.XHR = r
}(window, FileAPI),
function(e, t) {
    "use strict";

    function n(e) {
        return e >= 0 ? e + "px" : e
    }

    function i(e) {
        var t, n = o.createElement("canvas"),
            i = !1;
        try {
            t = n.getContext("2d"), t.drawImage(e, 0, 0, 1, 1), i = 255 != t.getImageData(0, 0, 1, 1).data[4]
        } catch (r) {}
        return i
    }
    var r = e.URL || e.webkitURL,
        o = e.document,
        a = e.navigator,
        s = a.getUserMedia || a.webkitGetUserMedia || a.mozGetUserMedia || a.msGetUserMedia,
        l = !!s;
    t.support.media = l;
    var u = function(e) {
        this.video = e
    };
    u.prototype = {
        isActive: function() {
            return !!this._active
        },
        start: function(e) {
            var t, n, o = this,
                l = o.video,
                u = function(i) {
                    o._active = !i, clearTimeout(n), clearTimeout(t), e && e(i, o)
                };
            s.call(a, {
                video: !0
            }, function(e) {
                o.stream = e, l.src = r.createObjectURL(e), t = setInterval(function() {
                    i(l) && u(null)
                }, 1e3), n = setTimeout(function() {
                    u("timeout")
                }, 5e3), l.play()
            }, u)
        },
        stop: function() {
            try {
                this._active = !1, this.video.pause(), this.stream.stop()
            } catch (e) {}
        },
        shot: function() {
            return new c(this.video)
        }
    }, u.get = function(e) {
        return new u(e.firstChild)
    }, u.publish = function(i, r, a) {
        "function" == typeof r && (a = r, r = {}), r = t.extend({}, {
            width: "100%",
            height: "100%",
            start: !0
        }, r), i.jquery && (i = i[0]);
        var s = function(e) {
            if (e) a(e);
            else {
                var t = u.get(i);
                r.start ? t.start(a) : a(null, t)
            }
        };
        if (i.style.width = n(r.width), i.style.height = n(r.height), t.html5 && l) {
            var c = o.createElement("video");
            c.style.width = n(r.width), c.style.height = n(r.height), e.jQuery ? jQuery(i).empty() : i.innerHTML = "", i.appendChild(c), s()
        } else u.fallback(i, r, s)
    }, u.fallback = function(e, t, n) {
        n("not_support_camera")
    };
    var c = function(e) {
        var n = e.nodeName ? t.Image.toCanvas(e) : e,
            i = t.Image(n);
        return i.type = "image/png", i.width = n.width, i.height = n.height, i.size = n.width * n.height * 4, i
    };
    u.Shot = c, t.Camera = u
}(window, FileAPI),
function(e, t, n) {
    "use strict";
    var i = e.document,
        r = e.location,
        o = e.navigator,
        a = n.each;
    n.support.flash = function() {
        var t = o.mimeTypes,
            i = !1;
        if (o.plugins && "object" == typeof o.plugins["Shockwave Flash"]) i = o.plugins["Shockwave Flash"].description && !(t && t["application/x-shockwave-flash"] && !t["application/x-shockwave-flash"].enabledPlugin);
        else try {
            i = !(!e.ActiveXObject || !new ActiveXObject("ShockwaveFlash.ShockwaveFlash"))
        } catch (a) {
            n.log("Flash -- does not supported.")
        }
        return i && /^file:/i.test(r) && n.log("[warn] Flash does not work on `file:` protocol."), i
    }(), n.support.flash && (0 || !n.html5 || !n.support.html5 || n.cors && !n.support.cors || n.media && !n.support.media) && function() {
        function s(e) {
            return ('<object id="#id#" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="' + (e.width || "100%") + '" height="' + (e.height || "100%") + '"><param name="movie" value="#src#" /><param name="flashvars" value="#flashvars#" /><param name="swliveconnect" value="true" /><param name="allowscriptaccess" value="always" /><param name="allownetworking" value="all" /><param name="menu" value="false" /><param name="wmode" value="#wmode#" /><embed flashvars="#flashvars#" swliveconnect="true" allownetworking="all" allowscriptaccess="always" name="#id#" src="#src#" width="' + (e.width || "100%") + '" height="' + (e.height || "100%") + '" menu="false" wmode="transparent" type="application/x-shockwave-flash"></embed></object>').replace(/#(\w+)#/gi, function(t, n) {
                return e[n]
            })
        }

        function l(e, t) {
            if (e && e.style) {
                var n, i;
                for (n in t) {
                    i = t[n], "number" == typeof i && (i += "px");
                    try {
                        e.style[n] = i
                    } catch (r) {}
                }
            }
        }

        function u(e, t) {
            a(t, function(t, n) {
                var i = e[n];
                e[n] = function() {
                    return this.parent = i, t.apply(this, arguments)
                }
            })
        }

        function c(e) {
            return e && !e.flashId
        }

        function f(e) {
            var t = e.wid = n.uid();
            return x._fn[t] = e, "FileAPI.Flash._fn." + t
        }

        function d(e) {
            try {
                x._fn[e.wid] = null, delete x._fn[e.wid]
            } catch (t) {}
        }

        function p(e, t) {
            if (!w.test(e)) {
                if (/^\.\//.test(e) || "/" != e.charAt(0)) {
                    var n = r.pathname;
                    n = n.substr(0, n.lastIndexOf("/")), e = (n + "/" + e).replace("/./", "/")
                }
                "//" != e.substr(0, 2) && (e = "//" + r.host + e), w.test(e) || (e = r.protocol + e)
            }
            return t && (e += (/\?/.test(e) ? "&" : "?") + t), e
        }

        function h(e, t, r) {
            function o() {
                try {
                    var e = x.get(u);
                    e.setImage(t)
                } catch (i) {
                    n.log('[err] FlashAPI.Preview.setImage -- can not set "base64":', i)
                }
            }
            var a, u = n.uid(),
                c = i.createElement("div"),
                h = 10;
            for (a in e) c.setAttribute(a, e[a]), c[a] = e[a];
            l(c, e), e.width = "100%", e.height = "100%", c.innerHTML = s(n.extend({
                id: u,
                src: p(n.flashImageUrl, "r=" + n.uid()),
                wmode: "opaque",
                flashvars: "scale=" + e.scale + "&callback=" + f(function m() {
                    return d(m), --h > 0 && o(), !0
                })
            }, e)), r(!1, c), c = null
        }

        function m(e) {
            return {
                id: e.id,
                name: e.name,
                matrix: e.matrix,
                flashId: e.flashId
            }
        }

        function g(t) {
            var n = t.getBoundingClientRect(),
                r = i.body,
                o = (t && t.ownerDocument).documentElement;
            return {
                top: n.top + (e.pageYOffset || o.scrollTop) - (o.clientTop || r.clientTop || 0),
                left: n.left + (e.pageXOffset || o.scrollLeft) - (o.clientLeft || r.clientLeft || 0),
                width: n.right - n.left,
                height: n.bottom - n.top
            }
        }
        var v = n.uid(),
            y = 0,
            b = {},
            w = /^https?:/i,
            x = {
                _fn: {},
                init: function() {
                    var e = i.body && i.body.firstChild;
                    if (e)
                        do
                            if (1 == e.nodeType) {
                                n.log("FlashAPI.state: awaiting");
                                var t = i.createElement("div");
                                return t.id = "_" + v, l(t, {
                                    top: 1,
                                    right: 1,
                                    width: 5,
                                    height: 5,
                                    position: "absolute",
                                    zIndex: 1e6 + ""
                                }), e.parentNode.insertBefore(t, e), void x.publish(t, v)
                            }
                    while (e = e.nextSibling);
                    10 > y && setTimeout(x.init, 50 * ++y)
                },
                publish: function(e, t, i) {
                    i = i || {}, e.innerHTML = s({
                        id: t,
                        src: p(n.flashUrl, "r=" + n.version),
                        wmode: i.camera ? "" : "transparent",
                        flashvars: "callback=" + (i.onEvent || "FileAPI.Flash.onEvent") + "&flashId=" + t + "&storeKey=" + o.userAgent.match(/\d/gi).join("") + "_" + n.version + (x.isReady || (n.pingUrl ? "&ping=" + n.pingUrl : "")) + "&timeout=" + n.flashAbortTimeout + (i.camera ? "&useCamera=" + p(n.flashWebcamUrl) : "") + "&debug=" + (n.debug ? "1" : "")
                    }, i)
                },
                ready: function() {
                    n.log("FlashAPI.state: ready"), x.ready = n.F, x.isReady = !0, x.patch(), x.patchCamera && x.patchCamera(), n.event.on(i, "mouseover", x.mouseover), n.event.on(i, "click", function(e) {
                        x.mouseover(e) && (e.preventDefault ? e.preventDefault() : e.returnValue = !0)
                    })
                },
                getEl: function() {
                    return i.getElementById("_" + v)
                },
                getWrapper: function(e) {
                    do
                        if (/js-fileapi-wrapper/.test(e.className)) return e;
                    while ((e = e.parentNode) && e !== i.body)
                },
                mouseover: function(e) {
                    var t = n.event.fix(e).target;
                    if (/input/i.test(t.nodeName) && "file" == t.type && !t.disabled) {
                        var r = t.getAttribute(v),
                            o = x.getWrapper(t);
                        if (n.multiFlash) {
                            if ("i" == r || "r" == r) return !1;
                            if ("p" != r) {
                                t.setAttribute(v, "i");
                                var a = i.createElement("div");
                                if (!o) return void n.log("[err] FlashAPI.mouseover: js-fileapi-wrapper not found");
                                l(a, {
                                    top: 0,
                                    left: 0,
                                    width: t.offsetWidth,
                                    height: t.offsetHeight,
                                    zIndex: 1e6 + "",
                                    position: "absolute"
                                }), o.appendChild(a), x.publish(a, n.uid()), t.setAttribute(v, "p")
                            }
                            return !0
                        }
                        if (o) {
                            var s = g(o);
                            l(x.getEl(), s), x.curInp = t
                        }
                    } else /object|embed/i.test(t.nodeName) || l(x.getEl(), {
                        top: 1,
                        left: 1,
                        width: 5,
                        height: 5
                    })
                },
                onEvent: function(e) {
                    var t = e.type;
                    if ("ready" == t) {
                        try {
                            x.getInput(e.flashId).setAttribute(v, "r")
                        } catch (i) {}
                        return x.ready(), setTimeout(function() {
                            x.mouseenter(e)
                        }, 50), !0
                    }
                    "ping" === t ? n.log("(flash -> js).ping:", [e.status, e.savedStatus], e.error) : "log" === t ? n.log("(flash -> js).log:", e.target) : t in x && setTimeout(function() {
                        n.log("FlashAPI.event." + e.type + ":", e), x[t](e)
                    }, 1)
                },
                mouseenter: function(e) {
                    var t = x.getInput(e.flashId);
                    if (t) {
                        x.cmd(e, "multiple", null != t.getAttribute("multiple"));
                        var i = [],
                            r = {};
                        a((t.getAttribute("accept") || "").split(/,\s*/), function(e) {
                            n.accept[e] && a(n.accept[e].split(" "), function(e) {
                                r[e] = 1
                            })
                        }), a(r, function(e, t) {
                            i.push(t)
                        }), x.cmd(e, "accept", i.length ? i.join(",") + "," + i.join(",").toUpperCase() : "*")
                    }
                },
                get: function(t) {
                    return i[t] || e[t] || i.embeds[t]
                },
                getInput: function(e) {
                    if (!n.multiFlash) return x.curInp;
                    try {
                        var t = x.getWrapper(x.get(e));
                        if (t) return t.getElementsByTagName("input")[0]
                    } catch (i) {
                        n.log('[err] Can not find "input" by flashId:', e, i)
                    }
                },
                select: function(e) {
                    var r, o = x.getInput(e.flashId),
                        s = n.uid(o),
                        l = e.target.files;
                    a(l, function(e) {
                        n.checkFileObj(e)
                    }), b[s] = l, i.createEvent ? (r = i.createEvent("Event"), r.files = l, r.initEvent("change", !0, !0), o.dispatchEvent(r)) : t ? t(o).trigger({
                        type: "change",
                        files: l
                    }) : (r = i.createEventObject(), r.files = l, o.fireEvent("onchange", r))
                },
                cmd: function(e, t, i, r) {
                    try {
                        return n.log("(js -> flash)." + t + ":", i), x.get(e.flashId || e).cmd(t, i)
                    } catch (o) {
                        n.log("(js -> flash).onError:", o), r || setTimeout(function() {
                            x.cmd(e, t, i, !0)
                        }, 50)
                    }
                },
                patch: function() {
                    n.flashEngine = !0, u(n, {
                        getFiles: function(e, t, i) {
                            if (i) return n.filterFiles(n.getFiles(e), t, i), null;
                            var r = n.isArray(e) ? e : b[n.uid(e.target || e.srcElement || e)];
                            return r ? (t && (t = n.getFilesFilter(t), r = n.filter(r, function(e) {
                                return t.test(e.name)
                            })), r) : this.parent.apply(this, arguments)
                        },
                        getInfo: function(e, t) {
                            if (c(e)) this.parent.apply(this, arguments);
                            else if (e.isShot) t(null, e.info = {
                                width: e.width,
                                height: e.height
                            });
                            else {
                                if (!e.__info) {
                                    var i = e.__info = n.defer();
                                    x.cmd(e, "getFileInfo", {
                                        id: e.id,
                                        callback: f(function r(t, n) {
                                            d(r), i.resolve(t, e.info = n)
                                        })
                                    })
                                }
                                e.__info.then(t)
                            }
                        }
                    }), n.support.transform = !0, n.Image && u(n.Image.prototype, {
                        get: function(e, t) {
                            return this.set({
                                scaleMode: t || "noScale"
                            }), this.parent(e)
                        },
                        _load: function(e, t) {
                            if (n.log("FlashAPI.Image._load:", e), c(e)) this.parent.apply(this, arguments);
                            else {
                                var i = this;
                                n.getInfo(e, function(n) {
                                    t.call(i, n, e)
                                })
                            }
                        },
                        _apply: function(e, t) {
                            if (n.log("FlashAPI.Image._apply:", e), c(e)) this.parent.apply(this, arguments);
                            else {
                                var i = this.getMatrix(e.info),
                                    r = t;
                                x.cmd(e, "imageTransform", {
                                    id: e.id,
                                    matrix: i,
                                    callback: f(function o(a, s) {
                                        n.log("FlashAPI.Image._apply.callback:", a), d(o), a ? r(a) : n.support.html5 || n.support.dataURI && !(s.length > 3e4) ? (i.filter && (r = function(e, r) {
                                            e ? t(e) : n.Image.applyFilter(r, i.filter, function() {
                                                t(e, this.canvas)
                                            })
                                        }), n.newImage("data:" + e.type + ";base64," + s, r)) : h({
                                            width: i.deg % 180 ? i.dh : i.dw,
                                            height: i.deg % 180 ? i.dw : i.dh,
                                            scale: i.scaleMode
                                        }, s, r)
                                    })
                                })
                            }
                        },
                        toData: function(e) {
                            var t = this.file,
                                i = t.info,
                                r = this.getMatrix(i);
                            n.log("FlashAPI.Image.toData"), c(t) ? this.parent.apply(this, arguments) : ("auto" == r.deg && (r.deg = n.Image.exifOrientation[i && i.exif && i.exif.Orientation] || 0), e.call(this, !t.info, {
                                id: t.id,
                                flashId: t.flashId,
                                name: t.name,
                                type: t.type,
                                matrix: r
                            }))
                        }
                    }), n.Image && u(n.Image, {
                        fromDataURL: function(e, t, i) {
                            !n.support.dataURI || e.length > 3e4 ? h(n.extend({
                                scale: "exactFit"
                            }, t), e.replace(/^data:[^,]+,/, ""), function(e, t) {
                                i(t)
                            }) : this.parent(e, t, i)
                        }
                    }), u(n.Form.prototype, {
                        toData: function(e) {
                            for (var t = this.items, i = t.length; i--;)
                                if (t[i].file && c(t[i].blob)) return this.parent.apply(this, arguments);
                            n.log("FlashAPI.Form.toData"), e(t)
                        }
                    }), u(n.XHR.prototype, {
                        _send: function(e, t) {
                            if (t.nodeName || t.append && n.support.html5 || n.isArray(t) && "string" == typeof t[0]) return this.parent.apply(this, arguments);
                            var i, r, o = {},
                                s = {},
                                l = this;
                            if (a(t, function(e) {
                                    e.file ? (s[e.name] = e = m(e.blob), r = e.id, i = e.flashId) : o[e.name] = e.blob
                                }), r || (i = v), !i) return n.log("[err] FlashAPI._send: flashId -- undefined"), this.parent.apply(this, arguments);
                            n.log("FlashAPI.XHR._send: " + i + " -> " + r), l.xhr = {
                                headers: {},
                                abort: function() {
                                    x.cmd(i, "abort", {
                                        id: r
                                    })
                                },
                                getResponseHeader: function(e) {
                                    return this.headers[e]
                                },
                                getAllResponseHeaders: function() {
                                    return this.headers
                                }
                            };
                            var u = n.queue(function() {
                                x.cmd(i, "upload", {
                                    url: p(e.url.replace(/([a-z]+)=(\?)&?/i, "")),
                                    data: o,
                                    files: r ? s : null,
                                    headers: e.headers || {},
                                    callback: f(function t(i) {
                                        var r = i.type,
                                            o = i.result;
                                        n.log("FlashAPI.upload." + r), "progress" == r ? (i.loaded = Math.min(i.loaded, i.total), i.lengthComputable = !0, e.progress(i)) : "complete" == r ? (d(t), "string" == typeof o && (l.responseText = o.replace(/%22/g, '"').replace(/%5c/g, "\\").replace(/%26/g, "&").replace(/%25/g, "%")), l.end(i.status || 200)) : ("abort" == r || "error" == r) && (l.end(i.status || 0, i.message), d(t))
                                    })
                                })
                            });
                            a(s, function(e) {
                                u.inc(), n.getInfo(e, u.next)
                            }), u.check()
                        }
                    })
                }
            };
        n.Flash = x, n.newImage("data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==", function(e, t) {
            n.support.dataURI = !(1 != t.width || 1 != t.height), x.init()
        })
    }()
}(window, window.jQuery, FileAPI),
function(e, t, n) {
    "use strict";
    var i = n.each,
        r = [];
    n.support.flash && n.media && !n.support.media && ! function() {
        function e(e) {
            var t = e.wid = n.uid();
            return n.Flash._fn[t] = e, "FileAPI.Flash._fn." + t
        }

        function t(e) {
            try {
                n.Flash._fn[e.wid] = null, delete n.Flash._fn[e.wid]
            } catch (t) {}
        }
        var o = n.Flash;
        n.extend(n.Flash, {
            patchCamera: function() {
                n.Camera.fallback = function(i, r, a) {
                    var s = n.uid();
                    n.log("FlashAPI.Camera.publish: " + s), o.publish(i, s, n.extend(r, {
                        camera: !0,
                        onEvent: e(function l(e) {
                            "camera" === e.type && (t(l), e.error ? (n.log("FlashAPI.Camera.publish.error: " + e.error), a(e.error)) : (n.log("FlashAPI.Camera.publish.success: " + s), a(null)))
                        })
                    }))
                }, i(r, function(e) {
                    n.Camera.fallback.apply(n.Camera, e)
                }), r = [], n.extend(n.Camera.prototype, {
                    _id: function() {
                        return this.video.id
                    },
                    start: function(i) {
                        var r = this;
                        o.cmd(this._id(), "camera.on", {
                            callback: e(function a(e) {
                                t(a), e.error ? (n.log("FlashAPI.camera.on.error: " + e.error), i(e.error, r)) : (n.log("FlashAPI.camera.on.success: " + r._id()), r._active = !0, i(null, r))
                            })
                        })
                    },
                    stop: function() {
                        this._active = !1, o.cmd(this._id(), "camera.off")
                    },
                    shot: function() {
                        n.log("FlashAPI.Camera.shot:", this._id());
                        var e = n.Flash.cmd(this._id(), "shot", {});
                        return e.type = "image/png", e.flashId = this._id(), e.isShot = !0, new n.Camera.Shot(e)
                    }
                })
            }
        }), n.Camera.fallback = function() {
            r.push(arguments)
        }
    }()
}(window, window.jQuery, FileAPI), "function" == typeof define && define.amd && define("FileAPI", [], function() {
    return FileAPI
}), ! function(e, t) {
    "use strict";

    function n(e) {
        var t;
        for (t in e)
            if (e.hasOwnProperty(t) && !(e[t] instanceof Object || "overlay" === t)) return !0;
        return !1
    }

    function i(e, t, n, i) {
        if (n && i) {
            var r = n > 0 ? n : n[t],
                o = i > 0 ? i : i[t.substr(3).toLowerCase()],
                a = r - o,
                s = /max/.test(t);
            (s && 0 > a || !s && a > 0) && (e.errors || (e.errors = {}), e.errors[t] = Math.abs(a))
        }
    }

    function r(e, t, n, r) {
        if (e) {
            var o = n.length - (e - t);
            o > 0 && f(n.splice(0, o), function(e, t) {
                i(e, "maxFiles", -1, t), r.push(e)
            })
        }
    }
    var o = e.noop,
        a = !e.fn.prop,
        s = a ? "attr" : "prop",
        l = "data-fileapi",
        u = "data-fileapi-id",
        c = [].slice,
        f = t.each,
        d = t.extend,
        p = function(e, t) {
            var n = c.call(arguments, 2);
            return t.bind ? t.bind.apply(t, [e].concat(n)) : function() {
                return t.apply(e, n.concat(c.call(arguments)))
            }
        },
        h = function(e) {
            return "[" + l + '="' + e + '"]'
        },
        m = function(e) {
            return 0 === e.indexOf("#")
        },
        g = function(t, n) {
            if (this.$el = t = e(t).on("change.fileapi", 'input[type="file"]', p(this, this._onSelect)), this.el = t[0], this._options = {}, this.options = {
                    url: 0,
                    data: {},
                    accept: 0,
                    multiple: !1,
                    paramName: 0,
                    dataType: "json",
                    duplicate: !1,
                    uploadRetry: 0,
                    networkDownRetryTimeout: 5e3,
                    chunkSize: 0,
                    chunkUploadRetry: 3,
                    chunkNetworkDownRetryTimeout: 2e3,
                    maxSize: 0,
                    maxFiles: 0,
                    imageSize: 0,
                    sortFn: 0,
                    filterFn: 0,
                    autoUpload: !1,
                    clearOnSelect: void 0,
                    clearOnComplete: void 0,
                    lang: {
                        B: "bytes",
                        KB: "KB",
                        MB: "MB",
                        GB: "GB",
                        TB: "TB"
                    },
                    sizeFormat: "0.00",
                    imageOriginal: !0,
                    imageTransform: 0,
                    imageAutoOrientation: !!FileAPI.support.exif,
                    elements: {
                        ctrl: {
                            upload: h("ctrl.upload"),
                            reset: h("ctrl.reset"),
                            abort: h("ctrl.abort")
                        },
                        empty: {
                            show: h("empty.show"),
                            hide: h("empty.hide")
                        },
                        emptyQueue: {
                            show: h("emptyQueue.show"),
                            hide: h("emptyQueue.hide")
                        },
                        active: {
                            show: h("active.show"),
                            hide: h("active.hide")
                        },
                        size: h("size"),
                        name: h("name"),
                        progress: h("progress"),
                        list: h("list"),
                        file: {
                            tpl: h("file.tpl"),
                            progress: h("file.progress"),
                            active: {
                                show: h("file.active.show"),
                                hide: h("file.active.hide")
                            },
                            preview: {
                                el: 0,
                                get: 0,
                                width: 0,
                                height: 0,
                                processing: 0
                            },
                            abort: h("file.abort"),
                            remove: h("file.remove"),
                            rotate: h("file.rotate")
                        },
                        dnd: {
                            el: h("dnd"),
                            hover: "dnd_hover",
                            fallback: h("dnd.fallback")
                        }
                    },
                    onDrop: o,
                    onDropHover: o,
                    onSelect: o,
                    onBeforeUpload: o,
                    onUpload: o,
                    onProgress: o,
                    onComplete: o,
                    onFilePrepare: o,
                    onFileUpload: o,
                    onFileProgress: o,
                    onFileComplete: o,
                    onFileRemove: null,
                    onFileRemoveCompleted: null
                }, e.extend(!0, this.options, n), n = this.options, this.option("elements.file.preview.rotate", n.imageAutoOrientation), !n.url) {
                var i = this.$el.attr("action") || this.$el.find("form").attr("action");
                i ? n.url = i : this._throw("url — is not defined")
            }
            this.$files = this.$elem("list"), this.$fileTpl = this.$elem("file.tpl"), this.itemTplFn = e.fn.fileapi.tpl(e("<div/>").append(this.$elem("file.tpl")).html()), f(n, function(e, t) {
                this._setOption(t, e)
            }, this), this.$el.on("reset.fileapi", p(this, this._onReset)).on("submit.fileapi", p(this, this._onSubmit)).on("upload.fileapi progress.fileapi complete.fileapi", p(this, this._onUploadEvent)).on("fileupload.fileapi fileprogress.fileapi filecomplete.fileapi", p(this, this._onFileUploadEvent)).on("click", "[" + l + "]", p(this, this._onActionClick));
            var r = n.elements.ctrl;
            r && (this._listen("click", r.reset, p(this, this._onReset)), this._listen("click", r.upload, p(this, this._onSubmit)), this._listen("click", r.abort, p(this, this._onAbort)));
            var a = FileAPI.support.dnd;
            this.$elem("dnd.el", !0).toggle(a), this.$elem("dnd.fallback").toggle(!a), a && this.$elem("dnd.el", !0).dnd(p(this, this._onDropHover), p(this, this._onDrop)), this.$progress = this.$elem("progress"), void 0 === n.clearOnSelect && (n.clearOnSelect = !n.multiple), this.clear(), e.isArray(n.files) && (this.files = e.map(n.files, function(t) {
                return "string" === e.type(t) && (t = {
                    src: t,
                    size: 0
                }), t.name = t.name || t.src.split("/").pop(), t.type = t.type || /\.(jpe?g|png|bmp|gif|tiff?)/i.test(t.src) && "image/" + t.src.split(".").pop(), t.complete = !0, t
            }), this._redraw())
        };
    g.prototype = {
        constructor: g,
        _throw: function(e) {
            throw "jquery.fileapi: " + e
        },
        _getFiles: function(e, n) {
            var o = this.options,
                a = o.maxSize,
                s = o.maxFiles,
                l = o.filterFn,
                u = this.files.length,
                c = t.getFiles(e),
                d = {
                    all: c,
                    files: [],
                    other: [],
                    duplicate: o.duplicate ? [] : this._extractDuplicateFiles(c)
                },
                p = o.imageSize,
                h = this;
            p || l ? t.filterFiles(c, function(e, t) {
                return t && p && (i(e, "minWidth", p, t), i(e, "minHeight", p, t), i(e, "maxWidth", p, t), i(e, "maxHeight", p, t)), i(e, "maxSize", a, e.size), !e.errors && (!l || l(e, t))
            }, function(e, t) {
                r(s, u, e, t), d.other = t, d.files = e, n.call(h, d)
            }) : (f(c, function(e) {
                i(e, "maxSize", a, e.size), d[e.errors ? "other" : "files"].push(e)
            }), r(s, u, d.files, d.other), n.call(h, d))
        },
        _extractDuplicateFiles: function(e) {
            for (var t, n = [], i = e.length, r = this.files; i--;)
                for (t = r.length; t--;)
                    if (this._fileCompare(e[i], r[t])) {
                        n.push(e.splice(i, 1));
                        break
                    }
            return n
        },
        _fileCompare: function(e, t) {
            return e.size == t.size && e.name == t.name
        },
        _getFormatedSize: function(e) {
            var n = this.options,
                i = "B";
            return e >= t.TB ? e /= t[i = "TB"] : e >= t.GB ? e /= t[i = "GB"] : e >= t.MB ? e /= t[i = "MB"] : e >= t.KB && (e /= t[i = "KB"]), n.sizeFormat.replace(/^\d+([^\d]+)(\d*)/, function(t, r, o) {
                return e = (parseFloat(e) || 0).toFixed(o.length), (e + "").replace(".", r) + " " + n.lang[i]
            })
        },
        _onSelect: function(e) {
            this.options.clearOnSelect && (this.queue = [], this.files = []), this._getFiles(e, p(this, function(t) {
                t.all.length && this.emit("select", t) !== !1 && this.add(t.files), FileAPI.reset(e.target)
            }))
        },
        _onActionClick: function(t) {
            var n = t.currentTarget,
                i = e.attr(n, l),
                r = e(n).closest("[" + u + "]", this.$el).attr(u),
                o = this._getFile(r),
                a = !0;
            this.$file(r).attr("disabled") || ("file.remove" == i ? o && this.emit("fileRemove" + (o.complete ? "Completed" : ""), o) && this.remove(r) : /^file\.rotate/.test(i) ? this.rotate(r, /ccw/.test(i) ? "-=90" : "+=90") : a = !1), a && t.preventDefault()
        },
        _listen: function(t, n, i) {
            n && f(e.trim(n).split(","), function(n) {
                n = e.trim(n), m(n) ? e(n).on(t + ".fileapi", i) : this.$el.on(t + ".fileapi", n, i)
            }, this)
        },
        _onSubmit: function(e) {
            e.preventDefault(), this.upload()
        },
        _onReset: function(e) {
            e.preventDefault(), this.clear(!0)
        },
        _onAbort: function(e) {
            e.preventDefault(), this.abort()
        },
        _onDrop: function(e) {
            this._getFiles(e, function(e) {
                this.emit("drop", e) !== !1 && this.add(e.files)
            })
        },
        _onDropHover: function(t, n) {
            if (this.emit("dropHover", {
                    state: t,
                    event: n
                }) !== !1) {
                var i = this.option("elements.dnd.hover");
                i && e(n.currentTarget).toggleClass(i, t)
            }
        },
        _getFile: function(e) {
            return t.filter(this.files, function(n) {
                return t.uid(n) == e
            })[0]
        },
        _getUploadEvent: function(e, t) {
            var n = {
                xhr: e,
                file: this.xhr.currentFile,
                files: this.xhr.files,
                widget: this
            };
            return d(n, t)
        },
        _emitUploadEvent: function(e, t, n) {
            var i = this._getUploadEvent(n);
            this.emit(e + "Upload", i)
        },
        _emitProgressEvent: function(e, t, n, i) {
            var r = this._getUploadEvent(i, t);
            this.emit(e + "Progress", r)
        },
        _emitCompleteEvent: function(t, n, i, r) {
            var o = this._getUploadEvent(i, {
                error: n,
                status: i.status,
                statusText: i.statusText,
                result: i.responseText
            });
            if ("file" == t && (r.complete = !0), "json" == this.options.dataType) try {
                o.result = e.parseJSON(o.result)
            } catch (n) {
                o.error = n
            }
            this.emit(t + "Complete", o)
        },
        _onUploadEvent: function(e, t) {
            var n = this,
                i = n.$progress,
                r = e.type;
            if ("progress" == r) i.stop().animate({
                width: t.loaded / t.total * 100 + "%"
            }, 300);
            else if ("upload" == r) i.width(0);
            else {
                var o = function() {
                    i.dequeue(), n[n.options.clearOnComplete ? "clear" : "dequeue"]()
                };
                this.xhr = null, this.active = !1, i.length ? i.queue(o) : o()
            }
        },
        _onFileUploadPrepare: function(i, r) {
            var o = t.uid(i),
                a = this._rotate[o],
                s = this._crop[o],
                l = this._resize[o],
                u = this._getUploadEvent(this.xhr);
            if (a || s || l) {
                var c = e.extend(!0, {}, r.imageTransform || {});
                a = null != a ? a : this.options.imageAutoOrientation ? "auto" : void 0, e.isEmptyObject(c) || n(c) ? (d(c, l), c.crop = s, c.rotate = a) : f(c, function(e) {
                    d(e, l), e.crop = s, e.rotate = a
                }), r.imageTransform = c
            }
            u.file = i, u.options = r, this.emit("filePrepare", u)
        },
        _onFileUploadEvent: function(e, n) {
            var i = this,
                r = e.type.substr(4),
                o = t.uid(n.file),
                a = this.$file(o),
                s = this._$fileprogress,
                l = this.options;
            if (this.__fileId !== o && (this.__fileId = o, this._$fileprogress = s = this.$elem("file.progress", a)), "progress" == r) s.stop().animate({
                width: n.loaded / n.total * 100 + "%"
            }, 300);
            else if ("upload" == r || "complete" == r) {
                var u = function() {
                    var e = "file." + r,
                        t = i.$elem("file.remove", a);
                    "upload" == r ? (t.hide(), s.width(0)) : l.onFileRemoveCompleted && t.show(), s.dequeue(), i.$elem(e + ".show", a).show(), i.$elem(e + ".hide", a).hide()
                };
                s.length ? s.queue(u) : u(), "complete" == r && (this.uploaded.push(n.file), delete this._rotate[o])
            }
        },
        _redraw: function(n, i) {
            var r = this.files,
                o = !!this.active,
                a = !r.length && !o,
                l = !this.queue.length && !o,
                c = [],
                d = 0,
                p = this.$files,
                h = p.children().length,
                m = this.option("elements.preview"),
                g = this.option("elements.file.preview");
            n && this.$files.empty(), i && m && m.el && !this.queue.length && this.$(m.el).empty(), f(r, function(n, i) {
                var r = t.uid(n);
                if (c.push(n.name), d += n.complete ? 0 : n.size, m && m.el) this._makeFilePreview(r, n, m, !0);
                else if (p.length && !this.$file(r).length) {
                    var o = this.itemTplFn({
                            $idx: h + i,
                            uid: r,
                            name: n.name,
                            type: n.type,
                            size: n.size,
                            complete: !!n.complete,
                            sizeText: this._getFormatedSize(n.size)
                        }),
                        a = e(o).attr(u, r);
                    n.$el = a, p.append(a), n.complete && (this.$elem("file.upload.hide", a).hide(), this.$elem("file.complete.hide", a).hide()), g.el && this._makeFilePreview(r, n, g)
                }
            }, this), this.$elem("name").text(c.join(", ")), this.$elem("size").text(l ? "" : this._getFormatedSize(d)), this.$elem("empty.show").toggle(a), this.$elem("empty.hide").toggle(!a), this.$elem("emptyQueue.show").toggle(l), this.$elem("emptyQueue.hide").toggle(!l), this.$elem("active.show").toggle(o), this.$elem("active.hide").toggle(!o), this.$(".js-fileapi-wrapper,:file")[o ? "attr" : "removeAttr"]("aria-disabled", o)[s]("disabled", o), this._disableElem("ctrl.upload", l || o), this._disableElem("ctrl.reset", l || o), this._disableElem("ctrl.abort", !o)
        },
        _disableElem: function(e, t) {
            this.$elem(e)[t ? "attr" : "removeAttr"]("aria-disabled", "disabled")[s]("disabled", t)
        },
        _makeFilePreview: function(e, n, i, r) {
            var o = this,
                a = r ? o.$(i.el) : o.$file(e).find(i.el);
            if (!o._crop[e])
                if (/^image/.test(n.type)) {
                    var s = t.Image(n.src || n),
                        l = function() {
                            s.get(function(t, r) {
                                o._crop[e] || (t ? (i.get && i.get(a, n), o.emit("previewError", [t, n])) : a.html(r))
                            })
                        };
                    i.width && s.preview(i.width, i.height), i.rotate && s.rotate("auto"), i.processing ? i.processing(n, s, l) : l()
                } else i.get && i.get(a, n)
        },
        emit: function(t, n) {
            var i, r = this.options,
                o = e.Event(t.toLowerCase());
            return o.widget = this, t = e.camelCase("on-" + t), e.isFunction(r[t]) && (i = r[t].call(this.el, o, n)), this.$el.triggerHandler(o, n), i !== !1 && !o.isDefaultPrevented()
        },
        add: function(e, t) {
            if (e = [].concat(e), e.length) {
                var n = this.options,
                    i = n.sortFn;
                i && e.sort(i), this.xhr && this.xhr.append(e), this.queue = t ? e : this.queue.concat(e), this.files = t ? e : this.files.concat(e), this.active ? (this.xhr.append(e), this._redraw(t)) : (this._redraw(t), this.options.autoUpload && this.upload())
            }
        },
        $: function(t, n) {
            return "string" == typeof t && (t = /^#/.test(t) ? t : (n ? e(n) : this.$el).find(t)), e(t)
        },
        $elem: function(t, n, i) {
            n && n.jquery && (i = n, n = !1);
            var r = this.option("elements." + t);
            return void 0 === r && n && (r = this.option("elements." + t.substr(0, t.lastIndexOf(".")))), this.$("string" != e.type(r) && e.isEmptyObject(r) ? [] : r, i)
        },
        $file: function(e) {
            return this.$("[" + u + '="' + e + '"]')
        },
        option: function(t, n) {
            if (void 0 !== n && e.isPlainObject(n)) return f(n, function(e, n) {
                this.option(t + "." + n, e)
            }, this), this;
            var i, r, o = this.options,
                a = o[t],
                s = 0;
            if (-1 != t.indexOf("."))
                for (a = o, t = t.split("."), i = t.length; i > s; s++) {
                    if (r = t[s], void 0 !== n && i - s === 1) {
                        a[r] = n;
                        break
                    }
                    a[r] || (a[r] = {}), a = a[r]
                } else void 0 !== n && (o[t] = n);
            return void 0 !== n && (this._setOption(t, n, this._options[t]), this._options[t] = n), void 0 !== n ? n : a
        },
        _setOption: function(e, t) {
            switch (e) {
                case "accept":
                case "multiple":
                case "paramName":
                    "paramName" == e && (e = "name"), t && this.$(":file")[s](e, t)
            }
        },
        serialize: function() {
            var t, n = {};
            return this.$el.find(":input").each(function(i, r) {
                (i = r.name) && !r.disabled && (r.checked || /select|textarea|input/i.test(r.nodeName) && !/checkbox|radio|file/i.test(r.type)) && (t = e(r).val(), void 0 !== n[i] ? (n[i].push || (n[i] = [n[i]]), n[i].push(t)) : n[i] = t)
            }), n
        },
        upload: function() {
            if (!this.active && this.emit("beforeUpload", {
                    widget: this,
                    files: this.queue
                })) {
                this.active = !0;
                var e = this.$el,
                    n = this.options,
                    i = {},
                    r = {
                        url: n.url,
                        data: d({}, this.serialize(), n.data),
                        headers: n.headers,
                        files: i,
                        uploadRetry: n.uploadRetry,
                        networkDownRetryTimeout: n.networkDownRetryTimeout,
                        chunkSize: n.chunkSize,
                        chunkUploadRetry: n.chunkUploadRetry,
                        chunkNetworkDownRetryTimeout: n.chunkNetworkDownRetryTimeout,
                        prepare: p(this, this._onFileUploadPrepare),
                        imageOriginal: n.imageOriginal,
                        imageTransform: n.imageTransform,
                        imageAutoOrientation: n.imageAutoOrientation
                    };
                i[e.find(":file").attr("name") || "files[]"] = this.queue, f(["Upload", "Progress", "Complete"], function(e) {
                    var t = e.toLowerCase();
                    r[t] = p(this, this["_emit" + e + "Event"], ""), r["file" + t] = p(this, this["_emit" + e + "Event"], "file")
                }, this), this.xhr = t.upload(r), this._redraw()
            }
        },
        abort: function(e) {
            this.active && this.xhr && this.xhr.abort(e)
        },
        crop: function(n, i) {
            var r = t.uid(n),
                o = this.options,
                a = o.multiple ? this.option("elements.file.preview") : o.elements.preview,
                s = (o.multiple ? this.$file(r) : this.$el).find(a && a.el);
            s.length && t.getInfo(n, p(this, function(r, l) {
                if (r) this.emit("previewError", [r, n]);
                else {
                    s.find("div>div").length || s.html(e("<div><div></div></div>").css(a).css("overflow", "hidden")), this.__cropFile !== n && (this.__cropFile = n, t.Image(n).rotate(o.imageAutoOrientation ? "auto" : 0).get(function(t, n) {
                        s.find(">div>div").html(e(n).width("100%").height("100%"))
                    }, "exactFit"));
                    var u = a.width,
                        c = a.height,
                        f = u,
                        d = c,
                        p = u / i.rw,
                        h = c / i.rh;
                    a.keepAspectRatio && (p > 1 && h > 1 ? (p = h = 1, d = i.h, f = i.w) : h > p ? (h = p, d = u * i.rh / i.rw) : (p = h, f = c * i.rw / i.rh)), s.find(">div>div").css({
                        width: Math.round(p * l[i.flip ? "height" : "width"]),
                        height: Math.round(h * l[i.flip ? "width" : "height"]),
                        marginLeft: -Math.round(p * i.rx),
                        marginTop: -Math.round(h * i.ry)
                    }), a.keepAspectRatio && s.find(">div").css({
                        width: Math.round(f),
                        height: Math.round(d),
                        marginLeft: u > f ? Math.round((u - f) / 2) : 0,
                        marginTop: c > d ? Math.round((c - d) / 2) : 0
                    })
                }
            })), this._crop[r] = i
        },
        resize: function(e, n, i, r) {
            this._resize[t.uid(e)] = {
                type: r,
                width: n,
                height: i
            }
        },
        rotate: function(n, i) {
            var r = "string" == e.type(n) ? n : t.uid(n),
                o = this.options,
                a = o.multiple ? this.option("elements.file.preview") : o.elements.preview,
                s = (o.multiple ? this.$file(r) : this.$el).find(a && a.el),
                l = this._rotate;
            n = this._getFile(r), t.getInfo(n, function(e, a) {
                var u = a && a.exif && a.exif.Orientation,
                    c = o.imageAutoOrientation && t.Image.exifOrientation[u] || 0;
                null == l[r] && (l[r] = c || 0), l[r] = /([+-])=/.test(i) ? i = l[r] + ("+" == RegExp.$1 ? 1 : -1) * i.substr(2) : i, n.rotate = i, i -= c, s.css({
                    "-webkit-transform": "rotate(" + i + "deg)",
                    "-moz-transform": "rotate(" + i + "deg)",
                    transform: "rotate(" + i + "deg)"
                })
            })
        },
        remove: function(e) {
            var n = "object" == typeof e ? t.uid(e) : e;
            this.$file(n).remove(), this.queue = t.filter(this.queue, function(e) {
                return t.uid(e) != n
            }), this.files = t.filter(this.files, function(e) {
                return t.uid(e) != n
            }), this._redraw()
        },
        clear: function(e) {
            this._crop = {}, this._resize = {}, this._rotate = {}, this.queue = [], this.files = [], this.uploaded = [], e = void 0 === e ? !0 : e, this._redraw(e, e)
        },
        dequeue: function() {
            this.queue = [], this._redraw()
        },
        widget: function() {
            return this
        },
        toString: function() {
            return "[jQuery.FileAPI object]"
        },
        destroy: function() {
            this.$files.empty().append(this.$fileTpl), this.$el.off(".fileapi").removeData("fileapi"), f(this.options.elements.ctrl, function(t) {
                m(t) && e(t).off("click.fileapi")
            })
        }
    }, e.fn.fileapi = function(t, n) {
        var i = this.data("fileapi");
        if (i) {
            if ("widget" === t) return i;
            if ("string" == typeof t) {
                var r, o = i[t];
                return e.isFunction(o) ? r = o.apply(i, c.call(arguments, 1)) : void 0 === o ? r = i.option(t, n) : "files" === t && (r = o), void 0 === r ? this : r
            }
        } else(null == t || "object" == typeof t) && this.data("fileapi", new g(this, t));
        return this
    }, e.fn.fileapi.version = "0.4.7", e.fn.fileapi.tpl = function(e) {
        var t = 0,
            n = "__b+='";
        return e.replace(/(?:&lt;|<)%([-=])?([\s\S]+?)%(?:&gt;|>)|$/g, function(i, r, o, a) {
            return n += e.slice(t, a).replace(/[\r\n"']/g, function(e) {
                return "\\" + e
            }), o && (n += r ? "'+\n((__x=(" + o + "))==null?'':" + ("-" == r ? "__esc(__x)" : "__x") + ")\n+'" : "';\n" + o + "\n__b+='"), t = a + i.length, i
        }), new Function("ctx", "var __x,__b='',__esc=function(val){return typeof val=='string'?val.replace(/</g,'&lt;').replace(/\"/g,'&quot;'):val;};with(ctx||{}){\n" + n + "';\n}return __b;")
    }, e.fn.webcam = function(n) {
        var i = this,
            r = i,
            a = e(i),
            s = "fileapi-camera",
            l = a.data(s);
        return l === !0 ? (t.log("[webcam.warn] not ready."), r = null) : "widget" === n ? r = l : "destroy" === n ? (l.stop(), a.empty()) : l ? r = l[n]() : l === !1 ? (t.log("[webcam.error] does not work."), r = null) : (a.data(s, !0), n = d({
            success: o,
            error: o
        }, n), FileAPI.Camera.publish(a, n, function(e, t) {
            a.data(s, e ? !1 : t), n[e ? "error" : "success"].call(i, e || t)
        })), r
    }, e.fn.cropper = function(n) {
        var i = this,
            r = n.file;
        if ("string" == typeof n) i.first().Jcrop.apply(i, arguments);
        else {
            var o = n.minSize || [0, 0],
                a = n.aspectRatio || o[0] / o[1];
            e.isArray(n.minSize) && void 0 === n.aspectRatio && a > 0 && (n.aspectRatio = a), t.getInfo(r, function(s, l) {
                var u = t.Image(r),
                    c = n.maxSize,
                    d = r.rotate;
                c && u.resize(Math.max(c[0], o[0]), Math.max(c[1], o[1]), "max"), u.rotate(void 0 === d ? "auto" : d).get(function(t, r) {
                    var o = n.selection,
                        s = Math.min(r.width, r.height),
                        u = s,
                        c = s / a,
                        d = FileAPI.Image.exifOrientation[l.exif && l.exif.Orientation] || 0;
                    if (o) {
                        (/%/.test(o) || o > 0 && 1 > o) && (o = parseFloat(o, 10) / (o > 0 ? 1 : 100), u *= o, c *= o);
                        var p = (r.width - u) / 2,
                            h = (r.height - c) / 2;
                        n.setSelect = [0 | p, 0 | h, p + u | 0, h + c | 0]
                    }
                    f(["onSelect", "onChange"], function(e, t) {
                        (t = n[e]) && (n[e] = function(e) {
                            var n = d % 180,
                                i = l.width,
                                o = l.height,
                                a = e.x / r.width,
                                s = e.y / r.height,
                                u = e.w / r.width,
                                c = e.h / r.height,
                                f = i * (n ? s : a),
                                p = o * (n ? 1 - (e.x + e.w) / r.width : s),
                                h = i * (n ? c : u),
                                m = o * (n ? u : c);
                            t({
                                x: f,
                                y: p,
                                w: h,
                                h: m,
                                rx: a * (n ? o : i),
                                ry: s * (n ? i : o),
                                rw: u * (n ? o : i),
                                rh: c * (n ? i : o),
                                lx: e.x,
                                ly: e.y,
                                lw: e.w,
                                lh: e.h,
                                lx2: e.x2,
                                ly2: e.y2,
                                deg: d,
                                flip: n
                            })
                        })
                    });
                    var m = e("<div/>").css("lineHeight", 0).append(e(r).css("margin", 0));
                    i.html(m), m.Jcrop(n).trigger("resize")
                })
            })
        }
        return i
    }
}(jQuery, FileAPI), $(document).ready(function() {
    var e = $("#ace");
    if (e.length) {
        var t = ace.edit("ace"),
            n = document.getElementById("fullScreen");
        t.setTheme("ace/theme/github"), t.getSession().setMode("ace/mode/markdown"), t.getSession().setTabSize(4), t.getSession().setUseSoftTabs(!1), t.getSession().setUseWrapMode(!0), t.setHighlightActiveLine(!1), t.setShowPrintMargin(!1), e.closest("form").submit(function() {
            var n = t.getValue();
            console.log(n), e.prev("input[type=hidden]").val(n)
        });
        var i = function(e) {
            e && e.preventDefault && e.preventDefault();
            var i = n.children[0];
            i.innerHTML = [i.dataset.text, i.dataset.text = i.innerHTML][0], n.classList.toggle("fa-expand"), n.classList.toggle("fa-compress"), document.body.classList.toggle("fullScreen"), t.resize(), t.focus()
        };
        n.addEventListener("click", i), t.container.addEventListener("keydown", function(e) {
            var t = document.body.classList.contains("fullScreen");
            return 27 == e.which && t ? (e.preventDefault(), i()) : 13 == e.which && e.ctrlKey && !t ? (e.preventDefault(), i()) : void 0
        })
    }
}), NProgress.configure({
    showSpinner: !1
}), $(document).on("ajaxSend", function() {
    NProgress.start()
}).on("ajaxComplete ajaxStop", function() {
    NProgress.done(!0)
}), $("form.ajax").submit(function(e) {
    e.preventDefault();
    var t = this,
        n = $(t);
    $.ajax({
        url: n.attr("action"),
        data: n.serialize(),
        method: "post",
        success: function(e) {
            if (e.success && (n.hasClass("reset") && t.reset(), sweetAlert({
                    title: e.title || e.message,
                    type: "success"
                }, function() {
                    e.redirect && (window.location.href = e.redirect)
                })), e.error) {
                if (e.errors)
                    for (key in e.errors)
                        if (e.errors.hasOwnProperty(key)) {
                            var i = n.find('input[name="' + key + '"]');
                            i.parent().addClass("has-error"), $('<p class="error-block">' + e.errors[key].join("<br/>") + "</p>").insertAfter(i)
                        }
                n.find('button[type="submit"]').prop("disabled", !1)
            }
        },
        beforeSend: function() {
            var e = n.find(".form-group");
            n.find('button[type="submit"]').prop("disabled", !0), $.each(e, function(e, t) {
                $(t).hasClass("has-error") && ($(t).removeClass("has-error"), $(t).find(".error-block").remove())
            })
        }
    })
}), $(document).ready(function() {
    var e = $(".data-table");
    e.length && e.DataTable({
        ajax: {
            url: window.location.href
        },
        columns: [{
            data: "id"
        }, {
            data: "title"
        }, {
            data: "created_at"
        }, {
            data: "updated_at"
        }, {
            data: "id",
            render: function(e) {
                return '<a href="#" onclick="Admin.editEntity(' + e + ');return false">Edit</a><a href="#" onclick="Admin.destroyEntity(' + e + ');return false">Delete</a>'
            }
        }]
    })
}), Admin = {}, Admin.editEntity = function(e) {
    window.location.pathname += "/" + e + "/edit"
}, Admin.destroyEntity = function(e) {
    swal({
        title: "Are you sure?",
        type: "warning",
        showCancelButton: !0,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Yes, delete it!",
        closeOnConfirm: !1
    }, function() {
        $.ajax({
            url: window.location.pathname + "/" + e,
            type: "delete",
            success: function(e) {
                e.success ? sweetAlert({
                    title: e.message,
                    type: "success"
                }, function() {
                    $(".data-table").DataTable().ajax.reload()
                }) : e.error && sweetAlert({
                    title: e.message,
                    type: "error"
                })
            }
        })
    })
}, $(document).ready(function() {
    $(".docs .main").find("a[name]").each(function() {
        var e = $('<a href="#' + this.name + '">');
        $(this).parent().next("h2").wrapInner(e)
    })
}), $(document).ready(function() {
    if ($(".docs").length) {
        var e = window.location.pathname,
            t = $('a[href="' + e + '"]');
        t && t.closest("li").addClass("active")
    }
}), $(document).ready(function() {
    $(".subnav").on("click", ".docs-menu-button", function() {
        $(".docs .sidebar").toggleClass("visible")
    })
}), $(document).ready(function() {
    $("body").on("click", "[data-toggle=dropdown]", function() {
        $(this).closest("li").toggleClass("active"), $(this).siblings("ul.dropdown").toggleClass("visible")
    }), $("body").on("click", ".toggle-button", function() {
        $(this).parent().siblings("div.collapse").slideToggle("fast")
    })
}), $(document).ready(function() {
    $("pre").addClass("prettyprint"), prettyPrint()
}), $(document).ready(function() {
    $('form.register input[name="jsToken"]').val(function() {
        return $(this).data("token")
    })
}), $(document).ready(function() {
    var e = document.getElementsByClassName("changeAvatar")[0],
        t = document.getElementsByClassName("deleteAvatar")[0];
    return e ? ($(e).fileapi({
        url: "/settings/avatar-upload",
        accept: "image/*",
        multiple: !1,
        maxSize: 1 * FileAPI.MB,
        autoUpload: !0,
        onSelect: function(e, t) {
            if (t.other.length) {
                var n = t.other[0].errors;
                n && n.maxSize && sweetAlert({
                    title: "Максимально допустимый размер фото 1024 Кб",
                    type: "warning"
                })
            }
        },
        onComplete: function(n, i) {
            var r = i.result;
            r.success ? (t.classList.remove("hidden"), e.previousElementSibling.src = r.avatar + "?" + Date.now(), sweetAlert({
                title: r.message,
                type: "success"
            })) : r.error && r.errors && sweetAlert({
                title: r.errors.avatar[0],
                type: "error"
            })
        }
    }), void t.addEventListener("click", function(n) {
        n.preventDefault(), swal({
            title: "Удалить Ваше фото?",
            type: "warning",
            showCancelButton: !0,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Да",
            cancelButtonText: "Нет",
            closeOnConfirm: !1
        }, function() {
            $.ajax({
                url: "/settings/avatar-delete",
                type: "delete",
                success: function(n) {
                    n.success && (t.classList.add("hidden"), e.previousElementSibling.src = n.avatar + "?" + Date.now(), sweetAlert({
                        title: n.message,
                        type: "success"
                    }))
                }
            })
        })
    })) : !1
}), $(document).ready(function() {
    $("main").on("click", ".tabs li", function() {
        var e = $(this),
            t = e.parent().siblings("ul.tab-contents");
        e.hasClass("active") || (e.parent().find("li").removeClass("active"), e.addClass("active"), setTimeout(function() {
            t.find("li").removeClass("visible"), t.find("li[data-tab=" + e.data("tab") + "]").addClass("visible")
        }, 600))
    })
});