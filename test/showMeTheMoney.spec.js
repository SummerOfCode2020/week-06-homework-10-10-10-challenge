const assert = require('assert')

const app = require('../index.js')

describe('showMeTheMoney', function () {
    it('Console logs 10 times', function () {
        const result = app.showMeTheMoney()
        assert.equal(result,1955)
    })
})