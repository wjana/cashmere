$(function(){
	var n;
	$('.sPic li').click(function(){
		n = $('.sPic li').index(this);
		$('.sPic li').css({'border-color':'#e4eaec'})
		$('.sPic li').eq(n).css({'border-color':'#f5e1ab'})
		changePic();
		
	})
	function changePic(){
		var m = n+1;
//		console.log(n,m)
		var path = '../img/sweater/img'+m+'.jpg';
		$('section img:first').attr('src',path);
	}
	$('#detail').click(function(){
		$('html,body').animate({scrollTop:$('.detail').eq(0).offset().top},1000)
		
	})
})

