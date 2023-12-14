
 $(document).ready(function(){
  if($(document).width() == 1440 || $(document).width() > 1440 ){  
    $(".slider").slick({  
      dots: false,      
      slidesToShow: 3,
      prevArrow: '<div class="arrow-prev"><i class="fa-solid fa-arrow-left"></i></div>',
      nextArrow: '<div class="arrow-next"><i class="fa-solid fa-arrow-right"></i></div>',
    })
  }
 
  else
  $(document).ready(function(){
    $(".slider").slick({
      dots: false,   
      slidesToShow: 1,
      prevArrow: '<div class="arrow-prev"><i class="fa-solid fa-arrow-left"></i></div>',
      nextArrow: '<div class="arrow-next"><i class="fa-solid fa-arrow-right"></i></div>',
    
    }) 
 })
 })


 $(document).ready(function(){
  if($(window).width() == 1024){
    $(".phone1").attr("src", "img/phoneResize.png")
  }
  else if($(window).width() == 425){
    $(".phone1").attr("src", "img/phoneResize.png")
    }
    else if($(window).width() <= 320){
      $(".phone1").attr("src", "img/PhoneOne05.png")
     
      }
  
  else if($(window).width() <= 768){
    return false;
    }
  else 
  return false;
 })
 $(document).ready(function(){
  if($(window).width() == 1024){
    $(".phone2").attr("src", "img/phone2Resize.png")
  }
  else if($(window).width() == 425){
    $(".phone2").attr("src", "img/phone2Resize.png")
   
    }
    else if($(window).width() <= 320){
      $(".phone2").attr("src", "img/PhoneTwo05.png")
     
      }
  else if($(window).width() <= 768){
  return false;
  }else
  return false;
 })

 $(document).scroll(function(){
  if ($(document).width() < 1024 )
    return false;

   if($(document).scrollTop() > $('.logo').height() / 2)
    $("header").addClass("fixed");
    else
    $("header").removeClass("fixed");

});

$("#darkTheme").on("click",function(){
  $("#darkTheme, #sun").toggle({});

  $("body").css({
    background: "#3b3b3b",
    color: "#eee",
  })
  $(".left-side").css({
    background: "#bbb",
    boxShadow: "3px 0px 10px 2px rgba(0, 134, 236, 0.52)",
    color: "black"
  })
  $(".right-side").css({
    boxShadow: "3px 0px 10px 2px rgba(0, 134, 236, 0.52)",
  })
  $(".header-list-item a").css({
    color: "#eee"
  })
  $(".fixed").css({
    background: "black",
    boxShadow: "3px 0px 10px 2px rgba(0, 134, 236, 0.52)",
  })
  $(".sliderSection").css({
    boxShadow: "3px 0px 10px 2px rgba(0, 134, 236, 0.52)",
  })
  $(".sliderinfo").css({
    boxShadow: "3px 0px 10px 2px rgba(0, 134, 236, 0.52)",
  })
  $(".connectionUs div").css({
    background: "black"
  })
  $("#hidden-menu ").css({
    background: "#303030",
    color: "#fff"
  })
  $("#hidden-menu ul li a").css({
    color: "#fff"
  })
});

$("#sun").on("click",function(){
  $("#darkTheme, #sun").toggle({});
  $("body").css({
    background: "#fff",
    color: "black"
  })
  $(".left-side").css({
    background: "#F2F3FF",
    boxShadow: "none",
  })
  $(".right-side").css({
    boxShadow: "none",
  })
  $(".header-list-item a").css({
    color: "black"
  })
  $(".fixed").css({
    background: "#eee",
    boxShadow: "none",
  })
  $(".header").css({
    background: "#fff"
  })
  $(".sliderSection").css({
    boxShadow: "-2px 1px 10px 2px rgba(34, 60, 80, 0.2)",
  })
  $(".sliderinfo").css({
    boxShadow: "-2px 1px 10px 2px rgba(34, 60, 80, 0.2)"
  })
  $(".connectionUs div").css({
    background: "#bbb"
  })
})

$("#menu").on("click",function(){
  $("#hidden-menu").animate({
    "right": "530px"
  },200)
})
$("#close-menu").on("click",function(){
  $("#hidden-menu").animate({
    "right": "-300px"
  },200)
})
function slowScroll(id){
  $("html, body").animate({
      scrollTop: $(id).offset().top -50
  },500);
  return false;
};
$(".left-side .getStart").on("click",function(){
  $(".left-side p").toggle({})
});
$("#start").on("click",function(){
  let email = $("#getstartMail").val().trim();
  if(email.split("@").length != 2 || email.split(".").length != 2  ){
    $(".left-side label").text("Вы ввели неверный емайл");
    $(".left-side label").fadeIn();
  }
  else 
  $(".left-side label").text("Отправлено");
  $(".left-side label").fadeIn();
 


  setTimeout( function(){
     $(".left-side label").fadeOut();
  },1500);
});
