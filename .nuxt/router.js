import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _24726f9c = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages_about" */))
const _1de0537a = () => interopDefault(import('..\\pages\\wone.vue' /* webpackChunkName: "pages_wone" */))
const _0d7ea2f7 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

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
    path: "/about",
    component: _24726f9c,
    name: "about"
  }, {
    path: "/wone",
    component: _1de0537a,
    name: "wone"
  }, {
    path: "/",
    component: _0d7ea2f7,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
