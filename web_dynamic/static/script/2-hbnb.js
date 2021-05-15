$(document).ready(init);

const HOST = '0.0.0.0';

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

  api_Status();
}

function api_Status () {
    const API_URL = `http://${HOST}:5001/api/v1/status/`;
    $.get(API_URL, (data, textStatus) => {
      if (textStatus === 'success' && data.status === 'OK') {
        $('#api_status').addClass('available');
      } else {
        $('#api_status').removeClass('available');
      }
    });
  }