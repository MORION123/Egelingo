// ==================== БАНК ЗАДАНИЙ (РЕАЛИСТИЧНЫЕ, БЕЗ ГРАФИКОВ) ====================
const tasksBank = {
    1: [
        { text: "Шоколадка стоит 35 рублей. В воскресенье действует акция: заплатив за две, покупатель получает три (одну в подарок). Какое наибольшее количество шоколадок можно получить, имея 200 рублей?", answer: "7", solution: "200 ÷ 35 = 5 штук (остаток 25). По акции: 2 шоколадки = 3 штуки. Купив 4 шоколадки (2 акции), получим 6 штук. Остаётся 200 - 140 = 60 руб. На 60 руб можно купить ещё 1 шоколадку (35 руб), останется 25 руб. Итого: 6 + 1 = 7." },
        { text: "Тетрадь стоит 24 рубля. При покупке более 50 тетрадей магазин делает скидку 10% от стоимости всей покупки. Сколько рублей заплатит покупатель за 60 тетрадей?", answer: "1296", solution: "60 × 24 = 1440 руб. Скидка 10%: 1440 × 0.9 = 1296 руб." },
        { text: "Флакон шампуня стоит 160 рублей. Во время распродажи скидка составляет 25%. Какое наибольшее количество флаконов можно купить на 1000 рублей?", answer: "8", solution: "160 × 0.75 = 120 руб. 1000 ÷ 120 = 8.33 → 8 флаконов." }
    ],
    2: [
        { text: "В таблице приведены данные о температуре воздуха: 0 ч — -2°, 4 ч — -5°, 8 ч — 0°, 12 ч — +6°, 16 ч — +8°, 20 ч — +3°, 24 ч — -1°. Найдите разность между наибольшей и наименьшей температурой за сутки.", answer: "13", solution: "Наибольшая: +8°, наименьшая: -5°. Разность: 8 - (-5) = 13°." },
        { text: "Среднемесячная температура: январь -12°, февраль -10°, март -3°, апрель +5°, май +12°, июнь +16°, июль +18°, август +17°, сентябрь +11°, октябрь +4°, ноябрь -3°, декабрь -8°. Найдите разницу между самым тёплым и самым холодным месяцем.", answer: "30", solution: "Самый тёплый: июль +18°, самый холодный: январь -12°. Разность: 18 - (-12) = 30°." }
    ],
    3: [
        { text: "Площадь квадрата равна 36. Найдите его периметр.", answer: "24", solution: "Сторона = √36 = 6. Периметр = 4 × 6 = 24." },
        { text: "Периметр квадрата равен 32. Найдите его площадь.", answer: "64", solution: "Сторона = 32 ÷ 4 = 8. Площадь = 8² = 64." },
        { text:// ==================== БАНКИ ЗАДАНИЙ ПО ПРЕДМЕТАМ ====================
const subjectsBank = {
    math: {
        name: "Математика",
        tasks: {
            1: [
                { text: "Шоколадка стоит 35 рублей. Акция: за две — третья в подарок. Сколько шоколадок можно получить на 200 рублей?", answer: "7", solution: "200÷35=5 штук. 5 шоколадок дают 2 подарка (за 4 штуки) → 7. Остаток 25 руб." }
            ],
            2: [
                { text: "Температура: -2°, -5°, 0°, +6°, +8°, +3°, -1°. Найдите разность max и min.", answer: "13", solution: "8 - (-5) = 13°." }
            ],
            3: [
                { text: "Площадь квадрата 36. Найдите периметр.", answer: "24", solution: "Сторона=6, P=24." }
            ]
            // ... остальные задания
        }
    },
    russian: {
        name: "Русский язык",
        tasks: {
            1: [
                { text: "В каком слове ударение падает на первый слог? 1) красивЕе 2) тортЫ 3) бАнты 4) звонИт", answer: "3", solution: "Правильно: бАнты." }
            ],
            2: [
                { text: "В каком предложении вместо слова ДЛИННЫЙ нужно употребить ДЛИТЕЛЬНЫЙ? 1) ДЛИННЫЙ хвост. 2) ДЛИННЫЙ путь. 3) ДЛИННОЕ совещание.", answer: "3", solution: "ДЛИТЕЛЬНОЕ совещание." }
            ]
            // ... остальные задания
        }
    },
    physics: {
        name: "Физика",
        tasks: {
            1: [
                { text: "Автомобиль движется со скоростью 72 км/ч. Выразите скорость в м/с.", answer: "20", solution: "72 ÷ 3.6 = 20 м/с." }
            ]
        }
    },
    informatics: {
        name: "Информатика",
        tasks: {
            1: [
                { text: "Сколько бит в 1 байте?", answer: "8", solution: "1 байт = 8 бит." }
            ]
        }
    }
};

// Дополняем задания для каждого предмета
for (let subject in subjectsBank) {
    for (let i = 1; i <= 21; i++) {
        if (!subjectsBank[subject].tasks[i]) {
            subjectsBank[subject].tasks[i] = [
                { text: `Задание ${i}. Решите и введите ответ.`, answer: `${i}`, solution: `Ответ: ${i}.` }
            ];
        }
        while (subjectsBank[subject].tasks[i].length < 2) {
            subjectsBank[subject].tasks[i].push({
                text: `Задание ${i}. Введите ответ.`,
                answer: `${i}`,
                solution: `Ответ: ${i}.`
            });
        }
    }
}

// ==================== ДОСТИЖЕНИЯ ====================
const achievementsList = [
    { id: "first_task", name: "Первое задание", icon: "🎯", condition: (stats) => stats.totalSolved >= 1 },
    { id: "ten_tasks", name: "10 заданий", icon: "📚", condition: (stats) => stats.totalSolved >= 10 },
    { id: "fifty_tasks", name: "50 заданий", icon: "🏅", condition: (stats) => stats.totalSolved >= 50 },
    { id: "hundred_tasks", name: "100 заданий", icon: "🎖️", condition: (stats) => stats.totalSolved >= 100 },
    { id: "perfect_math", name: "Математик", icon: "📐", condition: (stats) => stats.subjectMath >= 10 },
    { id: "perfect_russian", name: "Филолог", icon: "📖", condition: (stats) => stats.subjectRussian >= 10 },
    { id: "streak_5", name: "Серия 5", icon: "🔥", condition: (stats) => stats.streak >= 5 },
    { id: "streak_10", name: "Серия 10", icon: "⚡", condition: (stats) => stats.streak >= 10 }
];

// ==================== ПЕРЕМЕННЫЕ ====================
let currentUser = null;
let currentXP = 0;
let xpToNextLevel = 100;
let userLevel = 1;
let currentSubject = "math";
let completedTasks = {}; // { subject: { taskId: [completedVariants] } }
let userStats = {
    totalSolved: 0,
    correctAnswers: 0,
    streak: 0,
    subjectMath: 0,
    subjectRussian: 0,
    subjectPhysics: 0,
    subjectInformatics: 0,
    achievements: []
};
let currentTaskId = null;
let currentVariant = null;
let currentVariantIndex = null;

// DOM элементы
let authScreen, mainApp, usernameSpan, userAvatar, logoutBtn;
let tasksGrid, taskCard, closeTaskBtn, taskTitle, taskText, taskAnswer, checkBtn;
let taskFeedback, taskSolution, solutionText, levelBadge, xpFill, xpText, owlTooltip;
let statsBar, totalTasksSpan, correctPercentSpan, streakSpan;
let subjectTitle, achievementsGrid;

// ==================== СИСТЕМА УРОВНЕЙ ====================
function updateLevel() {
    let newLevel = 1;
    let neededXP = 100;
    let tempXP = currentXP;
    
    while (tempXP >= neededXP && newLevel < 100) {
        tempXP -= neededXP;
        newLevel++;
        neededXP = Math.floor(neededXP * 1.2);
    }
    
    userLevel = newLevel;
    xpToNextLevel = neededXP;
    currentXP = tempXP;
    
    if (levelBadge) levelBadge.textContent = `📊 Уровень ${userLevel}`;
    if (xpFill) {
        const percent = (currentXP / xpToNextLevel) * 100;
        xpFill.style.width = `${Math.min(percent, 100)}%`;
    }
    if (xpText) xpText.textContent = `${currentXP} / ${xpToNextLevel} XP`;
}

function addXP(amount) {
    currentXP += amount;
    updateLevel();
    saveProgress();
}

// ==================== СТАТИСТИКА ====================
function updateStats() {
    if (totalTasksSpan) totalTasksSpan.textContent = userStats.totalSolved;
    if (correctPercentSpan) {
        const percent = userStats.totalSolved > 0 
            ? Math.round((userStats.correctAnswers / userStats.totalSolved) * 100) 
            : 0;
        correctPercentSpan.textContent = `${percent}%`;
    }
    if (streakSpan) streakSpan.textContent = userStats.streak;
}

function recordAnswer(isCorrect) {
    if (isCorrect) {
        userStats.correctAnswers++;
        userStats.streak++;
    } else {
        userStats.streak = 0;
    }
    userStats.totalSolved++;
    
    // Обновляем статистику по предмету
    if (currentSubject === "math") userStats.subjectMath++;
    if (currentSubject === "russian") userStats.subjectRussian++;
    if (currentSubject === "physics") userStats.subjectPhysics++;
    if (currentSubject === "informatics") userStats.subjectInformatics++;
    
    updateStats();
    checkAchievements();
    saveProgress();
}

// ==================== ДОСТИЖЕНИЯ ====================
function checkAchievements() {
    const stats = {
        totalSolved: userStats.totalSolved,
        streak: userStats.streak,
        subjectMath: userStats.subjectMath,
        subjectRussian: userStats.subjectRussian
    };
    
    let newUnlocked = false;
    
    achievementsList.forEach(achievement => {
        if (!userStats.achievements.includes(achievement.id) && achievement.condition(stats)) {
            userStats.achievements.push(achievement.id);
            newUnlocked = true;
            showTip(`🏆 Новое достижение: ${achievement.name}!`);
        }
    });
    
    if (newUnlocked) {
        renderAchievements();
    }
}

function renderAchievements() {
    if (!achievementsGrid) return;
    achievementsGrid.innerHTML = '';
    
    achievementsList.forEach(achievement => {
        const unlocked = userStats.achievements.includes(achievement.id);
        const badge = document.createElement('div');
        badge.className = `achievement-badge ${unlocked ? 'unlocked' : ''}`;
        badge.innerHTML = `
            <span class="achievement-icon">${achievement.icon}</span>
            <span class="achievement-name">${achievement.name}</span>
        `;
        achievementsGrid.appendChild(badge);
    });
}

// ==================== ЗАДАНИЯ ====================
function getRandomVariant(taskId) {
    const tasks = subjectsBank[currentSubject].tasks;
    const variants = tasks[taskId];
    if (!variants) return null;
    
    if (!completedTasks[currentSubject]) completedTasks[currentSubject] = {};
    const completed = completedTasks[currentSubject][taskId] || [];
    const available = variants.filter((_, idx) => !completed.includes(idx));
    
    if (available.length === 0) return null;
    
    const randomIndex = Math.floor(Math.random() * available.length);
    const originalIndex = variants.findIndex(v => v === available[randomIndex]);
    return { variant: variants[originalIndex], index: originalIndex };
}

function markTaskCompleted(taskId, variantIndex) {
    if (!completedTasks[currentSubject]) completedTasks[currentSubject] = {};
    if (!completedTasks[currentSubject][taskId]) completedTasks[currentSubject][taskId] = [];
    if (!completedTasks[currentSubject][taskId].includes(variantIndex)) {
        completedTasks[currentSubject][taskId].push(variantIndex);
    }
    
    const btn = document.querySelector(`.task-btn[data-task="${taskId}"]`);
    const tasks = subjectsBank[currentSubject].tasks;
    if (btn && completedTasks[currentSubject][taskId].length >= tasks[taskId].length) {
        btn.classList.add('completed');
        btn.title = 'Все варианты пройдены!';
    }
    saveProgress();
}

function openTask(taskId) {
    currentTaskId = taskId;
    const result = getRandomVariant(taskId);
    
    if (!result) {
        showTip('🎉 Все варианты этого задания пройдены!');
        return;
    }
    
    currentVariant = result.variant;
    currentVariantIndex = result.index;
    
    taskTitle.textContent = `${subjectsBank[currentSubject].name} - Задание ${taskId}`;
    taskText.textContent = currentVariant.text;
    taskAnswer.value = '';
    taskFeedback.className = 'task-feedback';
    taskFeedback.style.display = 'none';
    taskFeedback.innerHTML = '';
    taskSolution.style.display = 'none';
    taskCard.style.display = 'block';
    taskCard.scrollIntoView({ behavior: 'smooth' });
}

function checkAnswer() {
    if (!currentVariant) return;
    
    const userAnswer = taskAnswer.value.trim();
    const isCorrect = userAnswer === currentVariant.answer;
    
    if (isCorrect) {
        taskFeedback.innerHTML = '✅ Правильно! +50 XP';
        taskFeedback.className = 'task-feedback correct';
        taskFeedback.style.display = 'block';
        
        markTaskCompleted(currentTaskId, currentVariantIndex);
        addXP(50);
        recordAnswer(true);
        
        solutionText.textContent = currentVariant.solution;
        taskSolution.style.display = 'block';
        
        checkBtn.disabled = true;
        setTimeout(() => { checkBtn.disabled = false; }, 2000);
        
        setTimeout(() => {
            const result = getRandomVariant(currentTaskId);
            if (result) {
                currentVariant = result.variant;
                currentVariantIndex = result.index;
                taskText.textContent = currentVariant.text;
                taskAnswer.value = '';
                taskFeedback.style.display = 'none';
                taskSolution.style.display = 'none';
                showTip('Новое задание! Решай дальше! 🚀');
            } else {
                taskFeedback.innerHTML = '🎉 Поздравляю! Ты прошёл все варианты этого задания!';
                taskFeedback.style.display = 'block';
            }
        }, 2000);
    } else {
        taskFeedback.innerHTML = `❌ Неправильно. Правильный ответ: ${currentVariant.answer}`;
        taskFeedback.className = 'task-feedback wrong';
        taskFeedback.style.display = 'block';
        recordAnswer(false);
        
        solutionText.textContent = currentVariant.solution;
        taskSolution.style.display = 'block';
    }
    saveProgress();
}

function closeTask() {
    taskCard.style.display = 'none';
    currentTaskId = null;
    currentVariant = null;
}

function renderTasks() {
    tasksGrid.innerHTML = '';
    const tasks = subjectsBank[currentSubject].tasks;
    
    for (let i = 1; i <= 21; i++) {
        const btn = document.createElement('button');
        btn.className = 'task-btn';
        btn.textContent = i;
        btn.dataset.task = i;
        
        const completed = completedTasks[currentSubject]?.[i] || [];
        if (completed.length >= tasks[i]?.length) {
            btn.classList.add('completed');
            btn.title = 'Все варианты пройдены!';
        }
        btn.addEventListener('click', () => openTask(i));
        tasksGrid.appendChild(btn);
    }
    
    subjectTitle.textContent = `📌 ${subjectsBank[currentSubject].name} - Выбери задание`;
}

function changeSubject(subject) {
    currentSubject = subject;
    renderTasks();
    
    // Обновляем активную кнопку
    document.querySelectorAll('.subject-btn').forEach(btn => {
        if (btn.dataset.subject === subject) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    closeTask();
    saveProgress();
}

function showTip(msg) {
    if (owlTooltip) {
        owlTooltip.textContent = msg;
        owlTooltip.style.display = 'block';
        setTimeout(() => { owlTooltip.style.display = 'none'; }, 2000);
    }
}

// ==================== АВТОРИЗАЦИЯ ====================
function loadUsers() {
    const saved = localStorage.getItem('egelingo_users');
    return saved ? JSON.parse(saved) : {};
}

function saveUsers(users) {
    localStorage.setItem('egelingo_users', JSON.stringify(users));
}

function register(username, password) {
    username = username.trim();
    const users = loadUsers();
    
    if (users[username]) {
        showAuthError('Пользователь уже существует');
        return false;
    }
    if (password.length < 4) {
        showAuthError('Пароль минимум 4 символа');
        return false;
    }
    
    users[username] = {
        password: btoa(password),
        name: username,
        createdAt: new Date().toISOString()
    };
    saveUsers(users);
    return true;
}

function login(username, password) {
    username = username.trim();
    const users = loadUsers();
    const user = users[username];
    
    if (!user || user.password !== btoa(password)) {
        showAuthError('Неверное имя или пароль');
        return false;
    }
    
    currentUser = { uid: username, name: username };
    localStorage.setItem('egelingo_user', JSON.stringify(currentUser));
    return true;
}

function loadProgress() {
    const saved = localStorage.getItem(`egelingo_progress_${currentUser.uid}`);
    if (saved) {
        const data = JSON.parse(saved);
        currentXP = data.xp || 0;
        completedTasks = data.completedTasks || {};
        userStats = data.userStats || {
            totalSolved: 0, correctAnswers: 0, streak: 0,
            subjectMath: 0, subjectRussian: 0, subjectPhysics: 0, subjectInformatics: 0,
            achievements: []
        };
        currentSubject = data.currentSubject || "math";
        updateLevel();
        updateStats();
    } else {
        currentXP = 0;
        completedTasks = {};
        userStats = {
            totalSolved: 0, correctAnswers: 0, streak: 0,
            subjectMath: 0, subjectRussian: 0, subjectPhysics: 0, subjectInformatics: 0,
            achievements: []
        };
        updateLevel();
        updateStats();
    }
    renderTasks();
    renderAchievements();
    
    // Активируем кнопку текущего предмета
    document.querySelectorAll('.subject-btn').forEach(btn => {
        if (btn.dataset.subject === currentSubject) {
            btn.classList.add('active');
        }
    });
}

function saveProgress() {
    if (!currentUser) return;
    localStorage.setItem(`egelingo_progress_${currentUser.uid}`, JSON.stringify({
        xp: currentXP,
        completedTasks: completedTasks,
        userStats: userStats,
        currentSubject: currentSubject
    }));
}

function showMainApp() {
    authScreen.style.display = 'none';
    mainApp.style.display = 'block';
    usernameSpan.textContent = currentUser.name;
    statsBar.style.display = 'flex';
    loadProgress();
}

function handleLogout() {
    if (confirm('Выйти из аккаунта?')) {
        localStorage.removeItem('egelingo_user');
        currentUser = null;
        authScreen.style.display = 'flex';
        mainApp.style.display = 'none';
        statsBar.style.display = 'none';
    }
}

function showAuthError(msg) {
    const err = document.createElement('div');
    err.className = 'auth-error';
    err.textContent = msg;
    const activeForm = document.querySelector('.auth-form:not([style*="display: none"])');
    if (activeForm) activeForm.appendChild(err);
    setTimeout(() => err.remove(), 3000);
}

// ==================== ИНИЦИАЛИЗАЦИЯ ====================
document.addEventListener('DOMContentLoaded', () => {
    console.log('📱 EgeLingo v3.0 - Мультипредметный тренажёр ЕГЭ');
    
    authScreen = document.getElementById('authScreen');
    mainApp = document.getElementById('mainApp');
    usernameSpan = document.getElementById('username');
    userAvatar = document.getElementById('userAvatar');
    logoutBtn = document.getElementById('logoutBtn');
    tasksGrid = document.getElementById('tasksGrid');
    taskCard = document.getElementById('taskCard');
    closeTaskBtn = document.getElementById('closeTaskBtn');
    taskTitle = document.getElementById('taskTitle');
    taskText = document.getElementById('taskText');
    taskAnswer = document.getElementById('taskAnswer');
    checkBtn = document.getElementById('checkBtn');
    taskFeedback = document.getElementById('taskFeedback');
    taskSolution = document.getElementById('taskSolution');
    solutionText = document.getElementById('solutionText');
    levelBadge = document.getElementById('levelBadge');
    xpFill = document.getElementById('xpFill');
    xpText = document.getElementById('xpText');
    owlTooltip = document.getElementById('owlTooltip');
    statsBar = document.getElementById('statsBar');
    totalTasksSpan = document.getElementById('totalTasks');
    correctPercentSpan = document.getElementById('correctPercent');
    streakSpan = document.getElementById('streak');
    subjectTitle = document.getElementById('subjectTitle');
    achievementsGrid = document.getElementById('achievementsGrid');
    
    if (closeTaskBtn) closeTaskBtn.addEventListener('click', closeTask);
    if (checkBtn) checkBtn.addEventListener('click', checkAnswer);
    if (logoutBtn) logoutBtn.addEventListener('click', handleLogout);
    if (taskAnswer) taskAnswer.addEventListener('keypress', (e) => { if (e.key === 'Enter') checkAnswer(); });
    
    // Выбор предмета
    document.querySelectorAll('.subject-btn').forEach(btn => {
        btn.addEventListener('click', () => changeSubject(btn.dataset.subject));
    });
    
    const tabs = document.querySelectorAll('.auth-tab');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    
    if (tabs.length) {
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                if (tab.dataset.tab === 'login') {
                    loginForm.style.display = 'block';
                    registerForm.style.display = 'none';
                } else {
                    loginForm.style.display = 'none';
                    registerForm.style.display = 'block';
                }
            });
        });
    }
    
    const loginBtn = document.getElementById('loginBtn');
    const registerBtn = document.getElementById('registerBtn');
    const loginUsername = document.getElementById('loginUsername');
    const loginPassword = document.getElementById('loginPassword');
    const registerUsername = document.getElementById('registerUsername');
    const registerPassword = document.getElementById('registerPassword');
    
    if (loginBtn) {
        loginBtn.addEventListener('click', () => {
            if (login(loginUsername.value, loginPassword.value)) showMainApp();
        });
    }
    
    if (registerBtn) {
        registerBtn.addEventListener('click', () => {
            if (register(registerUsername.value, registerPassword.value)) {
                login(registerUsername.value, registerPassword.value);
                showMainApp();
            }
        });
    }
    
    const saved = localStorage.getItem('egelingo_user');
    if (saved) {
        currentUser = JSON.parse(saved);
        showMainApp();
    }
    
    const owlAvatar = document.getElementById('owlAvatar');
    if (owlAvatar) {
        owlAvatar.addEventListener('click', () => {
            showTip('Выбери предмет и задание для тренировки!');
        });
    }
    
    console.log('✅ Приложение готово!');
});

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/EGE/sw.js').catch(err => console.log('SW not available'));
} "Площадь прямоугольника равна 48, а одна из сторон равна 6. Найдите периметр прямоугольника.", answer: "28", solution: "Вторая сторона = 48 ÷ 6 = 8. Периметр = 2 × (6 + 8) = 28." }
    ],
    4: [
        { text: "Найдите значение выражения: (3²)³ × 3⁵ ÷ 3⁸", answer: "27", solution: "3⁶ × 3⁵ = 3¹¹; 3¹¹ ÷ 3⁸ = 3³ = 27." },
        { text: "Найдите значение выражения: (2⁴)² × 2³ ÷ 2⁷", answer: "16", solution: "2⁸ × 2³ = 2¹¹; 2¹¹ ÷ 2⁷ = 2⁴ = 16." }
    ],
    5: [
        { text: "В случайном эксперименте бросают две игральные кости. Найдите вероятность того, что в сумме выпадет 8 очков.", answer: "0.14", solution: "Всего исходов 36. Благоприятные: (2,6), (3,5), (4,4), (5,3), (6,2) — 5. 5/36 ≈ 0.1389 → 0.14." },
        { text: "В случайном эксперименте бросают две игральные кости. Найдите вероятность того, что в сумме выпадет 9 очков.", answer: "0.11", solution: "Благоприятные: (3,6), (4,5), (5,4), (6,3) — 4. 4/36 = 0.111... → 0.11." }
    ],
    6: [
        { text: "Для квартиры площадью 45 м² заказан натяжной потолок. Цена работы 200 руб/м², стоимость материала 300 руб/м². Сколько рублей составит общая стоимость?", answer: "22500", solution: "(200 + 300) × 45 = 500 × 45 = 22500 руб." }
    ],
    7: [
        { text: "На диаграмме показано количество осадков: январь 50 мм, февраль 45 мм, март 40 мм, апрель 35 мм, май 30 мм. Определите, сколько месяцев количество осадков было менее 40 мм.", answer: "2", solution: "Менее 40 мм: апрель 35, май 30 — 2 месяца." }
    ],
    8: [
        { text: "Выберите верное утверждение: 1) Если два угла треугольника равны, то треугольник равнобедренный. 2) Любой прямоугольник является квадратом. 3) Сумма углов треугольника равна 360°. В ответе укажите номер верного утверждения.", answer: "1", solution: "Только первое верно. Второе: не любой прямоугольник — квадрат. Третье: сумма углов треугольника 180°." }
    ],
    9: [
        { text: "На клетчатой бумаге со стороной клетки 1 см изображён треугольник с основанием 4 см и высотой 3 см. Найдите его площадь.", answer: "6", solution: "S = ½ × 4 × 3 = 6 см²." }
    ],
    10: [
        { text: "Колесо имеет 5 спиц. Найдите угол между соседними спицами.", answer: "72", solution: "360° ÷ 5 = 72°." },
        { text: "Колесо имеет 8 спиц. Найдите угол между соседними спицами.", answer: "45", solution: "360° ÷ 8 = 45°." }
    ],
    11: [
        { text: "Объём куба равен 125. Найдите площадь его поверхности.", answer: "150", solution: "Сторона = ∛125 = 5. S = 6 × 5² = 150." },
        { text: "Объём куба равен 64. Найдите площадь его поверхности.", answer: "96", solution: "Сторона = ∛64 = 4. S = 6 × 4² = 96." }
    ],
    12: [
        { text: "В треугольнике ABC угол C = 90°, AB = 10, AC = 6. Найдите BC.", answer: "8", solution: "BC = √(10² - 6²) = √(100 - 36) = √64 = 8." },
        { text: "В треугольнике ABC угол C = 90°, AB = 13, BC = 5. Найдите AC.", answer: "12", solution: "AC = √(13² - 5²) = √(169 - 25) = √144 = 12." }
    ],
    13: [
        { text: "В правильной четырёхугольной пирамиде сторона основания 6, апофема 5. Найдите площадь боковой поверхности.", answer: "60", solution: "S = ½ × (4×6) × 5 = 60." }
    ],
    14: [
        { text: "Найдите значение выражения: 0.7 × 0.3 + 0.3 × 0.3", answer: "0.3", solution: "0.3 × (0.7 + 0.3) = 0.3 × 1 = 0.3." },
        { text: "Найдите значение выражения: 0.5 × 0.4 + 0.4 × 0.6", answer: "0.44", solution: "0.4 × (0.5 + 0.6) = 0.4 × 1.1 = 0.44." }
    ],
    15: [
        { text: "Билет на поезд стоит 1800 рублей. Школьникам скидка 50%. Сколько рублей стоят билеты для 4 взрослых и 6 школьников?", answer: "12600", solution: "Взрослые: 4 × 1800 = 7200. Школьники: 6 × 900 = 5400. Итого: 12600 руб." }
    ],
    16: [
        { text: "Упростите выражение: (a - 3)² - a(a - 6)", answer: "9", solution: "a² - 6a + 9 - a² + 6a = 9." },
        { text: "Упростите выражение: (b + 2)² - b(b + 4)", answer: "4", solution: "b² + 4b + 4 - b² - 4b = 4." }
    ],
    17: [
        { text: "Решите уравнение: 4ˣ = 64", answer: "3", solution: "4³ = 64 → x = 3." },
        { text: "Решите уравнение: 2ˣ = 32", answer: "5", solution: "2⁵ = 32 → x = 5." }
    ],
    18: [
        { text: "Решите неравенство: 2x - 5 > 3", answer: "4", solution: "2x > 8 → x > 4." },
        { text: "Решите неравенство: 3x + 2 ≤ 11", answer: "3", solution: "3x ≤ 9 → x ≤ 3." }
    ],
    19: [
        { text: "Найдите трёхзначное число, кратное 5 и 9, все цифры которого различны.", answer: "135", solution: "Число кратно 5 → оканчивается на 0 или 5. Кратно 9 → сумма цифр кратна 9. 135: 1+3+5=9." }
    ],
    20: [
        { text: "Из пункта А в пункт В вышел пешеход со скоростью 5 км/ч. Через 2 часа из А в В выехал велосипедист со скоростью 15 км/ч. На каком расстоянии от А велосипедист догонит пешехода?", answer: "15", solution: "За 2 часа пешеход прошёл 10 км. Скорость сближения 10 км/ч → время 1 час. Расстояние = 15 × 1 = 15 км." }
    ],
    21: [
        { text: "Сколько существует различных способов рассадить 5 человек на 5 стульях?", answer: "120", solution: "5! = 120." },
        { text: "Сколько существует различных способов выбрать 3 человека из 5?", answer: "10", solution: "C(5,3) = 5!/(3!2!) = 10." }
    ]
};

