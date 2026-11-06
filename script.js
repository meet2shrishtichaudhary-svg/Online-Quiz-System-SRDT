// QUIZMASTER - ONLINE QUIZ SYSTEM

const STORAGE_KEY = "quizmaster-history";
const THEME_KEY = "quizmaster-theme";

const quizData = {
    web: {
        name: "Web Development",
        icon: "🌐",
        questions: [
            {
                question: "What does HTML stand for?",
                options: ["Hyper Text Markup Language", "High Text Machine Language", "Hyper Tool Markup Language", "Home Text Markup Language"],
                answer: "Hyper Text Markup Language",
                difficulty: "easy"
            },
            {
                question: "Which tag is used to create a hyperlink?",
                options: ["<link>", "<a>", "<href>", "<url>"],
                answer: "<a>",
                difficulty: "easy"
            },
            {
                question: "Which CSS property changes text color?",
                options: ["font-style", "text-color", "color", "background"],
                answer: "color",
                difficulty: "easy"
            },
            {
                question: "Which language is used to add interactivity to web pages?",
                options: ["HTML", "CSS", "JavaScript", "SQL"],
                answer: "JavaScript",
                difficulty: "medium"
            },
            {
                question: "Which HTML tag is used to add an image?",
                options: ["<picture>", "<img>", "<src>", "<image>"],
                answer: "<img>",
                difficulty: "easy"
            }
        ]
    },

    ai: {
        name: "Artificial Intelligence",
        icon: "🤖",
        questions: [
            {
                question: "What does AI stand for?",
                options: ["Automated Internet", "Artificial Intelligence", "Advanced Information", "Artificial Integration"],
                answer: "Artificial Intelligence",
                difficulty: "easy"
            },
            {
                question: "Which is a common application of AI?",
                options: ["Voice assistants", "Paper printing", "Electric switch", "Simple calculator"],
                answer: "Voice assistants",
                difficulty: "easy"
            },
            {
                question: "What is Machine Learning?",
                options: ["A programming language", "A type of database", "A subset of AI", "A computer hardware"],
                answer: "A subset of AI",
                difficulty: "medium"
            },
            {
                question: "Which data is used to train a machine learning model?",
                options: ["Training data", "Output data only", "Deleted data", "Random hardware"],
                answer: "Training data",
                difficulty: "easy"
            },
            {
                question: "Which field helps computers understand human language?",
                options: ["Networking", "NLP", "Cybersecurity", "Operating System"],
                answer: "NLP",
                difficulty: "medium"
            }
        ]
    },

    gk: {
        name: "General Knowledge",
        icon: "🌍",
        questions: [
            {
                question: "What is the capital of India?",
                options: ["Mumbai", "New Delhi", "Kolkata", "Chennai"],
                answer: "New Delhi",
                difficulty: "easy"
            },
            {
                question: "Which is the largest planet in our Solar System?",
                options: ["Earth", "Mars", "Jupiter", "Venus"],
                answer: "Jupiter",
                difficulty: "easy"
            },
            {
                question: "Who is known as the Father of the Indian Constitution?",
                options: ["Mahatma Gandhi", "Dr. B. R. Ambedkar", "Jawaharlal Nehru", "Sardar Patel"],
                answer: "Dr. B. R. Ambedkar",
                difficulty: "medium"
            },
            {
                question: "How many days are there in a leap year?",
                options: ["365", "366", "364", "360"],
                answer: "366",
                difficulty: "easy"
            },
            {
                question: "Which is the national animal of India?",
                options: ["Lion", "Elephant", "Bengal Tiger", "Leopard"],
                answer: "Bengal Tiger",
                difficulty: "easy"
            }
        ]
    },

    cs: {
        name: "Computer Science",
        icon: "💻",
        questions: [
            {
                question: "What is the brain of a computer?",
                options: ["RAM", "CPU", "Hard Disk", "Monitor"],
                answer: "CPU",
                difficulty: "easy"
            },
            {
                question: "Which of these is an input device?",
                options: ["Monitor", "Printer", "Keyboard", "Speaker"],
                answer: "Keyboard",
                difficulty: "easy"
            },
            {
                question: "What does RAM stand for?",
                options: ["Read Access Memory", "Random Access Memory", "Run Access Memory", "Rapid Action Memory"],
                answer: "Random Access Memory",
                difficulty: "easy"
            },
            {
                question: "Which number system uses only 0 and 1?",
                options: ["Decimal", "Octal", "Binary", "Hexadecimal"],
                answer: "Binary",
                difficulty: "medium"
            },
            {
                question: "Which device is used to connect computers in a network?",
                options: ["Router", "Scanner", "Plotter", "Keyboard"],
                answer: "Router",
                difficulty: "medium"
            }
        ]
    },

    java: {
        name: "Java Programming",
        icon: "☕",
        questions: [
            {
                question: "Who developed Java?",
                options: ["Microsoft", "James Gosling", "Dennis Ritchie", "Bjarne Stroustrup"],
                answer: "James Gosling",
                difficulty: "easy"
            },
            {
                question: "Which keyword is used to create a class in Java?",
                options: ["function", "define", "class", "struct"],
                answer: "class",
                difficulty: "easy"
            },
            {
                question: "Which method is the entry point of a Java program?",
                options: ["start()", "run()", "main()", "execute()"],
                answer: "main()",
                difficulty: "easy"
            },
            {
                question: "Which data type stores true or false?",
                options: ["int", "boolean", "char", "float"],
                answer: "boolean",
                difficulty: "easy"
            },
            {
                question: "Which keyword is used for inheritance in Java?",
                options: ["implements", "extends", "inherits", "superclass"],
                answer: "extends",
                difficulty: "medium"
            }
        ]
    },

    dsa: {
        name: "Data Structures",
        icon: "📊",
        questions: [
            {
                question: "Which data structure follows LIFO?",
                options: ["Queue", "Stack", "Array", "Linked List"],
                answer: "Stack",
                difficulty: "easy"
            },
            {
                question: "Which data structure follows FIFO?",
                options: ["Stack", "Tree", "Queue", "Graph"],
                answer: "Queue",
                difficulty: "easy"
            },
            {
                question: "Which data structure stores elements in index order?",
                options: ["Array", "Tree", "Graph", "Stack"],
                answer: "Array",
                difficulty: "easy"
            },
            {
                question: "What is the time complexity of binary search?",
                options: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
                answer: "O(log n)",
                difficulty: "medium"
            },
            {
                question: "Which data structure consists of nodes and edges?",
                options: ["Array", "Stack", "Graph", "Queue"],
                answer: "Graph",
                difficulty: "medium"
            }
        ]
    },

    sql: {
        name: "Database Management",
        icon: "🗄️",
        questions: [
            {
                question: "What does DBMS stand for?",
                options: ["Database Management System", "Data Basic Management Software", "Digital Base Management System", "Database Machine System"],
                answer: "Database Management System",
                difficulty: "easy"
            },
            {
                question: "Which SQL command is used to retrieve data?",
                options: ["INSERT", "UPDATE", "SELECT", "DELETE"],
                answer: "SELECT",
                difficulty: "easy"
            },
            {
                question: "Which key uniquely identifies a record?",
                options: ["Foreign Key", "Primary Key", "Duplicate Key", "Common Key"],
                answer: "Primary Key",
                difficulty: "easy"
            },
            {
                question: "Which SQL command removes a table?",
                options: ["DELETE", "REMOVE", "DROP", "CLEAR"],
                answer: "DROP",
                difficulty: "medium"
            },
            {
                question: "What is a collection of related data called?",
                options: ["Database", "Program", "Algorithm", "Network"],
                answer: "Database",
                difficulty: "easy"
            }
        ]
    },

    os: {
        name: "Operating Systems",
        icon: "⚙️",
        questions: [
            {
                question: "Which of these is an operating system?",
                options: ["MS Word", "Windows", "Google Chrome", "Photoshop"],
                answer: "Windows",
                difficulty: "easy"
            },
            {
                question: "What is the main function of an operating system?",
                options: ["Manage computer resources", "Create websites", "Design images", "Write documents"],
                answer: "Manage computer resources",
                difficulty: "easy"
            },
            {
                question: "Which is an open-source operating system?",
                options: ["Linux", "Windows", "iOS", "macOS"],
                answer: "Linux",
                difficulty: "easy"
            },
            {
                question: "What is multitasking?",
                options: ["Running multiple tasks", "Deleting files", "Formatting a disk", "Shutting down a computer"],
                answer: "Running multiple tasks",
                difficulty: "medium"
            },
            {
                question: "Which part of an OS manages processes?",
                options: ["Process Manager", "Text Editor", "Web Browser", "File Printer"],
                answer: "Process Manager",
                difficulty: "medium"
            }
        ]
    },

    cn: {
        name: "Computer Networks",
        icon: "🔗",
        questions: [
            {
                question: "What does LAN stand for?",
                options: ["Large Area Network", "Local Area Network", "Long Access Network", "Linked Area Node"],
                answer: "Local Area Network",
                difficulty: "easy"
            },
            {
                question: "Which protocol is used to browse websites?",
                options: ["HTTP", "FTP", "SMTP", "POP3"],
                answer: "HTTP",
                difficulty: "easy"
            },
            {
                question: "What does IP stand for?",
                options: ["Internet Protocol", "Internal Program", "Information Process", "Internet Program"],
                answer: "Internet Protocol",
                difficulty: "easy"
            },
            {
                question: "Which device forwards data between networks?",
                options: ["Mouse", "Router", "Monitor", "Printer"],
                answer: "Router",
                difficulty: "medium"
            },
            {
                question: "How many layers are in the OSI model?",
                options: ["4", "5", "7", "8"],
                answer: "7",
                difficulty: "medium"
            }
        ]
    },

    cyber: {
        name: "Cyber Security",
        icon: "🔐",
        questions: [
            {
                question: "What is phishing?",
                options: ["A type of cyber attack", "A programming language", "A database", "A computer part"],
                answer: "A type of cyber attack",
                difficulty: "easy"
            },
            {
                question: "Which is a strong password?",
                options: ["123456", "password", "abc123", "T9#mP2@qL7"],
                answer: "T9#mP2@qL7",
                difficulty: "easy"
            },
            {
                question: "What does antivirus software do?",
                options: ["Protects against malware", "Increases screen size", "Creates websites", "Stores passwords only"],
                answer: "Protects against malware",
                difficulty: "easy"
            },
            {
                question: "What is encryption?",
                options: ["Converting data into a coded form", "Deleting all data", "Formatting a computer", "Creating a folder"],
                answer: "Converting data into a coded form",
                difficulty: "medium"
            },
            {
                question: "What does OTP stand for?",
                options: ["One Time Password", "Online Text Process", "Open Transfer Protocol", "One Type Program"],
                answer: "One Time Password",
                difficulty: "easy"
            }
        ]
    },

    math: {
        name: "Mathematics",
        icon: "➗",
        questions: [
            {
                question: "What is 12 × 8?",
                options: ["86", "96", "108", "88"],
                answer: "96",
                difficulty: "easy"
            },
            {
                question: "What is the square root of 144?",
                options: ["10", "11", "12", "14"],
                answer: "12",
                difficulty: "easy"
            },
            {
                question: "What is the value of 15% of 200?",
                options: ["20", "25", "30", "35"],
                answer: "30",
                difficulty: "easy"
            },
            {
                question: "What is the sum of angles in a triangle?",
                options: ["90°", "180°", "270°", "360°"],
                answer: "180°",
                difficulty: "easy"
            },
            {
                question: "What is 2 to the power of 5?",
                options: ["16", "25", "32", "64"],
                answer: "32",
                difficulty: "medium"
            }
        ]
    }
};


