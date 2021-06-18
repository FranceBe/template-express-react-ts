import { Server as httpServer } from 'http'
import { Express } from 'express'

export interface Serverable {
  start(): void
  stop(): void
  init(): void
  readonly port?: number | string
  server?: httpServer | undefined
  app?: Express
}
