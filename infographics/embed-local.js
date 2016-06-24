$.getScript("assets/js/bootstrap.min.js").done( function( ) {
	console.log("bootstrap");
    $.getScript("assets/js/cfamerica-lib.min.js").done( function( ) {
    console.log("code4america");
	    $.getScript("assets/js/clipboard.min.js").done( function( ) {
	    console.log("clipboard");
		    $.getScript("assets/js/exportexcel.js").done( function( ) {
		    console.log("exportexcel");
				$.getScript("assets/js/lity.min.js").done( function( ) {
			    console.log("lity");
			   		$('head').append('<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">');
					$('head').append('<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css">');
					$('head').append('<link rel="stylesheet" href="assets/css/style.css">');
					$('head').append('<link rel="stylesheet" href="assets/css/lity.min.css">');
				    $.get('body.html', function(html) {
					$('.field-item').append($.parseHTML(html, true));
	  				console.log("body");
			    	});	  				
			    });
		    });
        });
    });
});