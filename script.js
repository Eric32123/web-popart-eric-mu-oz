// Galería interactiva: Ampliar imágenes al hacer clic
document.addEventListener('DOMContentLoaded', function() {
    // Scroll suave para navegación
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    const images = document.querySelectorAll('.galeria-item img');
    const modal = document.createElement('div');
    modal.id = 'image-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close">&times;</span>
            <img id="modal-image" src="" alt="">
        </div>
    `;
    document.body.appendChild(modal);

    // Agregar event listeners a las imágenes
    images.forEach(img => {
        img.addEventListener('click', function() {
            const modalImg = document.getElementById('modal-image');
            modalImg.src = this.src;
            modalImg.alt = this.alt;
            modal.style.display = 'flex';
        });
    });

    // Cerrar modal al hacer clic en la X
    document.querySelector('.close').addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Cerrar modal al hacer clic fuera de la imagen
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
