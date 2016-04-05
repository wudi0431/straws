define(['FFF'],function(FFF){
	var F=FFF.FFF;
	var Widget=F.Widget;
	function FontElement(){
		Widget.apply(this,arguments);
	}

	FontElement.ATTRS={
		boundingBox:{
			value:$('<div class="panel panel-info J_hover"></div>')
		}
	}
	F.extend(FontElement,Widget,{
		initialize:function(){

		},
		renderUI:function(){
			var that=this;
			var $text=$('.J_text').val();
			var html='<div class="panel-heading"><span class="J_f_name"></span> <span class="glyphicon glyphicon-remove-circle W_s_panelClose J_close"></span></div><div class="panel-body"><h1 class="W_s_font_eg J_f_eg"></h1><div class="W_s_link_download"><a href="#" class="J_online"><span class="glyphicon glyphicon-cloud"></span> <span>引用线上地址</span></a> <a href="#" class="J_local"><span class="glyphicon glyphicon-cloud-download"></span> <span>本地下载</span></a></div></div>';
			this.getBoundingBox().append(html);
			$('.J_f_eg').text($text);
			F.on('addAttr',function(obj){
				that.getBoundingBox().find('.J_f_name').text(obj.name);
			});

		},
		bindUI:function(){
			var that=this;
			var $box=this.getBoundingBox();
			$box.on('mouseover', function() {
				$(this).find('.J_close').show();
				$(this).find('.W_s_link_download').show();
			});
			$box.on('mouseleave',function(){
				$(this).find('.J_close').hide();
				$(this).find('.W_s_link_download').hide();
			});
			$box.find('.J_close').on('click',function(){
				that.destory();
			});


		},
		destructor:function(){

		}
	});
	return {
		FontElement:FontElement
	}
});
