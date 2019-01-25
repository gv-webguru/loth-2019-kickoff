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
       msg = "Excellent! We'll see you there.";
        $(".message p").html(msg);
       }
    if(going === "no"){
        msg = "We're sorry you won't be able to make it to the the 2019 Kick-Off. We hope you see you at our next big event.";
        $(".message p").html(msg);
    }
    
    console.log(msg);
});
