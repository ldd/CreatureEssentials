//@Copyright ldd 2016
'use strict';

var oldInitMembers = BattleManager.initMembers;

BattleManager.initMembers = function() {
  oldInitMembers.call(this);
  this._actorIndex = 1;
};

BattleManager.clearActor = function() {
  this._actorIndex = this._actorIndex < 0? 1 : this._actorIndex;
};

BattleManager.selectNextCommand = function() {
    do {
        if (!this.actor() || !this.actor().selectNextCommand()) {
                this.startTurn();
                break;
        }
    } while (!this.actor().canInput());
};
