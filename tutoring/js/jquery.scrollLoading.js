/*!
 * jquery.scrollLoading.js
 * by zhangxinxu  http://www.zhangxinxu.com
 * 2010-11-19 v1.0
 * 2012-01-13 v1.1 偏移值计算修改 position → offset
*/
$(function(){
			//masonry plugin call
			$("#container").masonry({
				itemSelector:".item",
			});
			
			//timeline_container add mousemove event
			$(".timeline_container").mousemove(function(e){
				var topdiv = $("#containertop").height();
				var page = e.pageY - topdiv - 26;
				$(".plus").css({
					"top": page + "px",
					"background":"url('../img/timeline_plus.png')",
					"margin-left": "1px"
				});
			}).mouseout(function(){
				$(".plus").css({
					"background":"url('')"
				});
			});
			
			//injecting arrow points
			function Arrow_Points(){
				var s = $("#container").find(".item");
				$.each(s,function(i,obj){
					var posLeft = $(obj).css("left");
					if(posLeft == "0px"){
						html = "<span class='rightCorner'></span>";
						$(obj).prepend(html);
					} else {
						html = "<span class='leftCorner'></span>";
						$(obj).prepend(html);
					}
				});
			}
			Arrow_Points();
			
			//delete item box
			$(".deletebox").live("click",function(){
				if(confirm("Are you sure?")){
					$(this).parent().fadeOut("slow");
					//remove item block
					$("#container").masonry("remove",$(this).parent());
					//remove masonry plugin
					$("#container").masonry("reload");
					//Hiding existing arrows
					$(".rightCorner").hide();
					$(".leftCorner").hide();
					//injecting fresh arrow
					Arrow_Points();
				}
				return false;
			});
			
			//Timeline navigator on click action
			$(".timeline_container").click(function(e){
				var topdiv = $("#containertop").height();
				//Current Postion
				$("#popup").css({
					"top": (e.pageY - topdiv - 33) + "px"
				});
				$("#popup").fadeIn();//Popup block show
				//textbox focus
				$("#update").focus();
			});
			
			//Mouseover no action
			$("#popup").mouseup(function(){
				return false;
			});
			
			//outside action of the popup block
			$(document).mouseup(function(){
				$("#popup").hide();
			});
			
			//update button action
			$("#update_button").live("click",function(){
				//textbox value
				var x = $("#update").val();				
				//ajax part
				$("#container").prepend('<div class="item"><a href="#" class="deletebox">X</a>' + '<div class="inner">' + x + '</div></div>');
				//reload masnory
				$("#container").masonry("reload");
				//Hiding existing arrows
				$(".rightCorner").hide();
				$(".leftCorner").hide();
				//injecting fresh arrows
				Arrow_Points();
				//clear popup text box value
				$("#update").val("");
				//popup hide
				$("#popup").hide();
				return false;
			});
		});
		$(".scrollLoading").scrollLoading();



















(function($) {
	$.fn.scrollLoading = function(options) {
		var defaults = {
			attr: "data-url"	
		};
		var params = $.extend({}, defaults, options || {});
		params.cache = [];
		$(this).each(function() {
			var node = this.nodeName.toLowerCase(), url = $(this).attr(params["attr"]);
			if (!url) { return; }
			//重组
			var data = {
				obj: $(this),
				tag: node,
				url: url
			};
			params.cache.push(data);
		});
		
		//动态显示数据
		var loading = function() {
			var st = $(window).scrollTop(), sth = st + $(window).height();
			$.each(params.cache, function(i, data) {
				var o = data.obj, tag = data.tag, url = data.url;
				if (o) {
					post = o.offset().top; posb = post + o.height();
					if ((post > st && post < sth) || (posb > st && posb < sth)) {
						//在浏览器窗口内
						if (tag === "img") {
							//图片，改变src
							o.attr("src", url);	
						} else {
							o.load(url);
						}	
						data.obj = null;		
					}
				}
			});		
			return false;	
		};
		
		//事件触发
		//加载完毕即执行
		loading();
		//滚动执行
		$(window).bind("scroll", loading);
	};
})(jQuery);

