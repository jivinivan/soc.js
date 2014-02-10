(function (window) {
	"use strict";

	var services = {
	    facebook: { identifier: "facebook", title:"Facebook", color:"#3B5998"},
	    twitter: { identifier: "twitter", title:"Twitter", color:"#55ACEE"},
	    pinterest: { identifier: "pinterest", title:"Pinterest", color:"#CB2027"},
	   	google: { identifier: "google", title:"Google Plus", color:"#DD4B39"},
	    youtube: { identifier: "youtube", title:"You Tube", color:"#BB0000"},
	    linkedin: { identifier: "linkedin", title:"LinkedIn", color:"#007BB6"},
	    instagram: { identifier: "instagram", title:"Instagram", color:"#517FA4"},
	    yelp: { identifier: "yelp", title:"Yelp", color:"#C83218"}
  	};

	var defaults = {
	    icons: [],
	    size: 40,
	    radius: "auto",
	    color: "auto",
	    stylesheet: "//socjs.com/soc.min.css"
	};

	//utility function to extend config with defaults
	function extend(a, b) {
	    for( var i in b )
	    	a[i] = b[i];
	    return a;
	}	

	//set style of an icon
	function setStyle(el,settings,iconDefaults){

		// the auto radius is 15% of the size of the icon
		if(settings.radius=='auto')
			settings.radius = settings.size*.15;

		if(settings.radius=='circle')
			settings.radius = settings.size*.5;

		el.style.borderRadius = settings.radius+"px";
		el.style.MozBorderRadius = settings.radius+"px";
		el.style.WebkitBorderRadius = settings.radius+"px";
		el.style.width = settings.size+"px";
		el.style.height = settings.size+"px";
		el.style.fontSize = (settings.size*.55)+"px";
		el.style.lineHeight = settings.size+"px";
		el.style.backgroundColor = settings.color;

		if(settings.color=='auto')
			el.style.backgroundColor = iconDefaults.color;

	}

	function loadDefaultStyle(stylesheet){
		var fileref=document.createElement("link")
  		fileref.setAttribute("rel", "stylesheet")
  		fileref.setAttribute("type", "text/css")
  		fileref.setAttribute("href", stylesheet);
  		if (typeof fileref!="undefined")
  			document.getElementsByTagName("head")[0].appendChild(fileref)
	}

	function createIcon(icon,settings){

		//create icon
		var iconEl = document.createElement('a');
		iconEl.className = "si si-"+icon.identifier;
		iconEl.href = settings.icons[icon.identifier].link;
		iconEl.target = "_blank";

		//add text for screen readers
		var iconText = document.createElement('span');
		iconText.style.display = "block";
		iconText.style.position = "absolute";
		iconText.style.left = "-9999px";
		iconText.innerHTML = icon.title;
		iconEl.appendChild(iconText);

		//set the icon style
		setStyle(iconEl,settings,icon);

		//append icon to list element
		//var iconItem = document.createElement('li');
		//iconItem.appendChild(iconEl);

		return iconEl;
	}

	// social plugin constructor
	function Social( options ) {
		this.settings = extend( defaults, options );
		this.init();
	}

	Social.prototype = {
		init: function () {
			loadDefaultStyle(this.settings.stylesheet);
		},
		render: function(el){
			var _this = this;

			//make element available
			_this.container = document.createElement('div');

			//create icon list container
			_this.container.className = "si-horizontal si-container";

			//append icons to list
			for (var key in _this.settings.icons) {
				var icon = createIcon( services[key], _this.settings);
				_this.container.appendChild( icon );
			};

			//add class to last icon for formatting
			_this.container.lastChild.className = "si-last";
			
			//append icons to provided element
			el.appendChild(_this.container);
		},
		destroy: function(){
			this.container.parentNode.removeChild(this.container);
		}
	};

	window.Social = Social;
}(window));