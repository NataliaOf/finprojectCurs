// Очистка форьы 1

let clearCours1 = document.getElementById("clearCours1");

clearCours1.addEventListener('click', function(){
  //  очистка формы
  var name = document.getElementById('yourName1').value = "";
  var phone = document.getElementById('yourPhone1').value="";

  //Очистка абзацов
  document.getElementById('yourNameValid1').innerText = "";
  document.getElementById('yourPhoneValid1').innerText = "";


document.getElementById('yourName1').classList.remove('noValid');
document.getElementById('yourPhone1').classList.remove('noValid');


});


// функция проверки формы1 на страницу курсы
let payBtn1 = document.getElementById("payBtn1");

payBtn1.addEventListener('click', function(){
  // Содержание input
  var name = document.getElementById('yourName1').value;

  var phone =  document.getElementById('yourPhone1').value;

  // Проверка на Буквы
    let nameСheck = /^[а-я]/i;

  // Провкрка номера телефона
  let phСheck = /^\+\d{12}$/;

  // Проверка имени
    if(!nameСheck.test(name) || name.length<3){
      document.getElementById('yourName1').classList.add('noValid');
      document.getElementById('yourNameValid1').innerText = "Введите свое имя";

    }else{
      document.getElementById('yourName1').classList.remove('noValid');
      document.getElementById('yourNameValid1').innerText = "";

    }

    // Проверка телефона
      if(!phСheck.test(phone)){
       document.getElementById('yourPhone1').classList.add('noValid');
        document.getElementById('yourPhoneValid1').innerText = "Введите свой телефон";

      }else{
        document.getElementById('yourPhone1').classList.remove('noValid');
        document.getElementById('yourPhoneValid1').innerText = "";

        document.getElementById('payСourse1').submit();
      }
});

// Очистка форьы 2

let clearCours2 = document.getElementById("clearCours2");

clearCours2.addEventListener('click', function(){
  //  очистка формы
  var name = document.getElementById('yourName2').value = "";
  var phone = document.getElementById('yourPhone2').value="";

  //Очистка абзацов
  document.getElementById('yourNameValid2').innerText = "";
  document.getElementById('yourPhoneValid2').innerText = "";


document.getElementById('yourName2').classList.remove('noValid');
document.getElementById('yourPhone2').classList.remove('noValid');


});



// функция проверки формы2 на страницу курсы
let payBtn2 = document.getElementById("payBtn2");

payBtn2.addEventListener('click', function(){
  // Содержание input
  var name = document.getElementById('yourName2').value;
console.log(name);
  var phone =  document.getElementById('yourPhone2').value;
console.log(phone);
  // Проверка на Буквы
    let nameСheck = /^[а-я]/i;

  // Провкрка номера телефона
  let phСheck = /^\+\d{12}$/;

  // Проверка имени
    if(!nameСheck.test(name) || name.length<3){
      document.getElementById('yourName2').classList.add('noValid');
      document.getElementById('yourNameValid2').innerText = "Введите свое имя";
      console.log("no");
    }else{
      document.getElementById('yourName2').classList.remove('noValid');
      document.getElementById('yourNameValid2').innerText = "";
      console.log("yes");

    }

    // Проверка телефона
      if(!phСheck.test(phone)){
       document.getElementById('yourPhone2').classList.add('noValid');
        document.getElementById('yourPhoneValid2').innerText = "Введите свой телефон";
        console.log("no");
      }else{
        document.getElementById('yourPhone2').classList.remove('noValid');
        document.getElementById('yourPhoneValid2').innerText = "";
  console.log("yes");
        document.getElementById('payСourse2').submit();
      }
});
