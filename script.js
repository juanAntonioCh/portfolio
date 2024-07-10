// (function() {
//     emailjs.init('uFjxCYbIBLMrRp0E5');

//     document.getElementById('contact-form').addEventListener('submit', function(event) {
//         event.preventDefault();

//         this.contact_number.value = Math.random() * 100000 | 0;

//         emailjs.sendForm('service_113i5wm', 'template_j85vdyb', this)
//             .then(function() {
//                 console.log('Correo enviado!');
//                 alert('Correo enviado exitosamente!');
//             }, function(error) {
//                 console.log('Error al enviar el correo:', error);
//                 alert('Hubo un problema al enviar el correo. Por favor, intenta nuevamente.');
//             });
//     });
// })();
