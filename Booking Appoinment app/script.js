document.addEventListener('DOMContentLoaded', function () {
    const userForm = document.getElementById('userForm');
    const userList = document.getElementById('userList');

    // Load users from LocalStorage when the page loads
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Function to display users in the UI
    function displayUsers() {
        userList.innerHTML = '';
        users.forEach((user, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
                <strong>Name:</strong> ${user.name}<br>
                <strong>Email:</strong> ${user.email}<br>
                <strong>Phone:</strong> ${user.phone}<br>
                <button class="delete-user" data-index="${index}">Delete</button>
            `;
            userList.appendChild(li);
        });
    }

    // Function to add a new user
    function addUser(name, email, phone) {
        users.unshift({ name, email, phone });
        localStorage.setItem('users', JSON.stringify(users));
        displayUsers();
    }

    // Function to delete a user
    function deleteUser(index) {
        users.splice(index, 1);
        localStorage.setItem('users', JSON.stringify(users));
        displayUsers();
    }

    // Handle form submission
    userForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        addUser(name, email, phone);
        userForm.reset();
    });

    // Handle user deletion
    userList.addEventListener('click', function (e) {
        if (e.target.classList.contains('delete-user')) {
            const index = parseInt(e.target.getAttribute('data-index'));
            deleteUser(index);
        }
    });

    // Initial display
    displayUsers();
});
