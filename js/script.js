$(document).ready(function(){
    console.log("sha");
    $('.popup__toggle').on('click', popup);
    $('.drawer__toggle').on('click', openDrawer);
    function popup() {
        $('#popup').toggleClass("open");
    }
    function openDrawer() {
        $('#drawer').toggleClass("open");
        console.log("sha");
    }
    function fileHandler(event){
        var file = event.target.files[0]; //event.target references the object that dispatched the event (so here it is the input element)
        var reader = new FileReader();
        reader.onload = function(event){
            var data = event.target.result; //again event.target references the object that dispatched the event (here it is reader).
            $("#preview-img").attr('src', data);
        };
        reader.readAsDataURL(file);
    }

    function addImgToInfo() {
        $("#preview-img").clone().attr('id', '').appendTo('#image-wrapper');
    }

    $('#file').on("change", fileHandler);
    $('#submit-img').on('click', addImgToInfo);
});
var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8
    });
}
