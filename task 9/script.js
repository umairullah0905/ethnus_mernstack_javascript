// Function to save user data
function saveUser(event) {
    event.preventDefault(); // Prevent form submission

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let contact = document.getElementById("contact").value.trim();
    let address = document.getElementById("address").value.trim();

    if (name === "" || email === "" || contact === "" || address === "") {
        alert("All fields are required!");
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || []; // Get existing users or create an empty array

    users.push({ name, email, contact, address }); // Add new user

    localStorage.setItem("users", JSON.stringify(users)); // Save to localStorage

    alert("User registered successfully!");
    document.getElementById("registrationForm").reset(); // Reset form
}

// Function to display users in the table
function displayUsers() {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let usersTable = document.getElementById("usersTable");

    if (usersTable) {
        usersTable.innerHTML = ""; // Clear previous data

        users.forEach((user, index) => {
            let row = `<tr>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.contact}</td>
                <td>${user.address}</td>
            </tr>`;
            usersTable.innerHTML += row;
        });
    }
}

// Attach event listener to registration form
let form = document.getElementById("registrationForm");
if (form) {
    form.addEventListener("submit", saveUser);
}

// Call displayUsers function when viewing users
if (window.location.pathname.includes("view.html")) {
    displayUsers();
}
