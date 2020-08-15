// Кнопки меню

document.querySelectorAll('.nav_item')
    .forEach(e => {
        e.addEventListener('click', function (event) {
            event.preventDefault();
            this.parentNode.parentNode.querySelectorAll('.nav_item')
                .forEach(every => {
                    every.classList.remove('active')
                });
            this.classList.add('active');
            document.querySelector('#head_title')
                .innerHTML = this.getAttribute('data-title');
        });
    });