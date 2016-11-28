;(function($){
	
	var fs=document.documentElement.clientWidth/7.5;
	document.documentElement.style.fontSize=fs+'px';

	var conscroller=new IScroll("#con");
	getJson('hot');
	conscroller.refresh();
	$("#nav li").on('tap',function(){
		$(this).addClass('col').siblings().removeClass('col');
		var nav = $(this).data('tit');
		getJson(nav);
	})
	function getJson(nav){
		$.ajax({
			url:"data/data.json",
			type:"get",
			dataType:"json",
			success:function(data){
				//渲染列表页
				$.each(data,function(key,val){
					if(key==nav){
						renderList(val);
					}
				})
			},
			error:function(){
				alert("请求失败！");
			}

		})
	}
	function renderList(val){
		var str = '<img src="images/conh_03.png" />';
		str+='<h1><i></i>'+val.tit+'</h1>'
		for(var i=0;i<val.img.length;i++){
			str+='<img src="'+val.img[i]+'" /><h2>人气值：<em>'+val.renqi[i]+'</em></h2><p>上榜理由：'+val.jianjie[i]+'</p>'
		}
		$('#con .scroller').html(str);
		conscroller.refresh();
	}
	
	/*$(".wrap").on("click","a",function(e){
	 		e.preventDefault();	
	 }).on("tap","a",function(){
	 	var t1=$(this).attr("href");
	 	$(t1).css("left",0).siblings().css("left","100%");
	 	$(this).addClass("bg").siblings().removeClass("bg");
	 })*/
})(Zepto);




