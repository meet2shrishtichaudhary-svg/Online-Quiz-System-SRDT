
// Quiz questions for all available categories
const quizData = {
    web: {
        title: "Web Development",
        questions: [
            {
                text: "HTML ka full form kya hai?",
                options: [
                    "Hyper Text Markup Language",
                    "High Text Machine Language",
                    "Hyper Tool Multi Language",
                    "Home Text Markup Language"
                ],
                correctAnswer: "Hyper Text Markup Language"
            },
            {
                text: "CSS ka use kis liye hota hai?",
                options: [
                    "Database banane ke liye",
                    "Webpage ko style karne ke liye",
                    "Server chalane ke liye",
                    "Files delete karne ke liye"
                ],
                correctAnswer: "Webpage ko style karne ke liye"
            },
            {
                text: "JavaScript ka main use kya hai?",
                options: [
                    "Webpage ko interactive banana",
                    "Sirf images store karna",
                    "Sirf text likhna",
                    "Computer ko band karna"
                ],
                correctAnswer: "Webpage ko interactive banana"
            },
            {
                text: "HTML mein hyperlink banane ke liye kaunsa tag use hota hai?",
                options: ["<link>", "<a>", "<href>", "<url>"],
                correctAnswer: "<a>"
            },
            {
                text: "CSS mein text ka colour change karne ke liye kaunsi property hai?",
                options: ["background", "font-size", "color", "text-style"],
                correctAnswer: "color"
            }
        ]
    },

    ai: {
        title: "AI & Machine Learning",
        questions: [
            {
                text: "AI ka full form kya hai?",
                options: [
                    "Artificial Intelligence",
                    "Automatic Internet",
                    "Advanced Information",
                    "Applied Interface"
                ],
                correctAnswer: "Artificial Intelligence"
            },
            {
                text: "Machine Learning kya hai?",
                options: [
                    "Computer hardware",
                    "AI ka ek subset",
                    "Web browser",
                    "Programming language"
                ],
                correctAnswer: "AI ka ek subset"
            },
            {
                text: "Supervised Learning mein model ko kya diya jata hai?",
                options: [
                    "Unlabeled data",
                    "Labeled data",
                    "No data",
                    "Only images"
                ],
                correctAnswer: "Labeled data"
            },
            {
                text: "Neural Network kis se inspired hai?",
                options: [
                    "Human brain",
                    "Keyboard",
                    "Hard disk",
                    "Monitor"
                ],
                correctAnswer: "Human brain"
            },
            {
                text: "Python mein Machine Learning ke liye commonly used library kaunsi hai?",
                options: [
                    "Bootstrap",
                    "Scikit-learn",
                    "jQuery",
                    "Tailwind"
                ],
                correctAnswer: "Scikit-learn"
            }
        ]
    },

    gk: {
        title: "General Knowledge",
        questions: [
            {
                text: "India ki capital kya hai?",
                options: [
                    "Mumbai",
                    "New Delhi",
                    "Lucknow",
                    "Jaipur"
                ],
                correctAnswer: "New Delhi"
            },
            {
                text: "India ka national animal kaun hai?",
                options: [
                    "Lion",
                    "Elephant",
                    "Tiger",
                    "Leopard"
                ],
                correctAnswer: "Tiger"
            },
            {
                text: "India ka national bird kaun hai?",
                options: [
                    "Parrot",
                    "Peacock",
                    "Eagle",
                    "Sparrow"
                ],
                correctAnswer: "Peacock"
            },
            {
                text: "Taj Mahal kis city mein hai?",
                options: [
                    "Delhi",
                    "Jaipur",
                    "Agra",
                    "Mumbai"
                ],
                correctAnswer: "Agra"
            },
            {
                text: "India ka Independence Day kab manaya jata hai?",
                options: [
                    "26 January",
                    "15 August",
                    "2 October",
                    "14 November"
                ],
                correctAnswer: "15 August"
            }
        ]
    },

    cs: {
        title: "Computer Science",
        questions: [
            {
                text: "CPU ka full form kya hai?",
                options: [
                    "Central Processing Unit",
                    "Computer Personal Unit",
                    "Central Program Utility",
                    "Control Processing User"
                ],
                correctAnswer: "Central Processing Unit"
            },
            {
                text: "Computer ka brain kise kaha jata hai?",
                options: [
                    "Monitor",
                    "Keyboard",
                    "CPU",
                    "Mouse"
                ],
                correctAnswer: "CPU"
            },
            {
                text: "RAM ka full form kya hai?",
                options: [
                    "Read Access Memory",
                    "Random Access Memory",
                    "Run Access Machine",
                    "Real Application Memory"
                ],
                correctAnswer: "Random Access Memory"
            },
            {
                text: "Binary number system mein kitne digits hote hain?",
                options: [
                    "2",
                    "8",
                    "10",
                    "16"
                ],
                correctAnswer: "2"
            },
            {
                text: "Operating System ka example kaunsa hai?",
                options: [
                    "MS Word",
                    "Google Chrome",
                    "Windows",
                    "HTML"
                ],
                correctAnswer: "Windows"
            }
        ]
    }
};

