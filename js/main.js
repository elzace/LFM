jQuery(document).ready(function($){
	//open navigation clicking the menu icon
	$('.cd-nav-trigger').on('click', function(event){
		event.preventDefault();
		toggleNav(true);
		$('main').css({'filter':'blur(10px)'});
		$('.menu').hide()
	});
	//close the navigation
	$('.cd-close-nav, .cd-overlay').on('click', function(event){
		event.preventDefault();
		toggleNav(false);
		$('main').css({'filter':'blur(0)'});
		$('.menu').show();
	});
	function toggleNav(bool) {
		$('.cd-nav-container, .cd-overlay').toggleClass('is-visible', bool);
		$('main').toggleClass('scale-down', bool);
	}
	//scrolldown navbar
	$(window).scroll(function () {
		if($(window).scrollTop() > 0){
			$('.menu').css({'top':'0','background':'rgba(0,0,0,.8)','box-shadow':'1px 0 3px #333'});
		}
		else {
			$('.menu').css({'top':'10px','background':'none','box-shadow':'none'});
		}
	})
});