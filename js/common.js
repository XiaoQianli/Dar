$(function(){
	var itimer =null;
	$('.top-warp .top .z span').bind('click',function(){
		$('.z').css('display','none')
	})
	
	$('.top-warp .top ul .a-app').bind('mouseover',function(){
		
			$('.app').css('display','block')
		
		
	})
	$('.top-warp .top ul .a-app').bind('mouseleave',function(){
		itimer = setTimeout(function(){
			$('.app').css('display','none')
		},3000)
	})
	$('.top-warp .top .app').bind('mouseover',function(){
		clearTimeout(itimer);
	})
	$('.top-warp .top .app').bind('mouseleave',function(){
		$('.app').css('display','none')
	})
	
})
