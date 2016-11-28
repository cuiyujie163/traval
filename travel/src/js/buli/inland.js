;(function($){
	
	var fs=document.documentElement.clientWidth/7.5;
	document.documentElement.style.fontSize=fs+'px';

	var inlandscroller=new IScroll("#inland");
	getJson();

	function getJson(){
		$.ajax({
			url:"data/inland_data.json",
			type:"get",
			dataType:"json",
			success:function(data){
				//渲染列表页
				renderList(data);
				inlandscroller.refresh();
			},
			error:function(){
				alert("请求失败！");
			}

		})
	}
	function renderList(data){
		var str="";

		str+='<h2>'+data.title+'</h2><ul>'
		for(var i=0;i<11;i++){
			str+='<li>'+data.hot[i]+'</li>'
		}
		str+='<li id="add">更多</li></ul>';
		$(".hot").html(str);

		var str1="";
		str1+='<h2><i class="fa fa-clock-o"></i> '+data.time.rush+'</h2>'
		for(var i=0;i<data.time.img.length;i++){
			str1+='<dl>'
				+'<dt><img src="'+data.time.img[i]+'"></dt>'
				+'<dd>'+data.time.content[i]+'<dd>'
				+'</dl>';
		}
		$(".time").html(str1);
	}
	/*$(".wrap").on("click","a",function(e){
	 		e.preventDefault();	
	 }).on("tap","a",function(){
	 	var t1=$(this).attr("href");
	 	$(t1).css("left",0).siblings().css("left","100%");
	 	$(this).addClass("bg").siblings().removeClass("bg");
	 })*/
})(Zepto);




