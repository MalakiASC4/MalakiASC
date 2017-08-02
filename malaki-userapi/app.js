$(document).ready(function(){
$.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data) {

    var firstname=(data.results[0].name.first);
    var lastname=(data.results[0].name.last);
    var photo=(data.results[0].picture.thumbnail);
    console.log(data.results[0].name);
    // console.log(data.results[4].thumbnail);
    $("h1").append(firstname + " " + lastname + " ")
  }
})
});