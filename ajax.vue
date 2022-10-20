$(document).on('click', '#step-second', function (e) {
  e.preventDefault();
  var form = $('#msform');
  var action = '/untp-x/step-second/';
  var method = form.attr('method');
  var data_ = form.serialize();
  var current_fs, next_fs;
  $.ajax({
      type: method,
      url: action,
      data: data_,
      dataType: 'Html',
      success: function (data) {
        $('.form-error').detach();
        current_fs = $("#step-second").parent();
        next_fs = $("#step-second").parent().next();
        $('#progressbar li').eq ($('fieldset').index (next_fs)).addClass ('active');
        next_fs.show();
        current_fs.hide();
      },
      error: function (error) {
        $('.form-error').detach();
        let response = JSON.parse(error.responseText).data
        let errors = Object.entries(response)
        errors.forEach(function (value, index, array){
          $(`#${value[0]}`).append(`<small class="text-danger form-error">${value[1]}</small>`)
          $(`#r1_${value[0]}`).append(`<small class="text-danger form-error">${value[1]}</small>`)
          $(`#r2_${value[0]}`).append(`<small class="text-danger form-error">${value[1]}</small>`)
        });
        let error_message = JSON.parse(error.responseText).message
        if(error_message) { 
          $(function () {
            toastr.options = {
              "closeButton": true,
              "positionClass": "toast-bottom-right",
              "fadeIn": 300,
              "fadeOut": 1000,
              "timeOut": 5000,
            }
            toastr.error(error_message);
          });
        }
      } 
  });
  return true;
});