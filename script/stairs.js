define(["jquery"],function(){
	// var a = $(".title");
	// console.log(a);
	
	function Stairs(){

	}
	Stairs.prototype={
		init:function(){
			this.stair();
		},
		stair:function(){
			this.i;
			var _this=this
			$(document).scroll($.proxy(this.scroll,this));
			$("li",".floor-direct").on("click",function(){
					_this.i=$(this).index();
					//console.log(_this.i)
					_this.move()
			})
		},
		scroll:function(){
				//console.log(this)
				var minh = $(".hot-model").offset().top - 90;
				var maxh = $(".cooper-partner").offset().top - 100;
				var mixtop=document.documentElement.scrollTop||document.body.scrollTop;
				if (mixtop>=minh&&mixtop<=maxh) {

					$(".floor-direct").fadeIn(0);

					for(var j=0;j<$(".num").length;j++){
						$(".num").eq(j).css({
						    display:"block"
					    })
					    $(".word").eq(j).css({
							display:"none"
						})
					}

					this.i = Math.floor(($(document).scrollTop()-minh) / 437);

					$(".word").eq(this.i ).css({
						display:"block"
					})

					$(".num").eq(this.i ).css({
						display:"none"
					})
					//console.log(this.i );
				}else{
					$(".floor-direct").fadeOut(0);
				}
			},
			move:function(){
				//console.log(this);
				if (this.i==0||this.i==1) {
					var minh = $(".hot-model").offset().top - 90;
				}else if(this.i==6){
					var minh = $(".hot-model").offset().top - 15;	
				}else{
					var minh = $(".hot-model").offset().top -55;	
				}

				var a=this.i*437+minh

				//document.documentElement.scrollTop=a
				$("body,html").animate({"scrollTop":a},200)
				
			}

	}

	return new Stairs();
})
//$(document).scroll(function() {
// 			if($(document).scrollTop() >= 500) {
// 				$("#menu").fadeIn(500);
// 				var i = Math.floor(($(document).scrollTop() - 500) / 700);
// 				$("ul li").eq(i).children("span").addClass("active");
// 				$("ul li").eq(i).siblings().children("span").removeClass("active")
// 			}else{
// 				$("#menu").fadeOut(333);
// 			}
// 		})
// var flag = true; //控制 当点击楼层号时，禁止滚动条的代码执行   值为true时，可以执行滚动条代码
// //  根据楼层号 控制滚走的距离  
// // 1、除了top的楼梯号，为每一个楼梯号添加一个click，控制楼梯滚走的距离（距离：当前楼层的offset().top ）
// $("#menu li:not(:last)").click(function() {
//     flag = false;
//     //当前点击的楼号红色的 其余黑色的
//     $(this).find("span")
//         .addClass("active")
//         .end()
//         .siblings()
//         .find("span")
//         .removeClass("active");
//     //获取当前楼号对应楼层的 top值
//     var sTop = $(".Louti").eq($(this).index()).offset().top;

//     //将页面滚走的距离设置为  sTop  
//     $("body,html").animate({
//         "scrollTop": sTop
//     }, 1000, function() {
//         flag = true;
//     });
// })
// //2、点击top   回到顶部
// $("#menu li:last").click(function() {
//     $("body,html").animate({
//         "scrollTop": 0
//     }, 1000);
//     $("#menu li span").removeClass("active");
// })

// //3、 滚动条滚动 --  找到当前楼层的索引    控制楼层号
// $(window).scroll(function() {
//     //如果flag  为true   可以执行滚动条的代码
//     if (flag) {

//         //获取页面滚走的距离
//         var sTop = $(document).scrollTop();
//         //filter  返回满足条件的那个对象 
//         //找到满足某个条件的楼层对象    
//         var $floor = $(".Louti").filter(function(index, ele) {
//             return Math.abs($(this).offset().top - sTop) < $(this).height() / 2;
//         })

//         //根据楼层的索引 设置楼梯号的 样式
//         $("#menu li").eq($floor.index())
//             .find("span")
//             .addClass("active")
//             .end()
//             .siblings()
//             .find("span")
//             .removeClass("active");
//     }
// })



// 		方法二：

// 		$(document).scroll(function() {
// 			if($(document).scrollTop() >= 500) {
// 				$("#menu").fadeIn(500);
// 				var i = Math.floor(($(document).scrollTop() - 500) / 700);
// 				$("ul li").eq(i).children("span").addClass("active");
// 				$("ul li").eq(i).siblings().children("span").removeClass("active")
// 			}else{
// 				$("#menu").fadeOut(333);
// 			}
// 		})
		
		
// 		$("ul li").not(".last").click(function() {
// 			$("body,html").animate({ "scrollTop": $(this).index() * 700 + 500 }, 666)
// 		})
		
// 		$(".last").click(function(){
// 			$("body").animate({ "scrollTop":0 },500);
// 		})