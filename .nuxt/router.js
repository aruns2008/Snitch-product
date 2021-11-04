import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _028e318e = () => interopDefault(import('..\\pages\\Category.vue' /* webpackChunkName: "pages/Category" */))
const _a5264812 = () => interopDefault(import('..\\pages\\Checkout.vue' /* webpackChunkName: "" */))
const _1f328ff6 = () => interopDefault(import('..\\pages\\Checkout\\Billing.vue' /* webpackChunkName: "" */))
const _843c3bfe = () => interopDefault(import('..\\pages\\Checkout\\Payment.vue' /* webpackChunkName: "" */))
const _06d9a543 = () => interopDefault(import('..\\pages\\Checkout\\Shipping.vue' /* webpackChunkName: "" */))
const _1f311e2c = () => interopDefault(import('..\\pages\\Checkout\\ThankYou.vue' /* webpackChunkName: "" */))
const _3c801381 = () => interopDefault(import('..\\pages\\Checkout.vue' /* webpackChunkName: "pages/Checkout" */))
const _6ec1212a = () => interopDefault(import('..\\pages\\Checkout\\Billing.vue' /* webpackChunkName: "pages/Checkout/Billing" */))
const _0d707335 = () => interopDefault(import('..\\pages\\Checkout\\Payment.vue' /* webpackChunkName: "pages/Checkout/Payment" */))
const _adc58ae2 = () => interopDefault(import('..\\pages\\Checkout\\Shipping.vue' /* webpackChunkName: "pages/Checkout/Shipping" */))
const _daa9f394 = () => interopDefault(import('..\\pages\\Checkout\\ThankYou.vue' /* webpackChunkName: "pages/Checkout/ThankYou" */))
const _22252f9a = () => interopDefault(import('..\\pages\\ContactUs.vue' /* webpackChunkName: "pages/ContactUs" */))
const _03c08390 = () => interopDefault(import('..\\pages\\Home.vue' /* webpackChunkName: "" */))
const _2661101a = () => interopDefault(import('..\\pages\\Home.vue' /* webpackChunkName: "pages/Home" */))
const _e2c6ba94 = () => interopDefault(import('..\\pages\\MyAccount.vue' /* webpackChunkName: "pages/MyAccount" */))
const _d2d62f56 = () => interopDefault(import('..\\pages\\MyAccount\\AdressBook.vue' /* webpackChunkName: "pages/MyAccount/AdressBook" */))
const _8f756bc6 = () => interopDefault(import('..\\pages\\MyAccount\\BillingDetails.vue' /* webpackChunkName: "pages/MyAccount/BillingDetails" */))
const _40079510 = () => interopDefault(import('..\\pages\\MyAccount\\LoyaltyCard.vue' /* webpackChunkName: "pages/MyAccount/LoyaltyCard" */))
const _1cc8e2db = () => interopDefault(import('..\\pages\\MyAccount\\MyNewsletter.vue' /* webpackChunkName: "pages/MyAccount/MyNewsletter" */))
const _53141bf7 = () => interopDefault(import('..\\pages\\MyAccount\\MyProfile.vue' /* webpackChunkName: "pages/MyAccount/MyProfile" */))
const _cad2052e = () => interopDefault(import('..\\pages\\MyAccount\\MyReviews.vue' /* webpackChunkName: "pages/MyAccount/MyReviews" */))
const _0fe3f788 = () => interopDefault(import('..\\pages\\MyAccount\\OrderHistory.vue' /* webpackChunkName: "pages/MyAccount/OrderHistory" */))
const _003f614e = () => interopDefault(import('..\\pages\\MyAccount\\ShippingDetails.vue' /* webpackChunkName: "pages/MyAccount/ShippingDetails" */))
const _09436904 = () => interopDefault(import('..\\pages\\Product.vue' /* webpackChunkName: "pages/Product" */))
const _0e803329 = () => interopDefault(import('..\\pages\\ResetPassword.vue' /* webpackChunkName: "" */))
const _8d57bc42 = () => interopDefault(import('..\\pages\\ResetPassword.vue' /* webpackChunkName: "pages/ResetPassword" */))
const _3b48e900 = () => interopDefault(import('..\\pages\\MyAccount.vue' /* webpackChunkName: "" */))
const _7000b9ce = () => interopDefault(import('..\\pages\\Product.vue' /* webpackChunkName: "" */))
const _6fa5afaf = () => interopDefault(import('..\\pages\\Category.vue' /* webpackChunkName: "" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/Category",
    component: _028e318e,
    name: "Category___en"
  }, {
    path: "/checkout",
    component: _a5264812,
    name: "checkout___en",
    children: [{
      path: "billing",
      component: _1f328ff6,
      name: "billing___en"
    }, {
      path: "payment",
      component: _843c3bfe,
      name: "payment___en"
    }, {
      path: "shipping",
      component: _06d9a543,
      name: "shipping___en"
    }, {
      path: "thank-you",
      component: _1f311e2c,
      name: "thank-you___en"
    }]
  }, {
    path: "/Checkout",
    component: _3c801381,
    name: "Checkout___en",
    children: [{
      path: "Billing",
      component: _6ec1212a,
      name: "Checkout-Billing___en"
    }, {
      path: "Payment",
      component: _0d707335,
      name: "Checkout-Payment___en"
    }, {
      path: "Shipping",
      component: _adc58ae2,
      name: "Checkout-Shipping___en"
    }, {
      path: "ThankYou",
      component: _daa9f394,
      name: "Checkout-ThankYou___en"
    }]
  }, {
    path: "/ContactUs",
    component: _22252f9a,
    name: "ContactUs___en"
  }, {
    path: "/de",
    component: _03c08390,
    name: "home___de"
  }, {
    path: "/Home",
    component: _2661101a,
    name: "Home___en"
  }, {
    path: "/MyAccount",
    component: _e2c6ba94,
    name: "MyAccount___en",
    children: [{
      path: "AdressBook",
      component: _d2d62f56,
      name: "MyAccount-AdressBook___en"
    }, {
      path: "BillingDetails",
      component: _8f756bc6,
      name: "MyAccount-BillingDetails___en"
    }, {
      path: "LoyaltyCard",
      component: _40079510,
      name: "MyAccount-LoyaltyCard___en"
    }, {
      path: "MyNewsletter",
      component: _1cc8e2db,
      name: "MyAccount-MyNewsletter___en"
    }, {
      path: "MyProfile",
      component: _53141bf7,
      name: "MyAccount-MyProfile___en"
    }, {
      path: "MyReviews",
      component: _cad2052e,
      name: "MyAccount-MyReviews___en"
    }, {
      path: "OrderHistory",
      component: _0fe3f788,
      name: "MyAccount-OrderHistory___en"
    }, {
      path: "ShippingDetails",
      component: _003f614e,
      name: "MyAccount-ShippingDetails___en"
    }]
  }, {
    path: "/Product",
    component: _09436904,
    name: "Product___en"
  }, {
    path: "/reset-password",
    component: _0e803329,
    name: "reset-password___en"
  }, {
    path: "/ResetPassword",
    component: _8d57bc42,
    name: "ResetPassword___en"
  }, {
    path: "/de/Category",
    component: _028e318e,
    name: "Category___de"
  }, {
    path: "/de/checkout",
    component: _a5264812,
    name: "checkout___de",
    children: [{
      path: "billing",
      component: _1f328ff6,
      name: "billing___de"
    }, {
      path: "payment",
      component: _843c3bfe,
      name: "payment___de"
    }, {
      path: "shipping",
      component: _06d9a543,
      name: "shipping___de"
    }, {
      path: "thank-you",
      component: _1f311e2c,
      name: "thank-you___de"
    }]
  }, {
    path: "/de/Checkout",
    component: _3c801381,
    name: "Checkout___de",
    children: [{
      path: "Billing",
      component: _6ec1212a,
      name: "Checkout-Billing___de"
    }, {
      path: "Payment",
      component: _0d707335,
      name: "Checkout-Payment___de"
    }, {
      path: "Shipping",
      component: _adc58ae2,
      name: "Checkout-Shipping___de"
    }, {
      path: "ThankYou",
      component: _daa9f394,
      name: "Checkout-ThankYou___de"
    }]
  }, {
    path: "/de/ContactUs",
    component: _22252f9a,
    name: "ContactUs___de"
  }, {
    path: "/de/Home",
    component: _2661101a,
    name: "Home___de"
  }, {
    path: "/de/MyAccount",
    component: _e2c6ba94,
    name: "MyAccount___de",
    children: [{
      path: "AdressBook",
      component: _d2d62f56,
      name: "MyAccount-AdressBook___de"
    }, {
      path: "BillingDetails",
      component: _8f756bc6,
      name: "MyAccount-BillingDetails___de"
    }, {
      path: "LoyaltyCard",
      component: _40079510,
      name: "MyAccount-LoyaltyCard___de"
    }, {
      path: "MyNewsletter",
      component: _1cc8e2db,
      name: "MyAccount-MyNewsletter___de"
    }, {
      path: "MyProfile",
      component: _53141bf7,
      name: "MyAccount-MyProfile___de"
    }, {
      path: "MyReviews",
      component: _cad2052e,
      name: "MyAccount-MyReviews___de"
    }, {
      path: "OrderHistory",
      component: _0fe3f788,
      name: "MyAccount-OrderHistory___de"
    }, {
      path: "ShippingDetails",
      component: _003f614e,
      name: "MyAccount-ShippingDetails___de"
    }]
  }, {
    path: "/de/Product",
    component: _09436904,
    name: "Product___de"
  }, {
    path: "/de/reset-password",
    component: _0e803329,
    name: "reset-password___de"
  }, {
    path: "/de/ResetPassword",
    component: _8d57bc42,
    name: "ResetPassword___de"
  }, {
    path: "/de/my-account/:pageName?",
    component: _3b48e900,
    name: "my-account___de"
  }, {
    path: "/de/p/:id/:slug",
    component: _7000b9ce,
    name: "product___de"
  }, {
    path: "/de/c/:slug_1/:slug_2?/:slug_3?/:slug_4?/:slug_5?",
    component: _6fa5afaf,
    name: "category___de"
  }, {
    path: "/my-account/:pageName?",
    component: _3b48e900,
    name: "my-account___en"
  }, {
    path: "/p/:id/:slug",
    component: _7000b9ce,
    name: "product___en"
  }, {
    path: "/c/:slug_1/:slug_2?/:slug_3?/:slug_4?/:slug_5?",
    component: _6fa5afaf,
    name: "category___en"
  }, {
    path: "/",
    component: _03c08390,
    name: "home___en"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
