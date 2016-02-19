'use strict';

var CommandInfo = require('../../windows/CommandInfo').CommandInfo;

Scene_Battle.prototype.createActorCommandWindow = function() {
  this._actorCommandWindow = new Window_ActorCommand();
  this._actorCommandWindow.setHandler('skill',  this.onSkillOk.bind(this));
  this._actorCommandWindow.setHandler('cancel', this.selectPreviousCommand.bind(this));
  this._actorCommandWindow.width = Graphics.boxWidth*2/3;
  this.addWindow(this._actorCommandWindow);
  this._actorCommandInfoWindow = new CommandInfo(Graphics.boxWidth/3, 'PP 25/25\n TYPE/GRASS');
  this._actorCommandInfoWindow.x = this._actorCommandWindow.width;
  this.addWindow(this._actorCommandInfoWindow);
};
