 Function to retrieve user information
function retrieveInfo() {
    const nationalIDInput = document.getElementById(nationalID).value;
    console.log('Searching for National ID', nationalIDInput);  Debugging

     Fetch data from an external JSON file
    fetch('userdata.json')
        .then(response = {
            if (!response.ok) {
                throw new Error('Failed to load JSON data');
            }
            return response.json();
        })
        .then(userData = {
             Find the user that matches the input National ID
            const user = userData.find(user = user['National ID'] === nationalIDInput);

            if (user) {
                 Inject the user data into the table
                const tableRow = `
                    tr
                        td${user.username}td
                        td${user.Usercode}td
                        td${user.password}td
                    tr
                `;
                document.getElementById(resultBody).innerHTML = tableRow;
            } else {
                alert(User not found!);
                document.getElementById(resultBody).innerHTML = ;   Clear table if no user found
            }
        })
        .catch(error = {
            console.error(Error fetching user data, error);
        });
}
