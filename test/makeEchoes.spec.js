const assert = require('assert')

const app = require('../index.js')

describe('makeEchoes', function () {
    it('Should console.log 5 times', function () {
        const testNumber = 5

        const result = app.makeEchoes(testNumber)

        assert.equal(result, 5)
    })
})