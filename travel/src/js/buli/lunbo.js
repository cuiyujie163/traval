
var lunbo=document.getElementById("lunbo");
	
var t1=0;
	//var t2=0;
	var t3=0;
	$("#uls>li").last().prependTo("#uls");
	$("#uls").css({"transform":"translatex(-100%)"});

	function sFn(e){
		t1=e.touches[0].clientX;

	}
	function mFn(e){
		var t2=e.touches[0].clientX;
		//console.log(t2);
		t3=t2-t1;
	}
	function eFn(e){
		var s1=$("#uls").find("li").data("tt");
		if(t3>30){
			
			//$("#lunbo").find("span").eq(s1).addClass("bg").silbings().removeClass("bg");
			$("#uls").css({"transform":"translatex(0)","transition":"transform .5s"}).on("webkitTransitionEnd",function(){
				$("#uls").find('li').last().prependTo($("#uls"));
				$("#uls").css({"transform":"translatex(-100%)",'transition':'none'});
				$("#uls").off("webkitTransitionEnd");
				$("#lunbo").find("span").eq(s1).addClass("bg").siblings().removeClass("bg");
			})
		}else if(t3<-30){

				$("#uls").css({"transform":"translatex(-200%)","transition":"transform .5s"}).on("webkitTransitionEnd",function(){
				$("#uls").find('li').first().appendTo($("#uls"));
				$("#uls").css({"transform":"translatex(-100%)",'transition':'none'});
				$("#lunbo").find("span").eq(s1).addClass("bg").siblings().removeClass("bg");
				$("#uls").off("webkitTransitionEnd");
			})
		}
	}

	lunbo.addEventListener("touchstart",sFn,false);
	lunbo.addEventListener("touchmove",mFn,false);
	lunbo.addEventListener("touchend",eFn,false);


