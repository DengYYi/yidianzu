define(["jquery"],function(){
	function Floor(){

	}
	Floor.prototype = {
		constructor:Floor,
		init:function(){
			this.reload();
		},
		reload:function(){
			//console.log("1")
			var _this = this;
			$.ajax({
				url: 'json/floor.json',
				type: 'GEt'
			})
			.then(function(res) {
				//console.log(res)
				_this.create(res)
			})
		},
		create:function(data){
			//console.log(data.length)
			for(var j=0;j<5;j++){
				if(j==0){
					datas=data.floor
					this.box=$(".floor-con",".floor-1")
				}else if(j==1){
					datas=data.floor2
					this.box=$(".floor-con",".floor-2")
				}else if(j==2){
					datas=data.floor3
					this.box=$(".floor-con",".floor-3")
				}else if(j==3){
					datas=data.floor4
					this.box=$(".floor-con",".floor-4")
				}else{
					datas=data.floor5
					this.box=$(".floor-con",".floor-5")
				}
				for(var i=0;i<datas.length;i++){
					if (i==0) {
						var $html = "<a href="+datas[0].url+" class="+"fir-img"+">"+
										"<img src="+datas[0].src+" alt="+">"+
									"</a>"
					}else{
						var $html = "<a href="+datas[i].url+" class="+"part-"+i+">"+
										"<div class="+"img-"+i+">"+
											"<img src="+datas[i].src+" alt="+">"+
										"</div>"+
										"<div class="+"fon-"+i+">"+
											"<p>"+datas[i].title+"</p>"+
										"</div>"+
										"<div class="+"price"+">"+datas[i].price+"</div>"+
									"</a>"
					}
					$($html).appendTo(this.box)
				}
			//console.log($(".floor-con"))
			}
			
		}
	}
	return new Floor();
})