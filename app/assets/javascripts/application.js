// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap
//= require ui
//= require jquery.fancybox
//= require carouFredSel
//= require easing.min
//= require easy-pie-chart
//= require excanvas
//= require flexslider-min
//= require modernizr.custom
//= require grid
//= require html5
//= require isotope.min
//= require jflickrfeed.min
//= require jquery.form
//= require mypassion
//= require nicescroll.min
//= require sticky
//= require superfish
//= require totop
//= require sugar
//= require parsley
//= require_self

$(document).ready(function() {
  $('form[data-validate="parsley"]').parsley();

  $('.nav-toggle > a').on('click', function() {
    jQuery('.mobile-menu').stop(true, true).slideToggle(500);
  });
  jQuery('.mobile-menu ul li a').prepend('<i class="icon-right-dir"></i>');
});
