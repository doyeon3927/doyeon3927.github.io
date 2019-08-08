 <?php
  session_start();
  
  $db = new mysqli("localhost","db아이디","db비밀번호","db명");
  $db->set_charset("utf8");

  function mq($sql){
    global $db;
    return $db->query($sql);
  }

  ?>