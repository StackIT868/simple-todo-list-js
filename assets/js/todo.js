$(document).ready(function(){


    //check off specific todos by clicking
    $("ul").on("click", "li", function(){
        $(this).toggleClass("completed");
    });


    //click on X to delete Todos
    $("ul").on("click", "span", function(e){
        $(this).parent().fadeOut(500, function(){
            $(this).remove();
        });
        e.stopPropagation();
    });


    //create new Todos
    $("input[type='text']").keypress(function(e){
        //only if user hits enter key
        if(e.which === 13){
            //get Text from input
           var todoText = $(this).val();
           //clear the input box
            $(this).val("");
           //create a new li and add to ul
            $("ul").append("<li class='list-group-item'><span class='style'><i class='fa fa-trash fa-2x' aria-hidden'true'></i> </span> "+todoText+"</li>");
        }else{
            console.log("not enter");
        }
    });


    //toggle add todos input
    $(".fa-plus").click(function(){
        $("div.input-group").fadeToggle();
    });



});