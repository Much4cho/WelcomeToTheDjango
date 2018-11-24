function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: {
            lng: 19.6741906,
            lat: 52.5834097
        },
        disableDefaultUI: true,
        styles: [
            {
            "elementType": "labels.text",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "landscape.natural",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#f5f5f2"
            }, {
                "visibility": "on"
            }]
        }, {
            "featureType": "administrative",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "transit",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "poi.attraction",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "landscape.man_made",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#ffffff"
            }, {
                "visibility": "on"
            }]
        }, {
            "featureType": "poi.business",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "poi.medical",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "poi.place_of_worship",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "poi.school",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "poi.sports_complex",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [{
                "color": "#ffffff"
            }, {
                "visibility": "simplified"
            }]
        }, {
            "featureType": "road.arterial",
            "stylers": [{
                "visibility": "simplified"
            }, {
                "color": "#ffffff"
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "labels.icon",
            "stylers": [{
                "color": "#ffffff"
            }, {
                "visibility": "off"
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "road.arterial",
            "stylers": [{
                "color": "#ffffff"
            }]
        }, {
            "featureType": "road.local",
            "stylers": [{
                "color": "#ffffff"
            }]
        }, {
            "featureType": "poi.park",
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "poi",
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "water",
            "stylers": [{
                "color": "#71c8d4"
            }]
        }, {
            "featureType": "landscape",
            "stylers": [{
                "color": "#e5e8e7"
            }]
        }, {
            "featureType": "poi.park",
            "stylers": [{
                "color": "#8ba129"
            }]
        }, {
            "featureType": "road",
            "stylers": [{
                "color": "#ffffff"
            }]
        }, {
            "featureType": "poi.sports_complex",
            "elementType": "geometry",
            "stylers": [{
                "color": "#c7c7c7"
            }, {
                "visibility": "off"
            }]
        }, {
            "featureType": "water",
            "stylers": [{
                "color": "#a0d3d3"
            }]
        }, {
            "featureType": "poi.park",
            "stylers": [{
                "color": "#91b65d"
            }]
        }, {
            "featureType": "poi.park",
            "stylers": [{
                "gamma": 1.51
            }]
        }, {
            "featureType": "road.local",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [{
                "visibility": "on"
            }]
        }, {
            "featureType": "poi.government",
            "elementType": "geometry",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "landscape",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "road",
            "elementType": "labels",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{
                "visibility": "simplified"
            }]
        }, {
            "featureType": "road.local",
            "stylers": [{
                "visibility": "simplified"
            }]
        }, {
            "featureType": "road"
        }, {
            "featureType": "road"
        }, {
            "featureType": "road.highway"
        }]

    });

    var flightPlanCoordinates = [
        {
            lng: 19.66229450809135,
            lat: 52.57891009888033
        },
        {
            lng: 19.66245442837345,
            lat: 52.58279706574544
        },
        {
            lng: 19.668291519149363,
            lat: 52.58265131070942
        },
        {
            lng: 19.66845143944829,
            lat: 52.58512908043306
        },
        {
            lng: 19.673249048298118,
            lat: 52.58508049806318
        },
        {
            lng: 19.67316908814871,
            lat: 52.58328291237194
        }
        ];
    
         var symbolOne = {
          path: 'M -2,0 0,-2 2,0 0,2 z',
          strokeColor: '#0056b3',
          fillColor: '#0056b3',
          fillOpacity: 1
        };

        var symbolThree = {
          path: 'M -2,-2 2,2 M 2,-2 -2,2',
          strokeColor: '#0056b3',
          strokeWeight: 4
        };
    
     var icon = {
        url: "/static/img/node.png", // url
        scaledSize: new google.maps.Size(50, 50), // scaled size
        origin: new google.maps.Point(0,0), // origin
        anchor: new google.maps.Point(25, 25) // anchor
    };
    
    var flightPath = new google.maps.Polyline({
        path: flightPlanCoordinates,
        geodesic: true,
        strokeColor: '#007bff',
        strokeOpacity: 1.0,
        strokeWeight: 4,
    });

        
   

    flightPath.setMap(map);
    var iconBase = '/static/img/';
        var icons = {
          parking: {
            icon: icon
              
          },
          library: {
            icon: icon
          },
          info: {
            icon: icon
          }
        };

        var vertices = [
          {
            position: new google.maps.LatLng(52.57891009888033, 19.66229450809135),
            type: 'info',
          }, 
            {
            position: new google.maps.LatLng(52.58328291237194, 19.67316908814871),
            type: 'library',
                
        
          }
        ];

        // Create markers.
        vertices.forEach(function(vertex) {
          var marker = new google.maps.Marker({
            position: vertex.position,
            icon: icons[vertex.type].icon,
            map: map,
          });
        });
}

