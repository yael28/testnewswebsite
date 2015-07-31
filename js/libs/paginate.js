;(function($){
/*******************************************************************************************/    
// jquery.pajinate.js - version 0.4
// A jQuery plugin for paginating through any number of DOM elements
// 
// Copyright (c) 2010, Wes Nolte (http://wesnolte.com)
// Liscensed under the MIT License (MIT-LICENSE.txt)
// http://www.opensource.org/licenses/mit-license.php
// Created: 2010-04-16 | Updated: 2010-04-26
/*******************************************************************************************/

    $.fn.pajinate = function(options){
        // Set some state information
    	var current_page = 'current_page';
		var items_per_page = 'items_per_page';
		
		var meta;
	
		// Setup default option values
		var defaults = {
			item_container_id : '.content',
			items_per_page : 10,			
			nav_panel_id : '.page_navigation',
			num_page_links_to_display : 20,			
			start_page : 0,
			wrap_around : true,
			nav_label_first : 'First',
			nav_label_prev : 'Prev',
			nav_label_next : 'Next',
			nav_label_last : 'Last',
            show_first_last: false
		};
		var options = $.extend(defaults,options);
		var $item_container;
		var $page_container;
		var $items;
		var $nav_panels;
        var total_page_no_links;
	
		return this.each(function(){
			$page_container = $(this);
			$item_container = $(this).find(options.item_container_id);
			$items = $page_container.find(options.item_container_id).children();
			meta = $page_container;
			
			// Initialise meta data
			meta.data(current_page,0);
			meta.data(items_per_page, options.items_per_page);
					
			// Get the total number of items
			var total_items = $item_container.children().size();
			
			// Calculate the number of pages needed
			var number_of_pages = Math.ceil(total_items/options.items_per_page);

			// Construct the nav bar
			var more = '<span class="ellipse more">...</span>';
			var less = '<span class="ellipse less">...</span>';
            
            //var first = !options.show_first_last ? '' : '<a class="first_link" href="">'+ options.nav_label_first +'</a>';
            //var last = !options.show_first_last ? '' : '<a class="last_link" href="">'+ options.nav_label_last +'</a>';
			
			var first = !options.show_first_last ? '' : '<a class="first_link" title="First" href="">&nbsp;</a>';
            var last = !options.show_first_last ? '' : '<a class="last_link" title="Last" href="">&nbsp;</a>';
			
			var navigation_html = first;
			navigation_html += '<a class="prevPage" title="Previous" href=""></a> &nbsp;';
			var current_link = 0;
			while(number_of_pages > current_link){
				navigation_html += '<a class="pagenumbers" href="" longdesc="' + current_link +'">'+ (current_link + 1) +'</a>';
				current_link++;
			}
			//navigation_html += more + '<a class="nextPage" href="">'+ options.nav_label_next +'</a>';
			navigation_html += '&nbsp;<a class="nextPage" title="Next" href=""></a>';
			navigation_html += last;

			// And add it to the appropriate area of the DOM	
			$nav_panels = $page_container.find(options.nav_panel_id);			
			$nav_panels.html(navigation_html).each(function(){
			
				$(this).find('.pagenumbers:first').addClass('first');
				$(this).find('.pagenumbers:last').addClass('last');
				
			});
			
			// Hide the more/less indicators
			$nav_panels.children('.ellipse').hide();
			
			// Set the active page link styling
			$nav_panels.find('.prevPage').next().next().addClass('selected');
						
			/* Setup Page Display */
			// And hide all pages
			$items.hide();
			// Show the first page			
			$items.slice(0, meta.data(items_per_page)).show();

			/* Setup Nav Menu Display */
			// Page number slices
			
			total_page_no_links = $page_container.children(options.nav_panel_id+':first').children('.pagenumbers').size();
			options.num_page_links_to_display = Math.min(options.num_page_links_to_display,total_page_no_links);

			$nav_panels.children('.pagenumbers').hide(); // Hide all the page links
			
			// And only show the number we should be seeing
			$nav_panels.each(function(){
				$(this).children('.pagenumbers').slice(0, options.num_page_links_to_display).show();
				
				//added by paul mangaser just for link borders
				$(this).children('.pagenumbers').slice(options.num_page_links_to_display -1, options.num_page_links_to_display).addClass('noBorder');
			});
						
			/* Bind the actions to their respective links */
			 
			// Event handler for 'First' link
			$page_container.find('.first_link').click(function(e){
				e.preventDefault();
				
				movePageNumbersRight($(this),0);
				goto(0);				
				//analytics
				_gaq.push(['_trackPageview', chnnl+"pagination/clicks/previous"]);
			});			
			
			// Event handler for 'Last' link
			$page_container.find('.last_link').click(function(e){
				e.preventDefault();
				var lastPage = total_page_no_links - 1;
				movePageNumbersLeft($(this),lastPage);
				goto(lastPage);		
				//analytics
				_gaq.push(['_trackPageview', chnnl+"pagination/clicks/next"]); 
			});			
			
			// Event handler for 'Prev' link
			$page_container.find('.prevPage').click(function(e){
				e.preventDefault();
				showPrevPage($(this));
				//analytics
				_gaq.push(['_trackPageview', chnnl+"pagination/clicks/previous"]);
			});
			
			
			// Event handler for 'Next' link
			$page_container.find('.nextPage').click(function(e){
				e.preventDefault();				
				showNextPage($(this));
				//analytics
				_gaq.push(['_trackPageview', chnnl+"pagination/clicks/next"]); 
			});
			
			// Event handler for each 'Page' link
			$page_container.find('.pagenumbers').click(function(e){
				e.preventDefault();
				goto($(this).attr('longdesc'));
				//analytics
				_gaq.push(['_trackPageview', chnnl+"pagination/clicks/"+current_link]); 
			});			
			
			// Goto the required page
			goto(parseInt(options.start_page));
			toggleMoreLess();
            if(!options.wrap_around)
			    tagNextPrev();
		});
		
		function showPrevPage(e){
			new_page = parseInt(meta.data(current_page)) - 1;						
			
			// Check that we aren't on a boundary link
			if($(e).siblings('.selected').prev('.pagenumbers').length==true){
				movePageNumbersRight(e,new_page);
				goto(new_page);
			}else if(options.wrap_around){
                goto(total_page_no_links-1);   
			}
				
		};
			
		function showNextPage(e){
			new_page = parseInt(meta.data(current_page)) + 1;
			
			// Check that we aren't on a boundary link
			if($(e).siblings('.selected').next('.pagenumbers').length==true){		
				movePageNumbersLeft(e,new_page);
				goto(new_page);
			} else if (options.wrap_around) {
				goto(0);
			}
				
		};
			
		function goto(page_num){

			var ipp = meta.data(items_per_page);
			
			var isLastPage = false;
			
			// Find the start of the next slice
			start_from = page_num * ipp;
			
						
			// Find the end of the next slice
			end_on = start_from + ipp;

			// Hide the current page	
			$items.hide()
					.slice(start_from, end_on)
					.show();
			
			// Reassign the active class
			$page_container.find(options.nav_panel_id).children('.pagenumbers[longdesc=' + page_num +']').addClass('selected')
													 .siblings('.selected')
													 .removeClass('selected');										 
			
			// Set the current page meta data							
			meta.data(current_page,page_num);
			
			// Hide the more and/or less indicators
			toggleMoreLess();
			
			// Add a class to the next or prev links if there are no more pages next or previous to the active page
			tagNextPrev();
			
			//added by paul for view result
			var total = $item_container.children().size();
			var total_page = Math.ceil(total/options.items_per_page);
			var n;
			
			if((page_num+1) == total_page){
				n = total;
			}else{ 
				n = start_from + ipp;
			}

			$('#view_results').html((start_from+1) + ' - ' + (n) + ' of ' + total);
			//end added
		};	
		
		// Methods to shift the diplayed index of page numbers to the left or right
		function movePageNumbersLeft(e, new_p){
			var new_page = new_p;

			var $current_active_link = $(e).siblings('.selected');
			
			if($current_active_link.siblings('.pagenumbers[longdesc=' + new_page +']').css('display') == 'none'){
				
				$nav_panels.each(function(){
						$(this).children('.pagenumbers')
							.hide() // Hide all the page links
							.slice(parseInt(new_page - options.num_page_links_to_display + 1) , new_page + 1)
							.show();
							
						//added by paul mangaser just for link borders
						$(this).children('.pagenumbers').removeClass('noBorder').slice(parseInt(new_page)).addClass('noBorder');
						
					
				});
			}
			
			

		} 
		
		function movePageNumbersRight(e, new_p){ 
			var new_page = new_p;

			var $current_active_link = $(e).siblings('.selected');
			
			if($current_active_link.siblings('.pagenumbers[longdesc=' + new_page +']').css('display') == 'none'){
												
				$nav_panels.each(function(){
						$(this).children('.pagenumbers')
							.hide() // Hide all the page links
							.slice( new_page , new_page + parseInt(options.num_page_links_to_display))
							.show();
							
						//added by paul mangaser just for link borders
						$(this).children('.pagenumbers').removeClass('noBorder').slice(parseInt(new_page + options.num_page_links_to_display - 1)).addClass('noBorder');
						
				});
	
			}

		}
		
		// Show or remove the ellipses that indicate that more page numbers exist in the page index than are currently shown
		function toggleMoreLess(){				 
			if(!$nav_panels.children('.pagenumbers:visible').hasClass('last')){					
				$nav_panels.children('.more').show();
			}else {
				$nav_panels.children('.more').hide();
			}
			
			if(!$nav_panels.children('.pagenumbers:visible').hasClass('first')){
				$nav_panels.children('.less').show();
			}else {
				$nav_panels.children('.less').hide();
			}			
		}
		
        /* Add the style class ".no_more" to the first/prev and last/next links to allow custom styling */
    	function tagNextPrev() {
			if($nav_panels.children('.last').hasClass('selected')){
				$nav_panels.children('.nextPage').add('.last_link').addClass('no_more');
			} else {
				$nav_panels.children('.nextPage').add('.last_link').removeClass('no_more');
			}
			
			if($nav_panels.children('.first').hasClass('selected')){
				$nav_panels.children('.prevPage').add('.first_link').addClass('no_more');
			} else {
				$nav_panels.children('.prevPage').add('.first_link').removeClass('no_more');
			}
		}
		
	};
	
})(jQuery);