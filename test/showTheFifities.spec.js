const assert = require('assert')

const app = require('../index.js')

describe('showTheFifties', function () {
    it('Console logs 10 times and equal 545', function () {
        const result = app.showTheFifties()
        assert.equal(result, 545)
    })
})