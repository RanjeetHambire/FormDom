// Function to add a user to Local Storage
function addUserToLocalStorage(user) {
    let userList = JSON.parse(localStorage.getItem('userList') || '[]');
    userList.push(user);
    localStorage.setItem('userList', JSON.stringify(userList));
}

// Function to display users in the UI
function displayUsers() {
    const userList = document.getElementById('userList');
    userList.innerHTML = '';

    const storedUsers = JSON.parse(localStorage.getItem('userList') || '[]');

    storedUsers.forEach((user, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span>${user.name} - ${user.email} - ${user.phone}</span>
            <button onclick="editUser(${index})">Edit</button>
            <button onclick="deleteUser(${index})">Delete</button>
        `;
        userList.appendChild(listItem);
    });
}

// Function to delete a user from Local Storage and UI
function deleteUser(index) {
    const storedUsers = JSON.parse(localStorage.getItem('userList') || '[]');
    storedUsers.splice(index, 1);
    localStorage.setItem('userList', JSON.stringify(storedUsers));
    displayUsers();
}

// Function to edit a user's email
function editUser(index) {
    const storedUsers = JSON.parse(localStorage.getItem('userList') || '[]');
    const newEmail = prompt('Enter new email:');
    
    if (newEmail) {
        storedUsers[index].email = newEmail;
        localStorage.setItem('userList', JSON.stringify(storedUsers));
        displayUsers();
    }
}

// Event listener for form submission
document.getElementById('userForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    const user = { name, email, phone };

    addUserToLocalStorage(user);
    displayUsers();

    // Clear form fields
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
});

// Initial display of users
displayUsers();
