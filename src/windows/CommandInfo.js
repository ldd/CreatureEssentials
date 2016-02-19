exports.CommandInfo = (function() {
  'use strict';
  function CommandInfo(){
    this.initialize.apply(this, arguments);
  }
  CommandInfo.prototype = Object.create(Window_Base.prototype);
  CommandInfo.prototype.constructor = CommandInfo;
  CommandInfo.prototype.initialize = function(width, text){
    var height = this.fittingHeight(2);
    var y = Graphics.boxHeight - height;
    Window_Base.prototype.initialize.call(this, 0, y, width, height);
    this.drawTextEx(text, this.textPadding(), 0);
  };
  return CommandInfo;
}());
