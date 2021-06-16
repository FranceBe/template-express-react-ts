import express, { Express, Request, Response, static as staticFactory } from 'express'
import { Server } from 'http'
import { join, resolve } from 'path'

import { config as webpackConfig } from '../webpack.config'

const frontSrcBasedir = resolve(__dirname, '..', 'built', 'src')
const htmlFile = join(frontSrcBasedir, 'index.html')
const staticMw = staticFactory(frontSrcBasedir)
const cors = require('cors')
const bodyParser = require('body-parser')
const chalk = require('chalk')

export class MainServer {
  private app: Express
  private readonly port: number | string
  private server: Server | undefined

  constructor({ port }: { port: number | string }) {
    this.app = express()
    this.port = port
  }

  public init(): void {
    this.app.use(cors())
    this.app.use(bodyParser.json())
    this.app.use(staticMw)
    if (webpackConfig.mode === 'development') {
      // Initialize and use webpack middleware
      const webpackFactory = require('webpack')
      const webpackDevFactory = require('webpack-dev-middleware')
      const webpackCompiler = webpackFactory(webpackConfig)
      const webpackDevMiddleware = webpackDevFactory(webpackCompiler, {
        publicPath: webpackConfig.output?.publicPath,
      })
      this.app.use(webpackDevMiddleware)
    }
    this.app.get('/', (req: Request, res: Response): void => {
      res.sendFile(htmlFile)
    })
    process.on('SIGINT', () => {
      this.stop()
    })
  }

  public start(): void {
    this.init()
    this.server = this.app.listen(this.port, () =>
      console.log(
        `${chalk.yellow('⚡')}️[server]: ${chalk.green('Server')} is running at ${chalk.blue(
          `http://localhost:${this.port}`,
        )}`,
      ),
    )
  }

  public stop(): void {
    console.log(`\n ${chalk.red('㊀')} You ${chalk.bold.red('stopped')} server. \n Goodbye !`)
    if (!this.server) {
      return
    } else {
      this.server.close()
      process.exit()
    }
  }
}
