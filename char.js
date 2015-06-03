/** 
	Reddit does not show characters left when filling out a post, lets fix that
	Author: Adestefa
	07/12/2011
	
*/
var RCHAR = RCHAR || {};
RCHAR = {
	VER : "1.3",
	MAX_CHARS : 300,
	FLD_LABEL_TXT : "Characters left:",
	FLD_ID : "rchar_title_display",
	FLD : "",
	log : function (str) {
		if (window.console && window.console.log) {
			window.console.log(str);
		} else {
			void(0);
		}
	},
	init : function () {
		this.log("RCHAR " + this.VER);
		// only add if not on page already
		if (jQuery('#' + this.FLD_ID).length === 0) {
			this.install();
			// add action listener to title field
			jQuery('textarea[name="title"]').keyup(function () {
				RCHAR.update();
			});
			// give time for the DOM to catch up
			window.setTimeout(function () {
				RCHAR.FLD = jQuery('#rchar_title_display');
				}, 1000);
			// update count if chars already present
			window.setTimeout(function () {
				RCHAR.update();
				}, 2000);
		}
		
	},
	install : function () {
		// add new label and count
		jQuery('#title-field').append('<span id="rchar_container">' + this.FLD_LABEL_TXT + '<i id="' + this.FLD_ID + '">300</i></span>');
		// show about dialog if user clicks label
		window.setTimeout(function () {
			jQuery('#rchar_container').click(function () {
				RCHAR.about();
			});
		}, 1000);
	},
	count : function () {
		return jQuery('textarea[name="title"]').val().length;
	},
	update : function () {
		var charsLeft, numChars;
		numChars = this.count();
		if (numChars < this.MAX_CHARS) {
			charsLeft = (this.MAX_CHARS - numChars);
			this.FLD.css('color', 'green');
		} else if (numChars === this.MAX_CHARS) {
			charsLeft = 0;
			this.FLD.css('color', 'green');
		} else {
			charsLeft = (this.MAX_CHARS - numChars);
			this.FLD.css('color', 'red');
		}
		this.FLD.html(charsLeft);
	},
	about : function () {
		var str = "What? how can reddit forget char counters?? Needed to fix that..\nAuthor:EnkiVsEnlil";
		alert(str);
	}
	
	
}
RCHAR.init();