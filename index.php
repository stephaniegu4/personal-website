<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

require_once "vendor/autoload.php";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

$ini = parse_ini_file('mail.ini');

$errors = array();
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = 'Invalid email';
    }
    $message = $_POST['message'];
    if (!empty($_POST['number'])) {
        $number = $_POST['number'];
    }

    if (empty($errors)) {
        $mail = new PHPMailer(true);
        
        try {
            $mail->isSMTP();
            $mail->Host = 'smtp.gmail.com';
            $mail->SMTPAuth = true;
            $mail->Username = $ini['mail_user'];
            $mail->Password = $ini['mail_password'];
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
            $mail->Port = 587;

            $mail->setFrom($ini['mail_user'], $name);
            $mail->addAddress($ini['mail_send_to']);
            $mail->addReplyTo($ini['mail_user'], 'Information');

            $mail->isHTML(true);
            $mail->Subject = "$name sent you a message!";
            $mail->Body = 'Name: ' . $name . '<br>
                            Email: ' . $email . '<br>
                            Number: ' . $number . '<br>
                            Message: ' . $message;

            $mail->send();
            $sent = true;
            echo json_encode(["status" => "success", "message" => "Your message was sent successfully!"]);
        } catch (Exception $e) {
            $sent = false;
            echo json_encode(["status" => "fail", "message" => "An error occurred."]);
            echo "Message could not be sent. Error: ($mail->ErrorInfo)";
        }

    } else {
        echo json_encode(["status" => "fail", "message" => "Invalid email."]);
    }
}
?>
