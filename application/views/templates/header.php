<?php
defined('BASEPATH') OR exit('No direct script access allowed');
?><!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Welcome to CodeIgniter</title>
    <script src="//cdnjs.cloudflare.com/ajax/libs/less.js/2.7.1/less.min.js"></script>
    <link rel="stylesheet" href="<?php echo base_url("assets/bootstrap.css"); ?>" />
    <link rel="stylesheet" href="<?php echo base_url("assets/css/slimbox2.css"); ?>" />
    <script type="text/javascript" src="<?php echo base_url("assets/js/jquery-3.1.0.min.js"); ?>"></script>
    <script type="text/javascript" src="<?php echo base_url("assets/js/bootstrap.js"); ?>"></script>
    <script type="text/javascript" src="<?php echo base_url("assets/js/MooTools-Core-1.6.0.js"); ?>"></script>
    <script type="text/javascript" src="<?php echo base_url("assets/js/slimbox2.js"); ?>"></script>

    <script src="http://maps.google.com/maps/api/js?key=AIzaSyC9A2DAhS0WKcaTLAxs9VmFKI_9KclUHG4&libraries=places" type="text/javascript"></script>
    <script type="text/javascript" src="<?php echo base_url("assets/js/markerclusterer.js"); ?>"></script>

    <script type="text/javascript" src="<?php echo base_url("assets/js/maps.js"); ?>"></script>

    <style>
        html { height: 100% }
        body { height: 100%; margin: 0px; padding: 0px }
        #container { width: 100%; height: 100% }
        #map_canvas { width: 100%; height: 100% }
        #new_marker { position: fixed; top: 0px; left: 0px; background-color: #fff; border: 1px #000 Solid; padding: 0px; width:270px;  }


        //AIzaSyDhGzm2UJhhXLxVq9mWasy74zgzm7HDzqA


          #place {
              background-color: #fff;
              font-family: Roboto;
              font-size: 15px;
              font-weight: 300;
              margin-left: 12px;
              padding: 0 11px 0 13px;
              text-overflow: ellipsis;
              width: 300px;
          }

        #place:focus {
            border-color: #4d90fe;
        }

        .pac-container {
            font-family: Roboto;
        }

    </style>

</head>
<body onload="initialize()">