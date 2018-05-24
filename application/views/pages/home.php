
<div id="container" style="height:100%; width:100%;">
    <div id="map_canvas"></div>
</div>

<script>

    if (!!window.EventSource) {
        var source = new EventSource('Send');
    } else {
        // Result to xhr polling :(
    }

    source.addEventListener('message', function(e) {
        var data = e.data;
        console.log(data);
    }, false);

</script>

