const assert = require('assert')

const app = require('../index.js')


describe('showLetterGrades', function () {
    it('Only console.logs letterGrades', function () {
        const letters = ['H', 'G', 'F', 'E', 'D', 'C', 'B', 'A']
        const result = app.showLetterGrades(letters)
        const expectedResult = ['F','D', 'C', 'B', 'A']
        assert.deepEqual(result, expectedResult)
    })
})