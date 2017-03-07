(function($) {
    $(function() {
    	console.log('strt');
    	var $checkbox1 = $('#first_span');
        var $checkbox2 = $('#second_span');
        var $checkbox3 = $('#third_span');
    	var $label1 = $('#one');
        var $label2 = $('#two');
        var $label3 = $('#three');
        var flag = false;

        console.log($checkbox1);
        


        $label1.click(function(){
            console.log('enter1');
            if (flag) {
                $checkbox1.removeClass('newChecked');
                flag = false;
            } else {
                $checkbox1.addClass('newChecked');
                flag = true;
            }

        });       
        $label2.click(function(){
         if (flag) {
            $checkbox2.removeClass('newChecked');
            flag = false;
        } else {
            $checkbox2.addClass('newChecked');
            flag = true;
        }

    });  
        $label3.click(function(){
            if (flag) {
                $checkbox3.removeClass('newChecked');
                flag = false;
            } else {
                $checkbox3.addClass('newChecked');
                flag = true;
            }
        });  







    });
})(jQuery);