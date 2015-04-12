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
	jQuery('.nav-toggle a').click(function(){
		jQuery('.mobile-menu').stop(true,true).slideToggle(500);
		return false;
	});
	jQuery('.mobile-menu ul li a').prepend('<i class="icon-right-dir"></i>');



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

// -----------------------------------------------------  CAROUSELS
	jQuery('#carousel').carouFredSel({
		auto: {
			items: 1,
			timeoutDuration : 8000
		},
		width: '100%',
		prev : {
			button : "#car_prev",
			key : "left",
			items : 1,
			duration : 750
		},
		next : {
			button : "#car_next",
			key : "right",
			items : 1,
			duration : 750
		},
		mousewheel: false,
		swipe: {
			onMouse: false,
			onTouch: true
		}
	});

	jQuery('#carousel-2').carouFredSel({
		auto: {
			items: 1,
			timeoutDuration : 8000
		},
		width: '100%',
		prev : {
			button : "#car_prev_2",
			key : "left",
			items : 1,
			duration : 750
		},
		next : {
			button : "#car_next_2",
			key : "right",
			items : 1,
			duration : 750
		},
		mousewheel: false,
		swipe: {
			onMouse: false,
			onTouch: true
		}
	});


// -----------------------------------------------------  UI ELEMENTS
	jQuery( ".tabs" ).tabs();

	jQuery( ".accordion" ).accordion({
		heightStyle: "content"
	});

	jQuery("[rel=tooltip]").tooltip();
// -----------------------------------------------------  PORTFOLIO HOVER EFFECT
	var currentWindowWidth = jQuery(window).width();

	jQuery('div.maskImage').css({opacity:0, top:0});
	if(currentWindowWidth >= 979){
		jQuery('.portfolio-item, .item, .image-wrap').mouseenter(function(e) {
			jQuery(this).find('.maskImage').animate({ opacity:1}, 200);
			jQuery(this).find('.maskImage a span').animate({ top:'40%'}, 200);
		}).mouseleave(function(e) {
			jQuery(this).find('.maskImage').animate({ opacity:0}, 200);
			jQuery(this).find('.maskImage a span').animate({ top:-48+"px"}, 200);
		});
	}

// -----------------------------------------------------  SKILLS
	jQuery('.skill-percent').css({width:'100%'});

	jQuery('.skills li').each(function(){
		var progressBar = jQuery(this),
		progressValue = progressBar.find('.skill-percent-back').attr('data-value');
		if (!progressBar.hasClass('animated')) {
			progressBar.addClass('animated');
			progressBar.find('.skill-percent').delay(200).animate({
				width: progressValue + "%"
			}, 1200);
		}
	});

// -----------------------------------------------------  PROJECT ISOTOPE


	function portfolio_iso(){
		if(jQuery().isotope) {
			// Needed variables
			var $container = jQuery("#portfolio-list");
			var $filter = jQuery("#portfolio-filter");

			// Run Isotope
			$container.isotope({
				filter				: '*',
				layoutMode   		: 'masonry',
				animationOptions	: {
				duration			: 750,
				easing				: 'linear'}
			});

			// Isotope Filter
			$filter.find('a').click(function(){
			  var selector = jQuery(this).attr('data-filter');
				$container.isotope({
				filter				: selector,
				animationOptions	: {
				duration			: 750,
				easing				: 'linear',
				queue				: false}
			  });
			  return false;
			});

			// Copy categories to item classes
			$filter.find('a').click(function() {
				$filter.find('a').removeClass('current');
				jQuery(this).addClass('current');
			});
		}
	}

	portfolio_iso();
	jQuery(window).resize(function(){portfolio_iso();});
	jQuery(window).load(function(){portfolio_iso();});

// ----------------------------------------------------- ANIMATIONS

  jQuery('.portfolio_blocks_wrap .item').each(function(i){
  	var popupItem = jQuery(this)
  	if (!popupItem.hasClass('mypassion-animation')) {
  		setTimeout(function(){ popupItem.addClass('mypassion-animation') }, (i * 200));
  	}
  });

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

	jQuery('.pricing-table .pricing').each(function(i){
		var popupItem = jQuery(this)
		if (!popupItem.hasClass('mypassion-animation')) {
			setTimeout(function(){ popupItem.addClass('mypassion-animation') }, (i * 200));
		}
	});

	jQuery('.timeline li').each(function(i){
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


  jQuery(".social-list li").each(function(i){
  	var popupItem = jQuery(this)
  	if (!popupItem.hasClass('mypassion-animation')) {
  		setTimeout(function(){ popupItem.addClass('mypassion-animation') }, (i * 50));
  	}
  });

	jQuery(".showcase>div.add-animation").each(function(i){
		var popupItem = jQuery(this)
		if (!popupItem.hasClass('mypassion-animation')) {
			setTimeout(function(){ popupItem.addClass('mypassion-animation') }, (i * 50));
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


