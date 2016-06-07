$(document).ready(function(){
  // Scripts for page5.html

  $('#d1').click(function(){
    $('#d2').removeClass('hidden')
    $('#img-2').removeClass('hidden')
    $('#next-btn-5').removeClass('hidden')
  });

  document.getElementById('next-btn-5').onclick = function() {
    location.href = "page6.html";
  };
});
