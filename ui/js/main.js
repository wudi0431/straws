require(['dom','FFF','font_select','shade'],function(dom,FFF,font_select,shade){
	var FontSelect=font_select.FontSelect;
	var fs=new FontSelect();

	fs.render({
		container:$('.W_s_fl')
	});
$('.J_s').on('click',function(){
	// shade.c('loading','glyphicon-refresh','loading..');
	shade.c('warinig','glyphicon-info-sign','警告的地方改风格的风格')
	$('.W_s_shade').show();
});
$('.J_h').on('click',function(){
	$('W_s_shade').hide();
});
});
