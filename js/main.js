document.addEventListener("DOMContentLoaded", function () {
    const hubTitle = document.querySelector('header h1');

    hubTitle.addEventListener('click', function () {
        const body = document.body;
        body.style.opacity = '0';
        body.style.transition = 'opacity 1s';
        setTimeout(function () {
            window.location.href = '/';
        }, 500);
    });
});
