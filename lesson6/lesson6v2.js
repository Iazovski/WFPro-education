let screenPrice;
let percentage = 10;
let titleProject;
let screensValue;
let responsive;
let service;
let serviceYet;

function getTitle () {
    let firstChar = titleProject.charAt(0);
    let upperFirstChar = firstChar.toUpperCase();
    let restOfString = titleProject.slice(1);  
    let restOfStringLow = restOfString.toLowerCase();
    let newTitleProject = upperFirstChar + restOfStringLow;
};

let checkIsNumber = (num) => {
    return !isNaN(parseFloat(num)) && isFinite(num);
};

const briefing = () => {
    titleProject = prompt('Укажите название проекта');
    screensValue = prompt('Укажите типы экранов');
    screenPrice = prompt('Сколько будет стоить экран?');

    while (!checkIsNumber(screenPrice) || screenPrice === NaN || screenPrice.trim() === '') {
        screenPrice = prompt('Сколько будет стоить экран?');
    }; 
    screenPrice = Number(screenPrice);
    responsive = prompt('Нужен ли адаптивный сайт?');
};

//общая сумма всех услуг
const getAllServicePrices = () => {
    let sumService = 0;

    for (i = 0; i < 2; i++) {

        if (i === 0){
            service = prompt('Какой сервис нужен?');
        } else if (i === 1) {
            serviceYet = prompt('Какой еще сервис тебе нужен?');
        };

        let promtPrice= '';

        while (!checkIsNumber(promtPrice) || promtPrice === null || promtPrice.trim() === '') {
            promtPrice = prompt('Сколько это будет стоить?');
        }; 

        sumService = sumService + Number(promtPrice);
    };
};




function getFullPrice () {
    return screenPrice + allServicePrices;
}

function getServicePercentPrices () {
    return fullPrice - (fullPrice * (percentage / 100));
};



let getDiscount = (value) => {
    if (value >= 50000) {
        return 'Даем скидку 10%';
    } else if (value >= 20000 && value < 50000) {
        return 'Даем скидку 5%';
    }  else if (20000 > value > 0) {
        return 'Скидка не предусмотрена';
    } else if (value < 0) {
        return 'Что-то пошло не так';
    };
};


let submit = confirm ('Подтвердите переход на страницу');

briefing();
let allServicePrices = getAllServicePrices();
let fullPrice = getFullPrice();
let servicePercentPrice = getServicePercentPrices();
let newTitleProject = getTitle();


console.log(newTitleProject);
console.log(allServicePrices);
console.log(fullPrice);
console.log(Math.ceil(servicePercentPrice));
console.log(serviceYet);
console.log(getServicePercentPrices(fullPrice));

