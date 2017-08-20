'use strict';

Game_Actors.prototype.initialize = function() {
    this._data = {};
};

Game_Actors.prototype.actor = function(uuid, actorId) {
    if (!this._data[uuid]) {
        if ($dataActors[actorId]) {
            this._data[uuid] = new Game_Actor(actorId, uuid);
        }
        else {
            this._data[uuid] = null;
        }
    }
    return this._data[uuid];
};
