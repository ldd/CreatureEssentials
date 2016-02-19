'use strict';

Window_BattleStatus.prototype.initialize = function() {
  var width = this.windowWidth();
  var height = this.windowHeight();
  var x = Graphics.boxWidth - width;
  var y = Graphics.boxHeight - height;
  Window_Selectable.prototype.initialize.call(this, x, y, width, height);
  this.refresh();
  this.openness = 0;
};
Window_BattleStatus.prototype.select = function(){
};
Window_BattleStatus.prototype.windowWidth = function() {
  return 344;
};
Window_BattleStatus.prototype.windowHeight = function() {
  return this.fittingHeight(1);
};
Window_BattleStatus.prototype.numVisibleRows = function() {
  return 1;
};
Window_BattleStatus.prototype.maxItems = function() {
  return 1;
};
Window_BattleStatus.prototype.drawBasicArea = function(rect) {
  this.drawActorName(BattleManager.actor(), rect.x + 0, rect.y, 150);
  this.drawActorIcons(BattleManager.actor(), rect.x + 156, rect.y, rect.width - 156);
};
Window_BattleStatus.prototype.drawGaugeArea = function(rect) {
  this.drawActorHp(BattleManager.actor(), 177, rect.y, 201);//108
};
