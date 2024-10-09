// Function to retrieve information
function retrieveInfo() {
    console.log('Search button clicked');  // Check if the function is triggered

    const nationalIDInput = document.getElementById("nationalID").value;
    console.log('Input National ID:', nationalIDInput);  // Check the input

    fetch('userdata.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to load JSON data');
            }
            return response.json();
        })
        .then(userData => {
            console.log('Fetched user data:', userData);  // Check the fetched data

            const user = userData.find(user => user['National ID'] === nationalIDInput);
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
        })
        .catch(error => {
            console.error("Error fetching user data:", error);
        });
}