// Дополняем задания (минимум 2 варианта для каждого)
for (let i = 1; i <= 21; i++) {
    if (!tasksBank[i]) tasksBank[i] = [];
    while (tasksBank[i].length < 2) {
        tasksBank[i].push({
            text: `Задание ${i}. Решите и введите ответ.`,
            answer: `${i}`,
            solution: `Решение: ${i}.`
        });
    }
}

// ==================== ПЕРЕМЕННЫЕ ====================
let currentUser = null;
let currentXP = 0;
let xpToNextLevel = 100;
let userLevel = 1;
let completedTasks = {};
let currentTaskId = null;
let currentVariant = null;
let currentVariantIndex = null;

// DOM элементы
let authScreen, mainApp, usernameSpan, userAvatar, logoutBtn;
let tasksGrid, taskCard, closeTaskBtn, taskTitle, taskText, taskAnswer, checkBtn;
let taskFeedback, taskSolution, solutionText, levelBadge, xpFill, xpText, owlTooltip;

// ==================== СИСТЕМА УРОВНЕЙ ====================
function updateLevel() {
    let newLevel = 1;
    let neededXP = 100;
    let tempXP = currentXP;
    
    while (tempXP >= neededXP && newLevel < 100) {
        tempXP -= neededXP;
        newLevel++;
        neededXP = Math.floor(neededXP * 1.2);
    }
    
    userLevel = newLevel;
    xpToNextLevel = neededXP;
    currentXP = tempXP;
    
    if (levelBadge) levelBadge.textContent = `📊 Уровень ${userLevel}`;
    if (xpFill) {
        const percent = (currentXP / xpToNextLevel) * 100;
        xpFill.style.width = `${Math.min(percent, 100)}%`;
    }
    if (xpText) xpText.textContent = `${currentXP} / ${xpToNextLevel} XP`;
}

