<!DOCTYPE html>
<html> 
<head> 
    <title>Draw Circles using Google Map API</title> 
    <script src="https://maps.google.com/maps/api/js?sensor=false"></script>
    <!--PLEASE NOTE: As of June 22 2016, Google Maps require an API key.
    * GET YOUR API KEY FROM ... https://developers.google.com/maps/documentation/javascript/get-api-key
    * ONCE YOU GET THE KEY, REPLACE 'js?sensor=false' IN THE ABOVE URL WITH "js?key=YOUR_NEW_API_KEY".--> 
</head>

<body>
    <div id="mapContainer" style="width:750px;height:350px;"></div>
</body>

<script>
    // LOCATION IN LATITUDE AND LONGITUDE.
    var center = new google.maps.LatLng(19.0822507, 72.8812041);     

    function initialize() {
        // MAP ATTRIBUTES.
        var mapAttr = {
            center: center,
            zoom: 10,
            mapTypeId: google.maps.MapTypeId.TERRAIN
        };

        // THE MAP TO DISPLAY.
        var map = new google.maps.Map(document.getElementById("mapContainer"), mapAttr);

        var circle = new google.maps.Circle({
            center: center,
            map: map,
            radius: 10000,          // IN METERS.
            fillColor: '#FF6600',
            fillOpacity: 0.3,
            strokeColor: "#FFF",
            strokeWeight: 0         // DON'T SHOW CIRCLE BORDER.
        });
    }

    google.maps.event.addDomListener(window, 'load', initialize);
</script>
</html>