define(["jquery"],function(){
	function Hot(){
	}
	Hot.prototype={
		constructor:Hot,
		init:function(){
			this.reload();
		},
		reload:function(){
			//console.log("1")
			var _this = this;
			$.ajax({
				url: 'json/yidianzu.json',
				type: 'GEt'
			})
			.then(function(res) {
				//console.log(res)
				_this.create(res)

			})
		},
		create:function(data){
			for(var i=0;i<data.length;i++){
				if(i==0){
				var $html = "<a href="+data[0].url+" class="+"hot-1"+">"+
								"<img src="+data[0].src+" alt="+">"+
							"</a>"
				}else{
					var $html = "<a href="+data[i].url+" class="+"hot-"+(i+1)+""+">"+
									"<div class="+"tex-height"+">"+
										"<div class="+"txt-sub"+">"+data[i].title+"</div>"+
										"<div class="+"txt-des"+">"+data[i].point+"</div>"+
										"<div class="+"txt-price-"+i+">"+data[i].price+"</div>"+
									"</div>"+
									"<div class="+"com-pic-"+i+""+">"+
										"<img src="+data[i].src+">"+
									"</div>"+
								"</a>"
				}
				$($html).appendTo($(".hot-box"))
			}
		}
		
	}
	return new Hot();
})