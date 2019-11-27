// 明星机型动效
$(window).scroll(function(){
    var scrollT = document.documentElement.scrollTop || document.body.scrollTop;
    var backtop4 = $("#star").offset().top - $(window).height()/1.5;
    if(scrollT > backtop4){
        $(".st1").addClass("animated bounceInRight show").removeClass("fade");
        $(".st2").addClass("animated bounceInDown show").removeClass("fade");
        $(".st3").addClass("animated bounceInUp show").removeClass("fade");
        $(".st4").addClass("animated bounceInleft show").removeClass("fade");
    }
})
// 精选配件部分动效
$(window).scroll(function(){
    var scrollT = document.documentElement.scrollTop || document.body.scrollTop;
    var backtop3 = $("#accessory").offset().top - $(window).height()/1.5;
    if(scrollT > backtop3){
        $(".ac1").addClass("animated bounceInRight show").removeClass("fade");
        $(".ac2").addClass("animated bounceInDown show").removeClass("fade");
        $(".ac3").addClass("animated bounceInUp show").removeClass("fade");
        $(".ac4").addClass("animated bounceInleft show").removeClass("fade");
    }
})
// 探索oppo部分的动效
$(window).scroll(function(){
    var scrollT = document.documentElement.scrollTop || document.body.scrollTop;
    var backTop = $("#world").offset().top - $(window).height()/2;

    if(scrollT >backTop){
        $(".a1").addClass("animated bounceInRight show").removeClass("fade");
        $(".a2").addClass("animated bounceInDown show").removeClass("fade");
        $(".a3").addClass("animated bounceInUp show").removeClass("fade");
        $(".a4").addClass("animated bounceInLeft show").removeClass("fade");
    }
})
// 服务部分动效
$(window).scroll(function(){
    var scrollT = document.documentElement.scrollTop || document.body.scrollTop;
    var backtop2 = $("#serve").offset().top - $(window).height()/1.2;
    if(scrollT > backtop2){
        $(".s1").addClass("animated bounceInUp show").removeClass("fade");
    }
})
