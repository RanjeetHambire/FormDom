var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

//form submit event
form.addEventListener('submit', addItem);


//addItem function
function addItem(e){
    e.preventDefault();

    //get input value
    var newItem = document.getElementById('item').value;
    var newItem2 = document.getElementById('item1').value;
    //create new li item
    var li = document.createElement('li');
    //add class to li item
    li.className = 'list-group-item';

    // add text node with input value
    li.appendChild(document.createTextNode(newItem));
    li.appendChild(document.createTextNode(" " + newItem2));

    //create delete button 
    var deletebtn = document.createElement('button');
    //add class to button
    deletebtn.className = 'btn btn-danger btn-sm float-right delete';
    //append textnode
    deletebtn.appendChild(document.createTextNode('X'));
    //append button to li
    li.appendChild(deletebtn);

    //append li to item
    itemList.appendChild(li);

}


// delete event 
itemList.addEventListener('click', removeItem);

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you Sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}


// filter mechanism 
var filter = document.getElementById('filter');

// creating filter Element
filter.addEventListener('keyup', filterItems);

//filter Event
function filterItems(e){
    //converting text to lower case
    var text = e.target.value.toLowerCase();
    //get list of items
    var items = itemList.getElementsByTagName('li');
    //converting node to array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
        
    });

}