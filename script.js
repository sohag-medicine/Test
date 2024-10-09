// Test function to see if fetch is working
fetch('https://raw.githubusercontent.com/yourusername/your-repo/main/userdata.json')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched data:', data);
    })
    .catch(error => console.error('Error fetching JSON:', error));
