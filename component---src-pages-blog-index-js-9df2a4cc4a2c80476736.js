webpackJsonp([0x8a675b55feca],{429:function(e,t){},211:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.pageQuery=void 0;var n=a(1),r=l(n),d=a(43),u=l(d),f=a(26),o=l(f);a(429);var c=function(e){var t=e.data,a=t.allMarkdownRemark.edges;return r.default.createElement("section",{className:"content"},r.default.createElement(u.default,{title:"Blog / Prayash Thapa"}),r.default.createElement("div",{id:"blog",className:"fade"},a.filter(function(e){return e.node.frontmatter.title.length>0}).map(function(e,t){var a=e.node,l=(a.fields,a.frontmatter);return r.default.createElement("div",{className:"blog-post",key:a.id},r.default.createElement("time",{dateTime:l.date},a.frontmatter.date),r.default.createElement("h2",null,r.default.createElement(o.default,{to:a.fields.slug},a.frontmatter.title)),r.default.createElement("p",null,a.frontmatter.description))})))};t.pageQuery="** extracted graphql fragment **";t.default=c}});
//# sourceMappingURL=component---src-pages-blog-index-js-9df2a4cc4a2c80476736.js.map