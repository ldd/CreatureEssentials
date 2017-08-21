function Window_Storage() {
    this.initialize.apply(this, arguments);
}

Window_Storage.prototype = Object.create(Window_Selectable.prototype);
Window_Storage.prototype.constructor = Window_Storage;

Window_Storage.prototype.initialize = function(x, y, width, height) {
    Window_Selectable.prototype.initialize.call(this, x, y, width, height);
    this.activate();
    this._mode = null;
};

Window_Storage.prototype.setMode = function(mode) {
    this._mode = mode;
};

Window_Storage.prototype.maxItems = function() {
    return this.maxCols()*this.maxRows();
};

Window_Storage.prototype.maxCols = function() {
    return Math.floor((this.width)/60);
};
Window_Storage.prototype.maxRows = function() {
    return Math.floor((this.height)/52);
};
Window_Storage.prototype.standardPadding = function(){
    return this.width%this.maxCols()
}

Window_Storage.prototype.maxVisibleItems = function() {
    return 5;
};

Window_Storage.prototype.itemHeight = function() {
    return 50;
};

Window_Storage.prototype.itemWidth = function() {
    return 50;
};

Window_Storage.prototype.drawAllItems = function() {
    Window_Selectable.prototype.drawAllItems.call(this);

    //temporarily create lines to seclude the party
    this.contents.fillRect(62*6-7, 0, 2, 50, 'white');
    this.contents.fillRect(0, 50, 62*6-7, 2, 'white');
};

Window_Storage.prototype.drawItem = function(index) {
    var actor;
    var l = $gameParty._actors.length;
    if(index < l){
        actor = $gameParty.allMembers()[index];
    }
    else{
        actor = $gameActors._data[$gameActors._outsideParty[index-l]];
    }
    if(!actor) return;

    var rect = this.itemRect(index);
    this.resetTextColor();

    this.drawCharacter(actor.characterName(), actor.characterIndex(), rect.x+25, rect.y+50);
};

Window_Storage.prototype.playOkSound = function() {
};

module.exports = Window_Storage;

window.Window_Storage = Window_Storage;