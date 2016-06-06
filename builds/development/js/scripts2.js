$(document).ready(function(){
  // Scripts for page2.html
  $('#d1').click(function(){
    $('#d1').fadeOut('Slow');
  });

  document.getElementById('next-btn-2').onclick = function() {
    location.href = "page3.html";
  };
});
