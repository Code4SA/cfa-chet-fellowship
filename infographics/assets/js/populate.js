function showInfo(e, t) {
    if (window.top.location.hash) {
        var switchTab = window.top.location.hash.substring(window.top.location.hash.lastIndexOf("#") + 1, window.top.location.hash.lastIndexOf("-"));
        pageType = switchTab;
        
        var tabButton = "#" + switchTab;
        $(tabButton).click();
    
    } else {
        pageType = 'african-higher-education';
        $("#african-higher-education").click();
    }
    
    allRows = _.sortBy(t.sheets("input").all(), "order"),
    filterByDatatype(pageType)
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
        $("#graphics").append(t),
        $('[data-toggle="tooltip"]').tooltip()
    })
    if (window.top.location.hash) {
        window.top.location.hash = window.top.location.hash;
    }

}
$(document).ready(function() {
    Tabletop.init({
        key: "1TU-qiEpZAkLMXvPE8v5HPaPJhEqyYPSrwZ513LIA3h8",
        callback: showInfo,
        parseNumbers: !0
    });
    var allRows = [];
    
    $("#menu a").click(function(e) {
        $("#menu li").removeClass('active')
        $(this).closest('li').addClass('active')
        var link = $(this).attr('id');
        filterByDatatype(link);
    });
    
    $("body").on("click", "a.copy", function() {
        $("a.copy").attr('title', 'Copy URL').tooltip('fixTitle');
        $(this).attr('title', 'Copied!').tooltip('fixTitle').tooltip('show');
    });

});
