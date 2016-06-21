$.getScript("http://code4sa.org/cfa-chet-fellowship/infographics/assets/js/bootstrap.min.js").done( function( ) {
	console.log("bootstrap");
    $.getScript("http://code4sa.org/cfa-chet-fellowship/infographics/assets/js/cfamerica-lib.min.js").done( function( ) {
    	console.log("code4america");
		$.get('body.html', function(html) {
			$('.region-footer').prepend($.parseHTML(html, true));
  			console.log("the rest");
        });
    });
});