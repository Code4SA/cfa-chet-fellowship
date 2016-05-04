var app = angular.module("Tableizer", []);

app.controller("TextAreaController", function($scope){
    $scope.textarea = {};
    $scope.options = getDefaults();
    $scope.variable = $scope.textarea.text;
    $scope.currentTableValue = "";
    $scope.$watch('textarea.text', function(newValue, oldValue){
      // Initialize to blank text if values are undefined
      newValue = newValue || "";
      oldValue = oldValue || "";

      //Every time on change, clear the table
      //TODO: Optimize to reflect only changes instead of redrawing 
      //      entire table every time
      deleteTable();

      if( !!!newValue ) {
        $('<div/>').text('Add table to convert to HTML')
          .attr('id','id-table')
          .appendTo('#table-container');
      
        $scope.currentTableValue = "";
      }

      else {
        // Needed when recreating table when table properties are 
        // changed using controls
        $scope.currentTableValue = newValue;
        var table = createTable(newValue, $scope.options);
        if(table) {
          table.appendTo('#table-container');
        }
         var table_elem_source = document.getElementById('id-table').outerHTML;
         var source_ta = document.getElementById('source');
         source_ta.value = html_beautify(table_elem_source);
      }
    });

    // Delete and recreate table when table options are changed
    $scope.$watch('options', function(newValue, oldValue) {
     if($scope.currentTableValue) {
       deleteTable();
       var table = createTable($scope.currentTableValue, $scope.options);
       table.appendTo('#table-container'); 
       var table_elem_source = document.getElementById('id-table').outerHTML;
       var source_ta = document.getElementById('source');
       source_ta.value = html_beautify(table_elem_source);
     }
    }, true); 

});


function getDefaults() {
  return {
    headers:true,
  };  
}

function deleteTable() {
  if (!!$('#id-table').length) {
    $('#id-table').remove();
  }
}

function createTable(newValue, options) {
  var table = $('<table/>')
    .attr('id','id-table')
    .addClass('table');

  var currentColor = 0;
  
  var r = newValue.split("\n");

  for (var i = 0; i < r.length; i++) {
    // Create empty table row
    var tr = $('<tr/>');


    var c = r[i];
    r[i] = c.split("\t");

    // Fill table columns
    for (var j=0; j<r[i].length; j++) {
      var td;
      if ( i === 0 && (options.headers)) {
        td = $('<th/>');
      }
      else {
        td = $('<td/>');
      }
      td.text(r[i][j]);
      td.appendTo(tr);  
    }

    tr.appendTo(table);
  } 
  return table;
}
