(function () {

  // map options
  var options = {
        zoomSnap: .5,
        center: [33.7, -84.4],
        zoom: 9,
        minZoom: 2,
        zoomControl: false,
        attributionControl: false
      }

  // // create map
  // var map = L.map('map', options);
  //
  // // request tiles and add to map
  // var CartoDB_Positron = L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
  // 	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
  // 	subdomains: 'abcd',
  // 	maxZoom: 19
  // }).addTo(map);

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

  // points for map to zoom to
  var points = {
    atlanta: {lat: 33.7, lon: -84.4, zoom: 9},
    heathrow: {lat: 51.5, lon: 0.5, zoom: 11},
    geneva: {lat: 46.2, lon: 6.1, zoom: 10},
    sicily: {lat: 37.6, lon: 14.0, zoom: 7},
    ortigia: {lat: 37.1, lon: 15.3, zoom: 10},
    noto: {lat: 36.9, lon: 15.1, zoom: 10},
    mtEtna: {lat: 37.8, lon: 15.0, zoom: 10},
    augusta: {lat: 37.2, lon: 15.2, zoom: 10}
  }

  $('#words').storymap({
    markers: points,
    createMap: function () {
      var map = L.map('map', options);
      L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
      	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
      	subdomains: 'abcd',
      	maxZoom: 19
      }).addTo(map);
      return map;
    }
  });

})();
