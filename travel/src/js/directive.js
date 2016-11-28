function pageSwrite(){
	return {
		restrict:"A",
		link:function(scope,element){
			var swiper = new Swiper('.swiper-container',{
				pagination: '.pagination' ,
				/*autoplay:3000,*/
				paginationClickable:true, 	
				autoplayDisableOnInteraction:false
			});
		}
	}
}
function home(){
	return {
		restrict:"A",
		link:function(scope,element){
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

			var homescroller=new IScroll("#home",{"click":true});
			homescroller.refresh();
		}
	}
}
function marker(){
	return {
		restrict:"A",
		link:function(scope,element){
			var conscroller=new IScroll("#con",{"click":true});
			getJson('hot');
			conscroller.refresh();
			$("#nav li").on('tap',function(){
				$(this).addClass('col').siblings().removeClass('col');
				var nav = $(this).data('tit');
				getJson(nav);
			})
			function getJson(nav){
				$.ajax({
					url:"../data/data.json",
					type:"get",
					dataType:"json",
					success:function(data){
						//渲染列表页
						$.each(data,function(key,val){
							if(key==nav){
								renderList(val);
								conscroller.refresh();
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
			}
		}
	}
}
function compass(){
	return {
		restrict:"A",
		link:function(scope,element){
			var swiper = new Swiper('.swiper-container',{
				pagination: '.pagination' ,
				autoplay:1000,
				paginationClickable:true, 	
				autoplayDisableOnInteraction:false
			});
			var compassscroller=new IScroll("#compass",{"click":true});
		}
	}
}
function user(){
	return {
		restrict:"A",
		link:function(scope,element){
			var userscroller=new IScroll("#user",{"click":true});
		}
	}
}
function cate(){
	return {
		restrict:"A",
		link:function(scope,element){
			var catescroller=new IScroll("#cate",{"click":true});
			getJson();
			function getJson(){
				$.ajax({
					url:"data/cate.json",
					type:"get",
					dataType:"json",
					success:function(data){
						//渲染列表页
						//console.log(data)
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
		}
	}
}
function inland(){
	return {
		restrict:"A",
		link:function(scope,element){
			var inlandscroller=new IScroll("#inland",{"click":true});
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
		}
	}
}

angular.module("myapp")
		.directive("pageSwrite",pageSwrite)
		.directive("home",home)
		.directive("marker",marker)
		.directive("compass",compass)
		.directive("user",user)
		.directive("cate",cate)
		.directive("inland",inland)


