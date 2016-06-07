$(document).ready(function(){
  // Scripts for page3.html

  $('#d1').click(function(){
    $('#d2').removeClass('hidden')
    $('#img-2').removeClass('hidden')
  });


  document.getElementById('next-btn-3').onclick = function() {
    location.href = "page4.html";
  };
});
