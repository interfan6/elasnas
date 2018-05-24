<?php
defined('BASEPATH') OR exit('No direct script access allowed');

$route['Home'] = 'home/index';
$route['Send'] = 'send/index';

$route['default_controller'] = 'Home';
$route['404_override'] = '';
$route['translate_uri_dashes'] = FALSE;
$route['(:any)'] = 'pages/view/$1';

