webpackJsonp([0xefeaa6d1881d],{287:function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=a(12),n=i(l),o=a(16),r=i(o),s=a(15),d=i(s),u=a(113),f=i(u),c=a(39),p=i(c),h=a(1),m=i(h),g=a(3),y=i(g),b=function(e){var t=(0,p.default)({},e);return t.responsiveResolution&&(t.resolutions=t.responsiveResolution,delete t.responsiveResolution),t.responsiveSizes&&(t.sizes=t.responsiveSizes,delete t.responsiveSizes),t},v={},w=function(e){var t=b(e),a=t.sizes?t.sizes.src:t.resolutions.src;return!!v[a]||(v[a]=!0,!1)},E=void 0,I=[];"undefined"!=typeof window&&window.IntersectionObserver&&(E=new window.IntersectionObserver(function(e){e.forEach(function(e){I.forEach(function(t){t[0]===e.target&&e.isIntersecting&&(E.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"}));var k=function(e,t){E.observe(e),I.push([e,t])},z=function(e){var t=e.opacity,a=e.onLoad,i=e.transitionDelay,l=void 0===i?"":i,n=(0,f.default)(e,["opacity","onLoad","transitionDelay"]);return m.default.createElement("img",(0,p.default)({},n,{onLoad:a,style:{position:"absolute",top:0,left:0,transition:"opacity 0.5s",transitionDelay:l,opacity:t,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"}}))};z.propTypes={opacity:y.default.number,transitionDelay:y.default.string,onLoad:y.default.func};var L=function(e){function t(a){(0,n.default)(this,t);var i=(0,r.default)(this,e.call(this,a)),l=!0,o=!0,s=!1,d=w(a);return!d&&"undefined"!=typeof window&&window.IntersectionObserver&&(l=!1,o=!1,s=!0),"undefined"==typeof window&&(l=!1,o=!1),i.state={isVisible:l,imgLoaded:o,IOSupported:s},i.handleRef=i.handleRef.bind(i),i}return(0,d.default)(t,e),t.prototype.handleRef=function(e){var t=this;this.state.IOSupported&&e&&k(e,function(){t.setState({isVisible:!0,imgLoaded:!1})})},t.prototype.render=function(){var e=this,t=b(this.props),a=t.title,i=t.alt,l=t.className,n=t.outerWrapperClassName,o=t.style,r=void 0===o?{}:o,s=t.sizes,d=t.resolutions,u=t.backgroundColor,f=void 0;if(f="boolean"==typeof u?"lightgray":u,s){var c=s;return m.default.createElement("div",{className:(n?n:"")+" gatsby-image-outer-wrapper",style:{zIndex:0,position:"absolute"===r.position?"initial":"relative"}},m.default.createElement("div",{className:(l?l:"")+" gatsby-image-wrapper",style:(0,p.default)({position:"relative",overflow:"hidden",zIndex:1},r),ref:this.handleRef},m.default.createElement("div",{style:{width:"100%",paddingBottom:100/c.aspectRatio+"%"}}),c.base64&&m.default.createElement(z,{alt:i,title:a,src:c.base64,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s"}),f&&m.default.createElement("div",{title:a,style:{backgroundColor:f,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&m.default.createElement(z,{alt:i,title:a,srcSet:c.srcSet,src:c.src,sizes:c.sizes,opacity:this.state.imgLoaded||this.props.fadeIn===!1?1:0,onLoad:function(){return e.state.IOSupported&&e.setState({imgLoaded:!0})}})))}if(d){var h=d,g=(0,p.default)({position:"relative",overflow:"hidden",display:"inline-block",zIndex:1,width:h.width,height:h.height},r);return"inherit"===r.display&&delete g.display,m.default.createElement("div",{className:(n?n:"")+" gatsby-image-outer-wrapper",style:{zIndex:0,position:"absolute"===r.position?"initial":"relative"}},m.default.createElement("div",{className:(l?l:"")+" gatsby-image-wrapper",style:g,ref:this.handleRef},h.base64&&m.default.createElement(z,{alt:i,title:a,src:h.base64,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s"}),f&&m.default.createElement("div",{title:a,style:{backgroundColor:f,width:h.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:h.height}}),this.state.isVisible&&m.default.createElement(z,{alt:i,title:a,width:h.width,height:h.height,srcSet:h.srcSet,src:h.src,opacity:this.state.imgLoaded||this.props.fadeIn===!1?1:0,onLoad:function(){return e.setState({imgLoaded:!0})}})))}return null},t}(m.default.Component);L.defaultProps={fadeIn:!0,alt:""},L.propTypes={responsiveResolution:y.default.object,responsiveSizes:y.default.object,resolutions:y.default.object,sizes:y.default.object,fadeIn:y.default.bool,title:y.default.string,alt:y.default.string,className:y.default.oneOfType([y.default.string,y.default.object]),outerWrapperClassName:y.default.oneOfType([y.default.string,y.default.object]),style:y.default.object,position:y.default.string,backgroundColor:y.default.oneOfType([y.default.string,y.default.bool])},t.default=L},416:function(e,t){},186:function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.pageQuery=void 0;var l=a(1),n=i(l),o=a(37),r=i(o),s=a(287),d=i(s);a(416);var u=function(e){var t=e.data,a=t.imageSharp;return n.default.createElement("section",{className:"content"},n.default.createElement(r.default,{title:"effulgence // about"}),n.default.createElement("div",{id:"about",className:"fade"},n.default.createElement("article",{className:"overview"},n.default.createElement("header",null,n.default.createElement("h2",{className:"bold"},"Hi, I'm Prayash.")),n.default.createElement("br",null),n.default.createElement("h3",null,"I play"," ",n.default.createElement("a",{href:"http://youtube.com/iameffulgence",target:"_blank"},"guitar")," ","and write"," ",n.default.createElement("a",{href:"http://github.com/prayasht",target:"_blank"},"code")," ","that draws things."),n.default.createElement("br",null),n.default.createElement(d.default,{alt:"Picture of X",sizes:a.sizes}),n.default.createElement("br",null),n.default.createElement("p",null,"Daron is a Digital Marketing Specialist, with experience managing nation wide teams and multi-million-dollar campaigns. His background in brand strategy, visual design, and account management inform his mindful but competitive approach.in"," ",n.default.createElement("a",{href:"https://goo.gl/maps/dRHoHcJc5WJ2",target:"_blank"},n.default.createElement("del",null,"Kathmandu, Nepal"))," ","Boulder, CO."),n.default.createElement("p",null,"I use this space primarily for sharing personal projects, music, and other art-like things that I may be working on. If you'd like an overview of my professional work, check out my"," ",n.default.createElement("a",{href:"http://linkedin.com/in/prayasht",target:"_blank"},"online resume"),"."),n.default.createElement("p",null,"Daron is fueled by his passion for understanding the nuances of cross-cultural advertising. He considers himself a ‘forever student,’ eager to both build on his academic foundations in marketing and Internet Technology. blog if you're interested in any of my ramblings on art, tech, life, or other things."),n.default.createElement("p",null,"His hunger for knowledge and determination to turn information into action has contributed to his most recent success at 360 Agency, where he led nationwide, award-winning campaigns for heavy-hitting brands such as AT&T, Blackberry, and Billboard Awards.  Meanwhile, he vastly improved the productivity of his team by implementing strategic project management strategies and ensuring a work-life balance for his department. Daron believes determination in the workplace is key to success - a tenet he lives out through his interests in hiking, sports, and traveling the world.  Daron is currently working as a freelance marketing specialist and seeks challenges. Reach out to dsobrien1@gmail.com to connect!"," ",n.default.createElement("a",{href:"mailto:prayash@effulgence.io",target:"_blank"},"Don't be a stranger!")))))};t.pageQuery="** extracted graphql fragment **";t.default=u}});
//# sourceMappingURL=component---src-pages-about-js-e64ec55b6d8b257c2d69.js.map