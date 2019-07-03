(function () {

  // map options
  var options = {
        zoomSnap: .5,
        center: [0, 0],
        zoom: 1,
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
  // var markers = L.markerClusterGroup({
  //   showCoverageOnHover: false,
  //   maxClusterRadius: 30,
  //   chunkedLoading: true
  // });
  // var markerOptions = {
  //   radius: 5,
  //   color: '#de2d26'
  // }

  // points for map to zoom to
  var points = {
    atlanta: {lat: 33.6407, lon: -84.4277, zoom: 9},
    heathrow: {lat: 51.4700, lon: 0.4543, zoom: 11},
    geneva: {lat: 46.2044, lon: 6.1432, zoom: 11},
    sicily: {lat: 37.6000, lon: 14.0154, zoom: 7},
    ortygia: {lat: 37.0609, lon: 15.2941, zoom: 11},
    noto: {lat: 36.8924, lon: 15.0652, zoom: 11},
    mtEtna: {lat: 37.7510, lon: 14.9934, zoom: 10},
    augusta: {lat: 37.2250, lon: 15.2217, zoom: 14.5}
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

      // add photos


      return map;
    }
  });

})();
