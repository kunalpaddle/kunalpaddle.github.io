
$(document).ready(function(){
	//load home page
	$('#slide').html($('#contentsets #me').html());
	
	//when top clicked, set home slide
	$('header').click(function(){
		$('#slide').fadeOut();
		fadeAnimation($('#contentsets #me').html());
	});
	
	//when tabs clicked, load pages
	$('#projectscontainer ul li').click(function(){
		$('#slide').fadeOut();
		fadeAnimation($('#contentsets #projects-' + $(this).attr('id')).html());
	});
	
});

//fade animation
fadeAnimation = function(content){
			setTimeout(function(){$('#slide').html(content);},500);
			setTimeout(function(){$('#slide').fadeIn();},500);
		};
