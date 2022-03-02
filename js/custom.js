$(document).ready(function(){
    // Accout No. Change Model 
    $("#changeReq").click(function(){
        $("#exampleModal").hide()
        $(".modal-backdrop.show").hide()
        console.log("Account No. change Modal");
    });


    // NDC Modification Model
    $("#NDC-modify").click(function(){
        $("#exampleModal").hide()
        $(".modal-backdrop.show").hide()
        console.log("NDC modification modal");
    })
});