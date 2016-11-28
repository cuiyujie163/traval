;(function($){
	
	var fs=document.documentElement.clientWidth/7.5;
	document.documentElement.style.fontSize=fs+'px';
	var swiper = new Swiper('#banner',{
		pagination: '.banner' ,
		autoplay:1000,
		paginationClickable:true, 	
		autoplayDisableOnInteraction:false
	});
	var swiper = new Swiper('#nav',{
		pagination: '.nav' ,
		paginationClickable:true, 	
		autoplayDisableOnInteraction:false
	});

	var homescroller=new IScroll("#home");

	
	/*$(".wrap").on("click","a",function(e){
	 		e.preventDefault();	
	 }).on("tap","a",function(){
	 	var t1=$(this).attr("href");
	 	$(t1).css("left",0).siblings().css("left","100%");
	 	$(this).addClass("bg").siblings().removeClass("bg");
	 })*/
})(Zepto);