// Maintain the current quiz state
let questions = [];
let selectedCategory = "web";
let currentQuestionIndex = 0;
let selectedAnswer = null;
let userAnswers = [];
let timeLeft = 300;
let timerInterval = null;
let quizFinished = false;

// Get references to HTML elements
const quizSection = document.getElementById("quizSection");
const resultSection = document.getElementById("resultSection");
const questionText = document.getElementById("questionText");
const questionCounter = document.getElementById("questionCounter");
const optionsContainer = document.getElementById("optionsContainer");
const nextButton = document.getElementById("nextButton");
const timerElement = document.getElementById("timer");
const progressBar = document.getElementById("progressBar");
const startQuizBtn = document.getElementById("startQuizBtn");
const restartButton = document.getElementById("restartButton");
const dashboardButton = document.getElementById("dashboardButton");
const clearHistoryBtn = document.getElementById("clearHistoryBtn");

// Hide quiz and result sections when the page loads
quizSection.style.display = "none";
resultSection.style.display = "none";

// Retrieve saved quiz history safely
function getQuizHistory() {
    try {
        const history = JSON.parse(
            localStorage.getItem("quizHistory") || "[]"
        );

        return Array.isArray(history) ? history : [];
    } catch (error) {
        console.error("Unable to read quiz history:", error);
        return [];
    }
}

// Display the current question and its answer options
function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];

    questionText.textContent = currentQuestion.text;

    questionCounter.textContent =
        "Question " +
        (currentQuestionIndex + 1) +
        " of " +
        questions.length;

    optionsContainer.innerHTML = "";
    selectedAnswer = null;

    nextButton.disabled = true;

    nextButton.textContent =
        currentQuestionIndex === questions.length - 1
            ? "Finish Quiz"
            : "Next Question";

    // Update progress based on completed questions
    const progress =
        (currentQuestionIndex / questions.length) * 100;

    progressBar.style.width = progress + "%";

    // Create buttons for the available answer options
    currentQuestion.options.forEach(function (option) {
        const optionButton = document.createElement("button");

        optionButton.type = "button";
        optionButton.textContent = option;
        optionButton.classList.add("option-btn");

        optionButton.addEventListener("click", function () {
            if (quizFinished) {
                return;
            }

            const allButtons =
                optionsContainer.querySelectorAll(".option-btn");

            allButtons.forEach(function (button) {
                button.classList.remove("selected");
            });

            optionButton.classList.add("selected");

            selectedAnswer = option;
            nextButton.disabled = false;
        });

        optionsContainer.appendChild(optionButton);
    });
}

// Format the remaining time as minutes and seconds
function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    const formattedMinutes =
        String(minutes).padStart(2, "0");

    const formattedSeconds =
        String(seconds).padStart(2, "0");

    timerElement.textContent =
        formattedMinutes + ":" + formattedSeconds;
}

// Start the countdown timer
function startTimer() {
    clearInterval(timerInterval);

    updateTimerDisplay();

    timerInterval = setInterval(function () {
        if (quizFinished) {
            clearInterval(timerInterval);
            return;
        }

        timeLeft--;
        updateTimerDisplay();

        // Submit the quiz automatically when time expires
        if (timeLeft <= 0) {
            userAnswers[currentQuestionIndex] = selectedAnswer;
            finishQuiz();
        }
    }, 1000);
}

// Generate the answer review for the completed quiz
function renderAnswerReview() {
    const answerReview = document.getElementById("answerReview");

    answerReview.innerHTML = "";

    questions.forEach(function (question, index) {
        const reviewItem = document.createElement("div");
        const answer = userAnswers[index];

        const isCorrect = answer === question.correctAnswer;

        const questionHeading = document.createElement("strong");
        questionHeading.textContent =
            "Question " + (index + 1) + ": " +
            (isCorrect ? "Correct" : "Incorrect");

        const userAnswerText = document.createElement("p");
        userAnswerText.textContent =
            "Your answer: " + (answer || "Not answered");

        const correctAnswerText = document.createElement("p");
        correctAnswerText.textContent =
            "Correct answer: " + question.correctAnswer;

        reviewItem.classList.add(
            isCorrect ? "review-correct" : "review-incorrect"
        );

        reviewItem.appendChild(questionHeading);
        reviewItem.appendChild(userAnswerText);
        reviewItem.appendChild(correctAnswerText);

        answerReview.appendChild(reviewItem);
    });
}

