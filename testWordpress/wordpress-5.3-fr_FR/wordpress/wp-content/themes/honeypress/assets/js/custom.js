( function ($) {	
	/* ---------------------------------------------- /*
    * Home section height
    /* ---------------------------------------------- */

    function buildHomeSection(homeSection) {
            if (homeSection.length > 0) {
                if (homeSection.hasClass('home-full-height')) {
                    homeSection.height($(window).height());
                } else {
                    homeSection.height($(window).height() * 0.85);
                }
            }
    }

    $("#slider-carousel").owlCarousel({
			navigation : true, // Show next and prev buttons	
			autoplay: true,
			autoplayTimeout: 3000,
			autoplayHoverPause: true,
			smartSpeed: 800,			
			singleItem:true,
			loop:true, // loop is true up to 1199px screen.
			nav:true, // is true across all sizes
			margin:0, // margin 10px till 960 breakpoint
			responsiveClass:true, // Optional helper class. Add 'owl-reponsive-' + 'breakpoint' class to main element.
			items: 1,
			dots: false,
			navText: ["<i class='fa fa-arrow-left'></i>","<i class='fa fa-arrow-right'></i>"]
		});
			
		/* ---------------------------------------------- /*
         * Scroll top
         /* ---------------------------------------------- */

        $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
                $('.scroll-up').fadeIn();
            } else {
                $('.scroll-up').fadeOut();
            }
        });

        $('.scroll-to-top').click(function() {
            $('html, body').animate({ scrollTop: 0 }, 'slow');
            return false;
        });
		
		
		// Tooltip Js
		$(function () {
			$('[data-toggle="tooltip"]').tooltip()
		});
	
		// Accodian Js
		function toggleIcon(e) {
			$(e.target)
			.prev('.panel-heading')
			.find(".more-less")
			.toggleClass('fa-plus-square-o fa-minus-square-o');
		}
		$('.panel-group').on('hidden.bs.collapse', toggleIcon);
		$('.panel-group').on('shown.bs.collapse', toggleIcon);
						
				
		$("#related-posts-carousel").owlCarousel({
			navigation : true, // Show next and prev buttons		
			autoplay: true,
			autoplayTimeout: 1500,
			autoplayHoverPause: true,
			smartSpeed: 1300,
		
			loop:true, // loop is true up to 1199px screen.
			nav:true, // is true across all sizes
			margin:30, // margin 10px till 960 breakpoint
			autoHeight: true,
			responsiveClass:true, // Optional helper class. Add 'owl-reponsive-' + 'breakpoint' class to main element.
			//items: 3,
			dots: false,
			navText: ["<i class='fa fa-arrow-left'></i>","<i class='fa fa-arrow-right'></i>"],
			responsive:{ 	
				480:{ items:1 },
				768:{ items:2 },
				1000:{ items:2 }			
			}
		});
				
}) ( jQuery);
	