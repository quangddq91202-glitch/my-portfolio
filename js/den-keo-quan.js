document.addEventListener('DOMContentLoaded', () => {
    const lantern = document.getElementById('lantern');
    const modalImage = document.getElementById('modalImage');
    const imgItems = document.querySelectorAll('.img-item');

    lantern.addEventListener('mouseenter', () => {
        lantern.style.animationPlayState = 'paused';
    });

    lantern.addEventListener('mouseleave', () => {
        const isModalOpen = document.querySelector('.modal.show');
        if (!isModalOpen) {
            lantern.style.animationPlayState = 'running';
        }
    });

    imgItems.forEach(img => {
        img.addEventListener('click', function() {
            const src = this.getAttribute('src');
            modalImage.setAttribute('src', src);
            lantern.style.animationPlayState = 'paused';
        });
    });

    const myModalEl = document.getElementById('imageModal');
    myModalEl.addEventListener('hidden.bs.modal', () => {
        lantern.style.animationPlayState = 'running';
    });
});