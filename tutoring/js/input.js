/*!
 * jQuery JavaScript Library v1.4.4
 * http://jquery.com/
 *
 * Copyright 2010, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 * Copyright 2010, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 *
 * Date: Thu Nov 11 19:04:53 2010 -0500
 */
(function(av, az) {
    function i(t, c, E) {
        if (E === az && t.nodeType === 1) {
            E = t.getAttribute("data-" + c);
            if (typeof E === "string") {
                try {
                    E = E === "true" ? true: E === "false" ? false: E === "null" ? null: !O.isNaN(E) ? parseFloat(E) : Q.test(E) ? O.parseJSON(E) : E
                } catch(B) {}
                O.data(t, c, E)
            } else {
                E = az
            }
        }
        return E
    }
    function ak() {
        return false
    }
    function I() {
        return true
    }
    function aX(t, c, B) {
        B[0].type = t;
        return O.event.handle.apply(c, B)
    }
    function z(aa) {
        var X, W, V, U, T, P, S, E, Z, c, B, t = [];
        U = [];
        T = O.data(this, this.nodeType ? "events": "__events__");
        if (typeof T === "function") {
            T = T.events
        }
        if (! (aa.liveFired === this || !T || !T.live || aa.button && aa.type === "click")) {
            if (aa.namespace) {
                B = RegExp("(^|\\.)" + aa.namespace.split(".").join("\\.(?:.*\\.)?") + "(\\.|$)")
            }
            aa.liveFired = this;
            var Y = T.live.slice(0);
            for (S = 0; S < Y.length; S++) {
                T = Y[S];
                T.origType.replace(ah, "") === aa.type ? U.push(T.selector) : Y.splice(S--, 1)
            }
            U = O(aa.target).closest(U, aa.currentTarget);
            E = 0;
            for (Z = U.length; E < Z; E++) {
                c = U[E];
                for (S = 0; S < Y.length; S++) {
                    T = Y[S];
                    if (c.selector === T.selector && (!B || B.test(T.namespace))) {
                        P = c.elem;
                        V = null;
                        if (T.preType === "mouseenter" || T.preType === "mouseleave") {
                            aa.type = T.preType;
                            V = O(aa.relatedTarget).closest(T.selector)[0]
                        }
                        if (!V || V !== P) {
                            t.push({
                                elem: P,
                                handleObj: T,
                                level: c.level
                            })
                        }
                    }
                }
            }
            E = 0;
            for (Z = t.length; E < Z; E++) {
                U = t[E];
                if (W && U.level > W) {
                    break
                }
                aa.currentTarget = U.elem;
                aa.data = U.handleObj.data;
                aa.handleObj = U.handleObj;
                B = U.handleObj.origHandler.apply(U.elem, arguments);
                if (B === false || aa.isPropagationStopped()) {
                    W = U.level;
                    if (B === false) {
                        X = false
                    }
                    if (aa.isImmediatePropagationStopped()) {
                        break
                    }
                }
            }
            return X
        }
    }
    function ag(t, c) {
        return (t && t !== "*" ? t + ".": "") + c.replace(m, "`").replace(a1, "&")
    }
    function aK(t, c, E) {
        if (O.isFunction(c)) {
            return O.grep(t,
            function(S, P) {
                return !! c.call(S, P, S) === E
            })
        } else {
            if (c.nodeType) {
                return O.grep(t,
                function(P) {
                    return P === c === E
                })
            } else {
                if (typeof c === "string") {
                    var B = O.grep(t,
                    function(P) {
                        return P.nodeType === 1
                    });
                    if (aP.test(c)) {
                        return O.filter(c, B, !E)
                    } else {
                        c = O.filter(c, B)
                    }
                }
            }
        }
        return O.grep(t,
        function(P) {
            return O.inArray(P, c) >= 0 === E
        })
    }
    function aw(t, c) {
        var B = 0;
        c.each(function() {
            if (this.nodeName === (t[B] && t[B].nodeName)) {
                var T = O.data(t[B++]),
                S = O.data(this, T);
                if (T = T && T.events) {
                    delete S.handle;
                    S.events = {};
                    for (var P in T) {
                        for (var E in T[P]) {
                            O.event.add(this, P, T[P][E], T[P][E].data)
                        }
                    }
                }
            }
        })
    }
    function aC(t, c) {
        c.src ? O.ajax({
            url: c.src,
            async: false,
            dataType: "script"
        }) : O.globalEval(c.text || c.textContent || c.innerHTML || "");
        c.parentNode && c.parentNode.removeChild(c)
    }
    function N(t, c, E) {
        var B = c === "width" ? t.offsetWidth: t.offsetHeight;
        if (E === "border") {
            return B
        }
        O.each(c === "width" ? ad: D,
        function() {
            E || (B -= parseFloat(O.css(t, "padding" + this)) || 0);
            if (E === "margin") {
                B += parseFloat(O.css(t, "margin" + this)) || 0
            } else {
                B -= parseFloat(O.css(t, "border" + this + "Width")) || 0
            }
        });
        return B
    }
    function s(t, c, E, B) {
        if (O.isArray(c) && c.length) {
            O.each(c,
            function(S, P) {
                E || p.test(t) ? B(t, P) : s(t + "[" + (typeof P === "object" || O.isArray(P) ? S: "") + "]", P, E, B)
            })
        } else {
            if (!E && c != null && typeof c === "object") {
                O.isEmptyObject(c) ? B(t, "") : O.each(c,
                function(S, P) {
                    s(t + "[" + S + "]", P, E, B)
                })
            } else {
                B(t, c)
            }
        }
    }
    function am(t, c) {
        var B = {};
        O.each(y.concat.apply([], y.slice(0, c)),
        function() {
            B[this] = t
        });
        return B
    }
    function l(t) {
        if (!g[t]) {
            var c = O("<" + t + ">").appendTo("body"),
            B = c.css("display");
            c.remove();
            if (B === "none" || B === "") {
                B = "block"
            }
            g[t] = B
        }
        return g[t]
    }
    function aU(c) {
        return O.isWindow(c) ? c: c.nodeType === 9 ? c.defaultView || c.parentWindow: false
    }
    var G = av.document,
    O = function() {
        function bh() {
            if (!bg.isReady) {
                try {
                    G.documentElement.doScroll("left")
                } catch(bi) {
                    setTimeout(bh, 1);
                    return
                }
                bg.ready()
            }
        }
        var bg = function(bi, bj) {
            return new bg.fn.init(bi, bj)
        },
        bf = av.jQuery,
        be = av.$,
        bd,
        bb = /^(?:[^<]*(<[\w\W]+>)[^>]*$|#([\w\-]+)$)/,
        a8 = /\S/,
        a9 = /^\s+/,
        a5 = /\s+$/,
        V = /\W/,
        ab = /\d/,
        a4 = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
        aa = /^[\],:{}\s]*$/,
        T = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
        W = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        U = /(?:^|:|,)(?:\s*\[)+/g,
        P = /(webkit)[ \/]([\w.]+)/,
        bc = /(opera)(?:.*version)?[ \/]([\w.]+)/,
        ba = /(msie) ([\w.]+)/,
        a6 = /(mozilla)(?:.*? rv:([\w.]+))?/,
        a7 = navigator.userAgent,
        a3 = false,
        a2 = [],
        Y,
        S = Object.prototype.toString,
        X = Object.prototype.hasOwnProperty,
        E = Array.prototype.push,
        B = Array.prototype.slice,
        t = String.prototype.trim,
        Z = Array.prototype.indexOf,
        c = {};
        bg.fn = bg.prototype = {
            init: function(bj, bl) {
                var bi, bm, bk;
                if (!bj) {
                    return this
                }
                if (bj.nodeType) {
                    this.context = this[0] = bj;
                    this.length = 1;
                    return this
                }
                if (bj === "body" && !bl && G.body) {
                    this.context = G;
                    this[0] = G.body;
                    this.selector = "body";
                    this.length = 1;
                    return this
                }
                if (typeof bj === "string") {
                    if ((bi = bb.exec(bj)) && (bi[1] || !bl)) {
                        if (bi[1]) {
                            bk = bl ? bl.ownerDocument || bl: G;
                            if (bm = a4.exec(bj)) {
                                if (bg.isPlainObject(bl)) {
                                    bj = [G.createElement(bm[1])];
                                    bg.fn.attr.call(bj, bl, true)
                                } else {
                                    bj = [bk.createElement(bm[1])]
                                }
                            } else {
                                bm = bg.buildFragment([bi[1]], [bk]);
                                bj = (bm.cacheable ? bm.fragment.cloneNode(true) : bm.fragment).childNodes
                            }
                            return bg.merge(this, bj)
                        } else {
                            if ((bm = G.getElementById(bi[2])) && bm.parentNode) {
                                if (bm.id !== bi[2]) {
                                    return bd.find(bj)
                                }
                                this.length = 1;
                                this[0] = bm
                            }
                            this.context = G;
                            this.selector = bj;
                            return this
                        }
                    } else {
                        if (!bl && !V.test(bj)) {
                            this.selector = bj;
                            this.context = G;
                            bj = G.getElementsByTagName(bj);
                            return bg.merge(this, bj)
                        } else {
                            return ! bl || bl.jquery ? (bl || bd).find(bj) : bg(bl).find(bj)
                        }
                    }
                } else {
                    if (bg.isFunction(bj)) {
                        return bd.ready(bj)
                    }
                }
                if (bj.selector !== az) {
                    this.selector = bj.selector;
                    this.context = bj.context
                }
                return bg.makeArray(bj, this)
            },
            selector: "",
            jquery: "1.4.4",
            length: 0,
            size: function() {
                return this.length
            },
            toArray: function() {
                return B.call(this, 0)
            },
            get: function(bi) {
                return bi == null ? this.toArray() : bi < 0 ? this.slice(bi)[0] : this[bi]
            },
            pushStack: function(bj, bk, bi) {
                var bl = bg();
                bg.isArray(bj) ? E.apply(bl, bj) : bg.merge(bl, bj);
                bl.prevObject = this;
                bl.context = this.context;
                if (bk === "find") {
                    bl.selector = this.selector + (this.selector ? " ": "") + bi
                } else {
                    if (bk) {
                        bl.selector = this.selector + "." + bk + "(" + bi + ")"
                    }
                }
                return bl
            },
            each: function(bi, bj) {
                return bg.each(this, bi, bj)
            },
            ready: function(bi) {
                bg.bindReady();
                if (bg.isReady) {
                    bi.call(G, bg)
                } else {
                    a2 && a2.push(bi)
                }
                return this
            },
            eq: function(bi) {
                return bi === -1 ? this.slice(bi) : this.slice(bi, +bi + 1)
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq( - 1)
            },
            slice: function() {
                return this.pushStack(B.apply(this, arguments), "slice", B.call(arguments).join(","))
            },
            map: function(bi) {
                return this.pushStack(bg.map(this,
                function(bk, bj) {
                    return bi.call(bk, bj, bk)
                }))
            },
            end: function() {
                return this.prevObject || bg(null)
            },
            push: E,
            sort: [].sort,
            splice: [].splice
        };
        bg.fn.init.prototype = bg.fn;
        bg.extend = bg.fn.extend = function() {
            var bi, bq, bn, bk, bm, bo = arguments[0] || {},
            bl = 1,
            bj = arguments.length,
            bp = false;
            if (typeof bo === "boolean") {
                bp = bo;
                bo = arguments[1] || {};
                bl = 2
            }
            if (typeof bo !== "object" && !bg.isFunction(bo)) {
                bo = {}
            }
            if (bj === bl) {
                bo = this; --bl
            }
            for (; bl < bj; bl++) {
                if ((bi = arguments[bl]) != null) {
                    for (bq in bi) {
                        bn = bo[bq];
                        bk = bi[bq];
                        if (bo !== bk) {
                            if (bp && bk && (bg.isPlainObject(bk) || (bm = bg.isArray(bk)))) {
                                if (bm) {
                                    bm = false;
                                    bn = bn && bg.isArray(bn) ? bn: []
                                } else {
                                    bn = bn && bg.isPlainObject(bn) ? bn: {}
                                }
                                bo[bq] = bg.extend(bp, bn, bk)
                            } else {
                                if (bk !== az) {
                                    bo[bq] = bk
                                }
                            }
                        }
                    }
                }
            }
            return bo
        };
        bg.extend({
            noConflict: function(bi) {
                av.$ = be;
                if (bi) {
                    av.jQuery = bf
                }
                return bg
            },
            isReady: false,
            readyWait: 1,
            ready: function(bj) {
                bj === true && bg.readyWait--;
                if (!bg.readyWait || bj !== true && !bg.isReady) {
                    if (!G.body) {
                        return setTimeout(bg.ready, 1)
                    }
                    bg.isReady = true;
                    if (! (bj !== true && --bg.readyWait > 0)) {
                        if (a2) {
                            var bk = 0,
                            bi = a2;
                            for (a2 = null; bj = bi[bk++];) {
                                bj.call(G, bg)
                            }
                            bg.fn.trigger && bg(G).trigger("ready").unbind("ready")
                        }

                    }
                }
            },
            bindReady: function() {
                if (!a3) {
                    a3 = true;
                    if (G.readyState === "complete") {
                        return setTimeout(bg.ready, 1)
                    }
                    if (G.addEventListener) {
                        G.addEventListener("DOMContentLoaded", Y, false);
                        av.addEventListener("load", bg.ready, false)
                    } else {
                        if (G.attachEvent) {
                            G.attachEvent("onreadystatechange", Y);
                            av.attachEvent("onload", bg.ready);
                            var bi = false;
                            try {
                                bi = av.frameElement == null
                            } catch(bj) {}
                            G.documentElement.doScroll && bi && bh()
                        }
                    }
                }
            },
            isFunction: function(bi) {
                return bg.type(bi) === "function"
            },
            isArray: Array.isArray ||
            function(bi) {
                return bg.type(bi) === "array"
            },
            isWindow: function(bi) {
                return bi && typeof bi === "object" && "setInterval" in bi
            },
            isNaN: function(bi) {
                return bi == null || !ab.test(bi) || isNaN(bi)
            },
            type: function(bi) {
                return bi == null ? String(bi) : c[S.call(bi)] || "object"
            },
            isPlainObject: function(bi) {
                if (!bi || bg.type(bi) !== "object" || bi.nodeType || bg.isWindow(bi)) {
                    return false
                }
                if (bi.constructor && !X.call(bi, "constructor") && !X.call(bi.constructor.prototype, "isPrototypeOf")) {
                    return false
                }
                for (var bj in bi) {}
                return bj === az || X.call(bi, bj)
            },
            isEmptyObject: function(bi) {
                for (var bj in bi) {
                    return false
                }
                return true
            },
            error: function(bi) {
                throw bi
            },
            parseJSON: function(bi) {
                if (typeof bi !== "string" || !bi) {
                    return null
                }
                bi = bg.trim(bi);
                if (aa.test(bi.replace(T, "@").replace(W, "]").replace(U, ""))) {
                    return av.JSON && av.JSON.parse ? av.JSON.parse(bi) : (new Function("return " + bi))()
                } else {
                    bg.error("Invalid JSON: " + bi)
                }
            },
            noop: function() {},
            globalEval: function(bj) {
                if (bj && a8.test(bj)) {
                    var bk = G.getElementsByTagName("head")[0] || G.documentElement,
                    bi = G.createElement("script");
                    bi.type = "text/javascript";
                    if (bg.support.scriptEval) {
                        bi.appendChild(G.createTextNode(bj))
                    } else {
                        bi.text = bj
                    }
                    bk.insertBefore(bi, bk.firstChild);
                    bk.removeChild(bi)
                }
            },
            nodeName: function(bi, bj) {
                return bi.nodeName && bi.nodeName.toUpperCase() === bj.toUpperCase()
            },
            each: function(bk, bn, bj) {
                var bo, bl = 0,
                bm = bk.length,
                bi = bm === az || bg.isFunction(bk);
                if (bj) {
                    if (bi) {
                        for (bo in bk) {
                            if (bn.apply(bk[bo], bj) === false) {
                                break
                            }
                        }
                    } else {
                        for (; bl < bm;) {
                            if (bn.apply(bk[bl++], bj) === false) {
                                break
                            }
                        }
                    }
                } else {
                    if (bi) {
                        for (bo in bk) {
                            if (bn.call(bk[bo], bo, bk[bo]) === false) {
                                break
                            }
                        }
                    } else {
                        for (bj = bk[0]; bl < bm && bn.call(bj, bl, bj) !== false; bj = bk[++bl]) {}
                    }
                }
                return bk
            },
            trim: t ?
            function(bi) {
                return bi == null ? "": t.call(bi)
            }: function(bi) {
                return bi == null ? "": bi.toString().replace(a9, "").replace(a5, "")
            },
            makeArray: function(bj, bk) {
                var bi = bk || [];
                if (bj != null) {
                    var bl = bg.type(bj);
                    bj.length == null || bl === "string" || bl === "function" || bl === "regexp" || bg.isWindow(bj) ? E.call(bi, bj) : bg.merge(bi, bj)
                }
                return bi
            },
            inArray: function(bj, bk) {
                if (bk.indexOf) {
                    return bk.indexOf(bj)
                }
                for (var bi = 0, bl = bk.length; bi < bl; bi++) {
                    if (bk[bi] === bj) {
                        return bi
                    }
                }
                return - 1
            },
            merge: function(bj, bl) {
                var bi = bj.length,
                bm = 0;
                if (typeof bl.length === "number") {
                    for (var bk = bl.length; bm < bk; bm++) {
                        bj[bi++] = bl[bm]
                    }
                } else {
                    for (; bl[bm] !== az;) {
                        bj[bi++] = bl[bm++]
                    }
                }
                bj.length = bi;
                return bj
            },
            grep: function(bk, bn, bj) {
                var bo = [],
                bl;
                bj = !!bj;
                for (var bm = 0, bi = bk.length; bm < bi; bm++) {
                    bl = !!bn(bk[bm], bm);
                    bj !== bl && bo.push(bk[bm])
                }
                return bo
            },
            map: function(bk, bn, bj) {
                for (var bo = [], bl, bm = 0, bi = bk.length; bm < bi; bm++) {
                    bl = bn(bk[bm], bm, bj);
                    if (bl != null) {
                        bo[bo.length] = bl
                    }
                }
                return bo.concat.apply([], bo)
            },
            guid: 1,
            proxy: function(bj, bk, bi) {
                if (arguments.length === 2) {
                    if (typeof bk === "string") {
                        bi = bj;
                        bj = bi[bk];
                        bk = az
                    } else {
                        if (bk && !bg.isFunction(bk)) {
                            bi = bk;
                            bk = az
                        }
                    }
                }
                if (!bk && bj) {
                    bk = function() {
                        return bj.apply(bi || this, arguments)
                    }
                }
                if (bj) {
                    bk.guid = bj.guid = bj.guid || bk.guid || bg.guid++
                }
                return bk
            },
            access: function(bk, bn, bj, bp, bl, bm) {
                var bi = bk.length;
                if (typeof bn === "object") {
                    for (var bo in bn) {
                        bg.access(bk, bo, bn[bo], bp, bl, bj)
                    }
                    return bk
                }
                if (bj !== az) {
                    bp = !bm && bp && bg.isFunction(bj);
                    for (bo = 0; bo < bi; bo++) {
                        bl(bk[bo], bn, bp ? bj.call(bk[bo], bo, bl(bk[bo], bn)) : bj, bm)
                    }
                    return bk
                }
                return bi ? bl(bk[0], bn) : az
            },
            now: function() {
                return (new Date).getTime()
            },
            uaMatch: function(bi) {
                bi = bi.toLowerCase();
                bi = P.exec(bi) || bc.exec(bi) || ba.exec(bi) || bi.indexOf("compatible") < 0 && a6.exec(bi) || [];
                return {
                    browser: bi[1] || "",
                    version: bi[2] || "0"
                }
            },
            browser: {}
        });
        bg.each("Boolean Number String Function Array Date RegExp Object".split(" "),
        function(bi, bj) {
            c["[object " + bj + "]"] = bj.toLowerCase()
        });
        a7 = bg.uaMatch(a7);
        if (a7.browser) {
            bg.browser[a7.browser] = true;
            bg.browser.version = a7.version
        }
        if (bg.browser.webkit) {
            bg.browser.safari = true
        }
        if (Z) {
            bg.inArray = function(bi, bj) {
                return Z.call(bj, bi)
            }
        }
        if (!/\s/.test("\u00a0")) {
            a9 = /^[\s\xA0]+/;
            a5 = /[\s\xA0]+$/
        }
        bd = bg(G);
        if (G.addEventListener) {
            Y = function() {
                G.removeEventListener("DOMContentLoaded", Y, false);
                bg.ready()
            }
        } else {
            if (G.attachEvent) {
                Y = function() {
                    if (G.readyState === "complete") {
                        G.detachEvent("onreadystatechange", Y);
                        bg.ready()
                    }
                }
            }
        }
        return av.jQuery = av.$ = bg
    } ();
    (function() {
        O.support = {};
        var X = G.documentElement,
        V = G.createElement("script"),
        U = G.createElement("div"),
        T = "script" + O.now();
        U.style.display = "none";
        U.innerHTML = "   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
        var S = U.getElementsByTagName("*"),
        P = U.getElementsByTagName("a")[0],
        B = G.createElement("select"),
        E = B.appendChild(G.createElement("option"));
        if (! (!S || !S.length || !P)) {
            O.support = {
                leadingWhitespace: U.firstChild.nodeType === 3,
                tbody: !U.getElementsByTagName("tbody").length,
                htmlSerialize: !!U.getElementsByTagName("link").length,
                style: /red/.test(P.getAttribute("style")),
                hrefNormalized: P.getAttribute("href") === "/a",
                opacity: /^0.55$/.test(P.style.opacity),
                cssFloat: !!P.style.cssFloat,
                checkOn: U.getElementsByTagName("input")[0].value === "on",
                optSelected: E.selected,
                deleteExpando: true,
                optDisabled: false,
                checkClone: false,
                scriptEval: false,
                noCloneEvent: true,
                boxModel: null,
                inlineBlockNeedsLayout: false,
                shrinkWrapBlocks: false,
                reliableHiddenOffsets: true
            };
            B.disabled = true;
            O.support.optDisabled = !E.disabled;
            V.type = "text/javascript";
            try {
                V.appendChild(G.createTextNode("window." + T + "=1;"))
            } catch(t) {}
            X.insertBefore(V, X.firstChild);
            if (av[T]) {
                O.support.scriptEval = true;
                delete av[T]
            }
            try {
                delete V.test
            } catch(W) {
                O.support.deleteExpando = false
            }
            X.removeChild(V);
            if (U.attachEvent && U.fireEvent) {
                U.attachEvent("onclick",
                function c() {
                    O.support.noCloneEvent = false;
                    U.detachEvent("onclick", c)
                });
                U.cloneNode(true).fireEvent("onclick")
            }
            U = G.createElement("div");
            U.innerHTML = "<input type='radio' name='radiotest' checked='checked'/>";
            X = G.createDocumentFragment();
            X.appendChild(U.firstChild);
            O.support.checkClone = X.cloneNode(true).cloneNode(true).lastChild.checked;
            O(function() {
                var Z = G.createElement("div");
                Z.style.width = Z.style.paddingLeft = "1px";
                G.body.appendChild(Z);
                O.boxModel = O.support.boxModel = Z.offsetWidth === 2;
                if ("zoom" in Z.style) {
                    Z.style.display = "inline";
                    Z.style.zoom = 1;
                    O.support.inlineBlockNeedsLayout = Z.offsetWidth === 2;
                    Z.style.display = "";
                    Z.innerHTML = "<div style='width:4px;'></div>";
                    O.support.shrinkWrapBlocks = Z.offsetWidth !== 2
                }
                Z.innerHTML = "<table><tr><td style='padding:0;display:none'></td><td>t</td></tr></table>";
                var Y = Z.getElementsByTagName("td");
                O.support.reliableHiddenOffsets = Y[0].offsetHeight === 0;
                Y[0].style.display = "";
                Y[1].style.display = "none";
                O.support.reliableHiddenOffsets = O.support.reliableHiddenOffsets && Y[0].offsetHeight === 0;
                Z.innerHTML = "";
                G.body.removeChild(Z).style.display = "none"
            });
            X = function(Z) {
                var Y = G.createElement("div");
                Z = "on" + Z;
                var aa = Z in Y;
                if (!aa) {
                    Y.setAttribute(Z, "return;");
                    aa = typeof Y[Z] === "function"
                }
                return aa
            };
            O.support.submitBubbles = X("submit");
            O.support.changeBubbles = X("change");
            X = V = U = S = P = null
        }
    })();
    var a0 = {},
    Q = /^(?:\{.*\}|\[.*\])$/;
    O.extend({
        cache: {},
        uuid: 0,
        expando: "jQuery" + O.now(),
        noData: {
            embed: true,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: true
        },
        data: function(t, c, S) {
            if (O.acceptData(t)) {
                t = t == av ? a0: t;
                var P = t.nodeType,
                E = P ? t[O.expando] : null,
                B = O.cache;
                if (! (P && !E && typeof c === "string" && S === az)) {
                    if (P) {
                        E || (t[O.expando] = E = ++O.uuid)
                    } else {
                        B = t
                    }
                    if (typeof c === "object") {
                        if (P) {
                            B[E] = O.extend(B[E], c)
                        } else {
                            O.extend(B, c)
                        }
                    } else {
                        if (P && !B[E]) {
                            B[E] = {}
                        }
                    }
                    t = P ? B[E] : B;
                    if (S !== az) {
                        t[c] = S
                    }
                    return typeof c === "string" ? t[c] : t
                }
            }
        },
        removeData: function(B, c) {
            if (O.acceptData(B)) {
                B = B == av ? a0: B;
                var T = B.nodeType,
                S = T ? B[O.expando] : B,
                P = O.cache,
                E = T ? P[S] : S;
                if (c) {
                    if (E) {
                        delete E[c];
                        T && O.isEmptyObject(E) && O.removeData(B)
                    }
                } else {
                    if (T && O.support.deleteExpando) {
                        delete B[O.expando]
                    } else {
                        if (B.removeAttribute) {
                            B.removeAttribute(O.expando)
                        } else {
                            if (T) {
                                delete P[S]
                            } else {
                                for (var t in B) {
                                    delete B[t]
                                }
                            }
                        }
                    }
                }
            }
        },
        acceptData: function(t) {
            if (t.nodeName) {
                var c = O.noData[t.nodeName.toLowerCase()];
                if (c) {
                    return ! (c === true || t.getA