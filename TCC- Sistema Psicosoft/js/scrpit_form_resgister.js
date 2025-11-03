const container = document.getElementById('container');

// Botões do Desktop (do painel roxo)
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

// Botões para o celular (os links de texto)
const registerMobileBtn = document.getElementById('register-mobile');
const loginMobileBtn = document.getElementById('login-mobile');

// Listener para o botão de Registrar (Desktop)
registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

// Listener para o botão de Login (Desktop)
loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

// Listeners para os links do celular
// (e.preventDefault() impede a página de recarregar)
registerMobileBtn.addEventListener('click', (e) => {
    e.preventDefault();
    container.classList.add("active");
});

loginMobileBtn.addEventListener('click', (e) => {
    e.preventDefault();
    container.classList.remove("active");
});