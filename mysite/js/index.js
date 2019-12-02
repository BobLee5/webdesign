// js动效部分
// 采用jquery
$(window).scroll(function(){
	var scrollT = document.documentElement.scrollTop || document.body.scrollTop;
	var backtop1 = $("#movie").offset().top - $(window).height()/2;
	if (scrollT > backtop1) {
		$(".st1").addClass("animated bounceInRight show").removeClass("fade");
		$(".st2").addClass("animated bounceInUp show").removeClass("fade");
		$(".st3").addClass("animated bounceInLeft show").removeClass("fade");
		$(".st4").addClass("animated bounceInDown show").removeClass("fade");
	}
})

$(window).scroll(function(){
	var scrollT = document.documentElement.scrollTop || document.body.scrollTop;
	var backtop2 = $("#music").offset().top - $(window).height()/1.5;
	if(scrollT > backtop2){
		$(".mt1").addClass("animated bounceInRight show").removeClass("fade");
		$(".mt2").addClass("animated bounceInUp show").removeClass("fade");
		$(".mt3").addClass("animated bounceInLeft show").removeClass("fade");
		$(".mt4").addClass("animated bounceInDown show").removeClass("fade");
		$(".mt5").addClass("animated bounceInRight show").removeClass("fade");
		$(".mt6").addClass("animated bounceInUp show").removeClass("fade");
		$(".mt7").addClass("animated bounceInLeft show").removeClass("fade");
		$(".mt8").addClass("animated bounceInDown show").removeClass("fade");
	}
})