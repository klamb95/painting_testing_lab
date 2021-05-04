const assert = require('assert')
const Decorator = require('../decorator.js')
const PaintCan = require('../paint_can.js')

describe('Decorator', function(){
    let decorator;
    beforeEach(function(){
        decorator = new Decorator('Mark')
        paintCan = new PaintCan(2)
        
    })

    it('should have a name', function(){
        const actual = decorator.name;
        assert.strictEqual(actual, 'Mark')
    })

    it('should start with an empty paint stock', function(){
        const actual = decorator.paintStock;
        assert.strictEqual(actual, 0)
    })

    it('should be able to add to paint stock', function(){
        decorator.addToStock(paintCan);
        // const expected = [paint_can]
        const actual = decorator.paintStock;
        assert.strictEqual(actual, 1)
    })

    xit('should be able to count how much paint is in stock', function(){
        decorator.addToStock(paintCan);
        decorator.paintTotalVolume();
        const actual = decorator.paintStock;
        assert.strictEqual(actual, 2)
    })
})