// console.log("Hii Ranjeet");

// const header = document.getElementById('main-header');
// const item = document.getElementsByClassName('list-group-item');
// const li = document.getElementsByTagName('li');

// header.style.border='solid 3px black';

// item[0].style.color = 'green';
// item[2].style.backgroundColor = 'Green';

// for(var i =0; i<item.length;i++){
//     item[i].style.fontWeight = 'bold';
// }

// for(var i=0; i<li.length;i++){
//     li[i].style.color='green';
// }

// const Seconditem = document.querySelector('.list-group-item:nth-child(2)');
// Seconditem.style.backgroundColor = 'Green';

// const thirdItem = document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.style.color='white';

var secondItem = document.querySelectorAll('.list-group-item');
var odd = document.querySelectorAll('li:nth-child(odd)');


secondItem[1].style.color='green';

for(var i=0; i < odd.length;i++){
    odd[i].style.backgroundColor='green';
}