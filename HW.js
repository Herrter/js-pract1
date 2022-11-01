// - Створити змінні. 
// Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false. 
// Вивести кожну змінну за допомогою: console.log 

let t1 = `hello`;
console.log (t1);
t1 = `owu`;
console.log (t1);
t1 = `com`;
console.log (t1);
t1 = `ua`;
console.log (t1);
t1 = 1;
console.log (t1);
t1 = 10;
console.log (t1);
t1 = -999;
console.log (t1);
t1 = 123;
console.log (t1);
t1 = 3.14;
console.log (t1);
t1 = 2.7;
console.log (t1);
t1 = 16;
console.log (t1);
t1 = true;
console.log (t1);
t1 = false;
console.log (t1);


// Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ.
// З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

let firstname = `Lomaka`;
let middlename = `Mykyta`;
let lastname = `Sergiyovych`;
console.log(`${firstname} ${middlename} ${lastname}`);


// За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
// let a = 100; let b = '100'; let c = true;

let a = 100
let b = `100`
let c = true
console.log(typeof a)
console.log(typeof b)
console.log(typeof c)


// Додаткове для тих хто цікавився prompt`oм За допомогою 3х різних prompt() отримати 3 слова які являються вашими
// Імям, По-Батькові та роками. та вивести в консоль

let years = prompt('Сколько вам лет?', );
console.log(years)
let names = prompt('Ваше имя и фамилия?', );
console.log(names)
let lastnames = prompt('По отчеству?', );
console.log(lastnames)
