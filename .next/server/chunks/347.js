"use strict";
exports.id = 347;
exports.ids = [347];
exports.modules = {

/***/ 347:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "LE": () => (/* reexport */ components_FooterBanner),
  "yo": () => (/* reexport */ components_HeroBanner),
  "Ar": () => (/* reexport */ components_Layout),
  "xs": () => (/* reexport */ components_Product)
});

// UNUSED EXPORTS: Cart, Footer, NavBar

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: ./components/Cart.jsx


const Cart = () => {
  return /*#__PURE__*/React.createElement("div", null, "Cart");
};

/* harmony default export */ const components_Cart = ((/* unused pure expression or super */ null && (Cart)));
// EXTERNAL MODULE: external "react-icons/ai"
var ai_ = __webpack_require__(847);
;// CONCATENATED MODULE: ./components/Footer.jsx



const Footer = () => {
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: "footer-container"
  }, /*#__PURE__*/external_react_default().createElement("p", null, "2023 Elysium All rights reserved"), /*#__PURE__*/external_react_default().createElement("p", {
    className: "icons"
  }, /*#__PURE__*/external_react_default().createElement(ai_.AiFillInstagram, null), /*#__PURE__*/external_react_default().createElement(ai_.AiOutlineTwitter, null)));
};

/* harmony default export */ const components_Footer = (Footer);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
// EXTERNAL MODULE: ./lib/client.js
var client = __webpack_require__(130);
;// CONCATENATED MODULE: ./components/FooterBanner.jsx




const FooterBanner = ({
  footerBanner: {
    discount,
    largeText1,
    largeText2,
    saleTime,
    smallText,
    midText,
    product,
    buttonText,
    image,
    desc
  }
}) => {
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: "footer-banner-container"
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "banner-desc"
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "left"
  }, /*#__PURE__*/external_react_default().createElement("p", null, discount), /*#__PURE__*/external_react_default().createElement("h3", null, largeText1), /*#__PURE__*/external_react_default().createElement("h3", null, largeText2), /*#__PURE__*/external_react_default().createElement("p", null, saleTime)), /*#__PURE__*/external_react_default().createElement("div", {
    className: "right"
  }, /*#__PURE__*/external_react_default().createElement("p", null, smallText, " "), /*#__PURE__*/external_react_default().createElement("h3", null, midText), /*#__PURE__*/external_react_default().createElement("p", null, desc), /*#__PURE__*/external_react_default().createElement(next_link["default"], {
    href: `product/${product}`
  }, /*#__PURE__*/external_react_default().createElement("button", {
    type: "button"
  }, buttonText))), /*#__PURE__*/external_react_default().createElement("img", {
    src: (0,client/* urlFor */.u)(image),
    className: "footer-banner-image",
    alt: ""
  })));
};

/* harmony default export */ const components_FooterBanner = (FooterBanner);
;// CONCATENATED MODULE: ./components/HeroBanner.jsx




const HeroBanner = ({
  heroBanner
}) => {
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: "hero-banner-container"
  }, /*#__PURE__*/external_react_default().createElement("div", null, /*#__PURE__*/external_react_default().createElement("p", {
    className: "beats-solo"
  }, heroBanner.smallText), /*#__PURE__*/external_react_default().createElement("h3", null, heroBanner.midText), /*#__PURE__*/external_react_default().createElement("h1", null, heroBanner.largeText1), /*#__PURE__*/external_react_default().createElement("img", {
    src: (0,client/* urlFor */.u)(heroBanner.image),
    alt: "headphones",
    className: "hero-banner-image"
  }), /*#__PURE__*/external_react_default().createElement("div", null, /*#__PURE__*/external_react_default().createElement(next_link["default"], {
    href: `/product/${heroBanner.product}`
  }, /*#__PURE__*/external_react_default().createElement("button", {
    type: "button"
  }, heroBanner.buttonText)), /*#__PURE__*/external_react_default().createElement("div", {
    className: "desc"
  }, /*#__PURE__*/external_react_default().createElement("h5", null, "Description"), /*#__PURE__*/external_react_default().createElement("p", null, heroBanner.desc)))));
};

/* harmony default export */ const components_HeroBanner = (HeroBanner);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./components/NavBar.jsx




const NavBar = () => {
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: "navbar-container"
  }, /*#__PURE__*/external_react_default().createElement("p", {
    className: "logo"
  }, /*#__PURE__*/external_react_default().createElement(next_link["default"], {
    href: "/"
  }, "Elysium")), /*#__PURE__*/external_react_default().createElement("button", {
    type: "button",
    className: "cart-icon",
    onClick: ""
  }, /*#__PURE__*/external_react_default().createElement(ai_.AiOutlineShopping, null), /*#__PURE__*/external_react_default().createElement("span", {
    className: "cart-item-qty"
  }, "1")));
};

/* harmony default export */ const components_NavBar = (NavBar);
;// CONCATENATED MODULE: ./components/Layout.jsx





const Layout = props => {
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: "layout"
  }, /*#__PURE__*/external_react_default().createElement((head_default()), null, /*#__PURE__*/external_react_default().createElement("title", null, "React Ecommerce")), /*#__PURE__*/external_react_default().createElement("header", null, /*#__PURE__*/external_react_default().createElement(components_NavBar, null)), /*#__PURE__*/external_react_default().createElement("main", {
    className: "main-container"
  }, props.children), /*#__PURE__*/external_react_default().createElement("footer", null, /*#__PURE__*/external_react_default().createElement(components_Footer, null)));
};

/* harmony default export */ const components_Layout = (Layout);
;// CONCATENATED MODULE: ./components/Product.jsx




const Product = ({
  product: {
    image,
    name,
    slug,
    price
  }
}) => {
  return /*#__PURE__*/external_react_default().createElement("div", null, /*#__PURE__*/external_react_default().createElement(next_link["default"], {
    href: `/product/${slug.current}`
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "product-card"
  }, /*#__PURE__*/external_react_default().createElement("img", {
    src: (0,client/* urlFor */.u)(image && image[0]),
    width: 250,
    height: 250,
    className: "product-image",
    alt: ""
  }), /*#__PURE__*/external_react_default().createElement("p", {
    className: "product-name"
  }, " ", name, " "), /*#__PURE__*/external_react_default().createElement("p", {
    className: "product-price"
  }, " $", price, " "))));
};

/* harmony default export */ const components_Product = (Product);
;// CONCATENATED MODULE: ./components/index.js








/***/ }),

/***/ 130:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ client),
/* harmony export */   "u": () => (/* binding */ urlFor)
/* harmony export */ });
/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97);
/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sanity_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(791);
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_1__);


const client = _sanity_client__WEBPACK_IMPORTED_MODULE_0___default()({
  projectId: "47fvtobu",
  dataset: "production",
  apiVersion: "2023-03-24",
  useCdn: true,
  token: "skf1dHrr24aO7CDtr7nxrX6YYtF9Rplz2tpC9ScIIKogXuRtS4H9BO1clDG02Kd6E0oPd8YJeIkkfIBnIKnphf6Ir6h63gAgX5SVfbwAfD8O242JWwP87reYRbMUfwGFLNMLCdO7JqS2rlCZ2gtNwzoblQ3HYNdm9rLuIO1B6ZoBIjGCMl0k"
});
const builder = _sanity_image_url__WEBPACK_IMPORTED_MODULE_1___default()(client);
const urlFor = source => builder.image(source);

/***/ })

};
;