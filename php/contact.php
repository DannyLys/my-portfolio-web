<?php

$from = 'DL Contact Form <contact@daniellyszczek.com>';
$sendTo = 'Daniel Lyszczek <contact@daniellyszczek.com>';
$subject = 'New message from DL';
$fields = array('name' => 'Name', 'surname' => 'Surname', 'phone' => 'Phone', 'email' => 'Email', 'message' => 'Message'); 
$okMessage = 'Your message has been sent successfully. Thank you for contacting!';
$errorMessage = 'There was an error while submitting the form. Please try again.';


error_reporting(E_ALL & ~E_NOTICE);

try
{

    if(count($_POST) == 0) throw new \Exception('Form is empty');
            
    $emailText = "You have a new message\n=============================\n";

    foreach ($_POST as $key => $value) { 
        if (isset($fields[$key])) {
            $emailText .= "$fields[$key]: $value\n";
        }
    }

    $headers = array('Content-Type: text/plain; charset="UTF-8";',
        'From: ' . $from,
        'Reply-To: ' . $_POST['email'],
        'Return-Path: ' . $from,
    );
    
    mail($sendTo, $subject, $emailText, implode("\n", $headers));

    $responseArray = array('type' => 'success', 'message' => $okMessage);
}
catch (\Exception $e)
{
    $responseArray = array('type' => 'danger', 'message' => $errorMessage);
}

if (!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
    $encoded = json_encode($responseArray);

    header('Content-Type: application/json');

    echo $encoded;
} else {
    echo $responseArray['message'];
}