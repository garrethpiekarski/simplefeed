!function(u){u("#urlSubmit").click(function(){var l=u.trim(u("#urlField").val());u.ajax({url:"./urldata?url="+l,success:function(l){u("#viewPanel").html(l)}})})}(jQuery);