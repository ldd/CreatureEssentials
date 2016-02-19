//@Copyright ldd 2016
'use strict';

var oldInitMembers = BattleManager.initMembers;

BattleManager.initMembers = function() {
  oldInitMembers();
  this._actorIndex = 1;
};
BattleManager.clearActor = function() {
  //this._actorIndex = this._actorIndex < 1? 1 : this._actorIndex;
};
BattleManager.selectNextCommand = function() {
  do {
    if (!this.actor() || !this.actor().selectNextCommand()) {
      if(!this.actor().isSelected()){
        this.actor().select();
      }
      else{
        this.startTurn();
        break;
      }
    }
  } while (!this.actor().canInput());
};
BattleManager.selectPreviousCommand = function() {
  this.actor().deselect();
};
