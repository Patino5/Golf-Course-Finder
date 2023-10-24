// Check if geolocation is available in the user's browser
if ('geolocation' in navigator) {
    // Get the user's location on page load
    navigator.geolocation.getCurrentPosition(position => {
        const userLat = position.coords.latitude;
        const userLng = position.coords.longitude;

        // Set the map view to the user's location
        map.setView([userLat, userLng], 14);
    }, error => {
        console.error('Error getting user location:', error);
    });
} else {
    alert('Geolocation is not available in your browser.');
    
}


let map = L.map('map').setView([51.483274, -0.043259], 12)

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
// test 'courses' until I find  api for course data
const golfCourses = [
    {
        name: "Hyde Park Putting Course",
        location: [51.502758, -0.172766], //lat and log of course
        address: '110 Championship Way, Ponte Vedra Beach, FL 32082',
        website: 'https://tpc.com/sawgrass/'
    },
    {
        name: "Dulwich and Sydenham Hill Golf Club",
        location: [51.438516, -0.073085],
        address: '110 Championship Way, Ponte Vedra Beach, FL 32082',
        website: 'https://tpc.com/sawgrass/'
    },
    {
        name: "Shooters Hill Golf Course",
        location: [51.471345, 0.077366],
        address: '110 Championship Way, Ponte Vedra Beach, FL 32082',
        website: 'https://tpc.com/sawgrass/'
    },
    {
        name: "TPC Sawgrass",
        location: [30.195135, -81.393628],
        address: '110 Championship Way, Ponte Vedra Beach, FL 32082',
        website: 'https://tpc.com/sawgrass/'
    },
    {
        name: 'The Quarry Golf Course',
        location: [29.496873, -98.477046],
        address: '444 E Basse Rd, San Antonio, TX, 78209',
        website: 'https://quarrygolf.com/'
    },
    {
        name: 'Onward Mangilao Golf Club',
        location: [13.463521, 144.843235],
        address: '15, Mangilao, 96913, Guam',
        website: 'https://www.mangilaoguam.com/en/'
    }
    // more course data
]
const golfCourseMarkers = L.layerGroup().addTo(map)

// add markers to each golf course 
golfCourses.forEach(course => {
    const marker = L.marker(course.location).addTo(golfCourseMarkers)
    let circle = L.circle((course.location), {
        color: 'blue',
        fillColor: '#f03',
        fillOpacity: 0.08,
        radius: 800
    }).addTo(golfCourseMarkers)
    marker.bindPopup(`<b>${course.name}</b><p>Address:<br> ${course.address}<br>
    Website:<br> <a href = '${course.website}' target = '_blank'>${course.website}</a></p>`) // adds popup of name when clicked on course 
})

document.getElementById('search').addEventListener('keydown', function (e) {
    if (e.code === 'Enter') {
        const searchTerm = this.value.toLowerCase();
        const foundCourse = golfCourses.find(course => course.name.toLowerCase() === searchTerm);
        
        if (foundCourse) {
            map.setView(foundCourse.location, 14);
        } else {
            alert('Course not found'); // display an error message if the course is not found
        }
    }
});

/* Practice to learn the basics of Leafletjs

let marker = L.marker([51.5, -0.09]).addTo(map)

let circle = L.circle([51.508, -0.11], {
    color: 'blue',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map)

let polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
], {
    color:'red',
    fillColor: '#0000ff',
    fillOpacity: 0.3,
}).addTo(map)

marker.bindPopup('<b>Hello world!</b><br>I am a popup.').openPopup();
circle.bindPopup('I am a circle.')
polygon.bindPopup('I am a polygon')

const popup = L.popup().setLatLng([51.513, -0.09]).setContent('I am a standalone popup.').openOn(map)

function onMapClick(e) {
    alert(`You clicked the map at ${e.latlng}` )
}
map.on('click', onMapClick)
*/
function onMapClick(e) {
    alert(`You clicked the map at ${e.latlng}` )
}
map.on('click', onMapClick)