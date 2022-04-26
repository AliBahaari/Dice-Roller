"use strict";
var readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
readLine.question('Dice Rolling Counts: ', function (rollingNumber) {
    var itemsCount = {
        Stone: 0,
        Paper: 0,
        Scissors: 0
    };
    var diceRollInterval = +rollingNumber;
    var i = 0;
    while (i < diceRollInterval) {
        var diceNumber = Math.floor(Math.random() * 3);
        switch (diceNumber) {
            case 0:
                itemsCount.Stone += 1;
                break;
            case 1:
                itemsCount.Paper += 1;
                break;
            case 2:
                itemsCount.Scissors += 1;
                break;
        }
        i++;
    }
    console.table(itemsCount);
    readLine.close();
});
