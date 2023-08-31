var itemlist = document.querySelector('#items');

// parentNode 
// itemlist.parentNode.style.backgroundColor='#f4f4f4';

// parentElement 
// itemlist.parentElement.style.backgroundColor='#f4f4f4';

// childNodes 
// itemlist.children[1].style.backgroundColor='yellow';


// // firstChild
// console.log(itemlist.firstChild);
// // firstElementChild
// console.log(itemlist.firstElementChild);
// itemlist.firstElementChild.textContent = 'Hello';

// // lastChild
// console.log(itemlist.lastChild);
// // lastElementChild
// console.log(itemlist.lastElementChild);
// itemlist.lastElementChild.textContent = 'Hello4';

// // nextSibling
// console.log(itemlist.nextSibling);
// // nextElementSibling
// console.log(itemlist.nextElementSibling);

// // previousSibling
// console.log(itemlist.previousSibling);
// // previousElementSibling
// console.log(itemlist.previousElementSibling);
// itemlist.previousElementSibling.style.color='green';


// create element 

// create a div 
var newDiv = document.createElement('div');
// add class 
newDiv.className='hello';
//add id
newDiv.id='hello1';
//add attr
newDiv.setAttribute('title', 'hello Div');
//create text node
var newDivText = document.createTextNode('hello world');
// add text to div
newDiv.appendChild(newDivText);

var container = document.querySelector('.header .container');
var h1 = document.querySelector('header h1');

console.log(newDiv);

newDiv.style.fontSize='30px';

container.insertBefore(newDiv, h1);

