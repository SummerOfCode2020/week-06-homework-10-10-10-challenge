const assert = require('assert')

const app = require('../index.js')

describe('getHighScore', function () {
    it('Returns correct high score', function () {
        const scores = [1999, 2020, 3080, 1111]
        const result = app.getHighScore(scores)
        const expectedResult = 3080
        assert.deepEqual(result, expectedResult)
    })
})