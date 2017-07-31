$(document).ready(function(){

$.ajax({
    url:"https://swapi.co/api/people/10/?format=json",
    dateType: "json",
    success:function (data) {
        console.log(data.name)
        console.log(data.height)
        console.log(data.gender)
    }
})
});