import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2b57f3dd = () => interopDefault(import('../pages/dashboard/index.vue' /* webpackChunkName: "pages/dashboard/index" */))
const _3ea21858 = () => interopDefault(import('../pages/ems/index.vue' /* webpackChunkName: "pages/ems/index" */))
const _6644215b = () => interopDefault(import('../pages/lms/index.vue' /* webpackChunkName: "pages/lms/index" */))
const _704c3200 = () => interopDefault(import('../pages/dashboard/v1.vue' /* webpackChunkName: "pages/dashboard/v1" */))
const _5ce3d16a = () => interopDefault(import('../pages/ems/create.vue' /* webpackChunkName: "pages/ems/create" */))
const _ec17567a = () => interopDefault(import('../pages/lms/create.vue' /* webpackChunkName: "pages/lms/create" */))
const _8ffd4392 = () => interopDefault(import('../pages/ems/system_presets/countries.vue' /* webpackChunkName: "pages/ems/system_presets/countries" */))
const _a2e3749a = () => interopDefault(import('../pages/ems/system_presets/department_heads.vue' /* webpackChunkName: "pages/ems/system_presets/department_heads" */))
const _937684b8 = () => interopDefault(import('../pages/ems/system_presets/departments.vue' /* webpackChunkName: "pages/ems/system_presets/departments" */))
const _53a0b342 = () => interopDefault(import('../pages/ems/system_presets/designition.vue' /* webpackChunkName: "pages/ems/system_presets/designition" */))
const _793b969a = () => interopDefault(import('../pages/ems/system_presets/employment_types.vue' /* webpackChunkName: "pages/ems/system_presets/employment_types" */))
const _1ae1add6 = () => interopDefault(import('../pages/ems/system_presets/genders.vue' /* webpackChunkName: "pages/ems/system_presets/genders" */))
const _2d94e2ec = () => interopDefault(import('../pages/ems/system_presets/personal_identification_types.vue' /* webpackChunkName: "pages/ems/system_presets/personal_identification_types" */))
const _afdab1c8 = () => interopDefault(import('../pages/ems/system_presets/relationship_status.vue' /* webpackChunkName: "pages/ems/system_presets/relationship_status" */))
const _e96dc788 = () => interopDefault(import('../pages/ems/system_presets/section_heads.vue' /* webpackChunkName: "pages/ems/system_presets/section_heads" */))
const _7cbe357b = () => interopDefault(import('../pages/ems/system_presets/sections.vue' /* webpackChunkName: "pages/ems/system_presets/sections" */))
const _071f112c = () => interopDefault(import('../pages/iam/auth/account.vue' /* webpackChunkName: "pages/iam/auth/account" */))
const _9cb83834 = () => interopDefault(import('../pages/iam/auth/login.vue' /* webpackChunkName: "pages/iam/auth/login" */))
const _7d42f78d = () => interopDefault(import('../pages/lms/system_presets/holiday_lists/index.vue' /* webpackChunkName: "pages/lms/system_presets/holiday_lists/index" */))
const _628f861c = () => interopDefault(import('../pages/lms/system_presets/holidays/index.vue' /* webpackChunkName: "pages/lms/system_presets/holidays/index" */))
const _af87ce60 = () => interopDefault(import('../pages/lms/system_presets/leave_types/index.vue' /* webpackChunkName: "pages/lms/system_presets/leave_types/index" */))
const _52d044d1 = () => interopDefault(import('../pages/lms/system_presets/holiday_lists/create.vue' /* webpackChunkName: "pages/lms/system_presets/holiday_lists/create" */))
const _3003ac0c = () => interopDefault(import('../pages/lms/system_presets/holidays/create.vue' /* webpackChunkName: "pages/lms/system_presets/holidays/create" */))
const _f2096824 = () => interopDefault(import('../pages/lms/system_presets/leave_types/create.vue' /* webpackChunkName: "pages/lms/system_presets/leave_types/create" */))
const _779f866e = () => interopDefault(import('../pages/lms/system_presets/holiday_lists/update/_id.vue' /* webpackChunkName: "pages/lms/system_presets/holiday_lists/update/_id" */))
const _1a52ade5 = () => interopDefault(import('../pages/lms/system_presets/holiday_lists/view/_id.vue' /* webpackChunkName: "pages/lms/system_presets/holiday_lists/view/_id" */))
const _7e978e84 = () => interopDefault(import('../pages/lms/system_presets/holidays/update/_id.vue' /* webpackChunkName: "pages/lms/system_presets/holidays/update/_id" */))
const _78493260 = () => interopDefault(import('../pages/lms/system_presets/holidays/view/_id.vue' /* webpackChunkName: "pages/lms/system_presets/holidays/view/_id" */))
const _4f186d66 = () => interopDefault(import('../pages/lms/system_presets/leave_types/update/_id.vue' /* webpackChunkName: "pages/lms/system_presets/leave_types/update/_id" */))
const _204f3c7c = () => interopDefault(import('../pages/lms/system_presets/leave_types/view/_id.vue' /* webpackChunkName: "pages/lms/system_presets/leave_types/view/_id" */))
const _4a09d4e2 = () => interopDefault(import('../pages/ems/update/_id.vue' /* webpackChunkName: "pages/ems/update/_id" */))
const _24950f84 = () => interopDefault(import('../pages/ems/view/_id.vue' /* webpackChunkName: "pages/ems/view/_id" */))
const _72d3ef18 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/dashboard",
    component: _2b57f3dd,
    name: "dashboard"
  }, {
    path: "/ems",
    component: _3ea21858,
    name: "ems"
  }, {
    path: "/lms",
    component: _6644215b,
    name: "lms"
  }, {
    path: "/dashboard/v1",
    component: _704c3200,
    name: "dashboard-v1"
  }, {
    path: "/ems/create",
    component: _5ce3d16a,
    name: "ems-create"
  }, {
    path: "/lms/create",
    component: _ec17567a,
    name: "lms-create"
  }, {
    path: "/ems/system_presets/countries",
    component: _8ffd4392,
    name: "ems-system_presets-countries"
  }, {
    path: "/ems/system_presets/department_heads",
    component: _a2e3749a,
    name: "ems-system_presets-department_heads"
  }, {
    path: "/ems/system_presets/departments",
    component: _937684b8,
    name: "ems-system_presets-departments"
  }, {
    path: "/ems/system_presets/designition",
    component: _53a0b342,
    name: "ems-system_presets-designition"
  }, {
    path: "/ems/system_presets/employment_types",
    component: _793b969a,
    name: "ems-system_presets-employment_types"
  }, {
    path: "/ems/system_presets/genders",
    component: _1ae1add6,
    name: "ems-system_presets-genders"
  }, {
    path: "/ems/system_presets/personal_identification_types",
    component: _2d94e2ec,
    name: "ems-system_presets-personal_identification_types"
  }, {
    path: "/ems/system_presets/relationship_status",
    component: _afdab1c8,
    name: "ems-system_presets-relationship_status"
  }, {
    path: "/ems/system_presets/section_heads",
    component: _e96dc788,
    name: "ems-system_presets-section_heads"
  }, {
    path: "/ems/system_presets/sections",
    component: _7cbe357b,
    name: "ems-system_presets-sections"
  }, {
    path: "/iam/auth/account",
    component: _071f112c,
    name: "iam-auth-account"
  }, {
    path: "/iam/auth/login",
    component: _9cb83834,
    name: "iam-auth-login"
  }, {
    path: "/lms/system_presets/holiday_lists",
    component: _7d42f78d,
    name: "lms-system_presets-holiday_lists"
  }, {
    path: "/lms/system_presets/holidays",
    component: _628f861c,
    name: "lms-system_presets-holidays"
  }, {
    path: "/lms/system_presets/leave_types",
    component: _af87ce60,
    name: "lms-system_presets-leave_types"
  }, {
    path: "/lms/system_presets/holiday_lists/create",
    component: _52d044d1,
    name: "lms-system_presets-holiday_lists-create"
  }, {
    path: "/lms/system_presets/holidays/create",
    component: _3003ac0c,
    name: "lms-system_presets-holidays-create"
  }, {
    path: "/lms/system_presets/leave_types/create",
    component: _f2096824,
    name: "lms-system_presets-leave_types-create"
  }, {
    path: "/lms/system_presets/holiday_lists/update/:id?",
    component: _779f866e,
    name: "lms-system_presets-holiday_lists-update-id"
  }, {
    path: "/lms/system_presets/holiday_lists/view/:id?",
    component: _1a52ade5,
    name: "lms-system_presets-holiday_lists-view-id"
  }, {
    path: "/lms/system_presets/holidays/update/:id?",
    component: _7e978e84,
    name: "lms-system_presets-holidays-update-id"
  }, {
    path: "/lms/system_presets/holidays/view/:id?",
    component: _78493260,
    name: "lms-system_presets-holidays-view-id"
  }, {
    path: "/lms/system_presets/leave_types/update/:id?",
    component: _4f186d66,
    name: "lms-system_presets-leave_types-update-id"
  }, {
    path: "/lms/system_presets/leave_types/view/:id?",
    component: _204f3c7c,
    name: "lms-system_presets-leave_types-view-id"
  }, {
    path: "/ems/update/:id?",
    component: _4a09d4e2,
    name: "ems-update-id"
  }, {
    path: "/ems/view/:id?",
    component: _24950f84,
    name: "ems-view-id"
  }, {
    path: "/",
    component: _72d3ef18,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config.app && config.app.basePath) || routerOptions.base
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
