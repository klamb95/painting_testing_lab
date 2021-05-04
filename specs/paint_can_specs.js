const assert = require('assert');
const PaintCan = require('../paint_can.js');



describe('PaintCan', function(){
    let paintCan;

    beforeEach(function(){
        paintCan = new PaintCan(2);
    });

    it('should have a volume', function(){
        const actual = paintCan.volume;
        assert.strictEqual(actual, 2);
    });

    it('should be able to check if it is empty', function(){
        const actual = paintCan.checkIfEmpty();
        assert.strictEqual(actual, false);
    });

    it('should be empty itself', function () {
        paintCan.empty();
        const actual = paintCan.checkIfEmpty();
        assert.strictEqual(actual, true)
    });


})