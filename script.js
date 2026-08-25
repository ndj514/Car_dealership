// ===== ОБРАБОТЧИК ФОРМЫ =====
const form = document.querySelector('.footer-form');
const inputName = document.querySelector('#footer-name');
const inputEmail = document.querySelector('#footer-email');
const inputPhone = document.querySelector('#footer-phone');

if (form && inputName && inputEmail && inputPhone) {
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const nameValue = inputName.value.trim();
        const emailValue = inputEmail.value.trim();
        const phoneValue = inputPhone.value.trim();

        if (!nameValue || !emailValue || !phoneValue) {
            console.warn('⚠️ Пожалуйста, заполните все поля формы.');
            return;
        }

        const message = `📝 Новая заявка:\n\n👤 Имя: ${nameValue}\n📧 Email: ${emailValue}\n📞 Телефон: ${phoneValue}`;
        console.log(message);

        // Здесь можно добавить отправку на сервер или в Telegram
        // alert('Заявка отправлена! (проверьте консоль)');
    });
}

// ===== БУРГЕР-МЕНЮ =====
const burger = document.querySelector('.burger');
const menu = document.querySelector('.header-center');

if (burger && menu) {
    burger.addEventListener('click', function() {
        burger.classList.toggle('active');
        menu.classList.toggle('show');
    });

    // Закрываем меню при клике на любую ссылку внутри меню
    const links = menu.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', function() {
            burger.classList.remove('active');
            menu.classList.remove('show');
        });
    });
}

// ===== КНОПКА "НАВЕРХ" =====
const topBtn = document.getElementById('topBtn');

if (topBtn) {
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            topBtn.classList.add('show');
        } else {
            topBtn.classList.remove('show');
        }
    });

    topBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}