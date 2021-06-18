const setup = () => {
  const env = { NODE_CONFIG_ENV: 'test', NODE_ENV: 'test' }
  for (let key in env) {
    process.env[key] = env[key]
  }
}

module.exports = setup
