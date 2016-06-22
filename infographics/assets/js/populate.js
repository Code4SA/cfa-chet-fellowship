function showInfo(e, t) {
    var pageType ='african-higher-education';
    var anchorScroll; 
    if (window.location.hash) {
        if (window.location.hash.indexOf('|') > -1) {
            pageType = location.hash.substring(location.hash.lastIndexOf("#") + 1, location.hash.lastIndexOf("|"));
        }
        else {
            pageType = location.hash.substring(location.hash.lastIndexOf("#") + 1);
        }
        anchorScroll = location.hash.substring(location.hash.lastIndexOf("#") + 1);
    }
    
    allRows = _.sortBy(t.sheets("input").all(), "order"),
    $('#' + pageType).click();
    
    if (anchorScroll) {
      var element = document.getElementById(anchorScroll);
      element.scrollIntoView();
    }
}
var allRows = [];
function filterByDatatype(e) {
    clearCards(),
    updateCards(allRows, [buildDatatypeFilter(e)])
}
function clearCards() {
    $("#graphics").empty()
}
function buildDatatypeFilter(e) {
    return e ? function(t) {
        return t["category"] === e
    }
     
    : !1
}
function updateCards(e, t) {
    var t = t || []
      
    , a = $("#graphics-overview").html()
      
    , n = Handlebars.compile(a);
    _.chain(e).filter(function(e) {
        return _.all(t, function(t) {
            return t(e)
        })
    }).map(function(e) {
        var t = n(e);
        $("#graphics").append(t)
        $('[data-toggle="tooltip"]').tooltip()
    })

}
$(document).ready(function() {
    Tabletop.init({
        key: "1TU-qiEpZAkLMXvPE8v5HPaPJhEqyYPSrwZ513LIA3h8",
        callback: showInfo,
        parseNumbers: !0
    });
    var allRows = [];
    
    $("#graphic-menu a").click(function(e) {
        $("#graphic-menu li").removeClass('active')
        $(this).closest('li').addClass('active')
        var link = $(this).attr('id');
        filterByDatatype(link);
    });
    
    $("body").on("click", "a.copy", function() {
        $("a.copy").attr('title', 'Copy URL').tooltip('fixTitle');
        $(this).attr('title', 'Copied!').tooltip('fixTitle').tooltip('show');
    });
});
Handlebars.registerHelper("clean", function(input) {
    var output = input.toLowerCase();
    return output.replace(/[^a-zA-Z]/g, '');
});