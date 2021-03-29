
// var theme = document.getElementById("theme");
//
// theme.addEventListener('click', function(){
//
// document.body.classList.toggle('.dark'),
//
//   localStorage.setItem('theme', 'dark')
//   console.log(localStorage.getItem('theme'));
//
//
//
// })



$( function() {



// переключение светлой и темной темы
// $('body').load(function(){
//   if(!localStorage.theme) localStorage.theme = 'light';
//   $('body').addClass(localStorage.theme);
// })
  // $('.theme-switcher').click(function(){
  //   $('body').toggleClass("dark");
  //
  //   localStorage.theme = document.body.className || 'light'
  //
  //
  //
  //
  // })

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
    }, 1000);



} );
