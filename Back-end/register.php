<?php
    $firstName = $_POST['firstName'];
    $lastName = $_POST['lastName'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    $conn = new mysqli('localhost', 'root', '', 'users-hc');
    if ($conn->connect_error) {
        die('connection failed'. $conn->connect_error);
    } 
    else {
        $stmt = $conn->prepare("insert into registration(firstName, lastName, email, password) values(?, ?, ?, ?)");
        $stmt->bind_param("ssss", $firstName, $lastName, $email, $password);
        $stmt->execute();
        echo "Registration was successful!";
        $stmt->close();
        $conn->close();
    }