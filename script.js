document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.menu-button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            button.classList.add('clicked');
            setTimeout(() => {
                button.classList.remove('clicked');
            }, 600);
        });
    });
});
