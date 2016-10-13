(function($){
  $('#urlSubmit').click(function(){
    var sourceUrl = $.trim($('#urlField').val()),
        sourceType = $('.sourceTypeSelect:checked').val(),
        feedFormat = $('.feedFormatSelect:checked').val();
    $('#viewPanel').html('Loading new data. <strong>This may take a while.</strong>');
    $.ajax({
      url: './urldata?url=' + sourceUrl + "&sourceType=" + sourceType + "&feedFormat=" + feedFormat,
      dataType: 'json',
      success: function(data) {
        if (data.length) {
          $('#viewPanel').text(JSON.stringify(data));
        } else {
          $('#viewPanel').text('No data was returned. Check your settings.');
        }
      }
    });
  });
})(jQuery);