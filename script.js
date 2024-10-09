// Fetch data from the external JSON file
function retrieveInfo() {
    const nationalIDInput = document.getElementById("nationalID").value;

    fetch('userdata.json')
        .then(response => response.json())
        .then(userData => {
            const user = userData.find(user => user['National ID'] === nationalIDInput);

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
