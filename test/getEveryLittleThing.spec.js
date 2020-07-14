const assert = require('assert')

const app = require('../index.js')

describe('getEveryLittleThing', function () {
    it('Takes an array and returns an array', function () {
        const array = [{
            size: 'little',
            singin: true,
            sayin: 'This is my message to you'
        }, {
            size: 'little',
            singin: true,
            sayin: 'This is my message to you'
        }, {
            size: 'little',
            singin: true,
            sayin: 'This is my message to you'
        }]
        const result = app.getEveryLittleThing(array)
        assert.deepEqual(result, array)
    })
})