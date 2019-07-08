$(document).ready(function(){
	if($(this).scrollTop()==0){
		$('#fanhui').hide();
	}
	$(window).scroll(function(){
		if($(this).scrollTop==0){
			$('#fanhui').hide();
		}
		if($(this).scrollTop!=0){
			$('#fanhui').show();
		}
		$('#fanhui').fadeOut(300,function(){
			$('#fanhui').fadeIn(500);
		})
	});
	$('#fanhui').click(()=>{
		$('body,html').animate({scrollTop : "0px"},1000)
	});
	// 头部移入移出事件
	$('.top-left-one').mouseenter(function(){
		$('.top-img').css({display : "block"});
	});
	$('.top-img').mouseenter(function(){
		$('.top-img').css({display : "block"});
	});
	$('.top-img-zz').mouseleave(function(){
		$('.top-img').css({display : "none"});
	})
	$('.top-left-one').mouseleave(function(){
		$('.top-img').css({display : "none"});
	})
	$('.top-right-three').mouseenter(function(){
		$('.top-right-dd').css({display : "block"});
	})
	$('.top-right-three').mouseleave(function(){
		$('.top-right-dd').css({display : "none"});
	})
	$('.top-right-dd').mouseenter(function(){
		$('.top-right-dd').css({display : "block"});
	})
	$('.top-right-dd').mouseleave(function(){
		$('.top-right-dd').css({display : "none"});
	})
	$('.top-right-four').mouseenter(function(){
		$('.top-right-xd').css({display : "block"});
	})
	$('.top-right-four').mouseleave(function(){
		$('.top-right-xd').css({display : "none"});
	})
	$('.top-right-xd').mouseenter(function(){
		$('.top-right-xd').css({display : "block"});
	})
	$('.top-right-xd').mouseleave(function(){
		$('.top-right-xd').css({display : "none"});
	})
	$('.top-right-six').mouseenter(function(){
		$('.top-right-fw').css({display : "block"});
	})
	$('.top-right-six').mouseleave(function(){
		$('.top-right-fw').css({display : "none"});
	})
	$('.top-right-fw').mouseenter(function(){
		$('.top-right-fw').css({display : "block"});
	})
	$('.top-right-fw').mouseleave(function(){
		$('.top-right-fw').css({display : "none"});
	})
	// 商品导航
	$('.good-nav-ul-two-one').mouseenter(function(){
		$('.good-nav-ul-div-one').css({display : "block"});
	})
	$('.good-nav-ul-two-one').mouseleave(function(){
		$('.good-nav-ul-div-one').css({display : "none"});
	})
	$('.good-nav-ul-div-one').mouseenter(function(){
		$('.good-nav-ul-div-one').css({display : "block"});
	})
	$('.good-nav-ul-div-one').mouseleave(function(){
		$('.good-nav-ul-div-one').css({display : "none"});
	})
	$('.good-nav-ul-two-two').mouseenter(function(){
		$('.good-nav-ul-div-two').css({display : "block"});
	})
	$('.good-nav-ul-two-two').mouseleave(function(){
		$('.good-nav-ul-div-two').css({display : "none"});
	})
	$('.good-nav-ul-div-two').mouseenter(function(){
		$('.good-nav-ul-div-two').css({display : "block"});
	})
	$('.good-nav-ul-div-two').mouseleave(function(){
		$('.good-nav-ul-div-two').css({display : "none"});
	})
	// 大轮播图
	var $lunboimg = $('.good-lunbo-one a img');
	var $lunbowidth = $lunboimg.length;
	var indexA=0;
	var $ullia = $('.good-lunbo-one ul li a');
	$ullia.each(function(index,value){
		$ullia[index].onclick=function(){
			indexA = index;
			$lunboimg.each(function(index,value){
				$(value).css({display : "none"});
			});
			$($lunboimg[index]).css({display : "block"});
		}
	})
	var index = 0;
	setInterval(function(){
		index ++;
		console.log(index);
		$lunboimg.each(function(index,value){
			$(value).fadeOut();
		});
		$($lunboimg[index % 5]).fadeIn();
	},3000);
})
