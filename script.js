$(document).ready(function(){

    $(".catImgs").hide();

    $(".puzzleImgs").on("click", function (){
        var temp = $(this).attr("src")
        $(this).attr("src", $(this).attr("alt-src"));
        $(this).attr("alt-src", temp);
    })
    

});