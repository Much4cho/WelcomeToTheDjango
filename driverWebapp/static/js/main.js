var map;
var vertices = [];
var node_icon;
var path_icon;


function initMap() {
    path_icon = {
        url: "/static/img/path_node.svg", // url
        scaledSize: new google.maps.Size(50, 50), // scaled size
        origin: new google.maps.Point(0, 0), // origin
        anchor: new google.maps.Point(25, 25) // anchor
    };
    
    node_icon = {
        url: "/static/img/node.svg", // url
        scaledSize: new google.maps.Size(20, 20), // scaled size
        origin: new google.maps.Point(0, 0), // origin
        anchor: new google.maps.Point(10, 10) // anchor
    };
    
    map = new google.maps.Map(document.getElementById('map'), {
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

    map.addListener('click', function (event) {
        var latitude = event.latLng.lat();
        var longitude = event.latLng.lng();
        addVertex(latitude, longitude);
    });

    drawPath(flightPlanCoordinates);
    
    vertices_pos.forEach(function (vertex) {
        addVertex(vertex.lat, vertex.lng);
    });
    
//    google.maps.event.addListener(map, 'zoom_changed', function() {
//        var zoom = map.getZoom();
//        markerWidth = (zoom/9)*20
//        markerHeight = (zoom/9)*34
//        vertices.forEach(function(vertex){
//            var tmp = node_icon
//            tmp.scaledSize = new google.maps.Size(markerWidth, markerHeight)
//            vertex.setIcon(tmp);
//        })
//        
//    });
    
}


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

function drawPath(vertices) {
    var flightPath = new google.maps.Polyline({
        path: vertices,
        geodesic: true,
        strokeColor: '#007bff',
        strokeOpacity: 1.0,
        strokeWeight: 4,
        map: map,
    });

    // first and last vertex img
    var marker = new google.maps.Marker({
        position: flightPlanCoordinates[0],
        map: map,
        icon: path_icon,
    });
    var marker = new google.maps.Marker({
        position: flightPlanCoordinates[flightPlanCoordinates.length - 1],
        map: map,
        icon: path_icon,
    });
}

function addVertex(lat, lng) {
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(lat, lng),
        map: map,
        icon: node_icon,
    });
    vertices.push(marker);
}
