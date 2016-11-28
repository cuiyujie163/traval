;(function($){
	
	var fs=document.documentElement.clientWidth/7.5;
	document.documentElement.style.fontSize=fs+'px';

	var catescroller=new IScroll("#cate");
	getJson();

	function getJson(){
		$.ajax({
			url:"data/cate.json",
			type:"get",
			dataType:"json",
			success:function(data){
				//渲染列表页
				console.log(data)
				renderList(data);
				catescroller.refresh();
			},
			error:function(){
				alert("请求失败！");
			}

		})
	}
	function renderList(data){
		var str="";
		str+='<div class="left">';
		for(var i=0;i<data.img.length;i+=2){
			str+='<dl>'
				+'<dt><img src="'+data.img[i]+'"><dt>'
				+'<dd><h2>'+data.content[i]+'<h2><p>'+data.comment[i]+'<p><img id="gouwuche" src="images/gouwuche.png" alt="" /><dd>'
				+'</dl>'
		}
		str+='</div>';
		str+='<div class="right">';
		for(var i=1;i<data.img.length;i+=2){
			str+='<dl>'
				+'<dt><img src="'+data.img[i]+'"><dt>'
				+'<dd><h2>'+data.content[i]+'<h2><p>'+data.comment[i]+'<p><img id="gouwuche" src="images/gouwuche.png" alt="" /><dd>'
				+'</dl>'
		}
		str+='</div>';
		console.log(str)
		$(".cate").html(str);
	}
	/*$(".wrap").on("click","a",function(e){
	 		e.preventDefault();	
	 }).on("tap","a",function(){
	 	var t1=$(this).attr("href");
	 	$(t1).css("left",0).siblings().css("left","100%");
	 	$(this).addClass("bg").siblings().removeClass("bg");
	 })*/
})(Zepto);




