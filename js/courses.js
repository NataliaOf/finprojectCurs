// window.navigator.geolocation.getCurrentPosition(success[, error[, options]]);



// Нахожу кнопку поиска города
   var  btn = document.getElementById('searchBtn');
  // Функция поиска
   btn.addEventListener("click", function(){
     // Беру значение города
    var  searth = document.getElementById('searchT').value;

   // Подставляю в ссылку запрос
  var a ="http://api.openweathermap.org/data/2.5/weather?q="+ searth;
  a +=  "&units=metric&lang=ru&appid=04290cb244a2433a949228107b1fe755";
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





// Класс уроков бесплатный курс

// class Lesson{
//   constructor(idC, h3, p1, p2, divVideo, p3, closeId,  btn, clas){
//    this.idC = idC;
//    this.h3 = h3;
//    this.p1 = p1;
//    this.p2 = p2;
//    this.divVideo = divVideo;
//    this.p3 = p3;
//    this.closeId = closeId;
//    this.btn = btn;
//   this.class = clas;
//
//   }
//   create(){
//     let conteiner = document.createElement("div");
//     conteiner.id = this.idC;
//
//     // console.log(conteiner);
//     let h3 =document.createElement("h3");
//     h3.innerText = this.h3;
//     conteiner.append(h3);
//
//     let p1 =document.createElement("p");
//     p1.innerText = this.p1;
//     conteiner.append(p1);
//
//     let p2 =document.createElement("p");
//     p2.innerText = this.p2;
//     conteiner.append(p2);
//
//     let divVideo =document.createElement("div");
//     divVideo.innerHTML = this.divVideo;
//     conteiner.append(divVideo);
//
//     let btnClose = document.createElement("button");
//     btnClose.id = this.closeId;
//     btnClose.innerText = "Закрыть урок";
//     conteiner.append(btnClose);
//
//     let p3 =document.createElement("p");
//     p3.innerText = this.p3;
//     conteiner.append(p3);
//
//     let btn = document.createElement("button")
//     btn.id = this.class;
//
//     btn.innerText = this.btn;
//     // console.log(btn);
//     let btnBox = document.getElementById('cours_btn');
//     btnBox.append(btn);
//     let box = document.getElementById('cours_lesson');
//     box.append(conteiner);
//   // console.log(document.getElementById(this.idC));
//     conteiner.style.display = "none";
//   };
//
//
// };
//
//
// var lesson1 = new Lesson(
// "idC1",
// "Урок1",
// "Парфграф1",
// "Параграфф2",
// '<iframe width="560" height="315" src="https://www.youtube.com/embed/0O7MAFev8NI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
// "Параграфф3",
// "btnClose1",
// "Урок 1",
// "btn1");
// lesson1.create();
// // lesson1.lessonOpen();
//
//     var lesson2 = new Lesson(
//     "idC2",
//     "Урок2",
//     "Парфграф1",
//     "Параграфф2",
//     '<iframe width="560" height="315" src="https://www.youtube.com/embed/0O7MAFev8NI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
//     "Параграфф3",
//     "btnClose2",
//     "Урок 2",
//     "btn2");
//     lesson2.create();
//
//
//
//     var lesson3 = new Lesson(
//     "idC3",
//     "Урок3",
//     "Парфграф1",
//     "Параграфф2",
//     '<iframe width="560" height="315" src="https://www.youtube.com/embed/0O7MAFev8NI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
//     "Параграфф3",
//     "btnClose3",
//     "Урок 3",
//     "btn3");
//     lesson3.create();

//******************************************************
    // Вставить новый урок
    // Скопируйте и вставьту новые значения

    // var lesson4  = new Lesson(  //номер урока
    // "idC4", //id добавляемого контейнера
    // "Урок4", //Название урока
    // "Парфграф1", // текст первого параграфа
    // "Параграф2", // текст второго параграфа
    // '<iframe width="560" height="315" src="https://www.youtube.com/embed/0O7MAFev8NI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', // ссылка на видео в ютуб
    // "Параграф3", //текст третьего параграфа
    // "btnClose4", //id Кнопки "Закрыть урок"
    // "Урок 4", //Натпись на кнопке, которая открывает урок
    // "btn4"); //id Кнопки , которая открывает урок
    // lesson4.create();//запускаем метод создания урока

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



        // // Класс уроков базовый  курс
        //
        // class LessonBasic extends Lesson{
        //   constructor(idC, h3, p1, p2, divVideo, p3, closeId,  btn, clas, download){
        //     super(idC, h3, p1, p2, divVideo, p3, closeId,  btn, clas);
        //     this.download = download;
        //   }
        //   create(){
        //     document.getElementById(this.idC).innerHTML ="+ <input name="upl" type="file" class="input-file" multiple><br><button>отправить</button>"
        //   }
        // }
