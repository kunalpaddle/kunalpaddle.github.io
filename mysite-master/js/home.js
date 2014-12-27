
$(document).ready(function(){
	//load home page
	$('#slide').html($('#contentsets #me').html());
	
	//when top clicked, set home slide
	$('header').click(function(){
		moveSlideAnimation($('#contentsets #me').html());
	});
	
	//when tabs clicked, load pages
	$('#projectscontainer ul li').click(function(){
		moveSlideAnimation($('#contentsets #projects-' + $(this).attr('id')).html());
	});
	
	/*
//show tile images when hovered
	$('#tile-space div img').hover(function(){
		src = $(this).attr('src').substring(0,$(this).attr('src').lastIndexOf('-') + 1);
		$(this).attr('src', src + 'hover.png');
	},function(){
		src = $(this).attr('src').substring(0,$(this).attr('src').lastIndexOf('-') + 1);
		$(this).attr('src', src + 'base.png');
	});
*/
	
});

//sliding animation
moveSlideAnimation = function(content){
	topSetting = $('#slide').css('top');
	setTimeout(function(){
		$('#slide').css('height','0%');
		$('#slide').css('border-bottom-color','rgba(240,240,240,0.6)');
		setTimeout(function(){
			$('#slide').html(content);
			$('#slide').css('border-bottom-color','#D0D0D0');
			$('#slide').css('height','95%');
			setTimeout(function(){
			}, 500);
		}, 2000);
	}, 100);
}
