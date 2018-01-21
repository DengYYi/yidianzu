// 轮播图
define(["jquery"],function(){
	function Banner(){

	}
	Banner.prototype = {
		constructor:Banner,
		init:function(){
			this.reload();
		},
		reload:function(){
			//console.log("1")
			var _this = this;
			$.ajax({
				url: 'json/banner.json',
				type: 'GEt'
			})
			.then(function(res) {
				//console.log(res)
				_this.create(res)
			})
		},
		create:function(data){
			for(i=0;i<data.length;i++){
				var $html = "<li>"+
								"<a href="+data[i].src+">"+
									"<span style="+'"'+"background\: url("+data[i].url+") center top no-repeat"+'"'+">"+
									"</span>"+
								"</a>"+
							"</li>"
				//console.log(i);			
				$($html).appendTo($(".loop_logo"))
			}
			this.move()
		},
		move:function(){
			this.$ali = $(".loop_logo").children();
			this.$aspan = $(".flicking_inner").children();
			//console.log(this.$aspan.length)
			//.log(this.$ali.length)
			this.index = 0;
			var timer;
			var _this = this;
			timer = setInterval(function(){
				//console.log(_this.$ali[_this.index])
				if (_this.index==_this.$ali.length-1) {
					_this.index=0;
				}else{
					_this.index=_this.index;
				}
				for(i=0;i<_this.$ali.length;i++){
					$(_this.$ali[i]).css({
								zIndex:"0",
								display:"none"
					})
				}
				$(_this.$ali[_this.index]).css({
									zIndex : "1",
									display :"block"
				})
				_this.index++;
			},2000)
		}
	}
	return new Banner();
})