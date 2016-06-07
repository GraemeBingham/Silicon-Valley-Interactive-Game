$(document).ready(function(){
  // Scripts for page10.html

  $('#d1').click(function(){
    $('#d2').removeClass('hidden')
    $('#img-2').removeClass('hidden')
  });

  $('#d2').click(function(){
    $('#d3').removeClass('hidden')
    $('#img-3').removeClass('hidden')
    $('#next-btn-10').removeClass('hidden')
  });

  document.getElementById('next-btn-10').onclick = function() {
    location.href = "page11.html";
  };
});
