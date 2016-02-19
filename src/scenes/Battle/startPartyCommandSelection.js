'use strict';

Scene_Battle.prototype.startPartyCommandSelection = function() {
  this.refreshStatus();
  this._statusWindow.deselect();
  this._statusWindow.y = this._partyCommandWindow.y - this._statusWindow.height - 10;
  this._actorCommandWindow.close();
  this._actorCommandInfoWindow.close();
  this._partyCommandInfoWindow.open();
  this._partyCommandWindow.setup();
};
