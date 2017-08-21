'use strict';

Game_Actors.prototype.initialize = function() {
    this._data = {};
    this._outsideParty = [];
};

Game_Actors.prototype.actor = function(uuid, actorId, isOutsideParty) {
    if (!this._data[uuid]) {
        if ($dataActors[actorId]) {
            this._data[uuid] = new Game_Actor(actorId, uuid);

            //add to party or outsideParty array
            !!isOutsideParty? this._outsideParty.push(uuid) : null;
        }
        else {
            this._data[uuid] = null;
        }
    }
    return this._data[uuid];
};

Game_Actors.prototype.eraseActor = function(uuid){
    if(this._data[uuid]){
        this._data[uuid] = undefined;
        this._outsideParty = this._outsideParty.filter(function(id){
            return id !== uuid;
        });
    }
};