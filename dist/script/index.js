/*主页业务逻辑页面*/
require(["script/config.js"],function(){
	require(["jquery","ajax","banner","floor","stairs"],function($,ajax,opt,floor,stari){
		//console.log($);
		ajax.init();
		opt.init();
		floor.init();
		stari.init();
		stari.scroll();
				
	})
})
