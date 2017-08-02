$(document).ready(function(){
$.ajax({
url: 'https://randomuser.me/api/',
dataType: 'json',
success: function(data){
    var firstname=(data.results[0].name.first)
    var lastname=(data.results[0].name.last);
    var photo=(data.results[0].picture.large)
    var dod=(data.results[0].dob)
    var loco=(data.results[0].location.street)
    var nationality=(data.results[0].nat)
    var citi=(data.results[0].location.city)
    var postmalone=(data.results[0].location.postcode)

        console.log(data.results[0]),
        $("h1").append("<img src="+photo+">"),
        $("h1").append(" " + firstname + " " + lastname + " "),
        $("p").append("Born " + dod)
        $("p2").append("Lives At " + loco + ", " + citi + ", " + postmalone )

$.getJSON({
    url:"https://restcountries.eu/rest/v2/alpha?codes=" + nationality,
    dataType:'json',
    success:function(data) {
        var country=(data[0].name)
        $("h1").append("from "+country)
    }
})
}



})
})