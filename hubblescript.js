
      /*  RESPONSIVE MENU BAR */
const hamburger = document.getElementById("hamburger");
const navmenu = document.getElementById("nav-items")



hamburger.onclick = function(){
  hamburger.classList.toggle("responsive");
  navmenu.classList.toggle("responsive");
};




// ========================================OUTSIDE CLICK CLOSE NAVIGATION CONTAINER===============================
















$(document).ready(function(){
  $(".hide-content").hide();
  $(document).on('click',"#sm-button",function(){
    var morlesbutton = $(".hide-content").is(":visible")?'Read More': 'Read Less'
    $(this).text(morlesbutton);
    $(this).parent(".hubble-beginning-written-content").find(".hide-content").toggle();
    $(this).parent(".hubble-beginning-written-content").find(".visible-content").toggle();
  
    })
});



/*the beginning section READ MORE AND READ LESS */

$(document).ready(function(){
  $(".invisible-content").hide();
  $(document).on('click',"#btn",function(){
    var morelessbutton = $(".invisible-content").is(":visible")?'Read More': 'Read Less'
    $(this).text(morelessbutton);
    $(this).parent(".beginning-written-content").find(".invisible-content").toggle();
    $(this).parent(".beginning-written-content").find(".visible-content").toggle();
  
    })
});







$(document).ready(function(){
  $(".non-visible-content").hide();
  $(document).on('click',"#anvrsry-btn",function(){
    var btnmoreless = $(".non-visible-content").is(":visible")?'Read More': 'Read Less'
    $(this).text(btnmoreless);
    $(this).parent(".mobile-carousel-anniversary-disclousers-content").find(".non-visible-content").toggle();
    $(this).parent(".mobile-carousel-anniversary-disclousers-content").find(".visible-content").toggle();
  
    })
});


/* slider of anniversary image*/ 
    var swiper = new Swiper(".mySwiper", {
      direction: "vertical",
      slidesPerView: 1,
      spaceBetween: 30,
      mousewheel: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  




  
/*ACHIEVEMENTS SLIDER*/

 $(document).ready(function(){
    $('.achievements-slider').slick({
      dots: true,
  infinite: true,
  speed: 300,
    });
  });







/* here will write js for the time lapse covered by hubble space telescope */


function lapse(){
  let custdate = moment("1990-04-24 12:33:51");
  let curdate = moment();
  diff = moment.preciseDiff(curdate, custdate,true);

diff_years = diff['years'];
diff_months = diff['months'];
diff_days = diff['days'];
diff_hours = diff['hours'];
diff_minutes = diff['minutes'];
diff_seconds = diff['seconds'] <10 ? '0'+ diff['seconds'] : diff_seconds= diff['seconds'];

document.getElementById("hubble-time-lapse").innerHTML = diff_years + " " + "YEARS" + " : " +  diff_months + " " + "MONTHS" +" : "+ diff_days + " " +"DAYS"+" : "+ diff_hours+" "+"HOURS"+" : " + diff_minutes + " " + "MINUTES" + " : " + diff_seconds + " " + "SECONDS"

}
lapse();

setInterval(lapse,1000);





// =================================================================================================================ON SCROLL BUTTON =================================================================



let mybutton = document.getElementById("scrolltop");

// show button on scroll
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    mybutton.style.display = "block";

  } else {
    mybutton.style.display = "none";
  }
}

//scroll top
function gototop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}













