// Находим форму по классу
const form = document.querySelector('.footer-form');

// Находим поля ввода по новым ID
const inputName = document.querySelector('#footer-name');
const inputEmail = document.querySelector('#footer-email');
const inputPhone = document.querySelector('#footer-phone');

// Функция-обработчик отправки формы
function sendForm(event) {
    // Отменяем перезагрузку страницы при отправке
    event.preventDefault();

    // Получаем значения полей, обрезая лишние пробелы
    const nameValue = inputName.value.trim();
    const emailValue = inputEmail.value.trim();
    const phoneValue = inputPhone.value.trim();

    // Проверка, что все поля заполнены
    if (!nameValue || !emailValue || !phoneValue) {
        console.warn('⚠️ Пожалуйста, заполните все поля формы.');
        return;
    }

    // Формируем сообщение для вывода в консоль
    const message = `📝 Новая заявка:\n\n👤 Имя: ${nameValue}\n📧 Email: ${emailValue}\n📞 Телефон: ${phoneValue}`;

    // Выводим сообщение в консоль
    console.log(message);
}

// Добавляем обработчик события submit на форму
form.addEventListener('submit', sendForm);

const burger = document.querySelector(".burger");
const menu = document.querySelector(".header-center");

burger.addEventListener("click", function() {
    burger.classList.toggle("active");
    menu.classList.toggle("show");
});

// Закрываем меню при клике на любую ссылку внутри
document.querySelectorAll(".header-center a").forEach(link => {
    link.addEventListener("click", function() {
        burger.classList.remove("active");
        menu.classList.remove("show");
    });
});

// Закрываем меню при клике вне его (по оверлею)
menu.addEventListener("click", function(e) {
    if (e.target === menu) { // клик по самому фону (оверлей)
        burger.classList.remove("active");
        menu.classList.remove("show");
    }
});

// === КНОПКА «НАВЕРХ» ===
const topBtn = document.getElementById("topBtn");
window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        topBtn.classList.add('show');
    } else {
        topBtn.classList.remove('show');
    }
});
topBtn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});