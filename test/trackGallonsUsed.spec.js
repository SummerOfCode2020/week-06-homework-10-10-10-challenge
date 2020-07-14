const assert = require('assert')

const app = require('../index.js')


describe('trackGallonsUsed', function () {
    it('Console logs for each gallon until empty', function () {
        const gallons = 5
        const result = app.trackGallonsUsed(gallons)
        const expectedResult = ['5 Gallons Remaining', '4 Gallons Remaining', '3 Gallons Remaining', '2 Gallons Remaining', '1 Gallon Remaining']
        assert.deepEqual(result, expectedResult)
    })
})