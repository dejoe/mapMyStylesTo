/**
* mapMyStylesTo
* Jquery Plugin to position a floated element fixed with respect to the screen viewport. Used for sidebars.
* Code: https://github.com/dejoe/mapMyStylesTo
* Author: dejoe.tumblr.com
* Usage: $("#myname").mapMyStylesTo("selectorstring",{propertyFrom:propertyTo});
*/

(function($){
	$.fn.mapMyStylesTo = function(targetObjSel,propertyMap,offset){
	
		function offsetCorrection(offsetBol,valToSet){
			if (offsetBol){
				var sourceValLen = valToSet.length;
				var targetNumber = parseFloat(valToSet) + offset;
				var targetUnit = valToSet.substring(sourceValLen-2);
				if (isNaN(parseFloat(targetUnit))){
					valToSet = targetNumber + targetUnit;
				}
			}
			return valToSet;
		}
		
		return this.each(function(){
			var $this = $(this);
			var targetObj = $(targetObjSel);
			if (typeof(offset) === "number"){
				var offsetBol = true;
			}else {
				var offsetBol = false;
			}
			for (var key in propertyMap) {
				var valToSet = $this.css(key);
				valToSet = offsetCorrection(offsetBol,valToSet);
				targetObj.css(propertyMap[key],valToSet);
			}
		});
	}
})(jQuery)
