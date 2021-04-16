// Отправка комментариев
let btnCom = document.getElementById('btnCom');

  btnCom.addEventListener("click", function(event){

  let name = document.getElementById("nameCom").value;


  let comment = document.getElementById("comment").value;


  if(name == "" || comment ==""){
  document.getElementById('commentValid').innerText = "Заполните все поля";
    return;
  }

let divCom =  document.createElement('div');

divCom.className = "comment";

let hCom = document.createElement('h3');

hCom.innerText= name;

let data = document.createElement('span');

let dText = new Date().toLocaleDateString();

data.innerText = dText;


let p = document.createElement('p');
p.innerText = comment;


  divCom.append(hCom);
  divCom.append(data);
  divCom.append(p);


  comments.append(divCom);
 // Очищаю форму после отправки
  document.getElementById("nameCom").value = "";
  document.getElementById("comment").value = "";
  document.getElementById('commentValid').innerText = "";
})
