$(document).ready(function(){
$.ajax({
url: 'https://opentdb.com/api.php?amount=10&category=15&type=multiple',
dataType: 'json',
success: function(data){
    var questiontype1 =(data.results[0].question)
    var incorrectanswers1pt1=(data.results[0].incorrect_answers[0])
    var incorrectanswers1pt2=(data.results[0].incorrect_answers[1])
    var incorrectanswers1pt3=(data.results[0].incorrect_answers[2])
    console.log(data.results[0])
    console.log(data.results[0].question)
    console.log(data.results[0].incorrect_answers)  
    $("h2").append(questiontype1)
    $("h3").append(" "+ incorrectanswers1pt1 +", "+incorrectanswers1pt2+", "+incorrectanswers1pt3)
}
 })
})