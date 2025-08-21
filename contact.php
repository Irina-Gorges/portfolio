
<!-- <?php -->
// header("Access-Control-Allow-Origin: https://irina-gorges.de");
// header("Access-Control-Allow-Methods: POST, OPTIONS");
// header("Access-Control-Allow-Headers: Content-Type");

// OPTIONS-Preflight-Anfrage beantworten
// if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
//   http_response_code(200);
//   exit();
// }

// Empfängeradresse eintragen
// $empfaenger = "irinagorges@live.de";

// Formulardaten auslesen
// $name = 'test'; //$_POST['name'] ?? '';
// $email = 'test@example.com'; //$_POST['email'] ?? '';
// $message = 'Dies ist eine Testnachricht.'; //$_POST['message'] ?? '';

// E-Mail-Inhalt vorbereiten
// $betreff = "Neue Nachricht von $name zu deinem Portfolio";
// $nachricht = "Name: $name\nE-Mail: $email\n\nNachricht:\n$message";

// Header setzen
// $header = "From: $email\r\nReply-To: $email\r\n";

// E-Mail senden
// if (mail($empfaenger, $betreff, $nachricht, $header)) {
//   http_response_code(200);
//   echo "Nachricht gesendet.";
// } else {
//   http_response_code(500);
//   echo "Fehler beim Senden.";
// }
?> -->

<?php

switch ($_SERVER['REQUEST_METHOD']) {
    case ("OPTIONS"): //Allow preflighting to take place.
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST");
        header("Access-Control-Allow-Headers: content-type");
        exit;
        case("POST"): //Send the email;
            header("Access-Control-Allow-Origin: *");
            // Payload is not send to $_POST Variable,
            // is send to php:input as a text
            $json = file_get_contents('php://input');
            //parse the Payload from text format to Object
            $params = json_decode($json);
    
            $email = $params->email;
            $name = $params->name;
            $message = $params->message;
    
            $recipient = 'IrinaGorges@live.de';  
            $subject = "Contact From <$email>";
            $message = "From:" . $name . "<br>" . $message ;
    
            $headers   = array();
            $headers[] = 'MIME-Version: 1.0';
            $headers[] = 'Content-type: text/html; charset=utf-8';

            // Additional headers
            $headers[] = "From: noreply@irina-gorges.de";

            mail($recipient, $subject, $message, implode("\r\n", $headers));
            break;
        default: //Reject any non POST or OPTIONS requests.
            header("Allow: POST", true, 405);
            exit;
    } 

