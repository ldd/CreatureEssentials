'use strict';

Game_Party.prototype.maxBattleMembers = function() {
    return 6;
};

Game_Party.prototype.setupStartingMembers = function() {
    this._actors = [];
    this._actorsDic = {};
    $dataSystem.partyMembers.forEach(function(actorId) {
        var uuid = Utils.generateUuid();
        if ($gameActors.actor(uuid, actorId)) {
            var index = this._actors.push(uuid);
            this._actorsDic[uuid] = index - 1;
        }
    }, this);
};

Game_Party.prototype.addActor = function(uuid) {
    if(this._actorsDic[uuid] === undefined){
        var index = this._actors.push(uuid);
        this._actorsDic[uuid] = index - 1;
        $gamePlayer.refresh();
        $gameMap.requestRefresh();
    }
};

Game_Party.prototype.allMembers = function() {
    return this._actors.map(function(uuid) {
        return $gameActors.actor(uuid);
    });
};

Game_Party.prototype.removeActor = function(uuid) {
    if(this._actorsDic[uuid] !== undefined){
        var i = this._actorsDic[uuid];
        this._actors.splice(i,1);
        this._actorsDic[uuid] = undefined;
        $gamePlayer.refresh();
        $gameMap.requestRefresh();
    }
};
