const assert = require('assert')
const Decorator = require('../decorator.js')

describe('Decorator', function(){
    let decorator;
    beforeEach(function(){
        decorator = new Decorator('Mark')
    })

    it('should have a name', function(){
        const actual = decorator.name;
        assert.strictEqual(actual, 'Mark')
    })

    it('should start with an empty paint stock', function(){
        const actual = decorator.paintStock;
        assert.strictEqual(actual, 0)
    })

    it('should')
})