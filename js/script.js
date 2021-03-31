




$( function() {





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
