
var database = firebase.database().ref();


function save(){
    var email = $('#email').val();
    var name = $("#name").val();
    console.log(email + " "+name);

    var value={
        EMAIL: email,
        NAME: name
    }
    database.push(value);
}
database.on("child_added",function(rowData){
     var row = rowData.val();
    var email = row.EMAIL;
    var name = row.NAME;
    console.log(email+name)
    $('h4').empty();
$('h4').append(name +" and their email: "+ email +" has been saved in my Database. Hope To Talk To You Soon 🙌🏽");
});