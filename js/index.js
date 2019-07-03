$(function(){
	var timer;//设置循环操作
	var num = 0;//引用元素的下标
	
	$('.screen1').children('.donghua').removeClass('no');//文字动画效果
	
	$('#navMenu li').click(function(event){
		num = $(this).index();
		$('section').stop().animate({'top':-100*num+'%'},800);
		$('.screen').eq(num).children('.donghua').removeClass('no').parent().siblings().children('.donghua').addClass('no');
		$(this).addClass('current').siblings('li').removeClass('current');
	});
	
	//滑动事件
	$(document).mousewheel(function(e,d){
		clearTimeout(timer);
		timer = setTimeout(function(){
			num = num - d;
			if(num<0){num=0}
			if(num>6){num=6}
			$('section').stop().animate({'top':-100*num+'%'},800);
			$('.screen').eq(num).children('.donghua').removeClass('no').parent().siblings().children('.donghua').addClass('no');
			$('#navMenu li').eq(num).addClass('current').siblings('li').removeClass('current')
		},100)
	});
	
	
	numTimer1();
	//公司简介数字增长
	function numTimer1(){
		var t = Number($('#antn1')[0].innerHTML);
//		console.log(typeof(t));
		var timer =  setInterval(function(){
			t++;		
//			console.log( t );			
			if(t>=3000){
				//停止定时器
				clearInterval(timer);
			}
			$('#antn1')[0].innerHTML = t;		
		},0.01)
	}
	
	numTimer2();
	function numTimer2(){
		var t = Number($('#antn2')[0].innerHTML);
		var timer =  setInterval(function(){
			t++;		
			if(t>=610){
				clearInterval(timer);
			}
			$('#antn2')[0].innerHTML = t;		
		},10)
	}
	
	numTimer3();
	function numTimer3(){
		var t = Number($('#antn3')[0].innerHTML);
		var timer =  setInterval(function(){
			t++;		
			if(t>=50){
				clearInterval(timer);
			}
			$('#antn3')[0].innerHTML = t;		
		},50)
	}
	
	numTimer4();
	function numTimer4(){
		var t = Number($('#antn4')[0].innerHTML);
		var timer =  setInterval(function(){
			t++;		
			if(t>=210){
				clearInterval(timer);
			}
			$('#antn4')[0].innerHTML = t;		
		},10)
	}
	
	
	
	
	
	
})
