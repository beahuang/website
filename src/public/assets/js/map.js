"use strict";
/*global google*/

var map;
var centerPos = new google.maps.LatLng(42.339807,-71.089172);
var zoomLevel = 12;
function initialize() {
  var styles =[
    {
        "featureType": "landscape.natural",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#e0efef"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "hue": "#1900ff"
            },
            {
                "color": "#badeea"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "geometry.fill"
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "lightness": 100
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off",
                "color": "#cad0c9"
            }
        ]
    },
    {
        "featureType": "water",
        "stylers": [
            {
                "color": "#3e5068"
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "lightness": 700
            }
        ]
    }
];
var mapOptions = {
    center: centerPos,
    zoom: zoomLevel
};
map = new google.maps.Map( document.getElementById("map-canvas"), mapOptions );
var locations = [
["Boston", 42.339807,-71.089172],
["New York", 40.7699171,-73.770243]
];
  // var image = "trans-icon.png";

  for (var i = 0; i < locations.length; i++) {
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[i][1], locations[i][2]),
      title: locations[i][0],
      map: map
      // ,icon: image
  });
}
var styledMap = new google.maps.StyledMapType( styles, {name: "Styled Map"} );
map.mapTypes.set("map_style", styledMap);
map.setMapTypeId("map_style");
}
google.maps.event.addDomListener(window, "load", initialize);
