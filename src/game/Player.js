'use strict';

Game_Player.prototype.executeMove  = function(direction){
    if(Input.isLongPressed(Input._latestButton)  || $gameTemp.isDestinationValid()){
        this.moveStraight(direction);
    }
    else{
        this._direction = (direction);
    }
};