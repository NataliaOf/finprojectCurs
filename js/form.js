
// Проверка регистрации

let btnCheckIn = document.getElementById("btnCheckIn");

btnCheckIn.addEventListener('click', function(){
  console.log("регистрация");
console.log(document.getElementById("createUser"));
console.log( document.getElementById("deliteUser"));
console.log("Отправить");
  // Проверки

  let nameCheck =  /^[а-я]/i;
  let emailCheck = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
  let passCheck = /\d/;
  // let passCheck = /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,}$/

  // Содержание input
  var name = document.getElementById('name').value;
  console.log( name);
  var email = document.getElementById('email').value;
  console.log( email);
  var password = document.getElementById('password').value;
  console.log(password);

  // Проверка имени
    if(!nameCheck.test(name) && name.length<3){
      document.getElementById('name').classList.add('noValid');
      document.getElementById('usName').innerText = "Введите свое имя";
        console.log("no");
    }else{
      document.getElementById('name').classList.remove('noValid');
      document.getElementById('usName').innerText = "";
      console.log("yes");
    }

    // Проверка email
      if(!emailCheck.test(email)){
        document.getElementById('email').classList.add('noValid');
        document.getElementById('usEmail').innerText = "Введите свой email";
        console.log("no");
      }else{
        document.getElementById('email').classList.remove('noValid');
        document.getElementById('usEmail').innerText = "";
        console.log("yes");
      }

      // Проверка пароль
        if(!passCheck.test(password)){
          document.getElementById('password').classList.add('noValid');
          document.getElementById('usPassw').innerText = "Введите пароль";
            console.log("no");
        }else{
          document.getElementById('password').classList.remove('noValid');
          document.getElementById('usPassw').innerText = "";
          console.log("yes");

          document.getElementById('formCheckIn').submit();
        }

        // Сохранение куки

        var inputName = document.getElementById("name").value;
        var inputEmail = document.getElementById("email").value;
        var inputPassw = document.getElementById("password").value;

        var expDate = new Date;
        expDate.setTime((new Date).getTime() + 60*1000);

        document.cookie = "register="+inputName+"; expires="+expDate.toGMTString()+"; path=/";
        document.cookie = "regEmail="+inputEmail+"; expires="+expDate.toGMTString()+"; path=/";
        document.cookie = "regPass="+inputPassw+"; expires="+expDate.toGMTString()+"; path=/";
        document.getElementById("createUser").style.display = "none";
console.log(document.getElementById("createUser"));
        document.getElementById("deliteUser").style.display = "block";
 console.log( document.getElementById("deliteUser"));
    	// document.getElementById('formCheckIn').submit();
        checkReg();

});

// // Функция удаления куки
//
// document.getElementById("deliteUser").addEventListener("click",function() {
//   // показываю кнопку регимтрация
//        document.getElementById("createUser").style.display = "block";//регистрация
//       // Скрываю кнопку выйти
//        document.getElementById("deliteUser").style.display = "none";//выйти
//        // Стираю содержимое приветствия
//         document.getElementById('regDiv').innerText = "";
// // Удаляю куки
//        document.cookie = "register=; expires=Tue, 19 Jan 2019 03:14:07 GMT";
//         document.cookie = "regEmail=; expires=Tue, 19 Jan 2019 03:14:07 GMT";
//         document.cookie = "regPass=;expires=Tue, 19 Jan 2019 03:14:07 GMT";
// // запускаю функцию проверки куки при загрузке
//       checkReg();
//      });

let clear = document.getElementById("clear");

clear.addEventListener('click', function(){
  //  очистка формы
  var name = document.getElementById('name').value = "";
  var email = document.getElementById('email').value="";
  var password = document.getElementById('password').value="";
  //Очистка абзацов
  document.getElementById('usName').innerText = "";
  document.getElementById('usEmail').innerText = "";
  document.getElementById('usPassw').innerText = "";

  document.getElementById('name').classList.remove('noValid');
  document.getElementById('email').classList.remove('noValid');
  document.getElementById('password').classList.remove('noValid');

});
let clear2 = document.getElementById("clear2");

clear2.addEventListener('click', function(){
  //  очистка формы
  var name = document.getElementById('userName').value = "";
  var phone = document.getElementById('userTel').value="";

  //Очистка абзацов
  document.getElementById('nameValid').innerText = "";
  document.getElementById('phoneValid').innerText = "";


document.getElementById('userName').classList.remove('noValid');
document.getElementById('userTel').classList.remove('noValid');


});

// // Функция прверки куки при загрузке
// function checkReg() {
//
//
//     	var divOut = document.getElementById("regDiv");
//     	var s = document.cookie.split('; ');
//         var cookieObject = {};
//         for(var i=0; i < s.length; i++){
//            var c = s[i].split('=');
//            cookieObject[c[0]] = c[1];
//         }
//         if('register' in cookieObject && 'regEmail' in cookieObject && 'regPass' in cookieObject ) {
//         	divOut.innerHTML =  cookieObject['register'];
//
//             var btn = document.getElementById("createUser");
//             var btn1 = document.getElementById("deliteUser");
//             btn.style.display = "none";
//             btn1.style.display = "block";
//         }
//         else {
//         	btn.style.display = "block";
//           btn1.style.display = "none";
//         }
//     };

// функция проверки формы "Оставить заявку"
let application = document.getElementById("applicationBtn");

application.addEventListener('click', function(){
  // Содержание input
  var name = document.getElementById('userName').value;

  var phone =  document.getElementById('userTel').value;

  // Проверка на Буквы
    let nameСheck = /^[а-я]/i;

  // Провкрка номера телефона
  let phСheck = /^\+\d{12}$/;

  // Проверка имени
    if(!nameСheck.test(name) || name.length<3){
      document.getElementById('userName').classList.add('noValid');
      document.getElementById('nameValid').innerText = "Введите свое имя";
    }else{
      document.getElementById('userName').classList.remove('noValid');
      document.getElementById('nameValid').innerText = "";
    }

    // Проверка телефона
      if(!phСheck.test(phone)){
       document.getElementById('userTel').classList.add('noValid');
        document.getElementById('phoneValid').innerText = "Введите свой телефон";
      }else{
        document.getElementById('userTel').classList.remove('noValid');
        document.getElementById('phoneValid').innerText = "";

        document.getElementById('formApplication').submit();
      }
});
