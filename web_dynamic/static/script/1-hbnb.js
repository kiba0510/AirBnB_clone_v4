$(document).ready(init);

function init () {
  const amnityBox = {};
  $('.amenities .popover input').change(function () {
    if ($(this).is(':checked')) {
      amnityBox[$(this).attr('data-name')] = $(this).attr('data-id');
    } else if ($(this).is(':not(:checked)')) {
      delete amnityBox[$(this).attr('data-name')];
    }
    const names = Object.keys(amnityBox);
    $('.amenities h4').text(names.sort().join(', '));
  });
}