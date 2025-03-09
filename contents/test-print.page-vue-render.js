
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"sticky":""}},[_c('navbar',{attrs:{"type":"dark"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/mb-dev-yyccbb/index.html","title":"Home"}},[_v("Markbind D Test Site")])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('form',{staticClass:"navbar-form"},[_c('searchbar',{attrs:{"data":searchData,"placeholder":"Search","on-hit":searchCallback,"menu-align-right":""}})],1)])]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/mb-dev-yyccbb/contents/topic1.html"}},[_v("Topic 1")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/mb-dev-yyccbb/contents/topic2.html"}},[_v("Topic 2")])]),_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("Topic 3")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/mb-dev-yyccbb/contents/topic3a.html"}},[_v("Topic 3a")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/mb-dev-yyccbb/contents/topic3b.html"}},[_v("Topic 3b")])]),_v(" "),_c('li')])],1)],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_c('overlay-source',{attrs:{"id":"site-nav","tag-name":"nav","to":"site-nav"}},[_c('div',{staticClass:"site-nav-top"},[_c('div',{staticClass:"fw-bold mb-2",staticStyle:{"font-size":"1.25rem"}},[_v("Contents")])]),_v(" "),_c('div',{staticClass:"nav-component slim-scroll"},[_c('site-nav',[_c('overlay-source',{staticClass:"site-nav-list site-nav-list-root",attrs:{"tag-name":"ul","to":"mb-site-nav"}},[_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/mb-dev-yyccbb/index.html"}},[_v("Test Playground 💻")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/mb-dev-yyccbb/contents/topic1.html"}},[_v("Topic 1")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/mb-dev-yyccbb/contents/topic2.html"}},[_v("Topic 2")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_v("Topic 3 \n\n"),_c('div',{staticClass:"site-nav-dropdown-btn-container"},[_c('i',{staticClass:"site-nav-dropdown-btn-icon site-nav-rotate-icon",attrs:{"onclick":"handleSiteNavClick(this.parentNode.parentNode, false); event.stopPropagation();"}},[_c('span',{staticClass:"glyphicon glyphicon-menu-down",attrs:{"aria-hidden":"true"}})])])]),_c('ul',{staticClass:"site-nav-dropdown-container site-nav-dropdown-container-open site-nav-list"},[_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-1",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/mb-dev-yyccbb/contents/topic3a.html"}},[_v("Topic 3a")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-1",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/mb-dev-yyccbb/contents/topic3b.html"}},[_v("Topic 3b")])])])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/mb-dev-yyccbb/contents/test-print.html"}},[_v("Test-print")])])])])],1)],1)]),_v(" "),_c('div',{attrs:{"id":"content-wrapper"}},[_c('breadcrumb'),_v(" "),_c('panel',{attrs:{"expanded":""},scopedSlots:_u([{key:"header",fn:function(){return [_c('p',[_v("Which are unsafe practices?")])]},proxy:true}])},[_v(" "),_c('p',[_v("Which of these are unsafe coding practices?")]),_v(" "),_c('ul',{staticClass:"contains-task-list"},[_c('li',{staticClass:"task-list-item enabled"},[_c('p',[_c('input',{staticClass:"task-list-item-checkbox",attrs:{"type":"checkbox"}}),_v(" a. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("case")]),_v(" statements without a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("default")]),_v(" clause")])]),_v(" "),_c('li',{staticClass:"task-list-item enabled"},[_c('p',[_c('input',{staticClass:"task-list-item-checkbox",attrs:{"type":"checkbox"}}),_v(" b. Omitting braces when a code block has only one statement")]),_v(" "),_c('p',[_v("e.g writing this")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("if(isProper)\n")]),_c('span',[_v("    return PROPER_AMOUNT;\n")])])]),_c('p',[_v("instead of")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("if(isProper){\n")]),_c('span',[_v("    return PROPER_AMOUNT;\n")]),_c('span',[_v("}\n")])])])]),_v(" "),_c('li',{staticClass:"task-list-item enabled"},[_c('p',[_c('input',{staticClass:"task-list-item-checkbox",attrs:{"type":"checkbox"}}),_v(" c. Using a variable just to explain what’s going on")]),_v(" "),_c('p',[_v("e.g.writing this")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("boolean isProper = notNull && notEmpty;\n")]),_c('span',[_v("return isProper;\n")])])]),_c('p',[_v("instead of")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("return notNull && notEmpty;\n")])])])])]),_v(" "),_c('panel',{attrs:{"type":"seamless","minimized":""},scopedSlots:_u([{key:"header",fn:function(){return [_c('p',[_v("Answer")])]},proxy:true}])},[_v(" "),_c('p',[_v("a, b.")]),_v(" "),_c('p',[_v("Reason why [c] is not a bad practice: The extra variable helps to make the code more understandable because it makes the intent of the formula clearer.")])])],1),_v(" "),_c('panel',{attrs:{"expand-headerless":""},scopedSlots:_u([{key:"header",fn:function(){return [_c('p',[_v("Which are unsafe practices?")])]},proxy:true}])},[_v(" "),_c('p',[_v("Which of these are unsafe coding practices?")]),_v(" "),_c('ul',{staticClass:"contains-task-list"},[_c('li',{staticClass:"task-list-item enabled"},[_c('p',[_c('input',{staticClass:"task-list-item-checkbox",attrs:{"type":"checkbox"}}),_v(" a. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("case")]),_v(" statements without a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("default")]),_v(" clause")])]),_v(" "),_c('li',{staticClass:"task-list-item enabled"},[_c('p',[_c('input',{staticClass:"task-list-item-checkbox",attrs:{"type":"checkbox"}}),_v(" b. Omitting braces when a code block has only one statement")]),_v(" "),_c('p',[_v("e.g writing this")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("if(isProper)\n")]),_c('span',[_v("    return PROPER_AMOUNT;\n")])])]),_c('p',[_v("instead of")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("if(isProper){\n")]),_c('span',[_v("    return PROPER_AMOUNT;\n")]),_c('span',[_v("}\n")])])])]),_v(" "),_c('li',{staticClass:"task-list-item enabled"},[_c('p',[_c('input',{staticClass:"task-list-item-checkbox",attrs:{"type":"checkbox"}}),_v(" c. Using a variable just to explain what’s going on")]),_v(" "),_c('p',[_v("e.g.writing this")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("boolean isProper = notNull && notEmpty;\n")]),_c('span',[_v("return isProper;\n")])])]),_c('p',[_v("instead of")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("return notNull && notEmpty;\n")])])])])]),_v(" "),_c('panel',{attrs:{"type":"seamless","minimized":""},scopedSlots:_u([{key:"header",fn:function(){return [_c('p',[_v("Answer")])]},proxy:true}])},[_v(" "),_c('p',[_v("a, b.")]),_v(" "),_c('p',[_v("Reason why [c] is not a bad practice: The extra variable helps to make the code more understandable because it makes the intent of the formula clearer.")])])],1)],1),_v(" "),_c('overlay-source',{attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"},[_c('div',[_c('p',[_c('span',{staticClass:"mkb-text-red"},[_v("This is some red text.")])])])])]),_v(" "),_c('scroll-top-button')],1),_v(" "),_m(0)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('small',[_v("[Generated by "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 5.5.3")]),_v("]")])])])}
}];
  