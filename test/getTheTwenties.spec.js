const assert = require('assert')

const app = require('../index.js')

describe('getTheTwenties', function () {
    it('Console logs 10 times and puts only the 20s in an array', function () {
        const result = app.getTheTwenties()
        const expectedResult = [20,21,22,23,24,25,26,27,28,29]
        assert.deepEqual(result, expectedResult)
    })
})