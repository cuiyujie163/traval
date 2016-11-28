;(function($){
	
	var fSize=document.documentElement.clientWidth/7.5;
	document.documentElement.style.fontSize=fSize+"px";
	//引导页的滑动
	var swiper = new Swiper('.swiper-container',{
		pagination: '.pagination' ,
		/*autoplay:3000,*/
		paginationClickable:true, 	
		autoplayDisableOnInteraction:false
	});

	
	/* $(".wrap").on("click","a",function(e){
	 		e.preventDefault();	
	 }).on("tap","a",function(){
	 	var t1=$(this).attr("href");
	 	$(t1).css("left",0).siblings().css("left","100%");
	 	$(this).addClass("bg").siblings().removeClass("bg");

	 	
	 })*/

	
	
})(Zepto);




