//Cache your selectors in variables, this is considered best practice
$(document).ready(function(){
    let hide = $('.a_cacher');
        $(hide).on('click', function(){
        $('.a_cacher').hide();      
    }); 
 });
   