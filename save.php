<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
require 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $fullname = trim($_POST['fullname'] ?? '');
    $email = trim($_POST['email'] ?? '');
    $password = $_POST['password'] ?? '';

    if ($fullname && $email && $password) {

        // Check duplicate email
        $checkStmt = $conn->prepare("SELECT id FROM users WHERE email = ?");
        $checkStmt->bind_param("s", $email);
        $checkStmt->execute();
        $checkStmt->store_result();

        if ($checkStmt->num_rows > 0) {
            echo "<script>alert('Email already registered!'); window.location.href='index.html';</script>";
            exit;
        }

        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

        $stmt = $conn->prepare("INSERT INTO users (fullname, email, password) VALUES (?, ?, ?)");
        $stmt->bind_param("sss", $fullname, $email, $hashedPassword);

        if ($stmt->execute()) {
            echo "<script>alert('Signup Successful! Please login.'); window.location.href='index.html';</script>";
            exit;
        } else {
            echo "<script>alert('Error: ".$stmt->error."'); window.location.href='index.html';</script>";
            exit;
        }

    } else {
        echo "<script>alert('All fields are required!'); window.location.href='index.html';</script>";
        exit;
    }
}
?>
