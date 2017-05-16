function heightloop(a) {
    var b = $("#" + a + " table"),
        c = b.height();
    c = "calc(79vh - " + c + "px)", c = "height:-moz-" + c + ";height:-webkit-" + c + ";height:-o-" + c + ";height:" + c, b.find(".last-map").attr("style", c)
}

function setCookie(a, b) {
    var c = new Date;
    c.setTime(c.getTime() + 24 * b * 60 * 60 * 1e3), document.cookie = a + "=" + b + ";expires=" + c.toUTCString()
}

function getCookie(a) {
    var b = document.cookie.match("(^|;) ?" + a + "=([^;]*)(;|$)");
    return b ? b[2] : null
}! function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
    function c(a) {
        var b = !!a && "length" in a && a.length,
            c = na.type(a);
        return "function" !== c && !na.isWindow(a) && ("array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a)
    }

    function d(a, b, c) {
        if (na.isFunction(b)) return na.grep(a, function(a, d) {
            return !!b.call(a, d, a) !== c
        });
        if (b.nodeType) return na.grep(a, function(a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (xa.test(b)) return na.filter(b, a, c);
            b = na.filter(b, a)
        }
        return na.grep(a, function(a) {
            return na.inArray(a, b) > -1 !== c
        })
    }

    function e(a, b) {
        do {
            a = a[b]
        } while (a && 1 !== a.nodeType);
        return a
    }

    function f(a) {
        var b = {};
        return na.each(a.match(Ca) || [], function(a, c) {
            b[c] = !0
        }), b
    }

    function g() {
        da.addEventListener ? (da.removeEventListener("DOMContentLoaded", h), a.removeEventListener("load", h)) : (da.detachEvent("onreadystatechange", h), a.detachEvent("onload", h))
    }

    function h() {
        (da.addEventListener || "load" === a.event.type || "complete" === da.readyState) && (g(), na.ready())
    }

    function i(a, b, c) {
        if (void 0 === c && 1 === a.nodeType) {
            var d = "data-" + b.replace(Ha, "-$1").toLowerCase();
            if ("string" == typeof(c = a.getAttribute(d))) {
                try {
                    c = "true" === c || "false" !== c && ("null" === c ? null : +c + "" === c ? +c : Ga.test(c) ? na.parseJSON(c) : c)
                } catch (a) {}
                na.data(a, b, c)
            } else c = void 0
        }
        return c
    }

    function j(a) {
        var b;
        for (b in a)
            if (("data" !== b || !na.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
        return !0
    }

    function k(a, b, c, d) {
        if (Fa(a)) {
            var e, f, g = na.expando,
                h = a.nodeType,
                i = h ? na.cache : a,
                j = h ? a[g] : a[g] && g;
            if (j && i[j] && (d || i[j].data) || void 0 !== c || "string" != typeof b) return j || (j = h ? a[g] = ca.pop() || na.guid++ : g), i[j] || (i[j] = h ? {} : {
                toJSON: na.noop
            }), "object" != typeof b && "function" != typeof b || (d ? i[j] = na.extend(i[j], b) : i[j].data = na.extend(i[j].data, b)), f = i[j], d || (f.data || (f.data = {}), f = f.data), void 0 !== c && (f[na.camelCase(b)] = c), "string" == typeof b ? null == (e = f[b]) && (e = f[na.camelCase(b)]) : e = f, e
        }
    }

    function l(a, b, c) {
        if (Fa(a)) {
            var d, e, f = a.nodeType,
                g = f ? na.cache : a,
                h = f ? a[na.expando] : na.expando;
            if (g[h]) {
                if (b && (d = c ? g[h] : g[h].data)) {
                    na.isArray(b) ? b = b.concat(na.map(b, na.camelCase)) : b in d ? b = [b] : (b = na.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length;
                    for (; e--;) delete d[b[e]];
                    if (c ? !j(d) : !na.isEmptyObject(d)) return
                }(c || (delete g[h].data, j(g[h]))) && (f ? na.cleanData([a], !0) : la.deleteExpando || g != g.window ? delete g[h] : g[h] = void 0)
            }
        }
    }

    function m(a, b, c, d) {
        var e, f = 1,
            g = 20,
            h = d ? function() {
                return d.cur()
            } : function() {
                return na.css(a, b, "")
            },
            i = h(),
            j = c && c[3] || (na.cssNumber[b] ? "" : "px"),
            k = (na.cssNumber[b] || "px" !== j && +i) && Ja.exec(na.css(a, b));
        if (k && k[3] !== j) {
            j = j || k[3], c = c || [], k = +i || 1;
            do {
                f = f || ".5", k /= f, na.style(a, b, k + j)
            } while (f !== (f = h() / i) && 1 !== f && --g)
        }
        return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e
    }

    function n(a) {
        var b = Ra.split("|"),
            c = a.createDocumentFragment();
        if (c.createElement)
            for (; b.length;) c.createElement(b.pop());
        return c
    }

    function o(a, b) {
        var c, d, e = 0,
            f = void 0 !== a.getElementsByTagName ? a.getElementsByTagName(b || "*") : void 0 !== a.querySelectorAll ? a.querySelectorAll(b || "*") : void 0;
        if (!f)
            for (f = [], c = a.childNodes || a; null != (d = c[e]); e++) !b || na.nodeName(d, b) ? f.push(d) : na.merge(f, o(d, b));
        return void 0 === b || b && na.nodeName(a, b) ? na.merge([a], f) : f
    }

    function p(a, b) {
        for (var c, d = 0; null != (c = a[d]); d++) na._data(c, "globalEval", !b || na._data(b[d], "globalEval"))
    }

    function q(a) {
        Na.test(a.type) && (a.defaultChecked = a.checked)
    }

    function r(a, b, c, d, e) {
        for (var f, g, h, i, j, k, l, m = a.length, r = n(b), s = [], t = 0; m > t; t++)
            if ((g = a[t]) || 0 === g)
                if ("object" === na.type(g)) na.merge(s, g.nodeType ? [g] : g);
                else if (Ta.test(g)) {
                    for (i = i || r.appendChild(b.createElement("div")), j = (Oa.exec(g) || ["", ""])[1].toLowerCase(), l = Sa[j] || Sa._default, i.innerHTML = l[1] + na.htmlPrefilter(g) + l[2], f = l[0]; f--;) i = i.lastChild;
                    if (!la.leadingWhitespace && Qa.test(g) && s.push(b.createTextNode(Qa.exec(g)[0])), !la.tbody)
                        for (g = "table" !== j || Ua.test(g) ? "<table>" !== l[1] || Ua.test(g) ? 0 : i : i.firstChild, f = g && g.childNodes.length; f--;) na.nodeName(k = g.childNodes[f], "tbody") && !k.childNodes.length && g.removeChild(k);
                    for (na.merge(s, i.childNodes), i.textContent = ""; i.firstChild;) i.removeChild(i.firstChild);
                    i = r.lastChild
                } else s.push(b.createTextNode(g));
        for (i && r.removeChild(i), la.appendChecked || na.grep(o(s, "input"), q), t = 0; g = s[t++];)
            if (d && na.inArray(g, d) > -1) e && e.push(g);
            else if (h = na.contains(g.ownerDocument, g), i = o(r.appendChild(g), "script"), h && p(i), c)
                for (f = 0; g = i[f++];) Pa.test(g.type || "") && c.push(g);
        return i = null, r
    }

    function s() {
        return !0
    }

    function t() {
        return !1
    }

    function u() {
        try {
            return da.activeElement
        } catch (a) {}
    }

    function v(a, b, c, d, e, f) {
        var g, h;
        if ("object" == typeof b) {
            "string" != typeof c && (d = d || c, c = void 0);
            for (h in b) v(a, h, c, d, b[h], f);
            return a
        }
        if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), !1 === e) e = t;
        else if (!e) return a;
        return 1 === f && (g = e, e = function(a) {
            return na().off(a), g.apply(this, arguments)
        }, e.guid = g.guid || (g.guid = na.guid++)), a.each(function() {
            na.event.add(this, b, e, d, c)
        })
    }

    function w(a, b) {
        return na.nodeName(a, "table") && na.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function x(a) {
        return a.type = (null !== na.find.attr(a, "type")) + "/" + a.type, a
    }

    function y(a) {
        var b = db.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function z(a, b) {
        if (1 === b.nodeType && na.hasData(a)) {
            var c, d, e, f = na._data(a),
                g = na._data(b, f),
                h = f.events;
            if (h) {
                delete g.handle, g.events = {};
                for (c in h)
                    for (d = 0, e = h[c].length; e > d; d++) na.event.add(b, c, h[c][d])
            }
            g.data && (g.data = na.extend({}, g.data))
        }
    }

    function A(a, b) {
        var c, d, e;
        if (1 === b.nodeType) {
            if (c = b.nodeName.toLowerCase(), !la.noCloneEvent && b[na.expando]) {
                e = na._data(b);
                for (d in e.events) na.removeEvent(b, d, e.handle);
                b.removeAttribute(na.expando)
            }
            "script" === c && b.text !== a.text ? (x(b).text = a.text, y(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), la.html5Clone && a.innerHTML && !na.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && Na.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue)
        }
    }

    function B(a, b, c, d) {
        b = fa.apply([], b);
        var e, f, g, h, i, j, k = 0,
            l = a.length,
            m = l - 1,
            n = b[0],
            p = na.isFunction(n);
        if (p || l > 1 && "string" == typeof n && !la.checkClone && cb.test(n)) return a.each(function(e) {
            var f = a.eq(e);
            p && (b[0] = n.call(this, e, f.html())), B(f, b, c, d)
        });
        if (l && (j = r(b, a[0].ownerDocument, !1, a, d), e = j.firstChild, 1 === j.childNodes.length && (j = e), e || d)) {
            for (h = na.map(o(j, "script"), x), g = h.length; l > k; k++) f = j, k !== m && (f = na.clone(f, !0, !0), g && na.merge(h, o(f, "script"))), c.call(a[k], f, k);
            if (g)
                for (i = h[h.length - 1].ownerDocument, na.map(h, y), k = 0; g > k; k++) f = h[k], Pa.test(f.type || "") && !na._data(f, "globalEval") && na.contains(i, f) && (f.src ? na._evalUrl && na._evalUrl(f.src) : na.globalEval((f.text || f.textContent || f.innerHTML || "").replace(eb, "")));
            j = e = null
        }
        return a
    }

    function C(a, b, c) {
        for (var d, e = b ? na.filter(b, a) : a, f = 0; null != (d = e[f]); f++) c || 1 !== d.nodeType || na.cleanData(o(d)), d.parentNode && (c && na.contains(d.ownerDocument, d) && p(o(d, "script")), d.parentNode.removeChild(d));
        return a
    }

    function D(a, b) {
        var c = na(b.createElement(a)).appendTo(b.body),
            d = na.css(c[0], "display");
        return c.detach(), d
    }

    function E(a) {
        var b = da,
            c = ib[a];
        return c || (c = D(a, b), "none" !== c && c || (hb = (hb || na("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (hb[0].contentWindow || hb[0].contentDocument).document, b.write(), b.close(), c = D(a, b), hb.detach()), ib[a] = c), c
    }

    function F(a, b) {
        return {
            get: function() {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }

    function G(a) {
        if (a in xb) return a;
        for (var b = a.charAt(0).toUpperCase() + a.slice(1), c = wb.length; c--;)
            if ((a = wb[c] + b) in xb) return a
    }

    function H(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = na._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && La(d) && (f[g] = na._data(d, "olddisplay", E(d.nodeName)))) : (e = La(d), (c && "none" !== c || !e) && na._data(d, "olddisplay", e ? c : na.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }

    function I(a, b, c) {
        var d = tb.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }

    function J(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += na.css(a, c + Ka[f], !0, e)), d ? ("content" === c && (g -= na.css(a, "padding" + Ka[f], !0, e)), "margin" !== c && (g -= na.css(a, "border" + Ka[f] + "Width", !0, e))) : (g += na.css(a, "padding" + Ka[f], !0, e), "padding" !== c && (g += na.css(a, "border" + Ka[f] + "Width", !0, e)));
        return g
    }

    function K(a, b, c) {
        var d = !0,
            e = "width" === b ? a.offsetWidth : a.offsetHeight,
            f = nb(a),
            g = la.boxSizing && "border-box" === na.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = ob(a, b, f), (0 > e || null == e) && (e = a.style[b]), kb.test(e)) return e;
            d = g && (la.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + J(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }

    function L(a, b, c, d, e) {
        return new L.prototype.init(a, b, c, d, e)
    }

    function M() {
        return a.setTimeout(function() {
            yb = void 0
        }), yb = na.now()
    }

    function N(a, b) {
        var c, d = {
                height: a
            },
            e = 0;
        for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = Ka[e], d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a), d
    }

    function O(a, b, c) {
        for (var d, e = (R.tweeners[b] || []).concat(R.tweeners["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a)) return d
    }

    function P(a, b, c) {
        var d, e, f, g, h, i, j, k = this,
            l = {},
            m = a.style,
            n = a.nodeType && La(a),
            o = na._data(a, "fxshow");
        c.queue || (h = na._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
            h.unqueued || i()
        }), h.unqueued++, k.always(function() {
            k.always(function() {
                h.unqueued--, na.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [m.overflow, m.overflowX, m.overflowY], j = na.css(a, "display"), "inline" === ("none" === j ? na._data(a, "olddisplay") || E(a.nodeName) : j) && "none" === na.css(a, "float") && (la.inlineBlockNeedsLayout && "inline" !== E(a.nodeName) ? m.zoom = 1 : m.display = "inline-block")), c.overflow && (m.overflow = "hidden", la.shrinkWrapBlocks() || k.always(function() {
            m.overflow = c.overflow[0], m.overflowX = c.overflow[1], m.overflowY = c.overflow[2]
        }));
        for (d in b)
            if (e = b[d], Ab.exec(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (n ? "hide" : "show")) {
                    if ("show" !== e || !o || void 0 === o[d]) continue;
                    n = !0
                }
                l[d] = o && o[d] || na.style(a, d)
            } else j = void 0;
        if (na.isEmptyObject(l)) "inline" === ("none" === j ? E(a.nodeName) : j) && (m.display = j);
        else {
            o ? "hidden" in o && (n = o.hidden) : o = na._data(a, "fxshow", {}), f && (o.hidden = !n), n ? na(a).show() : k.done(function() {
                na(a).hide()
            }), k.done(function() {
                var b;
                na._removeData(a, "fxshow");
                for (b in l) na.style(a, b, l[b])
            });
            for (d in l) g = O(n ? o[d] : 0, d, k), d in o || (o[d] = g.start, n && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }

    function Q(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = na.camelCase(c), e = b[d], f = a[c], na.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), (g = na.cssHooks[d]) && "expand" in g) {
                f = g.expand(f), delete a[d];
                for (c in f) c in a || (a[c] = f[c], b[c] = e)
            } else b[d] = e
    }

    function R(a, b, c) {
        var d, e, f = 0,
            g = R.prefilters.length,
            h = na.Deferred().always(function() {
                delete i.elem
            }),
            i = function() {
                if (e) return !1;
                for (var b = yb || M(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
                return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
            },
            j = h.promise({
                elem: a,
                props: na.extend({}, b),
                opts: na.extend(!0, {
                    specialEasing: {},
                    easing: na.easing._default
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: yb || M(),
                duration: c.duration,
                tweens: [],
                createTween: function(b, c) {
                    var d = na.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d
                },
                stop: function(b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; d > c; c++) j.tweens[c].run(1);
                    return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        for (Q(k, j.opts.specialEasing); g > f; f++)
            if (d = R.prefilters[f].call(j, a, k, j.opts)) return na.isFunction(d.stop) && (na._queueHooks(j.elem, j.opts.queue).stop = na.proxy(d.stop, d)), d;
        return na.map(k, O, j), na.isFunction(j.opts.start) && j.opts.start.call(a, j), na.fx.timer(na.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }

    function S(a) {
        return na.attr(a, "class") || ""
    }

    function T(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(Ca) || [];
            if (na.isFunction(c))
                for (; d = f[e++];) "+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function U(a, b, c, d) {
        function e(h) {
            var i;
            return f[h] = !0, na.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || g || f[j] ? g ? !(i = j) : void 0 : (b.dataTypes.unshift(j), e(j), !1)
            }), i
        }
        var f = {},
            g = a === Zb;
        return e(b.dataTypes[0]) || !f["*"] && e("*")
    }

    function V(a, b) {
        var c, d, e = na.ajaxSettings.flatOptions || {};
        for (d in b) void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
        return c && na.extend(!0, a, c), a
    }

    function W(a, b, c) {
        for (var d, e, f, g, h = a.contents, i = a.dataTypes;
             "*" === i[0];) i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
        if (e)
            for (g in h)
                if (h[g] && h[g].test(e)) {
                    i.unshift(g);
                    break
                }
        if (i[0] in c) f = i[0];
        else {
            for (g in c) {
                if (!i[0] || a.converters[g + " " + i[0]]) {
                    f = g;
                    break
                }
                d || (d = g)
            }
            f = f || d
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }

    function X(a, b, c, d) {
        var e, f, g, h, i, j = {},
            k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        for (f = k.shift(); f;)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f) f = i;
                else if ("*" !== i && i !== f) {
                    if (!(g = j[i + " " + f] || j["* " + f]))
                        for (e in j)
                            if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                                !0 === g ? g = j[e] : !0 !== j[e] && (f = h[0], k.unshift(h[1]));
                                break
                            }
                    if (!0 !== g)
                        if (g && a.throws) b = g(b);
                        else try {
                            b = g(b)
                        } catch (a) {
                            return {
                                state: "parsererror",
                                error: g ? a : "No conversion from " + i + " to " + f
                            }
                        }
                }
        return {
            state: "success",
            data: b
        }
    }

    function Y(a) {
        return a.style && a.style.display || na.css(a, "display")
    }

    function Z(a) {
        if (!na.contains(a.ownerDocument || da, a)) return !0;
        for (; a && 1 === a.nodeType;) {
            if ("none" === Y(a) || "hidden" === a.type) return !0;
            a = a.parentNode
        }
        return !1
    }

    function $(a, b, c, d) {
        var e;
        if (na.isArray(b)) na.each(b, function(b, e) {
            c || cc.test(a) ? d(a, e) : $(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d)
        });
        else if (c || "object" !== na.type(b)) d(a, b);
        else
            for (e in b) $(a + "[" + e + "]", b[e], c, d)
    }

    function _() {
        try {
            return new a.XMLHttpRequest
        } catch (a) {}
    }

    function aa() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (a) {}
    }

    function ba(a) {
        return na.isWindow(a) ? a : 9 === a.nodeType && (a.defaultView || a.parentWindow)
    }
    var ca = [],
        da = a.document,
        ea = ca.slice,
        fa = ca.concat,
        ga = ca.push,
        ha = ca.indexOf,
        ia = {},
        ja = ia.toString,
        ka = ia.hasOwnProperty,
        la = {},
        ma = "1.12.4",
        na = function(a, b) {
            return new na.fn.init(a, b)
        },
        oa = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        pa = /^-ms-/,
        qa = /-([\da-z])/gi,
        ra = function(a, b) {
            return b.toUpperCase()
        };
    na.fn = na.prototype = {
        jquery: ma,
        constructor: na,
        selector: "",
        length: 0,
        toArray: function() {
            return ea.call(this)
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : ea.call(this)
        },
        pushStack: function(a) {
            var b = na.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        },
        each: function(a) {
            return na.each(this, a)
        },
        map: function(a) {
            return this.pushStack(na.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(ea.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length,
                c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: ga,
        sort: ca.sort,
        splice: ca.splice
    }, na.extend = na.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || na.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
            if (null != (e = arguments[h]))
                for (d in e) a = g[d], c = e[d], g !== c && (j && c && (na.isPlainObject(c) || (b = na.isArray(c))) ? (b ? (b = !1, f = a && na.isArray(a) ? a : []) : f = a && na.isPlainObject(a) ? a : {}, g[d] = na.extend(j, f, c)) : void 0 !== c && (g[d] = c));
        return g
    }, na.extend({
        expando: "jQuery" + (ma + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a)
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === na.type(a)
        },
        isArray: Array.isArray || function(a) {
            return "array" === na.type(a)
        },
        isWindow: function(a) {
            return null != a && a == a.window
        },
        isNumeric: function(a) {
            var b = a && a.toString();
            return !na.isArray(a) && b - parseFloat(b) + 1 >= 0
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) return !1;
            return !0
        },
        isPlainObject: function(a) {
            var b;
            if (!a || "object" !== na.type(a) || a.nodeType || na.isWindow(a)) return !1;
            try {
                if (a.constructor && !ka.call(a, "constructor") && !ka.call(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (a) {
                return !1
            }
            if (!la.ownFirst)
                for (b in a) return ka.call(a, b);
            for (b in a);
            return void 0 === b || ka.call(a, b)
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? ia[ja.call(a)] || "object" : typeof a
        },
        globalEval: function(b) {
            b && na.trim(b) && (a.execScript || function(b) {
                a.eval.call(a, b)
            })(b)
        },
        camelCase: function(a) {
            return a.replace(pa, "ms-").replace(qa, ra)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b) {
            var d, e = 0;
            if (c(a))
                for (d = a.length; d > e && !1 !== b.call(a[e], e, a[e]); e++);
            else
                for (e in a)
                    if (!1 === b.call(a[e], e, a[e])) break; return a
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(oa, "")
        },
        makeArray: function(a, b) {
            var d = b || [];
            return null != a && (c(Object(a)) ? na.merge(d, "string" == typeof a ? [a] : a) : ga.call(d, a)), d
        },
        inArray: function(a, b, c) {
            var d;
            if (b) {
                if (ha) return ha.call(b, a, c);
                for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)
                    if (c in b && b[c] === a) return c
            }
            return -1
        },
        merge: function(a, b) {
            for (var c = +b.length, d = 0, e = a.length; c > d;) a[e++] = b[d++];
            if (c !== c)
                for (; void 0 !== b[d];) a[e++] = b[d++];
            return a.length = e, a
        },
        grep: function(a, b, c) {
            for (var d = [], e = 0, f = a.length, g = !c; f > e; e++) !b(a[e], e) !== g && d.push(a[e]);
            return d
        },
        map: function(a, b, d) {
            var e, f, g = 0,
                h = [];
            if (c(a))
                for (e = a.length; e > g; g++) null != (f = b(a[g], g, d)) && h.push(f);
            else
                for (g in a) null != (f = b(a[g], g, d)) && h.push(f);
            return fa.apply([], h)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, d, e;
            return "string" == typeof b && (e = a[b], b = a, a = e), na.isFunction(a) ? (c = ea.call(arguments, 2), d = function() {
                return a.apply(b || this, c.concat(ea.call(arguments)))
            }, d.guid = a.guid = a.guid || na.guid++, d) : void 0
        },
        now: function() {
            return +new Date
        },
        support: la
    }), "function" == typeof Symbol && (na.fn[Symbol.iterator] = ca[Symbol.iterator]), na.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) {
        ia["[object " + b + "]"] = b.toLowerCase()
    });
    var sa = function(a) {
        function b(a, b, c, d) {
            var e, f, g, h, i, j, l, n, o = b && b.ownerDocument,
                p = b ? b.nodeType : 9;
            if (c = c || [], "string" != typeof a || !a || 1 !== p && 9 !== p && 11 !== p) return c;
            if (!d && ((b ? b.ownerDocument || b : O) !== G && F(b), b = b || G, I)) {
                if (11 !== p && (j = ra.exec(a)))
                    if (e = j[1]) {
                        if (9 === p) {
                            if (!(g = b.getElementById(e))) return c;
                            if (g.id === e) return c.push(g), c
                        } else if (o && (g = o.getElementById(e)) && M(b, g) && g.id === e) return c.push(g), c
                    } else {
                        if (j[2]) return $.apply(c, b.getElementsByTagName(a)), c;
                        if ((e = j[3]) && v.getElementsByClassName && b.getElementsByClassName) return $.apply(c, b.getElementsByClassName(e)), c
                    }
                if (v.qsa && !T[a + " "] && (!J || !J.test(a))) {
                    if (1 !== p) o = b, n = a;
                    else if ("object" !== b.nodeName.toLowerCase()) {
                        for ((h = b.getAttribute("id")) ? h = h.replace(ta, "\\$&") : b.setAttribute("id", h = N), l = z(a), f = l.length, i = ma.test(h) ? "#" + h : "[id='" + h + "']"; f--;) l[f] = i + " " + m(l[f]);
                        n = l.join(","), o = sa.test(a) && k(b.parentNode) || b
                    }
                    if (n) try {
                        return $.apply(c, o.querySelectorAll(n)), c
                    } catch (a) {} finally {
                        h === N && b.removeAttribute("id")
                    }
                }
            }
            return B(a.replace(ha, "$1"), b, c, d)
        }

        function c() {
            function a(c, d) {
                return b.push(c + " ") > w.cacheLength && delete a[b.shift()], a[c + " "] = d
            }
            var b = [];
            return a
        }

        function d(a) {
            return a[N] = !0, a
        }

        function e(a) {
            var b = G.createElement("div");
            try {
                return !!a(b)
            } catch (a) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function f(a, b) {
            for (var c = a.split("|"), d = c.length; d--;) w.attrHandle[c[d]] = b
        }

        function g(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || V) - (~a.sourceIndex || V);
            if (d) return d;
            if (c)
                for (; c = c.nextSibling;)
                    if (c === b) return -1;
            return a ? 1 : -1
        }

        function h(a) {
            return function(b) {
                return "input" === b.nodeName.toLowerCase() && b.type === a
            }
        }

        function i(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function j(a) {
            return d(function(b) {
                return b = +b, d(function(c, d) {
                    for (var e, f = a([], c.length, b), g = f.length; g--;) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function k(a) {
            return a && void 0 !== a.getElementsByTagName && a
        }

        function l() {}

        function m(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d
        }

        function n(a, b, c) {
            var d = b.dir,
                e = c && "parentNode" === d,
                f = Q++;
            return b.first ? function(b, c, f) {
                for (; b = b[d];)
                    if (1 === b.nodeType || e) return a(b, c, f)
            } : function(b, c, g) {
                var h, i, j, k = [P, f];
                if (g) {
                    for (; b = b[d];)
                        if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                } else
                    for (; b = b[d];)
                        if (1 === b.nodeType || e) {
                            if (j = b[N] || (b[N] = {}), i = j[b.uniqueID] || (j[b.uniqueID] = {}), (h = i[d]) && h[0] === P && h[1] === f) return k[2] = h[2];
                            if (i[d] = k, k[2] = a(b, c, g)) return !0
                        }
            }
        }

        function o(a) {
            return a.length > 1 ? function(b, c, d) {
                for (var e = a.length; e--;)
                    if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }

        function p(a, c, d) {
            for (var e = 0, f = c.length; f > e; e++) b(a, c[e], d);
            return d
        }

        function q(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
            return g
        }

        function r(a, b, c, e, f, g) {
            return e && !e[N] && (e = r(e)), f && !f[N] && (f = r(f, g)), d(function(d, g, h, i) {
                var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    r = d || p(b || "*", h.nodeType ? [h] : h, []),
                    s = !a || !d && b ? r : q(r, m, a, h, i),
                    t = c ? f || (d ? a : o || e) ? [] : g : s;
                if (c && c(s, t, h, i), e)
                    for (j = q(t, n), e(j, [], h, i), k = j.length; k--;)(l = j[k]) && (t[n[k]] = !(s[n[k]] = l));
                if (d) {
                    if (f || a) {
                        if (f) {
                            for (j = [], k = t.length; k--;)(l = t[k]) && j.push(s[k] = l);
                            f(null, t = [], j, i)
                        }
                        for (k = t.length; k--;)(l = t[k]) && (j = f ? aa(d, l) : m[k]) > -1 && (d[j] = !(g[j] = l))
                    }
                } else t = q(t === g ? t.splice(o, t.length) : t), f ? f(null, g, t, i) : $.apply(g, t)
            })
        }

        function s(a) {
            for (var b, c, d, e = a.length, f = w.relative[a[0].type], g = f || w.relative[" "], h = f ? 1 : 0, i = n(function(a) {
                return a === b
            }, g, !0), j = n(function(a) {
                return aa(b, a) > -1
            }, g, !0), k = [function(a, c, d) {
                var e = !f && (d || c !== C) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d));
                return b = null, e
            }]; e > h; h++)
                if (c = w.relative[a[h].type]) k = [n(o(k), c)];
                else {
                    if (c = w.filter[a[h].type].apply(null, a[h].matches), c[N]) {
                        for (d = ++h; e > d && !w.relative[a[d].type]; d++);
                        return r(h > 1 && o(k), h > 1 && m(a.slice(0, h - 1).concat({
                                value: " " === a[h - 2].type ? "*" : ""
                            })).replace(ha, "$1"), c, d > h && s(a.slice(h, d)), e > d && s(a = a.slice(d)), e > d && m(a))
                    }
                    k.push(c)
                }
            return o(k)
        }

        function t(a, c) {
            var e = c.length > 0,
                f = a.length > 0,
                g = function(d, g, h, i, j) {
                    var k, l, m, n = 0,
                        o = "0",
                        p = d && [],
                        r = [],
                        s = C,
                        t = d || f && w.find.TAG("*", j),
                        u = P += null == s ? 1 : Math.random() || .1,
                        v = t.length;
                    for (j && (C = g === G || g || j); o !== v && null != (k = t[o]); o++) {
                        if (f && k) {
                            for (l = 0, g || k.ownerDocument === G || (F(k), h = !I); m = a[l++];)
                                if (m(k, g || G, h)) {
                                    i.push(k);
                                    break
                                }
                            j && (P = u)
                        }
                        e && ((k = !m && k) && n--, d && p.push(k))
                    }
                    if (n += o, e && o !== n) {
                        for (l = 0; m = c[l++];) m(p, r, g, h);
                        if (d) {
                            if (n > 0)
                                for (; o--;) p[o] || r[o] || (r[o] = Y.call(i));
                            r = q(r)
                        }
                        $.apply(i, r), j && !d && r.length > 0 && n + c.length > 1 && b.uniqueSort(i)
                    }
                    return j && (P = u, C = s), p
                };
            return e ? d(g) : g
        }
        var u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N = "sizzle" + 1 * new Date,
            O = a.document,
            P = 0,
            Q = 0,
            R = c(),
            S = c(),
            T = c(),
            U = function(a, b) {
                return a === b && (E = !0), 0
            },
            V = 1 << 31,
            W = {}.hasOwnProperty,
            X = [],
            Y = X.pop,
            Z = X.push,
            $ = X.push,
            _ = X.slice,
            aa = function(a, b) {
                for (var c = 0, d = a.length; d > c; c++)
                    if (a[c] === b) return c;
                return -1
            },
            ba = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ca = "[\\x20\\t\\r\\n\\f]",
            da = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            ea = "\\[" + ca + "*(" + da + ")(?:" + ca + "*([*^$|!~]?=)" + ca + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + da + "))|)" + ca + "*\\]",
            fa = ":(" + da + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ea + ")*)|.*)\\)|)",
            ga = new RegExp(ca + "+", "g"),
            ha = new RegExp("^" + ca + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ca + "+$", "g"),
            ia = new RegExp("^" + ca + "*," + ca + "*"),
            ja = new RegExp("^" + ca + "*([>+~]|" + ca + ")" + ca + "*"),
            ka = new RegExp("=" + ca + "*([^\\]'\"]*?)" + ca + "*\\]", "g"),
            la = new RegExp(fa),
            ma = new RegExp("^" + da + "$"),
            na = {
                ID: new RegExp("^#(" + da + ")"),
                CLASS: new RegExp("^\\.(" + da + ")"),
                TAG: new RegExp("^(" + da + "|[*])"),
                ATTR: new RegExp("^" + ea),
                PSEUDO: new RegExp("^" + fa),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ca + "*(even|odd|(([+-]|)(\\d*)n|)" + ca + "*(?:([+-]|)" + ca + "*(\\d+)|))" + ca + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + ba + ")$", "i"),
                needsContext: new RegExp("^" + ca + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ca + "*((?:-\\d)?\\d*)" + ca + "*\\)|)(?=[^-]|$)", "i")
            },
            oa = /^(?:input|select|textarea|button)$/i,
            pa = /^h\d$/i,
            qa = /^[^{]+\{\s*\[native \w/,
            ra = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            sa = /[+~]/,
            ta = /'|\\/g,
            ua = new RegExp("\\\\([\\da-f]{1,6}" + ca + "?|(" + ca + ")|.)", "ig"),
            va = function(a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            },
            wa = function() {
                F()
            };
        try {
            $.apply(X = _.call(O.childNodes), O.childNodes), X[O.childNodes.length].nodeType
        } catch (a) {
            $ = {
                apply: X.length ? function(a, b) {
                    Z.apply(a, _.call(b))
                } : function(a, b) {
                    for (var c = a.length, d = 0; a[c++] = b[d++];);
                    a.length = c - 1
                }
            }
        }
        v = b.support = {}, y = b.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return !!b && "HTML" !== b.nodeName
        }, F = b.setDocument = function(a) {
            var b, c, d = a ? a.ownerDocument || a : O;
            return d !== G && 9 === d.nodeType && d.documentElement ? (G = d, H = G.documentElement, I = !y(G), (c = G.defaultView) && c.top !== c && (c.addEventListener ? c.addEventListener("unload", wa, !1) : c.attachEvent && c.attachEvent("onunload", wa)), v.attributes = e(function(a) {
                return a.className = "i", !a.getAttribute("className")
            }), v.getElementsByTagName = e(function(a) {
                return a.appendChild(G.createComment("")), !a.getElementsByTagName("*").length
            }), v.getElementsByClassName = qa.test(G.getElementsByClassName), v.getById = e(function(a) {
                return H.appendChild(a).id = N, !G.getElementsByName || !G.getElementsByName(N).length
            }), v.getById ? (w.find.ID = function(a, b) {
                if (void 0 !== b.getElementById && I) {
                    var c = b.getElementById(a);
                    return c ? [c] : []
                }
            }, w.filter.ID = function(a) {
                var b = a.replace(ua, va);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete w.find.ID, w.filter.ID = function(a) {
                var b = a.replace(ua, va);
                return function(a) {
                    var c = void 0 !== a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), w.find.TAG = v.getElementsByTagName ? function(a, b) {
                return void 0 !== b.getElementsByTagName ? b.getElementsByTagName(a) : v.qsa ? b.querySelectorAll(a) : void 0
            } : function(a, b) {
                var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                if ("*" === a) {
                    for (; c = f[e++];) 1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, w.find.CLASS = v.getElementsByClassName && function(a, b) {
                    return void 0 !== b.getElementsByClassName && I ? b.getElementsByClassName(a) : void 0
                }, K = [], J = [], (v.qsa = qa.test(G.querySelectorAll)) && (e(function(a) {
                H.appendChild(a).innerHTML = "<a id='" + N + "'></a><select id='" + N + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && J.push("[*^$]=" + ca + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || J.push("\\[" + ca + "*(?:value|" + ba + ")"), a.querySelectorAll("[id~=" + N + "-]").length || J.push("~="), a.querySelectorAll(":checked").length || J.push(":checked"), a.querySelectorAll("a#" + N + "+*").length || J.push(".#.+[+~]")
            }), e(function(a) {
                var b = G.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && J.push("name" + ca + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || J.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), J.push(",.*:")
            })), (v.matchesSelector = qa.test(L = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && e(function(a) {
                v.disconnectedMatch = L.call(a, "div"), L.call(a, "[s!='']:x"), K.push("!=", fa)
            }), J = J.length && new RegExp(J.join("|")), K = K.length && new RegExp(K.join("|")), b = qa.test(H.compareDocumentPosition), M = b || qa.test(H.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function(a, b) {
                if (b)
                    for (; b = b.parentNode;)
                        if (b === a) return !0;
                return !1
            }, U = b ? function(a, b) {
                if (a === b) return E = !0, 0;
                var c = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return c || (c = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & c || !v.sortDetached && b.compareDocumentPosition(a) === c ? a === G || a.ownerDocument === O && M(O, a) ? -1 : b === G || b.ownerDocument === O && M(O, b) ? 1 : D ? aa(D, a) - aa(D, b) : 0 : 4 & c ? -1 : 1)
            } : function(a, b) {
                if (a === b) return E = !0, 0;
                var c, d = 0,
                    e = a.parentNode,
                    f = b.parentNode,
                    h = [a],
                    i = [b];
                if (!e || !f) return a === G ? -1 : b === G ? 1 : e ? -1 : f ? 1 : D ? aa(D, a) - aa(D, b) : 0;
                if (e === f) return g(a, b);
                for (c = a; c = c.parentNode;) h.unshift(c);
                for (c = b; c = c.parentNode;) i.unshift(c);
                for (; h[d] === i[d];) d++;
                return d ? g(h[d], i[d]) : h[d] === O ? -1 : i[d] === O ? 1 : 0
            }, G) : G
        }, b.matches = function(a, c) {
            return b(a, null, null, c)
        }, b.matchesSelector = function(a, c) {
            if ((a.ownerDocument || a) !== G && F(a), c = c.replace(ka, "='$1']"), v.matchesSelector && I && !T[c + " "] && (!K || !K.test(c)) && (!J || !J.test(c))) try {
                var d = L.call(a, c);
                if (d || v.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
            } catch (a) {}
            return b(c, G, null, [a]).length > 0
        }, b.contains = function(a, b) {
            return (a.ownerDocument || a) !== G && F(a), M(a, b)
        }, b.attr = function(a, b) {
            (a.ownerDocument || a) !== G && F(a);
            var c = w.attrHandle[b.toLowerCase()],
                d = c && W.call(w.attrHandle, b.toLowerCase()) ? c(a, b, !I) : void 0;
            return void 0 !== d ? d : v.attributes || !I ? a.getAttribute(b) : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }, b.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, b.uniqueSort = function(a) {
            var b, c = [],
                d = 0,
                e = 0;
            if (E = !v.detectDuplicates, D = !v.sortStable && a.slice(0), a.sort(U), E) {
                for (; b = a[e++];) b === a[e] && (d = c.push(e));
                for (; d--;) a.splice(c[d], 1)
            }
            return D = null, a
        }, x = b.getText = function(a) {
            var b, c = "",
                d = 0,
                e = a.nodeType;
            if (e) {
                if (1 === e || 9 === e || 11 === e) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += x(a)
                } else if (3 === e || 4 === e) return a.nodeValue
            } else
                for (; b = a[d++];) c += x(b);
            return c
        }, w = b.selectors = {
            cacheLength: 50,
            createPseudo: d,
            match: na,
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
                ATTR: function(a) {
                    return a[1] = a[1].replace(ua, va), a[3] = (a[3] || a[4] || a[5] || "").replace(ua, va), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]), a
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return na.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && la.test(c) && (b = z(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(ua, va).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = R[a + " "];
                    return b || (b = new RegExp("(^|" + ca + ")" + a + "(" + ca + "|$)")) && R(a, function(a) {
                            return b.test("string" == typeof a.className && a.className || void 0 !== a.getAttribute && a.getAttribute("class") || "")
                        })
                },
                ATTR: function(a, c, d) {
                    return function(e) {
                        var f = b.attr(e, a);
                        return null == f ? "!=" === c : !c || (f += "", "=" === c ? f === d : "!=" === c ? f !== d : "^=" === c ? d && 0 === f.indexOf(d) : "*=" === c ? d && f.indexOf(d) > -1 : "$=" === c ? d && f.slice(-d.length) === d : "~=" === c ? (" " + f.replace(ga, " ") + " ").indexOf(d) > -1 : "|=" === c && (f === d || f.slice(0, d.length + 1) === d + "-"))
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h,
                            t = !1;
                        if (q) {
                            if (f) {
                                for (; p;) {
                                    for (m = b; m = m[p];)
                                        if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                for (m = q, l = m[N] || (m[N] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === P && j[1], t = n && j[2], m = n && q.childNodes[n]; m = ++n && m && m[p] || (t = n = 0) || o.pop();)
                                    if (1 === m.nodeType && ++t && m === b) {
                                        k[a] = [P, n, t];
                                        break
                                    }
                            } else if (s && (m = b, l = m[N] || (m[N] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === P && j[1], t = n), !1 === t)
                                for (;
                                    (m = ++n && m && m[p] || (t = n = 0) || o.pop()) && ((h ? m.nodeName.toLowerCase() !== r : 1 !== m.nodeType) || !++t || (s && (l = m[N] || (m[N] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [P, t]), m !== b)););
                            return (t -= e) === d || t % d == 0 && t / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, c) {
                    var e, f = w.pseudos[a] || w.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
                    return f[N] ? f(c) : f.length > 1 ? (e = [a, a, "", c], w.setFilters.hasOwnProperty(a.toLowerCase()) ? d(function(a, b) {
                        for (var d, e = f(a, c), g = e.length; g--;) d = aa(a, e[g]), a[d] = !(b[d] = e[g])
                    }) : function(a) {
                        return f(a, 0, e)
                    }) : f
                }
            },
            pseudos: {
                not: d(function(a) {
                    var b = [],
                        c = [],
                        e = A(a.replace(ha, "$1"));
                    return e[N] ? d(function(a, b, c, d) {
                        for (var f, g = e(a, null, d, []), h = a.length; h--;)(f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function(a, d, f) {
                        return b[0] = a, e(b, null, f, c), b[0] = null, !c.pop()
                    }
                }),
                has: d(function(a) {
                    return function(c) {
                        return b(a, c).length > 0
                    }
                }),
                contains: d(function(a) {
                    return a = a.replace(ua, va),
                        function(b) {
                            return (b.textContent || b.innerText || x(b)).indexOf(a) > -1
                        }
                }),
                lang: d(function(a) {
                    return ma.test(a || "") || b.error("unsupported lang: " + a), a = a.replace(ua, va).toLowerCase(),
                        function(b) {
                            var c;
                            do {
                                if (c = I ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return (c = c.toLowerCase()) === a || 0 === c.indexOf(a + "-")
                            } while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1
                        }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === H
                },
                focus: function(a) {
                    return a === G.activeElement && (!G.hasFocus || G.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: function(a) {
                    return !1 === a.disabled
                },
                disabled: function(a) {
                    return !0 === a.disabled
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, !0 === a.selected
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6) return !1;
                    return !0
                },
                parent: function(a) {
                    return !w.pseudos.empty(a)
                },
                header: function(a) {
                    return pa.test(a.nodeName)
                },
                input: function(a) {
                    return oa.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: j(function() {
                    return [0]
                }),
                last: j(function(a, b) {
                    return [b - 1]
                }),
                eq: j(function(a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: j(function(a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a
                }),
                odd: j(function(a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a
                }),
                lt: j(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
                    return a
                }),
                gt: j(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
                    return a
                })
            }
        }, w.pseudos.nth = w.pseudos.eq;
        for (u in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) w.pseudos[u] = h(u);
        for (u in {
            submit: !0,
            reset: !0
        }) w.pseudos[u] = i(u);
        return l.prototype = w.filters = w.pseudos, w.setFilters = new l, z = b.tokenize = function(a, c) {
            var d, e, f, g, h, i, j, k = S[a + " "];
            if (k) return c ? 0 : k.slice(0);
            for (h = a, i = [], j = w.preFilter; h;) {
                d && !(e = ia.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), d = !1, (e = ja.exec(h)) && (d = e.shift(), f.push({
                    value: d,
                    type: e[0].replace(ha, " ")
                }), h = h.slice(d.length));
                for (g in w.filter) !(e = na[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(), f.push({
                    value: d,
                    type: g,
                    matches: e
                }), h = h.slice(d.length));
                if (!d) break
            }
            return c ? h.length : h ? b.error(a) : S(a, i).slice(0)
        }, A = b.compile = function(a, b) {
            var c, d = [],
                e = [],
                f = T[a + " "];
            if (!f) {
                for (b || (b = z(a)), c = b.length; c--;) f = s(b[c]), f[N] ? d.push(f) : e.push(f);
                f = T(a, t(e, d)), f.selector = a
            }
            return f
        }, B = b.select = function(a, b, c, d) {
            var e, f, g, h, i, j = "function" == typeof a && a,
                l = !d && z(a = j.selector || a);
            if (c = c || [], 1 === l.length) {
                if (f = l[0] = l[0].slice(0), f.length > 2 && "ID" === (g = f[0]).type && v.getById && 9 === b.nodeType && I && w.relative[f[1].type]) {
                    if (!(b = (w.find.ID(g.matches[0].replace(ua, va), b) || [])[0])) return c;
                    j && (b = b.parentNode), a = a.slice(f.shift().value.length)
                }
                for (e = na.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e], !w.relative[h = g.type]);)
                    if ((i = w.find[h]) && (d = i(g.matches[0].replace(ua, va), sa.test(f[0].type) && k(b.parentNode) || b))) {
                        if (f.splice(e, 1), !(a = d.length && m(f))) return $.apply(c, d), c;
                        break
                    }
            }
            return (j || A(a, l))(d, b, !I, c, !b || sa.test(a) && k(b.parentNode) || b), c
        }, v.sortStable = N.split("").sort(U).join("") === N, v.detectDuplicates = !!E, F(), v.sortDetached = e(function(a) {
            return 1 & a.compareDocumentPosition(G.createElement("div"))
        }), e(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || f("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), v.attributes && e(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || f("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), e(function(a) {
            return null == a.getAttribute("disabled")
        }) || f(ba, function(a, b, c) {
            var d;
            return c ? void 0 : !0 === a[b] ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), b
    }(a);
    na.find = sa, na.expr = sa.selectors, na.expr[":"] = na.expr.pseudos, na.uniqueSort = na.unique = sa.uniqueSort, na.text = sa.getText, na.isXMLDoc = sa.isXML, na.contains = sa.contains;
    var ta = function(a, b, c) {
            for (var d = [], e = void 0 !== c;
                 (a = a[b]) && 9 !== a.nodeType;)
                if (1 === a.nodeType) {
                    if (e && na(a).is(c)) break;
                    d.push(a)
                }
            return d
        },
        ua = function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        },
        va = na.expr.match.needsContext,
        wa = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        xa = /^.[^:#\[\.,]*$/;
    na.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? na.find.matchesSelector(d, a) ? [d] : [] : na.find.matches(a, na.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    }, na.fn.extend({
        find: function(a) {
            var b, c = [],
                d = this,
                e = d.length;
            if ("string" != typeof a) return this.pushStack(na(a).filter(function() {
                for (b = 0; e > b; b++)
                    if (na.contains(d[b], this)) return !0
            }));
            for (b = 0; e > b; b++) na.find(a, d[b], c);
            return c = this.pushStack(e > 1 ? na.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c
        },
        filter: function(a) {
            return this.pushStack(d(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(d(this, a || [], !0))
        },
        is: function(a) {
            return !!d(this, "string" == typeof a && va.test(a) ? na(a) : a || [], !1).length
        }
    });
    var ya, za = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (na.fn.init = function(a, b, c) {
        var d, e;
        if (!a) return this;
        if (c = c || ya, "string" == typeof a) {
            if (!(d = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : za.exec(a)) || !d[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
            if (d[1]) {
                if (b = b instanceof na ? b[0] : b, na.merge(this, na.parseHTML(d[1], b && b.nodeType ? b.ownerDocument || b : da, !0)), wa.test(d[1]) && na.isPlainObject(b))
                    for (d in b) na.isFunction(this[d]) ? this[d](b[d]) : this.attr(d, b[d]);
                return this
            }
            if ((e = da.getElementById(d[2])) && e.parentNode) {
                if (e.id !== d[2]) return ya.find(a);
                this.length = 1, this[0] = e
            }
            return this.context = da, this.selector = a, this
        }
        return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : na.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(na) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), na.makeArray(a, this))
    }).prototype = na.fn, ya = na(da);
    var Aa = /^(?:parents|prev(?:Until|All))/,
        Ba = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    na.fn.extend({
        has: function(a) {
            var b, c = na(a, this),
                d = c.length;
            return this.filter(function() {
                for (b = 0; d > b; b++)
                    if (na.contains(this, c[b])) return !0
            })
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = va.test(a) || "string" != typeof a ? na(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && na.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    }
            return this.pushStack(f.length > 1 ? na.uniqueSort(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? na.inArray(this[0], na(a)) : na.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            return this.pushStack(na.uniqueSort(na.merge(this.get(), na(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    }), na.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function(a) {
            return ta(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return ta(a, "parentNode", c)
        },
        next: function(a) {
            return e(a, "nextSibling")
        },
        prev: function(a) {
            return e(a, "previousSibling")
        },
        nextAll: function(a) {
            return ta(a, "nextSibling")
        },
        prevAll: function(a) {
            return ta(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return ta(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return ta(a, "previousSibling", c)
        },
        siblings: function(a) {
            return ua((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return ua(a.firstChild)
        },
        contents: function(a) {
            return na.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : na.merge([], a.childNodes)
        }
    }, function(a, b) {
        na.fn[a] = function(c, d) {
            var e = na.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = na.filter(d, e)), this.length > 1 && (Ba[a] || (e = na.uniqueSort(e)), Aa.test(a) && (e = e.reverse())), this.pushStack(e)
        }
    });
    var Ca = /\S+/g;
    na.Callbacks = function(a) {
        a = "string" == typeof a ? f(a) : na.extend({}, a);
        var b, c, d, e, g = [],
            h = [],
            i = -1,
            j = function() {
                for (e = a.once, d = b = !0; h.length; i = -1)
                    for (c = h.shift(); ++i < g.length;) !1 === g[i].apply(c[0], c[1]) && a.stopOnFalse && (i = g.length, c = !1);
                a.memory || (c = !1), b = !1, e && (g = c ? [] : "")
            },
            k = {
                add: function() {
                    return g && (c && !b && (i = g.length - 1, h.push(c)), function b(c) {
                        na.each(c, function(c, d) {
                            na.isFunction(d) ? a.unique && k.has(d) || g.push(d) : d && d.length && "string" !== na.type(d) && b(d)
                        })
                    }(arguments), c && !b && j()), this
                },
                remove: function() {
                    return na.each(arguments, function(a, b) {
                        for (var c;
                             (c = na.inArray(b, g, c)) > -1;) g.splice(c, 1), i >= c && i--
                    }), this
                },
                has: function(a) {
                    return a ? na.inArray(a, g) > -1 : g.length > 0
                },
                empty: function() {
                    return g && (g = []), this
                },
                disable: function() {
                    return e = h = [], g = c = "", this
                },
                disabled: function() {
                    return !g
                },
                lock: function() {
                    return e = !0, c || k.disable(), this
                },
                locked: function() {
                    return !!e
                },
                fireWith: function(a, c) {
                    return e || (c = c || [], c = [a, c.slice ? c.slice() : c], h.push(c), b || j()), this
                },
                fire: function() {
                    return k.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!d
                }
            };
        return k
    }, na.extend({
        Deferred: function(a) {
            var b = [
                    ["resolve", "done", na.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", na.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", na.Callbacks("memory")]
                ],
                c = "pending",
                d = {
                    state: function() {
                        return c
                    },
                    always: function() {
                        return e.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var a = arguments;
                        return na.Deferred(function(c) {
                            na.each(b, function(b, f) {
                                var g = na.isFunction(a[b]) && a[b];
                                e[f[1]](function() {
                                    var a = g && g.apply(this, arguments);
                                    a && na.isFunction(a.promise) ? a.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    },
                    promise: function(a) {
                        return null != a ? na.extend(a, d) : d
                    }
                },
                e = {};
            return d.pipe = d.then, na.each(b, function(a, f) {
                var g = f[2],
                    h = f[3];
                d[f[1]] = g.add, h && g.add(function() {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        },
        when: function(a) {
            var b, c, d, e = 0,
                f = ea.call(arguments),
                g = f.length,
                h = 1 !== g || a && na.isFunction(a.promise) ? g : 0,
                i = 1 === h ? a : na.Deferred(),
                j = function(a, c, d) {
                    return function(e) {
                        c[a] = this, d[a] = arguments.length > 1 ? ea.call(arguments) : e, d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d)
                    }
                };
            if (g > 1)
                for (b = new Array(g), c = new Array(g), d = new Array(g); g > e; e++) f[e] && na.isFunction(f[e].promise) ? f[e].promise().progress(j(e, c, b)).done(j(e, d, f)).fail(i.reject) : --h;
            return h || i.resolveWith(d, f), i.promise()
        }
    });
    var Da;
    na.fn.ready = function(a) {
        return na.ready.promise().done(a), this
    }, na.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? na.readyWait++ : na.ready(!0)
        },
        ready: function(a) {
            (!0 === a ? --na.readyWait : na.isReady) || (na.isReady = !0, !0 !== a && --na.readyWait > 0 || (Da.resolveWith(da, [na]), na.fn.triggerHandler && (na(da).triggerHandler("ready"), na(da).off("ready"))))
        }
    }), na.ready.promise = function(b) {
        if (!Da)
            if (Da = na.Deferred(), "complete" === da.readyState || "loading" !== da.readyState && !da.documentElement.doScroll) a.setTimeout(na.ready);
            else if (da.addEventListener) da.addEventListener("DOMContentLoaded", h), a.addEventListener("load", h);
            else {
                da.attachEvent("onreadystatechange", h), a.attachEvent("onload", h);
                var c = !1;
                try {
                    c = null == a.frameElement && da.documentElement
                } catch (a) {}
                c && c.doScroll && function b() {
                    if (!na.isReady) {
                        try {
                            c.doScroll("left")
                        } catch (c) {
                            return a.setTimeout(b, 50)
                        }
                        g(), na.ready()
                    }
                }()
            }
        return Da.promise(b)
    }, na.ready.promise();
    var Ea;
    for (Ea in na(la)) break;
    la.ownFirst = "0" === Ea, la.inlineBlockNeedsLayout = !1, na(function() {
        var a, b, c, d;
        (c = da.getElementsByTagName("body")[0]) && c.style && (b = da.createElement("div"), d = da.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), void 0 !== b.style.zoom && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", la.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(d))
    }),
        function() {
            var a = da.createElement("div");
            la.deleteExpando = !0;
            try {
                delete a.test
            } catch (a) {
                la.deleteExpando = !1
            }
            a = null
        }();
    var Fa = function(a) {
            var b = na.noData[(a.nodeName + " ").toLowerCase()],
                c = +a.nodeType || 1;
            return (1 === c || 9 === c) && (!b || !0 !== b && a.getAttribute("classid") === b)
        },
        Ga = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Ha = /([A-Z])/g;
    na.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(a) {
            return !!(a = a.nodeType ? na.cache[a[na.expando]] : a[na.expando]) && !j(a)
        },
        data: function(a, b, c) {
            return k(a, b, c)
        },
        removeData: function(a, b) {
            return l(a, b)
        },
        _data: function(a, b, c) {
            return k(a, b, c, !0)
        },
        _removeData: function(a, b) {
            return l(a, b, !0)
        }
    }), na.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0],
                g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = na.data(f), 1 === f.nodeType && !na._data(f, "parsedAttrs"))) {
                    for (c = g.length; c--;) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = na.camelCase(d.slice(5)), i(f, d, e[d])));
                    na._data(f, "parsedAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function() {
                na.data(this, a)
            }) : arguments.length > 1 ? this.each(function() {
                na.data(this, a, b)
            }) : f ? i(f, a, na.data(f, a)) : void 0
        },
        removeData: function(a) {
            return this.each(function() {
                na.removeData(this, a)
            })
        }
    }), na.extend({
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = na._data(a, b), c && (!d || na.isArray(c) ? d = na._data(a, b, na.makeArray(c)) : d.push(c)), d || []) : void 0
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = na.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = na._queueHooks(a, b),
                g = function() {
                    na.dequeue(a, b)
                };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return na._data(a, c) || na._data(a, c, {
                    empty: na.Callbacks("once memory").add(function() {
                        na._removeData(a, b + "queue"), na._removeData(a, c)
                    })
                })
        }
    }), na.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? na.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = na.queue(this, a, b);
                na._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && na.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                na.dequeue(this, a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, b) {
            var c, d = 1,
                e = na.Deferred(),
                f = this,
                g = this.length,
                h = function() {
                    --d || e.resolveWith(f, [f])
                };
            for ("string" != typeof a && (b = a, a = void 0), a = a || "fx"; g--;)(c = na._data(f[g], a + "queueHooks")) && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b)
        }
    }),
        function() {
            var a;
            la.shrinkWrapBlocks = function() {
                if (null != a) return a;
                a = !1;
                var b, c, d;
                return c = da.getElementsByTagName("body")[0], c && c.style ? (b = da.createElement("div"), d = da.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), void 0 !== b.style.zoom && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", b.appendChild(da.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), c.removeChild(d), a) : void 0
            }
        }();
    var Ia = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Ja = new RegExp("^(?:([+-])=|)(" + Ia + ")([a-z%]*)$", "i"),
        Ka = ["Top", "Right", "Bottom", "Left"],
        La = function(a, b) {
            return a = b || a, "none" === na.css(a, "display") || !na.contains(a.ownerDocument, a)
        },
        Ma = function(a, b, c, d, e, f, g) {
            var h = 0,
                i = a.length,
                j = null == c;
            if ("object" === na.type(c)) {
                e = !0;
                for (h in c) Ma(a, b, h, c[h], !0, f, g)
            } else if (void 0 !== d && (e = !0, na.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
                    return j.call(na(a), c)
                })), b))
                for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
            return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
        },
        Na = /^(?:checkbox|radio)$/i,
        Oa = /<([\w:-]+)/,
        Pa = /^$|\/(?:java|ecma)script/i,
        Qa = /^\s+/,
        Ra = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
    ! function() {
        var a = da.createElement("div"),
            b = da.createDocumentFragment(),
            c = da.createElement("input");
        a.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", la.leadingWhitespace = 3 === a.firstChild.nodeType, la.tbody = !a.getElementsByTagName("tbody").length, la.htmlSerialize = !!a.getElementsByTagName("link").length, la.html5Clone = "<:nav></:nav>" !== da.createElement("nav").cloneNode(!0).outerHTML, c.type = "checkbox", c.checked = !0, b.appendChild(c), la.appendChecked = c.checked, a.innerHTML = "<textarea>x</textarea>", la.noCloneChecked = !!a.cloneNode(!0).lastChild.defaultValue, b.appendChild(a), c = da.createElement("input"), c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), a.appendChild(c), la.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, la.noCloneEvent = !!a.addEventListener, a[na.expando] = 1, la.attributes = !a.getAttribute(na.expando)
    }();
    var Sa = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: la.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    };
    Sa.optgroup = Sa.option, Sa.tbody = Sa.tfoot = Sa.colgroup = Sa.caption = Sa.thead, Sa.th = Sa.td;
    var Ta = /<|&#?\w+;/,
        Ua = /<tbody/i;
    ! function() {
        var b, c, d = da.createElement("div");
        for (b in {
            submit: !0,
            change: !0,
            focusin: !0
        }) c = "on" + b, (la[b] = c in a) || (d.setAttribute(c, "t"), la[b] = !1 === d.attributes[c].expando);
        d = null
    }();
    var Va = /^(?:input|select|textarea)$/i,
        Wa = /^key/,
        Xa = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Ya = /^(?:focusinfocus|focusoutblur)$/,
        Za = /^([^.]*)(?:\.(.+)|)/;
    na.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = na._data(a);
            if (q) {
                for (c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = na.guid++), (g = q.events) || (g = q.events = {}), (k = q.handle) || (k = q.handle = function(a) {
                    return void 0 === na || a && na.event.triggered === a.type ? void 0 : na.event.dispatch.apply(k.elem, arguments)
                }, k.elem = a), b = (b || "").match(Ca) || [""], h = b.length; h--;) f = Za.exec(b[h]) || [], n = p = f[1], o = (f[2] || "").split(".").sort(), n && (j = na.event.special[n] || {}, n = (e ? j.delegateType : j.bindType) || n, j = na.event.special[n] || {}, l = na.extend({
                    type: n,
                    origType: p,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && na.expr.match.needsContext.test(e),
                    namespace: o.join(".")
                }, i), (m = g[n]) || (m = g[n] = [], m.delegateCount = 0, j.setup && !1 !== j.setup.call(a, d, o, k) || (a.addEventListener ? a.addEventListener(n, k, !1) : a.attachEvent && a.attachEvent("on" + n, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, l) : m.push(l), na.event.global[n] = !0);
                a = null
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = na.hasData(a) && na._data(a);
            if (q && (k = q.events)) {
                for (b = (b || "").match(Ca) || [""], j = b.length; j--;)
                    if (h = Za.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                        for (l = na.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = k[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = m.length; f--;) g = m[f], !e && p !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (m.splice(f, 1), g.selector && m.delegateCount--, l.remove && l.remove.call(a, g));
                        i && !m.length && (l.teardown && !1 !== l.teardown.call(a, o, q.handle) || na.removeEvent(a, n, q.handle), delete k[n])
                    } else
                        for (n in k) na.event.remove(a, n + b[j], c, d, !0);
                na.isEmptyObject(k) && (delete q.handle, na._removeData(a, "events"))
            }
        },
        trigger: function(b, c, d, e) {
            var f, g, h, i, j, k, l, m = [d || da],
                n = ka.call(b, "type") ? b.type : b,
                o = ka.call(b, "namespace") ? b.namespace.split(".") : [];
            if (h = k = d = d || da, 3 !== d.nodeType && 8 !== d.nodeType && !Ya.test(n + na.event.triggered) && (n.indexOf(".") > -1 && (o = n.split("."), n = o.shift(), o.sort()), g = n.indexOf(":") < 0 && "on" + n, b = b[na.expando] ? b : new na.Event(n, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = o.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : na.makeArray(c, [b]), j = na.event.special[n] || {}, e || !j.trigger || !1 !== j.trigger.apply(d, c))) {
                if (!e && !j.noBubble && !na.isWindow(d)) {
                    for (i = j.delegateType || n, Ya.test(i + n) || (h = h.parentNode); h; h = h.parentNode) m.push(h), k = h;
                    k === (d.ownerDocument || da) && m.push(k.defaultView || k.parentWindow || a)
                }
                for (l = 0;
                     (h = m[l++]) && !b.isPropagationStopped();) b.type = l > 1 ? i : j.bindType || n, f = (na._data(h, "events") || {})[b.type] && na._data(h, "handle"), f && f.apply(h, c), (f = g && h[g]) && f.apply && Fa(h) && (b.result = f.apply(h, c), !1 === b.result && b.preventDefault());
                if (b.type = n, !e && !b.isDefaultPrevented() && (!j._default || !1 === j._default.apply(m.pop(), c)) && Fa(d) && g && d[n] && !na.isWindow(d)) {
                    k = d[g], k && (d[g] = null), na.event.triggered = n;
                    try {
                        d[n]()
                    } catch (a) {}
                    na.event.triggered = void 0, k && (d[g] = k)
                }
                return b.result
            }
        },
        dispatch: function(a) {
            a = na.event.fix(a);
            var b, c, d, e, f, g = [],
                h = ea.call(arguments),
                i = (na._data(this, "events") || {})[a.type] || [],
                j = na.event.special[a.type] || {};
            if (h[0] = a, a.delegateTarget = this, !j.preDispatch || !1 !== j.preDispatch.call(this, a)) {
                for (g = na.event.handlers.call(this, a, i), b = 0;
                     (e = g[b++]) && !a.isPropagationStopped();)
                    for (a.currentTarget = e.elem, c = 0;
                         (f = e.handlers[c++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !a.rnamespace.test(f.namespace) || (a.handleObj = f, a.data = f.data, void 0 !== (d = ((na.event.special[f.origType] || {}).handle || f.handler).apply(e.elem, h)) && !1 === (a.result = d) && (a.preventDefault(), a.stopPropagation()));
                return j.postDispatch && j.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [],
                h = b.delegateCount,
                i = a.target;
            if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1))
                for (; i != this; i = i.parentNode || this)
                    if (1 === i.nodeType && (!0 !== i.disabled || "click" !== a.type)) {
                        for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? na(e, this).index(i) > -1 : na.find(e, this, null, [i]).length), d[e] && d.push(f);
                        d.length && g.push({
                            elem: i,
                            handlers: d
                        })
                    }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }), g
        },
        fix: function(a) {
            if (a[na.expando]) return a;
            var b, c, d, e = a.type,
                f = a,
                g = this.fixHooks[e];
            for (g || (this.fixHooks[e] = g = Xa.test(e) ? this.mouseHooks : Wa.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new na.Event(f), b = d.length; b--;) c = d[b], a[c] = f[c];
            return a.target || (a.target = f.srcElement || da), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, g.filter ? g.filter(a, f) : a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, d, e, f = b.button,
                    g = b.fromElement;
                return null == a.pageX && null != b.clientX && (d = a.target.ownerDocument || da, e = d.documentElement, c = d.body, a.pageX = b.clientX + (e && e.scrollLeft || c && c.scrollLeft || 0) - (e && e.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || c && c.scrollTop || 0) - (e && e.clientTop || c && c.clientTop || 0)), !a.relatedTarget && g && (a.relatedTarget = g === a.target ? b.toElement : g), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== u() && this.focus) try {
                        return this.focus(), !1
                    } catch (a) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === u() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return na.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function(a) {
                    return na.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function(a, b, c) {
            var d = na.extend(new na.Event, c, {
                type: a,
                isSimulated: !0
            });
            na.event.trigger(d, null, b), d.isDefaultPrevented() && c.preventDefault()
        }
    }, na.removeEvent = da.removeEventListener ? function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c)
    } : function(a, b, c) {
        var d = "on" + b;
        a.detachEvent && (void 0 === a[d] && (a[d] = null), a.detachEvent(d, c))
    }, na.Event = function(a, b) {
        return this instanceof na.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && !1 === a.returnValue ? s : t) : this.type = a, b && na.extend(this, b), this.timeStamp = a && a.timeStamp || na.now(), void(this[na.expando] = !0)) : new na.Event(a, b)
    }, na.Event.prototype = {
        constructor: na.Event,
        isDefaultPrevented: t,
        isPropagationStopped: t,
        isImmediatePropagationStopped: t,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = s, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = s, a && !this.isSimulated && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = s, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, na.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        na.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                return e && (e === d || na.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), la.submit || (na.event.special.submit = {
        setup: function() {
            return !na.nodeName(this, "form") && void na.event.add(this, "click._submit keypress._submit", function(a) {
                    var b = a.target,
                        c = na.nodeName(b, "input") || na.nodeName(b, "button") ? na.prop(b, "form") : void 0;
                    c && !na._data(c, "submit") && (na.event.add(c, "submit._submit", function(a) {
                        a._submitBubble = !0
                    }), na._data(c, "submit", !0))
                })
        },
        postDispatch: function(a) {
            a._submitBubble && (delete a._submitBubble, this.parentNode && !a.isTrigger && na.event.simulate("submit", this.parentNode, a))
        },
        teardown: function() {
            return !na.nodeName(this, "form") && void na.event.remove(this, "._submit")
        }
    }), la.change || (na.event.special.change = {
        setup: function() {
            return Va.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (na.event.add(this, "propertychange._change", function(a) {
                "checked" === a.originalEvent.propertyName && (this._justChanged = !0)
            }), na.event.add(this, "click._change", function(a) {
                this._justChanged && !a.isTrigger && (this._justChanged = !1), na.event.simulate("change", this, a)
            })), !1) : void na.event.add(this, "beforeactivate._change", function(a) {
                var b = a.target;
                Va.test(b.nodeName) && !na._data(b, "change") && (na.event.add(b, "change._change", function(a) {
                    !this.parentNode || a.isSimulated || a.isTrigger || na.event.simulate("change", this.parentNode, a)
                }), na._data(b, "change", !0))
            })
        },
        handle: function(a) {
            var b = a.target;
            return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return na.event.remove(this, "._change"), !Va.test(this.nodeName)
        }
    }), la.focusin || na.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            na.event.simulate(b, a.target, na.event.fix(a))
        };
        na.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this,
                    e = na._data(d, b);
                e || d.addEventListener(a, c, !0), na._data(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this,
                    e = na._data(d, b) - 1;
                e ? na._data(d, b, e) : (d.removeEventListener(a, c, !0), na._removeData(d, b))
            }
        }
    }), na.fn.extend({
        on: function(a, b, c, d) {
            return v(this, a, b, c, d)
        },
        one: function(a, b, c, d) {
            return v(this, a, b, c, d, 1)
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, na(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this
            }
            return !1 !== b && "function" != typeof b || (c = b, b = void 0), !1 === c && (c = t), this.each(function() {
                na.event.remove(this, a, c, b)
            })
        },
        trigger: function(a, b) {
            return this.each(function() {
                na.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? na.event.trigger(a, b, c, !0) : void 0
        }
    });
    var $a = / jQuery\d+="(?:null|\d+)"/g,
        _a = new RegExp("<(?:" + Ra + ")[\\s/>]", "i"),
        ab = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        bb = /<script|<style|<link/i,
        cb = /checked\s*(?:[^=]|=\s*.checked.)/i,
        db = /^true\/(.*)/,
        eb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        fb = n(da),
        gb = fb.appendChild(da.createElement("div"));
    na.extend({
        htmlPrefilter: function(a) {
            return a.replace(ab, "<$1></$2>")
        },
        clone: function(a, b, c) {
            var d, e, f, g, h, i = na.contains(a.ownerDocument, a);
            if (la.html5Clone || na.isXMLDoc(a) || !_a.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (gb.innerHTML = a.outerHTML, gb.removeChild(f = gb.firstChild)), !(la.noCloneEvent && la.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || na.isXMLDoc(a)))
                for (d = o(f), h = o(a), g = 0; null != (e = h[g]); ++g) d[g] && A(e, d[g]);
            if (b)
                if (c)
                    for (h = h || o(a), d = d || o(f), g = 0; null != (e = h[g]); g++) z(e, d[g]);
                else z(a, f);
            return d = o(f, "script"), d.length > 0 && p(d, !i && o(a, "script")), d = h = e = null, f
        },
        cleanData: function(a, b) {
            for (var c, d, e, f, g = 0, h = na.expando, i = na.cache, j = la.attributes, k = na.event.special; null != (c = a[g]); g++)
                if ((b || Fa(c)) && (e = c[h], f = e && i[e])) {
                    if (f.events)
                        for (d in f.events) k[d] ? na.event.remove(c, d) : na.removeEvent(c, d, f.handle);
                    i[e] && (delete i[e], j || void 0 === c.removeAttribute ? c[h] = void 0 : c.removeAttribute(h), ca.push(e))
                }
        }
    }), na.fn.extend({
        domManip: B,
        detach: function(a) {
            return C(this, a, !0)
        },
        remove: function(a) {
            return C(this, a)
        },
        text: function(a) {
            return Ma(this, function(a) {
                return void 0 === a ? na.text(this) : this.empty().append((this[0] && this[0].ownerDocument || da).createTextNode(a))
            }, null, a, arguments.length)
        },
        append: function() {
            return B(this, arguments, function(a) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || w(this, a).appendChild(a)
            })
        },
        prepend: function() {
            return B(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = w(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return B(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return B(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) {
                for (1 === a.nodeType && na.cleanData(o(a, !1)); a.firstChild;) a.removeChild(a.firstChild);
                a.options && na.nodeName(a, "select") && (a.options.length = 0)
            }
            return this
        },
        clone: function(a, b) {
            return a = null != a && a, b = null == b ? a : b, this.map(function() {
                return na.clone(this, a, b)
            })
        },
        html: function(a) {
            return Ma(this, function(a) {
                var b = this[0] || {},
                    c = 0,
                    d = this.length;
                if (void 0 === a) return 1 === b.nodeType ? b.innerHTML.replace($a, "") : void 0;
                if ("string" == typeof a && !bb.test(a) && (la.htmlSerialize || !_a.test(a)) && (la.leadingWhitespace || !Qa.test(a)) && !Sa[(Oa.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = na.htmlPrefilter(a);
                    try {
                        for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (na.cleanData(o(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (a) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = [];
            return B(this, arguments, function(b) {
                var c = this.parentNode;
                na.inArray(this, a) < 0 && (na.cleanData(o(this)), c && c.replaceChild(b, this))
            }, a)
        }
    }), na.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        na.fn[a] = function(a) {
            for (var c, d = 0, e = [], f = na(a), g = f.length - 1; g >= d; d++) c = d === g ? this : this.clone(!0), na(f[d])[b](c), ga.apply(e, c.get());
            return this.pushStack(e)
        }
    });
    var hb, ib = {
            HTML: "block",
            BODY: "block"
        },
        jb = /^margin/,
        kb = new RegExp("^(" + Ia + ")(?!px)[a-z%]+$", "i"),
        lb = function(a, b, c, d) {
            var e, f, g = {};
            for (f in b) g[f] = a.style[f], a.style[f] = b[f];
            e = c.apply(a, d || []);
            for (f in b) a.style[f] = g[f];
            return e
        },
        mb = da.documentElement;
    ! function() {
        function b() {
            var b, k, l = da.documentElement;
            l.appendChild(i), j.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", c = e = h = !1, d = g = !0, a.getComputedStyle && (k = a.getComputedStyle(j), c = "1%" !== (k || {}).top, h = "2px" === (k || {}).marginLeft, e = "4px" === (k || {
                    width: "4px"
                }).width, j.style.marginRight = "50%", d = "4px" === (k || {
                    marginRight: "4px"
                }).marginRight, b = j.appendChild(da.createElement("div")), b.style.cssText = j.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", b.style.marginRight = b.style.width = "0", j.style.width = "1px", g = !parseFloat((a.getComputedStyle(b) || {}).marginRight), j.removeChild(b)), j.style.display = "none", f = 0 === j.getClientRects().length, f && (j.style.display = "", j.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", j.childNodes[0].style.borderCollapse = "separate", b = j.getElementsByTagName("td"), b[0].style.cssText = "margin:0;border:0;padding:0;display:none", (f = 0 === b[0].offsetHeight) && (b[0].style.display = "", b[1].style.display = "none", f = 0 === b[0].offsetHeight)), l.removeChild(i)
        }
        var c, d, e, f, g, h, i = da.createElement("div"),
            j = da.createElement("div");
        j.style && (j.style.cssText = "float:left;opacity:.5", la.opacity = "0.5" === j.style.opacity, la.cssFloat = !!j.style.cssFloat, j.style.backgroundClip = "content-box", j.cloneNode(!0).style.backgroundClip = "", la.clearCloneStyle = "content-box" === j.style.backgroundClip, i = da.createElement("div"), i.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", j.innerHTML = "", i.appendChild(j), la.boxSizing = "" === j.style.boxSizing || "" === j.style.MozBoxSizing || "" === j.style.WebkitBoxSizing, na.extend(la, {
            reliableHiddenOffsets: function() {
                return null == c && b(), f
            },
            boxSizingReliable: function() {
                return null == c && b(), e
            },
            pixelMarginRight: function() {
                return null == c && b(), d
            },
            pixelPosition: function() {
                return null == c && b(), c
            },
            reliableMarginRight: function() {
                return null == c && b(), g
            },
            reliableMarginLeft: function() {
                return null == c && b(), h
            }
        }))
    }();
    var nb, ob, pb = /^(top|right|bottom|left)$/;
    a.getComputedStyle ? (nb = function(b) {
        var c = b.ownerDocument.defaultView;
        return c && c.opener || (c = a), c.getComputedStyle(b)
    }, ob = function(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || nb(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, "" !== g && void 0 !== g || na.contains(a.ownerDocument, a) || (g = na.style(a, b)), c && !la.pixelMarginRight() && kb.test(g) && jb.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f), void 0 === g ? g : g + ""
    }) : mb.currentStyle && (nb = function(a) {
            return a.currentStyle
        }, ob = function(a, b, c) {
            var d, e, f, g, h = a.style;
            return c = c || nb(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), kb.test(g) && !pb.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto"
        });
    var qb = /alpha\([^)]*\)/i,
        rb = /opacity\s*=\s*([^)]*)/i,
        sb = /^(none|table(?!-c[ea]).+)/,
        tb = new RegExp("^(" + Ia + ")(.*)$", "i"),
        ub = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        vb = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        wb = ["Webkit", "O", "Moz", "ms"],
        xb = da.createElement("div").style;
    na.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = ob(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
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
            float: la.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = na.camelCase(b),
                    i = a.style;
                if (b = na.cssProps[h] || (na.cssProps[h] = G(h) || h), g = na.cssHooks[b] || na.cssHooks[h], void 0 === c) return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
                if (f = typeof c, "string" === f && (e = Ja.exec(c)) && e[1] && (c = m(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (na.cssNumber[h] ? "" : "px")), la.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d))))) try {
                    i[b] = c
                } catch (a) {}
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = na.camelCase(b);
            return b = na.cssProps[h] || (na.cssProps[h] = G(h) || h), g = na.cssHooks[b] || na.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = ob(a, b, d)), "normal" === f && b in vb && (f = vb[b]), "" === c || c ? (e = parseFloat(f), !0 === c || isFinite(e) ? e || 0 : f) : f
        }
    }), na.each(["height", "width"], function(a, b) {
        na.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? sb.test(na.css(a, "display")) && 0 === a.offsetWidth ? lb(a, ub, function() {
                    return K(a, b, d)
                }) : K(a, b, d) : void 0
            },
            set: function(a, c, d) {
                var e = d && nb(a);
                return I(a, c, d ? J(a, b, d, la.boxSizing && "border-box" === na.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }), la.opacity || (na.cssHooks.opacity = {
        get: function(a, b) {
            return rb.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
        },
        set: function(a, b) {
            var c = a.style,
                d = a.currentStyle,
                e = na.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
                f = d && d.filter || c.filter || "";
            c.zoom = 1, (b >= 1 || "" === b) && "" === na.trim(f.replace(qb, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = qb.test(f) ? f.replace(qb, e) : f + " " + e)
        }
    }), na.cssHooks.marginRight = F(la.reliableMarginRight, function(a, b) {
        return b ? lb(a, {
            display: "inline-block"
        }, ob, [a, "marginRight"]) : void 0
    }), na.cssHooks.marginLeft = F(la.reliableMarginLeft, function(a, b) {
        return b ? (parseFloat(ob(a, "marginLeft")) || (na.contains(a.ownerDocument, a) ? a.getBoundingClientRect().left - lb(a, {
                    marginLeft: 0
                }, function() {
                    return a.getBoundingClientRect().left
                }) : 0)) + "px" : void 0
    }), na.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        na.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + Ka[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, jb.test(a) || (na.cssHooks[a + b].set = I)
    }), na.fn.extend({
        css: function(a, b) {
            return Ma(this, function(a, b, c) {
                var d, e, f = {},
                    g = 0;
                if (na.isArray(b)) {
                    for (d = nb(a), e = b.length; e > g; g++) f[b[g]] = na.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? na.style(a, b, c) : na.css(a, b)
            }, a, b, arguments.length > 1)
        },
        show: function() {
            return H(this, !0)
        },
        hide: function() {
            return H(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                La(this) ? na(this).show() : na(this).hide()
            })
        }
    }), na.Tween = L, L.prototype = {
        constructor: L,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || na.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (na.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = L.propHooks[this.prop];
            return a && a.get ? a.get(this) : L.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = L.propHooks[this.prop];
            return this.options.duration ? this.pos = b = na.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : L.propHooks._default.set(this), this
        }
    }, L.prototype.init.prototype = L.prototype, L.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = na.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0)
            },
            set: function(a) {
                na.fx.step[a.prop] ? na.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[na.cssProps[a.prop]] && !na.cssHooks[a.prop] ? a.elem[a.prop] = a.now : na.style(a.elem, a.prop, a.now + a.unit)
            }
        }
    }, L.propHooks.scrollTop = L.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, na.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        },
        _default: "swing"
    }, na.fx = L.prototype.init, na.fx.step = {};
    var yb, zb, Ab = /^(?:toggle|show|hide)$/,
        Bb = /queueHooks$/;
    na.Animation = na.extend(R, {
        tweeners: {
            "*": [function(a, b) {
                var c = this.createTween(a, b);
                return m(c.elem, a, Ja.exec(b), c), c
            }]
        },
        tweener: function(a, b) {
            na.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(Ca);
            for (var c, d = 0, e = a.length; e > d; d++) c = a[d], R.tweeners[c] = R.tweeners[c] || [], R.tweeners[c].unshift(b)
        },
        prefilters: [P],
        prefilter: function(a, b) {
            b ? R.prefilters.unshift(a) : R.prefilters.push(a)
        }
    }), na.speed = function(a, b, c) {
        var d = a && "object" == typeof a ? na.extend({}, a) : {
            complete: c || !c && b || na.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !na.isFunction(b) && b
        };
        return d.duration = na.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in na.fx.speeds ? na.fx.speeds[d.duration] : na.fx.speeds._default, null != d.queue && !0 !== d.queue || (d.queue = "fx"), d.old = d.complete, d.complete = function() {
            na.isFunction(d.old) && d.old.call(this), d.queue && na.dequeue(this, d.queue)
        }, d
    }, na.fn.extend({
        fadeTo: function(a, b, c, d) {
            return this.filter(La).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d)
        },
        animate: function(a, b, c, d) {
            var e = na.isEmptyObject(a),
                f = na.speed(b, c, d),
                g = function() {
                    var b = R(this, na.extend({}, a), f);
                    (e || na._data(this, "finish")) && b.stop(!0)
                };
            return g.finish = g, e || !1 === f.queue ? this.each(g) : this.queue(f.queue, g)
        },
        stop: function(a, b, c) {
            var d = function(a) {
                var b = a.stop;
                delete a.stop, b(c)
            };
            return "string" != typeof a && (c = b, b = a, a = void 0), b && !1 !== a && this.queue(a || "fx", []), this.each(function() {
                var b = !0,
                    e = null != a && a + "queueHooks",
                    f = na.timers,
                    g = na._data(this);
                if (e) g[e] && g[e].stop && d(g[e]);
                else
                    for (e in g) g[e] && g[e].stop && Bb.test(e) && d(g[e]);
                for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                !b && c || na.dequeue(this, a)
            })
        },
        finish: function(a) {
            return !1 !== a && (a = a || "fx"), this.each(function() {
                var b, c = na._data(this),
                    d = c[a + "queue"],
                    e = c[a + "queueHooks"],
                    f = na.timers,
                    g = d ? d.length : 0;
                for (c.finish = !0, na.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish
            })
        }
    }), na.each(["toggle", "show", "hide"], function(a, b) {
        var c = na.fn[b];
        na.fn[b] = function(a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(N(b, !0), a, d, e)
        }
    }), na.each({
        slideDown: N("show"),
        slideUp: N("hide"),
        slideToggle: N("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        na.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), na.timers = [], na.fx.tick = function() {
        var a, b = na.timers,
            c = 0;
        for (yb = na.now(); c < b.length; c++)(a = b[c])() || b[c] !== a || b.splice(c--, 1);
        b.length || na.fx.stop(), yb = void 0
    }, na.fx.timer = function(a) {
        na.timers.push(a), a() ? na.fx.start() : na.timers.pop()
    }, na.fx.interval = 13, na.fx.start = function() {
        zb || (zb = a.setInterval(na.fx.tick, na.fx.interval))
    }, na.fx.stop = function() {
        a.clearInterval(zb), zb = null
    }, na.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, na.fn.delay = function(b, c) {
        return b = na.fx ? na.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function(c, d) {
            var e = a.setTimeout(c, b);
            d.stop = function() {
                a.clearTimeout(e)
            }
        })
    },
        function() {
            var a, b = da.createElement("input"),
                c = da.createElement("div"),
                d = da.createElement("select"),
                e = d.appendChild(da.createElement("option"));
            c = da.createElement("div"), c.setAttribute("className", "t"), c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = c.getElementsByTagName("a")[0], b.setAttribute("type", "checkbox"), c.appendChild(b), a = c.getElementsByTagName("a")[0], a.style.cssText = "top:1px", la.getSetAttribute = "t" !== c.className, la.style = /top/.test(a.getAttribute("style")), la.hrefNormalized = "/a" === a.getAttribute("href"), la.checkOn = !!b.value, la.optSelected = e.selected, la.enctype = !!da.createElement("form").enctype, d.disabled = !0, la.optDisabled = !e.disabled, b = da.createElement("input"), b.setAttribute("value", ""), la.input = "" === b.getAttribute("value"), b.value = "t", b.setAttribute("type", "radio"), la.radioValue = "t" === b.value
        }();
    var Cb = /\r/g,
        Db = /[\x20\t\r\n\f]+/g;
    na.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0];
            return arguments.length ? (d = na.isFunction(a), this.each(function(c) {
                var e;
                1 === this.nodeType && (e = d ? a.call(this, c, na(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : na.isArray(e) && (e = na.map(e, function(a) {
                        return null == a ? "" : a + ""
                    })), (b = na.valHooks[this.type] || na.valHooks[this.nodeName.toLowerCase()]) && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
            })) : e ? (b = na.valHooks[e.type] || na.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(Cb, "") : null == c ? "" : c)) : void 0
        }
    }), na.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = na.find.attr(a, "value");
                    return null != b ? b : na.trim(na.text(a)).replace(Db, " ")
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i], (c.selected || i === e) && (la.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !na.nodeName(c.parentNode, "optgroup"))) {
                            if (b = na(c).val(), f) return b;
                            g.push(b)
                        }
                    return g
                },
                set: function(a, b) {
                    for (var c, d, e = a.options, f = na.makeArray(b), g = e.length; g--;)
                        if (d = e[g], na.inArray(na.valHooks.option.get(d), f) > -1) try {
                            d.selected = c = !0
                        } catch (a) {
                            d.scrollHeight
                        } else d.selected = !1;
                    return c || (a.selectedIndex = -1), e
                }
            }
        }
    }), na.each(["radio", "checkbox"], function() {
        na.valHooks[this] = {
            set: function(a, b) {
                return na.isArray(b) ? a.checked = na.inArray(na(a).val(), b) > -1 : void 0
            }
        }, la.checkOn || (na.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var Eb, Fb, Gb = na.expr.attrHandle,
        Hb = /^(?:checked|selected)$/i,
        Ib = la.getSetAttribute,
        Jb = la.input;
    na.fn.extend({
        attr: function(a, b) {
            return Ma(this, na.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                na.removeAttr(this, a)
            })
        }
    }), na.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return void 0 === a.getAttribute ? na.prop(a, b, c) : (1 === f && na.isXMLDoc(a) || (b = b.toLowerCase(), e = na.attrHooks[b] || (na.expr.match.bool.test(b) ? Fb : Eb)), void 0 !== c ? null === c ? void na.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = na.find.attr(a, b), null == d ? void 0 : d))
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!la.radioValue && "radio" === b && na.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        },
        removeAttr: function(a, b) {
            var c, d, e = 0,
                f = b && b.match(Ca);
            if (f && 1 === a.nodeType)
                for (; c = f[e++];) d = na.propFix[c] || c, na.expr.match.bool.test(c) ? Jb && Ib || !Hb.test(c) ? a[d] = !1 : a[na.camelCase("default-" + c)] = a[d] = !1 : na.attr(a, c, ""), a.removeAttribute(Ib ? c : d)
        }
    }), Fb = {
        set: function(a, b, c) {
            return !1 === b ? na.removeAttr(a, c) : Jb && Ib || !Hb.test(c) ? a.setAttribute(!Ib && na.propFix[c] || c, c) : a[na.camelCase("default-" + c)] = a[c] = !0, c
        }
    }, na.each(na.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = Gb[b] || na.find.attr;
        Jb && Ib || !Hb.test(b) ? Gb[b] = function(a, b, d) {
            var e, f;
            return d || (f = Gb[b], Gb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, Gb[b] = f), e
        } : Gb[b] = function(a, b, c) {
            return c ? void 0 : a[na.camelCase("default-" + b)] ? b.toLowerCase() : null
        }
    }), Jb && Ib || (na.attrHooks.value = {
        set: function(a, b, c) {
            return na.nodeName(a, "input") ? void(a.defaultValue = b) : Eb && Eb.set(a, b, c)
        }
    }), Ib || (Eb = {
        set: function(a, b, c) {
            var d = a.getAttributeNode(c);
            return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0
        }
    }, Gb.id = Gb.name = Gb.coords = function(a, b, c) {
        var d;
        return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null
    }, na.valHooks.button = {
        get: function(a, b) {
            var c = a.getAttributeNode(b);
            return c && c.specified ? c.value : void 0
        },
        set: Eb.set
    }, na.attrHooks.contenteditable = {
        set: function(a, b, c) {
            Eb.set(a, "" !== b && b, c)
        }
    }, na.each(["width", "height"], function(a, b) {
        na.attrHooks[b] = {
            set: function(a, c) {
                return "" === c ? (a.setAttribute(b, "auto"), c) : void 0
            }
        }
    })), la.style || (na.attrHooks.style = {
        get: function(a) {
            return a.style.cssText || void 0
        },
        set: function(a, b) {
            return a.style.cssText = b + ""
        }
    });
    var Kb = /^(?:input|select|textarea|button|object)$/i,
        Lb = /^(?:a|area)$/i;
    na.fn.extend({
        prop: function(a, b) {
            return Ma(this, na.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return a = na.propFix[a] || a, this.each(function() {
                try {
                    this[a] = void 0, delete this[a]
                } catch (a) {}
            })
        }
    }), na.extend({
        prop: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return 1 === f && na.isXMLDoc(a) || (b = na.propFix[b] || b, e = na.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = na.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : Kb.test(a.nodeName) || Lb.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), la.hrefNormalized || na.each(["href", "src"], function(a, b) {
        na.propHooks[b] = {
            get: function(a) {
                return a.getAttribute(b, 4)
            }
        }
    }), la.optSelected || (na.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
        },
        set: function(a) {
            var b = a.parentNode;
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex)
        }
    }), na.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        na.propFix[this.toLowerCase()] = this
    }), la.enctype || (na.propFix.enctype = "encoding");
    var Mb = /[\t\r\n\f]/g;
    na.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (na.isFunction(a)) return this.each(function(b) {
                na(this).addClass(a.call(this, b, S(this)))
            });
            if ("string" == typeof a && a)
                for (b = a.match(Ca) || []; c = this[i++];)
                    if (e = S(c), d = 1 === c.nodeType && (" " + e + " ").replace(Mb, " ")) {
                        for (g = 0; f = b[g++];) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                        h = na.trim(d), e !== h && na.attr(c, "class", h)
                    }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (na.isFunction(a)) return this.each(function(b) {
                na(this).removeClass(a.call(this, b, S(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof a && a)
                for (b = a.match(Ca) || []; c = this[i++];)
                    if (e = S(c), d = 1 === c.nodeType && (" " + e + " ").replace(Mb, " ")) {
                        for (g = 0; f = b[g++];)
                            for (; d.indexOf(" " + f + " ") > -1;) d = d.replace(" " + f + " ", " ");
                        h = na.trim(d), e !== h && na.attr(c, "class", h)
                    }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : na.isFunction(a) ? this.each(function(c) {
                na(this).toggleClass(a.call(this, c, S(this), b), b)
            }) : this.each(function() {
                var b, d, e, f;
                if ("string" === c)
                    for (d = 0, e = na(this), f = a.match(Ca) || []; b = f[d++];) e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                else void 0 !== a && "boolean" !== c || (b = S(this), b && na._data(this, "__className__", b), na.attr(this, "class", b || !1 === a ? "" : na._data(this, "__className__") || ""))
            })
        },
        hasClass: function(a) {
            var b, c, d = 0;
            for (b = " " + a + " "; c = this[d++];)
                if (1 === c.nodeType && (" " + S(c) + " ").replace(Mb, " ").indexOf(b) > -1) return !0;
            return !1
        }
    }), na.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        na.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), na.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    });
    var Nb = a.location,
        Ob = na.now(),
        Pb = /\?/,
        Qb = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    na.parseJSON = function(b) {
        if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");
        var c, d = null,
            e = na.trim(b + "");
        return e && !na.trim(e.replace(Qb, function(a, b, e, f) {
            return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "")
        })) ? Function("return " + e)() : na.error("Invalid JSON: " + b)
    }, na.parseXML = function(b) {
        var c, d;
        if (!b || "string" != typeof b) return null;
        try {
            a.DOMParser ? (d = new a.DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new a.ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b))
        } catch (a) {
            c = void 0
        }
        return c && c.documentElement && !c.getElementsByTagName("parsererror").length || na.error("Invalid XML: " + b), c
    };
    var Rb = /#.*$/,
        Sb = /([?&])_=[^&]*/,
        Tb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Ub = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Vb = /^(?:GET|HEAD)$/,
        Wb = /^\/\//,
        Xb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Yb = {},
        Zb = {},
        $b = "*/".concat("*"),
        _b = Nb.href,
        ac = Xb.exec(_b.toLowerCase()) || [];
    na.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: _b,
            type: "GET",
            isLocal: Ub.test(ac[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": $b,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": na.parseJSON,
                "text xml": na.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? V(V(a, na.ajaxSettings), b) : V(na.ajaxSettings, a)
        },
        ajaxPrefilter: T(Yb),
        ajaxTransport: T(Zb),
        ajax: function(b, c) {
            function d(b, c, d, e) {
                var f, l, s, t, v, x = c;
                2 !== u && (u = 2, i && a.clearTimeout(i), k = void 0, h = e || "", w.readyState = b > 0 ? 4 : 0, f = b >= 200 && 300 > b || 304 === b, d && (t = W(m, w, d)), t = X(m, t, w, f), f ? (m.ifModified && (v = w.getResponseHeader("Last-Modified"), v && (na.lastModified[g] = v), (v = w.getResponseHeader("etag")) && (na.etag[g] = v)), 204 === b || "HEAD" === m.type ? x = "nocontent" : 304 === b ? x = "notmodified" : (x = t.state, l = t.data, s = t.error, f = !s)) : (s = x, !b && x || (x = "error", 0 > b && (b = 0))), w.status = b, w.statusText = (c || x) + "", f ? p.resolveWith(n, [l, x, w]) : p.rejectWith(n, [w, x, s]), w.statusCode(r), r = void 0, j && o.trigger(f ? "ajaxSuccess" : "ajaxError", [w, m, f ? l : s]), q.fireWith(n, [w, x]), j && (o.trigger("ajaxComplete", [w, m]), --na.active || na.event.trigger("ajaxStop")))
            }
            "object" == typeof b && (c = b, b = void 0), c = c || {};
            var e, f, g, h, i, j, k, l, m = na.ajaxSetup({}, c),
                n = m.context || m,
                o = m.context && (n.nodeType || n.jquery) ? na(n) : na.event,
                p = na.Deferred(),
                q = na.Callbacks("once memory"),
                r = m.statusCode || {},
                s = {},
                t = {},
                u = 0,
                v = "canceled",
                w = {
                    readyState: 0,
                    getResponseHeader: function(a) {
                        var b;
                        if (2 === u) {
                            if (!l)
                                for (l = {}; b = Tb.exec(h);) l[b[1].toLowerCase()] = b[2];
                            b = l[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function() {
                        return 2 === u ? h : null
                    },
                    setRequestHeader: function(a, b) {
                        var c = a.toLowerCase();
                        return u || (a = t[c] = t[c] || a, s[a] = b), this
                    },
                    overrideMimeType: function(a) {
                        return u || (m.mimeType = a), this
                    },
                    statusCode: function(a) {
                        var b;
                        if (a)
                            if (2 > u)
                                for (b in a) r[b] = [r[b], a[b]];
                            else w.always(a[w.status]);
                        return this
                    },
                    abort: function(a) {
                        var b = a || v;
                        return k && k.abort(b), d(0, b), this
                    }
                };
            if (p.promise(w).complete = q.add, w.success = w.done, w.error = w.fail, m.url = ((b || m.url || _b) + "").replace(Rb, "").replace(Wb, ac[1] + "//"), m.type = c.method || c.type || m.method || m.type, m.dataTypes = na.trim(m.dataType || "*").toLowerCase().match(Ca) || [""], null == m.crossDomain && (e = Xb.exec(m.url.toLowerCase()), m.crossDomain = !(!e || e[1] === ac[1] && e[2] === ac[2] && (e[3] || ("http:" === e[1] ? "80" : "443")) === (ac[3] || ("http:" === ac[1] ? "80" : "443")))), m.data && m.processData && "string" != typeof m.data && (m.data = na.param(m.data, m.traditional)), U(Yb, m, c, w), 2 === u) return w;
            j = na.event && m.global, j && 0 == na.active++ && na.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !Vb.test(m.type), g = m.url, m.hasContent || (m.data && (g = m.url += (Pb.test(g) ? "&" : "?") + m.data, delete m.data), !1 === m.cache && (m.url = Sb.test(g) ? g.replace(Sb, "$1_=" + Ob++) : g + (Pb.test(g) ? "&" : "?") + "_=" + Ob++)), m.ifModified && (na.lastModified[g] && w.setRequestHeader("If-Modified-Since", na.lastModified[g]), na.etag[g] && w.setRequestHeader("If-None-Match", na.etag[g])), (m.data && m.hasContent && !1 !== m.contentType || c.contentType) && w.setRequestHeader("Content-Type", m.contentType), w.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + $b + "; q=0.01" : "") : m.accepts["*"]);
            for (f in m.headers) w.setRequestHeader(f, m.headers[f]);
            if (m.beforeSend && (!1 === m.beforeSend.call(n, w, m) || 2 === u)) return w.abort();
            v = "abort";
            for (f in {
                success: 1,
                error: 1,
                complete: 1
            }) w[f](m[f]);
            if (k = U(Zb, m, c, w)) {
                if (w.readyState = 1, j && o.trigger("ajaxSend", [w, m]), 2 === u) return w;
                m.async && m.timeout > 0 && (i = a.setTimeout(function() {
                    w.abort("timeout")
                }, m.timeout));
                try {
                    u = 1, k.send(s, d)
                } catch (a) {
                    if (!(2 > u)) throw a;
                    d(-1, a)
                }
            } else d(-1, "No Transport");
            return w
        },
        getJSON: function(a, b, c) {
            return na.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return na.get(a, void 0, b, "script")
        }
    }), na.each(["get", "post"], function(a, b) {
        na[b] = function(a, c, d, e) {
            return na.isFunction(c) && (e = e || d, d = c, c = void 0), na.ajax(na.extend({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            }, na.isPlainObject(a) && a))
        }
    }), na._evalUrl = function(a) {
        return na.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    }, na.fn.extend({
        wrapAll: function(a) {
            if (na.isFunction(a)) return this.each(function(b) {
                na(this).wrapAll(a.call(this, b))
            });
            if (this[0]) {
                var b = na(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                    for (var a = this; a.firstChild && 1 === a.firstChild.nodeType;) a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function(a) {
            return na.isFunction(a) ? this.each(function(b) {
                na(this).wrapInner(a.call(this, b))
            }) : this.each(function() {
                var b = na(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = na.isFunction(a);
            return this.each(function(c) {
                na(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                na.nodeName(this, "body") || na(this).replaceWith(this.childNodes)
            }).end()
        }
    }), na.expr.filters.hidden = function(a) {
        return la.reliableHiddenOffsets() ? a.offsetWidth <= 0 && a.offsetHeight <= 0 && !a.getClientRects().length : Z(a)
    }, na.expr.filters.visible = function(a) {
        return !na.expr.filters.hidden(a)
    };
    var bc = /%20/g,
        cc = /\[\]$/,
        dc = /\r?\n/g,
        ec = /^(?:submit|button|image|reset|file)$/i,
        fc = /^(?:input|select|textarea|keygen)/i;
    na.param = function(a, b) {
        var c, d = [],
            e = function(a, b) {
                b = na.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
        if (void 0 === b && (b = na.ajaxSettings && na.ajaxSettings.traditional), na.isArray(a) || a.jquery && !na.isPlainObject(a)) na.each(a, function() {
            e(this.name, this.value)
        });
        else
            for (c in a) $(c, a[c], b, e);
        return d.join("&").replace(bc, "+")
    }, na.fn.extend({
        serialize: function() {
            return na.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = na.prop(this, "elements");
                return a ? na.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !na(this).is(":disabled") && fc.test(this.nodeName) && !ec.test(a) && (this.checked || !Na.test(a))
            }).map(function(a, b) {
                var c = na(this).val();
                return null == c ? null : na.isArray(c) ? na.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(dc, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(dc, "\r\n")
                }
            }).get()
        }
    }), na.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function() {
        return this.isLocal ? aa() : da.documentMode > 8 ? _() : /^(get|post|head|put|delete|options)$/i.test(this.type) && _() || aa()
    } : _;
    var gc = 0,
        hc = {},
        ic = na.ajaxSettings.xhr();
    a.attachEvent && a.attachEvent("onunload", function() {
        for (var a in hc) hc[a](void 0, !0)
    }), la.cors = !!ic && "withCredentials" in ic, (ic = la.ajax = !!ic) && na.ajaxTransport(function(b) {
        if (!b.crossDomain || la.cors) {
            var c;
            return {
                send: function(d, e) {
                    var f, g = b.xhr(),
                        h = ++gc;
                    if (g.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields)
                        for (f in b.xhrFields) g[f] = b.xhrFields[f];
                    b.mimeType && g.overrideMimeType && g.overrideMimeType(b.mimeType), b.crossDomain || d["X-Requested-With"] || (d["X-Requested-With"] = "XMLHttpRequest");
                    for (f in d) void 0 !== d[f] && g.setRequestHeader(f, d[f] + "");
                    g.send(b.hasContent && b.data || null), c = function(a, d) {
                        var f, i, j;
                        if (c && (d || 4 === g.readyState))
                            if (delete hc[h], c = void 0, g.onreadystatechange = na.noop, d) 4 !== g.readyState && g.abort();
                            else {
                                j = {}, f = g.status, "string" == typeof g.responseText && (j.text = g.responseText);
                                try {
                                    i = g.statusText
                                } catch (a) {
                                    i = ""
                                }
                                f || !b.isLocal || b.crossDomain ? 1223 === f && (f = 204) : f = j.text ? 200 : 404
                            }
                        j && e(f, i, j, g.getAllResponseHeaders())
                    }, b.async ? 4 === g.readyState ? a.setTimeout(c) : g.onreadystatechange = hc[h] = c : c()
                },
                abort: function() {
                    c && c(void 0, !0)
                }
            }
        }
    }), na.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(a) {
                return na.globalEval(a), a
            }
        }
    }), na.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
    }), na.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c = da.head || na("head")[0] || da.documentElement;
            return {
                send: function(d, e) {
                    b = da.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function(a, c) {
                        (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || e(200, "success"))
                    }, c.insertBefore(b, c.firstChild)
                },
                abort: function() {
                    b && b.onload(void 0, !0)
                }
            }
        }
    });
    var jc = [],
        kc = /(=)\?(?=&|$)|\?\?/;
    na.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = jc.pop() || na.expando + "_" + Ob++;
            return this[a] = !0, a
        }
    }), na.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = !1 !== b.jsonp && (kc.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && kc.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = na.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(kc, "$1" + e) : !1 !== b.jsonp && (b.url += (Pb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
            return g || na.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
            g = arguments
        }, d.always(function() {
            void 0 === f ? na(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, jc.push(e)), g && na.isFunction(f) && f(g[0]), g = f = void 0
        }), "script") : void 0
    }), na.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || da;
        var d = wa.exec(a),
            e = !c && [];
        return d ? [b.createElement(d[1])] : (d = r([a], b, e), e && e.length && na(e).remove(), na.merge([], d.childNodes))
    };
    var lc = na.fn.load;
    na.fn.load = function(a, b, c) {
        if ("string" != typeof a && lc) return lc.apply(this, arguments);
        var d, e, f, g = this,
            h = a.indexOf(" ");
        return h > -1 && (d = na.trim(a.slice(h, a.length)), a = a.slice(0, h)), na.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && na.ajax({
            url: a,
            type: e || "GET",
            dataType: "html",
            data: b
        }).done(function(a) {
            f = arguments, g.html(d ? na("<div>").append(na.parseHTML(a)).find(d) : a)
        }).always(c && function(a, b) {
                g.each(function() {
                    c.apply(this, f || [a.responseText, b, a])
                })
            }), this
    }, na.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        na.fn[b] = function(a) {
            return this.on(b, a)
        }
    }), na.expr.filters.animated = function(a) {
        return na.grep(na.timers, function(b) {
            return a === b.elem
        }).length
    }, na.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = na.css(a, "position"),
                l = na(a),
                m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = na.css(a, "top"), i = na.css(a, "left"), j = ("absolute" === k || "fixed" === k) && na.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), na.isFunction(b) && (b = b.call(a, c, na.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
        }
    }, na.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                na.offset.setOffset(this, a, b)
            });
            var b, c, d = {
                    top: 0,
                    left: 0
                },
                e = this[0],
                f = e && e.ownerDocument;
            return f ? (b = f.documentElement, na.contains(b, e) ? (void 0 !== e.getBoundingClientRect && (d = e.getBoundingClientRect()), c = ba(f), {
                top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
                left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
            }) : d) : void 0
        },
        position: function() {
            if (this[0]) {
                var a, b, c = {
                        top: 0,
                        left: 0
                    },
                    d = this[0];
                return "fixed" === na.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), na.nodeName(a[0], "html") || (c = a.offset()), c.top += na.css(a[0], "borderTopWidth", !0), c.left += na.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - c.top - na.css(d, "marginTop", !0),
                    left: b.left - c.left - na.css(d, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var a = this.offsetParent; a && !na.nodeName(a, "html") && "static" === na.css(a, "position");) a = a.offsetParent;
                return a || mb
            })
        }
    }), na.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, b) {
        var c = /Y/.test(b);
        na.fn[a] = function(d) {
            return Ma(this, function(a, d, e) {
                var f = ba(a);
                return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void(f ? f.scrollTo(c ? na(f).scrollLeft() : e, c ? e : na(f).scrollTop()) : a[d] = e)
            }, a, d, arguments.length, null)
        }
    }), na.each(["top", "left"], function(a, b) {
        na.cssHooks[b] = F(la.pixelPosition, function(a, c) {
            return c ? (c = ob(a, b), kb.test(c) ? na(a).position()[b] + "px" : c) : void 0
        })
    }), na.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        na.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            na.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d),
                    g = c || (!0 === d || !0 === e ? "margin" : "border");
                return Ma(this, function(b, c, d) {
                    var e;
                    return na.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? na.css(b, c, g) : na.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }), na.fn.extend({
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    }), na.fn.size = function() {
        return this.length
    }, na.fn.andSelf = na.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return na
    });
    var mc = a.jQuery,
        nc = a.$;
    return na.noConflict = function(b) {
        return a.$ === na && (a.$ = nc), b && a.jQuery === na && (a.jQuery = mc), na
    }, b || (a.jQuery = a.$ = na), na
}),
    function(a) {
        "function" == typeof define && define.amd ? define(["jquery"], a) : "undefined" != typeof module && module.exports ? module.exports = a : a(jQuery, window, document)
    }(function(a) {
        ! function(b) {
            var c = "function" == typeof define && define.amd,
                d = "undefined" != typeof module && module.exports,
                e = "https:" == document.location.protocol ? "https:" : "http:";
            c || (d ? require("jquery-mousewheel")(a) : a.event.special.mousewheel || a("head").append(decodeURI("%3Cscript src=" + e + "//cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js%3E%3C/script%3E"))), b()
        }(function() {
            var b, c = "mCustomScrollbar",
                d = "mCS",
                e = ".mCustomScrollbar",
                f = {
                    setTop: 0,
                    setLeft: 0,
                    axis: "y",
                    scrollbarPosition: "inside",
                    scrollInertia: 950,
                    autoDraggerLength: !0,
                    alwaysShowScrollbar: 0,
                    snapOffset: 0,
                    mouseWheel: {
                        enable: !0,
                        scrollAmount: "auto",
                        axis: "y",
                        deltaFactor: "auto",
                        disableOver: ["select", "option", "keygen", "datalist", "textarea"]
                    },
                    scrollButtons: {
                        scrollType: "stepless",
                        scrollAmount: "auto"
                    },
                    keyboard: {
                        enable: !0,
                        scrollType: "stepless",
                        scrollAmount: "auto"
                    },
                    contentTouchScroll: 25,
                    documentTouchScroll: !0,
                    advanced: {
                        autoScrollOnFocus: "input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",
                        updateOnContentResize: !0,
                        updateOnImageLoad: "auto",
                        autoUpdateTimeout: 60
                    },
                    theme: "light",
                    callbacks: {
                        onTotalScrollOffset: 0,
                        onTotalScrollBackOffset: 0,
                        alwaysTriggerOffsets: !0
                    }
                },
                g = 0,
                h = {},
                i = window.attachEvent && !window.addEventListener ? 1 : 0,
                j = !1,
                k = ["mCSB_dragger_onDrag", "mCSB_scrollTools_onDrag", "mCS_img_loaded", "mCS_disabled", "mCS_destroyed", "mCS_no_scrollbar", "mCS-autoHide", "mCS-dir-rtl", "mCS_no_scrollbar_y", "mCS_no_scrollbar_x", "mCS_y_hidden", "mCS_x_hidden", "mCSB_draggerContainer", "mCSB_buttonUp", "mCSB_buttonDown", "mCSB_buttonLeft", "mCSB_buttonRight"],
                l = {
                    init: function(b) {
                        var b = a.extend(!0, {}, f, b),
                            c = m.call(this);
                        if (b.live) {
                            var i = b.liveSelector || this.selector || e,
                                j = a(i);
                            if ("off" === b.live) return void o(i);
                            h[i] = setTimeout(function() {
                                j.mCustomScrollbar(b), "once" === b.live && j.length && o(i)
                            }, 500)
                        } else o(i);
                        return b.setWidth = b.set_width ? b.set_width : b.setWidth, b.setHeight = b.set_height ? b.set_height : b.setHeight, b.axis = b.horizontalScroll ? "x" : p(b.axis), b.scrollInertia = b.scrollInertia > 0 && b.scrollInertia < 17 ? 17 : b.scrollInertia, "object" != typeof b.mouseWheel && 1 == b.mouseWheel && (b.mouseWheel = {
                            enable: !0,
                            scrollAmount: "auto",
                            axis: "y",
                            preventDefault: !1,
                            deltaFactor: "auto",
                            normalizeDelta: !1,
                            invert: !1
                        }), b.mouseWheel.scrollAmount = b.mouseWheelPixels ? b.mouseWheelPixels : b.mouseWheel.scrollAmount, b.mouseWheel.normalizeDelta = b.advanced.normalizeMouseWheelDelta ? b.advanced.normalizeMouseWheelDelta : b.mouseWheel.normalizeDelta, b.scrollButtons.scrollType = q(b.scrollButtons.scrollType), n(b), a(c).each(function() {
                            var c = a(this);
                            if (!c.data(d)) {
                                c.data(d, {
                                    idx: ++g,
                                    opt: b,
                                    scrollRatio: {
                                        y: null,
                                        x: null
                                    },
                                    overflowed: null,
                                    contentReset: {
                                        y: null,
                                        x: null
                                    },
                                    bindEvents: !1,
                                    tweenRunning: !1,
                                    sequential: {},
                                    langDir: c.css("direction"),
                                    cbOffsets: null,
                                    trigger: null,
                                    poll: {
                                        size: {
                                            o: 0,
                                            n: 0
                                        },
                                        img: {
                                            o: 0,
                                            n: 0
                                        },
                                        change: {
                                            o: 0,
                                            n: 0
                                        }
                                    }
                                });
                                var e = c.data(d),
                                    f = e.opt,
                                    h = c.data("mcs-axis"),
                                    i = c.data("mcs-scrollbar-position"),
                                    j = c.data("mcs-theme");
                                h && (f.axis = h), i && (f.scrollbarPosition = i), j && (f.theme = j, n(f)), r.call(this), e && f.callbacks.onCreate && "function" == typeof f.callbacks.onCreate && f.callbacks.onCreate.call(this), a("#mCSB_" + e.idx + "_container img:not(." + k[2] + ")").addClass(k[2]), l.update.call(null, c)
                            }
                        })
                    },
                    update: function(b, c) {
                        var e = b || m.call(this);
                        return a(e).each(function() {
                            var b = a(this);
                            if (b.data(d)) {
                                var e = b.data(d),
                                    f = e.opt,
                                    g = a("#mCSB_" + e.idx + "_container"),
                                    h = a("#mCSB_" + e.idx),
                                    i = [a("#mCSB_" + e.idx + "_dragger_vertical"), a("#mCSB_" + e.idx + "_dragger_horizontal")];
                                if (!g.length) return;
                                e.tweenRunning && W(b), c && e && f.callbacks.onBeforeUpdate && "function" == typeof f.callbacks.onBeforeUpdate && f.callbacks.onBeforeUpdate.call(this), b.hasClass(k[3]) && b.removeClass(k[3]), b.hasClass(k[4]) && b.removeClass(k[4]), h.css("max-height", "none"), h.height() !== b.height() && h.css("max-height", b.height()), t.call(this), "y" === f.axis || f.advanced.autoExpandHorizontalScroll || g.css("width", s(g)), e.overflowed = y.call(this), C.call(this), f.autoDraggerLength && v.call(this), w.call(this), A.call(this);
                                var j = [Math.abs(g[0].offsetTop), Math.abs(g[0].offsetLeft)];
                                "x" !== f.axis && (e.overflowed[0] ? i[0].height() > i[0].parent().height() ? z.call(this) : (X(b, j[0].toString(), {
                                    dir: "y",
                                    dur: 0,
                                    overwrite: "none"
                                }), e.contentReset.y = null) : (z.call(this), "y" === f.axis ? B.call(this) : "yx" === f.axis && e.overflowed[1] && X(b, j[1].toString(), {
                                        dir: "x",
                                        dur: 0,
                                        overwrite: "none"
                                    }))), "y" !== f.axis && (e.overflowed[1] ? i[1].width() > i[1].parent().width() ? z.call(this) : (X(b, j[1].toString(), {
                                    dir: "x",
                                    dur: 0,
                                    overwrite: "none"
                                }), e.contentReset.x = null) : (z.call(this), "x" === f.axis ? B.call(this) : "yx" === f.axis && e.overflowed[0] && X(b, j[0].toString(), {
                                        dir: "y",
                                        dur: 0,
                                        overwrite: "none"
                                    }))), c && e && (2 === c && f.callbacks.onImageLoad && "function" == typeof f.callbacks.onImageLoad ? f.callbacks.onImageLoad.call(this) : 3 === c && f.callbacks.onSelectorChange && "function" == typeof f.callbacks.onSelectorChange ? f.callbacks.onSelectorChange.call(this) : f.callbacks.onUpdate && "function" == typeof f.callbacks.onUpdate && f.callbacks.onUpdate.call(this)), U.call(this)
                            }
                        })
                    },
                    scrollTo: function(b, c) {
                        if (void 0 !== b && null != b) {
                            var e = m.call(this);
                            return a(e).each(function() {
                                var e = a(this);
                                if (e.data(d)) {
                                    var f = e.data(d),
                                        g = f.opt,
                                        h = {
                                            trigger: "external",
                                            scrollInertia: g.scrollInertia,
                                            scrollEasing: "mcsEaseInOut",
                                            moveDragger: !1,
                                            timeout: 60,
                                            callbacks: !0,
                                            onStart: !0,
                                            onUpdate: !0,
                                            onComplete: !0
                                        },
                                        i = a.extend(!0, {}, h, c),
                                        j = S.call(this, b),
                                        k = i.scrollInertia > 0 && i.scrollInertia < 17 ? 17 : i.scrollInertia;
                                    j[0] = T.call(this, j[0], "y"), j[1] = T.call(this, j[1], "x"), i.moveDragger && (j[0] *= f.scrollRatio.y, j[1] *= f.scrollRatio.x), i.dur = ea() ? 0 : k, setTimeout(function() {
                                        null !== j[0] && void 0 !== j[0] && "x" !== g.axis && f.overflowed[0] && (i.dir = "y", i.overwrite = "all", X(e, j[0].toString(), i)), null !== j[1] && void 0 !== j[1] && "y" !== g.axis && f.overflowed[1] && (i.dir = "x", i.overwrite = "none", X(e, j[1].toString(), i))
                                    }, i.timeout)
                                }
                            })
                        }
                    },
                    stop: function() {
                        var b = m.call(this);
                        return a(b).each(function() {
                            var b = a(this);
                            b.data(d) && W(b)
                        })
                    },
                    disable: function(b) {
                        var c = m.call(this);
                        return a(c).each(function() {
                            var c = a(this);
                            c.data(d) && (c.data(d), U.call(this, "remove"), B.call(this), b && z.call(this), C.call(this, !0), c.addClass(k[3]))
                        })
                    },
                    destroy: function() {
                        var b = m.call(this);
                        return a(b).each(function() {
                            var e = a(this);
                            if (e.data(d)) {
                                var f = e.data(d),
                                    g = f.opt,
                                    h = a("#mCSB_" + f.idx),
                                    i = a("#mCSB_" + f.idx + "_container"),
                                    j = a(".mCSB_" + f.idx + "_scrollbar");
                                g.live && o(g.liveSelector || a(b).selector), U.call(this, "remove"), B.call(this), z.call(this), e.removeData(d), _(this, "mcs"), j.remove(), i.find("img." + k[2]).removeClass(k[2]), h.replaceWith(i.contents()), e.removeClass(c + " _" + d + "_" + f.idx + " " + k[6] + " " + k[7] + " " + k[5] + " " + k[3]).addClass(k[4])
                            }
                        })
                    }
                },
                m = function() {
                    return "object" != typeof a(this) || a(this).length < 1 ? e : this
                },
                n = function(b) {
                    var c = ["rounded", "rounded-dark", "rounded-dots", "rounded-dots-dark"],
                        d = ["rounded-dots", "rounded-dots-dark", "3d", "3d-dark", "3d-thick", "3d-thick-dark", "inset", "inset-dark", "inset-2", "inset-2-dark", "inset-3", "inset-3-dark"],
                        e = ["minimal", "minimal-dark"],
                        f = ["minimal", "minimal-dark"],
                        g = ["minimal", "minimal-dark"];
                    b.autoDraggerLength = !(a.inArray(b.theme, c) > -1) && b.autoDraggerLength, b.autoExpandScrollbar = !(a.inArray(b.theme, d) > -1) && b.autoExpandScrollbar, b.scrollButtons.enable = !(a.inArray(b.theme, e) > -1) && b.scrollButtons.enable, b.autoHideScrollbar = a.inArray(b.theme, f) > -1 || b.autoHideScrollbar, b.scrollbarPosition = a.inArray(b.theme, g) > -1 ? "outside" : b.scrollbarPosition
                },
                o = function(a) {
                    h[a] && (clearTimeout(h[a]), _(h, a))
                },
                p = function(a) {
                    return "yx" === a || "xy" === a || "auto" === a ? "yx" : "x" === a || "horizontal" === a ? "x" : "y"
                },
                q = function(a) {
                    return "stepped" === a || "pixels" === a || "step" === a || "click" === a ? "stepped" : "stepless"
                },
                r = function() {
                    var b = a(this),
                        e = b.data(d),
                        f = e.opt,
                        g = f.autoExpandScrollbar ? " " + k[1] + "_expand" : "",
                        h = ["<div id='mCSB_" + e.idx + "_scrollbar_vertical' class='mCSB_scrollTools mCSB_" + e.idx + "_scrollbar mCS-" + f.theme + " mCSB_scrollTools_vertical" + g + "'><div class='" + k[12] + "'><div id='mCSB_" + e.idx + "_dragger_vertical' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>", "<div id='mCSB_" + e.idx + "_scrollbar_horizontal' class='mCSB_scrollTools mCSB_" + e.idx + "_scrollbar mCS-" + f.theme + " mCSB_scrollTools_horizontal" + g + "'><div class='" + k[12] + "'><div id='mCSB_" + e.idx + "_dragger_horizontal' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"],
                        i = "yx" === f.axis ? "mCSB_vertical_horizontal" : "x" === f.axis ? "mCSB_horizontal" : "mCSB_vertical",
                        j = "yx" === f.axis ? h[0] + h[1] : "x" === f.axis ? h[1] : h[0],
                        l = "yx" === f.axis ? "<div id='mCSB_" + e.idx + "_container_wrapper' class='mCSB_container_wrapper' />" : "",
                        m = f.autoHideScrollbar ? " " + k[6] : "",
                        n = "x" !== f.axis && "rtl" === e.langDir ? " " + k[7] : "";
                    f.setWidth && b.css("width", f.setWidth), f.setHeight && b.css("height", f.setHeight), f.setLeft = "y" !== f.axis && "rtl" === e.langDir ? "989999px" : f.setLeft, b.addClass(c + " _" + d + "_" + e.idx + m + n).wrapInner("<div id='mCSB_" + e.idx + "' class='mCustomScrollBox mCS-" + f.theme + " " + i + "'><div id='mCSB_" + e.idx + "_container' class='mCSB_container' style='position:relative; top:" + f.setTop + "; left:" + f.setLeft + ";' dir='" + e.langDir + "' /></div>");
                    var o = a("#mCSB_" + e.idx),
                        p = a("#mCSB_" + e.idx + "_container");
                    "y" === f.axis || f.advanced.autoExpandHorizontalScroll || p.css("width", s(p)), "outside" === f.scrollbarPosition ? ("static" === b.css("position") && b.css("position", "relative"), b.css("overflow", "visible"), o.addClass("mCSB_outside").after(j)) : (o.addClass("mCSB_inside").append(j), p.wrap(l)), u.call(this);
                    var q = [a("#mCSB_" + e.idx + "_dragger_vertical"), a("#mCSB_" + e.idx + "_dragger_horizontal")];
                    q[0].css("min-height", q[0].height()), q[1].css("min-width", q[1].width())
                },
                s = function(b) {
                    var c = [b[0].scrollWidth, Math.max.apply(Math, b.children().map(function() {
                            return a(this).outerWidth(!0)
                        }).get())],
                        d = b.parent().width();
                    return c[0] > d ? c[0] : c[1] > d ? c[1] : "100%"
                },
                t = function() {
                    var b = a(this),
                        c = b.data(d),
                        e = c.opt,
                        f = a("#mCSB_" + c.idx + "_container");
                    if (e.advanced.autoExpandHorizontalScroll && "y" !== e.axis) {
                        f.css({
                            width: "auto",
                            "min-width": 0,
                            "overflow-x": "scroll"
                        });
                        var g = Math.ceil(f[0].scrollWidth);
                        3 === e.advanced.autoExpandHorizontalScroll || 2 !== e.advanced.autoExpandHorizontalScroll && g > f.parent().width() ? f.css({
                            width: g,
                            "min-width": "100%",
                            "overflow-x": "inherit"
                        }) : f.css({
                            "overflow-x": "inherit",
                            position: "absolute"
                        }).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({
                            width: Math.ceil(f[0].getBoundingClientRect().right + .4) - Math.floor(f[0].getBoundingClientRect().left),
                            "min-width": "100%",
                            position: "relative"
                        }).unwrap()
                    }
                },
                u = function() {
                    var b = a(this),
                        c = b.data(d),
                        e = c.opt,
                        f = a(".mCSB_" + c.idx + "_scrollbar:first"),
                        g = ca(e.scrollButtons.tabindex) ? "tabindex='" + e.scrollButtons.tabindex + "'" : "",
                        h = ["<a href='#' class='" + k[13] + "' " + g + " />", "<a href='#' class='" + k[14] + "' " + g + " />", "<a href='#' class='" + k[15] + "' " + g + " />", "<a href='#' class='" + k[16] + "' " + g + " />"],
                        i = ["x" === e.axis ? h[2] : h[0], "x" === e.axis ? h[3] : h[1], h[2], h[3]];
                    e.scrollButtons.enable && f.prepend(i[0]).append(i[1]).next(".mCSB_scrollTools").prepend(i[2]).append(i[3])
                },
                v = function() {
                    var b = a(this),
                        c = b.data(d),
                        e = a("#mCSB_" + c.idx),
                        f = a("#mCSB_" + c.idx + "_container"),
                        g = [a("#mCSB_" + c.idx + "_dragger_vertical"), a("#mCSB_" + c.idx + "_dragger_horizontal")],
                        h = [e.height() / f.outerHeight(!1), e.width() / f.outerWidth(!1)],
                        j = [parseInt(g[0].css("min-height")), Math.round(h[0] * g[0].parent().height()), parseInt(g[1].css("min-width")), Math.round(h[1] * g[1].parent().width())],
                        k = i && j[1] < j[0] ? j[0] : j[1],
                        l = i && j[3] < j[2] ? j[2] : j[3];
                    g[0].css({
                        height: k,
                        "max-height": g[0].parent().height() - 10
                    }).find(".mCSB_dragger_bar").css({
                        "line-height": j[0] + "px"
                    }), g[1].css({
                        width: l,
                        "max-width": g[1].parent().width() - 10
                    })
                },
                w = function() {
                    var b = a(this),
                        c = b.data(d),
                        e = a("#mCSB_" + c.idx),
                        f = a("#mCSB_" + c.idx + "_container"),
                        g = [a("#mCSB_" + c.idx + "_dragger_vertical"), a("#mCSB_" + c.idx + "_dragger_horizontal")],
                        h = [f.outerHeight(!1) - e.height(), f.outerWidth(!1) - e.width()],
                        i = [h[0] / (g[0].parent().height() - g[0].height()), h[1] / (g[1].parent().width() - g[1].width())];
                    c.scrollRatio = {
                        y: i[0],
                        x: i[1]
                    }
                },
                x = function(a, b, c) {
                    var d = c ? k[0] + "_expanded" : "",
                        e = a.closest(".mCSB_scrollTools");
                    "active" === b ? (a.toggleClass(k[0] + " " + d), e.toggleClass(k[1]), a[0]._draggable = a[0]._draggable ? 0 : 1) : a[0]._draggable || ("hide" === b ? (a.removeClass(k[0]), e.removeClass(k[1])) : (a.addClass(k[0]), e.addClass(k[1])))
                },
                y = function() {
                    var b = a(this),
                        c = b.data(d),
                        e = a("#mCSB_" + c.idx),
                        f = a("#mCSB_" + c.idx + "_container"),
                        g = null == c.overflowed ? f.height() : f.outerHeight(!1),
                        h = null == c.overflowed ? f.width() : f.outerWidth(!1),
                        i = f[0].scrollHeight,
                        j = f[0].scrollWidth;
                    return i > g && (g = i), j > h && (h = j), [g > e.height(), h > e.width()]
                },
                z = function() {
                    var b = a(this),
                        c = b.data(d),
                        e = c.opt,
                        f = a("#mCSB_" + c.idx),
                        g = a("#mCSB_" + c.idx + "_container"),
                        h = [a("#mCSB_" + c.idx + "_dragger_vertical"), a("#mCSB_" + c.idx + "_dragger_horizontal")];
                    if (W(b), ("x" !== e.axis && !c.overflowed[0] || "y" === e.axis && c.overflowed[0]) && (h[0].add(g).css("top", 0), X(b, "_resetY")), "y" !== e.axis && !c.overflowed[1] || "x" === e.axis && c.overflowed[1]) {
                        var i = dx = 0;
                        "rtl" === c.langDir && (i = f.width() - g.outerWidth(!1), dx = Math.abs(i / c.scrollRatio.x)), g.css("left", i), h[1].css("left", dx), X(b, "_resetX")
                    }
                },
                A = function() {
                    function b() {
                        g = setTimeout(function() {
                            a.event.special.mousewheel ? (clearTimeout(g), H.call(c[0])) : b()
                        }, 100)
                    }
                    var c = a(this),
                        e = c.data(d),
                        f = e.opt;
                    if (!e.bindEvents) {
                        if (E.call(this), f.contentTouchScroll && F.call(this), G.call(this), f.mouseWheel.enable) {
                            var g;
                            b()
                        }
                        M.call(this), O.call(this), f.advanced.autoScrollOnFocus && N.call(this), f.scrollButtons.enable && P.call(this), f.keyboard.enable && Q.call(this), e.bindEvents = !0
                    }
                },
                B = function() {
                    var b = a(this),
                        c = b.data(d),
                        e = c.opt,
                        f = d + "_" + c.idx,
                        g = ".mCSB_" + c.idx + "_scrollbar",
                        h = a("#mCSB_" + c.idx + ",#mCSB_" + c.idx + "_container,#mCSB_" + c.idx + "_container_wrapper," + g + " ." + k[12] + ",#mCSB_" + c.idx + "_dragger_vertical,#mCSB_" + c.idx + "_dragger_horizontal," + g + ">a"),
                        i = a("#mCSB_" + c.idx + "_container");
                    e.advanced.releaseDraggableSelectors && h.add(a(e.advanced.releaseDraggableSelectors)), e.advanced.extraDraggableSelectors && h.add(a(e.advanced.extraDraggableSelectors)), c.bindEvents && (a(document).add(a(!J() || top.document)).unbind("." + f), h.each(function() {
                        a(this).unbind("." + f)
                    }), clearTimeout(b[0]._focusTimeout), _(b[0], "_focusTimeout"), clearTimeout(c.sequential.step), _(c.sequential, "step"), clearTimeout(i[0].onCompleteTimeout), _(i[0], "onCompleteTimeout"), c.bindEvents = !1)
                },
                C = function(b) {
                    var c = a(this),
                        e = c.data(d),
                        f = e.opt,
                        g = a("#mCSB_" + e.idx + "_container_wrapper"),
                        h = g.length ? g : a("#mCSB_" + e.idx + "_container"),
                        i = [a("#mCSB_" + e.idx + "_scrollbar_vertical"), a("#mCSB_" + e.idx + "_scrollbar_horizontal")],
                        j = [i[0].find(".mCSB_dragger"), i[1].find(".mCSB_dragger")];
                    "x" !== f.axis && (e.overflowed[0] && !b ? (i[0].add(j[0]).add(i[0].children("a")).css("display", "block"), h.removeClass(k[8] + " " + k[10])) : (f.alwaysShowScrollbar ? (2 !== f.alwaysShowScrollbar && j[0].css("display", "none"), h.removeClass(k[10])) : (i[0].css("display", "none"), h.addClass(k[10])), h.addClass(k[8]))), "y" !== f.axis && (e.overflowed[1] && !b ? (i[1].add(j[1]).add(i[1].children("a")).css("display", "block"), h.removeClass(k[9] + " " + k[11])) : (f.alwaysShowScrollbar ? (2 !== f.alwaysShowScrollbar && j[1].css("display", "none"), h.removeClass(k[11])) : (i[1].css("display", "none"), h.addClass(k[11])), h.addClass(k[9]))), e.overflowed[0] || e.overflowed[1] ? c.removeClass(k[5]) : c.addClass(k[5])
                },
                D = function(b) {
                    var c = b.type,
                        d = b.target.ownerDocument !== document && null !== frameElement ? [a(frameElement).offset().top, a(frameElement).offset().left] : null,
                        e = J() && b.target.ownerDocument !== top.document && null !== frameElement ? [a(b.view.frameElement).offset().top, a(b.view.frameElement).offset().left] : [0, 0];
                    switch (c) {
                        case "pointerdown":
                        case "MSPointerDown":
                        case "pointermove":
                        case "MSPointerMove":
                        case "pointerup":
                        case "MSPointerUp":
                            return d ? [b.originalEvent.pageY - d[0] + e[0], b.originalEvent.pageX - d[1] + e[1], !1] : [b.originalEvent.pageY, b.originalEvent.pageX, !1];
                        case "touchstart":
                        case "touchmove":
                        case "touchend":
                            var f = b.originalEvent.touches[0] || b.originalEvent.changedTouches[0],
                                g = b.originalEvent.touches.length || b.originalEvent.changedTouches.length;
                            return b.target.ownerDocument !== document ? [f.screenY, f.screenX, g > 1] : [f.pageY, f.pageX, g > 1];
                        default:
                            return d ? [b.pageY - d[0] + e[0], b.pageX - d[1] + e[1], !1] : [b.pageY, b.pageX, !1]
                    }
                },
                E = function() {
                    function b(a, b, d, e) {
                        if (n[0].idleTimer = k.scrollInertia < 233 ? 250 : 0, c.attr("id") === m[1]) var f = "x",
                            i = (c[0].offsetLeft - b + e) * h.scrollRatio.x;
                        else var f = "y",
                            i = (c[0].offsetTop - a + d) * h.scrollRatio.y;
                        X(g, i.toString(), {
                            dir: f,
                            drag: !0
                        })
                    }
                    var c, e, f, g = a(this),
                        h = g.data(d),
                        k = h.opt,
                        l = d + "_" + h.idx,
                        m = ["mCSB_" + h.idx + "_dragger_vertical", "mCSB_" + h.idx + "_dragger_horizontal"],
                        n = a("#mCSB_" + h.idx + "_container"),
                        o = a("#" + m[0] + ",#" + m[1]),
                        p = k.advanced.releaseDraggableSelectors ? o.add(a(k.advanced.releaseDraggableSelectors)) : o,
                        q = k.advanced.extraDraggableSelectors ? a(!J() || top.document).add(a(k.advanced.extraDraggableSelectors)) : a(!J() || top.document);
                    o.bind("contextmenu." + l, function(a) {
                        a.preventDefault()
                    }).bind("mousedown." + l + " touchstart." + l + " pointerdown." + l + " MSPointerDown." + l, function(b) {
                        if (b.stopImmediatePropagation(), b.preventDefault(), aa(b)) {
                            j = !0, i && (document.onselectstart = function() {
                                return !1
                            }), K.call(n, !1), W(g), c = a(this);
                            var d = c.offset(),
                                h = D(b)[0] - d.top,
                                l = D(b)[1] - d.left,
                                m = c.height() + d.top,
                                o = c.width() + d.left;
                            m > h && h > 0 && o > l && l > 0 && (e = h, f = l), x(c, "active", k.autoExpandScrollbar)
                        }
                    }).bind("touchmove." + l, function(a) {
                        a.stopImmediatePropagation(), a.preventDefault();
                        var d = c.offset(),
                            g = D(a)[0] - d.top,
                            h = D(a)[1] - d.left;
                        b(e, f, g, h)
                    }), a(document).add(q).bind("mousemove." + l + " pointermove." + l + " MSPointerMove." + l, function(a) {
                        if (c) {
                            var d = c.offset(),
                                g = D(a)[0] - d.top,
                                h = D(a)[1] - d.left;
                            if (e === g && f === h) return;
                            b(e, f, g, h)
                        }
                    }).add(p).bind("mouseup." + l + " touchend." + l + " pointerup." + l + " MSPointerUp." + l, function() {
                        c && (x(c, "active", k.autoExpandScrollbar), c = null), j = !1, i && (document.onselectstart = null), K.call(n, !0)
                    })
                },
                F = function() {
                    function c(a) {
                        if (!ba(a) || j || D(a)[2]) return void(b = 0);
                        b = 1, w = 0, x = 0, k = 1, y.removeClass("mCS_touch_action");
                        var c = E.offset();
                        l = D(a)[0] - c.top, m = D(a)[1] - c.left, L = [D(a)[0], D(a)[1]]
                    }

                    function e(a) {
                        if (ba(a) && !j && !D(a)[2] && (A.documentTouchScroll || a.preventDefault(), a.stopImmediatePropagation(), (!x || w) && k)) {
                            q = Z();
                            var b = C.offset(),
                                c = D(a)[0] - b.top,
                                d = D(a)[1] - b.left,
                                e = "mcsLinearOut";
                            if (G.push(c), H.push(d), L[2] = Math.abs(D(a)[0] - L[0]), L[3] = Math.abs(D(a)[1] - L[1]), z.overflowed[0]) var f = F[0].parent().height() - F[0].height(),
                                g = l - c > 0 && c - l > -f * z.scrollRatio.y && (2 * L[3] < L[2] || "yx" === A.axis);
                            if (z.overflowed[1]) var h = F[1].parent().width() - F[1].width(),
                                n = m - d > 0 && d - m > -h * z.scrollRatio.x && (2 * L[2] < L[3] || "yx" === A.axis);
                            g || n ? (O || a.preventDefault(), w = 1) : (x = 1, y.addClass("mCS_touch_action")), O && a.preventDefault(), u = "yx" === A.axis ? [l - c, m - d] : "x" === A.axis ? [null, m - d] : [l - c, null], E[0].idleTimer = 250, z.overflowed[0] && i(u[0], I, e, "y", "all", !0), z.overflowed[1] && i(u[1], I, e, "x", K, !0)
                        }
                    }

                    function f(a) {
                        if (!ba(a) || j || D(a)[2]) return void(b = 0);
                        b = 1, a.stopImmediatePropagation(), W(y), p = Z();
                        var c = C.offset();
                        n = D(a)[0] - c.top, o = D(a)[1] - c.left, G = [], H = []
                    }

                    function g(a) {
                        if (ba(a) && !j && !D(a)[2]) {
                            k = 0, a.stopImmediatePropagation(), w = 0, x = 0, r = Z();
                            var b = C.offset(),
                                c = D(a)[0] - b.top,
                                d = D(a)[1] - b.left;
                            if (!(r - q > 30)) {
                                t = 1e3 / (r - p);
                                var e = "mcsEaseOut",
                                    f = 2.5 > t,
                                    g = f ? [G[G.length - 2], H[H.length - 2]] : [0, 0];
                                s = f ? [c - g[0], d - g[1]] : [c - n, d - o];
                                var l = [Math.abs(s[0]), Math.abs(s[1])];
                                t = f ? [Math.abs(s[0] / 4), Math.abs(s[1] / 4)] : [t, t];
                                var m = [Math.abs(E[0].offsetTop) - s[0] * h(l[0] / t[0], t[0]), Math.abs(E[0].offsetLeft) - s[1] * h(l[1] / t[1], t[1])];
                                u = "yx" === A.axis ? [m[0], m[1]] : "x" === A.axis ? [null, m[1]] : [m[0], null], v = [4 * l[0] + A.scrollInertia, 4 * l[1] + A.scrollInertia];
                                var y = parseInt(A.contentTouchScroll) || 0;
                                u[0] = l[0] > y ? u[0] : 0, u[1] = l[1] > y ? u[1] : 0, z.overflowed[0] && i(u[0], v[0], e, "y", K, !1), z.overflowed[1] && i(u[1], v[1], e, "x", K, !1)
                            }
                        }
                    }

                    function h(a, b) {
                        var c = [1.5 * b, 2 * b, b / 1.5, b / 2];
                        return a > 90 ? b > 4 ? c[0] : c[3] : a > 60 ? b > 3 ? c[3] : c[2] : a > 30 ? b > 8 ? c[1] : b > 6 ? c[0] : b > 4 ? b : c[2] : b > 8 ? b : c[3]
                    }

                    function i(a, b, c, d, e, f) {
                        a && X(y, a.toString(), {
                            dur: b,
                            scrollEasing: c,
                            dir: d,
                            overwrite: e,
                            drag: f
                        })
                    }
                    var k, l, m, n, o, p, q, r, s, t, u, v, w, x, y = a(this),
                        z = y.data(d),
                        A = z.opt,
                        B = d + "_" + z.idx,
                        C = a("#mCSB_" + z.idx),
                        E = a("#mCSB_" + z.idx + "_container"),
                        F = [a("#mCSB_" + z.idx + "_dragger_vertical"), a("#mCSB_" + z.idx + "_dragger_horizontal")],
                        G = [],
                        H = [],
                        I = 0,
                        K = "yx" === A.axis ? "none" : "all",
                        L = [],
                        M = E.find("iframe"),
                        N = ["touchstart." + B + " pointerdown." + B + " MSPointerDown." + B, "touchmove." + B + " pointermove." + B + " MSPointerMove." + B, "touchend." + B + " pointerup." + B + " MSPointerUp." + B],
                        O = void 0 !== document.body.style.touchAction && "" !== document.body.style.touchAction;
                    E.bind(N[0], function(a) {
                        c(a)
                    }).bind(N[1], function(a) {
                        e(a)
                    }), C.bind(N[0], function(a) {
                        f(a)
                    }).bind(N[2], function(a) {
                        g(a)
                    }), M.length && M.each(function() {
                        a(this).bind("load", function() {
                            J(this) && a(this.contentDocument || this.contentWindow.document).bind(N[0], function(a) {
                                c(a), f(a)
                            }).bind(N[1], function(a) {
                                e(a)
                            }).bind(N[2], function(a) {
                                g(a)
                            })
                        })
                    })
                },
                G = function() {
                    function c() {
                        return window.getSelection ? window.getSelection().toString() : document.selection && "Control" != document.selection.type ? document.selection.createRange().text : 0
                    }

                    function e(a, b, c) {
                        k.type = c && f ? "stepped" : "stepless", k.scrollAmount = 10, R(g, a, b, "mcsLinearOut", c ? 60 : null)
                    }
                    var f, g = a(this),
                        h = g.data(d),
                        i = h.opt,
                        k = h.sequential,
                        l = d + "_" + h.idx,
                        m = a("#mCSB_" + h.idx + "_container"),
                        n = m.parent();
                    m.bind("mousedown." + l, function() {
                        b || f || (f = 1, j = !0)
                    }).add(document).bind("mousemove." + l, function(a) {
                        if (!b && f && c()) {
                            var d = m.offset(),
                                g = D(a)[0] - d.top + m[0].offsetTop,
                                j = D(a)[1] - d.left + m[0].offsetLeft;
                            g > 0 && g < n.height() && j > 0 && j < n.width() ? k.step && e("off", null, "stepped") : ("x" !== i.axis && h.overflowed[0] && (0 > g ? e("on", 38) : g > n.height() && e("on", 40)), "y" !== i.axis && h.overflowed[1] && (0 > j ? e("on", 37) : j > n.width() && e("on", 39)))
                        }
                    }).bind("mouseup." + l + " dragend." + l, function() {
                        b || (f && (f = 0, e("off", null)), j = !1)
                    })
                },
                H = function() {
                    function b(b, d) {
                        if (W(c), !L(c, b.target)) {
                            var g = "auto" !== f.mouseWheel.deltaFactor ? parseInt(f.mouseWheel.deltaFactor) : i && b.deltaFactor < 100 ? 100 : b.deltaFactor || 100,
                                k = f.scrollInertia;
                            if ("x" === f.axis || "x" === f.mouseWheel.axis) var l = "x",
                                m = [Math.round(g * e.scrollRatio.x), parseInt(f.mouseWheel.scrollAmount)],
                                n = "auto" !== f.mouseWheel.scrollAmount ? m[1] : m[0] >= h.width() ? .9 * h.width() : m[0],
                                o = Math.abs(a("#mCSB_" + e.idx + "_container")[0].offsetLeft),
                                p = j[1][0].offsetLeft,
                                q = j[1].parent().width() - j[1].width(),
                                r = "y" === f.mouseWheel.axis ? b.deltaY || d : b.deltaX;
                            else var l = "y",
                                m = [Math.round(g * e.scrollRatio.y), parseInt(f.mouseWheel.scrollAmount)],
                                n = "auto" !== f.mouseWheel.scrollAmount ? m[1] : m[0] >= h.height() ? .9 * h.height() : m[0],
                                o = Math.abs(a("#mCSB_" + e.idx + "_container")[0].offsetTop),
                                p = j[0][0].offsetTop,
                                q = j[0].parent().height() - j[0].height(),
                                r = b.deltaY || d;
                            "y" === l && !e.overflowed[0] || "x" === l && !e.overflowed[1] || ((f.mouseWheel.invert || b.webkitDirectionInvertedFromDevice) && (r = -r), f.mouseWheel.normalizeDelta && (r = 0 > r ? -1 : 1), (r > 0 && 0 !== p || 0 > r && p !== q || f.mouseWheel.preventDefault) && (b.stopImmediatePropagation(), b.preventDefault()), b.deltaFactor < 5 && !f.mouseWheel.normalizeDelta && (n = b.deltaFactor, k = 17), X(c, (o - r * n).toString(), {
                                dir: l,
                                dur: k
                            }))
                        }
                    }
                    if (a(this).data(d)) {
                        var c = a(this),
                            e = c.data(d),
                            f = e.opt,
                            g = d + "_" + e.idx,
                            h = a("#mCSB_" + e.idx),
                            j = [a("#mCSB_" + e.idx + "_dragger_vertical"), a("#mCSB_" + e.idx + "_dragger_horizontal")],
                            k = a("#mCSB_" + e.idx + "_container").find("iframe");
                        k.length && k.each(function() {
                            a(this).bind("load", function() {
                                J(this) && a(this.contentDocument || this.contentWindow.document).bind("mousewheel." + g, function(a, c) {
                                    b(a, c)
                                })
                            })
                        }), h.bind("mousewheel." + g, function(a, c) {
                            b(a, c)
                        })
                    }
                },
                I = new Object,
                J = function(b) {
                    var c = !1,
                        d = !1,
                        e = null;
                    if (void 0 === b ? d = "#empty" : void 0 !== a(b).attr("id") && (d = a(b).attr("id")), !1 !== d && void 0 !== I[d]) return I[d];
                    if (b) {
                        try {
                            var f = b.contentDocument || b.contentWindow.document;
                            e = f.body.innerHTML
                        } catch (a) {}
                        c = null !== e
                    } else {
                        try {
                            var f = top.document;
                            e = f.body.innerHTML
                        } catch (a) {}
                        c = null !== e
                    }
                    return !1 !== d && (I[d] = c), c
                },
                K = function(a) {
                    var b = this.find("iframe");
                    if (b.length) {
                        var c = a ? "auto" : "none";
                        b.css("pointer-events", c)
                    }
                },
                L = function(b, c) {
                    var e = c.nodeName.toLowerCase(),
                        f = b.data(d).opt.mouseWheel.disableOver,
                        g = ["select", "textarea"];
                    return a.inArray(e, f) > -1 && !(a.inArray(e, g) > -1 && !a(c).is(":focus"))
                },
                M = function() {
                    var b, c = a(this),
                        e = c.data(d),
                        f = d + "_" + e.idx,
                        g = a("#mCSB_" + e.idx + "_container"),
                        h = g.parent();
                    a(".mCSB_" + e.idx + "_scrollbar ." + k[12]).bind("mousedown." + f + " touchstart." + f + " pointerdown." + f + " MSPointerDown." + f, function(c) {
                        j = !0, a(c.target).hasClass("mCSB_dragger") || (b = 1)
                    }).bind("touchend." + f + " pointerup." + f + " MSPointerUp." + f, function() {
                        j = !1
                    }).bind("click." + f, function(d) {
                        if (b && (b = 0, a(d.target).hasClass(k[12]) || a(d.target).hasClass("mCSB_draggerRail"))) {
                            W(c);
                            var f = a(this),
                                i = f.find(".mCSB_dragger");
                            if (f.parent(".mCSB_scrollTools_horizontal").length > 0) {
                                if (!e.overflowed[1]) return;
                                var j = "x",
                                    l = d.pageX > i.offset().left ? -1 : 1,
                                    m = Math.abs(g[0].offsetLeft) - l * (.9 * h.width())
                            } else {
                                if (!e.overflowed[0]) return;
                                var j = "y",
                                    l = d.pageY > i.offset().top ? -1 : 1,
                                    m = Math.abs(g[0].offsetTop) - l * (.9 * h.height())
                            }
                            X(c, m.toString(), {
                                dir: j,
                                scrollEasing: "mcsEaseInOut"
                            })
                        }
                    })
                },
                N = function() {
                    var b = a(this),
                        c = b.data(d),
                        e = c.opt,
                        f = d + "_" + c.idx,
                        g = a("#mCSB_" + c.idx + "_container"),
                        h = g.parent();
                    g.bind("focusin." + f, function() {
                        var c = a(document.activeElement),
                            d = g.find(".mCustomScrollBox").length,
                            f = 0;
                        c.is(e.advanced.autoScrollOnFocus) && (W(b), clearTimeout(b[0]._focusTimeout), b[0]._focusTimer = d ? (f + 17) * d : 0, b[0]._focusTimeout = setTimeout(function() {
                            var a = [da(c)[0], da(c)[1]],
                                d = [g[0].offsetTop, g[0].offsetLeft],
                                i = [d[0] + a[0] >= 0 && d[0] + a[0] < h.height() - c.outerHeight(!1), d[1] + a[1] >= 0 && d[0] + a[1] < h.width() - c.outerWidth(!1)],
                                j = "yx" !== e.axis || i[0] || i[1] ? "all" : "none";
                            "x" === e.axis || i[0] || X(b, a[0].toString(), {
                                dir: "y",
                                scrollEasing: "mcsEaseInOut",
                                overwrite: j,
                                dur: f
                            }), "y" === e.axis || i[1] || X(b, a[1].toString(), {
                                dir: "x",
                                scrollEasing: "mcsEaseInOut",
                                overwrite: j,
                                dur: f
                            })
                        }, b[0]._focusTimer))
                    })
                },
                O = function() {
                    var b = a(this),
                        c = b.data(d),
                        e = d + "_" + c.idx,
                        f = a("#mCSB_" + c.idx + "_container").parent();
                    f.bind("scroll." + e, function() {
                        0 === f.scrollTop() && 0 === f.scrollLeft() || a(".mCSB_" + c.idx + "_scrollbar").css("visibility", "hidden")
                    })
                },
                P = function() {
                    var b = a(this),
                        c = b.data(d),
                        e = c.opt,
                        f = c.sequential,
                        g = d + "_" + c.idx,
                        h = ".mCSB_" + c.idx + "_scrollbar";
                    a(h + ">a").bind("contextmenu." + g, function(a) {
                        a.preventDefault()
                    }).bind("mousedown." + g + " touchstart." + g + " pointerdown." + g + " MSPointerDown." + g + " mouseup." + g + " touchend." + g + " pointerup." + g + " MSPointerUp." + g + " mouseout." + g + " pointerout." + g + " MSPointerOut." + g + " click." + g, function(d) {
                        function g(a, c) {
                            f.scrollAmount = e.scrollButtons.scrollAmount, R(b, a, c)
                        }
                        if (d.preventDefault(), aa(d)) {
                            var h = a(this).attr("class");
                            switch (f.type = e.scrollButtons.scrollType, d.type) {
                                case "mousedown":
                                case "touchstart":
                                case "pointerdown":
                                case "MSPointerDown":
                                    if ("stepped" === f.type) return;
                                    j = !0, c.tweenRunning = !1, g("on", h);
                                    break;
                                case "mouseup":
                                case "touchend":
                                case "pointerup":
                                case "MSPointerUp":
                                case "mouseout":
                                case "pointerout":
                                case "MSPointerOut":
                                    if ("stepped" === f.type) return;
                                    j = !1, f.dir && g("off", h);
                                    break;
                                case "click":
                                    if ("stepped" !== f.type || c.tweenRunning) return;
                                    g("on", h)
                            }
                        }
                    })
                },
                Q = function() {
                    function b(b) {
                        function d(a, b) {
                            g.type = f.keyboard.scrollType, g.scrollAmount = f.keyboard.scrollAmount, "stepped" === g.type && e.tweenRunning || R(c, a, b)
                        }
                        switch (b.type) {
                            case "blur":
                                e.tweenRunning && g.dir && d("off", null);
                                break;
                            case "keydown":
                            case "keyup":
                                var h = b.keyCode ? b.keyCode : b.which,
                                    i = "on";
                                if ("x" !== f.axis && (38 === h || 40 === h) || "y" !== f.axis && (37 === h || 39 === h)) {
                                    if ((38 === h || 40 === h) && !e.overflowed[0] || (37 === h || 39 === h) && !e.overflowed[1]) return;
                                    "keyup" === b.type && (i = "off"), a(document.activeElement).is(l) || (b.preventDefault(), b.stopImmediatePropagation(), d(i, h))
                                } else if (33 === h || 34 === h) {
                                    if ((e.overflowed[0] || e.overflowed[1]) && (b.preventDefault(), b.stopImmediatePropagation()), "keyup" === b.type) {
                                        W(c);
                                        var m = 34 === h ? -1 : 1;
                                        if ("x" === f.axis || "yx" === f.axis && e.overflowed[1] && !e.overflowed[0]) var n = "x",
                                            o = Math.abs(j[0].offsetLeft) - m * (.9 * k.width());
                                        else var n = "y",
                                            o = Math.abs(j[0].offsetTop) - m * (.9 * k.height());
                                        X(c, o.toString(), {
                                            dir: n,
                                            scrollEasing: "mcsEaseInOut"
                                        })
                                    }
                                } else if ((35 === h || 36 === h) && !a(document.activeElement).is(l) && ((e.overflowed[0] || e.overflowed[1]) && (b.preventDefault(), b.stopImmediatePropagation()), "keyup" === b.type)) {
                                    if ("x" === f.axis || "yx" === f.axis && e.overflowed[1] && !e.overflowed[0]) var n = "x",
                                        o = 35 === h ? Math.abs(k.width() - j.outerWidth(!1)) : 0;
                                    else var n = "y",
                                        o = 35 === h ? Math.abs(k.height() - j.outerHeight(!1)) : 0;
                                    X(c, o.toString(), {
                                        dir: n,
                                        scrollEasing: "mcsEaseInOut"
                                    })
                                }
                        }
                    }
                    var c = a(this),
                        e = c.data(d),
                        f = e.opt,
                        g = e.sequential,
                        h = d + "_" + e.idx,
                        i = a("#mCSB_" + e.idx),
                        j = a("#mCSB_" + e.idx + "_container"),
                        k = j.parent(),
                        l = "input,textarea,select,datalist,keygen,[contenteditable='true']",
                        m = j.find("iframe"),
                        n = ["blur." + h + " keydown." + h + " keyup." + h];
                    m.length && m.each(function() {
                        a(this).bind("load", function() {
                            J(this) && a(this.contentDocument || this.contentWindow.document).bind(n[0], function(a) {
                                b(a)
                            })
                        })
                    }), i.attr("tabindex", "0").bind(n[0], function(a) {
                        b(a)
                    })
                },
                R = function(b, c, e, f, g) {
                    function h(a) {
                        l.snapAmount && (m.scrollAmount = l.snapAmount instanceof Array ? "x" === m.dir[0] ? l.snapAmount[1] : l.snapAmount[0] : l.snapAmount);
                        var c = "stepped" !== m.type,
                            d = g || (a ? c ? p / 1.5 : q : 1e3 / 60),
                            e = a ? c ? 7.5 : 40 : 2.5,
                            i = [Math.abs(n[0].offsetTop), Math.abs(n[0].offsetLeft)],
                            k = [j.scrollRatio.y > 10 ? 10 : j.scrollRatio.y, j.scrollRatio.x > 10 ? 10 : j.scrollRatio.x],
                            o = "x" === m.dir[0] ? i[1] + m.dir[1] * (k[1] * e) : i[0] + m.dir[1] * (k[0] * e),
                            r = "x" === m.dir[0] ? i[1] + m.dir[1] * parseInt(m.scrollAmount) : i[0] + m.dir[1] * parseInt(m.scrollAmount),
                            s = "auto" !== m.scrollAmount ? r : o,
                            t = f || (a ? c ? "mcsLinearOut" : "mcsEaseInOut" : "mcsLinear"),
                            u = !!a;
                        return a && 17 > d && (s = "x" === m.dir[0] ? i[1] : i[0]), X(b, s.toString(), {
                            dir: m.dir[0],
                            scrollEasing: t,
                            dur: d,
                            onComplete: u
                        }), a ? void(m.dir = !1) : (clearTimeout(m.step), void(m.step = setTimeout(function() {
                            h()
                        }, d)))
                    }

                    function i() {
                        clearTimeout(m.step), _(m, "step"), W(b)
                    }
                    var j = b.data(d),
                        l = j.opt,
                        m = j.sequential,
                        n = a("#mCSB_" + j.idx + "_container"),
                        o = "stepped" === m.type,
                        p = l.scrollInertia < 26 ? 26 : l.scrollInertia,
                        q = l.scrollInertia < 1 ? 17 : l.scrollInertia;
                    switch (c) {
                        case "on":
                            if (m.dir = [e === k[16] || e === k[15] || 39 === e || 37 === e ? "x" : "y", e === k[13] || e === k[15] || 38 === e || 37 === e ? -1 : 1], W(b), ca(e) && "stepped" === m.type) return;
                            h(o);
                            break;
                        case "off":
                            i(), (o || j.tweenRunning && m.dir) && h(!0)
                    }
                },
                S = function(b) {
                    var c = a(this).data(d).opt,
                        e = [];
                    return "function" == typeof b && (b = b()), b instanceof Array ? e = b.length > 1 ? [b[0], b[1]] : "x" === c.axis ? [null, b[0]] : [b[0], null] : (e[0] = b.y ? b.y : b.x || "x" === c.axis ? null : b, e[1] = b.x ? b.x : b.y || "y" === c.axis ? null : b), "function" == typeof e[0] && (e[0] = e[0]()), "function" == typeof e[1] && (e[1] = e[1]()), e
                },
                T = function(b, c) {
                    if (null != b && void 0 !== b) {
                        var e = a(this),
                            f = e.data(d),
                            g = f.opt,
                            h = a("#mCSB_" + f.idx + "_container"),
                            i = h.parent(),
                            j = typeof b;
                        c || (c = "x" === g.axis ? "x" : "y");
                        var k = "x" === c ? h.outerWidth(!1) - i.width() : h.outerHeight(!1) - i.height(),
                            m = "x" === c ? h[0].offsetLeft : h[0].offsetTop,
                            n = "x" === c ? "left" : "top";
                        switch (j) {
                            case "function":
                                return b();
                            case "object":
                                var o = b.jquery ? b : a(b);
                                if (!o.length) return;
                                return "x" === c ? da(o)[1] : da(o)[0];
                            case "string":
                            case "number":
                                if (ca(b)) return Math.abs(b);
                                if (-1 !== b.indexOf("%")) return Math.abs(k * parseInt(b) / 100);
                                if (-1 !== b.indexOf("-=")) return Math.abs(m - parseInt(b.split("-=")[1]));
                                if (-1 !== b.indexOf("+=")) {
                                    var p = m + parseInt(b.split("+=")[1]);
                                    return p >= 0 ? 0 : Math.abs(p)
                                }
                                if (-1 !== b.indexOf("px") && ca(b.split("px")[0])) return Math.abs(b.split("px")[0]);
                                if ("top" === b || "left" === b) return 0;
                                if ("bottom" === b) return Math.abs(i.height() - h.outerHeight(!1));
                                if ("right" === b) return Math.abs(i.width() - h.outerWidth(!1));
                                if ("first" === b || "last" === b) {
                                    var o = h.find(":" + b);
                                    return "x" === c ? da(o)[1] : da(o)[0]
                                }
                                return a(b).length ? "x" === c ? da(a(b))[1] : da(a(b))[0] : (h.css(n, b), void l.update.call(null, e[0]))
                        }
                    }
                },
                U = function(b) {
                    function c() {
                        return clearTimeout(m[0].autoUpdate), 0 === h.parents("html").length ? void(h = null) : void(m[0].autoUpdate = setTimeout(function() {
                            return j.advanced.updateOnSelectorChange && (i.poll.change.n = f(), i.poll.change.n !== i.poll.change.o) ? (i.poll.change.o = i.poll.change.n, void g(3)) : j.advanced.updateOnContentResize && (i.poll.size.n = h[0].scrollHeight + h[0].scrollWidth + m[0].offsetHeight + h[0].offsetHeight + h[0].offsetWidth, i.poll.size.n !== i.poll.size.o) ? (i.poll.size.o = i.poll.size.n, void g(1)) : !j.advanced.updateOnImageLoad || "auto" === j.advanced.updateOnImageLoad && "y" === j.axis || (i.poll.img.n = m.find("img").length, i.poll.img.n === i.poll.img.o) ? void((j.advanced.updateOnSelectorChange || j.advanced.updateOnContentResize || j.advanced.updateOnImageLoad) && c()) : (i.poll.img.o = i.poll.img.n, void m.find("img").each(function() {
                                e(this)
                            }))
                        }, j.advanced.autoUpdateTimeout))
                    }

                    function e(b) {
                        function c(a, b) {
                            return function() {
                                return b.apply(a, arguments)
                            }
                        }

                        function d() {
                            this.onload = null, a(b).addClass(k[2]), g(2)
                        }
                        if (a(b).hasClass(k[2])) return void g();
                        var e = new Image;
                        e.onload = c(e, d), e.src = b.src
                    }

                    function f() {
                        !0 === j.advanced.updateOnSelectorChange && (j.advanced.updateOnSelectorChange = "*");
                        var a = 0,
                            b = m.find(j.advanced.updateOnSelectorChange);
                        return j.advanced.updateOnSelectorChange && b.length > 0 && b.each(function() {
                            a += this.offsetHeight + this.offsetWidth
                        }), a
                    }

                    function g(a) {
                        clearTimeout(m[0].autoUpdate), l.update.call(null, h[0], a)
                    }
                    var h = a(this),
                        i = h.data(d),
                        j = i.opt,
                        m = a("#mCSB_" + i.idx + "_container");
                    return b ? (clearTimeout(m[0].autoUpdate), void _(m[0], "autoUpdate")) : void c()
                },
                V = function(a, b, c) {
                    return Math.round(a / b) * b - c
                },
                W = function(b) {
                    var c = b.data(d);
                    a("#mCSB_" + c.idx + "_container,#mCSB_" + c.idx + "_container_wrapper,#mCSB_" + c.idx + "_dragger_vertical,#mCSB_" + c.idx + "_dragger_horizontal").each(function() {
                        $.call(this)
                    })
                },
                X = function(b, c, e) {
                    function f(a) {
                        return i && j.callbacks[a] && "function" == typeof j.callbacks[a]
                    }

                    function g() {
                        return [j.callbacks.alwaysTriggerOffsets || u >= v[0] + y, j.callbacks.alwaysTriggerOffsets || -z >= u]
                    }

                    function h() {
                        var a = [n[0].offsetTop, n[0].offsetLeft],
                            c = [s[0].offsetTop, s[0].offsetLeft],
                            d = [n.outerHeight(!1), n.outerWidth(!1)],
                            f = [m.height(), m.width()];
                        b[0].mcs = {
                            content: n,
                            top: a[0],
                            left: a[1],
                            draggerTop: c[0],
                            draggerLeft: c[1],
                            topPct: Math.round(100 * Math.abs(a[0]) / (Math.abs(d[0]) - f[0])),
                            leftPct: Math.round(100 * Math.abs(a[1]) / (Math.abs(d[1]) - f[1])),
                            direction: e.dir
                        }
                    }
                    var i = b.data(d),
                        j = i.opt,
                        k = {
                            trigger: "internal",
                            dir: "y",
                            scrollEasing: "mcsEaseOut",
                            drag: !1,
                            dur: j.scrollInertia,
                            overwrite: "all",
                            callbacks: !0,
                            onStart: !0,
                            onUpdate: !0,
                            onComplete: !0
                        },
                        e = a.extend(k, e),
                        l = [e.dur, e.drag ? 0 : e.dur],
                        m = a("#mCSB_" + i.idx),
                        n = a("#mCSB_" + i.idx + "_container"),
                        o = n.parent(),
                        p = j.callbacks.onTotalScrollOffset ? S.call(b, j.callbacks.onTotalScrollOffset) : [0, 0],
                        q = j.callbacks.onTotalScrollBackOffset ? S.call(b, j.callbacks.onTotalScrollBackOffset) : [0, 0];
                    if (i.trigger = e.trigger, 0 === o.scrollTop() && 0 === o.scrollLeft() || (a(".mCSB_" + i.idx + "_scrollbar").css("visibility", "visible"), o.scrollTop(0).scrollLeft(0)), "_resetY" !== c || i.contentReset.y || (f("onOverflowYNone") && j.callbacks.onOverflowYNone.call(b[0]), i.contentReset.y = 1), "_resetX" !== c || i.contentReset.x || (f("onOverflowXNone") && j.callbacks.onOverflowXNone.call(b[0]), i.contentReset.x = 1), "_resetY" !== c && "_resetX" !== c) {
                        if (!i.contentReset.y && b[0].mcs || !i.overflowed[0] || (f("onOverflowY") && j.callbacks.onOverflowY.call(b[0]), i.contentReset.x = null), !i.contentReset.x && b[0].mcs || !i.overflowed[1] || (f("onOverflowX") && j.callbacks.onOverflowX.call(b[0]), i.contentReset.x = null), j.snapAmount) {
                            var r = j.snapAmount instanceof Array ? "x" === e.dir ? j.snapAmount[1] : j.snapAmount[0] : j.snapAmount;
                            c = V(c, r, j.snapOffset)
                        }
                        switch (e.dir) {
                            case "x":
                                var s = a("#mCSB_" + i.idx + "_dragger_horizontal"),
                                    t = "left",
                                    u = n[0].offsetLeft,
                                    v = [m.width() - n.outerWidth(!1), s.parent().width() - s.width()],
                                    w = [c, 0 === c ? 0 : c / i.scrollRatio.x],
                                    y = p[1],
                                    z = q[1],
                                    A = y > 0 ? y / i.scrollRatio.x : 0,
                                    B = z > 0 ? z / i.scrollRatio.x : 0;
                                break;
                            case "y":
                                var s = a("#mCSB_" + i.idx + "_dragger_vertical"),
                                    t = "top",
                                    u = n[0].offsetTop,
                                    v = [m.height() - n.outerHeight(!1), s.parent().height() - s.height()],
                                    w = [c, 0 === c ? 0 : c / i.scrollRatio.y],
                                    y = p[0],
                                    z = q[0],
                                    A = y > 0 ? y / i.scrollRatio.y : 0,
                                    B = z > 0 ? z / i.scrollRatio.y : 0
                        }
                        w[1] < 0 || 0 === w[0] && 0 === w[1] ? w = [0, 0] : w[1] >= v[1] ? w = [v[0], v[1]] : w[0] = -w[0], b[0].mcs || (h(), f("onInit") && j.callbacks.onInit.call(b[0])), clearTimeout(n[0].onCompleteTimeout), Y(s[0], t, Math.round(w[1]), l[1], e.scrollEasing), !i.tweenRunning && (0 === u && w[0] >= 0 || u === v[0] && w[0] <= v[0]) || Y(n[0], t, Math.round(w[0]), l[0], e.scrollEasing, e.overwrite, {
                            onStart: function() {
                                e.callbacks && e.onStart && !i.tweenRunning && (f("onScrollStart") && (h(), j.callbacks.onScrollStart.call(b[0])), i.tweenRunning = !0, x(s), i.cbOffsets = g())
                            },
                            onUpdate: function() {
                                e.callbacks && e.onUpdate && f("whileScrolling") && (h(), j.callbacks.whileScrolling.call(b[0]))
                            },
                            onComplete: function() {
                                if (e.callbacks && e.onComplete) {
                                    "yx" === j.axis && clearTimeout(n[0].onCompleteTimeout);
                                    var a = n[0].idleTimer || 0;
                                    n[0].onCompleteTimeout = setTimeout(function() {
                                        f("onScroll") && (h(), j.callbacks.onScroll.call(b[0])), f("onTotalScroll") && w[1] >= v[1] - A && i.cbOffsets[0] && (h(), j.callbacks.onTotalScroll.call(b[0])), f("onTotalScrollBack") && w[1] <= B && i.cbOffsets[1] && (h(), j.callbacks.onTotalScrollBack.call(b[0])), i.tweenRunning = !1, n[0].idleTimer = 0, x(s, "hide")
                                    }, a)
                                }
                            }
                        })
                    }
                },
                Y = function(a, b, c, d, e, f, g) {
                    function h() {
                        v.stop || (s || o.call(), s = Z() - r, i(), s >= v.time && (v.time = s > v.time ? s + m - (s - v.time) : s + m - 1, v.time < s + 1 && (v.time = s + 1)), v.time < d ? v.id = n(h) : q.call())
                    }

                    function i() {
                        d > 0 ? (v.currVal = l(v.time, t, w, d, e), u[b] = Math.round(v.currVal) + "px") : u[b] = c + "px", p.call()
                    }

                    function j() {
                        m = 1e3 / 60, v.time = s + m, n = window.requestAnimationFrame ? window.requestAnimationFrame : function(a) {
                            return i(), setTimeout(a, .01)
                        }, v.id = n(h)
                    }

                    function k() {
                        null != v.id && (window.requestAnimationFrame ? window.cancelAnimationFrame(v.id) : clearTimeout(v.id), v.id = null)
                    }

                    function l(a, b, c, d, e) {
                        switch (e) {
                            case "linear":
                            case "mcsLinear":
                                return c * a / d + b;
                            case "mcsLinearOut":
                                return a /= d, a--, c * Math.sqrt(1 - a * a) + b;
                            case "easeInOutSmooth":
                                return a /= d / 2, 1 > a ? c / 2 * a * a + b : (a--, -c / 2 * (a * (a - 2) - 1) + b);
                            case "easeInOutStrong":
                                return a /= d / 2, 1 > a ? c / 2 * Math.pow(2, 10 * (a - 1)) + b : (a--, c / 2 * (2 - Math.pow(2, -10 * a)) + b);
                            case "easeInOut":
                            case "mcsEaseInOut":
                                return a /= d / 2, 1 > a ? c / 2 * a * a * a + b : (a -= 2, c / 2 * (a * a * a + 2) + b);
                            case "easeOutSmooth":
                                return a /= d, a--, -c * (a * a * a * a - 1) + b;
                            case "easeOutStrong":
                                return c * (1 - Math.pow(2, -10 * a / d)) + b;
                            case "easeOut":
                            case "mcsEaseOut":
                            default:
                                var f = (a /= d) * a,
                                    g = f * a;
                                return b + c * (.499999999999997 * g * f + -2.5 * f * f + 5.5 * g + -6.5 * f + 4 * a)
                        }
                    }
                    a._mTween || (a._mTween = {
                        top: {},
                        left: {}
                    });
                    var m, n, g = g || {},
                        o = g.onStart || function() {},
                        p = g.onUpdate || function() {},
                        q = g.onComplete || function() {},
                        r = Z(),
                        s = 0,
                        t = a.offsetTop,
                        u = a.style,
                        v = a._mTween[b];
                    "left" === b && (t = a.offsetLeft);
                    var w = c - t;
                    v.stop = 0, "none" !== f && k(), j()
                },
                Z = function() {
                    return window.performance && window.performance.now ? window.performance.now() : window.performance && window.performance.webkitNow ? window.performance.webkitNow() : Date.now ? Date.now() : (new Date).getTime()
                },
                $ = function() {
                    var a = this;
                    a._mTween || (a._mTween = {
                        top: {},
                        left: {}
                    });
                    for (var b = ["top", "left"], c = 0; c < b.length; c++) {
                        var d = b[c];
                        a._mTween[d].id && (window.requestAnimationFrame ? window.cancelAnimationFrame(a._mTween[d].id) : clearTimeout(a._mTween[d].id), a._mTween[d].id = null, a._mTween[d].stop = 1)
                    }
                },
                _ = function(a, b) {
                    try {
                        delete a[b]
                    } catch (c) {
                        a[b] = null
                    }
                },
                aa = function(a) {
                    return !(a.which && 1 !== a.which)
                },
                ba = function(a) {
                    var b = a.originalEvent.pointerType;
                    return !(b && "touch" !== b && 2 !== b)
                },
                ca = function(a) {
                    return !isNaN(parseFloat(a)) && isFinite(a)
                },
                da = function(a) {
                    var b = a.parents(".mCSB_container");
                    return [a.offset().top - b.offset().top, a.offset().left - b.offset().left]
                },
                ea = function() {
                    function a() {
                        var a = ["webkit", "moz", "ms", "o"];
                        if ("hidden" in document) return "hidden";
                        for (var b = 0; b < a.length; b++)
                            if (a[b] + "Hidden" in document) return a[b] + "Hidden";
                        return null
                    }
                    var b = a();
                    return !!b && document[b]
                };
            a.fn[c] = function(b) {
                return l[b] ? l[b].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof b && b ? void a.error("Method " + b + " does not exist") : l.init.apply(this, arguments)
            }, a[c] = function(b) {
                return l[b] ? l[b].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof b && b ? void a.error("Method " + b + " does not exist") : l.init.apply(this, arguments)
            }, a[c].defaults = f, window[c] = !0, a(window).bind("load", function() {
                a(e)[c](), a.extend(a.expr[":"], {
                    mcsInView: a.expr[":"].mcsInView || function(b) {
                        var c, d, e = a(b),
                            f = e.parents(".mCSB_container");
                        if (f.length) return c = f.parent(), d = [f[0].offsetTop, f[0].offsetLeft], d[0] + da(e)[0] >= 0 && d[0] + da(e)[0] < c.height() - e.outerHeight(!1) && d[1] + da(e)[1] >= 0 && d[1] + da(e)[1] < c.width() - e.outerWidth(!1)
                    },
                    mcsInSight: a.expr[":"].mcsInSight || function(b, c, d) {
                        var e, f, g, h, i = a(b),
                            j = i.parents(".mCSB_container"),
                            k = "exact" === d[3] ? [
                                [1, 0],
                                [1, 0]
                            ] : [
                                [.9, .1],
                                [.6, .4]
                            ];
                        if (j.length) return e = [i.outerHeight(!1), i.outerWidth(!1)], g = [j[0].offsetTop + da(i)[0], j[0].offsetLeft + da(i)[1]], f = [j.parent()[0].offsetHeight, j.parent()[0].offsetWidth], h = [e[0] < f[0] ? k[0] : k[1], e[1] < f[1] ? k[0] : k[1]], g[0] - f[0] * h[0][0] < 0 && g[0] + e[0] - f[0] * h[0][1] >= 0 && g[1] - f[1] * h[1][0] < 0 && g[1] + e[1] - f[1] * h[1][1] >= 0
                    },
                    mcsOverflow: a.expr[":"].mcsOverflow || function(b) {
                        var c = a(b).data(d);
                        if (c) return c.overflowed[0] || c.overflowed[1]
                    }
                })
            })
        })
    }), $(document).ready(function() {
    heightloop("proc-main"),
        $("#" + getCookie("BittrDebug_toggle_right")).siblings(".content").show(),
   $(".global .labeled").click(function() {
            var a = $(this);
            setCookie("BittrDebug_toggle_right", a.attr("id")), a.siblings(".content").slideToggle("fast")
    })
}), $(".right, .proc-buffer, .content-body, .code-view").mCustomScrollbar({
    axis: "yx",
    theme: "minimal-dark"
}), $(".content-nav .top-tog").click(function() {
    var a = $(this).attr("id");
    $(".content-nav .top-tog").removeClass("active"), $(this).addClass("active"), $(".content-body .loops div").removeClass("active"), $(".content-body .loops ." + a).addClass("active")
}), $(".loop-tog").click(function() {
    $(".code-view table .last-map").attr("style", "");
    var a = $(this).attr("data-id");
    $(".code-view, .browser-view").hide();
    $("#" + a).show(),
        heightloop(a);
    var b = $(this).attr("data-class"),
        c = $(this).attr("data-type"),
        d = $(this).attr("data-function"),
        e = $(this).attr("title"),
        f = $(this).attr("data-file"),
        g = $(this).attr("data-line");
    if ("proc-buffer" != a) {
        var h = "";
        void 0 !== b ? (d.length ? (h += '<div class="keyword">Class: <span class="">' + b,
            h += '</span><span style="margin: 3px;">' + c + '</span><span class="char-null">' + d + "</span>") :
            h += '<div class="keyword">Function: <span class="char-null">BittrDbug</span>',
            h += '<span class="">()</span></div>') : h += '<div class="keyword">Class: <span class="char-null">null</span></div>', void 0 !== e ? (e = e.replace(/\\/g, '<b class="char-object"> \\ </b>'), h += '<div class="namespace">Namespace: ' + e + "</div>") : h += '<div class="namespace">Namespace: <span class="char-null">null</span></div>', h += '<div class="file">File: <span class="">' + f + '</span>:<span class="char-integer">' + g + "</span></div>", $("#repop").show().html(h)
    } else $("#repop").hide()
}), $(".exception-type .action span").click(function() {
    window.open($(this).attr("url"), "_blank")
}), $(".contents .right .global .listed .caret").click(function() {
    $(this).siblings(".env-arr").toggle()
});