(function () {

  // map options
  var options = {
        zoomSnap: .5,
        center: [42.126900, -86.473867],
        zoom: 5,
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
    samanthaHouse: {
      center: {lat: 42.2401379, lon: -85.7326861, zoom: 15},
      photos: [{url: "photos/IMG_1835.jpg", lat: 42.2401379, lon: -85.7326861},
               {url: "photos/IMG_1844.jpg", lat: 42.2401379, lon: -85.7326861},
               {url: "photos/IMG_1843.jpg", lat: 42.2401379, lon: -85.7326861},
               {url: "photos/IMG_1842.jpg", lat: 42.2401379, lon: -85.7326861}]
    },
    bentonharbor: {
      center: {lat: 42.126900, lon: -86.473867, zoom: 15},
      photos: [{url: "photos/IMG_1833.jpg", lat: 42.125135, lon: -86.476620},
               {url: "photos/IMG_1830.jpg", lat: 42.125135, lon: -86.476620},
               {url: "photos/IMG_1831.jpg", lat: 42.125135, lon: -86.476620},
               {url: "photos/IMG_1839.jpg", lat: 42.125135, lon: -86.476620},
               {url: "photos/IMG_1838.jpg", lat: 42.125135, lon: -86.476620},
               {url: "photos/IMG_1847.jpg", lat: 42.125135, lon: -86.476620},
               {url: "photos/IMG_1827.jpg", lat: 42.125135, lon: -86.476620}]
    },
    livery: {
      center: {lat: 42.118095, lon: -86.4558787, zoom: 15},
      photos: [{url: "photos/IMG_1833.jpg", lat: 42.118095, lon: -86.4558787}]
    },
    kalamazoo: {
      center: {lat: 42.2401379, lon: -85.7326861, zoom: 10},
      photos: [{url: "photos/IMG_1834.jpg", lat: 42.2401379, lon: -85.7326861},
               {url: "photos/IMG_1850.jpg", lat: 42.2401379, lon: -85.7326861},
               {url: "photos/IMG_1836.jpg", lat: 42.282908, lon: -85.6205599},
               {url: "photos/IMG_1837.jpg", lat: 42.282908, lon: -85.7326861},
               {url: "photos/IMG_1851.jpg", lat: 42.282908, lon: -85.7326861},
               {url: "photos/IMG_1852.jpg", lat: 42.2565765, lon: -85.5752177}]
    },
    raceday: {
      center: {lat: 42.126900, lon: -86.473867, zoom: 15},
      photos: [{url: "photos/IMG_1862.jpg", lat: 42.126180, lon: -86.475638},
               {url: "photos/IMG_1870.jpg", lat: 42.126180, lon: -86.475638},
               {url: "photos/IMG_1871.jpg", lat: 42.126180, lon: -86.475638},
               {url: "photos/IMG_1864.jpg", lat: 42.1260012, lon: -86.4671076},
               {url: "photos/IMG_1827.jpg", lat: 42.1260012, lon: -86.4671076},
               {url: "photos/IMG_1895.jpg", lat: 42.1260012, lon: -86.4671076},
               {url: "photos/IMG_1868.jpg", lat: 42.125135, lon: -86.476620},
               {url: "photos/IMG_1865.jpg", lat: 42.125135, lon: -86.476620},
             ]
    },
    terrahaute: {
      center: {lat: 39.4667056, lon: -87.4088492, zoom: 15},
      photos: [{url: "photos/IMG_1859.jpg", lat: 39.4667056, lon: -87.4088492},
               {url: "photos/IMG_1860.jpg", lat: 39.4667056, lon: -87.4088492},
               {url: "photos/IMG_1861.jpg", lat: 39.4667056, lon: -87.4088492}]
    },
    vincennes: {
      center: {lat: 38.6811435, lon: -87.5340393, zoom: 15},
      photos: [{url: "photos/IMG_1853.jpg", lat: 38.6811435, lon: -87.5340393},
               {url: "photos/IMG_1854.jpg", lat: 38.6811435, lon: -87.5340393},
               {url: "photos/IMG_1855.jpg", lat: 38.6811019, lon: -87.5340393},
               {url: "photos/IMG_1856.jpg", lat: 38.6841238, lon: -87.5227553},
               {url: "photos/IMG_1857.jpg", lat: 38.6841238, lon: -87.5227553}]
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
