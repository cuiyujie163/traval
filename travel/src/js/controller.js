angular.module("myapp")
	.controller("marker",marker)
	.controller("cate",cate)
	.controller("inland",inland)
function marker ($scope) {
	$.ajax({
		url:"data/data.json",
		dataType:"json",
		success:function (data) {
			console.log(data)
			//window.localStorage.data=window.JSON.stringify(data);
		}
	})
}
function cate ($scope) {
	$.ajax({
		url:"data/cate.json",
		dataType:"json",
		success:function (data) {
			console.log(data)
			window.localStorage.data=window.JSON.stringify(data);
		}
	})
}
function inland($scope){
	$.ajax({
		url:"data/inland_data.json",
		dataType:"json",
		success:function (data) {
			console.log(data)
			window.localStorage.data=window.JSON.stringify(data);
		}
	})
}