function addXP(amount) {
    currentXP += amount;
    updateLevel();
    saveProgress();
}

// ==================== ЗАДАНИЯ ====================
function getRandomVariant(taskId) {
    const variants = tasksBank[taskId];
    const completed = completedTasks[taskId] || [];
    const available = variants.filter((_, idx) => !completed.includes(idx));
    
    if (available.length === 0) return null;
    
    const randomIndex = Math.floor(Math.random() * available.length);
    const originalIndex = variants.findIndex(v => v === available[randomIndex]);
    return { variant: variants[originalIndex], index: originalIndex };
}

function markTaskCompleted(taskId, variantIndex) {
    if (!completedTasks[taskId]) completedTasks[taskId] = [];
    if (!completedTasks[taskId].includes(variantIndex)) {
        completedTasks[taskId].push(variantIndex);
    }
    
    const btn = document.querySelector(`.task-btn[data-task="${taskId}"]`);
    if (btn && completedTasks[taskId].length >= tasksBank[taskId].length) {
        btn.classList.add('completed');
        btn.title = 'Все варианты пройдены!';
    }
    saveProgress();
}

function openTask(taskId) {
    currentTaskId = taskId;
    const result = getRandomVariant(taskId);
    
    if (!result) {
        showTip('🎉 Все варианты этого задания пройдены!');
        return;
    }
    
    currentVariant = result.variant;
    currentVariantIndex = result.index;
    
    taskTitle.textContent = `Задание ${taskId}`;
    taskText.textContent = currentVariant.text;
    taskAnswer.value = '';
    taskFeedback.className = 'task-feedback';
    taskFeedback.style.display = 'none';
    taskFeedback.innerHTML = '';
    taskSolution.style.display = 'none';
    taskCard.style.display = 'block';
    taskCard.scrollIntoView({ behavior: 'smooth' });
}

