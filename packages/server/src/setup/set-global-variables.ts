// /* eslint @typescript-eslint/camelcase: 0 */
// const service = String(process.argv[2]) as string
// const environment = process.env.NODE_ENV as string
//
// console.info('Defining global variables')
//
// global.base_url = 'https://local.oiwarren.com:8500/'
// global.__service = service
// global.__environment = environment
// global.__root_path = process.cwd()
// global.__base_path = __dirname
// global.__routes_path = `${__dirname}/routes`
// global.__modules_path = `${__dirname}/modules`
// global.__services_path = `${__dirname}/services`
// global.__helpers_path = `${__dirname}/helpers`
// global.__controllers_path = `${__dirname}/controllers`
// global.__tasks_path = `${__dirname}/tasks`
// global.__templates_path = `${__dirname}/templates`
// global.__emails_path = `${__dirname}/emails`
// global.__middlewares_path = `${__dirname}/middlewares`
// global.__caches_path = `${__dirname}/caches`
// global.__tickets_path = `${__dirname}/tickets`
// global.__dictionaries_path = `${__dirname}/dictionaries`
// global.__submodule_path = `${global.__root_path}/submodules`
// global.__server_started = false
//
// function getFileNameFromEnvName(envName: string): object {
//   const CONFIG_FILES = {
//     test: 'config.test.json',
//     development: 'config.dev.json',
//     staging: 'config.stg.json',
//     production: 'config.prd.json'
//   }
//   const configFile = CONFIG_FILES[envName]
//   if (!configFile) throw new Error('config file not found')
//   return configFile
// }
// console.info(`Loading the configuration file ${environment}.`)
// try {
//   global.__config = require(`${global.__base_path}/${getFileNameFromEnvName(environment)}`)
//   validateConfiguration(global.__config)
// } catch (e) {
//   console.error(
//     `Error loading config.json, please check if it really exists, your environment is set to: ${environment}.`
//   )
//   process.exit(e.code)
// }
//
// function validateConfiguration(c) {
//   let errorMessage = null
//   if (!c.instance_group) {
//     errorMessage = 'Missing config variable: "instance_group"'
//   }
//   if (!c.instance_id) {
//     errorMessage = 'Missing config variable: "instance_id"'
//   }
//   if (!c.api_url) {
//     errorMessage = 'Missing config variable: "api_url"'
//   }
//   if (!c.website_url) {
//     errorMessage = 'Missing config variable: "website_url"'
//   }
//   if (!c.email_images_url) {
//     errorMessage = 'Missing config variable: "email_images_url"'
//   }
//   if (!c.cookie_secret) {
//     errorMessage = 'Missing config variable: "cookie_secret"'
//   }
//   if (!c.access_token_secret) {
//     errorMessage = 'Missing config variable: "access_token_secret"'
//   }
//   if (!c.reset_password_secret) {
//     errorMessage = 'Missing config variable: "reset_password_secret"'
//   }
//   if (!c.unlock_login_secret) {
//     errorMessage = 'Missing config variable: "unlock_login_secret"'
//   }
//   if (!c.verify_email_secret) {
//     errorMessage = 'Missing config variable: "verify_email_secret"'
//   }
//   if (!c.login_token_secret) {
//     errorMessage = 'Missing config variable: "login_token_secret"'
//   }
//   if (!c.core_token_secret) {
//     errorMessage = 'Missing config variable: "core_token_secret"'
//   }
//   if (!c.unsubscribe_crm_secret) {
//     errorMessage = 'Missing config variable: "unsubscribe_crm_secret"'
//   }
//
//   if (!c.emailService) {
//     errorMessage = 'Missing config variable: "emailService"'
//   }
//   if (!c.emailService.transacional) {
//     errorMessage = 'Missing config variable: "emailService.transacional"'
//   }
//   if (!c.emailService.custom) {
//     errorMessage = 'Missing config variable: "emailService.custom"'
//   }
//   if (!c.emailService.services) {
//     errorMessage = 'Missing config variable: "emailService.services"'
//   }
//   if (!c.emailService.services.mandrill) {
//     errorMessage = 'Missing config variable: "emailService.services.mandrill"'
//   }
//   if (!c.emailService.services.mandrill.key) {
//     errorMessage = 'Missing config variable: "emailService.services.mandrill.key"'
//   }
//   if (!c.emailService.services.mandrill.username) {
//     errorMessage = 'Missing config variable: "emailService.services.mandrill.username"'
//   }
//   if (!c.emailService.services.mandrill.from_email) {
//     errorMessage = 'Missing config variable: "emailService.services.mandrill.from_email"'
//   }
//   if (!c.emailService.services.mandrill.from_name) {
//     errorMessage = 'Missing config variable: "emailService.services.mandrill.from_name"'
//   }
//   if (!c.emailService.services.mandrill.reply_to) {
//     errorMessage = 'Missing config variable: "emailService.services.mandrill.reply_to"'
//   }
//   if (!c.emailService.services.aws) {
//     errorMessage = 'Missing config variable: "emailService.services.aws"'
//   }
//   if (!c.emailService.services.aws.from_name) {
//     errorMessage = 'Missing config variable: "emailService.services.aws.from_name"'
//   }
//   if (!c.emailService.services.aws.from_email) {
//     errorMessage = 'Missing config variable: "emailService.services.aws.from_email"'
//   }
//   if (!c.emailService.services.aws.replyTo) {
//     errorMessage = 'Missing config variable: "emailService.services.aws.replyTo"'
//   }
//   if (!c.b2b) {
//     errorMessage = 'Missing config variable: "b2b"'
//   }
//   if (!c.b2b.emailConfig) {
//     errorMessage = 'Missing config variable: "b2b.emailConfig"'
//   }
//   if (!c.b2b.emailConfig.affiliate) {
//     errorMessage = 'Missing config variable: "b2b.emailConfig.affiliate"'
//   }
//   if (!c.b2b.emailConfig.partner) {
//     errorMessage = 'Missing config variable: "b2b.emailConfig.partner"'
//   }
//
//   if (!c.mongo) {
//     errorMessage = 'Missing config variable: "mongo"'
//   }
//   if (!c.mongo.uri) {
//     errorMessage = 'Missing config variable: "mongo.uri"'
//   }
//   if (!c.aws) {
//     errorMessage = 'Missing config variable: "aws"'
//   }
//   if (!c.aws.key) {
//     errorMessage = 'Missing config variable: "aws.key"'
//   }
//   if (!c.aws.secret) {
//     errorMessage = 'Missing config variable: "aws.secret"'
//   }
//   if (!c.aws.uploads) {
//     errorMessage = 'Missing config variable: "aws.uploads"'
//   }
//   if (!c.aws.uploads.path) {
//     errorMessage = 'Missing config variable: "aws.uploads.path"'
//   }
//   if (!c.aws.uploads.bucket) {
//     errorMessage = 'Missing config variable: "aws.uploads.bucket"'
//   }
//   if (!c.cloudinary) {
//     errorMessage = 'Missing config variable: "cloudinary"'
//   }
//   if (!c.cloudinary.cloud_name) {
//     errorMessage = 'Missing config variable: "cloudinary.cloud_name"'
//   }
//   if (!c.cloudinary.api_key) {
//     errorMessage = 'Missing config variable: "cloudinary.api_key"'
//   }
//   if (!c.cloudinary.api_secret) {
//     errorMessage = 'Missing config variable: "cloudinary.api_secret"'
//   }
//   if (!c.apn) {
//     errorMessage = 'Missing config variable: "apn"'
//   }
//   if (!c.apn.key) {
//     errorMessage = 'Missing config variable: "apn.key"'
//   }
//   if (!c.apn.keyId) {
//     errorMessage = 'Missing config variable: "apn.keyId"'
//   }
//   if (!c.apn.teamId) {
//     errorMessage = 'Missing config variable: "apn.teamId"'
//   }
//   if (!c.apn.bundleId) {
//     errorMessage = 'Missing config variable: "apn.bundleId"'
//   }
//   if (!c.analytics) {
//     errorMessage = 'Missing config variable: "analytics"'
//   }
//   if (!c.analytics.key) {
//     errorMessage = 'Missing config variable: "analytics.key"'
//   }
//   if (!c.gcm) {
//     errorMessage = 'Missing config variable: "gcm"'
//   }
//   if (!c.gcm.key) {
//     errorMessage = 'Missing config variable: "gcm.key"'
//   }
//   if (!c.core) {
//     errorMessage = 'Missing config variable: "core"'
//   }
//   if (!c.core.host) {
//     errorMessage = 'Missing config variable: "core.host"'
//   }
//   if (!c.core.ports) {
//     errorMessage = 'Missing config variable: "core.ports"'
//   }
//   if (!_.isObject(c.core.ports)) {
//     errorMessage = 'Config should be an object: "core.ports"'
//   }
//   if (!c.core.authorization) {
//     errorMessage = 'Missing config variable: "core.authorization"'
//   }
//   if (!c.unsplash) {
//     errorMessage = 'Missing config variable: "unsplash"'
//   }
//   if (!c.unsplash.applicationId) {
//     errorMessage = 'Missing config variable: "unsplash.applicationId"'
//   }
//   if (!c.elliot) {
//     errorMessage = 'Missing config variable: "elliot"'
//   }
//   if (c.elliot && !c.elliot.api) {
//     errorMessage = 'Missing config variable: "elliot.api"'
//   }
//   const httpPort = c[service].http_port
//   const httpsPort = c[service].https_port
//
//   if (!httpPort) {
//     debug.error('http_port configuration not found')
//     process.exit(1)
//   }
//   if (!httpsPort) {
//     debug.error('https_port configuration not found')
//     process.exit(1)
//   }
//
//   if (errorMessage) {
//     debug.error(errorMessage)
//     process.exit(1)
//   }
// }