// 
// DOM ELEMENTS
//
const categoryGrid = document.getElementById("categoryGrid");
const quizSection = document.getElementById("quizSection");
const resultSection = document.getElementById("resultSection");

const questionCounter = document.getElementById("questionCounter");
const questionText = document.getElementById("questionText");
const optionsContainer = document.getElementById("optionsContainer");
const timerElement = document.getElementById("timer");
const progressBar = document.getElementById("progressBar");
const answeredCounter = document.getElementById("answeredCounter");
const nextButton = document.getElementById("nextButton");


//
// QUIZ VARIABLES
// 
let currentCategory = "";
let questions = [];
let currentQuestionIndex = 0;
let selectedAnswers = [];
let timeLeft = 0;
let timerInterval = null;
let quizStartTime = 0;
let lastResult = null;


//
// LOCAL STORAGE FUNCTIONS
// 

function getHistory() {
    try {
        return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    } catch (error) {
        return [];
    }
}

function saveHistory(history) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
}


// 
// DISPLAY CATEGORIES
//

function displayCategories() {
    categoryGrid.innerHTML = "";

    Object.keys(quizData).forEach(function(key) {
        const category = quizData[key];

        const card = document.createElement("button");
        card.className = "category-card";

        card.innerHTML = `
            <div class="category-icon">${category.icon}</div>
            <h3>${category.name}</h3>
            <p>${category.questions.length} Questions • Start Quiz →</p>
        `;

        card.addEventListener("click", function() {
            startQuiz(key);
        });

        categoryGrid.appendChild(card);
    });
}


