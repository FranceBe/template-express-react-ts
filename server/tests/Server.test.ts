/**
 * @jest-environment node
 */

import { Serverable } from '../../types/server'
const jestExpress = require('jest-express')
import { Server } from '../Server'
describe('Server', () => {
  let ServerMock: jest.Mock
  let express: jest.Mocked<typeof jestExpress>
  let realProcess: any
  let exitMock: jest.Mock
  let onMock: jest.Mock

  // Set up test with all mocks
  beforeAll(() => {
    // To silent the console.log
    jest.spyOn(console, 'log').mockImplementation(() => null)
    // To mock Server from http
    ;({ Server: ServerMock } = require('http'))
    // Mock express function
    const expressMock: jest.Mocked<typeof jestExpress> = jest.fn(jestExpress)
    expressMock.static = jestExpress.static
    jest.doMock('express', () => expressMock)
    express = require('express')
    // To mock process.exit
    realProcess = process
    exitMock = jest.fn()
    onMock = jest.fn()
    global.process = { ...realProcess, exit: exitMock, on: onMock }
  })
  // Restore everything after test
  afterAll(() => {
    global.process = realProcess
    jest.clearAllMocks()
  })

  it('should provide an instance', () => {
    const result: Serverable = new Server({ port: 4000 })
    expect(result).toBeTruthy()
    expect(result).toBeInstanceOf(Server)
    expect(result).toHaveProperty('port', 4000)
  })
  it('should close server on stop', async () => {
    // Create an instance of Server with port
    const testServer: Serverable = new Server({ port: 4000 })
    // Mocking the server attribute
    testServer.server = new ServerMock()
    // If server has an instance and a server property with close
    // Mock close, then stop the Server to check it correctly
    // has called closed and process.exit
    if (testServer && testServer.server && testServer.server.close) {
      testServer.server.close = jest.fn()
      await testServer.stop()

      expect(testServer.server.close).toHaveBeenCalledTimes(1)
      expect(exitMock).toHaveBeenCalledTimes(1)
    }
  })
  it('should init server', async () => {
    // Create an instance of Server with port
    const testServer: Serverable = new Server({ port: 4000 })
    // Mocking the app attribute
    testServer.app = express()
    // If server has an instance and a app property with use
    // Mock use, then init the Server to check it correctly
    // has called use 3 times and get once
    if (testServer && testServer.app && testServer.app.use && testServer.app.get) {
      testServer.app.use = jest.fn()
      testServer.app.get = jest.fn()
      await testServer.init()

      expect(testServer.app.use).toHaveBeenCalledTimes(3)
      expect(testServer.app.get).toHaveBeenCalledTimes(1)
      await testServer.stop()
    }
  })
  it('should start server', async () => {
    // Create an instance of Server with port
    const testServer: Serverable = new Server({ port: 4000 })
    // Mocking the app attribute
    testServer.app = express()
    // If server has an instance and a app property with listen
    // Mock listen, then start the Server to check it correctly
    // has called listen once
    if (testServer && testServer.app && testServer.app.listen) {
      testServer.init = jest.fn()
      testServer.app.listen = jest.fn()
      await testServer.start()

      expect(testServer.app.listen).toHaveBeenCalledTimes(1)
      await testServer.stop()
    }
  })
})
