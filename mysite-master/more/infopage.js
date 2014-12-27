
	$('#tablecontainer #tablelist > ul li').click(function(){
		$('#tablecontainer > #tabledetail > #tabledetailpage').html($('div#' + $(this).attr('id')).html());
	});
	
	$('.clickable').click(function(){
		alert('here');
		loadPageSlide('/' + $(this).attr('id') + '.html');
	});
