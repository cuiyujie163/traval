;(function($){
	
	var fs=document.documentElement.clientWidth/7.5;
	document.documentElement.style.fontSize=fs+'px';

	var collectscroller=new IScroll("#collect");

	$("#nav").on('tap','li',function(){
		$(this).addClass("bg").siblings().removeClass("bg");
	})


	
	
	/*$(".wrap").on("click","a",function(e){
	 		e.preventDefault();	
	 }).on("tap","a",function(){
	 	var t1=$(this).attr("href");
	 	$(t1).css("left",0).siblings().css("left","100%");
	 	$(this).addClass("bg").siblings().removeClass("bg");
	 })*/
})(Zepto);




