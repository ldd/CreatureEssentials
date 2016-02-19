'use strict';

Window_PartyCommand.prototype.numVisibleRows = function () {
  return 2;
};
Window_PartyCommand.prototype.maxCols = function () {
  return 2;
};
Window_PartyCommand.prototype.makeCommandList = function () {
  this.addCommand('FIGHT', 'fight');
  this.addCommand('BAG', 'fight');
  this.addCommand('TEAM', 'team');
  this.addCommand('RUN', 'escape', BattleManager.canEscape());
};
