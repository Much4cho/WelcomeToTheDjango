var map;
var vertices = [];
var node_icon;
var path_icon;
var edges = [];
var currentPath;

var first;
var second;

function initMap() {
    path_icon = {
        url: "/static/img/path_node.svg", // url
        scaledSize: new google.maps.Size(50, 50), // scaled size
        origin: new google.maps.Point(0, 0), // origin
        anchor: new google.maps.Point(25, 25) // anchor
    };

    node_icon = {
        url: "/static/img/node.svg", // url
        scaledSize: new google.maps.Size(12, 12), // scaled size
        origin: new google.maps.Point(0, 0), // origin
        anchor: new google.maps.Point(6, 6) // anchor
    };

    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: {
            lng: 19.683117,
            lat: 52.588676,
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

    //    map.addListener('click', function (event) {
    //        var latitude = event.latLng.lat();
    //        var longitude = event.latLng.lng();
    //        addVertex(latitude, longitude);
    //    });

   

    verticiesPos.forEach(function (vertex) {
        addVertex(vertex.lat, vertex.lng, vertex.id);
    });

    vertices.forEach(function (vertex) {
        vertex.addListener('click', function (event) {
            findPath(this)
        });
    })
    
}


function findPath(vertex) {
    if (first == undefined) {
        vertices.forEach(function (vertex) {
            vertex.setIcon(node_icon)   
        })
        first = vertex;
        first.setIcon(path_icon)
    } else {
        second = vertex;

        find(first.base_id, second.base_id)
        
        second.setIcon(path_icon)
        
        first = undefined;
        second = undefined;
    }
}

function find(start, end) {
    var height = $('#height').val()
    var width = $('#width').val()
    var weight = $('#weight').val()
    var turningRadius = $('#turningRadius').val()
    
    if(!height) {
        alert('You need to fill height field.')
        first = undefined;
        second = undefined;
        vertices.forEach(function (vertex) {
            vertex.setIcon(node_icon)   
        })
        return
    }
    if(!width) {
        alert('You need to fill width field.')
        first = undefined;
        second = undefined;
        vertices.forEach(function (vertex) {
            vertex.setIcon(node_icon)   
        })
        return
    }
    if(!weight) {
        alert('You need to fill weight field.')
        first = undefined;
        second = undefined;
        vertices.forEach(function (vertex) {
            vertex.setIcon(node_icon)   
        })
        return
    }
    if(!turningRadius) {
        alert('You need to fill radius field.')
        first = undefined;
        second = undefined;
        vertices.forEach(function (vertex) {
            vertex.setIcon(node_icon)   
        })
        return
    }
    
    $.ajax({
        type: 'POST',
        url: '/data/take/',
        data: {
            'start': start,
            'end': end,
            'height': height,
            'weight': weight,
            'width': width,
            'radius': turningRadius,
        },
        success: function (data) {
            if (data)
                drawPath(data.split(","))
            else {
                if (currentPath){
                    currentPath.setMap(null)
                }
                
                first = undefined;
                second = undefined;
                vertices.forEach(function (vertex) {
                    vertex.setIcon(node_icon)   
                })
                alert("There's no path between selected nodes")
            }
                
        },
        error: function () {
            
            first = undefined;
            second = undefined;
            vertices.forEach(function (vertex) {
                vertex.setIcon(node_icon)   
            })
            alert("There's no path between selected nodes")
        }
    });
}

function fill() {
    var registration = $('#registration').val()
    $.ajax({
        type: 'POST',
        url: '/data/search2/',
        data: {
            'search': registration,
        },
        success: function (data) {
            data = JSON.parse(data)
            console.log("data", data)
            if(data.length == 1) {
                if(data[0].fields) {
                    
                $('#height').val(data[0].fields.Height)
                $('#width').val(data[0].fields.Width)
                $('#weight').val(data[0].fields.Weight)
                $('#turningRadius').val(data[0].fields.TurnAxis)
                }
            }
        },
        error: function (data) {
            console.log();
        }
    });
}



function add_edge(start, end) {
    $.ajax({
        type: 'POST',
        url: '/data/send/',
        processData: true,
        contentType: 'application/json\r\n',
        data: {
            'start': start,
            'end': end
        },
        success: function (data) {
//            alert(data);
        },
        error: function () {
            alert(-1);
        }
    });
}

function drawPath(paht_v) {
    var path = []
    
    paht_v.forEach(function(vertex){
        var v = vertices.find(function(v,n,a){
            return v.base_id == vertex
        })
        
        path.push({lat: v.getPosition().lat(), lng: v.getPosition().lng()})
    })
    
    var first = vertices.find(function(v,n,a){
            return v.base_id == paht_v[0]
        })
    
    var last = vertices.find(function(v,n,a){
            return v.base_id == paht_v[paht_v.length - 1]
        })
    console.log(path)
    if (currentPath)
        currentPath.setMap(null)
    currentPath = new google.maps.Polyline({
        path: path,
        geodesic: true,
        strokeColor: '#007bff',
        strokeOpacity: 1.0,
        strokeWeight: 4,
        map: map,
    });
    
}

function addVertex(lat, lng, id) {
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(lat, lng),
        map: map,
        icon: node_icon,
        title: "ID: " + id,
        base_id: id,
    });
    vertices.push(marker);
}

function saveVertices() {
    var log = ""
    vertices.forEach(function (vertex) {
        log += vertex.getPosition().lng() + ", " + vertex.getPosition().lat() + "\n"
    })
}
//
//function addEdges() {
//    var tmp = node_icon
//    tmp.scaledSize = new google.maps.Size(30, 30)
//
//    vertices.forEach(function (vertex) {
//        vertex.addListener('click', function (event) {
//            if (first == undefined) {
//                first = this;
//                first.setIcon(tmp)
//            } else {
//                second = this;
//                if(first.base_id == second.base_id) {
//                    first = undefined;
//                    second = undefined;
//                    return;
//                }
//                
//                
//                var flightPlanCoordinates = [
//                    {
//                        lat: first.getPosition().lat(),
//                        lng: first.getPosition().lng()
//                                },
//                    {
//                        lat: second.getPosition().lat(),
//                        lng: second.getPosition().lng()
//                                },
//                ];
//                tmp.scaledSize = new google.maps.Size(25, 25)
//                first.setIcon(node_icon)
//                var flightPath = new google.maps.Polyline({
//                    path: flightPlanCoordinates,
//                    geodesic: true,
//                    strokeColor: '#FF0000',
//                    strokeOpacity: 1.0,
//                    strokeWeight: 2,
//                    map: map,
//                });
//                add_edge(first.base_id, second.base_id)
//                edges.push(first.base_id + "," + second.base_id)
//
//                first = undefined;
//                second = undefined;
//
//            }
//        });
//    });
//}