function checkAnswer() {
    if (!currentVariant) return;
    
    const userAnswer = taskAnswer.value.trim();
    const isCorrect = userAnswer === currentVariant.answer;
    
    if (isCorrect) {
        taskFeedback.innerHTML = '✅ Правильно! +50 XP';
        taskFeedback.className = 'task-feedback correct';
        taskFeedback.style.display = 'block';
        
        markTaskCompleted(currentTaskId, currentVariantIndex);
        addXP(50);
        
        solutionText.textContent = currentVariant.solution;
        taskSolution.style.display = 'block';
        
        checkBtn.disabled = true;
        setTimeout(() => { checkBtn.disabled = false; }, 2000);
        
        setTimeout(() => {
            const result = getRandomVariant(currentTaskId);
            if (result) {
                currentVariant = result.variant;
                currentVariantIndex = result.index;
                taskText.textContent = currentVariant.text;
                taskAnswer.value = '';
                taskFeedback.style.display = 'none';
                taskSolution.style.display = 'none';
                showTip('Новое задание! Решай дальше! 🚀');
            } else {
                taskFeedback.innerHTML = '🎉 Поздравляю! Ты прошёл все варианты этого задания!';
                taskFeedback.style.display = 'block';
            }
        }, 2000);
    } else {
        taskFeedback.innerHTML = `❌ Неправильно. Правильный ответ: ${currentVariant.answer}`;
        taskFeedback.className = 'task-feedback wrong';
        taskFeedback.style.display = 'block';
        
        solutionText.textContent = currentVariant.solution;
        taskSolution.style.display = 'block';
    }
    saveProgress();
}

