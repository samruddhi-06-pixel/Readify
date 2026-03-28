<?php
session_start();

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "booksite";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check DB connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'] ?? '';
    $entered_pass = $_POST['password'] ?? '';

    if ($email && $entered_pass) {
        $stmt = $conn->prepare("SELECT password FROM users WHERE email = ?");
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $stmt->store_result();

        if ($stmt->num_rows > 0) {
            $stmt->bind_result($hashed_pass_from_db);
            $stmt->fetch();

            if (password_verify($entered_pass, $hashed_pass_from_db)) {
                $_SESSION['user_email'] = $email;
                $_SESSION['logged_in'] = true;

                echo "<script>
                    alert('✅ Login successful!');
                    window.location.href = 'buy.php';
                </script>";
                exit;
            } else {
                echo "<script>
                    alert('❌ Incorrect password.');
                    window.location.href = 'index.html';
                </script>";
            }
        } else {
            echo "<script>
                alert('❌ No user found with that email.');
                window.location.href = 'index.html';
            </script>";
        }

        $stmt->close();
    } else {
        echo "<script>
            alert('❌ Please fill in all fields.');
            window.location.href = 'index.html';
        </script>";
    }
} else {
    echo "<script>
        alert('❌ Invalid access.');
        window.location.href = 'index.html';
    </script>";
}

$conn->close();
?>