$(document).ready(function() {
	$('#toTop').hide();
});

$(window).scroll(function(){
    var h = $(window).scrollTop();
	if(h == 0){
		$('#toTop').hide(200);
	}else{
	$('#toTop').show(200);
	}
});

function stopAnimatedScroll(){
    if ( $('*:animated').length > 0 ) { $('*:animated').stop(); }
    $('.navbar-nav li').removeClass('active');
}
if(window.addEventListener) {
    document.addEventListener('DOMMouseScroll', stopAnimatedScroll, false);
}
document.onmousewheel = stopAnimatedScroll;


$(document).on('click', '.scroll', function(){
	stopAnimatedScroll();
	var hash = this.hash;
   	$(hash).ScrollTo({
    duration: 700,
    easing: 'linear'
	});
	
    $('.navbar-nav li').removeClass('active');
    $(this).parent('li').addClass('active');
	$(this).parent('li').parent().parent().removeClass('in');
    return false;
});

// $(document).on('click', '.scroll', function() {
//     stopAnimatedScroll();
    
//     var hash = this.hash;
//     $(hash).ScrollTo({
//         duration: 700,
//         easing: 'linear',
//         onAfter: function() {
//             // This function runs after the scroll animation completes
//             // Collapse the navbar if it's open
//             $('.navbar-collapse').collapse('hide');
//         }
//     });
    
//     // Update active class
//     $('.navbar-nav li').removeClass('active');
//     $(this).parent('li').addClass('active');
// 	$(this).parent('li').parent().parent().removeClass('in');
//     return false;
// });
