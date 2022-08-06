// Array of Ukraine borders to limit map

const UKRAINE_BORDERS = {
  north: 52.45716331589633,
  south: 44.35509108069082,
  west: 22.126026781487873,
  east: 40.26446312519149,
};

// initialization of map on JS 

function initMap() {
  var opt = {
    mapId: "163443a8235e0622", // style of map
    center: {lat: 48.01282806886982, lng: 37.79489186207511}, //center on Donetsk
    restriction: {
      latLngBounds: UKRAINE_BORDERS,
      strictBounds: false,
    }, //limiting the map
    zoom: 10, 
    streetViewControl: false, //turn off the streetView
    fullscreenControl: false, //turn off the fullScreen buttong
  }



var  myMap = new google.maps.Map(document.getElementById("map"), opt); 

//downloading an occupied territories on the map by using the KML file  
var occupied_territories = new google.maps.KmlLayer({
  url: "https://www.google.com/maps/d/kml?mid=1KYIXtwrL9RUFQ_g1Uz58HhKwYf8ZUxE&nl=1",
  map: myMap,
});

//downloading an destroyed bases on the map by using the KML file
var destroyedBases = new google.maps.KmlLayer({
  url: "https://www.google.com/maps/d/u/0/kml?mid=1hw6Vr5865WT7T9hTAaWKSfoRauHYU_s",
  map: myMap,
});
}





