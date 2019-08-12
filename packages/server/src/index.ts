import express from 'express'
import http from 'http'

export class Server {
  static async start() {
    if (global.__server_started === true) throw new Error('server already started')
    const app = express()
    app.disable('x-powered-by')
    // set global variables
    // await getConfigFile(configFile, service)
    // await getSslFilesFromS3Bucket()

    // Init sentry
    // const sentry = require(`${__dirname}/services/sentry`)
    // sentry.init(environment, service)

    // Validates the configuration variables

    // debug.info(`Running service: ${service}`)
    // debug.info(`Running environment: ${environment}`)

    // debug.info('Initializing keystone')
    app.get('/test', (req, res) => {
      res.send('POST request to homepage')
    })
    // eslint-disable-next-line @typescript-eslint/camelcase
    global.__server_started = true
    http.createServer(app).listen(3000)
  }
}
