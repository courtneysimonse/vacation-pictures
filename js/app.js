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
      center: {lat: 33.7, lon: -84.4277, zoom: 10},
      photos: [{url: "photos/atl_airport.jpg", lat: 33.6407, lon: -84.4277},
               {url: "photos/mom_glasses.jpg", lat: 33.6406, lon: -84.4276},
               {url: "photos/atl_group.jpg", lat: 33.6406, lon: -84.4276},
               {url: "photos/atl_knife.jpg", lat: 33.6406, lon: -84.4276},
               {url: "photos/courtney_rose_atl.jpg", lat: 33.6406, lon: -84.4276},
               {url: "photos/ready_to_go.jpg", lat: 33.9483, lon: -84.61241}]
    },
    heathrow: {
      center: {lat: 51.4987524, lon: -0.5496845, zoom: 10},
      photos: [{url: "photos/plane_to_geneva.jpg", lat: 51.4987524, lon: -0.5496845},
               {url: "photos/creepy_BA.jpg", lat: 51.4987524, lon: -0.5496845}]
    },
    geneva: {
      center: {lat: 46.2044, lon: 6.1432, zoom: 11},
      photos: [{url: "photos/fav_restaurant_geneva.jpg", lat: 46.2100849, lon: 6.1482021},
               {url: "photos/taking_pics_geneva.jpg", lat: 46.2084623, lon: 6.1489786},
               {url: "photos/phone_booth.jpg", lat: 46.2040852, lon: 6.1497201},
               {url: "photos/jet_geneva.jpg", lat: 46.2073926, lon: 6.1537141},
               {url: "photos/geneva_ferris_wheel.jpg", lat: 46.2040852, lon: 6.1497201},
               {url: "photos/flower_clock.jpg", lat: 46.2040852, lon: 6.1497201},
               {url: "photos/a2b2c2.jpg", lat: 46.2471105, lon: 6.0363884}]
    },
    sicily: {
      center: {lat: 37.6000, lon: 14.0154, zoom: 7},
      photos: [{url: "photos/plane_to_Catania.jpg", lat: 37.4666648, lon: 15.0583331}]
    },
    ortygiaSights: {
      center: {lat: 37.0609, lon: 15.2941, zoom: 13},
      photos: [{url: "photos/duomo.jpg", lat: 37.0609, lon: 15.2941},
               {url: "photos/big_anchor.jpg", lat: 37.0642391, lon: 15.2897138},
               {url: "photos/archimedes.jpg", lat: 37.0644944, lon: 15.2885088},
               {url: "photos/captmirko_group.jpg", lat: 37.0775685, lon: 15.2998939},
               {url: "photos/lorelei_blanket.jpg", lat: 37.0609, lon: 15.2941},]
    },
    ortygiaFood: {
      center: {lat: 37.0609, lon: 15.2941, zoom: 13},
      photos: [{url: "photos/walking_tour_group.jpg", lat: 37.0609, lon: 15.2941},
               {url: "photos/sparkling_wine.jpg", alt:"Locanda Del Collegio", lat: 37.0605781, lon: 15.2926479},
               {url: "photos/white_wine.jpg", lat: 37.0605781, lon: 15.2926479},
               {url: "photos/seafood.jpg", lat: 37.0605781, lon: 15.2926479},
               {url: "photos/desserts.jpg", alt: "Bar Condorelli Ortigia", lat: 37.0594971, lon: 15.2928474},
               {url: "photos/small_coffee.jpg", lat: 37.0647051, lon: 15.2922708},
               {url: "photos/gelato.jpg", lat: 37.065626, lon: 15.293360},
               {url: "photos/straciatella.jpg", lat: 37.065578, lon: 15.293172}]
    },
    noto: {
      center: {lat: 36.8924, lon: 15.0652, zoom: 11},
      photos: [{url: "photos/noto_1.jpg", lat: 36.8924, lon: 15.0652},
               {url: "photos/noto_alleys.jpg", lat: 36.8924, lon: 15.0652},
               {url: "photos/parking_spot.jpg", lat: 36.8924, lon: 15.0652}]
    },
    mtEtna: {
      center: {lat: 37.7510, lon: 14.9934, zoom: 10},
      photos: [{url: "photos/mtetna_hiking_1.jpg", lat: 37.7510, lon: 14.9934}]
    },
    augusta: {
      center: {lat: 37.2250, lon: 15.2217, zoom: 14.5},
      photos: [{url: "photos/via_megara.jpg", lat: 37.2250, lon: 15.2217},
               {url: "photos/sign_augusta.jpg", lat: 37.2250, lon: 15.2217},
               {url: "photos/via_epicarmo.jpg", lat: 37.2281196, lon: 15.2207916}]
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