// 
// START QUIZ
// 

function startQuiz(categoryKey) {
    currentCategory = categoryKey;

    questions = [...quizData[categoryKey].questions];

    currentQuestionIndex = 0;
    selectedAnswers = new Array(questions.length).fill(null);

    timeLeft = questions.length * 30;
    quizStartTime = Date.now();

    document.getElementById("quizCategoryLabel").textContent =
        quizData[categoryKey].name;

    document.getElementById("reviewSection").classList.add("hidden");

    document.getElementById("categories").classList.add("hidden");
    document.getElementById("dashboard").classList.add("hidden");
    document.getElementById("history").classList.add("hidden");
    document.querySelector(".welcome-section").classList.add("hidden");

    resultSection.classList.add("hidden");
    quizSection.classList.remove("hidden");

    showQuestion();
    startTimer();

    quizSection.scrollIntoView({ behavior: "smooth" });
}


// 
// SHOW QUESTION
//

function showQuestion() {
    const question = questions[currentQuestionIndex];

    questionCounter.textContent =
        `${currentQuestionIndex + 1} / ${questions.length}`;

    questionText.textContent = question.question;

    progressBar.style.width =
        `${((currentQuestionIndex + 1) / questions.length) * 100}%`;

    optionsContainer.innerHTML = "";

    question.options.forEach(function(option) {
        const button = document.createElement("button");

        button.className = "option-btn";
        button.textContent = option;

        if (selectedAnswers[currentQuestionIndex] === option) {
            button.classList.add("selected");
        }

        button.addEventListener("click", function() {
            selectAnswer(option);
        });

        optionsContainer.appendChild(button);
    });

    updateAnsweredCounter();

    nextButton.disabled =
        selectedAnswers[currentQuestionIndex] === null;

    nextButton.textContent =
        currentQuestionIndex === questions.length - 1
            ? "Finish Quiz ✓"
            : "Next Question →";
}


