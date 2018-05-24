
var infoBox;

var geocoder;

var temp;

geocoder = new google.maps.Geocoder();

var polylineOptionsActual = {
    strokeColor: '#7974e1',
    strokeOpacity: 0.7,
    strokeWeight: 5
};

var polylineOptionsPlan = {
    strokeColor: '#7974e1',
    strokeOpacity: 0.7,
    strokeWeight: 5
};
/* An InfoBox is like an info window, but it displays
 * under the marker, opens quicker, and has flexible styling.
 * @param {GLatLng} latlng Point to place bar at
 * @param {Map} map The map on which to display this InfoBox.
 * @param {Object} opts Passes configuration options - content,
 *   offsetVertical, offsetHorizontal, className, height, width
 */
var directionDisplay;
var directionsService = new google.maps.DirectionsService();


function InfoBox(opts) {
    google.maps.OverlayView.call(this);
    this.latlng_ = opts.latlng;
    this.map_ = opts.map;
    this.text = opts.text;

    this.offsetVertical_ = -385;
    this.offsetHorizontal_ = -5;
    this.height_ = 320;
    this.width_ = 620;

    var me = this;
    this.boundsChangedListener_ =
        google.maps.event.addListener(this.map_, "bounds_changed", function() {
            return me.panMap.apply(me);
        });

    // Once the properties of this OverlayView are initialized, set its map so
    // that we can display it.  This will trigger calls to panes_changed and
    // draw.
    this.setMap(this.map_);
}




/* InfoBox extends GOverlay class from the Google Maps API
 */
InfoBox.prototype = new google.maps.OverlayView();

/* Creates the DIV representing this InfoBox
 */
InfoBox.prototype.remove = function() {
    if (this.div_) {
        this.div_.parentNode.removeChild(this.div_);
        this.div_ = null;
    }
};




/* Redraw the Bar based on the current projection and zoom level
 */
InfoBox.prototype.draw = function() {
    // Creates the element if it doesn't exist already.
    this.createElement();
    if (!this.div_) return;

    // Calculate the DIV coordinates of two opposite corners of our bounds to
    // get the size and position of our Bar
    var pixPosition = this.getProjection().fromLatLngToDivPixel(this.latlng_);
    if (!pixPosition) return;

    // Now position our DIV based on the DIV coordinates of our bounds
    this.div_.style.width = this.width_ + "px";
    this.div_.style.left = (pixPosition.x + this.offsetHorizontal_) + "px";
    this.div_.style.height = this.height_ + "px";
    this.div_.style.top = (pixPosition.y + this.offsetVertical_) + "px";
    this.div_.style.display = 'block';
};



/* Creates the DIV representing this InfoBox in the floatPane.  If the panes
 * object, retrieved by calling getPanes, is null, remove the element from the
 * DOM.  If the div exists, but its parent is not the floatPane, move the div
 * to the new pane.
 * Called from within draw.  Alternatively, this can be called specifically on
 * a panes_changed event.
 */