function closeTask() {
    taskCard.style.display = 'none';
    currentTaskId = null;
    currentVariant = null;
}

function showTip(msg) {
    if (owlTooltip) {
        owlTooltip.textContent = msg;
        owlTooltip.style.display = 'block';
        setTimeout(() => { owlTooltip.style.display = 'none'; }, 2000);
    }
}

function renderTasks() {
    tasksGrid.innerHTML = '';
    for (let i = 1; i <= 21; i++) {
        const btn = document.createElement('button');
        btn.className = 'task-btn';
        btn.textContent = i;
        btn.dataset.task = i;
        
        const completed = completedTasks[i] || [];
        if (completed.length >= tasksBank[i].length) {
            btn.classList.add('completed');
            btn.title = 'Все варианты пройдены!';
        }
        btn.addEventListener('click', () => openTask(i));
        tasksGrid.appendChild(btn);
    }
}

// ==================== АВТОРИЗАЦИЯ ====================
function loadUsers() {
    const saved = localStorage.getItem('egelingo_users');
    return saved ? JSON.parse(saved) : {};
}

function saveUsers(users) {
    localStorage.setItem('egelingo_users', JSON.stringify(users));
}

function register(username, password) {
    username = username.trim();
    const users = loadUsers();
    
    if (users[username]) {
        showAuthError('Пользователь уже существует');
        return false;
    }
    if (password.length < 4) {
        showAuthError('Пароль минимум 4 символа');
        return false;
    }
    
    users[username] = {
        password: btoa(password),
        name: username,
        createdAt: new Date().toISOString()
    };
    saveUsers(users);
    return true;
}

