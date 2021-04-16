// Функция удаления куки

document.getElementById("deliteUser").addEventListener("click",function() {
  // показываю кнопку регимтрация
       document.getElementById("createUser").style.display = "block";//регистрация
      // Скрываю кнопку выйти
       document.getElementById("deliteUser").style.display = "none";//выйти
       // Стираю содержимое приветствия
        document.getElementById('regDiv').innerText = "";
// Удаляю куки
       document.cookie = "register=; expires=Tue, 19 Jan 2019 03:14:07 GMT";
        document.cookie = "regEmail=; expires=Tue, 19 Jan 2019 03:14:07 GMT";
        document.cookie = "regPass=;expires=Tue, 19 Jan 2019 03:14:07 GMT";
// запускаю функцию проверки куки при загрузке
      checkReg();
      
     });

     // Функция прверки куки при загрузке
     function checkReg() {


         	var divOut = document.getElementById("regDiv");
         	var s = document.cookie.split('; ');
             var cookieObject = {};
             for(var i=0; i < s.length; i++){
                var c = s[i].split('=');
                cookieObject[c[0]] = c[1];
             }
             if('register' in cookieObject && 'regEmail' in cookieObject && 'regPass' in cookieObject ) {
             	divOut.innerHTML =  cookieObject['register'];

                 var btn = document.getElementById("createUser");
                 var btn1 = document.getElementById("deliteUser");
                 btn.style.display = "none";
                 btn1.style.display = "block";
             }
             else {
             	btn.style.display = "block";
               btn1.style.display = "none";
             }
         };
