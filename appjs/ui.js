(function($){
  $('#urlSubmit').click(function(){
    var sourceUrl = $.trim($('#urlField').val()),
        sourceType = $('.sourceTypeSelect:checked').val();
    $.ajax({
      url: './urldata?url=' + sourceUrl + "&sourcetype=" + sourceType,
      success: function(data) {
        $('#viewPanel').html(data);
      }
    });
  });
})(jQuery);