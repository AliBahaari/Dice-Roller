const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readLine.question('Dice Rolling Counts: ', (rollingNumber: string) => {


    let itemsCount: {
        Stone: number;
        Paper: number;
        Scissors: number;
    } = {
        Stone: 0,
        Paper: 0,
        Scissors: 0
    };
    
    const diceRollInterval: number = +rollingNumber;
    
    let i = 0;
    while (i < diceRollInterval) {
    
        const diceNumber: number = Math.floor(Math.random() * 3);
    
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

