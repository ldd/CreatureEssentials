'use strict';
var CommandInfo = require('../windows/CommandInfo').CommandInfo;

Scene_Battle.prototype.changeInputWindow = function() {
    if (BattleManager.isInputting()) {
        this.startActorCommandSelection();
    } else {
        this.endCommandSelection();
    }
};
Scene_Battle.prototype.createSkillWindow = function() {
    this._skillInfoWindow = new Window_Help();

    var x = Graphics.boxWidth/3;
    var w = Graphics.boxWidth - x;
    var h = this._skillInfoWindow.fittingHeight(2);
    var y = Graphics.boxHeight - h;

    this._skillInfoWindow.width = x;
    this._skillInfoWindow.height = h;
    this._skillInfoWindow.x = w;
    this._skillInfoWindow.y = y;
    this._skillInfoWindow.hide();
    this._skillInfoWindow.setText('PP 25/25\n TYPE/GRASS');

    this._skillWindow = new Window_BattleSkill(0, y, w, h);
    this._skillWindow.setHandler('ok',     this.onSkillOk.bind(this));
    this._skillWindow.setHandler('cancel', this.onSkillCancel.bind(this));
    this._skillWindow.setHelpWindow(this._skillInfoWindow);

    this.addWindow(this._skillWindow);
    this.addWindow(this._skillInfoWindow);
};

Scene_Battle.prototype.commandSkill = function() {
    this._skillWindow.setActor(BattleManager.actor());
    this._skillWindow.setStypeId(SceneManager._scene._skillWindow.item());
    this._skillWindow.refresh();
    this._skillWindow.show();
    this._skillWindow.activate();
};

Scene_Battle.prototype.onSkillCancel = function() {
    this._skillWindow.hide();
    this._actorCommandWindow.activate();
    this._actorCommandInfoWindow.activate();
};

Scene_Battle.prototype.createActorCommandWindow = function() {
    this._actorCommandWindow = new Window_ActorCommand();
    this._actorCommandWindow.setHandler('fight',  this.commandSkill.bind(this));
    this._actorCommandWindow.setHandler('item',  this.commandItem.bind(this));
    this._actorCommandWindow.setHandler('escape', this.commandEscape.bind(this));
    this._actorCommandWindow.deselect();

    this._actorCommandInfoWindow = new CommandInfo(Graphics.boxWidth/2, 'What will\n x do?');
    this.addWindow(this._actorCommandInfoWindow);
    this._actorCommandWindow.x = this._actorCommandInfoWindow.width;
    this._actorCommandWindow.width = Graphics.boxWidth - this._actorCommandInfoWindow.width;
    this.addWindow(this._actorCommandWindow);
};