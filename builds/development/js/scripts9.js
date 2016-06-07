$(document).ready(function(){
  // Scripts for page9.html

  $('#d1').click(function(){
    $('#d2').removeClass('hidden')
    $('#img-2').removeClass('hidden')
  });

  $('#d2').click(function(){
    $('#d3').removeClass('hidden')
    $('#img-3').removeClass('hidden')
  });

  $('#d3').click(function(){
    $('#d4').removeClass('hidden')
    $('#img-4').removeClass('hidden')
    $('#next-btn-9').removeClass('hidden')
  });

  document.getElementById('next-btn-9').onclick = function() {
    location.href = "page10.html";
  };
});
