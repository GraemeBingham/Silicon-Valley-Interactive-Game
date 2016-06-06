$(document).ready(function(){

  $('.container').fadeIn(1000,function(){
    $('.stage').fadeIn(2000).removeClass('hidden');
  }).removeClass('hidden');

  $('.menu a').on('click',function(e){
    $('.storypopup').fadeIn(2000).removeClass('hidden');
  });
});
