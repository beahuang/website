"use strict";
/*global google*/

var map;
var centerPos = new google.maps.LatLng(42.339807,-71.089172);
var zoomLevel = 12;
function initialize() {
  var styles = [
    {
        "featureType": "poi",
        "stylers": [
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
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "water",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "transit",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "landscape",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.local",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "water",
        "stylers": [
            {
                "color": "#84afa3"
            },
            {
                "lightness": 52
            }
        ]
    },
    {
        "stylers": [
            {
                "saturation": -17
            },
            {
                "gamma": 0.36
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#3f518c"
            }
        ]
    },{
    "elementType": "labels",
    "stylers": [
    { "hue": "#405191" }
    ]
  },{
    "elementType": "labels.text.fill",
    "stylers": [
    { "color": "#FFFFFF" }
    ]
  },{
    "elementType": "labels.text.stroke",
    "stylers": [
    { "color": "#000000" }
    ]
  },
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
