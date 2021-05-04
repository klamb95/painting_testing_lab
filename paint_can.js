const PaintCan = function(volume){
    this.volume = volume;
};

PaintCan.prototype.checkIfEmpty = function () {
    if (this.volume > 0){
        return false;
    } else {
        return true;
    }
};

PaintCan.prototype.empty = function () {
    this.volume = 0;
};


module.exports = PaintCan;