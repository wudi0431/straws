define(['FFF','zepto','font_element'],function(FFF,$,font_element){
	var F=FFF.FFF;
	var Widget=F.Widget;
	function FontSelect(){
		Widget.apply(this,arguments);
	}

	FontSelect.ATTRS={
		boundingBox:{
			value:$('<ul class="dropdown-menu J_select" role="menu" aria-labelledby="dropdownMenu1"></ul>')
		}
	}
	F.extend(FontSelect,Widget,{
		initialize:function(){

		},
		renderUI:function(){
			var that=this;
			//ajax instead..
			var ajax='<li role="presentation"><a role="menuitem" tabindex="-1" href="#">Action</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="#">Another action</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="#">Something else here</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="#">Separated link</a></li>';
			that.getBoundingBox().append(ajax);


		},
		bindUI:function(){
			var that=this;

			this.getBoundingBox().find('li').on('click',function(){
				var FontElement=font_element.FontElement;
				var fe=new FontElement();
				var $name=$(this).find('a').text();
				//console.log($name);

				fe.render({
					container:$('.W_s_fontPanel')
				});
				F.trigger('addAttr',{
					name:$name
				},that);
				F.off('addAttr');
			});


		},
		destructor:function(){

		}
	});
	return{
		FontSelect:FontSelect
	}
});