InfoBox.prototype.createElement = function() {
    var panes = this.getPanes();
    var div = this.div_;
    var new_address = '';

    if (!div) {
        // This does not handle changing panes.  You can set the map to be null and
        // then reset the map to move the div.
        div = this.div_ = document.createElement("div");
        div.style.border = "0px none";
        div.style.position = "absolute";
        div.style.background = "url('http://elasnas.2ptest.in/assets/images/big_balon_back.png')";
        div.style.width = this.width_ + "px";
        div.style.height = this.height_ + "px";
        div.setAttribute("name", "itsme");
        div.setAttribute("id", "itsme2");
        var contentDiv = document.createElement("div");
        contentDiv.style.padding = "30px"
        contentDiv.innerHTML = "<div id=\"big_balon\"> 	<table style=\"margin-top:-20px; margin-left:5px;text-align:left;\" width=\"550\" height=\"255\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"> 	<tr> 	<td style=\"width:200px; height:255px;\"> 	<table width=\"200\" style=\"height:255px;\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"> 	<tr style=\"height:216px;\"> 	<td align=\"left\" valign=\"top\" style=\"height:216px;\"> 	<br /> 	<p> 	<strong> 	Shell " + this.text + "	</strong> 	</p> 	<p> 	Grube-Karl-Strasse 10 	</p> 	<p> 	73312 Geislingen/Steige 	</p> 	<p> 	MobilInr. 01511 822 63 80 	</p> 	<p> 	Fon (07331) 30 38 99 	</p> 	<p> 	Fax (07331) 30 50 71 	</p> 	<br> 	<img  src=\"images/hr.jpg\"> 	<br> 	<p> 	<br> 	24 Stunden Station 	</p> 	</th> 	</tr> 	<tr style=\"height:10px;\"> 	<td valign=\"top\" style=\"height:10px;\"> 	<div class=\"line02\"> 	</div> 	</th> 	</tr> 	<tr style=\"height:24px;\"> 	<td align=\"left\" valign=\"top\" style=\"height:24px;\"> 	<div id=\"btn_s_balon\"> 	<p class=\"btn_s_title\"> 	<a href=\"http://www.shell.de/\" target=\"_blank\"> 	Shell Homepage 	</a> 	</p> 	</div> 	</th> 	</tr> 	</table> 	</td> 	<td valign=\"top\" style=\"width:10px;\"> 	</td> 	<td align=\"left\" valign=\"top\" style=\"width:170px;\"> 	<a href=\"example.jpg\" onclick='Slimbox.open(\"images/inner_pages/ShellI_balon_inner/big/Shell_Geislingen_01.jpg\", \"Shell -  Geislingen , Grube-Karl-Strasse 10\");return false' rel=\"lightbox\" > 	<img class=\"border_w\" src=\"images/inner_pages/ShellI_balon_inner/thumbs/Shell_Geislingen_01.jpg\" width=\"163\" height=\"102\" alt=\"Shell -  Geislingen , Grube-Karl-Strasse 10\" title=\"Shell -  Geislingen , Grube-Karl-Strasse 10\" > 	</a> 	<p> 	<strong> 	Services : 	</strong> 	</p> 	<p> 	Flottenkarten, CLUBSMART, Truck Diesel, V-Power Diesel, V-Power 	</p> 	</td> 	<td align=\"left\" valign=\"top\" style=\"width:170px;\"> 	<a href=\"example.jpg\" onclick='Slimbox.open(\"images/inner_pages/Stationsleiter_balon/big/Shell_Geislingen.JPG\", \"Tankstellenleiter : Andrea Kessel\");return false' rel=\"lightbox\" > 	<img class=\"border_w\" src=\"images/inner_pages/Stationsleiter_balon/thumbs/Shell_Geislingen.JPG\" width=\"163\" height=\"102\" title=\"Tankstellenleiter : Andrea Kessel\" alt=\"Tankstellenleiter : Andrea Kessel\" > 	</a> 	<p> 	<strong> 	Tankstellenleiter : 	</strong> 	</p> 	<p> 	Andrea Kessel </p> </td> </tr> </table> </div> ";
        var topDiv = document.createElement("div");
        topDiv.style.textAlign = "right";
        var closeImg = document.createElement("img");
        closeImg.style.paddingTop = "8px";
        closeImg.style.paddingRight = "10px";
        closeImg.style.width = "16px";
        closeImg.style.height = "16px";
        closeImg.style.cursor = "pointer";
        closeImg.src = "images/inner_pages/close_btn.jpg";
        topDiv.appendChild(closeImg);

        function removeInfoBox(ib) {
            return function() {
                ib.setMap(null);
            };
        }

        google.maps.event.addDomListener(closeImg, 'click', removeInfoBox(this));

        div.appendChild(topDiv);
        div.appendChild(contentDiv);
        div.style.display = 'none';
        panes.floatPane.appendChild(div);
        this.panMap();
    } else if (div.parentNode != panes.floatPane) {
        // The panes have changed.  Move the div.
        div.parentNode.removeChild(div);
        panes.floatPane.appendChild(div);
    } else {
        // The panes have not changed, so no need to create or move the div.
    }
}


/* Pan the map to fit the InfoBox.
 */
