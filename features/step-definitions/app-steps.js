const { Given, Then } = require('cucumber')
const expect = require('chai').expect
const { checkPartialTitle, checkElementPartialText } = require('../support/helpers.js')

Given(/^App has been opened$/, () => {
  return app.client
    .waitUntilWindowLoaded()
    .getWindowCount().then(count => {
      expect(count).to.be.equal(1)
    })
    .browserWindow.isMinimized().then(x => {
      expect(x).to.be.false
    })
    .browserWindow.isVisible().then(x => {
      expect(x).to.be.true
    })
    .browserWindow.isFocused().then(x => {
      expect(x).to.be.true
    })
    .browserWindow.getBounds().then(({width, height}) => {
      expect(width).to.be.above(0)
      expect(height).to.be.above(0)
    })
})

Then(/^Title contains "([^"]*)"$/, (text) => {
  return checkPartialTitle(text, true)
})

Then(/^Content contains "([^"]*)"$/, (text) => {
  return checkElementPartialText(text, 'body', true)
})
