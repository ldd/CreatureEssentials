'use strict';

Scene_Battle.prototype.startActorCommandSelection = function() {
  this._statusWindow.select(BattleManager.actor().index());
  this._partyCommandWindow.close();
  this._partyCommandInfoWindow.close();
  this._actorCommandInfoWindow.open();
  this._actorCommandWindow.setup(BattleManager.actor());
};
