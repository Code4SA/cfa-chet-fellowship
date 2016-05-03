function showInfo(e, t) {
    allRows = _.sortBy(t.sheets("input").all(), "order"),
    filterByDatatype(pageType)
}
function filterByDatatype(e) {
    clearCards(),
    updateCards(allRows, [buildDatatypeFilter(e)])
}
function clearCards() {
    $("#cards").empty()
}
function buildDatatypeFilter(e) {
    return e ? function(t) {
        return t["category"] === e
    }
     : !1
}
function updateCards(e, t) {
    var t = t || []
      , a = $("#card-template").html()
      , n = Handlebars.compile(a);
    _.chain(e).filter(function(e) {
        return _.all(t, function(t) {
            return t(e)
        })
    }).map(function(e) {
        var t = n(e);
        $("#cards").append(t),
        $('[data-toggle="tooltip"]').tooltip()
    })
}
$(document).ready(function() {
    Tabletop.init({
        key: "1TU-qiEpZAkLMXvPE8v5HPaPJhEqyYPSrwZ513LIA3h8",
        callback: showInfo,
        parseNumbers: !0
    })
});
var allRows = [];

