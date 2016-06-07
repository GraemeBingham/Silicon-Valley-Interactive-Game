$(document).ready(function(){
  // Scripts for page7.html

  $('#d1').click(function(){
    $('#d2').removeClass('hidden')
    $('#img-2').removeClass('hidden')
    $('#next-btn-8').removeClass('hidden')
  });


  document.getElementById('next-btn-8').onclick = function() {
    location.href = "index.html";
  };
});
