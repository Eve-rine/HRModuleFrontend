import Middleware from './middleware'
import { Auth, authMiddleware, ExpiredAuthSessionError } from '~auth/runtime'

// Active schemes
import { LocalScheme } from '~auth/runtime'

Middleware.auth = authMiddleware

export default function (ctx, inject) {
  // Options
  const options = {
  "resetOnError": false,
  "ignoreExceptions": false,
  "scopeKey": "scope",
  "rewriteRedirects": true,
  "fullPathRedirect": true,
  "watchLoggedIn": true,
  "redirect": {
    "login": "/iam/auth/login",
    "logout": "/iam/auth/login",
    "home": "/",
    "callback": "/iam/auth/login"
  },
  "vuex": {
    "namespace": "auth"
  },
  "cookie": {
    "prefix": "CIamAuth",
    "options": {
      "path": "/"
    }
  },
  "localStorage": {
    "prefix": "LIamAuth."
  },
  "defaultStrategy": "local",
  "preserveState": true
}

  // Create a new Auth instance
  const $auth = new Auth(ctx, options)

  // Register strategies
  // local
  $auth.registerStrategy('local', new LocalScheme($auth, {
  "token": {
    "property": "payload.token",
    "required": true,
    "type": "Bearer"
  },
  "user": {
    "property": "user",
    "autoFetch": true
  },
  "endpoints": {
    "login": {
      "headers": {
        "x-service": "iam-svc"
      },
      "url": "api/login",
      "method": "post"
    },
    "user": {
      "headers": {
        "x-service": "iam-svc"
      },
      "url": "api/me",
      "method": "get",
      "propertyName": false
    },
    "logout": false
  },
  "name": "local"
}))

  // Inject it to nuxt context as $auth
  inject('auth', $auth)
  ctx.$auth = $auth

  // Initialize auth
  return $auth.init().catch(error => {
    if (process.client) {
      // Don't console log expired auth session errors. This error is common, and expected to happen.
      // The error happens whenever the user does an ssr request (reload/initial navigation) with an expired refresh
      // token. We don't want to log this as an error.
      if (error instanceof ExpiredAuthSessionError) {
        return
      }

      console.error('[ERROR] [AUTH]', error)
    }
  })
}
