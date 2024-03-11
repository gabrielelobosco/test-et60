 <?php
    $errors = '';
    $myemail = 'et60@et60.it';
    if(empty($_POST['name'])  ||
       empty($_POST['email']) ||
       empty($_POST['message']))
    {
        $errors .= "\n Errore: Tutti i campi devono essere compilati!";
    }
    $name = $_POST['name'];
    $email_address = $_POST['email'];
    $message = $_POST['message'];
    if (!preg_match(
    "/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i",
    $email_address))
    {
        $errors .= "\n Errore: Indirizzo email non esistente!";
    }
    
    if( empty($errors))
    {
    $to = $myemail;
    $email_subject = "[Contact Form] Messaggio da $name";
    $email_body = "Hai ricevuto un nuovo messaggio. ".
    " Ecco i dettagli:\n Nome: $name \n ".
    "Email: $email_address\n Messaggio: \n $message";
    $headers = "Da: $myemail\n";
    $headers .= "Rispondi a: $email_address";
    mail($to,$email_subject,$email_body,$headers);
    
    header('Location: index.php');
    }
    ?>