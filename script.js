// Mock JSON data for testing purposes
const mockUserData = [
    {
        "National ID": "30103112602877",
        "username": "صلاح حسني فتح الباب احمد",
        "Usercode": "1310202400589",
        "password": "30103112602877"
    },
    {
        "National ID": "30611292601216",
        "username": "ادهم محمود عز عبد المجيد",
        "Usercode": "1310202400588",
        "password": "30611292601216"
    }
];

// Function to retrieve information
function retrieveInfo() {
    console.log('Search button clicked');  // Check if the function is triggered

    const nationalIDInput = document.getElementById("nationalID").value;
    console.log('Input National ID:', nationalIDInput);  // Check the input

    // Simulate data fetching by using mock data
    const user = mockUserData.find(user => user['National ID'] === nationalIDInput);
    console.log('Matched user:', user);  // Check if a user is matched

    if (user) {
        const tableRow = `
            <tr>
                <td>${user.username}</td>
                <td>${user.Usercode}</td>
                <td>${user.password}</td>
            </tr>
        `;
        document.getElementById("resultBody").innerHTML = tableRow;
    } else {
        alert("User not found!");
    }
}
