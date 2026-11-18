// --- ПРОВЕРКА АВТОРИЗАЦИИ ---
const currentUser = localStorage.getItem('currentUser');
if (!currentUser) {
    // Если пользователь не вошёл, выкидываем на страницу входа
    window.location.href = 'login.html';
} <footer class="game-footer">
    <a href="index.html" class="btn btn-back">← В меню</a>
    <a href="rules.html" class="btn btn-rules">📖 Правила</a>
    <button id="logoutBtn" class="btn btn-rules" style="background:#ef4444;">🚪 Выйти</button>
</footer>// --- ВЫХОД ИЗ АККАУНТА ---
document.getElementById('logoutBtn').addEventListener('click', () => {
    localStorage.removeItem('currentUser');
    window.location.href = 'index.html';
});
