define(function(){
var c=function(type,icon,txt){
	$('body').append('<div class="W_s_shade"></div>')
 	var html='<span class="glyphicon glyphicon-remove-circle W_s_shadeClose"></span><div class="W_s_shadeMsg"><span class="glyphicon '+icon+' J_icon"></span><span class="W_s_shadeTxt">'+txt+'</span></div>';
 	$('.W_s_shade').html(html);
 	if (type=='loading'){
 		$('.W_s_shadeClose').hide();
 		$('.W_s_shade').addClass('W_s_animation');
 	}
 	$('body').on('click','.W_s_shadeClose',function(){
 		$('.W_s_shade').remove();
 	});
}
return{
	c:c
};
});


