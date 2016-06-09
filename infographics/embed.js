if (document.location.hostname == "localhost") {
    var baseurl = "";
} else {
    var baseurl = "http://code4sa.org/cfa-chet-fellowship/infographics/";
}
document.write('<div id="code4sa-embed-chetgraphics"></div>');
document.write('<script type="text/javascript" src="' + baseurl + 'assets/js/pym.js"></script>');
document.write("<script>\n" +
"var pymParent = new pym.Parent('code4sa-embed-chetgraphics', '" + baseurl + "index.html?show-embed-link=true', {});\n" +
"</script>");
