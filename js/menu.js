(function($) {
    $(function() {
    	var $link = $('.menu a');
    	$link.on('click', function(e){
    		var $submenu = $(this).siblings('.sub_menu');
    		e.preventDefault();
    		console.log($submenu);
    		$submenu.slideToggle(200);
    		// $submenu.animate({
    		// 	show(),
    		// }, 1000);	

    	});
       
    });
})(jQuery);