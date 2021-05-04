const assert = require('assert');
const Room = require('../room.js');



describe('Room', function() {
    let room;
    beforeEach(function(){
        room = new Room('Dining Room', 10);
    });

    it('Should have a name', function(){
        const actual = room.name;
        assert.strictEqual(actual, "Dining Room");
    });

    it('Should have an area', function(){
        const actual = room.area;
        assert.strictEqual(actual, 10);
    });
});