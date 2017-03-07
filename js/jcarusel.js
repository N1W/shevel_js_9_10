(function($) {
    $(function() {

        $('.jcarousel')
            .jcarousel({

            });

        $('.jcarousel-control-prev').click(function() {
    		$('.jcarousel').jcarousel('scroll', '-=1');
		});

        $('.jcarousel-control-next').click(function() {
   	 		$('.jcarousel').jcarousel('scroll', '+=1');
		});

        /*
         Pagination initialization
         */
         $('.jcarousel-pagination').jcarouselPagination({
         	item: function(page) {
         		return '<a href="#' + page + '">' + page + '</a>';
         	}
         });
    });
})(jQuery);