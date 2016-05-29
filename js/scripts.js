$(document).ready(function() {

    // magic line
    $(function() {

        var $el, leftPos, newWidth;
            $mainNav2 = $("#main_navigation_list");
        
        $mainNav2.append("<li id='magic_line'></li>");
        
        var $magicLineTwo = $("#magic_line");
        
        $magicLineTwo
            .width($(".current-page-item").width())
            .height($mainNav2.height())
            .css("left", $(".current-page-item a").position().left)
            .data("origLeft", $(".current-page-item a").position().left)
            .data("origWidth", $magicLineTwo.width())
            .data("origColor", $(".current-page-item a").attr("rel"));
                    
        $("#main_navigation_list a").hover(function() {
            $el = $(this);
            leftPos = $el.position().left;
            newWidth = $el.parent().width();
            $magicLineTwo.stop().animate({
                left: leftPos,
                width: newWidth,
                backgroundColor: $el.attr("rel")
            })
        }, function() {
            $magicLineTwo.stop().animate({
                left: $magicLineTwo.data("origLeft"),
                width: $magicLineTwo.data("origWidth")
            });    
        });
        
        /* for IE */
        $(".current-page-item a").mouseenter();
        
    }); 

    // modal functionality
    $(".see-more-icon").on("click", function(){
        $("#modal_apartment").css("display", "block");
    });
    $(".modal .close").on("click", function(){
        $(".modal").css("display", "none");
    });
    window.onclick = function(event) {
        if (event.target == $(".modal-content")) {
            $(".modal-content").css("display", "none");
        }
    }

    // to top button
    $(".to-top").on("click", function(){
        $("html").animate({ scrollTop: 0 }, "fast");//IE, FF
        $("body").animate({scrollTop:0}, "fast");//chrome
    });

    // mobile menu
    $('.dropdown-menu a').on('click', function(){
        $('.dropdown-menu ul').hide();
    });

    $(".dropdown-menu img").click(function(e){
      $(".dropdown-menu ul").toggle();
      e.stopPropagation(); 
    });

    $(document).click(function(){                   
      $(".dropdown-menu ul").hide();
    });


    // dropdown menu
    $(".realized-title").on("click", function(){
        $(".in-progress-title").removeClass('active');
        $(".in-progress").hide();
        $(".realized").show();
        $(".realized-title").addClass('active');
        
    });
    $(".in-progress-title").on("click", function(){
        $(".realized-title").removeClass('active');
        $(".realized").hide();
        $(".in-progress").show();
        $(".in-progress-title").addClass('active');
    });



}); // end of document.ready()


// google maps styles

var googleMapStyles = [
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#e9e9e9"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f5f5f5"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 29
            },
            {
                "weight": 0.2
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 18
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f5f5f5"
            },
            {
                "lightness": 21
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#dedede"
            },
            {
                "lightness": 21
            }
        ]
    },
    {
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#ffffff"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "saturation": 36
            },
            {
                "color": "#333333"
            },
            {
                "lightness": 40
            }
        ]
    },
    {
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f2f2f2"
            },
            {
                "lightness": 19
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#fefefe"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#fefefe"
            },
            {
                "lightness": 17
            },
            {
                "weight": 1.2
            }
        ]
    }
]

// google maps
function initMap() {
    var mapDiv = document.getElementById("map");
    var myLatLng = {lat: 44.540, lng: -78.546};
    var styledMap = new google.maps.StyledMapType(googleMapStyles, {name: "Styled Map"});
    var mapOptions = {
        zoom: 12,
        center: myLatLng,
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, "map_style"]
        }
    };
    var map = new google.maps.Map(mapDiv, mapOptions);
    map.mapTypes.set("map_style", styledMap);
    map.setMapTypeId("map_style");

    var markerImage = {
        url: "images/map_marker.png",
        // This marker is 20 pixels wide by 32 pixels high.
        size: new google.maps.Size(32, 45),
        // The origin for this image is (0, 0).
        origin: new google.maps.Point(0, 0),
        // The anchor for this image is the base of the flagpole at (0, 32).
        anchor: new google.maps.Point(0, 32)
    };

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: markerImage
      });

}