$.getScript("http://code4sa.org/cfa-chet-fellowship/infographics/assets/js/bootstrap.min.js").done( function( ) {
	console.log("bootstrap");
    $.getScript("http://code4sa.org/cfa-chet-fellowship/infographics/assets/js/cfamerica-lib.min.js").done( function( ) {
    console.log("code4america");
	    $.getScript("http://code4sa.org/cfa-chet-fellowship/infographics/assets/js/clipboard.min.js").done( function( ) {
	    console.log("clipboard");
		    $.getScript("http://code4sa.org/cfa-chet-fellowship/infographics/assets/js/exportexcel.js").done( function( ) {
		    console.log("exportexcel");
				$.getScript("http://code4sa.org/cfa-chet-fellowship/infographics/assets/js/lightbox.min.js").done( function( ) {
			    console.log("lightbox");
				    $.get('http://code4sa.org/cfa-chet-fellowship/infographics/body.html', function(html) {
					$('.region-footer').prepend($.parseHTML(html, true));
	  				console.log("body");
			    	});	  				
			    });
		    });
        });
    });
});