InfoBox.prototype.panMap = function() {
    // if we go beyond map, pan map
    var map = this.map_;
    var bounds = map.getBounds();
    if (!bounds) return;

    // The position of the infowindow
    var position = this.latlng_;

    // The dimension of the infowindow
    var iwWidth = this.width_;
    var iwHeight = this.height_;

    // The offset position of the infowindow
    var iwOffsetX = this.offsetHorizontal_;
    var iwOffsetY = this.offsetVertical_;

    // Padding on the infowindow
    var padX = 40;
    var padY = 40;

    // The degrees per pixel
    var mapDiv = map.getDiv();
    var mapWidth = mapDiv.offsetWidth;
    var mapHeight = mapDiv.offsetHeight;
    var boundsSpan = bounds.toSpan();
    var longSpan = boundsSpan.lng();
    var latSpan = boundsSpan.lat();
    var degPixelX = longSpan / mapWidth;
    var degPixelY = latSpan / mapHeight;

    // The bounds of the map
    var mapWestLng = bounds.getSouthWest().lng();
    var mapEastLng = bounds.getNorthEast().lng();
    var mapNorthLat = bounds.getNorthEast().lat();
    var mapSouthLat = bounds.getSouthWest().lat();

    // The bounds of the infowindow
    var iwWestLng = position.lng() + (iwOffsetX - padX) * degPixelX;
    var iwEastLng = position.lng() + (iwOffsetX + iwWidth + padX) * degPixelX;
    var iwNorthLat = position.lat() - (iwOffsetY - padY) * degPixelY;
    var iwSouthLat = position.lat() - (iwOffsetY + iwHeight + padY) * degPixelY;

    // calculate center shift
    var shiftLng =
        (iwWestLng < mapWestLng ? mapWestLng - iwWestLng : 0) +
        (iwEastLng > mapEastLng ? mapEastLng - iwEastLng : 0);
    var shiftLat =
        (iwNorthLat > mapNorthLat ? mapNorthLat - iwNorthLat : 0) +
        (iwSouthLat < mapSouthLat ? mapSouthLat - iwSouthLat : 0);

    // The center of the map
    var center = map.getCenter();

    // The new map center
    var centerX = center.lng() - shiftLng;
    var centerY = center.lat() - shiftLat;

    // center the map to the new shifted center
    map.setCenter(new google.maps.LatLng(centerY, centerX));

    // Remove the listener after panning is complete.
    google.maps.event.removeListener(this.boundsChangedListener_);
    this.boundsChangedListener_ = null;
};

var startIcon = new google.maps.MarkerImage('http://elasnas.2ptest.in/assets/images/start.png');


function initialize() {

    directionsDisplay = new google.maps.DirectionsRenderer({
        polylineOptions: polylineOptionsActual
    });


    var myOptions = {
        zoom: 14,
        center: new google.maps.LatLng(42.69674, 23.32220),
       // mapTypeId: google.maps.MapTypeId.ROADMAP,
        sensor: 'true',
      //  mapTypeControl: false,
        draggableCursor: 'default',
        draggingCursor: 'pointer',
        mapTypeControl: true,
        mapTypeControlOptions:{style:
        google.maps.MapTypeControlStyle.DROPDOWN_MENU},
        mapTypeId: google.maps.MapTypeId.ROADMAP

    }


    var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
    directionsDisplay.setMap(map);


    var companyLogo = new google.maps.MarkerImage('http://elasnas.2ptest.in/assets/images/boardpin.png',
        new google.maps.Size(100, 100)


    );
    var companyShadow = new google.maps.MarkerImage('http://elasnas.2ptest.in/assets/images/shadow_s_marker.png',
        new google.maps.Size(100, 100),
        new google.maps.Point(0, 0),
        new google.maps.Point(24, 83)
    );



    var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            
    var locations = [{
        lat: 42.68674,
        lng: 23.33220
    }, {
        lat: 42.67674,
        lng: 23.34220
    }, {
        lat: 42.69674,
        lng: 23.32220
    }, {
        lat: 42.70674,
        lng: 23.35220
    }, {
        lat: 42.69674,
        lng: 23.31220
    }, {
        lat: 42.69674,
        lng: 23.30220
    }];

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            map: map,
            icon: companyLogo, 
            shadow: companyShadow,
            label: labels[i % labels.length]
        });
    });
            
    var markerCluster = new MarkerClusterer(map, markers, {
        imagePath: 'http://elasnas.2ptest.in/assets/images/m'
    });          
    
    
   var it = markers.values();
    var entry;
    var infoboxes = [];
    while (!(entry = it.next()).done) {
        google.maps.event.addListener(entry.value, "click", function(e) {
            var itbox = infoboxes.values();
            var entrybox;
            while (!(entrybox = itbox.next()).done) {
                entrybox.value.setMap(null);
            }
            var infobox = new InfoBox({
                latlng: e.latLng,
                map: map,
                text: 'test'
            });
            infoboxes.push(infobox);
        });

    }           
     

    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
    
        infoWindow.setPosition(pos);
        infoWindow.setContent('Location found.');
        map.setCenter(pos);
      }, function() {
        handleLocationError(true, infoWindow, map.getCenter());
      });
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
    
   var update_timeout = null;


  google.maps.event.addListener(map, 'dblclick', function(event) {       
     // clearTimeout(update_timeout);
  });   




  google.maps.event.addListener(map, 'click', function(event) {
      getAddress(event.latLng);
      if(typeof temp != 'undefined') temp.setMap(null);
      temp = new google.maps.Marker({
            position: event.latLng,
            map: map,
            icon: companyLogo, 
            shadow: companyShadow
        });      
  });



  var input = (document.getElementById('place'));
  var autocomplete = new google.maps.places.Autocomplete(input);

   autocomplete.bindTo('bounds', map);



   var infowindow = new google.maps.InfoWindow();
          var temp = new google.maps.Marker({
            map: map,
            anchorPoint: new google.maps.Point(0, -29),
            icon: companyLogo, 
            shadow: companyShadow
          });
             
 autocomplete.addListener('place_changed', function() {
          infowindow.close();
          temp.setVisible(false);
          var place = autocomplete.getPlace();
          if (!place.geometry) {
            window.alert("Autocomplete's returned place contains no geometry");
            return;
          }

          // If the place has a geometry, then present it on a map.
          if (place.geometry.viewport) {
            map.fitBounds(place.geometry.viewport);
          } else {
            map.setCenter(place.geometry.location);
            map.setZoom(17);  // Why 17? Because it looks good.
          }
        //  temp.setIcon(/** @type {google.maps.Icon} */({
        /*    url: place.icon,
            size: new google.maps.Size(71, 71),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(17, 34),
            scaledSize: new google.maps.Size(35, 35)
          })); */
          temp.setPosition(place.geometry.location);
          temp.setVisible(true);

          var address = '';
          if (place.address_components) {
            address = [
              (place.address_components[0] && place.address_components[0].short_name || ''),
              (place.address_components[1] && place.address_components[1].short_name || ''),
              (place.address_components[2] && place.address_components[2].short_name || '')
            ].join(' ');
          }

          infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + address);
          infowindow.open(map, temp);
        });





   
}






