$(function(){
	
	$('.sideBtn').click(function(){
		if($('.side-nav').css('right') != '-300px'){
			$('.side-nav').css({'right':'-300px','transition':'right .5s linear 0s'});
			$('.whole').css({'left':'-300px'});
			$('.sBtn2').css({'display':'block'});
			$('.sBtn1').css({'display':'none'});
			$('.navbar-fixed-top').css({'left':'-600px'});
			$('.bg').css({'height':'0'});
		}else{
			$('.side-nav').css({'right':'-600px','transition':'right .8s linear 0s'});
			$('.whole').css({'left':'0'});
			$('.sBtn2').css({'display':'none'});
			$('.sBtn1').css({'display':'block'});
			$('.navbar-fixed-top').css({'left':'0'});
			$('.sn-menu2').css({'right':'-300px'});
			$('.bg').css({'height':'0'});
		}
	})

	$('.second').click(function(){
		var a = $('.second').index(this);
		console.log(a)
		if($('.sn-menu2').eq(a).css('right') == '-300px'){
			$('.sn-menu2').eq(a).css({'right':'-40px'});
			$('.bg').css({'height':'100%'});
		}else{
			$('.sn-menu2').eq(a).css({'right':'-300px'});
		}
	})
	
	$('.back').click(function(){
		$('.sn-menu2').css({'right':'-300px'});
		$('.bg').css({'height':'0'});
	})
	
})