function login(username, password) {
    username = username.trim();
    const users = loadUsers();
    const user = users[username];
    
    if (!user || user.password !== btoa(password)) {
        showAuthError('Неверное имя или пароль');
        return false;
    }
    
    currentUser = { uid: username, name: username };
    localStorage.setItem('egelingo_user', JSON.stringify(currentUser));
    return true;
}

function loadProgress() {
    const saved = localStorage.getItem(`egelingo_progress_${currentUser.uid}`);
    if (saved) {
        const data = JSON.parse(saved);
        currentXP = data.xp || 0;
        completedTasks = data.completedTasks || {};
        updateLevel();
    } else {
        currentXP = 0;
        completedTasks = {};
        updateLevel();
    }
    renderTasks();
}

function saveProgress() {
    if (!currentUser) return;
    localStorage.setItem(`egelingo_progress_${currentUser.uid}`, JSON.stringify({
        xp: currentXP,
        completedTasks: completedTasks
    }));
}

function showMainApp() {
    authScreen.style.display = 'none';
    mainApp.style.display = 'block';
    usernameSpan.textContent = currentUser.name;
    loadProgress();
}

function handleLogout() {
    if (confirm('Выйти из аккаунта?')) {
        localStorage.removeItem('egelingo_user');
        currentUser = null;
        authScreen.style.display = 'flex';
        mainApp.style.display = 'none';
    }
}

