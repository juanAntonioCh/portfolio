document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    const btn = document.getElementById('button');

    window.addEventListener('scroll', function () {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(navLink => {
            navLink.classList.remove('active');
            if (navLink.getAttribute('href').substring(1) === current) {
                navLink.classList.add('active');
            }
        });
    });


    //Envío del correo electrónico
    document.getElementById('form').addEventListener('submit', function (event) {
        event.preventDefault();

        btn.value = 'Enviando...';

        const serviceID = 'default_service';
        const templateID = 'template_j85vdyb';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = 'Enviar Mensaje';
                Swal.fire({
                    icon: 'success',
                    title: '¡Enviado!',
                    text: 'Tu mensaje ha sido enviado exitosamente.',
                    confirmButtonText: 'OK'
                });
                //limpiar los campos del formulario
                this.reset()
            }, (err) => {
                btn.value = 'Enviar Mensaje';
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Algo salió mal. Por favor, intenta de nuevo.',
                    confirmButtonText: 'OK'
                });
                //limpiar los campos del formulario
                this.reset()
            });
    });


});