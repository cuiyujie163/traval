;(function($){
	
	var fs=document.documentElement.clientWidth/7.5;
	document.documentElement.style.fontSize=fs+'px';
	var swiper = new Swiper('.swiper-container',{
		pagination: '.pagination' ,
		autoplay:1000,
		paginationClickable:true, 	
		autoplayDisableOnInteraction:false
	});
	var compassscroller=new IScroll("#compass");

	
	/*$(".wrap").on("click","a",function(e){
	 		e.preventDefault();	
	 }).on("tap","a",function(){
	 	var t1=$(this).attr("href");
	 	$(t1).css("left",0).siblings().css("left","100%");
	 	$(this).addClass("bg").siblings().removeClass("bg");
	 })*/
})(Zepto);




