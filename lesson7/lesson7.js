const gameBotFunction = () => {

    function getRandomNumber(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    let randomResult = getRandomNumber(1, 100);
    let attempt = 3;
    
    let checkIsNumber = (num) => {
        return !isNaN(parseFloat(num)) && isFinite(num);
    };

    let userNumPromt = () => {
        userNum = prompt('Угадай какое число я загадал от 1 до 100');
            if (userNum === null) {
                console.log('Игра окончена');
        }; return userNum;
    };
    
    let userNum = '';

    while (!checkIsNumber(userNum) || userNum.trim() === '') {
        userNum = prompt('Угадай какое число я загадал от 1 до 100');
    }; 
    userNum = Number(userNum);

    if (userNum > randomResult) {
        console.log('Не угадал, твое число больше моего');
    } else if (userNum < randomResult) {
        console.log('Не угадал, твое число меньше моего');
    } else if (userNum === randomResult) {
        let newGame = confirm('Поздравляю с победой, Сир! Хотите сыграть еще?');
        if (newGame) {
            attempt = 3;
            randomResult = getRandomNumber(1, 100);
        } else {
            attempt = 0;
        }53
    };

    if (attempt > 0) {
        attempt--
        userNumPromt();
    } else {
        let attemptIsOver = comfirm('Игра окончена, твои попытки закончились! Хочешь еще?');
        if (attemptIsOver) {
            attempt = 3;
            userNumPromt();
        } else {
            console.log('Игра окончена');
            return
        }
    }
}; 

gameBotFunction();
