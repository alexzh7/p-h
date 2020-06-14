$(function () {
    var tabContainers = $('div.tabs > div');
    tabContainers.hide().filter(':first').show();
    $('div.tabs ul.tabNavigation a').click(function () {
        tabContainers.hide();
        tabContainers.filter(this.hash).show();
        $('div.tabs ul.tabNavigation a').removeClass('selected');
        $(this).addClass('selected');
        return false;
    }).filter(':first').click();
});

$(function(){
	$('.order-page form .select a').click(function() {
		$('.order-page form .select a').removeClass('active');
		$(this).addClass('active');
	});
    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });
	$('.product-page .info .colors .item').click(function() {
		$('.product-page .info .colors .item').removeClass('active');
		$(this).addClass('active');
	});
	$('.catalog-page .filter .sort .b2').click(function() {
		$(this).toggleClass('active');
	});
	$('.catalog-page .filter .sort .b1').click(function() {
		$(this).toggleClass('active');
		$('.catalog-page .left-col').toggleClass('opened');
	});
	$('.header button').click(function() {
		$(this).toggleClass('active');
		$('.header .catalog-menu').toggle();
	});
	$('.catalog-page .left-col .sort .name').click(function() {
		$(this).toggleClass('active');
		$(this).next('.content').toggle();
	});
	$('.catalog-page .left-col .sort .content .link').click(function() {
		$(this).hide();
		$(this).prev('.hidden').show();
	});
	$('.header .menu-button').click(function() {
		$(this).toggleClass('active');
		$('.mobile-menu').toggleClass('opened');
	});
	$('.mobile-menu ul li a.link').click(function() {
		$(this).toggleClass('active');
		$(this).next('ul').slideToggle();
	});
	$('.index-page-slider').slick({
		dots: true
	});
	$('.brands-slider').slick({
	  speed: 300,
	  slidesToShow: 8,
	  slidesToScroll: 1,
	  responsive: [
	    {
	      breakpoint: 1170,
	      settings: {
	        slidesToShow: 6
	      }
	    },
	    {
	      breakpoint: 992,
	      settings: {
	        slidesToShow: 5
	      }
	    },
	    {
	      breakpoint: 767,
	      settings: {
	        slidesToShow: 4
	      }
	    },
	    {
	      breakpoint: 374,
	      settings: {
	        slidesToShow: 3
	      }
	    }
	  ]
	});
	$('.slider-for').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  asNavFor: '.slider-nav'
	});
	$('.slider-nav').slick({
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  arrows: false,
	  asNavFor: '.slider-for',
	  focusOnSelect: true
	});
});