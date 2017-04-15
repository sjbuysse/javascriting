$(document).ready(function(){
    $('.popup__toggle').on('click', popup);
    function popup() {
        $('#popup').toggleClass("open");
    }
    function fileHandler(event){
        var file = event.target.files[0] //event.target references the object that dispatched the event (so here it is the input element)
        var reader = new FileReader();
        reader.onload = function(event){
            var data = event.target.result; //again event.target references the object that dispatched the event (here it is reader).
            $("#preview-img").attr('src', data);
        };
        reader.readAsDataURL(file);
    }
    $('#file').on("change",fileHandler);
});
