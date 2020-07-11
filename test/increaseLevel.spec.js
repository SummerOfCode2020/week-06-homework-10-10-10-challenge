const assert = require('assert')

const app = require('../index.js')

describe('increaseLevel', function () {
    it('increases 5 to 6', function () {
        const testNumber = 5

        const result = app.increaseLevel(testNumber)

        assert.equal(result, 6)
    })
})