var form = document.getElementById('addForm');
var item = document.getElementById('items');

//form submit event
form.addEventListener('submit', addItem);


//addItem function
function addItem(e){
    e.preventDefault();

    //get input value
    var newItem = document.getElementById('item').value;
    //create new li item
    var li = document.createElement('li');
    //add class to li item
    li.className = 'list-group-item';

    // add text node with input value
    li.appendChild(document.createTextNode(newItem));

    //create delete button 
    var deletebtn = document.createElement('button');
    //add class to button
    deletebtn.className = 'btn btn-danger btn-sm float-right delete';
    //append textnode
    deletebtn.appendChild(document.createTextNode('X'));
    //append button to li
    li.appendChild(deletebtn);

    //append li to item
    item.appendChild(li);

}

// delete event 
item.addEventListener('click', removeItem);

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you Sure?')){
            var li = e.target.parentElement;
            item.removeChild(li);
        }
    }
}