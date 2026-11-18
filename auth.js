// --- ФУНКЦИЯ ДЛЯ КНОПКИ "ГЛАЗ" (ПОКАЗАТЬ ПАРОЛЬ) ---
function setupPasswordToggle(inputId, buttonId) {
    const input = document.getElementById(inputId);
    const button = document.getElementById(buttonId);
    if (input && button) {
        button.addEventListener('click', () => {
            if (input.type === 'password') {
                input.type = 'text';
                button.textContent = '🙈'; // Закрытый глаз
            } else {
                input.type = 'password';
                button.textContent = '👁️'; // Открытый глаз
            }
        });
    }
}

// Настраиваем кнопки для обеих страниц
setupPasswordToggle('regPassword', 'togglePassword');
setupPasswordToggle('loginPassword', 'toggleLoginPassword');


// --- ЛОГИКА РЕГИСТРАЦИИ ---
const registerForm = document.getElementById('registerForm');
if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Останавливаем перезагрузку страницы

        const nick = document.getElementById('regNick').value.trim();
        const email = document.getElementById('regEmail').value.trim().toLowerCase();
        const password = document.getElementById('regPassword').value;
        const secret = document.getElementById('regSecret').value.trim();

        // Получаем список всех пользователей из localStorage (или пустой массив)
        let users = JSON.parse(localStorage.getItem('users')) || [];

        // Проверяем, есть ли уже такой email
        if (users.some(u => u.email === email)) {
            alert('Пользователь с таким Email уже существует!');
            return;
        }

        // Создаем нового пользователя и добавляем в список
        const newUser = { nick, email, password, secret };
        users.push(newUser);
        
        // Сохраняем обновленный список в браузере
        localStorage.setItem('users', JSON.stringify(users));

        alert(`Регистрация успешна! Добро пожаловать, ${nick}! Теперь войди в аккаунт.`);
        window.location.href = 'login.html'; // Перекидываем на вход
    });
}


// --- ЛОГИКА ВХОДА ---
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = document.getElementById('loginEmail').value.trim().toLowerCase();
        const password = document.getElementById('loginPassword').value;

        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(u => u.email === email && u.password === password);

        if (user) {
            // Сохраняем текущего пользователя (сессию)
            localStorage.setItem('currentUser', JSON.stringify(user));
            alert(`Привет, ${user.nick}! Вход выполнен.`);
            window.location.href = 'game.html'; // Перекидываем в игру
        } else {
            alert('Неверный Email или пароль!');
        }
    });
}
