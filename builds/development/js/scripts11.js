$(document).ready(function(){
  // Scripts for page11.html

  $('#video').on('ended', function () {
    $('#d1').fadeIn('slow').removeClass('hidden');
    $('#next-btn-11').removeClass('hidden')
  });

  document.getElementById('next-btn-11').onclick = function() {
    location.href = "page12.html";
  };
});
