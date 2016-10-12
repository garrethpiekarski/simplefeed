(function($){
  $('#urlSubmit').click(function(){
    var sourceUrl = $.trim($('#urlField').val()),
        sourceType = $('.sourceTypeSelect:checked').val(),
        feedFormat = $('.feedFormatSelect:checked').val();
    $.ajax({
      url: './urldata?url=' + sourceUrl + "&sourceType=" + sourceType + "&feedFormat=" + feedFormat,
      dataType: 'json',
      success: function(data) {
        $('#viewPanel').html(JSON.stringify(data));
      }
    });
  });
})(jQuery);