<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';


if (isset($_POST['submit'])) {


  $post_subject = $_POST['subject'];
  $post_body = $_POST['message'];
  $post_from = $_POST['from'];
  $post_name = $_POST['name'];



  $mail = new PHPMailer();
  $mail->isSMTP();
  $mail->SMTPAuth = true;
  $mail->SMTPSecure = 'ssl';
  $mail->Host = 'smtp.gmail.com';
  $mail->Port = '465';
  $mail->isHTML();
  $mail->Username = 'james.welbes@gmail.com';
  $mail->Password = 'Isaiah117!';
  $mail->SetFrom($post_from);
  $mail->Subject = $post_subject;
  $mail->Body = '<h3> From: ' . $post_name . '</h3><br><p>' . $post_from . '</p><br>' . $post_body;
  $mail->AddAddress('james.welbes@gmail.com');
  $mail->Send();

  $reply = new PHPMailer();
  $reply->isSMTP();
  $reply->SMTPAuth = true;
  $reply->SMTPSecure = 'ssl';
  $reply->Host = 'smtp.gmail.com';
  $reply->Port = '465';
  $reply->isHTML();
  $reply->Username = 'james.welbes@gmail.com';
  $reply->Password = 'Isaiah117!';
  $reply->SetFrom($post_from);
  $reply->Subject = $post_subject;
  $reply->Body = '<p>Thank you for reaching out!</p><p>I will get back to you shortly</p>';
  $reply->AddAddress($post_from);
  $reply->Send();
}


?>


<div data-aos="fade-up">
  <!-- <h2 id="contactH2" class="text-white mb-4 text-center" data-aos="fade-up">Contact Me</h2> -->
  <p class="rellax1" data-rellax-speed="-2">Let's grab a coffee</p class="rellax" data-rellax-speed="-1">

  <hr style="width: 183px;" class="rellax1" data-rellax-speed="-2">

  <h2 class="rellax1" data-rellax-speed="-2">I'd love to schedule a meeting, phone or video chat.</h2 class="rellax" data-rellax-speed="-1">
  <br><br><br><br>
  <div class="form-row">
    <div class="col-md-12">



      <div class="form-row">
        <div class="col-md-12">



          <form action="" method="post" enctype="multipart/form-data">




            <div class="form-row form-group">

              <div class="col-md-12">
                <label class="text-white" for="name">Name</label>
                <input type="text" name="name" id="name" class="form-control">
              </div>
            </div>

            <div class="form-row form-group">

              <div class="col-md-12">
                <label class="text-white" for="email">Email</label>
                <input type="email" name="from" id="from" class="form-control">
              </div>
            </div>



            <div class="form-row form-group mb-5">
              <div class="col-md-12">
                <label class="text-white" for="message">Message</label>
                <textarea name="message" id="message" cols="30" rows="7" class="form-control"></textarea>
              </div>
            </div>

            <div class="form-row form-group">
              <div class="cta-container">
                <input type="submit" value="Send Message" name="submit" class="cta">
              </div>
            </div>


          </form>
        </div>

      </div>
    </div>
  </div>
</div>