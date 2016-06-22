function showInfo(e, t) {
    if (window.location.hash) {
        var switchTab = location.hash.substring(location.hash.lastIndexOf("#") + 1, location.hash.lastIndexOf("-"));
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
        $("#graphics").append(t)
        $('[data-toggle="tooltip"]').tooltip()
    })
    if (window.location.hash) {
        var anchorScroll = location.hash.substring(location.hash.lastIndexOf("#") + 1);
        var withHash = "#" + anchorScroll;
        withHash.scrollIntoView();
    }
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