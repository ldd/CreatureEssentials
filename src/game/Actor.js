'use strict';

Game_Actor.prototype.initialize = function(actorId, uuid) {
    Game_Battler.prototype.initialize.call(this);
    this.setup(actorId, uuid);
};


Game_Actor.prototype.setup = function(actorId, uuid) {
    var actor = $dataActors[actorId];
    this._actorId = actorId;
    this._uuid = uuid;
    this._name = actor.name;
    this._nickname = actor.nickname;
    this._profile = actor.profile;
    this._classId = actor.classId;
    this._level = actor.initialLevel;
    this.initImages();
    this.initExp();
    this.initSkills();
    this.initEquips(actor.equips);
    this.clearParamPlus();
    this.recoverAll();
};

Game_Actor.prototype.actorId = function() {
    return this._uuid;
};
