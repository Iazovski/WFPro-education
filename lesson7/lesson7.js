const gameBotFunction = () => {
    let getRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    let randomResult = getRandomNumber(1, 100);
    let attempt = 5;

    let checkIsNumber = (num) => {
        return !isNaN(num) && num.trim() !== '';
    };

    let userNumPromt = () => {
        while (attempt > 0) {
            let userNum = prompt(`Угадай число от 1 до 100. Осталось попыток: ` + attempt);

            if (userNum === null) {
                alert('Игра окончена');
                return;
            }

            if (!checkIsNumber(userNum)) {
                alert('Введите число!');
                continue;
            }

            userNum = Number(userNum);

            if (userNum === randomResult) {
                let newGame = confirm('Поздравляю с победой, Сир! Хотите сыграть еще?');
                if (newGame) {
                    randomResult = getRandomNumber(1, 100);
                    attempt = 5;
                    userNumPromt(); 
                } else {
                    alert('Игра окончена');
                }
                return;
            } else if (userNum > randomResult) {
                alert('Не угадал, твое число больше моего');
            } else {
                alert('Не угадал, твое число меньше моего');
            }

            attempt--;
        }

        let attemptIsOver = confirm('Игра окончена, твои попытки закончились! Хочешь еще?');
        if (attemptIsOver) {
            randomResult = getRandomNumber(1, 100);
            attempt = 5;
            userNumPromt();; 
        } else {
            alert('Игра окончена');
        }
    };

    userNumPromt();; // Начало игры
};

gameBotFunction();