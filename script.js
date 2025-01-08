//--- BACKGROUND DO NAVBAR
// Alterar o estilo da navbar se o usuário rolar a página
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar'); // Seleciona a navbar
   
    // Verifica a posição de rolagem
    if (window.scrollY > 60) {  // Se rolou mais de 60 pixels
        navbar.classList.add('scrolled'); // Adiciona a classe 'scrolled'
    } else {
        navbar.classList.remove('scrolled'); // Remove a classe se menos de 60 pixels
    }
});

//--- ANIMAÇÕES DE VISIBILIDADE
// Seleciona elementos que serão usados para animações 
const project = document.querySelectorAll('.project');
const formation = document.querySelectorAll('.line-item'); 
const aboutImage = document.querySelectorAll('.img-about-content');
const aboutText = document.querySelectorAll('.about-content');
const form = document.querySelectorAll('.contact-form');

// Função para verificar a visibilidade dos elementos
function checkVisible() {
    const triggerBottom = window.innerHeight / 5 * 4; // Define a posição para ativar a animação

    // Função para adicionar/remover classes
    const handleVisibility = (elements) => {
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;

            if (elementTop < triggerBottom) {
                element.classList.add('visible');
            } else {
                element.classList.remove('visible');
            }
        });
    };
    // Chama a função para cada conjunto de elementos
    handleVisibility(project);
    handleVisibility(formation);
    handleVisibility(aboutImage);
    handleVisibility(aboutText);
    handleVisibility(form);
}
//Verificar a visibilidade ao rolar
window.addEventListener('scroll', checkVisible);
checkVisible(); 


//---BOTÃO DE MENU PARA MOBILE 
document.getElementById('button-menu').addEventListener('click', function () {
    const navList = document.getElementById('nav-list');
    const buttonMenu = document.getElementById('button-menu');
    const icon = buttonMenu.querySelector('i');

    // Alternar a visibilidade do menu
    navList.classList.toggle('active');

    // Alternar ícone entre "≡" e "X"
    if (icon.classList.contains('fa-bars')) {
        icon.classList.remove('fa-bars'); // Remove o ícone "≡"
        icon.classList.add('fa-times');  // Adiciona o ícone de "X"
    } else {
        icon.classList.remove('fa-times'); // Remove o ícone de "X"
        icon.classList.add('fa-bars');  // Voltar ao ícone "≡"
    }
});

// Fechar o menu ao clicar em qualquer link
document.querySelectorAll('.nav-list a').forEach(link => {
    link.addEventListener('click', function () {
        const navList = document.getElementById('nav-list'); // Seleciona a lista de navegação
        const buttonMenu = document.getElementById('button-menu'); // Seleciona o botão de menu
        const icon = buttonMenu.querySelector('i');  // Seleciona o ícone dentro do botão de menu

        // Fechar o menu
        navList.classList.remove('active');

        // Mudar o ícone de volta para "≡"
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});