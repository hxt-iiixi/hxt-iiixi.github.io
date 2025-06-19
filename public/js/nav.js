fetch('/views/nav.html') 
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.text();
    })
    .then(data => document.getElementById("navbar-placeholder").innerHTML = data)
    .catch(error => console.error('Error loading the navbar:', error));
