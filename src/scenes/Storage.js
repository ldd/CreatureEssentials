require('../windows/Storage');

function Scene_Storage() {
    this.initialize.apply(this, arguments);
}

Scene_Storage.prototype = Object.create(Scene_MenuBase.prototype);
Scene_Storage.prototype.constructor = Scene_Storage;

Scene_Storage.prototype.initialize = function() {
    Scene_MenuBase.prototype.initialize.call(this);
};

Scene_Storage.prototype.create = function() {
    Scene_MenuBase.prototype.create.call(this);
    this.createOptionsWindow();
};

Scene_Storage.prototype.start = function() {
    Scene_MenuBase.prototype.start.call(this);
    this._optionsWindow.refresh();
};

Scene_Storage.prototype.terminate = function() {
    Scene_MenuBase.prototype.terminate.call(this);
    ConfigManager.save();
};

Scene_Storage.prototype.createOptionsWindow = function() {
    this._optionsWindow = new Window_Storage(0,0,Graphics.boxWidth, Graphics.boxHeight);;

    this._optionsWindow.setHandler('cancel', this.popScene.bind(this));
    this.addWindow(this._optionsWindow);
};

module.exports = Scene_Storage;

window.Scene_Storage = Scene_Storage;