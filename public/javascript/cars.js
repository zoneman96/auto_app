$('.ui.dropdown')
  .dropdown()
;

$(document).ready(function() {
  $('#sort').on('change', function() {
     document.forms["sort-form"].submit();
  });
});