//
// SELECT ANSWER
// 

function selectAnswer(answer) {
    selectedAnswers[currentQuestionIndex] = answer;

    const buttons = optionsContainer.querySelectorAll(".option-btn");

    buttons.forEach(function(button) {
        button.classList.remove("selected");

        if (button.textContent === answer) {
            button.classList.add("selected");
        }
    });

    nextButton.disabled = false;

    updateAnsweredCounter();
}


// 
// ANSWERED COUNTER
// 

function updateAnsweredCounter() {
    const answered = selectedAnswers.filter(function(answer) {
        return answer !== null;
    }).length;

    answeredCounter.textContent = `Answered: ${answered}`;
}


// 
// NEXT QUESTION
// 

nextButton.addEventListener("click", function() {
    if (selectedAnswers[currentQuestionIndex] === null) {
        return;
    }

    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion();
    } else {
        finishQuiz();
    }
});


// 
// TIMER
//

function startTimer() {
    clearInterval(timerInterval);

    updateTimerDisplay();

    timerInterval = setInterval(function() {
        timeLeft--;

        updateTimerDisplay();

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            finishQuiz();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    timerElement.textContent =
        `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

    if (timeLeft <= 30) {
        timerElement.style.color = "#dc2626";
    } else {
        timerElement.style.color = "";
    }
}


// 
// FINISH QUIZ
// 

function finishQuiz() {
    if (quizSection.classList.contains("hidden")) {
        return;
    }

    clearInterval(timerInterval);

    const total = questions.length;
    let correct = 0;
    let wrong = 0;
    let unanswered = 0;

    questions.forEach(function(question, index) {
        const selected = selectedAnswers[index];

        if (selected === null) {
            unanswered++;
        } else if (selected === question.answer) {
            correct++;
        } else {
            wrong++;
        }
    });

    const accuracy = Math.round((correct / total) * 100);
    const timeTaken = Math.max(
        0,
        Math.round((Date.now() - quizStartTime) / 1000)
    );

    lastResult = {
        category: quizData[currentCategory].name,
        correct: correct,
        wrong: wrong,
        unanswered: unanswered,
        total: total,
        accuracy: accuracy,
        timeTaken: timeTaken,
        date: new Date().toLocaleString()
    };

    const history = getHistory();

    history.unshift(lastResult);

    saveHistory(history.slice(0, 50));

    quizSection.classList.add("hidden");
    resultSection.classList.remove("hidden");

    displayResult(lastResult);
    updateDashboard();
    displayHistory();

    resultSection.scrollIntoView({ behavior: "smooth" });
}


//
// DISPLAY RESULT
//

function displayResult(result) {
    document.getElementById("resultCorrect").textContent = result.correct;
    document.getElementById("resultWrong").textContent = result.wrong;
    document.getElementById("resultUnanswered").textContent = result.unanswered;

    document.getElementById("resultPercentage").textContent =
        result.accuracy + "%";

    document.getElementById("resultTime").textContent =
        result.timeTaken + " sec";

    let title = "Keep Practicing!";
    let message = "Practice regularly to improve your score.";

    if (result.accuracy >= 80) {
        title = "Excellent Work!";
        message = "Outstanding performance. Keep it up!";
    } else if (result.accuracy >= 60) {
        title = "Good Job!";
        message = "You are doing well. Keep improving!";
    }

    document.getElementById("resultTitle").textContent = title;
    document.getElementById("resultMessage").textContent = message;
}


// 
// ANSWER REVIEW
//

document.getElementById("reviewButton").addEventListener("click", function() {
    const reviewSection = document.getElementById("reviewSection");
    const reviewList = document.getElementById("reviewList");

    reviewList.innerHTML = "";

    questions.forEach(function(question, index) {
        const selected = selectedAnswers[index];

        const isCorrect = selected === question.answer;

        const item = document.createElement("div");
        item.className = "review-item";

        const heading = document.createElement("h3");
        heading.textContent = `${index + 1}. ${question.question}`;

        const yourAnswer = document.createElement("p");
        yourAnswer.textContent =
            "Your Answer: " + (selected === null ? "Not Answered" : selected);

        yourAnswer.className = isCorrect ? "correct-text" : "wrong-text";

        const correctAnswer = document.createElement("p");
        correctAnswer.textContent = "Correct Answer: " + question.answer;
        correctAnswer.className = "correct-text";

        const status = document.createElement("p");
        status.textContent = isCorrect
            ? "✓ Correct"
            : selected === null
                ? "Skipped"
                : "✗ Incorrect";

        item.appendChild(heading);
        item.appendChild(yourAnswer);
        item.appendChild(correctAnswer);
        item.appendChild(status);

        reviewList.appendChild(item);
    });

    reviewSection.classList.remove("hidden");
    reviewSection.scrollIntoView({ behavior: "smooth" });
});


// 
// RETRY QUIZ
// 

document.getElementById("retryButton").addEventListener("click", function() {
    startQuiz(currentCategory);
});


// 
// BACK TO HOME
//

function goHome() {
    clearInterval(timerInterval);

    quizSection.classList.add("hidden");
    resultSection.classList.add("hidden");

    document.getElementById("categories").classList.remove("hidden");
    document.getElementById("dashboard").classList.remove("hidden");
    document.getElementById("history").classList.remove("hidden");
    document.querySelector(".welcome-section").classList.remove("hidden");

    updateDashboard();
    displayHistory();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

document.getElementById("homeButton").addEventListener("click", goHome);

document.getElementById("exitQuizButton").addEventListener("click", function() {
    const confirmExit = confirm("Are you sure you want to exit this quiz?");

    if (confirmExit) {
        goHome();
    }
});


// 
// DASHBOARD STATISTICS
// 

function updateDashboard() {
    const history = getHistory();

    const totalAttempts = history.length;

    const totalAccuracy = history.reduce(function(sum, item) {
        return sum + item.accuracy;
    }, 0);

    const averageAccuracy = totalAttempts
        ? Math.round(totalAccuracy / totalAttempts)
        : 0;

    const bestScore = totalAttempts
        ? Math.max(...history.map(item => item.accuracy))
        : 0;

    const totalQuestionsAttempted = history.reduce(function(sum, item) {
        return sum + item.correct + item.wrong;
    }, 0);

    document.getElementById("totalAttempts").textContent = totalAttempts;
    document.getElementById("averageAccuracy").textContent = averageAccuracy + "%";
    document.getElementById("bestScore").textContent = bestScore + "%";

    document.getElementById("totalQuestionsAttempted").textContent =
        totalQuestionsAttempted;
}


// 
// QUIZ HISTORY
// 

function displayHistory() {
    const historyList = document.getElementById("historyList");
    const history = getHistory();

    historyList.innerHTML = "";

    if (history.length === 0) {
        historyList.innerHTML =
            '<p class="empty-message">No quiz attempts yet. Start your first quiz!</p>';
        return;
    }

    history.forEach(function(item) {
        const row = document.createElement("div");
        row.className = "history-item";

        const details = document.createElement("div");

        const title = document.createElement("h3");
        title.textContent = item.category;

        const date = document.createElement("p");
        date.textContent = item.date;

        details.appendChild(title);
        details.appendChild(date);

        const score = document.createElement("div");
        score.className = "history-score";
        score.textContent = `${item.correct}/${item.total} (${item.accuracy}%)`;

        row.appendChild(details);
        row.appendChild(score);

        historyList.appendChild(row);
    });
}


//
// CLEAR HISTORY
// 

document.getElementById("clearHistoryButton").addEventListener("click", function() {
    const history = getHistory();

    if (history.length === 0) {
        alert("There is no quiz history to clear.");
        return;
    }

    const confirmClear = confirm("Are you sure you want to clear all quiz history?");

    if (confirmClear) {
        localStorage.removeItem(STORAGE_KEY);

        updateDashboard();
        displayHistory();

        alert("Quiz history cleared successfully!");
    }
});


// 
// DARK MODE
// 
const themeToggle = document.getElementById("themeToggle");

function applyTheme(theme) {
    document.body.classList.toggle("dark", theme === "dark");
    themeToggle.textContent = theme === "dark" ? "☀️" : "🌙";
}

const savedTheme = localStorage.getItem(THEME_KEY) || "light";

applyTheme(savedTheme);

themeToggle.addEventListener("click", function() {
    const newTheme = document.body.classList.contains("dark")
        ? "light"
        : "dark";

    localStorage.setItem(THEME_KEY, newTheme);
    applyTheme(newTheme);
});


// 
// INITIALIZE PROJECT
// 

displayCategories();
updateDashboard();
displayHistory();