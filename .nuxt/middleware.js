const middleware = {}

middleware['auth-user'] = require('../middleware/auth-user.js')
middleware['auth-user'] = middleware['auth-user'].default || middleware['auth-user']

middleware['clearToastMessages'] = require('../middleware/clearToastMessages.js')
middleware['clearToastMessages'] = middleware['clearToastMessages'].default || middleware['clearToastMessages']

middleware['clearValidationErrors'] = require('../middleware/clearValidationErrors.js')
middleware['clearValidationErrors'] = middleware['clearValidationErrors'].default || middleware['clearValidationErrors']

middleware['redirect'] = require('../middleware/redirect.js')
middleware['redirect'] = middleware['redirect'].default || middleware['redirect']

export default middleware
