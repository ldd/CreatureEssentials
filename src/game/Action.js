'use strict';

Game_Action.prototype.subject = function() {
    //enemy defaults to 0. Otherwise valid uuid string
    if (this._subjectActorId) {
        return $gameActors.actor(this._subjectActorId);
    } else {
        return $gameTroop.members()[this._subjectEnemyIndex];
    }
};
