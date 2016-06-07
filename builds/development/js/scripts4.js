$(document).ready(function(){
  // Scripts for page3.html
  $('#video').on('ended', function () {
    $('#d1').fadeIn('slow').removeClass('hidden');
    $('#').fadeIn('slow').removeClass('hidden');
    $('#next-btn-4').removeClass('hidden')
  });

  document.getElementById('next-btn-4').onclick = function() {
    location.href = "page5.html";
  };
});
