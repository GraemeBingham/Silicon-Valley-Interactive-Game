$(document).ready(function(){
  // Scripts for page6.html

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
  });

  $('#d4').click(function(){
    $('#d5').removeClass('hidden')
    $('#img-5').removeClass('hidden')
  });

  $('#d5').click(function(){
    $('#d6').removeClass('hidden')
    $('#img-6').removeClass('hidden')
    $('#next-btn-6').removeClass('hidden')
  });



  document.getElementById('next-btn-6').onclick = function() {
    location.href = "page7.html";
  };
});
