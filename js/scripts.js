var name = function() {

}

$(document).ready(function() {
  $("form#calculator").submit(function(event) {
    var nameInput = $("input#name"). val();

    $(.name).text(name#input);


    $('#quiz').show();

    event.preventDefault();
  });
});
