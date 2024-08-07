function setupPasswordToggle() {
    const toggleButtons = document.querySelectorAll('.toggle-password');

    toggleButtons.forEach(button => {
        const passwordField = button.previousElementSibling;
        const icon = button.querySelector('i');

        // Verifique o estado inicial do campo de senha
        if (passwordField.type === 'password') {
            icon.classList.remove('fa-eye'); // Inicialmente mostra o ícone de olho com barra
            icon.classList.add('fa-eye-slash');
        } else {
            icon.classList.remove('fa-eye-slash');
            icon.classList.add('fa-eye');
        }

        button.addEventListener('click', () => {
            // Alterna o tipo de campo e o ícone
            if (passwordField.type === 'password') {
                passwordField.type = 'text'; // Muda para texto para mostrar a senha
                icon.classList.remove('fa-eye-slash');
                icon.classList.add('fa-eye');
            } else {
                passwordField.type = 'password'; // Muda para senha para ocultá-la
                icon.classList.remove('fa-eye');
                icon.classList.add('fa-eye-slash');
            }
        });
    });
}

// Inicializa a funcionalidade de pré-visualização de senha em todos os campos de senha na página
document.addEventListener('DOMContentLoaded', setupPasswordToggle);
