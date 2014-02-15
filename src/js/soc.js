(function (window) {
	"use strict";

	//defauls for icons
	var settings = {
	    size: "30px", //width in pixels
	    radius: "auto", //border radius in px, auto will be proportional to size
	    spacing: "10px", //spacing between icons
	    iconcolor: "#fff", 
	    buttoncolor: "auto"
	};

	//merge data atributes with defaults
	function loadDataAttr(el){

		for (var key in settings) {
			if(el.getAttribute('data-'+key))
				settings[key]=el.getAttribute('data-'+key);
		}
	}

	function render(icons){
		for (var i = 0; i < icons.length; i++) {
			setStyle(icons[i]);
		}

		//set class of last icon
		icons[icons.length-1].className += " soc-icon-last";
	}

	//set style of an icon
	function setStyle(el){
		var sizeNum = parseInt( settings.size.replace("px","") );

		// the auto radius is 15% of the size of the icon
		if(settings.radius=='auto')
			settings.radius = sizeNum*.15+"px";

		// 50% of the button works well for a circle
		if(settings.radius=='circle')
			settings.radius = sizeNum*.5+"px";

		el.style.borderRadius = settings.radius;
		el.style.MozBorderRadius = settings.radius;
		el.style.WebkitBorderRadius = settings.radius;
		el.style.width = settings.size;
		el.style.height = settings.size;
		el.style.fontSize = (sizeNum*.55)+"px";
		el.style.lineHeight = settings.size;
		el.style.marginRight = settings.spacing;

		if(settings.buttoncolor != 'auto')
			el.style.backgroundColor = settings.buttoncolor;

		el.style.color = settings.iconcolor;
	}

	//simple function to check ie version. I can't believe we need icon. 
	function getIEVersion()
	{
	  var rv = -1; // Return value assumes failure.
	  if (navigator.appName == 'Microsoft Internet Explorer')
	  {
	    var ua = navigator.userAgent;
	    var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
	    if (re.exec(ua) != null)
	      rv = parseFloat( RegExp.$1 );
	  }
	  return rv;
	}

	function initIE(){
		//:before and icon fonts don't play well in ie8 so we need to force redraw the :before elements after the font loads. Ick.
		var head = document.getElementsByTagName('head')[0];
		var style = document.createElement('style');
		style.type = 'text/css';
		style.styleSheet.cssText = ':before{content:none !important';
		head.appendChild(style);
		setTimeout(function(){
			head.removeChild(style);
		}, 0);
	}

	// social plugin constructor
	function Soc() {
		this.init();
	}

	Soc.prototype = {
		init: function () {
			window.onload = function() {
				this.el = document.getElementById('soc');
				this.icons = this.el.getElementsByTagName('a');
				loadDataAttr(this.el);

				if(getIEVersion()=='8')
					initIE();
				
				render(this.icons);
			}
		},
		update: function(){
			loadDataAttr(this.el);
			render(this.icons);
		}
	};

	window.Soc = Soc;
}(window));

var soc = new Soc();