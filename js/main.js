"use stric"
// Jquery
$(document).ready(function(){
  // gnb
  $("#gnb").hover(function(){
    $(".gnb__sub, .gnb__bg").stop().slideDown(200);
  },function(){
    $(".gnb__sub, .gnb__bg").stop().slideUp(200);
  });

  // slide
  function slidemove(){
    let smv=$(".slide__box > div").width();
    $(".slide__box").animate({
      left:-smv
    },function(){
      $(".slide__box > div:first").appendTo(".slide__box");
      $(".slide__box").css({
        left:0
      });
    });
  }
  setInterval(slidemove, 3000);

  // pop
  $("#pop").hide();
  $("#notice ul li:first").click(function(){
    $("#pop").show();
  });
  $("#pop #popclose").click(function(){
    $("#pop").hide();
  });


});