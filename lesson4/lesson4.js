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


if (fullPrice >= 50000) {
    console.log('Даем скидку 10%');

} else if (50000 > fullPrice >= 20000) {
    console.log('Даем скидку 5%');

}  else if (20000 > fullPrice > 0) {
    console.log('Скидка не предусмотрена');

} else if (fullPrice < 0) {
    console.log('Что-то пошло не так');
};
