webpackJsonp([0x8a675b55feca],{417:function(e,t){},187:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.pageQuery=void 0;var r=a(1),n=l(r),d=a(37),f=l(d),u=a(23),o=l(u);a(417);var c=function(e){var t=e.data,a=t.allMarkdownRemark.edges;return n.default.createElement("section",{className:"content"},n.default.createElement(f.default,{title:"Blog / Prayash Thapa"}),n.default.createElement("div",{id:"blog",className:"fade"},a.filter(function(e){return e.node.frontmatter.title.length>0}).map(function(e,t){var a=e.node,l=(a.fields,a.frontmatter);return n.default.createElement("div",{className:"blog-post "+(0===t?"first":""),key:a.id},n.default.createElement("time",{dateTime:l.date},a.frontmatter.date),n.default.createElement("h2",null,n.default.createElement(o.default,{to:a.fields.slug},a.frontmatter.title)),n.default.createElement("p",null,a.frontmatter.description))})))};t.pageQuery="** extracted graphql fragment **";t.default=c}});
//# sourceMappingURL=component---src-pages-blog-index-js-c947c8853f7fe8e31094.js.map