<?php
session_start();
// Check if the user is logged in, otherwise redirect to login page
if (!isset($_SESSION['user_id'])) {
    header("Location: auth/login.php");
    exit();
}

include 'includes/db.php';
$username = $_SESSION['username'];
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard | QuizMaster</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>
<body class="bg-light">

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
        <div class="container">
            <a class="navbar-brand fw-bold" href="index.php">QUIZMASTER</a>
            <div class="ms-auto">
                <span class="text-white me-3">Welcome, <?php echo htmlspecialchars($username); ?>!</span>
                <a href="auth/logout.php" class="btn btn-outline-danger btn-sm rounded-pill">Logout</a>
            </div>
        </div>
    </nav>

    <div class="container py-5">
        <div class="row">
            <div class="col-md-4">
                <div class="card border-0 shadow-sm rounded-4 mb-4">
                    <div class="card-body text-center p-4">
                        <div class="display-4 text-primary mb-2"><i class="fas fa-user-circle"></i></div>
                        <h4 class="fw-bold"><?php echo htmlspecialchars($username); ?></h4>
                        <p class="text-muted small">Student ID: 2023066</p>
                    </div>
                </div>
            </div>
            
            <div class="col-md-8">
                <div class="glass-card p-5 shadow-sm">
                    <h2 class="fw-bold mb-4">Your Quiz Statistics</h2>
                    <p class="lead">Ready to beat your high score?</p>
                    <hr>
                    <div class="row g-4 mt-2">
                        <div class="col-6 col-sm-3 text-center">
                            <h3 class="fw-bold text-primary">05</h3>
                            <p class="text-muted small">Quizzes Taken</p>
                        </div>
                        <div class="col-6 col-sm-3 text-center">
                            <h3 class="fw-bold text-success">80%</h3>
                            <p class="text-muted small">Avg. Score</p>
                        </div>
                    </div>
                    <div class="mt-4">
                        <a href="index.php#quiz" class="btn btn-dark btn-lg rounded-pill px-4">Take a New Quiz</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/js/all.min.js"></script>
</body>
</html>