function getAddress(latLng) {
    document.getElementById("coords").value = latLng;
    geocoder.geocode( {'latLng': latLng},
      function(results, status) {
        if(status == google.maps.GeocoderStatus.OK) {
          if(results[0]) {
            document.getElementById("place").value = results[0].formatted_address;
          }
          else {
            document.getElementById("place").value = "No results";
          }
        }
        else {
          document.getElementById("place").value = status;
        }
      });
    }   
        
var startIcon = new google.maps.MarkerImage('http://elasnas.2ptest.in/assets/images/start.png');



function calcRoute() {
    var start = new_address;
    var end = lat_ +", "+lon_;

    var request = {
        origin: start,
        destination: end,
        travelMode: google.maps.DirectionsTravelMode.DRIVING
    };

    directionsService.route(request, function(response, status) {
        if (status == google.maps.DirectionsStatus.OK) {

            directionsDisplay.setDirections(response);

            directionsDisplay.setOptions({
                suppressMarkers: true
            });

        } else {
            alert('Nothing found');
        }
    });

}

function runScript(e) {

    if (e.keyCode == 13) {

        var start = new_address;

        var end = lat_ +", "+lon_;

        var request = {
            origin: start,
            destination: end,
            travelMode: google.maps.DirectionsTravelMode.DRIVING
        };

        directionsService.route(request, function(response, status) {
            if (status == google.maps.DirectionsStatus.OK) {
                directionsDisplay.setDirections(response);
                directionsDisplay.setOptions({
                    suppressMarkers: true
                });

            } else {
                alert('Nothing found');
            }
        });

    }
}

function findParentNode(parentName, childObj) {
    var testObj = childObj.parentNode;
    var count = 1;
    while (testObj.getAttribute('name') != parentName) {
        if (testObj.getAttribute('name') == 'itsme') {
            testObj.style.marginTop = '-26px';
            testObj.style.background = "url('http://elasnas.2ptest.in/assets/images/big_balon_back.png')";
            testObj.style.height = '230px';
            testObj.style.width = '384px';

        };
        testObj = testObj.parentNode;
        count++;


    }
}