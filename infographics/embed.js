$.getScript("http://code4sa.org/cfa-chet-fellowship/infographics/assets/js/bootstrap.min.js").done( function( ) {
	console.log("bootstrap");
    $.getScript("http://code4sa.org/cfa-chet-fellowship/infographics/assets/js/cfamerica-lib.min.js").done( function( ) {
    console.log("code4america");
	    $.getScript("http://code4sa.org/cfa-chet-fellowship/infographics/assets/js/clipboard.min.js").done( function( ) {
	    console.log("clipboard");
		    $.getScript("http://code4sa.org/cfa-chet-fellowship/infographics/assets/js/exportexcel.js").done( function( ) {
		    console.log("exportexcel");
				$.getScript("http://code4sa.org/cfa-chet-fellowship/infographics/assets/js/lity.min.js").done( function( ) {
			    console.log("lity");
			   		$('head').append('<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">');
					$('head').append('<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css">');
					$('head').append('<link rel="stylesheet" href="http://code4sa.org/cfa-chet-fellowship/infographics/assets/css/style.css">');
					$('head').append('<link rel="stylesheet" href="http://code4sa.org/cfa-chet-fellowship/infographics/assets/css/lity.min.css">');
				    $.get('http://code4sa.org/cfa-chet-fellowship/infographics/body.html', function(html) {
					$('.field-item').append($.parseHTML(html, true));
	  				console.log("body");
			    	});	  				
			    });
		    });
        });
    });
});