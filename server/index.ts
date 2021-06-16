import { MainServer } from './Server'

const port = process.env.PORT || 8000

const server = new MainServer({ port })
server.start()
