'use strict';

Sprite_Enemy.prototype.initialize = function(battler) {
    Sprite_Battler.prototype.initialize.call(this, battler);
    this.name = battler.name && battler.name();
};


Sprite_Enemy.prototype.loadBitmap = function(name, hue) {
    var bitmap = ImageManager.loadFace('Actor2', hue);
    this.bitmap = bitmap;
    this.loadFace();
};

Sprite_Enemy.prototype.loadFace = function() {
    this.bitmap.clear();
    var m = ImageManager.loadFace('Actor1');
    var self = this;
    function ff(){
        self.bitmap.clear();
        self.bitmap.blt(m, 144*0,144*1,144,144,144,144);
        self._refresh();
    }
    //we must wait around 8 frames.
    setTimeout(ff,8*1000/60);
};
