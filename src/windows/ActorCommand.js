'use strict';

Window_ActorCommand.prototype.numVisibleRows = function() {
  return 2;
};
Window_ActorCommand.prototype.maxCols = function() {
  return 2;
};
Window_ActorCommand.prototype.makeCommandList = function() {
  if (this._actor) {
    var skills = this._actor.skills();
    var i, len = skills.length;
    for(i=0;i<len;i++){
      this.addCommand(skills[i].name,'skill',true, skills[i]);
    }
  }
};
