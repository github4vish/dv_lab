// Initialize the map
const map = new google.maps.Map(document.getElementById("map"), {
center: { lat: 20.5937, lng: 78.9629 }, // Center the map on India
zoom: 5,
});

// Fetch JSON data
fetch("locations.json")
.then(response => response.json())
.then(data => {
    data.forEach(location => {
        // Add markers for each location
        new google.maps.Marker({
            position: { lat: location.latitude, lng: location.longitude },
            map: map,
            title: location.name,
        });
    });
})
.catch(error => console.error("Error loading JSON data:", error));