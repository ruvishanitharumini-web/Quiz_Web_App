Welcome to QuizMaster!

QuizMaster is an interactive platform designed to challenge your mind, test your knowledge, and
help you learn new facts in a fun and engaging way. Whether you are a student preparing for
studies or someone who simply enjoys trivia, QuizMaster offers a quick and exciti# QuizMaster | Interactive Web Application (Phase 3)

Project Overview
QuizMaster is a dynamic, database-driven web application developed as part of the ICT 2204/COM 2303 course. This final phase transitions the application from a static frontend to a full-stack system featuring user authentication, session management, and persistent data storage using PHP and MySQL.

Key Features
- User Authentication: Secure Registration and Login system using PHP sessions and `password_hash` for security.
- Dynamic Quiz Engine: (Optional: Mention if you are pulling questions from the DB).
- Contact Form: A functional "Contact Us" section that saves user inquiries directly into the MySQL database.
- Responsive Design: Premium "Glassmorphism" aesthetic built with Bootstrap 5, fully optimized for mobile and desktop.
- Protected Dashboard: A private user area accessible only after successful authentication.

Technical Stack
- Frontend: HTML5, CSS3, JavaScript (ES6), Bootstrap 5.
- Backend: PHP 8.x
- Database: MySQL (MariaDB)
- Server Environment: XAMPP / WAMP

Setup & Installation Instructions

To run this project locally, follow these steps:

  1. Database Configuration
1. Start XAMPP/WAMP and ensure Apache and MySQL modules are running.
2. Open phpMyAdmin*(`http://localhost/phpmyadmin`).
3. Create a new database named `quizmaster`.
4. Select the `quizmaster` database and click the **Import** tab.
5. Choose the `database.sql` file provided in this repository and click **Go**.

     2. File Placement
1. Clone or download this repository.
2. Move the entire `QuizMaster` folder into your local server's root directory:
   - For XAMPP: `C:/xampp/htdocs/`
   - For WAMP: `C:/wamp64/www/`

     3. Running the App
1. Open your web browser.
2. Navigate to `http://localhost/QuizMaster/index.php`.


 Project Structure
```text
project/
├── auth/            # Registration, Login, and Logout logic
├── css/             # Stylesheets (style.css)
├── js/              # Frontend logic (script.js)
├── includes/        # Database connection (db.php)
├── index.php        # Landing page
├── dashboard.php    # User-specific area
├── database.sql     # MySQL database export
└── README.md        # Project documentationng way to
explore your knowledge.


How to Play

1. Start the Journey
Click the “Start Quiz” button on the Home page to begin.

2. Answer the Questions
You will see multiple-choice questions presented one at a time.

3. Pick Your Answer
Select the option you believe is correct. The system will automatically keep track of your
score.

4. Move to the Next Question
After choosing your answer, click “Next” to continue to the following question.

5. See Your Results
Once you complete all the questions, your final score will be displayed instantly.



Features You’ll Enjoy

Smooth Navigation

Easily move through the website with smooth scrolling and simple navigation.

Responsive Design

QuizMaster works perfectly on desktops, tablets, and smartphones.

Instant Results

See your quiz results immediately after finishing — no waiting required.

Interactive Experience

A clean and user-friendly interface designed to make learning fun and engaging.


Get in Touch

Have any suggestions or questions? We would love to hear from you!
• Visit the Contact Us section.
• Enter your name, email, and message in the form.
• Our validated contact form ensures your message reaches us safely.


Ready to test your knowledge? Start the Quiz now and see how much you know!


Created by:
R.D.U.R. Sanjana
W.P.R.T. Thamel
