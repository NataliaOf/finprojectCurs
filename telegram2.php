<?php

// Бот   https://web.telegram.org/#/im?p=g566634144
// Чат   https://web.telegram.org/#/im?p=@landscapeDes_bot
// поля из формы
$name = $_POST['yourName'];
$phone = $_POST['yourPhone'];
$commit = $_POST['commit'];

// токен нашего бота из botFather
$token = "1769652413:AAELN26iHarOd517TacevXPGK5mxFmf8cXA";
$chat_id = "https://api.telegram.org/bot1769652413:AAELN26iHarOd517TacevXPGK5mxFmf8cXA/getUpdates";

$chat_id = "-566634144";
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
  'Комментарий: ' =>$commit,

);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: practice_course.html');
} else {
  echo "Error";
}
?>
