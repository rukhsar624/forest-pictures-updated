// $(window).scroll(function () {
//     var scroll = $(window).scrollTop();
//     if (scroll > 90) {
//       $("#navbar-fixed-top").css("background", "#000");
//       $("#navbar-fixed-top").css("box-shadow", "rgb(0 0 0 / 46%) 8px 8px 33px");
//       $(".destop-nav-bar .header_links").css("color", "#fff");
//       $(".destop-nav-bar .logo h1").css("color", "#ffffff");
//       $(".destop-nav-bar .header_links.active").css("color","#FF9E01");
//       $(".hamburger div").css("background", "#000");
//       $(".hamburger.active div").css("background", "#8b0129");
//       $(".destop-nav-bar .header_links").hover(function(){
//         $(this).css("color","#FF9E01")
//       });
      
//     } else {
//       $("#navbar-fixed-top").css("background", "none");
//       $("#navbar-fixed-top").css("box-shadow", "none");
//       $(".destop-nav-bar .header_links").css("color", "#fff");
//       $(".destop-nav-bar .logo h1").css("color", "#1a1a1a");
//       $(".destop-nav-bar .header_links.active").css("color","#FF9E01");
//       $(".hamburger div").css("background", "red");
//       $(".hamburger.active div").css("background", "#00000");
//       $(".destop-nav-bar .header_links").hover(function(){
//         $(this).css("color","#FF9E01")
//       });
//     }
//   });
$(window).scroll(function () {
	var scroll = $(window).scrollTop();
	if (scroll > 90) {
		$("#navbar-fixed-top").css("background", "#000");
		$("#navbar-fixed-top").css("box-shadow", "rgb(0 0 0 / 46%) 8px 8px 33px")
	}
	else {
		$("#navbar-fixed-top").css("background", "none");
		$("#navbar-fixed-top").css("box-shadow", "none")

	}
})
 // MOBILE SCREEN SIDE NAV
 var sidebarBox = document.querySelector("#box");
 var sidebarBtn = document.querySelector("#btn");
 var pageWrapper = document.querySelector("#main-content");

 sidebarBtn.addEventListener("click", function (event) {
   if (this.classList.contains("active")) {
     this.classList.remove("active");
     sidebarBox.classList.remove("active");
     $("#main-content #btn div").css(
       "background", "#ffffff"
     );
   } else {
     this.classList.add("active");
     sidebarBox.classList.add("active");
     $("#main-content #btn div").css(
       "background", "#000"
     );
   }
 });
// eye 
$(".toggle-password").click(function() {

  $(this).toggleClass("fa-eye fa-eye-slash");
  var input = $($(this).attr("toggle"));
  if (input.attr("type") == "password") {
    input.attr("type", "text");
  } else {
    input.attr("type", "password");
  }
});
// ========================Swiper Slider6 Open========================//
var swiper = new Swiper(".mySwiper", {
	slidesPerView: 3,
	spaceBetween: 30,
	loop: true,
	// navigation: {
	//     nextEl: ".swiper-button-next",
	//     prevEl: ".swiper-button-prev",
	//   },
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	// autoplay: {
	//   delay: 3000,
	//   disableOnInteraction: false,
	//   },
	breakpoints: {
		// when window width is >= 320px
		768: {
			slidesPerView: 4,
			spaceBetween: 20
		},
		820: {
			slidesPerView: 4,
			spaceBetween: 20
		},
		375: {
			slidesPerView: 4,
			spaceBetween: 20
		},
		360: {
			slidesPerView: 3,
			spaceBetween: 20
		},
		320: {
			slidesPerView: 3,
			spaceBetween: 20
		},
		280: {
			slidesPerView: 1,
			spaceBetween: 20
		},
		390: {
			slidesPerView: 4,
			spaceBetween: 5
		},
		414: {
			slidesPerView: 4,
			spaceBetween: 10
		},
		1920: {
			slidesPerView: 4,
			spaceBetween: 20
		},
		1600: {
			slidesPerView: 4,
			spaceBetween: 20

		},
		1366: {
			slidesPerView: 4,
			spaceBetween: 10
		},
		1400: {
			slidesPerView: 4,
			spaceBetween: 10
		},
		1440: {
			slidesPerView: 4,
			spaceBetween: 5
		},
		1366: {
			slidesPerView: 4,
			spaceBetween: 5
		},
		2560: {
			slidesPerView: 4,
			spaceBetween: 20
		},
		1024: {
			slidesPerView: 4,
			spaceBetween: 10
		}
	}

});
// ========================Swiper Slider6 Closed========================// 