// usage: log('inside coolFunc', this, arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function f(){ 
	log.history = log.history || []; 
	log.history.push(arguments); 
	
	if(this.console) { 
		var args = arguments, newarr; 
		args.callee = args.callee.caller; 
		newarr = [].slice.call(args); 
		
		if (typeof console.log === 'object') log.apply.call(
			console.log, console, newarr); 
		else console.log.apply(console, newarr);}
		
	};

// make it safe to use console.log always
// make it safe to use console.log always
(function(a){function b(){}for(var c="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),d;!!(d=c.pop());){a[d]=a[d]||b;}})
(function(){try{console.log();return window.console;}catch(a){return (window.console={});}}());

// place any jQuery/helper plugins in here, instead of separate, slower script files.
// remap jQuery to $
(function($){
		  
	var hash = window.top.location.hash.replace( '#', '' );
	if( hash != '' ){
		if(hash == 'success'){
			$('#response').html('Message Sent!');
		}else if(hash == 'failed'){
			$('#response').html('The reCAPTCHA wasn\'t entered correctly. Try again.');
		}
	}
	
	$('.bar').live('click', function(){
		if( $('.menu-content').hasClass('close') ){							 	
			$('.menu-content').stop().animate({marginLeft: '-960px'}, 500);
			$('.menu-content').removeClass('close');
		}else{
			$('.menu-content').stop().animate({marginLeft: '0px'}, 500);
			$('.menu-content').addClass('close');
		}
	});
	
	$('#contactform').validate();
	
	$(window).scroll(function() {
							  	
		var scrollTop = window.scrollY || window.pageYOffset || $(window).scrollTop();			
		var scroll_element = $('body').scrollTop();
		
		if( scrollTop > 50 ){
			$('.gobacktop').fadeIn('fast');
		}else{
			$('.gobacktop').fadeOut('fast');	
		}

	});
	
	$(".gobacktop").on('click', function(){			
		$("html, body").animate({ scrollTop: $("#topScroll").offset().top }, 600);
		return false;
	});
	
})(this.jQuery);
