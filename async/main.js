$(document).ready(function(){
  $('.form').on('submit', function(e) {
    var code = $('.code-input').val();

    $.ajax({
      url: 's',
      type: 'POST',
      data: {code: code}
    })
    .done(function() {
      console.log("Success");
    })

    e.preventDefault();
  });
});
