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

})