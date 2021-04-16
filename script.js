




$( function() {

// Предупреждение о куки
  setTimeout(function(){

      $('#cookie').css({marginLeft: "20px"})
  }, 20000);

$('#deliteDivCookie').click(function(){
$('#cookie').css({marginLeft: "-1500px", opacity: "0"})
})




// Регистрация
      $('#createUser').click(function(){
        $('#dialog-form').css({display: "block"})
      })

  $('#close').click(function(){
    $('#dialog-form').css({display: "none"})
  })

// видео
  $('#btnVideo').click(function(){
    $('#video').css({display: "block"})
  })
  $('#video').click(function(){
    $('#video').css({display: "none"})
  })

  // Прелоадер
    // задержка функции
    setTimeout(function(){
      // Добавляю класс со стилями прелоадера
      $('body').addClass('loaded')
    }, 3000);

//Слайдер
$('.slider').slick({
  arrows:true,
  dots:true,
  slidesToShow:2,
  speed:1000,
  easing:'ease',
  autoplay:true,
  autoplatSpeed: 3000,
  pauseOnFocus:true,
  // pauseOnHover:true,
  pauseOnDotsHover:true,
  draggable:false,
  responsive:[
    {
      breakpoint: 768,
      settings:{
        slidesToShow:1
      }
    }
  ]
});



} );




// анимация при скроле

const animItems = document.querySelectorAll(`._anim-items`)
if (animItems.length > 0) {
    window.addEventListener(`scroll`, animOnScroll)

    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index]
            const animItemHeight = animItem.offsetHeight
            const animItemOffSet = offset(animItem).top
            const animStart = 4
            let animItemPoint = window.innerHeight - animItemHeight / animStart
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart
            }
            if ((pageYOffset > animItemOffSet - animItemPoint) && pageYOffset < (animItemOffSet + animItemHeight)) {
                animItem.classList.add(`_active`)
            } else {
                if (!(animItem.classList.contains(`_anim-no-hide`))) {
                    animItem.classList.remove(`_active`)
                }
            }
        }
    }

    function offset(el) {
        const rect = el.getBoundingClientRect()
        let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop
        return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }

    setTimeout(() => {
        animOnScroll()
    }, 300)
}

// аккардеон

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {

        this.classList.toggle("activee");


        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

// Функция для страницы курсов

function openPage(pageName,elmnt,color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";

    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;

}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
