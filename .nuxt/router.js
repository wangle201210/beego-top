import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _488c6e16 = () => interopDefault(import('../pages/_slug/index.vue' /* webpackChunkName: "pages/[_]slug/index" */))
const _65131b68 = () => interopDefault(import('../pages/_slug/docs.vue' /* webpackChunkName: "pages/[_]slug/docs" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/en/:slug",
    component: _488c6e16,
    name: "slug___en"
  }, {
    path: "/en/:slug/docs",
    component: _65131b68,
    name: "slug-docs___en"
  }, {
    path: "/:slug",
    component: _488c6e16,
    name: "slug___ch"
  }, {
    path: "/:slug/docs",
    component: _65131b68,
    name: "slug-docs___ch"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
