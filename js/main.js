$(documnet).ready(function(){
    $("h3").hide();
//$(".colorRojo").hide();
//$("#Parrafo").hide();

/*  $ $("h3").click(function(){
    $(this).hide(); 

    $("h3").mousedown(function(){
    alert("down");
    });
    $("h3").mouseup(function(){
        alert("solar click");
    });*/

/*
    $("input").focus(function(){
       $(this).css("background-color", "yellow"); 
    });
    $("input").blur(function(){
        $(this).css("background-color","blue");
    });
    */
$("h3").on({
mouseenter: function(){
$(this).css("background-color", "yellow");
},
mouseleave: function(){
    $(this).css("background-color", "red");
    },
    click: function(){
        $(this).css("background-color", "pink");
        }

});

});