function showAuthError(msg) {
    const err = document.createElement('div');
    err.className = 'auth-error';
    err.textContent = msg;
    const activeForm = document.querySelector('.auth-form:not([style*="display: none"])');
    if (activeForm) activeForm.appendChild(err);
    setTimeout(() => err.remove(), 3000);
}

// ==================== ИНИЦИАЛИЗАЦИЯ ====================
document.addEventListener('DOMContentLoaded', () => {
    console.log('📱 EgeLingo - Тренажёр ЕГЭ по математике');
    
    authScreen = document.getElementById('authScreen');
    mainApp = document.getElementById('mainApp');
    usernameSpan = document.getElementById('username');
    userAvatar = document.getElementById('userAvatar');
    logoutBtn = document.getElementById('logoutBtn');
    tasksGrid = document.getElementById('tasksGrid');
    taskCard = document.getElementById('taskCard');
    closeTaskBtn = document.getElementById('closeTaskBtn');
    taskTitle = document.getElementById('taskTitle');
    taskText = document.getElementById('taskText');
    taskAnswer = document.getElementById('taskAnswer');
    checkBtn = document.getElementById('checkBtn');
    taskFeedback = document.getElementById('taskFeedback');
    taskSolution = document.getElementById('taskSolution');
    solutionText = document.getElementById('solutionText');
    levelBadge = document.getElementById('levelBadge');
    xpFill = document.getElementById('xpFill');
    xpText = document.getElementById('xpText');
    owlTooltip = document.getElementById('owlTooltip');
    
    if (closeTaskBtn) closeTaskBtn.addEventListener('click', closeTask);
    if (checkBtn) checkBtn.addEventListener('click', checkAnswer);
    if (logoutBtn) logoutBtn.addEventListener('click', handleLogout);
    if (taskAnswer) taskAnswer.addEventListener('keypress', (e) => { if (e.key === 'Enter') checkAnswer(); });
    
    const tabs = document.querySelectorAll('.auth-tab');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    
    if (tabs.length) {
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                if (tab.dataset.tab === 'login') {
                    loginForm.style.display = 'block';
                    registerForm.style.display = 'none';
                } else {
                    loginForm.style.display = 'none';
                    registerForm.style.display = 'block';
                }
            });
        });
    }
    
    const loginBtn = document.getElementById('loginBtn');
    const registerBtn = document.getElementById('registerBtn');
    const loginUsername = document.getElementById('loginUsername');
    const loginPassword = document.getElementById('loginPassword');
    const registerUsername = document.getElementById('registerUsername');
    const registerPassword = document.getElementById('registerPassword');
    
    if (loginBtn) {
        loginBtn.addEventListener('click', () => {
            if (login(loginUsername.value, loginPassword.value)) showMainApp();
        });
    }
    
    if (registerBtn) {
        registerBtn.addEventListener('click', () => {
            if (register(registerUsername.value, registerPassword.value)) {
                login(registerUsername.value, registerPassword.value);
                showMainApp();
            }
        });
    }
    
    const saved = localStorage.getItem('egelingo_user');
    if (saved) {
        currentUser = JSON.parse(saved);
        showMainApp();
    }
    
    const owlAvatar = document.getElementById('owlAvatar');
    if (owlAvatar) {
        owlAvatar.addEventListener('click', () => {
            showTip('Выбери задание 1–21 и реши его!');
        });
    }
    
    console.log('✅ Приложение готово!');
});

// Service Worker для PWA
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/EGE/sw.js').catch(err => console.log('SW not available'));
}
