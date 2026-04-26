console.log("JS loaded");
const currentUser=JSON.parse(localStorage.getItem('currentUser'));

if (!currentUser || currentUser.role!="admin"){
    alert("Access demied!");
    window.location.href="lodin.html";
}

const welcomeElement=document.getElementById('welcomeMessage');

welcomeElement.textContent="Welcome "+currentUser.username;

const users = JSON.parse(localStorage.getItem('users')) || [];
const tableBody = document.getElementById('usersTableBody');

users.forEach(user => {
    const row=document.createElement('tr');
    const usernameCell=document.createElement('td');
    usernameCell.textContent=user.username;
    const userEmailCell=document.createElement('td');
    userEmailCell.textContent=user.email;
    const userDobCell=document.createElement('td');
    userDobCell.textContent=user.dob;
    const userRoleCell=document.createElement('td');
    userRoleCell.textContent=user.role;

    row.appendChild(usernameCell);
    row.appendChild(userEmailCell);
    row.appendChild(userDobCell);
    row.appendChild(userRoleCell);

    tableBody.appendChild(row);
});