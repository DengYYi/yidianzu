/*主页业务逻辑页面*/
require(["script/config.js"],function(){
	require(["jquery","banner_test"],function($,opts){
		console.log($);
		$(".main_images").supperBanner({
			src:[
				"https://edzimg.edianzu.com/homepage/4693f4b909cadefc5a0e7b22bb10f19a.jpg",
				"https://edzimg.edianzu.com/homepage/60117b20f4ac1b9819b9b065e4837f98.jpg",
				"https://edzimg.edianzu.com/homepage/7e913bac032876c3f808a7eb09efa709.png",
				"https://edzimg.edianzu.com/homepage/2683a0a4c4e79130f4fe25d2415eb89e.jpg",
				"https://edzimg.edianzu.com/homepage/861a01e1e6f087aa750b566422d7eb77.jpg",
				"https://edzimg.edianzu.com/homepage/2e6c5d1999951a3fae6e7ee1cfdf6fee.jpg"

			],
			autoplay:true
		})
	})
})
