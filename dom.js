// console.log("Hii Ranjeet");

const header = document.getElementById('main-header');
const item = document.getElementsByClassName('list-group-item');
const li = document.getElementsByTagName('li');

header.style.border='solid 3px black';

item[0].style.color = 'green';
item[2].style.backgroundColor = 'Green';

for(var i =0; i<item.length;i++){
    item[i].style.fontWeight = 'bold';
}

for(var i=0; i<li.length;i++){
    li[i].style.color='green';
}