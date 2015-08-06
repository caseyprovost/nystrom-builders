/*
 * Copyright (c) 2013 MyPassion
 * Author: MyPassion
 * This file is made for CURRENT TEMPLATES
*/

// ----------------------------------------------------  CONTACT FORM
function submitForm(){
	"use strict";

	jQuery.post('plugin/sendmail.php',jQuery('#contactForm').serialize(), function(msg) {
		jQuery(".alertMessage").fadeOut(1).html(msg).fadeIn(1500);
	});
	// Hide previous response text
	jQuery(msg).remove();
	// Show response message
	contactform.prepend(msg);
}

jQuery(document).ready(function() {

	"use strict";

// -----------------------------------------------------  NOTIFICATIONS CLOSER
	jQuery('span.closer').click(function(e){
		e.preventDefault();

		jQuery(this).parent('.notifications').stop().slideToggle(500);
	});

// -----------------------------------------------------  FLEX SLIDER
	if(jQuery().flexslider) {
		jQuery('.flexslider').flexslider({
			animation: 'fade',
			controlNav: true,
			slideshowSpeed: 4000,
			animationDuration: 300
		});
		jQuery('.flex-next').html('<i class="icon-right-open"></i>');
		jQuery('.flex-prev').html('<i class="icon-left-open"></i>');
	}
// -----------------------------------------------------  TWITTER FEED
	if(jQuery().tweet) {
		jQuery('.twitterfeed').tweet({
			join_text: false,
			username: "formythemes", // Change username here
			modpath: '/assets/twitter/', // Twitter files path
			avatar_size: false, // you can active avatar
			count: 2, // number of tweets
			loading_text: "Loading tweets...",
			seconds_ago_text: "%d seconds ago: ",
			a_minutes_ago_text: "a minute ago: ",
			minutes_ago_text: "%d minutes ago: ",
			a_hours_ago_text: "an hour ago: ",
			hours_ago_text: "%d hours ago: ",
			a_day_ago_text: "a day ago: ",
			days_ago_text: "%d days ago: ",
			view_text: "view tweet on twitter"
		});
	}

// -----------------------------------------------------  MASONRY STYLE

	function masonry_iso(){
		var winwidth = jQuery(window).width();
		if(jQuery().isotope && winwidth > 767) {

			var gridwidth = (jQuery('.masonry-wrap-4columns').width() / 4);
			jQuery('.masonry-wrap-4columns').isotope({
				layoutMode: 'masonry',
				itemSelector: '.masonry',
				masonry: {
					columnWidth: gridwidth,
					gutterWidth: 10
				},
			});

			var gridwidth = (jQuery('.masonry-wrap-3columns').width() / 3);
			jQuery('.masonry-wrap-3columns').isotope({
				layoutMode: 'masonry',
				itemSelector: '.masonry',
				masonry: {
					columnWidth: gridwidth,
					gutterWidth: 10
				},
			});

			jQuery('.masonry-wrap-4columns, .masonry-wrap-3columns, .masonry-wrap-2columns').isotope('reLayout');
		}
	}

	masonry_iso();
	jQuery(window).resize(function(){masonry_iso();});
	jQuery(window).load(function(){masonry_iso();});

// -----------------------------------------------------  TIMELINE

	jQuery(".timeline li:nth-child(2n)").addClass("rightli");



// -----------------------------------------------------  EASY PIE CHART

jQuery('.percentage').easyPieChart({
	barColor: '#3C4852',
	trackColor: '#eee',
	scaleColor: '#eee',
	lineCap: 'butt',
	rotate: 0,
	lineWidth: 15,
	animate: 1500,
	size:150,
	onStep: function(value) {
		this.$el.find('span').text(Math.round(value));
	}
});


// -----------------------------------------------------  NICE SCROLL
	function niceScrollInit(){
		jQuery("html").niceScroll({
			preservenativescrolling: false,
			cursorwidth: '12px',
			cursorborder: 'none',
			cursorborderradius:'2px',
			cursorcolor:"#151515",
			autohidemode: false,
			background:"#666"
		});
	}

	if(jQuery(window).width() > 5979){ niceScrollInit(); }

// -----------------------------------------------------  FLICKR FEED
	jQuery('#basicuse').jflickrfeed({
		limit: 6,
		qstrings: {
			id: '52617155@N08'//'92335820@N08'
		},
		itemTemplate:
		'<li>' +
			'<a href="{{link}}" target="_blank"><img src="{{image_s}}" alt="{{title}}"  /></a>' +
		'</li>'
	});

// -----------------------------------------------------  STICKY MENU
	if(jQuery(window).width() > 979){jQuery(".topbar, .nav-wrap").sticky({ topSpacing: 0});}

// -----------------------------------------------------  SEARCH POPUP
	jQuery('.search-button a').click(function(){
		jQuery('.popup-search').stop(true,true).slideToggle(300);
		return false;
	});

// -----------------------------------------------------  DEVICE MENU TOGGLE



	jQuery('ul.sf-menu').superfish({
		delay:       100,                            // one second delay on mouseout
		speed:       'fast',                          // faster animation speed
		autoArrows:  true                            // disable generation of arrow mark-up
	});


	var logoHeight = parseInt(jQuery('.logo img').attr('height'));

	jQuery(window).bind('scroll',smallNav);

	function smallNav(){
		var $offset = $(window).scrollTop();
		var $windowWidth = $(window).width();
		var shrinkNum = 6;

		if($offset > 100 && $windowWidth >= 1000) {
			jQuery(window).unbind('scroll',smallNav);
			jQuery(window).bind('scroll',bigNav);
		}
	}

	function bigNav(){
		var $offset = $(window).scrollTop();
		var $windowWidth = $(window).width();
		var shrinkNum = 6;

		if($offset < 100 && $windowWidth >= 1000) {
			jQuery(window).bind('scroll',smallNav);
			jQuery(window).unbind('scroll',bigNav);
		}
	}

// -----------------------------------------------------  UI ELEMENTS
	jQuery( ".tabs" ).tabs();

	jQuery( ".accordion" ).accordion({
		heightStyle: "content"
	});

	jQuery("[rel=tooltip]").tooltip();
// -----------------------------------------------------  PORTFOLIO HOVER EFFECT
	var currentWindowWidth = jQuery(window).width();

  $(document).ready(function() {
    $('.portfolio_blocks_wrap .image-wrap').each(function(index, element) {
      var imageLink = $(element).find('.image-link');
      var currentImage = imageLink.find('img[data-timeline="after"]');
      var hoverImage = imageLink.find('img[data-timeline="before"]');

      $(element).mouseenter(function(e) {
        currentImage.hide();
        hoverImage.show();
      }).mouseleave(function(e) {
        currentImage.show();
        hoverImage.hide();
      });
    });
  });

// ----------------------------------------------------- ANIMATIONS

  jQuery('.og-grid li').each(function(i){
  	var popupItem = jQuery(this)
  	if (!popupItem.hasClass('mypassion-animation')) {
  		setTimeout(function(){ popupItem.addClass('mypassion-animation') }, (i * 200));
  	}
  });


  jQuery('.blog_blocks_wrap .item').each(function(i){
  	var popupItem = jQuery(this)
  	if (!popupItem.hasClass('mypassion-animation')) {
  		setTimeout(function(){ popupItem.addClass('mypassion-animation') }, (i * 200));
  	}
  });

  jQuery('.service-blocks-wrap-2 li').each(function(i){
  	var popupItem = jQuery(this)
  	if (!popupItem.hasClass('mypassion-animation')) {
  		setTimeout(function(){ popupItem.addClass('mypassion-animation') }, (i * 200));
  	}
  });

	jQuery(this).each(function(i){
		var popupItem = jQuery(this)
		if (!popupItem.hasClass('mypassion-animation')) {
			setTimeout(function(){ popupItem.addClass('mypassion-animation') }, (i * 200));
		}
	});


// -----------------------------------------------------  SCROLL TO TOP

	if(jQuery(window).width() > 979){ jQuery().UItoTop({ easingType: 'easeOutQuart' }); }

	jQuery("a[href='#top']").click(function() {
		jQuery("html, body").animate({ scrollTop: 0 }, "slow");
		return false;
	});

// -----------------------------------------------------  FANCYBOX
	Grid.init();
	if(jQuery().fancybox){
		jQuery('.fancybox').fancybox();
	}
});


// -----------------------------------------------------  GOOGLE MAP
/*jQuery(document).ready(function(){
	var myLatlng = new google.maps.LatLng(-34.397, 150.644);
	var myOptions = {
	  center: myLatlng,
	  zoom: 8,
	  mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	var map = new google.maps.Map(document.getElementById("map"),  myOptions);
	var marker = new google.maps.Marker({
	  position: myLatlng,
	  map: map,
	  title:"Click Me for more info!"
	});

	var infowindow = new google.maps.InfoWindow({});

	google.maps.event.addListener(marker, 'click', function() {
		infowindow.setContent("Write here some description"); //sets the content of your global infowindow to string "Tests: "
		infowindow.open(map,marker); //then opens the infowindow at the marker
	});
	marker.setMap(map);
});*/
