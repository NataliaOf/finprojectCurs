// window.navigator.geolocation.getCurrentPosition(success[, error[, options]]);



// Нахожу кнопку поиска города
   var  btn = document.getElementById('searchBtn');
  // Функция поиска
   btn.addEventListener("click", function(){
     // Беру значение города
    var  searth = document.getElementById('searchT').value;
console.log("Поиск города");
   // Подставляю в ссылку запрос
  var a ="https://api.openweathermap.org/data/2.5/weather?q="+ searth;
  a +=  "&units=metric&lang=ru&appid=04290cb244a2433a949228107b1fe755&lang=ru";
  // Проверяю наличие объекта XMLHttpRequest
    let request;
    if(window.XMLHttpRequest){
      request = new XMLHttpRequest();
    }
    else{
      request = new ActiveXObject("Microsoft.XMLHTTP");
    }
        // Запускаю запрос
    request.open("GET", a);
    // Функция запускается после загрузки всех данных
      request.onload = function(){

        if(request.status === 200){
      let weather = request.response;

     // Перевожу json в объект
      let  weatherOb = JSON.parse(weather);
      console.log(weatherOb);

        //Вывожу город на экран
       document.getElementById('town').innerText = weatherOb.name;

       document.querySelector('.weatherP').innerText = weatherOb.weather[0]['description'];
        //Вывожу температуру

        document.querySelector('.temperature').innerHTML = Math.round(weatherOb.main.temp)  + "&deg;";
         //Вывожу картинку
         document.querySelector('.weather-img').innerHTML = '<img src=" http://openweathermap.org/img/wn/'+ weatherOb.weather[0]['icon'] +'@2x.png">';
          // console.log(weatherOb.weather[0]['main']);
          // console.log(document.querySelector('.conditions'));
        if( weatherOb.weather[0]['main'] == "Rain" ){
          document.querySelector('.conditions').innerText = "Сегодня дождь, лучше заляться планированием новых проектов";

        }else if( weatherOb.weather[0]['main'] == "Drizzle"){
          document.querySelector('.conditions').innerText ="Сегодня плохая погода, лучше дома посидеть. Сделайте визуализацию нового объекта";
        }else if( weatherOb.weather[0]['main'] == "Clear"){
          document.querySelector('.conditions').innerText = "Отличная погода, можно поработать на улице.";
        }else if( weatherOb.weather[0]['main'] == "Clouds"){
            document.querySelector('.conditions').innerText = "Сегодня облачно, можно высадить растения, они отлично прижевутся.";
        }else{
          document.querySelector('.conditions').innerText = "Погода не очень хорошая, но если есть срочная работа можно ее сделать."
        }

       }else{
           window.open("404.html");
       }
      }
request.send();
});






    //Добавить функцию открытия и закрытия урока

  let button4 =  document.getElementById("btn4");


  button4.onclick = function(){
    let lesson4 = document.getElementById("idC4");
    lesson4.style.display = "block";
  };

  let btnClose4 =  document.getElementById("btnClose4");

  btnClose4.onclick = function(){
    let lesson4 = document.getElementById("idC4");
    lesson4.style.display = "none";
    let progress = document.getElementById("progress_color");
    progress.style.width = "100%";
    let progressValue = document.getElementById("progress_value");
    progressValue.innerText="100%";
  };

