webpackJsonp([0xd2a57dc1d883], {
    169: function (n, e, o) {
        "use strict";

        function t(n, e, o) {
            var t = u.map(function (o) {
                if (o.plugin[n]) {
                    var t = o.plugin[n](e, o.options);
                    return t
                }
            });
            return t = t.filter(function (n) {
                return "undefined" != typeof n
            }), t.length > 0 ? t : o ? [o] : []
        }

        function r(n, e, o) {
            return u.reduce(function (o, t) {
                return t.plugin[n] ? o.then(function () {
                    return t.plugin[n](e, t.options)
                }) : o
            }, Promise.resolve())
        }
        e.__esModule = !0, e.apiRunner = t, e.apiRunnerAsync = r;
        var u = [{
            plugin: o(312),
            options: {
                plugins: []
            }
        }, {
            plugin: o(313),
            options: {
                plugins: []
            }
        }]
    },
    170: function (n, e, o) {
        "use strict";
        var t;
        e.components = {
            "component---node-modules-gatsby-plugin-offline-app-shell-js": o(286),
            "component---src-templates-blog-post-template-js": o(294),
            "component---src-pages-404-js": o(288),
            "component---src-pages-about-js": o(289),
            "component---src-pages-index-js": o(291),
            "component---src-pages-music-js": o(292),
            "component---src-pages-work-js": o(293),
            "component---src-pages-blog-index-js": o(290)
        }, e.json = (t = {
            "layout-index.json": o(4),
            "offline-plugin-app-shell-fallback.json": o(309)
        }, t["layout-index.json"] = o(4), t["blog-2017.json"] = o(299), t["layout-index.json"] = o(4), t["blog-creative-coding.json"] = o(300), t["layout-index.json"] = o(4), t["blog-making-of.json"] = o(302), t["layout-index.json"] = o(4), t["blog-on-creativity.json"] = o(303), t["layout-index.json"] = o(4), t["blog-gatsby-webgl.json"] = o(301), t["layout-index.json"] = o(4), t["blog-origins.json"] = o(304), t["layout-index.json"] = o(4), t["blog-software-development.json"] = o(305), t["layout-index.json"] = o(4), t["blog-undiscovered-colors.json"] = o(306), t["layout-index.json"] = o(4), t["404.json"] = o(295), t["layout-index.json"] = o(4), t["about.json"] = o(297), t["layout-index.json"] = o(4), t["index.json"] = o(307), t["layout-index.json"] = o(4), t["music.json"] = o(308), t["layout-index.json"] = o(4), t["work.json"] = o(310), t["layout-index.json"] = o(4), t["404-html.json"] = o(296), t["layout-index.json"] = o(4), t["blog.json"] = o(298), t), e.layouts = {
            "component---src-layouts-index-js": o(287)
        }
    },
    171: function (n, e, o) {
        "use strict";

        function t(n) {
            return n && n.__esModule ? n : {
                default: n
            }
        }

        function r(n, e) {
            if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function u(n, e) {
            if (!n) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? n : e
        }

        function a(n, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            n.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: n,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(n, e) : n.__proto__ = e)
        }
        e.__esModule = !0;
        var i = Object.assign || function (n) {
                for (var e = 1; e < arguments.length; e++) {
                    var o = arguments[e];
                    for (var t in o) Object.prototype.hasOwnProperty.call(o, t) && (n[t] = o[t])
                }
                return n
            },
            s = o(1),
            c = t(s),
            l = o(3),
            f = t(l),
            p = o(109),
            d = t(p),
            m = o(43),
            g = t(m),
            h = function (n) {
                var e = n.children;
                return c.default.createElement("div", null, e())
            },
            y = function (n) {
                function e(o) {
                    r(this, e);
                    var t = u(this, n.call(this));
                    return t.state = {
                        location: o.location,
                        pageResources: d.default.getResourcesForPathname(o.location.pathname)
                    }, t
                }
                return a(e, n), e.prototype.componentWillReceiveProps = function (n) {
                    var e = this;
                    if (this.state.location.pathname !== n.location.pathname) {
                        var o = d.default.getResourcesForPathname(n.location.pathname);
                        o ? this.setState({
                            location: n.location,
                            pageResources: o
                        }) : d.default.getResourcesForPathname(n.location.pathname, function (o) {
                            e.setState({
                                location: n.location,
                                pageResources: o
                            })
                        })
                    }
                }, e.prototype.componentDidMount = function () {
                    var n = this;
                    g.default.on("onPostLoadPageResources", function (e) {
                        e.page.path === d.default.getPage(n.state.location.pathname).path && n.setState({
                            pageResources: e.pageResources
                        })
                    })
                }, e.prototype.shouldComponentUpdate = function (n, e) {
                    return !e.pageResources || (!(this.state.pageResources || !e.pageResources) || (this.state.pageResources.component !== e.pageResources.component || (this.state.pageResources.json !== e.pageResources.json || !(this.state.location.key === e.location.key || !e.pageResources.page || !e.pageResources.page.matchPath && !e.pageResources.page.path))))
                }, e.prototype.render = function () {
                    return this.props.page ? this.state.pageResources ? (0, s.createElement)(this.state.pageResources.component, i({
                        key: this.props.location.pathname
                    }, this.props, this.state.pageResources.json)) : null : this.props.layout ? (0, s.createElement)(this.state.pageResources && this.state.pageResources.layout ? this.state.pageResources.layout : h, i({
                        key: this.state.pageResources && this.state.pageResources.layout ? this.state.pageResources.layout : "DefaultLayout"
                    }, this.props)) : null
                }, e
            }(c.default.Component);
        y.propTypes = {
            page: f.default.bool,
            layout: f.default.bool,
            location: f.default.object
        }, e.default = y, n.exports = e.default
    },
    43: function (n, e, o) {
        "use strict";

        function t(n) {
            return n && n.__esModule ? n : {
                default: n
            }
        }
        var r = o(412),
            u = t(r),
            a = (0, u.default)();
        n.exports = a
    },
    172: function (n, e, o) {
        "use strict";
        var t = o(63),
            r = {};
        n.exports = function (n) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            return function (o) {
                var u = decodeURIComponent(o),
                    a = u.slice(e.length);
                if (a.split("#").length > 1 && (a = a.split("#").slice(0, -1).join("")), a.split("?").length > 1 && (a = a.split("?").slice(0, -1).join("")), r[a]) return r[a];
                var i = void 0;
                return n.some(function (n) {
                    if (n.matchPath) {
                        if ((0, t.matchPath)(a, {
                                path: n.path
                            }) || (0, t.matchPath)(a, {
                                path: n.matchPath
                            })) return i = n, r[a] = n, !0
                    } else {
                        if ((0, t.matchPath)(a, {
                                path: n.path,
                                exact: !0
                            })) return i = n, r[a] = n, !0;
                        if ((0, t.matchPath)(a, {
                                path: n.path + "index.html"
                            })) return i = n, r[a] = n, !0
                    }
                    return !1
                }), i
            }
        }
    },
    296: function (n, e, o) {
        o(2), n.exports = function (n) {
            return o.e(0xa2868bfb69fc, function (e, t) {
                t ? (console.log("bundle loading error", t), n(!0)) : n(null, function () {
                    return o(324)
                })
            })
        }
    },
    295: function (n, e, o) {
        o(2), n.exports = function (n) {
            return o.e(0xe70826b53c04, function (e, t) {
                t ? (console.log("bundle loading error", t), n(!0)) : n(null, function () {
                    return o(325)
                })
            })
        }
    },
    297: function (n, e, o) {
        o(2), n.exports = function (n) {
            return o.e(0xf927f8900006, function (e, t) {
                t ? (console.log("bundle loading error", t), n(!0)) : n(null, function () {
                    return o(326)
                })
            })
        }
    },
    299: function (n, e, o) {
        o(2), n.exports = function (n) {
            return o.e(88025333830971, function (e, t) {
                t ? (console.log("bundle loading error", t), n(!0)) : n(null, function () {
                    return o(327)
                })
            })
        }
    },
    300: function (n, e, o) {
        o(2), n.exports = function (n) {
            return o.e(0xf5f8c308d326, function (e, t) {
                t ? (console.log("bundle loading error", t), n(!0)) : n(null, function () {
                    return o(328)
                })
            })
        }
    },
    301: function (n, e, o) {
        o(2), n.exports = function (n) {
            return o.e(43561860165983, function (e, t) {
                t ? (console.log("bundle loading error", t), n(!0)) : n(null, function () {
                    return o(329)
                })
            })
        }
    },
    302: function (n, e, o) {
        o(2), n.exports = function (n) {
            return o.e(0x944d7d7dd38f, function (e, t) {
                t ? (console.log("bundle loading error", t), n(!0)) : n(null, function () {
                    return o(330)
                })
            })
        }
    },
    303: function (n, e, o) {
        o(2), n.exports = function (n) {
            return o.e(0xf90b0ba021c8, function (e, t) {
                t ? (console.log("bundle loading error", t), n(!0)) : n(null, function () {
                    return o(331)
                })
            })
        }
    },
    304: function (n, e, o) {
        o(2), n.exports = function (n) {
            return o.e(0xe5d2915814b8, function (e, t) {
                t ? (console.log("bundle loading error", t), n(!0)) : n(null, function () {
                    return o(332)
                })
            })
        }
    },
    305: function (n, e, o) {
        o(2), n.exports = function (n) {
            return o.e(5187189323705, function (e, t) {
                t ? (console.log("bundle loading error", t), n(!0)) : n(null, function () {
                    return o(333)
                })
            })
        }
    },
    306: function (n, e, o) {
        o(2), n.exports = function (n) {
            return o.e(0x9faf85cd3a25, function (e, t) {
                t ? (console.log("bundle loading error", t), n(!0)) : n(null, function () {
                    return o(334)
                })
            })
        }
    },
    298: function (n, e, o) {
        o(2), n.exports = function (n) {
            return o.e(49683490770531, function (e, t) {
                t ? (console.log("bundle loading error", t), n(!0)) : n(null, function () {
                    return o(335)
                })
            })
        }
    },
    307: function (n, e, o) {
        o(2), n.exports = function (n) {
            return o.e(0x81b8806e4260, function (e, t) {
                t ? (console.log("bundle loading error", t), n(!0)) : n(null, function () {
                    return o(336)
                })
            })
        }
    },
    4: function (n, e, o) {
        o(2), n.exports = function (n) {
            return o.e(60335399758886, function (e, t) {
                t ? (console.log("bundle loading error", t), n(!0)) : n(null, function () {
                    return o(99)
                })
            })
        }
    },
    308: function (n, e, o) {
        o(2), n.exports = function (n) {
            return o.e(0xaeb5389901a7, function (e, t) {
                t ? (console.log("bundle loading error", t), n(!0)) : n(null, function () {
                    return o(337)
                })
            })
        }
    },
    309: function (n, e, o) {
        o(2), n.exports = function (n) {
            return o.e(0xbf4c176e203a, function (e, t) {
                t ? (console.log("bundle loading error", t), n(!0)) : n(null, function () {
                    return o(338)
                })
            })
        }
    },
    310: function (n, e, o) {
        o(2), n.exports = function (n) {
            return o.e(32551418774257, function (e, t) {
                t ? (console.log("bundle loading error", t), n(!0)) : n(null, function () {
                    return o(339)
                })
            })
        }
    },
    287: function (n, e, o) {
        o(2), n.exports = function (n) {
            return o.e(0x67ef26645b2a, function (e, t) {
                t ? (console.log("bundle loading error", t), n(!0)) : n(null, function () {
                    return o(173)
                })
            })
        }
    },
    109: function (n, e, o) {
        (function (e) {
            "use strict";

            function t(n) {
                return n && n.__esModule ? n : {
                    default: n
                }
            }
            var r = o(1),
                u = (t(r), o(172)),
                a = t(u),
                i = o(43),
                s = t(i),
                c = void 0,
                l = {},
                f = {},
                p = {},
                d = {},
                m = {},
                g = [],
                h = [],
                y = {},
                j = [],
                v = {},
                b = function (n) {
                    return n && n.default || n
                },
                x = void 0,
                R = !0;
            x = o(174)({
                getNextQueuedResources: function () {
                    return j.slice(-1)[0]
                },
                createResourceDownload: function (n) {
                    N(n, function () {
                        j = j.filter(function (e) {
                            return e !== n
                        }), x.onResourcedFinished(n)
                    })
                }
            }), s.default.on("onPreLoadPageResources", function (n) {
                x.onPreLoadPageResources(n)
            }), s.default.on("onPostLoadPageResources", function (n) {
                x.onPostLoadPageResources(n)
            });
            var C = function (n, e) {
                    return v[n] > v[e] ? 1 : v[n] < v[e] ? -1 : 0
                },
                w = function (n, e) {
                    return y[n] > y[e] ? 1 : y[n] < y[e] ? -1 : 0
                },
                N = function (n) {
                    var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function () {};
                    if (d[n]) e.nextTick(function () {
                        o(null, d[n])
                    });
                    else {
                        var t = "component---" === n.slice(0, 12) ? f.components[n] || f.layouts[n] : f.json[n];
                        t(function (e, t) {
                            d[n] = t, o(e, t)
                        })
                    }
                },
                k = function (n, o) {
                    m[n] ? e.nextTick(function () {
                        o(null, m[n])
                    }) : N(n, function (e, t) {
                        if (e) o(e);
                        else {
                            var r = b(t());
                            m[n] = r, o(e, r)
                        }
                    })
                },
                P = 1,
                _ = {
                    empty: function () {
                        h = [], y = {}, v = {}, j = [], g = []
                    },
                    addPagesArray: function (n) {
                        g = n;
                        var e = "";
                        e = "", c = (0, a.default)(n, e)
                    },
                    addDevRequires: function (n) {
                        l = n
                    },
                    addProdRequires: function (n) {
                        f = n
                    },
                    dequeue: function (n) {
                        return h.pop()
                    },
                    enqueue: function (n) {
                        if (!g.some(function (e) {
                                return e.path === n
                            })) return !1;
                        var e = 1 / P;
                        P += 1, y[n] ? y[n] += 1 : y[n] = 1, _.has(n) || h.unshift(n), h.sort(w);
                        var o = c(n);
                        return o.jsonName && (v[o.jsonName] ? v[o.jsonName] += 1 + e : v[o.jsonName] = 1 + e, j.indexOf(o.jsonName) !== -1 || d[o.jsonName] || j.unshift(o.jsonName)), o.componentChunkName && (v[o.componentChunkName] ? v[o.componentChunkName] += 1 + e : v[o.componentChunkName] = 1 + e, j.indexOf(o.componentChunkName) !== -1 || d[o.jsonName] || j.unshift(o.componentChunkName)), j.sort(C), x.onNewResourcesAdded(), !0
                    },
                    getResources: function () {
                        return {
                            resourcesArray: j,
                            resourcesCount: v
                        }
                    },
                    getPages: function () {
                        return {
                            pathArray: h,
                            pathCount: y
                        }
                    },
                    getPage: function (n) {
                        return c(n)
                    },
                    has: function (n) {
                        return h.some(function (e) {
                            return e === n
                        })
                    },
                    getResourcesForPathname: function (n) {
                        var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function () {};
                        R && navigator && navigator.serviceWorker && navigator.serviceWorker.controller && "activated" === navigator.serviceWorker.controller.state && (c(n) || navigator.serviceWorker.getRegistrations().then(function (n) {
                            for (var e = n, o = Array.isArray(e), t = 0, e = o ? e : e[Symbol.iterator]();;) {
                                var r;
                                if (o) {
                                    if (t >= e.length) break;
                                    r = e[t++]
                                } else {
                                    if (t = e.next(), t.done) break;
                                    r = t.value
                                }
                                var u = r;
                                u.unregister()
                            }
                            window.location.reload()
                        })), R = !1;
                        var t = c(n);
                        if (!t) return void console.log("A page wasn't found for \"" + n + '"');
                        if (n = t.path, p[n]) return e.nextTick(function () {
                            o(p[n]), s.default.emit("onPostLoadPageResources", {
                                page: t,
                                pageResources: p[n]
                            })
                        }), p[n];
                        s.default.emit("onPreLoadPageResources", {
                            path: n
                        });
                        var r = void 0,
                            u = void 0,
                            a = void 0,
                            i = function () {
                                if (r && u && (!t.layoutComponentChunkName || a)) {
                                    p[n] = {
                                        component: r,
                                        json: u,
                                        layout: a,
                                        page: t
                                    };
                                    var e = {
                                        component: r,
                                        json: u,
                                        layout: a,
                                        page: t
                                    };
                                    o(e), s.default.emit("onPostLoadPageResources", {
                                        page: t,
                                        pageResources: e
                                    })
                                }
                            };
                        return k(t.componentChunkName, function (n, e) {
                            n && console.log("Loading the component for " + t.path + " failed"), r = e, i()
                        }), k(t.jsonName, function (n, e) {
                            n && console.log("Loading the JSON for " + t.path + " failed"), u = e, i()
                        }), void(t.layoutComponentChunkName && k(t.layoutComponentChunkName, function (n, e) {
                            n && console.log("Loading the Layout for " + t.path + " failed"), a = e, i()
                        }))
                    },
                    peek: function (n) {
                        return h.slice(-1)[0]
                    },
                    length: function () {
                        return h.length
                    },
                    indexOf: function (n) {
                        return h.length - h.indexOf(n) - 1
                    }
                };
            n.exports = _
        }).call(e, o(36))
    },
    340: function (n, e) {
        n.exports = [{
            componentChunkName: "component---node-modules-gatsby-plugin-offline-app-shell-js",
            layout: "index",
            layoutComponentChunkName: "component---src-layouts-index-js",
            jsonName: "offline-plugin-app-shell-fallback.json",
            path: "/offline-plugin-app-shell-fallback/"
        }, {
            componentChunkName: "component---src-templates-blog-post-template-js",
            layout: "index",
            layoutComponentChunkName: "component---src-layouts-index-js",
            jsonName: "blog-2017.json",
            path: "/blog/2017"
        }, {
            componentChunkName: "component---src-templates-blog-post-template-js",
            layout: "index",
            layoutComponentChunkName: "component---src-layouts-index-js",
            jsonName: "blog-creative-coding.json",
            path: "/blog/creative-coding"
        }, {
            componentChunkName: "component---src-templates-blog-post-template-js",
            layout: "index",
            layoutComponentChunkName: "component---src-layouts-index-js",
            jsonName: "blog-making-of.json",
            path: "/blog/making-of"
        }, {
            componentChunkName: "component---src-templates-blog-post-template-js",
            layout: "index",
            layoutComponentChunkName: "component---src-layouts-index-js",
            jsonName: "blog-on-creativity.json",
            path: "/blog/on-creativity"
        }, {
            componentChunkName: "component---src-templates-blog-post-template-js",
            layout: "index",
            layoutComponentChunkName: "component---src-layouts-index-js",
            jsonName: "blog-gatsby-webgl.json",
            path: "/blog/gatsby-webgl"
        }, {
            componentChunkName: "component---src-templates-blog-post-template-js",
            layout: "index",
            layoutComponentChunkName: "component---src-layouts-index-js",
            jsonName: "blog-origins.json",
            path: "/blog/origins"
        }, {
            componentChunkName: "component---src-templates-blog-post-template-js",
            layout: "index",
            layoutComponentChunkName: "component---src-layouts-index-js",
            jsonName: "blog-software-development.json",
            path: "/blog/software-development"
        }, {
            componentChunkName: "component---src-templates-blog-post-template-js",
            layout: "index",
            layoutComponentChunkName: "component---src-layouts-index-js",
            jsonName: "blog-undiscovered-colors.json",
            path: "/blog/undiscovered-colors"
        }, {
            componentChunkName: "component---src-pages-404-js",
            layout: "index",
            layoutComponentChunkName: "component---src-layouts-index-js",
            jsonName: "404.json",
            path: "/404/"
        }, {
            componentChunkName: "component---src-pages-about-js",
            layout: "index",
            layoutComponentChunkName: "component---src-layouts-index-js",
            jsonName: "about.json",
            path: "/about/"
        }, {
            componentChunkName: "component---src-pages-index-js",
            layout: "index",
            layoutComponentChunkName: "component---src-layouts-index-js",
            jsonName: "index.json",
            path: "/"
        }, {
            componentChunkName: "component---src-pages-music-js",
            layout: "index",
            layoutComponentChunkName: "component---src-layouts-index-js",
            jsonName: "music.json",
            path: "/music/"
        }, {
            componentChunkName: "component---src-pages-work-js",
            layout: "index",
            layoutComponentChunkName: "component---src-layouts-index-js",
            jsonName: "work.json",
            path: "/work/"
        }, {
            componentChunkName: "component---src-pages-404-js",
            layout: "index",
            layoutComponentChunkName: "component---src-layouts-index-js",
            jsonName: "404-html.json",
            path: "/404.html"
        }, {
            componentChunkName: "component---src-pages-blog-index-js",
            layout: "index",
            layoutComponentChunkName: "component---src-layouts-index-js",
            jsonName: "blog.json",
            path: "/blog/"
        }]
    },
    174: function (n, e) {
        "use strict";
        n.exports = function (n) {
            var e = n.getNextQueuedResources,
                o = n.createResourceDownload,
                t = [],
                r = [],
                u = function () {
                    var n = e();
                    n && (r.push(n), o(n))
                },
                a = function (n) {
                    switch (n.type) {
                        case "RESOURCE_FINISHED":
                            r = r.filter(function (e) {
                                return e !== n.payload
                            });
                            break;
                        case "ON_PRE_LOAD_PAGE_RESOURCES":
                            t.push(n.payload.path);
                            break;
                        case "ON_POST_LOAD_PAGE_RESOURCES":
                            t = t.filter(function (e) {
                                return e !== n.payload.page.path
                            });
                            break;
                        case "ON_NEW_RESOURCES_ADDED":
                    }
                    setTimeout(function () {
                        0 === r.length && 0 === t.length && u()
                    }, 0)
                };
            return {
                onResourcedFinished: function (n) {
                    a({
                        type: "RESOURCE_FINISHED",
                        payload: n
                    })
                },
                onPreLoadPageResources: function (n) {
                    a({
                        type: "ON_PRE_LOAD_PAGE_RESOURCES",
                        payload: n
                    })
                },
                onPostLoadPageResources: function (n) {
                    a({
                        type: "ON_POST_LOAD_PAGE_RESOURCES",
                        payload: n
                    })
                },
                onNewResourcesAdded: function () {
                    a({
                        type: "ON_NEW_RESOURCES_ADDED"
                    })
                },
                getState: function () {
                    return {
                        pagesLoading: t,
                        resourcesDownloading: r
                    }
                },
                empty: function () {
                    t = [], r = []
                }
            }
        }
    },
    0: function (n, e, o) {
        "use strict";

        function t(n) {
            return n && n.__esModule ? n : {
                default: n
            }
        }
        var r = Object.assign || function (n) {
                for (var e = 1; e < arguments.length; e++) {
                    var o = arguments[e];
                    for (var t in o) Object.prototype.hasOwnProperty.call(o, t) && (n[t] = o[t])
                }
                return n
            },
            u = o(169),
            a = o(1),
            i = t(a),
            s = o(55),
            c = t(s),
            l = o(63),
            f = o(319),
            p = o(97),
            d = t(p),
            m = o(275),
            g = t(m),
            h = o(43),
            y = t(h),
            j = o(340),
            v = t(j),
            b = o(341),
            x = t(b),
            R = o(171),
            C = t(R),
            w = o(170),
            N = t(w),
            k = o(109),
            P = t(k);
        o(265), window.___emitter = y.default, P.default.addPagesArray(v.default), P.default.addProdRequires(N.default), window.asyncRequires = N.default, window.___loader = P.default, window.matchPath = l.matchPath;
        var _ = (0, d.default)(),
            E = x.default.reduce(function (n, e) {
                return n[e.fromPath] = e, n
            }, {}),
            O = function (n) {
                var e = E[n];
                return null != e && (_.replace(e.toPath), !0)
            };
        O(window.location.pathname), (0, u.apiRunnerAsync)("onClientEntry").then(function () {
            function n(n) {
                window.___history || (window.___history = n, n.listen(function (n, e) {
                    O(n.pathname) || (0, u.apiRunner)("onRouteUpdate", {
                        location: n,
                        action: e
                    })
                }))
            }

            function e(n, e) {
                var o = e.location.pathname,
                    t = (0, u.apiRunner)("shouldUpdateScroll", {
                        prevRouterProps: n,
                        pathname: o
                    });
                if (t.length > 0) return t[0];
                if (n) {
                    var r = n.location.pathname;
                    if (r === o) return !1
                }
                return !0
            }(0, u.apiRunner)("registerServiceWorker").length > 0 && o(175);
            var t = function (n) {
                function e(o) {
                    o.page.path === P.default.getPage(n).path && (y.default.off("onPostLoadPageResources", e), clearTimeout(t), window.___history.push(n))
                }
                var o = E[n];
                if (o && (n = o.toPath), window.location.pathname !== n) {
                    var t = setTimeout(function () {
                        y.default.off("onPostLoadPageResources", e), y.default.emit("onDelayedLoadPageResources", {
                            pathname: n
                        }), window.___history.push(n)
                    }, 1e3);
                    P.default.getResourcesForPathname(n) ? (clearTimeout(t), window.___history.push(n)) : y.default.on("onPostLoadPageResources", e)
                }
            };
            window.___navigateTo = t, (0, u.apiRunner)("onRouteUpdate", {
                location: _.location,
                action: _.action
            });
            var s = (0, u.apiRunner)("replaceRouterComponent", {
                    history: _
                })[0],
                p = function (n) {
                    var e = n.children;
                    return i.default.createElement(l.Router, {
                        history: _
                    }, e)
                },
                d = (0, l.withRouter)(C.default);
            P.default.getResourcesForPathname(window.location.pathname, function () {
                var o = function () {
                        return (0, a.createElement)(s ? s : p, null, (0, a.createElement)(f.ScrollContext, {
                            shouldUpdateScroll: e
                        }, (0, a.createElement)(d, {
                            layout: !0,
                            children: function (e) {
                                return (0, a.createElement)(l.Route, {
                                    render: function (o) {
                                        n(o.history);
                                        var t = e ? e : o;
                                        return P.default.getPage(t.location.pathname) ? (0, a.createElement)(C.default, r({
                                            page: !0
                                        }, t)) : (0, a.createElement)(C.default, {
                                            location: {
                                                page: !0,
                                                pathname: "/404.html"
                                            }
                                        })
                                    }
                                })
                            }
                        })))
                    },
                    t = (0, u.apiRunner)("wrapRootComponent", {
                        Root: o
                    }, o)[0];
                (0, g.default)(function () {
                    return c.default.render(i.default.createElement(t, null), "undefined" != typeof window ? document.getElementById("___gatsby") : void 0, function () {
                        (0, u.apiRunner)("onInitialClientRender")
                    })
                })
            })
        })
    },
    341: function (n, e) {
        n.exports = []
    },
    175: function (n, e, o) {
        "use strict";

        function t(n) {
            return n && n.__esModule ? n : {
                default: n
            }
        }
        var r = o(43),
            u = t(r),
            a = "/";
        "serviceWorker" in navigator && navigator.serviceWorker.register(a + "sw.js").then(function (n) {
            n.addEventListener("updatefound", function () {
                var e = n.installing;
                console.log("installingWorker", e), e.addEventListener("statechange", function () {
                    switch (e.state) {
                        case "installed":
                            navigator.serviceWorker.controller ? window.location.reload() : (console.log("Content is now available offline!"), u.default.emit("sw:installed"));
                            break;
                        case "redundant":
                            console.error("The installing service worker became redundant.")
                    }
                })
            })
        }).catch(function (n) {
            console.error("Error during service worker registration:", n)
        })
    },
    275: function (n, e, o) {
        ! function (e, o) {
            n.exports = o()
        }("domready", function () {
            var n, e = [],
                o = document,
                t = o.documentElement.doScroll,
                r = "DOMContentLoaded",
                u = (t ? /^loaded|^c/ : /^loaded|^i|^c/).test(o.readyState);
            return u || o.addEventListener(r, n = function () {
                    for (o.removeEventListener(r, n), u = 1; n = e.shift();) n()
                }),
                function (n) {
                    u ? setTimeout(n, 0) : e.push(n)
                }
        })
    },
    2: function (n, e, o) {
        "use strict";

        function t() {
            function n(n) {
                var e = t.lastChild;
                return "SCRIPT" !== e.tagName ? void("undefined" != typeof console && console.warn && console.warn("Script is not a script", e)) : void(e.onload = e.onerror = function () {
                    e.onload = e.onerror = null, setTimeout(n, 0)
                })
            }
            var e, t = document.querySelector("head"),
                r = o.e,
                u = o.s;
            o.e = function (t, a) {
                var i = !1,
                    s = !0,
                    c = function (n) {
                        a && (a(o, n), a = null)
                    };
                return !u && e && e[t] ? void c(!0) : (r(t, function () {
                    i || (i = !0, s ? setTimeout(function () {
                        c()
                    }) : c())
                }), void(i || (s = !1, n(function () {
                    i || (i = !0, u ? u[t] = void 0 : (e || (e = {}), e[t] = !0), c(!0))
                }))))
            }
        }
        t()
    },
    286: function (n, e, o) {
        o(2), n.exports = function (n) {
            return o.e(99219681209289, function (e, t) {
                t ? (console.log("bundle loading error", t), n(!0)) : n(null, function () {
                    return o(311)
                })
            })
        }
    },
    312: function (n, e) {
        "use strict";
        e.registerServiceWorker = function () {
            return !0
        }
    },
    313: function (n, e, o) {
        "use strict";
        o(201), o(202)
    },
    412: function (n, e) {
        function o(n) {
            return n = n || Object.create(null), {
                on: function (e, o) {
                    (n[e] || (n[e] = [])).push(o)
                },
                off: function (e, o) {
                    n[e] && n[e].splice(n[e].indexOf(o) >>> 0, 1)
                },
                emit: function (e, o) {
                    (n[e] || []).map(function (n) {
                        n(o)
                    }), (n["*"] || []).map(function (n) {
                        n(e, o)
                    })
                }
            }
        }
        n.exports = o
    },
    36: function (n, e) {
        function o() {
            throw new Error("setTimeout has not been defined")
        }

        function t() {
            throw new Error("clearTimeout has not been defined")
        }

        function r(n) {
            if (l === setTimeout) return setTimeout(n, 0);
            if ((l === o || !l) && setTimeout) return l = setTimeout, setTimeout(n, 0);
            try {
                return l(n, 0)
            } catch (e) {
                try {
                    return l.call(null, n, 0)
                } catch (e) {
                    return l.call(this, n, 0)
                }
            }
        }

        function u(n) {
            if (f === clearTimeout) return clearTimeout(n);
            if ((f === t || !f) && clearTimeout) return f = clearTimeout, clearTimeout(n);
            try {
                return f(n)
            } catch (e) {
                try {
                    return f.call(null, n)
                } catch (e) {
                    return f.call(this, n)
                }
            }
        }

        function a() {
            g && d && (g = !1, d.length ? m = d.concat(m) : h = -1, m.length && i())
        }

        function i() {
            if (!g) {
                var n = r(a);
                g = !0;
                for (var e = m.length; e;) {
                    for (d = m, m = []; ++h < e;) d && d[h].run();
                    h = -1, e = m.length
                }
                d = null, g = !1, u(n)
            }
        }

        function s(n, e) {
            this.fun = n, this.array = e
        }

        function c() {}
        var l, f, p = n.exports = {};
        ! function () {
            try {
                l = "function" == typeof setTimeout ? setTimeout : o
            } catch (n) {
                l = o
            }
            try {
                f = "function" == typeof clearTimeout ? clearTimeout : t
            } catch (n) {
                f = t
            }
        }();
        var d, m = [],
            g = !1,
            h = -1;
        p.nextTick = function (n) {
            var e = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var o = 1; o < arguments.length; o++) e[o - 1] = arguments[o];
            m.push(new s(n, e)), 1 !== m.length || g || r(i)
        }, s.prototype.run = function () {
            this.fun.apply(null, this.array)
        }, p.title = "browser", p.browser = !0, p.env = {}, p.argv = [], p.version = "", p.versions = {}, p.on = c, p.addListener = c, p.once = c, p.off = c, p.removeListener = c, p.removeAllListeners = c, p.emit = c, p.prependListener = c, p.prependOnceListener = c, p.listeners = function (n) {
            return []
        }, p.binding = function (n) {
            throw new Error("process.binding is not supported")
        }, p.cwd = function () {
            return "/"
        }, p.chdir = function (n) {
            throw new Error("process.chdir is not supported")
        }, p.umask = function () {
            return 0
        }
    },
    288: function (n, e, o) {
        o(2), n.exports = function (n) {
            return o.e(0x9427c64ab85d, function (e, t) {
                t ? (console.log("bundle loading error", t), n(!0)) : n(null, function () {
                    return o(185)
                })
            })
        }
    },
    289: function (n, e, o) {
        o(2), n.exports = function (n) {
            return o.e(0xefeaa6d1881d, function (e, t) {
                t ? (console.log("bundle loading error", t), n(!0)) : n(null, function () {
                    return o(186)
                })
            })
        }
    },
    290: function (n, e, o) {
        o(2), n.exports = function (n) {
            return o.e(0x8a675b55feca, function (e, t) {
                t ? (console.log("bundle loading error", t), n(!0)) : n(null, function () {
                    return o(187)
                })
            })
        }
    },
    291: function (n, e, o) {
        o(2), n.exports = function (n) {
            return o.e(35783957827783, function (e, t) {
                t ? (console.log("bundle loading error", t), n(!0)) : n(null, function () {
                    return o(188)
                })
            })
        }
    },
    292: function (n, e, o) {
        o(2), n.exports = function (n) {
            return o.e(0xb9757534b5af, function (e, t) {
                t ? (console.log("bundle loading error", t), n(!0)) : n(null, function () {
                    return o(189)
                })
            })
        }
    },
    293: function (n, e, o) {
        o(2), n.exports = function (n) {
            return o.e(23899280101116, function (e, t) {
                t ? (console.log("bundle loading error", t), n(!0)) : n(null, function () {
                    return o(190)
                })
            })
        }
    },
    294: function (n, e, o) {
        o(2), n.exports = function (n) {
            return o.e(0xa5c094d414ef, function (e, t) {
                t ? (console.log("bundle loading error", t), n(!0)) : n(null, function () {
                    return o(191)
                })
            })
        }
    }
});
//# sourceMappingURL=app-3ca0e9419c15e4d6ab5b.js.map