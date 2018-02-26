const Application = require('spectron').Application
const electronPath = require('electron')
const path = require('path')
const { setWorldConstructor, BeforeAll, AfterAll } = require('cucumber')

const app = new Application({
  path: electronPath,
  args: [path.join(__dirname, '../../')]
})

BeforeAll(() => {
  return app.start().then(() => {
    setWorldConstructor(function() {
      global.app = app
    })
  })
})

AfterAll(() => {
  return app.stop()
})