//*************************************************************

    let button1 =  document.getElementById("btn1");
    let button2 =  document.getElementById("btn2");
    let button3 =  document.getElementById("btn3");


      button1.onclick = function(){
        let lesson1 = document.getElementById("idC1");
        // console.log(lesson1);
        lesson1.style.display = "block";
      };

      button2.onclick = function(){
        let lesson2 = document.getElementById("idC2");
        // console.log(lesson2);
      document.getElementById("idC2").style.display = "block";
      };

      button3.onclick = function(){
        let lesson3 = document.getElementById("idC3");

      document.getElementById("idC3").style.display = "block";
      };

      let btnClose1 =  document.getElementById("btnClose1");
      let btnClose2 =  document.getElementById("btnClose2");
      let btnClose3 =  document.getElementById("btnClose3");


        btnClose1.onclick = function(){
          let lesson1 = document.getElementById("idC1");
          // console.log(lesson1);
          lesson1.style.display = "none";
          let progress = document.getElementById("progress_color");
          progress.style.width = "25%";
          let progressValue = document.getElementById("progress_value");
          progressValue.innerText="25%";
        };

        btnClose2.onclick = function(){
          let lesson2 = document.getElementById("idC2");
          // console.log(lesson2);
        document.getElementById("idC2").style.display = "none";
        let progress = document.getElementById("progress_color");
        progress.style.width = "50%";
        let progressValue = document.getElementById("progress_value");
        progressValue.innerText="50%";
        };

      btnClose3.onclick = function(){
          let lesson3 = document.getElementById("idC3");
          // console.log(lesson3);
        document.getElementById("idC3").style.display = "none";
        let progress = document.getElementById("progress_color");
        progress.style.width = "75%";
        let progressValue = document.getElementById("progress_value");
        progressValue.innerText="75%";
        };



      // Функция переключения мероприятий

      document.getElementById("event1").onclick = function(){
        document.getElementById("event1").classList.add("eventActiv");
        document.getElementById("event2").classList.remove("eventActiv");
        document.getElementById("event3").classList.remove("eventActiv");
        document.getElementById("event4").classList.remove("eventActiv");
        document.getElementById("event5").classList.remove("eventActiv");
        document.getElementById("event6").classList.remove("eventActiv");
        document.getElementById("event7").classList.remove("eventActiv");
        document.getElementById("event8").classList.remove("eventActiv");
        document.getElementById("events").innerText = "  Разберем виды живой изгороди";
      }
      document.getElementById("event2").onclick = function(){
        document.getElementById("event2").classList.add("eventActiv");
        document.getElementById("event1").classList.remove("eventActiv");
        document.getElementById("event3").classList.remove("eventActiv");
        document.getElementById("event4").classList.remove("eventActiv");
        document.getElementById("event5").classList.remove("eventActiv");
        document.getElementById("event6").classList.remove("eventActiv");
        document.getElementById("event7").classList.remove("eventActiv");
        document.getElementById("event8").classList.remove("eventActiv");
        document.getElementById("events").innerText = " Отработаем на практике посадку живой изгороди";
      }
      document.getElementById("event3").onclick = function(){
        document.getElementById("event3").classList.add("eventActiv");
        document.getElementById("event2").classList.remove("eventActiv");
        document.getElementById("event1").classList.remove("eventActiv");
        document.getElementById("event4").classList.remove("eventActiv");
        document.getElementById("event5").classList.remove("eventActiv");
        document.getElementById("event6").classList.remove("eventActiv");
        document.getElementById("event7").classList.remove("eventActiv");
        document.getElementById("event8").classList.remove("eventActiv");
        document.getElementById("events").innerText = " Как подготовить участок к посадке газона";
      }
      document.getElementById("event4").onclick = function(){
        document.getElementById("event4").classList.add("eventActiv");
        document.getElementById("event2").classList.remove("eventActiv");
        document.getElementById("event3").classList.remove("eventActiv");
        document.getElementById("event1").classList.remove("eventActiv");
        document.getElementById("event5").classList.remove("eventActiv");
        document.getElementById("event6").classList.remove("eventActiv");
        document.getElementById("event7").classList.remove("eventActiv");
        document.getElementById("event8").classList.remove("eventActiv");
        document.getElementById("events").innerText = "  Правильный уход за газоном";
      }
      document.getElementById("event5").onclick = function(){
        document.getElementById("event5").classList.add("eventActiv");
        document.getElementById("event2").classList.remove("eventActiv");
        document.getElementById("event3").classList.remove("eventActiv");
        document.getElementById("event4").classList.remove("eventActiv");
        document.getElementById("event1").classList.remove("eventActiv");
        document.getElementById("event6").classList.remove("eventActiv");
        document.getElementById("event7").classList.remove("eventActiv");
        document.getElementById("event8").classList.remove("eventActiv");
        document.getElementById("events").innerText = " Подготовка участка к посадке газона";
      }
      document.getElementById("event6").onclick = function(){
        document.getElementById("event6").classList.add("eventActiv");
        document.getElementById("event2").classList.remove("eventActiv");
        document.getElementById("event3").classList.remove("eventActiv");
        document.getElementById("event4").classList.remove("eventActiv");
        document.getElementById("event5").classList.remove("eventActiv");
        document.getElementById("event1").classList.remove("eventActiv");
        document.getElementById("event7").classList.remove("eventActiv");
        document.getElementById("event8").classList.remove("eventActiv");
        document.getElementById("events").innerText = " Какие бывают садовые дорожки";
      }
      document.getElementById("event7").onclick = function(){
        document.getElementById("event7").classList.add("eventActiv");
        document.getElementById("event2").classList.remove("eventActiv");
        document.getElementById("event3").classList.remove("eventActiv");
        document.getElementById("event4").classList.remove("eventActiv");
        document.getElementById("event5").classList.remove("eventActiv");
        document.getElementById("event6").classList.remove("eventActiv");
        document.getElementById("event1").classList.remove("eventActiv");
        document.getElementById("event8").classList.remove("eventActiv");
        document.getElementById("events").innerText = "Живые бордюры, какие растения выбрать?";
      }
      document.getElementById("event8").onclick = function(){
        document.getElementById("event8").classList.add("eventActiv");
        document.getElementById("event2").classList.remove("eventActiv");
        document.getElementById("event3").classList.remove("eventActiv");
        document.getElementById("event4").classList.remove("eventActiv");
        document.getElementById("event5").classList.remove("eventActiv");
        document.getElementById("event6").classList.remove("eventActiv");
        document.getElementById("event7").classList.remove("eventActiv");
        document.getElementById("event1").classList.remove("eventActiv");
        document.getElementById("events").innerText = "Посадка газона";
      }
