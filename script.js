// Test function to see if fetch is working
fetch('https://raw.githubusercontent.com/sohag-medicine/Test/refs/heads/main/userdata.json')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched data:', data);
    })
    .catch(error => console.error('Error fetching JSON:', error));
