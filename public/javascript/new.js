var photoInput = $("#photo-input:first");

$("#add-photo").click(function(){
    $(photoInput).clone().insertAfter("div.photo-input:last");
    $("div.photo-input:last").removeClass("hidden");
});

$("#remove-photo").click(function() {
    $("div.photo-input:last").remove();
})

$('.ui.radio.checkbox')
  .checkbox()
;