(function () {

  // map options
  var options = {
        zoomSnap: .5,
        center: [38, -85],
        zoom: 4,
        minZoom: 2,
        zoomControl: false,
        attributionControl: false
      }

  // create map
  var map = L.map('map', options);

  // request tiles and add to map
  var CartoDB_Positron = L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
  	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
  	subdomains: 'abcd',
  	maxZoom: 19
  }).addTo(map);

  // var flowmapLayer = L.layerGroup();
  // var copyFlowmapLayer = L.layerGroup(); // use copy to add layer to second map
  var markers = L.markerClusterGroup({
    showCoverageOnHover: false,
    maxClusterRadius: 30,
    chunkedLoading: true
  });
  var markerOptions = {
    radius: 5,
    color: '#de2d26'
  }

})();
