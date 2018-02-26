const { expect } = require('chai')

module.exports = {

  clickElement: (selector) => {
    return app.client.click(selector)
  },

  doubleClickElement: (selector) => {
    return app.client.doubleClick(selector)
  },

  checkElementPartialText: (text, selector, shouldBeIncluded = true) => {
    return app.client.getText(selector)
      .then(elementText => shouldBeIncluded
        ? expect(elementText).to.include(text)
        : expect(elementText).to.not.include(text))
  },

  checkPartialTitle: (text, shouldBeIncluded = true) => {
    return app.client.getTitle()
      .then(title => shouldBeIncluded
        ? expect(title).to.include(text)
        : expect(title).to.not.include(text))
  }
}
