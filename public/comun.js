function showList(uiid){
	$('#'+uiid).show();
}

$(function($) {
String.prototype.replaceAt = function(index, char) {
	return this.substr(0, index) + "<b>" + char + "</b>";
};
$.ui.autocomplete.prototype._renderItem = function(ul, item) {
    this.term = this.term.toLowerCase();
    var resultStr = item.label.toLowerCase();
    var t = "";
    while (resultStr.indexOf(this.term) != -1) {
        var index = resultStr.indexOf(this.term);
        t = t + item.label.replaceAt(index, item.label.slice(index, index + this.term.length));
        resultStr = resultStr.substr(index + this.term.length);
        item.label = item.label.substr(index + this.term.length);
    }
    return $("<li></li>").data("item.autocomplete", item).append("<a>" + t + item.label + "</a>").appendTo(ul);
};


if (GetIEVersion() > 0){
	// Is IE
	console.log('Is IE');
	$(".image-svg-loading").addClass("elementHidden");
	$(".tag-svg").remove();
}else {
	// Is not IE
	console.log('Is not IE');
	$(".label-buscando").addClass("elementHidden");
	$(".tag-img").remove();
}

});


function GetIEVersion() {
	  var sAgent = window.navigator.userAgent;
	  var Idx = sAgent.indexOf("MSIE");

	  // If IE, return version number.
	  if (Idx > 0) 
	    return parseInt(sAgent.substring(Idx+ 5, sAgent.indexOf(".", Idx)));

	  // If IE 11 then look for Updated user agent string.
	  else if (!!navigator.userAgent.match(/Trident\/7\./)) 
	    return 11;

	  else
	    return 0; //It is not IE
	}


	