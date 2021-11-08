import Vue from 'vue'

import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from '..\\layouts\\error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'

/* Plugins */

import nuxt_plugin_vuescrollto_c0a8c09a from 'nuxt_plugin_vuescrollto_c0a8c09a' // Source: .\\vue-scrollto.js (mode: 'client')
import nuxt_plugin_cookieuniversalnuxt_2d12453e from 'nuxt_plugin_cookieuniversalnuxt_2d12453e' // Source: .\\cookie-universal-nuxt.js (mode: 'all')
import nuxt_plugin_pluginutils_25667b98 from 'nuxt_plugin_pluginutils_25667b98' // Source: .\\nuxt-i18n\\plugin.utils.js (mode: 'all')
import nuxt_plugin_pluginseo_dd7f1628 from 'nuxt_plugin_pluginseo_dd7f1628' // Source: .\\nuxt-i18n\\plugin.seo.js (mode: 'all')
import nuxt_plugin_pluginrouting_1bb682e3 from 'nuxt_plugin_pluginrouting_1bb682e3' // Source: .\\nuxt-i18n\\plugin.routing.js (mode: 'all')
import nuxt_plugin_pluginmain_525d0b6c from 'nuxt_plugin_pluginmain_525d0b6c' // Source: .\\nuxt-i18n\\plugin.main.js (mode: 'all')
import nuxt_plugin_nuxtplugin5c909854_3dce8b4f from 'nuxt_plugin_nuxtplugin5c909854_3dce8b4f' // Source: .\\nuxt.plugin.5c909854.js (mode: 'all')
import nuxt_plugin_plugin_893b1eec from 'nuxt_plugin_plugin_893b1eec' // Source: .\\composition-api\\plugin.js (mode: 'all')
import nuxt_plugin_pluginsi18ncookiese8b63dc0_28c85532 from 'nuxt_plugin_pluginsi18ncookiese8b63dc0_28c85532' // Source: .\\plugins.i18n-cookies.e8b63dc0.js (mode: 'all')
import nuxt_plugin_pluginse2etesting4fdba1da_5eb91f64 from 'nuxt_plugin_pluginse2etesting4fdba1da_5eb91f64' // Source: .\\plugins.e2e-testing.4fdba1da.js (mode: 'all')
import nuxt_plugin_pluginslogger623c6a30_4183f0e8 from 'nuxt_plugin_pluginslogger623c6a30_4183f0e8' // Source: .\\plugins.logger.623c6a30.js (mode: 'all')
import nuxt_plugin_pluginsssr3a7e577c_352ed064 from 'nuxt_plugin_pluginsssr3a7e577c_352ed064' // Source: .\\plugins.ssr.3a7e577c.js (mode: 'all')
import nuxt_plugin_pluginscontext53eec982_108cd1c7 from 'nuxt_plugin_pluginscontext53eec982_108cd1c7' // Source: .\\plugins.context.53eec982.js (mode: 'all')
import nuxt_plugin_workbox_7944f932 from 'nuxt_plugin_workbox_7944f932' // Source: .\\workbox.js (mode: 'client')
import nuxt_plugin_metaplugin_07849bb2 from 'nuxt_plugin_metaplugin_07849bb2' // Source: .\\pwa\\meta.plugin.js (mode: 'all')
import nuxt_plugin_iconplugin_0c2c4126 from 'nuxt_plugin_iconplugin_0c2c4126' // Source: .\\pwa\\icon.plugin.js (mode: 'all')
import nuxt_plugin_scrollToTopclient_6f28b416 from 'nuxt_plugin_scrollToTopclient_6f28b416' // Source: ..\\plugins\\scrollToTop.client.js (mode: 'client')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root.$options.$nuxt
    if (process.client && !globalNuxt && typeof window !== 'undefined') {
      return window.$nuxt
    }
    return globalNuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config)

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"title":"Shopify | Vue Storefront Next","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"name":"theme-color","content":"#5ece7b"},{"hid":"description","name":"description","content":"Vue Storefront 2 template for Shopify."},{"name":"generator","content":"Vue Storefront 2"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"},{"rel":"preconnect","href":"https:\u002F\u002Ffonts.gstatic.com","crossorigin":"crossorigin"},{"rel":"preload","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Raleway:300,400,400i,500,600,700|Roboto:300,300i,400,400i,500,700&display=swap","as":"style"},{"rel":"stylesheet","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Raleway:300,400,400i,500,600,700|Roboto:300,300i,400,400i,500,700&display=swap","media":"print","onload":"this.media='all'"}],"style":[],"script":[]},

    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (process.client && typeof nuxt_plugin_vuescrollto_c0a8c09a === 'function') {
    await nuxt_plugin_vuescrollto_c0a8c09a(app.context, inject)
  }

  if (typeof nuxt_plugin_cookieuniversalnuxt_2d12453e === 'function') {
    await nuxt_plugin_cookieuniversalnuxt_2d12453e(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginutils_25667b98 === 'function') {
    await nuxt_plugin_pluginutils_25667b98(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginseo_dd7f1628 === 'function') {
    await nuxt_plugin_pluginseo_dd7f1628(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginrouting_1bb682e3 === 'function') {
    await nuxt_plugin_pluginrouting_1bb682e3(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginmain_525d0b6c === 'function') {
    await nuxt_plugin_pluginmain_525d0b6c(app.context, inject)
  }

  if (typeof nuxt_plugin_nuxtplugin5c909854_3dce8b4f === 'function') {
    await nuxt_plugin_nuxtplugin5c909854_3dce8b4f(app.context, inject)
  }

  if (typeof nuxt_plugin_plugin_893b1eec === 'function') {
    await nuxt_plugin_plugin_893b1eec(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginsi18ncookiese8b63dc0_28c85532 === 'function') {
    await nuxt_plugin_pluginsi18ncookiese8b63dc0_28c85532(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginse2etesting4fdba1da_5eb91f64 === 'function') {
    await nuxt_plugin_pluginse2etesting4fdba1da_5eb91f64(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginslogger623c6a30_4183f0e8 === 'function') {
    await nuxt_plugin_pluginslogger623c6a30_4183f0e8(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginsssr3a7e577c_352ed064 === 'function') {
    await nuxt_plugin_pluginsssr3a7e577c_352ed064(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginscontext53eec982_108cd1c7 === 'function') {
    await nuxt_plugin_pluginscontext53eec982_108cd1c7(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_workbox_7944f932 === 'function') {
    await nuxt_plugin_workbox_7944f932(app.context, inject)
  }

  if (typeof nuxt_plugin_metaplugin_07849bb2 === 'function') {
    await nuxt_plugin_metaplugin_07849bb2(app.context, inject)
  }

  if (typeof nuxt_plugin_iconplugin_0c2c4126 === 'function') {
    await nuxt_plugin_iconplugin_0c2c4126(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_scrollToTopclient_6f28b416 === 'function') {
    await nuxt_plugin_scrollToTopclient_6f28b416(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // Wait for async component to be resolved first
  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (process.client) {
      const { route } = router.resolve(app.context.route.fullPath)
      if (!route.matched.length) {
        return resolve()
      }
    }
    router.replace(app.context.route.fullPath, resolve, (err) => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err)
      if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

      // navigated to a different route in router guard
      const unregister = router.afterEach(async (to, from) => {
        if (process.server && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath
        }
        app.context.route = await getRouteData(to)
        app.context.params = to.params || {}
        app.context.query = to.query || {}
        unregister()
        resolve()
      })
    })
  })

  return {
    app,
    router
  }
}

export { createApp, NuxtError }
