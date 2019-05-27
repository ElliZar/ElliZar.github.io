$(document).ready(function() {
    function addItem(){
       return $(".list").prepend('<li class="d-flex mt-2 list-item justify-content-between align-items-center"><button id="my" class="btn btn-primary"><i class="fas p-2 fa-plus-circle"></i></button><input type="text" placeholder="your task hear" class="form-control main-input"/></li>');
    }
    $(".container").on("click","#start-app",function(e) {
        $(this).addClass("collapse");
        $("#clear").removeClass("collapse");
        addItem();
    });
    $(".list").on("click","#my", function() {
        let inputValue = $(".main-input").val();
        if(inputValue === "" || inputValue.length < 5){
            $(this).addClass("btn-warning");
        }else{
            $(".main-input"). replaceWith(`<div class="border border-info rounded mt-1 col-sm-5 col-sm-10 task"><h6 class="mt-2 h5 task-text text-capitalize">${inputValue}</h6></div><i class="done text-success  fas fa-check"></i><button class="btn btn-danger delete"><i class="fas fa-minus"></i>`);
            $(this).remove();
            addItem();            
        }
    });
    $(".list").on("click", ".delete", function(){
        $(this).parent(".list-item").remove();
    });
    $(".list").on("click", ".done", function(){
        let task = $(this).siblings(".task");
        task.find(".task-text").addClass("check-task");
        $(this).remove();
    });
    $("body").on("click", "#clear", function(){
        let allList = $(".list li");
        allList.remove();
        $(this).addClass("collapse");
        $("#start-app").removeClass("collapse");
    });
    $("#search").on("change", function(){
        
    });
});