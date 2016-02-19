'use strict';

Scene_Battle.prototype.onSkillOk = function() {
  var skill = this._actorCommandWindow.currentExt();
  var action = BattleManager.inputtingAction();
  action.setSkill(skill.id);
  BattleManager.actor().setLastBattleSkill(skill);
  this.onSelectAction();
};
