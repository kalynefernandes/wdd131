// Exibe o ano atual no rodapé
const anoAtualSpan = document.getElementById('anoatual');
if (anoAtualSpan) {
    anoAtualSpan.textContent = new Date().getFullYear();
}

// Exibe a data da última modificação
const ultimaModificacaoP = document.getElementById('ultimaModificacao');
if (ultimaModificacaoP) {
    ultimaModificacaoP.textContent = `Última modificação: ${document.lastModified}`;
}

// Controle do Menu Hambúrguer
const btnHamburguer = document.getElementById('menu-hamburguer');
const menuNav = document.getElementById('menu-nav');

if (btnHamburguer && menuNav) {
    btnHamburguer.addEventListener('click', () => {
        menuNav.classList.toggle('mostrar');
        btnHamburguer.innerHTML = menuNav.classList.contains('mostrar') ? '&times;' : '&#9776;';
    });
}