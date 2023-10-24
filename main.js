let map = L.map('map').setView([51.505, -0.09], 13)

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

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
