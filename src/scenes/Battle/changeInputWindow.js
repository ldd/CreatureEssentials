'use strict';
Scene_Battle.prototype.changeInputWindow = function() {
  if (BattleManager.isInputting()) {
    if (BattleManager.actor() && BattleManager.actor().isSelected()) {
      this.startActorCommandSelection();
    } else {
      this.startPartyCommandSelection();
    }
  } else {
    this.endCommandSelection();
  }
};
