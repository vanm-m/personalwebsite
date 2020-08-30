var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

$(function() {
	
	var container = $('.gradients');

	function fade() {

		var divs = container.children();

		$(".current").transition({opacity: 1}, 5000, 'linear', function() {
			$('.current').removeClass('current');
			firstDiv = divs.first();
			firstDiv.addClass('current').css({opacity: 0});
			firstDiv.appendTo(container);
			fade();
		});
	}

	fade();

});


}
/*
     FILE ARCHIVED ON 23:17:25 Oct 04, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 22:14:34 Aug 30, 2020.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  RedisCDXSource: 71.632
  exclusion.robots: 0.254
  captures_list: 863.53
  esindex: 0.011
  PetaboxLoader3.datanode: 281.689 (4)
  CDXLines.iter: 22.808 (3)
  load_resource: 137.845
  PetaboxLoader3.resolve: 609.69 (3)
  LoadShardBlock: 764.8 (3)
  exclusion.robots.policy: 0.243
*/