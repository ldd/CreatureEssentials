'use strict';

Window_SkillList.prototype.makeItemList = function() {
    if (this._actor) {
        this._data = this._actor.skills();
    } else {
        this._data = [];
    }
};
