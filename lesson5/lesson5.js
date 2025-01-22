//let titleProject = 'Оценка стоимости';
//let screensValue = 'Шаблонные, с уникальным дизайном, с анимациями';
//let fullPrice = 1500;
//let responsive = true;

let screenPrice = 30000;
let percentage = 10;


let titleProject = prompt('Укажите название проекта');
console.log(titleProject);

let screensValue = prompt('Укажите типы экранов');
console.log(screensValue);

let responsive = prompt('Нужен ли адаптивный сайт?');
console.log(responsive);

let service = prompt('Какой сервис нужен?');
console.log(service);

let servicePrice = prompt('Сколько это будет стоить?');

console.log(servicePrice);

let serviceYet = prompt('Какой еще сервис тебе нужен?');
console.log(serviceYet);

let serviceYetPrice = prompt('Сколько будет стоить этот второй сервис?');

console.log(serviceYetPrice);

let fullPrice = screenPrice + +servicePrice + +serviceYetPrice;
console.log(fullPrice);


let servicePercentPrice = Math.round(fullPrice - fullPrice * percentage / 100);
console.log (servicePercentPrice);




let getAllServicePrices = function (servicePrice,serviceYetPrice) {
    return +servicePrice + +serviceYetPrice;
};
const allServicePrices = getAllServicePrices(servicePrice,serviceYetPrice);
console.log(allServicePrices);

function getFullPrice () {
    return allServicePrices + screenPrice;
};
const fullPriceServices = getFullPrice();
console.log(fullPriceServices);


function getTitle () {
    let firstChar = titleProject.charAt(0);
    let upperFirstChar = firstChar.toUpperCase();
    let restOfString = titleProject.slice(1);
    let restOfStringLow = restOfString.toLowerCase();
    let newTitleProject = upperFirstChar + restOfStringLow;
    console.log(newTitleProject);
};
getTitle();

function getServicePercentPrices (fullPriceServices,servicePercentPrice ) {
    return fullPriceServices - servicePercentPrice;
};
getServicePercentPrices();
let servicePercentPriceWithout = getServicePercentPrices();
console.log(servicePercentPrice);

function getRollbackMessage() {
    if (fullPrice >= 50000) {
        console.log('Даем скидку 10%');
    
    } else if (fullPrice >= 20000 && fullPrice < 50000) {
        console.log('Даем скидку 5%');
    
    }  else if (20000 > fullPrice > 0) {
        console.log('Скидка не предусмотрена');
    
    } else if (fullPrice < 0) {
        console.log('Что-то пошло не так');
    };
};
getRollbackMessage();