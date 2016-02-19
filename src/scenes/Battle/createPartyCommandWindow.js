'use strict';

var CommandInfo = require('../../windows/CommandInfo').CommandInfo;

Scene_Battle.prototype.createPartyCommandWindow = function() {
  this._partyCommandWindow = new Window_PartyCommand();
  this._partyCommandWindow.setHandler('fight',  this.commandFight.bind(this));
  this._partyCommandWindow.setHandler('escape', this.commandEscape.bind(this));
  this._partyCommandWindow.deselect();
  this._partyCommandInfoWindow = new CommandInfo(Graphics.boxWidth/2, 'What will\n x do?');
  this.addWindow(this._partyCommandInfoWindow);
  this._partyCommandWindow.x = this._partyCommandInfoWindow.width;
  this._partyCommandWindow.width = Graphics.boxWidth - this._partyCommandInfoWindow.width;
  this.addWindow(this._partyCommandWindow);
};
