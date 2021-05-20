import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _146ecb2d = () => interopDefault(import('../pages/dashboard/index.vue' /* webpackChunkName: "pages/dashboard/index" */))
const _8764f1b8 = () => interopDefault(import('../pages/ems/index.vue' /* webpackChunkName: "pages/ems/index" */))
const _41e2b4ab = () => interopDefault(import('../pages/lms/index.vue' /* webpackChunkName: "pages/lms/index" */))
const _2272d1b0 = () => interopDefault(import('../pages/dashboard/v1.vue' /* webpackChunkName: "pages/dashboard/v1" */))
const _15d0afcc = () => interopDefault(import('../pages/ems/create.vue' /* webpackChunkName: "pages/ems/create" */))
const _22282b73 = () => interopDefault(import('../pages/lms/create.vue' /* webpackChunkName: "pages/lms/create" */))
const _c7622e32 = () => interopDefault(import('../pages/ems/system_presets/countries.vue' /* webpackChunkName: "pages/ems/system_presets/countries" */))
const _d2bf55fa = () => interopDefault(import('../pages/ems/system_presets/department_heads.vue' /* webpackChunkName: "pages/ems/system_presets/department_heads" */))
const _854b4758 = () => interopDefault(import('../pages/ems/system_presets/departments.vue' /* webpackChunkName: "pages/ems/system_presets/departments" */))
const _5ab651f2 = () => interopDefault(import('../pages/ems/system_presets/designition.vue' /* webpackChunkName: "pages/ems/system_presets/designition" */))
const _a91777fa = () => interopDefault(import('../pages/ems/system_presets/employment_types.vue' /* webpackChunkName: "pages/ems/system_presets/employment_types" */))
const _391f9fc5 = () => interopDefault(import('../pages/ems/system_presets/genders.vue' /* webpackChunkName: "pages/ems/system_presets/genders" */))
const _7afa3d8c = () => interopDefault(import('../pages/ems/system_presets/personal_identification_types.vue' /* webpackChunkName: "pages/ems/system_presets/personal_identification_types" */))
const _1492d468 = () => interopDefault(import('../pages/ems/system_presets/relationship_status.vue' /* webpackChunkName: "pages/ems/system_presets/relationship_status" */))
const _2371ceec = () => interopDefault(import('../pages/ems/system_presets/section_heads.vue' /* webpackChunkName: "pages/ems/system_presets/section_heads" */))
const _083c94cb = () => interopDefault(import('../pages/ems/system_presets/sections.vue' /* webpackChunkName: "pages/ems/system_presets/sections" */))
const _36348a1a = () => interopDefault(import('../pages/iam/auth/account.vue' /* webpackChunkName: "pages/iam/auth/account" */))
const _6ca63ad4 = () => interopDefault(import('../pages/iam/auth/login.vue' /* webpackChunkName: "pages/iam/auth/login" */))
const _6a323386 = () => interopDefault(import('../pages/lms/system_presets/holiday_lists/index.vue' /* webpackChunkName: "pages/lms/system_presets/holiday_lists/index" */))
const _3ba5e042 = () => interopDefault(import('../pages/lms/system_presets/holidays/index.vue' /* webpackChunkName: "pages/lms/system_presets/holidays/index" */))
const _7b281900 = () => interopDefault(import('../pages/lms/system_presets/leave_types/index.vue' /* webpackChunkName: "pages/lms/system_presets/leave_types/index" */))
const _8caba7be = () => interopDefault(import('../pages/lms/system_presets/holiday_lists/create.vue' /* webpackChunkName: "pages/lms/system_presets/holiday_lists/create" */))
const _60ca72bc = () => interopDefault(import('../pages/lms/system_presets/holidays/create.vue' /* webpackChunkName: "pages/lms/system_presets/holidays/create" */))
const _9a727184 = () => interopDefault(import('../pages/lms/system_presets/leave_types/create.vue' /* webpackChunkName: "pages/lms/system_presets/leave_types/create" */))
const _5bb407ce = () => interopDefault(import('../pages/lms/system_presets/holiday_lists/update/_id.vue' /* webpackChunkName: "pages/lms/system_presets/holiday_lists/update/_id" */))
const _32500135 = () => interopDefault(import('../pages/lms/system_presets/holiday_lists/view/_id.vue' /* webpackChunkName: "pages/lms/system_presets/holiday_lists/view/_id" */))
const _67890598 = () => interopDefault(import('../pages/lms/system_presets/holidays/update/_id.vue' /* webpackChunkName: "pages/lms/system_presets/holidays/update/_id" */))
const _db0de5e0 = () => interopDefault(import('../pages/lms/system_presets/holidays/view/_id.vue' /* webpackChunkName: "pages/lms/system_presets/holidays/view/_id" */))
const _6715c0b6 = () => interopDefault(import('../pages/lms/system_presets/leave_types/update/_id.vue' /* webpackChunkName: "pages/lms/system_presets/leave_types/update/_id" */))
const _56b24912 = () => interopDefault(import('../pages/lms/system_presets/leave_types/view/_id.vue' /* webpackChunkName: "pages/lms/system_presets/leave_types/view/_id" */))
const _6212d392 = () => interopDefault(import('../pages/ems/update/_id.vue' /* webpackChunkName: "pages/ems/update/_id" */))
const _484e62ee = () => interopDefault(import('../pages/ems/view/_id.vue' /* webpackChunkName: "pages/ems/view/_id" */))
const _363eab30 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _146ecb2d,
    name: "dashboard"
  }, {
    path: "/ems",
    component: _8764f1b8,
    name: "ems"
  }, {
    path: "/lms",
    component: _41e2b4ab,
    name: "lms"
  }, {
    path: "/dashboard/v1",
    component: _2272d1b0,
    name: "dashboard-v1"
  }, {
    path: "/ems/create",
    component: _15d0afcc,
    name: "ems-create"
  }, {
    path: "/lms/create",
    component: _22282b73,
    name: "lms-create"
  }, {
    path: "/ems/system_presets/countries",
    component: _c7622e32,
    name: "ems-system_presets-countries"
  }, {
    path: "/ems/system_presets/department_heads",
    component: _d2bf55fa,
    name: "ems-system_presets-department_heads"
  }, {
    path: "/ems/system_presets/departments",
    component: _854b4758,
    name: "ems-system_presets-departments"
  }, {
    path: "/ems/system_presets/designition",
    component: _5ab651f2,
    name: "ems-system_presets-designition"
  }, {
    path: "/ems/system_presets/employment_types",
    component: _a91777fa,
    name: "ems-system_presets-employment_types"
  }, {
    path: "/ems/system_presets/genders",
    component: _391f9fc5,
    name: "ems-system_presets-genders"
  }, {
    path: "/ems/system_presets/personal_identification_types",
    component: _7afa3d8c,
    name: "ems-system_presets-personal_identification_types"
  }, {
    path: "/ems/system_presets/relationship_status",
    component: _1492d468,
    name: "ems-system_presets-relationship_status"
  }, {
    path: "/ems/system_presets/section_heads",
    component: _2371ceec,
    name: "ems-system_presets-section_heads"
  }, {
    path: "/ems/system_presets/sections",
    component: _083c94cb,
    name: "ems-system_presets-sections"
  }, {
    path: "/iam/auth/account",
    component: _36348a1a,
    name: "iam-auth-account"
  }, {
    path: "/iam/auth/login",
    component: _6ca63ad4,
    name: "iam-auth-login"
  }, {
    path: "/lms/system_presets/holiday_lists",
    component: _6a323386,
    name: "lms-system_presets-holiday_lists"
  }, {
    path: "/lms/system_presets/holidays",
    component: _3ba5e042,
    name: "lms-system_presets-holidays"
  }, {
    path: "/lms/system_presets/leave_types",
    component: _7b281900,
    name: "lms-system_presets-leave_types"
  }, {
    path: "/lms/system_presets/holiday_lists/create",
    component: _8caba7be,
    name: "lms-system_presets-holiday_lists-create"
  }, {
    path: "/lms/system_presets/holidays/create",
    component: _60ca72bc,
    name: "lms-system_presets-holidays-create"
  }, {
    path: "/lms/system_presets/leave_types/create",
    component: _9a727184,
    name: "lms-system_presets-leave_types-create"
  }, {
    path: "/lms/system_presets/holiday_lists/update/:id?",
    component: _5bb407ce,
    name: "lms-system_presets-holiday_lists-update-id"
  }, {
    path: "/lms/system_presets/holiday_lists/view/:id?",
    component: _32500135,
    name: "lms-system_presets-holiday_lists-view-id"
  }, {
    path: "/lms/system_presets/holidays/update/:id?",
    component: _67890598,
    name: "lms-system_presets-holidays-update-id"
  }, {
    path: "/lms/system_presets/holidays/view/:id?",
    component: _db0de5e0,
    name: "lms-system_presets-holidays-view-id"
  }, {
    path: "/lms/system_presets/leave_types/update/:id?",
    component: _6715c0b6,
    name: "lms-system_presets-leave_types-update-id"
  }, {
    path: "/lms/system_presets/leave_types/view/:id?",
    component: _56b24912,
    name: "lms-system_presets-leave_types-view-id"
  }, {
    path: "/ems/update/:id?",
    component: _6212d392,
    name: "ems-update-id"
  }, {
    path: "/ems/view/:id?",
    component: _484e62ee,
    name: "ems-view-id"
  }, {
    path: "/",
    component: _363eab30,
    name: "index"
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
