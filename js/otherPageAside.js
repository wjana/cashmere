$(function(){
	$(window).scroll(function(){
//		console.log($(window).scrollTop());
		$('.side-nav').css({'top':$(window).scrollTop()});
//		$('.sn-menu2').css({'top':$(window).scrollTop()});
	})
})
