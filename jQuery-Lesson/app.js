$(function(){
  $('button').on('click', function(){
    $('ul').children().toggleClass('red');
  });
});