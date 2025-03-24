// Function to initialize the map
function initMap() {
    var bermudaTriangleCenter = { lat: 25.0000, lng: -71.0000 }; // Coordinates for the center of the Bermuda Triangle
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 5,
        center: bermudaTriangleCenter
    });
    var marker = new google.maps.Marker({
        position: bermudaTriangleCenter,
        map: map
    });
}