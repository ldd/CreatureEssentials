'use strict';

//capture a creature
function captureCreature(dataActor /*, catchRate, catchCondition*/ ){
    // catchCondition = catchCondition || function(){return true};
    // if(catchCondition(dataActor) && catchRate)
    //     if(catchRate){
    //     }
    var capturedEnemy = JSON.parse(JSON.stringify(dataActor));

    // give initial properties
    capturedEnemy.name = dataActor.name();
    capturedEnemy.traits = dataActor.traits();
    capturedEnemy.classId = 2;
    capturedEnemy.equips = [];
    capturedEnemy._uuid = Utils.generateUuid();
    // capturedEnemy.initialLevel = parseInt(level);


    // if party is not full, add it to the party, otherwise do not
    var isInParty = $gameParty._actors.length < $gameParty.maxBattleMembers();

    $gameActors.actor(capturedEnemy._uuid,1, !isInParty);
    if(!!isInParty){
        $gameParty.addActor(capturedEnemy._uuid);
    }
}

var pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
    pluginCommand.call(this, command, args);
    if (command === 'CECaptureEnemy') {
        var dataActor =$gameTroop.members()[0];
        var level = 1;
        captureCreature(dataActor, level);
    }
};