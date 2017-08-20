'use strict';

Window_ActorCommand.prototype.numVisibleRows = function() {
  return 2;
};
Window_ActorCommand.prototype.maxCols = function() {
  return 2;
};
// Window_ActorCommand.prototype.initialize = function() {
//     var y = Graphics.boxHeight - this.windowHeight();
//     Window_Command.prototype.initialize.call(this, 0, y);
//     this.openness = 0;
//     this.deactivate();
// };

Window_ActorCommand.prototype.makeCommandList = function () {
    this.addCommand('FIGHT', 'fight');
    this.addCommand('BAG', 'item');
    this.addCommand('TEAM', 'team');
    this.addCommand('RUN', 'escape', BattleManager.canEscape());
};