// Calculate the final score and save the quiz result
function finishQuiz() {
    if (quizFinished) {
        return;
    }

    quizFinished = true;
    clearInterval(timerInterval);

    let score = 0;

    questions.forEach(function (question, index) {
        if (userAnswers[index] === question.correctAnswer) {
            score++;
        }
    });

    const percentage = Math.round(
        (score / questions.length) * 100
    );

    document.getElementById("finalScore").textContent =
        score + " / " + questions.length;

    document.getElementById("finalPercentage").textContent =
        percentage + "%";

    // Display feedback based on quiz performance
    let message;

    if (percentage >= 80) {
        message = "Excellent performance! Keep it up.";
    } else if (percentage >= 50) {
        message = "Good effort! Keep practising.";
    } else {
        message = "Keep learning. You can improve!";
    }

    document.getElementById("resultMessage").textContent = message;

    renderAnswerReview();

    // Save the latest quiz attempt
    const history = getQuizHistory();

    history.unshift({
        category: selectedCategory,
        score: score,
        total: questions.length,
        percentage: percentage,
        date: new Date().toLocaleString()
    });

    try {
        localStorage.setItem(
            "quizHistory",
            JSON.stringify(history.slice(0, 10))
        );
    } catch (error) {
        console.error("Unable to save quiz history:", error);
    }

    progressBar.style.width = "100%";

    quizSection.style.display = "none";
    resultSection.style.display = "block";

    renderQuizHistory();

    resultSection.scrollIntoView({
        behavior: "smooth"
    });
}

// Save the selected answer and navigate to the next question
nextButton.addEventListener("click", function () {
    if (quizFinished || selectedAnswer === null) {
        return;
    }

    userAnswers[currentQuestionIndex] = selectedAnswer;

    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
    } else {
        finishQuiz();
    }
});

// Display saved quiz attempts on the dashboard
function renderQuizHistory() {
    const historyList = document.getElementById("historyList");
    const history = getQuizHistory();

    historyList.innerHTML = "";

    updateDashboardStats(history);

    if (history.length === 0) {
        const emptyMessage = document.createElement("p");

        emptyMessage.textContent = "No quiz attempts yet.";

        historyList.appendChild(emptyMessage);
        return;
    }

    history.forEach(function (attempt) {
        const item = document.createElement("div");
        item.classList.add("history-item");

        const category = document.createElement("strong");
        category.textContent =
            String(attempt.category || "Quiz").toUpperCase();

        const details = document.createElement("p");

        details.textContent =
            "Score: " +
            attempt.score +
            "/" +
            attempt.total +
            " | Percentage: " +
            attempt.percentage +
            "% | " +
            attempt.date;

        item.appendChild(category);
        item.appendChild(details);

        historyList.appendChild(item);
    });
}

// Calculate total attempts, average score and best score
function updateDashboardStats(history) {
    const totalQuizzes = history.length;

    let averageScore = 0;
    let bestScore = 0;

    if (totalQuizzes > 0) {
        const totalPercentage = history.reduce(
            function (sum, attempt) {
                return sum + Number(attempt.percentage || 0);
            },
            0
        );

        averageScore = Math.round(
            totalPercentage / totalQuizzes
        );

        bestScore = Math.max(
            ...history.map(function (attempt) {
                return Number(attempt.percentage || 0);
            })
        );
    }

    document.getElementById("totalQuizzes").textContent =
        totalQuizzes;

    document.getElementById("averageScore").textContent =
        averageScore + "%";

    document.getElementById("bestScore").textContent =
        bestScore + "%";
}

// Reset the quiz and start the selected category
function startCategory(category) {
    if (!quizData[category]) {
        return;
    }

    selectedCategory = category;
    questions = quizData[category].questions;

    currentQuestionIndex = 0;
    selectedAnswer = null;
    userAnswers = [];
    timeLeft = 300;
    quizFinished = false;

    clearInterval(timerInterval);

    progressBar.style.width = "0%";

    document.getElementById("categoryTitle").textContent =
        quizData[category].title;

    resultSection.style.display = "none";
    quizSection.style.display = "block";

    displayQuestion();
    startTimer();

    quizSection.scrollIntoView({
        behavior: "smooth"
    });
}

// Connect category cards to their respective quizzes
document.querySelectorAll(".start-category-btn").forEach(
    function (button) {
        button.addEventListener("click", function () {
            const card = button.closest(".category-card");

            if (card) {
                startCategory(card.dataset.category);
            }
        });
    }
);

// Start the default Web Development quiz
startQuizBtn.addEventListener("click", function () {
    startCategory("web");
});

// Restart the current category quiz
restartButton.addEventListener("click", function () {
    startCategory(selectedCategory);
});

// Return to the main dashboard
dashboardButton.addEventListener("click", function () {
    clearInterval(timerInterval);

    quizSection.style.display = "none";
    resultSection.style.display = "none";

    document.querySelector(".welcome").scrollIntoView({
        behavior: "smooth"
    });
});

// Clear saved quiz attempts after user confirmation
clearHistoryBtn.addEventListener("click", function () {
    const confirmClear = confirm(
        "Are you sure you want to clear all quiz history?"
    );

    if (!confirmClear) {
        return;
    }

    localStorage.removeItem("quizHistory");

    renderQuizHistory();
});

// Load saved quiz history when the page opens
renderQuizHistory();