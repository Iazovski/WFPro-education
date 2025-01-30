let screenPrice = 30000;
let percentage = 10;


let titleProject = prompt('Укажите название проекта');
console.log(titleProject);

let screensValue = prompt('Укажите типы экранов');
console.log(screensValue);

let responsive = prompt('Нужен ли адаптивный сайт?');
console.log(responsive);

/*let service = prompt('Какой сервис нужен?');
console.log(service);

let servicePrice = prompt('Сколько это будет стоить?');

console.log(servicePrice);

let serviceYet = prompt('Какой еще сервис тебе нужен?');
console.log(serviceYet);

let serviceYetPrice = prompt('Сколько будет стоить этот второй сервис?');

console.log(serviceYetPrice);


let getAllServicePrices = function (servicePrice,serviceYetPrice) {
    return +servicePrice + +serviceYetPrice;
};
*/
let checkIsNumber = (num) => {
    return !isNaN(parseFloat(num)) && isFinite(num);
};

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
    return sumService;
};

let allSumService = getAllServicePrices();
console.log (allSumService);

/*const allServicePrices = getAllServicePrices();
console.log(allServicePrices);*/

/*const allServicePrices = getAllServicePrices(servicePrice,serviceYetPrice);
console.log(allServicePrices);*/

function getFullPrice () {
    return allSumService + screenPrice;
};
const fullPriceServices = getFullPrice();
console.log(fullPriceServices);


function getTitle () {
    let firstChar = titleProject.charAt(0);
    let upperFirstChar = firstChar.toUpperCase();
    let restOfString = titleProject.slice(1);  
    let restOfStringLow = restOfString.toLowerCase();
    let newTitleProject = upperFirstChar + restOfStringLow;
    console.log(newTitleProject.replaceAll(' ', ''));
};
getTitle();

function getServicePercentPrices () {
    let servicePercentPrice = Math.round(fullPriceServices - fullPriceServices * percentage / 100);
    return fullPriceServices - servicePercentPrice;
};

getServicePercentPrices();




let servicePercentPriceWithout = getServicePercentPrices();
console.log(servicePercentPriceWithout);

function getRollbackMessage() {
    if (fullPriceServices >= 50000) {
        console.log('Даем скидку 10%');
    
    } else if (fullPriceServices >= 20000 && fullPriceServices < 50000) {
        console.log('Даем скидку 5%');
    
    }  else if (20000 > fullPriceServices > 0) {
        console.log('Скидка не предусмотрена');
    
    } else if (fullPriceServices < 0) {
        console.log('Что-то пошло не так');
    };
};
getRollbackMessage();


/*let allSumService = getAllServicePrices();
console.log (allSumService);*/