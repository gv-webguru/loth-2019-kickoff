/*Scripts for Loth RSVP Campaign.*/
$(document).ready(function(){
    console.log("Ready to rock!");
    
    $("#yes").click(function(ev){
        ev.preventDefault();
        console.log("I'm going.");
        $("#kickoffRSVP").val("yes");
        $("#rsvp-form").submit();
    });
    
    $("#no").click(function(ev){
        ev.preventDefault();
        console.log("I have better things to do.");
        $("#kickoffRSVP").val("no");
        $("#rsvp-form").submit();
    });
    
    var going = document.getElementById("going").value;
    var msg;
    if(going === "yes"){
       msg = "Woohoo! We are so excited to see you, and we can’t wait for the Kick-Off (You’re going to love it!)";
        $(".message p").html(msg);
       }
    if(going === "no"){
        msg = "We are sad you will not be able to make it to the 2019 Kick-Off meeting.<br><br>I'm sure you will be hearing about its greatness for a long time!";
        $(".message p").html(msg);
    }
    
    console.log(msg);
});
