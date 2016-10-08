(function($){
  $('#urlSubmit').click(function(){
    var sourceUrl = $.trim($('#urlField').val());
    $.ajax({
      url: './urldata?url=' + sourceUrl,
      success: function(data) {
        $('#viewPanel').html(data);
      }
    });
  });
})(jQuery);