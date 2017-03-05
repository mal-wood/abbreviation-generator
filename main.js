$(document).ready(function(){
  submitButtonListener();
});

var submitButtonListener = function() {
  $('#abbrev-button').on("click", function(event){
    event.preventDefault();
    
    var request = $.ajax({
      url: 'http://www.stands4.com/services/v2/abbr.php?uid=' + MY_ID + '&tokenid=' + MY_TOKEN +'&term=asap',
      method: 'get'
    })

    request.done(function(response){
      console.log(response)
    })

  })
}