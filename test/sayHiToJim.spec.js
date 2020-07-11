const assert = require('assert')

const app = require('../index.js')


describe('sayHiToJim', function () {
    it('Ignores everyone if Jim isnt present', function () {
        const testNames = ['Jane', 'Anita Bath']
        const result = app.sayHiToJim(testNames)
        const expectedResult = ['Ignoring Jane', 'Ignoring Anita Bath'] 
        assert.deepEqual(result, expectedResult)
    })
})

describe('sayHiToJim', function () {
    it('Ignores everyone except Jim, and greets Jim', function () {
        const testNames = ['Jane', 'Anita Bath', 'Jim', 'Sam Sung']
        const result = app.sayHiToJim(testNames)
        const expectedResult = ['Ignoring Jane', 'Ignoring Anita Bath', 'Hi Jim', 'Ignoring Sam Sung']
        assert.deepEqual(result, expectedResult)
    })
})