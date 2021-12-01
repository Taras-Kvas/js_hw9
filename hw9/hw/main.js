// Все робити за допомоги js.
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

// let create = document.createElement('div');
// // create.classList.add('wrap');
// // create.classList.add('collapse');
// // create.classList.add('alpha');
// // create.classList.add('beta');
// // for (const divElement of create) {
// //     divElement.style.background = 'red';
// //     divElement.style.color = 'white';
// //     divElement.style.fontSize = '40px';
// // }
// document.body.appendChild(create);
// // let node = div.cloneNode(true);
// document.body.appendChild(node);




//
// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.

// let tagNameElement = document.getElementsByTagName('ul')[0];
// let array = ['Main','Products','About us','Contacts']
// for (const string of array) {
//     let element = document.createElement('li');
//     document.body.appendChild(element);
//     tagNameElement.appendChild(element);
// }

//
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

// for (const Element of coursesAndDurationArray) {
//     let divElement = document.createElement('div');
//     divElement.innerText = Element.title + ', проходять: ' + Element.monthDuration + ' місяців.'
//     document.body.appendChild(divElement)
// }


// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>
// з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// for (const courses of coursesAndDurationArray) {
//     let divElement = document.createElement('div');
//     divElement.classList.add('item')
//     document.body.appendChild(divElement)
//     let h1 = document.createElement('h1');
//     h1.innerText = `${courses.title}`
//     h1.classList.add('heading')
//     divElement.appendChild(h1);
//     let p = document.createElement('p');
//     p.innerText = `${courses.monthDuration}`
//     p.classList.add('description')
//     divElement.appendChild(p)
//
// }