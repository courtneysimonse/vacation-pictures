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
    atlanta: {
      center: {lat: 33.6407, lon: -84.4277, zoom: 9},
      photos: {url: "photos/atl_airport.jpg", lat: 33.6407, lon: -84.4277}
    },
    heathrow: {
      center: {lat: 51.4700, lon: 0.4543, zoom: 11},
      photos: {url: "photos/plane_to_geneva.jpg", lat: 51.4700, lon: 0.4543}
    },
    geneva: {
      center: {lat: 46.2044, lon: 6.1432, zoom: 11},
      photos: {url: "photos/fav_restaurant_geneva.jpg", lat: 46.2100849, lon: 6.1482021}
    },
    sicily: {
      center: {lat: 37.6000, lon: 14.0154, zoom: 7},
      photos: {url: "photos/plane_to_Catania.jpg", lat: 37.4666648, lon: 15.0583331}
    },
    ortygia: {
      center: {lat: 37.0609, lon: 15.2941, zoom: 11},
      photos: {url: "photos/walking_tour_group.jpg", lat: 37.0609, lon: 15.2941}
    },
    noto: {
      center: {lat: 36.8924, lon: 15.0652, zoom: 11},
      photos: {url: "photos/walking_tour_group.jpg", lat: 36.8924, lon: 15.0652}
    },
    mtEtna: {
      center: {lat: 37.7510, lon: 14.9934, zoom: 10},
      photos: {url: "photos/walking_tour_group.jpg", lat: 37.7510, lon: 14.9934}
    },
    augusta: {
      center: {lat: 37.2250, lon: 15.2217, zoom: 14.5},
      photos: {url: "photos/via_megara.jpg", lat: 37.2250, lon: 15.2217}
    }
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
