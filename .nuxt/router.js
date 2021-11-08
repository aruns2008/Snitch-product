import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _47d1c86e = () => interopDefault(import('..\\pages\\Category.vue' /* webpackChunkName: "pages/Category" */))
const _31c574c0 = () => interopDefault(import('..\\pages\\Checkout.vue' /* webpackChunkName: "" */))
const _c8d17ec2 = () => interopDefault(import('..\\pages\\Checkout\\Billing.vue' /* webpackChunkName: "" */))
const _3a4692aa = () => interopDefault(import('..\\pages\\Checkout\\Payment.vue' /* webpackChunkName: "" */))
const _170b09ba = () => interopDefault(import('..\\pages\\Checkout\\Shipping.vue' /* webpackChunkName: "" */))
const _0098d561 = () => interopDefault(import('..\\pages\\Checkout\\ThankYou.vue' /* webpackChunkName: "" */))
const _f4ce1694 = () => interopDefault(import('..\\pages\\Checkout.vue' /* webpackChunkName: "pages/Checkout" */))
const _0049cb95 = () => interopDefault(import('..\\pages\\Checkout\\Billing.vue' /* webpackChunkName: "pages/Checkout/Billing" */))
const _c20dc4c0 = () => interopDefault(import('..\\pages\\Checkout\\Payment.vue' /* webpackChunkName: "pages/Checkout/Payment" */))
const _48a9dd84 = () => interopDefault(import('..\\pages\\Checkout\\Shipping.vue' /* webpackChunkName: "pages/Checkout/Shipping" */))
const _3237a92b = () => interopDefault(import('..\\pages\\Checkout\\ThankYou.vue' /* webpackChunkName: "pages/Checkout/ThankYou" */))
const _6e1ea4c4 = () => interopDefault(import('..\\pages\\ContactUs.vue' /* webpackChunkName: "pages/ContactUs" */))
const _4f1bac8e = () => interopDefault(import('..\\pages\\Home.vue' /* webpackChunkName: "" */))
const _7f1cd3cf = () => interopDefault(import('..\\pages\\Home.vue' /* webpackChunkName: "pages/Home" */))
const _689fe821 = () => interopDefault(import('..\\pages\\MyAccount.vue' /* webpackChunkName: "pages/MyAccount" */))
const _f4c73580 = () => interopDefault(import('..\\pages\\MyAccount\\AdressBook.vue' /* webpackChunkName: "pages/MyAccount/AdressBook" */))
const _a7c34cf0 = () => interopDefault(import('..\\pages\\MyAccount\\BillingDetails.vue' /* webpackChunkName: "pages/MyAccount/BillingDetails" */))
const _31efb585 = () => interopDefault(import('..\\pages\\MyAccount\\LoyaltyCard.vue' /* webpackChunkName: "pages/MyAccount/LoyaltyCard" */))
const _67e4d106 = () => interopDefault(import('..\\pages\\MyAccount\\MyNewsletter.vue' /* webpackChunkName: "pages/MyAccount/MyNewsletter" */))
const _4203d5ac = () => interopDefault(import('..\\pages\\MyAccount\\MyProfile.vue' /* webpackChunkName: "pages/MyAccount/MyProfile" */))
const _ecf291c4 = () => interopDefault(import('..\\pages\\MyAccount\\MyReviews.vue' /* webpackChunkName: "pages/MyAccount/MyReviews" */))
const _4329f267 = () => interopDefault(import('..\\pages\\MyAccount\\OrderHistory.vue' /* webpackChunkName: "pages/MyAccount/OrderHistory" */))
const _f0ef817a = () => interopDefault(import('..\\pages\\MyAccount\\ShippingDetails.vue' /* webpackChunkName: "pages/MyAccount/ShippingDetails" */))
const _0b9f0d2f = () => interopDefault(import('..\\pages\\Product.vue' /* webpackChunkName: "pages/Product" */))
const _9fe729c0 = () => interopDefault(import('..\\pages\\ResetPassword.vue' /* webpackChunkName: "" */))
const _a7de8c6c = () => interopDefault(import('..\\pages\\ResetPassword.vue' /* webpackChunkName: "pages/ResetPassword" */))
const _37a5b477 = () => interopDefault(import('..\\pages\\MyAccount.vue' /* webpackChunkName: "" */))
const _459011f6 = () => interopDefault(import('..\\pages\\Product.vue' /* webpackChunkName: "" */))
const _ad53cd50 = () => interopDefault(import('..\\pages\\Category.vue' /* webpackChunkName: "" */))

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
    component: _47d1c86e,
    name: "Category___en"
  }, {
    path: "/checkout",
    component: _31c574c0,
    name: "checkout___en",
    children: [{
      path: "billing",
      component: _c8d17ec2,
      name: "billing___en"
    }, {
      path: "payment",
      component: _3a4692aa,
      name: "payment___en"
    }, {
      path: "shipping",
      component: _170b09ba,
      name: "shipping___en"
    }, {
      path: "thank-you",
      component: _0098d561,
      name: "thank-you___en"
    }]
  }, {
    path: "/Checkout",
    component: _f4ce1694,
    name: "Checkout___en",
    children: [{
      path: "Billing",
      component: _0049cb95,
      name: "Checkout-Billing___en"
    }, {
      path: "Payment",
      component: _c20dc4c0,
      name: "Checkout-Payment___en"
    }, {
      path: "Shipping",
      component: _48a9dd84,
      name: "Checkout-Shipping___en"
    }, {
      path: "ThankYou",
      component: _3237a92b,
      name: "Checkout-ThankYou___en"
    }]
  }, {
    path: "/ContactUs",
    component: _6e1ea4c4,
    name: "ContactUs___en"
  }, {
    path: "/de",
    component: _4f1bac8e,
    name: "home___de"
  }, {
    path: "/Home",
    component: _7f1cd3cf,
    name: "Home___en"
  }, {
    path: "/MyAccount",
    component: _689fe821,
    name: "MyAccount___en",
    children: [{
      path: "AdressBook",
      component: _f4c73580,
      name: "MyAccount-AdressBook___en"
    }, {
      path: "BillingDetails",
      component: _a7c34cf0,
      name: "MyAccount-BillingDetails___en"
    }, {
      path: "LoyaltyCard",
      component: _31efb585,
      name: "MyAccount-LoyaltyCard___en"
    }, {
      path: "MyNewsletter",
      component: _67e4d106,
      name: "MyAccount-MyNewsletter___en"
    }, {
      path: "MyProfile",
      component: _4203d5ac,
      name: "MyAccount-MyProfile___en"
    }, {
      path: "MyReviews",
      component: _ecf291c4,
      name: "MyAccount-MyReviews___en"
    }, {
      path: "OrderHistory",
      component: _4329f267,
      name: "MyAccount-OrderHistory___en"
    }, {
      path: "ShippingDetails",
      component: _f0ef817a,
      name: "MyAccount-ShippingDetails___en"
    }]
  }, {
    path: "/Product",
    component: _0b9f0d2f,
    name: "Product___en"
  }, {
    path: "/reset-password",
    component: _9fe729c0,
    name: "reset-password___en"
  }, {
    path: "/ResetPassword",
    component: _a7de8c6c,
    name: "ResetPassword___en"
  }, {
    path: "/de/Category",
    component: _47d1c86e,
    name: "Category___de"
  }, {
    path: "/de/checkout",
    component: _31c574c0,
    name: "checkout___de",
    children: [{
      path: "billing",
      component: _c8d17ec2,
      name: "billing___de"
    }, {
      path: "payment",
      component: _3a4692aa,
      name: "payment___de"
    }, {
      path: "shipping",
      component: _170b09ba,
      name: "shipping___de"
    }, {
      path: "thank-you",
      component: _0098d561,
      name: "thank-you___de"
    }]
  }, {
    path: "/de/Checkout",
    component: _f4ce1694,
    name: "Checkout___de",
    children: [{
      path: "Billing",
      component: _0049cb95,
      name: "Checkout-Billing___de"
    }, {
      path: "Payment",
      component: _c20dc4c0,
      name: "Checkout-Payment___de"
    }, {
      path: "Shipping",
      component: _48a9dd84,
      name: "Checkout-Shipping___de"
    }, {
      path: "ThankYou",
      component: _3237a92b,
      name: "Checkout-ThankYou___de"
    }]
  }, {
    path: "/de/ContactUs",
    component: _6e1ea4c4,
    name: "ContactUs___de"
  }, {
    path: "/de/Home",
    component: _7f1cd3cf,
    name: "Home___de"
  }, {
    path: "/de/MyAccount",
    component: _689fe821,
    name: "MyAccount___de",
    children: [{
      path: "AdressBook",
      component: _f4c73580,
      name: "MyAccount-AdressBook___de"
    }, {
      path: "BillingDetails",
      component: _a7c34cf0,
      name: "MyAccount-BillingDetails___de"
    }, {
      path: "LoyaltyCard",
      component: _31efb585,
      name: "MyAccount-LoyaltyCard___de"
    }, {
      path: "MyNewsletter",
      component: _67e4d106,
      name: "MyAccount-MyNewsletter___de"
    }, {
      path: "MyProfile",
      component: _4203d5ac,
      name: "MyAccount-MyProfile___de"
    }, {
      path: "MyReviews",
      component: _ecf291c4,
      name: "MyAccount-MyReviews___de"
    }, {
      path: "OrderHistory",
      component: _4329f267,
      name: "MyAccount-OrderHistory___de"
    }, {
      path: "ShippingDetails",
      component: _f0ef817a,
      name: "MyAccount-ShippingDetails___de"
    }]
  }, {
    path: "/de/Product",
    component: _0b9f0d2f,
    name: "Product___de"
  }, {
    path: "/de/reset-password",
    component: _9fe729c0,
    name: "reset-password___de"
  }, {
    path: "/de/ResetPassword",
    component: _a7de8c6c,
    name: "ResetPassword___de"
  }, {
    path: "/de/my-account/:pageName?",
    component: _37a5b477,
    name: "my-account___de"
  }, {
    path: "/de/p/:id/:slug",
    component: _459011f6,
    name: "product___de"
  }, {
    path: "/de/c/:slug_1/:slug_2?/:slug_3?/:slug_4?/:slug_5?",
    component: _ad53cd50,
    name: "category___de"
  }, {
    path: "/my-account/:pageName?",
    component: _37a5b477,
    name: "my-account___en"
  }, {
    path: "/p/:id/:slug",
    component: _459011f6,
    name: "product___en"
  }, {
    path: "/c/:slug_1/:slug_2?/:slug_3?/:slug_4?/:slug_5?",
    component: _ad53cd50,
    name: "category___en"
  }, {
    path: "/",
    component: _4f1bac8e,
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
