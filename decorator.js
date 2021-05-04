const Decorator = function(name){
    this.name = name
    this.paintStock = []
    this.paintVolumeInStock = 0
};

Decorator.prototype.addToStock = function(paint_can){
    this.paintStock.push(paint_can)
    this.paintVolumeInStock += paint_can.volume
};






module.exports = Decorator;