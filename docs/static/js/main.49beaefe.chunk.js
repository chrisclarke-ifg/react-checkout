(this["webpackJsonpreact-bootstrap-init"]=this["webpackJsonpreact-bootstrap-init"]||[]).push([[0],{23:function(e,t,a){"use strict";a.r(t);var i=a(2),c=a.n(i),s=a(13),n=a.n(s),l=a(7),r=a(24),o=a(25),d=a(0),u=function(e){var t=e.className;return Object(d.jsx)("hr",{className:"checkout__page-break ".concat(t)})},j=function(){return Object(d.jsx)("header",{className:"container-fluid checkout-header",children:Object(d.jsx)(r.a,{children:Object(d.jsxs)(o.a,{className:"col-12",children:[Object(d.jsx)("a",{title:"Surfdome",href:"/",children:Object(d.jsx)("img",{className:"checkout-header__logo",alt:"Surfdome",src:"https://static-surfdome.imgix.net/assets/ui/logos/surfdome-logo-no-tagline-fb2d388707df9684316ad8aac52640ee.png"})}),Object(d.jsx)("img",{alt:"Secure",className:"checkout-header__icon",width:"19px",height:"25px",src:"/images/shared/checkout/lock.svg"}),Object(d.jsx)(u,{className:"hidden-md-up checkout__page-break--header"})]})})})},b=a(3),h=function(e){var t=e.title;return Object(d.jsx)("h2",{className:"checkout__section-header",children:t})},m=function(e){var t=e.children,a=e.className;return Object(d.jsx)("div",{className:"checkout__section ".concat(a),children:t})},p=function(e){var t={Albania:"Albania","Already have an account?":"Already have an account?",Andorra:"Andorra",Argentina:"Argentina",Australia:"Australia",Austria:"Austria",Bahamas:"Bahamas",Bahrain:"Bahrain",Belarus:"Belarus",Belgium:"Belgium",Bermuda:"Bermuda","Billing details":"Billing details","Bosnia And Herzegovina":"Bosnia And Herzegovina",Brazil:"Brazil","Brunei Darussalam":"Brunei Darussalam",Bulgaria:"Bulgaria",Canada:"Canada",Chile:"Chile",China:"China",Colombia:"Colombia","Continue To Payment":"Continue To Payment",Country:"Country",Croatia:"Croatia",Cyprus:"Cyprus","Czech Republic":"Czech Republic","Delivery Address":"Delivery Address","Delivery details":"Delivery details",Denmark:"Denmark",Ecuador:"Ecuador","Edit Basket":"Edit Basket","Edit Details":"Edit Details",Estonia:"Estonia","Evening/Mobile no":"Evening/Mobile no","Faroe Islands":"Faroe Islands",Finland:"Finland",France:"France",Georgia:"Georgia",Germany:"Germany",Gibraltar:"Gibraltar",Greece:"Greece",Greenland:"Greenland","Hide Summary":"Hide Summary","Hong Kong":"Hong Kong",Hungary:"Hungary",Iceland:"Iceland",India:"India",Indonesia:"Indonesia",Ireland:"Ireland",Israel:"Israel",Italy:"Italy",Japan:"Japan",Kenya:"Kenya","Korea, Republic Of":"Korea, Republic Of",Kyrgyzstan:"Kyrgyzstan",Latvia:"Latvia",Liechtenstein:"Liechtenstein",Lithuania:"Lithuania","Log in":"Log in",Luxembourg:"Luxembourg",Macao:"Macao","Macedonia, The Former Yugoslav Republic Of":"Macedonia, The Former Yugoslav Republic Of",Malaysia:"Malaysia",Malta:"Malta","Manually enter address here":"Manually enter address here",Mexico:"Mexico","Moldova, Republic Of":"Moldova, Republic Of",Monaco:"Monaco",Montenegro:"Montenegro",Morocco:"Morocco",Mozambique:"Mozambique","My billing address is the same as above":"My billing address is the same as above",Netherlands:"Netherlands","New Zealand":"New Zealand",Nigeria:"Nigeria",Norway:"Norway","Order Total":"Order Total","Personal Details":"Personal Details",Peru:"Peru",Philippines:"Philippines","Phone Number":"Phone Number",Poland:"Poland",Portugal:"Portugal",Postcode:"Postcode","Puerto Rico":"Puerto Rico",Qatar:"Qatar","Qty: ":"Qty: ",Romania:"Romania","Russian Federation":"Russian Federation","San Marino":"San Marino","Saudi Arabia":"Saudi Arabia","Search for postal / Zip code or first line of address":"Search for postal / Zip code or first line of address","Secure Checkout":"Secure Checkout",Serbia:"Serbia",Seychelles:"Seychelles",Singapore:"Singapore",Slovakia:"Slovakia",Slovenia:"Slovenia","South Africa":"South Africa",Spain:"Spain","Sri Lanka":"Sri Lanka","Step:":"Step:",Sweden:"Sweden",Switzerland:"Switzerland","Taiwan, Republic Of China":"Taiwan, Republic Of China",Thailand:"Thailand",Turkey:"Turkey",Ukraine:"Ukraine","United Arab Emirates":"United Arab Emirates","United Kingdom":"United Kingdom",USA:"USA","Viet Nam":"Viet Nam","Your basket":"Your basket","Your Details":"Your Details"};return t[e]?t[e]:e},O=function(e){var t=e.price,a=void 0===t?9.99:t,i=e.step,c=void 0===i?1:i,s=e.isSummaryHidden,n=e.setIsSummaryHidden;return Object(d.jsxs)(m,{className:"container-fluid checkout-summary__overview",children:[Object(d.jsxs)(r.a,{children:[Object(d.jsx)(o.a,{className:"col-6",children:Object(d.jsx)(h,{title:p("Secure Checkout")})}),Object(d.jsx)(o.a,{className:"align-right text-large col-6",children:Object(d.jsxs)("p",{children:[p("Order Total"),Object(d.jsxs)("strong",{className:"checkout-summary__price--total",children:["\xa3",a]})]})})]}),Object(d.jsxs)(r.a,{children:[Object(d.jsx)(o.a,{className:"col-6",children:Object(d.jsxs)("p",{children:[p("Step:"),Object(d.jsxs)("strong",{children:[c,"/2"]})]})}),Object(d.jsx)(o.a,{className:"col-6 align-right",children:s?Object(d.jsx)("button",{className:"btn btn--link i-show-loading",onClick:function(){return n(!s)},children:p("Show Summary")}):Object(d.jsx)("button",{className:"btn btn--link i-show-loading",onClick:function(){return n(!s)},children:p("Hide Summary")})})]})]})},x=a(26),y=function(e){var t=e.first_name,a=void 0===t?"":t,i=e.surname,c=void 0===i?"":i,s=e.email_address,n=void 0===s?"":s,l=e.address,j=void 0===l?"":l,b=e.address_line_2,m=void 0===b?"":b,O=e.phone_number,y=void 0===O?"":O,v=e.onEditDetails,_=e.isSummaryHidden,g="".concat(a," ").concat(c),f=n;return _?Object(d.jsx)(d.Fragment,{}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(x.a,{className:"container-fluid checkout-summary__head",children:Object(d.jsx)(r.a,{className:"row checkout__section-head",children:Object(d.jsx)(o.a,{className:"col-6 flex-vert-align",children:Object(d.jsx)(h,{title:p("Delivery Details")})})})}),Object(d.jsxs)(x.a,{className:"container-fluid checkout-summary__section",children:[Object(d.jsxs)(r.a,{children:[Object(d.jsxs)(o.a,{className:"col-6 col-md-7",children:[Object(d.jsx)("h3",{children:p("Personal Details")}),Object(d.jsx)("span",{children:g}),Object(d.jsx)("br",{}),Object(d.jsx)("span",{children:f}),Object(d.jsx)("br",{})]}),Object(d.jsx)(o.a,{className:"col-3 col-md-2",children:Object(d.jsx)("button",{className:"btn btn--link i-show-loading",onClick:function(){v()},children:p("Edit Details")})}),Object(d.jsx)(o.a,{className:"col-12",children:Object(d.jsx)(u,{})})]}),Object(d.jsxs)(r.a,{children:[Object(d.jsxs)(o.a,{className:"col-6 col-md-7",children:[Object(d.jsx)("h3",{children:p("Delivery Address")}),Object(d.jsx)("span",{children:j}),Object(d.jsx)("br",{}),Object(d.jsx)("span",{children:m}),Object(d.jsx)("br",{})]}),Object(d.jsx)(o.a,{className:"col-3 col-md-2",children:Object(d.jsx)("button",{className:"btn btn--link i-show-loading",onClick:function(){v()},children:p("Edit Details")})}),Object(d.jsx)(o.a,{className:"col-12",children:Object(d.jsx)(u,{})})]}),Object(d.jsxs)(r.a,{children:[Object(d.jsxs)(o.a,{className:"col-6 col-md-7",children:[Object(d.jsx)("h3",{children:p("Phone Number")}),Object(d.jsx)("span",{children:y}),Object(d.jsx)("br",{})]}),Object(d.jsx)(o.a,{className:"col-3 col-md-2",children:Object(d.jsx)("button",{className:"btn btn--link i-show-loading",onClick:function(){v()},children:p("Edit Details")})}),Object(d.jsx)(o.a,{className:"col-12",children:Object(d.jsx)(u,{})})]})]})]})},v=function(e){var t=e.title;return Object(d.jsx)("h2",{className:"checkout__section-header",children:t})},_=function(e){var t=e.item,a=t.price,i=t.title,c=t.type,s=t.size,n=t.qty,l=t.key,j=void 0===l?"1284723":l;return Object(d.jsxs)(r.a,{className:"checkout-summary__items",children:[Object(d.jsx)(o.a,{className:"col-3 col-md-3",children:Object(d.jsx)("img",{alt:i,srcSet:"https://internetfusion.imgix.net/".concat(j,".jpg?auto=format,compress&amp;cs=srgb&amp;fit=fill&amp;fill=solid&w=130&h=130&dpr=1 1x,\n                        https://internetfusion.imgix.net/").concat(j,".jpg?auto=format,compress&amp;cs=srgb&amp;fit=fill&amp;fill=solid&w=130&h=130&dpr=2 2x,\n                        https://internetfusion.imgix.net/").concat(j,".jpg?auto=format,compress&amp;cs=srgb&amp;fit=fill&amp;fill=solid&w=130&h=130&dpr=3 3x"),src:"https://internetfusion.imgix.net/".concat(j,".jpg?auto=format,compress&amp;cs=srgb&amp;fit=fill&amp;fill=solid?w=130&h=130")})}),Object(d.jsxs)(o.a,{className:"col-6 col-md-7",children:[Object(d.jsx)("h3",{children:i}),Object(d.jsx)("span",{children:c}),Object(d.jsx)("br",{}),Object(d.jsx)("span",{children:s}),Object(d.jsx)("br",{}),Object(d.jsx)("span",{children:Object(d.jsxs)("strong",{children:[p("Qty: "),n]})})]}),Object(d.jsx)(o.a,{className:"col-3 col-md-2",children:Object(d.jsxs)("h3",{children:["\xa3",a]})}),Object(d.jsx)(o.a,{className:"col-12",children:Object(d.jsx)(u,{})})]})},g=function(e){var t=e.items;return Object(d.jsx)(x.a,{className:"container-fluid checkout-summary__items checkout-summary__section",children:t.map((function(e){return Object(d.jsx)(_,{item:e},e.id)}))})},f=function(e){var t=e.isSummaryHidden,a=e.items;return t?Object(d.jsx)(d.Fragment,{}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(x.a,{className:"container-fluid checkout-summary__head",children:Object(d.jsxs)(r.a,{className:"row checkout__section-head",children:[Object(d.jsx)(o.a,{className:"col-6 flex-vert-align",children:Object(d.jsx)(v,{title:p("Your basket")})}),Object(d.jsx)(o.a,{className:"col-6 flex-vert-align flex-end",children:Object(d.jsx)("a",{href:"/order",color:"link",className:"nav-link",title:p("Edit Basket"),children:p("Edit Basket")})})]})}),Object(d.jsx)(g,{items:a})]})},k=function(){return Object(d.jsx)("div",{})},N=function(e){var t=e.state,a=e.setStep,c=e.step,s=t.checkoutSummary,n=t.yourDetails,r=t.isSummaryHidden,o=s.items,u=s.summary,j=Object(i.useState)(r),h=Object(l.a)(j,2),m=h[0],p=h[1];return Object(d.jsxs)("div",{className:"checkout-summary",children:[Object(d.jsx)(k,{}),Object(d.jsx)(O,Object(b.a)(Object(b.a)({},u),{},{isSummaryHidden:m,setIsSummaryHidden:p,step:c})),Object(d.jsx)(y,Object(b.a)(Object(b.a)({},n),{},{isSummaryHidden:m,onEditDetails:function(){return a(1)}})),Object(d.jsx)(f,{isSummaryHidden:m,items:o})]})},S=a(10),C=["dataTitle","placeholder","action","value","validationMessage","required","success"],D=function(e){var t=e.dataTitle,a=e.placeholder,i=e.action,c=e.value,s=e.validationMessage,n=e.required,l=e.success,r=Object(S.a)(e,C),o=c||"",u="input login__input i-track ".concat(n&&"i-input-required"," ").concat(s&&"input--error"," ").concat(l&&"input--success");return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("label",{className:"label hidden-xs-up",htmlFor:i,children:a}),Object(d.jsx)("input",Object(b.a)({id:i,name:i,placeholder:a,type:"text",className:u,defaultValue:o,"data-cy":t},r)),s&&Object(d.jsx)("span",{class:"input-tooltip input-tooltip--validation",children:s})]})},M=a(12),w=a.n(M),B=a(14);function P(){return(P=Object(B.a)(w.a.mark((function e(t){var a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"https://www.api.surfdome.com/en-UK/order/index.php",a=new URL("https://www.api.surfdome.com/en-UK/order/index.php"),Object.keys(t).forEach((function(e){return a.searchParams.append(e,t[e])})),e.abrupt("return",fetch(a,{method:"GET"}).then((function(e){return e.json()})));case 7:return e.prev=7,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",{error:e.t0});case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}var A=["state","setStep","save"],E=function(e){var t=e.title,a=e.value,i=e.handleChange,c=e.action;switch(e.type){case"checkbox":return Object(d.jsxs)("label",{className:"check-box label",htmlFor:c,onClick:i,children:[t,Object(d.jsx)("input",{type:"checkbox",className:"i-delivery-toggle",name:c,defaultChecked:"on"===a}),Object(d.jsx)("span",{className:"check-box__inner"})]});case"":default:return Object(d.jsx)(D,{placeholder:p(t),action:c,dataTitle:"checkout-your-details-firstname",value:a,onChange:i,success:!0})}},T=function(e){var t,a,c=e.state,s=e.setStep,n=e.save,u=(Object(S.a)(e,A),c.sections),j=Object(i.useState)({}),O=Object(l.a)(j,2),x=O[0],y=O[1],v=function(e){return P.apply(this,arguments)}({bJSON:"true",mode:"get_delivery",city:"London",countryID:"1",postcode:null===u||void 0===u||null===(t=u["Delivery Details"])||void 0===t||null===(a=t.delivery_postcode)||void 0===a?void 0:a.value,arrJSONBasketItems:'{"1113213":1}'});return Object(d.jsxs)(d.Fragment,{children:[Object.keys(u).map((function(e){return Object(d.jsxs)(m,{children:[Object(d.jsx)(h,{title:e}),Object.keys(u[e]).map((function(t){return Object(d.jsx)(r.a,{children:Object(d.jsx)(o.a,{className:"col-12",children:Object(d.jsx)(E,Object(b.a)({handleChange:function(a){return function(e){var t,a,i=e.event,s=e.section,l=e.field,r=Object(b.a)({},c),o=Object(b.a)({},s);o.value=i.target.value,r.sections[l][s.title]=o,""!==(null===u||void 0===u||null===(t=u["Delivery Details"])||void 0===t||null===(a=t.delivery_postcode)||void 0===a?void 0:a.value)&&v.then((function(e){return y(e.rates)})),n(r)}({event:a,section:u[e][t],field:e})}},u[e][t]))})},u[e][t].action)}))]},e)})),Object(d.jsx)(m,{children:Object(d.jsx)(r.a,{children:Object(d.jsxs)(o.a,{className:"col-md-8 offset-md-2",children:[Object(d.jsx)("span",{children:"Rates"}),Object(d.jsx)("pre",{children:JSON.stringify(x)})]})})}),Object(d.jsx)(m,{children:Object(d.jsx)(r.a,{children:Object(d.jsx)(o.a,{className:"col-md-8 offset-md-2",children:Object(d.jsx)("button",{type:"button",name:"continue-to-payment",onClick:function(){return s(2)},className:"btn btn--primary btn--block checkout__btn i-show-loading","data-cy":"continue-to-delivery-btn",children:p("Continue To Payment")})})})})]})},F=function(e){var t=e.id,a=e.onClick,i=e.title,c=e.desc,s=e.selected;return Object(d.jsx)(r.a,{children:Object(d.jsx)(o.a,{className:"col-12",children:Object(d.jsxs)("label",{className:"check-box check-box--detailed",onClick:a,children:[i," ",Object(d.jsx)("br",{}),Object(d.jsx)("span",{className:"desc",children:c}),Object(d.jsx)("input",{type:"checkbox",name:"payment_option_".concat(t),defaultChecked:s}),Object(d.jsx)("span",{className:"check-box__inner"})]})})})},H=function(e){var t=e.onClick,a=e.title,i=e.desc,c=e.selected;return Object(d.jsx)(r.a,{children:Object(d.jsx)(o.a,{className:"col-12",children:Object(d.jsxs)("label",{className:"check-box check-box--detailed",onClick:t,children:[a," ",Object(d.jsx)("br",{}),Object(d.jsx)("span",{className:"desc",children:i}),Object(d.jsx)("input",{type:"checkbox",name:"marketting_optin",defaultChecked:c}),Object(d.jsx)("span",{className:"check-box__inner"})]})})})},R=function(e){var t=e.options;return 0===t.length?Object(d.jsx)(d.Fragment,{}):t.map((function(e){return Object(d.jsx)(F,Object(b.a)({},e),e.id)}))},I=function(e){var t=e.paymentOptions,a=e.onPay;return Object(d.jsxs)(m,{children:[Object(d.jsx)(r.a,{children:Object(d.jsx)(o.a,{className:"col-12",children:Object(d.jsx)(h,{title:p("Select Payment Method")})})}),Object(d.jsx)(r.a,{children:Object(d.jsx)(o.a,{className:"col-12",children:Object(d.jsx)(D,{placeholder:p("Long Card Number"),action:"long_card_number",dataTitle:"long_card_number",success:!0})})}),Object(d.jsx)(r.a,{children:Object(d.jsx)(o.a,{className:"col-12",children:Object(d.jsx)(D,{placeholder:p("Card Holder Name"),action:"card_holder_name",dataTitle:"card_holder_name",success:!0})})}),Object(d.jsxs)(r.a,{children:[Object(d.jsx)(o.a,{className:"col-6",children:Object(d.jsx)(D,{placeholder:p("Expiry Date"),action:"expiry_date",dataTitle:"expiry_date",success:!0})}),Object(d.jsxs)(o.a,{className:"col-6",children:[Object(d.jsx)(D,{placeholder:p("CVV"),action:"cvv",dataTitle:"cvv",success:!0}),Object(d.jsx)("span",{children:p("Where is this?")})]})]}),Object(d.jsx)(r.a,{children:Object(d.jsx)(o.a,{className:"col-md-8 offset-md-2",children:Object(d.jsx)("button",{type:"button",name:"confirm",className:"btn btn--primary btn--block checkout__btn i-show-loading","data-cy":"confirm-and-pay-btn",onClick:function(){return a()},children:p("Confirm and Pay")})})}),Object(d.jsx)(H,{title:p("Marketting opt in checkbox "),onClick:function(){return console.log("marketting selected")},desc:p("Please select to opt in to marketting notifications"),selected:!1}),Object(d.jsx)(R,{options:t})]})},K=function(e){var t=e.save,a=e.state,i=e.setStep,c=e.step,s=a.checkoutStage,n=a.paymentOptions,l=s.csrf_token,r=function(e){console.log("Form Submit: ",e);var t={},a=Object.keys(e.sections).map((function(a){var i=e.sections[a];return Object.keys(i).forEach((function(e){return t[i[e].action]=i[e].value})),t}));console.log(a)};return Object(d.jsx)(x.a,{className:"checkout__stage",children:Object(d.jsx)(x.a,{className:"container-fluid",children:Object(d.jsxs)("form",{method:"POST","data-static-csrf":"true",onSubmit:r,children:[Object(d.jsx)("input",{type:"hidden",name:"_token",value:l}),1===c?Object(d.jsx)(T,{state:a,setStep:i,save:t}):Object(d.jsx)(I,{paymentOptions:n,onPay:function(){return r(a)}})]})})})},L={sections:{"Your Details":{email_address:{title:"email_address",action:"email_address",value:"chris.clarke@internetfusion.co.uk"},delivery_first_name:{title:"delivery_first_name",action:"delivery_first_name",value:"Chris"},delivery_last_name:{title:"delivery_last_name",action:"delivery_last_name",value:"Clarke"}},"Delivery Details":{delivery_telephone:{title:"delivery_telephone",action:"delivery_telephone",value:"729947"},delivery_country:{title:"delivery_country",action:"delivery_country",value:"UK"},delivery_search:{title:"delivery_search",action:"delivery_search",value:"N1 5DS"},delivery_address_1:{title:"delivery_address_1",action:"delivery_address_1",value:"Flat 1-3"},delivery_address_2:{title:"delivery_address_2",action:"delivery_address_2",value:"70 Bridport Place"},delivery_city:{title:"delivery_city",action:"delivery_city",value:"London"},delivery_postcode:{title:"delivery_postcode",action:"delivery_postcode",value:"N1 5DS"}},"Billing Address":{billing_same_as_delivery:{type:"checkbox",title:"billing_same_as_delivery",action:"billing_same_as_delivery",value:"on"},billing_first_name:{title:"billing_first_name",action:"billing_first_name",value:"Chris"},billing_last_name:{title:"billing_last_name",action:"billing_last_name",value:"Clarke"},billing_telephone:{title:"billing_telephone",action:"billing_telephone",value:"729947"},billing_country:{title:"billing_country",action:"billing_country",value:"UK"},billing_search:{title:"billing_search",action:"billing_search",value:"N1 5DS"},billing_address_1:{title:"billing_address_1",action:"billing_address_1",value:"Flat 1-3"},billing_address_2:{title:"billing_address_2",action:"billing_address_2",value:"70 Bridport Place"},billing_city:{title:"billing_city",action:"billing_city",value:"London"},billing_postcode:{title:"billing_postcode",action:"billing_postcode",value:"N1 5DS"},deliveryMethod:{type:"checkbox",title:"deliveryMethod",action:"deliveryMethod",value:"on"}}},isSummaryHidden:!1,selectedAddress:void 0,checkoutStage:{isSameAsDelivery:!0,csrf_token:"f1MGpPtHA25TVxvQ6Rm9u79xgrewdB64Tg3OKYVi",fasterOptions:[{id:"11",title:p("Super 1st Class Delivery"),desc:p("Est. Delivery 12th March"),price:"\xa3Price"},{id:"12",title:p("Ultra 2nd Class Delivery"),desc:p("Est. Delivery 13th March"),price:"\xa3Price"}],greenerOptions:[{id:"21",title:p("Sunshine 1st Class Delivery"),desc:p("Est. Delivery 12th March"),price:"\xa3Price"},{id:"22",title:p("Breeze 2nd Class Delivery"),desc:p("Est. Delivery 13th March"),price:"\xa3Price"}]},yourDetails:{postcode:"CB12AA",country:"UK",first_name:"Jon",surname:"Smith",email_address:"jon@smith.com",address:"My house",address_line_2:"My street",phone_number:"01234567890",addresses:[{id:1,title:"Jon Smith",desc:"123 Lavendar Hill",address_line_2:"best house",postcode:"AA1 9ZZ"},{id:2,title:"Jane Smith",desc:"124 Rosemary Close",address_line_2:"smart flat",postcode:"BB2 8YY"}]},paymentOptions:[{id:1,onClick:function(){console.log("klarna")},title:"Klarna",desc:p("Split the bill with Klarna"),selected:!1},{id:2,onClick:function(){console.log("paypal")},title:"paypal",desc:p("The easiest way to spend money"),selected:!1}],step:1,checkoutSummary:{summary:{price:63.95,step:"1/2"},items:[{id:1,price:"63.95",title:"Roxy Kashmir Womens Ski Helmet",type:"Bright White",size:"Medium / 57 - 58 cm",qty:"1"},{id:2,price:"13.95",title:"Roxy Kashmir Womens Ski Helmet",type:"Bright White",size:"Medium / 57 - 58 cm",qty:"9"}]}},z=function(){var e=Object(i.useState)(L),t=Object(l.a)(e,2),a=t[0],c=t[1],s=Object(i.useState)(a.step),n=Object(l.a)(s,2),r=n[0],o=n[1],u=a.checkoutStage,b=a.yourDetails,h=a.checkoutSummary,m=a.paymentOptions;return Object(i.useEffect)((function(){}),[u,b,h,m,r]),Object(d.jsxs)("div",{className:"checkout",children:[Object(d.jsx)(j,{}),Object(d.jsx)(N,{state:a,setStep:o,step:r}),Object(d.jsx)(K,{state:a,save:c,setStep:o,step:r})]})},U=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(z,{})})},G=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,27)).then((function(t){var a=t.getCLS,i=t.getFID,c=t.getFCP,s=t.getLCP,n=t.getTTFB;a(e),i(e),c(e),s(e),n(e)}))};n.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(U,{})}),document.getElementById("root")),G()}},[[23,1,2]]]);
//# sourceMappingURL=main.49beaefe.chunk.js.map