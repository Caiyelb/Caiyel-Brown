$(".to-pack-button").click(function(){
    var cell = $(".to-pack-input").val();
    $(" .packing-list").append("<li>" + cell + "</li>");

    
    });
